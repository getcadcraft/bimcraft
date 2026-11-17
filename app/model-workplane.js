/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-workplane.js — the work plane and what is drawn on it (session bk-tools-b-10): the plane itself, named reference planes,
 * model lines and model text. No DOM: bin/test-bimcraft.mjs --tools-b runs it in Node. The mathematics is workplane/plane.js,
 * curve.js and glyphs.js (lib/workplane, shared); this file is the IFC.
 *
 * Every plane is a FRAME { o, x, y, n } in MODEL millimetres (the file's own axes, Z up): workplane/plane.js. Elements are written
 * in their level's axes (IfcLocalPlacement on the storey), as everything else the tools make.
 *
 * In the IFC:
 *   the work plane       CadCraft_WorkPlane on IfcProject: Kind (level | face | reference | line), Ref (the level's or the reference
 *                        plane's GlobalId, the picked element's for a face or a line), Label, OriginX/Y/Z, AxisX/Y/Z (its x),
 *                        NormalX/Y/Z. A project without the set works on its lowest level. One undo step.
 *   a reference plane    IfcAnnotation, ObjectType "ReferencePlane", Name = its name (unique in the file), contained in its level.
 *                        Shape: 'Annotation' / 'GeometricCurveSet' in the 3D model context: one closed IfcPolyline, the plane's
 *                        extent (its line by its height). CadCraft_ReferencePlane: Name, the frame as above, Length (along x),
 *                        Height (along y), Base (y of its foot). IFC has no "reference plane" class before IFC4.3's alignment
 *                        work; an annotation that draws its extent is read as what it is by any viewer and is never taken for a
 *                        building element (an IfcVirtualElement would be counted among the elements and bound spaces).
 *   a model line         IfcAnnotation, ObjectType "ModelLine", contained in its level. Shape: 'Annotation' /
 *                        'GeometricCurveSet' in the 3D model context: an IfcPolyline (line, polyline) or an IfcTrimmedCurve on an
 *                        IfcCircle (arc; trimmed by its two end points). CadCraft_ModelLine: Kind (line | polyline | arc), Closed,
 *                        Points (JSON, plane coordinates in mm), the frame, Length (true length, an arc's own).
 *   model text           IfcBuildingElementProxy (IFC4 USERDEFINED), ObjectType "ModelText", contained in its level. Shape: 'Body'
 *                        / 'SweptSolid': one IfcExtrudedAreaSolid per letter piece (IfcArbitraryProfileDefWithVoids where a letter
 *                        has holes), standing on the plane and rising from it by Depth (towards its front). CadCraft_ModelText: Text, Font, Height (capital height),
 *                        Depth, AtU, AtV (the left end of the baseline in plane coordinates), the frame, Width, FaceArea.
 *                        Qto_BuildingElementProxyQuantities: NetVolume (face area x depth), NetSurfaceArea (the face).
 *
 *   frameRows(w, F) / frameFrom(w, ps)        a frame as property rows / read back
 *   localOf(w, storeyId) → { P(p), D(v) }     model mm → the storey's axes (points, directions)
 *   readWorkPlane(w) → { kind, ref, label, frame } | null      defaultWorkPlane(w) → the lowest level's
 *   setWorkPlane({ kind, ref, label, frame }) → op
 *   readRefPlanes(w) → [{ id, guid, storey, name, frame, length, height, base }]
 *   addRefPlane({ storey, name?, frame, length, height, base }) → op    changeRefPlane(guid, ch) → op    removeRefPlanes(guids) → op
 *   readModelLines(w) → [{ id, guid, storey, kind, closed, pts, frame, length }]
 *   addModelLine({ storey, frame, kind, pts, closed }) → op    removeModelLines(guids) → op    moveModelLines(guids, du, dv) → op
 *   readModelTexts(w) → [{ id, guid, storey, text, font, height, depth, at, frame, width, faceArea }]
 *   addModelText({ storey, frame, at, text, font, height, depth, polys, width }) → op   changeModelText(guid, ch) → op   removeModelTexts(guids) → op
 *     polys: workplane/glyphs.js textPolygons(font, text, { height }).polys — the caller owns the font (a file fetch in the page)
 *   storeyForZ(w, z) → the id of the highest level at or under z (the lowest level when z is under them all)
 *   Errors (refused only when there is nothing to make): model.err.wp.plane, model.err.wp.short, model.err.wp.inline,
 *     model.err.wp.name (a second plane of that name), model.err.wp.text (no letters with an outline), model.err.wp.depth,
 *     model.err.wp.gone, model.err.nolevel
 */
import { op } from './model-ops.js';
import { readLevels } from './model-levels.js';
import { ids, val, inv4, apply4 } from './ifc-util.js';
import { round } from './model-write.js';
import { frame as makeFrame, fromPlane, levelPlane } from './workplane/plane.js';
import { arcThrough, curvePoints, curveLength, curveProblem, KINDS } from './workplane/curve.js';

export const WP_PSET = 'CadCraft_WorkPlane', REF_PSET = 'CadCraft_ReferencePlane', LINE_PSET = 'CadCraft_ModelLine', TEXT_PSET = 'CadCraft_ModelText';
const REF_TYPE = 'ReferencePlane', LINE_TYPE = 'ModelLine', TEXT_TYPE = 'ModelText';
export const TEXT_DEFAULTS = { height: 300, depth: 50, font: 'Liberation Sans' };
const refuse = (key, fill) => { throw Object.assign(new Error(key), { key, fill }); };
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
const is43 = (w) => /^IFC4X3/i.test(w.schema || '');

// ------------------------------------------------------------------------------------------------------------ frames
export function frameRows(w, F) {
  const Lm = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))], R = (k, v) => [k, 'IFCREAL', round(v || 0, 9)];
  return [Lm('OriginX', F.o[0]), Lm('OriginY', F.o[1]), Lm('OriginZ', F.o[2]), R('AxisX', F.x[0]), R('AxisY', F.x[1]), R('AxisZ', F.x[2]), R('NormalX', F.n[0]), R('NormalY', F.n[1]), R('NormalZ', F.n[2])];
}
export function frameFrom(w, ps) {
  if (!ps || ps.NormalX === undefined) return null;
  const n = (k) => Number(ps[k]) || 0;
  return makeFrame([n('OriginX') * w.unitMm, n('OriginY') * w.unitMm, n('OriginZ') * w.unitMm], [n('NormalX'), n('NormalY'), n('NormalZ')], [n('AxisX'), n('AxisY'), n('AxisZ')]);
}
const goodFrame = (F) => !!(F && [F.o, F.x, F.y, F.n].every((v) => Array.isArray(v) && v.length === 3 && v.every(Number.isFinite)));
export function localOf(w, storeyId) {
  const Si = inv4(w.storeyWorld(storeyId)), O = apply4(Si, 0, 0, 0);
  return { P: (p) => apply4(Si, p[0], p[1], p[2]), D: (v) => { const q = apply4(Si, v[0], v[1], v[2]); return [q[0] - O[0], q[1] - O[1], q[2] - O[2]]; } };
}
export function storeyForZ(w, z) {
  const L = readLevels(w);
  if (!L.length) return null;
  let best = L[0];
  for (const l of L) if (l.elevation <= z + 0.5 && l.elevation >= best.elevation) best = l;
  return best.id;
}
const storeyByGuid = (w, guid) => { const id = w.byGuid(guid); if (!id) refuse('model.err.nolevel'); return id; };
const annotation = (w, guid, name, type, storeyId) => {
  const sl = w.api.GetLine(w.mid, storeyId, false);
  const id = w.make('IFCANNOTATION', guid, w.ownerHistory(), w.L(name), null, w.L(type), w.H(w.placeAt(sl.ObjectPlacement.value, 0, 0, 0, 0)), null, ...(is43(w) ? ['USERDEFINED'] : []));
  w.noteGuid(guid, id);
  w.contain(id, storeyId);
  return id;
};
const typed = (w, type) => {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCANNOTATION'); } catch (e) { return out; }
  for (const id of list) { const a = w.api.GetLine(w.mid, id, false); if (a && String(val(a.ObjectType) || '') === type) out.push([id, a]); }
  return out;
};

// ------------------------------------------------------------------------------------------------------------ the work plane
export function readWorkPlane(w) {
  const pj = project(w);
  if (pj === undefined) return null;
  const ps = w.readPset(pj, WP_PSET), F = frameFrom(w, ps);
  if (!F) return null;
  const kind = ['level', 'face', 'reference', 'line'].includes(ps.Kind) ? ps.Kind : 'face';
  return { kind, ref: String(ps.Ref || ''), label: String(ps.Label || ''), frame: F };
}
export function defaultWorkPlane(w) {
  const L = readLevels(w);
  if (!L.length) return { kind: 'level', ref: '', label: '', frame: levelPlane(0) };
  const l = L.reduce((a, b) => (b.elevation < a.elevation ? b : a));
  return { kind: 'level', ref: l.guid, label: l.name || '', frame: levelPlane(l.elevation) };
}
export function setWorkPlane({ kind, ref = '', label = '', frame }) {
  const F = frame && makeFrame(frame.o, frame.n, frame.x);
  return op((w) => {
    if (!goodFrame(F)) refuse('model.err.wp.plane');
    const pj = project(w);
    if (pj === undefined) refuse('model.err.wp.plane');
    w.upsertPset(pj, WP_PSET, [['Kind', 'IFCLABEL', ['level', 'face', 'reference', 'line'].includes(kind) ? kind : 'face'], ['Ref', 'IFCLABEL', String(ref || '-')], ['Label', 'IFCLABEL', String(label || '-').slice(0, 250)], ...frameRows(w, F)]);
    return { id: null, ids: [] };
  });
}

// ------------------------------------------------------------------------------------------------------------ reference planes
export function readRefPlanes(w) {
  const out = [], so = w.storeyOf();
  for (const [id, a] of typed(w, REF_TYPE)) {
    const ps = w.readPset(id, REF_PSET), F = frameFrom(w, ps);
    if (!F) continue;
    const mm = (v) => (Number(v) || 0) * w.unitMm;
    out.push({ id, guid: val(a.GlobalId), storey: so.get(id) ?? null, name: String(ps.Name || val(a.Name) || ''), frame: F, length: mm(ps.Length), height: mm(ps.Height), base: mm(ps.Base) });
  }
  return out;
}
export const refCorners = (r) => [fromPlane(r.frame, 0, r.base), fromPlane(r.frame, r.length, r.base), fromPlane(r.frame, r.length, r.base + r.height), fromPlane(r.frame, 0, r.base + r.height)];
function writeRef(w, r) {
  const Lc = localOf(w, r.storey), c = refCorners(r).map(Lc.P);
  w.setShape(r.id, [w.rep('Annotation', 'Annotation', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', [w.H(w.polyline3([...c, c[0]]))])])]);
  const Lm = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))];
  w.upsertPset(r.id, REF_PSET, [['Name', 'IFCLABEL', r.name], ...frameRows(w, r.frame), Lm('Length', r.length), Lm('Height', r.height), Lm('Base', r.base)]);
  const line = w.touch(r.id); line.Name = w.L(r.name); w.write(line);
}
const freeName = (list, base) => { for (let n = list.length + 1; n < 100000; n++) { const s = base + ' ' + n; if (!list.some((x) => x.name === s)) return s; } return base; };
export function addRefPlane(spec) {
  const s = { ...spec };
  return op((w) => {
    const storey = storeyByGuid(w, s.storey), F = s.frame && makeFrame(s.frame.o, s.frame.n, s.frame.x);
    if (!goodFrame(F) || !(s.length >= 1)) refuse('model.err.wp.short');
    const all = readRefPlanes(w);
    if (!s.name) s.name = freeName(all, s.baseName || 'Reference plane');   // i18n-ignore: the caller hands the word in its language (baseName)
    if (all.some((x) => x.name === s.name)) refuse('model.err.wp.name', { name: s.name });
    const g = w.gid(s.guid); s.guid = g;
    const id = annotation(w, g, s.name, REF_TYPE, storey);
    writeRef(w, { id, storey, name: s.name, frame: F, length: s.length, height: s.height > 0 ? s.height : 3000, base: Number(s.base) || 0 });
    return { id, ids: [id], made: new Map([[g, id]]), guid: g, name: s.name };
  });
}
export function changeRefPlane(guid, ch) {
  const c = { ...ch };
  return op((w) => {
    const all = readRefPlanes(w), r = all.find((x) => x.guid === guid);
    if (!r) refuse('model.err.wp.gone');
    const n = { ...r, ...c };
    if (c.frame) n.frame = makeFrame(c.frame.o, c.frame.n, c.frame.x);
    n.name = String(n.name || '').trim() || r.name;
    if (!goodFrame(n.frame) || !(n.length >= 1) || !(n.height >= 1)) refuse('model.err.wp.short');
    if (all.some((x) => x.guid !== guid && x.name === n.name)) refuse('model.err.wp.name', { name: n.name });
    writeRef(w, n);
    // the work plane that follows this reference plane moves with it
    const wp = readWorkPlane(w);
    if (wp && wp.kind === 'reference' && wp.ref === guid) w.upsertPset(project(w), WP_PSET, [['Label', 'IFCLABEL', n.name], ...frameRows(w, n.frame)]);
    return { id: r.id, ids: [r.id] };
  });
}
export function removeRefPlanes(guids) {
  return op((w) => { const list = readRefPlanes(w).filter((r) => guids.includes(r.guid)).map((r) => r.id); if (list.length) w.dropProduct(list); return { id: null, ids: [] }; });
}

// ------------------------------------------------------------------------------------------------------------ model lines
export function readModelLines(w) {
  const out = [], so = w.storeyOf();
  for (const [id, a] of typed(w, LINE_TYPE)) {
    const ps = w.readPset(id, LINE_PSET), F = frameFrom(w, ps);
    if (!F) continue;
    let pts = [];
    try { pts = JSON.parse(String(ps.Points || '[]')).map((p) => [Number(p[0]), Number(p[1])]).filter((p) => p.every(Number.isFinite)); } catch (e) { pts = []; }
    const kind = KINDS.includes(ps.Kind) ? ps.Kind : 'polyline';
    if (curveProblem(kind, pts)) continue;
    const closed = ps.Closed === true || String(ps.Closed) === 'true';
    out.push({ id, guid: val(a.GlobalId), storey: so.get(id) ?? null, kind, closed, pts, frame: F, length: curveLength(kind, pts, closed) });
  }
  return out;
}
/** A model line's own points in model mm (an arc as chords): what every view draws. */
export const linePoints3 = (l) => curvePoints(l.kind, l.pts, l.closed).map((p) => fromPlane(l.frame, p[0], p[1]));
function writeLine(w, l) {
  const Lc = localOf(w, l.storey), P3 = (p) => Lc.P(fromPlane(l.frame, p[0], p[1]));
  const pt = (p) => { const q = P3(p); return w.point3(round(w.u(q[0])), round(w.u(q[1])), round(w.u(q[2]))); };
  let curve;
  if (l.kind === 'arc') {
    const a = arcThrough(l.pts[0], l.pts[1], l.pts[2]);
    // the circle's own axis is turned so the arc always runs counter-clockwise about it from its start to its end
    const n = Lc.D(l.frame.n), x = Lc.D(l.frame.x), c = P3(a.c), z = a.ccw ? n : [-n[0], -n[1], -n[2]];
    const circle = w.make('IFCCIRCLE', w.H(w.axisFrame(c, z, x)), round(w.u(a.r)));
    curve = w.make('IFCTRIMMEDCURVE', w.H(circle), [w.H(pt(l.pts[0]))], [w.H(pt(l.pts[2]))], true, 'CARTESIAN');
  } else curve = w.polyline3(curvePoints(l.kind, l.pts, l.closed).map(P3));
  w.setShape(l.id, [w.rep('Annotation', 'Annotation', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', [w.H(curve)])])]);
  w.upsertPset(l.id, LINE_PSET, [['Kind', 'IFCLABEL', l.kind], ['Closed', 'IFCBOOLEAN', !!l.closed], ['Points', 'IFCTEXT', JSON.stringify(l.pts.map((p) => [round(p[0], 3), round(p[1], 3)]))], ...frameRows(w, l.frame),
    ['Length', 'IFCLENGTHMEASURE', round(w.u(curveLength(l.kind, l.pts, l.closed)))]]);
}
const cleanPts = (pts) => { const out = []; for (const q of pts || []) { if (!Array.isArray(q) || !Number.isFinite(+q[0]) || !Number.isFinite(+q[1])) continue; const p = [+q[0], +q[1]], l = out[out.length - 1]; if (!l || Math.hypot(p[0] - l[0], p[1] - l[1]) > 0.5) out.push(p); } return out; };
export function addModelLine(spec) {
  const s = { ...spec, kind: KINDS.includes(spec.kind) ? spec.kind : 'polyline', pts: cleanPts(spec.pts) };
  return op((w) => {
    const F = s.frame && makeFrame(s.frame.o, s.frame.n, s.frame.x);
    if (!goodFrame(F)) refuse('model.err.wp.plane');
    const pr = curveProblem(s.kind, s.pts);
    if (pr) refuse(pr === 'inline' ? 'model.err.wp.inline' : 'model.err.wp.short');
    if (curveLength(s.kind, s.pts, !!s.closed) < 1) refuse('model.err.wp.short');
    const storey = s.storey ? storeyByGuid(w, s.storey) : storeyForZ(w, Math.min(...s.pts.map((p) => fromPlane(F, p[0], p[1])[2])));
    if (!storey) refuse('model.err.nolevel');
    const g = w.gid(s.guid); s.guid = g;
    const id = annotation(w, g, 'Model line', LINE_TYPE, storey);   // i18n-ignore: an IFC name
    writeLine(w, { id, storey, kind: s.kind, closed: s.kind === 'polyline' && !!s.closed && s.pts.length > 2, pts: s.pts, frame: F });
    return { id, ids: [id], made: new Map([[g, id]]), guid: g };
  });
}
export function moveModelLines(guids, du, dv) {
  return op((w) => {
    const list = readModelLines(w).filter((l) => guids.includes(l.guid));
    if (!list.length) refuse('model.err.wp.gone');
    for (const l of list) writeLine(w, { ...l, pts: l.pts.map((p) => [p[0] + du, p[1] + dv]) });
    return { id: list[0].id, ids: list.map((l) => l.id) };
  });
}
export function removeModelLines(guids) {
  return op((w) => { const list = readModelLines(w).filter((l) => guids.includes(l.guid)).map((l) => l.id); if (list.length) w.dropProduct(list); return { id: null, ids: [] }; });
}

// ------------------------------------------------------------------------------------------------------------ model text
export function readModelTexts(w) {
  const out = [], so = w.storeyOf();
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCBUILDINGELEMENTPROXY'); } catch (e) { return out; }
  for (const id of list) {
    const ps = w.readPset(id, TEXT_PSET), F = frameFrom(w, ps);
    if (!F) continue;
    const mm = (v) => (Number(v) || 0) * w.unitMm;
    out.push({ id, guid: val(w.api.GetLine(w.mid, id, false).GlobalId), storey: so.get(id) ?? null, text: String(ps.Text || ''), font: String(ps.Font || TEXT_DEFAULTS.font), height: mm(ps.Height), depth: mm(ps.Depth),
      at: [mm(ps.AtU), mm(ps.AtV)], frame: F, width: mm(ps.Width), faceArea: (Number(ps.FaceArea) || 0) * 1e6 });
  }
  return out;
}
const loopArea = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s / 2); };
export const facesArea = (polys) => (polys || []).reduce((s, p) => s + loopArea(p.outer) - (p.holes || []).reduce((h, q) => h + loopArea(q), 0), 0);
function writeText(w, x, polys) {
  if (!(x.depth >= 0.1)) refuse('model.err.wp.depth');
  const good = (polys || []).filter((p) => p.outer?.length >= 3 && loopArea(p.outer) > 1e-6);
  if (!good.length) refuse('model.err.wp.text');
  const Lc = localOf(w, x.storey), F = x.frame;
  // the letters stand on the plane and rise from it by Depth, towards its front (readable from there)
  const pos = () => w.axisFrame(Lc.P(fromPlane(F, x.at[0], x.at[1], 0)), Lc.D(F.n), Lc.D(F.x));
  const items = good.map((p) => w.extrudeAt(w.profileVoids(p.outer, (p.holes || []).filter((h) => h.length >= 3)), pos(), x.depth));
  w.setShape(x.id, [w.rep('body', 'Body', 'SweptSolid', items)]);
  const area = facesArea(good), Lm = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))];
  w.upsertPset(x.id, TEXT_PSET, [['Text', 'IFCTEXT', x.text], ['Font', 'IFCLABEL', x.font || TEXT_DEFAULTS.font], Lm('Height', x.height), Lm('Depth', x.depth), Lm('AtU', x.at[0]), Lm('AtV', x.at[1]), ...frameRows(w, F),
    Lm('Width', x.width || 0), ['FaceArea', 'IFCAREAMEASURE', round(area / 1e6, 6)]]);
  w.upsertQto(x.id, 'Qto_BuildingElementProxyQuantities', [['NetSurfaceArea', 'area', area], ['NetVolume', 'volume', area * x.depth]]);
  const line = w.touch(x.id); line.Name = w.L(String(x.text).split(/\r?\n/)[0].slice(0, 80) || 'Model text'); w.write(line);   // i18n-ignore: an IFC name
}
export function addModelText(spec) {
  const s = { ...TEXT_DEFAULTS, ...spec, at: [Number(spec.at?.[0]) || 0, Number(spec.at?.[1]) || 0] };
  return op((w) => {
    const F = s.frame && makeFrame(s.frame.o, s.frame.n, s.frame.x);
    if (!goodFrame(F)) refuse('model.err.wp.plane');
    if (!String(s.text || '').trim()) refuse('model.err.wp.text');
    const storey = s.storey ? storeyByGuid(w, s.storey) : storeyForZ(w, fromPlane(F, s.at[0], s.at[1])[2]);
    if (!storey) refuse('model.err.nolevel');
    const sl = w.api.GetLine(w.mid, storey, false), g = w.gid(s.guid); s.guid = g;
    const id = w.make('IFCBUILDINGELEMENTPROXY', g, w.ownerHistory(), w.L('Model text'), null, w.L(TEXT_TYPE), w.H(w.placeAt(sl.ObjectPlacement.value, 0, 0, 0, 0)), null, null, w.v4 ? 'USERDEFINED' : null);   // i18n-ignore: an IFC name
    w.noteGuid(g, id);
    w.contain(id, storey);
    writeText(w, { id, storey, text: String(s.text), font: s.font, height: s.height, depth: s.depth, at: s.at, frame: F, width: s.width }, s.polys);
    return { id, ids: [id], made: new Map([[g, id]]), guid: g };
  });
}
/** ch: any of text, height, depth, at, font, frame, width; always with `polys` (the letters' outlines for the text and height it will have). */
export function changeModelText(guid, ch) {
  const c = { ...ch };
  return op((w) => {
    const x = readModelTexts(w).find((q) => q.guid === guid);
    if (!x) refuse('model.err.wp.gone');
    if (!c.polys) refuse('model.err.wp.text');
    if (c.frame) c.frame = makeFrame(c.frame.o, c.frame.n, c.frame.x);
    writeText(w, { ...x, ...c }, c.polys);
    return { id: x.id, ids: [x.id] };
  });
}
export function removeModelTexts(guids) {
  return op((w) => { const list = readModelTexts(w).filter((x) => guids.includes(x.guid)).map((x) => x.id); if (list.length) w.dropProduct(list); return { id: null, ids: [] }; });
}
