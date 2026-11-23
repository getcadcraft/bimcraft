/* SPDX-License-Identifier: Apache-2.0 */
/**
 * maps-wire.js: bimcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountMapsWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { mountCrsModel } from './crs-model-ui.js';
import { t } from './i18n.js';
import { viewerToFile, readGeoref } from './ifc-geo.js';

export function mountMapsWire(ctx) {
  const { ST, status, guard, copyText, renderChanges, cur, entryOf, saveSettings, syncSettingsForm, settings, settingsDlg, syncMeasureBar, redrawMeasure, measureOff, measureOn, um } = ctx;

  // ---- Map layers on the ground (0.5 SG.3; maps-bim.js + the shared maplayers.js, imported on first use) ----
  ST.bimMapsLoading = null;
  const { openModelCrs, openMapOrigin } = mountCrsModel({
    ST, status, guard, renderChanges, cur,
  });
  // Settings › BimCraft › Location: "Choose another system…" (any EPSG system, UTM zone or one of your own)
  settingsDlg?.querySelector('[data-bc-geo-more]')?.addEventListener('click', () => guard(async () => {
    const [{ openCrsPicker }, P] = await Promise.all([import('./crs-pick-ui.js'), import('./crs-pick.js')]);
    await openCrsPicker({ mode: 'target', onPick: (c) => {
      settings.geoCrs = c.code != null ? String(c.code) : 'my:' + P.addMine(null, c, c.name).id;
      saveSettings(); syncSettingsForm();
      status(t('geo.pick.target.set', { name: c.name }), false, true);
    } });
  }));
  um.copy.addEventListener('click', () => { const last = ST.meas?.items[ST.meas.items.length - 1]; if (last?.geo) copyText(last.geo.text).then(() => status(t('geo.copied'), false, true)); });
  um.bar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !ST.meas) return;
    if (b.hasAttribute('data-measure-crs')) { guard(openModelCrs); return; }
    if (b.hasAttribute('data-measure-georef')) { guard(openMapOrigin); return; }
    if (b.hasAttribute('data-measure-ortho')) { ST.measOrtho = !ST.measOrtho; syncMeasureBar(); status(t(ST.measOrtho ? 'measure.ortho.on' : 'measure.ortho.off')); }
    else if (b.dataset.measureMode) { ST.meas.mode = b.dataset.measureMode; ST.meas.a = null; syncMeasureBar(); redrawMeasure(); if (ST.meas.mode === 'point') status(t('geo.start')); }
    else if (b.hasAttribute('data-measure-clear')) { ST.meas.items = []; ST.meas.a = null; syncMeasureBar(); redrawMeasure(); status(t('measure.cleared')); }
    else if (b.hasAttribute('data-measure-done')) { measureOff(); status(t('measure.ended')); }
  });
  window.bimcraftMeasure = { on: measureOn, off: measureOff, state: () => ST.meas && { mode: ST.meas.mode, a: ST.meas.a, items: ST.meas.items.map((i) => ({ kind: i.kind, value: i.value, delta: i.delta, text: i.text, a: i.a, lonlat: i.geo?.lonlat || null })) },
    fileOf: (pt, key) => { const ent = entryOf(key) || cur(); return viewerToFile(pt, ST.viewer.modelMatrix(ent.mi), [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], readGeoref(ent.ifc.api, ent.model.modelID)?.fileUnitM ?? 0.001); } };   // for tests
}
