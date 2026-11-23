/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Dome generator add-on (0.11 DOME.1-DOME.3, add-on API 1.4). The same file in every host; the app's own part is host.js.
 * Off until the person switches it on (Settings › Add-ons). The engine and the panel are lib/ (a byte-identical copy of lib/dome,
 * `node tools/dome/sync.mjs`). Norm values are not in here: the spec side add-ons (dome-spec-us, dome-spec-eu) put their packs on the page.
 * Nothing is sent anywhere.
 */
import { mountPanel } from './lib/panel.js';
import { makeHost } from './host.js';

function download(name, text, type = 'text/plain') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 30000);
}

export function activate(api) {
  const host = makeHost(api);
  let source = null;
  try { if (api.problems && typeof api.problems.source === 'function') source = api.problems.source({ id: 'dome', label: api.t('dome.name') }); } catch { source = null; }
  const ctx = { api, host, panel: null };
  api.ui.panelTab({
    id: 'dome', title: api.t('dome.name'),
    render: (body) => {
      const root = document.createElement('div');
      root.setAttribute('data-dome-panel', '');
      body.append(root);
      ctx.panel = mountPanel(root, { t: api.t, storage: api.storage, download, problems: source, actions: host.actions, notes: host.notes, position: true });
    },
  });
  window.ccDome = ctx;   // the tests and a lab pass reach the add-on here
  api.onDeactivate(() => { try { ctx.panel && ctx.panel.unmount(); } catch { /* the tab is gone already */ } if (window.ccDome === ctx) delete window.ccDome; });
}
