/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-dormer.js — dormers on a roof (0.6 round 2, DC.58 "drawing comforts", session bim-comforts_PART_2): a gable or a shed
 * dormer stood on one face of a roof the Roof tool made (res-roof.js), with its front wall, its two cheeks, its own roof, and
 * the hole it needs cut in the roof below it. No DOM: bin/test-bimcraft.mjs --comforts runs it in Node. Plan millimetres in the
 * walls' level (where the roof's faces are), heights above that level.
 *
 *   DORMER_DEFAULTS · DORMER_KINDS ('gable' | 'shed')
 *   roofPlans(w, storey?) → [{ roof, plan, wallsLv }]            the roofs (on a storey), with their faces and heights
 *   faceAt(plan, p) → face | null                                  the face over a plan point (the highest)
 *   dormerGeometry(plan, face, spec) → { faces, walls, cut, footprint, ridge, zf, zp } | { error }
 *        spec { at: [x, y] (the middle of its front, on the roof), kind, width (outside of its walls), height (front wall, from
 *        the roof's top to the dormer's eave), pitch (its roof, degrees), overhang, wall (thickness) }
 *   readDormers(w) · placeDormer({ roof, at, kind, width, height, pitch, overhang }) → op · changeDormer(guid, ch) → op ·
 *   removeDormers([guid]) → op · syncDormers(w, storey, ctx) (res-follow.js: the roof under it was made again)
 *
 * The dormer's axes: X along the face's eave, Y up the slope (the face's own n). Its front wall stands on the roof where the
 * dormer starts and rises `height` above the roof's top there; a gable dormer's roof is two planes at `pitch` meeting at a
 * ridge square to the eave, a shed dormer's one plane rising at `pitch` (less steep than the roof) from its front; each runs
 * back until it meets the roof (plane meets plane: a straight valley). Its cheeks are the triangles between the roof and its
 * eaves.
 *
 * Written as (Design Transfer View): an IfcRoof (.GABLE_ROOF. / .SHED_ROOF., ObjectType "Dormer") contained in the roof's
 * storey, aggregating its roof (one IfcSlab .ROOF. per plane, swept straight up through its thickness, the roofing style) and
 * its walls (IfcWall: the front wall, the two cheeks); CadCraft_Dormer (Roof = the roof's GlobalId, Face, X, Y, Kind, Width,
 * Height, PitchDegrees, Overhang, WallThickness, ShapeKey). The hole: an IfcOpeningElement voiding the roof's slab of that face
 * (IfcRelVoidsElement), the dormer's inside (within its walls' inner faces, up to where its roof meets the roof) swept up
 * through the slab; CadCraft_DormerCut (Dormer = its GlobalId). When the roof is made again (its walls moved), the dormer is
 * made again on the new face; a roof that is gone takes its dormers with it.
 */
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readDerived, storeyLoops } from './model-slabs.js';
import { roofGeometry, edgeKinds, ROOF_DEFAULTS } from './res-roof.js';
import { faceZ } from './res-skeleton.js';
import { loopAt, inPoly } from './model-rooms.js';
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { cross3, dot3, sub3 } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
import { ringArea as area2 } from './geom2d.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const D2R = Math.PI / 180;
const IN = 25.4;
export const DORMER_PSET = 'CadCraft_Dormer', CUT_PSET = 'CadCraft_DormerCut';
export const DORMER_KINDS = ['gable', 'shed'];
export const DORMER_DEFAULTS = { kind: 'gable', width: 6 * 12 * IN, height: 4 * 12 * IN, pitch: Math.atan(8 / 12) / D2R, shedPitch: Math.atan(3 / 12) / D2R, overhang: 6 * IN, wall: 5.5 * IN };
const fail = (key) => { throw Object.assign(new Error(key), { key }); };
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);

// ------------------------------------------------------------------------------------------------------------ the roofs
/** The Roof tool's roofs (on one storey, or all), each with its plan exactly as written (the plate height, the fascia). */
export function roofPlans(w, storey = null, ctx = {}) {
  const levels = ctx.levels || readLevels(w), out = [];
  for (const r of readDerived(w).roofs) {
    if (storey !== null && r.storey !== storey) continue;
    const wallsLv = levels.find((l) => l.guid === r.walls);
    if (!wallsLv) continue;
    const L = storeyLoops(w, wallsLv.id);
    const outline = loopAt(L.outlines, r.seed);
    if (!outline) continue;
    const top = L.walls.reduce((m, x) => Math.max(m, x.baseOffset + x.height), 0) || wallsLv.height;
    const plate = Number.isFinite(r.plate) && r.plate > 0 ? r.plate : top;
    const fascia = Number.isFinite(r.fascia) ? r.fascia : ROOF_DEFAULTS.fascia;
    const plan = roofGeometry(outline.poly, edgeKinds(outline.poly, L.walls, r), { thickness: r.thickness, plate, fascia, fasciaT: ROOF_DEFAULTS.fasciaT, soffit: r.soffit !== false });
    if (plan.error) continue;
    out.push({ roof: r, plan, wallsLv });
  }
  return out;
}
/** The face of a roof's plan over p (the highest where faces overlap), or null. */
export function faceAt(plan, p) {
  let best = null, bz = -Infinity;
  for (const f of plan.faces) if (inPoly(p[0], p[1], f.poly)) { const z = faceZ(f, p); if (z > bz) { bz = z; best = f; } }
  return best;
}

// ------------------------------------------------------------------------------------------------------------ geometry
/**
 * The dormer's parts in the walls' plan (x, y) and heights (z) — every polygon in 3D. → { faces: [{ pts }] (its roof planes,
 * underside), walls: [{ pts }] (vertical polygons: front, cheeks; outer face, each to be swept `wall` thick inward), cut (the
 * hole in the roof, plan), footprint (plan, with the overhang), ridge (plan segments), zf, zp, tv } | { error }.
 */
export function dormerGeometry(plan, f, spec0) {
  const s = { ...DORMER_DEFAULTS, ...spec0 };
  if (!DORMER_KINDS.includes(s.kind)) return { error: 'comforts.err.dormerkind' };
  // 0.10 BK.73: refused only when it cannot be built: no width, height or wall (under 10 mm), an overhang below 0, or cheeks that meet
  // (width not over twice the wall: the hole in the roof would turn inside out). The usual sizes are advice (draw-advice.js USUAL.dormer)
  if (!(s.width >= 10 && s.height >= 10 && s.wall >= 10 && s.overhang >= 0 && s.width > 2 * s.wall + 10) || !(s.width <= 100000 && s.height <= 100000 && s.overhang <= 100000)) return { error: 'comforts.err.dormersize' };
  const sm = 1 / f.speed, sd = Math.tan(s.pitch * D2R);
  if (!(s.pitch > 1 && s.pitch < 80)) return { error: 'model.err.pitch' };
  if (s.kind === 'shed' && !(sd < sm - 0.05)) return { error: 'comforts.err.shedpitch' };
  const T = plan.thickness, tv = T * Math.sqrt(1 + sm * sm), tvd = T * Math.sqrt(1 + sd * sd);
  const X = f.u, Y = f.n, O = s.at, W = s.width, h = W / 2, tw = s.wall, ov = s.overhang, Hf = s.height;
  const P = (x, y) => [O[0] + X[0] * x + Y[0] * y, O[1] + X[1] * x + Y[1] * y];
  const P3 = (x, y, z) => [...P(x, y), z];
  const zf = faceZ(f, O) + tv, zp = zf + Hf;   // the roof's top at the front; the dormer's eave (its walls' top)
  const out = { faces: [], walls: [], ridge: [], zf, zp, tv, tvd, kind: s.kind, spec: s };
  let yBack, cut, foot;
  if (s.kind === 'shed') {
    const yb = Hf / (sm - sd), yt = (Hf + tvd) / (sm - sd);
    yBack = yt;
    // its roof: one plane through the front wall's top, rising at its pitch, run back until its top meets the roof
    out.faces.push({ pts: [P3(-h - ov, -ov, zp - sd * ov), P3(h + ov, -ov, zp - sd * ov), P3(h + ov, yt, zp + sd * yt), P3(-h - ov, yt, zp + sd * yt)] });
    // cheeks: between the roof's underside and the dormer's roof underside
    const yc = (Hf + tv) / (sm - sd);
    for (const x of [-h, h - tw]) out.walls.push({ side: true, x, pts: [[0, zf - tv], [yc, zp + sd * yc], [0, zp]] });
    out.walls.push({ front: true, pts: [[-h, zf - tv], [h, zf - tv], [h, zp], [-h, zp]] });
    cut = [P(-h + tw, tw), P(h - tw, tw), P(h - tw, yb), P(-h + tw, yb)];
    foot = [P(-h - ov, -ov), P(h + ov, -ov), P(h + ov, yt), P(-h - ov, yt)];
  } else {
    const yr = (Hf + sd * h) / sm;   // the ridge's underside meets the roof's top
    const ytAt = (x) => (Hf + tvd + sd * (h - Math.abs(x))) / sm;   // where a plane's top meets the roof's top, at x
    yBack = ytAt(0);
    const zr = zp + sd * h;
    for (const sg of [-1, 1]) {
      const xe = sg * (h + ov), ze = zp - sd * ov;
      const pts = [P3(xe, -ov, ze), P3(0, -ov, zr), P3(0, ytAt(0), zr), P3(xe, ytAt(h + ov), ze)];
      out.faces.push({ pts: sg < 0 ? pts : pts.slice().reverse() });
    }
    out.ridge.push([...P(0, -ov), ...P(0, ytAt(0))]);
    const yc = (Hf + tv) / sm;
    for (const x of [-h, h - tw]) out.walls.push({ side: true, x, pts: [[0, zf - tv], [yc, zp], [0, zp]] });
    out.walls.push({ front: true, pts: [[-h, zf - tv], [h, zf - tv], [h, zp], [0, zr], [-h, zp]] });
    const yi = (Hf + sd * tw) / sm;
    cut = [P(-h + tw, tw), P(h - tw, tw), P(h - tw, yi), P(0, yr), P(-h + tw, yi)];
    foot = [P(-h - ov, -ov), P(h + ov, -ov), P(h + ov, ytAt(h + ov)), P(0, ytAt(0)), P(-h - ov, ytAt(h + ov))];
  }
  // it must stand on this one face (the eave, hips and valleys of the roof stay where they are)
  if (![...cut, P(-h, 0), P(h, 0), P(0, yBack * 0.999)].every((q) => inPoly(q[0], q[1], f.poly))) return { error: 'comforts.err.dormerfit' };
  out.cut = cut; out.footprint = foot; out.X = X; out.Y = Y; out.O = O; out.yBack = yBack;
  out.cutZ = [zf - tv - 50, zf + sm * yBack + tv + 50];
  return out;
}

// ------------------------------------------------------------------------------------------------------------ reading
export function readDormers(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCROOF'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, DORMER_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const num = (k) => Number(ps[k] || 0) * w.unitMm;
    out.push({
      id, guid: val(l.GlobalId), storey: so.get(id) ?? null, roof: ps.Roof || '', face: Number(ps.Face ?? -1), at: [num('X'), num('Y')], kind: DORMER_KINDS.includes(ps.Kind) ? ps.Kind : 'gable',
      width: num('Width'), height: num('Height'), pitch: Number(ps.PitchDegrees || DORMER_DEFAULTS.pitch), overhang: num('Overhang'), wall: num('WallThickness') || DORMER_DEFAULTS.wall, key: ps.ShapeKey || '', parts: partsOf(w, id),
    });
  }
  return out;
}
function partsOf(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value); }
  return [];
}
function cutsOf(w, guid) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCOPENINGELEMENT'); } catch (e) { return out; }
  for (const id of list) { const ps = w.readPset(id, CUT_PSET); if (ps && ps.Dormer === guid) out.push(id); }
  return out;
}
/** The slab of a roof face (CadCraft_RoofFace Edge), or null. */
function faceSlab(w, roof, face) {
  for (const p of roof.parts) { const ps = w.readPset(p, 'CadCraft_RoofFace'); if (ps && Number(ps.Edge) === face.edge) return p; }
  return null;
}
function shapeKey(...parts) {
  const s = JSON.stringify(parts, (k, v) => (typeof v === 'number' ? Math.round(v * 100) / 100 : v));
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36) + s.length.toString(36);
}

// ------------------------------------------------------------------------------------------------------------ writing
const unit3 = (a) => { const l = Math.hypot(...a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
/** A planar polygon (3D, the storey's axes) swept straight up by `depth`: the frame on its plane, the profile in it. */
function planarUp(w, pts, depth) {
  let n = unit3(cross3(sub3(pts[1], pts[0]), sub3(pts[2], pts[0])));
  if (n[2] < 0) n = n.map((v) => -v);
  let hx = unit3(cross3([0, 0, 1], n));
  if (Math.hypot(...cross3([0, 0, 1], n)) < 1e-9) hx = [1, 0, 0];
  const hy = cross3(n, hx), o = pts[0];
  let prof = pts.map((p) => [dot3(sub3(p, o), hx), dot3(sub3(p, o), hy)]);
  if (area2(prof) < 0) prof = prof.reverse();
  const dir = [dot3([0, 0, 1], hx), dot3([0, 0, 1], hy), dot3([0, 0, 1], n)];
  return w.extrudeAt(w.profile(prof), w.axisFrame(o, n, hx), depth, dir);
}

function writeDormer(w, d, ctx = {}) {
  const plans = ctx.plans || roofPlans(w);
  const rp = plans.find((x) => x.roof.guid === d.roof);
  if (!rp) return { gone: true };
  const f = (d.face >= 0 && rp.plan.faces.find((x) => x.edge === d.face && inPoly(d.at[0], d.at[1], x.poly))) || faceAt(rp.plan, d.at);
  const slab = f ? faceSlab(w, rp.roof, f) : null;
  const key = shapeKey(d.kind, d.at, d.width, d.height, d.pitch, d.overhang, d.wall, rp.roof.key, rp.roof.parts, f ? [f.edge, f.poly, f.speed, f.start] : null);
  const oldCuts = cutsOf(w, d.guid);
  if (d.key === key && d.parts.length && oldCuts.length) return { same: true };
  if (d.parts.length) w.dropProduct(d.parts);
  if (oldCuts.length) w.dropProduct(oldCuts);
  const G = f ? dormerGeometry(rp.plan, f, d) : { error: 'comforts.err.dormerface' };
  if (G.error) { w.upsertPset(d.id, DORMER_PSET, [['ShapeKey', 'IFCIDENTIFIER', '']]); return { error: G.error }; }
  // walls' plan → the roof's storey
  const roofSt = rp.roof.storey;
  const M = mul4(inv4(w.storeyWorld(roofSt)), w.storeyWorld(rp.wallsLv.id));
  const P = (q) => apply4(M, q[0], q[1], q[2]);
  const D = (v) => { const a = apply4(M, v[0], v[1], v[2]), o = apply4(M, 0, 0, 0); return [a[0] - o[0], a[1] - o[1], a[2] - o[2]]; };
  const host = w.api.GetLine(w.mid, roofSt, false);
  const place = () => w.placeAt(host.ObjectPlacement.value, 0, 0, 0, 0);
  const parts = [];
  const roofing = w.surfaceStyle(tr('model.style.roofing'), [0.42, 0.33, 0.3], 0), trim = w.surfaceStyle(tr('res.style.trim'), [0.93, 0.92, 0.88], 0);
  const slabName = w.L(tr('comforts.dormer.roof'));
  for (const fc of G.faces) {
    const sid = w.make('IFCSLAB', w.guid(), w.ownerHistory(), slabName, null, slabName, w.H(place()), null, null, 'ROOF');
    const solid = planarUp(w, fc.pts.map(P), G.tvd);
    w.styleItem(solid, roofing);
    w.setShape(sid, [w.rep('body', 'Body', 'SweptSolid', [solid])]);
    parts.push(sid);
  }
  // the walls: each polygon in its own vertical plane (outer face), swept its thickness inward
  const X3 = [G.X[0], G.X[1], 0], Y3 = [G.Y[0], G.Y[1], 0];
  const at3 = (x, y, z) => [G.O[0] + G.X[0] * x + G.Y[0] * y, G.O[1] + G.X[1] * x + G.Y[1] * y, z];
  const wallName = (front) => w.L(tr(front ? 'comforts.dormer.front' : 'comforts.dormer.cheek'));
  for (const wl of G.walls) {
    // front: plane x–z at y = 0, swept +Y; cheeks: plane y–z at x, swept +X (both inward from x = −w/2 / from x = w/2 − t)
    const o3 = wl.front ? at3(0, 0, 0) : at3(wl.x, 0, 0);
    const xd = wl.front ? X3 : Y3, sweep = wl.front ? Y3 : X3;
    const zd = D(sweep), xd2 = D(xd);
    const yd = cross3(zd, xd2);
    let prof = wl.pts.map(([a, z]) => [a, z]);
    // the frame's own y must point up: else turn the sweep the other way round and mirror
    if (yd[2] < 0) prof = prof.map(([a, z]) => [a, -z]);
    if (area2(prof) < 0) prof = prof.reverse();
    const id = w.make('IFCWALL', w.guid(), w.ownerHistory(), wallName(wl.front), null, wallName(wl.front), w.H(place()), null, null, ...(w.v4 ? ['STANDARD'] : []));
    const solid = w.extrudeAt(w.profile(prof), w.axisFrame(P(o3), zd, xd2), G.spec.wall);
    w.styleItem(solid, trim);
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [solid])]);
    parts.push(id);
  }
  let rel = null;
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const x = w.api.GetLine(w.mid, rid, false); if (x.RelatingObject?.value === d.id) { rel = rid; break; } }
  if (rel) { const x = w.touch(rel); x.RelatedObjects = parts.map((p) => w.H(p)); w.write(x); }
  else w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(d.id), parts.map((p) => w.H(p)));
  // the hole in the roof: the dormer's inside, swept up through the slab of its face
  if (slab) {
    const sl = w.api.GetLine(w.mid, slab, false);
    const Ms = mul4(inv4(w.relMatrix(host.ObjectPlacement.value, sl.ObjectPlacement.value)), M);   // walls' plan → the slab's own axes
    const pts = G.cut.map((q) => { const r = apply4(Ms, q[0], q[1], 0); return [r[0], r[1]]; });
    const z0 = apply4(Ms, 0, 0, G.cutZ[0])[2];
    const opl = w.make('IFCLOCALPLACEMENT', w.H(sl.ObjectPlacement.value), w.H(w.axis3(0, 0, 0, 0)));
    const g = w.guid(), nm = w.L(tr('comforts.dormer.cut'));
    const oid = w.make('IFCOPENINGELEMENT', g, w.ownerHistory(), nm, null, null, w.H(opl), null, null, ...(w.v4 ? ['OPENING'] : []));
    w.setShape(oid, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(pts), z0, G.cutZ[1] - G.cutZ[0])])]);
    w.make('IFCRELVOIDSELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(slab), w.H(oid));
    w.upsertPset(oid, CUT_PSET, [['Dormer', 'IFCIDENTIFIER', d.guid]]);
  }
  w.upsertPset(d.id, DORMER_PSET, [['Face', 'IFCINTEGER', f.edge], ['ShapeKey', 'IFCIDENTIFIER', key]]);
  if (w.v4) { const l = w.touch(d.id); l.PredefinedType = d.kind === 'shed' ? 'SHED_ROOF' : 'GABLE_ROOF'; w.write(l); }
  return { made: true, geometry: G };
}
function rowsOf(w, d) {
  const L = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))];
  return [['Roof', 'IFCIDENTIFIER', d.roof], ['Kind', 'IFCLABEL', d.kind], L('X', d.at[0]), L('Y', d.at[1]), L('Width', d.width), L('Height', d.height), ['PitchDegrees', 'IFCREAL', round(d.pitch, 6)], L('Overhang', d.overhang), L('WallThickness', d.wall), ['Face', 'IFCINTEGER', Number.isFinite(d.face) ? d.face : -1]];
}
function specOf(s) {
  const kind = DORMER_KINDS.includes(s.kind) ? s.kind : 'gable';
  return { ...DORMER_DEFAULTS, pitch: kind === 'shed' ? DORMER_DEFAULTS.shedPitch : DORMER_DEFAULTS.pitch, ...s, kind };
}
export function placeDormer(spec) {
  const s = specOf(spec);
  return op((w) => {
    if (!s.guid) s.guid = val(w.guid());
    const plans = roofPlans(w);
    const rp = plans.find((x) => x.roof.guid === s.roof);
    if (!rp) fail('comforts.err.dormerroof');
    const f = faceAt(rp.plan, s.at);
    if (!f) fail('comforts.err.dormerface');
    const G = dormerGeometry(rp.plan, f, s);
    if (G.error) fail(G.error);
    const st = w.api.GetLine(w.mid, rp.roof.storey, false);
    const nm = w.L(tr('comforts.dormer'));
    const id = w.make('IFCROOF', s.guid, w.ownerHistory(), nm, null, w.L('Dormer'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(w.v4 ? [s.kind === 'shed' ? 'SHED_ROOF' : 'GABLE_ROOF'] : []));   // i18n-ignore: IFC ObjectType
    w.noteGuid(s.guid, id);
    w.contain(id, rp.roof.storey);
    w.upsertPset(id, DORMER_PSET, rowsOf(w, { ...s, face: f.edge }));
    const r = writeDormer(w, { ...s, face: f.edge, id, key: '', parts: [] }, { plans });
    if (r.error) fail(r.error);
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
export function changeDormer(guid, ch) {
  return op((w) => {
    const d = readDormers(w).find((x) => x.guid === guid);
    if (!d) fail('model.err.gone');
    const nx = { ...d };
    if (DORMER_KINDS.includes(ch.kind) && ch.kind !== d.kind) { nx.kind = ch.kind; if (!Number.isFinite(ch.pitch)) nx.pitch = ch.kind === 'shed' ? DORMER_DEFAULTS.shedPitch : DORMER_DEFAULTS.pitch; }
    for (const k of ['width', 'height', 'pitch', 'overhang', 'wall']) if (Number.isFinite(ch[k])) nx[k] = ch[k];
    if (Array.isArray(ch.at)) { nx.at = ch.at.slice(); nx.face = -1; }
    const rp = roofPlans(w).find((x) => x.roof.guid === d.roof);
    if (!rp) fail('comforts.err.dormerroof');
    const f = faceAt(rp.plan, nx.at);
    if (!f) fail('comforts.err.dormerface');
    const G = dormerGeometry(rp.plan, f, nx);
    if (G.error) fail(G.error);
    nx.face = f.edge;
    w.upsertPset(d.id, DORMER_PSET, rowsOf(w, nx));
    writeDormer(w, { ...nx, key: '' });
    return { id: d.id, ids: [d.id] };
  });
}
export function removeDormers(guids) {
  return op((w) => {
    const list = readDormers(w).filter((x) => guids.includes(x.guid));
    const cuts = list.flatMap((x) => cutsOf(w, x.guid));
    if (list.length) w.dropProduct([...list.flatMap((x) => [x.id, ...x.parts]), ...cuts]);
    return { id: null, ids: [] };
  });
}
/** The dormers on roofs over this level's walls: made again when their roof was (res-follow.js, after model-slabs.js). */
export function syncDormers(w, storey, ctx = {}) {
  let all;
  try { all = readDormers(w); } catch (e) { return 0; }
  if (!all.length) return 0;
  const levels = ctx.levels || readLevels(w), lv = levels.find((l) => l.id === storey);
  if (!lv) return 0;
  const plans = roofPlans(w, null, { levels });
  const roofs = readDerived(w).roofs;
  let n = 0;
  for (const d of all) {
    const r = roofs.find((x) => x.guid === d.roof);
    if (r && r.walls !== lv.guid && r.storey !== storey) continue;
    if (!r) { w.dropProduct([d.id, ...d.parts, ...cutsOf(w, d.guid)]); n++; continue; }   // its roof is gone
    const res = writeDormer(w, d, { plans });
    if (res.made || res.error) n++;
  }
  return n;
}
