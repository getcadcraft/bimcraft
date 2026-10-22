//! BimCraft display-list renderer: turns the BIM model into world-space lines,
//! triangles and labels for either the 2D plan view or the 3D perspective view.
//!
//! Same seam as `cadcraft-render`'s DisplayList (MIT OR Apache-2.0), clean-room
//! implemented. 3D geometry is shaded with a fixed light and drawn back-to-front
//! by the UI layer.

use bimcraft_bim::{ElementData, ElementKind, GridAxis, Model};
use bimcraft_geom::Vec3;
use egui::{Color32, Stroke};

pub const AXIS_X: Color32 = Color32::from_rgb(0xe8, 0x38, 0x4f);
pub const AXIS_Y: Color32 = Color32::from_rgb(0xa1, 0xc9, 0x3a);
pub const AXIS_Z: Color32 = Color32::from_rgb(0x38, 0xa1, 0xe8);

#[derive(Clone, Debug)]
pub struct DLine {
    pub a: Vec3,
    pub b: Vec3,
    pub color: Color32,
    pub width: f32,
    pub dashed: bool,
}

#[derive(Clone, Copy, Debug)]
pub struct DTri {
    pub pts: [Vec3; 3],
    pub color: Color32,
}

#[derive(Clone, Debug)]
pub struct DText {
    pub pos: Vec3,
    pub text: String,
    pub size: f32,
    pub color: Color32,
}

#[derive(Clone, Debug, Default)]
pub struct DisplayList {
    pub lines: Vec<DLine>,
    pub tris: Vec<DTri>,
    pub texts: Vec<DText>,
}

impl DisplayList {
    pub fn line(&mut self, a: Vec3, b: Vec3, color: Color32, width: f32) {
        self.lines.push(DLine { a, b, color, width, dashed: false });
    }

    pub fn dashed(&mut self, a: Vec3, b: Vec3, color: Color32, width: f32) {
        self.lines.push(DLine { a, b, color, width, dashed: true });
    }

    pub fn tri(&mut self, pts: [Vec3; 3], color: Color32) {
        self.tris.push(DTri { pts, color });
    }

    pub fn quad(&mut self, q: [Vec3; 4], color: Color32) {
        self.tri([q[0], q[1], q[2]], color);
        self.tri([q[0], q[2], q[3]], color);
    }

    pub fn text(&mut self, pos: Vec3, text: impl Into<String>, size: f32, color: Color32) {
        self.texts.push(DText { pos, text: text.into(), size, color });
    }
}

const SELECT: Color32 = Color32::from_rgb(0x4f, 0x80, 0xff);
const WALL_2D: Color32 = Color32::from_rgb(0xd7, 0xde, 0xea);
const SLAB_2D: Color32 = Color32::from_rgb(0x9a, 0xb4, 0xc8);
const CEIL_2D: Color32 = Color32::from_rgb(0x7f, 0x8f, 0xa8);
const GRID_LINE: Color32 = Color32::from_rgb(0x2c, 0x33, 0x40);
const GRID_STRONG: Color32 = Color32::from_rgb(0x3a, 0x44, 0x54);
const DOOR_2D: Color32 = Color32::from_rgb(0xc9, 0x8a, 0x4a);
const WINDOW_2D: Color32 = Color32::from_rgb(0x5b, 0xc8, 0xd8);

struct Palette3D {
    wall_top: Color32,
    wall_side_a: Color32,
    wall_side_b: Color32,
    slab: Color32,
    ceiling: Color32,
    door: Color32,
    window: Color32,
}

const PAL3D: Palette3D = Palette3D {
    wall_top: Color32::from_rgb(0xcf, 0xd6, 0xe2),
    wall_side_a: Color32::from_rgb(0xb4, 0xbd, 0xcc),
    wall_side_b: Color32::from_rgb(0x9a, 0xa4, 0xb5),
    slab: Color32::from_rgb(0x8f, 0xa6, 0xb8),
    ceiling: Color32::from_rgb(0xc2, 0xc9, 0xd6),
    door: Color32::from_rgb(0x9a, 0x62, 0x2e),
    window: Color32::from_rgb(0x6f, 0xc4, 0xd4),
};

fn selected(color: Color32, is_sel: bool) -> Color32 {
    if is_sel {
        SELECT
    } else {
        color
    }
}

/// Fixed light direction for cheap lambert shading (Z-up).
fn shade(normal: Vec3, base: Color32) -> Color32 {
    let l = Vec3::new(0.45, -0.5, 0.74).normalize();
    let d = normal.dot(l).abs().clamp(0.25, 1.0);
    Color32::from_rgba_unmultiplied(
        (base.r() as f32 * d as f32).round() as u8,
        (base.g() as f32 * d as f32).round() as u8,
        (base.b() as f32 * d as f32).round() as u8,
        base.a(),
    )
}

/// What the renderer needs to know about the view.
pub struct ViewInfo {
    pub mode: crate::ViewModeKind,
    pub active_level: u64,
    pub selection: Vec<u64>,
    /// 2D: half-extent of the visible world rect (meters).
    pub half_extent: f64,
    /// 3D ground grid half-extent.
    pub ground_extent: f64,
}

/// View-mode mirror to avoid engine dependency in render.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum ViewModeKind {
    Plan2D,
    Perspective3D,
}

pub fn build(model: &Model, info: &ViewInfo) -> DisplayList {
    let mut dl = DisplayList::default();
    match info.mode {
        ViewModeKind::Plan2D => build_plan(model, info, &mut dl),
        ViewModeKind::Perspective3D => build_3d(model, info, &mut dl),
    }
    dl
}

fn is_selected(info: &ViewInfo, id: u64) -> bool {
    info.selection.contains(&id)
}

// ---------------------------------------------------------------- 2D plan ---

fn build_plan(model: &Model, info: &ViewInfo, dl: &mut DisplayList) {
    let he = info.half_extent.max(2.0);
    let z_active = model.active_or_first_level(Some(info.active_level)).elevation;

    // Metric grid: 1 m lines, stronger every 5 m.
    let x0 = -(he.ceil() as i64);
    let x1 = he.ceil() as i64;
    for i in x0..=x1 {
        let strong = i % 5 == 0;
        let c = if strong { GRID_STRONG } else { GRID_LINE };
        dl.line(Vec3::new(i as f64, -he, z_active), Vec3::new(i as f64, he, z_active), c, if strong { 1.0 } else { 0.6 });
        dl.line(Vec3::new(-he, i as f64, z_active), Vec3::new(he, i as f64, z_active), c, if strong { 1.0 } else { 0.6 });
    }

    // Datum grids with bubbles.
    for g in &model.grids {
        let (a, b) = match g.axis {
            GridAxis::V => (Vec3::new(g.position, -he, z_active), Vec3::new(g.position, he, z_active)),
            GridAxis::H => (Vec3::new(-he, g.position, z_active), Vec3::new(he, g.position, z_active)),
        };
        let col = if is_selected(info, g.id) { SELECT } else { Color32::from_rgb(0x6b, 0x7a, 0x92) };
        dl.dashed(a, b, col, 1.4);
        let bpos = match g.axis {
            GridAxis::V => Vec3::new(g.position, he - 1.2, z_active),
            GridAxis::H => Vec3::new(he - 1.2, g.position, z_active),
        };
        dl.text(bpos, g.name.clone(), 13.0, col);
    }

    // Elements of every level (dim others, active level normal).
    for e in &model.elements {
        let sel = is_selected(info, e.id);
        let lvl_z = match &e.data {
            ElementData::Wall(w) => model.level(w.level).map(|l| l.elevation),
            ElementData::Slab(_) | ElementData::Ceiling(_) => e.data.plan_poly().and_then(|(lvl, _, _)| model.level(lvl).map(|l| l.elevation)),
            ElementData::Opening(_) => None,
        };
        let on_active = lvl_z.map(|z| (z - z_active).abs() < 1e-6).unwrap_or(false);
        let alpha = if on_active || sel { 255 } else { 90 };
        match &e.data {
            ElementData::Wall(w) => {
                let n = (w.b - w.a).normalize().perp() * (w.thickness / 2.0);
                let z = z_active;
                let ca = Color32::from_rgba_unmultiplied(selected(WALL_2D, sel).r(), selected(WALL_2D, sel).g(), selected(WALL_2D, sel).b(), alpha);
                // Openings carve visual gaps: draw segments split at openings.
                let mut t_prev = 0.0_f64;
                let mut cuts: Vec<(f64, f64)> = Vec::new();
                for op in model.openings_for_wall(e.id) {
                    if let ElementData::Opening(o) = &op.data {
                        let len = (w.b - w.a).length().max(1e-9);
                        let half = (o.width / 2.0) / len;
                        cuts.push(((o.t - half).clamp(0.0, 1.0), (o.t + half).clamp(0.0, 1.0)));
                    }
                }
                cuts.sort_by(|x, y| x.0.total_cmp(&y.0));
                let dir = w.b - w.a;
                for (t0, t1) in cuts {
                    let s0 = (w.a + dir * t_prev).to3(z);
                    let s1 = (w.a + dir * t0).to3(z);
                    if t1 > t0 {
                        dl.line((s0.xy() - n).to3(z), (s1.xy() - n).to3(z), ca, 1.8);
                        dl.line((s0.xy() + n).to3(z), (s1.xy() + n).to3(z), ca, 1.8);
                    }
                    t_prev = t1;
                }
                let s0 = (w.a + dir * t_prev).to3(z);
                let s1 = w.b.to3(z);
                dl.line((s0.xy() - n).to3(z), (s1.xy() - n).to3(z), ca, 1.8);
                dl.line((s0.xy() + n).to3(z), (s1.xy() + n).to3(z), ca, 1.8);
                dl.line((w.a - n).to3(z), (w.a + n).to3(z), ca, 1.8);
                dl.line((w.b - n).to3(z), (w.b + n).to3(z), ca, 1.8);
            }
            ElementData::Opening(o) => {
                if on_active || sel {
                    if let Some((q, sill)) = model.opening_quad(o) {
                        let col = if e.kind == ElementKind::Door { DOOR_2D } else { WINDOW_2D };
                        let col = Color32::from_rgba_unmultiplied(col.r(), col.g(), col.b(), alpha);
                        let inner = selected(col, sel);
                        // Sill line + jamb lines + leaf (door) or mullion (window).
                        dl.line(q[0], q[1], inner, 1.6);
                        dl.line(q[0], q[3], inner, 1.2);
                        dl.line(q[1], q[2], inner, 1.2);
                        if e.kind == ElementKind::Door {
                            let z0 = q[0].z;
                            let mid = (q[0] + q[1]) * 0.5;
                            let leaf_to = Vec3::new(mid.x, mid.y, z0) + (q[1] - q[0]).normalize() * 0.0;
                            let _ = leaf_to;
                            let r = (q[1] - q[0]).length();
                            let hinge = q[0];
                            let mut prev = hinge + Vec3::new(0.0, r, 0.0);
                            for k in 1..=8 {
                                let ang = std::f64::consts::FRAC_PI_2 * (k as f64 / 8.0);
                                let pnt = hinge + Vec3::new(r * (1.0 - ang.cos()), r * ang.sin(), 0.0);
                                dl.line(prev, pnt, inner, 1.0);
                                prev = pnt;
                            }
                            dl.line(hinge, hinge + Vec3::new(0.0, r, 0.0), inner, 1.2);
                            let _ = sill;
                        } else {
                            let mid0 = (q[0] + q[3]) * 0.5;
                            let mid1 = (q[1] + q[2]) * 0.5;
                            dl.line(mid0, mid1, inner, 1.0);
                        }
                    }
                }
            }
            ElementData::Slab(s) => {
                draw_poly_plan(dl, &s.pts, lvl_z.unwrap_or(0.0), selected(SLAB_2D, sel), alpha, false);
            }
            ElementData::Ceiling(s) => {
                draw_poly_plan(dl, &s.pts, lvl_z.unwrap_or(0.0), selected(CEIL_2D, sel), alpha, true);
            }
        }
    }
}

fn draw_poly_plan(dl: &mut DisplayList, pts: &[bimcraft_geom::Vec2], z: f64, color: Color32, alpha: u8, dashed: bool) {
    let col = Color32::from_rgba_unmultiplied(color.r(), color.g(), color.b(), alpha);
    let n = pts.len();
    if n < 3 {
        return;
    }
    for i in 0..n {
        let a = pts[i].to3(z);
        let b = pts[(i + 1) % n].to3(z);
        if dashed {
            dl.dashed(a, b, col, 1.2);
        } else {
            dl.line(a, b, col, 1.2);
        }
    }
}

// ------------------------------------------------------------------- 3D -----

fn build_3d(model: &Model, info: &ViewInfo, dl: &mut DisplayList) {
    let ext = info.ground_extent.max(10.0);

    // Ground grid, 1 m, stronger every 5 m.
    for i in -(ext.ceil() as i64)..=(ext.ceil() as i64) {
        let v = i as f64;
        let strong = i % 5 == 0;
        let c = if strong { GRID_STRONG } else { GRID_LINE };
        dl.line(Vec3::new(v, -ext, 0.0), Vec3::new(v, ext, 0.0), c, 0.7);
        dl.line(Vec3::new(-ext, v, 0.0), Vec3::new(ext, v, 0.0), c, 0.7);
    }

    // XYZ axes, Blender-style colors.
    dl.line(Vec3::ZERO, Vec3::new(12.0, 0.0, 0.0), AXIS_X, 2.2);
    dl.line(Vec3::ZERO, Vec3::new(0.0, 12.0, 0.0), AXIS_Y, 2.2);
    dl.line(Vec3::ZERO, Vec3::new(0.0, 0.0, 8.0), AXIS_Z, 2.2);
    dl.text(Vec3::new(12.6, 0.0, 0.0), "X", 14.0, AXIS_X);
    dl.text(Vec3::new(0.0, 12.6, 0.0), "Y", 14.0, AXIS_Y);
    dl.text(Vec3::new(0.0, 0.0, 8.5), "Z", 14.0, AXIS_Z);

    // Walls as extruded prisms.
    for e in model.walls() {
        let sel = is_selected(info, e.id);
        if let ElementData::Wall(w) = &e.data {
            let z0 = model.level(w.level).map(|l| l.elevation).unwrap_or(0.0);
            let z1 = z0 + w.height;
            let c = model.wall_corners(w);
            let body = if sel { SELECT } else { Color32::WHITE };
            let top = if sel { SELECT } else { PAL3D.wall_top };
            let side_a = if sel { SELECT } else { PAL3D.wall_side_a };
            let side_b = if sel { SELECT } else { PAL3D.wall_side_b };
            // Top face.
            dl.quad([c[0].with_z(z1), c[1].with_z(z1), c[2].with_z(z1), c[3].with_z(z1)], shade(Vec3::new(0.0, 0.0, 1.0), top));
            // Two long faces.
            dl.quad(
                [c[0].with_z(z0), c[1].with_z(z0), c[1].with_z(z1), c[0].with_z(z1)],
                shade(face_normal(c[0].with_z(z0), c[1].with_z(z0), c[1].with_z(z1)), side_a),
            );
            dl.quad(
                [c[2].with_z(z0), c[3].with_z(z0), c[3].with_z(z1), c[2].with_z(z1)],
                shade(face_normal(c[2].with_z(z0), c[3].with_z(z0), c[3].with_z(z1)), side_a),
            );
            // End caps.
            dl.quad(
                [c[0].with_z(z0), c[3].with_z(z0), c[3].with_z(z1), c[0].with_z(z1)],
                shade(face_normal(c[0].with_z(z0), c[3].with_z(z0), c[3].with_z(z1)), side_b),
            );
            dl.quad(
                [c[1].with_z(z0), c[2].with_z(z0), c[2].with_z(z1), c[1].with_z(z1)],
                shade(face_normal(c[1].with_z(z0), c[2].with_z(z0), c[2].with_z(z1)), side_b),
            );
            // Wireframe edges on top for crispness.
            for (p, q) in [
                (c[0].with_z(z1), c[1].with_z(z1)),
                (c[1].with_z(z1), c[2].with_z(z1)),
                (c[2].with_z(z1), c[3].with_z(z1)),
                (c[3].with_z(z1), c[0].with_z(z1)),
            ] {
                dl.line(p, q, body, 1.0);
            }
            // Openings as colored quads on both faces.
            for op in model.openings_for_wall(e.id) {
                if let ElementData::Opening(o) = &op.data {
                    let col = if op.kind == ElementKind::Door { PAL3D.door } else { PAL3D.window };
                    let col = if sel { SELECT } else { col };
                    if let Some((q, _)) = model.opening_quad(o) {
                        dl.quad(q, shade(Vec3::new(0.0, -1.0, 0.0), col));
                        let q2 = q.map(|p| mirror_over_wall(p, w.a, w.b));
                        dl.quad(q2, shade(Vec3::new(0.0, 1.0, 0.0), col));
                    }
                }
            }
            let _ = z1;
        }
    }

    // Slabs and ceilings as prisms.
    for e in &model.elements {
        let sel = is_selected(info, e.id);
        match &e.data {
            ElementData::Slab(s) => {
                let base = model.level(s.level).map(|l| l.elevation).unwrap_or(0.0);
                let col = if sel { SELECT } else { PAL3D.slab };
                prism(dl, &s.pts, base - s.thickness, base, col);
            }
            ElementData::Ceiling(s) => {
                let top = model.level(s.level).map(|l| l.elevation + l.height).unwrap_or(0.0);
                let col = if sel { SELECT } else { PAL3D.ceiling };
                prism(dl, &s.pts, top - s.thickness, top, col);
            }
            _ => {}
        }
    }
}

fn face_normal(a: Vec3, b: Vec3, c: Vec3) -> Vec3 {
    (b - a).cross(c - a).normalize()
}

trait WithZ {
    fn with_z(self, z: f64) -> Vec3;
}

impl WithZ for Vec3 {
    fn with_z(mut self, z: f64) -> Vec3 {
        self.z = z;
        self
    }
}

/// Mirror point `p` across the wall centerline (a-b) in the XY plane.
fn mirror_over_wall(p: Vec3, a: bimcraft_geom::Vec2, b: bimcraft_geom::Vec2) -> Vec3 {
    let dir = (b - a).normalize();
    let n = dir.perp();
    let d = (p.xy() - a).dot(n);
    let mirrored = p.xy() - n * (2.0 * d);
    mirrored.to3(p.z)
}

fn prism(dl: &mut DisplayList, pts: &[bimcraft_geom::Vec2], z0: f64, z1: f64, color: Color32) {
    let n = pts.len();
    if n < 3 {
        return;
    }
    for i in 0..n {
        let p0 = pts[i].to3(z0);
        let p1 = pts[(i + 1) % n].to3(z0);
        let nrm = face_normal(p0, p1, p1.with_z(z1));
        dl.quad([p0, p1, p1.with_z(z1), p0.with_z(z1)], shade(nrm, color));
    }
    let top: Vec<Vec3> = pts.iter().map(|p| p.to3(z1)).collect();
    fan(dl, &top, shade(Vec3::new(0.0, 0.0, 1.0), color));
}

/// Triangulate a convex polygon as a fan (v0.1 assumption; CSG later).
fn fan(dl: &mut DisplayList, pts: &[Vec3], color: Color32) {
    if pts.len() < 3 {
        return;
    }
    for i in 1..pts.len() - 1 {
        dl.tri([pts[0], pts[i], pts[i + 1]], color);
    }
}

/// Convenience: Stroke is referenced so the API surface is stable for callers.
pub fn stroke_for_width(w: f32) -> Stroke {
    Stroke::new(w, Color32::WHITE)
}

#[cfg(test)]
mod tests {
    use super::*;
    use bimcraft_bim::Model;

    #[test]
    fn plan_build_runs() {
        let m = Model::new();
        let info = ViewInfo { mode: ViewModeKind::Plan2D, active_level: m.levels[0].id, selection: vec![], half_extent: 20.0, ground_extent: 20.0 };
        let dl = build(&m, &info);
        assert!(!dl.lines.is_empty());
    }

    #[test]
    fn three_d_build_runs() {
        let mut m = Model::new();
        let lvl = m.levels[0].id;
        let w = m.add_wall(lvl, bimcraft_geom::Vec2::ZERO, bimcraft_geom::Vec2::new(5.0, 0.0), 0.2, 3.0);
        m.add_opening(ElementKind::Door, bimcraft_bim::Opening { wall: w, t: 0.5, width: 0.9, height: 2.1, sill: 0.0 });
        let info = ViewInfo { mode: ViewModeKind::Perspective3D, active_level: lvl, selection: vec![w], half_extent: 20.0, ground_extent: 30.0 };
        let dl = build(&m, &info);
        assert!(!dl.tris.is_empty());
    }
}
