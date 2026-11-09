/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-foundation.js — foundations from the walls (0.5 part 4, RC.2): slab-on-grade with thickened edges, stem walls on
 * footings with a slab, a crawlspace, basement walls with their slab; footings sized from the wall type and the number of
 * stories (labelled defaults, not engineering); made again when the walls move. No DOM: bin/test-bimcraft.mjs --res.
 *
 *   FOUNDATION_KINDS · footingSize({ kind, stories, heavy }) · foundationParams(kind, stored, ctx)
 *   foundationGeometry(outline, params) → [{ role: 'slab'|'edge'|'footing'|'stem', outer, inner, z0, z1 }]
 *   insetPoly(poly, d) — an anticlockwise polygon moved inward by d (outward when d < 0), corners mitred
 *   readFoundations(w) → [{ id, guid, storey, seed, kind, …stored, parts }]
 *   placeFoundation({ level, seed, kind, … }) → op · changeFoundation(guid, changes) → op · removeFoundations([guid]) → op
 *   syncFoundations(w, storey, ctx) — model-slabs.js syncDerived calls it (through res-follow.js) after the walls change
 *
 * Heights are measured from the level's floor (z = 0): a slab-on-grade's top is the floor; a crawlspace's stem walls stop
 * under the floor framing (StemDrop below the floor, default 12"); a basement's walls run from its footing up to there, its slab
 * BasementHeight below. The outline is the walls' outer faces (model-rooms.js planLoops), so stem and basement walls are
 * flush with the walls' outside, footings centred under them.
 *
 * Written as an IfcElementAssembly (USERDEFINED, ObjectType "Foundation") contained in the level, aggregating an IfcFooting
 * (.STRIP_FOOTING.: the footing ring, or a slab's thickened edge), an IfcWall (the stem / basement wall ring, a profile with
 * a void) and an IfcSlab (.BASESLAB.) as the kind needs; concrete; quantities on each part (Qto_FootingBaseQuantities,
 * Qto_WallBaseQuantities, Qto_SlabBaseQuantities); CadCraft_Foundation (Kind, SeedX/Y, the sizes as set — 0 = automatic —,
 * ShapeKey).
 */
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readWalls, wallOutlines, buildingOutlines } from './model-walls.js';
import { planLoops, loopAt, labelPoint } from './model-rooms.js';
import { ids, val } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { readTerrain, groundAt } from './res-terrain.js';   // RC.10: footings step to the grade

export const FOUND_PSET = 'CadCraft_Foundation';
const IN = 25.4;
export const FOUNDATION_KINDS = ['slab', 'stemslab', 'crawl', 'basement'];
/** Stored size fields (mm; 0 = automatic) → their defaults per kind (see foundationParams). */
const FIELDS = ['SlabThickness', 'EdgeWidth', 'EdgeDepth', 'StemThickness', 'FootingWidth', 'FootingDepth', 'Bottom', 'StemDrop', 'BasementHeight'];
const KEY = { SlabThickness: 'slabT', EdgeWidth: 'edgeW', EdgeDepth: 'edgeD', StemThickness: 'stemT', FootingWidth: 'footW', FootingDepth: 'footD', Bottom: 'bottom', StemDrop: 'stemDrop', BasementHeight: 'basementH' };

/**
 * Footing width and depth (mm) — labelled defaults after the usual light-frame table for 1500 psf soil (a slab or stem-wall
 * slab 12" / 15" / 23" wide for 1 / 2 / 3 stories; with a crawlspace or basement 18" / 22" / 27"); 4" wider under masonry or
 * concrete walls; 8" deep, 10" from 24" wide. A designer or engineer checks them for the soil and loads.
 */
export function footingSize({ kind = 'stemslab', stories = 1, heavy = false } = {}) {
  const n = Math.max(1, Math.min(3, Math.round(stories)));
  const base = (kind === 'crawl' || kind === 'basement' ? [18, 22, 27] : [12, 15, 23])[n - 1] + (heavy ? 4 : 0);
  return { width: base * IN, depth: (base >= 24 ? 10 : 8) * IN };
}
/** Every size a foundation of `kind` needs: stored values where set (> 0), else defaults. stemDrop = how far below the floor
 *  the stem / basement walls stop (the floor framing's depth); stemTop = −stemDrop. */
export function foundationParams(kind, stored = {}, { stories = 1, heavy = false } = {}) {
  const f = footingSize({ kind, stories, heavy });
  const d = {
    slabT: 4 * IN,
    edgeW: 12 * IN, edgeD: 12 * IN,
    stemT: (heavy ? 10 : 8) * IN,
    footW: f.width, footD: f.depth,
    bottom: kind === 'crawl' ? 36 * IN : 24 * IN,       // the footing's underside below the floor
    stemDrop: kind === 'crawl' || kind === 'basement' ? 12 * IN : 0,   // under the floor framing, or up to the floor itself
    basementH: 96 * IN,
  };
  const out = { ...d, kind };
  for (const k of Object.keys(d)) { const v = stored[k]; if (Number.isFinite(v) && v > 0) out[k] = v; }
  out.stemTop = -out.stemDrop;
  out.auto = Object.fromEntries(Object.keys(d).map((k) => [k, !(stored[k] > 0)]));
  return out;
}

// ---------------------------------------------------------------------------------------------------------- geometry
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
export function insetPoly(P, d) {
  const n = P.length, E = P.map((a, i) => { const b = P[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; return { a, u, n: [-u[1], u[0]] }; });
  return E.map((e, i) => {
    const f = E[(i + n - 1) % n];
    const p0 = [f.a[0] + f.n[0] * d, f.a[1] + f.n[1] * d], p1 = [e.a[0] + e.n[0] * d, e.a[1] + e.n[1] * d];
    const c = cross(f.u, e.u);
    if (Math.abs(c) < 1e-9) return p1;
    const t = cross(sub(p1, p0), e.u) / c;
    return [p0[0] + f.u[0] * t, p0[1] + f.u[1] * t];
  });
}
function area(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; }
function perim(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += Math.hypot(b[0] - a[0], b[1] - a[1]); } return s; }

/** Every part a kind needs is there (sizes too big for the outline drop parts). */
export function complete(kind, geo) {   // (stepped rings come in pieces: any piece of a role counts)
  const need = { slab: ['slab', 'edge'], stemslab: ['stem', 'footing', 'slab'], crawl: ['stem', 'footing'], basement: ['stem', 'footing', 'slab'] }[kind] || [];
  return need.every((r) => geo.some((g) => g.role === r));
}
export const STEP = 8 * IN;   // a stepped footing moves in whole 8" steps (one block course)
/** Keep the part of a polygon between two lines square to u at s0 and s1 (measured from o). */
function band(poly, o, u, s0, s1) {
  const clip = (P, sgn, c) => {
    const out = [], f = (q) => sgn * ((q[0] - o[0]) * u[0] + (q[1] - o[1]) * u[1] - c);
    for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], fa = f(a), fb = f(b); if (fa >= -1e-9) out.push(a); if ((fa < -1e-9 && fb > 1e-9) || (fa > 1e-9 && fb < -1e-9)) { const t = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); } }
    return out;
  };
  return clip(clip(poly, 1, s0), -1, s1);
}
/**
 * Stem walls and footings stepped to the grade: each wall's strip of the rings split into runs where the footing's underside
 * (the grade along the outside of the wall − `bottom`) falls in another 8" step. grade(x, y) → z from the floor, or null.
 */
function steppedRings(outline, p, grade) {
  const parts = [];
  const n = outline.length;
  const sO = outline, sI = insetPoly(outline, p.stemT), fO = insetPoly(outline, (p.stemT - p.footW) / 2), fI = insetPoly(outline, (p.stemT + p.footW) / 2);
  for (let i = 0; i < n; i++) {
    const a = outline[i], b = outline[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < 1) continue;
    const u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
    const quad = (O, I) => [O[i], O[(i + 1) % n], I[(i + 1) % n], I[i]];
    const stemQ = quad(sO, sI), footQ = quad(fO, fI);
    // the needed underside along the wall, in steps; runs of the same step
    // the footing's underside `bottom` below the grade there (where the ground is missing: 8" under the floor), in whole steps
    const at = (s) => { const g = grade(a[0] + u[0] * s, a[1] + u[1] * s); return Math.floor(((g ?? -200) - p.bottom) / STEP) * STEP; };
    const ss = [];
    for (let s = 0; s <= L; s += 600) ss.push(s);
    if (ss[ss.length - 1] < L) ss.push(L);
    let r0 = 0, z0 = Math.min(at(0), -p.bottom);
    const runs = [];
    for (let k = 1; k < ss.length; k++) { const z = Math.min(at(ss[k]), -p.bottom); if (z !== z0) { const m = (ss[k - 1] + ss[k]) / 2; runs.push([r0, m, z0]); r0 = m; z0 = z; } }
    runs.push([r0, L, z0]);
    for (const [s0, s1, zb] of runs) {
      const lo = runs.length === 1 ? -1e9 : s0, hi = runs.length === 1 ? 1e9 : s1;
      const fq = band(footQ, a, u, s0 === 0 ? -1e9 : lo, s1 === L ? 1e9 : hi), sq = band(stemQ, a, u, s0 === 0 ? -1e9 : lo, s1 === L ? 1e9 : hi);
      if (fq.length >= 3) parts.push({ role: 'footing', outer: fq, inner: null, z0: zb, z1: zb + p.footD, step: true });
      if (sq.length >= 3 && p.stemTop > zb + p.footD) parts.push({ role: 'stem', outer: sq, inner: null, z0: zb + p.footD, z1: p.stemTop, step: true });
    }
  }
  return parts;
}
/** The parts of a foundation under `outline` (anticlockwise outer faces), heights from the floor. With `grade` (a function
 *  of plan x, y → the ground's height from the floor), stem walls and crawlspace footings step down to follow it. */
export function foundationGeometry(outline, p, { grade = null } = {}) {
  const parts = [];
  if (grade && (p.kind === 'stemslab' || p.kind === 'crawl')) {
    parts.push(...steppedRings(outline, p, grade));
    if (p.kind === 'stemslab') { const poly = insetPoly(outline, p.stemT); if (area(poly) > 1e4) parts.push({ role: 'slab', outer: poly, inner: null, z0: -p.slabT, z1: 0 }); }
    return parts;
  }
  const ring = (role, dOut, dIn, z0, z1) => { const outer = insetPoly(outline, dOut), inner = insetPoly(outline, dIn); if (area(inner) > 1e4 && z1 > z0) parts.push({ role, outer, inner, z0, z1 }); };
  const slab = (d, z0, z1) => { const poly = insetPoly(outline, d); if (area(poly) > 1e4) parts.push({ role: 'slab', outer: poly, inner: null, z0, z1 }); };
  const footUnder = (top) => ring('footing', (p.stemT - p.footW) / 2, (p.stemT + p.footW) / 2, top - p.footD, top);
  if (p.kind === 'slab') {
    slab(0, -p.slabT, 0);
    ring('edge', 0, p.edgeW, -p.edgeD, -p.slabT);
  } else if (p.kind === 'stemslab' || p.kind === 'crawl') {
    const footTop = -p.bottom + p.footD;
    ring('stem', 0, p.stemT, footTop, p.stemTop);
    footUnder(footTop);
    if (p.kind === 'stemslab') slab(p.stemT, -p.slabT, 0);
  } else if (p.kind === 'basement') {
    const slabTop = p.stemTop - p.basementH, footTop = slabTop - p.slabT;
    ring('stem', 0, p.stemT, footTop, p.stemTop);
    footUnder(footTop);
    slab(p.stemT, slabTop - p.slabT, slabTop);
  }
  return parts;
}

// ------------------------------------------------------------------------------------------------------------ reading
function storeyOutlines(w, storey) {
  const walls = readWalls(w, storey);
  const polys = [...wallOutlines(walls.map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff }))).values()];
  return { walls, ...planLoops(polys), outlines: buildingOutlines(walls) };   // 0.6 BIM-F1: posts / inside walls leave it alone
}
export function readFoundations(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCELEMENTASSEMBLY'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, FOUND_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const stored = {};
    for (const f of FIELDS) if (ps[f] !== undefined && ps[f] !== null && ps[f] !== '') stored[KEY[f]] = Number(ps[f]) * w.unitMm;
    out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, seed: [Number(ps.SeedX) * w.unitMm, Number(ps.SeedY) * w.unitMm], kind: FOUNDATION_KINDS.includes(ps.Kind) ? ps.Kind : 'slab', stored, key: ps.ShapeKey || '', parts: partsOf(w, id) });
  }
  return out;
}
function partsOf(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value); }
  return [];
}
/** How many stories of walls stand on this level and above (≥ 1), and whether any outline wall is masonry or concrete. */
export function loadsOn(w, storey, L) {
  const levels = readLevels(w), i = levels.findIndex((l) => l.id === storey);
  let stories = 0;
  for (let k = Math.max(0, i); k < levels.length; k++) if (readWalls(w, levels[k].id).length) stories++;
  const heavy = (L?.walls || readWalls(w, storey)).some((x) => /^(brick|cmu|concrete|ext-300)/.test(String(x.typeKey || '')));
  return { stories: Math.max(1, stories), heavy };
}
function shapeKey(...parts) {
  const s = JSON.stringify(parts, (k, v) => (typeof v === 'number' ? Math.round(v * 100) / 100 : v));
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36) + s.length.toString(36);
}

// ------------------------------------------------------------------------------------------------------------ writing
const ROLE = {
  slab: { cls: 'IFCSLAB', type: 'BASESLAB', name: 'res.fd.part.slab' },
  edge: { cls: 'IFCFOOTING', type: 'STRIP_FOOTING', name: 'res.fd.part.edge' },
  footing: { cls: 'IFCFOOTING', type: 'STRIP_FOOTING', name: 'res.fd.part.footing' },
  stem: { cls: 'IFCWALL', type: 'STANDARD', name: 'res.fd.part.stem' },
};
/** Make a foundation's parts again from the outline round its seed. → true when it was rewritten. */
function writeFoundation(w, f, ctx = {}) {
  const L = ctx.L || storeyOutlines(w, f.storey);
  const outline = loopAt(L.outlines, f.seed);
  if (!outline) return false;
  const loads = loadsOn(w, f.storey, L);
  const p = foundationParams(f.kind, f.stored, loads);
  // RC.10: with a terrain, stem walls and crawlspace footings follow the grade (sampled along the outline for the key)
  let grade = null, gkey = null;
  if ((f.kind === 'stemslab' || f.kind === 'crawl') && readTerrain(w)) {
    const M = w.storeyWorld(f.storey);
    const apply = (x, y) => [M[0] * x + M[4] * y + M[12], M[1] * x + M[5] * y + M[13]];
    try {
      grade = (x, y) => { const q = apply(x, y), g = groundAt(w, q[0], q[1]); return g === null ? null : g - M[14]; };
      gkey = outline.poly.map(([x, y]) => grade(x, y));
    } catch (e) { grade = null; gkey = null; }   // the ground isn't loaded yet: flat footings for now
  }
  const key = shapeKey(outline.poly, p, gkey);
  if (f.key === key && f.parts.length) return false;
  if (f.parts.length) w.dropProduct(f.parts);
  const st = w.api.GetLine(w.mid, f.storey, false);
  const conc = w.material(tr('model.mat.concrete'));
  const style = w.surfaceStyle(tr('res.style.concrete'), [0.72, 0.72, 0.7], 0);
  const parts = [];
  // one element per role: a stepped footing's pieces are items of the same IfcFooting
  const byRole = new Map();
  for (const g of foundationGeometry(outline.poly, p, { grade })) { if (!byRole.has(g.role)) byRole.set(g.role, []); byRole.get(g.role).push(g); }
  for (const [role, list] of byRole) {
    const g = list.length === 1 ? list[0] : { role, outer: null, inner: null, many: list, z0: Math.min(...list.map((x) => x.z0)), z1: Math.max(...list.map((x) => x.z1)) };
    const R = ROLE[g.role], nm = w.L(tr(g.role === 'slab' && f.kind === 'basement' ? 'res.fd.part.bslab' : R.name));
    const lp = w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0);
    const args = R.cls === 'IFCWALL' ? (w.v4 ? ['STANDARD'] : []) : [R.type];
    const id = w.make(R.cls, w.guid(), w.ownerHistory(), nm, null, nm, w.H(lp), null, null, ...args);
    const pieces = g.many || [g];
    const items = pieces.map((q) => { const it = w.extrude(w.profileVoids(q.outer, q.inner ? [q.inner] : []), q.z0, q.z1 - q.z0); w.styleItem(it, style); return it; });
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', items)]);
    w.associateMaterial(id, conc);
    if (g.many) {
      // quantities of a stepped ring: summed over its pieces
      const vol = pieces.reduce((sum, q) => sum + Math.abs(area(q.outer)) * (q.z1 - q.z0), 0);
      const len = pieces.reduce((sum, q) => sum + perim(q.outer) / 2, 0);
      w.upsertQto(id, g.role === 'stem' ? 'Qto_WallBaseQuantities' : 'Qto_FootingBaseQuantities', [['Length', 'length', len], ['GrossVolume', 'volume', vol], ['NetVolume', 'volume', vol]]);
      if (g.role === 'stem') w.upsertPset(id, 'Pset_WallCommon', [['IsExternal', 'IFCBOOLEAN', true], ['LoadBearing', 'IFCBOOLEAN', true]]);
      const levelsZ = new Set(pieces.map((q) => Math.round(q.z0)));
      if (levelsZ.size > 1) w.upsertPset(id, 'CadCraft_Stepped', [['Steps', 'IFCINTEGER', levelsZ.size - 1], ['Lowest', 'IFCLENGTHMEASURE', round(w.u(g.z0))]]);
      parts.push(id);
      continue;
    }
    const a = Math.abs(area(g.outer)) - (g.inner ? Math.abs(area(g.inner)) : 0), h = g.z1 - g.z0;
    if (g.role === 'slab') w.upsertQto(id, 'Qto_SlabBaseQuantities', [['Width', 'length', h], ['Perimeter', 'length', perim(g.outer)], ['GrossArea', 'area', a], ['NetArea', 'area', a], ['GrossVolume', 'volume', a * h], ['NetVolume', 'volume', a * h]]);
    else {
      const len = (perim(g.outer) + perim(g.inner)) / 2, width = a / len;
      if (g.role === 'stem') w.upsertQto(id, 'Qto_WallBaseQuantities', [['Length', 'length', len], ['Width', 'length', width], ['Height', 'length', h], ['GrossVolume', 'volume', a * h], ['NetVolume', 'volume', a * h]]);
      else w.upsertQto(id, 'Qto_FootingBaseQuantities', [['Length', 'length', len], ['Width', 'length', width], ['Height', 'length', h], ['GrossVolume', 'volume', a * h], ['NetVolume', 'volume', a * h]]);
    }
    if (g.role === 'stem') w.upsertPset(id, 'Pset_WallCommon', [['IsExternal', 'IFCBOOLEAN', true], ['LoadBearing', 'IFCBOOLEAN', true]]);
    parts.push(id);
  }
  let rel = null;
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const x = w.api.GetLine(w.mid, rid, false); if (x.RelatingObject?.value === f.id) { rel = rid; break; } }
  if (rel) { const x = w.touch(rel); x.RelatedObjects = parts.map((q) => w.H(q)); w.write(x); }
  else if (parts.length) w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(f.id), parts.map((q) => w.H(q)));
  const sd = labelPoint(outline.poly);
  w.upsertPset(f.id, FOUND_PSET, [['SeedX', 'IFCLENGTHMEASURE', round(w.u(sd[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(sd[1]))], ['ShapeKey', 'IFCIDENTIFIER', key],
    ['Stories', 'IFCINTEGER', loads.stories], ['FootingWidthUsed', 'IFCPOSITIVELENGTHMEASURE', round(w.u(p.footW))], ['FootingDepthUsed', 'IFCPOSITIVELENGTHMEASURE', round(w.u(p.footD))]]);
  return true;
}
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const storeyByGuid = (w, guid) => { const id = w.byGuid(guid); if (!id) throw Object.assign(new Error('model.err.nolevel'), { key: 'model.err.nolevel' }); return id; };
const rowsOf = (w, stored) => FIELDS.map((f) => [f, 'IFCLENGTHMEASURE', round(w.u(stored[KEY[f]] > 0 ? stored[KEY[f]] : 0))]);

export function placeFoundation(spec) {
  const s = { kind: 'slab', ...spec };
  return op((w) => {
    if (!FOUNDATION_KINDS.includes(s.kind)) throw Object.assign(new Error('res.err.fdkind'), { key: 'res.err.fdkind' });
    if (!s.guid) s.guid = val(w.guid());
    const storey = storeyByGuid(w, s.level);
    const L = storeyOutlines(w, storey);
    const o = loopAt(L.outlines, s.seed);
    if (!o) throw Object.assign(new Error('model.err.nobuilding2'), { key: 'model.err.nobuilding2' });
    const want = {};
    for (const k of Object.values(KEY)) if (Number.isFinite(s[k]) && s[k] > 0) want[k] = s[k];
    if (!complete(s.kind, foundationGeometry(o.poly, foundationParams(s.kind, want, loadsOn(w, storey, L))))) throw Object.assign(new Error('res.err.fdsize'), { key: 'res.err.fdsize' });
    const st = w.api.GetLine(w.mid, storey, false);
    const nm = w.L(tr('res.fd.kind.' + s.kind));
    const id = w.make('IFCELEMENTASSEMBLY', s.guid, w.ownerHistory(), nm, null, w.L('Foundation'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, 'SITE', 'USERDEFINED');   // i18n-ignore: IFC ObjectType
    w.noteGuid(s.guid, id);
    w.contain(id, storey);
    const stored = {};
    for (const k of Object.values(KEY)) if (Number.isFinite(s[k]) && s[k] > 0) stored[k] = s[k];
    w.upsertPset(id, FOUND_PSET, [['Kind', 'IFCLABEL', s.kind], ['SeedX', 'IFCLENGTHMEASURE', round(w.u(s.seed[0]))], ['SeedY', 'IFCLENGTHMEASURE', round(w.u(s.seed[1]))], ['ShapeKey', 'IFCIDENTIFIER', ''], ...rowsOf(w, stored)]);
    writeFoundation(w, { id, storey, seed: s.seed, kind: s.kind, stored, key: '', parts: [] }, { L });
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
/** Change a foundation: { kind, slabT, edgeW, edgeD, stemT, footW, footD, bottom, stemDrop, basementH } — 0 = automatic. A new
 *  kind starts its depth and stem top again from that kind's defaults. */
export function changeFoundation(guid, ch) {
  return op((w) => {
    const f = readFoundations(w).find((x) => x.guid === guid);
    if (!f) throw Object.assign(new Error('model.err.gone'), { key: 'model.err.gone' });
    const rows = [['ShapeKey', 'IFCIDENTIFIER', '']];
    const stored = { ...f.stored };
    let kind = f.kind;
    if (ch.kind && ch.kind !== f.kind) {
      if (!FOUNDATION_KINDS.includes(ch.kind)) throw Object.assign(new Error('res.err.fdkind'), { key: 'res.err.fdkind' });
      kind = ch.kind;
      rows.push(['Kind', 'IFCLABEL', kind], ['Bottom', 'IFCLENGTHMEASURE', 0], ['StemDrop', 'IFCLENGTHMEASURE', 0]);
      stored.bottom = 0; stored.stemDrop = 0;
      const l = w.touch(f.id); l.Name = w.L(tr('res.fd.kind.' + kind)); w.write(l);
    }
    for (const [F, k] of Object.entries(KEY)) {
      if (ch[k] === undefined || ch[k] === null) continue;
      if (!Number.isFinite(ch[k]) || ch[k] < 0) throw Object.assign(new Error('model.err.length'), { key: 'model.err.length' });
      stored[k] = ch[k];
      rows.push([F, 'IFCLENGTHMEASURE', round(w.u(ch[k]))]);
    }
    // a foundation that can't be made with the new sizes is refused
    const L = storeyOutlines(w, f.storey), o = loopAt(L.outlines, f.seed);
    if (o && !complete(kind, foundationGeometry(o.poly, foundationParams(kind, stored, loadsOn(w, f.storey, L))))) throw Object.assign(new Error('res.err.fdsize'), { key: 'res.err.fdsize' });
    w.upsertPset(f.id, FOUND_PSET, rows);
    writeFoundation(w, { ...f, kind, stored, key: '' }, { L });
    return { id: f.id, ids: [f.id] };
  });
}
export function removeFoundations(guids) {
  return op((w) => {
    const list = readFoundations(w).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.flatMap((x) => [x.id, ...x.parts]));
    return { id: null, ids: [] };
  });
}
/** After the walls of a level changed: foundations made again where their outline moved — on that level, and on the levels
 *  below it (the stories above size their footings). Gone outlines: left alone. */
export function syncFoundations(w, storey, ctx = {}) {
  let n = 0;
  const levels = ctx.levels || readLevels(w), here = levels.find((l) => l.id === storey);
  for (const f of readFoundations(w)) {
    const lv = levels.find((l) => l.id === f.storey);
    if (here && lv && lv.elevation > here.elevation + 1) continue;
    const L = f.storey === storey && ctx.L ? { walls: ctx.L.walls, outlines: ctx.L.outlines } : undefined;
    if (writeFoundation(w, f, { L })) n++;
  }
  return n;
}
