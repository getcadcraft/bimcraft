/* SPDX-License-Identifier: Apache-2.0 */
/**
 * finishes-model.js — room finishes in BimCraft: kept in the IFC, measured from the rooms, shown as schedules (0.10 BK.29,
 * BK.39, BK.47; session bk-r3-schedules-10). No DOM: bin/test-bimcraft.mjs --schedules runs it in Node. A thin adapter over
 * quantities/finishes.js (the one finishes model, host-free): this file reads and writes the document, turns each room into the
 * stretches of wall on its side with their doors and windows, and words the four schedules.
 *
 * Stored on IfcProject as the property set CadCraft_Finishes: Format 'cadcraft-finishes 1', Finishes (IfcText: the document as
 * JSON; rooms and walls are named by GlobalId). Each room that has a finish also gets the standard property set
 * Pset_SpaceCoveringRequirements (FloorCovering, WallCovering, CeilingCovering, SkirtingBoard and their thicknesses / height),
 * so another program reads the names without knowing our format.
 *
 *   readFinishes(w) → document (empty when the file has none) · saveFinishesOp(doc) → op (one undo step; refuses a wrong document)
 *   roomInputs(snap, loopsFor) → [{ key (GlobalId), id, number, name, storey, height, floor, ceiling, edges }…]
 *       an edge is one side of the room's outline: { wall: GlobalId | null, wallId, length, openings: [{ id, offset, width, sill, height, door }] }
 *       (null wall: a room separator, or a face no straight wall was found for; it has no openings)
 *   finishData(doc, snap, loopsFor, measure) → { rooms, result: quantities/finishes.js roomFinishes }
 *   finishSchedules(doc, snap, loopsFor, { fmtLen, fmtArea, fmtVol, t, unit, measure }) → { roomfinishes, wallfinishes, zonefinishes, finishtotals }
 *       each a table of tables/table.js (head, cols, rows, vals, ids, cellIds, total, note, title)
 */
import { ids as idsOf } from './ifc-util.js';
import { ModelWriter } from './model-write.js';
import { loopAt } from './model-rooms.js';
import { wallType, typeName } from './model-walls.js';
import { cleanFinishes, emptyFinishes, roomFinishes, FINISH_FORMAT } from './quantities/finishes.js';

export const FINISH_PSET = 'CadCraft_Finishes';
export const COVERING_PSET = 'Pset_SpaceCoveringRequirements';
const projectOf = (w) => { try { return idsOf(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };

export function readFinishes(w) {
  const p = w ? projectOf(w) : null;
  if (!p) return emptyFinishes();
  let ps = null;
  try { ps = w.readPset(p, FINISH_PSET); } catch (e) { ps = null; }
  if (!ps || typeof ps.Finishes !== 'string') return emptyFinishes();
  try { return cleanFinishes(JSON.parse(ps.Finishes)).doc; } catch (e) { return emptyFinishes(); }
}
/** Keep the finishes in the file. A document with a wrong entry is refused (`e.key`, `e.fill`): nothing is dropped silently. */
export function saveFinishesOp(input) {
  const r = cleanFinishes(input);
  if (r.errors.length) throw Object.assign(new Error('finishes: ' + r.errors[0].code), { key: 'fin.err.' + r.errors[0].code, fill: { at: r.errors[0].at } });
  const doc = r.doc;
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const p = projectOf(w);
      if (!p) throw Object.assign(new Error('no project'), { key: 'sched.err.noproject' });   // i18n-ignore: the person reads the key's sentence
      w.upsertPset(p, FINISH_PSET, [['Finishes', 'IFCTEXT', JSON.stringify(doc)], ['Format', 'IFCLABEL', FINISH_FORMAT + ' 1']]);
      const name = (id) => doc.finishes.find((f) => f.id === id)?.name || '', th = (id) => doc.finishes.find((f) => f.id === id)?.thickness || 0;
      const touched = [p];
      for (const [guid, set] of Object.entries(doc.rooms)) {
        const sid = w.byGuid(guid);
        if (!sid) continue;
        const rows = [];
        if (set.floor) { rows.push(['FloorCovering', 'IFCLABEL', name(set.floor)]); if (th(set.floor) > 0) rows.push(['FloorCoveringThickness', 'IFCPOSITIVELENGTHMEASURE', Math.round(w.u(th(set.floor)) * 1e6) / 1e6]); }
        if (set.walls) { rows.push(['WallCovering', 'IFCLABEL', name(set.walls)]); if (th(set.walls) > 0) rows.push(['WallCoveringThickness', 'IFCPOSITIVELENGTHMEASURE', Math.round(w.u(th(set.walls)) * 1e6) / 1e6]); }
        if (set.ceiling) { rows.push(['CeilingCovering', 'IFCLABEL', name(set.ceiling)]); if (th(set.ceiling) > 0) rows.push(['CeilingCoveringThickness', 'IFCPOSITIVELENGTHMEASURE', Math.round(w.u(th(set.ceiling)) * 1e6) / 1e6]); }
        if (set.skirting) rows.push(['SkirtingBoard', 'IFCLABEL', set.skirting.name], ['SkirtingBoardHeight', 'IFCPOSITIVELENGTHMEASURE', Math.round(w.u(set.skirting.height) * 1e6) / 1e6]);
        if (rows.length) { w.upsertPset(sid, COVERING_PSET, rows); touched.push(sid); }
      }
      return { id: p, ids: touched, made: new Map(), finishes: doc };
    });
  };
}

// ---------------------------------------------------------------------------------------------- the rooms as the model has them
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
/** The straight wall whose face this side of a room lies on: parallel, half its thickness away, alongside it. */
function wallOfEdge(a, b, walls) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (!(L > 1)) return null;
  const d = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  let best = null;
  for (const w of walls) {
    if (w.bulge) continue;
    const wl = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    if (!(wl > 1)) continue;
    const u = [(w.b[0] - w.a[0]) / wl, (w.b[1] - w.a[1]) / wl];
    if (Math.abs(cross(d, u)) > 0.02) continue;
    const rel = sub(m, w.a), s = dot(rel, u), off = Math.abs(cross(rel, u));
    if (s < -w.t || s > wl + w.t) continue;
    const miss = Math.abs(off - w.t / 2);
    if (miss > Math.max(3, w.t * 0.05)) continue;
    if (!best || miss < best.miss) best = { w, u, miss };
  }
  if (!best) return null;
  const sa = dot(sub(a, best.w.a), best.u), sb = dot(sub(b, best.w.a), best.u);
  return { wall: best.w, sa, sb };
}
export function roomInputs(snap, loopsFor) {
  const out = [];
  for (const sp of snap.derived?.spaces || []) {
    const L = loopsFor(sp.storey);
    const loop = L && loopAt(L.rooms, sp.seed);
    if (!loop) continue;
    const level = snap.levels.find((l) => l.id === sp.storey);
    const here = (x) => x.storey === sp.storey && loopAt(L.rooms, x.seed) === loop;
    const ceil = (snap.derived?.ceilings || []).find((c) => c.mode !== 'building' && here(c)) || (snap.derived?.ceilings || []).find((c) => c.storey === sp.storey && c.mode === 'building');
    const height = ceil && ceil.height > 0 ? ceil.height : (level?.height || 0);
    const walls = (L.walls || snap.walls.filter((w) => w.storey === sp.storey));
    const edges = [];
    const ring = (poly) => {
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i], b = poly[(i + 1) % poly.length], len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (!(len > 1)) continue;
        const hit = wallOfEdge(a, b, walls);
        if (!hit) { edges.push({ wall: null, wallId: null, length: len, openings: [] }); continue; }
        const fwd = hit.sb >= hit.sa;
        const openings = snap.openings.filter((o) => o.wall === hit.wall.id).map((o) => ({ id: o.id, offset: fwd ? o.offset - hit.sa : hit.sa - (o.offset + o.width), width: o.width, sill: o.kind === 'door' ? 0 : Math.max(0, o.sill || 0), height: o.height, door: o.kind === 'door' }))
          .filter((o) => o.offset < len - 1e-6 && o.offset + o.width > 1e-6);
        const last = edges[edges.length - 1];
        // two pieces of one wall in a row (the outline is split where another wall meets its far face): one stretch
        if (last && last.wallId === hit.wall.id && last._fwd === fwd && Math.abs((fwd ? last._s1 : last._s0) - hit.sa) < 1) {
          for (const o of openings) if (!last.openings.some((x) => x.id === o.id)) last.openings.push({ ...o, offset: o.offset + last.length });
          last.length += len; if (fwd) last._s1 = hit.sb; else last._s0 = hit.sb;
          continue;
        }
        edges.push({ wall: hit.wall.guid, wallId: hit.wall.id, wallTypeKey: hit.wall.typeKey, length: len, height: hit.wall.height, openings, _fwd: fwd, _s0: Math.min(hit.sa, hit.sb), _s1: Math.max(hit.sa, hit.sb) });
      }
    };
    ring(loop.poly);
    for (const h of loop.holes || []) ring(h);   // a free-standing wall or column inside the room has faces to finish too
    out.push({ key: sp.guid, id: sp.id, number: sp.number, name: sp.name, storey: sp.storey, height, hasCeiling: !!ceil, ceilingId: ceil ? ceil.id : null,
      floor: { outer: loop.poly, holes: loop.holes || [] }, ceiling: { outer: loop.poly, holes: loop.holes || [] }, edges: edges.map(({ _fwd, _s0, _s1, ...e }) => e) });
  }
  out.sort((a, b) => String(a.number).localeCompare(String(b.number), undefined, { numeric: true }));
  return out;
}
export function finishData(doc, snap, loopsFor, measure = null) {
  const rooms = roomInputs(snap, loopsFor);
  const rules = measure?.rules ? { 'finish.wall': measure.rules['finish.wall'] || null, 'finish.ceiling': measure.rules['finish.ceiling'] || null } : {};
  return { rooms, result: roomFinishes(doc, rooms, { rules }) };
}

// ---------------------------------------------------------------------------------------------- the schedules
const col = (id, kind = 'text', role = null, sum = true) => ({ id, kind, ...(role ? { role } : {}), ...(sum ? {} : { sum: false }) });
export function finishSchedules(doc, snap, loopsFor, { fmtLen, fmtArea, fmtVol, t, unit = '', measure = null }) {
  const { rooms, result } = finishData(doc, snap, loopsFor, measure);
  const H = (s) => (unit ? s + ' (' + unit + ')' : s);
  const levelName = (id) => snap.levels.find((l) => l.id === id)?.name || '';
  const roomOf = new Map(rooms.map((r) => [r.key, r]));
  const wallByGuid = new Map(snap.walls.map((w) => [w.guid, w]));
  const wallName = (guid) => { const w = wallByGuid.get(guid); if (!w) return t('fin.wall.other'); const ty = w.assembly || wallType(w.typeKey); return ty ? typeName(ty) : (w.typeName || ''); };
  const label = (r) => (r.number ? r.number + ' ' : '') + (r.name || '');
  const G = t('model.sch.grossarea'), D = t('model.sch.deductions'), N = t('model.sch.netarea'), TOTAL = t('model.sch.total');
  const n0 = (x, k) => (x ? (x.estimated && k === 'whole' ? '' : (x.estimated ? '≈ ' : '') + String(x[k])) : '');
  const sum = (list, f) => list.reduce((s, x) => s + (f(x) || 0), 0);
  const note = t('fin.rule') + (result.rows.some((r) => r.tiles?.estimated) ? ' ' + t('fin.rule.estimated') : '') + (measure ? ' ' + measure.line : '');
  const idsOfRows = (list) => [...new Set(list.flatMap((r) => (r.surface === 'wall' && r.wall ? [wallByGuid.get(r.wall)?.id] : r.surface === 'ceiling' && roomOf.get(r.room)?.ceilingId ? [roomOf.get(r.room).ceilingId] : [roomOf.get(r.room)?.id])).filter((x) => x !== undefined && x !== null))];

  // ---- by room
  const byRoom = rooms.map((room) => {
    const mine = result.rows.filter((r) => r.room === room.key);
    const of = (s) => mine.filter((r) => r.surface === s);
    const names = (list) => [...new Set(list.map((r) => r.name).filter(Boolean))].join(', ');
    const sk = of('skirting')[0] || null;
    return { room, mine, floor: of('floor'), wall: of('wall'), ceiling: of('ceiling'), sk, names };
  }).filter((x) => x.mine.length);
  const roomfinishes = {
    title: t('fin.sch.rooms'),
    head: [t('model.room.number'), t('model.room.longname'), t('model.level'), t('fin.h.floor'), t('fin.h.floorarea'), t('fin.h.walls'), t('fin.h.wallarea'), t('fin.h.ceiling'), t('fin.h.ceilingarea'), t('fin.h.skirting'), H(t('fin.h.skirtinglength'))],
    cols: [col('number'), col('room', 'text', 'room'), col('level', 'text', 'level'), col('floor', 'text', 'type'), col('floorarea', 'area'), col('walls'), col('wallarea', 'area'), col('ceiling'), col('ceilingarea', 'area'), col('skirting'), col('skirtinglength', 'length')],
    rows: byRoom.map((x) => [x.room.number, x.room.name, levelName(x.room.storey), x.names(x.floor), x.floor.length ? fmtArea(sum(x.floor, (r) => r.net)) : '', x.names(x.wall), x.wall.length ? fmtArea(sum(x.wall, (r) => r.net)) : '',
      x.names(x.ceiling), x.ceiling.length ? fmtArea(sum(x.ceiling, (r) => r.net)) : '', x.sk ? x.sk.name : '', x.sk ? fmtLen(x.sk.net) : '']),
    vals: byRoom.map((x) => [null, null, null, null, x.floor.length ? sum(x.floor, (r) => r.net) : null, null, x.wall.length ? sum(x.wall, (r) => r.net) : null, null, x.ceiling.length ? sum(x.ceiling, (r) => r.net) : null, null, x.sk ? x.sk.net : null]),
    ids: byRoom.map((x) => [x.room.id]),
    cellIds: byRoom.map((x) => [null, null, null, null, null, null, idsOfRows(x.wall), null, x.ceiling.length ? idsOfRows(x.ceiling) : null, null, x.sk ? idsOfRows(x.wall.length ? x.wall : []).concat(x.sk.openings).filter((v, i, a) => a.indexOf(v) === i) : null].map((c) => (c && c.length ? c : null))),
    note,
  };
  roomfinishes.total = [TOTAL, '', '', '', fmtArea(sum(byRoom, (x) => sum(x.floor, (r) => r.net))), '', fmtArea(sum(byRoom, (x) => sum(x.wall, (r) => r.net))), '', fmtArea(sum(byRoom, (x) => sum(x.ceiling, (r) => r.net))), '', fmtLen(sum(byRoom, (x) => (x.sk ? x.sk.net : 0)))];
  roomfinishes.cols[2].order = snap.levels.map((l) => l.name);

  // ---- by wall: every stretch of wall and the band of it a finish covers
  const wr = result.rows.filter((r) => r.surface === 'wall');
  const wallfinishes = {
    title: t('fin.sch.walls'),
    head: [t('model.room.longname'), t('model.sch.wall'), t('qty.sch.finish'), t('fin.h.zone'), H(t('fin.h.from')), H(t('fin.h.to')), H(t('model.prop.length')), G, D, N, t('fin.h.whole'), t('fin.h.cut'), t('fin.h.order')],
    cols: [col('room', 'text', 'room'), col('wall'), col('finish', 'text', 'type'), col('zone'), col('from', 'length', null, false), col('to', 'length', null, false), col('length', 'length'), col('gross', 'area'), col('deductions', 'area'), col('net', 'area'), col('whole', 'count'), col('cut', 'count'), col('order', 'count')],
    rows: wr.map((r) => [label(roomOf.get(r.room)), r.wall ? wallName(r.wall) : t('fin.wall.other'), r.name, r.zoneName || '', fmtLen(r.from), fmtLen(r.to), fmtLen(r.length), fmtArea(r.gross), fmtArea(r.deductions), fmtArea(r.net), n0(r.tiles, 'whole'), n0(r.tiles, 'cut'), n0(r.tiles, 'order')]),
    vals: wr.map((r) => [null, null, null, null, r.from, r.to, r.length, r.gross, r.deductions, r.net, r.tiles && !r.tiles.estimated ? r.tiles.whole : null, r.tiles ? r.tiles.cut : null, r.tiles ? r.tiles.order : null]),
    ids: wr.map((r) => idsOfRows([r])),
    cellIds: wr.map((r) => [null, null, null, null, null, null, null, null, r.openings.length ? r.openings : null, null, null, null, null]),
    total: [TOTAL, '', '', '', '', '', fmtLen(sum(wr, (r) => r.length)), fmtArea(sum(wr, (r) => r.gross)), fmtArea(sum(wr, (r) => r.deductions)), fmtArea(sum(wr, (r) => r.net)), '', '', ''],
    note,
  };

  // ---- by zone
  const zs = doc.zones.map((z) => ({ z, rows: result.rows.filter((r) => r.zone === z.id) })).filter((x) => x.rows.length);
  const tl = (list) => { const tt = list.map((r) => r.tiles).filter(Boolean); return tt.length ? { whole: sum(tt, (x) => x.whole), cut: sum(tt, (x) => x.cut), order: sum(tt, (x) => x.order), estimated: tt.some((x) => x.estimated) } : null; };
  const zonefinishes = {
    title: t('fin.sch.zones'),
    head: [t('fin.h.zone'), t('model.room.longname'), t('fin.h.surface'), t('qty.sch.finish'), N, t('fin.h.whole'), t('fin.h.cut'), t('fin.h.order'), t('fin.h.substrate'), t('fin.h.substratevol')],
    cols: [col('zone'), col('room', 'text', 'room'), col('surface'), col('finish', 'text', 'type'), col('net', 'area'), col('whole', 'count'), col('cut', 'count'), col('order', 'count'), col('substrate'), col('substratevolume', 'volume')],
    rows: zs.map(({ z, rows }) => { const x = tl(rows); return [z.name, label(roomOf.get(z.room)), t('fin.surface.' + z.surface), rows[0].name, fmtArea(sum(rows, (r) => r.net)), n0(x, 'whole'), n0(x, 'cut'), n0(x, 'order'), rows[0].substrate?.name || '', rows[0].substrate ? fmtVol(sum(rows, (r) => r.substrate?.volume)) : '']; }),
    vals: zs.map(({ rows }) => { const x = tl(rows); return [null, null, null, null, sum(rows, (r) => r.net), x && !x.estimated ? x.whole : null, x ? x.cut : null, x ? x.order : null, null, rows[0].substrate ? sum(rows, (r) => r.substrate?.volume) : null]; }),
    ids: zs.map(({ rows }) => idsOfRows(rows)),
    total: [TOTAL, '', '', '', fmtArea(sum(zs, (x) => sum(x.rows, (r) => r.net))), '', '', '', '', ''],
    note,
  };

  // ---- quantities by finish: what to order
  const tot = result.totals;
  const finishtotals = {
    title: t('fin.sch.totals'),
    head: [t('qty.sch.finish'), t('fin.h.kind'), N, t('fin.h.whole'), t('fin.h.cut'), t('fin.h.order'), t('fin.h.substrate'), t('fin.h.substratevol'), t('fin.h.volume')],
    cols: [col('finish', 'text', 'type'), col('kind'), col('net', 'area'), col('whole', 'count'), col('cut', 'count'), col('order', 'count'), col('substrate'), col('substratevolume', 'volume'), col('volume', 'volume')],
    rows: tot.map((g) => [g.name, t('fin.kind.' + g.kind), fmtArea(g.net), n0(g.tiles, 'whole'), n0(g.tiles, 'cut'), n0(g.tiles, 'order'), g.substrate?.name || '', g.substrate ? fmtVol(g.substrate.volume) : '', g.volume > 0 ? fmtVol(g.volume) : '']),
    vals: tot.map((g) => [null, null, g.net, g.tiles && !g.tiles.estimated ? g.tiles.whole : null, g.tiles ? g.tiles.cut : null, g.tiles ? g.tiles.order : null, null, g.substrate ? g.substrate.volume : null, g.volume > 0 ? g.volume : null]),
    ids: tot.map((g) => idsOfRows(result.rows.filter((r) => r.finish?.id === g.finish))),
    total: [TOTAL, '', fmtArea(sum(tot, (g) => g.net)), '', '', '', '', tot.some((g) => g.substrate) ? fmtVol(sum(tot, (g) => g.substrate?.volume)) : '', ''],
    note,
  };
  return { roomfinishes, wallfinishes, zonefinishes, finishtotals, data: { rooms, result } };
}
