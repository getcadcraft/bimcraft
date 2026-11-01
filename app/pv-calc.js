/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pv-calc.js — the solar PV calculations on the open model (0.8 EG.15, session `energy_PART_2`): the roof faces, arrays on a roof or the ground, shading
 * from the model's own triangles, yield, strings and the one-line. DOM-free: it reads the model through a ModelWriter (`w`), runs pv.js / pv-sun.js /
 * pv-shade.js / pv-yield.js / pv-string.js / pv-oneline.js and hands back results, Problems (pv-problems.js) and, for placing, an op (ONE undo step).
 *
 *   pvSite(w, override?) → { lat, lon, north, elevation, tz } | null     IfcSite's latitude / longitude and the context's TrueNorth, or what the person typed
 *   modelFaces(w, site, opts?) → { ok, faces }                          the upward roof planes (IfcRoof and its parts, roof slabs), biggest first
 *   planRoofArray(w, { site, face, module, orient, setback, gap, name }) → { ok, array }     modules fitted in a face (nothing is written)
 *   planGroundArray(w, { site, module, origin, rows, perRow, stack, tilt, azimuth, pitchMm?, hours?, ... }) → { ok, array }
 *   placeArray({ array, storey, guid? }) → op              one IfcSolarDevice (IFC2X3: IfcBuildingElementProxy) holding every module, with CadCraft_PvArray
 *   removeArrays(guids) → op
 *   readArrays(w) → [array]                                the arrays in the file (from CadCraft_PvArray.Definition)
 *   calcArrays(w, o) → { ok, arrays, problems }            calcYield(w, o) → { ok, res, problems, notes }
 *   calcStrings(w, o) → { ok, design, problems }           calcOneline(w, o) → { ok, diagram, svg, problems }
 * An array is { id, name, guid?, mount: 'roof' | 'ground', module, orient, tilt, azimuth, normal, u, v, across, along, setback, gap, faceId?, tables?, modules: [{ c, row, col, table?, corners }] }.
 */
import { ids, val, lengthUnitMm, productTriangles, inv4, apply4 } from './ifc-util.js';
import { op } from './model-ops.js';
import { siteOf } from './daylight-bim-sky.js';
import { roofFaces, fitFace, groundLayout, cleanModule, STARTER_MODULE, STARTER_INVERTER, planeNormal } from './pv.js';
import { skyYear, sunGridOf, yieldOf, DEFAULT_LOSSES } from './pv-yield.js';
import { obstructions, tableTris, shadeGrid } from './pv-shade.js';
import { designStrings } from './pv-string.js';
import { buildOneline, onelineSvg } from './pv-oneline.js';
import { arrayProblems, stringProblems, yieldProblems, onelineProblems } from './pv-problems.js';

export const PV_PSET = 'CadCraft_PvArray';
const SKIP = /^IFC(SPACE|OPENINGELEMENT|OPENINGSTANDARDCASE|ANNOTATION|GRID|VIRTUALELEMENT|SITE|BUILDINGSTOREY|BUILDING|SOLARDEVICE)$/;
const tryIds = (api, mid, cls, inh = false) => { try { return ids(api, mid, cls, inh); } catch { return []; } };
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const r2 = (v) => Math.round(v * 100) / 100;

export function pvSite(w, override = null) {
  const found = siteOf(w.api, w.mid), o = override || {};
  const lat = Number.isFinite(o.lat) ? o.lat : found?.lat, lon = Number.isFinite(o.lon) ? o.lon : found?.lon;
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
  return { lat, lon, north: o.north || found?.north || [0, 1], elevation: Number.isFinite(o.elevation) ? o.elevation : 0, tz: Number.isFinite(o.tz) ? o.tz : Math.round(lon / 15), fromModel: !!found && !Number.isFinite(o.lat) };
}

/** Placed triangles (mm) of every product that can shade or carry modules, except the PV devices themselves. */
export function modelTriangles(w) {
  const api = w.api, mid = w.mid, mm = lengthUnitMm(api, mid), out = [];
  const roofParent = new Set(tryIds(api, mid, 'IFCROOF', true));
  const parent = new Map();
  for (const rid of tryIds(api, mid, 'IFCRELAGGREGATES')) { const r = api.GetLine(mid, rid, false); for (const h of r?.RelatedObjects || []) parent.set(h.value, r.RelatingObject?.value); }
  const pv = new Set(readArrays(w).map((a) => a.expressId));
  for (const id of tryIds(api, mid, 'IFCPRODUCT', true)) {
    if (pv.has(id)) continue;
    const l = api.GetLine(mid, id, false);
    const cls = String(l?.constructor?.name || '').toUpperCase();
    if (!l || !l.Representation || SKIP.test(cls)) continue;
    let t;
    try { t = productTriangles(api, mid, id, mm); } catch { continue; }
    if (!t.indices.length) continue;
    const tris = new Array(t.indices.length * 3);
    for (let i = 0; i < t.indices.length; i++) { const v = t.indices[i] * 3; tris[i * 3] = t.positions[v] * mm; tris[i * 3 + 1] = t.positions[v + 1] * mm; tris[i * 3 + 2] = t.positions[v + 2] * mm; }
    const pre = String(val(l.PredefinedType) ?? '');
    const roof = cls === 'IFCROOF' || roofParent.has(parent.get(id)) || (cls === 'IFCSLAB' && /ROOF/.test(pre));
    out.push({ id, cls, guid: val(l.GlobalId), roof, tris });
  }
  return out;
}

export function modelFaces(w, site, opts = {}) {
  const list = (opts.tris || modelTriangles(w)).filter((x) => x.roof);
  const flat = [];
  for (const x of list) for (let i = 0; i < x.tris.length; i++) flat.push(x.tris[i]);
  return { ok: true, faces: roofFaces(flat, site, opts) };
}

// ------------------------------------------------------------------------------------------------ arrays
let seq = 0;
const nextId = (existing) => { let id; do { id = 'A' + (++seq); } while (existing.some((a) => a.id === id)); return id; };
const corners = (c, u, v, A, B) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sx, sy]) => [0, 1, 2].map((q) => c[q] + u[q] * sx * A / 2 + v[q] * sy * B / 2));

function arrayOf(o) {
  const { module, fit, mount, site, name, faceId, orient, setback, gap, existing = [] } = o;
  const n = fit.n, ta = o.tilt !== undefined ? { tilt: o.tilt, azimuth: o.azimuth } : null;
  const hz = Math.hypot(n[0], n[1]);
  const tilt = ta ? ta.tilt : Math.acos(Math.max(-1, Math.min(1, n[2]))) * 180 / Math.PI;
  return { id: nextId(existing), name: name || null, mount, module, orient, tilt: r2(tilt), azimuth: ta ? ta.azimuth : (hz < 0.0087 ? null : r2(o.azimuth)), normal: n, u: fit.u, v: fit.v, across: fit.across, along: fit.along, setback, gap, faceId: faceId || null,
    tables: fit.tables || null, modules: fit.modules, kwp: r2(fit.modules.length * module.wp / 1000), lat: site.lat };
}

export function planRoofArray(w, o) {
  const site = o.site || pvSite(w);
  if (!site) return { ok: false, key: 'pv.err.nosite' };
  const mod = cleanModule(o.module || STARTER_MODULE);
  if (!mod.ok) return { ok: false, key: 'pv.err.module', errors: mod.errors };
  const faces = o.faces || modelFaces(w, site, { tris: o.tris }).faces;
  const face = faces.find((f) => f.id === o.face);
  if (!face) return { ok: false, key: 'pv.err.noface' };
  const fit = fitFace(face, mod.module, { orient: o.orient || 'portrait', setback: o.setback ?? 300, gap: o.gap ?? 20, max: o.max });
  if (!fit.count) return { ok: false, key: 'pv.err.nofit', face };
  const existing = o.existing || readArrays(w);
  const array = arrayOf({ module: mod.module, fit, mount: 'roof', site, name: o.name || ('PV ' + face.id), faceId: face.id, orient: o.orient || 'portrait', setback: o.setback ?? 300, gap: o.gap ?? 20, existing, azimuth: face.azimuth ?? 0 });
  array.tilt = face.tilt; array.azimuth = face.azimuth;
  return { ok: true, array, face, problems: arrayProblems([{ ...array, lat: site.lat }]) };
}

export function planGroundArray(w, o) {
  const site = o.site || pvSite(w);
  if (!site) return { ok: false, key: 'pv.err.nosite' };
  const mod = cleanModule(o.module || STARTER_MODULE);
  if (!mod.ok) return { ok: false, key: 'pv.err.module', errors: mod.errors };
  const g = groundLayout({ ...o, site, module: mod.module });
  if (g.error) return { ok: false, key: g.error };
  if (!g.count) return { ok: false, key: 'pv.err.nofit' };
  const existing = o.existing || readArrays(w);
  const fit = { n: g.n, u: g.u, v: g.v, across: g.across, along: g.along, modules: g.modules, tables: g.tables.map((t) => t.corners) };
  const array = arrayOf({ module: mod.module, fit, mount: o.mount || 'ground', site, name: o.name || null, faceId: null, orient: o.orient || 'portrait', setback: 0, gap: o.gap ?? 20, existing, tilt: g.tilt, azimuth: g.azimuth });
  if (!array.name) array.name = 'PV ' + array.id;
  array.rowPitchMm = g.pitchMm; array.gcr = g.gcr;
  return { ok: true, array, layout: g, problems: arrayProblems([{ ...array, lat: site.lat }]) };
}

const defOf = (a) => JSON.stringify({ ver: 1, id: a.id, name: a.name, mount: a.mount, orient: a.orient, tilt: a.tilt, azimuth: a.azimuth, faceId: a.faceId, setback: a.setback, gap: a.gap, normal: a.normal.map((x) => Math.round(x * 1e6) / 1e6),
  u: a.u.map((x) => Math.round(x * 1e6) / 1e6), v: a.v.map((x) => Math.round(x * 1e6) / 1e6), across: a.across, along: a.along, module: a.module, rowPitchMm: a.rowPitchMm ?? null,
  tables: a.tables ? a.tables.map((t) => t.map((p) => p.map((x) => Math.round(x * 10) / 10))) : null, modules: a.modules.map((m) => [...m.c.map((x) => Math.round(x * 10) / 10), m.row, m.col, m.table ?? 0]) });

export function readArrays(w) {
  const out = [];
  for (const cls of ['IFCSOLARDEVICE', 'IFCBUILDINGELEMENTPROXY']) {
    for (const id of tryIds(w.api, w.mid, cls)) {
      let ps = null;
      try { ps = w.readPset(id, PV_PSET); } catch { ps = null; }
      if (!ps || !ps.Definition) continue;
      let d;
      try { d = JSON.parse(String(ps.Definition)); } catch { continue; }
      if (!d || d.ver !== 1 || !Array.isArray(d.modules)) continue;
      const u = d.u, v = d.v, A = d.across, B = d.along;
      const mods = d.modules.map(([x, y, z, row, col, table]) => { const c = [x, y, z]; return { c, row, col, table, corners: corners(c, u, v, A, B) }; });
      out.push({ ...d, expressId: id, guid: w.guidOf(id), modules: mods, kwp: r2(mods.length * d.module.wp / 1000) });
    }
  }
  return out;
}

export function placeArray(spec) {
  const s = { ...spec };
  return op((w) => {
    const A = s.array, st = w.byGuid(s.storey);
    if (!st) refuse('pv.err.nolevel');
    const stLine = w.api.GetLine(w.mid, st, false);
    const g = w.gid(s.guid); s.guid = g;
    const Si = inv4(w.storeyWorld(st)), o0 = apply4(Si, 0, 0, 0);
    const toL = (p) => apply4(Si, p[0], p[1], p[2]);
    const dirL = (d) => { const q = apply4(Si, d[0], d[1], d[2]); return [q[0] - o0[0], q[1] - o0[1], q[2] - o0[2]]; };
    const zL = dirL(A.normal), xL = dirL(A.u);
    const M = A.module, hw = A.across / 2, hh = A.along / 2;
    const items = [];
    let style = null;
    try { style = w.surfaceStyle('PV module', [0.07, 0.12, 0.3], 0); } catch { style = null; }
    for (const m of A.modules) {
      const frame = w.axisFrame(toL(m.c), zL, xL);
      const solid = w.extrudeAt(w.profile([[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]]), frame, M.thicknessMm || 30);
      if (style) { try { w.styleItem(solid, style); } catch { /* unstyled */ } }
      items.push(solid);
    }
    const rep = w.rep('body', 'Body', 'SweptSolid', items);
    const pds = w.make('IFCPRODUCTDEFINITIONSHAPE', null, null, [w.H(rep)]);
    const lp = w.placeAt(stLine.ObjectPlacement.value, 0, 0, 0, 0);
    const name = w.L(A.name || 'PV array');
    const id = w.v4 ? w.make('IFCSOLARDEVICE', g, w.ownerHistory(), name, null, w.L('PV array'), w.H(lp), w.H(pds), null, 'SOLARPANEL')
      : w.make('IFCBUILDINGELEMENTPROXY', g, w.ownerHistory(), name, null, w.L('PV array'), w.H(lp), w.H(pds), null, 'ELEMENT');
    w.noteGuid(g, id);
    w.contain(id, st);
    w.upsertPset(id, PV_PSET, [['Definition', 'IFCTEXT', defOf(A)], ['ModuleCount', 'IFCINTEGER', A.modules.length], ['DcKwp', 'IFCREAL', r2(A.modules.length * M.wp / 1000)], ['Mount', 'IFCLABEL', A.mount],
      ['Tilt', 'IFCREAL', A.tilt], ['Azimuth', 'IFCREAL', A.azimuth ?? -1], ['Module', 'IFCLABEL', M.name]]);
    return { id, ids: [id], made: new Map([[g, id]]) };
  });
}
export function removeArrays(guids) {
  return op((w) => {
    const list = readArrays(w).filter((a) => guids.includes(a.guid));
    if (list.length) w.dropProduct(list.map((a) => a.expressId));
    return { id: null, ids: [] };
  });
}

// ------------------------------------------------------------------------------------------------ calculations
const tablesAsItems = (arrays) => arrays.flatMap((a) => (a.tables || []).map((t, i) => ({ owner: a.id + ':' + i, tris: tableTris(t) })));

/** The shade grid of each array: { [id]: frac[12][24] } and a summary. */
export function shadeArrays(arrays, months, items) {
  const obs = obstructions([...items, ...tablesAsItems(arrays)]), grid = sunGridOf(months), out = {}, info = {};
  for (const a of arrays) {
    const groups = new Map();
    for (const m of a.modules) { const t = m.table ?? 0; if (!groups.has(t)) groups.set(t, []); groups.get(t).push(m); }
    let acc = null, total = 0;
    for (const [t, mods] of groups) {
      const r = shadeGrid(mods, a.normal, grid, obs, { owner: a.tables ? a.id + ':' + t : null });
      if (!acc) acc = r.frac.map((row) => row.map((f) => (f === null ? null : 0)));
      for (let m = 0; m < 12; m++) for (let h = 0; h < 24; h++) if (r.frac[m][h] !== null) acc[m][h] += r.frac[m][h] * r.samples;
      total += r.samples;
    }
    out[a.id] = acc.map((row) => row.map((f) => (f === null ? null : f / (total || 1))));
    info[a.id] = { samples: total };
  }
  return { frac: out, info };
}

export function calcArrays(w, o = {}) {
  const arrays = o.arrays || readArrays(w);
  if (!arrays.length) return { ok: false, key: 'pv.err.noarray' };
  const site = pvSite(w, o.site);
  return { ok: true, arrays, problems: arrayProblems(arrays.map((a) => ({ ...a, lat: site?.lat ?? 0 }))), site };
}

/** o: { site?, arrays?, sky?, tAmb?, albedo?, losses?, inverter?, shading (default true), tris? } */
export function calcYield(w, o = {}) {
  const site = pvSite(w, o.site);
  if (!site) return { ok: false, key: 'pv.err.nosite' };
  const arrays = o.arrays || readArrays(w);
  if (!arrays.length) return { ok: false, key: 'pv.err.noarray' };
  const months = skyYear(site, o.sky || { mode: 'clear' }, { tz: site.tz });
  let shade = {}, info = {};
  if (o.shading !== false) { const r = shadeArrays(arrays, months, (o.tris || modelTriangles(w)).map((x) => ({ owner: null, tris: x.tris }))); shade = r.frac; info = r.info; }
  const res = yieldOf({ arrays: arrays.map((a) => ({ id: a.id, name: a.name, module: a.module, modules: a.modules.length, tilt: a.tilt, azimuth: a.azimuth, normal: a.normal })), site, sky: o.sky || { mode: 'clear' }, tAmb: o.tAmb ?? 20,
    albedo: o.albedo ?? 0.2, losses: o.losses || DEFAULT_LOSSES, inverter: o.inverter || null, shade, months, tz: site.tz });
  const withShade = arrays.map((a, i) => ({ ...a, lat: site.lat, shadeLossPct: res.arrays[i].annual.shadeLossPct, guid: a.guid }));
  const problems = [...yieldProblems(res), ...arrayProblems(withShade)];
  return { ok: true, res, problems, notes: res.notes, site, shade, shadeInfo: info };
}

export function calcStrings(w, o = {}) {
  const arrays = o.arrays || (o.modules ? [] : readArrays(w));
  const module = cleanModule(o.module || arrays[0]?.module || STARTER_MODULE);
  if (!module.ok) return { ok: false, key: 'pv.err.module' };
  const inverter = o.inverter || STARTER_INVERTER;
  if (!inverter) return { ok: false, key: 'pv.err.noinverter' };
  const modules = o.modules ?? arrays.reduce((s, a) => s + a.modules.length, 0);
  if (!(modules > 0)) return { ok: false, key: 'pv.err.noarray' };
  const design = designStrings({ modules, module: module.module, inverter, inverters: o.inverters || 1, ...(o.limits || {}) });
  const notes = [];
  if (module.module.starter || inverter.starter) notes.push({ key: 'pv.note.starter' });
  return { ok: true, design, problems: stringProblems(design), notes, module: module.module, inverter };
}

export function calcOneline(w, o = {}) {
  const arrays = o.arrays || readArrays(w);
  const inverter = o.inverter || STARTER_INVERTER, nInv = o.inverters || 1;
  if (!arrays.length) return { ok: false, key: 'pv.err.noarray' };
  const module = arrays[0].module;
  const plan = { name: o.name || 'PV system', module, inverter, inverters: nInv, ac: o.ac, panel: o.panel, code: o.code, arrays: [] };
  const problems = [];
  arrays.forEach((a, i) => {
    const d = designStrings({ modules: a.modules.length, module: a.module, inverter, inverters: 1, ...(o.limits || {}) });
    problems.push(...stringProblems(d, { label: a.name }));
    plan.arrays.push({ id: a.id, name: a.name, modules: a.modules.length - d.leftover, strings: { n: d.n, count: d.count }, inverter: i % nInv });
  });
  const diagram = buildOneline(plan);
  return { ok: true, plan, diagram, svg: onelineSvg(diagram), problems: [...problems, ...onelineProblems(diagram)] };
}
void planeNormal;
