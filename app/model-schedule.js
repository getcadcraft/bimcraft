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
 */
import { loopAt } from './model-rooms.js';
import { openingType, openingTypeName } from './model-openings.js';
import { wallType, typeName } from './model-walls.js';
import { tableCsv } from './ifc-qto.js';

export function schedules(snap, loops, { fmtLen, fmtArea, t, unit = '' }) {
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
    return { head, rows, nums, total: [t('model.sch.count', { n: list.length })] };
  };
  // walls by type: how many, their length, net side area and volume (from the walls' own quantities in mm)
  const types = new Map();
  for (const w of snap.walls) {
    const k = w.typeKey;
    if (!types.has(k)) types.set(k, { n: 0, len: 0, area: 0, t: w.t, name: wallTypeName(w) });
    const g = types.get(k);
    const openArea = snap.openings.filter((o) => o.wall === w.id).reduce((s, o) => s + o.width * o.height, 0);
    g.n++; g.len += w.len; g.area += Math.max(0, w.len * w.height - openArea);
  }
  const wl = [...types.values()].sort((a, b) => a.name.localeCompare(b.name));
  const walls = {
    head: [t('model.wall.type'), H(t('model.prop.thickness')), t('model.sch.count.h'), H(t('model.prop.length')), t('model.sch.netarea')],
    rows: wl.map((g) => [g.name, fmtLen(g.t), String(g.n), fmtLen(g.len), fmtArea(g.area)]),
    nums: wl.map((g) => [g.n, g.len, g.area]),
    total: [t('model.sch.total'), '', String(wl.reduce((s, g) => s + g.n, 0)), fmtLen(wl.reduce((s, g) => s + g.len, 0)), fmtArea(wl.reduce((s, g) => s + g.area, 0))],
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
    total: [t('model.sch.total'), '', '', fmtArea(rl.reduce((s, r) => s + r.loop.area, 0)), ''],
  };
  return { doors: opening('door'), windows: opening('window'), walls, rooms };
}
const wallTypeName = (w) => (w ? ((w.assembly || wallType(w.typeKey)) ? typeName((w.assembly || wallType(w.typeKey))) : w.typeName) : '');

/** One schedule as CSV (the total row last). */
export function scheduleCsv(s) {
  if (s.csvHead) return tableCsv(s.csvHead, s.csvRows);
  return tableCsv(s.head, s.total ? [...s.rows, s.total.concat(Array(Math.max(0, s.head.length - s.total.length)).fill(''))] : s.rows);
}
