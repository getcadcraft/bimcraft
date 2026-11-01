/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-roof.js — automatic roofs from the walls (0.5 part 4, RC.1): a pitch per wall (pitched / gable / none), shed and
 * hip presets, overhangs, the plate height, ridges / hips / valleys on any outline, fascia and soffit. No DOM:
 * bin/test-bimcraft.mjs --res runs it in Node. Plan millimetres; heights above the walls' level.
 *
 *   edgeWalls(outline, walls) → [guid | null]   the drawn wall under each edge of the building's outline
 *   edgeKinds(outline, walls, roof) → [{ kind: 'pitch'|'gable'|'none', pitch, overhang, wall }]   from the roof's settings
 *   roofGeometry(outline, kinds, { thickness, plate, fascia, fasciaT }) → { faces, eave, gables, lines, ridge, fascia,
 *     soffit, area, projected, top } | { error }
 *   heightAt(plan, p) → the underside's height over p (null outside)
 *   parseEdges(text) / formatEdges(map)   the roof's per-wall settings as stored (CadCraft_Roof.Edges)
 *   presetEdges(outline, walls, preset, at) → map   hip | gable-short | gable-long | shed (low side nearest `at`)
 *   writeRoofParts(w, r, ctx)   the IFC writer model-slabs.js calls: slabs per face, gable walls, fascia, soffit
 *
 * Every plane passes through the outer face of its wall at the plate height (z = plate there): pitch per wall changes
 * where hips and valleys fall, never the plate. A gable or "none" edge doesn't move (res-skeleton.js speed 0): a gable
 * gets a wall up to the roof and a rake overhang; "none" stops flush (a roof against a taller wall). The skeleton runs on
 * the eave line (outline pushed out by each edge's overhang, less the fascia board), each edge starting at the height
 * its plane has there, so eaves of different pitches drop to different heights, as framed.
 */
import { skeleton, faceZ, polyArea } from './res-skeleton.js';
import { ids, inv4, mul4, apply4 } from './ifc-util.js';
import { round } from './model-write.js';
import { ROOF_DEFAULTS, segDist, roofGeometry, heightAt } from './res-roofplan.js';   // the pure part (TrussCraft shares it)
import { t as tr } from './i18n.js';

const D2R = Math.PI / 180;
const IN = 25.4;
export { ROOF_DEFAULTS, segDist, roofGeometry, heightAt };   // re-exported: every importer of res-roof.js keeps working
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];

// ---------------------------------------------------------------------------------------------------- edges and walls
export function edgeWalls(outline, walls) {
  return outline.map((a, i) => {
    const b = outline[(i + 1) % outline.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < 1) return null;
    const u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    let best = null;
    for (const w of walls) {
      const wl = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
      if (wl < 1) continue;
      const wu = [(w.b[0] - w.a[0]) / wl, (w.b[1] - w.a[1]) / wl];
      if (Math.abs(cross(u, wu)) > 1e-4) continue;
      const d = Math.abs(cross(wu, sub(m, w.a)));
      if (Math.abs(d - w.t / 2) > 2) continue;
      const s = dot(wu, sub(m, w.a));
      if (s < -w.t || s > wl + w.t) continue;
      const score = Math.abs(d - w.t / 2) + Math.max(0, -s, s - wl);
      if (!best || score < best.score) best = { guid: w.guid, score };
    }
    return best ? best.guid : null;
  });
}
/** "guid=p:35:450;guid=g;guid=n" ↔ Map(key → { kind, pitch?, overhang? }) (a key is a wall's GlobalId, or "@i" for an edge
 *  with no drawn wall). */
export function parseEdges(text) {
  const m = new Map();
  for (const part of String(text || '').split(';')) {
    const [k, v] = part.split('=');
    if (!k || !v) continue;
    const [c, p, o] = v.split(':');
    const kind = c === 'g' ? 'gable' : c === 'n' ? 'none' : c === 'p' ? 'pitch' : null;
    if (!kind) continue;
    const e = { kind };
    if (kind === 'pitch' && p !== undefined && p !== '' && Number.isFinite(Number(p))) e.pitch = Number(p);
    if (o !== undefined && o !== '' && Number.isFinite(Number(o))) e.overhang = Number(o);
    m.set(k.trim(), e);
  }
  return m;
}
export function formatEdges(map) {
  const out = [];
  for (const [k, e] of map) {
    if (!e || !e.kind) continue;
    const c = e.kind === 'gable' ? 'g' : e.kind === 'none' ? 'n' : 'p';
    const tail = [c === 'p' && Number.isFinite(e.pitch) ? round(e.pitch, 4) : '', Number.isFinite(e.overhang) ? round(e.overhang, 2) : ''];
    while (tail.length && tail[tail.length - 1] === '') tail.pop();
    out.push(k + '=' + [c, ...tail].join(':'));
  }
  return out.join(';');
}
const keyOf = (guids, i) => guids[i] || '@' + i;

/** Each outline edge's kind, pitch and overhang from the roof's settings (per-wall Edges, else the old Gables list). */
export function edgeKinds(outline, walls, roof) {
  const guids = edgeWalls(outline, walls);
  const map = roof.edges instanceof Map ? roof.edges : parseEdges(roof.edges);
  const gables = new Set(roof.gables || []);
  return outline.map((_, i) => {
    const e = map.get(keyOf(guids, i)) || (gables.has(i) && !map.size ? { kind: 'gable' } : { kind: 'pitch' });
    const pitch = e.kind === 'pitch' ? (Number.isFinite(e.pitch) ? e.pitch : roof.pitch) : null;
    const overhang = e.kind === 'none' ? 0 : Number.isFinite(e.overhang) ? e.overhang : e.kind === 'gable' ? (Number.isFinite(roof.rake) ? roof.rake : roof.overhang) : roof.overhang;
    return { kind: e.kind, pitch, overhang, wall: guids[i] };
  });
}

/** Per-wall settings for a preset over an outline: hip (all pitched), gables on the short / long sides (four-sided only),
 *  shed (the edge nearest `at` is the low eave, the rest gable). → Map | null (can't). */
export function presetEdges(outline, walls, preset, at = null) {
  const guids = edgeWalls(outline, walls), m = new Map(), n = outline.length;
  const len = outline.map((p, i) => Math.hypot(outline[(i + 1) % n][0] - p[0], outline[(i + 1) % n][1] - p[1]));
  if (preset === 'hip') return m;
  if (preset === 'gable-short' || preset === 'gable-long') {
    if (n !== 4) return null;
    const short = len[0] + len[2] <= len[1] + len[3] ? [0, 2] : [1, 3];
    for (const i of preset === 'gable-short' ? short : short.map((x) => x + 1)) m.set(keyOf(guids, i), { kind: 'gable' });
    return m;
  }
  if (preset === 'shed') {
    let low = 0;
    if (at) {
      let best = Infinity;
      outline.forEach((a, i) => { const b = outline[(i + 1) % n], d = segDist(at, a, b); if (d < best) { best = d; low = i; } });
    } else low = len.indexOf(Math.max(...len));
    for (let i = 0; i < n; i++) if (i !== low) m.set(keyOf(guids, i), { kind: 'gable' });
    return m;
  }
  return null;
}

// ------------------------------------------------------------------------------------------------------------ writing
/**
 * Make a roof's parts again: { slabs per face, gable walls, one fascia member, one soffit covering } aggregated by the
 * roof. r = model-slabs.js readDerived roof (+ edges, plate, rake, fascia, soffit); ctx = { levels, L (storeyLoops),
 * outline, wallsLv, top, shapeKey }. → { parts, plan } | null (the outline can't be roofed: the old parts stay).
 */
export function writeRoofParts(w, r, { wallsLv, L, outline, top }) {
  const kinds = edgeKinds(outline.poly, L.walls, r);
  const plate = Number.isFinite(r.plate) && r.plate > 0 ? r.plate : top;
  const fascia = Number.isFinite(r.fascia) ? r.fascia : ROOF_DEFAULTS.fascia;
  const plan = roofGeometry(outline.poly, kinds, { thickness: r.thickness, plate, fascia, fasciaT: ROOF_DEFAULTS.fasciaT, soffit: r.soffit !== false });
  if (plan.error) return null;
  const host = w.api.GetLine(w.mid, r.storey, false);
  const M = mul4(inv4(w.storeyWorld(r.storey)), w.storeyWorld(wallsLv.id));
  const P = (x, y, z) => apply4(M, x, y, z), D = (x, y, z) => { const a = apply4(M, x, y, z), o = apply4(M, 0, 0, 0); return [a[0] - o[0], a[1] - o[1], a[2] - o[2]]; };
  const X3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  if (r.parts.length) w.dropProduct(r.parts);
  const parts = [];
  const place = () => w.placeAt(host.ObjectPlacement.value, 0, 0, 0, 0);
  // faces: each in its own sloped plane, swept straight up so neighbours meet on the vertical plane of their ridge / hip
  const slabName = w.L(tr('model.roof.slab'));
  const roofing = w.surfaceStyle(tr('model.style.roofing'), [0.42, 0.33, 0.3], 0);
  for (const f of plan.faces) {
    const cos = Math.cos(f.pitch * D2R), sin = Math.sin(f.pitch * D2R);
    const o = [f.n[0] * f.c, f.n[1] * f.c];   // on the face's eave line, where z = f.start
    const o3 = P(o[0], o[1], f.start);
    const X = D(f.u[0], f.u[1], 0), Y = D(f.n[0] * cos, f.n[1] * cos, sin), Z = X3(X, Y);
    const prof = f.poly.map((p) => [(p[0] - o[0]) * f.u[0] + (p[1] - o[1]) * f.u[1], ((p[0] - o[0]) * f.n[0] + (p[1] - o[1]) * f.n[1]) / cos]);
    const sid = w.make('IFCSLAB', w.guid(), w.ownerHistory(), slabName, null, slabName, w.H(place()), null, null, 'ROOF');
    const solid = w.extrudeAt(w.profile(prof), w.axisFrame(o3, Z, X), r.thickness / cos, [0, sin, cos]);
    w.styleItem(solid, roofing);
    w.setShape(sid, [w.rep('body', 'Body', 'SweptSolid', [solid])]);
    w.upsertPset(sid, 'CadCraft_RoofFace', [['PitchDegrees', 'IFCREAL', round(f.pitch, 4)], ['Edge', 'IFCINTEGER', f.edge]]);
    parts.push(sid);
  }
  // gable ends: from the top of the wall below up to the roof's underside, as thick as that wall
  const gableName = w.L(tr('model.roof.gable'));
  for (const gb of plan.gables) {
    const a = gb.a, b = gb.b, len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const u = [(b[0] - a[0]) / len, (b[1] - a[1]) / len], n = [-u[1], u[0]];
    const wall = L.walls.find((x) => x.guid === kinds[gb.edge].wall) || nearestWall(L.walls, a, b);
    const base = wall ? wall.baseOffset + wall.height : top;
    const pts = [];
    for (let k = 0; k <= 64; k++) {
      const tt = k / 64, q = [a[0] + (b[0] - a[0]) * tt + n[0], a[1] + (b[1] - a[1]) * tt + n[1]];
      const z = heightAt(plan, q);
      if (z !== null && z > base + 1) pts.push([tt * len, z - base]);
    }
    if (pts.length < 2) continue;
    const prof0 = [[pts[0][0], 0], [pts[pts.length - 1][0], 0], ...pts.reverse()];
    const prof = prof0.filter((p, i) => i < 2 || i === prof0.length - 1 || Math.abs((prof0[i + 1][1] - p[1]) * (p[0] - prof0[i - 1][0]) - (p[1] - prof0[i - 1][1]) * (prof0[i + 1][0] - p[0])) > 1e-3);
    const th = wall ? wall.t : 6 * IN;
    const Xd = D(u[0], u[1], 0), Zd = D(n[0], n[1], 0), Yd = X3(Zd, Xd), flip = Yd[2] < 0;
    const gid = w.make('IFCWALL', w.guid(), w.ownerHistory(), gableName, null, gableName, w.H(place()), null, null, ...(w.v4 ? ['STANDARD'] : []));
    w.setShape(gid, [w.rep('body', 'Body', 'SweptSolid', [w.extrudeAt(w.profile(flip ? prof.map(([x, y]) => [x, -y]) : prof), w.axisFrame(P(a[0], a[1], base), Zd, Xd), th)])]);
    parts.push(gid);
  }
  // fascia: one member, a board per run (outward from the roof's edge, its top flush with the roof's top)
  const boards = plan.fascia.filter((x) => x.board !== false && fascia > 0);
  if (boards.length) {
    const trim = w.surfaceStyle(tr('res.style.trim'), [0.93, 0.92, 0.88], 0);
    const items = [];
    for (const fb of boards) {
      const L2 = Math.hypot(fb.b[0] - fb.a[0], fb.b[1] - fb.a[1]), u = [(fb.b[0] - fb.a[0]) / L2, (fb.b[1] - fb.a[1]) / L2];
      const out = [-fb.n[0], -fb.n[1]];   // outward
      const Xd = D(u[0], u[1], 0), Zd = D(out[0], out[1], 0), Yd = X3(Zd, Xd), flip = Yd[2] < 0;
      const prof = [[0, -fascia], [L2, fb.b[2] - fb.a[2] - fascia], [L2, fb.b[2] - fb.a[2]], [0, 0]];
      const solid = w.extrudeAt(w.profile(flip ? prof.map(([x, y]) => [x, -y]).reverse() : prof), w.axisFrame(P(fb.a[0], fb.a[1], fb.a[2]), Zd, Xd), ROOF_DEFAULTS.fasciaT);
      w.styleItem(solid, trim);
      items.push(solid);
    }
    const nm = w.L(tr('res.roof.fascia'));
    const mid = w.make('IFCMEMBER', w.guid(), w.ownerHistory(), nm, null, w.L('Fascia'), w.H(place()), null, null, ...(w.v4 ? ['USERDEFINED'] : []));   // i18n-ignore: IFC ObjectType
    w.setShape(mid, [w.rep('body', 'Body', 'SweptSolid', items)]);
    w.upsertQto(mid, 'Qto_MemberBaseQuantities', [['Length', 'length', boards.reduce((s, x) => s + x.len, 0)]]);
    w.upsertPset(mid, 'CadCraft_Fascia', [['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(fascia))], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(ROOF_DEFAULTS.fasciaT))], ['EaveLength', 'IFCLENGTHMEASURE', round(w.u(plan.lengths.eave))], ['RakeLength', 'IFCLENGTHMEASURE', round(w.u(plan.lengths.rake))]]);
    parts.push(mid);
  }
  // soffit: one covering, a level panel per eave
  if (plan.soffit.length) {
    const items = [];
    let area = 0;
    for (const s of plan.soffit) {
      // the panel in the walls' plan axes, placed through the walls' storey → the roof's storey
      items.push(w.extrudeAt(w.profile(s.poly), w.axisFrame(P(0, 0, s.z - ROOF_DEFAULTS.soffitT), D(0, 0, 1), D(1, 0, 0)), ROOF_DEFAULTS.soffitT));
      area += Math.abs(polyArea(s.poly));
    }
    const sty = w.surfaceStyle(tr('res.style.trim'), [0.93, 0.92, 0.88], 0);
    for (const it of items) w.styleItem(it, sty);
    const nm = w.L(tr('res.roof.soffit'));
    const cid = w.make('IFCCOVERING', w.guid(), w.ownerHistory(), nm, null, w.L('Soffit'), w.H(place()), null, null, 'CEILING');   // i18n-ignore: IFC ObjectType
    w.setShape(cid, [w.rep('body', 'Body', 'SweptSolid', items)]);
    w.upsertPset(cid, 'Pset_CoveringCommon', [['IsExternal', 'IFCBOOLEAN', true]]);
    w.upsertQto(cid, 'Qto_CoveringBaseQuantities', [['Width', 'length', ROOF_DEFAULTS.soffitT], ['GrossArea', 'area', area], ['NetArea', 'area', area]]);
    parts.push(cid);
  }
  // the roof aggregates its parts
  let rel = null;
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const x = w.api.GetLine(w.mid, rid, false); if (x.RelatingObject?.value === r.id) { rel = rid; break; } }
  if (rel) { const x = w.touch(rel); x.RelatedObjects = parts.map((p) => w.H(p)); w.write(x); }
  else if (parts.length) w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(r.id), parts.map((p) => w.H(p)));
  w.upsertQto(r.id, 'Qto_RoofBaseQuantities', [['GrossArea', 'area', plan.area], ['NetArea', 'area', plan.area], ['ProjectedArea', 'area', plan.projected]]);
  const Lm = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v))];
  w.upsertPset(r.id, 'CadCraft_RoofLines', [Lm('RidgeLength', plan.lengths.ridge), Lm('HipLength', plan.lengths.hip), Lm('ValleyLength', plan.lengths.valley), Lm('EaveLength', plan.lengths.eave), Lm('RakeLength', plan.lengths.rake)]);
  if (w.v4) { const l = w.touch(r.id); l.PredefinedType = roofTypeOf(kinds); w.write(l); }
  return { parts, plan };
}
/** IfcRoofTypeEnum from the edges: one pitched side = shed, gables = gable, else hip. */
export function roofTypeOf(kinds) {
  const p = kinds.filter((k) => k.kind === 'pitch').length;
  if (p === 1) return 'SHED_ROOF';
  if (kinds.some((k) => k.kind === 'gable')) return 'GABLE_ROOF';
  return 'HIP_ROOF';
}
function nearestWall(walls, a, b) {
  const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  return walls.map((x) => ({ x, d: segDist(m, x.a, x.b) })).sort((p, q) => p.d - q.d)[0]?.x || null;
}
