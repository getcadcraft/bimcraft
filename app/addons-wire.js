/* SPDX-License-Identifier: Apache-2.0 */
/**
 * addons-wire.js: bimcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountAddonsWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { startAddons } from './addons/bimcraft-api.js';
import { createCommands } from './workspace/commands.js';
import { t } from './i18n.js';
import { createBimcraftWorkspace } from './workspace-bimcraft.js';
import { mountWorkspaces } from 'cc-workspace';

export function mountAddonsWire(ctx) {
  const { ST, ui, status, guard, redo, act, classOfId, showTab, afterEdit, addonSelection, tagLast, renderAddonExports, saveIfc, undo, entryOf, cur, open, unsavedIn, openHost, fileHost, IFC_TYPES, afterPick, showProps, keysOfGuid, clearProps, showMany, library, root } = ctx;

  // ---- Add-ons (0.5 AO.7; addons/bimcraft-api.js is session `addons`' module, docs/ADDONS-SPEC.md §5.7). BimCraft runs its
  // own loader (manifest "addons": "own"): add-ons get the open IFC model, the pick, one-undo-step edits, commands, sections
  // in Properties, tabs on the right, importers (a file → IFC) and exporters (buttons beside Save as IFC). An add-on that
  // fails never stops BimCraft. ----
  // Only when the manifest says "addons": "own": then app-shell.inc prints no #cc-addons and the shell's generic loader stays
  // away. Until then the shell's loader runs as before and this stays off (the build needs its addons/index.json first).
  // 0.7 API 1.1 (mep-07): an add-on's model.write goes through the Draw module as the assistant tools' edits do (agents.js): the
  // plan and the 3D view follow, a click made while the model reloads waits its turn; a refusal rejects the add-on's promise
  const addonDraw = ST.modelUi ? ST.modelUi.extend({ tools: [] }) : null;
  async function addonWrite(run, meta) {
    if (!ST.editor || ST.mode !== 'ifc') throw new Error('no IFC model is open');   // i18n-ignore: an add-on's error
    if (!addonDraw) { const r = ST.editor.modelChange(run, { label: meta.label, verb: '' }); afterEdit(); return r; }
    const settle = async () => { const t0 = Date.now(); while ((addonDraw.S.busy || addonDraw.S.reloading || addonDraw.S.queue?.length) && Date.now() - t0 < 60000) await new Promise((r) => setTimeout(r, 50)); };
    await settle();
    let res = null, err = null;
    // the add-on's own throw rejects its promise; the Draw module only shows it on the status line (a keyed refusal, not a fault)
    addonDraw.commit((ed) => { try { res = run(ed); return res; } catch (e) { err = e; throw Object.assign(new Error('model.err.failed'), { key: 'model.err.failed', fill: { why: meta.label + ': ' + (e.message || e) } }); } }, { label: meta.label, verb: '' });
    if (err) throw err;
    await settle();
    return res;
  }
  if (!document.getElementById('cc-addons')) startAddons({
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    model: () => (ST.mode === 'ifc' && ST.model ? ST.ifc : null),
    loadResult: () => (ST.mode === 'ifc' && ST.model ? ST.model : null),   // 0.11 SU.1816: the batches, for api.model.triangles
    name: () => ST.ifcName,
    selection: addonSelection,
    select: (ids) => {
      if (!ST.viewer || ST.mode !== 'ifc' || !ST.model) return;
      ST.viewer.select(ids.map((id) => (ST.model.keyBase || 0) + Number(id)));
      afterPick();
      if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps();
    },
    afterEdit: (label) => { tagLast(label); afterEdit(); },
    versionOf: (id) => { try { return window.ccAddonsFile?.stamp({}, [id])?.addons?.[id] || ''; } catch (e) { return ''; } },   // 0.8 AL.6: the account's version of the add-on, else its manifest's
    write: addonWrite,   // 0.7 API 1.1 (mep-07): model.write, one undo step through the Draw module
    status: (text) => status(text),
    openIfc: (bytes, name) => open(new File([bytes], name), null),
    find: (sel) => root.querySelector(sel),
    showTab: (k) => showTab(k || 'props'),
  }).then((a) => {
    ST.addons = a;
    // the Open picker offers the add-ons' importer extensions too (the picker filters by accept)
    const baseAccept = ui.file.getAttribute('accept') || '';
    const sync = () => { renderAddonExports(); const ext = [...new Set(a.importers().flatMap((x) => x.extensions || []))]; ui.file.setAttribute('accept', [baseAccept, ...ext].filter(Boolean).join(',')); };
    a.onChange(sync); sync();
  })
    .catch((e) => console.warn('add-ons did not start:', e));   // i18n-ignore: a console note

  // The docked-ribbon workspace (Doc's F28; Settings › Global › Layout › Workspace). Both startup paths call this same mount
  // after every extension is installed; workspace.js switches itself on when it is the chosen layout.
  if (ST.modelUi && ST.planViews) {
    ST.coreCommands = createCommands({
      t,
      state: () => ST.workspace?.state() || {
        document: ST.mode === 'ifc' ? ST.editor : null, busy: ST.busy, dirty: unsavedIn(ST.editor),
        canUndo: !!ST.editor?.changes.length, canRedo: !!ST.editor?.canRedo,
        selection: ST.viewer ? [...ST.viewer.selection] : [], levels: [], view: null,
      },
      explain: (why) => status(why),
      actions: {
        open: () => fileHost.kind === 'desktop'
          ? guard(async () => { const [hf] = await fileHost.openFile({ types: IFC_TYPES }); await openHost(hf); })
          : ui.file.click(),
        save: () => guard(saveIfc), undo, redo,
        select: () => ST.workspace.selectTool(),
        clear: () => act('select-none'),
        three: () => ST.workspace.activate3d(), plan: () => ST.workspace.activatePlan(),
        range: () => ST.workspace.openRange(),
        detail: (detail) => ST.workspace.setSettings({ detail }), scale: (scale) => ST.workspace.setSettings({ scale }),
        fit: () => ST.workspace.fit(),
        wall: () => ST.workspace.startWall(), assembly: () => ST.workspace.editType(), structure: () => ST.workspace.editStructure(),
        cancel: () => ST.workspace.cancelWall(false), finish: () => ST.workspace.cancelWall(true),
      },
    });
    const wsCurrent = () => ({ editor: ST.mode === 'ifc' ? ST.editor : null, name: ST.mode === 'dwg' ? ST.dwgOpen?.fileName || '' : ST.ifcName, busy: ST.busy || !!ST.placing, placing: !!ST.placing,
      dirty: unsavedIn(ST.editor), canUndo: !!ST.editor?.changes.length, canRedo: !!ST.editor?.canRedo,
      selection: ST.viewer ? [...ST.viewer.selection] : [], viewer: ST.viewer, mode: ST.mode, pick: wsPick, kindsOf: wsKinds });
    // 0.11 UI.25 (ccState): refs → viewer keys (a key number, 'key:<n>', or an IFC GlobalId as a Problems line has it), and the IFC class words of a selection
    function wsKeys(refs) {
      const out = [];
      for (const r of refs) { const n = Number(r.id); if ((r.kind === 'key' || !r.kind) && r.id !== '' && Number.isInteger(n) && entryOf(n)) out.push(n); else out.push(...keysOfGuid(r.id)); }
      return [...new Set(out)];
    }
    function wsPick(refs, frame) {
      if (!ST.viewer || ST.mode !== 'ifc') return false;
      const keys = wsKeys(refs); if (!keys.length) return false;
      ST.viewer.select(keys); afterPick(); if (keys.length > 1) showMany(); else showProps(keys[0]);
      if (frame) ST.viewer.frameKeys(keys);
      return true;
    }
    function wsKinds(keys) {
      return [...new Set(keys.map((k) => { const e = entryOf(k); const c = e === cur() ? classOfId(k - ST.model.keyBase) : e?.model.classOf.get(k - e.model.keyBase); return c ? String(c).replace(/^Ifc/, '').toLowerCase() : ''; }).filter(Boolean))];
    }
    // the layouts (Settings › Global › Layout): the shell's engine builds a layout file's blocks, workspace-bimcraft.js fills them
    const bw = createBimcraftWorkspace({ root, modelUi: ST.modelUi, views: ST.planViews, commands: ST.coreCommands, props: ui.props, current: wsCurrent, status, statusEl: ui.status });
    ST.workspace = bw.api;
    const engine = mountWorkspaces(bw.adapter);
    bw.api.attach(engine); engine.refresh();
    window.bimcraftWorkspace = Object.freeze({ snapshot: ST.workspace.inspect, commands: () => ST.coreCommands.ids.map(ST.coreCommands.describe), engine });
    ST.toolbox = { refresh: () => engine.refresh() };
    window.bimcraftToolbox = Object.freeze({ get active() { return engine.has('toolbox'); }, refresh: () => engine.refresh(),
      use: (on) => window.ccShellWorkspace?.set(on ? 'toolbox' : 'standard'), inspect: () => engine.inspect() });   // for tests and the console
  } else document.documentElement.removeAttribute('data-cc-ws-boot');   // no layouts without the Draw extension: show the page (app-shell.inc)

  // ?library=<uuid>: open the panel on that item.
  const deep = new URLSearchParams(location.search).get('library');
  if (ctx.libraryOn && deep && /^[0-9a-f-]{36}$/i.test(deep)) { ST.libraryLoaded = true; showTab('library'); library.open(deep); }
}
