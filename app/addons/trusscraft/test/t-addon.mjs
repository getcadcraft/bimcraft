/* SPDX-License-Identifier: Apache-2.0 */
// Part of test.mjs: TrussCraft in BimCraft through the real loader and add-on API (stand-in model): bundled and off, switched on, its four commands
// and five exports, a truss designed and laid out from the command, Problems handed to the shell when it has them, the exports' contents, and
// switched off everything goes.
const { ok, section, DEV } = globalThis.__trussTest;
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

globalThis.document ??= { querySelector: () => null, querySelectorAll: () => [], getElementById: () => null };
const imp = (f) => import(pathToFileURL(path.join(DEV, f)).href);
const i18n = await imp('i18n.js');
i18n.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(path.join(DEV, 'lang/en.json'), 'utf8')) });
const A = await imp('addons.js');
const BA = await imp('addons/bimcraft-api.js');

section('TrussCraft in BimCraft (add-on API 1.3, stand-in model)');
const mem = new Map();
const storage = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, String(v)), removeItem: (k) => mem.delete(k) };
let status = '';
const started = await BA.startAddons({
  editor: () => ({ save: () => new Uint8Array([1]) }), model: () => ({ properties: async () => null }), name: () => 'house.ifc', selection: () => [], select: () => {},
  afterEdit: () => {}, status: (s) => { status = s; }, openIfc: async () => {},
  base: pathToFileURL(path.join(DEV, 'addons') + '/').href, importer: (u) => import(u), storage, verify: async () => false, bundledOnly: false, noGlobal: true,
  fetchJson: async (u) => (/\/index\.json$/.test(u) ? { addons: ['trusscraft'] } : (() => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } })()),
  packages: A.packageStore(null),
});
const me = () => started.list().find((a) => a.id === 'trusscraft');
ok(me()?.state === 'off' && me().source === 'bundled', 'TrussCraft is bundled and starts off', JSON.stringify(me() && [me().state, me().reason, me().detail]));
await started.loader.setEnabled('trusscraft', true);
ok(me()?.state === 'active', 'switched on: active', JSON.stringify(me() && [me().state, me().reason, me().detail]));
ok(started.commandList().map((c) => c.key).sort().join() === 'trusscraft:check,trusscraft:design,trusscraft:layout,trusscraft:place', 'its four commands are listed');
ok(started.exporters().length === 9 && started.exporters().some((e) => e.id.endsWith('elevation-svg')), 'nine exports (five lists and drawings, jig, stock plan, STL, OBJ)', started.exporters().map((e) => e.id).join());
ok(started.panelTabs().some((t) => t.title === 'Trusses'), 'a "Trusses" panel tab');

started.runCommand('trusscraft:design');
await new Promise((r) => setTimeout(r, 20));
ok(/fink truss: top chord 2x\d+/.test(status) && /members/.test(status), 'design says the type and the sizes', status);
started.runCommand('trusscraft:layout');
await new Promise((r) => setTimeout(r, 20));
ok(/21 trusses/.test(status) && /8000/.test(status), 'layout on the default outline (12 × 8 m): 21 trusses, span 8000', status);
started.runCommand('trusscraft:check');
await new Promise((r) => setTimeout(r, 20));
ok(/findings in Problems/.test(status), 'check reports its findings', status);
started.runCommand('trusscraft:place');
await new Promise((r) => setTimeout(r, 40));
ok(/Choose a roof from the model/.test(status), 'place with only a typed outline says to choose a roof from the model', status);

const ex = (id) => started.exporters().find((e) => e.id.endsWith(id));
const mem1 = await ex('members-csv').write(started.exportInput());
ok(typeof mem1 === 'string' && mem1.startsWith('mark,role,size') && /Not a substitute for engineered truss design/.test(mem1), 'the member list CSV, with the label');
const cut = await ex('cuts-csv').write(started.exportInput());
ok(/qty_total/.test(cut) && /,21,/.test(cut), 'the cut list CSV counts 21 trusses of this span');
const jt = await ex('joints-csv').write(started.exportInput());
ok(/INDICATIVE|beyond/.test(jt), 'the joint schedule CSV is marked indicative');
const lay = await ex('layout-csv').write(started.exportInput());
ok(lay.split('\r\n').filter((l) => /^T\d+,/.test(l)).length === 21, 'the layout CSV has a row per truss');
const svg = await ex('elevation-svg').write(started.exportInput());
ok(svg.startsWith('<svg') && /Truss elevation/.test(svg) && /Not a substitute/.test(svg), 'the elevation SVG, with the label');

// the panel renders into a fake pane (no DOM here: a minimal element tree) without throwing
const mk = (tag) => { const n = { tag, kids: [], attrs: {}, style: {}, children: [], append(...k) { this.kids.push(...k); }, setAttribute(k, v) { this.attrs[k] = v; }, addEventListener() {}, replaceChildren() { this.kids = []; }, set innerHTML(v) { this.html = v; }, get innerHTML() { return this.html || ''; }, ownerDocument: null }; return n; };
const doc = { createElement: mk, body: mk('body') };
const pane = mk('section'); pane.ownerDocument = doc;
const tab = (globalThis.window ??= undefined, started.panelTabs().find((t) => t.title === 'Trusses'));
ok(!!tab, 'the tab is registered with the loader');
await started.loader.setEnabled('trusscraft', false);
ok(!started.commandList().length && !started.exporters().length && !started.panelTabs().length, 'switched off: commands, exports and the tab are gone');
