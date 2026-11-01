/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — IFC names; the words are in the language file (pic.*). */
/**
 * model-picture.js — BimCraft's side of pictures (0.8 D8.8, sessions d88_PART_3 and d88b_PART_3): a PNG / JPEG / WebP kept with the model, on a
 * level. The maths (place, scale by two points, move, turn, fade, lock, planes) is picture.js (lib/picture, rule 39). No DOM: bin/test-bimcraft.mjs
 * --picture runs it in Node. A picture is an IfcAnnotation ("Picture", Name = the file) in its level with the pset CadCraft_Picture: Name, Mime,
 * Width, Height (pixels), X, Y (the centre: plan mm on a level plane; along the line and height on a vertical plane), MmPerPx, Angle, Opacity,
 * Locked, Scaled, Hidden, and for a vertical plane Plane = "vertical", AX, AY, BX, BY (the section line in plan mm), Bytes.
 *
 * WHERE THE BYTES ARE (round 3). New form: an IfcDocumentReference (Identification "pic-<GlobalId>", Location "pictures/<GlobalId>.png", Name the
 * file) tied to the annotation by IfcRelAssociatesDocument; the bytes sit in picture-store.js and go into the model's bundle (.ccbundle) when it is
 * saved as one, so a 6 MB picture no longer makes an 8 MB IFC and edits stay fast. Old form (kept readable, "embedded"): the file as base64 text in
 * the pset (Chunks, Data0001…); a plain .ifc save embeds pictures up to 512 KB that way (embedTransient) and says what it leaves out.
 *
 *   readPictures(w, { data }) → [{ id, guid, storey, …picture, loc, ref, embedded, hasData, lost, bytesLen, bytes (only when data) }]
 *   addPicture({ storey, bytes, name, patch, embed }) → op       refuses over LIMITS.keepBytes, other types, and the 9th picture on a level (LIMITS.perLevel)
 *   changePicture(guid, patch) → op · removePictures(guids) → op
 *   transient(ed, fn) → { result, undo() }    a journaled change that is taken back after the file bytes were made (never an undo step)
 *   embedFor(maxBytes) / migrateFor() → fn for transient: embed new-form pictures ≤ maxBytes (plain IFC) / move old embedded ones to the bundle
 *   outside(w) → { n, bytes, names[], embedded, lost }    what a plain IFC would lose
 */
import { op } from './model-ops.js';
import { ModelWriter } from './model-write.js';
import { undoJournal } from './ifc-place.js';
import { ids, val, deleteLine } from './ifc-util.js';
import { sniff, makePicture, toBase64, fromBase64, chunks, join, LIMITS } from './picture.js';
import { locationOf } from './picture-pack.js';
import { putBytes, getBytes, hasBytes } from './picture-store.js';

export const PICTURE_PSET = 'CadCraft_Picture';
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const dataName = (i) => 'Data' + String(i + 1).padStart(4, '0');
const MOVES = ['x', 'y', 'mmPerPx', 'angle', 'scaled', 'plane', 'a', 'b'];

function rows(p) {
  const r = [['Name', 'IFCLABEL', p.name.slice(0, 255)], ['Mime', 'IFCLABEL', p.mime], ['Width', 'IFCINTEGER', p.w], ['Height', 'IFCINTEGER', p.h],
    ['X', 'IFCREAL', p.x], ['Y', 'IFCREAL', p.y], ['MmPerPx', 'IFCREAL', p.mmPerPx], ['Angle', 'IFCREAL', p.angle], ['Opacity', 'IFCREAL', p.opacity],
    ['Locked', 'IFCBOOLEAN', p.locked], ['Scaled', 'IFCBOOLEAN', p.scaled], ['Hidden', 'IFCBOOLEAN', p.hidden]];
  if (p.plane === 'vertical') r.push(['Plane', 'IFCLABEL', 'vertical'], ['AX', 'IFCREAL', p.a[0]], ['AY', 'IFCREAL', p.a[1]], ['BX', 'IFCREAL', p.b[0]], ['BY', 'IFCREAL', p.b[1]]);
  if (p.section) r.push(['Section', 'IFCLABEL', p.section]);
  return r;
}
const bool = (v) => v === true || v === 'T' || v === 1 || String(v).toLowerCase() === 'true';

/** annotation id → { loc, ref (document reference id), rel } for the references this file writes ("pic-…"). */
function docRefs(w) {
  const out = new Map();
  let rels = [];
  try { rels = ids(w.api, w.mid, 'IFCRELASSOCIATESDOCUMENT'); } catch (e) { return out; }
  for (const rid of rels) {
    const r = w.api.GetLine(w.mid, rid, false);
    const dref = r?.RelatingDocument?.value;
    if (!dref) continue;
    const d = w.api.GetLine(w.mid, dref, false);
    if (!/^pic-/.test(String(val(d?.Identification ?? d?.ItemReference) || ''))) continue;
    for (const h of r.RelatedObjects || []) out.set(h.value, { loc: String(val(d.Location) || ''), ref: dref, rel: rid });
  }
  return out;
}
function writeRef(w, annId, guid, mime, name) {
  const loc = locationOf(guid, mime), ident = w.T('IFCIDENTIFIER', 'pic-' + guid);
  const ref = w.v4
    ? w.make('IFCDOCUMENTREFERENCE', w.T('IFCURIREFERENCE', loc), ident, w.L(name), null, null)
    : w.make('IFCDOCUMENTREFERENCE', w.T('IFCLABEL', loc), ident, w.L(name));
  w.make('IFCRELASSOCIATESDOCUMENT', w.guid(), w.ownerHistory(), null, null, [w.H(annId)], w.H(ref));
  return loc;
}

export function readPictures(w, { data = false } = {}) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCANNOTATION'); } catch (e) { return out; }
  const so = w.storeyOf(), refs = docRefs(w);
  for (const id of list) {
    const ps = w.readPset(id, PICTURE_PSET);
    if (!ps) continue;
    const a = w.api.GetLine(w.mid, id, false);
    const vert = String(ps.Plane || '') === 'vertical';
    const pic = makePicture({ name: ps.Name, mime: ps.Mime, w: ps.Width, h: ps.Height, x: ps.X, y: ps.Y, mmPerPx: ps.MmPerPx, angle: ps.Angle, opacity: ps.Opacity, locked: bool(ps.Locked), scaled: bool(ps.Scaled), hidden: bool(ps.Hidden),
      ...(vert ? { plane: 'vertical', a: [ps.AX, ps.AY], b: [ps.BX, ps.BY], section: ps.Section || '' } : {}) });
    const n = Number(ps.Chunks) || 0, d = refs.get(id), loc = d?.loc || '';
    const embedded = n > 0, inStore = !!loc && hasBytes(loc);
    let bytes = null;
    if (data && embedded) {
      const parts = [];
      for (let i = 0; i < n; i++) parts.push(ps[dataName(i)] ?? '');
      const b = fromBase64(join(parts));
      bytes = b.length === Number(ps.Bytes) ? b : null;   // a cut or edited file: the picture is missing, said so by Problems
    } else if (data && inStore) {
      const b = getBytes(loc);
      bytes = b.length === Number(ps.Bytes) ? b : null;
    }
    out.push({ id, guid: String(val(a.GlobalId)), storey: so.get(id), ...pic, loc, ref: !!d, embedded, hasData: embedded || inStore, lost: !embedded && !inStore, bytesLen: Number(ps.Bytes) || 0, ...(data ? { bytes } : {}) });
  }
  return out;
}

export function addPicture({ storey, bytes, name = '', patch = {}, embed = false }) {
  const info = sniff(bytes);
  return op((w) => {
    if (!info) refuse('pic.err.type');
    if (bytes.length > LIMITS.keepBytes) refuse('pic.err.big');
    const st = w.byGuid(storey);
    if (!st) refuse('model.err.nolevel');
    if (readPictures(w).filter((p) => p.storey === st).length >= LIMITS.perLevel) refuse('pic.err.cap');
    const pic = makePicture({ name: name || 'picture', mime: info.mime, w: info.w, h: info.h, ...patch });
    const guid = val(w.guid());
    const sl = w.api.GetLine(w.mid, st, false);
    const id = w.make('IFCANNOTATION', guid, w.ownerHistory(), w.L(pic.name), null, w.L('Picture'), w.H(w.placeAt(sl.ObjectPlacement.value, 0, 0, 0, 0)), null, ...(/^IFC4X3/i.test(w.schema || '') ? ['USERDEFINED'] : []));   // i18n-ignore: IFC ObjectType (IFC4X3 adds PredefinedType)
    w.contain(id, st);
    if (embed) {
      const parts = chunks(toBase64(bytes));
      w.upsertPset(id, PICTURE_PSET, [...rows(pic), ['Bytes', 'IFCINTEGER', bytes.length], ['Chunks', 'IFCINTEGER', parts.length], ...parts.map((s, i) => [dataName(i), 'IFCTEXT', s])]);
    } else {
      const loc = writeRef(w, id, guid, info.mime, pic.name);
      putBytes(loc, bytes);   // a redo runs this again: the bytes are there for it
      w.upsertPset(id, PICTURE_PSET, [...rows(pic), ['Bytes', 'IFCINTEGER', bytes.length], ['Chunks', 'IFCINTEGER', 0]]);
    }
    return { id, ids: [id], guid };
  });
}

export function changePicture(guid, patch) {
  return op((w) => {
    const cur = readPictures(w).find((p) => p.guid === guid);
    if (!cur) refuse('pic.err.gone');
    if (cur.locked && Object.keys(patch).some((k) => MOVES.includes(k))) refuse('pic.err.locked');
    const next = makePicture({ ...cur, ...patch });
    w.upsertPset(cur.id, PICTURE_PSET, rows(next));
    return { id: cur.id, ids: [cur.id] };
  });
}

export function removePictures(guids) {
  return op((w) => {
    const all = readPictures(w).filter((p) => guids.includes(p.guid));
    const refs = docRefs(w), dead = all.map((p) => refs.get(p.id)?.ref).filter(Boolean);
    if (all.length) w.dropProduct(all.map((p) => p.id));
    for (const r of dead) { w.touch(r); deleteLine(w.api, w.mid, r); }
    return { id: null, ids: [] };
  });
}

// ---- file-time changes that are taken back (never an undo step) ----

/** Run `fn(w)` as a journaled change; `undo()` puts every line back. The model the person edits is unchanged once it has run. */
export function transient(ed, fn) {
  const w = new ModelWriter(ed.W, ed.api, ed.mid);
  const result = w.run(fn);
  return { result, undo() { undoJournal(ed.api, ed.mid, result.journal); ed.reindex?.(); } };
}
const dataRows = (bytes) => { const parts = chunks(toBase64(bytes)); return [['Chunks', 'IFCINTEGER', parts.length], ...parts.map((s, i) => [dataName(i), 'IFCTEXT', s])]; };

/** Plain IFC: new-form pictures up to maxBytes are written into the file as text. → { embedded, left: [names no bytes of which are in the file] } */
export const embedFor = (maxBytes = LIMITS.embedBytes) => (w) => {
  const out = { embedded: 0, left: [], lost: [] };
  for (const p of readPictures(w, { data: true })) {
    if (p.embedded) continue;
    if (!p.bytes) { out.lost.push(p.name); continue; }
    if (p.bytes.length > maxBytes) { out.left.push(p.name); continue; }
    w.upsertPset(p.id, PICTURE_PSET, dataRows(p.bytes)); out.embedded++;
  }
  return out;
};
/** Bundle: pictures embedded the old way move out of the IFC text (a reference is added when it has none); the bytes go to the store. */
export const migrateFor = () => (w) => {
  const out = { moved: 0 };
  const refs = docRefs(w);
  for (const p of readPictures(w, { data: true })) {
    if (!p.embedded || !p.bytes) continue;
    const loc = refs.get(p.id)?.loc || writeRef(w, p.id, p.guid, p.mime, p.name);
    putBytes(loc, p.bytes);
    w.upsertPset(p.id, PICTURE_PSET, [['Chunks', 'IFCINTEGER', 0]]);
    const d = w.defNamed(p.id, PICTURE_PSET), ps = w.touch(d.def), keep = [];
    for (const h of ps.HasProperties || []) {
      const prop = w.api.GetLine(w.mid, h.value, false);
      if (/^Data\d+$/.test(String(val(prop?.Name) || ''))) { w.touch(h.value); deleteLine(w.api, w.mid, h.value); } else keep.push(h);
    }
    ps.HasProperties = keep; w.write(ps);
    out.moved++;
  }
  return out;
};
/** Every picture the bundle should carry: [{ loc, bytes, name }] (after migrateFor). */
export function bundleFiles(w) {
  const refs = docRefs(w), out = [];
  for (const p of readPictures(w)) { const loc = refs.get(p.id)?.loc; const b = loc ? getBytes(loc) : null; if (b) out.push({ loc, bytes: b, name: p.name }); }
  return out;
}
/** What a plain .ifc would not hold: pictures whose bytes are outside the file. */
export function outside(w) {
  const list = readPictures(w, { data: true }).filter((p) => !p.embedded);
  const have = list.filter((p) => p.bytes);
  return { n: have.length, bytes: have.reduce((s, p) => s + p.bytes.length, 0), names: have.map((p) => p.name), small: have.filter((p) => p.bytes.length <= LIMITS.embedBytes).length, lost: list.length - have.length };
}
