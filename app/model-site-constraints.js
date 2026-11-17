/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-site-constraints.js: building lines and servitudes (easements, rights of way) on the site, and the check that warns
 * when a wall is over one (booklet row BK.104, session bk-stages-10). No DOM: bin/test-bimcraft.mjs --siteconstraints runs it in
 * Node. The geometry rules are the host-free ./sitelines/sitelines.js (lib/sitelines, shared with CivilCraft's setbacks).
 * ADVISORY ONLY: nothing here refuses a wall; siteProblems() hands warnings to the shell's Problems (docs/0.8-PROBLEMS-SPEC.md).
 *
 * In the IFC (survives save and reopen; other programs read plain annotations with curves):
 *   setbacks        CadCraft_Site.Setbacks on the IfcSite: one distance per boundary edge, in the file's length unit, ';' between
 *                   (edge i runs from point i to point i + 1 of CadCraft_Site.Points).
 *   building line   an IfcAnnotation, ObjectType "BuildingLine", contained in the IfcSite (IfcRelContainedInSpatialStructure),
 *                   placed on the site's own axes; Representation 'Annotation' / 'GeometricCurveSet' in the FootPrint context:
 *                   one 2D IfcPolyline (a closed one ends on its first point). The one worked out from the setbacks is written the
 *                   same way with Derived = 'yes' and is made again whenever the setbacks or the site outline change.
 *   servitude       an IfcAnnotation, ObjectType "Servitude", the same containment and placement; its curve is the OUTLINE of
 *                   the servitude area (a strip's outline is worked out from its centre line and width).
 *   CadCraft_SiteConstraint (on each annotation)   Kind 'buildingline' | 'servitude', Shape 'line' | 'strip' | 'area', Path (the
 *                   drawn points 'x,y;x,y' in the file's unit: the line, the strip's centre line or the area's corners), Closed
 *                   'yes' | 'no', Width (IfcLengthMeasure; strips), ServitudeKind (a key of SERVITUDE_KINDS), Reference (the deed
 *                   or diagram number as typed), Derived 'yes' | 'no'. The annotation's Name is the name the person gave.
 * IFC has no entity for a building line or a servitude; IfcAnnotation with a curve set is the schema's own way to carry a line
 * on a plan (IFC4 ADD2 and IFC4X3; IFC4X3 gets PredefinedType USERDEFINED).
 *
 *   readConstraints(w) → { site: { id, points } | null, setbacks: [mm per edge], derived: { poly | null, problem } | null,
 *                          items: [{ id, guid, kind, shape, pts (site mm), closed, width, name, reference, servitude, derived, poly }] }
 *   addConstraint({ storey, kind, shape, pts (that level's plan mm), closed, width, name, reference, servitude }) → op
 *   changeConstraint(guid, { name, reference, servitude, width }) → op
 *   moveConstraints(guids, { storey, from, to }) → op      (two plan points of a level)
 *   removeConstraints(guids) → op
 *   setSetbacks({ setbacks: [mm per boundary edge] }) → op  (all 0 = no building line from setbacks)
 *   siteFindings(w, walls?) → the lib's findings, each with the wall's GlobalId
 *   siteProblems(w, { walls, t, fmtLen }) → [problem]        severity 'warning', one per wall and constraint
 *   Errors: model.err.sc.short, model.err.sc.width, model.err.sc.nosite, model.err.sc.setbacks, model.err.gone
 */
import { op } from './model-ops.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';
import { readSite, ensureSite, planToSite, SITE_PSET, siteOutlineHooks } from './model-site.js';
import { readWalls, wallOutlines } from './model-walls.js';
import { buildingLine, stripPolygon, wallFootprint, checkConstraints, cleanSetbacks, SERVITUDE_KINDS, ringArea } from './sitelines/sitelines.js';

export { SERVITUDE_KINDS };
export const CONSTRAINT_PSET = 'CadCraft_SiteConstraint';
const TYPES = { buildingline: 'BuildingLine', servitude: 'Servitude' };
const DEFAULT_NAMES = ['Building line', 'Building line from setbacks', 'Servitude'];   // i18n-ignore: IFC Names written when the person gave none (read back as no name)
const nameFor = (it) => it.name || (it.kind === 'servitude' ? DEFAULT_NAMES[2] : it.derived ? DEFAULT_NAMES[1] : DEFAULT_NAMES[0]);
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const tidy = (s, n = 120) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
const ptsText = (w, p) => p.map((q) => round(w.u(q[0]), 6) + ',' + round(w.u(q[1]), 6)).join(';');
const ptsOf = (w, s) => String(s || '').split(';').map((x) => x.split(',').map(Number)).filter((q) => q.length === 2 && q.every(Number.isFinite)).map((q) => [q[0] * w.unitMm, q[1] * w.unitMm]);
const clean = (pts) => { const out = []; for (const q of pts || []) { const p = [Number(q?.[0]), Number(q?.[1])]; if (!p.every(Number.isFinite)) continue; const l = out[out.length - 1]; if (!l || Math.hypot(p[0] - l[0], p[1] - l[1]) > 0.5) out.push(p); } return out; };
const pathLen = (p, closed) => { let L = 0; for (let i = 0; i + (closed ? 0 : 1) < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; L += Math.hypot(b[0] - a[0], b[1] - a[1]); } return L; };

// ------------------------------------------------------------------------------------------------------------ reading
function readSetbacks(w, site) {
  if (!site?.points.length) return [];
  const ps = w.readPset(site.id, SITE_PSET);
  const list = String(ps?.Setbacks || '').split(';').filter((x) => x !== '').map((x) => Number(x) * w.unitMm);
  return list.length === site.points.length ? cleanSetbacks(list, site.points.length) : [];
}
/** The area a servitude covers, from what was drawn. */
const areaOf = (it) => (it.shape === 'strip' ? stripPolygon(it.pts, it.width) : it.shape === 'area' && it.pts.length >= 3 ? it.pts : null);

export function readConstraints(w) {
  let site = null;
  try { site = readSite(w); } catch (e) { site = null; }
  const out = { site: site ? { id: site.id, points: site.points } : null, setbacks: [], derived: null, items: [] };
  if (!site) return out;
  out.setbacks = readSetbacks(w, site);
  if (out.setbacks.some((d) => d > 0)) out.derived = buildingLine(site.points, out.setbacks);
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCANNOTATION'); } catch (e) { return out; }
  for (const id of list) {
    const ps = w.readPset(id, CONSTRAINT_PSET);
    if (!ps) continue;
    const a = w.api.GetLine(w.mid, id, false);
    const kind = ps.Kind === 'servitude' ? 'servitude' : 'buildingline';
    const it = {
      id, guid: val(a.GlobalId), kind, shape: kind === 'servitude' ? (ps.Shape === 'area' ? 'area' : 'strip') : 'line',
      pts: ptsOf(w, ps.Path), closed: ps.Closed === 'yes', width: Math.max(0, Number(ps.Width) || 0) * w.unitMm,
      name: DEFAULT_NAMES.includes(tidy(val(a.Name))) ? '' : tidy(val(a.Name)), reference: tidy(ps.Reference), servitude: SERVITUDE_KINDS.includes(ps.ServitudeKind) ? ps.ServitudeKind : 'servitude',
      derived: ps.Derived === 'yes', poly: null,
    };
    if (it.derived) { it.pts = out.derived?.poly || []; it.closed = true; }   // the truth is the setbacks and the outline as they are now
    if (kind === 'servitude') { it.closed = it.shape === 'area'; it.poly = areaOf(it); if (!it.poly) continue; }
    else if (it.pts.length < 2) { if (!it.derived) continue; }
    out.items.push(it);
  }
  return out;
}

// ------------------------------------------------------------------------------------------------------------ writing
function sitePlacement(w, sid) { return w.api.GetLine(w.mid, sid, false).ObjectPlacement?.value ?? null; }
function writeShape(w, id, it) {
  const curve = it.kind === 'servitude' ? { pts: areaOf(it), closed: true } : { pts: it.pts, closed: it.closed };
  w.setShape(id, [w.rep('foot', 'Annotation', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', [w.H(w.polyline2(curve.pts, curve.closed))])])]);
}
function writeProps(w, id, it) {
  w.upsertPset(id, CONSTRAINT_PSET, [
    ['Kind', 'IFCLABEL', it.kind], ['Shape', 'IFCLABEL', it.shape], ['Path', 'IFCTEXT', ptsText(w, it.pts)], ['Closed', 'IFCLABEL', it.closed ? 'yes' : 'no'],
    ['Width', 'IFCLENGTHMEASURE', round(w.u(it.width || 0), 6)], ['ServitudeKind', 'IFCLABEL', it.kind === 'servitude' ? it.servitude : ''],
    ['Reference', 'IFCLABEL', it.reference || ''], ['Derived', 'IFCLABEL', it.derived ? 'yes' : 'no'],
  ]);
}
function check(it) {
  if (it.kind === 'servitude') {
    if (!SERVITUDE_KINDS.includes(it.servitude)) it.servitude = 'servitude';
    if (it.shape === 'strip') { if (it.pts.length < 2 || pathLen(it.pts, false) < 10) refuse('model.err.sc.short'); if (!(it.width > 0) || it.width > 1e6) refuse('model.err.sc.width'); }
    else if (it.pts.length < 3 || Math.abs(ringArea(it.pts)) < 100) refuse('model.err.sc.short');
    if (!areaOf(it)) refuse('model.err.sc.short');
  } else if (it.pts.length < 2 || pathLen(it.pts, it.closed) < 10 || (it.closed && it.pts.length < 3)) refuse('model.err.sc.short');
}
function make(w, sid, it, guid) {
  const g = guid || val(w.guid());
  const id = w.make('IFCANNOTATION', g, w.ownerHistory(), w.L(nameFor(it)), null, w.L(TYPES[it.kind]), w.H(w.placeAt(sitePlacement(w, sid), 0, 0, 0, 0)), null, ...(/^IFC4X3/i.test(w.schema || '') ? ['USERDEFINED'] : []));   // i18n-ignore: IFC Name / ObjectType
  w.noteGuid(g, id);
  writeShape(w, id, it);
  w.contain(id, sid);
  writeProps(w, id, it);
  return { id, guid: g };
}

export function addConstraint(spec) {
  const S = { ...spec, pts: clean(spec.pts) };
  let guid = spec.guid || null;
  return op((w) => {
    const st = w.byGuid(S.storey);
    if (!st) refuse('model.err.nolevel');
    const sid = ensureSite(w);
    const kind = S.kind === 'servitude' ? 'servitude' : 'buildingline';
    let pts = planToSite(w, st, S.pts);
    let closed = !!S.closed;
    if (pts.length > 2 && Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1]) < 0.5) { pts = pts.slice(0, -1); closed = true; }
    const it = {
      kind, shape: kind === 'servitude' ? (S.shape === 'area' || closed ? 'area' : 'strip') : 'line', pts, closed: kind === 'servitude' ? false : closed,
      width: Number(S.width) || 0, name: tidy(S.name), reference: tidy(S.reference), servitude: S.servitude || 'servitude', derived: false,
    };
    if (it.shape === 'area') it.closed = true;
    check(it);
    if (!guid) guid = val(w.guid());
    const r = make(w, sid, it, guid);
    return { id: r.id, ids: [r.id], made: new Map([[guid, r.id]]), guid };
  });
}
const find = (w, guids) => { const set = new Set(guids); const list = readConstraints(w).items.filter((d) => set.has(d.guid)); if (!list.length) refuse('model.err.gone'); return list; };
export function changeConstraint(guid, ch) {
  const C = { ...ch };
  return op((w) => {
    const it = find(w, [guid])[0];
    if (C.name !== undefined) { it.name = tidy(C.name); const l = w.touch(it.id); l.Name = w.L(nameFor(it)); w.write(l); }   // i18n-ignore: IFC Name
    if (C.reference !== undefined) it.reference = tidy(C.reference);
    if (C.servitude !== undefined && it.kind === 'servitude') it.servitude = SERVITUDE_KINDS.includes(C.servitude) ? C.servitude : 'servitude';
    let shape = false;
    if (C.width !== undefined && it.shape === 'strip') { it.width = Number(C.width); shape = true; }
    if (it.derived) { writeProps(w, it.id, { ...it, pts: it.pts }); return { id: it.id, ids: [it.id] }; }
    check(it);
    if (shape) writeShape(w, it.id, it);
    writeProps(w, it.id, it);
    return { id: it.id, ids: [it.id] };
  });
}
export function moveConstraints(guids, { storey, from, to }) {
  return op((w) => {
    const st = w.byGuid(storey);
    if (!st) refuse('model.err.nolevel');
    const [a, b] = planToSite(w, st, [from, to]);
    const dx = b[0] - a[0], dy = b[1] - a[1];
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) refuse('model.err.length');
    const list = find(w, guids).filter((d) => !d.derived);   // the line from the setbacks follows the boundary, it is not moved by hand
    if (!list.length) refuse('model.err.sc.derived');
    for (const it of list) { it.pts = it.pts.map(([x, y]) => [x + dx, y + dy]); writeShape(w, it.id, it); writeProps(w, it.id, it); }
    return { id: list[0].id, ids: list.map((d) => d.id) };
  });
}
export function removeConstraints(guids) {
  return op((w) => {
    const set = new Set(guids), all = readConstraints(w), list = all.items.filter((d) => set.has(d.guid));
    if (list.some((d) => d.derived) && all.site) w.upsertPset(all.site.id, SITE_PSET, [['Setbacks', 'IFCTEXT', '']]);   // deleting the line from the setbacks clears the setbacks
    if (list.length) w.dropProduct(list.map((d) => d.id));
    return { id: null, ids: [] };
  });
}

/** The building line from the setbacks as an annotation other programs can read: made, redrawn or removed to match. */
function syncDerived(w, sid) {
  const all = readConstraints(w), have = all.items.filter((d) => d.derived), poly = all.derived?.poly || null;
  if (!poly) { if (have.length) w.dropProduct(have.map((d) => d.id)); return null; }
  const it = { kind: 'buildingline', shape: 'line', pts: poly, closed: true, width: 0, name: have[0]?.name || '', reference: have[0]?.reference || '', servitude: '', derived: true };
  if (have.length > 1) w.dropProduct(have.slice(1).map((d) => d.id));
  if (have[0]) { writeShape(w, have[0].id, it); writeProps(w, have[0].id, it); return have[0].id; }
  return make(w, sid, it, null).id;
}
export function setSetbacks({ setbacks }) {
  const list = (setbacks || []).map(Number);
  return op((w) => {
    const site = readSite(w);
    if (!site?.points.length) refuse('model.err.sc.nosite');
    if (list.length !== site.points.length || !list.every((v) => Number.isFinite(v) && v >= 0 && v < 1e7)) refuse('model.err.sc.setbacks');
    const any = list.some((v) => v > 0);
    if (any && !buildingLine(site.points, list).poly) refuse('model.err.sc.fold');
    w.upsertPset(site.id, SITE_PSET, [['Setbacks', 'IFCTEXT', any ? list.map((v) => round(w.u(v), 6)).join(';') : '']]);
    const id = syncDerived(w, site.id);
    return { id: id ?? site.id, ids: [id ?? site.id] };
  });
}
// the site outline drawn again (model-site.js setSiteOutline): setbacks stay when the outline has as many edges as before (or
// were all the same), else they are cleared; the line from them is made again
if (!siteOutlineHooks.includes(outlineChanged)) siteOutlineHooks.push(outlineChanged);
function outlineChanged(w, sid) {
  const site = readSite(w);
  if (!site) return;
  const old = String(w.readPset(sid, SITE_PSET)?.Setbacks || '').split(';').filter((x) => x !== '').map(Number);
  if (old.length && old.length !== site.points.length) {
    const same = old.every((v) => Math.abs(v - old[0]) < 1e-9);
    w.upsertPset(sid, SITE_PSET, [['Setbacks', 'IFCTEXT', same && old[0] > 0 ? site.points.map(() => old[0]).join(';') : '']]);
  }
  if (old.length || readConstraints(w).items.some((d) => d.derived)) {
    const sb = readSetbacks(w, site);
    if (sb.some((d) => d > 0) && !buildingLine(site.points, sb).poly) w.upsertPset(sid, SITE_PSET, [['Setbacks', 'IFCTEXT', '']]);
    syncDerived(w, sid);
  }
}

// ------------------------------------------------------------------------------------------------------------ the check
/** Every wall of every level against the boundary, the building lines and the servitudes, all in the site's axes. */
export function siteFindings(w, walls = null, C = null) {
  const all = C || readConstraints(w);
  if (!all.site) return [];
  const lines = all.items.filter((d) => d.kind === 'buildingline' && d.pts.length >= 2), servitudes = all.items.filter((d) => d.kind === 'servitude');
  const boundary = all.site.points.length >= 3 ? all.site.points : null;
  if (!boundary && !lines.length && !servitudes.length) return [];
  const list = [], all0 = walls || readWalls(w);
  // the wall's real plan footprint: its outline as the plan draws it, joins trimmed and mitred (model-walls.js wallOutlines, per level).
  // A curved wall, or one the outline could not be made for, is taken as its own thickness about its centre line.
  const real = new Map();
  for (const st of new Set(all0.map((x) => x.storey))) {
    try { for (const [g, poly] of wallOutlines(all0.filter((x) => x.storey === st).map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff })))) real.set(g, poly); } catch (e) { /* that level's walls fall back to their own footprints */ }
  }
  for (const x of all0) {
    if (!x.storey || !(x.t > 0)) continue;
    const out = !x.bulge ? real.get(x.guid) : null;
    const fp = out?.length >= 3 && out.every((p) => p.length === 2 && Number.isFinite(p[0]) && Number.isFinite(p[1])) ? out : wallFootprint({ a: x.a, b: x.b, t: x.t, bulge: x.bulge || 0 });
    if (!fp) continue;
    let poly;
    try { poly = planToSite(w, x.storey, fp); } catch (e) { continue; }
    list.push({ id: x.guid, label: x.name || x.typeName || '', poly });
  }
  return footprintFindings(all, list);
}
/** Footprints [{ id, label, poly (the site's axes) }] against the boundary, the building lines and the servitudes: the one call into the lib (walls above; 0.10 BK.44: kept massing options, mass-options.js). */
export function footprintFindings(all, list) {
  if (!all?.site) return [];
  return checkConstraints({
    walls: list, boundary: all.site.points.length >= 3 ? all.site.points : null,
    lines: all.items.filter((d) => d.kind === 'buildingline' && d.pts.length >= 2).map((d) => ({ id: d.guid, name: d.name, pts: d.pts, closed: d.closed, derived: d.derived })),
    servitudes: all.items.filter((d) => d.kind === 'servitude').map((d) => ({ id: d.guid, name: d.name, kind: d.servitude, poly: d.poly })),
  }).map((f) => ({ ...f, item: all.items.find((d) => d.guid === f.id) || null }));
}

/** The findings as Problems: warnings, never errors (a wall over a building line may be there on purpose, with a relaxation). */
export function siteProblems(w, { walls = null, t = (k) => k, levelName = () => '', extra = [] } = {}) {
  const all = readConstraints(w), ws = walls || readWalls(w), out = [];
  const byGuid = new Map(ws.map((x) => [x.guid, x]));
  // extra: other footprints in the site's axes, each with its own words as the label (0.10 BK.44: the current massing options)
  const others = new Set(extra.map((x) => x.id));
  for (const f of [...siteFindings(w, ws, all), ...footprintFindings(all, extra)]) {
    const wall = byGuid.get(f.wall), it = f.item;
    const wname = others.has(f.wall) && !wall ? f.label : t('site.sc.wall', { name: f.label || t('model.wall'), level: wall ? levelName(wall.storey) : '' }).replace(/\s*\(\s*\)\s*$/, '').trim();
    const ref = it?.reference ? ' (' + it.reference + ')' : '';
    let code, text, name;
    if (f.kind === 'boundary') { code = 'site.boundary.cross'; name = t('site.sc.boundary'); text = t('site.sc.p.boundary', { wall: wname }); }
    else if (f.kind === 'buildingline') {
      code = 'site.buildingline.cross'; name = (f.name || (it?.derived ? t('site.sc.derived') : t('site.sc.bline'))) + ref;
      text = t(f.sub === 'crosses' ? 'site.sc.p.bline.cross' : 'site.sc.p.bline.out', { wall: wname, line: name });
    } else { code = 'site.servitude.over'; name = (f.name || t('site.sc.kind.' + (f.servitude || 'servitude'))) + ref; text = t('site.sc.p.serv', { wall: wname, name, kind: t('site.sc.kind.' + (f.servitude || 'servitude')) }); }
    out.push({
      code, severity: 'warning', part: f.id, msg: { key: code, vars: {} }, text,
      about: [{ kind: 'element', id: f.wall, label: wname }, ...(f.kind !== 'boundary' ? [{ kind: 'element', id: f.id, label: name }] : [])],
      source: { name: 'bimcraft.site' },
    });
  }
  return out;
}
