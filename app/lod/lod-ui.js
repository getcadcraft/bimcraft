/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lod-ui.js: the level-of-development framework in the page (0.10 booklet rows BK.13, 14, 17, 87 to 93, 95, 100, 101, 150, 151; session
 * bim-lod-10). A thin adapter over lod-model.js (the record in the IFC) and the lib/lod rules (./scale.js, ./record.js, ./milestones.js,
 * ./advice.js, ./library.js, ./fixes.js: a byte-identical copy). Nothing here blocks anything: every check advises.
 *
 *   mountLod({ root, modelUi, editor(), model(), t, status }) → { decorate(container, ids), run(), find(), open(), libraryInfo(item), state }
 *
 * Where a person finds it:
 *   Properties › Level of development [data-lod] (any picked element): the LOD [data-lod-select] (Not set, LOD 100 … 500, each named
 *     by what it means), what it means and that each level includes the ones below, where it comes from [data-lod-state] (this
 *     element / its type / field-verified), the element's IFC class and classification codes, the three parts [data-lod-part=geometry |
 *     information | documentation] each with its own level and a mark [data-lod-mark=<part>] (met / below / not stated), and
 *     "Detail and development" [data-lod-two]: how much is drawn beside how far developed. One undo step for the whole pick.
 *   Left panel › Model checks › LOD milestones [data-lod-details] (also the link under Audit [data-lod-open]): the milestone
 *     [data-lod-milestone], the milestone table [data-lod-table-name] (the starting table, or a CSV / JSON file loaded with
 *     [data-lod-load]; Download as CSV [data-lod-save]), Check the model [data-lod-run]: totals [data-lod-totals], a line per table row
 *     [data-lod-row], findings in the shared Problems list (source bimcraft.lod); "Staying generic early" advice [data-lod-advice].
 *   Same panel › Missing tags and unnamed rooms [data-lod-fix]: Find them [data-lod-find], an editable proposal per missing tag
 *     [data-lod-fix-tag=<id>] and a blank per unnamed room [data-lod-fix-room=<id>], Apply [data-lod-apply] (one undo step).
 *   libraryInfo(item) → { line, info, advice }: the Library card's and place dialog's "LOD 300 · IfcDoor · uniclass …" line.
 * Test hook: window.bimcraftLod = { state, run, find, apply, decorate, libraryInfo, setTable(text) }.
 */
import { el } from '../ui-util.js';
import { ModelWriter } from '../model-write.js';
import { EN } from './lod-words.js';
import { LOD_SCALE, levelOf, includesBelow, SCALE_SOURCE, drawnDetail, compareDetail, lodLabel } from './scale.js';
import { PARTS } from './record.js';
import { STARTER_TABLE, MILESTONES, parseTable, tableCsv, milestoneCheck, milestoneProblems, matchRow } from './milestones.js';
import { modelAdvice, placeAdvice, isEarly } from './advice.js';
import { placeInfo, placeLine, itemClass, itemCodes } from './library.js';
import { proposeTags, roomNameFixes } from './fixes.js';
import { lodList, appTypeLods, milestoneElements, setLodOp, roomsAndTags, applyFixesOp } from './lod-model.js';
import { autoRoomName } from '../audit-bim.js';

const KEY = 'bimcraft.lod';
const fill = (s, v = {}) => String(s).replace(/\{(\w+)\}/g, (m, k) => (v[k] !== undefined && v[k] !== null ? String(v[k]) : m));

export function mountLod({ root, modelUi, editor = () => null, model = () => null, t = null, status = () => {} }) {
  const T = (k, v) => { if (t) { const s = t(k, v); if (s && s !== k) return s; } return fill(EN[k] ?? k, v); };
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
  const S = { ms: MILESTONES.some((m) => m.id === saved.ms) ? saved.ms : 'dd', table: STARTER_TABLE, tableName: '', tableText: '', tableProblems: [], last: null, advice: [], fix: null };
  const keep = () => { try { localStorage.setItem(KEY, JSON.stringify({ ms: S.ms, ...(S.tableText && S.tableText.length < 300000 ? { table: S.tableText } : {}) })); } catch (e) { /* private window */ } };
  if (typeof saved.table === 'string') { const r = parseTable(saved.table); if (r.table) { S.table = r.table; S.tableName = r.table.name; S.tableText = saved.table; } }
  const msName = () => MILESTONES.find((m) => m.id === S.ms)?.name || S.ms;

  let A = null, cache = null;
  const W = () => (A?.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const infoList = () => {
    if (cache) return cache;
    const ed = A?.ed();
    if (!ed) return null;
    const list = lodList(new ModelWriter(ed.W, ed.api, ed.mid), { typeLods: appTypeLods(ed) });
    cache = { list, byId: new Map(list.map((x) => [x.id, x])) };
    return cache;
  };
  const commit = (op, label, done) => {
    let why = null;
    A.commit(op, { label, verb: t ? t('model.verb.changed') : 'changed', select: A.selectedKeys(), onError: (e, text) => { why = e.key ? T(e.key) : text || e.message; } });
    if (why) { status(why, true); return false; }
    if (done) status(done);
    return true;
  };

  // ------------------------------------------------------------------------------------------ Properties
  const lodOption = (n) => el('option', { value: String(n) }, lodLabel(n) + ' · ' + T('lod.level.' + n));
  const drawnFor = (x) => {
    if (/^IfcWall/.test(x.cls)) return drawnDetail({ sketch: x.typeLod !== null && x.typeLod <= 200, layers: x.typeLod !== null && x.typeLod <= 200 ? 1 : 2, planDetail: 'medium' });
    if (/^Ifc(Door|Window)/.test(x.cls)) return 'envelope';
    return '';
  };
  function decorate(container, ids) {
    container.querySelector('[data-lod]')?.remove();
    if (!A || !ids || !ids.length) return;
    const c = infoList();
    const picked = c ? ids.map((id) => c.byId.get(id)).filter(Boolean) : [];
    if (!picked.length) return;
    const one = picked.length === 1 ? picked[0] : null;
    const same = (f) => picked.every((x) => f(x) === f(picked[0]));
    const guids = picked.map((x) => x.guid);
    const set = (patch) => { if (commit(setLodOp(guids, patch), T('lod.undo'))) status(T(patch.lod === null ? 'lod.done.clear' : 'lod.done', { n: guids.length })); };
    const own = same((x) => x.record.lod) ? picked[0].record.lod : undefined;
    const sel = el('select', { className: 'bc-mb-select', 'data-lod-select': '', 'aria-label': T('lod.tag') },
      ...(own === undefined ? [el('option', { value: 'mixed', selected: true, disabled: true }, T('lod.mixed'))] : []),
      el('option', { value: '', selected: own === null }, T('lod.none')), ...LOD_SCALE.map((n) => { const o = lodOption(n); if (own === n) o.selected = true; return o; }));
    sel.addEventListener('change', () => { if (sel.value !== 'mixed') set({ lod: sel.value === '' ? null : Number(sel.value) }); });
    const eff = one ? one.lod : null, lvl = levelOf(eff);
    const stateText = one ? (one.lodFrom ? T('lod.from.' + one.lodFrom) : T('lod.from.none')) : '';
    const line = el('dd', { 'data-lod-state': one ? one.lodFrom || 'none' : 'many' }, one ? (eff !== null ? lodLabel(eff) + ', ' + stateText : stateText) : '',
      lvl ? el('div', { className: 'bc-sub' }, lvl.means, includesBelow(eff).length ? ' ' + T('lod.reads') : '') : null);
    const cls = same((x) => x.cls) ? picked[0].cls : T('lod.mixed');
    const codes = one ? (one.codes.length ? one.codes.map((x) => x.system + ' ' + x.code + (x.title ? ' (' + x.title + ')' : '')).join('; ') : T('lod.codes.none')) : '';
    const partRow = (p) => {
      const vals = picked.map((x) => x.parts[p]), mixed = !vals.every((v) => v === vals[0]), cur = mixed ? undefined : vals[0];
      const ps = el('select', { className: 'bc-mb-select', 'data-lod-part': p, 'aria-label': T('lod.part.' + p) },
        ...(mixed ? [el('option', { value: 'mixed', selected: true, disabled: true }, T('lod.mixed'))] : []),
        el('option', { value: '', selected: cur === null }, T('lod.not_stated')), ...LOD_SCALE.map((n) => { const o = el('option', { value: String(n) }, lodLabel(n)); if (cur === n) o.selected = true; return o; }));
      ps.addEventListener('change', () => { if (ps.value !== 'mixed') set({ parts: { [p]: ps.value === '' ? null : Number(ps.value) } }); });
      const mk = one ? one.marks[p] : '';
      const icon = { met: 'bi-check-circle', below: 'bi-exclamation-circle', 'not-stated': 'bi-dash-circle', 'no-lod': 'bi-dash-circle' }[mk];
      return [el('dt', {}, T('lod.part.' + p)), el('dd', {}, ps, mk ? el('span', { className: 'bc-lod-mark', 'data-lod-mark': p, 'data-state': mk, title: T('lod.part.' + p) + ' ' + T('lod.mark.' + mk), 'data-bs-toggle': 'tooltip' }, ' ', el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, T('lod.mark.' + mk))) : null)];
    };
    const rows = [el('dt', {}, T('lod.tag')), el('dd', {}, sel), el('dt', {}, ''), line,
      el('dt', {}, T('lod.ifc')), el('dd', {}, cls), el('dt', {}, T('lod.codes')), el('dd', {}, codes),
      el('dt', {}, T('lod.parts')), el('dd', { className: 'bc-sub' }, T('lod.parts.hint')), ...PARTS.flatMap(partRow)];
    if (one) {
      const drawn = drawnFor(one), cmp = compareDetail(drawn, one.lod);
      rows.push(el('dt', {}, T('lod.two.title')), el('dd', { 'data-lod-two': cmp.state },
        el('div', {}, T('lod.two.drawn') + ': ' + (drawn ? T('lod.drawn.' + drawn) : T('lod.drawn.unknown'))),
        el('div', {}, T('lod.two.developed') + ': ' + (one.lod !== null ? lodLabel(one.lod) + ' · ' + T('lod.level.' + one.lod) : T('lod.none'))),
        cmp.state !== 'unknown' ? el('div', { className: 'bc-sub' }, T('lod.two.' + cmp.state)) : null));
    }
    const block = el('details', { className: 'bc-set', 'data-lod': '', 'data-count': String(picked.length), open: picked.some((x) => x.lod !== null) },
      el('summary', {}, T('lod.title') + (one && one.lod !== null ? ': ' + lodLabel(one.lod) : '')), el('dl', { className: 'bc-dl' }, ...rows),
      el('p', { className: 'bc-muted' }, T('lod.scale.note')),
      el('details', {}, el('summary', {}, T('lod.scale.source')), el('p', { className: 'bc-muted' }, SCALE_SOURCE)));
    const after = container.querySelector('[data-cls]') || container.querySelector('[data-verify]') || container.querySelector('[data-model-props]') || container.querySelector('.bc-prop-name, [data-pick-count]');
    if (after) after.after(block); else container.append(block);
  }

  // ------------------------------------------------------------------------------------------ the milestone panel
  let src = null;
  const source = () => { if (src || !window.ccProblems) return src; src = window.ccProblems.source({ id: 'bimcraft.lod', kind: 'check', label: T('lod.ms.source'), summary: () => (S.last ? { checked: S.last.totals.checked, found: S.last.totals.notReached + (S.last.totals.untagged ? 1 : 0) } : {}) }); return src; };
  let box = null, details = null;

  function run() {
    const ed = A?.ed();
    if (!ed) { status(T('lod.ms.nomodel'), true); return null; }
    const list = lodList(new ModelWriter(ed.W, ed.api, ed.mid), { typeLods: appTypeLods(ed) });
    const check = milestoneCheck(milestoneElements(list), S.table, S.ms);
    S.last = check;
    const problems = milestoneProblems(check, { t: t ? (k, v) => T(k, v) : null, stage: msName() });
    const early = check.results.filter((r) => isEarly(r.required) && r.lod !== null).map((r) => ({ id: r.id, lod: r.lod }));
    S.advice = early.length ? modelAdvice({ elements: early, required: 200, stage: msName() }).notes : [];
    source()?.set(problems);
    status(T('lod.ms.done', { reached: check.totals.reached, checked: check.totals.checked, milestone: msName() }));
    render();
    return check;
  }
  function find() {
    const ed = A?.ed();
    if (!ed) { status(T('lod.ms.nomodel'), true); return null; }
    const rt = roomsAndTags(ed);
    S.fix = { tags: proposeTags(rt.tagged), rooms: roomNameFixes(rt.rooms, { isAutoName: autoRoomName }) };
    render();
    return S.fix;
  }
  function apply() {
    if (!S.fix) return false;
    const tags = [...box.querySelectorAll('[data-lod-fix-tag]')].map((i) => ({ id: i.dataset.lodFixTag, kind: i.dataset.kind, tag: i.value })).filter((x) => x.tag.trim());
    const names = [...box.querySelectorAll('[data-lod-fix-room]')].map((i) => ({ id: i.dataset.lodFixRoom, name: i.value })).filter((x) => x.name.trim());
    if (!tags.length && !names.length) { status(T('lod.fix.nothing'), true); return false; }
    let why = null;
    A.commit(applyFixesOp({ tags, names }), { label: T('lod.fix.title'), verb: t ? t('model.verb.changed') : 'changed', select: A.selectedKeys(), onError: (e, text) => { why = e.key ? T(e.key) : text || e.message; } });
    if (why) { status(T('lod.fix.failed', { why }), true); return false; }
    status(T('lod.fix.applied', { n: tags.length + names.length }));
    cache = null; find();
    return true;
  }
  function setTable(text, name = '') {
    const r = parseTable(text);
    if (!r.table) { S.tableProblems = r.problems; status(T('lod.ms.failed', { why: r.problems[0]?.text || '' }), true); render(); return false; }
    S.table = r.table; S.tableName = name || r.table.name; S.tableText = text; S.tableProblems = r.problems; S.last = null; S.advice = []; source()?.set([]); keep();
    status(T(r.problems.length ? 'lod.ms.loaded.problems' : 'lod.ms.loaded', { name: S.tableName, n: r.problems.length || r.table.rows.length }), false);
    render();
    return true;
  }
  const useStarter = () => { S.table = STARTER_TABLE; S.tableName = ''; S.tableText = ''; S.tableProblems = []; S.last = null; S.advice = []; source()?.set([]); keep(); render(); };

  function render() {
    if (!box) return;
    const msSel = el('select', { className: 'bc-mb-select', 'data-lod-milestone': '', 'aria-label': T('lod.ms.milestone') }, ...MILESTONES.map((m) => el('option', { value: m.id, selected: m.id === S.ms }, m.name)));
    msSel.addEventListener('change', () => { S.ms = msSel.value; S.last = null; S.advice = []; source()?.set([]); keep(); render(); });
    const file = el('input', { type: 'file', accept: '.csv,.json,text/csv,application/json', hidden: true, 'data-lod-file': '' });
    file.addEventListener('change', async () => { const f = file.files?.[0]; if (!f) return; try { setTable(await f.text(), f.name.replace(/\.[^.]+$/, '')); } catch (e) { status(T('lod.ms.failed', { why: String(e.message || e) }), true); } file.value = ''; });
    const kids = [
      el('p', { className: 'bc-muted' }, T('lod.ms.intro')),
      el('label', { className: 'bc-dlg-field' }, T('lod.ms.milestone'), msSel),
      el('p', { 'data-lod-table-name': S.tableName ? 'loaded' : 'starter' }, T('lod.ms.table') + ': ' + (S.tableName ? T('lod.ms.table.loaded', { name: S.tableName }) : T('lod.ms.table.starter'))),
      el('p', { className: 'bc-muted' }, S.table.note || ''),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lod-load': '', 'data-bs-toggle': 'tooltip', title: T('lod.ms.load.title'), onClick: () => file.click() }, T('lod.ms.load')), file,
        S.tableName ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lod-starter': '', onClick: useStarter }, T('lod.ms.use_starter')) : null,
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lod-save': '', onClick: () => { const a = el('a', { href: URL.createObjectURL(new Blob([tableCsv(S.table)], { type: 'text/csv' })), download: 'lod-milestones.csv' }); document.body.append(a); a.click(); a.remove(); } }, T('lod.ms.save'))),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-lod-run': '', onClick: () => run() }, T('lod.ms.run'))),
    ];
    if (S.tableProblems.length) kids.push(el('details', { 'data-lod-table-problems': '' }, el('summary', {}, T('lod.ms.table.problems') + ' (' + S.tableProblems.length + ')'), el('ul', {}, ...S.tableProblems.slice(0, 30).map((p) => el('li', { className: 'bc-muted' }, p.text)))));
    if (S.last) {
      const c = S.last, tt = c.totals;
      kids.push(el('p', { 'data-lod-totals': '', 'data-reached': String(tt.reached), 'data-not-reached': String(tt.notReached), 'data-untagged': String(tt.untagged), 'data-checked': String(tt.checked) }, T('lod.ms.totals', { ...tt, milestone: msName() })));
      kids.push(el('ul', { className: 'bc-checks-res', 'data-lod-rows': '' }, ...c.byRow.map((r, i) => el('li', { 'data-lod-row': String(i), 'data-reached': String(r.reached), 'data-not-reached': String(r.notReached) },
        r.required === null ? T('lod.ms.row.nothing', { name: r.name }) : T('lod.ms.row', { ...r, required: r.required })))));
      if (!tt.notReached && !tt.untagged) kids.push(el('p', { className: 'bc-muted', 'data-lod-clean': '' }, T('lod.ms.clean')));
      const pb = c.results.filter((r) => r.partsBelow.length).length;
      if (pb) kids.push(el('p', { className: 'bc-muted', 'data-lod-parts-below': String(pb) }, T('lod.ms.parts_below', { n: pb })));
      for (const n of S.advice) kids.push(el('p', { className: 'bc-muted', 'data-lod-advice': '' }, el('strong', {}, T('lod.advice.title') + '. '), T(n.key, n.vars)));
      kids.push(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lod-problems': '', onClick: () => window.ccProblems?.open?.() }, T('lod.ms.problems'))));
      kids.push(el('p', { className: 'bc-muted' }, T('lod.ms.advisory')));
    }
    // BK.151: the fix lists
    const fx = S.fix;
    const fixKids = [el('h4', { className: 'bc-h' }, T('lod.fix.title')), el('p', { className: 'bc-muted' }, T('lod.fix.checks')),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lod-find': '', onClick: () => find() }, T('lod.fix.find')))];
    if (fx) {
      if (!fx.tags.length && !fx.rooms.length) fixKids.push(el('p', { className: 'bc-muted', 'data-lod-fix-none': '' }, T('lod.fix.none')));
      if (fx.tags.length) fixKids.push(el('p', {}, T('lod.fix.tags')), ...fx.tags.map((r) => el('label', { className: 'bc-dlg-field' }, T('lod.fix.kind.' + r.kind) + ' ' + (r.label || ''), el('input', { type: 'text', className: 'bc-input', value: r.tag, maxlength: 20, 'data-lod-fix-tag': r.id, 'data-kind': r.kind }))));
      if (fx.rooms.length) fixKids.push(el('p', {}, T('lod.fix.rooms')), ...fx.rooms.map((r) => el('label', { className: 'bc-dlg-field' }, T('lod.fix.kind.room') + ' ' + (r.number || '') + (r.current ? ' (' + r.current + ')' : ''), el('input', { type: 'text', className: 'bc-input', value: '', maxlength: 80, 'data-lod-fix-room': r.id }))));
      if (fx.tags.length || fx.rooms.length) fixKids.push(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-lod-apply': '', onClick: () => apply() }, T('lod.fix.apply'))));
    }
    kids.push(el('div', { 'data-lod-fix': '' }, ...fixKids));
    box.replaceChildren(...kids);
  }

  function ensurePanel() {
    if (box) return;
    const audit = root.querySelector('[data-audit-details]') || root.querySelector('[data-checks-details]');
    details = el('details', { className: 'bc-find-details', 'data-lod-details': '' }, el('summary', { className: 'bc-h' }, T('lod.ms.title')), el('div', { 'data-lod-panel': '' }));
    box = details.querySelector('div');
    const btn = el('button', { type: 'button', className: 'bc-linkbtn', 'data-lod-open': '', 'data-bs-toggle': 'tooltip', title: T('lod.ms.open.title'), onClick: () => open() }, T('lod.ms.open'));
    if (audit) { const last = audit.nextElementSibling?.matches?.('[data-audit-open]') ? audit.nextElementSibling : audit; last.after(details, btn); } else root.append(details, btn);
    details.addEventListener('toggle', () => { if (details.open) render(); });
  }
  function open() { ensurePanel(); details.open = true; details.scrollIntoView?.({ block: 'nearest' }); render(); }

  A = modelUi.extend({ refresh() { cache = null; } });
  ensurePanel();
  const libraryInfo = (item) => {
    const cls = itemClass(item).ifcClass, row = matchRow({ cls, codes: itemCodes(item) }, S.table);
    const required = row >= 0 ? S.table.rows[row].required[S.ms] ?? null : null;
    const info = placeInfo(item, { required }), name = item?.name || '';
    const adv = placeAdvice({ itemLod: info.lod, required, name });
    return { line: placeLine(item, { t: t ? (k) => T(k) : null }), info, required, advice: adv ? T(adv.key, adv.vars) : '' };
  };
  const api = { decorate, run, find, apply, open, libraryInfo, setTable, state: S, changed() { cache = null; if (S.last) { S.last = null; source()?.set([]); } if (details?.open) render(); } };
  const go = () => source();
  if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }
  if (typeof window !== 'undefined') window.bimcraftLod = api;
  return api;
}
