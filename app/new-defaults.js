/* SPDX-License-Identifier: Apache-2.0 */
/**
 * new-defaults.js : what a new building starts with, in one place (0.10 BK.74, "draw from day one": sensible defaults,
 * detail fills in later). No DOM, no engine, no imports: bin/test-bimcraft.mjs --dayone runs it in Node; the New building
 * dialog (bimcraft.js askNewBuilding, new-defaults-ui.js) shows it and new-model.js writes the sheet.
 *
 *   startDefaults({ metric }) → { metric, levels, height (mm), heightText, wallType, sheet: { number, paper, ratio, scale } }
 *   firstSheet({ metric, title }) → { number, title, paper, x, y, ratio }   the spec new-model.js newBuilding({ sheet }) takes:
 *        one sheet with the lowest level's plan in the middle of the drawing area, at a fixed building scale
 *
 * The first sheet is on the paper and at the scale a small building is drawn at where the person works: A3 at 1:100 in
 * metric units, Tabloid (11 x 17 in) at 1/8" = 1'-0" (1:96) otherwise. The plan of an empty level has nothing to draw, so the
 * sheet is empty until the first wall; from then on it shows the plan, like any sheet (res-sheets.js composeSheet).
 * The wall type is the Wall tool's own first type; the dialog lets the person pick another before the first wall.
 */

/** Paper sizes in mm, landscape (the two the first sheet uses; res-sheets.js PAPERS has them all and must agree). */
export const START_PAPERS = { a3: [420, 297], tabloid: [431.8, 279.4] };
/** The Wall tool's type when nothing was chosen yet (model-ui.js S.wall.typeKey starts on it; model-walls.js WALL_TYPES[0]). */
export const START_WALL_TYPE = 'ext-2x6';
export const START_LEVELS = 2;

export function startDefaults({ metric = false } = {}) {
  return {
    metric: !!metric,
    levels: START_LEVELS,
    height: metric ? 3000 : 3048,
    heightText: metric ? '3000 mm' : "10'-0\"",
    wallType: START_WALL_TYPE,
    sheet: { number: 'A-101', paper: metric ? 'a3' : 'tabloid', ratio: metric ? 100 : 96, scale: metric ? '1:100' : '1/8" = 1\'-0"' },
  };
}

/** The first sheet of a new building: `title` is the caller's words (the page's language file). */
export function firstSheet({ metric = false, title = '' } = {}) {
  const d = startDefaults({ metric }).sheet, [pw, ph] = START_PAPERS[d.paper];
  // the middle of the drawing area: the title block strip takes 28 mm at the bottom, the frame 10 mm all round
  return { number: d.number, title: String(title || '').slice(0, 120), paper: d.paper, x: Math.round(pw / 2 * 10) / 10, y: Math.round((ph + 28) / 2 * 10) / 10, ratio: d.ratio };
}
