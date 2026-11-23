/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Energy code check add-on (0.11 Track T24, add-on API 1.4). The same file in every host; the app's own part is host.js.
 * Off until the person switches it on (Settings › Add-ons). The engine and the panel are lib/ (a byte-identical copy of lib/energycode,
 * `node tools/energy-code/sync.mjs`). The code's numbers are not in the code: packs/<id>.json is made from the authority's documents
 * (`node tools/energy-ca/make-pack.mjs`). Nothing is sent anywhere.
 */
import { cleanPack } from './lib/pack.js';
import { mountPanel, rowText } from './lib/panel.js';
import { energyProblems } from './lib/problems.js';
import { makeHost } from './host.js';

const PACKS = ['us-ca-2025'];

function download(name, text, type = 'text/plain') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 30000);
}

export async function activate(api) {
  const c = cleanPack(await (await fetch(api.url('packs/' + PACKS[0] + '.json'))).json());
  if (!c.ok) throw new Error('energy code pack: ' + c.errors.slice(0, 3).join('; '));
  // the words CBECC's project file uses (made from the program's own word lists; absent = the panel offers no project file)
  let words = null;
  try { const r = await fetch(api.url('packs/' + PACKS[0] + '.cbecc.json')); if (r.ok) words = await r.json(); } catch { words = null; }
  const host = makeHost(api, c.pack);
  const ctx = { api, host, pack: c.pack, panel: null };
  // T24.9: the rows that do not meet their figure are shared Problems (a build without the Problems panel gets an inert handle)
  const problems = api.problems ? api.problems.source({ id: 'envelope', kind: 'check', label: api.t('ec.name') }) : null;
  api.ui.panelTab({
    id: 'energy-code', title: api.t('ec.name'),
    render: (body) => {
      const root = document.createElement('div');
      root.setAttribute('data-ec-panel', '');
      body.append(root);
      ctx.panel = mountPanel(root, { t: api.t, pack: c.pack, storage: api.storage, download, read: host.read, settings: host.settings, writeWallU: host.writeWallU, writeRoofU: host.writeRoofU, writeFloorU: host.writeFloorU, problems: (res) => { try { problems && problems.set(energyProblems(res, api.t, rowText)); } catch { /* the Problems panel is not there */ } }, words, modelName: () => api.model.current()?.name || '' });
    },
  });
  // an edit, Undo or Redo: the panel reads the model's facts again; another file opened: it starts over from that drawing's own statements
  let name = api.model.current()?.name ?? null;
  const off = api.model.onChange(() => {
    if (!ctx.panel) return;
    const now = api.model.current()?.name ?? null;
    if (now !== name) { name = now; ctx.panel.refresh(); } else ctx.panel.modelChanged();
  });
  window.ccEnergyCode = ctx;   // the tests and a lab pass reach the add-on here
  api.onDeactivate(() => { try { off && off(); ctx.panel && ctx.panel.unmount(); } catch { /* the tab is gone already */ } if (window.ccEnergyCode === ctx) delete window.ccEnergyCode; });
}
