/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pen-colors.js — a view pen's colour token as printed (the paper theme's values), and its line on paper (0.9 D8.12-B, session
 * `bim-views-09`). No imports, so res-sheets.js, model-pdf.js and pens.js can all use it.
 *   penHex(token) → '#rrggbb' (no token = black)   penMm(px) → mm (the default 1.75 px wall pen is 0.5 mm)   penDash(dash) → [mm…] | null
 */
const HEX = { '--ink': '#000000', '--ink-2': '#4d4d4d', '--layer-red': '#b3122e', '--layer-blue': '#1e48c8', '--layer-orange': '#a84a00', '--layer-magenta': '#9a1f86', '--layer-ochre': '#8a6200', '--layer-green': '#17703a', '--layer-violet': '#5b3cc4', '--layer-cyan': '#00707e' };
export const penHex = (tok) => HEX[tok] || '#000000';
export const penMm = (px) => Math.max(0.1, Math.min(2, px * 0.5 / 1.75));
export const penDash = (d) => (d === 'dash' ? [2.5, 1.2] : d === 'dot' ? [0.5, 0.9] : null);
