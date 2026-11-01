/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * scan-progress-agents.js — "compare the scan with the model" as an assistant tool (0.8 EG.39, session bim-analysis_PART_4). Read-only: it
 * judges the open model's elements against the open point cloud (scan-progress.js) and, when a 4D schedule is loaded, against its day.
 *
 *   scanProgressTools(env) → [tool]    env = { progress() → the scan-progress-ui.js API | null }
 */
import { ToolError } from './host.js';

const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });

export function scanProgressTools(env) {
  return [{
    name: 'scan_progress', group: 'read', untrusted: true, title: 'Compare the scan with the model',
    description: 'Judges every element of the open model against the open point cloud: built (the scan sees its surface), partly, missing (the scan is there, the element is not) or unseen (the scan never reached it), the percent built, and with a 4D schedule loaded which elements are behind or ahead on the 4D day. Changes nothing in the model. A comparison of element boxes with scan points inside a tolerance: not a survey, a quantity or a basis for payment; an element hidden against a scanned one can read as built.',
    inputSchema: obj({ toleranceMm: { type: 'number', minimum: 10, maximum: 500, description: 'How far a scan point may lie from an element\'s surface to count, millimetres (default 50).' }, limit: { type: 'number', minimum: 1, maximum: 200, description: 'How many rows to return, behind-schedule first (default 50).' } }),
    outputSchema: obj({ totals: { type: 'object' }, plan: { type: 'object' }, rows: { type: 'array', maxItems: 200, items: { type: 'object' } }, notes: { type: 'array', maxItems: 5, items: { type: 'string' } } }),
    run: (a) => {
      const sp = env.progress?.();
      if (!sp) throw new ToolError('not_found', 'The comparison is not available here.', { next: ['Open an IFC model and a point cloud, then call this tool again.'] });
      const r = sp.run({ tolMm: a.toleranceMm });
      if (!r) throw new ToolError('not_found', 'Nothing was compared: open a point cloud beside the model (Add a point cloud), then call this tool again.', { next: ['Open a point cloud placed on the model.'] });
      const rows = r.rows.slice().sort((x, y) => (x.flag === 'behind' ? 0 : 1) - (y.flag === 'behind' ? 0 : 1) || x.coverage - y.coverage).slice(0, a.limit || 50);
      return { totals: r.totals, plan: r.plan || null, tolerance_m: r.tol,
        rows: rows.map((x) => ({ key: x.key, state: x.state, coverage: x.coverage, meanOffsetMm: x.mean === null ? null : Math.round(x.mean * 1000), deviation: x.dev, schedule: x.plan || null, flag: x.flag || null })),
        notes: ['Boxes against points within the tolerance; elements touching a scanned element can read as built.', 'Percent built counts built elements among those the scan reaches.'] };
    },
  }];
}
