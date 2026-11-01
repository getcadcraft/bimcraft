/* SPDX-License-Identifier: Apache-2.0 */
/**
 * program-mass.js — from a room program to massing options (0.8 EG.58, session bim_PART_2; CivilCraft's side is civil_PART_2's, by inbox).
 * No DOM: tools/bimcraft-test/program-mass-test.mjs (node bin/test-bimcraft.mjs --program-mass) runs it in Node. Plan millimetres.
 *
 * The person (or their assistant) types the program: rooms with a count and an area each, how much of a floor is usable rooms (the
 * efficiency; walls, stairs, corridors and shafts take the rest — a typed default 0.8 labelled for review), the floor height, the
 * buildable envelope (the setback polygon, from CivilCraft's zoning or typed) and an optional height cap. Nothing is looked up.
 *
 *   programTotals(program, { efficiency }) → { net, gross, rooms, efficiency }                    m²
 *   massingOptions({ program, envelope, floorHeight, heightCap, efficiency, maxFloors }) → { totals, options, notes }
 *       option = { key, name, pts [[x, y]…] (anticlockwise, mm), floors, floorHeight, height (mm), footprint_m2, gross_m2, required_m2,
 *                  surplus_m2, coverage (footprint ÷ envelope), fits, stack: [{ floor, rooms: [{ name, area_m2 }], net_m2 }], notes }
 *       Options: a long bar (3:1), a block (1.6:1), a square tower (1:1), an L-shaped block and a U round an open court; each at the fewest floors that give the program its area inside
 *       the envelope and under the height cap, and one floor-count steeper (a smaller footprint) when that still fits. Same input, same answer.
 *   civilMass(option, { unitPerMm }) → { name, pts: [{ x, y }], floors, floorHeight, use }       the shape CivilCraft's massing.js cleanMass reads
 *   buildOption(option, { typeKey }) → op for IfcEditor.modelChange   levels, walls round the footprint on every level and a floor slab, ONE undo step
 */
import { op, settleFor } from './model-ops.js';
import { readLevels, addLevel } from './model-levels.js';
import { addWall } from './model-walls.js';
import { addFloor } from './model-slabs.js';
import { inv4, apply4, val } from './ifc-util.js';
import { insidePoint } from './model-site-mass.js';

export const DEFAULTS = { efficiency: 0.8, floorHeight: 3200, maxFloors: 40 };
const M2 = 1e6;
const cleanText = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
const area = (P) => { let s = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - b[0] * a[1]; } return s / 2; };
const anticlockwise = (P) => (area(P) < 0 ? [...P].reverse() : P);

/** The program, cleaned: [{ name, count, area_m2 }]; bad rows dropped and said. */
export function cleanProgram(raw) {
  const rows = [], notes = [];
  for (const r of Array.isArray(raw) ? raw.slice(0, 500) : []) {
    const count = Math.round(Number(r?.count ?? 1)), a = Number(r?.area_m2);
    if (!r || !(a > 0) || !(count >= 1) || count > 1000 || a > 100000) { notes.push('skipped a row without a positive area and count: ' + cleanText(r?.name, 40)); continue; }
    rows.push({ name: cleanText(r.name, 60) || 'Room', count, area_m2: a, ground: !!r.ground });
  }
  return { rows, notes };
}

export function programTotals(program, { efficiency = DEFAULTS.efficiency } = {}) {
  const eff = efficiency > 0.3 && efficiency <= 1 ? efficiency : DEFAULTS.efficiency;
  const { rows, notes } = cleanProgram(program);
  const net = rows.reduce((s, r) => s + r.count * r.area_m2, 0);
  return { net, gross: net / eff, rooms: rows.reduce((s, r) => s + r.count, 0), efficiency: eff, rows, notes };
}

// ---- fitting a rectangle in the envelope -------------------------------------------------------------------------------------------------
const inside = (P, p) => { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const a = P[i], b = P[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
function rectFits(P, cx, cy, w, d, ang) {
  const c = Math.cos(ang), s = Math.sin(ang);
  const pt = (u, v) => [cx + u * c - v * s, cy + u * s + v * c];
  const corners = [pt(-w / 2, -d / 2), pt(w / 2, -d / 2), pt(w / 2, d / 2), pt(-w / 2, d / 2)];
  const probe = [];
  for (let i = 0; i < 4; i++) for (const f of [0, 0.25, 0.5, 0.75]) probe.push([corners[i][0] + (corners[(i + 1) % 4][0] - corners[i][0]) * f, corners[i][1] + (corners[(i + 1) % 4][1] - corners[i][1]) * f]);
  probe.push([cx, cy]);
  // pulled 1 mm inward so a rectangle that touches the envelope's edge counts as inside
  const pulled = probe.map((q) => { const dx = cx - q[0], dy = cy - q[1], l = Math.hypot(dx, dy) || 1; return [q[0] + (dx / l), q[1] + (dy / l)]; });
  if (!pulled.every((q) => inside(P, q))) return null;
  // no envelope corner strictly inside the rectangle (a concave envelope)
  const inv = (q) => { const x = q[0] - cx, y = q[1] - cy; return [x * c + y * s, -x * s + y * c]; };
  for (const q of P) { const [u, v] = inv(q); if (Math.abs(u) < w / 2 - 1 && Math.abs(v) < d / 2 - 1) return null; }
  return corners;
}
/** The rectangle of aspect `ratio` (long side ÷ short side) with at least `want` mm² that fits, centred as near the middle of the envelope as it can be; null when none. */
function fitRect(P, ratio, want) {
  const xs = P.map((q) => q[0]), ys = P.map((q) => q[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  // the longest edge sets the axis, so a rectangle lines up with the lot
  let best = { l: 0, a: 0 };
  for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (l > best.l) best = { l, a: Math.atan2(b[1] - a[1], b[0] - a[0]) }; }
  const short = Math.sqrt(want / ratio), long = short * ratio;
  const mid = [(x0 + x1) / 2, (y0 + y1) / 2];
  const N = 24, hit = [];
  for (const ang of [best.a, best.a + Math.PI / 2]) {
    for (let i = -N; i <= N; i++) for (let j = -N; j <= N; j++) {
      const cx = mid[0] + ((x1 - x0) / 2) * (i / N), cy = mid[1] + ((y1 - y0) / 2) * (j / N);
      const r = rectFits(P, cx, cy, long, short, ang);
      if (r) hit.push({ r, d: Math.hypot(cx - mid[0], cy - mid[1]) + (ang === best.a ? 0 : 1) });
    }
  }
  if (!hit.length) return null;
  hit.sort((p, q) => p.d - q.d);
  return hit[0].r;
}

/** Rooms to floors: rooms marked ground first, the rest largest first, each floor filled up to its usable area; a room never splits. */
function stackRooms(rows, floors, netPerFloor) {
  const list = [];
  for (const r of rows) for (let k = 0; k < r.count; k++) list.push({ name: r.name, area_m2: r.area_m2, ground: r.ground });
  list.sort((a, b) => (b.ground ? 1 : 0) - (a.ground ? 1 : 0) || b.area_m2 - a.area_m2);
  const stack = Array.from({ length: floors }, (_, i) => ({ floor: i + 1, rooms: [], net_m2: 0 }));
  const over = [];
  for (const rm of list) {
    const slot = stack.find((f) => f.net_m2 + rm.area_m2 <= netPerFloor + 1e-6);
    if (slot) { slot.rooms.push({ name: rm.name, area_m2: rm.area_m2 }); slot.net_m2 += rm.area_m2; } else over.push(rm.name);
  }
  for (const f of stack) f.net_m2 = Math.round(f.net_m2 * 100) / 100;
  return { stack, over };
}

// L and U shapes (an L-shaped block; a U round an open court): unit templates, scaled to the wanted area, tried in eight positions (four turns, mirrored or not)
const TEMPLATES = {
  ell: [[0, 0], [3, 0], [3, 1], [1, 1], [1, 2.2], [0, 2.2]],
  court: [[0, 0], [3, 0], [3, 2.2], [2, 2.2], [2, 1], [1, 1], [1, 2.2], [0, 2.2]],
};
const SHAPES = [['bar', 3, 'Long bar'], ['block', 1.6, 'Block'], ['tower', 1, 'Square tower'], ['ell', 0, 'L-shape'], ['court', 0, 'U round a court']];

/** The template scaled to `want` mm², whose corners and edge points are all inside the envelope with none of its corners inside the shape; the one nearest the middle, or null. */
function fitTemplate(P, key, want) {
  const T0 = TEMPLATES[key], a0 = Math.abs(area(T0)), k = Math.sqrt(want / a0);
  const xs = P.map((q) => q[0]), ys = P.map((q) => q[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys), mid = [(x0 + x1) / 2, (y0 + y1) / 2];
  let axis = { l: 0, a: 0 };
  for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (l > axis.l) axis = { l, a: Math.atan2(b[1] - a[1], b[0] - a[0]) }; }
  const cen = [T0.reduce((s, q) => s + q[0], 0) / T0.length, T0.reduce((s, q) => s + q[1], 0) / T0.length];
  const N = 12, hit = [];
  for (let turn = 0; turn < 4; turn++) for (const mirror of [false, true]) {
    const ang = axis.a + (turn * Math.PI) / 2, c = Math.cos(ang), sn = Math.sin(ang);
    for (let i = -N; i <= N; i++) for (let j = -N; j <= N; j++) {
      const cx = mid[0] + ((x1 - x0) / 2) * (i / N), cy = mid[1] + ((y1 - y0) / 2) * (j / N);
      const pts = T0.map(([u, v]) => { const uu = (mirror ? -(u - cen[0]) : u - cen[0]) * k, vv = (v - cen[1]) * k; return [cx + uu * c - vv * sn, cy + uu * sn + vv * c]; });
      // sampled along every edge (every ~1.5 m of a 10 m template), pulled 1 mm toward the centre of the shape
      const probe = [];
      for (let e = 0; e < pts.length; e++) { const p = pts[e], q = pts[(e + 1) % pts.length]; for (let f = 0; f < 8; f++) probe.push([p[0] + (q[0] - p[0]) * (f / 8), p[1] + (q[1] - p[1]) * (f / 8)]); }
      const gx = pts.reduce((s, q) => s + q[0], 0) / pts.length, gy = pts.reduce((s, q) => s + q[1], 0) / pts.length;
      if (!probe.every((q) => { const dx = gx - q[0], dy = gy - q[1], l = Math.hypot(dx, dy) || 1; return inside(P, [q[0] + dx / l, q[1] + dy / l]); })) continue;
      if (P.some((q) => inside(pts, q) && !pts.some((r) => Math.hypot(r[0] - q[0], r[1] - q[1]) < 2))) continue;
      hit.push({ pts: anticlockwise(pts), d: Math.hypot(cx - mid[0], cy - mid[1]) + turn * 0.01 + (mirror ? 0.005 : 0) });
    }
  }
  if (!hit.length) return null;
  hit.sort((p, q) => p.d - q.d);
  return hit[0].pts;
}

export function massingOptions({ program, envelope, floorHeight = DEFAULTS.floorHeight, heightCap = 0, efficiency = DEFAULTS.efficiency, maxFloors = DEFAULTS.maxFloors } = {}) {
  const T = programTotals(program, { efficiency });
  const notes = [...T.notes, 'Defaults for the person to review: ' + Math.round(T.efficiency * 100) + '% of a floor is usable rooms, floors ' + floorHeight + ' mm.'];
  if (!T.rooms) return { totals: T, options: [], notes: [...notes, 'The program has no rooms with an area.'], error: 'noprogram' };
  const env = Array.isArray(envelope) ? anticlockwise(envelope.filter((p) => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]))) : [];
  if (env.length < 3 || Math.abs(area(env)) < 1e6) return { totals: T, options: [], notes: [...notes, 'The envelope is not a polygon with an area.'], error: 'noenvelope' };
  const envArea = Math.abs(area(env));
  const capFloors = Math.min(Math.max(1, Math.floor(maxFloors)), heightCap > 0 ? Math.max(1, Math.floor(heightCap / floorHeight)) : 200);
  const required = T.gross * M2;
  const options = [], seen = new Set();
  for (const [key, ratio, name] of SHAPES) {
    let steps = 0;
    for (let n = 1; n <= capFloors && steps < 2; n++) {
      const want = required / n;
      if (want > envArea) continue;
      const pts = TEMPLATES[key] ? fitTemplate(env, key, want) : fitRect(env, ratio, want);
      if (!pts) continue;
      steps++;
      const id = key + n;
      if (seen.has(id)) continue;
      seen.add(id);
      const foot = Math.abs(area(pts)), gross = (foot * n) / M2;
      const { stack, over } = stackRooms(T.rows, n, (foot / M2) * T.efficiency);
      const rounded = pts.map((q) => [Math.round(q[0]), Math.round(q[1])]);
      options.push({
        key: id, name: name + ', ' + n + (n === 1 ? ' floor' : ' floors'), shape: key, pts: rounded, floors: n, floorHeight, height: n * floorHeight,
        footprint_m2: Math.round(foot / 1e4) / 100, gross_m2: Math.round(gross * 100) / 100, required_m2: Math.round(T.gross * 100) / 100, surplus_m2: Math.round((gross - T.gross) * 100) / 100,
        coverage: Math.round((foot / envArea) * 1000) / 1000, fits: over.length === 0, stack,
        notes: over.length ? ['These rooms do not fit on one floor and are not placed: ' + [...new Set(over)].join(', ') + '.'] : [],
      });
      if (steps === 1 && n >= capFloors) break;
    }
    if (steps === 0) notes.push(name + ': no fit inside the envelope' + (heightCap > 0 ? ' under the height cap of ' + heightCap + ' mm' : '') + '.');
  }
  options.sort((a, b) => a.floors - b.floors || b.footprint_m2 - a.footprint_m2);
  if (!options.length) notes.push('The program needs ' + Math.round(T.gross) + ' m² gross; the envelope is ' + Math.round(envArea / M2) + ' m² and at most ' + capFloors + ' floors fit under the cap. Reduce the program, raise the cap or widen the envelope.');
  return { totals: { net: T.net, gross: T.gross, rooms: T.rooms, efficiency: T.efficiency }, options, notes, envelope_m2: Math.round(envArea / 1e4) / 100, capFloors };
}

/** A mass in the shape CivilCraft's massing.js reads (cleanMass): pts [{ x, y }] in the project's units (`unitPerMm`: 0.001 for metres, 1/304.8 for feet). */
export function civilMass(option, { unitPerMm = 0.001, use = '' } = {}) {
  return { name: cleanText(option.name, 80), pts: option.pts.map((q) => ({ x: q[0] * unitPerMm, y: q[1] * unitPerMm })), floors: option.floors, floorHeight: option.floorHeight * unitPerMm, use: cleanText(use, 40) };
}

const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
/** The option as a building: levels up to its floor count, walls round the footprint on each (the footprint is the walls' outer face) and a floor slab. ONE undo step. */
export function buildOption(option, { typeKey = 'ext-2x6' } = {}) {
  if (!option?.pts || option.pts.length < 3 || !(option.floors >= 1)) refuse('model.err.mass.shape');
  return op((w) => {
    let levels = readLevels(w);
    if (!levels.length) refuse('model.err.nolevel');
    const base = levels[0].elevation;
    for (let k = levels.length; k < option.floors; k++) {
      levels = readLevels(w);
      const last = levels[levels.length - 1];
      addLevel(w, { name: 'Level ' + (levels.length + 1), elevation: base + k * option.floorHeight, height: option.floorHeight, guid: val(w.guid()) });
      void last;
    }
    levels = readLevels(w).slice(0, option.floors);
    const walls = [], floors = [];
    levels.forEach((l, k) => {
      const inv = inv4(w.storeyWorld(l.id));
      const plan = option.pts.map((p) => { const q = apply4(inv, p[0], p[1], 0); return [q[0], q[1]]; });
      const above = levels[k + 1];
      for (let i = 0; i < plan.length; i++) {
        const a = plan[i], b = plan[(i + 1) % plan.length];
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 1) continue;
        walls.push(addWall(w, { storey: l.id, a, b, typeKey, topLevel: above ? above.guid : '', height: above ? 0 : option.floorHeight, extSide: 'right', justification: 'exterior' }).id);
      }
    });
    settleFor(w, levels.map((l) => l.id));
    for (const l of levels) {
      const inv = inv4(w.storeyWorld(l.id));
      const plan = option.pts.map((p) => { const q = apply4(inv, p[0], p[1], 0); return [q[0], q[1]]; });
      floors.push(addFloor(w, { storey: l.id, seed: insidePoint(plan), mode: 'building', kind: 'concrete' }).id);
    }
    return { id: walls[0] ?? null, ids: [...walls, ...floors], made: new Map() };
  });
}

/** Rooms typed or pasted from a spreadsheet: name, count, area, [ground]. Tab-separated (a pasted sheet) or comma-separated lines. */
export function parseProgram(text) {
  const rows = [];
  const n = (v) => { const x = Number(String(v).replace(',', '.')); return Number.isFinite(x) ? x : NaN; };
  for (const line of String(text || '').split(/\r?\n/).map((x) => x.trim()).filter(Boolean).slice(0, 200)) {
    const cells = (line.includes('\t') ? line.split('\t') : line.split(',')).map((x) => x.trim());
    const [name, count, area, flag] = cells;
    if (/^(room|name|space)$/i.test(name) && !Number.isFinite(n(area))) continue;   // a pasted header row
    rows.push({ name, count: count === undefined || count === '' ? 1 : n(count), area_m2: n(area), ground: /ground/i.test(flag || '') });
  }
  return rows;
}
