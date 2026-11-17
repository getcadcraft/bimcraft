/* SPDX-License-Identifier: Apache-2.0 */
/**
 * verify-model.js: the verification state of an element in the IFC (0.10 booklet rows BK.64 and BK.49, session bk-r3-checks-10).
 * DOM-free: node bin/test-bimcraft.mjs --checks10. The rules and the record are ./modelaudit/verify.js (lib/modelaudit, shared);
 * this is BimCraft's thin adapter: where the record lives in the file and the ops that change it.
 *
 * In the IFC: property set CadCraft_Verification on the element (a wall, door, window, room, any element): State, By, On, Method,
 * Source, Note, LevelOfDevelopment ('LOD 500' while field-verified). Plain text properties, so any IFC program lists them and
 * BimCraft's Find, Color by property and tag schedules read 'p:CadCraft_Verification.State' with nothing added.
 * An as-built export states the totals on the project: property set CadCraft_AsBuilt (Format, Status, Date, By, Elements,
 * FieldVerified, Checked, Unverified, NotStated, Statement, Note).
 * The lintel / header note of a door or window (BK.20: "a noted one") is property Lintel in CadCraft_Interface on the element.
 *
 *   recordOf(w, id) → record | null
 *   readVerification(w) → [{ id, guid, cls, name, storey (id | null), record }]          every element that carries a record
 *   verificationList(w) → [{ id, guid, cls, name, level, record | null }]                  EVERY element and room (the as-built list)
 *   markRecognised(w, ids, source, note?)                inside an op: these new elements are unverified (source pdf | scan | drawing | pointcloud)
 *   markNewRooms(w, storeyIds, before, source, names?)   inside an op, after the walls settled: rooms that were not there before are
 *                                                        unverified; names = [{ guid?, at: [x, y], name }] from text found in them
 *   spaceIds(w) → Set of IfcSpace ids (call it before the op's change)
 *   setVerificationOp(guids, state, fields) → op         state '' takes the record off; one undo step; throws { key } (verify.err.*)
 *   lintelNote(w, id) · setLintelNoteOp(guids, note) → op
 *   asBuiltOp({ by, on, note }) → op                     writes the statement on the project; result.summary
 *   readAsBuilt(w) → the statement | null
 */
import { op } from './model-ops.js';
import { ids, val } from './ifc-util.js';
import { anyByGuid } from './classify-model.js';
import { VERIFY_PSET, ASBUILT_PSET, cleanRecord, makeRecord, recordRows, summary, statementRows } from './modelaudit/verify.js';

export const INTERFACE_PSET = 'CadCraft_Interface';
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const clsOf = (l) => String(l?.constructor?.name || '');
const safeIds = (w, name, inh = false) => { try { return ids(w.api, w.mid, name, inh); } catch (e) { return []; } };
const SKIP = /^Ifc(OpeningElement|OpeningStandardCase|VirtualElement|VoidingFeature|FeatureElement.*)$/i;

export function recordOf(w, id) { const ps = w.readPset(id, VERIFY_PSET); return ps ? cleanRecord(ps) : null; }

/** A line and its IFC class as the page writes it ('IfcWall'; web-ifc names the line's class so). */
function lineInfo(w, id) {
  const l = w.api.GetLine(w.mid, id, false);
  if (!l) return null;
  let raw = clsOf(l);
  if (!/^Ifc/.test(raw)) { try { raw = w.api.GetNameFromTypeCode(w.api.GetLineType(w.mid, id)) || raw; } catch (e) { /* keeps the constructor's name */ } }
  return { l, raw };
}

export function readVerification(w) {
  w.defs(0);   // builds the element → property definitions index
  const named = new Map(), out = [];
  const isOurs = (def) => { if (!named.has(def)) { const l = w.api.GetLine(w.mid, def, false); named.set(def, !!l && val(l.Name) === VERIFY_PSET); } return named.get(def); };
  const so = w.storeyOf();
  for (const [id, list] of w._defs || []) {
    if (!list.some((d) => isOurs(d.def))) continue;
    const rec = recordOf(w, id);
    if (!rec) continue;
    const info = lineInfo(w, id);
    if (!info) continue;
    out.push({ id, guid: val(info.l.GlobalId), cls: info.raw, name: val(info.l.Name) || '', storey: so.get(id) ?? null, record: rec });
  }
  return out.sort((a, b) => a.id - b.id);
}

export function verificationList(w) {
  const have = new Map(readVerification(w).map((x) => [x.id, x.record]));
  const so = w.storeyOf(), levelName = new Map();
  const level = (id) => { const st = so.get(id); if (!st) return ''; if (!levelName.has(st)) levelName.set(st, val(w.api.GetLine(w.mid, st, false)?.Name) || ''); return levelName.get(st); };
  const out = [], seen = new Set();
  for (const id of [...safeIds(w, 'IFCELEMENT', true), ...safeIds(w, 'IFCSPACE')]) {
    if (seen.has(id)) continue;
    seen.add(id);
    const info = lineInfo(w, id);
    if (!info || SKIP.test(info.raw)) continue;
    out.push({ id, guid: val(info.l.GlobalId), cls: info.raw, name: val(info.l.LongName) || val(info.l.Name) || '', level: level(id), record: have.get(id) || null });
  }
  return out;
}

const write = (w, id, rec) => w.upsertPset(id, VERIFY_PSET, rec ? recordRows(rec) : recordRows({ state: 'unverified' }).map(([n, t]) => [n, t, '']));

export function markRecognised(w, idList, source, note = '') {
  const rec = makeRecord('unverified', { source, note });
  for (const id of idList || []) if (id) write(w, id, rec);
  return rec;
}
export const spaceIds = (w) => new Set(safeIds(w, 'IFCSPACE'));
const inPoly = (x, y, p) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const a = p[i], b = p[j]; if ((a[1] > y) !== (b[1] > y) && x < ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
/**
 * Rooms made by this op (not in `before`) are unverified. names = [{ storey (id), name, at: [x, y] }] (plan mm): a name whose point
 * lies in a new room's loop becomes that room's name (loopFor(storeyId) → [{ poly, seed? }] the level's room loops).
 */
export function markNewRooms(w, before, source, { names = [], loopsFor = null, note = '' } = {}) {
  const made = [];
  for (const id of safeIds(w, 'IFCSPACE')) {
    if (before.has(id)) continue;
    markRecognised(w, [id], source, note);
    made.push(id);
  }
  let named = 0;
  if (names.length && loopsFor && made.length) {
    const agg = new Map();
    for (const rid of safeIds(w, 'IFCRELAGGREGATES')) { const r = w.api.GetLine(w.mid, rid, false); for (const h of r.RelatedObjects || []) agg.set(h.value, r.RelatingObject?.value); }
    for (const id of made) {
      const st = agg.get(id), ps = w.readPset(id, 'CadCraft_Room');
      if (!st || !ps) continue;
      const seed = [Number(ps.SeedX) * w.unitMm, Number(ps.SeedY) * w.unitMm];
      const loop = (loopsFor(st) || []).find((lp) => inPoly(seed[0], seed[1], lp.poly));
      if (!loop) continue;
      const hit = names.find((n) => (n.storey === undefined || n.storey === st) && inPoly(n.at[0], n.at[1], loop.poly) && !(loop.holes || []).some((h) => inPoly(n.at[0], n.at[1], h)));
      if (!hit || !String(hit.name || '').trim()) continue;
      const l = w.touch(id); l.LongName = w.L(String(hit.name).trim().slice(0, 80)); w.write(l);
      named++;
    }
  }
  return { rooms: made, named };
}

export function setVerificationOp(guids, state, fields = {}) {
  const list = [...new Set(guids || [])];
  return op((w) => {
    if (!list.length) refuse('model.err.gone');
    const find = anyByGuid(w), out = [];
    for (const g of list) {
      const id = find(g);
      if (!id) refuse('model.err.gone');
      const prev = recordOf(w, id);
      if (state === '') { if (prev) write(w, id, null); }
      else write(w, id, makeRecord(state, fields, prev));
      out.push(id);
    }
    return { id: out[0] ?? null, ids: out, count: out.length };
  });
}

export function lintelNote(w, id) { const ps = w.readPset(id, INTERFACE_PSET); return ps && typeof ps.Lintel === 'string' ? ps.Lintel : ''; }
export function setLintelNoteOp(guids, note) {
  const list = [...new Set(guids || [])], text = String(note ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200);
  return op((w) => {
    if (!list.length) refuse('model.err.gone');
    const find = anyByGuid(w), out = [];
    for (const g of list) { const id = find(g); if (!id) refuse('model.err.gone'); w.upsertPset(id, INTERFACE_PSET, [['Lintel', 'IFCTEXT', text]]); out.push(id); }
    return { id: out[0] ?? null, ids: out };
  });
}

const projectId = (w) => safeIds(w, 'IFCPROJECT')[0] ?? null;
export function asBuiltOp({ by = '', on = '', note = '' } = {}) {
  return op((w) => {
    const pid = projectId(w);
    if (pid === null) refuse('problems.err.noproject');
    const sum = summary(verificationList(w).map((x) => x.record));
    w.upsertPset(pid, ASBUILT_PSET, statementRows(sum, { by, on, note }));
    return { id: null, ids: [], summary: sum };
  });
}
export function readAsBuilt(w) {
  const pid = projectId(w), ps = pid === null ? null : w.readPset(pid, ASBUILT_PSET);
  if (!ps || !ps.Format) return null;
  return { format: ps.Format, status: ps.Status || '', date: ps.Date || '', by: ps.By || '', elements: Number(ps.Elements) || 0, fieldVerified: Number(ps.FieldVerified) || 0,
    checked: Number(ps.Checked) || 0, unverified: Number(ps.Unverified) || 0, notStated: Number(ps.NotStated) || 0, statement: ps.Statement || '', note: ps.Note || '' };
}
