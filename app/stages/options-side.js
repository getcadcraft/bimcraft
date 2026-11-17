/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stages/options-side.js: concept options side by side, against the brief (0.10 BK.105, session stages-10). DOM-free:
 * node tools/bimcraft-test/stages-test.mjs --options.
 *
 * Built before (bk-r3-stages-10): the OPTION SETS in one model (../mass-options.js: several massing options, one current) and their
 * comparison on area and cost (../option-compare.js, cost only from the project's price table). What this adds is the row's own words,
 * "massing AND room layouts for several options in the same model, compared on area and cost":
 *   - a ROOM LAYOUT per option: the brief's rooms (brief.js) stacked into the option's floors, lowest floor first, and what does not fit;
 *   - the option's FIT to the brief: gross area asked for (target rooms / efficiency) against what the option offers, rooms placed, and
 *     (when the price table gave a cost and the brief a budget) under or over the budget;
 *   - a picture of the options side by side on ONE scale.
 * A layout is a stacking by area only (which floor a room is on): it draws no walls and says so.
 *
 * In the IFC: property set CadCraft_OptionLayout on the option's mass: Format 'cadcraft-option-layout 1', Layout (IfcText JSON
 * { floors: [{ floor, rooms: [{ name, count, area_m2 }] }], unplaced: [{ name, count, area_m2 }] }), Efficiency, Made (date).
 *
 *   stackRooms(rooms, option, { efficiency }) → { floors: [{ floor, capacity_m2, net_m2, rooms: [{ name, count, area_m2 }] }], unplaced, placed_m2, asked_m2 }
 *   optionFit(brief, option, { cost, layout }) → { asked_net_m2, asked_gross_m2, gross_m2, surplus_m2, fits, placed, of, cost, budget, budget_status: 'under' | 'over' | 'none' }
 *   compareToBrief(brief, sets, { costs: Map(guid → { total }) }) → [{ set, options: [{ ...option, fit, layout }] }]
 *   readLayouts(w) → Map(option guid → layout) · setLayoutOp(guid, layout, { efficiency }) → op · layoutOp(guid, brief) → op (stacks and stores)
 *   optionFigure(options, { width, label }) → SVG text of every option's footprint on one scale, current one marked
 */
import { op } from '../model-ops.js';
import { readOptionSets } from '../mass-options.js';
import { refuse, clean, r2, num, readJson, today } from './common.js';
import { DEFAULTS } from './brief.js';

export const LAYOUT_PSET = 'CadCraft_OptionLayout', LAYOUT_FORMAT = 'cadcraft-option-layout 1';

/** Rooms (one row per brief room with its count) into floors: largest first, each into the lowest floor that still has room. */
export function stackRooms(rooms, option, { efficiency = DEFAULTS.efficiency } = {}) {
  const eff = efficiency > 0 && efficiency <= 1 ? efficiency : DEFAULTS.efficiency;
  const measured = option.floorAreas_m2?.length === option.floors && option.floorAreas_m2.every((a) => a > 0);   // mass-options.js reads an absent FloorAreas as [0]: a single-floor option would then have no area
  const gross = measured ? option.floorAreas_m2 : Array.from({ length: option.floors }, () => option.footprint_m2);
  const floors = gross.map((g, i) => ({ floor: i + 1, capacity_m2: r2(g * eff), net_m2: 0, rooms: [] }));
  const items = [];
  for (const r of rooms || []) for (let i = 0; i < Math.max(1, r.count || 1); i++) items.push({ name: r.name, area_m2: r.target_m2 ?? r.area_m2 });
  items.sort((a, b) => b.area_m2 - a.area_m2 || a.name.localeCompare(b.name));
  const unplaced = [];
  for (const it of items) {
    const f = floors.find((x) => x.capacity_m2 - x.net_m2 + 1e-9 >= it.area_m2);
    if (!f) { unplaced.push(it); continue; }
    f.net_m2 = r2(f.net_m2 + it.area_m2);
    const row = f.rooms.find((x) => x.name === it.name);
    if (row) row.count++; else f.rooms.push({ name: it.name, count: 1, area_m2: it.area_m2 });
  }
  const fold = (list) => { const m = new Map(); for (const x of list) { const k = x.name + '|' + x.area_m2; m.set(k, m.has(k) ? { ...m.get(k), count: m.get(k).count + 1 } : { name: x.name, count: 1, area_m2: x.area_m2 }); } return [...m.values()]; };
  return { floors, unplaced: fold(unplaced), placed_m2: r2(floors.reduce((s, f) => s + f.net_m2, 0)), asked_m2: r2(items.reduce((s, x) => s + x.area_m2, 0)) };
}

export function optionFit(brief, option, { cost = null, layout = null } = {}) {
  const net = r2((brief.rooms || []).reduce((s, r) => s + r.target_m2 * r.count, 0)), eff = brief.efficiency > 0 ? brief.efficiency : DEFAULTS.efficiency;
  const asked = r2(net / eff), lay = layout || stackRooms(brief.rooms, option, { efficiency: eff });
  const total = cost && Number.isFinite(cost.total) ? cost.total : null;
  const placedRooms = lay.floors.reduce((s, f) => s + f.rooms.reduce((a, r) => a + r.count, 0), 0), allRooms = placedRooms + (lay.unplaced || []).reduce((s, r) => s + r.count, 0);
  return {
    asked_net_m2: net, asked_gross_m2: asked, gross_m2: option.gross_m2, surplus_m2: r2(option.gross_m2 - asked), fits: !(lay.unplaced || []).length && net > 0, placed: placedRooms, of: allRooms,
    cost: total, budget: brief.budget > 0 ? brief.budget : null, budget_status: total !== null && brief.budget > 0 ? (total <= brief.budget ? 'under' : 'over') : 'none',
  };
}

export function compareToBrief(brief, sets, { costs = new Map(), layouts = new Map() } = {}) {
  return (sets || []).map((s) => ({ set: s.set, options: s.options.map((o) => { const layout = layouts.get(o.guid) || null; return { ...o, layout, fit: optionFit(brief, o, { cost: costs.get(o.guid) || null, layout }) }; }) }));
}

// ---- in the file ------------------------------------------------------------------------------------------------------------------------
export function readLayouts(w) {
  const out = new Map();
  for (const s of readOptionSets(w)) for (const o of s.options) {
    const j = readJson(w, o.id, LAYOUT_PSET, 'Layout');
    if (Array.isArray(j.floors)) out.set(o.guid, { floors: j.floors.map((f) => ({ floor: num(f.floor), capacity_m2: num(f.capacity_m2), net_m2: num(f.net_m2), rooms: (f.rooms || []).map((r) => ({ name: clean(r.name, 80), count: Math.max(1, num(r.count, 1)), area_m2: num(r.area_m2) })) })), unplaced: (j.unplaced || []).map((r) => ({ name: clean(r.name, 80), count: Math.max(1, num(r.count, 1)), area_m2: num(r.area_m2) })), placed_m2: num(j.placed_m2), asked_m2: num(j.asked_m2) });
  }
  return out;
}
function findOption(w, guid) { for (const s of readOptionSets(w)) { const o = s.options.find((x) => x.guid === guid); if (o) return o; } return refuse('model.err.mass.none'); }
function store(w, o, layout, eff) {
  w.upsertPset(o.id, LAYOUT_PSET, [['Format', 'IFCLABEL', LAYOUT_FORMAT], ['Layout', 'IFCTEXT', JSON.stringify(layout)], ['Efficiency', 'IFCREAL', eff], ['Made', 'IFCLABEL', today()]]);
}
export function setLayoutOp(guid, layout, { efficiency = DEFAULTS.efficiency } = {}) {
  if (!layout || !Array.isArray(layout.floors)) refuse('options.err.layout');
  return op((w) => { const o = findOption(w, guid); store(w, o, layout, efficiency); return { id: o.id, ids: [o.id], made: new Map() }; });
}
/** Stack the brief's rooms into this option and keep the layout with it, one undo step. */
export function layoutOp(guid, brief) {
  return op((w) => {
    const o = findOption(w, guid);
    if (!(brief.rooms || []).length) refuse('options.err.nobrief');
    store(w, o, stackRooms(brief.rooms, o, { efficiency: brief.efficiency }), brief.efficiency);
    return { id: o.id, ids: [o.id], made: new Map() };
  });
}

// ---- the picture ------------------------------------------------------------------------------------------------------------------------
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
/** Footprints on ONE scale in a row (a longer one is not shrunk to look like a shorter one), each named and its gross area under it. */
export function optionFigure(options, { width = 720, label = (o) => o.option, area = (o) => r2(o.gross_m2) + ' m²' } = {}) {
  const list = (options || []).filter((o) => o.pts?.length >= 3);
  if (!list.length) return '';
  const boxes = list.map((o) => { const xs = o.pts.map((p) => p[0]), ys = o.pts.map((p) => p[1]); return { o, x0: Math.min(...xs), y0: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) }; });
  const gap = 24, pad = 12, textH = 34, usable = width - pad * 2 - gap * (list.length - 1);
  const sum = boxes.reduce((s, b) => s + b.w, 0), maxH = Math.max(...boxes.map((b) => b.h));
  const k = Math.min(usable / sum, 220 / maxH);
  let x = pad;
  const parts = boxes.map((b) => {
    const pts = b.o.pts.map((p) => [x + (p[0] - b.x0) * k, pad + (maxH - (p[1] - b.y0)) * k]).map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
    const cx = x + (b.w * k) / 2, by = pad + maxH * k + 14;
    const g = `<g data-option="${esc(b.o.guid)}"><polygon points="${pts}" fill="${b.o.current ? '#cfe3f7' : '#eceff1'}" stroke="#37474f" stroke-width="${b.o.current ? 2 : 1}"/>`
      + `<text x="${cx.toFixed(1)}" y="${by.toFixed(1)}" text-anchor="middle" font-size="11" fill="#263238">${esc(label(b.o))}${b.o.current ? ' *' : ''}</text>`
      + `<text x="${cx.toFixed(1)}" y="${(by + 14).toFixed(1)}" text-anchor="middle" font-size="10" fill="#546e7a">${esc(area(b.o))}</text></g>`;
    x += b.w * k + gap;
    return g;
  });
  const H = pad * 2 + maxH * k + textH;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${H.toFixed(0)}" width="${width}" height="${H.toFixed(0)}" role="img" data-options-figure="1">${parts.join('')}</svg>`;
}
