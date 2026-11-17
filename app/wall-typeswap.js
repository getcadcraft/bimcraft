/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-typeswap.js: swap the type of the picked walls and report what moved (0.10 BK.7, BK.16; session bk-typeswap-10). No DOM:
 * bin/test-bimcraft.mjs --typeswap runs it in Node. The rules (which walls change, the list, the report) are lib/walls/typeswap.js and
 * lib/walls/lod.js (dev/walls/, byte copies); the swap itself is model-ops.js retypeWallsIn (each wall changed as Properties › Type changes one: the location line stays and
 * the corners follow, FX.65). This file reads the model into the lib's plain rows and wraps the swap as ONE undo step.
 *
 *   typeRows(w, walls?)                the wall types a wall can be swapped to: the starters, the project's own, and any type one of
 *                                      `walls` has that is in neither list (a starter at another thickness)
 *   swapList(w, guids, query?)         the swap list for these walls: lib swapChoices rows (+ `label` 'Name [LOD 300]')
 *   swapSnapshot(w, walls, storeys)    { walls, openings, rooms } as the lib reads them; rooms of `storeys` only
 *   swapWallType(guids, typeKey)       op, ONE undo step → { id, ids, swap: the lib's report }. A wall that already has the type is left
 *                                      alone and counted; nothing is refused because of what the report says. Refused, with nothing
 *                                      changed: an unknown type (model.err.walltype), a door or window that would no longer fit its
 *                                      wall (walls.err.swapfit), a lock the swap would break (walls.err.held)
 *   reportText(report, { units })      the report as lines of text in the page's language and the person's units: [{ text, key, room? }]
 *   statusText(report)                 one line for the status bar
 *   addLodColumn(all, walls, { label })  the type's LOD as a last column of the Walls by type schedule
 */
import { op, retypeWallsIn } from './model-ops.js';
import { readWalls, wallTypes, wallType, typeName, typeThickness, wallLevelsPassed } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { readDerived, storeyLoops } from './model-slabs.js';
import { loopAt } from './model-rooms.js';
import { readLevels } from './model-levels.js';
import { wallGeom } from './model-arcs.js';
import { lenMark, fmtArea } from './model-units.js';
import { t } from './i18n.js';
import { planSwap, swapChoices, swapLabel, swapReport, reportLines } from './walls/typeswap.js';
import { isLod, lodLabel } from './walls/lod.js';

const typeRow = (x) => ({ key: x.key, name: typeName(x), t: typeThickness(x), exterior: !!x.exterior, custom: !!x.custom, ...(isLod(x.lod) ? { lod: x.lod } : {}) });

export function typeRows(w, walls = []) {
  const rows = wallTypes(w).map(typeRow), have = new Set(rows.map((r) => r.key));
  for (const x of walls) if (x.assembly && !have.has(x.typeKey)) { have.add(x.typeKey); rows.push(typeRow({ ...x.assembly, key: x.typeKey })); }
  return rows;
}
export function swapList(w, guids, query = '') {
  const all = readWalls(w), picked = all.filter((x) => guids.includes(x.guid));
  return swapChoices(typeRows(w, picked), picked, { query }).map((r) => ({ ...r, label: swapLabel(r) }));
}

/** The levels whose rooms a change of these walls can touch: their own, and the levels they run up through. */
function storeysOf(w, walls, guids) {
  const levels = readLevels(w), out = new Set();
  for (const x of walls) if (guids.includes(x.guid)) { out.add(x.storey); for (const l of wallLevelsPassed(x, levels)) out.add(l.id); }
  return out;
}
export function swapSnapshot(w, walls = readWalls(w), storeys = new Set(walls.map((x) => x.storey))) {
  const by = new Map(walls.map((x) => [x.id, x]));
  const openings = readOpenings(w, null, walls).map((o) => {
    const host = by.get(o.wall), g = host ? wallGeom(host) : null;
    return { guid: o.guid, kind: o.kind, wall: o.wallGuid, offset: o.offset, width: o.width, p: g ? g.at(o.offset + o.width / 2, 0) : [0, 0] };
  });
  const rooms = [], D = readDerived(w);
  for (const st of storeys) {
    const spaces = D.spaces.filter((s) => s.storey === st);
    if (!spaces.length) continue;
    const L = storeyLoops(w, st);
    for (const s of spaces) { const loop = loopAt(L.rooms, s.seed); if (loop) rooms.push({ guid: s.guid, number: s.number, name: s.name, area: loop.area, storey: st }); }
  }
  return {
    walls: walls.map((x) => ({ guid: x.guid, typeKey: x.typeKey, typeName: x.assembly ? typeName(x.assembly) : x.typeName, t: x.t, a: x.a, b: x.b, storey: x.storey, ...(isLod(x.assembly?.lod) ? { lod: x.assembly.lod } : {}) })),
    openings, rooms,
  };
}

export function swapWallType(guids, typeKey) {
  const asked = [...new Set(guids)];
  return op((w) => {
    const target = wallType(typeKey, w);
    if (!target) throw Object.assign(new Error('model.err.walltype'), { key: 'model.err.walltype' });
    const walls0 = readWalls(w), plan = planSwap(walls0, asked, typeKey);
    const storeys = storeysOf(w, walls0, plan.change);
    const before = swapSnapshot(w, walls0, storeys);
    let r = { id: null, ids: [] }, after = before;
    if (plan.change.length) {
      // a door or window that no longer fits (its wall got shorter at a corner that followed, or lower): said in the swap's own words.
      // The op's writer takes back everything written so far, so nothing is half-changed.
      try { r = retypeWallsIn(w, plan.change, typeKey); }
      catch (e) { if (e?.key === 'model.err.nofit' || e?.key === 'model.err.tootall') throw Object.assign(new Error('walls.err.swapfit'), { key: 'walls.err.swapfit', cause: e.key }); throw e; }
      after = swapSnapshot(w, readWalls(w), storeys);
    }
    return { ...r, swap: swapReport(before, after, { guids: asked, to: typeRow({ ...target, key: typeKey }) }) };
  });
}

const signedArea = (mm2, units) => (mm2 < 0 ? '-' : '+') + fmtArea(Math.abs(mm2), units);   // i18n-ignore: signs
export function reportText(report, { units = 'mm' } = {}) {
  return reportLines(report).map((line) => {
    const fill = {};
    for (const [k, v] of Object.entries(line.fill)) {
      if (k.endsWith('Len')) fill[k.slice(0, -3)] = lenMark(v, units);
      else if (k === 'deltaArea') fill.delta = signedArea(v, units);
      else if (k.endsWith('Area')) fill[k.slice(0, -4)] = fmtArea(v, units);
      else fill[k] = v;
    }
    return { text: t(line.key, fill), key: line.key, ...(line.room ? { room: line.room } : {}) };
  });
}
export function statusText(report) {
  if (!report || report.nothing) return t('typeswap.rep.none');
  return t('typeswap.status', { n: report.walls.changed, to: report.to.name + (isLod(report.to.lod) ? ' [' + lodLabel(report.to.lod) + ']' : ''), openings: report.openings.rehosted, rooms: report.rooms.changed });
}

/**
 * The LOD of each type as a last column of the Walls by type schedule (optional: the page adds it when Settings says so).
 * `all.walls` = model-schedule.js's { head, rows, ids (the wall ids of each row), total }; `walls` = readWalls rows.
 */
export function addLodColumn(all, walls, { label = 'LOD' } = {}) {
  const sc = all?.walls;
  if (!sc || !Array.isArray(sc.ids) || sc.ids.length !== sc.rows.length || sc.lodColumn) return all;
  const by = new Map(walls.map((x) => [x.id, x]));
  sc.head = [...sc.head, label];
  sc.rows = sc.rows.map((row, i) => { const set = new Set(sc.ids[i].map((id) => by.get(id)?.assembly?.lod)); const v = set.size === 1 ? [...set][0] : null; return [...row, isLod(v) ? lodLabel(v) : '']; });
  if (Array.isArray(sc.total)) sc.total = [...sc.total, ''];
  sc.lodColumn = true;
  return all;
}
