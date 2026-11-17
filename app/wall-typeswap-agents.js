/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * wall-typeswap-agents.js: the type swap as assistant tools (0.10 BK.7, BK.16; session bk-typeswap-10), to the AI tool contract (rule 34).
 * The same op as the Swap type list and Properties › Wall type (wall-typeswap.js swapWallType): one undo step, the same report.
 *
 *   wall_types_list   read   every wall type a wall can be swapped to: key, name, thickness, LOD tag, how many of the given walls have it
 *   walls_swap_type   edit   many walls to one type in one undo step; returns the "what moved" report (walls, openings, rooms, LOD)
 *   env = { ed(), apply(label, op) }
 */
import { ToolError } from './host.js';
import { swapWallType, swapList, reportText } from './wall-typeswap.js';
import { planSwap } from './walls/typeswap.js';
import { readWalls } from './model-walls.js';
import { ModelWriter } from './model-write.js';
import { t } from './i18n.js';

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const GUIDS = { type: 'array', maxItems: 2000, items: { type: 'string', minLength: 1, maxLength: 64 } };
const r1 = (v) => Math.round(v * 10) / 10, m2 = (mm2) => Math.round(mm2 / 1e3) / 1e3;

export function typeSwapTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_found', 'No IFC model is open in BimCraft.', { next: ['Open a model, then try again.'] }); return ed; };
  const W = (ed) => new ModelWriter(ed.W, ed.api, ed.mid);
  return [
    {
      name: 'wall_types_list', group: 'read', untrusted: true, title: 'List wall types',
      description: 'The wall types walls_swap_type takes: the starter types and the project\'s own. Each has its key, name, total thickness in millimetres and its LOD tag (level of development: 100, 200, 300, 350, 400 or 500; null when the type has no tag: a generic type is 100 or 200, a specific build-up 300 or more). Give walls (GlobalIds from walls_list) to also get how many of them have each type now.',
      inputSchema: obj({ walls: { ...GUIDS, description: 'Optional wall GlobalIds; `current` then counts how many of them have each type.' } }),
      run: (a) => ({ types: swapList(W(E()), a.walls || []).map((r) => ({ key: r.key, name: r.name, thickness: r1(r.t), lod: r.lod, exterior: r.exterior, project: r.custom, current: r.current })) }),
    },
    {
      name: 'walls_swap_type', group: 'edit', rollbackPreview: true, title: 'Swap the type of walls',
      description: 'Change many walls (GlobalIds from walls_list) to one wall type (a key from wall_types_list) in one undo step, as the Swap type list does. Each wall keeps its location line, the walls joined to it follow at the corners, its doors and windows stay in it. Returns what moved: walls changed, thickness, walls that moved sideways to keep their location line, joined walls that followed, doors and windows hosted again or moved, each room whose area changed with its area before and after in square metres, and the LOD change. Walls that already have the type are left alone and counted. A door or window that no longer fits its wall refuses the whole swap; nothing changes then.',
      inputSchema: obj({ walls: { ...GUIDS, minItems: 1, description: 'The walls\' GlobalIds, from walls_list.' }, type: { type: 'string', minLength: 1, maxLength: 100, description: 'The wall type key to swap to, from wall_types_list (for example int-2x6 or a project type key).' } }, ['walls', 'type']),
      run: async (a) => {
        const ed = E(), w = W(ed);
        const guids = [...new Set(a.walls)];
        const types = swapList(w, guids);
        if (!types.some((x) => x.key === a.type)) throw new ToolError('not_found', 'No wall type with the key ' + a.type + '.', { next: ['Call wall_types_list for the keys.'] });
        const plan = planSwap(readWalls(w), guids, a.type);
        if (plan.missing.length === guids.length) throw new ToolError('not_found', 'None of these GlobalIds is a wall drawn with BimCraft\'s tools.', { next: ['Call walls_list for the walls of a level.'] });
        if (!plan.change.length) return { changed: 0, already: plan.same.length, missing: plan.missing.length, summary: ['No wall changed type: the walls already have this type.'] };
        let rep = null;
        const run = swapWallType(guids, a.type);
        try { await env.apply('swap the type of ' + plan.change.length + (plan.change.length > 1 ? ' walls' : ' wall'), (editor) => { const r = run(editor); rep = r.swap; return r; }); }
        catch (e) { throw new ToolError('failed', 'The swap was not made and nothing changed: ' + (e?.key ? t(e.key, e.fill || {}) : String(e?.message || e)), { next: ['Call walls_list to see the doors and windows in each wall.'] }); }
        if (!rep) return { changed: plan.change.length, already: plan.same.length, missing: plan.missing.length, summary: [] };
        const R = rep;
        return {
          changed: R.walls.changed, already: R.walls.same, missing: R.walls.missing,
          type: { key: R.to.key, name: R.to.name, thickness: r1(R.to.t), lod: R.to.lod },
          walls: { thicker: R.walls.thicker, thinner: R.walls.thinner, moved_sideways: R.walls.shifted, max_sideways_mm: r1(R.walls.maxShift), joined_walls_followed: R.walls.followed, from: R.walls.from.map((f) => ({ key: f.key, name: f.name, thickness: r1(f.t), lod: f.lod, count: f.count })) },
          openings: { hosted_again: R.openings.rehosted, doors: R.openings.doors, windows: R.openings.windows, moved: R.openings.moved, max_move_mm: r1(R.openings.maxMove), lost: R.openings.lost },
          rooms: { changed: R.rooms.changed, before_m2: m2(R.rooms.before), after_m2: m2(R.rooms.after), delta_m2: m2(R.rooms.delta), list: R.rooms.list.slice(0, 200).map((x) => ({ guid: x.guid, number: x.number, name: x.name, before_m2: m2(x.before), after_m2: m2(x.after), delta_m2: m2(x.delta) })), no_longer_enclosed: R.rooms.lost.map((x) => x.number), new: R.rooms.made.map((x) => x.number) },
          lod: { from: R.lod.from, to: R.lod.to, change: R.lod.kind },
          summary: reportText(R, { units: 'mm' }).map((l) => l.text),
        };
      },
    },
  ];
}
