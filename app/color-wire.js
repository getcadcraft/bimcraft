/* SPDX-License-Identifier: Apache-2.0 */
/**
 * color-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountColorWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountColorWire(ctx) {
  const { ST, ui, guard, applyColor, openScheme, colorOff, index, recolor } = ctx;

  // ---- Color by property (0.4 B15) ----
  ST.propIx = null;
  ST.colorField = '';
  ST.colorLegend = null;
  ST.picked = new Set();
  ST.colorScheme = null;   // 0.5 WL.5: a scheme opened from a file or made by changing a color; it keeps its colors over themes and edits
  // the theme has its own steps of the same colors
  // (a scheme keeps the colors it was given)
  new MutationObserver(() => { if (ST.colorField && ST.viewer && !ST.colorScheme) applyColor(ST.colorField, true); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  ui.colorInput?.addEventListener('change', () => { const f = ui.colorInput.files[0]; ui.colorInput.value = ''; if (f) guard(() => openScheme(f)); });
  window.bimcraftColor = { apply: applyColor, off: colorOff, legend: () => ST.colorLegend, index, scheme: () => ST.colorScheme, recolor };   // for tests
}
