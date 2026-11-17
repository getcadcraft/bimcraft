/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/route-systems.js — BimCraft's adapter for the three siblings of MEP.1 (0.10, suggestions #1557, #1558, #1559). No DOM:
 * tools/mep-route/systems-test.mjs runs it in Node. The engines are shared (mep-route/gravity.js, water.js, refrigerant.js: byte-identical
 * copies of lib/mep-route, tools/mep-route/sync.mjs); this file reads the model for them (fixture connectors, equipment ports, the
 * tables of the plumbing standard in force) and draws what they find as ordinary runs (placeRun / placeNetwork of mep/autoroute.js),
 * so fittings, ports, systems and IfcRelConnectsPorts are the run model's own.
 *
 *   planDrain(w, { storey, outlet, stacks?, obstacles?, std?, mat?, minTail?, ventSize? })       MEP.2 sanitary drainage by gravity
 *       → { ok, specs, plan (gravity.js result), failed, std, note }   sizes by the fixture units of mep/fixtures.js under `std`
 *       (IPC DFU for 'us', NBR 8160 UHC for 'br'); slopes by mep/pipes.js drainSlope; capacities by mep/drainage.js
 *   planWaterSystems(w, { storey, source, hot?: { source, fixtures }, pressure?, loop?, obstacles?, curve?, wsfu? })   MEP.3 cold and hot water
 *       → { ok, specs, cold, hot, failed }
 *   planRefrigerant(w, { storey, outdoor, indoors: [{ eq, capacity }], limits?, obstacles?, condensate?: { outlet } })   MEP.4 split / multi-split / VRF
 *       → { ok, specs, plan, condensate, failed }
 * A drafting aid: no code compliance is claimed; the person checks the design.
 */
import { planDrainage } from '../mep-route/gravity.js';
import { planWater, boxesOfRuns, hotFrom } from '../mep-route/water.js';
import { planRefrigerant as planPairs } from '../mep-route/refrigerant.js';
import { readFixturePorts, runDefaults, sectionOf, placeRun } from '../mep-model.js';
import { FIXTURES } from './fixtures.js';
import { capacity } from './drainage.js';
import { sizesFor, pipeSize, drainSlope, projectStandard, SYSTEM_MATERIALS, DEFAULT_CLASS } from './pipes.js';
import { demandFor, hazenWilliams, PIPE_K, DEFAULT_WSFU, HW_C } from './flow.js';
import { readEquipment, portsAt } from './equipment.js';
import { lineSetFor } from './hvac.js';

const axisOf = (d, fb) => { const a = (d || fb || [0, 0, 1]).map((v) => (Math.abs(v) > 0.9 ? Math.sign(v) : 0)); return a.some((v) => v) ? a : fb || [0, 0, 1]; };
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

function sizeTable(mat, cls) {
  return sizesFor(mat, cls).map((key) => { const p = pipeSize(mat, cls, key); const sec = sectionOf({ kind: 'pipe', mat, cls, size: key }); return p && sec ? { key, nominal: p.metric ? p.dn : p.nps, od: sec.od, id: sec.id, slope: drainSlope(p) } : null; }).filter(Boolean);
}

// ------------------------------------------------------------------------------------------------------------ MEP.2
export function drainFixtures(w, storeyId, std) {
  return readFixturePorts(w).filter((q) => q.storey === storeyId && q.domain === 'pipe' && q.system === 'san' && q.flow === 'out' && FIXTURES[q.fixture])
    .map((q) => { const k = FIXTURES[q.fixture]; return { id: String(q.id), kind: q.fixture, p: q.p.slice(), dir: axisOf(q.dir, [0, 0, -1]), units: std === 'br' ? k.uhc : k.dfu, dn: std === 'br' ? k.dnMin : k.trapIn }; });
}
export function planDrain(w, o) {
  const std = o.std || projectStandard() || 'us';
  const d = runDefaults('pipe', 'san', null, std), mat = o.mat || d.mat, cls = d.cls;
  const storeyId = w.byGuid(o.storey);
  if (!storeyId) refuse('model.err.nolevel');
  const sizes = sizeTable(mat, cls), by = new Map(sizes.map((s) => [s.nominal, s]));
  const rules = { sizes, slopeOf: (n) => by.get(n)?.slope ?? null, capacity: (n, s, role) => capacity(std, n, s, role) };
  const fixtures = drainFixtures(w, storeyId, std);
  const plan = planDrainage({ fixtures, outlet: o.outlet, stacks: o.stacks || [], obstacles: o.obstacles || [], rules, minTail: o.minTail ?? 100, clearance: o.clearance ?? 25 });
  if (!plan.runs.length) return { ok: false, specs: [], plan, failed: plan.failed, std, fixtures: fixtures.length };
  const specs = plan.runs.map((r) => ({ storey: o.storey, kind: 'pipe', system: 'san', mat, cls, size: r.size, slope: r.slope, role: r.role === 'main' ? 'main' : r.role, points: r.points.map((q) => q.slice()), flow: 0 }));
  // vent stubs: the smallest size at least as big as the ventSize asked (a drafting default 1-1/4 in or DN 40)
  const vd = runDefaults('pipe', 'vent', null, std), vs = sizeTable(vd.mat, vd.cls), want = o.ventSize ?? (std === 'br' ? 40 : 1.25);
  const vsize = vs.find((s) => s.nominal + 1e-9 >= want) || vs[vs.length - 1];
  for (const v of plan.vents || []) specs.push({ storey: o.storey, kind: 'pipe', system: 'vent', mat: vd.mat, cls: vd.cls, size: vsize.key, slope: 0, points: [[v.at[0], v.at[1], v.at[2] + v.up], v.at.slice()] });
  return { ok: plan.ok, specs, plan, failed: plan.failed, std, fixtures: fixtures.length, note: plan.notes };
}

// ------------------------------------------------------------------------------------------------------------ MEP.3
const GPM_LS = 3.785411784 / 60;
function waterRules(mat, cls, system, curve, u = 'mm') {
  const sizes = sizeTable(mat, cls).filter((s) => s.od >= 12);
  return { sizes, demand: (units) => demandFor(units, curve).q, friction: hazenWilliams, C: HW_C[mat] || HW_C.default, K: { elbow: PIPE_K.elbow90, tee_branch: PIPE_K.tee_branch, reducer: PIPE_K.reducer }, vmax: 2.4 };
}
export function waterFixtures(w, storeyId, wsfu = DEFAULT_WSFU) {
  return readFixturePorts(w).filter((q) => q.storey === storeyId && q.domain === 'pipe' && q.system === 'cw' && q.flow === 'in' && q.fixture)
    .map((q) => ({ id: String(q.id), kind: q.fixture, p: q.p.slice(), out: axisOf(q.dir, [0, 1, 0]), units: wsfu[q.fixture] || 1 }));
}
const specOf = (o, system, mat, cls, r) => ({ storey: o.storey, kind: 'pipe', system, mat, cls, size: r.size, slope: 0, points: r.points.map((q) => q.slice()) });
export function planWaterSystems(w, o) {
  const storeyId = w.byGuid(o.storey);
  if (!storeyId) refuse('model.err.nolevel');
  const std = o.std || projectStandard() || 'us';
  const eqs = readEquipment(w), portOf = (ref) => { const eq = eqs.find((e) => e.guid === ref.eq), p = eq && portsAt(eq).find((x) => x.name === ref.port); if (!p) refuse('mep.route.err.source'); return p; };
  const dc = runDefaults('pipe', 'cw', null, std), dh = runDefaults('pipe', 'hw', null, std);
  const fx = waterFixtures(w, storeyId, o.wsfu).filter((f) => !o.only || o.only.includes(f.id));
  const sp = portOf(o.source), failed = [];
  const T0 = Date.now();
  const cold = planWater({ source: { p: sp.at, out: axisOf(sp.axis) }, fixtures: fx, obstacles: o.obstacles || [], rules: waterRules(dc.mat, dc.cls, 'cw', o.curve), pressure: o.pressure, system: 'cw', clearance: o.clearance ?? 25 });
  if (typeof process !== 'undefined' && process.env?.MEP_TIME) console.log('cold ms', Date.now() - T0);
  failed.push(...cold.failed.map((f) => ({ ...f, system: 'cw' })));
  const specs = cold.runs.map((r) => specOf(o, 'cw', dc.mat, dc.cls, r));
  let hot = null;
  if (o.hot) {
    const hp = portOf(o.hot.source), hf = fx.filter((f) => !o.hot.fixtures || o.hot.fixtures.includes(f.id)).map((f) => ({ ...f, p: hotFrom(f.p, o.hot.offset ?? 100) }));
    hot = planWater({ source: { p: hp.at, out: axisOf(hp.axis) }, fixtures: hf, obstacles: [...(o.obstacles || []), ...boxesOfRuns(cold.runs, 25, 100)], rules: waterRules(dh.mat, dh.cls, 'hw', o.curve), pressure: o.pressure, system: 'hw', clearance: o.clearance ?? 25, snap: 100, relax: true,
      loop: o.hot.loop ? { size: o.hot.loop.size, to: { p: portOf(o.hot.loop.port).at.map((v, i) => v + axisOf(portOf(o.hot.loop.port).axis)[i] * 150), out: axisOf(portOf(o.hot.loop.port).axis) } } : null });   // the loop ends 150 mm short of the port: a heater has no return port, so the person joins it (an open end, never a wrong-system connection)
    failed.push(...hot.failed.map((f) => ({ ...f, system: 'hw' })));
    specs.push(...hot.runs.map((r) => specOf(o, 'hw', dh.mat, dh.cls, r)));
    if (hot.loop) specs.push(specOf(o, 'hwr', dh.mat, dh.cls, hot.loop.run));
  }
  return { ok: !failed.length, specs, cold, hot, failed };
}

// ------------------------------------------------------------------------------------------------------------ MEP.4
const acrOdOf = (key) => sectionOf({ kind: 'pipe', mat: 'acr', cls: 'coil', size: key })?.od;
export function planRefrigerant(w, o) {
  const storeyId = w.byGuid(o.storey);
  if (!storeyId) refuse('model.err.nolevel');
  const eqs = readEquipment(w), eqOf = (g) => eqs.find((e) => e.guid === g) || refuse('mep.route.err.source');
  const pair = (eq) => {
    const ps = portsAt(eq), l = ps.find((p) => p.system === 'refl'), g = ps.find((p) => p.system === 'refg');
    if (!l || !g) refuse('mep.route.err.port');
    const mid = l.at.map((v, i) => (v + g.at[i]) / 2);
    return { p: mid, out: axisOf(l.axis), liquid: { key: l.nominal, od: acrOdOf(l.nominal) }, gas: { key: g.nominal, od: acrOdOf(g.nominal) }, ports: { l, g }, drain: ps.find((p) => p.system === 'cond') || null };
  };
  const out = pair(eqOf(o.outdoor));
  const indoors = o.indoors.map((x) => { const e = eqOf(x.eq), q = pair(e); return { id: e.guid, eq: e, ...q, capacity: Number(x.capacity) || Number(e.values?.capacity) || 1 }; });
  const lineSet = (kw) => { const t = lineSetFor(kw); return { liquid: { key: t.liquid, od: acrOdOf(t.liquid) }, gas: { key: t.gas, od: acrOdOf(t.gas) } }; };
  const plan = planPairs({ outdoor: out, indoors, obstacles: o.obstacles || [], rules: { lineSet, gap: o.gap ?? 25 }, limits: o.limits, clearance: o.clearance ?? 25 });
  const specs = plan.runs.map((r) => ({ storey: o.storey, kind: 'pipe', system: r.line === 'liquid' ? 'refl' : 'refg', mat: 'acr', cls: 'coil', size: r.size, slope: 0, points: r.points.map((q) => q.slice()) }));
  let condensate = null;
  if (o.condensate) {
    const std = o.std || projectStandard() || 'us', d = runDefaults('pipe', 'cond', null, std), sizes = sizeTable(d.mat, d.cls), by = new Map(sizes.map((s) => [s.nominal, s]));
    const rules = { sizes, slopeOf: (n) => by.get(n)?.slope ?? null, capacity: () => Infinity };   // condensate carries no fixture units: the unit's own drain size is the floor
    const fixtures = indoors.filter((u) => u.drain).map((u) => ({ id: u.id, p: u.drain.at.slice(), dir: axisOf(u.drain.axis, [0, 0, -1]), units: 0, dn: std === 'br' ? Math.round(u.drain.size) : u.drain.nominal ? Number(eval_nps(u.drain.nominal)) : 0 }));
    condensate = planDrainage({ fixtures, outlet: o.condensate.outlet, obstacles: o.obstacles || [], rules, minTail: 50, clearance: o.clearance ?? 25 });
    specs.push(...condensate.runs.map((r) => ({ storey: o.storey, kind: 'pipe', system: 'cond', mat: d.mat, cls: d.cls, size: r.size, slope: r.slope, role: r.role === 'main' ? 'main' : r.role, points: r.points.map((q) => q.slice()) })));
  }
  return { ok: plan.ok && (!condensate || condensate.ok), specs, plan, condensate, failed: [...plan.failed, ...(condensate?.failed || [])] };
}
/** "1-1/4" → 1.25 (a nominal pipe size name in inches). */
function eval_nps(s) { const m = String(s).split('-'); return m.reduce((n, part) => n + (part.includes('/') ? Number(part.split('/')[0]) / Number(part.split('/')[1]) : Number(part)), 0); }

export { placeNetwork } from './autoroute.js';
export const placeOne = placeRun;
