/* SPDX-License-Identifier: Apache-2.0 */
/**
 * quantity-schedules.js — floors, finishes and the wall types' takeoff data as schedules (booklet rows BK.84, BK.11, BK.40;
 * session bk-quantities-10). No DOM: bin/test-bimcraft.mjs --quantities runs it in Node. Every area is measured by the one
 * stated rule (quantities/rules.js, shared with the IFC Qto values and TakeoffCraft) and shown as gross, deductions and net;
 * each schedule carries the rule as its `note`. The shape of a schedule is model-schedule.js's ({ head, rows, nums, total, note }).
 *
 *   floorInputs(w, snap, loopsFor)   → [{ id, storey, kind, source 'room' | 'building' | 'drawn', thickness, outer, holes: [mm²] }]
 *   ceilingInputs(w, snap, loopsFor) → [{ id, storey, outer, holes }]
 *   grossSideReader(w)               → sideOf(wall): the IFC GrossSideArea of a shaped wall (mm²), null for a plain one
 *   readQtoAreas(w, id, name)        → { quantity name: mm² } of the element's quantity set (areas only), or null
 *   quantitySchedules(snap, { floors, ceilings, sideOf, matName, fmtLen, fmtArea, t, unit, countBy }) → { floors, finishes, walltakeoff }
 *   wallTypeAmounts(snap, { sideOf, countBy, measure }) → [{ key, name, data, n, length, gross, deductions, net, amount, masonry }]   one row per wall type in use
 *
 * 0.10 BK.42 (bk-measure-10): the project's measurement method.
 *   measureCtx(snap, method, t) → { method, rules: { quantity: rule in mm² }, cuts, note(quantity), line, masonryNote } | null for the
 *     CadCraft default (null = everything measures as before BK.42). Hand it on as `measure` to schedules() and quantitySchedules().
 *   Bricks or blocks and mortar (quantities/masonry.js) are counted for every wall type whose takeoff data has a unit length and
 *   height, under any method: `masonry` on a wallTypeAmounts row, three more columns in the takeoff schedule.
 */
import { loopAt, area as loopArea } from './model-rooms.js';
import { readDrawnFloors } from './model-floors.js';
import { wallType, typeName } from './model-walls.js';
import { val } from './ifc-util.js';
import { wallSideOf } from './model-schedule.js';
import { outlineArea, finishFaces, addMeasures } from './quantities/rules.js';
import { rateAmount, unitText, mortarText, rateText, amountText } from './quantities/typedata.js';
import { deductionsOf } from './slab-openings.js';   // 0.10 (bk-tools-a-10): what shafts and vertical openings take out of a floor or a ceiling
import { junctionCuts } from './quantities/junctions.js';
import { masonryOf } from './quantities/masonry.js';
import { isDefault, methodRule, methodRuleText, methodLine, methodMasonry, methodMasonryText, revealsOf, QUANTITIES } from './quantities/methods.js';
import { MM } from './quantity-method.js';

/** The words of a method through the app's language file: methods.js TEXT keys live under 'qty.m.'; the default's rules under 'qty.rule.'. */
export const methodWords = (t) => (key, params) => (key.startsWith('default.') ? t('qty.rule.' + key.slice(8)) : t('qty.m.' + key, params));
/** Where the walls of each level meet (quantities/junctions.js), for the methods that do not measure every wall on its full centre line. */
export function wallCuts(walls) {
  const by = new Map(), out = new Map();
  for (const w of walls || []) { if (!by.has(w.storey)) by.set(w.storey, []); by.get(w.storey).push({ id: w.id, a: w.a, b: w.b, t: w.t, height: w.height, curved: !!w.bulge }); }
  for (const list of by.values()) for (const [id, c] of junctionCuts(list)) out.set(id, c);
  return out;
}
export function measureCtx(snap, method, t) {
  if (isDefault(method)) return null;
  const tr = methodWords(t);
  const rules = Object.fromEntries(QUANTITIES.map((q) => [q, methodRule(method, q, MM)]));
  const needCuts = rules['wall.side'].junction !== 'centre' || rules['finish.wall'].junction !== 'centre';
  const line = methodLine(method, tr);
  return { method, rules, cuts: needCuts ? wallCuts(snap.walls) : new Map(), line, note: (q) => line + ' ' + methodRuleText(method, q, tr), masonry: methodMasonry(method), masonryNote: methodMasonryText(method, tr) };
}

const absArea = (poly) => Math.abs(loopArea(poly));

export function floorInputs(w, snap, loopsFor) {
  const out = [];
  for (const f of snap.derived?.floors || []) {
    const L = loopsFor(f.storey);
    const loop = L && loopAt(f.mode === 'building' ? L.outlines : L.rooms, f.seed);
    if (!loop) continue;
    out.push({ id: f.id, storey: f.storey, kind: f.kind, source: f.mode === 'building' ? 'building' : 'room', thickness: f.thickness, outer: absArea(loop.poly), holes: [...(loop.holes || []).map(absArea), ...deductionsOf(w, f.id)] });
  }
  for (const f of readDrawnFloors(w)) out.push({ id: f.id, storey: f.storey, kind: f.kind, source: 'drawn', use: f.use, thickness: f.thickness, outer: absArea(f.points), holes: [...(f.openings || []).map((o) => absArea(o.points)), ...deductionsOf(w, f.id)] });
  return out;
}
export function ceilingInputs(w, snap, loopsFor) {
  const out = [];
  for (const c of snap.derived?.ceilings || []) {
    const L = loopsFor(c.storey);
    const loop = L && loopAt(c.mode === 'building' ? L.outlines : L.rooms, c.seed);
    if (loop) out.push({ id: c.id, storey: c.storey, outer: absArea(loop.poly), holes: [...(loop.holes || []).map(absArea), ...deductionsOf(w, c.id)] });
  }
  return out;
}

/** The areas of an element's quantity set as the file holds them (IFC areas are in m²) → mm². */
export function readQtoAreas(w, id, name) {
  const d = w.defNamed(id, name);
  if (!d) return null;
  const out = {};
  for (const h of d.line.Quantities || []) {
    const q = w.api.GetLine(w.mid, h.value, false);
    if (q?.AreaValue === undefined || q.AreaValue === null) continue;
    out[val(q.Name)] = Number(val(q.AreaValue)) * 1e6;
  }
  return out;
}
/** A shaped wall's face is not length × height: its gross side area is the one its body gave the file. */
export function grossSideReader(w) {
  return (wall) => {
    if (!wall.shape) return null;
    let q = null;
    try { q = readQtoAreas(w, wall.id, 'Qto_WallBaseQuantities'); } catch (e) { q = null; }
    return q && q.GrossSideArea > 0 ? q.GrossSideArea : null;
  };
}

const keep = (snap, countBy) => {
  const away = (x, re) => countBy !== 'drawn' && snap.reported?.get(x.id) && !re.test(snap.reported.get(x.id).cls);
  return { walls: snap.walls.filter((w) => !away(w, /^IfcWall/)), openings: snap.openings.filter((o) => !away(o, /^Ifc(Door|Window)/)) };
};
const typeOf = (w) => w.assembly || wallType(w.typeKey);
const nameOf = (w) => { const ty = typeOf(w); return ty ? typeName(ty) : (w.typeName || w.typeKey || ''); };

export function wallTypeAmounts(snap, { sideOf = null, countBy = 'reported', measure = null } = {}) {
  const { walls, openings } = keep(snap, countBy);
  const by = new Map();
  for (const w of walls) {
    if (!by.has(w.typeKey)) by.set(w.typeKey, { key: w.typeKey, name: nameOf(w), data: typeOf(w)?.takeoff || null, layers: typeOf(w)?.layers || [], n: 0, length: 0, sides: [] });
    const g = by.get(w.typeKey);
    g.n++; g.length += w.len; g.sides.push(wallSideOf(w, openings, sideOf, measure));
  }
  return [...by.values()].map((g) => {
    const m = addMeasures(g.sides);
    // BK.42: bricks or blocks and mortar from the unit size and joint, on the NET area of the wall face (quantities/masonry.js)
    const masonry = g.data ? masonryOf({ data: g.data, layers: g.layers, netArea: m.net, waste: measure?.masonry?.wastePct != null ? { pct: measure.masonry.wastePct } : null, allowance: measure?.masonry?.allowancePct || 0 }) : null;
    return { key: g.key, name: g.name, data: g.data, n: g.n, length: g.length, gross: m.gross, deductions: m.deductions, net: m.net, masonry,
      amount: g.data?.rate ? rateAmount(g.data.rate, { netArea: m.net, length: g.length, count: g.n, units: masonry?.unitsOrder || 0, mortar: masonry?.mortar || 0 }) : null };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export function quantitySchedules(snap, { floors = [], ceilings = [], sideOf = null, matName = null, fmtLen, fmtArea, t, unit = '', countBy = 'reported', measure = null, metric = true }) {
  const R = (q) => measure?.rules?.[q] || null;
  const noteOf = (q) => (measure ? measure.note(q) : t('qty.rule.' + q));
  const H = (s) => (unit ? s + ' (' + unit + ')' : s);
  const levelName = (id) => snap.levels.find((l) => l.id === id)?.name || '';
  const levelIx = (id) => snap.levels.findIndex((l) => l.id === id);
  const G = t('model.sch.grossarea'), D = t('model.sch.deductions'), N = t('model.sch.netarea'), TOTAL = t('model.sch.total');
  const { walls, openings } = keep(snap, countBy);

  // ---- floors: one row a floor
  const fl = floors.map((f) => ({ f, m: outlineArea(f.outer, f.holes, R('floor')) })).sort((a, b) => levelIx(a.f.storey) - levelIx(b.f.storey) || a.f.id - b.f.id);
  const flSum = addMeasures(fl.map((x) => x.m));
  const floorSch = {
    title: t('qty.sch.floors'),
    head: [t('model.level'), t('qty.sch.floor'), H(t('model.prop.thickness')), G, D, N],
    rows: fl.map(({ f, m }) => [levelName(f.storey), t('qty.floor.' + (f.kind === 'concrete' ? 'concrete' : 'wood')) + ' (' + t('qty.floor.src.' + f.source) + ')', fmtLen(f.thickness), fmtArea(m.gross), fmtArea(m.deductions), fmtArea(m.net)]),
    nums: fl.map(({ m }) => [m.gross, m.deductions, m.net]),
    ids: fl.map(({ f }) => f.id),
    total: [TOTAL, '', '', fmtArea(flSum.gross), fmtArea(flSum.deductions), fmtArea(flSum.net)],
    note: noteOf('floor'), rule: 'floor',
  };

  // ---- finishes: each finish layer of a wall type covers one face of each wall of that type; ceilings by their outline
  const fin = new Map();
  const REV = !!R('finish.wall')?.reveals.measured;
  for (const w of walls) {
    const ty = typeOf(w);
    if (!ty) continue;
    const side = wallSideOf(w, openings, sideOf, measure, 'finish.wall');
    // BK.42: the returns of the finish into the openings it is deducted for, when the method measures them (depth: half the wall)
    const rv = REV ? revealsOf({ openings: openings.filter((o) => o.wall === w.id), depth: w.t / 2, rule: R('finish.wall') }) : null;
    for (const face of finishFaces(ty.layers)) {
      const name = (matName && matName(ty.layers[face.index])) || face.mat;
      const k = name + '|' + face.side;
      if (!fin.has(k)) fin.set(k, { name, on: t('qty.fin.on.' + face.side), n: 0, sides: [], ids: new Set(), ra: 0, rl: 0 });
      const g = fin.get(k);
      g.n++; g.sides.push(side); g.ids.add(w.id);
      if (rv) { g.ra += rv.area; g.rl += rv.length; }
    }
  }
  const finRows = [...fin.values()].sort((a, b) => a.name.localeCompare(b.name) || a.on.localeCompare(b.on)).map((g) => ({ ...g, m: addMeasures(g.sides), ids: [...g.ids] }));
  if (ceilings.length) finRows.push({ name: t('model.ceiling'), on: t('qty.fin.on.ceiling'), n: ceilings.length, m: addMeasures(ceilings.map((c) => outlineArea(c.outer, c.holes, R('finish.ceiling')))), ids: ceilings.map((c) => c.id), ra: 0, rl: 0 });
  const finSum = addMeasures(finRows.map((r) => r.m));
  const finSch = {
    title: t('qty.sch.finishes'),
    head: [t('qty.sch.finish'), t('qty.sch.on'), t('qty.sch.faces'), G, D, N, ...(REV ? [t('qty.sch.reveals.area'), H(t('qty.sch.reveals.length'))] : [])],
    rows: finRows.map((r) => [r.name, r.on, String(r.n), fmtArea(r.m.gross), fmtArea(r.m.deductions), fmtArea(r.m.net), ...(REV ? [fmtArea(r.ra), fmtLen(r.rl)] : [])]),
    nums: finRows.map((r) => [r.n, r.m.gross, r.m.deductions, r.m.net, ...(REV ? [r.ra, r.rl] : [])]),
    ids: finRows.map((r) => r.ids),
    total: [TOTAL, '', String(finRows.reduce((s, r) => s + r.n, 0)), fmtArea(finSum.gross), fmtArea(finSum.deductions), fmtArea(finSum.net), ...(REV ? [fmtArea(finRows.reduce((s, r) => s + r.ra, 0)), fmtLen(finRows.reduce((s, r) => s + r.rl, 0))] : [])],
    note: measure ? measure.note('finish.wall') + ' ' + t('qty.rule.finish.ceiling.lead') + ' ' + methodRuleText(measure.method, 'finish.ceiling', methodWords(t))
      : t('qty.rule.finish.wall') + ' ' + t('qty.rule.finish.ceiling.lead') + ' ' + t('qty.rule.finish.ceiling'), rule: 'finish.wall',
  };

  const lenU = (mm) => fmtLen(mm) + (unit ? ' ' + unit : '');   // inside a text cell a length says its unit (the column header cannot)
  // ---- the wall types' takeoff data (BK.40): what was entered once on the type, and its rate times the measured quantity
  const ta = wallTypeAmounts(snap, { sideOf, countBy, measure });
  // BK.42: units per area of one leaf, the units to order and the mortar volume, for the types whose unit has a length and a height
  const whole = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const fmtVol = (mm3) => (metric ? (mm3 / 1e9).toFixed(3) + ' m³' : (mm3 / 28316846.592).toFixed(2) + ' ft³');
  const per = (ms) => (metric ? ms.perM2 : ms.perFt2).toFixed(2);
  const MS = (r) => (r.masonry ? [per(r.masonry), whole(r.masonry.unitsOrder) + (r.masonry.wastePct > 0 ? ' ' + t('qty.ms.withwaste', { pct: String(Math.round(r.masonry.wastePct * 100) / 100) }) : ''), r.masonry.mortar === null ? '' : fmtVol(r.masonry.mortar)] : ['', '', '']);
  const anyMs = ta.filter((r) => r.masonry);
  const curs = [...new Set(ta.filter((r) => r.amount !== null).map((r) => r.data.rate.currency))];
  const takeoffSch = {
    title: t('qty.sch.walltakeoff'),
    head: [t('model.wall.type'), t('qty.to.unit'), t('qty.to.mortar'), t('model.sch.count.h'), H(t('model.prop.length')), N, t('qty.to.rate'), t('qty.to.amount'), t(metric ? 'qty.ms.perm2' : 'qty.ms.perft2'), t('qty.ms.units'), t('qty.ms.mortar')],
    rows: ta.map((r) => [r.name, unitText(r.data, lenU), mortarText(r.data, lenU), String(r.n), fmtLen(r.length), fmtArea(r.net), rateText(r.data?.rate), r.amount === null ? '' : amountText(r.amount, r.data.rate.currency), ...MS(r)]),
    nums: ta.map((r) => [r.n, r.length, r.net, r.amount, r.masonry ? r.masonry.unitsOrder : null, r.masonry ? r.masonry.mortar : null]),
    masonry: ta.map((r) => r.masonry),
    keys: ta.map((r) => r.key),
    total: [TOTAL, '', '', String(ta.reduce((s, r) => s + r.n, 0)), fmtLen(ta.reduce((s, r) => s + r.length, 0)), fmtArea(ta.reduce((s, r) => s + r.net, 0)), '',
      curs.length === 1 ? amountText(Math.round(ta.reduce((s, r) => s + (r.amount || 0), 0) * 100) / 100, curs[0]) : (curs.length > 1 ? t('qty.to.mixed') : ''),
      '', anyMs.length ? whole(anyMs.reduce((s, r) => s + r.masonry.unitsOrder, 0)) : '', anyMs.some((r) => r.masonry.mortar !== null) ? fmtVol(anyMs.reduce((s, r) => s + (r.masonry.mortar || 0), 0)) : ''],
    note: t('qty.to.note') + ' ' + t('qty.ms.note') + (anyMs.some((r) => r.masonry.assumedLeaves) ? ' ' + t('qty.ms.assumed') : '') + ' ' + (measure ? measure.masonryNote : t('qty.m.masonry.count')) + ' ' + noteOf('wall.side'), rule: 'wall.side',
  };
  return { floors: floorSch, finishes: finSch, walltakeoff: takeoffSch };
}
