/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anno-scale-ui.js: "Annotation sizes" (0.10 BK.10, session bk-r3-scale-10): the building's paper heights for text, dimensions,
 * tags, room names, grid bubbles, view titles and schedule text, kept in the file (anno-standard.js) and used by every sheet, the
 * plan PDF, the plan on screen (a view with a scale of its own) and plan symbols (anno-scale-bim.js; the rule is annoscale.js).
 *
 *   mountAnnoScale(modelUi) → { open(), startFromOffice() }
 *     Project browser › Sheets › Annotation sizes [data-pb-anno] opens the dialog [data-anno-dialog]: one box per kind
 *     [data-anno-h="<kind>"] in millimetres on paper (empty = BimCraft's own, shown as the placeholder), "Use my office's sizes"
 *     [data-anno-office] (only when the Default Policies add-on has some set), Save [data-anno-ok] = one undo step.
 *     startFromOffice(): a NEW building takes the office's sizes (policies all.anno.<kind>); nothing when none is set.
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { ModelWriter } from './model-write.js';
import { KINDS, MIN_MM, MAX_MM, paperMm } from './annoscale.js';
import { annoStandard, setAnnoStandard, officeStandard } from './anno-scale-bim.js';
import { readAnnoStandard, saveAnnoStandard } from './anno-standard.js';
import { packSizes, packNote } from './anno-from-packs.js';   // BK.157: a regulation pack's text heights, offered

export function mountAnnoScale(modelUi) {
  let A = null;
  const writer = () => { const e = A?.ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const num = (v) => String(Math.round(v * 100) / 100);
  function save(heights, label) {
    let why = null;
    try { A.commit(saveAnnoStandard(heights), { label: label || t('model.anno.title'), verb: t('model.verb.changed'), onError: (e, w) => { why = w; } }); }
    catch (e) { why = e.key ? t(e.key, { min: MIN_MM, max: MAX_MM }) : String(e.message || e); }
    return why;
  }
  function open() {
    if (!A?.ed()) return;
    const std = annoStandard(), office = officeStandard();
    const boxes = new Map();
    const rows = KINDS.map((k) => {
      const inp = el('input', { className: 'form-control', type: 'number', min: String(MIN_MM), max: String(MAX_MM), step: 'any', inputMode: 'decimal', placeholder: num(paperMm(k, null)), value: std.heights[k] !== undefined ? num(std.heights[k]) : '', 'data-anno-h': k });
      boxes.set(k, inp);
      return el('label', { className: 'bc-dlg-field' }, el('span', {}, t('model.anno.k.' + k)), inp);
    });
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const btn = (value, label, attrs = {}, primary = false) => el('button', { type: 'submit', className: (primary ? 'btn-plot' : 'btn-line') + ' btn-sm-cc', value, ...attrs }, label);
    const hasOffice = Object.keys(office.heights).length > 0, pk = packSizes();   // BK.157
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-anno-h', 'data-anno-dialog': '' },
      el('form', { method: 'dialog', noValidate: true }, el('h2', { className: 'bc-h', id: 'bc-anno-h' }, t('model.anno.title')),
        el('p', {}, t('model.anno.lede')), el('div', { className: 'bc-pv-grid' }, ...rows), el('p', { className: 'bc-muted' }, t('model.anno.note')), err,
        el('p', { className: 'bc-lib-actions' }, btn('ok', t('model.anno.ok'), { 'data-anno-ok': '' }, true), hasOffice ? btn('office', t('model.anno.office'), { 'data-anno-office': '' }) : null, pk ? btn('pack', t('model.anno.pack'), { 'data-anno-pack': '', title: packNote(pk, t) }) : null, btn('own', t('model.anno.own'), { 'data-anno-own': '' }), btn('cancel', t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      const v = e.submitter?.value;
      if (v === 'cancel' || !v) return;
      if (v === 'office') { e.preventDefault(); for (const k of KINDS) boxes.get(k).value = office.heights[k] !== undefined ? num(office.heights[k]) : ''; return; }
      if (v === 'pack') { e.preventDefault(); for (const k of KINDS) if (pk.heights[k] !== undefined) boxes.get(k).value = num(pk.heights[k]); err.textContent = packNote(pk, t); return; }
      if (v === 'own') { e.preventDefault(); for (const k of KINDS) boxes.get(k).value = ''; return; }
      const heights = {};
      for (const k of KINDS) {
        const raw = boxes.get(k).value.trim();
        if (!raw) continue;
        const n = Number(raw.replace(',', '.'));
        if (!(Number.isFinite(n) && n >= MIN_MM && n <= MAX_MM)) { e.preventDefault(); err.textContent = t('model.err.anno.height', { min: MIN_MM, max: MAX_MM }); boxes.get(k).focus(); return; }
        heights[k] = n;
      }
      const why = save(heights);
      if (why) { e.preventDefault(); err.textContent = why; return; }
      A.host.status(t('model.anno.saved'));
    });
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
  }
  A = modelUi.extend({
    refresh() { const w = writer(); setAnnoStandard(w ? readAnnoStandard(w) : null); },
    openAnnoSizes: open,
  });
  return {
    open,
    startFromOffice() {
      const office = officeStandard();
      if (!Object.keys(office.heights).length || !A?.ed()) return false;
      return !save(office.heights, t('model.anno.fromoffice'));
    },
  };
}
