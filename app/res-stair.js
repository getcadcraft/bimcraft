/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-stair.js — stairs (0.5 part 4, RC.3): straight, L (a landing at the turn), U (a landing between two flights) and L
 * with winders; risers and treads worked out from the floor-to-floor height and the code limits (labelled defaults);
 * handrails with balusters on the open sides; the stairwell cut in the floor above. No DOM: bin/test-bimcraft.mjs --res.
 *
 *   STAIR_KINDS · STAIR_LIMITS · stairLayout(spec) → { n, riser, tread, run, pieces, outline, sides, walk, checks }
 *   readStairs(w) · placeStair({ level, start, angle, kind, turn, width, … }) → op · changeStair(guid, ch) → op ·
 *   removeStairs([guid]) → op · syncStairs(w, storey) (res-follow.js: a level's height or the floor above changed)
 *
 * spec: { kind: 'straight'|'l'|'u'|'winder', turn: 'left'|'right', start: [x, y] (the middle of the bottom step's front edge,
 * plan mm), angle (deg, the way up), width, height (floor to floor), riserMax, tread, split (0–1: where the turn falls), gap
 * (between a U's flights), railings: 'both'|'left'|'right'|'none' (seen walking up), railHeight }.
 * Risers: n = ⌈height / riserMax⌉, each height / n; treads n − 1 (the floor above is the last step), each `tread` deep. A
 * landing counts as one tread at its height; winders are three treads fanned round the inside corner.
 * Labelled defaults after the usual residential code: riser at most 7¾", tread at least 10", 36" wide, 6'-8" headroom,
 * handrails 34"–38" above the nosings (36"). The checks say which are met; a designer or the building official decides.
 *
 * Written as IfcStair (.STRAIGHT_RUN_STAIR. / .QUARTER_TURN_STAIR. / .HALF_TURN_STAIR. / .QUARTER_WINDING_STAIR.) contained
 * in the bottom level, aggregating an IfcStairFlight per flight (NumberOfRisers, NumberOfTreads, RiserHeight, TreadLength;
 * each step a block one riser deep), an IfcSlab .LANDING. per landing, an IfcStairFlight .WINDER. for winders and an
 * IfcRailing .HANDRAIL. per railed side; Pset_StairCommon; CadCraft_Stair (the spec, TopLevel, ShapeKey); the stairwell:
 * an IfcOpeningElement voiding each floor slab of the level above (CadCraft_StairWell Stair = the stair's GlobalId).
 */
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { planLoops } from './model-rooms.js';
import { railingParts, railingItems } from './res-railing.js';
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';
import { t as tr } from './i18n.js';

const IN = 25.4;
export const STAIR_PSET = 'CadCraft_Stair', WELL_PSET = 'CadCraft_StairWell';
export const STAIR_KINDS = ['straight', 'l', 'u', 'winder', 'spiral'];   // spiral: 0.6 round 2 (bim-comforts_PART_2)
export const STAIR_LIMITS = { riserMax: 7.75 * IN, treadMin: 10 * IN, widthMin: 36 * IN, headroom: 80 * IN, railMin: 34 * IN, railMax: 38 * IN };
/**
 * 0.8 REG.1: the limits the checks use come from the active regulation pack (regs/active.js calls useStairLimits). Until a pack
 * is chosen they are STAIR_LIMITS, which the United States pack (regs/packs/us-irc-2021.json) repeats exactly. A limit the pack
 * leaves out is null and that check is skipped; the stairwell cut still needs a headroom, so it keeps STAIR_LIMITS' own.
 */
let LIM = STAIR_LIMITS;
export function useStairLimits(limits) { LIM = limits ? { riserMax: null, treadMin: null, widthMin: null, headroom: null, railMin: null, railMax: null, ...limits } : STAIR_LIMITS; }
export const stairLimits = () => LIM;
export const STAIR_DEFAULTS = { kind: 'straight', turn: 'left', width: 36 * IN, riserMax: 7.75 * IN, tread: 10 * IN, split: 0.5, gap: 2 * IN, railings: 'both', railHeight: 36 * IN, well: true };
const IFC_TYPE = { straight: 'STRAIGHT_RUN_STAIR', l: 'QUARTER_TURN_STAIR', u: 'HALF_TURN_STAIR', winder: 'QUARTER_WINDING_STAIR', spiral: 'SPIRAL_STAIR' };
/**
 * Spiral stairs (0.6 round 2, session bim-comforts_PART_2): wedge treads round a centre post, turning left (anticlockwise going
 * up) or right; `start` is the post's centre, `angle` the direction of the bottom tread's front edge, `width` the tread from the
 * post to the outside, `tread` its depth on the walk line 12" out from the post, `post` the post's diameter. Labelled defaults
 * after the usual residential rule for spiral stairs: 26" clear width, treads at least 6¾" on the walk line, risers at most 9½",
 * handrail 34"–38" on the outside. The post runs from the floor to the handrail's height above the top.
 */
export const SPIRAL_LIMITS = { riserMax: 9.5 * IN, treadMin: 6.75 * IN, widthMin: 26 * IN, walk: 12 * IN, railMin: 34 * IN, railMax: 38 * IN };
export const SPIRAL_DEFAULTS = { riserMax: 9.5 * IN, tread: 7.5 * IN, width: 30 * IN, post: 4.5 * IN };

// ------------------------------------------------------------------------------------------------------------ layout
export function stairLayout(spec0) {
  const s = { ...STAIR_DEFAULTS, ...(spec0.kind === 'spiral' ? SPIRAL_DEFAULTS : {}), ...spec0 };
  const H = s.height, w = s.width, d = s.tread;
  const n = Math.max(2, Math.ceil(H / s.riserMax - 1e-9)), r = H / n, T = n - 1;
  const a0 = (s.angle || 0) * Math.PI / 180, u = [Math.cos(a0), Math.sin(a0)], nl = [-u[1], u[0]];
  const tSide = s.turn === 'right' ? -1 : 1;   // the turn's side, in the stair's own t (left = +t)
  const P = (si, ti) => [s.start[0] + u[0] * si + nl[0] * ti, s.start[1] + u[1] * si + nl[1] * ti];
  const rect = (s0, s1, t0, t1) => [P(s0, t0), P(s1, t0), P(s1, t1), P(s0, t1)];
  const ccw = (poly) => (area(poly) < 0 ? poly.slice().reverse() : poly);
  const pieces = [], sides = [], walk = [];
  const flight = (treads, meta) => pieces.push({ kind: 'flight', treads, ...meta });
  const checks = { riser: r <= s.riserMax + 1e-6 && (LIM.riserMax === null || r <= LIM.riserMax + 1e-6), tread: LIM.treadMin === null || d >= LIM.treadMin - 1e-6, width: LIM.widthMin === null || w >= LIM.widthMin - 1e-6, rail: s.railings === 'none' || ((LIM.railMin === null || s.railHeight >= LIM.railMin - 1e-6) && (LIM.railMax === null || s.railHeight <= LIM.railMax + 1e-6)) };
  // the rails' inset from the stair's edge (half a post)
  const ins = 2 * IN;
  const railL = s.railings === 'both' || s.railings === 'left', railR = s.railings === 'both' || s.railings === 'right';
  const nosingSide = (sA, sB, t, zA, zB) => [[...P(sA, t), zA], [...P(sB, t), zB]];
  if (s.kind === 'spiral') return spiralLayout(s, { n, r, T, d, w, a0, ins, pieces, sides, walk, flight });
  if (s.kind === 'straight') {
    const treads = [];
    for (let i = 0; i < T; i++) treads.push({ poly: ccw(rect(i * d, (i + 1) * d, -w / 2, w / 2)), z: (i + 1) * r, i });
    flight(treads, { risers: n, n: T });
    if (railL) sides.push(nosingSide(0, (T - 1) * d + d, w / 2 - ins, r, T * r + r));
    if (railR) sides.push(nosingSide(0, (T - 1) * d + d, -w / 2 + ins, r, T * r + r));
    walk.push(P(-0, 0), P(T * d, 0));
  } else {
    const turnTreads = s.kind === 'winder' ? 3 : 1;
    const before = Math.max(1, Math.min(T - turnTreads - 1, Math.round((T - turnTreads) * s.split)));
    const after = T - before - turnTreads;
    if (after < 1) return { error: 'res.err.stairshort', n, riser: r, tread: d };
    const S0 = before * d;
    // flight 1
    const f1 = [];
    for (let i = 0; i < before; i++) f1.push({ poly: ccw(rect(i * d, (i + 1) * d, -w / 2, w / 2)), z: (i + 1) * r, i });
    flight(f1, { risers: before + 1, n: before });
    const tIn = tSide * w / 2, tOut = -tSide * w / 2;   // inside / outside edge of flight 1 (t)
    if (s.kind === 'u') {
      const gap = s.gap, wide = 2 * w + gap;
      const t0 = Math.min(tOut, tOut + tSide * wide), t1 = Math.max(tOut, tOut + tSide * wide);
      const zL = (before + 1) * r;
      pieces.push({ kind: 'landing', poly: ccw(rect(S0, S0 + w, t0, t1)), z: zL });
      // flight 2 back down the other side: centre at t = tSide·(w + gap)
      const c2 = tSide * (w + gap), f2 = [];
      for (let j = 0; j < after; j++) f2.push({ poly: ccw(rect(S0 - (j + 1) * d, S0 - j * d, c2 - w / 2, c2 + w / 2)), z: zL + (j + 1) * r, i: before + 1 + j });
      flight(f2, { risers: after + 1, n: after });
      // rails: flight 1 and flight 2 outer sides, the landing's far edge (and the inner sides when 'both')
      const out1 = tOut - Math.sign(tOut) * ins, out2 = c2 + tSide * (w / 2 - ins), in1 = tIn - Math.sign(tIn) * ins, in2 = c2 - tSide * (w / 2 - ins);
      const z1 = (before) * r + r;
      const outer = s.turn === 'right' ? railL : railR, inner = s.turn === 'right' ? railR : railL;
      if (outer) {
        sides.push([[...P(0, out1), r], [...P(S0, out1), z1], [...P(S0 + w - ins, out1), zL], [...P(S0 + w - ins, out2), zL], [...P(S0, out2), zL + r], [...P(S0 - after * d, out2), zL + (after + 1) * r]]);
      }
      if (inner) { sides.push(nosingSide(0, S0, in1, r, z1)); sides.push([[...P(S0, in2), zL + r], [...P(S0 - after * d, in2), zL + (after + 1) * r]]); }
      walk.push(P(0, 0), P(S0 + w / 2, 0), P(S0 + w / 2, c2), P(S0 - after * d, c2));
    } else {
      // L: a landing square, or three winders fanned from the inside corner
      const zT = (k) => (before + 1 + k) * r;
      const sq = { s0: S0, s1: S0 + w, t0: -w / 2, t1: w / 2 };
      if (s.kind === 'l') pieces.push({ kind: 'landing', poly: ccw(rect(sq.s0, sq.s1, sq.t0, sq.t1)), z: zT(0) });
      else {
        const c = P(S0, tIn);
        // the outer path: flight 1's outer side at the turn → the outer corner → flight 2's outer side
        const path = [P(S0, tOut), P(S0 + w, tOut), P(S0 + w, tIn)];
        const at = (len) => (len <= w ? [path[0][0] + (path[1][0] - path[0][0]) * len / w, path[0][1] + (path[1][1] - path[0][1]) * len / w] : [path[1][0] + (path[2][0] - path[1][0]) * (len - w) / w, path[1][1] + (path[2][1] - path[1][1]) * (len - w) / w]);
        const wt = [];
        for (let k = 0; k < 3; k++) {
          const l0 = 2 * w * k / 3, l1 = 2 * w * (k + 1) / 3;
          const poly = [c, at(l0), ...(l0 < w && l1 > w ? [path[1]] : []), at(l1)];
          wt.push({ poly: ccw(poly), z: zT(k), i: before + k });
        }
        pieces.push({ kind: 'winders', treads: wt });
      }
      // flight 2 from the square's turn side, away along tSide
      const f2 = [], base = before + turnTreads;
      for (let j = 0; j < after; j++) {
        const t0 = tIn + tSide * j * d, t1 = tIn + tSide * (j + 1) * d;
        f2.push({ poly: ccw(rect(S0, S0 + w, Math.min(t0, t1), Math.max(t0, t1))), z: (base + 1 + j) * r, i: base + j });
      }
      flight(f2, { risers: after + 1, n: after });
      const zEnd = (base + after) * r + r, zLand = zT(0);
      const outer = s.turn === 'right' ? railL : railR, inner = s.turn === 'right' ? railR : railL;
      const sOut = S0 + w - ins, tO = tOut - Math.sign(tOut) * ins;
      if (outer) {
        const zMid = s.kind === 'l' ? zLand : zT(1);
        sides.push([[...P(0, tO), r], [...P(S0, tO), before * r + r], [...P(sOut, tO), zMid], [...P(sOut, tIn), s.kind === 'l' ? zLand : zT(2)], [...P(sOut, tIn + tSide * after * d), zEnd]]);
      }
      if (inner) {
        const tI = tIn - Math.sign(tIn) * ins, sI = S0 + ins;
        sides.push([[...P(0, tI), r], [...P(S0, tI), before * r + r], [...P(sI, tIn), (base + 1) * r], [...P(sI, tIn + tSide * after * d), zEnd]]);
      }
      walk.push(P(0, 0), P(S0 + w / 2, 0), P(S0 + w / 2, tIn + tSide * after * d));
    }
  }
  // the outline: every tread and landing joined
  const polys = [];
  for (const pc of pieces) { if (pc.kind === 'landing') polys.push(pc.poly); else for (const t of pc.treads) polys.push(t.poly); }
  const outline = planLoops(polys, { snap: 0.5 }).outlines.map((o) => o.poly);
  const run = s.kind === 'straight' ? T * d : null;
  return { n, riser: r, tread: d, treads: T, run, pieces, outline, sides, walk, checks, spec: s };
}
function area(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; }
/** A spiral stair's treads (wedges round the post), its post, the outside handrail, the walk line, the outline (0.6 round 2). */
function spiralLayout(s, { n, r, T, d, w, a0, ins, pieces, sides, walk, flight }) {
  const rp = (s.post > 0 ? s.post : SPIRAL_DEFAULTS.post) / 2, Ro = rp + w, walkR = rp + SPIRAL_LIMITS.walk;
  const dA = d / walkR, dir = s.turn === 'right' ? -1 : 1, c = s.start;
  const pt = (rad, a) => [c[0] + rad * Math.cos(a), c[1] + rad * Math.sin(a)];
  const arc = (rad, from, to) => { const k = Math.max(2, Math.ceil(Math.abs(to - from) / (6 * Math.PI / 180))); const out = []; for (let j = 0; j <= k; j++) out.push(pt(rad, from + (to - from) * j / k)); return out; };
  const ccw = (poly) => (area(poly) < 0 ? poly.slice().reverse() : poly);
  const treads = [];
  for (let i = 0; i < T; i++) {
    const b0 = a0 + dir * i * dA, b1 = b0 + dir * dA;
    treads.push({ poly: ccw([...arc(rp, b0, b1), ...arc(Ro, b1, b0)]), z: (i + 1) * r, i });
  }
  flight(treads, { risers: n, n: T, spiral: true });
  pieces.push({ kind: 'post', c, r: rp, z0: 0, z1: s.height + (s.railings === 'none' ? 0 : s.railHeight) });
  // the handrail on the outside, rising with the nosings (two points a tread, so it reads as a curve)
  if (s.railings !== 'none') {
    const side = [];
    for (let j = 0; j <= 2 * T; j++) side.push([...pt(Ro - ins, a0 + dir * j * dA / 2), r + j * r / 2]);
    sides.push(side);
  }
  for (let j = 0; j <= T; j++) walk.push(pt(walkR, a0 + dir * j * dA));
  const sweep = T * dA;
  const circle = (rad) => arc(rad, 0, 2 * Math.PI).slice(0, -1);
  const outline = [sweep >= 2 * Math.PI - 1e-6 ? ccw(circle(Ro)) : ccw([...arc(rp, a0, a0 + dir * sweep), ...arc(Ro, a0 + dir * sweep, a0)]), ccw(circle(rp))];
  const checks = { riser: r <= s.riserMax + 1e-6 && r <= SPIRAL_LIMITS.riserMax + 1e-6, tread: d >= SPIRAL_LIMITS.treadMin - 1e-6, width: w >= SPIRAL_LIMITS.widthMin - 1e-6, rail: s.railings === 'none' || (s.railHeight >= SPIRAL_LIMITS.railMin - 1e-6 && s.railHeight <= SPIRAL_LIMITS.railMax + 1e-6) };
  return { n, riser: r, tread: d, treads: T, run: null, pieces, outline, sides, walk, checks, spec: s, spiral: { post: rp * 2, outer: Ro, walk: walkR, angle: dA * 180 / Math.PI, sweep: sweep * 180 / Math.PI } };
}

// ------------------------------------------------------------------------------------------------------------ reading
const NUM = ['StartX', 'StartY', 'Width', 'Height', 'RiserMax', 'Tread', 'Gap', 'RailHeight', 'Post'];
export function readStairs(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCSTAIR'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, STAIR_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const num = (k) => Number(ps[k] || 0) * w.unitMm;
    out.push({
      id, guid: val(l.GlobalId), storey: so.get(id) ?? null, topLevel: ps.TopLevel || '', kind: STAIR_KINDS.includes(ps.Kind) ? ps.Kind : 'straight', turn: ps.Turn === 'right' ? 'right' : 'left',
      start: [num('StartX'), num('StartY')], angle: Number(ps.Angle || 0), width: num('Width'), fixedHeight: num('Height'), riserMax: num('RiserMax'), tread: num('Tread'), split: Number(ps.Split ?? 0.5), gap: num('Gap'),
      railings: ['both', 'left', 'right', 'none'].includes(ps.Railings) ? ps.Railings : 'both', railHeight: num('RailHeight'), post: num('Post') || SPIRAL_DEFAULTS.post, well: ps.Well === true || /^(\.?T\.?|true)$/i.test(String(ps.Well ?? '')), key: ps.ShapeKey || '', parts: partsOf(w, id),
    });
  }
  return out;
}
function partsOf(w, id) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); if (r.RelatingObject?.value === id) return (r.RelatedObjects || []).map((h) => h.value); }
  return [];
}
/** Floor to floor: the bottom level to the level above it (else the stair's own height). */
export function stairHeight(w, st, levels = readLevels(w)) {
  const i = levels.findIndex((l) => l.id === st.storey);
  const top = st.topLevel ? levels.find((l) => l.guid === st.topLevel) : levels[i + 1];
  if (i >= 0 && top && top.elevation > levels[i].elevation + 100) return { height: top.elevation - levels[i].elevation, top };
  return { height: st.fixedHeight > 0 ? st.fixedHeight : (levels[i]?.height || 2743), top: null };
}
function wellsOf(w, guid) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCOPENINGELEMENT'); } catch (e) { return out; }
  for (const id of list) { const ps = w.readPset(id, WELL_PSET); if (ps && ps.Stair === guid) out.push(id); }
  return out;
}
function shapeKey(...parts) {
  const s = JSON.stringify(parts, (k, v) => (typeof v === 'number' ? Math.round(v * 100) / 100 : v));
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36) + s.length.toString(36);
}
/** Floor slabs (CadCraft_Floor) of a level, with their thickness and their outline (plan of that level). */
function floorsOf(w, storey) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCSLAB'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    if (so.get(id) !== storey) continue;
    const ps = w.readPset(id, 'CadCraft_Floor');
    if (!ps) continue;
    out.push({ id, thickness: Number(ps.Thickness) * w.unitMm, offset: Number(ps.Offset || 0) * w.unitMm });
  }
  return out;
}

// ------------------------------------------------------------------------------------------------------------ writing
function writeStair(w, st, ctx = {}) {
  const levels = ctx.levels || readLevels(w);
  const { height, top } = stairHeight(w, st, levels);
  const floors = top ? floorsOf(w, top.id) : [];
  const L = stairLayout({ ...st, height });
  if (L.error) return false;
  const key = shapeKey(st.kind, st.turn, st.start, st.angle, st.width, height, st.riserMax, st.tread, st.split, st.gap, st.railings, st.railHeight, st.well, floors.map((f) => [f.id, f.thickness, f.offset]), ...(st.kind === 'spiral' ? [st.post] : []));
  if (st.key === key && st.parts.length) return false;
  if (st.parts.length) w.dropProduct(st.parts);
  const oldWells = wellsOf(w, st.guid);
  if (oldWells.length) w.dropProduct(oldWells);
  const stLine = w.api.GetLine(w.mid, st.storey, false);
  const place = () => w.placeAt(stLine.ObjectPlacement.value, 0, 0, 0, 0);
  const wood = w.surfaceStyle(tr('res.style.stair'), [0.72, 0.58, 0.42], 0);
  const parts = [];
  const blocks = (treads) => treads.map((t) => { const it = w.extrude(w.profile(t.poly), t.z - L.riser, L.riser); w.styleItem(it, wood); return it; });
  let fi = 0;
  for (const pc of L.pieces) {
    if (pc.kind === 'post') {
      // a spiral stair's centre post: a steel tube drawn as a solid round column (IfcMember .POST.)
      const nm = w.L(tr('comforts.st.post'));
      const id = w.make('IFCMEMBER', w.guid(), w.ownerHistory(), nm, null, nm, w.H(place()), null, null, ...(w.v4 ? ['POST'] : []));
      const ring = []; for (let j = 0; j < 24; j++) { const a = j / 24 * 2 * Math.PI; ring.push([pc.c[0] + pc.r * Math.cos(a), pc.c[1] + pc.r * Math.sin(a)]); }
      const it = w.extrude(w.profile(ring), pc.z0, pc.z1 - pc.z0);
      w.styleItem(it, w.surfaceStyle(tr('res.style.rail'), [0.95, 0.95, 0.93], 0));
      w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [it])]);
      parts.push(id);
      continue;
    }
    if (pc.kind === 'landing') {
      const nm = w.L(tr('res.st.landing'));
      const id = w.make('IFCSLAB', w.guid(), w.ownerHistory(), nm, null, nm, w.H(place()), null, null, ...(w.v4 ? ['LANDING'] : ['LANDING']));
      const it = w.extrude(w.profile(pc.poly), pc.z - Math.max(L.riser, 150), Math.max(L.riser, 150));
      w.styleItem(it, wood);
      w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [it])]);
      parts.push(id);
      continue;
    }
    const winder = pc.kind === 'winders', nm = w.L(tr(winder ? 'res.st.winders' : 'res.st.flight', { n: ++fi }));
    const nT = pc.treads.length;
    const extra = w.v4 ? [nT + 1, nT, round(w.u(L.riser)), round(w.u(L.tread)), winder ? 'WINDER' : pc.spiral ? 'SPIRAL' : 'STRAIGHT'] : [nT + 1, nT, round(w.u(L.riser)), round(w.u(L.tread))];
    const id = w.make('IFCSTAIRFLIGHT', w.guid(), w.ownerHistory(), nm, null, nm, w.H(place()), null, null, ...extra);
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', blocks(pc.treads))]);
    parts.push(id);
  }
  // handrails
  const steel = w.surfaceStyle(tr('res.style.rail'), [0.95, 0.95, 0.93], 0);
  let railLen = 0, balusters = 0;
  for (const side of L.sides) {
    const rp = railingParts(side, { height: st.railHeight });
    railLen += rp.length; balusters += rp.balusters.length;
    const items = railingItems(w, rp);
    if (!items.length) continue;
    for (const it of items) w.styleItem(it, steel);
    const nm = w.L(tr('res.rail.handrail'));
    const id = w.make('IFCRAILING', w.guid(), w.ownerHistory(), nm, null, nm, w.H(place()), null, null, ...(w.v4 ? ['HANDRAIL'] : ['NOTDEFINED']));
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', items)]);
    parts.push(id);
  }
  let rel = null;
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) { const x = w.api.GetLine(w.mid, rid, false); if (x.RelatingObject?.value === st.id) { rel = rid; break; } }
  if (rel) { const x = w.touch(rel); x.RelatedObjects = parts.map((p) => w.H(p)); w.write(x); }
  else if (parts.length) w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(st.id), parts.map((p) => w.H(p)));
  // the stairwell: where the floor above leaves less than the headroom over the steps
  if (st.well && top && floors.length) {
    const M = mul4(inv4(w.storeyWorld(top.id)), w.storeyWorld(st.storey));
    const polys = [];
    for (const f of floors) {
      const under = height + f.offset - f.thickness;   // the floor's underside over the bottom level
      for (const pc of L.pieces) for (const t of (pc.kind === 'landing' ? [{ poly: pc.poly, z: pc.z }] : pc.treads || [])) if (t.z + (LIM.headroom ?? STAIR_LIMITS.headroom) > under) polys.push(t.poly);   // a spiral's post: none
    }
    const loops = polys.length ? planLoops(polys, { snap: 0.5 }).outlines : [];
    for (const f of floors) for (const lp of loops) {
      const fl = w.api.GetLine(w.mid, f.id, false);
      const pts = lp.poly.map(([x, y]) => { const q = apply4(M, x, y, 0); return [q[0], q[1]]; });
      // the opening sits in the floor's own placement (the level's axes, z = 0 at the level): through its whole thickness
      const opl = w.make('IFCLOCALPLACEMENT', w.H(fl.ObjectPlacement.value), w.H(w.axis3(0, 0, 0, 0)));
      const g = w.guid(), nm = w.L(tr('res.st.well'));
      const oid = w.make('IFCOPENINGELEMENT', g, w.ownerHistory(), nm, null, null, w.H(opl), null, null, ...(w.v4 ? ['OPENING'] : []));
      w.setShape(oid, [w.rep('body', 'Body', 'SweptSolid', [w.extrude(w.profile(pts), f.offset - f.thickness - 10, f.thickness + 20)])]);
      w.make('IFCRELVOIDSELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(f.id), w.H(oid));
      w.upsertPset(oid, WELL_PSET, [['Stair', 'IFCIDENTIFIER', st.guid]]);
    }
  }
  w.upsertPset(st.id, 'Pset_StairCommon', [['NumberOfRiser', 'IFCCOUNTMEASURE', L.n], ['NumberOfTreads', 'IFCCOUNTMEASURE', L.treads], ['RiserHeight', 'IFCPOSITIVELENGTHMEASURE', round(w.u(L.riser))], ['TreadLength', 'IFCPOSITIVELENGTHMEASURE', round(w.u(L.tread))], ['RequiredHeadroom', 'IFCPOSITIVELENGTHMEASURE', round(w.u(STAIR_LIMITS.headroom))]]);
  const failed = Object.entries(L.checks).filter(([, ok]) => !ok).map(([k]) => k);
  w.upsertPset(st.id, STAIR_PSET, [['ShapeKey', 'IFCIDENTIFIER', key], ['Risers', 'IFCINTEGER', L.n], ['RiserUsed', 'IFCPOSITIVELENGTHMEASURE', round(w.u(L.riser))], ['Checks', 'IFCLABEL', failed.length ? failed.join(',') : 'ok'], ['RailLength', 'IFCLENGTHMEASURE', round(w.u(railLen))], ['Balusters', 'IFCINTEGER', balusters]]);
  if (w.v4) { const l = w.touch(st.id); l.PredefinedType = IFC_TYPE[st.kind]; w.write(l); }
  return true;
}
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key) => { throw Object.assign(new Error(key), { key }); };
function rowsOf(w, s) {
  const L = (k, v) => [k, 'IFCLENGTHMEASURE', round(w.u(v || 0))];
  return [['Kind', 'IFCLABEL', s.kind], ['Turn', 'IFCLABEL', s.turn], L('StartX', s.start[0]), L('StartY', s.start[1]), ['Angle', 'IFCREAL', round(s.angle || 0, 6)], L('Width', s.width), L('Height', s.fixedHeight || 0),
    L('RiserMax', s.riserMax), L('Tread', s.tread), ['Split', 'IFCREAL', round(s.split, 4)], L('Gap', s.gap), ['Railings', 'IFCLABEL', s.railings], L('RailHeight', s.railHeight), ['Well', 'IFCBOOLEAN', !!s.well], ['TopLevel', 'IFCIDENTIFIER', s.topLevel || ''],
    ...(s.kind === 'spiral' ? [L('Post', s.post || SPIRAL_DEFAULTS.post)] : [])];
}
function check(s) {
  if (!STAIR_KINDS.includes(s.kind)) fail('res.err.stairkind');
  if (!(s.width >= 500 && s.width <= 5000)) fail('res.err.stairwidth');
  if (!(s.riserMax >= 100 && s.riserMax <= 300) || !(s.tread >= 150 && s.tread <= 600)) fail('res.err.stairsize');
  if (!(s.split > 0 && s.split < 1)) fail('res.err.stairsize');
  if (s.kind === 'spiral' && !(s.post >= 40 && s.post <= 400 && s.tread >= 100)) fail('comforts.err.spiral');
}
export function placeStair(spec) {
  // a spiral stair takes its own labelled defaults for what the spec leaves out (taller risers, shallower treads, 30" wide)
  const s = { ...STAIR_DEFAULTS, ...(spec.kind === 'spiral' ? SPIRAL_DEFAULTS : {}), angle: 0, fixedHeight: 0, topLevel: '', ...spec, start: [spec.start[0], spec.start[1]] };
  return op((w) => {
    check(s);
    if (!s.guid) s.guid = val(w.guid());
    const storey = w.byGuid(s.level);
    if (!storey) fail('model.err.nolevel');
    const st = { ...s, storey, id: null, key: '', parts: [] };
    const levels = readLevels(w);
    const L = stairLayout({ ...s, height: stairHeight(w, st, levels).height });
    if (L.error) fail(L.error);
    const sl = w.api.GetLine(w.mid, storey, false);
    const nm = w.L(tr('res.stair'));
    const id = w.make('IFCSTAIR', s.guid, w.ownerHistory(), nm, null, nm, w.H(w.placeAt(sl.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(w.v4 ? [IFC_TYPE[s.kind]] : ['NOTDEFINED']));
    w.noteGuid(s.guid, id);
    w.contain(id, storey);
    w.upsertPset(id, STAIR_PSET, rowsOf(w, s));
    writeStair(w, { ...st, id }, { levels });
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
export function changeStair(guid, ch) {
  return op((w) => {
    const st = readStairs(w).find((x) => x.guid === guid);
    if (!st) fail('model.err.gone');
    const nx = { ...st };
    for (const k of ['kind', 'turn', 'railings']) if (ch[k]) nx[k] = ch[k];
    if (ch.kind === 'spiral' && st.kind !== 'spiral') Object.assign(nx, SPIRAL_DEFAULTS);   // 0.6 round 2: a stair turned into a spiral takes its defaults
    else if (ch.kind && ch.kind !== 'spiral' && st.kind === 'spiral') Object.assign(nx, { riserMax: STAIR_DEFAULTS.riserMax, tread: STAIR_DEFAULTS.tread, width: STAIR_DEFAULTS.width });
    for (const k of ['width', 'riserMax', 'tread', 'split', 'gap', 'railHeight', 'angle', 'post']) if (Number.isFinite(ch[k])) nx[k] = ch[k];
    if (Array.isArray(ch.start)) nx.start = ch.start.slice();
    if (typeof ch.well === 'boolean') nx.well = ch.well;
    check(nx);
    const L = stairLayout({ ...nx, height: stairHeight(w, nx).height });
    if (L.error) fail(L.error);
    w.upsertPset(st.id, STAIR_PSET, rowsOf(w, nx));
    writeStair(w, { ...nx, key: '' });
    return { id: st.id, ids: [st.id] };
  });
}
export function removeStairs(guids) {
  return op((w) => {
    const list = readStairs(w).filter((x) => guids.includes(x.guid));
    const wells = list.flatMap((x) => wellsOf(w, x.guid));
    if (list.length) w.dropProduct([...list.flatMap((x) => [x.id, ...x.parts]), ...wells]);
    return { id: null, ids: [] };
  });
}
/** Stairs starting on this level or arriving at it: made again when the floor-to-floor height or the floor above changed. */
export function syncStairs(w, storey, ctx = {}) {
  let n = 0;
  const levels = ctx.levels || readLevels(w);
  for (const st of readStairs(w)) {
    const i = levels.findIndex((l) => l.id === st.storey);
    const top = st.topLevel ? levels.find((l) => l.guid === st.topLevel) : levels[i + 1];
    if (st.storey !== storey && top?.id !== storey) continue;
    if (writeStair(w, st, { levels })) n++;
  }
  return n;
}
