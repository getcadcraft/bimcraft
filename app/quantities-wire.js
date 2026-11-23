/* SPDX-License-Identifier: Apache-2.0 */
/**
 * quantities-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountQuantitiesWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountQuantitiesWire(ctx) {
  const { ST, ui, runModelChecks, renderQto, qtoResult, spaceRes, renderChecks } = ctx;

  // ---- Quantity totals (0.4 B20) ----
  ST.qtoScope = 'all';
  ST.qtoGroups = ['cls'];
  ST.qtoSums = null;
  ST.qtoView = 'totals';   // qtoSums null = the quantity sets' fields, first time
  ui.qtoDetails?.addEventListener('toggle', () => { if (ui.qtoDetails.open) renderQto(); });
  window.bimcraftQto = { set: (o) => { if (o.view) ST.qtoView = o.view; if (o.scope) ST.qtoScope = o.scope; if (o.groups) ST.qtoGroups = o.groups; if (o.sums) ST.qtoSums = o.sums; ui.qtoDetails.open = true; renderQto(); return qtoResult(); }, spaces: spaceRes };   // for tests; spaces(): the space schedule rows (SuperCad Studio's accommodation schedule, bk-r4-office-10)

  ST.checkRes = null;
  ST.adviceSrc = null;   // 0.10 BK.73: the Drawing advice source (below)
  ST.checksSrc = null;
  ST.checksArmed = false;   // 0.7.1 → 0.8: Model checks in the shell's Problems (below)
  /** 0.8 DC.115: what the model's shapes are made of (extrusions and other solids stay editable; face lists do not) and, when some
   *  tessellated bodies are exactly straight prisms, a button that writes them back as IfcExtrudedAreaSolid (one undo step). */
  ST.solidsRep = null;
  ui.checksDetails?.addEventListener('toggle', () => { if (ui.checksDetails.open) renderChecks(); });
  window.bimcraftChecks = { run: () => { ui.checksDetails.open = true; runModelChecks(); return ST.checkRes; } };   // for tests
}
