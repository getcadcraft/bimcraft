/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-walls.js — walls you draw (0.5 part 3, BM.3): wall types, joins cleaned automatically, and the IFC they are
 * written as. No DOM: bin/test-bimcraft.mjs --model runs it in Node.
 *
 *   WALL_TYPES                       starter types: key, layers exterior → interior ({ mat, t } mm), exterior or not
 *   typeThickness(type)              total thickness, mm
 *   wallOutlines(walls, { tol })     plan outlines with L / T / X joins cleaned: walls [{ key, a, b, t }] (centre lines, mm)
 *                                    → Map(key → [[x, y]…] CCW); see "Joins" below
 *   enclosingWalls(walls, { tol })   the walls left once every wall with a free end is taken out (repeatedly)
 *   buildingOutlines(walls)          the building's outlines from readWalls rows (enclosing walls, exterior types first)
 *   readWalls(w, storey?)            the walls the tools made (pset CadCraft_Wall), in each storey's own plan axes:
 *                                    [{ id, guid, storey, a, b, len, t, height, baseOffset, topLevel, topOffset, typeKey,
 *                                       typeName, extSide, lp }]
 *   addWall(w, { storey, a, b, typeKey, baseOffset, topLevel, topOffset, height, extSide, guid })   → { id, guid }
 *   updateWall(w, guid, changes, { carryJoined })   a, b, typeKey, baseOffset, topLevel, topOffset, height, extSide
 *   deleteWalls(w, guids)            with what they host (openings, doors, windows)
 *   regenWalls(w, storey, guids?)    shapes, quantities and the pset of the walls named and every wall joined to them
 *                                    (all walls of the storey when guids is null) — after any change of walls or levels
 *
 * Written as (Design Transfer View): IfcWall (.STANDARD.) placed relative to its storey at the start point, X along the
 * wall; 'Axis' Curve2D (IfcPolyline from 0,0 to the length); 'Body' SweptSolid (IfcExtrudedAreaSolid of the joined outline
 * as an IfcArbitraryClosedProfileDef, up by the height); IfcMaterialLayerSetUsage (AXIS2; the first layer is the
 * exterior: POSITIVE from −t/2 when the exterior is on the wall's right, NEGATIVE from +t/2 on its left) of the type's
 * IfcMaterialLayerSet; IfcWallType per wall type (pset CadCraft_WallType Key); Pset_WallCommon (Reference, IsExternal,
 * LoadBearing); Qto_WallBaseQuantities (Length, Width, Height, GrossFootprintArea, GrossSideArea, NetSideArea,
 * GrossVolume, NetVolume — openings taken off the net values); CadCraft_Wall (TypeKey, Length, Thickness, Height,
 * BaseOffset, TopLevel = the level its top follows (GlobalId; empty = a fixed height), TopOffset, ExteriorSide).
 *
 * Joins: wall ends within `tol` of each other meet at a node; an end on another wall's side (within half its thickness of
 * its centre line, not at its ends) is a T. At a node the walls are sorted by direction and each pair of neighbours
 * meets where one's left face crosses the other's right face (a mitre for two, the corners round a node for three or
 * more). Faces that never cross (two walls in a line) end square; a mitre longer than four thicknesses is cut square.
 * An outline that comes out crossing itself (a wall shorter than its mitres) falls back to a plain rectangle.
 */
import { normalizeLayer, writeMaterialLayers } from './project-materials.js';
import { ids, val, deleteLine } from './ifc-util.js';
import { round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { planLoops } from './model-rooms.js';
import { t as tr } from './i18n.js';
import { wallGeom, arcOf, arcLength, chordFor, flatPoly, arcAxisCurve, profileCurve, profileKeyPoints, BULGE_MAX } from './model-arcs.js';   // 0.6 round 2 (bim-comforts_PART_2): curved walls

import { readAssemblies, readAssemblyRecords } from './wall-assemblies.js';
import { deriveJoins, reconcile, joinsIndex, joinKey, kindOf } from './wall-joins.js';   // 0.9 FX.60: the join record
import { squareMove } from './wall-square.js';   // 0.9 FX.65: a location line that holds moves the centre line square, the joined walls follow

/** Where a plan cuts, mm above its level (the Draw plan's CUT; rooms close against what the cut meets). */
export const PLAN_CUT = 1200;
export const WALL_PSET = 'CadCraft_Wall';
export const WALLTYPE_PSET = 'CadCraft_WallType';
const IN = 25.4;
/** Starter wall types. Layers from the exterior side inward; names from the language file (model.wt.<key>, model.mat.<mat>). */
export const WALL_TYPES = [
  { key: 'ext-2x6', exterior: true, layers: [{ mat: 'siding', t: 0.75 * IN }, { mat: 'osb', t: 0.5 * IN }, { mat: 'studs', t: 5.5 * IN }, { mat: 'gypsum', t: 0.5 * IN }] },
  { key: 'ext-2x4', exterior: true, layers: [{ mat: 'siding', t: 0.75 * IN }, { mat: 'osb', t: 0.5 * IN }, { mat: 'studs', t: 3.5 * IN }, { mat: 'gypsum', t: 0.5 * IN }] },
  { key: 'brick-2x4', exterior: true, layers: [{ mat: 'brick', t: 3.625 * IN }, { mat: 'air', t: 1 * IN }, { mat: 'osb', t: 0.5 * IN }, { mat: 'studs', t: 3.5 * IN }, { mat: 'gypsum', t: 0.5 * IN }] },
  { key: 'int-2x4', exterior: false, layers: [{ mat: 'gypsum', t: 0.5 * IN }, { mat: 'studs', t: 3.5 * IN }, { mat: 'gypsum', t: 0.5 * IN }] },
  { key: 'int-2x6', exterior: false, layers: [{ mat: 'gypsum', t: 0.5 * IN }, { mat: 'studs', t: 5.5 * IN }, { mat: 'gypsum', t: 0.5 * IN }] },
  { key: 'cmu-8', exterior: true, layers: [{ mat: 'cmu', t: 7.625 * IN }] },
  { key: 'concrete-200', exterior: true, layers: [{ mat: 'concrete', t: 200 }] },
  { key: 'ext-300', exterior: true, layers: [{ mat: 'render', t: 15 }, { mat: 'insulation', t: 100 }, { mat: 'block', t: 175 }, { mat: 'plaster', t: 10 }] },
  { key: 'int-100', exterior: false, layers: [{ mat: 'gypsum', t: 12.5 }, { mat: 'studs', t: 75 }, { mat: 'gypsum', t: 12.5 }] },
];
/**
 * A wall type by key: a starter, or a starter at another thickness — key "<starter>@<mm>" (Properties › Thickness): the
 * thickest layer (the studs, the block) takes up the difference, the others keep theirs.
 */
export function wallType(key, source = null) {
  const custom = (Array.isArray(source) ? source : readAssemblies(source)).find(x => x.key === key);
  if (custom) return custom;
  const k = String(key || '');
  const base = WALL_TYPES.find((x) => x.key === k.split('@')[0]) || null;
  if (!base) return null;
  const coreIndex = base.layers.findIndex(l => ['studs', 'block', 'cmu', 'concrete'].includes(l.mat));
  const recipe = { ...base, layers: base.layers.map((l, i) => normalizeLayer({ ...l, core: i === (coreIndex < 0 ? 0 : coreIndex), function: i === coreIndex ? 'structure' : l.mat === 'osb' ? 'substrate' : l.mat === 'insulation' ? 'insulation' : 'finish' })) };
  if (!k.includes('@')) return recipe;
  const want = Number(k.split('@')[1]);
  const rest = base.layers.reduce((s, l) => s + l.t, 0) - Math.max(...base.layers.map((l) => l.t));
  if (!(want > rest + 1 && want <= 2000)) return null;
  const core = base.layers.indexOf(base.layers.reduce((a, b) => (b.t > a.t ? b : a)));
  return { ...recipe, key: k, base: base.key, layers: recipe.layers.map((l, i) => (i === core ? { ...l, t: want - rest } : l)) };
}
/** The key of `type` made `mm` thick (null when its other layers alone are thicker than that). */
export function typeAt(typeKey, mm) {
  const base = wallType(String(typeKey).split('@')[0]);
  if (!base) return null;
  if (Math.abs(typeThickness(base) - mm) < 0.05) return base.key;
  const k = base.key + '@' + (Math.round(mm * 10) / 10);
  return wallType(k) ? k : null;
}
export const wallTypes = (w) => [...WALL_TYPES.map(x => wallType(x.key)), ...readAssemblies(w)];
export const typeThickness = (type) => type.layers.reduce((s, l) => s + l.t, 0);
export const typeName = (type) => type.name || (type.base ? tr('model.wt.custom', { name: tr('model.wt.' + type.base), t: Math.round(typeThickness(type)) }) : tr('model.wt.' + type.key));

// ---------------------------------------------------------------------------------------------------------------- joins
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const mul = (a, k) => [a[0] * k, a[1] * k];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const left = (d) => [-d[1], d[0]];
/** Where p1 + s·d1 meets p2 + t·d2, or null when they are parallel. */
function meet(p1, d1, p2, d2) {
  const c = cross(d1, d2);
  if (Math.abs(c) < 1e-9) return null;
  const s = cross(sub(p2, p1), d2) / c;
  return add(p1, mul(d1, s));
}

/** The nodes where walls meet: { p, ends: [{ w, end }], tees: [{ w, s }] } (w = index into the prepared list). */
export function wallNodes(W, tol = 1) {
  const nodes = [];
  for (let i = 0; i < W.length; i++) for (const end of ['a', 'b']) {
    const p = W[i][end];
    // 0.9 FX.60: Disallow join at this end: it meets nothing and nothing meets it (its own node, no T)
    if (W[i].off && W[i].off[end]) { nodes.push({ p, ends: [{ w: i, end }], tees: [], solo: true }); continue; }
    let n = nodes.find((x) => !x.solo && dist(x.p, p) <= tol);
    if (!n) { n = { p, ends: [], tees: [] }; nodes.push(n); }
    n.ends.push({ w: i, end });
  }
  for (const n of nodes) {
    if (n.solo) continue;
    const here = new Set(n.ends.map((e) => e.w));
    for (let j = 0; j < W.length; j++) {
      if (here.has(j)) continue;
      const w = W[j], q = w.g.param(n.p), s = q.s, off = Math.abs(q.off);
      if (s > tol && s < w.L - tol && off <= w.h + tol) n.tees.push({ w: j, s });
    }
  }
  return nodes;
}

/**
 * The walls that enclose something (0.6 BIM-F1): walls with a free end — not at another wall's end and not against another
 * wall's side — are taken out, again and again, so posts drawn as short walls, a garden wall run off a corner and an inside
 * wall poking out leave the building's outline alone. Walls [{ a, b, t, … }] (the input objects, those kept).
 */
export function enclosingWalls(walls, { tol = 1 } = {}) {
  let W = prepare(walls.map((w, i) => ({ ...w, ewIndex: i })));
  for (;;) {
    const nodes = wallNodes(W, tol), free = new Set();
    for (const n of nodes) if (n.ends.length === 1 && !n.tees.length) free.add(n.ends[0].w);
    if (!free.size) return W.map((x) => walls[x.ewIndex]);
    W = W.filter((_, i) => !free.has(i));
  }
}

/**
 * The building's outlines (roofs, foundations, pads, building floors) — 0.6 BIM-F1: only from walls that enclose something
 * (model-walls.js enclosingWalls: posts drawn as short walls and walls run off a corner leave it alone), and from the
 * exterior wall types when they close an outline by themselves (inside walls never widen it); else every enclosing wall;
 * else every wall, as before.
 */
export function buildingOutlines(walls) {
  const loopsOf = (list) => planLoops([...wallOutlines(list.map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff }))).values()]).outlines.filter((o) => o.area > 1);
  const ext = walls.filter((x) => (x.assembly || wallType(x.typeKey))?.exterior);
  for (const list of [enclosingWalls(ext), enclosingWalls(walls)]) {
    if (!list.length) continue;
    const out = loopsOf(list);
    if (out.length) return out;
  }
  return loopsOf(walls);
}

function prepare(walls) {
  return walls.map((w) => {
    if (dist(w.a, w.b) <= 0) return { ...w, L: 0, h: 0 };
    // 0.6 round 2 (bim-comforts_PART_2): a curved wall answers the same questions (g: along, off, tangent, where a point lies)
    const g = wallGeom(w), L = g.L, u = g.tan(0);
    return { ...w, L, u, n: left(u), h: (w.t || 0) / 2, g, arc: g.arc };
  }).filter((w) => w.L > 0 && w.h > 0);
}

export function wallOutlines(walls, { tol = 1 } = {}) {
  const W = prepare(walls);
  const nodes = wallNodes(W, tol);
  const ends = W.map(() => ({ a: null, b: null }));
  for (const n of nodes) {
    // each ray: a direction out of the node and a point its centre line passes through (a T's through wall: its own axis)
    // a curved wall's ray leaves along its tangent; its faces are circles (yl: the wall's own offset of the ray's left face)
    const rays = n.ends.map((e) => { const x = W[e.w]; return { w: e.w, end: e.end, d: e.end === 'a' ? x.g.tan(0) : mul(x.g.tan(x.L), -1), o: n.p, h: x.h, real: true, yl: e.end === 'a' ? x.h : -x.h }; });
    for (const t of n.tees) {
      const T = W[t.w], q = T.g.at(t.s), d = T.g.tan(t.s);
      rays.push({ w: t.w, d, o: q, h: T.h, real: false, yl: T.h }, { w: t.w, d: mul(d, -1), o: q, h: T.h, real: false, yl: -T.h });
    }
    const p = n.p;
    for (const r of rays) {
      r.ang = Math.atan2(r.d[1], r.d[0]); r.left = add(r.o, mul(left(r.d), r.h)); r.right = add(r.o, mul(left(r.d), -r.h));
      const k = W[r.w].arc;
      r.fl = k ? { c: k.C, r: k.R - r.yl * k.sg } : { p: r.left, d: r.d };
      r.fr = k ? { c: k.C, r: k.R + r.yl * k.sg } : { p: r.right, d: r.d };
    }
    if (rays.length > 1) {
      rays.sort((x, y) => x.ang - y.ang);
      for (let i = 0; i < rays.length; i++) {
        const A = rays[i], B = rays[(i + 1) % rays.length];
        if (!A.real && !B.real) continue;   // the two halves of a T's through wall
        // the space between A (its left face) and B, the next one anticlockwise (its right face)
        const c = W[A.w].arc || W[B.w].arc ? meetFaces(A.fl, B.fr, p) : meet(add(A.o, mul(left(A.d), A.h)), A.d, add(B.o, mul(left(B.d), -B.h)), B.d);
        const turn = cross(A.d, B.d), ahead = dot(A.d, B.d);
        if (!c || (turn <= 1e-9 && ahead > 1e-9)) continue;   // parallel or overlapping: square ends (1e-9: a curved wall's tangent is not exact)
        if (dist(c, p) > 4 * Math.max(A.h, B.h) + tol) continue;   // too sharp a mitre: square
        A.left = c; B.right = c;
      }
    }
    const centre = rays.length >= 3 && !n.tees.length ? p : null;
    for (const r of rays) if (r.real) ends[r.w][r.end] = { left: r.left, right: r.right, centre };
  }
  const out = new Map();
  W.forEach((w, i) => {
    const A = ends[i].a, B = ends[i].b;
    if (w.arc) { out.set(w.key, arcOutline(w, A, B)); return; }
    let poly = [A.right, B.left, B.centre, B.right, A.left, A.centre].filter(Boolean);
    poly = clean(poly);
    if (!simpleCCW(poly)) poly = rect(w);
    out.set(w.key, poly);
  });
  return out;
}
/** Where two faces meet nearest `near`: lines { p, d } and circles { c, r } (a curved wall's faces); null when they don't. */
function meetFaces(F, G, near) {
  if (F.d && G.d) return meet(F.p, F.d, G.p, G.d);
  const pick = (list) => list.filter(Boolean).sort((x, y) => dist(x, near) - dist(y, near))[0] || null;
  if (F.d || G.d) {
    const L = F.d ? F : G, K = F.d ? G : F, m = sub(L.p, K.c), bq = dot(L.d, m), cq = dot(m, m) - K.r * K.r, disc = bq * bq - cq;
    if (disc < 0) return null;
    const sq = Math.sqrt(disc);
    return pick([add(L.p, mul(L.d, -bq - sq)), add(L.p, mul(L.d, -bq + sq))]);
  }
  const dd = dist(F.c, G.c);
  if (dd < 1e-6 || dd > F.r + G.r || dd < Math.abs(F.r - G.r)) return null;   // one circle (a curve going on), or apart
  const x = (dd * dd + F.r * F.r - G.r * G.r) / (2 * dd), y = Math.sqrt(Math.max(0, F.r * F.r - x * x));
  const u = mul(sub(G.c, F.c), 1 / dd), m = add(F.c, mul(u, x));
  return pick([add(m, mul(left(u), y)), add(m, mul(left(u), -y))]);
}
/**
 * A curved wall's outline: its corners from the joins (A at its start, B at its end, as for a straight wall), the right face
 * from A to B and the left face back as arcs — the outline returned is in chords (rooms, the plan), its `bulged` copy keeps
 * each arc edge as a bulge on the point it starts from ([x, y, bulge], for the IFC profile).
 */
function arcOutline(w, A, B) {
  const k = w.arc, ang = (q) => Math.atan2(q[1] - k.C[1], q[0] - k.C[0]);
  const wrap = (x) => { let y = (x + Math.PI) % (2 * Math.PI); if (y <= 0) y += 2 * Math.PI; return y - Math.PI; };
  const bulge = (P, Q, want) => Math.tan((wrap(ang(Q) - ang(P) - want) + want) / 4);
  let poly = [[...A.right, bulge(A.right, B.left, k.theta)], B.left, B.centre, [...B.right, bulge(B.right, A.left, -k.theta)], A.left, A.centre].filter(Boolean);
  // repeated points: the later one keeps its bulge (the edge to it is nothing)
  poly = poly.filter((q, i) => dist(q, poly[(i + 1) % poly.length]) > 1e-6 || poly.length < 4);
  let flat = flatPoly(poly);
  if (poly.length < 4 || !simpleCCW(flat)) {
    poly = [[...w.g.at(0, -w.h), Math.tan(k.theta / 4)], w.g.at(w.L, -w.h), [...w.g.at(w.L, w.h), Math.tan(-k.theta / 4)], w.g.at(0, w.h)];
    flat = flatPoly(poly);
  }
  flat.bulged = poly;
  return flat;
}
const rect = (w) => [add(w.a, mul(w.n, -w.h)), add(w.b, mul(w.n, -w.h)), add(w.b, mul(w.n, w.h)), add(w.a, mul(w.n, w.h))];
/** Drop repeated and collinear points. */
function clean(poly) {
  let p = poly.filter((q, i) => i === 0 || dist(q, poly[i - 1]) > 1e-6);
  if (p.length > 1 && dist(p[0], p[p.length - 1]) <= 1e-6) p.pop();
  let changed = true;
  while (changed && p.length > 3) {
    changed = false;
    for (let i = 0; i < p.length; i++) {
      const a = p[(i + p.length - 1) % p.length], b = p[i], c = p[(i + 1) % p.length];
      const ab = sub(b, a), bc = sub(c, b);
      if (Math.abs(cross(ab, bc)) <= 1e-6 * (Math.hypot(...ab) * Math.hypot(...bc) + 1e-12) && dot(ab, bc) >= 0) { p.splice(i, 1); changed = true; break; }
    }
  }
  return p;
}
export function polyArea(p) { let s = 0; for (let i = 0; i < p.length; i++) s += cross(p[i], p[(i + 1) % p.length]); return s / 2; }
function simpleCCW(p) {
  if (p.length < 3 || polyArea(p) <= 1e-6) return false;
  const n = p.length;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
    if (j === i + 1 || (i === 0 && j === n - 1)) continue;
    if (segCross(p[i], p[(i + 1) % n], p[j], p[(j + 1) % n])) return false;
  }
  return true;
}
function segCross(a, b, c, d) {
  const o = (p, q, r) => Math.sign(cross(sub(q, p), sub(r, p)));
  return o(a, b, c) * o(a, b, d) < 0 && o(c, d, a) * o(c, d, b) < 0;
}

// --------------------------------------------------------------------------------------------------------- justification
/**
 * 0.6 round 2 (bim-comforts_PART_2): the wall's location line — the line it was drawn on and keeps when it gets thicker or
 * its outside is flipped. CadCraft_Wall Justification: center (the centre line, as before) | exterior | interior (its
 * outside / inside face) | left | right (a face, seen from its start). The centre line stays what is stored and placed.
 */
export const JUSTIFICATIONS = ['center', 'exterior', 'interior', 'coreExterior', 'coreInterior', 'coreCenter', 'left', 'right'];
/** How far the location line is from the centre line, to the wall's left (mm). */
export function locationOffset(just, t, extSide, assembly = null) {
  if (String(just).startsWith('core')) {
    const layers = assembly?.layers || [], first = layers.findIndex(l => l.core), last = layers.findLastIndex(l => l.core);
    if (first < 0) return null;
    const outer = layers.slice(0, first).reduce((s,l) => s+l.t, 0), inner = layers.slice(0, last+1).reduce((s,l) => s+l.t, 0);
    const sign = extSide === 'right' ? -1 : 1;
    return sign * (t/2 - (just === 'coreExterior' ? outer : just === 'coreInterior' ? inner : (outer+inner)/2));
  }
  const ext = extSide === 'right' ? -t / 2 : t / 2;
  return just === 'left' ? t / 2 : just === 'right' ? -t / 2 : just === 'exterior' ? ext : just === 'interior' ? -ext : 0;
}
/** The location line of a wall (for the plan): its two ends and bulge (a curved wall's stays concentric). */
export function locationLine(wall) {
  const off = locationOffset(wall.justification, wall.t, wall.extSide, wall.assembly);
  if (!off) return { a: wall.a, b: wall.b, bulge: wall.bulge || 0, off: 0 };
  const g = wallGeom(wall);
  return { a: g.at(0, off), b: g.at(g.L, off), bulge: wall.bulge || 0, off };
}

// --------------------------------------------------------------------------------------------------------------- reading
/** Every wall the tools made, in its storey's plan axes (mm). `storey` limits it to one storey. */
export function readWalls(w, storey = null) {
  const out = [], records = readAssemblyRecords(w), assemblies = records.filter(r=>!r.issue);
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCWALL', true); } catch (e) { list = ids(w.api, w.mid, 'IFCWALL'); }
  const levels = readLevels(w);
  const so = w.storeyOf();
  for (const id of new Set(list)) {
    const ps = w.readPset(id, WALL_PSET);
    if (!ps) continue;
    const st = so.get(id) ?? null;
    if (storey !== null && st !== storey) continue;
    const line = w.api.GetLine(w.mid, id, false);
    const stLine = st ? w.api.GetLine(w.mid, st, false) : null;
    const lp = line.ObjectPlacement?.value;
    if (!lp || !stLine?.ObjectPlacement) continue;
    const M = w.relMatrix(stLine.ObjectPlacement.value, lp);
    const len = Number(ps.Length) * w.unitMm, th = Number(ps.Thickness) * w.unitMm;
    // 0.6 round 2: a curved wall's Length is along its arc; its end is the chord away (Bulge = tan(θ / 4), + anticlockwise)
    const bulge = Number(ps.Bulge ?? 0), chord = chordFor(len, bulge);
    const a = [M[12], M[13]], dir = [M[0], M[1]];
    const dl = Math.hypot(dir[0], dir[1]) || 1;
    const b = [a[0] + dir[0] / dl * chord, a[1] + dir[1] / dl * chord];
    const base = levels.find((l) => l.id === st);
    const wall = {
      id, guid: val(line.GlobalId), storey: st, a, b, len, t: th, z: M[14],
      baseOffset: Number(ps.BaseOffset || 0) * w.unitMm, topLevel: ps.TopLevel || '', topOffset: Number(ps.TopOffset || 0) * w.unitMm,
      fixedHeight: Number(ps.Height || 0) * w.unitMm, typeKey: ps.TypeKey || '', typeName: val(line.ObjectType) || val(line.Name) || '', extSide: ps.ExteriorSide === 'right' ? 'right' : 'left', lp,
      name: val(line.Name) || '',
      bulge, justification: JUSTIFICATIONS.includes(ps.Justification) ? ps.Justification : 'center',
      joinOff: { a: /a/.test(String(ps.JoinOff || '')), b: /b/.test(String(ps.JoinOff || '')) },   // 0.9 FX.60: Disallow join, per end
    };
    wall.referenceIssue = records.find(r=>r.key===wall.typeKey && r.issue)?.issue || null;
    wall.assembly = wall.referenceIssue ? null : wallType(wall.typeKey, assemblies);
    if(!wall.assembly) wall.referenceIssue ||= 'corrupt';
    wall.height = wallHeight(wall, levels, base);
    // 0.9 WT.6 (wall-shape.js): a profile, attached top / base, a slant: only on walls that have one (other walls' rows are unchanged)
    if (ps.Profile || ps.AttachTop || ps.AttachBase || ps.Slant) wall.shape = { profile: ps.Profile || '', attachTop: ps.AttachTop || '', attachBase: ps.AttachBase || '', slant: ps.Slant || '' };
    out.push(wall);
  }
  // 0.9 FX.60: the joins the file holds. A file with none yet (older, or from another program) has no `joins`: the tools find
  // its joins from the geometry until the first change writes them (syncJoins)
  const recs = readJoinRecords(w);
  if (recs.length) {
    const idx = joinsIndex(recs);
    for (const x of out) x.joins = idx.get(x.guid) || [];
  }
  return out;
}
/** A wall's height: to the level its top follows (+ offset) when that level is there, else its own height. */
export function wallHeight(wall, levels, base = levels.find((l) => l.id === wall.storey)) {
  const top = wall.topLevel ? levels.find((l) => l.guid === wall.topLevel) : null;
  if (top && base) { const h = top.elevation + wall.topOffset - (base.elevation + wall.baseOffset); if (h > 1) return h; }
  return wall.fixedHeight > 0 ? wall.fixedHeight : 2438.4;
}

/**
 * 0.7 BIM-MLWALL, walls that run through several levels. A wall is stored on the level it starts on (IfcWall contained in
 * that IfcBuildingStorey, as IFC asks) and its top follows any level above it (TopLevel) or a fixed height; nothing else
 * changes. These read what that means for the other levels:
 *   wallSpan(wall, levels)             → { baseZ, topZ } world mm
 *   wallLevelsPassed(wall, levels)     the levels (above its own) whose floor the wall goes up past, so it shows in their plans
 *   wallsThrough(walls, levels, levelId, cutZ)   the walls of OTHER levels the plan of `levelId` cuts at `cutZ` above its floor
 *   topLevelChoices(levels, storeyId)  the levels a wall starting on `storeyId` can go up to, nearest first
 */
export function wallSpan(wall, levels) {
  const base = levels.find((l) => l.id === wall.storey);
  const baseZ = (base ? base.elevation : 0) + (wall.baseOffset || 0);
  return { baseZ, topZ: baseZ + wall.height };
}
export function wallLevelsPassed(wall, levels) {
  const { baseZ, topZ } = wallSpan(wall, levels);
  return levels.filter((l) => l.id !== wall.storey && l.elevation > baseZ + 1 && l.elevation < topZ - 1);
}
export function wallsThrough(walls, levels, levelId, cutZ) {
  const lv = levels.find((l) => l.id === levelId);
  if (!lv) return [];
  const abs = lv.elevation + cutZ;
  return walls.filter((w) => { if (w.storey === levelId) return false; const { baseZ, topZ } = wallSpan(w, levels); return baseZ + 1 < abs && abs < topZ - 1; });
}
export function topLevelChoices(levels, storeyId) {
  const i = levels.findIndex((l) => l.id === storeyId);
  return i >= 0 ? levels.slice(i + 1) : [];
}

// --------------------------------------------------------------------------------------------------------------- writing
/** The IfcWallType for a starter type: found by its CadCraft_WallType Key, else made with its layer set. */
export function wallTypeLine(w, key) {
  const type = wallType(key, w);
  if (!type) throw Object.assign(new Error('model.err.walltype'), { key: 'model.err.walltype' });
  for (const id of ids(w.api, w.mid, 'IFCWALLTYPE')) {
    const tl = w.api.GetLine(w.mid, id, false);
    for (const h of tl.HasPropertySets || []) {
      const ps = w.api.GetLine(w.mid, h.value, false);
      if (val(ps?.Name) !== WALLTYPE_PSET) continue;
      for (const p of ps.HasProperties || []) { const pl = w.api.GetLine(w.mid, p.value, false); if (val(pl?.Name) === 'Key' && val(pl.NominalValue) === key) return { id, set: layerSetOf(w, id), type }; }
    }
  }
  const layers = writeMaterialLayers(w, type.layers);
  const set = w.make('IFCMATERIALLAYERSET', layers.map((x) => w.H(x)), w.L(typeName(type)), ...(w.v4 ? [null] : []));
  const ps = w.pset(WALLTYPE_PSET, [['Key', 'IFCIDENTIFIER', key], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(typeThickness(type)))]]);
  const id = w.make('IFCWALLTYPE', w.guid(), w.ownerHistory(), w.L(typeName(type)), null, null, [w.H(ps)], null, null, w.L(typeName(type)), 'STANDARD');
  w.associateMaterial(id, set);
  return { id, set, type };
}
function layerSetOf(w, typeId) {
  const m = w.materialRel(typeId);
  return m?.def ?? null;
}

function validWallChanges(changes) {
  for(const key of ['a','b']) if(Object.hasOwn(changes,key) && (!Array.isArray(changes[key]) || changes[key].length!==2 || !changes[key].every(Number.isFinite))) throw new Error(tr('contract.wallinvalid'));
  for(const key of ['bulge','height','baseOffset','topOffset']) if(Object.hasOwn(changes,key) && !Number.isFinite(changes[key])) throw new Error(tr('contract.wallinvalid'));
}
export function addWall(w, { storey, a, b, typeKey = 'ext-2x6', baseOffset = 0, topLevel = '', topOffset = 0, height = 0, extSide = 'left', guid, bulge = 0, justification = 'center', joinOff = null } = {}) {
  validWallChanges({a,b,bulge,height,baseOffset,topOffset});
  if (!(dist(a, b) >= 1)) throw Object.assign(new Error('model.err.short'), { key: 'model.err.short' });
  checkBulge(bulge);
  const L = arcLength(a, b, bulge);   // 0.6 round 2: along the arc for a curved wall
  const st = w.api.GetLine(w.mid, storey, false);
  if (!st || !/BuildingStorey/i.test(st.constructor?.name || '')) throw new Error(tr('place.err.pick_storey'));
  const T = wallTypeLine(w, typeKey);
  const th = typeThickness(T.type);
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
  const lp = w.placeAt(st.ObjectPlacement.value, a[0], a[1], baseOffset, ang);
  const g = w.gid(guid);
  const name = typeName(T.type);
  const id = w.make('IFCWALL', g, w.ownerHistory(), w.L(name), null, w.L(name), w.H(lp), null, null, ...(w.v4 ? ['STANDARD'] : []));
  w.noteGuid(g, id);
  w.contain(id, storey);
  w.relateType(id, T.id);
  w.associateMaterial(id, usage(w, T.set, th, extSide));
  w.upsertPset(id, WALL_PSET, [['TypeKey', 'IFCIDENTIFIER', typeKey], ['Length', 'IFCPOSITIVELENGTHMEASURE', round(w.u(L))], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(th))],
    ['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(height > 0 ? height : 2438.4))], ['BaseOffset', 'IFCLENGTHMEASURE', round(w.u(baseOffset))], ['TopLevel', 'IFCIDENTIFIER', topLevel || ''],
    ['TopOffset', 'IFCLENGTHMEASURE', round(w.u(topOffset))], ['ExteriorSide', 'IFCLABEL', extSide],
    // 0.6 round 2: written only when they say something (a straight wall on its centre line keeps the 0.5 set)
    ...(bulge ? [['Bulge', 'IFCREAL', round(bulge, 9)]] : []), ...(justification && justification !== 'center' ? [['Justification', 'IFCLABEL', JUSTIFICATIONS.includes(justification) ? justification : 'center']] : []),
    // 0.9 WT.3 Join off while drawing / WT.4 a split's free ends: Disallow join written with the wall (FX.70's JoinOff)
    ...(joinOff && (joinOff.a || joinOff.b) ? [['JoinOff', 'IFCIDENTIFIER', (joinOff.a ? 'a' : '') + (joinOff.b ? 'b' : '')]] : [])]);
  w.upsertPset(id, 'Pset_WallCommon', [['Reference', 'IFCIDENTIFIER', name], ['IsExternal', 'IFCBOOLEAN', !!T.type.exterior], ['LoadBearing', 'IFCBOOLEAN', false]]);
  return { id, guid: g };
}
function checkBulge(bulge) {
  if (!Number.isFinite(bulge) || Math.abs(bulge) > BULGE_MAX + 1e-9) throw Object.assign(new Error('comforts.err.arc'), { key: 'comforts.err.arc' });
}
function usage(w, set, th, extSide) {
  const right = extSide === 'right';
  return w.make('IFCMATERIALLAYERSETUSAGE', w.H(set), 'AXIS2', right ? 'POSITIVE' : 'NEGATIVE', round(w.u(right ? -th / 2 : th / 2)), ...(w.v4 ? [null] : []));
}

/**
 * Change a wall. `changes`: a, b (plan points, mm), typeKey, baseOffset, topLevel (GlobalId or ''), topOffset, height
 * (a fixed height; sets topLevel ''), extSide. carryJoined: walls whose end sat on a moved end move with it.
 * → { guids } the walls changed (the page regenerates them and their neighbours).
 */
export function updateWall(w, guid, changes = {}, { carryJoined = true, previousType = null } = {}) {
  validWallChanges(changes);
  const all = readWalls(w);
  const wall = all.find((x) => x.guid === guid);
  if (!wall) throw Object.assign(new Error('model.err.nowall'), { key: 'model.err.nowall' });
  const touched = new Set([guid]);
  const moveEnd = (x, end, to) => {
    const na = end === 'a' ? to : x.a, nb = end === 'b' ? to : x.b;
    if (dist(na, nb) < 1) throw Object.assign(new Error('model.err.short'), { key: 'model.err.short' });
    setGeom(w, x, na, nb);
    x.a = na; x.b = nb;
  };
  let a = changes.a || wall.a, b = changes.b || wall.b;
  // 0.6 round 2 (bim-comforts_PART_2): a new curve (bulge), and the location line kept when the wall gets thicker or its
  // outside flips — the centre line moves over by the difference, and a straight neighbour at a corner meets it again
  const bulgeChanged = Number.isFinite(changes.bulge) && Math.abs(changes.bulge - (wall.bulge || 0)) > 1e-12;
  if (bulgeChanged) checkBulge(changes.bulge);
  const just = JUSTIFICATIONS.includes(changes.justification) ? changes.justification : wall.justification;
  if (!changes.a && !changes.b && just !== 'center') {
    const ty = changes.typeKey ? wallType(changes.typeKey, w) : null, tNew = ty ? typeThickness(ty) : wall.t;
    const shift = locationOffset(just, wall.t, wall.extSide, previousType || wall.assembly) - locationOffset(just, tNew, changes.extSide || wall.extSide, ty || wall.assembly);
    if (Math.abs(shift) > 1e-6) {
      const g = wallGeom(wall);
      a = g.at(0, shift); b = g.at(g.L, shift);
      if (!wall.bulge && !bulgeChanged && carryJoined) {
        // 0.9 FX.65 (spec test 5): the join solver's square move, so the corner follows at an L, at a node of three walls or more, at a T
        // (the stem slides along its host; partitions butting into this wall come with it) and next to a curved wall, as for a Move
        const plan = squareMove(all, guid, shift);
        const mine = plan.get(guid);
        if (mine) { a = mine.a; b = mine.b; }
        for (const [g2, m] of plan) {
          if (g2 === guid) continue;
          const o = all.find((x) => x.guid === g2);
          if (!o || (dist(o.a, m.a) <= 1e-9 && dist(o.b, m.b) <= 1e-9)) continue;
          if (dist(m.a, m.b) < 1) throw Object.assign(new Error('model.err.short'), { key: 'model.err.short' });
          setGeom(w, o, m.a, m.b); o.a = m.a; o.b = m.b; touched.add(g2);
        }
      } else if (!wall.bulge && !bulgeChanged) {
        const u = mul(sub(b, a), 1 / dist(a, b)), na = a, nb = b;
        for (const [end, old] of [['a', wall.a], ['b', wall.b]]) {
          const nbs = all.filter((o) => o.guid !== guid && o.storey === wall.storey && (dist(o.a, old) <= 1 || dist(o.b, old) <= 1));
          if (nbs.length !== 1 || nbs[0].bulge) continue;
          const o = nbs[0], X = meet(na, u, o.a, mul(sub(o.b, o.a), 1 / (dist(o.a, o.b) || 1)));
          if (X && dist(X, end === 'a' ? na : nb) < 4 * Math.max(wall.t, tNew, o.t)) { if (end === 'a') a = X; else b = X; }
        }
      }
    }
  }
  if (bulgeChanged) wall.bulge = changes.bulge;
  if (dist(a, wall.a) > 1e-6 || dist(b, wall.b) > 1e-6 || bulgeChanged) {
    if (carryJoined) {
      for (const [end, old, to] of [['a', wall.a, a], ['b', wall.b, b]]) {
        if (dist(old, to) <= 1e-6) continue;
        for (const o of all) {
          if (o.guid === guid || o.storey !== wall.storey) continue;
          if (dist(o.a, old) <= 1) { moveEnd(o, 'a', to); touched.add(o.guid); } else if (dist(o.b, old) <= 1) { moveEnd(o, 'b', to); touched.add(o.guid); }
        }
      }
    }
    if (dist(a, b) < 1) throw Object.assign(new Error('model.err.short'), { key: 'model.err.short' });
    setGeom(w, wall, a, b);
  }
  const rows = [];
  if (changes.typeKey && (changes.typeKey !== wall.typeKey || changes.refreshType)) {
    const T = wallTypeLine(w, changes.typeKey);
    const th = typeThickness(T.type);
    // the type relation: out of the old one (gone when it is left empty), into the new type's
    for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE')) {
      const r = w.api.GetLine(w.mid, rid, false);
      if (!(r.RelatedObjects || []).some((h) => h.value === wall.id) || r.RelatingType?.value === T.id) continue;
      const rest = r.RelatedObjects.filter((h) => h.value !== wall.id);
      const l = w.touch(rid);
      if (rest.length) { l.RelatedObjects = rest; w.write(l); } else deleteLine(w.api, w.mid, rid);
    }
    w.relateType(wall.id, T.id);
    const name = typeName(T.type);
    const line = w.touch(wall.id); line.Name = w.L(name); line.ObjectType = w.L(name); w.write(line);
    rows.push(['TypeKey', 'IFCIDENTIFIER', changes.typeKey], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(th))]);
    w.upsertPset(wall.id, 'Pset_WallCommon', [['Reference', 'IFCIDENTIFIER', name], ['IsExternal', 'IFCBOOLEAN', !!T.type.exterior]]);
    setUsage(w, wall.id, T.set, th, changes.extSide || wall.extSide);
  } else if (changes.extSide && changes.extSide !== wall.extSide) {
    const m = w.materialRel(wall.id);
    const u = m && w.api.GetLine(w.mid, m.def, false);
    if (u?.ForLayerSet) setUsage(w, wall.id, u.ForLayerSet.value, wall.t, changes.extSide);
  }
  if (changes.extSide) rows.push(['ExteriorSide', 'IFCLABEL', changes.extSide === 'right' ? 'right' : 'left']);
  if (Number.isFinite(changes.baseOffset)) {
    rows.push(['BaseOffset', 'IFCLENGTHMEASURE', round(w.u(changes.baseOffset))]);
    const M = w.relMatrix(w.api.GetLine(w.mid, wall.storey, false).ObjectPlacement.value, wall.lp);
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
    if (Math.abs(M[14] - changes.baseOffset) > 1e-6) w.movePlacement(wall.lp, a[0], a[1], changes.baseOffset, ang);
  }
  if (just !== wall.justification) rows.push(['Justification', 'IFCLABEL', just]);
  if (changes.joinAllowed && typeof changes.joinAllowed === 'object') {   // 0.9 FX.60: Allow / Disallow join at an end: { a: bool, b: bool }
    const off = { a: wall.joinOff.a, b: wall.joinOff.b };
    for (const e of ['a', 'b']) if (typeof changes.joinAllowed[e] === 'boolean') off[e] = !changes.joinAllowed[e];
    rows.push(['JoinOff', 'IFCIDENTIFIER', (off.a ? 'a' : '') + (off.b ? 'b' : '') || 'none']);
  }
  if (changes.topLevel !== undefined) rows.push(['TopLevel', 'IFCIDENTIFIER', changes.topLevel || '']);
  if (Number.isFinite(changes.topOffset)) rows.push(['TopOffset', 'IFCLENGTHMEASURE', round(w.u(changes.topOffset))]);
  if (Number.isFinite(changes.height) && changes.height > 0) rows.push(['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(changes.height))], ['TopLevel', 'IFCIDENTIFIER', '']);
  if (rows.length) w.upsertPset(wall.id, WALL_PSET, dedupe(rows));
  return { guids: [...touched] };
}
const dedupe = (rows) => [...new Map(rows.map((r) => [r[0], r])).values()];
function setGeom(w, wall, a, b) {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
  const M = w.relMatrix(w.api.GetLine(w.mid, wall.storey, false).ObjectPlacement.value, wall.lp);
  w.movePlacement(wall.lp, a[0], a[1], M[14], ang);
  const bg = wall.bulge || 0;   // 0.6 round 2: a curved wall keeps its turn; its Length runs along the arc
  w.upsertPset(wall.id, WALL_PSET, [['Length', 'IFCPOSITIVELENGTHMEASURE', round(w.u(arcLength(a, b, bg)))], ...(bg || w.readPset(wall.id, WALL_PSET)?.Bulge !== undefined ? [['Bulge', 'IFCREAL', round(bg, 9)]] : [])]);
}
function setUsage(w, wallId, set, th, extSide) {
  const m = w.materialRel(wallId);
  if (m) {
    const r = w.touch(m.rel);
    r.RelatingMaterial = w.H(usage(w, set, th, extSide));
    w.write(r);
    const old = w.api.GetLine(w.mid, m.def, false);
    if (/USAGE$/i.test(old?.constructor?.name || '')) { w.touch(m.def); deleteLine(w.api, w.mid, m.def); }
  } else w.associateMaterial(wallId, usage(w, set, th, extSide));
}

/** Delete walls with what they host: openings (IfcRelVoidsElement) and what fills them. → the storeys touched. */
export function deleteWalls(w, guids) {
  const R = w.hostIndex();
  const list = [], storeys = new Set();
  const so = w.storeyOf();
  for (const g of guids) {
    const id = w.byGuid(g);
    if (!id) continue;
    list.push(id);
    storeys.add(so.get(id));
    for (const op of R.voids.get(id) || []) { list.push(op); for (const f of R.fills.get(op) || []) list.push(f); }
  }
  if (list.length) w.dropProduct(list);
  return { storeys: [...storeys].filter((s) => s !== undefined && s !== null) };
}

// ------------------------------------------------------------------------------------------------------------ the join record
/**
 * 0.9 FX.60 (wall tool spec section 5): a join is stored as IfcRelConnectsPathElements between the two walls: RelatingElement and
 * RelatedElement in guid order, each with where it meets (ATSTART | ATEND | ATPATH = along its side), named "CadCraft join L|T|X".
 * Other programs read it; the style and the per-end Disallow switch live on the wall (CadCraft_Wall JoinOff = 'a', 'b', 'ab' or 'none').
 * Only records with that name are ours: syncJoins never removes another program's.
 */
const JOIN_NAME = 'CadCraft join';
const CONN = { start: 'ATSTART', end: 'ATEND', mid: 'ATPATH' };
const POS_OF = { ATSTART: 'start', ATEND: 'end', ATPATH: 'mid' };
const enumOf = (v) => String(val(v) ?? '').replace(/\./g, '').toUpperCase();
/** Our join records: [{ relId, key, kind, a: { guid, pos }, b: { guid, pos } }]. */
export function readJoinRecords(w) {
  const out = [];
  let rels = [];
  try { rels = ids(w.api, w.mid, 'IFCRELCONNECTSPATHELEMENTS'); } catch (e) { return out; }
  const guidOf = new Map();
  const g = (h) => { const id = h?.value; if (!id) return null; if (!guidOf.has(id)) guidOf.set(id, val(w.api.GetLine(w.mid, id, false)?.GlobalId) || null); return guidOf.get(id); };
  for (const relId of rels) {
    const r = w.api.GetLine(w.mid, relId, false);
    if (!String(val(r?.Name) || '').startsWith(JOIN_NAME)) continue;
    const A = g(r.RelatingElement), B = g(r.RelatedElement), pa = POS_OF[enumOf(r.RelatingConnectionType)], pb = POS_OF[enumOf(r.RelatedConnectionType)];
    if (!A || !B || !pa || !pb) continue;
    const a = { guid: A, pos: pa }, b = { guid: B, pos: pb };
    out.push({ relId, key: joinKey(a, b), kind: kindOf(pa, pb), a, b });
  }
  return out;
}
/**
 * Make the file's joins the ones its walls ask for (one storey's walls, as readWalls gave them): a record is made when an end lands on
 * a wall (or crosses one), removed when it no longer does or the end is disallowed. Walls are never replaced; ids stay. → { added, removed }
 */
export function syncJoins(w, walls) {
  if (!walls.length) return { added: 0, removed: 0 };
  const here = new Set(walls.map((x) => x.guid)), idOf = new Map(walls.map((x) => [x.guid, x.id]));
  const stored = readJoinRecords(w).filter((r) => here.has(r.a.guid) && here.has(r.b.guid));
  const { add, remove } = reconcile(deriveJoins(walls.map((x) => ({ guid: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, joinOff: x.joinOff }))), stored);
  for (const r of remove) { w.touch(r.relId); deleteLine(w.api, w.mid, r.relId); }
  for (const r of add) {
    w.make('IFCRELCONNECTSPATHELEMENTS', w.guid(), w.ownerHistory(), w.L(JOIN_NAME + ' ' + r.kind), null, null, w.H(idOf.get(r.a.guid)), w.H(idOf.get(r.b.guid)), [], [], CONN[r.b.pos], CONN[r.a.pos]);
  }
  return { added: add.length, removed: remove.length };
}

/**
 * Bring a storey's walls up to date: every wall whose joined outline, length or height differs from what its shape holds
 * gets a new shape, quantities and pset values; `force` (GlobalIds) are redone anyway (their openings changed).
 * Call it after any change to walls, levels or openings. → { walls: how many were rewritten }
 */
// Below the 0.005 mm F02 bound; keep the separate 1 mm join tolerance unchanged.
const SHAPE_TOL_MM = 0.001;
/**
 * 0.9 WT.6: the wall Shape tools (wall-shape.js) hand their body writer in here, so this file never imports them (no import loop):
 * { write(w, wall, poly, host, cache, forced) → wrote?, afterMove?(w, before, after, guids) }. Without it (a Node run that never
 * loads wall-shape.js) a shaped wall is written as its plain extrusion.
 */
let SHAPE_HOOKS = null;
export function setWallShapeHooks(h) { SHAPE_HOOKS = h || null; }
export function wallShapeHooks() { return SHAPE_HOOKS; }
/** 0.9 WT.6: the storeys whose walls are attached to a roof, slab or ceiling made again (after those changed): → walls rewritten. */
export function regenAttached(w) {
  if (!SHAPE_HOOKS) return 0;
  const st = new Set(readWalls(w).filter((x) => x.shape && (x.shape.attachTop || x.shape.attachBase)).map((x) => x.storey));
  let n = 0;
  for (const s0 of st) n += regenWalls(w, s0).walls;
  return n;
}
export function regenWalls(w, storey, force = null) {
  const walls = readWalls(w, storey);
  if (!walls.length) return { walls: 0 };
  syncJoins(w, walls);   // 0.9 FX.60: the join records follow what the walls now do (every change of walls ends here)
  const outlines = wallOutlines(walls.map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff })));
  const forced = new Set(force || []);
  const host = w.hostIndex();
  let n = 0;
  const shapeCache = {};   // 0.9 WT.6: what the attached roofs and slabs are, read once for this storey's walls
  for (const wall of walls) {
    const poly = outlines.get(wall.guid);
    if (!poly) continue;
    if (SHAPE_HOOKS && wall.shape && !wall.bulge) { if (SHAPE_HOOKS.write(w, wall, poly, host, shapeCache, forced.has(wall.guid))) n++; continue; }   // 0.9 WT.6: a shaped wall's body
    const local = profileKeyPoints(toLocal(wall, poly.bulged || poly), w.v4);
    if (!forced.has(wall.guid)) {
      const cur = storedShape(w, wall.id);
      if (cur && Math.abs(cur.depth - wall.height) < SHAPE_TOL_MM && Math.abs(cur.len - wall.len) < SHAPE_TOL_MM && samePoly(cur.points, local)) continue;
    }
    writeWallShape(w, wall, poly, host);
    n++;
  }
  return { walls: n };
}
const toLocal = (wall, poly) => {
  const ang = Math.atan2(wall.b[1] - wall.a[1], wall.b[0] - wall.a[0]), c = Math.cos(ang), s = Math.sin(ang);
  return poly.map(([x, y, bg]) => (bg ? [(x - wall.a[0]) * c + (y - wall.a[1]) * s, -(x - wall.a[0]) * s + (y - wall.a[1]) * c, bg] : [(x - wall.a[0]) * c + (y - wall.a[1]) * s, -(x - wall.a[0]) * s + (y - wall.a[1]) * c]));
};
function samePoly(a, b) {
  if (a.length !== b.length) return false;
  for (let k = 0; k < a.length; k++) { if (a.every((p, i) => dist(p, b[(i + k) % b.length]) < SHAPE_TOL_MM)) return true; }
  return false;
}
/** What the wall's shape holds now: its body outline (wall axes, mm, closing point dropped), extrusion depth, axis length. */
export function storedShape(w, id) {
  const g = (x) => (x ? w.api.GetLine(w.mid, x.value ?? x, false) : null);
  const line = g(w.api.GetLine(w.mid, id, false)?.Representation);
  if (!line) return null;
  let points = null, depth = null, len = null;
  for (const h of line.Representations || []) {
    const r = g(h);
    const ident = val(r?.RepresentationIdentifier);
    const item = g((r?.Items || [])[0]);
    if (ident === 'Body' && item?.SweptArea) {
      depth = Number(val(item.Depth)) * w.unitMm;
      const curve = g(g(item.SweptArea)?.OuterCurve);
      // 0.6 round 2: a curved wall's profile is an IfcIndexedPolyCurve (its point list: corners and the arcs' middles)
      if (Array.isArray(curve?.Points)) points = curve.Points.map((p) => g(p).Coordinates.map((v) => Number(val(v)) * w.unitMm));
      else points = (g(curve?.Points)?.CoordList || []).map((q) => q.map((v) => Number(val(v)) * w.unitMm));
      if (points.length > 1 && dist(points[0], points[points.length - 1]) < 1e-6) points.pop();
    } else if (ident === 'Axis' && item?.Points) {
      const pts = item.Points.map((p) => g(p).Coordinates.map((v) => Number(val(v)) * w.unitMm));
      len = pts.length > 1 ? dist(pts[0], pts[pts.length - 1]) : 0;
    } else if (ident === 'Axis' && item?.BasisCurve) {
      // an IfcTrimmedCurve of an IfcCircle: the arc between its two trimming points, the way it runs
      const circ = g(item.BasisCurve), R = Number(val(circ?.Radius)) * w.unitMm, cpt = g(g(circ?.Position)?.Location)?.Coordinates?.map((v) => Number(val(v)) * w.unitMm);
      const tp = (tr) => { const h = (tr || []).find((x) => x && typeof x === 'object' && x.type === 5 && g(x)?.Coordinates); return h ? g(h).Coordinates.map((v) => Number(val(v)) * w.unitMm) : null; };
      const p1 = tp(item.Trim1), p2 = tp(item.Trim2);
      if (R > 0 && cpt && p1 && p2) {
        const sense = item.SenseAgreement === true || /^(\.?T\.?|true)$/i.test(String(val(item.SenseAgreement)));
        let d = Math.atan2(p2[1] - cpt[1], p2[0] - cpt[0]) - Math.atan2(p1[1] - cpt[1], p1[0] - cpt[0]);
        if (sense) { while (d <= 0) d += 2 * Math.PI; } else { while (d >= 0) d -= 2 * Math.PI; }
        len = R * Math.abs(d);
      }
    }
  }
  return points ? { points, depth, len } : null;
}

/** The wall's Axis and Body from its outline (plan, mm) and height; quantities with its openings taken off. */
export function writeWallShape(w, wall, poly, host = w.hostIndex()) {
  const local = toLocal(wall, poly);
  // 0.6 round 2: a curved wall's Axis is an arc (IfcTrimmedCurve of an IfcCircle) and its profile has arc edges
  const curved = !!arcOf(wall.a, wall.b, wall.bulge) && poly.bulged;
  const axis = w.rep('axis', 'Axis', 'Curve2D', [curved ? arcAxisCurve(w, wall) : w.polyline2([[0, 0], [wall.len, 0]])]);
  const prof = curved ? w.make('IFCARBITRARYCLOSEDPROFILEDEF', 'AREA', null, w.H(profileCurve(w, toLocal(wall, poly.bulged)))) : w.profile(local);
  const body = w.rep('body', 'Body', 'SweptSolid', [w.extrude(prof, 0, wall.height)]);
  w.setShape(wall.id, [axis, body]);
  const foot = Math.abs(polyArea(local));
  let openArea = 0, openVol = 0;
  for (const op of host.voids.get(wall.id) || []) {
    const q = w.readPset(op, 'CadCraft_Opening');
    if (!q) continue;
    const ow = Number(q.Width) * w.unitMm, oh = Number(q.Height) * w.unitMm;
    if (ow > 0 && oh > 0) { openArea += ow * oh; openVol += ow * oh * wall.t; }
  }
  w.upsertQto(wall.id, 'Qto_WallBaseQuantities', [['Length', 'length', wall.len], ['Width', 'length', wall.t], ['Height', 'length', wall.height],
    ['GrossFootprintArea', 'area', foot], ['GrossSideArea', 'area', wall.len * wall.height], ['NetSideArea', 'area', Math.max(0, wall.len * wall.height - openArea)],
    ['GrossVolume', 'volume', foot * wall.height], ['NetVolume', 'volume', Math.max(0, foot * wall.height - openVol)]]);
  const rows = [['Length', 'IFCPOSITIVELENGTHMEASURE', round(w.u(wall.len))], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(wall.t))]];
  if (wall.topLevel) rows.push(['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(wall.height))]);
  w.upsertPset(wall.id, WALL_PSET, rows);
}
