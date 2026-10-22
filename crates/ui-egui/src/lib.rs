//! BimCraft egui frontend: a thin shell over the engine Session, following the
//! Craft-app architecture (chrome + central canvas + dock, JSON-free v0.1).

mod canvas;
mod chrome;
pub mod theme;

use bimcraft_engine::{Session, Tool, ViewMode};
use bimcraft_geom::{Vec2, Vec3};

/// Top-level app state. Implements `eframe::App` in the platform crates.
pub struct BimcraftApp {
    pub session: Session,
}

impl BimcraftApp {
    pub fn new() -> Self {
        Self { session: Session::default() }
    }

    pub fn session_reset(&mut self) {
        self.session = Session::default();
        self.session.status = "New model".into();
    }

    pub fn zoom_to_fit(&mut self) {
        match self.session.model.bounds() {
            Some((min, max)) => {
                let cx = (min.x + max.x) / 2.0;
                let cy = (min.y + max.y) / 2.0;
                let span = (max.x - min.x).max(max.y - min.y).max(4.0);
                match self.session.view {
                    ViewMode::Plan2D => {
                        self.session.plan.center = Vec2::new(cx, cy);
                        self.session.plan.zoom = (900.0 / span).clamp(6.0, 400.0);
                    }
                    ViewMode::Perspective3D => {
                        self.session.camera.target = Vec3::new(cx, cy, (min.z + max.z) / 2.0);
                        self.session.camera.distance = (span * 1.6).clamp(6.0, 200.0);
                    }
                }
                self.session.status = "Zoom to fit".into();
            }
            None => self.session.status = "Nothing to fit".into(),
        }
    }

    fn handle_shortcuts(&mut self, ctx: &egui::Context) {
        use egui::Key;
        let (w, d, n, f, c, s, esc, tab, z, y, del, ctrl) = ctx.input(|i| {
            (
                i.key_pressed(Key::W),
                i.key_pressed(Key::D),
                i.key_pressed(Key::N),
                i.key_pressed(Key::F),
                i.key_pressed(Key::C),
                i.key_pressed(Key::S),
                i.key_pressed(Key::Escape),
                i.key_pressed(Key::Tab),
                i.key_pressed(Key::Z),
                i.key_pressed(Key::Y),
                i.key_pressed(Key::Delete) || i.key_pressed(Key::Backspace),
                i.modifiers.ctrl,
            )
        });
        if ctrl && z {
            self.session.undo();
        } else if ctrl && (y || (z && ctx.input(|i| i.modifiers.shift))) {
            self.session.redo();
        }
        if w {
            self.session.set_tool(Tool::Wall);
        }
        if d {
            self.session.set_tool(Tool::Door);
        }
        if n {
            self.session.set_tool(Tool::Window);
        }
        if f {
            self.session.set_tool(Tool::Slab);
        }
        if c {
            self.session.set_tool(Tool::Ceiling);
        }
        if s || esc {
            if esc && !self.session.pending.is_empty() {
                self.session.cancel_pending();
            } else {
                self.session.set_tool(Tool::Select);
            }
        }
        if tab {
            let next = match self.session.view {
                ViewMode::Plan2D => ViewMode::Perspective3D,
                ViewMode::Perspective3D => ViewMode::Plan2D,
            };
            self.session.set_view(next);
        }
        if del && !ctrl {
            self.session.delete_selected();
        }
    }
}

impl Default for BimcraftApp {
    fn default() -> Self {
        Self::new()
    }
}

impl BimcraftApp {
    /// Draw one frame. Platform shells (apps/bimcraft, apps/bimcraft-web)
    /// implement `eframe::App` and delegate here, keeping this crate pure egui.
    pub fn update(&mut self, ctx: &egui::Context) {
        theme::apply(ctx);
        self.handle_shortcuts(ctx);

        chrome::status_bar(ctx, self);
        chrome::dock(ctx, self);
        chrome::toolbar(ctx, self);
        chrome::app_bar(ctx, self);

        egui::CentralPanel::default().frame(egui::Frame::none().fill(theme::tokens().pasteboard)).show(ctx, |ui| {
            canvas::show(ui, self);
        });

        // Continuously repaint while a tool has pending input (rubber band).
        if !self.session.pending.is_empty() {
            ctx.request_repaint();
        }
    }
}
