/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the 3D Print add-on for BimCraft (roadmap PS.7; docs/PRINTSTAGE-HOST-CONTRACT.md) on the shared add-on API: a "Print stage" tab in the right panel and a
 * toolbar button. The IFC elements the person picks (or everything shown) lie on the printer's bed beside the model and go to the printer through the same slicer and
 * printer add-ons as ModelCraft and PartCraft. Everything loads on first use; BimCraft's own code is not changed. print-host.js and bodies.js are this app's side,
 * lib/printstage's copy in printstage/ the rest. The 3D view is the page's Viewer3D, found on its canvas (as the Point clouds add-on finds it).
 */
const MORE = [{ addon: 'slicer-kiri', engine: 'kiri', name: 'Kiri:Moto' }, { addon: 'slicer-prusaslicer', engine: 'prusaslicer', name: 'PrusaSlicer' }, { addon: 'slicer-orcaslicer', engine: 'orcaslicer', name: 'OrcaSlicer' }];
const tag = (name, props = {}, ...kids) => {
  const node = document.createElement(name);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'dataset') Object.assign(node.dataset, v);
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else if (k in node && k !== 'list') node[k] = v;
    else node.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat()) if (c != null && c !== false) node.append(c);
  return node;
};
const findViewer = () => { for (const c of document.querySelectorAll('canvas')) if (c.viewer && c.viewer.renderer) return c.viewer; return null; };

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  let stage = null, loading = null;
  const show = () => document.querySelector('[data-rtab="addon-print3d-stage"]')?.click();
  const nameOf = (key, eid, cls) => {
    try { return api.model.read((w) => { const l = w.api.GetLine(w.mid, eid, false); const n = l && l.Name && l.Name.value; return n ? String(n) : null; }) || cls; } catch { return cls; }
  };
  async function mount(pane) {
    if (!stage) {
      loading ||= (async () => {
        const THREE = await import('three');
        const { mountPrintStage } = await import('./print-host.js');
        stage = mountPrintStage({
          pane, bim: { viewer: findViewer, nameOf }, THREE, t, el: tag, print: (m) => api.status?.(m), fileName: () => api.model.current()?.name || 'model',
          load: (k) => api.storage.get(k), save: (k, v) => api.storage.set(k, v),
          moreLinks: () => {
            const reg = window.ccAddons?.loader;
            return reg?.setEnabled && !(window.ccPrintLinks || []).some((l) => l.id === 'bambu-p2s') ? [{ addon: 'printer-bambu', name: 'Bambu Lab P2S', add: () => reg.setEnabled('printer-bambu', true) }] : [];
          },
          moreSlicers: () => {
            const reg = window.ccAddons?.loader, on = new Set((window.ccPrintSlicers || []).map((d) => d.id));
            return reg?.setEnabled ? MORE.filter((m) => !on.has(m.engine)).map((m) => ({ ...m, add: () => reg.setEnabled(m.addon, true) })) : [];
          },
        });
        window.ccBimcraftPrint = stage;   // the checks' handle
      })();
      await loading; loading = null;
    }
    return stage;
  }
  api.ui.panelTab({
    id: 'stage', title: t('ui.printstage'),
    render: async (el) => { el.replaceChildren(tag('p', { className: 'bc-note' }, t('ps.title'))); const s = await mount(el); if (s) s.open(); },
  });
  try { api.ui.toolbarGroup({ id: 'print3d', label: t('ps.title'), tools: [{ id: 'stage', label: t('ui.printstage'), icon: 'bi-printer', title: t('ui.printstage.title'), run: show }] }); } catch { /* the tab is enough */ }
  api.onDeactivate(() => { stage?.dispose(); stage = null; delete window.ccBimcraftPrint; });
}
