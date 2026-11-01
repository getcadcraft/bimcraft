/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-framing.js — framing generated from the model and kept with it (0.5 part 4, RC.9). No DOM: bin/test-bimcraft.mjs
 * --res runs it in Node.
 *
 *   LUMBER · HEADER_TABLE · JOIST_TABLE · RAFTER_TABLE · CEILING_TABLE     labelled defaults, not engineering
 *   frameWall(wall, ctx) → [piece]   plates, studs on layout, kings, jacks, headers, cripples, rough sills, corner and tee
 *                                     studs, blocking — in the wall's own axes (x along from its start, y across, z up)
 *   frameFloor(loop, ctx) → [piece]  joists in the plan of the floor's level, rims, trimmers and headers round openings
 *   frameRoof(roof, ctx) → [piece]   rafters (jacks where hips and valleys cut them), hip and valley rafters, ridge boards,
 *                                     ceiling joists, collar ties — or trusses, one element each
 *   piece = { role, size: '2x6' | …, box: { o, x, y, z, dx, dy, dz } (wall / floor axes) | line: [a3, b3] (a swept member),
 *             depth, width, length, note }
 *   readFraming(w) · frameHosts({ hosts: [guid], spacing, corners, blocking, roofMode }) → op · changeFraming(guid, ch) →
 *   op · removeFraming([guid]) → op · keepPiece(guid) → op · syncFraming(w, storey) (res-follow.js) · lumberList(w, opts)
 *
 * Written as an IfcElementAssembly per framed host (ObjectType "Framing", CadCraft_Framing: Host = the wall / floor /
 * roof GlobalId, Kind, Spacing, Corners, Blocking, RoofMode, ShapeKey; CadCraft_FramingQuantities Pieces, BoardFeet)
 * contained in the host's level, aggregating IfcMember (.STUD. .PLATE. .RAFTER. .COLLAR. or .USERDEFINED. blocking /
 * truss) and IfcBeam (.LINTEL. headers, .JOIST. joists and rims, ridge boards) with CadCraft_Lumber (Role, Size, Length,
 * BoardFeet, Generated, Check). A host that changes makes its generated pieces again; pieces kept by hand (Generated false)
 * stay and get Check "the framing round it changed".
 */
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { readWalls, wallOutlines, wallType } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { readDerived, storeyLoops } from './model-slabs.js';
import { loopAt } from './model-rooms.js';
import { edgeKinds, roofGeometry, heightAt } from './res-roof.js';
import { faceZ } from './res-skeleton.js';
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { activeTji, activeTjiKey, pickTji, tjiStatement } from './tji-table.js';   // 0.8 GH.3-E: the joist maker's table the person loaded

const IN = 25.4, FT = 304.8;
export const FRAME_PSET = 'CadCraft_Framing', LUMBER_PSET = 'CadCraft_Lumber', TJI_PSET = 'CadCraft_FramingTJI';
/** Dressed sizes (mm): thickness × depth; nominal inches for board feet. Metric names for the same pieces. */
export const LUMBER = {
  '2x4': { t: 1.5 * IN, d: 3.5 * IN, nom: [2, 4], metric: '38 × 89' },
  '2x6': { t: 1.5 * IN, d: 5.5 * IN, nom: [2, 6], metric: '38 × 140' },
  '2x8': { t: 1.5 * IN, d: 7.25 * IN, nom: [2, 8], metric: '38 × 184' },
  '2x10': { t: 1.5 * IN, d: 9.25 * IN, nom: [2, 10], metric: '38 × 235' },
  '2x12': { t: 1.5 * IN, d: 11.25 * IN, nom: [2, 12], metric: '38 × 286' },
};
const SIZES = ['2x4', '2x6', '2x8', '2x10', '2x12'];
/** Headers in bearing walls (two plies on edge) by rough opening width — labelled defaults for a one-story roof load. */
export const HEADER_TABLE = [[3 * FT, '2x6'], [4 * FT, '2x8'], [6 * FT, '2x10'], [8 * FT, '2x12']];
/** Floor joists, max span (mm) at 16" and 24" on centre — labelled defaults (40 psf live, No. 2 spruce-pine-fir). */
export const JOIST_TABLE = { 406.4: [['2x6', 9.75 * FT], ['2x8', 12.8 * FT], ['2x10', 16.4 * FT], ['2x12', 19.9 * FT]], 609.6: [['2x6', 8.5 * FT], ['2x8', 11.25 * FT], ['2x10', 14.3 * FT], ['2x12', 17.4 * FT]] };
// TJI joists carry NO built-in span data: a joist maker's tables are the maker's. Series and depth come only from a table the person
// loads (tji-table.js, format cadcraft-tji-table); with none loaded a TJI layout is refused ('tji.err.none') and joists already placed stay as they are.
/** Rafters, max horizontal span — labelled defaults (30 psf snow). */
export const RAFTER_TABLE = { 406.4: [['2x6', 13.5 * FT], ['2x8', 17 * FT], ['2x10', 21 * FT], ['2x12', 25 * FT]], 609.6: [['2x6', 11 * FT], ['2x8', 14 * FT], ['2x10', 17 * FT], ['2x12', 20.5 * FT]] };
/** Ceiling joists, max span — labelled defaults (attic without storage). */
export const CEILING_TABLE = { 406.4: [['2x4', 10 * FT], ['2x6', 15.5 * FT], ['2x8', 20.5 * FT], ['2x10', 26 * FT]], 609.6: [['2x4', 8.5 * FT], ['2x6', 13.5 * FT], ['2x8', 17.75 * FT], ['2x10', 22.75 * FT]] };
export const FRAME_DEFAULTS = { spacing: 16 * IN, corners: 'three-stud', blocking: true, roofMode: 'stick', floorMode: 'lumber', floorDir: 'auto' };
const tableFor = (T, sp) => T[Math.abs(sp - 609.6) < 50 ? 609.6 : 406.4];
/** The smallest size in a span table that reaches `span` (else the largest, flagged). */
export function sizeFor(table, span) {
  for (const [size, max] of table) if (span <= max + 1e-6) return { size, over: false };
  return { size: table[table.length - 1][0], over: true };
}
export function headerFor(width, bearing = true) {
  if (!bearing) return { size: width > 8 * FT ? '2x12' : '2x4', plies: 2, over: width > 8 * FT };
  for (const [max, size] of HEADER_TABLE) if (width <= max + 1e-6) return { size, plies: 2, over: false };
  return { size: '2x12', plies: 3, over: true };
}
/** Board feet of a piece: nominal thickness × depth (in) × length (ft) / 12. */
export function boardFeet(size, length) { const L = LUMBER[size]; return L ? L.nom[0] * L.nom[1] * (length / FT) / 12 : 0; }
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

// ------------------------------------------------------------------------------------------------------------ walls
/** The stud layer's band across a wall (y in the wall's axes: +y = its left), or null for a wall with no studs. */
export function studBand(wall) {
  const ty = (wall.assembly || wallType(wall.typeKey));
  if (!ty) return null;
  const t = ty.layers.reduce((s, l) => s + l.t, 0);
  let cum = 0, band = null;
  const sgn = wall.extSide === 'right' ? -1 : 1;   // the exterior face's side
  for (const l of ty.layers) {
    if (l.mat === 'studs') { const y0 = sgn * (t / 2 - cum - l.t), y1 = sgn * (t / 2 - cum); band = { y0: Math.min(y0, y1), y1: Math.max(y0, y1), depth: l.t }; }
    cum += l.t;
  }
  return band;
}
const studSize = (depth) => SIZES.find((s) => Math.abs(LUMBER[s].d - depth) < 3) || null;
function lineHit(p, d, q, e) { const c = cross(d, e); if (Math.abs(c) < 1e-9) return null; return cross(sub(q, p), e) / c; }

/**
 * A wall's pieces. ctx: { walls (the level's drawn walls), openings (this wall's), spacing, corners, blocking, bearing }.
 * Ends: at an L corner the wall whose GlobalId sorts first runs through to the outside of the other's studs and takes the
 * corner studs; the other stops against it. At a T the stem stops against the through wall, which gets two backer studs.
 */
export function frameWall(wall, ctx) {
  if (wall.bulge) return { pieces: [], error: 'comforts.err.curvedframe' };   // 0.6 round 2: a curved wall is not framed yet
  const band = studBand(wall);
  if (!band) return { pieces: [], error: 'res.err.nostuds' };
  const size = studSize(band.depth) || '2x4';
  const S = LUMBER[size], T = S.t;
  const u = [(wall.b[0] - wall.a[0]) / wall.len, (wall.b[1] - wall.a[1]) / wall.len], n = [-u[1], u[0]];
  const yc = (band.y0 + band.y1) / 2, yb0 = band.y0, yd = band.y1 - band.y0;
  const toPlan = (x, y) => [wall.a[0] + u[0] * x + n[0] * y, wall.a[1] + u[1] * x + n[1] * y];
  const toLocal = (p) => [dot(sub(p, wall.a), u), dot(sub(p, wall.a), n)];
  const H = wall.height, spacing = ctx.spacing || FRAME_DEFAULTS.spacing;
  const flatY = wall.extSide === 'right' ? band.y1 - T : band.y0;   // a flat stud lies against the inside face of the studs
  const pieces = [];
  const box = (role, sz, x0, x1, z0, z1, y0 = yb0, y1 = yb0 + yd, extra = {}) => { if (x1 - x0 > 1 && z1 - z0 > 1) pieces.push({ role, size: sz, box: { x0, x1, y0, y1, z0, z1 }, length: Math.max(x1 - x0, z1 - z0), ...extra }); };
  // ends: where this wall's framing starts and stops along it
  let x0 = 0, x1 = wall.len;
  const ends = [{ at: 'a', p: wall.a, x: 0 }, { at: 'b', p: wall.b, x: wall.len }];
  const cornerAt = [];   // [{ x, through, other }]
  const tees = [];
  for (const o of ctx.walls) {
    if (o.guid === wall.guid) continue;
    const ob = studBand(o);
    if (!ob) continue;
    const ou = [(o.b[0] - o.a[0]) / o.len, (o.b[1] - o.a[1]) / o.len], on = [-ou[1], ou[0]];
    const oEdge = (y) => [o.a[0] + on[0] * y, o.a[1] + on[1] * y];   // a point on the other wall's line y
    for (const e of ends) {
      const shared = [o.a, o.b].find((q) => Math.hypot(q[0] - e.p[0], q[1] - e.p[1]) < Math.max(wall.t, o.t) / 2 + 1);
      if (shared) {
        if (Math.abs(cross(u, ou)) < 0.05) continue;   // in line: a straight joint, no corner
        const through = wall.guid < o.guid;
        // the other wall's stud band edges, as lines; which is farther from this wall's body
        const mid = toPlan(wall.len / 2, 0);
        const e0 = oEdge(ob.y0), e1 = oEdge(ob.y1);
        const far0 = Math.abs(dot(sub(mid, e0), on)) > Math.abs(dot(sub(mid, e1), on));
        const outer = far0 ? e0 : e1, inner = far0 ? e1 : e0;
        const tOut = lineHit(toPlan(0, yc), u, outer, ou), tIn = lineHit(toPlan(0, yc), u, inner, ou);
        if (tOut === null || tIn === null) continue;
        if (e.at === 'a') x0 = through ? Math.min(tOut, tIn) : Math.max(tOut, tIn); else x1 = through ? Math.max(tOut, tIn) : Math.min(tOut, tIn);
        if (through) cornerAt.push({ at: e.at, depth: ob.depth });
        continue;
      }
      // this end on the other wall's middle: a T — stop against its studs
      const s = dot(sub(e.p, o.a), ou), d = Math.abs(dot(sub(e.p, o.a), on));
      if (s > 1 && s < o.len - 1 && d < o.t / 2 + 1) {
        const mid = toPlan(wall.len / 2, 0);
        const e0 = oEdge(ob.y0), e1 = oEdge(ob.y1);
        const near0 = Math.abs(dot(sub(mid, e0), on)) < Math.abs(dot(sub(mid, e1), on));
        const face = near0 ? e0 : e1;
        const tf = lineHit(toPlan(0, yc), u, face, ou);
        if (tf !== null) { if (e.at === 'a') x0 = tf; else x1 = tf; }
      }
    }
    // the other wall's end on this wall's middle: backer studs here
    for (const q of [o.a, o.b]) {
      const [s, d] = toLocal(q);
      if (s > T && s < wall.len - T && Math.abs(d) < wall.t / 2 + 1 && Math.abs(cross(u, ou)) > 0.05) tees.push({ x: s, depth: ob.depth });
    }
  }
  if (x1 - x0 < 3 * T) return { pieces: [], error: 'res.err.shortwall' };
  // plates (the bottom one cut at doors)
  const doors = (ctx.openings || []).filter((o) => o.kind === 'door').map((o) => [o.offset, o.offset + o.width]).sort((p, q) => p[0] - q[0]);
  let px = x0;
  for (const [d0, d1] of doors) { box('plate.bottom', size, px, Math.max(px, d0), 0, T); px = Math.max(px, d1); }
  box('plate.bottom', size, px, x1, 0, T);
  box('plate.top', size, x0, x1, H - 2 * T, H - T);
  box('plate.cap', size, x0, x1, H - T, H);
  const zs0 = T, zs1 = H - 2 * T;   // studs between the bottom plate and the double top plate
  const vert = [];   // x ranges taken by vertical pieces
  const stud = (role, x, z0 = zs0, z1 = zs1, flat = false) => {
    if (flat) { box(role, size, x - S.d / 2, x + S.d / 2, z0, z1, flatY, flatY + T); vert.push([x - S.d / 2, x + S.d / 2]); return; }
    box(role, size, x - T / 2, x + T / 2, z0, z1); vert.push([x - T / 2, x + T / 2]);
  };
  const taken = (x, w = T) => vert.some(([a, b]) => x + w / 2 > a - 1 && x - w / 2 < b + 1);
  // openings: kings, jacks, header, cripples, sills
  const blocked = [];   // x ranges with no layout studs (between the kings' outer faces)
  const notes = [];
  for (const o of (ctx.openings || []).slice().sort((p, q) => p.offset - q.offset)) {
    const ro0 = o.offset, ro1 = o.offset + o.width, head = o.sill + o.height;
    const hd = headerFor(o.width, ctx.bearing !== false);
    const jacks = o.width > 6 * FT ? 2 : 1;
    const hx0 = ro0 - jacks * T, hx1 = ro1 + jacks * T;
    const hDepth = LUMBER[hd.size].d;
    for (let j = 0; j < jacks; j++) { stud('jack', ro0 - T * (j + 0.5), zs0, head); stud('jack', ro1 + T * (j + 0.5), zs0, head); }
    stud('king', hx0 - T / 2); stud('king', hx1 + T / 2);
    const hTop = Math.min(head + hDepth, zs1);
    box('header', hd.size, hx0, hx1, head, hTop, yb0, yb0 + yd, { plies: hd.plies });
    if (hd.over) notes.push('header');
    if (head + hDepth > zs1 + 1) notes.push('headerroom');
    // cripples above the header and below a window, on the layout
    const lay = (a, b) => { const out = []; for (let k = Math.ceil((a - x0) / spacing); x0 + k * spacing < b; k++) out.push(x0 + k * spacing); return out; };
    if (zs1 - hTop > T) for (const x of lay(hx0 + T / 2, hx1 - T / 2)) stud('cripple', x, hTop, zs1);
    if (o.kind === 'window' && o.sill > 2 * T) {
      box('sill', size, ro0, ro1, o.sill - T, o.sill);
      for (const x of [ro0 + T / 2, ...lay(ro0 + T, ro1 - T), ro1 - T / 2]) stud('cripple', x, zs0, o.sill - T);
    }
    blocked.push([hx0 - T, hx1 + T]);
  }
  // ends, corners and tees
  stud('stud.end', x0 + T / 2); stud('stud.end', x1 - T / 2);
  for (const c of cornerAt) {
    const sgn = c.at === 'a' ? 1 : -1, xe = c.at === 'a' ? x0 : x1;
    if (ctx.corners === 'california') stud('stud.corner', xe + sgn * (c.depth + S.d / 2), zs0, zs1, true);
    else { stud('stud.corner', xe + sgn * (T * 1.5)); stud('stud.corner', xe + sgn * (c.depth + T * 0.5)); }
  }
  for (const te of tees) { stud('stud.tee', te.x - te.depth / 2 - T / 2); stud('stud.tee', te.x + te.depth / 2 + T / 2); }
  // the layout: on centre from the wall's start
  for (let k = 1; x0 + k * spacing < x1 - T; k++) {
    const x = x0 + k * spacing;
    if (blocked.some(([a, b]) => x > a && x < b) || taken(x)) continue;
    stud('stud', x);
  }
  // blocking: one row between the studs at mid-height (not across openings)
  if (ctx.blocking !== false) {
    const zb = Math.min(48 * IN, (zs0 + zs1) / 2);
    const xs = vert.slice().sort((p, q) => p[0] - q[0]);
    for (let i = 0; i + 1 < xs.length; i++) {
      const a = xs[i][1], b = xs[i + 1][0];
      if (b - a < 2 || blocked.some(([p, q]) => (a + b) / 2 > p && (a + b) / 2 < q)) continue;
      box('blocking', size, a, b, zb - T / 2, zb + T / 2);
    }
  }
  return { pieces, size, x0, x1, notes, toPlan };
}

// ------------------------------------------------------------------------------------------------------------ floors
/** Clip a line (point p, direction d) to a polygon → [t0, t1] intervals inside it. */
function clipLine(p, d, poly) {
  const ts = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], e = sub(b, a), c = cross(d, e);
    if (Math.abs(c) < 1e-12) continue;
    const t = cross(sub(a, p), e) / c, s = cross(sub(a, p), d) / c;
    if (s >= -1e-9 && s < 1 - 1e-9) ts.push(t);
  }
  ts.sort((x, y) => x - y);
  const out = [];
  for (let i = 0; i + 1 < ts.length; i += 2) if (ts[i + 1] - ts[i] > 1) out.push([ts[i], ts[i + 1]]);
  return out;
}
function insetPoly(P, dd) {
  const n = P.length, E = P.map((a, i) => { const b = P[(i + 1) % n], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, uu = [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; return { a, u: uu, n: [-uu[1], uu[0]] }; });
  return E.map((e, i) => {
    const f = E[(i + n - 1) % n];
    const p0 = [f.a[0] + f.n[0] * dd, f.a[1] + f.n[1] * dd], p1 = [e.a[0] + e.n[0] * dd, e.a[1] + e.n[1] * dd];
    const c = cross(f.u, e.u);
    if (Math.abs(c) < 1e-9) return p1;
    const t = cross(sub(p1, p0), e.u) / c;
    return [p0[0] + f.u[0] * t, p0[1] + f.u[1] * t];
  });
}
/**
 * A floor's pieces in its level's plan: joists across `dir` (unit vector of the joists; default the short way of the
 * floor), rims round the edge, trimmers and headers round each opening (plan polygons). ctx: { top (the floor's top z),
 * spacing, dir, openings }.
 */
export function frameFloor(poly, ctx) {
  const sp = ctx.spacing || FRAME_DEFAULTS.spacing, pieces = [], notes = [];
  // the joists run the short way of the floor's bounding box in its longest edge's frame
  let ax = ctx.dir || (ctx.floorDir === 'x' ? [1, 0] : ctx.floorDir === 'y' ? [0, 1] : null);
  if (!ax) {
    let best = null;
    for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (!best || L > best.L) best = { L, u: [(b[0] - a[0]) / L, (b[1] - a[1]) / L] }; }
    const u = best.u, v = [-u[1], u[0]];
    const ext = (d) => { const s = poly.map((p) => dot(p, d)); return Math.max(...s) - Math.min(...s); };
    ax = ext(u) <= ext(v) ? u : v;
  }
  const across = [-ax[1], ax[0]];
  const inner = insetPoly(poly, 1.5 * IN);
  // spans → joist size
  const cs = inner.map((p) => dot(p, across)), c0 = Math.min(...cs), c1 = Math.max(...cs);
  const lines = [];
  for (let c = c0 + sp; c < c1 - 1; c += sp) lines.push(c);
  const openings = (ctx.openings || []).map((op) => { const ss = op.map((p) => dot(p, ax)), cc = op.map((p) => dot(p, across)); return { s0: Math.min(...ss), s1: Math.max(...ss), c0: Math.min(...cc), c1: Math.max(...cc) }; });
  let span = 0;
  const segsAt = (c) => clipLine([across[0] * c, across[1] * c], ax, inner);
  for (const c of lines) for (const [t0, t1] of segsAt(c)) span = Math.max(span, t1 - t0);
  const engineered = ctx.floorMode === 'tji';
  // GH.3-E: with a table loaded by the person, series and depth come from it (and it refuses outside it); with none, the older labelled default
  const loaded = engineered ? (ctx.tji === undefined ? activeTji() : ctx.tji) : null;
  let pick, tjiPick = null;
  if (loaded) {
    tjiPick = pickTji(loaded.table, { span, spacing: sp, caseId: loaded.caseId });
    if (!tjiPick.ok) return { pieces: [], error: tjiPick.key, fill: tjiPick.fill, span, notes };
    pick = { size: tjiPick.size, depth: tjiPick.depth, series: tjiPick.series };
  } else if (engineered) return { pieces: [], error: 'tji.err.none', span, notes };
  else pick = sizeFor(tableFor(JOIST_TABLE, sp), span);
  if (!pick) return { pieces: [], error: 'res.err.tji.span' };
  if (pick.over) notes.push('joist');
  if (engineered) notes.push('tjitable');
  const L = LUMBER[pick.size], D = engineered ? pick.depth : L.d, width = engineered ? 1.75 * IN : L.t, top = (ctx.top ?? 0) - 0.75 * IN;
  const P = (c, s) => [across[0] * c + ax[0] * s, across[1] * c + ax[1] * s];
  const joist = (role, c, s0, s1, sz = pick.size) => { if (s1 - s0 > 1) pieces.push({ role, size: sz, line: [[...P(c, s0), top - D / 2], [...P(c, s1), top - D / 2]], depth: D, width, length: s1 - s0, flat: true, tji: engineered }); };
  for (const c of lines) {
    for (const [t0, t1] of segsAt(c)) {
      // cut round openings (tail joists), the trimmer lines skip them
      const hit = openings.filter((o) => c > o.c0 - 3 * IN && c < o.c1 + 3 * IN);
      let s = t0;
      for (const o of hit.sort((p, q) => p.s0 - q.s0)) { joist('joist', c, s, Math.max(s, o.s0 - 3 * IN)); s = Math.max(s, o.s1 + 3 * IN); }
      joist('joist', c, s, t1);
    }
  }
  for (const o of openings) {
    // doubled trimmers along the sides, doubled headers across the ends (between the trimmers)
    for (const c of [o.c0 - 0.75 * IN, o.c0 - 2.25 * IN, o.c1 + 0.75 * IN, o.c1 + 2.25 * IN]) for (const [t0, t1] of segsAt(c)) joist('trimmer', c, t0, t1);
    for (const s of [o.s0 - 0.75 * IN, o.s0 - 2.25 * IN, o.s1 + 0.75 * IN, o.s1 + 2.25 * IN]) {
      const a = P(o.c0 - 3 * IN, s), b = P(o.c1 + 3 * IN, s);
      pieces.push({ role: 'header.floor', size: pick.size, line: [[...a, top - D / 2], [...b, top - D / 2]], depth: D, width, length: Math.hypot(b[0] - a[0], b[1] - a[1]), flat: true, tji: engineered });
    }
  }
  // rims: along each edge, 3/4" in
  const rim = insetPoly(poly, 0.75 * IN);
  for (let i = 0; i < rim.length; i++) {
    const a = rim[i], b = rim[(i + 1) % rim.length];
    pieces.push({ role: 'rim', size: engineered ? `Rim ${pick.size}` : pick.size, line: [[...a, top - D / 2], [...b, top - D / 2]], depth: D, width, length: Math.hypot(b[0] - a[0], b[1] - a[1]), flat: true });   // i18n-ignore: product size designations, written as the IFC 'Size' label (data, not words)
  }
  return { pieces, size: pick.size, span, notes, dir: ax, ...(tjiPick ? { tji: { table: loaded.table, caseId: loaded.caseId, series: tjiPick.series, depth: tjiPick.depth, max: tjiPick.max } } : {}) };
}

// ------------------------------------------------------------------------------------------------------------ roofs
/**
 * A roof's pieces in its walls' level plan: ctx { outline (the walls' outer faces), kinds (res-roof edgeKinds), plate,
 * thickness, spacing, mode 'stick' | 'truss', fascia }.
 */
export function frameRoof(ctx) {
  const sp = ctx.spacing || FRAME_DEFAULTS.spacing, pieces = [], notes = [];
  const plan = roofGeometry(ctx.outline, ctx.kinds, { thickness: ctx.thickness, plate: ctx.plate, fascia: ctx.fascia ?? 0, soffit: false });
  if (plan.error) return { pieces, error: plan.error, notes };
  if (ctx.mode === 'truss') {
    // trusses across the longest ridge (else the longest eave), each a flat element: bottom chord at the plate, top under the roof
    const rl = plan.lines.filter((l) => l.kind === 'ridge').sort((p, q) => q.len - p.len)[0];
    let dir;
    if (rl) { const d = [rl.b[0] - rl.a[0], rl.b[1] - rl.a[1]], L = Math.hypot(...d); dir = [d[0] / L, d[1] / L]; }
    else { let best = null; for (let i = 0; i < ctx.outline.length; i++) { const a = ctx.outline[i], b = ctx.outline[(i + 1) % ctx.outline.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (!best || L > best.L) best = { L, d: [(b[0] - a[0]) / L, (b[1] - a[1]) / L] }; } dir = best.d; }
    const acr = [-dir[1], dir[0]];
    const ss = ctx.outline.map((p) => dot(p, dir)), s0 = Math.min(...ss), s1 = Math.max(...ss);
    for (let s = s0 + 0.75 * IN; s <= s1 - 0.75 * IN + 1e-6; s += sp) {
      const p = [dir[0] * s, dir[1] * s];
      for (const [t0, t1] of clipLine(p, acr, ctx.outline)) {
        const pts = [];
        for (let k = 0; k <= 40; k++) { const tt = t0 + (t1 - t0) * k / 40, q = [p[0] + acr[0] * tt, p[1] + acr[1] * tt], z = heightAt(plan, q); if (z !== null && z > ctx.plate + 10) pts.push([tt, z]); }
        if (pts.length < 3) continue;
        pieces.push({ role: 'truss', size: '2x4', truss: { p, acr, t0, t1, plate: ctx.plate, top: pts }, length: t1 - t0, width: 1.5 * IN });
      }
      if (s + sp > s1 - 0.75 * IN && s < s1 - 0.75 * IN - 1) s = s1 - 0.75 * IN - sp;   // a truss at the far end too
    }
    return { pieces, plan, notes, size: '2x4' };
  }
  // stick framing: rafters square to each face's eave, at spacing along it, clipped by the face (jacks at hips and valleys)
  let run = 0;   // the longest rafter's horizontal run, from its eave to the top of its face
  for (const f of plan.faces) for (const p of f.poly) run = Math.max(run, dot(sub(p, [f.n[0] * f.c, f.n[1] * f.c]), f.n));
  const pick = sizeFor(tableFor(RAFTER_TABLE, sp), run);
  if (pick.over) notes.push('rafter');
  const R = LUMBER[pick.size], up = SIZES[Math.min(SIZES.length - 1, SIZES.indexOf(pick.size) + 1)];
  for (const f of plan.faces) {
    const o = [f.n[0] * f.c, f.n[1] * f.c];
    const us = f.poly.map((q) => dot(sub(q, o), f.u)), u0 = Math.min(...us), u1 = Math.max(...us);
    for (let uu = u0 + sp / 2; uu < u1; uu += sp) {
      const base = [o[0] + f.u[0] * uu, o[1] + f.u[1] * uu];
      for (const [t0, t1] of clipLine(base, f.n, f.poly)) {
        const a = [base[0] + f.n[0] * t0, base[1] + f.n[1] * t0], b = [base[0] + f.n[0] * t1, base[1] + f.n[1] * t1];
        pieces.push({ role: 'rafter', size: pick.size, line: [[...a, faceZ(f, a)], [...b, faceZ(f, b)]], depth: R.d, width: R.t, length: Math.hypot(t1 - t0, faceZ(f, b) - faceZ(f, a)) });
      }
    }
  }
  for (const l of plan.lines) {
    if (l.kind === 'ridge') pieces.push({ role: 'ridge', size: up, line: [l.a, l.b], depth: LUMBER[up].d, width: R.t, length: l.len, ridge: true });
    else pieces.push({ role: l.kind === 'hip' ? 'hip' : 'valley', size: up, line: [l.a, l.b], depth: LUMBER[up].d, width: R.t, length: l.len });
  }
  // ceiling joists at the plate across the short way, and collar ties under each ridge every 4'
  const cj = frameFloorLike(ctx.outline, sp, ctx.plate, CEILING_TABLE);
  pieces.push(...cj.pieces);
  if (cj.over) notes.push('ceiling');
  for (const l of plan.lines.filter((x) => x.kind === 'ridge')) {
    const d = [l.b[0] - l.a[0], l.b[1] - l.a[1]], L = Math.hypot(...d);
    if (L < 1) continue;
    const u = [d[0] / L, d[1] / L], acr = [-u[1], u[0]];
    const zR = l.a[2], zc = ctx.plate + (zR - ctx.plate) * 2 / 3;
    for (let s = 2 * FT; s < L - 1; s += 4 * FT) {
      const m = [l.a[0] + u[0] * s, l.a[1] + u[1] * s];
      // how far each way the roof's underside is above zc
      const reach = (sgn) => { let lo = 0, hi = 20000; for (let k = 0; k < 40; k++) { const mid = (lo + hi) / 2, q = [m[0] + acr[0] * sgn * mid, m[1] + acr[1] * sgn * mid], z = heightAt(plan, q); if (z !== null && z > zc) lo = mid; else hi = mid; } return lo; };
      const r1 = reach(1), r2 = reach(-1);
      if (r1 + r2 < 300) continue;
      const a = [m[0] - acr[0] * r2, m[1] - acr[1] * r2], b = [m[0] + acr[0] * r1, m[1] + acr[1] * r1];
      pieces.push({ role: 'collar', size: '2x6', line: [[...a, zc], [...b, zc]], depth: LUMBER['2x6'].d, width: R.t, length: r1 + r2, flat: true, low: true });
    }
  }
  return { pieces, plan, notes, size: pick.size };
}
function frameFloorLike(poly, sp, z, table) {
  const r = frameFloor(poly, { spacing: sp, top: z + 0.75 * IN });
  let span = 0;
  for (const p of r.pieces) if (p.role === 'joist') span = Math.max(span, p.length);
  const pick = sizeFor(tableFor(table, sp), span), L = LUMBER[pick.size];
  // ceiling joists bear on the plates: their underside at the plate
  const pieces = r.pieces.filter((p) => p.role === 'joist').map((p) => ({ ...p, role: 'ceilingjoist', size: pick.size, depth: L.d, line: p.line.map((q) => [q[0], q[1], z + L.d / 2]) }));
  return { pieces, over: pick.over };
}

// ------------------------------------------------------------------------------------------------------------ IFC
const CLS = {
  stud: ['IFCMEMBER', 'STUD'], 'stud.end': ['IFCMEMBER', 'STUD'], 'stud.corner': ['IFCMEMBER', 'STUD'], 'stud.tee': ['IFCMEMBER', 'STUD'], king: ['IFCMEMBER', 'STUD'], jack: ['IFCMEMBER', 'STUD'], cripple: ['IFCMEMBER', 'STUD'],
  'plate.bottom': ['IFCMEMBER', 'PLATE'], 'plate.top': ['IFCMEMBER', 'PLATE'], 'plate.cap': ['IFCMEMBER', 'PLATE'], sill: ['IFCMEMBER', 'PLATE'], blocking: ['IFCMEMBER', 'USERDEFINED'],
  header: ['IFCBEAM', 'LINTEL'], joist: ['IFCBEAM', 'JOIST'], rim: ['IFCBEAM', 'JOIST'], trimmer: ['IFCBEAM', 'JOIST'], 'header.floor': ['IFCBEAM', 'JOIST'], ceilingjoist: ['IFCBEAM', 'JOIST'],
  rafter: ['IFCMEMBER', 'RAFTER'], hip: ['IFCMEMBER', 'RAFTER'], valley: ['IFCMEMBER', 'RAFTER'], ridge: ['IFCBEAM', 'USERDEFINED'], collar: ['IFCMEMBER', 'COLLAR'], truss: ['IFCMEMBER', 'USERDEFINED'],
};
/** Representation item of a piece: P(x, y, z) → the assembly's storey axes; wall pieces come in wall axes (W2S). */
function pieceItem(w, pc, P, D) {
  if (pc.box) {
    const b = pc.box;
    return w.extrudeAt(w.profile([[0, 0], [b.x1 - b.x0, 0], [b.x1 - b.x0, b.y1 - b.y0], [0, b.y1 - b.y0]]), w.axisFrame(P(b.x0, b.y0, b.z0), D(0, 0, 1), D(1, 0, 0)), b.z1 - b.z0);
  }
  if (pc.truss) {
    const tr2 = pc.truss, o = [tr2.p[0] + tr2.acr[0] * tr2.t0, tr2.p[1] + tr2.acr[1] * tr2.t0];
    // the truss in its vertical plane: x along it from o, y up from the plate; 1½" thick across
    const prof = [[0, 0], [tr2.t1 - tr2.t0, 0], ...tr2.top.slice().reverse().map(([tt, z]) => [tt - tr2.t0, z - tr2.plate])];
    const X = D(tr2.acr[0], tr2.acr[1], 0), Zd = D(-tr2.acr[1], tr2.acr[0], 0);
    const O = P(o[0] - Zd[0] * pc.width / 2, o[1] - Zd[1] * pc.width / 2, tr2.plate);
    return w.extrudeAt(w.profile(simplify(prof)), w.axisFrame(O, Zd, X), pc.width);
  }
  // a member along a 3D line: a rectangle across it (width × vertical depth) swept along it (plumb ends)
  const [a3, b3] = pc.line, A = P(...a3), B = P(...b3), d = [B[0] - A[0], B[1] - A[1], B[2] - A[2]], L = Math.hypot(...d);
  const hz = Math.hypot(d[0], d[1]) || 1, x = [d[0] / hz, d[1] / hz, 0], z = [-x[1], x[0], 0];
  const slope = Math.abs(d[2]) / hz, vd = pc.depth * Math.sqrt(1 + slope * slope);   // the depth square to the slope, measured plumb
  const zb = pc.flat ? A[2] - vd / 2 : A[2];   // rafters, hips, valleys and ridges stand on the roof's underside; flat pieces are centred on their line
  const frame = w.axisFrame([A[0] - z[0] * pc.width / 2, A[1] - z[1] * pc.width / 2, zb], x, z);
  const dl = [d[0] / L, d[1] / L, d[2] / L], ex = [dl[0] * z[0] + dl[1] * z[1], dl[2], dl[0] * x[0] + dl[1] * x[1]];
  // shortcut: schematic I section; manufacturer-specific flange/web dimensions require a product catalog.
  const f = Math.min(1.25 * IN, vd / 4), web = Math.min(0.375 * IN, pc.width / 4), mid = pc.width / 2;
  const profile = pc.tji ? [[0, 0], [pc.width, 0], [pc.width, f], [mid + web / 2, f], [mid + web / 2, vd - f], [pc.width, vd - f], [pc.width, vd], [0, vd], [0, vd - f], [mid - web / 2, vd - f], [mid - web / 2, f], [0, f]] : [[0, 0], [pc.width, 0], [pc.width, vd], [0, vd]];
  return w.extrudeAt(w.profile(profile), frame, L, ex);
}
function simplify(p) { return p.filter((q, i) => i < 2 || i === p.length - 1 || Math.abs((p[i + 1][1] - q[1]) * (q[0] - p[i - 1][0]) - (q[1] - p[i - 1][1]) * (p[i + 1][0] - q[0])) > 1e-3); }

export function readFraming(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCELEMENTASSEMBLY'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, FRAME_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, host: ps.Host || '', kind: ps.Kind || 'wall', spacing: Number(ps.Spacing) * w.unitMm || FRAME_DEFAULTS.spacing, corners: ps.Corners === 'california' ? 'california' : 'three-stud',
      blocking: !(ps.Blocking === false || /^(\.?F\.?|false)$/i.test(String(ps.Blocking ?? ''))), roofMode: ps.RoofMode === 'truss' ? 'truss' : 'stick', floorMode: ps.FloorMode === 'tji' ? 'tji' : 'lumber', floorDir: ['x', 'y'].includes(ps.FloorDir) ? ps.FloorDir : 'auto', key: ps.ShapeKey || '', parts: partsOf(w, id) });
  }
  return out;
}
function partsOf(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value); }
  return [];
}
function shapeKey(...parts) {
  const s = JSON.stringify(parts, (k, v) => (typeof v === 'number' ? Math.round(v * 10) / 10 : v));
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36) + s.length.toString(36);
}
const isTrue = (v) => v === true || /^(\.?T\.?|true)$/i.test(String(v ?? ''));

/** The host of a framing (a drawn wall, a CadCraft floor, a CadCraft roof) and what its pieces are made from. */
function hostOf(w, guid, cache) {
  const walls = cache.walls || (cache.walls = readWalls(w));
  const wall = walls.find((x) => x.guid === guid);
  if (wall) return { kind: 'wall', host: wall, storey: wall.storey };
  const D = cache.derived || (cache.derived = readDerived(w));
  const fl = D.floors.find((x) => x.guid === guid);
  if (fl) return { kind: 'floor', host: fl, storey: fl.storey };
  const rf = D.roofs.find((x) => x.guid === guid);
  if (rf) { const lv = (cache.levels || (cache.levels = readLevels(w))).find((l) => l.guid === rf.walls); return { kind: 'roof', host: rf, storey: lv?.id ?? null, roofStorey: rf.storey }; }
  return null;
}
/** The pieces a framing would have now, and its shape key. */
function piecesFor(w, fr, h, cache) {
  const opts = { spacing: fr.spacing, corners: fr.corners, blocking: fr.blocking, floorMode: fr.floorMode, floorDir: fr.floorDir };
  if (h.kind === 'wall') {
    const walls = cache.walls.filter((x) => x.storey === h.storey);
    const ops = (cache.openings || (cache.openings = readOpenings(w, null, cache.walls))).filter((o) => o.wallGuid === h.host.guid);
    const bearing = (h.host.assembly || wallType(h.host.typeKey))?.exterior !== false;
    const r = frameWall(h.host, { ...opts, walls, openings: ops, bearing });
    const key = shapeKey('wall', h.host.a, h.host.b, h.host.t, h.host.height, h.host.typeKey, h.host.extSide, h.host.z, ops.map((o) => [o.kind, o.offset, o.width, o.sill, o.height]),
      walls.filter((x) => x.guid !== h.host.guid).map((x) => [x.guid, x.a, x.b, x.t, x.typeKey, x.extSide]), opts);
    return { ...r, key, frame: 'wall' };
  }
  if (h.kind === 'floor') {
    const L = storeyLoops(w, h.storey);
    const loop = loopAt(h.host.mode === 'building' ? L.outlines : L.rooms, h.host.seed);
    if (!loop) return { pieces: [], error: 'model.err.noroom' };
    const openings = floorOpenings(w, h.host.id);
    const r = frameFloor(loop.poly, { ...opts, top: h.host.offset, openings });
    return { ...r, key: shapeKey('floor', loop.poly, h.host.offset, openings, opts, ...(fr.floorMode === 'tji' && activeTjiKey() ? [activeTjiKey()] : [])), frame: 'plan' };
  }
  const levels = cache.levels || (cache.levels = readLevels(w));
  const L = storeyLoops(w, h.storey);
  const o = loopAt(L.outlines, h.host.seed);
  if (!o) return { pieces: [], error: 'model.err.nobuilding2' };
  const top = L.walls.reduce((m, x) => Math.max(m, x.baseOffset + x.height), 0);
  const plate = h.host.plate > 0 ? h.host.plate : top;
  const kinds = edgeKinds(o.poly, L.walls, h.host);
  const r = frameRoof({ outline: o.poly, kinds, plate, thickness: h.host.thickness, spacing: fr.spacing, mode: fr.roofMode, fascia: h.host.fascia });
  void levels;
  return { ...r, key: shapeKey('roof', o.poly, kinds, plate, h.host.thickness, h.host.fascia, fr.roofMode, opts), frame: 'plan' };
}
/** Stairwell (and other) openings cut in a floor slab: their outlines in the floor's level plan. */
function floorOpenings(w, slabId) {
  const out = [];
  const R = w.hostIndex();
  for (const oid of R.voids.get(slabId) || []) {
    const op = w.api.GetLine(w.mid, oid, false);
    const body = op?.Representation ? w.api.GetLine(w.mid, op.Representation.value, false) : null;
    try {
      const rep = body && w.api.GetLine(w.mid, body.Representations[0].value, false);
      const ex = rep && w.api.GetLine(w.mid, rep.Items[0].value, false);
      const prof = ex && w.api.GetLine(w.mid, ex.SweptArea.value, false);
      const pl = prof && w.api.GetLine(w.mid, prof.OuterCurve.value, false);
      const pts = (pl?.Points || []).map((h) => w.api.GetLine(w.mid, h.value, false).Coordinates.map((c) => Number(c.value ?? c) * w.unitMm));
      if (pts.length >= 3) out.push(pts.slice(0, Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1]) < 1 ? -1 : undefined));
    } catch (e) { /* an opening drawn some other way: not framed round */ }
  }
  return out;
}

function writeFraming(w, fr, cache) {
  const h = hostOf(w, fr.host, cache);
  if (!h || h.storey === null) return { removed: true };
  const r = piecesFor(w, fr, h, cache);
  if (r.error) return { error: r.error, fill: r.fill };
  if (fr.key === r.key && fr.parts.length) return { same: true };
  // generated pieces go; pieces kept by hand stay, flagged
  const kept = [], gone = [];
  for (const pid of fr.parts) { const ps = w.readPset(pid, LUMBER_PSET); if (ps && !isTrue(ps.Generated)) kept.push(pid); else gone.push(pid); }
  if (gone.length) w.dropProduct(gone);
  for (const pid of kept) w.upsertPset(pid, LUMBER_PSET, [['Check', 'IFCLABEL', tr('res.fr.check')]]);
  const st = w.api.GetLine(w.mid, fr.storey, false);
  // mapping into the assembly's storey: wall axes or the host level's plan
  let P, D;
  if (r.frame === 'wall') {
    const wall = h.host, u = [(wall.b[0] - wall.a[0]) / wall.len, (wall.b[1] - wall.a[1]) / wall.len], n = [-u[1], u[0]];
    P = (x, y, z) => [wall.a[0] + u[0] * x + n[0] * y, wall.a[1] + u[1] * x + n[1] * y, wall.z + z];
    D = (x, y, z) => [u[0] * x + n[0] * y, u[1] * x + n[1] * y, z];
  } else {
    const M = mul4(inv4(w.storeyWorld(fr.storey)), w.storeyWorld(h.storey));
    P = (x, y, z) => apply4(M, x, y, z);
    D = (x, y, z) => { const a = apply4(M, x, y, z), o = apply4(M, 0, 0, 0); return [a[0] - o[0], a[1] - o[1], a[2] - o[2]]; };
  }
  const wood = w.surfaceStyle(tr('res.style.framing'), [0.86, 0.72, 0.5], 0);
  const parts = [...kept];
  let bf = 0;
  for (const pc of r.pieces) {
    const [cls, ptype] = CLS[pc.role] || ['IFCMEMBER', 'USERDEFINED'];
    const nm = w.L(tr('res.fr.role.' + pc.role));
    const extra = w.v4 ? [ptype] : [];
    const id = w.make(cls, w.guid(), w.ownerHistory(), nm, null, ptype === 'USERDEFINED' ? nm : null, w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...extra);
    const it = pieceItem(w, pc, P, D);
    w.styleItem(it, wood);
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [it])]);
    const b = boardFeet(pc.size, pc.length) * (pc.plies || 1);
    bf += b;
    w.upsertPset(id, LUMBER_PSET, [['Role', 'IFCLABEL', pc.role], ['Size', 'IFCLABEL', pc.size + (pc.plies > 1 ? ' × ' + pc.plies : '')], ['Length', 'IFCPOSITIVELENGTHMEASURE', round(w.u(pc.length), 3)], ['BoardFeet', 'IFCREAL', round(b, 3)], ['Generated', 'IFCBOOLEAN', true]]);
    parts.push(id);
  }
  let rel = null;
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const x = w.api.GetLine(w.mid, rid, false); if (x.RelatingObject?.value === fr.id) { rel = rid; break; } }
  if (rel) { if (parts.length) { const x = w.touch(rel); x.RelatedObjects = parts.map((p) => w.H(p)); w.write(x); } }
  else if (parts.length) w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(fr.id), parts.map((p) => w.H(p)));
  w.upsertPset(fr.id, FRAME_PSET, [['ShapeKey', 'IFCIDENTIFIER', r.key], ['Notes', 'IFCLABEL', (r.notes || []).join(',') || 'ok']]);
  if (r.tji) {
    const a = tjiStatement(r.tji.table, r.tji.caseId, tr);
    w.upsertPset(fr.id, TJI_PSET, [['Table', 'IFCLABEL', r.tji.table.id], ['Edition', 'IFCLABEL', r.tji.table.edition], ['Source', 'IFCLABEL', r.tji.table.source], ['Example', 'IFCBOOLEAN', !!r.tji.table.example], ['LoadCase', 'IFCLABEL', r.tji.caseId],
      ['Series', 'IFCLABEL', r.tji.series], ['Assumptions', 'IFCTEXT', a.join('\n')]]);
  }
  w.upsertPset(fr.id, 'CadCraft_FramingQuantities', [['Pieces', 'IFCINTEGER', r.pieces.length], ['BoardFeet', 'IFCREAL', round(bf, 2)], ['Size', 'IFCLABEL', r.size || '']]);
  return { written: true, pieces: r.pieces.length, notes: r.notes || [] };
}
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key, fill) => { throw Object.assign(new Error(key), { key, ...(fill ? { fill } : {}) }); };

/** Frame these hosts (walls, floors, roofs by GlobalId): one assembly each (an existing one is made again). */
export function frameHosts(spec) {
  const s = { ...FRAME_DEFAULTS, ...spec, hosts: [...spec.hosts], guids: spec.guids || {} };
  return op((w) => {
    const cache = {}, made = new Map(), idsOut = [];
    const have = readFraming(w);
    let n = 0;
    for (const g of s.hosts) {
      const h = hostOf(w, g, cache);
      if (!h || h.storey === null) continue;
      const old = have.find((x) => x.host === g);
      const fr = old ? { ...old, spacing: s.spacing, corners: s.corners, blocking: s.blocking, roofMode: s.roofMode, floorMode: s.floorMode, floorDir: s.floorDir, key: '' } : null;
      let id = old?.id;
      if (!old) {
        if (!s.guids[g]) s.guids[g] = val(w.guid());
        const st = w.api.GetLine(w.mid, h.storey, false);
        const nm = w.L(tr('res.fr.of.' + h.kind));
        id = w.make('IFCELEMENTASSEMBLY', s.guids[g], w.ownerHistory(), nm, null, w.L('Framing'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, 'SITE', 'USERDEFINED');   // i18n-ignore: IFC ObjectType
        w.noteGuid(s.guids[g], id);
        w.contain(id, h.storey);
        made.set(s.guids[g], id);
      }
      w.upsertPset(id, FRAME_PSET, [['Host', 'IFCIDENTIFIER', g], ['Kind', 'IFCLABEL', h.kind], ['Spacing', 'IFCPOSITIVELENGTHMEASURE', round(w.u(s.spacing))], ['Corners', 'IFCLABEL', s.corners], ['Blocking', 'IFCBOOLEAN', !!s.blocking], ['RoofMode', 'IFCLABEL', s.roofMode], ['FloorMode', 'IFCLABEL', s.floorMode], ['FloorDir', 'IFCLABEL', s.floorDir], ['ShapeKey', 'IFCIDENTIFIER', '']]);
      const r = writeFraming(w, fr || { id, guid: s.guids[g], storey: h.storey, host: g, kind: h.kind, spacing: s.spacing, corners: s.corners, blocking: s.blocking, roofMode: s.roofMode, floorMode: s.floorMode, floorDir: s.floorDir, key: '', parts: [] }, cache);
      if (r.error && s.hosts.length === 1) fail(r.error, r.fill);
      if (r.written) n++;
      idsOut.push(id);
    }
    if (!n && !idsOut.length) fail('res.err.noframe');
    return { id: idsOut[0] ?? null, ids: idsOut, made };
  });
}
export function changeFraming(guid, ch) {
  return op((w) => {
    const fr = readFraming(w).find((x) => x.guid === guid);
    if (!fr) fail('model.err.gone');
    const nx = { ...fr, key: '' };
    if (ch.spacing > 100) nx.spacing = ch.spacing;
    if (ch.corners) nx.corners = ch.corners;
    if (typeof ch.blocking === 'boolean') nx.blocking = ch.blocking;
    if (ch.roofMode) nx.roofMode = ch.roofMode;
    if (['tji', 'lumber'].includes(ch.floorMode)) nx.floorMode = ch.floorMode;
    if (['auto', 'x', 'y'].includes(ch.floorDir)) nx.floorDir = ch.floorDir;
    w.upsertPset(fr.id, FRAME_PSET, [['Spacing', 'IFCPOSITIVELENGTHMEASURE', round(w.u(nx.spacing))], ['Corners', 'IFCLABEL', nx.corners], ['Blocking', 'IFCBOOLEAN', !!nx.blocking], ['RoofMode', 'IFCLABEL', nx.roofMode], ['FloorMode', 'IFCLABEL', nx.floorMode], ['FloorDir', 'IFCLABEL', nx.floorDir]]);
    const r = writeFraming(w, nx, {});
    if (r.error) fail(r.error, r.fill);
    return { id: fr.id, ids: [fr.id] };
  });
}
export function removeFraming(guids) {
  return op((w) => {
    const list = readFraming(w).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.flatMap((x) => [x.id, ...x.parts]));
    return { id: null, ids: [] };
  });
}
/** Keep a generated piece when its framing is made again (it stays where it is; a change round it flags it). */
export function keepPiece(pieceGuid) {
  return op((w) => {
    const id = w.byGuid(pieceGuid) || [...ids(w.api, w.mid, 'IFCMEMBER'), ...ids(w.api, w.mid, 'IFCBEAM')].find((x) => w.guidOf(x) === pieceGuid);
    if (!id) fail('model.err.gone');
    w.upsertPset(id, LUMBER_PSET, [['Generated', 'IFCBOOLEAN', false], ['Check', 'IFCLABEL', '']]);
    return { id, ids: [id] };
  });
}
/** After a change on a level: framings of its walls and floors, and of roofs over its walls, made again where they changed;
 *  framings whose host is gone go. */
export function syncFraming(w, storey) {
  let n = 0;
  const all = readFraming(w);
  if (!all.length) return 0;
  const cache = {};
  const gone = [];
  for (const fr of all) {
    const h = hostOf(w, fr.host, cache);
    if (!h) { gone.push(fr); continue; }
    if (h.storey !== storey && fr.storey !== storey) continue;
    const r = writeFraming(w, fr, cache);
    if (r.written) n++;
  }
  if (gone.length) { w.dropProduct(gone.flatMap((x) => [x.id, ...x.parts])); n += gone.length; }
  return n;
}

/** The cut list: every framing piece (of these framings, or all) by size and stock length (whole 2' from 8'), with counts
 *  and board feet. → { rows: [{ size, stock (mm), count, bf }], pieces, bf } */
export function lumberList(w, { guids = null, metric = false } = {}) {
  const map = new Map();
  let pieces = 0, bf = 0;
  for (const fr of readFraming(w)) {
    if (guids && !guids.includes(fr.guid)) continue;
    for (const pid of fr.parts) {
      const ps = w.readPset(pid, LUMBER_PSET);
      if (!ps) continue;
      const len = Number(ps.Length) * w.unitMm, sz = String(ps.Size || '');
      const base = sz.replace(/ × \d+$/, ''), plies = Number((sz.match(/× (\d+)/) || [])[1] || 1);
      const stock = metric ? Math.max(2400, Math.ceil(len / 600) * 600) : Math.max(8 * FT, Math.ceil(len / (2 * FT)) * 2 * FT);
      const k = base + '|' + stock;
      const row = map.get(k) || { size: base, label: metric ? (LUMBER[base]?.metric || base) : base, stock, count: 0, bf: 0 };
      row.count += plies;
      row.bf += boardFeet(base, stock) * plies;
      map.set(k, row);
      pieces += plies; bf += boardFeet(base, stock) * plies;
    }
  }
  const rows = [...map.values()].sort((a, b) => SIZES.indexOf(a.size) - SIZES.indexOf(b.size) || a.stock - b.stock);
  return { rows, pieces, bf };
}
