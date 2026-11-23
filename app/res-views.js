/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-views.js — elevations and sections from the 3D model, with hidden lines removed (0.5 part 4, RC.5). No DOM, no
 * three.js: bin/test-bimcraft.mjs --res runs it on models it loads in Node.
 *
 *   modelTriangles(model, M, { skip }) → [{ key, cls, tris: Float64Array }]   every element's triangles from a loaded
 *                                         IfcModel (ifc-model.js batches, viewer metres) through M (viewer → plan mm: model-plan.js
 *                                         viewerToPlan) — plan x, y and z up from the level
 *   projectView(elements, { dir, cut, far, res }) → { lines, cuts, bounds, n }
 *        dir   the way the view looks, a horizontal unit vector in plan ([0, 1] = looking north: the south elevation)
 *        cut   for a section: { o: [x, y] } — the plane through o square to dir; what is in front of it is left out, what it
 *              cuts is filled (cuts: [{ key, cls, loops }] in view coordinates)
 *        far   for a section: how deep behind the plane to look (mm; 0 = all)
 *        res   the depth buffer's longer side in pixels (1600)
 *        box   { x0, y0, x1, y1 } (view mm): frame the view on it, everything outside cut off (0.6 round 2: interior elevations)
 *        margin how far past the building the ground (IfcGeographicElement) is drawn: { side 3000, below 1500, above 500 } mm —
 *              the view is framed on everything else, and the ground's lines and fills are cut at that box
 *      View coordinates (mm): x along the view's right ([dir.y, −dir.x]), y = z. lines: [[x1, y1, x2, y2, key]…] — the feature
 *      edges (boundaries and creases over 25°) where nothing nearer covers them, found by sampling each edge against a depth
 *      buffer of every triangle (the nearest surface in a 3 × 3 neighbourhood).
 *   elevationDirs → { north, east, south, west }   (the elevation named for the side it shows: north = looking south)
 */
const CREASE = Math.cos(25 * Math.PI / 180);
import { wallSectionGraphics, wallSurfaceEdges, isolatedWall } from './wall-section-graphics.js';

export const elevationDirs = { north: [0, -1], east: [-1, 0], south: [0, 1], west: [1, 0] };

export function modelTriangles(model, M, { skip = null, classes = null } = {}) {
  const map = new Map();
  const ap = (x, y, z) => [M[0] * x + M[4] * y + M[8] * z + M[12], M[1] * x + M[5] * y + M[9] * z + M[13], M[2] * x + M[6] * y + M[10] * z + M[14]];
  for (const b of model.batches || []) {
    if (b.space) continue;
    const P = b.positions, I = b.indices, T = b.triIds, kb = model.keyBase || 0;
    for (let t = 0; t < I.length / 3; t++) {
      const key = T[t];
      if (skip && skip.has(key)) continue;
      const cls = model.classOf?.get(key - kb) || '';
      if (classes && !classes.test(cls)) continue;
      let e = map.get(key);
      if (!e) { e = { key, cls, list: [] }; map.set(key, e); }
      for (let k = 0; k < 3; k++) { const v = I[3 * t + k] * 3; e.list.push(...ap(P[v], P[v + 1], P[v + 2])); }   // M takes viewer metres to plan mm
    }
  }
  return [...map.values()].map((e) => ({ key: e.key, cls: e.cls, tris: Float64Array.from(e.list) }));
}

/** A triangle (9 numbers, view coords x, y, depth) clipped to depth ≥ d0: 0, 1 or 2 triangles. */
function clipTri(t, d0, side = 1) {
  const v = [[t[0], t[1], t[2]], [t[3], t[4], t[5]], [t[6], t[7], t[8]]];
  const inside = v.map((p) => side * (p[2] - d0) >= 0);
  const n = inside.filter(Boolean).length;
  if (n === 3) return [t];
  if (n === 0) return [];
  const out = [];
  for (let i = 0; i < 3; i++) {
    const a = v[i], b = v[(i + 1) % 3];
    if (side * (a[2] - d0) >= 0) out.push(a);
    if ((side * (a[2] - d0) >= 0) !== (side * (b[2] - d0) >= 0)) { const f = (d0 - a[2]) / (b[2] - a[2]); out.push([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, d0]); }
  }
  const res = [];
  for (let i = 1; i + 1 < out.length; i++) res.push([...out[0], ...out[i], ...out[i + 1]]);
  return res;
}

export function projectView(elements, options = {}) {
  const { dir, cut, far = 0, walls, openings = [], materials = null } = options;
  if (!Array.isArray(dir) || dir.length !== 2 || !dir.every(Number.isFinite) || Math.abs(Math.hypot(...dir)-1)>1e-8 || !Number.isFinite(far) || far<0 || (cut && (!Array.isArray(cut.o)||cut.o.length!==2||!cut.o.every(Number.isFinite)))) throw new Error('Invalid projected view plane/depth');   // i18n-ignore: a programming error
  const byKey = new Map((walls||[]).map(w=>[w.key??w.id,{...w,junctionUnsupported:!isolatedWall(w,walls)}]));
  const sourced = elements.map(e=>byKey.has(e.key)?{...e,edges:wallSurfaceEdges(byKey.get(e.key),openings)}:e);
  const view = projectMeshView(sourced, options);
  return walls ? {...wallSectionGraphics(view, walls, openings, materials, options),groundY:0,...(options.box?{crop:options.box}:{})} : view;
}

function projectMeshView(elements, { dir, cut = null, far = 0, res = 1600, margin = { side: 3000, below: 1500, above: 500 }, box: frame = null } = {}) {
  const right = [dir[1], -dir[0]];
  const d0 = cut ? cut.o[0] * dir[0] + cut.o[1] * dir[1] : -Infinity, d1 = cut && far > 0 ? d0 + far : Infinity;
  // into view coordinates, behind the cut
  const view = [];
  const cuts = [];
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, dmin = Infinity, dmax = -Infinity;
  // an elevation cuts the ground 600 in front of the building (the earth drawn in section there), so ground nearer the
  // viewer never hides the walls — as an elevation is drawn
  let groundD0 = null;
  if (!cut && elements.some((e) => /Geographic/.test(e.cls))) {
    let near = Infinity;
    for (const e of elements) if (!/Geographic/.test(e.cls)) for (let i = 0; i < e.tris.length; i += 3) near = Math.min(near, e.tris[i] * dir[0] + e.tris[i + 1] * dir[1]);
    if (Number.isFinite(near)) groundD0 = near - 600;
  }
  for (const e of elements) {
    const tri = [], segs = [];
    const T = e.tris;
    const isG = groundD0 !== null && /Geographic/.test(e.cls), c0 = isG ? groundD0 : d0, cutting = !!cut || isG;
    for (let i = 0; i < T.length; i += 9) {
      const t = [];
      let dd = Infinity, DD = -Infinity;
      for (let k = 0; k < 3; k++) { const x = T[i + 3 * k], y = T[i + 3 * k + 1], z = T[i + 3 * k + 2]; const d = x * dir[0] + y * dir[1]; t.push(x * right[0] + y * right[1], z, d); dd = Math.min(dd, d); DD = Math.max(DD, d); }
      if (DD < c0 || dd > d1) continue;
      if (cutting && dd < c0 && DD > c0) {
        // the cut through this triangle: a segment of the poché outline
        const pts = [];
        for (let k = 0; k < 3; k++) { const a = [t[3 * k], t[3 * k + 1], t[3 * k + 2]], b = [t[(3 * k + 3) % 9], t[(3 * k + 4) % 9], t[(3 * k + 5) % 9]]; if ((a[2] - c0) * (b[2] - c0) < 0) { const f = (c0 - a[2]) / (b[2] - a[2]); pts.push([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]); } }
        if (pts.length === 2) segs.push(pts);
      }
      for (const c of cutting ? clipTri(t, c0) : [t]) tri.push(...(Number.isFinite(d1) ? clipTri(c, d1, -1) : [c]));
    }
    if (!tri.length && !segs.length) continue;
    for (const t of tri) for (let k = 0; k < 9; k += 3) { x0 = Math.min(x0, t[k]); x1 = Math.max(x1, t[k]); y0 = Math.min(y0, t[k + 1]); y1 = Math.max(y1, t[k + 1]); dmin = Math.min(dmin, t[k + 2]); dmax = Math.max(dmax, t[k + 2]); }
    const edges = e.edges?.map(pair=>pair.map(([x,y,z])=>[x*right[0]+y*right[1],z,x*dir[0]+y*dir[1]])).flatMap(([a,b])=>{
      let lo=0,hi=1;const d=b[2]-a[2];
      if(Math.abs(d)<1e-12)return a[2]>=c0&&a[2]<=d1?[[a,b]]:[];
      const near=(c0-a[2])/d,far=(d1-a[2])/d;
      if(d>0){lo=Math.max(lo,near);hi=Math.min(hi,far);}else{lo=Math.max(lo,far);hi=Math.min(hi,near);}
      return hi>=lo?[[a.map((v,i)=>v+(b[i]-v)*lo),a.map((v,i)=>v+(b[i]-v)*hi)]]:[];
    });
    view.push({ key: e.key, cls: e.cls, tri, src: e.tris, edges });
    if (segs.length) cuts.push({ key: e.key, cls: e.cls, loops: chain(segs) });
  }
  if (!view.length) return { lines: [], cuts, bounds: null, n: 0 };
  // framed on the building: the ground's extent (a survey can reach far past the house) is cut to a margin round it
  const ground = (c) => /Geographic/.test(c);
  if (view.some((v) => ground(v.cls)) && view.some((v) => !ground(v.cls))) {
    let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity;
    for (const v of view) if (!ground(v.cls)) for (const t of v.tri) for (let k = 0; k < 9; k += 3) { a = Math.min(a, t[k]); c = Math.max(c, t[k]); b = Math.min(b, t[k + 1]); d = Math.max(d, t[k + 1]); }
    for (const cu of cuts) if (!ground(cu.cls)) for (const l of cu.loops) for (const q of l) { a = Math.min(a, q[0]); c = Math.max(c, q[0]); b = Math.min(b, q[1]); d = Math.max(d, q[1]); }
    if (Number.isFinite(a)) { x0 = Math.max(x0, a - margin.side); x1 = Math.min(x1, c + margin.side); y0 = Math.max(y0, b - margin.below); y1 = Math.min(y1, d + margin.above); }
  }
  // 0.6 round 2 (bim-comforts_PART_2): a view framed on a box of its own (an interior elevation: one room, floor to ceiling)
  if (frame) { x0 = Math.max(x0, frame.x0); x1 = Math.min(x1, frame.x1); y0 = Math.max(y0, frame.y0); y1 = Math.min(y1, frame.y1); if (!(x1 > x0 && y1 > y0)) return { lines: [], cuts: [], bounds: null, n: 0 }; }
  // the depth buffer
  const W = Math.max(1, x1 - x0), H = Math.max(1, y1 - y0), s = res / Math.max(W, H);
  const nx = Math.ceil(W * s) + 3, ny = Math.ceil(H * s) + 3;
  const Z = new Float32Array(nx * ny).fill(Infinity);
  const X = (x) => (x - x0) * s + 1, Y = (y) => (y - y0) * s + 1;
  for (const v of view) for (const t of v.tri) raster(Z, nx, ny, X(t[0]), Y(t[1]), t[2], X(t[3]), Y(t[4]), t[5], X(t[6]), Y(t[7]), t[8]);
  const tol = Math.max(3, (dmax - dmin) * 0.002, 4 / s);   // a face at 70° to the view changes ~3 px of depth a pixel
  const visible = (px, py, d) => {
    const i0 = Math.floor(px), j0 = Math.floor(py);
    // the nearest surface drawn round the point (empty pixels left out): an edge no farther than it is seen — so an
    // outline edge shows against empty paper, and one lying behind another face's outline does not (that face's own
    // edge is drawn there)
    let best = Infinity;
    for (let j = j0 - 1; j <= j0 + 1; j++) for (let i = i0 - 1; i <= i0 + 1; i++) { if (i < 0 || j < 0 || i >= nx || j >= ny) continue; const z = Z[j * nx + i]; if (z < best) best = z; }
    return d <= best + tol;
  };
  // feature edges per element, tested against the buffer
  const lines = [];
  for (const v of view) {
    for (const [a, b] of v.edges || featureEdges(v.tri)) {
      const L = Math.hypot((b[0] - a[0]) * s, (b[1] - a[1]) * s), n = Math.max(1, Math.ceil(L / 0.75));
      let run = null;
      for (let k = 0; k <= n; k++) {
        const f = k / n, x = a[0] + (b[0] - a[0]) * f, y = a[1] + (b[1] - a[1]) * f, d = a[2] + (b[2] - a[2]) * f;
        const vis = visible(X(x), Y(y), d);
        if (vis && !run) run = [x, y];
        if ((!vis || k === n) && run) { const ex = vis ? [x, y] : [a[0] + (b[0] - a[0]) * ((k - 1) / n), a[1] + (b[1] - a[1]) * ((k - 1) / n)]; if (Math.hypot(ex[0] - run[0], ex[1] - run[1]) > 1) lines.push([run[0], run[1], ex[0], ex[1], v.key]); run = null; }
      }
    }
  }
  const box = { x0, y0, x1, y1 };
  const kept = [];
  for (const l of mergeCollinear(lines)) { const c = clipSeg(l, box); if (c) kept.push(c); }
  for (const cu of cuts) cu.loops = cu.loops.map((lp) => clipPoly(lp, box)).filter((lp) => lp.length >= 3);
  return { lines: kept, cuts: cuts.filter((cu) => cu.loops.length), bounds: box, n: view.length, ground: view.some((v) => /Geographic/.test(v.cls)) };
}
/** A segment cut to a box (Liang–Barsky), or null. */
function clipSeg(l, b) {
  let t0 = 0, t1 = 1;
  const dx = l[2] - l[0], dy = l[3] - l[1];
  for (const [p, q] of [[-dx, l[0] - b.x0], [dx, b.x1 - l[0]], [-dy, l[1] - b.y0], [dy, b.y1 - l[1]]]) {
    if (Math.abs(p) < 1e-12) { if (q < -1e-9) return null; continue; }
    const r = q / p;
    if (p < 0) { if (r > t1) return null; if (r > t0) t0 = r; } else { if (r < t0) return null; if (r < t1) t1 = r; }
  }
  if (t0 === 0 && t1 === 1) return l;
  return [l[0] + dx * t0, l[1] + dy * t0, l[0] + dx * t1, l[1] + dy * t1, l[4]];
}
/** A polygon cut to a box (Sutherland–Hodgman). */
function clipPoly(poly, b) {
  let out = poly;
  for (const [inside, cross] of [
    [(p) => p[0] >= b.x0, (p, q) => [b.x0, p[1] + (q[1] - p[1]) * (b.x0 - p[0]) / (q[0] - p[0])]],
    [(p) => p[0] <= b.x1, (p, q) => [b.x1, p[1] + (q[1] - p[1]) * (b.x1 - p[0]) / (q[0] - p[0])]],
    [(p) => p[1] >= b.y0, (p, q) => [p[0] + (q[0] - p[0]) * (b.y0 - p[1]) / (q[1] - p[1]), b.y0]],
    [(p) => p[1] <= b.y1, (p, q) => [p[0] + (q[0] - p[0]) * (b.y1 - p[1]) / (q[1] - p[1]), b.y1]],
  ]) {
    const src = out; out = [];
    for (let i = 0; i < src.length; i++) {
      const p = src[i], q = src[(i + 1) % src.length], pi = inside(p), qi = inside(q);
      if (pi) out.push(p);
      if (pi !== qi) out.push(cross(p, q));
    }
    if (!out.length) break;
  }
  return out;
}

/** Rasterise a triangle (pixel x, y, depth) into the buffer, keeping the nearest depth. */
function raster(Z, nx, ny, ax, ay, ad, bx, by, bd, cx, cy, cd) {
  const minx = Math.max(0, Math.floor(Math.min(ax, bx, cx))), maxx = Math.min(nx - 1, Math.ceil(Math.max(ax, bx, cx)));
  const miny = Math.max(0, Math.floor(Math.min(ay, by, cy))), maxy = Math.min(ny - 1, Math.ceil(Math.max(ay, by, cy)));
  const den = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
  if (Math.abs(den) < 1e-12) {
    // edge-on: mark its outline pixels so it still hides what is behind it
    const mark = (x, y, d) => { const i = Math.round(x), j = Math.round(y); if (i >= 0 && j >= 0 && i < nx && j < ny && d < Z[j * nx + i]) Z[j * nx + i] = d; };
    for (const [p, q] of [[[ax, ay, ad], [bx, by, bd]], [[bx, by, bd], [cx, cy, cd]], [[cx, cy, cd], [ax, ay, ad]]]) { const L = Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1])) + 1; for (let k = 0; k <= L; k++) { const f = k / L; mark(p[0] + (q[0] - p[0]) * f, p[1] + (q[1] - p[1]) * f, p[2] + (q[2] - p[2]) * f); } }
    return;
  }
  for (let j = miny; j <= maxy; j++) for (let i = minx; i <= maxx; i++) {
    const px = i + 0.5, py = j + 0.5;
    const w0 = ((by - cy) * (px - cx) + (cx - bx) * (py - cy)) / den, w1 = ((cy - ay) * (px - cx) + (ax - cx) * (py - cy)) / den, w2 = 1 - w0 - w1;
    if (w0 < -1e-6 || w1 < -1e-6 || w2 < -1e-6) continue;
    const d = w0 * ad + w1 * bd + w2 * cd, k = j * nx + i;
    if (d < Z[k]) Z[k] = d;
  }
}
/** Boundary and crease edges of a triangle list (view coords): vertices merged within 0.5 mm. */
function featureEdges(tris) {
  const key = (x, y, d) => Math.round(x * 2) + ',' + Math.round(y * 2) + ',' + Math.round(d * 2);
  const edges = new Map();
  for (const t of tris) {
    const ux = t[3] - t[0], uy = t[4] - t[1], ud = t[5] - t[2], vx = t[6] - t[0], vy = t[7] - t[1], vd = t[8] - t[2];
    let nx = uy * vd - ud * vy, ny = ud * vx - ux * vd, nz = ux * vy - uy * vx;
    const L = Math.hypot(nx, ny, nz);
    if (L < 1e-9) continue;
    nx /= L; ny /= L; nz /= L;
    for (let k = 0; k < 3; k++) {
      const a = [t[3 * k], t[3 * k + 1], t[3 * k + 2]], b = [t[(3 * k + 3) % 9], t[(3 * k + 4) % 9], t[(3 * k + 5) % 9]];
      const ka = key(...a), kb = key(...b), id = ka < kb ? ka + '|' + kb : kb + '|' + ka;
      const e = edges.get(id);
      if (!e) edges.set(id, { a, b, n: [[nx, ny, nz]] }); else e.n.push([nx, ny, nz]);
    }
  }
  const out = [];
  for (const e of edges.values()) {
    if (e.n.length !== 2) { out.push([e.a, e.b]); continue; }
    const [p, q] = e.n, c = Math.abs(p[0] * q[0] + p[1] * q[1] + p[2] * q[2]);
    if (c < CREASE) out.push([e.a, e.b]);
  }
  return out;
}
/** Segments [[a, b]…] (2D) → closed loops where they join (ends within 0.5 mm). */
function chain(segs) {
  const k = (p) => Math.round(p[0] * 2) + ',' + Math.round(p[1] * 2);
  const adj = new Map();
  segs.forEach(([a, b], i) => { for (const [p, q] of [[a, b], [b, a]]) { const kk = k(p); if (!adj.has(kk)) adj.set(kk, []); adj.get(kk).push({ i, to: q }); } });
  const used = new Set(), loops = [];
  for (let s = 0; s < segs.length; s++) {
    if (used.has(s)) continue;
    used.add(s);
    const loop = [segs[s][0], segs[s][1]];
    let cur = segs[s][1];
    for (let g = 0; g < segs.length; g++) {
      const nx = (adj.get(k(cur)) || []).find((o) => !used.has(o.i));
      if (!nx) break;
      used.add(nx.i); cur = nx.to;
      if (k(cur) === k(loop[0])) break;
      loop.push(cur);
    }
    if (loop.length >= 3) loops.push(loop);
  }
  return loops;
}
/** Collinear touching segments of the same element joined (fewer, longer lines on paper). */
function mergeCollinear(lines) {
  const out = [];
  const byKey = new Map();
  for (const l of lines) { const k = l[4]; if (!byKey.has(k)) byKey.set(k, []); byKey.get(k).push(l); }
  for (const list of byKey.values()) {
    let changed = true;
    while (changed) {
      changed = false;
      for (let i = 0; i < list.length && !changed; i++) for (let j = i + 1; j < list.length && !changed; j++) {
        const A = list[i], B = list[j];
        for (const [p, q, r, t] of [[[A[0], A[1]], [A[2], A[3]], [B[0], B[1]], [B[2], B[3]]], [[A[0], A[1]], [A[2], A[3]], [B[2], B[3]], [B[0], B[1]]], [[A[2], A[3]], [A[0], A[1]], [B[0], B[1]], [B[2], B[3]]], [[A[2], A[3]], [A[0], A[1]], [B[2], B[3]], [B[0], B[1]]]]) {
          if (Math.hypot(q[0] - r[0], q[1] - r[1]) > 0.5) continue;
          const d1 = [q[0] - p[0], q[1] - p[1]], d2 = [t[0] - r[0], t[1] - r[1]], l1 = Math.hypot(...d1), l2 = Math.hypot(...d2);
          if (!l1 || !l2 || (d1[0] * d2[0] + d1[1] * d2[1]) / (l1 * l2) < 0.99999) continue;
          list[i] = [p[0], p[1], t[0], t[1], A[4]]; list.splice(j, 1); changed = true; break;
        }
      }
    }
    for (const l of list) out.push(l);   // #1995: a loop, not push(...a): a view of a big model has more items than a call takes arguments ("Maximum call stack size exceeded")
  }
  return out;
}
