/* SPDX-License-Identifier: Apache-2.0 */
/**
 * lifecycle-ui.js — Life-cycle view (0.8 EG.45, session bim-sim_PART_2): a <details> under Hazard playback (ui.inc data-eg45). What the model holds that wears
 * out, its service life and (when typed) cost per unit, a bar chart of what falls due in each year of the study, the total and its present value, and a
 * CSV. The cores are lifecycle-model.js and lifecycle.js (DOM-free, tools/bimcraft-test/lifecycle-test.mjs). Lives and costs are kept in this browser.
 * Nothing here changes the model.
 *
 *   mountLifecycle(host) → { render() } | null          host = { root, editor(), status(text, isError), download(name, data, type) }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { lifecycleParts, lifecycleCarbon } from './lifecycle-model.js';
import { lifecycleRun, lifecycleCsv } from './lifecycle.js';

const SAVE = 'bimcraft.lifecycle';
const num = (v) => { const n = Number(String(v).replace(',', '.')); return Number.isFinite(n) ? n : NaN; };
const label = (text, ctl) => el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, text), ctl);
const money = (v) => (Math.abs(v) >= 1000 ? Math.round(v).toLocaleString() : String(Math.round(v * 100) / 100));
const svg = (tag, attrs = {}, ...kids) => { const n = document.createElementNS('http://www.w3.org/2000/svg', tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); for (const c of kids) n.append(c); return n; };

export function mountLifecycle(host) {
  const box = host.root?.querySelector('[data-eg45]');
  if (!box) return null;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(SAVE) || '{}') || {}; } catch (e) { saved = {}; }
  const S = { carbon: !!saved.carbon, years: saved.years || '50', disc: saved.disc || '0', infl: saved.infl || '0', life: saved.life || {}, cost: saved.cost || {}, last: null };
  const keep = () => { try { localStorage.setItem(SAVE, JSON.stringify({ carbon: S.carbon, years: S.years, disc: S.disc, infl: S.infl, life: S.life, cost: S.cost })); } catch (e) { /* private window */ } };

  const KNOWN = new Set(['windows', 'door-exterior', 'door-interior', 'wall-exterior', 'wall-paint', 'floor-finish', 'ceiling-finish', 'roof', 'stairs', 'pipe', 'duct', 'wiring']);
  const partName = (p) => (KNOWN.has(p.key) ? t('eg45.part.' + p.key) : p.key.startsWith('asset:') ? t('eg45.part.asset', { name: p.name }) : t('eg45.part.eq', { name: p.name }));
  function chart(res) {
    const W = 320, H = 110, pad = 18, n = res.years, max = Math.max(...res.byYear.map((y) => y.cost), ...res.events.map(() => 0));
    const useCost = max > 0, counts = res.byYear.map((y) => res.events.filter((e) => e.year === y.year).length), top = useCost ? max : Math.max(...counts, 1);
    const bw = (W - 2 * pad) / (n + 1), g = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': t('eg45.chart.alt'), style: 'width:100%;height:auto;max-height:9rem', 'data-eg45-chart': '' });
    g.append(svg('line', { x1: pad, y1: H - pad, x2: W - pad, y2: H - pad, stroke: 'currentColor', 'stroke-width': 1, opacity: 0.5 }));
    res.byYear.forEach((y, i) => {
      const v = useCost ? y.cost : counts[i];
      if (v <= 0) return;
      const h = (v / top) * (H - 2 * pad - 4);
      g.append(svg('rect', { x: pad + i * bw + 0.5, y: H - pad - h, width: Math.max(1.5, bw - 1), height: h, fill: 'var(--action, #2a6fdb)' }));
    });
    for (let y = 0; y <= n; y += n >= 40 ? 10 : 5) { const tx = svg('text', { x: pad + y * bw, y: H - 4, 'font-size': 8, 'text-anchor': 'middle', fill: 'currentColor' }); tx.textContent = String(y); g.append(tx); }
    return g;
  }

  function render() {
    const ed = host.editor();
    if (!ed) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg45.nomodel'))); return; }
    let parts, carbon;
    try { parts = lifecycleParts(ed).parts; carbon = S.carbon ? lifecycleCarbon(ed, parts) : null; } catch (err) { box.replaceChildren(el('p', { className: 'bc-note' }, String(err?.message || err))); return; }
    if (!parts.length) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('eg45.empty'))); return; }
    const comps = parts.map((p) => ({ ...p, name: partName(p), unitCarbon: carbon ? carbon.units.get(p.key) ?? null : null, life: num(S.life[p.key]) > 0 ? num(S.life[p.key]) : p.life, unitCost: S.cost[p.key] === undefined || S.cost[p.key] === '' ? null : num(S.cost[p.key]) }));
    const res = lifecycleRun(comps, { years: Math.max(5, num(S.years) || 50), discount: (num(S.disc) || 0) / 100, inflation: (num(S.infl) || 0) / 100 });
    S.last = res;
    const field = (k, text) => { const i = el('input', { className: 'bc-input', value: S[k], 'data-eg45-field': k, 'aria-label': text }); i.addEventListener('change', () => { S[k] = i.value; keep(); render(); }); return label(text, i); };
    const cell = (kind, p) => { const i = el('input', { className: 'bc-input', style: 'width:5rem', value: kind === 'life' ? (S.life[p.key] ?? String(p.life)) : (S.cost[p.key] ?? ''), ['data-eg45-' + kind]: p.key, 'aria-label': t('eg45.' + kind) + ' ' + p.name }); i.addEventListener('change', () => { (kind === 'life' ? S.life : S.cost)[p.key] = i.value; keep(); render(); }); return i; };
    const rowFor = (p0) => { const p = { ...p0, name: partName(p0) }; const r = res.rows.find((x) => x.key === p.key); return el('tr', { 'data-eg45-row': p.key }, el('td', {}, p.name), el('td', {}, money(p.qty) + ' ' + p.unit), el('td', {}, cell('life', p)), el('td', {}, cell('cost', p)), el('td', {}, r.years.join(', ') || '–'), ...(carbon ? [el('td', { 'data-eg45-carbon': p.key }, r.unitCarbon === null ? '–' : money(r.carbon) + ' kg')] : [])); };
    const rows = [el('p', { className: 'bc-muted' }, t('eg45.intro')), (() => { const cb = el('input', { type: 'checkbox', 'data-eg45-carbon-on': '' }); cb.checked = S.carbon; cb.addEventListener('change', () => { S.carbon = cb.checked; keep(); render(); }); return el('label', { className: 'bc-4d-grouplabel' }, cb, el('span', {}, t('eg45.carbon.on'))); })(), field('years', t('eg45.years')), field('disc', t('eg45.disc')), field('infl', t('eg45.infl')),
      el('div', { style: 'overflow-x:auto' }, el('table', { className: 'bc-qto-table', 'data-eg45-table': '' }, el('thead', {}, el('tr', {}, ...[t('eg45.col.part'), t('eg45.col.qty'), t('eg45.life'), t('eg45.cost'), t('eg45.col.years'), ...(carbon ? [t('eg45.col.carbon')] : [])].map((h) => el('th', {}, h)))), el('tbody', {}, ...parts.map(rowFor)))),
      el('p', { 'data-eg45-sum': '' }, res.total > 0 ? t('eg45.sum.cost', { n: res.count, total: money(res.total), pv: money(res.totalPv), year: res.peak?.year ?? '–', peak: money(res.peak?.cost || 0) }) : t('eg45.sum.count', { n: res.count })),
      chart(res)];
    if (carbon) rows.push(el('p', { 'data-eg45-carbon-sum': '' }, res.totalCarbon > 0 ? t('eg45.carbon.sum', { kg: money(res.totalCarbon), t: Math.round(res.totalCarbon / 100) / 10 }) : t('eg45.carbon.none')),
      ...(res.nocarbon.length ? [el('p', { className: 'bc-note', 'data-eg45-nocarbon': '' }, t('eg45.carbon.missing', { list: res.nocarbon.map((k) => partName(parts.find((q) => q.key === k) || { key: k, name: k })).join(', ') }))] : []), el('p', { className: 'bc-muted' }, t('eg45.carbon.model')));
    if (res.uncosted.length) rows.push(el('p', { className: 'bc-note', 'data-eg45-uncosted': '' }, t('eg45.uncosted', { list: res.uncosted.map((k) => partName(parts.find((q) => q.key === k) || { key: k, name: k })).join(', ') })));
    rows.push(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-eg45-save': '', onClick: () => host.download('life-cycle.csv', lifecycleCsv(res), 'text/csv') }, t('eg45.save'))), el('p', { className: 'bc-muted' }, t('eg45.model')));
    box.replaceChildren(...rows);
  }
  return { render, last: () => S.last };
}
