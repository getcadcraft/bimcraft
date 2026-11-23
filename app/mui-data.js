/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-data.js: model-ui.js's 21 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiData(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { snapshotModel, loopsOf } from './model-ops.js';
import { t } from './i18n.js';
import { wallsThrough, wallOutlines } from './model-walls.js';
import { viewerToPlan, planCut, chainLoops, wallDims, wallPieces } from './model-plan.js';
import { setAnnoRatio, sceneAnno } from './anno-scale-bim.js';
import { readMaterials } from './project-materials.js';
import { ModelWriter } from './model-write.js';
import { wallPlanGraphics, wallPlanEdges } from './wall-plan-graphics.js';
import { openingSymbol } from './model-openings.js';
import { fmtLen, isMetric, fmtArea } from './model-units.js';
import { MEASURE_FROM } from './wall-square.js';
import { loopAt, labelPoint } from './model-rooms.js';
import { roofGeometry, edgeKinds } from './res-roof.js';

export function mountMuiData(ctx) {
  const { MS, S, exts, PR, ed, kb, renderSchedule, fillLevelSelect, renderLevels, fillWallOpts, fillOpeningOpts, projectWallType, fillSlabOpts, drawOverlay, host } = ctx;

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
    if (MS.pv) MS.pv.markers = host.coords?.()?.planMarkers(S.planM) || [];
    for (const x of exts) x.refresh?.();
    PR.src?.invalidate();   // 0.7.1 → 0.8: the regulations add-on's problems, re-checked a moment later
    cutPlan();
    buildScene();
    if (fitToo) ctx.fitPlan();
    else if (MS.pv && !MS.pv.userMoved && MS.pv.outsideView()) ctx.fitPlan();   // 0.7 SU.751: what you drew went off the edge of a view you have not moved: show it all
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
  const throughHere = (cut = ctx.CUT) => (S.data?.levels?.length > 1 ? wallsThrough(S.data.walls, S.data.levels, S.level, cut) : []);
  /** How far this level's floor is above the floor of the level `storey` where a wall starts (what an opening's sill adds up there). */
  const riseOver = (storey) => { const a = S.data.levels.find((l) => l.id === storey), b = level(); return a && b ? Math.max(0, b.elevation - a.elevation) : 0; };
  /** 0.6 DF.19: the plan's view range and what it hides (views-ui.js asks views-model.js); else the cut at CUT. */
  function viewRange() {
    for (const x of exts) { const r = x.viewRange?.(S.level, S.kind, S.callout); if (r) return r; }
    // 0.6 DC.117: a ceiling plan with no settings of its own looks up from 2300 mm to the level's height
    if (S.kind === 'rcp') return { kind: 'rcp', cut: ctx.RCP_CUT, top: level()?.height || 3000, bottom: 0, depth: 0, hiddenClasses: new Set(), hiddenGuids: new Set() };
    return { cut: ctx.CUT, top: null, bottom: 0, depth: 50, hiddenClasses: new Set(), hiddenGuids: new Set() };
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
    setAnnoRatio(vr.scale || 0);   // 0.10 BK.10: plan symbols and tags of this view are sized for its scale
    const walls = wallsHere().filter((w) => !hiddenOwn(vr, 'IfcWall', w.guid));
    S.outlines = wallOutlines(walls.map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge, off: w.joinOff })));
    const k = kb(), own = ownKeys(), allOps = openingsHere(), ops = allOps.filter((o) => !hiddenOwn(vr, o.kind === 'window' ? 'IfcWindow' : 'IfcDoor', o.guid));
    const through = throughScene(vr, k);
    const byWall = new Map([...walls, ...throughHere(vr.cut)].map((w) => [w.id, w]));
    let materials = null;
    try { materials = readMaterials(new ModelWriter(ed().W, ed().api, ed().mid)); } catch { /* F02: preserve unsupported library; envelope only. */ }
    const scene = {
      through,
      walls: wallPlanGraphics(walls, S.outlines, allOps, materials, { detail: vr.detail || 'coarse', cutZ: vr.cut, scale: vr.scale || 50, keyBase: k, priority: S.layerPriority !== false, sketch: S.lodSketch !== false }),   // 0.9 WT.5: layer priority at junctions (Settings › BimCraft › Walls)
      symbols: ops.filter((o) => byWall.has(o.wall) && (!S.drag || S.drag.op.guid !== o.guid)).map((o) => ({ key: k + o.id, guid: o.guid, ...openingSymbol(o, byWall.get(o.wall)) })),
      rooms: hiddenOwn(vr, 'IfcSpace', '') ? [] : roomsScene(), dims: [],
      cut: (S.cut?.cut || []).filter((c) => !own.has(c.key)),
      below: (S.cut?.below || []).filter((c) => !own.has(c.key)),
      above: (S.cut?.above || []).filter((c) => !own.has(c.key)),
      cutZ: vr.cut, crop: vr.crop || null, scale: vr.scale || 0, anno: sceneAnno(vr.scale || 0), detail: vr.detail || 'coarse',   // 0.6 DC.117: the view's crop region and scale (sheets, print)
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
    if (S.dims && S.kind !== 'rcp') scene.dims = wallDims(walls, S.outlines, ops, (mm) => fmtLen(mm, S.units), { exteriorOf: (w) => (w.assembly || projectWallType(w.typeKey))?.exterior ?? true, from: MEASURE_FROM.includes(S.wallFrom) ? S.wallFrom : 'center' });   // 0.9 D3: what the Length field reads
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
    for (const st of new Set(list.map((w) => w.storey))) for (const [g, poly] of wallOutlines(D.walls.filter((w) => w.storey === st).map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge, off: w.joinOff })))) { outlines.set(g, poly); S.outlines.set(g, poly); }   // S.outlines too: the opening tools measure the face ends from it
    return list.map((w) => {
      const poly = outlines.get(w.guid) || [], rel = here.elevation + vr.cut - lvl.get(w.storey).elevation;
      return { key: k + w.id, guid: w.guid, poly, from: lvl.get(w.storey).name, pieces: poly.length ? wallPieces(w, poly, (D.openings || []).filter((o) => o.wall === w.id), rel) : [] };
    });
  }
  function buildScene() {
    if (!MS.pv) return;
    const scene = makeScene();
    MS.pv.gridUnit = isMetric(S.units) ? 1000 : 304.8;
    MS.pv.setScene(scene);
    renderSchedule();
    MS.pv.setSelection(selectedKeys());
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

  return { refresh, level, levelAbove, wallsHere, wallsOn, throughHere, riseOver, viewRange, cutPlan, storeyWorldMm, makeScene, buildScene, selectedKeys };
}
