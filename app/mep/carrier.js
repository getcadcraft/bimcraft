/* SPDX-License-Identifier: Apache-2.0 */
/**
 * carrier.js — cable trays and conduits: fill, routing of cables through them, the cable schedule (0.8 round 2, EG.2; session `mep_PART_2`).
 * DOM-free. Cable trays and conduits are drawn as runs with the system `tray` / `conduit` (mep-model.js, IfcCableCarrierSegment); this file
 * reads no IFC. Lengths in mm (geometry) and cable outside diameters in mm.
 *
 * Clean room (rule 32): the geometry is published pipe/tube dimension data (conduit inside and outside diameters follow the usual EMT and
 * Schedule 40 PVC dimensions). The FILL LIMITS are code values — NEC Chapter 9 Table 1 (1 conductor 53 %, 2 conductors 31 %, over 2 40 %) and the
 * tray loading rules of NEC Article 392 — so they are inputs: the person types the limits of the code in force; the defaults below are labelled
 * defaults for professional review (`FILL_DEFAULTS.label`). A cable's outside diameter is a maker's number the person types or imports (CSV).
 *
 *   conduitFill({ idMm, cables:[{ odMm, n }] , limits }) → { areaMm2, usedMm2, pct, count, limitPct, ok, free }
 *   conduitFor(type, cables, limits) → the smallest trade size that holds them, or null
 *   trayFill({ widthMm, depthMm, cables, mode: 'area' | 'layer', maxPct, layers }) → { pct, usedMm2, limitPct, layerMm, ok, ... }
 *   routeCables(graph, carriers, cables, points) → per cable { runs: [{ run, mm }], lengthMm, found }
 *   fillByRun(cables, routes, runInfo) → per run { cables, fill }
 *   scheduleRows(cables, routes, opts) + scheduleCsv(rows)  ·  parseCablesCsv(text) → cables
 */
export const FILL_DEFAULTS = {
  label: 'Default fill limits (53 % / 31 % / 40 % for 1 / 2 / more than 2 cables; tray 50 %) — type the limits of the code in force',
  conduit: { one: 53, two: 31, many: 40 }, tray: 50,
};
const PI4 = Math.PI / 4;

/** Conduit trade sizes (inches as the trade writes them) → { id, od } mm. EMT: ANSI C80.3 sizes; PVC: Schedule 40 pipe sizes. */
export const CONDUIT_TYPES = {
  emt: { label: 'EMT', sizes: { '1/2': { id: 15.8, od: 17.9 }, '3/4': { id: 20.9, od: 23.4 }, '1': { id: 26.6, od: 29.5 }, '1-1/4': { id: 35.1, od: 38.4 }, '1-1/2': { id: 40.9, od: 44.2 }, '2': { id: 52.5, od: 55.8 }, '2-1/2': { id: 69.3, od: 73.0 }, '3': { id: 85.2, od: 88.9 }, '3-1/2': { id: 97.4, od: 101.6 }, '4': { id: 110.1, od: 114.3 } } },
  pvc40: { label: 'PVC Schedule 40', sizes: { '1/2': { id: 15.3, od: 21.3 }, '3/4': { id: 20.4, od: 26.7 }, '1': { id: 26.1, od: 33.4 }, '1-1/4': { id: 34.5, od: 42.2 }, '1-1/2': { id: 40.4, od: 48.3 }, '2': { id: 52.0, od: 60.3 }, '2-1/2': { id: 62.1, od: 73.0 }, '3': { id: 77.3, od: 88.9 }, '4': { id: 101.6, od: 114.3 } } },
};
const TRADE_ORDER = ['1/2', '3/4', '1', '1-1/4', '1-1/2', '2', '2-1/2', '3', '3-1/2', '4'];   // object keys like '1' sort first, so the order is spelled out
export const conduitSizes = (type) => TRADE_ORDER.filter((k) => (CONDUIT_TYPES[type] || CONDUIT_TYPES.emt).sizes[k]);
export const conduitSize = (type, size) => (CONDUIT_TYPES[type] || CONDUIT_TYPES.emt).sizes[size] || null;

const cableCount = (cables) => cables.reduce((n, c) => n + Math.max(1, Math.round(c.n || 1)), 0);
const cableArea = (cables) => cables.reduce((a, c) => a + PI4 * (c.odMm || 0) ** 2 * Math.max(1, Math.round(c.n || 1)), 0);

export function limitFor(count, limits = FILL_DEFAULTS.conduit) { return count <= 1 ? limits.one : count === 2 ? limits.two : limits.many; }

export function conduitFill({ idMm, cables, limits = FILL_DEFAULTS.conduit }) {
  const count = cableCount(cables), area = PI4 * idMm * idMm, used = cableArea(cables), limit = limitFor(count, limits);
  const pct = area > 0 ? 100 * used / area : 0;
  const biggest = cables.reduce((m, c) => Math.max(m, c.odMm || 0), 0);
  return { areaMm2: area, usedMm2: used, pct, count, limitPct: limit, ok: count === 0 || (pct <= limit + 1e-9 && biggest <= idMm), free: area * limit / 100 - used, tooWide: biggest > idMm };
}
export function conduitFor(type, cables, limits = FILL_DEFAULTS.conduit) {
  const T = CONDUIT_TYPES[type] || CONDUIT_TYPES.emt;
  for (const size of conduitSizes(type)) { const d = T.sizes[size]; if (conduitFill({ idMm: d.id, cables, limits }).ok) return { size, ...d }; }
  return null;
}

/**
 * Tray fill. mode 'area': the cables' cross-sections as a percentage of width × usable depth against `maxPct`; mode 'layer': the cables lie in
 * one layer, so the sum of their diameters must fit the width (the single-layer rule for large cables), and the layer height is the biggest cable.
 */
export function trayFill({ widthMm, depthMm, cables, mode = 'area', maxPct = FILL_DEFAULTS.tray }) {
  const used = cableArea(cables), area = widthMm * depthMm, count = cableCount(cables);
  const biggest = cables.reduce((m, c) => Math.max(m, c.odMm || 0), 0);
  if (mode === 'layer') {
    const sumOd = cables.reduce((s, c) => s + (c.odMm || 0) * Math.max(1, Math.round(c.n || 1)), 0);
    return { mode, count, usedMm2: used, sumOdMm: sumOd, widthMm, pct: widthMm > 0 ? 100 * sumOd / widthMm : 0, limitPct: 100, layerMm: biggest, ok: sumOd <= widthMm + 1e-9 && biggest <= depthMm + 1e-9, tooDeep: biggest > depthMm };
  }
  const pct = area > 0 ? 100 * used / area : 0;
  return { mode, count, usedMm2: used, areaMm2: area, pct, limitPct: maxPct, ok: pct <= maxPct + 1e-9 && biggest <= depthMm + 1e-9, tooDeep: biggest > depthMm, free: area * maxPct / 100 - used };
}

// ------------------------------------------------------------------------------------------------ routing cables through carriers
/**
 * Shortest path (by length) between two nodes of the carriers' graph. graph = graphFromRuns(...) over the tray/conduit runs only.
 * → { segs: [seg], length (mm) } or null.
 */
function shortest(graph, from, to) {
  if (from === to) return { segs: [], length: 0 };
  const adj = new Map();
  for (const s of graph.segs) for (const [a, b] of [[s.a, s.b], [s.b, s.a]]) { if (!adj.has(a)) adj.set(a, []); adj.get(a).push({ to: b, s }); }
  const dist = new Map([[from, 0]]), prev = new Map(), todo = new Set([from]);
  while (todo.size) {
    let u = null; for (const n of todo) if (u === null || dist.get(n) < dist.get(u)) u = n;
    todo.delete(u);
    if (u === to) break;
    for (const { to: v, s } of adj.get(u) || []) { const d = dist.get(u) + s.length * 1000; if (d < (dist.get(v) ?? Infinity)) { dist.set(v, d); prev.set(v, { u, s }); todo.add(v); } }
  }
  if (!dist.has(to)) return null;
  const segs = []; for (let n = to; prev.has(n); n = prev.get(n).u) segs.unshift(prev.get(n).s);
  return { segs, length: dist.get(to) };
}
/**
 * routeCables(graph, cables, nodeOf) — cable = { tag, from: key, to: key } (keys the graph was given as points); `fixedRuns` on a cable ([run ids])
 * overrides the search (the person said which runs it lies in). → Map tag → { found, lengthMm, runs: [{ run, mm }], segs }
 */
export function routeCables(graph, cables, nodeOf = graph.nodeOf) {
  const out = new Map();
  for (const c of cables) {
    if (c.fixedRuns?.length) {
      const segs = graph.segs.filter((s) => c.fixedRuns.includes(s.run));
      const runs = c.fixedRuns.map((r) => ({ run: r, mm: segs.filter((s) => s.run === r).reduce((a, s) => a + s.length * 1000, 0) }));
      out.set(c.tag, { found: true, lengthMm: runs.reduce((a, r) => a + r.mm, 0), runs, segs: segs.map((s) => s.id) });
      continue;
    }
    const a = nodeOf[c.from], b = nodeOf[c.to];
    const p = a != null && b != null ? shortest(graph, a, b) : null;
    if (!p) { out.set(c.tag, { found: false, lengthMm: 0, runs: [], segs: [], why: a == null || b == null ? 'ends' : 'gap' }); continue; }
    const byRun = new Map();
    for (const s of p.segs) byRun.set(s.run, (byRun.get(s.run) || 0) + s.length * 1000);
    out.set(c.tag, { found: true, lengthMm: p.length, runs: [...byRun].map(([run, mm]) => ({ run, mm })), segs: p.segs.map((s) => s.id) });
  }
  return out;
}

/** Fill of every carrier run: runInfo[run] = { kind: 'tray' | 'conduit', widthMm, depthMm, type, size, label, mode?, maxPct? }. */
export function fillByRun(cables, routes, runInfo, { limits = FILL_DEFAULTS.conduit, trayPct = FILL_DEFAULTS.tray } = {}) {
  const per = new Map();
  for (const c of cables) for (const r of routes.get(c.tag)?.runs || []) { if (!per.has(r.run)) per.set(r.run, []); per.get(r.run).push(c); }
  const out = [];
  for (const [run, list] of per) {
    const info = runInfo[run];
    if (!info) continue;
    if (info.kind === 'conduit') {
      const d = conduitSize(info.type, info.size);
      const idMm = d ? d.id : (info.idMm || 0);
      out.push({ run, kind: 'conduit', label: info.label || info.size, cables: list.map((c) => c.tag), fill: conduitFill({ idMm, cables: list, limits }), bigger: conduitFor(info.type, list, limits) });
    } else out.push({ run, kind: 'tray', label: info.label, cables: list.map((c) => c.tag), fill: trayFill({ widthMm: info.widthMm, depthMm: info.depthMm, cables: list, mode: info.mode || 'area', maxPct: info.maxPct ?? trayPct }) });
  }
  return out;
}

// ------------------------------------------------------------------------------------------------ schedule and CSV
export const SCHEDULE_COLUMNS = ['tag', 'circuit', 'type', 'size', 'odMm', 'n', 'from', 'to', 'lengthM', 'carriers', 'note'];
/** Rows of the cable schedule. `slack` (fraction, default 0.1) and `endsMm` (per end, default 1000) are typed allowances, shown as a column of their own. */
export function scheduleRows(cables, routes, { slack = 0.1, endsMm = 1000 } = {}) {
  return cables.map((c) => {
    const r = routes.get(c.tag) || { found: false, runs: [], lengthMm: 0 };
    const len = r.found ? (r.lengthMm * (1 + slack) + 2 * endsMm) / 1000 : 0;
    return { tag: c.tag, circuit: c.circuit || '', type: c.type || '', size: c.size || '', odMm: c.odMm || 0, n: c.n || 1, from: c.from || '', to: c.to || '', lengthM: Math.round(len * 10) / 10,
      carriers: r.runs.map((x) => x.run).join(' '), note: r.found ? '' : (c.fixedRuns?.length ? '' : r.why === 'ends' ? 'end not on a carrier' : 'no continuous route') };
  });
}
const csvCell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
export function scheduleCsv(rows) { return [SCHEDULE_COLUMNS.join(','), ...rows.map((r) => SCHEDULE_COLUMNS.map((k) => csvCell(r[k])).join(','))].join('\n') + '\n'; }

/** A cable list typed or exported from the Electrical add-on: tag, circuit, type, size, od (mm), n, from, to. Unknown columns ignored; a bad number is a row error. */
export function parseCablesCsv(text) {
  const rows = [], errors = [];
  const lines = String(text || '').split(/\r?\n/).filter((l) => l.trim());
  if (!lines.length) return { cables: rows, errors };
  const split = (l) => { const out = []; let cur = '', q = false; for (let i = 0; i < l.length; i++) { const ch = l[i]; if (q) { if (ch === '"' && l[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; } else if (ch === '"') q = true; else if (ch === ',') { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out; };
  const head = split(lines[0]).map((h) => h.trim().toLowerCase().replace(/[^a-z]/g, ''));
  const col = (n) => head.indexOf(n);
  const ix = { tag: col('tag'), circuit: col('circuit'), type: col('type'), size: col('size'), od: Math.max(col('od'), col('odmm')), n: Math.max(col('n'), col('count')), from: col('from'), to: col('to') };
  if (ix.tag < 0 || ix.od < 0) return { cables: rows, errors: [{ line: 1, key: 'columns' }] };
  const seen = new Set();
  for (let i = 1; i < lines.length && i <= 5000; i++) {
    const f = split(lines[i]), g = (k) => (ix[k] >= 0 ? (f[ix[k]] ?? '').trim() : '');
    const od = Number(g('od')), n = g('n') === '' ? 1 : Number(g('n'));
    if (!g('tag')) { errors.push({ line: i + 1, key: 'tag' }); continue; }
    if (seen.has(g('tag'))) { errors.push({ line: i + 1, key: 'duplicate', tag: g('tag') }); continue; }
    if (!(od > 0 && od < 200)) { errors.push({ line: i + 1, key: 'od', tag: g('tag') }); continue; }
    if (!(Number.isInteger(n) && n >= 1 && n <= 1000)) { errors.push({ line: i + 1, key: 'n', tag: g('tag') }); continue; }
    seen.add(g('tag'));
    rows.push({ tag: g('tag').slice(0, 40), circuit: g('circuit').slice(0, 40), type: g('type').slice(0, 60), size: g('size').slice(0, 30), odMm: od, n, from: g('from').slice(0, 60), to: g('to').slice(0, 60) });
  }
  return { cables: rows, errors };
}
