// Store the last audio_url value
let last_audio_url = null;

frappe.ui.form.on('Conversation', {
    refresh(frm) {
        if (frm.doc.audio_url && frm.doc.audio_url !== last_audio_url) {
            update_vue_component(frm.doc.audio_url);
        }
    },
    // audio_url: update_widget,
    onload_post_render(frm) {
        frm.fields_dict.audio_url.$input.on('blur', function() {
            update_widget(frm)
        });
    }
});

function update_widget(frm) {
    if (is_valid_url_field(frm, 'audio_url') && frm.doc.audio_url !== last_audio_url) {
        update_vue_component(frm.doc.audio_url);
    } else {
        frappe.show_alert({
            message:__('Please, enter a valid URL'),
            indicator:'yellow'
        }, 5);
    }
}

function is_valid_url_field(frm, fieldname) {
    const field = frm.fields_dict[fieldname];
    if (!field) return false;

    const value = frm.doc[fieldname];
    if (typeof value !== 'string' || !value.trim()) return false;

    const url = value.trim();

    // Accepts full URLs (http, https) or relative paths starting with /
    const urlPattern = /^(https?:\/\/[\w\-]+(\.[\w\-]+)+(:\d+)?(\/[\w\-./?%&=]*)?|\/[\w\-./?%&=]*)$/i;

    return urlPattern.test(url);
}


function update_vue_component(audio_url) {
    if (!audio_url) return;
    last_audio_url = audio_url;
    const html = `
        <script type="module" src="/assets/ai_agent/vue_widget/subtitle-wave-player.js"></script>
        <subtitle-wave-player audio-url="${audio_url}"></subtitle-wave-player>
    `;
    cur_frm.fields_dict.vue_component.$wrapper.html(html);
}