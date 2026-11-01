/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: the panel tab builds with a minimal element tree (no browser): the not-a-design label is on it, the Problems list, the elevation
// drawing and the 3D view appear once a truss is designed and laid out, and the Problems source receives the set.
const { ok, section, mine, ADDON } = globalThis.__trussTest;
import fs from 'node:fs';
import path from 'node:path';

section('TrussCraft panel (stand-in elements)');
const CORE = await mine('lib/core.js');
const main = await mine('main.js');
const en = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));
const tr = CORE.lookupFrom(en);
const mk = (tag) => ({ tag, kids: [], attrs: {}, listeners: {}, append(...k) { this.kids.push(...k); }, setAttribute(k, v) { this.attrs[k] = v; }, addEventListener(ev, fn) { this.listeners[ev] = fn; }, replaceChildren() { this.kids = []; }, set innerHTML(v) { this._html = v; }, get innerHTML() { return this._html || ''; }, set className(v) { this.attrs.class = v; }, click() {}, remove() {} });
const doc = { createElement: mk, body: mk('body') };
const text = (n) => (typeof n === 'string' ? n : [n._html || '', ...(n.kids || []).map(text)].join(' '));
const store = new Map(), pushed = [];
let render = null, status = '';
const api = {
  t: tr, storage: { get: (k) => (store.has(k) ? store.get(k) : undefined), set: (k, v) => store.set(k, v) }, status: (s) => { status = s; },
  commands: { add: () => {} }, files: { exporter: () => {} }, ui: { panelTab: (o) => { render = o.render; } },
  problems: { source: () => ({ set: (list) => pushed.push(list) }) },
  model: { read: () => [], write: undefined, current: () => null },
};
const handle = main.activate(api);
const pane = mk('section'); pane.ownerDocument = doc;
render(pane);
ok(/Not a substitute for engineered truss design/.test(text(pane)) && /Truss type/.test(text(pane)), 'the empty panel has the label and the form');
handle.layout();
ok(pushed.length >= 1 && pushed.at(-1)[0].code === 'notdesign' && pushed.at(-1).some((p) => p.code === 'defaults'), 'laying out hands the shell the Problems set (label first)');
pane.replaceChildren(); render(pane);
const all = text(pane);
ok(/<svg/.test(all) && /Truss elevation: fink/.test(all) && /Span 8000 mm/.test(all), 'after a layout the elevation drawing is on the panel');
ok(/21 trusses/.test(all), 'and the layout summary');
const kids = (n) => [n, ...(n.kids || []).flatMap((k) => (typeof k === 'string' ? [] : kids(k)))];
ok(kids(pane).some((n) => n.attrs && 'data-trs-3d' in n.attrs) && kids(pane).some((n) => n.attrs && 'data-trs-drawing' in n.attrs), 'the 3D view and the drawing blocks are present');
ok(/err\.write|cannot write into the model/.test(all) && !/Place in the model/.test(all), 'without model.write the panel says so instead of offering Place');
void status;
