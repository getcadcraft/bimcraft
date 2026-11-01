/* SPDX-License-Identifier: Apache-2.0 */
/**
 * register-ui.js — the "Register scans" dialog (0.7 LC.3, session `scans`) for BimCraft's and CadCraft's point cloud tabs.
 * One module for both: canonical in bimcraft/dev, a byte-identical copy in cadcraft/dev (`node tools/pointcloud/sync.mjs`).
 * The work is register.js's (Session); the files out are scan-export.js's. This file is only the dialog: a list of scans, a
 * plan / front / side picture of them in the registered frame (a click picks a point), pairs → a placement with the residual
 * of each pair, ICP with the error of each step and a Stop button, the project file, LAS and E57 export.
 *
 *   const reg = installRegister(host)    host = { root, status?(text, isError, isOk), openRegistered?(File) }
 *   reg.open()                           the dialog (made on first use); add scans from its "Add scans…" button
 *   reg.session()                        → the register.js Session (for tests)
 *   reg.addFiles(files) · reg.close()
 * Nothing leaves the computer; no point is rewritten (a transform per scan); the dialog's picture shows at most
 * DISPLAY_POINTS points per scan.
 */
import { Session, fileHead, describeM, PROJECT_FORMAT } from './register.js';
import { readCloudInfo, loadCloud, LIMITS } from './pointcloud.js';
import { CLOUD_ACCEPT, isCloudFile } from './cloud-types.js';
import { writeLas, writeE57 } from './scan-export.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';

const DISPLAY_POINTS = 30000;
const COLORS = ['#e5484d', '#3e63dd', '#30a46c', '#f5a623', '#8e4ec6', '#12a594', '#d6409f', '#7a7a7a'];
const VIEWS = { top: [0, 1, 2], front: [0, 2, 1], side: [1, 2, 0] };   // [screen x, screen y (up), depth (toward the viewer)]
const PROJECT_MAX = 5 * 1024 * 1024;
// the words are looked up through whole keys, so tools/pointcloud/sync.mjs and tools/lang/scan.mjs see every one
const MODE_KEY = { both: 'reg.icp.mode.both', p2p: 'reg.icp.mode.p2p', plane: 'reg.icp.mode.plane' };
const PHASE_KEY = { p2p: 'reg.icp.phase.p2p', plane: 'reg.icp.phase.plane' };
const VIEW_KEY = { top: 'reg.view.top', front: 'reg.view.front', side: 'reg.view.side' };
const fmt = (v, d = 3) => (Number.isFinite(v) ? String(Math.round(v * 10 ** d) / 10 ** d) : '');
const CSS = `
.reg-dlg{padding:0;border:var(--pen-2,2px) solid var(--ink,#111);background:var(--sheet,#fff);color:var(--ink,#111);width:min(96vw,78rem);max-height:94vh}
.reg-dlg::backdrop{background:rgba(0,0,0,.45)}
.reg-wrap{display:grid;grid-template-columns:minmax(22rem,29rem) 1fr;height:min(90vh,52rem)}
.reg-side{overflow:auto;padding:.75rem;border-right:1px solid var(--line,#999);display:flex;flex-direction:column;gap:.75rem}
.reg-head{display:flex;align-items:center;justify-content:space-between;gap:.5rem}
.reg-head h2{font-size:1.1rem;margin:0}
.reg-side h3{font-size:.85rem;margin:0;font-weight:700}
.reg-side section{border-top:1px solid var(--line,#999);padding-top:.5rem;display:flex;flex-direction:column;gap:.5rem}
.reg-row{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center}
.reg-row label{display:flex;gap:.25rem;align-items:center;font-size:.8rem}
.reg-scans{list-style:none;margin:.25rem 0;padding:0;display:flex;flex-direction:column;gap:.2rem}
.reg-scans li{display:flex;gap:.35rem;align-items:center;font-size:.8rem}
.reg-sw{width:.8rem;height:.8rem;flex:none;display:inline-block}
.reg-nm{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
.reg-sub{font-size:.75rem;line-height:1.45;color:var(--ink-2,#555)}
.reg-tbl{border-collapse:collapse;width:100%;font-size:.75rem;font-variant-numeric:tabular-nums}
.reg-tbl th,.reg-tbl td{border-bottom:1px solid var(--line,#ccc);padding:.1rem .2rem;text-align:left}
.reg-tbl input{width:3.9rem;font:inherit;font-size:.72rem;padding:.05rem .15rem}
.reg-log{max-height:9rem;overflow:auto}
.reg-view{display:flex;flex-direction:column;min-width:0;min-height:0}
.reg-bar{display:flex;gap:.35rem;align-items:center;padding:.4rem .5rem;border-bottom:1px solid var(--line,#999)}
.reg-cv{flex:1;min-height:22rem;width:100%;display:block;touch-action:none;cursor:crosshair;background:var(--sheet-2,#f4f4f4)}
.reg-msg{padding:.35rem .6rem;font-size:.8rem;border-top:1px solid var(--line,#999);height:3.4rem;overflow:auto;flex:none}
.reg-msg.is-err{color:var(--layer-red,#b00020);font-weight:600}
.reg-spark{width:100%;height:2.6rem;display:block}
@media (max-width:760px){.reg-wrap{grid-template-columns:1fr;grid-template-rows:auto minmax(18rem,1fr)}.reg-side{border-right:0}}
`;

export function installRegister(host = {}) {
  const S = new Session();
  const files = [];          // File | null, parallel to S.scans
  const shown = [];          // per scan: { idx Int32Array (into work), n }
  let dlg = null, ui = null, view = 'top', cam = { cx: 0, cy: 0, s: 1 }, pick = null, abort = null, busy = false, running = null;
  let unit = '';

  const say = (text, bad = false, good = false) => { if (ui) { ui.msg.textContent = text; ui.msg.classList.toggle('is-err', !!bad); } host.status?.(text, bad, good); };
  const err = (e) => {
    const m = { few: 'reg.pairs.few', collinear: 'reg.pairs.collinear', no_overlap: 'reg.icp.nooverlap', degenerate: 'reg.icp.degenerate', no_reference: 'reg.icp.noref', too_many_scans: 'reg.err.too_many', bad_matrix: 'reg.err.matrix' }[e?.code];
    return m ? t(m) : (e?.message || String(e));
  };

  // ---------------------------------------------------------------- scans
  async function addFiles(list) {
    for (const f of [...list]) {
      if (!f) continue;
      if (/\.(ccscans\.json|json)$/i.test(f.name)) { await openProject(f); continue; }
      try {
        say(t('reg.reading', { file: f.name }));
        const info = await readCloudInfo(f);
        const cloud = await loadCloud(f, info, { budget: Number(ui?.budget.value) || 2e6, progress: (p) => say(t('reg.loading', { name: f.name, pct: Math.round(p * 100) })) });
        if (S.scans.length && S.scans[0].cloud.unit && cloud.unit && S.scans[0].cloud.unit !== cloud.unit) say(t('reg.units', { a: S.scans[0].cloud.unit, b: cloud.unit }), true);
        const i = S.addScan({ name: f.name, size: f.size, head: await fileHead(f), cloud });
        files[i] = f;
        buildDisplay(i);
        if (!unit) unit = cloud.unit || '';
        say(t('reg.added', { name: f.name, kept: cloud.n.toLocaleString('en-US'), read: cloud.read.toLocaleString('en-US') }), false, true);
      } catch (e) { say(err(e), true); }
    }
    refresh(); fit();
  }
  function buildDisplay(i) {
    const n = S.scans[i].work.length / 3, step = Math.max(1, Math.ceil(n / DISPLAY_POINTS)), m = Math.floor((n + step - 1) / step), idx = new Int32Array(m);
    for (let k = 0; k < m; k++) idx[k] = k * step;
    shown[i] = idx;
  }
  /** Scan i's display points in the registered frame (working coordinates): Float32Array(3m). */
  const worldShown = (i) => {
    const M = S.local(i), w = S.scans[i].work, idx = shown[i], o = new Float32Array(idx.length * 3);
    for (let k = 0; k < idx.length; k++) {
      const x = w[idx[k] * 3], y = w[idx[k] * 3 + 1], z = w[idx[k] * 3 + 2];
      o[k * 3] = M[0] * x + M[1] * y + M[2] * z + M[3]; o[k * 3 + 1] = M[4] * x + M[5] * y + M[6] * z + M[7]; o[k * 3 + 2] = M[8] * x + M[9] * y + M[10] * z + M[11];
    }
    return o;
  };
  const moving = () => Number(ui.moving.value), against = () => Number(ui.against.value);

  // ---------------------------------------------------------------- the picture
  let cache = [];
  function redrawData() { cache = S.scans.map((_, i) => worldShown(i)); }
  function fit() {
    redrawData();
    const [ax, ay] = VIEWS[view];
    let lo = [Infinity, Infinity], hi = [-Infinity, -Infinity];
    for (const c of cache) for (let k = 0; k < c.length; k += 3) { lo = [Math.min(lo[0], c[k + ax]), Math.min(lo[1], c[k + ay])]; hi = [Math.max(hi[0], c[k + ax]), Math.max(hi[1], c[k + ay])]; }
    if (!Number.isFinite(lo[0])) { cam = { cx: 0, cy: 0, s: 1 }; draw(); return; }
    const r = ui.cv.getBoundingClientRect(), w = Math.max(1, r.width), h = Math.max(1, r.height);
    cam = { cx: (lo[0] + hi[0]) / 2, cy: (lo[1] + hi[1]) / 2, s: 0.92 * Math.min(w / Math.max(hi[0] - lo[0], 1e-9), h / Math.max(hi[1] - lo[1], 1e-9)) };
    draw();
  }
  const toScreen = (x, y, w, h) => [w / 2 + (x - cam.cx) * cam.s, h / 2 - (y - cam.cy) * cam.s];
  function draw() {
    if (!ui) return;
    const cv = ui.cv, r = cv.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, w, h);
    const [ax, ay] = VIEWS[view];
    S.scans.forEach((s, i) => {
      if (ui.hidden.has(i)) return;
      const c = cache[i] || [];
      g.fillStyle = COLORS[i % COLORS.length];
      g.globalAlpha = 0.85;
      for (let k = 0; k < c.length; k += 3) { const [px, py] = toScreen(c[k + ax], c[k + ay], w, h); g.fillRect(px - 0.75, py - 0.75, 1.6, 1.6); }
    });
    g.globalAlpha = 1;
    // pairs: a cross where the scan point is now, a ring where its target is
    const mi = ui.moving.value === '' ? -1 : moving();
    if (S.scans[mi]) {
      g.lineWidth = 2; g.font = '12px sans-serif';
      S.pairs(mi).forEach((q, k) => {
        const pl = abs2work(q.p), M = S.local(mi), x = M[0] * pl[0] + M[1] * pl[1] + M[2] * pl[2] + M[3], y = M[4] * pl[0] + M[5] * pl[1] + M[6] * pl[2] + M[7], z = M[8] * pl[0] + M[9] * pl[1] + M[10] * pl[2] + M[11];
        const v = [x, y, z], [sx, sy] = toScreen(v[ax], v[ay], w, h);
        g.strokeStyle = g.fillStyle = COLORS[mi % COLORS.length];
        g.beginPath(); g.moveTo(sx - 6, sy); g.lineTo(sx + 6, sy); g.moveTo(sx, sy - 6); g.lineTo(sx, sy + 6); g.stroke(); g.fillText(String(k + 1), sx + 7, sy - 5);
        if (q.target) {
          const tl = [q.target[0] - S.origin[0], q.target[1] - S.origin[1], q.target[2] - S.origin[2]], [tx, ty] = toScreen(tl[ax], tl[ay], w, h);
          g.strokeStyle = g.fillStyle = '#111'; g.beginPath(); g.arc(tx, ty, 6, 0, 7); g.stroke(); g.fillText(String(k + 1), tx + 7, ty - 5);
        }
      });
    }
    if (pick) { g.fillStyle = 'rgba(0,0,0,.7)'; g.font = '13px sans-serif'; g.fillText(pick.step === 'target' ? t('reg.pairs.pick_target') : t('reg.pairs.pick_scan', { name: S.scans[mi]?.name || '' }), 10, 18); }
    if (!S.scans.length) { g.fillStyle = 'rgba(0,0,0,.6)'; g.font = '14px sans-serif'; g.fillText(t('reg.empty'), 14, 24); }
  }
  const abs2work = (p) => [p[0] - S.origin[0], p[1] - S.origin[1], p[2] - S.origin[2]];
  function setupCanvas() {
    const cv = ui.cv;
    let drag = null;
    cv.addEventListener('pointerdown', (e) => { cv.setPointerCapture(e.pointerId); drag = { x: e.clientX, y: e.clientY, cx: cam.cx, cy: cam.cy, moved: false }; });
    cv.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      if (drag.moved) { cam.cx = drag.cx - dx / cam.s; cam.cy = drag.cy + dy / cam.s; draw(); }
    });
    cv.addEventListener('pointerup', (e) => { const d = drag; drag = null; if (d && !d.moved) clicked(e); });
    cv.addEventListener('wheel', (e) => {
      e.preventDefault();
      const r = cv.getBoundingClientRect(), f = Math.exp(-e.deltaY * 0.0015), mx = e.clientX - r.left - r.width / 2, my = e.clientY - r.top - r.height / 2;
      cam.cx += mx / cam.s * (1 - 1 / f); cam.cy -= my / cam.s * (1 - 1 / f); cam.s *= f; draw();
    }, { passive: false });
  }
  /** The display point nearest the click (within 10 px; the one nearest the viewer when several are as near). */
  function pickAt(e, only) {
    const r = ui.cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top, [ax, ay, az] = VIEWS[view];
    let best = null;
    S.scans.forEach((s, i) => {
      if (ui.hidden.has(i) || (only && !only(i))) return;
      const c = cache[i] || [];
      for (let k = 0; k < c.length; k += 3) {
        const [sx, sy] = toScreen(c[k + ax], c[k + ay], r.width, r.height), d = Math.hypot(sx - px, sy - py);
        if (d > 10) continue;
        const depth = view === 'front' ? -c[k + az] : c[k + az];
        if (!best || d < best.d - 1.5 || (Math.abs(d - best.d) <= 1.5 && depth > best.depth)) best = { i, k: k / 3, d, depth };
      }
    });
    return best;
  }
  function clicked(e) {
    if (!pick) return;
    const mi = moving();
    if (pick.step === 'source') {
      const b = pickAt(e, (i) => i === mi);
      if (!b) { say(t('reg.pairs.nopoint'), true); return; }
      const w = S.scans[mi].work, j = shown[mi][b.k], p = [w[j * 3] + S.origin[0], w[j * 3 + 1] + S.origin[1], w[j * 3 + 2] + S.origin[2]];
      if (pick.typed) { S.addPair(mi, p, null); pick = null; say(t('reg.pairs.typed_hint'), false, true); }
      else { pick = { step: 'target', p }; say(t('reg.pairs.pick_target')); }
    } else {
      const b = pickAt(e, (i) => i !== mi);
      if (!b) { say(t('reg.pairs.nopoint'), true); return; }
      const c = cache[b.i], target = [c[b.k * 3] + S.origin[0], c[b.k * 3 + 1] + S.origin[1], c[b.k * 3 + 2] + S.origin[2]];
      S.addPair(mi, pick.p, target);
      pick = null;
      say(t('reg.pairs.added', { n: S.pairs(mi).length }), false, true);
    }
    refresh(); draw();
  }

  // ---------------------------------------------------------------- the lists
  function refresh() {
    if (!ui) return;
    const keepM = ui.moving.value, keepA = ui.against.value;
    const opts = (sel, keep, def) => { sel.replaceChildren(...S.scans.map((s, i) => el('option', { value: String(i) }, `${i + 1}. ${s.name}`))); sel.value = S.scans[Number(keep)] && keep !== '' ? keep : def; };
    opts(ui.moving, keepM, String(Math.min(1, S.scans.length - 1)));
    opts(ui.against, keepA, '0');
    ui.scans.replaceChildren(...S.scans.map((s, i) => {
      const d = describeM(s.M), moved = d.angle > 1e-6 || d.shift > 1e-9;
      return el('li', {},
        el('input', { type: 'checkbox', checked: !ui.hidden.has(i), title: t('reg.show'), 'aria-label': t('reg.show') + ' ' + s.name }),
        el('span', { className: 'reg-sw', style: 'background:' + COLORS[i % COLORS.length] }),
        el('span', { className: 'reg-nm', title: s.name }, s.name),
        el('span', { className: 'reg-sub' }, t('reg.scan.points', { n: s.cloud.n.toLocaleString('en-US') }) + (moved ? ' · ' + t('reg.scan.moved', { angle: fmt(d.angle, 3), shift: fmt(d.shift, 3) }) : '')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => removeScan(i) }, t('reg.remove')));
    }));
    ui.scans.querySelectorAll('input[type=checkbox]').forEach((c, i) => c.addEventListener('change', () => { if (c.checked) ui.hidden.delete(i); else ui.hidden.add(i); draw(); }));
    fillPairs();
    const two = S.scans.length >= 2;
    for (const b of [ui.addPair, ui.addTyped, ui.place, ui.run, ui.undo, ui.reset]) b.disabled = !two || busy;
    ui.run.disabled = !two || busy;
    ui.stop.disabled = !busy;
    for (const b of [ui.las, ui.e57, ui.saveProject, ui.show]) b.disabled = !S.scans.length || busy;
    ui.show.hidden = !host.openRegistered;
  }
  function fillPairs() {
    const mi = S.scans.length ? moving() : -1, body = ui.pairs;
    body.replaceChildren();
    if (!S.scans[mi]) return;
    const res = S.pairResiduals(mi);
    S.pairs(mi).forEach((q, k) => {
      const num = (a) => { const inp = el('input', { type: 'text', inputmode: 'decimal', value: q.target ? fmt(q.target[a], 4) : '', 'aria-label': t('reg.pairs.col.target') + ' ' + 'XYZ'[a] }); inp.addEventListener('change', () => targetEdited(mi, k)); inp.dataset.a = a; return inp; };
      body.append(el('tr', {},
        el('td', {}, String(k + 1)),
        el('td', { title: q.p.map((v) => fmt(v, 4)).join(', ') }, q.p.map((v) => fmt(v, 2)).join(', ')),
        el('td', {}, num(0), num(1), num(2)),
        el('td', {}, res[k] === null ? '–' : fmt(res[k], 4)),
        el('td', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'aria-label': t('reg.pairs.remove'), onClick: () => { S.removePair(mi, k); refresh(); draw(); } }, '×'))));
    });
  }
  function targetEdited(mi, k) {
    const row = ui.pairs.children[k], v = [...row.querySelectorAll('input')].map((i) => Number(String(i.value).replace(',', '.')));
    S.setTarget(mi, k, v.every((x, a) => row.querySelectorAll('input')[a].value.trim() !== '' && Number.isFinite(x)) ? v : null);
    draw();
  }
  function removeScan(i) {
    S.removeScan(i); files.splice(i, 1); shown.splice(i, 1); ui.hidden.clear();
    refresh(); fit();
  }

  // ---------------------------------------------------------------- actions
  function placeByPairs() {
    const mi = moving();
    try {
      const r = S.solvePairs(mi);
      say(t('reg.pairs.placed', { name: S.scans[mi].name, n: r.used, rms: fmt(r.rms, 4), unit }), false, true);
    } catch (e) { say(err(e), true); return; }
    refresh(); fit();
  }
  async function runIcp() {
    if (busy) return;
    const mi = moving(), ai = against();
    if (mi === ai) { say(t('reg.icp.noref'), true); return; }
    busy = true; refresh();
    abort = new AbortController();
    ui.log.replaceChildren(); ui.errs = [];
    const n0 = ui.maxd.value.trim() === '' ? 0 : Number(String(ui.maxd.value).replace(',', '.'));
    try {
      const run = await S.icp(mi, [ai], {
        mode: ui.mode.value, movingPoints: Number(ui.pts.value), fixedPoints: Number(ui.pts.value) * 3, maxDistance: n0 > 0 ? n0 : 0, signal: abort.signal,
        onIteration: (r) => {
          ui.errs.push(r.phase === 'plane' ? r.planeRms : r.rms);
          ui.log.append(el('tr', {}, el('td', {}, String(r.n)), el('td', {}, t(PHASE_KEY[r.phase])), el('td', {}, fmt(r.phase === 'plane' ? r.planeRms : r.rms, 5)), el('td', {}, r.matched.toLocaleString('en-US'))));
          ui.log.parentElement.parentElement.scrollTop = 1e9;
          spark(); redrawData(); draw();
        },
      });
      const first = run.iterations[0], last = run.iterations.at(-1);
      if (!first) say(t('reg.icp.stopped', { n: 0 }), false, true);
      else say(run.stopped ? t('reg.icp.stopped', { n: run.iterations.length }) : t('reg.icp.done', { name: S.scans[mi].name, n: run.iterations.length, from: fmt(first.rms, 5), to: fmt(last.phase === 'plane' ? last.planeRms : last.rms, 5), unit }), false, true);
    } catch (e) { say(err(e), true); }
    busy = false; abort = null; refresh(); fit();
  }
  function spark() {
    const cv = ui.spark, g = cv.getContext('2d'), w = cv.width = cv.clientWidth || 300, h = cv.height = cv.clientHeight || 40, e = ui.errs;
    g.clearRect(0, 0, w, h);
    if (e.length < 2) return;
    const hi = Math.max(...e), lo = Math.min(...e), span = Math.max(hi - lo, hi * 1e-3, 1e-12);
    g.strokeStyle = '#3e63dd'; g.lineWidth = 1.5; g.beginPath();
    e.forEach((v, k) => { const x = 3 + (w - 6) * k / (e.length - 1), y = 3 + (h - 6) * (1 - (v - lo) / span); if (k) g.lineTo(x, y); else g.moveTo(x, y); });
    g.stroke();
  }
  const download = (blob, name) => { const a = el('a', { href: URL.createObjectURL(blob), download: name }); document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000); };
  /** The scans for export: re-read every point from the files when asked (the viewer keeps a budget), else the points held. */
  async function exportItems() {
    const items = S.registered();
    if (!ui.all.checked) return items;
    for (let i = 0; i < items.length; i++) {
      if (!files[i]) continue;
      say(t('reg.export.reading', { name: items[i].name }));
      try { const info = await readCloudInfo(files[i]); items[i].cloud = await loadCloud(files[i], info, { budget: LIMITS.budget }); } catch (e) { say(err(e), true); }
    }
    return items;
  }
  async function exportAs(kind) {
    if (busy) return;
    busy = true; refresh();
    try {
      const items = await exportItems();
      const r = kind === 'las' ? writeLas(items) : writeE57(items, { name: 'Registered scans' })   // i18n-ignore: the name written into the file;
      const name = 'registered.' + kind;
      download(r.blob, name);
      say(t('reg.export.done', { file: name, n: r.count.toLocaleString('en-US') }), false, true);
    } catch (e) { say(e?.code === 'too_many' ? t('reg.export.toomany') : err(e), true); }
    busy = false; refresh();
  }
  async function showRegistered() {
    if (busy) return;
    busy = true; refresh();
    try {
      const r = writeLas(await exportItems());
      const f = new File([r.blob], 'registered.las', { type: 'application/octet-stream' });
      await host.openRegistered(f);
      say(t('reg.export.shown', { n: r.count.toLocaleString('en-US') }), false, true);
      dlg.close();
    } catch (e) { say(err(e), true); }
    busy = false; refresh();
  }
  function saveProject() {
    const text = JSON.stringify(S.toProject(), null, 1);
    download(new Blob([text], { type: 'application/json' }), 'scans.ccscans.json');
    say(t('reg.project.saved', { n: S.scans.length }), false, true);
  }
  async function openProject(f) {
    try {
      if (f.size > PROJECT_MAX) throw Object.assign(new Error(t('reg.project.big')), { userFacing: true });
      let obj; try { obj = JSON.parse(await f.text()); } catch (e) { throw Object.assign(new Error(t('reg.project.bad')), { userFacing: true }); }
      let proj; try { proj = Session.checkProject(obj); } catch (e) { throw Object.assign(new Error(t('reg.project.bad') + (e.why ? ' (' + e.why + ')' : '')), { userFacing: true }); }
      const r = S.applyProject(proj);
      say(r.missing.length ? t('reg.project.partial', { matched: r.matched.length, total: proj.scans.length, names: r.missing.map((k) => proj.scans[k].file.name).join(', ') }) : t('reg.project.opened', { n: r.matched.length }), r.missing.length > 0, !r.missing.length);
      refresh(); fit();
    } catch (e) { say(e.message, true); }
  }

  // ---------------------------------------------------------------- the dialog
  function build() {
    if (!document.getElementById('reg-style')) document.head.append(el('style', { id: 'reg-style' }, CSS));
    const sel = (label, node) => el('label', {}, label, ' ', node);
    const mk = (label, onClick, extra = {}) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick, ...extra }, label);
    ui = { hidden: new Set(), errs: [] };
    ui.scans = el('ul', { className: 'reg-scans', 'data-reg-scans': '' });
    ui.budget = el('select', { className: 'select-cc', 'data-reg-budget': '' }, ...[1e6, 2e6, 5e6].map((n) => el('option', { value: String(n) }, t('reg.budget.n', { n: n / 1e6 }))));
    ui.budget.value = '2000000';
    ui.moving = el('select', { className: 'select-cc', 'data-reg-moving': '' });
    ui.against = el('select', { className: 'select-cc', 'data-reg-against': '' });
    ui.moving.addEventListener('change', () => { fillPairs(); draw(); });
    ui.pairs = el('tbody', { 'data-reg-pairs': '' });
    ui.addPair = mk(t('reg.pairs.pick'), () => { pick = { step: 'source', typed: false }; say(t('reg.pairs.pick_scan', { name: S.scans[moving()].name })); draw(); }, { 'data-reg-pick': '' });
    ui.addTyped = mk(t('reg.pairs.typed'), () => { pick = { step: 'source', typed: true }; say(t('reg.pairs.pick_scan', { name: S.scans[moving()].name })); draw(); }, { 'data-reg-typed': '' });
    ui.place = mk(t('reg.pairs.place'), placeByPairs, { 'data-reg-place': '' });
    ui.mode = el('select', { className: 'select-cc', 'data-reg-mode': '' }, ...['both', 'p2p', 'plane'].map((m) => el('option', { value: m }, t(MODE_KEY[m]))));
    ui.pts = el('select', { className: 'select-cc', 'data-reg-pts': '' }, ...[5000, 20000, 60000].map((n) => el('option', { value: String(n) }, t('reg.icp.points.n', { n: n.toLocaleString('en-US') }))));
    ui.pts.value = '20000';
    ui.maxd = el('input', { type: 'text', inputmode: 'decimal', placeholder: t('reg.icp.auto'), size: 7, 'data-reg-maxd': '' });
    ui.run = mk(t('reg.icp.run'), runIcp, { 'data-reg-run': '' });
    ui.stop = mk(t('reg.icp.stop'), () => abort?.abort(), { 'data-reg-stop': '', disabled: true });
    ui.log = el('tbody', { 'data-reg-log': '' });
    ui.spark = el('canvas', { className: 'reg-spark', 'aria-hidden': 'true' });
    ui.undo = mk(t('reg.undo'), () => { const i = moving(); if (S.undo(i)) { say(t('reg.undone', { name: S.scans[i].name }), false, true); refresh(); fit(); } else say(t('reg.nothing'), true); }, { 'data-reg-undo': '' });
    ui.reset = mk(t('reg.reset'), () => { S.reset(moving()); refresh(); fit(); }, { 'data-reg-reset': '' });
    ui.all = el('input', { type: 'checkbox', checked: true, 'data-reg-all': '' });
    ui.las = mk(t('reg.export.las'), () => exportAs('las'), { 'data-reg-las': '' });
    ui.e57 = mk(t('reg.export.e57'), () => exportAs('e57'), { 'data-reg-e57': '' });
    ui.show = mk(t('reg.export.open'), showRegistered, { 'data-reg-show': '' });
    ui.saveProject = mk(t('reg.project.save'), saveProject, { 'data-reg-save': '' });
    const add = el('input', { type: 'file', multiple: true, accept: CLOUD_ACCEPT, hidden: true, 'data-reg-input': '' });
    add.addEventListener('change', () => { const l = [...add.files]; add.value = ''; addFiles(l); });
    const proj = el('input', { type: 'file', accept: '.json,application/json', hidden: true, 'data-reg-project': '' });
    proj.addEventListener('change', () => { const f = proj.files[0]; proj.value = ''; if (f) openProject(f); });
    ui.cv = el('canvas', { className: 'reg-cv', 'data-reg-canvas': '', role: 'img', 'aria-label': t('reg.view.label') });
    ui.msg = el('div', { className: 'reg-msg', role: 'status', 'aria-live': 'polite', 'data-reg-msg': '' });
    const viewBtns = Object.keys(VIEWS).map((v) => mk(t(VIEW_KEY[v]), () => { view = v; fit(); }, { 'data-reg-view': v }));
    dlg = el('dialog', { className: 'reg-dlg', 'data-register': '', 'data-dialog': 'register-scans', 'aria-labelledby': 'reg-title' },
      el('div', { className: 'reg-wrap' },
        el('div', { className: 'reg-side' },
          el('div', { className: 'reg-head' }, el('h2', { id: 'reg-title' }, t('reg.title')), mk(t('reg.close'), () => dlg.close(), { 'data-reg-close': '' })),
          el('span', { className: 'reg-sub' }, t('reg.intro')),
          el('section', {}, el('h3', {}, t('reg.scans')),
            el('div', { className: 'reg-row' }, mk(t('reg.add'), () => add.click(), { title: t('reg.add.title'), 'data-reg-add': '' }), sel(t('reg.budget'), ui.budget)),
            ui.scans, add, proj,
            el('div', { className: 'reg-row' }, sel(t('reg.move'), ui.moving), sel(t('reg.against'), ui.against))),
          el('section', {}, el('h3', {}, t('reg.pairs.title')), el('span', { className: 'reg-sub' }, t('reg.pairs.hint')),
            el('div', { className: 'reg-row' }, ui.addPair, ui.addTyped, mk(t('reg.pairs.cancel'), () => { pick = null; say(''); draw(); })),
            el('table', { className: 'reg-tbl' }, el('thead', {}, el('tr', {}, ...['#', t('reg.pairs.col.scan'), t('reg.pairs.col.target'), t('reg.pairs.col.resid'), ''].map((x) => el('th', {}, x)))), ui.pairs),
            el('div', { className: 'reg-row' }, ui.place, ui.undo, ui.reset)),
          el('section', {}, el('h3', {}, t('reg.icp.title')), el('span', { className: 'reg-sub' }, t('reg.icp.hint')),
            el('div', { className: 'reg-row' }, sel(t('reg.icp.mode'), ui.mode), sel(t('reg.icp.points'), ui.pts), sel(t('reg.icp.maxdist'), ui.maxd)),
            el('div', { className: 'reg-row' }, ui.run, ui.stop),
            ui.spark,
            el('div', { className: 'reg-log' }, el('table', { className: 'reg-tbl' }, el('thead', {}, el('tr', {}, ...['#', t('reg.icp.col.phase'), t('reg.icp.col.err'), t('reg.icp.col.matched')].map((x) => el('th', {}, x)))), ui.log))),
          el('section', {}, el('h3', {}, t('reg.out.title')),
            el('div', { className: 'reg-row' }, ui.saveProject, mk(t('reg.project.open'), () => proj.click(), { 'data-reg-open-project': '' })),
            el('div', { className: 'reg-row' }, ui.las, ui.e57, ui.show),
            el('label', { className: 'reg-sub' }, ui.all, ' ', t('reg.export.all', { max: (LIMITS.budget / 1e6).toLocaleString('en-US') })))),
        el('div', { className: 'reg-view' },
          el('div', { className: 'reg-bar' }, ...viewBtns, mk(t('reg.view.fit'), fit), el('span', { className: 'reg-sub' }, t('reg.view.hint'))),
          ui.cv, ui.msg)));
    dlg.addEventListener('close', () => { abort?.abort(); pick = null; });
    dlg.addEventListener('cancel', () => abort?.abort());
    dlg.addEventListener('dragover', (e) => e.preventDefault());
    dlg.addEventListener('drop', (e) => { e.preventDefault(); addFiles([...e.dataTransfer.files].filter((f) => isCloudFile(f.name) || /\.json$/i.test(f.name))); });
    (host.root || document.body).append(dlg);
    new ResizeObserver(() => { if (dlg.open) draw(); }).observe(ui.cv);
    setupCanvas();
  }
  return {
    open(list = []) {
      if (!dlg) build();
      refresh();
      if (!dlg.open) dlg.showModal();
      if (list.length) addFiles(list); else { fit(); say(S.scans.length ? '' : t('reg.empty')); }
    },
    close() { dlg?.close(); },
    addFiles,
    session: () => S,
    state: () => ({ view, scans: S.scans.length, busy, picking: pick && pick.step }),
    PROJECT_FORMAT,
    /** For tests: where display point k of scan i is on the page (client px) and in the working frame; the display point of scan i nearest a working-frame point. */
    debug: {
      shownCount: (i) => (cache[i]?.length || 0) / 3,
      screenOf(i, k) { const r = ui.cv.getBoundingClientRect(), c = cache[i], [ax, ay] = VIEWS[view], [sx, sy] = toScreen(c[k * 3 + ax], c[k * 3 + ay], r.width, r.height); return { x: r.left + sx, y: r.top + sy, world: [c[k * 3], c[k * 3 + 1], c[k * 3 + 2]] }; },
      nearest(i, p) { const c = cache[i]; let best = -1, bd = Infinity; for (let k = 0; k < c.length / 3; k++) { const d = Math.hypot(c[k * 3] - p[0], c[k * 3 + 1] - p[1], c[k * 3 + 2] - p[2]); if (d < bd) { bd = d; best = k; } } return best; },
    },
  };
}
