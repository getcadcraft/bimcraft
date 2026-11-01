/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * agents.js — BimCraft for AI assistants and scripts: the Draw edits (0.6 DF.25, session `bim-draw`; docs/AGENTS-SPEC.md §5.2,
 * §6.3). The apps contain no AI: this gives the person's own assistant tools on the open model; Settings › BimCraft ›
 * Assistants decides which groups. Beside bim-agent.js (0.4 X.7: elements_find, elements_isolate, element_properties), which
 * keeps finding and showing elements; bimcraft.js configures the control channel. One source for both paths: the live window
 * (installAgents) and the headless core (tools/cli/headless/ifc.mjs).
 *
 *   modelTools(env) → [tool definitions] (DOM-free; the headless core and bin/test-bimcraft.mjs --draw06 run them)
 *     env = { ed() (an IfcEditor), apply(label, op) → Promise<op result> (one undo step "Assistant: <label>") }
 *   installAgents(modelUi, app) → registers modelTools + the window's own tools on host.control (bimcraft.js calls it once)
 *     app = { control, model(), selection() → keys, select(keys), save() → Promise<bool>, undo() → Promise, busy() → null | what }
 *   describeModel(ed) · levelRef(ed, nameOrGuid)
 * Units: millimetres; points [x, y] in the level's plan (as the Draw tools: x east, y north on an unturned level).
 *
 * Tools:
 *   model_describe  read    levels (name, guid, elevation, height), walls by type, doors, windows, rooms with areas, floors,
 *                           ramps, grids, columns, the site; the wall / door / window types the edit tools take
 *   walls_list      read    the walls drawn with BimCraft's tools on a level: guid, ends, type, thickness, height, length
 *   walls_add       edit    walls along points on a level (closed: back to the first); joined, rooms follow; one undo step
 *   opening_add     edit    a door or window in a wall (by its guid), at an offset along it or in its middle; one undo step
 *   floor_add       edit    a floor or slab of any outline on a level; one undo step
 *   levels_add      edit    levels at heights above the lowest; one undo step
 *   grid_add        edit    grid lines by count and spacing (1, 2, 3 … and A, B, C …); one undo step
 *   frame_break     read    what breaks first in the analysed frame (the Analysis tab's Break it; 0.8 round 3, EG.31)
 *   0.7 AS.5 (session assistants):
 *   0.8 (bim_PART_2):
 *   phase_describe  read    existing / demolish / new counts and GlobalIds (EG.59)
 *   phase_set       edit    mark elements existing / demolish / new, or clear; hosted doors and windows follow (EG.59)
 *   massing_describe read   massing options for a room program (EG.58)
 *   massing_add     edit    levels, walls and slabs for one of them (EG.58)
 *   furniture_add   edit    starter furniture in a room by rules, clear of doors and windows; what does not fit is listed (EG.60)
 *   element_set     edit    an element's Name / Description / ObjectType / Tag, or one property value (its own set; a type's
 *                           set only with type: true — every element of the type follows); IfcEditor's copy-on-write
 *   elements_delete edit    elements by GlobalId: BimCraft-drawn walls / doors / windows / derived floors through the Draw
 *                           module (rooms and joins follow), any other element with its parts and openings; one undo step
 *   elements_move   edit    elements by GlobalId by [dx, dy, dz] mm (their placement; hosted parts follow); a BimCraft-
 *                           drawn wall moves through wall_change, a door or window along its wall through opening_change
 *   wall_change     edit    a drawn wall's ends or type; opening_change: a door's or window's offset, size, sill or type
 *   (live only) app_info, selection_get (read) · selection_set, undo (edit) · model_save (save) · usd_export (export, 0.7 AS.6)
 *   · render_still, render_queue (export, 0.7 AS.6, session assistants-gaps: render-tools.js, a copy of ModelCraft's; only in the
 *   window, when the page hands `render`; the headless package carries render-tools.js without the renderer it loads on use)
 */
import { getHost, toolResult, undoRollback, peekUndo, ToolError } from './host.js';
import { renderTools } from './render-tools.js';
import { snapshotModel, drawWalls, placeOpening, loopsOf, op, changeWall, changeOpening, removeElements } from './model-ops.js';
import { readDerived } from './model-slabs.js';
import { EDITABLE_ATTRS } from './ifc-edit.js';
import { ids as idsOf } from './ifc-util.js';
import { WALL_TYPES, readWalls } from './model-walls.js';
import { DOOR_TYPES, WINDOW_TYPES } from './model-openings.js';
import { placeDrawnFloor, readDrawnFloors, polyProblem } from './model-floors.js';
import { addLevels, readSite } from './model-site.js';
import { gridLayout, placeGrid, readGrids } from './model-grids.js';
import { readColumns } from './model-columns.js';
import { readRamps } from './model-ramps.js';
import { ModelWriter } from './model-write.js';
import { val } from './ifc-util.js';
import { t } from './i18n.js';
import { phaseOp, phaseGuids, PHASES } from './phases.js';   // 0.8 EG.59 (bim_PART_2)
import { furnishPlan, furnishOp } from './furnish-model.js';   // 0.8 EG.60 (bim_PART_2)
import { KINDS as FURNISH_KINDS } from './furnish.js';
import { energyTools } from './energy-agents.js';   // 0.8 EG.13 (energy_PART_2's mount line 2, mounted by bim-sim_PART_2)
import { carbonTools } from './carbon-agents.js';
import { cost5dTools } from './cost5d-agents.js';
import { pvTools } from './pv-agents.js';
import { simTools } from './sim-agents.js';   // 0.8 EG.48 / EG.49 (bim-sim_PART_2): people in the building, escape distances, room acoustics
import { autodimTools } from './autodim-agents.js';   // 0.8 EG.20
import { narrationTools } from './narration-agents.js';   // 0.8 EG.50
import { scanTools } from './scan-agents.js';
import { scanProgressTools } from './scan-progress-agents.js';   // 0.8 EG.39 (bim-analysis_PART_4)   // 0.8 EG.37 (spikes_PART_4)
import { mepTools } from './mep-agents.js';   // 0.8 EG.1–EG.4 (mep_PART_2's line 1)
import { massingOptions, buildOption } from './program-mass.js';   // 0.8 EG.58 (bim_PART_2)
import { askTools } from './ask-tools.js';   // 0.8 AC.8 ★ (bim_PART_2): walls_find, rooms_find, elements_above_find

const LIMIT = 1000;
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);
const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const XY = { type: 'array', items: { type: 'number', minimum: -1e7, maximum: 1e7 }, minItems: 2, maxItems: 2 };
const LEVEL = { type: 'string', maxLength: 255, description: 'A level by its name or GlobalId (default: the level at elevation 0, else the lowest).' };
const writer = (ed) => new ModelWriter(ed.W, ed.api, ed.mid);
const area = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return Math.abs(s / 2); };
/** A refusal from a model op ({ key }) as a plain sentence. */
const said = (e) => (e?.key ? t(e.key) : String(e?.message || e));

/** The level asked for: by GlobalId, then by name (any case); none = the one at 0, else the lowest. */
export function levelRef(ed, ref) {
  const L = snapshotModel(ed).levels;
  if (!L.length) throw new Error('The model has no levels (IfcBuildingStorey).');
  if (!ref) return L.find((l) => Math.abs(l.elevation) < 1) || L[0];
  const s = String(ref).trim().toLowerCase();
  const l = L.find((x) => x.guid === ref) || L.find((x) => String(x.name).toLowerCase() === s);
  if (!l) throw new Error('No level "' + ref + '". Levels: ' + L.map((x) => x.name).join(', ') + '.');
  return l;
}

/** The model laid out (model_describe's body). */
export function describeModel(ed) {
  const w = writer(ed), snap = snapshotModel(ed);
  const levels = snap.levels.map((l) => ({ name: l.name, guid: l.guid, elevation: r1(l.elevation), height: r1(l.height) }));
  const byType = {};
  for (const x of snap.walls) byType[x.typeKey || 'other'] = (byType[x.typeKey || 'other'] || 0) + 1;
  const rooms = [];
  for (const l of snap.levels) { try { for (const r of loopsOf(ed, l.id).rooms || []) rooms.push({ level: l.name, area: r1(area(r.poly) / 1e6), areaUnit: 'm²' }); } catch (e) { /* a level the tools cannot read */ } }
  let grids = [], columns = 0, ramps = 0, floors = 0, site = null;
  try { grids = readGrids(w).flatMap((g) => g.axes.map((x) => x.tag)); } catch (e) { /* none */ }
  try { columns = readColumns(w).length; } catch (e) { /* none */ }
  try { ramps = readRamps(w).length; } catch (e) { /* none */ }
  try { floors = readDrawnFloors(w).length; } catch (e) { /* none */ }
  try { const s = readSite(w); site = s ? { outline: s.points.length >= 3, area: s.points.length >= 3 ? r1(area(s.points) / 1e6) : null } : null; } catch (e) { /* none */ }
  return {
    units: 'mm', schema: snap.v4 ? 'IFC4' : 'IFC2X3', levels,
    walls: { count: snap.walls.length, byType },
    doors: snap.openings.filter((o) => o.kind === 'door').length, windows: snap.openings.filter((o) => o.kind === 'window').length,
    rooms, floorsByOutline: floors, ramps, grids, columns, site,
    types: { walls: WALL_TYPES.map((x) => x.key), doors: DOOR_TYPES.map((x) => x.key), windows: WINDOW_TYPES.map((x) => x.key) },
  };
}

/** Where an element's property `name` lives: its own sets first (set name optional), then its type's. → ref or null. */
export function propRef(ed, id, set, name) {
  const api = ed.api, mid = ed.mid, lc = (x) => String(x ?? '').toLowerCase();
  ed.index();
  const look = (psetId, fromType) => {
    const ps = api.GetLine(mid, psetId, false);
    if (!ps || !ps.HasProperties || (set && lc(val(ps.Name)) !== lc(set))) return null;
    for (const h of ps.HasProperties) { const p = api.GetLine(mid, h.value, false); if (p && lc(val(p.Name)) === lc(name)) return { psetId, propId: h.value, fromType, setName: val(ps.Name), propName: val(p.Name), single: !!p.NominalValue }; }
    return null;
  };
  for (const [psetId, rels] of ed.relsByPset) {
    if (!rels.some((rid) => (api.GetLine(mid, rid, false).RelatedObjects || []).some((h) => h.value === id))) continue;
    const r = look(psetId, false);
    if (r) return r;
  }
  for (const rid of idsOf(api, mid, 'IFCRELDEFINESBYTYPE')) {
    const rel = api.GetLine(mid, rid, false);
    if (!(rel.RelatedObjects || []).some((h) => h.value === id) || !rel.RelatingType) continue;
    for (const h of api.GetLine(mid, rel.RelatingType.value, false)?.HasPropertySets || []) { const r = look(h.value, true); if (r) return r; }
  }
  return null;
}

/** GlobalId → line id over every product of the model (the writer's byGuid knows only the Draw tools' classes). */
export function productIds(ed) {
  const out = new Map();
  for (const id of idsOf(ed.api, ed.mid, 'IFCPRODUCT', true)) { const g = val(ed.api.GetLine(ed.mid, id, false)?.GlobalId); if (g) out.set(g, id); }
  return out;
}

/** BimCraft's drawn elements by kind (the Draw module changes them so rooms, joins and framing follow). */
function drawnKinds(ed) {
  const w = writer(ed), snap = snapshotModel(ed);
  let derived = new Set();
  try { const d = readDerived(w); derived = new Set([...d.spaces, ...d.floors, ...d.ceilings, ...d.roofs].map((x) => x.guid)); } catch (e) { /* none */ }
  return { walls: new Set(snap.walls.map((x) => x.guid)), openings: new Set(snap.openings.map((o) => o.guid)), derived };
}

/** Move elements' placements by d (mm, world axes): the delta turned into each placement's parent axes. One journaled op. */
const movePlacements = (list, d) => op((w) => {
  const moved = [];
  for (const { guid: g, id } of list) {
    const el = id ? w.api.GetLine(w.mid, id, false) : null;
    const lp = el?.ObjectPlacement?.value;
    if (!lp) throw new Error(g + ' has no placement that can be moved.');
    const L = w.touch(lp);
    const rp = L.RelativePlacement ? w.api.GetLine(w.mid, L.RelativePlacement.value, false) : null;
    const loc = rp?.Location ? w.api.GetLine(w.mid, rp.Location.value, false) : null;
    const c = (loc?.Coordinates || []).map((x) => Number(val(x)));
    if (!rp || c.length !== 3 || c.some((x) => !Number.isFinite(x))) throw new Error(g + ' is not placed in 3D coordinates (a grid or 2D placement): it cannot be moved here.');
    let dl = d;
    if (L.PlacementRelTo) { const M = w.api.GetWorldTransformMatrix(w.mid, L.PlacementRelTo.value); dl = [M[0] * d[0] + M[1] * d[1] + M[2] * d[2], M[4] * d[0] + M[5] * d[1] + M[6] * d[2], M[8] * d[0] + M[9] * d[1] + M[10] * d[2]]; }
    const pt = w.point3(c[0] + w.u(dl[0]), c[1] + w.u(dl[1]), c[2] + w.u(dl[2]));
    const rp2 = w.make('IFCAXIS2PLACEMENT3D', w.H(pt), rp.Axis ? w.H(rp.Axis.value) : null, rp.RefDirection ? w.H(rp.RefDirection.value) : null);
    L.RelativePlacement = w.H(rp2);
    w.write(L);
    moved.push(id);
  }
  return { id: moved[0] ?? null, ids: moved };
});

const PROGRAM = { type: 'array', minItems: 1, maxItems: 200, description: 'The room program: rows of name, count and area_m2 (square metres per room); ground: true puts those rooms on the ground floor.',
  items: { type: 'object', additionalProperties: false, required: ['area_m2'], properties: { name: { type: 'string', maxLength: 60, description: 'Room name, for example Office.' }, count: { type: 'integer', minimum: 1, maximum: 1000, description: 'How many of this room (default 1).' },
    area_m2: { type: 'number', minimum: 0.5, maximum: 100000, description: 'Area of one room in square metres.' }, ground: { type: 'boolean', description: 'Keep these rooms on the ground floor.' } } } };
const MASSING_ARGS = {
  program: PROGRAM,
  envelope: { type: 'array', minItems: 3, maxItems: 1000, description: 'The buildable outline: points [x, y] in millimetres (the setback polygon from the zoning study). Or give width_m and depth_m.', items: { ...XY, description: 'A corner [x, y] in millimetres.' } },
  width_m: { type: 'number', minimum: 1, maximum: 10000, description: 'Or a rectangle of this width in metres, from the origin.' }, depth_m: { type: 'number', minimum: 1, maximum: 10000, description: 'and this depth in metres.' },
  floor_height_mm: { type: 'number', minimum: 2000, maximum: 8000, description: 'Floor-to-floor height in millimetres (default 3200).' }, height_cap_mm: { type: 'number', minimum: 0, maximum: 1000000, description: 'The tallest the building may be, in millimetres; 0 or none = no cap.' },
  efficiency: { type: 'number', minimum: 0.4, maximum: 1, description: 'The share of a floor that is usable rooms; the rest is walls, stairs and corridors (default 0.8).' },
};
const massingEnvelope = (a) => (a.envelope || (a.width_m && a.depth_m ? [[0, 0], [a.width_m * 1000, 0], [a.width_m * 1000, a.depth_m * 1000], [0, a.depth_m * 1000]] : null));
const massingFor = (a) => {
  const env = massingEnvelope(a);
  if (!env) throw new Error('Give the buildable outline: envelope (points in mm) or width_m and depth_m.');
  return massingOptions({ program: a.program, envelope: env, floorHeight: a.floor_height_mm || undefined, heightCap: a.height_cap_mm || 0, efficiency: a.efficiency || undefined });
};
export function modelTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new Error('No IFC model is open in BimCraft.'); return ed; };
  /** One undo step; a model op's refusal comes back as its sentence (nothing changed). */
  const edit = async (label, op) => { try { return await env.apply(label, op); } catch (e) { throw new Error(said(e)); } };
  const guidsOf = (r) => [...(r?.made?.keys?.() || [])];
  return [
    {
      name: 'model_describe', group: 'read', untrusted: true, title: 'Describe the model',
      description: 'The open BimCraft model in millimetres: its levels (name, GlobalId, elevation, height), walls by type, doors, windows, rooms with their areas, floors drawn by outline, ramps, grid line tags, columns and the site; also the wall, door and window types walls_add and opening_add take.',
      run: () => describeModel(E()),
    },
    {
      name: 'walls_list', group: 'read', untrusted: true, title: 'List walls',
      description: 'The walls on a level that BimCraft\'s Draw tools can change: GlobalId, start and end (mm, in the level\'s plan), type, thickness, height, length, and the doors and windows in each.',
      inputSchema: obj({ level: LEVEL }),
      run: (a) => {
        const ed = E(), l = levelRef(ed, a.level), snap = snapshotModel(ed);
        const walls = snap.walls.filter((x) => x.storey === l.id);
        return { level: l.name, walls: walls.slice(0, LIMIT).map((x) => ({ guid: x.guid, a: x.a.map(r1), b: x.b.map(r1), type: x.typeKey, thickness: r1(x.t), height: r1(x.height), length: r1(x.len),
          openings: snap.openings.filter((o) => o.wall === x.id).map((o) => ({ guid: o.guid, kind: o.kind, type: o.typeKey, offset: r1(o.offset), width: r1(o.width), height: r1(o.height) })) })) };
      },
    },
    {
      name: 'walls_add', group: 'edit', rollbackPreview: true, title: 'Add walls',
      description: 'Walls along points (mm, in the level\'s plan) on a level, joined to each other and to the walls there; rooms, floors and roofs follow as with the Wall tool. closed: true runs the last wall back to the first point. Type: one of model_describe\'s wall types (default ext-2x6). Height: mm, or leave it out to run up to the level above (the level\'s height on the top level). One undo step.',
      inputSchema: obj({ level: LEVEL, points: { description: 'Corner points [x, y] in millimetres, in the level\'s plan (at least 2).', type: 'array', items: XY, minItems: 2, maxItems: 500 }, closed: { description: 'true joins the last point back to the first (default false).', type: 'boolean' }, type: { description: 'Wall type key (ext-2x6, int-2x4, brick-2x4, cmu-8, concrete-200 …).', type: 'string', enum: WALL_TYPES.map((x) => x.key) }, height: { description: 'Wall height in millimetres (default: the level\'s height).', type: 'number', minimum: 100, maximum: 100000 } }, ['points']),
      run: async (a) => {
        const ed = E(), l = levelRef(ed, a.level), L = snapshotModel(ed).levels, above = L[L.findIndex((x) => x.id === l.id) + 1];
        const pts = a.closed && a.points.length >= 3 ? [...a.points, a.points[0]] : a.points;
        const segs = [];
        for (let i = 0; i + 1 < pts.length; i++) if (Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]) >= 1) segs.push({ a: pts[i], b: pts[i + 1] });
        if (!segs.length) throw new Error('The points make no wall (each wall needs two points at least 1 mm apart).');
        const top = a.height ? { height: a.height } : above ? { topLevel: above.guid } : { height: l.height };
        const r = await edit('add ' + segs.length + (segs.length > 1 ? ' walls' : ' wall'), drawWalls({ storey: l.guid, segs, typeKey: a.type || WALL_TYPES[0].key, ...top }));
        return { level: l.name, walls: guidsOf(r) };
      },
    },
    {
      name: 'opening_add', group: 'edit', rollbackPreview: true, title: 'Add a door or window',
      description: 'A door or window in a wall (its GlobalId from walls_list or walls_add): type from model_describe (default a single door / a fixed window), offset = mm from the wall\'s start to the opening\'s near edge (default: the middle), width and height in mm (default: the type\'s), sill for windows. Refused if it does not fit. One undo step.',
      inputSchema: obj({ wall: { description: 'The wall\'s GlobalId, from walls_list or walls_add.', type: 'string', minLength: 1, maxLength: 64 }, kind: { description: 'door or window.', type: 'string', enum: ['door', 'window'] }, type: { description: 'Opening type key (door-single, door-double, door-sliding … or a window type).', type: 'string', enum: [...DOOR_TYPES, ...WINDOW_TYPES].map((x) => x.key) }, offset: { description: 'Millimetres from the wall\'s start to the opening\'s near edge.', type: 'number', minimum: 0 }, width: { description: 'Opening width in millimetres.', type: 'number', minimum: 100, maximum: 20000 }, height: { description: 'Opening height in millimetres.', type: 'number', minimum: 100, maximum: 20000 }, sill: { description: 'Sill height above the floor in millimetres (windows).', type: 'number', minimum: 0, maximum: 20000 } }, ['wall', 'kind']),
      run: async (a) => {
        const ed = E();
        if (!readWalls(writer(ed)).some((x) => x.guid === a.wall)) throw new Error('No wall with GlobalId ' + a.wall + ' that the Draw tools know (see walls_list).');
        const typeKey = a.type || (a.kind === 'door' ? DOOR_TYPES[0].key : WINDOW_TYPES[0].key);
        const type = [...DOOR_TYPES, ...WINDOW_TYPES].find((x) => x.key === typeKey);
        if (type.kind !== a.kind) throw new Error(typeKey + ' is a ' + type.kind + ' type, not a ' + a.kind + '.');
        const r = await edit('add a ' + a.kind, placeOpening({ wall: a.wall, typeKey, offset: a.offset, width: a.width, height: a.height, sill: a.kind === 'window' ? a.sill : 0 }));
        return { [a.kind]: guidsOf(r)[0] || null };
      },
    },
    {
      name: 'floor_add', group: 'edit', rollbackPreview: true, title: 'Add a floor',
      description: 'A floor or slab of any outline (mm, in the level\'s plan; at least three corners, not crossing itself) on a level: kind concrete | wood, use floor | slab, thickness in mm (default the kind\'s), offset = its top above the level (mm). One undo step.',
      inputSchema: obj({ level: LEVEL, points: { description: 'Outline corners [x, y] in millimetres, in the level\'s plan (at least 3).', type: 'array', items: XY, minItems: 3, maxItems: 500 }, kind: { description: 'concrete or wood.', type: 'string', enum: ['concrete', 'wood'] }, use: { description: 'floor or slab.', type: 'string', enum: ['floor', 'slab'] }, thickness: { description: 'Thickness in millimetres.', type: 'number', minimum: 10, maximum: 3000 }, offset: { description: 'Vertical offset from the level in millimetres (negative = below).', type: 'number', minimum: -10000, maximum: 10000 } }, ['points']),
      run: async (a) => {
        const ed = E(), l = levelRef(ed, a.level);
        const pr = polyProblem(a.points);
        if (pr) throw new Error(t(pr));
        const r = await edit('add a floor', placeDrawnFloor({ storey: l.guid, points: a.points, kind: a.kind || 'concrete', use: a.use || 'floor', ...(a.thickness ? { thickness: a.thickness } : {}), offset: a.offset || 0 }));
        return { level: l.name, floor: guidsOf(r)[0] || null };
      },
    },
    {
      name: 'levels_add', group: 'edit', rollbackPreview: true, title: 'Add levels',
      description: 'Levels at these heights above the lowest level (mm); a height a level already has is skipped. Names follow the model\'s ("Level 3"). One undo step.',
      inputSchema: obj({ elevations: { description: 'Heights above the lowest level, in millimetres.', type: 'array', items: { type: 'number', minimum: -100000, maximum: 1000000 }, minItems: 1, maxItems: 200 } }, ['elevations']),
      run: async (a) => {
        const r = await edit('add levels', addLevels({ elevations: a.elevations }));
        return { levels: snapshotModel(E()).levels.map((l) => ({ name: l.name, guid: l.guid, elevation: r1(l.elevation) })), made: guidsOf(r) };
      },
    },
    {
      name: 'grid_add', group: 'edit', rollbackPreview: true, title: 'Add grid lines',
      description: 'Grid lines laid out as Build › Grid does: numbered lines (u: count and spacing in mm, a number or one per bay) and lettered lines (v), from an origin (mm, in the level\'s plan), turned by angle (degrees), each running extend mm past the last crossing. Added to the model\'s grid (one per building). One undo step.',
      inputSchema: obj({ level: LEVEL, origin: { ...XY, description: 'Where the grid starts [x, y], in millimetres.' }, angle: { description: 'Rotation of the grid in degrees.', type: 'number', minimum: -360, maximum: 360 },
        u: { ...obj({ count: { type: 'integer', minimum: 0, maximum: 100 }, spacing: { anyOf: [{ type: 'number', minimum: 100 }, { type: 'array', items: { type: 'number', minimum: 100 }, maxItems: 100 }] } }, ['count']), description: 'Lines in the first direction: count and spacing (millimetres, one value or a list).' },
        v: { ...obj({ count: { type: 'integer', minimum: 0, maximum: 100 }, spacing: { anyOf: [{ type: 'number', minimum: 100 }, { type: 'array', items: { type: 'number', minimum: 100 }, maxItems: 100 }] } }, ['count']), description: 'Lines in the second direction: count and spacing (millimetres, one value or a list).' },
        extend: { description: 'How far the lines run past the last crossing, in millimetres.', type: 'number', minimum: 0, maximum: 20000 } }),
      run: async (a) => {
        const ed = E(), l = levelRef(ed, a.level);
        const axes = gridLayout({ origin: a.origin || [0, 0], angle: a.angle || 0, u: a.u || {}, v: a.v || {}, extend: a.extend ?? 1500 });
        if (!axes.length) throw new Error('Say how many lines: u.count and / or v.count.');
        await edit('add grid lines', placeGrid({ storey: l.guid, axes }));
        return { lines: readGrids(writer(ed)).flatMap((g) => g.axes.map((x) => x.tag)) };
      },
    },
    {
      name: 'phase_describe', group: 'read', title: 'Describe renovation phases', untrusted: true,
      description: 'Counts the elements marked existing, to demolish and new (the CadCraft_Phase property) and lists their GlobalIds, up to the limit for each phase. Elements with no phase are not listed: they count as new once a model is phased. Use phase_set to change a phase.',
      inputSchema: obj({ limit: { type: 'integer', minimum: 1, maximum: 500, description: 'How many GlobalIds to list for each phase (default 100).' } }),
      run: (a) => {
        const g = phaseGuids(writer(E())), n = a.limit || 100;
        return { counts: { existing: g.existing.length, demolish: g.demolish.length, new: g.new.length }, existing: g.existing.slice(0, n), demolish: g.demolish.slice(0, n), new: g.new.slice(0, n),
          note: 'Doors and windows follow their wall when a wall is phased; phase_set changes this.' };
      },
    },
    {
      name: 'phase_set', group: 'edit', rollbackPreview: true, title: 'Set the renovation phase',
      description: 'Mark elements (by GlobalId) as existing, demolish or new, or clear the phase. The doors and windows of a wall follow it unless hosted is false. One undo step.',
      outputSchema: { type: 'object', properties: { phase: { type: 'string' }, elements: { type: 'integer', description: 'Elements whose phase changed.' }, hosted: { type: 'integer', description: 'Doors and windows that followed their wall.' }, cleared: { type: 'integer', description: 'Phases taken off (phase clear).' } } },
      inputSchema: obj({ guids: { type: 'array', items: { type: 'string', minLength: 1, maxLength: 64 }, minItems: 1, maxItems: 5000, description: 'GlobalIds of the elements, from bim_elements_find.' }, phase: { type: 'string', enum: [...PHASES, 'clear'], description: 'existing, demolish or new; clear takes the phase off.' }, hosted: { type: 'boolean', description: 'Doors and windows of a wall follow the wall (default true).' } }, ['guids', 'phase']),
      run: async (a) => {
        const r = await edit('set phase ' + a.phase, phaseOp(a.guids, a.phase === 'clear' ? null : a.phase, { hosted: a.hosted !== false }));
        return { phase: a.phase, elements: r.counts.elements, hosted: r.counts.hosted, cleared: r.counts.cleared };
      },
    },
    {
      name: 'furniture_add', group: 'edit', rollbackPreview: true, title: 'Furnish a room',
      description: 'Places starter furniture in a room by rules (beds, sofas, wardrobes, desks with their chairs, tables, kitchen and bathroom pieces against the walls, clear of doors and windows) for renderings. Returns what was placed and what did not fit. The layout is a default for the person to review, not a design.',
      outputSchema: { type: 'object', properties: { room: {}, kind: { type: 'string' }, guessedKind: { type: ['boolean', 'null'] }, area_m2: { type: ['number', 'null'] }, placed: { type: 'array', items: { type: 'object', properties: { family: { type: 'string' }, x: { type: 'number' }, y: { type: 'number' }, rot: { type: 'number' } } } }, skipped: { type: 'array', items: { type: 'object', properties: { family: { type: 'string' }, why: { type: 'string' } } } }, note: { type: 'string' } } },
      inputSchema: obj({ level: LEVEL, room: { type: 'integer', minimum: 0, maximum: 10000, description: 'The room by its index in the model_describe rooms list of the level.' }, at: { ...XY, description: 'Or a point [x, y] inside the room, in millimetres in the level\'s plan.' }, kind: { type: 'string', enum: FURNISH_KINDS, description: 'What the room is for; without it the kind is guessed from the size and the result says so.' } }),
      run: async (a) => {
        const ed = E(), l = levelRef(ed, a.level);
        if (a.room === undefined && !a.at) throw new Error('Say which room: room (its index from model_describe) or at [x, y] inside it, in mm.');
        const plan = furnishPlan(ed, { storey: l.guid, room: a.room ?? null, at: a.at || null, kind: a.kind || null });
        if (plan.error) throw new Error('No room there on level ' + l.name + ' (' + plan.rooms + ' rooms found). Check model_describe for the rooms and their indexes.');
        if (!plan.placements.length) throw new Error('Nothing fits in this room as ' + plan.kind + ': ' + plan.skipped.map((s) => s.family).join(', ') + '. Try another kind, or the room is too small.');
        await edit('furnish room', furnishOp(l.guid, plan.placements));
        return { room: plan.room, kind: plan.kind, guessedKind: plan.guessed, area_m2: plan.area_m2, placed: plan.placements.map((p) => ({ family: p.family, x: p.x, y: p.y, rot: p.rot })), skipped: plan.skipped,
          note: 'Defaults for the person to review: furnishing is a rule-based layout, not a design.' };
      },
    },
    {
      name: 'massing_describe', group: 'read', title: 'Massing options for a room program', untrusted: true,
      description: 'Works out building massing options for a room program: total net and gross area, then footprints (bar, block, tower) that fit the buildable outline under an optional height cap, each with its floors, coverage and which rooms go on which floor. Changes nothing; massing_add builds one.',
      inputSchema: obj(MASSING_ARGS, ['program']),
      run: (a) => {
        const r = massingFor(a);
        if (r.error) throw new Error(r.notes[r.notes.length - 1]);
        return { totals: r.totals, envelope_m2: r.envelope_m2, options: r.options.map((o) => ({ key: o.key, name: o.name, floors: o.floors, height_mm: o.height, footprint_m2: o.footprint_m2, gross_m2: o.gross_m2, surplus_m2: o.surplus_m2, coverage: o.coverage, fits: o.fits, stack: o.stack, notes: o.notes })), notes: r.notes };
      },
    },
    {
      name: 'massing_add', group: 'edit', rollbackPreview: true, title: 'Build a massing option',
      description: 'Builds one massing option from massing_describe as levels, walls round the footprint on every level and a floor slab, in one undo step. Pass the same program and outline plus the option key. The result is a starting mass for the design, not a finished building.',
      outputSchema: { type: 'object', properties: { option: { type: 'string' }, floors: { type: 'integer' }, footprint_m2: { type: 'number' }, gross_m2: { type: 'number' }, note: { type: 'string' } } },
      inputSchema: obj({ ...MASSING_ARGS, option: { type: 'string', minLength: 2, maxLength: 20, description: 'The option key from massing_describe, for example block2.' } }, ['program', 'option']),
      run: async (a) => {
        const r = massingFor(a);
        const o = r.options.find((x) => x.key === a.option);
        if (!o) throw new Error('No option "' + a.option + '". The options for this program are: ' + (r.options.map((x) => x.key).join(', ') || 'none (see massing_describe notes)') + '.');
        await edit('build massing ' + o.key, buildOption(o));
        return { option: o.key, floors: o.floors, footprint_m2: o.footprint_m2, gross_m2: o.gross_m2, note: 'Walls and slabs only; no roof, stairs or rooms yet.' };
      },
    },
    ...scanTools({ ...env, scan: () => (typeof window !== 'undefined' ? window.bimcraftScan?.state?.slice : null), levels: () => snapshotModel(env.ed()).levels }),   // spikes_PART_4: EG.37 phone scan to walls
    ...scanProgressTools({ ...env, progress: () => (typeof window !== 'undefined' ? window.bimcraftScanProgress : null) }),   // EG.39: the scan against the model and the 4D schedule
    ...autodimTools({ ...env, levels: () => snapshotModel(env.ed()).levels }),   // bim-model_PART_4: EG.20 dimension a plan by rules
    ...narrationTools(env),   // bim-model_PART_4: EG.50 narrated walkthroughs
    ...mepTools(env),   // mep_PART_2: pipe, duct, cable and lighting calculations (EG.1–EG.4)
    ...energyTools(env), ...carbonTools(env), ...cost5dTools(env), ...pvTools(env),   // energy_PART_2: EnergyPlus, carbon, 5D cost and solar tools (EG.13–EG.17)
    ...simTools(env),   // bim-sim_PART_2: people_run, escape_check, acoustics_check (EG.48, EG.49)
    {
      name: 'element_set', group: 'edit', rollbackPreview: true, title: 'Set a name or property',
      description: 'Change one element (by GlobalId): an attribute (Name, Description, ObjectType, Tag), or one property value by its name (and set name, when two sets have it). The value keeps the property\'s IFC type (numbers stay numbers). A value the element shares with others is copied for it first; a property of the element\'s type changes every element of that type and needs type: true. One undo step.',
      inputSchema: obj({ guid: { description: 'The element\'s GlobalId.', type: 'string', minLength: 1, maxLength: 64 }, attribute: { description: 'Which attribute to change: Name, Description, ObjectType or Tag.', type: 'string', enum: EDITABLE_ATTRS }, set: { description: 'Name of the property set that holds the property.', type: 'string', maxLength: 255 }, property: { description: 'Name of the property to set.', type: 'string', minLength: 1, maxLength: 255 }, value: { description: 'The new value; null removes the property.', type: ['string', 'number', 'boolean', 'null'] }, type: { description: 'true changes the element\'s type instead of the element (default false).', type: 'boolean', default: false } }, ['guid', 'value']),
      run: async (a) => {
        const ed = E();
        if (!a.attribute === !a.property) throw new Error('Give an attribute or a property, one of them.');
        const id = productIds(ed).get(a.guid);
        if (!id) throw new Error('No element with GlobalId ' + a.guid + '.');
        if (env.busy?.()) throw new Error('The person is ' + env.busy() + ': try again when they finish.');
        let changed, what;
        if (a.attribute) { changed = ed.setAttribute(id, a.attribute, a.value); what = a.attribute; }
        else {
          const ref = propRef(ed, id, a.set, a.property);
          if (!ref) throw new Error('Element ' + a.guid + ' has no property "' + a.property + '"' + (a.set ? ' in "' + a.set + '"' : '') + '.');
          if (!ref.single) throw new Error(ref.setName + '.' + ref.propName + ' is not a single value (a list, an enumeration or a table): it cannot be set here.');
          if (ref.fromType && !a.type) throw new Error(ref.setName + '.' + ref.propName + ' belongs to the element\'s type: setting it changes every element of that type. Pass type: true to do that.');
          changed = ed.setProperty(id, ref, a.value === null ? '' : String(a.value));
          what = ref.setName + '.' + ref.propName;
        }
        const label = 'Assistant: set ' + what + ' = ' + String(a.value).slice(0, 60);
        if (changed) { ed.changes[ed.changes.length - 1].label = label; env.refresh?.(); }
        return { changed: !!changed, undo: changed ? label : null };
      },
    },
    {
      name: 'elements_delete', group: 'edit', rollbackPreview: true, title: 'Delete elements',
      description: 'Delete elements by GlobalId, as one undo step. Walls, doors, windows and floors drawn with BimCraft\'s tools go through the Draw module (walls close up, rooms and joins follow); any other element goes with its parts and openings. Levels, the building and the site are not deleted. Drawn and other elements go in separate calls.',
      inputSchema: obj({ guids: { description: 'GlobalIds of the elements to delete.', type: 'array', items: { type: 'string', minLength: 1, maxLength: 64 }, minItems: 1, maxItems: 10000 } }, ['guids']),
      run: async (a) => {
        const ed = E(), k = drawnKinds(ed), P = productIds(ed);
        const unknown = a.guids.filter((g) => !P.has(g));
        if (unknown.length) throw new Error('No element with GlobalId ' + unknown.slice(0, 10).join(', ') + '. Nothing deleted.');
        const walls = a.guids.filter((g) => k.walls.has(g)), openings = a.guids.filter((g) => k.openings.has(g)), derived = a.guids.filter((g) => k.derived.has(g));
        const drawn = walls.length + openings.length + derived.length;
        if (drawn && drawn < a.guids.length) throw new Error('These mix elements drawn with BimCraft\'s tools and other elements: delete them in two calls.');
        if (drawn) { await edit('delete ' + drawn + (drawn === 1 ? ' element' : ' elements'), removeElements({ walls, openings, derived })); return { deleted: a.guids.length }; }
        let removed = [], refused = [];
        await edit('delete ' + a.guids.length + (a.guids.length === 1 ? ' element' : ' elements'), (editor) => {
          const r = editor.elements().remove(a.guids.map((g) => editor.now(P.get(g))));
          removed = r.removed || []; refused = r.refused || [];
          if (!removed.length) throw new Error('None of these can be deleted (levels, the building and the site stay).');
          return { id: null, ids: [], journal: r.journal };
        });
        return { deleted: removed.length, ...(refused.length ? { kept: refused.length } : {}) };
      },
    },
    {
      name: 'elements_move', group: 'edit', rollbackPreview: true, title: 'Move elements',
      description: 'Move elements (by GlobalId) by [dx, dy, dz] millimetres in the model\'s axes (x east, y north, z up on an unturned model), as one undo step; what is hosted on them or placed relative to them moves along. A wall drawn with BimCraft\'s tools moves with wall_change (its ends), a door or window along its wall with opening_change.',
      inputSchema: obj({ guids: { description: 'GlobalIds of the elements to move.', type: 'array', items: { type: 'string', minLength: 1, maxLength: 64 }, minItems: 1, maxItems: 10000 }, by: { description: 'Movement [dx, dy] or [dx, dy, dz] in millimetres.', type: 'array', items: { type: 'number', minimum: -1e7, maximum: 1e7 }, minItems: 2, maxItems: 3 } }, ['guids', 'by']),
      run: async (a) => {
        const ed = E(), k = drawnKinds(ed);
        const drawn = a.guids.filter((g) => k.walls.has(g) || k.openings.has(g));
        if (drawn.length) throw new Error(drawn.slice(0, 5).join(', ') + (k.walls.has(drawn[0]) ? ' is a wall drawn with BimCraft\'s tools: move it with wall_change (its ends).' : ' is a door or window: move it along its wall with opening_change (offset).'));
        const d = [a.by[0], a.by[1], a.by[2] || 0], P = productIds(ed);
        const unknown = a.guids.filter((g) => !P.has(g));
        if (unknown.length) throw new Error('No element with GlobalId ' + unknown.slice(0, 10).join(', ') + '. Nothing moved.');
        const r = await edit('move ' + a.guids.length + (a.guids.length === 1 ? ' element' : ' elements'), movePlacements(a.guids.map((g) => ({ guid: g, id: P.get(g) })), d));
        return { moved: (r?.ids || []).length, by: d };
      },
    },
    {
      name: 'wall_change', group: 'edit', rollbackPreview: true, title: 'Change a wall',
      description: 'Change a wall drawn with BimCraft\'s tools (GlobalId from walls_list): its start a and end b (mm, in its level\'s plan) and/or its type. Joined walls, rooms and its doors and windows follow; a door that no longer fits refuses the change. One undo step.',
      inputSchema: obj({ guid: { description: 'The wall\'s GlobalId, from walls_list.', type: 'string', minLength: 1, maxLength: 64 }, a: { ...XY, description: 'New start point [x, y] in millimetres.' }, b: { ...XY, description: 'New end point [x, y] in millimetres.' }, type: { description: 'New wall type key.', type: 'string', enum: WALL_TYPES.map((x) => x.key) } }, ['guid']),
      run: async (a) => {
        if (!a.a && !a.b && !a.type) throw new Error('Say what changes: a, b or type.');
        await edit('change a wall', changeWall(a.guid, { ...(a.a ? { a: a.a } : {}), ...(a.b ? { b: a.b } : {}), ...(a.type ? { typeKey: a.type } : {}) }));
        const x = snapshotModel(E()).walls.find((y) => y.guid === a.guid);
        return x ? { guid: a.guid, a: x.a.map(r1), b: x.b.map(r1), type: x.typeKey, length: r1(x.len) } : { guid: a.guid };
      },
    },
    {
      name: 'opening_change', group: 'edit', rollbackPreview: true, title: 'Change a door or window',
      description: 'Change a door or window (GlobalId): offset = mm from its wall\'s start to its near edge, width, height, sill (windows), type (of the same kind), or wall = another wall\'s GlobalId to move it there. Refused if it does not fit. One undo step.',
      inputSchema: obj({ guid: { description: 'The door or window\'s GlobalId.', type: 'string', minLength: 1, maxLength: 64 }, offset: { description: 'Millimetres from its wall\'s start to the opening\'s near edge.', type: 'number', minimum: 0 }, width: { description: 'New width in millimetres.', type: 'number', minimum: 100, maximum: 20000 }, height: { description: 'New height in millimetres.', type: 'number', minimum: 100, maximum: 20000 }, sill: { description: 'New sill height in millimetres.', type: 'number', minimum: 0, maximum: 20000 }, type: { description: 'New opening type key.', type: 'string', enum: [...DOOR_TYPES, ...WINDOW_TYPES].map((x) => x.key) }, wall: { description: 'GlobalId of another wall to move the opening to.', type: 'string', minLength: 1, maxLength: 64 } }, ['guid']),
      run: async (a) => {
        const { guid, type, ...rest } = a;
        if (!Object.keys(rest).length && !type) throw new Error('Say what changes: offset, width, height, sill, type or wall.');
        await edit('change a ' + (snapshotModel(E()).openings.find((o) => o.guid === guid)?.kind || 'door or window'), changeOpening(guid, { ...rest, ...(type ? { typeKey: type } : {}) }));
        const o = snapshotModel(E()).openings.find((x) => x.guid === guid);
        return o ? { guid, kind: o.kind, type: o.typeKey, offset: r1(o.offset), width: r1(o.width), height: r1(o.height) } : { guid };
      },
    },
  ];
}

/** Registers the tools on this window's host.control (bimcraft.js calls it once, with the Draw module). */
export function installAgents(modelUi, app) {
  const C = app.control || getHost({ app: 'bimcraft' }).control;
  const A = modelUi.extend({ tools: [] });
  const ed = () => A.ed();
  const settle = async (ms = 60000) => { const t0 = Date.now(); while ((A.S.busy || A.S.reloading || A.S.queue?.length) && Date.now() - t0 < ms) await new Promise((r) => setTimeout(r, 50)); };
  C.configure({ rollback: undoRollback(async () => { await settle(); await app.undo(); await settle(); }) });   // previews of edit tools: the step the tool made is undone (AI-CONNECT-SPEC § 2.3)
  /** One undo step through the Draw module (the plan and the 3D view follow), labelled as the assistant's. */
  const apply = async (label, op) => {
    const why = app.busy?.() || (A.S.chain?.points?.length ? 'drawing walls' : null);
    if (why) throw new Error('The person is ' + why + ': try again when they finish.');
    await settle();
    let res = null, err = null;
    const run = (editor) => { try { res = op(editor); return res; } catch (e) { err = e; throw e; } };
    A.commit(run, { label: 'Assistant: ' + label, verb: '' });
    if (err) throw err;
    await settle();
    return res;
  };
  const keyOf = (guid) => { const e = ed(); const id = e ? writer(e).byGuid(guid) : null; return id ? (app.model()?.keyBase || 0) + id : null; };
  const guidOf = (key) => { const e = ed(); if (!e) return null; try { return val(e.api.GetLine(e.mid, key - (app.model()?.keyBase || 0), false)?.GlobalId) || null; } catch (x) { return null; } };
  const info = () => {
    const e = ed();
    return { app: 'bimcraft', title: 'BimCraft', file: A.host.fileName?.() || null, open: !!e, unsaved: !!e?.dirty, changes: e?.changes.length || 0, draw: !!A.S.on, busy: app.busy?.() || null,
      levels: e ? snapshotModel(e).levels.length : 0, elements: app.model()?.elements ?? null };
  };
  const live = [
    { name: 'app_info', group: 'read', title: 'About this window', description: 'BimCraft\'s window: the IFC file open, unsaved changes, whether Draw is on, levels and elements, and what the person is in the middle of.', run: () => info() },
    {
      name: 'frame_break', group: 'read', title: 'What breaks first',
      description: 'Finds what gives way first in the analysed frame of the open model: the strength combination that governs, the weakest beam, column or brace, and how far the loads can grow before the first one reaches its limit. Changes nothing; the findings also go to Problems. Needs a design code and its combinations chosen in the Analysis tab (Design checks).',
      inputSchema: obj({}),
      run: async () => {
        const an = app.analysis ? app.analysis() : null;
        if (!an || !an.runBreak) throw new ToolError('unsupported', 'Break it is not available in this window.', { next: ['Open an IFC model and the Analysis tab in BimCraft.'] });
        const r = await an.runBreak();
        if (!r || r.ok === false) throw new ToolError('invalid_argument', 'Break it could not run: ' + String((r && r.error) || 'no result') + '.', { next: ['Choose a design code and make the strength combinations in the Analysis tab (Design checks), then try again.'] });
        const f = r.findings.slice(0, LIMIT), q3 = (v) => (v === null || v === undefined ? null : Math.round(v * 1000) / 1000);
        return { first: f[0] ? { kind: f[0].kind, subject: f[0].subject.label || f[0].subject.id, util: r1(f[0].util), factor: r1(f[0].factor) } : null,
          findings: f.map((x) => ({ kind: x.kind, subject: x.subject.label || x.subject.id, guid: x.subject.kind === 'member' ? String(x.subject.id).replace(/\.\d+$/, '') : null, util: q3(x.util), factor: q3(x.factor), failing: !!x.failing })),
          combo: r.combo ? { name: r.combo.name, util: q3(r.combo.util), member: r.combo.member } : null,
          reserve: r.reserve ? { factor: r.reserve.factor === null ? null : Math.round(r.reserve.factor * 100) / 100, bounded: r.reserve.bounded !== false } : null, notChecked: r.notChecked.length };
      },
    },
    {
      name: 'selection_get', group: 'read', title: 'What is selected',
      description: 'What the person has selected in BimCraft: GlobalId, class and name of each (up to 1000).',
      run: () => { const e = ed(); return { selected: [...(app.selection() || [])].slice(0, LIMIT).map((k) => { const g = guidOf(k), l = e && g ? e.api.GetLine(e.mid, k - (app.model()?.keyBase || 0), false) : null; return { guid: g, class: l?.constructor?.name || null, name: l ? val(l.Name) || '' : null }; }) }; },
    },
    {
      name: 'selection_set', group: 'edit', dryRun: true, title: 'Select',
      description: 'Select elements by GlobalId to show them to the person (replace, add or remove). Changes nothing in the model.',
      inputSchema: obj({ guids: { description: 'GlobalIds of the elements to select; an unknown id refuses the whole call.', type: 'array', items: { type: 'string', maxLength: 64 }, maxItems: 100000 }, mode: { description: 'replace (default) selects only these; add keeps the current selection too; remove deselects these.', type: 'string', enum: ['replace', 'add', 'remove'] } }, ['guids']),
      run: (a, ctx) => {
        const keys = a.guids.map(keyOf), bad = a.guids.filter((g, i) => !keys[i]);
        if (bad.length) throw new Error('Unknown: ' + bad.slice(0, 10).join(', ') + '. Nothing selected.');
        const cur = [...(app.selection() || [])];
        const next = a.mode === 'add' ? [...new Set([...cur, ...keys])] : a.mode === 'remove' ? cur.filter((k) => !keys.includes(k)) : keys;
        if (!ctx.preview) app.select(next);
        return { selected: next.length };
      },
    },
    {
      name: 'undo', group: 'edit', title: 'Undo',
      description: 'Undo the assistant\'s last steps (labelled "Assistant: …"); steps the person made are only undone with any: true.',
      inputSchema: obj({ steps: { description: 'How many steps to undo (default 1).', type: 'integer', minimum: 1, maximum: 50 }, any: { description: 'true also undoes steps the person made, not only the assistant\'s (default false).', type: 'boolean' } }),
      preview: (a) => ({ wouldUndo: peekUndo(ed()?.changes || [], a.steps || 1, a.any) }),
      run: async (a) => {
        const undone = [];
        for (let i = 0; i < (a.steps || 1); i++) {
          const e = ed(), top = e?.changes[e.changes.length - 1];
          if (!top) break;
          const label = top.label || top.kind;
          if (!a.any && !String(label).startsWith('Assistant: ')) { if (!undone.length) throw new Error('The last step is the person\'s ("' + label + '"): pass any: true to undo it.'); break; }
          await settle();
          await app.undo();
          await settle();
          undone.push(label);
        }
        return { undone };
      },
    },
    { name: 'usd_export', group: 'export', title: 'Export USD', description: 'The open models as OpenUSD (storeys, disciplines and elements as prims, with their IFC data and colours), .usda (default), .usdc or .usdz, as Export › USD writes it. With a path (Studio) it is written there, else it downloads. Needs the 3D view of an IFC model.',
      inputSchema: obj({ format: { description: 'usda (text, default), usdc (binary) or usdz (packed with its textures).', type: 'string', enum: ['usda', 'usdc', 'usdz'] }, path: { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a file inside the folders the person allowed (Settings › Assistants › Folders); without it the file downloads.' }, overwrite: { description: 'true replaces an existing file at the path (default false: an existing file is never overwritten).', type: 'boolean', default: false } }),
      run: async (a) => {
        const fmt = a.format || (a.path && /\.(usd[acz])$/i.exec(a.path)?.[1].toLowerCase()) || 'usda';
        if (a.path && !new RegExp('\\.' + fmt + '$', 'i').test(a.path)) throw new Error('A .' + fmt + ' file ends in .' + fmt + '.');
        const r = await app.usd?.(fmt);
        if (!r) throw new Error('Open an IFC model in the 3D view first.');
        const bytes = typeof r.data === 'string' ? new TextEncoder().encode(r.data) : r.data;
        if (a.path) { if (!C.files.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).'); return { format: fmt, bytes: bytes.length, report: r.report, path: await C.files.write(a.path, bytes, { overwrite: a.overwrite }) }; }
        app.download(new Blob([bytes], { type: r.type }), r.base + '.' + fmt, r.type);
        return { format: fmt, bytes: bytes.length, report: r.report, downloaded: r.base + '.' + fmt };
      } },
    { name: 'model_save', group: 'save', title: 'Save the model', description: 'BimCraft\'s own Save as IFC: a new file with every change (desktop: the save dialog; browser: a download). The original file is never changed.', run: async () => ({ saved: await app.save(), ...info() }) },
  ];
  // after an edit outside the Draw module (element_set): the Properties panel shows the new value
  const refresh = () => { try { app.select([...(app.selection() || [])]); } catch (e) { /* nothing selected */ } };
  for (const def of [...live.slice(0, 1), ...modelTools({ ed, apply, refresh, busy: () => app.busy?.() || null, index: () => app.ask?.index?.() ?? null, tasks: () => app.tasks?.() || [], frameModel: () => app.frameModel?.() || null }), ...live.slice(1)]) C.tool(def);
  // 0.8 AC.8 ★ (bim_PART_2; ask-tools.js): "show me every 2-hour wall", "rooms under 70 sq ft", "what's above this ceiling". `app.ask` brings the model, the
  // property indexes, per-element boxes and the 3D highlight; without it (the contract checker, the headless core) the definitions are listed and answer "not open".
  for (const d of askTools(app.ask || { index: () => null, name: () => '' })) C.tool(d);
  // 0.7 AS.6 (assistants-gaps): the Render dialog's pictures and queue, through the page's own Render hooks (window only)
  if (app.render) for (const d of renderTools(C, app.render, { toolResult })) C.tool(d);
  // 0.8 P.5: the shell's Problems tools (problems_list / _show / _fix / _accept / _unaccept / _report; spec § 8), once the module is there
  { const reg = () => window.ccProblems?.registerTools?.(C, {}); if (window.ccProblems) reg(); else document.addEventListener('cc-problems-ready', reg, { once: true }); }
  return C;
}
