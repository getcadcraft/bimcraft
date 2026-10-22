//! BimCraft geometry: f64 scalar math with a Z-up convention (Blender-style).
//!
//! Clean-room foundation for the BIMCraft Rust edition. The parity roadmap
//! (docs/PARITY_ROADMAP.md) describes how this crate is progressively aligned
//! with `cadcraft-geom` (MIT OR Apache-2.0).

/// 3D vector, f64, Z-up.
#[derive(Clone, Copy, Debug, Default, PartialEq)]
pub struct Vec3 {
    pub x: f64,
    pub y: f64,
    pub z: f64,
}

impl Vec3 {
    pub const ZERO: Vec3 = Vec3 { x: 0.0, y: 0.0, z: 0.0 };

    pub fn new(x: f64, y: f64, z: f64) -> Self {
        Self { x, y, z }
    }

    pub fn splat(v: f64) -> Self {
        Self { x: v, y: v, z: v }
    }

    pub fn xy(self) -> Vec2 {
        Vec2 { x: self.x, y: self.y }
    }

    pub fn dot(self, o: Self) -> f64 {
        self.x * o.x + self.y * o.y + self.z * o.z
    }

    pub fn cross(self, o: Self) -> Self {
        Self { x: self.y * o.z - self.z * o.y, y: self.z * o.x - self.x * o.z, z: self.x * o.y - self.y * o.x }
    }

    pub fn length(self) -> f64 {
        self.dot(self).sqrt()
    }

    pub fn normalize(self) -> Self {
        let l = self.length();
        if l > 1e-12 {
            self * (1.0 / l)
        } else {
            Self::ZERO
        }
    }

    pub fn dist(self, o: Self) -> f64 {
        (self - o).length()
    }
}

impl std::ops::Add for Vec3 {
    type Output = Vec3;
    fn add(self, o: Self) -> Self {
        Self { x: self.x + o.x, y: self.y + o.y, z: self.z + o.z }
    }
}

impl std::ops::Sub for Vec3 {
    type Output = Vec3;
    fn sub(self, o: Self) -> Self {
        Self { x: self.x - o.x, y: self.y - o.y, z: self.z - o.z }
    }
}

impl std::ops::Mul<f64> for Vec3 {
    type Output = Vec3;
    fn mul(self, s: f64) -> Self {
        Self { x: self.x * s, y: self.y * s, z: self.z * s }
    }
}

/// 2D vector, f64 (plan/XY plane).
#[derive(Clone, Copy, Debug, Default, PartialEq)]
pub struct Vec2 {
    pub x: f64,
    pub y: f64,
}

impl Vec2 {
    pub const ZERO: Vec2 = Vec2 { x: 0.0, y: 0.0 };

    pub fn new(x: f64, y: f64) -> Self {
        Self { x, y }
    }

    pub fn to3(self, z: f64) -> Vec3 {
        Vec3::new(self.x, self.y, z)
    }

    pub fn dot(self, o: Self) -> f64 {
        self.x * o.x + self.y * o.y
    }

    pub fn length(self) -> f64 {
        self.dot(self).sqrt()
    }

    pub fn dist(self, o: Self) -> f64 {
        (self - o).length()
    }

    pub fn normalize(self) -> Self {
        let l = self.length();
        if l > 1e-12 {
            self * (1.0 / l)
        } else {
            Self::ZERO
        }
    }

    /// Left-hand perpendicular in the XY plane.
    pub fn perp(self) -> Self {
        Self { x: -self.y, y: self.x }
    }

    pub fn angle(self) -> f64 {
        self.y.atan2(self.x)
    }
}

impl std::ops::Add for Vec2 {
    type Output = Vec2;
    fn add(self, o: Self) -> Self {
        Self { x: self.x + o.x, y: self.y + o.y }
    }
}

impl std::ops::Sub for Vec2 {
    type Output = Vec2;
    fn sub(self, o: Self) -> Self {
        Self { x: self.x - o.x, y: self.y - o.y }
    }
}

impl std::ops::Mul<f64> for Vec2 {
    type Output = Vec2;
    fn mul(self, s: f64) -> Self {
        Self { x: self.x * s, y: self.y * s }
    }
}

/// Signed area of a closed XY polygon (positive = counter-clockwise).
pub fn poly_area(pts: &[Vec2]) -> f64 {
    let n = pts.len();
    if n < 3 {
        return 0.0;
    }
    let mut a = 0.0;
    for i in 0..n {
        let p = pts[i];
        let q = pts[(i + 1) % n];
        a += p.x * q.y - q.x * p.y;
    }
    a / 2.0
}

/// Intersect a ray (origin `o`, normalized direction `d`) with the Z=0 ground plane.
/// Returns None when the ray is parallel or points away from the plane.
pub fn ray_ground(o: Vec3, d: Vec3) -> Option<Vec3> {
    if d.z.abs() < 1e-9 {
        return None;
    }
    let t = -o.z / d.z;
    if t <= 1e-9 {
        return None;
    }
    Some(o + d * t)
}

/// Shortest distance from point `p` to segment `a-b` (XY plane).
pub fn dist_point_segment_xy(p: Vec2, a: Vec2, b: Vec2) -> f64 {
    let ab = b - a;
    let l2 = ab.dot(ab);
    if l2 < 1e-12 {
        return p.dist(a);
    }
    let t = ((p - a).dot(ab) / l2).clamp(0.0, 1.0);
    p.dist(a + ab * t)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn vec_basics() {
        let a = Vec3::new(3.0, 0.0, 4.0);
        assert!((a.length() - 5.0).abs() < 1e-12);
        let c = Vec3::new(1.0, 0.0, 0.0).cross(Vec3::new(0.0, 1.0, 0.0));
        assert!((c.z - 1.0).abs() < 1e-12);
    }

    #[test]
    fn polygon_area() {
        let sq = [Vec2::ZERO, Vec2::new(2.0, 0.0), Vec2::new(2.0, 2.0), Vec2::new(0.0, 2.0)];
        assert!((poly_area(&sq) - 4.0).abs() < 1e-12);
    }

    #[test]
    fn ground_pick() {
        let hit = ray_ground(Vec3::new(0.0, 0.0, 10.0), Vec3::new(0.0, 0.0, -1.0));
        assert_eq!(hit, Some(Vec3::ZERO));
    }
}
