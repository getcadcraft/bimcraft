import { documentPages } from './assembly-schedule-layout.js';
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * res-ui.js — the residential tools in BimCraft's plan view (0.5 part 4, track RC; session bim-residential). Mounted
 * through model-ui.js extend() (bimcraft.js calls mountRes(modelUi) right after mountModel), so it shares the plan, the
 * model bar, the commit queue, picking, Properties and Delete with the building tools. Markup: ui.inc's "Build" menu
 * ([data-res-tools] with [data-mtool] buttons) and one options row per tool ([data-mopts="<tool>"]).
 *
 *   RC.1  roofplane   a roof face drawn as a polygon: click the corners (the first side is the eave), click the first
 *                     corner, double-click or Enter to finish; pitch and eave height in its row (res-roofplane.js)
 *   RC.2  foundation  point inside a building and click: slab on grade, stem walls and slab, crawlspace or basement under
 *                     the outside of its walls (res-foundation.js); footings dashed on the plan
 *   RC.4  countertop  point at a run of base cabinets from the library and click: a countertop over all of them with its
 *                     front overhang (res-counter.js); a run that has one fits it again; out-of-date ones are marked
 *   RC.3  stair       click where it starts (the middle of the bottom step), then the way up: straight, L, U or winders,
 *                     risers and treads from the floor-to-floor height (res-stair.js); handrails, the stairwell above
 *         railing     click a path (a deck's edge, round an opening), double-click or Enter to finish (res-railing.js)
 *   RC.9  framing     click a wall, a floor or a roof (on its level) to frame it, or "Frame every wall" (res-framing.js);
 *                     show / hide the framing, see through the walls; the cut list is the Schedules panel's "Lumber"
 *   RC.10 terrain     the ground from a file (points, contours in DXF / DWG, LAS / LAZ, GeoTIFF) or spot elevations clicked
 *                     on the plan; pad: click inside a building for its building pad; paving: a driveway, walk or patio
 *                     drawn by its corners, draped on the ground; contours on the plan; LandXML for CivilCraft (res-terrain.js)
 *   RC.6  electrical  outlets, switches, lights, a sensor, junction boxes and panels with the Electrical add-on's symbols;
 *                     wall devices sit on the nearest wall face; a switch's Properties links the lights it switches;
 *                     Schedules › Devices and Circuits (res-elec.js)
 *   RC.8  Takeoff     the model bar's Takeoff button: a plan of each level with every quantity marked on it and the takeoff
 *                     inside the PDF, opened in TakeoffCraft (a hand-off) or downloaded (res-takeoff.js)
 *   RC.5  section     a section line: click its two ends (it looks to the left of the first → second; flip it in Properties)
 *         Sheets      the model bar's Sheets button: plans, elevations, sections, schedules and framing elevations on sheets,
 *                     made from the model when it opens; a preview of each and the whole set as one PDF (res-views.js,
 *                     res-sheets.js)
 */
import { merge as mergeCredits, creditRows } from './report/credits.js';
import { el } from './ui-util.js';
import { officeStrip } from './office-bim.js';   // 0.11 BK.181 (bim-inbox-11): the office's title block fields
import { projectName } from './schedule-data.js';   // 0.10 BK.4: the one reader of the project's name
import { readGrids, toPlan as gridsToPlan, gridsInView } from './model-grids.js';   // 0.6 DF.16 (bim-draw): grids on the elevations and sections
import { fmtLen, parseLen, parsePitch, fmtPitch, fmtArea, isMetric } from './model-units.js';
import { labelPapers } from './paper-labels.js';
import { snapshotModel } from './model-ops.js';
import { ModelWriter } from './model-write.js';
import { snapPoint } from './model-tools.js';
import { readRoofPlanes, placeRoofPlane, changeRoofPlane, removeRoofPlanes, planeFrame } from './res-roofplane.js';
import { FOUNDATION_KINDS, readFoundations, placeFoundation, changeFoundation, removeFoundations, foundationParams, foundationGeometry, loadsOn } from './res-foundation.js';
import { loopAt, labelPoint } from './model-rooms.js';
import { viewNotes, openingFacts, interiorView, ROOM_SIDES } from './comforts-views.js';
import { placedItems } from './model-move.js';
const interiorCtx = new Map();   // per setInput: a level's triangles, rooms and items for its interior elevations   // 0.6 round 2 (bim-comforts_PART_2): dimensions, level marks, tags
import { wallGeom } from './model-arcs.js';
import { STAIR_KINDS, STAIR_DEFAULTS, STAIR_LIMITS, stairLayout, readStairs, placeStair, changeStair, removeStairs, stairHeight, SPIRAL_DEFAULTS } from './res-stair.js';
import { rules, onRules } from './rules-hook.js';   // 0.8 REG.1: the building regulations an add-on says are in force (none without one)
import { RAIL_DEFAULTS, railingParts, readRailings, placeRailing, changeRailing, removeRailings } from './res-railing.js';
import { placeFenceParts } from './fence-bim.js';   // 0.10 SU.1814b (written by bim-part-link-10); 0.11 su-finish-11: the Fence kind places one element per part (placeFenceParts) with a Library fence type
import { libraryTypes, loadLibraryType, typeFromFile, typeFromItem as fenceTypeFromItem } from './fence/index.js';   // 0.11 SU.1814b: the Library picker's data (lib/fence)
import { RULES as STEEL_RULES } from './steelstair/steelstair.js';
import { placeSteelStair, steelPreview } from './steelstair-bim.js';   // 0.11 SU.1814c: the Stair tool's Steel kind, lib/steelstair's stair as one IfcStair
import { parseTjiTable, activeTji, setActiveTji, tjiStatement } from './tji-table.js';   // 0.8 GH.3-E
import { TJI_PSET, FRAME_DEFAULTS, readFraming, frameHosts, changeFraming, removeFraming, keepPiece, lumberList, frameWall, LUMBER } from './res-framing.js';
import { readOpenings, openingType, openingTypeName } from './model-openings.js';
import { wallType, typeName as wallTypeName } from './model-walls.js';
import { roofGeometry, edgeKinds } from './res-roof.js';
import { modelQuantities, buildTakeoff } from './res-takeoff.js';
import { readMethodSetting } from './quantity-method.js';   // 0.10 BK.42 (bk-measure-10)
import { newHandoffId, putHandoff } from './handoff.js';
import { loadTin, readTerrain, readPads, readHardscape, finishedSurface, existingSurface, placeTerrain, changeTerrain, removeTerrain, placePad, changePad, removePads, placeHardscape, changeHardscape, removeHardscape,
  parsePointText, drawingContours, thinToGrid, toModel, autoOffset, landXml, readLandXmlSurfaces, padShape, PAD_DEFAULTS, HARD_KINDS } from './res-terrain.js';
import { modelTriangles, projectView, elevationDirs } from './res-views.js';
import { sectionModel, straightElevationWidth } from './wall-section-graphics.js';
import { readProjectedView, projectedBox } from './projected-views.js';
import { readCopies } from './view-copies.js';
import { printSheets } from './print-style.js';   // 0.9 D8.12-B
import { readViewNotes, readViewDims } from './elev-edit.js';   // 0.9 SU.1123: notes written in elevations and sections   // 0.9 D8.12-A: duplicated elevations and sections on sheets
import { readMaterials } from './project-materials.js';
import { buildSet, setPdf, sheetSvg, PAPERS, readSectionLines, placeSectionLine, changeSectionLine, removeSectionLines, sectionDir, placeElevationMarker, elevationMarkerOf, sectionTitle } from './res-sheets.js';
import { viewerToPlan } from './model-plan.js';
import { setCad, cadFile, CAD_FORMATS } from './plan-cad.js';   // SU.1994: the set's plans, elevations and sections as DWG or DXF
import { askCadFormat } from './cad-export-ui.js';
import { DEVICES, symbolPlan, symbolScale, wallSpot, readDevices, placeDevice, changeDevice, linkLight, removeDevices, deviceSchedule, circuitSchedule, isLight, isSwitch, isBoard } from './res-elec.js';
import { GROUPS as EL_GROUPS, SYMBOLS as EL_SYMBOLS } from './res-elec-symbols.js';
import { counterCabinets, counterRuns, readCountertops, countertopState, placeCountertop, changeCountertop, fitCountertop, removeCountertops, COUNTER_DEFAULTS } from './res-counter.js';
import { classificationIndex } from './roundtrip.js';   // 0.8 EG.56: the keynote legend's classifications
import { mountRsuOptions } from './rsu-options.js';
import { mountRsuRoof } from './rsu-roof.js';
import { mountRsuFoundations } from './rsu-foundations.js';
import { mountRsuCounters } from './rsu-counters.js';
import { mountRsuStairs } from './rsu-stairs.js';
import { mountRsuFraming } from './rsu-framing.js';
import { mountRsuTerrain } from './rsu-terrain.js';
import { mountRsuElectrical } from './rsu-electrical.js';
import { mountRsuTakeoff } from './rsu-takeoff.js';
import { mountRsuSheets } from './rsu-sheets.js';

const D2R = Math.PI / 180;
// 4×4 column-major helpers (the storeys' world matrices)
const apply4m = (M, x, y, z) => [M[0] * x + M[4] * y + M[8] * z + M[12], M[1] * x + M[5] * y + M[9] * z + M[13], M[2] * x + M[6] * y + M[10] * z + M[14]];
function inv4m(m) {
  // rigid transforms only (rotation + translation): the inverse is the transpose of the rotation and the moved origin
  const r = [m[0], m[4], m[8], 0, m[1], m[5], m[9], 0, m[2], m[6], m[10], 0, 0, 0, 0, 1];
  const t = apply4m(r, m[12], m[13], m[14]);
  r[12] = -t[0]; r[13] = -t[1]; r[14] = -t[2];
  return r;
}

/** The credits as a schedule: license and credit, the credit wrapped so it fits its column on the page (the sheets print one line a row). */
export const creditsSchedule = (items, t) => ({ ref: 'credits', title: t('res.sh.credits'), head: [t('credits.col.license'), t('credits.col.attribution')], widths: [0.22, 0.78], rows: creditRows(items, { wrap: 62 }) });

export function mountRes(modelUi) {
  if (!modelUi?.extend) return null;
  const R = { planes: [], plane: { pitch: Math.atan(4 / 12) / D2R, base: null, pts: null, at: null }, founds: [], found: { kind: 'slab', hover: null }, stairs: [], stair: { ...STAIR_DEFAULTS, start: null, at: null, rule: 'us-ibc-2021', treadType: 'folded' }, rails: [], rail: { kind: 'guard', height: RAIL_DEFAULTS.height, pts: null, at: null, style: 'panel', item: null, types: null }, frames: [], frame: { ...FRAME_DEFAULTS, show: true, see: false, hover: null }, terrain: null, pads: [], hards: [], tr: { spots: [], z: 0, unit: 'ft', tinReady: false, fin: null, finKey: null, contours: null, pad: { ...PAD_DEFAULTS }, hard: { kind: 'walk', pts: null, at: null } }, devs: [], el: { kind: 'socket.double', circuit: '', height: null, at: null, link: null }, secs: [], sec: { a: null, at: null }, elv: { a: null, at: null }, sheets: null, counters: [], counter: { overhang: COUNTER_DEFAULTS.overhang, thickness: COUNTER_DEFAULTS.thickness, hover: null }, cabinets: [] };
  let A = null;   // the plan's API (model-ui.js extend)
  let tjiBar = null;   // GH.3-E: refreshes the Framing tool's TJI table row
  const t = (k, v) => A.t(k, v);
  /** A stair kind's name (0.6 round 2: the spiral stair's words are comforts.* keys, beside the res.* set); needs t, so inside. */
  const stairKindName = (k) => (k === 'spiral' ? t('comforts.st.spiral') : t('res.st.kind.' + k));
  const L = (mm) => fmtLen(mm, A.units());
  const writer = () => { const e = A.ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const levelGuid = () => A.level()?.guid;
  /** Snap a plan point to the level's walls and to the points of what is being drawn (15° steps from the last one). */
  function snap(p, e, pts = []) {
    const walls = A.wallsHere().map((w) => ({ a: w.a, b: w.b, t: w.t }));
    const from = pts.length ? pts[pts.length - 1] : null;
    return snapPoint(p, { walls, points: pts }, { tol: A.pv().pxToMm(12), from, ortho: !!e?.shiftKey, step: 15, round: from ? A.round() : 0 });
  }

  const { stairSpecAt, packStair, stairScene, bandOf, stairOverlay, fillFenceTypes, useFenceType, finishRailing, regsTag, stairProps, railProps } = mountRsuStairs({
    R, t, stairKindName, L, levelGuid, snap,
    get A() { return A; },
    get CUT() { return CUT; },
    get pp() { return pp; },
    get again() { return again; },
  });
  const { frameHostAt, frameOpts, frameAllWalls, applyFrameVis, frameScene, frameOverlay, frameProps, loadTjiFile, tjiRegister, lumberSchedule } = mountRsuFraming({
    R, t, L, writer,
    get A() { return A; },
    get inRun() { return inRun; },
    get pp() { return pp; },
    get again() { return again; },
    get TJI_KEY() { return TJI_KEY; },
    get tjiBar() { return tjiBar; },
    get tjiSrc() { return tjiSrc; }, set tjiSrc(v) { tjiSrc = v; },
  });
  const { groundLevel, toWorld, ensureTin, makeFromSpots, groundFromFile, exportLandXml, terrainScene, terrainOverlay, finishPaving, terrainProps } = mountRsuTerrain({
    R, t, L, writer, levelGuid, inv4m,
    get A() { return A; },
    get UNIT_MM() { return UNIT_MM; },
    get pp() { return pp; },
    get apply4m() { return apply4m; },
  });
  const { bindRows, again } = mountRsuOptions({
    R, t, L, fillFenceTypes, useFenceType, frameAllWalls, applyFrameVis, loadTjiFile, makeFromSpots, groundFromFile, exportLandXml,
    get A() { return A; },
    get tjiBar() { return tjiBar; }, set tjiBar(v) { tjiBar = v; },
  });


  const { planeClick, finishPlane, planeOverlay, planesScene, planeProps } = mountRsuRoof({
    R, t, L, levelGuid, snap, again,
    get A() { return A; },
    get D2R() { return D2R; },
  });

  const { pp, foundHover, foundScene, foundOverlay, foundProps } = mountRsuFoundations({
    R, t, L, writer, again,
    get A() { return A; },
  });

  const { inRun, counterHover, counterScene, counterOverlay, counterProps } = mountRsuCounters({
    R, t, pp,
    get A() { return A; },
  });

  // ---- stairs and railings (RC.3) ----
  const CUT = 1200;   // the plan's cut height (model-ui.js): steps above it are dashed

  // ---- GH.3-E: the joist maker's table the person loads, the load case, and the assumptions the layout states ----
  const TJI_KEY = 'cc-bimcraft:tji-table';
  try {
    const kept = JSON.parse(localStorage.getItem(TJI_KEY) || 'null');
    const r = kept && parseTjiTable(kept.text);
    if (r?.ok) { setActiveTji(r.table, kept.caseId); activeTji().raw = kept.text; }
  } catch (e) { /* nothing kept */ }
  /** Problems (rule 29): the TJI layout's standing caveats, one source of its own. */
  let tjiSrc = null;
  if (window.ccProblems) queueMicrotask(tjiRegister); else document.addEventListener('cc-problems-ready', () => tjiRegister(), { once: true });

  // ---- terrain (RC.10) ----
  const UNIT_MM = { mm: 1, m: 1000, ft: 304.8, ftUS: 1200 / 3937 * 1000 };

  const { bindElecRow, elClick, elOverlay, elScene, endLink, elProps, elSchedules, elScheduleKeys } = mountRsuElectrical({
    R, t, L, levelGuid,
    get A() { return A; },
  });

  const { makeTakeoff, takeoffClick } = mountRsuTakeoff({
    R, t, L, writer,
    get A() { return A; },
  });

  const { sectionScene, sectionOverlay, sectionProps, paperNow, makeSet, setOpts, setInput, openSheets } = mountRsuSheets({
    R, t, L, writer, bandOf, groundLevel, creditsSchedule,
    get A() { return A; },
    get PAPER_KEY() { return PAPER_KEY; },
    get interiorCtx() { return interiorCtx; },
  });
  const PAPER_KEY = 'bimcraft.sheets.paper';

  // ---- the extension ----
  const ext = {
    tools: ['roofplane', 'foundation', 'countertop', 'stair', 'railing', 'framing', 'terrain', 'pad', 'paving', 'section', 'elevation', 'electrical', 'ellink'],
    hint: (name) => (name === 'stair' && R.stair.kind === 'spiral' ? 'comforts.hint.spiral' : 'res.hint.' + name),   // 0.6 round 2: the spiral stair's own
    typed: () => false,
    classes: /^Ifc(Roof|Slab|ElementAssembly|Footing|Wall|Furniture|FurnishingElement|Stair|StairFlight|Railing|Member|Beam|GeographicElement|Annotation|Outlet|SwitchingDevice|LightFixture|Sensor|JunctionBox|ElectricDistributionBoard|FlowTerminal|FlowController|FlowFitting)$/,
    /** 0.6 DF.19 (views-ui.js): what a sheet can show, and the set's paper / title-block options. */
    sheetInput: () => setInput(), sheetOpts: () => setOpts(paperNow()),
    /** 0.10 BK.49 (bk-r3-checks-10, asbuilt.js): the drawing set as it is now, as one PDF, for the handover package's as-built drawings. → { bytes, sheets } | null */
    /** `o.titleBlock`: the project's title block for the set's strip (withProject). `o.paper` (SC.7, the export set's entry below): a paper asked for by the caller instead of the one last chosen in the Sheets dialog; `list` = what is on each page. */
    setPdfBytes(o = {}) { if (!A.ed()) return null; if (!A.S.data) A.prepareWorkspace(); if (!A.S.data) return null; const paper = PAPERS[o && o.paper] ? o.paper : paperNow(); const set = makeSet(paper, (o && o.titleBlock) || null); if (!set.length) return null; return { bytes: setPdf(printSheets(set), { paper, title: String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '') }), sheets: set.length, list: set.map((sh) => ({ id: sh.number, number: sh.number, title: sh.title, scale: sh.scale || (sh.views || []).map((v) => v.scale).filter(Boolean)[0] || '', revision: '', paper, block: !!(o && o.titleBlock) })) }; },
    /** 0.8 EG.56: what a keynote legend can number: the model's classification references (system + code, with the reference's name) and its presentation layers, each with how many elements carry it. */
    legendSource() {
      const e = A.ed(); if (!e) return [];
      const out = new Map();
      const add = (kind, key, text, n) => { const k = kind + '|' + key; const o = out.get(k) || { kind, key, text, count: 0 }; o.count += n; out.set(k, o); };
      try { for (const list of classificationIndex(e.api, e.mid).values()) for (const c of list) if (c.code) add('classification', (c.system ? c.system + ' ' : '') + c.code, c.name || '', 1); } catch (x) { /* a model with no classifications */ }
      try {
        const v = e.api.GetLineIDsWithType(e.mid, e.api.GetTypeCodeFromName('IFCPRESENTATIONLAYERASSIGNMENT'), true);
        for (let i = 0; i < v.size(); i++) { const l = e.api.GetLine(e.mid, v.get(i), false); const nm = l?.Name?.value ?? l?.Name; if (nm) add('layer', String(nm), '', (l.AssignedItems || []).length); }
      } catch (x) { /* no layers */ }
      return [...out.values()];
    },
    schedules() { const sc = A.S.on ? lumberSchedule() : null; return { ...(sc ? { lumber: sc } : {}), ...elSchedules() }; },
    /** 0.8 REG.1 (model-ui.js scheduleData): the stairs the regulations add-on's schedule checks. */
    ruleStairs: () => R.stairs,
    scheduleKeys(kind, i) {
      if (kind === 'devices' || kind === 'circuits') return elScheduleKeys(kind, i);
      if (kind !== 'lumber') return [];
      const w = writer(); if (!w) return [];
      const row = lumberList(w, { metric: isMetric(A.units()) }).rows[i]; if (!row) return [];
      const k = A.kb(), out = [];
      for (const fr of R.frames) for (const p of fr.parts) { const ps = w.readPset(p, 'CadCraft_Lumber'); if (ps && String(ps.Size).startsWith(row.size)) out.push(k + p); }
      return out;
    },
    refresh() {
      const w = writer();
      R.planes = w ? readRoofPlanes(w) : [];
      R.founds = w ? readFoundations(w) : [];
      // each foundation's outline and parts now (for the plan and Properties)
      const byLevel = new Map();
      for (const f of R.founds) {
        if (!byLevel.has(f.storey)) byLevel.set(f.storey, A.loopsOf(f.storey));
        const o = loopAt(byLevel.get(f.storey).outlines, f.seed);
        f.loads = loadsOn(w, f.storey, byLevel.get(f.storey));
        f.prm = foundationParams(f.kind, f.stored, f.loads);
        f.outline = o?.poly || null;
        f.geo = o ? foundationGeometry(o.poly, f.prm) : null;
      }
      // countertops and the cabinets they stand on, per level
      R.cabinets = [];
      R.counters = w ? readCountertops(w) : [];
      if (w) for (const lv of A.S.data?.levels || []) for (const cb of counterCabinets(w, lv.id)) R.cabinets.push({ ...cb, storey: lv.id });
      for (const c of R.counters) c.state = countertopState(w, c, R.cabinets.filter((cb) => cb.storey === c.storey));
      R.stairs = w ? readStairs(w) : [];
      for (const st of R.stairs) { const lay = stairLayout({ ...st, height: stairHeight(w, st).height }); st.layout = lay.error ? null : lay; }
      R.rails = w ? readRailings(w) : [];
      R.frames = w ? readFraming(w) : [];
      if (w) {
        const walls = A.S.data?.walls || [], ops = readOpenings(w, null, walls);
        for (const fr of R.frames) {
          fr.qty = w.readPset(fr.id, 'CadCraft_FramingQuantities') || {};
          fr.notes = w.readPset(fr.id, 'CadCraft_Framing')?.Notes || 'ok';
          fr.tji = w.readPset(fr.id, TJI_PSET) || null;
          if (fr.kind === 'wall') { const wall = walls.find((x) => x.guid === fr.host); if (wall) { const r2 = frameWall(wall, { walls: walls.filter((x) => x.storey === wall.storey), openings: ops.filter((o) => o.wallGuid === wall.guid), spacing: fr.spacing, corners: fr.corners, blocking: fr.blocking, bearing: (wall.assembly || wallType(wall.typeKey))?.exterior !== false }); fr.wallPieces = r2.pieces ? r2 : null; } }
        }
      }
      queueMicrotask(() => applyFrameVis());
      tjiSrc?.invalidate();
      R.secs = w ? readSectionLines(w) : [];
      R.devs = w ? readDevices(w) : [];
      R.terrain = w ? readTerrain(w) : null;
      R.pads = w ? readPads(w) : [];
      R.hards = w ? readHardscape(w) : [];
      if (R.terrain && !R.tr.tinReady) ensureTin().then(() => { A.refresh(); }).catch(() => {});
      if (R.terrain && R.tr.tinReady) {
        if (R.tr.finKey !== R.terrain.key) { R.tr.fin = finishedSurface(w, R.terrain); R.tr.finKey = R.terrain.key; R.tr.contours = R.tr.fin?.contours(R.terrain.interval) || null; }
        for (const pd of R.pads) pd.shape = padShape(w, pd);
      } else { R.tr.contours = null; }
      bindRows();
      bindElecRow();
    },
    ownKeys(set, k) {
      for (const d of R.devs) set.add(k + d.id);
      for (const rp of R.planes) for (const p of rp.parts) set.add(k + p);
      for (const f of R.founds) for (const p of f.parts) set.add(k + p);
      for (const st of R.stairs) for (const p of st.parts) set.add(k + p);
      for (const r of R.rails) set.add(k + r.id);
      for (const fr of R.frames) for (const p of fr.parts) set.add(k + p);
      if (R.terrain) set.add(k + R.terrain.id);
      for (const h of R.hards) set.add(k + h.id);
    },
    scene(scene) { terrainScene(scene); planesScene(scene); foundScene(scene); counterScene(scene); stairScene(scene); frameScene(scene); sectionScene(scene); elScene(scene); },
    overlay(o) { planeOverlay(o); foundOverlay(o); counterOverlay(o); stairOverlay(o); frameOverlay(o); terrainOverlay(o); sectionOverlay(o); elOverlay(o); },
    move(p, e) {
      if (A.S.tool === 'roofplane') R.plane.at = snap(p, e, R.plane.pts || []);
      if (A.S.tool === 'foundation') R.found.hover = foundHover(p);
      if (A.S.tool === 'countertop') R.counter.hover = counterHover(p);
      if (A.S.tool === 'stair') { R.stair.at = snap(p, e, R.stair.start ? [R.stair.start] : []); R.stair.spec = stairSpecAt(p, e); }
      if (A.S.tool === 'railing') R.rail.at = snap(p, e, R.rail.pts || []);
      if (A.S.tool === 'framing') R.frame.hover = frameHostAt(p);
      if (A.S.tool === 'terrain') R.tr.at = p;
      if (A.S.tool === 'section') R.sec.at = snap(p, e, R.sec.a ? [R.sec.a] : []);
      if (A.S.tool === 'elevation') R.elv.at = snap(p, e, R.elv.a ? [R.elv.a] : []);
      if (A.S.tool === 'electrical' || A.S.tool === 'ellink') R.el.at = p;
      if (A.S.tool === 'paving') R.tr.hard.at = snap(p, e, R.tr.hard.pts || []);
      if (A.S.tool === 'pad') { const o = A.S.loops && loopAt(A.S.loops.outlines, p); R.tr.padHover = o ? o.poly : null; }
    },
    click(p, e) {
      if (A.S.tool === 'roofplane') planeClick(p, e);
      if (A.S.tool === 'foundation') {
        const h = foundHover(p);
        if (!h) { A.host.status(t('model.err.nobuilding2'), true); return; }
        // a building that has one already: pick it (Properties changes it) instead of a second one
        const have = R.founds.find((f) => f.storey === A.S.level && f.outline && loopAt([{ poly: f.outline, area: 1 }], p));
        if (have && have.parts.length) { A.host.select([A.kb() + have.parts[0]]); A.host.status(t('res.fd.picked')); return; }
        A.commit(placeFoundation({ level: levelGuid(), seed: p, kind: R.found.kind }), { label: t('res.fd.kind.' + R.found.kind), verb: t('model.verb.placed') });
      }
      if (A.S.tool === 'countertop') {
        const h = counterHover(p);
        if (!h) { A.host.status(t('res.err.nocabinet'), true); return; }
        if (h.have) { A.commit(fitCountertop(h.have.guid), { label: t('res.counter'), verb: t('res.verb.fitted') }); return; }
        A.commit(placeCountertop({ level: levelGuid(), seed: p, overhang: R.counter.overhang, thickness: R.counter.thickness }), { label: t('res.counter'), verb: t('model.verb.placed') });
      }
      if (A.S.tool === 'stair') {
        const st = R.stair;
        if (!st.start) { st.start = snap(p, e).p; return; }
        const spec = stairSpecAt(p, e);
        if (!spec) return;
        if (spec.kind === 'steel') {   // 0.11 SU.1814c: one IfcStair from the steel stair generator
          st.start = null; st.spec = null;
          A.commit(placeSteelStair({ level: levelGuid(), start: spec.start, angle: spec.angle, width: spec.width, height: spec.height, rule: st.rule, treadType: st.treadType, rails: spec.railings }), { label: t('steel.name'), verb: t('model.verb.placed') });
          return;
        }
        const L2 = stairLayout(spec);
        if (L2.error) { A.host.status(t(L2.error), true); return; }
        st.start = null; st.spec = null;
        A.commit(placeStair({ level: levelGuid(), start: spec.start, angle: spec.angle, kind: spec.kind, turn: spec.turn, width: spec.width, railings: spec.railings, ...packStair(spec.kind) }), { label: t('res.stair'), verb: t('model.verb.placed') });
      }
      if (A.S.tool === 'electrical') { elClick(p); return; }
      if (A.S.tool === 'ellink') {
        // the nearest light within reach of the click links to (or unlinks from) the switch
        const lights = R.devs.filter((d) => d.storey === A.S.level && isLight(d.kind));
        const reach = Math.max(400, A.pv().pxToMm(20));
        const lt = lights.map((d) => ({ d, r: Math.hypot(d.at[0] - p[0], d.at[1] - p[1]) })).filter((x) => x.r <= reach).sort((a, b) => a.r - b.r)[0]?.d;
        if (!lt) { A.host.status(t('res.err.ellight'), true); return; }
        const sw = R.devs.find((d) => d.guid === R.el.link);
        if (!sw) { endLink(); return; }
        A.commit(linkLight(sw.guid, lt.guid), { label: sw.tag, verb: t(sw.controls.includes(lt.guid) ? 'res.el.verb.unlinked' : 'res.el.verb.linked') });
        return;
      }
      if (A.S.tool === 'elevation') {   // 0.10 BT.10
        const q = snap(p, e, R.elv.a ? [R.elv.a] : []).p;
        if (!R.elv.a) { R.elv.a = q; return; }
        const at = R.elv.a; R.elv.a = null;
        A.commit(placeElevationMarker({ level: levelGuid(), at, toward: q }), { label: t('res.elv.marker'), verb: t('model.verb.placed') });
        return;
      }
      if (A.S.tool === 'section') {
        const q = snap(p, e, R.sec.a ? [R.sec.a] : []).p;
        if (!R.sec.a) { R.sec.a = q; return; }
        const a = R.sec.a; R.sec.a = null;
        A.commit(placeSectionLine({ level: levelGuid(), a, b: q }), { label: t('res.sec.line'), verb: t('model.verb.placed') });
        return;
      }
      if (A.S.tool === 'terrain') { const q = toWorld(p); R.tr.spots.push({ x: q[0], y: q[1], z: R.tr.z + (A.level()?.elevation || 0) }); return; }
      if (A.S.tool === 'pad') {
        const o = A.S.loops && loopAt(A.S.loops.outlines, p);
        if (!o) { A.host.status(t('model.err.nobuilding2'), true); return; }
        if (!R.terrain) { A.host.status(t('res.err.noterrain'), true); return; }
        ensureTin().then(() => A.commit(placePad({ level: levelGuid(), seed: p, ...R.tr.pad }), { label: t('res.pad'), verb: t('model.verb.placed') }));
        return;
      }
      if (A.S.tool === 'paving') {
        if (!R.terrain) { A.host.status(t('res.err.noterrain'), true); return; }
        const pts = R.tr.hard.pts || (R.tr.hard.pts = []);
        const q = snap(p, e, pts).p;
        if (pts.length >= 3 && Math.hypot(q[0] - pts[0][0], q[1] - pts[0][1]) <= A.pv().pxToMm(10)) { finishPaving(); return; }
        pts.push(q);
        return;
      }
      if (A.S.tool === 'framing') {
        const h = frameHostAt(p);
        if (!h) { A.host.status(t('res.err.noframe'), true); return; }
        A.commit(frameHosts({ hosts: [h.guid], ...frameOpts() }), { label: h.label, verb: t('res.verb.framed') });
        return;
      }
      if (A.S.tool === 'railing') {
        const pts = R.rail.pts || (R.rail.pts = []);
        const q = snap(p, e, pts).p;
        if (pts.length && Math.hypot(q[0] - pts[pts.length - 1][0], q[1] - pts[pts.length - 1][1]) < 1) return;
        pts.push(q);
      }
    },
    dbl() {
      if (A.S.tool === 'roofplane' && R.plane.pts) { R.plane.pts.pop(); finishPlane(); }
      if (A.S.tool === 'railing' && R.rail.pts) { R.rail.pts.pop(); finishRailing(); }
      if (A.S.tool === 'paving' && R.tr.hard.pts) { R.tr.hard.pts.pop(); finishPaving(); }
    },
    escape() {
      if (R.plane.pts) { R.plane.pts = null; return true; }
      if (R.stair.start) { R.stair.start = null; R.stair.spec = null; return true; }
      if (R.rail.pts) { R.rail.pts = null; return true; }
      if (R.tr.hard.pts) { R.tr.hard.pts = null; return true; }
      if (R.sec.a) { R.sec.a = null; return true; }
      if (R.elv.a) { R.elv.a = null; return true; }
      if (A.S.tool === 'ellink') { const g = R.el.link; endLink(); const d = R.devs.find((x) => x.guid === g); if (d) A.host.select([A.kb() + d.id]); return true; }
      return false;
    },
    key(e, low) {
      if (e.key === 'Enter' && A.S.tool === 'roofplane' && R.plane.pts) { finishPlane(); A.drawOverlay(); return true; }
      if (e.key === 'Enter' && A.S.tool === 'railing' && R.rail.pts) { finishRailing(); A.drawOverlay(); return true; }
      if (e.key === 'Enter' && A.S.tool === 'paving' && R.tr.hard.pts) { finishPaving(); A.drawOverlay(); return true; }
      if (e.key === 'Enter' && A.S.tool === 'terrain' && R.tr.spots.length) { makeFromSpots(); return true; }
      if (e.key === 'Enter' && A.S.tool === 'ellink') { const g = R.el.link; endLink(); const d = R.devs.find((x) => x.guid === g); if (d) A.host.select([A.kb() + d.id]); return true; }
      return false;
    },
    toolChanged(name) { if (name === 'terrain' || name === 'pad' || name === 'paving') ensureTin().catch(() => {}); R.tr.hard.pts = null; R.tr.padHover = null; R.plane.pts = null; R.plane.at = null; R.found.hover = null; R.counter.hover = null; R.stair.start = null; R.stair.spec = null; R.rail.pts = null; R.el.at = null; if (name !== 'ellink') R.el.link = null; bindRows(); bindElecRow(); const m = A.root.querySelector('[data-res-tools]'); if (m?.open) m.open = false; },
    pick(key) {
      const k = A.kb();
      const rp = R.planes.find((x) => k + x.id === key || x.parts.some((p) => k + p === key));
      if (rp) return { kind: 'roofplane', guid: rp.guid, label: t('res.roofplane') };
      const f = R.founds.find((x) => k + x.id === key || x.parts.some((p) => k + p === key));
      if (f) return { kind: 'foundation', guid: f.guid, label: t('res.fd.kind.' + f.kind) };
      const c = R.counters.find((x) => k + x.id === key);
      if (c) return { kind: 'countertop', guid: c.guid, label: t('res.counter') };
      const st = R.stairs.find((x) => k + x.id === key || x.parts.some((p) => k + p === key));
      if (st) return { kind: 'stair', guid: st.guid, label: t('res.stair') };
      const rl = R.rails.find((x) => k + x.id === key);
      if (rl) return { kind: 'railing', guid: rl.guid, label: t(rl.kind === 'handrail' ? 'res.rail.handrail' : 'res.rail.guard') };
      const dv = R.devs.find((x) => k + x.id === key);
      if (dv) return { kind: 'device', guid: dv.guid, label: dv.tag + ' · ' + t('res.el.kind.' + dv.kind) };   // i18n-ignore: tag and name
      const slx = R.secs.find((x) => k + x.id === key);
      if (slx) return { kind: 'section', guid: slx.guid, label: sectionTitle(slx) };
      if (R.terrain && k + R.terrain.id === key) return { kind: 'terrain', guid: R.terrain.guid, label: t('res.terrain') };
      const pdx = R.pads.find((x) => k + x.id === key);
      if (pdx) return { kind: 'pad', guid: pdx.guid, label: t('res.pad') };
      const hdx = R.hards.find((x) => k + x.id === key);
      if (hdx) return { kind: 'paving', guid: hdx.guid, label: t('res.hard.' + hdx.kind) };
      const fr = R.frames.find((x) => x.parts.some((p) => k + p === key) || k + x.id === key);
      if (fr) {
        const pid = fr.parts.find((p) => k + p === key), w = writer(), ps = pid && w ? w.readPset(pid, 'CadCraft_Lumber') : null;
        const piece = ps ? { guid: w.guidOf(pid), role: ps.Role, size: String(ps.Size || ''), length: Number(ps.Length) * w.unitMm, generated: ps.Generated === true || /^(\.?T\.?|true)$/i.test(String(ps.Generated)), check: ps.Check || '' } : null;
        return { kind: 'framing', guid: fr.guid, label: t('res.fr.of.' + fr.kind), piece };
      }
      return null;
    },
    props(items, kit) {
      if (items.every((x) => x.kind === 'roofplane')) return planeProps(items, kit);
      if (items.every((x) => x.kind === 'foundation')) return foundProps(items, kit);
      if (items.every((x) => x.kind === 'countertop')) return counterProps(items, kit);
      if (items.every((x) => x.kind === 'stair')) return stairProps(items, kit);
      if (items.every((x) => x.kind === 'railing')) return railProps(items, kit);
      if (items.length === 1 && items[0].kind === 'framing') return frameProps(items, kit);
      if (items.length === 1 && ['terrain', 'pad', 'paving'].includes(items[0].kind)) return terrainProps(items, kit);
      if (items.length === 1 && items[0].kind === 'section') return sectionProps(items, kit);
      if (items.every((x) => x.kind === 'device')) return elProps(items, kit);
      return null;
    },
    remove(items) {
      const of = (kind) => items.filter((x) => x.kind === kind).map((x) => x.guid);
      const planes = of('roofplane'), founds = of('foundation'), counters = of('countertop'), stairs = of('stair'), rails = of('railing'), frames = [...new Set(of('framing'))];
      const terr = of('terrain'), pads2 = of('pad'), hards = of('paving'), secs = of('section'), devs = of('device');
      const ops = [planes.length && removeRoofPlanes(planes), founds.length && removeFoundations(founds), counters.length && removeCountertops(counters), stairs.length && removeStairs(stairs), rails.length && removeRailings(rails), frames.length && removeFraming(frames),
        hards.length && removeHardscape(hards), pads2.length && removePads(pads2), terr.length && removeTerrain(terr[0]), secs.length && removeSectionLines(secs), devs.length && removeDevices(devs)].filter(Boolean);
      return (editor) => { let r = null; for (const o of ops) { const r2 = o(editor); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r || { id: null, ids: [] }; };
    },
  };
  A = modelUi.extend(ext);
  // 0.8 GH.3-F (symbols-ui.js): the symbol palette picked an electrical symbol: the Electrical tool takes it, placing is its own click
  A.root.addEventListener('bc-symbol-pick', (e) => { const k = e.detail?.key; if (e.detail?.set !== 'electrical' || !DEVICES[k]) return; R.el.kind = k; R.el.height = null; A.setTool('electrical'); bindElecRow(); A.drawOverlay(); });
  // 0.8 REG.1: the regulations changed (an add-on switched on or off, or its pack): the stairs are checked again and the options row says where the limits come from
  regsTag();
  onRules(() => { regsTag(); if (A.S.on) A.refresh(); });
  A.root.querySelector('[data-res-sheetsopen]')?.addEventListener('click', () => openSheets());
  A.root.querySelector('[data-res-takeoff]')?.addEventListener('click', () => takeoffClick());

  // the Schedules panel gets the cut list
  const schedSel = A.root.querySelector('[data-msched-kind]');
  if (schedSel && !schedSel.querySelector('option[value="lumber"]')) schedSel.append(el('option', { value: 'lumber' }, t('res.fr.sch.lumber')));
  if (schedSel && !schedSel.querySelector('option[value="devices"]')) schedSel.append(el('option', { value: 'devices' }, t('res.el.sch.devicesched')), el('option', { value: 'circuits' }, t('res.el.sch.circuitsched')));
  if (typeof window !== 'undefined') window.bimcraftRes = { state: R, api: A, makeTakeoff };   // for tests
  /**
   * The export set's entry (SuperCad Studio's Finalize and export, SC.7): the drawing set's own PDF writer and the model's own IFC writer, called with options and
   * no dialog; nothing about the model changes (it is not marked saved). sheets() → the set as it would be made now; can(kind) → null | 'empty' | 'unknown';
   * run(kind, o) → [{ name, bytes, sheets? }]. o = { paper: 'iso-a3' | 'a3' | 'arch-d' … (else the Sheets dialog's paper) }
   */
  const paperOf = (k) => { const x = String(k || '').toLowerCase().replace(/^iso-/, '').replace('-', ''); return PAPERS[x] ? x : paperNow(); };
  const stem = () => String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
  const exportSet = {
    kinds: ['pdf', 'ifc'], direct: true,   // run() returns the bytes: no download is started
    sheets() { try { if (!A.ed()) return []; if (!A.S.data) A.prepareWorkspace(); if (!A.S.data) return []; const paper = paperNow(); return makeSet(paper).map((sh) => ({ id: sh.number, number: sh.number, title: sh.title, scale: sh.scale || (sh.views || []).map((v) => v.scale).filter(Boolean)[0] || '', revision: '', paper })); } catch (e) { return []; } },
    can: (kind) => (!exportSet.kinds.includes(kind) ? 'unknown' : A.ed() ? null : 'empty'),
    async run(kind, o = {}) {
      if (!A.ed()) return [];
      if (kind === 'ifc') return [{ name: stem() + '.ifc', bytes: A.ed().save() }];
      if (kind !== 'pdf') return [];
      try { await window.bimcraftPicture?.prepareSheet?.(); } catch (e) { /* the sheets go on without pictures */ }
      const r = ext.setPdfBytes({ paper: paperOf(o.paper), titleBlock: o.titleBlock || null });
      return r ? [{ name: stem() + ' ' + t('res.sh.set') + '.pdf', bytes: r.bytes, sheets: r.list }] : [];
    },
  };
  if (typeof window !== 'undefined') window.bimcraftExport = exportSet;
  return { ext, state: R };
}
