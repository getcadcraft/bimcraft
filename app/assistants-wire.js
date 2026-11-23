/* SPDX-License-Identifier: Apache-2.0 */
/**
 * assistants-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountAssistantsWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { bimTools } from './bim-agent.js';
import { t } from './i18n.js';

export function mountAssistantsWire(ctx) {
  const { ST, $, ui, status, cur, entryOf, unsavedIn, settings, fileHost, syncVis, renderAssist, visAct, afterPick, index, treeView, showProps, keysOfGuids, renderClash, runClash, models, nameOfKey, clearProps, showMany } = ctx;

  // ---- Assistants and scripts (0.4 X.7; bim-agent.js, AGENTS-SPEC §5.2/§6.3): the open model's elements through
  // host.control — find, isolate / ghost / hide / show all (the Show menu's own calls), properties. Studio routes an
  // assistant's calls here only while Settings › Assistants allows them (stored in bimcraft.settings `assistants`).
  for (const def of bimTools({
    index: () => (ST.mode === 'ifc' && ST.model ? index() : null),
    name: () => ST.ifcName,
    properties: (k) => { const m = cur(); return m.ifc.properties(k - m.model.keyBase); },
    visibility: (how, keys) => {
      const v = ST.viewer.vis;
      if (how === 'show_all') v.showAll();
      else if (how === 'hide') { v.hide(keys); ST.viewer.select(null); ST.selected = null; ST.pickToken++; clearProps(); }
      else v.isolate(keys, { ghost: how === 'ghost' });
      ST.viewer.applyVisibility();
      syncVis();
      status(how === 'show_all' ? t('vis.shown.all') : how === 'hide' ? t('vis.hidden.count', { n: keys.length, total: v.hidden.size }) : t(how === 'ghost' ? 'vis.ghosted' : 'vis.isolated', { n: keys.length }));
      return { hidden: v.hidden.size };
    },
  })) fileHost.control.tool(def);
  $('[data-assist-disconnect]')?.addEventListener('click', () => { fileHost.control.disconnect(); renderAssist(); status(t('assist.disconnected')); });
  fileHost.control.on('change', () => renderAssist());
  fileHost.control.configure({
    title: 'BimCraft', enabled: settings.assistants.enabled, groups: settings.assistants.groups,   // i18n-ignore: the product name
    info: () => ({ model: ST.mode === 'ifc' ? ST.ifcName || null : null, elements: ST.mode === 'ifc' && ST.model ? ST.model.elements : 0, unsaved: models.some((m) => unsavedIn(m.editor)) }),
    busy: () => (ST.busy ? 'opening or saving a file' : ST.placing ? 'placing a library item' : null),   // i18n-ignore: read by the assistant
  });
  window.bimcraftControl = fileHost.control;   // for tests and the console
  renderAssist();

  /** For tests and the console: the key of the first element with this Name in the open model. */
  window.bimcraftKeys = (name, mi = null) => {
    if (!ST.model) return null;
    for (const m of (mi === null ? [cur()] : models.filter((x) => x.mi === mi))) {
      for (const id of m.model.classOf.keys()) if (m.ifc.api.GetLine(m.model.modelID, id).Name?.value === name) return m.model.keyBase + id;
      const st = m.model.storeys.find((x) => x.name === name);
      if (st) return m.model.keyBase + st.id;
    }
    return null;
  };
  window.bimcraftVis = { act: visAct, state: () => ST.viewer?.vis.toJSON(), pick: (keys) => { ST.viewer.select(keys); if (ST.viewer.selection.size > 1) showMany(); else showProps(ST.viewer.selected); afterPick(); } };   // for tests
  // BK.128 / BK.45 (Super's model layers, super-layers-ui.js): a host switches sets of elements off by GlobalId (apart from the person's own Hide), reads
  // which elements the view holds, and names sets the clash check can run between. Inert until a host calls it.
  window.bimcraftLayerSets = {
    all: () => { if (!ST.viewer || ST.mode !== 'ifc') return []; const out = []; for (const m of models) for (const [id, c] of m.model.classOf) { const g = m.ifc.api.GetLine(m.model.modelID, id).GlobalId?.value; if (g) out.push({ guid: g, cls: c }); } return out; },
    count: () => { let n = 0; for (const m of models) n += m.model.classOf.size; return n; },
    keysOf: keysOfGuids,
    guidOf: (key) => { const e = entryOf(key); return e ? e.ifc.api.GetLine(e.model.modelID, key - e.model.keyBase).GlobalId?.value || null : null; },
    off: (guids) => { if (!ST.viewer) return 0; ST.guidKeys = null; const keys = keysOfGuids(guids); if (ST.viewer.vis.setOff(keys)) { ST.viewer.applyVisibility(); syncVis(); if (ST.tree) treeView.sync(); } return keys.length; },
    offKeys: () => (ST.viewer ? [...ST.viewer.vis.off] : []),
    sources: (list) => { ST.hostSets = (Array.isArray(list) ? list : []).filter((h) => h && typeof h.value === 'string' && Array.isArray(h.guids)).map((h) => ({ value: h.value, label: String(h.label || h.value), guids: h.guids })); if (ui.clashDetails?.open) renderClash(); return ST.hostSets.length; },
    /** Check two named sets against each other with the clash check as it is → Promise<[{ a, b (GlobalIds), an, bn (names), depth }]> (null when it could not run). */
    check: async (a, b, tol = 0.01) => {
      if (!ST.viewer || ST.mode !== 'ifc' || ST.clashRun) return null;
      ST.clashA = 'host:' + a; ST.clashB = 'host:' + b; ST.clashTol = String(tol); ST.clashRes = null;
      await runClash();
      for (let i = 0; i < 1200 && ST.clashRun; i++) await new Promise((r) => setTimeout(r, 100));
      if (ST.clashRun || !ST.clashRes) return null;
      const g = window.bimcraftLayerSets.guidOf;
      return ST.clashRes.map((c) => ({ a: g(c.a), b: g(c.b), an: nameOfKey(c.a), bn: nameOfKey(c.b), depth: c.depth }));
    },
  };
}
