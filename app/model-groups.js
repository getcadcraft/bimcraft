/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-groups.js — model groups: picked elements kept as one named thing, placed again elsewhere, and kept alike (0.10, session
 * bk-tools-a-10). No DOM: bin/test-bimcraft.mjs --toolsa runs it in Node. Plan millimetres in the level's own axes.
 *
 * Written as the schema's own form: an IfcGroup (ObjectType CadCraft.ModelGroup, Name = the group's name) and one
 * IfcRelAssignsToGroup to its members. CadCraft_ModelGroup on the group: Definition (an id every instance of one group shares),
 * Storey (its level's GlobalId), OriginX, OriginY (where the instance stands), AnchorX, AnchorY (its members' lower-left corner
 * measured from the origin) and Content (what it is made of, measured from the origin, as JSON: spaces-geom.js groupContent).
 * Another reader sees a named group of ordinary walls, columns and floors; nothing is hidden inside a block.
 *
 * "Edit one and the others follow" is done after every change (syncGroups, called by spaces-sync.js inside the same undo step):
 *   an instance whose members moved together (the lower-left corner moved, the content from the moved origin is the same) only has
 *     its origin moved;
 *   an instance whose content changed was edited: every other instance of its definition is made again from it, at its own origin;
 *   an instance with no members left is removed.
 * What an instance can be made again from: walls (with their doors and windows), columns and drawn floors, moved without turning.
 * A group may hold other things too (it is still picked, named, moved and deleted as one), but then it cannot be placed again and
 * its other instances are not kept alike: `copyProblem(group)` says so and the tools show it.
 *
 *   readGroups(w) → [{ id, guid, name, definition, storey (GlobalId), origin, anchor, content, members: [express id…], rel }]
 *   describe(w, memberIds, ctx?) → { members: [{ kind, guid, … }], other: n, box }      copyProblem(d) → lang key | null
 *   makeGroup(w, { name, members: [GlobalId…], guid, definition }) · renameGroup(w, guid, name) · ungroup(w, guids)
 *   addToGroup(w, guid, [GlobalId…]) · placeInstance(w, { group, dx, dy, guid, gids }) · removeGroups(w, guids) (members too)
 *   groupOf(groups, expressId) · syncGroups(w) → { moved, followed, dropped, storeys }
 */
import { ids, val, isDeleted } from './ifc-util.js';
import { round } from './model-write.js';
import { readWalls, addWall, deleteWalls } from './model-walls.js';
import { readOpenings, addOpening } from './model-openings.js';
import { readColumns, copyColumn } from './model-columns.js';
import { readDrawnFloors, writeDrawnFloor } from './model-floors.js';
import { groupContent, sameContent } from './spaces-geom.js';
import { t as tr } from './i18n.js';

export const GROUP_PSET = 'CadCraft_ModelGroup', GROUP_TYPE = 'CadCraft.ModelGroup';
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const safe = (w, cls) => { try { return ids(w.api, w.mid, cls); } catch (e) { return []; } };
const LM = (w, k, mm) => [k, 'IFCLENGTHMEASURE', round(w.u(mm))];
/** What an instance holds, from its origin, with how many members cannot be described (they make it unlike anything). */
const contentOf = (d, origin) => ({ m: groupContent(d.members, origin), other: d.other });
const sameAs = (c, stored) => !!stored && c.other === stored.other && sameContent(c.m, stored.m);
const parse = (text) => { try { const o = JSON.parse(text); return o && Array.isArray(o.m) ? o : null; } catch (e) { return null; } };

export function readGroups(w) {
  const out = [], byId = new Map();
  for (const id of safe(w, 'IFCGROUP')) {
    const ps = w.readPset(id, GROUP_PSET);
    if (!ps) continue;
    const l = w.api.GetLine(w.mid, id, false), n = (k) => Number(ps[k] || 0) * w.unitMm;
    const g = { id, guid: val(l.GlobalId), name: val(l.Name) || '', definition: ps.Definition || '', storey: ps.Storey || '', origin: [n('OriginX'), n('OriginY')], anchor: [n('AnchorX'), n('AnchorY')], content: parse(ps.Content), members: [], rel: null };
    out.push(g); byId.set(id, g);
  }
  if (!out.length) return out;
  for (const rid of safe(w, 'IFCRELASSIGNSTOGROUP')) {
    const r = w.api.GetLine(w.mid, rid, false), g = byId.get(r.RelatingGroup?.value);
    if (g) { g.rel = rid; g.members.push(...(r.RelatedObjects || []).map((h) => h.value)); }
  }
  return out;
}
export const groupOf = (groups, id) => groups.find((g) => g.members.includes(id)) || null;

/** What the members are, as the numbers that make them (walls with their doors and windows, columns, drawn floors); the rest is counted. */
export function describe(w, memberIds, ctx = {}) {
  const set = new Set(memberIds), members = [], pts = [];
  const walls = ctx.walls || (ctx.walls = readWalls(w)), ops = ctx.openings || (ctx.openings = readOpenings(w, null, walls));
  const cols = ctx.columns || (ctx.columns = readColumns(w)), floors = ctx.floors || (ctx.floors = readDrawnFloors(w));
  let known = 0;
  for (const x of walls) {
    if (!set.has(x.id)) continue;
    known++;
    members.push({ kind: 'wall', guid: x.guid, id: x.id, storey: x.storey, a: x.a, b: x.b, typeKey: x.typeKey, baseOffset: x.baseOffset, topLevel: x.topLevel, topOffset: x.topOffset, fixedHeight: x.fixedHeight, extSide: x.extSide, bulge: x.bulge, justification: x.justification,
      openings: ops.filter((o) => o.wallGuid === x.guid).map((o) => ({ guid: o.guid, opening: o.opening, typeKey: o.typeKey, family: o.family, sizeName: o.sizeName, offset: o.offset, width: o.width, height: o.height, sill: o.sill, hand: o.hand, face: o.face })) });
    const L = Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1]) || 1, n = [-(x.b[1] - x.a[1]) / L * x.t / 2, (x.b[0] - x.a[0]) / L * x.t / 2];
    pts.push([x.a[0] + n[0], x.a[1] + n[1]], [x.a[0] - n[0], x.a[1] - n[1]], [x.b[0] + n[0], x.b[1] + n[1]], [x.b[0] - n[0], x.b[1] - n[1]]);
  }
  for (const c of cols) {
    if (!set.has(c.id)) continue;
    known++;
    members.push({ kind: 'column', guid: c.guid, id: c.id, storey: c.storey, at: c.at, shape: c.shape, width: c.width, depth: c.depth, angle: c.angle, topLevel: c.topLevel, topOffset: c.topOffset, height: c.height });
    pts.push([c.at[0] - c.width / 2, c.at[1] - c.width / 2], [c.at[0] + c.width / 2, c.at[1] + c.width / 2]);
  }
  for (const f of floors) {
    if (!set.has(f.id)) continue;
    known++;
    members.push({ kind: 'floor', guid: f.guid, id: f.id, storey: f.storey, points: f.points, floorKind: f.kind, use: f.use, thickness: f.thickness, offset: f.offset });
    pts.push(...f.points);
  }
  const box = pts.length ? [Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1])), Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))] : null;
  return { members, other: memberIds.length - known, box };
}
/** Why a group cannot be placed again or kept alike (null: it can). */
export function copyProblem(d) {
  if (!d.members.length) return 'spaces.group.why.empty';
  if (d.other > 0) return 'spaces.group.why.other';
  return null;
}

function writeState(w, g, d, origin) {
  const anchor = d.box ? [d.box[0] - origin[0], d.box[1] - origin[1]] : [0, 0];
  w.upsertPset(g.id, GROUP_PSET, [LM(w, 'OriginX', origin[0]), LM(w, 'OriginY', origin[1]), LM(w, 'AnchorX', anchor[0]), LM(w, 'AnchorY', anchor[1]), ['Content', 'IFCTEXT', JSON.stringify(contentOf(d, origin))]]);
}
const storeyGuid = (w, d) => { const st = d.members[0]?.storey; return st ? val(w.api.GetLine(w.mid, st, false).GlobalId) : ''; };

/** Express ids of the elements with these GlobalIds that a group can hold (walls, columns, drawn floors and anything else byGuid finds). */
function idsOf(w, guids) { return [...new Set(guids.map((g) => w.byGuid(g)).filter(Boolean))]; }

export function makeGroup(w, { name, members, guid, definition } = {}) {
  const list = idsOf(w, members || []);
  if (!list.length) refuse('spaces.err.group.empty');
  const groups = readGroups(w);
  if (list.some((id) => groupOf(groups, id))) refuse('spaces.err.group.taken');
  const d = describe(w, list);
  const g = guid || val(w.guid());
  const nm = String(name || '').trim() || tr('spaces.group.name', { n: new Set(groups.map((x) => x.definition)).size + 1 });
  const id = w.make('IFCGROUP', g, w.ownerHistory(), w.L(nm), null, w.L(GROUP_TYPE));
  const rel = w.make('IFCRELASSIGNSTOGROUP', w.guid(), w.ownerHistory(), null, null, list.map((x) => w.H(x)), null, w.H(id));
  const origin = d.box ? [d.box[0], d.box[1]] : [0, 0];
  w.upsertPset(id, GROUP_PSET, [['Definition', 'IFCIDENTIFIER', definition || g], ['Storey', 'IFCIDENTIFIER', storeyGuid(w, d) || '-']]);
  writeState(w, { id }, d, origin);
  return { id, guid: g, rel, origin };
}
export function renameGroup(w, guid, name) {
  const groups = readGroups(w), g = groups.find((x) => x.guid === guid), nm = String(name || '').trim();
  if (!g) refuse('model.err.gone');
  if (!nm) return g;
  for (const x of groups.filter((y) => y.definition === g.definition)) { const l = w.touch(x.id); l.Name = w.L(nm); w.write(l); }   // one group, one name
  return g;
}
/** The group goes; its members stay as ordinary elements. */
export function ungroup(w, guids) {
  const list = readGroups(w).filter((g) => guids.includes(g.guid));
  if (list.length) w.dropProduct(list.map((g) => g.id));
  return list.length;
}
export function addToGroup(w, guid, memberGuids) {
  const groups = readGroups(w), g = groups.find((x) => x.guid === guid);
  if (!g) refuse('model.err.gone');
  const add = idsOf(w, memberGuids).filter((id) => !g.members.includes(id));
  if (add.some((id) => groupOf(groups, id))) refuse('spaces.err.group.taken');
  if (!add.length) return g;
  if (g.rel) { const r = w.touch(g.rel); r.RelatedObjects = [...(r.RelatedObjects || []), ...add.map((x) => w.H(x))]; w.write(r); }
  else w.make('IFCRELASSIGNSTOGROUP', w.guid(), w.ownerHistory(), null, null, add.map((x) => w.H(x)), null, w.H(g.id));
  return g;
}

/** Make the members again, moved by (dx, dy): → { ids: [express id…], storeys }. gid(sourceGuid) hands out the copies' GlobalIds. */
function copyMembers(w, d, dx, dy, gid) {
  const made = [], storeys = new Set();
  for (const m of d.members) {
    storeys.add(m.storey);
    if (m.kind === 'wall') {
      const r = addWall(w, { storey: m.storey, a: [m.a[0] + dx, m.a[1] + dy], b: [m.b[0] + dx, m.b[1] + dy], typeKey: m.typeKey, baseOffset: m.baseOffset, topLevel: m.topLevel, topOffset: m.topOffset, height: m.fixedHeight, extSide: m.extSide, bulge: m.bulge, justification: m.justification, guid: gid(m.guid) });
      made.push(r.id);
      const src = (d.openingsFull || []).filter((o) => o.wallGuid === m.guid);
      for (const o of src) addOpening(w, { wall: r.guid, typeKey: o.typeKey, family: o.family, values: o.values, instance: o.instance, sizeName: o.sizeName, offset: o.offset, width: o.width, height: o.height, sill: o.sill, hand: o.hand, face: o.face, guid: gid(o.guid), openingGuid: gid(o.opening) });
    } else if (m.kind === 'column') {
      made.push(copyColumn(w, d.columnsFull.find((c) => c.guid === m.guid), dx, dy, gid(m.guid)));
    } else if (m.kind === 'floor') {
      const g = gid(m.guid);
      made.push(writeDrawnFloor(w, { storey: val(w.api.GetLine(w.mid, m.storey, false).GlobalId), points: m.points.map((q) => [q[0] + dx, q[1] + dy]), kind: m.floorKind, use: m.use, thickness: m.thickness, offset: m.offset, guid: g }).id);
    }
  }
  return { ids: made, storeys };
}
function describeFull(w, memberIds) {
  const ctx = {}, d = describe(w, memberIds, ctx);
  d.openingsFull = ctx.openings; d.columnsFull = ctx.columns;
  return d;
}
/** Delete an instance's members (walls take their doors and windows; a drawn floor its openings). → the levels touched */
function dropMembers(w, d, memberIds) {
  const storeys = new Set(d.members.map((m) => m.storey));
  const wallGuids = d.members.filter((m) => m.kind === 'wall').map((m) => m.guid);
  if (wallGuids.length) deleteWalls(w, wallGuids);
  const H = w.hostIndex(), rest = [];
  for (const id of memberIds) { if (isDeleted(w.api, w.mid, id) || d.members.some((m) => m.kind === 'wall' && m.id === id)) continue; rest.push(id, ...(H.voids.get(id) || [])); }
  if (rest.length) w.dropProduct(rest);
  return storeys;
}

/**
 * Another instance of a group, (dx, dy) from the one named. `gids` = a Map kept by the caller's op so a redo makes the same GlobalIds.
 * → { id, guid, ids: [the new members], storeys }
 */
export function placeInstance(w, { group, dx = 0, dy = 0, guid, gids = new Map() } = {}) {
  const g = readGroups(w).find((x) => x.guid === group);
  if (!g) refuse('model.err.gone');
  if (!(Math.abs(dx) + Math.abs(dy) > 0)) refuse('spaces.err.group.same');   // exactly on top of itself: two of everything in one place
  const d = describeFull(w, g.members), why = copyProblem(d);
  if (why === 'spaces.group.why.empty') refuse('spaces.err.group.empty');
  if (why) refuse('spaces.err.group.other');
  const gid = (s) => { if (!gids.has(s)) gids.set(s, val(w.guid())); return gids.get(s); };
  const made = copyMembers(w, d, dx, dy, gid);
  const ng = guid || gid('group:' + g.guid);
  const id = w.make('IFCGROUP', ng, w.ownerHistory(), w.L(g.name), null, w.L(GROUP_TYPE));
  w.make('IFCRELASSIGNSTOGROUP', w.guid(), w.ownerHistory(), null, null, made.ids.map((x) => w.H(x)), null, w.H(id));
  w.upsertPset(id, GROUP_PSET, [['Definition', 'IFCIDENTIFIER', g.definition], ['Storey', 'IFCIDENTIFIER', g.storey || '-']]);
  const origin = [g.origin[0] + dx, g.origin[1] + dy];
  // the copy's state is written by syncGroups once its walls have settled; until then it carries the source's, moved
  w.upsertPset(id, GROUP_PSET, [LM(w, 'OriginX', origin[0]), LM(w, 'OriginY', origin[1]), LM(w, 'AnchorX', g.anchor[0]), LM(w, 'AnchorY', g.anchor[1]), ['Content', 'IFCTEXT', JSON.stringify(g.content || { m: [], other: 0 })]]);
  return { id, guid: ng, ids: made.ids, storeys: made.storeys };
}
/** The groups and everything in them. → the levels touched */
export function removeGroups(w, guids) {
  const storeys = new Set();
  for (const g of readGroups(w).filter((x) => guids.includes(x.guid))) {
    const d = describe(w, g.members);
    for (const s of dropMembers(w, d, g.members)) storeys.add(s);
    if (!isDeleted(w.api, w.mid, g.id)) w.dropProduct([g.id]);
  }
  return storeys;
}

/** After any change: instances that moved keep their content, an edited instance is copied to the others of its group. */
export function syncGroups(w) {
  const R = { moved: 0, followed: 0, dropped: 0, storeys: new Set() };
  const groups = readGroups(w);
  if (!groups.length) return R;
  const ctx = {};
  const state = new Map();   // group → { d, edited }
  for (const g of groups) {
    const live = g.members.filter((id) => !isDeleted(w.api, w.mid, id));
    if (!live.length) { w.dropProduct([g.id]); R.dropped++; continue; }
    const d = describe(w, live, ctx);
    if (sameAs(contentOf(d, g.origin), g.content)) { state.set(g, { d, edited: false }); continue; }
    // moved as one? its lower-left corner is where the origin went
    if (d.box) {
      const o2 = [d.box[0] - g.anchor[0], d.box[1] - g.anchor[1]];
      if (sameAs(contentOf(d, o2), g.content)) { writeState(w, g, d, o2); g.origin = o2; R.moved++; state.set(g, { d, edited: false }); continue; }
    }
    state.set(g, { d, edited: true });
  }
  const byDef = new Map();
  for (const g of state.keys()) { if (!byDef.has(g.definition)) byDef.set(g.definition, []); byDef.get(g.definition).push(g); }
  for (const list of byDef.values()) {
    const edited = list.filter((g) => state.get(g).edited);
    if (!edited.length) continue;
    const src = edited[0], sd = describeFull(w, src.members.filter((id) => !isDeleted(w.api, w.mid, id)));
    writeState(w, src, sd, src.origin);
    if (copyProblem(sd)) { for (const g of edited.slice(1)) writeState(w, g, state.get(g).d, g.origin); continue; }   // it holds things that cannot be made again: the others are left as they are
    for (const g of list) {
      if (g === src) continue;
      const od = state.get(g).d;
      if (copyProblem(od)) { writeState(w, g, od, g.origin); continue; }
      for (const s of dropMembers(w, od, g.members)) R.storeys.add(s);
      const dx = g.origin[0] - src.origin[0], dy = g.origin[1] - src.origin[1];
      const made = copyMembers(w, sd, dx, dy, () => val(w.guid()));
      for (const s of made.storeys) R.storeys.add(s);
      const rel = g.rel && !isDeleted(w.api, w.mid, g.rel) ? g.rel : null;
      if (rel) { const r = w.touch(rel); r.RelatedObjects = made.ids.map((x) => w.H(x)); w.write(r); }
      else w.make('IFCRELASSIGNSTOGROUP', w.guid(), w.ownerHistory(), null, null, made.ids.map((x) => w.H(x)), null, w.H(g.id));
      g.members = made.ids; g.fresh = true;
      R.followed++;
    }
  }
  R.fresh = groups.filter((g) => g.fresh);
  return R;
}
/** Once the walls a follow made have settled (their joins can move an end): the instances' state as it is now. */
export function settleGroups(w, groups) {
  for (const g of groups) { const d = describe(w, g.members.filter((id) => !isDeleted(w.api, w.mid, id))); writeState(w, g, d, g.origin); }
}
/** Do two instances (readGroups rows) hold the same thing, each from its own origin? */
export const alikeGroups = (a, b) => !!a.content && !!b.content && a.content.other === b.content.other && sameContent(a.content.m, b.content.m);
