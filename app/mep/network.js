/* SPDX-License-Identifier: Apache-2.0 */
/**
 * network.js — the pipe / duct / tray network behind the sizing calculations (0.8 round 2, EG.1–EG.3; session `mep_PART_2`).
 * DOM-free, no IFC. Runs come in as polylines in world mm; they leave as a graph of segments between nodes, a tree rooted at the
 * source, and sums of what hangs below each segment. Lengths out are metres.
 *
 *   graphFromRuns(runs, points, { tol }) → { nodes: [{ id, p }], segs: [Seg], nodeOf: { key → node id } }
 *     runs: [{ id, verts: [[x, y, z] mm], valves?: [{ s (mm along the run), kind }] }]
 *     points: [{ key, p: [x, y, z] mm }] — a source, a fixture's connector, a diffuser: snapped to the run passing within `tol` (default
 *       40 mm), which is cut there; a run that ENDS on another run's line (a tee) cuts that run too. Points within tol are one node.
 *     Seg = { id: '<run>:<n>', run, a, b (node ids), verts, length (m), dz (m, b − a), bends: [degrees turned at each inner corner],
 *             valves: [kind] }
 *   buildTree(segs, root) → { root, order: [seg id root-first], segOf: Map id → Seg (oriented: a is nearer the root), parent: Map node →
 *     seg id, children: Map node → [seg ids], cycles: [seg id], unreached: [seg id] }
 *   accumulate(tree, loadAt: Map node → number) → Map seg id → sum of the loads at and below the seg's far node
 *   pathTo(tree, node) → [seg ids] from the root down to the node
 */
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], (a[2] || 0) - (b[2] || 0));
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], (a[2] || 0) - (b[2] || 0)];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/** The foot of p on the polyline: { s (arc length mm), d (distance mm) }. */
function project(verts, p) {
  let best = { s: 0, d: Infinity }, acc = 0;
  for (let i = 0; i + 1 < verts.length; i++) {
    const a = verts[i], v = sub(verts[i + 1], a), L2 = dot(v, v), L = Math.sqrt(L2);
    let u = L2 > 0 ? dot(sub(p, a), v) / L2 : 0;
    u = Math.max(0, Math.min(1, u));
    const q = [a[0] + v[0] * u, a[1] + v[1] * u, (a[2] || 0) + v[2] * u], d = dist(p, q);
    if (d < best.d) best = { s: acc + L * u, d };
    acc += L;
  }
  return best;
}
/** The point at arc length s of the polyline. */
function at(verts, s) {
  let acc = 0;
  for (let i = 0; i + 1 < verts.length; i++) {
    const L = dist(verts[i], verts[i + 1]);
    if (s <= acc + L || i + 2 === verts.length) { const u = L > 0 ? Math.max(0, Math.min(1, (s - acc) / L)) : 0; const a = verts[i], b = verts[i + 1]; return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, (a[2] || 0) + ((b[2] || 0) - (a[2] || 0)) * u]; }
    acc += L;
  }
  return verts[0].slice();
}
const turn = (a, b, c) => {
  const u = sub(b, a), v = sub(c, b), lu = Math.hypot(...u), lv = Math.hypot(...v);
  if (!lu || !lv) return 0;
  return Math.acos(Math.max(-1, Math.min(1, dot(u, v) / (lu * lv)))) * 180 / Math.PI;
};

export function graphFromRuns(runs, points = [], { tol = 40 } = {}) {
  const runInfo = runs.map((r) => ({ r, verts: r.verts.map((q) => [q[0], q[1], q[2] || 0]) }));
  // cut points per run: [{ s, p, tag }]
  const cuts = runInfo.map((x) => {
    const L = x.verts.reduce((acc, q, i) => acc + (i ? dist(x.verts[i - 1], q) : 0), 0);
    x.L = L;
    return [{ s: 0, p: x.verts[0], tag: null }, { s: L, p: x.verts[x.verts.length - 1], tag: null }];
  });
  const hit = (xi, p, tag) => { const pr = project(runInfo[xi].verts, p); if (pr.d <= tol) { cuts[xi].push({ s: pr.s, p: at(runInfo[xi].verts, pr.s), tag }); return true; } return false; };
  // a run's end lying on another run's line cuts the other run (a tee)
  runInfo.forEach((x, i) => { for (const e of [x.verts[0], x.verts[x.verts.length - 1]]) runInfo.forEach((y, j) => { if (i !== j) hit(j, e, null); }); });
  for (const pt of points) runInfo.forEach((x, i) => hit(i, pt.p, pt.key));
  // nodes: cluster every cut point within tol (a small union-find)
  const all = [];
  cuts.forEach((c, xi) => c.forEach((k) => all.push({ xi, k })));
  const parent = all.map((_, i) => i), find = (i) => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) if (dist(all[i].k.p, all[j].k.p) <= tol) parent[find(j)] = find(i);
  const nodeIdx = new Map(), nodes = [];
  const nodeFor = (i) => { const root = find(i); if (!nodeIdx.has(root)) { nodeIdx.set(root, 'n' + nodes.length); nodes.push({ id: 'n' + (nodes.length), p: all[root].k.p.slice() }); } return nodeIdx.get(root); };
  const nodeOf = {};
  const idxOf = new Map();
  all.forEach((a, i) => { a.node = nodeFor(i); idxOf.set(a.k, i); if (a.k.tag != null) nodeOf[a.k.tag] = a.node; });
  // points that sit on no run get no node (the caller reports them)
  const segs = [];
  cuts.forEach((c, xi) => {
    const x = runInfo[xi];
    const mine = all.filter((a) => a.xi === xi).sort((p, q) => p.k.s - q.k.s);
    const uniq = [];
    for (const m of mine) { if (uniq.length && uniq[uniq.length - 1].node === m.node && Math.abs(uniq[uniq.length - 1].k.s - m.k.s) <= tol) continue; uniq.push(m); }
    // corner arc lengths
    const corners = []; let acc = 0;
    for (let i = 1; i + 1 < x.verts.length; i++) { acc += dist(x.verts[i - 1], x.verts[i]); corners.push({ s: acc, a: x.verts[i - 1], b: x.verts[i], c: x.verts[i + 1] }); }
    for (let k = 0; k + 1 < uniq.length; k++) {
      const A = uniq[k], B = uniq[k + 1];
      if (A.node === B.node) continue;
      const verts = [A.k.p];
      const bends = [];
      for (const cr of corners) if (cr.s > A.k.s + tol * 0.5 && cr.s < B.k.s - tol * 0.5) { verts.push(cr.b); bends.push(turn(cr.a, cr.b, cr.c)); }
      verts.push(B.k.p);
      let len = 0; for (let i = 1; i < verts.length; i++) len += dist(verts[i - 1], verts[i]);
      const valves = (x.r.valves || []).filter((v) => v.s >= A.k.s && v.s < B.k.s).map((v) => v.kind);
      segs.push({ id: x.r.id + ':' + k, run: x.r.id, a: A.node, b: B.node, verts, length: len / 1000, dz: ((B.k.p[2] || 0) - (A.k.p[2] || 0)) / 1000, bends, valves });
    }
  });
  return { nodes, segs, nodeOf };
}

export function buildTree(segs, root) {
  const adj = new Map();
  for (const s of segs) for (const n of [s.a, s.b]) { if (!adj.has(n)) adj.set(n, []); adj.get(n).push(s); }
  const segOf = new Map(), parent = new Map(), children = new Map(), order = [], seen = new Set([root]), used = new Set(), cycles = [];
  const queue = [root];
  while (queue.length) {
    const n = queue.shift();
    for (const s of adj.get(n) || []) {
      if (used.has(s.id)) continue;
      used.add(s.id);
      const far = s.a === n ? s.b : s.a;
      if (seen.has(far)) { cycles.push(s.id); continue; }
      seen.add(far);
      const o = s.a === n ? s : { ...s, a: s.b, b: s.a, verts: s.verts.slice().reverse(), dz: -s.dz, bends: s.bends.slice().reverse() };
      segOf.set(o.id, o); parent.set(far, o.id); order.push(o.id);
      if (!children.has(n)) children.set(n, []); children.get(n).push(o.id);
      queue.push(far);
    }
  }
  const unreached = segs.filter((s) => !used.has(s.id)).map((s) => s.id);
  return { root, order, segOf, parent, children, cycles, unreached };
}

export function accumulate(tree, loadAt) {
  const sum = new Map();
  for (let i = tree.order.length - 1; i >= 0; i--) {
    const s = tree.segOf.get(tree.order[i]);
    let v = loadAt.get(s.b) || 0;
    for (const c of tree.children.get(s.b) || []) v += sum.get(c) || 0;
    sum.set(s.id, v);
  }
  return sum;
}

export function pathTo(tree, node) {
  const out = [];
  let n = node;
  while (tree.parent.has(n)) { const id = tree.parent.get(n); out.push(id); n = tree.segOf.get(id).a; }
  return out.reverse();
}
