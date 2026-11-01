/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * carbon-agents.js — embodied carbon (0.8 EG.14, session `energy_PART_2`) as tools for the person's assistant, to the AI tool contract
 * (docs/AI-CONNECT-SPEC.md § 2, rule 34): `<area>_<verb>` names, short descriptions, bounded schemas, a preview for every edit (rollback: one undo
 * step), errors that say what to try next, results marked as content (rule 36: material and element names come from the file). Each tool runs the
 * SAME function the panel calls (carbon-calc.js); none has a second copy of the maths. The apps contain no AI: this gives the assistant the engine.
 *
 *   carbonTools(env) → [tool definitions]      env = { ed() (an IfcEditor), apply(label, op) → Promise } as agents.js modelTools(env)
 *
 *   carbon_check          read   embodied carbon of the open model: totals by life-cycle module, by material, class and storey, kg per m², what had no
 *                                factor or no quantity, Problems; the factors are starter values unless the person loaded their own
 *   carbon_factors_get    read   the factor table in force (starter + the person's rows), as rows or CSV text, with the label that says what it is
 *   carbon_factors_set    edit   replace or add factor rows, remove rows, choose the modules, type the floor area; kept in the file; one undo step
 *   carbon_factor_set  edit   make one element use one factor row, whatever its material says
 */
import { ToolError } from './host.js';
import { ModelWriter } from './model-write.js';
import { calcCarbonModel, readSettings, setCarbonSettings, setElementFactor } from './carbon-calc.js';
import { carbonCsv } from './carbon.js';
import { STARTER_LABEL, tableCsv, cleanRow, BASES } from './carbon-factors.js';

const obj = (properties, required = [], description) => ({ type: 'object', ...(description ? { description } : {}), properties, required, additionalProperties: false });
const num = (description, min, max, extra = {}) => ({ type: 'number', description, minimum: min, maximum: max, ...extra });
const LIMIT = 200;
const r2 = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : null);
const MODS = { type: 'array', items: { type: 'string', enum: ['a1a3', 'a4', 'a5'] }, minItems: 1, maxItems: 3, description: 'Life-cycle modules to count: a1a3 (product stage, always counted), a4 (transport), a5 (site waste). A4 and A5 count only for rows that carry a figure.' };
const ROW = obj({
  id: { type: 'string', description: 'A short id: letters, digits, dot, dash; the same id as a starter row replaces it.', minLength: 1, maxLength: 64 },
  match: { type: 'array', items: { type: 'string', maxLength: 60 }, minItems: 1, maxItems: 20, description: 'Words of a material or element name that pick this row (a phrase like "mineral wool" is fine).' },
  classes: { type: 'array', items: { type: 'string', maxLength: 64 }, maxItems: 10, description: 'Optional IFC classes this row is limited to, e.g. IFCWALL.' },
  basis: { type: 'string', enum: [...BASES], description: 'What the figure is per: kg, m3, m2, m (length) or item.' },
  density: num('kg per cubic metre; needed when basis is kg.', 0.1, 30000),
  a1a3: num('kgCO2e per basis unit, product stage.', -10000, 1000000), a4: num('Optional: transport, kgCO2e per basis unit.', -10000, 1000000), a5: num('Optional: site waste, kgCO2e per basis unit.', -10000, 1000000),
  source: { type: 'string', description: 'Where the figure comes from (your source).', maxLength: 200 }, checked: { type: 'boolean', description: 'true only if someone checked the figure against its source.' }, note: { type: 'string', maxLength: 300 },
}, ['id', 'match', 'basis', 'a1a3']);

export function carbonTools(env) {
  const E = () => { const ed = env.ed(); if (!ed) throw new ToolError('not_open', 'No IFC model is open in BimCraft.', { next: ['Open a model, then call this tool again.'] }); return ed; };
  const W = () => { const ed = E(); return new ModelWriter(ed.W, ed.api, ed.mid); };
  const edit = async (label, op) => { try { return await env.apply(label, op); } catch (e) { throw new ToolError(e?.key ? 'invalid_argument' : 'failed', String(e?.key || e?.message || e), { next: ['Check the rows with carbon_factors_get.'] }); } };
  const problemsOut = (list) => list.slice(0, LIMIT).map((p) => ({ code: p.code, severity: p.severity, text: p.text, about: (p.about || []).slice(0, 10).map((a) => a.id) }));
  const group = (list) => list.slice(0, LIMIT).map((g) => ({ name: g.key, kgCO2e: r2(g.total), massKg: r2(g.mass), percent: r2(g.pct), parts: g.n }));
  return [
    {
      name: 'carbon_check', group: 'read', untrusted: true, title: 'Check embodied carbon',
      description: 'Adds up the embodied carbon (kgCO2e) of every building element in the open model from its quantities and material: totals by module, material, class and storey, kg per square metre of floor, the parts with no factor or no quantity, and Problems. Starter factors are generic and unverified; say so when quoting a figure. An estimate, not an assessment.',
      inputSchema: obj({ modules: MODS, floorAreaM2: num('Floor area in square metres for kg per m2; default from the spaces or floor slabs.', 1, 1e7), limit: { type: 'integer', description: 'Most groups per list to return.', minimum: 1, maximum: 1000, default: LIMIT } }),
      run: (a) => {
        const r = calcCarbonModel(W(), { modules: a.modules, floorArea: a.floorAreaM2 });
        if (!r.ok) throw new ToolError('not_found', 'The model has no building elements to count.', { next: ['Draw or open a model with walls, slabs or other elements.'] });
        const lim = a.limit ?? LIMIT, t = r.res.totals;
        return { totalKgCO2e: r2(t.total), a1a3: r2(t.a1a3), a4: r2(t.a4), a5: r2(t.a5), massKg: r2(t.mass), perM2: r2(r.res.perM2), floorAreaM2: r2(r.floorArea), modules: r.res.modules,
          byMaterial: group(r.res.byMaterial).slice(0, lim), byClass: group(r.res.byClass).slice(0, lim), byStorey: group(r.res.byStorey).slice(0, lim),
          unmatched: r.res.unmatched.slice(0, lim).map((u) => ({ guid: u.guid, name: u.name, class: u.cls, material: u.material })), missingQuantity: r.res.missing.slice(0, lim),
          linesUsingUncheckedFactors: r.res.unchecked, factorsNote: STARTER_LABEL, problems: problemsOut(r.problems) };
      },
    },
    {
      name: 'carbon_factors_get', group: 'read', untrusted: true, title: 'Read the carbon factor table',
      description: 'Returns the embodied-carbon factor table in force: the starter rows with the rows the person changed or added. Each row has keywords, a basis (kg, m3, m2, m, item), the product-stage figure and optional transport and waste figures, its source and whether it was checked. Use before carbon_factors_set.',
      inputSchema: obj({ format: { type: 'string', enum: ['rows', 'csv'], description: 'rows (default) or CSV text.' } }),
      run: (a) => {
        const s = readSettings(W());
        return { label: STARTER_LABEL, modules: s.modules, floorAreaM2: s.floorArea || null, ...(a.format === 'csv' ? { csv: tableCsv(s.rows) } : { rows: s.rows.map((r) => ({ id: r.id, match: r.match, classes: r.classes, basis: r.basis, density: r.density, a1a3: r.a1a3, a4: r.a4, a5: r.a5, source: r.source, checked: r.checked, origin: r.origin, note: r.note })) }) };
      },
    },
    {
      name: 'carbon_factors_set', group: 'edit', rollbackPreview: true, title: 'Set carbon factors',
      description: 'Adds or replaces factor rows (the same id as a starter row replaces it), removes rows by id, sets the life-cycle modules to count and a floor area, kept in the file in one undo step. Give figures from the person\'s own source and name it in each row; never mark a row checked unless the person says it was. Refuses a row with a bad id, no keyword, no density for kg, or a figure out of range.',
      inputSchema: obj({ rows: { type: 'array', maxItems: 500, items: ROW, description: 'Rows to add or replace.' }, remove: { type: 'array', maxItems: 500, items: { type: 'string', maxLength: 64 }, description: 'Ids of the person\'s rows to remove (a starter row cannot be removed; replace it).' }, modules: MODS, floorAreaM2: num('Floor area in square metres; 0 = take it from the model.', 0, 1e7) }),
      outputSchema: obj({ rows: { type: 'integer', description: 'How many of the person\'s own rows are now kept in the file.', minimum: 0, maximum: 10000 } }),
      run: async (a) => {
        const have = readSettings(W()).user.map((u) => cleanRow(u).row).filter(Boolean);
        const next = new Map(have.map((r) => [r.id, r]));
        for (const id of a.remove || []) next.delete(String(id).toLowerCase());
        for (const raw of a.rows || []) { const c = cleanRow(raw); if (!c.row) throw new ToolError('invalid_argument', 'Row "' + String(raw.id).slice(0, 40) + '" is not valid (' + c.errors[0] + ').', { next: ['Fix the row and call again; see carbon_factors_get for the shape.'] }); next.set(c.row.id, c.row); }
        await edit('carbon factors', setCarbonSettings({ rows: [...next.values()], modules: a.modules, floorArea: a.floorAreaM2 }));
        return { rows: next.size };
      },
    },
    {
      name: 'carbon_factor_set', group: 'edit', rollbackPreview: true, title: 'Choose a carbon factor for an element',
      description: 'Makes one element use one factor row (by id) whatever its material name says; an empty id clears it. Use for parts that carbon_check lists as unmatched.',
      inputSchema: obj({ element: { type: 'string', description: 'The element\'s GlobalId.', minLength: 1, maxLength: 64 }, factor: { type: 'string', description: 'A factor row id from carbon_factors_get; empty to clear.', maxLength: 64 } }, ['element', 'factor']),
      outputSchema: obj({ element: { type: 'string', description: 'The element changed.', maxLength: 64 } }),
      run: async (a) => {
        const s = readSettings(W());
        if (a.factor && !s.rows.some((r) => r.id === a.factor.toLowerCase())) throw new ToolError('not_found', 'No factor row "' + a.factor.slice(0, 40) + '".', { next: ['Call carbon_factors_get for the ids.'] });
        await edit('carbon factor of an element', setElementFactor(a.element, a.factor.toLowerCase()));
        return { element: a.element };
      },
    },
  ];
}
