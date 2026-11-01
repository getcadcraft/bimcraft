/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — English fallbacks for the assistant's results and file text; the panels pass t() and show the language files' words. */
/**
 * people-sim.js — people in the building (0.8 EG.48, session bim-sim_PART_2). No DOM: tools/bimcraft-test/people-test.mjs
 * (node bin/test-bimcraft.mjs --people) runs it in Node. Millimetres in, seconds and metres out.
 *
 * A coarse "hydraulic" crowd model, the kind the fire-engineering handbooks describe, not a social-force or CFD model:
 *   - each room is a grid; a walker's route is the shortest way through rooms and openings (doors, stairs), string-pulled
 *     so it hugs corners rather than staircasing the grid;
 *   - speed falls with the crowd in the room: S = k(1 − a·D) with k = 1.4 m/s and a = 0.266 (Nelson & MacLennan; the person's
 *     own walking speed scales it, 1.2 m/s at D ≤ 0.54 persons/m²);
 *   - a door or stair lets people through at Fs × effective width (Fs = 1.3 persons/s/m for doors; the effective width is the clear
 *     width less a 150 mm boundary layer each side); the rest wait in a first-come queue at it.
 * Every number is in DEFAULTS, labelled as an assumption for the person to review. Same inputs and seed → same answer (no clock).
 *
 *   buildScene({ rooms, openings, cell? }) → scene
 *        rooms    [{ id, name, poly: [[x, y]…], holes?, level?, area_m2? }]                     (plan mm; area from the polygon if absent)
 *        openings [{ id, kind: 'door', x, y, w, rooms: [a, b|null], exit?: true }]               a door joins room ids a and b; b = null is outside
 *                 [{ id, kind: 'stair', a: { room, x, y }, b: { room, x, y }, length, w }]         a stair or ramp joins two points (length in mm)
 *   attachDoors(rooms, doors, { tol }) → openings         finds the (up to two) rooms each door [{ id, x, y, w, level?, thickness }] stands between
 *   travelDistances(scene, { blocked, exits }) → [{ room, id, name, maxM, at, via, reachable }]     the farthest point of each room from an exit, along the walls
 *   simulate(scene, { scenario: 'evacuate' | 'arrive', … }) → { results, frames, … }            see DEFAULTS for the options
 *   peopleProblems(out, { travelLimit, availableTime, queueWait, t }) → [problem]             the shared Problems shape (rule 29)
 */

export const DEFAULTS = {
  scenario: 'evacuate',          // 'evacuate' | 'arrive' | 'exchange' (the people in the rooms leave while the same number come in: counter-flow at the doors)
  seed: 1,
  m2PerPerson: 10,              // occupant load factor (an assumption: the person sets it, or each room's count)
  loads: {},                    // room id → people (overrides the factor)
  premove: [10, 60],            // s: recognition + response time, uniform between (evacuation)
  speed: [1.2, 0.2],            // free walking speed m/s: mean, spread (1 sd), clamped to [0.6, 1.8]
  flow: { door: 1.3, stair: 1.0 },   // persons/s per metre of effective width
  boundary: 0.15,               // m, each side of an opening
  stairSpeed: 0.75,             // of level walking speed
  landingTurn: 1.0,             // s a walker spends turning at each landing of a stair (an assumption; 0.8 EG.48 landings)
  counterFlow: 0.8,             // share of its rate an opening keeps when people pass the other way within counterWindow (an assumption: published values vary widely)
  counterWindow: 3,             // s
  until: 1800,                  // s, the longest run
  dt: 0.25,                     // s
  window: 600,                  // s over which people arrive ('arrive')
  blocked: [],                  // opening ids that are shut (a what-if)
  exits: null,                  // opening ids that count as exits (default: every door to outside)
  entrances: null,              // 'arrive': opening ids people come in by (default: the exits)
  cell: 250,                    // mm, the room grid (larger for very big rooms)
  maxFrameValues: 3e6,          // frames × people kept for playback
  minDensityFactor: 0.1,
};
const K = 1.4, A = 0.266, D_FREE = 0.54, V_FREE = K * (1 - A * D_FREE);   // 1.2 m/s

// ------------------------------------------------------------------------------------------------- numbers
function mulberry(seed) {
  let a = (seed >>> 0) || 1;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const gauss = (rnd) => Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd());
const polyArea = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return Math.abs(s) / 2; };
function inRing(poly, x, y) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > y) !== (b[1] > y) && x < ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}
const segDist = (x, y, a, b) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy;
  const t = l2 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / l2)) : 0;
  return Math.hypot(x - (a[0] + dx * t), y - (a[1] + dy * t));
};
const ringDist = (poly, x, y) => { let d = Infinity; for (let i = 0; i < poly.length; i++) d = Math.min(d, segDist(x, y, poly[i], poly[(i + 1) % poly.length])); return d; };

class Heap {
  constructor() { this.k = []; this.v = []; }
  get size() { return this.k.length; }
  push(key, val) {
    const k = this.k, v = this.v; let i = k.length; k.push(key); v.push(val);
    while (i > 0) { const j = (i - 1) >> 1; if (k[j] <= k[i]) break; [k[i], k[j]] = [k[j], k[i]]; [v[i], v[j]] = [v[j], v[i]]; i = j; }
  }
  pop() {
    const k = this.k, v = this.v, key = k[0], val = v[0], lk = k.pop(), lv = v.pop();
    if (k.length) {
      k[0] = lk; v[0] = lv; let i = 0;
      for (;;) { let m = i; const l = 2 * i + 1, r = l + 1; if (l < k.length && k[l] < k[m]) m = l; if (r < k.length && k[r] < k[m]) m = r; if (m === i) break; [k[i], k[m]] = [k[m], k[i]]; [v[i], v[m]] = [v[m], v[i]]; i = m; }
    }
    return [key, val];
  }
}

// ------------------------------------------------------------------------------------------------- rooms as grids
const NB = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1], [2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

/** The grid of one room: free[i] = 1 where the cell's centre is inside the outline and outside the holes. */
function makeGrid(room, cell0) {
  const xs = room.poly.map((p) => p[0]), ys = room.poly.map((p) => p[1]);
  const x0 = Math.min(...xs), y0 = Math.min(...ys), x1 = Math.max(...xs), y1 = Math.max(...ys);
  let cell = cell0;
  while (((x1 - x0) / cell + 1) * ((y1 - y0) / cell + 1) > 60000) cell *= 1.5;   // very big rooms: coarser
  const nx = Math.max(1, Math.ceil((x1 - x0) / cell)), ny = Math.max(1, Math.ceil((y1 - y0) / cell));
  const free = new Uint8Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const x = x0 + (i + 0.5) * cell, y = y0 + (j + 0.5) * cell;
    if (inRing(room.poly, x, y) && !(room.holes || []).some((h) => inRing(h, x, y))) free[j * nx + i] = 1;
  }
  return { x0, y0, nx, ny, cell, free, fields: new Map() };
}
const cellOf = (g, x, y) => { const i = Math.floor((x - g.x0) / g.cell), j = Math.floor((y - g.y0) / g.cell); return i < 0 || j < 0 || i >= g.nx || j >= g.ny ? -1 : j * g.nx + i; };
const centre = (g, c) => [g.x0 + ((c % g.nx) + 0.5) * g.cell, g.y0 + (Math.floor(c / g.nx) + 0.5) * g.cell];
/** The free cell nearest to a point (a door stands on the wall line, half a cell out). */
function nearFree(g, x, y) {
  const c = cellOf(g, x, y);
  if (c >= 0 && g.free[c]) return c;
  const ci = Math.floor((x - g.x0) / g.cell), cj = Math.floor((y - g.y0) / g.cell);
  let best = -1, bd = Infinity;
  for (let r = 1; r <= 12 && best < 0; r++) for (let j = cj - r; j <= cj + r; j++) for (let i = ci - r; i <= ci + r; i++) {
    if (i < 0 || j < 0 || i >= g.nx || j >= g.ny || !g.free[j * g.nx + i]) continue;
    const d = Math.hypot(g.x0 + (i + 0.5) * g.cell - x, g.y0 + (j + 0.5) * g.cell - y);
    if (d < bd) { bd = d; best = j * g.nx + i; }
  }
  return best;
}
/** Can a walker go straight from p to q (every cell on the way free)? */
function los(g, p, q) {
  const n = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / (g.cell / 2)));
  for (let s = 1; s < n; s++) {   // the two ends are not tested: a door stands on the wall line, half a cell outside the grid
    const c = cellOf(g, p[0] + ((q[0] - p[0]) * s) / n, p[1] + ((q[1] - p[1]) * s) / n);
    if (c < 0 || !g.free[c]) return false;
  }
  return true;
}
/** Distance field (mm) from a cell over the free cells: 16 neighbours with true lengths, within about 2.5 % of the straight-line truth. */
function field(g, src) {
  const d = new Float64Array(g.nx * g.ny).fill(Infinity), h = new Heap(), nx = g.nx, ny = g.ny, free = g.free, cell = g.cell;
  d[src] = 0; h.push(0, src);
  while (h.size) {
    const [dd, c] = h.pop();
    if (dd > d[c]) continue;
    const ci = c % nx, cj = (c - ci) / nx;
    for (const [di, dj] of NB) {
      const i = ci + di, j = cj + dj;
      if (i < 0 || j < 0 || i >= nx || j >= ny || !free[j * nx + i]) continue;
      if (Math.abs(di) + Math.abs(dj) === 2 && (!free[cj * nx + i] || !free[j * nx + ci])) continue;   // no cutting a corner
      if (Math.abs(di) === 2 && (!free[cj * nx + ci + di / 2] || !free[j * nx + ci + di / 2])) continue;   // knight move: both middle cells free
      if (Math.abs(dj) === 2 && (!free[(cj + dj / 2) * nx + ci] || !free[(cj + dj / 2) * nx + i])) continue;
      const n = j * nx + i, nd = dd + Math.hypot(di, dj) * cell;
      if (nd < d[n]) { d[n] = nd; h.push(nd, n); }
    }
  }
  return d;
}
const fieldOf = (g, src) => { let f = g.fields.get(src); if (!f) { f = field(g, src); g.fields.set(src, f); } return f; };

// ------------------------------------------------------------------------------------------------- the scene
export function buildScene({ rooms, openings, cell = DEFAULTS.cell }) {
  const R = rooms.map((r, index) => ({ ...r, index, area_m2: r.area_m2 ?? (polyArea(r.poly) - (r.holes || []).reduce((s, h) => s + polyArea(h), 0)) / 1e6, g: makeGrid(r, cell) }));
  const byId = new Map(R.map((r) => [r.id, r]));
  const O = [];
  for (const o of openings || []) {
    if (o.kind === 'stair') {
      const ra = byId.get(o.a.room), rb = byId.get(o.b.room);
      if (!ra || !rb) continue;
      O.push({ id: o.id, kind: 'stair', w: o.w, landings: Math.max(0, Math.floor(o.landings || 0)), len: o.length / 1000, end: [{ room: ra.index, p: [o.a.x, o.a.y] }, { room: rb.index, p: [o.b.x, o.b.y] }], exit: false });
    } else {
      const ra = byId.get(o.rooms[0]), rb = o.rooms[1] === null || o.rooms[1] === undefined ? null : byId.get(o.rooms[1]);
      if (!ra && !rb) continue;
      const a = ra || rb, b = ra ? rb : null;   // a is always a real room; b = null → outside
      O.push({ id: o.id, kind: 'door', w: o.w, len: 0, end: [{ room: a.index, p: [o.x, o.y] }, b ? { room: b.index, p: [o.x, o.y] } : { room: -1, p: [o.x, o.y] }], exit: !b || !!o.exit });
    }
  }
  const ends = [];   // every standing place: an opening seen from one side
  O.forEach((o, oi) => o.end.forEach((e, side) => { if (e.room >= 0) ends.push({ o: oi, side, room: e.room, p: e.p, cellId: nearFree(R[e.room].g, e.p[0], e.p[1]) }); }));
  const inRoom = R.map(() => []);
  ends.forEach((e, i) => inRoom[e.room].push(i));
  const at = new Map(ends.map((e, i) => [e.o + ':' + e.side, i]));
  const far = ends.map((e) => at.get(e.o + ':' + (1 - e.side)) ?? -1);   // the same opening seen from the other side (-1 = outside)
  return { rooms: R, byId, openings: O, ends, inRoom, far, cell };
}

/** Distance in metres between two standing places of one room, and the walked route. */
function inRoomRoute(scene, room, p, q, needPath) {
  const g = scene.rooms[room].g;
  if (los(g, p, q)) return { d: Math.hypot(q[0] - p[0], q[1] - p[1]) / 1000, path: needPath ? [p, q] : null };
  const cq = nearFree(g, q[0], q[1]), cp = nearFree(g, p[0], p[1]);
  if (cq < 0 || cp < 0) return { d: Infinity, path: null };
  const f = fieldOf(g, cq), d = f[cp];
  if (!Number.isFinite(d)) return { d: Infinity, path: null };
  if (!needPath) return { d: d / 1000, path: null };
  // walk down the field, then string-pull: from each vertex jump to the farthest one it can see
  const raw = [p];
  let c = cp;
  for (let guard = 0; guard < 100000 && f[c] > 0; guard++) {
    const ci = c % g.nx, cj = (c - ci) / g.nx;
    let best = c, bv = f[c];
    for (const [di, dj] of NB.slice(0, 8)) {
      const i = ci + di, j = cj + dj;
      if (i < 0 || j < 0 || i >= g.nx || j >= g.ny) continue;
      const n = j * g.nx + i;
      if (f[n] < bv) { bv = f[n]; best = n; }
    }
    if (best === c) break;
    c = best; raw.push(centre(g, c));
  }
  raw.push(q);
  const path = [raw[0]];
  let at = 0;
  while (at < raw.length - 1) {
    let far = at + 1;
    for (let k = raw.length - 1; k > at + 1; k--) if (los(g, raw[at], raw[k])) { far = k; break; }
    path.push(raw[far]); at = far;
  }
  let len = 0;
  for (let i = 1; i < path.length; i++) len += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]);
  return { d: len / 1000, path };
}

/**
 * Cost (m) to a goal from every standing place, counted from standing at the place to the goal: crossing its opening (a stair's length)
 * and everything after. goal { exit: true }: an exit's inside place costs 0 (the door itself takes no length). goal { room }: crossing
 * into that room is the end. Shut openings are not used.
 */
function costToGoal(scene, goal, shut, exitSet) {
  const E = scene.ends, dist = new Float64Array(E.length).fill(Infinity), h = new Heap();
  const seed = (i, d) => { if (d < dist[i]) { dist[i] = d; h.push(d, i); } };
  E.forEach((e, i) => {
    const o = scene.openings[e.o];
    if (shut.has(o.id)) return;
    if (goal.exit) { if (exitSet.has(o.id) && o.end[1 - e.side].room < 0) seed(i, 0); }
    else if (e.room === goal.room && scene.far[i] >= 0) seed(scene.far[i], o.len);   // the place on the other side of j crosses into the room
  });
  while (h.size) {
    const [dd, i] = h.pop();
    if (dd > dist[i]) continue;
    const e = E[i];
    for (const j of scene.inRoom[e.room]) {   // arriving at j (by crossing its opening from its far side), then walking to i
      if (j === i) continue;
      const oj = scene.openings[E[j].o];
      if (shut.has(oj.id)) continue;
      const far = scene.far[j];
      if (far < 0) continue;
      const walk = inRoomRoute(scene, e.room, E[j].p, e.p, false).d;
      if (!Number.isFinite(walk)) continue;
      const nd = dd + walk + oj.len;
      if (nd < dist[far]) { dist[far] = nd; h.push(nd, far); }
    }
  }
  return dist;
}

/** Which rooms each door stands between: up to the two rooms whose outline is within half the wall (plus `tol`) of the door. */
export function attachDoors(rooms, doors, { tol = 60 } = {}) {
  const out = [];
  for (const d of doors) {
    const near = rooms.filter((r) => d.level === undefined || r.level === undefined || r.level === d.level)
      .map((r) => ({ r, dist: ringDist(r.poly, d.x, d.y) })).filter((c) => c.dist <= (d.thickness || 200) / 2 + tol).sort((a, b) => a.dist - b.dist || String(a.r.id).localeCompare(String(b.r.id)));
    if (!near.length) continue;
    out.push({ id: d.id, kind: 'door', x: d.x, y: d.y, w: d.w, rooms: [near[0].r.id, near[1] ? near[1].r.id : null], exit: !!d.exit });
  }
  return out;
}

const shutSet = (o) => new Set(o?.blocked || []);
const exitsOf = (scene, o) => (o?.exits ? new Set(o.exits) : new Set(scene.openings.filter((x) => x.exit).map((x) => x.id)));

/** The farthest point of every room from an exit, walked (m), with the opening that way leads through. */
export function travelDistances(scene, o = {}) {
  const shut = shutSet(o), dist = costToGoal(scene, { exit: true }, shut, exitsOf(scene, o));
  return scene.rooms.map((r) => {
    const ends = scene.inRoom[r.index].filter((i) => Number.isFinite(dist[i]) && !shut.has(scene.openings[scene.ends[i].o].id));
    const res = { room: r.index, id: r.id, name: r.name || '', maxM: null, at: null, via: null, reachable: false };
    if (!ends.length) return res;
    const fields = ends.map((i) => fieldOf(r.g, scene.ends[i].cellId));
    const g = r.g;
    let worst = -1;
    const consider = (v, at) => { if (v > worst) { worst = v; res.at = at.map(Math.round); } };
    // from a place to the nearest way out: straight when it can see the opening, else along the room's distance field
    const toExit = (c, pt, extra) => {
      let best = Infinity, via = -1;
      for (let k = 0; k < ends.length; k++) {
        const e = scene.ends[ends[k]], straight = los(g, pt, e.p) ? Math.hypot(pt[0] - e.p[0], pt[1] - e.p[1]) : fields[k][c];
        const v = straight / 1000 + dist[ends[k]];
        if (v < best) { best = v; via = k; }
      }
      return [best + extra / 1000, via];
    };
    let viaAt = null;
    for (let c = 0; c < g.free.length; c++) {
      if (!g.free[c]) continue;
      const pt = centre(g, c), [v, via] = toExit(c, pt, 0);
      if (v > worst) { consider(v, pt); viaAt = via; }
    }
    // the corners themselves (the cell centres stop half a cell short of the wall): a corner is its nearest cell plus the step to it
    for (const ring of [r.poly, ...(r.holes || [])]) for (const vx of ring) {
      const c = nearFree(g, vx[0], vx[1]);
      if (c < 0) continue;
      const pt = centre(g, c), [v, via] = toExit(c, pt, Math.hypot(vx[0] - pt[0], vx[1] - pt[1]));
      if (v > worst) { consider(v, vx); viaAt = via; }
    }
    if (worst >= 0) res.via = scene.openings[scene.ends[ends[viaAt]].o].id;
    if (worst >= 0) { res.maxM = Math.round(worst * 100) / 100; res.reachable = true; }
    return res;
  });
}

const dens = (count, area, minF) => { const D = count / Math.max(area, 0.5); return D <= D_FREE ? 1 : Math.max(minF, (1 - A * D) / (1 - A * D_FREE)); };
function along(leg, s) {
  const p = leg.path, c = leg.cum;
  if (s <= 0) return p[0];
  if (s >= leg.len) return p[p.length - 1];
  let i = 1;
  while (i < c.length - 1 && c[i] < s) i++;
  const f = (s - c[i - 1]) / Math.max(c[i] - c[i - 1], 1e-9);
  return [p[i - 1][0] + (p[i][0] - p[i - 1][0]) * f, p[i - 1][1] + (p[i][1] - p[i - 1][1]) * f];
}
function makeLeg(path, finalLeg, endIdx) {
  const cum = [0];
  for (let i = 1; i < path.length; i++) cum.push(cum[i - 1] + Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]) / 1000);
  return { path, cum, len: cum[cum.length - 1], final: finalLeg, end: endIdx };
}

const ST = { wait: 0, walk: 1, queue: 2, stair: 3, done: 4, stuck: 5, pending: 6 };
export const STATES = ST;

/**
 * Runs the crowd. 'evacuate': everyone starts in their room, hears the alarm after a pre-movement time and walks to the nearest way out.
 * 'arrive': everyone comes in through the entrances over `window` seconds and walks to a room (the day-to-day pattern: where do queues form).
 * → { results, frames: [{ t, x, y, st, room }], sampleDt, people, o }
 */
export function simulate(scene, opts = {}) {
  const o = { ...DEFAULTS, ...opts, flow: { ...DEFAULTS.flow, ...(opts.flow || {}) } };
  const rnd = mulberry(o.seed), shut = shutSet(o), exitSet = exitsOf(scene, o), arrive = o.scenario === 'arrive', exchange = o.scenario === 'exchange', comers = arrive || exchange;
  const stairTime = (oc, a) => oc.len / (a.v0 * o.stairSpeed) + (oc.landings || 0) * o.landingTurn;
  const Rm = scene.rooms, OP = scene.openings, E = scene.ends;
  const goalCache = new Map();
  const goalOf = (room) => { const k = room === null ? 'x' : room; if (!goalCache.has(k)) goalCache.set(k, costToGoal(scene, room === null ? { exit: true } : { room }, shut, exitSet)); return goalCache.get(k); };
  const freeCells = Rm.map((r) => { const l = []; for (let c = 0; c < r.g.free.length; c++) if (r.g.free[c]) l.push(c); return l; });
  const randPoint = (ri) => { const r = Rm[ri], l = freeCells[ri]; if (!l.length) return [r.poly[0][0], r.poly[0][1]]; const c = l[Math.floor(rnd() * l.length)], [cx, cy] = centre(r.g, c); return [cx + (rnd() - 0.5) * r.g.cell * 0.8, cy + (rnd() - 0.5) * r.g.cell * 0.8]; };
  const counts = Rm.map((r) => { const f = o.loads?.[r.id]; if (f !== undefined) return Math.max(0, Math.floor(f)); if (r.load !== undefined) return Math.max(0, Math.floor(r.load)); if (r.occupied === false) return 0; return Math.floor(r.area_m2 / o.m2PerPerson); });
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // ---- the people
  const P = [];
  const fresh = (room) => ({ id: P.length, room, home: room, x: 0, y: 0, v0: clamp(o.speed[0] + gauss(rnd) * o.speed[1], 0.6, 1.8), t0: 0, st: ST.wait, leg: null, s: 0, travel: 0, qT: 0, cross: null, until: 0, destRoom: null, target: null, exitT: null, waited: 0, from: null });
  const entrances = comers ? OP.filter((x) => x.kind === 'door' && !shut.has(x.id) && (o.entrances ? o.entrances.includes(x.id) : x.exit) && x.end[1].room < 0) : [];
  if (comers) {
    const dest = [];
    Rm.forEach((r, ri) => { for (let k = 0; k < counts[ri]; k++) dest.push(ri); });
    for (let i = dest.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [dest[i], dest[j]] = [dest[j], dest[i]]; }
    const wTot = entrances.reduce((s, x) => s + x.w, 0);
    for (const ri of dest) {
      const a = fresh(-1); a.home = ri; a.destRoom = ri; a.target = randPoint(ri); a.t0 = rnd() * o.window; a.st = ST.pending;
      let pick = rnd() * wTot, en = entrances[entrances.length - 1];
      for (const x of entrances) { pick -= x.w; if (pick <= 0) { en = x; break; } }
      if (en) { const oi = OP.indexOf(en); a.cross = { oi, from: -1, to: E.findIndex((e) => e.o === oi) }; a.from = en.id; } else { a.st = ST.stuck; a.stuckWhy = 'noentrance'; }
      P.push(a);
    }
  }
  if (!arrive) {
    Rm.forEach((r, ri) => { for (let k = 0; k < counts[ri]; k++) { const a = fresh(ri); [a.x, a.y] = randPoint(ri); a.t0 = exchange ? rnd() * o.window : o.premove[0] + rnd() * (o.premove[1] - o.premove[0]); P.push(a); } });
  }
  const N = P.length;
  const inRoomCount = new Int32Array(Rm.length);
  for (const a of P) if (a.st === ST.wait) inRoomCount[a.room]++;

  // ---- openings
  const Q = OP.map(() => []), nextFree = OP.map(() => 0);
  const rate = OP.map((x) => (x.kind === 'stair' ? o.flow.stair : o.flow.door) * Math.max(0.2, x.w / 1000 - 2 * o.boundary));
  const ostat = OP.map((x) => ({ id: x.id, kind: x.kind, passed: 0, switches: 0, lastDir: null, lastPassT: -Infinity, peakQueue: 0, totalWait: 0, maxWait: 0, first: null, last: null, capacity: 0 }));
  ostat.forEach((s, i) => { s.capacity = Math.round(rate[i] * 100) / 100; });

  function plan(a, t) {
    const r = a.room;
    if (a.destRoom === r) {   // in the room we came for: walk to our spot (the route is worked from the opening's side so its field is shared)
      const back = inRoomRoute(scene, r, a.target, [a.x, a.y], true);
      if (!back.path) { a.st = ST.stuck; a.stuckWhy = 'noroute'; inRoomCount[r]--; return; }
      a.leg = makeLeg(back.path.slice().reverse(), true, -1); a.s = 0; a.st = ST.walk; return;
    }
    const dist = goalOf(a.destRoom), shutNow = shut;
    let best = -1, bd = Infinity;
    for (const ei of scene.inRoom[r]) {
      const op = OP[E[ei].o];
      if (shutNow.has(op.id) || !Number.isFinite(dist[ei])) continue;
      const w = inRoomRoute(scene, r, [a.x, a.y], E[ei].p, false).d;
      if (w + dist[ei] < bd - 1e-9) { bd = w + dist[ei]; best = ei; }
    }
    if (best < 0) { a.st = ST.stuck; a.stuckWhy = 'noroute'; inRoomCount[r]--; return; }
    const rt = inRoomRoute(scene, r, [a.x, a.y], E[best].p, true);
    a.leg = makeLeg(rt.path, false, best); a.s = 0; a.st = ST.walk;
  }

  // ---- the clock
  const frames = [];
  let sampleDt = o.sampleDt || 1;
  const sample = (t) => {
    const f = { t, x: new Float32Array(N), y: new Float32Array(N), z: new Float32Array(N), st: new Uint8Array(N), room: new Int16Array(N) };
    for (const a of P) {
      let p, z = Rm[a.room]?.z || 0;   // z (mm): the floor of the room the walker is in; on a stair, between its two ends
      if (a.st === ST.walk && a.leg) p = along(a.leg, a.s);
      else if (a.st === ST.stair) {
        const oc = OP[a.cross.oi], dur = stairTime(oc, a), k = Math.min(1, Math.max(0, (t - (a.until - dur)) / dur)), pa = oc.end[0].p, pb = oc.end[1].p;
        p = [pa[0] + (pb[0] - pa[0]) * k, pa[1] + (pb[1] - pa[1]) * k];
        const za = Rm[oc.end[0].room]?.z || 0, zb = Rm[oc.end[1].room]?.z || 0; z = za + (zb - za) * k;
      }
      else p = [a.x, a.y];
      f.x[a.id] = p[0]; f.y[a.id] = p[1]; f.z[a.id] = z; f.st[a.id] = a.st; f.room[a.id] = a.st === ST.done || a.st === ST.pending ? -1 : a.room;
    }
    frames.push(f);
    if (frames.length * N * 3 > o.maxFrameValues && frames.length > 4) {   // too much to keep: every other frame, twice the gap
      for (let i = frames.length - 1; i >= 0; i--) if (i % 2 === 1) frames.splice(i, 1);
      sampleDt *= 2;
    }
  };
  const finishCross = (a, t, toEnd) => {
    if (toEnd < 0) { a.st = ST.done; a.exitT = t; return; }
    const e = E[toEnd];
    a.room = e.room; a.x = e.p[0]; a.y = e.p[1]; inRoomCount[a.room]++;
    plan(a, t);
  };

  let t = 0, lastSample = -Infinity, remaining = P.filter((a) => a.st !== ST.stuck).length;
  while (t <= o.until + 1e-9) {
    if (t - lastSample >= sampleDt - 1e-9) { sample(t); lastSample = t; }
    // people
    for (const a of P) {
      if (a.st === ST.pending) { if (t >= a.t0) { a.st = ST.queue; a.qT = a.t0; Q[a.cross.oi].push(a); } }
      else if (a.st === ST.wait) { if (t >= a.t0) { plan(a, t); if (a.st === ST.stuck) remaining--; } }
      else if (a.st === ST.walk) {
        const f = dens(inRoomCount[a.room], Rm[a.room].area_m2, o.minDensityFactor), ds = a.v0 * f * o.dt;
        a.s += ds; a.travel += Math.min(ds, Math.max(0, a.leg.len - (a.s - ds)));
        if (a.s >= a.leg.len) {
          const end = a.leg.path[a.leg.path.length - 1];
          a.x = end[0]; a.y = end[1];
          if (a.leg.final) { a.st = ST.done; a.exitT = t; inRoomCount[a.room]--; remaining--; }
          else { a.st = ST.queue; a.qT = t; a.cross = { oi: E[a.leg.end].o, from: a.leg.end, to: scene.far[a.leg.end] }; Q[a.cross.oi].push(a); }
        }
      } else if (a.st === ST.stair && t >= a.until) { finishCross(a, t, a.cross.to); if (a.st === ST.done || a.st === ST.stuck) remaining--; }
    }
    // openings
    for (let oi = 0; oi < OP.length; oi++) {
      const q = Q[oi], S = ostat[oi];
      if (q.length > S.peakQueue) S.peakQueue = q.length;
      while (q.length && nextFree[oi] <= t + o.dt - 1e-9) {
        const a = q.shift(), base = Math.max(nextFree[oi], a.qT, t);
        // counter-flow (0.8 EG.48): a pass in the other direction from the last one, close behind it, costs the opening part of its rate
        const dir = a.cross.from >= 0 ? E[a.cross.from].side : 1 - E[a.cross.to].side, sw = S.lastDir !== null && S.lastDir !== dir && base - S.lastPassT <= o.counterWindow;
        const passT = base + (sw ? 1 / (rate[oi] * o.counterFlow) - 1 / rate[oi] : 0);
        if (sw) S.switches++;
        S.lastDir = dir; S.lastPassT = passT;
        nextFree[oi] = passT + 1 / rate[oi];
        const wait = passT - a.qT;
        S.passed++; S.totalWait += wait; if (wait > S.maxWait) S.maxWait = wait; if (S.first === null) S.first = passT; S.last = passT; a.waited += wait;
        if (a.cross.from >= 0) inRoomCount[a.room]--;
        if (OP[oi].kind === 'stair') { a.st = ST.stair; a.until = passT + stairTime(OP[oi], a); a.room = -2; }
        else { finishCross(a, passT, a.cross.to); if (a.st === ST.done || a.st === ST.stuck) remaining--; }
      }
    }
    if (remaining <= 0 && P.every((a) => a.st === ST.done || a.st === ST.stuck)) { sample(t); break; }
    t += o.dt;
  }
  if (frames.length && frames[frames.length - 1].t < Math.min(t, o.until) - 1e-9) sample(Math.min(t, o.until));

  // ---- results
  const done = P.filter((a) => a.st === ST.done), stuck = P.filter((a) => a.st === ST.stuck), still = P.filter((a) => ![ST.done, ST.stuck].includes(a.st));
  const times = done.map((a) => a.exitT).sort((x, y) => x - y);
  const pct = (p) => (times.length ? Math.round(times[Math.max(0, Math.ceil(times.length * p) - 1)] * 10) / 10 : null);
  const roomRes = Rm.map((r, ri) => {
    const mine = P.filter((a) => exchange ? a.home === ri && a.destRoom === null : (a.home === ri && !arrive || arrive && a.destRoom === ri));
    const left = mine.filter((a) => a.exitT !== null);
    return { id: r.id, name: r.name || '', people: mine.length, stuck: mine.filter((a) => a.st === ST.stuck).length,
      clearT: left.length === mine.length && mine.length ? Math.round(Math.max(...left.map((a) => a.exitT)) * 10) / 10 : null,
      maxWalked: mine.length ? Math.round(Math.max(...mine.map((a) => a.travel)) * 100) / 100 : 0 };
  });
  const bottleneck = ostat.filter((s) => s.totalWait > 0).sort((x, y) => y.totalWait - x.totalWait)[0] || null;
  const results = {
    scenario: o.scenario, people: N, finished: done.length, stuck: stuck.length, unfinished: still.length,
    totalTime: times.length ? Math.round(times[times.length - 1] * 10) / 10 : null, t50: pct(0.5), t90: pct(0.9),
    meanWalked: N ? Math.round(P.reduce((s, a) => s + a.travel, 0) / N * 100) / 100 : 0, maxWalked: N ? Math.round(Math.max(...P.map((a) => a.travel)) * 100) / 100 : 0,
    meanWait: N ? Math.round(P.reduce((s, a) => s + a.waited, 0) / N * 10) / 10 : 0,
    openings: ostat.map(({ lastDir, lastPassT, ...s }) => ({ ...s, totalWait: Math.round(s.totalWait * 10) / 10, maxWait: Math.round(s.maxWait * 10) / 10, first: s.first === null ? null : Math.round(s.first * 10) / 10, last: s.last === null ? null : Math.round(s.last * 10) / 10 })),
    rooms: roomRes, bottleneck: bottleneck ? bottleneck.id : null,
  };
  return { results, frames, sampleDt, people: P.map((a) => ({ id: a.id, home: Rm[a.home]?.id ?? null, from: a.from, exitT: a.exitT, walked: a.travel, waited: a.waited, st: a.st })), o };
}

/** Findings as shared Problems (rule 29). `travel` = travelDistances(); limits are the person's, never a number of ours. */
export function peopleProblems(out, { travel = null, travelLimit = null, availableTime = null, queueWait = 60, t = null, guidOf = (id) => id } = {}) {
  const say = (key, vars, en) => (t ? t(key, vars) : en);
  const P = [], src = { kind: 'check', name: 'bimcraft.people' }, flagged = new Set();
  const r = out?.results;
  const noRoute = (id, name, at) => {
    if (flagged.has(id)) return;
    flagged.add(id);
    const key = out?.o?.scenario === 'arrive' ? 'people.p.noentry' : 'people.p.noroute';
    P.push({ code: 'people.noroute', severity: 'error', msg: { key, vars: { room: name || id } }, text: say(key, { room: name || id }, (key === 'people.p.noentry' ? 'No way in to ' : 'No way out of ') + (name || id) + '.'), source: src, where: at ? { space: '2d', at } : undefined });
  };
  for (const tr of travel || []) {
    const rr = (r?.rooms || []).find((x) => x.id === tr.id);
    if (!tr.reachable) { if (!rr || rr.people > 0) noRoute(tr.id, tr.name, tr.at); continue; }
    if (travelLimit && tr.maxM > travelLimit + 1e-9) P.push({ code: 'people.travel', severity: 'warning', msg: { key: 'people.p.travel', vars: { room: tr.name || tr.id, m: Math.round(tr.maxM * 10) / 10, limit: travelLimit } },
      text: say('people.p.travel', { room: tr.name || tr.id, m: Math.round(tr.maxM * 10) / 10, limit: travelLimit }, (tr.name || tr.id) + ': ' + (Math.round(tr.maxM * 10) / 10) + ' m to an exit, over the ' + travelLimit + ' m limit.'),
      req: { op: '<=', value: travelLimit, unit: 'm' }, found: { value: Math.round(tr.maxM * 10) / 10, unit: 'm' }, source: src, where: { space: '2d', at: tr.at } });
  }
  if (r && availableTime && r.totalTime !== null && r.totalTime > availableTime) P.push({ code: 'people.rset', severity: 'warning', msg: { key: 'people.p.rset', vars: { s: r.totalTime, limit: availableTime } },
    text: say('people.p.rset', { s: r.totalTime, limit: availableTime }, 'Everyone is out after ' + r.totalTime + ' s, more than the ' + availableTime + ' s available.'), req: { op: '<=', value: availableTime, unit: 's' }, found: { value: r.totalTime, unit: 's' }, source: src });
  for (const s of r?.openings || []) if (s.maxWait > queueWait) P.push({ code: 'people.queue', severity: 'note', msg: { key: 'people.p.queue', vars: { s: s.maxWait, n: s.peakQueue } },
    text: say('people.p.queue', { s: s.maxWait, n: s.peakQueue }, 'Queue at a ' + s.kind + ': up to ' + s.peakQueue + ' people, the longest wait ' + s.maxWait + ' s.'), about: [{ kind: 'element', id: guidOf(s.id) }], found: { value: s.maxWait, unit: 's' }, source: src });
  for (const s of r?.openings || []) if (s.switches >= 5) P.push({ code: 'people.counter', severity: 'note', msg: { key: 'people.p.counter', vars: { n: s.switches } },
    text: say('people.p.counter', { n: s.switches }, 'Counter-flow at a ' + s.kind + ': people passed the other way ' + s.switches + ' times close behind each other, so it passed fewer people than its rate.'), about: [{ kind: 'element', id: guidOf(s.id) }], source: src });
  for (const x of r?.rooms || []) if (x.stuck > 0) noRoute(x.id, x.name, null);
  return P;
}
