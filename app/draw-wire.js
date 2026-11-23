/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draw-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountDrawWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { mountModel } from './model-ui.js';
import { toViewer, fromViewer } from './ifc-place.js';
import { mountRes } from './res-ui.js';
import { mountTrim } from './model-trim-ui.js';
import { mountWallFinishes } from './finishes/finishes-ui.js';
import { mountWallTools } from './wall-tools-ui.js';
import { mountWallShape } from './wall-shape-ui.js';
import { mountStairSketch } from './stair-sketch-ui.js';
import { mountPhasePlan } from './phases-ui.js';
import { mountPicture } from './picture-ui.js';
import { mountTraceRef } from './trace-ref-ui.js';
import { mountModify } from './modify-ui.js';
import { mountSymbols } from './symbols-ui.js';
import { mountGrids } from './model-grids-ui.js';
import { mountPlanMeasure } from './model-measure-ui.js';
import { mountRollover } from './rollover-bim.js';
import { mountFloors } from './model-floors-ui.js';
import { mountPanelFocus } from './panel-focus.js';
import { t } from './i18n.js';
import { mountSite } from './model-site-ui.js';
import { mountSiteConstraints } from './model-site-constraints-ui.js';
import { mountSiteMass } from './model-site-mass-ui.js';
import { mountMep } from './mep-ui.js';
import { mountHvac } from './mep/hvac-ui.js';
import { mountWallAssemblies } from './wall-assemblies-ui.js';
import { mountElementTypes } from './element-types-ui.js';
import { mountAssetSymbols } from './asset-symbol-ui.js';
import { bimcraftSymbolSets } from './symbols-ui.js';
import { mountQuantities } from './quantities-ui.js';
import { mountWorkPlane } from './workplane-ui.js';
import { mountCurtain } from './curtain-ui.js';
import { mountWallDimensions } from './wall-dimensions-ui.js';
import { mountFamilies } from './family-ui.js';
import { mountAnnoScale } from './anno-scale-ui.js';
import { mountViewsBim } from './views-ui.js';
import { mountReportAs } from './report-as.js';
import { mountClassify } from './classify-ui.js';
import { mountVerify } from './verify-ui.js';
import { mountLod } from './lod/lod-ui.js';
import { mountAudit } from './audit-ui.js';
import { mountScheduleLayouts } from './schedule-layouts-ui.js';
import { mountPack } from './pack-ui.js';
import { mountTypePacks } from './type-pack-ui.js';
import { mountLibraryKinds } from './library-kinds-bim.js';
import { el } from './ui-util.js';
import { mountElevEdit } from './elev-edit-ui.js';
import { mountWallShapeViews } from './wall-shape-view-ui.js';
import { mountSpaces } from './spaces-ui.js';
import { mountPens } from './pens-ui.js';
import { mountComforts } from './comforts-ui.js';
import { mountClashFix } from './clashfix-bim.js';
import { newGuid } from './bcf.js';
import { installAgents } from './agents.js';
import { mountBimShell } from './shell-mount.js';
import { mountTrace } from './model-trace-ui.js';
import { mountLinks } from './links-ui.js';
import { mountPanels } from './panels-ui.js';
import { mountSiteContext } from './site-ctx-ui.js';
import { mountScanProgress } from './scan-progress-ui.js';
import { statusAt, dayText } from './ifc-4d.js';
import { mountCloudSlice } from './cloud-slice-ui.js';

export function mountDrawWire(ctx) {
  const { ST, ui, emitViewMode, status, rebuild, download, coordMatrix, renderChanges, saveIfc, afterEdit, applySection, toWorld, toLocal, cur, entryOf, addModel, removeModel, placementOf, renderModels, scanProgElementKeys, makeUsd, renderHooks, fileHost, afterPick, index, colorOff, treeView, showProps, spacesIndex, fdView, runClash, models, nameOfKey, authorOf, renderIssues, guidOf, clearProps, showMany, readDrawingModel, root } = ctx;

  // ---- Draw (0.5 part 3, track BM; model-ui.js): the plan view of a level and the building tools ----
  ST.modelUi = mountModel({
    root,
    viewModeChanged: emitViewMode,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    model: () => (ST.mode === 'ifc' ? ST.model : null),
    ifc: () => ST.ifc,
    viewer: () => ST.viewer,
    rebuild,
    select: (keys) => {
      if (!ST.viewer) return;
      ST.viewer.select(keys.length ? keys : null);
      afterPick();
      if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps();
    },
    status: (text, isError) => status(text, isError),
    afterEdit: renderChanges,
    download,   // schedules' CSV, the plan's PDF
    fileName: () => ST.ifcName,
    coords: () => ST.coordsUi,   // 0.6 DF.15: the plan's readout and markers
    // 0.8 BIM-FAM-MORE (family-ui.js): a family's hotspots as grips in the 3D view. list = [{ p: [x, y, z] model mm, kind }] | null; h = { start(i, e), move(i, ray { o, d: model mm }, e), end(i, e) }.
    // false while the section box owns the grips.
    grips3d: (list, h) => {
      if (!ST.viewer) return false;
      if (!list || !list.length) { if (ST.hot3d) { ST.hot3d = null; ST.viewer.setGrips(null); } return true; }
      if (ST.cut && ST.cut.axis === 'box') return false;
      const C = coordMatrix(), rel = (mm) => ST.viewer.relPoint(toWorld(toViewer(C, mm)));
      const mmOf = (r) => fromViewer(C, toLocal(ST.viewer.ifcPoint(r).toArray()));
      ST.hot3d = { on: (phase, i, e) => {
        const r = ST.viewer.rayIfc(e.clientX, e.clientY), o = mmOf(r.o), q = mmOf([r.o[0] + r.d[0], r.o[1] + r.d[1], r.o[2] + r.d[2]]);
        h[phase === 'start' ? 'start' : phase === 'end' ? 'end' : 'move'](i, { o, d: [q[0] - o[0], q[1] - o[1], q[2] - o[2]] }, e);
      } };
      ST.viewer.setGrips(list.map((g) => ({ p: rel(g.p), kind: g.kind || 'corner' })), -1);
      return true;
    },
    // 0.8 D8.3 (modify-ui.js): pointer points inside the 3D view — h = { move(mm|null, e), click(mm, e) } on the plane at a level's height (model mm, plan coordinates); null stops. false while an item is being placed.
    pointer3d: (elevMm, h) => {
      if (!ST.viewer) return false;
      if (!h) { if (ST.viewer.placing && ST.viewer.placing.ownerTag === 'pointer3d') ST.viewer.placing = null; return true; }
      if (ST.placing || (ST.viewer.placing && ST.viewer.placing.ownerTag !== 'pointer3d')) return false;
      ST.viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, elevMm]))[1];
      const mm = (pt) => (pt ? fromViewer(coordMatrix(), toLocal([pt.x, pt.y, pt.z])).slice(0, 2) : null);
      ST.viewer.placing = { ownerTag: 'pointer3d', move: (pt, e) => h.move(mm(pt), e), click: (pt, e) => h.click(mm(pt), e) };
      return true;
    },
  });
  if (ST.modelUi) mountRes(ST.modelUi);   // 0.5 part 4, track RC (res-ui.js): the residential tools join the plan's tools
  if (ST.modelUi) mountTrim(ST.modelUi);   // 0.6 DF.17 (model-trim-ui.js): trim, extend and corner walls
  if (ST.modelUi) { let wallFin = null; try { wallFin = mountWallFinishes(ST.modelUi); } catch (e) { console.error(e); } root.querySelector('[data-wall-finishes]')?.addEventListener('click', () => { wallFin?.open();   // 0.11 FX (bim-core-11): modelUi has no ask(); the mount's own handle opens the card (the button did nothing in 0.10)
 root.querySelectorAll('details.bc-mb-more[open]').forEach((d) => d.removeAttribute('open')); }); }   // 0.10 bim-finishes-10: the Walls menu's Wall finishes… button
  if (ST.modelUi) mountWallTools(ST.modelUi);   // 0.9 WT.2-WT.7 (wall-tools-ui.js): wall shapes, split, offset, box stretch, align and lock, grid locks
  if (ST.modelUi) mountWallShape(ST.modelUi);   // 0.9 WT.6 (wall-shape-ui.js): attach top / base, profile, slant, wall openings
  if (ST.modelUi) mountStairSketch(ST.modelUi);   // 0.8 SU.1055 (stair-sketch-ui.js)
  if (ST.modelUi) mountPhasePlan(ST.modelUi, ST.phasesUi);   // 0.8 EG.59: walls drawn in their phase's pen on the plan and the printed plan (phases-ui.js)
  if (ST.modelUi) ST.picturesUi = mountPicture(ST.modelUi, { viewer: () => ST.viewer, entry: () => (ST.mode === 'ifc' ? cur() : null), save: saveIfc });   // 0.8 D8.8 (picture-ui.js)
  if (ST.modelUi) mountTraceRef(ST.modelUi);   // 0.8 SU.1055 (trace-ref-ui.js)
  if (ST.modelUi) mountModify(ST.modelUi);   // 0.8 D8.3 (modify-ui.js)
  if (ST.modelUi) mountSymbols(ST.modelUi);   // 0.8 GH.3-F/G (symbols-ui.js): Build › Symbol palette; plumbing plan symbols
  if (ST.modelUi) mountGrids(ST.modelUi);   // 0.6 DF.16 (model-grids-ui.js): grids and columns
  if (ST.modelUi) mountPlanMeasure(ST.modelUi);   // 0.9 D9.3 (model-measure-ui.js): temporary measuring on the plan
  if (ST.modelUi) mountRollover(ST.modelUi);   // 0.10 BK.33 (rollover-bim.js): rest the pointer on a wall, door, window, room or dimension to read it
  if (ST.modelUi) mountFloors(ST.modelUi);   // 0.6 DF.18 (model-floors-ui.js): floors of any shape, ramps
  mountPanelFocus(root, { t });
  if (ST.modelUi) mountSite(ST.modelUi);   // 0.6 DF.20 (model-site-ui.js): the site, the building on it, levels
  if (ST.modelUi) mountSiteConstraints(ST.modelUi);   // 0.10 BK.104 (model-site-constraints-ui.js): building lines and servitudes; a wall over one is a Problems warning
  if (ST.modelUi) mountSiteMass(ST.modelUi);   // 0.7 LC.1 B2 (model-site-mass-ui.js): a CivilCraft building mass in Properties
  if (ST.modelUi) mountMep(ST.modelUi);   // 0.6 DF.29 (mep-ui.js): pipe and duct runs with their fittings, valves
  if (ST.modelUi) mountHvac(ST.modelUi);   // 0.8 SU.888 (sx-mep, mep/hvac-ui.js): Build › Line set and Line set sizes
  if (ST.modelUi) mountWallAssemblies(ST.modelUi);
  if (ST.modelUi) mountElementTypes(ST.modelUi);   // 0.10 BK.24 / BK.15 (element-types-ui.js): floor, roof and ceiling types with layers, Schedules › Layers, the sketch band setting
  if (ST.modelUi) mountAssetSymbols(ST.modelUi, { registry: bimcraftSymbolSets().registry });   // 0.10 BK.23 (asset-symbol-ui.js): Build › Symbol link; mounted after the tools that draw elements
  if (ST.modelUi) mountQuantities(ST.modelUi);   // 0.10 BK.84 / BK.11 / BK.40 (quantities-ui.js): Floors, Finishes and Wall types: takeoff data schedules, gross / deductions / net
  if (ST.modelUi) { const wpUi = mountWorkPlane(ST.modelUi); mountCurtain(ST.modelUi, wpUi); }   // 0.10 bk-tools-b-10 (workplane-ui.js, curtain-ui.js): the work plane tools and curtain systems
  if (ST.modelUi) mountWallDimensions(ST.modelUi);
  if (ST.modelUi) mountFamilies(ST.modelUi);   // 0.6 DC.114 (family-ui.js): Families (before the project browser, which lists them)
  if (ST.modelUi) ST.annoUi = mountAnnoScale(ST.modelUi);   // 0.10 BK.10 (before the views: they ask it for the dialog)
  if (ST.modelUi) ST.planViews = mountViewsBim(ST.modelUi);   // 0.6 DF.19 (views-ui.js): the project browser, view ranges, templates, sheets
  if (ST.modelUi) ST.reportAsUi = mountReportAs({ modelUi: ST.modelUi, t, status, schema: () => { try { return ST.editor ? ST.editor.api.GetModelSchema(ST.editor.mid) : 'IFC4'; } catch (e) { return 'IFC4'; } } });   // 0.9 D8.12-C
  if (ST.modelUi) ST.classifyUi = mountClassify({ modelUi: ST.modelUi, t, status });   // 0.10 BK.94
  // 0.10 BK.64 / BK.49 (verify-ui.js): Properties › Verification, the plan's marks, Schedules › Verification; BK.65 / BK.20 (audit-ui.js): Model checks › Audit
  if (ST.modelUi) ST.verifyUi = mountVerify({ modelUi: ST.modelUi, t, status, who: authorOf });
  if (ST.modelUi) ST.lodUi = mountLod({ root, modelUi: ST.modelUi, editor: () => (ST.mode === 'ifc' ? ST.editor : null), model: () => (ST.mode === 'ifc' ? ST.model : null), t, status: (text, isError) => status(text, isError) });   // 0.10 bim-lod-10 (BK.13-BK.101)
  ST.auditUi = mountAudit({ root, editor: () => (ST.mode === 'ifc' ? ST.editor : null), model: () => (ST.mode === 'ifc' ? ST.model : null), t, status: (text, isError) => status(text, isError), nameOfKey, verify: ST.verifyUi });
  if (ST.modelUi) window.bimcraftSchedules = mountScheduleLayouts(ST.modelUi, { status });   // 0.10 BK.39 / BK.29 / BK.149 / BK.142 / BK.47 (schedule-layouts-ui.js; after classification, so its columns are in): set-ups, the office layout, finishes, exports, figure links, the specification
  if (ST.modelUi) mountPack(ST.modelUi, { status, docs: () => ST.tagsUi?.docs, prints: () => window.bimcraftIssueLog?.prints() || null, words: () => window.bimcraftIssueLog?.panel.words() || {} });   // 0.10 BK.63 / BK.170 (pack-ui.js; after the schedules, whose rooms table it reads)
  if (ST.modelUi) mountTypePacks({ modelUi: ST.modelUi, t, status });   // 0.10 BK.97
  ST.libKinds = mountLibraryKinds({ modelUi: ST.modelUi, t, status, el, download,
    placed: () => { try { const seen = new Map(); for (const p of ST.editor ? ST.editor.placer().placements() : []) if (p.uuid && p.library === 'librarycraft' && !seen.has(p.uuid)) seen.set(p.uuid, { uuid: p.uuid, name: p.equipment?.Name || p.name || '' }); return [...seen.values()]; } catch (e) { return []; } } });   // 0.10 BK.21 / BK.98
  if (ST.modelUi) mountElevEdit(ST.modelUi);   // 0.9 SU.1123 (elev-edit-ui.js): edit in elevation and section views
  if (ST.modelUi) mountWallShapeViews(ST.modelUi);   // 0.9 WT.6 (wall-shape-view-ui.js): profile grips, wall openings, slant and attach in those views and in 3D; the Walls menu's four Shape commands
  if (ST.modelUi) mountSpaces(ST.modelUi);   // 0.10 (spaces-ui.js, bk-tools-a-10): rooms, separators, areas, tags, shafts, vertical openings, model groups; a Rooms menu after the Walls menu
  if (ST.modelUi) mountPens(ST.modelUi);   // 0.8 SU.1055 (pens-ui.js); 0.9 D8.12-B: after the views, so its scene hook sees their drafting and the dimensions
  if (ST.modelUi) mountComforts(ST.modelUi);   // 0.6 round 2 (comforts-ui.js): drawing comforts — moving library items, dormers
  // 0.6 DF.25 (agents.js): an assistant draws walls, doors, windows, floors, levels and grids, each one undo step "Assistant: …"
  ST.clashFix = mountClashFix({   // 0.9 EG.42 (clashfix-bim.js; engine lib/clashfix): Propose fixes under the clash results + clashes_list / clash_fix_add
    viewer: () => ST.viewer, models: () => models, host: () => (ST.mode === 'ifc' ? cur() : null), editor: () => (ST.mode === 'ifc' ? ST.editor : null), modelUi: ST.modelUi,
    entryOf, nameOfKey, results: () => ST.clashRes, rerun: runClash, status: (m, bad) => status(m, bad), control: fileHost.control,
    show: (keys) => { ST.viewer.vis.isolate(keys, { ghost: true }); ST.viewer.applyVisibility(); ST.viewer.select(keys); afterPick(); showMany(); ST.viewer.frameKeys(keys); treeView.sync(); },
    addIssue: ({ title, description }) => { ST.issues.push({ guid: newGuid(), title, status: 'Open', type: 'Issue', author: authorOf() || 'BimCraft', created: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'), description, comments: [], viewpoints: [] }); renderIssues(); },   // i18n-ignore: BCF values
  });
  if (ST.modelUi) installAgents(ST.modelUi, {
    control: fileHost.control,
    frameModel: () => ST.analysisUi?.frameModel?.() || null,   // 0.8 EG.47 (bim-sim_PART_3): hazard_run source 'frame'
    ask: {   // 0.8 AC.8 ★ (bim_PART_2; ask-tools.js): the answer is selected and framed in 3D (view state only: nothing in the model changes)
      index: () => (ST.mode === 'ifc' && ST.model ? index() : null),
      spacesIndex: () => (ST.mode === 'ifc' && ST.model ? spacesIndex() : null),
      model: () => (ST.mode === 'ifc' ? ST.model : null),
      name: () => ST.ifcName,
      bounds: (keys) => (ST.viewer ? ST.viewer.keyBoundsMap(keys) : new Map()),
      highlight: (keys, { frame = true } = {}) => {
        ST.viewer.vis.showAll(); ST.viewer.applyVisibility();
        ST.viewer.select(keys); afterPick(); if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected);
        if (frame) ST.viewer.frameKeys(keys);
        status(t('ask.found', { n: keys.length }));
      },
    },
    analysis: () => ST.analysisUi?.panel || null,   // 0.8 EG.31: frame_break runs the Analysis tab's Break it
    model: () => (ST.mode === 'ifc' ? ST.model : null),
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps(); },
    save: saveIfc,
    usd: (format) => (ST.viewer && ST.mode === 'ifc' && models.length ? makeUsd(format) : null),   // 0.7 AS.6
    render: async () => {   // 0.7 AS.6 (assistants-gaps): render_still / render_queue, through the Render dialog's own hooks
      if (!ST.viewer || ST.mode !== 'ifc' || ST.viewer.box.isEmpty()) throw new Error('Open an IFC model in the 3D view first.');   // i18n-ignore: read by the assistant
      ST.modelUi?.need3d();
      const H = await renderHooks();
      let saved = H.saved;
      return { scene: H.scene, viewSize: () => ({ w: ui.canvas.clientWidth, h: ui.canvas.clientHeight }), settings: () => { try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { /* the last one read */ } return saved; },
        fileBase: () => (ST.ifcName || 'model').replace(/\.ifc$/i, ''), download: (blob, name) => fileHost.download(blob, name, blob.type || 'image/png'), appName: 'BimCraft' };
    },
    download: (blob, name, type) => fileHost.download(blob, name, type),
    undo: async () => { if (ST.coreCommands) ST.coreCommands.execute('undo'); else ui.undo.click(); },
    busy: () => (ST.busy ? 'opening or saving a file' : ST.placing ? 'placing a library item' : null),   // i18n-ignore: read by the assistant
  });
  ST.bimShell = mountBimShell({
    ifc: () => ST.ifc, model: () => ST.model, editor: () => ST.editor, mode: () => ST.mode, control: fileHost.control, saved: () => ST.savedOnce, name: () => ST.ifcName || 'model',
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps(); },
    onSelection: (fn) => { const h = () => fn(); document.addEventListener('click', h); return () => document.removeEventListener('click', h); },
    after: afterEdit,
  });
  // 0.6 DF.22 (cloud-slice-ui.js): a point cloud's slice on the plan; the cloud is cloud-ui.js's (pc, made on its first open)
  if (ST.modelUi) mountTrace(ST.modelUi, { readDrawing: readDrawingModel });   // 0.6 DF.23 (model-trace-ui.js)
  // 0.6 DF.21 (links-ui.js): linked models are federation entries flagged `link`, placed by an `adjust` matrix
  if (ST.modelUi) ST.linksUi = mountLinks(ST.modelUi, {
    root, fileHost, status,
    fed: {
      add: addModel, remove: removeModel, models: () => models, host: () => (ST.mode === 'ifc' ? cur() : null),
      setMatrix: (ent, M) => { ent.matrix = M; ST.viewer.setModelMatrix(ent.mi, placementOf(ent)); if (ST.cut) applySection(); ST.viewer.render(); },
      viewer: () => ST.viewer, refresh: renderModels,
    },
  });
  if (ST.modelUi) mountPanels(ST.modelUi);   // 0.8 EG.6 (bim-build_PART_5)
  if (ST.modelUi) ST.siteCtxUi = mountSiteContext(ST.modelUi);   // 0.8 EG.63 (civil_PART_4)
  ST.scanProgUi = mountScanProgress({
    pane: ui.sp,
    cloud: () => { const L = ST.pc?.has?.() ? ST.pc.layer?.() : null; if (!L?.cloud || !L.points) return null; L.points.updateMatrixWorld(true); return { cloud: L.cloud, matrix: [...L.points.matrixWorld.elements] }; },
    keys: scanProgElementKeys,
    bounds: (keys) => (ST.viewer ? ST.viewer.keyBoundsMap(keys) : new Map()),
    expected: () => (ST.fdTasks ? statusAt(fdView(), ST.fdDay) : null),
    dayLabel: () => (ST.fdTasks && ST.fdDay !== null ? dayText(ST.fdDay) : ''),
    name: nameOfKey, guid: guidOf,
    verify: (keys, o) => ST.verifyUi?.fromScan(keys, o),   // 0.10 BK.49: what the scan matched within tolerance → field-verified
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys); afterPick(); if (ST.viewer.selection.size) showProps(ST.viewer.selected); },
    setColors: (m) => { if (!ST.viewer) return; if (m && ST.colorField) colorOff(); ST.viewer.setColors(m); },
    setProblems: (list) => { ST.scanProgProblems = list; ST.brkScanSet?.(list); },
    status: (text, isError) => status(text, isError),
    download, fileName: () => ST.ifcName,
  });
  window.bimcraftScanProgress = ST.scanProgUi;   // tests
  if (ST.modelUi) ST.scanUi = mountCloudSlice(ST.modelUi, { cloud: () => ST.pc, viewer: () => ST.viewer, entry: () => { const ent = ST.mode === 'ifc' ? cur() : null; return ent ? { C: [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], P: ST.viewer.modelMatrix(ent.mi) } : null; } });
}
