/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * autodim-agents.js — dimension a plan by rules as an assistant tool (0.8 EG.20, session bim-model_PART_4), to the AI tool contract (rule 34).
 * The same engine as the Dimension the plan button (autodim.js): the dimensions are ordinary wall dimensions and one undo step.
 *
 *   plan_dimension   edit   overall + rows along the outside edge + doors and windows on a level; preview: true counts and changes nothing
 *   env = { ed(), apply(label, op), levels() → [{ guid, id, name }] }
 */
import { ToolError } from './host.js';
import { planAutoDimensions } from './autodim.js';
import { readWallDimensions, saveWallDimensions } from './wall-dimensions.js';
import { readWalls } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { ModelWriter } from './model-write.js';

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });

export function autodimTools(env) {
  return [{
    name: 'plan_dimension', group: 'edit', rollbackPreview: true, title: 'Dimension a plan by rules',
    description: 'Dimensions the outside of one level\'s plan by rules, as saved wall dimensions that follow the walls: the overall size each way, a row of dimensions along each outside edge (wall ends, walls that meet the edge, and the doors and windows in it). Dimensions already there are not made twice. The inside of the building and grid lines are not dimensioned. preview: true returns the counts and changes nothing. One undo step.',
    inputSchema: obj({
      level: { type: 'string', description: 'The level\'s GlobalId.', minLength: 1, maxLength: 64 },
      overall: { type: 'boolean', description: 'The overall size each way (default true).' },
      chains: { type: 'boolean', description: 'A row along each outside edge (default true).' },
      openings: { type: 'boolean', description: 'Include the doors and windows in the rows (default true).' },
      preview: { type: 'boolean', description: 'Count only; change nothing (default false).' },
    }, ['level']),
    outputSchema: obj({ dimensions: { type: 'integer', minimum: 0, maximum: 2000 }, counts: { type: 'object' }, notes: { type: 'array', maxItems: 20, items: { type: 'string' } } }),
    run: async (a) => {
      const ed = env.ed();
      if (!ed) throw new ToolError('not_found', 'No IFC model is open in BimCraft.', { next: ['Open a model, then try again.'] });
      const level = (env.levels?.() || []).find((l) => l.guid === a.level);
      if (!level) throw new ToolError('not_found', 'No level with GlobalId ' + a.level + '.', { next: ['Get the level ids from model_describe.'] });
      const w = new ModelWriter(ed.W, ed.api, ed.mid);
      const walls = readWalls(w), openings = readOpenings(w, null, walls);
      const view = 'plan:' + level.guid;
      const existing = readWallDimensions(w).filter((d) => d.view === view && !d.issue).map((d) => ({ refs: d.refs, axis: d.axis }));
      const r = planAutoDimensions({ walls, openingRows: openings, level: level.id, view, existing, overall: a.overall !== false, chains: a.chains !== false, openings: a.openings !== false });
      if (!a.preview && r.specs.length) {
        try { await env.apply('dimension the plan', saveWallDimensions(r.specs.map(({ kind, side, ...sp }) => ({ ...sp, level: level.guid })))); }
        catch (e) { throw new ToolError('failed', String(e?.message || e), { next: [] }); }
      }
      return { dimensions: r.specs.length, counts: r.counts, notes: r.notes.map((n) => n.text) };
    },
  }];
}
