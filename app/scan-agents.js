/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * scan-agents.js — phone-scan-to-walls as two assistant tools (0.8 EG.37, session spikes_PART_4), written to the AI tool contract (rule 34).
 * The edit tool is the one Suggest mode (AC.12) holds back: the person sees the walls and doors as a change set and accepts or rejects
 * them item by item. The engines are scan-propose.js and scan-build.js; the tools have no second copy of the maths.
 *
 *   scanTools(env) → [tool definitions]    env = { ed(), apply(label, op), scan() → { xy: Float64Array, n } | null, levels() → [{ guid, name }] }
 *     scan() gives the plan slice of the open point cloud at the plan cut (cloud-slice-ui.js `R.slice`) or of the open mesh (meshSlice).
 *
 *   scan_walls_propose  read   walls, doors and rooms found in the open scan, with Problems; changes nothing
 *   scan_walls_build    edit   draws the walls and doors the person kept (from a propose result), one undo step
 */
import { ToolError } from './host.js';
import { proposeFromScan } from './scan-propose.js';
import { scanChange } from './scan-build.js';

const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const num = (description, min, max) => ({ type: 'number', description, minimum: min, maximum: max });
const PT = { type: 'array', items: { type: 'number', minimum: -1e9, maximum: 1e9 }, minItems: 2, maxItems: 2 };

export function scanTools(env) {
  const got = () => {
    const s = env.scan?.();
    if (!s || !(s.n > 0)) throw new ToolError('not_found', 'No point cloud or mesh scan is open with a plan slice.', { next: ['Open a scan (PLY, E57, LAS, OBJ), show its slice, then call this tool again.'] });
    return s;
  };
  return [
    {
      name: 'scan_walls_propose', group: 'read', untrusted: true, title: 'Propose walls and doors from the open scan',
      description: 'Finds the walls, doors and closed rooms in the plan slice of the open phone or laser scan (rectilinear rooms only). Changes nothing: it returns proposals to accept, and Problems for walls that do not close. Tuned on generated scans, not yet on real phone scans.',
      inputSchema: obj({ thicknessMm: num('Wall thickness to assume, millimetres (default 150).', 50, 600), snapMm: num('How far an end may be moved to meet another wall, millimetres (default 350).', 50, 1000) }),
      outputSchema: obj({ walls: { type: 'array', maxItems: 200, items: { type: 'object' } }, doors: { type: 'array', maxItems: 200, items: { type: 'object' } }, rooms: { type: 'array', maxItems: 100, items: { type: 'object' } }, problems: { type: 'array', maxItems: 200, items: { type: 'object' } }, notes: { type: 'array', maxItems: 20, items: { type: 'string' } } }),
      run: (a) => {
        const s = got();
        const r = proposeFromScan(s.xy, s.n, { thickness: a.thicknessMm, snap: a.snapMm });
        return { walls: r.proposals.filter((p) => p.kind === 'wall').slice(0, 200), doors: r.proposals.filter((p) => p.kind === 'door').slice(0, 200),
          rooms: r.rooms.map((m) => ({ areaM2: m.area, centroid: m.centroid })).slice(0, 100), problems: r.problems.slice(0, 200).map((p) => ({ code: p.code, severity: p.severity, text: p.text, at: p.where?.at })), notes: r.notes.slice(0, 20) };
      },
    },
    {
      name: 'scan_walls_build', group: 'edit', rollbackPreview: true, title: 'Draw the walls and doors from a scan',
      description: 'Draws the walls and doors you give (from scan_walls_propose) on a level in one undo step; the rooms they close appear by themselves. A door whose wall is not in the list is skipped. In Suggest mode the person accepts or rejects them.',
      inputSchema: obj({
        level: { type: 'string', description: 'The level\'s GlobalId.', minLength: 1, maxLength: 64 },
        walls: { type: 'array', description: 'The walls to draw: id, start a and end b as [x, y] in the level\'s plan (mm), optional thickness.', minItems: 1, maxItems: 200, items: obj({ id: { type: 'string', maxLength: 20 }, a: PT, b: PT, thickness: num('Wall thickness, millimetres.', 50, 600) }, ['id', 'a', 'b']) },
        doors: { type: 'array', description: 'The doors to cut: the id of the wall above, the offset along it and the width (mm).', maxItems: 200, items: obj({ wall: { type: 'string', maxLength: 20 }, offset: num('From the wall\'s start to the door\'s near edge, millimetres.', 0, 1e6), width: num('Door width, millimetres.', 500, 3000) }, ['wall', 'offset', 'width']) },
        wallType: { type: 'string', description: 'A wall type key, default ext-2x6.', maxLength: 40 },
      }, ['level', 'walls']),
      outputSchema: obj({ walls: { type: 'integer', minimum: 0, maximum: 1000 }, doors: { type: 'integer', minimum: 0, maximum: 1000 } }),
      run: async (a) => {
        if (!(env.levels?.() || []).some((l) => l.guid === a.level)) throw new ToolError('not_found', 'No level with GlobalId ' + a.level + '.', { next: ['Use the levels tool to get the id.'] });
        const accepted = [...a.walls.map((w) => ({ kind: 'wall', id: w.id, a: w.a, b: w.b, ...(w.thickness ? { thickness: w.thickness } : {}) })), ...(a.doors || []).map((d) => ({ kind: 'door', wall: d.wall, offset: d.offset, width: d.width }))];
        try { await env.apply('walls from a scan', scanChange(accepted, { storey: a.level, typeKey: a.wallType || 'ext-2x6' })); }
        catch (e) { throw new ToolError(e?.key ? 'invalid_argument' : 'failed', String(e?.key || e?.message || e), { next: [] }); }
        return { walls: a.walls.length, doors: (a.doors || []).filter((d) => a.walls.some((w) => w.id === d.wall)).length };
      },
    },
  ];
}
