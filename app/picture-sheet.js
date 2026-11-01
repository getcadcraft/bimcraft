/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — geometry only; the words are the host's (pic.* keys). */
/**
 * picture-sheet.js — a picture that stands on a vertical plane (D8.8 round 3: plane 'vertical', a → b over a level) drawn in the sheet
 * views that look straight at it (0.8 D8.8, round 5). DOM-free, no imports.
 *
 *   viewPlacement(pic, { dir, o, guid, dz, tolDeg, tolMm }) → [a, b, c, d, e, f] | null
 *     pic    a picture record (picture.js; its `a`, `b` are plan points of its level, its matrix runs in the plane's own mm)
 *     dir    the view's looking direction [x, y] (res-views.js: elevationDirs / sectionDir)
 *     o      the section's cut point [x, y], or null for an elevation
 *     guid   the section line's GlobalId (a picture put on that line always shows in its section)
 *     dz     the picture's level elevation minus the view's base level elevation (mm)
 *   → picture pixels (x right, y down) → view millimetres (x = plan point · right, y up from the view's base level), or null when the picture is
 *     hidden, on a level plane, or not facing the view (its plane is not within tolDeg of square to dir) or, in a section, not on the cut
 *     (more than tolMm from it) unless it was put on that section line.
 *   Seen from the back a picture is mirrored (the same as in 3D).
 */
import { matrix } from './picture.js';

export function viewPlacement(p, { dir, o = null, guid = '', dz = 0, tolDeg = 2, tolMm = 100 } = {}) {
  if (!p || p.hidden || p.plane !== 'vertical' || !Array.isArray(p.a) || !Array.isArray(p.b) || !Array.isArray(dir)) return null;
  const dx = p.b[0] - p.a[0], dy = p.b[1] - p.a[1], L = Math.hypot(dx, dy);
  if (!(L > 1)) return null;
  const u = [dx / L, dy / L], right = [dir[1], -dir[0]];
  const facing = Math.abs(u[0] * dir[0] + u[1] * dir[1]);          // 0 = the plane is square to the view
  if (facing > Math.sin(tolDeg * Math.PI / 180)) return null;
  const onSection = !!guid && p.section === guid;
  if (o && !onSection) {
    const off = (p.a[0] - o[0]) * dir[0] + (p.a[1] - o[1]) * dir[1];
    if (Math.abs(off) > tolMm) return null;
  }
  const s = u[0] * right[0] + u[1] * right[1];                       // +1 or -1 (to the tolerance)
  const sg = s < 0 ? -1 : 1;
  const A = p.a[0] * right[0] + p.a[1] * right[1];
  const m = matrix(p);
  return [sg * m[0], m[1], sg * m[2], m[3], A + sg * m[4], dz + m[5]].map((v) => Math.round(v * 1e6) / 1e6);
}
