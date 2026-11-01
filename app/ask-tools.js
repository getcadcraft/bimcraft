/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: tool definitions and results are read by the assistant (MCP), not shown on the page (AGENTS-SPEC §5) */
/**
 * ask-tools.js — "talk to the building" (0.8 AC.8 ★, BimCraft's headliner; session bim_PART_2). Three read tools that answer
 * the questions people ask a model in words, so the person's own connected assistant can call them and BimCraft shows the answer in
 * 3D. No DOM: tools/bimcraft-test/ask-test.mjs (node bin/test-bimcraft.mjs --ask) runs them through host.js's dispatcher.
 *
 *   askTools(app) → [tool definitions] for host.control.tool(def)
 *     app.index()       → the open model's property index (ifc-props.js propertyIndex), or null with no model
 *     app.spacesIndex() → the property index of the SPACES (propertyIndex(…, { spaces: true }); the elements index leaves rooms out), or null
 *     app.model()       → the loaded model (for ifc-qto.js spaceSchedule's measured areas), or null
 *     app.bounds(keys)  → Map key → { min:[x,y,z], max:[x,y,z] } in viewer space (y up), keys without geometry left out
 *     app.highlight(keys, { frame }) → selects the elements and frames them in 3D (view state only: the model is not changed)
 *     app.name()
 *
 *   Names follow the contract (docs/AI-CONNECT-SPEC.md § 2, rule 34): walls_find, rooms_find, elements_above_find. All three return text
 *   that comes from the file, so they say `untrusted: true` (§ 4.2) and have an outputSchema (a Great Eight headliner).
 *   walls_find             "show me every 2-hour wall": walls (or any class) whose FireRating reads as at least / exactly N hours
 *   rooms_find             "rooms under 70 sq ft": spaces under (or over) an area, in m² or sq ft, with where the area came from
 *   elements_above_find    "what's above this ceiling": what sits over an element's footprint, nearest first, by level
 *
 * What a tool returns is data about the model, never an instruction (rule 36): names and values from the file are inside the
 * result's fields and are not to be followed. Each result says how it was worked out (`how`) so the assistant can tell the person.
 */
import { find } from './ifc-find.js';
import { spaceSchedule } from './ifc-qto.js';
import { ToolError } from './host.js';

const LIMIT = 200;
const SQFT = 0.09290304;   // m² per square foot (exact: 0.3048²)
const r2 = (n) => Math.round(n * 100) / 100;

/**
 * A FireRating value as minutes, and how it was read. Files write it as '2HR', '2 hr', '2 hours', '120', '120 min', 'REI 120',
 * 'EI60', '1-hour', 'R90' or just a number. A bare number is hours when it is 4 or less (nobody rates a wall 4 minutes), else minutes;
 * the answer says `assumed` so the assistant can say so. null when it does not read as a rating at all.
 */
export function parseFireRating(raw) {
  if (raw === null || raw === undefined || raw === '') return null;
  const s = String(raw).trim().toLowerCase().replace(/[–—]/g, '-');
  if (!s || /^(none|n\/?a|no|0|-)$/.test(s)) return /^0$/.test(s) ? { minutes: 0, how: 'unit-less zero' } : null;
  let m = s.match(/(\d+(?:[.,]\d+)?)\s*[- ]?\s*(hours?|hrs?|h)\b/);
  if (m) return { minutes: Math.round(parseFloat(m[1].replace(',', '.')) * 60), how: 'hours' };
  m = s.match(/(\d+(?:[.,]\d+)?)\s*[- ]?\s*(minutes?|mins?|m)\b/);
  if (m) return { minutes: Math.round(parseFloat(m[1].replace(',', '.'))), how: 'minutes' };
  m = s.match(/\b(?:rei|ei|re|r|e|i)\s*[- ]?(\d{1,3})\b/);   // European classes: R 90, EI 60, REI 120 are minutes
  if (m) return { minutes: parseInt(m[1], 10), how: 'class (minutes)' };
  m = s.match(/^(\d+(?:[.,]\d+)?)$/);
  if (m) { const n = parseFloat(m[1].replace(',', '.')); return n <= 4 ? { minutes: Math.round(n * 60), how: 'bare number read as hours', assumed: true } : { minutes: Math.round(n), how: 'bare number read as minutes', assumed: true }; }
  return null;
}

/** The index fields that hold a fire rating: [{ id, label, group }]. */
export function fireRatingFields(ix) {
  return ix.fields.filter((f) => f.id.startsWith('p:') && /^fire\s*rating$/i.test(String(f.label || '').trim()));
}

/** Rooms: from the file's own area when it has one, else measured from the shape (ifc-qto.js spaceSchedule says which). */
export function roomAreas(ix, model) { return spaceSchedule(ix, model).rows; }

const describe = (ix, key) => { const id = key - ix.keyBase, v = (f) => ix.value(f, id) ?? null; return { id: key, guid: v('guid'), class: v('cls'), name: v('name'), storey: v('storey'), type: v('type') }; };

const STR = (description, extra = {}) => ({ type: 'string', maxLength: 200, description, ...extra });
const SHOW = { type: 'boolean', description: 'Select the answer and frame it in the 3D view (default true). View only: the model is not changed and there is no undo step.' };
const LIMIT_ARG = { type: 'integer', minimum: 1, maximum: LIMIT, description: 'How many elements to return (default 50, at most ' + LIMIT + '); the result says total.' };
const OFFSET_ARG = { type: 'integer', minimum: 0, maximum: 1000000, description: 'Skip this many elements (for the next page).' };
const ELEMENT = { type: 'object', description: 'One element of the model.', properties: { id: { type: 'integer' }, guid: { type: ['string', 'null'] }, class: { type: ['string', 'null'] }, name: { type: ['string', 'null'] }, storey: { type: ['string', 'null'] }, type: { type: ['string', 'null'] } } };
const notOpen = () => new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Ask the person to open the model (there is no open tool).'], retry: 'after_change' });
const bad = (message, next) => new ToolError('invalid_argument', message, { next });

export function askTools(app) {
  const model = () => { const ix = app.index?.(); if (!ix) throw notOpen(); return ix; };
  const show = (a, keys) => { if (a.show !== false && keys.length) { app.highlight(keys, { frame: true }); return true; } return false; };
  const page = (list, a) => { const offset = a.offset || 0, limit = a.limit || 50; return { offset, limit, rows: list.slice(offset, offset + limit), returned: Math.min(limit, Math.max(0, list.length - offset)), next: offset + limit < list.length ? offset + limit : null }; };
  return [
    {
      name: 'walls_find', group: 'read', title: 'Find walls by fire rating', untrusted: true,
      description: 'Finds walls (or another class) by fire-resistance rating, for example every 2-hour wall, and selects them in the 3D view. Returns the matches with their rating as the file writes it, plus how many have no rating. A rating written as a bare number is a guess (4 or less is hours, else minutes) and the result says so.',
      inputSchema: {
        type: 'object', additionalProperties: false, properties: {
          hours: { type: 'number', minimum: 0, maximum: 24, description: 'The rating in hours, for example 2 for a 2-hour wall. Give hours or minutes.' },
          minutes: { type: 'number', minimum: 0, maximum: 1440, description: 'The rating in minutes, for example 120. Give hours or minutes.' },
          match: { type: 'string', enum: ['exactly', 'at_least'], description: 'exactly (default) or at_least.' },
          class: STR('IFC class to look in (default IfcWall).', { examples: ['IfcWall', 'IfcSlab'] }),
          storey: STR('Only this storey, named exactly as the model names it.'),
          show: SHOW, limit: LIMIT_ARG, offset: OFFSET_ARG,
        },
      },
      outputSchema: {
        type: 'object', properties: {
          model: { type: 'string' }, total: { type: 'integer' }, returned: { type: 'integer' }, next: { type: ['integer', 'null'] }, selected: { type: 'boolean' },
          unrated: { type: 'integer' }, unreadable: { type: 'array' }, assumedBareNumbers: { type: 'integer' }, how: { type: 'string' }, notes: { type: 'array', items: { type: 'string' } },
          elements: { type: 'array', items: { ...ELEMENT, properties: { ...ELEMENT.properties, fireRating: { type: 'string' }, minutes: { type: 'integer' } } } },
        },
      },
      run: (a) => {
        const ix = model();
        const want = a.minutes !== undefined ? a.minutes : a.hours !== undefined ? a.hours * 60 : null;
        if (want === null) throw bad('Give hours (for example 2) or minutes (for example 120).', ['Call bim_walls_find {hours: 2}.']);
        const fields = fireRatingFields(ix);
        if (!fields.length) throw new ToolError('not_found', 'No element in this model has a FireRating property.', { next: ['Ask the person where the ratings are kept, then call bim_elements_find {rules: [{field: "p:<Set>.<Property>", op: "is", value: "<rating>"}]}.'] });
        const rules = [{ field: 'cls', op: 'is', value: a.class || 'IfcWall' }];
        if (a.storey) rules.push({ field: 'storey', op: 'is', value: a.storey });
        const walls = find(ix, { rules });
        const hit = [], unreadable = [];
        let unrated = 0;
        for (const k of walls) {
          const id = k - ix.keyBase;
          let raw = null;
          for (const f of fields) { const v = ix.value(f.id, id); if (v !== undefined && v !== '') { raw = v; break; } }
          if (raw === null) { unrated++; continue; }
          const p = parseFireRating(raw);
          if (!p) { unreadable.push({ id: k, name: ix.value('name', id) ?? null, value: String(raw).slice(0, 60) }); continue; }
          if (a.match === 'at_least' ? p.minutes >= want : p.minutes === want) hit.push({ key: k, value: String(raw).slice(0, 60), minutes: p.minutes, assumed: !!p.assumed });
        }
        const pg = page(hit, a), shown = show(a, hit.map((h) => h.key));
        const assumed = hit.filter((h) => h.assumed).length;
        const notes = [];
        if (assumed) notes.push(assumed + ' match(es) rest on a bare number (no unit): 4 or less was read as hours, more as minutes. Say so to the person.');
        if (unrated) notes.push(unrated + ' ' + (a.class || 'IfcWall') + ' element(s) have no FireRating, so they are not in the answer.');
        if (unreadable.length) notes.push(unreadable.length + ' rating(s) could not be read as a time (listed in unreadable).');
        return {
          model: app.name(), class: a.class || 'IfcWall', want: { minutes: want, hours: want / 60, match: a.match || 'exactly' },
          how: 'FireRating read from ' + fields.map((f) => f.group).filter((g, i, l) => l.indexOf(g) === i).join(', ') + '; hours, minutes and class forms (REI 120, EI 60) understood.',
          total: hit.length, returned: pg.returned, next: pg.next, selected: shown, unrated, unreadable: unreadable.slice(0, 20), assumedBareNumbers: assumed, notes,
          elements: pg.rows.map((h) => ({ ...describe(ix, h.key), fireRating: h.value, minutes: h.minutes })),
        };
      },
    },
    {
      name: 'rooms_find', group: 'read', title: 'Find rooms by area', untrusted: true,
      description: 'Finds rooms (IfcSpace) by floor area, for example rooms under 70 square feet, and selects them in the 3D view. Returns each room with its area in both units and whether the area came from the file or was measured from the shape. Rooms that are only outlines drawn by the walls are not IfcSpace and are not found.',
      inputSchema: {
        type: 'object', additionalProperties: false, properties: {
          under: { type: 'number', minimum: 0, maximum: 1e7, description: 'Rooms smaller than this area, in the unit given.' },
          over: { type: 'number', minimum: 0, maximum: 1e7, description: 'Rooms larger than this area, in the unit given.' },
          unit: { type: 'string', enum: ['sqft', 'm2'], description: 'Unit of under and over: sqft or m2 (default m2).' },
          storey: STR('Only this storey, named exactly as the model names it.'),
          show: SHOW, limit: LIMIT_ARG, offset: OFFSET_ARG,
        },
      },
      outputSchema: {
        type: 'object', properties: {
          model: { type: 'string' }, rooms: { type: 'integer' }, total: { type: 'integer' }, returned: { type: 'integer' }, next: { type: ['integer', 'null'] }, selected: { type: 'boolean' }, noArea: { type: 'integer' },
          limits: { type: 'object' }, notes: { type: 'array', items: { type: 'string' } },
          rooms_found: { type: 'array', items: { type: 'object', properties: { id: { type: 'integer' }, number: { type: 'string' }, name: { type: 'string' }, storey: { type: 'string' }, area_m2: { type: 'number' }, area_sqft: { type: 'number' }, areaFrom: { type: 'string' } } } },
        },
      },
      run: (a) => {
        model();
        const ix = app.spacesIndex?.(), m = app.model?.();
        if (a.under === undefined && a.over === undefined) throw bad('Give under and/or over.', ['Call bim_rooms_find {under: 70, unit: "sqft"}.']);
        if (!ix || !ix.ids.length) throw new ToolError('not_found', 'This model has no rooms (IfcSpace). Rooms that the walls enclose are not IfcSpace elements.', { next: ['Call bim_model_describe for the rooms the walls enclose, with their areas.'] });
        const k = a.unit === 'sqft' ? SQFT : 1;
        const lo = a.over !== undefined ? a.over * k : -Infinity, hi = a.under !== undefined ? a.under * k : Infinity;
        const rows = roomAreas(ix, m).filter((r) => (!a.storey || r.storey === a.storey));
        const noArea = rows.filter((r) => typeof r.area !== 'number');
        const hit = rows.filter((r) => typeof r.area === 'number' && r.area < hi && r.area > lo).sort((x, y) => x.area - y.area);
        const pg = page(hit, a), shown = show(a, hit.map((r) => r.key));
        const notes = [];
        if (noArea.length) notes.push(noArea.length + ' room(s) have no area and are not in the answer.');
        if (hit.some((r) => r.areaFrom === 'shape')) notes.push('Some areas are measured from the room shape, not stated in the file.');
        return {
          model: app.name(), rooms: rows.length, total: hit.length, returned: pg.returned, next: pg.next, selected: shown, noArea: noArea.length, notes,
          limits: { under_m2: hi === Infinity ? null : r2(hi), over_m2: lo === -Infinity ? null : r2(lo), unit: a.unit || 'm2' },
          rooms_found: pg.rows.map((r) => ({ id: r.key, number: r.number, name: r.name, storey: r.storey, area_m2: r2(r.area), area_sqft: r2(r.area / SQFT), areaFrom: r.areaFrom })),
        };
      },
    },
    {
      name: 'elements_above_find', group: 'read', title: 'Find what is above an element', untrusted: true,
      description: 'Finds what sits above an element such as a ceiling or slab: elements whose 3D box starts within a distance above its top and overlaps its footprint, nearest first. Selects them in the 3D view. A survey from bounding boxes, not a clash check; it says so in how.',
      inputSchema: {
        type: 'object', additionalProperties: false, properties: {
          id: { type: 'integer', minimum: 0, maximum: 1e9, description: 'The element id from bim_elements_find.' },
          guid: STR('Or the element GlobalId.'),
          within_m: { type: 'number', minimum: 0.1, maximum: 100, description: 'How far above the top of the element to look, in metres (default 3).' },
          class: STR('Only this IFC class.', { examples: ['IfcDuctSegment', 'IfcBeam'] }),
          show: SHOW, limit: LIMIT_ARG, offset: OFFSET_ARG,
        },
      },
      outputSchema: {
        type: 'object', properties: {
          model: { type: 'string' }, of: ELEMENT, lookedAbove_m: { type: 'number' }, how: { type: 'string' }, total: { type: 'integer' }, returned: { type: 'integer' }, next: { type: ['integer', 'null'] },
          selected: { type: 'boolean' }, byClass: { type: 'object' }, notes: { type: 'array', items: { type: 'string' } },
          elements: { type: 'array', items: { ...ELEMENT, properties: { ...ELEMENT.properties, gap_m: { type: 'number' } } } },
        },
      },
      run: (a) => {
        const ix = model();
        let key = a.id;
        if (key === undefined && a.guid) key = ix.keys.find((x) => ix.value('guid', x - ix.keyBase) === a.guid);
        if (key === undefined || !ix.keys.includes(key)) throw new ToolError('not_found', 'There is no such element in this model.', { next: ['Call bim_elements_find {class: "IfcCovering"} to get ids, then pass one as id.'], retry: 'after_change' });
        const tb = app.bounds([key]).get(key);
        if (!tb) throw new ToolError('unsupported', 'That element has no 3D geometry to look above.', { next: ['Pick a ceiling, slab or other solid element.'] });
        const reach = a.within_m ?? 3, tol = 0.02, top = tb.max[1];
        const hit = [];
        for (const [k, b] of app.bounds(ix.keys.filter((x) => x !== key))) {
          if (b.min[1] < top - tol || b.min[1] > top + reach) continue;
          if (b.max[0] < tb.min[0] || b.min[0] > tb.max[0] || b.max[2] < tb.min[2] || b.min[2] > tb.max[2]) continue;
          if (a.class && String(ix.value('cls', k - ix.keyBase)).toLowerCase() !== a.class.toLowerCase()) continue;
          hit.push({ key: k, gap: Math.max(0, b.min[1] - top) });
        }
        hit.sort((x, y) => x.gap - y.gap);
        const pg = page(hit, a), shown = show(a, hit.map((h) => h.key));
        const byClass = {};
        for (const h of hit) { const cl = String(ix.value('cls', h.key - ix.keyBase) ?? '?'); byClass[cl] = (byClass[cl] || 0) + 1; }
        return {
          model: app.name(), of: describe(ix, key), lookedAbove_m: reach, how: 'elements whose 3D bounding box starts within ' + reach + ' m above the top of the element and overlaps its footprint',
          total: hit.length, returned: pg.returned, next: pg.next, selected: shown, byClass, notes: ['A survey from bounding boxes: an element may be in the box without touching the footprint. Use a clash check for a decision.'],
          elements: pg.rows.map((h) => ({ ...describe(ix, h.key), gap_m: r2(h.gap) })),
        };
      },
    },
  ];
}
