/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-sheets.js: res-ui.js's 12 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuSheets(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { elevationMarkerOf, sectionDir, changeSectionLine, sectionTitle, PAPERS, buildSet, setPdf, sheetSvg } from './res-sheets.js';
import { el } from './ui-util.js';
import { isMetric } from './model-units.js';
import { projectName } from './schedule-data.js';
import { officeStrip } from './office-bim.js';
import { viewerToPlan } from './model-plan.js';
import { modelTriangles, elevationDirs, projectView } from './res-views.js';
import { readMaterials } from './project-materials.js';
import { toPlan as gridsToPlan, readGrids, gridsInView } from './model-grids.js';
import { openingFacts, viewNotes, ROOM_SIDES, interiorView } from './comforts-views.js';
import { wallGeom } from './model-arcs.js';
import { readViewNotes, readViewDims } from './elev-edit.js';
import { readProjectedView, projectedBox } from './projected-views.js';
import { sectionModel, straightElevationWidth } from './wall-section-graphics.js';
import { readCopies } from './view-copies.js';
import { placedItems } from './model-move.js';
import { loopAt } from './model-rooms.js';
import { documentPages } from './assembly-schedule-layout.js';
import { merge as mergeCredits } from './report/credits.js';
import { printSheets } from './print-style.js';
import { askCadFormat } from './cad-export-ui.js';
import { cadFile, setCad, CAD_FORMATS } from './plan-cad.js';
import { labelPapers } from './paper-labels.js';

export function mountRsuSheets(mc) {
  const { R, t, L, writer, bandOf, groundLevel, creditsSchedule } = mc;

  // ---- section lines and sheets (RC.5) ----
  function sectionScene(scene) {
    const k = mc.A.kb();
    for (const sl of R.secs) {
      if (sl.storey !== mc.A.S.level) continue;
      if (sl.kind === 'elevation') {   // 0.10 BT.10: an elevation marker — a circle with its number and a pointer the way it looks
        const { at: m, dir: d } = elevationMarkerOf(sl), n = [-d[1], d[0]], r = 300, ring = [];
        for (let i = 0; i < 24; i++) { const a0 = i * Math.PI / 12, a1 = (i + 1) * Math.PI / 12; ring.push([m[0] + Math.cos(a0) * r, m[1] + Math.sin(a0) * r, m[0] + Math.cos(a1) * r, m[1] + Math.sin(a1) * r]); }
        const tip = [m[0] + d[0] * 620, m[1] + d[1] * 620], p1 = [m[0] + d[0] * 150 + n[0] * 260, m[1] + d[1] * 150 + n[1] * 260], p2 = [m[0] + d[0] * 150 - n[0] * 260, m[1] + d[1] * 150 - n[1] * 260];
        scene.symbols.push({ key: k + sl.id, lines: [...ring, [p1[0], p1[1], tip[0], tip[1]], [p2[0], p2[1], tip[0], tip[1]]], dashed: [], poly: [[m[0] - 320, m[1] - 320], [m[0] + 320, m[1] - 320], [m[0] + 320, m[1] + 320], [m[0] - 320, m[1] + 320]] });
        scene.rooms.push({ key: k + sl.id, poly: [[m[0] - 250, m[1] - 250], [m[0] + 250, m[1] - 250], [m[0] + 250, m[1] + 250], [m[0] - 250, m[1] + 250]], at: m, label: [sl.name] });
        continue;
      }
      const { dir, u } = sectionDir(sl), ext = 600;
      const a = [sl.a[0] - u[0] * ext, sl.a[1] - u[1] * ext], b = [sl.b[0] + u[0] * ext, sl.b[1] + u[1] * ext];
      const arrows = [];
      for (const e of [a, b]) { const tip = [e[0] + dir[0] * 500, e[1] + dir[1] * 500]; arrows.push([e[0], e[1], tip[0], tip[1]], [tip[0], tip[1], tip[0] - dir[0] * 160 + u[0] * 120, tip[1] - dir[1] * 160 + u[1] * 120], [tip[0], tip[1], tip[0] - dir[0] * 160 - u[0] * 120, tip[1] - dir[1] * 160 - u[1] * 120]); }
      scene.symbols.push({ key: k + sl.id, lines: [[a[0], a[1], b[0], b[1]], ...arrows], dashed: [], poly: bandOf([a, b], 150) });
      for (const e of [a, b]) { const c = [e[0] - dir[0] * 350, e[1] - dir[1] * 350]; scene.rooms.push({ key: k + sl.id, poly: [[c[0] - 250, c[1] - 250], [c[0] + 250, c[1] - 250], [c[0] + 250, c[1] + 250], [c[0] - 250, c[1] + 250]], at: c, label: [sl.name] }); }
    }
  }
  function sectionOverlay(o) {
    if (mc.A.S.tool === 'elevation') {   // 0.10 BT.10: where the marker stands, then the way it looks
      const ev = R.elv;
      if (ev.at) o.snap = ev.at;
      if (!ev.a) { if (ev.at) o.hud = { p: ev.at.p, text: t('res.elv.hud.a') }; return; }
      o.points.push(ev.a);
      if (ev.at) {
        const b = ev.at.p, d = [b[0] - ev.a[0], b[1] - ev.a[1]], L2 = Math.hypot(...d) || 1, u = [d[0] / L2, d[1] / L2], n = [-u[1], u[0]], tip = [ev.a[0] + u[0] * Math.max(L2, 620), ev.a[1] + u[1] * Math.max(L2, 620)];
        o.lines.push([ev.a[0], ev.a[1], tip[0], tip[1]], [tip[0], tip[1], tip[0] - u[0] * 200 + n[0] * 140, tip[1] - u[1] * 200 + n[1] * 140], [tip[0], tip[1], tip[0] - u[0] * 200 - n[0] * 140, tip[1] - u[1] * 200 - n[1] * 140],
          [ev.a[0] - n[0] * 500, ev.a[1] - n[1] * 500, ev.a[0] + n[0] * 500, ev.a[1] + n[1] * 500]);
        o.hud = { p: b, text: t('res.elv.hud.b') };
      }
      return;
    }
    if (mc.A.S.tool !== 'section') return;
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
    const run = (ch) => mc.A.commit(changeSectionLine(sl.guid, ch), kit.one(sectionTitle(sl)));
    const nm = el('input', { type: 'text', className: 'bc-input', value: sl.name, maxLength: 8, 'data-mp-secname': '' });
    nm.addEventListener('change', () => { if (nm.value.trim()) run({ name: nm.value.trim() }); });
    kit.field(t('res.sec.label'), nm);
    kit.field(t('res.sec.look'), kit.button(t('res.sec.flip'), 'data-mp-secflip', () => run({ look: sl.look === 'left' ? 'right' : 'left' })));
    kit.field(t('res.sec.depth'), kit.lenInput(sl.depth, 'data-mp-secdepth', (mm) => run({ depth: mm }), { allowZero: true }), el('span', { className: 'bc-sub' }, ' ' + t('res.sec.depth.note')));
    kit.field(t('res.sh.title'), kit.button(t('res.sh.open'), 'data-mp-secsheets', () => openSheets()));
    return { title: sectionTitle(sl) };
  }

  const paperNow = () => { let p = null; try { p = localStorage.getItem(mc.PAPER_KEY); } catch (e) { /* none */ } return PAPERS[p] ? p : (isMetric(mc.A.units()) ? 'a3' : 'tabloid'); };
  /** Every drawing of the set, from the model as it is now. */
  function makeSet(paper, tb = null) {
    const input = setInput();
    if (!input) return [];
    return buildSet(input, withProject(setOpts(paper), tb));
  }
  /** #1995: makeSet a view at a time, giving the page back between views (a frame can paint, a click is heard); `progress({ done, total })`
   *  after each. The same steps in the same order as makeSet (setInputSteps), so the same sheets. `alive()` false: stop (→ null). */
  async function makeSetAsync(paper, { progress = () => {}, alive = () => true } = {}) {
    const steps = setInputSteps();
    let r;
    while (!(r = steps.next()).done) {
      progress(r.value);
      await new Promise((ok) => setTimeout(ok, 0));
      if (!alive()) return null;
    }
    return r.value ? buildSet(r.value, withProject(setOpts(paper), null)) : [];
  }
  /** The project's title block (SC.7; `tb` = { use, project, client, drawnBy, revision, date, labels } from SuperCad Studio's export set) put into the set's own strip:
   *  with `use` the project's name and date take the place of the model's; without it they only fill what the model leaves empty. Client, drawn by and revision join the strip. */
  const withProject = (o, tb) => (!tb ? o : { ...o, project: (tb.use ? tb.project || o.project : o.project || tb.project) || '', date: (tb.use && tb.date) || o.date,
    strip: [...(o.strip || []), tb.client && `${tb.labels?.client || ''}: ${tb.client}`, tb.drawnBy && `${tb.labels?.drawn_by || ''}: ${tb.drawnBy}`, tb.revision && `${tb.labels?.revision || ''}: ${tb.revision}`].filter(Boolean) });
  // 0.10 BK.4 (the small-house run): the title block names the PROJECT (IfcProject's long name or name), as a new building's does; the file's name only when the project has none
  const setOpts = (paper) => ({ paper, units: mc.A.units(), project: (() => { try { const w = writer(); return (w && projectName(w)) || ''; } catch (e) { return ''; } })() || String(mc.A.host.fileName?.() || '').replace(/\.ifc$/i, ''), date: new Date().toISOString().slice(0, 10), strip: (() => { try { const w = writer(); return w ? officeStrip(w) : []; } catch (e) { return []; } })() });
  /** What the sheets draw, from the model as it is now (refs: a level's / section line's GlobalId, a side, a schedule kind:
   *  0.6 DF.19's own sheets find their views by them). */
  /** 0.8 D8.8 round 5: the vertical pictures that face a view (picture-ui.js forView; their images are made by prepareSheet before the set is built). */
  function pictureViews(spec, base) {
    try { return window.bimcraftPicture?.forView?.({ ...spec, dzOf: (sid) => ((mc.A.S.data?.levels || []).find((l) => l.id === sid)?.elevation || 0) - (base?.elevation || 0) }) || []; } catch (e) { return []; }
  }
  function setInput() { const steps = setInputSteps(); let r; while (!(r = steps.next()).done); return r.value; }
  /** What the sheets draw, as steps: yields { done, total } after each level's plan, each elevation, each section and before the schedules;
   *  returns the input (or null). setInput runs it straight through; makeSetAsync gives the page back at each yield (#1995). */
  function* setInputSteps() {
    const model = mc.A.host.model(), ifc = mc.A.host.ifc?.(), w = writer();
    const levels = mc.A.S.data?.levels || [];
    if (!model || !ifc || !w || !levels.length) return null;
    const C = ifc.api.GetCoordinationMatrix(model.modelID);
    const k = mc.A.kb();
    const skip = new Set();
    for (const fr of R.frames) for (const p of fr.parts) skip.add(k + p);   // framing has its own sheets; inside walls it only clutters
    const g = groundLevel() || levels[0];
    const Mg = viewerToPlan(C, w.storeyWorld(g.id));
    const els = modelTriangles(model, Mg, { skip });
    let cutMaterials = null;
    try { cutMaterials = readMaterials(w); } catch (e) { /* Layer diagnostics accompany envelope fallback. */ }
    const input = { plans: [], rcps: [], elevations: [], sections: [], schedules: [], framing: [] };
    mc.interiorCtx.clear();
    const planLevels = levels.slice().filter((l) => (mc.A.S.data.walls || []).some((x) => x.storey === l.id) || l.id === g.id);
    const total = planLevels.length + Object.keys(elevationDirs).length + R.secs.length + 1;
    let done = 0;
    yield { done, total };
    for (const lv of planLevels) {
      input.plans.push({ ref: lv.guid, title: t('res.sh.plan', { level: lv.name }), scene: mc.A.sceneFor(lv.id) });
      yield { done: ++done, total };
      // 0.6 DC.117: its reflected ceiling plan, drawn only when a sheet shows it
      input.rcps.push({ ref: lv.guid, title: t('res.sh.rcp', { level: lv.name }), get scene() { return this._scene || (this._scene = mc.A.sceneFor(lv.id, 'rcp')); } });
    }
    // 0.6 DF.16: the building's grid lines seen end on, in the ground level's plan (the elevations' frame) or the section's level
    const gridsOn = (storey) => { try { return gridsToPlan(w, storey, readGrids(w)).flatMap((x) => x.axes); } catch (e) { return []; } };
    const gAxes = gridsOn(g.id);
    // 0.6 round 2 (comforts-views.js): each elevation and section carries its notes — level marks, the heights between levels,
    // the building's width and the door / window tags on an elevation (`view.notes`, drawn by the sheets)
    const lvls = levels.map((l) => ({ name: l.name, elevation: l.elevation }));
    const fmtN = (mm) => L(mm);
    const facts = (() => { try { return openingFacts(mc.A.S.data.openings || [], mc.A.S.data.walls || [], wallGeom).map((o) => { const lv = levels.find((l) => l.id === o.storey), dz = lv ? lv.elevation - g.elevation : 0; return { ...o, z0: o.z0 + dz, z1: o.z1 + dz }; }); } catch (e) { return []; } })();
    const widthOn = (dir) => { const r = [dir[1], -dir[0]], xs = []; for (const x of mc.A.S.data.walls || []) for (const q of [x.a, x.b]) xs.push(q[0] * r[0] + q[1] * r[1] - x.t / 2, q[0] * r[0] + q[1] * r[1] + x.t / 2); /* the outside faces (square walls exactly) */ return xs.length ? { x0: Math.min(...xs), x1: Math.max(...xs) } : null; };
    const ownNotes = (key) => { try { return [...readViewNotes(w, key).map((n) => ({ t: 'text', x: n.x, y: n.y, s: n.text })), ...readViewDims(w, key).map((d) => ({ t: 'dim', a: d.a, b: d.b, off: d.off, text: fmtN(d.len) }))]; } catch (e) { return []; } };   // 0.9 SU.1123: notes and dimensions written in the view
    const noted = (view, ctx) => { try { return viewNotes(view, { ...ctx, levels: lvls, fmt: fmtN }); } catch (e) { console.error(e); return []; } };
    for (const [side, dir] of Object.entries(elevationDirs)) {
      const settings=readProjectedView(w,'elevation:'+side);
      const view = { ...projectView(els, { dir, box:projectedBox(settings), ...sectionModel(w,g.id,k) }), scale:settings.scale, grids: gridsInView(gAxes, dir) };
      if(settings.issue)view.warnings=[{reason:settings.issue}];
      view.images = pictureViews({ dir }, g);   // 0.8 D8.8 round 5
      view.notes = [...noted(view, { kind: 'elevation', dir, base: g.elevation, openings: facts, width: straightElevationWidth(sectionModel(w,g.id,k).walls,dir)||widthOn(dir) }), ...ownNotes('elevation:' + side)];   // 0.9 SU.1123: notes written in the view
      input.elevations.push({ ref: side, title: t('res.sh.elev.' + side), view });
      yield { done: ++done, total };
    }
    for (const sl of R.secs) {
      if(!levels.some(l=>l.id===sl.storey)||![...sl.a,...sl.b,sl.depth].every(Number.isFinite)||Math.hypot(sl.b[0]-sl.a[0],sl.b[1]-sl.a[1])<100||sl.depth<0) {
        input.sections.push({ref:sl.guid,title:sectionTitle(sl),view:{bounds:null,warnings:[{reason:t('proj.section_invalid')}]}});
        yield { done: ++done, total };
        continue;
      }
      const M = viewerToPlan(C, w.storeyWorld(sl.storey));
      const { o, dir } = sectionDir(sl);
      const settings=readProjectedView(w,'section:'+sl.guid);
      const view = { ...projectView(modelTriangles(model, M, { skip }), { dir, cut: { o }, far: sl.depth, ...sectionModel(w,sl.storey,k), materials:cutMaterials, detail:settings.detail, scale:settings.scale||50, box:projectedBox(settings) }), scale:settings.scale, groundY:g.elevation-(levels.find(l=>l.id===sl.storey)?.elevation??g.elevation), grids: gridsInView(gridsOn(sl.storey), dir) };
      if(settings.issue)view.warnings.push({reason:settings.issue});
      view.images = pictureViews({ dir, o, guid: sl.guid }, levels.find((l) => l.id === sl.storey) || g);   // 0.8 D8.8 round 5
      view.notes = [...noted(view, { kind: 'section', dir, base: levels.find((l) => l.id === sl.storey)?.elevation || 0 }), ...ownNotes('section:' + sl.guid)];   // 0.9 SU.1123
      input.sections.push({ ref: sl.guid, title: sectionTitle(sl), view });
      yield { done: ++done, total };
    }
    // 0.9 D8.12-A: duplicated elevations and sections — the same drawing; an own copy with its own detail, scale and crop
    try {
      for (const cp of readCopies(w).filter((c) => /^(elevation|section):/.test(c.base))) {
        const [kind, ref] = cp.base.split(':');
        const set = cp.mode === 'own' ? cp.range : readProjectedView(w, cp.base);
        if (kind === 'elevation') {
          const dir = elevationDirs[ref];
          if (!dir) continue;
          const view = { ...projectView(els, { dir, box: projectedBox(set), ...sectionModel(w, g.id, k) }), scale: set.scale, grids: gridsInView(gAxes, dir) };
          view.notes = noted(view, { kind: 'elevation', dir, base: g.elevation, openings: facts, width: straightElevationWidth(sectionModel(w, g.id, k).walls, dir) || widthOn(dir) });
          input.elevations.push({ ref: cp.id, title: cp.name, view });
        } else {
          const sl = R.secs.find((x) => x.guid === ref);
          if (!sl || !levels.some((l) => l.id === sl.storey)) continue;
          const M = viewerToPlan(C, w.storeyWorld(sl.storey));
          const { o, dir } = sectionDir(sl);
          const view = { ...projectView(modelTriangles(model, M, { skip }), { dir, cut: { o }, far: sl.depth, ...sectionModel(w, sl.storey, k), materials: cutMaterials, detail: set.detail, scale: set.scale || 50, box: projectedBox(set) }), scale: set.scale, groundY: g.elevation - (levels.find((l) => l.id === sl.storey)?.elevation ?? g.elevation), grids: gridsInView(gridsOn(sl.storey), dir) };
          view.notes = noted(view, { kind: 'section', dir, base: levels.find((l) => l.id === sl.storey)?.elevation || 0 });
          input.sections.push({ ref: cp.id, title: cp.name, view });
        }
      }
    } catch (e) { console.error(e); }
    // 0.6 round 2 (comforts-views.js): every room's four walls as interior elevations, made only when a sheet shows one
    input.interiors = [];
    for (const sp of mc.A.S.data.derived?.spaces || []) {
      const i = levels.findIndex((l) => l.id === sp.storey), lv = levels[i];
      if (!lv) continue;
      const height = levels[i + 1] ? levels[i + 1].elevation - lv.elevation : lv.height, name = [sp.number, sp.name].filter(Boolean).join(' ');
      const ctx = () => {
        if (mc.interiorCtx.has(lv.id)) return mc.interiorCtx.get(lv.id);
        const pl = w.placements();
        const its = placedItems(w, lv.id).map((p) => ({ tag: p.itemNumber, at: [p.x, p.y], z: p.z, h: Number(pl.find((r) => r.id === p.id)?.equipment?.Height || 0) * w.unitMm || 900 }));
        const r = { els: modelTriangles(model, viewerToPlan(C, w.storeyWorld(lv.id)), { skip }), its, loops: mc.A.loopsOf(lv.id) };
        mc.interiorCtx.set(lv.id, r);
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
    const sch = mc.A.schedules?.() || {};
    yield { done: ++done, total };
    const schTitle = { lumber: t('res.fr.sch.lumber'), devices: t('res.el.sch.devicesched'), circuits: t('res.el.sch.circuitsched') };
    for (const kind of ['doors', 'windows', 'walls', 'rooms', 'devices', 'circuits', 'lumber']) if (sch[kind]?.rows?.length)   // 0.10 BK.129: Walls by type too, so a sheet's wall lengths and areas follow the model like its plan
      input.schedules.push({ ref: kind, ...sch[kind], title: sch[kind].title || schTitle[kind] || t('model.sch.' + kind) });   // 0.10 BK.4 (the small-house run): a schedule that comes with an empty title still gets its heading on the sheet
    for (const [kind,key] of [['assemblies','assemblies'],['materialLegend','materials']]) if(sch[kind]) input.schedules.push(...documentPages(sch[kind],key));
    // the Library credits: a schedule like the others, so it is on the set's schedule sheet and can be placed on any sheet, and it is made again from the model each time
    try {
      const creditItems = mergeCredits([w.libraryCredits()]);
      if (creditItems.length) input.schedules.push(creditsSchedule(creditItems, t));
    } catch (e) { console.error(e); }
    for (const fr of R.frames) if (fr.kind === 'wall' && fr.wallPieces?.pieces?.length) { const wall = mc.A.S.data.walls.find((x) => x.guid === fr.host); input.framing.push({ title: t('res.sh.framewall', { len: L(wall?.len || 0), level: levels.find((l) => l.id === fr.storey)?.name || '' }), pieces: fr.wallPieces.pieces }); }
    return input;
  }
  function openSheets() {
    const dlg = mc.A.root.querySelector('[data-res-sheets-dlg]');
    if (!dlg) return;
    const list = dlg.querySelector('[data-res-shlist]'), view = dlg.querySelector('[data-res-shview]'), paperSel = dlg.querySelector('[data-res-shpaper]');
    if (!dlg.dataset.bound) {
      dlg.dataset.bound = '1';
      dlg.querySelector('[data-res-shclose]')?.addEventListener('click', () => dlg.close());
      paperSel?.addEventListener('change', () => { try { localStorage.setItem(mc.PAPER_KEY, paperSel.value); } catch (e) { /* this tab */ } fill(); });
      dlg.querySelector('[data-res-shpdf]')?.addEventListener('click', () => {
        if (!R.sheets?.length) return;
        const base = String(mc.A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
        mc.A.host.download(base + ' — ' + t('res.sh.set') + '.pdf', setPdf(printSheets(R.sheets), { paper: paperNow(), title: base }), 'application/pdf');   // i18n-ignore: a file name
        mc.A.host.status(t('res.sh.done', { n: R.sheets.length }));
      });
      // SU.1994: every plan, elevation and section of the set in one DWG or DXF, at true size (plan-cad.js setCad), the views made a step at a time (#1995)
      dlg.querySelector('[data-res-shcad]')?.addEventListener('click', async () => {
        const fmt = await askCadFormat(mc.A.root, { title: t('cad.set.ask'), note: t('cad.set.note', { unit: t(isMetric(mc.A.units()) ? 'cad.unit.mm' : 'cad.unit.in') }) });
        if (!fmt) return;
        try {
          const steps = setInputSteps();
          let r;
          while (!(r = steps.next()).done) { if (r.value) mc.A.host.status(t('cad.set.busy', r.value)); await new Promise((ok) => setTimeout(ok, 0)); }
          const input = r.value;
          if (!input) return;
          const kinds = new Map((mc.A.S.data?.openings || []).map((o) => [o.guid, o.kind]));
          const f = cadFile(setCad(input, { units: mc.A.units(), kindOf: (g) => kinds.get(g) || null }), fmt);
          const base = String(mc.A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
          mc.A.host.download(base + ' — ' + t('res.sh.set') + '.' + f.ext, f.bytes, f.mime);   // i18n-ignore: a file name
          const c = f.report.counts, n = (input.plans || []).length + (input.elevations || []).length + (input.sections || []).length - (c['views-skipped'] || 0);
          const left = [c.pictures && t('cad.left.pictures', { n: c.pictures }), c.crop && t('cad.left.crop'), c['views-skipped'] && t('cad.left.views', { n: c['views-skipped'] })].filter(Boolean);
          mc.A.host.status(t('cad.set.done', { n, format: CAD_FORMATS[fmt].label }) + (left.length ? ' ' + t('cad.left', { what: left.join(', ') }) : ''));
        } catch (e) { console.error(e); mc.A.host.status(t('cad.failed', { msg: e.message }), true); }
      });
    }
    if (paperSel) { labelPapers(paperSel, mc.A.units()); paperSel.value = paperNow(); }   // GH.3-A: names kept, sizes in the display unit
    const show = (i) => {
      const sh = R.sheets[i];
      for (const b of list.querySelectorAll('button')) b.setAttribute('aria-pressed', b.dataset.sheet === String(i) ? 'true' : 'false');
      view.innerHTML = sh ? sheetSvg(sh, { paper: paperNow() }) : '';   // generated here; text in it is escaped
    };
    const fill = () => {
      const run = (R.sheetRun = (R.sheetRun || 0) + 1), alive = () => R.sheetRun === run && dlg.open;   // a newer fill (another paper) or a closed dialog stops this one
      list.replaceChildren(el('li', { className: 'bc-sub', 'data-res-shprogress': '' }, t('res.sh.making')));
      setTimeout(async () => {
        try { await window.bimcraftPicture?.prepareSheet?.(); } catch (e) { /* the sheets go on without pictures */ }
        if (!alive()) return;
        if (!mc.A.S.data && mc.A.ed()) { try { mc.A.prepareWorkspace(); } catch (e) { console.error(e); } }   // #1995: Draw off: the model's data as Print and the exports read it
        let failed = null, made = null;
        // #1995: a view at a time, saying how far it is (a 3,400-wall model held the page 18 to 28 s in one task)
        try { made = await makeSetAsync(paperNow(), { alive, progress: (p) => { const li = list.querySelector('[data-res-shprogress]'); if (li) li.textContent = t('res.sh.making.n', { done: p.done, total: p.total }); } }); }
        catch (e) { console.error(e); failed = e; }
        if (!alive()) return;
        R.sheets = made || [];
        if (failed) mc.A.host.status(t('res.sh.failed', { why: failed.message || failed }), true);
        list.replaceChildren(...R.sheets.map((sh, i) => { const b = el('button', { type: 'button', className: 'bc-sheet-btn', 'data-sheet': String(i), 'aria-pressed': 'false' }, el('strong', {}, sh.number), ' ' + sh.title); b.addEventListener('click', () => show(i)); return el('li', {}, b); }));
        // #1995: "Nothing to draw yet" only for a model with nothing to draw; a failure says it failed, a model without levels says so
        if (!R.sheets.length) list.replaceChildren(el('li', { className: 'bc-sub', 'data-res-shempty': failed ? 'failed' : (mc.A.host.model()?.elements ? 'nolevels' : 'none') },
          failed ? t('res.sh.failed', { why: failed.message || failed }) : mc.A.host.model()?.elements && !mc.A.S.data?.levels?.length ? t('res.sh.nolevels') : t('res.sh.none')));
        show(0);
      }, 30);
    };
    if (!dlg.open) dlg.showModal();
    fill();
  }

  return { sectionScene, sectionOverlay, sectionProps, paperNow, makeSet, setOpts, setInput, openSheets };
}
