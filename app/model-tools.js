/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-tools.js — where a click lands in the plan view (0.5 part 3, BM.3): snapping for the drawing tools. No DOM:
 * bin/test-bimcraft.mjs --model runs it in Node. Plan mm throughout.
 *
 *   snapPoint(p, { walls, points }, { tol, from, ortho, step, round })
 *     → { p: [x, y], kind: 'end' | 'mid' | 'grid' | 'cloud' | 'on' | 'angle' | 'ortho' | 'align' | 'free', angle?, wall?, guides? }
 *   walls [{ a, b, t }] (centre lines; their faces snap too), points [[x, y]] (the chain being drawn, other free points),
 *   lines [{ a, b }] (grid lines, 0.6 DF.16: on them, and a direction from `from` stops where it crosses one), gridPoints
 *   [[x, y]] (where grid lines cross: kind 'grid', as strong as a wall's end), nearest(p, tol) → [x, y] | null (a point
 *   cloud's slice, 0.6 DF.22: kind 'cloud', after ends and middles)
 *   tol: how near counts (mm — the page passes so many screen pixels in mm); from: the last point (angles, lengths);
 *   ortho: only 0 / 90 / 180 / 270° from `from` (Shift); step: angle step when nothing else snaps (15°, held when within
 *   3°); round: length step for a free direction (1/2" or 10 mm), so typed-looking numbers come out of clicks.
 *   align: opt-in horizontal/vertical endpoint guides, including face corners; guides are [x0,y0,x1,y1].
 *   closesChain(points, p, tol) → true when p is back on the chain's first point (a room closes)
 *   loopSide(points) → 'right' | 'left': where the outside is for walls drawn along this closed loop (anticlockwise
 *   loop: outside on the right)
 */
import { dist2 as dist } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
import { ringArea as loopArea } from './geom2d.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
export { loopArea };
const D2R = Math.PI / 180;

export function snapPoint(p, ctx = {}, { tol = 150, from = null, ortho = false, step = 15, round = 0, align = false } = {}) {
  const walls = ctx.walls || [], extra = ctx.points || [], lines = (ctx.lines || []).map((l) => ({ a: l.a, b: l.b, t: 0, grid: true }));
  let best = null;
  const anchors = [];
  const offer = (q, kind, rank, wall) => { if (align && kind === 'end') anchors.push(q); const d = dist(p, q); if (d <= tol && (!best || rank < best.rank || (rank === best.rank && d < best.d))) best = { p: q, kind, rank, d, wall }; };
  for (const w of walls) {
    offer(w.a, 'end', 0, w); offer(w.b, 'end', 0, w);
    offer([(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2], 'mid', 1, w);
    // the face corners at each end
    const L = dist(w.a, w.b);
    if (L > 0 && w.t > 0) {
      const n = [-(w.b[1] - w.a[1]) / L * w.t / 2, (w.b[0] - w.a[0]) / L * w.t / 2];
      for (const e of [w.a, w.b]) { offer([e[0] + n[0], e[1] + n[1]], 'end', 0, w); offer([e[0] - n[0], e[1] - n[1]], 'end', 0, w); }
    }
  }
  for (const q of extra) offer(q, 'end', 0, null);
  for (const q of ctx.gridPoints || []) offer(q, 'grid', 0, null);
  // a point cloud's slice (0.6 DF.22): the scanned point nearest the pointer, after ends and middles
  if (ctx.nearest) { const q = ctx.nearest(p, tol); if (q) offer(q, 'cloud', 2, null); }
  if (best) return { p: best.p, kind: best.kind, wall: best.wall };
  // Alignment is opt-in: other tools keep their existing snap priorities.
  const alignment = (q, dir = null) => {
    let hit = null;
    for (const anchor of anchors) for (const axis of [0, 1]) {
      let at;
      if (dir) {
        if (Math.abs(dir[axis]) < 1e-9) continue;
        const l = (anchor[axis] - from[axis]) / dir[axis];
        if (l <= 1) continue;
        at = [from[0] + dir[0] * l, from[1] + dir[1] * l];
      } else { at = [...q]; at[axis] = anchor[axis]; }
      const d = dist(p, at);
      if (dist(anchor, at) > tol && d <= tol && (!hit || d < hit.d)) hit = { p: at, kind: 'align', guides: [[...anchor, ...at]], d };
    }
    return hit;
  };
  // along a direction from the last point (ortho, or an angle step)
  if (from) {
    const dx = p[0] - from[0], dy = p[1] - from[1], len = Math.hypot(dx, dy);
    if (len > 0) {
      let ang = Math.atan2(dy, dx) / D2R, kind = null;
      if (ortho) { ang = Math.round(ang / 90) * 90; kind = 'ortho'; }
      else if (step > 0) { const s = Math.round(ang / step) * step; if (Math.abs(s - ang) <= 3) { ang = s; kind = 'angle'; } }
      if (kind) {
        let l = len * Math.cos((Math.atan2(dy, dx) / D2R - ang) * D2R);
        // where this direction crosses a wall (its centre line or a face) near the pointer, stop there
        const dir = [Math.cos(ang * D2R), Math.sin(ang * D2R)];
        let hit = null;
        for (const w of [...walls, ...lines]) {
          for (const off of w.grid ? [0] : [0, w.t / 2, -w.t / 2]) {
            const L = dist(w.a, w.b); if (!L) continue;
            const u = [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L], n = [-u[1], u[0]];
            const a = [w.a[0] + n[0] * off, w.a[1] + n[1] * off];
            const c = dir[0] * u[1] - dir[1] * u[0];
            if (Math.abs(c) < 1e-9) continue;
            const s = ((a[0] - from[0]) * u[1] - (a[1] - from[1]) * u[0]) / c, tt = ((a[0] - from[0]) * dir[1] - (a[1] - from[1]) * dir[0]) / c;
            if (s > 1 && tt >= -1 && tt <= L + 1 && Math.abs(s - l) <= tol && (!hit || Math.abs(s - l) < Math.abs(hit.s - l))) hit = { s, w };
          }
        }
        if (hit) return { p: [from[0] + dir[0] * hit.s, from[1] + dir[1] * hit.s], kind: 'on', angle: ang, wall: hit.w.grid ? undefined : hit.w };
        const aligned = align && alignment(p, dir);
        if (aligned) return { ...aligned, angle: ang };
        if (round > 0) l = Math.max(round, Math.round(l / round) * round);
        return { p: [from[0] + dir[0] * l, from[1] + dir[1] * l], kind, angle: ang };
      }
    }
  }
  // on a wall: its centre line or a face, nearest point
  let on = null;
  for (const w of [...walls, ...lines]) {
    const L = dist(w.a, w.b); if (!L) continue;
    const u = [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L], n = [-u[1], u[0]];
    for (const off of w.grid ? [0] : [0, w.t / 2, -w.t / 2]) {
      const a = [w.a[0] + n[0] * off, w.a[1] + n[1] * off];
      const s = Math.max(0, Math.min(L, (p[0] - a[0]) * u[0] + (p[1] - a[1]) * u[1]));
      const q = [a[0] + u[0] * s, a[1] + u[1] * s], d = dist(p, q);
      if (d <= tol * 0.6 && (!on || d < on.d)) on = { p: q, d, w };
    }
  }
  if (on) return { p: on.p, kind: 'on', wall: on.w.grid ? undefined : on.w };
  const aligned = align && alignment(p);
  if (aligned) return aligned;
  if (from && round > 0) {
    const dx = p[0] - from[0], dy = p[1] - from[1], len = Math.hypot(dx, dy);
    if (len > 0) { const l = Math.max(round, Math.round(len / round) * round); return { p: [from[0] + dx / len * l, from[1] + dy / len * l], kind: 'free' }; }
  }
  return { p: [p[0], p[1]], kind: 'free' };
}

export const closesChain = (points, p, tol = 1) => points.length >= 3 && dist(points[0], p) <= tol;

/** Signed area of a closed loop of points (anticlockwise > 0). */
export const loopSide = (points) => (loopArea(points) > 0 ? 'right' : 'left');

/** Centre lines for a path drawn on a wall face. Outside is explicitly left/right of travel. */
export function wallPath(points, thickness, reference = 'center', side = 'left', axisOffset = undefined) {
  // Optional authoritative location-line offset; retain the established face-chain/miter algorithm.
  const off = axisOffset ?? (reference === 'center' ? 0 : thickness / 2 * (reference === 'outside' ? -1 : 1) * (side === 'left' ? 1 : -1));
  const segs = [];
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1], b = points[i], L = dist(a, b);
    if (L < 1) continue;
    const n = [-(b[1] - a[1]) / L * off, (b[0] - a[0]) / L * off];
    segs.push({ a: [a[0] + n[0], a[1] + n[1]], b: [b[0] + n[0], b[1] + n[1]], t: thickness });
  }
  const join = (a, b) => {
    const u = [a.b[0] - a.a[0], a.b[1] - a.a[1]], v = [b.b[0] - b.a[0], b.b[1] - b.a[1]];
    const cross = u[0] * v[1] - u[1] * v[0];
    if (Math.abs(cross) < 1e-9) return;
    const d = [b.a[0] - a.a[0], b.a[1] - a.a[1]], k = (d[0] * v[1] - d[1] * v[0]) / cross;
    const q = [a.a[0] + k * u[0], a.a[1] + k * u[1]];
    // Avoid unbounded mitres at nearly reversing corners.
    if (dist(q, a.b) > 4 * thickness || dist(q, b.a) > 4 * thickness) return;
    a.b = q; b.a = q;
  };
  for (let i = 1; i < segs.length; i++) join(segs[i - 1], segs[i]);
  if (segs.length >= 3 && dist(points[0], points[points.length - 1]) < 1) join(segs[segs.length - 1], segs[0]);
  return segs;
}
