/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mass-options.js: massing OPTION SETS in the same model (0.10 BK.44, session bk-r3-stages-10). No DOM:
 * tools/bimcraft-test/mass-options-test.mjs (node bin/test-bimcraft.mjs --massoptions) runs it in Node on a real IFC model.
 *
 * An option is a building mass, the thing model-site-mass.js readMasses already reads (an IfcBuildingElementProxy whose shape is
 * the footprint extruded to the roof, with pset CadCraft_SiteMass, as CivilCraft and ModelCraft write it through lib/massing).
 * The option fields live in that same pset: OptionSet (the set's name), Option (the option's label), Current (yes / no), and,
 * when the sender measured them, Volume (m3), FloorAreas ("a;b;c" m2, lowest floor first), Simplified, Source.
 * A file with masses and none of these fields reads as ONE set (DEFAULT_SET), every mass its own option, none current.
 *
 *   readOptionSets(w) -> [{ set, options: [{ guid, id, name, option, current, use, floors, floorHeight (mm), height (mm),
 *       footprint_m2, gross_m2, volume_m3, envelope_m2 (outer wall area = the outline's length x the height), floorAreas_m2 [..],
 *       simplified, source, storeys [storey ids of its building], spaces (how many floor spaces it has), pts (world mm, anticlockwise) }] }]
 *       Sets in the order their first option stands in the file; when a set says more than one is current the first keeps it.
 *   ops for IfcEditor.modelChange, ONE undo step each:
 *     addMassOption({ set, name, pts (world mm), floors, floorHeight (mm), use, current, floorAreas_m2?, volume_m3?, simplified?, source? })
 *     addMassOptions([spec...])   several in one step; specOf(option, set) turns a read option into a spec (options of another file)
 *         the mass stands on the model's lowest level, inside the model's building. The first option of a set is the current one.
 *     setCurrentOption(guid)      exactly one current per set
 *     renameOption(guid, { name, set })
 *     removeMassOption(guid)      the mass and its floor spaces; when it was the current one the set's first other option takes over
 *     developOption(guid, { typeKey })   levels up to its floor count, walls round the footprint, a floor slab on each (program-mass.js
 *         buildOptionIn), then the mass and its floor spaces go. The other options stay as they are.
 *   optionFootprints(w, t?) -> [{ id (GlobalId), label, poly (the site's axes) }]   the CURRENT option of every set, for the site check
 *       (model-site-constraints.js siteProblems extra: boundary, building lines, servitudes; lib/sitelines, warnings only).
 *       Only current options: an option kept for comparison is not "the building", and three options over one servitude would be
 *       three warnings about nothing that is proposed.
 *
 * FLOOR SPACES (the row's "as spaces and proxy elements"): the CURRENT option of a set has one IfcSpace per floor (ObjectType
 * "MassingFloor", no shape of its own, Qto_SpaceBaseQuantities GrossFloorArea + Height, pset CadCraft_MassFloor Mass + Floor),
 * so everything that reads spaces sees the floor areas of the option in force and of no other. Where the storeys go: a floor's
 * space is part of the storey with its number in the mass's building, counted from the lowest (floor 3 on the third level);
 * a floor above the last level the model has is part of the top level (the space's own placement still stands at the floor's
 * height). Keeping an option never adds levels: several options with other floor counts would fight over them. Developing does.
 * BimCraft's rooms and areas are told apart by their own psets (CadCraft_Room, CadCraft_Area), so floor spaces are neither.
 * In a file ModelCraft or CivilCraft wrote, every option arrives with its floor spaces; they stay until one is made current.
 */
import { op } from './model-ops.js';
import { readLevels } from './model-levels.js';
import { readMasses, MASS_PSET } from './model-site-mass.js';
import { buildOptionIn } from './program-mass.js';
import { planToSite } from './model-site.js';
import { ids, val, inv4, apply4 } from './ifc-util.js';
import { scaleT, round } from './model-write.js';
import { ringArea as area } from './geom2d.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const DEFAULT_SET = 'Massing';   // i18n-ignore: IFC file data (a set's name when the file gives none)
export const FLOOR_PSET = 'CadCraft_MassFloor';
export const LIMITS = { options: 200, name: 80, floors: 200 };
const refuse = (key, fill) => { throw Object.assign(new Error(key), { key, fill }); };
const clean = (s, n = LIMITS.name) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
const yes = (v) => v === true || /^(\.?T\.?|true|1)$/i.test(String(v ?? ''));
const perimeter = (P) => P.reduce((s, a, i) => { const b = P[(i + 1) % P.length]; return s + Math.hypot(b[0] - a[0], b[1] - a[1]); }, 0);
const r2 = (v) => Math.round(v * 100) / 100;

function floorSpaces(w) {
  const by = new Map();
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCSPACE'); } catch (e) { list = []; }
  for (const id of list) {
    const ps = w.readPset(id, FLOOR_PSET);
    if (!ps) continue;
    const k = String(ps.Mass ?? '');
    if (!by.has(k)) by.set(k, []);
    by.get(k).push(id);
  }
  return by;
}

export function readOptionSets(w) {
  const sets = new Map(), spaces = floorSpaces(w);
  for (const m of readMasses(w)) {
    const ps = w.readPset(m.id, MASS_PSET) || {};
    const set = clean(ps.OptionSet) || DEFAULT_SET;
    const height = Number(ps.Height) > 0 ? Number(ps.Height) * w.unitMm : m.floors * m.floorHeight;
    const footprint = m.footprint > 0 ? m.footprint : Math.abs(area(m.pts)) / 1e6;
    const floorAreas = String(ps.FloorAreas ?? '').split(';').filter((v) => v.trim() !== '').map(Number).filter((v) => Number.isFinite(v) && v >= 0);   // 0.10 FX (stages-10 found): an absent FloorAreas is no areas, not [0] (a one-floor option had GrossFloorArea 0)
    const o = {
      guid: m.guid, id: m.id, name: m.name, option: clean(ps.Option) || m.name, current: yes(ps.Current), use: m.use, floors: m.floors, floorHeight: m.floorHeight, height,
      footprint_m2: r2(footprint), gross_m2: r2(m.gfa > 0 ? m.gfa : footprint * m.floors), volume_m3: r2(Number(ps.Volume) > 0 ? Number(ps.Volume) : (footprint * height) / 1000),
      envelope_m2: r2((perimeter(m.pts) * height) / 1e6), floorAreas_m2: floorAreas.length === m.floors ? floorAreas : [], simplified: yes(ps.Simplified), source: clean(ps.Source, 40),
      massId: m.massId, building: m.building, storeys: m.storeys, spaces: (spaces.get(m.massId) || []).length, pts: m.pts,
    };
    if (!sets.has(set)) sets.set(set, []);
    sets.get(set).push(o);
  }
  return [...sets].map(([set, options]) => {
    let seen = false;
    for (const o of options) { if (o.current && seen) o.current = false; else if (o.current) seen = true; }
    return { set, options };
  });
}
const findOption = (w, guid) => { for (const s of readOptionSets(w)) { const o = s.options.find((x) => x.guid === guid); if (o) return { set: s, o }; } return refuse('model.err.mass.none'); };

// ---- floor spaces ----
function partOf(w, parent, child) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (r.RelatingObject?.value === parent) { const l = w.touch(rid); l.RelatedObjects = [...(l.RelatedObjects || []), w.H(child)]; w.write(l); return; }
  }
  w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(parent), [w.H(child)]);
}
function dropSpaces(w, massId) {
  const list = floorSpaces(w).get(massId) || [];
  if (list.length) w.dropProduct(list);
  return list.length;
}
function writeSpaces(w, o) {
  dropSpaces(w, o.massId);
  const all = readLevels(w), mine = all.filter((l) => o.storeys.includes(l.id)), levels = mine.length ? mine : all;
  if (!levels.length) return 0;
  const base = levels[0].elevation, fh = o.height / o.floors;
  for (let k = 0; k < o.floors; k++) {
    const lv = levels[Math.min(k, levels.length - 1)];
    const st = w.api.GetLine(w.mid, lv.id, false);
    const lp = w.placeAt(st.ObjectPlacement.value, 0, 0, base + k * fh - lv.elevation, 0);
    const a = o.floorAreas_m2.length ? o.floorAreas_m2[k] : o.footprint_m2;
    const id = w.make('IFCSPACE', w.guid(), w.ownerHistory(), w.L(o.option + ' floor ' + (k + 1)), null, w.L('MassingFloor'), w.H(lp), null, w.L(o.option), 'ELEMENT', ...(w.v4 ? ['SPACE', null] : ['INTERNAL', null]));   // i18n-ignore: IFC file data
    partOf(w, lv.id, id);
    w.upsertQto(id, 'Qto_SpaceBaseQuantities', [['GrossFloorArea', 'area', a * 1e6], ['Height', 'length', fh]]);
    w.upsertPset(id, FLOOR_PSET, [['Mass', 'IFCLABEL', o.massId], ['Floor', 'IFCINTEGER', k + 1]]);
  }
  return o.floors;
}
const setFlag = (w, o, on) => w.upsertPset(o.id, MASS_PSET, [['Current', 'IFCBOOLEAN', !!on]]);
/** One option of the set in force: its flag, its floor spaces; the others lose both. */
function makeCurrent(w, guid) {
  const { set } = findOption(w, guid);
  for (const o of set.options) {
    const on = o.guid === guid;
    if (o.current !== on || w.readPset(o.id, MASS_PSET)?.Current === undefined) setFlag(w, o, on);
    if (on) { if (o.spaces !== o.floors) writeSpaces(w, o); } else if (o.spaces) dropSpaces(w, o.massId);
  }
}

// ---- ops ----
function cleanSpec({ set = '', name = '', pts = [], floors = 1, floorHeight = 3200, use = '', current = false, floorAreas_m2 = null, volume_m3 = 0, simplified = false, source = '' } = {}) {
  const P0 = (Array.isArray(pts) ? pts : []).map((p) => [Number(p?.[0]), Number(p?.[1])]).filter((p) => p.every(Number.isFinite));
  const n = Math.round(Number(floors)), fh = Number(floorHeight);
  if (P0.length < 3 || Math.abs(area(P0)) < 1e4 || !(n >= 1) || n > LIMITS.floors || !(fh >= 1000) || fh > 20000) refuse('model.err.mass.shape');
  const fa = Array.isArray(floorAreas_m2) && floorAreas_m2.length === n && floorAreas_m2.every((a) => Number.isFinite(a) && a >= 0) ? floorAreas_m2.map(Number) : null;
  return { set, name, P: area(P0) < 0 ? P0.slice().reverse() : P0, n, fh, use, current: !!current, fa, volume: Number(volume_m3) > 0 ? Number(volume_m3) : 0, simplified: !!simplified, source: clean(source, 40) || 'BimCraft' };
}
function addIn(w, { set, name, P, n, fh, use, current, fa, volume, simplified, source }) {
  const bid = ids(w.api, w.mid, 'IFCBUILDING')[0];
  if (bid === undefined) refuse('model.err.site.nobuilding');
  const sets = readOptionSets(w);
  if (sets.reduce((s, x) => s + x.options.length, 0) >= LIMITS.options) refuse('model.err.massopt.many', { n: LIMITS.options });
  const setName = clean(set) || DEFAULT_SET, mine = sets.find((x) => x.set === setName);
  const label = clean(name) || 'Option ' + ((mine?.options.length || 0) + 1);   // i18n-ignore: IFC file data
  const bl = w.api.GetLine(w.mid, bid, false);
  const bw = scaleT(w.api.GetWorldTransformMatrix(w.mid, bl.ObjectPlacement.value), w.unitMm), inv = inv4(bw);
  const levels = readLevels(w), z0 = levels.length ? levels[0].elevation : bw[14];
  const local = P.map((p) => { const q = apply4(inv, p[0], p[1], z0); return [q[0], q[1], q[2]]; });
  const H = n * fh, fp = Math.abs(area(P)) / 1e6;
  const rep = w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(local.map((q) => [q[0], q[1]])), 0, H)]);
  const pds = w.make('IFCPRODUCTDEFINITIONSHAPE', null, null, [w.H(rep)]);
  const lp = w.placeAt(bl.ObjectPlacement.value, 0, 0, local[0][2], 0);
  const g = w.guid(), massId = 'opt-' + String(val(g)).slice(0, 8);
  const id = w.make('IFCBUILDINGELEMENTPROXY', g, w.ownerHistory(), w.L(label), null, w.L('Building mass'), w.H(lp), w.H(pds), null, w.v4 ? 'NOTDEFINED' : 'ELEMENT');   // i18n-ignore: IFC file data (ObjectType; lib/massing writes the same words as the Description)
  w.contain(id, bid);
  const first = !mine || !mine.options.some((x) => x.current);
  w.upsertPset(id, MASS_PSET, [['MassId', 'IFCLABEL', massId], ['Use', 'IFCLABEL', clean(use, 40)], ['Floors', 'IFCINTEGER', n], ['FloorHeight', 'IFCLENGTHMEASURE', round(w.u(fh))],
    ['Height', 'IFCLENGTHMEASURE', round(w.u(H))], ['GroundFloorLevel', 'IFCLENGTHMEASURE', round(w.u(z0))], ['FootprintArea', 'IFCAREAMEASURE', round(fp, 4)],
    ['GrossFloorArea', 'IFCAREAMEASURE', round(fa ? fa.reduce((a, b) => a + b, 0) : fp * n, 4)],
    ['BaseOnSlope', 'IFCLABEL', ''], ['Ground', 'IFCLABEL', ''], ['Parcel', 'IFCLABEL', ''], ['Volume', 'IFCVOLUMEMEASURE', round(volume || (fp * H) / 1000, 4)],
    ...(fa ? [['FloorAreas', 'IFCTEXT', fa.map((a) => String(round(a, 4))).join(';')]] : []), ...(simplified ? [['Simplified', 'IFCBOOLEAN', true]] : []),
    ['OptionSet', 'IFCLABEL', setName], ['Option', 'IFCLABEL', label], ['Current', 'IFCBOOLEAN', false], ['Source', 'IFCLABEL', source]]);
  const guid = val(g);
  if (current || first) makeCurrent(w, guid);
  return { id, guid };
}
export function addMassOption(spec = {}) {
  const c = cleanSpec(spec);
  return op((w) => { const r = addIn(w, c); return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]), guid: r.guid }; });
}
/** Several at once (options read from another file), ONE undo step. */
export function addMassOptions(list = []) {
  const cs = list.slice(0, LIMITS.options).map(cleanSpec);
  if (!cs.length) refuse('model.err.mass.none');
  return op((w) => { const rs = cs.map((c) => addIn(w, c)); return { id: rs[0].id, ids: rs.map((r) => r.id), made: new Map(rs.map((r) => [r.guid, r.id])), guids: rs.map((r) => r.guid) }; });
}
/** An option as read (readOptionSets) -> the spec addMassOption takes: how options of another file come into this model. */
export const specOf = (o, set) => ({ set, name: o.option, pts: o.pts, floors: o.floors, floorHeight: o.height / o.floors, use: o.use, floorAreas_m2: o.floorAreas_m2.length ? o.floorAreas_m2 : null, volume_m3: o.volume_m3, simplified: o.simplified, source: o.source });

export function setCurrentOption(guid) {
  return op((w) => { const { o } = findOption(w, guid); makeCurrent(w, guid); return { id: o.id, ids: [o.id], made: new Map() }; });
}

export function renameOption(guid, { name, set } = {}) {
  return op((w) => {
    const { o, set: was } = findOption(w, guid);
    const rows = [];
    if (name !== undefined) {
      const label = clean(name);
      if (!label) refuse('model.err.massopt.name');
      rows.push(['Option', 'IFCLABEL', label]);
      const l = w.touch(o.id); l.Name = w.L(label); w.write(l);
    }
    const to = set !== undefined ? clean(set) || DEFAULT_SET : was.set;
    if (to !== was.set) {
      // leaving a set: it is no longer that set's current option, and it is the new set's only if that set has none
      const others = readOptionSets(w).find((x) => x.set === to);
      rows.push(['OptionSet', 'IFCLABEL', to], ['Current', 'IFCBOOLEAN', false]);
      w.upsertPset(o.id, MASS_PSET, rows);
      if (o.current) { dropSpaces(w, o.massId); const next = was.options.find((x) => x.guid !== guid); if (next) makeCurrent(w, next.guid); }
      if (!others || !others.options.some((x) => x.current)) makeCurrent(w, guid);
    } else if (rows.length) w.upsertPset(o.id, MASS_PSET, rows);
    return { id: o.id, ids: [o.id], made: new Map() };
  });
}

export function removeMassOption(guid) {
  return op((w) => {
    const { o, set } = findOption(w, guid);
    dropSpaces(w, o.massId);
    w.dropProduct([o.id]);
    const next = o.current ? set.options.find((x) => x.guid !== guid) : null;
    if (next) makeCurrent(w, next.guid);
    return { id: null, ids: [], made: new Map() };
  });
}

export function developOption(guid, { typeKey = 'ext-2x6' } = {}) {
  return op((w) => {
    const { o } = findOption(w, guid);
    const r = buildOptionIn(w, { pts: o.pts, floors: o.floors, floorHeight: o.height / o.floors }, { typeKey });
    dropSpaces(w, o.massId);
    w.dropProduct([o.id]);
    return r;
  });
}

/** The current option of every set as a footprint in the site's axes, for the site check. label = the words the warning uses. */
export function optionFootprints(w, label = (o) => o.option) {
  const levels = readLevels(w);
  if (!levels.length) return [];
  const L = levels[0].id, inv = inv4(w.storeyWorld(L)), out = [];
  for (const s of readOptionSets(w)) for (const o of s.options) {
    if (!o.current) continue;
    const plan = o.pts.map((p) => { const q = apply4(inv, p[0], p[1], 0); return [q[0], q[1]]; });
    try { out.push({ id: o.guid, label: label(o, s), poly: planToSite(w, L, plan) }); } catch (e) { /* no site: nothing to check against */ }
  }
  return out;
}
