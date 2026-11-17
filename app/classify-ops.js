/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classify-ops.js — the classification changes as model ops (0.10 BK.94, session bk-content-10): one undo step each, a redo runs it again.
 *
 *   setClassification(guids, { system, code, title, target: 'element' | 'type' }) → op
 *       'element': each element's own code ('' clears it: the type's code, else the project default, shows again).
 *       'type': the code goes on the type of each element (every element of that type reads it). Refused when one has no type
 *       (classify.err.notype). An element may also be named by its type's GlobalId.
 *   setProjectClassification(rec) → op     which systems the project uses, default codes by class on or off; the defaults follow at once
 */
import { op } from './model-ops.js';
import { setCode, classificationIndex, writeProjectClassification, readProjectClassification, anyByGuid } from './classify-model.js';
import { SYSTEM_IDS } from './classify/classify.js';

const refuse = (key) => { throw Object.assign(new Error(key), { key }); };

export function setClassification(guids, { system, code = '', title = '', target = 'element' } = {}) {
  const list = [...new Set(guids || [])];
  return op((w) => {
    if (!list.length) refuse('model.err.gone');
    if (!SYSTEM_IDS.includes(system)) refuse('classify.err.system');
    const find = anyByGuid(w), edition = readProjectClassification(w).editions[system] || '';
    let ix = classificationIndex(w);
    const done = new Set(), out = [];
    for (const g of list) {
      let id = find(g);
      if (!id) refuse('model.err.gone');
      if (target === 'type') { const t = ix.typeOf.get(id); if (t) id = t; else if (!/TYPE$|STYLE$/i.test(String(w.api.GetLine(w.mid, id, false)?.constructor?.name || ''))) refuse('classify.err.notype'); }
      if (done.has(id)) continue;
      done.add(id);
      if (setCode(w, id, system, code, title, { ix, edition })) ix = classificationIndex(w);
      out.push(id);
    }
    return { id: out[0] ?? null, ids: out };
  });
}

export function setProjectClassification(rec) {
  return op((w) => {
    writeProjectClassification(w, rec);   // the defaults follow in the op wrapper (model-ops.js op → syncClassDefaults)
    return { id: null, ids: [] };
  });
}
