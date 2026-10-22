//! BimCraft chrome: app bar, left tool rail, right dock, status bar.
//! Layout follows the Craft-app pattern: 32px app bar, 48px single-column
//! tool rail, tabbed right dock, 24px status bar.

use crate::theme::{self, Tokens};
use bimcraft_bim::{ElementData, ElementKind};
use bimcraft_engine::{Tool, ViewMode};
use egui::{Color32, Vec2};

// ------------------------------------------------------------- app bar ----

pub fn app_bar(ctx: &egui::Context, app: &mut crate::BimcraftApp) {
    let t = theme::tokens();
    egui::TopBottomPanel::top("app_bar").exact_height(32.0).frame(egui::Frame::none().fill(t.app_bar)).show(ctx, |ui| {
        ui.with_layout(egui::Layout::left_to_right(egui::Align::Center), |ui| {
            ui.add_space(10.0);
            brand_mark(ui, &t);
            ui.separator();
            menu_button(ui, app, "File", &["New Model"], |app, item| {
                if item == "New Model" {
                    app.session_reset();
                }
            });
            menu_button(ui, app, "Edit", &["Undo", "Redo", "Delete"], |app, item| match item {
                "Undo" => app.session.undo(),
                "Redo" => app.session.redo(),
                "Delete" => app.session.delete_selected(),
                _ => {}
            });
            menu_button(ui, app, "View", &["Zoom to Fit"], |app, item| {
                if item == "Zoom to Fit" {
                    app.zoom_to_fit();
                }
            });
            ui.with_layout(egui::Layout::right_to_left(egui::Align::Center), |ui| {
                ui.add_space(10.0);
                mode_switch(ui, app, &t);
            });
        });
    });
}

fn brand_mark(ui: &mut egui::Ui, t: &Tokens) {
    let (rect, _) = ui.allocate_exact_size(Vec2::new(20.0, 20.0), egui::Sense::hover());
    let p = ui.painter();
    p.rect_filled(rect, 5.0, t.accent);
    p.line_segment([rect.center() - Vec2::new(5.0, -4.0), rect.center() + Vec2::new(5.0, 4.0)], egui::Stroke::new(2.2_f32, Color32::WHITE));
    p.line_segment([rect.center() - Vec2::new(0.0, -6.5), rect.center() - Vec2::new(0.0, 1.5)], egui::Stroke::new(1.4_f32, Color32::WHITE));
    ui.label(egui::RichText::new("BimCraft").font(theme::font_ui(14.0)).strong());
}

fn menu_button(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, label: &str, items: &[&str], mut on_pick: impl FnMut(&mut crate::BimcraftApp, &str)) {
    ui.menu_button(label, |ui| {
        for item in items {
            if ui.button(*item).clicked() {
                ui.close_menu();
                on_pick(app, item);
            }
        }
    });
}

fn mode_switch(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, t: &Tokens) {
    let modes = [("2D Plan", ViewMode::Plan2D), ("3D View", ViewMode::Perspective3D)];
    ui.group(|ui| {
        ui.set_min_size(Vec2::new(140.0, 22.0));
        for (label, mode) in modes {
            let active = app.session.view == mode;
            let txt = egui::RichText::new(label).font(theme::font_ui(12.0)).color(if active { Color32::WHITE } else { t.text_dim });
            if ui.add(egui::Button::new(txt).fill(if active { t.tool_active } else { Color32::TRANSPARENT })).clicked() {
                app.session.set_view(mode);
            }
        }
    });
}

// -------------------------------------------------------------- toolbar ---

pub const TOOLBAR_W: f32 = 48.0;

pub fn toolbar(ctx: &egui::Context, app: &mut crate::BimcraftApp) {
    let t = theme::tokens();
    egui::SidePanel::left("tool_rail").exact_width(TOOLBAR_W).resizable(false).frame(egui::Frame::none().fill(t.app_bar)).show(ctx, |ui| {
        ui.add_space(6.0);
        let tools = [
            (Tool::Select, "Select  (S / Esc)"),
            (Tool::Wall, "Wall  (W)"),
            (Tool::Door, "Door  (D)"),
            (Tool::Window, "Window  (N)"),
            (Tool::Slab, "Floor slab  (F)"),
            (Tool::Ceiling, "Ceiling  (C)"),
        ];
        for (tool, tip) in tools {
            let active = app.session.tool == tool;
            let (rect, resp) = ui.allocate_exact_size(Vec2::new(34.0, 34.0), egui::Sense::click());
            let r = egui::Rect::from_min_size(rect.min, Vec2::new(34.0, 34.0));
            if active {
                ui.painter().rect_filled(r.shrink(2.0), theme::CARD_RADIUS * 0.6, t.tool_active);
                ui.painter().rect_stroke(r.shrink(2.0), theme::CARD_RADIUS * 0.6, egui::Stroke::new(1.0_f32, t.accent));
            } else if resp.hovered() {
                ui.painter().rect_filled(r.shrink(2.0), theme::CARD_RADIUS * 0.6, t.hover);
            }
            draw_tool_icon(ui.painter(), r.center(), tool, if active { Color32::WHITE } else { t.icon });
            let clicked = resp.clicked();
            resp.on_hover_text(tip);
            if clicked {
                app.session.set_tool(tool);
            }
        }
    });
}

/// Small vector glyphs for each tool, painted directly (no icon assets needed).
pub fn draw_tool_icon(p: &egui::Painter, c: egui::Pos2, tool: Tool, color: Color32) {
    let s = egui::Stroke::new(1.6_f32, color);
    match tool {
        Tool::Select => {
            p.add(egui::Shape::convex_polygon(
                vec![
                    c + Vec2::new(-4.0, -6.0),
                    c + Vec2::new(4.5, 1.0),
                    c + Vec2::new(0.5, 1.2),
                    c + Vec2::new(2.5, 5.5),
                    c + Vec2::new(0.6, 6.2),
                    c + Vec2::new(-1.3, 1.9),
                    c + Vec2::new(-4.0, 3.6),
                ],
                color,
                egui::Stroke::NONE,
            ));
        }
        Tool::Wall => {
            p.line_segment([c + Vec2::new(-6.0, -3.0), c + Vec2::new(6.0, -3.0)], s);
            p.line_segment([c + Vec2::new(-6.0, 3.0), c + Vec2::new(6.0, 3.0)], s);
            p.line_segment([c + Vec2::new(-6.0, -3.0), c + Vec2::new(-6.0, 3.0)], s);
            p.line_segment([c + Vec2::new(6.0, -3.0), c + Vec2::new(6.0, 3.0)], s);
        }
        Tool::Door => {
            p.line_segment([c + Vec2::new(-5.0, 5.0), c + Vec2::new(5.0, 5.0)], s);
            p.line_segment([c + Vec2::new(-5.0, 5.0), c + Vec2::new(-5.0, -5.0)], s);
            let mut prev = c + Vec2::new(5.0, 5.0);
            for k in 1..=6 {
                let a = std::f32::consts::FRAC_PI_2 * (k as f32 / 6.0);
                let pt = c + Vec2::new(-5.0 + 10.0 * a.cos(), 5.0 - 10.0 * a.sin());
                p.line_segment([prev, pt], s);
                prev = pt;
            }
        }
        Tool::Window => {
            p.rect_stroke(egui::Rect::from_center_size(c, Vec2::new(12.0, 10.0)), 2.0, s);
            p.line_segment([c + Vec2::new(-6.0, 0.0), c + Vec2::new(6.0, 0.0)], s);
            p.line_segment([c + Vec2::new(0.0, -5.0), c + Vec2::new(0.0, 5.0)], s);
        }
        Tool::Slab => {
            p.add(egui::Shape::convex_polygon(
                vec![c + Vec2::new(-6.0, -2.0), c + Vec2::new(1.0, -5.0), c + Vec2::new(6.0, -1.0), c + Vec2::new(-1.0, 2.0)],
                color.gamma_multiply(0.45),
                s,
            ));
            p.line_segment([c + Vec2::new(-6.0, 2.0), c + Vec2::new(-1.0, 5.0)], s);
            p.line_segment([c + Vec2::new(-1.0, 5.0), c + Vec2::new(6.0, 2.0)], s);
        }
        Tool::Ceiling => {
            for k in 0..4 {
                let y = -5.0 + k as f32 * 3.4;
                p.line_segment([c + Vec2::new(-6.0, y), c + Vec2::new(6.0, y)], s);
            }
        }
    }
}

// ----------------------------------------------------------------- dock ---

pub fn dock(ctx: &egui::Context, app: &mut crate::BimcraftApp) {
    let t = theme::tokens();
    egui::SidePanel::right("dock").default_width(260.0).width_range(200.0..=420.0).frame(egui::Frame::none().fill(t.panel)).show(ctx, |ui| {
        ui.add_space(6.0);
        egui::ScrollArea::vertical().show(ui, |ui| {
            card(ui, "Properties", &t, |ui| properties_ui(ui, app, &t));
            card(ui, "Levels", &t, |ui| levels_ui(ui, app, &t));
            card(ui, "Model", &t, |ui| model_ui(ui, app, &t));
        });
    });
}

fn card(ui: &mut egui::Ui, title: &str, t: &Tokens, body: impl FnOnce(&mut egui::Ui)) {
    egui::Frame::none()
        .fill(t.panel)
        .rounding(egui::Rounding::same(theme::CARD_RADIUS))
        .stroke(egui::Stroke::new(1.0_f32, t.divider))
        .inner_margin(8.0)
        .show(ui, |ui| {
            ui.label(egui::RichText::new(title.to_uppercase()).font(theme::font_ui(10.5)).color(t.text_dim).strong());
            ui.add_space(4.0);
            body(ui);
        });
    ui.add_space(6.0);
}

fn properties_ui(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, t: &Tokens) {
    let Some(id) = app.session.selected() else {
        ui.label(egui::RichText::new("Nothing selected").font(theme::font_ui(12.0)).color(t.text_dim));
        return;
    };
    let Some(el) = app.session.model.element(id).cloned() else {
        return;
    };
    ui.label(egui::RichText::new(el.name.clone()).strong());
    ui.separator();
    let mut changed = false;
    match el.data {
        ElementData::Wall(w) => {
            let mut thk = w.thickness;
            let mut h = w.height;
            ui.horizontal(|ui| {
                ui.label("Thickness");
                changed |= ui.add(egui::DragValue::new(&mut thk).speed(0.01).range(0.05..=2.0).suffix(" m")).changed();
            });
            ui.horizontal(|ui| {
                ui.label("Height   ");
                changed |= ui.add(egui::DragValue::new(&mut h).speed(0.05).range(0.5..=20.0).suffix(" m")).changed();
            });
            if changed {
                app.session.begin_edit();
                if let Some(ElementData::Wall(w)) = app.session.model.element_mut(id).map(|e| &mut e.data) {
                    w.thickness = thk;
                    w.height = h;
                }
            }
        }
        ElementData::Opening(o) => {
            let mut width = o.width;
            let mut height = o.height;
            let mut sill = o.sill;
            ui.horizontal(|ui| {
                ui.label("Width   ");
                changed |= ui.add(egui::DragValue::new(&mut width).speed(0.02).range(0.3..=6.0).suffix(" m")).changed();
            });
            ui.horizontal(|ui| {
                ui.label("Height  ");
                changed |= ui.add(egui::DragValue::new(&mut height).speed(0.02).range(0.3..=6.0).suffix(" m")).changed();
            });
            ui.horizontal(|ui| {
                ui.label("Sill    ");
                changed |= ui.add(egui::DragValue::new(&mut sill).speed(0.02).range(0.0..=6.0).suffix(" m")).changed();
            });
            if changed {
                app.session.begin_edit();
                if let Some(ElementData::Opening(o)) = app.session.model.element_mut(id).map(|e| &mut e.data) {
                    o.width = width;
                    o.height = height;
                    o.sill = sill;
                }
            }
        }
        ElementData::Slab(_) | ElementData::Ceiling(_) => {
            if let Some((_, pts, _)) = el.data.plan_poly() {
                ui.label(egui::RichText::new(format!("Polygon: {} points", pts.len())).font(theme::font_ui(11.0)).color(t.text_dim));
            }
            let mut thk = match el.data.plan_poly() {
                Some((_, _, thk)) => thk,
                None => 0.2,
            };
            ui.horizontal(|ui| {
                ui.label("Thickness");
                changed |= ui.add(egui::DragValue::new(&mut thk).speed(0.01).range(0.02..=2.0).suffix(" m")).changed();
            });
            if changed {
                app.session.begin_edit();
                if let Some(d) = app.session.model.element_mut(id).map(|e| &mut e.data) {
                    match d {
                        ElementData::Slab(x) => x.thickness = thk,
                        ElementData::Ceiling(x) => x.thickness = thk,
                        _ => {}
                    }
                }
            }
        }
    }
    ui.add_space(4.0);
    if ui.add(egui::Button::new(egui::RichText::new("Delete").color(t.danger))).clicked() {
        app.session.delete_selected();
    }
}

fn levels_ui(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, t: &Tokens) {
    let levels = app.session.model.levels.clone();
    let active = app.session.active_level;
    for l in &levels {
        let is_active = Some(l.id) == active;
        let txt = format!("{}   elev {:.2} m   h {:.1} m", l.name, l.elevation, l.height);
        let rich = egui::RichText::new(txt).font(theme::font_ui(12.0)).color(if is_active { Color32::WHITE } else { t.text_dim });
        if ui
            .add(egui::Button::new(rich).fill(if is_active { t.tool_active } else { t.input }).min_size(Vec2::new(ui.available_width(), 0.0)))
            .clicked()
        {
            app.session.set_active_level(l.id);
        }
    }
    if ui.add(egui::Button::new("+ Add Level").min_size(Vec2::new(ui.available_width(), 0.0))).clicked() {
        app.session.add_level();
    }
}

fn model_ui(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, _t: &Tokens) {
    let kinds = [
        (ElementKind::Wall, "Walls"),
        (ElementKind::Door, "Doors"),
        (ElementKind::Window, "Windows"),
        (ElementKind::Slab, "Floors"),
        (ElementKind::Ceiling, "Ceilings"),
    ];
    egui::CollapsingHeader::new(egui::RichText::new("Grids").font(theme::font_ui(12.0))).default_open(false).show(ui, |ui| {
        let grids = app.session.model.grids.clone();
        for g in grids {
            let label = format!("{}  {}  @ {:.1} m", g.name, if g.axis == bimcraft_bim::GridAxis::V { "V" } else { "H" }, g.position);
            if ui.selectable_label(app.session.selection.contains(&g.id), label).clicked() {
                app.session.select(Some(g.id));
            }
        }
    });
    for (kind, title) in kinds {
        let count = app.session.model.elements.iter().filter(|e| e.kind == kind).count();
        egui::CollapsingHeader::new(egui::RichText::new(format!("{title} ({count})")).font(theme::font_ui(12.0))).default_open(false).show(
            ui,
            |ui| {
                let elements = app.session.model.elements.clone();
                for e in elements.iter().filter(|e| e.kind == kind) {
                    if ui.selectable_label(app.session.selection.contains(&e.id), e.name.clone()).clicked() {
                        app.session.select(Some(e.id));
                    }
                }
            },
        );
    }
}

// ----------------------------------------------------------- status bar ---

pub fn status_bar(ctx: &egui::Context, app: &mut crate::BimcraftApp) {
    let t = theme::tokens();
    egui::TopBottomPanel::bottom("status_bar").exact_height(24.0).frame(egui::Frame::none().fill(t.app_bar)).show(ctx, |ui| {
        ui.with_layout(egui::Layout::left_to_right(egui::Align::Center), |ui| {
            ui.add_space(8.0);
            let mode = match app.session.view {
                ViewMode::Plan2D => "2D Plan",
                ViewMode::Perspective3D => "3D View",
            };
            ui.label(egui::RichText::new(mode).font(theme::font_ui(11.0)).color(t.accent).strong());
            ui.separator();
            ui.label(egui::RichText::new(app.session.tool.label()).font(theme::font_ui(11.0)).color(t.text));
            ui.separator();
            ui.label(egui::RichText::new(app.session.tool.hint()).font(theme::font_ui(11.0)).color(t.text_dim));
            ui.with_layout(egui::Layout::right_to_left(egui::Align::Center), |ui| {
                ui.add_space(8.0);
                let (x, y, z) = (app.session.cursor.x, app.session.cursor.y, app.session.cursor.z);
                ui.label(egui::RichText::new(format!("X {x:6.2}  Y {y:6.2}  Z {z:5.2}")).font(theme::font_mono(11.0)).color(t.text_dim));
                ui.separator();
                let n = app.session.model.elements.len();
                ui.label(egui::RichText::new(format!("{n} elements")).font(theme::font_ui(11.0)).color(t.text_dim));
                ui.separator();
                ui.label(egui::RichText::new(app.session.status.clone()).font(theme::font_ui(11.0)).color(t.text));
            });
        });
    });
}
