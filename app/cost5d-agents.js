/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * cost5d-agents.js — 5D costs on the 4D schedule (0.8 EG.17, session `energy_PART_2`) as tools for the person's assistant, to the AI tool contract
 * (docs/AI-CONNECT-SPEC.md § 2, rule 34; results are content, rule 36). Each tool runs the SAME function the panel calls (cost5d.js).
 *
 *   cost5dTools(env) → [tool definitions]   env = { ed(), apply(label, op), index() → the property index (ifc-props.js propertyIndex), tasks() → the 4D tasks
 *                                           parsed from the schedule (ifc-4d.js parseTasks().tasks) } — index and tasks come from the page's 4D schedule
 *
 *   cost5d_check       read   prices each element from the price table, puts the cost on the 4D tasks, returns cost by stage / package / task and the
 *                             cash-flow curve (day, week or month), what is unpriced and what is in no task; planned vs built on a date
 *   cost5d_prices_get  read   the price table in force (rows, or CSV text)
 *   cost5d_prices_set  edit   add / replace / remove price rows, set the spread profile; kept in the file; one undo step
 */
import { ToolError } from './host.js';
import { ModelWriter } from './model-write.js';
import { matchTasks, parseDay, dayText } from './ifc-4d.js';
import { readElements } from './carbon-calc.js';
import { cleanCurrency, DEFAULT_CURRENCY, calcCost5d, readCostSettings, setCostSettings, valueAt, priceCsv, cleanPriceRow, UNITS, PROFILES } from './cost5d.js';

const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const num = (description, min, max, extra = {}) => ({ type: 'number', description, minimum: min, maximum: max, ...extra });
const LIMIT = 200;
const ROW = obj({
  id: { type: 'string', description: 'A short id: letters, digits, dot, dash.', minLength: 1, maxLength: 64 },
  match: { type: 'array', items: { type: 'string', maxLength: 60 }, minItems: 1, maxItems: 20, description: 'Words of a material or element name this price applies to.' },
  classes: { type: 'array', items: { type: 'string', maxLength: 64 }, maxItems: 10, description: 'Optional IFC classes, e.g. IFCSLAB.' },
  unit: { type: 'string', enum: Object.keys(UNITS), description: 'The unit the price is per: m3, m2, m, kg, item, or cy, cf, sf, lf.' },
  density: num('kg per cubic metre; needed when the unit is kg.', 0.1, 30000),
  mat: num('Material price per unit.', 0, 1e9), lab: num('Labour price per unit.', 0, 1e9), waste: num('Waste allowance on the material as a fraction, 0.05 = 5 %.', 0, 5),
  source: { type: 'string', maxLength: 200 }, note: { type: 'string', maxLength: 300 },
}, ['id', 'match', 'unit']);

export function cost5dTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Open a model, then call this tool again.'] }); return ed; };
  const W = () => { const ed = E(); return new ModelWriter(ed.W, ed.api, ed.mid); };
  const edit = async (label, op) => { try { return await env.apply(label, op); } catch (e) { throw new ToolError(e?.key ? 'invalid_argument' : 'failed', String(e?.key || e?.message || e), { next: ['Check the rows with cost5d_prices_get.'] }); } };
  return [
    {
      name: 'cost5d_check', group: 'read', untrusted: true, title: 'Cost the 4D schedule',
      description: 'Prices every element of the open model from the price table (material and labour per unit, waste), adds the cost to each task of the 4D schedule (an element in several tasks is split evenly), and returns cost by stage, work package and task, the cash-flow curve and, for a date, planned vs built. Prices are the person\'s own: with no price table the result is empty. An estimate, not a bid.',
      inputSchema: obj({ per: { type: 'string', enum: ['day', 'week', 'month'], description: 'Curve period; default week.' }, profile: { type: 'string', enum: [...PROFILES], description: 'How a task\'s cost spreads over its days; default the saved one (even).' }, date: { type: 'string', description: 'A date YYYY-MM-DD for planned vs built.', maxLength: 10 }, limit: { type: 'integer', minimum: 1, maximum: 1000, default: LIMIT, description: 'Most rows per list.' } }),
      run: (a) => {
        if (typeof env.index !== 'function' || typeof env.tasks !== 'function') throw new ToolError('unsupported', 'This build has no 4D schedule to cost.', { next: ['Open the 4D schedule in BimCraft, load tasks, and call again.'] });
        const set = readCostSettings(W());
        if (!set.rows.length) throw new ToolError('not_found', 'There is no price table yet.', { next: ['Call cost5d_prices_set with rows from the person\'s own price list.'] });
        const tasks = env.tasks() || [];
        if (!tasks.length) throw new ToolError('not_found', 'The 4D schedule has no tasks.', { next: ['Load a schedule in the 4D tab, then call again.'] });
        const ix = env.index(), matched = matchTasks(ix, tasks), profile = a.profile || set.profile, lim = a.limit ?? LIMIT;
        const r = calcCost5d(readElements(W()), set.rows, matched, { keyBase: ix.keyBase || 0, profile, per: a.per || 'week' });
        let at;
        if (a.date) { const d = parseDay(a.date); if (d === null) throw new ToolError('invalid_argument', 'The date must be YYYY-MM-DD.', { next: ['Use a form like 2026-11-02.'] }); at = { date: a.date, ...valueAt(r.tasks, d, { profile }) }; }
        return { total: r.grand, scheduled: r.scheduled, unscheduled: r.unscheduled, profile, groups: r.groups.slice(0, lim).map((g) => ({ kind: g.kind, name: g.name, from: dayText(g.start), to: dayText(g.finish), cost: g.cost })),
          tasks: r.tasks.slice(0, lim).map((t) => ({ name: t.name, stage: t.stage, package: t.package, from: dayText(t.start), to: dayText(t.finish), cost: t.cost })),
          curve: r.flow.points.slice(0, 1000).map((p) => ({ period: p.label, cost: p.cost, cumulative: p.cum })), ...(at ? { at } : {}),
          unpriced: r.unpriced.slice(0, lim).map((u) => ({ guid: u.guid, name: u.name, class: u.cls, material: u.material, why: u.why })) };
      },
    },
    {
      name: 'cost5d_prices_get', group: 'read', untrusted: true, title: 'Read the price table',
      description: 'Returns the price table kept in the model: rows with keywords (the mapping to materials and classes), unit, material and labour price, waste, source.',
      inputSchema: obj({ format: { type: 'string', enum: ['rows', 'csv'], description: 'rows (default) or CSV text.' } }),
      run: (a) => { const s = readCostSettings(W()); return { profile: s.profile, currency: s.currency || null, shownIn: s.shownIn, ...(s.currencyDefaulted ? { note: 'The price table has no currency; amounts are shown as ' + DEFAULT_CURRENCY + ' (the shell default).' } : {}), ...(a.format === 'csv' ? { csv: priceCsv(s.rows) } : { rows: s.rows }) }; },
    },
    {
      name: 'cost5d_prices_set', group: 'edit', rollbackPreview: true, title: 'Set prices',
      description: 'Adds or replaces price rows by id, removes rows by id and sets how a task\'s cost spreads over its days, kept in the file in one undo step. Use the person\'s own prices only; do not invent any. Refuses a row with a bad id, no keyword, a unit it does not know, no price or a negative one.',
      inputSchema: obj({ currency: { type: 'string', maxLength: 3, description: 'The currency of every price in the table, a three-letter code such as USD or EUR. Optional; a table without one is shown as ' + DEFAULT_CURRENCY + ' and says so.' }, rows: { type: 'array', maxItems: 500, items: ROW, description: 'Price rows to add or replace (the same id replaces).' }, remove: { type: 'array', maxItems: 500, items: { type: 'string', maxLength: 64 }, description: 'Ids of price rows to remove.' }, profile: { type: 'string', enum: [...PROFILES], description: 'How a task\'s cost spreads over its days: even, front, back or bell.' } }),
      outputSchema: obj({ rows: { type: 'integer', description: 'How many price rows are now kept in the file.', minimum: 0, maximum: 10000 } }),
      run: async (a) => {
        const next = new Map(readCostSettings(W()).rows.map((r) => [r.id, r]));
        for (const id of a.remove || []) next.delete(String(id).toLowerCase());
        for (const raw of a.rows || []) { const c = cleanPriceRow(raw); if (!c.row) throw new ToolError('invalid_argument', 'Row "' + String(raw.id).slice(0, 40) + '" is not valid (' + c.errors[0] + ').', { next: ['Fix the row and call again.'] }); next.set(c.row.id, c.row); }
        if (a.currency !== undefined && a.currency !== '' && !cleanCurrency(a.currency)) throw new ToolError('invalid_argument', 'currency must be three letters, for example USD or EUR.', { next: ['Use a three-letter code.'] });
        await edit('prices', setCostSettings({ rows: [...next.values()], profile: a.profile, currency: a.currency }));
        return { rows: next.size };
      },
    },
  ];
}
