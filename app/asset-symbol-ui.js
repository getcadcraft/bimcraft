/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asset-symbol-ui.js — link a placed element to a symbol and choose what a view shows (0.10 booklet rows BK.23 and BK.22, session
 * bk-r3-types-10). A thin adapter over asset-symbol.js (the links and the views' forms in the IFC), lib/symbols symbol-link.js (the
 * rule) and room-lookup.js (the room of a placed thing).
 *
 *   mountAssetSymbols(modelUi, { registry }) → { state, open(), links() }      registry: symbols-ui.js bimcraftSymbolSets().registry
 *
 * Where a person finds it: Build › Symbol link [data-symlink-open] (command build.symbollink, typed SYMBOLLINK). The panel
 * [data-symlink] (not a dialog: the plan stays usable; Esc or Close shuts it) follows the pick:
 *   the picked elements and what they are linked to [data-symlink-state]; a symbol list by set [data-symlink-symbol]; Link
 *   [data-symlink-link], Remove the link [data-symlink-unlink], Turn the symbol 90° [data-symlink-turn];
 *   "This view shows linked elements as" [data-symlink-view]: their plan form | their symbol (a services layout), kept per view in the file.
 * In a view set to symbols, a linked element's plan form is left out of the plan and its symbol is drawn in its place, under the SAME
 * key: a click picks the element. 3D always shows the body. Schedules › Linked symbols lists each linked element once, with its room.
 * Test hook: window.bimcraftSymbolLinks = { state, open, close, links, link(ids, set, key), unlink(guids), setView(form), form() }.
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { symbolPlan } from './symbol-sets.js';
import { symbolScale } from './res-elec.js';
import { formFor } from './symbol-link.js';
import { readSymbolLinks, linkSymbol, unlinkSymbol, turnSymbol, readViewForms, setViewForm, viewKeyOf, linkedSchedule } from './asset-symbol.js';
import { roomIndex } from './room-lookup.js';

export function mountAssetSymbols(modelUi, { registry }) {
  let A = null, panel = null, last = '';
  const R = { links: [], forms: {}, open: false };
  const t = (k, v) => A.t(k, v);
  const W = () => { const e = A.ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const levelGuid = () => A.S.data?.levels.find((l) => l.id === A.S.level)?.guid || '';
  const viewKey = () => (A.S.on && levelGuid() ? viewKeyOf(A.S.kind, levelGuid(), A.S.callout) : null);
  const form = () => { const k = viewKey(); return k && R.forms[k] === 'symbols' ? 'symbols' : 'plan'; };
  const symName = (l) => { const s = registry.find(l.set, l.key); return s ? (s.nameKey ? t(s.nameKey) : s.name) : l.key; };
  const pickedIds = () => { const k = A.kb(); return A.selectedKeys().map((x) => x - k).filter((id) => id > 0); };
  const commit = (run, label) => { let why = null; A.commit(run, { label, verb: t('model.verb.changed'), onError: (e, text) => { why = e.key ? t(e.key) : text || e.message; } }); if (why) A.host.status(why, true); return !why; };
  /** The room of a linked element now (live: the walls may have moved since the file's value was written). */
  let rooms = null;
  const roomOf = (l) => {
    if (!rooms || rooms.snap !== A.S.data) rooms = { snap: A.S.data, ix: roomIndex(A.S.data?.derived?.spaces || [], (st) => A.loopsOf(st)) };
    return rooms.ix.of(l.storey, l.at)?.label || '';
  };

  function link(idsIn, set, key) { const n = idsIn.length; if (commit(linkSymbol(idsIn, { set, key }), t('symlink.title'))) A.host.status(t('symlink.linked', { n, name: symName({ set, key }) })); }
  function unlink(guids) { if (commit(unlinkSymbol(guids), t('symlink.title'))) A.host.status(t('symlink.unlinked', { n: guids.length })); }
  function setView(f) { const k = viewKey(); if (!k) { A.host.status(t('symlink.view.none'), true); return; } if (commit(setViewForm(k, f), t('symlink.title'))) A.host.status(t('symlink.view.set.' + f)); }

  function render() {
    if (!panel || panel.hidden) return;
    const ids = pickedIds(), mine = R.links.filter((l) => ids.includes(l.id));
    last = A.selectedKeys().join(',');   // what this drawing of the panel shows (the pick is briefly empty while a change reloads the model)
    const state = panel.querySelector('[data-symlink-state]');
    state.replaceChildren(el('p', {}, ids.length ? t('symlink.picked', { n: ids.length }) : t('symlink.picked.none')),
      ...(ids.length ? [el('ul', { className: 'bc-counts' }, ...(mine.length ? mine.map((l) => el('li', { 'data-symlink-item': String(l.id) }, el('span', {}, (l.name || l.cls) + ': ' + t('symlink.state', { name: symName(l) })), el('span', { className: 'n' }, roomOf(l)))) : [el('li', {}, t('symlink.state.none'))]))] : []),   // i18n-ignore: "name: state"
      el('p', { className: 'bc-muted', 'data-symlink-count': String(R.links.length) }, t('symlink.count', { n: R.links.length })));
    panel.querySelector('[data-symlink-link]').disabled = !ids.length;
    panel.querySelector('[data-symlink-unlink]').disabled = !mine.length;
    panel.querySelector('[data-symlink-turn]').disabled = !mine.length;
    const vs = panel.querySelector('[data-symlink-view]');
    vs.disabled = !viewKey(); vs.value = form();
  }
  function build() {
    const sym = el('select', { className: 'bc-mb-select', 'data-symlink-symbol': '', 'aria-label': t('symlink.symbol') }, el('option', { value: '' }, t('symlink.choose')),
      ...registry.list().map((set) => el('optgroup', { label: set.nameKey ? t(set.nameKey) : set.name }, ...set.symbols.filter((s) => s.kind === 'symbol').map((s) => el('option', { value: set.id + '/' + s.key }, s.nameKey ? t(s.nameKey) : s.name)))));
    const view = el('select', { className: 'bc-mb-select', 'data-symlink-view': '', 'aria-label': t('symlink.view') }, el('option', { value: 'plan' }, t('symlink.view.plan')), el('option', { value: 'symbols' }, t('symlink.view.symbols')));
    view.addEventListener('change', () => setView(view.value));
    const btn = (attr, text, fn) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', [attr]: '', onClick: fn }, text);
    panel = el('section', { className: 'bc-sec bc-symlink', 'data-symlink': '', 'aria-label': t('symlink.title'), hidden: true },
      el('h2', { className: 'bc-h' }, t('symlink.title')),
      el('div', { 'data-symlink-state': '', role: 'status', 'aria-live': 'polite' }),
      el('label', { className: 'bc-dlg-field' }, t('symlink.symbol'), sym),
      el('p', { className: 'bc-lib-actions' },
        btn('data-symlink-link', t('symlink.link'), () => { const [set, key] = sym.value.split('/'); if (!key) { A.host.status(t('symlink.err.symbol'), true); return; } link(pickedIds(), set, key); }),
        btn('data-symlink-unlink', t('symlink.unlink'), () => { const ids = pickedIds(); unlink(R.links.filter((l) => ids.includes(l.id)).map((l) => l.guid)); }),
        btn('data-symlink-turn', t('symlink.turn'), () => { const ids = pickedIds(); commit(turnSymbol(R.links.filter((l) => ids.includes(l.id)).map((l) => l.guid)), t('symlink.title')); })),
      el('label', { className: 'bc-dlg-field' }, t('symlink.view'), view),
      el('p', { className: 'bc-lib-actions' }, btn('data-symlink-close', t('symlink.close'), () => show(false))));
    panel.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); show(false); } });
    // a section of the left panel, under Schedules: it never covers the plan
    const home = A.root.querySelector('[data-msched-sec]');
    if (home) home.after(panel); else A.root.append(panel);
  }
  function show(on) {
    if (!panel) build();
    R.open = !!on; panel.hidden = !on;
    if (on) {
      render();
      // the left panel's sections fold (the shell adds the caret to the heading): open ours, now and once the shell has dressed a new section
      const unfold = () => { const h = panel.querySelector(':scope > h2'); if (h?.getAttribute('aria-expanded') === 'false') h.click(); panel.scrollIntoView?.({ block: 'nearest' }); };
      unfold(); setTimeout(unfold, 120);
    }
  }

  A = modelUi.extend({
    refresh() {
      const w = W();
      try { R.links = w ? readSymbolLinks(w) : []; R.forms = w ? readViewForms(w) : {}; } catch (e) { R.links = []; R.forms = {}; }
      const sel = A.root.querySelector('[data-msched-kind]');
      const opt = sel?.querySelector('option[value="linked"]');
      if (sel && R.links.length && !opt) sel.append(el('option', { value: 'linked', 'data-symlink-sched': '' }, t('symlink.sch.title')));
      render();
    },
    /** Runs after the other tools drew their elements: in a view set to symbols, a linked element's plan form gives way to its symbol. */
    scene(scene) {
      const view = { kind: A.S.callout ? 'callout' : A.S.kind || 'plan', form: form() };
      const k = A.kb(), sc = symbolScale(A.units());
      const here = R.links.filter((l) => l.storey === A.S.level && formFor(view, l) === 'symbol');
      if (!here.length) return;
      const keys = new Set(here.map((l) => k + l.id));
      for (const part of ['symbols', 'cut', 'below', 'above']) if (Array.isArray(scene[part])) scene[part] = scene[part].filter((x) => !keys.has(x.key));
      for (const l of here) {
        const s = registry.find(l.set, l.key);
        const g = s && symbolPlan(s, l.at, l.angle, sc);
        if (g) scene.symbols.push({ key: k + l.id, lines: g.lines, arcs: g.arcs, thin: g.thin, poly: g.poly, linked: true });
        else scene.symbols.push({ key: k + l.id, lines: [[l.at[0] - 150, l.at[1] - 150, l.at[0] + 150, l.at[1] + 150], [l.at[0] - 150, l.at[1] + 150, l.at[0] + 150, l.at[1] - 150]], arcs: [], thin: [], poly: [[l.at[0] - 150, l.at[1] - 150], [l.at[0] + 150, l.at[1] - 150], [l.at[0] + 150, l.at[1] + 150], [l.at[0] - 150, l.at[1] + 150]], linked: true });   // its set is not added: a cross marks the place
      }
    },
    schedules() { return R.links.length ? { linked: linkedSchedule(R.links, { levels: A.S.data?.levels || [], t: A.t, nameOf: symName, roomOf }) } : {}; },
    scheduleKeys(kind, i) { if (kind !== 'linked') return []; const sc = linkedSchedule(R.links, { levels: A.S.data?.levels || [], t: A.t, nameOf: symName, roomOf }); const l = R.links.find((x) => (x.name || '') === sc.rows[i]?.[1] && symName(x) === sc.rows[i]?.[0]); return l ? [A.kb() + l.id] : []; },
  });
  for (const b of A.root.querySelectorAll('[data-symlink-open]')) b.addEventListener('click', () => show(true));   // always opens and unfolds it (Close or Esc shuts it)
  // the panel follows the pick
  const tick = () => { if (!R.open) return; const sig = A.selectedKeys().join(','); if (sig !== last) { last = sig; render(); } };
  if (typeof window !== 'undefined') {
    window.setInterval(tick, 300);
    window.bimcraftSymbolLinks = { state: R, open: () => show(true), close: () => show(false), links: () => R.links, link, unlink, setView, form };   // for tests
  }
  return { state: R, open: () => show(true), links: () => R.links };
}
