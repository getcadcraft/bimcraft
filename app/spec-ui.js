/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spec-ui.js — the Specification dialog (0.10 BK.47; session bk-r3-schedules-10): one section per type in use, its facts read
 * from the model, and a box for the person's own specification text. Save = one undo step (spec-model.js saveSpecTextsOp). The
 * document itself is made in Documents from the model with the Specification template ({{specification}}): PDF, Word or Markdown.
 *
 *   openSpecDialog({ A, t, status, sections() }) → the <dialog>
 */
import { el } from './ui-util.js';
import { saveSpecTextsOp, GROUPS, MAX_TEXT } from './spec-model.js';

export function openSpecDialog({ A, t, status, sections }) {
  const list = sections();
  if (!list) return null;
  const dlg = el('dialog', { className: 'bc-dialog bc-spec-dlg', 'aria-label': t('spec.title'), 'data-spec-dialog': '', style: 'width:min(900px,96vw);max-width:900px' });
  const boxes = new Map();
  const body = el('div', { style: 'max-height:70vh;overflow:auto' });
  for (const g of [...GROUPS, 'unused']) {
    const mine = list.filter((s) => (g === 'unused' ? !s.inUse : s.inUse && s.group === g));
    if (!mine.length) continue;
    body.append(el('h3', {}, t('spec.group.' + g)));
    for (const s of mine) {
      const ta = el('textarea', { className: 'bc-input', rows: 3, maxLength: MAX_TEXT, 'data-spec-text': s.id, 'aria-label': t('spec.text.label', { title: s.title }), placeholder: t('spec.text.placeholder') });
      ta.value = s.text;
      ta.addEventListener('keydown', (e) => e.stopPropagation());
      boxes.set(s.id, ta);
      const head = el('p', { className: 'bc-spec-head' }, el('strong', {}, (s.code ? s.code + ' · ' : '') + s.title));
      if (s.ids.length) { const b = el('button', { type: 'button', className: 'bc-linkbtn', 'data-spec-select': s.id, onClick: () => A.host.select(s.ids.map((id) => A.kb() + id)) }, t('spec.select', { n: s.ids.length })); head.append(' ', b); }
      body.append(el('section', { className: 'bc-spec-sec', 'data-spec-section': s.id }, head, s.facts.length ? el('ul', { className: 'bc-muted' }, s.facts.map((f) => el('li', {}, f))) : null, ta));
    }
  }
  if (!list.length) body.append(el('p', { className: 'bc-muted' }, t('spec.none')));
  const save = () => {
    const texts = {};
    for (const [id, ta] of boxes) if (ta.value.trim()) texts[id] = ta.value;
    A.commit(saveSpecTextsOp(texts), { label: t('spec.undo') });
    status(t('spec.saved', { n: Object.keys(texts).length }));
    dlg.close();
  };
  dlg.append(el('h2', {}, t('spec.title')), el('p', { className: 'bc-muted' }, t('spec.dialog.lede')), body,
    el('div', { className: 'bc-dialog-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-spec-cancel': '', onClick: () => dlg.close() }, t('fin.cancel')), ' ',
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-spec-save': '', onClick: save }, t('spec.save'))));
  dlg.addEventListener('close', () => dlg.remove());
  dlg.addEventListener('keydown', (e) => e.stopPropagation());
  A.host.root.append(dlg);
  dlg.showModal();
  return dlg;
}
