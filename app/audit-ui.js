/* SPDX-License-Identifier: Apache-2.0 */
/**
 * audit-ui.js: the Audit section of the left panel (0.10 booklet rows BK.65 and BK.20, session bk-r3-checks-10): ONE entry that runs
 * the ready rule sets and puts what they find in the shared Problems list (advisory: nothing is blocked, each finding can be accepted
 * with a reason) and in the check report. The rules are lib/modelaudit (./modelaudit/), the model reading audit-bim.js.
 *
 *   mountAudit({ root, editor(), model(), t, status, nameOfKey, verify }) → { run(sets?), render(), last(), open() } | null
 *
 * Where a person finds it: left panel › Model checks › Audit [data-audit-details] (Tools › Audit, command tools.audit, typed AUDIT,
 * opens it): the project stage [data-audit-stage] and the LOD it asks for, the rule sets to run [data-audit-set=<set>], the widest
 * opening without a lintel [data-audit-lintel], the LOD each stage asks for [data-audit-lod=<stage>] (CadCraft's starting values,
 * not a standard; an office sets its own in Settings › Default Policies › Audit, and the table here is this computer's own on top),
 * Show verification marks in the plan [data-audit-marks], Run the audit [data-audit-run]; then a line per rule set
 * [data-audit-sum=<set>], the findings per discipline pair [data-audit-pairs], Open the Problems list [data-audit-problems] and
 * The check report [data-audit-report] (the shared Problems check report, with the rule sets listed in it).
 * Test hook: window.bimcraftAudit = { run(sets), last(), state }.
 */
import { el } from './ui-util.js';
import { runAudit, stageTable } from './audit-bim.js';
import { RULE_SETS } from './modelaudit/audit.js';
import { STAGE_LOD, requiredLod } from './modelaudit/stagelod.js';
import { INTERFACE_LIMITS, byPair } from './modelaudit/interfaces.js';
import { LOD_SCALE } from './walls/lod.js';
import { onDefaults } from './defaults-hook.js';
import { parseLen, fmtLen } from './model-units.js';

const KEY = 'bimcraft.audit';
const STAGES = Object.keys(STAGE_LOD);

export function mountAudit(host) {
  const box = host.root?.querySelector('[data-audit]'), details = host.root?.querySelector('[data-audit-details]');
  if (!box) return null;
  const t = host.t, T = (k, v) => t('audit.' + k, v);
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
  const S = { sets: RULE_SETS.filter((s) => !(saved.off || []).includes(s)), own: saved.table && typeof saved.table === 'object' ? saved.table : {}, lintelOver: Number.isFinite(saved.lintelOver) && saved.lintelOver > 0 ? saved.lintelOver : null, last: null, at: '' };
  const keep = () => { try { localStorage.setItem(KEY, JSON.stringify({ off: RULE_SETS.filter((s) => !S.sets.includes(s)), table: S.own, ...(S.lintelOver ? { lintelOver: S.lintelOver } : {}) })); } catch (e) { /* private window */ } };
  const units = () => { try { return localStorage.getItem('bimcraft.model.units') || 'mm'; } catch (e) { return 'mm'; } };
  const info = () => { try { return window.ccDocInfo?.info?.get?.() || {}; } catch (e) { return {}; } };
  const stage = () => (STAGES.includes(info().stage) ? info().stage : '');
  const stageName = (s) => (s ? t('audit.stage.' + s) : T('stage.none'));
  const setStage = (v) => {
    try { const tool = window.ccDocInfo?.tools?.().find((x) => x.name === 'docinfo_set'); if (tool) tool.run({ stage: v }); else window.ccDocInfo?.info?.set?.({ stage: v }); window.ccDocInfo?.refresh?.(); }
    catch (e) { host.status(String(e.message || e), true); }
    render();
  };

  // ---- the Problems source: made once the shell's Problems are there
  let src = null;
  const summarySet = () => (S.last ? { kind: 'audit', title: T('report.title', { stage: stageName(S.last.stage) }), date: S.at,
    specs: S.last.summary.map((x) => ({ name: T('set.' + x.set), status: x.found ? 'fail' : 'pass', applicable: x.checked, passed: Math.max(0, x.checked - x.found), failed: x.found })) } : null);
  const source = () => {
    if (src || !window.ccProblems) return src;
    src = window.ccProblems.source({ id: 'bimcraft.audit', kind: 'check', label: T('title'), summary: summarySet });
    return src;
  };

  function run(sets = S.sets) {
    const ed = host.editor(), model = host.model();
    if (!ed || !model) { host.status(T('nomodel'), true); return null; }
    const st = stage();
    let r;
    try {
      r = runAudit({ ed, model, stage: st, stageName: stageName(st), table: stageTable(S.own).table, limits: S.lintelOver ? { lintelOver: S.lintelOver } : undefined, sets, nameOf: host.nameOfKey, t });
    } catch (e) { console.error(e); host.status(T('failed', { why: String(e.message || e) }), true); return null; }
    S.last = { ...r, stage: st, sets }; S.at = new Date().toISOString().slice(0, 10);
    source()?.set(r.problems);
    host.status(T('done', { n: r.problems.length }));
    render();
    return r;
  }

  function render() {
    const st = stage(), TB = stageTable(S.own), need = requiredLod(st, TB.table);
    const stSel = el('select', { className: 'bc-mb-select', 'data-audit-stage': '', 'aria-label': T('stage') }, el('option', { value: '', selected: !st }, T('stage.none')), ...STAGES.map((s) => el('option', { value: s, selected: s === st }, stageName(s))));
    stSel.addEventListener('change', () => setStage(stSel.value));
    const setBox = (s) => { const c = el('input', { type: 'checkbox', checked: S.sets.includes(s), 'data-audit-set': s }); c.addEventListener('change', () => { S.sets = RULE_SETS.filter((x) => (x === s ? c.checked : S.sets.includes(x))); keep(); }); return el('label', { className: 'bc-check' }, c, ' ', T('set.' + s)); };
    const lint = el('input', { type: 'text', className: 'bc-input bc-num', 'data-audit-lintel': '', value: fmtLen(S.lintelOver || INTERFACE_LIMITS.lintelOver, units()), 'aria-label': T('lintel') });
    lint.addEventListener('change', () => { const mm = parseLen(lint.value, units()); if (Number.isFinite(mm) && mm > 0) { S.lintelOver = Math.abs(mm - INTERFACE_LIMITS.lintelOver) < 0.5 ? null : mm; keep(); } lint.value = fmtLen(S.lintelOver || INTERFACE_LIMITS.lintelOver, units()); });
    const lodSel = (s) => {
      const cur = TB.table[s], own = Object.prototype.hasOwnProperty.call(S.own, s);
      const sel = el('select', { className: 'bc-mb-select', 'data-audit-lod': s, 'aria-label': stageName(s) },
        el('option', { value: '', selected: !own }, T('lod.default', { lod: (() => { const d = stageTable({}).table[s]; return d ? 'LOD ' + d : T('lod.nothing'); })() })),
        el('option', { value: 'none', selected: own && cur === null }, T('lod.nothing')), ...LOD_SCALE.map((n) => el('option', { value: String(n), selected: own && cur === n }, 'LOD ' + n)));
      sel.addEventListener('change', () => { if (sel.value === '') delete S.own[s]; else S.own[s] = sel.value === 'none' ? null : Number(sel.value); keep(); render(); });
      return el('label', { className: 'bc-dlg-field' }, stageName(s), sel);
    };
    const marks = el('input', { type: 'checkbox', checked: host.verify ? host.verify.shown : true, 'data-audit-marks': '' });
    marks.addEventListener('change', () => host.verify?.show(marks.checked));
    const kids = [
      el('p', { className: 'bc-muted' }, T('intro')),
      el('label', { className: 'bc-dlg-field' }, T('stage'), stSel),
      el('p', { className: 'bc-muted', 'data-audit-need': need === null ? '' : String(need) }, st ? (need === null ? T('need.nothing', { stage: stageName(st) }) : T('need', { stage: stageName(st), lod: need })) : T('need.nostage')),
      el('div', { className: 'bc-audit-sets', role: 'group', 'aria-label': T('sets') }, ...RULE_SETS.map(setBox)),
      el('label', { className: 'bc-dlg-field' }, T('lintel'), lint),
      el('details', { className: 'bc-set', 'data-audit-table': '' }, el('summary', {}, T('table')), el('p', { className: 'bc-muted' }, T('table.note') + (Object.keys(TB.office).length ? ' ' + T('table.office') : '')), ...STAGES.map(lodSel)),
      el('label', { className: 'bc-check' }, marks, ' ', T('marks')),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-audit-run': '', onClick: () => run() }, T('run'))),
    ];
    if (S.last) {
      const r = S.last;
      kids.push(el('ul', { className: 'bc-checks-res', 'data-audit-results': '' }, ...r.summary.map((x) => el('li', { 'data-audit-sum': x.set, 'data-found': String(x.found) },
        el('div', { className: 'bc-check-head' }, el('span', {}, T('set.' + x.set)), el('span', { className: x.found ? 'n' : 'ok' }, x.found ? T('found', { n: x.found }) : T('clean'))),
        x.set === 'lod' ? el('span', { className: 'bc-muted' }, x.required === null ? T('need.nostage') : T('lod.line', { lod: x.required, below: x.below, untagged: x.untagged })) : null,
        x.set === 'clashes' && x.stopped ? el('span', { className: 'bc-muted' }, T('clash.stopped')) : null))));
      const pairs = byPair(r.input.findings || []);
      if (pairs.length) kids.push(el('p', { 'data-audit-pairs': '' }, T('pairs') + ' ' + pairs.map((p) => p.pair.split('|').map((d) => t('audit.disc.' + d)).join(' / ') + ': ' + p.n).join('; ')));
      kids.push(el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-audit-problems': '', onClick: () => window.ccProblems?.open?.() }, T('problems')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-audit-report': '', onClick: () => { window.ccProblems?.open?.(); document.querySelector('[data-problems-report]')?.click(); } }, T('report'))));
      kids.push(el('p', { className: 'bc-muted' }, T('advisory')));
    }
    box.replaceChildren(...kids);
  }
  details?.addEventListener('toggle', () => { if (details.open) render(); });
  onDefaults(() => { if (details?.open) render(); });
  host.root.addEventListener('bimcraft-verify-show', () => { if (details?.open) render(); });
  const open = () => { if (details) { details.open = true; details.scrollIntoView?.({ block: 'nearest' }); } render(); };
  for (const b of host.root.querySelectorAll('[data-audit-open]')) b.addEventListener('click', open);
  const go = () => source();
  if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }
  const api = { run, render, last: () => S.last, open, state: S, changed() { if (S.last) { S.last = null; source()?.set([]); if (details?.open) render(); } } };
  if (typeof window !== 'undefined') window.bimcraftAudit = api;
  return api;
}
