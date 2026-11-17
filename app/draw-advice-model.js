// SPDX-License-Identifier: Apache-2.0
/**
 * draw-advice-model.js: the drawing advice of a whole model, read out of its IFC (0.10 BK.73). BimCraft's Problems source
 * "Drawing advice" runs this when a file is opened and after every edit, so a warning is there again on reopen and goes when the
 * thing is put right. The rules are draw-advice.js (host-free); this file only reads.
 *   readAdvice(w) → [advice]   w = a ModelWriter over the open model (read only)
 */
import { modelAdvice } from './draw-advice.js';
import { readLevels } from './model-levels.js';
import { readWalls } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { readColumns } from './model-columns.js';
import { readRamps } from './model-ramps.js';
import { readGrids } from './model-grids.js';
import { readStairs } from './res-stair.js';
import { readDormers } from './res-dormer.js';
import { readPads } from './res-terrain.js';

const safe = (fn) => { try { return fn() || []; } catch (e) { return []; } };   // a file this build cannot read a part of still gets the rest
export function readAdvice(w) {
  const walls = safe(() => readWalls(w));
  return modelAdvice({
    levels: safe(() => readLevels(w)), walls, openings: safe(() => readOpenings(w, null, walls)), columns: safe(() => readColumns(w)),
    ramps: safe(() => readRamps(w)), grids: safe(() => readGrids(w)).filter((g) => g.own), stairs: safe(() => readStairs(w)), dormers: safe(() => readDormers(w)), pads: safe(() => readPads(w)),
  });
}
