/* SPDX-License-Identifier: Apache-2.0 */
/**
 * issue-set.js: BimCraft's side of the issue history (0.10 BK.46, BK.48; session bk-r3-stages-10). No DOM:
 * tools/bimcraft-test/issue-set-test.mjs (node bin/test-bimcraft.mjs --issues) runs it in Node. The model, the changelog and the
 * records are the shared lib's (issuelog/history.js); this file says what a BimCraft sheet and element print as, and keeps the
 * history in the IFC.
 *
 * In the IFC: property set CadCraft_Issues on the IfcProject:
 *   Format 'cadcraft-issues 1' · History (IfcText: the history as JSON) · Prints_<issue id> (IfcText: the packed element prints
 *   of that issue, '' once the issue is removed). Other programs ignore the set.
 * An issued sheet's revision is also written into its title block field `revision` (CadCraft_Sheets), in the same undo step.
 *
 *   readIssues(w) → history · readPrints(w, issueId) → Map · allPrints(w) → { issueId: packed text }
 *   elementPrints({ ix, model, w }) → Map(GlobalId → { p, g, c, s })      ix = ifc-props.js propertyIndex, model = the loaded model
 *       p = every property the index holds for the element (but its GlobalId), g = the middle and size of its box and its triangle
 *       count (what ifc-compare.js compares), c = its class, s = its storey's GlobalId
 *   sheetScope(sheet, { levels, callouts }) → { all, storeys, classes }   a plan, ceiling plan or callout shows its level; an elevation
 *       or section the whole model; a schedule its classes (doors, windows, walls; any other schedule the whole model)
 *   sheetsNow(w, prints) → [{ id, number, title, hash, def, scope }]      def = the sheet's own set-up (its revision and date fields
 *       left out), hash = the set-up with the prints of the elements it shows
 *   planFor(w, prints, { code, purpose, name, date, by, note, sheetIds, stage, snapshot }) → issue (not yet stored)
 *   recordIssueOp(issue, prints) → op (one undo step: the issue, its prints, the sheets' revision fields)
 *   setHistoryOp(history, { dropPrints: [ids], keepPrints: { id: text } }) → op   records, a removal, an import
 *   changesFor(w, issueId, prints) → changesSince() result | null
 */
import { op } from './model-ops.js';
import { ids, val } from './ifc-util.js';
import { readSheets, readCallouts, calloutRoot, SHEETS_PSET } from './views-model.js';
import { readLevels } from './model-levels.js';
import { boxes } from './ifc-compare.js';
import { cleanHistory, emptyHistory, planIssue, addIssue, changesSince, packPrints, unpackPrints, elementPrint, sheetPrint, FORMAT, VERSION, LIMITS } from './issuelog/history.js';

export const ISSUES_PSET = 'CadCraft_Issues';
const SCHEDULE_CLASSES = { doors: ['IfcDoor'], windows: ['IfcWindow'], walls: ['IfcWall', 'IfcWallStandardCase'], walltypes: ['IfcWall', 'IfcWallStandardCase'], floors: ['IfcSlab'] };
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
const json = (v) => { try { return JSON.parse(String(v || '')); } catch (e) { return null; } };

export function readIssues(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, ISSUES_PSET);
  return ps?.History ? cleanHistory(json(ps.History)) : emptyHistory();
}
export function readPrints(w, issueId) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, ISSUES_PSET);
  return unpackPrints(ps?.['Prints_' + issueId] || '');
}
export function allPrints(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, ISSUES_PSET), out = {};
  for (const [k, v] of Object.entries(ps || {})) if (k.startsWith('Prints_') && v) out[k.slice(7)] = String(v);
  return out;
}

export function elementPrints({ ix, model, w }) {
  const out = new Map();
  const guid = ix.values('guid'), cls = ix.values('cls');
  const fields = ix.fields.map((f) => f.id).filter((f) => f !== 'guid').sort();
  const vals = fields.map((f) => ix.values(f));
  const B = boxes(model, null);
  const storeyOf = new Map(), levelGuid = new Map(readLevels(w).map((l) => [l.id, l.guid]));
  for (const rid of ids(w.api, w.mid, 'IFCRELCONTAINEDINSPATIALSTRUCTURE')) {
    const r = w.api.GetLine(w.mid, rid, false), g = levelGuid.get(r.RelatingStructure?.value) || '';
    for (const h of r.RelatedElements || []) storeyOf.set(h.value, g);
  }
  // a door or window stands in its wall's storey when it has none of its own: found through the index's storey name
  const byName = new Map(readLevels(w).map((l) => [l.name, l.guid])), stName = ix.values('storey');
  const seen = new Set(), twice = new Set();
  for (const id of ix.ids) { const g = guid.get(id); if (!g) continue; if (seen.has(g)) twice.add(g); seen.add(g); }
  for (const id of ix.ids) {
    const g = guid.get(id);
    if (!g || twice.has(g)) continue;   // a GlobalId used twice cannot be told apart (ifc-compare.js leaves those out too)
    const props = {};
    fields.forEach((f, k) => { const v = vals[k].get(id); if (v !== undefined && v !== '') props[f] = v; });
    const key = ix.keyBase + id, bb = B.box.get(key);
    const shape = bb ? [(bb[0] + bb[3]) / 2, (bb[1] + bb[4]) / 2, (bb[2] + bb[5]) / 2, bb[3] - bb[0], bb[4] - bb[1], bb[5] - bb[2], B.tris.get(key) || 0].map((v) => Math.round(v * 1000) / 1000) : [];
    out.set(g, { ...elementPrint(props, shape), c: String(cls.get(id) || ''), s: storeyOf.get(id) || byName.get(stName.get(id)) || '' });
  }
  return out;
}

export function sheetScope(sheet, { levels = [], callouts = [] } = {}) {
  const scope = { all: false, storeys: [], classes: [] };
  const guids = levels.map((l) => l.guid);
  for (const v of sheet.views || []) {
    if (v.kind === 'plan' || v.kind === 'rcp') { if (guids.includes(v.ref)) scope.storeys.push(v.ref); }
    else if (v.kind === 'callout') { const root = calloutRoot(callouts, v.ref, guids); if (root?.level) scope.storeys.push(root.level); }
    else if (v.kind === 'schedule') { const c = SCHEDULE_CLASSES[String(v.ref).split(':')[0]]; if (c) scope.classes.push(...c); else scope.all = true; }
    else scope.all = true;
  }
  scope.storeys = [...new Set(scope.storeys)]; scope.classes = [...new Set(scope.classes)];
  return scope;
}
const inScope = (scope, e) => scope.all || scope.storeys.includes(e.s) || scope.classes.includes(e.c);

export function sheetsNow(w, prints = null) {
  const levels = readLevels(w), callouts = readCallouts(w);
  return readSheets(w).map((s) => {
    const { id, number, title, ...rest } = s;
    const fields = Object.fromEntries(Object.entries(rest.fields || {}).filter(([k]) => k !== 'revision' && k !== 'date'));
    const scope = sheetScope(s, { levels, callouts });
    const def = sheetPrint({ number, title, ...rest, fields });
    const parts = [];
    if (prints) for (const [g, e] of prints) if (inScope(scope, e)) parts.push(g + ':' + e.p + ':' + e.g);
    return { id, number, title, def, hash: sheetPrint({ def }, parts), scope };
  });
}

export function planFor(w, prints, { code = '', purpose = 'information', name = '', date = '', by = '', note = '', sheetIds = null, stage = '', snapshot = null, id = '' } = {}) {
  const now = sheetsNow(w, prints), chosen = sheetIds ? now.filter((s) => sheetIds.includes(s.id)) : now;
  if (!chosen.length) throw Object.assign(new Error('issues.err.nosheets'), { key: 'issues.err.nosheets' });
  const keep = prints && prints.size <= LIMITS.elements ? prints.size : 0;
  return planIssue(readIssues(w), { id, code, purpose, name, date, by, note, app: 'bimcraft', stage, sheets: chosen, elements: keep, snapshot });
}

export function recordIssueOp(issue, prints = null) {
  const packed = issue.elements && prints ? packPrints(prints) : '';
  return op((w) => {
    const pj = project(w);
    const h = addIssue(readIssues(w), issue);
    w.upsertPset(pj, ISSUES_PSET, [['Format', 'IFCLABEL', FORMAT + ' ' + VERSION], ['History', 'IFCTEXT', JSON.stringify(h)], ['Prints_' + issue.id, 'IFCTEXT', packed]]);
    // the title block says the revision the sheet was issued at
    const raw = w.readPset(pj, SHEETS_PSET) || {}, rows = [];
    for (const s of issue.sheets) {
      const cur = json(raw[s.id]);
      if (!cur || (cur.fields?.revision || '') === s.rev) continue;
      rows.push([s.id, 'IFCTEXT', JSON.stringify({ ...cur, fields: { ...(cur.fields || {}), revision: s.rev } })]);
    }
    if (rows.length) w.upsertPset(pj, SHEETS_PSET, rows);
    return { id: pj, ids: [], issue: issue.id };
  });
}

export function setHistoryOp(history, { dropPrints = [], keepPrints = {} } = {}) {
  const h = cleanHistory(history);
  return op((w) => {
    const pj = project(w);
    const live = new Set(h.issues.map((i) => i.id));
    w.upsertPset(pj, ISSUES_PSET, [['Format', 'IFCLABEL', FORMAT + ' ' + VERSION], ['History', 'IFCTEXT', JSON.stringify(h)],
      ...dropPrints.filter((id) => !live.has(id)).map((id) => ['Prints_' + id, 'IFCTEXT', '']),
      ...Object.entries(keepPrints).filter(([id]) => live.has(id)).map(([id, text]) => ['Prints_' + id, 'IFCTEXT', String(text)])]);
    return { id: pj, ids: [] };
  });
}

export function changesFor(w, issueId, prints = null) {
  const issue = readIssues(w).issues.find((i) => i.id === issueId);
  if (!issue) return null;
  const old = readPrints(w, issueId);
  return changesSince(issue, { sheets: sheetsNow(w, prints), prints, oldPrints: old.size ? old : null });
}
