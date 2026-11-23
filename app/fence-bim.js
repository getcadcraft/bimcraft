/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fence-bim.js — BimCraft's adapter for the fence generator (0.10 SU.1814b; lib/fence is civil-site-10's, copied to ./fence/ by tools/fence/sync.mjs;
 * the Inbox line of civil-site-10 asked for this, written by bim-part-link-10). DOM-free: tools/fence-test/bim-test.mjs runs it on a real IFC.
 *
 *   fenceRecord(points, opts) → the lib record (metres; points in plan mm): posts every 2.4 m (labelled usual choices, a designer sets the real ones), a 1.8 m panel fence
 *   placeFence({ level, points, closed, style, height, gates }) → op for IfcEditor.modelChange: ONE IfcRailing (ObjectType "Fence", USERDEFINED) on the level
 *        whose body holds the posts (square prisms), the panels (prisms in the vertical plane between two posts), the rails (swept along their segment) and
 *        the gates (leaf prisms); property set CadCraft_Fence (the record, counts, lengths). One undo step.
 *   readFences(w) → [{ id, guid, rec, stats }]
 *
 *   placeFenceParts({ level, points, closed, style, height, gates, item, name }) → op: the same fence as ONE ELEMENT PER PART (SU.1814b, civil-site-11's line): post = IfcMember POST,
 *        panel = IfcRailing (USERDEFINED "Fence panel"), rail = IfcMember, picket = IfcMember, gate = IfcDoor GATE; a panel of a pickets fence is a schedule row only (`virtual`,
 *        lib/fence parts()). Each carries CadCraft_Fence { Fence, Part, PartId }. `item` = a Library item of kind fence-type (typeFromItem, metres). One undo step.
 *
 * Styles: placeFence takes 'panel' and 'rails' and refuses pickets (it draws one solid). placeFenceParts also takes 'pickets'.
 * What it is not: CivilCraft writes each post, panel and gate as its own element in a system (ifc-civil.js). Here a fence is one element, so a schedule
 * reads CadCraft_Fence (posts, panels, rails, gates, length) and a post cannot be picked alone. Ground is the level (no terrain in BimCraft's plan).
 */
import * as FN from './fence/index.js';
import { ModelWriter, round } from './model-write.js';
import { railingItems } from './res-railing.js';
import { ids, val } from './ifc-util.js';
import { t as tr } from './i18n.js';

export const FENCE_PSET = 'CadCraft_Fence';
const op = (fn) => (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run(fn);
const fail = (key) => { throw Object.assign(new Error(key), { key }); };
const MM = 'm';   // lib/fence's defaults() knows metres; every size is passed in mm below, so only the labelled defaults come from it

/** The record for a drawn path (plan mm in, METRES in the record: lib/fence holds sizes to metre-scale limits and its defaults are the usual metre choices). */
export function fenceRecord(points, { id = 'fc1', name = 'Fence', closed = false, style = 'panel', height, gates = [], terrain = 'raked' } = {}) {
  const d = FN.defaults(MM);
  return {
    ...d, id, name, pts: points.map(([x, y]) => ({ x: x / 1000, y: y / 1000 })), closed, style, terrain, gates: gates.map((g) => ({ s: g.s / 1000, width: g.width / 1000, name: g.name || '' })),
    height: height > 0 ? height / 1000 : d.height,
  };
}
/** The lib's layout (metres) in plan millimetres, the writer's unit. */
export function layoutMm(L) {
  const k = 1000, p = (q) => ({ ...q, x: q.x * k, y: q.y * k, z: q.z * k });
  return {
    posts: L.posts.map((q) => ({ ...q, x: q.x * k, y: q.y * k, ground: q.ground * k, base: q.base * k, top: q.top * k, size: q.size * k })),
    panels: L.panels.map((q) => ({ ...q, a: p(q.a), b: p(q.b), height: q.height * k, len: q.len * k })),
    rails: L.rails.map((q) => ({ ...q, a: p(q.a), b: p(q.b), size: q.size * k })),
    gates: L.gates.map((q) => ({ ...q, a: p(q.a), b: p(q.b), width: q.width * k, height: q.height * k })),
    stats: { ...L.stats, length: L.stats.length * k, panelArea: L.stats.panelArea * k * k, railLength: L.stats.railLength * k },
    problems: L.problems,
  };
}
export const buildFence = (rec) => layoutMm(FN.build(rec, { zAt: () => 0, units: MM }));

/** A prism in the vertical plane through a and b (plan mm): polygon [(0, za), (len, zb), (len, zb + h), (0, za + h)] pushed `thk` across the plane. */
function slab(w, a, b, za, zb, h, thk) {
  const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
  if (len < 1) return null;
  const x = [dx / len, dy / len, 0], n = [x[1], -x[0], 0];   // n = the extrusion direction; with x it makes the frame's Y point up
  const frame = w.axisFrame([a.x - n[0] * thk / 2, a.y - n[1] * thk / 2, 0], n, x);
  return w.extrudeAt(w.profile([[0, za], [len, zb], [len, zb + h], [0, za + h]]), frame, thk);
}

export function fenceItems(w, layout, rec) {
  const items = [];
  const sq = (s) => [[-s / 2, -s / 2], [s / 2, -s / 2], [s / 2, s / 2], [-s / 2, s / 2]];
  for (const p of layout.posts) items.push(w.extrudeAt(w.profile(sq(p.size)), w.axisFrame([p.x, p.y, p.base], [0, 0, 1], [1, 0, 0]), p.top - p.base));
  if (rec.style === 'panel') for (const p of layout.panels) { const s = slab(w, p.a, p.b, p.a.z, p.b.z, p.height, rec.panelThk * 1000); if (s) items.push(s); }
  for (const r of layout.rails) items.push(...railingItems(w, { posts: [], balusters: [], rails: [[[r.a.x, r.a.y, r.a.z], [r.b.x, r.b.y, r.b.z]]], height: 0, rail: r.size, post: 0, baluster: 0 }));
  for (const g of layout.gates) { const s = slab(w, g.a, g.b, g.a.z, g.b.z, g.height, Math.max(40, rec.panelThk * 1000)); if (s) items.push(s); }
  return items;
}

function writeFence(w, id, rec, layout) {
  const items = fenceItems(w, layout, rec);
  if (!items.length) fail('fence.err.empty');
  const sty = w.surfaceStyle(tr('fence.style'), [0.42, 0.45, 0.47], 0);
  for (const it of items) w.styleItem(it, sty);
  w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', items)]);
  const s = layout.stats;
  w.upsertPset(id, FENCE_PSET, [
    ['Record', 'IFCTEXT', JSON.stringify(rec)], ['Style', 'IFCLABEL', rec.style], ['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(rec.height * 1000))],
    ['Posts', 'IFCINTEGER', layout.posts.length], ['Panels', 'IFCINTEGER', rec.style === 'panel' ? layout.panels.length : 0], ['Rails', 'IFCINTEGER', layout.rails.length], ['Gates', 'IFCINTEGER', layout.gates.length],
    ['Length', 'IFCLENGTHMEASURE', round(w.u(s.length))], ['PanelArea', 'IFCAREAMEASURE', round(s.panelArea / 1e6, 4)], ['Problems', 'IFCINTEGER', layout.problems.length],
  ]);
}

/** lib/fence parts() of a record (metres) in plan millimetres, the writer's unit; a Library item (`item`) patches the record first. */
export function partsMm(rec, item = null) {
  const patch = item ? FN.typeFromItem(item, MM) : null;
  if (item && !patch) fail('fence.err.item');
  const r = { ...rec, ...(patch || {}) };
  const clean = FN.clean({ ...r, units: MM }, MM);
  if (!clean) fail('fence.err.empty');
  const rr = { ...clean, units: MM }, L = FN.build(rr, { zAt: () => 0, units: MM }), list = FN.parts(L, rr), k = 1000;
  const p = (q) => (q ? { ...q, x: q.x * k, y: q.y * k, z: q.z * k } : q);
  const parts = list.map((q) => ({ ...q, x: q.x * k, y: q.y * k, z: q.z * k, ground: q.ground * k, base: q.base * k, top: q.top * k, size: q.size * k, a: p(q.a), b: p(q.b), height: q.height * k, len: q.len * k, width: q.width * k, w: q.w * k }));
  return { rec: rr, parts, layout: layoutMm(L) };
}

function partItems(w, q, rec) {
  const sq = (s) => [[-s / 2, -s / 2], [s / 2, -s / 2], [s / 2, s / 2], [-s / 2, s / 2]], thk = Math.max(20, rec.panelThk * 1000);
  if (q.part === 'post') return [w.extrudeAt(w.profile(sq(q.size)), w.axisFrame([q.x, q.y, q.base], [0, 0, 1], [1, 0, 0]), q.top - q.base)];
  if (q.part === 'panel') { const s = slab(w, q.a, q.b, q.a.z, q.b.z, q.height, thk); return s ? [s] : []; }
  if (q.part === 'rail') return railingItems(w, { posts: [], balusters: [], rails: [[[q.a.x, q.a.y, q.a.z], [q.b.x, q.b.y, q.b.z]]], height: 0, rail: q.size, post: 0, baluster: 0 });
  if (q.part === 'picket') { const L = Math.hypot(q.dx, q.dy) || 1; return [w.extrudeAt(w.profile([[-q.w / 2, -thk / 2], [q.w / 2, -thk / 2], [q.w / 2, thk / 2], [-q.w / 2, thk / 2]]), w.axisFrame([q.x, q.y, q.z], [0, 0, 1], [q.dx / L, q.dy / L, 0]), q.height)]; }
  if (q.part === 'gate') { const s = slab(w, q.a, q.b, q.a.z, q.b.z, q.height, Math.max(40, thk)); return s ? [s] : []; }
  return [];
}

export function placeFenceParts(spec) {
  return op((w) => {
    const pts = (spec.points || []).map((p) => [p[0], p[1]]);
    if (pts.length < (spec.closed ? 3 : 2)) fail('fence.err.short');
    if (spec.style && !FN.STYLES.includes(spec.style)) fail('fence.err.style');
    const base = fenceRecord(pts, { style: spec.style || 'panel', height: spec.height, closed: !!spec.closed, gates: spec.gates || [], name: spec.name || tr('fence.name') });
    const { rec, parts } = partsMm(base, spec.item || null);
    if (!parts.some((q) => q.part === 'post')) fail('fence.err.empty');
    const storey = w.byGuid(spec.level);
    if (!storey) fail('model.err.nolevel');
    const st = w.api.GetLine(w.mid, storey, false), made = new Map(), idsMade = [];
    const sty = w.surfaceStyle(tr('fence.style'), [0.42, 0.45, 0.47], 0);
    for (const q of parts) {
      if (q.virtual) continue;   // a panel of a pickets fence: its pickets are the elements
      const items = partItems(w, q, rec);
      if (!items.length) continue;
      const guid = val(w.guid()), place = w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), nm = w.L(rec.name + ' ' + q.part), ot = w.L('Fence ' + q.part);   // i18n-ignore: IFC file data
      let id;
      if (q.part === 'gate') id = w.make('IFCDOOR', guid, w.ownerHistory(), nm, null, ot, place, null, null, w.u(q.height), w.u(q.width), ...(w.v4 ? ['GATE', 'NOTDEFINED', null] : []));
      else if (q.part === 'panel') id = w.make('IFCRAILING', guid, w.ownerHistory(), nm, null, ot, place, null, null, ...(w.v4 ? ['USERDEFINED'] : ['NOTDEFINED']));
      else id = w.make('IFCMEMBER', guid, w.ownerHistory(), nm, null, ot, place, null, null, ...(w.v4 ? [q.part === 'post' ? 'POST' : 'USERDEFINED'] : []));
      w.noteGuid(guid, id); w.contain(id, storey);
      for (const it of items) w.styleItem(it, sty);
      w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', items)]);
      w.upsertPset(id, FENCE_PSET, [['Fence', 'IFCLABEL', rec.name], ['Part', 'IFCLABEL', q.part], ['PartId', 'IFCLABEL', String(q.id)], ['Type', 'IFCLABEL', rec.type || '']]);
      made.set(guid, id); idsMade.push(id);
    }
    if (!idsMade.length) fail('fence.err.empty');
    return { id: idsMade[0], ids: idsMade, made, parts: parts.filter((q) => !q.virtual).length };
  });
}

export function placeFence(spec) {
  return op((w) => {
    const pts = (spec.points || []).map((p) => [p[0], p[1]]);
    if (pts.length < (spec.closed ? 3 : 2)) fail('fence.err.short');
    if (spec.style && !['panel', 'rails'].includes(spec.style)) fail('fence.err.style');
    const rec = fenceRecord(pts, { style: spec.style || 'panel', height: spec.height, closed: !!spec.closed, gates: spec.gates || [], name: spec.name || tr('fence.name') });
    const layout = buildFence(rec);
    if (!layout.posts.length) fail('fence.err.empty');
    const guid = spec.guid || val(w.guid());
    const storey = w.byGuid(spec.level);
    if (!storey) fail('model.err.nolevel');
    const st = w.api.GetLine(w.mid, storey, false);
    const nm = w.L(rec.name);
    const id = w.make('IFCRAILING', guid, w.ownerHistory(), nm, null, w.L('Fence'), w.H(w.placeAt(st.ObjectPlacement.value, 0, 0, 0, 0)), null, null, ...(w.v4 ? ['USERDEFINED'] : ['NOTDEFINED']));
    w.noteGuid(guid, id);
    w.contain(id, storey);
    writeFence(w, id, rec, layout);
    return { id, ids: [id], made: new Map([[guid, id]]), layout };
  });
}

/** The fences of the open model (their record read back from the property set). */
export function readFences(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCRAILING'); } catch { return out; }
  for (const id of list) {
    const ps = w.readPset(id, FENCE_PSET);
    if (!ps || !ps.Record) continue;
    let rec = null; try { rec = JSON.parse(ps.Record); } catch { continue; }
    out.push({ id, guid: val(w.api.GetLine(w.mid, id, false).GlobalId), rec, posts: Number(ps.Posts) || 0, panels: Number(ps.Panels) || 0, rails: Number(ps.Rails) || 0, gates: Number(ps.Gates) || 0, length: Number(ps.Length) || 0 });
  }
  return out;
}
