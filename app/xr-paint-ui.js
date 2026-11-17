/* SPDX-License-Identifier: Apache-2.0 */
/**
 * xr-paint-ui.js: bimcraft.js's 9 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountXrPaint(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { HIDDEN } from './ifc-vis.js';
import { fmtLength } from './measure.js';
import { newGuid, toIfcPoint, toIfcDir, fromIfcPoint, fromIfcDir } from './bcf.js';
import * as photoMat from './photo-materials.js';
import * as paintLib from './paint-bim.js';

export function mountXrPaint(ctx) {
  const { ui, status, fileHost, models, nameOfKey, authorOf, frameC, renderIssues, cur, entryOf, renderChanges, walkOff, measureOff, renderHooks, rebuild, root } = ctx;

  // ---- Export › Collada (0.9 SU.1125, session bim-dae-09): dae-bim.js on cc-collada (collada-write.js = lib/collada, the writer
  // ModelCraft's exportDAE uses too). A .dae for Blender and other 3D programs, or a Google Earth .kmz placed by the model's
  // georeference (IfcMapConversion through its CRS, else IfcSite's latitude / longitude: ifc-geo.js, the same as Measure › Location).
  async function daeChoices(geo, geoText) {
    const hasGeo = !!(geo && !geo.error);
    return new Promise((done) => {
      const radio = (name, value, label, on, off = false) => el('label', { className: 'bc-dae-opt' }, el('input', { type: 'radio', name, value, checked: on, disabled: off, ['data-dae-' + name]: value }), el('span', {}, label));
      const box = (key, label, on, off = false) => el('label', { className: 'bc-dae-opt' }, el('input', { type: 'checkbox', checked: on, disabled: off, ['data-dae-' + key]: '' }), el('span', {}, label));
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-dae-h', 'data-dae-dialog': '' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-dae-h' }, t('dae.dialog.title')),
          el('p', {}, t('dae.dialog.lede')),
          el('fieldset', { className: 'bc-dae-set' }, el('legend', {}, t('dae.dialog.format')),
            radio('format', 'dae', t('dae.dialog.format.dae'), true), radio('format', 'kmz', t('dae.dialog.format.kmz'), false, !hasGeo)),
          box('geo', t('dae.dialog.geo'), hasGeo, !hasGeo),
          el('p', { className: 'bc-muted bc-dae-geo', 'data-dae-geo-text': hasGeo ? 'found' : 'none' }, geoText),
          el('fieldset', { className: 'bc-dae-set' }, el('legend', {}, t('dae.dialog.height')),
            radio('height', 'ground', t('dae.dialog.height.ground'), true, !hasGeo), radio('height', 'model', t('dae.dialog.height.model'), false, !hasGeo)),
          box('spaces', t('dae.dialog.spaces'), false),
          box('hidden', t('dae.dialog.hidden'), false),
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-dae-ok': '' }, t('dae.dialog.export')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('dialog.cancel')))));
      const kmz = dlg.querySelector('[data-dae-format="kmz"]'), geoBox = dlg.querySelector('[data-dae-geo]');
      kmz.addEventListener('change', () => { if (kmz.checked) { geoBox.checked = true; geoBox.disabled = true; } });   // a .kmz always carries the location
      dlg.querySelector('[data-dae-format="dae"]').addEventListener('change', () => { geoBox.disabled = !hasGeo; });
      dlg.addEventListener('close', () => {
        const q = (s) => dlg.querySelector(s);
        const out = dlg.returnValue === 'ok' ? { format: q('[data-dae-format]:checked')?.value || 'dae', geo: q('[data-dae-geo]').checked && hasGeo, height: q('[data-dae-height]:checked')?.value || 'ground', spaces: q('[data-dae-spaces]').checked, hidden: q('[data-dae-hidden]').checked } : null;
        dlg.remove();
        done(out);
      });
      document.body.append(dlg);
      dlg.showModal();
    });
  }
  async function exportDae() {
    const shown = models.filter((m) => m.visible !== false);
    if (!ctx.viewer || ctx.mode !== 'ifc' || !shown.length) { status(t('dae.none'), true); return; }
    ctx.modelUi?.need3d();
    const D = await import('./dae-bim.js');
    const ent = shown.includes(cur()) ? cur() : shown[0];   // the georeference and level 0 come from the model in front
    const place = ctx.viewer.modelMatrix(ent.mi), lift = D.daeLift(ent, place);
    let geo = null;
    try {
      const [crs, pick] = await Promise.all([import('./crs.js'), import('./crs-pick.js')]);
      geo = await D.daeGeo(ent, { place, lift, crs, pick });
    } catch (err) { geo = { error: 'math', why: String(err.message || err) }; }
    const f6 = (v) => (Math.round(v * 1e6) / 1e6).toFixed(6);
    const geoText = !geo ? t('dae.dialog.geo.none')
      : geo.error ? t('dae.dialog.geo.failed', { why: geo.error === 'unknown' || geo.error === 'nocode' ? t('geo.crs.' + geo.error, { crs: geo.crs }) : geo.why || geo.error })
        : t('dae.dialog.geo.found', { lat: f6(geo.lat), lon: f6(geo.lon), heading: (Math.round(geo.heading * 10) / 10).toFixed(1), source: geo.source === 'map' ? t('dae.dialog.geo.source.map', { crs: geo.crs }) : t('dae.dialog.geo.source.site') });
    const pick = await daeChoices(geo, geoText);
    if (!pick) return;
    status(t('dae.making'));
    try {
      const placed = pick.geo || pick.format === 'kmz' ? D.geoPlace(geo, pick.height) : null;
      const base = (ctx.ifcName || 'model').replace(/\.ifc$/i, '');
      const { text, report } = await D.bimDae(models, {
        name: base, matrixOf: (mi) => ctx.viewer.modelMatrix(mi), spaces: pick.spaces, lift, geo: placed,
        isHidden: pick.hidden ? null : (key) => ctx.viewer.vis.state(key) === HIDDEN,
        progress: (d, n) => status(t('dae.progress', { done: d.toLocaleString(), total: n.toLocaleString() })),
      });
      let file;
      if (pick.format === 'kmz' && placed) {
        const { zip } = await import('./bcf.js');
        file = base + '.kmz';
        fileHost.download(new Blob([D.bimKmz(text, placed, { name: base, zip })], { type: 'application/vnd.google-earth.kmz' }), file, 'application/vnd.google-earth.kmz');
      } else {
        file = base + '.dae';
        fileHost.download(new Blob([text], { type: 'model/vnd.collada+xml' }), file, 'model/vnd.collada+xml');
      }
      window.bimcraftDae.last = { file, report, geo: placed, pick, bytes: text.length };
      status(placed ? t('dae.done.geo', { name: file, n: report.elements, mats: report.materials, lat: f6(placed.lat), lon: f6(placed.lon) }) : t('dae.done', { name: file, n: report.elements, mats: report.materials }));
    } catch (err) { status(t('dae.failed', { why: String(err.message || err) }), true); }
  }

  const xrLayers = new WeakMap();
  let xrNext = 1;
  /** Changes when a model is loaded again (an edit, someone's in a live session): the headset then rebuilds its copy. */
  const xrVersion = () => { if (!ctx.viewer) return -1; let v = 0; for (const L of ctx.viewer.layers.values()) { if (!xrLayers.has(L)) xrLayers.set(L, xrNext++); v = v * 31 + xrLayers.get(L); } return v; };
  async function openVr() {
    if (ctx.xrOn) return;
    if (ctx.xrWhy) { status(t('xr.why.' + ctx.xrWhy), true); return; }
    if (!ctx.viewer || ctx.mode !== 'ifc' || ctx.viewer.box.isEmpty()) { status(t('ui.render.none'), true); return; }
    ctx.modelUi?.need3d();
    const [X, R, PB, L] = await Promise.all([import('./xr/xr-session.js'), import('./render-bim.js'), import('./paint-bim.js'), import('./render/looks.js')]);
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { saved = null; }
    const settings = L.cleanSettings(saved);
    const ent = cur(), site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null;
    const paints = () => new Map(models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const live = globalThis.bimcraftLive?.live;
    const cam = ctx.viewer.camera, tgt = ctx.viewer.controls.target;
    try {
      ctx.xrOn = await X.startXR({
        scene: () => R.bimScene(ctx.viewer, settings, R.bimSun(site, settings, ent ? ctx.viewer.modelMatrix(ent.mi) : null), paints()),
        version: xrVersion,
        appCamera: () => ({ eye: cam.position.toArray(), target: tgt.toArray() }),
        format: (m) => fmtLength(m),
        settings,
        addIssue: (x) => {   // the camera and point arrive in the viewer's space: to the model's own (BCF) coordinates
          const C = frameC(), now = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
          const vp = { guid: newGuid(), camera: { kind: 'perspective', viewPoint: toIfcPoint(C, x.camera.viewPoint), direction: toIfcDir(C, x.camera.direction), up: toIfcDir(C, x.camera.up), fov: x.camera.fov },
            selection: [], visibility: { defaultVisible: true, exceptions: [] }, clipping: [], snapshot: x.snapshot };
          ctx.issues.push({ guid: newGuid(), title: x.title, status: 'Open', type: 'Issue', author: authorOf() || 'BimCraft', created: now, description: x.description, comments: [], viewpoints: [vp] });   // i18n-ignore: BCF values
          renderIssues();
        },
        presence: live ? { send: (p) => live.setPresence(p), peers: () => live.peers(), nameOf: (c) => live.nameOf(c) } : null,
        onExit: (pose) => {
          ctx.xrOn = null;
          if (pose) { cam.position.set(...pose.eye); tgt.set(...pose.target); ctx.viewer.controls.update(); ctx.viewer.render(); }
          status(t('xr.ended'), false, true);
        },
      });
      window.bimcraftXr = ctx.xrOn;   // the running session (tests read its state())
      status(t('xr.started'));
    } catch (e) {
      ctx.xrOn = null;
      status(t('xr.failed', { error: String(e?.message || e) }), true);
    }
  }

  async function openPaint() {
    if (!ctx.viewer || ctx.mode !== 'ifc' || ctx.viewer.box.isEmpty() || !ctx.editor) { status(t('paint.nomodel'), true); return; }
    if (!ctx.paintUi) {
      const { mountPaint } = await import('./paint-ui-bim.js');
      ctx.paintUi = mountPaint({
        root, parent: ui.canvasWrap,
        viewer: () => ctx.viewer,
        target: (key) => { const ent = entryOf(key); if (!ent || ent !== cur() || !ctx.editor) return null; return { editor: ctx.editor, id: key - (ent.model.keyBase || 0), C: [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], P: ctx.viewer.modelMatrix(ent.mi) }; },
        selection: () => [...ctx.viewer.selection],
        nameOfKey,
        rebuild: (key) => rebuild(key),
        afterEdit: () => renderChanges(),
        status: (text, isError, fade) => status(text, isError, fade),
        beforeOpen: () => { if (ctx.meas) measureOff(); },
        liveTextures: { isOn: () => (ctx.liveTex ? ctx.liveTex.isOn() : true), set: (v) => ctx.liveTex?.on(v) },   // 0.8 RENDER-NEXT
        photo: {   // 0.8 EG.62: a photo → a tiling material of the file (colour tile kept in the IFC; roughness and relief worked out from it)
          make: async (file, { size }) => {
            if (!/^image\/(png|jpeg|webp)$/.test(file.type) || file.size > 32 * 1048576) throw new Error(t('paint.photo.type'));
            const { decodePhoto } = await import('./photo-material.js');
            const photo = await decodePhoto(file.type, new Uint8Array(await file.arrayBuffer()));
            const have = photoMat.readRecords(ctx.editor.api, ctx.editor.mid).records;
            if (have.length >= photoMat.MAX_MATERIALS) throw new Error(t('paint.photo.many', { n: photoMat.MAX_MATERIALS }));
            const name = file.name.replace(/\.[a-z0-9]+$/i, '').replace(/[_\-.]+/g, ' ').trim() || t('paint.photo.default_name');
            const made = photoMat.makeFromPhoto(photo, { name, size });
            photoMat.remember(made.record, made.maps.color);
            ctx.editor.modelChange(photoMat.writeOp([...have, made.record]), { label: made.record.name, verb: t('paint.photo.verb') });
            await photoMat.refresh(models.map((m) => ({ api: m.ifc.api, mid: m.model.modelID })));
            renderChanges();
            return { id: made.record.id, name: made.record.name, size: made.record.size, seam: made.stats.seam };
          },
          remove: async (id) => {
            const used = [...paintLib.readPaint(ctx.editor.api, ctx.editor.mid).values()].filter((p) => p.all === id || Object.values(p.sides).includes(id)).length;
            if (used) throw new Error(t('paint.photo.in_use', { n: used }));
            const have = photoMat.readRecords(ctx.editor.api, ctx.editor.mid).records, gone = have.find((r) => r.id === id);
            if (!gone) throw new Error(t('paint.photo.missing'));
            ctx.editor.modelChange(photoMat.writeOp(have.filter((r) => r.id !== id)), { label: gone.name, verb: t('paint.photo.removed_verb') });
            await photoMat.refresh(models.map((m) => ({ api: m.ifc.api, mid: m.model.modelID })));
            renderChanges();
            return gone.name;
          },
        },
        onClose: () => { ctx.setPressed('paint', false, 'paint-open'); },
      });
    }
    if (ctx.paintUi.isOpen()) { ctx.paintUi.close(); return; }
    ctx.modelUi?.need3d();   // 0.6 BIM-F5: the palette sits over the 3D view, so the plan-only layout shows it beside the plan
    ctx.paintUi.open();
    ctx.setPressed('paint', true, 'paint-open');
  }
  // ---- Views (0.5 RC.7, session render): saved cameras and walkthroughs in the IFC (views-ui-bim.js + views-bim.js) ----
  // 0.8 WALK: a saved walkthrough as a rendered video, frame by frame, in the shared Render video dialog (render/video-ui.js, the one ModelCraft uses).
  // The camera of frame i is the walk's eye and direction at that second (views-bim.js viewAt), in the 3D view's own coordinates.
  async function renderWalkVideo(walk) {
    if (!ctx.viewer || ctx.mode !== 'ifc' || ctx.viewer.box.isEmpty() || !walk || !walk.pts || walk.pts.length < 2) { status(t('ui.render.none'), true); return; }
    ctx.modelUi?.need3d();
    const [{ openVideoDialog }, { viewAt }, H] = await Promise.all([import('./render/video-ui.js'), import('./views-bim.js'), renderHooks()]);
    const C = frameC(), end = walk.pts[walk.pts.length - 1].t;
    openVideoDialog({
      scene: (st) => {
        const sc = H.scene(st);
        sc.frameAt = (sec) => ({
          camera(aspect) {
            const at = viewAt(walk, sec), pos = fromIfcPoint(C, at.pos), dir = fromIfcDir(C, at.dir), c = ctx.viewer.camera.clone();
            c.position.set(pos[0], pos[1], pos[2]); c.up.set(0, 1, 0); c.lookAt(pos[0] + dir[0], pos[1] + dir[1], pos[2] + dir[2]);
            if (c.isPerspectiveCamera) c.aspect = aspect;
            c.updateProjectionMatrix(); c.updateMatrixWorld(true);
            return { world: c.matrixWorld.elements.slice(), proj: c.projectionMatrix.elements.slice() };
          },
        });
        return sc;
      },
      length: () => end,
      fps: 30,
      viewSize: () => ({ w: ui.canvas.clientWidth, h: ui.canvas.clientHeight }),
      settings: H.saved,
      video: null,
      saveVideo: () => {},
      download: (blob, name) => fileHost.download(blob, name, blob.type),
      fileBase: () => (ctx.ifcName || 'model').replace(/\.ifc$/i, '') + ' ' + walk.name,
      parent: root,
      onClose: () => ctx.viewer.render(),
    });
  }

  async function openViews() {
    if (!ctx.viewer || ctx.mode !== 'ifc' || ctx.viewer.box.isEmpty() || !ctx.editor) { status(t('views.nomodel'), true); return; }
    if (!ctx.viewsUi) {
      const { mountViews } = await import('./views-ui-bim.js');
      ctx.viewsUi = mountViews({
        root, parent: ui.canvasWrap,
        viewer: () => ctx.viewer,
        editor: () => (ctx.mode === 'ifc' ? ctx.editor : null),
        frameC,
        stopWalk: () => { if (ctx.walking) walkOff(); },
        status: (text, isError, fade) => status(text, isError, fade),
        afterEdit: () => renderChanges(),
        renderWalk: (walk) => renderWalkVideo(walk),   // 0.8 WALK
        onClose: () => ctx.setPressed('views', false, 'saved-views'),
      });
    }
    if (ctx.viewsUi.isOpen()) { ctx.viewsUi.close(); return; }
    ctx.modelUi?.need3d();   // 0.6 BIM-F5: views are cameras of the 3D view
    ctx.viewsUi.open();
    ctx.setPressed('views', true, 'saved-views');
  }

  return { exportDae, openVr, openPaint, openViews };
}
