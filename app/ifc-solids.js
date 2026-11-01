/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-solids.js — keep IFC geometry editable (0.8 DC.115, session ifc_PART_3). No DOM: bin/test-bimcraft.mjs --ifcsolids runs it in Node.
 *
 * Many programs write only a list of faces. IFC has its own solids (extrusions, revolutions, sweeps, Booleans, CSG, primitives), which
 * stay small and stay editable. This module works on a cc-ifc file (`IfcFile`, ./ifc/model.js) and does four things:
 *
 *   report(file)              → { products, parametric, tessellated, brep, mixed, other, share, items: [{ id, cls, name, kinds, kind }] }
 *                               what each product's Body is made of; `kind` is 'parametric' | 'tessellated' | 'brep' | 'mixed' | 'other'.
 *   solidTree(file, itemId)   → the solid as parameters: { kind, id, cls, … }  (extrusion: depth, profile; boolean: operator, a, b; csg;
 *                               revolve: angle; sweep: radius; primitive: its sizes; mapped: its source)
 *   setDepth / setProfileSize / setBooleanOperator   → edit a kept solid by its parameter (the file's lines change, nothing is re-meshed)
 *   meshToPrism(positions, indices) → { origin, x, y, n, depth, outer, holes } | null     a closed triangle mesh that IS a straight prism
 *   keepEditable(file)        → { converted, kept, skipped }   rewrites each tessellated Body that is a straight prism as an
 *                               IfcExtrudedAreaSolid (SweptSolid); anything else is left exactly as it was.
 *   prismLines(add, prism)    → the IFC lines of a prism (used by step-ifc.js `solidsToIfc` with { parametric: true })
 *
 * Units: the numbers are in the file's own length unit (no conversion is done here). Untrusted input: every walk is depth-capped.
 */

const MAX_DEPTH = 24;
const MAX_TRIANGLES = 400000;

const EXTRUSION = new Set(['IFCEXTRUDEDAREASOLID', 'IFCEXTRUDEDAREASOLIDTAPERED']);
const REVOLVE = new Set(['IFCREVOLVEDAREASOLID', 'IFCREVOLVEDAREASOLIDTAPERED']);
const SWEEP = new Set(['IFCSWEPTDISKSOLID', 'IFCSWEPTDISKSOLIDPOLYGONAL', 'IFCSURFACECURVESWEPTAREASOLID', 'IFCFIXEDREFERENCESWEPTAREASOLID', 'IFCSWEPTAREASOLID']);
const PRIMITIVE = new Set(['IFCBLOCK', 'IFCRIGHTCIRCULARCYLINDER', 'IFCRIGHTCIRCULARCONE', 'IFCSPHERE', 'IFCRECTANGULARPYRAMID', 'IFCECCENTRICCONE', 'IFCTORUS']);   // i18n-ignore: IFC names
const BOOLEAN = new Set(['IFCBOOLEANRESULT', 'IFCBOOLEANCLIPPINGRESULT']);
const BREP = new Set(['IFCFACETEDBREP', 'IFCFACETEDBREPWITHVOIDS', 'IFCADVANCEDBREP', 'IFCADVANCEDBREPWITHVOIDS', 'IFCSHELLBASEDSURFACEMODEL', 'IFCFACEBASEDSURFACEMODEL', 'IFCCLOSEDSHELL', 'IFCOPENSHELL']);
const TESSELLATED = new Set(['IFCTRIANGULATEDFACESET', 'IFCPOLYGONALFACESET', 'IFCTRIANGULATEDIRREGULARNETWORK', 'IFCADVANCEDBREP_TESSELLATED']);

const refOf = (v) => (v && typeof v === 'object' && 'ref' in v ? v.ref : null);
const num = (v, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const list = (v) => (Array.isArray(v) ? v : []);

/** The kind of one representation item, and what it holds. → { kind, parametric, leaves } (kind: extrusion | revolve | sweep | boolean | csg |
 *  primitive | mapped | brep | tessellated | curve | other). A Boolean is parametric when both operands are. */
export function classify(f, id, depth = 0) {
  const t = depth > MAX_DEPTH ? null : f.type(id);
  if (!t) return { kind: 'other', parametric: false, cls: t || '' };
  if (EXTRUSION.has(t)) return { kind: 'extrusion', parametric: true, cls: t };
  if (REVOLVE.has(t)) return { kind: 'revolve', parametric: true, cls: t };
  if (SWEEP.has(t)) return { kind: 'sweep', parametric: true, cls: t };
  if (PRIMITIVE.has(t)) return { kind: 'primitive', parametric: true, cls: t };
  if (BOOLEAN.has(t)) {
    const a = classify(f, refOf(f.attr(id, 'FirstOperand')), depth + 1), b = classify(f, refOf(f.attr(id, 'SecondOperand')), depth + 1);
    return { kind: 'boolean', parametric: a.parametric && b.parametric, cls: t };
  }
  if (t === 'IFCCSGSOLID') {
    const r = classify(f, refOf(f.attr(id, 'TreeRootExpression')), depth + 1);
    return { kind: 'csg', parametric: r.parametric, cls: t };
  }
  if (t === 'IFCMAPPEDITEM') {
    const src = refOf(f.attr(id, 'MappingSource'));
    const rep = src ? refOf(f.attr(src, 'MappedRepresentation')) : null;
    const items = rep ? list(f.attr(rep, 'Items')).map(refOf).filter((x) => x != null) : [];
    const inner = items.map((i) => classify(f, i, depth + 1));
    return { kind: 'mapped', parametric: inner.length > 0 && inner.every((c) => c.parametric), cls: t, inner };
  }
  if (BREP.has(t)) return { kind: 'brep', parametric: false, cls: t };
  if (TESSELLATED.has(t)) return { kind: 'tessellated', parametric: false, cls: t };
  if (t === 'IFCPOLYLINE' || t === 'IFCINDEXEDPOLYCURVE' || t === 'IFCCOMPOSITECURVE' || t === 'IFCTRIMMEDCURVE' || t === 'IFCCIRCLE') return { kind: 'curve', parametric: false, cls: t };
  return { kind: 'other', parametric: false, cls: t };
}

/** The Body items of a product: [{ rep, type, items: [ids] }] (identifier 'Body'; a model with no identifier counts every representation). */
export function bodyItems(f, product) {
  const pds = refOf(f.attr(product, 'Representation'));
  if (!pds || f.type(pds) !== 'IFCPRODUCTDEFINITIONSHAPE') return [];
  const out = [];
  for (const r of list(f.attr(pds, 'Representations')).map(refOf)) {
    if (r == null || f.type(r) !== 'IFCSHAPEREPRESENTATION') continue;
    const idn = f.attr(r, 'RepresentationIdentifier');
    if (idn != null && String(idn) !== 'Body') continue;
    out.push({ rep: r, type: f.attr(r, 'RepresentationType'), items: list(f.attr(r, 'Items')).map(refOf).filter((x) => x != null) });
  }
  return out;
}

/** What every product's Body is made of. */
export function report(f) {
  const items = [];
  const tally = { parametric: 0, tessellated: 0, brep: 0, mixed: 0, other: 0 };
  for (const id of f.ofType('IFCPRODUCT', true)) {
    const bodies = bodyItems(f, id);
    const all = bodies.flatMap((b) => b.items);
    if (!all.length) continue;
    const cl = all.map((i) => classify(f, i));
    const kinds = [...new Set(cl.map((c) => c.kind))];
    let kind;
    const par = cl.filter((c) => c.parametric).length;
    if (par === cl.length) kind = 'parametric';
    else if (par > 0) kind = 'mixed';
    else if (cl.every((c) => c.kind === 'tessellated')) kind = 'tessellated';
    else if (cl.every((c) => c.kind === 'brep' || c.kind === 'tessellated')) kind = 'brep';
    else kind = 'other';
    tally[kind]++;
    items.push({ id, cls: f.type(id), name: f.attr(id, 'Name') ?? '', kinds, kind });
  }
  const products = items.length;
  return { products, ...tally, share: products ? Math.round((1000 * tally.parametric) / products) / 10 : null, items };
}

// ---- the solid as parameters ----

function profileInfo(f, id) {
  const t = f.type(id);
  if (!t) return null;
  const o = { id, cls: t };
  if (t === 'IFCRECTANGLEPROFILEDEF') { o.shape = 'rectangle'; o.xDim = f.attr(id, 'XDim'); o.yDim = f.attr(id, 'YDim'); }
  else if (t === 'IFCCIRCLEPROFILEDEF') { o.shape = 'circle'; o.radius = f.attr(id, 'Radius'); }
  else if (t === 'IFCARBITRARYCLOSEDPROFILEDEF' || t === 'IFCARBITRARYPROFILEDEFWITHVOIDS') { o.shape = 'outline'; }
  else o.shape = 'other';
  return o;
}

/** The solid at `id` as a tree of parameters (see the header). */
export function solidTree(f, id, depth = 0) {
  const t = depth > MAX_DEPTH ? null : f.type(id);
  if (!t) return { kind: 'other', id, cls: '' };
  const c = classify(f, id, depth);
  const base = { kind: c.kind, id, cls: t };
  if (c.kind === 'extrusion') return { ...base, depth: num(f.attr(id, 'Depth')), profile: profileInfo(f, refOf(f.attr(id, 'SweptArea'))) };
  if (c.kind === 'revolve') return { ...base, angle: num(f.attr(id, 'Angle')), profile: profileInfo(f, refOf(f.attr(id, 'SweptArea'))) };
  if (c.kind === 'sweep') return { ...base, radius: f.attr(id, 'Radius') ?? null };
  if (c.kind === 'primitive') {
    const o = { ...base };
    for (const k of ['XLength', 'YLength', 'ZLength', 'Height', 'Radius', 'BottomRadius']) { const v = f.attr(id, k); if (v !== undefined) o[k] = v; }
    return o;
  }
  if (c.kind === 'boolean') {
    const op = f.attr(id, 'Operator');
    return { ...base, operator: op && op.enum ? op.enum : String(op), a: solidTree(f, refOf(f.attr(id, 'FirstOperand')), depth + 1), b: solidTree(f, refOf(f.attr(id, 'SecondOperand')), depth + 1) };
  }
  if (c.kind === 'csg') return { ...base, root: solidTree(f, refOf(f.attr(id, 'TreeRootExpression')), depth + 1) };
  if (c.kind === 'mapped') {
    const src = refOf(f.attr(id, 'MappingSource'));
    const rep = src ? refOf(f.attr(src, 'MappedRepresentation')) : null;
    return { ...base, source: src, items: rep ? list(f.attr(rep, 'Items')).map(refOf).filter((x) => x != null).map((i) => solidTree(f, i, depth + 1)) : [] };
  }
  return base;
}

/** Number of parametric leaves (extrusions, revolutions, sweeps, primitives) in a tree. */
export function leaves(tree) {
  if (!tree) return 0;
  if (tree.kind === 'boolean') return leaves(tree.a) + leaves(tree.b);
  if (tree.kind === 'csg') return leaves(tree.root);
  if (tree.kind === 'mapped') return tree.items.reduce((s, i) => s + leaves(i), 0);
  return ['extrusion', 'revolve', 'sweep', 'primitive'].includes(tree.kind) ? 1 : 0;
}

function rewrite(f, id, patch) {
  const t = f.type(id), e = f.schema.entity(t);
  const p = [...f.params(id)];
  for (const [k, v] of Object.entries(patch)) { const i = e.index.get(k); if (i === undefined) return false; p[i] = v; }
  f.set(id, t, p);
  return true;
}

/** Change an extrusion's depth. → true | false (not an extrusion, or a depth that is not a positive number). */
export function setDepth(f, id, depth) {
  if (!EXTRUSION.has(f.type(id)) || !(depth > 0) || !Number.isFinite(depth)) return false;
  return rewrite(f, id, { Depth: depth });
}

/** Change a rectangle (xDim, yDim) or circle (radius) profile of an extrusion or revolution. */
export function setProfileSize(f, solidId, size) {
  const pid = refOf(f.attr(solidId, 'SweptArea'));
  const t = pid && f.type(pid);
  if (t === 'IFCRECTANGLEPROFILEDEF' && size.xDim > 0 && size.yDim > 0) return rewrite(f, pid, { XDim: size.xDim, YDim: size.yDim });
  if (t === 'IFCCIRCLEPROFILEDEF' && size.radius > 0) return rewrite(f, pid, { Radius: size.radius });
  return false;
}

/** Turn a Boolean between DIFFERENCE, UNION and INTERSECTION. */
export function setBooleanOperator(f, id, op) {
  if (!BOOLEAN.has(f.type(id)) || !['DIFFERENCE', 'UNION', 'INTERSECTION'].includes(op)) return false;
  return rewrite(f, id, { Operator: { enum: op } });
}

// ---- a triangle mesh that is a straight prism ----

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);

function loops(edges) {
  // edges: [[a, b]] directed; returns closed vertex loops or null when a vertex is touched more than twice
  const next = new Map();
  for (const [a, b] of edges) { if (next.has(a)) return null; next.set(a, b); }
  const out = [], seen = new Set();
  for (const s of next.keys()) {
    if (seen.has(s)) continue;
    const l = [];
    let v = s;
    while (!seen.has(v)) { seen.add(v); l.push(v); v = next.get(v); if (v === undefined) return null; }
    if (v !== s) return null;
    out.push(l);
  }
  return out;
}

const area2 = (pts) => { let s = 0; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; s += a[0] * b[1] - b[0] * a[1]; } return s / 2; };
function inside(poly, p) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}
function simplify(pts, tol) {
  let out = pts.slice();
  for (let changed = true; changed && out.length > 3;) {
    changed = false;
    for (let i = 0; i < out.length && out.length > 3; i++) {
      const a = out[(i + out.length - 1) % out.length], b = out[i], c = out[(i + 1) % out.length];
      const cr = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
      if (Math.abs(cr) <= tol * Math.max(1, Math.hypot(c[0] - a[0], c[1] - a[1]))) { out.splice(i, 1); changed = true; i--; }
    }
  }
  return out;
}

/** A closed triangle mesh (flat xyz positions, flat indices) that is exactly a straight prism: two parallel caps and sides along their normal.
 *  → { origin, x, y, n, depth, outer: [[u, v]…] (counter-clockwise), holes: [[[u, v]…]] } or null for anything else (it is then left alone). */
export function meshToPrism(positions, indices, { tol = 1e-6 } = {}) {
  const nv = Math.floor(positions.length / 3), nt = Math.floor(indices.length / 3);
  if (nv < 6 || nt < 8 || nt > MAX_TRIANGLES) return null;
  const V = (i) => [positions[3 * i], positions[3 * i + 1], positions[3 * i + 2]];
  let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) { const v = positions[3 * i + k]; if (!Number.isFinite(v)) return null; if (v < lo[k]) lo[k] = v; if (v > hi[k]) hi[k] = v; }
  const diag = Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]);
  if (!(diag > 0)) return null;
  const eps = tol * diag;
  // closed and consistent: every undirected edge in exactly two triangles, once each way
  const dir = new Map();
  const tri = [];
  const buckets = new Map();
  for (let t = 0; t < nt; t++) {
    const i = indices[3 * t], j = indices[3 * t + 1], k = indices[3 * t + 2];
    if (!(i >= 0 && i < nv && j >= 0 && j < nv && k >= 0 && k < nv)) return null;
    tri.push([i, j, k]);
    for (const [a, b] of [[i, j], [j, k], [k, i]]) { const key = a * nv + b; if (dir.has(key)) return null; dir.set(key, 1); }
    const c = cross(sub(V(j), V(i)), sub(V(k), V(i))), a = len(c);
    if (a > 0) {
      const u = [c[0] / a, c[1] / a, c[2] / a];
      const key = u.map((q) => Math.round(q * 1e4) || 0).join(',');   // one bucket per direction
      const b = buckets.get(key) || { n: u, area: 0 };
      b.area += a; buckets.set(key, b);
    }
  }
  for (const key of dir.keys()) { const a = Math.floor(key / nv), b = key % nv; if (!dir.has(b * nv + a)) return null; }
  // the axis is the normal of the caps: try the directions with the most area first (a prism's sides can outweigh its caps)
  const cands = [...buckets.values()].sort((p, q) => q.area - p.area).slice(0, 8);
  for (const cd of cands) {
    const r = prismAlong(positions, indices, cd.n, { nv, tri, V, eps, diag });
    if (r) return r;
  }
  return null;
}

function prismAlong(positions, indices, n, { nv, tri, V, eps }) {
  // layers along n
  const h = new Float64Array(nv);
  let h0 = Infinity, h1 = -Infinity;
  for (let i = 0; i < nv; i++) { h[i] = dot(V(i), n); if (h[i] < h0) h0 = h[i]; if (h[i] > h1) h1 = h[i]; }
  const depth = h1 - h0;
  if (!(depth > eps)) return null;
  const layer = new Int8Array(nv);
  for (let i = 0; i < nv; i++) { if (Math.abs(h[i] - h0) <= eps) layer[i] = 0; else if (Math.abs(h[i] - h1) <= eps) layer[i] = 1; else return null; }
  // frame: x ⟂ n from the world axis least along n; y = n × x
  const ax = Math.abs(n[0]) <= Math.abs(n[1]) && Math.abs(n[0]) <= Math.abs(n[2]) ? [1, 0, 0] : Math.abs(n[1]) <= Math.abs(n[2]) ? [0, 1, 0] : [0, 0, 1];
  let x = cross(ax, n); const lx = len(x); x = [x[0] / lx, x[1] / lx, x[2] / lx];
  const y = cross(n, x);
  const origin = [n[0] * h0, n[1] * h0, n[2] * h0];
  const uv = (i) => { const d = sub(V(i), origin); return [dot(d, x), dot(d, y)]; };
  // caps and sides
  const bottom = [], top = [];
  for (const [i, j, k] of tri) {
    const L = layer[i] + layer[j] + layer[k];
    const c = cross(sub(V(j), V(i)), sub(V(k), V(i))), a = len(c);
    if (a <= 0) continue;
    const nd = dot(c, n) / a;
    if (L === 0) { if (nd > -1 + 1e-6) return null; bottom.push([i, j, k]); }
    else if (L === 3) { if (nd < 1 - 1e-6) return null; top.push([i, j, k]); }
    else if (Math.abs(nd) > 1e-6) return null;
  }
  if (!bottom.length || !top.length) return null;
  const boundary = (T) => {
    const cnt = new Map();
    for (const [i, j, k] of T) for (const [a, b] of [[i, j], [j, k], [k, i]]) cnt.set(a * nv + b, true);
    const edges = [];
    for (const key of cnt.keys()) { const a = Math.floor(key / nv), b = key % nv; if (!cnt.has(b * nv + a)) edges.push([a, b]); }
    return loops(edges);
  };
  const lb = boundary(bottom), lt = boundary(top);
  if (!lb || !lt || !lb.length || lb.length !== lt.length) return null;
  const pts = (l) => l.map(uv);
  const key = (p) => Math.round(p[0] / eps) + ',' + Math.round(p[1] / eps);
  // the top outline, seen from below, must be the bottom outline (same set of edges)
  const edgeSet = (ls) => { const s = new Set(); for (const l of ls) { const p = pts(l); for (let i = 0; i < p.length; i++) { const a = key(p[i]), b = key(p[(i + 1) % p.length]); s.add(a < b ? a + '|' + b : b + '|' + a); } } return s; };
  const eb = edgeSet(lb), et = edgeSet(lt);
  if (eb.size !== et.size) return null;
  for (const e of eb) if (!et.has(e)) return null;
  // outer = the loop of largest area; the rest must be inside it
  let ps = lb.map(pts);
  ps = ps.map((p) => (area2(p) < 0 ? p.slice().reverse() : p)).map((p) => simplify(p, eps * eps));
  ps.sort((a, b) => area2(b) - area2(a));
  const outer = ps[0], holes = ps.slice(1);
  if (outer.length < 3 || holes.some((p) => p.length < 3 || !inside(outer, p[0]))) return null;
  return { origin, x, y, n, depth, outer, holes: holes.map((p) => p.slice().reverse()) };   // holes run clockwise
}

/** Volume of a closed triangle mesh (divergence theorem) — for tests and checks. */
export function meshVolume(positions, indices) {
  let v = 0;
  for (let t = 0; t + 2 < indices.length; t += 3) {
    const a = indices[t] * 3, b = indices[t + 1] * 3, c = indices[t + 2] * 3;
    const A = [positions[a], positions[a + 1], positions[a + 2]], B = [positions[b], positions[b + 1], positions[b + 2]], C = [positions[c], positions[c + 1], positions[c + 2]];
    v += dot(A, cross(B, C)) / 6;
  }
  return v;
}

/** Area of the prism's profile (outer minus holes) — depth × this is its volume. */
export const prismArea = (p) => Math.abs(area2(p.outer)) - p.holes.reduce((s, h) => s + Math.abs(area2(h)), 0);

const real = (v) => { const s = String(+Number(v).toFixed(6)); return /[.eE]/.test(s) ? s : s + '.'; };

/** Write a prism as IFC lines through `add(text) → '#id'` (as step-ifc.js's writer has). Returns the IfcExtrudedAreaSolid reference. */
export function prismLines(add, prism) {
  const pt2 = (p) => add('IFCCARTESIANPOINT((' + real(p[0]) + ',' + real(p[1]) + '))');
  const closed = (pts) => { const ids = pts.map(pt2); return add('IFCPOLYLINE((' + [...ids, ids[0]].join(',') + '))'); };
  const outer = closed(prism.outer);
  const prof = prism.holes.length
    ? add("IFCARBITRARYPROFILEDEFWITHVOIDS(.AREA.,$," + outer + ',(' + prism.holes.map(closed).join(',') + '))')
    : add('IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,' + outer + ')');
  const o = add('IFCCARTESIANPOINT((' + prism.origin.map(real).join(',') + '))');
  const zd = add('IFCDIRECTION((' + prism.n.map(real).join(',') + '))');
  const xd = add('IFCDIRECTION((' + prism.x.map(real).join(',') + '))');
  const pos = add('IFCAXIS2PLACEMENT3D(' + o + ',' + zd + ',' + xd + ')');
  const up = add('IFCDIRECTION((0.,0.,1.))');
  return add('IFCEXTRUDEDAREASOLID(' + prof + ',' + pos + ',' + up + ',' + real(prism.depth) + ')');
}

/** The triangles of an IfcTriangulatedFaceSet: { positions, indices } | null (polygonal sets and anything unusual are not read). */
export function tessellationOf(f, id) {
  if (f.type(id) !== 'IFCTRIANGULATEDFACESET') return null;
  const cl = refOf(f.attr(id, 'Coordinates'));
  const coords = cl && list(f.params(cl)?.[0]);
  const idx = list(f.attr(id, 'CoordIndex'));
  if (!coords || !coords.length || !idx.length) return null;
  const closed = f.attr(id, 'Closed');
  void closed;
  const positions = [];
  for (const c of coords) { if (!Array.isArray(c) || c.length !== 3) return null; positions.push(c[0], c[1], c[2]); }
  const indices = [];
  const remap = f.attr(id, 'PnIndex');
  for (const t of idx) { if (!Array.isArray(t) || t.length !== 3) return null; for (const k of t) indices.push((remap && Array.isArray(remap) ? remap[k - 1] : k) - 1); }
  return { positions, indices };
}

/** Rewrite every product whose Body is ONE tessellated straight prism as an IfcExtrudedAreaSolid. Others stay as they were.
 *  `track` ({ created(id), touch(id) }) lets a caller journal the change: touch is called before a shape line is rewritten, created for each new line.
 *  → { converted, kept, skipped, ids } (kept = already parametric items, skipped = tessellated ones that are not prisms). */
export function keepEditable(f, track = null) {
  let converted = 0, kept = 0, skipped = 0;
  const ids = [];
  for (const product of f.ofType('IFCPRODUCT', true)) {
    for (const b of bodyItems(f, product)) {
      const items = b.items.slice();
      let changed = false;
      for (let k = 0; k < items.length; k++) {
        const c = classify(f, items[k]);
        if (c.parametric) { kept++; continue; }
        if (c.kind !== 'tessellated') continue;
        const m = tessellationOf(f, items[k]);
        const prism = m && meshToPrism(m.positions, m.indices);
        if (!prism) { skipped++; continue; }
        const add = (text) => { const n = addLine(f, text); track?.created(n); return '#' + n; };
        items[k] = Number(prismLines(add, prism).slice(1));
        changed = true; converted++;
      }
      if (changed) {
        track?.touch(b.rep);   // the shape's first copy, for the undo step
        const e = f.schema.entity('IFCSHAPEREPRESENTATION'), p = [...f.params(b.rep)];
        p[e.index.get('Items')] = items.map((i) => ({ ref: i }));
        if (items.every((i) => EXTRUSION.has(f.type(i)))) p[e.index.get('RepresentationType')] = 'SweptSolid';
        f.set(b.rep, 'IFCSHAPEREPRESENTATION', p);
        ids.push(product);
      }
    }
  }
  return { converted, kept, skipped, ids };
}

/** Parse one 'IFCNAME(args)' line text into the file (args use #n references and the plain STEP forms prismLines writes). */
function addLine(f, text) {
  const m = /^([A-Z0-9_]+)\(([\s\S]*)\)$/.exec(text);
  const params = parseArgs(m[2]);
  return f.add(m[1], params);
}

function parseArgs(s) {
  let i = 0;
  const ws = () => { while (s[i] === ' ') i++; };
  function value() {
    ws();
    const ch = s[i];
    if (ch === '(') { i++; const arr = []; ws(); if (s[i] === ')') { i++; return arr; } for (;;) { arr.push(value()); ws(); if (s[i] === ',') { i++; continue; } if (s[i] === ')') { i++; return arr; } throw new Error('args'); } }
    if (ch === '#') { let j = i + 1; while (/[0-9]/.test(s[j])) j++; const r = Number(s.slice(i + 1, j)); i = j; return { ref: r }; }
    if (ch === '$') { i++; return null; }
    if (ch === '*') { i++; return null; }
    if (ch === '.') { let j = i + 1; while (s[j] !== '.') j++; const e = s.slice(i + 1, j); i = j + 1; return { enum: e }; }
    let j = i; while (j < s.length && !',)'.includes(s[j])) j++;
    const n = Number(s.slice(i, j)); i = j;
    if (!Number.isFinite(n)) throw new Error('args');
    return n;
  }
  const out = [];
  for (;;) { out.push(value()); ws(); if (s[i] === ',') { i++; continue; } break; }
  return out;
}
