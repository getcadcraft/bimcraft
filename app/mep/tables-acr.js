/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tables-acr.js — copper tube for air conditioning and refrigeration (0.8 SU.888, session `sx-mep`). DOM-free. The refrigerant
 * lines of split, multi-split and VRF systems are drawn in this tube, named by its OUTSIDE diameter (not by a nominal size as
 * water tube is): "3/8" here is a tube 3/8 in across.
 *
 *   ACR tube, ASTM B280 (Seamless Copper Tube for Air Conditioning and Refrigeration Field Service), as tabled in the Copper
 *   Development Association's Copper Tube Handbook (ACR tube dimensions): annealed coils 1/4 to 1-5/8 in OD, and straight
 *   drawn lengths 3/8 to 3-1/8 in OD, whose walls are type L's. Outside diameter and wall in inches.
 *   The metric marks (Ø6.35, Ø9.52 …) are the same tube in millimetres as makers' manuals write them.
 *
 *   ACR_MATERIAL, ACR_CLASSES, ACR_DEFAULT_CLASS · isAcrMaterial(mat) · acrSizesFor(cls) (smallest first)
 *   acrPipeSize(cls, size) → { mat, cls, size, od, wall, id (inches, as mep/tables.js gives them), odMm, dn (= odMm, for sorting
 *   and nearest-size picks), nps (= od), label ('Ø9.52'), ref ('3/8', the inch name), metric: true } | null
 *   ACR_MM[size] → the metric mark · acrSizeOfMm('9.52') → '3/8'
 *
 * `metric: true` makes the app show the size as "Ø9.52 (3/8")" in every unit system (mep-ui.js sizeName), which is how the tube
 * is sold. Bends are drawn at one OD, as for other copper (a drawing choice, not a fitting dimension).
 */

// OD (in): [OD, annealed-coil wall, drawn wall]  — ASTM B280 (CDA Copper Tube Handbook); null = not made that way
export const ACR = {
  '1/4': [0.25, 0.03, null], '3/8': [0.375, 0.032, 0.03], '1/2': [0.5, 0.032, 0.035], '5/8': [0.625, 0.035, 0.04],
  '3/4': [0.75, 0.042, 0.042], '7/8': [0.875, 0.045, 0.045], '1-1/8': [1.125, 0.05, 0.05], '1-3/8': [1.375, 0.055, 0.055],
  '1-5/8': [1.625, 0.06, 0.06], '2-1/8': [2.125, null, 0.07], '2-5/8': [2.625, null, 0.08], '3-1/8': [3.125, null, 0.09],
};
/** The metric marks makers print for each tube (mm, two decimals as written in the trade). */
export const ACR_MM = {
  '1/4': '6.35', '3/8': '9.52', '1/2': '12.7', '5/8': '15.88', '3/4': '19.05', '7/8': '22.22', '1-1/8': '28.58', '1-3/8': '34.92',
  '1-5/8': '41.28', '2-1/8': '53.98', '2-5/8': '66.68', '3-1/8': '79.38',
};
export const acrSizeOfMm = (mm) => Object.keys(ACR_MM).find((k) => ACR_MM[k] === String(mm)) || null;

export const ACR_MATERIAL = 'acr';
export const ACR_CLASSES = { acr: ['coil', 'drawn'] };
export const ACR_DEFAULT_CLASS = { acr: 'coil' };
export const isAcrMaterial = (mat) => mat === ACR_MATERIAL;
const col = (cls) => (cls === 'coil' ? 1 : cls === 'drawn' ? 2 : 0);

/** The sizes made in a class (annealed coil or drawn lengths), smallest first. */
export function acrSizesFor(cls) {
  const i = col(cls);
  return i ? Object.keys(ACR).filter((k) => ACR[k][i] !== null) : [];
}

export function acrPipeSize(cls, size) {
  const r = ACR[String(size)], i = col(cls);
  if (!r || !i || r[i] === null) return null;
  const od = r[0], wall = r[i], odMm = Math.round(od * 25.4 * 1000) / 1000;
  return { mat: ACR_MATERIAL, cls, size: String(size), od, wall, id: od - 2 * wall, odMm, wallMm: wall * 25.4, dn: odMm, nps: od, label: 'Ø' + ACR_MM[size], ref: String(size), metric: true };   // i18n-ignore: a size mark
}
