/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cloud-ui.js — point clouds in BimCraft's 3D view (0.5 SG.1, suggestions #507 "test the workflow completely within
 * BimCraft" and #600 "as-built drawings"). Imported by bimcraft.js the first time a cloud is opened.
 *
 *   const pc = installClouds(host)   host = { root, viewer(), ensureViewer(), models(), status, frame, sendHandoff }
 *   await pc.open(file)               LAS / LAZ / XYZ / PTS / PLY / PCD / PTX into the scene, beside an open model (or on its
 *                                     own); a scanner maker's own format (RCP, RCS, FLS, LGS, TZF, ZFS) shows a card instead:
 *                                     what it is, how to export E57 or LAS, a link to help point-cloud-formats (0.6 PF.3)
 *   pc.card()                         → the card's format id while it shows, else null
 *   pc.snap(clientX, clientY)         → { point, dist, index } | null   the drawn cloud point under the pointer (Measure)
 *   pc.locate(point)                  → { lon, lat, e, n, h, crs } | null   a cloud point's place on the earth (its own system)
 *   pc.has() · pc.toggleBar() · pc.remove() · pc.state()   (state for tests)
 *
 * Placement in the scene (Place): "Model coordinates" — the cloud's numbers are the model's own (the file's IFC
 * coordinates, so a scan registered to the design lines up); "Map coordinates" — through the model's IfcMapConversion
 * (the cloud in the model's projected system); "Centered on the model" — the cloud's middle on the model's middle, its
 * bottom on the model's bottom. On open: map when the model has a map conversion and the cloud names a system, else model
 * coordinates when they put the cloud near the model, else centered (said). Alone, a cloud sits round the origin.
 * The placement is worked out when it is chosen and then kept: drawing or editing the model never moves the cloud.
 * The bar (`[data-cloudbar]`): colour by, point size, points to show (re-reads the file), units when the file does not
 * say, placement, the slice (off / top / front / side, where, how thick — the as-built cut to trace from), Trace in CadCraft
 * (hands the file over; CadCraft attaches it under the drawing), hide, remove. Its choices persist in localStorage
 * "bimcraft.cloud" {color, size, budget, thick}.
 */
import { readCloudInfo, loadCloud, colorize, colorModes, cloudSummary, nativeCard, UNIT_M } from './pointcloud.js';
import { nativeCloud, CLOUD_NATIVE } from './cloud-types.js';
import { CloudLayer, M4 } from './pointcloud-three.js';
import { readGeoref } from './ifc-geo.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { getDisplayUnits, lenMark, parseLen } from './model-units.js';   // GH.3-A: the slice's lengths follow the display unit

const BUDGETS = [1e6, 2e6, 5e6, 10e6];
const SLICE_N = { top: [0, 1, 0], front: [0, 0, 1], side: [1, 0, 0] };   // viewer space (Y up)
const AXIS_I = { top: 1, front: 2, side: 0 };

export function installClouds(host) {
  const pref = { color: 'rgb', size: 2, budget: 2e6, thick: 0.1 };
  try {
    const v = JSON.parse(localStorage.getItem('bimcraft.cloud') || '{}') || {};
    if (['rgb', 'height', 'intensity', 'class', 'single'].includes(v.color)) pref.color = v.color;
    if (Number.isFinite(v.size) && v.size >= 1 && v.size <= 8) pref.size = v.size;
    if (BUDGETS.includes(v.budget)) pref.budget = v.budget;
    if (Number.isFinite(v.thick) && v.thick > 0 && v.thick <= 5) pref.thick = v.thick;
  } catch (e) { /* defaults */ }
  const save = () => { try { localStorage.setItem('bimcraft.cloud', JSON.stringify(pref)); } catch (e) { /* private window */ } };

  let layer = null, cloud = null, file = null, info = null, place = 'own', unit = null, slice = null, notes = [];
  let abort = null;
  let adjustM = null;   // DF.22 (bim-draw): the alignment (pc.adjust), kept in the placement's own frame: placed = placeM · adjustM
  let placeM = null;    // the placement, worked out when it is chosen (open, Place, Units, another model) and then kept
  const bar = buildBar();
  const secBar = host.root.querySelector('[data-sectionbar]'), toolbar = host.root.querySelector('[data-toolbar]');
  secBar.after(bar.el);
  // under the toolbar, and under the section bar while that shows (both sit over the top of the view); the card likewise
  let card = null;
  function position() {
    for (const box of [bar.el, card]) {
      if (!box || box.hidden) continue;
      const st = box.offsetParent?.getBoundingClientRect();
      if (!st) continue;
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const mb = host.root.querySelector('[data-plan-wrap]:not([hidden]) [data-modelbar]');   // the plan's Draw bar (bim-draw DF.22)
      const above = [toolbar, secBar, mb].filter((x) => x && !x.hidden && x.offsetParent).map((x) => x.getBoundingClientRect().bottom);
      if (above.length) box.style.setProperty('--bc-cloud-top', ((Math.max(...above) - st.top) / rem + 0.4).toFixed(3) + 'rem');
    }
  }
  new ResizeObserver(position).observe(toolbar);
  new ResizeObserver(position).observe(secBar);
  { // the plan's Draw bar (bim-draw DF.22): stack under it while its plan shows
    const mbar = host.root.querySelector('[data-modelbar]'), plan = host.root.querySelector('[data-plan-wrap]');
    if (mbar) new ResizeObserver(position).observe(mbar);
    if (plan) new MutationObserver(position).observe(plan, { attributes: true, attributeFilter: ['hidden'] });
  }
  new MutationObserver(position).observe(secBar, { attributes: true, attributeFilter: ['hidden', 'style'] });
  new MutationObserver(position).observe(bar.el, { attributes: true, attributeFilter: ['hidden'] });

  // ---- a scanner maker's own format (0.6 PF.3): a card, not an error ----
  function showCard(name, format) {
    host.ensureViewer();
    const w = nativeCard(name, format);
    card?.remove();
    card = el('div', { className: 'bc-sectionbar bc-cloudbar', 'data-cloud-card': format, role: 'alertdialog', 'aria-labelledby': 'bc-cloud-card-title' },
      el('strong', { id: 'bc-cloud-card-title' }, w.title),
      el('span', { 'data-cloud-card-body': '' }, w.body),
      el('span', { className: 'bc-sub', 'data-cloud-card-how': '' }, w.how),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cloud-card-help': '', onClick: () => window.cadcraftHelp?.open('point-cloud-formats') }, t('pc.native.help')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cloud-card-close': '', onClick: () => { card?.remove(); card = null; } }, t('pc.native.close')));
    bar.el.after(card);
    position();
    host.status(t('pc.native.short', { name, format: CLOUD_NATIVE[format].name }), true);
    card.querySelector('[data-cloud-card-help]').focus();
  }

  // ---- open ----
  async function open(f, keepAdjust = false) {
    const nat = nativeCloud(f.name, new Uint8Array(await f.slice(0, 16).arrayBuffer()));
    if (nat) { showCard(f.name, nat); return; }
    card?.remove(); card = null;
    if (!keepAdjust) adjustM = null;
    const v = host.ensureViewer();
    host.status(t('pc.reading', { file: f.name }));
    await host.frame();
    const nfo = await readCloudInfo(f);
    if (nfo.crs === null && nfo.code === null && nfo.las) { /* las.js has said why in crsNote */ }
    abort?.abort();
    abort = new AbortController();
    const t0 = performance.now();
    const c = await loadCloud(f, nfo, { budget: pref.budget, signal: abort.signal, progress: (p) => host.status(t('pc.loading', { file: f.name, pct: Math.round(p * 100) })) });
    abort = null;
    file = f; info = nfo; cloud = c;
    unit = c.unit;
    notes = [...c.notes];
    if (!unit) notes.push(t('pc.units.assumed'));
    if (!layer) layer = new CloudLayer({ renderer: v.renderer, camera: () => v.camera, parent: v.root, render: () => v.render(), patch: (m) => v.clipped(m) });
    layer.setPixelRatio(v.renderer.getPixelRatio());
    layer.set(c, M4.I());
    layer.setSize(pref.size);
    if (!colorModes(c).includes(pref.color)) pref.color = c.rgb ? 'rgb' : 'height';
    layer.setColors(colorize(c, pref.color));
    v.extraBoxes = [() => layer?.box()];
    place = autoPlace();
    settle();
    applyPlace(true);
    slice = null;
    layer.setSlice(null);
    fillBar();
    bar.el.hidden = false;
    host.cloudShown?.(true);
    const s = cloudSummary(c);
    offerReproject(true).catch(() => {});   // 0.8 D8.9 item 3: a cloud in another system than the model's is offered the model's
    host.status(t('pc.opened', { file: f.name, kept: s.kept.toLocaleString('en-US'), read: s.read.toLocaleString('en-US'), s: ((performance.now() - t0) / 1000).toFixed(1) }) + (notes.length ? ' ' + notes.join(' ') : ''), false, !notes.length);
  }


  // ---- 0.8 D8.9 item 3: reproject the loaded cloud into the model's system (the file on disk is never touched; opening it again gives its own system back) ----
  async function offerReproject(auto) {
    if (!cloud || !file) return;
    const ent = first();
    if (!ent) { if (!auto) host.status(t('georef.file.nomodel'), true); return; }
    const [P, GU, GC, C] = await Promise.all([import('./crs-pick.js'), import('./georef-ui.js'), import('./georef-cloud.js'), import('./crs.js')]);
    if (!C.catalogLoaded()) await C.loadCatalog();
    const g = geo(ent), ms = g ? P.modelSystem(g.crs) : null, modelCrs = ms ? ms.crs : null;
    if (auto && (!modelCrs || !info.crs || P.sameCoordinates(info.crs, modelCrs))) return;
    const f = file, mine = cloud;
    const d = await GU.decideFile({ file: f, fileCrs: info.crs, modelCrs, box: [mine.min[0], mine.min[1], mine.max[0], mine.max[1]], say: (...a) => host.status(...a) });
    if (cloud !== mine) return;
    if (d?.from && !info.crs) { info.crs = d.from; info.code = d.from.code; }
    if (!d || d.action !== 'reproject') { if (d?.problems?.length) GU.sendProblems(d.problems); return; }
    const r = await GU.runReproject({ xy: GC.cloudXY(mine), from: d.from, to: modelCrs, file: f, say: (...a) => host.status(...a) });
    if (!r || cloud !== mine) return;
    if (r.refused) { GU.sendProblems(r.problems); host.status(r.problems[0].text, true); return; }
    const per = (u) => UNIT_M[u] || 1;
    const zFactor = per(mine.zUnit || mine.unit) / per(modelCrs.unit);
    const was = mine.n, { dropped } = GC.applyCloud(mine, r.xy, { unit: modelCrs.unit, zFactor });
    info.crs = modelCrs; info.code = modelCrs.code; unit = mine.unit;
    layer.set(mine, M4.I());
    layer.setColors(colorize(mine, pref.color));
    place = autoPlace(); settle(); applyPlace(true); fillBar();
    GU.sendProblems([...d.problems, ...r.problems]);
    host.status(t('georef.file.done', { n: (was - dropped).toLocaleString('en-US'), file: f.name, from: d.from.name, to: modelCrs.name }) + ' ' + t('georef.file.reopen'), false, true);
  }

  // ---- placement ----
  const uM = () => UNIT_M[unit || 'm'];
  const zM = () => UNIT_M[cloud.zUnit && cloud.unit ? cloud.zUnit : unit || 'm'];
  /** File units (relative to the origin) → metres, Z up, absolute. */
  const base = () => M4.mul(M4.S(uM(), uM(), zM()), M4.T(...cloud.origin));
  const centreBottom = () => [(cloud.min[0] + cloud.max[0]) / 2 * uM(), (cloud.min[1] + cloud.max[1]) / 2 * uM(), cloud.min[2] * zM()];
  function first() { const ms = host.models(); return ms.length ? ms[0] : null; }
  function modelBox() {
    const v = host.viewer();
    let lo = null, hi = null;
    for (const L of v.layers.values()) {
      if (!L.group.visible || L.box.isEmpty()) continue;
      const b = L.box.clone().applyMatrix4(L.group.matrix);
      lo = lo ? lo.map((x, k) => Math.min(x, b.min.getComponent(k))) : b.min.toArray();
      hi = hi ? hi.map((x, k) => Math.max(x, b.max.getComponent(k))) : b.max.toArray();
    }
    return lo ? { min: lo, max: hi } : null;
  }
  function matrixFor(mode) {
    const v = host.viewer(), ent = first();
    if (mode === 'own' || !ent) return M4.mul(M4.mul(M4.YUP, M4.T(...centreBottom().map((x) => -x))), base());
    const C = [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], P = v.modelMatrix(ent.mi);
    // the model's own coordinates in metres, Z up → the viewer (ifc-geo.js viewerToFile, the other way)
    const toViewer = (m) => M4.mul(M4.mul(P, C), M4.mul(M4.YUP, m));
    if (mode === 'model') return toViewer(base());   // the cloud's numbers are the model's
    if (mode === 'map') {
      const g = geo(ent);
      if (!g || g.kind !== 'map') return null;
      // map metres → map units → the model's file units (IfcMapConversion undone) → metres
      return toViewer(M4.mul(M4.mul(M4.S(g.fileUnitM), M4.inv(g.matrix)), M4.mul(M4.S(1 / g.mapUnitM), base())));
    }
    const mb = modelBox();
    if (!mb) return matrixFor('own');
    const c = [(mb.min[0] + mb.max[0]) / 2, mb.min[1], (mb.min[2] + mb.max[2]) / 2];
    return M4.mul(M4.mul(M4.T(...c), M4.YUP), M4.mul(M4.T(...centreBottom().map((x) => -x)), base()));
  }
  let geoCache = new WeakMap();
  function geo(ent) {
    if (!geoCache.has(ent)) { let g = null; try { g = readGeoref(ent.ifc.api, ent.model.modelID); } catch (e) { g = null; } geoCache.set(ent, g); }
    return geoCache.get(ent);
  }
  /** Is the cloud's middle near the model when placed so (within the model's size, at least 50 m)? */
  function near(mode) {
    const m = matrixFor(mode), mb = modelBox();
    if (!m || !mb) return false;
    const p = M4.apply(m, [(cloud.max[0] - cloud.min[0]) / 2 + cloud.min[0] - cloud.origin[0], (cloud.max[1] - cloud.min[1]) / 2 + cloud.min[1] - cloud.origin[1], cloud.min[2] - cloud.origin[2]]);
    const size = Math.max(50, ...[0, 1, 2].map((k) => mb.max[k] - mb.min[k]));
    return [0, 1, 2].every((k) => p[k] >= mb.min[k] - size && p[k] <= mb.max[k] + size);
  }
  function autoPlace() {
    const ent = first();
    if (!ent) return 'own';
    const g = geo(ent);
    if (g?.kind === 'map' && info.crs && near('map')) {
      const modelCode = Number(g.crs.record?.Code) || g.crs.code;   // 0.8 D8.9: the system the person chose for the model counts first
      if (modelCode && info.code && modelCode !== info.code) notes.push(t('pc.place.crs_differ', { cloud: 'EPSG:' + info.code, model: 'EPSG:' + modelCode }));
      return 'map';
    }
    if (near('model')) return 'model';
    notes.push(t('pc.place.centered'));
    return 'center';
  }
  /** Work the placement out now and keep it: walls drawn later change the model's box ("Centered on the model"), and an
   *  alignment (pc.adjust) is made against the cloud where it is — so the cloud stays put while the model changes. */
  function settle() { placeM = matrixFor(place) || matrixFor('center'); }
  /** The placement with the alignment inside it (pc.adjust). The alignment is kept in the cloud's own frame, not the scene's:
   *  when the cloud is placed again (another model, Place, Units, a re-read) it moves with the cloud. Kept in the scene, a turn
   *  made about the cloud's walls would be made about a point the cloud has left, and swing it away (0.6.1 FIX-061-SQUARE). */
  const placed = () => { if (!placeM) settle(); return adjustM ? M4.mul(placeM, adjustM) : placeM; };
  function applyPlace(fit = false) {
    layer.setMatrix(placed());
    const v = host.viewer();
    v.relist();
    if (fit && !host.models().length) v.view('iso');
    if (slice) applySlice();
    host.cloudChanged?.();
  }

  // ---- slice ----
  function sliceRange(axis) {
    const b = layer.box();
    if (!b) return [0, 1];
    const i = AXIS_I[axis];
    return [b.min.getComponent(i), b.max.getComponent(i)];
  }
  function applySlice() {
    if (!slice) { layer.setSlice(null); return; }
    layer.setSlice({ normal: SLICE_N[slice.axis], at: slice.at, half: pref.thick / 2 });
  }
  function setSlice(axis) {
    if (!axis) { slice = null; applySlice(); fillBar(); host.status(''); return; }
    const [lo, hi] = sliceRange(axis);
    // a plan cut at 1.2 m above the lowest point (where walls, doors and windows read), else the middle
    const at = axis === 'top' ? Math.min(hi, lo + 1.2) : (lo + hi) / 2;
    slice = { axis, at };
    applySlice();
    fillBar();
    if (axis === 'top') host.viewer().view('top');
    host.status(t('pc.slice.on.u', { thick: fmt(pref.thick) }), false, true);
  }

  // ---- picking (Measure) ----
  function snap(x, y) {
    if (!layer?.cloud || !layer.visible) return null;
    const v = host.viewer();
    return layer.pick(x, y, v.canvas, 8);
  }
  /** A viewer point back in the cloud's own coordinates (file units). */
  function toCloud(p) {
    const m = M4.inv(M4.mul(placed(), M4.T(...cloud.origin.map((x) => -x))));
    return M4.apply(m, p);
  }
  async function locate(p) {
    if (!cloud || !info.crs) return null;
    const crs = await import('./crs.js');
    if (!crs.catalogLoaded()) await crs.loadCatalog();
    const entry = info.code ? crs.byCode(info.code) : info.crs;   // 0.8 D8.9: a system the person said (or reprojected into) may be their own
    if (!entry || entry.geographic || entry.unit === 'deg') return null;
    const q = toCloud(p);
    const [lon, lat] = crs.transformer(entry, null)(q[0], q[1]);
    return { lon, lat, e: q[0], n: q[1], h: q[2], crs: entry.name, code: entry.code, per: crs.METRES_PER[entry.unit] || 1 };   // per: metres in the cloud's unit (GH.3-A: shown in the display unit)
  }

  // ---- the bar ----
  function buildBar() {
    const sel = (attr, label) => el('label', {}, label, ' ', el('select', { className: 'select-cc bc-select', [attr]: '' }));
    const root = el('div', { className: 'bc-sectionbar bc-cloudbar', 'data-cloudbar': '', hidden: true },
      el('span', { className: 'bc-cloud-name', 'data-cloud-name': '' }),
      el('span', { className: 'bc-sub', 'data-cloud-count': '' }),
      sel('data-cloud-color', t('pc.bar.color')),
      el('label', {}, t('pc.bar.size'), ' ', el('input', { type: 'range', min: '1', max: '8', step: '1', 'data-cloud-size': '' })),
      sel('data-cloud-budget', t('pc.bar.budget')),
      sel('data-cloud-units', t('pc.bar.units')),
      sel('data-cloud-place', t('pc.bar.place')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cloud-system': '', title: t('georef.cloud.title') }, t('georef.cloud.button')),   // 0.8 D8.9 item 3
      el('span', { className: 'bc-sub' }, t('pc.bar.slice')),
      ...['off', 'top', 'front', 'side'].map((a) => el('button', { type: 'button', className: 'bc-tool', 'data-cloud-slice': a, 'aria-pressed': 'false', title: t('pc.slice.' + a + '.title') }, el('span', {}, t('pc.slice.' + a)))),
      el('span', { className: 'bc-cloud-slicectl', 'data-cloud-slicectl': '', hidden: true },
        el('label', {}, t('pc.slice.at'), ' ', el('input', { type: 'range', min: '0', max: '1', step: '0.0005', 'data-cloud-at': '' })),
        el('label', {}, t('pc.slice.thick'), ' ', el('input', { type: 'text', className: 'bc-input bc-num', inputmode: 'decimal', 'data-cloud-thick': '' })),   // GH.3-A: the unit is in the box (the display unit)
        el('span', { className: 'bc-sub', 'data-cloud-atval': '' })),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cloud-trace': '', hidden: true }, t('pc.trace', { app: host.root.dataset.editApp || 'CadCraft' })),   // i18n-ignore: app name
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cloud-hide': '' }, t('pc.hide')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cloud-remove': '' }, t('pc.remove')));
    const q = (s) => root.querySelector(s);
    const b = { el: root, name: q('[data-cloud-name]'), count: q('[data-cloud-count]'), color: q('[data-cloud-color]'), size: q('[data-cloud-size]'), budget: q('[data-cloud-budget]'),
      units: q('[data-cloud-units]'), place: q('[data-cloud-place]'), slicectl: q('[data-cloud-slicectl]'), at: q('[data-cloud-at]'), thick: q('[data-cloud-thick]'), atval: q('[data-cloud-atval]'),
      system: q('[data-cloud-system]'), trace: q('[data-cloud-trace]'), hide: q('[data-cloud-hide]'), remove: q('[data-cloud-remove]') };
    b.color.addEventListener('change', () => { pref.color = b.color.value; save(); layer.setColors(colorize(cloud, pref.color)); });
    b.size.addEventListener('input', () => { pref.size = Number(b.size.value); save(); layer.setSize(pref.size); });
    b.budget.addEventListener('change', () => { pref.budget = Number(b.budget.value); save(); if (file) host.guard(() => open(file, true)); });
    b.units.addEventListener('change', () => { unit = b.units.value; settle(); applyPlace(true); fillBar(); });
    b.place.addEventListener('change', () => { place = b.place.value; settle(); applyPlace(); host.viewer().view('iso'); });
    root.addEventListener('click', (e) => {
      const s = e.target.closest('[data-cloud-slice]');
      if (s) setSlice(s.dataset.cloudSlice === 'off' ? null : s.dataset.cloudSlice);
    });
    b.at.addEventListener('input', () => { const [lo, hi] = sliceRange(slice.axis); slice.at = lo + (hi - lo) * Number(b.at.value); applySlice(); fillAt(); });
    b.thick.addEventListener('change', () => {
      const v = parseLen(String(b.thick.value).replace(',', '.'), getDisplayUnits()) / 1000;   // metres inside
      if (!(v > 0 && v <= 5)) { host.status(t('pc.slice.thick.bad.u', { max: lenMark(5000, getDisplayUnits()) }), true); b.thick.value = fmt(pref.thick); return; }
      pref.thick = v; save(); applySlice(); fillAt();
    });
    b.trace.addEventListener('click', () => {
      host.sendHandoff(host.root.dataset.editUrl, file, 'bimcraft').then(
        () => host.status(t('pc.traced', { file: file.name, app: host.root.dataset.editApp }), false, true),
        (err) => host.status(err?.code === 'blocked' ? t('handoff.blocked') : t('handoff.failed', { reason: err?.message || '' }), true));
    });
    b.system.addEventListener('click', () => host.guard(() => offerReproject(false)));
    b.hide.addEventListener('click', () => { layer.setVisible(!layer.visible); host.viewer().relist(); b.hide.textContent = layer.visible ? t('pc.hide') : t('pc.show'); });
    b.remove.addEventListener('click', remove);
    return b;
  }
  const fmt = (v) => lenMark(v * 1000, getDisplayUnits());   // metres in, the display unit out
  window.addEventListener('bimcraft-units', () => { if (cloud) { bar.thick.value = fmt(pref.thick); fillAt(); } });
  function options(select, list, value) {
    select.replaceChildren(...list.map(([v, label]) => el('option', { value: String(v) }, label)));
    select.value = String(value);
  }
  function fillBar() {
    if (!cloud) return;
    const s = cloudSummary(cloud);
    bar.name.textContent = cloud.name;
    bar.count.textContent = t('pc.bar.count', { kept: s.kept.toLocaleString('en-US'), read: s.read.toLocaleString('en-US') });
    options(bar.color, colorModes(cloud).map((m) => [m, t('pc.color.' + m)]), pref.color);
    bar.size.value = String(pref.size);
    options(bar.budget, BUDGETS.map((n) => [n, t('pc.budget.n', { n: n / 1e6 })]), pref.budget);
    options(bar.units, ['m', 'ft', 'ftUS'].map((u) => [u, t('pc.unit.' + u.toLowerCase())]), unit || 'm');
    bar.units.closest('label').hidden = !!cloud.unit;   // the file says: no question
    const ent = first(), g = ent ? geo(ent) : null;
    const places = ent ? [['model', t('pc.place.model')], ...(g?.kind === 'map' ? [['map', t('pc.place.map')]] : []), ['center', t('pc.place.center')]] : [['own', t('pc.place.own')]];
    options(bar.place, places, place);
    bar.place.closest('label').hidden = !ent;
    bar.el.querySelectorAll('[data-cloud-slice]').forEach((x) => x.setAttribute('aria-pressed', (x.dataset.cloudSlice === (slice?.axis || 'off')) ? 'true' : 'false'));
    bar.slicectl.hidden = !slice;
    bar.thick.value = fmt(pref.thick);
    bar.trace.hidden = !host.root.dataset.editUrl;
    bar.hide.textContent = layer?.visible === false ? t('pc.show') : t('pc.hide');
    fillAt();
  }
  function fillAt() {
    if (!slice) return;
    const [lo, hi] = sliceRange(slice.axis);
    bar.at.value = String(hi > lo ? (slice.at - lo) / (hi - lo) : 0);
    bar.atval.textContent = t('pc.slice.atval.u', { at: fmt(slice.at - lo), size: fmt(hi - lo) });
  }
  function remove() {
    abort?.abort();
    if (layer) layer.dispose();
    cloud = null; file = null; info = null; slice = null; adjustM = null; placeM = null;
    bar.el.hidden = true;
    const v = host.viewer();
    if (v) { v.extraBoxes = []; v.relist(); v.render(); }
    host.cloudShown?.(false);
    host.cloudChanged?.();
  }

  return {
    open, snap, locate, remove,
    /** A model opened or closed: place the cloud again (the automatic choice). */
    modelChanged() { geoCache = new WeakMap(); if (!cloud) return; notes = []; place = autoPlace(); settle(); applyPlace(); fillBar(); },
    has: () => !!cloud,
    toggleBar() { if (cloud) bar.el.hidden = !bar.el.hidden; return cloud ? !bar.el.hidden : false; },
    barShown: () => !!cloud && !bar.el.hidden,
    state: () => cloud && { name: cloud.name, kept: cloud.n, read: cloud.read, place, unit, color: pref.color, size: pref.size, budget: pref.budget, slice: slice && { ...slice, thick: pref.thick }, notes: [...notes], visible: layer.visible, box: layer.box() && [layer.box().min.toArray(), layer.box().max.toArray()] },
    layer: () => layer,
    /** DF.22: adjust(m) sets an extra viewer-space 4 × 4 (column-major, applied after the placement as it is now; null = none)
     *  and places the cloud again; adjust() → the current one in the viewer's space (identity when none). Stored in the cloud's
     *  own frame (see placed), so it is kept across modelChanged(), Place, Units and a budget re-read and moves with the cloud. */
    adjust(...a) {
      const scene = () => (adjustM && placeM ? M4.mul(M4.mul(placeM, adjustM), M4.inv(placeM)) : M4.I());
      if (!a.length) return scene();
      if (cloud && !placeM) settle();
      adjustM = a[0] && placeM ? M4.mul(M4.mul(M4.inv(placeM), a[0]), placeM) : null;
      if (cloud) applyPlace();
      return scene();
    },
    card: () => card?.dataset.cloudCard || null,
    toCloud,
    reproject: () => offerReproject(false),   // for tests: the same as the bar's button
  };
}
