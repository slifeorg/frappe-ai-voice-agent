import os
import asyncio
import frappe
from frappe.utils.file_manager import save_file
import json
import random
import logging
import mimetypes
import traceback
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
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('telegram_integration.log')
    ]
)
logger = logging.getLogger(__name__)

# Frappe configuration
frappe.init(site="tg-agents.localhost", sites_path="/workspace/development/frappe-bench/sites")
frappe.connect()

def get_site_name() -> str:
    return "tg-agents.localhost"

def get_site_path(site_name: str, path: str) -> str:
    return os.path.join("/workspace/development/frappe-bench/sites", site_name, path)

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

# List of bot IDs for filtering
BOT_IDS = set()
SEEN_MESSAGES_FILE = get_site_path(get_site_name(), "seen_messages.json")

def upload_to_frappe(media_path: str, file_name: str, message_id: str) -> Optional[str]:
    sanitized_file_name = file_name.replace(" ", "_").replace(":", "_")
    unique_file_name = f"{message_id}_{sanitized_file_name}"
    logger.info(f"Calling save_file with file_name={unique_file_name}, doctype=Message, docname={message_id}")
    try:
        with open(media_path, 'rb') as file_content:
            file_doc = save_file(unique_file_name, file_content.read(), "Message", message_id, is_private=0)
            logger.info(f"File saved: {file_doc}")
            file_url = file_doc.get("file_url")
            if isinstance(file_url, (list, tuple)):
                file_url = file_url[0] if file_url else None
            if file_url:
                logger.info(f"File saved: file_name={file_doc.get('file_name')}, file_url={file_url}")
                return file_url
            logger.error(f"Failed to get file_url for message_id={message_id}")
            return None
    except Exception as e:
        logger.error(f"Error uploading file for message_id={message_id}: {str(e)}")
        return None

def format_message(room_id: str, account_id: str, user_id: str, user_name: str, content_text: Optional[str] = None, media_url: Optional[str] = None, is_sent: bool = False):
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
    logger.info(f"Formatted JSON message: {json.dumps(message, indent=2, ensure_ascii=False)}")
    return message

def load_seen_messages():
    if os.path.exists(SEEN_MESSAGES_FILE):
        try:
            with open(SEEN_MESSAGES_FILE, 'r') as f:
                return {int(k): v for k, v in json.load(f).items()}
        except Exception as e:
            logger.error(f"Error loading seen_messages: {str(e)}")
            return {}
    return {}

def save_seen_messages(seen_messages):
    try:
        with open(SEEN_MESSAGES_FILE, 'w') as f:
            json.dump(seen_messages, f)
        logger.info(f"Successfully saved seen_messages to {SEEN_MESSAGES_FILE}")
    except Exception as e:
        logger.error(f"Error saving seen_messages: {str(e)}")

def get_telegram_clients():
    clients = []
    site_name = get_site_name()
    for config in CLIENTS_CONFIG:
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
        os.makedirs(session_dir, exist_ok=True)
        session_path = os.path.join(session_dir, f"{session_name}.session")
        client = TelegramClient(session_path, api_id, api_hash)
        clients.append({'client': client, 'config': config})
        logger.info(f"Selected session for client: {config.get('name')} with path {session_path}")
    return clients

async def start_clients():
    clients = get_telegram_clients()
    for client_data in clients:
        client = client_data['client']
        config = client_data['config']
        logger.info(f"Starting client session: {config['name']}")
        try:
            await client.start(phone=lambda: config['telegram_phone'])
            bot_id = str((await client.get_me()).id)
            BOT_IDS.add(bot_id)
            logger.info(f"Client session {config['name']} successfully started, bot_id: {bot_id}")
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
    return clients

async def send_scheduled_message(client_data):
    client = client_data['client']
    config = client_data['config']
    queue = Queue()
    target_channel_id = config.get("target_channel_id")
    logger.info(f"Starting message scheduling for {config['name']} in chat {target_channel_id}")
    while True:
        if queue.empty():
            for i in range(1, 6):
                queue.put({'chat_id': target_channel_id, 'text': f'Hello {i}' if config['name'] == 'kattiecatlina' else f'Hi {i}'})
        msg = queue.get()
        chat_id = msg['chat_id']
        try:
            entity = await client.get_entity(chat_id)
            bot_id = str((await client.get_me()).id)
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
            room_name = create_or_update_room(str(chat_id), getattr(entity, 'title', "Target Channel"))
            if room_name:
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
        await asyncio.sleep(30)

def create_or_update_room(chat_id: str, title: str) -> Optional[str]:
    try:
        existing_room = frappe.get_list("Room", filters={"chat_id": chat_id}, fields=["name", "title"])
        if existing_room:
            room = frappe.get_doc("Room", existing_room[0]["name"])
            if room.get("title") != title and title != "Unnamed Room":
                room.set("title", title)
                room.save(ignore_permissions=True)
                frappe.db.commit()
                logger.info(f"Updated Room with chat_id: {chat_id}, name: {room.name}, new title: {title}")
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
        return None

def create_or_update_agent(user_id: str, agent_name: str) -> Optional[str]:
    try:
        existing_agent = frappe.get_list("Agents", filters={"user_id": user_id}, fields=["name", "agent_name"])
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
        return None

def create_message(chat_id: str, room_id: Optional[str], message_id: str, text: Optional[str], sender_id: str, sender_name: str, media_url: Optional[str] = None, agent_name: Optional[str] = None, media_type: Optional[str] = None):
    try:
        # Initialize _realtime_log to prevent AttributeError
        if not hasattr(frappe.local, '_realtime_log'):
            frappe.local._realtime_log = []

        if not room_id:
            logger.warning(f"Room with chat_id {chat_id} not found. Creating new...")
            room_id = create_or_update_room(chat_id, "Dynamic Room")
            if not room_id:
                logger.error(f"Failed to create Room for chat_id {chat_id}")
                raise ValueError(f"Failed to create Room for chat_id {chat_id}")

        existing_message = frappe.get_list("Message", filters={"message_id": message_id}, fields=["name", "media_url"])
        if existing_message and not media_url:
            logger.info(f"Message with message_id: {message_id} already exists and no new media to update")
            return
        elif existing_message and media_url:
            logger.info(f"Updating existing Message with message_id: {message_id} with new media_url: {media_url}")
            message = frappe.get_doc("Message", existing_message[0]["name"])
        else:
            message = frappe.new_doc("Message")

        message.set("message_id", message_id)
        message.set("room_id", room_id)
        message.set("sender_name", sender_name or "UnknownUser")

        if agent_name:
            agent = create_or_update_agent(sender_id, agent_name)
            if agent and frappe.db.exists("Agents", agent):
                message.set("agent", agent)
                logger.info(f"Linked agent {agent} to message {message_id}")
            else:
                logger.error(f"Failed to link agent {agent_name} to message {message_id}: Agent not found")

        if media_url and media_type:
            logger.info(f"Saving media message for message_id={message_id}: media_url={media_url}, media_type={media_type}")
            message.set("media_url", media_url)
            if media_type == "image":
                html_content = f'<img src="{media_url}" alt="Media" style="max-width: 197px; max-height: 141px; object-fit: contain;">'
            elif media_type == "voice":
                html_content = f'<audio controls><source src="{media_url}" type="audio/ogg">Your browser does not support the audio element.</audio>'
            else:
                html_content = f'<a href="{media_url}" target="_blank">Media Link</a>'
            message.set("media_html", html_content)
            # Preserve the text (caption) even with media
            message.set("text", text or "")
        else:
            message.set("text", text or "No text")
            if media_url is None and text == "Media unavailable (FileReferenceExpiredError)":
                html_content = "<p>Media unavailable due to download error</p>"
            else:
                html_content = None
            message.set("media_html", html_content)
            message.set("media_url", None)

        # Log message details before saving
        message_dict = {
            "message_id": message.get("message_id"),
            "room_id": message.get("room_id"),
            "sender_name": message.get("sender_name"),
            "text": message.get("text"),
            "media_url": message.get("media_url"),
            "media_html": message.get("media_html"),
            "agent": message.get("agent")
        }
        logger.info(f"Preparing to save Message with message_id={message_id}: {json.dumps(message_dict, indent=2, ensure_ascii=False)}")

        # Save or update the message
        if existing_message:
            message.save(ignore_permissions=True)
            logger.info(f"Successfully updated Message with message_id: {message_id}")
        else:
            message.insert(ignore_permissions=True)
            logger.info(f"Successfully created Message with message_id: {message_id}")
        frappe.db.commit()

    except Exception as e:
        logger.error(f"Failed to create/update Message with message_id {message_id}: {str(e)}\nFull traceback: {traceback.format_exc()}")

async def try_download_media(client, message, message_id: str, max_attempts: int = 3):
    temp_file = f"temp_media_{message_id}_{random.randint(1, 10000)}.bin"
    media_type = None
    file_name = None
    mime_type = None

    try:
        if not hasattr(message, 'media') or message.media is None:
            logger.info(f"No media found for message_id: {message_id}")
            return None, None, temp_file

        if hasattr(message.media, 'ttl_seconds') and message.media.ttl_seconds is not None:
            logger.warning(f"Message {message_id} contains self-destructing media with TTL {message.media.ttl_seconds}. Skipping download.")
            return None, None, temp_file

        if isinstance(message.media, types.MessageMediaPhoto):
            media_type = "image"
            mime_type = getattr(message.media.photo, 'mime_type', 'image/jpeg')
            extension = mimetypes.guess_extension(mime_type) or '.bin'
            file_name = f"photo_{message_id}{extension}"
            logger.info(f"Detected image media for message_id: {message_id}, mime_type: {mime_type}, file_name: {file_name}")
        elif isinstance(message.media, types.MessageMediaDocument):
            doc = message.media.document
            if isinstance(doc, DocumentEmpty):
                logger.info(f"Empty document for message_id: {message_id}. Skipping download.")
                return None, None, temp_file
            mime_type = getattr(doc, 'mime_type', None)
            is_voice = any(isinstance(attr, DocumentAttributeAudio) and attr.voice for attr in getattr(doc, 'attributes', []))
            if is_voice and mime_type and mime_type.startswith('audio/'):
                media_type = "voice"
                file_name = f"voice_{message_id}.ogg"
                mime_type = "audio/ogg"
                logger.info(f"Detected voice media for message_id: {message_id}, mime_type: {mime_type}, file_name: {file_name}")
            elif mime_type and mime_type.startswith('image/'):
                media_type = "image"
                file_name = next(
                    (attr.file_name for attr in getattr(doc, 'attributes', []) if isinstance(attr, DocumentAttributeFilename)),
                    None
                )
                extension = mimetypes.guess_extension(mime_type) or '.bin'
                file_name = file_name or f"image_{message_id}{extension}"
                logger.info(f"Detected image media for message_id: {message_id}, mime_type: {mime_type}, file_name: {file_name}")
            else:
                media_type = "document"
                file_name = next(
                    (attr.file_name for attr in getattr(doc, 'attributes', []) if isinstance(attr, DocumentAttributeFilename)),
                    None
                )
                extension = mimetypes.guess_extension(mime_type or "application/octet-stream") or '.bin'
                file_name = file_name or f"document_{message_id}{extension}"
                logger.info(f"Detected document media for message_id: {message_id}, mime_type: {mime_type}, file_name: {file_name}")
        else:
            logger.info(f"Unsupported media type for message_id: {message_id}")
            return None, None, temp_file

        for attempt in range(1, max_attempts + 1):
            try:
                logger.info(f"Attempting to download media for message_id: {message_id}, attempt: {attempt}")
                media_path = await client.download_media(message, file=temp_file)
                if media_path:
                    logger.info(f"Successfully downloaded media to {media_path} for message_id: {message_id}")
                    file_url = upload_to_frappe(media_path, file_name, message_id)
                    if file_url:
                        logger.info(f"Media upload successful for message_id: {message_id}, file_url: {file_url}")
                        return file_url, media_type, temp_file
                    else:
                        logger.error(f"Media upload to Frappe failed for message_id: {message_id}")
                        return None, None, temp_file
                else:
                    logger.error(f"Media download returned no path for message_id: {message_id}")
                    return None, None, temp_file
            except FileReferenceExpiredError as e:
                logger.warning(f"File reference expired for message_id: {message_id} on attempt {attempt}")
                if attempt == max_attempts:
                    logger.error(f"Failed to download media after {max_attempts} attempts for message_id: {message_id}")
                    return None, None, temp_file
                try:
                    logger.info(f"Refetching message for message_id: {message_id}")
                    updated_messages = await client(functions.messages.GetMessagesRequest(id=[message.id]))
                    if updated_messages and hasattr(updated_messages, 'messages') and updated_messages.messages:
                        message = updated_messages.messages[0]
                        if not hasattr(message, 'media') or message.media is None:
                            logger.info(f"Refetched message has no media for message_id: {message_id}")
                            return None, None, temp_file
                    else:
                        logger.error(f"Failed to refetch message for message_id: {message_id}")
                        return None, None, temp_file
                except Exception as e:
                    logger.error(f"Error refreshing media for message_id: {message_id}: {str(e)}")
                    return None, None, temp_file
            except Exception as e:
                logger.error(f"Error downloading media for message_id: {message_id} on attempt {attempt}: {str(e)}")
                if attempt == max_attempts:
                    logger.error(f"Failed to download media after {max_attempts} attempts for message_id: {message_id}")
                    return None, None, temp_file
                await asyncio.sleep(1)  # Brief delay before retry

        return None, None, temp_file

    except Exception as e:
        logger.error(f"Unexpected error in try_download_media for message_id: {message_id}: {str(e)}")
        return None, None, temp_file

    finally:
        if os.path.exists(temp_file):
            try:
                os.remove(temp_file)
                logger.info(f"Removed temporary file: {temp_file}")
            except Exception as e:
                logger.error(f"Failed to remove temporary file {temp_file}: {str(e)}")

async def process_message(event, client_name: str, client, seen_messages: dict, start_time: datetime):
    message = event.message
    message_id = str(message.id)
    date = message.date.replace(tzinfo=timezone.utc) if message.date else datetime.min.replace(tzinfo=timezone.utc)
    if date >= start_time and message.sender_id != int((await client.get_me()).id):
        if message_id not in seen_messages:
            text = message.text or ""
            media_url = None
            media_type = None
            temp_file = None

            if message.media:
                logger.info(f"Processing media message for message_id: {message_id}")
                media_url, media_type, temp_file = await try_download_media(client, message, message_id)
                if not media_url:
                    logger.warning(f"Media unavailable for message_id: {message_id}")
                    return  # Пропускаємо створення повідомлення, якщо медіа недоступне

            sender = await message.get_sender()
            user_name = (sender.username or sender.first_name or "UnknownUser") if sender else "UnknownUser"
            user_id = str(message.sender_id) if message.sender_id else "unknown"
            chat_id = str(event.chat_id)
            chat_title = getattr(event.chat, 'title', "Unnamed Room")

            content_type = "media" if media_url else "text"
            content = {
                "type": content_type,
                "text": {"value": text} if text else None,
                "media": {"url": media_url} if media_url else None
            }
            msg = {
                "room_id": chat_id,
                "account_id": "{{first-seren-id}}",
                "user_id": user_id,
                "user_name": user_name,
                "content": content,
                "is_sent": False
            }
            logger.info(f"Formatted JSON message for message_id: {message_id}: {json.dumps(msg, indent=2, ensure_ascii=False)}")
            room_name = create_or_update_room(chat_id, chat_title)
            if room_name:
                create_message(
                    chat_id=chat_id,
                    room_id=room_name,
                    message_id=message_id,
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
        else:
            logger.info(f"Skipping message_id: {message_id} as it was already processed")
    else:
        logger.debug(f"Ignoring message_id: {message_id}, either from bot or before start_time")

async def listen_messages(start_time: datetime, seen_messages: dict, clients: list):
    if not clients:
        logger.error("No Telegram clients configured")
        return
    for client_data in clients:
        client = client_data['client']
        config = client_data['config']
        agent_name = create_or_update_agent(str((await client.get_me()).id), config['name'])
        asyncio.create_task(send_scheduled_message(client_data))
        @client.on(events.NewMessage)
        async def handler(event):
            await process_message(event, config['name'], client, seen_messages, start_time)
    await asyncio.Event().wait()

async def main(seen_messages: dict):
    start_time = datetime.now(timezone.utc)
    clients = await start_clients()
    await listen_messages(start_time, seen_messages, clients)
    return seen_messages

def run_telegram_bot():
    logger.info("Starting Telegram bot")
    seen_messages = load_seen_messages()
    try:
        asyncio.run(main(seen_messages))
    except KeyboardInterrupt:
        logger.info("Received KeyboardInterrupt, saving seen_messages and stopping session")
        save_seen_messages(seen_messages)
    except Exception as e:
        logger.error(f"Error running bot: {str(e)}")

if __name__ == "__main__":
    run_telegram_bot()