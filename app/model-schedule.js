/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-schedule.js — the live schedules of what was drawn (0.5 part 3, BM.7): doors, windows, walls by type, rooms. No
 * DOM: bin/test-bimcraft.mjs --model runs it in Node. Built from the same reading the tools use (model-ops.js
 * snapshotModel + the levels' room loops), so they change with every edit; the CSV goes through ifc-qto.js tableCsv like
 * every other BimCraft table.
 *
 *   schedules(snap, loops, { fmtLen, fmtArea, t, unit }) → { doors, windows, walls, rooms }, each { head: [labels], rows: [[cells]],
 *     total: [cells] | null, nums: [[numbers]] } — cells are text in the chosen units; nums the same rows in mm / mm² for tests
 *   loops: Map(storey → { rooms, outlines }) (model-ops.js loopsOf)
 *   the walls schedule states gross, deductions and net side area and carries `note` (the measuring rule) and `rule` (its id)
 *   sideOf(wall) → mm² | null: the gross face of a shaped wall (quantity-schedules.js grossSideReader); none = length × height
 *   measure (0.10 BK.42): { rules: { quantity: methods.js methodRule in mm² }, cuts: junctions.js junctionCuts, note(quantity) } from
 *     quantity-schedules.js measureCtx: the project's measurement method. None = the CadCraft default, measured as before.
 *   countBy 'reported' (default) leaves out walls reported as another class (0.9 D8.12-C: snap.reported); 'drawn' counts them as drawn
 */
import { loopAt } from './model-rooms.js';
import { openingType, openingTypeName } from './model-openings.js';
import { wallType, typeName } from './model-walls.js';
import { tableCsv } from './ifc-qto.js';
import { wallSide } from './quantities/rules.js';
import { cutFor } from './quantities/junctions.js';   // 0.10 BK.42 (bk-measure-10)

export function schedules(snap, loops, { fmtLen, fmtArea, t, unit = '', countBy = 'reported', sideOf = null, measure = null }) {   // measure: BK.42, the project's method (quantity-schedules.js measureCtx); none = the default
  // 0.9 D8.12-C: a wall reported as another class (a panel, a covering) is counted as that, not as a wall (unless the working style counts the drawn class)
  const away = (x, re) => countBy !== 'drawn' && snap.reported?.get(x.id) && !re.test(snap.reported.get(x.id).cls);
  snap = { ...snap, walls: snap.walls.filter((w) => !away(w, /^IfcWall/)), openings: snap.openings.filter((o) => !away(o, /^Ifc(Door|Window)/)) };
  const H = (s) => (unit ? s + ' (' + unit + ')' : s);   // GH.3-A: a length column says its unit when the cells do not (every unit but feet-inches)
  const levelName = (id) => snap.levels.find((l) => l.id === id)?.name || '';
  const levelIx = (id) => snap.levels.findIndex((l) => l.id === id);
  const byMark = (a, b) => String(a.mark).localeCompare(String(b.mark), undefined, { numeric: true });
  const wallOf = new Map(snap.walls.map((w) => [w.id, w]));
  const opening = (kind) => {
    const list = snap.openings.filter((o) => o.kind === kind).sort((a, b) => levelIx(a.storey) - levelIx(b.storey) || byMark(a, b));
    const head = [t('model.sch.mark'), t('model.ot.type'), H(t('model.ot.width')), H(t('model.ot.height')), ...(kind === 'window' ? [H(t('model.ot.sill'))] : []), t('model.level'), t('model.sch.wall')];
    const rows = list.map((o) => [o.mark, openingTypeName(openingType(o.typeKey) || { key: o.typeKey }), fmtLen(o.width), fmtLen(o.height), ...(kind === 'window' ? [fmtLen(o.sill)] : []), levelName(o.storey), wallTypeName(wallOf.get(o.wall))]);
    const nums = list.map((o) => [o.width, o.height, o.sill]);
    return { head, rows, nums, total: [t('model.sch.count', { n: list.length })], ids: list.map((o) => [o.id]) };   // ids: the elements of each row (BK.94: optional classification columns)
  };
  // walls by type: how many, their length, and the side area as gross, deductions and net (BK.84 / BK.11: the one stated rule,
  // quantities/rules.js 'wall.side', the same function the IFC Qto values and TakeoffCraft use; the rule is the schedule's note)
  const types = new Map();
  for (const w of snap.walls) {
    const k = w.typeKey;
    if (!types.has(k)) types.set(k, { n: 0, len: 0, area: 0, gross: 0, ded: 0, t: w.t, name: wallTypeName(w), ids: [] });
    const g = types.get(k);
    g.ids.push(w.id);
    const side = wallSideOf(w, snap.openings, sideOf, measure);
    g.n++; g.len += w.len; g.area += side.net; g.gross += side.gross; g.ded += side.deductions;
  }
  const wl = [...types.values()].sort((a, b) => a.name.localeCompare(b.name));
  const sum = (k) => wl.reduce((s, g) => s + g[k], 0);
  const walls = {
    head: [t('model.wall.type'), H(t('model.prop.thickness')), t('model.sch.count.h'), H(t('model.prop.length')), t('model.sch.grossarea'), t('model.sch.deductions'), t('model.sch.netarea')],
    rows: wl.map((g) => [g.name, fmtLen(g.t), String(g.n), fmtLen(g.len), fmtArea(g.gross), fmtArea(g.ded), fmtArea(g.area)]),
    nums: wl.map((g) => [g.n, g.len, g.area, g.gross, g.ded]),   // count, length, net, then gross and deductions (mm, mm²)
    total: [t('model.sch.total'), '', String(sum('n')), fmtLen(sum('len')), fmtArea(sum('gross')), fmtArea(sum('ded')), fmtArea(sum('area'))],
    note: measure?.note ? measure.note('wall.side') : t('qty.rule.wall.side'), rule: 'wall.side', ids: wl.map((g) => g.ids),
  };
  // rooms: number, name, level, area and perimeter of the loop round each one's seed
  const rl = [];
  for (const sp of snap.derived?.spaces || []) {
    const L = loops.get(sp.storey);
    const loop = L && loopAt(L.rooms, sp.seed);
    if (!loop) continue;
    rl.push({ sp, loop });
  }
  rl.sort((a, b) => String(a.sp.number).localeCompare(String(b.sp.number), undefined, { numeric: true }));
  const rooms = {
    head: [t('model.room.number'), t('model.room.longname'), t('model.level'), t('model.room.area'), H(t('model.room.perimeter'))],
    rows: rl.map(({ sp, loop }) => [sp.number, sp.name, levelName(sp.storey), fmtArea(loop.area), fmtLen(loop.perimeter)]),
    nums: rl.map(({ loop }) => [loop.area, loop.perimeter]),
    total: [t('model.sch.total'), '', '', fmtArea(rl.reduce((s, r) => s + r.loop.area, 0)), ''], ids: rl.map(({ sp }) => [sp.id]),
  };
  return { doors: opening('door'), windows: opening('window'), walls, rooms };
}
/**
 * One wall's side area by the stated rule: gross, deductions (its openings, each once), net. `sideOf(wall)` → the gross face of a
 * wall whose face is not length × height (a shaped top or base: the IFC GrossSideArea), else null.
 */
export function wallSideOf(w, openings, sideOf = null, measure = null, quantity = 'wall.side') {
  const g = sideOf ? sideOf(w) : null;
  const rule = measure?.rules?.[quantity] || null;   // BK.42: the project's measurement method; none = the default, as before
  return wallSide({ length: w.len, height: w.height, gross: g > 0 ? g : null, openings: openings.filter((o) => o.wall === w.id).map((o) => ({ id: o.id, width: o.width, height: o.height })),
    ...(rule ? { rule, cut: cutFor(measure.cuts, w.id, rule.junction).area } : {}) });
}
const wallTypeName = (w) => (w ? ((w.assembly || wallType(w.typeKey)) ? typeName((w.assembly || wallType(w.typeKey))) : w.typeName) : '');

/** One schedule as CSV (the total row last). */
export function scheduleCsv(s) {
  if (s.csvHead) return tableCsv(s.csvHead, s.csvRows);
  return tableCsv(s.head, s.total ? [...s.rows, s.total.concat(Array(Math.max(0, s.head.length - s.total.length)).fill(''))] : s.rows);
}
