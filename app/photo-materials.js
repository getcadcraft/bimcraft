/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — data written into the project's IFC and a programming-error vocabulary; the words a person reads are in the language file (paint.photo.*). */
/**
 * photo-materials.js — "material from a photo" for BimCraft (0.8 EG.62's BimCraft half, session `eg62`): a photo becomes a tiling
 * material of the OPEN FILE (colour map; roughness and relief are worked out again from it), painted like a library material.
 * DOM-free apart from the injected decoder; the Node test runs it on cc-ifc. The image processing is lib/photo-material
 * (photo-material.js here, a byte copy: tools/photo-material/sync.mjs).
 *
 * What the file carries (plain IFC, so other programs open it and the picture travels with the model):
 *   · the property set `CadCraft_PhotoMaterials` on the IfcProject: `Library` = JSON {version: 1, materials: [{id: 'photo-<hex>',
 *     name, size (metres one repeat covers), rough (0–1), bump (0–4), color ('#rrggbb' mean, what a flat view shows), png (base64
 *     of the 512 × 512 flattened, seamless colour tile)}]}. Only the colour tile is kept: roughness and the normal map are worked
 *     out from it again (flatten and seamless off, so the same tile), which keeps a material near half a megabyte.
 *   · a face painted with it carries `mat:` nothing new: paint-bim.js writes the id like any library id, and readPaint knows it
 *     because `refresh()` has put the file's materials into render/materials.js (setDocumentMaterials) first.
 *
 *   makeFromPhoto(photo, { name, size, crop, flatten, seamless, roughness, bump, id? }) → { record, maps, stats, notes }
 *   readRecords(api, mid) → [record]            what the file says (corrupt or unsupported entries dropped, `bad` counts them)
 *   writeOp(records) → op for IfcEditor.modelChange      replaces the file's list (one undo step)
 *   refresh(models, decode) → Promise            models = [{api, mid}]; puts the file's materials in the registry, decodes the tiles
 *   entryOf(record, pixels | null) → registry entry
 */
import { ModelWriter } from './model-write.js';
import { ids, val } from './ifc-util.js';
import { fromPhoto, SIZE } from './photo-material.js';
import { pngBytes } from './render/pt-output.js';
import { setDocumentMaterials, documentMaterials } from './render/materials.js';

export const PSET = 'CadCraft_PhotoMaterials';
export const ID_RE = /^photo-[0-9a-f]{8}$/;
export const MAX_MATERIALS = 40;   // a file is not a texture library: ~0.5 MB each

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export function toBase64(b) {
  let s = '';
  for (let i = 0; i < b.length; i += 3) {
    const n = (b[i] << 16) | ((b[i + 1] || 0) << 8) | (b[i + 2] || 0);
    s += B64[(n >> 18) & 63] + B64[(n >> 12) & 63] + (i + 1 < b.length ? B64[(n >> 6) & 63] : '=') + (i + 2 < b.length ? B64[n & 63] : '=');
  }
  return s;
}
export function fromBase64(s) {
  const clean = String(s).replace(/=+$/, ''), out = new Uint8Array(Math.floor(clean.length * 3 / 4));
  let o = 0, acc = 0, bits = 0;
  for (const ch of clean) {
    const v = B64.indexOf(ch);
    if (v < 0) throw new Error('bad base64');
    acc = (acc << 6) | v; bits += 6;
    if (bits >= 8) { bits -= 8; out[o++] = (acc >> bits) & 255; }
  }
  return out.subarray(0, o);
}

const hex2 = (n) => Math.round(n).toString(16).padStart(2, '0');
const rgbOf = (im) => { const o = new Uint8Array(im.w * im.h * 3); for (let i = 0, j = 0; i < im.w * im.h; i++) { o[j++] = im.data[i * 4]; o[j++] = im.data[i * 4 + 1]; o[j++] = im.data[i * 4 + 2]; } return o; };
export const newId = (rand = Math.random) => 'photo-' + Array.from({ length: 8 }, () => Math.floor(rand() * 16).toString(16)).join('');

/** One photo (raw pixels, photo-material.js decodePhoto) → the record for the file, plus the three maps for showing it. */
export function makeFromPhoto(photo, { name = '', size = 1, id = null, ...opts } = {}) {
  const tile = Math.min(100, Math.max(0.01, Number.isFinite(size) ? size : 1));
  const r = fromPhoto(photo, opts);
  const title = String(name || 'Photo material').trim().slice(0, 80) || 'Photo material';
  const rough = Math.round((Number.isFinite(opts.roughness) ? Math.min(1, Math.max(0, opts.roughness)) : 0.65) * 100) / 100;
  const bump = Math.round((Number.isFinite(opts.bump) ? Math.min(4, Math.max(0, opts.bump)) : 1) * 100) / 100;
  const record = { id: id || newId(), name: title, size: tile, rough, bump, color: r.stats.meanColor, png: toBase64(pngBytes(r.color.w, r.color.h, rgbOf(r.color))) };
  return { record, maps: { color: r.color, roughness: r.roughness, normal: r.normal }, stats: r.stats, notes: r.notes };
}

function clean(m) {
  if (!m || typeof m !== 'object' || !ID_RE.test(m.id || '')) return null;
  const name = String(m.name || '').trim().slice(0, 80), size = Number(m.size), rough = Number(m.rough), bump = Number(m.bump);
  if (!name || !(size >= 0.01 && size <= 100) || !(rough >= 0 && rough <= 1) || !(bump >= 0 && bump <= 4) || !/^#[0-9a-f]{6}$/i.test(m.color || '') || typeof m.png !== 'string' || !/^[A-Za-z0-9+/]+=*$/.test(m.png) || m.png.length > 4_000_000) return null;
  return { id: m.id, name, size, rough, bump, color: m.color, png: m.png };
}

/** What the file says. Unknown versions and broken entries are dropped and counted, never guessed at. */
export function readRecords(api, mid) {
  const out = { records: [], bad: 0 };
  for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false);
    const d = r?.RelatingPropertyDefinition?.value ? api.GetLine(mid, r.RelatingPropertyDefinition.value, false) : null;
    if (!d || val(d.Name) !== PSET) continue;
    for (const h of d.HasProperties || []) {
      const q = api.GetLine(mid, h.value, false);
      if (val(q?.Name) !== 'Library') continue;
      let doc; try { doc = JSON.parse(String(val(q.NominalValue))); } catch { out.bad++; continue; }
      if (!doc || doc.version !== 1 || !Array.isArray(doc.materials)) { out.bad++; continue; }
      for (const m of doc.materials) { const c = clean(m); if (c && !out.records.some((x) => x.id === c.id)) out.records.push(c); else out.bad++; }
    }
  }
  return out;
}

/** Replace the file's list (the whole list, so removing is writing less). One undo step through IfcEditor.modelChange. */
export function writeOp(records) {
  const list = records.map(clean);
  if (list.some((x) => !x)) throw new Error('a photo material is not valid');
  if (list.length > MAX_MATERIALS) throw new Error('too many photo materials');
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid), project = ids(w.api, w.mid, 'IFCPROJECT')[0];
    return w.run(() => {
      if (!project) throw new Error('a project is required');
      w.upsertPset(project, PSET, [['Library', 'IFCTEXT', JSON.stringify({ version: 1, materials: list })]]);
      return { ids: [project] };
    });
  };
}

/** The registry entry. `pixels` ({w, h, data: RGBA}) = the decoded colour tile, or null while it is still being decoded. */
export function entryOf(rec, pixels = null) {
  const side = [rec.size, rec.size];
  return {
    id: rec.id, cat: 'mine', name: rec.name, color: rec.color, rough: rec.rough, metal: 0, glass: 0, tex: null, bump: Math.min(1, rec.bump / 2), size: side, photo: { size: side, pixels },
    // the baked layers the path tracer reads (RENDER-SPEC § 6.6): base = the tile, data = roughness / metal packed, normal worked out again from the tile
    layers(n = 512) {
      if (!pixels) return null;
      const again = fromPhoto({ w: pixels.w, h: pixels.h, data: pixels.data }, { flatten: false, seamless: false, roughness: rec.rough, bump: rec.bump });
      return { base: again.color.data, data: again.roughness.data, normal: again.normal.data, emit: null, size: side, w: again.color.w, h: again.color.h, n };
    },
  };
}

const perModel = new Map();   // `${mid}` → {sig, entries, records}
const decoded = new Map();    // record.id → pixels | null (null = could not be decoded)
let listeners = [], decoder = null;
export const onDecoded = (fn) => { listeners.push(fn); return () => { listeners = listeners.filter((f) => f !== fn); }; };
/** The page's PNG decoder (photo-material.js decodePhoto), so ensure() can draw the tiles without being handed one. */
export const setDecoder = (fn) => { decoder = fn; };

function publish() {
  const all = [];
  for (const v of perModel.values()) for (const e of v.entries) if (!all.some((x) => x.id === e.id)) all.push(e);
  // library entries that are not ours stay: setDocumentMaterials replaces the whole list
  const others = documentMaterials().filter((m) => !ID_RE.test(m.id));
  setDocumentMaterials([...others, ...all]);
}

/** One model's materials into the registry, synchronously (ids, names and colours are enough for readPaint and flat views). → changed. */
function take(api, mid) {
  const key = String(mid), { records } = readRecords(api, mid);
  const sig = JSON.stringify(records.map((r) => [r.id, r.name, r.size, r.rough, r.bump, r.png.length]));
  if (perModel.get(key)?.sig === sig) return false;
  if (!records.length && !perModel.has(key)) return false;
  perModel.set(key, { sig, entries: records.map((r) => entryOf(r, decoded.get(r.id) || null)), records });
  return true;
}
let drawing = null;
function drawMissing(decode) {
  if (!decode) return Promise.resolve();
  const todo = [];
  for (const v of perModel.values()) for (const r of v.records) if (!decoded.has(r.id)) todo.push(r);
  if (!todo.length) return drawing || Promise.resolve();
  const run = (async () => {
    for (const r of todo) { try { decoded.set(r.id, await decode(fromBase64(r.png))); } catch { decoded.set(r.id, null); } }
    for (const v of perModel.values()) v.entries = v.records.map((r) => entryOf(r, decoded.get(r.id) || null));
    publish();
    for (const fn of listeners) { try { fn(); } catch { /* the listener's own */ } }
  })();
  drawing = run.finally(() => { if (drawing === run) drawing = null; });
  return drawing;
}
/** Called by readPaint before it looks at ids: this model's photo materials are known to the registry, the tiles drawn when a decoder is set. */
export function ensure(api, mid) {
  if (take(api, mid)) publish();
  void drawMissing(decoder);
}
/**
 * Every open model's photo materials, with models that went away forgotten; resolves when the tiles are decoded.
 * decode(bytes) → Promise<{w, h, data: RGBA}> (the browser's PNG decode; tests pass their own).
 */
export async function refresh(models, decode = decoder) {
  const live = new Set();
  let changed = false;
  for (const m of models) { live.add(String(m.mid)); if (take(m.api, m.mid)) changed = true; }
  for (const k of [...perModel.keys()]) if (!live.has(k)) { perModel.delete(k); changed = true; }
  if (changed) publish();
  await drawMissing(decode);
}

/** Show a freshly made material at once (its pixels are in hand: no decode). */
export function remember(record, colorImage) { decoded.set(record.id, { w: colorImage.w, h: colorImage.h, data: colorImage.data }); }
export const SIDE = SIZE;
