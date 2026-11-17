/* SPDX-License-Identifier: Apache-2.0 */
/**
 * quantities-ui.js — the quantity schedules in the Schedules panel (booklet rows BK.84, BK.11, BK.40; session
 * bk-quantities-10). A thin adapter over quantity-schedules.js and model-schedule.js: it hands the plan (model-ui.js extend())
 * three more schedules — Floors, Finishes, Wall types: takeoff data — and the Walls by type schedule measured with each shaped
 * wall's real face, so the schedule and the file's quantities are the same numbers. A click on a row picks what it lists.
 *
 *   mountQuantities(modelUi) → { data() }   (data: the schedules as the panel shows them now, for tests)
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, fmtArea, unitMark } from './model-units.js';
import { readStyle } from './work-style.js';
import { readMaterials } from './project-materials.js';
import { wallType, typeName } from './model-walls.js';
import { schedules } from './model-schedule.js';
import { quantitySchedules, floorInputs, ceilingInputs, grossSideReader, measureCtx } from './quantity-schedules.js';
import { isMetric } from './display-units.js';
import { readMethodSetting } from './quantity-method.js';     // 0.10 BK.42 (bk-measure-10): the project's measurement method, kept in the IFC
import { methodPicker } from './quantity-method-ui.js';
import './quantity-ifc.js';                                    // the IFC quantity sets follow the method (hooks itself into model-walls.js)

const KEYS = ['floors', 'finishes', 'walltakeoff'];

export function mountQuantities(modelUi) {
  let A = null;
  let memo = null;   // one reading per model change: the panel asks several times a render (snapshots are new objects after every change)
  function data() {
    const ed = A.ed(), snap = A.S.data;
    if (!ed || !snap) return {};
    const U = A.units(), count = readStyle().count;
    if (memo && memo.snap === snap && memo.U === U && memo.count === count && memo.ed === ed) return memo.out;
    const out = read(ed, snap, U, count);
    memo = { snap, U, count, ed, out };
    return out;
  }
  function read(ed, snap, U, count) {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    const loops = new Map();
    const loopsFor = (id) => { if (!loops.has(id)) { let L = null; try { L = A.loopsOf(id); } catch (e) { L = null; } loops.set(id, L); } return loops.get(id); };
    let mats = [];
    try { mats = readMaterials(w); } catch (e) { mats = []; }
    const byId = new Map(mats.map((m) => [m.id, m.name]));
    const setting = readMethodSetting(w);
    const opts = { fmtLen: (mm) => fmtLen(mm, U), fmtArea: (mm2) => fmtArea(mm2, U), t: A.t, unit: unitMark(U), countBy: count, sideOf: grossSideReader(w), measure: measureCtx(snap, setting.method, A.t), metric: isMetric(U) };
    const out = quantitySchedules(snap, { ...opts, floors: floorInputs(w, snap, loopsFor), ceilings: ceilingInputs(w, snap, loopsFor), matName: (l) => byId.get(l?.materialId) || null });
    out.walls = { ...schedules(snap, new Map(), opts).walls, title: A.t('model.sch.walls') };
    // BK.42: under a method other than the default, the CSV of these schedules ends with a line naming it
    if (opts.measure) for (const k of ['walls', ...KEYS]) { const sc = out[k]; sc.method = setting.method.id; sc.csvHead = sc.head; sc.csvRows = [...sc.rows, ...(sc.total ? [sc.total.concat(Array(Math.max(0, sc.head.length - sc.total.length)).fill(''))] : []), [opts.measure.line, ...Array(sc.head.length - 1).fill('')]]; }
    Object.defineProperty(out, 'setting', { value: setting, enumerable: false });
    return out;
  }
  let picker = null;
  // the picker asks on every refresh: one small read of the project's set, kept per model reading (never the schedules themselves)
  let setMemo = null;
  const settingNow = () => {
    const ed = A.ed(), snap = A.S.data;
    if (!ed || !snap) return null;
    if (setMemo && setMemo.snap === snap && setMemo.ed === ed) return setMemo.setting;
    let setting = null;
    try { setting = readMethodSetting(new ModelWriter(ed.W, ed.api, ed.mid)); } catch (e) { setting = null; }
    setMemo = { snap, ed, setting };
    return setting;
  };
  A = modelUi.extend({
    schedules() { try { return data(); } catch (e) { return {}; } },
    scheduleKeys(kind, i) {
      const k = A.kb(), sc = data()[kind], snap = A.S.data;
      if (!sc || !snap) return [];
      if (kind === 'floors') return sc.ids[i] !== undefined ? [k + sc.ids[i]] : [];
      if (kind === 'finishes') return (sc.ids[i] || []).map((id) => k + id);
      if (kind === 'walltakeoff') return snap.walls.filter((x) => x.typeKey === sc.keys[i]).map((x) => k + x.id);
      if (kind === 'walls') { const name = sc.rows[i]?.[0]; return snap.walls.filter((x) => { const ty = A.projectWallType(x.typeKey) || x.assembly || wallType(x.typeKey); return (ty ? typeName(ty) : x.typeName) === name; }).map((x) => k + x.id); }
      return [];
    },
    refresh() {
      const sel = A.root.querySelector('[data-msched-kind]');
      if (!sel) return;
      for (const key of KEYS) if (!sel.querySelector('option[value="' + key + '"]')) sel.append(el('option', { value: key, 'data-quantities': '' }, A.t('qty.sch.' + key)));
      // BK.42: the measurement method of the project, above the schedule
      const box = A.root.querySelector('[data-msched]');
      if (box && !picker) { picker = methodPicker({ t: A.t, setting: settingNow, commit: (op, meta) => A.commit(op, meta) }); box.before(picker.el); }
      picker?.refresh();
    },
  });
  return { data, setting: settingNow };
}
