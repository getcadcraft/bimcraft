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
import { wallOutlines, wallTypes, wallType, typeThickness, typeName, typeAt, JUSTIFICATIONS, locationLine, wallsThrough, wallLevelsPassed, topLevelChoices } from './model-walls.js';
import { wallGeom, wallMap, arcMid, arcLength, bulgeThrough, bulgeFromHeight, arcHeight, flatPoly, BULGE_MAX } from './model-arcs.js';   // 0.6 round 2 (bim-comforts_PART_2): curved walls
import { snapPoint, closesChain, loopSide, wallPath } from './model-tools.js';
import { fmtLen, parseLen, parseTyped, fmtAngle, fmtArea, parsePitch, fmtPitch, getDisplayUnits, setDisplayUnits, isMetric, fillUnitSelect, unitMark, lenMark } from './model-units.js';
import { onUnitsChange } from './unit-prefs.js';   // 0.7 UNITS: Settings › General › Units
import { copyLevel, drawWallPath, drawWalls, changeWall, changeWalls, removeWalls, newLevel, changeLevel, snapshotModel, placeOpening, changeOpening, changeOpenings, removeElements, placeFloor, placeCeiling, placeRoof, changeDerived, loopsOf } from './model-ops.js';
import { loopAt, labelPoint, planLoops } from './model-rooms.js';
import { inPoly } from './model-plan.js';
import { inv4 } from './ifc-util.js';
import { edgeKinds, roofGeometry, presetEdges, formatEdges, parseEdges, edgeWalls, ROOF_DEFAULTS } from './res-roof.js';   // 0.5 part 4 RC.1 (bim-residential)
import { FLOOR_KINDS, CEILING_PATTERNS } from './model-slabs.js';
import { DOOR_TYPES, WINDOW_TYPES, openingType, openingTypeName, openingSymbol, fitOffset, handKind } from './model-openings.js';
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { openingFamilies, readFamilies, setFamilySize, familyWriter } from './family-ops.js';   // 0.6 DC.114: families and their sizes
import { familyFor, sizeValues, sizeKey } from './family-model.js';
import { placementReference, placementPath } from './wall-placement.js';

const CUT = 1200;   // mm above the level: where the plan cuts (4'-0")
const RCP_CUT = 2300;   // 0.6 DC.117: where a ceiling plan cuts and looks up from (about 7'-6")
const SNAP_PX = 12;

export function mountModel(host) {
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
    dims: $('[data-model-dims]'), print: $('[data-model-print]'),
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
  let pv = null;
  // tools other modules add (0.5 part 4, bim-residential: res-ui.js) — see extend() at the end
  const exts = [];
  const PR = { src: null, keys: new Map() };   // 0.7.1 → 0.8: the regulations source of the shell's Problems (by the schedules below) and GlobalId → keys
  const extTool = (name) => exts.find((x) => x.tools?.includes(name)) || null;
  const ed = () => host.editor();
  const kb = () => host.model()?.keyBase || 0;

  // ---- on / off, layout ----
  function canDraw() { return !!(ed() && host.model()); }
  function show(on) {
    S.on = !!on && canDraw();
    ui.toggle.setAttribute('aria-pressed', S.on ? 'true' : 'false');
    ui.wrap.hidden = !S.on;
    ui.levelsSec.hidden = !S.on;
    if (ui.schedSec) ui.schedSec.hidden = !S.on;
    // 0.7 SU.751: side by side, each half of a laptop-sized stage is too small to draw in: start with the plan alone (Split is one click)
    if (S.on && S.layoutAuto && S.layout === 'split' && ui.stageEl.clientWidth && ui.stageEl.clientWidth < 60 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16)) S.layout = 'plan';
    applyLayout();
    if (!S.on) { endChain(); setTool('select'); return; }
    if (!pv) {
      pv = new PlanView(ui.canvas, { move: onMove, click: onClick, dblclick: onDbl, down: onDown, up: onUp, leave: () => { S.last = null; S.hover = null; host.coords?.()?.plan(null, level(), S.planM); drawOverlay(); }, contextmenu: () => endChain() });
      pv.padBottom = 40;   // the status line
      // the Draw bar changes height with the tool; content it now covers is brought back into view (only a plan you have not moved)
      pv.barBoxFn = () => { const c = ui.canvas.getBoundingClientRect(), b = ui.bar.getBoundingClientRect(); return b.width > 0 ? { w: b.right - c.left + 12, h: b.bottom - c.top + 12 } : null; };
      if (ui.bar) new ResizeObserver(() => { if (pv && !pv.userMoved && S.on && pv.outsideView()) requestAnimationFrame(() => fitPlan()); }).observe(ui.bar);
      window.bimcraftPlan = { view: pv, state: S, click: (p) => onClick(p, {}), move: (p) => onMove(p, {}), typed: (s) => applyTyped(s), refresh };   // for tests
    }
    refresh(true);
  }
  /** Split stacks the plan over the 3D view when side by side each half would be narrower than 20rem — a narrow window,
   *  wide side panels or a big interface size, where the Draw bar ran out of its half (0.6 DC.101). True when it changed. */
  function stackSplit() {
    const st = ui.stageEl, rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const on = S.on && S.layout === 'split' && (st.clientWidth < 40 * rem || window.innerWidth <= 900);
    if (st.classList.contains('is-plan-stacked') === on) return false;
    st.classList.toggle('is-plan-stacked', on);
    return true;
  }
  if (ui.stageEl) new ResizeObserver(() => { if (stackSplit()) requestAnimationFrame(() => { host.viewer()?.resize?.(); pv?.resize(); }); }).observe(ui.stageEl);
  function applyLayout() {
    const st = ui.stageEl;
    st.classList.toggle('is-plan-split', S.on && S.layout === 'split');
    st.classList.toggle('is-plan-only', S.on && S.layout === 'plan');
    stackSplit();
    st.style.setProperty('--bc-split', S.split + '%');
    ui.layoutGroup.hidden = !canDraw();
    ui.splitter.hidden = !(S.on && S.layout === 'split');
    ui.splitter.setAttribute('aria-valuenow', String(S.split));
    ui.splitter.setAttribute('aria-orientation', st.classList.contains('is-plan-stacked') ? 'horizontal' : 'vertical');
    for (const b of ui.layout) b.setAttribute('aria-pressed', b.dataset.modelLayout === (S.on ? S.layout : '3d') ? 'true' : 'false');
    requestAnimationFrame(() => { host.viewer()?.resize?.(); pv?.resize(); });
  }
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
  const splitAt = (e) => {
    const b = ui.stageEl.getBoundingClientRect(), stacked = ui.stageEl.classList.contains('is-plan-stacked');
    S.split = Math.max(20, Math.min(80, Math.round((stacked ? (e.clientY - b.top) / b.height : (e.clientX - b.left) / b.width) * 100)));
    applyLayout();
  };
  ui.splitter.addEventListener('pointerdown', (e) => { e.preventDefault(); ui.splitter.setPointerCapture(e.pointerId); splitAt(e); });
  ui.splitter.addEventListener('pointermove', (e) => { if (ui.splitter.hasPointerCapture(e.pointerId)) splitAt(e); });
  ui.splitter.addEventListener('keydown', (e) => {
    const d = { ArrowLeft: -5, ArrowUp: -5, ArrowRight: 5, ArrowDown: 5 }[e.key];
    if (!d) return;
    e.preventDefault(); S.split = Math.max(20, Math.min(80, S.split + d)); applyLayout();
  });
  ui.fit?.addEventListener('click', () => fitPlan());
  /** Fit the plan below BimCraft's toolbar and the model bar, which sit over its top. */
  function fitPlan() {
    if (!pv) return;
    pv.resize();   // the pane may just have changed size (Split / Plan)
    const c = ui.canvas.getBoundingClientRect(), b = ui.bar.getBoundingClientRect();
    // the Draw bar floats over the plan's top left: when it is narrow, fit beside it (not under it), else below it
    if (b.width > 0 && b.width < c.width * 0.7) { pv.padLeft = b.right - c.left + 12; pv.padTop = Math.max(0, b.top - c.top) + 12; pv.barBox = { w: pv.padLeft, h: b.bottom - c.top + 12 }; }
    else { pv.padLeft = 0; pv.padTop = Math.max(0, b.bottom - c.top) + 12; pv.barBox = null; }
    const cr = S.data && S.level !== null ? viewRange().crop : null;   // 0.6 DC.117: a cropped view fits its crop
    pv.fit(cr ? { x0: cr[0], y0: cr[1], x1: cr[2], y1: cr[3] } : undefined);
  }
  // the model bar goes under the toolbar, however many rows it wraps to
  if (ui.toolbar) new ResizeObserver(() => ui.stageEl.style.setProperty('--bc-tb-h', ui.toolbar.offsetHeight + 'px')).observe(ui.toolbar);

  // ---- data ----
  function refresh(fitToo = false) {
    if (!S.on || !ed()) return;
    S.data = snapshotModel(ed());
    const levels = S.data.levels;
    if (!levels.length) { host.status(t('model.err.nolevels'), true); return; }
    if (!levels.some((l) => l.id === S.level)) S.level = (levels.find((l) => Math.abs(l.elevation) < 1) || levels[0]).id;
    fillLevelSelect();
    renderLevels();
    fillWallOpts();
    fillOpeningOpts();
    fillSlabOpts();
    S.loops = loopsOf(ed(), S.level);
    // 0.6 DF.15: the level named in the plan's corner, the project origin and survey point drawn on it (coords-ui.js)
    try { S.planM = storeyWorldMm(ed().placer(), S.level); } catch (e) { S.planM = null; }
    host.coords?.()?.plan(null, level(), S.planM);
    if (pv) pv.markers = host.coords?.()?.planMarkers(S.planM) || [];
    for (const x of exts) x.refresh?.();
    PR.src?.invalidate();   // 0.7.1 → 0.8: the regulations add-on's problems, re-checked a moment later
    cutPlan();
    buildScene();
    if (fitToo) fitPlan();
    else if (pv && !pv.userMoved && pv.outsideView()) fitPlan();   // 0.7 SU.751: what you drew went off the edge of a view you have not moved: show it all
  }
  const level = () => S.data?.levels.find((l) => l.id === S.level) || null;
  const levelAbove = () => { const L = S.data?.levels || [], i = L.findIndex((l) => l.id === S.level); return i >= 0 ? L[i + 1] || null : null; };
  const wallsHere = () => (S.data?.walls || []).filter((w) => w.storey === S.level);
  const wallsOn = (storey) => (S.data?.walls || []).filter((w) => w.storey === storey);
  /**
   * 0.7 BIM-MLWALL: an opening is on the level whose floor-to-floor band holds its sill, so one high up a wall that runs through
   * levels is on the upper level's plan (it stays stored on the wall's own level, where the wall is).
   */
  function openingLevel(o) {
    const L = S.data.levels, wl = L.find((l) => l.id === o.storey);
    if (!wl) return o.storey;
    const z = wl.elevation + o.sill + 1;
    let best = wl;
    for (const l of L) if (l.elevation <= z && l.elevation > best.elevation) best = l;
    return best.id;
  }
  const openingsHere = () => (S.data?.openings || []).filter((o) => openingLevel(o) === S.level);
  const throughHere = (cut = CUT) => (S.data?.levels?.length > 1 ? wallsThrough(S.data.walls, S.data.levels, S.level, cut) : []);
  /** How far this level's floor is above the floor of the level `storey` where a wall starts (what an opening's sill adds up there). */
  const riseOver = (storey) => { const a = S.data.levels.find((l) => l.id === storey), b = level(); return a && b ? Math.max(0, b.elevation - a.elevation) : 0; };
  /** 0.6 DF.19: the plan's view range and what it hides (views-ui.js asks views-model.js); else the cut at CUT. */
  function viewRange() {
    for (const x of exts) { const r = x.viewRange?.(S.level, S.kind, S.callout); if (r) return r; }
    // 0.6 DC.117: a ceiling plan with no settings of its own looks up from 2300 mm to the level's height
    if (S.kind === 'rcp') return { kind: 'rcp', cut: RCP_CUT, top: level()?.height || 3000, bottom: 0, depth: 0, hiddenClasses: new Set(), hiddenGuids: new Set() };
    return { cut: CUT, top: null, bottom: 0, depth: 50, hiddenClasses: new Set(), hiddenGuids: new Set() };
  }
  /** Keys of elements the view hides: by class (the model's classOf) and by GlobalId. */
  function hiddenKeys(r) {
    const model = host.model(), out = new Set();
    if (!model || (!r.hiddenClasses.size && !r.hiddenGuids.size)) return out;
    const lower = new Set([...r.hiddenClasses].map((c) => c.toLowerCase()));
    const api = host.ifc()?.api;
    for (const [id, cls] of model.classOf || []) {
      const c = String(cls).toLowerCase();
      if (lower.has(c) || lower.has(c.replace(/standardcase$|elementedcase$/, ''))) { out.add(model.keyBase + id); continue; }
      if (r.hiddenGuids.size && api) { const g = api.GetLine(model.modelID, id, false)?.GlobalId?.value; if (g && r.hiddenGuids.has(g)) out.add(model.keyBase + id); }
    }
    return out;
  }
  const hiddenOwn = (r, cls, guid) => r.hiddenGuids.has(guid) || [...r.hiddenClasses].some((c) => c.toLowerCase() === cls.toLowerCase());

  /** Cut the rebuilt model's meshes for this level (what the tools did not draw). */
  function cutPlan() {
    const model = host.model(), ifc = host.ifc();
    if (!model || !ifc) { S.cut = null; return; }
    const r = viewRange();
    const tag = model.modelID + ':' + S.level + ':' + S.kind + ':' + model.batches.length + ':' + model.triangles + ':' + [r.cut, r.top, r.bottom, r.depth, ...r.hiddenClasses, ...r.hiddenGuids].join(',');
    if (S.cutFor === tag && S.cut) return;
    const own = ownKeys(), skip = new Set([...own, ...hiddenKeys(r)]);
    const w = ed().placer();
    let M;
    try { M = viewerToPlan(ifc.api.GetCoordinationMatrix(model.modelID), storeyWorldMm(w, S.level)); } catch (e) { S.cut = null; return; }
    // a ceiling plan (0.6 DC.117) looks up: nothing below the cut, what is above it up to the top
    const c = S.kind === 'rcp' ? planCut(model, { M, storey: S.level, cutZ: r.cut, skip, bottom: r.cut, depth: 0, top: r.top || level()?.height || 3000 })
      : planCut(model, { M, storey: S.level, cutZ: r.cut, skip, bottom: r.bottom, depth: r.depth, top: r.top });
    S.cut = { cut: [...c.cut].map(([key, segs]) => ({ key, segs, loops: chainLoops(segs) })), below: [...c.below].map(([key, segs]) => ({ key, segs })), above: [...c.above].map(([key, segs]) => ({ key, segs })), own };
    S.cutFor = tag;
  }
  function storeyWorldMm(w, storey) {
    const st = w.api.GetLine(w.mid, storey, false);
    const M = st?.ObjectPlacement ? [...w.api.GetWorldTransformMatrix(w.mid, st.ObjectPlacement.value)] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    M[12] *= w.unitMm; M[13] *= w.unitMm; M[14] *= w.unitMm;
    return M;
  }
  function ownKeys() {
    const k = kb(), s = new Set();
    for (const w of S.data?.walls || []) s.add(k + w.id);
    for (const o of S.data?.openings || []) s.add(k + o.id);
    for (const r of S.data?.derived?.roofs || []) for (const p of r.parts) s.add(k + p);
    for (const x of exts) x.ownKeys?.(s, k);
    return s;
  }
  /** The plan scene of the level shown (also for the sheets: api.sceneFor). */
  function makeScene() {
    const vr = viewRange();
    const walls = wallsHere().filter((w) => !hiddenOwn(vr, 'IfcWall', w.guid));
    S.outlines = wallOutlines(walls.map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge })));
    const k = kb(), own = ownKeys(), allOps = openingsHere(), ops = allOps.filter((o) => !hiddenOwn(vr, o.kind === 'window' ? 'IfcWindow' : 'IfcDoor', o.guid));
    const through = throughScene(vr, k);
    const byWall = new Map([...walls, ...throughHere(vr.cut)].map((w) => [w.id, w]));
    let materials = null;
    try { materials = readMaterials(new ModelWriter(ed().W, ed().api, ed().mid)); } catch { /* F02: preserve unsupported library; envelope only. */ }
    const scene = {
      through,
      walls: wallPlanGraphics(walls, S.outlines, allOps, materials, { detail: vr.detail || 'coarse', cutZ: vr.cut, scale: vr.scale || 50, keyBase: k }),
      symbols: ops.filter((o) => byWall.has(o.wall) && (!S.drag || S.drag.op.guid !== o.guid)).map((o) => ({ key: k + o.id, guid: o.guid, ...openingSymbol(o, byWall.get(o.wall)) })),
      rooms: hiddenOwn(vr, 'IfcSpace', '') ? [] : roomsScene(), dims: [],
      cut: (S.cut?.cut || []).filter((c) => !own.has(c.key)),
      below: (S.cut?.below || []).filter((c) => !own.has(c.key)),
      above: (S.cut?.above || []).filter((c) => !own.has(c.key)),
      cutZ: vr.cut, crop: vr.crop || null, scale: vr.scale || 0, detail: vr.detail || 'coarse',   // 0.6 DC.117: the view's crop region and scale (sheets, print)
    };
    scene.graphicWarnings = scene.walls.filter(w => w.graphicWarning).map(w => w.guid);
    if (scene.graphicWarnings.length) host.status(t('model.pv.layers.unavailable'), true);
    if (S.kind === 'rcp') {
      // 0.6 DC.117, a ceiling plan: the walls cut at its height, no door or window symbols, no rooms or dimensions; what is above
      // the cut (ceilings, lights, beams) drawn solid and thin, as a plan draws what is below it
      Object.assign(scene, { kind: 'rcp', symbols: [], rooms: [], below: scene.above, above: [] });
    } else scene.symbols.push(...roofsScene());
    // the walls' outline as one: their joins (mitres, T ends) are not drawn, as on a drafted plan
    const pieces = scene.walls.flatMap((w) => w.pieces || []);
    if (pieces.length) scene.wallEdges = wallPlanEdges(scene.walls);
    if (S.dims && S.kind !== 'rcp') scene.dims = wallDims(walls, S.outlines, ops, (mm) => fmtLen(mm, S.units), { exteriorOf: (w) => (w.assembly || projectWallType(w.typeKey))?.exterior ?? true });
    for (const x of exts) x.scene?.(scene);
    return scene;
  }
  /**
   * 0.7 BIM-MLWALL: walls of other levels that this plan cuts (a wall that starts below and runs up past this floor), drawn
   * in the same poché but lighter and never picked: they are edited on the level they start on. Joined outlines come from
   * that level's walls, doors and windows are taken out at this level's cut height.
   */
  function throughScene(vr, k) {
    const D = S.data;
    if (!D?.levels || D.levels.length < 2) return [];
    const list = wallsThrough(D.walls, D.levels, S.level, vr.cut).filter((w) => !hiddenOwn(vr, 'IfcWall', w.guid));
    if (!list.length) return [];
    const lvl = new Map(D.levels.map((l) => [l.id, l])), here = lvl.get(S.level), outlines = new Map();
    for (const st of new Set(list.map((w) => w.storey))) for (const [g, poly] of wallOutlines(D.walls.filter((w) => w.storey === st).map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge })))) { outlines.set(g, poly); S.outlines.set(g, poly); }   // S.outlines too: the opening tools measure the face ends from it
    return list.map((w) => {
      const poly = outlines.get(w.guid) || [], rel = here.elevation + vr.cut - lvl.get(w.storey).elevation;
      return { key: k + w.id, guid: w.guid, poly, from: lvl.get(w.storey).name, pieces: poly.length ? wallPieces(w, poly, (D.openings || []).filter((o) => o.wall === w.id), rel) : [] };
    });
  }
  function buildScene() {
    if (!pv) return;
    const scene = makeScene();
    pv.gridUnit = isMetric(S.units) ? 1000 : 304.8;
    pv.setScene(scene);
    renderSchedule();
    pv.setSelection(selectedKeys());
    drawOverlay();
  }
  const selectedKeys = () => [...(host.viewer()?.selection || [])];
  /** Room labels: every space of this level drawn over its room (name, area). */
  function roomsScene() {
    const k = kb(), out = [];
    for (const sp of (S.data?.derived?.spaces || []).filter((x) => x.storey === S.level)) {
      const loop = S.loops && loopAt(S.loops.rooms, sp.seed);
      if (!loop) continue;
      out.push({ key: k + sp.id, poly: loop.poly, at: labelPoint(loop.poly), label: [sp.name || sp.number, fmtArea(loop.area, S.units)] });
    }
    return out;
  }
  /** Roofs on this level: the eave (dashed) and the ridges and hips (thin), from the walls under them. */
  function roofsScene() {
    const k = kb(), out = [];
    for (const r of (S.data?.derived?.roofs || []).filter((x) => x.storey === S.level)) {
      const wl = S.data.levels.find((l) => l.guid === r.walls);
      if (!wl) continue;
      const loops = wl.id === S.level ? S.loops : loopsOf(ed(), wl.id);
      const o = loopAt(loops.outlines, r.seed);
      const plan = o && roofGeometry(o.poly, edgeKinds(o.poly, wallsOn(wl.id), r), { thickness: r.thickness, fascia: r.fascia, soffit: r.soffit });
      if (!plan || plan.error) continue;
      const eave = plan.eave.map((p, i) => [p[0], p[1], plan.eave[(i + 1) % plan.eave.length][0], plan.eave[(i + 1) % plan.eave.length][1]]);
      out.push({ key: k + r.id, dashed: eave, thin: plan.ridge, poly: plan.eave, roof: true });
    }
    return out;
  }

  // ---- dimensions, schedules, print (BM.7) ----
  ui.dims?.addEventListener('click', () => { S.dims = !S.dims; ui.dims.setAttribute('aria-pressed', S.dims ? 'true' : 'false'); buildScene(); });
  ui.schedKind?.addEventListener('change', () => { S.sched = ui.schedKind.value; renderSchedule(); });
  onRules((p) => {   // a new pack, or the add-on switched off: the schedule is worked out again (or its entry goes)
    if (!p) { ui.schedKind?.querySelectorAll('option[data-rules]').forEach((o) => o.remove()); if (S.sched === 'regs') { S.sched = 'doors'; if (ui.schedKind) ui.schedKind.value = 'doors'; } }
    if (S.on) renderSchedule();
  });
  // 0.7.1 → 0.8 (docs/0.8-PROBLEMS-SPEC.md § Regulations): the regulations add-on's check as a live source of the shell's Problems (manifest
  // "problems") — re-checked a moment after each edit (the store's debounce and budget), gone when the add-on is switched off; core BimCraft
  // knows no regulations, it only asks the provider (rules-hook.js problems). Draw's stairs and rooms are found again by GlobalId (problemKeys).
  function rulesCtx() {
    const loops = new Map();
    for (const l of S.data?.levels || []) if ((S.data.derived?.spaces || []).some((x) => x.storey === l.id)) loops.set(l.id, l.id === S.level && S.loops ? S.loops : loopsOf(ed(), l.id));
    const levelName = (id) => S.data?.levels.find((l) => l.id === id)?.name || '';
    return { snap: S.data, loops, stairs: exts.flatMap((x) => x.ruleStairs?.() || []), levelName, stairWord: t('res.stair'), fmtLen: (mm) => fmtLen(mm, S.units) };
  }
  function regsSource() {
    const P = window.ccProblems, p = rules();
    if (!P || typeof p?.problems !== 'function') { PR.src?.dispose(); PR.src = null; return; }
    PR.src ||= P.source({
      id: 'bimcraft.regs', kind: 'regulation', label: t('problems.src.regs'), debounceMs: 400,
      run: () => {
        if (!S.on || !S.data || !ed()) return null;   // Draw off: what was found stays until it is on again
        const ctx = rulesCtx(), k = kb();
        PR.keys.clear();
        for (const sp of S.data.derived?.spaces || []) if (sp.guid) PR.keys.set(sp.guid, [k + sp.id]);
        for (const st of ctx.stairs) if (st.guid && st.id != null) PR.keys.set(st.guid, [k + st.id]);
        return rules()?.problems?.(ctx) || [];
      },
    });
    PR.src.invalidate();
  }
  onRules(() => regsSource());
  if (window.ccProblems) regsSource(); else document.addEventListener('cc-problems-ready', () => regsSource(), { once: true });
  function scheduleData() {
    const loops = new Map();
    for (const l of S.data?.levels || []) if ((S.data.derived?.spaces || []).some((x) => x.storey === l.id)) loops.set(l.id, l.id === S.level && S.loops ? S.loops : loopsOf(ed(), l.id));
    const all = schedules(S.data, loops, { fmtLen: (mm) => fmtLen(mm, S.units), fmtArea: (mm2) => fmtArea(mm2, S.units), t, unit: unitMark(S.units) });
    if (ed()) Object.assign(all, assemblySchedules(new ModelWriter(ed().W, ed().api, ed().mid)));
    // 0.8 REG.1: the model against the building regulations a regulations add-on says are in force (core knows none)
    {
      const levelName = (id) => S.data?.levels.find((l) => l.id === id)?.name || '';
      const sc = rules()?.schedule?.({ snap: S.data, loops, stairs: exts.flatMap((x) => x.ruleStairs?.() || []), levelName, stairWord: t('res.stair'), fmtLen: (mm) => fmtLen(mm, S.units) });
      if (sc && typeof sc.key === 'string') all[sc.key] = sc;
    }
    for (const x of exts) Object.assign(all, x.schedules?.() || {});   // extensions' schedules (res-ui.js: the lumber cut list)
    return all;
  }
  function renderSchedule() {
    if (!ui.sched || !S.on || !S.data) return;
    const all = scheduleData(), sc = all[S.sched];
    for (const key of ['assemblies','materialLegend']) if (!ui.schedKind.querySelector('option[value="'+key+'"]')) ui.schedKind.append(el('option', {value:key}, all[key].title));
    if (all.regs && !ui.schedKind.querySelector('option[value="regs"]')) ui.schedKind.append(el('option', {value:'regs', 'data-rules': ''}, all.regs.title));   // 0.8 REG.1: the regulations add-on's entry
    if (!sc) return;
    // a row picks what it lists
    const k = kb();
    const xs = exts.find((x) => x.scheduleKeys && (x.schedules?.() || {})[S.sched]);
    const keysOf = (i) => {
      if (sc.rowInfo || S.sched === 'regs') return [];
      if (xs) return xs.scheduleKeys(S.sched, i) || [];
      if (S.sched === 'doors' || S.sched === 'windows') { const kind = S.sched === 'doors' ? 'door' : 'window'; const list = S.data.openings.filter((o) => o.kind === kind); const byRow = sc.rows[i][0]; const o = list.find((x) => x.mark === byRow); return o ? [k + o.id] : []; }
      if (S.sched === 'walls') { const name = sc.rows[i][0]; return S.data.walls.filter((w) => (projectWallType(w.typeKey) ? typeName(projectWallType(w.typeKey)) : w.typeName) === name).map((w) => k + w.id); }
      const sp = (S.data.derived?.spaces || []).find((x) => x.number === sc.rows[i][0]); return sp ? [k + sp.id] : [];
    };
    const table = el('table', {}, el('thead', {}, el('tr', {}, ...sc.head.map((h) => el('th', {}, h)))),
      el('tbody', {}, ...sc.rows.map((r, i) => {
        const info=sc.rowInfo?.[i], group=info?.group;
        const tr = el('tr', { 'data-msched-row': String(i) }, ...r.map((c,j) => {
          const td=el(group?'th':'td', { ...(group?{colSpan:sc.head.length}:{}), style:sc.rowInfo?'white-space:pre-wrap;overflow-wrap:anywhere;max-width:260px;min-width:50px':'' }, c);
          if(S.sched==='materialLegend'&&j===0&&info?.swatch){const m=info.swatch;td.append(el('span', {title:m.kind,'aria-label':m.kind+' symbol',style:`display:block;width:30px;height:14px;border:1px ${m.kind==='missing'?'dashed':'solid'} #777;${m.kind==='membrane'?`height:0;border:0;border-top:3px dashed ${m.color};`:m.kind==='material'?'background:'+materialBackground(m)+';':''}`}));}
          return td;
        }));
        if(!sc.rowInfo)tr.addEventListener('click', () => host.select(keysOf(i))); return tr;
      })),
      sc.total ? el('tfoot', {}, el('tr', {}, ...sc.head.map((_, i) => el('td', {}, sc.total[i] ?? '')))) : null);
    const expand=sc.rowInfo?el('button',{type:'button',className:'btn-line btn-sm-cc','data-schedule-expand':'',onClick:()=>{
      const full=table.cloneNode(true);full.style='width:100%;min-width:900px';
      const dlg=el('dialog',{className:'bc-dialog','data-schedule-expanded':'',style:'width:min(1240px,96vw);max-width:1240px'},
        el('h2',{},sc.title),el('p',{className:'bc-muted'},sc.note),
        el('div',{style:'max-height:70vh;overflow:auto'},full),
        el('button',{type:'button',className:'btn-line btn-sm-cc','data-schedule-close':'',onClick:()=>dlg.close()},t('model.sch.close')));
      dlg.addEventListener('close',()=>dlg.remove());dlg.addEventListener('keydown',e=>e.stopPropagation());host.root.append(dlg);dlg.showModal();
    }},t('model.sch.full')):null;
    ui.sched.replaceChildren(...(sc.note?[el('p',{className:'bc-muted','data-schedule-note':''},sc.note)]:[]),...(expand?[expand]:[]), sc.rows.length ? table : el('p', { className: 'bc-muted' }, t('model.sch.none')));
  }
  ui.schedCsv?.addEventListener('click', () => {
    if (!S.data) return;
    const sc = scheduleData()[S.sched];
    const base = String(host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    host.download(base + ' ' + (sc.title || t('model.sch.' + S.sched)).toLowerCase() + '.csv', '\ufeff' + scheduleCsv(sc), 'text/csv');   // i18n-ignore: a file name
  });
  ui.print?.addEventListener('click', async () => {
    if (!pv || !S.data) return;
    const sc = { ...pv.scene, dims: (pv.scene.dims || []).map((d) => ({ ...d, offPx: undefined })) };
    const lv = level(), when = new Date().toISOString().slice(0, 10);
    const base = String(host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    const pdfOpts = { title: api.ask('viewTitle') || t(S.kind === 'rcp' ? 'model.print.rcpof' : 'model.print.titleof', { level: lv?.name || '' }), lines: [base, t('model.print.cut', { h: fmtLen(viewRange().cut, S.units) }), when], units: S.units, paper: isMetric(S.units) ? 'a4' : 'letter', scale: viewRange().scale || null };
    // 0.8 D8.8 (round 3): this level's pictures go under the drawing as image objects, brought down to 200 dpi on the sheet (picture-ui.js)
    let images = [], picFail = false;
    try { if (window.bimcraftPicture?.pdfImages) images = await window.bimcraftPicture.pdfImages(S.level, sheetFor(sc, pdfOpts).sc[0]); } catch (e) { picFail = true; }
    const r = planPdf(sc, { ...pdfOpts, images });
    host.download(base + ' — ' + (lv?.name || '') + (S.kind === 'rcp' ? ' ' + t('model.rcp.file') : '') + '.pdf', r.bytes, 'application/pdf');   // i18n-ignore: a file name
    host.status(t('model.print.done', { scale: r.scale.label }) + (r.missing ? ' ' + t('model.print.missing', { n: r.missing }) : '') + (r.images ? ' ' + t('pic.pdf.done', { n: r.images }) : '') + (picFail ? ' ' + t('pic.pdf.failed') : ''), picFail);
  });

  // ---- the level select and the Levels panel ----
  function fillLevelSelect() {
    const L = S.data.levels;
    ui.level.replaceChildren(...L.slice().reverse().map((l) => el('option', { value: String(l.id), selected: l.id === S.level }, l.name)));
  }
  ui.level.addEventListener('change', () => { S.level = Number(ui.level.value); S.callout = null; endChain(); S.cutFor = null; refresh(); fitPlan(); });
  // 0.6 DC.117: the level's floor plan or its reflected ceiling plan
  ui.kind?.addEventListener('change', () => showKind(S.level, ui.kind.value === 'rcp' ? 'rcp' : 'plan'));
  function showKind(levelId, kind, callout = null) {
    if (!S.data?.levels.some((l) => l.id === levelId)) return;
    if (!S.on) show(true);
    S.level = levelId; S.kind = kind; S.callout = callout || null; endChain(); S.cutFor = null;
    if (ui.kind) ui.kind.value = kind;
    refresh(); fitPlan();
  }
  /** 0.6 DC.117: the underside of the ceiling over a point (model mm, file axes) on a storey, mm above the level; else null. */
  function ceilingZ(storey, x, y) {
    const e = ed();
    if (!e) return null;
    // the storey's ceilings as plan outlines, read once per model state (placing asks on every pointer move)
    const tag = storey + ':' + (e.changes?.length ?? 0) + ':' + (S.data ? 'd' : 's');
    if (S.ceil?.tag !== tag || S.ceil.data !== S.data) {
      const D = S.data || snapshotModel(e), loops = loopsOf(e, storey);
      let Wi = null;
      try { Wi = inv4(storeyWorldMm(e.placer(), storey)); } catch (err) { Wi = null; }
      const list = (D.derived?.ceilings || []).filter((c) => c.storey === storey)
        .map((c) => ({ c, lp: loopAt(c.mode === 'building' ? loops.outlines : loops.rooms, c.seed) })).filter((q) => q.lp);
      S.ceil = { tag, data: S.data, Wi, list };
    }
    const { Wi, list } = S.ceil;
    if (!Wi || !list.length) return null;
    const p = [Wi[0] * x + Wi[4] * y + Wi[12], Wi[1] * x + Wi[5] * y + Wi[13]];
    let best = null;
    for (const { c, lp } of list) if (inPoly(p[0], p[1], lp.poly) && !(lp.holes || []).some((h) => inPoly(p[0], p[1], h))) best = best === null ? c.height : Math.min(best, c.height);
    return best;
  }
  function renderLevels() {
    if (!ui.levels) return;
    const L = S.data.levels;
    const row = (l) => {
      const name = el('input', { type: 'text', className: 'bc-input', value: l.name, maxLength: 120, 'aria-label': t('model.lv.name'), 'data-lv-name': l.guid });
      const elev = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtLen(l.elevation, S.units), 'aria-label': t('model.lv.elev'), 'data-lv-elev': l.guid });
      const ht = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtLen(l.height, S.units), 'aria-label': t('model.lv.height'), 'data-lv-height': l.guid });
      const pick = el('input', { type: 'radio', name: 'bc-plan-level', checked: l.id === S.level, 'aria-label': t('model.lv.show', { name: l.name }) });
      pick.addEventListener('change', () => { S.level = l.id; endChain(); S.cutFor = null; refresh(); fitPlan(); });
      const commitOn = (input, fn) => {
        const go = () => { const r = fn(input.value); if (r === false) input.value = input.defaultValue; };
        input.addEventListener('change', go);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } if (e.key === 'Escape') { input.value = input.defaultValue; input.blur(); } });
      };
      commitOn(name, (v) => { if (!v.trim()) return false; commit(changeLevel(l.guid, { name: v.trim() }), { label: l.name, verb: t('model.verb.changed') }); });
      commitOn(elev, (v) => { const mm = parseLen(v, S.units); if (!Number.isFinite(mm)) { host.status(t('model.err.length'), true); return false; } commit(changeLevel(l.guid, { elevation: mm, shiftAbove: true }), { label: l.name, verb: t('model.verb.moved') }); });
      commitOn(ht, (v) => { const mm = parseLen(v, S.units); if (!(mm >= 1000 && mm <= 100000)) { host.status(t('new.err.height'), true); return false; } commit(changeLevel(l.guid, { height: mm, shiftAbove: true }), { label: l.name, verb: t('model.verb.changed') }); });
      return el('li', { className: 'bc-level' + (l.id === S.level ? ' is-current' : ''), 'data-level': l.guid },
        el('label', { className: 'bc-level-pick' }, pick), name, elev, ht);
    };
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lv-add': '' }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), ' ' + t('model.lv.add'));
    add.addEventListener('click', () => {
      const top = L[L.length - 1];
      commit(newLevel({ name: t('new.level', { n: L.length + 1 }), elevation: top ? top.elevation + top.height : 0, height: top ? top.height : 3000 }), { label: t('new.level', { n: L.length + 1 }), verb: t('model.verb.added') });
    });
    // 0.7 SU.461: the floor plan of this level drawn again on another (or a new one on top)
    const copy = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lv-copy': '' }, el('i', { className: 'bi bi-files', 'aria-hidden': 'true' }), ' ' + t('model.lv.copy'));
    copy.addEventListener('click', () => openCopyLevel());
    ui.levels.replaceChildren(
      el('div', { className: 'bc-level bc-level-head', 'aria-hidden': 'true' }, el('span', { className: 'bc-lv-e' }, t('model.lv.elev')), el('span', { className: 'bc-lv-h' }, t('model.lv.height'))),
      el('ul', { className: 'bc-levels' }, ...L.slice().reverse().map(row)), add, copy, ...exts.flatMap((x) => x.levelButtons?.() || []));   // 0.6 DF.20: Add levels…
  }

  /** Copy level…: what is drawn on the level shown, to another level or a new one on top. */
  function openCopyLevel() {
    const from = level(), L = S.data.levels, others = L.filter((l) => l.id !== from.id);
    const top = L[L.length - 1], mine = wallsHere().length;
    const to = el('select', { className: 'select-cc', 'data-lvc-to': '' }, ...others.slice().reverse().map((l) => el('option', { value: l.guid }, l.name)), el('option', { value: '' }, t('model.lv.copy.new')));
    const note = el('p', { className: 'bc-muted', role: 'status' });
    const showNote = () => { const l = L.find((x) => x.guid === to.value); note.textContent = !mine ? t('model.lv.copy.none', { name: from.name }) : l && wallsOn(l.id).length ? t('model.lv.copy.exists', { name: l.name }) : ''; };
    to.addEventListener('change', showNote); showNote();
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-lvc-h', 'data-lvc-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-lvc-h' }, t('model.lv.copy.title')),
        el('p', {}, t('model.lv.copy.what', { name: from.name })),
        el('label', { className: 'bc-dlg-field' }, el('span', {}, t('model.lv.copy.to')), to), note,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-lvc-ok': '', disabled: !mine }, t('model.lv.copy.ok')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      const spec = { from: from.guid, to: to.value || null };
      if (!spec.to) spec.newLevel = { name: t('new.level', { n: L.length + 1 }), elevation: top.elevation + top.height, height: top.height };
      commit(copyLevel(spec), { label: from.name, verb: t('model.verb.copied') });
      const dest = spec.to ? S.data.levels.find((l) => l.guid === spec.to) : S.data.levels[S.data.levels.length - 1];
      if (dest && S.data.levels.length >= L.length) { S.level = dest.id; S.cutFor = null; refresh(); fitPlan(); }
    });
    dlg.addEventListener('close', () => dlg.remove());
    root.append(dlg);
    dlg.showModal();
  }

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

  // ---- tools ----
  function setTool(name) {
    S.tool = name;
    for (const b of ui.tools) b.setAttribute('aria-pressed', b.dataset.mtool === name ? 'true' : 'false');
    if (ui.wallOpts) ui.wallOpts.hidden = name !== 'wall';
    for (const [k, row] of Object.entries(ui.oOpts)) if (row) row.hidden = name !== k;
    for (const k of ['floor', 'ceiling', 'roof']) { const row = root.querySelector(`[data-mopts="${k}"]`); if (row) row.hidden = name !== k; }
    for (const row of root.querySelectorAll('[data-mopts]')) if (!['wall', 'door', 'window', 'floor', 'ceiling', 'roof'].includes(row.dataset.mopts)) row.hidden = row.dataset.mopts !== name;
    const xt = extTool(name);
    S.hover = null;
    if (ui.typedRow) ui.typedRow.hidden = name === 'select';
    const typedLabel = ui.typed?.closest('label');
    if (typedLabel) typedLabel.hidden = name === 'floor' || name === 'ceiling' || name === 'roof' || (xt && !xt.typed?.(name));
    if (pv) pv.dragPan = name === 'select';
    ui.canvas.classList.toggle('is-drawing', name !== 'select');
    if (ui.hint) ui.hint.textContent = xt ? t(xt.hint?.(name) || 'res.hint.' + name) : t(name === 'wall' && S.wall.shape === 'arc' ? 'comforts.hint.arcwall' : 'model.hint.' + name);
    endChain();
    for (const x of exts) x.toolChanged?.(name);
  }
  for (const b of ui.tools) b.addEventListener('click', () => setTool(b.dataset.mtool));
  /** 0.7 BIM-MLWALL: where the walls being drawn end up: the level above, a level further up ('level:<GlobalId>'), or a fixed height. */
  function drawTop(above) {
    const m = /^level:(.+)$/.exec(S.wall.top || '');
    const far = m && topLevelChoices(S.data.levels, S.level).find((l) => l.guid === m[1]);
    if (far) return { topLevel: far.guid };
    return S.wall.top !== 'fixed' && above ? { topLevel: above.guid } : { height: S.wall.top === 'fixed' ? S.wall.height : level()?.height || 2438.4 };
  }
  /** The Wall tool's "up to" list: the level above, each level further up (a wall through several levels), a fixed height. */
  function fillTopOpts() {
    if (!ui.wallTop) return;
    const up = topLevelChoices(S.data.levels, S.level);
    const opts = [['level', t('model.wall.top.level')], ...up.slice(1).map((l) => ['level:' + l.guid, t('model.wall.top.upto', { name: l.name })]), ['fixed', t('model.wall.top.fixed')]];
    if (!opts.some((o) => o[0] === S.wall.top)) S.wall.top = 'level';
    ui.wallTop.replaceChildren(...opts.map(([v, label]) => el('option', { value: v, selected: v === S.wall.top }, label)));
    ui.wallH.hidden = S.wall.top !== 'fixed';
  }
  function fillWallOpts() {
    fillTopOpts();
    if (!ui.wallType) { if (ui.wallH && document.activeElement !== ui.wallH) ui.wallH.value = fmtLen(S.wall.height, S.units); return; }
    const types = wallTypes(famW());
    if (!types.some(x => x.key === S.wall.typeKey)) S.wall.typeKey = types[0].key;
    const signature = types.map(x => x.key + ':' + typeName(x) + ':' + typeThickness(x)).join('|');
    if (ui.wallType.dataset.signature !== signature) {
      ui.wallType.dataset.signature = signature;
      ui.wallType.replaceChildren(...types.map((x) => el('option', { value: x.key, selected: x.key === S.wall.typeKey }, typeName(x) + ' (' + fmtLen(typeThickness(x), S.units) + ')')));
    }
    if (document.activeElement !== ui.wallType) ui.wallType.value = S.wall.typeKey;
    if (ui.wallType.dataset.bound) { if (ui.wallH && document.activeElement !== ui.wallH) ui.wallH.value = fmtLen(S.wall.height, S.units); return; }
    ui.wallType.dataset.bound = '1';
    ui.wallType.addEventListener('change', () => { endChain(); S.wall.typeKey = ui.wallType.value; drawOverlay(); });
    for (const [input, key] of [[ui.wallRef, 'reference'], [ui.wallSide, 'side'], [ui.wallShape, 'shape']]) input?.addEventListener('change', () => {
      if ((key === 'shape' && input.value === 'arc' && S.wall.reference.startsWith('core')) || (key === 'reference' && input.value.startsWith('core') && S.wall.shape === 'arc')) { input.value = S.wall[key]; host.status(t('wall.err.core_arc'), true); return; }
      endChain(); S.wall[key] = input.value; if (ui.hint && S.tool === 'wall') ui.hint.textContent = t(S.wall.shape === 'arc' ? 'comforts.hint.arcwall' : 'model.hint.wall'); drawOverlay(); });
    ui.wallTop.addEventListener('change', () => { S.wall.top = ui.wallTop.value; ui.wallH.hidden = S.wall.top !== 'fixed'; });   // 'level' | 'level:<guid>' | 'fixed'
    ui.wallH.addEventListener('change', () => { const mm = parseLen(ui.wallH.value, S.units); if (mm > 100) { S.wall.height = mm; host.status(t('model.wall.height') + ': ' + fmtLen(mm, S.units)); } else host.status(t('model.err.length'), true); ui.wallH.value = fmtLen(S.wall.height, S.units); });
    ui.wallH.hidden = S.wall.top !== 'fixed';
    ui.wallH.value = fmtLen(S.wall.height, S.units);
  }

  function fillOpeningOpts() {
    for (const kind of ['door', 'window']) {
      const sel = root.querySelector(`[data-model-otype="${kind}"]`), wIn = root.querySelector(`[data-model-ow="${kind}"]`), hIn = root.querySelector(`[data-model-oh="${kind}"]`);
      if (!sel) continue;
      const o = S.open[kind], sill = kind === 'window' ? root.querySelector('[data-model-osill]') : null;
      const flipBtn = root.querySelector(`[data-mopts="${kind}"] [data-model-flip]`);
      const show = () => {
        if (document.activeElement !== wIn) wIn.value = fmtLen(o.width, S.units); if (document.activeElement !== hIn) hIn.value = fmtLen(o.height, S.units); if (sill && document.activeElement !== sill) sill.value = fmtLen(o.sill, S.units);
        // 0.6 BIM-F2: a type with no hand (fixed, hung, picture, double doors) has nothing to flip
        const hk = handKind(openingType(o.typeKey));
        if (flipBtn) { flipBtn.hidden = !hk; flipBtn.title = t(hk === 'hinges' ? 'model.ot.flip.title' : 'model.ot.flip.slide.title'); }
      };
      // 0.6 DC.114: the list is the families of that kind (the starter kinds, then the file's own), and beside it their sizes
      const fams = openingFamilies(famW(), kind), sig = fams.map((f) => f.key + '=' + f.name).join('|');
      if (sel.dataset.sig !== sig) {
        sel.dataset.sig = sig;
        if (!fams.some((f) => f.key === (o.family || o.typeKey))) { o.family = o.typeKey; o.values = {}; }
        sel.replaceChildren(...fams.map((x) => el('option', { value: x.key, selected: x.key === (o.family || o.typeKey) }, x.name)));
      }
      let sizeSel = root.querySelector(`[data-model-osize="${kind}"]`);
      if (!sizeSel) {
        sizeSel = el('select', { className: 'bc-mb-select', 'data-model-osize': kind, 'aria-label': t('fam.size'), title: t('fam.size') });
        sel.closest('label').after(el('label', {}, el('span', { className: 'visually-hidden' }, t('fam.size')), sizeSel));
        sizeSel.addEventListener('change', () => {
          const z = toolSizes(kind).find((x) => x.key === sizeSel.value);
          if (z) { o.values = { ...z.values }; o.width = z.values.Width; o.height = z.values.Height; show(); drawOverlay(); }
        });
      }
      if (!sel.dataset.bound) {
        sel.dataset.bound = '1';
        sel.addEventListener('change', () => {
          const key = sel.value, ty = openingType(key);
          if (ty) { Object.assign(o, { typeKey: ty.key, family: ty.key, values: {}, width: ty.width, height: ty.height }); if (kind === 'window') o.sill = ty.sill; }
          else {
            const fam = familyFor(famW(), key);
            if (!fam) return;
            const first = toolSizes(kind, key)[0], v = first ? first.values : sizeValues(fam, {});
            Object.assign(o, { typeKey: fam.base, family: key, values: { ...v }, width: v.Width, height: v.Height });
          }
          show(); drawOverlay();
        });
        const len = (input, key, min) => input.addEventListener('change', () => { const mm = parseLen(input.value, S.units); if (mm >= min) o[key] = mm; else host.status(t('model.err.length'), true); show(); drawOverlay(); });
        len(wIn, 'width', 100); len(hIn, 'height', 100); if (sill) len(sill, 'sill', 0);
      }
      const sizes = toolSizes(kind), cur = sizes.find((z) => near(z.values.Width, o.width) && near(z.values.Height, o.height) && Object.entries(z.values).every(([k, v]) => k === 'Width' || k === 'Height' || o.values?.[k] === undefined || near(o.values[k], v)));
      sizeSel.replaceChildren(el('option', { value: '' }, t('fam.size.typed')), ...sizes.map((z) => el('option', { value: z.key }, z.name)));
      sizeSel.value = cur ? cur.key : '';
      show();
    }
    for (const b of root.querySelectorAll('[data-model-flip]')) if (!b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => flipHand()); }
  }
  /** A writer on the open model for the family lists (null without one). */
  function famW() { if (!ed()) return null; try { const w = new ModelWriter(ed().W, ed().api, ed().mid); familyWriter(w); return w; } catch (e) { return null; } }   // 0.7: null too while the model is being rebuilt (a pointer move then asked for it)
  function projectWallType(key) { return wallType(key, famW()); }
  const near = (a, b) => Math.abs(a - b) < 0.5;
  /** The sizes the tool offers for its family (the file's sizes of it, then its own default when the file has none). */
  function toolSizes(kind, key = S.open[kind].family || S.open[kind].typeKey) {
    const w = famW();
    const fam = familyFor(w, key);
    if (!fam) return [];
    const fs = w ? readFamilies(w).find((f) => f.key === key && f.source !== 'guess') : null;
    const out = (fs?.sizes || []).map((z) => ({ key: z.guid || 'legacy:' + sizeKey(fam, z.values), name: z.name, values: sizeValues(fam, z.values) }));
    const dv = sizeValues(fam, {});
    if (!out.some((z) => sizeKey(fam, z.values) === sizeKey(fam, dv))) out.push({ key: 'default', name: sizeName(dv) + ' ' + t('fam.size.default'), values: dv });
    return out;
  }
  /** A new size's name in the units the person works in ("3'-0\" × 6'-8\""). */
  const sizeName = (v) => fmtLen(v.Width, S.units) + ' × ' + fmtLen(v.Height, S.units);
  function fillSlabOpts() {
    const fl = S.slab.floor, ce = S.slab.ceiling, rf = S.slab.roof;
    const selectedRoof = () => S.data?.derived?.roofs.find((r) => r.parts.some((p) => selectedKeys().includes(kb() + p)));
    const editSelectedRoof = (changes) => {
      const r = selectedRoof();
      if (!r) return;
      const again = () => { const next = snapshotModel(ed()).derived.roofs.find((x) => x.guid === r.guid); return next?.parts.length ? [kb() + next.parts[0]] : null; };
      commit(changeDerived([r.guid], changes), { label: t('model.roof'), verb: t('model.verb.changed'), reselect: again });
    };
    const bind = (sel, fn) => { const e = root.querySelector(sel); if (e && !e.dataset.bound) { e.dataset.bound = '1'; e.addEventListener('change', () => { fn(e); drawOverlay(); }); } return e; };
    const len = (e, key, obj, min) => { const mm = parseLen(e.value, S.units); if (mm >= min) obj[key] = mm; else host.status(t('model.err.length'), true); e.value = fmtLen(obj[key], S.units); };
    bind('[data-model-flmode="floor"]', (e) => { fl.mode = e.value; });
    bind('[data-model-flmode="ceiling"]', (e) => { ce.mode = e.value; });
    bind('[data-model-flkind]', (e) => { fl.kind = e.value; fl.thickness = FLOOR_KINDS.find((x) => x.key === e.value)?.t || fl.thickness; const th = root.querySelector('[data-model-flthick]'); if (th) th.value = fmtLen(fl.thickness, S.units); });
    const th = bind('[data-model-flthick]', (e) => len(e, 'thickness', fl, 10));
    const ch = bind('[data-model-ceheight]', (e) => len(e, 'height', ce, 500));
    const pi = bind('[data-model-rfpitch]', (e) => { const d = parsePitch(e.value); if (d > 1 && d < 80) { rf.pitch = d; editSelectedRoof({ pitch: d, edges: formatEdges(new Map([...parseEdges(selectedRoof()?.edges)].map(([k, v]) => [k, v.kind === 'pitch' ? { kind: 'pitch', overhang: v.overhang } : v]))) || ' ' }); } else host.status(t('model.err.pitch'), true); e.value = fmtPitch(rf.pitch, S.units); });
    const ov = bind('[data-model-rfover]', (e) => { const mm = parseLen(e.value, S.units); if (mm >= 0) rf.overhang = mm; else host.status(t('model.err.length'), true); e.value = fmtLen(rf.overhang, S.units); });
    bind('[data-model-rfends]', (e) => { rf.ends = e.value; });
    const fa = bind('[data-model-rffascia]', (e) => { rf.fascia = e.checked; editSelectedRoof({ fascia: e.checked ? ROOF_DEFAULTS.fascia : 0, soffit: e.checked }); });
    if (fa) fa.checked = rf.fascia;
    if (ce.height === null && level()) ce.height = Math.max(2000, (levelAbove() ? levelAbove().elevation - level().elevation : level().height) - 304.8);
    if (th && document.activeElement !== th) th.value = fmtLen(fl.thickness, S.units);
    if (ch && document.activeElement !== ch) ch.value = fmtLen(ce.height ?? 2438.4, S.units);
    if (pi && document.activeElement !== pi) pi.value = fmtPitch(rf.pitch, S.units);
    if (ov && document.activeElement !== ov) ov.value = fmtLen(rf.overhang, S.units);
  }
  /** The Roof tool's per-wall settings for its choice (RC.1 presets: hip, gables on the short / long sides — four-sided
   *  outlines only —, shed with its low side nearest `at`), as stored text, or null when it can't. */
  function roofEdges(poly, ends, at, storey = S.level) {
    const m = presetEdges(poly, wallsOn(storey), ends, at);
    return m ? formatEdges(m) : null;
  }
  const roofOpts = (rf) => ({ thickness: ROOF_DEFAULTS.thickness, fascia: rf.fascia ? ROOF_DEFAULTS.fascia : 0, soffit: !!rf.fascia });
  /** What the Floor, Ceiling or Roof tool would cover at p: the room or the building outline round it. */
  function hoverSlab(p, tool) {
    if (!S.loops) return null;
    const mode = tool === 'roof' ? 'building' : S.slab[tool].mode;
    const loop = loopAt(mode === 'building' ? S.loops.outlines : S.loops.rooms, p);
    return loop ? { loop, mode, seed: p } : null;
  }
  function slabPreview(h, tool, o) {
    o.walls.push(h.loop.poly);
    let text = fmtArea(Math.abs(h.loop.area), S.units);
    if (tool === 'roof') {
      const rf = S.slab.roof, g = roofEdges(h.loop.poly, rf.ends, h.seed);
      const plan = g !== null ? roofGeometry(h.loop.poly, edgeKinds(h.loop.poly, wallsHere(), { pitch: rf.pitch, overhang: rf.overhang, edges: g }), roofOpts(rf)) : { error: 'model.err.gable4' };
      if (plan.error) text = t(plan.error);
      else {
        o.symbols.push({ dashed: plan.eave.map((p, i) => [p[0], p[1], plan.eave[(i + 1) % plan.eave.length][0], plan.eave[(i + 1) % plan.eave.length][1]]), thin: plan.ridge });
        text = fmtPitch(rf.pitch, S.units) + '  ' + fmtArea(plan.area, S.units);
      }
    }
    o.hud = { p: labelPoint(h.loop.poly), text };
  }
  function placeSlab(h, tool) {
    const st = level().guid;
    if (tool === 'floor') { const f = S.slab.floor; commit(placeFloor({ storey: st, seed: h.seed, mode: f.mode, kind: f.kind, thickness: f.thickness }), { label: t('model.floor.' + f.kind), verb: t('model.verb.placed') }); }
    else if (tool === 'ceiling') { const c = S.slab.ceiling; commit(placeCeiling({ storey: st, seed: h.seed, mode: c.mode, height: c.height, thickness: c.thickness }), { label: t('model.ceiling'), verb: t('model.verb.placed') }); }
    else {
      const rf = S.slab.roof, g = roofEdges(h.loop.poly, rf.ends, h.seed);
      if (g === null) { host.status(t('model.err.gable4'), true); return; }
      // These walls already carry a roof: change that one to the new settings instead of putting a second roof over it
      // (2026-10-24: a hip roof and a gable roof on the same walls cut through each other — fascia, gables, stray lines).
      const had = S.data?.derived?.roofs.find((r) => r.walls === st && r.seed && inPoly(r.seed[0], r.seed[1], h.loop.poly));
      if (had) { commit(changeDerived(had.guid, { pitch: rf.pitch, overhang: rf.overhang, edges: g, gables: [], ...roofOpts(rf) }), { label: t('model.roof'), verb: t('model.verb.changed') }); return; }
      commit(placeRoof({ storey: st, seed: h.seed, pitch: rf.pitch, overhang: rf.overhang, edges: g, ...roofOpts(rf) }), { label: t('model.roof'), verb: t('model.verb.placed') });
    }
  }
  function flipHand() {
    const o = S.open[S.tool];
    if (!o || !handKind(openingType(o.typeKey))) return;
    o.hand = o.hand === 'b' ? 'a' : 'b';
    if (S.hover) S.hover.hand = o.hand;
    drawOverlay();
  }

  // ---- doors and windows: which wall, where along it ----
  /**
   * The wall under (or beside) plan point p and where an opening `width` wide would go, centred on p: → { wall, offset,
   * face, ok, ends: [x0, x1] (the face's ends along the wall, for the distances), s (along), side } | null.
   * Doors swing to the side the pointer is on; windows sit on the wall's outside.
   */
  function hoverOpening(p, kind, width) {
    const tol = pv.pxToMm(16);
    let best = null;
    for (const w of [...wallsHere(), ...throughHere()]) {   // 0.7 BIM-MLWALL: walls running through this level take doors and windows too
      const L = w.len, u = [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L], n = [-u[1], u[0]];
      const rx = p[0] - w.a[0], ry = p[1] - w.a[1], q = w.bulge ? wallGeom(w).param(p) : null;   // a curved wall: along its arc
      const s = q ? q.s : rx * u[0] + ry * u[1], d = q ? q.off : rx * n[0] + ry * n[1];
      if (s < -tol || s > L + tol) continue;
      const score = Math.max(0, Math.abs(d) - w.t / 2);
      if (score <= tol && (!best || score < best.score)) best = { w, s, d, score };
    }
    if (!best) return null;
    const w = best.w, step = round();
    let offset = best.s - width / 2;
    if (Math.abs(best.s - w.len / 2) <= tol) offset = (w.len - width) / 2;   // the middle of the wall snaps
    else offset = Math.round(offset / step) * step;
    const fit = fitOffset(w, width, offset);
    const face = kind === 'door' ? (best.d >= 0 ? 'left' : 'right') : w.extSide;
    return { wall: w, offset: fit ?? offset, face, ok: fit !== null, ends: faceEnds(w, face), s: best.s };
  }
  /** Where the given face of a wall starts and ends along it (its joined outline), mm from the wall's start. */
  function faceEnds(w, face) {
    const poly = S.outlines.get(w.guid);
    if (!poly) return [0, w.len];
    const u = [(w.b[0] - w.a[0]) / w.len, (w.b[1] - w.a[1]) / w.len], sgn = face === 'right' ? -1 : 1;
    const toL = w.bulge ? wallMap(w).toL : ([x, y]) => [(x - w.a[0]) * u[0] + (y - w.a[1]) * u[1], -(x - w.a[0]) * u[1] + (y - w.a[1]) * u[0]];
    const xs = poly.map(toL).filter(([, y]) => Math.abs(y - sgn * w.t / 2) < 0.5).map(([x]) => x);
    return xs.length >= 2 ? [Math.min(...xs), Math.max(...xs)] : [0, w.len];
  }
  /** The preview: the symbol where it would go and its distances to both ends of that face. */
  function openingPreview(h, spec, o) {
    const w = h.wall, op = { kind: spec.kind, typeKey: spec.typeKey, width: spec.width, height: spec.height, sill: spec.sill || 0, hand: spec.hand, face: h.face, offset: h.offset };
    o.symbols.push(openingSymbol(op, w));
    const u = [(w.b[0] - w.a[0]) / w.len, (w.b[1] - w.a[1]) / w.len], n = [-u[1], u[0]], sgn = h.face === 'right' ? -1 : 1;
    const P = w.bulge ? (x) => wallGeom(w).at(x, sgn * w.t / 2) : (x) => [w.a[0] + u[0] * x + n[0] * sgn * w.t / 2, w.a[1] + u[1] * x + n[1] * sgn * w.t / 2];
    const off = sgn * pv.pxToMm(22);
    const [e0, e1] = h.ends;
    if (h.offset - e0 > 0.5) o.dims.push({ a: P(e0), b: P(h.offset), off, text: fmtLen(h.offset - e0, S.units) });
    if (e1 - h.offset - op.width > 0.5) o.dims.push({ a: P(h.offset + op.width), b: P(e1), off, text: fmtLen(e1 - h.offset - op.width, S.units) });
    o.hud = { p: P(h.offset + op.width / 2), text: h.ok ? (familyFor(famW(), spec.family || spec.typeKey)?.name || openingTypeName(openingType(spec.typeKey))) + '  ' + fmtLen(op.width, S.units) + ' × ' + fmtLen(op.height, S.units) : t('model.err.nofit') };
  }
  function placeHere(h, kind) {
    const o = S.open[kind];
    if (!h.ok) { host.status(t('model.err.nofit'), true); return; }
    const type = openingType(o.typeKey);
    const fam = familyFor(famW(), o.family || o.typeKey);
    commit(placeOpening({ wall: h.wall.guid, typeKey: o.typeKey, family: o.family || o.typeKey, values: o.values || {}, sizeName: sizeName({ Width: o.width, Height: o.height }), offset: h.offset, width: o.width, height: o.height, sill: (kind === 'window' ? o.sill : 0) + (h.wall.storey === S.level ? 0 : riseOver(h.wall.storey)), hand: o.hand, face: h.face }),
      { label: fam?.name || openingTypeName(type), verb: t('model.verb.placed') });
  }
  // dragging a door or window along its wall (or onto another one) with Select
  /** The picked drawn wall, when exactly one is picked (its grips show). */
  function gripWall() {
    const keys = selectedKeys();
    if (keys.length !== 1) return null;
    return wallsHere().find((w) => kb() + w.id === keys[0]) || null;
  }
  // a curved wall's middle grip bends it (through the point it is dragged to); a straight wall's moves it (0.6 round 2)
  const gripsOf = (w) => [{ p: w.a, end: 'a' }, { p: w.b, end: 'b' }, w.bulge ? { p: arcMid(w.a, w.b, w.bulge), end: 'bend' } : { p: [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2], end: 'mid' }];
  function onDown(p, e) {
    if (S.tool !== 'select' || !pv) return false;
    for (const x of exts) if (x.down?.(p, e)) { S.drag = { kind: 'ext', x }; return true; }   // 0.6 round 2: an extension's grips (moving a library item)
    const gw = gripWall();
    if (gw) {
      const tol = pv.pxToMm(9);
      const g = gripsOf(gw).find((x) => Math.hypot(p[0] - x.p[0], p[1] - x.p[1]) <= tol);
      if (g) { S.drag = { kind: 'grip', wall: gw, end: g.end, from: p, key: kb() + gw.id }; return true; }
    }
    const k = pv.hit(e.clientX, e.clientY);
    const o = k !== null ? (S.data?.openings || []).find((x) => kb() + x.id === k) : null;
    if (!o) return false;
    S.drag = { kind: 'opening', op: o, key: k, from: p, moved: false };
    return true;
  }
  /** Where a wall grip dragged to `p` puts the wall: { a, b } (snapped; a middle grip moves the whole wall). */
  function gripMove(d, p, e) {
    const w = d.wall;
    const others = snapWalls(wallsHere().filter((x) => x.guid !== w.guid), []);
    if (d.end === 'bend') {
      const s0 = snapPoint(p, others, { tol: pv.pxToMm(SNAP_PX) });
      const bg = Math.max(-BULGE_MAX, Math.min(BULGE_MAX, bulgeThrough(w.a, s0.p, w.b)));
      return { a: w.a, b: w.b, bulge: Math.abs(bg) < 1e-6 ? 0 : bg, snap: s0 };
    }
    if (d.end === 'mid') {
      const s0 = snapPoint(p, others, { tol: pv.pxToMm(SNAP_PX), from: d.from, ortho: !!e?.shiftKey, step: 90, round: round() });
      const dx = s0.p[0] - d.from[0], dy = s0.p[1] - d.from[1];
      return { a: [w.a[0] + dx, w.a[1] + dy], b: [w.b[0] + dx, w.b[1] + dy], snap: s0 };
    }
    const fixed = d.end === 'a' ? w.b : w.a;
    const s1 = snapPoint(p, others, { tol: pv.pxToMm(SNAP_PX), from: fixed, ortho: !!e?.shiftKey, step: 15, round: round() });
    return d.end === 'a' ? { a: s1.p, b: w.b, snap: s1 } : { a: w.a, b: s1.p, snap: s1 };
  }
  function onUp(p, e, { moved, cancel }) {
    const d = S.drag;
    S.drag = null;
    if (!d) return;
    if (d.kind === 'ext') { d.x.up?.(p, e, { moved, cancel }); drawOverlay(); return; }
    if (d.kind === 'grip') {
      const m = d.at;
      if (cancel || moved <= 4 || !m) { drawOverlay(); return; }
      if (Math.hypot(m.b[0] - m.a[0], m.b[1] - m.a[1]) < 10) { host.status(t('model.err.short'), true); drawOverlay(); return; }
      if (d.end === 'bend') { commit(changeWall(d.wall.guid, { bulge: m.bulge }), { label: t('model.wall'), verb: t('model.verb.changed'), select: [d.key] }); return; }
      commit(changeWall(d.wall.guid, d.end === 'a' ? { a: m.a } : d.end === 'b' ? { b: m.b } : { a: m.a, b: m.b }), { label: t('model.wall'), verb: t('model.verb.moved'), select: [d.key] });
      return;
    }
    if (cancel || moved <= 4 || !S.hover) { S.hover = null; buildScene(); return; }
    const h = S.hover;
    S.hover = null;
    if (!h.ok) { host.status(t('model.err.nofit'), true); buildScene(); return; }
    const ch = { offset: h.offset };
    if (h.wall.guid !== d.op.wallGuid) { ch.wall = h.wall.guid; if (d.op.kind === 'door') ch.face = h.face; }
    host.select([d.key]);
    commit(changeOpening(d.op.guid, ch), { label: openingTypeName(openingType(d.op.typeKey)), verb: t('model.verb.moved'), select: [d.key] });
  }

  // ---- drawing walls ----
  /** Walls to snap to: a curved wall gives its ends and the middle of its arc as points (it has no straight face). */
  function snapWalls(list, points) {
    const pts = points.slice(), walls = [];
    for (const w of list) { if (w.bulge) pts.push(w.a, w.b, arcMid(w.a, w.b, w.bulge)); else walls.push({ a: w.a, b: w.b, t: w.t }); }
    return { walls, points: pts };
  }
  function snapCtx() {
    const ctx = snapWalls([...wallsHere(), ...S.queuedSegs()], S.chain ? S.chain.points : []);
    for (const x of exts) x.snapCtx?.(ctx);   // 0.6 DF.16: grid lines and their crossings (model-grids-ui.js)
    return ctx;
  }
  S.queuedSegs = () => S.queue.flatMap(([, meta]) => meta.preview || []);
  function snapAt(p, e) {
    const from = S.chain?.points[S.chain.points.length - 1] || null;
    return snapPoint(p, snapCtx(), { tol: pv.pxToMm(SNAP_PX), from, ortho: !!e?.shiftKey, step: 15, round: from ? round() : 0, align: S.tool === 'wall' });
  }
  function onMove(p, e) {
    host.coords?.()?.plan(p, level(), S.planM);   // 0.6 DF.15: where the pointer is
    if (S.drag?.kind === 'grip') { S.drag.at = gripMove(S.drag, p, e); drawOverlay(); return; }
    if (S.drag?.kind === 'ext') { S.drag.x.drag?.(p, e); drawOverlay(); return; }
    if (S.drag) {
      const o = S.drag.op;
      S.hover = hoverOpening(p, o.kind, o.width);
      if (S.hover && S.hover.wall.guid === o.wallGuid) S.hover.face = o.face;
      if (!S.drag.moved) { S.drag.moved = true; buildScene(); }   // the symbol leaves its place while it is dragged
      drawOverlay();
      return;
    }
    if (extTool(S.tool)) { extTool(S.tool).move?.(p, e); drawOverlay(); return; }
    if (S.tool === 'door' || S.tool === 'window') { S.last = { raw: p }; S.hover = hoverOpening(p, S.tool, S.open[S.tool].width); drawOverlay(); return; }
    if (S.tool === 'floor' || S.tool === 'ceiling' || S.tool === 'roof') { S.hover = hoverSlab(p, S.tool); drawOverlay(); return; }
    if (S.tool === 'select') { const k = pv.hit(e.clientX ?? 0, e.clientY ?? 0); if (k !== pv.hover) { pv.hover = k; pv.render(); } return; }
    S.last = { raw: p, snap: snapAt(p, e), shift: !!e?.shiftKey };
    drawOverlay();
  }
  function onClick(p, e) {
    if (!canDraw()) return;
    if (S.tool === 'select') {
      if (exts.some((x) => x.selectClick?.(p, e))) return;   // 0.6 DC.117 (c): a callout's tag opens it (views-ui.js)
      const k = e && e.clientX !== undefined ? pv.hit(e.clientX, e.clientY) : null;
      const add = e && (e.ctrlKey || e.metaKey || e.shiftKey);
      if (k === null) { if (!add) host.select([]); return; }
      const cur = new Set(selectedKeys());
      if (add) { if (cur.has(k)) cur.delete(k); else cur.add(k); host.select([...cur]); } else host.select([k]);
      return;
    }
    if (extTool(S.tool)) { extTool(S.tool).click?.(p, e); drawOverlay(); return; }
    if (S.tool === 'floor' || S.tool === 'ceiling' || S.tool === 'roof') {
      const h = hoverSlab(p, S.tool);
      if (!h) { host.status(t(S.tool === 'roof' || S.slab[S.tool]?.mode === 'building' ? 'model.err.nobuilding2' : 'model.err.noroom'), true); return; }
      placeSlab(h, S.tool);
      return;
    }
    if (S.tool === 'door' || S.tool === 'window') {
      const h = hoverOpening(p, S.tool, S.open[S.tool].width);
      if (!h) { host.status(t('model.hint.' + S.tool)); return; }
      placeHere(h, S.tool);
      return;
    }
    const s = snapAt(p, e);
    if (S.tool === 'wall') wallPoint(s.p);
  }
  function onDbl(p, e) { if (S.tool === 'wall') endChain(); else extTool(S.tool)?.dbl?.(p, e); }
  /** The location line drawn: the centre line, the outside face or the inside face (Wall › Reference). */
  const justOf = (ref) => (ref === 'outside' ? 'exterior' : ref === 'inside' ? 'interior' : 'center');
  /**
   * A curved wall (0.6 round 2, Wall › Shape: Arc): its start, its end, then a point on the arc (or a typed arc height). Drawn
   * on a face (Reference), its centre line is that arc moved over by half its thickness (the same turn). The chain goes on
   * from its end.
   */
  function arcPoint(q, bulgeTyped = null) {
    const pts = S.chain.points, a = pts[pts.length - 1];
    if (!S.arcEnd) { if (Math.hypot(q[0] - a[0], q[1] - a[1]) < 10) return; S.arcEnd = q; drawOverlay(); return; }
    const b = S.arcEnd;
    let bg = bulgeTyped ?? bulgeThrough(a, q, b);
    if (!(Math.abs(bg) <= BULGE_MAX)) { host.status(t('comforts.err.arc'), true); return; }
    if (Math.abs(bg) < 1e-6) bg = 0;
    const type = projectWallType(S.wall.typeKey), th = typeThickness(type);
    const above = levelAbove();
    const top = drawTop(above);
    const side = S.wall.side;   // 0.6.1 FIX-061-WALL-SIDE: the Outside select counts on the centre line too (it was always left)
    const seg = arcCentre(a, b, bg, th);
    S.arcEnd = null;
    const closing = closesChain(pts, b, 1);
    pts.push(b);
    commit(drawWalls({ storey: level().guid, segs: [{ a: seg.a, b: seg.b, bulge: bg, justification: justOf(S.wall.reference) }], typeKey: S.wall.typeKey, extSide: side, ...top }),
      { label: typeName(type), verb: t('model.verb.drew'), preview: [{ ...seg, t: th, bulge: bg }], chain: S.chain });
    if (closing) { const n = S.chain.guids.length + 1; endChain(); host.status(t('model.room.closed', { n })); }
    drawOverlay();
  }
  /** The centre line of an arc drawn on a face: the same turn, its ends moved square to it by half the thickness. */
  function arcCentre(a, b, bg, th) {
    if (S.wall.reference === 'center' || !bg) return { a, b };
    const off = th / 2 * (S.wall.reference === 'outside' ? -1 : 1) * (S.wall.side === 'left' ? 1 : -1), g = wallGeom({ a, b, bulge: bg });
    return { a: g.at(0, off), b: g.at(g.L, off) };
  }
  function wallPoint(q) {
    if (!S.chain) { S.chain = { points: [q], guids: [] }; drawOverlay(); return; }
    if (S.wall.shape === 'arc') { arcPoint(q); return; }
    const pts = S.chain.points, a = pts[pts.length - 1];
    if (Math.hypot(q[0] - a[0], q[1] - a[1]) < 1) return;
    const closing = closesChain(pts, q, 1);
    const b = closing ? pts[0] : q;
    const type = projectWallType(S.wall.typeKey);
    // Live straight placement uses all six existing location lines and the chosen exterior orientation.
    // Legacy three-reference and curved behavior remains unchanged in the established layout.
    if (root.classList.contains('ws-active') || S.wall.reference.startsWith('core')) {
      let spec;
      const side = S.wall.side;
      try { spec = placementReference(S.wall.reference, type, side); } catch (e) { host.status(e.message, true); return; }
      const above = levelAbove();
      if (S.wall.top === 'level' && !above) { host.status(t('model.err.notop'), true); return; }
      const top = S.wall.top === 'level' ? { topLevel: above.guid } : { height: S.wall.height };
      const segs = placementPath([...pts, b], type, S.wall.reference, side);
      pts.push(b);
      commit(drawWallPath({ storey: level().guid, points: pts.slice(), guids: S.chain.guids, typeKey: S.wall.typeKey,
        thickness: spec.thickness, reference: S.wall.reference, extSide: side, axisOffset: spec.axisOffset, justification: spec.justification, ...top }),
        { label: typeName(type), verb: t('model.verb.drew'), preview: [segs.at(-1)], chain: S.chain });
      if (closing) endChain();
      drawOverlay(); return;
    }
    const above = levelAbove();
    const top = drawTop(above);
    const seg = { a, b, t: typeThickness(type) };
    // closing a room: every wall of the chain gets its outside to the outside of the loop
    // the Outside select (left / right of the way you draw) — on the centre line too (0.6.1 FIX-061-WALL-SIDE: it was always
    // left there); closing a room drawn on the centre line still puts every wall's outside to the outside of the loop
    const side = S.wall.reference === 'center' && closing ? loopSide(pts) : S.wall.side;
    const flips = closing ? S.chain.guids.slice() : [];
    pts.push(b);
    const run = S.wall.reference === 'center'
      ? drawWalls({ storey: level().guid, segs: [{ a, b }], typeKey: S.wall.typeKey, extSide: side, ...top })
      : drawWallPath({ storey: level().guid, points: pts.slice(), guids: S.chain.guids, typeKey: S.wall.typeKey, thickness: seg.t, reference: S.wall.reference, extSide: side, justification: justOf(S.wall.reference), ...top });   // 0.6 round 2: the face drawn on stays the wall's location line
    const op = closing && flips.length && S.wall.reference === 'center' ? chainClose(run, flips, side) : run;
    commit(op, { label: typeName(type), verb: t('model.verb.drew'), preview: S.wall.reference === 'center' ? [seg] : wallPath([a, b], seg.t, S.wall.reference, side), chain: S.chain });
    if (closing) { endChain(); host.status(t('model.room.closed', { n: flips.length + 1 })); }
    drawOverlay();
  }
  /** The closing wall and the outside of every wall in the chain, as one change. */
  function chainClose(run, guids, side) {
    return (editor) => {
      const r = run(editor);
      const r2 = changeWalls(guids, { extSide: side })(editor);
      return { ...r, journal: mergeJournals(r.journal, r2.journal) };
    };
  }
  function endChain() { S.arcEnd = null; if (S.chain) { S.chain = null; drawOverlay(); } }

  function applyTyped(text) {
    if (S.tool === 'select') return false;
    if (extTool(S.tool)) return !!extTool(S.tool).typed?.(S.tool, text);
    if (S.tool === 'door' || S.tool === 'window') {
      // a distance from the nearer end of the wall face the preview shows
      const d = parseLen(text, S.units), h = S.hover, o = S.open[S.tool];
      if (!h || !Number.isFinite(d) || d < 0) { host.status(t(h ? 'model.err.length' : 'model.typed.wall'), true); return false; }
      const [e0, e1] = h.ends, nearStart = h.s < (e0 + e1) / 2;
      const offset = nearStart ? e0 + d : e1 - d - o.width, fit = fitOffset(h.wall, o.width, offset);
      if (fit === null || Math.abs(fit - offset) > 0.5) { host.status(t('model.err.nofit'), true); return false; }
      placeHere({ ...h, offset: fit, ok: true }, S.tool);
      return true;
    }
    // 0.6 round 2: a curved wall's arc height (to the side the pointer is on), once its end is set
    if (S.tool === 'wall' && S.wall.shape === 'arc' && S.chain && S.arcEnd) {
      const h = parseLen(text, S.units), a = S.chain.points[S.chain.points.length - 1], b = S.arcEnd;
      if (!Number.isFinite(h)) { host.status(t('model.err.length'), true); return false; }
      const p = S.last?.snap?.p, side = p ? Math.sign((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) || 1 : 1;
      arcPoint(b, bulgeFromHeight(a, b, side * Math.abs(h)));
      return true;
    }
    const v = parseTyped(text, S.units);
    if (!v) { host.status(t('model.err.typed'), true); return false; }
    const pts = S.chain?.points;
    const last = pts ? pts[pts.length - 1] : null;
    let q = null;
    if (v.kind === 'abs') q = [v.x, v.y];
    else if (!last) { host.status(t('model.typed.first'), true); return false; }
    else if (v.kind === 'rel') q = [last[0] + v.dx, last[1] + v.dy];
    else if (v.kind === 'polar') q = [last[0] + v.len * Math.cos(v.angle * Math.PI / 180), last[1] + v.len * Math.sin(v.angle * Math.PI / 180)];
    else {
      // a length along the direction the pointer shows (its snapped direction), else along X
      const to = S.last?.snap?.p || [last[0] + 1, last[1]];
      const d = Math.hypot(to[0] - last[0], to[1] - last[1]) || 1;
      q = [last[0] + (to[0] - last[0]) / d * v.len, last[1] + (to[1] - last[1]) / d * v.len];
    }
    if (S.tool === 'wall') wallPoint(q);
    return true;
  }
  ui.typed.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); if (applyTyped(ui.typed.value)) ui.typed.value = ''; }
    else if (e.key === 'Escape') { e.preventDefault(); ui.typed.value = ''; ui.typed.blur(); endChain(); }
  });

  function drawOverlay() {
    if (!pv) return;
    const o = { walls: [], lines: [], dashed: [], points: [], dims: [], symbols: [] };
    for (const q of S.queuedSegs()) o.walls.push(...[outlineOf(q)]);
    const lst = S.last;
    if (S.tool === 'wall' && lst?.snap) { o.snap = lst.snap; o.dashed.push(...(lst.snap.guides || [])); }
    if (S.tool === 'wall' && S.chain && S.wall.shape === 'arc') {
      // 0.6 round 2: a curved wall — the chord to its end, then the arc through the pointer
      const pts = S.chain.points, a = pts[pts.length - 1], p = lst?.snap?.p;
      for (const q of pts) o.points.push(q);
      if (S.arcEnd) o.points.push(S.arcEnd);
      if (p && S.arcEnd) {
        const bg = Math.max(-BULGE_MAX, Math.min(BULGE_MAX, bulgeThrough(a, p, S.arcEnd))), th = typeThickness(projectWallType(S.wall.typeKey));
        const c = arcCentre(a, S.arcEnd, bg, th);
        o.walls.push(previewOutline({ a: c.a, b: c.b, t: th, bulge: Math.abs(bg) < 1e-6 ? 0 : bg }));
        const g = wallGeom({ a, b: S.arcEnd, bulge: bg });
        o.hud = { p, text: fmtLen(g.L, S.units) + (g.arc ? '  R ' + fmtLen(g.arc.R, S.units) : '') + '\n' + t('comforts.hud.archeight', { h: fmtLen(Math.abs(arcHeight(a, S.arcEnd, bg)), S.units) }) };
      } else if (p) {
        o.dashed.push([a[0], a[1], p[0], p[1]]);
        o.hud = { p, text: fmtLen(Math.hypot(p[0] - a[0], p[1] - a[1]), S.units) + '\n' + t('comforts.hud.arcend') };
      }
    } else if (S.tool === 'wall' && S.chain) {
      const pts = S.chain.points, a = pts[pts.length - 1];
      for (const q of pts) o.points.push(q);
      if (lst) {
        const b = lst.snap.p, L = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (L >= 1) {
          const type = projectWallType(S.wall.typeKey), seg = { a, b, t: typeThickness(type) };
          const path = root.classList.contains('ws-active') || S.wall.reference.startsWith('core') ? placementPath([...pts, b], type, S.wall.reference, S.wall.side) : wallPath([...pts, b], seg.t, S.wall.reference, S.wall.side);
          o.walls.push(previewOutline(path.at(-1) || seg));
          const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
          o.hud = { p: b, text: fmtLen(L, S.units) + '  ' + fmtAngle(ang) + (closesChain(pts, b, 1) ? '\n' + t('model.hud.close') : '') };
          o.dims.push({ a, b, off: seg.t / 2 + pv.pxToMm(18), text: fmtLen(L, S.units) });
        }
      }
    } else if (S.tool === 'wall' && lst) o.hud = { p: lst.snap.p, text: t('model.hud.start') };
    if (S.hover && (S.tool === 'door' || S.tool === 'window')) openingPreview(S.hover, { kind: S.tool, ...S.open[S.tool] }, o);
    if (S.hover && (S.tool === 'floor' || S.tool === 'ceiling' || S.tool === 'roof')) slabPreview(S.hover, S.tool, o);
    if (S.hover && S.drag?.kind === 'opening') openingPreview(S.hover, { ...S.drag.op }, o);
    // the picked wall's grips; while one is dragged, the wall where it would go (joined to the others) and its length
    const gw = S.tool === 'select' ? gripWall() : null;
    if (gw) o.grips = gripsOf(gw).map((g) => ({ p: g.p, kind: g.end === 'mid' || g.end === 'bend' ? 'mid' : 'end' }));
    // 0.6 round 2: a wall drawn on a face shows that face (its location line) dashed when picked
    if (gw && gw.justification && gw.justification !== 'center') { const ll = locationLine(gw), pts = flatPoly([[...ll.a, ll.bulge], ll.b]); for (let i = 0; i + 1 < pts.length; i++) o.dashed.push([...pts[i], ...pts[i + 1]]); if (ll.bulge) o.dashed.push([...pts[pts.length - 1], ...ll.b]); }
    if (S.drag?.kind === 'grip' && S.drag.at) {
      const m = S.drag.at, w = S.drag.wall;
      const walls = wallsHere().filter((x) => x.guid !== w.guid).map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge }));
      walls.push({ key: '*', a: m.a, b: m.b, t: w.t, bulge: m.bulge ?? w.bulge });
      const poly = wallOutlines(walls).get('*');
      if (poly) o.walls.push(poly);
      const L = arcLength(m.a, m.b, m.bulge ?? w.bulge);
      o.dims.push({ a: m.a, b: m.b, off: w.t / 2 + pv.pxToMm(18), text: fmtLen(L, S.units) });
      if (m.snap && m.snap.kind !== 'free') o.snap = { p: S.drag.end === 'mid' || S.drag.end === 'bend' ? m.snap.p : (S.drag.end === 'a' ? m.a : m.b), kind: m.snap.kind };
    }
    for (const x of exts) x.overlay?.(o);
    if (S.hiEdge) o.lines.push(S.hiEdge);   // a roof's wall row hovered in Properties (RC.1)
    pv.setOverlay(o);
  }
  /** The preview wall joined to the walls already there (so a corner looks as it will). */
  function previewOutline(seg) {
    const walls = wallsHere().map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge }));
    S.queuedSegs().forEach((q, i) => walls.push({ key: 'q' + i, a: q.a, b: q.b, t: q.t, bulge: q.bulge }));
    walls.push({ key: '*', ...seg });
    return wallOutlines(walls).get('*') || outlineOf(seg);
  }
  function outlineOf(seg) {
    if (seg.bulge) return wallOutlines([{ key: '*', ...seg }]).get('*') || [];
    const L = Math.hypot(seg.b[0] - seg.a[0], seg.b[1] - seg.a[1]) || 1, n = [-(seg.b[1] - seg.a[1]) / L * seg.t / 2, (seg.b[0] - seg.a[0]) / L * seg.t / 2];
    return [[seg.a[0] - n[0], seg.a[1] - n[1]], [seg.b[0] - n[0], seg.b[1] - n[1]], [seg.b[0] + n[0], seg.b[1] + n[1]], [seg.a[0] + n[0], seg.a[1] + n[1]]];
  }

  // ---- changes: applied now, or queued while the model reloads ----
  function commit(run, meta = {}) {
    if (S.busy || (S.reloading && Date.now() - S.reloadT < 30000)) { S.queue.push([run, meta]); drawOverlay(); return; }
    apply(run, meta);
  }
  function apply(run, meta) {
    let r;
    try { r = ed().modelChange(run, { label: meta.label || '', verb: meta.verb || '', ...(meta.coalesce ? { coalesce: { key: meta.coalesce, merge: mergeJournals } } : {}) }); }
    catch (e) {
      refused(e, meta);
      if (meta.chain && S.chain === meta.chain) S.chain.points.pop();
      refresh(); return;
    }
    if (meta.chain && r.made) for (const g of r.made.keys()) meta.chain.guids.push(g);
    S.keepSel = meta.select || selectedKeys();   // the reload clears the pick: put it back afterwards
    S.reselect = meta.reselect || null;           // …or ask again after it (a roof's parts get new ids: pick it by its GlobalId)
    S.data = snapshotModel(ed());
    S.loops = loopsOf(ed(), S.level);
    for (const x of exts) x.refresh?.();
    PR.src?.invalidate();   // 0.7.1 → 0.8: the regulations add-on's problems, re-checked a moment later
    renderLevels(); fillLevelSelect();
    buildScene();
    host.afterEdit();
    scheduleRebuild(r.id != null ? kb() + r.id : null);
  }
  async function scheduleRebuild(selectKey) {
    if (S.busy) { S.again = true; return; }
    S.busy = true;
    try { await host.rebuild(null); } catch (e) { console.error(e); host.status(t('model.err.failed', { why: e.message || e }), true); } finally { S.busy = false; S.reloading = false; for (const x of exts) x.settled?.(); }
    // what was clicked meanwhile, then once more if it changed anything
    const q = S.queue.splice(0);
    for (const [run, meta] of q) apply0(run, meta);
    if (q.length || S.again) { S.again = false; scheduleRebuild(null); }
  }
  function apply0(run, meta) {
    try {
      const r = ed().modelChange(run, { label: meta.label || '', verb: meta.verb || '', ...(meta.coalesce ? { coalesce: { key: meta.coalesce, merge: mergeJournals } } : {}) });
      if (meta.chain && r.made) for (const g of r.made.keys()) meta.chain.guids.push(g);
    } catch (e) { refused(e, meta); }
    host.afterEdit();
  }
  /** A change that did not apply: a refusal (a key of ours) reads as its own words, anything else is a fault (logged). A dialog that
   *  asked (meta.onError, 0.6 DC.114) shows it itself, also when the change waited for a reload. */
  function refused(e, meta) {
    const k = e.key || e.message;
    const ours = !!(k && /^(model|fam|comforts|pic|tji|res\.err)\./.test(k));
    if (!ours) console.error(e);
    const why = ours ? t(k, e.fill || {}) : t('model.err.failed', { why: e.message || e });
    if (meta.onError) meta.onError(e, why); else host.status(why, true);
  }

  // ---- keys (capture: the plan's own keys win while Draw is on) ----
  document.addEventListener('keydown', (e) => {
    if (!S.on || root.classList.contains('ws-active') || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const tgt = e.target;
    if (tgt.closest?.('dialog, [data-help-panel], [data-app-settings]') || document.querySelector('dialog[open]')) return;   // i18n-ignore: CSS selectors
    if (tgt === ui.typed) return;
    const inField = tgt.closest?.('input, textarea, select, [contenteditable="true"]');
    if (inField) return;
    const k = e.key;
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
    if (low === 'f' && !e.shiftKey && overPlan) { e.preventDefault(); e.stopImmediatePropagation(); fitPlan(); return; }
    if (k === 'Delete' || k === 'Backspace') {
      const p = picked();
      if (p.count && p.count === selectedKeys().length && !passesEdit(p)) { e.preventDefault(); e.stopImmediatePropagation(); deletePicked(p); }
    }
  }, true);
  let overPlan = false;
  ui.canvas.addEventListener('pointerenter', () => { overPlan = true; });
  ui.canvas.addEventListener('pointerleave', () => { overPlan = false; });
  function pickedWalls() {
    const k = kb(), byKey = new Map((S.data?.walls || []).map((w) => [k + w.id, w.guid]));
    return selectedKeys().map((x) => byKey.get(x)).filter(Boolean);
  }
  /** Delete what is picked of the tools' own elements in one change. Rooms come from the walls: they can't be deleted. */
  function deletePicked(p) {
    if (p.derived.some((d) => d.kind === 'room')) { host.status(t('model.room.nodelete'), true); return; }
    host.select([]);
    const base = removeElements({ walls: p.walls, openings: p.openings, derived: p.derived.map((d) => d.guid) });
    const extOps = [...new Set(p.ext.map((q) => q.x))].map((x) => x.remove(p.ext.filter((q) => q.x === x).map((q) => q.it)));
    const run = !extOps.length ? base : (editor) => { let r = (p.walls.length || p.openings.length || p.derived.length) ? base(editor) : null; for (const o of extOps) { const r2 = o(editor); r = r ? { ...r2, journal: mergeJournals(r.journal, r2.journal) } : r2; } return r; };
    commit(run, { label: p.count === 1 ? p.label : t('model.elements', { n: p.count }), verb: t('model.verb.deleted') });
  }
  /** Only placed library items picked (comforts-ui.js `passEdit`): bimcraft.js copies, cuts, duplicates and deletes them, as
   *  before 0.6 round 2 (its delete says so in the status line and undoes as one step). */
  const passesEdit = (p) => p.ext.length === p.count && p.ext.every((q) => q.it.passEdit);
  /** The tools' own elements among the picked: walls, doors and windows (GlobalIds), how many, a label for one. */
  function picked() {
    const k = kb(), walls = [], openings = [], derived = [];
    const keys = selectedKeys();
    if (!keys.length || !ed()) return { walls, openings, derived: [], ext: [], count: 0, label: '' };
    // cheap first: none of the picked is a wall, door or window → nothing of ours (no reading of the model)
    const cls = host.model()?.classOf;
    if (cls && !keys.some((x) => /^Ifc(Wall|WallStandardCase|Door|Window|Space|Slab|Covering|Roof)$/.test(cls.get(x - k) || '') || exts.some((e) => e.classes?.test(cls.get(x - k) || '')) || !cls.has(x - k))) return { walls, openings, derived: [], ext: [], count: 0, label: '' };
    const data = S.on && S.data ? S.data : snapshotModel(ed());   // with Draw off the plan's data may be old
    let label = '';
    const ext = [];
    for (const key of keys) {
      const xi = exts.map((x) => ({ x, it: x.pick?.(key) })).find((q) => q.it);
      if (xi) { if (!ext.some((q) => q.it.guid === xi.it.guid)) ext.push(xi); label = xi.it.label; continue; }
      const w = (data.walls || []).find((x) => k + x.id === key);
      if (w) { walls.push(w.guid); label = t('model.wall'); continue; }
      const o = (data.openings || []).find((x) => k + x.id === key);
      if (o) { openings.push(o.guid); label = o.name || openingTypeName(openingType(o.typeKey) || { key: o.typeKey }); continue; }
      const D = data.derived || {};
      const sp = (D.spaces || []).find((x) => k + x.id === key);
      if (sp) { derived.push({ kind: 'room', ...sp }); label = sp.name || sp.number; continue; }
      const fl = (D.floors || []).find((x) => k + x.id === key);
      if (fl) { derived.push({ kind: 'floor', ...fl }); label = t('model.floor.' + fl.kind); continue; }
      const ce = (D.ceilings || []).find((x) => k + x.id === key);
      if (ce) { derived.push({ kind: 'ceiling', ...ce }); label = t('model.ceiling'); continue; }
      const rf = (D.roofs || []).find((x) => k + x.id === key || x.parts.some((p) => k + p === key));
      if (rf) { if (!derived.some((d) => d.guid === rf.guid)) derived.push({ kind: 'roof', ...rf }); label = t('model.roof'); }
    }
    return { walls, openings, derived, ext, count: walls.length + openings.length + derived.length + ext.length, label, picks: keys.length };
  }

  // ---- Properties: change a drawn wall, door or window (BM.5) ----
  /**
   * The block Properties shows above the IFC data when the pick is the tools' own: one wall, one door / window, or several
   * of one kind (then only what they share: type, height, size). Every field is one change on Enter or leaving it.
   */
  function propsBlock() {
    const keys = selectedKeys();
    const p = picked();
    if (!p.count || p.count !== keys.length) return null;
    const data = S.on && S.data ? S.data : snapshotModel(ed());
    const k = kb();
    const walls = data.walls.filter((w) => p.walls.includes(w.guid)), ops = data.openings.filter((o) => p.openings.includes(o.guid));
    const levels = data.levels;
    const L = (mm) => fmtLen(mm, S.units);
    const rows = [];
    const field = (label, input, extra) => rows.push(el('dt', {}, label), el('dd', {}, input, extra || null));
    const lenInput = (value, attr, onLen, { min = 1, allowZero = false, any = false } = {}) => {
      const i = el('input', { type: 'text', className: 'bc-input bc-num', value: Number.isFinite(value) ? L(value) : '', [attr]: '' });
      const go = () => {
        if (i.value === i.defaultValue) return;
        const mm = parseLen(i.value, S.units);
        if (!Number.isFinite(mm) || (!any && (allowZero ? mm < 0 : mm < min))) { host.status(t('model.err.length'), true); i.value = i.defaultValue; return; }
        onLen(mm);
      };
      i.addEventListener('change', go);
      i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); i.blur(); } if (e.key === 'Escape') { i.value = i.defaultValue; i.blur(); } });
      return i;
    };
    const select = (options, value, attr, onPick) => {
      const s2 = el('select', { className: 'bc-mb-select', [attr]: '' }, ...options.map(([v, label]) => el('option', { value: v, selected: v === value }, label)));
      s2.addEventListener('change', () => onPick(s2.value));
      return s2;
    };
    const button = (label, attr, onClick) => { const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', [attr]: '' }, label); b.addEventListener('click', onClick); return b; };
    const one = (label) => ({ label, verb: t('model.verb.changed'), select: keys });
    let title = '';
    if (p.ext.length) {
      // another module's elements (all of one module): it fills the rows
      const xs = new Set(p.ext.map((q) => q.x));
      if (xs.size !== 1 || p.ext.length !== p.count) return null;
      const r = p.ext[0].x.props?.(p.ext.map((q) => q.it), { rows, field, lenInput, select, button, one, keys, el });
      if (!r) return null;
      title = r.title;
    } else if (walls.length && !ops.length) {
      const w0 = walls[0], many = walls.length > 1, guids = walls.map((w) => w.guid);
      title = many ? t('model.walls', { n: walls.length }) : t('model.wall');
      const sameType = walls.every((w) => w.typeKey === w0.typeKey);
      const typeOpts = wallTypes(famW()).map((x) => [x.key, typeName(x)]);
      if (sameType && !typeOpts.some((x) => x[0] === w0.typeKey) && projectWallType(w0.typeKey)) typeOpts.unshift([w0.typeKey, typeName(projectWallType(w0.typeKey))]);
      if (!sameType) typeOpts.unshift(['', t('model.prop.changetype')]);
      field(t('model.wall.type'), select(typeOpts, sameType ? w0.typeKey : '', 'data-mp-type', (v) => { if (v) commit(many ? changeWalls(guids, { typeKey: v }) : changeWall(w0.guid, { typeKey: v }), one(title)); }));
      if (sameType) field('', button(t('assembly.open'), 'data-mp-assembly', () => api.ask('openAssembly', w0.typeKey, guids)));
      const above = (w) => { const i = levels.findIndex((l) => l.id === w.storey); return i >= 0 ? levels[i + 1] || null : null; };
      if (!many) {
        field(t('model.prop.thickness'), w0.assembly?.custom ? el('span', {}, fmtLen(w0.t, S.units)) : lenInput(w0.t, 'data-mp-thick', (mm) => { const key = typeAt(w0.typeKey, mm); if (!key) { host.status(t('model.err.thin'), true); return; } commit(changeWall(w0.guid, { typeKey: key }), one(title)); }, { min: 10 }));
        field(t('model.prop.length'), lenInput(w0.len, 'data-mp-len', (mm) => { const u = [(w0.b[0] - w0.a[0]) / w0.len, (w0.b[1] - w0.a[1]) / w0.len]; commit(changeWall(w0.guid, { b: [w0.a[0] + u[0] * mm, w0.a[1] + u[1] * mm] }), one(title)); }, { min: 10 }));
      }
      // 0.6 round 2: the location line (what stays put when the wall gets thicker or its outside flips)
      const sameJ = walls.every((w) => (w.justification || 'center') === (w0.justification || 'center'));
      const jOpts = JUSTIFICATIONS.map((j) => [j, t('comforts.just.' + j.toLowerCase())]);
      if (!sameJ) jOpts.unshift(['', t('model.prop.mixed')]);
      field(t('comforts.prop.just'), select(jOpts, sameJ ? (w0.justification || 'center') : '', 'data-mp-just', (v) => { if (v) commit(many ? changeWalls(guids, { justification: v }) : changeWall(w0.guid, { justification: v }), one(title)); }));
      const ab = !many ? levels.find((l) => l.guid === w0.topLevel) || null : null, toLevel = walls.every((w) => w.topLevel), fixed = walls.every((w) => !w.topLevel);
      // 0.7 BIM-MLWALL: one wall can go up to any level above it (the nearest is "the level above")
      const choices = !many ? topLevelChoices(levels, w0.storey) : [];
      const topLv = !many && toLevel ? levels.find((l) => l.guid === w0.topLevel) || null : null;
      const topOpts = !many ? [...choices.map((l, i) => ['level:' + l.guid, i === 0 ? t('model.wall.top.level') : t('model.wall.top.upto', { name: l.name })]), ['fixed', t('model.wall.top.fixed')]]
        : [['level', t('model.wall.top.level')], ['fixed', t('model.wall.top.fixed')]];
      if (many ? !toLevel && !fixed : toLevel && !topLv) topOpts.unshift(['', t('model.prop.mixed')]);
      const topVal = many ? (toLevel ? 'level' : fixed ? 'fixed' : '') : topLv ? 'level:' + topLv.guid : toLevel ? '' : 'fixed';
      field(t('model.wall.top'), select(topOpts, topVal, 'data-mp-top', (v) => {
        if (v.startsWith('level:')) commit(changeWall(w0.guid, { topLevel: v.slice(6), topOffset: 0 }), one(title));
        else if (v === 'level') {
          const ch = walls.map((w) => ({ w, a: above(w) }));
          if (ch.some((x) => !x.a)) { host.status(t('model.err.notop'), true); renderProps(); return; }
          commit((editor) => { let r = null; for (const x of ch) r = mergeR(r, changeWall(x.w.guid, { topLevel: x.a.guid, topOffset: 0 })(editor)); return r; }, one(title));
        } else if (v === 'fixed') commit(many ? changeWalls(guids, { height: w0.height }) : changeWall(w0.guid, { height: w0.height }), one(title));
      }));
      field(t('model.wall.height'), lenInput(walls.every((w) => Math.abs(w.height - w0.height) < 0.5) ? w0.height : NaN, 'data-mp-height', (mm) => {
        if (toLevel && !many && ab) commit(changeWall(w0.guid, { topOffset: w0.topOffset + (mm - w0.height) }), one(title));
        else commit(many ? changeWalls(guids, { height: mm }) : changeWall(w0.guid, { height: mm }), one(title));
      }, { min: 100 }), toLevel && ab ? el('span', { className: 'bc-sub' }, ' ' + t('model.prop.tolevel', { name: ab.name })) : null);
      if (!many) {
        field(t('model.prop.base'), lenInput(w0.baseOffset, 'data-mp-base', (mm) => commit(changeWall(w0.guid, { baseOffset: mm }), one(title)), { allowZero: true }));
        field(t('model.prop.outside'), el('span', {}, el('span', {}, t(w0.extSide === 'right' ? 'model.prop.right' : 'model.prop.left') + ' '),
          button(t('model.ot.flip'), 'data-mp-flipside', () => commit(changeWall(w0.guid, { extSide: w0.extSide === 'right' ? 'left' : 'right' }), one(title)))));
        // 0.6 round 2 (bim-comforts_PART_2): how far the middle bows off a straight line (0 = straight; − = to the right)
        field(t('comforts.prop.archeight'), lenInput(arcHeight(w0.a, w0.b, w0.bulge), 'data-mp-arc', (mm) => {
          const bg = bulgeFromHeight(w0.a, w0.b, mm);
          if (!(Math.abs(bg) <= BULGE_MAX)) { host.status(t('comforts.err.arc'), true); renderProps(); return; }
          commit(changeWall(w0.guid, { bulge: Math.abs(bg) < 1e-9 ? 0 : bg }), one(title));
        }, { any: true }), w0.bulge ? el('span', { className: 'bc-sub' }, ' ' + t('comforts.prop.radius', { r: fmtLen(wallGeom(w0).arc.R, S.units) })) : null);
        rows.push(el('dt', {}, t('model.level')), el('dd', {}, levels.find((l) => l.id === w0.storey)?.name || ''));
        const passed = wallLevelsPassed(w0, levels);
        if (passed.length) rows.push(el('dt', {}, t('model.wall.passes')), el('dd', {}, passed.map((l) => l.name).join(', ')));   // 0.7 BIM-MLWALL
      }
    } else if (ops.length && !walls.length && ops.every((o) => o.kind === ops[0].kind)) {
      const o0 = ops[0], many = ops.length > 1, guids = ops.map((o) => o.guid), door = o0.kind === 'door';
      const types = door ? DOOR_TYPES : WINDOW_TYPES;
      title = many ? t('model.elements', { n: ops.length }) : (o0.name || openingTypeName(openingType(o0.typeKey) || types[0]));
      const run = (ch) => commit(many ? changeOpenings(guids, ch) : changeOpening(o0.guid, ch), one(title));
      const same = (f) => ops.every((o) => Math.abs(o[f] - o0[f]) < 0.5);
      // 0.6 DC.114: the family (the starter kinds and the file's own of this kind), then its sizes
      const sameFam = ops.every((o) => o.family === o0.family);
      const opts = openingFamilies(famW(), o0.kind).map((x) => [x.key, x.name]);
      if (!sameFam) opts.unshift(['', t('model.prop.changetype')]);
      field(t('fam.family'), select(opts, sameFam ? o0.family : '', 'data-mp-otype', (v) => { if (!v) return; if (openingType(v)) run({ typeKey: v }); else run({ family: v }); }));
      const famUi = exts.find((x) => x.openFamily);   // family-ui.js: the family's dialog (sizes, edit, duplicate)
      if (sameFam && famUi) field('', button(t('fam.open'), 'data-mp-ofam', () => famUi.openFamily(o0.family)));
      if (sameFam) {
        const fs = readFamilies(famW()).find((f) => f.key === o0.family && f.source !== 'guess');
        const sz = (fs?.sizes || []).filter((z) => z.guid);
        const sameSize = ops.every((o) => o.typeId === o0.typeId) && sz.some((z) => z.typeId === o0.typeId);
        const so = sz.map((z) => [z.guid, z.name + ' (' + z.count + ')']);
        if (!sameSize) so.unshift(['', t('fam.size.pick')]);
        field(t('fam.size'), select(so, sameSize ? sz.find((z) => z.typeId === o0.typeId).guid : '', 'data-mp-osize', (v) => { if (v) commit(setFamilySize(guids, v), one(title)); }));
        famUi?.instanceFields?.(ops, { field }, one(title));   // 0.7 BIM-FAM-MORE (7): what each door or window sets itself
      }
      const sized = (ch) => run({ ...ch, sizeName: sizeName({ Width: ch.width ?? o0.width, Height: ch.height ?? o0.height }) });
      field(t('model.ot.width'), lenInput(same('width') ? o0.width : NaN, 'data-mp-ow', (mm) => sized({ width: mm }), { min: 100 }));
      field(t('model.ot.height'), lenInput(same('height') ? o0.height : NaN, 'data-mp-oh', (mm) => sized({ height: mm }), { min: 100 }));
      if (!door) field(t('model.ot.sill'), lenInput(same('sill') ? o0.sill : NaN, 'data-mp-osill', (mm) => run({ sill: mm }), { allowZero: true }));
      if (!many) {
        const wall = data.walls.find((w) => w.id === o0.wall);
        const [e0, e1] = wall ? faceEndsOf(wall, o0.face) : [0, o0.offset + o0.width];
        field(t('model.prop.fromstart'), lenInput(o0.offset - e0, 'data-mp-ostart', (mm) => run({ offset: e0 + mm }), { allowZero: true }));
        field(t('model.prop.fromend'), lenInput(e1 - o0.offset - o0.width, 'data-mp-oend', (mm) => run({ offset: e1 - mm - o0.width }), { allowZero: true }));
        const hk = handKind(openingType(o0.typeKey));   // 0.6 BIM-F2: only types that have a hand
        if (hk) field(t(hk === 'hinges' ? 'model.prop.hinges' : 'model.prop.opensto'), button(t('model.ot.flip'), 'data-mp-hand', () => run({ hand: o0.hand === 'b' ? 'a' : 'b' })));
        field(t(door ? 'model.prop.swing' : 'model.prop.wface'), button(t('model.ot.flip'), 'data-mp-face', () => run({ face: o0.face === 'right' ? 'left' : 'right' })));
      }
    } else if (p.derived.length === 1 && !walls.length && !ops.length) {
      const d = p.derived[0];
      // a roof is picked by one of its parts, which are made again: pick it again by its GlobalId after the reload
      const again = () => { const r = snapshotModel(ed()).derived.roofs.find((x) => x.guid === d.guid); return r?.parts.length ? [kb() + r.parts[0]] : null; };
      // GH.3-D: edits of one roof field in a row (pitch typed twice, fascia nudged) are one undo step
      const run = (ch) => commit(changeDerived([d.guid], ch), { ...one(title), ...(d.kind === 'roof' ? { reselect: again, coalesce: 'roof:' + d.guid + ':' + Object.keys(ch).sort().join(',') } : {}) });
      const text = (value, attr, onText) => {
        const i = el('input', { type: 'text', className: 'bc-input', value: value || '', maxLength: 120, [attr]: '' });
        i.addEventListener('change', () => { if (i.value.trim() && i.value !== i.defaultValue) onText(i.value.trim()); else i.value = i.defaultValue; });
        i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); i.blur(); } if (e.key === 'Escape') { i.value = i.defaultValue; i.blur(); } });
        return i;
      };
      if (d.kind === 'room') {
        title = t('model.room');
        const loops = loopsOf(ed(), d.storey), loop = loopAt(loops.rooms, d.seed);
        field(t('model.room.longname'), text(d.name, 'data-mp-rname', (v) => run({ name: v })));
        field(t('model.room.number'), text(d.number, 'data-mp-rnum', (v) => run({ number: v })));
        if (loop) { rows.push(el('dt', {}, t('model.room.area')), el('dd', { 'data-mp-rarea': '' }, fmtArea(loop.area, S.units)), el('dt', {}, t('model.room.perimeter')), el('dd', {}, fmtLen(loop.perimeter, S.units))); }
        // 0.6 round 2 (comforts-ui.js): the room's four walls as interior elevations, with their dimensions and tags
        const ie = exts.find((x) => x.openInterior);
        if (ie && loop) field('', button(t('comforts.ie.open'), 'data-mp-intel', () => ie.openInterior(d)));
      } else if (d.kind === 'floor') {
        title = t('model.floor.' + (FLOOR_KINDS.some((k) => k.key === d.kind) ? d.kind : 'wood'));
        field(t('model.fl.kind'), select(FLOOR_KINDS.map((k) => [k.key, t('model.floor.' + k.key)]), d.kind, 'data-mp-flkind', (v) => run({ kind: v })));
        field(t('model.prop.thickness'), lenInput(d.thickness, 'data-mp-flthick', (mm) => run({ thickness: mm }), { min: 10 }));
        field(t('model.fl.offset'), lenInput(d.offset, 'data-mp-floff', (mm) => run({ offset: mm }), { any: true }));
      } else if (d.kind === 'ceiling') {
        title = t('model.ceiling');
        field(t('model.ce.height'), lenInput(d.height, 'data-mp-ceh', (mm) => run({ height: mm }), { min: 500 }));
        field(t('model.prop.thickness'), lenInput(d.thickness, 'data-mp-cet', (mm) => run({ thickness: mm }), { min: 1 }));
        // 0.6 DC.117: the grid a ceiling plan draws on it
        field(t('model.ce.pattern'), select(CEILING_PATTERNS.map((p) => [p.key, t('model.ce.pattern.' + (p.key || 'none'))]), d.pattern || '', 'data-mp-cepat', (v) => run({ pattern: v })));
      } else {
        title = t('model.roof');
        const pi = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtPitch(d.pitch, S.units), 'data-mp-rfpitch': '' });
        pi.addEventListener('change', () => { const deg = parsePitch(pi.value); if (deg > 1 && deg < 80) run({ pitch: deg, edges: formatEdges(new Map([...parseEdges(d.edges)].map(([k, v]) => [k, v.kind === 'pitch' ? { kind: 'pitch', overhang: v.overhang } : v]))) || ' ' }); else { host.status(t('model.err.pitch'), true); pi.value = pi.defaultValue; } });
        pi.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); pi.blur(); } });
        field(t('model.rf.pitch'), pi);
        field(t('model.rf.overhang'), lenInput(d.overhang, 'data-mp-rfover', (mm) => run({ overhang: mm }), { allowZero: true }));
        // RC.1: gable overhang, presets incl. shed, plate height, fascia, soffit, and each wall's own setting
        field(t('res.rf.rake'), lenInput(Number.isFinite(d.rake) ? d.rake : d.overhang, 'data-mp-rfrake', (mm) => run({ rake: mm }), { allowZero: true }));
        const wl = data.levels.find((l) => l.guid === d.walls);
        const ws = wl ? (data.walls || []).filter((w) => w.storey === wl.id) : [];
        const o = wl && loopAt(loopsOf(ed(), wl.id).outlines, d.seed);
        const kinds = o ? edgeKinds(o.poly, ws, d) : [];
        const sig = kinds.map((k) => k.kind).join(',');
        const custom = kinds.some((k) => k.kind === 'pitch' && Math.abs(k.pitch - d.pitch) > 1e-6);
        const presetSig = (v) => { const m = o && presetEdges(o.poly, ws, v, null); return m ? edgeKinds(o.poly, ws, { ...d, edges: formatEdges(m), gables: [] }).map((k) => k.kind).join(',') : null; };
        let cur = '';
        if (!custom) for (const v of ['hip', 'gable-short', 'gable-long']) if (presetSig(v) === sig) { cur = v; break; }
        if (!cur && !custom && kinds.filter((k) => k.kind === 'pitch').length === 1 && kinds.every((k) => k.kind !== 'none')) cur = 'shed';
        field(t('model.rf.ends'), select([['', t('res.rf.custom')], ['hip', t('model.rf.hip')], ['gable-short', t('model.rf.gable.short')], ['gable-long', t('model.rf.gable.long')], ['shed', t('res.rf.shed')]], cur, 'data-mp-rfends', (v) => {
          if (!v) return;
          const m = o ? presetEdges(o.poly, ws, v, v === 'shed' ? shedLow(o.poly, kinds) : null) : null;
          if (!m) { host.status(t('model.err.gable4'), true); renderProps(); return; }
          run({ edges: formatEdges(m) || ' ', gables: [] });
        }));
        field(t('res.rf.plate'), lenInput(d.plate > 0 ? d.plate : NaN, 'data-mp-rfplate', (mm) => run({ plate: mm }), { allowZero: true }), el('span', { className: 'bc-sub' }, ' ' + t('res.rf.plate.auto')));
        field(t('res.rf.fascia'), lenInput(d.fascia, 'data-mp-rffascia', (mm) => run({ fascia: mm }), { allowZero: true }));
        const so = el('input', { type: 'checkbox', checked: !!d.soffit, 'data-mp-rfsoffit': '' });
        so.addEventListener('change', () => run({ soffit: so.checked }));
        field(t('res.rf.soffit'), el('label', {}, so, ' ' + t('res.rf.soffit.on')));
        field(t('model.prop.thickness'), lenInput(d.thickness, 'data-mp-rfthick', (mm) => run({ thickness: mm }), { min: 10 }));
        if (o) {
          // one row per wall under the roof: pitched (its own pitch), gable end, or none (stops flush)
          const guids = edgeWalls(o.poly, ws), map = parseEdges(d.edges);
          const keyAt = (i) => guids[i] || '@' + i;
          const setEdge = (i, e) => {
            const m = new Map(map);
            if (!d.edges && d.gables.length) d.gables.forEach((gi) => m.set(keyAt(gi), { kind: 'gable' }));
            if (e) m.set(keyAt(i), e); else m.delete(keyAt(i));
            run({ edges: formatEdges(m) || ' ', gables: [] });
          };
          const list = el('ol', { className: 'bc-rf-edges', 'data-mp-rfedges': '' }, ...kinds.map((k, i) => {
            const a = o.poly[i], b = o.poly[(i + 1) % o.poly.length];
            const kind = select([['pitch', t('res.rf.k.pitch')], ['gable', t('res.rf.k.gable')], ['none', t('res.rf.k.none')]], k.kind, 'data-mp-rfedge', (v) => setEdge(i, v === 'pitch' ? null : { kind: v }));
            const ep = el('input', { type: 'text', className: 'bc-input bc-num', value: k.kind === 'pitch' ? fmtPitch(k.pitch, S.units) : '', size: 6, hidden: k.kind !== 'pitch', 'data-mp-rfedgepitch': String(i), 'aria-label': t('model.rf.pitch') });
            ep.addEventListener('change', () => { const deg = parsePitch(ep.value); if (!(deg > 1 && deg < 80)) { host.status(t('model.err.pitch'), true); ep.value = ep.defaultValue; return; } setEdge(i, Math.abs(deg - d.pitch) < 1e-6 ? null : { kind: 'pitch', pitch: deg }); });
            ep.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); ep.blur(); } });
            const li = el('li', { 'data-mp-rfedgerow': String(i) }, el('span', { className: 'bc-sub' }, t('res.rf.edge', { len: fmtLen(Math.hypot(b[0] - a[0], b[1] - a[1]), S.units) })), ' ', kind, ' ', ep);
            const hi = (on) => { S.hiEdge = on && wl.id === S.level ? [a[0], a[1], b[0], b[1]] : null; drawOverlay(); };
            li.addEventListener('mouseenter', () => hi(true)); li.addEventListener('mouseleave', () => hi(false));
            kind.addEventListener('focus', () => hi(true)); kind.addEventListener('blur', () => hi(false));
            return li;
          }));
          rows.push(el('dt', { className: 'bc-mp-wide' }, t('res.rf.walls')), el('dd', { className: 'bc-mp-wide' }, list));
        }
      }
    } else return null;
    return el('section', { className: 'bc-model-props', 'data-model-props': '' },
      el('h3', { className: 'bc-h' }, title), el('dl', { className: 'bc-dl bc-mp-dl' }, ...rows),
      el('p', { className: 'bc-sub' }, t('model.prop.note')));
  }
  /** A point just outside the roof's current low side (its one pitched edge), else its longest edge: where Shed puts the eave. */
  function shedLow(poly, kinds) {
    const n = poly.length, len = poly.map((p, i) => Math.hypot(poly[(i + 1) % n][0] - p[0], poly[(i + 1) % n][1] - p[1]));
    const p1 = kinds.filter((k) => k.kind === 'pitch').length === 1 ? kinds.findIndex((k) => k.kind === 'pitch') : len.indexOf(Math.max(...len));
    const a = poly[p1], b = poly[(p1 + 1) % n];
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  }
  /** The face's ends of a wall along it, from the joined outline of its storey's walls. */
  function faceEndsOf(wall, face) {
    if (!S.outlines.has(wall.guid) || wall.storey !== S.level) {
      const here = (S.data?.walls || snapshotModel(ed()).walls).filter((w) => w.storey === wall.storey);
      const o = wallOutlines(here.map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge })));
      const keep = S.outlines; S.outlines = o; const r = faceEnds(wall, face); S.outlines = keep; return r;
    }
    return faceEnds(wall, face);
  }
  const mergeR = (a, b) => (!a ? b : { ...b, journal: mergeJournals(a.journal, b.journal) });
  let propsHost = null;
  function renderProps() { if (propsHost) decorate(propsHost); }
  function decorate(container) {
    propsHost = container;
    container.querySelector('[data-model-props]')?.remove();
    let block = null;
    try { block = propsBlock(); } catch (e) { console.error(e); }
    if (!block) return;
    const after = container.querySelector('.bc-prop-name, [data-pick-count]');
    if (after) after.after(block); else container.prepend(block);
  }

  setTool('select');
  /** What an extension (extend()) may use. */
  const api = {
    S, root, host, t, ed, kb, commit, refresh, buildScene, drawOverlay, setTool, level, levelAbove, wallsHere, wallsOn, snapAt,
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
        if (!pv || !S.on || S.level !== levelId) return;
        pv.resize();
        if (camera) { Object.assign(pv, camera); pv.render(); }
        else if (!same) fitPlan();
      });
    },
    /** Snap as the Wall tool does, from a point of the extension's own (0.6: outlines drawn by hand): angles, Shift, lengths. */
    snapFrom: (p, e, from) => snapPoint(p, snapCtx(), { tol: pv.pxToMm(SNAP_PX), from, ortho: !!e?.shiftKey, step: 15, round: from ? round() : 0 }),
    pv: () => pv, units: () => S.units, round, selectedKeys, renderProps: () => renderProps(), loopsOf: (st) => loopsOf(ed(), st), fitPlan, mergeJournals,
    /** The plan scene of any level (the sheets' plans), the level shown left as it was. */
    sceneFor(levelId, kind = 'plan', callout = null) {
      const keep = { level: S.level, kind: S.kind, callout: S.callout, loops: S.loops, outlines: S.outlines, cut: S.cut, cutFor: S.cutFor };
      try { S.level = levelId; S.kind = kind === 'rcp' ? 'rcp' : 'plan'; S.callout = callout || null; S.loops = loopsOf(ed(), levelId); S.cutFor = null; cutPlan(); return makeScene(); }
      finally { Object.assign(S, keep); }
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
    opened() { S.cutFor = null; S.level = null; S.autoFit3d = false; endChain(); S.queue = []; S.empty3d = !(host.viewer()?.allKeys?.().size); if (S.on) show(false); },
    stage(which) { if (which !== 'ifc' && S.on) show(false); },
    rebuilding() { S.reloading = true; S.reloadT = Date.now(); },
    rebuilt() {
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
    picked() { if (pv && S.on) { pv.setSelection(selectedKeys()); drawOverlay(); } },
    /** The project origin / survey markers changed (coords-ui.js): draw the plan again. */
    coordsChanged() { if (pv && S.on) { pv.markers = host.coords?.()?.planMarkers(S.planM) || []; pv.render(); } },
    /** A tool that works in the 3D view (Paint, Views, Render) is starting: the plan-only layout goes to Split (0.6 BIM-F5). */
    need3d() { if (!S.on || S.layout !== 'plan') return false; S.layout = 'split'; applyLayout(); return true; },
    show,
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
