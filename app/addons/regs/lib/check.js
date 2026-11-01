/* SPDX-License-Identifier: Apache-2.0 */
/**
 * check.js — the model against the rules of the active regulation pack (0.8 REG.1, the `regs` add-on). No DOM: bin/test-regs.mjs runs it in Node.
 *
 *   stairRows(stairs, profile, { whereOf })              → rows   straight, L, U and winder stairs (stair.* rules); a spiral stair has its
 *                                                                 own labelled defaults and is not in the packs yet
 *   roomRows(snap, loops, profile)                       → rows   each named room (room.* rules): lowest wall on its level, window
 *                                                                 area and openable area as a share of its floor area
 *   regsSchedule(rows, profile, { fmtLen, t })           → { title, note, head, rows, nums, total }   the schedule the Schedules list shows
 *   summary(rows)                                        → { meets, fails, none }
 *
 * row = { kind: 'stair'|'room', where, ref (the stair's or room's GlobalId, for the shared Problems), id, label, clause, op, req (a number, or [min, max] for 'between'), unit ('mm'|'pct'),
 *         found (a number, or null when it could not be worked out), ok (true | false | null = not checked) }
 *
 * Tier 2 (owner 2026-10-27): habitable rooms' area (m²) and least dimension (rooms whose name says bath, closet, laundry, hall, storage,
 * garage … are not habitable), halls' width (rooms named hall / corridor), sleeping rooms' escape opening (rooms named bed… : the window with
 * the largest net clear opening, its clear width and height and its sill), and the egress door (doorRows: the widest exterior door, its
 * clear width estimated as the leaf width less 2 in for the door and its stop). The least dimension is the narrowest width across the room
 * (for an L-shaped room, of its outline). Clear openings are estimated from the window type (hung: half the height; slider: half the
 * width; casement, awning and others: all of it; fixed, picture, transom: none).
 * Window areas are the OPENING size (width × height), not the glass, and the openable share is estimated from the window type
 * (fixed, picture and transom 0, hung 50%, the rest 100%). The wall height is the lowest wall on the level (ceilings are not
 * modelled). A guide only: the registered professional and the local authority decide.
 */
import { loopAt } from '../../../model-rooms.js';
import { wallHeight, wallType } from '../../../model-walls.js';
import { ruleBounds } from './regs.js';
import { judge, row, summary, limitText } from './rows.js';
export { summary, limitText };


/** How much of a window opens, by its type key: fixed 0, hung 0.5, anything else 1. */
export function openableShare(typeKey) {
  const k = String(typeKey || '');
  if (/fixed|picture|transom/.test(k)) return 0;
  if (/hung/.test(k)) return 0.5;
  return 1;
}


export function stairRows(stairs, profile, { whereOf = () => '' } = {}) {
  if (!profile) return [];
  const out = [];
  for (const st of stairs || []) {
    if (!st.layout || st.kind === 'spiral') continue;
    const where = whereOf(st);
    const put = (id, found) => { const r = profile.rule(id); if (r) out.push(row('stair', where, r, found, st.guid || (st.id != null ? String(st.id) : ''))); };
    put('stair.riser.max', st.layout.riser);
    put('stair.tread.min', st.layout.tread);
    put('stair.width.min', st.width);
    if (st.railings !== 'none') put('stair.rail.height', st.railHeight);
  }
  return out;
}

const NOT_HABITABLE = /bath|toilet|\bwc\b|closet|laundry|hall|corridor|passage|stor|garage|utility|pantry|mech|entry|foyer|vestibul|stair|shed|attic/i;
const HALL = /hall|corridor|passage/i;
const KITCHEN = /kitchen|cocina|küche|kök|kuchnia|cuisine|cucina|cozinha|dapur/i;
const SLEEP = /bed|sleep|dormit|schlaf|chambre|sovrum|sypialn|kamar tidur|quarto|camera da letto/i;
/** The net clear opening of a window, estimated from its type: { w, h, area } in mm and mm². */
export function clearOpening(o) {
  const k = String(o.typeKey || ''), w = Number(o.width) || 0, h = Number(o.height) || 0;
  if (/fixed|picture|transom/.test(k)) return { w: 0, h: 0, area: 0 };
  if (/hung/.test(k)) return { w, h: h / 2, area: w * h / 2 };
  if (/slider|sliding/.test(k)) return { w: w / 2, h, area: w * h / 2 };
  return { w, h, area: w * h };
}
/** The narrowest width across a polygon: for each edge direction, the extent across it; the least of those. */
export function leastWidth(poly) {
  let best = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
    if (L < 1) continue;
    const nx = -dy / L, ny = dx / L;
    let lo = Infinity, hi = -Infinity;
    for (const p of poly) { const d = p[0] * nx + p[1] * ny; if (d < lo) lo = d; if (d > hi) hi = d; }
    best = Math.min(best, hi - lo);
  }
  return Number.isFinite(best) ? best : null;
}

export function roomRows(snap, loops, profile) {
  if (!profile || !snap) return [];
  const rules = ['room.ceiling.min', 'room.light.min', 'room.vent.min'].map((id) => profile.rule(id)).filter(Boolean);
  const tier2 = ['room.area.min', 'room.dim.min', 'hall.width.min', 'escape.area.min', 'escape.width.min', 'escape.height.min', 'escape.sill.max'].some((id) => profile.rule(id));
  if (!rules.length && !tier2) return [];
  const wallOf = new Map((snap.walls || []).map((w) => [w.id, w]));
  const into = new Map();   // room loop → { glaze, open } (mm²)
  const slot = (loop) => { let s = into.get(loop); if (!s) into.set(loop, s = { glaze: 0, open: 0, wins: [] }); return s; };
  for (const o of snap.openings || []) {
    if (o.kind !== 'window') continue;
    const w = wallOf.get(o.wall), L = w && loops.get(w.storey);
    if (!L || !w.a || !w.b) continue;
    const dx = w.b[0] - w.a[0], dy = w.b[1] - w.a[1], len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    const at = (Number(o.offset) || 0) + (Number(o.width) || 0) / 2, cx = w.a[0] + ux * at, cy = w.a[1] + uy * at, d = (w.t || 0) / 2 + 100;
    const area = (Number(o.width) || 0) * (Number(o.height) || 0), share = openableShare(o.typeKey), seen = new Set();
    for (const side of [1, -1]) {   // the room on either face of the wall (an outside face has none)
      const room = loopAt(L.rooms, [cx - uy * d * side, cy + ux * d * side]);
      if (room && !seen.has(room)) { seen.add(room); const s = slot(room); s.glaze += area; s.open += area * share; s.wins.push(o); }
    }
  }
  const out = [];
  const spaces = [...(snap.derived?.spaces || [])].sort((a, b) => String(a.number).localeCompare(String(b.number), undefined, { numeric: true }));
  for (const sp of spaces) {
    const L = loops.get(sp.storey), loop = L && loopAt(L.rooms, sp.seed);
    if (!loop || !(loop.area > 0)) continue;
    const where = [sp.number, sp.name].filter(Boolean).join(' ');
    const s = into.get(loop) || { glaze: 0, open: 0, wins: [] };
    const heights = (snap.walls || []).filter((w) => w.storey === sp.storey).map((w) => wallHeight(w, snap.levels));
    const found = { 'room.ceiling.min': heights.length ? Math.min(...heights) : null, 'room.light.min': s.glaze / loop.area * 100, 'room.vent.min': s.open / loop.area * 100 };
    for (const r of rules) out.push(row('room', where, r, found[r.id], sp.guid || String(sp.id ?? '')));
    // tier 2
    const ref = sp.guid || String(sp.id ?? ''), name = String(sp.name || '');
    const put = (id, value, kind = 'room', rf = ref, at = where) => { const r = profile.rule(id); if (r) out.push(row(kind, at, r, value, rf)); };
    if (!NOT_HABITABLE.test(name) && !KITCHEN.test(name)) { put('room.area.min', loop.area / 1e6); put('room.dim.min', leastWidth(loop.poly)); }   // kitchens are exempt
    if (HALL.test(name)) put('hall.width.min', leastWidth(loop.poly));
    if (SLEEP.test(name) && ['escape.area.min', 'escape.width.min', 'escape.height.min', 'escape.sill.max'].some((id) => profile.rule(id))) {
      const best = s.wins.map((o) => ({ o, c: clearOpening(o) })).sort((a, b) => b.c.area - a.c.area)[0];
      const at = where + ' (' + (best ? 'best window' : 'no window') + ')';
      if (!best) { put('escape.area.min', 0, 'room', ref, at); continue; }
      const wr = best.o.guid || String(best.o.id ?? ref);
      put('escape.area.min', best.c.area / 1e6, 'window', wr, at);
      put('escape.width.min', best.c.w, 'window', wr, at);
      put('escape.height.min', best.c.h, 'window', wr, at);
      put('escape.sill.max', Number.isFinite(Number(best.o.sill)) ? Number(best.o.sill) : null, 'window', wr, at);
    }
  }
  return out;
}

/** The egress door: the widest exterior door (a door with a room on one side only); clear width = leaf width less 2 in (51 mm). */
export function doorRows(snap, loops, profile, { where = 'Egress door' } = {}) {
  if (!profile || !snap) return [];
  const rw = profile.rule('door.egress.width.min'), rh = profile.rule('door.egress.height.min');
  if (!rw && !rh) return [];
  const wallOf = new Map((snap.walls || []).map((w) => [w.id, w]));
  let best = null;
  for (const o of snap.openings || []) {
    if (o.kind !== 'door') continue;
    const w = wallOf.get(o.wall), L = w && loops.get(w.storey);
    if (!L || !w.a || !w.b) continue;
    const dx = w.b[0] - w.a[0], dy = w.b[1] - w.a[1], len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    const at = (Number(o.offset) || 0) + (Number(o.width) || 0) / 2, cx = w.a[0] + ux * at, cy = w.a[1] + uy * at, d = (w.t || 0) / 2 + 100;
    const sides = [1, -1].map((side) => loopAt(L.rooms, [cx - uy * d * side, cy + ux * d * side]));
    if (sides.filter(Boolean).length !== 1) continue;   // both sides rooms: an inside door; neither: not in a room
    if (!best || o.width > best.width) best = o;
  }
  const ref = best ? best.guid || String(best.id ?? '') : '';
  const out = [];
  if (rw) out.push(row('door', where, rw, best ? Math.max(0, best.width - 50.8) : null, ref));
  if (rh) out.push(row('door', where, rh, best ? best.height : null, ref));
  return out;
}



/**
 * `profiles`: one profile or a list (several ticked packs checked each on its own). With more than one, every row carries `pack` (the
 * pack's name, set by the caller) and the table gains a Pack column after Where.
 */
export function regsSchedule(rows, profiles, { fmtLen, fmtArea = (m2) => (Math.round(m2 * 100) / 100) + ' m²', t }) {
  const list = (Array.isArray(profiles) ? profiles : [profiles]).filter(Boolean);
  const many = list.length > 1;
  const fmt = (v, unit) => (unit === 'pct' ? (Math.round(v * 10) / 10).toLocaleString(undefined, { maximumFractionDigits: 1 }) + ' %' : unit === 'm2' ? fmtArea(v) : unit === 'count' ? String(Math.round(v)) : unit === 'ratio' ? String(Math.round(v * 100) / 100) : unit === 'r' ? 'R-' + (Math.round(v * 10) / 10) : unit === 'u' ? 'U-' + (Math.round(v * 100) / 100) : fmtLen(v));
  const word = (ok) => t(ok === true ? 'regs.result.meets' : ok === false ? 'regs.result.fails' : 'regs.result.none');
  const sum = summary(rows);
  const states = [...new Set(list.map((p) => t('regs.state.' + p.review.state)))].join(' ');
  const head = [t('regs.col.where'), ...(many ? [t('regs.col.pack')] : []), t('regs.col.rule'), t('regs.col.clause'), t('regs.col.required'), t('regs.col.found'), t('regs.col.result')];
  return {
    title: t('regs.sch.title'),
    note: list.length ? t('regs.sch.note', { pack: list.map((p) => p.name).join(', '), state: states }) : '',
    head,
    rows: rows.map((r) => [r.where, ...(many ? [r.pack || ''] : []), r.label, r.clause, limitText(r, fmt, t), r.found === null ? '–' : fmt(r.found, r.unit), word(r.ok)]),
    nums: rows.map((r) => [r.found, r.ok === true ? 1 : r.ok === false ? 0 : -1]),
    rowInfo: rows.map(() => ({})),   // wide table: the schedules list wraps the cells in the side panel and offers it full size
    total: [t('regs.sch.total', { meets: sum.meets, fails: sum.fails }), ...head.slice(1).map(() => '')],
  };
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Tier 3 — electrical and alarms (owner 2026-10-27: "the drafter builds a drawing that passes inspection … gets the permits smoother").
// devices = res-elec.js readDevices(w): { kind, storey, at: [x, y] (plan mm), guid }. A device belongs to the room whose loop holds it;
// a device in no room is outside. Outlets: socket, socket.double, socket.earth (not data, phone or TV); lights: luminaire*, downlight.
// ---------------------------------------------------------------------------------------------------------------------------------------
const OUTLET = (k) => /^socket(\.double|\.earth)?$/.test(k);
const LIGHT = (k) => /^(luminaire|downlight)/.test(k);
const SMOKE = (k) => k === 'detector.smoke';
const BATH = /bath|toilet|\bwc\b|powder|ensuite|shower/i;
const LAUNDRY = /laundry|utility/i;
const GARAGE = /garage/i;
const STAIR_ROOM = /stair/i;
const OUTLET_ROOMS_NOT = /bath|toilet|\bwc\b|closet|laundry|hall|corridor|passage|stor|garage|utility|pantry|mech|stair|shed|attic|porch|deck/i;

/** Points along a closed polygon's perimeter: { s (distance from the first vertex), p } for the point nearest to `pt`, and the total. */
function onPerimeter(poly, pt) {
  let best = null, run = 0;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy, L = Math.sqrt(L2);
    const t = L2 ? Math.max(0, Math.min(1, ((pt[0] - a[0]) * dx + (pt[1] - a[1]) * dy) / L2)) : 0;
    const q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(pt[0] - q[0], pt[1] - q[1]);
    if (!best || d < best.d) best = { s: run + t * L, d };
    run += L;
  }
  return { s: best ? best.s : 0, d: best ? best.d : Infinity, total: run };
}

/**
 * The longest distance, measured along the floor line, from a point of any wall space to an outlet in that space. Wall spaces are the
 * room's perimeter broken at doorways; a wall space shorter than `minSpace` (2 ft) needs none. → { found (mm) | Infinity when a wall
 * space has no outlet, spaces }.
 */
export function wallOutletGap(poly, doorGaps, outlets, { minSpace = 609.6 } = {}) {
  const total = onPerimeter(poly, poly[0]).total;
  const norm = (s) => ((s % total) + total) % total;
  const gaps = doorGaps.map(([a, b]) => [norm(a), norm(b)]).sort((x, y) => x[0] - y[0]);
  const pos = outlets.map(norm).sort((a, b) => a - b);
  // wall spaces: [start, end] along the perimeter between doorways (one cyclic space when there are none)
  const spaces = [];
  if (!gaps.length) spaces.push({ a: 0, b: total, cyclic: true });
  else for (let i = 0; i < gaps.length; i++) { const a = gaps[i][1], b = gaps[(i + 1) % gaps.length][0] + (i + 1 === gaps.length ? total : 0); if (b - a > 1) spaces.push({ a, b }); }
  let worst = 0;
  for (const sp of spaces) {
    const len = sp.b - sp.a;
    if (len < minSpace) continue;
    const inside = pos.flatMap((p) => [p, p + total]).filter((p) => p >= sp.a - 1e-6 && p <= sp.b + 1e-6).map((p) => p - sp.a).sort((x, y) => x - y);
    if (!inside.length) return { found: Infinity, spaces: spaces.length };
    let g = sp.cyclic ? (inside[0] + len - inside[inside.length - 1]) / 2 : Math.max(inside[0], len - inside[inside.length - 1]);
    for (let i = 1; i < inside.length; i++) g = Math.max(g, (inside[i] - inside[i - 1]) / 2);
    worst = Math.max(worst, g);
  }
  return { found: worst, spaces: spaces.length };
}

/** Electrical and alarm rows for every named room, the outdoor outlets and every story. `devices` from res-elec.js readDevices. */
export function elecRows(snap, loops, devices, profile) {
  if (!profile || !snap) return [];
  const has = (id) => !!profile.rule(id);
  if (!['elec.wall.spacing.max', 'elec.light.room.min', 'elec.bath.outlet.min', 'elec.hall.outlet.min', 'elec.laundry.outlet.min', 'elec.garage.outlet.min',
    'elec.outdoor.outlet.min', 'alarm.smoke.bedroom.min', 'alarm.smoke.story.min'].some(has)) return [];
  const out = [];
  const roomOf = new Map();   // device → room loop
  const byRoom = new Map();
  const outside = [];
  for (const d of devices || []) {
    const L = loops.get(d.storey), loop = L && loopAt(L.rooms, d.at);
    if (!loop) { outside.push(d); continue; }
    roomOf.set(d, loop);
    if (!byRoom.has(loop)) byRoom.set(loop, []);
    byRoom.get(loop).push(d);
  }
  const wallOf = new Map((snap.walls || []).map((w) => [w.id, w]));
  const doorsOn = (loop, storey) => (snap.openings || []).filter((o) => o.kind === 'door').map((o) => {
    const w = wallOf.get(o.wall);
    if (!w || w.storey !== storey || !w.a || !w.b) return null;
    const dx = w.b[0] - w.a[0], dy = w.b[1] - w.a[1], len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    const at = (Number(o.offset) || 0) + (Number(o.width) || 0) / 2, c = [w.a[0] + ux * at, w.a[1] + uy * at];
    const p = onPerimeter(loop.poly, c);
    return p.d <= (w.t || 0) / 2 + 150 ? [p.s - o.width / 2, p.s + o.width / 2] : null;
  }).filter(Boolean);
  const row2 = (kind, where, rule, found, ref, okOverride) => { const r = row(kind, where, rule, found, ref); if (okOverride !== undefined) r.ok = okOverride; return r; };
  const spaces = [...(snap.derived?.spaces || [])].sort((a, b) => String(a.number).localeCompare(String(b.number), undefined, { numeric: true }));
  const storeysWithRooms = new Set();
  for (const sp of spaces) {
    const L = loops.get(sp.storey), loop = L && loopAt(L.rooms, sp.seed);
    if (!loop) continue;
    storeysWithRooms.add(sp.storey);
    const name = String(sp.name || ''), where = [sp.number, sp.name].filter(Boolean).join(' '), ref = sp.guid || String(sp.id ?? '');
    const here = byRoom.get(loop) || [];
    const count = (pred) => here.filter((d) => pred(d.kind)).length;
    const put = (id, found, ok) => { const r = profile.rule(id); if (r) out.push(row2('room', where, r, found, ref, ok)); };
    if (!OUTLET_ROOMS_NOT.test(name) && has('elec.wall.spacing.max')) {
      const g = wallOutletGap(loop.poly, doorsOn(loop, sp.storey), here.filter((d) => OUTLET(d.kind)).map((d) => onPerimeter(loop.poly, d.at).s));
      put('elec.wall.spacing.max', Number.isFinite(g.found) ? g.found : null, Number.isFinite(g.found) ? undefined : false);
    }
    if (!/closet|stor|pantry|mech|shed/i.test(name)) put('elec.light.room.min', count(LIGHT));
    if (BATH.test(name)) put('elec.bath.outlet.min', count(OUTLET));
    if (LAUNDRY.test(name)) put('elec.laundry.outlet.min', count(OUTLET));
    if (GARAGE.test(name)) put('elec.garage.outlet.min', count(OUTLET));
    if (HALL.test(name) && has('elec.hall.outlet.min')) {
      const longest = (() => { let m = 0; for (let i = 0; i < loop.poly.length; i++) for (let j = i + 1; j < loop.poly.length; j++) m = Math.max(m, Math.hypot(loop.poly[i][0] - loop.poly[j][0], loop.poly[i][1] - loop.poly[j][1])); return m; })();
      if (longest >= 3048) put('elec.hall.outlet.min', count(OUTLET));   // halls 10 ft or longer
    }
    if (SLEEP.test(name)) put('alarm.smoke.bedroom.min', count(SMOKE));
  }
  const ro = profile.rule('elec.outdoor.outlet.min');
  if (ro && spaces.length) out.push(row('building', 'Outside', ro, outside.filter((d) => OUTLET(d.kind)).length, 'outside'));
  const rs = profile.rule('alarm.smoke.story.min');
  if (rs) for (const st of storeysWithRooms) {
    const lv = (snap.levels || []).find((l) => l.id === st);
    out.push(row('storey', lv ? lv.name : 'Level', rs, (devices || []).filter((d) => d.storey === st && SMOKE(d.kind)).length, lv?.guid || ''));
  }
  return out;
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Tier 3 — foundations. founds = [{ guid, storey, kind: slab|stemslab|crawl|basement, params (res-foundation.js foundationParams: footW,
// footD, bottom, edgeW, edgeD, slabT, basementH, in mm), loads: { stories, heavy } }]. The pack's footing tables (kind 'footing', data
// { construction: 'light frame'|'brick veneer'|'concrete or masonry', columns_psf, rows: [{ load, stories, foundation, cells: ['12x6', …] }] })
// give the width × thickness for the load row (ground snow load from the pack's criteria; 25 psf or less when it has none: the "20" row),
// the stories, the foundation type and the soil column (1500 psf: the presumptive value for clay and silt — the conservative one).
// Depth: the footing's underside below grade = below the floor less 6 in (the IRC's least foundation height above grade); at least the
// pack's found.footing.depth.min and the frost depth (criteria frost_depth, mm).
// ---------------------------------------------------------------------------------------------------------------------------------------
const IN_MM = 25.4;
/** The table's width × thickness (mm) for this footing, or null. */
export function footingFromTable(profile, { stories = 1, foundation = 'slab-on-grade', heavy = false, snowPsf = null, soilPsf = 1500 } = {}) {
  const tables = Object.values(profile?.tables || {}).filter((t) => t.kind === 'footing');
  const t = tables.find((x) => (heavy ? /concrete|masonry/i : /light frame$/i).test(String(x.data?.construction || ''))) || tables[0];
  if (!t || !Array.isArray(t.data?.rows)) return null;
  const loads = [...new Set(t.data.rows.map((r) => Number(r.load)))].sort((a, b) => a - b);
  // the "20" row is 20 psf roof live or 25 psf ground snow; a larger snow load takes the next row up
  const want = snowPsf === null ? loads[0] : (loads.find((l) => (l === 20 ? 25 : l) >= snowPsf) ?? null);
  if (want === null) return null;
  const n = Math.max(1, Math.min(3, Math.round(stories)));
  const row = t.data.rows.find((r) => Number(r.load) === want && Number(r.stories) === n && r.foundation === foundation);
  const col = (t.data.columns_psf || []).findIndex((c) => Number(c) >= soilPsf);
  const cell = row && col >= 0 ? String(row.cells[col] || '') : '';
  const m = /^(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)$/.exec(cell);
  if (!m || +m[2] > 24) return null;   // a printed typo (e.g. "20x60") is not used
  return { width: +m[1] * IN_MM, thick: +m[2] * IN_MM, table: t, load: want };
}

export function foundRows(founds, profile, { levelName = () => '' } = {}) {
  if (!profile || !founds?.length) return [];
  const has = (id) => !!profile.rule(id);
  if (!['found.footing.depth.min', 'found.footing.width.min', 'found.footing.thick.min', 'found.slab.thick.min'].some(has)) return [];
  const crit = profile.criteria || {};
  const frost = crit.frost_depth && crit.frost_depth.unit === 'mm' ? Number(crit.frost_depth.value) : null;
  const snow = crit.ground_snow_load && crit.ground_snow_load.unit === 'psf' ? Number(crit.ground_snow_load.value) : null;
  const out = [];
  const TYPE = { slab: 'slab-on-grade', stemslab: 'slab-on-grade', crawl: 'crawl space', basement: 'basement' };
  for (const f of founds) {
    const p = f.params || {}, ref = f.guid || '', where = (levelName(f.storey) || '') + ' ' + ({ slab: 'slab', stemslab: 'stem wall', crawl: 'crawl space', basement: 'basement' }[f.kind] || 'foundation') + ' footing';
    const isEdge = f.kind === 'slab';
    const footW = isEdge ? p.edgeW : p.footW, footD = isEdge ? Math.max(0, (p.edgeD || 0) - (p.slabT || 0)) : p.footD;
    const below = f.kind === 'basement' ? (p.basementH || 0) + (p.footD || 0) : isEdge ? (p.edgeD || 0) : (p.bottom || 0);
    const synth = (id, value, clause, label, note) => ({ id, op: '>=', value, unit: 'mm', clause, label, note, from: profile.rule(id)?.from });
    const rd = profile.rule('found.footing.depth.min');
    if (rd) {
      const need = Math.max(rd.value, frost || 0);
      out.push(row('foundation', where, synth('found.footing.depth.min', need, frost && frost > rd.value ? rd.clause + ' / frost depth' : rd.clause, rd.label, rd.note), Math.max(0, below - 6 * IN_MM), ref));
    }
    const tb = footingFromTable(profile, { stories: f.loads?.stories || 1, foundation: TYPE[f.kind] || 'slab-on-grade', heavy: !!f.loads?.heavy, snowPsf: snow });
    const rw = profile.rule('found.footing.width.min'), rt = profile.rule('found.footing.thick.min');
    if (rw) out.push(row('foundation', where, synth('found.footing.width.min', Math.max(rw.value, tb ? tb.width : 0), tb ? tb.table.clause || tb.table.id : rw.clause, rw.label, rw.note), footW ?? null, ref));
    if (rt && !isEdge) out.push(row('foundation', where, synth('found.footing.thick.min', Math.max(rt.value, tb ? tb.thick : 0), tb ? tb.table.clause || tb.table.id : rt.clause, rt.label, rt.note), footD ?? null, ref));
    const rs = profile.rule('found.slab.thick.min');
    if (rs && f.kind !== 'crawl') out.push(row('foundation', where.replace(/ footing$/, ' slab'), rs, p.slabT ?? null, ref));
  }
  return out;
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// Tier 3 — wood wall framing. framings = [{ guid, storey, host (wall GlobalId), spacing (mm), pieces: [{ role, size ('2x6', '2x10 × 2'),
// length (mm), guid }] }] (res-framing.js readFraming + each piece's CadCraft_Lumber). Walls whose type key starts with "ext" are taken as
// bearing, the rest as non-bearing (BimCraft does not record which interior walls bear). Stud table (kind 'stud', data.rows =
// [size, bearing height ft, roof only, one floor + roof, two floors + roof, one floor only, nonbearing height ft, nonbearing spacing] in
// inches / feet, null = not permitted). Header table (kind 'header', data.rows = [{ supporting, size '2-2x10', cells: { '30psf': { '12':
// '7-8 / 2', … } } }]): the span for the header's plies × size, what it carries (roof only / one / two floors, centre-bearing), the
// ground snow load column (30 psf at least) and the building width, interpolated between 12, 24 and 36 ft as the table allows.
// Header span = the header's length less 3 in (1½ in of bearing each end).
// ---------------------------------------------------------------------------------------------------------------------------------------
const FT_MM = 304.8;
const ftIn = (s) => { const m = /^(\d+)-(\d+)/.exec(String(s || '')); return m ? (+m[1] * 12 + +m[2]) * IN_MM : null; };
export function headerSpanFromTable(profile, { size, floorsAbove = 0, snowPsf = null, widthMm }) {
  const t = Object.values(profile?.tables || {}).find((x) => x.kind === 'header' && /R602\.7\(1\)|exterior/i.test(x.id + ' ' + (x.label || '')))
    || Object.values(profile?.tables || {}).find((x) => x.kind === 'header');
  if (!t || !Array.isArray(t.data?.rows)) return null;
  const supporting = floorsAbove <= 0 ? /^roof and ceiling$/i : floorsAbove === 1 ? /one center-bearing floor/i : /two center-bearing floors/i;
  const r = t.data.rows.find((x) => supporting.test(String(x.supporting || '')) && String(x.size) === size);
  if (!r) return null;
  const cols = Object.keys(r.cells || {}).map((k) => [parseFloat(k), k]).sort((a, b) => a[0] - b[0]);
  const s = snowPsf === null ? cols[0] : cols.find(([v]) => v >= Math.max(30, snowPsf));
  if (!s) return null;
  const byW = r.cells[s[1]], ws = Object.keys(byW).map(Number).sort((a, b) => a - b);
  const wFt = widthMm / FT_MM;
  if (wFt > ws[ws.length - 1] + 1e-6) return { beyond: true, table: t };
  const lo = [...ws].reverse().find((x) => x <= wFt) ?? ws[0], hi = ws.find((x) => x >= wFt) ?? ws[ws.length - 1];
  const a = ftIn(byW[String(lo)]), b = ftIn(byW[String(hi)]);
  if (a === null || b === null) return null;
  const span = hi === lo ? a : a + (b - a) * (wFt - lo) / (hi - lo);
  return { span, table: t, snowCol: s[0] };
}
export function studFromTable(profile, { size, bearing, floorsAbove = 0 }) {
  const t = Object.values(profile?.tables || {}).find((x) => x.kind === 'stud');
  const r = t?.data?.rows?.find((x) => x[0] === size);
  if (!r) return null;
  if (!bearing) return { height: r[6] === null ? null : r[6] * FT_MM, spacing: r[7] === null ? null : r[7] * IN_MM, table: t };
  const sp = floorsAbove <= 0 ? r[2] : floorsAbove === 1 ? r[3] : r[4];
  return { height: r[1] === null ? null : r[1] * FT_MM, spacing: sp === null ? null : sp * IN_MM, table: t };
}

export function framingRows(framings, snap, loops, profile, { levelName = () => '' } = {}) {
  if (!profile || !framings?.length || !snap) return [];
  const has = (id) => !!profile.rule(id);
  if (!['frame.stud.spacing.max', 'frame.stud.height.max', 'frame.header.span.max'].some(has)) return [];
  const wallByGuid = new Map((snap.walls || []).map((w) => [w.guid, w]));
  const levelIdx = new Map((snap.levels || []).map((l, i) => [l.id, i]));
  const storeysWithWalls = [...new Set((snap.walls || []).map((w) => w.storey))];
  const crit = profile.criteria || {};
  const snow = crit.ground_snow_load && crit.ground_snow_load.unit === 'psf' ? Number(crit.ground_snow_load.value) : null;
  const out = [];
  for (const f of framings) {
    const w = wallByGuid.get(f.host);
    if (!w) continue;
    const bearing = !!(wallType(w.typeKey)?.exterior ?? /^ext/i.test(String(w.typeKey || '')));
    const i = levelIdx.get(w.storey) ?? 0;
    const floorsAbove = storeysWithWalls.filter((s) => (levelIdx.get(s) ?? -1) > i).length;
    const L = loops.get(w.storey), outline = L?.outlines?.[0]?.poly;
    const width = outline ? leastWidth(outline) : null;
    const where = (levelName(w.storey) || '') + ' wall ' + (w.name || w.guid?.slice(0, 6) || '');
    const studs = f.pieces.filter((p) => p.role === 'stud');
    const size = (studs[0]?.size || '').replace(/ ×.*$/, '');
    const st = size ? studFromTable(profile, { size, bearing, floorsAbove }) : null;
    const synth = (id, value, t) => { const r = profile.rule(id); return { ...r, value, clause: t ? (t.clause || t.id) : r.clause }; };
    if (has('frame.stud.spacing.max') && st) {
      const r = row('wall', where + ' (' + size + (bearing ? ', bearing' : ', non-bearing') + ')', synth('frame.stud.spacing.max', st.spacing ?? 0, st.table), f.spacing, w.guid);
      if (st.spacing === null) { r.ok = false; r.req = 0; }
      out.push(r);
    }
    if (has('frame.stud.height.max') && st && st.height !== null) out.push(row('wall', where + ' (' + size + ')', synth('frame.stud.height.max', st.height, st.table), wallHeight(w, snap.levels) || null, w.guid));
    if (has('frame.header.span.max') && bearing && width) {
      for (const p of f.pieces.filter((x) => x.role === 'header')) {
        const m = /^(\d+x\d+)(?:\s*×\s*(\d+))?/.exec(String(p.size || ''));
        if (!m) continue;
        const sz = (m[2] || '1') + '-' + m[1];
        const hs = headerSpanFromTable(profile, { size: sz, floorsAbove, snowPsf: snow, widthMm: width });
        const span = Math.max(0, (p.length || 0) - 3 * IN_MM);
        const at = where + ' header ' + sz;
        if (!hs) continue;
        if (hs.beyond) { const r = row('header', at, synth('frame.header.span.max', 0, hs.table), span, p.guid || w.guid); r.ok = null; r.found = null; out.push(r); continue; }
        out.push(row('header', at, synth('frame.header.span.max', hs.span, hs.table), span, p.guid || w.guid));
      }
    }
  }
  return out;
}

// Floor joists: the pack's joist table (kind 'joist', data.rows = [{ species, grade, size, spans: { '16': '15-7', … } }], the 40 psf
// living-area table, the stricter of the two). BimCraft does not record the species, so the span asked for is the LOWEST of the
// table's species for that size and spacing (between listed spacings the next wider one). Joists framed as TJI (engineered) are the
// maker's tables, not the code's, and are left out. A joist's span = its length (the framing tool runs joists wall to wall).
export function spanFromTable(profile, kind, { size, spacingMm }) {
  const t = Object.values(profile?.tables || {}).find((x) => x.kind === kind);
  const rows = (t?.data?.rows || []).filter((r) => r.size === size);
  if (!rows.length) return null;
  const sps = Object.keys(rows[0].spans || {}).map(Number).sort((a, b) => a - b);
  const sIn = spacingMm / IN_MM, col = sps.find((x) => x >= sIn - 0.05);
  if (col === undefined) return null;
  const spans = rows.map((r) => ftIn(r.spans[String(col)])).filter((v) => v !== null);
  return spans.length ? { span: Math.min(...spans), table: t, spacing: col } : null;
}
export const joistSpanFromTable = (profile, a) => spanFromTable(profile, 'joist', a);
export function joistRows(framings, profile, { levelName = () => '', tji = null } = {}) {
  if (!profile?.rule('frame.joist.span.max') || !framings?.length) return [];
  const out = [];
  for (const f of framings) {
    // GH.3-E: only while the person has loaded a maker's table (tji = { table, caseId, maxSpan(size, spacing) → { span, name } | null }); else TJI stays skipped
    const ej = tji ? f.pieces.filter((p) => p.role === 'joist' && !/^\d+x\d+$/.test(p.size)) : [];
    if (ej.length) {
      const longest = ej.reduce((a, b) => (b.length > a.length ? b : a)), hit = tji.maxSpan(longest.size, f.spacing);
      const r = profile.rule('frame.joist.span.max');
      if (hit) { out.push(row('floor', (levelName(f.storey) || '') + ' floor joists ' + longest.size + ' (' + hit.name + ')', { ...r, value: hit.span, clause: hit.name }, longest.length, longest.guid || f.guid)); continue; }
    }
    const js = f.pieces.filter((p) => p.role === 'joist' && /^\d+x\d+$/.test(p.size));
    if (!js.length) continue;
    const longest = js.reduce((a, b) => (b.length > a.length ? b : a));
    const jt = joistSpanFromTable(profile, { size: longest.size, spacingMm: f.spacing });
    if (!jt) continue;
    const r = profile.rule('frame.joist.span.max');
    out.push(row('floor', (levelName(f.storey) || '') + ' floor joists ' + longest.size + ' at ' + jt.spacing + ' in', { ...r, value: jt.span, clause: jt.table.clause || jt.table.id }, longest.length, longest.guid || f.guid));
  }
  return out;
}

// Rafters and ceiling joists (roof framings: kind 'roof', host = the roof, `pitch` = the roof's degrees). Table R802.4.1(1) is for 20 psf roof live
// load with the ceiling not attached; Table R802.5.1(1) for an uninhabitable attic without storage (10 psf live). Both are measured along the
// HORIZONTAL projection: a rafter's recorded length is the sloped one, so the span asked is length × cos(pitch). Where the place's ground
// snow load is over 20 psf (or the roof is trusses) the pack's table does not apply: a note row, not a pass.
// The lowest of the table's species is asked, as for floor joists.
// ---------------------------------------------------------------------------------------------------------------------------------------
const RAD = Math.PI / 180;
function roofSpanRows(framings, profile, { ruleId, kind, role, levelName, roomFor }) {
  const r = profile?.rule(ruleId);
  if (!r || !framings?.length) return [];
  const crit = profile.criteria || {};
  const snow = crit.ground_snow_load && crit.ground_snow_load.unit === 'psf' ? Number(crit.ground_snow_load.value) : null;
  const out = [];
  for (const f of framings) {
    const ps = f.pieces.filter((p) => p.role === role && /^\d+x\d+$/.test(p.size));
    if (!ps.length) continue;
    const longest = ps.reduce((a, b) => (b.length > a.length ? b : a));
    const horiz = role === 'rafter' ? longest.length * Math.cos((Number(f.pitch) || 0) * RAD) : longest.length;
    const where = (levelName(f.storey) || '') + ' roof ' + (role === 'rafter' ? 'rafters ' : 'ceiling joists ') + longest.size;
    const jt = spanFromTable(profile, kind, { size: longest.size, spacingMm: f.spacing });
    const rule = { ...r, value: jt ? jt.span : r.value, clause: jt ? jt.table.clause || jt.table.id : r.clause };
    const rw = row('roof', where + (jt ? ' at ' + jt.spacing + ' in' : ''), rule, horiz, longest.guid || f.guid);
    if (!jt || (role === 'rafter' && snow !== null && snow > 20)) { rw.ok = null; rw.found = null; }
    out.push(rw);
  }
  return out;
}
export const rafterRows = (framings, profile, o = {}) => roofSpanRows(framings, profile, { ruleId: 'frame.rafter.span.max', kind: 'rafter', role: 'rafter', levelName: () => '', ...o });
export const ceilingJoistRows = (framings, profile, o = {}) => roofSpanRows(framings, profile, { ruleId: 'frame.ceilingjoist.span.max', kind: 'ceiling-joist', role: 'ceilingjoist', levelName: () => '', ...o });

// ---------------------------------------------------------------------------------------------------------------------------------------
// Tier 3 — energy envelope (IECC R402.1.3 / IRC N1102.1.3, the pack's 'energy' table by climate zone). The zone is read from the pack's
// criteria.climate_zone text ("5A", "4C", "2B (…)"); none = one note, nothing guessed. What is compared is the INSULATION R-value of a wall type
// (nominal, as the code's table prints it, not an assembly U-factor): the layers marked function 'insulation' (or named so), R = thickness /
// conductivity (the keyword table of energy-bim.js, W/mK) × 5.678 to IP. The table's wall cell "20 or 13&5ci or 0&15ci" is options of cavity &
// continuous insulation: continuous = a layer named rigid / foam / board / xps / eps / pir / polyiso / continuous. The wall meets it when ANY option
// is met by the layers. Roofs and windows carry no insulation or U-factor in the model: each gets a note row ("no value"), never a pass.
// ---------------------------------------------------------------------------------------------------------------------------------------
const SI_TO_IP_R = 5.678263;
const CONT_INS = /rigid|foam|board|xps|eps|\bpir\b|polyiso|continuous|\bci\b/i;
const IS_INS = /insulat|batt|wool|cellulose|foam|xps|eps|\bpir\b|polyiso/i;
/** The IECC climate-zone key (the energy table's) for a pack's criteria text, or null. */
export function climateZoneKey(text) {
  const m = /^\s*(\d)\s*([A-C])?/i.exec(String(text || ''));
  if (!m) return null;
  const n = +m[1], c = (m[2] || '').toUpperCase();
  if (n <= 3) return String(n);
  if (n === 4) return c === 'C' ? '5 and marine 4' : '4 except marine';
  if (n === 5) return '5 and marine 4';
  if (n === 6) return '6';
  return '7 and 8';
}
/** Wall-cell options "20 or 13&5ci or 0&15ci" → [{ cavity, cont }] ("NR" or nothing → []). */
export function wallOptions(cell) {
  return String(cell || '').split(/\s+or\s+/i).map((o) => { const m = /^(\d+(?:\.\d+)?)(?:&(\d+(?:\.\d+)?)ci)?$/i.exec(o.trim()); return m ? { cavity: +m[1], cont: m[2] ? +m[2] : 0 } : null; }).filter(Boolean);
}
/** A wall type's insulation: { cavity, cont } in R-IP, or null when no layer is insulation (or has no known conductivity). */
export function insulationOf(type, lambdaOf) {
  if (!type?.layers) return null;
  let cavity = 0, cont = 0, any = false;
  for (const l of type.layers) {
    if (!(l.function === 'insulation' || IS_INS.test(String(l.mat || '')))) continue;
    const lam = lambdaOf(String(l.mat || ''));
    if (!(lam > 0) || !(l.t > 0)) continue;
    any = true;
    const r = l.t / 1000 / lam * SI_TO_IP_R;
    if (CONT_INS.test(String(l.mat || ''))) cont += r; else cavity += r;
  }
  return any ? { cavity, cont } : null;
}
/**
 * snap = model snapshot (walls with typeKey, openings, derived.roofs); typeOf(key) → the wall type; lambdaOf(name) → W/mK.
 * Rows: one per exterior wall TYPE in use (where = the type's name and how many walls), one note for the roofs, one for the windows.
 */
export function energyRows(snap, profile, { typeOf, typeName = (t) => t.key, lambdaOf = () => null } = {}) {
  if (!profile || !snap) return [];
  const rw = profile.rule('energy.wall.r.min'), rr = profile.rule('energy.roof.r.min'), ru = profile.rule('energy.window.u.max');
  if (!rw && !rr && !ru) return [];
  const table = Object.values(profile.tables || {}).find((x) => x.kind === 'energy');
  const zoneKey = climateZoneKey(profile.criteria?.climate_zone?.text);
  const cells = table && zoneKey ? table.data?.zones?.[zoneKey] : null;
  const where0 = 'Building envelope';
  const note = (rule, where, ref = '') => { const r0 = row('building', where, rule, null, ref); r0.ok = null; return r0; };
  const out = [];
  const clause = table ? table.clause || table.id : '';
  const rules = [rw, rr, ru].filter(Boolean);
  if (!cells) return rules.map((r) => note(r, where0 + ' (climate zone not given)'));
  const walls = (snap.walls || []).filter((w) => typeOf(w.typeKey)?.exterior);
  if (rw) {
    const opts = wallOptions(cells.wood_wall_r), byType = new Map();
    for (const w of walls) { const a = byType.get(w.typeKey) || { n: 0, ref: w.guid || '' }; a.n++; byType.set(w.typeKey, a); }
    for (const [key, a] of byType) {
      const type = typeOf(key), ins = insulationOf(type, lambdaOf), where = 'Wall type ' + typeName(type) + ' (' + a.n + (a.n === 1 ? ' wall)' : ' walls)');
      const need = opts.length ? Math.min(...opts.map((o) => o.cavity + o.cont)) : 0;
      const rule = { ...rw, value: need, clause };
      if (!opts.length || !ins) { out.push(note(rule, where, a.ref)); continue; }
      const met = opts.some((o) => ins.cavity + 0.05 >= o.cavity && ins.cont + 0.05 >= o.cont);
      const rowx = row('wall', where, rule, ins.cavity + ins.cont, a.ref);
      rowx.ok = met;   // the options are cavity AND continuous pairs: met by any one
      out.push(rowx);
    }
  }
  if (rr && (snap.derived?.roofs || []).length) out.push(note({ ...rr, value: Number(String(cells.ceiling_r).replace(/\D.*/, '')) || rr.value, clause }, 'Roof', snap.derived.roofs[0].guid || ''));
  if (ru && (snap.openings || []).some((o) => o.kind === 'window')) out.push(note({ ...ru, value: parseFloat(cells.fenestration_u) || ru.value, clause }, 'Windows', ''));
  return out;
}
