/* SPDX-License-Identifier: Apache-2.0 */
/**
 * element-types.js — floor, roof and ceiling types with layers (0.10 booklet rows BK.24 and BK.15, session bk-r3-types-10). No DOM:
 * bin/test-bimcraft.mjs --eltypes runs it in Node.
 *
 * There is ONE layered-type model: wall-assemblies.js (validateAssembly, readAssemblies, writeAssembly). A floor, roof or ceiling type
 * is the same record as a wall type under a key that starts with floor-, roof- or ceiling- (wall-assemblies.js ASSEMBLY_KINDS: its IFC
 * type class, predefined type and property set). This file is only what an ELEMENT needs to carry one: the starter types, finding a
 * type, and putting a type on a floor, a roof or a ceiling. Layers run from the TOP down (a wall's run from the exterior side inward).
 *
 *   ELEMENT_KINDS                          ['floor', 'roof', 'ceiling']
 *   ELEMENT_STARTERS[kind]                 the starter types: one generic type (one layer of the generic material, LOD 200; BK.15) and two
 *                                          layered ones (LOD 300). Starting values to work with, NOT tested constructions.
 *   starterRecipe(kind, key)               a starter as a recipe (validateAssembly), `starter: true`; null when there is none
 *   elementType(kind, key, source)         the project's type of that key (source: a writer, or readAssemblies(w, kind)), else the starter
 *   elementTypes(w, kind)                  every type on offer: the project's, then the starters the project has not taken yet
 *   typeTotal(type)                        the sum of its layers, mm
 *   ensureTypeLine(w, kind, key)           → { id, set, type }: the type's IFC line and material layer set; a starter is written into the
 *                                          project the first time it is used (from then on it is a project type and its LOD travels in the file)
 *   assignType(w, id, kind, key)           → type: the element is defined by the type (IfcRelDefinesByType) and takes its layer set as material
 *   releaseType(w, id)                     the element leaves its type (its material stays what it was)
 *
 * An element keeps its type as `TypeKey` in its own CadCraft_Floor / CadCraft_DrawnFloor / CadCraft_Ceiling / CadCraft_Roof set
 * (model-slabs.js, model-floors.js); its Thickness is the type's. An element with no TypeKey is what it was before 0.10.
 */
import { ids, deleteLine } from './ifc-util.js';
import { ASSEMBLY_KINDS, assemblyKind, readAssemblies, writeAssembly, validateAssembly } from './wall-assemblies.js';
import { normalizeLayer } from './project-materials.js';
import { t as tr } from './i18n.js';

export const ELEMENT_KINDS = ['floor', 'roof', 'ceiling'];
const L = (mat, t, fn, core = false, more = {}) => ({ mat, t, function: fn, core, ...more });
/** Starter types, layers from the top down. Names: lang eltype.<key>. Generic starting values: check them before use. */
export const ELEMENT_STARTERS = {
  floor: [
    { key: 'floor-generic', lod: 200, layers: [L('generic', 300, 'structure', true)] },
    { key: 'floor-timber-joist', lod: 300, layers: [L('flooring', 20, 'finish'), L('plywood', 18, 'substrate'), L('studs', 235, 'structure', true), L('gypsum', 12.5, 'finish')] },
    { key: 'floor-concrete-screed', lod: 300, layers: [L('flooring', 15, 'finish'), L('screed', 50, 'substrate'), L('insulation', 50, 'insulation'), L('concrete', 150, 'structure', true)] },
  ],
  roof: [
    { key: 'roof-generic', lod: 200, layers: [L('generic', 250, 'structure', true)] },
    { key: 'roof-timber', lod: 300, layers: [L('roofing', 20, 'finish'), L('membrane', 0, 'membrane'), L('osb', 18, 'substrate'), L('studs', 200, 'structure', true), L('gypsum', 12.5, 'finish')] },
    { key: 'roof-concrete-flat', lod: 300, layers: [L('membrane', 0, 'membrane'), L('insulation', 120, 'insulation'), L('concrete', 180, 'structure', true), L('plaster', 10, 'finish')] },
  ],
  ceiling: [
    { key: 'ceiling-generic', lod: 200, layers: [L('generic', 15, 'structure', true)] },
    { key: 'ceiling-gypsum', lod: 300, layers: [L('gypsum', 12.5, 'structure', true)] },
    { key: 'ceiling-suspended', lod: 300, layers: [L('air', 150, 'finish', false, { kind: 'cavity' }), L('ceilingtile', 15, 'structure', true)] },
  ],
};
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

export const typeTotal = (type) => (type?.layers || []).reduce((s, l) => s + l.t, 0);

export function starterRecipe(kind, key) {
  const base = (ELEMENT_STARTERS[kind] || []).find((x) => x.key === key);
  if (!base) return null;
  return { ...validateAssembly({ version: 1, key: base.key, name: tr('eltype.' + base.key), exterior: false, layers: base.layers.map(normalizeLayer), lod: base.lod }), starter: true };
}
const projectTypes = (source, kind) => (Array.isArray(source) ? source : source ? readAssemblies(source, kind) : []);

export function elementType(kind, key, source = null) {
  if (!ELEMENT_KINDS.includes(kind) || assemblyKind(key) !== kind) return null;
  return projectTypes(source, kind).find((x) => x.key === key) || starterRecipe(kind, key);
}
export function elementTypes(w, kind) {
  const own = projectTypes(w, kind), have = new Set(own.map((x) => x.key));
  return [...own, ...(ELEMENT_STARTERS[kind] || []).filter((x) => !have.has(x.key)).map((x) => starterRecipe(kind, x.key))];
}

export function ensureTypeLine(w, kind, key) {
  if (!ELEMENT_KINDS.includes(kind) || assemblyKind(key) !== kind) refuse('model.err.eltype');
  const own = readAssemblies(w, kind).find((x) => x.key === key);
  if (own) return { id: own.id, set: w.materialRel(own.id)?.def ?? null, type: own };
  const st = starterRecipe(kind, key);
  if (!st) refuse('model.err.eltype');
  const { starter, ...recipe } = st;
  return writeAssembly(w, recipe);
}
/** Out of every type relation but the one to `keep` (a relation left empty goes). */
function leaveTypes(w, id, keep = null) {
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCRELDEFINESBYTYPE'); } catch (e) { list = []; }
  let inKeep = false;
  for (const rid of list) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (!(r.RelatedObjects || []).some((h) => h.value === id)) continue;
    if (keep !== null && r.RelatingType?.value === keep) { inKeep = true; continue; }
    const rest = r.RelatedObjects.filter((h) => h.value !== id);
    const l = w.touch(rid);
    if (rest.length) { l.RelatedObjects = rest; w.write(l); } else deleteLine(w.api, w.mid, rid);
  }
  return inKeep;
}
export function assignType(w, id, kind, key) {
  const T = ensureTypeLine(w, kind, key);
  if (!leaveTypes(w, id, T.id)) w.relateType(id, T.id);
  if (T.set) {
    const rel = w.materialRel(id);
    if (rel) { if (rel.def !== T.set) { const r = w.touch(rel.rel); r.RelatingMaterial = w.H(T.set); w.write(r); } }
    else w.associateMaterial(id, T.set);
  }
  return T.type;
}
export function releaseType(w, id) { leaveTypes(w, id, null); }

/** What a schedule or a list calls a type: its name and its IFC class. */
export const typeIfc = (kind) => ({ class: { IFCWALLTYPE: 'IfcWallType', IFCSLABTYPE: 'IfcSlabType', IFCCOVERINGTYPE: 'IfcCoveringType' }[ASSEMBLY_KINDS[kind].cls], predefined: ASSEMBLY_KINDS[kind].predefined });
