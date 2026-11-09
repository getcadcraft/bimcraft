/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-host.js — BimCraft as a host of the print stage (roadmap PS.7; docs/PRINTSTAGE-HOST-CONTRACT.md; lib/printstage's copy in printstage/).
 * The stage is a print LAYOUT beside the model: the IFC elements the person picked (or everything shown) lie on the printer's bed as copies of the geometry
 * the 3D view draws (placements applied), as a scale model or life size, are laid flat, turned, arranged and sent. Nothing here changes the model.
 * The layout has its own undo (Undo layout / Redo layout in the card). An element that is not a closed solid, or has no geometry, is left off the bed and named.
 *
 *   mountPrintStage({ pane, bim, THREE, t, el, print, fileName, load, save, moreSlicers, moreLinks }) → { open(), close(), stage, host, panel, draw(), sync(scope), dispose() }
 *   bim = { viewer() → Viewer3D | null, nameOf(key, id, cls) → string | null }
 */
import { printStagePanel } from './printstage/ps-panel.js';
import { createStage, hostOf } from './printstage/ps-stage.js';
import { arrange } from './printstage/ps-arrange.js';
import { elementsOf, centred } from './bodies.js';

const ZUP = (p) => [p[0] / 1000, p[2] / 1000, -p[1] / 1000];   // a bed point (mm, Z up) → the viewer's scene (metres, Y up): the inverse of bodies.js toPrinter

export function mountPrintStage({ pane, bim, THREE, t, el, print, fileName, load, save, moreSlicers, moreLinks }) {
  let bed = null, open = false, small = false, selected = null, lastNote = null, left = [], more = 0, scope = 'selection', mfPromise = null, group = null, saved = null, scaleN = 50;
  const pick = (id) => { selected = id; draw(); paint(); };
  const stage = createStage({ select: pick });
  if (!document.querySelector('link[data-ps-css]')) document.head.append(el('link', { rel: 'stylesheet', href: new URL('./printstage/ps-panel.css', import.meta.url).href, dataset: { psCss: '' } }));
  const V = () => bim.viewer();

  // ---- the bed and what lies on it, in the 3D view (a group in the scene; the model steps aside while the stage is open)
  function clearGroup() { const v = V(); if (group && v) { v.scene.remove(group); group.traverse((o) => { o.geometry?.dispose?.(); o.material?.dispose?.(); }); } group = null; }
  function paint() {
    const v = V();
    if (!v) return;
    clearGroup();
    if (!open || !bed) { v.root.visible = true; v.render(); return; }
    v.root.visible = false;
    group = new THREE.Group();
    const [bx, by] = bed;
    const lines = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, bx, 0, 0, bx, 0, 0, bx, by, 0, bx, by, 0, 0, by, 0, 0, by, 0, 0, 0, 0].map((x, i) => (i % 3 === 0 ? x : x)).flatMap((x, i, a) => (i % 3 === 0 ? ZUP([x, a[i + 1], a[i + 2]]) : [])), 3));
    group.add(new THREE.LineSegments(lines, new THREE.LineBasicMaterial({ color: 0x34404e })));
    for (const o of stage.objects()) {
      const tris = stage.tris(o.id), pos = new Float32Array(tris.length * 9);
      tris.forEach((tri, i) => tri.forEach((p, k) => pos.set(ZUP(p), i * 9 + k * 3)));
      const geo = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.computeVertexNormals();
      const on = o.id === selected;
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: on ? 0xe0872b : 0x8fa3b8, roughness: 0.7, metalness: 0.05, side: THREE.DoubleSide }));
      mesh.userData.stageId = o.id;
      group.add(mesh);
    }
    v.scene.add(group);
    v.render();
  }
  function frame() {
    const v = V();
    if (!v || !bed) return;
    const objs = stage.objects();
    let hz = 0; for (const o of objs) hz = Math.max(hz, o.max[2]);
    const c = new THREE.Vector3(bed[0] / 2000, Math.min(hz, bed[2]) / 2000, -bed[1] / 2000), r = Math.hypot(bed[0], bed[1], Math.max(hz, 50)) / 2000;
    const dist = r / Math.sin(THREE.MathUtils.degToRad(v.camera.fov / 2)) * 1.1;
    if (!saved) saved = { p: v.camera.position.clone(), t: v.controls.target.clone(), near: v.camera.near, far: v.camera.far };
    v.camera.position.copy(c).add(new THREE.Vector3(1, 0.8, 1).normalize().multiplyScalar(dist));
    v.controls.target.copy(c);
    v.camera.near = Math.max(dist / 1000, 0.001); v.camera.far = Math.max(dist * 20, v.camera.far); v.camera.updateProjectionMatrix();
    v.controls.update(); v.render();
  }

  // ---- taking the model's elements
  async function manifold() {
    if (!mfPromise) mfPromise = import('manifold-3d').then(async (m) => { const M = await m.default(); M.setup(); return M; });
    return mfPromise;
  }
  const layersNow = () => { const v = V(); return v ? [...v.layers.values()].map((L) => ({ mi: L.mi, model: L.model, matrix: v.modelMatrix(L.mi) })) : []; };
  /** scope: 'selection' (the picked elements), 'shown' (everything the view shows). Elements already on the bed keep their places; new ones go on free parts. */
  function sync(which = scope, first = false) {
    const v = V();
    scope = which;
    if (!v) { left = []; more = 0; lastNote = t('ps.bim.nomodel'); paint(); draw(); return; }
    // the model is hidden while the stage is open, and the viewer's shownKeys() reads that: show it for the moment of asking
    const was = v.root.visible; v.root.visible = true;
    const keys = scope === 'shown' ? [...v.shownKeys()] : [...v.selection];
    v.root.visible = was;
    const r = elementsOf({ layers: layersNow(), keys, isHidden: (k) => v.vis.hidden.has(k), nameOf: bim.nameOf, max: 300, span: 2 ** 26 });
    left = r.left; more = r.more;
    const have = new Map(stage.objects().filter((o) => o.src?.kind === 'ifc').map((o) => [o.src.id, o.id]));
    const want = new Set(r.bodies.map((b) => b.id));
    let fresh = 0;
    for (const [src, id] of have) if (!want.has(src)) stage.forget(id);
    for (const b of r.bodies) {
      const c = centred(b.tris);
      if (have.has(b.id)) { stage.replaceMesh(have.get(b.id), c.tris); stage.rename(have.get(b.id), b.name); }
      else { stage.place(b.name, c.tris, { scale: 1, at: [0, 0], src: { kind: 'ifc', id: b.id } }); fresh++; }
    }
    if (fresh) layoutNew();
    if (first) stage.resetHistory();
    lastNote = !keys.length ? t(scope === 'shown' ? 'ps.bim.none.shown' : 'ps.bim.none.sel') : (first ? null : t('ps.bim.taken', { n: r.bodies.length, left: r.left.length }));
    paint(); draw(); if (fresh) frame();
  }
  function layoutNew() {
    const objs = stage.objects();
    const lay = arrange(objs.map((o) => [o.max[0] - o.min[0], o.max[1] - o.min[1], o.max[2] - o.min[2]]), bed || stageBed());
    stage.batch(t('ps.bim.undo.layout'), () => objs.forEach((o, i) => { const a = lay.at[i]; if (a) stage.moveTo(o.id, a[0] + (o.max[0] - o.min[0]) / 2, a[1] + (o.max[1] - o.min[1]) / 2); stage.drop(o.id); }));
  }
  const stageBed = () => (panel.job ? panel.job().bed : [220, 220, 250]);

  const host = hostOf(stage, {
    el, t,
    cls: { block: 'bc-block ps-block', note: 'bc-note ps-note', head: 'bc-props-sub ps-head', btn: 'bc-btn', primary: 'bc-btn is-primary', link: 'bc-linkbtn', select: 'bc-input', input: 'bc-input', error: 'ps-error', list: 'ps-list', row: 'ps-row', field: 'ps-field', check: 'ps-check', send: 'ps-send', steps: 'ps-steps' },
    showBed: (b) => { bed = b; paint(); frame(); },
    manifold,
    worker: (() => { try { const m = import.meta.resolve?.('manifold-3d'); return m ? { url: new URL('./printstage/ps-worker.js', import.meta.url).href, manifoldUrl: m } : null; } catch { return null; } })(),
    fetchFn: (...a) => fetch(...a),
    serial: navigator.serial || null,
    load, save, moreSlicers, moreLinks,
    studio: window.cadcraftStudio?.engines || null,
    download: (name, text, type) => { const a = el('a', { href: URL.createObjectURL(new Blob([text], { type })), download: name }); a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); },
    print, fileName,
    confirm: (paragraphs, opts = {}) => new Promise((done) => {
      let yes = false;
      const finish = (v) => { yes = v; dlg.close(); };
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'ps-ask-h', dataset: { psConfirm: '' } },
        el('div', { className: 'bc-dialog-head' }, el('h2', { className: 'bc-h', id: 'ps-ask-h' }, opts.title || t('ps.send.button'))),
        el('div', { className: 'bc-dialog-text' }, ...paragraphs.map((x) => el('p', {}, x))),
        el('div', { className: 'bc-dialog-foot' },
          el('button', { type: 'button', className: 'bc-btn is-primary', dataset: { psYes: '' }, onclick: () => finish(true) }, opts.yes || t('ps.send.button')),
          el('button', { type: 'button', className: 'bc-btn', dataset: { psNo: '' }, onclick: () => finish(false) }, t('ps.send.cancel'))));
      dlg.addEventListener('close', () => { dlg.remove(); done(yes); });
      document.body.append(dlg);
      dlg.showModal();
      dlg.querySelector('[data-ps-no]').focus();
    }),
    rerender: () => { if (open) draw(); },
  });
  const panel = printStagePanel(host);

  // ---- the card: this app's own controls above the shared panel
  const btn = (key, fn, extra = {}) => el('button', { type: 'button', className: 'bc-btn', title: extra.title ? t(extra.title) : undefined, disabled: !!extra.disabled, dataset: extra.data || {}, onclick: fn }, t(key));
  function say(text) { lastNote = text; print?.(text); draw(); }
  function ours() {
    const sel = stage.objects().find((o) => o.id === selected);
    const rows = [];
    rows.push(el('h3', { className: 'bc-props-sub ps-head' }, t('ps.bim.h')));
    rows.push(el('p', { className: 'bc-note ps-note' }, t('ps.bim.note')));
    rows.push(el('div', { className: 'ps-row' },
      btn('ps.bim.take.sel', () => sync('selection'), { title: 'ps.bim.take.sel.title', data: { psTakeSel: '' } }),
      btn('ps.bim.take.shown', () => sync('shown'), { title: 'ps.bim.take.shown.title', data: { psTakeShown: '' } })));
    for (const l of left) rows.push(el('p', { className: 'ps-error', dataset: { psLeft: l.id } }, t('ps.bim.left', { name: l.name, why: t('ps.pc.why.' + l.why.kind, { n: l.why.n }) })));
    if (more) rows.push(el('p', { className: 'ps-error', dataset: { psMore: '' } }, t('ps.bim.more', { n: more })));
    rows.push(el('div', { className: 'ps-row' },
      el('label', { className: 'ps-field' }, t('ps.bim.scale'), el('input', { type: 'number', className: 'bc-input', min: 1, max: 100000, step: 1, value: String(scaleN), dataset: { psScaleN: '' }, onchange: (e) => { const n = Number(e.target.value); if (n >= 1) scaleN = n; } })),
      btn('ps.bim.scale.apply', () => scaleAll(), { title: 'ps.bim.scale.title', disabled: !stage.objects().length, data: { psScale: '' } }),
      btn('ps.bim.lifesize', () => lifeSize(), { title: 'ps.bim.lifesize.title', disabled: !stage.objects().length, data: { psLife: '' } })));
    rows.push(el('p', { className: 'bc-note ps-note', dataset: { psSelected: sel ? sel.id : '' } }, sel ? t('ps.pc.selected', { name: sel.name }) : t('ps.pc.pick')));
    rows.push(el('div', { className: 'ps-row' },
      btn('ps.pc.flat', () => flat(), { title: 'ps.pc.flat.title', disabled: !sel, data: { psFlat: '' } }),
      btn('ps.pc.turn', () => { stage.rotate(selected, 90); paint(); draw(); }, { title: 'ps.pc.turn.title', disabled: !sel, data: { psTurn: '' } }),
      btn('ps.pc.asdesigned', () => { stage.orient(selected, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]); paint(); draw(); }, { title: 'ps.pc.asdesigned.title', disabled: !sel, data: { psAsDesigned: '' } })));
    rows.push(el('div', { className: 'ps-row' },
      btn('ps.pc.undo', () => { stage.undo(); paint(); draw(); }, { disabled: !stage.depth(), data: { psUndo: '' } }),
      btn('ps.pc.redo', () => { stage.redo(); paint(); draw(); }, { disabled: !stage.redoDepth(), data: { psRedo: '' } })));
    if (lastNote) rows.push(el('p', { className: 'bc-note ps-note', role: 'status', dataset: { psBimNote: '' } }, lastNote));
    return el('div', { className: 'bc-block ps-block', dataset: { psBimcraft: '' } }, ...rows);
  }
  /** One scale for everything, so a scale model keeps its proportions (the card's Fit all scales each thing by itself). */
  function scaleAll() {
    const f = 1 / scaleN, objs = stage.objects();
    stage.batch(t('ps.bim.undo.scale'), () => { for (const o of objs) { const cur = stage.scaleOf ? stage.scaleOf(o.id) : 1; stage.rescale(o.id, f / cur); } });
    doArrange();
    say(t('ps.bim.scaled', { n: scaleN }));
  }
  function lifeSize() {
    const objs = stage.objects();
    stage.batch(t('ps.bim.undo.scale'), () => { for (const o of objs) { const cur = stage.scaleOf ? stage.scaleOf(o.id) : 1; if (cur !== 1) stage.rescale(o.id, 1 / cur); } });
    doArrange();
    say(t('ps.bim.lifesized'));
  }
  function doArrange() {
    const objs = stage.objects();
    const lay = arrange(objs.map((o) => [o.max[0] - o.min[0], o.max[1] - o.min[1], o.max[2] - o.min[2]]), stageBed());
    stage.batch(t('ps.bim.undo.layout'), () => objs.forEach((o, i) => { const a = lay.at[i]; if (a) stage.moveTo(o.id, a[0] + (o.max[0] - o.min[0]) / 2, a[1] + (o.max[1] - o.min[1]) / 2); stage.drop(o.id); }));
    paint(); frame();
  }
  function flat() {
    const o = stage.objects().find((x) => x.id === selected);
    if (!o) return;
    const faces = stage.baseFaces(selected);
    if (!faces.length) { say(t('ps.pc.flat.none', { name: o.name })); return; }
    const r = stage.layFlat(selected);
    paint();
    say(r ? t('ps.pc.flat.done', { name: o.name, area: Math.round(r.area) }) : t('ps.pc.flat.already', { name: o.name }));
  }
  function draw() {
    if (!open || !pane.isConnected) return;
    const scroll = pane.scrollTop;
    const card = el('div', { className: 'ps-card', dataset: { printStage: '' } },
      el('div', { className: 'ps-card-top' }, el('p', { className: 'bc-note ps-note' }, t('ps.eyebrow')),
        el('button', { type: 'button', className: 'bc-linkbtn', dataset: { psSmall: small ? '1' : '0' }, onclick: () => { small = !small; draw(); } }, t(small ? 'ps.show' : 'ps.hide')),
        el('button', { type: 'button', className: 'bc-linkbtn', dataset: { psClose: '' }, title: t('ps.close'), 'aria-label': t('ps.close'), onclick: close }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
      ...(small ? [] : [ours()]),
      ...panel.panel({ small }));
    pane.replaceChildren(card);
    pane.scrollTop = scroll;
  }
  function restoreCamera() {
    const v = V();
    if (v && saved) { v.camera.position.copy(saved.p); v.controls.target.copy(saved.t); v.camera.near = saved.near; v.camera.far = saved.far; v.camera.updateProjectionMatrix(); v.controls.update(); }
    saved = null;
  }
  function close() {
    open = false; bed = null;
    paint(); restoreCamera(); V()?.render();
    pane.replaceChildren();
  }
  addEventListener('cc-print-slicers', () => { if (open) draw(); });
  // the tab is left: the model comes back, and the bed again when the tab is shown
  const watch = setInterval(() => {
    if (!open) return;
    if (!pane.isConnected || pane.hidden) { if (bed) { bed = null; paint(); restoreCamera(); } }
  }, 500);

  return {
    /** Called each time the tab is shown. */
    open() {
      const first = !open || !stage.objects().length;
      open = true;
      bed = panel.job().bed;
      if (first) sync(scope, true); else { paint(); draw(); }
      frame();
      draw();
    },
    close, sync, stage, host, panel, draw,
    addItem: (uuid, version) => panel.addItem(uuid, version),
    dispose() { clearInterval(watch); close(); panel.dispose?.(); },
  };
}
