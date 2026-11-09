/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Digital twin add-on for BimCraft (0.9 TW.16, session `bim-hosts-09`): a thin adapter over lib/twin and lib/flow (copies in ../../twin, ../../flow, ../../plc, written by
 * tools/{twin,flow,plc}/sync.mjs; nobody edits them), on the shared add-on API. The shared Digital twin panel does the work (cells, run, soft PLC, faults, tests, compare, measured line, bill of
 * materials, USD); this file gives it BimCraft's side:
 *   - the layout lives IN THE IFC FILE: property set CadCraft_Flow on IfcProject (Layout = the cadcraft-flow JSON, Anchor = where it stands), written as one undo step through model.write;
 *     Undo and Redo bring the old layout back (the add-on reads the file again on every change);
 *   - the building gives the layout a place: a level, x and y (mm) and a turn; the equipment is drawn there in the 3D view (a Z-up group in the viewer's scene, found on the canvas as the Point
 *     clouds add-on finds it), and the fit check puts each box of the equipment against the level's walls;
 *   - what a building does NOT carry: machine behaviours, speeds, cycle times, controls. Those are typed in the panel (the flow layout's parameters) — behaviours on imported CAD are TW.13;
 *     baking the run into the model's timeline and video need the ModelCraft's timeline and are not offered here (the panel says so).
 * The panel's own settings (looks, seeds, programs) are kept in this browser, per file name.
 */
import * as THREE from 'three';
import { mountTwin, CSS } from '../../twin/ui.js';
import { equipmentParts } from '../../twin/equipment.js';
import { TwinView } from '../../twin/view3d.js';
import { Sim, simulate } from '../../flow/sim.js';
import { buildGraph, cleanLayout, newLayout, addAfter } from '../../flow/layout.js';
import { defaults } from '../../flow/catalog.js';
import { makePlayer } from '../../flow/playback.js';
import { readWalls } from '../../model-walls.js';
import { sceneMatrix, checkFit } from './fit.js';

const PSET = 'CadCraft_Flow';
const findViewer = () => { for (const c of document.querySelectorAll('canvas')) if (c.viewer && c.viewer.renderer) return c.viewer; return null; };
const DEFAULT_ANCHOR = { level: '', x: 0, y: 0, rot: 0 };

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const style = document.createElement('style'); style.setAttribute('data-addon', 'twin'); style.textContent = CSS + '.bt-box{border:1px solid var(--ws-line,#8884);border-radius:4px;padding:.4rem .5rem;margin:.4rem 0}.bt-box label{display:inline-flex;gap:.3rem;align-items:center;margin:.15rem .4rem .15rem 0}.bt-box input[type=number]{width:5.5rem}.bt-note{opacity:.75;font-size:.8rem}.bt-bad{color:#c92a2a}.bt-ok{color:#2b8a3e}'; document.head.append(style);
  let layout = null, anchor = { ...DEFAULT_ANCHOR }, seenFile = '', fitRes = null, msg = '', ui = null, box = null, section = null;
  const listeners = new Set();
  const fileName = () => api.model.current()?.name || '';
  const setupKey = () => 'setup:' + fileName();

  // ---- the file: CadCraft_Flow on IfcProject
  const readFile = () => {
    if (!api.model.current()) return null;
    return api.model.read((w) => { const v = w.api.GetLineIDsWithType(w.mid, w.W.IFCPROJECT); return v.size() ? (w.readPset(v.get(0), PSET) || {}) : {}; });
  };
  const parse = (s) => { try { return s ? JSON.parse(s) : null; } catch { return null; } };
  const cleanAnchor = (a) => ({ level: typeof a?.level === 'string' ? a.level.slice(0, 64) : '', x: Number.isFinite(+a?.x) ? +a.x : 0, y: Number.isFinite(+a?.y) ? +a.y : 0, rot: Number.isFinite(+a?.rot) ? ((+a.rot % 360) + 360) % 360 : 0 });
  const fileSig = () => { const f = readFile(); return f ? (f.Layout || '') + '|' + (f.Anchor || '') : ''; };
  /** The file's layout and anchor become the add-on's (after Open, Undo, Redo). */
  function pull() {
    const f = readFile();
    seenFile = fileSig();
    const raw = f ? parse(f.Layout) : null;
    layout = raw ? cleanLayout(raw).layout : null;
    anchor = cleanAnchor(f ? parse(f.Anchor) : null);
    fitRes = null;
  }
  async function push(label) {
    if (!api.model.current()) { msg = t('bt.nomodel'); return; }
    const L = layout ? JSON.stringify(layout) : '', A = JSON.stringify(anchor);
    await api.model.write(label, (w) => { const v = w.api.GetLineIDsWithType(w.mid, w.W.IFCPROJECT); if (v.size()) w.upsertPset(v.get(0), PSET, [['Layout', 'IFCTEXT', L], ['Anchor', 'IFCTEXT', A]]); });
    seenFile = fileSig();
  }
  const levels = () => { try { return api.model.levels(); } catch { return []; } };
  const levelNow = () => { const ls = levels(); return ls.find((l) => l.guid === anchor.level) || ls.slice().sort((a, b) => a.elevation - b.elevation)[0] || null; };
  const full = () => { const l = levelNow(); return { ...anchor, level: l ? l.guid : '', elevation: l ? l.elevation : 0 }; };

  // ---- the 3D view: equipment in a Z-up group inside the viewer's scene
  let wrap = null;
  const place = () => {
    const v = findViewer(); if (!v || !wrap) return;
    const P = v.modelMatrix ? v.modelMatrix(0) : null, m = new THREE.Matrix4().fromArray(sceneMatrix(full()));
    if (P) m.premultiply(new THREE.Matrix4().fromArray(P));
    wrap.matrixAutoUpdate = false; wrap.matrix.copy(m); wrap.matrixWorldNeedsUpdate = true; v.render();
  };
  const ensureWrap = () => {
    const v = findViewer(); if (!v) return null;
    if (!wrap) { wrap = new THREE.Group(); wrap.name = 'twin-bim'; v.scene.add(wrap); place(); }
    return v;
  };
  const view = {
    make: () => { const v = ensureWrap(); return v ? new TwinView(THREE, wrap, () => v.render()) : null; },
    hideFlow: () => {}, redraw: () => { findViewer()?.render(); }, canvas: () => findViewer()?.canvas || null,
  };

  const host = {
    t: (k, v) => api.t(k, v), flow: { Sim, simulate, buildGraph, cleanLayout, newLayout, addAfter, defaults, makePlayer },
    layout: () => layout,
    setLayout: (L) => { layout = cleanLayout(L).layout; fitRes = null; push(t('bt.undo.layout')).catch((e) => { msg = String(e.message || e); redraw(); }); for (const f of listeners) f(); redraw(); },
    onLayout: (f) => listeners.add(f),
    flowOn: () => true,   // the Material flow editor is ModelCraft's; here a layout comes from a cell or a file, so the panel's "switch on Material flow" note would be wrong
    load: () => { const s = api.storage.get(setupKey()); return s || null; }, save: (s) => api.storage.set(setupKey(), s),
    view, model: null, timeline: null, behaviours: null, video: null,
    download: (name, data, type) => {
      const blob = data instanceof Blob ? data : new Blob([data], { type });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    },
    pickFile: (accept) => new Promise((resolve) => {
      const inp = document.createElement('input'); inp.type = 'file'; inp.accept = accept;
      inp.addEventListener('change', async () => { const f = inp.files && inp.files[0]; if (!f || f.size > 8e6) { resolve(null); return; } resolve({ name: f.name, text: await f.text() }); });
      inp.click();
    }),
    confirm: (q) => window.confirm(q),
  };

  // ---- the add-on's own part of the pane: where the layout stands, files, the fit check
  const h = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (v == null || v === false) continue; if (k === 'text') n.textContent = v; else if (k === 'class') n.className = v; else if (k.startsWith('on')) n.addEventListener(k.slice(2), v); else if (k === 'value') n.value = v; else if (k === 'selected') n.selected = !!v; else n.setAttribute(k, v === true ? '' : String(v)); }
    for (const c of kids.flat()) if (c != null && c !== false) n.append(c);
    return n;
  };
  const wallsOf = (lvl) => api.model.read((w) => {
    const st = w.byGuid(lvl.guid);
    return st ? readWalls(w, st).map((x) => ({ guid: x.guid, a: x.a, b: x.b, t: x.t, height: x.height, z0: 0 })) : [];
  });
  function fit() {
    const l = levelNow();
    if (!layout || !layout.items.length) { fitRes = { none: 'bt.fit.nolayout' }; return; }
    if (!l) { fitRes = { none: 'bt.fit.nolevel' }; return; }
    const b = buildGraph(layout);
    if (b.problems.length) { fitRes = { none: 'bt.fit.problems', list: b.problems.map((p) => p.code).join(', ') }; return; }
    const parts = equipmentParts(layout, b, { looks: ui?.state().looks || {} });
    const walls = wallsOf(l);
    fitRes = { level: l.name, walls: walls.length, ...checkFit({ parts, walls, anchor: full() }) };
  }
  const fitText = () => {
    if (!fitRes) return null;
    if (fitRes.none) return h('p', { class: 'bt-note', text: t(fitRes.none, { list: fitRes.list || '' }) });
    const names = [...new Set(fitRes.touching.map((x) => x.item))];
    return h('div', { 'data-bt-fit': '1' }, h('p', { class: names.length ? 'bt-bad' : 'bt-ok', text: names.length ? t('bt.fit.touch', { n: names.length, items: names.join(', '), walls: fitRes.walls, level: fitRes.level }) : t('bt.fit.clear', { items: fitRes.items, walls: fitRes.walls, level: fitRes.level }) }), h('p', { class: 'bt-note', text: t('bt.fit.note') }));
  };
  async function setAnchor(next) { anchor = cleanAnchor({ ...anchor, ...next }); fitRes = null; place(); await push(t('bt.undo.anchor')).catch((e) => { msg = String(e.message || e); }); redraw(); }
  async function openFile() {
    const f = await host.pickFile('.json,application/json');
    if (!f) return;
    const raw = parse(f.text), r = raw ? cleanLayout(raw) : { dropped: -1 };
    if (r.dropped < 0) { msg = t('bt.file.bad', { name: f.name }); redraw(); return; }
    if (layout && layout.items.length && !host.confirm(t('twin.cell.ask'))) return;
    host.setLayout(r.layout);
    msg = t('bt.file.done', { name: f.name, n: r.layout.items.length, dropped: r.dropped });
    redraw();
  }
  function ours() {
    const ls = levels(), cur = full();
    const num = (k, v, step = 100) => h('input', { type: 'number', step, value: String(Math.round(v * 100) / 100), 'data-bt': k, onchange: (e) => { const n = Number(e.target.value); if (Number.isFinite(n)) setAnchor({ [k]: n }); } });
    return h('div', { class: 'bt-box', 'data-bt-stand': '1' },
      h('strong', { text: t('bt.h') }),
      h('p', { class: 'bt-note', text: t('bt.note') }),
      h('div', {}, h('label', {}, t('bt.level'), h('select', { 'data-bt': 'level', onchange: (e) => setAnchor({ level: e.target.value }) }, ls.map((l) => h('option', { value: l.guid, selected: l.guid === cur.level, text: l.name })))),
        h('label', {}, 'X (mm)', num('x', anchor.x)), h('label', {}, 'Y (mm)', num('y', anchor.y)), h('label', {}, t('bt.rot'), num('rot', anchor.rot, 1))),
      h('div', {}, h('button', { type: 'button', 'data-bt': 'open', onclick: openFile, text: t('bt.file.open') }), ' ',
        h('button', { type: 'button', 'data-bt': 'save', disabled: !layout || !layout.items.length, onclick: () => host.download('flow-layout.json', JSON.stringify(layout, null, 1), 'application/json'), text: t('bt.file.save') }), ' ',
        h('button', { type: 'button', 'data-bt': 'fit', onclick: () => { fit(); redraw(); }, text: t('bt.fit.run') })),
      msg ? h('p', { class: 'bt-note', 'data-bt-msg': '1', text: msg }) : null, fitText(),
      h('p', { class: 'bt-note', text: t('bt.carries') }));
  }
  function redraw() { if (section && section.isConnected) { section.replaceChildren(ours()); } }
  api.ui.panelTab({
    id: 'twin', title: t('bt.title'),
    render: (el) => {
      if (!box) { box = h('div', {}); ui = mountTwin(box, host); }
      pull();
      section = h('div', {}, ours());
      el.replaceChildren(section, box);
      ui.load(host.load());   // the layout may have changed under it (Undo, another file)
      place();
    },
  });
  // Undo, Redo, a new file: the file's layout is the truth
  const off = api.model.onChange(() => {
    if (!api.model.current()) return;
    if (fileSig() !== seenFile) { pull(); for (const f of listeners) f(); redraw(); place(); }
  });
  window.ccBimTwin = { ui: () => ui, host, layout: () => layout, anchor: () => full(), fit, fitResult: () => fitRes, pull, wrap: () => wrap };
  api.onDeactivate(() => { try { off?.(); } catch { /* gone */ } if (ui) ui.destroy(); ui = null; const v = findViewer(); if (v && wrap) { v.scene.remove(wrap); v.render(); } wrap = null; style.remove(); delete window.ccBimTwin; });
}
