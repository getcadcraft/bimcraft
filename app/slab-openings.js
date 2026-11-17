/* SPDX-License-Identifier: Apache-2.0 */
/**
 * slab-openings.js — shafts and vertical openings: one sketch that cuts floors, ceilings and roofs (0.10, session bk-tools-a-10).
 * No DOM: bin/test-bimcraft.mjs --toolsa runs it in Node. Plan millimetres in the sketch level's own axes.
 *
 * What a person makes is ONE thing, kept as an IfcGroup (ObjectType CadCraft.Shaft or CadCraft.VerticalOpening) with the property
 * set CadCraft_Shaft: Kind (shaft | vertical), Storey (the level it was sketched on), Points "x,y;…", and for a shaft BaseLevel,
 * TopLevel, BaseOffset, TopOffset; for a vertical opening Host (the GlobalId of the one floor, ceiling or roof it cuts).
 * What cuts is the schema's own form: an IfcOpeningElement for every element cut, IfcRelVoidsElement to that element (a roof is
 * cut face by face: one opening for each of its face slabs the sketch lies over), each assigned to the group
 * (IfcRelAssignsToGroup) and carrying CadCraft_SlabOpening (Shaft = the group's GlobalId, Points, Area = the plan area taken out
 * of that element, ShapeKey). Any IFC reader cuts the holes; ours finds the one thing again from the group.
 *
 * The openings are never edited by hand: syncOpenings(w) makes them again from the groups after every change (spaces-sync.js), so
 * a shaft cuts a floor added later, lets go of one that was deleted, and follows a floor whose thickness changed. The quantities
 * follow in the same step: the element's net area is its gross area less its own holes less the part of each sketch that lies on
 * it (lib/quantities rule `floor`: gross, deductions, net). A sketch that hangs over the edge deducts only the part on the element.
 *
 *   hostsOf(w) → [{ id, guid, kind: floor | ceiling | roof | drawnfloor, storey, z0, z1 (model mm), outline { poly, holes } (its own
 *                   level's plan), lp (the placement an opening hangs from), targets: [{ id, poly, cos }] }]
 *   readShafts(w) → [{ id, guid, kind, storey (GlobalId), points, base, top, baseOffset, topOffset, host, openings: [{ id, host, area }] }]
 *   addShaft(w, spec) · changeShaft(w, guid, changes) · removeShafts(w, guids)        (inside an op; syncOpenings runs after)
 *   shaftRange(shaft, levels) → [z0, z1] | null · cutsOf(w, shaft, hosts?) → the hosts it cuts now
 *   syncOpenings(w) → { made, dropped, hosts }
 *   deductionsOf(w, hostId) → [mm²…]   the plan areas these openings take out of one element (the schedules add them to its holes)
 */
import { ids, val, inv4, mul4, apply4, isDeleted } from './ifc-util.js';
import { round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readDerived, storeyLoops } from './model-slabs.js';
import { readDrawnFloors } from './model-floors.js';
import { loopAt } from './model-rooms.js';
import { edgeKinds, roofGeometry } from './res-roof.js';
import { overlapArea, absArea, polyPerimeter, polyProblem, zOverlap, polyArea } from './spaces-geom.js';
import { outlineArea } from './quantities/rules.js';
import { t as tr } from './i18n.js';

export const SHAFT_PSET = 'CadCraft_Shaft', SLABOPEN_PSET = 'CadCraft_SlabOpening';
export const SHAFT_TYPE = 'CadCraft.Shaft', VERTICAL_TYPE = 'CadCraft.VerticalOpening';
const D2R = Math.PI / 180, PROUD = 10;
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const safe = (w, cls) => { try { return ids(w.api, w.mid, cls); } catch (e) { return []; } };
const ptsText = (p) => p.map((q) => round(q[0], 3) + ',' + round(q[1], 3)).join(';');
const ptsOf = (s) => String(s || '').split(';').map((x) => x.split(',').map(Number)).filter((q) => q.length === 2 && q.every(Number.isFinite));
const ccw = (p) => (polyArea(p) < 0 ? p.slice().reverse() : p.slice());
const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36) + s.length.toString(36); };
const key = (...parts) => hash(JSON.stringify(parts, (k, v) => (typeof v === 'number' ? Math.round(v * 100) / 100 : v)));

// ---------------------------------------------------------------------------------------------------------- what can be cut
export function hostsOf(w) {
  const levels = readLevels(w), lv = new Map(levels.map((l) => [l.id, l])), D = readDerived(w), out = [];
  const loops = new Map(), L = (st) => { if (!loops.has(st)) loops.set(st, storeyLoops(w, st)); return loops.get(st); };
  const lpOf = (id) => w.api.GetLine(w.mid, id, false)?.ObjectPlacement?.value ?? null;
  for (const f of D.floors) {
    const l = lv.get(f.storey); if (!l) continue;
    const loop = loopAt(f.mode === 'building' ? L(f.storey).outlines : L(f.storey).rooms, f.seed); if (!loop) continue;
    out.push({ id: f.id, guid: f.guid, kind: 'floor', storey: f.storey, z0: l.elevation + f.offset - f.thickness, z1: l.elevation + f.offset, thickness: f.thickness, outline: { poly: loop.poly, holes: loop.holes || [] }, lp: lpOf(f.id),
      zRel: [f.offset - f.thickness, f.offset], targets: [{ id: f.id, poly: null, cos: 1 }] });
  }
  for (const c of D.ceilings) {
    const l = lv.get(c.storey); if (!l) continue;
    const loop = loopAt(c.mode === 'building' ? L(c.storey).outlines : L(c.storey).rooms, c.seed); if (!loop) continue;
    out.push({ id: c.id, guid: c.guid, kind: 'ceiling', storey: c.storey, z0: l.elevation + c.height, z1: l.elevation + c.height + c.thickness, thickness: c.thickness, outline: { poly: loop.poly, holes: loop.holes || [] }, lp: lpOf(c.id),
      zRel: [c.height, c.height + c.thickness], targets: [{ id: c.id, poly: null, cos: 1 }] });
  }
  for (const f of readDrawnFloors(w)) {
    const l = lv.get(f.storey); if (!l) continue;
    out.push({ id: f.id, guid: f.guid, kind: 'drawnfloor', storey: f.storey, z0: l.elevation + f.offset - f.thickness, z1: l.elevation + f.offset, thickness: f.thickness, outline: { poly: f.points, holes: f.openings.map((o) => o.points) }, lp: lpOf(f.id),
      zRel: [f.offset - f.thickness, f.offset], targets: [{ id: f.id, poly: null, cos: 1 }] });
  }
  for (const r of D.roofs) {
    const wl = levels.find((l) => l.guid === r.walls), host = lv.get(r.storey);
    if (!wl || !host) continue;
    const SL = L(wl.id), o = loopAt(SL.outlines, r.seed);
    if (!o) continue;
    const top = SL.walls.reduce((m, x) => Math.max(m, x.baseOffset + x.height), 0) || wl.height;
    let plan = null;
    try { plan = roofGeometry(o.poly, edgeKinds(o.poly, SL.walls, r), { thickness: r.thickness, plate: Number.isFinite(r.plate) && r.plate > 0 ? r.plate : top, fascia: r.fascia, soffit: r.soffit !== false }); } catch (e) { plan = null; }
    if (!plan || plan.error || !plan.faces?.length) continue;
    // its faces are its first parts, in order (res-roof.js writeRoofParts); each face's plan outline and pitch are known
    const faces = plan.faces.map((f, i) => ({ id: r.parts[i], poly: f.poly, cos: Math.cos(f.pitch * D2R), start: f.start })).filter((f) => f.id);
    const xs = plan.eave.map((p) => p[0]), ys = plan.eave.map((p) => p[1]), span = Math.hypot(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
    const low = Math.min(...plan.faces.map((f) => f.start)), steep = Math.max(...plan.faces.map((f) => Math.tan(f.pitch * D2R)));
    const zLow = low - PROUD, zHigh = low + span / 2 * steep + r.thickness * 3 + PROUD;   // in the walls' level's heights
    out.push({ id: r.id, guid: r.guid, kind: 'roof', storey: wl.id, hostStorey: r.storey, z0: wl.elevation + zLow, z1: wl.elevation + zHigh, thickness: r.thickness, outline: { poly: plan.eave, holes: [] }, lp: lpOf(r.id),
      frame: r.storey, zRel: [wl.elevation + zLow - host.elevation, wl.elevation + zHigh - host.elevation], targets: faces });
  }
  return out;
}

// ------------------------------------------------------------------------------------------------------------------ reading
export function readShafts(w) {
  const groups = safe(w, 'IFCGROUP');
  if (!groups.length) return [];
  const out = [], members = new Map();
  for (const id of groups) {
    const ps = w.readPset(id, SHAFT_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    out.push({ id, guid: val(l.GlobalId), name: val(l.Name) || '', kind: ps.Kind === 'vertical' ? 'vertical' : 'shaft', storey: ps.Storey || '', points: ptsOf(ps.Points).map((q) => [q[0] * w.unitMm, q[1] * w.unitMm]),
      base: ps.BaseLevel || '', top: ps.TopLevel || '', baseOffset: Number(ps.BaseOffset || 0) * w.unitMm, topOffset: Number(ps.TopOffset || 0) * w.unitMm, host: ps.Host || '', openings: [], rel: null });
    members.set(id, out[out.length - 1]);
  }
  if (!out.length) return out;
  const H = w.hostIndex();
  for (const rid of safe(w, 'IFCRELASSIGNSTOGROUP')) {
    const r = w.api.GetLine(w.mid, rid, false), g = members.get(r.RelatingGroup?.value);
    if (!g) continue;
    g.rel = rid;
    for (const h of r.RelatedObjects || []) {
      const ps = w.readPset(h.value, SLABOPEN_PSET);
      if (ps) g.openings.push({ id: h.value, host: H.voidHost.get(h.value) ?? null, area: Number(ps.Area || 0) * 1e6, key: ps.ShapeKey || '' });
    }
  }
  return out;
}
/** The heights (model mm) a shaft runs between; null when its levels are gone. A vertical opening has no range: it has its host. */
export function shaftRange(s, levels) {
  const b = levels.find((l) => l.guid === s.base), t = levels.find((l) => l.guid === s.top);
  if (!b || !t) return null;
  const z0 = b.elevation + s.baseOffset, z1 = t.elevation + s.topOffset;
  return z1 > z0 ? [z0, z1] : [z1, z0];
}
/** The sketch in another level's plan axes (levels stacked straight above each other: unchanged). */
function pointsIn(w, points, fromStorey, toStorey) {
  if (fromStorey === toStorey || !fromStorey || !toStorey) return points;
  const M = mul4(inv4(w.storeyWorld(toStorey)), w.storeyWorld(fromStorey));
  return points.map((q) => { const p = apply4(M, q[0], q[1], 0); return [p[0], p[1]]; });
}
/** The elements a shaft or vertical opening cuts now: [{ host, points (in the host's plan), parts: [{ id, area }] }]. */
export function cutsOf(w, s, hosts = hostsOf(w), levels = readLevels(w)) {
  const sk = levels.find((l) => l.guid === s.storey);
  if (!sk || s.points.length < 3) return [];
  const range = s.kind === 'shaft' ? shaftRange(s, levels) : null;
  const out = [];
  for (const h of hosts) {
    if (s.kind === 'vertical' ? h.guid !== s.host : !(range && zOverlap(h.z0, h.z1, range[0], range[1]))) continue;
    const pts = pointsIn(w, s.points, sk.id, h.storey);
    const parts = h.targets.map((tg) => ({ id: tg.id, area: overlapArea(tg.poly ? tg.poly : h.outline, pts), cos: tg.cos })).filter((p) => p.area > 1);
    if (parts.length) out.push({ host: h, points: pts, parts });
  }
  return out;
}

// ------------------------------------------------------------------------------------------------------------------ writing
function checkPoints(points) {
  const pr = polyProblem(points);
  if (pr) refuse('spaces.err.outline');
  return ccw(points.map((q) => [Number(q[0]), Number(q[1])]));
}
/**
 * spec: { kind 'shaft' | 'vertical', storey (GlobalId of the sketch level), points, base, top (level GlobalIds), baseOffset, topOffset,
 * host (GlobalId, vertical), name, guid } → { id, guid }
 */
export function addShaft(w, spec) {
  const kind = spec.kind === 'vertical' ? 'vertical' : 'shaft';
  const pts = checkPoints(spec.points);
  const levels = readLevels(w);
  if (!levels.some((l) => l.guid === spec.storey)) refuse('model.err.nolevel');
  if (kind === 'shaft' && (!levels.some((l) => l.guid === spec.base) || !levels.some((l) => l.guid === spec.top))) refuse('model.err.nolevel');
  if (kind === 'vertical' && !spec.host) refuse('spaces.err.nohost');
  const g = spec.guid || val(w.guid());
  const name = String(spec.name || '').trim() || tr(kind === 'shaft' ? 'spaces.shaft' : 'spaces.vopening');
  const id = w.make('IFCGROUP', g, w.ownerHistory(), w.L(name), null, w.L(kind === 'shaft' ? SHAFT_TYPE : VERTICAL_TYPE));
  const LMm = (k, mm) => [k, 'IFCLENGTHMEASURE', round(w.u(mm))];
  w.upsertPset(id, SHAFT_PSET, [['Kind', 'IFCLABEL', kind], ['Storey', 'IFCIDENTIFIER', spec.storey], ['Points', 'IFCTEXT', ptsText(pts.map((q) => [w.u(q[0]), w.u(q[1])]))],
    ...(kind === 'shaft' ? [['BaseLevel', 'IFCIDENTIFIER', spec.base], ['TopLevel', 'IFCIDENTIFIER', spec.top], LMm('BaseOffset', Number(spec.baseOffset) || 0), LMm('TopOffset', Number(spec.topOffset) || 0)] : [['Host', 'IFCIDENTIFIER', spec.host]])]);
  return { id, guid: g };
}
/** changes: { points, base, top, baseOffset, topOffset, name } */
export function changeShaft(w, guid, ch = {}) {
  const s = readShafts(w).find((x) => x.guid === guid);
  if (!s) refuse('model.err.gone');
  const rows = [], LMm = (k, mm) => [k, 'IFCLENGTHMEASURE', round(w.u(mm))];
  if (ch.points) rows.push(['Points', 'IFCTEXT', ptsText(checkPoints(ch.points).map((q) => [w.u(q[0]), w.u(q[1])]))]);
  const levels = readLevels(w);
  for (const [k, n] of [['base', 'BaseLevel'], ['top', 'TopLevel']]) if (ch[k]) { if (!levels.some((l) => l.guid === ch[k])) refuse('model.err.nolevel'); rows.push([n, 'IFCIDENTIFIER', ch[k]]); }
  if (Number.isFinite(ch.baseOffset)) rows.push(LMm('BaseOffset', ch.baseOffset));
  if (Number.isFinite(ch.topOffset)) rows.push(LMm('TopOffset', ch.topOffset));
  if (rows.length) w.upsertPset(s.id, SHAFT_PSET, rows);
  if (ch.name !== undefined && String(ch.name).trim()) { const l = w.touch(s.id); l.Name = w.L(String(ch.name).trim()); w.write(l); }
  return s;
}
/** The group, its relation and every opening it made: one thing goes as one thing. */
function dropGroup(w, s) {
  w.dropProduct([...s.openings.map((o) => o.id), s.id]);   // the relations that named them go with them (ModelWriter.dropProduct)
}
export function removeShafts(w, guids) {
  const list = readShafts(w).filter((s) => guids.includes(s.guid));
  if (!list.length) return 0;
  // what they cut gets its net quantities back (less whatever other shafts still take out)
  const hosts = hostsOf(w), byId = new Map();
  for (const h of hosts) for (const tg of h.targets) byId.set(tg.id, h);
  const freed = new Set(list.flatMap((s) => s.openings.map((o) => byId.get(o.host)).filter(Boolean)));
  for (const s of list) dropGroup(w, s);
  syncOpenings(w, { hosts, freed });
  return list.length;
}

function makeOpening(w, s, cut, part, k) {
  const h = cut.host;
  const lp = w.make('IFCLOCALPLACEMENT', h.lp ? w.H(h.lp) : null, w.H(w.axis3(0, 0, 0, 0)));
  const oid = w.make('IFCOPENINGELEMENT', w.guid(), w.ownerHistory(), w.L(s.name || tr(s.kind === 'shaft' ? 'spaces.shaft' : 'spaces.vopening')), null, w.L(s.kind === 'shaft' ? SHAFT_TYPE : VERTICAL_TYPE), w.H(lp), null, null, ...(w.v4 ? ['OPENING'] : []));
  // the sketch swept straight up through the whole element, a little proud of both faces
  const inFrame = h.frame && h.frame !== h.storey ? pointsIn(w, cut.points, h.storey, h.frame) : cut.points;   // a roof hangs from the level above its walls
  w.setShape(oid, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(ccw(inFrame)), h.zRel[0] - PROUD, h.zRel[1] - h.zRel[0] + 2 * PROUD)])]);
  w.make('IFCRELVOIDSELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(part.id), w.H(oid));
  w.upsertPset(oid, SLABOPEN_PSET, [['Shaft', 'IFCIDENTIFIER', s.guid], ['Points', 'IFCTEXT', ptsText(cut.points.map((q) => [w.u(q[0]), w.u(q[1])]))], ['Area', 'IFCAREAMEASURE', round(part.area / 1e6, 6)], ['ShapeKey', 'IFCIDENTIFIER', k]]);
  return oid;
}

/** Net quantities of an element these openings cut: gross less its own holes less the parts of the sketches that lie on it. */
function writeNet(w, h, deducted) {
  if (h.kind === 'roof') {
    const d = w.defNamed(h.id, 'Qto_RoofBaseQuantities');
    let gross = null;
    for (const q of d?.line.Quantities || []) { const l = w.api.GetLine(w.mid, q.value, false); if (val(l?.Name) === 'GrossArea') gross = Number(val(l.AreaValue)) * 1e6; }
    if (gross !== null) w.upsertQto(h.id, 'Qto_RoofBaseQuantities', [['NetArea', 'area', Math.max(0, gross - deducted.reduce((a, b) => a + b, 0))]]);
    return;
  }
  const A = absArea(h.outline.poly), m = outlineArea(A, [...h.outline.holes.map(absArea), ...deducted]);
  if (h.kind === 'ceiling') w.upsertQto(h.id, 'Qto_CoveringBaseQuantities', [['NetArea', 'area', m.net]]);
  else w.upsertQto(h.id, 'Qto_SlabBaseQuantities', [['NetArea', 'area', m.net], ['NetVolume', 'volume', m.net * h.thickness]]);
}

/** Every opening these groups should have, and no other. Runs after each change; nothing to do in a file with no shafts. */
export function syncOpenings(w, { hosts = null, freed = null } = {}) {
  const R = { made: 0, dropped: 0, hosts: 0 };
  const shafts = readShafts(w);
  if (!shafts.length && !freed?.size) return R;
  hosts ||= hostsOf(w);
  const levels = readLevels(w), byId = new Map();
  for (const h of hosts) for (const tg of h.targets) byId.set(tg.id, h);
  const deducted = new Map(), touched = new Set(freed || []);   // host → [areas]
  for (const s of shafts) {
    const cuts = cutsOf(w, s, hosts, levels);
    if (s.kind === 'vertical' && !hosts.some((h) => h.guid === s.host)) { dropGroup(w, s); R.dropped += s.openings.length + 1; continue; }   // what it cut is gone: so is the cut
    const want = new Map();   // part id → { cut, part, key }
    for (const c of cuts) for (const p of c.parts) want.set(p.id, { cut: c, part: p, key: key(c.points, c.host.zRel, p.area) });
    const keep = [], gone = [];
    for (const o of s.openings) { const x = want.get(o.host); if (x && x.key === o.key && !x.have) { x.have = true; keep.push(o.id); } else { gone.push(o.id); if (byId.get(o.host)) touched.add(byId.get(o.host)); } }
    if (gone.length) { w.dropProduct(gone); R.dropped += gone.length; }
    const fresh = [];
    for (const x of want.values()) { if (x.have) continue; fresh.push(makeOpening(w, s, x.cut, x.part, x.key)); touched.add(x.cut.host); R.made++; }
    for (const c of cuts) { if (!deducted.has(c.host)) deducted.set(c.host, []); deducted.get(c.host).push(...c.parts.map((p) => p.area / p.cos)); }
    if (gone.length || fresh.length || !s.rel) {
      const all = [...keep, ...fresh];
      const rel = s.rel && !isDeleted(w.api, w.mid, s.rel) ? s.rel : null;
      if (rel && all.length) { const r = w.touch(rel); r.RelatedObjects = all.map((x) => w.H(x)); w.write(r); }
      else if (rel && !all.length) w.dropProduct([rel]);
      else if (all.length) w.make('IFCRELASSIGNSTOGROUP', w.guid(), w.ownerHistory(), null, null, all.map((x) => w.H(x)), null, w.H(s.id));
    }
  }
  // the net quantities: of everything cut now (its own writer may just have put the uncut numbers back) and of what was let go
  for (const h of new Set([...deducted.keys(), ...touched])) { writeNet(w, h, deducted.get(h) || []); R.hosts++; }
  return R;
}

/** For the schedules: the plan areas the shafts and vertical openings take out of one element (by express id). */
export function deductionsOf(w, hostId) {
  const out = [];
  const H = w.hostIndex();
  for (const oid of H.voids.get(hostId) || []) { const ps = w.readPset(oid, SLABOPEN_PSET); if (ps) out.push(Number(ps.Area || 0) * 1e6); }
  return out;
}
export { polyPerimeter };
