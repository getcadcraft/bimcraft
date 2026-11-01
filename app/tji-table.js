/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tji-table.js — a joist maker's span table that THE PERSON loads, and the series / depth it picks from a span (0.8 GH.3-E,
 * getcadcraft/bimcraft#3). No DOM, no imports: bin/test-bimcraft.mjs --gh3 runs it in Node.
 *
 * We cannot ship a maker's tables (they are the maker's, and change with each edition), so BimCraft carries NO numbers of its own
 * here: the person loads the table for the product and edition they use, and the layout is preliminary guidance from it. The
 * only table in the repository is tools/bimcraft-test/fixtures/tji-example.json, made-up numbers marked "EXAMPLE, not for design".
 *
 * Format `cadcraft-tji-table` (JSON; the CSV form is below):
 *   { "format": "cadcraft-tji-table", "version": 1,
 *     "manufacturer": "…", "product": "…", "edition": "…", "source": "the document and page the numbers were read from",
 *     "units": "imperial" | "metric",          imperial: depth, spacing and bearing in inches, spans in feet (15.5 or "15-6" = ft-in), loads psf
 *                                              metric:   depth, spacing and bearing in mm, spans in metres, loads kPa
 *     "example": true,                         optional: made-up numbers (the layout says so everywhere)
 *     "cases": [ { "id": "40-10-L480", "live": 40, "dead": 10, "deflection": "L/480", "bearing": 1.75, "note": "…" } ],
 *     "rows":  [ { "series": "…", "depth": 9.5, "label": "optional name written on the drawing",
 *                  "spans": { "40-10-L480": { "16": "15-6", "19.2": "14-0", "24": "12-6" } } } ] }
 *   `spans` is the largest CLEAR span for each case (by its id) and each on-centre spacing (the key, in the spacing unit).
 *
 * CSV: lines "# key = value" for manufacturer, product, edition, source, units, example; lines "# case = id; live; dead; deflection; bearing";
 *   then the header "series,depth,case,spacing,span" and one row per number. (Same units as JSON.)
 *
 *   parseTjiTable(text | object) → { ok: true, table } | { ok: false, errors: [{ key, fill }] }   table in mm, spans in mm
 *   pickTji(table, { span, spacing, caseId }) → { ok: true, series, depth, size, max, spacing, caseId } | { ok: false, key, fill }
 *   tjiAssumptions(table, caseId) → { live, dead, deflection, bearing, caseId, source, manufacturer, product, edition, example }
 *   tjiStatement(table, caseId, t, fmt) → [line]      the lines printed on the plan / schedule / report
 *   setActiveTji(table, caseId) · activeTji() → { table, caseId } | null · onActiveTji(fn)   the table in force (the person's)
 */
const IN = 25.4, FT = 304.8;
const bad = (key, fill = {}) => ({ key, fill });
const num = (v) => (typeof v === 'number' ? v : typeof v === 'string' && v.trim() !== '' ? Number(v) : NaN);

/** "15-6" = 15 ft 6 in; "15-6 1/2" too; a plain number is feet (imperial) or metres (metric). → mm, or NaN. */
function spanMm(v, metric) {
  if (metric) { const n = num(v); return n > 0 ? n * 1000 : NaN; }
  if (typeof v === 'number') return v > 0 ? v * FT : NaN;
  const s = String(v ?? '').trim();
  const m = /^(\d+)\s*-\s*(\d+(?:\.\d+)?)(?:\s+(\d+)\/(\d+))?$/.exec(s);
  if (m) return +m[1] * FT + (+m[2] + (m[3] ? +m[3] / +m[4] : 0)) * IN;
  const n = Number(s);
  return n > 0 ? n * FT : NaN;
}

function csvToObject(text) {
  const o = { format: 'cadcraft-tji-table', version: 1, cases: [], rows: [] };
  const byKey = new Map();
  let head = null;
  for (const raw of String(text).split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('#')) {
      const m = /^#\s*([a-z]+)\s*=\s*(.*)$/i.exec(line);
      if (!m) continue;
      const k = m[1].toLowerCase(), v = m[2].trim();
      if (k === 'case') { const [id, live, dead, deflection, bearing] = v.split(';').map((x) => x.trim()); o.cases.push({ id, live: num(live), dead: num(dead), deflection, bearing: num(bearing) }); }
      else if (k === 'example') o.example = /^(1|true|yes)$/i.test(v);
      else o[k] = v;
      continue;
    }
    const cells = line.split(',').map((c) => c.trim());
    if (!head) { head = cells.map((c) => c.toLowerCase()); continue; }
    const r = Object.fromEntries(head.map((h, i) => [h, cells[i]]));
    const key = r.series + '|' + r.depth;
    let row = byKey.get(key);
    if (!row) { row = { series: r.series, depth: r.depth, spans: {} }; byKey.set(key, row); o.rows.push(row); }
    (row.spans[r.case] ||= {})[r.spacing] = r.span;
  }
  return o;
}

export function parseTjiTable(input) {
  let o = input;
  if (typeof input === 'string') {
    const s = input.trim();
    try { o = s.startsWith('{') ? JSON.parse(s) : csvToObject(s); } catch (e) { return { ok: false, errors: [bad('tji.err.parse')] }; }
  }
  const errors = [];
  if (!o || typeof o !== 'object' || o.format !== 'cadcraft-tji-table') return { ok: false, errors: [bad('tji.err.format')] };
  if (o.version !== 1) errors.push(bad('tji.err.version', { v: String(o.version) }));
  for (const k of ['manufacturer', 'edition', 'source']) if (!String(o[k] ?? '').trim()) errors.push(bad('tji.err.field', { field: k }));
  const metric = o.units === 'metric';
  if (o.units !== 'metric' && o.units !== 'imperial') errors.push(bad('tji.err.units'));
  const u = metric ? 1 : IN;
  const cases = [];
  for (const c of Array.isArray(o.cases) ? o.cases : []) {
    const id = String(c?.id ?? '').trim();
    if (!id || cases.some((x) => x.id === id)) { errors.push(bad('tji.err.case', { id })); continue; }
    cases.push({ id, live: num(c.live), dead: num(c.dead), deflection: String(c.deflection ?? '').trim(), bearing: Number.isFinite(num(c.bearing)) ? num(c.bearing) * u : null, note: String(c.note ?? '') });
  }
  if (!cases.length) errors.push(bad('tji.err.nocases'));
  const rows = [];
  for (const r of Array.isArray(o.rows) ? o.rows : []) {
    const series = String(r?.series ?? '').trim(), depth = num(r?.depth) * u;
    if (!series || !(depth > 0)) { errors.push(bad('tji.err.row', { series: series || '?' })); continue; }
    const spans = new Map();
    for (const [cid, bySp] of Object.entries(r.spans || {})) {
      if (!cases.some((c) => c.id === cid)) { errors.push(bad('tji.err.case', { id: cid })); continue; }
      const list = [];
      for (const [sp, v] of Object.entries(bySp || {})) {
        const spacing = num(sp) * u, max = spanMm(v, metric);
        if (!(spacing > 0) || !(max > 0)) { errors.push(bad('tji.err.span', { series, case: cid, spacing: sp })); continue; }
        list.push({ spacing, max });
      }
      if (list.length) spans.set(cid, list.sort((a, b) => a.spacing - b.spacing));
    }
    if (!spans.size) { errors.push(bad('tji.err.row', { series })); continue; }
    rows.push({ series, depth, label: String(r.label ?? '').trim(), spans });
  }
  if (!rows.length) errors.push(bad('tji.err.norows'));
  if (errors.length) return { ok: false, errors };
  rows.sort((a, b) => a.depth - b.depth || a.series.localeCompare(b.series));
  return { ok: true, table: { manufacturer: String(o.manufacturer).trim(), product: String(o.product ?? '').trim(), edition: String(o.edition).trim(), source: String(o.source).trim(), metric, example: o.example === true, cases, rows,
    id: [o.manufacturer, o.product, o.edition].map((x) => String(x ?? '').trim()).filter(Boolean).join(' ') } };
}

const depthWord = (mm, metric) => (metric ? Math.round(mm) + ' mm' : (Math.round(mm / IN * 1000) / 1000) + ' in');
/** A listed spacing column serves a requested spacing equal to it or up to 2% CLOSER (400 mm for 16 in, 600 mm for 24 in): never a wider one. */
const spacingFits = (listed, want) => want <= listed * 1.005 && want >= listed * 0.98;
/**
 * The smallest depth (then the shortest-reaching series at that depth) whose listed maximum clear span, for this case and this on-centre
 * spacing, reaches `span` (mm). Refuses, with a plain message, a case or spacing the table does not list and a span beyond every row.
 */
export function pickTji(table, { span, spacing, caseId } = {}) {
  if (!table) return bad('tji.err.none');
  const cs = table.cases.find((c) => c.id === caseId) || table.cases[0];
  const near = (a) => spacingFits(a, spacing);
  const listed = [...new Set(table.rows.flatMap((r) => (r.spans.get(cs.id) || []).map((x) => x.spacing)))].sort((a, b) => a - b);
  if (!listed.some(near)) return bad('tji.err.spacing', { spacing: depthWord(spacing, table.metric), list: listed.map((x) => depthWord(x, table.metric)).join(', '), table: table.id });
  const cands = [];
  for (const r of table.rows) { const hit = (r.spans.get(cs.id) || []).find((x) => near(x.spacing)); if (hit) cands.push({ r, max: hit.max }); }
  cands.sort((a, b) => a.r.depth - b.r.depth || a.max - b.max);
  const top = cands.reduce((m, c) => Math.max(m, c.max), 0);
  const pick = cands.find((c) => c.max + 1e-6 >= span);
  if (!pick) return bad('tji.err.beyond', { span: (span / FT).toFixed(1) + ' ft / ' + (span / 1000).toFixed(2) + ' m', max: (top / FT).toFixed(1) + ' ft / ' + (top / 1000).toFixed(2) + ' m', table: table.id });
  const label = pick.r.label || (pick.r.series + ' ' + depthWord(pick.r.depth, table.metric));
  return { ok: true, series: pick.r.series, depth: pick.r.depth, size: label, max: pick.max, spacing, caseId: cs.id };
}

/** The listed maximum clear span (mm) of the row a framing named by its size label, at this spacing and case: for the regs add-on's check. null = not in the table. */
export function tjiMaxSpan(table, size, spacing, caseId) {
  if (!table) return null;
  const cs = table.cases.find((c) => c.id === caseId) || table.cases[0];
  const r = table.rows.find((x) => (x.label || (x.series + ' ' + depthWord(x.depth, table.metric))) === size);
  const hit = r && (r.spans.get(cs.id) || []).find((x) => spacingFits(x.spacing, spacing));
  return hit ? { span: hit.max, case: cs } : null;
}

export function tjiAssumptions(table, caseId) {
  const c = table.cases.find((x) => x.id === caseId) || table.cases[0];
  return { caseId: c.id, live: c.live, dead: c.dead, deflection: c.deflection, bearing: c.bearing, metric: table.metric, source: table.source, manufacturer: table.manufacturer, product: table.product, edition: table.edition, example: table.example, table: table.id };
}
/**
 * The assumption lines for the drawing, schedule and Problems report. t(key, fill) writes a word; a missing value is said, never filled in.
 * Always ends with the plain statement.
 */
export function tjiStatement(table, caseId, t) {
  const a = tjiAssumptions(table, caseId), unit = a.metric ? 'kPa' : 'psf';
  const val = (v, u) => (Number.isFinite(v) ? v + ' ' + u : t('tji.unstated'));
  const bearing = Number.isFinite(a.bearing) ? (a.metric ? Math.round(a.bearing) + ' mm' : Math.round(a.bearing / IN * 1000) / 1000 + ' in') : t('tji.unstated');
  const out = [];
  if (a.example) out.push(t('tji.example'));
  out.push(t('tji.line.loads', { live: val(a.live, unit), dead: val(a.dead, unit), defl: a.deflection || t('tji.unstated'), bearing }));
  out.push(t('tji.line.source', { table: a.table, source: a.source }));
  out.push(t('tji.statement'));
  return out;
}

// ---- the table in force ----
let active = null;
const listeners = new Set();
export function setActiveTji(table, caseId = null) { active = table ? { table, caseId: caseId || table.cases[0].id } : null; for (const fn of [...listeners]) { try { fn(active); } catch (e) { /* a listener's failure never stops the others */ } } }
export const activeTji = () => active;
export function onActiveTji(fn) { listeners.add(fn); return () => listeners.delete(fn); }
/** A key that changes when the table or case in force changes (part of a framing's shape key; '' when none). */
export const activeTjiKey = () => (active ? active.table.id + '|' + active.table.edition + '|' + active.caseId + '|' + active.table.rows.length : '');
