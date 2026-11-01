/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fixtures.js — plumbing fixtures by kind, with what the drainage codes give each one. DOM-free.
 *
 *   FIXTURES[kind] → { ifc, uhc, dnMin, dfu, trapIn }
 *     ifc     IfcSanitaryTerminalTypeEnum of the fixture
 *     uhc     fixture units for drainage ("unidades Hunter de contribuição"), NBR 8160 (Sistemas prediais de esgoto sanitário),
 *             residential fixtures; dnMin its smallest fixture drain, DN (mm)
 *     dfu     drainage fixture units, International Plumbing Code 2021 Table 709.1 (private installation: a 1.6 gpf gravity-tank
 *             water closet is 3); trapIn its smallest trap / fixture drain (inches; a water closet's drain: 3 in.)
 *   FIXTURE_KINDS (in the order the editor lists them) · fixtureOf(kind) → the row or null
 */
export const FIXTURES = {
  wc:      { ifc: 'TOILETPAN', uhc: 6, dnMin: 100, dfu: 3, trapIn: 3 },
  lav:     { ifc: 'WASHHANDBASIN', uhc: 1, dnMin: 40, dfu: 1, trapIn: 1.25 },
  sink:    { ifc: 'SINK', uhc: 3, dnMin: 50, dfu: 2, trapIn: 1.5 },
  shower:  { ifc: 'SHOWER', uhc: 2, dnMin: 40, dfu: 2, trapIn: 1.5 },
  laundry: { ifc: 'SINK', uhc: 3, dnMin: 40, dfu: 2, trapIn: 1.5 },
  bath:    { ifc: 'BATH', uhc: 2, dnMin: 40, dfu: 2, trapIn: 1.5 },   // 0.8 EG.60: a bathtub, IPC 709.1 two drainage fixture units, 1.5 in. trap; NBR 8160 banheira, UHC 2, DN 40 (check against your edition)
};
export const FIXTURE_KINDS = Object.keys(FIXTURES);
export const fixtureOf = (kind) => FIXTURES[kind] || null;
