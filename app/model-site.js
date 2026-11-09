/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-site.js — the IFC spatial structure as tools (0.6 DF.20, session `bim-draw`): the site from a drawn outline, the
 * building placed on the site, and levels added at heights or by splitting the building's height. No DOM:
 * bin/test-bimcraft.mjs --draw06 runs it in Node. Plan millimetres.
 *
 * The site is the IfcSite the building hangs under (IfcRelAggregates project → site → building). A file with a building and no
 * site gets one by itself (`ensureSite`: an IfcSite at the origin; the project's aggregation names the site instead of the
 * building, the site aggregates the building, and the building's placement becomes relative to the site's — nothing moves).
 * Its outline is a 'FootPrint' 'GeometricCurveSet' (a closed 2D polyline in the site's axes; another representation the site
 * already has is kept), Qto_SiteBaseQuantities (GrossPerimeter, GrossArea) and CadCraft_Site (Points).
 *
 *   readSite(w) → { id, guid, points (site mm) | [], building: { id, at: [x, y] (site mm), angle (°) } } | null
 *   siteToPlan(w, storey, pts) / planToSite(w, storey, pts)   a site outline ↔ a storey's plan (mm)
 *   setSiteOutline({ storey, points }) → op       the outline drawn on a level's plan (made the site's, in its axes)
 *   placeBuilding({ at, angle }) → op             the building's placement on the site: its origin at `at` (site mm), turned
 *                                                 `angle` degrees; everything in the building moves with it
 *   addLevels({ elevations, height }) → op        levels at these elevations (mm above the building's base, negative = below the lowest level; ones already
 *                                                 there skipped), named on from the last "Level n"; walls and what follows
 *                                                 them are made again (model-ops.js regenAll)
 *   splitLevels({ total, count }) → op            the building's height `total` split into `count` equal levels from its lowest
 *                                                 level up: levels there are moved (in order), missing ones added; levels past
 *                                                 `count` stay where they are
 *   Errors: model.err.site.shape, model.err.site.nobuilding, model.err.lv.none, model.err.lv.split.
 */
import { op, regenAll } from './model-ops.js';
import { readLevels, addLevel, setLevel } from './model-levels.js';
import { polyProblem } from './model-floors.js';
import { scaleT, round } from './model-write.js';
import { ids, val, inv4, mul4, apply4 } from './ifc-util.js';
import { t as tr } from './i18n.js';

export const SITE_PSET = 'CadCraft_Site';
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const I4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const worldMm = (w, lp) => (lp ? scaleT(w.api.GetWorldTransformMatrix(w.mid, lp), w.unitMm) : I4);
const ptsText = (p) => p.map((q) => round(q[0], 3) + ',' + round(q[1], 3)).join(';');
const ptsOf = (s) => String(s || '').split(';').map((x) => x.split(',').map(Number)).filter((q) => q.length === 2 && q.every(Number.isFinite));
const area = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return s / 2; };

function aggParent(w, child) {
  for (const rid of ids(w.api, w.mid, 'IFCRELAGGREGATES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if ((r.RelatedObjects || []).some((h) => h.value === child)) return { rel: rid, parent: r.RelatingObject?.value };
  }
  return null;
}
const building = (w) => ids(w.api, w.mid, 'IFCBUILDING')[0];
function siteOf(w) {
  const b = building(w);
  const p = b !== undefined ? aggParent(w, b) : null;
  if (p && /^IfcSite$/i.test(w.api.GetLine(w.mid, p.parent, false)?.constructor?.name || '')) return p.parent;
  return ids(w.api, w.mid, 'IFCSITE')[0] ?? null;
}

export function readSite(w) {
  const sid = siteOf(w);
  if (sid === null || sid === undefined) return null;
  const s = w.api.GetLine(w.mid, sid, false);
  const ps = w.readPset(sid, SITE_PSET);
  const points = ptsOf(ps?.Points).map((q) => [q[0] * w.unitMm, q[1] * w.unitMm]);
  const bid = building(w);
  let bInfo = null;
  if (bid !== undefined) {
    const bl = w.api.GetLine(w.mid, bid, false);
    const M = mul4(inv4(worldMm(w, s.ObjectPlacement?.value)), worldMm(w, bl.ObjectPlacement?.value));
    bInfo = { id: bid, at: [M[12], M[13]], angle: Math.atan2(M[1], M[0]) * 180 / Math.PI };
  }
  return { id: sid, guid: val(s.GlobalId), points, building: bInfo };
}
export function siteToPlan(w, storey, pts) {
  const sid = siteOf(w);
  const M = mul4(inv4(w.storeyWorld(storey)), worldMm(w, sid ? w.api.GetLine(w.mid, sid, false).ObjectPlacement?.value : null));
  return pts.map((q) => { const r = apply4(M, q[0], q[1], 0); return [r[0], r[1]]; });
}
export function planToSite(w, storey, pts) {
  const sid = siteOf(w);
  const M = mul4(inv4(worldMm(w, sid ? w.api.GetLine(w.mid, sid, false).ObjectPlacement?.value : null)), w.storeyWorld(storey));
  return pts.map((q) => { const r = apply4(M, q[0], q[1], 0); return [r[0], r[1]]; });
}

/** A site above the building when the file has none: nothing moves. → the site's id. */
export function ensureSite(w) {
  const have = siteOf(w);
  if (have !== null && have !== undefined) return have;
  const bid = building(w);
  if (bid === undefined) refuse('model.err.site.nobuilding');
  const lp = w.placeAt(null, 0, 0, 0, 0);
  const sid = w.make('IFCSITE', w.guid(), w.ownerHistory(), w.L(tr('model.site')), null, null, w.H(lp), null, null, 'ELEMENT', null, null, null, null, null);
  const up = aggParent(w, bid);
  if (up) { const r = w.touch(up.rel); r.RelatedObjects = r.RelatedObjects.map((h) => (h.value === bid ? w.H(sid) : h)); w.write(r); }
  else { const pj = ids(w.api, w.mid, 'IFCPROJECT')[0]; if (pj !== undefined) w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(pj), [w.H(sid)]); }
  w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(sid), [w.H(bid)]);
  const bl = w.api.GetLine(w.mid, bid, false);
  if (bl.ObjectPlacement) { const pl = w.touch(bl.ObjectPlacement.value); if (!pl.PlacementRelTo) { pl.PlacementRelTo = w.H(lp); w.write(pl); } }
  return sid;
}

export function setSiteOutline({ storey, points }) {
  const pts0 = points.map((q) => [q[0], q[1]]);
  return op((w) => {
    if (polyProblem(pts0)) refuse('model.err.site.shape');
    const st = w.byGuid(storey);
    if (!st) refuse('model.err.nolevel');
    const sid = ensureSite(w);
    let pts = planToSite(w, st, pts0);
    if (area(pts) < 0) pts = pts.reverse();
    // the footprint: ours replaced, any other representation of the site kept
    const s = w.api.GetLine(w.mid, sid, false);
    const rep = w.rep('foot', 'FootPrint', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', [w.H(w.polyline2(pts, true))])]);
    const shape = s.Representation?.value ? w.api.GetLine(w.mid, s.Representation.value, false) : null;
    if (!shape) { const l = w.touch(sid); l.Representation = w.H(w.make('IFCPRODUCTDEFINITIONSHAPE', null, null, [w.H(rep)])); w.write(l); }
    else {
      const sh = w.touch(s.Representation.value);
      const keep = [];
      for (const h of sh.Representations || []) { const r = w.api.GetLine(w.mid, h.value, false); if (String(val(r?.RepresentationIdentifier) || '') === 'FootPrint' && w.readPset(sid, SITE_PSET)) w.dropTree(h.value); else keep.push(h); }
      sh.Representations = [...keep, w.H(rep)];
      w.write(sh);
    }
    const A = Math.abs(area(pts)), P = pts.reduce((sum, a, i) => { const b = pts[(i + 1) % pts.length]; return sum + Math.hypot(b[0] - a[0], b[1] - a[1]); }, 0);
    w.upsertQto(sid, 'Qto_SiteBaseQuantities', [['GrossPerimeter', 'length', P], ['GrossArea', 'area', A]]);
    w.upsertPset(sid, SITE_PSET, [['Points', 'IFCTEXT', ptsText(pts.map((q) => [w.u(q[0]), w.u(q[1])]))]]);
    return { id: sid, ids: [sid] };
  });
}

export function placeBuilding({ at, angle = 0 }) {
  const p = [at[0], at[1]];
  return op((w) => {
    ensureSite(w);
    const bid = building(w);
    if (bid === undefined) refuse('model.err.site.nobuilding');
    const bl = w.api.GetLine(w.mid, bid, false);
    let lp = bl.ObjectPlacement?.value;
    if (!lp) { lp = w.placeAt(w.api.GetLine(w.mid, siteOf(w), false).ObjectPlacement?.value ?? null, 0, 0, 0, 0); const l = w.touch(bid); l.ObjectPlacement = w.H(lp); w.write(l); }
    const sl = w.api.GetLine(w.mid, siteOf(w), false);
    // the building's height on the site stays; its x, y and turn change (relative to what it is placed in: the site)
    const rel = mul4(inv4(worldMm(w, sl.ObjectPlacement?.value)), worldMm(w, lp));
    w.movePlacement(lp, p[0], p[1], rel[14], angle);
    regenAll(w);   // nothing in the building changes, but terrain pads and the like re-read where it is
    return { id: bid, ids: [bid] };
  });
}

const levelName = (levels, n) => {
  let k = n;
  const used = new Set(levels.map((l) => l.name));
  while (used.has(tr('new.level', { n: k }))) k++;
  return tr('new.level', { n: k });
};

const belowName = (levels) => {
  let n = levels.filter((l) => l.elevation < -0.5).length + 1;
  const used = new Set(levels.map((l) => l.name));
  while (used.has(tr('new.level.below', { n }))) n++;
  return tr('new.level.below', { n });
};

export function addLevels({ elevations, height }) {
  const want = [...new Set(elevations.map((e) => Math.round(e * 1000) / 1000))].sort((a, b) => a - b);
  const guids = [];
  return op((w) => {
    if (!want.length) refuse('model.err.lv.none');
    let levels = readLevels(w);
    const base = levels.length ? levels[0].elevation : 0;
    const made = new Map(), out = [];
    // below the lowest level the one nearest it is made first, so it is the one named Level -1
    const order = want.map((e, i) => i).sort((a, b) => (want[a] < 0 && want[b] < 0 ? want[b] - want[a] : want[a] - want[b]));
    order.forEach((i) => {
      const e = want[i], z = base + e;
      if (readLevels(w).some((l) => Math.abs(l.elevation - z) < 1)) return;
      levels = readLevels(w);
      // below the lowest level (a negative height) the new level reaches up to the next level there is, new or old
      const above = e < 0 ? [...want.slice(i + 1).map((x) => base + x), ...levels.map((l) => l.elevation)].filter((x) => x > z + 0.5) : [];
      const next = above.length ? Math.min(...above) - z : want[i + 1] !== undefined ? want[i + 1] - e : (height > 0 ? height : (levels[levels.length - 1]?.height || 3000));
      if (!guids[i]) guids[i] = val(w.guid());
      const r = addLevel(w, { name: e < 0 ? belowName(levels) : levelName(levels, levels.length + 1), elevation: z, height: Math.max(1000, next), guid: guids[i] });
      made.set(r.guid, r.id); out.push(r.id);
    });
    if (!out.length) refuse('model.err.lv.none');
    regenAll(w);
    return { id: out[0], ids: out, made };
  });
}

export function splitLevels({ total, count }) {
  const T = Number(total), n = Math.floor(Number(count));
  const guids = [];
  return op((w) => {
    if (!(T >= 1000 * n) || !(n >= 1) || n > 200) refuse('model.err.lv.split');
    const levels = readLevels(w), order = levels.map((l) => l.guid);   // in their order now: moving one never reorders the rest
    const base = levels.length ? levels[0].elevation : 0, h = T / n;
    const made = new Map(), out = [];
    for (let i = 0; i < n; i++) {
      const z = base + i * h;
      if (order[i]) { setLevel(w, order[i], { elevation: z, height: h, shiftAbove: false }); out.push(w.byGuid(order[i])); continue; }
      if (!guids[i]) guids[i] = val(w.guid());
      const r = addLevel(w, { name: levelName(readLevels(w), i + 1), elevation: z, height: h, guid: guids[i] });
      made.set(r.guid, r.id); out.push(r.id);
    }
    regenAll(w);
    return { id: out[0], ids: out, made };
  });
}
