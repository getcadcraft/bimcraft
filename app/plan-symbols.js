/* SPDX-License-Identifier: Apache-2.0 */
/**
 * plan-symbols.js — plan symbols from any symbol set (lib/symbols; plumbing first, 0.8 GH.3-G) as IFC annotations on a level. No DOM:
 * bin/test-symbols.mjs runs it in Node. The drawing is not stored: the file keeps WHICH symbol (set + key), WHERE (x, y, angle) and its tag, and the
 * plan draws it from the set at the plan's scale, so it scales with the drawing and keeps up with the set. A symbol whose set is missing is drawn
 * as a box and listed in Problems (symbol-sets.js placedProblems).
 *
 *   readPlanSymbols(w) → [{ id, guid, storey, level, set, key, name, tag, at: [x, y] mm, angle (radians; the symbol's +y points along it) }]
 *   placePlanSymbol(spec) · changePlanSymbol(guid, ch) · removePlanSymbols(guids) → ops (one undo step each)
 *   nextSymbolTag(taken, abbr) → 'WC1'
 *   syncPlanSymbols(w, storey)   symbols that snapped to a wall face follow their wall (GH.3-G): same side, same distance along it; a deleted wall
 *                                leaves them where they were (plan-symbols `wall` stays set, `lostWall` says the wall is gone → Problems)
 *
 * IFC: IfcAnnotation (no body), ObjectType "Plan symbol", containment in the level, property set CadCraft_PlanSymbol: Level, Set, Key, Tag,
 * X, Y (model length units), Angle (degrees); for a symbol on a wall face also Wall (GlobalId), Side (1 | -1), Offset (along the wall, length units) and
 * Base (the wall face's own angle, degrees, when last placed: a moved or turned wall turns the symbol by the difference).
 */
import { ModelWriter, round } from './model-write.js';
import { ids, val } from './ifc-util.js';
import { readWalls } from './model-walls.js';

export const PLAN_SYMBOL_PSET = 'CadCraft_PlanSymbol';
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key) => { throw Object.assign(new Error(key), { key }); };
const num = (v, d = 0) => (Number.isFinite(Number(v)) ? Number(v) : d);
const tidy = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, n);

export function readPlanSymbols(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCANNOTATION'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, PLAN_SYMBOL_PSET);
    if (!ps || !ps.Set || !ps.Key) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const mm = w.unitMm;
    out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, level: ps.Level || '', set: String(ps.Set), key: String(ps.Key), name: val(l.Name) || '', tag: String(ps.Tag || ''),
      at: [num(ps.X) * mm, num(ps.Y) * mm], angle: (num(ps.Angle) * Math.PI) / 180, wall: String(ps.Wall || ''), side: num(ps.Side, 1) < 0 ? -1 : 1, offset: num(ps.Offset) * mm, base: (num(ps.Base) * Math.PI) / 180 });
  }
  return out;
}
export function nextSymbolTag(taken, abbr) {
  const base = tidy(abbr, 6).replace(/[^A-Za-z]/g, '') || 'S';
  for (let i = 1; ; i++) if (!taken.has(base + i)) return base + i;
}
export function placePlanSymbol(spec) {
  return op((w) => {
    const s = { angle: Math.PI / 2, ...spec };
    if (!/^[a-z][a-z0-9._-]{0,47}$/.test(String(s.set)) || !/^[a-z][a-z0-9._-]{0,47}$/.test(String(s.key))) fail('sym.err.key');
    if (!Array.isArray(s.at) || !s.at.every(Number.isFinite)) fail('sym.err.at');
    if (!s.guid) s.guid = val(w.guid());
    const storey = w.byGuid(s.level);
    if (!storey) fail('model.err.nolevel');
    const taken = new Set(readPlanSymbols(w).map((x) => x.tag));
    const tag = s.tag === '' ? '' : tidy(s.tag, 20) || nextSymbolTag(taken, s.abbr);
    const st = w.api.GetLine(w.mid, storey, false);
    const id = w.make('IFCANNOTATION', s.guid, w.ownerHistory(), w.L(tidy(s.name, 80) || s.key), null, w.L('Plan symbol'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, ...(/^IFC4X3/i.test(w.schema || '') ? ['USERDEFINED'] : []));   // i18n-ignore: IFC ObjectType
    w.noteGuid(s.guid, id);
    w.contain(id, storey);
    w.upsertPset(id, PLAN_SYMBOL_PSET, [['Level', 'IFCIDENTIFIER', s.level], ['Set', 'IFCLABEL', s.set], ['Key', 'IFCLABEL', s.key], ['Tag', 'IFCLABEL', tag],
      ['X', 'IFCLENGTHMEASURE', round(w.u(s.at[0]))], ['Y', 'IFCLENGTHMEASURE', round(w.u(s.at[1]))], ['Angle', 'IFCREAL', round((s.angle * 180) / Math.PI, 4)],
      ...(s.wall ? [['Wall', 'IFCIDENTIFIER', String(s.wall)], ['Side', 'IFCINTEGER', s.side < 0 ? -1 : 1], ['Offset', 'IFCLENGTHMEASURE', round(w.u(num(s.offset)))], ['Base', 'IFCREAL', round(((num(s.base)) * 180) / Math.PI, 4)]] : [])]);
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
export function changePlanSymbol(guid, ch) {
  return op((w) => {
    const d = readPlanSymbols(w).find((x) => x.guid === guid);
    if (!d) fail('model.err.gone');
    const rows = [];
    if (typeof ch.tag === 'string') rows.push(['Tag', 'IFCLABEL', tidy(ch.tag, 20)]);
    if (Number.isFinite(ch.angle)) rows.push(['Angle', 'IFCREAL', round((ch.angle * 180) / Math.PI, 4)]);
    if (Array.isArray(ch.at) && ch.at.every(Number.isFinite)) rows.push(['X', 'IFCLENGTHMEASURE', round(w.u(ch.at[0]))], ['Y', 'IFCLENGTHMEASURE', round(w.u(ch.at[1]))]);
    if (rows.length) w.upsertPset(d.id, PLAN_SYMBOL_PSET, rows);
    return { id: d.id, ids: [d.id] };
  });
}
export function removePlanSymbols(guids) {
  return op((w) => {
    const list = readPlanSymbols(w).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.map((x) => x.id));
    return { id: null, ids: [] };
  });
}

/** The spot on a wall face `side` of the wall at distance `s` along it (the same maths as the Electrical devices, res-elec.js). */
function onWall(wl, s, side) {
  const d = [wl.b[0] - wl.a[0], wl.b[1] - wl.a[1]], L = Math.hypot(d[0], d[1]) || 1, u = [d[0] / L, d[1] / L], n = [-u[1], u[0]];
  return { at: [wl.a[0] + u[0] * s + n[0] * side * wl.t / 2, wl.a[1] + u[1] * s + n[1] * side * wl.t / 2], base: Math.atan2(n[1] * side, n[0] * side), L };
}
/** Symbols fixed to a wall follow it: put again where the stored side and offset are now. A wall that is gone leaves the symbol where it was. Returns how many moved. */
export function syncPlanSymbols(w, storey) {
  const list = readPlanSymbols(w).filter((d) => d.storey === storey && d.wall);
  if (!list.length) return 0;
  const walls = readWalls(w, storey);
  let n = 0;
  for (const d of list) {
    const wl = walls.find((x) => x.guid === d.wall);
    if (!wl) continue;
    const g = onWall(wl, Math.min(Math.max(0, d.offset), Math.hypot(wl.b[0] - wl.a[0], wl.b[1] - wl.a[1])), d.side);
    let turn = g.base - d.base;
    turn = Math.atan2(Math.sin(turn), Math.cos(turn));
    if (Math.hypot(g.at[0] - d.at[0], g.at[1] - d.at[1]) < 0.5 && Math.abs(turn) < 1e-6) continue;
    w.upsertPset(d.id, PLAN_SYMBOL_PSET, [['X', 'IFCLENGTHMEASURE', round(w.u(g.at[0]))], ['Y', 'IFCLENGTHMEASURE', round(w.u(g.at[1]))], ['Angle', 'IFCREAL', round(((d.angle + turn) * 180) / Math.PI, 4)], ['Base', 'IFCREAL', round((g.base * 180) / Math.PI, 4)]]);
    n++;
  }
  return n;
}
/** Symbols with a wall whose wall is not in the model any more (for the Problems list). */
export function symbolsWithoutWall(w, items) {
  const out = new Set();
  const byStorey = new Map();
  for (const d of items) if (d.wall) { if (!byStorey.has(d.storey)) byStorey.set(d.storey, []); byStorey.get(d.storey).push(d); }
  for (const [storey, ds] of byStorey) {
    const have = new Set(readWalls(w, storey).map((x) => x.guid));
    for (const d of ds) if (!have.has(d.wall)) out.add(d.guid);
  }
  return out;
}
