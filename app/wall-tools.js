/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-tools.js — BimCraft's adapter for lib/walls (0.9 WT.2 Draw, WT.3 Set and Modify, WT.4 Cut, WT.7 grid locks; session walls-09).
 * The recipes are lib/walls (copied byte for byte into dev/walls/ by tools/walls/sync.mjs, nobody edits the copy); here is only what
 * BimCraft's IFC model needs: each op is a model-ops.js op() (ONE undo step, a redo makes the same walls with the same GlobalIds), every
 * one ends in the same settle step as any wall change (the join record FX.60, rooms, floors, roofs), walls keep their ids, and doors,
 * windows and reference dimensions go with the part they stand in.
 *
 *   drawPath({ storey, path, typeKey, reference, side, joinOff, ...top })   a Draw recipe's path as walls (rectangle, polygon, arcs, a
 *                                         picked chain, a traced outline): centre line or a face (Reference), the outside of a closed
 *                                         path outward, Join off = Disallow join at every end (a free-standing wall)
 *   splitWall(guid, { s | point, gap, free })   WT.4 Split / Split with gap (decision D2: the parts stay joined unless free)
 *   deleteWallSegment(guid, s0, s1)      WT.4 Delete segment (doors in the piece go with it, one across a cut refuses)
 *   rejoinWalls(g1, g2)                  two parts of one wall made one again (g1 keeps its id; g2's doors move over)
 *   readHolds(w) · addHold(spec) · removeHolds(ids)   the Hold block's records (CadCraft_WallHolds on the IfcProject)
 *   holdPlan(w, walls, plan, driven)     a change worked out as a plan, grown so every hold stays kept (lib/walls/hold.js keep);
 *                                         model-ops.js changeWallsBy / changeWall and model-modify.js moveElements call it
 *   afterGridMove(w, tag)                the walls locked to a grid line follow it (model-grids.js changeGridAxis calls it)
 *   lineOfWall(wall, ref)                a wall's line `ref` (its centre line or one of its faces) as { p, u }
 * Errors: walls.err.* (lib/walls), model.err.trim.cuts (a door across a cut), model.err.nowall.
 */
import { op, settleFor, afterWallMoveFor } from './model-ops.js';
import { readWalls, addWall, updateWall, deleteWalls, locationOffset, typeThickness, wallType, readJoinRecords } from './model-walls.js';
import { readOpenings, updateOpening, deleteOpenings } from './model-openings.js';
import { readWallDimensions, resolveDimension, saveWallDimensionIn } from './wall-dimensions.js';
import { readGrids, toPlan } from './model-grids.js';
import { squareMove } from './wall-square.js';
import { ids, val } from './ifc-util.js';
import { segsOf, pathArea, offsetPath } from './walls/draw.js';
import { splitAt, deleteSegment, canRejoin, openingsAfter, station, wallLength } from './walls/cut.js';
import { keep, followGrid, drop, renameGrid } from './walls/hold.js';

const nowall = () => Object.assign(new Error('model.err.nowall'), { key: 'model.err.nowall' });
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const unit = (v) => { const L = Math.hypot(v[0], v[1]); return L > 0 ? [v[0] / L, v[1] / L] : [1, 0]; };

// ------------------------------------------------------------------------------------------------------------------- draw
/** The centre lines of a path drawn on a face: straight sides offset and mitred, curved ones kept concentric. */
function centreSegs(path, off) {
  if (!off) return segsOf(path);
  const straight = offsetPath({ ...path, bulges: path.bulges.map(() => 0) }, off), segs = segsOf(path), out = [];
  const P = straight.points, n = P.length;
  segs.forEach((s, i) => {
    if (!s.bulge) { out.push({ a: P[i], b: P[(i + 1) % n], bulge: 0 }); return; }
    // an arc on a face: its ends moved square to it by the offset (the same turn), BimCraft's arcCentre
    const th = 4 * Math.atan(s.bulge), u = unit([s.b[0] - s.a[0], s.b[1] - s.a[1]]);
    const rot = (v, f) => [v[0] * Math.cos(f) - v[1] * Math.sin(f), v[0] * Math.sin(f) + v[1] * Math.cos(f)];
    const ta = rot(u, -th / 2), tb = rot(u, th / 2), na = [-ta[1], ta[0]], nb = [-tb[1], tb[0]];
    out.push({ a: [s.a[0] + na[0] * off, s.a[1] + na[1] * off], b: [s.b[0] + nb[0] * off, s.b[1] + nb[1] * off], bulge: s.bulge });
  });
  return out;
}
export function drawPath({ storey, path, typeKey, reference = 'center', side = null, joinOff = false, baseOffset = 0, topLevel = '', topOffset = 0, height = 0 }) {
  const spec = { path: { points: path.points.map((p) => [p[0], p[1]]), bulges: (path.bulges || path.points.map(() => 0)).slice(), closed: !!path.closed } };
  const guids = [];
  return op((w) => {
    const st = w.byGuid(storey);
    if (!st) refuse('model.err.nolevel');
    const type = wallType(typeKey, w);
    if (!type) refuse('model.err.walltype');
    const t = typeThickness(type), ccw = spec.path.closed && pathArea(spec.path) > 0;
    // a closed path: the outside of every wall outward (anticlockwise: on the right of the way it runs)
    const ext = spec.path.closed ? (ccw ? 'right' : 'left') : (side || 'left');
    const outLeft = ext === 'left' ? 1 : -1;
    const off = reference === 'outside' ? -outLeft * t / 2 : reference === 'inside' ? outLeft * t / 2 : 0;
    const just = reference === 'outside' ? 'exterior' : reference === 'inside' ? 'interior' : 'center';
    const made = new Map();
    centreSegs(spec.path, off).forEach((s, i) => {
      if (dist(s.a, s.b) < 1) return;
      if (!guids[i]) guids[i] = val(w.guid());
      const r = addWall(w, { storey: st, a: s.a, b: s.b, bulge: s.bulge || 0, typeKey, baseOffset, topLevel, topOffset, height, extSide: ext, justification: just, guid: guids[i], joinOff: joinOff ? { a: true, b: true } : null });
      made.set(r.guid, r.id);
    });
    settleFor(w, [st]);
    const list = [...made.values()];
    return { id: list[list.length - 1], ids: list, made };
  });
}

// -------------------------------------------------------------------------------------------------------------------- cut
/** The wall's other properties for a new part of it. */
const partOf = (x) => ({ storey: x.storey, typeKey: x.typeKey, baseOffset: x.baseOffset, topLevel: x.topLevel, topOffset: x.topOffset, height: x.fixedHeight, extSide: x.extSide, justification: x.justification });
/** Reference dimensions on the wall follow the part they measure to (their station is a fraction of the wall's length). */
function moveDims(w, wall, parts) {
  const L = wallLength(wall);
  for (const d of readWallDimensions(w)) {
    if (d.issue || !d.refs.some((r) => r.wall === wall.guid)) continue;
    const refs = d.refs.map((r) => {
      if (r.wall !== wall.guid) return r;
      const s = r.station * L, p = parts.find((q) => s >= q.s0 - 0.5 && s <= q.s1 + 0.5) || parts.reduce((m, q) => (Math.min(Math.abs(s - q.s0), Math.abs(s - q.s1)) < Math.min(Math.abs(s - m.s0), Math.abs(s - m.s1)) ? q : m));
      return { ...r, wall: p.guid, station: Math.max(0, Math.min(1, (s - p.s0) / (p.s1 - p.s0))) };
    });
    const lv = val(w.api.GetLine(w.mid, d.storey, false)?.GlobalId);
    if (lv) saveWallDimensionIn(w, { guid: d.guid, refs, axis: d.axis, offset: d.offset, view: d.view, level: lv });
  }
}
/** Write the parts of a cut wall: the first part (keep) is the wall itself, the others are new walls; doors go with their part. */
function writeParts(w, wall, parts, cut, fresh) {
  const before = readWalls(w), ops = readOpenings(w, null, before).filter((o) => o.wallGuid === wall.guid);
  const L = wallLength(wall), [c0, c1] = cut;
  const sorted = openingsAfter(ops, cut);
  if (sorted.cut.length) refuse('model.err.trim.cuts');
  // each part's stretch of the old wall (from its start), for the doors and dimensions
  const spans = parts.map((p) => { const s0 = Math.max(0, station(wall, p.a).s); return { s0, s1: s0 + wallLength(p) }; });
  void c0; void c1;
  const out = [];
  parts.forEach((p, i) => {
    const sp = spans[i];
    if (p.keep) {
      updateWall(w, wall.guid, { a: p.a, b: p.b, bulge: p.bulge || 0, joinAllowed: { a: !p.joinOff.a, b: !p.joinOff.b } }, { carryJoined: false });
      out.push({ guid: wall.guid, ...sp });
    } else {
      const g = fresh(i);
      addWall(w, { ...partOf(wall), a: p.a, b: p.b, bulge: p.bulge || 0, guid: g, joinOff: p.joinOff });
      out.push({ guid: g, ...sp });
    }
  });
  // doors and windows: each to the part it stands in, at its place along that part
  for (const o of ops) {
    const part = out.find((x) => o.offset >= x.s0 - 0.5 && o.offset + o.width <= x.s1 + 0.5);
    if (!part) { deleteOpenings(w, [o.guid]); continue; }   // in the piece that was deleted
    const offset = o.offset - part.s0;
    if (part.guid === wall.guid && Math.abs(offset - o.offset) < 1e-6) continue;
    updateOpening(w, o.guid, part.guid === wall.guid ? { offset } : { wall: part.guid, offset });
  }
  moveDims(w, wall, out);
  void L;
  return out;
}
export function splitWall(guid, { s = null, point = null, gap = 0, free = false } = {}) {
  const fixed = [];
  return op((w) => {
    const wall = readWalls(w).find((x) => x.guid === guid);
    if (!wall) throw nowall();
    const at = s ?? station(wall, point).s;
    const r = splitAt(wall, at, { gap, free });
    const out = writeParts(w, wall, r.parts, r.cut, (i) => fixed[i] || (fixed[i] = val(w.guid())));
    settleFor(w, [wall.storey], out.map((x) => x.guid));
    const made = new Map(out.filter((x) => x.guid !== guid).map((x) => [x.guid, w.byGuid(x.guid)]));
    return { id: w.byGuid(guid), ids: out.map((x) => w.byGuid(x.guid)), made, parts: out.map((x) => x.guid) };
  });
}
export function deleteWallSegment(guid, s0, s1) {
  const fixed = [];
  return op((w) => {
    const wall = readWalls(w).find((x) => x.guid === guid);
    if (!wall) throw nowall();
    const r = deleteSegment(wall, s0, s1);
    // the doors in the piece taken out go with it; one across either cut refuses the change
    const ops = readOpenings(w, null, readWalls(w)).filter((o) => o.wallGuid === guid);
    const [lo, hi] = r.cut, inPiece = [];
    for (const o of ops) {
      const o0 = o.offset, o1 = o.offset + o.width;
      if (o0 >= lo - 0.5 && o1 <= hi + 0.5) inPiece.push(o.guid);
      else if ((o0 < lo - 0.5 && o1 > lo + 0.5) || (o0 < hi - 0.5 && o1 > hi + 0.5)) refuse('model.err.trim.cuts');
    }
    if (inPiece.length) deleteOpenings(w, inPiece);
    const parts = r.parts.map((p, i) => ({ ...p, keep: i === 0 }));
    const out = writeParts(w, wall, parts, r.cut, (i) => fixed[i] || (fixed[i] = val(w.guid())));
    settleFor(w, [wall.storey], out.map((x) => x.guid));
    return { id: w.byGuid(guid), ids: out.map((x) => w.byGuid(x.guid)), made: new Map(out.filter((x) => x.guid !== guid).map((x) => [x.guid, w.byGuid(x.guid)])) };
  });
}
export function rejoinWalls(g1, g2) {
  return op((w) => {
    const walls = readWalls(w), A = walls.find((x) => x.guid === g1), B = walls.find((x) => x.guid === g2);
    if (!A || !B) throw nowall();
    if (A.storey !== B.storey) refuse('walls.err.rejoin');
    const one = canRejoin(A, B);
    if (!one) refuse('walls.err.rejoin');
    const ops = readOpenings(w, null, walls), uA = unit([one.b[0] - one.a[0], one.b[1] - one.a[1]]);
    // where each wall's doors land along the one wall (B may run the other way: its doors then measure from its end)
    const along = (p) => station({ a: one.a, b: one.b, bulge: one.bulge }, p).s;
    const sameWay = (x) => (x.bulge ? Math.sign(x.bulge) === Math.sign(one.bulge) : (x.b[0] - x.a[0]) * uA[0] + (x.b[1] - x.a[1]) * uA[1] > 0);
    const moves = [];
    for (const [x, keepIt] of [[A, true], [B, false]]) for (const o of ops.filter((q) => q.wallGuid === x.guid)) {
      const fwd = sameWay(x), s0 = along(fwd ? x.a : x.b), off = fwd ? s0 + o.offset : s0 + (wallLength(x) - o.offset - o.width);
      moves.push({ o, off, flip: !fwd, keepIt });
    }
    const Lold = wallLength(A), aStart = along(A.a);
    updateWall(w, g1, { a: one.a, b: one.b, bulge: one.bulge || 0, joinAllowed: { a: !(sameWay(A) ? A.joinOff.a : A.joinOff.b), b: !(sameWay(B) ? B.joinOff.b : B.joinOff.a) } }, { carryJoined: false });
    for (const m of moves) updateOpening(w, m.o.guid, { ...(m.keepIt ? {} : { wall: g1 }), offset: m.off, ...(m.flip ? { face: m.o.face === 'right' ? 'left' : 'right' } : {}) });
    // reference dimensions on either wall: to the same point of the one wall
    const L = wallLength(one);
    for (const d of readWallDimensions(w)) {
      if (d.issue || !d.refs.some((r) => r.wall === g1 || r.wall === g2)) continue;
      const refs = d.refs.map((r) => {
        if (r.wall !== g1 && r.wall !== g2) return r;
        const x = r.wall === g1 ? A : B, s = (sameWay(x) ? along(x.a) + r.station * wallLength(x) : along(x.a) - r.station * wallLength(x));
        return { ...r, wall: g1, station: Math.max(0, Math.min(1, s / L)) };
      });
      const lv = val(w.api.GetLine(w.mid, d.storey, false)?.GlobalId);
      if (lv) saveWallDimensionIn(w, { guid: d.guid, refs, axis: d.axis, offset: d.offset, view: d.view, level: lv });
    }
    void Lold; void aStart;
    writeHoldsIn(w, drop(readHolds(w), [g2]));
    deleteWalls(w, [g2]);
    settleFor(w, [A.storey], [g1]);
    return { id: w.byGuid(g1), ids: [w.byGuid(g1)] };
  });
}

// -------------------------------------------------------------------------------------------------------------- the holds
export const HOLDS_PSET = 'CadCraft_WallHolds';
const projectOf = (w) => { try { return ids(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
export function readHolds(w) {
  const p = projectOf(w);
  if (!p) return [];
  try { const v = JSON.parse(w.readPset(p, HOLDS_PSET)?.Holds || '[]'); return Array.isArray(v) ? v.filter((h) => h && typeof h.id === 'string' && ['line', 'end', 'dim'].includes(h.kind)) : []; } catch (e) { return []; }
}
function writeHoldsIn(w, holds) {
  const p = projectOf(w);
  if (!p) return;
  if (!holds.length && !w.readPset(p, HOLDS_PSET)) return;
  w.upsertPset(p, HOLDS_PSET, [['Holds', 'IFCTEXT', JSON.stringify(holds)]]);
}
/** The holds still pointing at something: walls, dimensions and grid lines that are gone take their holds with them. */
function liveHolds(w, holds) {
  const walls = new Set(readWalls(w).map((x) => x.guid)), dims = new Set(readWallDimensions(w).map((d) => d.guid));
  const tags = new Set(readGrids(w).flatMap((g) => g.axes.map((a) => a.tag)));
  return holds.filter((h) => (h.kind === 'dim' ? dims.has(h.dim) : walls.has(h.wall)) && (!h.to?.wall || walls.has(h.to.wall)) && (h.to?.grid === undefined || tags.has(h.to.grid)));
}
export function lineOfWall(wall, ref = 'center') {
  const off = ref === 'center' ? 0 : locationOffset(ref, wall.t, wall.extSide, wall.assembly) || 0, u = unit([wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]]), n = [-u[1], u[0]];
  return { p: [wall.a[0] + n[0] * off, wall.a[1] + n[1] * off], u };
}
/** The context lib/walls/hold.js asks for, on one storey's walls. */
function holdCtx(w, storey) {
  let grids = null;
  const axes = () => { if (!grids) { try { grids = toPlan(w, storey, readGrids(w)).flatMap((g) => g.axes); } catch (e) { grids = []; } } return grids; };
  let dims = null;
  return {
    lineOf: lineOfWall,
    grid: (tag) => axes().find((a) => a.tag === tag) || null,
    dim: (id, walls) => { dims ??= readWallDimensions(w); const d = dims.find((x) => x.guid === id); if (!d || d.issue) return null; const r = resolveDimension(d, walls); return r.status === 'ok' ? { value: r.value, a: r.a, b: r.b, walls: [d.refs[0].wall, d.refs[1].wall] } : null; },
    move: (walls, guid, d) => squareMove(walls, guid, d),
  };
}
/** Check a hold before it is stored, and the distance a line hold keeps. → the hold, complete. */
function holdFor(w, spec) {
  const walls = readWalls(w), wall = walls.find((x) => x.guid === (spec.wall ?? ''));
  const h = { ...spec };
  if (h.kind === 'dim') {
    const d = readWallDimensions(w).find((x) => x.guid === h.dim);
    const r = d && !d.issue ? resolveDimension(d, walls) : null;
    if (!r || r.status !== 'ok') refuse('walls.err.holdnone');
    h.value = r.value;
    return h;
  }
  if (!wall) throw nowall();
  const ctx = holdCtx(w, wall.storey);
  if (h.kind === 'line') {
    const tgt = h.to.grid !== undefined ? ctx.grid(h.to.grid) : walls.find((x) => x.guid === h.to.wall);
    if (!tgt) refuse('walls.err.holdnone');
    const tl = h.to.grid !== undefined ? { p: tgt.a, u: unit([tgt.b[0] - tgt.a[0], tgt.b[1] - tgt.a[1]]) } : lineOfWall(tgt, h.to.ref || 'center');
    const ml = lineOfWall(wall, h.ref || 'center'), c = ml.u[0] * tl.u[1] - ml.u[1] * tl.u[0];
    if (Math.abs(c) > Math.sin(0.5 * Math.PI / 180)) refuse('walls.err.notparallel');
    if (!Number.isFinite(h.off)) h.off = (ml.p[0] - tl.p[0]) * -tl.u[1] + (ml.p[1] - tl.p[1]) * tl.u[0];
  } else if (h.kind === 'end') {
    const g = ctx.grid(h.to.grid);
    if (!g) refuse('walls.err.holdnone');
    const u = unit([g.b[0] - g.a[0], g.b[1] - g.a[1]]), p = wall[h.end], off = (p[0] - g.a[0]) * -u[1] + (p[1] - g.a[1]) * u[0];
    if (Math.abs(off) > 1) refuse('walls.err.notongrid');
  }
  return h;
}
export function addHold(spec) {
  const fixed = { id: null };
  return op((w) => {
    fixed.id ||= 'h-' + val(w.guid());
    const h = holdFor(w, { ...spec, id: fixed.id });
    const holds = liveHolds(w, readHolds(w)).filter((x) => !(x.kind === h.kind && x.wall === h.wall && x.dim === h.dim && x.end === h.end && JSON.stringify(x.to) === JSON.stringify(h.to)));
    writeHoldsIn(w, [...holds, h]);
    return { id: null, ids: [], hold: h };
  });
}
export function removeHolds(list) {
  const gone = new Set(list);
  return op((w) => { writeHoldsIn(w, liveHolds(w, readHolds(w)).filter((h) => !gone.has(h.id))); return { id: null, ids: [] }; });
}
/** A plan grown so every hold stays kept (lib/walls/hold.js). The walls the person acted on are `driven`. */
export function holdPlan(w, walls, plan, driven = []) {
  const holds = liveHolds(w, readHolds(w));
  if (!holds.length || !plan.size) return plan;
  const first = walls.find((x) => x.guid === [...plan.keys()][0]);
  const level = walls.filter((x) => x.storey === first?.storey);
  return keep(level, holds, plan, holdCtx(w, first?.storey), { driven });
}
/** The walls locked to a grid line follow it (after the line moved); a renamed tag keeps its holds. */
export function afterGridMove(w, tag, newTag = tag) {
  let holds = readHolds(w);
  if (!holds.length) return [];
  if (newTag !== tag) { holds = renameGrid(holds, tag, newTag); writeHoldsIn(w, holds); }
  const mine = holds.filter((h) => h.to?.grid === newTag);
  if (!mine.length) return [];
  const all = readWalls(w), storeys = new Set(all.filter((x) => mine.some((h) => h.wall === x.guid)).map((x) => x.storey)), moved = [];
  for (const st of storeys) {
    const level = all.filter((x) => x.storey === st), ops0 = readOpenings(w, null, all);
    const plan = followGrid(level, mine, newTag, holdCtx(w, st));
    const grown = keep(level, holds.filter((h) => h.to?.grid === undefined), plan, holdCtx(w, st), { driven: mine.map((h) => h.wall) });
    for (const [g, m] of grown) { updateWall(w, g, { a: m.a, b: m.b }, { carryJoined: false }); moved.push(g); }
    if (grown.size) { afterWallMoveFor(w, all, ops0, [...grown.keys()]); settleFor(w, [st], [...grown.keys()]); }
  }
  return moved;
}
/** Grid lines taken away: their holds go too. */
export function afterGridRemove(w, tags) {
  const holds = readHolds(w), left = drop(holds, tags.map((t) => 'grid:' + t));
  if (left.length !== holds.length) writeHoldsIn(w, left);
}
export { writeHoldsIn };
void readJoinRecords;
