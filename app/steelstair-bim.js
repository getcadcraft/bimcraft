/* SPDX-License-Identifier: Apache-2.0 */
/**
 * steelstair-bim.js — BimCraft's stair element for the steel stair generator (0.11 SU.1814c, su-finish-11 lane fence-stair). The generator is lib/steelstair
 * (copied byte for byte to ./steelstair/ by `node tools/steelstair/sync.mjs bimcraft`; nobody edits the copy); DetailCraft makes the shop drawings from the
 * same record. DOM-free: tools/steelstair-test/bim-test.mjs runs it on the real small house through the real engine.
 *
 *   steelRecord({ start, angle, width, height, rule, treadType, rails }) → the lib record (mm, degrees) for a stair whose bottom nosing line starts at `start`
 *   steelLayout(rec) → lib build() with BimCraft's section table (shapes/sections.js: AISC, EN, UK; plates PL<t>x<w> parametric)
 *   steelPreview(spec) → { n, riser, going, run, outline: [[x, y] ×4], problems } for the plan overlay
 *   placeSteelStair(spec) → op for IfcEditor.modelChange: ONE IfcStair (STRAIGHT_RUN_STAIR) on the level whose body holds every part of the generator
 *        (stringers, treads, nosings, landing frames and covers, posts, base plates, rails, balusters) as its section extruded from the part's start to
 *        its end; Pset_StairCommon (risers, treads, riser height, tread length); CadCraft_SteelStair (the record, the rule set, how each cited value was
 *        checked, flights, landings, parts, steel mass from the section table, problems). One undo step.
 *   readSteelStairs(w) → [{ id, guid, rec, rule, risers, mass }]
 *
 * What it is not: the stringers are drawn square-ended from the generator's start to end (the level and plumb end cuts and the bolt holes are in DetailCraft's
 * shop drawings, not in this body); nothing is checked for strength; a rule value marked unverified in lib/steelstair RULES stays unverified here (the
 * property `Unverified` lists them, so a schedule can show them).
 */
import * as SS from './steelstair/steelstair.js';
import { findSection, outline, bbox, exactArea, STEEL_DENSITY } from './shapes/sections.js';
import { ModelWriter, round } from './model-write.js';
import { ids, val } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { cross3 as cross, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const STEEL_PSET = 'CadCraft_SteelStair';
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key, fill = {}) => { throw Object.assign(new Error(key), { key, fill }); };
const PL_RE = /^PL\s*(\d+(?:\.\d+)?)\s*[xX*]\s*(\d+(?:\.\d+)?)$/;
const cache = new Map();

/** A section by name: { kind, loops, width, depth, mass (kg/m) } or null. Plates PL<t>x<w> lie flat (width = w across, depth = t), as DetailCraft's do. */
export function profileOf(name) {
  if (typeof name !== 'string') return null;
  const key = name.trim().toUpperCase();
  if (cache.has(key)) return cache.get(key);
  let p = null;
  const m = name.trim().match(PL_RE);
  if (m) {
    const t = Number(m[1]), b = Number(m[2]);
    if (t > 0 && b > 0 && t <= 500 && b <= 5000) p = { name: 'PL' + t + 'x' + b, kind: 'PL', t, b, loops: outline({ kind: 'PL', t, b }), width: b, depth: t, mass: (t * b) * 1e-6 * STEEL_DENSITY };
  } else {
    const s = findSection(name);
    if (s) { const loops = outline(s), bb = bbox(loops[0]); p = { ...s, loops, width: bb.w, depth: bb.h, mass: s.massPub ?? exactArea(s) * 1e-6 * (s.density || STEEL_DENSITY) }; }
  }
  cache.set(key, p);
  return p;
}

/** The record for a stair drawn in plan: `start` = the middle of the bottom nosing line (plan mm), `angle` the way up (degrees), `height` floor to floor. */
export function steelRecord({ start = [0, 0], angle = 0, width, height, rule, treadType, rails } = {}) {
  const d = SS.defaults(SS.RULES[rule] ? rule : SS.DEFAULT_RULE);
  // the lib's x, y is the middle of the stair's start line (the floor at the first riser); width across, dir = the way up
  return SS.clean({ ...d, x: start[0], y: start[1], z: 0, dir: angle, ...(width > 0 ? { width } : {}), ...(height > 0 ? { rise: height } : {}),
    ...(SS.TREAD_TYPES.includes(treadType) ? { treadType } : {}), ...(['both', 'left', 'right', 'none'].includes(rails) ? { rails } : {}) });
}

export const steelLayout = (rec) => SS.build(rec, { profileOf });

export function steelPreview(spec) {
  const rec = steelRecord(spec);
  if (!rec) return { error: 'steel.err.size' };
  const L = SS.solve(rec), c = Math.cos(rec.dir * Math.PI / 180), s = Math.sin(rec.dir * Math.PI / 180), hw = rec.width / 2;
  const run = L.flights.reduce((a, f) => a + (f.risers - 1) * L.going, 0) + Math.max(0, L.flights.length - 1) * L.landingDepth;
  const P = (along, across) => [rec.x + c * along - s * across, rec.y + s * along + c * across];
  return { n: L.n, riser: L.riser, going: L.going, run, flights: L.flights.length, outline: [P(0, hw), P(run, hw), P(run, -hw), P(0, -hw)], problems: L.problems };
}

// a part's frame, DetailCraft's convention (detailcraft/dev/geom.js frame): x along the part; v = Z made square to x (vertical parts: v = X); u = v × x; rotation turns (u, v) about x
const unit = (a) => { const l = Math.hypot(a[0], a[1], a[2]); return l > 0 ? [a[0] / l, a[1] / l, a[2] / l] : [0, 0, 0]; };
export function partFrame(s, e, rotation = 0) {
  const d = sub(e, s), len = Math.hypot(d[0], d[1], d[2]);
  const x = len > 0 ? [d[0] / len, d[1] / len, d[2] / len] : [1, 0, 0];
  let v = Math.abs(x[2]) > 0.999999 ? [1, 0, 0] : unit([-x[0] * x[2], -x[1] * x[2], 1 - x[2] * x[2]]);
  let u = cross(v, x);
  if (rotation) {
    const a = rotation * Math.PI / 180, c = Math.cos(a), sn = Math.sin(a);
    const u2 = [u[0] * c + v[0] * sn, u[1] * c + v[1] * sn, u[2] * c + v[2] * sn], v2 = [-u[0] * sn + v[0] * c, -u[1] * sn + v[1] * c, -u[2] * sn + v[2] * c];
    u = u2; v = v2;
  }
  return { x, u, v, len };
}

/** Body items for every part (an IfcExtrudedAreaSolid each). Parts whose section is unknown are left out and counted. */
export function stairItems(w, layout) {
  const items = [];
  let skipped = 0;
  for (const p of layout.parts) {
    const sp = profileOf(p.profileName), f = partFrame(p.start, p.end, p.rotation || 0);
    if (!sp || !(f.len > 0.5) || !sp.loops?.[0]?.length) { skipped++; continue; }
    const voff = p.position === 'top' ? -sp.depth / 2 : p.position === 'bottom' ? sp.depth / 2 : 0;
    const [outer, ...holes] = sp.loops.map((loop) => loop.map(([a, b]) => [a, b + voff]));
    const prof = holes.length ? w.profileVoids(outer, holes) : w.profile(outer);
    items.push(w.extrudeAt(prof, w.axisFrame(p.start, f.x, f.u), f.len));
  }
  return { items, skipped };
}

/** The rule values the person should know were not read in the regulation's own text. */
export const unverifiedOf = (ruleId) => SS.rule(ruleId).cite.filter((c) => c.checked !== 'primary').map((c) => c.ref + ' (' + c.checked + ')');

export function placeSteelStair(spec) {
  return op((w) => {
    const rec = steelRecord(spec);
    if (!rec) fail('steel.err.size');
    const storey = w.byGuid(spec.level);
    if (!storey) fail('model.err.nolevel');
    const L = steelLayout(rec);
    const { items, skipped } = stairItems(w, L);
    if (!items.length) fail('steel.err.empty');
    const st = w.api.GetLine(w.mid, storey, false), guid = spec.guid || val(w.guid()), nm = w.L(tr('steel.name'));
    const id = w.make('IFCSTAIR', guid, w.ownerHistory(), nm, null, w.L('Steel stair'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(w.v4 ? ['STRAIGHT_RUN_STAIR'] : ['NOTDEFINED']));   // i18n-ignore: IFC file data
    w.noteGuid(guid, id);
    w.contain(id, storey);
    const sty = w.surfaceStyle(tr('steel.style'), [0.36, 0.38, 0.41], 0);
    for (const it of items) w.styleItem(it, sty);
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', items)]);
    const cut = SS.cutList(L, { profileOf }), treads = L.flights.reduce((a, f) => a + f.treads, 0);
    w.upsertPset(id, 'Pset_StairCommon', [['NumberOfRiser', 'IFCCOUNTMEASURE', L.n], ['NumberOfTreads', 'IFCCOUNTMEASURE', treads], ['RiserHeight', 'IFCPOSITIVELENGTHMEASURE', round(w.u(L.riser))], ['TreadLength', 'IFCPOSITIVELENGTHMEASURE', round(w.u(L.going))]]);
    w.upsertPset(id, STEEL_PSET, [
      ['Record', 'IFCTEXT', JSON.stringify(rec)], ['Rule', 'IFCLABEL', SS.rule(rec.rule).name], ['Unverified', 'IFCTEXT', unverifiedOf(rec.rule).join('; ')],
      ['Flights', 'IFCINTEGER', L.flights.length], ['Landings', 'IFCINTEGER', L.landings.length], ['Parts', 'IFCINTEGER', L.parts.length], ['PartsNotDrawn', 'IFCINTEGER', skipped],
      ['SteelMass', 'IFCMASSMEASURE', Math.round(cut.totalKg * 10) / 10], ['Problems', 'IFCINTEGER', L.problems.length], ['TreadType', 'IFCLABEL', rec.treadType], ['Stringer', 'IFCLABEL', rec.stringer],
    ]);
    return { id, ids: [id], made: new Map([[guid, id]]), layout: L, mass: cut.totalKg, skipped };
  });
}

export function readSteelStairs(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCSTAIR'); } catch { return out; }
  for (const id of list) {
    const ps = w.readPset(id, STEEL_PSET);
    if (!ps || !ps.Record) continue;
    let rec = null; try { rec = SS.clean(JSON.parse(ps.Record)); } catch { continue; }
    if (!rec) continue;
    out.push({ id, guid: val(w.api.GetLine(w.mid, id, false).GlobalId), rec, rule: ps.Rule || '', unverified: ps.Unverified || '', mass: Number(ps.SteelMass) || 0, parts: Number(ps.Parts) || 0 });
  }
  return out;
}
