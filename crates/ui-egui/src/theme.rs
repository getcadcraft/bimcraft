//! Design-token theme for BimCraft, following the Craft-app look
//! (charcoal chrome, single accent, flat cards). Values are our own subset,
//! inspired by the MIT OR Apache-2.0 licensed storytold theme system.

use egui::{Color32, FontId, Style, Visuals};

#[derive(Clone, Copy, Debug)]
pub struct Tokens {
    pub app_bar: Color32,
    pub panel: Color32,
    pub panel_darker: Color32,
    pub input: Color32,
    pub input_border: Color32,
    pub divider: Color32,
    pub text: Color32,
    pub text_dim: Color32,
    pub icon: Color32,
    pub hover: Color32,
    pub tool_active: Color32,
    pub accent: Color32,
    pub accent_strong: Color32,
    pub pasteboard: Color32,
    pub viewport_bg: Color32,
    pub selection: Color32,
    pub danger: Color32,
    pub radius: f32,
    pub font_size: f32,
}

pub const fn tokens() -> Tokens {
    Tokens {
        app_bar: Color32::from_rgb(0x1b, 0x1f, 0x27),
        panel: Color32::from_rgb(0x27, 0x2c, 0x36),
        panel_darker: Color32::from_rgb(0x21, 0x26, 0x2f),
        input: Color32::from_rgb(0x1a, 0x1e, 0x26),
        input_border: Color32::from_rgb(0x3a, 0x41, 0x4e),
        divider: Color32::from_rgb(0x32, 0x39, 0x46),
        text: Color32::from_rgb(0xe4, 0xe9, 0xf1),
        text_dim: Color32::from_rgb(0x99, 0xa2, 0xb2),
        icon: Color32::from_rgb(0xcc, 0xd3, 0xde),
        hover: Color32::from_rgb(0x35, 0x3c, 0x49),
        tool_active: Color32::from_rgb(0x3d, 0x45, 0x53),
        accent: Color32::from_rgb(0xf0, 0x6a, 0x52),
        accent_strong: Color32::from_rgb(0xe8, 0x57, 0x3f),
        pasteboard: Color32::from_rgb(0x1e, 0x22, 0x2a),
        viewport_bg: Color32::from_rgb(0x22, 0x27, 0x30),
        selection: Color32::from_rgb(0x4f, 0x80, 0xff),
        danger: Color32::from_rgb(0xe0, 0x4f, 0x4f),
        radius: 4.0,
        font_size: 13.0,
    }
}

pub const CARD_RADIUS: f32 = 8.0;

pub fn font_ui(size: f32) -> FontId {
    FontId::proportional(size)
}

pub fn font_mono(size: f32) -> FontId {
    FontId::monospace(size)
}

/// Apply the Craft look to the egui style. Call once per frame start.
pub fn apply(ctx: &egui::Context) {
    let t = tokens();
    let mut style = Style { visuals: visuals(&t), ..Style::default() };
    style.spacing.item_spacing = egui::vec2(6.0, 5.0);
    style.spacing.button_padding = egui::vec2(8.0, 3.0);
    style.spacing.interact_size = egui::vec2(24.0, 24.0);
    style.text_styles.insert(egui::TextStyle::Small, font_ui(11.0));
    style.text_styles.insert(egui::TextStyle::Body, font_ui(t.font_size));
    style.text_styles.insert(egui::TextStyle::Button, font_ui(t.font_size));
    style.text_styles.insert(egui::TextStyle::Heading, FontId::proportional(15.0));
    style.text_styles.insert(egui::TextStyle::Monospace, font_mono(11.5));
    style.animation_time = 0.08;
    ctx.set_style(style);
    ctx.set_visuals(visuals(&t));
}

fn visuals(t: &Tokens) -> Visuals {
    let mut v = Visuals::dark();
    v.panel_fill = t.panel;
    v.window_fill = t.panel;
    v.extreme_bg_color = t.input;
    v.faint_bg_color = t.panel_darker;
    v.window_rounding = egui::Rounding::same(10.0);
    v.menu_rounding = egui::Rounding::same(8.0);
    v.widgets.noninteractive.bg_fill = t.panel_darker;
    v.widgets.noninteractive.fg_stroke = egui::Stroke::new(1.0_f32, t.text_dim);
    v.widgets.inactive.bg_fill = t.input;
    v.widgets.inactive.fg_stroke = egui::Stroke::new(1.0_f32, t.text);
    v.widgets.inactive.bg_stroke = egui::Stroke::new(1.0_f32, t.input_border);
    v.widgets.hovered.bg_fill = t.hover;
    v.widgets.hovered.fg_stroke = egui::Stroke::new(1.0_f32, t.text);
    v.widgets.active.bg_fill = t.tool_active;
    v.widgets.active.fg_stroke = egui::Stroke::new(1.0_f32, t.accent);
    v.selection.bg_fill = t.selection.gamma_multiply(0.55);
    v.selection.stroke = egui::Stroke::new(1.0_f32, t.selection);
    v.override_text_color = Some(t.text);
    v
}
