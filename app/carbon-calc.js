/* SPDX-License-Identifier: Apache-2.0 */
/**
 * carbon-calc.js — embodied carbon on the open model (0.8 EG.14, session `energy_PART_2`): reads every building element with its material(s),
 * class, storey and quantities through a ModelWriter (`w`), runs carbon.js against the factor table (carbon-factors.js) and says what it could not
 * count. DOM-free; reading writes nothing. Two ops keep the person's choices in the file, each ONE undo step:
 *   CadCraft_CarbonFactors on IfcProject  { Table (JSON, the person's rows over the starter rows), Modules ("a1a3,a4"), FloorArea (m², typed) }
 *   CadCraft_Carbon on an element         { FactorId }   use this row for the element, whatever its material says
 *
 *   readElements(w, { geometry = true }) → [item]     carbon.js's items: quantities from the element's own Qto_* set (NetVolume, GrossVolume, Volume;
 *                                                      NetArea / GrossArea / NetSideArea / GrossSideArea / GrossFootprintArea / Area; Length), else the
 *                                                      volume of its closed mesh (qsource 'geometry'); a layered or constituent material splits the
 *                                                      VOLUME by layer thickness / equal shares; the element's type supplies the material it lacks
 *   readSettings(w)    → { rows, user, modules, floorArea }   the merged table and the typed settings
 *   floorAreaOf(w)     → m²    IfcSpace floor areas (Qto), else the floor slabs' areas; 0 when the model has neither
 *   calcCarbonModel(w, { modules?, floorArea?, rows?, geometry? }) → { ok, res, problems, items }
 *   carbonTotal(w, opts) → { kg, perM2, mass, modules, unmatched, missing }    the plain figure for Studio's running totals (EG.30)
 *   setCarbonSettings({ rows, modules, floorArea }) / setElementFactor(guid, id)   → ops
 */
import { ids, val, productTriangles } from './ifc-util.js';
import { op } from './model-ops.js';
import { cleanRow, mergeTable } from './carbon-factors.js';
import { calcCarbon, carbonProblems } from './carbon.js';

export const PSET_PROJECT = 'CadCraft_CarbonFactors', PSET_ELEMENT = 'CadCraft_Carbon';
const SKIP = /^IFC(OPENINGELEMENT|OPENINGSTANDARDCASE|VIRTUALELEMENT|ANNOTATION|GRID|SPACE|SITE|BUILDINGSTOREY|BUILDING)$/;
const VOL = ['NetVolume', 'GrossVolume', 'Volume', 'TotalVolume'];
const AREA = ['NetArea', 'NetSideArea', 'GrossArea', 'GrossSideArea', 'NetFloorArea', 'GrossFloorArea', 'GrossFootprintArea', 'Area', 'TotalSurfaceArea'];
const LEN = ['Length', 'NetLength', 'GrossLength'];
const tryIds = (api, mid, cls, inh = false) => { try { return ids(api, mid, cls, inh); } catch { return []; } };
const get = (w, id) => { try { return w.api.GetLine(w.mid, id, false); } catch { return null; } };
const hid = (h) => (h && typeof h === 'object' ? h.value : null);

/** Quantities of one element: every Qto's named value (m, m², m³ as the file states them). */
function qtoOf(w, id) {
  const out = {};
  for (const d of w.defs(id)) {
    const l = get(w, d.def);
    if (!l || !l.Quantities) continue;
    for (const h of l.Quantities) {
      const q = get(w, hid(h));
      const name = q ? val(q.Name) : null;
      const v = q ? val(q.VolumeValue ?? q.AreaValue ?? q.LengthValue ?? q.CountValue ?? q.WeightValue) : null;
      if (name && Number.isFinite(Number(v)) && out[name] === undefined) out[name] = Number(v);
    }
  }
  return out;
}
const first = (q, names) => { for (const n of names) if (Number.isFinite(q[n]) && q[n] > 0) return q[n]; return undefined; };

/** Volume of a closed triangle mesh in m³ (signed tetrahedra); `positions` in file units. */
export function meshVolume(positions, indices, unitMm) {
  let v = 0;
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3, b = indices[i + 1] * 3, c = indices[i + 2] * 3, P = positions;
    v += P[a] * (P[b + 1] * P[c + 2] - P[b + 2] * P[c + 1]) - P[a + 1] * (P[b] * P[c + 2] - P[b + 2] * P[c]) + P[a + 2] * (P[b] * P[c + 1] - P[b + 1] * P[c]);
  }
  const k = unitMm / 1000;
  return Math.abs(v) / 6 * k * k * k;
}

/** The materials a material definition names, with the share of the volume each takes: [{ name, share }]. */
function materialsOf(w, def, depth = 0) {
  const l = def ? get(w, def) : null;
  if (!l || depth > 3) return [];
  const type = w.api.GetNameFromTypeCode(l.type).toUpperCase();
  if (type === 'IFCMATERIAL') { const n = val(l.Name); return n ? [{ name: String(n), share: 1 }] : []; }
  if (type === 'IFCMATERIALLIST') return (l.Materials || []).map((h) => ({ name: val(get(w, hid(h))?.Name), share: 0 })).filter((m) => m.name).map((m, _, a) => ({ ...m, share: 1 / a.length }));
  if (type === 'IFCMATERIALLAYERSETUSAGE') return materialsOf(w, hid(l.ForLayerSet), depth + 1);
  if (type === 'IFCMATERIALLAYERSET') {
    const layers = (l.MaterialLayers || []).map((h) => get(w, hid(h))).filter(Boolean).map((y) => ({ name: val(get(w, hid(y.Material))?.Name), t: Number(val(y.LayerThickness)) || 0 })).filter((y) => y.name);
    const sum = layers.reduce((s, y) => s + y.t, 0);
    const byName = new Map();
    layers.forEach((y) => byName.set(y.name, (byName.get(y.name) || 0) + (sum > 0 ? y.t / sum : 1 / layers.length)));
    return [...byName].map(([name, share]) => ({ name: String(name), share }));
  }
  if (type === 'IFCMATERIALCONSTITUENTSET') {
    const c = (l.MaterialConstituents || []).map((h) => get(w, hid(h))).filter(Boolean).map((y) => ({ name: val(get(w, hid(y.Material))?.Name), f: Number(val(y.Fraction)) })).filter((y) => y.name);
    const fs = c.reduce((s, y) => s + (y.f > 0 ? y.f : 0), 0);
    return c.map((y) => ({ name: String(y.name), share: fs > 0 ? (y.f > 0 ? y.f / fs : 0) : 1 / c.length }));
  }
  if (type === 'IFCMATERIALPROFILESETUSAGE') return materialsOf(w, hid(l.ForProfileSet), depth + 1);
  if (type === 'IFCMATERIALPROFILESET') {
    const p = (l.MaterialProfiles || []).map((h) => val(get(w, hid(get(w, hid(h))?.Material))?.Name)).filter(Boolean);
    return p.map((n) => ({ name: String(n), share: 1 / p.length }));
  }
  return [];
}

export function floorAreaOf(w) {
  let sum = 0;
  for (const id of tryIds(w.api, w.mid, 'IFCSPACE')) { const a = first(qtoOf(w, id), ['NetFloorArea', 'GrossFloorArea']); if (a) sum += a; }
  if (sum > 0) return sum;
  for (const id of tryIds(w.api, w.mid, 'IFCSLAB', true)) {
    const l = get(w, id);
    if (!l || !/^(FLOOR|BASESLAB)$/.test(String(val(l.PredefinedType) || ''))) continue;
    const a = first(qtoOf(w, id), ['GrossArea', 'NetArea', 'GrossFootprintArea', 'Area']);
    if (a) sum += a;
  }
  return sum;
}

export function readElements(w, { geometry = true } = {}) {
  const api = w.api, mid = w.mid;
  const matOf = new Map(), typeOf = new Map(), storeyOf = new Map(), parents = new Set(), storeyName = new Map();
  for (const rid of tryIds(api, mid, 'IFCRELASSOCIATESMATERIAL')) { const r = get(w, rid); const d = hid(r?.RelatingMaterial); if (d) for (const h of r.RelatedObjects || []) matOf.set(h.value, d); }
  for (const rid of tryIds(api, mid, 'IFCRELDEFINESBYTYPE')) { const r = get(w, rid); const t = hid(r?.RelatingType); if (t) for (const h of r.RelatedObjects || []) typeOf.set(h.value, t); }
  for (const rid of tryIds(api, mid, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) { const r = get(w, rid); const s = hid(r?.RelatingStructure); if (s) for (const h of r.RelatedElements || []) storeyOf.set(h.value, s); }
  for (const rid of tryIds(api, mid, 'IFCRELAGGREGATES')) { const r = get(w, rid); if (r) { const p = hid(r.RelatingObject); if (p) parents.add(p); } }
  for (const id of tryIds(api, mid, 'IFCBUILDINGSTOREY')) storeyName.set(id, String(val(get(w, id)?.Name) || ''));
  const out = [];
  for (const id of tryIds(api, mid, 'IFCELEMENT', true)) {
    const l = get(w, id);
    if (!l) continue;
    const cls = w.api.GetNameFromTypeCode(l.type).toUpperCase();
    if (SKIP.test(cls)) continue;
    const q = qtoOf(w, id);
    if (parents.has(id) && !first(q, VOL)) continue;   // an assembly is counted through its parts
    const mats = materialsOf(w, matOf.get(id)).length ? materialsOf(w, matOf.get(id)) : materialsOf(w, matOf.get(typeOf.get(id)));
    let volume = first(q, VOL), qsource = 'qto';
    if (volume === undefined && geometry) {
      try { const t = productTriangles(api, mid, id, w.unitMm); if (t.indices.length) { volume = meshVolume(t.positions, t.indices, w.unitMm); qsource = 'geometry'; } } catch { /* no shape */ }
    }
    if (!Number.isFinite(volume)) { volume = undefined; qsource = 'none'; }
    const area = first(q, AREA), length = first(q, LEN);
    const props = (() => { try { return w.readPset(id, PSET_ELEMENT) || {}; } catch { return {}; } })();
    const parts = (mats.length ? mats : [{ name: '', share: 1 }]).map((m) => ({ material: m.name, volume: volume === undefined ? undefined : volume * m.share, area, length, count: 1 }));
    out.push({ id, guid: val(l.GlobalId), cls, name: String(val(l.Name) || ''), storey: storeyName.get(storeyOf.get(id)) || '', qsource, factorId: props.FactorId ? String(props.FactorId) : undefined, parts });
  }
  return out;
}

export function readSettings(w) {
  const proj = tryIds(w.api, w.mid, 'IFCPROJECT')[0];
  let p = {};
  if (proj) { try { p = w.readPset(proj, PSET_PROJECT) || {}; } catch { p = {}; } }
  let user = [];
  if (p.Table) { try { const j = JSON.parse(String(p.Table)); user = Array.isArray(j) ? j : []; } catch { user = []; } }
  const modules = String(p.Modules || 'a1a3').split(',').map((s) => s.trim().toLowerCase()).filter((m) => ['a1a3', 'a4', 'a5'].includes(m));
  const fa = Number(p.FloorArea);
  return { rows: mergeTable(user), user, modules: modules.length ? modules : ['a1a3'], floorArea: fa > 0 ? fa : 0 };
}

export function calcCarbonModel(w, o = {}) {
  const set = readSettings(w);
  const items = readElements(w, { geometry: o.geometry !== false });
  if (!items.length) return { ok: false, key: 'carbon.noelements' };
  const rows = o.rows || set.rows;
  const floorArea = o.floorArea > 0 ? o.floorArea : set.floorArea > 0 ? set.floorArea : floorAreaOf(w);
  const res = calcCarbon(items, rows, { modules: o.modules || set.modules, floorArea });
  return { ok: true, res, items, rows, floorArea, problems: carbonProblems(res) };
}

/** The plain figure for the status bar's running totals: kgCO2e, per m² of floor, mass and what was left out. */
export function carbonTotal(w, o = {}) {
  const r = calcCarbonModel(w, o);
  if (!r.ok) return { kg: 0, perM2: null, mass: 0, modules: ['a1a3'], unmatched: 0, missing: 0, empty: true };
  return { kg: r.res.totals.total, perM2: r.res.perM2, mass: r.res.totals.mass, modules: r.res.modules, unmatched: r.res.unmatched.length, missing: r.res.missing.length };
}

// ------------------------------------------------------------------------------------------------ ops
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

/** Keep the person's rows, the modules and a typed floor area in the file (IfcProject). Rows that do not validate refuse the whole change. */
export function setCarbonSettings({ rows, modules, floorArea }) {
  const clean = rows === undefined ? undefined : rows.map((r) => { const c = cleanRow(r); if (!c.row) refuse('carbon.err.row.' + c.errors[0]); return c.row; });
  if (clean && new Set(clean.map((r) => r.id)).size !== clean.length) refuse('carbon.err.duplicate');
  return op((w) => {
    const proj = tryIds(w.api, w.mid, 'IFCPROJECT')[0];
    if (!proj) refuse('carbon.err.noproject');
    const out = [];
    if (clean) out.push(['Table', 'IFCTEXT', JSON.stringify(clean)]);
    if (modules) out.push(['Modules', 'IFCLABEL', modules.filter((m) => ['a1a3', 'a4', 'a5'].includes(m)).join(',') || 'a1a3']);
    if (floorArea !== undefined) out.push(['FloorArea', 'IFCREAL', Math.max(0, Number(floorArea) || 0)]);
    w.upsertPset(proj, PSET_PROJECT, out);
    return { id: proj, ids: [proj] };
  });
}

export function setElementFactor(guid, factorId) {
  return op((w) => {
    let id = w.byGuid(guid);
    if (!id) for (const c of tryIds(w.api, w.mid, 'IFCELEMENT', true)) if (w.guidOf(c) === guid) { id = c; break; }
    if (!id) refuse('carbon.err.none');
    w.upsertPset(id, PSET_ELEMENT, [['FactorId', 'IFCLABEL', String(factorId || '')]]);
    return { id, ids: [id] };
  });
}
