/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-terrain.js: res-ui.js's 17 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuTerrain(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { loadTin, placeTerrain, thinToGrid, drawingContours, readLandXmlSurfaces, parsePointText, autoOffset, toModel, readTerrain, existingSurface, finishedSurface, landXml, placeHardscape, changeTerrain, changePad, changeHardscape, HARD_KINDS } from './res-terrain.js';
import { isMetric } from './model-units.js';
import { el } from './ui-util.js';
import { labelPoint } from './model-rooms.js';

export function mountRsuTerrain(ctx) {
  const { R, t, L, writer, levelGuid, inv4m } = ctx;

  /** The ground level (the one at elevation 0, else the lowest): the plan the terrain draws on. */
  const groundLevel = () => { const L2 = ctx.A.S.data?.levels || []; return L2.find((l) => Math.abs(l.elevation) < 1) || L2[0] || null; };
  const storeyM = (storey) => { const w = writer(); return w ? w.storeyWorld(storey) : null; };
  /** Plan of the level shown ↔ world (the site's) mm. */
  const toWorld = (p) => { const M = storeyM(ctx.A.S.level); return M ? ctx.apply4m(M, p[0], p[1], 0) : [p[0], p[1], 0]; };
  const toPlan = (x, y) => { const M = storeyM(ctx.A.S.level); if (!M) return [x, y]; const q = ctx.apply4m(inv4m(M), x, y, 0); return [q[0], q[1]]; };
  function buildingCentre() {
    const ws = ctx.A.wallsHere();
    if (!ws.length) return [0, 0];
    let x = 0, y = 0;
    for (const w of ws) { x += w.a[0] + w.b[0]; y += w.a[1] + w.b[1]; }
    const c = toWorld([x / ws.length / 2, y / ws.length / 2]);
    return [c[0], c[1]];
  }
  async function ensureTin() { if (!R.tr.tinReady) { await loadTin(); R.tr.tinReady = true; } }
  function makeFromSpots() {
    if (R.tr.spots.length < 3) { ctx.A.host.status(t('res.err.spots'), true); return; }
    ensureTin().then(() => {
      const pts = R.tr.spots.map((q) => ({ x: q.x, y: q.y, z: q.z }));
      R.tr.spots = [];
      ctx.A.commit(placeTerrain({ source: 'sketch', points: pts, interval: isMetric(ctx.A.units()) ? 500 : 304.8 }), { label: t('res.terrain'), verb: t('model.verb.placed') });
    }).catch((e) => ctx.A.host.status(String(e.message || e), true));
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
      const cell = 1000 / ctx.UNIT_MM[unit];   // 1 m cells, the lowest point in each (ground)
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
      // 0.10 BK.8 (units on import): the drawing's own $INSUNITS when it states one this tool reads (it was ignored); else asked first
      const said = { 2: 'ft', 4: 'mm', 6: 'm', 21: 'ftUS' }[model.header?.INSUNITS | 0] || null;
      const unit = await groundUnit(f, name.endsWith('.dwg') ? 'DWG' : 'DXF', said);
      return unit ? { points: r.points, lines: r.lines, unit } : null;
    }
    if (/\.(xml|landxml)$/.test(name)) {   // 0.6 DF.24: CivilCraft's LandXML surfaces, their own triangles kept
      const lx = readLandXmlSurfaces(await f.text());
      const i = lx.surfaces.length > 1 ? await chooseSurface(lx.surfaces) : 0;
      if (i < 0) return null;
      const sf = lx.surfaces[i];
      return { points: sf.pts, lines: [], faces: sf.faces.length ? sf.faces : null, unit: lx.unit, source: 'landxml', notes: lx.notes, surface: sf.name };
    }
    const unit = await groundUnit(f, t('res.tr.pointsfile'), null);   // a list of points states no unit: asked first (it was read in the Units list's unit, feet unless changed)
    return unit ? { points: parsePointText(await f.text()), lines: [], unit } : null;
  }
  /** 0.10 BK.8: the unit of a ground file. Stated by the file: used and said. Else the shell's one dialog (remembered per file), with this tool's units as its choices. → unit | null (not answered) */
  async function groundUnit(f, format, said) {
    const IU = window.ccImportUnits, id = (u) => (u === 'ftUS' ? 'usft' : u), back = (u) => (u === 'usft' ? 'ftUS' : u);
    if (!IU) return said || R.tr.unit;
    const a = await IU.resolve({ file: f, format, stated: said ? id(said) : null, choices: Object.keys(ctx.UNIT_MM).map(id), suggest: id(R.tr.unit), say: (s) => { R.tr.unitSaid = s; ctx.A.host.status(s); } });
    return a ? back(a.unit) : null;
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
      ctx.A.root.append(dlg);
      dlg.showModal();
    });
  }
  /** 0.8 D8.9 item 3: the file's own system against the model's (georef-ui.js decideFile); "Reproject into the model's system" moves the points through proj4. → r | null (cancelled) */
  async function inModelSystem(f, r) {
    const e = ctx.A.ed();
    if (!e) return r;
    const [{ readGeoref }, P, C, GU, GC] = await Promise.all([import('./ifc-geo.js'), import('./crs-pick.js'), import('./crs.js'), import('./georef-ui.js'), import('./georef-cloud.js')]);
    if (!C.catalogLoaded()) await C.loadCatalog();
    let g = null;
    try { g = readGeoref(e.api, e.mid); } catch (err) { g = null; }
    const ms = g ? P.modelSystem(g.crs) : null;
    if (!ms || ms.crs.unit === 'deg') return r;   // the model has no system chosen: the file keeps its own, as before
    const box = GC.boxOf(GC.pointsXY([...r.points, ...r.lines.flat()]));
    const d = await GU.decideFile({ file: f, fileCrs: r.crs || null, modelCrs: ms.crs, box, say: (...a) => ctx.A.host.status(...a), near: g.kind === 'site' ? [g.lon, g.lat] : null });
    if (!d) return null;
    if (d.problems?.length) GU.sendProblems(d.problems);
    if (d.action !== 'reproject') return r;
    const out = await GU.reprojectGround({ r, from: d.from, modelCrs: ms.crs, file: f, say: (...a) => ctx.A.host.status(...a) });
    if (!out) return null;
    if (out.refused) return r;
    GU.sendProblems([...d.problems, ...out.problems]);
    ctx.A.host.status(t('georef.file.done', { n: out.r.points.length.toLocaleString('en-US'), file: f.name, from: d.from.name, to: ms.crs.name }), false, true);
    return out.r;
  }
  async function groundFromFile(f) {
    try {
      await ensureTin();
      ctx.A.host.status(t('res.tr.reading', { name: f.name }));
      R.tr.unitSaid = '';
      let r = await readGroundFile(f);
      if (!r) { ctx.A.host.status(R.tr.unitSaid || ''); return; }
      r = await inModelSystem(f, r);   // 0.8 D8.9 item 3: a file in another system than the model's is offered the model's
      if (!r) { ctx.A.host.status(''); return; }
      const all = [...r.points, ...r.lines.flat()];
      if (all.length < 3) { ctx.A.host.status(t('res.err.nosurvey'), true); return; }
      const k = ctx.UNIT_MM[r.unit] || 1;
      const offset = autoOffset(all, k, buildingCentre());
      // the datum: the ground near the building sits 8" under the first floor
      const c = buildingCentre(), near = all.filter((p) => Math.hypot(p.x * k - offset[0] - c[0], p.y * k - offset[1] - c[1]) < 10000).map((p) => p.z).sort((a, b) => a - b);
      const zs = near.length ? near : all.map((p) => p.z).sort((a, b) => a - b);
      const datum = zs[Math.floor(zs.length / 2)] + 200 / k;
      const pts = toModel(r.points, { unitMm: k, offset, datum }), lines = r.lines.map((l) => toModel(l, { unitMm: k, offset, datum }));
      ctx.A.commit(placeTerrain({ source: r.source || (/\.(las|laz)$/i.test(f.name) ? 'las' : /\.(tif|tiff|asc)$/i.test(f.name) ? 'grid' : /\.(dxf|dwg)$/i.test(f.name) ? 'contours' : 'points'), points: pts, lines, faces: r.faces || null, datum, offset, unit: r.unit, interval: isMetric(ctx.A.units()) ? 500 : 304.8 }), { label: t('res.terrain'), verb: t('model.verb.placed') });
      if (r.source === 'landxml') ctx.A.host.status(t('res.lx.done', { name: r.surface, n: r.points.length }) + (r.notes?.length ? ' ' + r.notes.join(' ') : ''), false, true);
    } catch (e) { console.error(e); ctx.A.host.status(t('res.err.readground', { why: e.message || e }), true); }
  }
  function exportLandXml() {
    const w = writer(), trn = w && readTerrain(w);
    if (!trn || !R.tr.tinReady) { ctx.A.host.status(t('res.err.noterrain'), true); return; }
    const ex = existingSurface(trn), fin = finishedSurface(w, trn);
    const base = String(ctx.A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    ctx.A.host.download(base + ' terrain.xml', landXml([{ name: t('res.tr.existing'), surface: ex }, { name: t('res.tr.finished'), surface: fin }], { name: base, unit: isMetric(ctx.A.units()) ? 'm' : 'ft' }), 'application/xml');   // i18n-ignore: a file name
    ctx.A.host.status(t('res.tr.xmldone'));
  }
  function terrainScene(scene) {
    const g = groundLevel();
    if (!R.terrain || !g || ctx.A.S.level !== g.id) return;
    const k = ctx.A.kb();
    if (R.tr.contours) {
      const thin = [], lines = [];
      for (const c of R.tr.contours) {
        const P = c.pts.map((q) => toPlan(q.x, q.y));
        const major = Math.abs(Math.round(c.z / (R.terrain.interval * 5)) * R.terrain.interval * 5 - c.z) < 1;
        for (let i = 0; i + 1 < P.length; i++) (major ? lines : thin).push([P[i][0], P[i][1], P[i + 1][0], P[i + 1][1]]);
      }
      scene.symbols.unshift({ key: null, thin, lines });
    }
    for (const pd of R.pads) if (pd.shape) scene.symbols.push({ key: k + pd.id, dashed: ctx.pp(pd.shape.poly.map(([x, y]) => toPlan(x, y))), poly: pd.shape.poly.map(([x, y]) => toPlan(x, y)), roof: true });
    for (const h of R.hards) if (h.points.length >= 3) scene.symbols.push({ key: k + h.id, lines: ctx.pp(h.points), poly: h.points, roof: true });
  }
  function terrainOverlay(o) {
    if (ctx.A.S.tool === 'terrain') {
      for (const q of R.tr.spots) { const p = toPlan(q.x, q.y); o.points.push(p); }
      if (R.tr.at) o.hud = { p: R.tr.at, text: t('res.tr.hud.spot', { z: L(R.tr.z), n: R.tr.spots.length }) };
    }
    if (ctx.A.S.tool === 'paving') {
      const hd = R.tr.hard, pts = hd.pts || [];
      if (hd.at) o.snap = hd.at;
      for (const q of pts) o.points.push(q);
      const all = hd.at ? [...pts, hd.at.p] : pts;
      for (let i = 0; i + 1 < all.length; i++) o.lines.push([all[i][0], all[i][1], all[i + 1][0], all[i + 1][1]]);
      if (all.length >= 3) o.dashed.push([all[all.length - 1][0], all[all.length - 1][1], all[0][0], all[0][1]]);
      if (hd.at) o.hud = { p: hd.at.p, text: t('res.hard.' + hd.kind) };
    }
    if (ctx.A.S.tool === 'pad' && R.tr.padHover) { o.walls.push(R.tr.padHover); o.hud = { p: labelPoint(R.tr.padHover), text: t('res.pad.hud') }; }
  }
  function finishPaving() {
    const pts = R.tr.hard.pts;
    R.tr.hard.pts = null;
    if (!pts || pts.length < 3) { ctx.A.host.status(t('res.err.hardscape'), true); return; }
    ensureTin().then(() => ctx.A.commit(placeHardscape({ level: levelGuid(), points: pts, kind: R.tr.hard.kind }), { label: t('res.hard.' + R.tr.hard.kind), verb: t('model.verb.placed') }));
  }
  function terrainProps(items, kit) {
    const it = items[0], w = writer();
    if (it.kind === 'terrain') {
      const trn = R.terrain;
      if (!trn) return null;
      const run = (ch) => ensureTin().then(() => ctx.A.commit(changeTerrain(trn.guid, ch), { ...kit.one(t('res.terrain')), reselect: () => (R.terrain ? [ctx.A.kb() + R.terrain.id] : null) }));
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
      const run = (ch) => ensureTin().then(() => ctx.A.commit(changePad(pd.guid, ch), kit.one(t('res.pad'))));
      kit.field(t('res.pad.margin'), kit.lenInput(pd.margin, 'data-mp-padmargin', (mm) => run({ margin: mm }), { allowZero: true }));
      kit.field(t('res.pad.depth'), kit.lenInput(pd.depth, 'data-mp-paddepth', (mm) => run({ depth: mm }), { any: true }));
      const sl = el('input', { type: 'text', className: 'bc-input bc-num', value: pd.slope + ':1', 'data-mp-padslope': '' });
      sl.addEventListener('change', () => { const v = Number(String(sl.value).replace(/:1$/, '')); if (v >= 0.1 && v <= 100) run({ slope: v }); else { ctx.A.host.status(t('res.err.padslope'), true); sl.value = sl.defaultValue; } });
      kit.field(t('res.pad.slope'), sl);
      const ps = w?.readPset(pd.id, 'CadCraft_Pad') || {};
      kit.rows.push(el('dt', {}, t('res.tr.cut')), el('dd', { 'data-mp-padcut': '' }, Number(ps.Cut || 0).toFixed(1) + ' m³'), el('dt', {}, t('res.tr.fill')), el('dd', {}, Number(ps.Fill || 0).toFixed(1) + ' m³'));   // i18n-ignore: unit
      return { title: t('res.pad') };
    }
    if (it.kind === 'paving') {
      const h = R.hards.find((x) => x.guid === it.guid);
      if (!h) return null;
      const run = (ch) => ensureTin().then(() => ctx.A.commit(changeHardscape(h.guid, ch), kit.one(t('res.hard.' + h.kind))));
      kit.field(t('res.hard.kind'), kit.select(HARD_KINDS.map((x) => [x, t('res.hard.' + x)]), h.kind, 'data-mp-hdkind', (v) => run({ kind: v })));
      kit.field(t('model.prop.thickness'), kit.lenInput(h.thickness, 'data-mp-hdthick', (mm) => run({ thickness: mm }), { min: 10 }));
      return { title: t('res.hard.' + h.kind) };
    }
    return null;
  }

  return { groundLevel, toWorld, ensureTin, makeFromSpots, groundFromFile, exportLandXml, terrainScene, terrainOverlay, finishPaving, terrainProps };
}
