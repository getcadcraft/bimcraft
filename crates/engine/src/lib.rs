//! BimCraft engine: session state, commands, undo/redo, camera and tools.
//!
//! Modeled on the same seams as the storytold Craft apps (MIT OR Apache-2.0):
//! a UI-agnostic `Session` owning the model, command entry points, and
//! snapshot-based history. The parity roadmap (docs/PARITY_ROADMAP.md) maps
//! how this grows toward `cadcraft-engine`'s role.

use bimcraft_bim::{ElementKind, Id, Model, Opening};
use bimcraft_geom::{ray_ground, Vec2, Vec3};

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum ViewMode {
    /// Orthographic top-down plan.
    Plan2D,
    /// Orbiting perspective view.
    Perspective3D,
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Tool {
    Select,
    Wall,
    Door,
    Window,
    Slab,
    Ceiling,
}

impl Tool {
    pub fn label(self) -> &'static str {
        match self {
            Tool::Select => "Select",
            Tool::Wall => "Wall",
            Tool::Door => "Door",
            Tool::Window => "Window",
            Tool::Slab => "Floor Slab",
            Tool::Ceiling => "Ceiling",
        }
    }

    pub fn hint(self) -> &'static str {
        match self {
            Tool::Select => "Click: select  ·  Esc: deselect  ·  Del: delete",
            Tool::Wall => "Click: start point  ·  Click again: end point",
            Tool::Door | Tool::Window => "Click on a wall to place",
            Tool::Slab | Tool::Ceiling => "Click two opposite corners",
        }
    }
}

/// Orbit camera for the 3D view (Z-up).
#[derive(Clone, Copy, Debug)]
pub struct Camera {
    pub target: Vec3,
    pub distance: f64,
    pub yaw: f64,
    pub pitch: f64,
}

impl Default for Camera {
    fn default() -> Self {
        Self { target: Vec3::new(3.0, 3.0, 1.0), distance: 24.0, yaw: 0.8, pitch: 0.7 }
    }
}

impl Camera {
    pub fn eye(&self) -> Vec3 {
        let cp = self.pitch.clamp(0.05, 1.55).cos();
        Vec3::new(
            self.target.x + self.distance * cp * self.yaw.cos(),
            self.target.y + self.distance * cp * self.yaw.sin(),
            self.target.z + self.distance * self.pitch.clamp(0.05, 1.55).sin(),
        )
    }

    /// View basis: (right, up, forward) with forward pointing at the target.
    pub fn basis(&self) -> (Vec3, Vec3, Vec3) {
        let eye = self.eye();
        let f = (self.target - eye).normalize();
        let up = Vec3::new(0.0, 0.0, 1.0);
        let mut r = f.cross(up).normalize();
        if r.length() < 1e-6 {
            r = Vec3::new(1.0, 0.0, 0.0);
        }
        let u = r.cross(f).normalize();
        (r, u, f)
    }

    /// Unproject a screen point (px, with origin at rect top-left) onto the Z=0 plane.
    pub fn pick_ground(&self, sx: f64, sy: f64, rect_w: f64, rect_h: f64, fov_y: f64) -> Option<Vec3> {
        let (r, u, f) = self.basis();
        let eye = self.eye();
        let focal = rect_h / (2.0 * (fov_y / 2.0).tan());
        let ndc_x = sx - rect_w / 2.0;
        let ndc_y = rect_h / 2.0 - sy;
        let d = (f * focal + r * ndc_x + u * ndc_y).normalize();
        ray_ground(eye, d)
    }
}

/// Plan view state for the 2D mode.
#[derive(Clone, Copy, Debug)]
pub struct Plan {
    pub center: Vec2,
    /// Pixels per meter.
    pub zoom: f64,
}

impl Default for Plan {
    fn default() -> Self {
        Self { center: Vec2::new(3.0, 3.0), zoom: 48.0 }
    }
}

/// Interactive session: model + history + view + tool state.
#[derive(Clone, Debug)]
pub struct Session {
    pub model: Model,
    undo_stack: Vec<Model>,
    redo_stack: Vec<Model>,
    pub selection: Vec<Id>,
    pub tool: Tool,
    pub view: ViewMode,
    pub camera: Camera,
    pub plan: Plan,
    pub active_level: Option<Id>,
    /// Pending clicks of the active tool (wall start, slab first corner, ...).
    pub pending: Vec<Vec2>,
    /// Last known world-space cursor position (status bar + tool preview).
    pub cursor: Vec3,
    pub status: String,
}

impl Default for Session {
    fn default() -> Self {
        let model = Model::new();
        let active_level = model.levels.first().map(|l| l.id);
        Self {
            model,
            undo_stack: Vec::new(),
            redo_stack: Vec::new(),
            selection: Vec::new(),
            tool: Tool::Wall,
            view: ViewMode::Plan2D,
            camera: Camera::default(),
            plan: Plan::default(),
            active_level,
            pending: Vec::new(),
            cursor: Vec3::ZERO,
            status: "Ready".into(),
        }
    }
}

impl Session {
    /// Open an undo snapshot; use before direct model mutations (e.g. from the
    /// properties dock) so the change can be undone.
    pub fn begin_edit(&mut self) {
        self.snapshot();
    }

    fn snapshot(&mut self) {
        self.undo_stack.push(self.model.clone());
        if self.undo_stack.len() > 128 {
            self.undo_stack.remove(0);
        }
        self.redo_stack.clear();
    }

    pub fn undo(&mut self) {
        if let Some(m) = self.undo_stack.pop() {
            self.redo_stack.push(std::mem::replace(&mut self.model, m));
            self.prune_selection();
            self.status = "Undo".into();
        }
    }

    pub fn redo(&mut self) {
        if let Some(m) = self.redo_stack.pop() {
            self.undo_stack.push(std::mem::replace(&mut self.model, m));
            self.prune_selection();
            self.status = "Redo".into();
        }
    }

    fn prune_selection(&mut self) {
        self.selection.retain(|id| self.model.element(*id).is_some());
    }

    pub fn set_tool(&mut self, tool: Tool) {
        self.tool = tool;
        self.pending.clear();
        self.status = tool.label().into();
    }

    pub fn set_view(&mut self, view: ViewMode) {
        self.view = view;
        self.pending.clear();
    }

    pub fn select(&mut self, id: Option<Id>) {
        self.selection.clear();
        if let Some(id) = id {
            self.selection.push(id);
        }
    }

    pub fn selected(&self) -> Option<Id> {
        self.selection.first().copied()
    }

    pub fn cancel_pending(&mut self) {
        if !self.pending.is_empty() {
            self.pending.clear();
            self.status = "Cancelled".into();
        }
    }

    pub fn add_wall(&mut self, a: Vec2, b: Vec2) {
        let lvl = self.active_level_id();
        self.snapshot();
        let id = self.model.add_wall(lvl, a, b, 0.2, self.level_height());
        self.selection = vec![id];
        self.status = format!("Wall {} added", id);
    }

    pub fn place_opening(&mut self, kind: ElementKind, world: Vec2) {
        let Some((wall, t)) = self.model.host_wall_at(world, 1.0) else {
            self.status = "Click on a wall".into();
            return;
        };
        self.snapshot();
        let o = match kind {
            ElementKind::Door => Opening { wall, t, width: 0.9, height: 2.1, sill: 0.0 },
            _ => Opening { wall, t, width: 1.2, height: 1.4, sill: 0.9 },
        };
        let id = self.model.add_opening(kind, o);
        self.selection = vec![id];
        self.status = format!("{} {} placed", if kind == ElementKind::Door { "Door" } else { "Window" }, id);
    }

    pub fn add_rect_plate(&mut self, kind: ElementKind, a: Vec2, b: Vec2) {
        let pts = Model::rect_poly(a, b);
        if !Model::poly_valid(&pts) {
            self.status = "Degenerate rectangle".into();
            return;
        }
        let lvl = self.active_level_id();
        self.snapshot();
        let id = match kind {
            ElementKind::Slab => self.model.add_slab(lvl, pts, 0.25),
            _ => self.model.add_ceiling(lvl, pts, 0.1),
        };
        self.selection = vec![id];
        self.status = format!("{} added", self.model.element(id).map(|e| e.name.clone()).unwrap_or_default());
    }

    pub fn delete_selected(&mut self) {
        if self.selection.is_empty() {
            return;
        }
        self.snapshot();
        let sel = std::mem::take(&mut self.selection);
        for id in sel {
            self.model.delete(id);
        }
        self.status = "Deleted".into();
    }

    pub fn add_level(&mut self) {
        self.snapshot();
        let idx = self.model.levels.len();
        let elev = self.model.levels.last().map(|l| l.elevation + l.height).unwrap_or(0.0);
        let id = self.model.add_level(&format!("Level {idx}"), elev, 3.0);
        self.active_level = Some(id);
        self.status = format!("Level {idx} added");
    }

    pub fn set_active_level(&mut self, id: Id) {
        self.active_level = Some(id);
    }

    pub fn active_level_id(&self) -> Id {
        self.model.active_or_first_level(self.active_level).id
    }

    pub fn level_height(&self) -> f64 {
        self.model.active_or_first_level(self.active_level).height.max(0.5)
    }

    pub fn level_elevation(&self) -> f64 {
        self.model.active_or_first_level(self.active_level).elevation
    }

    /// Feed a plan-space click into the active tool. `p` is in world XY meters.
    pub fn click_plan(&mut self, p: Vec2) {
        match self.tool {
            Tool::Select => {
                let hit = self.pick_plan(p);
                self.select(hit);
                self.status = hit
                    .map(|id| format!("Selected {}", self.model.element(id).map(|e| e.name.clone()).unwrap_or_default()))
                    .unwrap_or_else(|| "Nothing selected".into());
            }
            Tool::Wall => {
                if self.pending.is_empty() {
                    self.pending.push(p);
                    self.status = "Wall: pick end point".into();
                } else {
                    let a = self.pending[0];
                    self.pending.clear();
                    self.add_wall(a, p);
                }
            }
            Tool::Door | Tool::Window => self.place_opening(self.tool_kind(), p),
            Tool::Slab | Tool::Ceiling => {
                if self.pending.is_empty() {
                    self.pending.push(p);
                    self.status = "Pick opposite corner".into();
                } else {
                    let a = self.pending[0];
                    self.pending.clear();
                    self.add_rect_plate(self.tool_kind(), a, p);
                }
            }
        }
    }

    fn tool_kind(&self) -> ElementKind {
        match self.tool {
            Tool::Door => ElementKind::Door,
            Tool::Window => ElementKind::Window,
            Tool::Slab => ElementKind::Slab,
            Tool::Ceiling => ElementKind::Ceiling,
            _ => ElementKind::Wall,
        }
    }

    /// Nearest plan element within `tol` meters (walls, slabs, ceilings).
    pub fn pick_plan(&self, p: Vec2) -> Option<Id> {
        let mut best: Option<(Id, f64)> = None;
        let tol = 0.35;
        for e in &self.model.elements {
            let d = match &e.data {
                bimcraft_bim::ElementData::Wall(w) => bimcraft_geom::dist_point_segment_xy(p, w.a, w.b),
                bimcraft_bim::ElementData::Slab(_) | bimcraft_bim::ElementData::Ceiling(_) => {
                    if let Some((_, pts, _)) = e.data.plan_poly() {
                        if point_in_poly(p, pts) {
                            0.0
                        } else {
                            pts.windows(2).map(|w| bimcraft_geom::dist_point_segment_xy(p, w[0], w[1])).fold(f64::INFINITY, f64::min)
                        }
                    } else {
                        f64::INFINITY
                    }
                }
                bimcraft_bim::ElementData::Opening(_) => f64::INFINITY,
            };
            if d < tol && best.map(|(_, bd)| d < bd).unwrap_or(true) {
                best = Some((e.id, d));
            }
        }
        best.map(|(id, _)| id)
    }
}

pub fn point_in_poly(p: Vec2, pts: &[Vec2]) -> bool {
    let mut inside = false;
    let n = pts.len();
    if n < 3 {
        return false;
    }
    let mut j = n - 1;
    for i in 0..n {
        let a = pts[j];
        let b = pts[i];
        if (b.y > p.y) != (a.y > p.y) && p.x < (a.x - b.x) * (p.y - b.y) / (a.y - b.y) + b.x {
            inside = !inside;
        }
        j = i;
    }
    inside
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn undo_restores_model() {
        let mut s = Session::default();
        let n0 = s.model.elements.len();
        s.add_wall(Vec2::ZERO, Vec2::new(4.0, 0.0));
        assert_eq!(s.model.elements.len(), n0 + 1);
        s.undo();
        assert_eq!(s.model.elements.len(), n0);
        s.redo();
        assert_eq!(s.model.elements.len(), n0 + 1);
    }

    #[test]
    fn wall_tool_two_clicks() {
        let mut s = Session::default();
        s.set_tool(Tool::Wall);
        s.click_plan(Vec2::ZERO);
        assert_eq!(s.pending.len(), 1);
        s.click_plan(Vec2::new(5.0, 0.0));
        assert!(s.pending.is_empty());
        assert_eq!(s.model.walls().count(), 1);
    }

    #[test]
    fn door_places_on_wall() {
        let mut s = Session::default();
        s.set_tool(Tool::Wall);
        s.click_plan(Vec2::ZERO);
        s.click_plan(Vec2::new(6.0, 0.0));
        s.set_tool(Tool::Door);
        s.click_plan(Vec2::new(2.0, 0.02));
        assert_eq!(s.model.elements.iter().filter(|e| e.kind == ElementKind::Door).count(), 1);
    }
}
