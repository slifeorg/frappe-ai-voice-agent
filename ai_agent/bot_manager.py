import frappe
import subprocess
import os
import signal

# File to store the bot's PID
BOT_PID_FILE = frappe.get_site_path('bot.pid')

# Path to the bot script
BOT_SCRIPT = os.path.join(frappe.get_app_path('ai_agent'), 'telegram_integration', 'telegram_integration.py')


@frappe.whitelist()
def is_bot_running():
    """Checking if bot's working (by PID-file)."""
    if os.path.exists(BOT_PID_FILE):
        try:
            with open(BOT_PID_FILE, 'r') as f:
                pid = int(f.read())
            os.kill(pid, 0) # Check if process is running
            return {"running": True}
        except:
            os.remove(BOT_PID_FILE)
    return {"running": False}


@frappe.whitelist()
def toggle_bot():
    """Starts or stops the bot based on its current state."""
    if os.path.exists(BOT_PID_FILE):
        with open(BOT_PID_FILE, 'r') as f:
            pid = int(f.read())
        try:
            os.kill(pid, signal.SIGTERM)
            os.remove(BOT_PID_FILE)
            return "Bot stopped"
        except ProcessLookupError:
            os.remove(BOT_PID_FILE)
            return "Process not found, PID file removed"
    else:
        try:
            proc = subprocess.Popen(['python3', BOT_SCRIPT])
            with open(BOT_PID_FILE, 'w') as f:
                f.write(str(proc.pid))
            return "Bot started with PID: {}".format(proc.pid)
        except Exception as e:
            return f"Error starting bot: {0}".format(str(e))
