/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-move.js — moving and turning placed library items (0.6 round 2, DC.58 "drawing comforts", session
 * bim-comforts_PART_2): a cabinet, a fixture, a piece of equipment placed from the library (ifc-place.js: every element with
 * a CadCraft_Placement set) moves to another spot on its level or turns about its insertion point, as ONE change for
 * IfcEditor.modelChange (one undo step, so it travels in Studio Live like every other model change). No DOM:
 * bin/test-bimcraft.mjs --comforts runs it in Node.
 *
 *   placedItems(w, storey?) → [{ id, guid, name, storey, x, y, z, rot, itemNumber }]   in the storey's own plan axes (mm, the
 *        plan the Draw view shows), rot in degrees from its X; z above the storey (kept when it moves)
 *   moveItems([{ guid, x?, y?, rot?, dx?, dy?, drot?, about? }]) → op   absolute (x, y, rot) or by (dx, dy, drot); `about` [x, y]
 *        turns it about that point instead of its own insertion point (several items turned together)
 *
 * Written as: the element's IfcLocalPlacement gets a new RelativePlacement (IfcAxis2Placement3D: the new spot, Z up, X turned)
 * relative to the same PlacementRelTo (its storey); the old one is deleted with what only it used. Nothing else changes: the
 * type, its geometry, the item number and every property set stay as placed.
 */
import { ModelWriter, scaleT } from './model-write.js';
import { val } from './ifc-util.js';

const D2R = Math.PI / 180;
const fail = (key) => { throw Object.assign(new Error(key), { key }); };

/** The library items placed in the model (or on one storey), where they stand in their storey's plan. */
export function placedItems(w, storey = null) {
  const out = [];
  for (const p of w.placements()) {
    if (storey !== null && p.storey !== storey) continue;
    const line = w.api.GetLine(w.mid, p.id, false);
    const lp = line?.ObjectPlacement?.value;
    if (!lp) continue;
    const rel = w.api.GetLine(w.mid, lp, false)?.PlacementRelTo?.value ?? null;
    const M = rel ? w.relMatrix(rel, lp) : scaleT(w.api.GetWorldTransformMatrix(w.mid, lp), w.unitMm);
    out.push({ id: p.id, guid: val(line.GlobalId), name: p.name, storey: p.storey, x: M[12], y: M[13], z: M[14], rot: Math.atan2(M[1], M[0]) / D2R, itemNumber: p.itemNumber, lp });
  }
  return out;
}

/** Move and / or turn placed items: one change. */
export function moveItems(list) {
  const moves = list.map((m) => ({ ...m }));
  return (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => moveItemsIn(w, moves));
}
/** The same inside a writer that is already running (model-modify.js). */
export function moveItemsIn(w, moves) {
  {
    const all = placedItems(w), ids = [];
    for (const m of moves) {
      const it = all.find((x) => x.guid === m.guid);
      if (!it) fail('comforts.err.noitem');
      let x = Number.isFinite(m.x) ? m.x : it.x + (Number(m.dx) || 0), y = Number.isFinite(m.y) ? m.y : it.y + (Number(m.dy) || 0);
      const drot = Number(m.drot) || 0;
      let rot = Number.isFinite(m.rot) ? m.rot : it.rot + drot;
      if (drot && Array.isArray(m.about)) {
        // turned about a shared point: the insertion point goes round it too
        const c = Math.cos(drot * D2R), s = Math.sin(drot * D2R), ox = x - m.about[0], oy = y - m.about[1];
        x = m.about[0] + ox * c - oy * s; y = m.about[1] + ox * s + oy * c;
      }
      if (![x, y, rot].every(Number.isFinite)) fail('comforts.err.noitem');
      rot = ((rot % 360) + 540) % 360 - 180;
      w.movePlacement(it.lp, x, y, it.z, Math.round(rot * 1e6) / 1e6);
      ids.push(it.id);
    }
    return { id: ids[0] ?? null, ids };
  }
}
