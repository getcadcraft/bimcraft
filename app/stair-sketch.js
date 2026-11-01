/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stair-sketch.js — a stair from a sketch (0.8 SU.1055, session bim-08). DOM-free; bin/test-bimcraft.mjs --stairsketch.
 * The person draws the walking line in plan: ONE line is a straight stair, TWO lines meeting at about a right angle are an L
 * (a landing at the corner), THREE lines (up, across, back) are a U. A landing boundary drawn as a rectangle sets the stair's
 * width (its short side) and, for a U, the gap between the flights (its long side less two widths). The result is the spec
 * res-stair.js `placeStair` takes, so the stair is an ordinary one afterwards: Properties, handrails, the stairwell, the checks.
 *
 *   stairFromSketch(points, { landing, height, width, riserMax }) → { spec, tread, notes[] }   (throws { key } model.err.stairsketch.*)
 *     points   the walking line's corners, plan mm, bottom step first: 2 points = straight, 3 = L, 4 = U
 *     landing  optional [[x, y] …] of the landing boundary
 *     The tread is worked from the line's length: each step is the line's length over the number of treads the height needs.
 */
import { STAIR_DEFAULTS, stairLayout } from './res-stair.js';

const fail = (key) => { throw Object.assign(new Error(key), { key }); };
const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const ang = (a, b) => Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
const turnOf = (a, b, c) => Math.sign((b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]));   // + = left
const between = (a, b) => { let d = (b - a) % 360; if (d > 180) d -= 360; if (d <= -180) d += 360; return d; };

export function stairFromSketch(points, { landing = null, height, width = null, riserMax = STAIR_DEFAULTS.riserMax } = {}) {
  const P = (points || []).filter((p, i, a) => i === 0 || dist(p, a[i - 1]) > 1);
  if (P.length < 2 || P.length > 4) fail('model.err.stairsketch.lines');
  if (!(height > 0)) fail('model.err.stairsketch.height');
  const notes = [];
  let w = width || STAIR_DEFAULTS.width, gap = STAIR_DEFAULTS.gap;
  if (landing && landing.length >= 3) {
    const xs = landing.map((p) => p[0]), ys = landing.map((p) => p[1]);
    const a = Math.max(...xs) - Math.min(...xs), b = Math.max(...ys) - Math.min(...ys), lo = Math.min(a, b), hi = Math.max(a, b);
    if (lo < 300) fail('model.err.stairsketch.landing');
    w = lo;
    if (P.length === 4) gap = Math.max(0, hi - 2 * lo);
    notes.push('landing');
  }
  const segs = [];
  for (let i = 0; i + 1 < P.length; i++) segs.push({ a: P[i], b: P[i + 1], len: dist(P[i], P[i + 1]), dir: ang(P[i], P[i + 1]) });
  const n = Math.max(2, Math.ceil(height / riserMax - 1e-9)), T = n - 1;
  const spec = { start: [P[0][0], P[0][1]], angle: segs[0].dir, width: w, height };
  let total = segs[0].len;
  if (P.length === 2) spec.kind = 'straight';
  else if (P.length === 3) {
    const d = Math.abs(between(segs[0].dir, segs[1].dir));
    if (d < 60 || d > 120) fail('model.err.stairsketch.angle');
    spec.kind = 'l'; spec.turn = turnOf(P[0], P[1], P[2]) > 0 ? 'left' : 'right';
    total = segs[0].len + segs[1].len; spec.split = segs[0].len / total;
  } else {
    const d1 = Math.abs(between(segs[0].dir, segs[2].dir + 180)), d2 = Math.abs(between(segs[0].dir, segs[1].dir));
    if (d1 > 25 || d2 < 60 || d2 > 120) fail('model.err.stairsketch.u');
    spec.kind = 'u'; spec.turn = turnOf(P[0], P[1], P[2]) > 0 ? 'left' : 'right';
    gap = landing ? gap : Math.max(0, segs[1].len - w);
    spec.gap = gap;
    total = segs[0].len + segs[2].len; spec.split = segs[0].len / total;
  }
  const tread = Math.max(50, total / T);
  spec.tread = tread;
  const L = stairLayout({ ...STAIR_DEFAULTS, ...spec });
  if (L.error) fail(L.error);
  return { spec, tread, notes, layout: L };
}
