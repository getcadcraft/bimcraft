/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — decisions and numbers; the words are the host's (pic.paste.* keys in picture-ui.js). */
/**
 * picture-paste.js — paste a copied area as a picture at its true size (0.8 D8.15). DOM-free: node bin/test-bimcraft.mjs --picture runs it.
 * MarkupCraft's Copy area tool puts a PNG on the system clipboard and a clip in localStorage "cadcraft.areaclip" (areaclip.js, a byte copy:
 * never edit it here). BimCraft pastes it through the pictures it already has (picture-ui.js, D8.8): one more picture on the level's plan.
 *
 * Which paste wins (the least surprising rule, one place): BimCraft's own clipboard (clipboard.js, "bimcraft.clipboard") and the area clip
 * each carry the time they were copied; the newer one is what Ctrl+V and Edit › Paste paste. An area clip counts only while it is recent
 * (AREA_MAX_AGE, the window areaclip.js's sameImage uses for the system clipboard too), so last week's copy never comes back by surprise.
 * Ctrl+V can also see the system clipboard (the browser's paste event; Edit › Paste cannot read it without asking): a picture there whose
 * pixel size is the area clip's (sameImage) is that area, sized; any other picture there becomes a picture like Insert picture… (not
 * scaled yet); no picture there → the newer of the two clips.
 *
 *   readAreaClip(storage)                         → clean clip | null (untrusted: cleanAreaClip)
 *   areaRecent(area, now)                         → copied within AREA_MAX_AGE?
 *   areaWins(area, own, now)                      → a recent area clip newer than BimCraft's own clip (own: clipboard.js clip | null)
 *   route({ area, own, ownOk, image, now })       → 'image-area' | 'image' | 'area' | 'own' | 'none'   (image: { w, h } | null; ownOk: BimCraft's paste can act)
 *   pasteSize(area, w)                            → { mmPerPx, scaled, use: 'real' | 'paper' } for a picture `w` pixels wide (after any shrink)
 *   pastePatch(area, info, at)                    → makePicture patch: centred on `at`, the area's size, its overlay opacity
 *   pngBytes(src)                                 → Uint8Array from the clip's PNG data URL
 *   areaName(area)                                → the picture's name (the clip's label, else its sheet, else '')
 */
import { cleanAreaClip, sameImage, sizeMm, AREA_KEY } from './areaclip.js';

export const AREA_MAX_AGE = 6 * 3600 * 1000;   // the same 6 hours as areaclip.js sameImage

export function readAreaClip(storage) {
  try { const s = storage?.getItem(AREA_KEY); return s ? cleanAreaClip(s) : null; } catch (e) { return null; }
}
const when = (s) => { const v = Date.parse(s || ''); return Number.isFinite(v) ? v : NaN; };
export function areaRecent(area, now = Date.now()) {
  const t = when(area?.at);
  return Number.isFinite(t) && now - t >= -60000 && now - t <= AREA_MAX_AGE;
}
/** A recent area clip newer than BimCraft's own clip (an own clip with no readable time loses to it). */
export function areaWins(area, own, now = Date.now()) {
  if (!area || !areaRecent(area, now)) return false;
  if (!own) return true;
  const o = when(own.copiedAt);
  return !Number.isFinite(o) || when(area.at) > o;
}
/** What a paste does. `image`: the system clipboard's picture (Ctrl+V only), null when it holds none or could not be read. */
export function route({ area = null, own = null, ownOk = false, image = null, now = Date.now() } = {}) {
  if (image) return area && sameImage(area, image.w, image.h, { now, maxAgeMs: AREA_MAX_AGE }) ? 'image-area' : 'image';
  if (areaWins(area, own, now)) return 'area';
  return ownOk ? 'own' : 'none';
}
/** The size: true size with the sheet's drawing scale (real), else paper size and "not scaled yet" (the Scale step follows). */
export function pasteSize(area, w) {
  const real = sizeMm(area, { use: 'real' });
  const mm = real || sizeMm(area, { use: 'paper' });
  return { mmPerPx: mm[0] / Math.max(1, w), scaled: !!real, use: real ? 'real' : 'paper' };
}
/** info: { w, h } of the picture as kept (picture-ui.js may bring a big one down: the size in mm stays the area's). at: [x, y] plan mm. */
export function pastePatch(area, info, at) {
  const s = pasteSize(area, info.w);
  return { x: at[0], y: at[1], mmPerPx: s.mmPerPx, scaled: s.scaled, ...(area.overlay ? { opacity: area.overlay.opacity } : {}) };
}
export function pngBytes(src) {
  const b64 = String(src || '').replace(/^data:image\/png;base64,/, '');
  if (typeof atob === 'function') { const t = atob(b64); return Uint8Array.from(t, (c) => c.charCodeAt(0)); }
  return new Uint8Array(Buffer.from(b64, 'base64'));   // Node (tests)
}
export const areaName = (area) => String(area?.label || area?.sheet || '').slice(0, 120);
