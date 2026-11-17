/* SPDX-License-Identifier: Apache-2.0 */
/**
 * type-pack.js — a project's types as one open file, and back (0.10 BK.97, session bk-content-10). No DOM: bin/test-bimcraft.mjs
 * --typepack runs it in Node. The format is written down in docs/apps/bimcraft-type-packs.md; the IFC form is type-pack-ifc.js.
 *
 * A type pack is plain JSON text (UTF-8), nothing binary, nothing encoded, nothing that only one firm's or one country's set-up can read:
 *   { format: 'cadcraft-type-pack', version: 1, name, made (ISO date), unit: 'mm',
 *     materials: [{ id, name, legacyName, category, defaultThickness, color, fill, fillColor, notes }],     the project materials the types use
 *     types: [{ kind: 'wall', ifc: { class: 'IfcWallType', predefined: 'STANDARD' }, recipe: { version: 1, key, name, exterior, layers: [{ mat,
 *               t, function, core, kind, materialId, ventilation?, priority? }], lod?, takeoff? … }, thickness (mm, the layers' sum),
 *               classification?: { uniclass?: { code, title }, omniclass?: …, uniformat?: … }, guessed?: true (read from another program's IFC) }],
 *     families?: [family files (format cadcraft-family, as a .ccfamily.json)] }
 * `recipe` is the wall type exactly as the wall assembly editor keeps it (wall-assemblies.js validateAssembly), so every tag a type
 * has there (layer priority, LOD, takeoff data and whatever is added later) travels with it.
 *
 *   wallTypeChoices(w) → [{ key, name, custom, thickness }]                    what can go into a pack: the project's own wall types, then the starters
 *   makeTypePack(w, { keys, families, name, now }) → pack                     keys: wall type keys (default: every custom type); a starter goes as a copy `wall-<its key>`;
 *                                                                              families: family keys | 'all' | none
 *   readTypePack(textOrObject) → { ok, pack, errors: [text] }                 the format check: every key known, every value checked, every layer's material in the pack
 *   importTypePack(pack, { conflict: 'skip' | 'copy' | 'replace' }) → op      one undo step. Result: { summary: { added, copied, replaced, skipped, inUse, materials: { added, kept, renamed }, families } }
 *       a type whose key the project already has: skip keeps the project's, copy adds the pack's under a new key and name, replace
 *       overwrites it when no wall uses it (one in use is kept and listed under inUse: change it in the wall type editor)
 *   compareTypePacks(a, b) → [text]                                            what differs (nothing = the same types, materials, tags and codes)
 */
import { op } from './model-ops.js';
import { validateAssembly, readAssemblies, writeAssembly, ASSEMBLY_KINDS, assemblyKind } from './wall-assemblies.js';
import { elementType, typeIfc, ELEMENT_KINDS } from './element-types.js';   // 0.10 BK.24 (bk-r3-types-10): floor, roof and ceiling types travel in a pack too
import { readDerived } from './model-slabs.js';
import { readDrawnFloors } from './model-floors.js';
import { readMaterials, validateMaterial, writeMaterials, normalizeLayer } from './project-materials.js';
import { WALL_TYPES, wallType, typeName, typeThickness, readWalls } from './model-walls.js';
import { classificationIndex, codesOf, setCode, readProjectClassification } from './classify-model.js';
import { SYSTEM_IDS, cleanCode, cleanTitle } from './classify/classify.js';
import { familyFile, importFamilies, FAMILY_LIBRARY_MAX } from './family-ops.js';
import { familyIndex, readFamily } from './family-model.js';
import { ids, val } from './ifc-util.js';
import { t as tr, has, fill as fillText } from './i18n.js';

// ---- words: the format check's sentences (docs/LANG.md; the same keys are in lang/en.json)
/* i18n-ignore-start: the English source of the keys below */
export const MESSAGES = {
  'typepack.v.big': 'larger than 4 MB',
  'typepack.v.nottext': 'not text (a type pack is plain JSON text)',
  'typepack.v.notjson': 'not JSON',
  'typepack.v.notobject': 'not a JSON object',
  'typepack.v.format': "must be \"{value}\"",
  'typepack.v.version': 'must be 1 (this file is from a newer or another version)',
  'typepack.v.unknown': 'is not part of the format',
  'typepack.v.unit': "must be \"mm\"",
  'typepack.v.date': 'must be a date like 2026-11-11',
  'typepack.v.list': 'must be a list',
  'typepack.v.many': 'more than {n}',
  'typepack.v.idtwice': 'the id {id} is there twice',
  'typepack.v.object': 'must be an object',
  'typepack.v.kind': "must be \"wall\", \"floor\", \"roof\" or \"ceiling\" (families go in \"families\")",
  'typepack.v.ifc': 'must be {cls}: every type names its IFC class',
  'typepack.v.kindkey': "the recipe's key must start with \"{kind}-\"",
  'typepack.v.keytwice': 'the key {key} is there twice',
  'typepack.v.nametwice': "the name \"{name}\" is there twice",
  'typepack.v.nomaterial': "its material {id} is not in the pack's materials",
  'typepack.v.thickness': 'must be the sum of the layers ({n} mm)',
  'typepack.v.oneof': 'must be one of {list}',
  'typepack.v.required': 'is required',
  'typepack.v.family': 'is not a family the app can read ({why})',
  'typepack.v.empty': 'the pack holds no type',
};
/* i18n-ignore-end */
const msg = (key, fills = {}) => { const k = 'typepack.v.' + key; try { if (has(k)) return tr(k, fills); } catch (e) { /* no page: the English below */ } return fillText(MESSAGES[k] ?? k, fills); };

export const TYPE_PACK_FORMAT = 'cadcraft-type-pack';
export const TYPE_PACK_LIMITS = Object.freeze({ bytes: 4 * 1024 * 1024, types: 500, materials: 2000 });
const TOP = ['format', 'version', 'name', 'made', 'unit', 'materials', 'types', 'families'];
const TYPE_KEYS = ['kind', 'ifc', 'recipe', 'thickness', 'classification', 'guessed'];
const text = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const r3 = (v) => Math.round(v * 1000) / 1000;

/** The wall type (custom or starter) as a recipe a pack carries: a starter becomes a copy under `wall-<key>`. */
function packRecipe(w, key, source) {
  const kind = assemblyKind(key);
  if (ELEMENT_KINDS.includes(kind)) {   // BK.24: a floor, roof or ceiling type (a starter goes in as it is: its key is already a type key)
    const ty = elementType(kind, key, w);
    if (!ty) return null;
    const { starter, ...recipe } = ty;
    return validateAssembly(recipe);
  }
  const type = wallType(key, source);
  if (!type) return null;
  if (type.custom) return validateAssembly(type);
  const safe = String(key).replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 70);
  return validateAssembly({ version: 1, key: 'wall-' + safe, name: typeName(type), exterior: type.exterior === true, layers: type.layers.map((l) => { const n = normalizeLayer(l); return { ...n, mat: n.mat, t: n.t, function: n.function || 'finish', core: n.core === true }; }) });
}
export function wallTypeChoices(w) {
  const custom = readAssemblies(w);
  return [...custom.map((x) => ({ key: x.key, name: typeName(x), custom: true, thickness: typeThickness(x) })),
    ...WALL_TYPES.map((x) => wallType(x.key)).map((x) => ({ key: x.key, name: typeName(x), custom: false, thickness: typeThickness(x) }))];
}
/** The IfcWallType line of a custom type, by its key (null when the type was never used and never saved: starters). */
function typeLineId(w, key) {
  const K = ASSEMBLY_KINDS[assemblyKind(key) || 'wall'];
  let list = [];
  try { list = ids(w.api, w.mid, K.cls); } catch (e) { list = []; }
  for (const id of list) {
    const tl = w.api.GetLine(w.mid, id, false);
    for (const h of tl.HasPropertySets || []) {
      const ps = w.api.GetLine(w.mid, h.value, false);
      if (val(ps?.Name) !== K.pset) continue;
      for (const p of ps.HasProperties || []) { const pl = w.api.GetLine(w.mid, p.value, false); if (val(pl?.Name) === 'Key' && val(pl.NominalValue) === key) return id; }
    }
  }
  return null;
}

export function makeTypePack(w, { keys = null, families = null, name = '', now = new Date() } = {}) {
  const custom = readAssemblies(w);
  const want = keys ? [...new Set(keys)] : custom.map((x) => x.key);
  const ix = classificationIndex(w);
  const types = [], layers = [];
  for (const key of want) {
    const recipe = packRecipe(w, key, custom);
    if (!recipe) throw Object.assign(new Error('typepack.err.notype'), { key: 'typepack.err.notype', fill: { key } });
    const tid = typeLineId(w, key);
    const own = tid ? codesOf(w, tid, ix).own : {};
    const classification = {};
    for (const s of SYSTEM_IDS) if (own[s]?.code) classification[s] = { code: own[s].code, title: own[s].title || '' };
    const kind = assemblyKind(recipe.key);
    types.push({ kind, ifc: typeIfc(kind), recipe, thickness: r3(typeThickness(recipe)), ...(Object.keys(classification).length ? { classification } : {}) });
    layers.push(...recipe.layers);
  }
  const used = new Set(layers.filter((l) => l.kind === 'material').map((l) => l.materialId));
  const materials = readMaterials(w, layers).filter((m) => used.has(m.id)).map(validateMaterial);
  const pack = { format: TYPE_PACK_FORMAT, version: 1, name: text(name, 120), made: new Date(now).toISOString().slice(0, 10), unit: 'mm', materials, types };
  if (families) {
    const idx = familyIndex(w), list = [];
    const keysF = families === 'all' ? [...idx.groups].filter(([, g]) => g.fam && !g.fam.starter).map(([k]) => k) : families;
    for (const k of keysF) { const f = familyFile(w, k); if (!f) throw Object.assign(new Error('typepack.err.nofamily'), { key: 'typepack.err.nofamily', fill: { key: k } }); list.push(f); }
    if (list.length) pack.families = list;
  }
  return pack;
}

/** The format check. Every refusal says where and why in plain words. */
export function readTypePack(input) {
  const errors = [];
  const bad = (where, why) => { if (errors.length < 40) errors.push(where + ': ' + why); };
  let j = input;
  if (typeof input === 'string') {
    if (input.length > TYPE_PACK_LIMITS.bytes) return { ok: false, errors: ['file: ' + msg('big')] };
    if (/[\u0000-\u0008\u000e-\u001f]/.test(input.slice(0, 4096))) return { ok: false, errors: ['file: ' + msg('nottext')] };
    try { j = JSON.parse(input.replace(/^﻿/, '')); } catch (e) { return { ok: false, errors: ['file: ' + msg('notjson')] }; }
  }
  if (!j || typeof j !== 'object' || Array.isArray(j)) return { ok: false, errors: ['file: ' + msg('notobject')] };
  if (j.format !== TYPE_PACK_FORMAT) return { ok: false, errors: ['format: ' + msg('format', { value: TYPE_PACK_FORMAT })] };
  if (j.version !== 1) return { ok: false, errors: ['version: ' + msg('version')] };
  for (const k of Object.keys(j)) if (!TOP.includes(k)) bad(k, msg('unknown'));
  if ('unit' in j && j.unit !== 'mm') bad('unit', msg('unit'));
  if ('made' in j && !/^\d{4}-\d\d-\d\d$/.test(String(j.made))) bad('made', msg('date'));
  const materials = [], matIds = new Set();
  if (!Array.isArray(j.materials)) bad('materials', msg('list'));
  else if (j.materials.length > TYPE_PACK_LIMITS.materials) bad('materials', msg('many', { n: TYPE_PACK_LIMITS.materials }));
  else j.materials.forEach((m, i) => {
    try {
      const allowed = ['id', 'name', 'legacyName', 'category', 'defaultThickness', 'color', 'fill', 'fillColor', 'notes'];
      for (const k of Object.keys(m || {})) if (!allowed.includes(k)) throw new Error(k + ' ' + msg('unknown'));
      const v = validateMaterial(m);
      if (matIds.has(v.id)) throw new Error(msg('idtwice', { id: v.id }));
      matIds.add(v.id); materials.push(v);
    } catch (e) { bad('materials[' + i + ']', e.message); }
  });
  const types = [], keys = new Set(), names = new Set();
  if (!Array.isArray(j.types)) bad('types', msg('list'));
  else if (j.types.length > TYPE_PACK_LIMITS.types) bad('types', msg('many', { n: TYPE_PACK_LIMITS.types }));
  else j.types.forEach((t, i) => {
    const p = 'types[' + i + ']';
    if (!t || typeof t !== 'object' || Array.isArray(t)) return bad(p, msg('object'));
    for (const k of Object.keys(t)) if (!TYPE_KEYS.includes(k)) bad(p + '.' + k, msg('unknown'));
    if (!Object.hasOwn(ASSEMBLY_KINDS, t.kind)) return bad(p + '.kind', msg('kind'));
    const ifc = typeIfc(t.kind);
    if (!t.ifc || t.ifc.class !== ifc.class) bad(p + '.ifc.class', msg('ifc', { cls: ifc.class }));
    let recipe = null;
    try { recipe = validateAssembly(t.recipe); } catch (e) { return bad(p + '.recipe', e.message); }
    if (assemblyKind(recipe.key) !== t.kind) return bad(p + '.recipe.key', msg('kindkey', { kind: t.kind }));
    if (keys.has(recipe.key)) return bad(p + '.recipe.key', msg('keytwice', { key: recipe.key }));
    if (names.has(recipe.name.toLowerCase())) return bad(p + '.recipe.name', msg('nametwice', { name: recipe.name }));
    keys.add(recipe.key); names.add(recipe.name.toLowerCase());
    for (const [li, l] of recipe.layers.entries()) if (l.kind === 'material' && !matIds.has(l.materialId)) bad(p + '.recipe.layers[' + li + ']', msg('nomaterial', { id: l.materialId }));
    const th = r3(typeThickness(recipe));
    if ('thickness' in t && !(Number.isFinite(t.thickness) && Math.abs(t.thickness - th) < 0.01)) bad(p + '.thickness', msg('thickness', { n: th }));
    const classification = {};
    if ('classification' in t) {
      if (!t.classification || typeof t.classification !== 'object' || Array.isArray(t.classification)) bad(p + '.classification', msg('object'));
      else for (const [s, c] of Object.entries(t.classification)) {
        if (!SYSTEM_IDS.includes(s)) { bad(p + '.classification.' + s, msg('oneof', { list: SYSTEM_IDS.join(', ') })); continue; }
        const code = cleanCode(c?.code);
        if (!code) { bad(p + '.classification.' + s + '.code', msg('required')); continue; }
        classification[s] = { code, title: cleanTitle(c?.title) };
      }
    }
    types.push({ kind: t.kind, ifc, recipe, thickness: th, ...(Object.keys(classification).length ? { classification } : {}), ...(t.guessed === true ? { guessed: true } : {}) });
  });
  const families = [];
  if ('families' in j) {
    if (!Array.isArray(j.families)) bad('families', msg('list'));
    else if (j.families.length > FAMILY_LIBRARY_MAX) bad('families', msg('many', { n: FAMILY_LIBRARY_MAX }));
    else j.families.forEach((f, i) => {
      const r = f && typeof f === 'object' && !Array.isArray(f) ? readFamily(f) : { ok: false, errors: [{ key: 'fam.err.notfamily' }] };
      if (!r.ok) bad('families[' + i + ']', msg('family', { why: r.errors?.[0]?.key || '' })); else families.push(f);
    });
  }
  if (!types.length && !families.length && !errors.length) bad('types', msg('empty'));
  if (errors.length) return { ok: false, errors };
  const pack = { format: TYPE_PACK_FORMAT, version: 1, name: text(j.name, 120), made: 'made' in j ? String(j.made) : '', unit: 'mm', materials, types, ...(families.length ? { families } : {}) };
  return { ok: true, pack, errors: [] };
}

const mergeJ = (a, b) => { if (!a) return b; if (!b) return a; const before = new Map(a.before); for (const [id, line] of b.before) if (!before.has(id) && !a.created.includes(id)) before.set(id, line); return { created: [...a.created, ...b.created], before, retyped: [...(a.retyped || []), ...(b.retyped || [])] }; };

export function importTypePack(input, { conflict = 'skip' } = {}) {
  const r = readTypePack(input);
  if (!r.ok) throw Object.assign(new Error('typepack.err.format'), { key: 'typepack.err.format', fill: { why: r.errors[0] }, errors: r.errors });
  const pack = r.pack, fixed = [];
  const main = op((w) => {
    const summary = { added: [], copied: [], replaced: [], skipped: [], inUse: [], kinds: {}, materials: { added: [], kept: [], renamed: [] }, families: [] };
    // materials: the project's own stay as they are; a new one whose name is taken gets " (pack)" after its name
    const mats = readMaterials(w);
    for (const m of pack.materials) {
      if (mats.some((x) => x.id === m.id)) { summary.materials.kept.push(m.name); continue; }
      let name = m.name;
      if (mats.some((x) => x.name.toLowerCase() === name.toLowerCase())) { name = (m.name.slice(0, 92) + ' (pack)'); let n = 2; while (mats.some((x) => x.name.toLowerCase() === name.toLowerCase())) name = m.name.slice(0, 88) + ' (pack ' + (n++) + ')'; summary.materials.renamed.push(name); }
      else summary.materials.added.push(name);
      mats.push(validateMaterial({ ...m, name }));
    }
    writeMaterials(w, mats);
    const walls = readWalls(w);
    let have = readAssemblies(w), ix = classificationIndex(w);
    // BK.24: each kind of type has its own list in the project; a floor, roof or ceiling type is in use when an element carries its key
    const haveOf = { wall: () => have, floor: () => readAssemblies(w, 'floor'), roof: () => readAssemblies(w, 'roof'), ceiling: () => readAssemblies(w, 'ceiling') };
    let D = null;
    const usedKeys = () => { if (!D) { const d = readDerived(w); D = new Set([...d.floors, ...d.ceilings, ...d.roofs, ...readDrawnFloors(w)].map((x) => x.typeKey).filter(Boolean)); } return D; };
    const inUse = (kind, key) => (kind === 'wall' ? walls.some((x) => x.typeKey === key) : usedKeys().has(key));
    const edition = (s) => readProjectClassification(w).editions[s] || '';
    const freeName = (name) => { let out = name, n = 2; while (have.some((x) => x.name.toLowerCase() === out.toLowerCase())) out = name.slice(0, 94) + ' (' + (n++) + ')'; return out; };
    const freeKey = (key) => { let out = key, n = 2; while (have.some((x) => x.key === out) || WALL_TYPES.some((x) => x.key === out)) out = key.slice(0, 74) + '-' + (n++); return out; };
    pack.types.forEach((t, i) => {
      let recipe = structuredClone(t.recipe);
      if (t.kind !== 'wall') have = haveOf[t.kind]();
      const mine = have.find((x) => x.key === recipe.key);
      let how = 'added';
      if (mine) {
        if (conflict === 'skip') { summary.skipped.push(recipe.name); return; }
        if (conflict === 'replace' && inUse(t.kind, recipe.key)) { summary.inUse.push(recipe.name); return; }
        if (conflict === 'replace') how = 'replaced';
        else { recipe.key = freeKey(recipe.key); how = 'copied'; }
      }
      if (how !== 'replaced') recipe.name = freeName(recipe.name);
      else if (have.some((x) => x.key !== recipe.key && x.name.toLowerCase() === recipe.name.toLowerCase())) recipe.name = freeName(recipe.name);
      fixed[i] ||= val(w.guid());
      const out = writeAssembly(w, recipe, fixed[i]);
      summary[how].push(recipe.name);
      have = readAssemblies(w);
      summary.kinds[t.kind] = (summary.kinds[t.kind] || 0) + 1;
      for (const s of SYSTEM_IDS) { const c = t.classification?.[s]; if (setCode(w, out.id, s, c?.code || '', c?.title || '', { ix, edition: edition(s) })) ix = classificationIndex(w); }
    });
    return { id: null, ids: [], summary };
  });
  if (!pack.families?.length) return main;
  const fams = importFamilies(pack.families);
  return (ed) => {
    const a = main(ed);
    try { const b = fams(ed); a.summary.families = b.keys || []; return { ...a, journal: mergeJ(a.journal, b.journal) }; }
    catch (e) { e.partial = a; throw e; }
  };
}

/** What differs between two packs (the names of things, then every value). For tests and logs: not shown in the page. */
/* i18n-ignore-start: a report for tests and logs, never shown in the page */
export function compareTypePacks(a, b) {
  const out = [];
  const diff = (where, x, y) => { if (JSON.stringify(x) !== JSON.stringify(y)) out.push(where + ': ' + JSON.stringify(x) + ' / ' + JSON.stringify(y)); };
  const byKey = (list, f) => new Map((list || []).map((x) => [f(x), x]));
  const ta = byKey(a.types, (t) => t.recipe.key), tb = byKey(b.types, (t) => t.recipe.key);
  for (const k of ta.keys()) if (!tb.has(k)) out.push('type ' + k + ': only in the first');
  for (const k of tb.keys()) if (!ta.has(k)) out.push('type ' + k + ': only in the second');
  for (const [k, x] of ta) {
    const y = tb.get(k);
    if (!y) continue;
    diff('type ' + k + ' name', x.recipe.name, y.recipe.name);
    diff('type ' + k + ' exterior', x.recipe.exterior, y.recipe.exterior);
    diff('type ' + k + ' thickness', x.thickness, y.thickness);
    diff('type ' + k + ' layer count', x.recipe.layers.length, y.recipe.layers.length);
    x.recipe.layers.forEach((l, i) => { const m = y.recipe.layers[i] || {}; for (const f of new Set([...Object.keys(l), ...Object.keys(m)])) diff('type ' + k + ' layer ' + (i + 1) + ' ' + f, l[f], m[f]); });
    const { layers: la, key: ka, name: na, exterior: ea, ...tagsA } = x.recipe, { layers: lb, key: kb, name: nb, exterior: eb, ...tagsB } = y.recipe;
    void la; void lb; void ka; void kb; void na; void nb; void ea; void eb;
    for (const f of new Set([...Object.keys(tagsA), ...Object.keys(tagsB)])) diff('type ' + k + ' tag ' + f, tagsA[f], tagsB[f]);
    diff('type ' + k + ' classification', x.classification || {}, y.classification || {});
  }
  const ma = byKey(a.materials, (m) => m.id), mb = byKey(b.materials, (m) => m.id);
  for (const k of ma.keys()) if (!mb.has(k)) out.push('material ' + k + ': only in the first');
  for (const k of mb.keys()) if (!ma.has(k)) out.push('material ' + k + ': only in the second');
  for (const [k, x] of ma) { const y = mb.get(k); if (y) for (const f of Object.keys(x)) diff('material ' + k + ' ' + f, x[f], y[f]); }
  const fa = byKey(a.families, (f) => f.key), fb = byKey(b.families, (f) => f.key);
  for (const k of fa.keys()) if (!fb.has(k)) out.push('family ' + k + ': only in the first');
  for (const k of fb.keys()) if (!fa.has(k)) out.push('family ' + k + ': only in the second');
  for (const [k, x] of fa) { const y = fb.get(k); if (y) diff('family ' + k, x, y); }
  return out;
}
/* i18n-ignore-end */
