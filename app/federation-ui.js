/* SPDX-License-Identifier: Apache-2.0 */
/**
 * federation-ui.js: bimcraft.js's 13 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountFederation(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { KEY_SPAN, IfcModel, keyOf } from './ifc-model.js';
import { placementMatrix, inv4 } from './ifc-util.js';
import { t } from './i18n.js';
import { IfcEditor } from './ifc-edit.js';
import * as WebIFC from './ifc/api.js';
import { el, num } from './ui-util.js';
import { lenMark, getDisplayUnits, parseLen } from './model-units.js';

export function mountFederation(ctx) {
  const { ST, ui, status, frame, guard, ifcWithUnits, fillIfcInfo, fillStoreys, fillClasses, clearProps, renderChanges, applySection, stopPlacing } = ctx;

  function cur() { return ST.active || ctx.models[0]; }
  const isSpaceKey = (k) => { const e = entryOf(k); return !!e && e.model.classOf.get(k - e.model.keyBase) === 'IfcSpace'; };
  function entryOf(key) { return ctx.models.find((m) => m.mi === Math.floor(key / KEY_SPAN)) || null; }
  /** A model's placement: its own coordination undone, the first model's applied, then the offset (IFC X, Y, Z → viewer). */
  const placementOf = (m) => m.matrix || placementMatrix(ST.refC, [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)], m.offset);   // ifc-util.js; a link (0.6 DF.21) carries its whole `matrix`
  /** Active model's viewer coordinates ↔ the scene (the placement matrix). */
  const toWorld = (v) => { const M = ST.viewer.modelMatrix(cur().mi); return [M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]]; };
  const toLocal = (v) => { const M = inv4(ST.viewer.modelMatrix(cur().mi)); return [M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]]; };

  /** Open another IFC into the scene, beside what is open. */
  async function addModel(file, { link = null } = {}) {   // link (0.6 DF.21): { id, … } — shown by reference, never edited
    if (!ctx.models.length) { await ctx.open(file, null); return null; }
    const free = [...Array(63).keys()].map((i) => i + 1).find((i) => !ctx.models.some((m) => m.mi === i));
    if (!free) { status(t('fed.full'), true); return null; }
    status(t('fed.reading', { file: file.name }));
    await frame();
    const t0 = performance.now();
    const im = IfcModel.sharing(ST.ifc);
    let m;
    const added = await ifcWithUnits(new Uint8Array(await file.arrayBuffer()), file);   // 0.10 BK.8: an added model with no length unit is asked about too
    if (!added) { im.close(); return null; }
    try { m = await im.load(added, (done, total) => status(t('fed.building', { file: file.name, done, total })), { keyBase: keyOf(free, 0) }); }
    catch (e) { im.close(); throw new Error(t('fed.unreadable', { file: file.name })); }
    const ent = { mi: free, ifc: im, model: m, editor: new IfcEditor(WebIFC, im), name: file.name, size: file.size, file, tag: Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10), offset: [0, 0, 0], visible: true, link, matrix: null };
    ctx.models.push(ent);
    ST.viewer.setModelMatrix(free, placementOf(ent));
    ST.viewer.setModel(m, { add: true });
    if (ST.cut) applySection();
    renderModels();
    status(t(link ? 'link.loaded' : 'fed.added', { file: file.name, n: m.elements, s: ((performance.now() - t0) / 1000).toFixed(1) }));
    return ent;
  }
  /** Make another model the one edits, the tree, storeys and Color by work on. */
  function setActive(ent) {
    if (!ent || ent === cur() || ent.link) return;   // a link (0.6 DF.21) is never the model you edit
    stopPlacing();
    if (ST.colorField) ctx.colorOff();
    ST.active = ent;
    ST.ifc = ent.ifc; ST.model = ent.model; ST.editor = ent.editor; ST.ifcName = ent.name; ST.modelTag = ent.tag;
    ST.swapTarget = null;
    ST.selected = null; ST.pickToken++;
    for (const m of ctx.models) m.ix = null;   // the model that was active may have been edited
    fillIfcInfo(ST.model, { name: ent.name, size: ent.size ?? 0 });
    fillStoreys(ST.model);
    fillClasses(ST.model);
    ctx.fillTree(false);
    ST.propIx = null;
    renderChanges();
    renderModels();
    ctx.renderColor();
    clearProps();
    ctx.afterPick();
    status(t('fed.active', { file: ent.name }));
  }
  async function removeModel(ent) {
    if (ctx.models.length < 2) return;
    if (await ctx.keepEdits(ent)) return;
    if (ent === cur()) setActive(ctx.models.find((m) => m !== ent));
    ST.viewer.removeModel(ent.mi);
    ST.viewer.vis.prune((k) => Math.floor(k / KEY_SPAN) !== ent.mi);
    ent.ifc.close();
    ent.asDoc?.close();
    ctx.models.splice(ctx.models.indexOf(ent), 1);
    renderModels();
    ctx.afterPick();
    status(t('fed.removed', { file: ent.name }));
  }
  /** Move a model by an offset [x, y, z] in metres (IFC axes): the Offset form below, and SuperCad Studio's placements (window.bimcraftModels.setOffset). */
  const applyOffset = (m, v) => { m.offset = v; ST.viewer.setModelMatrix(m.mi, placementOf(m)); if (ST.cut) applySection(); };
  function renderModels() {
    if (!ui.modelsSec) return;
    ui.modelsSec.hidden = ST.mode !== 'ifc' || !ctx.models.length;
    try { showTeamBtn(); } catch (e) { /* not set up yet */ }
    queueMicrotask(() => { if (ST.cmpRes && !(ST.cmpPair || []).every((m) => ctx.models.includes(m))) ctx.clearCompare(true); else ctx.renderCompare(); });
    ui.modelList.replaceChildren(...ctx.models.map((m) => {
      const radio = el('input', { type: 'radio', name: 'bc-active-model', checked: m === cur(), disabled: !!m.link, title: m.link ? t('link.noedit') : null, 'aria-label': t('fed.edit.this', { file: m.name }), 'data-model-active': String(m.mi) });
      radio.addEventListener('change', () => { if (radio.checked) setActive(m); });
      const vis = el('input', { type: 'checkbox', checked: m.visible, 'aria-label': t('fed.show', { file: m.name }), 'data-model-visible': String(m.mi) });
      vis.addEventListener('change', () => { m.visible = vis.checked; ST.viewer.setModelVisible(m.mi, m.visible); ctx.afterPick(); });
      const off = el('details', { className: 'bc-model-offset', 'data-model-offset': String(m.mi) },
        el('summary', { title: t('fed.offset.title.u') }, t('fed.offset')),
        el('form', { className: 'bc-model-offset-form', onsubmit: null },
          ...['X', 'Y', 'Z'].map((ax, i) => el('label', {}, ax, el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', value: lenMark(m.offset[i] * 1000, getDisplayUnits()), size: 9, 'data-axis': ax }))),   // GH.3-A: the display unit (offsets are kept in metres)
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc' }, t('fed.offset.apply'))));
      off.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = [...off.querySelectorAll('input')].map((i) => parseLen(String(i.value).trim(), getDisplayUnits()) / 1000);
        if (!v.every(Number.isFinite)) { status(t('fed.offset.bad.u'), true); return; }
        applyOffset(m, v);
        status(t('fed.offset.done.u', { file: m.name, x: lenMark(v[0] * 1000, getDisplayUnits()), y: lenMark(v[1] * 1000, getDisplayUnits()), z: lenMark(v[2] * 1000, getDisplayUnits()) }));
      });
      return el('li', { 'data-model': String(m.mi), className: m === cur() ? 'is-active' : '' },
        el('div', { className: 'bc-model-row' }, radio, vis,
          el('span', { className: 'bc-model-name', title: m.name }, m.name),
          m.link ? el('span', { className: 'bc-sub', 'data-model-link': m.link.id }, t('link.tag')) : null,
          el('span', { className: 'n' }, num(m.model.elements)),
          ctx.models.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('fed.remove', { file: m.name }), 'aria-label': t('fed.remove', { file: m.name }), 'data-model-remove': String(m.mi), onClick: () => guard(() => removeModel(m)) }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null),
        off);
    }));
  }

  const teamTw = () => window.ccTeamwork?.tw || null;
  const showTeamBtn = () => { if (ctx.teamBtn) ctx.teamBtn.hidden = !(teamTw() && teamTw().drawing); };

  return { cur, isSpaceKey, entryOf, placementOf, toWorld, toLocal, addModel, setActive, removeModel, applyOffset, renderModels, teamTw, showTeamBtn };
}
