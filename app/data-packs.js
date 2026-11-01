/* SPDX-License-Identifier: Apache-2.0 */
/**
 * data-packs.js — swappable DATA SOURCES for BimCraft's carbon, cost and PV panes (0.8 EG.14 / EG.17 / EG.15; owner decisions 2026-10-29, session dec-eg_PART_3).
 * DOM-free. A source is never built in: the person (or an add-on that carries a file) brings it, so the factor, price or climate source can be swapped without
 * touching the engines. Nothing here holds a factor, a price or a climate number of its own, and nothing is fetched except when `fetchClimate` is called
 * from a button the person pressed. Every imported row is `checked: false` and names its source.
 *
 *   PACK_FORMAT 'cadcraft-data-pack' v1: { format, version, kind: 'carbon-factors' | 'price-book' | 'climate', id, name, source {name, url, license, retrieved}, rows | data }
 *   readPack(text)                                   → { ok, pack, error }    validated; rows pass the same cleaners as the panes' own tables
 *   makePack(kind, id, name, source, payload)        → pack object
 *   carbonFromFile(text, opts)                       → { rows, errors, columns }   ICE-style / EC3-style CSV (header synonyms; opts.map overrides: {name, unit, gwp, density})
 *   priceFromCostBook(text, opts)                    → { rows, errors, columns }   cost-book / RSMeans-style CSV export (description, unit, material, labor); opts.map overrides
 *   nasaPowerUrl(lat, lon) / pvgisUrl(lat, lon)      → the request address (nothing is sent here)
 *   parseNasaPower(json) / parsePvgis(json)          → { ghi: [12 kWh/m²/day], tAmb: [12 °C], source }  (null when the answer is not what we expect)
 *   climateCacheKey(provider, lat, lon) / readCache(store, key) / writeCache(store, key, value)   a cache in any {getItem,setItem}; 0.1° grid
 *   fetchClimate(provider, lat, lon, { fetch, store, refresh }) → { ok, from: 'cache'|'network', climate } | { ok:false, fallback:'clear', error }  — the fallback is the
 *       clear-sky ceiling the yield engine already has, said in the result.
 * Test: node bin/test-bimcraft.mjs --datapacks.
 */
import { parseCsv, cleanRow, norm, matchRow, STARTER } from './carbon-factors.js';
import { cleanPriceRow } from './cost5d.js';

export const PACK_FORMAT = 'cadcraft-data-pack';
export const KINDS = Object.freeze(['carbon-factors', 'price-book', 'climate']);
export const IMPORT_LABEL = 'Imported from your file: unreviewed, not checked. The figures are your source\'s, not ours.';

const clip = (v, n) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const num = (v) => { const s = String(v ?? '').replace(/[$€£,\s]/g, ''); if (s === '') return null; const n = Number(s); return Number.isFinite(n) ? n : null; };
const unguard = (s) => (/^'[=+\-@]/.test(s) ? s.slice(1) : s);
const slug = (s) => norm(s).replace(/ /g, '-').slice(0, 50) || 'item';

export function makePack(kind, id, name, source, payload) {
  const pack = { format: PACK_FORMAT, version: 1, kind, id: slug(id), name: clip(name, 120), source: { name: clip(source?.name, 120), url: clip(source?.url, 300), license: clip(source?.license, 120), retrieved: clip(source?.retrieved, 20) } };
  if (kind === 'climate') pack.data = payload; else pack.rows = payload;
  return pack;
}

export function readPack(text) {
  let j;
  if (String(text).length > 2000000) return { ok: false, error: 'big' };
  try { j = JSON.parse(String(text).replace(/^﻿/, '')); } catch { return { ok: false, error: 'json' }; }
  if (!j || j.format !== PACK_FORMAT || j.version !== 1 || !KINDS.includes(j.kind)) return { ok: false, error: 'format' };
  const source = { name: clip(j.source?.name, 120), url: clip(j.source?.url, 300), license: clip(j.source?.license, 120), retrieved: clip(j.source?.retrieved, 20) };
  if (!source.name) return { ok: false, error: 'source' };   // a pack must say where its numbers come from
  const base = { format: PACK_FORMAT, version: 1, kind: j.kind, id: slug(j.id || j.name || 'pack'), name: clip(j.name, 120) || source.name, source };
  if (j.kind === 'climate') {
    const d = j.data;
    const okArr = (a, lo, hi) => Array.isArray(a) && a.length === 12 && a.every((x) => Number.isFinite(x) && x >= lo && x <= hi);
    if (!d || !okArr(d.ghi, 0, 12) || !okArr(d.tAmb, -60, 60)) return { ok: false, error: 'climate' };
    return { ok: true, pack: { ...base, data: { ghi: d.ghi.slice(), tAmb: d.tAmb.slice() } } };
  }
  if (!Array.isArray(j.rows)) return { ok: false, error: 'rows' };
  const clean = j.kind === 'carbon-factors' ? cleanRow : cleanPriceRow;
  const rows = [], bad = [];
  j.rows.slice(0, 5000).forEach((r, i) => { const c = clean({ ...r, source: r?.source || source.name }); if (c.row) rows.push({ ...c.row, checked: false }); else bad.push({ index: i, code: c.errors[0] }); });
  return { ok: rows.length > 0, pack: { ...base, rows }, errors: bad, error: rows.length ? '' : 'rows' };
}

// ------------------------------------------------------------------------------------------------ a CSV from a factor database or a cost book
const SYN = {
  name: ['name', 'material', 'description', 'product', 'item', 'material name', 'item description', 'component'],
  unit: ['unit', 'declared unit', 'uom', 'units', 'functional unit', 'u m'],
  gwp: ['gwp', 'gwp total', 'gwp a1 a3', 'a1 a3', 'a1a3', 'embodied carbon', 'ec', 'kgco2e', 'carbon', 'co2e', 'gwp kgco2e', 'embodied carbon kgco2e'],
  density: ['density', 'density kg m3', 'density kg/m3'],
  mat: ['material', 'material cost', 'mat', 'material unit cost', 'bare material', 'unit cost', 'price', 'cost'],
  lab: ['labor', 'labour', 'labor cost', 'labour cost', 'bare labor', 'lab'],
};
function pickCols(head, map, want, syn) {
  const h = head.map((x) => norm(x));
  const cols = {};
  for (const k of want) {
    if (map?.[k] !== undefined) { const i = typeof map[k] === 'number' ? map[k] : h.indexOf(norm(map[k])); cols[k] = i; continue; }
    let i = -1;
    for (const s of syn[k]) { i = h.findIndex((x) => x === norm(s)); if (i >= 0 && !Object.values(cols).includes(i)) break; i = -1; }
    if (i < 0) for (const s of syn[k]) { i = h.findIndex((x, j) => x.includes(norm(s)) && !Object.values(cols).includes(j)); if (i >= 0) break; }
    cols[k] = i;
  }
  return cols;
}
const CARBON_UNITS = { kg: ['kg', 1], kilogram: ['kg', 1], t: ['kg', 0.001], tonne: ['kg', 0.001], tonnes: ['kg', 0.001], ton: ['kg', 0.001], m3: ['m3', 1], m2: ['m2', 1], m: ['m', 1], item: ['item', 1], piece: ['item', 1], unit: ['item', 1], ea: ['item', 1], each: ['item', 1] };
const unitOf = (s) => { const k = norm(s).replace(/ /g, '').replace('³', '3').replace('²', '2').replace('m^3', 'm3').replace('m^2', 'm2'); return CARBON_UNITS[k] || CARBON_UNITS[String(s).trim().toLowerCase().replace('³', '3').replace('²', '2')] || null; };

export function carbonFromFile(text, opts = {}) {
  const all = parseCsv(text);
  if (all.length < 2) return { rows: [], errors: [{ line: 0, code: 'empty' }], columns: {} };
  const head = all[0].cells.map((x) => x.trim());
  const c = pickCols(head, opts.map, ['name', 'unit', 'gwp', 'density'], SYN);
  if (c.name < 0 || c.gwp < 0) return { rows: [], errors: [{ line: all[0].line, code: 'header' }], columns: c };
  // no unit column: read it from a header like "kgCO2e/kg" or "kgCO2e per m3"
  const hu = /(?:\/|per)\s*(kg|t|tonne|m3|m³|m2|m²|m)\b/i.exec(head[c.gwp] || '');
  const rows = [], errors = [], seen = new Set();
  for (const r of all.slice(1, 5001)) {
    const g = (i) => (i >= 0 ? unguard(String(r.cells[i] ?? '')) : '');
    const u = unitOf(g(c.unit)) || (hu ? unitOf(hu[1]) : null) || (opts.unit ? unitOf(opts.unit) : null);
    const gwp = num(g(c.gwp));
    if (!g(c.name).trim() || gwp === null || !u) { errors.push({ line: r.line, code: !u ? 'unit' : 'value' }); continue; }
    let id = slug(g(c.name)); for (let n = 2; seen.has(id); n++) id = slug(g(c.name)).slice(0, 44) + '-' + n; seen.add(id);
    // a per-kg figure needs a density to meet the model's volumes: the file's, the caller's, else the starter table's for that name (said in the note)
    let dens = num(g(c.density)) ?? opts.density ?? null, dnote = '';
    if (u[0] === 'kg' && dens === null) { const m = matchRow(STARTER, { material: g(c.name), name: g(c.name) }); if (m) { dens = m.density; dnote = ' Density ' + m.density + ' kg/m³ from the starter table.'; } }
    const cl = cleanRow({ id, match: [g(c.name)], classes: [], basis: u[0], density: dens, a1a3: gwp * u[1], source: opts.source || 'your file', checked: false, note: IMPORT_LABEL + dnote });
    if (!cl.row) { errors.push({ line: r.line, code: cl.errors[0] }); continue; }
    rows.push({ ...cl.row, origin: 'yours' });
  }
  return { rows, errors, columns: c };
}

const PRICE_UNITS = { m3: 'm3', m2: 'm2', m: 'm', kg: 'kg', item: 'item', ea: 'item', each: 'item', cy: 'cy', cf: 'cf', sf: 'sf', lf: 'lf', 'cu yd': 'cy', 'cu ft': 'cf', 'sq ft': 'sf', 'l f': 'lf', 's f': 'sf', 'c y': 'cy', 'c f': 'cf', e: 'item', 'e a': 'item' };
export function priceFromCostBook(text, opts = {}) {
  const all = parseCsv(text);
  if (all.length < 2) return { rows: [], errors: [{ line: 0, code: 'empty' }], columns: {} };
  const head = all[0].cells.map((x) => x.trim());
  const c = pickCols(head, opts.map, ['name', 'unit', 'mat', 'lab', 'density'], { ...SYN, name: ['description', 'item description', 'item', 'name'], mat: ['material cost', 'bare material', 'material', 'mat', 'unit cost', 'price', 'cost'] });
  if (c.name < 0 || c.unit < 0 || (c.mat < 0 && c.lab < 0)) return { rows: [], errors: [{ line: all[0].line, code: 'header' }], columns: c };
  const rows = [], errors = [], seen = new Set();
  for (const r of all.slice(1, 5001)) {
    const g = (i) => (i >= 0 ? unguard(String(r.cells[i] ?? '')) : '');
    const unit = PRICE_UNITS[norm(g(c.unit))] || PRICE_UNITS[g(c.unit).trim().toLowerCase()];
    let id = slug(g(c.name)); for (let n = 2; seen.has(id); n++) id = slug(g(c.name)).slice(0, 44) + '-' + n; seen.add(id);
    const cl = cleanPriceRow({ id, match: [g(c.name)], classes: [], unit, density: num(g(c.density)), mat: num(g(c.mat)) ?? 0, lab: num(g(c.lab)) ?? 0, waste: opts.waste ?? 0, source: opts.source || 'your cost book', note: IMPORT_LABEL });
    if (!cl.row) { errors.push({ line: r.line, code: cl.errors[0] }); continue; }
    rows.push(cl.row);
  }
  return { rows, errors, columns: c };
}

// ------------------------------------------------------------------------------------------------ climate
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DIM = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const r2 = (x) => Math.round(x * 100) / 100;
const coord = (lat, lon) => (Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 180 ? [lat.toFixed(3), lon.toFixed(3)] : null);
export function nasaPowerUrl(lat, lon) {
  const c = coord(lat, lon); if (!c) return null;
  return `https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=ALLSKY_SFC_SW_DWN,T2M&community=RE&longitude=${c[1]}&latitude=${c[0]}&format=JSON`;
}
export function pvgisUrl(lat, lon) {
  const c = coord(lat, lon); if (!c) return null;
  return `https://re.jrc.ec.europa.eu/api/v5_2/MRcalc?lat=${c[0]}&lon=${c[1]}&horirrad=1&avtemp=1&outputformat=json`;
}
export function parseNasaPower(j) {
  const p = j?.properties?.parameter, a = p?.ALLSKY_SFC_SW_DWN, t = p?.T2M;
  if (!a || !t) return null;
  const ghi = MONTHS.map((m) => Number(a[m])), tAmb = MONTHS.map((m) => Number(t[m]));
  if (ghi.some((x) => !Number.isFinite(x) || x < 0 || x > 12) || tAmb.some((x) => !Number.isFinite(x) || x < -60 || x > 60)) return null;   // NASA marks missing as -999
  return { ghi: ghi.map(r2), tAmb: tAmb.map(r2), source: 'NASA POWER climatology (ALLSKY_SFC_SW_DWN kWh/m²/day, T2M daily-mean °C)' };
}
export function parsePvgis(j) {
  const list = j?.outputs?.monthly;
  if (!Array.isArray(list) || !list.length) return null;
  const sum = new Array(12).fill(0), ts = new Array(12).fill(0), n = new Array(12).fill(0);
  for (const e of list) {
    const m = Number(e.month) - 1, h = Number(e['H(h)_m']), t = Number(e.T2m ?? e['T2m']);
    if (!(m >= 0 && m < 12) || !Number.isFinite(h)) return null;
    sum[m] += h; ts[m] += Number.isFinite(t) ? t : NaN; n[m]++;
  }
  if (n.some((x) => !x)) return null;
  const ghi = sum.map((s, m) => r2(s / n[m] / DIM[m])), tAmb = ts.map((s, m) => r2(s / n[m]));
  if (ghi.some((x) => x < 0 || x > 12) || tAmb.some((x) => !Number.isFinite(x))) return null;
  return { ghi, tAmb, source: 'PVGIS MRcalc monthly (H(h)_m kWh/m²/month ÷ days, T2m °C)' };
}
// `direct`: can a web page read the answer? Measured from a page on getcadcraft.com on 2026-10-30 (browser-pvclimate.mjs): NASA POWER answers with
// open CORS headers (12 monthly values); PVGIS answers without them and the browser refuses to hand the page the reply, so its link is opened
// in a tab and the answer pasted (parseClimateAnswer). If PVGIS ever adds the header, set direct: true and the button comes back.
export const PROVIDERS = Object.freeze({ nasa: { name: 'NASA POWER', url: nasaPowerUrl, parse: parseNasaPower, direct: true }, pvgis: { name: 'PVGIS (EU JRC)', url: pvgisUrl, parse: parsePvgis, direct: false } });
/** A provider's own answer pasted as text (NASA POWER climatology JSON or PVGIS MRcalc JSON) → { climate, provider } | null. */
export function parseClimateAnswer(text) {
  let j; try { j = JSON.parse(String(text).slice(0, 2e6)); } catch { return null; }
  const n = parseNasaPower(j); if (n) return { climate: n, provider: PROVIDERS.nasa.name };
  const p = parsePvgis(j); if (p) return { climate: p, provider: PROVIDERS.pvgis.name };
  return null;
}

export const climateCacheKey = (provider, lat, lon) => `cc-climate:${provider}:${(Math.round(lat * 10) / 10).toFixed(1)}:${(Math.round(lon * 10) / 10).toFixed(1)}`;
export function readCache(store, key) { try { const v = JSON.parse(store?.getItem(key) || 'null'); return v && Array.isArray(v.ghi) && v.ghi.length === 12 ? v : null; } catch { return null; } }
export function writeCache(store, key, v) { try { store?.setItem(key, JSON.stringify({ ...v, cached: new Date().toISOString().slice(0, 10) })); } catch { /* a full or blocked store: the answer is still used */ } }

/** Call only from a button. The cache is read first (works offline); on failure the caller falls back to the clear-sky ceiling. */
export async function fetchClimate(provider, lat, lon, { fetch: f = globalThis.fetch, store = null, refresh = false } = {}) {
  const P = PROVIDERS[provider];
  if (!P) return { ok: false, fallback: 'clear', error: 'provider' };
  const url = P.url(lat, lon);
  if (!url) return { ok: false, fallback: 'clear', error: 'site' };
  const key = climateCacheKey(provider, lat, lon);
  if (!refresh) { const c = readCache(store, key); if (c) return { ok: true, from: 'cache', climate: c, provider: P.name }; }
  try {
    if (typeof f !== 'function') throw new Error('offline');
    const res = await f(url, { credentials: 'omit', referrerPolicy: 'no-referrer' });
    if (!res.ok) throw new Error('http ' + res.status);
    const climate = P.parse(await res.json());
    if (!climate) return { ok: false, fallback: 'clear', error: 'answer' };
    writeCache(store, key, climate);
    return { ok: true, from: 'network', climate, provider: P.name };
  } catch (e) {
    const c = readCache(store, key);   // a refresh that failed still has the old answer
    if (c) return { ok: true, from: 'cache', climate: c, provider: P.name };
    return { ok: false, fallback: 'clear', error: String(e.message || e) };
  }
}
