/* SPDX-License-Identifier: Apache-2.0 */
/**
 * render-export-ui.js: bimcraft.js's 13 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountRenderExport(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { sendHandoff } from './handoff.js';
import { dms } from './ifc-geo.js';

export function mountRenderExport(ctx) {
  const { ST, ui, status, frame, guard, renderChanges, cur, entryOf, nameOfKey, showStage, syncScanProg, root } = ctx;

  // ---- Render a picture (0.5 RC.11, session render): the shared renderer in render/ (a copy of ModelCraft's) through
  // render-bim.js, both imported on first use. The settings and looks are this browser's (localStorage "bimcraft.render").
  /** The Render dialog's scene and settings (shared with the assistant's render_still / render_queue, 0.7 AS.6 render-tools.js). */
  async function renderHooks() {
    const [R, PB] = await Promise.all([import('./render-bim.js'), import('./paint-bim.js')]);
    // painted elements (RC.7): each model's CadCraft_Render sets, read when a render starts
    const lampModels = () => ctx.models.filter((m) => m.visible !== false).map((m) => ({ mi: m.mi, api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0 }));
    const paints = () => new Map(ctx.models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const ent = cur();
    const site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null;
    const base = R.bimSunBase(site);
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { saved = null; }
    // 0.11 SU.1816: the light webs the model carries (the lighting design add-on's luminaires) go into settings.ies by the lamp's name, ahead of the ones picked by hand;
    // the model's web wins for a name it carries (so a design drawn again is seen with its new webs)
    try { const webs = R.bimIes(lampModels()); if (Object.keys(webs).length) { const own = (saved && saved.ies) || {}; saved = { ...(saved || {}), ies: { ...webs, ...Object.fromEntries(Object.entries(own).filter(([k]) => !(k in webs))) } }; } } catch (e) { console.warn('model light webs not read:', e); }   // i18n-ignore
    const scene = (st) => ({ ...R.bimScene(ST.viewer, st, R.bimSun(site, st, ent ? ST.viewer.modelMatrix(ent.mi) : null), paints()), lights: R.bimLamps(ST.viewer, lampModels()).filter((L) => L.on) });
    return { R, lampModels, site, base, saved, scene };
  }
  async function openRender() {
    if (!ST.viewer || ST.mode !== 'ifc' || ST.viewer.box.isEmpty()) { status(t('ui.render.none'), true); return; }
    ST.modelUi?.need3d();   // 0.6 BIM-F5: the picture is of the 3D view
    const [{ openRenderDialog }, H] = await Promise.all([import('./render/render-ui.js'), renderHooks()]);
    const { R, lampModels, site, base, saved } = H;
    openRenderDialog({
      scene: H.scene,
      handoff: async (s, z) => { const { bimHandoff } = await import('./handoff-bim.js'); return bimHandoff({ scene: H.scene, entries: ctx.models, matrixOf: (mi) => ST.viewer.modelMatrix(mi), name: ST.ifcName || 'model.ifc', glb: async () => ({ lamps: R.bimLamps(ST.viewer, lampModels()), site, names: glbNames() }) })(s, z); },   // 0.8 RE.2 + RE.6 (engines): hand-off package for outside engines
      lamps: () => R.bimLamps(ST.viewer, lampModels()),
      setLamp: (key, patch) => {   // one undo step in the fixture's own model (its CadCraft_Light set)
        const e = entryOf(key);
        if (!e || !e.editor) return;
        try { e.editor.modelChange(R.lampOp(key - (e.model.keyBase || 0), patch), { label: nameOfKey(key), verb: t('render.lamps') }); renderChanges(); } catch (err) { status(String(err.message || err), true); }
      },
      viewSize: () => ({ w: ui.canvas.clientWidth, h: ui.canvas.clientHeight }),
      colors: () => R.bimColors(ST.viewer),
      modelSun: () => ({ month: base.month, day: base.day, hour: base.hour, src: site ? 'site' : 'assumed', lat: base.lat }),
      settings: saved,
      save: (st) => { try { localStorage.setItem('bimcraft.render', JSON.stringify(st)); } catch { /* private window: this dialog only */ } },
      download: (blob, name) => ctx.fileHost.download(blob, name, 'image/png'),
      fileBase: () => (ST.ifcName || 'model').replace(/\.ifc$/i, ''),
      parent: root,
      onClose: () => ST.viewer.render(),
    });
  }

  async function openLive(win = false) {
    if (!ST.viewer || ST.mode !== 'ifc' || ST.viewer.box.isEmpty()) { status(t('ui.render.none'), true); return; }
    ST.modelUi?.need3d();
    const [{ openLiveView }, { bimLive }, R, PB, { pagePool }] = await Promise.all([import('./rt/rt-view.js'), import('./rt/rt-bim.js'), import('./render-bim.js'), import('./paint-bim.js'), import('./compute/runtime.js')]);
    const lampModels = () => ctx.models.filter((m) => m.visible !== false).map((m) => ({ mi: m.mi, api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0 }));
    const paints = () => new Map(ctx.models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const ent = cur();
    const site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null, base = R.bimSunBase(site);
    const place = () => (ent ? ST.viewer.modelMatrix(ent.mi) : null);
    const saved = () => { try { return JSON.parse(localStorage.getItem('bimcraft.render') || 'null') || {}; } catch { return {}; } };
    ST.liveView?.close();
    ST.liveView = await openLiveView(bimLive({
      viewer: ST.viewer,
      scene: (st) => ({ ...R.bimScene(ST.viewer, st, R.bimSun(site, st, place()), paints()), lights: R.bimLamps(ST.viewer, lampModels()).filter((L) => L.on) }),
      sun: (st) => R.bimSun(site, st, place()),
      sunBase: () => ({ month: base.month, day: base.day, hour: base.hour }),
      settings: saved,
    }), { t, parent: root, pool: await pagePool({}), window: win });
  }

  // ---- Model for rendering programs (0.6 DC.22, session bim-extra_PART_2): what the 3D view shows as glTF (.glb) — the render
  // scene (render-bim.js: painted materials, the colours' chosen looks, the lamps that are on) written by glb-bim.js ----
  /** The names the glTF carries (storey / material / colour): Export › glTF and the render hand-off (0.8 RE.6) both use them. */
  function glbNames() {
    const storeyName = (mi, s) => { const e = ctx.models.find((m) => m.mi === mi); const st = e?.model?.storeys?.find?.((x) => x.id === s); return st ? String(st.name) : ''; };
    return { storey: storeyName, material: (id) => t('render.mat.' + id), colour: (hex, look) => t('glb.colour', { color: hex, look: t('render.look.' + look) }) };
  }
  async function exportGlb(kind = 'glb') {   // 'gltf' (0.8 DC.22): the same scene as one self-contained .gltf, the form Enscape's asset library lists
    if (!ST.viewer || ST.mode !== 'ifc' || ST.viewer.box.isEmpty()) { status(t('glb.none'), true); return; }
    ST.modelUi?.need3d();
    status(t('glb.making'));
    const [R, PB, G, L] = await Promise.all([import('./render-bim.js'), import('./paint-bim.js'), import('./glb-bim.js'), import('./render/looks.js')]);
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { saved = null; }
    const settings = L.cleanSettings(saved);
    const paints = new Map(ctx.models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const lampModels = ctx.models.filter((m) => m.visible !== false).map((m) => ({ mi: m.mi, api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0 }));
    const ent = cur(), site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null;
    const scene = R.bimScene(ST.viewer, settings, null, paints);
    try {
      const { bytes, stats } = await G.sceneGlb(scene, {
        settings, lamps: R.bimLamps(ST.viewer, lampModels), site,
        names: glbNames(),
      });
      const base = (ST.ifcName || 'model').replace(/\.ifc$/i, '');
      if (kind === 'gltf') {
        const text = G.glbToGltf(bytes);
        ctx.fileHost.download(new Blob([text], { type: 'model/gltf+json' }), base + '.gltf', 'model/gltf+json');
        status(t('gltf.done', { tris: stats.triangles.toLocaleString(), mats: stats.materials, lamps: stats.lights }));
        return;
      }
      ctx.fileHost.download(new Blob([bytes], { type: 'model/gltf-binary' }), base + '.glb', 'model/gltf-binary');
      status(t('glb.done', { tris: stats.triangles.toLocaleString(), mats: stats.materials, lamps: stats.lights }));
    } catch (err) { status(t('glb.failed', { why: String(err.message || err) }), true); }
    finally { scene.dispose(); }
  }
  // ---- Export › USD (0.7 XF.8, session usd): the open models by docs/USD-CONVENTIONS.md — usd-bimcraft.js on cc-usd (./usd/) ----
  /** The open models as OpenUSD bytes (the menu and the assistants' usd_export both call this). */
  async function makeUsd(format, progress) {
    const { bimUsd } = await import('./usd-bimcraft.js');
    const base = (ST.ifcName || 'model').replace(/\.ifc$/i, '');
    const { data, report } = await bimUsd(ctx.models, { format, name: ST.ifcName || 'model.ifc', matrixOf: (mi) => ST.viewer.modelMatrix(mi), progress });
    const type = format === 'usda' ? 'model/vnd.usda' : format === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream';
    return { data, report, base, type };
  }
  async function exportUsd() {
    if (!ST.viewer || ST.mode !== 'ifc' || !ctx.models.length) { status(t('usd.export.none'), true); return; }
    const format = await new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-usd-h' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-usd-h' }, t('usd.dialog.title')),
          el('p', {}, t('usd.export.lede')),
          el('p', { className: 'bc-lib-actions' },
            ...['usda', 'usdc', 'usdz'].map((f, k) => el('button', { type: 'submit', className: (k === 2 ? 'btn-plot' : 'btn-line') + ' btn-sm-cc', value: f, ['data-usd-' + f]: '' }, t('usd.dialog.format.' + f))),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('dialog.cancel')))));
      dlg.addEventListener('close', () => { dlg.remove(); done(['usda', 'usdc', 'usdz'].includes(dlg.returnValue) ? dlg.returnValue : null); });
      document.body.append(dlg);
      dlg.showModal();
    });
    if (!format) return;
    status(t('usd.export.making'));
    try {
      const { data, report, base, type } = await makeUsd(format, (d, n) => status(t('usd.export.progress', { done: d, total: n })));
      ctx.fileHost.download(new Blob([data], { type }), base + '.' + format, type);
      status(t('usd.done', { name: base + '.' + format, n: report.elements }));
    } catch (err) { status(t('usd.export.failed', { why: String(err.message || err) }), true); }
  }

  async function openCloud(file) {
    if (!ST.pc) {
      const { installClouds } = await import('./cloud-ui.js');
      ST.pc = installClouds({ root, viewer: () => ST.viewer, ensureViewer: () => { const away = ui.toolbar.hidden || ui.canvasWrap.hidden; const v = ctx.ensureViewer(); if (away) showStage('ifc'); return v; },
        models: () => ctx.models.filter((m) => m.visible !== false), status, frame, guard, sendHandoff, cloudShown: cloudPressed,
        cloudChanged: () => { ST.scanUi?.changed(); syncScanProg(); } });   // 0.6 DF.22: the plan's slice is cut again (cloud-ui.js calls it when the cloud is placed, adjusted or closed)
      window.bimcraftCloud = ST.pc;   // for tests and the console
    }
    await ST.pc.open(file);
    ST.viewer.cloudSnap = (x, y) => ST.pc.snap(x, y);
    ST.scanUi?.changed();   // 0.6 DF.22
    syncScanProg();
  }

  async function openRegister() {
    if (!ST.registerUi) {
      const { installRegister } = await import('./register-ui.js');
      ST.registerUi = installRegister({ root, status, openRegistered: openCloud });
      window.bimcraftRegister = ST.registerUi;   // for tests and the console
    }
    ST.registerUi.open();
  }

  const hasSavedMaps = () => { try { return (JSON.parse(localStorage.getItem('bimcraft.maps') || '{}')?.layers || []).length > 0; } catch { return false; } };
  function ensureMaps() {
    return (ST.bimMapsLoading ||= import('./maps-bim.js').then((m) => m.installBimMaps({
      root, attrib: ui.canvasWrap, viewer: () => ST.viewer, models: () => ctx.models.filter((x) => x.visible !== false),
      say: (s) => status(s), busy: (s) => status(s), ask: null, refocus: () => {},
    })).then((m) => { ST.bimMaps = m; window.bimcraftMaps = m; return m; }, (e) => { ST.bimMapsLoading = null; throw e; }));
  }
  const cloudPressed = (on) => ui.toolbar.querySelector('[data-cloud-open]')?.setAttribute('aria-pressed', on ? 'true' : 'false');
  async function locateCloudPoint(h) {
    const g = await ST.pc.locate(h.point);
    if (!g) { status(t('pc.locate.none'), true); return; }
    const text = [t('geo.latlon', { lat: ctx.fx(g.lat, 8), lon: ctx.fx(g.lon, 8), sys: 'WGS 84' }), dms(g.lat, 'lat') + ', ' + dms(g.lon, 'lon'),   // i18n-ignore: the system's own name
      t('pc.locate.grid.u', { e: ctx.gu(g.e * (g.per || 1)), n: ctx.gu(g.n * (g.per || 1)), h: ctx.gu(g.h * (g.per || 1)), crs: g.crs }) + ctx.ownNote(Math.abs((g.per || 1) - 0.3048) < 1e-9 ? 'ft' : Math.abs((g.per || 1) - 1200 / 3937) < 1e-9 ? 'ftUS' : 'm')];
    ST.meas.items.push({ kind: 'point', a: h.point, label: ctx.fx(g.lat, 6) + ', ' + ctx.fx(g.lon, 6), text: text.join(' · '), lines: [text[0] + ' · ' + text[1], text[2]], geo: { lonlat: [g.lon, g.lat], text: text.join(' · ') } });
    ctx.syncMeasureBar();
    ctx.redrawMeasure();
    status(t('pc.locate.done'), false, true);
  }

  return { renderHooks, openRender, openLive, exportGlb, makeUsd, exportUsd, openCloud, openRegister, hasSavedMaps, ensureMaps, cloudPressed, locateCloudPoint };
}
