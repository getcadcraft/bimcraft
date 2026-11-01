/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-modify.js — Move (with Copy), Align and Distribute for the elements BimCraft draws (0.8 D8.3, session bim-08). No DOM:
 * bin/test-bimcraft.mjs --modify runs it in Node. Plan mm, in the elements' own storey axes. The names (MOVE, ALIGN, DISTRIBUTE)
 * and the options are CadCraft's (cadcraft/dev/align.js): side left | center | right | top | middle | bottom, to selection | first |
 * last | point, axis h | v, mode centers | gaps.
 *
 *   movables(w, storey?) → [{ kind: 'wall'|'floor'|'column'|'item', guid, storey, box: { minX, minY, maxX, maxY } }]
 *   alignMoves(list, { side, to, point }) → Map(guid → [dx, dy])     list = movables in pick order (first / last = the ends)
 *   distributeMoves(list, { axis, mode })  → Map(guid → [dx, dy])    first and last along the axis stay; fewer than 3 → empty
 *   moveElements(moves, { copy })  moves = [{ guid, dx, dy }] → op (ONE undo step, travels in Studio Live like every model change)
 *
 * What moves with what: a wall takes its doors and windows (they sit in the wall's own frame) and the rooms, floors and ceilings that
 * follow the walls are brought up to date; a drawn floor takes its openings; a column and a placed library item move by their
 * insertion point. Doors and windows alone are not moved here (they slide along their wall: model-openings.js). Copy makes new
 * walls (with their doors and windows), floors and columns; a placed library item is copied by the Edit menu's Copy and Paste.
 */
import { ModelWriter } from './model-write.js';
import { readWalls, updateWall, addWall } from './model-walls.js';
import { readOpenings, addOpening } from './model-openings.js';
import { readColumns, copyColumn } from './model-columns.js';
import { readDrawnFloors, shiftDrawnFloor, writeDrawnFloor } from './model-floors.js';
import { placedItems, moveItemsIn } from './model-move.js';
import { op, settleFor } from './model-ops.js';
import { val } from './ifc-util.js';

const fail = (key) => { throw Object.assign(new Error(key), { key }); };
const boxOfPts = (pts) => ({ minX: Math.min(...pts.map((p) => p[0])), minY: Math.min(...pts.map((p) => p[1])), maxX: Math.max(...pts.map((p) => p[0])), maxY: Math.max(...pts.map((p) => p[1])) });

/** The walls' outline (centre line ± half the thickness at each end), floors' points, columns' corners, items' insertion point. */
export function movables(w, storey = null) {
  const out = [];
  for (const x of readWalls(w, storey)) {
    const L = Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1]) || 1, n = [-(x.b[1] - x.a[1]) / L * x.t / 2, (x.b[0] - x.a[0]) / L * x.t / 2];
    out.push({ kind: 'wall', guid: x.guid, storey: x.storey, box: boxOfPts([[x.a[0] + n[0], x.a[1] + n[1]], [x.a[0] - n[0], x.a[1] - n[1]], [x.b[0] + n[0], x.b[1] + n[1]], [x.b[0] - n[0], x.b[1] - n[1]]]) });
  }
  for (const f of readDrawnFloors(w, storey)) out.push({ kind: 'floor', guid: f.guid, storey: f.storey, box: boxOfPts(f.points) });
  for (const c of readColumns(w, storey)) {
    const a = (c.angle || 0) * Math.PI / 180, hw = c.width / 2, hd = (c.shape === 'round' ? c.width : c.depth) / 2;
    const pts = c.shape === 'round' ? [[c.at[0] - hw, c.at[1] - hw], [c.at[0] + hw, c.at[1] + hw]]
      : [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(([x, y]) => [c.at[0] + x * Math.cos(a) - y * Math.sin(a), c.at[1] + x * Math.sin(a) + y * Math.cos(a)]);
    out.push({ kind: 'column', guid: c.guid, storey: c.storey, box: boxOfPts(pts) });
  }
  for (const it of placedItems(w, storey)) out.push({ kind: 'item', guid: it.guid, storey: it.storey, box: { minX: it.x, minY: it.y, maxX: it.x, maxY: it.y } });
  return out;
}

const SIDES = { left: ['x', 'minX'], center: ['x', 'mid'], right: ['x', 'maxX'], top: ['y', 'maxY'], middle: ['y', 'mid'], bottom: ['y', 'minY'] };
const at = (b, ax, k) => (k === 'mid' ? (ax === 'x' ? (b.minX + b.maxX) / 2 : (b.minY + b.maxY) / 2) : b[k]);

export function alignMoves(list, { side = 'left', to = 'selection', point = null } = {}) {
  const out = new Map();
  if (!list.length || !SIDES[side]) return out;
  const [ax, k] = SIDES[side];
  let target;
  if (to === 'point') { if (!point) return out; target = ax === 'x' ? point[0] : point[1]; }
  else if (to === 'first' || to === 'last') target = at((to === 'first' ? list[0] : list[list.length - 1]).box, ax, k);
  else {
    const all = { minX: Math.min(...list.map((e) => e.box.minX)), minY: Math.min(...list.map((e) => e.box.minY)), maxX: Math.max(...list.map((e) => e.box.maxX)), maxY: Math.max(...list.map((e) => e.box.maxY)) };
    target = at(all, ax, k);
  }
  for (const e of list) { const d = target - at(e.box, ax, k); if (Math.abs(d) > 1e-9) out.set(e.guid, ax === 'x' ? [d, 0] : [0, d]); }
  return out;
}

export function distributeMoves(list, { axis = 'h', mode = 'gaps' } = {}) {
  const out = new Map();
  if (list.length < 3) return out;
  const lo = axis === 'h' ? 'minX' : 'minY', hi = axis === 'h' ? 'maxX' : 'maxY';
  const row = list.slice().sort((a, b) => (a.box[lo] + a.box[hi]) - (b.box[lo] + b.box[hi]));
  const first = row[0], last = row[row.length - 1], n = row.length;
  if (mode === 'centers') {
    const c0 = (first.box[lo] + first.box[hi]) / 2, c1 = (last.box[lo] + last.box[hi]) / 2;
    row.forEach((e, i) => { const d = c0 + (c1 - c0) * i / (n - 1) - (e.box[lo] + e.box[hi]) / 2; if (Math.abs(d) > 1e-9) out.set(e.guid, axis === 'h' ? [d, 0] : [0, d]); });
  } else {
    const span = last.box[hi] - first.box[lo], sizes = row.reduce((s, e) => s + (e.box[hi] - e.box[lo]), 0), gap = (span - sizes) / (n - 1);
    let edge = first.box[lo];
    for (const e of row) { const d = edge - e.box[lo]; if (Math.abs(d) > 1e-9) out.set(e.guid, axis === 'h' ? [d, 0] : [0, d]); edge += (e.box[hi] - e.box[lo]) + gap; }
  }
  return out;
}

/** Move (or copy) the elements by their own (dx, dy). One change; walls moved or made are settled once at the end. */
export function moveElements(moves, { copy = false } = {}) {
  const list = moves.map((m) => ({ guid: m.guid, dx: Number(m.dx) || 0, dy: Number(m.dy) || 0 }));
  const gids = new Map();   // copies: source GlobalId → the copy's, fixed on the first run so Redo makes the same ones
  return op((w) => {
    const kinds = new Map(movables(w).map((e) => [e.guid, e]));
    const walls = readWalls(w), ops0 = copy ? readOpenings(w, null, walls) : [];
    const cols = readColumns(w), floors = readDrawnFloors(w);
    const storeys = new Set(), made = new Map(), items = [];
    const gid = (g) => { if (!gids.has(g)) gids.set(g, val(w.guid())); return gids.get(g); };
    for (const m of list) {
      const e = kinds.get(m.guid);
      if (!e) fail('model.move.err.kind');
      if (!(Math.abs(m.dx) + Math.abs(m.dy) > 0)) continue;
      storeys.add(e.storey);
      if (e.kind === 'wall') {
        const x = walls.find((y) => y.guid === m.guid), a = [x.a[0] + m.dx, x.a[1] + m.dy], b = [x.b[0] + m.dx, x.b[1] + m.dy];
        if (!copy) { updateWall(w, m.guid, { a, b }, { carryJoined: false }); continue; }
        const r = addWall(w, { storey: x.storey, a, b, typeKey: x.typeKey, baseOffset: x.baseOffset, topLevel: x.topLevel, topOffset: x.topOffset, height: x.fixedHeight, extSide: x.extSide, bulge: x.bulge, justification: x.justification, guid: gid(m.guid) });
        made.set(r.guid, r.id);
        for (const o of ops0.filter((q) => q.wallGuid === m.guid)) {
          addOpening(w, { wall: r.guid, typeKey: o.typeKey, family: o.family, values: o.values, instance: o.instance, sizeName: o.sizeName, offset: o.offset, width: o.width, height: o.height, sill: o.sill, hand: o.hand, face: o.face, guid: gid(o.guid), openingGuid: gid(o.opening) });
        }
      } else if (e.kind === 'floor') {
        const f = floors.find((y) => y.guid === m.guid);
        if (!copy) { shiftDrawnFloor(w, f, m.dx, m.dy); continue; }
        // the copy: the floor drawn again (its openings are not carried: they are the floor's own cut-outs)
        const r = writeDrawnFloor(w, { storey: x0(w, f.storey), points: f.points.map((q) => [q[0] + m.dx, q[1] + m.dy]), kind: f.kind, use: f.use, thickness: f.thickness, offset: f.offset, guid: gid(m.guid) });
        made.set(gid(m.guid), r.id);
      } else if (e.kind === 'column') {
        const c = cols.find((y) => y.guid === m.guid);
        if (!copy) { moveColumn(w, c, m.dx, m.dy); continue; }
        made.set(gid(m.guid), copyColumn(w, c, m.dx, m.dy, gid(m.guid)));
      } else if (e.kind === 'item') {
        if (copy) fail('model.move.err.copyitem');
        items.push({ guid: m.guid, dx: m.dx, dy: m.dy });
      }
    }
    if (items.length) moveItemsIn(w, items);
    settleFor(w, storeys);
    const ids = list.map((m) => w.byGuid(copy ? (gids.get(m.guid) || m.guid) : m.guid)).filter(Boolean);
    return { id: ids[0] ?? null, ids, made };
  });
}

const x0 = (w, id) => val(w.api.GetLine(w.mid, id, false).GlobalId);
function moveColumn(w, c, dx, dy) {
  const line = w.api.GetLine(w.mid, c.id, false);
  w.movePlacement(line.ObjectPlacement.value, c.at[0] + dx, c.at[1] + dy, 0, c.angle);
}
