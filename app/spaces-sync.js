/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spaces-sync.js — what follows every model change for the room, area, opening and group tools (0.10, session bk-tools-a-10).
 * model-ops.js op() calls syncSpaces(writer) at the end of each op, inside the op's own journal, so what follows is part of the
 * SAME undo step as the change that caused it. In a file with none of these things each part returns at once.
 *
 *   1. model groups   an edited instance is copied to the others of its group; the walls made are settled like any drawn wall
 *   2. boundaries     area boundaries follow the walls they were picked from; areas are measured again; tags follow or go
 *   3. openings       shafts and vertical openings cut what is in their way now; the net quantities of what they cut
 */
import { syncGroups, settleGroups } from './model-groups.js';
import { syncBounds } from './room-bounds.js';
import { syncOpenings } from './slab-openings.js';
import { settleFor } from './model-ops.js';

export function syncSpaces(w) {
  const g = syncGroups(w);
  if (g.storeys.size) { settleFor(w, g.storeys); settleGroups(w, g.fresh || []); }
  const b = syncBounds(w);
  const o = syncOpenings(w);
  return { groups: g, bounds: b, openings: o };
}
