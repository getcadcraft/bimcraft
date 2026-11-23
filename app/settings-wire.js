/* SPDX-License-Identifier: Apache-2.0 */
/**
 * settings-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSettingsWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountSettingsWire(ctx) {
  const { okMargin, okGeoCrs, readAssist, settings } = ctx;

  try {
    const v = JSON.parse(localStorage.getItem('bimcraft.settings') || '{}') || {};
    if (typeof v.spaces === 'boolean') settings.spaces = v.spaces;
    if (['on', 'small', 'off'].includes(v.edges)) settings.edges = v.edges;
    if (['iso', 'top', 'front', 'side'].includes(v.view)) settings.view = v.view;
    if (['square', 'placed'].includes(v.turned)) settings.turned = v.turned;
    if (typeof v.snap === 'boolean') settings.snap = v.snap;
    if (['cube', 'axes', 'none'].includes(v.corner)) settings.corner = v.corner;
    if (okMargin(v.boxMargin)) settings.boxMargin = v.boxMargin;
    if (okGeoCrs(v.geoCrs)) settings.geoCrs = v.geoCrs;
    if (v.dwgStart === '3d' || v.dwgStart === '2d') settings.dwgStart = v.dwgStart;
    if (typeof v.idsEmbed === 'boolean') settings.idsEmbed = v.idsEmbed;
    if (typeof v.ifcx === 'boolean') settings.ifcx = v.ifcx;
    if (typeof v.panelFocus === 'boolean') settings.panelFocus = v.panelFocus;
    readAssist(v);
  } catch (e) { /* private window or a damaged value: the defaults */ }
  window.bimcraftSettings = settings;   // for tests and the console
}
