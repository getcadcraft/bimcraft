/* SPDX-License-Identifier: Apache-2.0 */
/**
 * addons-file.js — "This file uses ..." for BimCraft's IFC files (0.8 AL.6, al_PART_4's seam; mount by bim-model_PART_4).
 * An add-on that wrote into the model (api.model.write / mep.placeRun) is recorded on the IfcProject in the property set CadCraft_AddOns
 * as { add-on id: version }. Every other program ignores it, and the data the add-on made (IfcMembers, ports...) stays in the file either way.
 * On open, the record becomes a doc { addons } for the shell's ccAddonsFile.offer(), which says what is missing and offers to add it.
 * The record is written in the SAME model change as the add-on's own edit (one undo step; undo takes it back too).
 *
 *   recordUse(w, id, version)        w = ModelWriter inside a run; adds/updates one id
 *   readDoc(api, mid) → { addons: { id: version } }     (untrusted: ids and versions are checked)
 *   wireOffer(el, api, mid)          calls window.ccAddonsFile.offer(readDoc(...), el) when the shell seam is there; hides el otherwise → { missing } | null
 */
import { ids, val } from './ifc-util.js';

export const PSET = 'CadCraft_AddOns';
const ID_RE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$/;

export function recordUse(w, id, version) {
  if (!ID_RE.test(String(id || ''))) return;
  const pid = ids(w.api, w.mid, 'IFCPROJECT')[0];
  if (pid === undefined || pid === null) return;
  const v = String(version || '').slice(0, 40);
  if (w.readPset(pid, PSET)?.[id] === v) return;
  w.upsertPset(pid, PSET, [[id, 'IFCTEXT', v]]);
}

export function readDoc(api, mid) {
  const doc = { addons: {} };
  try {
    const pid = ids(api, mid, 'IFCPROJECT')[0];
    if (pid === undefined) return doc;
    for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
      const r = api.GetLine(mid, rid, false);
      if (!(r?.RelatedObjects || []).some((h) => h.value === pid)) continue;
      const d = r.RelatingPropertyDefinition?.value ? api.GetLine(mid, r.RelatingPropertyDefinition.value, false) : null;
      if (!d || val(d.Name) !== PSET) continue;
      for (const h of d.HasProperties || []) {
        const p = api.GetLine(mid, h.value, false), n = String(val(p?.Name) || '');
        if (ID_RE.test(n) && Object.keys(doc.addons).length < 100) doc.addons[n] = String(val(p?.NominalValue) ?? '').slice(0, 40);
      }
      break;
    }
  } catch (e) { /* a file the reader cannot walk: no record */ }
  return doc;
}

export function wireOffer(el, api, mid) {
  if (!el) return null;
  const doc = readDoc(api, mid);
  if (!Object.keys(doc.addons).length || !window.ccAddonsFile?.offer) { el.hidden = true; el.textContent = ''; return null; }
  el.hidden = false;
  return window.ccAddonsFile.offer(doc, el);
}
