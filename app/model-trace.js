/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-trace.js — from a traced drawing to walls (0.6 DF.23, session `bim-draw`): walls from a DWG / DXF's lines and
 * polylines on chosen layers, doors and windows from chosen blocks, and the drawing kept as a reference underlay on its level.
 * No DOM: bin/test-bimcraft.mjs --draw06 runs it in Node. The drawing is read by BimCraft's own cc-dwg copy (dwg/read.js) or
 * dxf-model.js — the same model either way. Plan millimetres.
 *
 *   drawingParts(model, { unitMm }) → { unitMm, layers: [{ name, segs, curved }], blocks: [{ name, count }], segs: Map(layer →
 *       [[x1, y1, x2, y2]]), inserts: [{ block, layer, x, y, rot, box: [x0, y0, x1, y1] | null }], bounds }   model space only,
 *       in mm (INSUNITS, else `unitMm`); straight pieces of LINE / LWPOLYLINE / POLYLINE (arcs are counted as `curved`, not walls);
 *       each block reference with its block's extents placed where it is
 *   wallsFromLines(segs, { mode, t, minLen, maxT }) → { walls: [{ a, b, t }], left }   mode 'center' (a line is a wall's centre
 *       line), 'left' / 'right' (a line is a face, the wall on that side of its direction: chains of joined lines are offset
 *       together, mitred), 'pairs' (two parallel lines 50…maxT apart are a wall's two faces: its centre line between them over
 *       their overlap, its thickness their distance; unpaired lines are `left`); then every wall end is run to a wall it stops
 *       short of within its thickness (so traced corners meet)
 *   openingsFromInserts(inserts, map, walls) → [{ wall (index), typeKey, kind, offset, width, face }]   a reference of a block
 *       mapped to a door or window type → the wall nearest its box's middle (within the wall's thickness + 300 mm), centred where
 *       the box's middle falls along it, as wide as the box along the wall; a door swings to the side its box lies on
 *   traceDrawing({ storey, walls, openings, typeKey, topLevel, height, underlay, source, roomNames }) → op (one undo step); 0.10 BK.64: what it
 *       makes (walls, doors, windows, the rooms they close) is marked unverified (verify-model.js; source 'drawing' | 'pdf' | 'scan')
 *   readUnderlays(w) · removeUnderlays(guids) → op    the underlay: IfcAnnotation ("Underlay", Name = the file) in its level,
 *       its linework an 'Annotation' 'GeometricCurveSet' of 2D polylines, CadCraft_Underlay (Source, Units, Lines)
 */
import { op, settleFor } from './model-ops.js';
import { readWalls, addWall, wallType, typeAt, typeThickness } from './model-walls.js';
import { addLevel } from './model-levels.js';
import { addOpening, openingType } from './model-openings.js';
import { axisMeet } from './model-trim.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';
import { t as tr } from './i18n.js';
import { markRecognised, markNewRooms, spaceIds } from './verify-model.js';   // 0.10 BK.64 (bk-r3-checks-10): what a program recognised is unverified until a person checks it
import { storeyLoops } from './model-slabs.js';

export const UNDERLAY_PSET = 'CadCraft_Underlay';
const INS_MM = { 1: 25.4, 2: 304.8, 4: 1, 5: 10, 6: 1000, 10: 914.4 };
export const MAX_UNDERLAY_POINTS = 150000;
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const len = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);

export function drawingParts(model, { unitMm = 0 } = {}) {
  const um = unitMm > 0 ? unitMm : INS_MM[model.header?.INSUNITS] || 1;
  const blocks = new Map((model.blocks || []).map((b) => [b.name, b]));
  const ms = (model.blocks || []).find((b) => /^\*model_space$/i.test(b.name));
  const segs = new Map(), curved = new Map(), counts = new Map(), inserts = [];
  const bb = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  const grow = (x, y) => { if (x < bb.x0) bb.x0 = x; if (x > bb.x1) bb.x1 = x; if (y < bb.y0) bb.y0 = y; if (y > bb.y1) bb.y1 = y; };
  const push = (layer, s) => { let a = segs.get(layer); if (!a) { a = []; segs.set(layer, a); } a.push(s); grow(s[0], s[1]); grow(s[2], s[3]); };
  const poly = (layer, vs, closed) => {
    const n = vs.length;
    for (let i = 0; i < (closed ? n : n - 1); i++) {
      const p = vs[i], q = vs[(i + 1) % n];
      if (Math.abs(p.bulge || 0) > 1e-9) { curved.set(layer, (curved.get(layer) || 0) + 1); continue; }
      push(layer, [p.x * um, p.y * um, q.x * um, q.y * um]);
    }
  };
  /** A block's extents in its own coordinates (lines, polylines, circles, arcs; nested references as their points). */
  const extCache = new Map();
  function extents(name, depth = 0) {
    if (extCache.has(name)) return extCache.get(name);
    const b = blocks.get(name), e = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
    const g = (x, y) => { if (x < e.x0) e.x0 = x; if (x > e.x1) e.x1 = x; if (y < e.y0) e.y0 = y; if (y > e.y1) e.y1 = y; };
    for (const en of b?.entities || []) {
      if (en.type === 'LINE') { g(en.start.x, en.start.y); g(en.end.x, en.end.y); }
      else if (en.type === 'LWPOLYLINE' || en.type === 'POLYLINE_2D') for (const v of en.vertices || []) g(v.x, v.y);
      else if (en.type === 'CIRCLE') { g(en.center.x - en.radius, en.center.y - en.radius); g(en.center.x + en.radius, en.center.y + en.radius); }
      else if (en.type === 'ARC') {   // its ends and the quarter points it passes (angles in radians, anticlockwise)
        const a0 = en.startAngle || 0, a1 = en.endAngle ?? Math.PI * 2, sweep = ((a1 - a0) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) || 2 * Math.PI;
        const at = (a) => g(en.center.x + en.radius * Math.cos(a), en.center.y + en.radius * Math.sin(a));
        at(a0); at(a0 + sweep);
        for (let k = Math.ceil(a0 / (Math.PI / 2)); k * Math.PI / 2 < a0 + sweep; k++) at(k * Math.PI / 2);
      }
      else if (en.type === 'INSERT' && depth < 4) { const s = extents(en.block, depth + 1); if (s) for (const [x, y] of [[s.x0, s.y0], [s.x1, s.y1], [s.x0, s.y1], [s.x1, s.y0]]) { const c = Math.cos(en.rotation || 0), sn = Math.sin(en.rotation || 0), sx = en.scale?.x ?? 1, sy = en.scale?.y ?? 1; g(en.insert.x + c * x * sx - sn * y * sy, en.insert.y + sn * x * sx + c * y * sy); } }
    }
    const out = Number.isFinite(e.x0) ? e : null;
    extCache.set(name, out);
    return out;
  }
  for (const e of ms?.entities || []) {
    if (e.invisible) continue;
    const layer = e.layer || '0';
    if (e.type === 'LINE') push(layer, [e.start.x * um, e.start.y * um, e.end.x * um, e.end.y * um]);
    else if (e.type === 'LWPOLYLINE') poly(layer, e.vertices || [], !!e.closed);
    else if (e.type === 'POLYLINE_2D') poly(layer, (e.vertices || []).filter((v) => !(v.flags & 16)), !!e.closed);
    else if (e.type === 'ARC' || e.type === 'CIRCLE') curved.set(layer, (curved.get(layer) || 0) + 1);
    else if (e.type === 'INSERT' && e.block && !/^\*/.test(e.block)) {
      counts.set(e.block, (counts.get(e.block) || 0) + 1);
      const ex = extents(e.block), c = Math.cos(e.rotation || 0), s = Math.sin(e.rotation || 0), sx = e.scale?.x ?? 1, sy = e.scale?.y ?? 1;
      let box = null;
      if (ex) {
        const pts = [[ex.x0, ex.y0], [ex.x1, ex.y0], [ex.x1, ex.y1], [ex.x0, ex.y1]].map(([x, y]) => [(e.insert.x + c * x * sx - s * y * sy) * um, (e.insert.y + s * x * sx + c * y * sy) * um]);
        box = [Math.min(...pts.map((q) => q[0])), Math.min(...pts.map((q) => q[1])), Math.max(...pts.map((q) => q[0])), Math.max(...pts.map((q) => q[1]))];
      }
      inserts.push({ block: e.block, layer, x: e.insert.x * um, y: e.insert.y * um, rot: (e.rotation || 0) * 180 / Math.PI, box });
    }
  }
  const layerNames = new Set([...segs.keys(), ...curved.keys()]);
  return {
    unitMm: um,
    layers: [...layerNames].sort().map((name) => ({ name, segs: segs.get(name)?.length || 0, curved: curved.get(name) || 0 })),
    blocks: [...counts].sort((p, q) => q[1] - p[1] || p[0].localeCompare(q[0])).map(([name, count]) => ({ name, count })),
    segs, inserts, bounds: Number.isFinite(bb.x0) ? bb : null,
  };
}

/** Chains of segments joined end to end (within tol): [[p0, p1, …]] (closed ones repeat their first point). */
function chainsOf(segs, tol) {
  const key = (p) => Math.round(p[0] / tol) + ',' + Math.round(p[1] / tol);
  const at = new Map(), used = new Array(segs.length).fill(false);
  segs.forEach((s, i) => { for (const e of [0, 1]) { const k = key(e ? [s[2], s[3]] : [s[0], s[1]]); if (!at.has(k)) at.set(k, []); at.get(k).push(i); } });
  const out = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    let pts = [[segs[i][0], segs[i][1]], [segs[i][2], segs[i][3]]];
    for (const dir of [1, -1]) {
      for (;;) {
        const end = dir === 1 ? pts[pts.length - 1] : pts[0];
        const cand = (at.get(key(end)) || []).find((j) => !used[j]);
        if (cand === undefined) break;
        used[cand] = true;
        const s = segs[cand], a = [s[0], s[1]], b = [s[2], s[3]];
        const next = len(a, end) <= len(b, end) ? b : a;
        if (dir === 1) pts.push(next); else pts.unshift(next);
      }
    }
    out.push(pts);
  }
  return out;
}
/** A chain offset by d to its left (mitred corners; a closed chain stays closed). */
function offsetChain(pts, d) {
  const closed = pts.length > 2 && len(pts[0], pts[pts.length - 1]) < 1e-6;
  const P = closed ? pts.slice(0, -1) : pts, n = P.length;
  const lines = [];
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const a = P[i], b = P[(i + 1) % n], L = len(a, b) || 1, nx = -(b[1] - a[1]) / L * d, ny = (b[0] - a[0]) / L * d;
    lines.push([[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny]]);
  }
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const cur = lines[i];
    let start = cur[0], end = cur[1];
    const prev = i > 0 ? lines[i - 1] : closed ? lines[lines.length - 1] : null, next = i < lines.length - 1 ? lines[i + 1] : closed ? lines[0] : null;
    if (prev) { const m = axisMeet(prev[0], prev[1], cur[0], cur[1]); if (m) start = m.p; }
    if (next) { const m = axisMeet(cur[0], cur[1], next[0], next[1]); if (m) end = m.p; }
    out.push([start, end]);
  }
  return out;
}

export function wallsFromLines(segs, { mode = 'center', t = 150, minLen = 100, maxT = 600, minT = 50 } = {}) {
  const S = segs.filter((s) => Math.hypot(s[2] - s[0], s[3] - s[1]) >= 1);
  let walls = [], left = [];
  if (mode === 'center') walls = S.map((s) => ({ a: [s[0], s[1]], b: [s[2], s[3]], t }));
  else if (mode === 'left' || mode === 'right') {
    for (const ch of chainsOf(S, 1)) for (const [a, b] of offsetChain(ch, (mode === 'left' ? 1 : -1) * t / 2)) walls.push({ a, b, t });
  } else {
    // pairs: the best partner for each line (parallel, 50…maxT apart, overlapping most), each line used once
    const info = S.map((s) => { const a = [s[0], s[1]], b = [s[2], s[3]], L = len(a, b); return { a, b, L, u: [(b[0] - a[0]) / L, (b[1] - a[1]) / L] }; });
    const cand = [];
    for (let i = 0; i < info.length; i++) for (let j = i + 1; j < info.length; j++) {
      const p = info[i], q = info[j];
      if (Math.abs(p.u[0] * q.u[1] - p.u[1] * q.u[0]) > 0.02) continue;   // about 1°
      const n = [-p.u[1], p.u[0]], d = (q.a[0] - p.a[0]) * n[0] + (q.a[1] - p.a[1]) * n[1];
      if (Math.abs(d) < minT || Math.abs(d) > maxT) continue;
      const s0 = (q.a[0] - p.a[0]) * p.u[0] + (q.a[1] - p.a[1]) * p.u[1], s1 = (q.b[0] - p.a[0]) * p.u[0] + (q.b[1] - p.a[1]) * p.u[1];
      const lo = Math.max(0, Math.min(s0, s1)), hi = Math.min(p.L, Math.max(s0, s1));
      if (hi - lo < 0.5 * Math.min(p.L, q.L) || hi - lo < minLen) continue;
      cand.push({ i, j, d, lo, hi, score: hi - lo });
    }
    cand.sort((x, y) => y.score - x.score);
    const used = new Set();
    for (const c of cand) {
      if (used.has(c.i) || used.has(c.j)) continue;
      used.add(c.i); used.add(c.j);
      const p = info[c.i], n = [-p.u[1], p.u[0]], h = c.d / 2;
      walls.push({ a: [p.a[0] + p.u[0] * c.lo + n[0] * h, p.a[1] + p.u[1] * c.lo + n[1] * h], b: [p.a[0] + p.u[0] * c.hi + n[0] * h, p.a[1] + p.u[1] * c.hi + n[1] * h], t: Math.abs(c.d) });
    }
    left = S.filter((_, i) => !used.has(i));
  }
  walls = walls.filter((x) => len(x.a, x.b) >= minLen);
  // traced corners: a wall end that stops short of another wall (within its thickness) runs to that wall's centre line
  for (const w of walls) for (const end of ['a', 'b']) {
    const p = w[end], other = end === 'a' ? w.b : w.a;
    let best = null;
    for (const o of walls) {
      if (o === w) continue;
      const m = axisMeet(other, p, o.a, o.b);
      if (!m) continue;
      const L = len(o.a, o.b), slack = Math.max(w.t, o.t) / L;
      if (m.u < -slack || m.u > 1 + slack) continue;
      const gap = len(p, m.p), along = (m.t - 1) * len(other, p);   // + past the end, − back inside
      if (gap > Math.max(w.t, o.t) * 0.75 + 1 || along < -Math.max(w.t, o.t) - 1) continue;
      if (!best || gap < best.gap) best = { gap, p: m.p };
    }
    if (best && best.gap > 0.01) w[end] = best.p;
  }
  // the same wall twice (two lines drawn over each other): once
  const out = [];
  for (const w of walls) if (!out.some((o) => (len(o.a, w.a) < 1 && len(o.b, w.b) < 1) || (len(o.a, w.b) < 1 && len(o.b, w.a) < 1))) out.push(w);
  return { walls: out, left };
}

export function openingsFromInserts(inserts, map, walls) {
  const out = [];
  for (const ins of inserts) {
    const m = map[ins.block];
    if (!m || !m.typeKey || !ins.box) continue;
    const type = openingType(m.typeKey);
    if (!type) continue;
    const c = [(ins.box[0] + ins.box[2]) / 2, (ins.box[1] + ins.box[3]) / 2];
    let best = null;
    walls.forEach((w, i) => {
      const L = len(w.a, w.b), u = [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L], n = [-u[1], u[0]];
      const s = (c[0] - w.a[0]) * u[0] + (c[1] - w.a[1]) * u[1], d = (c[0] - w.a[0]) * n[0] + (c[1] - w.a[1]) * n[1];
      if (s < 0 || s > L) return;
      if (Math.abs(d) > w.t / 2 + 300 + (type.kind === 'door' ? type.width : 0)) return;
      const along = Math.abs((ins.box[2] - ins.box[0]) * u[0]) + Math.abs((ins.box[3] - ins.box[1]) * u[1]);
      // a door's box holds its swing: the opening is the box's extent along the wall, less a frame's worth; a window's as it is
      const width = Math.max(400, Math.min(L - 50, type.kind === 'door' ? Math.min(along, type.width * 1.6) : along));
      const sc = Math.abs(d);
      if (!best || sc < best.sc) best = { sc, i, s, width, d, kind: type.kind };
    });
    if (!best) continue;
    // a door's box holds its swing, so it lies to the side the door opens to: that side is its face
    out.push({ wall: best.i, typeKey: m.typeKey, kind: best.kind, offset: best.s - best.width / 2, width: best.width, face: best.d >= 0 ? 'left' : 'right', block: ins.block });
  }
  return out;
}

// ------------------------------------------------------------------------------------------------------------- the op
const pts2 = (w, flat) => { const out = []; for (let i = 0; i + 1 < flat.length; i += 2) out.push([w.u(flat[i]), w.u(flat[i + 1])]); return out; };
export function traceDrawing({ storey, walls, openings = [], typeKey = 'ext-2x6', topLevel = '', height = 0, underlay = null, source = 'drawing', roomNames = [] }) {
  const state = pageState();
  return op((w) => traceInto(w, { storey, walls, openings, typeKey, topLevel, height, underlay, source, roomNames }, state));
}
const pageState = () => ({ guids: [], oguids: [], ug: null });

/** One page of walls, openings and an underlay written into a level (a storey GlobalId); the state keeps the GlobalIds so a redo makes the same elements. */
function traceInto(w, { storey, walls, openings = [], typeKey = 'ext-2x6', topLevel = '', height = 0, underlay = null, source = 'drawing', roomNames = [] }, state) {
  const roomsBefore = spaceIds(w), oids = [];   // BK.64
  const W = walls.map((x) => ({ a: [...x.a], b: [...x.b], t: x.t })), O = openings.map((x) => ({ ...x })), U = underlay;
  const { guids, oguids } = state;
  const st = w.byGuid(storey);
  if (!st) refuse('model.err.nolevel');
  if (!W.length && !U) refuse('model.err.trace.none');
  const base = wallType(typeKey) || wallType('ext-2x6'), t0 = typeThickness(base);
  const made = new Map(), out = [];
  W.forEach((x, i) => {
    if (!guids[i]) guids[i] = val(w.guid());
    const key = Math.abs(x.t - t0) > 1 ? (typeAt(base.key, Math.round(x.t)) || base.key) : base.key;
    const r = addWall(w, { storey: st, a: x.a, b: x.b, typeKey: key, topLevel, height: topLevel ? 0 : height, extSide: 'left', guid: guids[i] });
    made.set(r.guid, r.id); out.push(r.id);
  });
  if (W.length) settleFor(w, [st], null);   // joins first, so openings fit the walls as joined
  let skipped = 0;
  O.forEach((o, i) => {
    if (!guids[o.wall]) { skipped++; return; }
    if (!oguids[i]) oguids[i] = [val(w.guid()), val(w.guid())];
    try { oids.push(addOpening(w, { wall: guids[o.wall], typeKey: o.typeKey, offset: o.offset, width: o.width, face: o.face, guid: oguids[i][0], openingGuid: oguids[i][1] }).id); }
    catch (e) { if (/^model\.err\./.test(e.key || '')) skipped++; else throw e; }
  });
  if (O.length) settleFor(w, [st], null);
  if (U?.lines?.length) {
    if (!state.ug) state.ug = val(w.guid());
    const sl = w.api.GetLine(w.mid, st, false);
    const name = w.L(String(U.name || 'drawing').slice(0, 120));
    const id = w.make('IFCANNOTATION', state.ug, w.ownerHistory(), name, null, w.L('Underlay'), w.H(w.placeAt(sl.ObjectPlacement.value, 0, 0, 0, 0)), null, ...(/^IFC4X3/i.test(w.schema || '') ? ['USERDEFINED'] : []));   // i18n-ignore: IFC ObjectType (IFC4X3 adds PredefinedType)
    const curves = U.lines.map((flat) => w.H(w.make('IFCPOLYLINE', pts2(w, flat).map(([x, y]) => w.H(w.point2(round(x), round(y)))))));
    w.setShape(id, [w.rep('foot', 'Annotation', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', curves)])]);
    w.contain(id, st);
    w.upsertPset(id, UNDERLAY_PSET, [['Source', 'IFCLABEL', String(U.name || '').slice(0, 255)], ['Units', 'IFCLABEL', String(U.units || '')], ['Lines', 'IFCINTEGER', U.lines.length]]);
    out.push(id);
  }
  // BK.64: the walls, doors, windows and rooms a program read from a drawing, a PDF or a scan are UNVERIFIED until a person checks them;
  // a room takes its name from text found inside it (roomNames: [{ name, at: [x, y] }], plan mm) when the page has text
  const note = String(U?.name || '').slice(0, 120);
  markRecognised(w, [...made.values(), ...oids], source, note);
  const rooms = W.length ? markNewRooms(w, roomsBefore, source, { names: roomNames.map((n) => ({ ...n, storey: st })), loopsFor: (sid) => storeyLoops(w, sid).rooms, note }) : { rooms: [], named: 0 };
  return { id: out[0] ?? null, ids: out, made, skipped, rooms: rooms.rooms.length, roomsNamed: rooms.named };
}

/**
 * DC.116: the pages of a set of plans in ONE undo step. pages: [{ level: GlobalId | { name, elevation, height } (a level made for the page),
 * walls, openings, typeKey, height, underlay, topLevel? }]; a page whose level is new is put above the levels there are. A page with
 * no walls and no underlay is skipped. → op (result: ids, made, skipped, levels: [GlobalId per page])
 */
export function tracePages(pages) {
  const states = pages.map(() => pageState());
  return op((w) => {
    const ids = [], made = new Map(), levels = [];
    let skipped = 0, rooms = 0, roomsNamed = 0;
    pages.forEach((p, i) => {
      if (!p.walls.length && !p.underlay) { levels.push(null); return; }
      let storey = p.level;
      if (storey && typeof storey === 'object') {
        if (!states[i].level) states[i].level = val(w.guid());
        const r = addLevel(w, { name: storey.name, elevation: storey.elevation, height: storey.height, guid: states[i].level });
        storey = r.guid;
      }
      levels.push(storey);
      const r = traceInto(w, { ...p, storey }, states[i]);
      for (const x of r.ids) ids.push(x);
      for (const [g, id] of r.made) made.set(g, id);
      skipped += r.skipped; rooms += r.rooms; roomsNamed += r.roomsNamed;
    });
    return { id: ids[0] ?? null, ids, made, skipped, levels, rooms, roomsNamed };
  });
}

export function readUnderlays(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCANNOTATION'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, UNDERLAY_PSET);
    if (!ps) continue;
    const a = w.api.GetLine(w.mid, id, false), lines = [];
    const sh = a.Representation?.value ? w.api.GetLine(w.mid, a.Representation.value, false) : null;
    for (const h of sh?.Representations || []) {
      const r = w.api.GetLine(w.mid, h.value, false);
      for (const it of r?.Items || []) {
        const cs = w.api.GetLine(w.mid, it.value, false);
        for (const ch of cs?.Elements || []) {
          const pl = w.api.GetLine(w.mid, ch.value, false), flat = [];
          for (const ph of pl?.Points || []) { const p = w.api.GetLine(w.mid, ph.value, false); const c = (p?.Coordinates || []).map((v) => Number(val(v)) * w.unitMm); flat.push(c[0], c[1]); }
          if (flat.length >= 4) lines.push(flat);
        }
      }
    }
    out.push({ id, guid: val(a.GlobalId), storey: so.get(id), name: String(val(a.Name) || ''), source: String(ps.Source || ''), lines });
  }
  return out;
}

export function removeUnderlays(guids) {
  return op((w) => {
    const list = readUnderlays(w).filter((u) => guids.includes(u.guid)).map((u) => u.id);
    if (list.length) w.dropProduct(list);
    return { id: null, ids: [] };
  });
}
