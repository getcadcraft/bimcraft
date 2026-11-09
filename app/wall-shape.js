/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-shape.js — BimCraft's adapter for the wall Shape tools (0.9 WT.6, wall tool spec page 7; session walls-09, design in
 * docs/0.9-sessions/walls-09.md § WT.6 design). The geometry is lib/walls/shape.js (copied to dev/walls/ by tools/walls/sync.mjs);
 * this file reads and writes the IFC. No DOM: `node bin/test-bimcraft.mjs --wallshape` runs it in Node.
 *
 * On the wall (CadCraft_Wall, written only while set; '' clears):
 *   Profile    IFCTEXT  JSON { top: [[s, z]...], bottom: [[s, z]...] }  the wall's elevation outline: mm along it from its start, mm
 *                       above its base; a top line, a bottom line or both
 *   AttachTop  IFCIDENTIFIER  the GlobalId of a roof, floor slab or ceiling whose underside the wall's top follows
 *   AttachBase IFCIDENTIFIER  the GlobalId of a floor slab or ceiling whose top face the wall's base follows
 *   Slant      IFCLABEL  "deg" (single: both faces lean the same way) or "left,right" (double), from vertical, + to the wall's left
 *   ShapeKey   IFCIDENTIFIER  what the body was made from (so a regeneration that changes nothing writes nothing)
 * A shaped wall's Body is an IfcFacetedBrep ('Brep') of the joined plan outline with a top and base per vertex; an unshaped wall keeps its
 * extrusion. Curved walls are refused (wshape.err.curved).
 *
 * Wall openings (a hole with no door or window): IfcOpeningElement voiding the wall, no filling, a box through the wall, placed in
 * the wall's axes like a door's opening; CadCraft_Opening Width, Height, Kind = 'wallopening'.
 *
 *   readShape(wall) → { profile, attachTop, attachBase, slant }       (parsed; nulls / '' when not set)
 *   attachChoices(w, wall) → [{ guid, kind: 'roof'|'floor'|'ceiling', label, top: bool, base: bool }]
 *   readWallOpenings(w, walls?) → [{ id, guid, wallGuid, storey, offset, width, height, sill }]
 *   ops (IfcEditor.modelChange, one undo step each): setWallShape(guid, { profile, attachTop, attachBase, slant }),
 *     addWallOpening({ wall, offset, width, height, sill }), changeWallOpening(guid, { offset, width, height, sill }),
 *     removeWallOpenings(guids)
 * Errors (lang keys): wshape.err.curved, wshape.err.profile, wshape.err.low, wshape.err.nofit, wshape.err.attach.
 */
import { readWalls, setWallShapeHooks, regenWalls, writeWallShape, WALL_PSET } from './model-walls.js';
import { op } from './model-ops.js';
import { readDerived, storeyLoops } from './model-slabs.js';
import { readLevels } from './model-levels.js';
import { loopAt } from './model-rooms.js';
import { edgeKinds, roofGeometry, heightAt, ROOF_DEFAULTS } from './res-roof.js';
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';
import { round } from './model-write.js';
import { t as tr } from './i18n.js';
import { parseShape, hasShape, shapeBody, profileAt, lineBreaks, inPoly, checkProfile } from './walls/shape.js';

export const OPENING_PSET = 'CadCraft_Opening';
export const WALL_OPENING = 'wallopening';
const PROUD = 10;
const fail = (key) => { throw Object.assign(new Error(key), { key }); };
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/** The wall's shape settings, parsed (readWalls carries them raw in wall.shape). */
export function readShape(wall) {
  const raw = wall?.shape;
  if (!raw) return { profile: null, attachTop: '', attachBase: '', slant: null };
  const sl = String(raw.slant || '').split(',').map((x) => Number(x.trim())).filter((x, i, a) => a.length && Number.isFinite(x));
  return parseShape(JSON.stringify({ profile: raw.profile ? safe(raw.profile) : null, attachTop: raw.attachTop || '', attachBase: raw.attachBase || '', slant: sl.length ? sl : null }));
}
const safe = (s) => { try { return JSON.parse(s); } catch (e) { return null; } };

// --------------------------------------------------------------------------------------------------------- attached surfaces
/** The surface an element gives: { frame (storey id), under(q) → z | null, over(q) → z | null, polys } in that storey's plan. */
function surfaceOf(w, guid, cache) {
  cache.surf ||= new Map();
  if (cache.surf.has(guid)) return cache.surf.get(guid);
  cache.D ||= readDerived(w);
  cache.levels ||= readLevels(w);
  cache.loops ||= new Map();
  const loops = (st) => { if (!cache.loops.has(st)) cache.loops.set(st, storeyLoops(w, st)); return cache.loops.get(st); };
  const D = cache.D;
  let s = null;
  const r = D.roofs.find((x) => x.guid === guid);
  if (r) {
    const wallsLv = cache.levels.find((l) => l.guid === r.walls);
    const L = wallsLv && loops(wallsLv.id), outline = L && loopAt(L.outlines, r.seed);
    if (outline) {
      const top = L.walls.reduce((m, x) => Math.max(m, x.baseOffset + x.height), 0) || wallsLv.height;
      const kinds = edgeKinds(outline.poly, L.walls, r), plate = Number.isFinite(r.plate) && r.plate > 0 ? r.plate : top;
      const plan = roofGeometry(outline.poly, kinds, { thickness: r.thickness, plate, fascia: Number.isFinite(r.fascia) ? r.fascia : ROOF_DEFAULTS.fascia, fasciaT: ROOF_DEFAULTS.fasciaT, soffit: r.soffit !== false });
      if (!plan.error) s = { kind: 'roof', frame: wallsLv.id, under: (q) => heightAt(plan, q), over: () => null, polys: plan.faces.map((f) => f.poly) };
    }
  }
  const f = !s && D.floors.find((x) => x.guid === guid);
  if (f) {
    const loop = loopNear(f.mode === 'building' ? loops(f.storey).outlines : loops(f.storey).rooms, f.seed);
    if (loop) s = { kind: 'floor', frame: f.storey, under: (q) => (inPoly(q, loop.poly) ? f.offset - f.thickness : null), over: (q) => (inPoly(q, loop.poly) ? f.offset : null), polys: [loop.poly] };
  }
  const c = !s && D.ceilings.find((x) => x.guid === guid);
  if (c) {
    const loop = loopNear(c.mode === 'building' ? loops(c.storey).outlines : loops(c.storey).rooms, c.seed);
    if (loop) s = { kind: 'ceiling', frame: c.storey, under: (q) => (inPoly(q, loop.poly) ? c.height : null), over: (q) => (inPoly(q, loop.poly) ? c.height + c.thickness : null), polys: [loop.poly] };
  }
  cache.surf.set(guid, s);
  return s;
}
/** The loop a slab was made for: by its seed, else (a seed that fell on a free-standing wall inside the room) the smallest loop round it. */
function loopNear(list, seed) {
  return loopAt(list, seed) || list.filter((l) => inPoly(seed, l.poly)).sort((x, y) => Math.abs(x.area || 0) - Math.abs(y.area || 0))[0] || null;
}
/** The surface as the wall sees it: z(p) in the wall's own heights (0 at its base) for a point of its storey's plan, and the breaks. */
function surfaceForWall(w, wall, s, which) {
  const Mw = w.storeyWorld(wall.storey), Mt = w.storeyWorld(s.frame);
  const toT = mul4(inv4(Mt), Mw), fromT = mul4(inv4(Mw), Mt);
  const fn = which === 'top' ? s.under : s.over;
  return {
    z: (p) => { const q = apply4(toT, p[0], p[1], 0), z = fn([q[0], q[1]]); return z === null || z === undefined ? null : apply4(fromT, q[0], q[1], z)[2] - wall.baseOffset; },
    polys: s.polys.map((poly) => poly.map((q) => { const r = apply4(fromT, q[0], q[1], 0); return [r[0], r[1]]; })),
  };
}

export function attachChoices(w, wall) {
  const D = readDerived(w), levels = readLevels(w), name = (id) => levels.find((l) => l.id === id)?.name || '';
  const out = [];
  for (const r of D.roofs) out.push({ guid: r.guid, kind: 'roof', label: tr('model.roof') + ' (' + name(levels.find((l) => l.guid === r.walls)?.id) + ')', top: true, base: false });
  for (const f of D.floors) out.push({ guid: f.guid, kind: 'floor', label: tr('model.floor.' + (f.kind || 'wood')) + ' (' + name(f.storey) + ')', top: true, base: true });
  for (const c of D.ceilings) out.push({ guid: c.guid, kind: 'ceiling', label: tr('model.ceiling') + ' (' + name(c.storey) + ')', top: true, base: true });
  return out;
}

// --------------------------------------------------------------------------------------------------------------- the body
function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36) + s.length.toString(36); }

/** Work the shaped body out for a wall (plan mm, its own heights): → shapeBody's result. Throws wshape.err.low. */
export function bodyFor(w, wall, poly, cache = {}) {
  const sh = readShape(wall), breaks = [];
  const L = dist(wall.a, wall.b), u = [(wall.b[0] - wall.a[0]) / L, (wall.b[1] - wall.a[1]) / L];
  const ownTop = wall.height;
  const top = sh.profile?.top, bot = sh.profile?.bottom;
  for (const line of [top, bot]) if (line) for (const q of line) breaks.push(q[0]);
  const at = sh.attachTop ? surfaceOf(w, sh.attachTop, cache) : null, ab = sh.attachBase ? surfaceOf(w, sh.attachBase, cache) : null;
  const AT = at ? surfaceForWall(w, wall, at, 'top') : null, AB = ab ? surfaceForWall(w, wall, ab, 'base') : null;
  for (const S of [AT, AB]) if (S) breaks.push(...lineBreaks(wall, S.polys));
  const topAt = (p, s) => {
    let z = top ? profileAt(top, s) : ownTop;
    if (AT) { const a = AT.z(p); if (a !== null && (!top || a < z)) z = a; }
    return z;
  };
  const baseAt = (p, s) => {
    let z = bot ? profileAt(bot, s) : 0;
    if (AB) { const a = AB.z(p); if (a !== null && (!bot || a > z)) z = a; }
    return z;
  };
  void u;
  return shapeBody(wall, poly, { topAt, baseAt, breaks, slant: sh.slant });
}

function writeShaped(w, wall, poly, host, cache, forced) {
  const sh = readShape(wall);
  if (!hasShape(sh)) { writeWallShape(w, wall, poly, host); return true; }
  const body = bodyFor(w, wall, poly, cache);
  const ang = Math.atan2(wall.b[1] - wall.a[1], wall.b[0] - wall.a[0]), c = Math.cos(ang), s = Math.sin(ang);
  const local = body.verts.map(([x, y, z]) => [(x - wall.a[0]) * c + (y - wall.a[1]) * s, -(x - wall.a[0]) * s + (y - wall.a[1]) * c, z]);
  const opens = (host.voids.get(wall.id) || []).map((op0) => { const q = w.readPset(op0, OPENING_PSET); return q ? [Number(q.Width) * w.unitMm, Number(q.Height) * w.unitMm] : null; }).filter(Boolean);
  const key = hash(JSON.stringify([local.map((p) => p.map((v) => Math.round(v * 100))), body.faces, opens.map((o) => o.map((v) => Math.round(v))), round(wall.len, 2), round(wall.t, 2)]));
  if (!forced && w.readPset(wall.id, WALL_PSET)?.ShapeKey === key && isBrep(w, wall.id)) return false;
  const P = local.map(([x, y, z]) => w.H(w.point3(round(w.u(x)), round(w.u(y)), round(w.u(z)))));
  const faces = body.faces.map((f) => w.H(w.make('IFCFACE', [w.H(w.make('IFCFACEOUTERBOUND', w.H(w.make('IFCPOLYLOOP', f.map((i) => P[i]))), w.T('IFCBOOLEAN', true)))])));
  const brep = w.make('IFCFACETEDBREP', w.H(w.make('IFCCLOSEDSHELL', faces)));
  const axis = w.rep('axis', 'Axis', 'Curve2D', [w.polyline2([[0, 0], [wall.len, 0]])]);
  w.setShape(wall.id, [axis, w.rep('body', 'Body', 'Brep', [brep])]);
  let openArea = 0, openVol = 0;
  for (const [ow, oh] of opens) if (ow > 0 && oh > 0) { openArea += ow * oh; openVol += ow * oh * wall.t; }
  const tops = body.verts.slice(body.ring).map((v) => v[2]), bases = body.verts.slice(0, body.ring).map((v) => v[2]);
  const H = Math.max(...tops) - Math.min(...bases);
  w.upsertQto(wall.id, 'Qto_WallBaseQuantities', [['Length', 'length', wall.len], ['Width', 'length', wall.t], ['Height', 'length', H],
    ['GrossFootprintArea', 'area', body.footArea], ['GrossSideArea', 'area', body.sideArea], ['NetSideArea', 'area', Math.max(0, body.sideArea - openArea)],
    ['GrossVolume', 'volume', body.volume], ['NetVolume', 'volume', Math.max(0, body.volume - openVol)]]);
  w.upsertPset(wall.id, WALL_PSET, [['Length', 'IFCPOSITIVELENGTHMEASURE', round(w.u(wall.len))], ['Thickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(wall.t))], ['ShapeKey', 'IFCIDENTIFIER', key]]);
  if (sh.slant) for (const o of readWallOpenings(w, [wall])) writeOpeningBody(w, o.id, wall, o);   // their boxes reach through the leaning faces
  return true;
}
function isBrep(w, id) {
  const g = (x) => (x ? w.api.GetLine(w.mid, x.value ?? x, false) : null);
  const sh = g(w.api.GetLine(w.mid, id, false)?.Representation);
  return !!(sh?.Representations || []).some((h) => val(g(h)?.RepresentationType) === 'Brep');
}

// ----------------------------------------------------------------------------------------------------------- wall openings
export function readWallOpenings(w, walls = readWalls(w)) {
  const out = [], R = w.hostIndex(), byId = new Map(walls.map((x) => [x.id, x]));
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCOPENINGELEMENT'); } catch (e) { return out; }
  for (const id of list) {
    const ps = w.readPset(id, OPENING_PSET);
    if (!ps || ps.Kind !== WALL_OPENING) continue;
    const wall = byId.get(R.voidHost.get(id));
    if (!wall) continue;
    const line = w.api.GetLine(w.mid, id, false), M = w.relMatrix(wall.lp, line.ObjectPlacement.value);
    out.push({ id, guid: val(line.GlobalId), wall: wall.id, wallGuid: wall.guid, storey: wall.storey, offset: M[12], width: Number(ps.Width) * w.unitMm, height: Number(ps.Height) * w.unitMm, sill: M[14] + wall.baseOffset, lp: line.ObjectPlacement.value });
  }
  return out;
}
function checkOpening(wall, o) {
  if (!(o.width >= 50 && o.height >= 50) || !Number.isFinite(o.offset) || !Number.isFinite(o.sill)) fail('wshape.err.nofit');
  if (o.offset < -0.5 || o.offset + o.width > wall.len + 0.5 || o.sill - wall.baseOffset < -0.5) fail('wshape.err.nofit');
  if (!wall.shape && o.sill - wall.baseOffset + o.height > wall.height + 0.5) fail('wshape.err.nofit');
}
function writeOpeningBody(w, id, wall, o) {
  // through the whole wall: a slanted wall's faces move off by tan(slant) × height, so the box reaches that far too
  const sl = readShape(wall).slant, lean = sl ? Math.max(...sl.map((v) => Math.abs(Math.tan(v * Math.PI / 180)))) * (o.sill - wall.baseOffset + o.height) : 0;
  const d = wall.t / 2 + PROUD + lean;
  w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', [w.box(0, -d, 0, o.width, d, o.height)])]);
  w.upsertPset(id, OPENING_PSET, [['Width', 'IFCPOSITIVELENGTHMEASURE', round(w.u(o.width))], ['Height', 'IFCPOSITIVELENGTHMEASURE', round(w.u(o.height))], ['Kind', 'IFCIDENTIFIER', WALL_OPENING]]);
}
export function addWallOpening(spec) {
  const s = { ...spec };
  return op((w) => {
    const wall = readWalls(w).find((x) => x.guid === s.wall);
    if (!wall) fail('model.err.nowall');
    if (wall.bulge) fail('wshape.err.curved');
    const o = { offset: s.offset, width: s.width, height: s.height, sill: Number.isFinite(s.sill) ? s.sill : wall.baseOffset };
    checkOpening(wall, o);
    const g = val(w.guid());
    const lp = w.placeAt(wall.lp, o.offset, 0, o.sill - wall.baseOffset, 0);
    const id = w.make('IFCOPENINGELEMENT', g, w.ownerHistory(), w.L(tr('wshape.opening')), null, null, w.H(lp), null, null, ...(w.v4 ? ['OPENING'] : []));
    w.noteGuid(g, id);
    w.make('IFCRELVOIDSELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(wall.id), w.H(id));
    writeOpeningBody(w, id, wall, o);
    regenWalls(w, wall.storey, [wall.guid]);
    return { id, ids: [id], made: new Map([[g, id]]) };
  });
}
export function changeWallOpening(guid, ch) {
  const c = { ...ch };
  return op((w) => {
    const walls = readWalls(w), o0 = readWallOpenings(w, walls).find((x) => x.guid === guid);
    if (!o0) fail('wshape.err.nofit');
    const wall = walls.find((x) => x.guid === o0.wallGuid), o = { ...o0 };
    for (const k of ['offset', 'width', 'height', 'sill']) if (Number.isFinite(c[k])) o[k] = c[k];
    checkOpening(wall, o);
    w.movePlacement(o0.lp, o.offset, 0, o.sill - wall.baseOffset, 0);
    writeOpeningBody(w, o0.id, wall, o);
    regenWalls(w, wall.storey, [wall.guid]);
    return { id: o0.id, ids: [o0.id] };
  });
}
export function removeWallOpenings(guids) {
  return op((w) => {
    const walls = readWalls(w), list = readWallOpenings(w, walls).filter((x) => guids.includes(x.guid));
    if (list.length) w.dropProduct(list.map((x) => x.id));
    for (const st of new Set(list.map((x) => x.storey))) regenWalls(w, st, list.filter((x) => x.storey === st).map((x) => x.wallGuid));
    return { id: null, ids: [] };
  });
}

// ------------------------------------------------------------------------------------------------------------- the shape op
export function setWallShape(guid, changes) {
  const ch = structuredClone(changes);
  return op((w) => {
    const wall = readWalls(w).find((x) => x.guid === guid);
    if (!wall) fail('model.err.nowall');
    if (wall.bulge) fail('wshape.err.curved');
    const cur = readShape(wall), next = { ...cur };
    if ('profile' in ch) next.profile = ch.profile && (ch.profile.top || ch.profile.bottom) ? { top: ch.profile.top || null, bottom: ch.profile.bottom || null } : null;
    if ('attachTop' in ch) next.attachTop = ch.attachTop || '';
    if ('attachBase' in ch) next.attachBase = ch.attachBase || '';
    if ('slant' in ch) next.slant = Array.isArray(ch.slant) && ch.slant.some((v) => Math.abs(v) > 1e-9) ? ch.slant.map(Number) : null;
    if (next.profile) { checkProfile(next.profile.top, wall.len); checkProfile(next.profile.bottom, wall.len); }
    if (next.slant && !(next.slant.length <= 2 && next.slant.every((v) => Number.isFinite(v) && Math.abs(v) < 60))) fail('wshape.err.slant');
    const choices = new Map(attachChoices(w, wall).map((x) => [x.guid, x]));
    if (next.attachTop && !choices.get(next.attachTop)?.top) fail('wshape.err.attach');
    if (next.attachBase && !choices.get(next.attachBase)?.base) fail('wshape.err.attach');
    const pr = next.profile ? JSON.stringify({ ...(next.profile.top ? { top: next.profile.top } : {}), ...(next.profile.bottom ? { bottom: next.profile.bottom } : {}) }) : '';
    w.upsertPset(wall.id, WALL_PSET, [['Profile', 'IFCTEXT', pr], ['AttachTop', 'IFCIDENTIFIER', next.attachTop], ['AttachBase', 'IFCIDENTIFIER', next.attachBase], ['Slant', 'IFCLABEL', next.slant ? next.slant.join(',') : ''], ['ShapeKey', 'IFCIDENTIFIER', '']]);
    regenWalls(w, wall.storey, [guid]);
    return { id: wall.id, ids: [wall.id] };
  });
}

/** Wall openings keep their place in the world when their wall's start slides along its line (as doors do); one that no longer fits refuses the change. */
function afterMove(w, before, after, guids) {
  const mine = readWallOpenings(w, after).filter((o) => guids.includes(o.wallGuid));
  for (const o of mine) {
    const A = before.find((x) => x.guid === o.wallGuid), B = after.find((x) => x.guid === o.wallGuid);
    if (!A || !B) continue;
    const uA = [(A.b[0] - A.a[0]) / A.len, (A.b[1] - A.a[1]) / A.len], uB = [(B.b[0] - B.a[0]) / B.len, (B.b[1] - B.a[1]) / B.len];
    const same = Math.abs(uA[0] * uB[1] - uA[1] * uB[0]) < 1e-9 && uA[0] * uB[0] + uA[1] * uB[1] > 0;
    const shift = same ? (B.a[0] - A.a[0]) * uA[0] + (B.a[1] - A.a[1]) * uA[1] : 0;
    const off = o.offset - shift;
    if (Math.abs(shift) > 1e-6) w.movePlacement(o.lp, off, 0, o.sill - B.baseOffset, 0);
    if (off < -0.5 || off + o.width > B.len + 0.5) fail('model.err.nofit');
  }
}

setWallShapeHooks({ write: writeShaped, afterMove });
