/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — English fallbacks for the assistant's results and file text; the panels pass t() and show the language files' words. */
/**
 * lifecycle.js — the building over fifty years: what wears out and gets replaced, and when (0.8 EG.45, session bim-sim_PART_2). No DOM:
 * tools/bimcraft-test/lifecycle-test.mjs (node bin/test-bimcraft.mjs --lifecycle) runs it in Node.
 *
 * Each component has a quantity, a service life in years and (when the person types one) a cost per unit. It is replaced at k × life for k = 1, 2, …
 * while that is before the end of the study period, so a 30-year window in a 50-year study is replaced once, at year 30. Costs are in today's money
 * unless an inflation rate is given (cost × (1 + i)^t); the present value of a year's cost is discounted at the person's rate (÷ (1 + r)^t). The
 * service lives below are typical planning figures for the person to review, not a source: real lives depend on the product, climate and upkeep.
 *
 *   LIVES                    { key: { years, unit } }   the defaults
 *   lifecycleRun(components, { years, discount, inflation }) → { years, events: [{ year, key, name, qty, cost }], byYear: [{ year, cost, pv, cum }], rows: [...], total, totalPv, count, peak }
 *        components = [{ key, name, qty, unit, life, unitCost? , firstYear? }]   (firstYear: the first replacement is at firstYear + life, for a component that is not new; default 0)
 *   lifecycleCsv(result) → text
 */
export const LIVES = {
  windows: { years: 30, unit: 'm²' },
  'door-exterior': { years: 30, unit: 'each' },
  'door-interior': { years: 40, unit: 'each' },
  'wall-exterior': { years: 40, unit: 'm²' },
  'wall-paint': { years: 8, unit: 'm²' },
  'floor-finish': { years: 25, unit: 'm²' },
  'ceiling-finish': { years: 30, unit: 'm²' },
  roof: { years: 25, unit: 'm²' },
  stairs: { years: 60, unit: 'each' },
  // 0.8 EG.45 (bim-sim_PART_3): the building services. Planning figures again, for the person to review.
  pipe: { years: 50, unit: 'm' },
  duct: { years: 30, unit: 'm' },
  wiring: { years: 40, unit: 'm' },
};
/** Default service life in years of a piece of equipment by its IFC class (planning figures; the element's own Pset_ServiceLife wins). */
export const EQUIPMENT_LIVES = {
  IFCPUMP: 20, IFCFAN: 20, IFCFLOWMOVINGDEVICE: 20, IFCBOILER: 25, IFCCHILLER: 20, IFCUNITARYEQUIPMENT: 15, IFCENERGYCONVERSIONDEVICE: 15, IFCTANK: 25, IFCFLOWSTORAGEDEVICE: 25,
  IFCVALVE: 25, IFCFLOWCONTROLLER: 25, IFCFLOWTERMINAL: 25, IFCAIRTERMINAL: 25, IFCSANITARYTERMINAL: 30, IFCFIRESUPPRESSIONTERMINAL: 25, IFCLIGHTFIXTURE: 15, IFCOUTLET: 25,
  IFCSWITCHINGDEVICE: 25, IFCELECTRICDISTRIBUTIONBOARD: 40, IFCELECTRICAPPLIANCE: 15, IFCTRANSPORTELEMENT: 25,
};
export const DEFAULT_EQUIPMENT_LIFE = 20;

export function lifecycleRun(components, { years = 50, discount = 0, inflation = 0 } = {}) {
  const N = Math.max(1, Math.floor(years)), events = [], byYear = Array.from({ length: N + 1 }, (_, y) => ({ year: y, cost: 0, pv: 0, cum: 0, carbon: 0 }));
  const rows = [];
  for (const c of components) {
    const life = Number(c.life), qty = Number(c.qty) || 0, unitCost = Number(c.unitCost);
    const uc = Number(c.unitCarbon), hasC = c.unitCarbon !== null && c.unitCarbon !== undefined && c.unitCarbon !== '' && Number.isFinite(uc);
    const row = { key: c.key, name: c.name, qty, unit: c.unit, life, unitCarbon: hasC ? uc : null, carbon: 0, unitCost: Number.isFinite(unitCost) && c.unitCost !== '' && c.unitCost !== null && c.unitCost !== undefined ? unitCost : null, years: [], cost: 0, pv: 0 };
    if (life > 0 && qty > 0) {
      for (let k = 1; ; k++) {
        let y = (c.firstYear || 0) + k * life;
        if (y >= N - 1e-9) break;
        if (y < 0) y = 0;   // already past its life: replaced now (year 0)
        const yr = Math.round(y), nominal = row.unitCost === null ? null : qty * row.unitCost * Math.pow(1 + inflation, y);
        row.years.push(yr);
        const kg = hasC ? qty * uc : null;   // embodied carbon of the new part (kg CO2e): what the model's carbon factors give per unit
        events.push({ year: yr, key: c.key, name: c.name, qty, cost: nominal, carbon: kg });
        if (kg !== null) { byYear[Math.min(yr, N)].carbon += kg; row.carbon += kg; }
        if (nominal !== null) { byYear[Math.min(yr, N)].cost += nominal; byYear[Math.min(yr, N)].pv += nominal / Math.pow(1 + discount, y); row.cost += nominal; row.pv += nominal / Math.pow(1 + discount, y); }
      }
    }
    rows.push(row);
  }
  events.sort((a, b) => a.year - b.year || String(a.key).localeCompare(String(b.key)));
  let cum = 0;
  for (const y of byYear) { cum += y.pv; y.cum = cum; }
  const peak = byYear.reduce((m, y) => (y.cost > m.cost ? y : m), { year: null, cost: 0 });
  return { years: N, events, byYear, rows, totalCarbon: rows.reduce((s, r) => s + r.carbon, 0), nocarbon: rows.filter((r) => r.unitCarbon === null && r.years.length).map((r) => r.key), total: rows.reduce((s, r) => s + r.cost, 0), totalPv: rows.reduce((s, r) => s + r.pv, 0), count: events.length, peak: peak.cost > 0 ? peak : null,
    uncosted: rows.filter((r) => r.unitCost === null && r.years.length).map((r) => r.key) };
}

export function lifecycleCsv(res) {
  const q = (v) => '"' + String(v).replace(/"/g, '""') + '"';
  const out = [['component', 'quantity', 'unit', 'life years', 'cost per unit', 'replaced in years', 'cost', 'present value', 'carbon per unit kgCO2e', 'carbon kgCO2e'].map(q).join(',')];
  for (const r of res.rows) out.push([r.name, r.qty, r.unit, r.life, r.unitCost ?? '', r.years.join(' '), Math.round(r.cost * 100) / 100, Math.round(r.pv * 100) / 100, r.unitCarbon ?? '', Math.round(r.carbon * 10) / 10].map(q).join(','));
  out.push('', ['year', 'cost', 'present value', 'running present value'].map(q).join(','));
  for (const y of res.byYear) if (y.cost > 0) out.push([y.year, Math.round(y.cost * 100) / 100, Math.round(y.pv * 100) / 100, Math.round(y.cum * 100) / 100].map(q).join(','));
  return out.join('\n');
}
