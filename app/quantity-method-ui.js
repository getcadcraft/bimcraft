/* SPDX-License-Identifier: Apache-2.0 */
/**
 * quantity-method-ui.js — the project's measurement method in the Schedules panel (booklet row BK.42, session bk-measure-10).
 * A thin adapter: the methods are data (quantities/method-packs.js, or an office's own file), the choice is kept in the IFC
 * (quantity-method.js) and applying it is one op (quantity-ifc.js setMeasureMethod). This file only draws the picker.
 *
 *   methodPicker({ t, setting(), commit(op, meta), status(text) }) → { el, refresh() }
 *     setting(): quantity-method.js readMethodSetting of the open file, or null with no file
 */
import { el } from './ui-util.js';
import { builtinMethods, readMethodFile, methodLine, DEFAULT_METHOD } from './quantities/methods.js';
import { methodWords } from './quantity-schedules.js';
import { setMeasureMethod } from './quantity-ifc.js';

export function methodPicker({ t, setting, commit }) {
  const own = new Map();            // office files loaded in this session, by id
  const tr = methodWords(t);
  const pick = el('select', { className: 'bc-mb-select', 'data-qty-method-pick': '', 'aria-label': t('qty.method.title') });
  const file = el('input', { type: 'file', accept: '.json,application/json', hidden: true, 'data-qty-method-file': '', 'aria-label': t('qty.method.load') });
  const load = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-qty-method-load': '', 'data-bs-toggle': 'tooltip', title: t('qty.method.load.tip') }, t('qty.method.load'));
  const line = el('p', { className: 'bc-muted', 'data-qty-method-line': '' });
  const notes = el('details', { 'data-qty-method-notes': '' }, el('summary', {}, t('qty.method.notes')), el('p', { className: 'bc-muted' }));
  const msg = el('p', { className: 'bc-muted', role: 'status', 'data-qty-method-msg': '' });
  const root = el('div', { 'data-qty-method': '', style: 'margin:6px 0 10px' },
    el('label', { className: 'bc-lv-units', style: 'display:block' }, el('span', {}, t('qty.method.title')), ' ', pick), load, file, line, notes, msg);
  const say = (text) => { msg.textContent = text || ''; };
  const apply = (id) => {
    const m = own.get(id) || null;
    commit(setMeasureMethod(id, m), { label: t('qty.method.title'), verb: t('qty.method.verb') });
  };
  pick.addEventListener('change', () => { say(''); apply(pick.value); });
  load.addEventListener('click', () => file.click());
  file.addEventListener('change', async () => {
    const f = file.files?.[0];
    file.value = '';
    if (!f) return;
    let text = '';
    try { text = f.size > 200000 ? null : await f.text(); } catch (e) { text = null; }
    const r = text === null ? { method: null, errors: ['size'] } : readMethodFile(text);
    if (!r.method) {
      const code = r.errors[0] || 'format';
      say(['json', 'size', 'format', 'version', 'id.taken'].includes(code) ? t('qty.method.err.' + code) : t('qty.method.err.field', { field: code, n: r.errors.length }));
      return;
    }
    own.set(r.method.id, r.method);
    say(t('qty.method.loaded', { name: r.method.name }));
    apply(r.method.id);
  });
  function refresh() {
    const s = setting();
    root.hidden = !s;
    if (!s) return;
    if (s.own) own.set(s.own.id, s.own);
    const list = [...builtinMethods(), ...own.values()];
    const sig = list.map((m) => m.id).join('|');
    if (pick.dataset.sig !== sig) {
      pick.dataset.sig = sig;
      pick.replaceChildren(...list.map((m) => el('option', { value: m.id }, m.id === DEFAULT_METHOD ? t('qty.method.default') : m.name + (own.has(m.id) ? ' ' + t('qty.method.ownmark') : ''))));
    }
    pick.value = s.missing ? DEFAULT_METHOD : s.method.id;
    const m = s.method;
    // i18n-ignore: link attributes
    const link = m.source.url ? el('a', { href: m.source.url, target: '_blank', rel: 'noopener noreferrer', 'data-qty-method-link': '' }, t('qty.method.link')) : null;
    line.replaceChildren(s.missing ? t('qty.method.missing', { id: s.id }) + ' ' : '', methodLine(m, tr), ...(link ? [' ', link] : []));
    notes.hidden = !m.source.note || m.id === DEFAULT_METHOD;
    notes.lastChild.textContent = m.source.note || '';
  }
  return { el: root, refresh };
}
