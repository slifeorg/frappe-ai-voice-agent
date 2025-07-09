import os
import asyncio
import frappe
import json
import traceback
import random
import logging
import mimetypes
from telethon import TelegramClient, events, types, functions
from telethon.errors import FileReferenceExpiredError, ChannelInvalidError, ChannelPrivateError
from telethon.tl.types import (
    PeerUser, PeerChannel, MessageMediaPhoto, MessageMediaDocument,
    DocumentAttributeAudio, DocumentAttributeFilename, Document, DocumentEmpty
)
from datetime import datetime, timezone
from queue import Queue
from typing import Any, Optional, Union

# Logging configuration
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('telegram_integration.log')
    ]
)
logger = logging.getLogger(__name__)

# Frappe configuration
logger.debug("Initializing Frappe with site tg-agents.localhost")
frappe.init(site="tg-agents.localhost", sites_path="/workspace/development/frappe-bench/sites")
frappe.connect()
logger.debug("Frappe initialized and connected to the database")

def get_site_name() -> str:
    site_name = "tg-agents.localhost"
    logger.debug(f"Retrieved site name: {site_name}")
    return site_name

def get_site_path(site_name: str, path: str) -> str:
    site_path = os.path.join("/workspace/development/frappe-bench/sites", site_name, path)
    logger.debug(f"Formed site path: {site_path}")
    return site_path

# Client configuration
CLIENTS_CONFIG = [
    {
        "name": "kattiecatlina",
        "telegram_session_name": "bot1_session",
        "telegram_api_id": 26174987,
        "telegram_api_hash": "0f43ed6ea83d736b1ab435202e8b8e1a",
        "telegram_phone": "+14642570863",
        "llm_name": "kattiecatlina",
        "target_channel_id": -4855605163,
        "llm_model": "gpt-4o",
        "llm_profile_prompt": "You are a helpful assistant",
        "llm_prompt": "Respond to the user."
    },
    {
        "name": "KatSweetie",
        "telegram_session_name": "bot2_session",
        "telegram_api_id": 23230119,
        "telegram_api_hash": "c4dee1106e37c14a74bbbd0762d0f687",
        "telegram_phone": "+13863998926",
        "llm_name": "KatSweetie",
        "target_channel_id": -4855605163,
        "llm_model": "gpt-4o",
        "llm_profile_prompt": "You are a helpful assistant",
        "llm_prompt": "Respond to the user."
    }
]
logger.debug(f"Loaded client configuration: {json.dumps([c['name'] for c in CLIENTS_CONFIG], indent=2)}")

# List of bot IDs for filtering
BOT_IDS = set()
SEEN_MESSAGES_FILE = get_site_path(get_site_name(), "seen_messages.json")
logger.debug(f"Path to seen_messages file: {SEEN_MESSAGES_FILE}")

def upload_to_frappe(media_path: str, file_name: str, message_id: str) -> Optional[str]:
    """
    Uploads a media file to Frappe and returns the URL.
    """
    try:
        from frappe.utils.file_manager import save_file
        with open(media_path, 'rb') as file_content:
            file_doc = save_file(file_name, file_content.read(), "Message", message_id)
        # Explicit check for file_url attribute
        file_url = file_doc.get("file_url")
        if isinstance(file_url, (list, tuple)):
            file_url = file_url[0] if file_url else None
        if file_url and isinstance(file_url, str):
            logger.info(f"Uploaded media to Frappe: {file_url} for message_id: {message_id}")
            return file_url
        else:
            logger.error(f"File document does not have file_url for message_id: {message_id}")
            return None
    except Exception as e:
        logger.error(f"Failed to upload media to Frappe for message_id: {message_id}: {str(e)}")
        return None

def format_message(room_id: str, account_id: str, user_id: str, user_name: str, content_text: Optional[str] = None, media_url: Optional[str] = None, is_sent: bool = False):
    logger.debug(f"Formatting message: room_id={room_id}, user_id={user_id}, user_name={user_name}, is_sent={is_sent}")
    message = {
        "room_id": room_id,
        "account_id": account_id,
        "user_id": user_id,
        "user_name": user_name,
        "content": {
            "type": "text" if content_text else "media" if media_url else "unknown",
            "text": {"value": content_text} if content_text else None,
            "media": {"url": media_url} if media_url else None
        },
        "is_sent": is_sent
    }
    logger.debug(f"Formatted message: {json.dumps(message, indent=2, ensure_ascii=False)}")
    return message

def load_seen_messages():
    logger.debug(f"Loading seen_messages from file: {SEEN_MESSAGES_FILE}")
    if os.path.exists(SEEN_MESSAGES_FILE):
        try:
            with open(SEEN_MESSAGES_FILE, 'r') as f:
                seen_messages = {int(k): v for k, v in json.load(f).items()}
                logger.debug(f"Loaded {len(seen_messages)} seen_messages")
                return seen_messages
        except Exception as e:
            logger.error(f"Error loading seen_messages: {str(e)}")
            return {}
    logger.debug("seen_messages file does not exist, returning empty dictionary")
    return {}

def save_seen_messages(seen_messages):
    logger.debug(f"Saving {len(seen_messages)} seen_messages to file: {SEEN_MESSAGES_FILE}")
    try:
        with open(SEEN_MESSAGES_FILE, 'w') as f:
            json.dump(seen_messages, f)
        logger.debug("seen_messages successfully saved")
    except Exception as e:
        logger.error(f"Error saving seen_messages: {str(e)}")

def get_telegram_clients():
    logger.debug("Retrieving Telegram clients")
    clients = []
    site_name = get_site_name()
    for config in CLIENTS_CONFIG:
        logger.debug(f"Processing configuration for client: {config.get('name')}")
        session_name = config.get("telegram_session_name")
        api_id = config.get("telegram_api_id")
        api_hash = config.get("telegram_api_hash")
        phone = config.get("telegram_phone")

        if not all([session_name, api_id, api_hash, phone]):
            logger.warning(f"Skipped agent {config.get('name')}: missing parameters")
            continue
        if not isinstance(api_id, (str, int)):
            logger.warning(f"Invalid api_id type for agent {config.get('name')}: {api_id}")
            continue
        api_id = int(api_id)
        session_name = str(session_name)
        api_hash = str(api_hash)

        session_dir = os.path.join("/workspace/development/frappe-bench/apps/app_example/app_example/telegram_integration/sessions", session_name)
        logger.debug(f"Creating session directory: {session_dir}")
        os.makedirs(session_dir, exist_ok=True)
        session_path = os.path.join(session_dir, f"{session_name}.session")
        logger.debug(f"Session path: {session_path}")
        client = TelegramClient(session_path, api_id, api_hash)
        clients.append({'client': client, 'config': config})
        logger.info(f"Initialized client: {config.get('name')} with path {session_path}")
    logger.debug(f"Returned {len(clients)} clients")
    return clients

async def start_clients():
    logger.debug("Starting Telegram clients")
    clients = get_telegram_clients()
    for client_data in clients:
        client = client_data['client']
        config = client_data['config']
        logger.debug(f"Starting client: {config['name']}")
        try:
            await client.start(phone=lambda: config['telegram_phone'])
            bot_id = str((await client.get_me()).id)
            BOT_IDS.add(bot_id)
            logger.info(f"Client {config['name']} successfully started, bot_id: {bot_id}")
            try:
                channel = await client.get_entity(config['target_channel_id'])
                logger.info(f"Client {config['name']} has access to channel {config['target_channel_id']}")
            except ChannelInvalidError:
                logger.error(f"Client {config['name']} cannot access channel {config['target_channel_id']}: invalid channel ID")
            except ChannelPrivateError:
                logger.error(f"Client {config['name']} cannot access channel {config['target_channel_id']}: channel is private")
            except Exception as e:
                logger.error(f"Error checking channel for {config['name']}: {str(e)}")
        except Exception as e:
            logger.error(f"Error starting client {config['name']}: {str(e)}")
    logger.debug(f"Returned {len(clients)} started clients")
    return clients

async def send_scheduled_message(client_data):
    client = client_data['client']
    config = client_data['config']
    logger.debug(f"Starting message scheduling for client {config['name']}")
    queue = Queue()
    target_channel_id = config.get("target_channel_id")
    logger.info(f"Starting message scheduling for {config['name']} in chat {target_channel_id}")
    while True:
        if queue.empty():
            logger.debug(f"Message queue is empty, filling for {config['name']}")
            for i in range(1, 6):
                queue.put({'chat_id': target_channel_id, 'text': f'Hello {i}' if config['name'] == 'kattiecatlina' else f'Hi {i}'})
            logger.debug(f"Filled queue: {queue.qsize()} messages")
        msg = queue.get()
        chat_id = msg['chat_id']
        logger.debug(f"Sending message to chat {chat_id}: {msg['text']}")
        try:
            entity = await client.get_entity(chat_id)
            bot_id = str((await client.get_me()).id)
            logger.debug(f"Bot ID: {bot_id}, name: {config['name']}")
            sent_message = await client.send_message(entity, msg['text'])
            logger.info(f"Message sent: message_id={sent_message.id}, text={msg['text']}")
            message = format_message(
                room_id=str(chat_id),
                account_id="{{first-seren-id}}",
                user_id=bot_id,
                user_name=config['name'],
                content_text=msg['text'],
                is_sent=True
            )
            logger.debug(f"Formatted JSON message: {json.dumps(message, indent=2, ensure_ascii=False)}")
            room_name = create_or_update_room(str(chat_id), getattr(entity, 'title', "Target Channel"))
            if room_name:
                logger.debug(f"Creating Message record for message_id: {sent_message.id}")
                create_message(
                    chat_id=str(chat_id),
                    room_id=room_name,
                    message_id=str(sent_message.id),
                    text=msg['text'],
                    sender_id=bot_id,
                    sender_name=config['name'],
                    media_url=None,
                    agent_name=config['name']
                )
            else:
                logger.error(f"Failed to create message for message_id {sent_message.id}: Room not created")
        except ChannelInvalidError:
            logger.error(f"Chat {chat_id} is invalid for {config['name']}: check target_channel_id")
        except ChannelPrivateError:
            logger.error(f"Chat {chat_id} is private for {config['name']}: add bot to participants")
        except Exception as e:
            logger.error(f"Error sending message: {str(e)}")
            logger.debug(f"Error traceback: {traceback.format_exc()}")
        await asyncio.sleep(30)
        logger.debug(f"Waiting 30 seconds before next send")

def create_or_update_room(chat_id: str, title: str) -> Optional[str]:
    logger.debug(f"Creating/updating Room: chat_id={chat_id}, title={title}")
    try:
        existing_room = frappe.get_list("Room", filters={"chat_id": chat_id}, fields=["name", "title"])
        logger.debug(f"Room search results: {existing_room}")
        if existing_room:
            room = frappe.get_doc("Room", existing_room[0]["name"])
            logger.debug(f"Found Room: name={room.name}, title={room.get('title')}")
            if room.get("title") != title and title != "Unnamed Room":
                logger.debug(f"Updating title for Room: {title}")
                room.set("title", title)
                room.save(ignore_permissions=True)
                frappe.db.commit()
            return existing_room[0]["name"]
        else:
            room = frappe.new_doc("Room")
            room.set("chat_id", chat_id)
            room.set("title", title or "Unnamed Room")
            room.insert(ignore_permissions=True)
            frappe.db.commit()
            logger.info(f"Created Room with chat_id: {chat_id}, name: {room.name}, title: {title}")
            return room.name
    except Exception as e:
        logger.error(f"Error creating/updating Room with chat_id {chat_id}: {str(e)}")
        logger.debug(f"Error traceback: {traceback.format_exc()}")
        return None

def create_or_update_agent(user_id: str, agent_name: str) -> Optional[str]:
    logger.debug(f"Creating/updating Agent: user_id={user_id}, agent_name={agent_name}")
    try:
        existing_agent = frappe.get_list("Agents", filters={"user_id": user_id}, fields=["name", "agent_name"])
        logger.debug(f"Agent search results: {existing_agent}")
        if existing_agent:
            agent_name = existing_agent[0]["name"]
            if frappe.db.exists("Agents", agent_name):
                logger.info(f"Found Agent with user_id: {user_id}, name: {agent_name}")
                return agent_name
            else:
                logger.error(f"Agent {agent_name} not found in database despite being listed")
        else:
            agent = frappe.new_doc("Agents")
            agent.set("user_id", user_id)
            agent.set("agent_name", agent_name)
            agent.set("title", agent_name)
            agent.insert(ignore_permissions=True)
            frappe.db.commit()
            frappe.clear_cache()
            if frappe.db.exists("Agents", agent.name):
                logger.info(f"Created Agent with user_id: {user_id}, name: {agent.name}")
                return agent.name
            else:
                logger.error(f"Agent {agent.name} not found after insertion")
                return None
    except Exception as e:
        logger.error(f"Error creating/updating Agent with user_id {user_id}: {str(e)}")
        logger.debug(f"Error traceback: {traceback.format_exc()}")
        return None

def create_message(chat_id: str, room_id: Optional[str], message_id: str, text: Optional[str], sender_id: str, sender_name: str, media_url: Optional[str] = None, agent_name: Optional[str] = None, media_type: Optional[str] = None):
    logger.debug(f"Creating Message: message_id={message_id}, chat_id={chat_id}, room_id={room_id}, sender_id={sender_id}, sender_name={sender_name}, agent_name={agent_name}, media_url={media_url}, media_type={media_type}")
    try:
        if not room_id:
            logger.warning(f"Room with chat_id {chat_id} not found. Creating new...")
            room_id = create_or_update_room(chat_id, "Dynamic Room")
            if not room_id:
                logger.error(f"Failed to create Room for chat_id {chat_id}")
                raise ValueError(f"Failed to create Room for chat_id {chat_id}")

        existing_message = frappe.get_list("Message", filters={"message_id": message_id}, fields=["name"])
        logger.debug(f"Checking Message existence: {existing_message}")
        if not existing_message:
            message = frappe.new_doc("Message")
            message.set("message_id", message_id)
            message.set("room_id", room_id)
            message.set("sender_name", sender_name or "UnknownUser")
            logger.debug(f"Set sender_name: {message.get('sender_name')}")

            if agent_name:
                agent = create_or_update_agent(sender_id, agent_name)
                if agent and frappe.db.exists("Agents", agent):
                    agent_doc = frappe.get_doc("Agents", agent)
                    if agent_doc:
                        message.set("agent", agent_doc.name)
                        logger.info(f"Linked agent {agent_doc.name} to message {message_id}")
                    else:
                        logger.error(f"Agent document {agent} not found after retrieval")
                else:
                    logger.error(f"Failed to link agent {agent_name} to message {message_id}: Agent not found in database")

            if media_url and media_type:
                logger.info(f"Processing media for message_id={message_id}: media_url={media_url}, media_type={media_type}")
                message.set("media_url", media_url)
                # Generate HTML for media
                if media_type in ["photo", "image"]:
                    html_content = f'<img src="{media_url}" alt="Media" style="max-width: 197px; max-height: 141px; object-fit: contain;">'
                    logger.info(f"Created media_html for photo message_id={message_id}: {html_content}")
                elif media_type == "voice":
                    html_content = f'<audio controls><source src="{media_url}" type="audio/ogg">Your browser does not support the audio element.</audio>'
                    logger.info(f"Created media_html for voice message message_id={message_id}: {html_content}")
                elif media_type == "document":
                    html_content = f'<a href="{media_url}" target="_blank">Download Document</a>'
                    logger.info(f"Created media_html for document message_id={message_id}: {html_content}")
                else:
                    html_content = f'<a href="{media_url}" target="_blank">Media Link</a>'
                    logger.info(f"Created media_html for other media type message_id={message_id}: {html_content}")
                message.set("media_html", html_content)
                message.set("text", None)
                logger.debug(f"Set media_html: {html_content}")
            else:
                logger.warning(f"No media_url or media_type for message_id={message_id}, text={text}")
                message.set("text", text or "No text")
                if media_url is None and text == "Media unavailable (FileReferenceExpiredError)":
                    html_content = "<p>Media unavailable due to download error</p>"
                    logger.info(f"Set media_html for unavailable media message_id={message_id}: {html_content}")
                else:
                    html_content = None
                    logger.info(f"media_html not set for message_id={message_id}, as media is absent or text does not indicate an error")
                message.set("media_html", html_content)
                message.set("media_url", None)
                logger.debug(f"Set text: {message.get('text')}")

            frappe.db.commit()
            message.insert(ignore_permissions=True)
            frappe.db.commit()
            logger.info(f"Created Message with message_id: {message_id} for room_id: {room_id}")
        else:
            logger.info(f"Message with message_id: {message_id} already exists")
    except Exception as e:
        logger.error(f"Error creating Message with message_id {message_id}: {str(e)}")
        logger.debug(f"Error traceback: {traceback.format_exc()}")

async def try_download_media(client, message, message_id: str, max_attempts: int = 3):
    logger.debug(f"Attempting to download media for message_id: {message_id}, max attempts: {max_attempts}")
    temp_file = f"temp_media_{message_id}_{random.randint(1, 10000)}.bin"
    media_type = None
    file_name = None
    mime_type = None

    try:
        if not hasattr(message, 'media') or message.media is None:
            logger.warning(f"No media found for message_id: {message_id}")
            return None, None, temp_file

        # Check for self-destructing media (TTL)
        if hasattr(message.media, 'ttl_seconds') and message.media.ttl_seconds is not None:
            logger.warning(f"Message {message_id} contains self-destructing media with TTL {message.media.ttl_seconds}. Skipping download.")
            return None, None, temp_file

        if isinstance(message.media, types.MessageMediaPhoto):
            media_type = "photo"
            file_name = f"photo_{message_id}.jpg"
            mime_type = "image/jpeg"
            logger.debug(f"Set media_type: {media_type}, file_name: {file_name}, mime_type: {mime_type}")
        elif isinstance(message.media, types.MessageMediaDocument):
            doc = message.media.document
            if isinstance(doc, DocumentEmpty):
                logger.warning(f"Document is empty for message_id: {message_id}")
                return None, None, temp_file
            mime_type = getattr(doc, 'mime_type', None)
            logger.debug(f"Document MIME type: {mime_type}")
            if mime_type and mime_type.startswith('image/'):
                media_type = "image"
                # Search for file name only in DocumentAttributeFilename
                file_name = next(
                    (attr.file_name for attr in getattr(doc, 'attributes', []) if isinstance(attr, DocumentAttributeFilename)),
                    None
                )
                if not file_name:
                    file_name = f"image_{message_id}.{mime_type.split('/')[-1] if mime_type else 'bin'}"
                logger.debug(f"Found file_name: {file_name}")
            elif mime_type and mime_type.startswith('audio/'):
                media_type = "voice"
                file_name = f"voice_{message_id}.ogg"
                logger.debug(f"Found file_name: {file_name}")
            else:
                media_type = "document"
                # Search for file name only in DocumentAttributeFilename
                file_name = next(
                    (attr.file_name for attr in getattr(doc, 'attributes', []) if isinstance(attr, DocumentAttributeFilename)),
                    None
                )
                if not file_name:
                    file_name = f"document_{message_id}.{mime_type.split('/')[-1] if mime_type else 'bin'}"
                logger.debug(f"Found file_name: {file_name}")
            logger.debug(f"Set media_type: {media_type}, file_name: {file_name}, mime_type: {mime_type}")
        else:
            logger.warning(f"Unsupported media type for message_id: {message_id}: {type(message.media)}")
            return None, None, temp_file

        for attempt in range(1, max_attempts + 1):
            try:
                logger.info(f"Starting direct file download in chunks of 131072 at 0, stride 131072")
                media_path = await client.download_media(message, file=temp_file)
                if media_path:
                    file_url = upload_to_frappe(media_path, file_name, message_id)
                    if file_url:
                        logger.info(f"Uploaded media to Frappe: {file_url} for message_id: {message_id}")
                        return file_url, media_type, temp_file
                    else:
                        logger.error(f"Failed to upload media to Frappe for message_id: {message_id}")
                        return None, None, temp_file
                else:
                    logger.warning(f"No media path returned for message_id: {message_id} on attempt {attempt}")
            except FileReferenceExpiredError as e:
                logger.warning(f"FileReferenceExpiredError on attempt {attempt} for message_id: {message_id}")
                if attempt == max_attempts:
                    logger.error(f"Failed to download media after {max_attempts} attempts for message_id: {message_id}")
                    return None, None, temp_file
                logger.debug(f"Attempting to refresh media reference for message_id: {message_id}")
                try:
                    updated_messages = await client(functions.messages.GetMessagesRequest(id=[message.id]))
                    logger.debug(f"Updated messages for message_id: {message_id}: {updated_messages}")
                    if updated_messages and hasattr(updated_messages, 'messages') and updated_messages.messages:
                        message = updated_messages.messages[0]
                        if not hasattr(message, 'media') or message.media is None:
                            logger.error(f"Updated message for message_id: {message_id} has no media")
                            return None, None, temp_file
                    else:
                        logger.error(f"Failed to retrieve updated message for message_id: {message_id}: No valid message")
                        return None, None, temp_file
                except Exception as e:
                    logger.error(f"Error refreshing media for message_id: {message_id}: {str(e)}")
                    logger.debug(f"Traceback: {traceback.format_exc()}")
                    return None, None, temp_file
            except Exception as e:
                logger.error(f"Error downloading media for message_id: {message_id} on attempt {attempt}: {str(e)}")
                logger.debug(f"Traceback: {traceback.format_exc()}")
                if attempt == max_attempts:
                    logger.error(f"Failed to download media after {max_attempts} attempts for message_id: {message_id}")
                    return None, None, temp_file

        logger.error(f"Failed to download media after {max_attempts} attempts for message_id: {message_id}")
        return None, None, temp_file

    except Exception as e:
        logger.error(f"Unexpected error in try_download_media for message_id: {message_id}: {str(e)}")
        logger.debug(f"Traceback: {traceback.format_exc()}")
        return None, None, temp_file

    finally:
        if os.path.exists(temp_file):
            try:
                os.remove(temp_file)  # Correct call without message_id
                logger.info(f"Removed temporary file: {temp_file}")
            except Exception as e:
                logger.error(f"Failed to remove temporary file {temp_file}: {str(e)}")

async def process_message(event, client_name: str, client, seen_messages: dict, start_time: datetime):
    message = event.message
    logger.debug(f"Processing message: message_id={message.id}, client_name={client_name}")
    date = message.date.replace(tzinfo=timezone.utc) if message.date else datetime.min.replace(tzinfo=timezone.utc)
    if date >= start_time and message.sender_id != int((await client.get_me()).id):
        message_id = message.id
        if message_id not in seen_messages:
            text = message.text or ""
            media_url = None
            media_type = None
            temp_file = None

            if message.media:
                logger.debug(f"Processing media for message_id: {message.id}")
                media_url, media_type, temp_file = await try_download_media(client, message, str(message.id))
                if not media_url:
                    text = "Media unavailable (FileReferenceExpiredError)"

            sender = await message.get_sender()
            user_name = (sender.username or sender.first_name or "UnknownUser") if sender else "UnknownUser"
            user_id = str(message.sender_id) if message.sender_id else "unknown"
            chat_id = str(event.chat_id)
            chat_title = getattr(event.chat, 'title', "Unnamed Room")

            content_type = "media" if media_url else "text"
            content = {
                "type": content_type,
                "text": {"value": text} if content_type == "text" else None,
                "media": {"url": media_url} if content_type == "media" else None
            }
            msg = {
                "room_id": chat_id,
                "account_id": "{{first-seren-id}}",
                "user_id": user_id,
                "user_name": user_name,
                "content": content,
                "is_sent": False
            }
            logger.debug(f"Formatted JSON message: {json.dumps(msg, indent=2, ensure_ascii=False)}")
            room_name = create_or_update_room(chat_id, chat_title)
            if room_name:
                logger.debug(f"Creating Message record for message_id: {message_id}")
                create_message(
                    chat_id=chat_id,
                    room_id=room_name,
                    message_id=str(message_id),
                    text=text,
                    sender_id=user_id,
                    sender_name=user_name,
                    media_url=media_url,
                    agent_name=client_name,
                    media_type=media_type
                )
            else:
                logger.error(f"Failed to create message for message_id {message_id}: Room not created")
            if temp_file and os.path.exists(temp_file):
                try:
                    os.remove(temp_file)
                    logger.info(f"Removed temporary file: {temp_file}")
                except Exception as e:
                    logger.error(f"Error removing temporary file {temp_file}: {str(e)}")
            seen_messages[message_id] = True
            logger.debug(f"Added message_id {message_id} to seen_messages")
        else:
            logger.debug(f"Message with message_id {message_id} already processed")

async def listen_messages(start_time: datetime, seen_messages: dict, clients: list):
    logger.debug(f"Starting message listening: start_time={start_time}, client count={len(clients)}")
    if not clients:
        logger.error("No Telegram clients configured")
        return
    for client_data in clients:
        client = client_data['client']
        config = client_data['config']
        logger.debug(f"Initializing listener for client: {config['name']}")
        agent_name = create_or_update_agent(str((await client.get_me()).id), config['name'])
        logger.debug(f"Agent creation/update result: {agent_name}")
        asyncio.create_task(send_scheduled_message(client_data))
        @client.on(events.NewMessage)
        async def handler(event):
            logger.debug(f"Received new message for client {config['name']}")
            await process_message(event, config['name'], client, seen_messages, start_time)
    logger.debug("Waiting for message events")
    await asyncio.Event().wait()

async def main(seen_messages: dict):
    logger.debug("Starting main function")
    start_time = datetime.now(timezone.utc)
    logger.debug(f"Set start_time: {start_time}")
    clients = await start_clients()
    logger.debug(f"Started clients: {len(clients)}")
    await listen_messages(start_time, seen_messages, clients)
    logger.debug("Main function completed")
    return seen_messages

def run_telegram_bot():
    logger.info("Starting Telegram bot")
    seen_messages = load_seen_messages()
    try:
        asyncio.run(main(seen_messages))
    except KeyboardInterrupt:
        logger.info("Received KeyboardInterrupt, saving seen_messages")
        save_seen_messages(seen_messages)
        logger.info("Session terminated and saved")
    except Exception as e:
        logger.error(f"Error running bot: {str(e)}")
        logger.debug(f"Error traceback: {traceback.format_exc()}")

if __name__ == "__main__":
    logger.debug("Starting telegram_integration.py script")
    run_telegram_bot()