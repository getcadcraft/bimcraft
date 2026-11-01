/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — file-format code; the words are in the language file (pic.*). */
/**
 * picture-store.js — the bytes of pictures kept OUTSIDE the IFC text (0.8 D8.8 round 3, session d88b_PART_3). A picture in the model is an
 * IfcAnnotation + an IfcDocumentReference whose Location is a relative name in the model's bundle ("pictures/<guid>.png"); the bytes live here,
 * keyed by that name, for as long as the page is open. An undo never touches this store, so a redo gives the picture back. A bundle opened
 * fills it (adoptFromBundle); Save as bundle writes it out (model-picture.js bundleFiles). DOM-free; no model imports.
 *
 *   putBytes(loc, bytes) · getBytes(loc) → Uint8Array | null · hasBytes(loc) · forget(loc) · clearAll()
 *   adoptFromBundle(index) → Promise<n>      index: lib/bundle ZipIndex; every pictures/* entry (≤ keepBytes each, safe names) goes in
 */
import { isLocation } from './picture-pack.js';
import { LIMITS } from './picture.js';

const store = new Map();
export const putBytes = (loc, bytes) => { if (loc && bytes?.length) store.set(loc, bytes); };
export const getBytes = (loc) => store.get(loc) || null;
export const hasBytes = (loc) => store.has(loc);
export const forget = (loc) => { store.delete(loc); };
export const clearAll = () => store.clear();
export const storeSize = () => { let n = 0; for (const b of store.values()) n += b.length; return n; };

export async function adoptFromBundle(index) {
  let n = 0;
  for (const name of index.names()) {
    if (!isLocation(name)) continue;
    try { putBytes(name, await index.read(name, { max: LIMITS.keepBytes })); n++; } catch (e) { /* a cut or oversize entry: that picture reads as missing */ }
  }
  return n;
}
