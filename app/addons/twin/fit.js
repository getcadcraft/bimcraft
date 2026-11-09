/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — no words here: the add-on turns the results into sentences. */
/**
 * fit.js — where a Material flow layout stands in a BimCraft building, and whether its equipment touches the walls (0.9 TW.16, session bim-hosts-09). DOM-free, no imports: Node tests it.
 *
 * The layout is in metres, Z up, its own origin. The building gives it a place: an anchor { level (GlobalId), x, y (mm in the level's plan), rot (degrees), elevation (mm of the level) }.
 *
 *   toWorld(anchor, [x, y, z]) → [X, Y, Z] mm in the building (Z up)
 *   sceneMatrix(anchor) → 16 numbers (column-major) taking layout metres (Z up) to the 3D view's scene (metres, Y up): scene = (X, Z, −Y) / 1000
 *   checkFit({ parts, walls, anchor }) → { touching: [{ item, wall, kind: 'wall' }], items: n, checked: n }
 *       parts = lib/twin equipmentParts boxes {c: [x, y, z] m, s: [sx, sy, sz] m, yaw deg, col, item}; the floor mat (col 'floor') is not equipment
 *       walls = [{ guid, a: [x, y], b: [x, y], t, height, z0 }] mm in the level's plan (z0 = the wall's base above the level, default 0)
 *   This is geometry only: a box of the equipment against the wall's solid, in plan and in height. A door or window opening is not looked at (equipment does not pass through one), and
 *   nothing here says a layout "works": the flow run does not know about the walls.
 */
const D2R = Math.PI / 180;

export function toWorld(a, p) {
  const c = Math.cos(a.rot * D2R), s = Math.sin(a.rot * D2R);
  return [a.x + (p[0] * c - p[1] * s) * 1000, a.y + (p[0] * s + p[1] * c) * 1000, (a.elevation || 0) + p[2] * 1000];
}
export function sceneMatrix(a) {
  // scene = S · (T(X0, Y0, Z0)/1000 · Rz(rot) · layout) with S (x, y, z) → (x, z, −y)
  const c = Math.cos(a.rot * D2R), s = Math.sin(a.rot * D2R), ox = a.x / 1000, oy = a.y / 1000, oz = (a.elevation || 0) / 1000;
  // columns of Rz: (c, s, 0), (−s, c, 0), (0, 0, 1); then the swap
  return [c, 0, -s, 0,   -s, 0, -c, 0,   0, 1, 0, 0,   ox, oz, -oy, 1].map((v) => (Object.is(v, -0) ? 0 : v));
}

const rectOf = (cx, cy, hx, hy, ang) => ({ cx, cy, hx, hy, ux: Math.cos(ang), uy: Math.sin(ang) });
/** Separating-axis test of two oriented rectangles (touching edges do not count: a gap of 0 is a hit only when they overlap by more than `eps` mm). */
export function rectsOverlap(A, B, eps = 1) {
  const axes = [[A.ux, A.uy], [-A.uy, A.ux], [B.ux, B.uy], [-B.uy, B.ux]];
  for (const [ax, ay] of axes) {
    const proj = (R) => { const c = R.cx * ax + R.cy * ay, e = R.hx * Math.abs(R.ux * ax + R.uy * ay) + R.hy * Math.abs(-R.uy * ax + R.ux * ay); return [c - e, c + e]; };
    const [a0, a1] = proj(A), [b0, b1] = proj(B);
    if (a1 - eps <= b0 || b1 - eps <= a0) return false;
  }
  return true;
}

export function checkFit({ parts, walls, anchor }) {
  const touching = [], seen = new Set();
  const items = new Set();
  let checked = 0;
  const W = walls.map((w) => {
    const dx = w.b[0] - w.a[0], dy = w.b[1] - w.a[1], L = Math.hypot(dx, dy);
    return { w, rect: rectOf((w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2, L / 2, (w.t || 100) / 2, Math.atan2(dy, dx)), z0: (anchor.elevation || 0) + (w.z0 || 0), z1: (anchor.elevation || 0) + (w.z0 || 0) + (w.height || 3000) };
  });
  for (const p of parts) {
    if (p.col === 'floor') continue;
    checked++;
    items.add(p.item);
    const c = toWorld(anchor, p.c), hz = (p.s[2] * 1000) / 2;
    const ang = (p.yaw + anchor.rot) * D2R;
    const R = rectOf(c[0], c[1], (p.s[0] * 1000) / 2, (p.s[1] * 1000) / 2, ang);
    for (const x of W) {
      if (c[2] + hz <= x.z0 || c[2] - hz >= x.z1) continue;
      if (!rectsOverlap(R, x.rect)) continue;
      const key = p.item + '|' + x.w.guid;
      if (seen.has(key)) continue;
      seen.add(key);
      touching.push({ item: p.item, wall: x.w.guid, kind: 'wall' });
    }
  }
  return { touching, items: items.size, checked };
}
