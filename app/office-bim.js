/* SPDX-License-Identifier: Apache-2.0 */
/**
 * office-bim.js — BimCraft reads the office standard (BK.181 BimCraft half; mounted 0.11 by session bim-inbox-11). The record and the questions are the shared
 * library's (office-standard.js + office-reader.js, copied from lib/office-standard by `node tools/office-standard/sync.mjs --to bimcraft`; never edit the copies).
 * This file says where BimCraft's answers come from, as CadCraft's office-cad.js does:
 *   project   the building's own record, kept on IfcProject as the property set CadCraft_OfficeStandard { Record: JSON } (the cc-office-standard record SuperCad and
 *             CadCraft write; a building with none reads as empty)
 *   shared    the team's shared standard when the page has one (window.ccOfficeShared(); the endpoint is off today, so empty)
 *   policies  the person's Default Policies (all.anno.*, all.schedule.*), as before
 * An empty standard changes nothing: the title block, the layer list and the heights are what they were.
 *
 *   readOfficeRecord(w) → record | null          saveOfficeRecord(record) → op (one undo step; refuses a record that states nothing: model.err.office.empty)
 *   clearOfficeRecord() → op                     drops the building's own record
 *   officeOf(w) → { standard, from }             the standard in force
 *   officeStrip(w) → [text]                      the office's title block fields that carry a value, "Label: value", for the sheet strip (res-ui.js withProject)
 *   layerNamesOf(w) → [name]                     the presentation layers the file has (IfcPresentationLayerAssignment)
 *   officeLayers(w) → { add, have, extra }       the office layers the building lacks (layerPlan; nothing is ever removed)
 */
import { op } from './model-ops.js';
import { ids } from './ifc-util.js';
import { policy } from './defaults-hook.js';
import { resolve, titleBlock, layerPlan } from './office-reader.js';
import { cleanOffice, isEmpty, FORMAT } from './office-standard.js';
import { KINDS } from './annoscale.js';

export const OFFICE_PSET = 'CadCraft_OfficeStandard';
const POLICY_KEYS = [...KINDS.map((k) => 'all.anno.' + k), ...['group', 'totals', 'title', 'headings'].map((k) => 'all.schedule.' + k)];
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];

export function readOfficeRecord(w) {
  try {
    const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, OFFICE_PSET);
    if (!ps || !ps.Record) return null;
    const raw = JSON.parse(String(ps.Record));
    return raw && raw.format === FORMAT ? raw : null;
  } catch (e) { return null; }
}

export function saveOfficeRecord(record) {
  return op((w) => {
    const { standard } = cleanOffice(record);
    if (isEmpty(standard)) throw Object.assign(new Error('model.err.office.empty'), { key: 'model.err.office.empty' });
    const pj = project(w);
    w.upsertPset(pj, OFFICE_PSET, [['Record', 'IFCTEXT', JSON.stringify(standard)]]);
    return { id: pj, ids: [], standard };
  });
}

export function clearOfficeRecord() {
  return op((w) => {
    const pj = project(w);
    w.upsertPset(pj, OFFICE_PSET, [['Record', 'IFCTEXT', '']]);
    return { id: pj, ids: [] };
  });
}

export function officeOf(w) {
  const policies = {};
  for (const k of POLICY_KEYS) { const v = policy(k); if (v !== undefined) policies[k] = v; }
  let shared = null;
  try { shared = typeof window !== 'undefined' && typeof window.ccOfficeShared === 'function' ? window.ccOfficeShared() : null; } catch (e) { shared = null; }
  return resolve({ project: w ? readOfficeRecord(w) : null, shared, policies: { policies } });
}

export function officeStrip(w) {
  const { standard } = officeOf(w);
  return titleBlock(standard).fields.filter((f) => f.value).map((f) => `${f.label}: ${f.value}`);
}

export function layerNamesOf(w) {
  const names = [];
  try {
    const v = w.api.GetLineIDsWithType(w.mid, w.api.GetTypeCodeFromName('IFCPRESENTATIONLAYERASSIGNMENT'), true);
    for (let i = 0; i < v.size(); i++) {
      const l = w.api.GetLine(w.mid, v.get(i), false), n = l && l.Name && l.Name.value;
      if (n) names.push(String(n));
    }
  } catch (e) { /* a file without them */ }
  return names;
}

export function officeLayers(w) {
  const { standard } = officeOf(w);
  return layerPlan(standard, layerNamesOf(w));
}
