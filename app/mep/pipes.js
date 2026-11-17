/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pipes.js — every pipe the Pipe tool draws, from one place: the US tables (mep/tables.js, a copy of CadCraft's Piping
 * add-on: steel, copper, PVC Schedule 40 / 80, PEX) and the Brazilian ones (mep/tables-br.js: PVC soldável NBR 5648, PVC
 * esgoto NBR 5688). DOM-free. Which standard a run follows comes from its material.
 *
 *   MATERIALS, CLASSES, DEFAULT_CLASS · sizesFor(mat, cls) (smallest first) · pipeSize(mat, cls, size) (as tables.js; a Brazilian
 *   size has metric: true and its label) · bendRadius(p) (inches) · drainSlope(p) → the smallest slope its standard allows a
 *   horizontal drain of that size (IPC 2021 Table 704.1 for the US tables, NBR 8160 for the Brazilian ones)
 *   standardOf(mat) → 'us' | 'br' · SYSTEM_MATERIALS[std][system] → the usual material of a system under a standard
 *   BR_MAX_VELOCITY (m/s): the speed Brazilian water pipes are sized to by flow (NBR 5626)
 *   projectStandard() → 'us' | 'br' | null · setProjectStandard(std) (0.8 SU.955: the model's plumbing standard; null = not set, a run
 *   follows its material as before) · stdFor(mat) → the standard a NEW run starts under: the project's, else the material's
 */
import * as US from './tables.js';
import { BR_MATERIALS, BR_CLASSES, BR_DEFAULT_CLASS, brSizesFor, brPipeSize, brDrainSlope, isBrMaterial } from './tables-br.js';
export { BR_MAX_VELOCITY } from './tables-br.js';
import { ACR_MATERIAL, ACR_CLASSES, ACR_DEFAULT_CLASS, acrSizesFor, acrPipeSize, isAcrMaterial } from './tables-acr.js';   // 0.8 SU.888 (sx-mep): refrigerant tube by OD
import { isSpecMaterial, specSizesFor, specPipeSize, specBendRadius, specMaterial, onSpecsChanged, modelSpecs } from './pipe-specs.js';   // 0.9.1 #1499: a person's own pipe specs (material `spec:<id>`, no class)

export const MATERIALS = [...US.MATERIALS, ...BR_MATERIALS, ACR_MATERIAL];   // 0.8 SU.888 (sx-mep): + acr
export const CLASSES = { ...US.CLASSES, ...BR_CLASSES, ...ACR_CLASSES };
export const DEFAULT_CLASS = { ...US.DEFAULT_CLASS, ...BR_DEFAULT_CLASS, ...ACR_DEFAULT_CLASS };
export const standardOf = (mat) => (isBrMaterial(mat) ? 'br' : 'us');
/** The materials that are tables of this file (never a person's spec). */
export const TABLE_MATERIALS = MATERIALS.slice();
// 0.9.1 #1499: the open model's pipe specs join the lists as materials `spec:<id>` with the one class '' (and leave them when the
// model's specs change), so every picker that lists MATERIALS / CLASSES[mat] offers them with nothing else to learn.
function useSpecs(specs) {
  for (let i = MATERIALS.length - 1; i >= 0; i--) if (isSpecMaterial(MATERIALS[i])) { delete CLASSES[MATERIALS[i]]; delete DEFAULT_CLASS[MATERIALS[i]]; MATERIALS.splice(i, 1); }
  for (const s of specs) { if (!s.sizes.length) continue; const m = specMaterial(s.id); MATERIALS.push(m); CLASSES[m] = ['']; DEFAULT_CLASS[m] = ''; }
}
onSpecsChanged(useSpecs);
useSpecs(modelSpecs());

export const PLUMBING_STANDARDS = ['us', 'br'];
let PROJECT_STD = null;   // 0.8 SU.955: set from the model by mep/standard.js on every refresh
export const projectStandard = () => PROJECT_STD;
export function setProjectStandard(std) { PROJECT_STD = PLUMBING_STANDARDS.includes(std) ? std : null; }
export const stdFor = (mat) => PROJECT_STD || standardOf(mat);

/** The usual material of each system: the US ones as before; in Brazil PVC soldável for water, PVC esgoto for drains and vents
 *  (other systems keep steel: there is no Brazilian table here for them). */
export const SYSTEM_MATERIALS = {
  us: { cw: 'copper', hw: 'copper', hwr: 'copper', san: 'pvc', vent: 'pvc', storm: 'pvc', chw: 'steel', hhw: 'steel', gas: 'steel', fire: 'steel', refl: 'acr', refg: 'acr', cond: 'pvc' },   // 0.8 SU.888 (sx-mep): refl, refg, cond
  br: { cw: 'pvc-sold', hw: 'copper', hwr: 'copper', san: 'pvc-esg', vent: 'pvc-esg', storm: 'pvc-esg', chw: 'steel', hhw: 'steel', gas: 'steel', fire: 'steel', refl: 'acr', refg: 'acr', cond: 'pvc-sold' },   // 0.8 SU.888 (sx-mep): refl, refg, cond
};

const nominalOf = (mat, cls, s) => { const p = pipeSize(mat, cls, s); return p ? (p.metric ? p.dn : p.nps * 25.4) : Infinity; };
/** The sizes made in a material and class, smallest first (the US tables list "1", "2" … before "1/2"). */
export function sizesFor(mat, cls) {
  if (isSpecMaterial(mat)) return specSizesFor(mat);   // 0.9.1 #1499: only that spec's sizes, smallest first
  if (isBrMaterial(mat)) return brSizesFor(mat, cls);
  if (isAcrMaterial(mat)) return acrSizesFor(cls);   // 0.8 SU.888 (sx-mep)
  return US.sizesFor(mat, cls).slice().sort((a, b) => nominalOf(mat, cls, a) - nominalOf(mat, cls, b));
}
export function pipeSize(mat, cls, size) {
  if (isSpecMaterial(mat)) return specPipeSize(mat, size);   // 0.9.1 #1499
  if (isAcrMaterial(mat)) return acrPipeSize(cls, size);   // 0.8 SU.888 (sx-mep)
  return isBrMaterial(mat) ? brPipeSize(mat, cls, size) : US.pipeSize(mat, cls, size);
}
/** The bend radius elbows are drawn with (inches): the US rule; PVC of the Brazilian tables at one outside diameter. */
export function bendRadius(p) {
  if (p.spec) return specBendRadius(p);   // 0.9.1 #1499: the spec's elbow factor × OD
  return p.metric ? p.od : US.bendRadius(p);
}
export function drainSlope(p) {
  if (!p || isAcrMaterial(p.mat) || p.spec) return null;   // 0.9.1 #1499: a spec names no plumbing code, so no code minimum   // 0.8 SU.888 (sx-mep): refrigerant tube is not a drain
  return p.metric ? brDrainSlope(p.dn) : US.minDrainSlope(p.nps);
}
