frappe.ui.form.on('Agents', {
    refresh(frm) {
        let currentState = null;

        const updateButton = () => {
            frappe.call({
                method: 'ai_agent.bot_manager.is_bot_running',
                callback(r) {
                    const newState = r.message.running;
                    if (newState !== currentState) {
                        currentState = newState;
                        frm.clear_custom_buttons();

                        const label = currentState ? '🛑 Stop the bots' : '▶️ Start the bots';
                        frm.add_custom_button(label, () => {
                            frappe.call({
                                method: 'ai_agent.bot_manager.toggle_bot',
                                callback: function(response) {
                                    if (response.message) {
                                        frappe.msgprint(response.message);
                                        updateButton();
                                    }
                                }
                            });
                        });
                    }
                }
            });
        };

        updateButton();
        frm._bot_status_timer = setInterval(updateButton, 5000);
    },

    onload: function(frm) {
        frm._bot_status_timer && clearInterval(frm._bot_status_timer);
    }
});
