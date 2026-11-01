/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engineering.js — the Plant panel's engineering checks (0.8 Track CH, CH.9 / CH.11 / CH.12 / CH.16 / CH.17; rule 41): the vessel, pipe stress, relief, consequence and hazardous-area
 * calculators of lib/process in the Plant panel, with what only BimCraft can do with their results:
 *   - a vessel calculator result → "Add the vessel to the equipment table" (a vertical or horizontal vessel of the Plant equipment, sized from the calculator);
 *   - the pipe stress calculator → "Use a pipe run of the model" (the run's points and size fill the input; B31.3 screening of the run as routed);
 *   - the consequence and area calculators → "Put the zones in the model": each zone becomes a closed solid (an IfcBuildingElementProxy) in the open model, one undo step;
 *     zone extents in the model's units come from the calculators' metres.
 * Every result says it is not engineer-reviewed (owner 2026-10-29; O7). Pieces: zoneEquip (a zone as placeEquipment's `equip`), pickRun (a model run → pipe stress input),
 * vesselItem (calculator result → table row), mountEngineering (the DOM).
 */
import { mountCalc } from '../../../process/calc-ui.js';
import * as CALC from '../../../process/calc.js';
import { volumeMesh, volumesOf } from '../../../process/safety/zones.js';

export const IDS = ['vessel', 'pipestress', 'relief', 'consequence', 'area', 'bell', 'vessel2', 'pumptrip', 'pipestress2', 'relief2', 'blast', 'heavygas', 'packs', 'fittingk', 'compressor', 'npsh', 'network'];   // chem-draw_PART_4 added the round-4 engines (lib/process/calc4.js)
const registry = { list: () => CALC.list().filter((c) => IDS.includes(c.id)), get: CALC.get, run: CALC.run, toCsv: CALC.toCsv, pickerOf: CALC.pickerOf };

/** English for the calculator panel's own words, used when the add-on's language file has none (the P&ID add-on's file has them all). */
export const WORDS = {
  'calc.option': 'Choose from the list', 'calc.option.pick': 'Choose a fitting from the draft table…',
  'calc.pick': 'Calculator', 'calc.input': 'Input (JSON)', 'calc.lede': 'Pick a calculator, edit the sample input, and run it. A calculation aid, not an engineering approval: typed constants are marked for review, and these five are not engineer-reviewed.',
  'calc.run': 'Run', 'calc.reset': 'Reset input', 'calc.csv': 'Results (CSV)', 'calc.running': 'Running…', 'calc.badjson': 'The input is not valid JSON: {why}', 'calc.clean': 'No problems reported.',
  'calc.level.error': 'Error', 'calc.level.warning': 'Warning', 'calc.level.info': 'Note', 'calc.group.equipment': 'Equipment, piping and relief', 'calc.group.safety': 'Process safety and hazardous areas',
  'calc.site': 'Site plan (GeoJSON)', 'calc.sitedxf': 'Site plan (DXF)', 'calc.takeoff': 'TakeoffCraft pack', 'calc.drawing': 'Sources from the drawing',
  'eng.title': 'Engineering checks', 'eng.intro': 'Pressure vessel, pipe stress, relief, consequence zones and hazardous areas. Screening calculators, not engineer-reviewed.',
  'eng.add': 'Add the vessel to the equipment table', 'eng.run': 'Use a pipe run of the model', 'eng.zones': 'Put the zones in the model', 'eng.norun': 'No pipe run with two or more points in the model.',
  'eng.nozones': 'Run a consequence or area calculation first: there are no zones to place.', 'eng.nowrite': 'This BimCraft cannot write into the model yet.', 'eng.placed': 'Put {n} zone solids in the model (one undo step). Not engineer-reviewed.',
  'eng.added': 'Added {tag} to the equipment table.', 'eng.body': 'Add the vessel body to the equipment table', 'eng.nobody': 'Give the vessel body a diameter and a length.', 'eng.filled': 'Filled the input from the run {tag}.', 'eng.novessel': 'Run the vessel calculator first.',
};
export const wordsOf = (t) => (k, v) => { const r = t(k, v); if (r && r !== k) return r; return (WORDS[k] || k).replace(/\{(\w+)\}/g, (m, a) => (v && v[a] !== undefined ? v[a] : m)); };

/** A zone volume (metres) as the `equip` placeEquipment takes: a closed solid in millimetres at the site's own coordinates, no nozzles. */
export function zoneEquip(vol) {
  const m = volumeMesh(vol, { sides: 24 });
  return { type: 'zone', params: {}, ifc: { cls: 'IFCBUILDINGELEMENTPROXY', predefined: 'USERDEFINED' }, mesh: { verts: m.verts.map(([x, y, z]) => [x * 1000, y * 1000, z * 1000]), tris: m.tris }, nozzles: [], capacityM3: null, bbox: null };
}
/** A pipe run of the model ({ points mm, size, tag }) → the pipe stress input fields to merge: points (3-D, mm) and size; the rest stays the person's. */
export function pickRun(runs) {
  const r = (runs || []).filter((x) => x && Array.isArray(x.points) && x.points.length >= 2 && x.kind !== 'duct').sort((a, b) => b.points.length - a.points.length)[0];
  if (!r) return null;
  const pts = r.points.map((p) => [Number(p[0]) || 0, Number(p[1]) || 0, Number(p[2]) || 0]);
  const len = pts.reduce((s, p, i) => (i ? s + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1], p[2] - pts[i - 1][2]) : 0), 0);
  return { tag: r.tag || r.guid || 'run', merge: { points: pts, size: String(r.size || '4'), supports: [{ s: 0, type: 'anchor' }, { s: len, type: 'anchor' }] } };
}
/** The vessel calculator's result → a row for the equipment table: { type, params } from its `plant.*` lines. */
export function vesselItem(result, tag = 'V-101') {
  if (!result || !Array.isArray(result.lines)) return null;
  const get = (k) => result.lines.find((l) => l.k === k)?.v;
  const type = get('plant.type'); if (type !== 'vessel-v' && type !== 'vessel-h') return null;
  const params = {}; for (const k of ['d', 'h', 'len', 'leg']) { const v = get('plant.params.' + k); if (v !== undefined) params[k] = Number(v); }
  return { type, tag, params };
}

/** The vessel body calculator's input → a row for the equipment table: a vertical vessel whose outline is the calculator's (type 'vessel-profile'). */
export function vessel2Item(input, tag = 'V-102') {
  const b = input && input.body; if (!b || !(Number(b.D) > 0) || !(Number(b.Ltt) > 0)) return null;
  const head = b.head && /hemi/.test(b.head.type) ? 'hemi' : b.head && /tori/.test(b.head.type) ? 'tori' : 'ellip', params = { d: Number(b.D), h: Number(b.Ltt), head };
  if (head === 'tori') { params.crownR = Number(b.head.crownR) || 0; params.knuckleR = Number(b.head.knuckleR) || 0; }
  return { type: 'vessel-profile', tag, params };
}

/** @param ctx { api, t, runs() → model pipe runs, addEquipment(item), writeZones(volumes) → count, say(text) } */
export function mountEngineering(el, ctx) {
  const t = wordsOf(ctx.t), d = el.ownerDocument;
  const body = d.createElement('div'); body.setAttribute('data-plant-engineering', '');
  const actions = [
    { id: 'vessel', label: t('eng.add'), show: (id, last) => id === 'vessel' && !!last, run: (last) => { const it = vesselItem(last); if (!it) throw new Error(t('eng.novessel')); ctx.addEquipment(it); return { say: t('eng.added', { tag: it.tag }) }; } },
    { id: 'body', label: t('eng.body'), show: (id) => id === 'vessel2', run: (last, cur) => { const it = vessel2Item(cur); if (!it) throw new Error(t('eng.nobody')); ctx.addEquipment(it); return { say: t('eng.added', { tag: it.tag }) }; } },
    { id: 'run', label: t('eng.run'), show: (id) => id === 'pipestress', run: () => { const p = pickRun(ctx.runs()); if (!p) throw new Error(t('eng.norun')); return { merge: p.merge, say: t('eng.filled', { tag: p.tag }) }; } },
    { id: 'zones', label: t('eng.zones'), show: (id, last) => (id === 'consequence' || id === 'area') && !!(last && last.zones && last.zones.length), run: (last) => {
      const vols = volumesOf(last && last.zones); if (!vols.length) throw new Error(t('eng.nozones'));
      const n = ctx.writeZones(vols); return { say: n === null ? t('eng.nowrite') : t('eng.placed', { n }) };
    } },
  ];
  const panel = mountCalc(body, { t, calc: registry, publish: ctx.publish || (() => {}), actions });
  el.append(body);
  return panel;
}
