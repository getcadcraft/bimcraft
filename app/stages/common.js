/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stages/common.js: the small helpers the project-stage modules share (0.10 W1.10, session stages-10). DOM-free.
 * Nothing here knows a stage; it reads and writes the IFC the way the other model modules do (ModelWriter, op()).
 */
import { ids, val } from '../ifc-util.js';

export const refuse = (key, fill) => { throw Object.assign(new Error(key), { key, fill }); };
export const clean = (s, n = 200) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
export const cleanText = (s, n = 4000) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, ' ').replace(/\r\n?/g, '\n').trim().slice(0, n);
export const num = (v, d = 0) => { const n = Number(v); return Number.isFinite(n) ? n : d; };
export const r2 = (v) => Math.round(v * 100) / 100;
export const safeIds = (w, cls) => { try { return ids(w.api, w.mid, cls); } catch (e) { return []; } };
export const projectId = (w) => safeIds(w, 'IFCPROJECT')[0];
export const yes = (v) => v === true || /^(\.?T\.?|true|1|yes)$/i.test(String(v ?? ''));
export const day = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(String(s ?? '')) ? String(s) : '');

/** A JSON object kept as one IfcText property of a property set; anything unreadable is an empty object. */
export function readJson(w, id, pset, key) {
  const ps = id === undefined || id === null ? null : w.readPset(id, pset);
  if (!ps || !ps[key]) return {};
  try { const o = JSON.parse(String(ps[key])); return o && typeof o === 'object' && !Array.isArray(o) ? o : {}; } catch (e) { return {}; }
}

/** `child` joins `parent`'s aggregation (an IfcSpace in an IfcBuilding), the way model-slabs.js addSpace does it. */
export function aggregateInto(w, parent, child) {
  for (const rid of safeIds(w, 'IFCRELAGGREGATES')) {
    const r = w.api.GetLine(w.mid, rid, false);
    if (r.RelatingObject?.value === parent) { const l = w.touch(rid); l.RelatedObjects = [...(l.RelatedObjects || []), w.H(child)]; w.write(l); return; }
  }
  w.make('IFCRELAGGREGATES', w.guid(), w.ownerHistory(), null, null, w.H(parent), [w.H(child)]);
}

/** element id → the id of what it is aggregated into (a space's storey or building). */
export function parentsOf(w) {
  const m = new Map();
  for (const rid of safeIds(w, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); for (const h of r.RelatedObjects || []) m.set(h.value, r.RelatingObject?.value); }
  return m;
}

/** The area of one element from its quantity sets, in m² as the file states it; undefined when it has none. */
export function quantityOf(w, id, names) {
  for (const d of w.defs(id)) {
    const l = w.api.GetLine(w.mid, d.def, false);
    if (!l?.Quantities) continue;
    for (const h of l.Quantities) {
      const q = w.api.GetLine(w.mid, h.value, false), n = q ? val(q.Name) : null;
      if (n && names.includes(n)) { const v = Number(val(q.AreaValue ?? q.LengthValue ?? q.VolumeValue)); if (Number.isFinite(v)) return v; }
    }
  }
  return undefined;
}

/** A short stable id for something made from text (the same text, the same id: a redo makes the same record). */
export function hash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}
export const today = () => new Date().toISOString().slice(0, 10);
