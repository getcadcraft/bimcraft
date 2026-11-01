/* SPDX-License-Identifier: Apache-2.0 */
/**
 * scan-progress-ui.js — "Compare the scan with the model" (0.8 EG.39, BimCraft half). While a point cloud is open beside an IFC, the panel
 * judges every element against the scan (scan-progress.js), shows a table you can filter and click, colours the model by what was seen,
 * says how far behind or ahead of the 4D schedule the site is on the 4D day, puts the elements behind schedule in Problems, and saves a CSV.
 * The markup side (permit comments and progress notes) stays a column a person moves; nothing here writes into the IFC.
 *
 *   const sp = mountScanProgress(host)  → { run(opts), last(), changed(), clear() }
 *   host = { pane, cloud() → { cloud, matrix: [16] } | null, keys() → [element key], bounds(keys) → Map key → {min,max} (viewer space, metres),
 *            expected() → Map key → 'built'|'progress'|'waiting' | null, dayLabel() → string | '', name(key), guid(key), select(keys),
 *            setColors(Map | null), setProblems(list), status(text, isError), download(name, data, type), fileName() }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { scanProgress, progressCsv, STATE_COLORS } from './scan-progress.js';

const hex = (c) => '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
const STATES = ['built', 'partly', 'missing', 'unseen'];

export function mountScanProgress(host) {
  if (!host.pane) return null;
  const S = { tolMm: 50, filter: 'all', res: null, colored: false };
  try { const v = JSON.parse(localStorage.getItem('bimcraft.scanprog') || '{}'); if (v.tolMm >= 10 && v.tolMm <= 500) S.tolMm = v.tolMm; } catch (e) { /* defaults */ }
  const save = () => { try { localStorage.setItem('bimcraft.scanprog', JSON.stringify({ tolMm: S.tolMm })); } catch (e) { /* this tab */ } };

  function run(opts = {}) {
    const c = host.cloud();
    if (!c) { host.status(t('sp.nocloud'), true); return null; }
    const keys = host.keys();
    const boxes = host.bounds(keys);
    if (!boxes.size) { host.status(t('sp.noboxes'), true); return null; }
    const expected = host.expected();
    const res = scanProgress({ pos: c.cloud.pos, n: c.cloud.n, matrix: c.matrix, boxes, tol: (opts.tolMm ?? S.tolMm) / 1000, expected: expected || undefined });
    if (!res.ok) { host.status(t('sp.fail.' + res.reason), true); return null; }
    S.res = res;
    S.day = host.dayLabel();
    host.setProblems(problems(res));
    host.status(t('sp.done', { built: res.totals.built, partly: res.totals.partly, missing: res.totals.missing, unseen: res.totals.unseen }));
    if (S.colored) paint();
    render();
    return res;
  }
  function problems(res) {
    const out = [];
    for (const r of res.rows) {
      const g = host.guid(r.key);
      if (!g) continue;
      const about = [{ kind: 'element', id: g, label: host.name(r.key) }];
      if (r.flag === 'behind') out.push({ id: 'scanprog.behind:' + g, code: 'scanprog.behind', severity: 'warning', source: { name: 'bimcraft.scanprogress' }, about,
        msg: { key: 'sp.prob.behind', vars: { name: host.name(r.key), state: t('sp.state.' + r.state), day: S.day || '' } }, text: t('sp.prob.behind', { name: host.name(r.key), state: t('sp.state.' + r.state), day: S.day || '' }) });
      else if (r.dev === 'off') out.push({ id: 'scanprog.off:' + g, code: 'scanprog.off', severity: 'note', source: { name: 'bimcraft.scanprogress' }, about,
        msg: { key: 'sp.prob.off', vars: { name: host.name(r.key), mm: Math.round(Math.abs(r.mean) * 1000) } }, text: t('sp.prob.off', { name: host.name(r.key), mm: Math.round(Math.abs(r.mean) * 1000) }) });
    }
    return out;
  }
  function paint() {
    if (!S.res) return;
    const m = new Map();
    for (const r of S.res.rows) m.set(r.key, hex(STATE_COLORS[r.state]));
    host.setColors(m); S.colored = true;
  }
  function unpaint() { host.setColors(null); S.colored = false; }
  const pct = (v) => (v === null || v === undefined ? '–' : v + ' %');

  function render() {
    const kids = [];
    kids.push(el('p', { className: 'bc-muted' }, t('sp.intro')));
    const tol = el('input', { type: 'number', min: '10', max: '500', step: '5', value: String(S.tolMm), className: 'bc-input', 'data-sp-tol': '', 'aria-label': t('sp.tol') });
    tol.addEventListener('change', () => { const v = Number(tol.value); if (v >= 10 && v <= 500) { S.tolMm = v; save(); } else tol.value = String(S.tolMm); });
    kids.push(el('div', { className: 'bc-find-row' }, el('label', {}, t('sp.tol'), ' ', tol, ' mm'), el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-sp-run': '', onClick: () => run() }, t('sp.run'))));
    const r = S.res;
    if (r) {
      const T = r.totals;
      kids.push(el('p', { 'data-sp-sum': '' }, t('sp.sum', { built: T.built, partly: T.partly, missing: T.missing, unseen: T.unseen, pct: pct(T.pct), vol: pct(T.pctVolume) })));
      if (r.plan) kids.push(el('p', { 'data-sp-plan': '' }, t('sp.plan', { day: S.day || '', exp: pct(r.plan.pctExpected), seen: pct(r.plan.pctSeen), behind: r.plan.behind, ahead: r.plan.ahead })));
      else kids.push(el('p', { className: 'bc-muted' }, t('sp.noplan')));
      const sel = el('select', { className: 'select-cc', 'data-sp-filter': '' }, ...['all', ...STATES, 'behind', 'ahead', 'off'].map((f) => el('option', { value: f, selected: f === S.filter }, t('sp.f.' + f))));
      sel.addEventListener('change', () => { S.filter = sel.value; render(); });
      const keep = (x) => S.filter === 'all' || x.state === S.filter || x.flag === S.filter || (S.filter === 'off' && x.dev === 'off');
      const rows = r.rows.filter(keep).sort((a, b) => (a.flag ? 0 : 1) - (b.flag ? 0 : 1) || a.coverage - b.coverage).slice(0, 300);
      kids.push(el('div', { className: 'bc-find-row' }, sel,
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sp-color': '', onClick: () => { if (S.colored) unpaint(); else paint(); render(); } }, t(S.colored ? 'sp.uncolor' : 'sp.color')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sp-csv': '', onClick: () => host.download((host.fileName() || 'model').replace(/\.ifc$/i, '') + '-scan-progress.csv', progressCsv(r, new Map(r.rows.map((x) => [x.key, host.name(x.key)])), 'm'), 'text/csv') }, t('sp.csv'))));
      kids.push(el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-sp-table': '' },
        el('thead', {}, el('tr', {}, ...['sp.col.el', 'sp.col.state', 'sp.col.cov', 'sp.col.dev', 'sp.col.plan'].map((k) => el('th', {}, t(k))))),
        el('tbody', {}, ...rows.map((x) => el('tr', { 'data-sp-row': x.key, 'data-sp-state': x.state, 'data-sp-flag': x.flag || '', style: 'cursor:pointer', onClick: () => host.select([x.key]) },
          el('td', {}, host.name(x.key)), el('td', {}, t('sp.state.' + x.state)), el('td', {}, Math.round(x.coverage * 100) + ' %'),
          el('td', {}, x.dev ? t('sp.dev.' + x.dev) + (x.mean === null ? '' : ' (' + (x.mean >= 0 ? '+' : '') + Math.round(x.mean * 1000) + ' mm)') : '–'),
          el('td', {}, x.plan ? t('sp.plan.' + x.plan) + (x.flag ? ' · ' + t('sp.flag.' + x.flag) : '') : '–')))))));
      kids.push(el('p', { className: 'bc-muted' }, t('sp.limits')));
    }
    host.pane.replaceChildren(...kids);
  }
  render();
  return { run, boxes: () => host.bounds(host.keys()), last: () => S.res, changed() { S.res = null; if (S.colored) unpaint(); render(); }, clear() { S.res = null; unpaint(); host.setProblems([]); render(); }, render };
}
