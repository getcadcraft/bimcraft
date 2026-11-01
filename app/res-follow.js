/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-follow.js — what of the residential set follows the walls (0.5 part 4, track RC). model-slabs.js syncDerived() calls
 * syncResidential(w, storey, { levels, L }) at its end — after every wall change and every level change — so foundations
 * (RC.2), countertops (RC.4), stairs (RC.3: the floor-to-floor height, the stairwell), framing (RC.9) and, as they land, the other generated elements are made again from the walls in the same undo step. No DOM.
 */
import { syncFoundations } from './res-foundation.js';
import { syncCountertops } from './res-counter.js';
import { syncStairs } from './res-stair.js';
import { syncElectrical } from './res-elec.js';
import { syncPlanSymbols } from './plan-symbols.js';   // 0.8 GH.3-G (gh3g2): plan symbols that snapped to a wall face follow it
import { syncFraming } from './res-framing.js';
import { syncTerrain } from './res-terrain.js';
import { syncColumns } from './model-columns.js';   // 0.6 DF.16 (bim-draw): columns to the level above follow its height
import { syncRamps } from './model-ramps.js';   // 0.6 DF.18 (bim-draw): so do ramps
import { syncDormers } from './res-dormer.js';   // 0.6 round 2 (bim-comforts_PART_2): dormers stand on the roof made again

export function syncResidential(w, storey, ctx = {}) {
  let n = 0;
  n += syncTerrain(w, storey, ctx);   // first: the building pad round the walls (and the grade, the paving) — footings step to it
  n += syncFoundations(w, storey, ctx);
  n += syncCountertops(w, storey);
  n += syncStairs(w, storey, ctx);
  n += syncElectrical(w, storey);   // outlets, switches and panels stay on their walls
  n += syncPlanSymbols(w, storey);   // so do plumbing plan symbols fixed to a wall face
  n += syncFraming(w, storey);   // last: walls, floors, roofs and their openings are final by now
  n += syncColumns(w, storey);
  n += syncRamps(w, storey);
  n += syncDormers(w, storey, ctx);
  return n;
}
