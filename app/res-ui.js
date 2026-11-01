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
import { el } from './ui-util.js';
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
import { parseTjiTable, activeTji, setActiveTji, tjiStatement } from './tji-table.js';   // 0.8 GH.3-E
import { TJI_PSET, FRAME_DEFAULTS, readFraming, frameHosts, changeFraming, removeFraming, keepPiece, lumberList, frameWall, LUMBER } from './res-framing.js';
import { readOpenings, openingType, openingTypeName } from './model-openings.js';
import { wallType, typeName as wallTypeName } from './model-walls.js';
import { roofGeometry, edgeKinds } from './res-roof.js';
import { modelQuantities, buildTakeoff } from './res-takeoff.js';
import { newHandoffId, putHandoff } from './handoff.js';
import { loadTin, readTerrain, readPads, readHardscape, finishedSurface, existingSurface, placeTerrain, changeTerrain, removeTerrain, placePad, changePad, removePads, placeHardscape, changeHardscape, removeHardscape,
  parsePointText, drawingContours, thinToGrid, toModel, autoOffset, landXml, readLandXmlSurfaces, padShape, PAD_DEFAULTS, HARD_KINDS } from './res-terrain.js';
import { modelTriangles, projectView, elevationDirs } from './res-views.js';
import { sectionModel, straightElevationWidth } from './wall-section-graphics.js';
import { readProjectedView, projectedBox } from './projected-views.js';
import { readMaterials } from './project-materials.js';
import { buildSet, setPdf, sheetSvg, PAPERS, readSectionLines, placeSectionLine, changeSectionLine, removeSectionLines, sectionDir } from './res-sheets.js';
import { viewerToPlan } from './model-plan.js';
import { DEVICES, symbolPlan, symbolScale, wallSpot, readDevices, placeDevice, changeDevice, linkLight, removeDevices, deviceSchedule, circuitSchedule, isLight, isSwitch, isBoard } from './res-elec.js';
import { GROUPS as EL_GROUPS, SYMBOLS as EL_SYMBOLS } from './res-elec-symbols.js';
import { counterCabinets, counterRuns, readCountertops, countertopState, placeCountertop, changeCountertop, fitCountertop, removeCountertops, COUNTER_DEFAULTS } from './res-counter.js';
import { classificationIndex } from './roundtrip.js';   // 0.8 EG.56: the keynote legend's classifications

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

export function mountRes(modelUi) {
  if (!modelUi?.extend) return null;
  const R = { planes: [], plane: { pitch: Math.atan(4 / 12) / D2R, base: null, pts: null, at: null }, founds: [], found: { kind: 'slab', hover: null }, stairs: [], stair: { ...STAIR_DEFAULTS, start: null, at: null }, rails: [], rail: { kind: 'guard', height: RAIL_DEFAULTS.height, pts: null, at: null }, frames: [], frame: { ...FRAME_DEFAULTS, show: true, see: false, hover: null }, terrain: null, pads: [], hards: [], tr: { spots: [], z: 0, unit: 'ft', tinReady: false, fin: null, finKey: null, contours: null, pad: { ...PAD_DEFAULTS }, hard: { kind: 'walk', pts: null, at: null } }, devs: [], el: { kind: 'socket.double', circuit: '', height: null, at: null, link: null }, secs: [], sec: { a: null, at: null }, sheets: null, counters: [], counter: { overhang: COUNTER_DEFAULTS.overhang, thickness: COUNTER_DEFAULTS.thickness, hover: null }, cabinets: [] };
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

  // ---- options rows ----
  function bindRows() {
    const root = A.root;
    const pi = root.querySelector('[data-res-rppitch]'), bs = root.querySelector('[data-res-rpbase]');
    if (pi && !pi.dataset.bound) {
      pi.dataset.bound = '1';
      pi.addEventListener('change', () => { const d = parsePitch(pi.value); if (d >= 0 && d < 80) R.plane.pitch = d; else A.host.status(t('model.err.pitch'), true); pi.value = fmtPitch(R.plane.pitch, A.units()); });
      bs.addEventListener('change', () => { const v = bs.value.trim(); if (!v) { R.plane.base = null; return; } const mm = parseLen(v, A.units()); if (Number.isFinite(mm)) R.plane.base = mm; else { A.host.status(t('model.err.length'), true); } bs.value = R.plane.base === null ? '' : L(R.plane.base); });
    }
    const fsp = root.querySelector('[data-res-frsp]');
    if (fsp && !fsp.dataset.bound) {
      fsp.dataset.bound = '1';
      fsp.addEventListener('change', () => { R.frame.spacing = Number(fsp.value); });
      root.querySelector('[data-res-frcorner]')?.addEventListener('change', (e) => { R.frame.corners = e.target.value; });
      root.querySelector('[data-res-frroof]')?.addEventListener('change', (e) => { R.frame.roofMode = e.target.value; });
      root.querySelector('[data-res-frfloor]')?.addEventListener('change', (e) => { R.frame.floorMode = e.target.value; tjiBar?.(); });
      // GH.3-E: TJI has no built-in numbers, so the table is loaded here, before a TJI floor exists (Properties offers it too)
      const flab = root.querySelector('[data-res-frfloor]')?.closest('label');
      if (flab && !root.querySelector('[data-res-tjibar]')) {
        const inp = el('input', { type: 'file', accept: '.json,.csv,application/json,text/csv', hidden: true, 'data-res-tjifile': '' });
        const nm = el('span', { className: 'bc-sub', 'data-res-tjiname': '' });
        const btn = el('button', { type: 'button', className: 'bc-btn', 'data-res-tjiload': '' }, t('tji.load'));
        const bar = el('label', { 'data-res-tjibar': '', hidden: true }, nm, ' ', btn, inp);
        flab.after(bar);
        btn.addEventListener('click', () => inp.click());
        inp.addEventListener('change', () => { if (inp.files[0]) loadTjiFile(inp.files[0], () => { tjiBar(); }); });
        tjiBar = () => {
          bar.hidden = R.frame.floorMode !== 'tji';
          const a = activeTji();
          nm.textContent = a ? a.table.id + ' (' + a.table.edition + ')' : t('tji.help');
          btn.textContent = t(a ? 'tji.replace' : 'tji.load');
        };
        tjiBar();
      }
      root.querySelector('[data-res-frdir]')?.addEventListener('change', (e) => { R.frame.floorDir = e.target.value; });
      root.querySelector('[data-res-frblock]')?.addEventListener('change', (e) => { R.frame.blocking = e.target.checked; });
      root.querySelector('[data-res-frall]')?.addEventListener('click', () => frameAllWalls());
      root.querySelector('[data-res-frshow]')?.addEventListener('click', (e) => { R.frame.show = !R.frame.show; e.currentTarget.setAttribute('aria-pressed', R.frame.show ? 'true' : 'false'); applyFrameVis(); });
      root.querySelector('[data-res-frsee]')?.addEventListener('click', (e) => { R.frame.see = !R.frame.see; e.currentTarget.setAttribute('aria-pressed', R.frame.see ? 'true' : 'false'); applyFrameVis(); });
    }
    if (fsp) {
      const mm = isMetric(A.units());
      const opts = mm ? [[400, '400 mm'], [600, '600 mm']] : [[406.4, '16" o.c.'], [609.6, '24" o.c.']];   // i18n-ignore: lengths
      if (fsp.dataset.units !== A.units()) { fsp.dataset.units = A.units(); fsp.replaceChildren(...opts.map(([v, l]) => el('option', { value: String(v) }, l))); R.frame.spacing = opts[0][0]; }
      fsp.value = String(opts.reduce((b, o) => (Math.abs(o[0] - R.frame.spacing) < Math.abs(b[0] - R.frame.spacing) ? o : b))[0]);
    }
    const tz = root.querySelector('[data-res-trz]');
    if (tz && !tz.dataset.bound) {
      tz.dataset.bound = '1';
      tz.addEventListener('change', () => { const mm = parseLen(tz.value, A.units()); if (Number.isFinite(mm)) R.tr.z = mm; else A.host.status(t('model.err.length'), true); tz.value = L(R.tr.z); });
      root.querySelector('[data-res-trunit]')?.addEventListener('change', (e) => { R.tr.unit = e.target.value; });
      root.querySelector('[data-res-trmake]')?.addEventListener('click', () => makeFromSpots());
      root.querySelector('[data-res-trclear]')?.addEventListener('click', () => { R.tr.spots = []; A.drawOverlay(); });
      const fi = root.querySelector('[data-res-trfile]');
      fi?.addEventListener('change', () => { const f = fi.files?.[0]; fi.value = ''; if (f) groundFromFile(f); });
      root.querySelector('[data-res-trxml]')?.addEventListener('click', () => exportLandXml());
      const pm = (sel, key, min) => { const i = root.querySelector(sel); i?.addEventListener('change', () => { const mm = parseLen(i.value, A.units()); if (mm >= min) R.tr.pad[key] = mm; else A.host.status(t('model.err.length'), true); i.value = L(R.tr.pad[key]); }); };
      pm('[data-res-padmargin]', 'margin', 0); pm('[data-res-paddepth]', 'depth', -2000);
      root.querySelector('[data-res-padslope]')?.addEventListener('change', (e) => { const v = Number(String(e.target.value).replace(/:1$/, '')); if (v >= 1 && v <= 10) R.tr.pad.slope = v; else A.host.status(t('res.err.padslope'), true); e.target.value = R.tr.pad.slope + ':1'; });
      root.querySelector('[data-res-hdkind]')?.addEventListener('change', (e) => { R.tr.hard.kind = e.target.value; });
    }
    if (tz && document.activeElement !== tz) tz.value = L(R.tr.z);
    for (const [sel, v] of [['[data-res-padmargin]', L(R.tr.pad.margin)], ['[data-res-paddepth]', L(R.tr.pad.depth)], ['[data-res-padslope]', R.tr.pad.slope + ':1']]) { const i = root.querySelector(sel); if (i && document.activeElement !== i) i.value = v; }
    const sk = root.querySelector('[data-res-stkind]');
    if (sk && !sk.dataset.bound) {
      sk.dataset.bound = '1';
      const pick = (sel, key) => root.querySelector(sel)?.addEventListener('change', (e) => { R.stair[key] = e.target.value; A.drawOverlay(); });
      pick('[data-res-stkind]', 'kind'); pick('[data-res-stturn]', 'turn'); pick('[data-res-strail]', 'railings');
      const sw = root.querySelector('[data-res-stwidth]');
      // 0.6 round 2: a spiral stair starts 30" wide (its own labelled default) unless a width was typed
      root.querySelector('[data-res-stkind]')?.addEventListener('change', (e) => {
        if (e.target.value === 'spiral' && R.stair.width === STAIR_DEFAULTS.width) R.stair.width = SPIRAL_DEFAULTS.width;
        else if (e.target.value !== 'spiral' && R.stair.width === SPIRAL_DEFAULTS.width) R.stair.width = STAIR_DEFAULTS.width;
        if (sw) sw.value = L(R.stair.width);
        if (A.S.tool === 'stair' && A.root.querySelector('[data-model-hint]')) A.root.querySelector('[data-model-hint]').textContent = t(e.target.value === 'spiral' ? 'comforts.hint.spiral' : 'res.hint.stair');
      });
      sw?.addEventListener('change', () => { const mm = parseLen(sw.value, A.units()); if (mm >= 500) R.stair.width = mm; else A.host.status(t('res.err.stairwidth'), true); sw.value = L(R.stair.width); A.drawOverlay(); });
      root.querySelector('[data-res-rlkind]')?.addEventListener('change', (e) => { R.rail.kind = e.target.value; R.rail.height = e.target.value === 'handrail' ? 36 * 25.4 : RAIL_DEFAULTS.height; const rh = root.querySelector('[data-res-rlheight]'); if (rh) rh.value = L(R.rail.height); });
      const rh = root.querySelector('[data-res-rlheight]');
      rh?.addEventListener('change', () => { const mm = parseLen(rh.value, A.units()); if (mm >= 300) R.rail.height = mm; else A.host.status(t('model.err.length'), true); rh.value = L(R.rail.height); });
    }
    const swi = root.querySelector('[data-res-stwidth]'), rhi = root.querySelector('[data-res-rlheight]');
    if (swi && document.activeElement !== swi) swi.value = L(R.stair.width);
    if (rhi && document.activeElement !== rhi) rhi.value = L(R.rail.height);
    const co = root.querySelector('[data-res-ctover]'), ct = root.querySelector('[data-res-ctthick]');
    if (co && !co.dataset.bound) {
      co.dataset.bound = '1';
      const len = (input, key, min) => input.addEventListener('change', () => { const mm = parseLen(input.value, A.units()); if (mm >= min) R.counter[key] = mm; else A.host.status(t('model.err.length'), true); input.value = L(R.counter[key]); });
      len(co, 'overhang', 0); len(ct, 'thickness', 5);
    }
    if (co && document.activeElement !== co) co.value = L(R.counter.overhang);
    if (ct && document.activeElement !== ct) ct.value = L(R.counter.thickness);
    const fk = root.querySelector('[data-res-fdkind]');
    if (fk && !fk.dataset.bound) { fk.dataset.bound = '1'; fk.addEventListener('change', () => { R.found.kind = fk.value; A.drawOverlay(); }); }
    if (pi && document.activeElement !== pi) pi.value = fmtPitch(R.plane.pitch, A.units());
    if (bs && document.activeElement !== bs) { bs.value = R.plane.base === null ? '' : L(R.plane.base); bs.placeholder = t('res.rp.base.auto'); }
  }

  /** After a reload: the element (found again by GlobalId in `list()`) picked by its first part — parts are made again. */
  const again = (list, guid) => () => { const x = list().find((y) => y.guid === guid); return x?.parts.length ? [A.kb() + x.parts[0]] : null; };

  // ---- roof planes (RC.1) ----
  function planeClick(p, e) {
    const pts = R.plane.pts || (R.plane.pts = []);
    const s = snap(p, e, pts).p;
    if (pts.length >= 3 && Math.hypot(s[0] - pts[0][0], s[1] - pts[0][1]) <= A.pv().pxToMm(10)) { finishPlane(); return; }
    if (pts.length && Math.hypot(s[0] - pts[pts.length - 1][0], s[1] - pts[pts.length - 1][1]) < 1) return;
    pts.push(s);
  }
  function finishPlane() {
    const pts = R.plane.pts;
    R.plane.pts = null;
    if (!pts || pts.length < 3) { A.host.status(t('res.err.plane'), true); return; }
    A.commit(placeRoofPlane({ level: levelGuid(), points: pts, pitch: R.plane.pitch, base: R.plane.base ?? undefined }), { label: t('res.roofplane'), verb: t('model.verb.placed') });
  }
  function planeOverlay(o) {
    const pts = R.plane.pts;
    if (A.S.tool !== 'roofplane') return;
    const cur = R.plane.at;
    if (cur) o.snap = cur;
    if (!pts || !pts.length) { if (cur) o.hud = { p: cur.p, text: t('res.rp.hud.start') }; return; }
    const all = cur ? [...pts, cur.p] : pts.slice();
    for (const q of pts) o.points.push(q);
    for (let i = 0; i + 1 < all.length; i++) (i === 0 ? o.lines : o.dashed).push([all[i][0], all[i][1], all[i + 1][0], all[i + 1][1]]);
    if (all.length >= 3) o.dashed.push([all[all.length - 1][0], all[all.length - 1][1], all[0][0], all[0][1]]);
    if (cur) {
      const a = pts[pts.length - 1], b = cur.p;
      o.dims.push({ a, b, off: A.pv().pxToMm(16), text: L(Math.hypot(b[0] - a[0], b[1] - a[1])) });
      o.hud = { p: b, text: (pts.length === 1 ? t('res.rp.hud.eave') : fmtPitch(R.plane.pitch, A.units())) + (pts.length >= 3 && Math.hypot(b[0] - pts[0][0], b[1] - pts[0][1]) <= A.pv().pxToMm(10) ? '\n' + t('model.hud.close') : '') };
    }
  }
  function planesScene(scene) {
    const lv = A.level();
    if (!lv) return;
    const k = A.kb(), levels = A.S.data?.levels || [];
    for (const rp of R.planes) {
      // drawn on the level it sits on (the one above the level it was drawn on), like the automatic roofs
      if (rp.storey !== lv.id || rp.points.length < 3) continue;
      const drawnOn = levels.find((l) => l.guid === rp.level);
      if (!drawnOn) continue;
      const P = rp.points, eave = [P[0][0], P[0][1], P[1][0], P[1][1]];
      const dashed = P.map((p, i) => [p[0], p[1], P[(i + 1) % P.length][0], P[(i + 1) % P.length][1]]).slice(1);
      // an arrow up the slope from the eave's middle
      const f = planeFrame(P), m = [(P[0][0] + P[1][0]) / 2, (P[0][1] + P[1][1]) / 2], len = Math.min(900, Math.hypot(P[1][0] - P[0][0], P[1][1] - P[0][1]) / 3);
      const tip = [m[0] + f.n[0] * len, m[1] + f.n[1] * len], hw = len / 5;
      const thin = [eave, [m[0], m[1], tip[0], tip[1]], [tip[0], tip[1], tip[0] - f.n[0] * hw + f.u[0] * hw / 2, tip[1] - f.n[1] * hw + f.u[1] * hw / 2], [tip[0], tip[1], tip[0] - f.n[0] * hw - f.u[0] * hw / 2, tip[1] - f.n[1] * hw - f.u[1] * hw / 2]];
      scene.symbols.unshift({ key: k + rp.id, dashed, thin, poly: P, roof: true });   // first: a plane over a roof picks before it
    }
  }
  function planeProps(items, kit) {
    if (items.length !== 1) return null;
    const rp = R.planes.find((x) => x.guid === items[0].guid);
    if (!rp) return null;
    const run = (ch) => A.commit(changeRoofPlane(rp.guid, ch), { ...kit.one(t('res.roofplane')), reselect: again(() => R.planes, rp.guid) });
    const pi = el('input', { type: 'text', className: 'bc-input bc-num', value: fmtPitch(rp.pitch, A.units()), 'data-mp-rppitch': '' });
    pi.addEventListener('change', () => { const d = parsePitch(pi.value); if (d >= 0 && d < 80) run({ pitch: d }); else { A.host.status(t('model.err.pitch'), true); pi.value = pi.defaultValue; } });
    pi.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); pi.blur(); } });
    kit.field(t('model.rf.pitch'), pi);
    kit.field(t('res.rp.base'), kit.lenInput(rp.base, 'data-mp-rpbase', (mm) => run({ base: mm }), { any: true }));
    kit.field(t('model.prop.thickness'), kit.lenInput(rp.thickness, 'data-mp-rpthick', (mm) => run({ thickness: mm }), { min: 10 }));
    const P = rp.points;
    let a = 0; for (let i = 0; i < P.length; i++) { const p = P[i], q = P[(i + 1) % P.length]; a += p[0] * q[1] - p[1] * q[0]; }
    kit.rows.push(el('dt', {}, t('res.rp.area')), el('dd', {}, fmtArea(Math.abs(a / 2) / Math.cos(rp.pitch * D2R), A.units())));
    return { title: t('res.roofplane') };
  }

  // ---- foundations (RC.2) ----
  const pp = (poly) => poly.map((p, i) => [p[0], p[1], poly[(i + 1) % poly.length][0], poly[(i + 1) % poly.length][1]]);
  function foundHover(p) {
    const loops = A.S.loops, o = loops && loopAt(loops.outlines, p);
    if (!o) return null;
    const w = writer(), loads = w ? loadsOn(w, A.S.level, { walls: A.wallsHere() }) : { stories: 1, heavy: false };
    const prm = foundationParams(R.found.kind, {}, loads);
    return { seed: p, outline: o.poly, prm, geo: foundationGeometry(o.poly, prm) };
  }
  function foundScene(scene) {
    const k = A.kb();
    for (const f of R.founds) {
      if (f.storey !== A.S.level || !f.geo) continue;
      const dashed = [], thin = [];
      for (const g of f.geo) {
        if (g.role === 'footing' || g.role === 'edge') { dashed.push(...pp(g.outer), ...pp(g.inner)); }
        else if (g.role === 'stem') { thin.push(...pp(g.outer), ...pp(g.inner)); }
      }
      const outer = f.geo.find((g) => g.role === 'footing' || g.role === 'edge')?.outer || f.outline;
      scene.symbols.push({ key: k + f.id, dashed, thin, poly: outer, roof: true });
    }
  }
  function foundOverlay(o) {
    if (A.S.tool !== 'foundation' || !R.found.hover) return;
    const h = R.found.hover;
    o.walls.push(h.outline);
    for (const g of h.geo) if (g.role !== 'slab') o.dashed.push(...pp(g.outer), ...pp(g.inner));
    o.hud = { p: labelPoint(h.outline), text: t('res.fd.hud', { kind: t('res.fd.kind.' + h.prm.kind), w: L(h.prm.footW), d: L(h.prm.footD) }) };
  }
  function foundProps(items, kit) {
    if (items.length !== 1) return null;
    const f = R.founds.find((x) => x.guid === items[0].guid);
    if (!f) return null;
    const run = (ch) => A.commit(changeFoundation(f.guid, ch), { ...kit.one(t('res.fd.kind.' + f.kind)), reselect: again(() => R.founds, f.guid) });
    const p = f.prm;
    kit.field(t('res.fd.kind'), kit.select(FOUNDATION_KINDS.map((x) => [x, t('res.fd.kind.' + x)]), f.kind, 'data-mp-fdkind', (v) => run({ kind: v })));
    const size = (label, k, attr, show = true) => {
      if (!show) return;
      const inp = kit.lenInput(p[k], attr, (mm) => run({ [k]: mm }), { allowZero: true });
      kit.field(label, inp, p.auto[k] ? el('span', { className: 'bc-sub' }, ' ' + t('res.fd.auto')) : null);
    };
    const k = f.kind;
    size(t('res.fd.footw'), 'footW', 'data-mp-fdfootw', k !== 'slab');
    size(t('res.fd.footd'), 'footD', 'data-mp-fdfootd', k !== 'slab');
    size(t('res.fd.bottom'), 'bottom', 'data-mp-fdbottom', k === 'stemslab' || k === 'crawl');
    size(t('res.fd.stemt'), 'stemT', 'data-mp-fdstemt', k !== 'slab');
    size(t('res.fd.stemdrop'), 'stemDrop', 'data-mp-fdstemdrop', k === 'crawl' || k === 'basement');
    size(t('res.fd.basementh'), 'basementH', 'data-mp-fdbasementh', k === 'basement');
    size(t('res.fd.slabt'), 'slabT', 'data-mp-fdslabt', k !== 'crawl');
    size(t('res.fd.edgew'), 'edgeW', 'data-mp-fdedgew', k === 'slab');
    size(t('res.fd.edged'), 'edgeD', 'data-mp-fdedged', k === 'slab');
    kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-fdnote': '' }, t('res.fd.autonote', { n: f.loads.stories })));
    return { title: t('res.fd.kind.' + f.kind) };
  }

  // ---- countertops (RC.4) ----
  const inRun = (p, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > p[1]) !== (yj > p[1]) && p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi) c = !c; } return c; };
  function counterHover(p) {
    const runs = counterRuns(R.cabinets.filter((cb) => cb.storey === A.S.level), { overhang: R.counter.overhang });
    const run = runs.find((r) => inRun(p, r.poly));
    return run ? { seed: p, run, have: R.counters.find((c) => c.storey === A.S.level && c.state?.run && inRun(c.seed, run.poly)) || null } : null;
  }
  function counterScene(scene) {
    const k = A.kb();
    for (const c of R.counters) {
      if (c.storey !== A.S.level || !c.state?.run) continue;
      const P = c.state.run.poly;
      // out of date (a cabinet placed or removed since): dashed, until it is fitted again
      scene.symbols.push({ key: k + c.id, poly: P, [c.state.stale ? 'dashed' : 'thin']: pp(P) });
    }
  }
  function counterOverlay(o) {
    if (A.S.tool !== 'countertop' || !R.counter.hover) return;
    const h = R.counter.hover;
    o.walls.push(h.run.poly);
    o.hud = { p: labelPoint(h.run.poly), text: t(h.have ? 'res.ct.hud.fit' : 'res.ct.hud', { n: h.run.cabinets.length, area: fmtArea(h.run.area, A.units()) }) };
  }
  function counterProps(items, kit) {
    if (items.length !== 1) return null;
    const c = R.counters.find((x) => x.guid === items[0].guid);
    if (!c) return null;
    const run = (ch) => A.commit(changeCountertop(c.guid, ch), { ...kit.one(t('res.counter')), reselect: () => { const x = R.counters.find((y) => y.guid === c.guid); return x ? [A.kb() + x.id] : null; } });
    kit.field(t('res.ct.overhang'), kit.lenInput(c.overhang, 'data-mp-ctover', (mm) => run({ overhang: mm }), { allowZero: true }));
    kit.field(t('model.prop.thickness'), kit.lenInput(c.thickness, 'data-mp-ctthick', (mm) => run({ thickness: mm }), { min: 5 }));
    if (c.state?.run) kit.rows.push(el('dt', {}, t('res.ct.area')), el('dd', {}, fmtArea(c.state.run.area, A.units())), el('dt', {}, t('res.ct.cabinets')), el('dd', {}, String(c.state.run.cabinets.length)));
    const fit = kit.button(t('res.ct.fit'), 'data-mp-ctfit', () => A.commit(fitCountertop(c.guid), kit.one(t('res.counter'))));
    if (!c.state?.stale) fit.disabled = true;
    kit.field(t('res.ct.cabinetsnow'), el('span', {}, el('span', { className: 'bc-sub' }, t(c.state?.gone ? 'res.ct.gone' : c.state?.stale ? 'res.ct.stale' : 'res.ct.fits') + ' '), fit));
    return { title: t('res.counter') };
  }

  // ---- stairs and railings (RC.3) ----
  const CUT = 1200;   // the plan's cut height (model-ui.js): steps above it are dashed
  function stairSpecAt(p, e) {
    const st = R.stair;
    if (!st.start) return null;
    const q = snap(p, e, [st.start]).p;
    const dx = q[0] - st.start[0], dy = q[1] - st.start[1];
    if (Math.hypot(dx, dy) < 50) return null;
    const lv = A.level(), above = A.levelAbove();
    const height = above ? above.elevation - lv.elevation : lv.height;
    return { kind: st.kind, turn: st.turn, width: st.width, railings: st.railings, start: st.start, angle: Math.atan2(dy, dx) * 180 / Math.PI, height, ...packStair(st.kind) };
  }
  /** 0.8 REG.1: a new stair starts from the riser and tread the regulations add-on gives (a spiral keeps its own labelled defaults; none without an add-on). */
  function packStair(kind) {
    return kind === 'spiral' ? {} : (rules()?.stairStart?.(kind) || {});
  }
  function stairSymbols(L, onTop, k, key) {
    const dashed = [], thin = [], lines = [];
    for (const pc of L.pieces) for (const tr2 of (pc.kind === 'landing' ? [{ poly: pc.poly, z: pc.z }] : pc.treads || [])) (onTop || tr2.z <= CUT ? thin : dashed).push(...pp(tr2.poly));   // a spiral's post has no treads
    for (const o of L.outline) lines.push(...pp(o));
    // the walk line with an arrow at its end (up on the bottom level, down from the top)
    const W = onTop ? L.walk.slice().reverse() : L.walk;
    for (let i = 0; i + 1 < W.length; i++) thin.push([W[i][0], W[i][1], W[i + 1][0], W[i + 1][1]]);
    const b = W[W.length - 1], a = W[W.length - 2] || W[0], dl = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, ux = (b[0] - a[0]) / dl, uy = (b[1] - a[1]) / dl, hs = 200;
    thin.push([b[0], b[1], b[0] - ux * hs - uy * hs / 2, b[1] - uy * hs + ux * hs / 2], [b[0], b[1], b[0] - ux * hs + uy * hs / 2, b[1] - uy * hs - ux * hs / 2]);
    return { key, lines, thin, dashed, poly: L.outline[0] };
  }
  function stairScene(scene) {
    const k = A.kb(), levels = A.S.data?.levels || [];
    for (const st of R.stairs) {
      if (!st.layout) continue;
      const i = levels.findIndex((l) => l.id === st.storey), top = st.topLevel ? levels.find((l) => l.guid === st.topLevel) : levels[i + 1];
      if (st.storey === A.S.level) scene.symbols.push(stairSymbols(st.layout, false, k, k + st.id));
      else if (top && top.id === A.S.level) scene.symbols.push(stairSymbols(st.layout, true, k, k + st.id));
    }
    for (const r of R.rails) {
      if (r.storey !== A.S.level || r.points.length < 2) continue;
      const lines = [];
      for (let i = 0; i + 1 < r.points.length; i++) lines.push([r.points[i][0], r.points[i][1], r.points[i + 1][0], r.points[i + 1][1]]);
      scene.symbols.push({ key: k + r.id, lines, poly: bandOf(r.points, 60) });
    }
  }
  /** A thin polygon round a path (for picking a railing on the plan). */
  function bandOf(P, h) {
    const left = [], right = [];
    for (let i = 0; i < P.length; i++) {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)], d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, n = [-(b[1] - a[1]) / d, (b[0] - a[0]) / d];
      left.push([P[i][0] + n[0] * h, P[i][1] + n[1] * h]); right.push([P[i][0] - n[0] * h, P[i][1] - n[1] * h]);
    }
    return [...left, ...right.reverse()];
  }
  function stairOverlay(o) {
    if (A.S.tool === 'stair') {
      const st = R.stair;
      if (st.at) o.snap = st.at;
      if (!st.start) { if (st.at) o.hud = { p: st.at.p, text: t('res.st.hud.start') }; return; }
      o.points.push(st.start);
      const spec = st.spec;
      if (!spec) return;
      const L2 = stairLayout(spec);
      if (L2.error) { o.hud = { p: st.at?.p || st.start, text: t(L2.error) }; return; }
      const sym = stairSymbols(L2, false, 0, null);
      o.symbols.push({ lines: sym.lines, thin: [...sym.thin, ...sym.dashed] });
      for (const side of L2.sides) for (let i = 0; i + 1 < side.length; i++) o.dashed.push([side[i][0], side[i][1], side[i + 1][0], side[i + 1][1]]);
      o.hud = { p: st.at?.p || st.start, text: t('res.st.hud', { n: L2.n, r: L(L2.riser), m: L2.treads, d: L(L2.tread) }) };
    }
    if (A.S.tool === 'railing') {
      const rl = R.rail;
      if (rl.at) o.snap = rl.at;
      const pts = rl.pts || [];
      for (const q of pts) o.points.push(q);
      const all = rl.at ? [...pts, rl.at.p] : pts;
      for (let i = 0; i + 1 < all.length; i++) o.lines.push([all[i][0], all[i][1], all[i + 1][0], all[i + 1][1]]);
      if (rl.at) o.hud = { p: rl.at.p, text: pts.length ? L(all.slice(1).reduce((s2, q, i) => s2 + Math.hypot(q[0] - all[i][0], q[1] - all[i][1]), 0)) : t('res.rl.hud.start') };
    }
  }
  function finishRailing() {
    const pts = R.rail.pts;
    R.rail.pts = null;
    if (!pts || pts.length < 2) { A.host.status(t('res.err.rail'), true); return; }
    A.commit(placeRailing({ level: levelGuid(), points: pts, height: R.rail.height, kind: R.rail.kind }), { label: t(R.rail.kind === 'handrail' ? 'res.rail.handrail' : 'res.rail.guard'), verb: t('model.verb.placed') });
  }
  const fmtRule = (v, unit) => (unit === 'pct' ? (Math.round(v * 10) / 10) + ' %' : L(v));
  /** What the regulations add-on says about this stair's checks, in its words; null without one (the labelled-defaults line is used). */
  function regsStairLine(st, Lt) {
    return rules()?.stairLine?.(st, Lt, fmtRule) || null;
  }
  /** The stair options row says where the limits come from (the add-on's words; empty without one). */
  function regsTag() {
    const el2 = A?.root.querySelector('[data-res-rules-tag]');
    if (el2) el2.textContent = rules()?.tag?.() || '';
  }
  function stairProps(items, kit) {
    if (items.length !== 1) return null;
    const st = R.stairs.find((x) => x.guid === items[0].guid);
    if (!st) return null;
    const run = (ch) => A.commit(changeStair(st.guid, ch), { ...kit.one(t('res.stair')), reselect: again(() => R.stairs, st.guid) });
    kit.field(t('res.st.kind'), kit.select(STAIR_KINDS.map((x) => [x, stairKindName(x)]), st.kind, 'data-mp-stkind', (v) => run({ kind: v })));
    if (st.kind !== 'straight') kit.field(t('res.st.turn'), kit.select([['left', t('res.st.turn.left')], ['right', t('res.st.turn.right')]], st.turn, 'data-mp-stturn', (v) => run({ turn: v })));
    kit.field(t('res.st.width'), kit.lenInput(st.width, 'data-mp-stwidth', (mm) => run({ width: mm }), { min: 500 }));
    kit.field(t('res.st.risermax'), kit.lenInput(st.riserMax, 'data-mp-strisermax', (mm) => run({ riserMax: mm }), { min: 100 }));
    kit.field(t('res.st.tread'), kit.lenInput(st.tread, 'data-mp-sttread', (mm) => run({ tread: mm }), { min: st.kind === 'spiral' ? 100 : 150 }), st.kind === 'spiral' ? el('span', { className: 'bc-sub' }, ' ' + t('comforts.st.onwalk')) : null);
    if (st.kind === 'spiral') kit.field(t('comforts.st.post'), kit.lenInput(st.post, 'data-mp-stpost', (mm) => run({ post: mm }), { min: 40 }));
    kit.field(t('res.st.railings'), kit.select(['both', 'left', 'right', 'none'].map((x) => [x, t('res.st.rail.' + x)]), st.railings, 'data-mp-strail', (v) => run({ railings: v })));
    if (st.railings !== 'none') kit.field(t('res.st.railheight'), kit.lenInput(st.railHeight, 'data-mp-strailh', (mm) => run({ railHeight: mm }), { min: 300 }));
    const wl = el('input', { type: 'checkbox', checked: !!st.well, 'data-mp-stwell': '' });
    wl.addEventListener('change', () => run({ well: wl.checked }));
    kit.field(t('res.st.well'), el('label', {}, wl, ' ' + t('res.st.well.on')));
    const Lt = st.layout;
    if (Lt) {
      kit.rows.push(el('dt', {}, t('res.st.risers')), el('dd', { 'data-mp-strisers': '' }, t('res.st.risers.v', { n: Lt.n, r: L(Lt.riser) })), el('dt', {}, t('res.st.treads')), el('dd', {}, t('res.st.risers.v', { n: Lt.treads, r: L(Lt.tread) })));
      const sp = st.kind === 'spiral';   // 0.6 round 2: a spiral stair's labelled defaults are its own
      const bad = Object.entries(Lt.checks).filter(([, ok]) => !ok).map(([k2]) => t((sp ? 'comforts.st.check.' : 'res.st.check.') + k2));
      const packLine = sp ? null : regsStairLine(st, Lt);   // 0.8 REG.1: worded from the active pack's own numbers
      kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-stchecks': '' }, packLine || (bad.length ? t('res.st.checks.bad', { list: bad.join(', ') }) : t(sp ? 'comforts.st.checks.ok' : 'res.st.checks.ok'))));
    }
    return { title: t('res.stair') };
  }
  function railProps(items, kit) {
    if (items.length !== 1) return null;
    const r = R.rails.find((x) => x.guid === items[0].guid);
    if (!r) return null;
    const run = (ch) => A.commit(changeRailing(r.guid, ch), kit.one(t('res.rail.guard')));
    kit.field(t('res.rl.kind'), kit.select([['guard', t('res.rail.guard')], ['handrail', t('res.rail.handrail')]], r.kind, 'data-mp-rlkind', (v) => run({ kind: v })));
    kit.field(t('res.rl.height'), kit.lenInput(r.height, 'data-mp-rlheight', (mm) => run({ height: mm }), { min: 300 }));
    kit.field(t('res.rl.base'), kit.lenInput(r.base, 'data-mp-rlbase', (mm) => run({ base: mm }), { any: true }));
    const parts = railingParts(r.points.map(([x, y]) => [x, y, r.base]), { height: r.height });
    kit.rows.push(el('dt', {}, t('res.rl.length')), el('dd', {}, L(parts.length)), el('dt', {}, t('res.rl.balusters')), el('dd', { 'data-mp-rlbal': '' }, String(parts.balusters.length)));
    return { title: t(r.kind === 'handrail' ? 'res.rail.handrail' : 'res.rail.guard') };
  }

  // ---- framing (RC.9) ----
  function frameHostAt(p) {
    const tol = A.pv().pxToMm(14);
    let best = null;
    for (const w of A.wallsHere()) {
      const L2 = w.len, u = [(w.b[0] - w.a[0]) / L2, (w.b[1] - w.a[1]) / L2], n = [-u[1], u[0]];
      const s2 = (p[0] - w.a[0]) * u[0] + (p[1] - w.a[1]) * u[1], d = Math.abs((p[0] - w.a[0]) * n[0] + (p[1] - w.a[1]) * n[1]);
      if (s2 < -tol || s2 > L2 + tol) continue;
      const sc = Math.max(0, d - w.t / 2);
      if (sc <= tol && (!best || sc < best.sc)) best = { sc, kind: 'wall', guid: w.guid, poly: A.S.outlines.get(w.guid), label: t('res.fr.of.wall') };
    }
    if (best) return best;
    const D = A.S.data?.derived;
    for (const rf of (D?.roofs || []).filter((x) => x.storey === A.S.level || (A.S.data.levels.find((l) => l.guid === x.walls)?.id === A.S.level))) {
      const lv = A.S.data.levels.find((l) => l.guid === rf.walls), loops = lv && A.loopsOf(lv.id), o = loops && loopAt(loops.outlines, rf.seed);
      if (o && inRun(p, o.poly) && rf.storey === A.S.level) return { kind: 'roof', guid: rf.guid, poly: o.poly, label: t('res.fr.of.roof') };
    }
    for (const fl of (D?.floors || []).filter((x) => x.storey === A.S.level)) {
      const loop = A.S.loops && loopAt(fl.mode === 'building' ? A.S.loops.outlines : A.S.loops.rooms, fl.seed);
      if (loop && inRun(p, loop.poly)) return { kind: 'floor', guid: fl.guid, poly: loop.poly, label: t('res.fr.of.floor') };
    }
    return null;
  }
  const frameOpts = () => ({ spacing: R.frame.spacing, corners: R.frame.corners, blocking: R.frame.blocking, roofMode: R.frame.roofMode, floorMode: R.frame.floorMode, floorDir: R.frame.floorDir });
  function frameAllWalls() {
    const hosts = A.wallsHere().filter((w) => (w.assembly || wallType(w.typeKey))?.layers.some((l) => l.mat === 'studs')).map((w) => w.guid);
    if (!hosts.length) { A.host.status(t('res.err.noframe'), true); return; }
    A.commit(frameHosts({ hosts, ...frameOpts() }), { label: t('res.fr.walls', { n: hosts.length }), verb: t('res.verb.framed') });
  }
  /** Framing shown or hidden, walls / floors / roofs see-through: applied to the 3D view after every reload. */
  function applyFrameVis() {
    const v = A.host.viewer?.();
    if (!v?.vis) return;
    const k = A.kb(), framing = [], hosts = [];
    for (const fr of R.frames) { for (const p of fr.parts) framing.push(k + p); }
    const D = A.S.data;
    for (const fr of R.frames) {
      const wall = D?.walls.find((x) => x.guid === fr.host);
      if (wall) { hosts.push(k + wall.id); continue; }
      const fl = D?.derived?.floors.find((x) => x.guid === fr.host);
      if (fl) { hosts.push(k + fl.id); continue; }
      const rf = D?.derived?.roofs.find((x) => x.guid === fr.host);
      if (rf) for (const p of rf.parts) hosts.push(k + p);
    }
    const have = v.allKeys?.() || null, ok = (key) => !have || have.has(key);
    v.vis.unhide([...framing, ...hosts]);
    const hide = [...(R.frame.show ? [] : framing), ...(R.frame.see ? hosts : [])].filter(ok);
    if (hide.length) v.vis.hide(hide);
    v.applyVisibility();
  }
  function frameScene(scene) {
    if (!R.frame.show) return;
    const k = A.kb();
    for (const fr of R.frames) {
      if (fr.kind !== 'wall' || fr.storey !== A.S.level || !fr.wallPieces) continue;
      const thin = [];
      for (const pc of fr.wallPieces.pieces) {
        if (!pc.box || !/^(stud|king|jack)/.test(pc.role) || pc.box.z0 > 1200 || pc.box.z1 < 1200) continue;   // what the plan's cut passes through
        const b = pc.box, P = fr.wallPieces.toPlan, q = [P(b.x0, b.y0), P(b.x1, b.y0), P(b.x1, b.y1), P(b.x0, b.y1)];
        thin.push(...pp(q));
      }
      if (thin.length) scene.symbols.push({ key: null, thin });
    }
  }
  function frameOverlay(o) {
    if (A.S.tool !== 'framing' || !R.frame.hover) return;
    const h = R.frame.hover;
    if (h.poly) o.walls.push(h.poly);
    const have = R.frames.find((x) => x.host === h.guid);
    o.hud = { p: h.poly ? labelPoint(h.poly) : [0, 0], text: t(have ? 'res.fr.hud.again' : 'res.fr.hud', { what: h.label }) };
  }
  function frameProps(items, kit) {
    const it = items[0];
    const fr = R.frames.find((x) => x.guid === it.guid);
    if (!fr) return null;
    const run = (ch) => A.commit(changeFraming(fr.guid, ch), { ...kit.one(t('res.fr.of.' + fr.kind)), reselect: again(() => R.frames, fr.guid) });
    const mm = isMetric(A.units()), opts = mm ? [['400', '400 mm'], ['600', '600 mm']] : [['406.4', '16" o.c.'], ['609.6', '24" o.c.']];   // i18n-ignore: lengths
    const cur = opts.reduce((b, o) => (Math.abs(Number(o[0]) - fr.spacing) < Math.abs(Number(b[0]) - fr.spacing) ? o : b))[0];
    kit.field(t('res.fr.spacing'), kit.select(opts, cur, 'data-mp-frsp', (v) => run({ spacing: Number(v) })));
    if (fr.kind === 'wall') {
      kit.field(t('res.fr.corners'), kit.select([['three-stud', t('res.fr.corner.three')], ['california', t('res.fr.corner.california')]], fr.corners, 'data-mp-frcorner', (v) => run({ corners: v })));
      const bl = el('input', { type: 'checkbox', checked: !!fr.blocking, 'data-mp-frblock': '' });
      bl.addEventListener('change', () => run({ blocking: bl.checked }));
      kit.field(t('res.fr.blocking'), el('label', {}, bl, ' ' + t('res.fr.blocking.on')));
    }
    if (fr.kind === 'roof') kit.field(t('res.fr.roofmode'), kit.select([['stick', t('res.fr.roof.stick')], ['truss', t('res.fr.roof.truss')]], fr.roofMode, 'data-mp-frroof', (v) => run({ roofMode: v })));
    if (fr.kind === 'floor') {
      kit.field(t('res.fr.floormode'), kit.select([['lumber', t('res.fr.floor.lumber')], ['tji', t('res.fr.floor.tji')]], fr.floorMode, 'data-mp-frfloor', (v) => run({ floorMode: v })));
      kit.field(t('res.fr.floordir'), kit.select([['auto', t('res.fr.dir.auto')], ['x', t('res.fr.dir.x')], ['y', t('res.fr.dir.y')]], fr.floorDir, 'data-mp-frdir', (v) => run({ floorDir: v })));
      if (fr.floorMode === 'tji') tjiRows(fr, kit, run);
    }
    const q = fr.qty || {};
    kit.rows.push(el('dt', {}, t('res.fr.pieces')), el('dd', { 'data-mp-frpieces': '' }, String(q.Pieces ?? fr.parts.length)), el('dt', {}, t('res.fr.bf')), el('dd', {}, String(Math.round(Number(q.BoardFeet) || 0))));
    if (fr.notes && fr.notes !== 'ok') kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-frnotes': '' }, fr.notes.split(',').map((x) => t('res.fr.note.' + x)).join(' ')));
    if (it.piece) {
      const pc = it.piece;
      kit.rows.push(el('dt', {}, t('res.fr.piece')), el('dd', { 'data-mp-frpiece': '' }, t('res.fr.role.' + pc.role) + ', ' + sizeLabel(pc.size) + ', ' + L(pc.length)));
      if (pc.check) kit.rows.push(el('dt', {}, ''), el('dd', { className: 'bc-sub' }, pc.check));
      const keep = kit.button(t(pc.generated ? 'res.fr.keep' : 'res.fr.kept'), 'data-mp-frkeep', () => A.commit(keepPiece(pc.guid), kit.one(t('res.fr.piece'))));
      if (!pc.generated) keep.disabled = true;
      kit.field(t('res.fr.keepq'), keep);
    }
    kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub' }, t('res.fr.note')));
    return { title: t('res.fr.of.' + fr.kind) };
  }
  // ---- GH.3-E: the joist maker's table the person loads, the load case, and the assumptions the layout states ----
  const TJI_KEY = 'cc-bimcraft:tji-table';
  const saveTji = () => { try { const a = activeTji(); if (a) localStorage.setItem(TJI_KEY, JSON.stringify({ text: a.raw, caseId: a.caseId })); else localStorage.removeItem(TJI_KEY); } catch (e) { /* private window: the table stays for this page */ } };
  try {
    const kept = JSON.parse(localStorage.getItem(TJI_KEY) || 'null');
    const r = kept && parseTjiTable(kept.text);
    if (r?.ok) { setActiveTji(r.table, kept.caseId); activeTji().raw = kept.text; }
  } catch (e) { /* nothing kept */ }
  function loadTjiFile(file, again) {
    const rd = new FileReader();
    rd.onload = () => {
      const text = String(rd.result || ''), r = parseTjiTable(text);
      if (!r.ok) { A.host.status(r.errors.slice(0, 3).map((x) => t(x.key, x.fill)).join(' '), true); return; }
      setActiveTji(r.table); activeTji().raw = text; saveTji();
      A.host.status(t('tji.loaded', { table: r.table.id, n: r.table.rows.length }));
      again(); tjiBar?.();
    };
    rd.readAsText(file);
  }
  function tjiRows(fr, kit, run) {
    const act = activeTji();
    const inp = el('input', { type: 'file', accept: '.json,.csv,application/json,text/csv', hidden: true, 'data-mp-tjifile': '' });
    inp.addEventListener('change', () => { if (inp.files[0]) loadTjiFile(inp.files[0], () => run({ floorMode: 'tji' })); });
    const load = kit.button(t(act ? 'tji.replace' : 'tji.load'), 'data-mp-tjiload', () => inp.click());
    kit.field(t('tji.table'), el('span', {}, act ? el('span', { 'data-mp-tjitable': '' }, act.table.id + ' (' + act.table.edition + ')') : el('span', { className: 'bc-sub', 'data-mp-tjitable': '' }, t('tji.none')), ' ', load, inp));
    if (act) {
      if (act.table.cases.length > 1) kit.field(t('tji.case'), kit.select(act.table.cases.map((c) => [c.id, c.id]), act.caseId, 'data-mp-tjicase', (v) => { act.caseId = v; saveTji(); run({ floorMode: 'tji' }); }));
      kit.field('', kit.button(t('tji.clear'), 'data-mp-tjiclear', () => { setActiveTji(null); saveTji(); tjiBar?.(); run({ floorMode: 'tji' }); }));
      const a = tjiStatement(act.table, act.caseId, t);
      kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-tjiassume': '' }, a.join(' ')));
    } else kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub' }, t('tji.help')));
  }
  /** Problems (rule 29): the TJI layout's standing caveats, one source of its own. */
  let tjiSrc = null;
  function tjiProblems() {
    const out = [];
    for (const fr of R.frames) {
      if (fr.kind !== 'floor' || fr.floorMode !== 'tji') continue;
      const about = [{ kind: 'framing', id: fr.guid, label: t('res.fr.of.floor') }], tb = fr.tji;
      const add = (code, severity, key, vars = {}) => out.push({ code, severity, msg: { key, vars }, text: t(key, vars), about });
      if (!tb || !tb.Table) add('frame.tji.default', 'warning', 'tji.p.default');
      else {
        if (tb.Example === true || /^(\.?T\.?|true)$/i.test(String(tb.Example ?? ''))) add('frame.tji.example', 'warning', 'tji.p.example', { table: tb.Table });
        add('frame.tji.assumptions', 'note', 'tji.p.assume', { table: tb.Table, text: String(tb.Assumptions || '').replace(/\n/g, ' ') });
      }
    }
    return out;
  }
  function tjiRegister() {
    const P = window.ccProblems;
    if (!P?.source) return;
    tjiSrc ||= P.source({ id: 'bimcraft.framing', kind: 'check', label: t('tji.src'), debounceMs: 400, run: () => (A.S.on ? tjiProblems() : null) });
    tjiSrc.invalidate();
  }
  if (window.ccProblems) tjiRegister(); else document.addEventListener('cc-problems-ready', () => tjiRegister(), { once: true });
  const sizeLabel = (sz) => (isMetric(A.units()) ? sz.replace(/^(\dx\d+)/, (m) => LUMBER[m]?.metric || m) : sz);
  // the cut list as a schedule (model-ui.js Schedules panel): size, stock length, pieces, board feet
  function lumberSchedule() {
    const w = writer();
    if (!w) return null;
    const mm = isMetric(A.units()), lst = lumberList(w, { metric: mm });
    if (!lst.rows.length) return { head: [t('res.fr.sch.size'), t('res.fr.sch.length'), t('res.fr.sch.count'), t('res.fr.sch.bf')], rows: [], nums: [2, 3], total: null };
    const tj = R.frames.find((f) => f.kind === 'floor' && f.floorMode === 'tji' && f.tji?.Assumptions);   // GH.3-E: the assumptions go on the schedule
    return {
      ...(tj ? { note: String(tj.tji.Assumptions).replace(/\n/g, ' ') } : {}),
      head: [t('res.fr.sch.size'), t('res.fr.sch.length'), t('res.fr.sch.count'), t('res.fr.sch.bf')],
      rows: lst.rows.map((r) => [r.label, L(r.stock), String(r.count), r.bf.toFixed(1)]),
      nums: [2, 3], total: [t('model.sch.total'), '', String(lst.pieces), lst.bf.toFixed(1)],
    };
  }

  // ---- terrain (RC.10) ----
  const UNIT_MM = { mm: 1, m: 1000, ft: 304.8, ftUS: 1200 / 3937 * 1000 };
  /** The ground level (the one at elevation 0, else the lowest): the plan the terrain draws on. */
  const groundLevel = () => { const L2 = A.S.data?.levels || []; return L2.find((l) => Math.abs(l.elevation) < 1) || L2[0] || null; };
  const storeyM = (storey) => { const w = writer(); return w ? w.storeyWorld(storey) : null; };
  /** Plan of the level shown ↔ world (the site's) mm. */
  const toWorld = (p) => { const M = storeyM(A.S.level); return M ? apply4m(M, p[0], p[1], 0) : [p[0], p[1], 0]; };
  const toPlan = (x, y) => { const M = storeyM(A.S.level); if (!M) return [x, y]; const q = apply4m(inv4m(M), x, y, 0); return [q[0], q[1]]; };
  function buildingCentre() {
    const ws = A.wallsHere();
    if (!ws.length) return [0, 0];
    let x = 0, y = 0;
    for (const w of ws) { x += w.a[0] + w.b[0]; y += w.a[1] + w.b[1]; }
    const c = toWorld([x / ws.length / 2, y / ws.length / 2]);
    return [c[0], c[1]];
  }
  async function ensureTin() { if (!R.tr.tinReady) { await loadTin(); R.tr.tinReady = true; } }
  function makeFromSpots() {
    if (R.tr.spots.length < 3) { A.host.status(t('res.err.spots'), true); return; }
    ensureTin().then(() => {
      const pts = R.tr.spots.map((q) => ({ x: q.x, y: q.y, z: q.z }));
      R.tr.spots = [];
      A.commit(placeTerrain({ source: 'sketch', points: pts, interval: isMetric(A.units()) ? 500 : 304.8 }), { label: t('res.terrain'), verb: t('model.verb.placed') });
    }).catch((e) => A.host.status(String(e.message || e), true));
  }
  /** Survey points from a file: points text, DXF / DWG contours, LAS / LAZ, GeoTIFF / ASCII grid. → { points (source units), lines, unit } */
  async function readGroundFile(f) {
    const name = f.name.toLowerCase();
    if (/\.(las|laz)$/.test(name)) {
      const PC = await import('./pointcloud.js');
      const info = await PC.readCloudInfo(f);
      const cloud = await PC.loadCloud(f, info, { budget: 400000 });
      const pts = [];
      for (let i = 0; i < cloud.n; i++) { if (cloud.cls && cloud.classCounts?.get(2) && cloud.cls[i] !== 2) continue; pts.push({ x: cloud.pos[3 * i] + cloud.origin[0], y: cloud.pos[3 * i + 1] + cloud.origin[1], z: cloud.pos[3 * i + 2] + cloud.origin[2] }); }
      const unit = cloud.unit || R.tr.unit;
      const cell = 1000 / UNIT_MM[unit];   // 1 m cells, the lowest point in each (ground)
      return { points: thinToGrid(pts, cell), lines: [], unit, zUnit: cloud.zUnit || unit, crs: info.crs || null };
    }
    if (/\.(tif|tiff|asc)$/.test(name)) {
      const RS = await import('./raster.js');
      const src = await RS.openRaster([f]);
      const step = Math.max(1, Math.ceil(Math.sqrt(src.width * src.height / 15000)));
      const grid = await RS.readWindow(src, { step });
      const TR = await import('./terrain.js');
      const unit = src.xyUnit || src.zUnit || R.tr.unit;
      return { points: TR.gridPoints(grid, src, { fn: (x, y) => [x, y] }), lines: [], unit, zUnit: src.zUnit || unit, crs: src.crs || null };
    }
    if (/\.(dxf|dwg)$/.test(name)) {
      let model;
      if (name.endsWith('.dwg')) { const D = await import('./dwg/read.js'); model = D.readDwg(new Uint8Array(await f.arrayBuffer())); }
      else { const D = await import('./dxf-model.js'); model = D.readDxfModel(await f.text()); }
      const r = drawingContours(model);
      return { points: r.points, lines: r.lines, unit: R.tr.unit };
    }
    if (/\.(xml|landxml)$/.test(name)) {   // 0.6 DF.24: CivilCraft's LandXML surfaces, their own triangles kept
      const lx = readLandXmlSurfaces(await f.text());
      const i = lx.surfaces.length > 1 ? await chooseSurface(lx.surfaces) : 0;
      if (i < 0) return null;
      const sf = lx.surfaces[i];
      return { points: sf.pts, lines: [], faces: sf.faces.length ? sf.faces : null, unit: lx.unit, source: 'landxml', notes: lx.notes, surface: sf.name };
    }
    return { points: parsePointText(await f.text()), lines: [], unit: R.tr.unit };
  }
  /** A LandXML file with several surfaces: which one is the ground (0.6 DF.24). → its index, or −1 (Cancel). */
  function chooseSurface(list) {
    return new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-lx-h', 'data-res-lxdialog': '' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-lx-h' }, t('res.lx.choose')),
          el('p', { className: 'bc-lib-actions' }, ...list.map((sf, i) => el('button', { type: 'submit', className: i ? 'btn-line btn-sm-cc' : 'btn-plot btn-sm-cc', value: String(i), 'data-res-lxpick': String(i) }, t('res.lx.option', { name: sf.name, n: sf.pts.length }))),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
      dlg.addEventListener('close', () => { const v = dlg.returnValue; dlg.remove(); done(v === 'cancel' || v === '' ? -1 : Number(v)); });
      A.root.append(dlg);
      dlg.showModal();
    });
  }
  /** 0.8 D8.9 item 3: the file's own system against the model's (georef-ui.js decideFile); "Reproject into the model's system" moves the points through proj4. → r | null (cancelled) */
  async function inModelSystem(f, r) {
    const e = A.ed();
    if (!e) return r;
    const [{ readGeoref }, P, C, GU, GC] = await Promise.all([import('./ifc-geo.js'), import('./crs-pick.js'), import('./crs.js'), import('./georef-ui.js'), import('./georef-cloud.js')]);
    if (!C.catalogLoaded()) await C.loadCatalog();
    let g = null;
    try { g = readGeoref(e.api, e.mid); } catch (err) { g = null; }
    const ms = g ? P.modelSystem(g.crs) : null;
    if (!ms || ms.crs.unit === 'deg') return r;   // the model has no system chosen: the file keeps its own, as before
    const box = GC.boxOf(GC.pointsXY([...r.points, ...r.lines.flat()]));
    const d = await GU.decideFile({ file: f, fileCrs: r.crs || null, modelCrs: ms.crs, box, say: (...a) => A.host.status(...a), near: g.kind === 'site' ? [g.lon, g.lat] : null });
    if (!d) return null;
    if (d.problems?.length) GU.sendProblems(d.problems);
    if (d.action !== 'reproject') return r;
    const out = await GU.reprojectGround({ r, from: d.from, modelCrs: ms.crs, file: f, say: (...a) => A.host.status(...a) });
    if (!out) return null;
    if (out.refused) return r;
    GU.sendProblems([...d.problems, ...out.problems]);
    A.host.status(t('georef.file.done', { n: out.r.points.length.toLocaleString('en-US'), file: f.name, from: d.from.name, to: ms.crs.name }), false, true);
    return out.r;
  }
  async function groundFromFile(f) {
    try {
      await ensureTin();
      A.host.status(t('res.tr.reading', { name: f.name }));
      let r = await readGroundFile(f);
      if (!r) { A.host.status(''); return; }
      r = await inModelSystem(f, r);   // 0.8 D8.9 item 3: a file in another system than the model's is offered the model's
      if (!r) { A.host.status(''); return; }
      const all = [...r.points, ...r.lines.flat()];
      if (all.length < 3) { A.host.status(t('res.err.nosurvey'), true); return; }
      const k = UNIT_MM[r.unit] || 1;
      const offset = autoOffset(all, k, buildingCentre());
      // the datum: the ground near the building sits 8" under the first floor
      const c = buildingCentre(), near = all.filter((p) => Math.hypot(p.x * k - offset[0] - c[0], p.y * k - offset[1] - c[1]) < 10000).map((p) => p.z).sort((a, b) => a - b);
      const zs = near.length ? near : all.map((p) => p.z).sort((a, b) => a - b);
      const datum = zs[Math.floor(zs.length / 2)] + 200 / k;
      const pts = toModel(r.points, { unitMm: k, offset, datum }), lines = r.lines.map((l) => toModel(l, { unitMm: k, offset, datum }));
      A.commit(placeTerrain({ source: r.source || (/\.(las|laz)$/i.test(f.name) ? 'las' : /\.(tif|tiff|asc)$/i.test(f.name) ? 'grid' : /\.(dxf|dwg)$/i.test(f.name) ? 'contours' : 'points'), points: pts, lines, faces: r.faces || null, datum, offset, unit: r.unit, interval: isMetric(A.units()) ? 500 : 304.8 }), { label: t('res.terrain'), verb: t('model.verb.placed') });
      if (r.source === 'landxml') A.host.status(t('res.lx.done', { name: r.surface, n: r.points.length }) + (r.notes?.length ? ' ' + r.notes.join(' ') : ''), false, true);
    } catch (e) { console.error(e); A.host.status(t('res.err.readground', { why: e.message || e }), true); }
  }
  function exportLandXml() {
    const w = writer(), trn = w && readTerrain(w);
    if (!trn || !R.tr.tinReady) { A.host.status(t('res.err.noterrain'), true); return; }
    const ex = existingSurface(trn), fin = finishedSurface(w, trn);
    const base = String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    A.host.download(base + ' terrain.xml', landXml([{ name: t('res.tr.existing'), surface: ex }, { name: t('res.tr.finished'), surface: fin }], { name: base, unit: isMetric(A.units()) ? 'm' : 'ft' }), 'application/xml');   // i18n-ignore: a file name
    A.host.status(t('res.tr.xmldone'));
  }
  function terrainScene(scene) {
    const g = groundLevel();
    if (!R.terrain || !g || A.S.level !== g.id) return;
    const k = A.kb();
    if (R.tr.contours) {
      const thin = [], lines = [];
      for (const c of R.tr.contours) {
        const P = c.pts.map((q) => toPlan(q.x, q.y));
        const major = Math.abs(Math.round(c.z / (R.terrain.interval * 5)) * R.terrain.interval * 5 - c.z) < 1;
        for (let i = 0; i + 1 < P.length; i++) (major ? lines : thin).push([P[i][0], P[i][1], P[i + 1][0], P[i + 1][1]]);
      }
      scene.symbols.unshift({ key: null, thin, lines });
    }
    for (const pd of R.pads) if (pd.shape) scene.symbols.push({ key: k + pd.id, dashed: pp(pd.shape.poly.map(([x, y]) => toPlan(x, y))), poly: pd.shape.poly.map(([x, y]) => toPlan(x, y)), roof: true });
    for (const h of R.hards) if (h.points.length >= 3) scene.symbols.push({ key: k + h.id, lines: pp(h.points), poly: h.points, roof: true });
  }
  function terrainOverlay(o) {
    if (A.S.tool === 'terrain') {
      for (const q of R.tr.spots) { const p = toPlan(q.x, q.y); o.points.push(p); }
      if (R.tr.at) o.hud = { p: R.tr.at, text: t('res.tr.hud.spot', { z: L(R.tr.z), n: R.tr.spots.length }) };
    }
    if (A.S.tool === 'paving') {
      const hd = R.tr.hard, pts = hd.pts || [];
      if (hd.at) o.snap = hd.at;
      for (const q of pts) o.points.push(q);
      const all = hd.at ? [...pts, hd.at.p] : pts;
      for (let i = 0; i + 1 < all.length; i++) o.lines.push([all[i][0], all[i][1], all[i + 1][0], all[i + 1][1]]);
      if (all.length >= 3) o.dashed.push([all[all.length - 1][0], all[all.length - 1][1], all[0][0], all[0][1]]);
      if (hd.at) o.hud = { p: hd.at.p, text: t('res.hard.' + hd.kind) };
    }
    if (A.S.tool === 'pad' && R.tr.padHover) { o.walls.push(R.tr.padHover); o.hud = { p: labelPoint(R.tr.padHover), text: t('res.pad.hud') }; }
  }
  function finishPaving() {
    const pts = R.tr.hard.pts;
    R.tr.hard.pts = null;
    if (!pts || pts.length < 3) { A.host.status(t('res.err.hardscape'), true); return; }
    ensureTin().then(() => A.commit(placeHardscape({ level: levelGuid(), points: pts, kind: R.tr.hard.kind }), { label: t('res.hard.' + R.tr.hard.kind), verb: t('model.verb.placed') }));
  }
  function terrainProps(items, kit) {
    const it = items[0], w = writer();
    if (it.kind === 'terrain') {
      const trn = R.terrain;
      if (!trn) return null;
      const run = (ch) => ensureTin().then(() => A.commit(changeTerrain(trn.guid, ch), { ...kit.one(t('res.terrain')), reselect: () => (R.terrain ? [A.kb() + R.terrain.id] : null) }));
      kit.rows.push(el('dt', {}, t('res.tr.source')), el('dd', { 'data-mp-trsource': '' }, t('res.tr.src.' + trn.source)), el('dt', {}, t('res.tr.points')), el('dd', {}, String(trn.pts.length)));
      kit.field(t('res.tr.interval'), kit.lenInput(trn.interval, 'data-mp-trint', (mm) => run({ interval: mm }), { min: 10 }));
      kit.field(t('res.tr.raise'), kit.lenInput(0, 'data-mp-trraise', (mm) => run({ raise: mm }), { any: true }), el('span', { className: 'bc-sub' }, ' ' + t('res.tr.raise.note')));
      kit.rows.push(el('dt', {}, t('res.tr.cut')), el('dd', { 'data-mp-trcut': '' }, (trn.cut || 0).toFixed(1) + ' m³'), el('dt', {}, t('res.tr.fill')), el('dd', {}, (trn.fill || 0).toFixed(1) + ' m³'));   // i18n-ignore: unit
      kit.field(t('res.tr.civil'), kit.button(t('res.tr.xml'), 'data-mp-trxml', () => exportLandXml()));
      return { title: t('res.terrain') };
    }
    if (it.kind === 'pad') {
      const pd = R.pads.find((x) => x.guid === it.guid);
      if (!pd) return null;
      const run = (ch) => ensureTin().then(() => A.commit(changePad(pd.guid, ch), kit.one(t('res.pad'))));
      kit.field(t('res.pad.margin'), kit.lenInput(pd.margin, 'data-mp-padmargin', (mm) => run({ margin: mm }), { allowZero: true }));
      kit.field(t('res.pad.depth'), kit.lenInput(pd.depth, 'data-mp-paddepth', (mm) => run({ depth: mm }), { any: true }));
      const sl = el('input', { type: 'text', className: 'bc-input bc-num', value: pd.slope + ':1', 'data-mp-padslope': '' });
      sl.addEventListener('change', () => { const v = Number(String(sl.value).replace(/:1$/, '')); if (v >= 1 && v <= 10) run({ slope: v }); else { A.host.status(t('res.err.padslope'), true); sl.value = sl.defaultValue; } });
      kit.field(t('res.pad.slope'), sl);
      const ps = w?.readPset(pd.id, 'CadCraft_Pad') || {};
      kit.rows.push(el('dt', {}, t('res.tr.cut')), el('dd', { 'data-mp-padcut': '' }, Number(ps.Cut || 0).toFixed(1) + ' m³'), el('dt', {}, t('res.tr.fill')), el('dd', {}, Number(ps.Fill || 0).toFixed(1) + ' m³'));   // i18n-ignore: unit
      return { title: t('res.pad') };
    }
    if (it.kind === 'paving') {
      const h = R.hards.find((x) => x.guid === it.guid);
      if (!h) return null;
      const run = (ch) => ensureTin().then(() => A.commit(changeHardscape(h.guid, ch), kit.one(t('res.hard.' + h.kind))));
      kit.field(t('res.hard.kind'), kit.select(HARD_KINDS.map((x) => [x, t('res.hard.' + x)]), h.kind, 'data-mp-hdkind', (v) => run({ kind: v })));
      kit.field(t('model.prop.thickness'), kit.lenInput(h.thickness, 'data-mp-hdthick', (mm) => run({ thickness: mm }), { min: 10 }));
      return { title: t('res.hard.' + h.kind) };
    }
    return null;
  }

  // ---- electrical (RC.6) ----
  function bindElecRow() {
    const root = A.root, ks = root.querySelector('[data-res-elkind]');
    if (!ks) return;
    if (!ks.dataset.bound) {
      ks.dataset.bound = '1';
      ks.replaceChildren(...EL_GROUPS.map((g) => el('optgroup', { label: t('res.el.group.' + g) }, ...EL_SYMBOLS.filter((x) => x.group === g).map((x) => el('option', { value: x.key }, t('res.el.kind.' + x.key))))));
      ks.addEventListener('change', () => { R.el.kind = ks.value; R.el.height = null; const hi = root.querySelector('[data-res-elheight]'); if (hi) hi.value = ''; A.drawOverlay(); });
      root.querySelector('[data-res-elcircuit]')?.addEventListener('change', (e) => { R.el.circuit = e.target.value.trim().slice(0, 20); });
      const hi = root.querySelector('[data-res-elheight]');
      hi?.addEventListener('change', () => { const v = hi.value.trim(); if (!v) { R.el.height = null; return; } const mm = parseLen(v, A.units()); if (mm > 0) R.el.height = mm; else A.host.status(t('model.err.length'), true); hi.value = R.el.height ? L(R.el.height) : ''; });
      root.querySelector('[data-res-eldone]')?.addEventListener('click', () => endLink());
    }
    ks.value = R.el.kind;
    const hi = root.querySelector('[data-res-elheight]');
    if (hi && document.activeElement !== hi) { hi.value = R.el.height ? L(R.el.height) : ''; hi.placeholder = DEVICES[R.el.kind].mount === 'ceiling' ? t('res.el.height.ceiling') : L(DEVICES[R.el.kind].height[isMetric(A.units()) ? 'mm' : 'ftin']); }
  }
  const elWalls = () => A.wallsHere().map((w) => ({ guid: w.guid, a: w.a, b: w.b, t: w.t }));
  function elSpot(p) {
    const D = DEVICES[R.el.kind];
    if (D.mount !== 'wall') return { at: p, angle: Math.PI / 2 };
    return wallSpot(elWalls(), p, Math.max(600, A.pv().pxToMm(30)));
  }
  function elClick(p) {
    const sp = elSpot(p);
    if (!sp) { A.host.status(t('res.err.elwall'), true); return; }
    A.commit(placeDevice({ level: levelGuid(), kind: R.el.kind, units: A.units(), circuit: R.el.circuit, height: R.el.height ?? undefined, ...sp }), { label: t('res.el.kind.' + R.el.kind), verb: t('model.verb.placed') });
  }
  function elOverlay(o) {
    if (A.S.tool === 'ellink') {
      const sw = R.devs.find((d) => d.guid === R.el.link);
      if (sw && R.el.at) o.hud = { p: R.el.at, text: t('res.el.hud.link', { tag: sw.tag }) };
      return;
    }
    if (A.S.tool !== 'electrical' || !R.el.at) return;
    const sp = elSpot(R.el.at);
    if (!sp) { o.hud = { p: R.el.at, text: t('res.el.hud.wall') }; return; }
    const sym = symbolPlan(R.el.kind, sp.at, sp.angle, symbolScale(A.units()));
    if (sym) o.symbols.push({ key: null, lines: sym.lines, arcs: sym.arcs, thin: sym.thin });
    o.hud = { p: sp.at, text: t('res.el.kind.' + R.el.kind) };
  }
  function elScene(scene) {
    const k = A.kb(), sc = symbolScale(A.units());
    const here = R.devs.filter((d) => d.storey === A.S.level);
    const byGuid = new Map(here.map((d) => [d.guid, d]));
    for (const d of here) {
      const sym = symbolPlan(d.kind, d.at, d.angle, sc);
      if (!sym) continue;
      scene.symbols.push({ key: k + d.id, lines: sym.lines, arcs: sym.arcs, thin: sym.thin, poly: sym.poly });
      // the tag beside it, on the room side
      const f = [Math.cos(d.angle), Math.sin(d.angle)];
      const at = DEVICES[d.kind].mount === 'wall' ? [d.at[0] + f[0] * 7 * sc, d.at[1] + f[1] * 7 * sc] : [d.at[0] + 4.5 * sc, d.at[1] + 4.5 * sc];
      scene.rooms.push({ key: k + d.id, at, label: [d.tag] });
      // switch legs: a curved dashed line to each light it switches
      if (isSwitch(d.kind)) for (const g of d.controls) {
        const lt = byGuid.get(g);
        if (!lt) continue;
        const a = d.at, b = lt.at, m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], L2 = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        const c = [m[0] - (b[1] - a[1]) / L2 * L2 * 0.2, m[1] + (b[0] - a[0]) / L2 * L2 * 0.2];
        const pts = [];
        for (let i = 0; i <= 16; i++) { const u = i / 16; pts.push([(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]]); }
        scene.symbols.push({ key: null, dashed: pts.slice(1).map((q, i) => [pts[i][0], pts[i][1], q[0], q[1]]) });
      }
    }
  }
  function endLink() { R.el.link = null; A.setTool('select'); }
  function elProps(items, kit) {
    const devs = items.map((x) => R.devs.find((d) => d.guid === x.guid)).filter(Boolean);
    if (!devs.length) return null;
    const d = devs[0];
    if (devs.length > 1) {
      const ci = el('input', { type: 'text', className: 'bc-input', value: devs.every((x) => x.circuit === d.circuit) ? d.circuit : '', maxLength: 20, 'data-mp-elcircuit': '' });
      ci.addEventListener('change', () => { const ops = devs.map((x) => changeDevice(x.guid, { circuit: ci.value })); A.commit((ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r; }, { label: t('res.el.devices', { n: devs.length }), verb: t('model.verb.changed') }); });
      kit.field(t('res.el.sch.circuit'), ci);
      return { title: t('res.el.devices', { n: devs.length }) };
    }
    const title = d.tag + ' · ' + t('res.el.kind.' + d.kind);   // i18n-ignore: tag and name
    const run = (ch) => A.commit(changeDevice(d.guid, ch), { ...kit.one(title), reselect: () => { const x = R.devs.find((y) => y.guid === d.guid); return x ? [A.kb() + x.id] : null; } });
    const tg = el('input', { type: 'text', className: 'bc-input', value: d.tag, maxLength: 20, 'data-mp-eltag': '' });
    tg.addEventListener('change', () => { if (tg.value.trim()) run({ tag: tg.value }); });
    kit.field(t('res.el.sch.tag'), tg);
    const ci = el('input', { type: 'text', className: 'bc-input', value: d.circuit, maxLength: 20, 'data-mp-elcircuit': '' });
    ci.addEventListener('change', () => run({ circuit: ci.value }));
    kit.field(t('res.el.sch.circuit'), ci);
    if (!isBoard(d.kind)) {
      const ld = el('input', { type: 'text', className: 'bc-input bc-num', value: String(Math.round(d.load)), 'data-mp-elload': '' });
      ld.addEventListener('change', () => { const v = Number(ld.value); if (v >= 0) run({ load: v }); else ld.value = ld.defaultValue; });
      kit.field(t('res.el.load'), ld, el('span', { className: 'bc-sub' }, ' W'));   // i18n-ignore: watts
    }
    kit.field(DEVICES[d.kind].mount === 'ceiling' ? t('res.el.height.at') : t('res.el.height'), kit.lenInput(d.height, 'data-mp-elheight', (mm) => run({ height: mm }), { min: 50 }));
    if (isSwitch(d.kind)) {
      const tags = d.controls.map((g) => R.devs.find((x) => x.guid === g)?.tag).filter(Boolean);
      kit.field(t('res.el.controls'), el('span', { 'data-mp-elcontrols': '' }, tags.length ? tags.join(', ') : t('res.el.controls.none')));
      kit.field('', kit.button(t('res.el.link'), 'data-mp-ellink', () => { R.el.link = d.guid; A.setTool('ellink'); A.host.status(t('res.el.link.status', { tag: d.tag })); }));
    }
    if (isLight(d.kind)) {
      const by = R.devs.filter((x) => x.controls.includes(d.guid)).map((x) => x.tag);
      kit.field(t('res.el.switchedby'), el('span', { 'data-mp-elby': '' }, by.length ? by.join(', ') : t('res.el.controls.none')));
    }
    return { title };
  }
  function elSchedules() {
    if (!A.S.on || !R.devs.length) return {};
    return { devices: deviceSchedule(R.devs, A.S.data?.levels || [], { fmtLen: L, t }), circuits: circuitSchedule(R.devs, { units: A.units(), t }) };
  }
  function elScheduleKeys(kind, i) {
    const k = A.kb();
    if (kind === 'devices') { const d = R.devs[i]; return d ? [k + d.id] : []; }
    const sc = circuitSchedule(R.devs, { units: A.units(), t }), row = sc.rows[i];
    if (!row) return [];
    const c = row[0] === t('res.el.nocircuit') ? '' : row[0];
    return R.devs.filter((d) => !isBoard(d.kind) && d.circuit === c).map((d) => k + d.id);
  }

  // ---- the takeoff (RC.8) ----
  /** What the model holds now, as modelQuantities (res-takeoff.js) wants it. */
  function takeoffData() {
    const w = writer(), D = A.S.data;
    if (!w || !D) return null;
    const levels = D.levels || [];
    const walls = (D.walls || []).map((x) => { const ty = (x.assembly || wallType(x.typeKey)); return { ...x, typeName: ty ? wallTypeName(ty) : (x.typeName || x.typeKey), exterior: ty?.exterior !== false }; });
    const openings = readOpenings(w, null, D.walls || []).map((o) => { const ty = openingType(o.typeKey); return { ...o, typeName: ty ? openingTypeName(ty) : o.typeName }; });
    const loops = new Map();
    const loopsFor = (id) => { if (!loops.has(id)) loops.set(id, A.loopsOf(id)); return loops.get(id); };
    const roofs = [];
    for (const r of D.derived?.roofs || []) {
      const wl = levels.find((l) => l.guid === r.walls);
      const o = wl && loopAt(loopsFor(wl.id).outlines, r.seed);
      if (o) roofs.push({ storey: r.storey, plan: roofGeometry(o.poly, edgeKinds(o.poly, A.wallsOn(wl.id), r), { thickness: r.thickness, fascia: r.fascia, soffit: r.soffit }) });
    }
    const rooms = levels.flatMap((l) => (loopsFor(l.id)?.rooms || []).map((r) => ({ storey: l.id, poly: r.poly, holes: r.holes || [] })));
    const scenes = new Map(levels.map((l) => [l.id, A.sceneFor(l.id)]));
    const base = String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    return { name: base + ' — ' + t('res.to.button').toLowerCase(), units: A.units(), levels, scenes, walls, openings, roofs, founds: R.founds, cabinets: R.cabinets, devs: R.devs, rooms,
      lumber: lumberList(w, { metric: isMetric(A.units()) }).rows, fmtLen: L, date: new Date().toISOString().slice(0, 10) };   // i18n-ignore: a file name
  }
  async function makeTakeoff() {
    const d = takeoffData();
    if (!d) return null;
    const input = modelQuantities(d, t);
    A.ask('takeoffExtra', input);   // 0.6 DF.29: pipes, ducts, fittings and valves (mep-ui.js)
    input.paper = (() => { let p = null; try { p = localStorage.getItem('bimcraft.sheets.paper'); } catch (e) { /* none */ } return PAPERS[p] ? p : null; })();
    return buildTakeoff(input);
  }
  function takeoffClick() {
    const btn = A.root.querySelector('[data-res-takeoff]');
    const url = btn?.dataset.handoffUrl || '';
    // the hand-off's tab opens inside the click (pop-up blockers); the file follows in a moment
    let id = null, tab = null;
    if (url) { id = newHandoffId(); tab = window.open(url + '?handoff=' + id, '_blank'); }
    A.host.status(t('res.sh.making'));
    makeTakeoff().then(async (r) => {
      if (!r?.pdf) { if (tab) tab.close(); A.host.status(t('res.to.none'), true); return; }
      const file = new File([r.pdf], r.name, { type: 'application/pdf' });
      if (tab) { await putHandoff(id, file, 'bimcraft'); A.host.status(t('res.to.sent', { items: r.takeoff.items.length, marks: r.takeoff.marks.length })); return; }
      A.host.download(r.name, r.pdf, 'application/pdf');
      A.host.status(t('res.to.saved', { file: r.name }));
    }).catch((e) => { console.error(e); if (tab) tab.close(); A.host.status(t('res.to.failed', { why: e.message || e }), true); });
  }

  // ---- section lines and sheets (RC.5) ----
  function sectionScene(scene) {
    const k = A.kb();
    for (const sl of R.secs) {
      if (sl.storey !== A.S.level) continue;
      const { dir, u } = sectionDir(sl), ext = 600;
      const a = [sl.a[0] - u[0] * ext, sl.a[1] - u[1] * ext], b = [sl.b[0] + u[0] * ext, sl.b[1] + u[1] * ext];
      const arrows = [];
      for (const e of [a, b]) { const tip = [e[0] + dir[0] * 500, e[1] + dir[1] * 500]; arrows.push([e[0], e[1], tip[0], tip[1]], [tip[0], tip[1], tip[0] - dir[0] * 160 + u[0] * 120, tip[1] - dir[1] * 160 + u[1] * 120], [tip[0], tip[1], tip[0] - dir[0] * 160 - u[0] * 120, tip[1] - dir[1] * 160 - u[1] * 120]); }
      scene.symbols.push({ key: k + sl.id, lines: [[a[0], a[1], b[0], b[1]], ...arrows], dashed: [], poly: bandOf([a, b], 150) });
      for (const e of [a, b]) { const c = [e[0] - dir[0] * 350, e[1] - dir[1] * 350]; scene.rooms.push({ key: k + sl.id, poly: [[c[0] - 250, c[1] - 250], [c[0] + 250, c[1] - 250], [c[0] + 250, c[1] + 250], [c[0] - 250, c[1] + 250]], at: c, label: [sl.name] }); }
    }
  }
  function sectionOverlay(o) {
    if (A.S.tool !== 'section') return;
    const sc = R.sec;
    if (sc.at) o.snap = sc.at;
    if (!sc.a) { if (sc.at) o.hud = { p: sc.at.p, text: t('res.sec.hud.a') }; return; }
    o.points.push(sc.a);
    if (sc.at) {
      const b = sc.at.p, d = [b[0] - sc.a[0], b[1] - sc.a[1]], L2 = Math.hypot(...d) || 1, n = [-d[1] / L2, d[0] / L2], m = [(sc.a[0] + b[0]) / 2, (sc.a[1] + b[1]) / 2];
      o.lines.push([sc.a[0], sc.a[1], b[0], b[1]], [m[0], m[1], m[0] + n[0] * 600, m[1] + n[1] * 600]);
      o.hud = { p: b, text: t('res.sec.hud.b') };
    }
  }
  function sectionProps(items, kit) {
    const sl = R.secs.find((x) => x.guid === items[0].guid);
    if (!sl) return null;
    const run = (ch) => A.commit(changeSectionLine(sl.guid, ch), kit.one(t('res.sec.name', { name: sl.name })));
    const nm = el('input', { type: 'text', className: 'bc-input', value: sl.name, maxLength: 8, 'data-mp-secname': '' });
    nm.addEventListener('change', () => { if (nm.value.trim()) run({ name: nm.value.trim() }); });
    kit.field(t('res.sec.label'), nm);
    kit.field(t('res.sec.look'), kit.button(t('res.sec.flip'), 'data-mp-secflip', () => run({ look: sl.look === 'left' ? 'right' : 'left' })));
    kit.field(t('res.sec.depth'), kit.lenInput(sl.depth, 'data-mp-secdepth', (mm) => run({ depth: mm }), { allowZero: true }), el('span', { className: 'bc-sub' }, ' ' + t('res.sec.depth.note')));
    kit.field(t('res.sh.title'), kit.button(t('res.sh.open'), 'data-mp-secsheets', () => openSheets()));
    return { title: t('res.sec.name', { name: sl.name }) };
  }
  const PAPER_KEY = 'bimcraft.sheets.paper';
  const paperNow = () => { let p = null; try { p = localStorage.getItem(PAPER_KEY); } catch (e) { /* none */ } return PAPERS[p] ? p : (isMetric(A.units()) ? 'a3' : 'tabloid'); };
  /** Every drawing of the set, from the model as it is now. */
  function makeSet(paper) {
    const input = setInput();
    if (!input) return [];
    return buildSet(input, setOpts(paper));
  }
  const setOpts = (paper) => ({ paper, units: A.units(), project: String(A.host.fileName?.() || '').replace(/\.ifc$/i, ''), date: new Date().toISOString().slice(0, 10) });
  /** What the sheets draw, from the model as it is now (refs: a level's / section line's GlobalId, a side, a schedule kind:
   *  0.6 DF.19's own sheets find their views by them). */
  /** 0.8 D8.8 round 5: the vertical pictures that face a view (picture-ui.js forView; their images are made by prepareSheet before the set is built). */
  function pictureViews(spec, base) {
    try { return window.bimcraftPicture?.forView?.({ ...spec, dzOf: (sid) => ((A.S.data?.levels || []).find((l) => l.id === sid)?.elevation || 0) - (base?.elevation || 0) }) || []; } catch (e) { return []; }
  }
  function setInput() {
    const model = A.host.model(), ifc = A.host.ifc?.(), w = writer();
    const levels = A.S.data?.levels || [];
    if (!model || !ifc || !w || !levels.length) return null;
    const C = ifc.api.GetCoordinationMatrix(model.modelID);
    const k = A.kb();
    const skip = new Set();
    for (const fr of R.frames) for (const p of fr.parts) skip.add(k + p);   // framing has its own sheets; inside walls it only clutters
    const g = groundLevel() || levels[0];
    const Mg = viewerToPlan(C, w.storeyWorld(g.id));
    const els = modelTriangles(model, Mg, { skip });
    let cutMaterials = null;
    try { cutMaterials = readMaterials(w); } catch (e) { /* Layer diagnostics accompany envelope fallback. */ }
    const input = { plans: [], rcps: [], elevations: [], sections: [], schedules: [], framing: [] };
    interiorCtx.clear();
    for (const lv of levels.slice().filter((l) => (A.S.data.walls || []).some((x) => x.storey === l.id) || l.id === g.id)) {
      input.plans.push({ ref: lv.guid, title: t('res.sh.plan', { level: lv.name }), scene: A.sceneFor(lv.id) });
      // 0.6 DC.117: its reflected ceiling plan, drawn only when a sheet shows it
      input.rcps.push({ ref: lv.guid, title: t('res.sh.rcp', { level: lv.name }), get scene() { return this._scene || (this._scene = A.sceneFor(lv.id, 'rcp')); } });
    }
    // 0.6 DF.16: the building's grid lines seen end on, in the ground level's plan (the elevations' frame) or the section's level
    const gridsOn = (storey) => { try { return gridsToPlan(w, storey, readGrids(w)).flatMap((x) => x.axes); } catch (e) { return []; } };
    const gAxes = gridsOn(g.id);
    // 0.6 round 2 (comforts-views.js): each elevation and section carries its notes — level marks, the heights between levels,
    // the building's width and the door / window tags on an elevation (`view.notes`, drawn by the sheets)
    const lvls = levels.map((l) => ({ name: l.name, elevation: l.elevation }));
    const fmtN = (mm) => L(mm);
    const facts = (() => { try { return openingFacts(A.S.data.openings || [], A.S.data.walls || [], wallGeom).map((o) => { const lv = levels.find((l) => l.id === o.storey), dz = lv ? lv.elevation - g.elevation : 0; return { ...o, z0: o.z0 + dz, z1: o.z1 + dz }; }); } catch (e) { return []; } })();
    const widthOn = (dir) => { const r = [dir[1], -dir[0]], xs = []; for (const x of A.S.data.walls || []) for (const q of [x.a, x.b]) xs.push(q[0] * r[0] + q[1] * r[1] - x.t / 2, q[0] * r[0] + q[1] * r[1] + x.t / 2); /* the outside faces (square walls exactly) */ return xs.length ? { x0: Math.min(...xs), x1: Math.max(...xs) } : null; };
    const noted = (view, ctx) => { try { return viewNotes(view, { ...ctx, levels: lvls, fmt: fmtN }); } catch (e) { console.error(e); return []; } };
    for (const [side, dir] of Object.entries(elevationDirs)) {
      const settings=readProjectedView(w,'elevation:'+side);
      const view = { ...projectView(els, { dir, box:projectedBox(settings), ...sectionModel(w,g.id,k) }), scale:settings.scale, grids: gridsInView(gAxes, dir) };
      if(settings.issue)view.warnings=[{reason:settings.issue}];
      view.images = pictureViews({ dir }, g);   // 0.8 D8.8 round 5
      view.notes = noted(view, { kind: 'elevation', dir, base: g.elevation, openings: facts, width: straightElevationWidth(sectionModel(w,g.id,k).walls,dir)||widthOn(dir) });
      input.elevations.push({ ref: side, title: t('res.sh.elev.' + side), view });
    }
    for (const sl of R.secs) {
      if(!levels.some(l=>l.id===sl.storey)||![...sl.a,...sl.b,sl.depth].every(Number.isFinite)||Math.hypot(sl.b[0]-sl.a[0],sl.b[1]-sl.a[1])<100||sl.depth<0) {
        input.sections.push({ref:sl.guid,title:t('res.sec.name',{name:sl.name}),view:{bounds:null,warnings:[{reason:t('proj.section_invalid')}]}});
        continue;
      }
      const M = viewerToPlan(C, w.storeyWorld(sl.storey));
      const { o, dir } = sectionDir(sl);
      const settings=readProjectedView(w,'section:'+sl.guid);
      const view = { ...projectView(modelTriangles(model, M, { skip }), { dir, cut: { o }, far: sl.depth, ...sectionModel(w,sl.storey,k), materials:cutMaterials, detail:settings.detail, scale:settings.scale||50, box:projectedBox(settings) }), scale:settings.scale, groundY:g.elevation-(levels.find(l=>l.id===sl.storey)?.elevation??g.elevation), grids: gridsInView(gridsOn(sl.storey), dir) };
      if(settings.issue)view.warnings.push({reason:settings.issue});
      view.images = pictureViews({ dir, o, guid: sl.guid }, levels.find((l) => l.id === sl.storey) || g);   // 0.8 D8.8 round 5
      view.notes = noted(view, { kind: 'section', dir, base: levels.find((l) => l.id === sl.storey)?.elevation || 0 });
      input.sections.push({ ref: sl.guid, title: t('res.sec.name', { name: sl.name }), view });
    }
    // 0.6 round 2 (comforts-views.js): every room's four walls as interior elevations, made only when a sheet shows one
    input.interiors = [];
    for (const sp of A.S.data.derived?.spaces || []) {
      const i = levels.findIndex((l) => l.id === sp.storey), lv = levels[i];
      if (!lv) continue;
      const height = levels[i + 1] ? levels[i + 1].elevation - lv.elevation : lv.height, name = [sp.number, sp.name].filter(Boolean).join(' ');
      const ctx = () => {
        if (interiorCtx.has(lv.id)) return interiorCtx.get(lv.id);
        const pl = w.placements();
        const its = placedItems(w, lv.id).map((p) => ({ tag: p.itemNumber, at: [p.x, p.y], z: p.z, h: Number(pl.find((r) => r.id === p.id)?.equipment?.Height || 0) * w.unitMm || 900 }));
        const r = { els: modelTriangles(model, viewerToPlan(C, w.storeyWorld(lv.id)), { skip }), its, loops: A.loopsOf(lv.id) };
        interiorCtx.set(lv.id, r);
        return r;
      };
      for (const side of ROOM_SIDES) input.interiors.push({ ref: sp.guid + ':' + side, title: t('comforts.ie.title', { room: name, side: t('comforts.ie.side.' + side) }), get view() {
        if (this._view) return this._view;
        const c = ctx(), loop = loopAt(c.loops.rooms, sp.seed);
        const v = loop ? interiorView(c.els, { poly: loop.poly, name }, side, { height }) : { bounds: null };
        if (loop) v.notes = noted(v, { kind: 'interior', openings: facts.filter((o) => o.storey === lv.id).map((o) => { const dz = lv.elevation - g.elevation; return { ...o, z0: o.z0 - dz, z1: o.z1 - dz }; }), items: c.its });
        return (this._view = v);
      } });
    }
    const sch = A.schedules?.() || {};
    const schTitle = { lumber: t('res.fr.sch.lumber'), devices: t('res.el.sch.devicesched'), circuits: t('res.el.sch.circuitsched') };
    for (const kind of ['doors', 'windows', 'rooms', 'devices', 'circuits', 'lumber']) if (sch[kind]?.rows?.length) input.schedules.push({ ref: kind, title: schTitle[kind] || t('model.sch.' + kind), ...sch[kind] });
    for (const [kind,key] of [['assemblies','assemblies'],['materialLegend','materials']]) if(sch[kind]) input.schedules.push(...documentPages(sch[kind],key));
    for (const fr of R.frames) if (fr.kind === 'wall' && fr.wallPieces?.pieces?.length) { const wall = A.S.data.walls.find((x) => x.guid === fr.host); input.framing.push({ title: t('res.sh.framewall', { len: L(wall?.len || 0), level: levels.find((l) => l.id === fr.storey)?.name || '' }), pieces: fr.wallPieces.pieces }); }
    return input;
  }
  function openSheets() {
    const dlg = A.root.querySelector('[data-res-sheets-dlg]');
    if (!dlg) return;
    const list = dlg.querySelector('[data-res-shlist]'), view = dlg.querySelector('[data-res-shview]'), paperSel = dlg.querySelector('[data-res-shpaper]');
    if (!dlg.dataset.bound) {
      dlg.dataset.bound = '1';
      dlg.querySelector('[data-res-shclose]')?.addEventListener('click', () => dlg.close());
      paperSel?.addEventListener('change', () => { try { localStorage.setItem(PAPER_KEY, paperSel.value); } catch (e) { /* this tab */ } fill(); });
      dlg.querySelector('[data-res-shpdf]')?.addEventListener('click', () => {
        if (!R.sheets?.length) return;
        const base = String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
        A.host.download(base + ' — ' + t('res.sh.set') + '.pdf', setPdf(R.sheets, { paper: paperNow(), title: base }), 'application/pdf');   // i18n-ignore: a file name
        A.host.status(t('res.sh.done', { n: R.sheets.length }));
      });
    }
    if (paperSel) { labelPapers(paperSel, A.units()); paperSel.value = paperNow(); }   // GH.3-A: names kept, sizes in the display unit
    const show = (i) => {
      const sh = R.sheets[i];
      for (const b of list.querySelectorAll('button')) b.setAttribute('aria-pressed', b.dataset.sheet === String(i) ? 'true' : 'false');
      view.innerHTML = sh ? sheetSvg(sh, { paper: paperNow() }) : '';   // generated here; text in it is escaped
    };
    const fill = () => {
      list.replaceChildren(el('li', { className: 'bc-sub' }, t('res.sh.making')));
      setTimeout(async () => {
        try { await window.bimcraftPicture?.prepareSheet?.(); } catch (e) { /* the sheets go on without pictures */ }
        try { R.sheets = makeSet(paperNow()); } catch (e) { console.error(e); R.sheets = []; A.host.status(t('res.sh.failed', { why: e.message || e }), true); }
        list.replaceChildren(...R.sheets.map((sh, i) => { const b = el('button', { type: 'button', className: 'bc-sheet-btn', 'data-sheet': String(i), 'aria-pressed': 'false' }, el('strong', {}, sh.number), ' ' + sh.title); b.addEventListener('click', () => show(i)); return el('li', {}, b); }));
        if (!R.sheets.length) list.replaceChildren(el('li', { className: 'bc-sub' }, t('res.sh.none')));
        show(0);
      }, 30);
    };
    if (!dlg.open) dlg.showModal();
    fill();
  }

  // ---- the extension ----
  const ext = {
    tools: ['roofplane', 'foundation', 'countertop', 'stair', 'railing', 'framing', 'terrain', 'pad', 'paving', 'section', 'electrical', 'ellink'],
    hint: (name) => (name === 'stair' && R.stair.kind === 'spiral' ? 'comforts.hint.spiral' : 'res.hint.' + name),   // 0.6 round 2: the spiral stair's own
    typed: () => false,
    classes: /^Ifc(Roof|Slab|ElementAssembly|Footing|Wall|Furniture|FurnishingElement|Stair|StairFlight|Railing|Member|Beam|GeographicElement|Annotation|Outlet|SwitchingDevice|LightFixture|Sensor|JunctionBox|ElectricDistributionBoard|FlowTerminal|FlowController|FlowFitting)$/,
    /** 0.6 DF.19 (views-ui.js): what a sheet can show, and the set's paper / title-block options. */
    sheetInput: () => setInput(), sheetOpts: () => setOpts(paperNow()),
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
      if (slx) return { kind: 'section', guid: slx.guid, label: t('res.sec.name', { name: slx.name }) };
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
  return { ext, state: R };
}
