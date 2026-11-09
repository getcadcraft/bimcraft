/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-terrain.js — the site's ground in the BimCraft model (0.5 part 4, RC.10): a surface from survey points, contours, a
 * LAS / LAZ cloud, a GeoTIFF or a few spot elevations (CivilCraft's surface engine, tin.js, a shared copy); the house's
 * building pad cut into it with daylight slopes and cut / fill volumes; driveways, walks and patios draped on it; contours
 * for the plan; LandXML for CivilCraft. No DOM: bin/test-bimcraft.mjs --res.
 *
 *   parsePointText(text, { format }) → [{ x, y, z }]           PNEZD / PENZD / PNEZ / PENZ / NEZ / ENZ (XYZ), comma, tab or
 *                                                              space separated; header and non-numeric rows skipped
 *   drawingContours(model) → { lines: [[{x, y, z}…]], points }  contours from a DWG / DXF model (LWPOLYLINE / 2D polylines
 *                                                              at their elevation, 3D polylines, LINEs and POINTs with z)
 *   thinToGrid(points, cell) → points                           the lowest point in each cell (ground from a cloud)
 *   toModel(points, { unitMm, offset, datum }) → model points   source units → mm, moved by the offset, z from the datum
 *   buildGround({ points, lines, boundary }) → { surface, report }   (tin.js buildSurface, mm)
 *   gradeSurface(existing, pads, { step }) → Surface             existing ground with each pad cut / filled in: flat on the pad,
 *                                                              slopes of `slope` run per rise out to where they meet the ground
 *   cutFill(existing, finished, { cell }) → { cut, fill }       m³ between the two over where they differ
 *   landXml(surfaces, { name, unit }) → text                    LandXML 1.2 surfaces (CivilCraft opens it)
 *   readLandXmlSurfaces(text) → { unit ('m' | 'mm' | 'ft' | 'ftUS'), surfaces: [{ name, pts: [{ x, y, z }], faces: [[i, j, k]],
 *                                 breaklines: [[{ x, y, z }]] }], notes }   (0.6 DF.24) the TIN surfaces of a LandXML 1.2 file
 *                                 — CivilCraft's export: Units (Metric / Imperial linearUnit), Surface/Definition surfType TIN
 *                                 Pnts/P id ("N E Z": northing first) and Faces/F (point ids; i="1" = invisible, left out),
 *                                 SourceData/Breaklines; grid surfaces and the rest are named in notes
 *   readTerrain(w) · placeTerrain(spec) → op · changeTerrain(guid, ch) → op · removeTerrain(guid) → op
 *   readPads(w) · placePad({ level, seed, margin, slope, depth }) → op · changePad(guid, ch) → op · removePads([guid]) → op
 *   readHardscape(w) · placeHardscape({ level, points, kind, thickness }) → op · changeHardscape · removeHardscape
 *   syncTerrain(w, storey) (res-follow.js: pads follow their walls, hardscape follows the grade)
 *   groundAt(w, x, y) → finished grade (world mm) or null (foundations step to it)
 *
 * Coordinates: the site's (world) millimetres; datum = the survey elevation at world z = 0 (the first level's floor, as
 * new-model.js places it). The terrain is IfcGeographicElement (.TERRAIN.) contained in the IfcSite: its body the finished
 * ground as a closed IfcTriangulatedFaceSet (the surface, sides down to a base below its lowest point, a bottom) so sections
 * cut it; CadCraft_Terrain keeps the existing ground (Existing points, Faces — mm), Source, Datum, OffsetX/Y, Interval and the
 * Cut / Fill. A pad is IfcGeographicElement (.USERDEFINED. "Building pad", its outline as a FootPrint) with CadCraft_Pad.
 * Hardscape is IfcSlab (.USERDEFINED. "Paving") with a draped closed body and CadCraft_Hardscape. IFC4 only.
 */
// tin.js (and its libraries) load on first use: the building tools import this module through res-follow.js, and most models
// never have a terrain. The page calls loadTin() when the Terrain tool mounts; a terrain op without it says so.
let TIN = null;
export async function loadTin() { TIN ||= await import('./tin.js'); return TIN; }
const tin = () => { if (!TIN) throw Object.assign(new Error('res.err.tinload'), { key: 'res.err.tinload' }); return TIN; };
const buildSurface = (o) => tin().buildSurface(o), surfaceFromFaces = (o) => tin().surfaceFromFaces(o);
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readWalls, wallOutlines } from './model-walls.js';
import { planLoops, loopAt, labelPoint } from './model-rooms.js';
import { ids, val, inv4, apply4 } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { syncFoundations } from './res-foundation.js';   // footings step to the grade a pad changes
import { parseXml, kids, kid, textOf } from './xml.js';   // 0.6 DF.24: LandXML in (the copy CivilCraft's terrain sync brings)

const IN = 25.4, FT = 304.8;
export const TERRAIN_PSET = 'CadCraft_Terrain', PAD_PSET = 'CadCraft_Pad', HARD_PSET = 'CadCraft_Hardscape';
export const TERRAIN_LIMITS = { points: 20000 };
export const PAD_DEFAULTS = { margin: 5 * FT, slope: 2, depth: 8 * IN };
export const HARD_KINDS = ['driveway', 'walk', 'patio'];
const HARD_THICK = { driveway: 4 * IN, walk: 4 * IN, patio: 4 * IN };

// ------------------------------------------------------------------------------------------------------------ inputs
export function parsePointText(text, { format = 'auto' } = {}) {
  const rows = [];
  for (const line of String(text).split(/\r?\n/)) {
    const s = line.trim();
    if (!s || s.startsWith('#')) continue;
    const parts = s.includes(',') ? s.split(',') : s.includes('\t') ? s.split('\t') : s.split(/\s+/);
    rows.push(parts.map((x) => x.trim()));
  }
  const num = (v) => v !== '' && v !== undefined && Number.isFinite(Number(v));
  const out = [];
  for (const r of rows) {
    const nums = r.map(num);
    let f = format;
    if (f === 'auto') {
      if (r.length >= 4 && nums[0] && nums[1] && nums[2] && nums[3] && Number.isInteger(Number(r[0]))) f = 'PNEZ';
      else if (nums[0] && nums[1] && nums[2]) f = 'NEZ';
      else continue;
    }
    const at = { PNEZD: [2, 1, 3], PNEZ: [2, 1, 3], PENZD: [1, 2, 3], PENZ: [1, 2, 3], NEZ: [1, 0, 2], NEZD: [1, 0, 2], ENZ: [0, 1, 2], ENZD: [0, 1, 2], XYZ: [0, 1, 2] }[f];
    if (!at) continue;
    const [ix, iy, iz] = at;
    if (!(nums[ix] && nums[iy] && nums[iz])) continue;
    out.push({ x: Number(r[ix]), y: Number(r[iy]), z: Number(r[iz]) });
  }
  return out;
}
export function drawingContours(model) {
  const lines = [], points = [];
  const space = (model.blocks || []).find((b) => /^\*model_space$/i.test(b.name));
  for (const e of space?.entities || []) {
    if (e.type === 'LWPOLYLINE' || e.type === 'POLYLINE_2D') {
      const z = Number(e.elevation) || 0;
      if (!z) continue;   // a contour has its elevation
      const pts = (e.vertices || []).map((v) => ({ x: v.x, y: v.y, z }));
      if (e.closed && pts.length) pts.push({ ...pts[0] });
      if (pts.length >= 2) lines.push(pts);
    } else if (e.type === 'POLYLINE_3D') {
      const pts = (e.vertices || []).map((v) => ({ x: v.x, y: v.y, z: v.z || 0 }));
      if (pts.length >= 2 && pts.some((p) => p.z)) lines.push(pts);
    } else if (e.type === 'LINE' && (e.start?.z || e.end?.z)) lines.push([{ x: e.start.x, y: e.start.y, z: e.start.z || 0 }, { x: e.end.x, y: e.end.y, z: e.end.z || 0 }]);
    else if (e.type === 'POINT' && e.position?.z) points.push({ x: e.position.x, y: e.position.y, z: e.position.z });
  }
  return { lines, points };
}
export function thinToGrid(points, cell) {
  const m = new Map();
  for (const p of points) { const k = Math.floor(p.x / cell) + ',' + Math.floor(p.y / cell); const q = m.get(k); if (!q || p.z < q.z) m.set(k, p); }
  return [...m.values()];
}
export function toModel(points, { unitMm = 1, offset = [0, 0], datum = 0 } = {}) {
  return points.map((p) => ({ x: p.x * unitMm - offset[0], y: p.y * unitMm - offset[1], z: (p.z - datum) * unitMm }));
}
/** An offset that brings far-off survey coordinates near the model (their middle onto `to`), or [0, 0] when they are near. */
export function autoOffset(points, unitMm, to = [0, 0]) {
  if (!points.length) return [0, 0];
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const p of points) { x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y); x1 = Math.max(x1, p.x); y1 = Math.max(y1, p.y); }
  const cx = (x0 + x1) / 2 * unitMm, cy = (y0 + y1) / 2 * unitMm;
  return Math.hypot(cx, cy) > 2e6 ? [cx - to[0], cy - to[1]] : [0, 0];
}
export function buildGround({ points = [], lines = [], boundary = null }) {
  return buildSurface({ points, breaklines: lines.map((pts) => ({ pts })), boundary, maxEdge: 0 });
}

// LandXML in (0.6 DF.24, session bim-draw): CivilCraft's surfaces become BimCraft's ground, its own triangles kept
const LX_UNITS = { meter: ['m', 1], millimeter: ['mm', 1], centimeter: ['m', 0.01], kilometer: ['m', 1000], foot: ['ft', 1], intlFoot: ['ft', 1], USSurveyFoot: ['ftUS', 1], inch: ['ft', 1 / 12] };
export function readLandXmlSurfaces(text) {
  const root = parseXml(String(text));
  if (root.name !== 'LandXML') throw Object.assign(new Error('res.err.landxml'), { key: 'res.err.landxml' });
  const notes = [];
  const U = kid(root, 'Units'), uel = U ? (kid(U, 'Metric') || kid(U, 'Imperial')) : null;
  const lin = uel?.attrs?.linearUnit || (uel?.name === 'Imperial' ? 'foot' : 'meter');
  const [unit, k] = LX_UNITS[lin] || (uel?.name === 'Imperial' ? ['ft', 1] : ['m', 1]);
  if (!LX_UNITS[lin]) notes.push(tr('res.lx.unit', { unit: lin }));
  const nez = (s) => { const v = String(s).trim().split(/\s+/).map(Number); return v.length >= 3 && v.every(Number.isFinite) ? { x: v[1] * k, y: v[0] * k, z: v[2] * k } : null; };
  const surfaces = [];
  for (const S of kids(kid(root, 'Surfaces') || { children: [] }, 'Surface')) {
    const name = S.attrs.name || tr('res.lx.surface', { n: surfaces.length + 1 });
    const D = kid(S, 'Definition');
    if (!D || (D.attrs.surfType && D.attrs.surfType !== 'TIN')) { notes.push(tr('res.lx.notin', { name })); continue; }
    const ids2 = new Map(), pts = [];
    for (const P of kids(kid(D, 'Pnts') || { children: [] }, 'P')) { const q = nez(textOf(P)); if (!q) continue; ids2.set(String(P.attrs.id), pts.length); pts.push(q); }
    const faces = [];
    let invisible = 0;
    for (const F of kids(kid(D, 'Faces') || { children: [] }, 'F')) {
      if (F.attrs.i === '1') { invisible++; continue; }
      const f = textOf(F).trim().split(/\s+/).map((x) => ids2.get(x));
      if (f.length === 3 && f.every((x) => x !== undefined)) faces.push(f);
    }
    const breaklines = [];
    const SD = kid(S, 'SourceData'), BL = SD && kid(SD, 'Breaklines');
    for (const B of BL ? kids(BL, 'Breakline') : []) {
      const list = kid(B, 'PntList3D');
      if (!list) continue;
      const v = textOf(list).trim().split(/\s+/).map(Number), line = [];
      for (let i = 0; i + 2 < v.length; i += 3) line.push({ x: v[i + 1] * k, y: v[i] * k, z: v[i + 2] * k });
      if (line.length >= 2) breaklines.push(line);
    }
    if (pts.length < 3) { notes.push(tr('res.lx.empty', { name })); continue; }
    surfaces.push({ name, pts, faces, breaklines, invisible });
  }
  if (!surfaces.length) throw Object.assign(new Error('res.err.landxml'), { key: 'res.err.landxml' });
  return { unit, surfaces, notes };
}

// ------------------------------------------------------------------------------------------------------------ grading
function segDist(p, a, b) { const dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy || 1, t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2)); return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t); }
function inPoly(x, y, P) { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const [xi, yi] = P[i], [xj, yj] = P[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; }
const distTo = (p, P) => (inPoly(p[0], p[1], P) ? 0 : Math.min(...P.map((a, i) => segDist(p, a, P[(i + 1) % P.length]))));
function offsetOut(P, d) {
  const n = P.length, E = P.map((a, i) => { const b = P[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; return { a, u, n: [-u[1], u[0]] }; });
  return E.map((e, i) => {
    const f = E[(i + n - 1) % n], p0 = [f.a[0] - f.n[0] * d, f.a[1] - f.n[1] * d], p1 = [e.a[0] - e.n[0] * d, e.a[1] - e.n[1] * d];
    const c = f.u[0] * e.u[1] - f.u[1] * e.u[0];
    if (Math.abs(c) < 1e-9) return p1;
    const t = ((p1[0] - p0[0]) * e.u[1] - (p1[1] - p0[1]) * e.u[0]) / c;
    return [p0[0] + f.u[0] * t, p0[1] + f.u[1] * t];
  });
}
/** The finished grade at p over existing elevation e: each pad flattens to its z and slopes out at 1 / slope. */
export function gradeAt(p, e, pads) {
  let z = e;
  for (const pd of pads) { const d = distTo(p, pd.poly), r = d / pd.slope; z = Math.max(pd.z - r, Math.min(pd.z + r, z)); }
  return z;
}
export function gradeSurface(existing, pads, { step = 500 } = {}) {
  if (!pads.length) return existing;
  const { pts, faces } = existing.toFaces();
  void faces;
  const out = [];
  for (const p of pts) out.push({ x: p.x, y: p.y, z: gradeAt([p.x, p.y], p.z, pads) });
  const lines = [];
  const s = existing.stats();
  for (const pd of pads) {
    lines.push([...pd.poly, pd.poly[0]].map(([x, y]) => ({ x, y, z: pd.z })));
    // rings round the pad out to where the slope can meet the ground
    const reach = Math.max(Math.abs(s.maxZ - pd.z), Math.abs(pd.z - s.minZ)) * pd.slope + step;
    for (let d = step; d <= reach; d += step) {
      const ring = offsetOut(pd.poly, d), L = ring.reduce((a, q, i) => a + Math.hypot(ring[(i + 1) % ring.length][0] - q[0], ring[(i + 1) % ring.length][1] - q[1]), 0), n = Math.max(ring.length, Math.ceil(L / step));
      for (let k = 0; k < n; k++) {
        const tt = k / n * L;
        let acc = 0, q = ring[0];
        for (let i = 0; i < ring.length; i++) { const a = ring[i], b = ring[(i + 1) % ring.length], l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (acc + l >= tt) { const f = (tt - acc) / (l || 1); q = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]; break; } acc += l; }
        const e = existing.elevationAt(q[0], q[1]);
        if (e === null) continue;
        out.push({ x: q[0], y: q[1], z: gradeAt(q, e, pads) });
      }
    }
  }
  const bnd = existing.outline().sort((a, b) => Math.abs(area(b)) - Math.abs(area(a)))[0];
  const r = buildSurface({ points: out, breaklines: lines.map((pts) => ({ pts })), boundary: bnd || null });
  return r.surface || existing;
}
function area(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a.x * b.y - a.y * b.x; } return s / 2; }
export function cutFill(existing, finished, { cell = 250 } = {}) {
  const b = existing.stats().bounds;
  let cut = 0, fill = 0;
  for (let x = b.minX + cell / 2; x < b.maxX; x += cell) for (let y = b.minY + cell / 2; y < b.maxY; y += cell) {
    const e = existing.elevationAt(x, y), f = finished.elevationAt(x, y);
    if (e === null || f === null) continue;
    const d = (f - e) * cell * cell;
    if (d > 0) fill += d; else cut -= d;
  }
  return { cut: cut / 1e9, fill: fill / 1e9 };
}
export function landXml(surfaces, { name = 'BimCraft site', unit = 'mm' } = {}) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const k = unit === 'm' ? 0.001 : unit === 'ft' ? 1 / FT : 1;
  const out = ['<?xml version="1.0" encoding="UTF-8"?>', '<LandXML xmlns="http://www.landxml.org/schema/LandXML-1.2" version="1.2" date="' + new Date().toISOString().slice(0, 10) + '">',
    '  <Units><' + (unit === 'ft' ? 'Imperial linearUnit="foot" areaUnit="squareFoot" volumeUnit="cubicFeet"' : 'Metric linearUnit="' + (unit === 'm' ? 'meter' : 'millimeter') + '" areaUnit="squareMeter" volumeUnit="cubicMeter"') + '/></Units>',
    '  <Project name="' + esc(name) + '"/>', '  <Surfaces>'];
  for (const s of surfaces) {
    const { pts, faces } = s.surface.toFaces();
    out.push('    <Surface name="' + esc(s.name) + '">', '      <Definition surfType="TIN">', '        <Pnts>');
    pts.forEach((p, i) => out.push('          <P id="' + (i + 1) + '">' + (p.y * k).toFixed(4) + ' ' + (p.x * k).toFixed(4) + ' ' + (p.z * k).toFixed(4) + '</P>'));
    out.push('        </Pnts>', '        <Faces>');
    for (const f of faces) out.push('          <F>' + (f[0] + 1) + ' ' + (f[1] + 1) + ' ' + (f[2] + 1) + '</F>');
    out.push('        </Faces>', '      </Definition>', '    </Surface>');
  }
  out.push('  </Surfaces>', '</LandXML>');
  return out.join('\n') + '\n';
}

// ------------------------------------------------------------------------------------------------------------ IFC
function siteOf(w) { try { return ids(w.api, w.mid, 'IFCSITE')[0] ?? null; } catch (e) { return null; } }
function packPts(pts) { return pts.map((p) => Math.round(p.x) + ',' + Math.round(p.y) + ',' + Math.round(p.z)).join(';'); }
function packFaces(f) { return f.map((x) => x.join(',')).join(';'); }
function unpack(text, n) { return String(text || '').split(';').filter(Boolean).map((r) => r.split(',').map(Number)).filter((r) => r.length === n && r.every(Number.isFinite)); }
export function readTerrain(w) {
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCGEOGRAPHICELEMENT'); } catch (e) { return null; }
  for (const id of list) {
    const ps = w.readPset(id, TERRAIN_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const pts = unpack(ps.Existing, 3).map(([x, y, z]) => ({ x, y, z })), faces = unpack(ps.Faces, 3);
    return { id, guid: val(l.GlobalId), source: ps.Source || 'points', datum: Number(ps.Datum || 0), offset: [Number(ps.OffsetX || 0), Number(ps.OffsetY || 0)], interval: Number(ps.Interval) * w.unitMm || FT, pts, faces, key: ps.ShapeKey || '', cut: Number(ps.Cut || 0), fill: Number(ps.Fill || 0), unit: ps.Unit || 'mm' };
  }
  return null;
}
export function existingSurface(tr0) { return tr0 && tr0.pts.length >= 3 ? surfaceFromFaces({ pts: tr0.pts, faces: tr0.faces }).surface : null; }
export function readPads(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCGEOGRAPHICELEMENT'); } catch (e) { return out; }
  for (const id of list) {
    const ps = w.readPset(id, PAD_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    out.push({ id, guid: val(l.GlobalId), level: ps.Level || '', seed: [Number(ps.SeedX) * w.unitMm, Number(ps.SeedY) * w.unitMm], margin: Number(ps.Margin) * w.unitMm, slope: Number(ps.Slope) || 2, depth: Number(ps.Depth) * w.unitMm, key: ps.ShapeKey || '' });
  }
  return out;
}
export function readHardscape(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCSLAB'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, HARD_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const points = String(ps.Points || '').split(';').map((q) => q.split(',').map(Number)).filter((q) => q.length === 2 && q.every(Number.isFinite)).map(([x, y]) => [x * w.unitMm, y * w.unitMm]);
    out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, level: ps.Level || '', kind: HARD_KINDS.includes(ps.Kind) ? ps.Kind : 'walk', points, thickness: Number(ps.Thickness) * w.unitMm });
  }
  return out;
}
/** A pad's outline (world mm) and level z: the walls' outline round its seed on its level, out by the margin. */
export function padShape(w, pd, levels = readLevels(w)) {
  const lv = levels.find((l) => l.guid === pd.level);
  if (!lv) return null;
  const walls = readWalls(w, lv.id);
  const L = planLoops([...wallOutlines(walls.map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff }))).values()]);
  const o = loopAt(L.outlines, pd.seed);
  if (!o) return null;
  const M = w.storeyWorld(lv.id);
  const poly = offsetOut(o.poly, pd.margin).map(([x, y]) => { const q = apply4(M, x, y, 0); return [q[0], q[1]]; });
  const outline = o.poly.map(([x, y]) => { const q = apply4(M, x, y, 0); return [q[0], q[1]]; });
  return { poly, outline, z: M[14] - pd.depth, slope: pd.slope, storey: lv.id };
}
function shapeKey(...parts) {
  const s = JSON.stringify(parts, (k, v) => (typeof v === 'number' ? Math.round(v * 10) / 10 : v));
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36) + s.length.toString(36);
}
/** World mm → the site's own axes (the terrain, pads and paving are placed in the site). */
function siteMap(w) {
  const site = siteOf(w), sl = site && w.api.GetLine(w.mid, site, false);
  if (!sl?.ObjectPlacement) return (x, y, z) => [x, y, z];
  const Mi = inv4(scaleWorld(w, sl.ObjectPlacement.value));
  return (x, y, z) => apply4(Mi, x, y, z);
}
function scaleWorld(w, lp) { const M = [...w.api.GetWorldTransformMatrix(w.mid, lp)]; M[12] *= w.unitMm; M[13] *= w.unitMm; M[14] *= w.unitMm; return M; }
/** A closed body from a surface: the surface, walls round its outline down to `base`, a bottom. → IfcTriangulatedFaceSet. */
function closedBody(w, surface, base, lift = 0, thickness = null) {
  const { pts, faces } = surface.toFaces();
  const n = pts.length, P = pts.map((p) => [p.x, p.y, p.z + lift]);
  const bottom = (p) => (thickness !== null ? p[2] - thickness : base);
  const B = P.map((p) => [p[0], p[1], bottom(p)]);
  const coords = [...P, ...B], tri = [];
  for (const f of faces) { tri.push([f[0], f[1], f[2]]); tri.push([n + f[0], n + f[2], n + f[1]]); }
  // walls round every boundary loop
  const count = new Map();
  for (const f of faces) for (let k = 0; k < 3; k++) count.set(f[k] + '_' + f[(k + 1) % 3], 1);
  for (const key of count.keys()) { const [a, b] = key.split('_').map(Number); if (!count.has(b + '_' + a)) tri.push([b, a, n + a], [b, n + a, n + b]); }
  const S = siteMap(w), r6 = (v) => round(w.u(v), 3);
  const list = w.make('IFCCARTESIANPOINTLIST3D', coords.map((c) => S(c[0], c[1], c[2]).map(r6)), ...(w.x3 ? [null] : []));
  const PI = (k) => w.T('IFCPOSITIVEINTEGER', k);
  return w.make('IFCTRIANGULATEDFACESET', w.H(list), null, w.T('IFCBOOLEAN', true), tri.map((t3) => t3.map((i) => PI(i + 1))), null);
}
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key) => { throw Object.assign(new Error(key), { key }); };

/** Make the terrain's body again: existing ground with every pad graded in; the cut and fill. */
function writeTerrain(w, trn, ctx = {}) {
  const existing = existingSurface(trn);
  if (!existing) return false;
  const levels = ctx.levels || readLevels(w);
  const pads = readPads(w).map((pd) => padShape(w, pd, levels)).filter(Boolean);
  const key = shapeKey(trn.pts.length, trn.faces.length, trn.pts[0], trn.pts[trn.pts.length - 1], pads.map((p) => [p.poly, p.z, p.slope]));
  if (trn.key === key) return false;
  const finished = gradeSurface(existing, pads);
  const s = existing.stats(), base = Math.min(s.minZ, finished.stats().minZ) - 1000;
  const site = w.api.GetLine(w.mid, trn.site ?? siteOf(w), false);
  void site;
  const body = closedBody(w, finished, base);
  w.styleItem(body, w.surfaceStyle(tr('res.style.ground'), [0.55, 0.62, 0.42], 0));
  w.setShape(trn.id, [w.rep('body', 'Body', 'Tessellation', [body])]);
  const cf = pads.length ? cutFill(existing, finished) : { cut: 0, fill: 0 };
  w.upsertPset(trn.id, TERRAIN_PSET, [['ShapeKey', 'IFCIDENTIFIER', key], ['Cut', 'IFCVOLUMEMEASURE', round(cf.cut, 3)], ['Fill', 'IFCVOLUMEMEASURE', round(cf.fill, 3)], ['MinZ', 'IFCLENGTHMEASURE', round(w.u(s.minZ))], ['MaxZ', 'IFCLENGTHMEASURE', round(w.u(s.maxZ))]]);
  // each pad: its footprint and its share of the cut / fill (all of it when there is one)
  for (const pd of readPads(w)) {
    const sh = padShape(w, pd, levels);
    if (!sh) continue;
    const S = siteMap(w);
    w.setShape(pd.id, [w.rep('foot', 'FootPrint', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', [w.H(w.polyline2(sh.poly.map(([x, y]) => S(x, y, 0)), true))])])]);
    w.upsertPset(pd.id, PAD_PSET, [['PadZ', 'IFCLENGTHMEASURE', round(w.u(sh.z))], ['Cut', 'IFCVOLUMEMEASURE', round(cf.cut / Math.max(1, pads.length), 3)], ['Fill', 'IFCVOLUMEMEASURE', round(cf.fill / Math.max(1, pads.length), 3)]]);
  }
  // hardscape drapes on the new grade
  for (const h of readHardscape(w)) writeHardscape(w, h, finished, levels);
  return true;
}
export function placeTerrain(spec) {
  const s = { source: 'points', interval: FT, datum: 0, offset: [0, 0], ...spec };
  return op((w) => {
    if (!w.v4) fail('res.err.ifc4');
    if (readTerrain(w)) fail('res.err.terrainthere');
    const site = siteOf(w);
    if (!site) fail('res.err.nosite');
    let pts = (s.points || []).filter((p) => [p.x, p.y, p.z].every(Number.isFinite));
    // 0.6 DF.24: a TIN that comes with its triangles (LandXML) keeps them, when it is small enough to keep whole
    const own = Array.isArray(s.faces) && s.faces.length && s.points.length <= TERRAIN_LIMITS.points * 2;
    if (!own && pts.length > TERRAIN_LIMITS.points) pts = thinToGrid(pts, Math.sqrt(boundsArea(pts) / TERRAIN_LIMITS.points) * 1.2);
    const r = own ? surfaceFromFaces({ pts: s.points, faces: s.faces }) : buildGround({ points: pts, lines: s.lines || [], boundary: s.boundary || null });
    if (!r.surface) fail(r.report.errors[0] ? 'res.err.surface' : 'res.err.surface');
    const { pts: P, faces } = r.surface.toFaces();
    if (!s.guid) s.guid = val(w.guid());
    const sl = w.api.GetLine(w.mid, site, false);
    const nm = w.L(tr('res.terrain'));
    const id = w.make('IFCGEOGRAPHICELEMENT', s.guid, w.ownerHistory(), nm, null, nm, w.H(w.placeAt(sl.ObjectPlacement?.value ?? null, 0, 0, 0, 0)), null, null, 'TERRAIN');
    w.noteGuid(s.guid, id);
    w.contain(id, site);
    w.upsertPset(id, TERRAIN_PSET, [['Source', 'IFCLABEL', s.source], ['Datum', 'IFCREAL', round(s.datum, 6)], ['Unit', 'IFCLABEL', s.unit || 'mm'], ['OffsetX', 'IFCREAL', round(s.offset[0], 3)], ['OffsetY', 'IFCREAL', round(s.offset[1], 3)],
      ['Interval', 'IFCPOSITIVELENGTHMEASURE', round(w.u(s.interval))], ['Existing', 'IFCTEXT', packPts(P)], ['Faces', 'IFCTEXT', packFaces(faces)], ['Points', 'IFCINTEGER', P.length], ['ShapeKey', 'IFCIDENTIFIER', '']]);
    writeTerrain(w, { id, site, pts: P.map((p) => ({ x: Math.round(p.x), y: Math.round(p.y), z: Math.round(p.z) })), faces, key: '' });
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
function boundsArea(p) { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const q of p) { x0 = Math.min(x0, q.x); y0 = Math.min(y0, q.y); x1 = Math.max(x1, q.x); y1 = Math.max(y1, q.y); } return Math.max(1, (x1 - x0) * (y1 - y0)); }
/** Change the terrain: { interval, raise (mm: moves the existing ground up or down — a datum correction) }. */
export function changeTerrain(guid, ch) {
  return op((w) => {
    const trn = readTerrain(w);
    if (!trn || trn.guid !== guid) fail('model.err.gone');
    const rows = [];
    if (ch.interval > 0) rows.push(['Interval', 'IFCPOSITIVELENGTHMEASURE', round(w.u(ch.interval))]);
    if (Number.isFinite(ch.raise) && ch.raise) {
      trn.pts = trn.pts.map((p) => ({ ...p, z: p.z + ch.raise }));
      rows.push(['Existing', 'IFCTEXT', packPts(trn.pts)], ['Datum', 'IFCREAL', round(trn.datum - ch.raise / ({ m: 1000, ft: FT, mm: 1 }[trn.unit] || 1), 6)]);
      trn.key = '';
    }
    if (rows.length) w.upsertPset(trn.id, TERRAIN_PSET, rows);
    writeTerrain(w, { ...trn, key: '' });
    return { id: trn.id, ids: [trn.id] };
  });
}
export function removeTerrain(guid) {
  return op((w) => {
    const trn = readTerrain(w);
    if (!trn || trn.guid !== guid) fail('model.err.gone');
    w.dropProduct([trn.id, ...readPads(w).map((p) => p.id), ...readHardscape(w).map((h) => h.id)]);
    return { id: null, ids: [] };
  });
}
export function placePad(spec) {
  const s = { ...PAD_DEFAULTS, ...spec };
  return op((w) => {
    const trn = readTerrain(w);
    if (!trn) fail('res.err.noterrain');
    if (!s.guid) s.guid = val(w.guid());
    const levels = readLevels(w);
    if (!padShape(w, { level: s.level, seed: s.seed, margin: s.margin, slope: s.slope, depth: s.depth }, levels)) fail('model.err.nobuilding2');
    if (!(s.slope >= 1 && s.slope <= 10)) fail('res.err.padslope');
    const site = siteOf(w), sl = w.api.GetLine(w.mid, site, false);
    const nm = w.L(tr('res.pad'));
    const id = w.make('IFCGEOGRAPHICELEMENT', s.guid, w.ownerHistory(), nm, null, w.L('Building pad'), w.H(w.placeAt(sl.ObjectPlacement?.value ?? null, 0, 0, 0, 0)), null, null, 'USERDEFINED');   // i18n-ignore: IFC ObjectType
    w.noteGuid(s.guid, id);
    w.contain(id, site);
    w.upsertPset(id, PAD_PSET, [['Level', 'IFCIDENTIFIER', s.level], ['SeedX', 'IFCLENGTHMEASURE', round(w.u(s.seed[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(s.seed[1]))], ['Margin', 'IFCLENGTHMEASURE', round(w.u(s.margin))], ['Slope', 'IFCREAL', round(s.slope, 3)], ['Depth', 'IFCLENGTHMEASURE', round(w.u(s.depth))]]);
    writeTerrain(w, { ...trn, key: '' }, { levels });
    syncFoundations(w, w.byGuid(s.level));
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
export function changePad(guid, ch) {
  return op((w) => {
    const pd = readPads(w).find((x) => x.guid === guid);
    if (!pd) fail('model.err.gone');
    const rows = [];
    if (Number.isFinite(ch.margin) && ch.margin >= 0) rows.push(['Margin', 'IFCLENGTHMEASURE', round(w.u(ch.margin))]);
    if (Number.isFinite(ch.depth)) rows.push(['Depth', 'IFCLENGTHMEASURE', round(w.u(ch.depth))]);
    if (Number.isFinite(ch.slope)) { if (!(ch.slope >= 1 && ch.slope <= 10)) fail('res.err.padslope'); rows.push(['Slope', 'IFCREAL', round(ch.slope, 3)]); }
    w.upsertPset(pd.id, PAD_PSET, rows);
    const trn = readTerrain(w);
    if (trn) writeTerrain(w, { ...trn, key: '' });
    const st = w.byGuid(pd.level);
    if (st) syncFoundations(w, st);
    return { id: pd.id, ids: [pd.id] };
  });
}
export function removePads(guids) {
  return op((w) => {
    const list = readPads(w).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.map((x) => x.id));
    const trn = readTerrain(w);
    if (trn) writeTerrain(w, { ...trn, key: '' });
    for (const pd of list) { const st = w.byGuid(pd.level); if (st) syncFoundations(w, st); }
    return { id: null, ids: [] };
  });
}

// ---- hardscape ----
function writeHardscape(w, h, finished, levels) {
  const lv = levels.find((l) => l.guid === h.level);
  if (!lv || h.points.length < 3) return false;
  const M = w.storeyWorld(lv.id), Mi = inv4(M);
  const world = h.points.map(([x, y]) => { const q = apply4(M, x, y, 0); return [q[0], q[1]]; });
  // the polygon's corners, a 1 m grid inside it and the ground's own points inside, at the grade (+ 10 mm)
  const pts = [];
  const zAt = (x, y) => finished.elevationAt(x, y);
  for (const [x, y] of world) { const z = zAt(x, y); if (z !== null) pts.push({ x, y, z }); }
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of world) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const step = Math.max(500, Math.sqrt((x1 - x0) * (y1 - y0) / 2000));
  for (let x = x0 + step / 2; x < x1; x += step) for (let y = y0 + step / 2; y < y1; y += step) if (inPoly(x, y, world)) { const z = zAt(x, y); if (z !== null) pts.push({ x, y, z }); }
  const r = buildSurface({ points: pts, breaklines: [], boundary: world.map(([x, y]) => ({ x, y })) });
  if (!r.surface) return false;
  const body = closedBody(w, r.surface, 0, 10, h.thickness);
  w.styleItem(body, w.surfaceStyle(tr('res.style.paving.' + h.kind), h.kind === 'driveway' ? [0.62, 0.62, 0.6] : [0.78, 0.76, 0.72], 0));
  // the slab sits in its level's storey: the body goes from world to that storey's axes
  const site = siteOf(w);
  void Mi; void site;
  w.setShape(h.id, [w.rep('body', 'Body', 'Tessellation', [body])]);
  const st = r.surface.stats();
  w.upsertQto(h.id, 'Qto_SlabBaseQuantities', [['Width', 'length', h.thickness], ['GrossArea', 'area', st.area2d], ['NetArea', 'area', st.area2d], ['GrossVolume', 'volume', st.area3d * h.thickness]]);
  return true;
}
export function placeHardscape(spec) {
  const s = { kind: 'walk', ...spec, points: spec.points.map((p) => [p[0], p[1]]) };
  if (!(s.thickness > 0)) s.thickness = HARD_THICK[s.kind] || 4 * IN;
  return op((w) => {
    if (s.points.length < 3) fail('res.err.hardscape');
    const trn = readTerrain(w);
    if (!trn) fail('res.err.noterrain');
    if (!s.guid) s.guid = val(w.guid());
    const site = siteOf(w), sl = w.api.GetLine(w.mid, site, false);
    const nm = w.L(tr('res.hard.' + s.kind));
    // contained in the site (its body is in the site's axes, like the terrain)
    const id = w.make('IFCSLAB', s.guid, w.ownerHistory(), nm, null, w.L('Paving'), w.H(w.placeAt(sl.ObjectPlacement?.value ?? null, 0, 0, 0, 0)), null, null, 'USERDEFINED');   // i18n-ignore: IFC ObjectType
    w.noteGuid(s.guid, id);
    w.contain(id, site);
    w.upsertPset(id, HARD_PSET, [['Level', 'IFCIDENTIFIER', s.level], ['Kind', 'IFCLABEL', s.kind], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(s.thickness))], ['Points', 'IFCTEXT', s.points.map((p) => round(w.u(p[0]), 3) + ',' + round(w.u(p[1]), 3)).join(';')]]);
    const fin = finishedSurface(w, trn);
    if (!writeHardscape(w, { id, level: s.level, kind: s.kind, points: s.points, thickness: s.thickness }, fin, readLevels(w))) fail('res.err.hardscapeoff');
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
export function changeHardscape(guid, ch) {
  return op((w) => {
    const h = readHardscape(w).find((x) => x.guid === guid);
    if (!h) fail('model.err.gone');
    const rows = [];
    if (ch.thickness > 0) { h.thickness = ch.thickness; rows.push(['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(ch.thickness))]); }
    if (HARD_KINDS.includes(ch.kind)) { h.kind = ch.kind; rows.push(['Kind', 'IFCLABEL', ch.kind]); const l = w.touch(h.id); l.Name = w.L(tr('res.hard.' + ch.kind)); w.write(l); }
    if (rows.length) w.upsertPset(h.id, HARD_PSET, rows);
    writeHardscape(w, h, finishedSurface(w, readTerrain(w)), readLevels(w));
    return { id: h.id, ids: [h.id] };
  });
}
/** Move a path / driveway / patio by (dx, dy) inside a running writer (model-modify.js). */
export function moveHardscapeIn(w, guid, dx, dy) {
  const h = readHardscape(w).find((x) => x.guid === guid);
  if (!h) fail('model.err.gone');
  const points = h.points.map(([x, y]) => [x + dx, y + dy]);
  w.upsertPset(h.id, HARD_PSET, [['Points', 'IFCTEXT', points.map((p) => round(w.u(p[0]), 3) + ',' + round(w.u(p[1]), 3)).join(';')]]);
  writeHardscape(w, { ...h, points }, finishedSurface(w, readTerrain(w)), readLevels(w));
  return h.id;
}
export function removeHardscape(guids) {
  return op((w) => {
    const list = readHardscape(w).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.map((x) => x.id));
    return { id: null, ids: [] };
  });
}
/** The finished ground now (existing graded with every pad). */
export function finishedSurface(w, trn = readTerrain(w)) {
  const ex = existingSurface(trn);
  if (!ex) return null;
  const pads = readPads(w).map((pd) => padShape(w, pd)).filter(Boolean);
  return gradeSurface(ex, pads);
}
let groundCache = { key: null, s: null };
/** Finished grade at a world point (mm), or null where there is no terrain. */
export function groundAt(w, x, y) {
  if (!TIN) return null;
  const trn = readTerrain(w);
  if (!trn) return null;
  const key = trn.key + ':' + w.mid;
  if (groundCache.key !== key) groundCache = { key, s: finishedSurface(w, trn) };
  return groundCache.s?.elevationAt(x, y) ?? null;
}
/** After walls changed on a level: pads on it (and so the terrain and the hardscape) follow. */
export function syncTerrain(w, storey, ctx = {}) {
  if (!TIN) return 0;   // the ground hasn't been loaded on this page: nothing of it can have changed here
  const trn = readTerrain(w);
  if (!trn) return 0;
  const levels = ctx.levels || readLevels(w);
  const pads = readPads(w);
  if (!pads.some((p) => levels.find((l) => l.guid === p.level)?.id === storey)) return 0;
  return writeTerrain(w, trn, { levels }) ? 1 : 0;
}
export { labelPoint };
