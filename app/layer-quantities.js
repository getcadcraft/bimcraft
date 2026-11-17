/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layer-quantities.js — area and volume per layer of every wall, floor, roof and ceiling type in use (0.10 booklet row BK.24, session
 * bk-r3-types-10). No DOM: bin/test-bimcraft.mjs --eltypes runs it in Node.
 *
 * One function for anyone who needs per-layer quantities (the Schedules panel's Layers entry, finish schedules, exports, estimates):
 * call layerQuantities(); do not work the layers out again elsewhere. Every area is the NET area of the element under the project's
 * measurement method (quantities/rules.js and methods.js: `wall.side` for walls, `floor` for floors, `finish.ceiling` for ceilings; the
 * same numbers as Walls by type, Floors and Finishes). A layer's volume is that net area times the layer's own thickness.
 * A roof is measured on the slope (the file's Qto_RoofBaseQuantities NetArea); no measurement method has a rule for roofs.
 *
 *   layerInputs(w, snap, loopsFor) → { floors, ceilings, roofs, sideOf, matName }   (matName(layer) → the project's name of its material)
 *        floors / ceilings: quantity-schedules.js floorInputs / ceilingInputs with each one's `typeKey` and resolved `type` added;
 *        roofs: [{ id, storey, typeKey, type, thickness, area }]; sideOf: quantity-schedules.js grossSideReader
 *   layerQuantities(snap, { floors, ceilings, roofs, sideOf, measure, countBy, matName, t }) → rows, one per layer of each type in use:
 *        { element 'wall' | 'floor' | 'roof' | 'ceiling', typeKey, typeName, lod (null = not set), index (0 = exterior / top), layers (how
 *          many the type has), material, materialId, kind 'material' | 'cavity', function, core, thickness (mm), count (elements), area
 *          (net, mm²), volume (mm³), ids: [element ids] }
 *        An element with no type (a floor, roof or ceiling from before 0.10) is one row: one layer of its own thickness, typeKey ''.
 *   materialTotals(rows) → [{ material, materialId, area, volume, rows }]   the same rows summed by material (cavities left out)
 *   layerSchedule(rows, { fmtLen, fmtArea, t, unit, metric, measure }) → { title, head, rows, nums, ids, total, note, rule }   the shape of
 *        model-schedule.js's schedules; nums = [thickness, count, area, volume] per row
 *   fmtVolume(mm3, metric) → '1.234 m³' | '43.58 ft³'
 */
import { wallType, typeName } from './model-walls.js';
import { wallSideOf } from './model-schedule.js';
import { outlineArea } from './quantities/rules.js';
import { floorInputs, ceilingInputs, grossSideReader, readQtoAreas } from './quantity-schedules.js';
import { readDrawnFloors } from './model-floors.js';
import { elementType } from './element-types.js';
import { readAssemblies } from './wall-assemblies.js';
import { readMaterials, STARTER_MATERIALS, EXTRA_MATERIALS } from './project-materials.js';

export const fmtVolume = (mm3, metric = true) => (metric ? (mm3 / 1e9).toFixed(3) + ' m³' : (mm3 / 28316846.592).toFixed(2) + ' ft³');

export function layerInputs(w, snap, loopsFor) {
  const own = { floor: readAssemblies(w, 'floor'), roof: readAssemblies(w, 'roof'), ceiling: readAssemblies(w, 'ceiling') };
  const keyOf = new Map();
  for (const f of snap.derived?.floors || []) keyOf.set(f.id, f.typeKey || '');
  for (const f of readDrawnFloors(w)) keyOf.set(f.id, f.typeKey || '');
  for (const c of snap.derived?.ceilings || []) keyOf.set(c.id, c.typeKey || '');
  const typed = (kind, x, more = {}) => { const typeKey = keyOf.get(x.id) || x.typeKey || ''; return { ...x, ...more, typeKey, type: typeKey ? elementType(kind, typeKey, own[kind]) : null }; };
  const thickOf = new Map((snap.derived?.ceilings || []).map((c) => [c.id, c.thickness]));
  let mats = [];
  try { mats = readMaterials(w); } catch (e) { mats = STARTER_MATERIALS; }
  const names = new Map([...STARTER_MATERIALS, ...EXTRA_MATERIALS, ...mats].map((m) => [m.id, m.name]));
  const matName = (l) => names.get(l?.materialId) || null;
  const roofs = [];
  for (const r of snap.derived?.roofs || []) {
    let q = null;
    try { q = readQtoAreas(w, r.id, 'Qto_RoofBaseQuantities'); } catch (e) { q = null; }
    const area = q ? (q.NetArea > 0 ? q.NetArea : q.GrossArea || 0) : 0;
    roofs.push(typed('roof', { id: r.id, storey: r.storey, typeKey: r.typeKey || '', thickness: r.thickness, area }));
  }
  return {
    floors: floorInputs(w, snap, loopsFor).map((f) => typed('floor', f)),
    ceilings: ceilingInputs(w, snap, loopsFor).map((c) => typed('ceiling', c, { thickness: thickOf.get(c.id) || 0 })),
    roofs, sideOf: grossSideReader(w), matName,
  };
}

export function layerQuantities(snap, { floors = [], ceilings = [], roofs = [], sideOf = null, measure = null, countBy = 'reported', matName = null, t = (k) => k } = {}) {
  const R = (q) => measure?.rules?.[q] || null;
  const groups = new Map();
  const add = (element, typeKey, type, name, area, id, single) => {
    const k = element + '|' + (typeKey || '~' + name + '|' + (single ? Math.round(single.t * 100) / 100 : ''));
    if (!groups.has(k)) groups.set(k, { element, typeKey: typeKey || '', typeName: name, lod: type?.lod ?? null, layers: type ? type.layers : [single], n: 0, area: 0, ids: [] });
    const g = groups.get(k);
    g.n++; g.area += area; g.ids.push(id);
  };
  // walls: as Walls by type counts them (a wall reported as another class is left out unless the working style counts what was drawn)
  const away = (x, re) => countBy !== 'drawn' && snap.reported?.get(x.id) && !re.test(snap.reported.get(x.id).cls);
  const openings = (snap.openings || []).filter((o) => !away(o, /^Ifc(Door|Window)/));
  for (const w of (snap.walls || []).filter((x) => !away(x, /^IfcWall/))) {
    const ty = w.assembly || wallType(w.typeKey);
    if (!ty) continue;
    add('wall', w.typeKey, ty, typeName(ty), wallSideOf(w, openings, sideOf, measure).net, w.id);
  }
  const flat = (element, list, rule, wordOf) => {
    for (const x of list) {
      const area = element === 'roof' ? x.area : outlineArea(x.outer, x.holes, R(rule)).net;
      if (x.type) add(element, x.typeKey, x.type, x.type.name, area, x.id);
      else add(element, '', null, wordOf(x), area, x.id, { mat: wordOf(x), t: x.thickness || 0, function: 'structure', core: true, kind: 'material', materialId: null });
    }
  };
  flat('floor', floors, 'floor', (f) => t('qty.floor.' + (f.kind === 'concrete' ? 'concrete' : 'wood')));
  flat('ceiling', ceilings, 'finish.ceiling', () => t('model.ceiling'));
  flat('roof', roofs, null, () => t('model.roof'));
  const ORDER = ['wall', 'floor', 'roof', 'ceiling'];
  const out = [];
  for (const g of [...groups.values()].sort((a, b) => ORDER.indexOf(a.element) - ORDER.indexOf(b.element) || a.typeName.localeCompare(b.typeName))) {
    g.layers.forEach((l, index) => out.push({
      element: g.element, typeKey: g.typeKey, typeName: g.typeName, lod: g.lod, index, layers: g.layers.length,
      material: l.kind === 'cavity' ? t('materials.cavity') : (matName && matName(l)) || l.mat, materialId: l.materialId ?? null, kind: l.kind === 'cavity' ? 'cavity' : 'material',
      function: l.function, core: l.core === true, thickness: l.t, count: g.n, area: g.area, volume: g.area * l.t, ids: g.ids.slice(),
    }));
  }
  return out;
}

export function materialTotals(rows) {
  const by = new Map();
  for (const r of rows) {
    if (r.kind === 'cavity') continue;
    const k = r.materialId || r.material;
    if (!by.has(k)) by.set(k, { material: r.material, materialId: r.materialId, area: 0, volume: 0, rows: 0 });
    const g = by.get(k);
    g.area += r.area; g.volume += r.volume; g.rows++;
  }
  return [...by.values()].sort((a, b) => a.material.localeCompare(b.material));
}

export function layerSchedule(rows, { fmtLen, fmtArea, t, unit = '', metric = true, measure = null }) {
  const H = (s) => (unit ? s + ' (' + unit + ')' : s);
  const solid = rows.filter((r) => r.kind !== 'cavity');
  return {
    title: t('layers.sch.title'),
    head: [t('layers.sch.element'), t('layers.sch.type'), t('typeswap.sch.lod'), t('layers.sch.layer'), t('layers.sch.material'), t('layers.sch.function'), H(t('model.prop.thickness')), t('layers.sch.count'), t('model.sch.netarea'), t('layers.sch.volume')],
    rows: rows.map((r) => [t('layers.el.' + r.element), r.typeName, r.lod ? 'LOD ' + r.lod : '', r.index + 1 + ' / ' + r.layers, r.material, t('assembly.function.' + r.function), fmtLen(r.thickness), String(r.count), fmtArea(r.area), fmtVolume(r.volume, metric)]),   // i18n-ignore: "2 / 4", "LOD 300"
    nums: rows.map((r) => [r.thickness, r.count, r.area, r.volume]),
    ids: rows.map((r) => r.ids),
    total: [t('model.sch.total'), '', '', '', '', '', '', '', '', fmtVolume(solid.reduce((s, r) => s + r.volume, 0), metric)],
    note: t('layers.sch.note') + (measure ? ' ' + measure.line : ''), rule: 'layers',
  };
}
