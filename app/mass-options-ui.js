/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mass-options-ui.js: massing options kept side by side in the model (0.10 BK.44; mass-options.js has the model). It lives in the
 * Program panel (Room program to massing), under the options the program gives:
 *   Keep the selected option   the option picked above is kept as a building mass in the model (nothing is built yet)
 *   the list, by set           floors, footprint, gross floor area, volume; Make current, Rename, Develop (walls and floors), Remove
 *   Hide the options that are not current   (this browser only; the 3D view's own hide, nothing in the file)
 *   Add massing options from a file         an .ifc ModelCraft or CivilCraft wrote: its masses come in as options, ONE undo step
 * Every edit is one undo step and the model is drawn again after it (bimcraft.js rebuild); the site check (building lines, servitudes) follows the current option through Problems.
 * mountMassOptions(host): host = bimcraft.js designHost + { programUi }. Test hook: window.bimcraftMassOptions = { render, changed, sets }.
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { ModelWriter } from './model-write.js';
import { fmtArea, fmtVolMm3, getDisplayUnits } from './model-units.js';
import { readOptionSets, addMassOption, addMassOptions, specOf, setCurrentOption, renameOption, removeMassOption, developOption, DEFAULT_SET } from './mass-options.js';
import { developMass } from './model-site-mass.js';

const HIDE_KEY = 'bimcraft.massopt.hide';

export function mountMassOptions(host) {
  const anchor = host.root?.querySelector('[data-eg58]');
  if (!anchor) return null;
  const box = el('div', { className: 'bc-massopt', 'data-massopt': '' });
  anchor.after(box);
  const S = { sets: [], rename: '', hide: false, setName: '' };
  try { S.hide = localStorage.getItem(HIDE_KEY) === '1'; } catch (e) { S.hide = false; }
  const ed = () => host.editor();
  const W = () => { const e = ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const say = (err) => host.status(err.key ? t(err.key, err.fill || {}) : String(err.message || err), true);
  const sqm = (v) => fmtArea(v * 1e6, getDisplayUnits()), cum = (v) => fmtVolMm3(v * 1e9, getDisplayUnits());
  function read() { try { const w = W(); S.sets = w ? readOptionSets(w) : []; } catch (e) { S.sets = []; } }
  function run(o, label, done) {
    const e = ed();
    if (!e) { host.status(t('eg58.nomodel'), true); return false; }
    try { e.modelChange(o, { label, verb: t('massopt.verb') }); } catch (err) { say(err); return false; }
    // the model is drawn again (a mass came, went or became walls) and nothing stays picked; then the list and the words
    Promise.resolve(host.afterEdit()).then(() => { if (done) host.status(done); render(); });
    return true;
  }
  /** The 3D view's own hide for the options that are not current (nothing in the file). */
  function applyHide() {
    const v = host.viewer?.(), kb = host.keyBase?.() || 0;
    if (!v?.vis) return;
    const all = S.sets.flatMap((s) => s.options), off = all.filter((o) => S.hide && !o.current && s2(o)).map((o) => kb + o.id), on = all.filter((o) => !S.hide || o.current || !s2(o)).map((o) => kb + o.id);
    const n = v.vis.unhide(on) + v.vis.hide(off);
    if (n) v.applyVisibility?.();
  }
  // an option with nothing said about "current" in its set (an older file) is never hidden
  const s2 = (o) => S.sets.find((s) => s.options.includes(o))?.options.some((x) => x.current);
  function keep() {
    const P = host.programUi, o = P?.state?.result?.options.find((x) => x.key === P.state.pick);
    if (!o) { host.status(t('massopt.nopick'), true); return; }
    run(addMassOption({ set: S.setName || t('massopt.set.first'), name: o.name, pts: o.pts, floors: o.floors, floorHeight: o.floorHeight }), t('massopt.keep.label', { name: o.name }), t('massopt.kept', { name: o.name }));
  }
  async function fromFile(file) {
    const e = ed();
    if (!file || !e) { if (!e) host.status(t('eg58.nomodel'), true); return; }
    let specs = [];
    try {
      const mid = e.api.OpenModel(new Uint8Array(await file.arrayBuffer()), { COORDINATE_TO_ORIGIN: false });
      try { for (const s of readOptionSets(new ModelWriter(e.W, e.api, mid))) for (const o of s.options) specs.push(specOf(o, s.set === DEFAULT_SET ? file.name.replace(/\.ifc$/i, '') : s.set)); }
      finally { e.api.CloseModel(mid); }
    } catch (err) { host.status(t('massopt.file.bad', { file: file.name }), true); return; }
    if (!specs.length) { host.status(t('massopt.file.none', { file: file.name }), true); return; }
    run(addMassOptions(specs), t('massopt.file.label', { file: file.name }), t('massopt.file.done', { n: specs.length, file: file.name }));
  }
  function row(o) {
    const name = S.rename === o.guid
      ? (() => { const i = el('input', { className: 'bc-input', value: o.option, maxLength: 80, 'data-massopt-name': '', 'aria-label': t('massopt.rename') }); const go = () => { const v = i.value.trim(); S.rename = ''; if (v && v !== o.option) run(renameOption(o.guid, { name: v }), t('massopt.rename.label', { name: v })); else render(); }; i.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); go(); } else if (ev.key === 'Escape') { S.rename = ''; render(); } }); i.addEventListener('blur', go); setTimeout(() => i.focus(), 0); return i; })()
      : el('span', { 'data-massopt-option': '' }, o.option);
    const b = (key, attr, fn, cls = 'bc-linkbtn') => el('button', { type: 'button', className: cls, [attr]: '', onClick: fn }, t(key));
    return el('tr', { 'data-massopt-row': o.guid, className: o.current ? 'is-current' : '' },
      el('td', {}, name, o.current ? el('span', { className: 'bc-sub', 'data-massopt-current': '' }, ' ' + t('massopt.current')) : '', o.simplified ? el('span', { className: 'bc-sub', 'data-massopt-simplified': '' }, ' ' + t('massopt.simplified')) : ''),
      el('td', { 'data-massopt-floors': '' }, String(o.floors)), el('td', { 'data-massopt-foot': '' }, sqm(o.footprint_m2)), el('td', { 'data-massopt-gross': '' }, sqm(o.gross_m2)), el('td', {}, cum(o.volume_m3)),
      el('td', { className: 'bc-massopt-acts' },
        !o.current ? b('massopt.makecurrent', 'data-massopt-make', () => run(setCurrentOption(o.guid), t('massopt.makecurrent.label', { name: o.option }))) : '',
        b('massopt.rename', 'data-massopt-rename', () => { S.rename = o.guid; render(); }),
        // a mass whose building has exactly its floors as storeys (a CivilCraft site study) is developed the 0.7 way; a kept option gets the levels it needs
        b('massopt.develop', 'data-massopt-develop', () => run(o.storeys.length === o.floors ? developMass({ guid: o.guid }) : developOption(o.guid), t('mass.develop.label', { name: o.option }), t('massopt.developed', { name: o.option }))),
        b('massopt.remove', 'data-massopt-remove', () => run(removeMassOption(o.guid), t('massopt.remove.label', { name: o.option })))));
  }
  function render() {
    read();
    const kids = [el('h3', { className: 'bc-h bc-massopt-h' }, t('massopt.title')), el('p', { className: 'bc-muted' }, t('massopt.intro'))];
    const setIn = el('input', { className: 'bc-input', value: S.setName, placeholder: t('massopt.set.first'), maxLength: 80, 'data-massopt-set': '', 'aria-label': t('massopt.set') });
    setIn.addEventListener('input', () => { S.setName = setIn.value; });
    const file = el('input', { type: 'file', accept: '.ifc', hidden: true, 'data-massopt-file': '' });
    file.addEventListener('change', () => { const f = file.files?.[0]; file.value = ''; fromFile(f); });
    kids.push(el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, t('massopt.set')), setIn),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-massopt-keep': '', onClick: keep }, t('massopt.keep')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-massopt-add': '', onClick: () => file.click() }, t('massopt.file')), file));
    if (!S.sets.length) kids.push(el('p', { className: 'bc-muted', 'data-massopt-empty': '' }, t('massopt.none')));
    for (const s of S.sets) {
      kids.push(el('h4', { className: 'bc-massopt-set', 'data-massopt-setname': '' }, s.set === DEFAULT_SET ? t('massopt.set.default') : s.set, ' ', el('span', { className: 'bc-sub' }, t('massopt.count', { n: s.options.length }))));
      kids.push(el('div', { className: 'bc-massopt-scroll' }, el('table', { className: 'bc-massopt-table' },
        el('thead', {}, el('tr', {}, ...['option', 'floors', 'foot', 'gross', 'volume'].map((k) => el('th', { scope: 'col' }, t('massopt.col.' + k))), el('th', {}, ''))),
        el('tbody', {}, s.options.map((o) => row(o))))));
      if (!s.options.some((o) => o.current)) kids.push(el('p', { className: 'bc-muted' }, t('massopt.nocurrent')));
    }
    if (S.sets.some((s) => s.options.length > 1)) {
      const sw = el('input', { type: 'checkbox', 'data-massopt-hide': '' });
      sw.checked = S.hide;
      sw.addEventListener('change', () => { S.hide = sw.checked; try { localStorage.setItem(HIDE_KEY, S.hide ? '1' : '0'); } catch (e) { /* private window */ } applyHide(); });
      kids.push(el('label', { className: 'bc-check' }, sw, ' ' + t('massopt.hide')));
    }
    if (S.sets.length) kids.push(el('p', { className: 'bc-muted' }, t('massopt.note')));
    box.replaceChildren(...kids);
    applyHide();
  }
  // an edit, undo, redo or open elsewhere: the list follows while its section is open (bimcraft.js renderChanges calls changed())
  const changed = () => { if (box.closest('details')?.open) { try { render(); } catch (e) { /* nothing to show yet */ } } else { read(); applyHide(); } };
  box.closest('details')?.addEventListener('toggle', (ev) => { if (ev.target.open) render(); });
  window.addEventListener('bimcraft-units', () => { if (box.closest('details')?.open) render(); });
  const api = { render, changed, sets: () => { read(); return S.sets; }, state: S, fromFile };
  if (typeof window !== 'undefined') window.bimcraftMassOptions = api;
  return api;
}
