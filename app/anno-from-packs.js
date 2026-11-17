/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anno-from-packs.js: a regulation pack's text heights offered to the annotation standard (booklet row BK.157 with BK.10, session bk-r3-regs).
 * The regs add-on (window.ccRegsLocal.standard, lib/local.js) works the paper heights out of the ticked packs' `conventions.text`; the dialog
 * "Annotation sizes" (anno-scale-ui.js) fills its boxes with them when the person asks, and the person saves them (or not): nothing is set
 * silently. A pack that gives a FONT size in points is turned into a capital height (estimated, and said so).
 *
 *   packSizes() → { heights: { kind: capital height mm }, from: { kind: pack id }, conflicts, names: { pack id: name }, estimated: [kind] } | null
 *       null when the add-on is off or no ticked pack has a text height that names a kind
 *   packNote(sizes, t) → one line saying which pack each size came from
 */
const kinds = (s) => Object.keys(s.heights);
export function packSizes() {
  let L = null;
  try { L = window.ccRegsLocal || null; } catch (e) { L = null; }
  if (!L) return null;
  const s = L.standard();
  if (!kinds(s).length) return null;
  const th = L.textHeights(), names = {};
  for (const x of th) names[x.pack] = x.packName;
  return { ...s, names, estimated: kinds(s).filter((k) => th.some((x) => x.kind === k && x.pack === s.from[k] && x.estimated)) };
}
export function packNote(sizes, t) {
  const packs = [...new Set(kinds(sizes).map((k) => sizes.names[sizes.from[k]]))].join(', ');
  return t(sizes.conflicts.length ? 'model.anno.pack.note.conflict' : 'model.anno.pack.note', { packs, n: sizes.conflicts.length }) + (sizes.estimated.length ? ' ' + t('model.anno.pack.est') : '');
}
