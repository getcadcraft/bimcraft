/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep-calc.js — the MEP calculations of 0.8 round 2 (session `mep_PART_2`) on the open model: EG.1 supply-pipe and duct sizing with pressure drop,
 * EG.2 cable tray / conduit routing and fill, EG.4 lighting from IES / LDT files. DOM-free: it reads the model through a ModelWriter (`w`), runs the
 * engines in mep/flow.js, mep/carrier.js and mep/photometry.js, and hands back results, Problems (mep/problems-mep.js) and, where a result proposes
 * a change, the op that applies it (ONE undo step: setRunSizes in mep-model.js). Sprinklers (EG.3) are the add-on in addons/sprinkler/.
 *
 *   calcPipes(w, { system, source?, wsfu?, curve?, extraLoads?, opts? })          → { ok, res, problems, proposals: [{ guid, size }], notes }
 *   calcDucts(w, { system, source?, terminals?, opts? })                          → { ok, res, problems, proposals: [{ guid, w, h }], notes }
 *   calcCarriers(w, { cables, limits?, trayPct?, slack?, endsMm? })               → { ok, routes, fills, rows, problems, proposals }
 *   calcLighting(w, { rooms?, targets?, spacing?, height?, llf?, photometry? })   → { ok, areas: [{ name, res, checks }], problems, notes }
 *   carrierRun({ kind: 'tray' | 'conduit', storey, points, ... })                → a spec for mep-model.js placeRun
 *   setLoad / setPhotometry                                                       → ops writing `CadCraft_MepCalc` on an element
 * Settings are arguments; mep-calc-ui.js keeps them per person. Every default is labelled in the engine it comes from.
 */
import { readRuns, runVertices, sectionOf, worldOf, readFixturePorts, carrierOf, setRunSizes, setCalcProps, placeRun, ductForFlow } from './mep-model.js';
import { readPorts } from './mep/ports.js';
import { sizesFor, pipeSize } from './mep/tables.js';
import { readEquipment } from './mep/equipment.js';
import { graphFromRuns } from './mep/network.js';
import { analyzePipes, analyzeDucts, DEFAULT_WSFU, DEFAULT_CURVE, cleanCurve } from './mep/flow.js';
import { routeCables, fillByRun, scheduleRows, scheduleCsv, conduitSize, CONDUIT_TYPES, FILL_DEFAULTS } from './mep/carrier.js';
import { parsePhotometry, computeGrid, checkTargets, DEFAULT_LLF } from './mep/photometry.js';
import { pipeProblems, ductProblems, carrierProblems, lightingProblems, lightingNote } from './mep/problems-mep.js';
import { storeyLoops } from './model-slabs.js';
import { ids } from './ifc-util.js';

export const CALC_PSET = 'CadCraft_MepCalc';
const IN = 25.4;

// ------------------------------------------------------------------------------------------------ shared reading
function runsOfSystem(w, kind, system) {
  const cache = new Map();
  return readRuns(w).filter((r) => r.kind === kind && r.system === system).map((r) => {
    const sec = sectionOf(r);
    return sec ? { id: r.guid, r, sec, verts: runVertices(r).map(worldOf(w, r.storey, cache)), valves: r.valves || [] } : null;
  }).filter(Boolean);
}
const labelMap = (runs) => { const m = new Map(runs.map((x) => [x.id, x.sec.label + ' ' + x.r.system])); return (id) => m.get(id) || id; };
const portWorld = (w, cache, p) => (p.storey ? worldOf(w, p.storey, cache)(p.at) : p.at);
const calcProps = (w, id) => { try { return w.readPset(id, CALC_PSET) || {}; } catch { return {}; } };

// ------------------------------------------------------------------------------------------------ EG.1 — supply pipes
export function calcPipes(w, o = {}) {
  const system = o.system || 'cw', notes = [];
  const runs = runsOfSystem(w, 'pipe', system);
  if (!runs.length) return { ok: false, key: 'calc.norun', notes };
  const cache = new Map(), wsfu = { ...DEFAULT_WSFU, ...(o.wsfu || {}) };
  // loads: fixtures' supply connectors (units by kind) and equipment typed with a flow (CadCraft_MepCalc FlowLps)
  const loads = [], points = [];
  for (const q of readFixturePorts(w)) {
    if (q.domain !== 'pipe' || q.system !== system || q.flow !== 'in') continue;
    const p = worldOf(w, q.storey, cache)(q.p), fu = wsfu[q.fixture] ?? 0, typed = calcProps(w, q.owner);
    const lps = Number(typed.FlowLps) || 0, units = Number(typed.FixtureUnits) || fu;
    if (!(units > 0 || lps > 0)) { notes.push({ key: 'calc.nounits', vars: { fixture: q.fixture || '?' } }); continue; }
    loads.push({ key: 'fx' + q.id, fu: units, lps, label: q.fixture || 'fixture' }); points.push({ key: 'fx' + q.id, p });
  }
  const ports = readPorts(w);
  for (const p of ports) {
    if (p.role !== 'equipment' || p.kind !== 'pipe' || p.system !== system) continue;
    const typed = calcProps(w, p.owner);
    if ((p.flow === 'SINK') && Number(typed.FlowLps) > 0) { loads.push({ key: 'eq' + p.id, fu: 0, lps: Number(typed.FlowLps), label: p.name || 'equipment' }); points.push({ key: 'eq' + p.id, p: portWorld(w, cache, p) }); }
  }
  for (const x of o.extraLoads || []) { loads.push({ key: x.key, fu: x.fu || 0, lps: x.lps || 0, label: x.label || x.key }); points.push({ key: x.key, p: x.p }); }
  // the source: given, else an equipment port that makes this system, else the first end of the longest run (said in the notes)
  let src = o.source || null;
  if (!src) { const p = ports.find((x) => x.role === 'equipment' && x.kind === 'pipe' && x.system === system && (x.flow === 'SOURCE' || x.flow === 'SOURCEANDSINK')); if (p) src = portWorld(w, cache, p); }
  if (!src) { const longest = runs.reduce((m, x) => (x.verts.length > m.verts.length ? x : m), runs[0]); src = longest.verts[0]; notes.push({ key: 'calc.sourceguess' }); }
  points.push({ key: 'src', p: src });
  const graph = graphFromRuns(runs.map((x) => ({ id: x.id, verts: x.verts, valves: x.valves })), points, { tol: o.tol || 60 });
  if (graph.nodeOf.src == null) return { ok: false, key: 'calc.sourceoff', notes };
  const attrs = {};
  for (const x of runs) {
    const sizes = sizesFor(x.r.mat, x.r.cls).map((key) => { const p = pipeSize(x.r.mat, x.r.cls, key); return p ? { key, idMm: p.id * IN } : null; }).filter(Boolean);
    attrs[x.id] = { mat: x.r.mat, idMm: x.sec.id, label: x.sec.label, sizes };
  }
  const nodeLoads = loads.filter((l) => graph.nodeOf[l.key] != null).map((l) => ({ ...l, node: graph.nodeOf[l.key] }));
  for (const l of loads) if (graph.nodeOf[l.key] == null) notes.push({ key: 'calc.loadoff', vars: { load: l.label } });
  const curve = cleanCurve(o.curve) || DEFAULT_CURVE;
  const res = analyzePipes({ graph, source: graph.nodeOf.src, loads: nodeLoads, runAttrs: attrs, curve, opts: o.opts || {} });
  const lab = labelMap(runs);
  const problems = pipeProblems(res, { labelOf: lab, guidOf: (id) => id, imperial: !!o.imperial });
  const bigger = new Map();
  for (const s of res.segs) if (s.status === 'small' && s.need) { const cur = bigger.get(s.run); if (!cur || (s.needMm || 0) > cur.mm) bigger.set(s.run, { size: s.need, mm: s.needMm }); }
  return { ok: true, res, problems, proposals: [...bigger].map(([guid, v]) => ({ guid, size: v.size })), notes, graph };
}

// ------------------------------------------------------------------------------------------------ EG.1 — ducts
export function calcDucts(w, o = {}) {
  const system = o.system || 'supply', notes = [];
  const runs = runsOfSystem(w, 'duct', system);
  if (!runs.length) return { ok: false, key: 'calc.norun', notes };
  const cache = new Map(), ports = readPorts(w), terminals = [], points = [];
  for (const p of ports) {
    if (p.role !== 'equipment' || p.kind !== 'duct' || p.system !== system || p.flow !== 'SINK') continue;
    const lps = Number(calcProps(w, p.owner).AirflowLps) || 0;
    if (!(lps > 0)) { notes.push({ key: 'calc.noairflow', vars: { name: p.name || 'terminal' } }); continue; }
    terminals.push({ key: 't' + p.id, lps, label: p.ownerGuid || p.name }); points.push({ key: 't' + p.id, p: portWorld(w, cache, p) });
  }
  for (const x of o.terminals || []) { terminals.push({ key: x.key, lps: x.lps, label: x.label || x.key }); points.push({ key: x.key, p: x.p }); }
  let src = o.source || null;
  if (!src) { const p = ports.find((x) => x.role === 'equipment' && x.kind === 'duct' && x.system === system && (x.flow === 'SOURCE' || x.flow === 'SOURCEANDSINK')); if (p) src = portWorld(w, cache, p); }
  if (!src) { src = runs[0].verts[0]; notes.push({ key: 'calc.sourceguess' }); }
  points.push({ key: 'src', p: src });
  const graph = graphFromRuns(runs.map((x) => ({ id: x.id, verts: x.verts })), points, { tol: o.tol || 80 });
  if (graph.nodeOf.src == null) return { ok: false, key: 'calc.sourceoff', notes };
  const attrs = {};
  for (const x of runs) attrs[x.id] = { shape: x.r.shape, wMm: x.sec.w, hMm: x.sec.h, label: x.sec.label, mat: 'galv' };
  const nodeTerms = terminals.filter((t) => graph.nodeOf[t.key] != null).map((t) => ({ ...t, node: graph.nodeOf[t.key] }));
  for (const t of terminals) if (graph.nodeOf[t.key] == null) notes.push({ key: 'calc.loadoff', vars: { load: t.label } });
  const res = analyzeDucts({ graph, source: graph.nodeOf.src, terminals: nodeTerms, runAttrs: attrs, opts: o.opts || {} });
  const problems = ductProblems(res, { labelOf: labelMap(runs), guidOf: (id) => id, imperial: !!o.imperial });
  // proposals: per run, the size its biggest flow needs by equal friction (round: the diameter; rect / oval: the width, the height kept)
  const byRun = new Map();
  for (const s of res.segs) if ((s.status === 'small' || s.status === 'fast') && s.flow > 0) byRun.set(s.run, Math.max(byRun.get(s.run) || 0, s.flow));
  const proposals = [];
  for (const [guid, Q] of byRun) {
    const x = runs.find((r) => r.id === guid), rate = res.opts.method === 'friction' ? res.opts.rate : roundRate(Q, res.opts.vmax);
    const d = ductForFlow({ q: Q * 1000, rate, shape: x.r.shape, h: x.r.shape === 'round' ? null : x.sec.h, u: 'mm' });
    if (d) proposals.push({ guid, w: Math.round(d.w), h: x.r.shape === 'round' ? Math.round(d.w) : Math.round(d.h) });
  }
  return { ok: true, res, problems, proposals, notes, graph };
}
const roundRate = (Q, vmax) => { const D = Math.sqrt(4 * Q / (Math.PI * vmax)); return 0.02 * (1.204 / D) * vmax * vmax / 2 * 1.0 || 0.8; };   // f ≈ 0.02 at the velocity limit

// ------------------------------------------------------------------------------------------------ EG.2 — carriers
/** The spec for mep-model.js placeRun to draw a carrier run. A conduit's `size` is its trade size ('3/4'), its `type` 'emt' | 'pvc40'. */
export function carrierRun({ kind, storey, points, type = 'emt', size = '3/4', width = 300, depth = 100, label }) {
  if (kind === 'conduit') {
    const d = conduitSize(type, size);
    if (!d) throw Object.assign(new Error('mep.err.size'), { key: 'mep.err.size' });
    return { storey, kind: 'duct', system: 'conduit', shape: 'round', w: d.od, h: d.od, flow: 0, mat: type, size, slope: 0, points, valves: [], ends: [null, null] };
  }
  return { storey, kind: 'duct', system: 'tray', shape: 'rect', w: width, h: depth, flow: 0, mat: '', size: '', slope: 0, points, valves: [], ends: [null, null] };
}
export const placeCarrier = (spec) => placeRun(carrierRun(spec));

function endpointOf(w, text, cache) {
  const m = /^\s*(-?[\d.]+)\s*[,; ]\s*(-?[\d.]+)\s*[,; ]\s*(-?[\d.]+)\s*$/.exec(String(text));
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}
export function calcCarriers(w, o = {}) {
  const cache = new Map();
  const runs = readRuns(w).filter((r) => carrierOf(r)).map((r) => ({ r, sec: sectionOf(r), kind: carrierOf(r), verts: runVertices(r).map(worldOf(w, r.storey, cache)) })).filter((x) => x.sec);
  const cables = (o.cables || []).map((c) => ({ ...c }));
  if (!runs.length) return { ok: false, key: 'calc.nocarrier' };
  // equipment tags → world points (a cable end can be named by the tag of a piece of equipment, or typed as x,y,z in mm)
  const tags = new Map();
  for (const e of readEquipment(w)) if (e.tag && e.storey) tags.set(e.tag, worldOf(w, e.storey, cache)([e.x, e.y, e.z]));
  const points = [];
  for (const c of cables) for (const k of ['from', 'to']) { const p = endpointOf(w, c[k]) || o.points?.[c[k]] || tags.get(c[k]); if (p) points.push({ key: c[k], p }); }
  const graph = graphFromRuns(runs.map((x) => ({ id: x.r.guid, verts: x.verts })), points, { tol: o.tol || 150 });
  const routes = routeCables(graph, cables);
  const info = {};
  for (const x of runs) info[x.r.guid] = x.kind === 'conduit'
    ? { kind: 'conduit', type: CONDUIT_TYPES[x.r.mat] ? x.r.mat : 'emt', size: x.r.size, idMm: conduitSize(CONDUIT_TYPES[x.r.mat] ? x.r.mat : 'emt', x.r.size)?.id || 0, label: x.r.size + '"' }
    : { kind: 'tray', widthMm: x.sec.w, depthMm: x.sec.h, label: x.sec.label, mode: o.mode || 'area', maxPct: o.trayPct };
  const fills = fillByRun(cables, routes, info, { limits: o.limits || FILL_DEFAULTS.conduit, trayPct: o.trayPct ?? FILL_DEFAULTS.tray });
  const lab = new Map(runs.map((x) => [x.r.guid, x.sec.label + ' ' + x.r.system]));
  const problems = carrierProblems(fills, routes, { labelOf: (id) => lab.get(id) || id, guidOf: (id) => id });
  const rows = scheduleRows(cables, routes, { slack: o.slack, endsMm: o.endsMm });
  const proposals = fills.filter((f) => !f.fill.ok && f.kind === 'conduit' && f.bigger).map((f) => ({ guid: f.run, size: f.bigger.size }));
  return { ok: true, routes, fills, rows, csv: scheduleCsv(rows), problems, proposals, graph };
}

// ------------------------------------------------------------------------------------------------ EG.4 — lighting
/** Luminaires: every IfcLightFixture (IFC2X3: flow terminal or lamp) with a photometric file in its CadCraft_MepCalc set (Photometry = the IES / LDT text, PhotoName). */
export function readLuminaires(w, parsed = new Map()) {
  const out = [], issues = [], cache = new Map();
  // IfcLightFixture (IFC4); IFC2X3 has none, so a flow terminal or lamp that carries a photometric file counts as one
  const list = [];
  for (const c of ['IFCLIGHTFIXTURE', 'IFCFLOWTERMINAL', 'IFCLAMP']) { let l = []; try { l = ids(w.api, w.mid, c); } catch { continue; } for (const id of l) if (c === 'IFCLIGHTFIXTURE' || calcProps(w, id).Photometry) list.push(id); }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = calcProps(w, id), text = ps.Photometry;
    const guid = w.guidOf(id);
    if (!text) { issues.push({ key: 'light.nofile', guid }); continue; }
    let ph = parsed.get(text);
    if (!ph) { ph = parsePhotometry(String(text), String(ps.PhotoName || '')); parsed.set(text, ph); }
    if (!ph.ok) { issues.push({ key: ph.key, guid }); continue; }
    const storey = so.get(id), st = storey ? w.api.GetLine(w.mid, storey, false) : null;
    if (!st?.ObjectPlacement) continue;
    const M = w.relMatrix(st.ObjectPlacement.value, w.api.GetLine(w.mid, id, false).ObjectPlacement.value);
    const toWorld = worldOf(w, storey, cache), p = toWorld([M[12], M[13], M[14]]);
    out.push({ id: guid, storey, photo: ph.photo, p, rot: Math.atan2(M[1], M[0]) * 180 / Math.PI, scale: Number(ps.FluxFactor) > 0 ? Number(ps.FluxFactor) : 1 });
  }
  return { luminaires: out, issues };
}
export function roomsOf(w) {
  const out = [], cache = new Map();
  let levels = [];
  try { levels = ids(w.api, w.mid, 'IFCBUILDINGSTOREY'); } catch { return out; }
  for (const st of levels) {
    let loops = null;
    try { loops = storeyLoops(w, st); } catch { continue; }
    (loops.rooms || []).forEach((r, i) => {
      const toWorld = worldOf(w, st, cache), poly = (r.poly || []).map((p) => toWorld([p[0], p[1], 0]));
      if (poly.length >= 3) out.push({ storey: st, name: r.name || 'Room ' + (out.length + 1), poly: poly.map((p) => [p[0], p[1]]), z: poly[0][2] });
    });
  }
  return out;
}
export function calcLighting(w, o = {}) {
  const { luminaires, issues } = readLuminaires(w);
  const notes = issues.map((i) => ({ key: i.key, vars: { guid: i.guid } }));
  if (!luminaires.length) return { ok: false, key: 'calc.noluminaire', notes };
  const rooms = o.rooms || roomsOf(w);
  if (!rooms.length) return { ok: false, key: 'calc.noroom', notes };
  const areas = [], problems = [];
  for (const r of rooms) {
    const height = (r.z || 0) + (o.height ?? 800);
    const inRoom = luminaires.filter((L) => L.storey === r.storey || r.storey == null);
    const res = computeGrid({ luminaires: inRoom, polygon: r.poly, spacing: o.spacing || 500, height, margin: o.margin || 0, llf: o.llf ?? DEFAULT_LLF.value });
    const checks = checkTargets(res, o.targets || {});
    areas.push({ name: r.name, res, checks, luminaires: inRoom.length });
    problems.push(...lightingProblems(r.name, res, checks, { id: r.name }));
  }
  problems.push(lightingNote());
  if ((o.llf ?? DEFAULT_LLF.value) === DEFAULT_LLF.value) notes.push({ key: 'calc.llfdefault' });
  return { ok: true, areas, problems, notes };
}

// ------------------------------------------------------------------------------------------------ writing
/** Typed loads on an element: { flowLps, fixtureUnits, airflowLps } → ONE undo step. */
export function setLoad(guid, v) {
  const rows = [];
  if (v.flowLps !== undefined) rows.push(['FlowLps', 'IFCREAL', Math.max(0, Number(v.flowLps) || 0)]);
  if (v.fixtureUnits !== undefined) rows.push(['FixtureUnits', 'IFCREAL', Math.max(0, Number(v.fixtureUnits) || 0)]);
  if (v.airflowLps !== undefined) rows.push(['AirflowLps', 'IFCREAL', Math.max(0, Number(v.airflowLps) || 0)]);
  return setCalcProps(guid, rows);
}
/** A luminaire's photometric file (the IES / LDT text, kept in the file with the element) — refuses what does not parse. */
export function setPhotometry(guid, name, text) {
  const p = parsePhotometry(text, name);
  if (!p.ok) throw Object.assign(new Error(p.key), { key: p.key });
  if (String(text).length > 400000) throw Object.assign(new Error('photo.big'), { key: 'photo.big' });
  return setCalcProps(guid, [['PhotoName', 'IFCLABEL', String(name || p.photo.name || '').slice(0, 120)], ['Photometry', 'IFCTEXT', String(text)]]);
}
/** The change that applies a result's proposals (pipes: size names; ducts: widths and heights in mm; conduits: trade sizes). */
export const applyProposals = (proposals) => setRunSizes(proposals);
export { DEFAULT_WSFU, DEFAULT_CURVE };
