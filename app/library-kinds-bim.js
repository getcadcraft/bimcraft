/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library-kinds-bim.js: what BimCraft does with a Type, a project template and a Quick Kit from the Library (0.10 BK.21, BK.98, session
 * bk-r3-library-10). The item format and its checks are libitem.js (shared with CadCraft); the type's recipe is type-pack.js; a project template is
 * the IFC file template-store.js keeps. This file only joins them to the Library panel (library-view.js calls the three host functions).
 *
 *   mountLibraryKinds({ modelUi, t, status, el, placed }) → { addType(item), saveKitTemplate(item), quickKitDialog() }
 *     addType(item)          a Type item (kind type) → a type of this project, as a copy when the name is taken (one undo step)
 *     saveKitTemplate(item)  a project template item → "My templates" (New building › Start from)
 *     quickKitDialog()       a Quick Kit file (a format-1 item of kind kit) from the Library items this project uses, to upload at /library/upload
 *   placed() → [{ uuid, name }] the Library items placed in the open model.
 */
import { importTypePack, readTypePack } from './type-pack.js';
import { putTemplate } from './template-store.js';
import { kitItem } from './libitem.js';

export function mountLibraryKinds({ modelUi, t, status, el, placed, download }) {
  let A = null;
  const K = (k, v) => t('lib.kit.' + k, v);

  function addType(item) {
    if (!A?.ed?.()) { status(t('lib.type.needs_model'), true); return; }
    const pack = item?.type?.pack;
    const chk = readTypePack(pack);
    if (!chk.ok) { status(t('lib.err.format', { errors: chk.errors[0] }), true); return; }
    let why = null;
    const run = importTypePack(chk.pack, { conflict: 'copy' });
    A.commit((ed) => run(ed), { label: t('lib.type.label'), verb: t('model.verb.changed'), onError: (e, wtext) => { why = e.key && /^typepack\./.test(e.key) ? t(e.key, e.fill || {}) : wtext || e.message; } });
    if (why) status(why, true); else status(t('lib.type.added', { name: item.name }));
  }

  async function saveKitTemplate(item) {
    const data = item?.kit?.file?.data;
    if (item?.kit?.type !== 'project-template' || typeof data !== 'string') { status(K('err.notemplate'), true); return; }
    await putTemplate({ name: String(item.name).slice(0, 80), bytes: new TextEncoder().encode(data) });
    status(K('template.saved', { name: item.name }));
  }

  function quickKitDialog() {
    const items = placed();
    if (!items.length) { status(K('make.none'), true); return; }
    const name = el('input', { type: 'text', className: 'bc-input', maxLength: 120, value: '', 'data-kit-name': '' });
    const summary = el('input', { type: 'text', className: 'bc-input', maxLength: 300, 'data-kit-summary': '' });
    const version = el('input', { type: 'text', className: 'bc-input', value: '0.1.0', maxLength: 20, 'data-kit-version': '' });
    const added = el('input', { type: 'text', className: 'bc-input', value: K('added.first'), maxLength: 300, 'data-kit-added': '' });
    const err = el('p', { className: 'bc-input-err', role: 'alert', 'data-kit-error': '' });
    const dlg = el('dialog', { className: 'bc-dialog', 'data-kit-dialog': '', 'aria-labelledby': 'bc-kit-h' },
      el('form', { method: 'dialog' }, el('h2', { className: 'bc-h', id: 'bc-kit-h' }, K('make.title')), el('p', {}, K('make.lede', { n: items.length })),
        el('label', { className: 'bc-dlg-field' }, el('span', {}, K('name')), name), el('label', { className: 'bc-dlg-field' }, el('span', {}, K('summary')), summary),
        el('label', { className: 'bc-dlg-field' }, el('span', {}, K('version')), version), el('label', { className: 'bc-dlg-field' }, el('span', {}, K('added.label')), added),
        el('p', { className: 'bc-muted' }, K('make.note')), err,
        el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-kit-ok': '' }, K('make.download')), el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel', formnovalidate: true }, K('cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      const r = kitItem({ type: 'quick-kit', name: name.value.trim(), apps: ['bimcraft'], summary: summary.value.trim(), members: items, version: version.value.trim(), added: [added.value.trim()] });
      if (!name.value.trim() || !r.ok) { e.preventDefault(); err.textContent = !name.value.trim() ? K('err.name') : K('err.format', { why: r.errors[0] }); return; }
      const file = name.value.trim().replace(/[\\/:*?"<>|]+/g, '-') + ' (Quick Kit).json';   // i18n-ignore: a file name
      download(file, new TextEncoder().encode(JSON.stringify(r.item, null, 1) + '\n'), 'application/json');
      status(K('make.done', { file }));
    });
    dlg.addEventListener('close', () => dlg.remove());
    document.body.append(dlg);
    dlg.showModal();
  }

  A = modelUi ? modelUi.extend({ addLibraryType: (item) => addType(item) }) : null;
  return { addType, saveKitTemplate, quickKitDialog };
}
