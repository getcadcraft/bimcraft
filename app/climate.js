/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — English fallbacks for the assistant's results and file text; the panels pass t() and show the language files' words. */
/**
 * climate.js — climate-future scenarios as DATA the person brings (0.8 EG.46, session bim-sim_PART_2). No DOM: tools/bimcraft-test/hazard-test.mjs runs it. NO CLIMATE DATA
 * IS SHIPPED: which source to use (a national projection, a regional study, the person's own engineer) is the owner's decision (docs/0.8-PART5.md, open for the owner),
 * so this is only the file format, the reader and the arithmetic. A scenario is a table by year:
 *
 *   JSON  { "format": "cadcraft-climate-scenario", "name": "…", "source": "who made it, where, which edition", "licence": "…", "rows": [{ "year": 2050, "seaLevelRiseM": 0.3, "floodFactor": 1.1 }] }
 *   CSV   a header line then rows:  year,seaLevelRiseM,floodFactor      (any of the value columns may be left out)
 *
 *   parseScenario(text) → { ok, scenario: { name, source, licence, rows }, errors: [] }
 *   scenarioAt(scenario, year) → { year, seaLevelRiseM, floodFactor, exact }     linear between rows, held at the ends (never extrapolated: `exact` is false then)
 *   futureFlood(peakM, scenario, year) → peak (m) = peak × floodFactor + seaLevelRise      the water level the flood run is given for that year
 */
export const FORMAT = 'cadcraft-climate-scenario';
const COLS = { seaLevelRiseM: [0, 20], floodFactor: [0.1, 10] };

export function parseScenario(text) {
  const errors = [];
  let name = '', source = '', licence = '', raw = [];
  const s = String(text || '').trim();
  if (!s) return { ok: false, errors: ['empty'] };
  if (s[0] === '{') {
    let j;
    try { j = JSON.parse(s); } catch (e) { return { ok: false, errors: ['json'] }; }
    if (j.format !== FORMAT) return { ok: false, errors: ['format'] };
    name = String(j.name || '').slice(0, 120); source = String(j.source || '').slice(0, 300); licence = String(j.licence || '').slice(0, 200); raw = Array.isArray(j.rows) ? j.rows.slice(0, 500) : [];
  } else {
    const lines = s.split(/\r?\n/).filter((l) => l.trim() && !l.trim().startsWith('#')), head = (lines.shift() || '').split(/[,;\t]/).map((h) => h.trim());
    if (!head.includes('year')) return { ok: false, errors: ['header'] };
    raw = lines.slice(0, 500).map((l) => { const c = l.split(/[,;\t]/); return Object.fromEntries(head.map((h, i) => [h, c[i] === undefined || c[i].trim() === '' ? undefined : Number(c[i].replace(',', '.'))])); });
  }
  const rows = [];
  raw.forEach((r, i) => {
    const year = Number(r.year);
    if (!Number.isFinite(year) || year < 1900 || year > 2400) { errors.push('row ' + (i + 1) + ': year'); return; }
    const row = { year };
    for (const [k, [lo, hi]] of Object.entries(COLS)) {
      if (r[k] === undefined || r[k] === null) continue;
      const v = Number(r[k]);
      if (!Number.isFinite(v) || v < lo || v > hi) { errors.push('row ' + (i + 1) + ': ' + k + ' must be between ' + lo + ' and ' + hi); return; }
      row[k] = v;
    }
    rows.push(row);
  });
  rows.sort((a, b) => a.year - b.year);
  if (!rows.length) return { ok: false, errors: errors.length ? errors : ['norows'] };
  if (rows.some((r, i) => i && r.year === rows[i - 1].year)) errors.push('two rows for one year');
  return { ok: errors.length === 0, scenario: { name, source, licence, rows }, errors };
}

export function scenarioAt(sc, year) {
  const rows = sc.rows, out = { year, seaLevelRiseM: 0, floodFactor: 1, exact: year >= rows[0].year && year <= rows[rows.length - 1].year };
  for (const k of Object.keys(COLS)) {
    const pts = rows.filter((r) => r[k] !== undefined);
    if (!pts.length) continue;
    if (year <= pts[0].year) { out[k] = pts[0][k]; continue; }
    if (year >= pts[pts.length - 1].year) { out[k] = pts[pts.length - 1][k]; continue; }
    let i = 1;
    while (pts[i].year < year) i++;
    const f = (year - pts[i - 1].year) / (pts[i].year - pts[i - 1].year);
    out[k] = pts[i - 1][k] + f * (pts[i][k] - pts[i - 1][k]);
  }
  return out;
}
export const futureFlood = (peakM, sc, year) => { const a = scenarioAt(sc, year); return peakM * a.floodFactor + a.seaLevelRiseM; };
