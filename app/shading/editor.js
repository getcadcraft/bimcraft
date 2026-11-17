/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shading/editor.js — a small node-graph editor (0.7 MT.1; the DC.54 node-editor spike folds in here). It knows nothing about
 * materials: it edits a graph {nodes: [{id, type, x, y, values, params}], links: [{from: [id, out], to: [id, in]}]} whose node
 * types (sockets, kinds, settings) come from the caller, so a later parameter graph (PartCraft) can use it as it is.
 *
 *   const ne = new NodeEditor(box, {el, t, types, categories, words, onChange(graph, labelKey), choices})
 *     types: Map type → {type, cat, single?, inputs [{id, kind, def, min, max, more}], outputs [{id, kind}], params [{id, kind,
 *            options?, min?, max?}]}  (shading/nodes.js NODE_TYPES)
 *     words: {node(type), input(id), output(id), param(id), option(v), cat(c)} → text
 *     choices: {image() → [{key, name}], library() → [{id, name}]} for the 'image' and 'library' settings
 *     onChange gets a copy of the graph after every edit (one undo step each) and the edit's word key
 *   ne.setGraph(graph) (resets undo; frames the nodes)   ne.graph (a copy)   ne.undo() / ne.redo() / ne.canUndo / ne.canRedo
 *   ne.frame()   ne.addNode(type, at?, params?)   ne.deleteSelected()   ne.destroy()   ne.view (the focusable area)
 *
 * Mouse: drag a node by its title; drag from an output dot to an input dot to link (a second link into an input replaces the
 * first); drag a linked input away to unlink; drag empty space to pan; the wheel zooms at the pointer. Keys (the graph area
 * focused): Delete / Backspace remove the selected nodes or link, Mod+Z / Mod+Shift+Z (Mod+Y) undo / redo, Mod+D duplicate,
 * Shift+A the add-node list, F frame everything, arrows move the selected nodes (Shift: by 1), Esc clears the selection, Tab
 * moves between nodes and their fields. Every edit is one undo step; a value is committed when its field changes.
 */

import { PadDetector } from '../wheel-pad.js';   // D7.56: a trackpad's two-finger swipe pans
const SVGNS = 'http://www.w3.org/2000/svg';
const clone = (g) => JSON.parse(JSON.stringify(g));
const HEX = /^#[0-9a-f]{6}$/i;
const toHex = (c) => {
  if (typeof c === 'string' && HEX.test(c)) return c;
  if (!Array.isArray(c)) return '#808080';
  const e = (x) => { x = Math.max(0, Math.min(1, x)); const s = x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055; return Math.round(s * 255).toString(16).padStart(2, '0'); };
  return '#' + e(c[0]) + e(c[1]) + e(c[2]);
};

export class NodeEditor {
  constructor(box, { el, t, types, categories, words, onChange = () => {}, choices = {} }) {
    Object.assign(this, { box, el, t, types, categories, words, onChange, choices });
    this.g = { nodes: [], links: [] };
    this.sel = new Set();
    this.selLink = -1;
    this.pan = { x: 40, y: 20 };
    this.zoom = 1;
    this.undoStack = [];
    this.redoStack = [];
    this.more = new Set();
    this._off = [];
    this.build();
  }

  // ---------------------------------------------------------------- frame
  build() {
    const { el, t } = this;
    this.add = el('select', { className: 'mc-select cc-ne-add', 'aria-label': t('shading.ed.add'), dataset: { neAdd: '' } });
    this.fillAdd();
    this.add.addEventListener('change', () => { const v = this.add.value; this.add.value = ''; if (v) { this.addNode(v); this.view.focus(); } });
    const btn = (icon, key, fn, data) => {
      const b = el('button', { type: 'button', className: 'mc-tool cc-ne-btn', title: t(key), 'aria-label': t(key), dataset: { [data]: '' } }, el('i', { className: 'bi bi-' + icon, 'aria-hidden': 'true' }));   // i18n-ignore: a class name
      b.addEventListener('click', () => { fn(); this.view.focus(); });
      return b;
    };
    this.bDel = btn('trash', 'shading.ed.delete', () => this.deleteSelected(), 'neDelete');
    this.bUndo = btn('arrow-counterclockwise', 'shading.ed.undo', () => this.undo(), 'neUndo');
    this.bRedo = btn('arrow-clockwise', 'shading.ed.redo', () => this.redo(), 'neRedo');
    const bFrame = btn('fullscreen', 'shading.ed.frame', () => this.frame(), 'neFrame');
    this.bar = el('div', { className: 'cc-ne-bar', role: 'toolbar', 'aria-label': t('shading.ed.bar') }, this.add, this.bDel, this.bUndo, this.bRedo, bFrame);
    this.wires = document.createElementNS(SVGNS, 'svg');
    this.wires.setAttribute('class', 'cc-ne-wires');
    this.wires.setAttribute('aria-hidden', 'true');
    this.world = el('div', { className: 'cc-ne-world' });
    this.world.append(this.wires);
    this.view = el('div', { className: 'cc-ne-view', tabindex: '0', role: 'application', 'aria-label': t('shading.ed.area'), dataset: { neView: '' } }, this.world);
    this.root = el('div', { className: 'cc-ne' }, this.bar, this.view);
    this.box.append(this.root);
    this.view.addEventListener('pointerdown', (e) => this.down(e));
    this.view.addEventListener('wheel', (e) => this.wheel(e), { passive: false });
    this.view.addEventListener('keydown', (e) => this.key(e));
    this.ro = new ResizeObserver(() => this.drawWires());
    this.ro.observe(this.view);
  }
  fillAdd() {
    const { el, t, types, categories, words } = this;
    this.add.replaceChildren(el('option', { value: '' }, t('shading.ed.add')));
    for (const c of categories) {
      const list = [...types.values()].filter((x) => x.cat === c && !x.single);
      if (list.length) this.add.append(el('optgroup', { label: words.cat(c) }, list.map((x) => el('option', { value: x.type }, words.node(x.type)))));
    }
  }
  destroy() { this.ro.disconnect(); this.root.remove(); }

  // ---------------------------------------------------------------- the graph
  get graph() { return clone(this.g); }
  get canUndo() { return this.undoStack.length > 0; }
  get canRedo() { return this.redoStack.length > 0; }
  setGraph(g) { this.g = clone(g); this.undoStack = []; this.redoStack = []; this.sel.clear(); this.selLink = -1; this.render(); this.frame(); }
  node(id) { return this.g.nodes.find((n) => n.id === id) || null; }
  linkInto(id, inp) { return this.g.links.findIndex((l) => l.to[0] === id && l.to[1] === inp); }
  wouldCycle(from, to) {
    if (from === to) return true;
    const stack = [to], seen = new Set([to]);
    while (stack.length) { const a = stack.pop(); for (const l of this.g.links) if (l.from[0] === a) { if (l.to[0] === from) return true; if (!seen.has(l.to[0])) { seen.add(l.to[0]); stack.push(l.to[0]); } } }
    return false;
  }
  /** One undo step: `fn` changes this.g; the graph before it is kept. */
  commit(labelKey, fn) {
    const before = JSON.stringify(this.g);
    fn(this.g);
    if (JSON.stringify(this.g) === before) { this.render(); return; }
    this.undoStack.push(before);
    if (this.undoStack.length > 200) this.undoStack.shift();
    this.redoStack = [];
    this.render();
    this.onChange(this.graph, labelKey);
  }
  undo() { if (!this.undoStack.length) return; this.redoStack.push(JSON.stringify(this.g)); this.g = JSON.parse(this.undoStack.pop()); this.render(); this.onChange(this.graph, 'shading.ed.undo'); }
  redo() { if (!this.redoStack.length) return; this.undoStack.push(JSON.stringify(this.g)); this.g = JSON.parse(this.redoStack.pop()); this.render(); this.onChange(this.graph, 'shading.ed.redo'); }

  addNode(type, at = null, startParams = null) {
    const T = this.types.get(type);
    if (!T || T.single) return null;
    const id = this.g.nodes.reduce((m, n) => Math.max(m, n.id), 0) + 1;
    const r = this.view.getBoundingClientRect();
    let p = at;
    if (!p) {
      // a free spot: in the view's middle when nothing is there, else in a column left of the nodes, the first gap down it
      const size = (n) => { const d = this.world.querySelector(`.cc-ne-node[data-ne-node="${n.id}"]`); return d ? [d.offsetWidth, d.offsetHeight] : [210, 160]; };
      const hits = (q) => this.g.nodes.some((n) => { const [w, h] = size(n); return q.x < n.x + w + 16 && q.x + 210 + 16 > n.x && q.y < n.y + h + 16 && q.y + 160 + 16 > n.y; });
      p = { x: Math.round((r.width / 2 - this.pan.x) / this.zoom - 105), y: Math.round((r.height / 2 - this.pan.y) / this.zoom - 80) };
      if (hits(p)) {
        const minX = Math.min(...this.g.nodes.map((n) => n.x)), minY = Math.min(...this.g.nodes.map((n) => n.y));
        p = { x: minX - 250, y: minY };
        for (let k = 0; k < 64 && hits(p); k++) p.y += 48;
      }
    }
    const values = {}, params = {};
    for (const i of T.inputs) if (i.def !== 'uv') values[i.id] = Array.isArray(i.def) ? i.def.slice() : i.def;
    for (const q of T.params) params[q.id] = Array.isArray(q.def) ? clone(q.def) : q.def;
    if (startParams) Object.assign(params, startParams);
    this.commit('shading.ed.undo_add', (g) => g.nodes.push({ id, type, x: Math.round(p.x), y: Math.round(p.y), values, params }));
    this.sel = new Set([id]); this.selLink = -1; this.render();
    return id;
  }
  deleteSelected() {
    if (this.selLink >= 0) { const i = this.selLink; this.selLink = -1; this.commit('shading.ed.undo_unlink', (g) => g.links.splice(i, 1)); return; }
    const ids = [...this.sel].filter((id) => !this.types.get(this.node(id)?.type)?.single);
    if (!ids.length) return;
    this.sel.clear();
    this.commit('shading.ed.undo_delete', (g) => {
      g.nodes = g.nodes.filter((n) => !ids.includes(n.id));
      g.links = g.links.filter((l) => !ids.includes(l.from[0]) && !ids.includes(l.to[0]));
    });
  }
  duplicateSelected() {
    const ids = [...this.sel].filter((id) => !this.types.get(this.node(id)?.type)?.single);
    if (!ids.length) return;
    let next = this.g.nodes.reduce((m, n) => Math.max(m, n.id), 0) + 1;
    const map = new Map();
    this.commit('shading.ed.undo_duplicate', (g) => {
      for (const id of ids) { const n = clone(this.node(id)); map.set(id, next); n.id = next++; n.x += 30; n.y += 30; g.nodes.push(n); }
      for (const l of g.links.slice()) if (map.has(l.from[0]) && map.has(l.to[0])) g.links.push({ from: [map.get(l.from[0]), l.from[1]], to: [map.get(l.to[0]), l.to[1]] });
    });
    this.sel = new Set(map.values()); this.render();
  }

  // ---------------------------------------------------------------- drawing
  render() {
    const { el, t, words } = this;
    const focusKey = document.activeElement && this.root.contains(document.activeElement) ? document.activeElement.dataset.neKey : null;
    for (const n of [...this.world.querySelectorAll('.cc-ne-node')]) n.remove();
    for (const n of this.g.nodes) {
      const T = this.types.get(n.type);
      if (!T) continue;
      const key = (s) => n.id + ':' + s;
      const head = el('div', { className: 'cc-ne-head', dataset: { neDrag: String(n.id) } }, el('span', { className: 'cc-ne-title' }, words.node(n.type)),
        T.single ? null : el('button', { type: 'button', className: 'cc-ne-x', title: t('shading.ed.delete_node'), 'aria-label': t('shading.ed.delete_node'), dataset: { neKey: key('x') }, onclick: () => { this.sel = new Set([n.id]); this.deleteSelected(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })));
      const outs = el('div', { className: 'cc-ne-outs' }, T.outputs.map((o) => el('div', { className: 'cc-ne-row is-out' }, el('span', {}, words.output(o.id)),
        el('span', { className: 'cc-ne-sock k-' + o.kind, dataset: { node: String(n.id), sock: o.id, dir: 'out' }, title: words.output(o.id) }))));
      const ins = el('div', { className: 'cc-ne-ins' });
      const hasMore = T.inputs.some((i) => i.more);
      for (const i of T.inputs) {
        const li = this.linkInto(n.id, i.id);
        if (i.more && !this.more.has(n.id) && li < 0) continue;
        const sock = el('span', { className: 'cc-ne-sock k-' + i.kind + (li >= 0 ? ' is-linked' : ''), dataset: { node: String(n.id), sock: i.id, dir: 'in' }, title: words.input(i.id) });
        const fid = 'cc-ne-' + n.id + '-' + i.id;
        const lab = el('label', { for: fid }, words.input(i.id));
        ins.append(el('div', { className: 'cc-ne-row is-in' }, sock, li >= 0 || i.def === 'uv' ? el('span', { className: 'cc-ne-k' }, words.input(i.id)) : [lab, this.valueField(n, i, fid, key(i.id))]));
      }
      if (hasMore) {
        const open = this.more.has(n.id);
        ins.append(el('button', { type: 'button', className: 'mc-linkbtn cc-ne-more', 'aria-expanded': String(open), dataset: { neKey: key('more'), neMore: '' }, onclick: () => { if (open) this.more.delete(n.id); else this.more.add(n.id); this.render(); } }, t(open ? 'shading.ed.less' : 'shading.ed.more')));
      }
      const params = T.params.length ? el('div', { className: 'cc-ne-params' }, T.params.map((p) => this.paramField(n, p, key('p:' + p.id)))) : null;
      const div = el('div', { className: 'cc-ne-node' + (this.sel.has(n.id) ? ' is-sel' : '') + (T.single ? ' is-output' : ''), tabindex: '0', role: 'group', 'aria-label': words.node(n.type), dataset: { neNode: String(n.id), neKey: key('node'), type: n.type } }, head, outs, ins, params);
      div.style.left = n.x + 'px'; div.style.top = n.y + 'px';
      div.addEventListener('focus', (e) => { if (e.target === div && !this.sel.has(n.id)) { this.sel = new Set([n.id]); this.selLink = -1; this.markSel(); } });
      this.world.append(div);
    }
    this.place();
    this.drawWires();
    this.bUndo.disabled = !this.canUndo; this.bRedo.disabled = !this.canRedo;
    this.bDel.disabled = !this.sel.size && this.selLink < 0;
    if (focusKey) this.root.querySelector(`[data-ne-key="${CSS.escape(focusKey)}"]`)?.focus();
  }
  markSel() {
    for (const d of this.world.querySelectorAll('.cc-ne-node')) d.classList.toggle('is-sel', this.sel.has(Number(d.dataset.neNode)));
    this.bDel.disabled = !this.sel.size && this.selLink < 0;
    this.drawWires();
  }
  valueField(n, i, fid, key) {
    const { el } = this;
    const v = n.values[i.id];
    const set = (val) => this.commit('shading.ed.undo_value', () => { this.node(n.id).values[i.id] = val; });
    if (i.kind === 'c') {
      const f = el('input', { type: 'color', id: fid, className: 'cc-ne-color', value: toHex(v), dataset: { neKey: key } });
      f.addEventListener('change', () => set(f.value.toLowerCase()));
      return f;
    }
    if (i.kind === 'v3') {
      const box = el('span', { className: 'cc-ne-v3', id: fid, role: 'group' });
      [0, 1, 2].forEach((k) => {
        const f = el('input', { type: 'number', step: 'any', className: 'mc-input cc-ne-num', value: String(Array.isArray(v) ? v[k] : 0), 'aria-label': 'xyz'[k], dataset: { neKey: key + k } });
        f.addEventListener('change', () => { const x = Number(f.value); if (!Number.isFinite(x)) return; const nv = Array.isArray(v) ? v.slice() : [0, 0, 1]; nv[k] = x; set(nv); });
        box.append(f);
      });
      return box;
    }
    const f = el('input', { type: 'number', step: 'any', id: fid, className: 'mc-input cc-ne-num', value: String(v ?? 0), min: i.min, max: i.max, dataset: { neKey: key } });
    f.addEventListener('change', () => {
      let x = Number(f.value);
      if (!Number.isFinite(x)) { f.value = String(v ?? 0); return; }
      if (Number.isFinite(i.min)) x = Math.max(i.min, x);
      if (Number.isFinite(i.max)) x = Math.min(i.max, x);
      set(x);
    });
    return f;
  }
  paramField(n, p, key) {
    const { el, t, words } = this;
    const fid = 'cc-ne-' + n.id + '-p-' + p.id, v = n.params[p.id];
    const set = (val) => this.commit('shading.ed.undo_setting', () => { this.node(n.id).params[p.id] = val; });
    const row = (ctrl) => el('div', { className: 'cc-ne-row is-param' }, el('label', { for: fid }, words.param(p.id)), ctrl);
    if (p.kind === 'enum') {
      const s = el('select', { id: fid, className: 'mc-select cc-ne-sel', dataset: { neKey: key } }, p.options.map((o) => el('option', { value: o }, words.option(o))));
      s.value = v; s.addEventListener('change', () => set(s.value));
      return row(s);
    }
    if (p.kind === 'bool') {
      const c = el('input', { type: 'checkbox', id: fid, checked: !!v, dataset: { neKey: key } });
      c.addEventListener('change', () => set(c.checked));
      return row(c);
    }
    if (p.kind === 'color') {
      const c = el('input', { type: 'color', id: fid, className: 'cc-ne-color', value: toHex(v), dataset: { neKey: key } });
      c.addEventListener('change', () => set(c.value.toLowerCase()));
      return row(c);
    }
    if (p.kind === 'image' || p.kind === 'library') {
      const list = (p.kind === 'image' ? this.choices.image?.() : this.choices.library?.()) || [];
      const s = el('select', { id: fid, className: 'mc-select cc-ne-sel', dataset: { neKey: key } },
        p.kind === 'image' ? el('option', { value: '' }, t('shading.ed.no_picture')) : null, list.map((c) => el('option', { value: c.key ?? c.id }, c.name)));
      s.value = v || ''; s.addEventListener('change', () => set(s.value));
      return row(s);
    }
    if (p.kind === 'stops') {
      const stops = Array.isArray(v) ? v : [];
      const box = el('div', { className: 'cc-ne-stops', id: fid, role: 'group', 'aria-label': words.param(p.id) });
      const put = (fn) => this.commit('shading.ed.undo_setting', () => { const s = clone(this.node(n.id).params[p.id]); fn(s); s.sort((a, b) => a.p - b.p); this.node(n.id).params[p.id] = s; });
      stops.forEach((s, k) => {
        const pos = el('input', { type: 'number', step: '0.01', min: 0, max: 1, className: 'mc-input cc-ne-num', value: String(s.p), 'aria-label': t('shading.ed.stop_pos'), dataset: { neKey: key + 'p' + k } });
        pos.addEventListener('change', () => { const x = Math.max(0, Math.min(1, Number(pos.value))); if (Number.isFinite(x)) put((a) => { a[k].p = x; }); });
        const col = el('input', { type: 'color', className: 'cc-ne-color', value: toHex(s.color), 'aria-label': t('shading.ed.stop_color'), dataset: { neKey: key + 'c' + k } });
        col.addEventListener('change', () => put((a) => { a[k].color = col.value.toLowerCase(); }));
        const rm = el('button', { type: 'button', className: 'mc-linkbtn', title: t('shading.ed.stop_remove'), 'aria-label': t('shading.ed.stop_remove'), disabled: stops.length <= 1, dataset: { neKey: key + 'r' + k } }, el('i', { className: 'bi bi-dash', 'aria-hidden': 'true' }));
        rm.addEventListener('click', () => put((a) => a.splice(k, 1)));
        box.append(el('div', { className: 'cc-ne-stop' }, pos, col, rm));
      });
      const addB = el('button', { type: 'button', className: 'mc-linkbtn', disabled: stops.length >= 16, dataset: { neKey: key + 'add' } }, t('shading.ed.stop_add'));
      addB.addEventListener('click', () => put((a) => a.push({ p: 0.5, color: '#808080' })));
      box.append(addB);
      return el('div', { className: 'cc-ne-row is-param is-stops' }, el('span', { className: 'cc-ne-k' }, words.param(p.id)), box);
    }
    const f = el('input', { type: 'number', step: p.kind === 'int' ? '1' : 'any', id: fid, className: 'mc-input cc-ne-num', value: String(v), min: p.min, max: p.max, dataset: { neKey: key } });
    f.addEventListener('change', () => {
      let x = Number(f.value);
      if (!Number.isFinite(x)) { f.value = String(v); return; }
      if (p.kind === 'int') x = Math.round(x);
      if (Number.isFinite(p.min)) x = Math.max(p.min, x);
      if (Number.isFinite(p.max)) x = Math.min(p.max, x);
      set(x);
    });
    return row(f);
  }
  place() { this.world.style.transform = `translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.zoom})`; }
  /** A socket's centre in world units. */
  sockAt(id, sock, dir) {
    const s = this.world.querySelector(`.cc-ne-sock[data-node="${id}"][data-sock="${CSS.escape(sock)}"][data-dir="${dir}"]`);
    const nodeEl = this.world.querySelector(`.cc-ne-node[data-ne-node="${id}"]`);
    if (!nodeEl) return null;
    if (!s) {
      // a hidden ("more") input: the node's left edge, at its title
      const n = this.node(id);
      return n ? { x: n.x, y: n.y + 12 } : null;
    }
    const w = this.world.getBoundingClientRect(), r = s.getBoundingClientRect();
    return { x: (r.left + r.width / 2 - w.left) / this.zoom, y: (r.top + r.height / 2 - w.top) / this.zoom };
  }
  wirePath(a, b) { const dx = Math.max(40, Math.abs(b.x - a.x) / 2); return `M${a.x},${a.y} C${a.x + dx},${a.y} ${b.x - dx},${b.y} ${b.x},${b.y}`; }
  drawWires() {
    const paths = [];
    this.g.links.forEach((l, i) => {
      const a = this.sockAt(l.from[0], l.from[1], 'out'), b = this.sockAt(l.to[0], l.to[1], 'in');
      if (!a || !b) return;
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('d', this.wirePath(a, b));
      p.setAttribute('class', 'cc-ne-wire' + (i === this.selLink ? ' is-sel' : '') + (this.sel.has(l.from[0]) || this.sel.has(l.to[0]) ? ' is-near' : ''));
      p.dataset.link = String(i);
      paths.push(p);
    });
    if (this.temp) { const p = document.createElementNS(SVGNS, 'path'); p.setAttribute('d', this.wirePath(this.temp.a, this.temp.b)); p.setAttribute('class', 'cc-ne-wire is-temp'); paths.push(p); }
    this.wires.replaceChildren(...paths);
  }

  // ---------------------------------------------------------------- pointer
  toWorld(e) { const w = this.world.getBoundingClientRect(); return { x: (e.clientX - w.left) / this.zoom, y: (e.clientY - w.top) / this.zoom }; }
  down(e) {
    if (e.button !== 0 && e.button !== 1) return;
    const sock = e.target.closest?.('.cc-ne-sock'), dragH = e.target.closest?.('[data-ne-drag]'), wire = e.target.closest?.('.cc-ne-wire');
    const onField = e.target.closest?.('input, select, button, label');   // i18n-ignore: selectors
    if (onField && !sock) return;
    if (sock && e.button === 0) { e.preventDefault(); this.dragLink(e, sock); return; }
    if (wire) { this.selLink = Number(wire.dataset.link); this.sel.clear(); this.markSel(); this.view.focus(); return; }
    if (dragH && e.button === 0) { e.preventDefault(); this.dragNode(e, Number(dragH.dataset.neDrag)); return; }
    const nodeEl = e.target.closest?.('.cc-ne-node');
    if (nodeEl) { const id = Number(nodeEl.dataset.neNode); if (e.shiftKey) { if (this.sel.has(id)) this.sel.delete(id); else this.sel.add(id); } else if (!this.sel.has(id)) this.sel = new Set([id]); this.selLink = -1; this.markSel(); return; }
    // empty space: pan (and clear the selection on a click)
    e.preventDefault();
    this.view.focus();
    const sx = e.clientX, sy = e.clientY, p0 = { ...this.pan };
    let moved = false;
    this.view.setPointerCapture(e.pointerId);
    const mv = (ev) => { const dx = ev.clientX - sx, dy = ev.clientY - sy; if (Math.abs(dx) + Math.abs(dy) > 3) moved = true; this.pan = { x: p0.x + dx, y: p0.y + dy }; this.place(); };
    const up = () => { this.view.removeEventListener('pointermove', mv); this.view.removeEventListener('pointerup', up); if (!moved) { this.sel.clear(); this.selLink = -1; this.markSel(); } };
    this.view.addEventListener('pointermove', mv); this.view.addEventListener('pointerup', up);
  }
  dragNode(e, id) {
    if (!this.sel.has(id)) { this.sel = e.shiftKey ? new Set([...this.sel, id]) : new Set([id]); this.selLink = -1; this.markSel(); }
    const start = this.toWorld(e), before = JSON.stringify(this.g), orig = new Map([...this.sel].map((k) => { const n = this.node(k); return [k, { x: n.x, y: n.y }]; }));
    let moved = false;
    this.view.setPointerCapture(e.pointerId);
    const mv = (ev) => {
      const p = this.toWorld(ev), dx = p.x - start.x, dy = p.y - start.y;
      if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
      for (const [k, o] of orig) {
        const n = this.node(k); n.x = Math.round(o.x + dx); n.y = Math.round(o.y + dy);
        const d = this.world.querySelector(`.cc-ne-node[data-ne-node="${k}"]`); if (d) { d.style.left = n.x + 'px'; d.style.top = n.y + 'px'; }
      }
      this.drawWires();
    };
    const up = () => {
      this.view.removeEventListener('pointermove', mv); this.view.removeEventListener('pointerup', up);
      if (!moved) return;
      this.undoStack.push(before); this.redoStack = [];
      this.render();
      this.onChange(this.graph, 'shading.ed.undo_move');
    };
    this.view.addEventListener('pointermove', mv); this.view.addEventListener('pointerup', up);
  }
  dragLink(e, sock) {
    let fromId = Number(sock.dataset.node), fromOut = sock.dataset.sock;
    const before = JSON.stringify(this.g);
    let detached = false;
    if (sock.dataset.dir === 'in') {
      // pick up the link that comes into this input, from its source
      const li = this.linkInto(fromId, fromOut);
      if (li < 0) return;
      const l = this.g.links[li];
      this.g.links.splice(li, 1); detached = true;
      fromId = l.from[0]; fromOut = l.from[1];
    }
    const a = this.sockAt(fromId, fromOut, 'out');
    if (!a) return;
    this.temp = { a, b: this.toWorld(e) };
    this.drawWires();
    this.view.setPointerCapture(e.pointerId);
    const mv = (ev) => { this.temp.b = this.toWorld(ev); this.drawWires(); };
    const up = (ev) => {
      this.view.removeEventListener('pointermove', mv); this.view.removeEventListener('pointerup', up);
      this.temp = null;
      const hit = document.elementFromPoint(ev.clientX, ev.clientY)?.closest?.('.cc-ne-sock[data-dir="in"]');
      const toId = hit ? Number(hit.dataset.node) : null, toIn = hit ? hit.dataset.sock : null;
      if (hit && !this.wouldCycle(fromId, toId)) {
        const old = this.linkInto(toId, toIn);
        if (old >= 0) this.g.links.splice(old, 1);
        this.g.links.push({ from: [fromId, fromOut], to: [toId, toIn] });
      }
      if (JSON.stringify(this.g) !== before) {
        this.undoStack.push(before); this.redoStack = [];
        this.render();
        this.onChange(this.graph, hit ? 'shading.ed.undo_link' : 'shading.ed.undo_unlink');
      } else this.render();
    };
    this.view.addEventListener('pointermove', mv); this.view.addEventListener('pointerup', up);
  }
  wheel(e) {
    if (e.target.closest?.('input, select')) return;   // i18n-ignore: selectors
    e.preventDefault();
    if ((this._pad ||= new PadDetector()).isSwipe(e)) { this.pan = { x: this.pan.x - e.deltaX, y: this.pan.y - e.deltaY }; this.place(); return; }   // D7.56: two fingers pan, a pinch and a mouse wheel zoom
    const r = this.view.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
    const z = Math.min(2, Math.max(0.3, this.zoom * Math.exp(-e.deltaY * 0.0015)));
    this.pan = { x: mx - ((mx - this.pan.x) * z) / this.zoom, y: my - ((my - this.pan.y) * z) / this.zoom };
    this.zoom = z;
    this.place();
  }
  frame() {
    const ns = [...this.world.querySelectorAll('.cc-ne-node')];
    if (!ns.length) return;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const d of ns) { const n = this.node(Number(d.dataset.neNode)); x0 = Math.min(x0, n.x); y0 = Math.min(y0, n.y); x1 = Math.max(x1, n.x + d.offsetWidth); y1 = Math.max(y1, n.y + d.offsetHeight); }
    const r = this.view.getBoundingClientRect();
    if (!(r.width > 0)) return;
    this.zoom = Math.min(1.2, Math.max(0.6, Math.min((r.width - 40) / Math.max(1, x1 - x0), (r.height - 40) / Math.max(1, y1 - y0))));   // never smaller than readable: the rest pans
    this.pan = { x: (r.width - (x1 - x0) * this.zoom) / 2 - x0 * this.zoom, y: Math.max(20 - y0 * this.zoom, (r.height - (y1 - y0) * this.zoom) / 2 - y0 * this.zoom) };
    this.place(); this.drawWires();
  }

  // ---------------------------------------------------------------- keys
  key(e) {
    if (e.target.closest?.('input, select') && !e.target.matches?.('input[type=checkbox]')) return;   // i18n-ignore: selectors
    const mod = e.ctrlKey || e.metaKey, k = e.key;
    let used = true;
    if (k === 'Delete' || k === 'Backspace') this.deleteSelected();
    else if (mod && !e.shiftKey && (k === 'z' || k === 'Z')) this.undo();
    else if (mod && ((e.shiftKey && (k === 'z' || k === 'Z')) || k === 'y' || k === 'Y')) this.redo();
    else if (mod && (k === 'd' || k === 'D')) this.duplicateSelected();
    else if (e.shiftKey && !mod && (k === 'A' || k === 'a')) { this.add.focus(); this.add.showPicker?.(); }
    else if (!mod && (k === 'f' || k === 'F')) this.frame();
    else if (k === 'Escape' && (this.sel.size || this.selLink >= 0)) { this.sel.clear(); this.selLink = -1; this.markSel(); }
    else if (k.startsWith('Arrow') && this.sel.size && !mod) {
      const s = e.shiftKey ? 1 : 10, dx = k === 'ArrowLeft' ? -s : k === 'ArrowRight' ? s : 0, dy = k === 'ArrowUp' ? -s : k === 'ArrowDown' ? s : 0;
      this.commit('shading.ed.undo_move', () => { for (const id of this.sel) { const n = this.node(id); n.x += dx; n.y += dy; } });
    } else used = false;
    if (used) { e.preventDefault(); e.stopPropagation(); }
  }
}
