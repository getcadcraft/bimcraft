//! BimCraft canvas: 2D plan and 3D perspective viewports with a Blender-style
//! ground grid, XYZ axes and tool interaction. Everything is drawn through the
//! egui painter with hand-rolled projection math (no extra 3D deps).

use crate::theme;
use bimcraft_engine::{Tool, ViewMode};
use bimcraft_geom::Vec2 as GVec2;
use bimcraft_geom::Vec3;
use bimcraft_render::{build, ViewInfo, ViewModeKind};
use egui::{Color32, Pos2, Rect, Sense, Stroke, Vec2};

pub fn show(ui: &mut egui::Ui, app: &mut crate::BimcraftApp) {
    let t = theme::tokens();
    let (rect, resp) = ui.allocate_exact_size(ui.available_size(), Sense::click_and_drag());
    let painter = ui.painter_at(rect);
    painter.rect_filled(rect, 0.0, t.viewport_bg);

    let ppp = ui.ctx().pixels_per_point();
    let mode = match app.session.view {
        ViewMode::Plan2D => ViewModeKind::Plan2D,
        ViewMode::Perspective3D => ViewModeKind::Perspective3D,
    };

    // Handle input first (mutates session/camera), then render.
    handle_input(ui, app, rect, resp, ppp);

    let info = ViewInfo {
        mode,
        active_level: app.session.active_level_id(),
        selection: app.session.selection.clone(),
        half_extent: plan_half_extent(app.session.plan.zoom, rect.width()),
        ground_extent: 40.0,
    };
    let dl = build(&app.session.model, &info);

    match app.session.view {
        ViewMode::Plan2D => draw_plan(ui, app, &painter, rect, &dl, ppp),
        ViewMode::Perspective3D => draw_3d(ui, app, &painter, rect, &dl, ppp),
    }

    // Tool overlays (pending rubber-band etc.).
    draw_overlays(ui, app, &painter, rect);
}

fn plan_half_extent(zoom: f64, width_px: f32) -> f64 {
    (width_px as f64 / zoom.max(1.0)) * 0.6 + 2.0
}

// -------------------------------------------------------------- input -----

fn handle_input(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, rect: Rect, resp: egui::Response, ppp: f32) {
    let t = theme::tokens();
    let scroll = ui.ctx().input(|i| i.raw_scroll_delta.y);
    let pos = resp.hovered().then(|| ui.ctx().input(|i| i.pointer.latest_pos())).flatten();

    // World cursor (for the status bar + tool preview).
    if let Some(p) = pos {
        let world = match app.session.view {
            ViewMode::Plan2D => Some(screen_to_plan(app, p, rect).to3(app.session.level_elevation())),
            ViewMode::Perspective3D => app.session.camera.pick_ground(
                p.x as f64 * ppp as f64,
                p.y as f64 * ppp as f64,
                rect.width() as f64 * ppp as f64,
                rect.height() as f64 * ppp as f64,
                FOV,
            ),
        };
        if let Some(w) = world {
            app.session.cursor = w;
        }
    }

    // Wheel zoom.
    if scroll.abs() > 0.5 && resp.hovered() {
        match app.session.view {
            ViewMode::Plan2D => {
                let factor = if scroll > 0.0 { 1.1 } else { 1.0 / 1.1 };
                let new_zoom = (app.session.plan.zoom * factor).clamp(6.0, 400.0);
                if let Some(p) = pos {
                    // Zoom toward the cursor.
                    let before = screen_to_plan(app, p, rect);
                    app.session.plan.zoom = new_zoom;
                    let after = screen_to_plan(app, p, rect);
                    app.session.plan.center = app.session.plan.center + before - after;
                } else {
                    app.session.plan.zoom = new_zoom;
                }
            }
            ViewMode::Perspective3D => {
                app.session.camera.distance = (app.session.camera.distance * if scroll > 0.0 { 0.9 } else { 1.1 }).clamp(3.0, 200.0);
            }
        }
    }

    // Drag interactions.
    let drag = resp.drag_delta();
    if resp.dragged() && drag != Vec2::ZERO {
        match app.session.view {
            ViewMode::Plan2D => {
                let pan = ui.ctx().input(|i| i.modifiers.shift)
                    || resp.dragged_by(egui::PointerButton::Secondary)
                    || (app.session.tool == Tool::Select && app.session.pending.is_empty());
                if pan {
                    let delta = GVec2::new(drag.x as f64, -drag.y as f64) * (1.0 / app.session.plan.zoom);
                    app.session.plan.center = app.session.plan.center - delta;
                }
            }
            ViewMode::Perspective3D => {
                if ui.ctx().input(|i| i.modifiers.shift) {
                    pan_target(app, drag, rect, ppp);
                } else {
                    app.session.camera.yaw -= drag.x as f64 * 0.008;
                    app.session.camera.pitch = (app.session.camera.pitch + drag.y as f64 * 0.006).clamp(0.05, 1.55);
                }
            }
        }
    }

    // Clicks.
    if resp.clicked() {
        if let Some(p) = pos {
            match app.session.view {
                ViewMode::Plan2D => {
                    let world = screen_to_plan(app, p, rect);
                    app.session.click_plan(world);
                }
                ViewMode::Perspective3D => {
                    if matches!(app.session.tool, Tool::Select) {
                        app.session.select(None);
                        app.session.status = "3D picking arrives with ray-cast selection (see roadmap)".into();
                    } else if let Some(g) = app.session.camera.pick_ground(
                        p.x as f64 * ppp as f64,
                        p.y as f64 * ppp as f64,
                        rect.width() as f64 * ppp as f64,
                        rect.height() as f64 * ppp as f64,
                        FOV,
                    ) {
                        app.session.click_plan(g.xy());
                    }
                }
            }
        }
    }
    if resp.secondary_clicked() {
        app.session.cancel_pending();
    }

    let _ = t;
}

fn pan_target(app: &mut crate::BimcraftApp, drag: Vec2, rect: Rect, ppp: f32) {
    let (r, u, _) = app.session.camera.basis();
    let scale = app.session.camera.distance / (rect.height() as f64 * ppp as f64);
    let move_r = r * (-drag.x as f64 * ppp as f64 * scale);
    let move_u = u * (drag.y as f64 * ppp as f64 * scale);
    let m = move_r + move_u;
    app.session.camera.target = Vec3::new(app.session.camera.target.x + m.x, app.session.camera.target.y + m.y, app.session.camera.target.z);
}

fn screen_to_plan(app: &crate::BimcraftApp, p: Pos2, rect: Rect) -> bimcraft_geom::Vec2 {
    let cx = rect.center().x as f64;
    let cy = rect.center().y as f64;
    let wx = (p.x as f64 - cx) / app.session.plan.zoom + app.session.plan.center.x;
    let wy = (cy - p.y as f64) / app.session.plan.zoom + app.session.plan.center.y;
    bimcraft_geom::Vec2::new(wx, wy)
}

fn plan_to_screen(app: &crate::BimcraftApp, w: Vec3, rect: Rect) -> Pos2 {
    let cx = rect.center().x;
    let cy = rect.center().y;
    let sx = ((w.x - app.session.plan.center.x) * app.session.plan.zoom + cx as f64) as f32;
    let sy = (cy as f64 - (w.y - app.session.plan.center.y) * app.session.plan.zoom) as f32;
    Pos2::new(sx, sy)
}

// --------------------------------------------------------------- 2D ------

fn draw_plan(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, painter: &egui::Painter, rect: Rect, dl: &bimcraft_render::DisplayList, _ppp: f32) {
    let _ = ui;
    for l in &dl.lines {
        let a = plan_to_screen(app, l.a, rect);
        let b = plan_to_screen(app, l.b, rect);
        if l.dashed {
            draw_dashed(painter, a, b, l.color, l.width);
        } else {
            painter.line_segment([a, b], Stroke::new(l.width, l.color));
        }
    }
    for tri in &dl.tris {
        let pts: Vec<Pos2> = tri.pts.iter().map(|p| plan_to_screen(app, *p, rect)).collect();
        painter.add(egui::Shape::convex_polygon(pts, tri.color, Stroke::NONE));
    }
    for tx in &dl.texts {
        painter.text(plan_to_screen(app, tx.pos, rect), egui::Align2::CENTER_CENTER, &tx.text, theme::font_ui(tx.size), tx.color);
    }
    // Active level watermark.
    let lvl = app.session.model.active_or_first_level(app.session.active_level);
    painter.text(
        rect.left_bottom() + Vec2::new(10.0, -10.0),
        egui::Align2::LEFT_BOTTOM,
        format!("{}  ·  elev {:.2} m", lvl.name, lvl.elevation),
        theme::font_ui(11.0),
        Color32::from_rgb(0x8a, 0x93, 0xa3),
    );
}

fn draw_dashed(painter: &egui::Painter, a: Pos2, b: Pos2, color: Color32, width: f32) {
    let seg = 7.0;
    let gap = 5.0;
    let v = b - a;
    let len = v.length();
    if len < 1.0 {
        return;
    }
    let dir = v / len;
    let mut t = 0.0;
    while t < len {
        let end = (t + seg).min(len);
        painter.line_segment([a + dir * t, a + dir * end], Stroke::new(width, color));
        t = end + gap;
    }
}

// --------------------------------------------------------------- 3D ------

const FOV: f64 = std::f64::consts::FRAC_PI_3;

struct Proj {
    focal: f64,
    cx: f64,
    cy: f64,
    w: f64,
    h: f64,
}

impl Proj {
    fn point(&self, p: Vec3, eye: Vec3, r: Vec3, u: Vec3, f: Vec3) -> Option<(Pos2, f64)> {
        let d = p - eye;
        let x = d.dot(r);
        let y = d.dot(u);
        let z = d.dot(f);
        if z < 0.08 {
            return None;
        }
        let sx = self.cx + x / z * self.focal;
        let sy = self.cy - y / z * self.focal;
        if sx < -self.w || sx > self.w * 2.0 || sy < -self.h || sy > self.h * 2.0 {
            return None;
        }
        Some((Pos2::new(sx as f32, sy as f32), z))
    }
}

fn draw_3d(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, painter: &egui::Painter, rect: Rect, dl: &bimcraft_render::DisplayList, ppp: f32) {
    let _ = ui;
    let cam = app.session.camera;
    let (r, u, f) = cam.basis();
    let eye = cam.eye();
    let ppp = ppp as f64;
    let proj = Proj {
        focal: (rect.height() as f64 * ppp) / (2.0 * (FOV / 2.0).tan()),
        cx: rect.center().x as f64 * ppp,
        cy: rect.center().y as f64 * ppp,
        w: rect.width() as f64 * ppp,
        h: rect.height() as f64 * ppp,
    };

    // Depth-sorted triangles.
    let mut tris: Vec<(f64, [Pos2; 3], Color32)> = Vec::with_capacity(dl.tris.len());
    for tri in &dl.tris {
        let mut pts = [Pos2::ZERO; 3];
        let mut zs = [0.0_f64; 3];
        let mut ok = true;
        for k in 0..3 {
            match proj.point(tri.pts[k], eye, r, u, f) {
                Some((sp, z)) => {
                    pts[k] = sp;
                    zs[k] = z;
                }
                None => {
                    ok = false;
                    break;
                }
            }
        }
        if ok {
            tris.push(((zs[0] + zs[1] + zs[2]) / 3.0, pts, tri.color));
        }
    }
    tris.sort_by(|a, b| b.0.total_cmp(&a.0));
    for (_, pts, color) in &tris {
        painter.add(egui::Shape::convex_polygon(pts.to_vec(), *color, Stroke::NONE));
    }

    // Lines on top (wireframe pass).
    for l in &dl.lines {
        draw_line_clipped(painter, &proj, eye, r, u, f, l.a, l.b, l.color, l.width);
    }

    // Texts (projected; skip when behind camera).
    for tx in &dl.texts {
        if let Some((sp, _)) = proj.point(tx.pos, eye, r, u, f) {
            painter.text(sp, egui::Align2::CENTER_CENTER, &tx.text, theme::font_ui(tx.size), tx.color);
        }
    }

    // Compass overlay: N indicator + axis legend.
    painter.text(
        rect.right_top() + Vec2::new(-14.0, 14.0),
        egui::Align2::RIGHT_TOP,
        "drag: orbit  ·  shift+drag: pan  ·  wheel: zoom",
        theme::font_ui(11.0),
        Color32::from_rgb(0x8a, 0x93, 0xa3),
    );
}

/// Draw a 3D line with a near-plane clip so long lines don't vanish.
fn draw_line_clipped(painter: &egui::Painter, proj: &Proj, eye: Vec3, r: Vec3, u: Vec3, f: Vec3, a: Vec3, b: Vec3, color: Color32, width: f32) {
    const NEAR: f64 = 0.08;
    let view = |p: Vec3| -> (f64, f64, f64) {
        let d = p - eye;
        (d.dot(r), d.dot(u), d.dot(f))
    };
    let (mut ax, mut ay, mut az) = view(a);
    let (mut bx, mut by, mut bz) = view(b);
    if az < NEAR && bz < NEAR {
        return;
    }
    if az < NEAR {
        let t = (NEAR - az) / (bz - az);
        ax += (bx - ax) * t;
        ay += (by - ay) * t;
        az = NEAR;
    } else if bz < NEAR {
        let t = (NEAR - bz) / (az - bz);
        bx += (ax - bx) * t;
        by += (ay - by) * t;
        bz = NEAR;
    }
    let sa = Pos2::new((proj.cx + ax / az * proj.focal) as f32, (proj.cy - ay / az * proj.focal) as f32);
    let sb = Pos2::new((proj.cx + bx / bz * proj.focal) as f32, (proj.cy - by / bz * proj.focal) as f32);
    painter.line_segment([sa, sb], Stroke::new(width, color));
}

// ------------------------------------------------------------ overlays ---

fn draw_overlays(ui: &mut egui::Ui, app: &mut crate::BimcraftApp, painter: &egui::Painter, rect: Rect) {
    let _ = ui;
    let t = theme::tokens();
    // Rubber band for in-progress wall / rectangle plate.
    if app.session.pending.len() == 1 && app.session.view == ViewMode::Plan2D {
        let a = plan_to_screen(app, app.session.pending[0].to3(0.0), rect);
        let b = Pos2::new(
            ((app.session.cursor.x - app.session.plan.center.x) * app.session.plan.zoom + rect.center().x as f64) as f32,
            (rect.center().y as f64 - (app.session.cursor.y - app.session.plan.center.y) * app.session.plan.zoom) as f32,
        );
        painter.line_segment([a, b], Stroke::new(1.6_f32, t.accent));
        painter.circle_filled(a, 3.0, t.accent);
        let len = app.session.cursor.xy().dist(app.session.pending[0]);
        painter.text(b + Vec2::new(10.0, -10.0), egui::Align2::LEFT_BOTTOM, format!("{len:.2} m"), theme::font_mono(11.0), t.accent);
    }
    // Origin marker.
    if app.session.view == ViewMode::Plan2D {
        let o = plan_to_screen(app, Vec3::ZERO, rect);
        if rect.contains(o) {
            painter.circle_stroke(o, 4.0, Stroke::new(1.2_f32, bimcraft_render::AXIS_X));
            painter.line_segment([o - Vec2::new(7.0, 0.0), o + Vec2::new(7.0, 0.0)], Stroke::new(1.0_f32, bimcraft_render::AXIS_X));
            painter.line_segment([o - Vec2::new(0.0, 7.0), o + Vec2::new(0.0, 7.0)], Stroke::new(1.0_f32, bimcraft_render::AXIS_Y));
        }
    }
}
