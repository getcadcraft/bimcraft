/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-skeleton.js — the roof over any outline (0.5 part 4, RC.1): a weighted straight skeleton with edges that may wait
 * before they start to move. No DOM: bin/test-bimcraft.mjs --res runs it in Node. Plan millimetres; "time" is height.
 *
 *   skeleton(poly, specs) → { faces: [{ edge, poly, speed, start, n, c }], lines: [{ a: [x, y, z], b, f: [i, j] }], top }
 *   faceZ(face, p) → the height of face's plane over plan point p
 *
 * poly: anticlockwise, the eave line. specs[i] for the edge from poly[i] to poly[i + 1]: { speed, start } — speed = how far
 * the edge moves inward per unit of height (1 / tan(pitch)); 0 = it never moves (a gable end, a wall the roof stops
 * against, the high side of a shed): its face is vertical and has no plan polygon. start = the height at which it begins
 * to move (an edge waits at the eave line until then: eaves of different pitches start at different heights).
 *
 * How: the eave polygon shrinks as height grows, every edge along its own line; each corner travels where its two edges'
 * lines meet. Events: an edge shrinks to nothing (its corners merge), a reflex corner reaches another edge (the polygon
 * splits in two), an edge starts to move. Between events everything is linear. After each event the polygon is cleaned:
 * corners closer than eps merge, a zero-width spike (two edges folded onto one line: a ridge) is taken off, a corner lying
 * on another edge splits the loop, a loop with no area left closes. Each moving edge's face is everything its segment
 * swept; its boundary pieces are its corners' paths, its segment when it started and its segment when its loop closed —
 * chained into polygons at the end. Consecutive collinear edges with different specs get a zero-length stationary edge
 * between them (a vertical step in the roof). Exact for straight-skeleton roofs; a few hundred edges at most.
 */
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const hyp = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);

export function faceZ(f, p) { return f.start + (f.n[0] * p[0] + f.n[1] * p[1] - f.c) / f.speed; }

export function skeleton(poly, specs, opts = {}) {
  const P0 = poly.map((q) => [q[0], q[1]]);
  const S0 = specs.map((s) => ({ speed: s.speed > 0 ? s.speed : 0, start: Number.isFinite(s.start) ? s.start : 0 }));
  let xs = P0.map((q) => q[0]), ys = P0.map((q) => q[1]);
  const scale = Math.max(1, Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
  const eps = opts.eps ?? scale * 1e-7;
  // ---- edges: drop zero-length ones, merge collinear neighbours with the same spec, a step between different ones ----
  let pts = [], sp = [], ix = [];
  for (let i = 0; i < P0.length; i++) if (hyp(P0[i], P0[(i + 1) % P0.length]) > eps) { pts.push(P0[i]); sp.push(S0[i]); ix.push(i); }
  for (let changed = true; changed && pts.length > 3;) {
    changed = false;
    for (let i = 0; i < pts.length; i++) {
      const h = (i + pts.length - 1) % pts.length, a = pts[h], b = pts[i], c = pts[(i + 1) % pts.length];
      const u = sub(b, a), v = sub(c, b);
      if (Math.abs(cross(u, v)) <= 1e-9 * Math.hypot(...u) * Math.hypot(...v) && dot(u, v) > 0 && sp[h].speed === sp[i].speed && Math.abs(sp[h].start - sp[i].start) < 1e-9) {
        pts.splice(i, 1); sp.splice(i, 1); ix.splice(i, 1); changed = true; break;
      }
    }
  }
  if (pts.length < 3) return { faces: [], lines: [], top: 0, error: 'res.err.shape' };
  const E = [];   // edges: { u, n (inward), c (n · a), speed, start, orig }
  const nodes0 = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length], L = hyp(a, b), u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], n = [-u[1], u[0]];
    E.push({ u, n, c: dot(n, a), speed: sp[i].speed, start: sp[i].start, orig: ix[i] });
  }
  // a stationary zero-length step where collinear neighbours move differently
  const order = [];
  for (let i = 0; i < pts.length; i++) {
    const h = (i + pts.length - 1) % pts.length;
    const A = E[h], B = E[i];
    if (Math.abs(cross(A.u, B.u)) < 1e-9 && dot(A.u, B.u) > 0) {
      const faster = A.speed > B.speed || (A.speed === B.speed && A.start < B.start);
      const u = faster ? [-A.n[0], -A.n[1]] : [A.n[0], A.n[1]], n = [-u[1], u[0]];
      E.push({ u, n, c: dot(n, pts[i]), speed: 0, start: Infinity, orig: -1 });
      order.push({ x: pts[i][0], y: pts[i][1], e: E.length - 1 });
    }
    order.push({ x: pts[i][0], y: pts[i][1], e: i });
  }
  nodes0.push(...order);
  const moving = (e, T) => E[e].speed > 0 && T >= E[e].start - 1e-9 * scale;

  // ---- what the faces are made of ----
  const pieces = new Map();   // edge → [[ax, ay, az, bx, by, bz]]
  const lines = [];
  const piece = (e, a, az, b, bz) => {
    if (E[e].orig < 0 || E[e].speed <= 0 || hyp(a, b) <= eps) return;
    if (!pieces.has(e)) pieces.set(e, []);
    pieces.get(e).push([a[0], a[1], az, b[0], b[1], bz]);
  };
  const started = new Set();

  let T = Math.min(...E.filter((e) => e.speed > 0).map((e) => e.start));
  if (!Number.isFinite(T)) return { faces: [], lines: [], top: 0, error: 'res.err.nopitch' };
  let cycles = [nodes0.map((q) => ({ ...q }))];
  const prevE = (cyc, i) => cyc[(i + cyc.length - 1) % cyc.length].e;
  const velOf = (A, B, T1) => {
    const a = E[A], b = E[B], va = moving(A, T1) ? a.speed : 0, vb = moving(B, T1) ? b.speed : 0;
    const det = cross(a.n, b.n);
    if (Math.abs(det) > 1e-9) return [(va * b.n[1] - vb * a.n[1]) / det, (a.n[0] * vb - b.n[0] * va) / det];
    if (dot(a.n, b.n) > 0) { const v = (va + vb) / 2; return [a.n[0] * v, a.n[1] * v]; }
    return [0, 0];
  };

  let guard = 0;
  while (cycles.length && guard++ < 20000) {
    // edges that start now: their segment is where their face begins
    for (const cyc of cycles) for (let i = 0; i < cyc.length; i++) {
      const e = cyc[i].e;
      if (moving(e, T) && !started.has(e)) { const nx = cyc[(i + 1) % cyc.length]; piece(e, [cyc[i].x, cyc[i].y], T, [nx.x, nx.y], T); }
    }
    for (const cyc of cycles) for (const q of cyc) if (moving(q.e, T)) started.add(q.e);
    // velocities
    for (const cyc of cycles) for (let i = 0; i < cyc.length; i++) cyc[i].v = velOf(prevE(cyc, i), cyc[i].e, T);
    // the next event
    let tn = Infinity;
    for (const e of E) if (e.speed > 0 && e.start > T + 1e-9 * scale && e.start < tn) tn = e.start;
    for (const cyc of cycles) {
      const m = cyc.length;
      for (let i = 0; i < m; i++) {
        const a = cyc[i], b = cyc[(i + 1) % m], u = E[a.e].u;
        const len = u[0] * (b.x - a.x) + u[1] * (b.y - a.y), rate = u[0] * (b.v[0] - a.v[0]) + u[1] * (b.v[1] - a.v[1]);
        if (rate < -1e-12) { const t = T + Math.max(0, len) / -rate; if (t < tn) tn = t; }
      }
      for (let r = 0; r < m; r++) {
        const R = cyc[r], A = E[prevE(cyc, r)], B = E[R.e];
        if (cross(A.u, B.u) > -1e-9) continue;   // only reflex corners reach other edges
        for (let j = 0; j < m; j++) {
          const q = cyc[j], q1 = cyc[(j + 1) % m];
          if (j === r || (j + 1) % m === r) continue;
          const e = E[q.e], ve = moving(q.e, T) ? e.speed : 0;
          const d0 = e.n[0] * (R.x - q.x) + e.n[1] * (R.y - q.y), rate = e.n[0] * R.v[0] + e.n[1] * R.v[1] - ve;
          if (!(d0 > eps && rate < -1e-12)) continue;
          const th = T + d0 / -rate;
          if (th >= tn) continue;
          const dt = th - T, pr = [R.x + R.v[0] * dt, R.y + R.v[1] * dt], pq = [q.x + q.v[0] * dt, q.y + q.v[1] * dt], pq1 = [q1.x + q1.v[0] * dt, q1.y + q1.v[1] * dt];
          const s = dot(e.u, sub(pr, pq)), L = dot(e.u, sub(pq1, pq));
          if (s > -eps && s < L + eps) tn = th;
        }
      }
    }
    if (!Number.isFinite(tn)) break;   // what is left never moves (all stationary)
    // advance: every corner's path is a piece of the faces on both sides of it
    const dt = tn - T;
    for (const cyc of cycles) for (let i = 0; i < cyc.length; i++) {
      const q = cyc[i], a = [q.x, q.y], b = [q.x + q.v[0] * dt, q.y + q.v[1] * dt], pe = prevE(cyc, i);
      if (dt > 0 && hyp(a, b) > eps) {
        if (moving(pe, T)) piece(pe, a, T, b, tn);
        if (moving(q.e, T)) piece(q.e, a, T, b, tn);
        if (moving(pe, T) || moving(q.e, T)) lines.push({ a: [a[0], a[1], T], b: [b[0], b[1], tn], f: [pe, q.e] });
      }
      q.x = b[0]; q.y = b[1];
    }
    T = tn;
    cycles = clean(cycles, T);
  }

  // ---- the end of each loop: what is left is a ridge (or nothing) ----
  function closeLoop(cyc, T1) {
    for (let i = 0; i < cyc.length; i++) {
      const a = cyc[i], b = cyc[(i + 1) % cyc.length];
      if (moving(a.e, T1)) piece(a.e, [a.x, a.y], T1, [b.x, b.y], T1);
    }
    // folded onto itself: each pair of opposite edges is a ridge between two faces
    for (let i = 0; i < cyc.length; i++) {
      const a = cyc[i], b = cyc[(i + 1) % cyc.length];
      if (hyp([a.x, a.y], [b.x, b.y]) <= eps) continue;
      for (let j = i + 1; j < cyc.length; j++) {
        const c = cyc[j], d = cyc[(j + 1) % cyc.length];
        if (dot(E[a.e].u, E[c.e].u) > -0.999999) continue;
        const ov = overlap([a.x, a.y], [b.x, b.y], [c.x, c.y], [d.x, d.y], eps);
        if (ov) lines.push({ a: [ov[0][0], ov[0][1], T1], b: [ov[1][0], ov[1][1], T1], f: [a.e, c.e] });
      }
    }
  }
  function clean(cs, T1) {
    const out = [];
    const work = cs.slice();
    let n = 0;
    while (work.length && n++ < 10000) {
      const cyc = work.pop();
      let again = true;
      while (again) {
        again = false;
        if (cyc.length < 3) break;
        // 1. corners closer than eps merge (the edge between them is gone)
        for (let i = 0; i < cyc.length && cyc.length >= 3; i++) {
          const a = cyc[i], b = cyc[(i + 1) % cyc.length];
          if (hyp([a.x, a.y], [b.x, b.y]) <= eps * 4) {
            const j = (i + 1) % cyc.length;
            a.x = (a.x + b.x) / 2; a.y = (a.y + b.y) / 2; a.e = b.e;
            cyc.splice(j, 1); again = true; break;
          }
        }
        if (again || cyc.length < 3) continue;
        // 2. a spike: two edges folded onto one line meet at a corner — the part they share is a ridge
        for (let i = 0; i < cyc.length; i++) {
          const m = cyc.length, pI = (i + m - 1) % m, nI = (i + 1) % m;
          const P = cyc[pI], N = cyc[i], Q = cyc[nI], A = P.e, B = N.e;
          if (dot(E[A].u, E[B].u) > -1 + 1e-9) continue;
          const dQ = Math.abs(E[A].n[0] * (Q.x - P.x) + E[A].n[1] * (Q.y - P.y));
          if (dQ > eps * 4) continue;
          const lPN = hyp([P.x, P.y], [N.x, N.y]), lNQ = hyp([N.x, N.y], [Q.x, Q.y]);
          const X = lPN <= lNQ ? [P.x, P.y] : [Q.x, Q.y];
          piece(A, X, T1, [N.x, N.y], T1); piece(B, [N.x, N.y], T1, X, T1);
          if (hyp(X, [N.x, N.y]) > eps) lines.push({ a: [X[0], X[1], T1], b: [N.x, N.y, T1], f: [A, B] });
          if (lPN < lNQ - eps * 4) { P.e = B; cyc.splice(i, 1); }
          else if (lNQ < lPN - eps * 4) { cyc.splice(i, 1); }
          else {
            P.x = (P.x + Q.x) / 2; P.y = (P.y + Q.y) / 2; P.e = Q.e;
            const qi = cyc.indexOf(Q); cyc.splice(Math.max(i, qi), 1); cyc.splice(Math.min(i, qi), 1);
          }
          again = true; break;
        }
        if (again || cyc.length < 3) continue;
        // 3. a corner on another edge (or on another corner): the loop splits in two
        outer: for (let r = 0; r < cyc.length; r++) {
          const R = cyc[r], m = cyc.length;
          for (let j = 0; j < m; j++) {
            if (j === r || (j + 1) % m === r) continue;
            const q = cyc[j], q1 = cyc[(j + 1) % m], e = E[q.e];
            const d = e.n[0] * (R.x - q.x) + e.n[1] * (R.y - q.y);
            if (Math.abs(d) > eps * 4) continue;
            const s = e.u[0] * (R.x - q.x) + e.u[1] * (R.y - q.y), L = e.u[0] * (q1.x - q.x) + e.u[1] * (q1.y - q.y);
            if (s < -eps * 4 || s > L + eps * 4) continue;
            let c1, c2;
            if (s <= eps * 4 || s >= L - eps * 4) {
              // two corners meet (a pinch)
              const k = s <= eps * 4 ? j : (j + 1) % m;
              if (k === r || (k + 1) % m === r || (r + 1) % m === k) continue;
              const K = cyc[k];
              c1 = []; for (let x = r; x !== k; x = (x + 1) % m) c1.push(cyc[x]);
              c2 = []; for (let x = k; x !== r; x = (x + 1) % m) c2.push(cyc[x]);
              const R1 = { ...R }, K2 = { ...K, x: R.x, y: R.y };
              c1[0] = R1; c2[0] = K2;
            } else {
              const R1 = { ...R }, R2 = { ...R, e: q.e };
              c1 = [R1]; for (let x = (r + 1) % m; x !== (j + 1) % m; x = (x + 1) % m) c1.push(cyc[x]);
              c2 = [R2]; for (let x = (j + 1) % m; x !== r; x = (x + 1) % m) c2.push(cyc[x]);
            }
            work.push(c1, c2);
            cyc.length = 0;
            break outer;
          }
        }
        if (!cyc.length) break;
      }
      if (!cyc.length) continue;
      if (cyc.length < 3 || Math.abs(polyArea(cyc.map((q) => [q.x, q.y]))) <= eps * scale) { if (cyc.length >= 2) closeLoop(cyc, T1); continue; }
      out.push(cyc);
    }
    return out;
  }

  // ---- faces: each moving edge's pieces chained into polygons ----
  const faces = [];
  for (const [e, list] of pieces) {
    for (const loop of chain(list, eps * 20)) {
      const poly2 = tidy(loop, eps * 4);
      if (poly2.length < 3) continue;
      const ar = polyArea(poly2);
      if (Math.abs(ar) <= eps * scale * 10) continue;
      faces.push({ edge: E[e].orig, poly: ar < 0 ? poly2.reverse() : poly2, speed: E[e].speed, start: E[e].start, n: E[e].n, c: E[e].c, u: E[e].u });
    }
  }
  const out = mergeLines(lines.filter((l) => E[l.f[0]].orig >= 0 || E[l.f[1]].orig >= 0).map((l) => ({ ...l, f: [E[l.f[0]].orig, E[l.f[1]].orig], moving: [E[l.f[0]].speed > 0, E[l.f[1]].speed > 0] })), eps * 20);
  return { faces, lines: out, top: T };
}

/** The part two antiparallel collinear segments share, or null. */
function overlap(a, b, c, d, eps) {
  const L = hyp(a, b);
  if (L <= eps) return null;
  const u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
  if (Math.abs(cross(u, sub(c, a))) > eps * 4 || Math.abs(cross(u, sub(d, a))) > eps * 4) return null;
  const s0 = Math.max(0, Math.min(dot(u, sub(c, a)), dot(u, sub(d, a)))), s1 = Math.min(L, Math.max(dot(u, sub(c, a)), dot(u, sub(d, a))));
  if (s1 - s0 <= eps) return null;
  return [[a[0] + u[0] * s0, a[1] + u[1] * s0], [a[0] + u[0] * s1, a[1] + u[1] * s1]];
}

/** Segments [ax, ay, az, bx, by, bz] → closed loops of plan points (ends within tol are one point). */
function chain(segs, tol) {
  const P = [];
  const idOf = (x, y) => {
    for (let i = 0; i < P.length; i++) if (Math.abs(P[i][0] - x) <= tol && Math.abs(P[i][1] - y) <= tol) return i;
    P.push([x, y]); return P.length - 1;
  };
  const adj = new Map(), used = new Set();
  const E = [];
  for (const s of segs) {
    const a = idOf(s[0], s[1]), b = idOf(s[3], s[4]);
    if (a === b) continue;
    const k = a < b ? a + ',' + b : b + ',' + a;
    if (E.some((x) => x.k === k)) continue;   // the same piece twice
    const id = E.length;
    E.push({ a, b, k });
    for (const v of [a, b]) { if (!adj.has(v)) adj.set(v, []); adj.get(v).push(id); }
  }
  const loops = [];
  for (let s = 0; s < E.length; s++) {
    if (used.has(s)) continue;
    used.add(s);
    const start = E[s].a, loop = [start];
    let cur = E[s].b, prev = start;
    for (let n = 0; n < E.length + 2 && cur !== start; n++) {
      loop.push(cur);
      const opts = (adj.get(cur) || []).filter((id) => !used.has(id));
      if (!opts.length) break;
      // where several go on, take the one turning least away from straight on (keeps loops from crossing)
      let best = opts[0];
      if (opts.length > 1) {
        const din = sub(P[cur], P[prev]);
        let bestAng = Infinity;
        for (const id of opts) { const nx = E[id].a === cur ? E[id].b : E[id].a, dout = sub(P[nx], P[cur]); const ang = Math.atan2(cross(din, dout), dot(din, dout)); if (-ang < bestAng) { bestAng = -ang; best = id; } }
      }
      used.add(best);
      const nx = E[best].a === cur ? E[best].b : E[best].a;
      prev = cur; cur = nx;
    }
    if (cur === start && loop.length >= 3) loops.push(loop.map((i) => P[i].slice()));
  }
  return loops;
}
/** Collinear points and back-and-forth spikes out. */
function tidy(poly, eps) {
  let p = poly.slice();
  for (let changed = true; changed && p.length >= 3;) {
    changed = false;
    for (let i = 0; i < p.length; i++) {
      const a = p[(i + p.length - 1) % p.length], b = p[i], c = p[(i + 1) % p.length];
      const u = sub(b, a), v = sub(c, b), lu = Math.hypot(...u), lv = Math.hypot(...v);
      if (lu <= eps || lv <= eps || Math.abs(cross(u, v)) / Math.max(lu, lv) <= eps) { p.splice(i, 1); changed = true; break; }
    }
  }
  return p;
}
/** Collinear, end-to-end lines between the same two faces joined into one. */
function mergeLines(L, tol) {
  const key = (l) => (l.f[0] < l.f[1] ? l.f[0] + ',' + l.f[1] : l.f[1] + ',' + l.f[0]);
  const groups = new Map();
  for (const l of L) { if (hyp(l.a, l.b) <= tol && Math.abs(l.a[2] - l.b[2]) <= tol) continue; const k = key(l); if (!groups.has(k)) groups.set(k, []); groups.get(k).push({ ...l }); }
  const out = [];
  for (const list of groups.values()) {
    for (let changed = true; changed;) {
      changed = false;
      for (let i = 0; i < list.length && !changed; i++) for (let j = i + 1; j < list.length && !changed; j++) {
        const A = list[i], B = list[j];
        for (const [p, q, r, s] of [[A.a, A.b, B.a, B.b], [A.a, A.b, B.b, B.a], [A.b, A.a, B.a, B.b], [A.b, A.a, B.b, B.a]]) {
          // A from p to q, B from r to s: q meets r and all four are on one 3D line
          if (Math.hypot(q[0] - r[0], q[1] - r[1], q[2] - r[2]) > tol) continue;
          const d1 = [q[0] - p[0], q[1] - p[1], q[2] - p[2]], d2 = [s[0] - r[0], s[1] - r[1], s[2] - r[2]];
          const l1 = Math.hypot(...d1), l2 = Math.hypot(...d2);
          if (!l1 || !l2) continue;
          const c = (d1[0] * d2[0] + d1[1] * d2[1] + d1[2] * d2[2]) / (l1 * l2);
          if (c < 1 - 1e-9) continue;
          list[i] = { ...A, a: p, b: s }; list.splice(j, 1); changed = true; break;
        }
      }
    }
    out.push(...list);
  }
  return out;
}
export function polyArea(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; }
