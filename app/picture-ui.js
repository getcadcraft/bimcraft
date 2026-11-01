/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — selectors and canvas code; the words are in the language file (pic.*). */
/**
 * picture-ui.js — pictures as backgrounds on the plan (0.8 D8.8, session d88_PART_3), through model-ui.js `extend()`:
 *   Picture [data-mtool="picture"]   Insert picture… (PNG, JPEG or WebP, read in the browser, never uploaded) puts it under the plan of this level,
 *     fitted to the view and "not scaled yet". Scale: pick two points on it, type their real distance. Move: a base point, then where it goes.
 *     Turn (angle), Opacity, Lock, Hide, Remove. Each is one undo step; the picture is kept in the model (model-picture.js).
 *   Drawn under everything on the level's plan and reflected ceiling plan (model-planview.js scene.pictures), never picked outside this tool.
 * The maths is picture.js (lib/picture); problems go to the shell's Problems. Test hook: window.bimcraftPicture = { state, insert, scale }.
 * Round 3 (d88b_PART_3): the bytes are kept beside the IFC (picture-store.js; a plain save asks: bundle, or embed the small ones); a picture can stand on a
 * vertical plane over a section line (Place on: a vertical plane; two clicks); every picture is also a textured plane in the 3D view (picture-3d.js,
 * at most LIMITS.perLevel = 8 on a level); the plan PDF prints the level's pictures (pdfImages, used by model-ui.js).
 * Paste (0.8 D8.15, picture-paste.js): Edit › Paste and Ctrl+V (bimcraft.js asks `areaWins`, then calls `paste`) put a copied area (MarkupCraft's
 * Copy area, localStorage "cadcraft.areaclip") on this level's plan as one more picture: centred on the pointer (else the view's middle), at true
 * size when the sheet had a drawing scale, else at paper size with Scale armed; an overlay copy starts at its opacity. Any other picture on the
 * system clipboard (Ctrl+V only) goes in like Insert picture…. One undo step, kept like every picture (bundle / embedded).
 */
import { ModelWriter } from './model-write.js';
import { readPictures, addPicture, changePicture, removePictures, transient, embedFor, migrateFor, bundleFiles, outside } from './model-picture.js';
import { bundle as makeBundle } from './picture-pack.js';
import { mul4 } from './ifc-util.js';
import { mount3d } from './picture-3d.js';
import { el } from './ui-util.js';
import { readSectionLines } from './res-sheets.js';
import { clearAll } from './picture-store.js';
import * as P from './picture.js';
import { viewPlacement } from './picture-sheet.js';
import * as PDF from './picture-pdf.js';
import * as PP from './picture-paste.js';

import { fmtLen, parseLen, fmtFine, lenMark } from './model-units.js';

const YUP = [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1], S3 = (k) => [k, 0, 0, 0, 0, k, 0, 0, 0, 0, k, 0, 0, 0, 0, 1], I4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const deflateRaw = async (b) => new Uint8Array(await new Response(new Blob([b]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer());

/** host: { viewer() → Viewer3D | null, entry() → the open IFC model entry { ifc, model, mi } | null, editor() → IfcEditor | null, save() → Promise } (bimcraft.js) */
export function mountPicture(modelUi, host = {}) {
  const R = { pics: [], img: new Map(), sel: '', mode: null, pts: [], hover: null, pending: null, seen: new Set(), loading: false, p3: null, show3d: true, preferBundle: false, lostSaid: false, line: null, after: null };
  let A = null;
  const t = (...a) => A.t(...a);
  const q = (s) => A.root.querySelector(s);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  /** The engine has a model open (BimCraft reloads it after each edit; for a moment it has none). */
  const ready = () => { const e = A?.ed(); return !!e && e.mid !== null && e.mid !== undefined; };
  const levelGuid = () => (A.S.data?.levels || []).find((l) => l.id === A.S.level)?.guid;
  const here = () => R.pics.filter((p) => p.storey === A.S.level);
  const cur = () => R.pics.find((p) => p.guid === R.sel && p.storey === A.S.level) || null;
  const hint = (key) => { const h = q('[data-model-hint]'); if (h) h.textContent = t(key); };
  const say = (key, vars, bad) => A.host.status(t(key, vars), !!bad);

  /** The section lines of the level being worked on (res-sheets.js): a vertical picture can stand over one by name. */
  function sectionLinesHere() {
    if (!ready()) return [];
    try { return readSectionLines(W()).filter((x) => x.storey === A.S.level); } catch (e) { return []; }
  }
  function reread() {
    if (!ready()) { if (!A.ed()) R.pics = []; return; }
    try { R.pics = readPictures(W()); } catch (e) { /* a reload is under way: keep the list */ }
    if (R.sel && !R.pics.some((p) => p.guid === R.sel)) R.sel = '';
  }
  /** Decode the pictures not decoded yet (or whose file changed), then draw the plan again. */
  async function load() {
    if (R.loading || !ready()) return;
    const need = R.pics.filter((p) => p.hasData && R.img.get(p.guid)?.len !== p.bytesLen);
    if (!need.length) return;
    R.loading = true;
    try {
      const full = readPictures(W(), { data: true });
      for (const p of need) {
        const f = full.find((x) => x.guid === p.guid);
        if (!f?.bytes) { R.img.set(p.guid, { len: p.bytesLen, bmp: null }); continue; }
        try { R.img.set(p.guid, { len: p.bytesLen, bmp: await createImageBitmap(new Blob([f.bytes], { type: f.mime })) }); }
        catch (e) { R.img.set(p.guid, { len: p.bytesLen, bmp: null }); }
      }
    } catch (e) { /* a reload is under way: the next refresh reads again */ } finally { R.loading = false; }
    problems();
    if (!ready()) return;   // the engine is reloading the model (after an edit): the next refresh draws the decoded pictures
    A.buildScene(); R.p3?.sync();
  }
  /** Shared Problems (docs/0.8-PROBLEMS-SPEC.md): a missing or unreadable picture, one not scaled yet. */
  function problems() {
    const go = () => {
      const PR = window.ccProblems;
      if (!PR?.source) return;
      R.src ||= PR.source({ id: 'bimcraft.pictures', kind: 'check', label: t('pic.title') });
      const list = R.pics.map((p) => ({ ...p, state: p.lost ? 'lost' : !p.hasData ? 'missing' : R.img.get(p.guid)?.bmp === null ? 'unreadable' : 'ok' }));
      R.src.set(P.pictureProblems(list, { t }));
    };
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  }

  const run = (op, label, verb) => A.commit(op, { label, verb: verb || t('pic.verb.changed'), onError: (e, why) => A.host.status(e.key && /^pic\./.test(e.key) ? t(e.key) : why, true) });
  const change = (patch, label) => { const c = cur(); if (!c) { say('pic.pick', {}, true); return; } run(changePicture(c.guid, patch), t(label)); };

  /** The file, kept: a picture over the size limits is brought down first. */
  async function prepare(file) {
    let bytes = new Uint8Array(await file.arrayBuffer());
    const info = P.sniff(bytes);
    if (!info) return { error: 'pic.err.type' };
    const sz = P.shrink(info.w, info.h);
    if (sz.k < 1 || bytes.length > P.LIMITS.keepBytes) {
      const bmp = await createImageBitmap(new Blob([bytes], { type: info.mime }));
      let k = Math.min(sz.k, 1), best = null;
      for (let i = 0; i < 4 && (!best || best.length > P.LIMITS.keepBytes); i++, k *= 0.7) {
        const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(info.w * k)); c.height = Math.max(1, Math.round(info.h * k));
        c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
        const mime = info.kind === 'png' && i === 0 ? 'image/png' : 'image/jpeg';
        const blob = await new Promise((r) => c.toBlob(r, mime, 0.88));
        best = new Uint8Array(await blob.arrayBuffer());
      }
      if (!best || best.length > P.LIMITS.keepBytes) return { error: 'pic.err.big' };
      bytes = best;
      return { bytes, reduced: true };
    }
    return { bytes };
  }
  async function insert(file) {
    const lv = levelGuid();
    if (!lv || !A.ed()) { say('pic.err.nolevel', {}, true); return; }
    if (!A.pv()) { say('pic.paste.noplan', {}, true); return; }
    R.after = null;   // only a paste at paper size arms Scale
    let r;
    try { r = await prepare(file); } catch (e) { say('pic.err.type', {}, true); return; }
    if (r.error) { say(r.error, {}, true); return; }
    const info = P.sniff(r.bytes), pv = A.pv();
    if (q('[data-pic-plane]')?.value === 'vertical') {
      if (here().length >= P.LIMITS.perLevel) { say('pic.err.cap', { n: P.LIMITS.perLevel }, true); return; }
      const sl = sectionLinesHere().find((x) => x.guid === q('[data-pic-secline]')?.value);
      if (sl) {   // a named section line of this level: no clicks, the picture stands over it
        R.seen = new Set(R.pics.map((x) => x.guid)); R.want = 'new';
        try {
          const patch = { ...P.onLine(P.makePicture({ w: info.w, h: info.h }), sl.a, sl.b), section: sl.guid };
          run(addPicture({ storey: lv, bytes: r.bytes, name: file.name, patch }), file.name, t('pic.verb.placed'));
          say(r.reduced ? 'pic.placed.reduced' : 'pic.placed.vertical', { name: file.name }, false);
        } catch (er) { say(er.key || 'pic.err.samepoint', { n: P.LIMITS.perLevel }, true); }
        A.setTool('picture');
        return;
      }
      R.line = { r, name: file.name, info, pts: [] };   // two clicks on the plan give the section line the picture stands over
      R.mode = 'line'; R.pts = []; R.pending = null;
      A.setTool('picture'); hint('pic.hint.line1'); fill();
      say('pic.line.start', { name: file.name });
      return;
    }
    const box = [pv.cx - pv.w / 2 / pv.scale, pv.cy - pv.h2 / 2 / pv.scale, pv.cx + pv.w / 2 / pv.scale, pv.cy + pv.h2 / 2 / pv.scale];
    const patch = P.fitTo(P.makePicture({ w: info.w, h: info.h }), box);
    R.seen = new Set(R.pics.map((p) => p.guid));
    R.want = 'new';
    run(addPicture({ storey: lv, bytes: r.bytes, name: file.name, patch }), file.name, t('pic.verb.placed'));
    say(r.reduced ? 'pic.placed.reduced' : 'pic.placed', { name: file.name }, false);
    A.setTool('picture');
  }

  function arm(mode) {
    const c = cur();
    if (!c) { say('pic.pick', {}, true); return; }
    if (c.locked && mode !== 'none') { say('pic.err.locked', {}, true); return; }
    R.mode = mode; R.pts = []; R.pending = null; R.hover = null;
    hint(mode === 'scale' ? 'pic.hint.scale1' : 'pic.hint.move1');
    fill();
  }
  function applyScale(mmText) {
    const c = cur(), pt = R.pending;
    if (!c || !pt) return;
    const mm = parseLen(mmText, A.S.units);
    if (!(mm > 0)) { say('pic.err.distance', {}, true); return; }
    let patch;
    try { patch = P.scaleByPoints(c, pt[0], pt[1], mm); } catch (e) { say(e.key || 'pic.err.distance', {}, true); return; }
    R.mode = null; R.pts = []; R.pending = null;
    run(changePicture(c.guid, patch), t('pic.scale'));
    hint('pic.hint');
    fill();
  }

  function fill() {
    const sel = q('[data-pic-list]');
    if (!sel) return;
    const mine = here();
    sel.replaceChildren(...[new Option(t('pic.none'), ''), ...mine.map((p) => new Option(p.plane === 'vertical' ? t(p.section ? 'pic.list.section' : 'pic.list.vertical', { name: p.name }) : p.name, p.guid))]);
    sel.value = cur() ? R.sel : '';
    const c = cur();
    const set = (s, v) => { const el = q(s); if (el && document.activeElement !== el) el.value = v; };
    set('[data-pic-angle]', c ? String(c.angle) : '');
    set('[data-pic-opacity]', c ? String(Math.round(c.opacity * 100)) : '100');
    const lk = q('[data-pic-lock]'); if (lk) { lk.checked = !!c?.locked; lk.disabled = !c; }
    const hd = q('[data-pic-hide]'); if (hd) { hd.checked = !!c?.hidden; hd.disabled = !c; }
    for (const s of ['[data-pic-scale]', '[data-pic-move]', '[data-pic-remove]']) { const b = q(s); if (b) b.disabled = !c; }
    const st = q('[data-pic-state]'); if (st) st.textContent = c ? (c.plane === 'vertical' ? t('pic.state.vertical', { len: fmtLen(P.lineLength(c.a, c.b), A.S.units), w: c.w, h: c.h }) : c.lost ? t('pic.state.lost') : c.scaled ? t('pic.scaled', { mm: fmtFine(c.mmPerPx, A.S.units), w: c.w, h: c.h }) : t('pic.unscaled')) : '';
    const dist = q('[data-pic-dist-wrap]'); if (dist) dist.hidden = !R.pending;
    const distIn = q('[data-pic-dist]'); if (distIn) distIn.placeholder = lenMark(4000, A.S.units);   // GH.3-A: the prompt shows an example in the display unit
    const vert = !!c && c.plane === 'vertical';
    const vw = q('[data-pic-v-wrap]'); if (vw) vw.hidden = !vert;
    if (vert) {
      set('[data-pic-width]', fmtLen(c.w * c.mmPerPx, A.S.units)); set('[data-pic-along]', fmtLen(c.x, A.S.units)); set('[data-pic-height]', fmtLen(c.y, A.S.units));
    }
    for (const s of ['[data-pic-scale]', '[data-pic-move]']) { const b = q(s); if (b && vert) b.disabled = true; }
    const cnt = q('[data-pic-count]'); if (cnt) cnt.textContent = t('pic.count', { n: mine.length, max: P.LIMITS.perLevel });
    const sec = q('[data-pic-secline]');
    if (sec && document.activeElement !== sec) {
      const keep = sec.value, lines = sectionLinesHere();
      sec.replaceChildren(...[new Option(t('pic.secline.none'), ''), ...lines.map((x) => new Option(t('pic.secline.name', { name: x.name }), x.guid))]);
      sec.value = lines.some((x) => x.guid === keep) ? keep : '';
    }
    const dd = q('[data-pic-3d]'); if (dd && document.activeElement !== dd) dd.checked = R.show3d;
    for (const [s, m] of [['[data-pic-scale]', 'scale'], ['[data-pic-move]', 'move']]) q(s)?.setAttribute('aria-pressed', String(R.mode === m));
  }
  let bound = false;
  function bind() {
    if (bound || !q('[data-pic-list]')) return;
    bound = true;
    q('[data-pic-list]').addEventListener('change', (e) => { R.sel = e.target.value; R.mode = null; R.pending = null; fill(); A.buildScene(); });
    const file = q('[data-pic-file]');
    q('[data-pic-insert]').addEventListener('click', () => file.click());
    file.addEventListener('change', async () => { const f = file.files[0]; file.value = ''; if (f) await insert(f); });
    q('[data-pic-scale]').addEventListener('click', () => arm(R.mode === 'scale' ? null : 'scale'));
    q('[data-pic-move]').addEventListener('click', () => arm(R.mode === 'move' ? null : 'move'));
    const dist = q('[data-pic-dist]');
    dist.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); applyScale(dist.value); dist.value = ''; } });
    q('[data-pic-dist-ok]').addEventListener('click', () => { applyScale(dist.value); dist.value = ''; });
    q('[data-pic-angle]').addEventListener('change', (e) => { const v = parseFloat(e.target.value); const c = cur(); if (!c) return; if (!Number.isFinite(v)) { fill(); return; } try { change(P.setAngle(c, v), 'pic.turn'); } catch (er) { say(er.key, {}, true); fill(); } });
    q('[data-pic-opacity]').addEventListener('change', (e) => { const c = cur(); if (c) change(P.fade(c, parseFloat(e.target.value) / 100), 'pic.fade'); });
    q('[data-pic-lock]').addEventListener('change', (e) => { const c = cur(); if (c) change(P.lock(c, e.target.checked), e.target.checked ? 'pic.lock' : 'pic.unlock'); });
    q('[data-pic-hide]').addEventListener('change', (e) => { const c = cur(); if (c) change(P.show(c, !e.target.checked), e.target.checked ? 'pic.hide' : 'pic.show'); });
    const vnum = (sel, fn) => q(sel)?.addEventListener('change', (e) => {
      const c = cur(); if (!c) return;
      const mm = parseLen(e.target.value, A.S.units);
      if (!Number.isFinite(mm)) { fill(); return; }
      try { change(fn(c, mm), 'pic.move'); } catch (er) { say(er.key || 'pic.err.distance', {}, true); fill(); }
    });
    vnum('[data-pic-width]', (c, mm) => P.setWidth(c, mm));
    vnum('[data-pic-along]', (c, mm) => P.setPlace(c, mm, c.y));
    vnum('[data-pic-height]', (c, mm) => P.setPlace(c, c.x, mm));
    q('[data-pic-3d]')?.addEventListener('change', (e) => { R.show3d = e.target.checked; R.p3?.on(R.show3d); });
    q('[data-pic-bundle]')?.addEventListener('click', () => { R.preferBundle = true; Promise.resolve(host.save?.()).finally(() => { R.preferBundle = false; }); });
    q('[data-pic-remove]').addEventListener('click', () => { const c = cur(); if (c) run(removePictures([c.guid]), t('pic.remove'), t('pic.verb.removed')); });
  }

  A = modelUi.extend({
    tools: ['picture'],
    hint: () => 'pic.hint',
    typed: () => false,
    scene(scene) {
      const out = [];
      for (const p of here()) {
        const im = R.img.get(p.guid);
        if (p.hidden || !im?.bmp || p.plane === 'vertical') continue;   // a vertical-plane picture is a 3D thing: the plan draws only its section line (overlay)
        out.push({ img: im.bmp, m: P.matrix(p), opacity: p.opacity, w: p.w, h: p.h, corners: A.S.tool === 'picture' ? P.corners(p) : null, selected: p.guid === R.sel, locked: p.locked });
      }
      if (out.length) scene.pictures = out;
    },
    move(p, e) { R.hover = A.snapAt(p, e).p; },
    click(p, e) {
      const pt = A.snapAt(p, e).p;
      if (R.mode === 'line' && R.line) {
        R.pts.push(pt);
        if (R.pts.length === 1) { hint('pic.hint.line2'); return; }
        const [a, b] = R.pts, L = R.line;
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 1) { R.pts = [a]; say('pic.err.samepoint', {}, true); return; }
        R.pts = []; R.mode = null; R.line = null; hint('pic.hint');
        R.seen = new Set(R.pics.map((x) => x.guid)); R.want = 'new';
        try {
          const patch = P.onLine(P.makePicture({ w: L.info.w, h: L.info.h }), a, b);
          run(addPicture({ storey: levelGuid(), bytes: L.r.bytes, name: L.name, patch }), L.name, t('pic.verb.placed'));
          say(L.r.reduced ? 'pic.placed.reduced' : 'pic.placed.vertical', { name: L.name }, false);
        } catch (er) { say(er.key || 'pic.err.samepoint', { n: P.LIMITS.perLevel }, true); }
        return;
      }
      if (R.mode === 'scale') {
        if (R.pending) return;
        R.pts.push(pt);
        if (R.pts.length === 1) { hint('pic.hint.scale2'); return; }
        R.pending = [R.pts[0], R.pts[1]]; hint('pic.hint.scale3'); fill(); q('[data-pic-dist]')?.focus(); return;
      }
      if (R.mode === 'move') {
        const c = cur();
        if (!R.pts.length) { R.pts.push(pt); hint('pic.hint.move2'); return; }
        const from = R.pts[0]; R.pts = []; R.mode = null; hint('pic.hint'); fill();
        if (c) { try { run(changePicture(c.guid, P.moveByPoints(c, from, pt)), t('pic.move')); } catch (er) { say(er.key, {}, true); } }
        return;
      }
      // no mode: pick the picture under the point (the one drawn last wins)
      const hits = here().filter((x) => !x.hidden && P.hit(x, p));
      R.sel = hits.length ? hits[hits.length - 1].guid : '';
      fill(); A.buildScene();
    },
    escape() { if (A.S.tool !== 'picture' || !(R.mode || R.pending)) return false; R.mode = null; R.line = null; R.pts = []; R.pending = null; hint('pic.hint'); fill(); return true; },
    key(e, low) {
      if (A.S.tool !== 'picture') return false;
      if ((e.key === 'Delete' || e.key === 'Backspace') && cur()) { const c = cur(); run(removePictures([c.guid]), t('pic.remove'), t('pic.verb.removed')); return true; }
      return false;
    },
    toolChanged(name) { if (name !== 'picture') R.line = null; R.mode = R.line ? 'line' : null; R.pts = []; R.pending = null; R.hover = null; if (name === 'picture') { bind(); reread(); fill(); } A.buildScene(); },
    refresh() {
      reread();
      if (R.want === 'new') { const n = R.pics.find((p) => !R.seen.has(p.guid)); if (n) { R.sel = n.guid; R.want = null; } }
      trackPointer();
      bind(); fill(); load(); ensure3d(); R.p3?.later();
      if (R.pics.some((p) => p.plane === 'vertical' && p.hasData)) prepareSheet();   // 0.8 D8.8 round 5: ready when a sheet is opened
      if (R.after === 'scale' && !R.want && cur() && A.S.tool === 'picture') { R.after = null; arm('scale'); }   // a paste at paper size: Scale is next
      const lost = R.pics.filter((p) => p.lost).length;
      if (lost && !R.lostSaid) { R.lostSaid = true; say('pic.lost.note', { n: lost }, true); }
      if (!lost) R.lostSaid = false;
    },
    overlay(o) {
      const c = cur();
      if (A.S.tool === 'picture' && c?.plane === 'vertical') o.lines.push([c.a[0], c.a[1], c.b[0], c.b[1]]);   // the section line the picked picture stands over
      if (A.S.tool !== 'picture' || !R.hover || !R.pts.length) return;
      const a = R.pts[0], b = R.pending ? R.pending[1] : R.hover;
      o.points.push(a); o.lines.push([a[0], a[1], b[0], b[1]]);
      o.hud = { p: b, text: fmtLen(Math.hypot(b[0] - a[0], b[1] - a[1]), A.S.units) };
    },
  });

  // ---- the 3D view: textured planes (picture-3d.js) ----
  /** Level-local mm → the scene (metres, Y up), the way links-ui.js does it: the level's world matrix, then the model's placement. */
  function toScene(sid) {
    const h = host.entry?.(), v = host.viewer?.();
    if (!h || !v || !ready()) return null;
    const w = W();
    const st = w.api.GetLine(w.mid, sid, false);
    const SW = st?.ObjectPlacement ? Array.from(w.api.GetWorldTransformMatrix(w.mid, st.ObjectPlacement.value)) : I4.slice();
    SW[12] *= w.unitMm; SW[13] *= w.unitMm; SW[14] *= w.unitMm;
    const C = Array.from(w.api.GetCoordinationMatrix(w.mid));
    return mul4(mul4(v.modelMatrix(h.mi), mul4(C, mul4(YUP, S3(0.001)))), SW);
  }
  function visible3d(sid) {
    const h = host.entry?.(), v = host.viewer?.();
    const L = v?.layers?.get(h?.mi);
    return !L || (L.group.visible !== false && L.storeyGroups.get(sid)?.visible !== false);
  }
  function ensure3d() {
    if (R.p3) return;
    const v = host.viewer?.();
    if (!v) return;
    R.p3 = mount3d({
      viewer: v, toScene, visible: visible3d,
      list: () => { reread(); load(); return R.pics.map((p) => ({ guid: p.guid, storey: p.storey, bmp: R.img.get(p.guid)?.bmp || null, len: p.bytesLen, pic: p })); },
    });
    R.p3.on(R.show3d);
  }

  // ---- the plan PDF (model-pdf.js): this level's pictures as image objects, brought down to ≤ 200 dpi on the sheet ----
  const flate = async (bytes) => new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer());
  /** → [{ m, w, h, opacity, image }] for planPdf({ images }): `ratio` is the sheet's scale (1 : ratio); hidden pictures stay out. */
  async function pdfImages(sid, ratio) {
    if (!ready()) return [];
    reread();
    const list = R.pics.filter((p) => p.storey === sid && !p.hidden && p.plane !== 'vertical' && p.hasData);
    return buildImages(list, ratio);
  }
  async function buildImages(list, ratio) {
    if (!list.length) return [];
    const full = readPictures(W(), { data: true });
    const out = [];
    for (const p of list) {
      const f = full.find((x) => x.guid === p.guid);
      if (!f?.bytes) continue;
      const ps = PDF.printSize({ w: p.w, h: p.h, mmPerPx: p.mmPerPx, ratio, maxDpi: 200, maxPixels: 8e6 });
      const jd = f.mime === 'image/jpeg' ? PDF.directJpeg(f.bytes) : null;
      let image;
      if (jd && ps.k === 1) image = { kind: 'jpeg', bytes: f.bytes, w: jd.w, h: jd.h, comps: jd.comps };
      else {
        const bmp = R.img.get(p.guid)?.bmp || await createImageBitmap(new Blob([f.bytes], { type: f.mime }));
        const c = document.createElement('canvas'); c.width = ps.w; c.height = ps.h;
        const g = c.getContext('2d', { willReadFrequently: true });
        g.drawImage(bmp, 0, 0, ps.w, ps.h);
        if (f.mime === 'image/jpeg') {   // no transparency in a JPEG: it stays a JPEG, smaller
          const blob = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.9));
          image = { kind: 'jpeg', bytes: new Uint8Array(await blob.arrayBuffer()), w: ps.w, h: ps.h, comps: 3 };
        } else {
          const px = g.getImageData(0, 0, ps.w, ps.h).data, n = ps.w * ps.h, rgb = new Uint8Array(n * 3), al = new Uint8Array(n);
          let seeThrough = false;
          for (let i = 0, j = 0; i < n; i++) { rgb[j++] = px[i * 4]; rgb[j++] = px[i * 4 + 1]; rgb[j++] = px[i * 4 + 2]; al[i] = px[i * 4 + 3]; if (al[i] !== 255) seeThrough = true; }
          image = { kind: 'flate', w: ps.w, h: ps.h, rgb: await flate(rgb), alpha: seeThrough ? await flate(al) : null };
        }
        c.width = c.height = 0;
      }
      out.push({ m: P.matrix(p), w: p.w, h: p.h, opacity: p.opacity, image, dpi: ps.dpi, name: p.name, guid: p.guid, href: f.bytes.length <= 1500000 ? 'data:' + f.mime + ';base64,' + P.toBase64(f.bytes) : '' });
    }
    return out;
  }
  // ---- 0.8 D8.8 round 5: pictures standing on a vertical plane, drawn in the section and elevation views that look straight at them ----
  const SHEET = { cache: new Map(), busy: null };
  /** Make (once per picture and file size) the printable images of the vertical pictures; the sheets read them straight from `forView`. */
  async function prepareSheet() {
    if (!ready()) return 0;
    if (SHEET.busy) return SHEET.busy;
    return (SHEET.busy = (async () => {
      try {
        reread();
        const want = R.pics.filter((p) => p.plane === 'vertical' && !p.hidden && p.hasData);
        for (const g of [...SHEET.cache.keys()]) if (!want.some((p) => p.guid === g)) SHEET.cache.delete(g);
        const need = want.filter((p) => SHEET.cache.get(p.guid)?.len !== p.bytesLen);
        if (need.length) for (const im of await buildImages(need, 50)) SHEET.cache.set(im.guid, { len: need.find((p) => p.guid === im.guid).bytesLen, im });
        return want.length;
      } catch (e) { console.error(e); return 0; } finally { SHEET.busy = null; }
    })());
  }
  /** Sync: the pictures a view (looking along dir; a section's cut point o and GlobalId guid) shows → [{ m, w, h, opacity, image, href, name }]. dzOf(storeyId) = that level's elevation above the view's base level. */
  function forView({ dir, o = null, guid = '', dzOf = () => 0 } = {}) {
    const out = [];
    for (const p of R.pics) {
      if (p.plane !== 'vertical' || p.hidden) continue;
      const c = SHEET.cache.get(p.guid);
      const m = c && viewPlacement(p, { dir, o, guid, dz: dzOf(p.storey) });
      if (m) out.push({ m, w: p.w, h: p.h, opacity: p.opacity, image: c.im.image, href: c.im.href, name: p.name });
    }
    return out;
  }

  // ---- saving: the bytes are outside the IFC text ----
  function ask(title, text, buttons) {
    return new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-pic-save-h', 'data-pic-save': '' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-pic-save-h' }, title),
          ...text.map((x) => el('p', {}, x)),
          el('p', { className: 'bc-lib-actions' }, ...buttons.map((b) => el('button', { type: 'submit', className: b.primary ? 'btn-plot btn-sm-cc' : 'btn-line btn-sm-cc', value: b.value, 'data-pic-save-choice': b.value }, b.label)))));
      dlg.addEventListener('close', () => { dlg.remove(); done(dlg.returnValue || 'cancel'); });
      document.body.append(dlg); dlg.showModal();
      dlg.querySelector('button[value="cancel"]')?.focus();
    });
  }
  /** Before Save as IFC writes: null (nothing is kept outside the file) | { cancel } | { bytes, name, mime, types, notice }. */
  async function beforeSave(editor, ifcName) {
    const w = new ModelWriter(editor.W, editor.api, editor.mid);
    const o = outside(w);
    const base = String(ifcName || 'model').replace(/\.ifc$/i, '');
    let choice = R.preferBundle ? 'bundle' : null;
    if (!choice && !o.n && !o.lost) return null;
    if (!choice) {
      if (o.n && o.small === o.n && !o.lost) choice = 'embed';   // all fit in the file as before: no question
      else {
        const left = o.n - o.small;
        choice = await ask(t('pic.save.title'), [t('pic.save.text', { n: o.n, mb: (o.bytes / 1048576).toFixed(1) }), left ? t('pic.save.left', { n: left, kb: Math.round(P.LIMITS.embedBytes / 1024) }) : '', o.lost ? t('pic.save.lost', { n: o.lost }) : ''].filter(Boolean),
          [{ value: 'bundle', label: t('pic.save.bundle'), primary: true }, ...(o.n ? [{ value: 'embed', label: t('pic.save.embed', { n: o.small, kb: Math.round(P.LIMITS.embedBytes / 1024) }) }] : []), { value: 'cancel', label: t('dialog.cancel') }]);
      }
    }
    if (choice === 'cancel') return { cancel: true };
    if (choice === 'bundle') {
      const tr = transient(editor, (ww) => { const m = migrateFor()(ww); return { ...m, files: bundleFiles(ww) }; });
      let ifc, files;
      try { ifc = editor.save(); files = tr.result.files; } finally { tr.undo(); }
      const zip = await makeBundle({ ifc, modelFile: base + '.ifc', name: base, schema: editor.api.GetModelSchema?.(editor.mid) || '', pictures: files, deflate: deflateRaw });
      return { bytes: zip, name: base + '.ccbundle', mime: 'application/zip', types: [{ description: 'CadCraft project bundle', extensions: ['.ccbundle'] }], notice: t('pic.save.bundled', { n: files.length }) };   // i18n-ignore: a file type label
    }
    const tr = transient(editor, embedFor(P.LIMITS.embedBytes));
    let bytes;
    try { bytes = editor.save(); } finally { tr.undo(); }
    const r = tr.result;
    return { bytes, notice: r.left.length || r.lost.length ? t('pic.save.leftout', { n: r.left.length + r.lost.length }) : (r.embedded ? t('pic.save.embedded', { n: r.embedded }) : '') };
  }

  // ---- paste (0.8 D8.15): a copied area at its size, or a picture from the system clipboard ----
  const store = () => { try { return window.localStorage; } catch (e) { return null; } };
  const ptr = { x: 0, y: 0, in: false, pv: null };
  /** The pointer over the plan (any tool): a paste goes where it is. */
  function trackPointer() {
    const pv = A.pv();
    if (!pv || ptr.pv === pv) return;
    ptr.pv = pv; ptr.in = false;
    pv.canvas.addEventListener('pointermove', (e) => { ptr.x = e.clientX; ptr.y = e.clientY; ptr.in = true; });
    pv.canvas.addEventListener('pointerleave', () => { ptr.in = false; });
  }
  function pasteAt() { const pv = A.pv(); trackPointer(); return ptr.in ? pv.toPlan(ptr.x, ptr.y) : [pv.cx, pv.cy]; }
  /** Why a picture cannot be pasted now ('' = it can): the plan of a level on screen, a model, room on the level. */
  function pasteWhy() {
    if (!ready() || !levelGuid()) return 'pic.err.nolevel';
    if (!A.S.on || !A.pv()) return 'pic.paste.noplan';
    reread();
    return here().length >= P.LIMITS.perLevel ? 'pic.err.cap' : '';
  }
  /** The area clip as one picture: its own PNG (the system clipboard's copy may be re-encoded), centred on the pointer. */
  async function pasteArea(area) {
    const why = pasteWhy();
    if (why) { say(why, { n: P.LIMITS.perLevel }, true); return; }
    const name = PP.areaName(area) || t('pic.paste.name');
    let r;
    try { r = await prepare(new Blob([PP.pngBytes(area.src)], { type: 'image/png' })); } catch (e) { say('pic.err.type', {}, true); return; }
    if (r.error) { say(r.error, {}, true); return; }
    const info = P.sniff(r.bytes), patch = PP.pastePatch(area, info, pasteAt());
    R.seen = new Set(R.pics.map((p) => p.guid)); R.want = 'new'; R.after = patch.scaled ? null : 'scale';
    A.setTool('picture');
    run(addPicture({ storey: levelGuid(), bytes: r.bytes, name, patch }), name, t('pic.verb.pasted'));
    const size = { name, w: fmtLen(info.w * patch.mmPerPx, A.S.units), h: fmtLen(info.h * patch.mmPerPx, A.S.units) };
    say(patch.scaled ? 'pic.paste.real' : 'pic.paste.paper', size, false);
  }
  /** Is a recent copied area newer than BimCraft's own clip (`own`, clipboard.js)? Then Paste is the area's. */
  const areaWins = (own) => PP.areaWins(PP.readAreaClip(store()), own);
  /**
   * Paste (bimcraft.js): `file` is the system clipboard's picture (Ctrl+V's paste event) or null (Edit › Paste: the browser does not
   * hand it over unasked). → true when a picture paste took it (or said why not); false: BimCraft's own paste does it.
   */
  async function paste({ own = null, ownOk = false, file = null } = {}) {
    const area = PP.readAreaClip(store());
    let image = null, bytes = null;
    if (file) { try { bytes = new Uint8Array(await file.arrayBuffer()); image = P.sniff(bytes); } catch (e) { image = null; } }
    if (file && !image) { say('pic.err.type', {}, true); return true; }
    const how = PP.route({ area, own, ownOk, image });
    if (how === 'own' || how === 'none') return false;
    if (how === 'image') {
      const why = pasteWhy();
      if (why) { say(why, { n: P.LIMITS.perLevel }, true); return true; }
      await insert(new File([bytes], t('pic.paste.name') + '.' + image.kind.replace('jpeg', 'jpg'), { type: image.mime }));
      return true;
    }
    await pasteArea(area);
    return true;
  }
  /** Ctrl+V: let the browser's paste event through (it carries the system clipboard) while the plan is on screen and BimCraft's own clip
   *  is not what Paste would paste anyway. */
  const wantsKey = ({ own = null, ownOk = false } = {}) => !!A.S.on && (!ownOk || areaWins(own));

  bind();
  window.bimcraftPicture = { state: R, insert, paste, areaWins, scale: applyScale, arm, reread, ext: A, beforeSave, pdfImages, prepareSheet, forView, scene3d: () => R.p3?.info() || [], forgetBytes: () => clearAll(), viewer: () => host.viewer?.(), sync3d: () => R.p3?.sync(), toScene };
  /** Autosave's copy: the small pictures embedded (the rest come back only from a bundle). */
  function snapshotBytes(editor) {
    let tr = null;
    try { tr = transient(editor, embedFor(P.LIMITS.embedBytes)); return editor.save(); } catch (e) { return editor.save(); } finally { tr?.undo(); }
  }
  /** After a model opened: the 3D planes. */
  function attach() { reread(); ensure3d(); load(); R.p3?.later(); }
  return { ext: A, beforeSave, pdfImages, snapshotBytes, attach, wantBundle: () => R.preferBundle, paste, areaWins, wantsKey };
}
