/* SPDX-License-Identifier: Apache-2.0 */
/**
 * trace-ref.js — Trace Reference (0.8 SU.1055, session bim-08): another view — a level's plan, its reflected ceiling plan or a callout (cropped) — shown ghosted under the plan you draw on,
 * moved and turned until it lines up. Reference only: it is never picked, never printed, never in the IFC; the settings are
 * kept per level in this browser (trace-ref-ui.js). DOM-free; bin/test-bimcraft.mjs --traceref.
 *
 *   referenceSegs(walls, boxes, { dx, dy, angle }) → flat [x1, y1, x2, y2, …] in plan mm
 *     walls: [{ a, b, t }] (centre line + thickness), boxes: [{ minX, minY, maxX, maxY }]; the set is turned by `angle` degrees
 *     about its own centre, then moved by (dx, dy)
 *   fitOffset(fromPts, toPts) → { dx, dy } that carries the first point onto the second (Move by two points)
 */
const rect = (p) => [p[0][0], p[0][1], p[1][0], p[1][1], p[1][0], p[1][1], p[2][0], p[2][1], p[2][0], p[2][1], p[3][0], p[3][1], p[3][0], p[3][1], p[0][0], p[0][1]];

export function referenceSegs(walls, boxes = [], { dx = 0, dy = 0, angle = 0 } = {}) {
  const raw = [];
  for (const w of walls) {
    const L = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) || 1, n = [-(w.b[1] - w.a[1]) / L * (w.t || 0) / 2, (w.b[0] - w.a[0]) / L * (w.t || 0) / 2];
    raw.push(...rect([[w.a[0] - n[0], w.a[1] - n[1]], [w.b[0] - n[0], w.b[1] - n[1]], [w.b[0] + n[0], w.b[1] + n[1]], [w.a[0] + n[0], w.a[1] + n[1]]]));
  }
  for (const b of boxes) raw.push(...rect([[b.minX, b.minY], [b.maxX, b.minY], [b.maxX, b.maxY], [b.minX, b.maxY]]));
  return placeSegs(raw, { dx, dy, angle });
}

/** Segments [x1, y1, x2, y2, …] turned by `angle` degrees about their own centre, then moved by (dx, dy). */
export function placeSegs(raw, { dx = 0, dy = 0, angle = 0 } = {}) {
  if (!raw.length) return raw;
  let cx = 0, cy = 0;
  for (let i = 0; i < raw.length; i += 2) { cx += raw[i]; cy += raw[i + 1]; }
  cx /= raw.length / 2; cy /= raw.length / 2;
  const a = (Number(angle) || 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a), ox = Number(dx) || 0, oy = Number(dy) || 0;
  const out = new Array(raw.length);
  for (let i = 0; i < raw.length; i += 2) {
    const x = raw[i] - cx, y = raw[i + 1] - cy;
    out[i] = cx + x * c - y * s + ox; out[i + 1] = cy + x * s + y * c + oy;
  }
  return out;
}

/** Segments cut to a crop rectangle [x0, y0, x1, y1] (Liang–Barsky): what a callout view shows of its parent. */
export function clipSegs(segs, crop) {
  const [x0, y0, x1, y1] = [Math.min(crop[0], crop[2]), Math.min(crop[1], crop[3]), Math.max(crop[0], crop[2]), Math.max(crop[1], crop[3])];
  const out = [];
  for (let i = 0; i + 3 < segs.length; i += 4) {
    const ax = segs[i], ay = segs[i + 1], dx = segs[i + 2] - ax, dy = segs[i + 3] - ay;
    let t0 = 0, t1 = 1, keep = true;
    for (const [p, q] of [[-dx, ax - x0], [dx, x1 - ax], [-dy, ay - y0], [dy, y1 - ay]]) {
      if (p === 0) { if (q < 0) { keep = false; break; } continue; }
      const r = q / p;
      if (p < 0) { if (r > t1) { keep = false; break; } if (r > t0) t0 = r; } else { if (r < t0) { keep = false; break; } if (r < t1) t1 = r; }
    }
    if (keep && t1 > t0) out.push(ax + t0 * dx, ay + t0 * dy, ax + t1 * dx, ay + t1 * dy);
  }
  return out;
}

/** A trace reference names a level (its GlobalId), a level's reflected ceiling plan ('rcp:<GlobalId>') or a callout ('co:<id>'). */
export function parseRef(ref) {
  const s = String(ref || '');
  let m;
  if ((m = /^rcp:(.+)$/.exec(s))) return { kind: 'rcp', level: m[1] };
  if ((m = /^co:(callout-\d+)$/.exec(s))) return { kind: 'callout', id: m[1] };
  return s ? { kind: 'plan', level: s } : null;
}

export const fitOffset = (from, to) => ({ dx: to[0] - from[0], dy: to[1] - from[1] });
