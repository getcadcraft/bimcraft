//! BimCraft building information model: levels, grids, walls, openings,
//! floor slabs and ceilings.
//!
//! Clean-room BIM data model for the BIMCraft Rust edition. The parity roadmap
//! (docs/PARITY_ROADMAP.md) maps how this crate evolves toward the roles that
//! `cadcraft-doc` plays in CADCraft (MIT OR Apache-2.0).

use bimcraft_geom::{dist_point_segment_xy, poly_area, Vec2, Vec3};

pub type Id = u64;

/// A storey of the building. Elevation and height are in meters.
#[derive(Clone, Debug)]
pub struct Level {
    pub id: Id,
    pub name: String,
    pub elevation: f64,
    pub height: f64,
}

/// A datum line on the plan grid (structural grid, Blender-like reference).
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum GridAxis {
    /// Line runs along Y at x = `position` (vertical on plan).
    V,
    /// Line runs along X at y = `position` (horizontal on plan).
    H,
}

#[derive(Clone, Debug)]
pub struct Grid {
    pub id: Id,
    pub name: String,
    pub axis: GridAxis,
    pub position: f64,
}

/// Kind tag for fast picking/filtering.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum ElementKind {
    Wall,
    Door,
    Window,
    Slab,
    Ceiling,
}

/// Parametric wall: straight segment on a level, constant thickness/height.
#[derive(Clone, Debug)]
pub struct Wall {
    pub level: Id,
    pub a: Vec2,
    pub b: Vec2,
    pub thickness: f64,
    pub height: f64,
}

/// Door or window hosted in a wall. `t` is the normalized position (0..1)
/// along the wall centerline; `sill` is the height above level floor
/// (0 for doors).
#[derive(Clone, Debug)]
pub struct Opening {
    pub wall: Id,
    pub t: f64,
    pub width: f64,
    pub height: f64,
    pub sill: f64,
}

/// Horizontal floor slab bound to a level, extruded downward from the level top.
#[derive(Clone, Debug)]
pub struct Slab {
    pub level: Id,
    pub pts: Vec<Vec2>,
    pub thickness: f64,
}

/// Ceiling bound to a level, placed just under the level height.
#[derive(Clone, Debug)]
pub struct Ceiling {
    pub level: Id,
    pub pts: Vec<Vec2>,
    pub thickness: f64,
}

#[derive(Clone, Debug)]
pub enum ElementData {
    Wall(Wall),
    Opening(Opening),
    Slab(Slab),
    Ceiling(Ceiling),
}

#[derive(Clone, Debug)]
pub struct Element {
    pub id: Id,
    pub kind: ElementKind,
    pub name: String,
    pub data: ElementData,
}

impl ElementData {
    /// Shared view over plan-polygon elements (slabs and ceilings share shape).
    /// Returns (level id, polygon points, thickness).
    pub fn plan_poly(&self) -> Option<(Id, &[Vec2], f64)> {
        match self {
            ElementData::Slab(s) => Some((s.level, &s.pts, s.thickness)),
            ElementData::Ceiling(s) => Some((s.level, &s.pts, s.thickness)),
            _ => None,
        }
    }
}

/// The whole building model. Cheap clone enables snapshot undo.
#[derive(Clone, Debug, Default)]
pub struct Model {
    pub levels: Vec<Level>,
    pub grids: Vec<Grid>,
    pub elements: Vec<Element>,
    next_id: Id,
}

impl Model {
    pub fn new() -> Self {
        let mut m = Self { next_id: 1, ..Default::default() };
        let l0 = m.alloc();
        m.levels.push(Level { id: l0, name: "Level 0".into(), elevation: 0.0, height: 3.0 });
        let g0 = m.alloc();
        m.grids.push(Grid { id: g0, name: "A".into(), axis: GridAxis::V, position: 0.0 });
        let g1 = m.alloc();
        m.grids.push(Grid { id: g1, name: "1".into(), axis: GridAxis::H, position: 0.0 });
        m
    }

    fn alloc(&mut self) -> Id {
        let id = self.next_id;
        self.next_id += 1;
        id
    }

    pub fn level(&self, id: Id) -> Option<&Level> {
        self.levels.iter().find(|l| l.id == id)
    }

    pub fn active_or_first_level(&self, id: Option<Id>) -> &Level {
        self.levels.iter().find(|l| Some(l.id) == id).unwrap_or(&self.levels[0])
    }

    pub fn element(&self, id: Id) -> Option<&Element> {
        self.elements.iter().find(|e| e.id == id)
    }

    pub fn element_mut(&mut self, id: Id) -> Option<&mut Element> {
        self.elements.iter_mut().find(|e| e.id == id)
    }

    pub fn wall(&self, id: Id) -> Option<&Wall> {
        self.element(id).and_then(|e| match &e.data {
            ElementData::Wall(w) => Some(w),
            _ => None,
        })
    }

    pub fn walls(&self) -> impl Iterator<Item = &Element> {
        self.elements.iter().filter(|e| e.kind == ElementKind::Wall)
    }

    /// Openings hosted by the given wall.
    pub fn openings_for_wall(&self, wall_id: Id) -> Vec<&Element> {
        self.elements
            .iter()
            .filter(|e| matches!(e.kind, ElementKind::Door | ElementKind::Window))
            .filter(|e| match &e.data {
                ElementData::Opening(o) => o.wall == wall_id,
                _ => false,
            })
            .collect()
    }

    pub fn add_level(&mut self, name: &str, elevation: f64, height: f64) -> Id {
        let id = self.alloc();
        self.levels.push(Level { id, name: name.into(), elevation, height });
        id
    }

    pub fn add_grid(&mut self, name: &str, axis: GridAxis, position: f64) -> Id {
        let id = self.alloc();
        self.grids.push(Grid { id, name: name.into(), axis, position });
        id
    }

    pub fn add_wall(&mut self, level: Id, a: Vec2, b: Vec2, thickness: f64, height: f64) -> Id {
        let id = self.alloc();
        self.elements.push(Element {
            id,
            kind: ElementKind::Wall,
            name: format!("Wall {id}"),
            data: ElementData::Wall(Wall { level, a, b, thickness, height }),
        });
        id
    }

    pub fn add_opening(&mut self, kind: ElementKind, o: Opening) -> Id {
        let id = self.alloc();
        let name = match kind {
            ElementKind::Door => format!("Door {id}"),
            ElementKind::Window => format!("Window {id}"),
            _ => format!("Opening {id}"),
        };
        self.elements.push(Element { id, kind, name, data: ElementData::Opening(o) });
        id
    }

    pub fn add_slab(&mut self, level: Id, pts: Vec<Vec2>, thickness: f64) -> Id {
        let id = self.alloc();
        self.elements.push(Element {
            id,
            kind: ElementKind::Slab,
            name: format!("Floor {id}"),
            data: ElementData::Slab(Slab { level, pts, thickness }),
        });
        id
    }

    pub fn add_ceiling(&mut self, level: Id, pts: Vec<Vec2>, thickness: f64) -> Id {
        let id = self.alloc();
        self.elements.push(Element {
            id,
            kind: ElementKind::Ceiling,
            name: format!("Ceiling {id}"),
            data: ElementData::Ceiling(Ceiling { level, pts, thickness }),
        });
        id
    }

    pub fn delete(&mut self, id: Id) {
        self.elements.retain(|e| e.id != id);
        // Cascade: openings die with their host wall.
        self.elements.retain(|e| match &e.data {
            ElementData::Opening(o) => o.wall != id,
            _ => true,
        });
    }

    /// Wall centerline endpoints in world space (Z = level elevation).
    pub fn wall_centerline(&self, w: &Wall) -> (Vec3, Vec3) {
        let z = self.level(w.level).map(|l| l.elevation).unwrap_or(0.0);
        (w.a.to3(z), w.b.to3(z))
    }

    /// The 8 corners of a wall body: [bottom, top] x [side -thk/2, side +thk/2] x [a, b].
    pub fn wall_corners(&self, w: &Wall) -> [Vec3; 4] {
        let dir = (w.b - w.a).normalize();
        let n = dir.perp() * (w.thickness / 2.0);
        let z = self.level(w.level).map(|l| l.elevation).unwrap_or(0.0);
        [(w.a - n).to3(z), (w.b - n).to3(z), (w.b + n).to3(z), (w.a + n).to3(z)]
    }

    /// World-space quad for an opening, slightly offset off its wall face.
    /// Returns (quad corners, host wall). None when the host wall is missing.
    pub fn opening_quad(&self, o: &Opening) -> Option<([Vec3; 4], f64)> {
        let w = self.wall(o.wall)?;
        let z0 = self.level(w.level).map(|l| l.elevation).unwrap_or(0.0);
        let dir = (w.b - w.a).normalize();
        let n = dir.perp();
        let len = (w.b - w.a).length().max(1e-9);
        let c = w.a + (w.b - w.a) * o.t.clamp(0.0, 1.0);
        let half = (o.width / 2.0).min(len / 2.0);
        let p0 = c - dir * half;
        let p1 = c + dir * half;
        let zb = z0 + o.sill;
        let zt = zb + o.height;
        let off = 0.01;
        let q = [(p0 - n * off).to3(zb), (p1 - n * off).to3(zb), (p1 - n * off).to3(zt), (p0 - n * off).to3(zt)];
        Some((q, o.sill))
    }

    /// Try to host an opening on the nearest wall at world point `p` (XY).
    pub fn host_wall_at(&self, p: Vec2, max_dist: f64) -> Option<(Id, f64)> {
        let mut best: Option<(Id, f64, f64)> = None;
        for e in self.walls() {
            if let ElementData::Wall(w) = &e.data {
                let d = dist_point_segment_xy(p, w.a, w.b);
                if d <= max_dist {
                    let len = (w.b - w.a).length();
                    let t = if len > 1e-9 { ((p - w.a).dot(w.b - w.a) / (len * len)).clamp(0.05, 0.95) } else { 0.5 };
                    if best.map(|(_, bd, _)| d < bd).unwrap_or(true) {
                        best = Some((e.id, d, t));
                    }
                }
            }
        }
        best.map(|(id, _, t)| (id, t))
    }

    /// Rectangle (two opposite corners) as a 4-point polygon.
    pub fn rect_poly(a: Vec2, b: Vec2) -> Vec<Vec2> {
        vec![Vec2::new(a.x, a.y), Vec2::new(b.x, a.y), Vec2::new(b.x, b.y), Vec2::new(a.x, b.y)]
    }

    pub fn poly_valid(pts: &[Vec2]) -> bool {
        pts.len() >= 3 && poly_area(pts).abs() > 1e-9
    }

    /// Bounding box of every element (walls + slabs), Z-up. Used by "zoom to fit".
    pub fn bounds(&self) -> Option<(Vec3, Vec3)> {
        let mut min = Vec3::splat(f64::INFINITY);
        let mut max = Vec3::splat(f64::NEG_INFINITY);
        let mut any = false;
        for e in &self.elements {
            match &e.data {
                ElementData::Wall(w) => {
                    let z = self.level(w.level).map(|l| l.elevation).unwrap_or(0.0);
                    let top = z + w.height;
                    for p in [w.a, w.b] {
                        min = min.min_xy(p, z, top);
                        max = max.max_xy(p, z, top);
                        any = true;
                    }
                }
                ElementData::Slab(_) | ElementData::Ceiling(_) => {
                    if let Some((lvl, pts, thk)) = e.data.plan_poly() {
                        let z = self.level(lvl).map(|l| l.elevation).unwrap_or(0.0);
                        for p in pts {
                            min = min.min_xy(*p, z, z + thk);
                            max = max.max_xy(*p, z, z + thk);
                            any = true;
                        }
                    }
                }
                _ => {}
            }
        }
        any.then_some((min, max))
    }
}

trait MinMaxXY {
    fn min_xy(self, p: Vec2, z0: f64, z1: f64) -> Self;
    fn max_xy(self, p: Vec2, z0: f64, z1: f64) -> Self;
}

impl MinMaxXY for Vec3 {
    fn min_xy(mut self, p: Vec2, z0: f64, z1: f64) -> Self {
        self.x = self.x.min(p.x);
        self.y = self.y.min(p.y);
        self.z = self.z.min(z0.min(z1));
        self
    }
    fn max_xy(mut self, p: Vec2, z0: f64, z1: f64) -> Self {
        self.x = self.x.max(p.x);
        self.y = self.y.max(p.y);
        self.z = self.z.max(z0.max(z1));
        self
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn default_model_has_seed_data() {
        let m = Model::new();
        assert_eq!(m.levels.len(), 1);
        assert_eq!(m.grids.len(), 2);
    }

    #[test]
    fn wall_opening_cascade() {
        let mut m = Model::new();
        let lvl = m.levels[0].id;
        let w = m.add_wall(lvl, Vec2::ZERO, Vec2::new(6.0, 0.0), 0.2, 3.0);
        let d = m.add_opening(ElementKind::Door, Opening { wall: w, t: 0.5, width: 0.9, height: 2.1, sill: 0.0 });
        assert_eq!(m.elements.len(), 2);
        m.delete(w);
        assert!(m.element(d).is_none());
        assert!(m.element(w).is_none());
    }

    #[test]
    fn host_wall_picks_nearest() {
        let mut m = Model::new();
        let lvl = m.levels[0].id;
        m.add_wall(lvl, Vec2::ZERO, Vec2::new(6.0, 0.0), 0.2, 3.0);
        let (id, t) = m.host_wall_at(Vec2::new(3.0, 0.05), 1.0).unwrap();
        assert_eq!(t.abs() - 0.5, 0.0);
        assert!(m.wall(id).is_some());
    }
}
