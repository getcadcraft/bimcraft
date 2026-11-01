/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/pcf-bim.js — PCF piping component files in and out of BimCraft's pipe runs (0.8 IND.4). No DOM: bin/test-interop.mjs runs it in Node.
 * The file format is the shared ../interop/pcf.js copy (lib/interop, tools/interop/sync.mjs bimcraft); this file knows the runs.
 *
 *   exportPcf(runs, {perLine}) → { text, model, problems }
 *       runs = readRuns(w) pipe runs ({ guid, kind 'pipe', mat, cls, size, system, line, points (plan mm), valves }). Every part the model draws
 *       (planLayout) becomes a component: straight pipe → PIPE, a turn → ELBOW (90° ±1°) or BEND, a tee → TEE with its branch point, a size change →
 *       REDUCER-CONCENTRIC, a valve → VALVE. Bores are nominal diameters in mm. An elbow's CENTRE-POINT is the CORNER (where its two legs meet).
 *   importPcf(model, {planLayout?}) → { runs: [spec], problems }
 *       spec = { kind: 'pipe', mat: 'steel', cls, size (NPS label), points: [[x, y, z]], valves: [{ s, kind }], line, system: 'chw'… } — the shape placeRun takes.
 *       Straight chains through elbows, bends, valves, flanges and the run-through of a tee become one run; a size change (reducer) starts a new run; a tee's branch is its own run
 *       that starts at the tee's centre. PIPE with no neighbours still becomes a run of its own.
 *   dnOfNps(label) · npsOfDn(dn)
 */
import { planLayout, runVertices, sectionOf } from '../mep-model.js';
import { spoolPrefix } from './spools.js';
import { DEFAULT_CLASS } from './pipes.js';
import { connect, writePcf } from '../interop/pcf.js';

const NPS_DN = { '1/2': 15, '3/4': 20, '1': 25, '1-1/4': 32, '1 1/4': 32, '1-1/2': 40, '1 1/2': 40, '2': 50, '2-1/2': 65, '2 1/2': 65, '3': 80, '3-1/2': 90, '3 1/2': 90, '4': 100, '5': 125, '6': 150, '8': 200, '10': 250, '12': 300, '14': 350, '16': 400, '18': 450, '20': 500, '24': 600 };
export const dnOfNps = (label) => NPS_DN[String(label)] ?? null;
export function npsOfDn(dn) { for (const [k, v] of Object.entries(NPS_DN)) if (v === Math.round(dn) && !k.includes(' ')) return k; return null; }

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const unit = (a) => { const l = len(a) || 1; return mul(a, 1 / l); };
const bore = (sec) => (sec ? dnOfNps(sec.nps) ?? +(sec.od ?? sec.w ?? 0).toFixed(1) : 0);
const VALVE_SKEY = { gate: 'VVFL', ball: 'VBFL', globe: 'VGFL', check: 'VCFL' };
const KIND_OF_SKEY = (k) => { const s = String(k || '').toUpperCase(); return /^VB/.test(s) ? 'ball' : /^VC/.test(s) ? 'check' : /^VG|^VL/.test(s) ? 'globe' : 'gate'; };

export function exportPcf(runs, { header = true } = {}) {
  const problems = [];
  const pipes = runs.filter((r) => r.kind === 'pipe');
  const model = { format: 'cadcraft-pcf', units: { coords: 'MM', bore: 'MM', weight: 'KGS' }, header: [], problems: [], pipelines: [] };
  if (!pipes.length) return { text: '', model, problems: [{ code: 'pcf.export.none', severity: 'error', vars: {}, text: 'There are no pipe runs to export.' }] };
  let L;
  try { L = planLayout(pipes.map((r) => ({ ...r }))); }   // planLayout writes weld cuts on its copies, never on the model's runs
  catch (e) { return { text: '', model, problems: [{ code: 'pcf.export.layout', severity: 'error', vars: { key: e.key || '' }, text: 'The runs cannot be laid out as parts, so there is nothing to write (' + (e.key || e.message) + ').' }] }; }
  const byLine = new Map();
  let notSteel = 0, skipped = 0;
  for (const r of pipes) {
    const lay = L.runs.get(r.guid);
    if (!lay) { skipped++; continue; }
    if (r.mat !== 'steel') notSteel++;
    const ref = spoolPrefix(r) + (byLine.has(spoolPrefix(r)) ? '-' + r.guid.slice(0, 4) : '');
    const sec = sectionOf(r);
    const comps = [];
    const P3 = (p) => ({ x: p[0], y: p[1], z: p[2] });
    const end = (p, b) => ({ ...P3(p), bore: b, end: '' });
    for (const part of lay.parts) {
      const b = bore(sec);
      if (part.kind === 'segment') comps.push({ type: 'PIPE', ends: [end(part.a, b), end(part.b, b)], centre: null, branch: null, at: null, skey: '', angle: null, attrs: [], line: 0 });
      else if (part.kind === 'bend') {
        const T = part.R * Math.tan(part.th / 2), corner = add(part.p0, mul(part.d1, T)), deg = (part.th * 180) / Math.PI;
        comps.push({ type: Math.abs(deg - 90) < 1 ? 'ELBOW' : 'BEND', ends: [end(part.p0, b), end(part.p1, b)], centre: corner, branch: null, at: null, skey: 'ELBW', angle: +deg.toFixed(2), attrs: [], line: 0 });
      } else if (part.kind === 'tee') {
        const m = part.m, mb = part.mb;
        comps.push({ type: 'TEE', ends: [end(sub(part.at, mul(part.d, m)), b), end(add(part.at, mul(part.d, m)), b)], centre: part.at.slice(), branch: { ...P3(add(part.at, mul(part.bd, mb))), bore: bore(part.branchSec || sec), end: '' }, at: null, skey: 'TEBW', angle: null, attrs: [], line: 0 });
      } else if (part.kind === 'reducer') {
        comps.push({ type: 'REDUCER-CONCENTRIC', ends: [end(part.a, bore(part.from)), end(part.b, bore(part.to))], centre: null, branch: null, at: null, skey: 'RCBW', angle: null, attrs: [], line: 0 });
      } else if (part.kind === 'valve') {
        comps.push({ type: 'VALVE', ends: [end(part.a, b), end(part.b, b)], centre: null, branch: null, at: null, skey: VALVE_SKEY[part.valve?.kind] || 'VVFL', angle: null, attrs: [['TAG', part.valve?.kind || 'valve']], line: 0 });
      }
    }
    const pl = byLine.get(ref) || { ref, attrs: [['PIPING-SPEC', [r.mat, r.cls, r.size].filter(Boolean).join('-').toUpperCase()], ['FLUID', String(r.system || '').toUpperCase()]], components: [] };
    pl.components.push(...comps); byLine.set(ref, pl);
  }
  model.pipelines = [...byLine.values()];
  if (notSteel) problems.push({ code: 'pcf.export.material', severity: 'note', vars: { n: notSteel }, text: notSteel + ' run(s) are not steel; PCF is written for butt-weld pipe, so their fittings carry steel component keys.' });
  if (skipped) problems.push({ code: 'pcf.export.skipped', severity: 'warning', vars: { n: skipped }, text: skipped + ' run(s) have no size the tables make and were left out.' });
  return { text: writePcf(model, { header }), model, problems };
}

/** Straight chains → runs. See the header. `model` is a readPcf result (millimetres). */
export function importPcf(model) {
  const problems = [];
  const runs = [];
  let reduced = 0, tees = 0, unk = 0, sizes = 0, coarse = 0;
  for (const pl of model.pipelines) {
    const comps = pl.components.filter((c) => c.ends.length >= 2 || c.type === 'SUPPORT');
    const { joins } = connect({ components: comps }, 0.6);
    // adjacency: component index → [{ k (its end 0 | 1 | 2 branch), to, kTo }]
    const adj = comps.map(() => []);
    for (const [a, ka, b, kb] of joins) { adj[a].push({ k: ka, to: b, kTo: kb }); adj[b].push({ k: kb, to: a, kTo: ka }); }
    const done = new Set();
    const specOf = (chain, first) => {
      // chain = [{ c, from (end index we came in by) }] in order; the polyline is the first start, each elbow's corner, the last end
      const pts = [];
      let b0 = 0, dn = null;
      chain.forEach((s, i) => {
        const c = s.c, inEnd = c.ends[s.from], outEnd = c.ends[1 - s.from];
        if (i === 0) pts.push([inEnd.x, inEnd.y, inEnd.z]);
        dn = dn ?? (inEnd.bore || outEnd.bore);
        if (c.type === 'ELBOW' || c.type === 'BEND') {
          // the corner: from the neighbouring legs when both are known; otherwise the file's centre point (a PCF elbow's centre point is its corner)
          const prev = chain[i - 1], next = chain[i + 1];
          const dirIn = prev ? unit(sub([inEnd.x, inEnd.y, inEnd.z], prevStart(prev))) : null;
          const dirOut = next ? unit(sub(nextEnd(next), [outEnd.x, outEnd.y, outEnd.z])) : null;
          let corner = c.centre ? c.centre.slice() : null;
          if (dirIn && dirOut) { const q = lineMeet([inEnd.x, inEnd.y, inEnd.z], dirIn, [outEnd.x, outEnd.y, outEnd.z], dirOut); if (q) corner = q; }
          if (corner) pts.push(corner); else pts.push([inEnd.x, inEnd.y, inEnd.z]);
        } else if (c.type === 'VALVE' || c.type === 'FLANGE') {
          // a valve is recorded at its middle
          if (c.type === 'VALVE') s.valveAt = [(inEnd.x + outEnd.x) / 2, (inEnd.y + outEnd.y) / 2, (inEnd.z + outEnd.z) / 2];
        }
        if (i === chain.length - 1) pts.push([outEnd.x, outEnd.y, outEnd.z]);
      });
      // drop repeated points
      const clean = pts.filter((p, i) => !i || len(sub(p, pts[i - 1])) > 0.5);
      // valves: mm along the polyline
      const valves = [];
      for (const s of chain) if (s.valveAt) valves.push({ s: along(clean, s.valveAt), kind: KIND_OF_SKEY(s.c.skey) });
      return { clean, valves, dn };
      function prevStart(pv) { const e = pv.c.ends[pv.from]; return [e.x, e.y, e.z]; }
      function nextEnd(nx) { const e = nx.c.ends[1 - nx.from]; return [e.x, e.y, e.z]; }
    };
    const emit = (chain, tag) => {
      const { clean, valves, dn } = specOf(chain);
      if (clean.length < 2) return;
      const nps = dn ? npsOfDn(dn) : null;
      if (dn && !nps) sizes++;
      runs.push({ kind: 'pipe', mat: 'steel', cls: DEFAULT_CLASS.steel, size: nps || npsOfDn(nearestDn(dn)) || '2', points: clean, valves, line: tag || pl.ref, system: 'chw', pipeline: pl.ref, bore: dn });
    };
    // walk: start from any component not yet used that is a pipe-ish piece with at most one neighbour on its far side; simplest — repeat from unused components
    const through = (c) => ['PIPE', 'TEE', 'CROSS', 'ELBOW', 'BEND', 'VALVE', 'FLANGE', 'COUPLING', 'UNION', 'GASKET', 'FILTER', 'INSTRUMENT', 'PIPE-FIXED', 'MISC-COMPONENT'].includes(c.type);
    const next = (ci, outEnd) => adj[ci].find((a) => a.k === outEnd);
    for (let ci = 0; ci < comps.length; ci++) {
      if (done.has(ci) || !through(comps[ci]) || comps[ci].ends.length < 2) continue;
      // extend backwards to the start of the chain
      let startC = ci, startFrom = 0, guard = 0;
      for (;;) {
        const back = adj[startC].find((a) => a.k === startFrom && through(comps[a.to]) && a.kTo < 2 && !done.has(a.to));
        if (!back || ++guard > comps.length) break;
        startC = back.to; startFrom = 1 - back.kTo;
      }
      const chain = [];
      let cur = startC, from = startFrom, g2 = 0;
      for (;;) {
        done.add(cur); chain.push({ c: comps[cur], from });
        const nx = next(cur, 1 - from);
        if (!nx || done.has(nx.to) || !through(comps[nx.to]) || nx.kTo > 1 || ++g2 > comps.length) break;
        cur = nx.to; from = nx.kTo;
      }
      emit(chain);
    }
    // tees: the run through is split by it; the branch starts at the centre
    comps.forEach((c, i) => {
      if (c.type !== 'TEE' && c.type !== 'CROSS' && c.type !== 'OLET') return;
      tees++;
      if (!c.branch || !c.centre) return;
      const b = c.branch;
      // follow the straight piece(s) that start at the branch point
      const nb = adj[i].find((a) => a.k === 2);
      if (nb && through(comps[nb.to]) && !done.has(nb.to)) { /* handled by the chain walk above */ }
      else if (!nb) runs.push({ kind: 'pipe', mat: 'steel', cls: DEFAULT_CLASS.steel, size: npsOfDn(b.bore) || '2', points: [c.centre.slice(), [b.x, b.y, b.z]], valves: [], line: pl.ref, system: 'chw', pipeline: pl.ref, bore: b.bore });
    });
    // the branch run's first point is the tee centre: put it in front of runs that start at a tee's branch point
    for (const r of runs.filter((x) => x.pipeline === pl.ref)) {
      for (const c of comps) if (c.type === 'TEE' && c.branch && c.centre && len(sub(r.points[0], [c.branch.x, c.branch.y, c.branch.z])) < 0.6) r.points.unshift(c.centre.slice());
    }
    reduced += comps.filter((c) => c.type.startsWith('REDUCER')).length;
    unk += comps.filter((c) => !through(c) && !['TEE', 'CROSS', 'OLET', 'SUPPORT', 'WELD', 'CAP', 'FLANGE-BLIND'].includes(c.type) && !c.type.startsWith('REDUCER')).length;
    coarse += comps.filter((c) => c.type === 'BEND' && c.angle !== null && Math.abs(c.angle - 90) > 5 && c.angle < 175).length;
  }
  const P = (code, severity, n, text) => n && problems.push({ code, severity, vars: { n }, text: n + ' ' + text });
  P('pcf.import.reducer', 'note', reduced, 'reducer(s) are not carried: a size change starts a new run and the model lays its own reducer where two runs of different sizes meet.');
  P('pcf.import.tee', 'note', tees, 'tee(s) or branch connection(s) became a branch run starting at the tee centre; the model lays its own tee.');
  P('pcf.import.type', 'warning', unk, 'component(s) of a type this step does not turn into pipe runs were left out.');
  P('pcf.import.size', 'warning', sizes, 'run(s) have a bore that is not a standard pipe size; the nearest size was used.');
  if (!runs.length) problems.push({ code: 'pcf.import.none', severity: 'error', vars: {}, text: 'No straight pipe was found to build runs from.' });
  return { runs, problems };
}

function lineMeet(p, d, q, e) {
  // the point where line (p, d) passes nearest to line (q, e) — their meeting point for legs that lie in one plane
  const w = sub(p, q), a = dot(d, d), b = dot(d, e), c = dot(e, e), dd = dot(d, w), ee = dot(e, w), den = a * c - b * b;
  if (Math.abs(den) < 1e-9) return null;
  const s = (b * ee - c * dd) / den, t = (a * ee - b * dd) / den;
  const P1 = add(p, mul(d, s)), P2 = add(q, mul(e, t));
  return len(sub(P1, P2)) < 2 ? mul(add(P1, P2), 0.5) : null;
}
function along(pts, p) {
  let best = { off: Infinity, s: 0 }, run = 0;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i], L = len(sub(b, a)), d = unit(sub(b, a));
    const t = Math.max(0, Math.min(L, dot(sub(p, a), d))), q = add(a, mul(d, t)), off = len(sub(p, q));
    if (off < best.off) best = { off, s: run + t };
    run += L;
  }
  return +best.s.toFixed(1);
}
const nearestDn = (dn) => Object.values(NPS_DN).reduce((b, v) => (Math.abs(v - dn) < Math.abs(b - dn) ? v : b), 50);
