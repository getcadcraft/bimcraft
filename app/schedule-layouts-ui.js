/* SPDX-License-Identifier: Apache-2.0 */
/**
 * schedule-layouts-ui.js — the Schedules panel's layout, set-ups, exports and figure links (0.10 BK.39, BK.149, BK.142, BK.29;
 * session bk-r3-schedules-10). A thin adapter through the plan's extend(): the work is in schedule-layouts.js, schedule-data.js,
 * finishes-model.js (no DOM) and tables/table.js (the one layout engine).
 *
 * What it adds to the panel:
 *   - four finish schedules (Finishes by room, by wall, by zone, Finish quantities) and the Room finishes dialog (finishes-ui.js)
 *   - Group by and Totals for the schedule shown, a column read from a property, Save as a set-up (kept in the file; it joins the
 *     Schedules list), Remove
 *   - the office standard (Default Policies) on every schedule that does not state its own grouping, totals, title or heading case
 *   - Excel (.xlsx through the one writer), Copy for Google Sheets (tab-separated text on the clipboard: paste it into a sheet;
 *     nothing is sent to Google), and Download CSV following the layout
 *   - every line and figure selects the elements it came from (a cell's own elements when it has them, else its row's)
 *
 *   mountScheduleLayouts(modelUi, { status }) → { state(), laid(), openFinishes() }
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { tableCsv } from './ifc-qto.js';
import { onDefaults } from './defaults-hook.js';
import { measureCtx } from './quantity-schedules.js';
import { readMethodSetting } from './quantity-method.js';
import { toCsv, toTsv, figureIds } from './tables/table.js';
import { writeXlsx } from './tables/xlsx.js';
import { readSetups, saveSetupsOp, setupId, withProps, layOut, officeStandard, sheetOf, elementsOf } from './schedule-layouts.js';
import { finishSet, FINISH_KEYS, withTables, withSetups, underStandard, projectName } from './schedule-data.js';
import { openFinishesDialog } from './finishes-ui.js';
import { openSpecDialog } from './spec-ui.js';
import { specSections, specMarkdown } from './spec-model.js';
import { grossSideReader } from './quantity-schedules.js';
import { readMaterials } from './project-materials.js';
import { fmtArea, fmtFine } from './model-units.js';
import { registerDocField, noteFigures, mdTable, mdEscape } from './doc-fields.js';

export function mountScheduleLayouts(modelUi, { status = () => {} } = {}) {
  let A = null;
  const P = { panel: new Map(), props: new Map(), all: null, last: null, pending: null, controls: null, memo: null };
  const t = (k, v) => A.t(k, v);
  const W = () => { const ed = A.ed(); return ed ? new ModelWriter(ed.W, ed.api, ed.mid) : null; };
  const ctx = () => ({ w: W(), units: A.units(), t: A.t, project: projectName(W()), standard: officeStandard() });
  onDefaults(() => { P.memo = null; try { if (A?.S.on) A.refresh(); } catch (e) { /* the plan is not up yet */ } });

  // the four finish schedules: one reading per model change
  function finishes() {
    const ed = A.ed(), snap = A.S.data;
    if (!ed || !snap) return {};
    const U = A.units();
    if (P.memo && P.memo.snap === snap && P.memo.U === U && P.memo.ed === ed) return P.memo.out;
    const w = W(), loops = new Map();
    const loopsFor = (id) => { if (!loops.has(id)) { let L = null; try { L = A.loopsOf(id); } catch (e) { L = null; } loops.set(id, L); } return loops.get(id); };
    let out = {};
    try { out = finishSet(w, snap, loopsFor, { units: U, t: A.t, measure: measureCtx(snap, readMethodSetting(w).method, A.t) }); } catch (e) { console.error(e); out = {}; }
    P.memo = { snap, U, ed, out };
    return out;
  }
  const keysOf = (ids) => { const k = A.kb(); return (ids || []).map((id) => k + id); };
  const select = (ids) => { if (ids && ids.length) A.host.select(keysOf(ids)); };

  // ---- the schedule as laid out now (the set-up's layout, then what the panel's two lists say, then the office standard)
  function laidOf(kind, sc) {
    if (!sc || !sc.table) return null;
    const c = ctx(), own = P.panel.get(kind) || {}, props = P.props.get(kind) || [];
    const p = props.length ? withProps(sc.table, props, c.w, { yes: t('sched.yes'), no: t('sched.no'), varies: t('sched.varies') }) : { table: sc.table, empty: [] };
    const base = { ...(sc.setup?.layout || {}) };
    if (props.length && base.columns) base.columns = [...base.columns, ...p.table.cols.slice(sc.table.cols.length).map((x) => x.id)];
    const r = layOut(p.table, { ...base, ...own }, c);
    return { ...r, table: p.table, empty: p.empty, kind, setup: sc.setup || null, active: !!(sc.setup || props.length || Object.keys(own).length || Object.keys(r.from).length) };
  }

  function draw(box, L, sc) {
    const laid = L.laid, n = laid.head.length;
    const cell = (tag, text, li, j, extra = {}) => {
      const td = el(tag, { ...extra, 'data-fig': li + ':' + j }, text);
      td.addEventListener('click', (e) => { e.stopPropagation(); select(figureIds(laid, li, j)); });
      return td;
    };
    const body = [], foot = [];
    laid.lines.forEach((l, li) => {
      if (l.kind === 'group') { const tr = el('tr', { className: 'bc-sch-group', 'data-sched-group-row': '' }, el('th', { colSpan: n, scope: 'colgroup' }, l.label)); tr.addEventListener('click', () => select(l.ids)); body.push(tr); return; }
      const cells = l.cells.concat(Array(Math.max(0, n - l.cells.length)).fill(''));
      const tr = el('tr', l.kind === 'row' ? { 'data-msched-row': String(l.row) } : { className: 'bc-sch-sub', ['data-sched-' + l.kind]: '' }, cells.map((c, j) => cell('td', c, li, j)));
      tr.addEventListener('click', () => select(l.ids));
      (l.kind === 'total' ? foot : body).push(tr);
    });
    const from = Object.keys(L.from);
    const std = from.length ? el('p', { className: 'bc-muted', 'data-sched-standard': from.join(' ') }, t('sched.standard.line', { what: from.map((k) => t('sched.standard.' + k.toLowerCase())).join(', ') })) : null;
    const empty = L.empty.length ? el('p', { className: 'bc-muted', 'data-sched-empty': '' }, t('sched.prop.empty', { list: L.empty.join(', ') })) : null;
    const title = L.active && laid.title ? el('p', { className: 'bc-sch-title', 'data-sched-title': '' }, el('strong', {}, laid.title)) : null;
    box.replaceChildren(...[sc.note ? el('p', { className: 'bc-muted', 'data-schedule-note': '' }, sc.note) : null, std, empty, title,
      laid.count ? el('table', { 'data-sched-laid': '' }, el('thead', {}, el('tr', {}, laid.head.map((h) => el('th', {}, h)))), el('tbody', {}, body), foot.length ? el('tfoot', {}, foot) : null) : el('p', { className: 'bc-muted' }, t('model.sch.none'))].filter(Boolean));
  }

  // ---- the controls under the Schedules list
  function controls(box) {
    if (P.controls && P.controls.isConnected) return P.controls;
    const sel = (name, label) => el('label', { className: 'bc-sched-ctl' }, el('span', {}, label), el('select', { className: 'bc-mb-select', ['data-sched-' + name]: '', 'aria-label': label }));
    const btn = (name, icon, label, fn) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', ['data-sched-' + name]: '', onClick: fn }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }), ' ', label);   // i18n-ignore: a class name
    const name = el('input', { type: 'text', className: 'bc-input', 'data-sched-name': '', maxLength: 120, placeholder: t('sched.save.placeholder'), 'aria-label': t('sched.save.name'), autocomplete: 'off' });
    const prop = el('input', { type: 'text', className: 'bc-input', 'data-sched-prop': '', maxLength: 100, placeholder: t('sched.prop.placeholder'), 'aria-label': t('sched.prop.label'), autocomplete: 'off' });
    for (const i of [name, prop]) i.addEventListener('keydown', (e) => e.stopPropagation());
    name.addEventListener('keydown', (e) => { if (e.key === 'Enter') save(); });
    prop.addEventListener('keydown', (e) => { if (e.key === 'Enter') addProp(); });
    // Group by and Totals sit above the table; the rest goes under Download CSV, so the schedule itself stays at the top of the panel
    const top = el('div', { className: 'bc-sched-layout', 'data-sched-top': '' }, el('div', { className: 'bc-sched-row' }, sel('group', t('sched.group')), sel('totals', t('sched.totals'))));
    const root = el('div', { className: 'bc-sched-layout', 'data-sched-layout': '' },
      el('div', { className: 'bc-sched-row' }, prop, btn('prop-add', 'plus-lg', t('sched.prop.add'), () => addProp())),
      el('div', { className: 'bc-sched-row' }, name, btn('save', 'bookmark-plus', t('sched.save'), () => save()), btn('remove', 'x-lg', t('sched.remove'), () => remove())),
      el('div', { className: 'bc-sched-row' }, btn('xlsx', 'file-earmark-spreadsheet', t('sched.xlsx'), () => exportXlsx()), btn('sheets', 'clipboard', t('sched.sheets'), () => copySheets()),
        el('a', { className: 'btn-line btn-sm-cc', href: 'https://sheets.new', target: '_blank', rel: 'noopener noreferrer', 'data-sched-sheets-new': '' }, t('sched.sheets.new'))),   // i18n-ignore: link attributes
      el('p', { className: 'bc-muted', 'data-sched-sheets-note': '' }, t('sched.sheets.note')),
      el('div', { className: 'bc-sched-row' }, btn('finishes', 'bricks', t('fin.open'), () => openFinishes()), btn('spec', 'card-text', t('spec.open'), () => openSpec())));
    top.querySelector('[data-sched-group]').addEventListener('change', (e) => setPanel('groupBy', e.target.value));
    top.querySelector('[data-sched-totals]').addEventListener('change', (e) => setPanel('totals', e.target.value));
    box.before(top);
    (A.root.querySelector('[data-msched-csv]') || box).after(root);
    P.controls = root; P.top = top;
    return root;
  }
  const kindNow = () => A.S.sched;
  function setPanel(field, value) {
    const k = kindNow(), own = { ...(P.panel.get(k) || {}) };
    if (value === '') delete own[field]; else own[field] = field === 'groupBy' && value === 'none' ? null : value;
    if (Object.keys(own).length) P.panel.set(k, own); else P.panel.delete(k);
    rerender();
  }
  const rerender = () => { const sel = A.root.querySelector('[data-msched-kind]'); if (sel) sel.dispatchEvent(new Event('change')); };
  function addProp() {
    const input = P.controls?.querySelector('[data-sched-prop]'), v = input?.value.trim();
    if (!v) return;
    const k = kindNow(), list = (P.props.get(k) || []).slice();
    if (!list.some((p) => p.name.toLowerCase() === v.toLowerCase())) list.push({ name: v });
    P.props.set(k, list); input.value = '';
    rerender();
  }
  function fillControls(L, sc) {
    const C = P.controls;
    if (!C) return;
    for (const n of [P.top, ...C.querySelectorAll('[data-sched-prop], [data-sched-prop-add], [data-sched-name], [data-sched-save], [data-sched-xlsx], [data-sched-sheets]')]) n.hidden = !L;   // a list that is not rows of elements (the legend): nothing to lay out or export here; Room finishes and Specification stay
    if (!L) { C.querySelector('[data-sched-remove]').hidden = true; return; }
    const g = P.top.querySelector('[data-sched-group]'), tt = P.top.querySelector('[data-sched-totals]'), own = P.panel.get(L.kind) || {};
    const opt = (v, text) => el('option', { value: v }, text);
    g.replaceChildren(opt('', t('sched.asset')), opt('none', t('sched.group.none')), ...L.table.cols.map((c, j) => opt(c.id, L.table.head[j])));
    g.value = !('groupBy' in own) ? '' : own.groupBy === null ? 'none' : own.groupBy;
    tt.replaceChildren(opt('', t('sched.asset')), opt('none', t('sched.totals.none')), opt('grand', t('sched.totals.grand')), opt('groups', t('sched.totals.groups')));
    tt.value = own.totals || '';
    const name = C.querySelector('[data-sched-name]');
    if (document.activeElement !== name && name.dataset.for !== L.kind) { name.value = sc.setup ? sc.setup.name : ''; name.dataset.for = L.kind; }
    C.querySelector('[data-sched-remove]').hidden = !sc.setup;
  }
  function save() {
    const L = P.last, input = P.controls?.querySelector('[data-sched-name]'), w = W();
    if (!L || !w) return;
    const name = (input.value || '').trim();
    if (!name) { status(t('sched.save.noname'), true); input.focus(); return; }
    const setups = readSetups(w), same = setups.find((s) => s.name.toLowerCase() === name.toLowerCase());
    const cur = A.S.data && P.all ? P.all[L.kind] : null;
    const src = cur?.setup ? cur.setup.source : L.kind;
    const props = [...(cur?.setup?.props || []), ...(P.props.get(L.kind) || [])];
    const layout = { ...(cur?.setup?.layout || {}), ...(P.panel.get(L.kind) || {}) };
    if (layout.columns && (P.props.get(L.kind) || []).length) layout.columns = [...layout.columns, ...L.table.cols.slice(-(P.props.get(L.kind) || []).length).map((c) => c.id)];
    const id = same ? same.id : setupId(name, new Set(setups.map((s) => s.id)));
    const setup = { id, name, source: src, layout, props };
    P.pending = 'setup:' + id;
    P.panel.delete(L.kind); P.props.delete(L.kind); P.panel.delete(P.pending); P.props.delete(P.pending);
    A.commit(saveSetupsOp(same ? setups.map((s) => (s.id === id ? setup : s)) : [...setups, setup]), { label: t('sched.undo.save', { name }) });
    status(t(same ? 'sched.saved.again' : 'sched.saved', { name }));
  }
  function remove() {
    const cur = P.all?.[kindNow()], w = W();
    if (!cur?.setup || !w) return;
    P.pending = cur.setup.source;
    A.commit(saveSetupsOp(readSetups(w).filter((s) => s.id !== cur.setup.id)), { label: t('sched.undo.remove', { name: cur.setup.name }) });
    status(t('sched.removed', { name: cur.setup.name }));
  }
  const fileBase = () => String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '') + ' ' + String(P.last.laid.title || '').toLowerCase().replace(/[\\/:*?"<>|]+/g, ' ').trim();
  async function exportXlsx() {
    if (!P.last) return;
    const bytes = await writeXlsx([sheetOf(P.last.laid, A.units()), elementsOf(P.last.laid, W(), A.t)], { title: P.last.laid.title, creator: 'BimCraft' });   // i18n-ignore: the program's name in the file
    A.host.download(fileBase() + '.xlsx', bytes, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    status(t('sched.xlsx.done', { file: fileBase() + '.xlsx' }));
  }
  async function copySheets() {
    if (!P.last) return;
    const text = toTsv(P.last.laid);
    P.lastTsv = text;
    try { await navigator.clipboard.writeText(text); status(t('sched.sheets.copied', { n: P.last.laid.lines.length })); }
    catch (e) { A.host.download(fileBase() + '.tsv', text, 'text/tab-separated-values'); status(t('sched.sheets.file', { file: fileBase() + '.tsv' })); }
  }
  function openFinishes() {
    openFinishesDialog({ A, t: A.t, status, writer: W, selectedGuids: () => { const w = W(), k = A.kb(); return A.selectedKeys().map((key) => { try { return w.guidOf(key - k); } catch (e) { return null; } }).filter(Boolean); } });
  }
  // ---- the specification (spec-model.js): a section per type in use, facts from the model, the person's own text
  function sections() {
    const w = W(), snap = A.S.data;
    if (!w || !snap) return null;
    const U = A.units(), fin = finishes();
    let mats = []; try { mats = readMaterials(w); } catch (e) { mats = []; }
    const byId = new Map(mats.map((m) => [m.id, m.name]));
    return specSections(w, snap, { t: A.t, fmtLen: (mm) => fmtFine(mm, U), fmtArea: (a) => fmtArea(a, U), finishes: fin.doc || null, finishRows: fin.data?.result || null,
      sideOf: grossSideReader(w), measure: measureCtx(snap, readMethodSetting(w).method, A.t), matName: (l) => byId.get(l?.materialId) || null });
  }
  const openSpec = () => openSpecDialog({ A, t: A.t, status, sections });
  // ---- Documents from the model: {{schedule <key or set-up name>}} and {{specification}} (doc-fields.js)
  const norm = (x) => String(x).toLowerCase().replace(/[^a-z0-9]/g, '');
  registerDocField('schedule', (arg) => {
    if (!A.ed() || !A.S.data) return null;
    const all = A.schedules(), want = norm(arg);
    const key = Object.keys(all).find((k) => norm(k) === want || norm(k.replace(/^setup:/, '')) === want || norm(all[k]?.setup?.name || '') === want || norm(all[k]?.title || '') === want);
    const sc = key ? all[key] : null;
    if (!sc || !sc.table) return null;
    const L = layOut(sc.table, sc.setup?.layout || {}, ctx()), laid = L.laid, n = laid.head.length, k = A.kb();
    const lines = laid.lines.map((l) => ({ cells: l.kind === 'group' ? [l.label].concat(Array(n - 1).fill('')) : l.cells.concat(Array(Math.max(0, n - l.cells.length)).fill('')), ids: (l.ids || []).map((id) => k + id), cellIds: l.cellIds ? l.cellIds.map((c) => (c ? c.map((id) => k + id) : null)) : null }));
    noteFigures(laid.head, lines);
    return '\n\n**' + mdEscape(laid.title) + '**' + mdTable(laid.head, lines.map((l) => l.cells)) + (laid.note ? mdEscape(laid.note) + '\n\n' : '');
  });
  registerDocField('specification', () => { const list = sections(); return list ? '\n\n' + specMarkdown(list, { t: A.t }).replace(/^# .*\n/, '') + '\n\n' : null; });

  /** The Schedules list follows the file: the finish schedules, one entry per saved set-up, none for a set-up that is gone. */
  function syncOptions() {
    const sel = A.root.querySelector('[data-msched-kind]');
    if (!sel || !P.all) return;
    for (const k of FINISH_KEYS) if (P.all[k] && !sel.querySelector('option[value="' + k + '"]')) sel.append(el('option', { value: k, 'data-finishes': '' }, P.all[k].title));
    const want = Object.keys(P.all).filter((k) => k.startsWith('setup:'));
    for (const o of [...sel.querySelectorAll('option[data-sched-setup]')]) if (!want.includes(o.value)) o.remove();
    for (const k of want) { let o = sel.querySelector('option[value="' + CSS.escape(k) + '"]'); if (!o) { o = el('option', { value: k, 'data-sched-setup': '' }); sel.append(o); } o.textContent = P.all[k].setup.name; }
    let go = null;
    if (P.pending && sel.querySelector('option[value="' + CSS.escape(P.pending) + '"]')) { go = P.pending; P.pending = null; }
    else if (!sel.querySelector('option[value="' + CSS.escape(A.S.sched) + '"]')) go = 'doors';
    if (go && A.S.sched !== go) { sel.value = go; sel.dispatchEvent(new Event('change')); } else if (sel.value !== A.S.sched) sel.value = A.S.sched;
  }

  A = modelUi.extend({
    schedules() { try { return finishes(); } catch (e) { return {}; } },
    scheduleKeys(kind, i) { const sc = finishes()[kind]; return sc ? keysOf(sc.ids[i]) : []; },
    /** Runs last over every schedule: each gets its table, the saved set-ups join the list, the office standard lays out the plain ones. */
    scheduleColumns(all) {
      const snap = A.S.data, w = W();
      if (!snap || !w) return;
      try {
        for (const k of ['doors', 'windows', 'walls', 'rooms']) if (all[k] && !all[k].title) all[k].title = A.t('model.sch.' + k);   // the plan names these by their key
        withTables(all, snap);
        const c = ctx();
        withSetups(all, readSetups(w), c);
        underStandard(all, c);
      } catch (e) { console.error(e); }
      P.all = all;
    },
    scheduleRendered(kind, sc, box) {
      controls(box);
      syncOptions();
      const L = laidOf(kind, sc);
      P.last = L;
      fillControls(L, sc);
      if (L) draw(box, L, sc);
    },
    scheduleCsv(kind) { return P.last && P.last.kind === kind && P.last.active ? toCsv(P.last.laid, tableCsv) : null; },
    refresh() { const box = A.root.querySelector('[data-msched]'); if (box) controls(box); syncOptions(); },
  });
  return { sections, openSpec, state: () => ({ panel: Object.fromEntries(P.panel), props: Object.fromEntries(P.props), setups: W() ? readSetups(W()) : [], standard: officeStandard(), tsv: P.lastTsv || null }), laid: () => P.last?.laid || null, openFinishes };
}
