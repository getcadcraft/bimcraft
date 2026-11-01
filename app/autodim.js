/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the notes are returned as data with codes; the plan dialog and the assistant tool word them. */
/**
 * autodim.js — dimension a plan by rules (0.8 EG.20, session bim-model_PART_4). DOM-free: it turns a level's walls and openings into the saved wall
 * dimensions BimCraft already has (wall-dimensions.js: two references on walls, an axis, an offset), so every dimension it makes follows the walls when
 * they move, can be picked and edited like one drawn by hand, and is made in ONE undo step (saveWallDimensions).
 *
 *   planAutoDimensions({ walls, openingRows, level, view, existing, overall, chains, openings: bool, gap, step, tol })
 *     → { specs: [{ kind: 'overall'|'chain', side, refs, axis, offset, view, level }], notes: [{ code, text }], counts: { overall, chain, skipped } }
 *   walls     readWalls rows ({ guid, storey, a, b, t, len, extSide, assembly, bulge … }) · openings readOpenings rows ({ wall (expressID), wallGuid, offset, width, kind })
 *   overall   one dimension each way across the building, on the south side (x) and the west side (y)
 *   chains    along each outside edge of the plan: the wall ends, the doors and windows in those walls (opening edges) and the centre of every wall
 *             that meets the edge, between consecutive stops; the nearer row to the building
 *   gap, step the first row's distance from the building's outside face and the distance between rows (mm; 900 and 600)
 *   existing  the dimensions already saved in this view: a spec with the same two references is not made twice
 *
 * What it does not do, and says so in `notes`: curved walls and walls not square to the plan's axes are left out of the edges (the overall still spans them);
 * the inside of the building (room by room) is not dimensioned; grid lines are not walls, so a dimension between grids needs a record of its own
 * (not built). A level with no exterior walls gets no specs.
 */
import { referencePoint } from './wall-dimensions.js';

const REF = 'exterior';
const key = (r) => r.wall + '|' + r.reference + '|' + Math.round(r.station * 1e4);
const same = (a, b) => (key(a.refs[0]) === key(b.refs[0]) && key(a.refs[1]) === key(b.refs[1])) || (key(a.refs[0]) === key(b.refs[1]) && key(a.refs[1]) === key(b.refs[0]));

export function planAutoDimensions({ walls = [], openingRows = [], level, view, existing = [], overall = true, chains = true, openings: withOpenings = true, gap = 900, step = 600, tol = null } = {}) {
  const notes = [], specs = [];
  const W = walls.filter((w) => w.storey === level && Array.isArray(w.a) && Array.isArray(w.b) && Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) > 1);
  const straight = W.filter((w) => !(Math.abs(w.bulge || 0) > 1e-9));
  if (W.length > straight.length) notes.push({ code: 'autodim.curved', text: (W.length - straight.length) + ' curved wall(s) are left out of the rows (they are not square to the plan).' });
  if (!straight.length) return { specs, notes: [...notes, { code: 'autodim.none', text: 'This level has no straight walls to dimension.' }], counts: { overall: 0, chain: 0, skipped: 0 } };
  const pt = (wall, reference, station) => referencePoint({ wall: wall.guid, reference, station }, [wall]);
  // the outside of the plan: every wall's two outside-face ends
  const ends = [];
  for (const w of straight) for (const s of [0, 1]) { const p = pt(w, REF, s); if (p) ends.push({ w, s, p }); }
  if (!ends.length) return { specs, notes: [...notes, { code: 'autodim.noref', text: 'The walls have no outside face to measure from.' }], counts: { overall: 0, chain: 0, skipped: 0 } };
  const minX = Math.min(...ends.map((e) => e.p[0])), maxX = Math.max(...ends.map((e) => e.p[0]));
  const minY = Math.min(...ends.map((e) => e.p[1])), maxY = Math.max(...ends.map((e) => e.p[1]));
  const T = tol ?? Math.max(150, ...straight.map((w) => w.t || 0)) * 1.2;
  const offFor = (a, b, target) => {   // wall-dimensions.js: n = (-dy, dx) / length of the measured segment a→b; the line sits at a + n * offset
    const v = Math.hypot(b[0] - a[0], b[1] - a[1]), n = [-(b[1] - a[1]) / v, (b[0] - a[0]) / v];
    return Math.round(((target[0] - a[0]) * n[0] + (target[1] - a[1]) * n[1]) * 10) / 10;
  };
  const ref = (w, reference, station) => ({ wall: w.guid, reference, station: Math.round(station * 1e6) / 1e6 });
  const add = (kind, side, r0, r1, axis, a, end, target) => {
    const b = axis === 'x' ? [end[0], a[1]] : [a[0], end[1]];
    if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 20) return false;
    const spec = { kind, side, refs: [r0, r1], axis, offset: offFor(a, b, target), view, level };
    if (existing.some((d) => same(d, spec) && d.axis === axis) || specs.some((d) => same(d, spec) && d.axis === axis)) return 'dup';
    specs.push(spec);
    return true;
  };
  let skipped = 0;
  // overall: the two ends that are farthest apart, each way
  if (overall) {
    const pick = (cmp) => ends.reduce((m, e) => (cmp(e, m) ? e : m));
    const west = pick((e, m) => e.p[0] < m.p[0] - 1e-6), east = pick((e, m) => e.p[0] > m.p[0] + 1e-6);
    const south = pick((e, m) => e.p[1] < m.p[1] - 1e-6), north = pick((e, m) => e.p[1] > m.p[1] + 1e-6);
    const rows = chains ? 2 : 1;   // the overall is the outer row when there are chains
    const rx = add('overall', 'south', ref(west.w, REF, west.s), ref(east.w, REF, east.s), 'x', west.p, east.p, [0, minY - gap - (rows - 1) * step]);
    const ry = add('overall', 'west', ref(south.w, REF, south.s), ref(north.w, REF, north.s), 'y', south.p, north.p, [minX - gap - (rows - 1) * step, 0]);
    if (rx === 'dup' || ry === 'dup') skipped++;
  }
  // chains along the four outside edges
  if (chains) {
    const opensOf = new Map();
    for (const o of openingRows) { if (o.storey !== undefined && o.storey !== level) continue; (opensOf.get(o.wallGuid) || opensOf.set(o.wallGuid, []).get(o.wallGuid)).push(o); }
    const sides = [
      { name: 'south', axis: 'x', coord: 1, edge: minY, outward: -1 },
      { name: 'north', axis: 'x', coord: 1, edge: maxY, outward: 1 },
      { name: 'west', axis: 'y', coord: 0, edge: minX, outward: -1 },
      { name: 'east', axis: 'y', coord: 0, edge: maxX, outward: 1 },
    ];
    for (const sd of sides) {
      const along = sd.axis === 'x' ? 0 : 1, cross = sd.coord;
      const onEdge = (w) => { const pa = pt(w, REF, 0), pb = pt(w, REF, 1); return pa && pb && Math.abs(pa[cross] - sd.edge) <= T && Math.abs(pb[cross] - sd.edge) <= T && Math.abs(pa[cross] - pb[cross]) <= T / 2 && Math.abs(pa[along] - pb[along]) > 50; };
      const edgeWalls = straight.filter(onEdge);
      if (!edgeWalls.length) continue;
      const stops = [];   // { r (ref), p (point), prio }
      const push = (w, reference, station, prio) => { const p = pt(w, reference, station); if (p) stops.push({ r: ref(w, reference, station), p, prio }); };
      for (const w of edgeWalls) {
        push(w, REF, 0, 0); push(w, REF, 1, 0);
        if (withOpenings) for (const o of opensOf.get(w.guid) || []) { const L = w.len || Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]); if (L > 0) { push(w, REF, o.offset / L, 1); push(w, REF, (o.offset + o.width) / L, 1); } }
      }
      // walls that meet this edge: their centre line
      for (const w of straight) {
        if (edgeWalls.includes(w)) continue;
        for (const s of [0, 1]) { const q = pt(w, 'center', s); if (q && Math.abs(q[cross] - sd.edge) <= T && Math.abs(pt(w, 'center', 1 - s)[cross] - sd.edge) > 2 * T) push(w, 'center', s, 2); }
      }
      stops.sort((x, y) => x.p[along] - y.p[along] || x.prio - y.prio);
      const keep = [];
      for (const s of stops) { if (keep.length && Math.abs(s.p[along] - keep[keep.length - 1].p[along]) < 2) continue; keep.push(s); }
      const target = sd.axis === 'x' ? [0, sd.edge + sd.outward * gap] : [sd.edge + sd.outward * gap, 0];
      for (let i = 0; i + 1 < keep.length; i++) { const r = add('chain', sd.name, keep[i].r, keep[i + 1].r, sd.axis, keep[i].p, keep[i + 1].p, target); if (r === 'dup') skipped++; }
    }
    if (!specs.some((s) => s.kind === 'chain')) notes.push({ code: 'autodim.nochain', text: 'No outside wall square to the plan\'s axes was found, so there are no rows of dimensions.' });
  }
  if (withOpenings && chains && !openingRows.length) notes.push({ code: 'autodim.noopenings', text: 'There are no doors or windows on this level to dimension.' });
  notes.push({ code: 'autodim.inside', text: 'Only the outside of the building is dimensioned. Rooms are dimensioned by hand or from the room tools.' });
  notes.push({ code: 'autodim.grids', text: 'Grid lines are not walls, so dimensions between grids are not made here.' });
  return { specs, notes, counts: { overall: specs.filter((s) => s.kind === 'overall').length, chain: specs.filter((s) => s.kind === 'chain').length, skipped } };
}
