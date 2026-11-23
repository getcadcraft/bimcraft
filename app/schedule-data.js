/* SPDX-License-Identifier: Apache-2.0 */
/**
 * schedule-data.js — every model schedule of an open file in one call, without the page (0.10 BK.61, BK.39; session
 * bk-r3-schedules-10). No DOM: the assistant tools (schedule-agents.js) use it in the headless core, and
 * bin/test-bimcraft.mjs --schedules runs it in Node. It is wiring only: each schedule is made by the module that owns it
 * (model-schedule.js, quantity-schedules.js, finishes-model.js, classify-schedule.js), measured by the project's method.
 * In the window the Schedules panel's own list is used instead (model-ui.js scheduleData through extend()), which also has what
 * other extensions add (the layers and lumber lists).
 *
 *   modelSchedules(ed, { units, t, countBy }) → { all: { key: schedule }, snap, w, loopsFor }
 *   withTables(all, snap) → all, each schedule that is rows of elements gaining `table` (schedule-layouts.js describeSchedule)
 *   withSetups(all, setups, { w, snap, units, t, project }) → all + one entry 'setup:<id>' per saved set-up, laid out
 *   underStandard(all, { units, t, project }) → all, the plain schedules laid out by the office standard when one is set
 */
import { ModelWriter } from './model-write.js';
import { ids as idsOf, val } from './ifc-util.js';
import { snapshotModel, loopsOf } from './model-ops.js';
import { fmtLen, fmtArea, unitMark, isMetric } from './model-units.js';
import { schedules } from './model-schedule.js';
import { quantitySchedules, floorInputs, ceilingInputs, grossSideReader, measureCtx } from './quantity-schedules.js';
import { readMethodSetting } from './quantity-method.js';
import { readMaterials } from './project-materials.js';
import { readProjectClassification, effectiveCodes } from './classify-model.js';
import { addClassificationColumns } from './classify-schedule.js';
import { readFinishes, finishSchedules } from './finishes-model.js';
import { readWallFinishes, finishSchedules as wallFinishSchedules } from './finishes/wall-finishes.js';   // 0.10 BK.130
import { layerInputs, layerQuantities, layerSchedule } from './layer-quantities.js';
import { describeSchedule, withProps, layOut, flat, officeStandard, fmtVol } from './schedule-layouts.js';

export const FINISH_KEYS = ['roomfinishes', 'wallfinishes', 'zonefinishes', 'finishtotals'];
/** 0.11 BK.130 (bim-core-11): the wall-face finish schedules (only present when the file has wall finishes). */
export const WALLFACE_KEYS = ['wfaces', 'wfacetotals', 'wfacerooms'];

/** The four finish schedules of an open model (finishes-model.js), in the units and by the method given. */
export function finishSet(w, snap, loopsFor, { units, t, measure = null }) {
  const doc = readFinishes(w);
  const r = finishSchedules(doc, snap, loopsFor, { fmtLen: (mm) => fmtLen(mm, units), fmtArea: (mm2) => fmtArea(mm2, units), fmtVol: (mm3) => fmtVol(mm3, units), t, unit: unitMark(units), measure });
  const out = {};
  for (const k of FINISH_KEYS) out[k] = r[k];
  Object.defineProperty(out, 'data', { value: r.data, enumerable: false });
  Object.defineProperty(out, 'doc', { value: doc, enumerable: false });
  return out;
}

export function modelSchedules(ed, { units = 'mm', t, countBy = 'reported' } = {}) {
  const snap = snapshotModel(ed), w = new ModelWriter(ed.W, ed.api, ed.mid);
  const loops = new Map();
  const loopsFor = (id) => { if (!loops.has(id)) { let L = null; try { L = loopsOf(ed, id); } catch (e) { L = null; } loops.set(id, L); } return loops.get(id); };
  const roomLoops = new Map();
  for (const l of snap.levels) if ((snap.derived?.spaces || []).some((x) => x.storey === l.id)) { const L = loopsFor(l.id); if (L) roomLoops.set(l.id, L); }
  const measure = measureCtx(snap, readMethodSetting(w).method, t);
  let mats = [];
  try { mats = readMaterials(w); } catch (e) { mats = []; }
  const byId = new Map(mats.map((m) => [m.id, m.name]));
  const opts = { fmtLen: (mm) => fmtLen(mm, units), fmtArea: (mm2) => fmtArea(mm2, units), t, unit: unitMark(units), countBy, sideOf: grossSideReader(w), measure, metric: isMetric(units) };
  const all = schedules(snap, roomLoops, opts);
  for (const k of ['doors', 'windows', 'walls', 'rooms']) all[k].title = t('model.sch.' + k);
  Object.assign(all, quantitySchedules(snap, { ...opts, floors: floorInputs(w, snap, loopsFor), ceilings: ceilingInputs(w, snap, loopsFor), matName: (l) => byId.get(l?.materialId) || null }));
  Object.assign(all, finishSet(w, snap, loopsFor, { units, t, measure }));
  // 0.10 BK.130 (bim-finishes-10, landed by bim-core-10): the wall-face finishes (zones, totals by finish, by room), only when the file has wall finishes.
  // Under their own keys: wallfinishes / finishtotals are the room-finish schedules above.
  try {
    const wd = readWallFinishes(w);
    if ((wd.finishes || []).length || Object.keys(wd.walls || wd.faces || {}).length) {
      const wf = wallFinishSchedules(wd, w, { fmtLen: (mm) => fmtLen(mm, units), fmtArea: (mm2) => fmtArea(mm2, units), fmtVol: (mm3) => fmtVol(mm3, units), t, unit: unitMark(units) });
      all.wfaces = wf.wallfinishes; all.wfacetotals = wf.wallfinishtotals; all.wfacerooms = wf.wallfinishrooms;
    }
  } catch (e) { /* a file without wall finishes */ }
  // the per-layer areas and volumes of every layered type in use: the one function for them (layer-quantities.js, bk-r3-types-10)
  try { const li = layerInputs(w, snap, loopsFor); all.layers = layerSchedule(layerQuantities(snap, { ...li, measure, countBy, t }), { ...opts }); } catch (e) { /* a file with nothing layered */ }
  try {
    const rec = readProjectClassification(w);
    if (rec.schedules && rec.systems.length) addClassificationColumns(all, { systems: rec.systems, codes: (sys) => effectiveCodes(w, sys), label: (s) => s, varies: t('classify.varies') });
  } catch (e) { /* no classification in this file */ }
  return { all, snap, w, loopsFor };
}

const hide = (o, k, v) => Object.defineProperty(o, k, { value: v, enumerable: false, configurable: true, writable: true });
export function withTables(all, snap) {
  for (const [k, sc] of Object.entries(all)) {
    if (!sc || k.startsWith('setup:') || sc.table) continue;
    if (!sc.title) { try { sc.title = sc.title || ''; } catch (e) { /* frozen */ } }
    const table = describeSchedule(k, sc, snap);
    if (table) hide(sc, 'table', table);
  }
  return all;
}
export const projectName = (w) => { try { const id = idsOf(w.api, w.mid, 'IFCPROJECT')[0]; const l = id ? w.api.GetLine(w.mid, id, false) : null; return String(val(l?.LongName) || val(l?.Name) || ''); } catch (e) { return ''; } };
/** One saved set-up filled from the model: the laid-out lines, what the office standard set, and the property columns that found nothing. */
export function fillSetup(all, setup, { w, units, t, project = '', standard = officeStandard() }) {
  const src = all[setup.source];
  if (!src || !src.table) return null;
  const p = withProps({ ...src.table, title: setup.name }, setup.props, w, { yes: t('sched.yes'), no: t('sched.no'), varies: t('sched.varies') });
  const r = layOut(p.table, setup.layout, { units, t, project, standard });
  return { laid: r.laid, from: r.from, layout: r.layout, table: p.table, empty: p.empty, read: p.read };
}
export function withSetups(all, setups, ctx) {
  for (const s of setups || []) {
    const f = fillSetup(all, s, ctx);
    if (!f) continue;
    const sc = flat(f.laid);
    hide(sc, 'table', f.table); hide(sc, 'setup', s); hide(sc, 'filled', f);
    all['setup:' + s.id] = sc;
  }
  return all;
}
/** With an office standard set, the plain schedules take it too (whoever opens them): head, rows and total become the laid-out ones. */
export function underStandard(all, { units, t, project = '', standard = officeStandard() }) {
  for (const [k, sc] of Object.entries(all)) {
    if (!sc || !sc.table || k.startsWith('setup:')) continue;
    if (sc.plain) { Object.assign(sc, sc.plain); hide(sc, 'plain', null); hide(sc, 'laid', null); hide(sc, 'standard', null); }   // a schedule kept from the last reading: as it was first
    if (!Object.keys(standard).length) continue;
    const r = layOut(sc.table, {}, { units, t, project, standard });
    if (!Object.keys(r.from).length) continue;
    const f = flat(r.laid);
    hide(sc, 'plain', { head: sc.head, rows: sc.rows, total: sc.total, ids: sc.ids, nums: sc.nums, csvHead: sc.csvHead, csvRows: sc.csvRows });
    sc.head = f.head; sc.rows = f.rows; sc.total = f.total; sc.ids = f.ids; sc.nums = r.laid.lines.filter((l) => l.kind !== 'total').map((l) => l.vals);
    if (sc.csvHead) { sc.csvHead = undefined; sc.csvRows = undefined; }
    hide(sc, 'laid', r.laid); hide(sc, 'standard', r.from);
  }
  return all;
}
