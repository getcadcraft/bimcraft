/* SPDX-License-Identifier: Apache-2.0 */
/**
 * maplayers.js — map layers (picture + world file, XYZ tiles, WMS, WMTS, ArcGIS services) under CadCraft's model space and on
 * the ground of BimCraft's 3D view (0.5 SG.3, suggestion #572). Canonical in cadcraft/dev; BimCraft carries a byte-identical
 * copy (`node tools/maplayers/sync.mjs [--check]`, which also copies CivilCraft's DOM-free basemap.js + xml.js). Adapted from
 * CivilCraft's gis-map-ui.js (GIS builder C): the same fetching, cache, warping and Map dialog, behind a small host, so it is
 * not tied to a CivilCraft project.
 *
 *   const ml = createMapLayers(host)
 *   host = {
 *     root                    the element the dialog is added to · attrib: the element the attribution line goes in
 *     load() → { layers: [records], internet: bool }   the saved layers (records as basemap.js; pictures are not saved)
 *     save({ layers, internet })   keep them (CadCraft and BimCraft: localStorage; the host keeps its system itself)
 *     crs() → crs | null      the "project" system the layers are placed in (crs.js shape, may carry `local`); null = none
 *     canSetCrs               true: the dialog offers a system and a placement (CadCraft: the drawing's); false: the host's
 *                              own (BimCraft: the model's IfcProjectedCRS)
 *     setCrs({ code, place } | null)   (canSetCrs) the dialog's choice: an EPSG code and where the drawing sits on it · crsHelp: text shown when there is no system
 *     invalidate()            redraw · say(text) · busy(text) · ask({ title, text, buttons }) → key · refocus() · fit(box)
 *   }
 *   ml.paint(ctx, T, { w, h, dpr, ox, oy })   every visible layer, first at the bottom (T: project → CSS px of the pane)
 *   ml.drape.render(box, maxPx) → { canvas, layers, attribution } | null · ml.drape.onChange(f) · ml.drape.pending()
 *   ml.openDialog() · ml.addImageFiles(files) · ml.layers() · ml.crsChanged() · ml.stopAll() · ml.extents()
 *
 * Network: nothing is requested until the person turns "Map layers from the internet" on in the dialog (the choice is kept
 * with the layers); then tiles / pictures for the area on screen only, mode cors, no credentials, no referrer. Pictures from
 * files stay in this page's memory only (not saved).
 */
import { el } from './ui-util.js';
import * as B from './basemap.js';
import { byCode, crsFromEntry, crsFromPrj, frame, search, loadCatalog, catalogLoaded } from './crs.js';
import { t } from './i18n.js';

const MAX_ACTIVE = 6, MAX_CACHE = 200, MAX_TILES = 64;
const FETCH_OPTS = { mode: 'cors', credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'default' };
let uid = 0;

export function createMapLayers(host) {
  let state = { layers: [], internet: false };
  try { const s = host.load() || {}; state = { layers: B.readMaps(Array.isArray(s.layers) ? s.layers : [], [], null).filter((m) => m.kind !== 'image'), internet: s.internet === true }; } catch { /* a damaged value: start empty */ }
  const images = new Map();   // picture id → data: URL (this page only)
  const maps = () => state.layers;
  const internetOn = () => state.internet === true;
  const persist = () => { try { host.save({ layers: state.layers.filter((m) => m.kind !== 'image'), internet: state.internet }); } catch { /* storage full or private window */ } };
  const change = (fn) => { fn(state.layers); persist(); host.invalidate(); dialogApi?.renderRows(); };

  // ---------------------------------------------------------------- runtime (never saved)
  const runtime = new Map();
  const rt = (id) => { let r = runtime.get(id); if (!r) runtime.set(id, (r = { note: '', said: false, plans: new Map(), viewKey: '', timer: 0 })); return r; };
  const cache = new Map();
  let queue = [], active = 0, wanted = new Set(), repaintTimer = 0;
  let mode = 'plan', wantedDrape = new Set();
  const runtimeDrape = new Map();
  const drapeListeners = new Set();
  let drapeTimer = 0;
  const isWanted = (u) => wanted.has(u) || wantedDrape.has(u);
  const wantSet = () => (mode === 'drape' ? wantedDrape : wanted);
  const rtv = (id) => { if (mode !== 'drape') return rt(id); let r = runtimeDrape.get(id); if (!r) runtimeDrape.set(id, (r = { plans: new Map(), viewKey: '', timer: 0 })); return r; };
  const repaint = () => {
    if (!repaintTimer) repaintTimer = setTimeout(() => { repaintTimer = 0; host.invalidate(); }, 80);
    if (drapeListeners.size && !drapeTimer) drapeTimer = setTimeout(() => { drapeTimer = 0; for (const f of drapeListeners) { try { f(); } catch { /* a listener's own problem */ } } }, 250);
  };
  function note(id, text) {
    const r = rt(id);
    if (r.note === text) return;
    r.note = text;
    if (text && !r.said) { r.said = true; const m = maps().find((x) => x.id === id); host.say((m ? m.name + ': ' : '') + text); }
    dialogApi?.renderRows();
  }

  // ---------------------------------------------------------------- fetching
  function want(url, layerId) {
    wantSet().add(url);
    const c = cache.get(url);
    if (c) { c.used = performance.now(); return c; }
    if (!internetOn() || rt(layerId).blocked) return null;
    const e = { status: 'queued', img: null, ctrl: null, layer: layerId, plans: new Map(), used: performance.now() };
    cache.set(url, e);
    queue.push(url);
    pump();
    return e;
  }
  function pump() {
    while (active < MAX_ACTIVE && queue.length) {
      const url = queue.shift(), e = cache.get(url);
      if (!e || e.status !== 'queued') continue;
      if (!isWanted(url) || !internetOn() || rt(e.layer).blocked) { cache.delete(url); continue; }
      e.status = 'loading'; e.ctrl = new AbortController(); active++;
      load(url, e).finally(() => { active--; pump(); });
    }
  }
  async function load(url, e) {
    try {
      const r = await fetch(url, { ...FETCH_OPTS, signal: e.ctrl.signal });
      if (!r.ok) throw new Error(r.status === 404 ? t('mapl.err.404') : t('mapl.http.status', { status: r.status + (r.statusText ? ' ' + r.statusText.slice(0, 60) : '') }));
      const type = (r.headers.get('content-type') || '').toLowerCase();
      const blob = await r.blob();
      if (!type.startsWith('image/')) {
        let why = '';
        if (/xml|text|json/.test(type) && blob.size < 20000) why = B.clean((await blob.text()).replace(/<[^>]*>/g, ' '), 160);
        throw new Error(type ? (why ? t('mapl.err.sent_why', { type: type.split(';')[0], why }) : t('mapl.err.sent', { type: type.split(';')[0] })) : (why ? t('mapl.err.sent_some_why', { why }) : t('mapl.err.sent_some')));
      }
      e.img = await createImageBitmap(blob);
      e.status = 'ok';
      rt(e.layer).loaded = (rt(e.layer).loaded || 0) + 1;
      if (cache.size > MAX_CACHE) evict();
      repaint();
    } catch (err) {
      if (err?.name === 'AbortError') { cache.delete(url); return; }
      e.status = 'error';
      const msg = err instanceof TypeError || /Failed to fetch|NetworkError|Load failed/i.test(String(err?.message))
        ? (navigator.onLine === false ? t('mapl.err.offline') : t('mapl.err.cors_img'))
        : /decode|InvalidState|source image/i.test(String(err?.message)) ? t('mapl.err.decode') : String(err?.message || err).slice(0, 200);
      const r = rt(e.layer);
      r.fails = (r.fails || 0) + 1;
      if (!r.loaded && r.fails >= 4 && !/404/.test(msg)) { r.blocked = true; note(e.layer, msg + ' ' + t('mapl.err.stopped')); return; }
      note(e.layer, msg);
    }
  }
  function evict() {
    const old = [...cache.entries()].filter(([u, c]) => c.status !== 'loading' && !isWanted(u)).sort((a, b) => a[1].used - b[1].used);
    for (const [u, c] of old.slice(0, cache.size - MAX_CACHE)) { c.img?.close?.(); cache.delete(u); }
  }
  function settleWanted() {
    queue = queue.filter((u) => { if (isWanted(u)) return true; cache.delete(u); return false; });
    for (const [u, c] of cache) if (c.status === 'loading' && !isWanted(u)) c.ctrl?.abort();
  }
  function stopAll() {
    queue = [];
    for (const [u, c] of cache) if (c.status === 'loading' || c.status === 'queued') { c.ctrl?.abort(); cache.delete(u); }
  }

  // ---------------------------------------------------------------- systems
  let fcache = { key: '~', f: null, conv: new Map(), gen: 0 };
  const pframe = () => { const c = host.crs(), k = c ? JSON.stringify(c) : ''; if (k !== fcache.key) fcache = { key: k, f: c ? frame(c) : null, conv: new Map(), gen: fcache.gen + 1 }; return fcache.f; };
  function layerCrs(m) {
    if (m.crsProj4) return { code: m.crsCode, name: m.crsName, proj4: m.crsProj4, unit: m.crsUnit };
    if (m.kind === 'xyz') return crsFromEntry(byCode(3857));
    return null;
  }
  function conv(m) {
    const f = pframe(), src = layerCrs(m);
    if (!src) return { toSrc: (x, y) => [x, y], fromSrc: (x, y) => [x, y], same: true };
    if (!f) return null;
    let c = fcache.conv.get(src.proj4);
    if (!c) {
      const same = src.proj4 === f.crs.proj4;
      c = same ? { toSrc: (x, y) => f.toGrid(x, y), fromSrc: (x, y) => f.fromGrid(x, y), same: !f.crs.local } : { toSrc: f.to(src), fromSrc: f.from(src), same: false };
      fcache.conv.set(src.proj4, c);
    }
    return c;
  }

  // ---------------------------------------------------------------- painting
  // V = { T (project → CSS px), w, h, dpr, ox, oy, zoom (CSS px per project unit) }
  function planFor(store, key, w, h, pixToSrc, cv, zoom) {
    const tolProj = 0.25 / zoom, bucket = Math.round(Math.log2(tolProj) * 2) / 2;
    const k = key + '|' + bucket + '|' + fcache.gen;
    let plan = store.get(k);
    if (!plan) {
      plan = B.planWarp((u, v) => { const s = pixToSrc(u, v); try { return cv.fromSrc(s[0], s[1]); } catch { return null; } }, w, h, { tol: 2 ** bucket, maxDepth: cv.same ? 0 : 7 });
      if (store.size > 8) store.clear();
      store.set(k, plan);
    }
    return plan;
  }
  function drawPlan(ctx, V, img, plan, sw, sh) {
    const T = V.T, d = V.dpr;
    // device px = d·(T·p + o)
    const D = [d * T[0], d * T[1], d * T[2], d * T[3], d * (T[4] + V.ox), d * (T[5] + V.oy)];
    const S = (x, y) => [D[0] * x + D[2] * y + D[4], D[1] * x + D[3] * y + D[5]];
    const single = plan.length === 1;
    for (const c of plan) {
      const m = c.m;   // image px → project
      const a = D[0] * m[0] + D[2] * m[1], b = D[1] * m[0] + D[3] * m[1], cc = D[0] * m[2] + D[2] * m[3], dd = D[1] * m[2] + D[3] * m[3];
      const e = D[0] * m[4] + D[2] * m[5] + D[4], f = D[1] * m[4] + D[3] * m[5] + D[5];
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      if (!single) {
        const q = c.dst.map(([x, y]) => S(x, y)), mx = (q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4, my = (q[0][1] + q[1][1] + q[2][1] + q[3][1]) / 4;
        ctx.beginPath();
        q.forEach(([x, y], i) => { const dx = x - mx, dy = y - my, L = Math.hypot(dx, dy) || 1, gx = x + dx / L * 0.6, gy = y + dy / L * 0.6; if (i) ctx.lineTo(gx, gy); else ctx.moveTo(gx, gy); });
        ctx.closePath(); ctx.clip();
      }
      ctx.setTransform(a, b, cc, dd, e, f);
      if (single) {
        const W = Math.hypot(a, b) * sw, H = Math.hypot(cc, dd) * sh;
        if (W > 2 && H > 2) { ctx.translate(sw / 2, sh / 2); ctx.scale((W + 1) / W, (H + 1) / H); ctx.translate(-sw / 2, -sh / 2); }
      }
      const u0 = Math.max(0, Math.floor(c.src[0][0]) - 1), v0 = Math.max(0, Math.floor(c.src[0][1]) - 1), u1 = Math.min(sw, Math.ceil(c.src[2][0]) + 1), v1 = Math.min(sh, Math.ceil(c.src[2][1]) + 1);
      if (u1 > u0 && v1 > v0) ctx.drawImage(img, u0, v0, u1 - u0, v1 - v0, u0, v0, u1 - u0, v1 - v0);
      ctx.restore();
    }
  }
  /** The pane's corners back in project coordinates → [minX, minY, maxX, maxY]. */
  function viewBox(V) {
    const T = V.T, det = T[0] * T[3] - T[1] * T[2];
    if (!det) return null;
    const inv = (sx, sy) => { const x = sx - T[4], y = sy - T[5]; return [(T[3] * x - T[2] * y) / det, (-T[1] * x + T[0] * y) / det]; };
    const c = [inv(0, 0), inv(V.w, 0), inv(V.w, V.h), inv(0, V.h)];
    return { minX: Math.min(...c.map((p) => p[0])), minY: Math.min(...c.map((p) => p[1])), maxX: Math.max(...c.map((p) => p[0])), maxY: Math.max(...c.map((p) => p[1])) };
  }

  function paint(ctx, T, opts = {}) {
    const V = { T, w: opts.w, h: opts.h, dpr: opts.dpr || 1, ox: opts.ox || 0, oy: opts.oy || 0, zoom: Math.hypot(T[0], T[1]) };
    const list = maps();
    if (mode === 'drape') wantedDrape = new Set(); else wanted = new Set();
    const shown = [];
    if (list.length) {
      const vb = viewBox(V);
      for (const m of list) {
        if (!m.visible || !vb) continue;
        if (B.isInternet(m) && !internetOn()) continue;
        const cv = conv(m);
        if (!cv) continue;
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, runtime.get(m.id)?.opacity ?? m.opacity ?? 1));
        try {
          if (m.kind === 'image') paintImage(ctx, V, m, cv);
          else if (m.kind === 'xyz' || m.kind === 'wmts' || (m.kind === 'arcgis' && m.grid)) paintTiles(ctx, V, m, cv, vb);
          else paintOne(ctx, V, m, cv, vb);
          if (m.attribution) shown.push(m.attribution);
        } catch (e) { note(m.id, t('mapl.err.draw', { error: String(e?.message || e).slice(0, 160) })); }
        ctx.restore();
      }
    }
    settleWanted();
    if (mode !== 'drape') showAttribution(shown);
    return shown;
  }

  const bitmaps = new Map();
  function bitmapFor(m) {
    let b = bitmaps.get(m.image);
    if (b) return b;
    const data = images.get(m.image);
    b = { status: data ? 'loading' : 'missing', img: null };
    bitmaps.set(m.image, b);
    if (data) fetch(data).then((r) => r.blob()).then((bl) => createImageBitmap(bl)).then((img) => { b.img = img; b.status = 'ok'; repaint(); }).catch(() => { b.status = 'error'; note(m.id, t('mapl.pic.unreadable')); });
    return b;
  }
  function paintImage(ctx, V, m, cv) {
    const b = bitmapFor(m);
    if (b.status !== 'ok') return;
    const kx = m.width / b.img.width, ky = m.height / b.img.height;
    const gt = [m.a0, m.a1 * kx, m.a2 * ky, m.a3, m.a4 * kx, m.a5 * ky];
    drawPlan(ctx, V, b.img, planFor(rtv(m.id).plans, 'img', b.img.width, b.img.height, (u, v) => B.pixelToSystem(gt, u, v), cv, V.zoom), b.img.width, b.img.height);
  }
  function gridOf(m) {
    if (m.kind === 'xyz') return B.XYZ_GRID;
    const r = rt(m.id);
    if (!r.grid || r.gridText !== m.grid) { r.grid = B.readGrid(m.grid); r.gridText = m.grid; }
    return r.grid;
  }
  function tileUrl(m, mat, col, row) {
    if (m.kind === 'xyz') return B.xyzUrl(m.url, Number(mat.id), col, row, m.subdomains || 'abc');
    if (m.kind === 'wmts') return B.wmtsTileUrl({ template: m.template, kvp: m.url, layer: m.layer, style: m.style || 'default', format: m.format, set: m.set, matrix: mat.id, row, col });
    return B.arcgisTileUrl(m.url, mat.id, row, col);
  }
  function paintTiles(ctx, V, m, cv, vb) {
    const box = B.viewSourceBox(vb, (x, y) => cv.toSrc(x, y), 8);
    if (!box) return;
    const res = Math.max((box[2] - box[0]) / V.w, (box[3] - box[1]) / V.h);
    const { matrix, tiles } = B.gridTilesAny(gridOf(m), box, res, { cap: MAX_TILES });
    for (const tl of tiles) {
      const e = want(tileUrl(m, matrix, tl.col, tl.row), m.id);
      if (!e || e.status !== 'ok') continue;
      const [x0, , , y1] = tl.bounds, rx = (tl.bounds[2] - x0) / e.img.width, ry = (y1 - tl.bounds[1]) / e.img.height;
      drawPlan(ctx, V, e.img, planFor(e.plans, 't', e.img.width, e.img.height, (u, v) => [x0 + u * rx, y1 - v * ry], cv, V.zoom), e.img.width, e.img.height);
    }
  }
  function paintOne(ctx, V, m, cv, vb) {
    const r = rtv(m.id);
    const box = B.viewSourceBox(vb, (x, y) => cv.toSrc(x, y), 8);
    if (!box) return;
    const k = Math.min(2, V.dpr || 1);
    let W = Math.round(V.w * k), H = Math.round(V.h * k);
    const s = Math.min(1, 2048 / W, 2048 / H); W = Math.max(16, Math.round(W * s)); H = Math.max(16, Math.round(H * s));
    const url = m.kind === 'wms'
      ? B.wmsGetMapUrl({ url: m.url, version: m.version, layer: m.layer, style: m.style, format: m.format || 'image/png', code: m.crsCode, bbox: box, width: W, height: H })
      : B.arcgisExportUrl({ base: m.url, kind: m.layer === 'ImageServer' ? 'ImageServer' : 'MapServer', bbox: box, code: m.crsCode, width: W, height: H });
    if (r.viewKey !== url) {
      r.viewKey = url;
      clearTimeout(r.timer);
      r.timer = setTimeout(() => { r.wantUrl = url; r.wantBox = box; repaint(); }, 350);
    }
    if (r.wantUrl) { const e = want(r.wantUrl, m.id); if (e?.status === 'ok') r.picture = { e, box: r.wantBox, url: r.wantUrl }; }
    if (r.picture?.e?.img) {
      wantSet().add(r.picture.url);
      const { e, box: b } = r.picture, img = e.img;
      const rx = (b[2] - b[0]) / img.width, ry = (b[3] - b[1]) / img.height;
      drawPlan(ctx, V, img, planFor(e.plans, 'v', img.width, img.height, (u, v) => [b[0] + u * rx, b[3] - v * ry], cv, V.zoom), img.width, img.height);
    }
  }
  const attribEl = el('div', { className: 'ml-attrib', hidden: true, 'data-map-attribution': '' });
  host.attrib?.append(attribEl);
  function showAttribution(list) {
    const s = [...new Set(list)].join('; ');
    if (attribEl.textContent !== s) attribEl.textContent = s;
    attribEl.hidden = !s;
  }

  // ---------------------------------------------------------------- the drape (a picture of a box, for a 3D ground)
  let drapeCanvas = null;
  const drape = {
    render(box, maxPx = 2048, { canvas = null } = {}) {
      const list = maps().filter((m) => m.visible && !(B.isInternet(m) && !internetOn()) && conv(m));
      if (!list.length || !box) return null;
      const w = Math.max(box.maxX - box.minX, 1e-9), h = Math.max(box.maxY - box.minY, 1e-9), k = maxPx / Math.max(w, h);
      const W = Math.max(16, Math.round(w * k)), H = Math.max(16, Math.round(h * k));
      const cv = canvas || (drapeCanvas ||= document.createElement('canvas'));
      if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
      const ctx = cv.getContext('2d');
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const T = [k, 0, 0, -k, -box.minX * k, box.maxY * k];
      mode = 'drape';
      let shown = [];
      try { shown = paint(ctx, T, { w: W, h: H, dpr: 1 }); } finally { mode = 'plan'; }
      return { canvas: cv, layers: list.length, attribution: [...new Set(shown)].join('; ') };
    },
    pending() {
      let n = 0;
      for (const u of wantedDrape) { const c = cache.get(u); if (!c || c.status === 'queued' || c.status === 'loading') n++; }
      for (const r of runtimeDrape.values()) if (r.timer && !r.wantUrl) n++;
      return n;
    },
    onChange(f) { drapeListeners.add(f); return () => drapeListeners.delete(f); },
    clear() { wantedDrape = new Set(); runtimeDrape.clear(); settleWanted(); },
  };

  function extents() {
    let b = null;
    for (const m of maps()) {
      if (m.kind !== 'image' || !m.visible) continue;
      const cv = conv(m); if (!cv) continue;
      for (const [u, v] of [[0, 0], [m.width, 0], [m.width, m.height], [0, m.height]]) {
        try { const [x, y] = cv.fromSrc(...B.pixelToSystem([m.a0, m.a1, m.a2, m.a3, m.a4, m.a5], u, v)); if (!Number.isFinite(x)) continue; b ||= { minX: x, minY: y, maxX: x, maxY: y }; b.minX = Math.min(b.minX, x); b.maxX = Math.max(b.maxX, x); b.minY = Math.min(b.minY, y); b.maxY = Math.max(b.maxY, y); } catch { /* off the system */ }
      }
    }
    return b;
  }

  // ---------------------------------------------------------------- pictures from files (picture + world file + .prj)
  const IMG = /\.(png|jpe?g)$/i, WORLD = /\.(pgw|pngw|jgw|jpgw|jpegw|wld)$/i;
  let nextImg = 1;
  const newMapId = () => { const used = new Set(maps().map((m) => m.id)); let i = 1; while (used.has('m' + i)) i++; return 'm' + i; };
  async function addImageFiles(files) {
    const img = files.find((f) => IMG.test(f.name)), prj = files.find((f) => /\.prj$/i.test(f.name));
    try {
      if (!img) { host.say(t('mapl.world.alone')); return; }
      const names = B.worldFileFor(img.name.toLowerCase());
      const wf = files.find((f) => names.includes(f.name.toLowerCase())) || files.find((f) => WORLD.test(f.name));
      if (!wf) { host.say(t('ml.world.none', { name: img.name, a: names[0], b: names[1] })); return; }
      if (img.size > B.MAX_IMAGE_BYTES) { host.say(t('ml.pic.big', { name: img.name, mb: (img.size / 1048576).toFixed(1) })); return; }
      const gt = B.parseWorldFile(await wf.text());
      let bmp;
      try { bmp = await createImageBitmap(img); } catch { throw new Error(t('mapl.pic.not_picture', { name: img.name })); }
      const w = bmp.width, h = bmp.height; bmp.close?.();
      let crs = null;
      if (prj) { try { crs = crsFromPrj(await prj.text()).crs; } catch (e) { host.say(t('mapl.prj.bad', { name: prj.name, error: e.message })); } }
      const data = await new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(String(r.result)); r.onerror = () => bad(new Error(t('mapl.pic.unreadable'))); r.readAsDataURL(img); });
      const id = 'img' + nextImg++;
      images.set(id, data);
      change((l) => l.push(record({ kind: 'image', name: img.name.replace(/\.[^.]+$/, ''), image: id, width: w, height: h, gt, crs })));
      host.say(t(crs ? 'ml.added.pic_crs' : 'ml.added.pic', { name: img.name, w, h, crs: crs?.name || '' }));
      const b = extents(); if (b) host.fit(b);
    } catch (e) { host.say(e.message); }
  }
  function record({ kind, name, url = '', layer = '', style = '', format = 'image/png', version = '1.3.0', crs = null, attribution = '', image = '', width = 0, height = 0, gt = null, grid = '', set = '', template = '', subdomains = '' }) {
    return { id: newMapId(), name: B.clean(name, 120) || t('mapl.default_name'), kind, url, layer, style, format, version,
      crsCode: crs?.code ?? null, crsName: crs?.name || '', crsProj4: crs?.proj4 || '', crsUnit: crs?.unit || 'm',
      opacity: 1, visible: true, attribution: B.clean(attribution, 300), image, width, height,
      a0: gt?.[0] ?? 0, a1: gt?.[1] ?? 1, a2: gt?.[2] ?? 0, a3: gt?.[3] ?? 0, a4: gt?.[4] ?? 0, a5: gt?.[5] ?? -1, grid, set, template, subdomains };
  }

  // ---------------------------------------------------------------- the Map layers dialog
  let dialogApi = null;
  async function fetchText(url, signal) {
    const r = await fetch(url, { ...FETCH_OPTS, signal });
    if (!r.ok) throw new Error(r.status === 404 ? t('mapl.http.404') : t('mapl.http.status', { status: r.status }));
    const len = Number(r.headers.get('content-length') || 0);
    if (len > 8 * 1024 * 1024) throw new Error(t('ml.answer.big', { mb: Math.round(len / 1048576) }));
    const txt = await r.text();
    if (txt.length > 8 * 1024 * 1024) throw new Error(t('mapl.answer.too_big'));
    return txt;
  }
  const netError = (e) => (e?.name === 'AbortError' ? t('mapl.stopped') : e instanceof TypeError ? (navigator.onLine === false ? t('mapl.err.offline') : t('mapl.err.cors_read')) : e.message);
  const byCodeSafe = (c) => { try { return byCode(c); } catch { return null; } };

  async function openDialog() {
    if (dialogApi) return;
    if (!catalogLoaded()) { host.busy(t('ml.loading')); try { await loadCatalog(); } catch (e) { host.busy(''); host.say(e.message); return; } host.busy(''); }
    const id = 'ml-' + (++uid);
    const rows = el('ul', { className: 'ml-rows', 'aria-label': t('mapl.rows.aria') });
    const net = el('div', { className: 'ml-net' });
    const sys = el('div', { className: 'ml-sys' });
    const kindSel = el('select', { className: 'select-cc ml-select', id: id + '-kind', 'data-map-kind': '' },
      el('option', { value: 'xyz' }, t('mapl.kind.xyz')), el('option', { value: 'wms' }, t('mapl.kind.wms_server')),
      el('option', { value: 'wmts' }, t('mapl.kind.wmts_server')), el('option', { value: 'arcgis' }, t('ml.kind.arcgis')),
      el('option', { value: 'image' }, t('mapl.kind.image')));
    const addBox = el('div', { className: 'ml-add' });
    const status = el('p', { className: 'ml-note ml-status', role: 'status', 'aria-live': 'polite', 'data-map-status': '' });
    let ctrl = null, found = null;
    const dlg = el('dialog', { className: 'ml-dialog', 'aria-labelledby': id + '-h', 'data-map-dialog': '' },
      el('form', { method: 'dialog', className: 'ml-form', onsubmit: (e) => e.preventDefault() },
        el('div', { className: 'ml-head' }, el('h2', { className: 'ml-h', id: id + '-h' }, t('ml.title')),
          el('button', { type: 'button', className: 'ml-x', 'aria-label': t('ml.close'), 'data-close': '' }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
        el('div', { className: 'ml-body' }, net, sys,
          el('section', {}, el('h3', { className: 'ml-h3' }, t('mapl.layers')), rows),
          el('section', {}, el('h3', { className: 'ml-h3' }, t('mapl.add_layer')),
            el('div', { className: 'ml-props' }, el('label', { htmlFor: kindSel.id }, t('mapl.from')), kindSel), addBox, status),
          el('p', { className: 'ml-note' }, t('ml.screen_only'))),
        el('div', { className: 'ml-foot' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-close': '' }, t('ml.close')))));
    const field = (label, input) => [el('label', { htmlFor: input.id }, label), input];
    const pcode = () => host.crs()?.code ?? null;

    function render() {
      net.replaceChildren(el('label', { className: 'ml-net-switch' }, el('input', { type: 'checkbox', checked: internetOn(), 'data-map-internet': '' }), ' ', el('strong', {}, t('ml.net.label'))),
        el('p', { className: 'ml-note' }, t('ml.net.body')));
      renderSys(); renderRows(); renderAdd();
    }
    function renderSys() {
      const c = host.crs();
      const kids = [el('h3', { className: 'ml-h3' }, t('ml.sys.h')), el('p', { className: c ? 'ml-note' : 'ml-problem', 'data-map-crs': '' }, c ? t('ml.sys.is', { name: c.name, code: c.code ?? '—' }) : host.crsHelp || t('ml.sys.none'))];
      if (host.canSetCrs) {
        const q = el('input', { type: 'search', className: 'ml-input', id: id + '-q', placeholder: t('ml.sys.search.ph'), 'data-map-crs-q': '' });
        const pick = el('select', { className: 'select-cc ml-select', id: id + '-pick', 'data-map-crs-pick': '' });
        const fill = () => { let hits = []; try { hits = q.value.trim() ? search(q.value, { limit: 40 }).filter((e) => !e.geographic) : []; } catch { hits = []; } pick.replaceChildren(el('option', { value: '' }, hits.length ? t('ml.sys.choose') : t('ml.sys.type')), ...hits.map((e) => el('option', { value: String(e.code) }, 'EPSG:' + e.code + ' — ' + e.name))); };
        q.addEventListener('input', fill); fill();
        // 0.8 D8.9 (crs-share_PART_3): the shared picker (UTM zone, EPSG number, words, .prj, My projections); the drawing keeps the EPSG number
        const more = host.pickCrs ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-map-crs-more': '', title: t('ml.sys.more.help') }, t('ml.sys.more')) : null;
        more?.addEventListener('click', async () => {
          const got = await host.pickCrs();
          if (!got || got.code == null) return;
          if (![...pick.options].some((o) => o.value === String(got.code))) pick.append(el('option', { value: String(got.code) }, 'EPSG:' + got.code + ' \u2014 ' + got.name));   // i18n-ignore: dash
          pick.value = String(got.code);
          status.textContent = t('ml.sys.more.chosen', { name: got.name });
        });
        const l = c?.local || null;
        const num = (k, v) => el('input', { type: 'text', inputmode: 'decimal', className: 'ml-input ml-num', id: id + '-' + k, value: v == null ? '' : String(v), 'data-map-place': k });
        kids.push(el('div', { className: 'ml-props' }, ...field(t('ml.sys.search'), q), ...field(t('ml.sys.pick'), pick)),
          more ? el('div', { className: 'ml-links' }, more) : null, more ? el('p', { className: 'ml-note', 'data-map-crs-more-help': '' }, t('ml.sys.more.help')) : null,
          el('p', { className: 'ml-note' }, t('ml.sys.place.help')),
          el('div', { className: 'ml-props ml-place' }, ...field(t('ml.sys.dx'), num('x', l?.from?.[0] ?? 0)), ...field(t('ml.sys.dy'), num('y', l?.from?.[1] ?? 0)),
            ...field(t('ml.sys.e'), num('e', l?.to?.[0] ?? 0)), ...field(t('ml.sys.n'), num('n', l?.to?.[1] ?? 0)), ...field(t('ml.sys.rot'), num('rot', l?.rotation ?? 0))),
          el('div', { className: 'ml-links' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-map-crs-apply': '' }, t('ml.sys.apply')),
            c ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-map-crs-clear': '' }, t('ml.sys.clear')) : null));
      }
      sys.replaceChildren(...kids.filter(Boolean));
    }
    function applyCrs() {
      const code = Number(sys.querySelector('[data-map-crs-pick]').value) || host.crs()?.code;
      const e = code ? byCodeSafe(code) : null;
      if (!e) { status.textContent = t('ml.sys.pick_first'); return; }
      const v = (k) => Number(String(sys.querySelector('[data-map-place="' + k + '"]').value).replace(',', '.'));
      const vals = { x: v('x'), y: v('y'), e: v('e'), n: v('n'), rot: v('rot') };
      if (!Object.values(vals).every(Number.isFinite)) { status.textContent = t('ml.sys.numbers'); return; }
      host.setCrs({ code: e.code, place: vals });
      fcache.key = '~';
      host.invalidate(); renderSys(); renderRows();
      status.textContent = t('ml.sys.set', { name: e.name });
    }
    function renderRows() {
      const list = maps();
      if (!list.length) { rows.replaceChildren(el('li', { className: 'ml-note' }, t('mapl.none'))); return; }
      rows.replaceChildren(...list.map((m, i) => {
        const r = runtime.get(m.id), off = B.isInternet(m) && !internetOn(), needs = !conv(m);
        const why = off ? t('ml.why.off') : needs ? t('ml.why.crs') : r?.note || '';
        return el('li', { className: 'ml-row' + (off || needs ? ' is-off' : ''), 'data-map-row': m.id },
          el('div', { className: 'ml-line' },
            el('label', { className: 'ml-name' }, el('input', { type: 'checkbox', checked: m.visible, 'data-map-visible': m.id }), ' ', m.name),
            el('span', { className: 'ml-note' }, kindName(m.kind) + (m.crsName ? ' · ' + m.crsName : ''))),
          el('div', { className: 'ml-line' },
            el('label', {}, t('mapl.opacity') + ' ', el('input', { type: 'range', min: '0', max: '100', step: '5', value: String(Math.round((m.opacity ?? 1) * 100)), 'data-map-opacity': m.id, 'aria-label': t('mapl.opacity.aria', { name: m.name }) })),
            el('button', { type: 'button', className: 'ml-x', title: t('mapl.down.title'), 'aria-label': t('mapl.down.aria', { name: m.name }), disabled: i === 0, 'data-map-move': m.id, 'data-d': '-1' }, el('i', { className: 'bi bi-arrow-down', 'aria-hidden': 'true' })),
            el('button', { type: 'button', className: 'ml-x', title: t('mapl.up.title'), 'aria-label': t('mapl.up.aria', { name: m.name }), disabled: i === list.length - 1, 'data-map-move': m.id, 'data-d': '1' }, el('i', { className: 'bi bi-arrow-up', 'aria-hidden': 'true' })),
            el('button', { type: 'button', className: 'ml-x', title: t('mapl.remove.title'), 'aria-label': t('mapl.remove.aria', { name: m.name }), 'data-map-remove': m.id }, el('i', { className: 'bi bi-trash', 'aria-hidden': 'true' }))),
          why ? el('p', { className: 'ml-note ml-why', 'data-map-note': m.id }, why) : null,
          m.attribution ? el('p', { className: 'ml-note' }, t('mapl.attribution', { text: m.attribution })) : null);
      }));
    }
    const kindName = (k) => ({ image: t('mapl.kind.picture'), xyz: t('mapl.kind.tiles'), wms: 'WMS', wmts: 'WMTS', arcgis: t('ml.kind.arcgis') })[k] || k;   // i18n-ignore: service names
    function renderAdd() {
      const k = kindSel.value;
      found = null; status.textContent = '';
      if (k === 'image') {
        const f = el('input', { type: 'file', multiple: true, accept: '.png,.jpg,.jpeg,.pgw,.pngw,.jgw,.jpgw,.wld,.prj', className: 'ml-input', id: id + '-file', 'data-map-file': '' });
        addBox.replaceChildren(el('p', { className: 'ml-note' }, t('ml.files.help')), el('div', { className: 'ml-props' }, ...field(t('mapl.files'), f)));
        return;
      }
      const url = el('input', { type: 'url', className: 'ml-input', id: id + '-url', autocomplete: 'off', spellcheck: 'false', 'data-map-url': '',
        placeholder: k === 'xyz' ? 'https://tile.example.org/{z}/{x}/{y}.png' : k === 'wms' ? 'https://example.org/geoserver/wms' : k === 'wmts' ? 'https://example.org/wmts/1.0.0/WMTSCapabilities.xml' : 'https://example.org/arcgis/rest/services/Name/MapServer' });   // i18n-ignore: example addresses
      const kids = [el('p', { className: 'ml-note' }, t('ml.help.' + k)), el('div', { className: 'ml-props' }, ...field(t('mapl.f.url'), url))];
      if (k === 'xyz') {
        const name = el('input', { type: 'text', className: 'ml-input', id: id + '-name', 'data-map-name': '' });
        const att = el('input', { type: 'text', className: 'ml-input', id: id + '-att', placeholder: t('mapl.att.placeholder'), 'data-map-att': '' });
        kids.push(el('div', { className: 'ml-props' }, ...field(t('mapl.f.name'), name), ...field(t('mapl.f.att'), att)),
          el('div', { className: 'ml-links' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-map-add-xyz': '' }, t('mapl.add'))));
      } else {
        kids.push(el('div', { className: 'ml-links' },
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-map-read': '', disabled: !internetOn(), title: internetOn() ? '' : t('ml.net_first') }, k === 'arcgis' ? t('mapl.read_service') : t('mapl.get_layers')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-map-stop': '', hidden: true }, t('mapl.stop'))),
        el('div', { className: 'ml-found', 'data-map-found': '' }));
      }
      if (!internetOn()) kids.push(el('p', { className: 'ml-note' }, k === 'xyz' ? t('ml.xyz.later') : t('ml.net_first')));
      addBox.replaceChildren(...kids);
    }
    const foundBox = () => addBox.querySelector('[data-map-found]');
    async function readServer() {
      const k = kindSel.value, raw = addBox.querySelector('[data-map-url]').value.trim();
      if (!internetOn()) { status.textContent = t('ml.net_first'); return; }
      ctrl?.abort(); ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 20000);
      const stop = addBox.querySelector('[data-map-stop]'); if (stop) stop.hidden = false;
      status.textContent = t('mapl.asking');
      try {
        if (k === 'wms') { const cap = B.parseWmsCapabilities(await fetchText(B.capabilitiesUrl(raw, 'WMS'), ctrl.signal)); found = { kind: 'wms', cap, base: cap.getMap || raw }; showLayers(cap, 'wms'); }
        else if (k === 'wmts') { const cap = B.parseWmtsCapabilities(await fetchText(B.capabilitiesUrl(raw, 'WMTS'), ctrl.signal)); found = { kind: 'wmts', cap, base: raw }; showLayers(cap, 'wmts'); }
        else {
          const { base } = B.arcgisBase(raw);
          const svc = B.parseArcgisService(await fetchText(base + '?f=json', ctrl.signal), base);
          found = { kind: 'arcgis', svc, base };
          foundBox().replaceChildren(el('p', { className: 'ml-note', 'data-map-info': '' }, (svc.name || t('mapl.arc.service')) + (svc.tiled ? ' — ' + t('ml.arc.tiled') : '')),
            el('div', { className: 'ml-links' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-map-add-found': '' }, t('mapl.add'))));
        }
        status.textContent = '';
      } catch (e) { status.textContent = netError(e); foundBox()?.replaceChildren(); } finally { clearTimeout(timer); if (stop) stop.hidden = true; }
    }
    function showLayers(cap, kind) {
      const sel = el('select', { className: 'select-cc ml-select', id: id + '-layer', 'data-map-layer': '' }, ...cap.layers.slice(0, 2000).map((l, i) => el('option', { value: String(i) }, l.title + (kind === 'wms' && l.title !== l.name ? ' (' + l.name + ')' : ''))));
      const kids = [el('p', { className: 'ml-note' }, t('ml.found', { title: cap.title || kindName(kind), n: cap.layers.length })), el('div', { className: 'ml-props' }, ...field(t('mapl.f.layer'), sel))];
      if (kind === 'wmts') {
        const setSel = el('select', { className: 'select-cc ml-select', id: id + '-set', 'data-map-set': '' });
        const upd = () => {
          const l = cap.layers[Number(sel.value)], sets = l.sets.map((s) => cap.sets[s]).filter((s) => s && s.code);
          const best = sets.find((s) => s.code === pcode()) || sets.find((s) => s.code === 3857) || sets.find((s) => byCodeSafe(s.code));
          setSel.replaceChildren(...sets.map((s) => el('option', { value: s.id, selected: s === best }, s.id + ' (EPSG:' + s.code + ')')));   // i18n-ignore: identifiers
        };
        sel.addEventListener('change', upd); upd();
        kids.push(el('div', { className: 'ml-props' }, ...field(t('mapl.f.set'), setSel)));
      }
      kids.push(el('div', { className: 'ml-links' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-map-add-found': '' }, t('mapl.add'))));
      foundBox().replaceChildren(...kids);
    }
    function addFound() {
      if (!found) return;
      try {
        if (found.kind === 'wms') {
          const l = found.cap.layers[Number(addBox.querySelector('[data-map-layer]').value)];
          const code = B.wmsPickCode(l.codes, pcode());
          if (code == null) { status.textContent = t('ml.wms.no_system'); return; }
          const crs = code === pcode() ? { ...host.crs(), local: null } : crsFromEntry(byCode(code));
          const fmt = found.cap.formats.find((f) => /png/i.test(f)) || found.cap.formats.find((f) => /jpe?g/i.test(f)) || 'image/png';
          change((list) => list.push(record({ kind: 'wms', name: l.title, url: B.checkUrl(found.base).href, layer: l.name, format: fmt, version: found.cap.version, crs, attribution: l.attribution })));
        } else if (found.kind === 'wmts') {
          const l = found.cap.layers[Number(addBox.querySelector('[data-map-layer]').value)], set = found.cap.sets[addBox.querySelector('[data-map-set]').value];
          const e = set && byCodeSafe(set.code);
          if (!e) { status.textContent = t('ml.wmts.no_set'); return; }
          const crs = crsFromEntry(e);
          let toSet = null; try { const f = frame(crs); toSet = (lon, lat) => f.fromLonLat(lon, lat); } catch { toSet = null; }
          const grid = B.wmtsGrid(set, e.unit, { toSet, bbox84: l.bbox84 });
          const fmt = l.formats.find((f) => /png/i.test(f)) || l.formats[0] || 'image/png';
          const tpl = l.templates.find((x) => x.format === fmt) || l.templates[0];
          const style = (l.styles.find((s) => s.isDefault) || l.styles[0])?.id || 'default';
          if (!tpl && !found.cap.kvp) { status.textContent = t('mapl.wmts.no_tile'); return; }
          change((list) => list.push(record({ kind: 'wmts', name: l.title, url: B.checkUrl(found.cap.kvp || found.base).href, layer: l.id, style, format: fmt, crs, attribution: l.attribution, grid: B.gridJson(grid), set: set.id, template: tpl?.template || '' })));
        } else {
          const svc = found.svc;
          if (svc.tiled) change((list) => list.push(record({ kind: 'arcgis', name: svc.name || t('mapl.arc.default_name'), url: found.base, layer: svc.kind, crs: crsFromEntry(byCode(3857)), attribution: svc.attribution, grid: B.gridJson(svc.grid) })));
          else {
            const code = pcode() || svc.code, e = byCodeSafe(code);
            if (!e) { status.textContent = t('ml.wms.no_system'); return; }
            change((list) => list.push(record({ kind: 'arcgis', name: svc.name || t('mapl.arc.default_name'), url: found.base, layer: svc.kind, crs: crsFromEntry(e), attribution: svc.attribution })));
          }
        }
        status.textContent = t('mapl.added');
      } catch (e) { status.textContent = e.message; }
    }
    function addXyz() {
      try {
        const tpl = B.checkTemplate(addBox.querySelector('[data-map-url]').value);
        const name = addBox.querySelector('[data-map-name]').value.trim() || new URL(tpl.replace(/\{-?\w+\}/g, '0')).hostname;
        change((list) => list.push(record({ kind: 'xyz', name, url: tpl, crs: crsFromEntry(byCode(3857)), attribution: addBox.querySelector('[data-map-att]').value })));
        status.textContent = internetOn() ? t('mapl.added') : t('ml.added_off');
      } catch (e) { status.textContent = e.message; }
    }
    dlg.addEventListener('click', (e) => {
      const btn = e.target.closest('button'); if (!btn) return;
      const d = btn.dataset;
      if (d.close !== undefined) { dlg.close(); return; }
      if (d.mapRead !== undefined) { readServer(); return; }
      if (d.mapStop !== undefined) { ctrl?.abort(); return; }
      if (d.mapAddFound !== undefined) { addFound(); return; }
      if (d.mapAddXyz !== undefined) { addXyz(); return; }
      if (d.mapCrsApply !== undefined) { applyCrs(); return; }
      if (d.mapCrsClear !== undefined) { host.setCrs(null); fcache.key = '~'; host.invalidate(); renderSys(); renderRows(); return; }
      if (d.mapRemove) { change((l) => { const i = l.findIndex((x) => x.id === d.mapRemove); if (i >= 0) l.splice(i, 1); }); runtime.delete(d.mapRemove); return; }
      if (d.mapMove) change((l) => { const i = l.findIndex((x) => x.id === d.mapMove), j = i + Number(d.d); if (i >= 0 && j >= 0 && j < l.length) [l[i], l[j]] = [l[j], l[i]]; });
    });
    dlg.addEventListener('change', (e) => {
      const tg = e.target, d = tg.dataset || {};
      if (tg === kindSel) { renderAdd(); return; }
      if (d.mapInternet !== undefined) { state.internet = tg.checked; persist(); if (!state.internet) stopAll(); for (const r of runtime.values()) { r.blocked = false; r.fails = 0; } host.invalidate(); render(); return; }
      if (d.mapVisible) { const r = rt(d.mapVisible); r.blocked = false; r.fails = 0; r.said = false; r.note = ''; change((l) => { const m = l.find((x) => x.id === d.mapVisible); if (m) m.visible = tg.checked; }); return; }
      if (d.mapOpacity) { const v = Math.max(0, Math.min(100, Number(tg.value))) / 100; delete rt(d.mapOpacity).opacity; change((l) => { const m = l.find((x) => x.id === d.mapOpacity); if (m) m.opacity = v; }); return; }
      if (d.mapFile !== undefined && tg.files?.length) { const fs = [...tg.files]; tg.value = ''; addImageFiles(fs).then(() => renderRows()); }
    });
    dlg.addEventListener('input', (e) => { const d = e.target.dataset || {}; if (d.mapOpacity) { rt(d.mapOpacity).opacity = Number(e.target.value) / 100; host.invalidate(); } });
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    dlg.addEventListener('close', () => { ctrl?.abort(); dialogApi = null; dlg.remove(); host.refocus?.(); });
    host.root.append(dlg);
    dialogApi = { render, renderRows };
    render();
    dlg.showModal();
    kindSel.focus();
  }

  return {
    paint, drape, openDialog, addImageFiles, extents, stopAll,
    layers: () => maps(),
    has: () => maps().length > 0,
    crsChanged() { fcache.key = '~'; host.invalidate(); dialogApi?.render(); },
    state: () => ({ ...state, layers: maps().map((m) => ({ ...m })) }),
    /** For tests: the layer requests in flight or done, and a layer's note. */
    debug: () => ({ cache: [...cache.entries()].map(([u, c]) => ({ url: u, status: c.status })), notes: Object.fromEntries([...runtime].map(([k, r]) => [k, r.note])) }),
  };
}

/**
 * The drawing's own coordinates in a projected system: `place` {x, y (a drawing point), e, n (where it is on the map grid),
 * rot (degrees: the drawing's X axis turned from the grid's east)} and the drawing's metres per unit → a crs.js `local`.
 * With drawing units equal to the system's and no placement, null (the drawing's numbers are grid coordinates).
 */
export function drawingLocal(entry, place, mPerUnit, METRES_PER) {
  const k = mPerUnit && METRES_PER[entry.unit] ? mPerUnit / METRES_PER[entry.unit] : 1;
  const p = place || { x: 0, y: 0, e: 0, n: 0, rot: 0 };
  if (Math.abs(k - 1) < 1e-12 && !p.x && !p.y && !p.e && !p.n && !p.rot) return null;
  return { scale: k, rotation: p.rot || 0, from: [p.x || 0, p.y || 0], to: [p.e || 0, p.n || 0] };
}
