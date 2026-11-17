/* SPDX-License-Identifier: Apache-2.0 */
/**
 * element-types-ui.js — floor, roof and ceiling types in the page; the Layers schedule; the sketch-band setting (0.10 booklet rows
 * BK.24 and BK.15, session bk-r3-types-10). A thin adapter over element-types.js, element-type-ops.js and layer-quantities.js.
 *
 *   mountElementTypes(modelUi) → { state, data() }
 *
 * Where a person finds it:
 *   Build › Floor / Ceiling / Roof (and Draw floor): a Type list on the tool's row [data-eltype-new=<kind>]: "No type" (as before) or a type.
 *   Properties of a floor, ceiling or roof: Type [data-mp-eltype] (a swap: the element stays, nothing is drawn again), Edit the type…
 *     [data-mp-eltype-edit] (the wall type editor, on this kind of type). The thickness of a typed element is its type's.
 *   Schedules › Layers: area and volume [data-msched-kind] value `layers`: a row a layer; a click on a row picks its elements.
 *   Schedules › Doors / Windows: an LOD column when Settings › BimCraft › Walls › "Show each wall type's LOD" is on.
 *   Settings › BimCraft › Walls › Draw walls of an LOD 100 or LOD 200 type as one hatched band [name=bcWallLodSketch] (on by default).
 *   Walls › Type packs lists floor, roof and ceiling types too (type-pack-ui.js asks elementTypeChoices()).
 * Test hook: window.bimcraftElementTypes = { state, types(kind), swap(guids, key), data() }.
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, fmtArea, unitMark } from './model-units.js';
import { isMetric } from './display-units.js';
import { readStyle } from './work-style.js';
import { elementTypes, elementType, typeTotal, ELEMENT_KINDS } from './element-types.js';
import { saveElementType, swapElementType } from './element-type-ops.js';
import { layerInputs, layerQuantities, layerSchedule } from './layer-quantities.js';
import { measureCtx } from './quantity-schedules.js';
import { readMethodSetting } from './quantity-method.js';
import { readDrawnFloors } from './model-floors.js';
import { openingType, openingLod } from './opening-types.js';
import { lodLabel } from './walls/lod.js';

const STORE = 'bimcraft.walls';   // the Walls settings' record (wall-tools-ui.js, wall-joinstyle-ui.js, wall-typeswap-ui.js): `lodsketch` is ours

export function mountElementTypes(modelUi) {
  let A = null, memo = null;
  const R = { newType: { floor: '', roof: '', ceiling: '' }, sketch: true };
  const t = (k, v) => A.t(k, v);
  const W = () => { const e = A.ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const L = (mm) => fmtLen(mm, A.units());
  const types = (kind) => { const w = W(); if (!w) return []; try { return elementTypes(w, kind); } catch (e) { return []; } };
  const label = (ty) => ty.name + ' (' + L(typeTotal(ty)) + ')' + (ty.lod ? ' [' + lodLabel(ty.lod) + ']' : '');
  const options = (kind, value) => [el('option', { value: '', selected: !value }, t('eltype.none')), ...types(kind).map((ty) => el('option', { value: ty.key, selected: ty.key === value }, label(ty)))];
  const readStore = () => { try { const v = JSON.parse(localStorage.getItem(STORE) || '{}'); return v && typeof v === 'object' ? v : {}; } catch (e) { return {}; } };

  function swap(guids, key, title) {
    let out = null, why = null;
    const run = swapElementType(guids, key);
    A.commit((ed) => { out = run(ed); return out; }, { label: title || t('eltype.type'), verb: t('model.verb.changed'), onError: (e, text) => { why = e.key ? t(e.key) : text || e.message; } });
    if (why) { A.host.status(why, true); return null; }
    const s = out?.swap;
    if (s?.changed) {
      const ty = key ? elementType(key.split('-')[0], key, W()) : null;
      A.host.status(ty ? t('eltype.swapped', { n: s.changed, name: ty.name, t: L(s.thickness.after), lod: ty.lod ? ', ' + lodLabel(ty.lod) : '' }) : t('eltype.swapped.none', { n: s.changed }));
    }
    return s || null;
  }
  function edit(kind, key, guids) {
    const title = t('eltype.title.' + kind);
    A.ask('openAssembly', key, guids, {
      kind, title, exteriorSide: t('eltype.top'), interiorSide: t('eltype.bottom'), order: t('eltype.order') + ' ' + t('eltype.starter.note'),
      source: (w) => elementType(kind, key, w),
      count: (w) => { let n = 0; try { const D = A.S.data?.derived || {}; n = [...(kind === 'floor' ? [...(D.floors || []), ...readDrawnFloors(w)] : kind === 'roof' ? D.roofs || [] : D.ceilings || [])].filter((x) => x.typeKey === key).length; } catch (e) { n = 0; } return n; },
      save: (input, assign) => saveElementType(input, assign),
      effects: (duplicate, n, rest, name) => (duplicate ? t('eltype.effects.duplicate', { n, rest }) : t('eltype.effects.typewide', { n: n + rest, name })),
    });
  }
  /** The Type row and the Edit button of one element (kit: Properties' own helpers). */
  function typeRows(kind, x, kit) {
    const sel = el('select', { className: 'bc-mb-select', 'data-mp-eltype': kind, 'aria-label': t('eltype.type') }, ...options(kind, x.typeKey || ''));
    if (x.typeKey && !sel.value) sel.prepend(el('option', { value: x.typeKey, selected: true }, x.typeKey));   // a type that is not in the project any more
    sel.addEventListener('change', () => swap([x.guid], sel.value, t('eltype.title.' + kind)));
    kit.field(t('eltype.type'), sel);
    if (x.typeKey) {
      kit.field('', kit.button(t('eltype.edit'), 'data-mp-eltype-edit', () => edit(kind, x.typeKey, [x.guid])));
      // the thickness field that follows is the type's: read only
      queueMicrotask(() => { for (const i of A.root.querySelectorAll('[data-mp-flthick], [data-mp-cet], [data-mp-rfthick]')) { i.disabled = true; i.title = t('eltype.fromtype'); } });
    }
  }

  function data() {
    const ed = A.ed(), snap = A.S.data;
    if (!ed || !snap) return {};
    const U = A.units(), count = readStyle().count;
    if (memo && memo.snap === snap && memo.U === U && memo.count === count && memo.ed === ed) return memo.out;
    const w = W(), loops = new Map();
    const loopsFor = (id) => { if (!loops.has(id)) { let Lp = null; try { Lp = A.loopsOf(id); } catch (e) { Lp = null; } loops.set(id, Lp); } return loops.get(id); };
    let measure = null;
    try { measure = measureCtx(snap, readMethodSetting(w).method, A.t); } catch (e) { measure = null; }
    const rows = layerQuantities(snap, { ...layerInputs(w, snap, loopsFor), measure, countBy: count, t: A.t });
    const out = { layers: layerSchedule(rows, { fmtLen: (mm) => fmtLen(mm, U), fmtArea: (a) => fmtArea(a, U), t: A.t, unit: unitMark(U), metric: isMetric(U), measure }) };
    memo = { snap, U, count, ed, out };
    return out;
  }

  A = modelUi.extend({
    newElementType(kind) { const k = R.newType[kind] || ''; return k && types(kind).some((x) => x.key === k) ? k : ''; },
    elementTypeChoices() {
      const w = W();
      if (!w) return [];
      return ELEMENT_KINDS.flatMap((kind) => elementTypes(w, kind).map((x) => ({ key: x.key, name: t('layers.el.' + kind) + ': ' + x.name, custom: !x.starter, thickness: typeTotal(x) })));   // i18n-ignore: "Floor: name"
    },
    derivedProps(d, kit) { if (ELEMENT_KINDS.includes(d.kind)) typeRows(d.kind, d, kit); },
    drawnFloorType(f, kit) { typeRows('floor', f, kit); },
    schedules() { try { return data(); } catch (e) { console.error(e); return {}; } },
    scheduleKeys(kind, i) { const k = A.kb(), sc = data()[kind]; return sc ? (sc.ids[i] || []).map((id) => k + id) : []; },
    /** Doors and Windows: the LOD of each one's kind, when the Walls setting shows LOD columns (wall-typeswap-ui.js's `lodcol`). */
    scheduleColumns(all) {
      if (readStore().lodcol !== 'on') return;
      const ops = new Map((A.S.data?.openings || []).map((o) => [o.id, o]));
      for (const key of ['doors', 'windows']) {
        const sc = all[key];
        if (!sc || !sc.ids || sc.head.includes(t('typeswap.sch.lod'))) continue;
        sc.head = [...sc.head, t('typeswap.sch.lod')];
        sc.rows = sc.rows.map((r, i) => { const o = ops.get(sc.ids[i]?.[0]); const n = o && !o.family ? openingLod(openingType(o.typeKey)) : null; return [...r, n ? lodLabel(n) : '']; });
      }
    },
    refresh() {
      const sel = A.root.querySelector('[data-msched-kind]');
      if (sel && !sel.querySelector('option[value="layers"]')) sel.append(el('option', { value: 'layers', 'data-eltypes': '' }, t('layers.sch.title')));
      for (const kind of ELEMENT_KINDS) for (const s of A.root.querySelectorAll('[data-eltype-new="' + kind + '"]')) {
        const sig = types(kind).map(label).join('|') + '|' + A.units();
        if (s.dataset.sig !== sig) { s.replaceChildren(...options(kind, R.newType[kind])); s.dataset.sig = sig; }
        if (s.value !== (R.newType[kind] || '')) s.value = R.newType[kind] || '';
      }
    },
  });

  // the Type list on the tools' rows
  const addPicker = (row, kind) => {
    if (!row || row.querySelector('[data-eltype-new]')) return;
    const s = el('select', { className: 'bc-mb-select', 'data-eltype-new': kind, 'aria-label': t('eltype.newtype'), title: t('eltype.newtype') });
    s.addEventListener('change', () => { R.newType[kind] = s.value; for (const o of A.root.querySelectorAll('[data-eltype-new="' + kind + '"]')) if (o !== s) o.value = s.value; });
    row.append(el('label', {}, el('span', {}, t('eltype.type')), ' ', s));
  };
  addPicker(A.root.querySelector('[data-mopts="floor"]'), 'floor');
  addPicker(A.root.querySelector('[data-mopts="drawfloor"]'), 'floor');
  addPicker(A.root.querySelector('[data-mopts="ceiling"]'), 'ceiling');
  addPicker(A.root.querySelector('[data-mopts="roof"]'), 'roof');

  // Settings › BimCraft › Walls: the sketch band
  const box = document.querySelector('[data-walls-settings] [name="bcWallLodSketch"]');
  R.sketch = readStore().lodsketch !== 'off';
  A.S.lodSketch = R.sketch;
  if (box) box.checked = R.sketch;
  box?.addEventListener('change', () => {
    R.sketch = box.checked; A.S.lodSketch = R.sketch;
    try { const s = readStore(); s.lodsketch = R.sketch ? 'on' : 'off'; localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) { /* this tab keeps it */ }
    try { A.refresh(); } catch (e) { /* the plan is not up yet */ }
  });
  if (typeof window !== 'undefined') window.bimcraftElementTypes = { state: R, types, swap, edit, data };   // for tests
  return { state: R, data };
}
