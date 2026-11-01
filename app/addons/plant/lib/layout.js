/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layout.js — factory layout checks (0.7 LC.5 step 2, session plant-design). DOM-free (tested in Node).
 *
 * A layout is the equipment of a room placed on its floor: each item is a rectangle (width × depth, turned), with the space a
 * person needs on each side to use and maintain it. Equipment comes from LibraryCraft items (format 1: `params.width`,
 * `depth`, `height` in mm, `weight_kg`) or from what BimCraft already wrote when an item was placed (the CadCraft_Equipment
 * property set), so a layout reads real equipment, not stand-ins. The checks are the common-sense ones; the limits (aisle width,
 * floor load) are the person's to set and are said as limits, never as a code requirement.
 *
 *   itemFromLibrary(libItem, place?) → layout item | null          itemFromPset(rows, place?) → layout item | null
 *   itemFromPlacement(placement, unitMm) → layout item | null      (0.8: a piece placed in the model from LibraryCraft)
 *   itemFromEquipment(eq, place?) → layout item | null          (eq from equip.js makeEquipment: its box is the footprint)
 *   layoutItem(raw) → clean layout item | null          item = { id, name, tag, w, d, h, x, y, rot, weight, clear: { front, back, left, right } }
 *   corners(item) → [[x, y]×4] (counterclockwise)       accessZones(item) → [{ side, corners }]
 *   checkLayout({ items, room?, obstacles?, minAisle?, floorLoad? }) → [{ code, level, items: [id…], vars, at: [x, y] }]
 *   flowLength(items, sequence) → mm        the centre-to-centre path through the ids in order, along X then Y
 *
 * Codes: outside (error) · overlap (error) · blocked-access (warning) · aisle (warning) · floor-load (warning).
 * Sides are the item's own: `front` is the side facing +Y before it is turned; `rot` turns it counterclockwise (degrees).
 */

const EPS = 1e-6;
const fin = (v) => typeof v === 'number' && Number.isFinite(v);
export const DEFAULT_CLEAR = { front: 800, back: 300, left: 300, right: 300 };
export const DEFAULTS = { minAisle: 900, floorLoad: 1000 };   // mm between equipment; kg per m² of footprint

export function layoutItem(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const w = Number(raw.w), d = Number(raw.d);
  if (!(w > 0) || !(d > 0)) return null;
  const clear = {};
  for (const k of ['front', 'back', 'left', 'right']) { const v = Number(raw.clear?.[k]); clear[k] = fin(v) && v >= 0 ? v : DEFAULT_CLEAR[k]; }
  const str = (v, n) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, n);
  return {
    id: str(raw.id, 40), name: str(raw.name, 80), tag: str(raw.tag, 24), w, d, h: fin(Number(raw.h)) && raw.h > 0 ? Number(raw.h) : 0,
    x: fin(Number(raw.x)) ? Number(raw.x) : 0, y: fin(Number(raw.y)) ? Number(raw.y) : 0, rot: fin(Number(raw.rot)) ? Number(raw.rot) : 0,
    weight: fin(Number(raw.weight)) && raw.weight > 0 ? Number(raw.weight) : 0, clear,
  };
}

export function itemFromLibrary(it, place = {}) {
  const p = it?.params;
  if (!p || !(p.width > 0) || !(p.depth > 0)) return null;
  return layoutItem({ id: place.id ?? it.uuid ?? '', name: it.name, tag: place.tag, w: p.width, d: p.depth, h: p.height, weight: p.weight_kg, x: place.x, y: place.y, rot: place.rot, clear: place.clear });
}
/** Equipment from equip.js (unplaced): its box in plan is the footprint, turned about the place's point like the equipment is. */
export function itemFromEquipment(eq, place = {}) {
  if (!eq?.bbox) return null;
  const w = eq.bbox.max[0] - eq.bbox.min[0], d = eq.bbox.max[1] - eq.bbox.min[1];
  const cx = (eq.bbox.max[0] + eq.bbox.min[0]) / 2, cy = (eq.bbox.max[1] + eq.bbox.min[1]) / 2;
  const a = ((place.rot || 0) * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a);
  return layoutItem({ id: place.id ?? '', name: place.name ?? eq.type, tag: place.tag, w, d, h: eq.bbox.max[2] - eq.bbox.min[2], weight: place.weight, x: (place.x || 0) + cx * c - cy * s, y: (place.y || 0) + cx * s + cy * c, rot: place.rot || 0, clear: place.clear });
}

/** rows: [{ name, value }] of the CadCraft_Equipment property set, lengths in mm (BimCraft's properties in model units are the caller's to convert). */
export function itemFromPset(rows, place = {}) {
  const get = (n) => Number(rows.find((r) => r.name === n)?.value);
  const name = String(rows.find((r) => r.name === 'Name')?.value ?? '');
  return layoutItem({ id: place.id ?? '', name, tag: place.tag, w: get('Width'), d: get('Depth'), h: get('Height'), weight: get('WeightKg'), x: place.x, y: place.y, rot: place.rot, clear: place.clear });
}

/**
 * A piece placed from LibraryCraft, as ifc-place.js `placements()` gives it ({ id, name, itemNumber, x, y, rot, equipment: the
 * CadCraft_Equipment set }), lengths in the model's units (unitMm converts). → layout item | null when it has no width and depth.
 */
export function itemFromPlacement(pl, unitMm = 1) {
  const eq = pl?.equipment || {}, get = (n) => Number(eq[n]) * unitMm;
  return layoutItem({ id: pl.id, name: String(eq.Name || pl.name || ''), tag: pl.itemNumber, w: get('Width'), d: get('Depth'), h: get('Height'), weight: Number(eq.WeightKg), x: pl.x, y: pl.y, rot: pl.rot });
}

export function corners(it) {
  const a = (it.rot * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a), hx = it.w / 2, hy = it.d / 2;
  return [[-hx, -hy], [hx, -hy], [hx, hy], [-hx, hy]].map(([x, y]) => [it.x + x * c - y * s, it.y + x * s + y * c]);
}
/** The strips beside each side that must stay free: front = +Y, back = −Y, left = −X, right = +X (before turning). */
export function accessZones(it) {
  const a = (it.rot * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a), hx = it.w / 2, hy = it.d / 2;
  const T = ([x, y]) => [it.x + x * c - y * s, it.y + x * s + y * c];
  const strip = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]].map(T);
  return [
    { side: 'front', clear: it.clear.front, corners: strip(-hx, hy, hx, hy + it.clear.front) },
    { side: 'back', clear: it.clear.back, corners: strip(-hx, -hy - it.clear.back, hx, -hy) },
    { side: 'left', clear: it.clear.left, corners: strip(-hx - it.clear.left, -hy, -hx, hy) },
    { side: 'right', clear: it.clear.right, corners: strip(hx, -hy, hx + it.clear.right, hy) },
  ].filter((z) => z.clear > 0);
}

// ---------------------------------------------------------------------------------------------------- geometry of convex polygons
const edges = (P) => P.map((p, i) => [p, P[(i + 1) % P.length]]);
function project(P, ax) { let lo = Infinity, hi = -Infinity; for (const p of P) { const v = p[0] * ax[0] + p[1] * ax[1]; lo = Math.min(lo, v); hi = Math.max(hi, v); } return [lo, hi]; }
/** Do two convex polygons overlap by more than a sliver (touching edges do not count)? */
export function overlaps(A, B, tol = 1) {
  for (const P of [A, B]) for (const [p, q] of edges(P)) {
    const ax = [-(q[1] - p[1]), q[0] - p[0]], l = Math.hypot(...ax) || 1, n = [ax[0] / l, ax[1] / l];
    const [a0, a1] = project(A, n), [b0, b1] = project(B, n);
    if (a1 <= b0 + tol || b1 <= a0 + tol) return false;
  }
  return true;
}
const segDist = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy, t = L2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2)) : 0; return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy)); };
/** The least distance between two convex polygons that do not overlap. */
export function gap(A, B) {
  let best = Infinity;
  for (const p of A) for (const [a, b] of edges(B)) best = Math.min(best, segDist(p, a, b));
  for (const p of B) for (const [a, b] of edges(A)) best = Math.min(best, segDist(p, a, b));
  return best;
}
const area = (P) => Math.abs(P.reduce((s, p, i) => s + (p[0] * P[(i + 1) % P.length][1] - P[(i + 1) % P.length][0] * p[1]), 0)) / 2;
const centre = (P) => [P.reduce((s, p) => s + p[0], 0) / P.length, P.reduce((s, p) => s + p[1], 0) / P.length];
const rectCorners = (r) => [[r.x0, r.y0], [r.x1, r.y0], [r.x1, r.y1], [r.x0, r.y1]];

export function checkLayout({ items, room = null, obstacles = [], minAisle = DEFAULTS.minAisle, floorLoad = DEFAULTS.floorLoad } = {}) {
  const out = [];
  const list = (items || []).map(layoutItem).filter(Boolean);
  const polys = list.map(corners);
  const obs = obstacles.map((o) => ({ ...o, corners: rectCorners(o) }));
  list.forEach((it, i) => {
    const P = polys[i];
    if (room && P.some(([x, y]) => x < room.x0 - EPS || x > room.x1 + EPS || y < room.y0 - EPS || y > room.y1 + EPS)) out.push({ code: 'outside', level: 'error', items: [it.id], vars: { name: it.tag || it.name || it.id }, at: [it.x, it.y] });
    if (it.weight > 0 && floorLoad > 0) {
      const load = it.weight / (area(P) / 1e6);
      if (load > floorLoad) out.push({ code: 'floor-load', level: 'warning', items: [it.id], vars: { name: it.tag || it.name || it.id, load: Math.round(load), limit: floorLoad }, at: [it.x, it.y] });
    }
    for (const o of obs) if (overlaps(P, o.corners)) out.push({ code: 'overlap', level: 'error', items: [it.id], vars: { a: it.tag || it.name || it.id, b: o.name || 'obstacle' }, at: centre(P) });
  });
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const a = list[i], b = list[j];
    if (overlaps(polys[i], polys[j])) { out.push({ code: 'overlap', level: 'error', items: [a.id, b.id], vars: { a: a.tag || a.name || a.id, b: b.tag || b.name || b.id }, at: centre([...polys[i], ...polys[j]]) }); continue; }
    const g = gap(polys[i], polys[j]);
    if (g < minAisle) out.push({ code: 'aisle', level: 'warning', items: [a.id, b.id], vars: { a: a.tag || a.name || a.id, b: b.tag || b.name || b.id, gap: Math.round(g), min: minAisle }, at: centre([...polys[i], ...polys[j]]) });
  }
  // the strip a person needs beside each item must hold no other equipment and no wall or column
  list.forEach((it, i) => {
    for (const z of accessZones(it)) {
      const hit = list.findIndex((o, j) => j !== i && overlaps(z.corners, polys[j]));
      const wall = obs.find((o) => overlaps(z.corners, o.corners));
      const outside = room && z.corners.some(([x, y]) => x < room.x0 - EPS || x > room.x1 + EPS || y < room.y0 - EPS || y > room.y1 + EPS);
      if (hit >= 0) out.push({ code: 'blocked-access', level: 'warning', items: [it.id, list[hit].id], vars: { name: it.tag || it.name || it.id, side: z.side, by: list[hit].tag || list[hit].name || list[hit].id, clear: z.clear }, at: centre(z.corners) });
      else if (wall || outside) out.push({ code: 'blocked-access', level: 'warning', items: [it.id], vars: { name: it.tag || it.name || it.id, side: z.side, by: wall ? wall.name || 'obstacle' : 'wall', clear: z.clear }, at: centre(z.corners) });
    }
  });
  const rank = { error: 0, warning: 1 };
  return out.sort((a, b) => rank[a.level] - rank[b.level]);
}

export function flowLength(items, sequence) {
  const by = new Map((items || []).map(layoutItem).filter(Boolean).map((i) => [i.id, i]));
  let n = 0;
  for (let k = 1; k < sequence.length; k++) { const a = by.get(sequence[k - 1]), b = by.get(sequence[k]); if (a && b) n += Math.abs(a.x - b.x) + Math.abs(a.y - b.y); }
  return n;
}
