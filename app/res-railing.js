/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-railing.js — railings and balusters (0.5 part 4, RC.3): along a stair's open sides (res-stair.js) and along a path
 * drawn on a level — a deck, a balcony, the edge of an opening in a floor. No DOM: bin/test-bimcraft.mjs --res.
 *
 *   railingParts(path3, { height, baluster, gap, post, rail }) → { rails: [[a, b]…], posts: [p…], balusters: [p…], length }
 *        path3 = the walking surface under the rail, [[x, y, z]…] in plan mm; the top rail runs `height` above it; posts at
 *        the ends and corners; balusters between, no gap wider than `gap` (the 4" sphere rule — a labelled default)
 *   writeRailingBody(w, frame, parts, opts) → representation items (rails swept along their 3D segment, posts and
 *        balusters as square prisms), for an IfcRailing
 *   readRailings(w) · placeRailing({ level, points, height, base, kind }) → op · changeRailing(guid, ch) → op ·
 *   removeRailings([guid]) → op
 *
 * A drawn railing is IfcRailing (IFC4 .GUARDRAIL. or .HANDRAIL.) contained in its level, CadCraft_Railing (Level, Points,
 * Height, Base, Kind), Qto: CadCraft_RailingQuantities (Length, Balusters, Posts). Defaults (labelled, not engineering):
 * guards 36" high (42" is common where a drop is higher or the code asks for it), handrails 36" over the stair nosings,
 * balusters 1½" square with gaps under 4", posts 3½" square, a 2" × 2" top rail.
 */
import { ModelWriter, round } from './model-write.js';
import { readLevels } from './model-levels.js';
import { ids, val } from './ifc-util.js';
import { t as tr } from './i18n.js';

const IN = 25.4;
export const RAIL_PSET = 'CadCraft_Railing';
export const RAIL_DEFAULTS = { height: 36 * IN, baluster: 1.5 * IN, gap: 4 * IN - 0.5, post: 3.5 * IN, rail: 2 * IN };

export function railingParts(path3, o = {}) {
  const { height, baluster, gap, post, rail } = { ...RAIL_DEFAULTS, ...o };
  const rails = [], posts = [], balusters = [];
  let length = 0;
  const pts = path3.filter((p, i) => i === 0 || Math.hypot(p[0] - path3[i - 1][0], p[1] - path3[i - 1][1]) > 1);
  if (pts.length < 2) return { rails, posts, balusters, length, height, baluster, post, rail };
  for (let i = 0; i < pts.length; i++) posts.push(pts[i]);
  for (let i = 0; i + 1 < pts.length; i++) {
    const a = pts[i], b = pts[i + 1], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    length += Math.hypot(L, b[2] - a[2]);
    rails.push([[a[0], a[1], a[2] + height], [b[0], b[1], b[2] + height]]);
    // balusters between the posts: the clear span (post faces) split so no gap is wider than `gap`
    const clear = L - post, n = Math.max(0, Math.ceil((clear - gap) / (gap + baluster)));
    for (let k = 1; k <= n; k++) {
      const s = post / 2 + (clear - n * baluster) / (n + 1) * k + baluster * (k - 0.5);
      const t = s / L;
      balusters.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]);
    }
  }
  return { rails, posts, balusters, length, height, baluster, post, rail };
}

/** Representation items of a railing: P maps plan mm (x, y, z) into the element's storey axes (the writer's frame). */
export function railingItems(w, parts, P = (x, y, z) => [x, y, z]) {
  const items = [];
  const sq = (s) => [[-s / 2, -s / 2], [s / 2, -s / 2], [s / 2, s / 2], [-s / 2, s / 2]];
  const up = (p, s, h) => w.extrudeAt(w.profile(sq(s)), w.axisFrame(P(p[0], p[1], p[2]), [0, 0, 1], [1, 0, 0]), h);
  const railTop = parts.height;
  for (const p of parts.posts) items.push(up(p, parts.post, railTop + parts.rail / 2));
  for (const p of parts.balusters) items.push(up(p, parts.baluster, railTop - parts.rail / 2));
  for (const [a, b] of parts.rails) {
    // a square bar from a to b: a square standing across the rail (frame X across in plan, Y up, Z along in plan), swept
    // along the 3D segment (IfcExtrudedAreaSolid takes a direction that need not be square to the profile)
    const A = P(...a), B = P(...b), d = [B[0] - A[0], B[1] - A[1], B[2] - A[2]], L = Math.hypot(...d);
    if (L < 1) continue;
    const hz = Math.hypot(d[0], d[1]) || 1, x = [d[0] / hz, d[1] / hz, 0], z = [-x[1], x[0], 0];
    const frame = w.axisFrame([A[0] - z[0] * parts.rail / 2, A[1] - z[1] * parts.rail / 2, A[2] - parts.rail / 2], x, z);
    const dl = [d[0] / L, d[1] / L, d[2] / L];
    const ex = [dl[0] * z[0] + dl[1] * z[1], dl[2], dl[0] * x[0] + dl[1] * x[1]];   // the direction in the frame's axes
    items.push(w.extrudeAt(w.profile([[0, 0], [parts.rail, 0], [parts.rail, parts.rail], [0, parts.rail]]), frame, L, ex));
  }
  return items;
}

// ---------------------------------------------------------------------------------------------------- drawn railings
function area2(p) { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; }
export function readRailings(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCRAILING'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, RAIL_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false);
    const points = String(ps.Points || '').split(';').map((q) => q.split(',').map(Number)).filter((q) => q.length === 2 && q.every(Number.isFinite)).map(([x, y]) => [x * w.unitMm, y * w.unitMm]);
    out.push({ id, guid: val(l.GlobalId), storey: so.get(id) ?? null, level: ps.Level || '', points, height: Number(ps.Height) * w.unitMm, base: Number(ps.Base || 0) * w.unitMm, kind: ps.Kind === 'handrail' ? 'handrail' : 'guard' });
  }
  return out;
}
function writeRailing(w, r) {
  const parts = railingParts(r.points.map(([x, y]) => [x, y, r.base]), { height: r.height });
  const items = railingItems(w, parts);
  const sty = w.surfaceStyle(tr('res.style.rail'), [0.95, 0.95, 0.93], 0);
  for (const it of items) w.styleItem(it, sty);
  w.setShape(r.id, [w.rep('body', 'Body', 'SweptSolid', items)]);
  w.upsertPset(r.id, RAIL_PSET, [['Points', 'IFCTEXT', r.points.map((p) => round(w.u(p[0]), 3) + ',' + round(w.u(p[1]), 3)).join(';')], ['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(r.height))], ['Base', 'IFCLENGTHMEASURE', round(w.u(r.base))], ['Kind', 'IFCLABEL', r.kind]]);
  w.upsertPset(r.id, 'CadCraft_RailingQuantities', [['Length', 'IFCLENGTHMEASURE', round(w.u(parts.length))], ['Balusters', 'IFCINTEGER', parts.balusters.length], ['Posts', 'IFCINTEGER', parts.posts.length]]);
  return parts;
}
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key) => { throw Object.assign(new Error(key), { key }); };
export function placeRailing(spec) {
  const s = { height: RAIL_DEFAULTS.height, base: 0, kind: 'guard', ...spec, points: spec.points.map((p) => [p[0], p[1]]) };
  return op((w) => {
    if (s.points.length < 2) fail('res.err.rail');
    if (!(s.height >= 300)) fail('model.err.length');
    if (!s.guid) s.guid = val(w.guid());
    const storey = w.byGuid(s.level);
    if (!storey) fail('model.err.nolevel');
    const st = w.api.GetLine(w.mid, storey, false);
    const nm = w.L(tr(s.kind === 'handrail' ? 'res.rail.handrail' : 'res.rail.guard'));
    const id = w.make('IFCRAILING', s.guid, w.ownerHistory(), nm, null, nm, w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(w.v4 ? [s.kind === 'handrail' ? 'HANDRAIL' : 'GUARDRAIL'] : ['NOTDEFINED']));
    w.noteGuid(s.guid, id);
    w.contain(id, storey);
    w.upsertPset(id, RAIL_PSET, [['Level', 'IFCIDENTIFIER', s.level]]);
    writeRailing(w, { id, ...s });
    return { id, ids: [id], made: new Map([[s.guid, id]]) };
  });
}
export function changeRailing(guid, ch) {
  return op((w) => {
    const r = readRailings(w).find((x) => x.guid === guid);
    if (!r) fail('model.err.gone');
    const nx = { ...r };
    if (ch.height >= 300) nx.height = ch.height; else if (ch.height !== undefined) fail('model.err.length');
    if (Number.isFinite(ch.base)) nx.base = ch.base;
    if (Array.isArray(ch.points) && ch.points.length >= 2) nx.points = ch.points;
    if (ch.kind === 'guard' || ch.kind === 'handrail') { nx.kind = ch.kind; if (w.v4) { const l = w.touch(r.id); l.PredefinedType = ch.kind === 'handrail' ? 'HANDRAIL' : 'GUARDRAIL'; l.Name = w.L(tr(ch.kind === 'handrail' ? 'res.rail.handrail' : 'res.rail.guard')); w.write(l); } }
    writeRailing(w, nx);
    return { id: r.id, ids: [r.id] };
  });
}
/** Move a railing by (dx, dy) inside a running writer (model-modify.js). */
export function moveRailingIn(w, guid, dx, dy) {
  const r = readRailings(w).find((x) => x.guid === guid);
  if (!r) fail('model.err.gone');
  writeRailing(w, { ...r, points: r.points.map(([x, y]) => [x + dx, y + dy]) });
  return r.id;
}
export function removeRailings(guids) {
  return op((w) => {
    const list = readRailings(w).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.map((x) => x.id));
    return { id: null, ids: [] };
  });
}
export { area2, readLevels };
