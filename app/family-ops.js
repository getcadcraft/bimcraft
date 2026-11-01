/* SPDX-License-Identifier: Apache-2.0 */
/**
 * family-ops.js — what the family tools do to the model (0.6 DC.114, session bim-families_PART_2): reading every family in a
 * file, and the changes, each an op for IfcEditor.modelChange (one undo step; redo runs it again; families by key, sizes by
 * their type's GlobalId, elements by GlobalId). No DOM: bin/test-bimcraft.mjs --families runs it in Node.
 *
 *   readFamilies(w) → [{ key, name, kind, host, source: 'project' | 'starter' | 'guess', fam (recipe | null), editable,
 *                        sizes: [{ typeId, guid, name, values, count, elements: [ids], legacy }], count }]
 *        project = a family stored in the file (its IfcGroup); starter = a starter door / window kind used by elements of a file
 *        made before families (one type per kind, the sizes on the elements: `legacy` sizes, no type of their own yet);
 *        guess = other programs' types grouped by a guess (the occurrences' names before the first colon, else type names
 *        that differ only in their numbers), never edited
 *   openingFamilies(w, kind) → [{ key, name, starter }]   what the Door / Window tools offer: the starter kinds, then the file's own
 *   unhostedFamilies(w) → [{ key, name, starter }]       what Place family offers
 *   readFamilyElements(w) → [{ id, guid, family, typeId, size, storey, x, y, rot }]   placed unhosted family elements
 *   ops: newSize(key, { name, values }) · renameSize(typeGuid, name) · removeSizes(typeGuids) · saveFamily(fam) ·
 *        duplicateFamily(key, { name, key }) · newFamily({ name, kind, host, base, key }) · importFamily(recipe, { key }) ·
 *        importFamilies(recipes, { keys }) ·
 *        removeFamily(key) · placeFamily({ storey, family, values, typeGuid, x, y, rot, guid }) · setFamilySize(guids, typeGuid) ·
 *        moveFamilyElement(guid, { x, y, rot }) · removeFamilyElements(guids)
 *   A family's connectors become ports of each element (IFC4: IfcDistributionPort nested on it, placed in its axes with Z the way
 *   out; IFC2X3: IfcDistributionPort + IfcRelConnectsPortToElement), each with CadCraft_Connector (Key, Domain, System, Size,
 *   Flow, and Fixture for a plumbing fixture);
 *   they are made again whenever the element is placed, resized or its family saved (and connected to the pipe or duct ends
 *   they touch, mep-model.js joinPorts), and go with the element.
 *   elementPorts(w, id) → port ids the family wrote on an element
 *   familyFile(w, key) → the recipe with its sizes (a .ccfamily.json)
 */
import { op, changeOpenings } from './model-ops.js';
import { readOpenings, regenOpenings, typeOf, DOOR_PSET, WINDOW_PSET } from './model-openings.js';
import { readWalls } from './model-walls.js';
import { DOOR_TYPES, WINDOW_TYPES, openingType } from './opening-types.js';
import { STARTER_KEYS, STARTER_FURNITURE, STARTER_FIXTURES, starterRecipe } from './family-starters.js';
import { readFamily, evaluateFamily, familyIndex, familyFor, storeFamily, sizeTypeFor, writeSizeMaps, sizeValues, sizeKey, sizeRows,
  typePset, setTypePset, SIZE_PSET, FAMILY_PSET, CONNECTOR_PSET, newFamilyKey, defaultSizeName, forgetFamilyIndex, DETAIL_PSET, DETAIL_CHOICES, evalCtx, readInstance, writeInstance, hasInstance, instanceValues, familyShape } from './family-model.js';
import { PIPE_SYSTEMS, DUCT_SYSTEMS, joinPorts } from './mep-model.js';
import { round } from './model-write.js';
import { classesFor } from './ifc-place.js';
import { ModelWriter } from './model-write.js';
import { sizesFromCsv, sizesToCsv } from './family-csv.js';
import { ids, val, deleteLine } from './ifc-util.js';
import { t as tr } from './i18n.js';

const fail = (key, fill = {}) => Object.assign(new Error(key), { key, fill });
const TYPE_CLASSES = ['IFCDOORTYPE', 'IFCDOORSTYLE', 'IFCWINDOWTYPE', 'IFCWINDOWSTYLE', 'IFCFURNITURETYPE', 'IFCFURNISHINGELEMENTTYPE', 'IFCBUILDINGELEMENTPROXYTYPE',
  'IFCSANITARYTERMINALTYPE', 'IFCLIGHTFIXTURETYPE', 'IFCELECTRICAPPLIANCETYPE', 'IFCCOLUMNTYPE', 'IFCBEAMTYPE', 'IFCMEMBERTYPE', 'IFCPLATETYPE', 'IFCWALLTYPE',
  'IFCCURTAINWALLTYPE', 'IFCRAILINGTYPE', 'IFCCOVERINGTYPE'];
const KIND_OF = { IFCDOORTYPE: 'door', IFCDOORSTYLE: 'door', IFCWINDOWTYPE: 'window', IFCWINDOWSTYLE: 'window', IFCFURNITURETYPE: 'furniture', IFCFURNISHINGELEMENTTYPE: 'furniture' };
const listOf = (w, cls) => { try { return ids(w.api, w.mid, cls); } catch (e) { return []; } };
const guidOf = (w, id) => val(w.api.GetLine(w.mid, id, false)?.GlobalId) || '';

// ======================================================================================================== reading
export function readFamilies(w) {
  const idx = familyIndex(w), out = [], byKey = new Map();
  for (const [key, g] of idx.groups) {
    const f = { key, name: g.fam?.name || g.name, kind: g.fam?.kind || 'generic', host: g.fam?.host || 'none', source: 'project', fam: g.fam, editable: !!g.fam, broken: !g.fam, sizes: [], count: 0 };
    out.push(f); byKey.set(key, f);
  }
  for (const [tid, s] of idx.sizes) {
    const f = byKey.get(s.family);
    if (!f || !w.api.GetLine(w.mid, tid, false)) continue;
    const elements = (idx.occ.get(tid) || []).filter((id) => w.api.GetLine(w.mid, id, false));
    f.sizes.push({ typeId: tid, guid: guidOf(w, tid), name: s.name, values: s.values, count: elements.length, elements, legacy: false });
  }
  // doors and windows from before families: their starter kind's family, a size per width × height in use
  let openings = [];
  try { openings = readOpenings(w); } catch (e) { openings = []; }
  for (const o of openings) {
    if (o.typeId && idx.sizes.has(o.typeId)) continue;
    const key = openingType(o.typeKey) ? o.typeKey : (o.kind === 'door' ? DOOR_TYPES[0].key : WINDOW_TYPES[0].key);
    let f = byKey.get(key);
    if (!f) { const fam = starterRecipe(key); f = { key, name: fam.name, kind: fam.kind, host: 'wall', source: 'starter', fam, editable: true, sizes: [], count: 0 }; out.push(f); byKey.set(key, f); }
    const values = sizeValues(f.fam, { Width: o.width, Height: o.height });
    const sk = sizeKey(f.fam, values);
    let z = f.sizes.find((x) => x.legacy && sizeKey(f.fam, x.values) === sk);
    if (!z) { z = { typeId: null, guid: '', name: defaultSizeName(f.fam, values), values, count: 0, elements: [], legacy: true }; f.sizes.push(z); }
    z.count++; z.elements.push(o.id);
  }
  // other programs' types
  const guesses = new Map();
  for (const cls of TYPE_CLASSES) for (const tid of listOf(w, cls)) {
    if (idx.sizes.has(tid)) continue;
    const tl = w.api.GetLine(w.mid, tid, false);
    if ((tl.HasPropertySets || []).some((h) => /^CadCraft_/.test(String(val(w.api.GetLine(w.mid, h.value, false)?.Name) || '')))) continue;   // ours (starter kinds, wall types, library items)
    const elements = (idx.occ.get(tid) || []).filter((id) => w.api.GetLine(w.mid, id, false));
    if (!elements.length) continue;
    const name = String(val(tl.Name) || '').trim() || cls;
    const g = guessFamily(w, cls, name, elements);
    if (!guesses.has(g.key)) guesses.set(g.key, { key: g.key, name: g.name, kind: KIND_OF[cls] || 'generic', host: 'none', source: 'guess', fam: null, editable: false, sizes: [], count: 0, how: g.how });
    guesses.get(g.key).sizes.push({ typeId: tid, guid: guidOf(w, tid), name, values: {}, count: elements.length, elements, legacy: false });
  }
  out.push(...[...guesses.values()].sort((a, b) => a.name.localeCompare(b.name)));
  for (const f of out) { f.sizes.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })); f.count = f.sizes.reduce((n, z) => n + z.count, 0); }
  return out;
}
/** The guess for another program's type: its occurrences' common name before the first colon ("M_Single-Flush:0915 x 2134mm:…"),
 *  else the type's own name before a colon, else its name with every number taken out. */
export function guessFamily(w, cls, typeName, elements) {
  const pre = new Set();
  for (const id of elements.slice(0, 200)) {
    const n = String(val(w.api.GetLine(w.mid, id, false)?.Name) || '');
    const i = n.indexOf(':');
    pre.add(i > 0 ? n.slice(0, i).trim() : '');
  }
  if (pre.size === 1 && [...pre][0]) return { key: 'g:' + cls + ':' + [...pre][0], name: [...pre][0], how: 'occurrence' };
  const i = typeName.indexOf(':');
  if (i > 0) return { key: 'g:' + cls + ':' + typeName.slice(0, i).trim(), name: typeName.slice(0, i).trim(), how: 'type' };
  const bare = typeName.replace(/\d+(?:[.,]\d+)*/g, '#').replace(/\s+/g, ' ').trim();
  return { key: 'g:' + cls + ':' + bare, name: bare.replace(/#/g, '…'), how: 'numbers' };
}

/** What the Door / Window tools offer: the starter kinds, then the file's own families of that kind. */
export function openingFamilies(w, kind) {
  const out = (kind === 'door' ? DOOR_TYPES : WINDOW_TYPES).map((x) => { const f = familyFor(w, x.key); return { key: x.key, name: f.name, starter: true }; });
  if (!w) return out;
  for (const [key, g] of familyIndex(w).groups) if (g.fam && g.fam.host === 'wall' && g.fam.kind === kind && !openingType(key)) out.push({ key, name: g.fam.name, starter: false });
  return out;
}
/** What Place family offers: the starter furniture and plumbing fixtures, then the file's own families placed on a floor. */
export function unhostedFamilies(w) {
  const starters = [...STARTER_FURNITURE, ...STARTER_FIXTURES];
  const out = starters.map((key) => ({ key, name: (w ? familyFor(w, key) : starterRecipe(key)).name, starter: true }));
  if (!w) return out;
  for (const [key, g] of familyIndex(w).groups) if (g.fam && g.fam.host !== 'wall' && !starters.includes(key)) out.push({ key, name: g.fam.name, starter: false });
  return out;
}
/** Placed unhosted family elements, in their storey's plan (mm, degrees). */
export function readFamilyElements(w) {
  const idx = familyIndex(w), out = [];
  const so = w.storeyOf(), stl = new Map();   // one pass over the containment relations (0.7: a scan per element was quadratic: 2,000 elements took 1.6 s)
  for (const [tid, s] of idx.sizes) {
    const g = idx.groups.get(s.family);
    if (!g?.fam || g.fam.host === 'wall') continue;
    for (const id of idx.occ.get(tid) || []) {
      const l = w.api.GetLine(w.mid, id, false);
      if (!l?.ObjectPlacement) continue;
      const storey = so.get(id) ?? null;
      if (storey && !stl.has(storey)) stl.set(storey, w.api.GetLine(w.mid, storey, false));
      const st = storey ? stl.get(storey) : null;
      const M = st?.ObjectPlacement ? w.relMatrix(st.ObjectPlacement.value, l.ObjectPlacement.value) : null;
      out.push({ id, guid: val(l.GlobalId), family: s.family, typeId: tid, size: s.name, values: s.values, instance: readInstance(w, id, g.fam), storey, x: M ? M[12] : 0, y: M ? M[13] : 0, z: M ? M[14] : 0, rot: M ? Math.atan2(M[1], M[0]) * 180 / Math.PI : 0 });
    }
  }
  return out;
}

/** A family as a file: its recipe and its sizes (names and values). */
export function familyFile(w, key) {
  const fam = familyFor(w, key);
  if (!fam) return null;
  const sizes = [];
  for (const s of familyIndex(w).sizes.values()) if (s.family === key) sizes.push({ name: s.name, values: sizeValues(fam, s.values) });
  const { starter, revision, ...rest } = fam; void starter; void revision;
  // the families it holds, with theirs inside them, deepest first: the file brings them along (importFamily adds those the file lacks)
  const uses = [], seen = new Set([key]);
  const walk = (f) => { for (const k of nestedKeys(f)) { if (seen.has(k) || STARTER_KEYS.includes(k)) continue; seen.add(k); const c = familyFor(w, k); if (c) { walk(c); const cf = familyFile(w, k); if (cf) { delete cf.uses; uses.push(cf); } } } };
  walk(fam);
  return { ...rest, sizes, ...(uses.length ? { uses } : {}) };
}

// ======================================================================================================== sizes
const sizeById = (w, guid) => {
  const tid = w.byGuidAny(guid);
  const s = tid ? familyIndex(w).sizes.get(tid) : null;
  if (!s) throw fail('fam.err.nosize');
  return { tid, s, fam: familyFor(w, s.family) };
};

export function newSize(key, { name = '', values = {} } = {}) {
  return op((w) => {
    patchWriter(w);
    const fam = familyFor(w, key);
    if (!fam) throw fail('fam.err.nofamily');
    const sv = sizeValues(fam, values), sk = sizeKey(fam, sv);
    for (const [tid, s] of familyIndex(w).sizes) if (s.family === key && sizeKey(fam, s.values) === sk && w.api.GetLine(w.mid, tid, false)) throw fail('fam.err.samesize', { name: s.name });
    const ev = evaluateFamily(fam, sv, evalCtx(w));
    if (!ev.ok) throw fail(ev.error.key, ev.error.fill);
    const tid = sizeTypeFor(w, fam, sv, { name: String(name || '').trim().slice(0, 80) || null });
    return { id: null, ids: [], typeId: tid, typeGuid: guidOf(w, tid) };
  });
}
/**
 * Sizes from a table (family-csv.js): every row a size of the family, made in one undo step; a row whose size is there already is skipped. Any row
 * that does not read or that the family cannot draw refuses the whole table (nothing is made), the error naming its line (`errors` lists them all).
 * → { added, skipped, notes }
 */
export function importSizes(key, text) {
  return op((w) => {
    patchWriter(w);
    const fam = familyFor(w, key);
    if (!fam) throw fail('fam.err.nofamily');
    const r = sizesFromCsv(fam, text, { check: (sv) => { const ev = evaluateFamily(fam, sv, evalCtx(w)); return ev.ok ? null : ev.error; } });
    if (r.errors.length) throw Object.assign(fail(r.errors[0].key, { ...r.errors[0].fill, n: r.errors.length }), { errors: r.errors, notes: r.notes });
    if (!r.sizes.length) throw fail('fam.err.csvempty');
    let added = 0, skipped = 0;
    for (const z of r.sizes) {
      const k = sizeKey(fam, z.values);
      if ([...familyIndex(w).sizes].some(([tid, s]) => s.family === key && sizeKey(fam, s.values) === k && w.api.GetLine(w.mid, tid, false))) { skipped++; continue; }
      sizeTypeFor(w, fam, z.values, { name: z.name || null });
      added++;
    }
    return { id: null, ids: [], added, skipped, notes: r.notes };
  });
}
/** A family's sizes as a table (family-csv.js): the file's sizes with their names and every input value. */
export function sizesCsv(w, key) {
  const fam = familyFor(w, key);
  if (!fam) return null;
  const sizes = [...familyIndex(w).sizes.values()].filter((s) => s.family === key).map((s) => ({ name: s.name, values: s.values }));
  return sizesToCsv(fam, sizes);
}
export function renameSize(typeGuid, name) {
  return op((w) => {
    patchWriter(w);
    const { tid, s, fam } = sizeById(w, typeGuid);
    const nm = String(name || '').replace(/\s+/g, ' ').trim().slice(0, 80);
    if (!nm) throw fail('fam.err.name');
    const l = w.touch(tid); l.Name = w.L(fam.name + ' ' + nm); w.write(l);
    setTypePset(w, tid, SIZE_PSET, sizeRows(w, fam, nm, s.values));
    forgetFamilyIndex(w);
    return { id: null, ids: [] };
  });
}
/** Remove sizes nobody uses (a used size is refused: change its elements to another size first). */
export function removeSizes(typeGuids) {
  return op((w) => {
    patchWriter(w);
    for (const g of typeGuids) {
      const { tid } = sizeById(w, g);
      if ((familyIndex(w).occ.get(tid) || []).some((id) => w.api.GetLine(w.mid, id, false))) throw fail('fam.err.inuse');
      dropType(w, tid);
    }
    forgetFamilyIndex(w);
    return { id: null, ids: [] };
  });
}
function dropType(w, tid) {
  const tl = w.api.GetLine(w.mid, tid, false);
  for (const h of tl.HasPropertySets || []) w.dropTree(h.value);
  for (const h of tl.RepresentationMaps || []) {
    const m = w.api.GetLine(w.mid, h.value, false);
    w.touch(h.value); deleteLine(w.api, w.mid, h.value);
    if (m?.MappedRepresentation) w.dropTree(m.MappedRepresentation.value);
  }
  w.dropProduct([tid]);
}

// ======================================================================================================== whole families
/** Save an edited recipe: every size drawn again, every element of the family made again (one undo step). A size the new
 *  recipe cannot draw is refused, naming it. */
export function saveFamily(recipe) {
  return op((w) => {
    patchWriter(w);
    const r = readFamily(recipe);
    if (!r.ok) throw fail(r.errors[0].key, r.errors[0].fill);
    const fam = r.family;
    delete fam.starter;
    const idx = familyIndex(w);
    const old = familyFor(w, fam.key);
    if (old && old.host !== fam.host) throw fail('fam.err.host');
    const gi = idx.groups.get(fam.key);
    if (gi && Number.isInteger(fam.revision) && fam.revision !== (gi.revision || 1)) throw fail('fam.err.changed');   // someone saved it since this editor opened it
    const sizes = [...idx.sizes].filter(([tid, s]) => s.family === fam.key && w.api.GetLine(w.mid, tid, false));
    for (const [, s] of sizes) { const ev = evaluateFamily(fam, s.values, evalCtx(w)); if (!ev.ok) throw fail('fam.err.atsize', { size: s.name, why: ev.error.key, ...ev.error.fill }); }
    storeFamily(w, fam, { update: true });
    for (const [tid, s] of sizes) {
      const sv = sizeValues(fam, s.values);
      setTypePset(w, tid, SIZE_PSET, sizeRows(w, fam, s.name, sv));
      const l = w.touch(tid); l.Name = w.L(fam.name + ' ' + s.name); w.write(l);
      writeSizeMaps(w, tid, fam, sv);
    }
    forgetFamilyIndex(w);
    const touched = regenFamily(w, fam);
    // the families that hold this one carry its solids: they are drawn again too (checked first, naming the one that cannot be)
    for (const pk of dependentsOf(w, fam.key)) {
      const pf = familyFor(w, pk), ps = [...familyIndex(w).sizes].filter(([tid, s]) => s.family === pk && w.api.GetLine(w.mid, tid, false));
      for (const [, s] of ps) { const ev = evaluateFamily(pf, s.values, evalCtx(w)); if (!ev.ok) throw fail('fam.err.atsizeof', { family: pf.name, size: s.name, why: ev.error.key, ...ev.error.fill }); }
      for (const [tid, s] of ps) writeSizeMaps(w, tid, pf, sizeValues(pf, s.values));
      forgetFamilyIndex(w);
      touched.push(...regenFamily(w, pf));
    }
    return { id: null, ids: touched };
  });
}
/** Every element of a family made again from its recipe: doors / windows through their walls, others from their type's maps. */
function regenFamily(w, fam) {
  const out = [];
  if (fam.host === 'wall') {
    const walls = readWalls(w), all = readOpenings(w, null, walls), byWall = new Map();
    for (const o of all) if (o.family === fam.key) { if (!byWall.has(o.wall)) byWall.set(o.wall, []); byWall.get(o.wall).push(o); out.push(o.id); }
    for (const [wid, list] of byWall) {
      const wall = walls.find((x) => x.id === wid);
      if (wall) regenOpenings(w, wall, list);
    }
    // the name follows the family
    for (const id of out) { const nm = w.L(fam.name); const l = w.touch(id); l.Name = nm; l.ObjectType = nm; w.write(l); }
    return out;
  }
  for (const e of readFamilyElements(w)) if (e.family === fam.key) { reshape(w, e.id, e.typeId); writePorts(w, e.id, fam, e.values); out.push(e.id); }
  return out;
}
/** An unhosted element's shape: mapped items of its type's maps (the old shape's lines go; the maps stay). */
function reshape(w, id, typeId) {
  // an element that sets instance parameters has a shape of its own (drawn at its size and its own values)
  const size = familyIndex(w).sizes.get(typeId), fam = size ? familyFor(w, size.family) : null;
  if (fam) {
    const inst = readInstance(w, id, fam);
    if (hasInstance(fam, inst)) {
      const ev = evaluateFamily(fam, { ...size.values, ...inst }, evalCtx(w));
      if (!ev.ok) throw fail(ev.error.key, ev.error.fill);
      w.setShape(id, familyShape(w, fam, ev));
      return;
    }
  }
  const shape = w.shapeFor(typeId);
  const l = w.touch(id), old = l.Representation?.value;
  l.Representation = shape ? w.H(shape) : null;
  w.write(l);
  if (old) w.dropTree(old);
}

/** The project's detail level for families (family-model.js familyDetail): every family's saved solids and plan symbols are made again at it. One undo step. */
export function setFamilyDetail(level) {
  return op((w) => {
    patchWriter(w);
    if (!DETAIL_CHOICES.includes(level)) throw fail('fam.err.detail');
    const pid = ids(w.api, w.mid, 'IFCPROJECT')[0];
    if (!pid) throw fail('fam.err.detail');
    w.upsertPset(pid, DETAIL_PSET, [['Level', 'IFCLABEL', level]]);
    w._famDetail = level;
    const idx = familyIndex(w), touched = [];
    for (const [key, g] of idx.groups) {
      if (!g.fam) continue;
      for (const [tid, s] of [...idx.sizes].filter(([t0, s0]) => s0.family === key && w.api.GetLine(w.mid, t0, false))) writeSizeMaps(w, tid, g.fam, sizeValues(g.fam, s.values));
      forgetFamilyIndex(w);
      touched.push(...regenFamily(w, g.fam));
    }
    return { id: null, ids: touched };
  });
}

export function duplicateFamily(key, { name = '', key: newKey = null } = {}) {
  const fixed = { key: newKey };
  return op((w) => {
    patchWriter(w);
    const fam = familyFor(w, key);
    if (!fam) throw fail('fam.err.nofamily');
    if (!fixed.key) fixed.key = freeKey(w);
    const copy = JSON.parse(JSON.stringify(fam));
    delete copy.starter;
    copy.key = fixed.key;
    copy.name = String(name || '').trim().slice(0, 80) || fam.name + ' (2)';
    storeFamily(w, copy);
    let sizes = [...familyIndex(w).sizes.values()].filter((s) => s.family === key);
    if (!sizes.length) sizes = [{ name: defaultSizeName(fam, sizeValues(fam, {})), values: sizeValues(fam, {}) }];
    for (const s of sizes) sizeTypeFor(w, copy, s.values, { name: s.name });
    return { id: null, ids: [], key: fixed.key };
  });
}
/** A family from nothing: its parameters and one solid to start from. Hosted (doors / windows) need a starter kind as its base
 *  (the plan symbol and the hand). */
export function newFamily({ name = '', kind = 'generic', host = 'none', base = '', key = null } = {}) {
  const fixed = { key };
  return op((w) => {
    patchWriter(w);
    if (!fixed.key) fixed.key = freeKey(w);
    const recipe = blankRecipe({ key: fixed.key, name, kind, host, base });
    const r = readFamily(recipe);
    if (!r.ok) throw fail(r.errors[0].key, r.errors[0].fill);
    storeFamily(w, r.family);
    sizeTypeFor(w, r.family, sizeValues(r.family, {}), {});
    return { id: null, ids: [], key: fixed.key };
  });
}
export function blankRecipe({ key, name = '', kind = 'generic', host = 'none', base = '' }) {
  /* i18n-ignore-start: expressions of the starting solids (code, not words) */
  const hosted = host === 'wall';
  if (hosted) {
    const ot = openingType(base) || (kind === 'window' ? WINDOW_TYPES[0] : DOOR_TYPES[0]);
    return { format: 'cadcraft-family', version: 1, key, name: name || ot.key, kind: ot.kind, host: 'wall', base: ot.key, ifc: { class: ot.kind === 'door' ? 'IfcDoor' : 'IfcWindow' },
      params: [{ key: 'Width', kind: 'length', value: ot.width }, { key: 'Height', kind: 'length', value: ot.height }, { key: 'Frame', kind: 'length', value: 50 }],
      solids: [
        { id: 's1', name: tr('fam.part.frame'), op: 'box', x0: '0', y0: '(-WallThickness / 2)', z0: '0', x1: 'Frame', y1: '(WallThickness / 2)', z1: 'Height', style: 'frame' },
        { id: 's2', name: tr('fam.part.frame'), op: 'box', x0: '(Width - Frame)', y0: '(-WallThickness / 2)', z0: '0', x1: 'Width', y1: '(WallThickness / 2)', z1: 'Height', style: 'frame' },
        { id: 's3', name: tr('fam.part.head'), op: 'box', x0: 'Frame', y0: '(-WallThickness / 2)', z0: '(Height - Frame)', x1: '(Width - Frame)', y1: '(WallThickness / 2)', z1: 'Height', style: 'frame' },
        { id: 's4', name: tr(ot.kind === 'door' ? 'fam.part.leaf' : 'fam.part.glass'), op: 'box', x0: 'Frame', y0: ot.kind === 'door' ? '-20' : '-3', z0: ot.kind === 'door' ? '0' : 'Frame', x1: '(Width - Frame)', y1: ot.kind === 'door' ? '20' : '3', z1: '(Height - Frame)', style: ot.kind === 'door' ? 'leaf' : 'glass' },
      ], booleans: [] };
  }
  return { format: 'cadcraft-family', version: 1, key, name: name || key, kind: ['furniture', 'fixture', 'generic'].includes(kind) ? kind : 'generic', host: 'none', base: '',
    ifc: { class: kind === 'furniture' ? 'IfcFurniture' : kind === 'fixture' ? 'IfcSanitaryTerminal' : 'IfcBuildingElementProxy' },
    params: [{ key: 'Width', kind: 'length', value: 600 }, { key: 'Depth', kind: 'length', value: 600 }, { key: 'Height', kind: 'length', value: 900 }],
    solids: [{ id: 's1', name: tr('fam.part.block'), op: 'box', x0: '(-Width / 2)', y0: '0', z0: '0', x1: '(Width / 2)', y1: 'Depth', z1: 'Height', style: 'solid' }], booleans: [] };
  /* i18n-ignore-end */
}
// ======================================================================================================== family libraries (0.8 BIM-FAM-MORE step 8)
export const FAMILY_LIBRARY_FORMAT = 'cadcraft-family-library';
export const FAMILY_LIBRARY_MAX = 200;
/** Every family of the project (not the unedited starters, not guessed types) as one library file: `{ format, version, name, families: [family files] }`. */
export function familyLibrary(w, name = '') {
  const idx = familyIndex(w), families = [];
  for (const [k, g] of idx.groups) { if (!g.fam || g.fam.starter) continue; const f = familyFile(w, k); if (f) families.push(f); }
  return { format: FAMILY_LIBRARY_FORMAT, version: 1, name: String(name || '').slice(0, 120), families };
}
/**
 * The family files in a library file (untrusted), ready for importFamilies: the format and the count are checked, every entry must be an
 * object, and an entry another entry already brings in its `uses` is left out (it would come twice). Each family is still checked by
 * readFamily when it is imported, so a bad one refuses the whole file. → { ok, list, name } | { ok: false, key }
 */
export function readFamilyLibrary(obj) {
  if (!obj || typeof obj !== 'object' || obj.format !== FAMILY_LIBRARY_FORMAT) return { ok: false, key: 'fam.err.notlibrary' };
  const fams = obj.families;
  if (!Array.isArray(fams) || !fams.length) return { ok: false, key: 'fam.err.emptylibrary' };
  if (fams.length > FAMILY_LIBRARY_MAX) return { ok: false, key: 'fam.err.biglibrary' };
  if (fams.some((f) => !f || typeof f !== 'object' || Array.isArray(f))) return { ok: false, key: 'fam.err.notfamily' };
  const brought = new Set();
  for (const f of fams) if (Array.isArray(f.uses)) for (const u of f.uses) if (u && typeof u.key === 'string') brought.add(u.key);
  const list = fams.filter((f) => !(typeof f.key === 'string' && brought.has(f.key)));
  return { ok: true, list, name: typeof obj.name === 'string' ? obj.name.slice(0, 120) : '' };
}
/** A family from a file (untrusted): a clash with a family of this file under the same key takes a new key. */
export function importFamily(recipe, { key = null } = {}) {
  const fixed = { key };
  return op((w) => {
    patchWriter(w);
    ensureUses(w, recipe);
    const fam = importOne(w, recipe, fixed.key);
    fixed.key = fam.key;
    return { id: null, ids: [], key: fixed.key };
  });
}
/** One family record made from a recipe (untrusted): key kept unless the file has one by it, sizes drawn (each checked first). */
function importOne(w, recipe, wantKey) {
  const r = readFamily(recipe);
  if (!r.ok) throw fail(r.errors[0].key, r.errors[0].fill);
  const fam = r.family;
  delete fam.starter;
  fam.key = wantKey || (familyIndex(w).groups.has(fam.key) || STARTER_KEYS.includes(fam.key) ? freeKey(w) : fam.key);
  const sizes = fam.sizes?.length ? fam.sizes : [{ name: null, values: sizeValues(fam, {}) }];
  delete fam.sizes;
  for (const s of sizes) { const ev = evaluateFamily(fam, s.values, evalCtx(w)); if (!ev.ok) throw fail('fam.err.atsize', { size: s.name || '', why: ev.error.key, ...ev.error.fill }); }
  storeFamily(w, fam);
  for (const s of sizes) sizeTypeFor(w, fam, s.values, { name: s.name });
  return fam;
}
/** The families a file brings with it (`uses`, deepest first, a family file of each): added when the file has none under that key. */
function ensureUses(w, recipe) {
  const list = Array.isArray(recipe?.uses) ? recipe.uses.slice(0, 20) : [];
  for (const u of list) {
    const key = typeof u?.key === 'string' ? u.key : '';
    if (!key || STARTER_KEYS.includes(key) || familyIndex(w).groups.has(key)) continue;
    importOne(w, { ...u, uses: undefined }, key);
  }
}
/** The keys of the families a recipe holds in itself. */
export const nestedKeys = (fam) => [...new Set((fam?.parts || []).map((p) => p.family))];
/** Every family that holds `key` (directly or through another), nearest first. */
export function dependentsOf(w, key) {
  const idx = familyIndex(w), out = [], seen = new Set([key]);
  let frontier = [key];
  while (frontier.length) {
    const next = [];
    for (const [k, g] of idx.groups) if (g.fam && !seen.has(k) && nestedKeys(g.fam).some((n) => frontier.includes(n))) { seen.add(k); out.push(k); next.push(k); }
    frontier = next;
  }
  return out;
}
/** Several families from one file (an IFC library holds every family it declares) in one undo step; keys fixed on the first run. */
export function importFamilies(recipes, { keys = [] } = {}) {
  const fixed = recipes.map((_, i) => keys[i] || null);
  return op((w) => {
    patchWriter(w);
    const out = [];
    recipes.forEach((recipe, i) => {
      ensureUses(w, recipe);
      const fam = importOne(w, recipe, fixed[i]);
      fixed[i] = fam.key;
      out.push(fam.key);
    });
    return { id: null, ids: [], keys: out };
  });
}
/** Remove a family nobody uses: its sizes and its group. */
export function removeFamily(key) {
  return op((w) => {
    patchWriter(w);
    const idx = familyIndex(w), g = idx.groups.get(key);
    if (!g) throw fail('fam.err.nofamily');
    const sizes = [...idx.sizes].filter(([, s]) => s.family === key).map(([tid]) => tid);
    if (sizes.some((tid) => (idx.occ.get(tid) || []).some((id) => w.api.GetLine(w.mid, id, false)))) throw fail('fam.err.inuse');
    const holder = [...idx.groups].find(([k, x]) => k !== key && x.fam && nestedKeys(x.fam).includes(key));
    if (holder) throw fail('fam.err.nested', { family: holder[1].name });   // another family holds it
    for (const tid of sizes) dropType(w, tid);
    w.dropProduct([g.id]);
    forgetFamilyIndex(w);
    return { id: null, ids: [] };
  });
}
function freeKey(w) {
  const have = new Set([...familyIndex(w).groups.keys(), ...STARTER_KEYS]);
  for (;;) { const k = newFamilyKey(); if (!have.has(k)) return k; }
}

// ======================================================================================================== elements
/** Place an unhosted family's size on a level (plan mm in the level's axes, degrees). */
export function placeFamily(spec = {}) {
  const s0 = { guid: spec.guid ?? null };
  return op((w) => placeOne(w, spec, s0));
}
/** Several placements as ONE undo step (0.8 EG.60 furnish.js: a whole room). → { id, ids, made } of all of them. */
export function placeFamilies(list) {
  const keep = (list || []).map((spec) => ({ spec, s0: { guid: spec.guid ?? null } }));
  return op((w) => {
    const ids = [], made = new Map();
    for (const { spec, s0 } of keep) { const r = placeOne(w, spec, s0); ids.push(...r.ids); for (const [g, id] of r.made) made.set(g, id); }
    return { id: ids[0], ids, made };
  });
}
function placeOne(w, { storey, family, values = {}, instance = {}, typeGuid = null, x = 0, y = 0, rot = 0 } = {}, s0) {
  {
    patchWriter(w);
    const st = w.byGuid(storey);
    if (!st) throw fail('model.err.nolevel');
    let fam, tid;
    if (typeGuid) ({ tid, fam } = sizeById(w, typeGuid));
    else {
      fam = familyFor(w, family);
      if (!fam) throw fail('fam.err.nofamily');
      if (fam.host === 'wall') throw fail('fam.err.hosted');
      const ev = evaluateFamily(fam, values, evalCtx(w));
      if (!ev.ok) throw fail(ev.error.key, ev.error.fill);
      tid = sizeTypeFor(w, fam, values, {});
    }
    if (fam.host === 'wall') throw fail('fam.err.hosted');
    const stl = w.api.GetLine(w.mid, st, false);
    const lp = w.placeAt(stl.ObjectPlacement.value, x, y, 0, rot);
    const cls = classesFor({ ifc: { class: fam.ifc.class } }, w.schema);
    const shape = w.shapeFor(tid);
    const g = w.gid(s0.guid); s0.guid = g;
    const size = familyIndex(w).sizes.get(tid);
    const id = w.make(cls.occ, g, w.ownerHistory(), w.L(fam.name), null, w.L(size?.name || fam.name), w.H(lp), shape ? w.H(shape) : null, null, ...w.occExtra(cls.occ));
    w.noteGuid(g, id);
    w.relateType(id, tid);
    w.contain(id, st);
    if (hasInstance(fam, instance)) { writeInstance(w, id, fam, instance); reshape(w, id, tid); }   // sets parameters of its own: its own shape
    writePorts(w, id, fam, size?.values || values);
    forgetFamilyIndex(w);
    return { id, ids: [id], made: new Map([[g, id]]) };
  }
}
/** Change elements to another size of their family (doors / windows: through model-openings.js, so the wall and what follows it
 *  are made again; others: retyped and reshaped). One undo step. */
/** Elements moved onto the type `tid` (off their old one) and drawn from it; their ObjectType follows the size's name. → their ids. */
function retypeElements(w, guids, tid, sizeName, fam = null, values = null) {
  const out = [];
  for (const g of guids) {
    const id = w.byGuidAny(g);
    if (!id) continue;
    if (typeOf(w, id) !== tid) {
      for (const rid of ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE')) {
        const r = w.api.GetLine(w.mid, rid, false);
        if (!(r.RelatedObjects || []).some((h) => h.value === id)) continue;
        const rest = r.RelatedObjects.filter((h) => h.value !== id), l = w.touch(rid);
        if (rest.length) { l.RelatedObjects = rest; w.write(l); } else { w.touch(rid); deleteLine(w.api, w.mid, rid); }
      }
      w.relateType(id, tid);
      w._typeOf = null;
    }
    reshape(w, id, tid);
    if (fam) writePorts(w, id, fam, values || {});   // its ports follow the new size (renanem's connectors)
    const l = w.touch(id); l.ObjectType = w.L(sizeName); w.write(l);
    out.push(id);
  }
  forgetFamilyIndex(w);
  return out;
}
/**
 * Elements of one family given a size by its values (a hotspot dragged to a new place): the size with these values is found or made, the elements move
 * onto it. Doors and windows go through changeOpenings (their wall follows). One undo step.
 */
export function resizeFamilyElements(guids, values) {
  return (ed) => {
    const w0 = new ModelWriter(ed.W, ed.api, ed.mid); patchWriter(w0);
    const opened = readOpenings(w0).filter((o) => guids.includes(o.guid));
    if (opened.length) return changeOpenings(opened.map((o) => o.guid), { values, width: values.Width, height: values.Height })(ed);
    return op((w) => {
      patchWriter(w);
      const id0 = w.byGuidAny(guids[0]), tid0 = id0 ? typeOf(w, id0) : null, size0 = tid0 ? familyIndex(w).sizes.get(tid0) : null, fam = size0 ? familyFor(w, size0.family) : null;
      if (!fam) throw fail('fam.err.nofamily');
      const ev = evaluateFamily(fam, values, evalCtx(w));
      if (!ev.ok) throw fail(ev.error.key, ev.error.fill);
      const tid = sizeTypeFor(w, fam, values, {});
      const out = retypeElements(w, guids, tid, familyIndex(w).sizes.get(tid)?.name || fam.name, fam, values);
      return { id: out[0] ?? null, ids: out };
    })(ed);
  };
}
export function setFamilySize(guids, typeGuid) {
  return (ed) => {
    let hosted = null;
    const peek = op((w) => {
      patchWriter(w);
      const { s, fam } = sizeById(w, typeGuid);
      if (fam.host === 'wall') { hosted = { family: fam.key, values: s.values, sizeName: s.name }; return { id: null, ids: [] }; }
      const tid = sizeById(w, typeGuid).tid;
      const out = retypeElements(w, guids, tid, s.name, fam, s.values);
      return { id: out[0] ?? null, ids: out };
    })(ed);
    if (!hosted) return peek;
    return changeOpenings(guids, { family: hosted.family, values: hosted.values, width: hosted.values.Width, height: hosted.values.Height, sizeName: hosted.sizeName })(ed);
  };
}
/** Two journals as one step (model-ui.js mergeJournals' rule: the first copy of a changed line is the one that counts). */
function joinJournals(a, b) {
  if (!a) return b; if (!b) return a;
  const before = new Map(a.before);
  for (const [id, line] of b.before) if (!before.has(id) && !a.created.includes(id)) before.set(id, line);
  return { created: [...a.created, ...b.created], before, retyped: [...(a.retyped || []), ...(b.retyped || [])] };
}
/**
 * Set the parameters a placed element sets itself (instance parameters): { Param: value } for one or more elements — furniture and fixtures get a shape
 * of their own at their size and these values (back to the size's own when every value is its default again), doors and windows are made again in
 * their walls. One undo step.
 */
export function setFamilyInstance(guids, values) {
  return (ed) => {
    const w0 = new ModelWriter(ed.W, ed.api, ed.mid); patchWriter(w0);
    const openings = new Set(readOpenings(w0).map((o) => o.guid));
    const hosted = guids.filter((g) => openings.has(g)), plain = guids.filter((g) => !openings.has(g));
    let r = null;
    if (plain.length) {
      r = op((w) => {
        patchWriter(w);
        const out = [];
        for (const g of plain) {
          const id = w.byGuidAny(g);
          if (!id) continue;
          const tid = typeOf(w, id), size = tid ? familyIndex(w).sizes.get(tid) : null, fam = size ? familyFor(w, size.family) : null;
          if (!fam) throw fail('fam.err.nofamily');
          writeInstance(w, id, fam, { ...readInstance(w, id, fam), ...values });
          reshape(w, id, tid);
          writePorts(w, id, fam, { ...(size.values || {}), ...readInstance(w, id, fam) });
          out.push(id);
        }
        forgetFamilyIndex(w);
        return { id: out[0] ?? null, ids: out };
      })(ed);
    }
    if (hosted.length) { const r2 = changeOpenings(hosted, { instance: values })(ed); r = r ? { ...r2, ids: [...(r.ids || []), ...(r2.ids || [])], journal: joinJournals(r.journal, r2.journal) } : r2; }
    return r || { id: null, ids: [] };
  };
}
export function moveFamilyElement(guid, { x, y, rot }) {
  return op((w) => {
    patchWriter(w);
    const id = w.byGuidAny(guid);
    const e = readFamilyElements(w).find((q) => q.id === id);
    if (!e) throw fail('fam.err.noelement');
    w.movePlacement(w.api.GetLine(w.mid, id, false).ObjectPlacement.value, Number.isFinite(x) ? x : e.x, Number.isFinite(y) ? y : e.y, e.z, Number.isFinite(rot) ? rot : e.rot);
    return { id, ids: [id] };
  });
}
export function removeFamilyElements(guids) {
  return op((w) => {
    patchWriter(w);
    const list = guids.map((g) => w.byGuidAny(g)).filter(Boolean);
    if (list.length) w.dropProduct([...list, ...list.flatMap((id) => elementPorts(w, id))]);
    forgetFamilyIndex(w);
    return { id: null, ids: [] };
  });
}

// ======================================================================================================== connectors → ports
/** The ports a family wrote on an element (those with CadCraft_Connector), nested (IFC4) or related (IFC2X3). */
export function elementPorts(w, id) {
  const out = [];
  for (const rid of listOf(w, 'IFCRELNESTS')) { const r = w.api.GetLine(w.mid, rid, false); if (r?.RelatingObject?.value === id) for (const h of r.RelatedObjects || []) out.push(h.value); }
  for (const rid of listOf(w, 'IFCRELCONNECTSPORTTOELEMENT')) { const r = w.api.GetLine(w.mid, rid, false); if (r?.RelatedElement?.value === id && r.RelatingPort) out.push(r.RelatingPort.value); }
  return out.filter((p) => w.api.GetLine(w.mid, p, false) && w.readPset(p, CONNECTOR_PSET));
}
/** An element's ports made again from its family's connectors (none when the family has none). */
function writePorts(w, id, fam, values) {
  const old = elementPorts(w, id);
  if (old.length) w.dropProduct(old);
  if (!fam.connectors?.length) return [];
  const ev = evaluateFamily(fam, values, {});
  if (!ev.ok) throw fail(ev.error.key, ev.error.fill);
  const lp = w.api.GetLine(w.mid, id, false).ObjectPlacement.value, made = [];
  for (const c of ev.connectors) {
    const sys = (c.domain === 'pipe' ? PIPE_SYSTEMS : DUCT_SYSTEMS)[c.system];
    const across = Math.abs(c.dir[2]) > 0.9 ? [1, 0, 0] : [0, 0, 1];
    const plp = w.make('IFCLOCALPLACEMENT', w.H(lp), w.H(w.axisFrame(c.p, c.dir, across)));
    const name = w.L(c.name || tr('fam.conn.' + c.domain));
    const flow = c.flow === 'out' ? 'SOURCE' : 'SINK';
    const pid = w.v4 ? w.make('IFCDISTRIBUTIONPORT', w.guid(), w.ownerHistory(), name, null, null, w.H(plp), null, flow, c.domain === 'pipe' ? 'PIPE' : 'DUCT', sys?.ifc || 'NOTDEFINED')
      : w.make('IFCDISTRIBUTIONPORT', w.guid(), w.ownerHistory(), name, null, null, w.H(plp), null, flow);
    if (!w.v4) w.make('IFCRELCONNECTSPORTTOELEMENT', w.guid(), w.ownerHistory(), null, null, w.H(pid), w.H(id));
    w.upsertPset(pid, CONNECTOR_PSET, [['Key', 'IFCIDENTIFIER', c.id], ['Domain', 'IFCLABEL', c.domain], ['System', 'IFCLABEL', c.system],
      ['Size', 'IFCPOSITIVELENGTHMEASURE', round(w.u(c.size))], ['Flow', 'IFCLABEL', c.flow], ...(fam.fixture ? [['Fixture', 'IFCLABEL', fam.fixture]] : [])]);
    made.push(pid);
  }
  if (w.v4 && made.length) w.make('IFCRELNESTS', w.guid(), w.ownerHistory(), null, null, w.H(id), made.map((p) => w.H(p)));
  // a pipe or duct already ending where a connector now is gets connected to it
  const storey = w.storeyOfId(id);
  if (storey && made.length) joinPorts(w, storey, made);
  return made;
}

/** Writers here also find types and any element by GlobalId (model-write.js byGuid knows the building tools' classes only). */
function patchWriter(w) {
  if (w.byGuidAny) return;
  w.byGuidAny = (guid) => {
    const known = w.byGuid(guid);
    if (known) return known;
    if (!w._anyGuid) {
      w._anyGuid = new Map();
      for (const cls of [...TYPE_CLASSES, 'IFCFURNITURE', 'IFCFURNISHINGELEMENT', 'IFCBUILDINGELEMENTPROXY', 'IFCSANITARYTERMINAL', 'IFCLIGHTFIXTURE', 'IFCFLOWTERMINAL', 'IFCGROUP']) for (const id of listOf(w, cls)) { const g = guidOf(w, id); if (g) w._anyGuid.set(g, id); }
    }
    const id = w._anyGuid.get(guid);
    return id && w.api.GetLine(w.mid, id, false) ? id : null;
  };
}
export { patchWriter as familyWriter, typePset, FAMILY_PSET, DOOR_PSET, WINDOW_PSET };
