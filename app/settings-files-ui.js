/* SPDX-License-Identifier: Apache-2.0 */
/**
 * settings-files-ui.js: bimcraft.js's 10 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountSettingsFiles(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t, has } from './i18n.js';
import { mountViewCube, mountAxisIcon } from './m3d/viewcube.js';

export function mountSettingsFiles(ctx) {
  const { status, open, root } = ctx;

  const okMargin = (v) => Number.isFinite(v) && v >= 0 && v <= 5000;

  // 0.8 D8.9: any EPSG number, or one of the person's own ('my:<id>', crs-pick.js), besides the quick picks
  const okGeoCrs = (v) => typeof v === 'string' && (ctx.GEO_CRS.includes(v) || /^\d{4,6}$/.test(v) || /^my:[a-z0-9]{1,12}$/.test(v));

  // 0.4 X.7: assistants (AGENTS-SPEC §7): off unless the person turned them on; groups read, edit and (0.6 DF.25) save
  function readAssist(v) {
    const a = v && v.assistants;
    if (a && typeof a === 'object') ctx.settings.assistants = { enabled: a.enabled === true, groups: (Array.isArray(a.groups) ? a.groups : []).filter((g) => g === 'read' || g === 'edit' || g === 'save' || g === 'export') };
  }

  // 0.8 D8.9: a system chosen from the whole catalog (or one of the person's own) shows as one more option beside the quick picks
  function syncGeoOption(sel) {
    const v = ctx.settings.geoCrs;
    sel.querySelectorAll('option[data-geo-extra]').forEach((o) => o.remove());
    if (![...sel.options].some((o) => o.value === v)) {
      const o = document.createElement('option');
      o.value = v; o.dataset.geoExtra = ''; o.textContent = v.startsWith('my:') ? t('set.geo.mine', { name: '…' }) : 'EPSG:' + v;   // i18n-ignore: the number until the catalog names it
      sel.append(o);
      import('./crs-pick.js').then(async (P) => {
        const c = await import('./crs.js');
        if (!c.catalogLoaded()) await c.loadCatalog();
        const sys = P.systemFor(v);
        if (sys) o.textContent = v.startsWith('my:') ? t('set.geo.mine', { name: sys.name }) : t('set.geo.other', { name: sys.name, code: v });
      }).catch(() => { /* the number stays */ });
    }
    sel.value = v;
  }
  function syncSettingsForm() {
    if (!ctx.settingsDlg) return;
    const f = (n) => ctx.settingsDlg.querySelectorAll('[name="' + n + '"]');
    f('bcSpaces').forEach((i) => { i.checked = ctx.settings.spaces; });
    f('bcEdges').forEach((i) => { i.checked = i.value === ctx.settings.edges; });
    f('bcView').forEach((i) => { i.checked = i.value === ctx.settings.view; });
    f('bcTurned').forEach((i) => { i.checked = i.value === ctx.settings.turned; });
    f('bcSnap').forEach((i) => { i.checked = ctx.settings.snap; });
    f('bcCorner').forEach((i) => { i.checked = i.value === ctx.settings.corner; });
    f('bcBoxMargin').forEach((i) => { i.value = String(ctx.settings.boxMargin); });
    f('bcGeoCrs').forEach((i) => syncGeoOption(i));
    f('bcDwgStart').forEach((i) => { i.checked = i.value === ctx.settings.dwgStart; });
    f('bcIdsEmbed').forEach((i) => { i.checked = ctx.settings.idsEmbed; });   // 0.7.1 71.25
    f('bcIfcx').forEach((i) => { i.checked = ctx.settings.ifcx; });   // 0.9 SU.882
    f('bcPanelFocus').forEach((i) => { i.checked = ctx.settings.panelFocus; });   // 0.9 FX.55
    applyPanelFocus();
    const as = ctx.settings.assistants;
    f('bcAssist').forEach((i) => { i.checked = as.enabled; });
    f('bcAssistRead').forEach((i) => { i.checked = as.groups.includes('read'); i.disabled = !as.enabled; });
    f('bcAssistEdit').forEach((i) => { i.checked = as.groups.includes('edit'); i.disabled = !as.enabled; });
    f('bcAssistSave').forEach((i) => { i.checked = as.groups.includes('save'); i.disabled = !as.enabled; });   // 0.6 DF.25
    f('bcAssistExport').forEach((i) => { i.checked = as.groups.includes('export'); i.disabled = !as.enabled; });   // 0.7 AS.6
  }

  function addCorner(host, opts) {
    const cube = mountViewCube(host, { ...opts, corner: 'bottom-right', i18n: { t, has } });
    const axes = mountAxisIcon(host, { getView: opts.getView, corner: 'bottom-right', i18n: { t, has } });
    const c = { cube, axes, opts };
    ctx.corners.push(c);
    applyCorner();
    return { update: () => { cube.update(); axes.update(); }, stop: () => opts.stop?.(), c };
  }
  function applyCorner() {
    for (const c of ctx.corners) { c.cube.setVisible(ctx.settings.corner === 'cube'); c.axes.setVisible(ctx.settings.corner === 'axes'); c.cube.update(); c.axes.update(); }
  }
  function applyPanelFocus() { root.toggleAttribute('data-panel-focus', ctx.settings.panelFocus === true); }   // panel-focus.js and the lock buttons read this
  function saveSettings() { try { localStorage.setItem('bimcraft.settings', JSON.stringify(ctx.settings)); } catch (e) { /* this tab keeps them */ } }

  // 2026-11-12: "Try a sample file" on the empty page opens a small real IFC house through the normal open path (also in the command palette, Ctrl+K)
  const openSampleHouse = async () => {
    try {
      const r = await fetch(new URL('./samples/sample-house.ifc', import.meta.url));
      if (!r.ok) throw new Error('HTTP ' + r.status);
      await open(new File([await r.blob()], 'sample-house.ifc', { type: 'application/octet-stream' }), 'sample-house.ifc');
    } catch (err) { status(t('ui.hint.trysample.fail', { why: err.message }), true); }
  };

  return { okMargin, okGeoCrs, readAssist, syncSettingsForm, addCorner, applyCorner, applyPanelFocus, saveSettings, openSampleHouse };
}
