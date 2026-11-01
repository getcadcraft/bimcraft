/* SPDX-License-Identifier: Apache-2.0 */
/**
 * family-model.js — families on top of IFC types (0.6 DC.114, session bim-families_PART_2; spike docs/spikes/bim-families_PART_2.md).
 * No DOM: bin/test-bimcraft.mjs --families runs it in Node.
 *
 * A family is BimCraft's idea; the file holds only plain IFC that other programs read as ordinary types:
 *   family  IfcGroup (ObjectType "Family") + IfcRelAssignsToGroup → its sizes' types; pset CadCraft_Family on the group
 *           (Key, Category, Version, Recipe = the recipe as JSON in one IfcText)
 *   size    one IfcDoorType / IfcWindowType / IfcFurnitureType / … (IFC2X3: IfcDoorStyle / IfcWindowStyle) per size, its
 *           RepresentationMaps = the size's solids; pset CadCraft_FamilySize in HasPropertySets (Family, Size, Values JSON)
 *   element IfcRelDefinesByType → its size's type
 * Geometry stays IFC's own (DC.115): box / extrusion → IfcExtrudedAreaSolid, revolve → IfcRevolvedAreaSolid, sweep →
 * IfcSweptDiskSolid, a cut or a join → IfcBooleanResult (wrapped in IfcCsgSolid, so the representation is 'SolidModel').
 *
 * The recipe ("cadcraft-family" version 1, read with readFamily as untrusted data):
 *   { format, version, key, name, kind: door | window | furniture | fixture | generic, host: wall | none, base (a starter door /
 *     window kind for hosted families: its plan symbol, hand and IFC operation), ifc: { class, predefined },
 *     params: [{ key, label?, kind: length | angle | number | yesno, value, formula? }],
 *     solids: [{ id, name?, op: box | extrude | revolve | sweep, style, visible?, …fields }], booleans: [{ id, op: difference |
 *     union, a, b }], connectors?: [{ id, name?, domain: pipe | duct, system, x, y, z, dir, size, flow: in | out }],
 *     fixture?: wc | lav | sink | shower | laundry | bath (mep/fixtures.js: which plumbing fixture it is, for its fixture units),
 *     sizes?: [{ name, values }] (files only), notes?, license? }
 *   Connectors (unhosted families only) are where a pipe or duct joins the element: a point (x, y, z), the way out of it (dir:
 *   +x, -x, +y, -y, +z or -z in the family's axes), the nominal size (mm: a pipe's DN, a round duct's diameter), the system key
 *   (mep-model.js PIPE_SYSTEMS / DUCT_SYSTEMS: cw, hw, san, …) and whether the flow goes in (a tap fed with water) or out (a
 *   drain). family-ops.js writes them on each placed element as IfcDistributionPort.
 *   Fields are numbers or expressions (expr.js, PartCraft's language): params by key; a hosted family also reads
 *   WallThickness (mm) and Face (1 | −1) from its wall. A param with a formula is driven. `visible` is an expression (a Yes /
 *   No parameter, or a comparison): 0 hides the solid. Coordinates in mm; a hosted family's axes are the opening's (x along
 *   the wall from the opening's start, y across from the wall's middle, z up from the sill); others' are the element's own.
 *   box { x0, y0, z0, x1, y1, z1 } · extrude { plane xy | xz | yz, at, profile [[u, v, bulge?]…], depth } (along +z, +y, +x) ·
 *   revolve { plane, at, profile, axis [u0, v0, u1, v1], angle (degrees) } · sweep { path [[x, y, z]…], radius }
 *
 *   readFamily(obj) → { ok, family, errors: [{ key, fill }] }
 *   evaluateFamily(fam, values, { wallThickness, face }) → { ok, values, solids: Map, roots, connectors: [{ id, name, domain,
 *     system, p, dir, size, flow }] } | { ok: false, error: { key, fill } }
 *   bodyItems(w, ev) → { items, type }                           IFC items (styled) for an evaluated family
 *   inputParams(fam) / sizeValues(fam, values) / sizeKey(fam, values) / defaultSizeName(fam, values)
 *   familyIndex(w) → { groups: Map key → { id, fam }, sizes: Map typeId → { family, name, values } , occ: Map typeId → [ids] }
 *   familyFor(w, key) → recipe (stored, else a starter) | null      storeFamily(w, fam) → group id (made or updated)
 *   sizeTypeFor(w, fam, values, { name, op }) → type id (found by its values, else made)
 *   writeSizeMaps(w, typeId, fam, values)                         the type's maps made again (the map lines stay)
 *   typePset(w, typeId, name) / setTypePset(w, typeId, name, rows)
 *   STYLES, FAMILY_PSET, SIZE_PSET, IFC_CLASSES, newFamilyKey(rand)
 */
import { parse, evaluate, ExprError, NAME_RE, RESERVED } from './expr.js';
import { starterRecipe } from './family-starters.js';
import { openingType } from './opening-types.js';
import { round } from './model-write.js';
import { readMaterials } from './project-materials.js';
import { readSymbol, symbolExprs, evalSymbol, symbolCurves, FILL_KEYS, DETAIL_LEVELS, detailRank } from './family-symbol.js';
export { DETAIL_LEVELS, detailRank };
import { ids, val, deleteLine } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { FIXTURE_KINDS, fixtureOf } from './mep/fixtures.js';

export const FAMILY_FORMAT = 'cadcraft-family';
export const FAMILY_PSET = 'CadCraft_Family';
export const SIZE_PSET = 'CadCraft_FamilySize';
export const FAMILY_OBJECT_TYPE = 'Family';   // i18n-ignore: ObjectType written into the IFC file
export const NOMINAL_WALL = 140;   // mm: the frame depth a hosted family's type is drawn at (each element follows its own wall)
export const CONTEXT_NAMES = ['WallThickness', 'Face'];
export const KINDS = ['door', 'window', 'furniture', 'fixture', 'generic'];
/** 0.7 BIM-FAM-MORE (1): typed parameters. length (mm), angle (°), number, integer, yesno (1 | 0) and pen (1–16) are numbers an expression
 *  can use; text, material (a project material's id) and fill (a plan fill's key) are words: they live beside the numbers, never in an expression. */
export const PARAM_KINDS = ['length', 'angle', 'number', 'integer', 'yesno', 'pen', 'text', 'material', 'fill'];
export const TEXT_KINDS = ['text', 'material', 'fill'];
export const isWordKind = (kind) => TEXT_KINDS.includes(kind);
export { FILL_KEYS };   // drafting.js's patterns, and none (family-symbol.js)
export const MATERIAL_RE = /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,63}$/;
export const SOLID_OPS = ['box', 'extrude', 'revolve', 'sweep'];
export const PLANES = ['xy', 'xz', 'yz'];
/** Element classes a family may be (IFC4 names); hosted families are doors or windows. */
export const IFC_CLASSES = ['IfcDoor', 'IfcWindow', 'IfcFurniture', 'IfcFurnishingElement', 'IfcBuildingElementProxy', 'IfcSanitaryTerminal', 'IfcLightFixture'];
/** Colours; the door and window ones are model-openings.js's (same names, so a starter door is written as before). */
export const STYLES = {
  frame: { name: 'model.style.frame', rgb: [0.93, 0.92, 0.89], tr: 0 },
  leaf: { name: 'model.style.leaf', rgb: [0.72, 0.56, 0.38], tr: 0 },
  glass: { name: 'model.style.glass', rgb: [0.62, 0.79, 0.89], tr: 0.6 },
  garage: { name: 'model.style.garage', rgb: [0.86, 0.86, 0.84], tr: 0 },
  wood: { name: 'fam.style.wood', rgb: [0.78, 0.64, 0.45], tr: 0 },
  metal: { name: 'fam.style.metal', rgb: [0.62, 0.64, 0.67], tr: 0 },
  stone: { name: 'fam.style.stone', rgb: [0.82, 0.8, 0.76], tr: 0 },
  solid: { name: 'fam.style.solid', rgb: [0.8, 0.8, 0.8], tr: 0 },
  ceramic: { name: 'fam.style.ceramic', rgb: [0.96, 0.96, 0.94], tr: 0 },
};
export const LIMITS = { params: 60, solids: 200, booleans: 100, points: 400, expr: 300, sizes: 200, name: 80, notes: 2000, value: 1e7, array: 200, instances: 1000, parts: 50, nestDepth: 4, partValues: 40, hotspots: 40, connectors: 24 };
/** Connectors: what they join, the six ways out of one, and the set each placed element's ports carry. */
export const CONNECTOR_DOMAINS = ['pipe', 'duct'];
export const CONNECTOR_DIRS = { '+x': [1, 0, 0], '-x': [-1, 0, 0], '+y': [0, 1, 0], '-y': [0, -1, 0], '+z': [0, 0, 1], '-z': [0, 0, -1] };
export const CONNECTOR_PSET = 'CadCraft_Connector';
const SYSTEM_RE = /^[a-z][a-z0-9_-]{0,23}$/;

const KEY_RE = /^[a-z0-9][a-z0-9-]{0,47}$/;
const ID_RE = /^[a-z][a-z0-9_-]{0,23}$/;
const CTRL = /[\u0000-\u001f\u007f]/g;
const cleanText = (s, max) => String(s ?? '').replace(CTRL, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const err = (key, fill = {}) => ({ key, fill });
/** A parameter's value as its kind keeps it (untrusted): numbers finite and bounded, integers whole, pens 1–16, words cleaned. */
export function cleanValue(kind, value) {
  if (kind === 'text') return cleanText(value, 120);
  if (kind === 'material') { const s = String(value ?? '').trim(); return MATERIAL_RE.test(s) ? s : ''; }
  if (kind === 'fill') return FILL_KEYS.includes(value) ? value : 'none';
  const v = Number(value);
  if (!Number.isFinite(v) || Math.abs(v) > LIMITS.value) return kind === 'pen' ? 1 : 0;
  if (kind === 'yesno') return v ? 1 : 0;
  if (kind === 'integer') return Math.round(v);
  if (kind === 'pen') return Math.min(16, Math.max(1, Math.round(v)));
  return v;
}
const isObj = (x) => x && typeof x === 'object' && !Array.isArray(x);

/** A new family's key: "fam-" + 8 letters / digits. */
export function newFamilyKey(rand = () => Math.random()) {
  let s = 'fam-';
  for (let i = 0; i < 8; i++) s += 'abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(rand() * 36) % 36];
  return s;
}

// ======================================================================================================== reading a recipe
/** An expression field: a finite number, or text the parser takes (checked against the names later). */
function exprField(v) {
  if (typeof v === 'number') return Number.isFinite(v) && Math.abs(v) <= LIMITS.value ? String(v) : null;
  if (typeof v !== 'string') return null;
  const s = v.trim();
  if (!s || s.length > LIMITS.expr) return null;
  return parse(s).ok ? s : null;
}

export function readFamily(obj) {
  const errors = [];
  const bad = (key, fill) => { errors.push(err(key, fill)); return null; };
  if (!isObj(obj)) return { ok: false, family: null, errors: [err('fam.err.notfamily')] };
  if (obj.format !== FAMILY_FORMAT) return { ok: false, family: null, errors: [err('fam.err.notfamily')] };
  if (obj.version !== 1) return { ok: false, family: null, errors: [err('fam.err.version', { v: String(obj.version).slice(0, 12) })] };
  const f = { format: FAMILY_FORMAT, version: 1 };
  if (Number.isInteger(obj.revision) && obj.revision >= 0 && obj.revision < 1e9) f.revision = obj.revision;   // 0.7 BIM-FAM-SOLID: which save an editor opened (saveFamily refuses a stale one)
  f.key = typeof obj.key === 'string' && KEY_RE.test(obj.key) ? obj.key : bad('fam.err.key');
  f.name = cleanText(obj.name, LIMITS.name) || bad('fam.err.name');
  f.kind = KINDS.includes(obj.kind) ? obj.kind : 'generic';
  f.host = obj.host === 'wall' ? 'wall' : 'none';
  const ifc = isObj(obj.ifc) ? obj.ifc : {};
  f.ifc = { class: IFC_CLASSES.includes(ifc.class) ? ifc.class : 'IfcBuildingElementProxy' };
  if (typeof ifc.predefined === 'string' && /^[A-Z_]{1,40}$/.test(ifc.predefined)) f.ifc.predefined = ifc.predefined;
  f.base = '';
  if (f.host === 'wall') {
    const ot = openingType(obj.base);
    if (!ot || (f.kind !== 'door' && f.kind !== 'window') || ot.kind !== f.kind) bad('fam.err.base');
    else f.base = obj.base;
    f.ifc.class = f.kind === 'door' ? 'IfcDoor' : 'IfcWindow';
  } else if (f.ifc.class === 'IfcDoor' || f.ifc.class === 'IfcWindow') f.ifc.class = 'IfcBuildingElementProxy';
  if (obj.starter === true) f.starter = true;
  if (obj.fixture !== undefined && obj.fixture !== null && obj.fixture !== '') { if (f.host === 'wall' || !FIXTURE_KINDS.includes(obj.fixture)) bad('fam.err.fixture'); else f.fixture = obj.fixture; }
  // parameters
  const params = Array.isArray(obj.params) ? obj.params.slice(0, LIMITS.params + 1) : [];
  if (params.length > LIMITS.params) bad('fam.err.toomany', { what: 'params', n: LIMITS.params });
  f.params = [];
  const seen = new Set(CONTEXT_NAMES);
  for (const p of params.slice(0, LIMITS.params)) {
    if (!isObj(p) || typeof p.key !== 'string' || !NAME_RE.test(p.key) || RESERVED.has(p.key) || seen.has(p.key)) { bad('fam.err.param', { name: String(p?.key ?? '').slice(0, 40) }); continue; }
    seen.add(p.key);
    const q = { key: p.key, kind: PARAM_KINDS.includes(p.kind) ? p.kind : 'number' };
    q.value = cleanValue(q.kind, p.value);
    if (p.instance === true && !(p.formula !== undefined && p.formula !== null && p.formula !== '')) q.instance = true;   // 0.7 BIM-FAM-MORE (7): set per placed element, not per size
    if (p.label !== undefined) { const l = cleanText(p.label, LIMITS.name); if (l) q.label = l; }
    if (p.formula !== undefined && p.formula !== null && p.formula !== '' && !isWordKind(q.kind)) {   // words are never computed
      const fx = exprField(p.formula);
      if (fx === null) bad('fam.err.formula', { name: p.key }); else q.formula = fx;
    }
    f.params.push(q);
  }
  if (f.host === 'wall') for (const k of ['Width', 'Height']) {
    const p = f.params.find((x) => x.key === k);
    if (!p || p.kind !== 'length' || p.formula || p.instance) bad('fam.err.needs', { name: k });   // a door's width and height are its size
  }
  // solids
  const solids = Array.isArray(obj.solids) ? obj.solids : [];
  if (solids.length > LIMITS.solids) bad('fam.err.toomany', { what: 'solids', n: LIMITS.solids });
  f.solids = [];
  const idSeen = new Set();
  for (const s of solids.slice(0, LIMITS.solids)) {
    if (!isObj(s) || typeof s.id !== 'string' || !ID_RE.test(s.id) || idSeen.has(s.id) || !SOLID_OPS.includes(s.op)) { bad('fam.err.solid', { id: String(s?.id ?? '').slice(0, 24) }); continue; }
    idSeen.add(s.id);
    const q = { id: s.id, op: s.op, style: STYLES[s.style] ? s.style : 'solid' };
    const nm = cleanText(s.name, 60); if (nm) q.name = nm;
    if (s.material !== undefined && s.material !== null && s.material !== '') { if (typeof s.material === 'string' && MATERIAL_RE.test(s.material)) q.material = s.material; else bad('fam.err.field', { id: s.id, field: 'material' }); }   // a material parameter's name or a project material's id
    if (DETAIL_LEVELS.includes(s.detail) && s.detail !== 'coarse') q.detail = s.detail;   // 0.7 BIM-FAM-MORE (5)
    if (s.visible !== undefined && s.visible !== null && s.visible !== '') { const v = exprField(s.visible); if (v === null) bad('fam.err.field', { id: s.id, field: 'visible' }); else q.visible = v; }
    const need = (k) => { const v = exprField(s[k]); if (v === null) bad('fam.err.field', { id: s.id, field: k }); return v; };
    if (s.array !== undefined && s.array !== null) {   // 0.7 BIM-FAM-MORE (4): count and spacing as parameters
      const a = isObj(s.array) ? s.array : null, cnt = a ? exprField(a.count) : null;
      if (cnt === null) bad('fam.err.field', { id: s.id, field: 'array-count' });
      else {
        const q2 = { count: cnt };
        for (const k of ['dx', 'dy', 'dz']) { const v = a[k] === undefined || a[k] === null || a[k] === '' ? '0' : exprField(a[k]); if (v === null) bad('fam.err.field', { id: s.id, field: 'array ' + k }); else q2[k] = v; }
        q.array = q2;
      }
    }
    const pts = (k, dim, min) => {
      const a = Array.isArray(s[k]) ? s[k] : null;
      if (!a || a.length < min || a.length > LIMITS.points) { bad('fam.err.points', { id: s.id }); return []; }
      return a.map((p) => {
        if (!Array.isArray(p) || p.length < dim) { bad('fam.err.points', { id: s.id }); return null; }
        const out = p.slice(0, dim).map((x) => exprField(x));
        if (out.some((x) => x === null)) { bad('fam.err.points', { id: s.id }); return null; }
        if (dim === 2 && p.length > 2) { const b = Number(p[2]); if (Number.isFinite(b) && Math.abs(b) <= 10 && b !== 0) out.push(round(b, 12)); }
        return out;
      }).filter(Boolean);
    };
    if (s.op === 'box') for (const k of ['x0', 'y0', 'z0', 'x1', 'y1', 'z1']) q[k] = need(k);
    else if (s.op === 'extrude' || s.op === 'revolve') {
      q.plane = PLANES.includes(s.plane) ? s.plane : 'xy';
      q.at = s.at === undefined ? '0' : need('at');
      q.profile = pts('profile', 2, 2);
      if (q.profile.length < 3 && !(q.profile.length === 2 && q.profile.some((p) => p[2]))) bad('fam.err.points', { id: s.id });   // two points close only with an arc
      if (s.op === 'extrude') q.depth = need('depth');
      else {
        const ax = Array.isArray(s.axis) && s.axis.length === 4 ? s.axis.map(exprField) : null;
        if (!ax || ax.some((x) => x === null)) bad('fam.err.field', { id: s.id, field: 'axis' }); else q.axis = ax;
        q.angle = need('angle');
      }
    } else { q.path = pts('path', 3, 2); q.radius = need('radius'); }
    f.solids.push(q);
  }
  // booleans
  const bools = Array.isArray(obj.booleans) ? obj.booleans : [];
  if (bools.length > LIMITS.booleans) bad('fam.err.toomany', { what: 'booleans', n: LIMITS.booleans });
  f.booleans = [];
  const used = new Set();
  for (const b of bools.slice(0, LIMITS.booleans)) {
    if (!isObj(b) || typeof b.id !== 'string' || !ID_RE.test(b.id) || idSeen.has(b.id) || !['difference', 'union'].includes(b.op)) { bad('fam.err.boolean', { id: String(b?.id ?? '').slice(0, 24) }); continue; }
    if (typeof b.a !== 'string' || typeof b.b !== 'string' || b.a === b.b || !idSeen.has(b.a) || !idSeen.has(b.b) || used.has(b.a) || used.has(b.b)) { bad('fam.err.boolean', { id: b.id }); continue; }
    idSeen.add(b.id); used.add(b.a); used.add(b.b);
    f.booleans.push({ id: b.id, op: b.op, a: b.a, b: b.b });
  }
  // a Boolean names only what came before it, so the tree has no cycle; one using a later Boolean is refused above (idSeen)
  // 0.7 BIM-FAM-MORE (6): families inside this one: { id, family: key, at: [x, y, z], rot (turns of 90°), values: { Param: number | expression | word }, visible? }
  const rawParts = Array.isArray(obj.parts) ? obj.parts : [];
  if (rawParts.length > LIMITS.parts) bad('fam.err.toomany', { what: 'parts', n: LIMITS.parts });
  f.parts = [];
  for (const p of rawParts.slice(0, LIMITS.parts)) {
    if (!isObj(p) || typeof p.id !== 'string' || !ID_RE.test(p.id) || idSeen.has(p.id) || typeof p.family !== 'string' || !KEY_RE.test(p.family)) { bad('fam.err.part', { id: String(p?.id ?? '').slice(0, 24) }); continue; }
    if (p.family === f.key) { bad('fam.err.nestcycle', { name: p.id }); continue; }
    idSeen.add(p.id);
    const q = { id: p.id, family: p.family, at: ['0', '0', '0'] };
    if (Array.isArray(p.at) && p.at.length >= 3) { const at = p.at.slice(0, 3).map(exprField); if (at.some((x) => x === null)) bad('fam.err.field', { id: p.id, field: 'at' }); else q.at = at; } else if (p.at !== undefined) bad('fam.err.field', { id: p.id, field: 'at' });
    if (p.rot !== undefined && p.rot !== null && p.rot !== '') { const v = exprField(p.rot); if (v === null) bad('fam.err.field', { id: p.id, field: 'rot' }); else q.rot = v; }
    if (p.visible !== undefined && p.visible !== null && p.visible !== '') { const v = exprField(p.visible); if (v === null) bad('fam.err.field', { id: p.id, field: 'visible' }); else q.visible = v; }
    if (isObj(p.values)) {
      q.values = {};
      for (const [k, v] of Object.entries(p.values).slice(0, LIMITS.partValues)) {
        if (!NAME_RE.test(k) || RESERVED.has(k)) { bad('fam.err.param', { name: k.slice(0, 40) }); continue; }
        if (typeof v === 'number') { if (Number.isFinite(v) && Math.abs(v) <= LIMITS.value) q.values[k] = String(v); else bad('fam.err.field', { id: p.id, field: k }); }
        else if (typeof v === 'string' && v.trim() && v.length <= LIMITS.expr) q.values[k] = v.trim();
        else bad('fam.err.field', { id: p.id, field: k });
      }
    }
    f.parts.push(q);
  }
  if (!f.solids.length && !f.parts.length) bad('fam.err.nosolids');
  // connectors (kept out of the recipe when there are none, so families without them read and write as before)
  const conns = Array.isArray(obj.connectors) ? obj.connectors : [];
  if (conns.length && f.host === 'wall') bad('fam.err.connhosted');
  else if (conns.length) {
    if (conns.length > LIMITS.connectors) bad('fam.err.toomany', { what: 'connectors', n: LIMITS.connectors });
    f.connectors = [];
    const cSeen = new Set();
    for (const c of conns.slice(0, LIMITS.connectors)) {
      if (!isObj(c) || typeof c.id !== 'string' || !ID_RE.test(c.id) || cSeen.has(c.id) || !CONNECTOR_DOMAINS.includes(c.domain)) { bad('fam.err.connector', { id: String(c?.id ?? '').slice(0, 24) }); continue; }
      cSeen.add(c.id);
      const q = { id: c.id, domain: c.domain };
      const nm = cleanText(c.name, 60); if (nm) q.name = nm;
      if (typeof c.system !== 'string' || !SYSTEM_RE.test(c.system)) bad('fam.err.connfield', { id: c.id, field: 'system' }); else q.system = c.system;
      for (const k of ['x', 'y', 'z', 'size']) { const v = exprField(c[k]); if (v === null) bad('fam.err.connfield', { id: c.id, field: k }); else q[k] = v; }
      q.dir = CONNECTOR_DIRS[c.dir] ? c.dir : bad('fam.err.connfield', { id: c.id, field: 'dir' });
      q.flow = c.flow === 'out' ? 'out' : 'in';
      f.connectors.push(q);
    }
  }
  if (!f.parts.length) delete f.parts;
  // 0.7 BIM-FAM-MORE (3): hotspots — points and edges that drag a parameter: { id, name?, kind: point | edge, at: [x, y, z], to: [x, y, z] (an edge's far end), axis: x | y | z, drives: a number parameter }
  const rawHot = Array.isArray(obj.hotspots) ? obj.hotspots : [];
  if (rawHot.length > LIMITS.hotspots) bad('fam.err.toomany', { what: 'hotspots', n: LIMITS.hotspots });
  f.hotspots = [];
  for (const h of rawHot.slice(0, LIMITS.hotspots)) {
    if (!isObj(h) || typeof h.id !== 'string' || !ID_RE.test(h.id) || idSeen.has(h.id) || !['point', 'edge'].includes(h.kind) || !['x', 'y', 'z'].includes(h.axis) || typeof h.drives !== 'string') { bad('fam.err.hotspot', { id: String(h?.id ?? '').slice(0, 24) }); continue; }
    idSeen.add(h.id);
    const q = { id: h.id, kind: h.kind, axis: h.axis, drives: h.drives };
    const nm = cleanText(h.name, 60); if (nm) q.name = nm;
    const three = (k) => { const a = Array.isArray(h[k]) && h[k].length >= 3 ? h[k].slice(0, 3).map(exprField) : null; if (!a || a.some((x) => x === null)) { bad('fam.err.hotspot', { id: h.id }); return null; } return a; };
    q.at = three('at');
    if (h.kind === 'edge') q.to = three('to');
    if (q.at && (h.kind === 'point' || q.to)) f.hotspots.push(q);
  }
  for (const h of f.hotspots) {   // what a hotspot drags must be a number the person can set: not a word, not driven, not a Yes / No
    const p = f.params.find((x) => x.key === h.drives);
    if (!p || p.formula || isWordKind(p.kind) || p.kind === 'yesno' || p.instance) bad('fam.err.hotspot', { id: h.id });
  }
  if (!f.hotspots.length) delete f.hotspots;
  const symbol = readSymbol(obj.symbol, { bad, hosted: f.host === 'wall' });   // 0.7 BIM-FAM-MORE (2): its own 2D symbol
  if (symbol) f.symbol = symbol;
  // sizes kept in a family file
  if (Array.isArray(obj.sizes)) {
    f.sizes = [];
    for (const z of obj.sizes.slice(0, LIMITS.sizes)) {
      if (!isObj(z) || !isObj(z.values)) continue;
      const values = {};
      for (const p of f.params) if (!p.formula && Number.isFinite(Number(z.values[p.key])) && Math.abs(Number(z.values[p.key])) <= LIMITS.value) values[p.key] = Number(z.values[p.key]);
      f.sizes.push({ name: cleanText(z.name, LIMITS.name) || defaultSizeName(f, values), values });
    }
  }
  if (obj.notes !== undefined) { const n = String(obj.notes ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').slice(0, LIMITS.notes).trim(); if (n) f.notes = n; }
  if (isObj(obj.license)) {
    const id = cleanText(obj.license.id, 40), holder = cleanText(obj.license.holder, 120);
    if (id || holder) f.license = { ...(id ? { id } : {}), ...(holder ? { holder } : {}) };
  }
  // every expression names only known parameters
  if (!errors.length) {
    const names = [...f.params.filter((p) => !isWordKind(p.kind)).map((p) => p.key), ...(f.host === 'wall' ? CONTEXT_NAMES : [])];
    const check = (src, where) => { const p = parse(src, names); if (!p.ok) errors.push(err('fam.err.unknown', { where, why: p.error })); };
    for (const p of f.params) if (p.formula) check(p.formula, p.key);
    for (const s of f.solids) for (const [k, v] of fieldsOf(s)) check(v, (s.name || s.id) + ' ' + k);
    for (const [label, src] of symbolExprs(f.symbol)) check(src, label);
    for (const p of f.parts || []) for (const [k, v] of partExprs(p)) check(v, 'part ' + p.id + ' ' + k);
    for (const h of f.hotspots || []) for (const [k, v] of hotspotExprs(h)) check(v, 'hotspot ' + h.id + ' ' + k);
    for (const c of f.connectors || []) for (const k of CONNECTOR_FIELDS) check(c[k], (c.name || c.id) + ' ' + k);
  }
  return { ok: errors.length === 0, family: errors.length ? null : f, errors };
}

/** Every expression of a hotspot as [field, text]. */
export function hotspotExprs(h) {
  const out = ['x', 'y', 'z'].map((k, i) => ['at ' + k, h.at[i]]);
  if (h.to) out.push(...['x', 'y', 'z'].map((k, i) => ['to ' + k, h.to[i]]));
  return out;
}
/** Every parent-side expression of a nested part as [field, text] (a value naming a word, not an expression, is not one). */
export function partExprs(p) {
  const out = [['at x', p.at[0]], ['at y', p.at[1]], ['at z', p.at[2]]];
  if (p.rot !== undefined) out.push(['rot', p.rot]);
  if (p.visible !== undefined) out.push(['visible', p.visible]);
  return out;
}
/** A connector's expression fields. */
export const CONNECTOR_FIELDS = ['x', 'y', 'z', 'size'];

/** Every expression of a solid as [field, text]. */
function fieldsOf(s) {
  const out = [];
  if (s.visible) out.push(['visible', s.visible]);
  if (s.array) for (const k of ['count', 'dx', 'dy', 'dz']) out.push(['array ' + k, s.array[k]]);
  if (s.op === 'box') for (const k of ['x0', 'y0', 'z0', 'x1', 'y1', 'z1']) out.push([k, s[k]]);
  else if (s.op === 'extrude' || s.op === 'revolve') {
    out.push(['at', s.at]);
    s.profile.forEach((p, i) => { out.push(['profile ' + (i + 1) + ' u', p[0]], ['profile ' + (i + 1) + ' v', p[1]]); });
    if (s.op === 'extrude') out.push(['depth', s.depth]); else { s.axis.forEach((a, i) => out.push(['axis ' + (i + 1), a])); out.push(['angle', s.angle]); }
  } else { s.path.forEach((p, i) => p.forEach((x, j) => out.push(['path ' + (i + 1) + ' ' + 'xyz'[j], x]))); out.push(['radius', s.radius]); }
  return out;
}

// ======================================================================================================== evaluating
export const inputParams = (fam) => fam.params.filter((p) => !p.formula);

/** Parameters set per placed element (a Yes / No that adds a transom, a label): they are not part of a size. */
export const instanceParams = (fam) => fam.params.filter((p) => !p.formula && p.instance);
/** The parameters a size is made of: every input parameter that is not an instance one. */
export const sizeParams = (fam) => fam.params.filter((p) => !p.formula && !p.instance);
export const INSTANCE_PSET = 'CadCraft_FamilyInstance';
/** The instance values: from `values`, else each default. */
export function instanceValues(fam, values = {}) {
  const out = {};
  for (const p of instanceParams(fam)) {
    const given = values?.[p.key];
    if (isWordKind(p.kind)) { out[p.key] = given === undefined || given === null ? p.value : cleanValue(p.kind, given); continue; }
    const v = Number(given);
    out[p.key] = Number.isFinite(v) ? cleanValue(p.kind, v) : p.value;
  }
  return out;
}
/** Size values and instance values together: what a placed element is drawn from. */
export const fullValues = (fam, values = {}) => ({ ...sizeValues(fam, values), ...instanceValues(fam, values) });
/** Does `values` set any instance parameter to other than its default? */
export function hasInstance(fam, values = {}) {
  const iv = instanceValues(fam, values);
  return instanceParams(fam).some((p) => iv[p.key] !== p.value);
}
/** The instance values stored on an element (CadCraft_FamilyInstance Values) as the family reads them (the defaults where it stores nothing). */
export function readInstance(w, id, fam) {
  let ps = null;
  try { ps = w.readPset(id, INSTANCE_PSET); } catch (e) { return instanceValues(fam, {}); }
  if (!ps?.Values) return instanceValues(fam, {});
  try { const raw = JSON.parse(ps.Values); return instanceValues(fam, raw && typeof raw === 'object' ? raw : {}); } catch (e) { return instanceValues(fam, {}); }
}
/** Store an element's instance values: the pset when any differs from its default, no pset otherwise. */
export function writeInstance(w, id, fam, values) {
  if (hasInstance(fam, values)) w.upsertPset(id, INSTANCE_PSET, [['Values', 'IFCTEXT', JSON.stringify(instanceValues(fam, values))]]);
  else dropInstance(w, id);
}
function dropInstance(w, id) {
  const gone = [];
  for (const d of w.defs(id)) { const ps = w.api.GetLine(w.mid, d.def, false); if (val(ps?.Name) === INSTANCE_PSET) gone.push(d); }
  for (const d of gone) { w.touch(d.rel); deleteLine(w.api, w.mid, d.rel); w.dropTree(d.def); }   // the relation (it names only this element's set) first, then the set
  if (gone.length) w._defs = null;
}
/** The values a size keeps: every input parameter (no formula, not an instance one), from `values`, else its default. */
export function sizeValues(fam, values = {}) {
  const out = {};
  for (const p of sizeParams(fam)) {
    const given = values?.[p.key];
    if (isWordKind(p.kind)) { out[p.key] = given === undefined || given === null ? p.value : cleanValue(p.kind, given); continue; }
    const v = Number(given);
    out[p.key] = Number.isFinite(v) ? cleanValue(p.kind, v) : p.value;
  }
  return out;
}
/** What makes two sizes the same: their input values to 0.001. */
export function sizeKey(fam, values) {
  const v = sizeValues(fam, values);
  return Object.keys(v).sort().map((k) => k + '=' + (typeof v[k] === 'string' ? JSON.stringify(v[k]) : round(v[k], 3))).join(';');
}
/** "915 × 2032" (mm, whole) for a family with Width and Height; else the first two lengths; else the family's name. */
export function defaultSizeName(fam, values, fmt = (mm) => String(Math.round(mm))) {
  const v = sizeValues(fam, values);
  const lens = sizeParams(fam).filter((p) => p.kind === 'length').map((p) => p.key);
  const keys = ['Width', 'Height'].every((k) => k in v) ? ['Width', 'Height'] : lens.slice(0, 3);
  return keys.length ? keys.map((k) => fmt(v[k])).join(' × ') : fam.name;
}

export function evaluateFamily(fam, values = {}, ctx = {}) {
  const rank = Number.isInteger(ctx.detail) ? Math.min(2, Math.max(0, ctx.detail)) : typeof ctx.detail === 'string' ? (ctx.detail === 'auto' ? 2 : detailRank(ctx.detail)) : 2;   // the detail level asked for: 0 coarse, 1 medium, 2 fine (default)
  const env = {}, texts = {};   // numbers an expression may use; words (text, material, fill) beside them
  try {
    if (fam.host === 'wall') { env.WallThickness = Number.isFinite(ctx.wallThickness) && ctx.wallThickness > 0 ? ctx.wallThickness : NOMINAL_WALL; env.Face = ctx.face === -1 ? -1 : 1; }
    const sv = fullValues(fam, values);   // the size's values and the element's own (instance) ones
    for (const [k, v] of Object.entries(sv)) { if (typeof v === 'string') texts[k] = v; else env[k] = v; }
    // driven parameters in the order their inputs become known
    let pending = fam.params.filter((p) => p.formula);
    const names = [...fam.params.filter((p) => !isWordKind(p.kind)).map((p) => p.key), ...Object.keys(env)];
    while (pending.length) {
      const next = [];
      for (const p of pending) {
        const ps = parse(p.formula, names);
        if (!ps.ok) return { ok: false, error: err('fam.err.expr', { where: p.key, why: ps.error }) };
        if (ps.uses.some((u) => !(u in env))) { next.push(p); continue; }
        env[p.key] = evaluate(ps.ast, env);
      }
      if (next.length === pending.length) return { ok: false, error: err('fam.err.cycle', { name: next[0].key }) };
      pending = next;
    }
  } catch (e) {
    if (e instanceof ExprError) return { ok: false, error: err('fam.err.expr', { where: '', why: e.message }) };
    throw e;
  }
  const num = (src, where) => {
    const p = parse(src);
    if (!p.ok) throw Object.assign(new ExprError(p.error), { where });
    try { return evaluate(p.ast, env); } catch (e) { if (e instanceof ExprError) e.where = where; throw e; }
  };
  const solids = new Map(), instances = new Map();   // an array's solids: base id → [base, base~1, …]
  try {
    for (const s of fam.solids) {
      const where = s.name || s.id;
      const visible = (s.detail && detailRank(s.detail) > rank ? false : true) && (s.visible ? num(s.visible, where + ' visible') !== 0 : true);
      const e = { id: s.id, op: s.op, style: s.style, visible, name: s.name || '' };
      if (s.material) { const mp = fam.params.find((x) => x.key === s.material && (x.kind === 'material' || x.kind === 'text')); e.material = mp ? texts[mp.key] || '' : s.material; }
      if (s.op === 'box') {
        const v = ['x0', 'y0', 'z0', 'x1', 'y1', 'z1'].map((k) => num(s[k], where + ' ' + k));
        e.box = [Math.min(v[0], v[3]), Math.min(v[1], v[4]), Math.min(v[2], v[5]), Math.max(v[0], v[3]), Math.max(v[1], v[4]), Math.max(v[2], v[5])];
        if (visible && (e.box[3] - e.box[0] < 0.01 || e.box[4] - e.box[1] < 0.01 || e.box[5] - e.box[2] < 0.01)) return { ok: false, error: err('fam.err.flat', { name: where }) };
      } else if (s.op === 'extrude' || s.op === 'revolve') {
        e.plane = s.plane; e.at = num(s.at, where + ' at');
        e.profile = s.profile.map((p, i) => [num(p[0], where + ' ' + (i + 1)), num(p[1], where + ' ' + (i + 1)), p[2] || 0]);
        if (visible && Math.abs(polyArea(e.profile)) < 1) return { ok: false, error: err('fam.err.flat', { name: where }) };
        if (s.op === 'extrude') {
          e.depth = num(s.depth, where + ' depth');
          if (e.depth < 0) { e.at += e.depth; e.depth = -e.depth; }
          if (visible && e.depth < 0.01) return { ok: false, error: err('fam.err.flat', { name: where }) };
        } else {
          e.axis = s.axis.map((a, i) => num(a, where + ' axis ' + (i + 1)));
          e.angle = num(s.angle, where + ' angle');
          if (visible && !(e.angle > 0.01 && e.angle <= 360)) return { ok: false, error: err('fam.err.angle', { name: where }) };
          if (visible && !oneSide(e.profile, e.axis)) return { ok: false, error: err('fam.err.axis', { name: where }) };
        }
      } else {
        e.path = s.path.map((p, i) => p.map((x) => num(x, where + ' ' + (i + 1))));
        e.radius = num(s.radius, where + ' radius');
        if (visible && !(e.radius > 0.01)) return { ok: false, error: err('fam.err.flat', { name: where }) };
        if (visible && e.path.some((p, i) => i && Math.hypot(p[0] - e.path[i - 1][0], p[1] - e.path[i - 1][1], p[2] - e.path[i - 1][2]) < 0.01)) return { ok: false, error: err('fam.err.flat', { name: where }) };
      }
      solids.set(s.id, e);
      if (s.array) {
        const n = Math.round(num(s.array.count, where + ' array-count'));
        if (!(n >= 1 && n <= LIMITS.array)) return { ok: false, error: err('fam.err.arraycount', { name: where, max: LIMITS.array }) };
        const d = ['dx', 'dy', 'dz'].map((k) => num(s.array[k], where + ' array ' + k));
        if (solids.size + n - 1 > LIMITS.instances) return { ok: false, error: err('fam.err.toomany', { what: 'solids', n: LIMITS.instances }) };
        const ids = [s.id];
        for (let i = 1; i < n; i++) { const id = s.id + '~' + i; solids.set(id, shifted(e, id, d[0] * i, d[1] * i, d[2] * i)); ids.push(id); }
        instances.set(s.id, ids);
      }
    }
  } catch (e) {
    if (e instanceof ExprError) return { ok: false, error: err('fam.err.expr', { where: e.where || '', why: e.message }) };
    throw e;
  }
  // families inside this one (0.7 BIM-FAM-MORE 6): each evaluated at the values this one gives it, turned in quarter turns, moved
  const nestedRoots = [], nestedSolids = new Map();   // joined into the family's own after its Boolean tree is built
  for (const p of fam.parts || []) {
    const where = 'part ' + p.id;
    let go;
    try { go = p.visible ? num(p.visible, where + ' visible') !== 0 : true; } catch (e) { if (e instanceof ExprError) return { ok: false, error: err('fam.err.expr', { where: e.where || where, why: e.message }) }; throw e; }
    if (!go) continue;
    const stack = ctx.stack || [];
    if (p.family === fam.key || stack.includes(p.family)) return { ok: false, error: err('fam.err.nestcycle', { name: where }) };
    if (stack.length >= LIMITS.nestDepth) return { ok: false, error: err('fam.err.nestdeep', { name: where, n: LIMITS.nestDepth }) };
    const child = ctx.resolve ? ctx.resolve(p.family) : null;
    if (!child) return { ok: false, error: err('fam.err.nestmissing', { name: where, family: p.family }) };
    try {
      const cv = {};
      for (const [name, src] of Object.entries(p.values || {})) {
        const cp = child.params.find((x) => x.key === name && !x.formula);
        if (!cp) return { ok: false, error: err('fam.err.nestparam', { name: where, param: name }) };
        cv[name] = isWordKind(cp.kind) ? (src in texts ? texts[src] : src) : num(src, where + ' ' + name);
      }
      const at = p.at.map((x, i) => num(x, where + ' at ' + 'xyz'[i])), turns = p.rot !== undefined ? num(p.rot, where + ' rot') / 90 : 0;
      if (!Number.isInteger(Math.round(turns * 1e6) / 1e6)) return { ok: false, error: err('fam.err.nestrot', { name: where }) };
      const k = ((Math.round(turns) % 4) + 4) % 4;
      const cev = evaluateFamily(child, cv, { ...ctx, stack: [...stack, fam.key], detail: rank });
      if (!cev.ok) return { ok: false, error: { key: cev.error.key, fill: { ...cev.error.fill, where: (where + ' ' + (cev.error.fill?.where || '')).trim() } } };
      const prefix = p.id + '/';
      for (const [cid, ce] of cev.solids) {
        let t = { ...ce };
        for (let i = 0; i < k; i++) { t = rot90(t); if (!t) return { ok: false, error: err('fam.err.nestrot', { name: where }) }; }
        nestedSolids.set(prefix + cid, shifted(t, prefix + cid, at[0], at[1], at[2]));
      }
      const mapNode = (n) => (n.kind === 'solid' ? { ...n, id: prefix + n.id } : { ...n, id: prefix + n.id, a: mapNode(n.a), b: mapNode(n.b) });
      for (const n of cev.roots) nestedRoots.push(mapNode(n));
    } catch (e) {
      if (e instanceof ExprError) return { ok: false, error: err('fam.err.expr', { where: e.where || where, why: e.message }) };
      throw e;
    }
  }
  let symbol = null;
  if (fam.symbol) {
    try { symbol = evalSymbol(fam.symbol, env, texts, { rank }); } catch (e) {
      if (e instanceof ExprError) return { ok: false, error: err('fam.err.expr', { where: e.where || '', why: e.message }) };
      throw e;
    }
  }
  const connectors = [];
  try {
    for (const c of fam.connectors || []) {
      const where = c.name || c.id;
      const size = num(c.size, where + ' size');
      if (!(size > 0)) return { ok: false, error: err('fam.err.connsize', { name: where }) };
      connectors.push({ id: c.id, name: c.name || '', domain: c.domain, system: c.system, p: ['x', 'y', 'z'].map((k) => num(c[k], where + ' ' + k)), dir: CONNECTOR_DIRS[c.dir].slice(), size, flow: c.flow });
    }
  } catch (e) {
    if (e instanceof ExprError) return { ok: false, error: err('fam.err.expr', { where: e.where || '', why: e.message }) };
    throw e;
  }
  // the Boolean tree: a hidden first operand hides the result; a hidden second one leaves the first as it is
  const nodes = new Map();
  for (const [id, s] of solids) nodes.set(id, s.visible ? { kind: 'solid', id, style: s.style, material: s.material || '' } : null);
  // an array used as a Boolean operand is all its solids joined; on its own each is a solid of its own
  const joined = (id) => {
    const list = instances.get(id);
    if (!list) return nodes.get(id);
    return list.map((x) => nodes.get(x)).filter(Boolean).reduce((acc, n) => (acc ? { kind: 'bool', id: n.id + '+', op: 'union', a: acc, b: n, style: acc.style, material: acc.material } : n), null);
  };
  const operand = new Set();
  for (const b of fam.booleans || []) {
    for (const x of [b.a, b.b]) { operand.add(x); for (const y of instances.get(x) || []) operand.add(y); }
    const A = joined(b.a), B = joined(b.b);
    nodes.set(b.id, !A ? null : !B ? A : { kind: 'bool', id: b.id, op: b.op, a: A, b: B, style: A.style, material: A.material });
  }
  const roots = [];
  for (const id of [...solids.keys(), ...(fam.booleans || []).map((b) => b.id)]) if (!operand.has(id) && nodes.get(id)) roots.push(nodes.get(id));
  roots.push(...nestedRoots);
  for (const [k, v] of nestedSolids) solids.set(k, v);
  let hotspots = [];
  try {
    hotspots = (fam.hotspots || []).map((h) => {
      const at = (src, k) => num(src, 'hotspot ' + h.id + ' ' + k);
      return { id: h.id, name: h.name || '', kind: h.kind, axis: h.axis, drives: h.drives, p: h.at.map((x, i) => at(x, 'at ' + 'xyz'[i])), ...(h.to ? { q: h.to.map((x, i) => at(x, 'to ' + 'xyz'[i])) } : {}) };
    });
  } catch (e) {
    if (e instanceof ExprError) return { ok: false, error: err('fam.err.expr', { where: e.where || '', why: e.message }) };
    throw e;
  }
  return { ok: true, values: env, texts, solids, roots, symbol, instances, hotspots, connectors };
}

/** An evaluated solid turned a quarter turn about z ((x, y) → (−y, x)); null for a revolve on a vertical plane (its direction would not carry over). */
function rot90(e) {
  const c = { ...e };
  if (e.op === 'box') { const b = e.box; c.box = [-b[4], b[0], b[2], -b[1], b[3], b[5]]; return c; }
  if (e.op === 'sweep') { c.path = e.path.map((p) => [-p[1], p[0], p[2]]); return c; }
  if (e.plane === 'xy') {
    c.profile = e.profile.map((p) => [-p[1], p[0], p[2]]);
    if (e.op === 'revolve') c.axis = [-e.axis[1], e.axis[0], -e.axis[3], e.axis[2]];
    return c;
  }
  if (e.op === 'revolve') return null;
  if (e.plane === 'xz') { c.plane = 'yz'; c.at = -(e.at + e.depth); return c; }   // volume y ∈ [at, at + depth] becomes x ∈ [−(at + depth), −at]
  c.plane = 'xz'; c.profile = e.profile.map((p) => [-p[0], p[1], -(p[2] || 0)]);   // yz: x' = −y mirrors u (arcs turn the other way), y' = x
  return c;
}
/** An evaluated solid moved by (dx, dy, dz) in the family's axes (a copy, under a new id). */
function shifted(e, id, dx, dy, dz) {
  const c = { ...e, id };
  if (e.op === 'box') { const b = e.box; c.box = [b[0] + dx, b[1] + dy, b[2] + dz, b[3] + dx, b[4] + dy, b[5] + dz]; return c; }
  if (e.op === 'sweep') { c.path = e.path.map((p) => [p[0] + dx, p[1] + dy, p[2] + dz]); return c; }
  // extrusions and revolves: the plane's own axes (xy: u = x, v = y; xz: u = x, v = z; yz: u = y, v = z) and what is normal to it
  const [du, dv, dn] = e.plane === 'xy' ? [dx, dy, dz] : e.plane === 'xz' ? [dx, dz, dy] : [dy, dz, dx];
  c.at = e.at + dn;
  c.profile = e.profile.map((p) => [p[0] + du, p[1] + dv, p[2]]);
  if (e.op === 'revolve') c.axis = [e.axis[0] + du, e.axis[1] + dv, e.axis[2] + du, e.axis[3] + dv];
  return c;
}

/** A profile's area with its arcs (each arc flattened to chords; enough to tell a real outline from a flat one). */
function polyArea(pts) {
  const flat = [];
  pts.forEach((p, i) => { flat.push(p); if (p[2]) flat.push(...arcPoints(p, pts[(i + 1) % pts.length], p[2])); });
  let a = 0;
  for (let i = 0; i < flat.length; i++) { const p = flat[i], q = flat[(i + 1) % flat.length]; a += p[0] * q[1] - q[0] * p[1]; }
  return a / 2;
}
/** Every profile point on one side of the revolve axis (or on it). */
function oneSide(pts, ax) {
  const dx = ax[2] - ax[0], dy = ax[3] - ax[1], L = Math.hypot(dx, dy);
  if (L < 1e-6) return false;
  let pos = 0, negs = 0;
  for (const p of pts) { const s = (dx * (p[1] - ax[1]) - dy * (p[0] - ax[0])) / L; if (s > 0.01) pos++; else if (s < -0.01) negs++; }
  return !(pos && negs) && (pos || negs);
}

// ======================================================================================================== writing geometry
/** Plane frames: origin on the plane, local X = u, and how a profile's v maps to the frame's local Y (xz: Y = −z). */
function planeFrame(w, plane, at) {
  if (plane === 'xz') return { frame: w.axisFrame([0, at, 0], [0, 1, 0], [1, 0, 0]), flipV: true };
  if (plane === 'yz') return { frame: w.axisFrame([at, 0, 0], [1, 0, 0], [0, 1, 0]), flipV: false };
  return { frame: w.axisFrame([0, 0, at], [0, 0, 1], [1, 0, 0]), flipV: false };
}
/** A closed profile (mm; bulges = arcs): IFC4 IfcIndexedPolyCurve with IfcArcIndex segments, else an IfcPolyline. */
function profileCurve(w, pts, flipV) {
  const P = pts.map((p) => [p[0], flipV ? -p[1] : p[1], flipV ? -(p[2] || 0) : (p[2] || 0)]);
  const arcs = P.some((p) => p[2]);
  if (arcs && w.v4) {
    const list = [], segs = [];
    const add = (x, y) => { list.push([round(w.u(x)), round(w.u(y))]); return list.length; };
    const first = add(P[0][0], P[0][1]);
    for (let i = 0; i < P.length; i++) {
      const a = P[i], b = P[(i + 1) % P.length], i0 = i === 0 ? first : list.length;
      if (!a[2]) { const i1 = (i + 1) % P.length === 0 ? first : add(b[0], b[1]); segs.push(w.T('IFCLINEINDEX', [i0, i1])); continue; }
      const m = arcMid(a, b, a[2]);
      const im = add(m[0], m[1]), i1 = (i + 1) % P.length === 0 ? first : add(b[0], b[1]);
      segs.push(w.T('IFCARCINDEX', [i0, im, i1]));
    }
    const pl = w.make('IFCCARTESIANPOINTLIST2D', list);
    return w.make('IFCINDEXEDPOLYCURVE', w.H(pl), segs, false);
  }
  // straight pieces; arcs as chords (IFC2X3 has no arc segments in a profile's polyline), 24 to a full turn
  const flat = [];
  for (let i = 0; i < P.length; i++) {
    const a = P[i], b = P[(i + 1) % P.length];
    flat.push([a[0], a[1]]);
    if (a[2]) for (const q of arcPoints(a, b, a[2])) flat.push(q);
  }
  return w.polyline2(flat, true);
}
/** The arc's middle point: the chord's middle pushed out by the sagitta (bulge = tan(θ / 4), + = counter-clockwise). */
export function arcMid(a, b, bulge) {
  const dx = b[0] - a[0], dy = b[1] - a[1], c = Math.hypot(dx, dy), s = bulge * c / 2;
  return [(a[0] + b[0]) / 2 + dy / c * s, (a[1] + b[1]) / 2 - dx / c * s];
}
/** Points strictly inside an arc from a to b (chords for a polyline). */
export function arcPoints(a, b, bulge) {
  const th = 4 * Math.atan(bulge), n = Math.max(2, Math.ceil(Math.abs(th) / (Math.PI / 12)));
  const m = arcMid(a, b, bulge);
  // the circle through a, m, b
  const ax = a[0], ay = a[1], bx = m[0], by = m[1], cx = b[0], cy = b[1];
  const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  if (Math.abs(d) < 1e-9) return [];
  const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
  const uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
  const r = Math.hypot(ax - ux, ay - uy), a0 = Math.atan2(ay - uy, ax - ux);
  const out = [];
  for (let i = 1; i < n; i++) { const t = a0 + th * i / n; out.push([ux + r * Math.cos(t), uy + r * Math.sin(t)]); }
  return out;
}

/** Plane angles in the file's own unit (radians unless the project says degrees), as mep-model.js reads them. */
function angleK(w) {
  if (w._angleK !== undefined) return w._angleK;
  let k = 1;
  try { for (const id of ids(w.api, w.mid, 'IFCCONVERSIONBASEDUNIT')) { const u = w.api.GetLine(w.mid, id, false); if (String(val(u.UnitType)) === 'PLANEANGLEUNIT' && /deg/i.test(String(val(u.Name)))) k = 180 / Math.PI; } } catch (e) { /* radians */ }
  return (w._angleK = k);
}

function solidItem(w, s) {
  if (s.op === 'box') return w.box(...s.box);
  if (s.op === 'extrude') {
    const { frame, flipV } = planeFrame(w, s.plane, s.at);
    const prof = w.make('IFCARBITRARYCLOSEDPROFILEDEF', 'AREA', null, w.H(profileCurve(w, s.profile, flipV)));
    return w.extrudeAt(prof, frame, s.depth);
  }
  if (s.op === 'revolve') {
    const { frame, flipV } = planeFrame(w, s.plane, s.at);
    const prof = w.make('IFCARBITRARYCLOSEDPROFILEDEF', 'AREA', null, w.H(profileCurve(w, s.profile, flipV)));
    const [u0, v0, u1, v1] = s.axis, f = flipV ? -1 : 1, L = Math.hypot(u1 - u0, v1 - v0);
    const axis = w.make('IFCAXIS1PLACEMENT', w.H(w.point3(round(w.u(u0)), round(w.u(f * v0)), 0)), w.H(w.dir(round((u1 - u0) / L, 12), round(f * (v1 - v0) / L, 12), 0)));
    return w.make('IFCREVOLVEDAREASOLID', w.H(prof), w.H(frame), w.H(axis), round(s.angle * Math.PI / 180 * angleK(w), 9));
  }
  const line = w.polyline3(s.path);
  return w.v4 ? w.make('IFCSWEPTDISKSOLID', w.H(line), round(w.u(s.radius)), null, null, null)
    : w.make('IFCSWEPTDISKSOLID', w.H(line), round(w.u(s.radius)), null, 0, s.path.length - 1);
}
function nodeItem(w, ev, n) {
  if (n.kind === 'solid') return solidItem(w, ev.solids.get(n.id));
  return w.make('IFCBOOLEANRESULT', n.op === 'union' ? 'UNION' : 'DIFFERENCE', w.H(nodeItem(w, ev, n.a)), w.H(nodeItem(w, ev, n.b)));
}
/** 0.7 BIM-FAM-MORE (5): the project's detail level for families: 'auto' (written fine; a sheet's view takes it from its scale), 'fine', 'medium' or 'coarse'
 *  (the saved solids and the plan symbols of every family leave out what is finer). On the project: CadCraft_FamilyDetail Level. */
export const DETAIL_PSET = 'CadCraft_FamilyDetail';
export const DETAIL_CHOICES = ['auto', ...DETAIL_LEVELS];
export function familyDetail(w) {
  if (w._famDetail !== undefined) return w._famDetail;
  let level = 'auto';
  try { const id = ids(w.api, w.mid, 'IFCPROJECT')[0], ps = id ? w.readPset(id, DETAIL_PSET) : null; if (ps && DETAIL_CHOICES.includes(String(ps.Level))) level = String(ps.Level); } catch (e) { /* auto */ }
  return (w._famDetail = level);
}
/** The detail a sheet's view shows a symbol at: from its scale (1:n) when the project says 'auto', else the project's own level. */
export function detailForScale(setting, n) {
  if (setting !== 'auto') return setting;
  return !(n > 0) ? 'fine' : n >= 200 ? 'coarse' : n >= 75 ? 'medium' : 'fine';
}
/** A project material by id: { name, color '#rrggbb', rgb [0–1] } or null (not in the library: the solid's own style is used). */
export function projectMaterial(w, id) {
  if (!w._famMats) {
    w._famMats = new Map();
    try { for (const m of readMaterials(w)) if (/^#[0-9a-f]{6}$/i.test(m.color || '')) w._famMats.set(m.id, { name: String(m.name || m.id), color: m.color.toLowerCase(), rgb: [1, 3, 5].map((i) => parseInt(m.color.slice(i, i + 2), 16) / 255) }); } catch (e) { /* a library that cannot be read gives no materials */ }
  }
  return w._famMats.get(id) || null;
}
/** The evaluated family's top items, each styled; the representation type that fits them. */
export function bodyItems(w, ev) {
  const items = [];
  const csg = ev.roots.some((n) => n.kind === 'bool');
  const disk = [...ev.solids.values()].some((s) => s.visible && s.op === 'sweep');
  for (const n of ev.roots) {
    let id = nodeItem(w, ev, n);
    if (n.kind === 'bool') id = w.make('IFCCSGSOLID', w.H(id));
    const st = STYLES[n.style] || STYLES.solid, mat = n.material ? projectMaterial(w, n.material) : null;
    w.styleItem(id, mat ? w.surfaceStyle('Family: ' + mat.name + ' ' + mat.color, mat.rgb, 0) : w.surfaceStyle(tr(st.name), st.rgb, st.tr));
    items.push(id);
  }
  return { items, type: csg ? 'SolidModel' : disk ? 'AdvancedSweptSolid' : 'SweptSolid' };
}

// ======================================================================================================== families in a file
/** A type's own property set (HasPropertySets) as { prop: value }, or null. */
export function typePset(w, typeId, name) {
  const tl = w.api.GetLine(w.mid, typeId, false);
  for (const h of tl?.HasPropertySets || []) {
    const ps = w.api.GetLine(w.mid, h.value, false);
    if (val(ps?.Name) !== name) continue;
    const out = {};
    for (const p of ps.HasProperties || []) { const pl = w.api.GetLine(w.mid, p.value, false); if (pl?.Name) out[val(pl.Name)] = val(pl.NominalValue); }
    return out;
  }
  return null;
}
/** Replace (or add) a type's own property set. */
export function setTypePset(w, typeId, name, rows) {
  const tl = w.touch(typeId);
  const keep = [];
  for (const h of tl.HasPropertySets || []) {
    const ps = w.api.GetLine(w.mid, h.value, false);
    if (val(ps?.Name) === name) w.dropTree(h.value); else keep.push(h);
  }
  keep.push(w.H(w.pset(name, rows)));
  tl.HasPropertySets = keep;
  w.write(tl);
}
function parseJson(s) { try { return JSON.parse(String(s ?? '')); } catch (e) { return null; } }

/** Every family and size in the file (one pass; cached on the writer until something here changes it). */
export function familyIndex(w) {
  if (w._famIndex) return w._famIndex;
  const groups = new Map(), sizes = new Map(), occ = new Map(), assign = new Map();
  let gl = [];
  try { gl = ids(w.api, w.mid, 'IFCGROUP'); } catch (e) { gl = []; }
  for (const id of gl) {
    const ps = w.readPset(id, FAMILY_PSET);
    if (!ps || !ps.Key) continue;
    const r = readFamily(parseJson(ps.Recipe));
    const revision = Number.isInteger(Number(ps.Version)) && Number(ps.Version) >= 1 ? Number(ps.Version) : 1;   // CadCraft_Family Version: 1 + the saves since
    if (r.ok) r.family.revision = revision;
    groups.set(String(ps.Key), { id, fam: r.ok ? r.family : null, errors: r.errors, revision, name: val(w.api.GetLine(w.mid, id, false).Name) || String(ps.Key) });
  }
  for (const rid of ids(w.api, w.mid, 'IFCRELASSIGNSTOGROUP')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (r?.RelatingGroup) assign.set(r.RelatingGroup.value, rid);
  }
  for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE')) {
    const r = w.api.GetLine(w.mid, rid, false), tid = r?.RelatingType?.value;
    if (!tid) continue;
    if (!occ.has(tid)) occ.set(tid, []);
    for (const h of r.RelatedObjects || []) occ.get(tid).push(h.value);
  }
  for (const [key, g] of groups) {
    const rid = assign.get(g.id);
    g.assign = rid || null;
    const r = rid ? w.api.GetLine(w.mid, rid, false) : null;
    for (const h of r?.RelatedObjects || []) {
      const ps = typePset(w, h.value, SIZE_PSET);
      if (!ps || String(ps.Family) !== key) continue;
      sizes.set(h.value, { family: key, name: String(ps.Size || ''), values: parseJson(ps.Values) || {} });
    }
  }
  return (w._famIndex = { groups, sizes, occ });
}
const dropIndex = (w) => { w._famIndex = null; };

/** The recipe for a family key: the one stored in the file, else a starter's; null when neither. */
export function familyFor(w, key) {
  if (!key) return null;
  const g = familyIndex(w).groups.get(key);
  if (g?.fam) return g.fam;
  return starterRecipe(key);
}
/** The group of a family, made with its recipe when the file has none; the recipe updated when it has one. */
export function storeFamily(w, fam, { update = false } = {}) {
  const idx = familyIndex(w);
  const g = idx.groups.get(fam.key);
  const next = g && update ? (g.revision || 1) + 1 : 1;
  const rows = [['Key', 'IFCIDENTIFIER', fam.key], ['Category', 'IFCLABEL', fam.kind], ['Version', 'IFCINTEGER', next], ['Recipe', 'IFCTEXT', JSON.stringify(stripFile(fam))]];
  if (g) {
    if (update) {
      g.revision = next; fam.revision = next;
      w.upsertPset(g.id, FAMILY_PSET, rows);
      const l = w.touch(g.id); l.Name = w.L(fam.name); w.write(l);
      g.fam = fam; g.name = fam.name;
    }
    return g.id;
  }
  const id = w.make('IFCGROUP', w.guid(), w.ownerHistory(), w.L(fam.name), null, w.L(FAMILY_OBJECT_TYPE));
  w.upsertPset(id, FAMILY_PSET, rows);
  fam.revision = 1;
  idx.groups.set(fam.key, { id, fam, errors: [], revision: 1, name: fam.name, assign: null });
  return id;
}
/** The recipe as kept in the file: sizes live as types, so they are left out. */
function stripFile(fam) { const { sizes, revision, ...rest } = fam; void sizes; void revision; return rest; }

/** The type for a size of a family: found by its values, else made (with its maps) and assigned to the family's group. */
export function sizeTypeFor(w, fam, values, { name = null, op = null } = {}) {
  const idx = familyIndex(w), key = sizeKey(fam, values);
  for (const [tid, s] of idx.sizes) if (s.family === fam.key && sizeKey(fam, s.values) === key && w.api.GetLine(w.mid, tid, false)) return tid;
  const gid = storeFamily(w, fam);
  const sv = sizeValues(fam, values), sname = name || defaultSizeName(fam, sv);
  const tid = makeType(w, fam, fam.name + ' ' + sname, op);
  setTypePset(w, tid, SIZE_PSET, sizeRows(w, fam, sname, sv));
  writeSizeMaps(w, tid, fam, sv);
  // the group's assignment: one relation per family, extended
  const g = idx.groups.get(fam.key);
  if (g.assign && w.api.GetLine(w.mid, g.assign, false)) {
    const l = w.touch(g.assign); l.RelatedObjects = [...(l.RelatedObjects || []), w.H(tid)]; w.write(l);
  } else g.assign = w.make('IFCRELASSIGNSTOGROUP', w.guid(), w.ownerHistory(), null, null, [w.H(tid)], null, w.H(gid));
  idx.sizes.set(tid, { family: fam.key, name: sname, values: sv });
  return tid;
}
/** A size type's CadCraft_FamilySize rows (values in mm, as the recipe's; the nominal wall in the file's units). */
export function sizeRows(w, fam, name, values) {
  return [['Family', 'IFCIDENTIFIER', fam.key], ['Size', 'IFCLABEL', name], ['Values', 'IFCTEXT', JSON.stringify(sizeValues(fam, values))],
    ...(fam.host === 'wall' ? [['NominalWallThickness', 'IFCPOSITIVELENGTHMEASURE', round(w.u(NOMINAL_WALL))]] : [])];
}

/** A type line of the family's class (IFC4 types; IFC2X3 door / window styles), no maps yet. */
function makeType(w, fam, name, op) {
  const base = openingType(fam.base);
  const head = [w.guid(), w.ownerHistory(), w.L(name), null, null, null, null, null];
  const cls = fam.ifc.class, pre = fam.ifc.predefined || 'NOTDEFINED';
  if (cls === 'IfcDoor') {
    const oper = op || base?.op?.[0] || 'NOTDEFINED';
    return w.v4 ? w.make('IFCDOORTYPE', ...head, w.L(fam.name), 'DOOR', oper, false, null) : w.make('IFCDOORSTYLE', ...head, oper, 'NOTDEFINED', false, false);
  }
  if (cls === 'IfcWindow') {
    const part = base?.part || 'NOTDEFINED';
    return w.v4 ? w.make('IFCWINDOWTYPE', ...head, w.L(fam.name), 'WINDOW', part, false, null) : w.make('IFCWINDOWSTYLE', ...head, 'NOTDEFINED', part, false, false);
  }
  if (cls === 'IfcFurniture') return w.v4 ? w.make('IFCFURNITURETYPE', ...head, w.L(fam.name), 'NOTDEFINED', pre) : w.make('IFCFURNITURETYPE', ...head, w.L(fam.name), 'NOTDEFINED');
  if (cls === 'IfcFurnishingElement') return w.make('IFCFURNISHINGELEMENTTYPE', ...head, w.L(fam.name));
  if (cls === 'IfcSanitaryTerminal') return w.make('IFCSANITARYTERMINALTYPE', ...head, w.L(fam.name), fam.ifc.predefined || fixtureOf(fam.fixture)?.ifc || 'NOTDEFINED');
  if (cls === 'IfcLightFixture') return w.make('IFCLIGHTFIXTURETYPE', ...head, w.L(fam.name), 'NOTDEFINED');
  return w.make('IFCBUILDINGELEMENTPROXYTYPE', ...head, w.L(fam.name), 'NOTDEFINED');
}

/** The size's geometry as the type's maps: Body (the solids) and, for families placed on a floor, a FootPrint outline. The
 *  map lines stay (elements' IfcMappedItems point at them); their representations are made again. */
/** What evaluating a family in a file needs: the detail level and the families it may hold (found in the file, else a starter). */
export const evalCtx = (w, extra = {}) => ({ detail: familyDetail(w), resolve: (k) => familyFor(w, k), ...extra });
export function writeSizeMaps(w, typeId, fam, values) {
  const ev = evaluateFamily(fam, values, evalCtx(w));
  if (!ev.ok) throw Object.assign(new Error(ev.error.key), { key: ev.error.key, fill: ev.error.fill });
  const ctx = w.contexts();
  const body = bodyItems(w, ev);
  const reps = [['body', 'Body', body.type, body.items]];
  if (fam.host !== 'wall') {
    const fp = footprint(w, ev, fam);
    if (fp) reps.push(['foot', 'FootPrint', 'GeometricCurveSet', [fp]]);
  }
  const tl = w.touch(typeId);
  const old = (tl.RepresentationMaps || []).map((h) => ({ id: h.value, line: w.api.GetLine(w.mid, h.value, false) })).filter((x) => x.line);
  const maps = [];
  for (const [ck, ident, type, items] of reps) {
    const rep = w.make('IFCSHAPEREPRESENTATION', w.H(ck === 'body' ? ctx.body : ctx.foot), w.L(ident), w.L(type), items.map((i) => w.H(i)));
    const was = old.find((x) => val(w.api.GetLine(w.mid, x.line.MappedRepresentation.value, false)?.RepresentationIdentifier) === ident);
    if (was) {
      const ml = w.touch(was.id), prev = ml.MappedRepresentation.value;
      ml.MappedRepresentation = w.H(rep); w.write(ml);
      w.dropTree(prev);
      maps.push(w.H(was.id));
    } else maps.push(w.H(w.make('IFCREPRESENTATIONMAP', w.H(w.origin()), w.H(rep))));
  }
  // maps no longer made (a footprint that went): their elements' mapped items go first
  for (const x of old) if (!maps.some((h) => h.value === x.id)) dropMap(w, x.id);
  tl.RepresentationMaps = maps;
  w.write(tl);
}
/** A map and the mapped items (and their representations) that point at it. */
function dropMap(w, mapId) {
  for (const mi of ids(w.api, w.mid, 'IFCMAPPEDITEM')) {
    const l = w.api.GetLine(w.mid, mi, false);
    if (l?.MappingSource?.value !== mapId) continue;
    for (const rid of ids(w.api, w.mid, 'IFCSHAPEREPRESENTATION')) {
      const r = w.api.GetLine(w.mid, rid, false);
      if (!(r?.Items || []).some((h) => h.value === mi)) continue;
      for (const pid of ids(w.api, w.mid, 'IFCPRODUCTDEFINITIONSHAPE')) {
        const p = w.api.GetLine(w.mid, pid, false);
        if (!(p?.Representations || []).some((h) => h.value === rid)) continue;
        const pl = w.touch(pid); pl.Representations = pl.Representations.filter((h) => h.value !== rid); w.write(pl);
      }
      w.touch(rid); deleteLine(w.api, w.mid, rid);
    }
    w.touch(mi); deleteLine(w.api, w.mid, mi);
  }
  const rep = w.api.GetLine(w.mid, mapId, false)?.MappedRepresentation?.value;
  w.touch(mapId); deleteLine(w.api, w.mid, mapId);
  if (rep) w.dropTree(rep);
}
/** The plan outline of an unhosted family: each visible solid's outline seen from above, as 2D polylines. */
/** An element's own shape (a placed one that sets instance parameters): the family's solids at its values, and its footprint. */
export function familyShape(w, fam, ev) {
  const body = bodyItems(w, ev), reps = [w.rep('body', 'Body', body.type, body.items)];
  if (fam.host !== 'wall') { const fp = footprint(w, ev, fam); if (fp) reps.push(w.rep('foot', 'FootPrint', 'GeometricCurveSet', [fp])); }
  return reps;
}
function footprint(w, ev, fam) {
  if (fam?.symbol?.parts.length && ev.symbol?.length) {   // the family's own symbol is what other programs see in plan too
    const curves = symbolCurves(ev.symbol);
    if (curves.length) return w.make('IFCGEOMETRICCURVESET', curves.map((c) => w.H(w.polyline2(c.pts, c.closed))));
  }
  const loops = [];
  for (const s of ev.solids.values()) {
    if (!s.visible) continue;
    if (s.op === 'box') { const [x0, y0, , x1, y1] = s.box; loops.push([[x0, y0], [x1, y0], [x1, y1], [x0, y1]]); }
    else if (s.op === 'extrude' && s.plane === 'xy') {
      const flat = [];
      s.profile.forEach((a, i) => { flat.push([a[0], a[1]]); if (a[2]) flat.push(...arcPoints(a, s.profile[(i + 1) % s.profile.length], a[2])); });
      loops.push(flat);
    } else {
      const b = planBounds(s);
      if (b) loops.push([[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]]);
    }
  }
  if (!loops.length) return null;
  return w.make('IFCGEOMETRICCURVESET', loops.map((l) => w.H(w.polyline2(l, true))));
}
/** A solid's plan bounds [x0, y0, x1, y1] (conservative for revolves: the profile swept a whole turn). */
export function planBounds(s) {
  if (s.op === 'box') return [s.box[0], s.box[1], s.box[3], s.box[4]];
  if (s.op === 'sweep') { const xs = s.path.map((p) => p[0]), ys = s.path.map((p) => p[1]); return [Math.min(...xs) - s.radius, Math.min(...ys) - s.radius, Math.max(...xs) + s.radius, Math.max(...ys) + s.radius]; }
  const P = s.profile.map((p) => planeTo3(s.plane, s.at, p[0], p[1]));
  if (s.op === 'extrude') {
    const d = s.plane === 'xy' ? [0, 0, s.depth] : s.plane === 'xz' ? [0, s.depth, 0] : [s.depth, 0, 0];
    const all = [...P, ...P.map((p) => [p[0] + d[0], p[1] + d[1], p[2] + d[2]])];
    return [Math.min(...all.map((p) => p[0])), Math.min(...all.map((p) => p[1])), Math.max(...all.map((p) => p[0])), Math.max(...all.map((p) => p[1]))];
  }
  const A = planeTo3(s.plane, s.at, s.axis[0], s.axis[1]), B = planeTo3(s.plane, s.at, s.axis[2], s.axis[3]);
  const L = Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]) || 1, d = [(B[0] - A[0]) / L, (B[1] - A[1]) / L, (B[2] - A[2]) / L];
  let R = 0;
  for (const p of P) { const v = [p[0] - A[0], p[1] - A[1], p[2] - A[2]], k = v[0] * d[0] + v[1] * d[1] + v[2] * d[2]; R = Math.max(R, Math.hypot(v[0] - k * d[0], v[1] - k * d[1], v[2] - k * d[2])); }
  const xs = P.map((p) => p[0]), ys = P.map((p) => p[1]);
  return [Math.min(A[0] - R, ...xs), Math.min(A[1] - R, ...ys), Math.max(A[0] + R, ...xs), Math.max(A[1] + R, ...ys)];
}
/** A profile point (u, v) on a plane at `at` → x, y, z. */
export function planeTo3(plane, at, u, v) {
  if (plane === 'xz') return [u, at, v];
  if (plane === 'yz') return [at, u, v];
  return [u, v, at];
}
export { dropIndex as forgetFamilyIndex };
