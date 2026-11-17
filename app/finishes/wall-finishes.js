/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-finishes.js: finishes on the faces of raw walls in BimCraft (0.10 BK.25, BK.26, BK.27, BK.28, BK.130; session bim-finishes-10). No DOM:
 * lib/finishes/test/adapter.test.mjs runs it in Node. A thin adapter over lib/finishes (dev/finishes/lib/, byte copies: node lib/finishes/sync.mjs bimcraft).
 * The rules (faces, zones, build-ups, tile set-out, quantities, the covering description) are the library's; this file reads the model into its plain rows
 * and writes the answer back. It uses the wall solver's own outlines (model-walls.js wallOutlines, which is lib/walls) to find where a face really starts and
 * ends at a corner, and never copies a wall rule.
 *
 * The wall stays a raw core. What goes on its faces:
 *   the document   IfcProject property set CadCraft_WallFinishes: Format 'cadcraft-wall-finishes 1', Finishes (IfcText: the document as JSON; walls named by
 *                  GlobalId). It is the single place the finishes live; it is in face coordinates (s along the wall from its start, v above its base), so a
 *                  wall that moves, is turned, joined to another wall or swapped to another type keeps its finishes without anything being rewritten.
 *   the elements   one IfcCovering (CLADDING) per zone, made from the document by syncWallFinishCoverings(w): each related to its wall by
 *                  IfcRelCoversBldgElements, with a Body of one extruded rectangle for each piece the finish covers (openings and zones laid over it left out),
 *                  property set CadCraft_WallFinish (Type, Zone, Face, Kind, Wall, Layers, Signature), Pset_CoveringCommon.Reference, Qto_CoveringBaseQuantities
 *                  (Width = the build-up, GrossArea, NetArea). The elements are DERIVED: a program that only reads the IFC sees the finishes; BimCraft remakes
 *                  them from the document whenever it changes and (the host's one line, see the log) whenever a wall changes.
 *
 *   readWallFinishes(w) → document (empty when the file has none)
 *   wallFinishOp(change, { sync = true }) → op (one undo step). `change(doc, w)` returns the new document (the lib's withZone etc.); a wrong one throws
 *       with `.key`. Returns { id, ids, finishes: doc, coverings: { made, kept, dropped } }
 *   saveWallFinishesOp(input) → op: the whole document at once (the same checks)
 *   syncWallFinishCoverings(w, doc?) → { made, kept, dropped, forgotten }: remakes the IfcCoverings from the document. For a host hook that runs after a wall
 *       change (model-ops.js op()); it also forgets the faces of walls that are gone.
 *   wallRows(w, { storeyRooms? }) → { walls: [lib wall row], curved: [guid], rooms: Map<key, { number, name, storey }> }
 *   wallFaceInfo(w, guid, face) → { wall, extent, geom: { len, extent, height }, openings, room } for the tools (the zone previews)
 *   finishRows(w, doc?) → lib surfaces(): { rows, orphans }
 *   finishSchedules(doc, w, { fmtLen, fmtArea, fmtVol, t, unit }) → { wallfinishes (by wall, face and zone), wallfinishtotals (by finish), wallfinishrooms (by room) }
 *       each a table in the shape the Schedules panel reads (title, head, cols, rows, vals, ids, total, note)
 */
import { ids as idsOf, val } from '../ifc-util.js';
import { ModelWriter } from '../model-write.js';
import { op } from '../model-ops.js';
import { readWalls, wallOutlines } from '../model-walls.js';
import { readOpenings } from '../model-openings.js';
import { readLevels } from '../model-levels.js';
import { readDerived, storeyLoops } from '../model-slabs.js';
import { loopAt } from '../model-rooms.js';
import { cleanDoc, emptyDoc, FORMAT } from './lib/model.js';
import { faceFrame, extent as faceExtent, planPoint } from './lib/face.js';
import { surfaces, byFinish, byRoom } from './lib/schedule.js';
import { coveringSpec } from './lib/covering.js';

export const FINISH_PSET = 'CadCraft_WallFinishes';
export const COVERING_PSET = 'CadCraft_WallFinish';
export const COVERING_FORMAT = FORMAT + ' 1';
const projectOf = (w) => { try { return idsOf(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
const safe = (w, cls) => { try { return idsOf(w.api, w.mid, cls); } catch (e) { return []; } };
const round = (v, d = 6) => { const r = Math.round(v * 10 ** d) / 10 ** d; return Object.is(r, -0) ? 0 : r; };

export function readWallFinishes(w) {
  const p = w ? projectOf(w) : null;
  if (!p) return emptyDoc();
  let ps = null;
  try { ps = w.readPset(p, FINISH_PSET); } catch (e) { ps = null; }
  if (!ps || typeof ps.Finishes !== 'string') return emptyDoc();
  try { return cleanDoc(JSON.parse(ps.Finishes)).doc; } catch (e) { return emptyDoc(); }
}
function writeDoc(w, doc) {
  const p = projectOf(w);
  if (!p) throw Object.assign(new Error('no project'), { key: 'sched.err.noproject' });   // i18n-ignore: the person reads the key's sentence
  w.upsertPset(p, FINISH_PSET, [['Finishes', 'IFCTEXT', JSON.stringify(doc)], ['Format', 'IFCLABEL', COVERING_FORMAT]]);
  return p;
}

// ------------------------------------------------------------------------------------------------ the walls as the library reads them
export function wallRows(w, { walls = readWalls(w), openings = null, levels = readLevels(w), derived = null } = {}) {
  const out = [], curved = [], rooms = new Map();
  const ops = openings || readOpenings(w, null, walls);
  const D = derived || readDerived(w);
  const byStorey = new Map();
  for (const x of walls) { if (!byStorey.has(x.storey)) byStorey.set(x.storey, []); byStorey.get(x.storey).push(x); }
  for (const [storey, list] of byStorey) {
    const straight = list.filter((x) => !x.bulge);
    for (const x of list) if (x.bulge) curved.push(x.guid);
    // the walls' own corners: the same outlines the plan and the rooms use (lib/walls joins, mitres, butts, T joints)
    const polys = wallOutlines(list.map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge, off: x.joinOff })));
    let L = null;
    try { L = storeyLoops(w, storey); } catch (e) { L = null; }
    const spaces = D.spaces.filter((s) => s.storey === storey);
    const spaceOf = (p) => {
      if (!L) return null;
      const loop = loopAt(L.rooms, p);
      if (!loop) return null;
      return spaces.find((s) => loopAt(L.rooms, s.seed) === loop) || null;
    };
    const level = levels.find((l) => l.id === storey);
    for (const x of straight) {
      const poly = polys.get(x.guid) || null;
      const wall = { guid: x.guid, a: x.a, b: x.b, t: x.t };
      const len = Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1]);
      const row = { guid: x.guid, id: x.id, name: x.assembly?.name || x.typeName || '', level: level?.name || null, storey, a: x.a, b: x.b, t: x.t, len, height: x.height, baseZ: x.baseOffset ?? 0,
        extent: { left: faceExtent(wall, 'left', poly), right: faceExtent(wall, 'right', poly) },
        openings: ops.filter((o) => o.wall === x.id).map((o) => ({ id: o.guid, kind: o.kind, offset: o.offset, width: o.width, sill: Math.max(0, (o.sill || 0) - (x.baseOffset || 0)), height: o.height })),
        room: { left: null, right: null } };
      for (const face of ['left', 'right']) {
        const f = faceFrame(wall, face), [s0, s1] = row.extent[face], p = planPoint(f, (s0 + s1) / 2);
        const q = [p[0] + f.normal[0] * 50, p[1] + f.normal[1] * 50], sp = spaceOf(q);
        if (sp) { row.room[face] = sp.guid; rooms.set(sp.guid, { number: sp.number, name: sp.name, storey }); }
      }
      out.push(row);
    }
  }
  return { walls: out, curved, rooms };
}
export function wallFaceInfo(w, guid, face, rows = wallRows(w)) {
  const wall = rows.walls.find((x) => x.guid === guid);
  if (!wall) return null;
  return { wall, extent: wall.extent[face], geom: { len: wall.len, extent: wall.extent[face], height: wall.height }, openings: wall.openings, room: wall.room[face] };
}
export function finishRows(w, doc = readWallFinishes(w), rows = wallRows(w), opts = {}) {
  return { ...surfaces(doc, rows.walls, opts), walls: rows.walls, rooms: rows.rooms, curved: rows.curved };
}

// ------------------------------------------------------------------------------------------------ the IfcCoverings, made from the document
const ownCoverings = (w) => {
  const out = new Map();
  for (const id of safe(w, 'IFCCOVERING')) {
    const ps = w.readPset(id, COVERING_PSET);
    if (!ps) continue;
    out.set(w.guidOf(id), { id, signature: String(ps.Signature || '') });
  }
  return out;
};
const signature = (spec) => {
  const s = JSON.stringify([spec.name, spec.thickness, spec.frame, spec.profiles, spec.baseZ, spec.layers, spec.room]);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h.toString(16) + '-' + s.length;
};
function makeCovering(w, spec, host, signatureText) {
  const st = w.api.GetLine(w.mid, host.storey, false);
  const lp = w.placeAt(st.ObjectPlacement.value, spec.frame.origin[0], spec.frame.origin[1], spec.baseZ, 0);
  const g = w.gid(spec.guid);
  const name = w.L(spec.name);
  const id = w.make('IFCCOVERING', g, w.ownerHistory(), name, null, name, w.H(lp), null, null, 'CLADDING');
  w.noteGuid(g, id);
  w.contain(id, host.storey);
  const frame = w.axisFrame([0, 0, 0], spec.frame.z, spec.frame.x);
  const solids = spec.profiles.map((pts) => w.extrudeAt(w.profile(pts), frame, spec.thickness));
  if (solids.length) w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', solids)]);
  const material = (spec.layers.find((l) => l.role === 'finish')?.material) || spec.name;
  w.associateMaterial(id, w.material(material));
  w.upsertPset(id, COVERING_PSET, [['Type', 'IFCIDENTIFIER', spec.props[0][2]], ['Zone', 'IFCIDENTIFIER', spec.props[1][2]], ['Face', 'IFCLABEL', spec.face], ['Kind', 'IFCLABEL', spec.props[3][2]],
    ['Wall', 'IFCIDENTIFIER', spec.wall], ['Layers', 'IFCTEXT', JSON.stringify(spec.layers)], ['Signature', 'IFCIDENTIFIER', signatureText]]);
  w.upsertPset(id, 'Pset_CoveringCommon', [['Reference', 'IFCIDENTIFIER', spec.name]]);
  w.upsertQto(id, 'Qto_CoveringBaseQuantities', [['Width', 'length', spec.thickness], ['GrossArea', 'area', spec.area], ['NetArea', 'area', spec.area]]);
  return id;
}

export function syncWallFinishCoverings(w, input = null) {
  const stored = readWallFinishes(w);
  const rows = wallRows(w);
  const keep = new Set(rows.walls.map((x) => x.guid));
  // faces of walls that are gone (deleted, or split into new ones) go; a curved wall keeps its record (it cannot be finished yet) but has no elements
  const known = new Set([...keep, ...rows.curved]);
  const f = (input || stored), pruned = { doc: f, dropped: 0 };
  const before = f.faces.length;
  pruned.doc = { ...f, faces: f.faces.filter((x) => known.has(x.wall)) };
  pruned.dropped = before - pruned.doc.faces.length;
  const doc = pruned.doc;
  if (pruned.dropped || input) writeDoc(w, doc);
  const S = surfaces(doc, rows.walls);
  const hostOf = new Map(rows.walls.map((x) => [x.guid, x]));
  const have = ownCoverings(w);
  const want = new Map();
  for (const r of S.rows) {
    if (r.lost || !(r.net > 0)) continue;
    const spec = coveringSpec(r, hostOf.get(r.wall), doc);
    if (!spec.profiles.length) continue;
    want.set(spec.guid, spec);
  }
  const drop = [], keepIds = [], made = [];
  for (const [g, h] of have) {
    const spec = want.get(g);
    if (!spec || h.signature !== signature(spec)) drop.push(h.id); else { keepIds.push(h.id); want.delete(g); }
  }
  if (drop.length) w.dropProduct(drop);
  const byWall = new Map();
  for (const [, spec] of want) {
    const host = hostOf.get(spec.wall);
    const id = makeCovering(w, spec, host, signature(spec));
    made.push(id);
    if (!byWall.has(spec.wall)) byWall.set(spec.wall, []);
    byWall.get(spec.wall).push(id);
  }
  for (const [guid, list] of byWall) {
    const wallId = hostOf.get(guid).id;
    w.make('IFCRELCOVERSBLDGELEMENTS', w.guid(), w.ownerHistory(), null, null, w.H(wallId), list.map((i) => w.H(i)));
  }
  return { made: made.length, kept: keepIds.length, dropped: drop.length, forgotten: pruned.dropped, ids: made };
}

/** One undo step: `change(doc, w)` gives the new document; it is kept and the coverings remade. */
export function wallFinishOp(change, { sync = true } = {}) {
  return op((w) => {
    const now = readWallFinishes(w);
    const next = change(now, w);
    const r = cleanDoc(next);
    if (r.errors.length) throw Object.assign(new Error('finishes: ' + r.errors[0].code), { key: 'finishes.err.' + r.errors[0].code, fill: { at: r.errors[0].at } });
    const p = writeDoc(w, r.doc);
    const cov = sync ? syncWallFinishCoverings(w, r.doc) : null;
    return { id: p, ids: [p, ...(cov?.ids || [])], made: new Map(), finishes: r.doc, coverings: cov };
  });
}
export const saveWallFinishesOp = (input) => wallFinishOp(() => input);

// ------------------------------------------------------------------------------------------------ the schedules
const col = (id, kind = 'text', role = null, sum = true) => ({ id, kind, ...(role ? { role } : {}), ...(sum ? {} : { sum: false }) });
const sum = (list, f) => list.reduce((s, x) => s + (f(x) || 0), 0);
export function finishSchedules(doc, w, { fmtLen = (v) => String(round(v, 1)), fmtArea = (v) => String(round(v / 1e6, 3)), fmtVol = (v) => String(round(v / 1e9, 4)), t = (k) => k, unit = '', rows = null } = {}) {
  const R = rows || finishRows(w, doc);
  const live = R.rows.filter((r) => !r.lost && r.net > 0);
  const H = (s) => (unit ? s + ' (' + unit + ')' : s);
  const roomName = (key) => { const r = R.rooms.get(key); return r ? (r.number ? r.number + ' ' : '') + (r.name || '') : t('wfin.noroom'); };
  const wallOf = new Map(R.walls.map((x) => [x.guid, x]));
  const TOTAL = t('model.sch.total');
  const tl = (x, k) => (x ? (x.estimated ? (k === 'whole' ? '' : '≈ ') : '') + String(x[k]) : '');
  const note = t('wfin.rule') + (live.some((r) => r.tiles?.estimated) ? ' ' + t('wfin.rule.estimated') : '');
  const idsOf2 = (list) => [...new Set(list.map((r) => wallOf.get(r.wall)?.id).filter((x) => x !== undefined))];
  const sumTiles = (list) => { const tt = list.map((r) => r.tiles).filter(Boolean); return tt.length ? { whole: sum(tt, (x) => x.whole), cut: sum(tt, (x) => x.cut), order: sum(tt, (x) => x.order), estimated: tt.some((x) => x.estimated) } : null; };

  const wallfinishes = {
    title: t('wfin.sch.zones'),
    head: [t('model.sch.wall'), t('model.room.longname'), t('wfin.h.face'), t('wfin.h.zone'), t('qty.sch.finish'), H(t('wfin.h.thickness')), t('model.sch.grossarea'), t('model.sch.deductions'), t('model.sch.netarea'), t('fin.h.whole'), t('fin.h.cut'), t('fin.h.order'), t('fin.h.substratevol')],
    cols: [col('wall'), col('room', 'text', 'room'), col('face'), col('zone'), col('finish', 'text', 'type'), col('thickness', 'length', null, false), col('gross', 'area'), col('deductions', 'area'), col('net', 'area'), col('whole', 'count'), col('cut', 'count'), col('order', 'count'), col('substratevolume', 'volume')],
    rows: live.map((r) => [wallOf.get(r.wall)?.name || '', roomName(r.room), t('wfin.face.' + r.face), r.name || r.zone, r.typeName, fmtLen(r.thickness), fmtArea(r.gross), fmtArea(r.deductions), fmtArea(r.net), r.tiles && !r.tiles.estimated ? String(r.tiles.whole) : '', r.tiles ? tl(r.tiles, 'cut') : '', r.tiles ? tl(r.tiles, 'order') : '', fmtVol(r.substrateVolume)]),
    vals: live.map((r) => [null, null, null, null, null, r.thickness, r.gross, r.deductions, r.net, r.tiles && !r.tiles.estimated ? r.tiles.whole : null, r.tiles ? r.tiles.cut : null, r.tiles ? r.tiles.order : null, r.substrateVolume]),
    ids: live.map((r) => idsOf2([r])),
    total: [TOTAL, '', '', '', '', '', fmtArea(sum(live, (r) => r.gross)), fmtArea(sum(live, (r) => r.deductions)), fmtArea(sum(live, (r) => r.net)), '', '', '', fmtVol(sum(live, (r) => r.substrateVolume))],
    note,
  };
  const F = byFinish(live);
  const wallfinishtotals = {
    title: t('wfin.sch.totals'),
    head: [t('qty.sch.finish'), t('wfin.h.kind'), t('model.sch.netarea'), t('fin.h.whole'), t('fin.h.cut'), t('fin.h.order'), t('wfin.h.layers'), t('wfin.h.volume')],
    cols: [col('finish', 'text', 'type'), col('kind'), col('net', 'area'), col('whole', 'count'), col('cut', 'count'), col('order', 'count'), col('layers'), col('volume', 'volume')],
    rows: F.map((x) => [x.name, t('wfin.kind.' + x.kind), fmtArea(x.net), x.tiles && !x.tiles.estimated ? String(x.tiles.whole) : '', x.tiles ? tl(x.tiles, 'cut') : '', x.tiles ? tl(x.tiles, 'order') : '', x.layers.map((l) => (l.material || t('wfin.role.' + l.role)) + ' ' + round(l.thickness, 2)).join(' + '), fmtVol(x.volume)]),
    vals: F.map((x) => [null, null, x.net, x.tiles && !x.tiles.estimated ? x.tiles.whole : null, x.tiles ? x.tiles.cut : null, x.tiles ? x.tiles.order : null, null, x.volume]),
    ids: F.map((x) => idsOf2(live.filter((r) => r.type === x.type))),
    total: [TOTAL, '', fmtArea(sum(F, (x) => x.net)), '', '', '', '', fmtVol(sum(F, (x) => x.volume))],
    note,
  };
  const RM = byRoom(live);
  const flat = RM.flatMap((x) => x.finishes.map((f, i) => ({ x, f, first: i === 0 })));
  const wallfinishrooms = {
    title: t('wfin.sch.rooms'),
    head: [t('model.room.longname'), t('qty.sch.finish'), t('model.sch.netarea'), t('fin.h.whole'), t('fin.h.cut'), t('fin.h.order'), t('wfin.h.volume')],
    cols: [col('room', 'text', 'room'), col('finish', 'text', 'type'), col('net', 'area'), col('whole', 'count'), col('cut', 'count'), col('order', 'count'), col('volume', 'volume')],
    rows: flat.map(({ x, f }) => [roomName(x.room), f.name, fmtArea(f.net), f.tiles && !f.tiles.estimated ? String(f.tiles.whole) : '', f.tiles ? tl(f.tiles, 'cut') : '', f.tiles ? tl(f.tiles, 'order') : '', fmtVol(f.volume)]),
    vals: flat.map(({ f }) => [null, null, f.net, f.tiles && !f.tiles.estimated ? f.tiles.whole : null, f.tiles ? f.tiles.cut : null, f.tiles ? f.tiles.order : null, f.volume]),
    ids: flat.map(({ x, f }) => idsOf2(live.filter((r) => r.room === x.room && r.type === f.type))),
    total: [TOTAL, '', fmtArea(sum(flat, ({ f }) => f.net)), '', '', '', fmtVol(sum(flat, ({ f }) => f.volume))],
    note,
  };
  return { wallfinishes, wallfinishtotals, wallfinishrooms };
}
export { val };
