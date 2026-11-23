/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-ui.js — the building tools in BimCraft's page (0.5 part 3, track BM): the toolbar's Draw button, the plan view of
 * a level beside the 3D view (model-planview.js), the model bar (level, tools, wall type and height, typed lengths, Plan /
 * Split / 3D), the Levels panel, and the tools themselves. Markup is server-rendered in ui.inc ([data-plan-wrap],
 * [data-modelbar], [data-levels-sec]); bimcraft.js mounts this with a small host object and tells it when a model opens,
 * rebuilds or is picked. Every change goes through IfcEditor.modelChange (model-ops.js): one undo step each, the same
 * Undo / Redo / Save as everything else.
 *
 *   const m = mountModel(host)   host: { root, editor(), model(), ifc(), viewer(), rebuild(keyOrNull), select(keys),
 *                                       status(text, isError), afterEdit(), units() }
 *   m.opened()     a model was opened (or a new building made): Draw goes off, the plan starts again on its levels
 *   m.stage(which) BimCraft shows 'ifc' | 'dwg' | 'rvt' | … — the plan is for IFC models only
 *   m.rebuilding() / m.rebuilt()   around bimcraft.js rebuild(): clicks wait while the model reloads, then the plan is cut again
 *   m.picked()     the 3D view's pick changed: the plan follows
 *   m.show(on)     Draw on / off (a new building turns it on)
 *
 * Changes made while the model is reloading are queued and applied, in order, as soon as it is back (the plan draws
 * them as previews meanwhile), so quick clicking never writes into a model that is being replaced.
 */
import { t } from './i18n.js';
import { PlanView } from './model-planview.js';
import { wallPlanGraphics, wallPlanEdges } from './wall-plan-graphics.js';
import { readMaterials } from './project-materials.js';
import { planCut, chainLoops, viewerToPlan, wallDims, wallPieces } from './model-plan.js';
import { assemblySchedules } from './assembly-schedule.js';
import { materialBackground } from './project-materials.js';
import { schedules, scheduleCsv } from './model-schedule.js';
import { rules, onRules } from './rules-hook.js';   // 0.8 REG.1: one more schedule when a regulations add-on is on
import { planPdf, sheetFor } from './model-pdf.js';
import { planCad, cadFile, CAD_FORMATS } from './plan-cad.js';   // SU.1994: the plan as DWG or DXF
import { askCadFormat } from './cad-export-ui.js';
import { readStyle } from './work-style.js';   // 0.9 D8.12: the working style's defaults
import { wallOutlines, wallTypes, wallType, typeThickness, typeName, typeAt, JUSTIFICATIONS, locationLine, wallsThrough, wallLevelsPassed, topLevelChoices } from './model-walls.js';
import { wallGeom, wallMap, arcMid, arcLength, bulgeThrough, bulgeFromHeight, arcHeight, flatPoly, BULGE_MAX } from './model-arcs.js';   // 0.6 round 2 (bim-comforts_PART_2): curved walls
import { snapPoint, closesChain, loopSide, wallPath } from './model-tools.js';
import { fmtLen, parseLen, parseTyped, fmtAngle, fmtArea, parsePitch, fmtPitch, getDisplayUnits, setDisplayUnits, isMetric, fillUnitSelect, unitMark, lenMark } from './model-units.js';
import { onUnitsChange } from './unit-prefs.js';   // 0.7 UNITS: Settings › General › Units
import { endDrag } from './walls/reline.js';   // FX.63: an end grip keeps the joined walls' direction
import { squareMove, squareDistance, squareUp, squareSnap, setAngle, angleOf, setLength, lengthFrom, roomSize, setRoomSize, moveOutward, MEASURE_FROM, setLengthGrow, fixedPoint, GROW } from './wall-square.js';   // 0.9 FX.22; FX.67 grow from
import { newLevelBelow, copyLevel, drawWallPath, drawWalls, changeWall, changeWalls, changeWallsBy, removeWalls, newLevel, changeLevel, snapshotModel, placeOpening, placeLibraryOpening, changeOpening, changeOpenings, removeElements, placeFloor, placeCeiling, placeRoof, changeDerived, loopsOf } from './model-ops.js';
import { loopAt, labelPoint, planLoops } from './model-rooms.js';
import { inPoly } from './model-plan.js';
import { inv4 } from './ifc-util.js';
import { edgeKinds, roofGeometry, presetEdges, formatEdges, parseEdges, edgeWalls, ROOF_DEFAULTS } from './res-roof.js';   // 0.5 part 4 RC.1 (bim-residential)
import { FLOOR_KINDS, CEILING_PATTERNS } from './model-slabs.js';
import { DOOR_TYPES, WINDOW_TYPES, openingType, openingTypeName, openingSymbol, fitOffset, handKind, libraryBase } from './model-openings.js';
import { libraryFrame } from './ifc-place.js';
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { openingFamilies, readFamilies, setFamilySize, familyWriter } from './family-ops.js';   // 0.6 DC.114: families and their sizes
import { familyFor, sizeValues, sizeKey } from './family-model.js';
import { placementReference, placementPath } from './wall-placement.js';
import { isLod, lodLabel } from './walls/lod.js';   // 0.10 BK.16: the LOD tag beside a wall type's name
import { setAnnoRatio, sceneAnno } from './anno-scale-bim.js';   // 0.10 BK.10: annotations sized from paper heights at the view's scale
import { mountMuiLayout } from './mui-layout.js';
import { mountMuiData } from './mui-data.js';
import { mountMuiSchedules } from './mui-schedules.js';
import { mountMuiLevels } from './mui-levels.js';
import { mountMuiTools } from './mui-tools.js';
import { mountMuiOpenings } from './mui-openings.js';
import { mountMuiWalls } from './mui-walls.js';
import { mountMuiChanges } from './mui-changes.js';
import { mountMuiKeys } from './mui-keys.js';
import { mountMuiProps } from './mui-props.js';
const lodTag = (type) => (isLod(type?.lod) ? ' [' + lodLabel(type.lod) + ']' : '');

const CUT = 1200;   // mm above the level: where the plan cuts (4'-0")
const RCP_CUT = 2300;   // 0.6 DC.117: where a ceiling plan cuts and looks up from (about 7'-6")
const SNAP_PX = 12;

export function mountModel(host) {
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const MS = { pv: undefined, announced: undefined, overPlan: undefined, pickSnap: undefined, propsHost: undefined };
  const root = host.root;
  const $ = (s) => root.querySelector(s);
  const ui = {
    toggle: $('[data-model-toggle]'), wrap: $('[data-plan-wrap]'), canvas: $('[data-plan-canvas]'), bar: $('[data-modelbar]'),
    level: $('[data-model-level]'), kind: $('[data-model-viewkind]'), tools: [...root.querySelectorAll('[data-mtool]')], wallOpts: $('[data-mopts="wall"]'),
    wallRef: $('[data-model-wallref]'), wallSide: $('[data-model-wallside]'), wallShape: $('[data-model-wallshape]'), wallType: $('[data-model-walltype]'), wallTop: $('[data-model-walltop]'), wallH: $('[data-model-wallh]'), typed: $('[data-model-typed]'),
    layout: [...root.querySelectorAll('[data-model-layout]')], layoutGroup: $('[data-model-layout-group]'), splitter: $('[data-model-splitter]'), fit: $('[data-model-fit]'), units: $('[data-model-units]'),
    levelsSec: $('[data-levels-sec]'), levels: $('[data-levels]'), stageEl: root.querySelector('.bc-stage'), hint: $('[data-model-hint]'),
    typedRow: $('[data-mtyped-row]'), toolbar: $('[data-toolbar]'),
    oOpts: { door: $('[data-mopts="door"]'), window: $('[data-mopts="window"]') },
    schedSec: $('[data-msched-sec]'), sched: $('[data-msched]'), schedKind: $('[data-msched-kind]'), schedCsv: $('[data-msched-csv]'),
    dims: $('[data-model-dims]'), print: $('[data-model-print]'), cad: $('[data-model-cad]'),
  };
  if (!ui.toggle || !ui.wrap) return null;

  const S = {
    on: false, layout: 'split', layoutAuto: true, split: 50, level: null, kind: 'plan', tool: 'select',   // kind: the level's floor plan or its ceiling plan ('rcp', 0.6 DC.117) busy: false, queue: [], again: false,
    data: null, outlines: new Map(), cut: null, cutFor: null, chain: null, last: null, hoverKey: null,
    wall: { reference: 'center', side: 'left', typeKey: 'ext-2x6', top: 'level', height: 2438.4, shape: 'straight' }, units: readUnits(),   // shape: straight | arc (0.6 round 2)
    open: {
      door: { typeKey: DOOR_TYPES[0].key, width: DOOR_TYPES[0].width, height: DOOR_TYPES[0].height, hand: 'a' },
      window: { typeKey: WINDOW_TYPES[1].key, width: WINDOW_TYPES[1].width, height: WINDOW_TYPES[1].height, sill: WINDOW_TYPES[1].sill, hand: 'a' },
    },
    hover: null, drag: null,
    slab: { floor: { mode: 'room', kind: 'wood', thickness: FLOOR_KINDS[0].t }, ceiling: { mode: 'room', height: null, thickness: 12.7 }, roof: { pitch: Math.atan(6 / 12) * 180 / Math.PI, overhang: 304.8, ends: 'hip', fascia: true } },
    loops: null, dims: true, sched: 'doors',
  };
  S.callout = null;   // 0.6 DC.117 (c): the callout shown (its id; views-ui.js) — it draws S.level's S.kind cropped — else null
  MS.pv = null;
  // tools other modules add (0.5 part 4, bim-residential: res-ui.js) — see extend() at the end
  const exts = [];
  const PR = { src: null, keys: new Map() };   // 0.7.1 → 0.8: the regulations source of the shell's Problems (by the schedules below) and GlobalId → keys
  const extTool = (name) => exts.find((x) => x.tools?.includes(name)) || null;
  const ed = () => host.editor();
  const kb = () => host.model()?.keyBase || 0;

  const { commit, scheduleRebuild, apply0 } = mountMuiChanges({
    S, exts, PR, ed, kb, host, mergeJournals,
    get drawOverlay() { return drawOverlay; },
    get refresh() { return refresh; },
    get selectedKeys() { return selectedKeys; },
    get renderLevels() { return renderLevels; },
    get fillLevelSelect() { return fillLevelSelect; },
    get buildScene() { return buildScene; },
  });
  const { snapWalls, snapCtx, snapAt, onMove, onClick, onDbl, endChain, applyTyped, drawOverlay } = mountMuiWalls({
    MS, root, ui, S, exts, extTool, commit, host, mergeJournals,
    get wallsHere() { return wallsHere; },
    get round() { return round; },
    get level() { return level; },
    get gripMove() { return gripMove; },
    get hoverOpening() { return hoverOpening; },
    get buildScene() { return buildScene; },
    get hoverSlab() { return hoverSlab; },
    get canDraw() { return canDraw; },
    get selectedKeys() { return selectedKeys; },
    get placeSlab() { return placeSlab; },
    get placeFree() { return placeFree; },
    get placeHere() { return placeHere; },
    get projectWallType() { return projectWallType; },
    get levelAbove() { return levelAbove; },
    get drawTop() { return drawTop; },
    get openingPreview() { return openingPreview; },
    get slabPreview() { return slabPreview; },
    get gripWall() { return gripWall; },
    get gripsOf() { return gripsOf; },
    get SNAP_PX() { return SNAP_PX; },
  });
  const { setTool, drawTop, fillWallOpts, fillOpeningOpts, famW, projectWallType, sizeName, fillSlabOpts, hoverSlab, slabPreview, placeSlab, placeFree, libraryPlaced, placeLibrary, flipHand } = mountMuiTools({
    MS, root, ui, S, exts, extTool, ed, kb, endChain, drawOverlay, commit, host,
    get level() { return level; },
    get selectedKeys() { return selectedKeys; },
    get levelAbove() { return levelAbove; },
    get wallsOn() { return wallsOn; },
    get wallsHere() { return wallsHere; },
    get api() { return api; },
    get show() { return show; },
    get lodTag() { return lodTag; },
  });
  const { regsSource, scheduleData, renderSchedule } = mountMuiSchedules({
    ui, S, exts, PR, ed, kb, projectWallType, host,
  });
  const { fillLevelSelect, showKind, ceilingZ, renderLevels } = mountMuiLevels({
    root, ui, S, exts, ed, endChain, commit, host,
    get show() { return show; },
    get refresh() { return refresh; },
    get fitPlan() { return fitPlan; },
    get storeyWorldMm() { return storeyWorldMm; },
    get level() { return level; },
    get wallsHere() { return wallsHere; },
    get wallsOn() { return wallsOn; },
  });
  const { refresh, level, levelAbove, wallsHere, wallsOn, throughHere, riseOver, viewRange, cutPlan, storeyWorldMm, makeScene, buildScene, selectedKeys } = mountMuiData({
    MS, S, exts, PR, ed, kb, renderSchedule, fillLevelSelect, renderLevels, fillWallOpts, fillOpeningOpts, projectWallType, fillSlabOpts, drawOverlay, host,
    get fitPlan() { return fitPlan; },
    get CUT() { return CUT; },
    get RCP_CUT() { return RCP_CUT; },
  });
  const { hoverOpening, faceEnds, openingPreview, placeHere, gripWall, gripsOf, onDown, gripMove, gripTyped, gripCommit, onUp } = mountMuiOpenings({
    MS, S, exts, kb, famW, libraryPlaced, sizeName, wallsHere, throughHere, riseOver, selectedKeys, buildScene, snapWalls, drawOverlay, commit, host,
    get round() { return round; },
    get SNAP_PX() { return SNAP_PX; },
  });
  const { canDraw, show, stackSplit, syncLayoutGroup, applyLayout, viewMode, splitAt, fitPlan } = mountMuiLayout({
    MS, ui, S, ed, refresh, viewRange, setTool, onDown, onUp, onMove, onClick, onDbl, endChain, applyTyped, drawOverlay, host,
    get level() { return level; },
  });
  if (ui.stageEl) new ResizeObserver(() => { if (stackSplit()) requestAnimationFrame(() => { host.viewer()?.resize?.(); MS.pv?.resize(); }); }).observe(ui.stageEl);
  MS.announced = null;
  ui.toggle.addEventListener('click', () => {
    if (!canDraw()) { host.status(t('model.needs.ifc')); return; }
    show(!S.on);
  });
  for (const b of ui.layout) b.addEventListener('click', () => {
    S.layout = b.dataset.modelLayout; S.layoutAuto = false;
    if (S.layout === '3d') { S.layout = 'split'; show(false); return; }
    if (!S.on) { show(true); return; }
    applyLayout();
    requestAnimationFrame(() => fitPlan());   // the pane changed size: the whole level again
    if (S.autoFit3d) setTimeout(() => host.viewer()?.view('iso'), 80);   // 0.7 SU.751: the 3D pane was hidden or another size when it last framed the building
  });
  ui.splitter.addEventListener('pointerdown', (e) => { e.preventDefault(); ui.splitter.setPointerCapture(e.pointerId); splitAt(e); });
  ui.splitter.addEventListener('pointermove', (e) => { if (ui.splitter.hasPointerCapture(e.pointerId)) splitAt(e); });
  ui.splitter.addEventListener('keydown', (e) => {
    const d = { ArrowLeft: -5, ArrowUp: -5, ArrowRight: 5, ArrowDown: 5 }[e.key];
    if (!d) return;
    e.preventDefault(); S.split = Math.max(20, Math.min(80, S.split + d)); applyLayout();
  });
  ui.fit?.addEventListener('click', () => fitPlan());
  // the model bar goes under the toolbar, however many rows it wraps to
  if (ui.toolbar) new ResizeObserver(() => ui.stageEl.style.setProperty('--bc-tb-h', ui.toolbar.offsetHeight + 'px')).observe(ui.toolbar);



  // ---- dimensions, schedules, print (BM.7) ----
  ui.dims?.addEventListener('click', () => { S.dims = !S.dims; ui.dims.setAttribute('aria-pressed', S.dims ? 'true' : 'false'); buildScene(); });
  ui.schedKind?.addEventListener('change', () => { S.sched = ui.schedKind.value; renderSchedule(); });
  onRules((p) => {   // a new pack, or the add-on switched off: the schedule is worked out again (or its entry goes)
    if (!p) { ui.schedKind?.querySelectorAll('option[data-rules]').forEach((o) => o.remove()); if (S.sched === 'regs') { S.sched = 'doors'; if (ui.schedKind) ui.schedKind.value = 'doors'; } }
    if (S.on) renderSchedule();
  });
  onRules(() => regsSource());
  if (window.ccProblems) regsSource(); else document.addEventListener('cc-problems-ready', () => regsSource(), { once: true });
  ui.schedCsv?.addEventListener('click', () => {
    if (!S.data) return;
    const sc = scheduleData()[S.sched];
    const base = String(host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    const laidCsv = exts.map((x) => x.scheduleCsv?.(S.sched, sc)).find((v) => typeof v === 'string') || null;   // 0.10 BK.149: the CSV follows the layout shown (schedule-layouts-ui.js)
    host.download(base + ' ' + (sc.title || t('model.sch.' + S.sched)).toLowerCase() + '.csv', '\ufeff' + (laidCsv ?? scheduleCsv(sc)), 'text/csv');   // i18n-ignore: a file name
  });
  ui.print?.addEventListener('click', async () => {
    if (!MS.pv || !S.data) return;
    const sc = { ...MS.pv.scene, dims: (MS.pv.scene.dims || []).map((d) => ({ ...d, offPx: undefined })) };
    const lv = level(), when = new Date().toISOString().slice(0, 10);
    const base = String(host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    const pdfOpts = { title: api.ask('viewTitle') || t(S.kind === 'rcp' ? 'model.print.rcpof' : 'model.print.titleof', { level: lv?.name || '' }), lines: [base, t('model.print.cut', { h: fmtLen(viewRange().cut, S.units) }), when], units: S.units, paper: isMetric(S.units) ? 'a4' : 'letter', scale: viewRange().scale || null };
    // 0.8 D8.8 (round 3): this level's pictures go under the drawing as image objects, brought down to 200 dpi on the sheet (picture-ui.js)
    let images = [], picFail = false;
    try { if (window.bimcraftPicture?.pdfImages) images = await window.bimcraftPicture.pdfImages(S.level, sheetFor(sc, pdfOpts).sc[0]); } catch (e) { picFail = true; }
    // 0.9 D8.12-B: a model that prints through a pen table prints the plan as a sheet through it (pens-ui.js printPlan)
    const own = api.ask('printPlan', sc, pdfOpts);
    const r = own || planPdf(sc, { ...pdfOpts, images });
    host.download(base + ' — ' + (lv?.name || '') + (S.kind === 'rcp' ? ' ' + t('model.rcp.file') : '') + '.pdf', r.bytes, 'application/pdf');   // i18n-ignore: a file name
    host.status(t('model.print.done', { scale: r.scale.label }) + (r.missing ? ' ' + t('model.print.missing', { n: r.missing }) : '') + (r.images ? ' ' + t('pic.pdf.done', { n: r.images }) : '') + (picFail ? ' ' + t('pic.pdf.failed') : ''), picFail);
  });

  // SU.1994: the plan as shown, as DWG or DXF at true size (plan-cad.js): the scene the print uses, its scale for the text and dimensions
  ui.cad?.addEventListener('click', async () => {
    if (!MS.pv || !S.data) return;
    const sc = MS.pv.scene;   // dimensions keep offPx: plan-cad.js reads it as the sheets do
    const paper = isMetric(S.units) ? 'a4' : 'letter';
    const [ratio, label] = sheetFor(sc, { paper, units: S.units, scale: viewRange().scale || null }).sc;
    const fmt = await askCadFormat(host.root, { title: t('cad.plan.ask'), note: t('cad.plan.note', { unit: t(isMetric(S.units) ? 'cad.unit.mm' : 'cad.unit.in'), scale: label }) });
    if (!fmt) return;
    try {
      const kinds = new Map((S.data.openings || []).map((o) => [o.guid, o.kind]));
      const f = cadFile(planCad(sc, { units: S.units, ratio, kindOf: (g) => kinds.get(g) || null }), fmt);
      const lv = level(), base = String(host.fileName?.() || 'model').replace(/\.ifc$/i, '');
      host.download(base + ' — ' + (lv?.name || '') + (S.kind === 'rcp' ? ' ' + t('model.rcp.file') : '') + '.' + f.ext, f.bytes, f.mime);   // i18n-ignore: a file name
      const left = [];
      if (f.report.counts.crop) left.push(t('cad.left.crop'));
      host.status(t('cad.done', { format: CAD_FORMATS[fmt].label, scale: label }) + (left.length ? ' ' + t('cad.left', { what: left.join(', ') }) : ''));
    } catch (e) { console.error(e); host.status(t('cad.failed', { msg: e.message }), true); }
  });

  ui.level.addEventListener('change', () => { S.level = Number(ui.level.value); S.callout = null; endChain(); S.cutFor = null; refresh(); fitPlan(); });
  // 0.6 DC.117: the level's floor plan or its reflected ceiling plan
  ui.kind?.addEventListener('change', () => showKind(S.level, ui.kind.value === 'rcp' ? 'rcp' : 'plan'));


  // ---- units ----
  function readUnits() { return getDisplayUnits(); }
  if (ui.units) {
    fillUnitSelect(ui.units, S.units);   // the units turned on in Settings (0.7 UNITS) + the one in use
    onUnitsChange(() => {
      const u = getDisplayUnits();   // the unit in use was turned off in Settings → the next one that is on
      if (u !== S.units) { S.units = u; refresh(); renderProps(); window.dispatchEvent(new Event('bimcraft-units')); }
      fillUnitSelect(ui.units, S.units); ui.units.value = S.units;
    });
    ui.units.value = S.units;
    ui.units.addEventListener('change', () => { S.units = ui.units.value; setDisplayUnits(S.units); refresh(); renderProps(); window.dispatchEvent(new Event('bimcraft-units')); });
  }
  const round = () => (isMetric(S.units) ? 10 : 12.7);   // free directions come out in 10 mm or 1/2"

  for (const b of ui.tools) b.addEventListener('click', () => setTool(b.dataset.mtool));



  S.queuedSegs = () => S.queue.flatMap(([, meta]) => meta.preview || []);

  ui.typed.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); if (applyTyped(ui.typed.value)) ui.typed.value = ''; }
    else if (e.key === 'Escape') { e.preventDefault(); ui.typed.value = ''; ui.typed.blur(); endChain(); }
  });



  // ---- keys (capture: the plan's own keys win while Draw is on) ----
  document.addEventListener('keydown', (e) => {
    if (!S.on || root.classList.contains('ws-active') || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const tgt = e.target;
    if (tgt.closest?.('dialog, [data-help-panel], [data-app-settings]') || document.querySelector('dialog[open]')) return;   // i18n-ignore: CSS selectors
    if (tgt === ui.typed) return;
    const inField = tgt.closest?.('input, textarea, select, [contenteditable="true"]');
    if (inField) return;
    const k = e.key;
    // 0.9 FX.22: while a wall's grip is held the keys are a distance: Enter (or letting go) uses it, Esc drops the move
    if (S.drag?.kind === 'grip' && S.drag.end !== 'bend') {
      const d = S.drag;
      if (k === 'Escape') { S.drag = null; drawOverlay(); }
      else if (k === 'Enter') { if (d.typed) { const m = gripTyped(d); if (m) { S.drag = null; gripCommit(d, m); return e.preventDefault(), e.stopImmediatePropagation(); } } }
      else if (k === 'Backspace') { d.typed = d.typed.slice(0, -1); drawOverlay(); }
      else if (k.length === 1) { d.typed += k; drawOverlay(); }
      else return;
      e.preventDefault(); e.stopImmediatePropagation();
      return;
    }
    if (k === 'Escape') {
      if (exts.some((x) => x.escape?.())) { e.preventDefault(); e.stopImmediatePropagation(); drawOverlay(); return; }
      if (S.chain) { e.preventDefault(); e.stopImmediatePropagation(); endChain(); host.status(t('model.chain.ended')); return; }
      if (S.tool !== 'select') { e.preventDefault(); e.stopImmediatePropagation(); setTool('select'); return; }
      return;
    }
    if (S.tool !== 'select' && /^[0-9@'"<.,\-\/]$/.test(k)) { e.preventDefault(); e.stopImmediatePropagation(); ui.typed.focus(); ui.typed.value += k; return; }
    if (k === 'Enter' && S.chain) { e.preventDefault(); e.stopImmediatePropagation(); endChain(); return; }
    const low = k.toLowerCase();
    if (exts.some((x) => x.key?.(e, low))) { e.preventDefault(); e.stopImmediatePropagation(); return; }
    if (low === 'w' && !e.shiftKey) { e.preventDefault(); e.stopImmediatePropagation(); setTool('wall'); return; }
    if (low === 'v' && !e.shiftKey) { e.preventDefault(); e.stopImmediatePropagation(); setTool('select'); return; }
    if (low === 'd' && !e.shiftKey) { e.preventDefault(); e.stopImmediatePropagation(); setTool('door'); return; }
    if (low === 'n' && !e.shiftKey) { e.preventDefault(); e.stopImmediatePropagation(); setTool('window'); return; }
    if (low === 'h' && !e.shiftKey && (S.tool === 'door' || S.tool === 'window')) { e.preventDefault(); e.stopImmediatePropagation(); flipHand(); return; }
    if (low === 'f' && !e.shiftKey && MS.overPlan) { e.preventDefault(); e.stopImmediatePropagation(); fitPlan(); return; }
    if (k === 'Delete' || k === 'Backspace') {
      const p = picked();
      if (p.count && p.count === selectedKeys().length && !passesEdit(p)) { e.preventDefault(); e.stopImmediatePropagation(); deletePicked(p); }
    }
  }, true);
  // 0.10 FX.188 (bim-core-10): in the ribbon layouts the handler above is off (ws-active) and the layout's Esc ends the tool, so the older sketch tools
  // (Floor by outline, Ramp, Site, Wall chains, ...) could only be finished by clicking their first corner. Enter, Backspace and a first Esc now reach
  // the tool that owns the sketch, as in classic. The space tools of spaces-ui.js have their own listener (it runs first and stops the key).
  window.addEventListener('keydown', (e) => {
    if (!S.on || !root.classList.contains('ws-active') || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.isComposing) return;
    if (e.key !== 'Enter' && e.key !== 'Backspace' && e.key !== 'Escape') return;
    const tgt = e.target;
    if (tgt === ui.typed || tgt.closest?.('input, textarea, select, [contenteditable="true"], dialog, [data-help-panel], [data-app-settings]') || document.querySelector('dialog[open]')) return;   // i18n-ignore: CSS selectors
    const x = extTool(S.tool);
    let did = false;
    if (e.key === 'Escape') did = x ? !!x.escape?.() : (S.tool === 'wall' && !!S.chain && (endChain(), true));
    else if (x) did = !!x.key?.(e, e.key.toLowerCase());
    else if (S.tool === 'wall' && S.chain && e.key === 'Enter') { endChain(); did = true; }
    if (did) { e.preventDefault(); e.stopImmediatePropagation(); drawOverlay(); }
  }, true);
  MS.overPlan = false;
  ui.canvas.addEventListener('pointerenter', () => { MS.overPlan = true; });
  ui.canvas.addEventListener('pointerleave', () => { MS.overPlan = false; });
  const { pickedWalls, deletePicked, passesEdit, pickSnapshot, warmPicks, picked } = mountMuiKeys({
    MS, S, exts, ed, kb, commit, selectedKeys, host, mergeJournals,
  });
  /**
   * perf-finish-11 (PERF.37): the model's snapshot for a pick (read only: picked() and propsBlock), kept while the model's lines have not
   * changed (the same editor, the same IfcFile, the same IfcFile.version; a rebuild opens a new IfcFile). A click on a wall took two whole
   * snapshots before (0.4 s each at 115 MB); now none after the first, and the first is taken in idle time after the open (warmPicks).
   */
  MS.pickSnap = null;

  const { renderProps, decorate } = mountMuiProps({
    MS, S, exts, ed, kb, commit, drawOverlay, famW, projectWallType, sizeName, selectedKeys, faceEnds, picked, pickSnapshot, host, mergeJournals,
    get api() { return api; },
    get lodTag() { return lodTag; },
  });
  MS.propsHost = null;

  setTool('select');
  /** What an extension (extend()) may use. */
  const api = {
    S, root, host, t, ed, kb, commit, refresh, buildScene, drawOverlay, setTool, level, levelAbove, wallsHere, wallsOn, snapAt,
    drawTop, projectWallType, snapCtx: () => snapCtx(), extTool, gripWall: () => gripWall(),   // 0.9 WT.2-WT.7 (wall-tools-ui.js)
    workspaceWallControls: () => ({ row: ui.wallOpts, type: ui.wallType, reference: ui.wallRef, side: ui.wallSide, shape: ui.wallShape, top: ui.wallTop, height: ui.wallH, typedRow: ui.typedRow, typed: ui.typed, units: ui.units }),
    workspaceCancel(finishOnly = false) { if (S.chain) { endChain(); host.status(t('model.chain.ended')); } else if (!finishOnly) setTool('select'); for (const x of exts) x.toolChanged?.(S.tool); },
    workspaceTyped(key) { ui.typed.focus(); ui.typed.value += key; },
    /** F28: prepare real browser data without creating/replacing a canvas or activating a drawing tool. */
    prepareWorkspace() {
      S.data = ed() ? snapshotModel(ed()) : null;
      if (S.data?.levels.length && !S.data.levels.some(l => l.id === S.level)) S.level = (S.data.levels.find(l => Math.abs(l.elevation) < 1) || S.data.levels[0]).id;
      for (const x of exts) x.refresh?.();
    },
    /** F28: a floor plan uses the existing PlanView and picking transform; a restored camera is in model mm. */
    activateWorkspaceView(levelId, camera = null) {
      if (levelId === null) { show(false); return; }
      const same = S.on && S.level === levelId && S.kind === 'plan' && !S.callout;
      S.layout = 'plan';
      if (!same) showKind(levelId, 'plan');
      applyLayout();
      requestAnimationFrame(() => {
        if (!MS.pv || !S.on || S.level !== levelId) return;
        MS.pv.resize();
        if (camera) { Object.assign(MS.pv, camera); MS.pv.render(); }
        else if (!same) fitPlan();
      });
    },
    /** Snap as the Wall tool does, from a point of the extension's own (0.6: outlines drawn by hand): angles, Shift, lengths. */
    snapFrom: (p, e, from) => snapPoint(p, snapCtx(), { tol: MS.pv.pxToMm(SNAP_PX), from, ortho: !!e?.shiftKey, step: 15, round: from ? round() : 0 }),
    pv: () => MS.pv, units: () => S.units, round, selectedKeys, renderProps: () => renderProps(), loopsOf: (st) => loopsOf(ed(), st), fitPlan, mergeJournals,
    /** The plan scene of any level (the sheets' plans), the level shown left as it was. */
    sceneFor(levelId, kind = 'plan', callout = null) {
      const keep = { level: S.level, kind: S.kind, callout: S.callout, loops: S.loops, outlines: S.outlines, cut: S.cut, cutFor: S.cutFor };
      try { S.level = levelId; S.kind = kind === 'rcp' ? 'rcp' : 'plan'; S.callout = callout || null; S.loops = loopsOf(ed(), levelId); S.cutFor = null; cutPlan(); return makeScene(); }
      finally { Object.assign(S, keep); setAnnoRatio(viewRange().scale || 0); }
    },
    schedules: () => scheduleData(),
    /** 0.6 DC.117: a level's placement in model mm (4×4), to move one level's plan into another's (the underlay). */
    storeyMatrix: (levelId) => { try { return storeyWorldMm(ed().placer(), levelId); } catch (e) { return null; } },
    /** 0.6 DF.19: the view range in force, and "it changed: cut the plan again". */
    goLevel(id) { if (!S.data?.levels.some((l) => l.id === id)) return; S.level = id; S.kind = 'plan'; S.callout = null; if (ui.kind) ui.kind.value = 'plan'; endChain(); S.cutFor = null; refresh(); fitPlan(); },
    /** 0.6 DC.117: show a level's floor plan ('plan') or its reflected ceiling plan ('rcp'); the ceiling over a point. */
    showKind, ceilingZ,
    /** The first extension answering `method` (0.6 DF.19: the sheets ask res-ui.js for what they can show). */
    ask(method, ...args) { for (const x of exts) if (typeof x[method] === 'function') return x[method](...args); return undefined; },
    viewRange, rangeChanged() { S.cutFor = null; if (S.on && S.data) { cutPlan(); buildScene(); } },
  };
  return {
    decorate,
    /** 0.7.1 → 0.8: the plan's keys of a stair or room the regulations check named by GlobalId ([] when not drawn). */
    problemKeys: (guid) => PR.keys.get(guid) || [],
    // another file: its 3D view first (Draw off); New building turns Draw on again right after
    opened() { syncLayoutGroup(); S.cutFor = null; S.level = null; S.autoFit3d = false; endChain(); S.queue = []; S.empty3d = !(host.viewer()?.allKeys?.().size); if (S.on) show(false); MS.pickSnap = null; warmPicks(); },   // perf-finish-11: the pick's snapshot and the extensions' (LOD) lists, in idle time
    stage(which) { if (which !== 'ifc' && S.on) show(false); syncLayoutGroup(); },
    rebuilding() { S.reloading = true; S.reloadT = Date.now(); },
    rebuilt() {
      syncLayoutGroup();
      S.reloading = false; S.cutFor = null;
      // a new building's first walls: frame the 3D view once (it had nothing to look at)
      const v = host.viewer(), n = v?.allKeys?.().size || 0;
      if (v && !v._ccAutoWatch && v.canvas) { v._ccAutoWatch = true; for (const ev of ['pointerdown', 'wheel']) v.canvas.addEventListener(ev, () => { S.autoFit3d = false; }, { passive: true }); }
      if ((S.empty3d || S.autoFit3d) && n > 0) { v.view('iso'); S.autoFit3d = true; }   // 0.7 SU.751: keeps framing the new building as it grows until you move the camera
      S.empty3d = n === 0;
      if (S.on) refresh();
      else if (root.classList.contains('ws-active')) { api.prepareWorkspace(); fillWallOpts(); }
      if (S.reselect && !S.queue.length) { try { const ks = S.reselect(); if (ks?.length) S.keepSel = ks; } catch (e) { /* gone */ } S.reselect = null; }
      if (S.keepSel && !S.queue.length) {
        const have = v?.allKeys?.() || new Set(), keys = S.keepSel.filter((k) => have.has(k));
        S.keepSel = null;
        if (keys.length) host.select(keys);
      }
      // a reload this module did not start (Undo, Redo, a placement): what was clicked meanwhile goes in now
      if (!S.busy && S.queue.length) { const q = S.queue.splice(0); for (const [run, meta] of q) apply0(run, meta); scheduleRebuild(null); }
    },
    picked() { if (MS.pv && S.on) { MS.pv.setSelection(selectedKeys()); drawOverlay(); } for (const x of exts) { try { x.picked?.(); } catch (e) { console.error(e); } } },   // walls-shape-10: extensions hear a pick (the Shape tools' grips in 3D)
    /** The project origin / survey markers changed (coords-ui.js): draw the plan again. */
    coordsChanged() { if (MS.pv && S.on) { MS.pv.markers = host.coords?.()?.planMarkers(S.planM) || []; MS.pv.render(); } },
    /** A tool that works in the 3D view (Paint, Views, Render) is starting: the plan-only layout goes to Split (0.6 BIM-F5). */
    need3d() { if (!S.on || S.layout !== 'plan') return false; S.layout = 'split'; applyLayout(); return true; },
    /** 0.9 D9.3: only the plan is shown (no 3D view): M opens the plan's Measure instead of the 3D one. */
    planOnly() { return !!(S.on && S.layout === 'plan'); },
    useTool(name) { if (S.on) setTool(name); },
    /** 0.10 DP.1 (bk-defaults-10): the wall types' tags changed outside the model (a Default Policies LOD policy): fill the lists again. */
    refreshTypes() { if (S.on) { fillWallOpts(); renderProps(); } },
    /** 0.10 BK.74: the type the Wall tool draws with (the New building dialog shows it and can change it). */
    wallDefault() { return S.wall.typeKey; },
    setWallDefault(key) { if (key && wallType(key)) { S.wall.typeKey = key; if (ui.wallType && [...ui.wallType.options].some((o) => o.value === key)) ui.wallType.value = key; } },
    show,
    placeLibrary,
    /** The view mode ('plan' | 'split' | 'model') and the plan-side hooks of placing a Library item (bimcraft.js startPlacing). */
    viewMode,
    /** Bring the plan up (from 3D alone: Split, or the plan alone on a small stage) and show `level` in it. True when it is showing. */
    ensurePlan(levelId) { if (!S.on) show(true); if (!S.on) return false; if (levelId !== undefined && levelId !== null && levelId !== S.level && S.data?.levels.some((l) => l.id === levelId)) api.goLevel(levelId); return true; },
    /** Bring the 3D view up: the plan alone goes to Split; Split and 3D stay. */
    ensure3d() { if (!S.on || S.layout !== 'plan') return false; S.layout = 'split'; applyLayout(); return true; },
    setPlaceHook(h) { S.placeHook = h || null; if (MS.pv && S.on) drawOverlay(); },
    /** The plan point (model mm) under a screen point, or null when the plan is not showing. */
    planPoint(clientX, clientY) { return MS.pv && S.on && !ui.wrap.hidden ? MS.pv.toPlan(clientX, clientY) : null; },
    /** The plan pane's box on screen (null when not showing) and the drop-target highlight / ghost footprint while a Library card is dragged over it. */
    planRect() { return MS.pv && S.on && !ui.wrap.hidden ? ui.canvas.getBoundingClientRect() : null; },
    setDropGhost(g) { S.dropGhost = g || null; ui.wrap.classList.toggle('is-drop-target', !!g); if (MS.pv && S.on) drawOverlay(); },
    redrawOverlay() { if (MS.pv && S.on) drawOverlay(); },
    get on() { return S.on; },
    /** 0.6 DC.117: which view of the level is shown ('plan' | 'rcp'), its level, and the ceiling over a point (placing). */
    get kind() { return S.on ? S.kind : null; }, get level() { return S.level; }, get callout() { return S.on ? S.callout : null; }, ceilingZ,
    /** Add tools from another module: { tools: [names], hint(name), typed(name, text?), move(p, e), click(p, e), dbl, escape(),
     *  key(e, low), overlay(o), scene(scene), ownKeys(set, keyBase), refresh(), toolChanged(name), snapCtx(ctx), levelButtons() →
     *  [elements under the Levels panel] (0.6), classes (RegExp of IFC
     *  classes), pick(key) → { guid, label, … } | null, props(items, kit) → { title } (rows pushed into kit.rows),
     *  remove(items) → op }. Returns the plan's API for it. */
    extend(x) {
      exts.push(x);
      for (const b of root.querySelectorAll('[data-mtool]')) if (!ui.tools.includes(b)) { ui.tools.push(b); b.addEventListener('click', () => setTool(b.dataset.mtool)); }
      return api;
    },
    wallsPicked: pickedWalls,
    // 0.6 round 2 (bim-comforts_PART_2): was `picked`, which replaced picked() above (the plan following a pick) — named apart
    pickedElements: picked,
    /** The Edit menu on the tools' own elements: Delete re-joins the walls left; Copy / Cut / Duplicate are not built for
     *  them yet (a copied door would leave its wall). → true when handled here. */
    edit(name) {
      const p = picked();
      if (!p.count) return false;
      if (name === 'delete') {
        if (p.count !== selectedKeys().length || passesEdit(p)) return false;
        deletePicked(p);
        return true;
      }
      if (name === 'copy' || name === 'cut' || name === 'duplicate') {
        // 0.6 round 2: placed library items (comforts-ui.js) copy, cut and duplicate as bimcraft.js does them
        if (passesEdit(p)) return false;
        host.status(t('model.copy.notyet')); return true;
      }
      return false;
    },
  };
}

/** One journal from two (the second's first states of lines the first already changed are dropped). */
export function mergeJournals(a, b) {
  if (!a) return b; if (!b) return a;
  const before = new Map(a.before);
  for (const [id, line] of b.before) if (!before.has(id) && !a.created.includes(id)) before.set(id, line);
  return { created: [...a.created, ...b.created], before, retyped: [...(a.retyped || []), ...(b.retyped || [])] };
}
