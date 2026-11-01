/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cost5d-ui.js — the 5D pane (0.8 EG.17, session `energy_PART_2`): the price table (paste a CSV or JSON, or TakeoffCraft's rates; edit the keywords that map
 * a price to the model's materials and classes), Check costs the 4D schedule's tasks (cost5d.js), and the result is cost by stage, work package and task,
 * the cash-flow curve drawn as inline SVG (no chart library) and planned vs built on a date. Nothing is priced until the person loads prices.
 *
 *   mountCost5d(pane, app) → { check() }
 *     app = { w() → ModelWriter (read), apply(label, op) → Promise (one undo step), index() → property index, tasks() → the 4D tasks (ifc-4d.js parseTasks),
 *             day?() → the 4D slider's day, save?(name, text) }
 * bimcraft.js mounts it as a tab beside the 4D schedule (the mount line is in docs/0.8-sessions/energy_PART_2.md). Test: bin/test-bimcraft.mjs --carbon.
 */
import { t } from './i18n.js';
import { priceFromCostBook, IMPORT_LABEL } from './data-packs.js';
import { matchTasks, dayText, parseDay } from './ifc-4d.js';
import { readElements } from './carbon-calc.js';
import { cleanCurrency, DEFAULT_CURRENCY, calcCost5d, readCostSettings, setCostSettings, valueAt, costCsv, priceCsv, priceJson, readPriceCsv, readPriceJson, fromTakeoff, PROFILES } from './cost5d.js';

export const STRINGS = {
  'cost5d.title': '5D costs', 'cost5d.intro': 'Prices each element from your price table and puts the cost on the 4D tasks. The prices are yours: nothing is priced until you load them.',
  'cost5d.prices': 'Price table', 'cost5d.none': 'No prices yet. Paste a CSV (id, match, classes, unit, density, mat, lab, waste, source, note) or JSON, or TakeoffCraft rates.',
  'cost5d.import': 'Paste prices, then Import', 'cost5d.import.go': 'Import', 'cost5d.import.book': 'Import a cost book (CSV export)', 'cost5d.import.label': IMPORT_LABEL, 'cost5d.import.takeoff': 'Import as TakeoffCraft rates', 'cost5d.imported': 'Imported {n} price rows.', 'cost5d.err.import': 'Not imported: {why}.',
  'cost5d.save': 'Save prices in the file', 'cost5d.saved': 'Saved in the file.', 'cost5d.csv.out': 'Export prices (CSV)', 'cost5d.json.out': 'Export prices (JSON)',
  'cost5d.profile': 'Spread a task\'s cost over its days', 'cost5d.p.even': 'Evenly', 'cost5d.p.front': 'Front-loaded', 'cost5d.p.back': 'Back-loaded', 'cost5d.p.bell': 'Bell',
  'cost5d.per': 'Curve by', 'cost5d.per.day': 'Day', 'cost5d.per.week': 'Week', 'cost5d.per.month': 'Month', 'cost5d.date': 'Planned vs built on (YYYY-MM-DD)',
  'cost5d.check': 'Cost the schedule', 'cost5d.total': 'Total', 'cost5d.scheduled': 'In tasks', 'cost5d.unscheduled': 'Priced but in no task', 'cost5d.unpriced': '{n} parts have no price.',
  'cost5d.groups': 'By stage and package', 'cost5d.tasks': 'By task', 'cost5d.curve': 'Cash flow (cumulative)', 'cost5d.planned': 'Planned to date', 'cost5d.built': 'Built (finished tasks)', 'cost5d.running': 'In progress', 'cost5d.remaining': 'Not started',
  'cost5d.currency': 'Currency of these prices (three letters, optional)', 'cost5d.cur.set': 'Every price and cost here is in {cur}.', 'cost5d.cur.default': 'This price table has no currency: costs are shown as {cur}, the shell default. Type one above to say what they are.', 'cost5d.err.currency': 'A currency is three letters, for example USD or EUR.',
  'cost5d.csv.result': 'Export costs (CSV)', 'cost5d.err.noprices': 'Load prices first.', 'cost5d.err.notasks': 'Load tasks in the 4D schedule first.',
};
const tr = (k, v) => { const s = t(k, v); return s === k ? String(STRINGS[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => v?.[n] ?? '') : s; };
const money = (x) => (Number.isFinite(x) ? x.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—');

/** The cumulative curve as an SVG string: a step-free polyline of the points, a bar per period, a light baseline. Pure, so the test reads it. */
export function curveSvg(points, { w = 320, h = 140, pad = 24 } = {}) {
  if (!points.length) return '';
  const max = points[points.length - 1].cum || 1, maxBar = Math.max(...points.map((p) => p.cost)) || 1, n = points.length;
  const x = (i) => pad + (n === 1 ? (w - 2 * pad) / 2 : i * (w - 2 * pad) / (n - 1)), y = (v) => h - pad - v / max * (h - 2 * pad);
  const bw = Math.max(1, (w - 2 * pad) / Math.max(n, 1) * 0.6);
  const bars = points.map((p, i) => `<rect x="${(x(i) - bw / 2).toFixed(1)}" y="${(h - pad - p.cost / maxBar * (h - 2 * pad) * 0.45).toFixed(1)}" width="${bw.toFixed(1)}" height="${(p.cost / maxBar * (h - 2 * pad) * 0.45).toFixed(1)}" fill="currentColor" opacity="0.25"/>`).join('');
  const line = points.map((p, i) => `${x(i).toFixed(1)},${y(p.cum).toFixed(1)}`).join(' ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${tr('cost5d.curve')}" style="width:100%;height:auto;color:inherit"><line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="currentColor" opacity="0.4"/>${bars}<polyline points="${line}" fill="none" stroke="currentColor" stroke-width="2"/><text x="${pad}" y="12" font-size="10" fill="currentColor">${money(max)}</text><text x="${pad}" y="${h - 8}" font-size="9" fill="currentColor">${points[0].label}</text><text x="${w - pad}" y="${h - 8}" font-size="9" text-anchor="end" fill="currentColor">${points[n - 1].label}</text></svg>`;
}

export function mountCost5d(pane, app) {
  const d = pane.ownerDocument;
  const el = (tag, attrs = {}, ...kids) => {
    const n = d.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k === 'on') for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); else if (v !== undefined && v !== null && v !== false) n.setAttribute(k, v === true ? '' : String(v)); }
    n.append(...kids.flat().filter((x) => x !== null && x !== undefined && x !== false));
    return n;
  };
  const S = { rows: null, profile: 'even', per: 'week', date: '', paste: '', last: null, said: '' };
  const load = () => { const s = readCostSettings(app.w()); S.rows = s.rows; S.profile = s.profile; S.currency = s.currency; };
  const button = (label, fn, attr) => el('button', { type: 'button', class: 'btn-line btn-sm-cc', ...attr, on: { click: async () => { try { await fn(); } catch (e) { S.said = String(e.key ? tr(e.key) : e.message); } draw(); } } }, label);
  const select = (key, options, label, prefix) => {
    const s = el('select', { class: 'form-select form-select-sm', 'data-cost5d-field': key }, ...options.map((o) => el('option', { value: o, ...(S[key] === o ? { selected: true } : {}) }, tr(prefix + o))));
    s.addEventListener('change', () => { S[key] = s.value; });
    return el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, label), s);
  };

  function check() {
    if (!S.rows.length) { S.last = null; S.said = tr('cost5d.err.noprices'); return null; }
    const tasks = app.tasks?.() || [];
    if (!tasks.length) { S.last = null; S.said = tr('cost5d.err.notasks'); return null; }
    const ix = app.index(), matched = matchTasks(ix, tasks);
    const r = calcCost5d(readElements(app.w()), S.rows, matched, { keyBase: ix.keyBase || 0, profile: S.profile, per: S.per });
    const day = parseDay(S.date);
    S.last = { ...r, at: day === null ? null : { date: S.date, ...valueAt(r.tasks, day, { profile: S.profile }) } };
    S.said = r.unpriced.length ? tr('cost5d.unpriced', { n: r.unpriced.length }) : '';
    return S.last;
  }

  const grid = (head, rows) => el('table', { class: 'table table-sm', style: 'font-size:0.75rem' }, el('thead', {}, el('tr', {}, ...head.map((h) => el('th', {}, h)))), el('tbody', {}, ...rows.map((r) => el('tr', {}, ...r.map((c) => el('td', {}, c))))));
  function result() {
    const r = S.last;
    if (!r) return el('div', {});
    const host = el('div', { 'data-cost5d-curve': true });
    host.innerHTML = curveSvg(r.flow.points);   // our own SVG built from numbers and ISO dates only
    return el('div', { 'data-cost5d-result': true },
      el('p', {}, el('strong', {}, tr('cost5d.total') + ': ' + money(r.grand)), ' · ' + tr('cost5d.scheduled') + ': ' + money(r.scheduled) + ' · ' + tr('cost5d.unscheduled') + ': ' + money(r.unscheduled)),
      el('h4', {}, tr('cost5d.curve')), host,
      r.at ? el('p', { 'data-cost5d-at': true }, `${r.at.date}: ${tr('cost5d.planned')} ${money(r.at.planned)} · ${tr('cost5d.built')} ${money(r.at.built)} · ${tr('cost5d.running')} ${money(r.at.running)} · ${tr('cost5d.remaining')} ${money(r.at.remaining)}`) : null,
      el('h4', {}, tr('cost5d.groups')), grid(['', '', tr('cost5d.total')], r.groups.map((g) => [g.kind === 'stage' ? g.name : '', g.kind === 'package' ? g.name : '', money(g.cost)])),
      el('h4', {}, tr('cost5d.tasks')), grid(['', '', ''], r.tasks.map((x) => [x.name, dayText(x.start) + ' – ' + dayText(x.finish), money(x.cost)])),
      button(tr('cost5d.csv.result'), () => app.save?.('costs-5d.csv', costCsv(r)), { 'data-cost5d-csv-result': true }));
  }

  function draw() {
    pane.replaceChildren();
    if (!S.rows) { try { load(); } catch { S.rows = []; } }
    const ta = el('textarea', { rows: 4, class: 'form-control form-control-sm', 'data-cost5d-paste': true }, S.paste);
    ta.addEventListener('change', () => { S.paste = ta.value; });
    const date = el('input', { type: 'text', value: S.date, placeholder: 'YYYY-MM-DD', class: 'form-control form-control-sm', 'data-cost5d-date': true });
    date.addEventListener('change', () => { S.date = date.value.trim(); });
    const imp = (takeoff) => () => {
      const text = S.paste.trim();
      const r = takeoff ? (() => { const x = fromTakeoff(text); return { rows: x.rows, errors: x.skipped.map((s) => ({ code: s.code })) }; })() : text.startsWith('{') || text.startsWith('[') ? readPriceJson(text) : readPriceCsv(text);
      if (!r.rows.length) { S.said = tr('cost5d.err.import', { why: r.errors[0]?.code || 'empty' }); return; }
      if (r.currency) S.currency = r.currency;
      const by = new Map(S.rows.map((x) => [x.id, x]));
      for (const x of r.rows) by.set(x.id, x);
      S.rows = [...by.values()]; S.said = tr('cost5d.imported', { n: r.rows.length });
    };
    const prices = S.rows.length ? grid(['id', 'match', 'unit', 'mat', 'lab', 'waste'], S.rows.map((r) => [r.id, r.match.join(' | '), r.unit, String(r.mat), String(r.lab), String(r.waste)])) : el('p', { 'data-cost5d-none': true }, tr('cost5d.none'));
    pane.append(el('div', { class: 'cost5d', style: 'padding:0.5rem;font-size:0.8rem' }, el('p', {}, tr('cost5d.intro')),
      el('h4', {}, tr('cost5d.prices')), prices,
      el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, tr('cost5d.currency')), el('input', { type: 'text', value: S.currency || '', maxlength: '3', placeholder: DEFAULT_CURRENCY, class: 'form-control form-control-sm', 'data-cost5d-currency': true, on: { change: (e) => { const raw = e.target.value.trim(), c = cleanCurrency(raw); S.currency = c; e.target.value = c; if (raw && !c) S.said = tr('cost5d.err.currency'); S.said = ''; } } })),
      el('p', { class: 'text-muted', 'data-cost5d-curnote': true }, S.currency ? tr('cost5d.cur.set', { cur: S.currency }) : tr('cost5d.cur.default', { cur: DEFAULT_CURRENCY })),
      el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, tr('cost5d.import')), ta),
      el('div', { style: 'display:flex;gap:0.25rem;flex-wrap:wrap' }, button(tr('cost5d.import.go'), imp(false), { 'data-cost5d-import': true }), button(tr('cost5d.import.takeoff'), imp(true), { 'data-cost5d-takeoff': true }),
        button(tr('cost5d.import.book'), () => {
          const r = priceFromCostBook(S.paste, { source: 'your cost book' });
          if (!r.rows.length) { S.said = tr('cost5d.err.import', { why: r.errors[0]?.code || 'empty' }); return; }
          const by = new Map((S.rows || []).map((x) => [x.id, x]));
          for (const x of r.rows) by.set(x.id, x);
          S.rows = [...by.values()]; S.said = tr('cost5d.imported', { n: r.rows.length }) + ' ' + tr('cost5d.import.label');
        }, { 'data-cost5d-book': true }),
        button(tr('cost5d.save'), async () => { await app.apply('prices', setCostSettings({ rows: S.rows, profile: S.profile, currency: S.currency || undefined })); S.said = tr('cost5d.saved'); }, { 'data-cost5d-save': true }),
        button(tr('cost5d.csv.out'), () => app.save?.('prices.csv', priceCsv(S.rows)), { 'data-cost5d-csv': true }), button(tr('cost5d.json.out'), () => app.save?.('prices.json', priceJson(S.rows, S.currency)), { 'data-cost5d-json': true })),
      select('profile', PROFILES, tr('cost5d.profile'), 'cost5d.p.'), select('per', ['day', 'week', 'month'], tr('cost5d.per'), 'cost5d.per.'),
      el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, tr('cost5d.date')), date),
      button(tr('cost5d.check'), () => { check(); }, { 'data-cost5d-check': true }), el('p', { 'data-cost5d-say': true, style: 'white-space:pre-wrap' }, S.said), result()));
  }
  draw();
  return { check: () => { const r = check(); draw(); return r; }, state: S };
}
