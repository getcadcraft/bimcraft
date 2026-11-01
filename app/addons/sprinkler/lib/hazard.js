/* SPDX-License-Identifier: Apache-2.0 */
/**
 * hazard.js — the design criteria of a sprinkler system, as the person's own table (0.8 EG.3; session `mep_PART_2`).
 * The occupancy classes and their design density, design area, spacing and hose allowance are the TABLES and clauses of NFPA 13 (Standard for the
 * Installation of Sprinkler Systems — chapters on occupancy classification, design approaches and installation of sprinklers; check clause numbers
 * against the edition in force, they move between editions) or of the local standard (EN 12845, NBR 10897). They are not copied here as the standard's:
 * these defaults are the commonly quoted figures, LABELLED DEFAULTS FOR PROFESSIONAL REVIEW, and every number can be typed over.
 * Units inside: density mm/min (= L/min per m²), areas m², spacing and distances mm, hose allowance L/min.
 */
export const DEFAULT_HAZARDS = [
  { id: 'light',  label: 'Light',          density: 4.1,  area: 139, maxSpacing: 4600, maxCoverage: 20.9, hose: 380,  note: '0.10 gpm/ft² over 1,500 ft²' },
  { id: 'ord1',   label: 'Ordinary I',     density: 6.1,  area: 139, maxSpacing: 4600, maxCoverage: 12.1, hose: 950,  note: '0.15 gpm/ft² over 1,500 ft²' },
  { id: 'ord2',   label: 'Ordinary II',    density: 8.2,  area: 139, maxSpacing: 4600, maxCoverage: 12.1, hose: 950,  note: '0.20 gpm/ft² over 1,500 ft²' },
  { id: 'extra1', label: 'Extra I',        density: 12.2, area: 232, maxSpacing: 3700, maxCoverage: 9.3,  hose: 1900, note: '0.30 gpm/ft² over 2,500 ft²' },
  { id: 'extra2', label: 'Extra II',       density: 16.3, area: 232, maxSpacing: 3700, maxCoverage: 9.3,  hose: 1900, note: '0.40 gpm/ft² over 2,500 ft²' },
];
export const HAZARD_LABEL = 'Default design criteria: the commonly quoted figures, for professional review. Type the table of the standard in force.';
/** Other defaults, all labelled and all typable. */
export const DEFAULT_OPTIONS = {
  kFactor: 80.6,         // L/min per √bar — the 5.6 gpm/√psi head; a head's K is on its data sheet
  minWall: 100,          // mm — nearest a head may be to a wall
  minHeadBar: 0.5,       // bar — least pressure at any head (a maker's minimum; type the head's)
  vmax: 6,               // m/s — velocity above which the calculation warns
  C: 120,                // Hazen–Williams C for steel pipe (black, new); type the value the authority uses
  margin: 0,             // bar — safety margin on the supply
  minSize: '1', maxSize: '6',
  ceilingDrop: 100, pipeDrop: 400, riserLength: 3000,
  LD: { elbow90: 30, elbow45: 15, tee_branch: 60, tee_run: 20, gate: 8, check: 50 },   // equivalent length in pipe diameters (Crane TP-410 style L/D), labelled defaults
};
export function cleanHazards(list) {
  const out = [];
  for (const h of Array.isArray(list) ? list : []) {
    const n = (v) => Number(v);
    if (!h || !/^[a-z0-9_-]{1,20}$/i.test(String(h.id)) || !(n(h.density) > 0) || !(n(h.area) > 0) || !(n(h.maxSpacing) > 0) || !(n(h.maxCoverage) > 0)) continue;
    out.push({ id: String(h.id), label: String(h.label || h.id).slice(0, 40), density: n(h.density), area: n(h.area), maxSpacing: n(h.maxSpacing), maxCoverage: n(h.maxCoverage), hose: Math.max(0, n(h.hose) || 0), note: String(h.note || '').slice(0, 80) });
  }
  return out;
}
export const hazardById = (list, id) => list.find((h) => h.id === id) || null;
