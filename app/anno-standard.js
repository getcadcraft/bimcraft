/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anno-standard.js: the building's annotation standard in its IFC file (0.10 BK.10, session bk-r3-scale-10): the paper heights of
 * text, dimensions, tags, room names, grid bubbles, view titles and schedule text (annoscale.js; the format cc-annotation-standard).
 * Kept on IfcProject as the property set CadCraft_AnnotationStandard { Heights: JSON }. A building with no such set draws with the
 * app's own sizes, as every building did before. No DOM.
 *
 *   readAnnoStandard(w) → standard            (empty when the file has none or it cannot be read)
 *   saveAnnoStandard(heights) → op            { kind: paper mm }; a kind left out (or null) goes back to the app's own; one undo step
 *       refuses with model.err.anno.height when a height is not a number from MIN_MM to MAX_MM
 */
import { op } from './model-ops.js';
import { ids } from './ifc-util.js';
import { KINDS, MIN_MM, MAX_MM, cleanStandard, emptyStandard, FORMAT, VERSION } from './annoscale.js';

export const ANNO_PSET = 'CadCraft_AnnotationStandard';
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];

export function readAnnoStandard(w) {
  try {
    const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, ANNO_PSET);
    if (!ps || !ps.Heights) return emptyStandard();
    const raw = JSON.parse(String(ps.Heights));
    return cleanStandard(raw && raw.format === FORMAT ? raw : null).standard;
  } catch (e) { return emptyStandard(); }
}
export function saveAnnoStandard(heights) {
  const H = {};
  for (const k of KINDS) { const v = heights ? heights[k] : null; if (v !== null && v !== undefined && v !== '') H[k] = Number(v); }
  return op((w) => {
    for (const k of Object.keys(H)) if (!(Number.isFinite(H[k]) && H[k] >= MIN_MM && H[k] <= MAX_MM)) throw Object.assign(new Error('model.err.anno.height'), { key: 'model.err.anno.height' });
    const pj = project(w), clean = cleanStandard({ heights: H }).standard;
    w.upsertPset(pj, ANNO_PSET, [['Heights', 'IFCTEXT', JSON.stringify({ format: FORMAT, version: VERSION, heights: clean.heights })]]);
    return { id: pj, ids: [], standard: clean };
  });
}
