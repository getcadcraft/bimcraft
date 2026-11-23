/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-open-ui.js: bimcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountIfcOpen(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { Viewer3D } from './viewer3d.js';
import * as paintLib from './paint-bim.js';
import { t } from './i18n.js';
import { threeCubeOptions } from './m3d/viewcube-three.js';
import { mountCoords } from './coords-ui.js';
import { readLevels } from './model-levels.js';
import { ModelWriter } from './model-write.js';
import * as WebIFC from './ifc/api.js';
import { getDisplayUnits } from './model-units.js';
import { IfcModel } from './ifc-model.js';
import { IfcEditor } from './ifc-edit.js';
import { wireOffer as addonsOffer } from './addons-file.js';
import { num } from './ui-util.js';

export function mountIfcOpen(ctx) {
  const { ST, ui, status, frame, SMALL_MODEL, settings, addCorner, fromFolder, syncDisplayButtons, ifcUnitsSaid, fillIfcInfo, fillStoreys, fillClasses, fillTree, afterPick, renderColor, clearProps, showMany, cur, renderModels, renderChanges, applyViewTurn, sectionOff, onBoxGrip, walkOff, measureOff, placeMeasureLabels, ensureMaps, syncVis, showStage, stopPlacing, syncEdit, root } = ctx;

  function ensureViewer() {
    if (ST.viewer) return ST.viewer;
    ui.canvasWrap.hidden = false;
    ST.viewer = new Viewer3D(ui.canvas, { onPick: (key) => { afterPick(); if (ST.viewer.selection.size > 1) showMany(); else ctx.showProps(key); } });
    // GH.3-B: Shaded / Edges / Wireframe are three buttons beside the view cube (input commands view.display.* click them)
    root.querySelectorAll('[data-display-set]').forEach((b) => b.addEventListener('click', () => { ST.viewer.setDisplayMode(b.dataset.displaySet); ctx.setPressed('edges', ST.viewer.edgesOn); syncDisplayButtons(); }));
    ui.canvas.viewer = ST.viewer;   // for tests and the console
    // 0.8 RENDER-NEXT: painted materials show their texture in the 3D view (textures-live.js, an overlay on the merged batches)
    import('./textures-live.js').then((M) => {
      ST.liveTex = M.mountLiveTextures({
        viewer: ST.viewer,
        paints: () => new Map(ctx.models.map((m) => [m.mi, { paint: paintLib.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }])),
        settings: () => ({}),
        onTooBig: () => status(t('paint.tex.big'), true),
      });
      window.bimcraftLiveTex = ST.liveTex;   // for tests
      ST.liveTex.later();
    }).catch((e) => console.warn('live textures did not start:', e));   // i18n-ignore: a console note
    // web-ifc hands the viewer Y-up coordinates: the adapter turns them so the cube's Top is the model's top. The cube
    // works in the view frame (0.6 DC.57: a building turned in its site, viewer.viewTurn): its faces are the building's
    // Front, Right … and its compass is turned back so N stays the model's north (applyViewTurn).
    const cubeBase = threeCubeOptions({ camera: () => ST.viewer.camera, controls: () => ST.viewer.controls, render: () => ST.viewer.render(), home: () => ST.viewer.view('iso'), yUp: true });
    const rz = (v, a) => [v[0] * Math.cos(a) - v[1] * Math.sin(a), v[0] * Math.sin(a) + v[1] * Math.cos(a), v[2]];   // cube axes: Z up
    const ci = addCorner(ui.canvasWrap, {
      ...cubeBase,
      getView: () => { const v = cubeBase.getView(), a = -ST.viewer.viewTurn; return { ...v, dir: rz(v.dir, a), up: rz(v.up, a) }; },
      setView: (v, o) => { const a = ST.viewer.viewTurn; cubeBase.setView({ ...v, dir: rz(v.dir, a), up: rz(v.up, a) }, o); },
    });
    ST.cube3d = ci.c.cube;
    ST.viewer.onRender = () => { ci.update(); placeMeasureLabels(); ST.coordsUi?.render(); };
    // 0.6 DF.15 (coords-ui.js): where am I working — readouts over the 3D view and the plan, the origin and survey point
    ST.coordsUi = mountCoords({
      wrap3d: ui.canvasWrap, canvas: ui.canvas, planWrap: root.querySelector('[data-plan-wrap]'), t,
      viewer: () => ST.viewer,
      entry: () => { const ent = ST.mode === 'ifc' ? cur() : null; return ent ? { api: ent.ifc.api, mid: ent.model.modelID, C: [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], place: ST.viewer.modelMatrix(ent.mi) } : null; },
      levels: () => { const ent = cur(); return ent ? readLevels(new ModelWriter(WebIFC, ent.ifc.api, ent.model.modelID)) : []; },
      units: getDisplayUnits,
    });
    ST.coordsUi.onToggle = () => ST.modelUi?.coordsChanged();
    ST.viewer.onUserMove = ci.stop;
    ST.viewer.onGrip = (phase, i, e) => onBoxGrip(phase, i, e);   // section box grips (0.5 WL.2)
    ui.canvas.cube = ci.c;   // for tests
    return ST.viewer;
  }

  async function openIfc(data, file, path, { transfer = false } = {}) {   // transfer (0.10 PERF.23): `data` was just read from the file and nothing else holds it: no copy for the worker
    if (!ST.ifc) {
      status(t('ifc.starting'));
      await frame();
      ST.ifc = await IfcModel.create(WebIFC);
    }
    ensureViewer();
    status(t('ifc.reading'));
    await frame();
    const t0 = performance.now();
    stopPlacing();
    for (const m of ctx.models.slice(1)) m.ifc.close();   // a new file: the scene starts again with this one model
    for (const m of ctx.models) m.asDoc?.close();          // … and the old models' recovery copies go (kept or discarded on purpose)
    ctx.models.length = 0;
    const lv = window.bimcraftLive?.live;   // Studio Live: another file opened here ends the session for this window; a joiner's snapshot doesn't
    if (lv && !window.bimcraftLive.joining) lv.client?.leave(); else lv?.reloading();
    // 0.11 PERF.8: the model is drawn as the geometry worker sends it (viewer3d.js preview; setModel below replaces it): the 3D view shows from the
    // first pieces (only the canvas: the rest of the stage follows once the model is open); a failed open puts the stage back as it was
    const was = { canvas: ui.canvasWrap.hidden, empty: ui.empty.hidden };
    ST.viewer.previewStart();
    let shown = false;
    const onPieces = (pieces) => { if (!shown) { shown = true; ui.empty.hidden = true; ui.canvasWrap.hidden = false; ST.viewer.resize(); } ST.viewer.previewAdd(pieces); };
    try { ST.model = await ST.ifc.load(data, (done, total) => { status(t('ifc.building', { done, total })); }, { transfer, onPieces }); }
    catch (e) { ST.viewer.previewEnd(); ui.canvasWrap.hidden = was.canvas; ui.empty.hidden = was.empty; throw e; }
    ST.refC = [...ST.ifc.api.GetCoordinationMatrix(ST.model.modelID)];
    await frame();
    showStage('ifc');
    ST.mode = 'ifc';
    ST.swapTarget = null;
    ctx.library.refresh();
    ST.viewer.spacesOn = settings.spaces;
    ST.viewer.edgesOn = settings.edges === 'on' || (settings.edges === 'small' && ST.model.triangles <= SMALL_MODEL);
    ST.viewer.displayMode = root.querySelector('[data-display-set="wireframe"]')?.getAttribute('aria-pressed') === 'true' ? 'wireframe' : ST.viewer.edgesOn ? 'edges' : 'shaded';
    syncDisplayButtons();
    ST.viewer.vis.showAll();   // a new model starts with everything shown
    if (ST.meas) measureOff();
    if (ST.walking) walkOff();
    ST.viewer.setModel(ST.model);
    sectionOff();   // a new model starts uncut
    ST.modelTag = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    ST.editor = new IfcEditor(WebIFC, ST.ifc);
    ST.ifcName = file.name;
    ctx.models.push({ mi: 0, ifc: ST.ifc, model: ST.model, editor: ST.editor, name: file.name, size: file.size, file, tag: ST.modelTag, offset: [0, 0, 0], visible: true });
    ST.active = ctx.models[0];
    ST.viewer.setModelMatrix(0, ctx.placementOf(ctx.models[0]));
    applyViewTurn();   // 0.6 DC.57: square to a building turned in its site (needs the editor: buildingTurn)
    ST.viewer.view(settings.view);
    ST.pc?.modelChanged();   // an open point cloud is placed again against the new model
    if (ST.bimMaps || ctx.hasSavedMaps()) ensureMaps().then((m) => m.modelChanged(), () => {});   // map layers on the ground (SG.3)
    renderModels();
    try { addonsOffer(root.querySelector('[data-addons-file]'), ST.ifc.api, ST.model.modelID); } catch (e) { /* the banner is optional */ }   // 0.8 AL.6
    ST.selected = null;
    if (window.bimcraftLive?.joining) { window.bimcraftLive.joining = false; window.bimcraftLive.live?.loaded(); }
    renderChanges();
    ST.picturesUi?.attach();   // 0.8 D8.8: the 3D planes of this model's pictures
    { const api = ST.ifc.api, mid = ST.model.modelID; setTimeout(() => { try { api.PrepareInverses?.(mid)?.catch?.(() => {}); } catch (e) { /* closed */ } }, 1200); }   // 0.10 PERF.37: the property indexes, built in slices after the open, not on the first click
    fillIfcInfo(ST.model, file);
    ui.back.hidden = !fromFolder(path);
    fillStoreys(ST.model);
    fillClasses(ST.model);
    fillTree(false);
    ST.propIx = null; ST.colorField = '';
    ST.guidKeys = null; ST.currentIssue = null;
    ctx.renderIssues();
    ST.findRules = [{ field: 'cls', op: 'is', value: '' }];
    ctx.renderFind();
    ST.clashRun?.stop?.(); ST.clashRes = null; ST.clashAt = -1; ST.clashMsg = '';
    ST.auditUi?.changed();   // 0.10 BK.65: another model: the last audit's findings go
    ST.lodUi?.changed();   // 0.10 bim-lod-10
    ST.checkRes = null;
    ST.checksArmed = false; ST.checksSrc?.clear(); ST.adviceSrc?.invalidate(); ctx.syncAccepted();   // 0.7.1 → 0.8: another model, its own problems and accepted list (from its IFC)
    ST.idsUi?.reset();   // 0.7.1 71.25: and the IDS it remembers
    if (ui.checksSec) ui.checksSec.hidden = false;
    ctx.renderChecks();
    ST.qtoSums = null; ST.qtoGroups = ['cls'];
    if (ui.qtoSec) ui.qtoSec.hidden = false;
    ctx.renderQto();
    ctx.fdClear(true);
    if (ui.fdSec) ui.fdSec.hidden = false;
    ctx.renderFd();
    if (ui.clashSec) ui.clashSec.hidden = false;
    ctx.renderClash();
    ST.viewer.setColors(null);
    renderColor();
    clearProps();
    syncVis();
    ctx.setPressed('edges', ST.viewer.edgesOn && ST.viewer.edgesAvailable);
    ctx.setPressed('spaces', ST.viewer.spacesOn);
    ctx.toolButton('edges').disabled = !ST.viewer.edgesAvailable;
    ctx.toolButton('edges').title = ST.viewer.edgesAvailable ? t('edges.title') : t('edges.title.off');
    syncEdit();
    status(t('ifc.opened', { file: file.name, n: ST.model.elements, count: num(ST.model.elements), s: ((performance.now() - t0) / 1000).toFixed(1) }) + ifcUnitsSaid(file), false, true);
    ST.modelUi?.opened();
    ST.workspace?.opened();
    ST.coordsUi?.modelChanged();   // 0.6 DF.15
    ST.linksUi?.modelChanged();   // 0.6 DF.21: the model's links (not loaded until their files are chosen)
  }

  return { ensureViewer, openIfc };
}
