/* SPDX-License-Identifier: Apache-2.0 */
/**
 * element-type-ops.js — the undoable changes of floor, roof and ceiling types (0.10 BK.24, session bk-r3-types-10). No DOM.
 *
 *   saveElementType(input, assign = []) → op   save a floor, roof or ceiling type (wall-assemblies.js validateAssembly; the kind is the
 *        key's prefix) and bring every element of that type, and the elements in `assign` (GlobalIds), up to it: thickness, layers, shape,
 *        quantities. ONE undo step. → { id, ids, typeId, kind }
 *   swapElementType(guids, typeKey) → op       give floors, ceilings or roofs (GlobalIds; drawn floors too) a type, or none ('').
 *        The elements stay the same elements: nothing is drawn again. ONE undo step. → { id, ids, swap: { changed, same, from: [keys], to,
 *        thickness: { before: [mm…], after: mm | null }, lod: { from: [n | null…], to: n | null } } }
 */
import { op } from './model-ops.js';
import { val } from './ifc-util.js';
import { validateAssembly, writeAssembly, assemblyKind } from './wall-assemblies.js';
import { readDerived, updateDerived, syncDerived } from './model-slabs.js';
import { readDrawnFloors, changeDrawnFloorIn } from './model-floors.js';
import { regenAttached } from './model-walls.js';
import { elementType, typeTotal, ELEMENT_KINDS } from './element-types.js';

const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const listOf = (D, kind) => ({ floor: D.floors, roof: D.roofs, ceiling: D.ceilings }[kind] || []);

export function saveElementType(input, assign = []) {
  const recipe = validateAssembly(input), kind = assemblyKind(recipe.key);
  if (!ELEMENT_KINDS.includes(kind)) refuse('model.err.eltype');
  let typeGuid = null;
  return op((w) => {
    typeGuid ||= val(w.guid());
    const r = writeAssembly(w, recipe, typeGuid);
    const hit = listOf(readDerived(w), kind).filter((x) => x.typeKey === recipe.key || assign.includes(x.guid));
    const storeys = new Set(), idl = [];
    for (const x of hit) { const u = updateDerived(w, x.guid, { typeKey: recipe.key }); if (u.storey !== null) storeys.add(u.storey); idl.push(x.id); }
    if (kind === 'floor') for (const f of readDrawnFloors(w)) if (f.typeKey === recipe.key || assign.includes(f.guid)) { changeDrawnFloorIn(w, f.guid, { typeKey: recipe.key }); idl.push(f.id); }
    for (const st of storeys) syncDerived(w, st);
    if (hit.length) regenAttached(w);
    return { id: idl[0] ?? null, ids: idl, typeId: r.id, kind };
  });
}

export function swapElementType(guids, typeKey) {
  const list = [].concat(guids);
  return op((w) => {
    const D = readDerived(w), drawn = readDrawnFloors(w);
    const all = [...D.floors.map((x) => ['floor', x, false]), ...drawn.map((x) => ['floor', x, true]), ...D.ceilings.map((x) => ['ceiling', x, false]), ...D.roofs.map((x) => ['roof', x, false])];
    const hit = list.map((g) => all.find(([, x]) => x.guid === g)).filter(Boolean);
    if (!hit.length) refuse('model.err.gone');
    const kinds = new Set(hit.map(([k]) => k));
    if (typeKey && (kinds.size !== 1 || assemblyKind(typeKey) !== [...kinds][0])) refuse('model.err.eltype.kind');
    const to = typeKey ? elementType([...kinds][0], typeKey, w) : null;
    if (typeKey && !to) refuse('model.err.eltype');
    const rep = { changed: 0, same: 0, from: [], to: typeKey || '', thickness: { before: [], after: to ? typeTotal(to) : null }, lod: { from: [], to: to?.lod ?? null } };
    const storeys = new Set(), idl = [];
    for (const [kind, x, isDrawn] of hit) {
      if ((x.typeKey || '') === (typeKey || '')) { rep.same++; continue; }
      const was = x.typeKey ? elementType(kind, x.typeKey, w) : null;
      rep.changed++; rep.from.push(x.typeKey || ''); rep.thickness.before.push(x.thickness); rep.lod.from.push(was?.lod ?? null);
      if (isDrawn) changeDrawnFloorIn(w, x.guid, { typeKey: typeKey || '' });
      else { const u = updateDerived(w, x.guid, { typeKey: typeKey || '' }); if (u.storey !== null) storeys.add(u.storey); }
      idl.push(x.id);
    }
    for (const st of storeys) syncDerived(w, st);
    if (rep.changed) regenAttached(w);
    return { id: idl[0] ?? null, ids: idl, swap: rep };
  });
}
