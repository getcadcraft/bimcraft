/* SPDX-License-Identifier: Apache-2.0 */
// phase-pens.js — the plan view's and the printed plan's pens per renovation phase (0.8 EG.59, bim_PART_2). DOM-free, no imports.
/** The plan's pens per phase (planview canvas: colour token, px weight, dash, `gap` = a sheet-coloured line under it; PDF: rgb 0–1, mm on paper, dash in mm). */
export const PHASE_PLAN = {
  existing: { token: '--ink-2', w: 1.25, dash: null, gap: false, rgb: [0.5, 0.52, 0.55], mm: 0.3, mmDash: null, fill: 0.82 },
  demolish: { token: '--layer-red', w: 1.75, dash: [6, 3], gap: true, rgb: [0.75, 0.22, 0.17], mm: 0.4, mmDash: [1.8, 1], fill: 0.93 },
  new: { token: '--ink', w: 2.5, dash: null, gap: false, rgb: [0, 0, 0], mm: 0.7, mmDash: null, fill: 0.55 },
};
