/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anno-scale-bim.js: BimCraft's adapter over the shared annotation-scale rule (0.10 BK.10, session bk-r3-scale-10; the rule itself
 * is annoscale.js, a byte copy of lib/annoscale/annoscale.js). State only, no DOM, no IFC: Node runs it. Everything in BimCraft
 * that sizes a text, a dimension, a tag, a room name, a grid bubble, a view title or a plan symbol asks here.
 *
 * The standard in force is the BUILDING's own (anno-standard.js keeps it in the file); a building with none uses the app's own
 * sizes (annoscale.js OWN_PT), so nothing changes until a person sets one. The office's standard (the Default Policies add-on,
 * policies all.anno.<kind>) is what a NEW building starts with (officeStandard(); bimcraft.js writes it on Create).
 *
 *   annoStandard() · setAnnoStandard(raw)       the building's standard (cleaned); onAnno(fn) → stop()
 *   annoPt(kind) → pt                           the font size a sheet / PDF text of that kind gets
 *   annoK(kind) → number                        what gaps that belong to that text grow by (1 = the app's own)
 *   annoMm(kind) → mm                           its paper height (capital height)
 *   setAnnoRatio(r) → previous · annoRatio()    the scale (1 : r) of the view being drawn; 0 = the view has no scale of its own
 *   planSymbolScale(units) → model mm per paper mm     a plan symbol's size: the view's scale, else 1:50 / 1:48 as before
 *   sceneAnno(ratio) → { ratio, em: { kind: model mm } } | null     what model-planview.js needs to draw text at its printed size
 *   officeStandard() → standard                 the office's paper heights (policies), empty when none is set
 */
import { KINDS, cleanStandard, emptyStandard, fontPt, factor, paperMm, modelFont, validRatio, sameStandard } from './annoscale.js';
import { policy } from './defaults-hook.js';
import { isMetric } from './display-units.js';

let standard = emptyStandard(), ratio = 0;
const listeners = new Set();
export const annoStandard = () => standard;
export function onAnno(fn) { listeners.add(fn); return () => listeners.delete(fn); }
export function setAnnoStandard(raw) {
  const next = cleanStandard(raw).standard;
  if (sameStandard(next, standard)) return false;
  standard = next;
  for (const fn of [...listeners]) { try { fn(standard); } catch (e) { /* a listener's failure never stops the others */ } }
  return true;
}
export const annoPt = (kind) => fontPt(kind, standard);
export const annoK = (kind) => factor(kind, standard);
export const annoMm = (kind) => paperMm(kind, standard);
export function setAnnoRatio(r) { const was = ratio; ratio = validRatio(Number(r)) ? Number(r) : 0; return was; }
export const annoRatio = () => ratio;
export const planSymbolScale = (units) => ratio || (isMetric(units) ? 50 : 48);
export function sceneAnno(r) {
  if (!validRatio(Number(r))) return null;
  return { ratio: Number(r), em: Object.fromEntries(KINDS.map((k) => [k, modelFont(k, Number(r), standard)])) };
}
export function officeStandard() {
  const heights = {};
  for (const k of KINDS) { const v = policy('all.anno.' + k); if (typeof v === 'number') heights[k] = v; }
  return cleanStandard({ heights }).standard;
}
