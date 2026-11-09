/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rename-ops.js — rename a family, a size (its type) and an element from the project browser (0.9 SU.1123, session `bim-views-09`).
 * No DOM: node bin/test-bimcraft.mjs --views09 --only s. Each is one undo step.
 *   renameFamily(key, name) → op   the family's IfcGroup and recipe name, and every size's type Name "<family> <size>" (as Duplicate does)
 *   renameSize(typeGuid, name) → family-ops.js's (re-exported)
 *   renameElement(guid, name) → op   the element's IFC Name (what the tags, schedules and the browser show)
 *   Errors fam.err.name (no name), model.err.gone
 */
import { op } from './model-ops.js';
import { familyIndex, storeFamily, sizeRows, setTypePset, SIZE_PSET, forgetFamilyIndex } from './family-model.js';
import { ids } from './ifc-util.js';
export { renameSize } from './family-ops.js';

const fail = (key) => Object.assign(new Error(key), { key });
const clean = (s, n = 80) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);

export function renameFamily(key, name) {
  const nm = clean(name);
  return op((w) => {
    if (!nm) throw fail('fam.err.name');
    const idx = familyIndex(w), g = idx.groups.get(key);
    if (!g?.fam) throw fail('model.err.gone');
    const fam = { ...g.fam, name: nm };
    storeFamily(w, fam, { update: true });
    for (const [tid, s] of idx.sizes) {
      if (s.family !== key || !w.api.GetLine(w.mid, tid, false)) continue;
      const l = w.touch(tid); l.Name = w.L(nm + ' ' + s.name); w.write(l);
      setTypePset(w, tid, SIZE_PSET, sizeRows(w, fam, s.name, s.values));
    }
    forgetFamilyIndex(w);
    return { id: g.id, ids: [] };
  });
}

export function renameElement(guid, name) {
  const nm = clean(name, 255);
  return op((w) => {
    if (!nm) throw fail('fam.err.name');
    let id = w.byGuid(guid);
    if (!id) for (const x of ids(w.api, w.mid, 'IFCPRODUCT', true)) if (w.guidOf(x) === guid) { id = x; break; }
    if (!id) throw fail('model.err.gone');
    const l = w.touch(id); l.Name = w.L(nm); w.write(l);
    return { id, ids: [id] };
  });
}
