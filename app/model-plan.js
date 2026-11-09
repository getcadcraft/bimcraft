/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-plan.js — what a level's plan view shows (0.5 part 3, BM.2). No DOM: bin/test-bimcraft.mjs --model runs it in
 * Node. Everything is in the storey's own plan axes, millimetres (x right, y up), so a building turned in its site still
 * draws square.
 *
 *   viewerToPlan(C, storeyWorldMm)          4×4 from the viewer's coordinates (a load result's batches: Y up, metres,
 *                                           after the coordination matrix C) to the storey's plan (mm, Z up)
 *   planCut(model, { M, storey, cutZ, skip }) → { cut: Map(key → Float64Array segs), below: Map(key → segs), bounds }
 *                                           every element of the storey cut by the plane cutZ above the level (cut lines),
 *                                           and the feature edges of what lies wholly below it, seen from above
 *   chainLoops(segs) → [[x, y, …] closed loops]   cut segments joined end to end (fills)
 *   wallPieces(wall, poly, openings, cutZ)   the drawn wall's joined outline with the openings the cut passes through taken
 *                                           out → [polygons]
 *   planBounds(…)                           the box round everything, for Fit
 *
 * Elements the tools made are drawn from their parameters (walls: wallPieces; doors and windows: model-openings.js
 * symbols), the rest from their meshes (planCut) — library items, imported models, anything another program wrote.
 */
import { runEdges } from './ifc-vis.js';
import { mul4, inv4 } from './ifc-util.js';
import { wallMap } from './model-arcs.js';   // 0.6 round 2 (bim-comforts_PART_2): curved walls

/** viewer (Y up, m) → model mm (Z up, file axes) → storey plan (mm). */
export function viewerToPlan(C, storeyWorldMm) {
  const S = [1000, 0, 0, 0, 0, 0, 1000, 0, 0, -1000, 0, 0, 0, 0, 0, 1];
  return mul4(inv4(storeyWorldMm), mul4(S, inv4(C)));
}

/**
 * Cut every element of `storey` (a storey expressID; batch.storey) at plan height cutZ (mm above the storey's origin).
 * `skip` = keys drawn some other way. Elements wholly below the cut (and not more than `depth` below `bottom`, 0 = the level)
 * give their feature edges instead (30°), flattened; with `top` (0.6 DF.19, a view range), elements wholly above the cut and
 * starting under `top` give theirs as `above` (drawn dashed: overhead). → { cut, below, above, bounds: { x0, y0, x1, y1 } | null }
 */
export function planCut(model, { M, storey, cutZ = 1200, skip = null, depth = 50, bottom = 0, top = null, edges = true } = {}) {
  const cut = new Map(), below = new Map(), above = new Map();
  const bb = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  const grow = (x, y) => { if (x < bb.x0) bb.x0 = x; if (x > bb.x1) bb.x1 = x; if (y < bb.y0) bb.y0 = y; if (y > bb.y1) bb.y1 = y; };
  for (const b of model.batches || []) {
    if (b.space || b.storey !== storey) continue;
    const P = b.positions, I = b.indices, E = b.elems;
    // the batch's vertices in plan axes, once
    const n = P.length / 3, X = new Float64Array(n), Y = new Float64Array(n), Z = new Float64Array(n);
    for (let i = 0; i < n; i++) {
      const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
      X[i] = M[0] * x + M[4] * y + M[8] * z + M[12];
      Y[i] = M[1] * x + M[5] * y + M[9] * z + M[13];
      Z[i] = M[2] * x + M[6] * y + M[10] * z + M[14];
    }
    for (let r = 0; r < E.ids.length; r++) {
      const key = E.ids[r];
      if (skip?.has(key)) continue;
      const t0 = E.t0[r], tn = E.tn[r];
      let zmin = Infinity, zmax = -Infinity;
      for (let v = E.v0[r], ve = E.v0[r] + E.vn[r]; v < ve; v++) { if (Z[v] < zmin) zmin = Z[v]; if (Z[v] > zmax) zmax = Z[v]; }
      if (zmin <= cutZ && zmax >= cutZ) {
        const out = [];
        for (let t = t0; t < t0 + tn; t++) {
          const a = I[t * 3], c = I[t * 3 + 1], d = I[t * 3 + 2];
          triCut(X, Y, Z, a, c, d, cutZ, out);
        }
        if (out.length) { const prev = cut.get(key); cut.set(key, prev ? concat(prev, out) : Float64Array.from(out)); for (let i = 0; i < out.length; i += 2) grow(out[i], out[i + 1]); }
      } else if (edges && ((zmax < cutZ && zmax > bottom - depth) || (top !== null && zmin > cutZ && zmin < top))) {
        const into = zmax < cutZ ? below : above;
        const raw = runEdges(P, I, t0, tn, 30, []), out = [];
        for (let i = 0; i < raw.length; i += 3) {
          const x = raw[i], y = raw[i + 1], z = raw[i + 2];
          out.push(M[0] * x + M[4] * y + M[8] * z + M[12], M[1] * x + M[5] * y + M[9] * z + M[13]);
        }
        // drop edges seen end on (vertical ones)
        const keep = [];
        for (let i = 0; i < out.length; i += 4) if (Math.hypot(out[i + 2] - out[i], out[i + 3] - out[i + 1]) > 0.5) { keep.push(out[i], out[i + 1], out[i + 2], out[i + 3]); grow(out[i], out[i + 1]); }
        if (keep.length) { const prev = into.get(key); into.set(key, prev ? concat(prev, keep) : Float64Array.from(keep)); }
      }
    }
  }
  return { cut, below, above, bounds: Number.isFinite(bb.x0) ? bb : null };
}
const concat = (a, b) => { const o = new Float64Array(a.length + b.length); o.set(a); o.set(b, a.length); return o; };

/** One triangle against the plane z = h: the segment where they cross (x0 y0 x1 y1 appended), if any. */
function triCut(X, Y, Z, a, b, c, h, out) {
  const v = [a, b, c], above = v.map((i) => Z[i] > h);
  const n = above.filter(Boolean).length;
  if (n === 0 || n === 3) return;
  const pts = [];
  for (let k = 0; k < 3; k++) {
    const p = v[k], q = v[(k + 1) % 3];
    if (above[k] === above[(k + 1) % 3]) continue;
    // the same edge gives the same point from either triangle: order its ends by position, not by index
    const [i, j] = X[p] < X[q] || (X[p] === X[q] && (Y[p] < Y[q] || (Y[p] === Y[q] && Z[p] < Z[q]))) ? [p, q] : [q, p];
    const t = (h - Z[i]) / (Z[j] - Z[i]);
    pts.push(X[i] + (X[j] - X[i]) * t, Y[i] + (Y[j] - Y[i]) * t);
  }
  if (pts.length === 4 && (pts[0] !== pts[2] || pts[1] !== pts[3])) out.push(pts[0], pts[1], pts[2], pts[3]);
}

/** Join cut segments into closed loops (and leave out what does not close). Points match to 0.01 mm. */
export function chainLoops(segs) {
  const key = (x, y) => Math.round(x * 100) + ',' + Math.round(y * 100);
  const adj = new Map();
  const n = segs.length / 4, used = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    for (const e of [0, 1]) {
      const k = key(segs[i * 4 + e * 2], segs[i * 4 + e * 2 + 1]);
      if (!adj.has(k)) adj.set(k, []);
      adj.get(k).push(i * 2 + e);
    }
  }
  const loops = [];
  for (let s = 0; s < n; s++) {
    if (used[s]) continue;
    used[s] = 1;
    const loop = [segs[s * 4], segs[s * 4 + 1]];
    const startK = key(segs[s * 4], segs[s * 4 + 1]);
    let x = segs[s * 4 + 2], y = segs[s * 4 + 3];
    for (let guard = 0; guard < n + 2; guard++) {
      const k = key(x, y);
      loop.push(x, y);
      if (k === startK) break;
      const next = (adj.get(k) || []).find((h) => !used[h >> 1]);
      if (next === undefined) break;
      used[next >> 1] = 1;
      const i = next >> 1, e = next & 1, o = 1 - e;
      x = segs[i * 4 + o * 2]; y = segs[i * 4 + o * 2 + 1];
    }
    if (loop.length >= 8 && key(loop[0], loop[1]) === key(loop[loop.length - 2], loop[loop.length - 1])) loops.push(loop);
  }
  return loops;
}

/**
 * A drawn wall's plan: its joined outline (plan points) with the openings the cut plane passes through taken out.
 * openings: [{ offset (along the wall from its start, mm, to the opening's near edge), width, sill, height }] (sill and the
 * cut height both above the level's floor).
 * → [[x, y]…][] (one polygon, or several pieces between openings)
 */
export function wallPieces(wall, poly, openings = [], cutZ = 1200) {
  const ang = Math.atan2(wall.b[1] - wall.a[1], wall.b[0] - wall.a[0]), c = Math.cos(ang), s = Math.sin(ang);
  let toL = ([x, y]) => [(x - wall.a[0]) * c + (y - wall.a[1]) * s, -(x - wall.a[0]) * s + (y - wall.a[1]) * c];
  let toW = ([u, v]) => [wall.a[0] + u * c - v * s, wall.a[1] + u * s + v * c];
  // a curved wall: along its arc and across it (polar), so openings are cut along the radius as in 3D
  if (wall.bulge) ({ toL, toW } = wallMap(wall));
  let pieces = [poly.map(toL)];
  for (const o of openings) {
    if (!(o.width > 0) || cutZ < o.sill || cutZ > o.sill + o.height) continue;   // both above the level's floor
    const next = [];
    for (const p of pieces) {
      const l = clipX(p, o.offset, -1), r = clipX(p, o.offset + o.width, 1);
      if (l.length >= 3) next.push(l);
      if (r.length >= 3) next.push(r);
    }
    pieces = next;
  }
  return pieces.map((p) => p.map(toW));
}
/** Keep the part of a polygon with x ≤ k (side −1) or x ≥ k (side 1): Sutherland–Hodgman against one line. */
function clipX(p, k, side) {
  const inside = (q) => (side < 0 ? q[0] <= k + 1e-9 : q[0] >= k - 1e-9);
  const out = [];
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length];
    const ia = inside(a), ib = inside(b);
    if (ia) out.push(a);
    if (ia !== ib) { const t = (k - a[0]) / (b[0] - a[0]); out.push([k, a[1] + (b[1] - a[1]) * t]); }
  }
  return out;
}

/** Box round points / polygons / segment arrays. */
export function planBounds(...lists) {
  const bb = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  const g = (x, y) => { if (x < bb.x0) bb.x0 = x; if (x > bb.x1) bb.x1 = x; if (y < bb.y0) bb.y0 = y; if (y > bb.y1) bb.y1 = y; };
  for (const l of lists) {
    if (!l) continue;
    if (l.x0 !== undefined) { if (Number.isFinite(l.x0)) { g(l.x0, l.y0); g(l.x1, l.y1); } continue; }
    for (const it of l) {
      if (Array.isArray(it) && Array.isArray(it[0])) it.forEach((q) => g(q[0], q[1]));
      else if (Array.isArray(it)) g(it[0], it[1]);
    }
  }
  return Number.isFinite(bb.x0) ? bb : null;
}

/** Is (x, y) inside the polygon [[x, y]…] (even-odd)? */
export function inPoly(x, y, p) {
  let inside = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, yi] = p[i], [xj, yj] = p[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
/** Distance from (x, y) to the segment ab. */
export function segDist(x, y, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
  const t = l2 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / l2)) : 0;
  return Math.hypot(x - a[0] - t * dx, y - a[1] - t * dy);
}

/**
 * Dimensions for the drawn walls of a level (BM.7): each wall's length along one face — the outside face of an outside
 * wall, else its left face — and, when it holds doors or windows, a chain from the face's ends to each opening's edges
 * nearer the wall. → [{ a, b, text, offPx, offMm, key }] (a, b on the face; offPx / offMm how far out to draw it on screen
 * and on paper; the sign puts it on the face's side). fmt(mm) gives the text.
 */
export function wallDims(walls, outlines, openings, fmt, { exteriorOf = () => true, from = 'outside' } = {}) {
  // 0.9 D3 / spec test 9 (walls-09): `from` is the Measure from setting the Length field reads too (center | inside | outside), so the
  // two agree; each dimension carries it (`from`) and the plan names it. 'outside' = the face these dimensions always measured.
  const out = [];
  for (const w of walls) {
    const poly = outlines.get(w.guid);
    if (!poly) continue;
    const L = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    if (L < 1 || w.bulge) continue;   // a curved wall's length is in its Properties (no arc dimension yet)
    const u = [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L], n = [-u[1], u[0]];
    const side = exteriorOf(w) ? (w.extSide === 'right' ? -1 : 1) : 1;
    const local = poly.map(([x, y]) => [(x - w.a[0]) * u[0] + (y - w.a[1]) * u[1], (x - w.a[0]) * n[0] + (y - w.a[1]) * n[1]]);
    const face = from === 'inside' ? -side : side;   // the face whose length is read (drawn on the outside face's side either way)
    const xs = from === 'center' ? [0, L] : local.filter(([, y]) => Math.abs(y - face * w.t / 2) < 0.5).map(([x]) => x);
    if (xs.length < 2) continue;
    const e0 = Math.min(...xs), e1 = Math.max(...xs);
    const P = (x) => [w.a[0] + u[0] * x + n[0] * side * w.t / 2, w.a[1] + u[1] * x + n[1] * side * w.t / 2];
    const mine = openings.filter((o) => o.wall === w.id).sort((a, b) => a.offset - b.offset);
    const stops = [e0];
    for (const o of mine) stops.push(Math.max(e0, o.offset), Math.min(e1, o.offset + o.width));
    stops.push(e1);
    const s = [...new Set(stops.map((x) => Math.round(x * 100) / 100))].sort((a, b) => a - b);
    if (mine.length) for (let i = 0; i + 1 < s.length; i++) if (s[i + 1] - s[i] > 0.5) out.push({ a: P(s[i]), b: P(s[i + 1]), text: fmt(s[i + 1] - s[i]), offPx: side * 22, offMm: side * 5, key: w.id, wall: w.guid, from });
    out.push({ a: P(e0), b: P(e1), text: fmt(e1 - e0), offPx: side * (mine.length ? 44 : 22), offMm: side * (mine.length ? 10 : 5), key: w.id, wall: w.guid, from, overall: true });
  }
  return out;
}
