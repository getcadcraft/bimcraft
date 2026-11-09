/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-grids.js — grids (0.6 DF.16, session `bim-draw`): grid lines with bubbles and labels (1, 2, 3 / A, B, C), placed by
 * spacing or drawn one by one, written as IfcGrid with its axes. No DOM: bin/test-bimcraft.mjs --draw06 runs it in Node.
 * Plan millimetres; points given in a storey's own plan axes (the level the person draws on).
 *
 * One grid system per building: an IfcGrid contained in the IfcBuilding, placed at the building's placement, shown on every
 * level's plan. Its lines are IfcGridAxis (AxisTag = the label, AxisCurve = a 2D IfcPolyline in the grid's axes, SameSense
 * true) in two families: numbered lines (UAxes) and lettered lines (VAxes). IFC wants each list to hold one line or more and
 * every line in exactly one list (IfcGridAxis WR2), so a grid of one family only is written IRREGULAR with its last line in
 * the other list, and a single line gets an untagged twin (SameSense false) in the other list; `CadCraft_Grid` (Families
 * "tag=u|v;…", Bubbles, Twin) says how to read it back. A 'FootPrint' 'GeometricCurveSet' of the lines lets other programs
 * draw it. IfcGrid lines from other programs are read for display and snapping (2D polylines), never changed.
 *
 *   nextTag(tag)               '1' → '2', '9' → '10', 'A' → 'B', 'H' → 'J' (I and O are skipped, as on drawings), 'Z' → 'AA',
 *                              'A.1' → 'A.2'
 *   tagFamily(tag)             'u' (ends in a number) | 'v'
 *   gridLayout({ origin, angle, u: { count, spacing, first }, v: { count, spacing, first }, extend }) → [{ tag, a, b, fam }]
 *                              numbered lines run along the layout's Y and are placed across X (spacing: one length or a
 *                              list); lettered lines run along X and are placed up Y; each line runs `extend` past the last
 *                              lines of the other family
 *   readGrids(w) → [{ id, guid, own, bubbles, axes: [{ tag, a, b (file mm, world), fam }] }]
 *   toPlan(w, storey, grids) → the same with a, b in that storey's plan
 *   gridSnap(axes) → { lines: [{ a, b }], points: [[x, y]] }   the lines and where they cross (plan mm)
 *   gridsInView(axes, dir) → [{ tag, x }]   the lines an elevation or section looking along `dir` sees end on (within 30° of
 *                              it), at x = along the view's right ([dir.y, −dir.x], res-views.js), for the sheets
 *   ops (IfcEditor.modelChange, one undo step each): placeGrid({ storey, axes: [{ tag?, a, b, fam? }] }) (added to the
 *   building's grid, made when it has none; a tag that is taken or missing gets the next free one of its family),
 *   changeGridAxis(tag, { tag, a, b, storey }), removeGridAxes(tags), changeGrid({ bubbles, dims })
 *   gridDims(axes, fmt) → [{ a, b, offPx, text, grid: true }]   0.9 D9.2 (Discord ask, 2026-11-03): the spacing between
 *                              neighbouring parallel lines of each family and the overall size, as two rows of dimensions
 *                              past the bubbles at the lines' start ends; shown when the grid's CadCraft_Grid Dims is true
 *   Errors: model.err.grid.tag (a label already used), model.err.grid.short (a line under 100 mm), model.err.grid.none.
 */
import { op } from './model-ops.js';
import { afterGridMove, afterGridRemove } from './wall-tools.js';   // 0.9 WT.7: walls locked to grid lines
import { scaleT } from './model-write.js';
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';

export const GRID_PSET = 'CadCraft_Grid';
export const BUBBLES = ['both', 'start', 'end', 'none'];
const SKIP = new Set(['I', 'O']);

export function nextTag(tag) {
  const s = String(tag || '');
  const n = /^(.*?)(\d+)$/.exec(s);
  if (n) return n[1] + (Number(n[2]) + 1);
  const l = /^(.*?)([A-Z]+)$/.exec(s);
  if (l) {
    const chars = l[2].split('');
    let i = chars.length - 1;
    for (;;) {
      if (i < 0) { chars.unshift('A'); break; }
      let c = chars[i].charCodeAt(0) + 1;
      while (SKIP.has(String.fromCharCode(c))) c++;
      if (c <= 90) { chars[i] = String.fromCharCode(c); break; }
      chars[i] = 'A'; i--;
    }
    return l[1] + chars.join('');
  }
  return s ? s + '1' : '1';
}
export const tagFamily = (tag) => (/\d$/.test(String(tag || '')) ? 'u' : 'v');

export function gridLayout({ origin = [0, 0], angle = 0, u = {}, v = {}, extend = 1500 } = {}) {
  const at = (sp, n) => { const out = [0]; for (let i = 1; i < n; i++) out.push(out[i - 1] + (Array.isArray(sp) ? Number(sp[i - 1] ?? sp[sp.length - 1]) : Number(sp))); return out; };
  const nu = Math.max(0, Math.floor(u.count || 0)), nv = Math.max(0, Math.floor(v.count || 0));
  const xs = at(u.spacing ?? 6000, nu), ys = at(v.spacing ?? 6000, nv);
  const xMax = xs.length ? xs[xs.length - 1] : 0, yMax = ys.length ? ys[ys.length - 1] : 0;
  const c = Math.cos(angle * Math.PI / 180), s = Math.sin(angle * Math.PI / 180);
  const P = (x, y) => [origin[0] + x * c - y * s, origin[1] + x * s + y * c];
  const out = [];
  let tg = u.first || '1';
  for (const x of xs) { out.push({ tag: tg, a: P(x, -extend), b: P(x, yMax + extend), fam: 'u' }); tg = nextTag(tg); }
  tg = v.first || 'A';
  for (const y of ys) { out.push({ tag: tg, a: P(-extend, y), b: P(xMax + extend, y), fam: 'v' }); tg = nextTag(tg); }
  return out;
}

// ------------------------------------------------------------------------------------------------------------- reading
const worldMm = (w, lp) => scaleT(lp ? w.api.GetWorldTransformMatrix(w.mid, lp) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], w.unitMm);
function curvePoints(w, cid) {
  const c = cid ? w.api.GetLine(w.mid, cid, false) : null;
  if (!c || !/IfcPolyline$/i.test(c.constructor?.name || '')) return null;
  return (c.Points || []).map((h) => { const p = w.api.GetLine(w.mid, h.value, false); return (p.Coordinates || []).map((x) => Number(val(x)) * w.unitMm); });
}
function parseFamilies(text) {
  const m = new Map();
  for (const part of String(text || '').split(';')) { const i = part.lastIndexOf('='); if (i > 0) m.set(part.slice(0, i), part.slice(i + 1)); }
  return m;
}
export function readGrids(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCGRID'); } catch (e) { return out; }
  for (const id of list) {
    const g = w.api.GetLine(w.mid, id, false);
    if (!g) continue;
    const ps = w.readPset(id, GRID_PSET);
    const fams = parseFamilies(ps?.Families), twin = !!ps && String(ps.Twin) === 'true';
    const M = worldMm(w, g.ObjectPlacement?.value);
    const axes = [];
    const take = (list2, fam) => {
      for (const h of list2 || []) {
        const ax = w.api.GetLine(w.mid, h.value, false);
        if (!ax) continue;
        const tag = val(ax.AxisTag);
        if (twin && (tag === null || tag === undefined || tag === '')) continue;   // our single line's twin
        const pts = curvePoints(w, ax.AxisCurve?.value);
        if (!pts || pts.length < 2) continue;
        const ends = val(ax.SameSense) === false ? [pts[pts.length - 1], pts[0]] : [pts[0], pts[pts.length - 1]];
        const [a, b] = ends.map((q) => { const r = apply4(M, q[0], q[1], 0); return [r[0], r[1]]; });
        axes.push({ tag: tag === null || tag === undefined ? '' : String(tag), a, b, fam: fams.get(String(tag)) || fam, axisId: h.value });
      }
    };
    take(g.UAxes, 'u'); take(g.VAxes, 'v'); take(g.WAxes, 'w');
    out.push({ id, guid: val(g.GlobalId), own: !!ps, bubbles: BUBBLES.includes(ps?.Bubbles) ? ps.Bubbles : 'both', dims: !!ps && String(ps.Dims) === 'true', axes });
  }
  return out;
}
export function toPlan(w, storey, grids) {
  const Mi = inv4(w.storeyWorld(storey));
  const P = (q) => { const r = apply4(Mi, q[0], q[1], 0); return [r[0], r[1]]; };
  return grids.map((g) => ({ ...g, axes: g.axes.map((x) => ({ ...x, a: P(x.a), b: P(x.b) })) }));
}

export function gridSnap(axes) {
  const lines = axes.map((x) => ({ a: x.a, b: x.b })), points = [];
  for (let i = 0; i < axes.length; i++) for (let j = i + 1; j < axes.length; j++) {
    const p = axes[i].a, r = [axes[i].b[0] - p[0], axes[i].b[1] - p[1]], q = axes[j].a, s = [axes[j].b[0] - q[0], axes[j].b[1] - q[1]];
    const den = r[0] * s[1] - r[1] * s[0];
    if (Math.abs(den) < 1e-6 * Math.hypot(...r) * Math.hypot(...s)) continue;
    const t = ((q[0] - p[0]) * s[1] - (q[1] - p[1]) * s[0]) / den, u = ((q[0] - p[0]) * r[1] - (q[1] - p[1]) * r[0]) / den;
    if (t < -1e-6 || t > 1 + 1e-6 || u < -1e-6 || u > 1 + 1e-6) continue;
    points.push([p[0] + r[0] * t, p[1] + r[1] * t]);
  }
  return { lines, points };
}

export function gridsInView(axes, dir) {
  const l = Math.hypot(dir[0], dir[1]), d = [dir[0] / l, dir[1] / l], right = [d[1], -d[0]], out = [];
  for (const x of axes) {
    const e = [x.b[0] - x.a[0], x.b[1] - x.a[1]], m = Math.hypot(...e);
    if (!m || Math.abs(e[0] * d[0] + e[1] * d[1]) / m < 0.866) continue;
    out.push({ tag: x.tag, x: x.a[0] * right[0] + x.a[1] * right[1] });
  }
  return out.sort((p, q) => p.x - q.x);
}

// ------------------------------------------------------------------------------------------------------------- writing
function building(w) {
  const b = ids(w.api, w.mid, 'IFCBUILDING')[0];
  if (b === undefined) throw Object.assign(new Error('model.err.grid.none'), { key: 'model.err.grid.none' });
  return b;
}
const ownGrid = (w) => readGrids(w).find((g) => g.own) || null;
/** The building grid's axes in world mm (file axes), and its frame. */
function gridFrame(w, g) {
  const line = g ? w.api.GetLine(w.mid, g.id, false) : null;
  const lp = line?.ObjectPlacement?.value ?? w.api.GetLine(w.mid, building(w), false).ObjectPlacement?.value;
  return worldMm(w, lp);
}
/** Write (or rewrite) the building's grid with these axes (world mm): its lines, lists, footprint and set. */
function writeGrid(w, g, axes, bubbles, dims = g?.dims || false) {
  const bid = building(w);
  let id = g?.id, line;
  if (!id) {
    const bl = w.api.GetLine(w.mid, bid, false);
    const lp = w.placeAt(bl.ObjectPlacement?.value ?? null, 0, 0, 0, 0);
    const args = [w.guid(), w.ownerHistory(), w.L('Grid'), null, null, w.H(lp), null, [], [], null];   // i18n-ignore: IFC Name
    if (w.v4) args.push('NOTDEFINED');
    id = w.make('IFCGRID', ...args);
    w.contain(id, bid);
    line = w.touch(id);
  } else {
    line = w.touch(id);
    for (const h of [...(line.UAxes || []), ...(line.VAxes || []), ...(line.WAxes || [])]) w.dropTree(h.value);
  }
  const Gi = inv4(gridFrame(w, { id }));
  const local = (q) => { const r = apply4(Gi, q[0], q[1], 0); return [r[0], r[1]]; };
  const axis = (x, sense = true) => w.make('IFCGRIDAXIS', w.L(x.tag), w.H(w.polyline2(sense ? [local(x.a), local(x.b)] : [local(x.b), local(x.a)])), w.T('IFCBOOLEAN', sense));
  let U = axes.filter((x) => x.fam !== 'v'), V = axes.filter((x) => x.fam === 'v');
  let twin = false, irregular = false;
  if (axes.length === 1) twin = true;
  else if (!U.length || !V.length) { irregular = true; if (!V.length) { V = [U[U.length - 1]]; U = U.slice(0, -1); } else { U = [V[V.length - 1]]; V = V.slice(0, -1); } }
  line.UAxes = U.map((x) => w.H(axis(x)));
  line.VAxes = twin ? [w.H(w.make('IFCGRIDAXIS', null, w.H(w.polyline2([local(axes[0].b), local(axes[0].a)])), w.T('IFCBOOLEAN', false)))] : V.map((x) => w.H(axis(x)));
  line.WAxes = null;
  if (w.v4) line.PredefinedType = irregular || twin || !isRectangular(axes) ? 'IRREGULAR' : 'RECTANGULAR';
  w.write(line);
  // the footprint other programs draw
  const curves = axes.map((x) => w.H(w.polyline2([local(x.a), local(x.b)])));
  w.setShape(id, [w.rep('foot', 'FootPrint', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', curves)])]);
  w.upsertPset(id, GRID_PSET, [
    ['Families', 'IFCTEXT', axes.map((x) => x.tag + '=' + (x.fam === 'v' ? 'v' : 'u')).join(';')],
    ['Bubbles', 'IFCLABEL', bubbles || 'both'],
    ['Twin', 'IFCBOOLEAN', twin],
    ['Dims', 'IFCBOOLEAN', !!dims],
  ]);
  return id;
}
function isRectangular(axes) {
  const dir = (x) => { const d = [x.b[0] - x.a[0], x.b[1] - x.a[1]], l = Math.hypot(...d); return [d[0] / l, d[1] / l]; };
  const U = axes.filter((x) => x.fam !== 'v').map(dir), V = axes.filter((x) => x.fam === 'v').map(dir);
  if (!U.length || !V.length) return false;
  const par = (p, q) => Math.abs(p[0] * q[1] - p[1] * q[0]) < 1e-6;
  return U.every((d) => par(d, U[0])) && V.every((d) => par(d, V[0])) && Math.abs(U[0][0] * V[0][0] + U[0][1] * V[0][1]) < 1e-6;
}
const short = (x) => Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1]) < 100;
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

/** Storey plan points → world mm. */
function planToWorld(w, storey, p) { const r = apply4(w.storeyWorld(storey), p[0], p[1], 0); return [r[0], r[1]]; }
/** The next free label of a family after what the grid has. */
function freeTag(axes, fam) {
  const used = new Set(axes.map((x) => x.tag));
  const mine = axes.filter((x) => x.fam === fam).map((x) => x.tag);
  let tg = mine.length ? nextTag(mine[mine.length - 1]) : fam === 'v' ? 'A' : '1';
  while (used.has(tg)) tg = nextTag(tg);
  return tg;
}
/** Which family a new line joins: the family of the existing line it runs most nearly along, else by its direction
 *  (more up than across = numbered). */
function familyFor(axes, a, b) {
  const d = [b[0] - a[0], b[1] - a[1]], l = Math.hypot(...d);
  let best = null;
  for (const x of axes) {
    const e = [x.b[0] - x.a[0], x.b[1] - x.a[1]], m = Math.hypot(...e);
    const c = Math.abs(d[0] * e[0] + d[1] * e[1]) / (l * m);
    if (c > 0.866 && (!best || c > best.c)) best = { c, fam: x.fam };
  }
  return best ? best.fam : Math.abs(d[1]) >= Math.abs(d[0]) ? 'u' : 'v';
}

export function placeGrid({ storey, axes: add }) {
  const list = add.map((x) => ({ ...x, a: [...x.a], b: [...x.b] }));
  return op((w) => {
    const g = ownGrid(w), axes = g ? g.axes.map((x) => ({ tag: x.tag, a: x.a, b: x.b, fam: x.fam })) : [];
    const st = storey ? w.byGuid(storey) : null;
    for (const x of list) {
      const a = st ? planToWorld(w, st, x.a) : x.a, b = st ? planToWorld(w, st, x.b) : x.b;
      const fam = x.fam === 'u' || x.fam === 'v' ? x.fam : familyFor(axes, a, b);
      if (short({ a, b })) refuse('model.err.grid.short');
      let tag = String(x.tag || '').trim();
      if (!tag || axes.some((y) => y.tag === tag)) tag = freeTag(axes, fam);
      axes.push({ tag, a, b, fam });
    }
    const id = writeGrid(w, g, axes, g?.bubbles || 'both');
    return { id, ids: [id] };
  });
}

export function changeGridAxis(tag, ch) {
  const c = { ...ch };
  return op((w) => {
    const g = ownGrid(w);
    const ax = g?.axes.find((x) => x.tag === tag);
    if (!ax) refuse('model.err.grid.none');
    const axes = g.axes.map((x) => ({ tag: x.tag, a: x.a, b: x.b, fam: x.fam }));
    const me = axes.find((x) => x.tag === tag);
    if (c.tag !== undefined) {
      const nt = String(c.tag).trim();
      if (!nt || (nt !== tag && axes.some((x) => x.tag === nt))) refuse('model.err.grid.tag');
      me.tag = nt;
    }
    const st = c.storey ? w.byGuid(c.storey) : null;
    if (c.a) me.a = st ? planToWorld(w, st, c.a) : c.a;
    if (c.b) me.b = st ? planToWorld(w, st, c.b) : c.b;
    if (short(me)) refuse('model.err.grid.short');
    const id = writeGrid(w, g, axes, g.bubbles);
    afterGridMove(w, tag, me.tag);   // 0.9 WT.7: the walls locked to this line follow it (the lock is stored, never guessed)
    return { id, ids: [id] };
  });
}

export function removeGridAxes(tags) {
  const gone = new Set(tags);
  return op((w) => {
    const g = ownGrid(w);
    if (!g) refuse('model.err.grid.none');
    const axes = g.axes.filter((x) => !gone.has(x.tag)).map((x) => ({ tag: x.tag, a: x.a, b: x.b, fam: x.fam }));
    afterGridRemove(w, [...gone]);   // 0.9 WT.7: their locks go with them
    if (!axes.length) {   // the last line: the grid goes, its axes first (they hang off the grid, not a relationship)
      const line = w.api.GetLine(w.mid, g.id, false);
      for (const h of [...(line.UAxes || []), ...(line.VAxes || []), ...(line.WAxes || [])]) w.dropTree(h.value);
      w.dropProduct([g.id]);
      return { id: null, ids: [] };
    }
    const id = writeGrid(w, g, axes, g.bubbles);
    return { id, ids: [id] };
  });
}

export function changeGrid({ bubbles, dims }) {
  return op((w) => {
    const g = ownGrid(w);
    if (!g) refuse('model.err.grid.none');
    const id = writeGrid(w, g, g.axes.map((x) => ({ tag: x.tag, a: x.a, b: x.b, fam: x.fam })), BUBBLES.includes(bubbles) ? bubbles : g.bubbles, dims === undefined ? g.dims : !!dims);
    return { id, ids: [id] };
  });
}

/**
 * Dimensions of a grid (0.9 D9.2): per family, the lines parallel to its first line (within ~0.6°), sorted across; a row of
 * spacings between neighbours and, with three lines or more, a row with the overall size. Both rows sit OUTSIDE the lines'
 * start ends, past the bubbles (a set distance on screen: `offPx`, as drawn sheets do), so they never meet the walls' own
 * dimensions inside the grid. Plan mm in, plan mm out; `fmt(mm)` writes the text.
 */
export const GRID_DIM_PX = { spacing: 38, overall: 60 };   // past an 11 px bubble beyond the line's end
export function gridDims(axes, fmt) {
  const out = [];
  for (const fam of ['u', 'v']) {
    const mine = axes.filter((x) => (fam === 'v' ? x.fam === 'v' : x.fam !== 'v'));
    if (mine.length < 2) continue;
    const d0 = [mine[0].b[0] - mine[0].a[0], mine[0].b[1] - mine[0].a[1]], l0 = Math.hypot(d0[0], d0[1]);
    if (l0 < 1) continue;
    const d = [d0[0] / l0, d0[1] / l0], n = [-d[1], d[0]];
    const dot = (p, v) => p[0] * v[0] + p[1] * v[1];
    const par = mine.filter((x) => { const e = [x.b[0] - x.a[0], x.b[1] - x.a[1]], l = Math.hypot(e[0], e[1]); return l >= 1 && Math.abs((e[0] * d[1] - e[1] * d[0]) / l) < 0.01; });
    if (par.length < 2) continue;
    // each line's place across (s); the row runs along the family's start ends (t0)
    const rows = par.map((x) => ({ s: dot(x.a, n) })).sort((p, q) => p.s - q.s);
    const t0 = Math.min(...par.map((x) => Math.min(dot(x.a, d), dot(x.b, d))));
    const at = (s) => [n[0] * s + d[0] * t0, n[1] * s + d[1] * t0];
    // a → b along +n puts drawDim's offset (to the left of ab) along −d: outward, past the start ends
    for (let i = 0; i + 1 < rows.length; i++) {
      const gap = rows[i + 1].s - rows[i].s;
      if (gap < 1) continue;
      out.push({ a: at(rows[i].s), b: at(rows[i + 1].s), offPx: GRID_DIM_PX.spacing, text: fmt(gap), grid: true });
    }
    if (rows.length > 2) out.push({ a: at(rows[0].s), b: at(rows[rows.length - 1].s), offPx: GRID_DIM_PX.overall, text: fmt(rows[rows.length - 1].s - rows[0].s), grid: true });
  }
  return out;
}
