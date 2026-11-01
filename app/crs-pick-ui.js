/* SPDX-License-Identifier: Apache-2.0 */
/**
 * crs-pick-ui.js — the dialog that picks a coordinate system (0.8 D8.9, session `d89_PART_3`): search the whole catalog (EPSG number,
 * UTM zone, words), paste a projection definition or load a .prj, keep your own in "My projections". The logic is crs-pick.js (shared).
 * The catalog and crs.js load when the dialog opens.
 *
 *   await openCrsPicker({ mode: 'model' | 'target', near: [lon, lat] | null, current: string, canOff: bool, note: string,
 *                         onPick(crs), onOff(), say(text, isError) }) → the <dialog>
 *     mode 'model': a projected system only (it is the model's map grid); onPick gets a crs.js state.crs
 *     mode 'target': any system (Measure › Location's result); onPick gets a state.crs
 * Test hook: dialog[data-crs-pick]; fields [data-crs-q] [data-crs-prj] [data-crs-name], results [data-crs-hit], [data-crs-use] [data-crs-keep] [data-crs-off].
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';

export async function openCrsPicker({ mode = 'model', near = null, current = '', canOff = false, note = '', onPick, onOff, say = () => {} }) {
  const [crsLib, P] = await Promise.all([import('./crs.js'), import('./crs-pick.js')]);
  if (!crsLib.catalogLoaded()) await crsLib.loadCatalog();
  let sel = null, custom = false;
  const q = el('input', { type: 'text', className: 'bc-input', id: 'bc-crs-q', 'data-crs-q': '', autocomplete: 'off', spellcheck: 'false', placeholder: t('geo.pick.search.ph') });
  const prj = el('input', { type: 'file', accept: '.prj,.txt', hidden: true, 'data-crs-prj': '' });
  const name = el('input', { type: 'text', className: 'bc-input', id: 'bc-crs-name', maxLength: 120, 'data-crs-name': '' });
  const msg = el('p', { className: 'bc-sub', role: 'status', 'aria-live': 'polite', 'data-crs-msg': '' });
  const hits = el('div', { className: 'bc-crs-hits', 'data-crs-hits': '' });
  const customRow = el('div', { className: 'bc-crs-custom', hidden: true }, el('label', { for: 'bc-crs-name' }, t('geo.pick.name'), ' '), name, ' ',
    el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-crs-keep': '', onClick: () => keep() }, t('geo.pick.keep')));
  const mine = el('ul', { className: 'bc-crs-mine', 'data-crs-mine': '' });
  const use = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', disabled: true, 'data-crs-use': '', onClick: () => finish() }, t('geo.pick.use'));
  const off = canOff ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-crs-off': '', onClick: () => { onOff?.(); dlg.close(); } }, t('geo.pick.off')) : null;
  const title = t(mode === 'model' ? 'geo.pick.model.title' : 'geo.pick.target.title');
  const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': title, 'data-crs-pick': mode },
    el('h2', { className: 'bc-h' }, title),
    el('p', { className: 'bc-sub' }, t(mode === 'model' ? 'geo.pick.model.intro' : 'geo.pick.target.intro')),
    current ? el('p', { className: 'bc-sub', 'data-crs-current': '' }, current) : null,
    note ? el('p', { className: 'bc-sub' }, note) : null,
    el('div', { className: 'bc-crs-row' }, el('label', { for: 'bc-crs-q' }, t('geo.pick.search'), ' '), q, ' ',
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => prj.click() }, t('geo.pick.prj')), prj),
    msg, hits, customRow,
    el('h3', { className: 'bc-h' }, t('geo.pick.mine')), mine,
    el('p', { className: 'bc-lib-actions' }, use, off, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => dlg.close() }, t('dialog.close'))));
  dlg.addEventListener('close', () => dlg.remove());

  const unitLabel = (u) => (u === 'deg' ? '°' : u);
  const setSel = (crs, isCustom, text) => {
    sel = crs; custom = isCustom;
    use.disabled = !crs;
    customRow.hidden = !(crs && isCustom);
    if (crs && isCustom) name.value = crs.name;
    if (text !== undefined) { msg.textContent = text; msg.classList.remove('bc-input-err'); }
  };
  const fail = (text) => { setSel(null, false); msg.textContent = text; msg.classList.add('bc-input-err'); };
  const label = (e) => t('geo.pick.hit', { code: e.code, name: e.name, unit: unitLabel(e.unit) });
  function showHits(list) {
    hits.replaceChildren(...list.map((e) => el('button', { type: 'button', className: 'btn-line btn-sm-cc bc-crs-hit', 'data-crs-hit': String(e.code), onClick: () => { setSel(crsLib.crsFromEntry(e), false, label(e)); q.value = 'EPSG:' + e.code; hits.replaceChildren(); } }, label(e))));
  }
  function run(text) {
    hits.replaceChildren();
    const r = P.parse(text, { near, limit: 40 });
    if (r.kind === 'none') { setSel(null, false, ''); return; }
    if (r.error) { fail(r.error); return; }
    if (r.kind === 'words') { setSel(null, false, t(r.hits.length >= 40 ? 'geo.pick.hits.more' : 'geo.pick.hits', { n: r.hits.length })); showHits(r.hits); return; }
    const isCustom = r.crs.code == null;
    setSel(r.crs, isCustom, [isCustom ? t('geo.pick.custom', { name: r.crs.name, unit: unitLabel(r.crs.unit) }) : label(r.crs), ...r.notes].join(' '));
  }
  let timer = 0;
  q.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => run(q.value), 150); });
  q.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); clearTimeout(timer); run(q.value); if (sel) finish(); } });
  prj.addEventListener('change', async () => {
    const f = prj.files?.[0];
    prj.value = '';
    if (!f) return;
    try {
      const text = await f.text();
      const r = P.parse(text);
      if (r.error || !r.crs) { fail(t('geo.pick.prj.bad', { name: f.name, error: r.error || t('crs.prj.not') })); return; }
      q.value = f.name;
      setSel(r.crs, r.crs.code == null, [r.crs.code == null ? t('geo.pick.custom', { name: r.crs.name, unit: unitLabel(r.crs.unit) }) : label(r.crs), ...r.notes].join(' '));
    } catch (e) { fail(t('geo.pick.prj.bad', { name: f.name, error: e.message })); }
  });
  function paintMine() {
    const list = P.readMine();
    mine.replaceChildren(...(list.length ? list.map((e) => el('li', {},
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-crs-mine-use': e.id, onClick: () => { q.value = ''; hits.replaceChildren(); setSel(P.mineCrs(e), false, t('geo.pick.custom', { name: e.name, unit: unitLabel(e.unit) })); } }, t('geo.pick.mine.use', { name: e.name })), ' ',
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-crs-mine-remove': e.id, 'aria-label': t('geo.pick.mine.remove', { name: e.name }), onClick: () => { P.removeMine(null, e.id); paintMine(); } }, '×')))
      : [el('li', { className: 'bc-sub' }, t('geo.pick.mine.none'))]));   // i18n-ignore: the multiplication sign is a symbol
  }
  function named() { return sel && custom ? { ...sel, name: name.value.trim() || sel.name } : sel; }
  function keep() {
    const c = named();
    if (!c || c.code != null) return;
    P.addMine(null, c, c.name);
    msg.textContent = t('geo.pick.kept', { name: c.name });
    paintMine();
  }
  function finish() {
    const c = named();
    if (!c) return;
    if (mode === 'model' && c.unit === 'deg') { fail(t('geo.pick.geographic')); return; }
    onPick?.(c);
    dlg.close();
  }
  paintMine();
  document.body.append(dlg);
  dlg.showModal();
  q.focus();
  return dlg;
}
