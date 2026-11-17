/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-typeswap-ui.js: the Swap type list on the picked walls (0.10 BK.7, BK.16; session bk-typeswap-10), through model-ui.js extend();
 * mounted by wall-tools-ui.js. The rules are lib/walls (dev/walls/typeswap.js, lod.js), the op wall-typeswap.js.
 *
 *   Where it lives: INSIDE the Properties panel, in the picked walls' own block (model-ui.js asks typeSwapBlock(guids) and puts the answer
 *     in a wide row under Wall type). So it is laid out by whatever holds Properties: the right panel's tab, or the Properties palette of a
 *     workspace layout, docked, floating or in its own window. It never sits over the drawing, the Draw bar or another panel.
 *   Closed: one button, Swap type…. Edit › Walls › Swap type opens it too (and brings Properties up); with no wall picked it says to pick
 *     walls first and the list shows as soon as walls are picked.
 *   Open: the picked walls and their types, Find (a name, a thickness, "lod 300"), every wall type with its thickness and LOD tag, the
 *     picked walls' types marked. A click on a type swaps every picked wall to it: ONE undo step. It is not a dialog.
 *   What moved: under the list after a swap, while one of the swapped walls is still picked and still has that type (walls changed, thickness, LOD, walls that
 *     moved to keep their location line, doors and windows hosted again, each room whose area changed with its area before and after).
 *     The status bar says it in one line. The report only tells: nothing is refused because of it.
 *   Properties › Wall type (one wall or many) goes through the same swap.
 *   Settings › BimCraft › Walls › Show each wall type's LOD in the wall schedule: a last column LOD in Walls by type (off by default).
 * Test hook: window.bimcraftTypeSwap = { state, open, close, swap, list }.
 */
import { swapWallType, swapList, reportText, statusText, addLodColumn } from './wall-typeswap.js';
import { planSwap } from './walls/typeswap.js';
import { isLod, lodLabel, lodBand } from './walls/lod.js';
import { ModelWriter } from './model-write.js';
import { lenMark } from './model-units.js';
import { el } from './ui-util.js';

export function mountTypeSwap(modelUi) {
  let A = null;
  const R = { open: false, query: '', report: null, lines: [], reportFor: [], runs: 0 };
  const t = (k, v) => A.t(k, v);
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const picked = () => modelUi.wallsPicked?.() || [];
  const list = (query = R.query) => { const w = W(); return w ? swapList(w, picked(), query) : []; };
  let ui = null;   // the nodes of the block now in Properties (made again each time Properties is drawn)

  /** Swap these walls to the type: one undo step; the report goes to the status bar and the block. → true when a change was made. */
  function swap(guids, key, meta = null) {
    const all = A.S.data?.walls || [], plan = planSwap(all, guids, key);
    if (!plan.change.length) { A.host.status(t(guids.length ? 'typeswap.already' : 'typeswap.pickfirst'), !guids.length); return false; }
    const run = swapWallType(guids, key);
    A.commit((ed) => { const r = run(ed); told(r.swap, guids); return r; }, { label: t('typeswap.title'), verb: t('model.verb.changed'), ...(meta || {}), onError: (e, why) => A.host.status(t('typeswap.refused', { why }), true) });
    return true;
  }
  function told(report, guids) {
    R.report = report; R.lines = reportText(report, { units: A.units() }); R.reportFor = [...guids]; R.runs++;
    // after the plan's own status line for the change: the report's line stays
    setTimeout(() => { try { A.host.status(statusText(report) + (R.open ? '' : ' ' + t('typeswap.seepanel'))); render(); } catch (e) { console.error(e); } }, 0);
  }

  /** What Properties shows for the picked walls: the button, or the open list with the last report. */
  function block(guids) {
    if (!R.open) { ui = null; return el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-mp-swap': '', onClick: () => show(true) }, t('typeswap.open')); }
    const close = el('button', { type: 'button', className: 'shell-x', 'data-typeswap-close': '', 'aria-label': t('typeswap.close'), title: t('typeswap.close'), onClick: () => show(false) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    const find = el('input', { className: 'bc-input', type: 'search', 'data-typeswap-find': '', placeholder: t('typeswap.find'), 'aria-label': t('typeswap.find'), value: R.query });
    find.addEventListener('input', () => { R.query = find.value; render(); });
    const pickedLine = el('p', { className: 'bc-swap-picked', 'data-typeswap-picked': '' });
    const rows = el('ul', { className: 'bc-swap-list', 'data-typeswap-list': '', 'aria-label': t('typeswap.types') });
    const report = el('div', { className: 'bc-swap-report', 'data-typeswap-report': '', role: 'status', 'aria-live': 'polite', hidden: true });
    const box = el('section', { className: 'bc-swap', 'data-typeswap': '', 'aria-label': t('typeswap.title') },
      el('div', { className: 'bc-swap-head' }, el('h3', { className: 'bc-swap-title' }, t('typeswap.title')), close), pickedLine, find, rows, report);
    box.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); show(false); } });
    ui = { box, find, pickedLine, rows, report };
    render(guids);
    return box;
  }
  function render(guids = picked()) {
    if (!ui || !R.open) return;
    const all = list(''), shown = list();
    const cur = all.filter((r) => r.current > 0);
    ui.pickedLine.textContent = !guids.length ? t('typeswap.pickfirst')
      : t('typeswap.picked', { n: guids.length }) + ' ' + cur.map((r) => r.current + ' × ' + r.label).join(', ');
    ui.rows.replaceChildren(...shown.map((r) => {
      const onlyThis = guids.length > 0 && r.current === guids.length;
      const b = el('button', { type: 'button', className: 'bc-swap-row' + (r.current ? ' is-current' : ''), 'data-typeswap-key': r.key, disabled: !guids.length || onlyThis, 'aria-label': r.label, title: !guids.length ? t('typeswap.pickfirst') : onlyThis ? t('typeswap.already') : t('typeswap.swapto', { name: r.label }), onClick: () => swap(picked(), r.key) },
        el('span', { className: 'bc-swap-name' }, r.name),
        el('span', { className: 'bc-swap-t' }, lenMark(r.t, A.units())),
        isLod(r.lod) ? el('span', { className: 'bc-swap-lod is-' + lodBand(r.lod), 'data-lod': String(r.lod) }, lodLabel(r.lod)) : el('span', { className: 'bc-swap-lod is-none', 'data-lod': '' }, t('typeswap.nolod')),
        r.current ? el('span', { className: 'bc-swap-cur' }, t('typeswap.now', { n: r.current })) : null);
      return el('li', {}, b);
    }));
    if (!shown.length) ui.rows.append(el('li', { className: 'bc-muted' }, t('typeswap.nomatch')));
    // the report of a swap of walls that are still picked and still have that type (after Undo it is no longer true, so it goes)
    const now = new Map((A.S.data?.walls || []).map((x) => [x.guid, x.typeKey]));
    const mine = !!R.report && !R.report.nothing && R.reportFor.some((g) => guids.includes(g) && now.get(g) === R.report.to.key);
    ui.report.hidden = !mine;
    if (mine) ui.report.replaceChildren(el('h4', { className: 'bc-swap-h' }, t('typeswap.moved')), el('ul', {}, ...R.lines.map((l) => el('li', { 'data-rep': l.key.replace('typeswap.rep.', '') }, l.text))));
  }
  function show(on) {
    if (on && !A.ed()) return;
    R.open = !!on;
    if (on) {
      const tab = A.root.querySelector('[data-rtab="props"]');   // bring Properties up (the right panel's tab; a workspace layout shows its own palette)
      if (tab && tab.getAttribute('aria-selected') !== 'true' && tab.offsetParent !== null) tab.click();
      if (!picked().length) A.host.status(t('typeswap.pickfirst'));
    }
    A.renderProps();
    if (on && ui?.find.isConnected) ui.find.focus({ preventScroll: true });
  }

  A = modelUi.extend({
    refresh() { render(); },
    openTypeSwap() { show(true); return true; },
    typeSwapBlock(guids) { return block(guids); },
    /** Properties › Wall type: the same swap (model-ui.js asks; true = it was handled here). */
    swapType(guids, key, meta) { swap(guids, key, meta); return true; },
    /** Settings › BimCraft › Walls: the type's LOD as a last column of the Walls by type schedule. */
    scheduleColumns(all) { if (R.lodCol) addLodColumn(all, A.S.data?.walls || [], { label: t('typeswap.sch.lod') }); },
  });
  const STORE = 'bimcraft.walls';   // the Walls settings' record (wall-tools-ui.js, wall-joinstyle-ui.js): `lodcol` is ours
  const readStore = () => { try { const v = JSON.parse(localStorage.getItem(STORE) || '{}'); return v && typeof v === 'object' ? v : {}; } catch (e) { return {}; } };
  const box = document.querySelector('[data-walls-settings] [name="bcWallLodCol"]');
  R.lodCol = readStore().lodcol === 'on';
  if (box) box.checked = R.lodCol;
  box?.addEventListener('change', () => {
    R.lodCol = box.checked;
    try { const s = readStore(); s.lodcol = R.lodCol ? 'on' : 'off'; localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) { /* this tab keeps it */ }
    try { A.refresh(); } catch (e) { /* the plan is not up yet */ }
  });
  A.root.querySelector('[data-wall-swaptype]')?.addEventListener('click', () => {
    show(true);
    for (const m of A.root.querySelectorAll('[data-wall-tools]')) if (m.open) m.open = false;
  });
  if (typeof window !== 'undefined') window.bimcraftTypeSwap = { state: R, open: () => show(true), close: () => show(false), swap, list };   // for tests
  return { state: R };
}
