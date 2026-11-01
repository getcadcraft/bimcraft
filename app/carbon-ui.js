/* SPDX-License-Identifier: Apache-2.0 */
/**
 * carbon-ui.js — the Carbon pane (0.8 EG.14, session `energy_PART_2`): Check adds up the embodied carbon of the open model (carbon-calc.js), lists it by
 * material, class and storey, posts the Problems to the shell's ⚠ panel (source `bimcraft.carbon`, kind engine), and edits the factor table: change a
 * figure, mark a row checked, add a row, import / export CSV or JSON, save the table in the file (one undo step). The label that says the shipped rows
 * are starter values stays on screen above the table.
 *
 *   mountCarbon(pane, app) → { check() }
 *     app = { w() → ModelWriter (read), apply(label, op) → Promise (one undo step), problems?: window.ccProblems, save?(name, text) }
 * bimcraft.js mounts it as a right-panel tab (the mount line is in docs/0.8-sessions/energy_PART_2.md). Test: bin/test-bimcraft.mjs --carbon (a stand-in DOM).
 */
import { t } from './i18n.js';
import { calcCarbonModel, readSettings, setCarbonSettings } from './carbon-calc.js';
import { carbonCsv } from './carbon.js';
import { carbonFromFile, IMPORT_LABEL } from './data-packs.js';
import { STARTER_LABEL, cleanRow, tableCsv, tableJson, readTableCsv, readTableJson } from './carbon-factors.js';

/** English text for every key (the language files take these; a key a file lacks falls back here). */
export const STRINGS = {
  'carbon.title': 'Embodied carbon', 'carbon.intro': 'Adds up kgCO2e from each element\'s quantity and material. An early-design estimate from the factors below, not an assessment.',
  'carbon.starter': STARTER_LABEL, 'carbon.check': 'Check carbon', 'carbon.modules': 'Count', 'carbon.m.a1a3': 'A1–A3 product', 'carbon.m.a4': 'A4 transport', 'carbon.m.a5': 'A5 site waste',
  'carbon.floor': 'Floor area (m²), 0 = from the model', 'carbon.total': 'Total', 'carbon.perm2': 'kgCO2e per m² of floor', 'carbon.mass': 'Mass counted', 'carbon.kg': 'kgCO2e',
  'carbon.bymaterial': 'By material', 'carbon.byclass': 'By class', 'carbon.bystorey': 'By storey', 'carbon.factors': 'Factor table', 'carbon.col.id': 'Id', 'carbon.col.match': 'Keywords', 'carbon.col.basis': 'Per', 'carbon.col.density': 'kg/m³',
  'carbon.col.a1a3': 'A1–A3', 'carbon.col.a4': 'A4', 'carbon.col.a5': 'A5', 'carbon.col.source': 'Source', 'carbon.col.checked': 'Checked', 'carbon.col.from': 'From',
  'carbon.add': 'Add a row', 'carbon.save': 'Save table in the file', 'carbon.saved': 'Saved in the file.', 'carbon.csv.out': 'Export table (CSV)', 'carbon.json.out': 'Export table (JSON)', 'carbon.csv.result': 'Export result (CSV)',
  'carbon.import': 'Paste a CSV or JSON table, then Import', 'carbon.import.go': 'Import', 'carbon.import.file': 'Import a factor file (ICE or EC3 style CSV)', 'carbon.import.source': 'Name of the source (kept on every row)', 'carbon.import.label': IMPORT_LABEL, 'carbon.imported': 'Imported {n} rows.', 'carbon.err.import': 'Not imported: {why}.',
  'carbon.noelements': 'The model has no building elements to count.', 'carbon.unmatched': '{n} parts have no factor.', 'carbon.missing': '{n} parts have no quantity.',
  'carbon.err.failed': 'The check could not run.', 'carbon.err.row': 'A row is not valid ({why}).',
};
const tr = (k, v) => { const s = t(k, v); return s === k ? String(STRINGS[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => v?.[n] ?? '') : s; };
const f1 = (x) => (Number.isFinite(x) ? String(Math.round(x * 10) / 10) : '—');
const f0 = (x) => (Number.isFinite(x) ? Math.round(x).toLocaleString('en-US') : '—');

export function mountCarbon(pane, app) {
  const d = pane.ownerDocument;
  const el = (tag, attrs = {}, ...kids) => {
    const n = d.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === 'class') n.className = v; else if (k === 'on') for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); else if (v !== undefined && v !== null && v !== false) n.setAttribute(k, v === true ? '' : String(v)); }
    n.append(...kids.flat().filter((x) => x !== null && x !== undefined && x !== false));
    return n;
  };
  const S = { rows: null, modules: ['a1a3'], floor: 0, last: null, said: '', paste: '' };
  let src = null;
  const post = (list) => { try { src ||= app.problems?.source?.({ id: 'bimcraft.carbon', kind: 'engine', label: tr('carbon.title') }); src?.set(list); } catch { /* the shell's Problems are not loaded */ } };
  const load = () => { const s = readSettings(app.w()); S.rows = s.rows.map((r) => ({ ...r })); S.modules = s.modules; S.floor = s.floorArea; };

  function draw() {
    pane.replaceChildren();
    if (!S.rows) { try { load(); } catch { S.rows = []; } }
    pane.append(el('div', { class: 'carbon', style: 'padding:0.5rem;font-size:0.8rem' }, el('p', {}, tr('carbon.intro')), settings(), el('p', { 'data-carbon-say': true, style: 'white-space:pre-wrap' }, S.said), result(), table()));
  }
  const button = (label, fn, attr) => el('button', { type: 'button', class: 'btn-line btn-sm-cc', ...attr, on: { click: async () => { try { await fn(); } catch (e) { S.said = String(e.key ? tr(e.key) : e.message); } draw(); } } }, label);

  function settings() {
    const boxes = ['a1a3', 'a4', 'a5'].map((m) => {
      const c = el('input', { type: 'checkbox', 'data-carbon-mod': m, ...(S.modules.includes(m) ? { checked: true } : {}), ...(m === 'a1a3' ? { disabled: true } : {}) });
      c.addEventListener('change', () => { S.modules = c.checked ? [...new Set([...S.modules, m])] : S.modules.filter((x) => x !== m); });
      return el('label', { style: 'margin-right:0.75rem' }, c, ' ', tr('carbon.m.' + m));
    });
    const fl = el('input', { type: 'number', step: 'any', min: 0, value: S.floor, class: 'form-control form-control-sm', 'data-carbon-floor': true });
    fl.addEventListener('change', () => { S.floor = Number(fl.value) || 0; });
    return el('div', {}, el('div', {}, tr('carbon.modules'), ': ', ...boxes), el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, tr('carbon.floor')), fl),
      button(tr('carbon.check'), () => check(), { 'data-carbon-check': true }));
  }

  function check() {
    const r = calcCarbonModel(app.w(), { modules: S.modules, floorArea: S.floor > 0 ? S.floor : undefined, rows: S.rows.map((x) => cleanRow(x).row).filter(Boolean) });
    if (!r.ok) { S.last = null; S.said = tr('carbon.err.failed'); post([]); return r; }
    S.last = r; S.said = [r.res.unmatched.length ? tr('carbon.unmatched', { n: r.res.unmatched.length }) : '', r.res.missing.length ? tr('carbon.missing', { n: r.res.missing.length }) : ''].filter(Boolean).join(' ');
    post(r.problems);
    return r;
  }

  const grid = (head, rows) => el('table', { class: 'table table-sm', style: 'font-size:0.75rem' }, el('thead', {}, el('tr', {}, ...head.map((h) => el('th', {}, h)))), el('tbody', {}, ...rows.map((r) => el('tr', {}, ...r.map((c) => el('td', {}, c))))));
  function result() {
    const r = S.last;
    if (!r) return el('div', {});
    const T = r.res.totals, grp = (list) => list.map((g) => [g.key, f0(g.total), f1(g.pct) + ' %']);
    return el('div', { 'data-carbon-result': true },
      el('p', {}, el('strong', {}, tr('carbon.total') + ': ' + f0(T.total) + ' ' + tr('carbon.kg')), ' · ' + tr('carbon.mass') + ': ' + f0(T.mass) + ' kg' + (r.res.perM2 !== null ? ' · ' + f1(r.res.perM2) + ' ' + tr('carbon.perm2') : '')),
      el('h4', {}, tr('carbon.bymaterial')), grid(['', tr('carbon.kg'), '%'], grp(r.res.byMaterial)),
      el('h4', {}, tr('carbon.byclass')), grid(['', tr('carbon.kg'), '%'], grp(r.res.byClass)),
      el('h4', {}, tr('carbon.bystorey')), grid(['', tr('carbon.kg'), '%'], grp(r.res.byStorey)),
      button(tr('carbon.csv.result'), () => app.save?.('embodied-carbon.csv', carbonCsv(r.res)), { 'data-carbon-csv-result': true }));
  }

  function table() {
    const touch = (r) => { if (r.origin === 'starter') r.origin = 'edited'; };
    const edit = (row, key, num) => {
      const i = el('input', { type: num ? 'number' : 'text', step: 'any', value: row[key] ?? '', class: 'form-control form-control-sm', 'data-carbon-cell': row.id + '.' + key });
      i.addEventListener('change', () => { row[key] = num ? (i.value === '' ? null : Number(i.value)) : i.value; touch(row); });
      return i;
    };
    const words = (row) => {
      const i = el('input', { type: 'text', value: row.match.join('|'), class: 'form-control form-control-sm', 'data-carbon-cell': row.id + '.match' });
      i.addEventListener('change', () => { row.match = i.value.split('|').map((x) => x.trim()).filter(Boolean); touch(row); });
      return i;
    };
    const chk = (row) => { const c = el('input', { type: 'checkbox', ...(row.checked ? { checked: true } : {}), 'data-carbon-cell': row.id + '.checked' }); c.addEventListener('change', () => { row.checked = c.checked; touch(row); }); return c; };
    const rows = S.rows.map((r) => [r.id, words(r), r.basis, edit(r, 'density', true), edit(r, 'a1a3', true), edit(r, 'a4', true), edit(r, 'a5', true), edit(r, 'source'), chk(r), r.origin]);
    const ta = el('textarea', { rows: 3, class: 'form-control form-control-sm', 'data-carbon-paste': true }, S.paste);
    ta.addEventListener('change', () => { S.paste = ta.value; });
    return el('div', { 'data-carbon-table': true },
      el('h4', {}, tr('carbon.factors')), el('p', { 'data-carbon-starter': true, style: 'opacity:0.85' }, tr('carbon.starter')),
      grid([tr('carbon.col.id'), tr('carbon.col.match'), tr('carbon.col.basis'), tr('carbon.col.density'), tr('carbon.col.a1a3'), tr('carbon.col.a4'), tr('carbon.col.a5'), tr('carbon.col.source'), tr('carbon.col.checked'), tr('carbon.col.from')], rows),
      el('div', { style: 'display:flex;gap:0.25rem;flex-wrap:wrap' },
        button(tr('carbon.add'), () => { S.rows.push({ id: 'new-' + (S.rows.length + 1), match: ['material'], classes: [], basis: 'kg', density: 1000, a1a3: 1, a4: null, a5: null, source: 'yours', checked: false, note: '', origin: 'yours' }); }, { 'data-carbon-add': true }),
        button(tr('carbon.save'), async () => { await app.apply('carbon factors', setCarbonSettings({ rows: S.rows.filter((r) => r.origin !== 'starter'), modules: S.modules, floorArea: S.floor })); S.said = tr('carbon.saved'); }, { 'data-carbon-save': true }),
        button(tr('carbon.csv.out'), () => app.save?.('carbon-factors.csv', tableCsv(S.rows)), { 'data-carbon-csv': true }),
        button(tr('carbon.json.out'), () => app.save?.('carbon-factors.json', tableJson(S.rows)), { 'data-carbon-json': true })),
      el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, tr('carbon.import')), ta),
      button(tr('carbon.import.go'), () => {
        const text = S.paste.trim(), r = text.startsWith('{') || text.startsWith('[') ? readTableJson(text) : readTableCsv(text);
        if (!r.rows.length) { S.said = tr('carbon.err.import', { why: r.errors[0]?.code || 'empty' }); return; }
        const by = new Map(S.rows.map((x) => [x.id, x]));
        for (const x of r.rows) by.set(x.id, { ...x, origin: by.has(x.id) ? 'edited' : 'yours' });
        S.rows = [...by.values()]; S.said = tr('carbon.imported', { n: r.rows.length }) + (r.errors.length ? ' ' + tr('carbon.err.import', { why: r.errors.length + ' ' + r.errors[0].code }) : '');
      }, { 'data-carbon-import': true }),
      el('label', { style: 'display:grid;gap:0.1rem;margin:0.25rem 0' }, el('span', {}, tr('carbon.import.source')), (() => { const i = el('input', { type: 'text', value: S.source || '', class: 'form-control form-control-sm', 'data-carbon-source': true }); i.addEventListener('change', () => { S.source = i.value; }); return i; })()),
      button(tr('carbon.import.file'), () => {
        const r = carbonFromFile(S.paste, { source: S.source || 'your file' });
        if (!r.rows.length) { S.said = tr('carbon.err.import', { why: r.errors[0]?.code || 'empty' }); return; }
        const by = new Map(S.rows.map((x) => [x.id, x]));
        for (const x of r.rows) by.set(x.id, { ...x, origin: by.has(x.id) ? 'edited' : 'yours' });
        S.rows = [...by.values()]; S.said = tr('carbon.imported', { n: r.rows.length }) + ' ' + tr('carbon.import.label') + (r.errors.length ? ' ' + tr('carbon.err.import', { why: r.errors.length + ' ' + r.errors[0].code }) : '');
      }, { 'data-carbon-import-file': true }));
  }

  draw();
  return { check: () => { const r = check(); draw(); return r; }, state: S };
}
