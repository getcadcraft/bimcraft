/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-ops.js — what the building tools do to the model, as changes for IfcEditor.modelChange (0.5 part 3, track BM):
 * each op is a function (editor) → { journal, id, ids, made } that writes through a ModelWriter, so it is ONE undo step and
 * a redo runs it again. Ops name storeys and elements by GlobalId (stable across undo / redo), never by expressID.
 * No DOM: bin/test-bimcraft.mjs --model runs it in Node.
 *
 *   ed.modelChange(drawWalls({ storey, segs: [{ a, b }], typeKey, … }), { label, verb })
 *   ed.modelChange(changeWall(guid, { a, b, typeKey, height, … }))
 *   ed.modelChange(removeWalls([guid…]))
 *   ed.modelChange(newLevel({ name, elevation, height }))  ·  ed.modelChange(changeLevel(guid, { name, elevation, height }))
 *
 * Every op ends by bringing the walls it may have changed up to date (model-walls.js regenWalls): joins, heights that
 * follow a level, quantities.
 */
import { writeAssembly, validateAssembly, assertAssembliesEditable } from './wall-assemblies.js';
import { readMaterials } from './project-materials.js';
import { syncWallDimensions } from './wall-dimensions.js';
import { ModelWriter } from './model-write.js';
import { readLevels, addLevel, setLevel } from './model-levels.js';
import { addWall, updateWall, deleteWalls, regenWalls, readWalls, wallLevelsPassed, regenAttached, wallShapeHooks } from './model-walls.js';
import { addOpening, updateOpening, deleteOpenings, readOpenings, regenOpenings, adoptLibraryOpenings } from './model-openings.js';
import { syncDerived, readDerived, storeyLoops, addFloor, addCeiling, addRoof, updateDerived, deleteDerived } from './model-slabs.js';
import { wallPath } from './model-tools.js';
import { val } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { readReportAs } from './report-as-core.js';   // 0.9 D8.12-C
import { syncResidential } from './res-follow.js';   // 0.5 part 4 track RC: wall framing follows its doors and windows
import { holdPlan } from './wall-tools.js';   // 0.9 WT.3 / WT.7: the Hold block (locks) after a wall change

/** Wrap a writing function as an op: a fresh writer on the editor's model, one journal. */
export function op(fn) {
  const seq = [];   // 0.7 BIM-FAM-SOLID: the GlobalIds a run makes are handed out again, in order, when Redo runs the op again (a size made by one step is found by the next)
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    let n = 0;
    const fresh = w.guid.bind(w);
    w.guid = () => { if (n < seq.length) return seq[n++]; const g = fresh(); seq.push(g); n++; return g; };
    return w.run(writer => {
      assertAssembliesEditable(writer); readMaterials(writer);
      const result = fn(writer);
      // 2026-11-02: a Library door / window standing where a wall now runs goes into it (placed first, the wall drawn after)
      const took = adoptLibraryOpenings(writer);
      if (took.length) afterOpenings(writer, took);
      syncWallDimensions(writer);
      return result;
    });
  };
}
const storeyId = (w, guid) => {
  const id = w.byGuid(guid);
  if (!id) throw Object.assign(new Error('model.err.nolevel'), { key: 'model.err.nolevel' });
  return id;
};
/** Fresh GlobalIds fixed into the op the first time it runs, so a redo makes the same elements again. */
const fix = (w, list) => { for (const s of list) if (!s.guid) s.guid = val(w.guid()); };
/** After doors / windows changed in these walls: the walls, then what follows them (RC: their framing). */
function afterOpenings(w, guids) {
  const walls = readWalls(w), storeys = new Set();
  for (const g of guids) { const x = walls.find((y) => y.guid === g); if (x) { regenWalls(w, x.storey, [g]); storeys.add(x.storey); } }
  for (const st of storeys) syncResidential(w, st);
}
/** Regenerate every storey's walls (after a level change: heights that follow a level). */
export function regenAll(w) {
  let n = 0;
  for (const l of readLevels(w)) { n += regenWalls(w, l.id).walls; syncDerived(w, l.id); }
  return n;
}
/** After walls changed on these storeys: joins, then rooms / floors / ceilings / roofs that follow them. */
function settle(w, storeys, force = null) {
  const set = new Set([...storeys].filter((s) => s !== null && s !== undefined));
  for (const s of set) { regenWalls(w, s, force); syncDerived(w, s); }
  // 0.7 BIM-MLWALL: a wall that runs up through a level closes that level's rooms, so the levels above a changed one are brought
  // up to date too when they hold rooms, floors or ceilings of their own or a wall now passes them (nothing else there can change)
  const levels = readLevels(w);
  if (levels.length > 1 && set.size) {
    const lowest = Math.min(...[...set].map((s) => levels.findIndex((l) => l.id === s)).filter((i) => i >= 0));
    if (Number.isFinite(lowest) && lowest < levels.length - 1) {
      const D = readDerived(w), walls = readWalls(w), have = new Set([...D.spaces, ...D.floors, ...D.ceilings].map((x) => x.storey));
      const passed = new Set();
      for (const x of walls) if (set.has(x.storey)) for (const l of wallLevelsPassed(x, levels)) passed.add(l.id);
      for (const l of levels.slice(lowest + 1)) if (!set.has(l.id) && (passed.has(l.id) || have.has(l.id))) syncDerived(w, l.id);
    }
  }
  regenAttached(w);   // 0.9 WT.6: walls attached to a roof, slab or ceiling follow it once those are up to date
}
/** For ops written elsewhere (model-trim.js, 0.6): the same follow-ups as this file's own wall changes. */
export const afterWallMoveFor = (w, before, ops0, guids) => afterWallMove(w, before, ops0, guids, false);
export const settleFor = (w, storeys, force = null) => settle(w, storeys, force);

/** Edit a project type and all its instances as one undoable transaction. */
export function saveWallAssembly(input, assign = []) {
  const recipe = validateAssembly(input); let typeGuid = null;
  return op(w => {
    const before = readWalls(w), openings = readOpenings(w, null, before);
    typeGuid ||= val(w.guid());
    const result = writeAssembly(w, recipe, typeGuid);
    const affected = before.filter(x => x.typeKey === recipe.key || assign.includes(x.guid));
    for (const wall of affected) updateWall(w, wall.guid, { typeKey: recipe.key, refreshType: true }, { carryJoined: false, previousType: wall.assembly });
    const guids = rejoinAssemblyCorners(w, before, affected.map(x => x.guid));
    afterWallMove(w, before, openings, guids, true);
    settle(w, affected.map(x => x.storey));
    return { id: affected[0]?.id ?? null, ids: affected.map(x => x.id), typeId: result.id };
  });
}

// Intersect the final axes, after every instance has its new core offset. Intersecting
// against a neighbour's old axis during each update would leave an open L corner.
function rejoinAssemblyCorners(w, before, changed) {
  const changedSet = new Set(changed), after = new Map(readWalls(w).map(x => [x.guid, x]));
  const buckets = new Map(), nodes = [];
  for (const wall of before) for (const end of ['a', 'b']) {
    const p = wall[end], x = Math.floor(p[0]), y = Math.floor(p[1]);
    let node = null;
    for (let dx = -1; dx <= 1 && !node; dx++) for (let dy = -1; dy <= 1 && !node; dy++) {
      node = (buckets.get(`${wall.storey}:${x+dx}:${y+dy}`) || []).find(n => Math.hypot(n.p[0]-p[0],n.p[1]-p[1]) <= 1);
    }
    if (!node) {
      node = { p, ends: [] }; nodes.push(node);
      const key = `${wall.storey}:${x}:${y}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(node);
    }
    node.ends.push({ wall, end });
  }
  const edits = new Map();
  for (const node of nodes) {
    if (node.ends.length !== 2 || !node.ends.some(e => changedSet.has(e.wall.guid))) continue;
    const [a, b] = node.ends, A = after.get(a.wall.guid), B = after.get(b.wall.guid);
    if (!A || !B || A.bulge || B.bulge) continue;
    const u = [A.b[0]-A.a[0],A.b[1]-A.a[1]], v = [B.b[0]-B.a[0],B.b[1]-B.a[1]];
    const cross = u[0]*v[1]-u[1]*v[0];
    if (Math.abs(cross) < 1e-9 * A.len * B.len) continue;
    const s = ((B.a[0]-A.a[0])*v[1]-(B.a[1]-A.a[1])*v[0])/cross;
    const p = [A.a[0]+s*u[0],A.a[1]+s*u[1]];
    if (Math.hypot(p[0]-node.p[0],p[1]-node.p[1]) > 4*Math.max(A.t,B.t)) continue;
    for (const e of [a,b]) {
      if (!edits.has(e.wall.guid)) edits.set(e.wall.guid, {});
      edits.get(e.wall.guid)[e.end] = p;
    }
  }
  for (const [guid, ch] of edits) { updateWall(w, guid, ch, { carryJoined: false }); changedSet.add(guid); }
  return [...changedSet];
}

/** Draw walls on a storey: segs [{ a, b }] in its plan axes (mm). One undo step for all of them. */
export function drawWalls({ storey, segs, typeKey, baseOffset = 0, topLevel = '', topOffset = 0, height = 0, extSide = 'left' }) {
  const list = segs.map((s) => ({ ...s }));
  return op((w) => {
    fix(w, list);
    const st = storeyId(w, storey);
    const made = new Map();
    for (const s of list) {
      const r = addWall(w, { storey: st, a: s.a, b: s.b, typeKey: s.typeKey || typeKey, baseOffset, topLevel, topOffset, height, extSide: s.extSide || extSide, guid: s.guid, bulge: s.bulge || 0, justification: s.justification || 'center' });   // 0.6 round 2: curved walls, the location line
      made.set(r.guid, r.id);
    }
    settle(w, [st]);
    const ids = [...made.values()];
    return { id: ids[ids.length - 1], ids, made };
  });
}

/**
 * 0.7 SU.461 (a floor plan copied up to the next floor): everything the Draw tools made on level `from` — walls with their doors and
 * windows, and the floors and ceilings (not roofs: they belong to the top) — drawn again on level `to` (GlobalIds), in one undo step.
 * A wall that follows the level above follows the level the same number of levels above `to` (a fixed height stays); rooms there
 * appear by themselves. → { id, ids, made, counts: { walls, openings, floors, ceilings } }. Copying onto a level that already has
 * walls adds to them (the page asks first).
 */
export function copyLevel({ from, to, newLevel: spec = null }) {
  const keep = new Map();   // (to = null and newLevel { name, elevation, height }: the level is made in the same step)   // source GlobalId → the GlobalIds its copy gets, fixed the first time so a redo makes the same elements again
  const fresh = (w, key, n = 1) => { if (!keep.has(key)) keep.set(key, Array.from({ length: n }, () => val(w.guid()))); return keep.get(key); };
  return op((w) => {
    const src = storeyId(w, from);
    let dst;
    if (to) dst = storeyId(w, to);
    else { const [lg] = fresh(w, 'new-level'); dst = addLevel(w, { ...spec, guid: lg }).id; }
    if (src === dst) throw Object.assign(new Error('model.err.copysame'), { key: 'model.err.copysame' });
    const levels = readLevels(w), si = levels.findIndex((l) => l.id === src), di = levels.findIndex((l) => l.id === dst);
    const walls = readWalls(w, src);
    if (!walls.length) throw Object.assign(new Error('model.err.copynone'), { key: 'model.err.copynone' });
    const made = new Map(), map = new Map();
    for (const x of walls) {
      const top = x.topLevel ? levels.findIndex((l) => l.guid === x.topLevel) : -1;
      const nt = top >= 0 ? levels[top + (di - si)] : null;
      const [g] = fresh(w, x.guid);
      const r = addWall(w, { storey: dst, a: x.a, b: x.b, typeKey: x.typeKey, baseOffset: x.baseOffset, topLevel: nt ? nt.guid : '', topOffset: nt ? x.topOffset : 0, height: nt ? 0 : x.height, extSide: x.extSide, guid: g, bulge: x.bulge || 0, justification: x.justification });
      made.set(r.guid, r.id); map.set(x.guid, r.guid);
    }
    let openings = 0;
    for (const o of readOpenings(w, src, walls)) {
      const [g, og] = fresh(w, o.guid, 2);
      const r = addOpening(w, { wall: map.get(o.wallGuid), typeKey: o.typeKey, family: o.family, values: o.values, sizeName: o.sizeName, offset: o.offset, width: o.width, height: o.height, sill: o.sill, hand: o.hand, face: o.face, guid: g, openingGuid: og });
      made.set(r.guid, r.id); openings++;
    }
    settle(w, [dst]);
    afterOpenings(w, [...map.values()]);
    const D = readDerived(w);
    let floors = 0, ceilings = 0;
    for (const f of D.floors.filter((x) => x.storey === src)) { const [g] = fresh(w, f.guid); const r = addFloor(w, { storey: dst, seed: f.seed, mode: f.mode, kind: f.kind, thickness: f.thickness, offset: f.offset, guid: g }); made.set(r.guid, r.id); floors++; }
    for (const c of D.ceilings.filter((x) => x.storey === src)) { const [g] = fresh(w, c.guid); const r = addCeiling(w, { storey: dst, seed: c.seed, mode: c.mode, height: c.height, thickness: c.thickness, guid: g }); made.set(r.guid, r.id); ceilings++; }
    const ids = [...made.values()];
    return { id: ids[ids.length - 1], ids, made, counts: { walls: walls.length, openings, floors, ceilings } };
  });
}

/** Extend a face-referenced chain and settle its corners in the same undo step. */
export function drawWallPath({ storey, points, guids, typeKey, thickness, reference, extSide, axisOffset, ...top }) {
  const segs = wallPath(points, thickness, reference, extSide, axisOffset);
  let existing = null;
  return op((w) => {
    existing ??= guids.slice();
    const st = storeyId(w, storey), made = new Map();
    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i];
      if (existing[i]) updateWall(w, existing[i], { a: seg.a, b: seg.b, extSide }, { carryJoined: false });
      else {
        if (!seg.guid) seg.guid = val(w.guid());
        const r = addWall(w, { storey: st, ...seg, typeKey, extSide, ...top });
        made.set(r.guid, r.id);
      }
    }
    settle(w, [st]);
    return { id: [...made.values()].at(-1), made };
  });
}

/** Change one wall (see model-walls.js updateWall); walls joined at a moved end move with it, and what they host keeps
 *  its place (or fits itself in again). */
export function changeWall(guid, changes, opts = {}) {
  return op((w) => {
    const before = readWalls(w), wall = before.find((x) => x.guid === guid);
    if (!wall) throw Object.assign(new Error('model.err.nowall'), { key: 'model.err.nowall' });
    const ops0 = readOpenings(w, null, before);
    const r = updateWall(w, guid, changes, opts);
    // 0.9 WT.3 / WT.7: a wall that moved keeps its locks (the walls held to it follow; a lock it would break refuses the change)
    if (changes.a || changes.b || changes.typeKey || changes.justification || changes.extSide) {
      const after = readWalls(w), done = new Map(r.guids.map((g) => [g, after.find((x) => x.guid === g)]).filter(([, x]) => x).map(([g, x]) => [g, { a: x.a, b: x.b }]));
      const more = holdPlan(w, before, done, [guid]);
      for (const [g, m] of more) if (!done.has(g)) { updateWall(w, g, { a: m.a, b: m.b }, { carryJoined: false }); r.guids.push(g); }
    }
    afterWallMove(w, before, ops0, r.guids, !!changes.typeKey);
    settle(w, [wall.storey], r.guids);
    return { id: w.byGuid(guid), ids: [w.byGuid(guid)] };
  });
}
/**
 * 0.9 FX.22 (wall-square.js): a change worked out on the level's walls, written as one undo step. plan(walls) → Map guid →
 * { a, b }. Each wall is written with carryJoined off: the plan names every wall that moves. An empty plan changes nothing.
 */
export function changeWallsBy(guid, plan) {
  return op((w) => {
    const before = readWalls(w), wall = before.find((x) => x.guid === guid);
    if (!wall) throw Object.assign(new Error('model.err.nowall'), { key: 'model.err.nowall' });
    const moves = holdPlan(w, before, plan(before), [guid]), guids = [...moves.keys()], ops0 = readOpenings(w, null, before);   // 0.9 WT.3: the locks hold
    for (const g of guids) updateWall(w, g, moves.get(g), { carryJoined: false });
    if (guids.length) { afterWallMove(w, before, ops0, guids, false); settle(w, [wall.storey], guids); }
    return { id: w.byGuid(guid), ids: [w.byGuid(guid)] };
  });
}
/** Doors and windows of walls that moved or changed: same place in the world when a wall end slid along its line; made
 *  again for a new thickness; fitted into a shorter wall (or the change is refused: model.err.nofit). */
export function afterWallMove(w, before, ops0, guids, rethick) {
  const after = readWalls(w);
  for (const g of guids) {
    const A = before.find((x) => x.guid === g), B = after.find((x) => x.guid === g);
    if (!A || !B) continue;
    const mine = ops0.filter((o) => o.wallGuid === g);
    if (!mine.length) continue;
    const uA = [(A.b[0] - A.a[0]) / A.len, (A.b[1] - A.a[1]) / A.len], uB = [(B.b[0] - B.a[0]) / B.len, (B.b[1] - B.a[1]) / B.len];
    const sameLine = Math.abs(uA[0] * uB[1] - uA[1] * uB[0]) < 1e-9 && uA[0] * uB[0] + uA[1] * uB[1] > 0;
    const shift = sameLine ? (B.a[0] - A.a[0]) * uA[0] + (B.a[1] - A.a[1]) * uA[1] : 0;
    const moved = Math.abs(shift) > 1e-6 || Math.abs(A.len - B.len) > 1e-6 || Math.abs(A.t - B.t) > 1e-6 || rethick;
    if (!moved) continue;
    for (const o of mine) updateOpening(w, o.guid, { offset: o.offset - shift });
  }
  wallShapeHooks()?.afterMove?.(w, before, after, guids);   // 0.9 WT.6: wall openings (no door or window) keep their place too
}

/** Change several walls the same way (Properties with many picked; "Change type…"). */
export function changeWalls(guids, changes) {
  return op((w) => {
    const all = readWalls(w), ops0 = readOpenings(w, null, all);
    const storeys = new Set();
    for (const g of guids) {
      const wall = all.find((x) => x.guid === g);
      if (!wall) continue;
      updateWall(w, g, changes, { carryJoined: false });
      storeys.add(wall.storey);
    }
    afterWallMove(w, all, ops0, guids, !!changes.typeKey);
    settle(w, storeys, guids);
    const ids = guids.map((g) => w.byGuid(g)).filter(Boolean);
    return { id: ids[0] ?? null, ids };
  });
}

/** Put a door or window in a wall: { wall (GlobalId), typeKey, offset, width, height, sill, hand, face }. */
export function placeOpening(spec) {
  const s = { ...spec };
  return op((w) => {
    if (!s.guid) { s.guid = val(w.guid()); s.openingGuid = val(w.guid()); }
    const r = addOpening(w, s);
    afterOpenings(w, [s.wall]);
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id], [r.opening, w.byGuid(r.opening)]]) };
  });
}
/**
 * 2026-11-02: a Library door or window (an item of kind door | window) into a wall: its type, made once per item version with its
 * mesh and frame (IfcPlacer.typeFor), then the opening as for any door (fixed size: the item's). `placeOpts` = the Library's
 * { library, sha256, sourceFile } for the type's CadCraft_LibraryItem set.
 */
export function placeLibraryOpening(item, spec, placeOpts = {}) {
  const s = { ...spec };
  return op((w) => {
    if (!s.guid) { s.guid = val(w.guid()); s.openingGuid = val(w.guid()); }
    const { id: typeId } = w.typeFor(item, placeOpts);
    const r = addOpening(w, { ...s, library: { typeId } });
    afterOpenings(w, [s.wall]);
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id], [r.opening, w.byGuid(r.opening)]]) };
  });
}
/** Move a door or window along its wall (or to another wall), resize it, flip it, change its type. */
export function changeOpening(guid, changes) {
  return op((w) => {
    const r = updateOpening(w, guid, changes);
    afterOpenings(w, r.walls);
    const id = w.byGuid(guid);
    return { id, ids: [id] };
  });
}
/** The same change to several doors / windows (Properties with many picked): one undo step. */
export function changeOpenings(guids, changes) {
  return op((w) => {
    const hosts = new Set();
    for (const g of guids) for (const h of updateOpening(w, g, changes).walls) hosts.add(h);
    afterOpenings(w, [...hosts]);
    const ids = guids.map((g) => w.byGuid(g)).filter(Boolean);
    return { id: ids[0] ?? null, ids };
  });
}

/** Delete doors and windows; their walls close up. */
export function removeOpenings(guids) {
  return op((w) => {
    const r = deleteOpenings(w, guids);
    afterOpenings(w, r.walls);
    return { id: null, ids: [] };
  });
}
/** Delete what is picked of the tools' elements: walls (with what they host) and doors / windows, as one change. */
export function removeElements({ walls = [], openings = [], derived = [] }) {
  return op((w) => {
    const storeys = new Set(), hosts = new Set();
    if (derived.length) deleteDerived(w, derived);
    if (openings.length) for (const g of deleteOpenings(w, openings).walls) hosts.add(g);
    if (walls.length) for (const s of deleteWalls(w, walls).storeys) storeys.add(s);
    const all = readWalls(w);
    for (const g of hosts) { const x = all.find((y) => y.guid === g); if (x) storeys.add(x.storey); }
    settle(w, storeys, [...hosts]);
    return { id: null, ids: [] };
  });
}

/** A floor (or a ceiling) for the room at `seed` — or under the whole building — on a level (GlobalId). */
export function placeFloor(spec) {
  const s = { ...spec };
  return op((w) => {
    if (!s.guid) s.guid = val(w.guid());
    const r = addFloor(w, { ...s, storey: storeyId(w, s.storey) });
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) };
  });
}
export function placeCeiling(spec) {
  const s = { ...spec };
  return op((w) => {
    if (!s.guid) s.guid = val(w.guid());
    const r = addCeiling(w, { ...s, storey: storeyId(w, s.storey) });
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) };
  });
}
/** A roof over the building whose walls are on `storey` (GlobalId), around the point `seed`. */
export function placeRoof(spec) {
  const s = { ...spec };
  return op((w) => {
    if (!s.guid) s.guid = val(w.guid());
    const r = addRoof(w, { ...s, storey: storeyId(w, s.storey) });
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) };
  });
}
/** Change a room's name or number, a floor's / ceiling's / roof's numbers; the shape is made again. */
export function changeDerived(guids, changes) {
  return op((w) => {
    const storeys = new Set();
    for (const g of [].concat(guids)) { const r = updateDerived(w, g, changes); if (r.storey !== null) storeys.add(r.storey); }
    for (const st of storeys) syncDerived(w, st);
    regenAttached(w);   // 0.9 WT.6: a changed roof, floor or ceiling takes the walls attached to it along
    const ids = [].concat(guids).map((g) => w.byGuid(g)).filter(Boolean);
    return { id: ids[0] ?? null, ids };
  });
}

/** Delete walls with their openings, doors and windows; the walls they joined are cleaned up again. */
export function removeWalls(guids) {
  return op((w) => {
    const r = deleteWalls(w, guids);
    settle(w, r.storeys);
    return { id: null, ids: [] };
  });
}

/** A new level (storey) in the building. */
export function newLevel({ name, elevation, height }) {
  const fixed = { guid: null };
  return op((w) => {
    if (!fixed.guid) fixed.guid = val(w.guid());
    const r = addLevel(w, { name, elevation, height, guid: fixed.guid });
    regenAll(w);
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) };
  });
}

/**
 * 0.9 DC.119: a new level below the lowest one (a basement, a footing level). Its top meets the lowest level's floor: elevation = lowest
 * elevation - height, so the elevation is negative when the lowest level is at 0. Nothing else moves. The name is "Level -n" (the next free);
 * the height is the one asked for, else the lowest level's. One undo step; redo makes the same level (the GlobalId is fixed the first time).
 */
export function newLevelBelow({ name, height } = {}) {
  const fixed = { guid: null };
  return op((w) => {
    const levels = readLevels(w);
    const low = levels[0];
    const h = height > 0 ? height : (low ? low.height : 3000);
    const used = new Set(levels.map((l) => l.name));
    let n = levels.filter((l) => l.elevation < -0.5).length + 1, nm = name;
    if (!nm) { nm = tr('new.level.below', { n }); while (used.has(nm)) nm = tr('new.level.below', { n: ++n }); }
    if (!fixed.guid) fixed.guid = val(w.guid());
    const r = addLevel(w, { name: nm, elevation: (low ? low.elevation : 0) - h, height: h, guid: fixed.guid });
    regenAll(w);
    return { id: r.id, ids: [r.id], made: new Map([[r.guid, r.id]]) };
  });
}

/** Rename, move or change the height of a level (levels above move with it by default); walls follow. */
export function changeLevel(guid, changes) {
  return op((w) => {
    const r = setLevel(w, guid, changes);
    regenAll(w);
    return { id: w.byGuid(guid), ids: r.moved };
  });
}

/** For the UI: the levels and walls now (no change). */
export function snapshotModel(ed) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid);
  const walls = readWalls(w);
  let reported = null;
  try { reported = readReportAs(ed.api, ed.mid); } catch (e) { reported = null; }   // 0.9 D8.12-C: elements reported as another class
  return { levels: readLevels(w), walls, openings: readOpenings(w, null, walls), derived: readDerived(w), unitMm: w.unitMm, v4: w.v4, reported };
}
/** The rooms and building outlines of a level, from its walls now (the plan's labels and the tools' hover). */
export function loopsOf(ed, storey) { return storeyLoops(new ModelWriter(ed.W, ed.api, ed.mid), storey); }
