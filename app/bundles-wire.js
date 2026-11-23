/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bundles-wire.js: bimcraft.js's 11 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountBundlesWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { mountBundle } from './bundle-view.js';
import { newHandoffId, putHandoff } from './handoff.js';
import { mountAnalysisBim } from './analysis-bim-ui.js';
import * as WebIFC from './ifc/api.js';
import { toViewer } from './ifc-place.js';
import { mountFieldPoints } from './layout-bim-ui.js';
import { mountAssets } from './assets-bim-ui.js';
import { mountTags } from './tags-ui.js';
import { mountPhases } from './phases-ui.js';
import { mountPermit } from './permit-ui.js';
import { mountIssues } from './issue-ui.js';
import { mountStages } from './stages/stages-ui.js';
import { IfcModel } from './ifc-model.js';
import { listTemplates, getTemplate } from './template-store.js';
import { readCostSettings, costTotal } from './cost5d.js';
import { ModelWriter } from './model-write.js';
import { mountMepCalc } from './mep-calc-ui.js';
import { t } from './i18n.js';
import { mountEnergyEp } from './energy-ep-ui.js';
import { mountCarbon } from './carbon-ui.js';
import { mountCost5d } from './cost5d-ui.js';
import { mountPv } from './pv-ui.js';
import { carbonTotal } from './carbon-calc.js';
import { scheduleHours } from './shell-mount.js';
import { mountFurnish, mountProgram } from './design-ui.js';
import { mountMassOptions } from './mass-options-ui.js';
import { mountPeople } from './people-ui.js';
import { mountAcoustics } from './acoustics-ui.js';
import { mountHazard } from './hazard-ui.js';
import { mountLifecycle } from './lifecycle-ui.js';
import { mountDaylight } from './daylight-bim-ui.js';
import { mountInterop } from './interop-view.js';

export function mountBundlesWire(ctx) {
  const { ST, ui, status, guard, download, coordMatrix, rebuild, afterEdit, cur, toWorld, open, syncVis, afterPick, index, openIfc, showProps, renderQto, models, clearProps, showMany, rPanel, root } = ctx;

  // ---- Project bundles (0.6 DF.12 (b), session bim-interop; bundle-view.js): views, layouts, property groups ----
  ST.bundleUi = mountBundle({
    panel: ui.info,
    status,
    mode: () => ST.mode,
    openModel: (data, file) => openIfc(data, file, null),
    openFile: (file) => open(file, null, { keepBundle: true }),
    // 0.7 BIM-BUNDLE-OPEN: a layout's DWG to the drafting app, its PDF to the markup app (only where that app is open here and takes a handoff)
    apps: { dwg: root.dataset.editUrl ? { url: root.dataset.editUrl, name: root.dataset.editApp } : null, pdf: root.dataset.pdfUrl ? { url: root.dataset.pdfUrl, name: root.dataset.pdfApp } : null },
    // the tab opens inside the click (pop-up blockers), the file is read from the zip while it loads: handoff.js's own two steps
    handoff: async (app, getFile) => {
      const id = newHandoffId(), tab = window.open(app.url + '?handoff=' + id, '_blank');
      if (!tab) throw Object.assign(new Error('The browser blocked the new tab.'), { code: 'blocked' });   // i18n-ignore: only e.code is shown
      try { await putHandoff(id, await getFile(), 'bimcraft'); } catch (e) { tab.close(); throw e; }
      return tab;
    },
    download,
    viewer: () => ST.viewer,
    model: cur,
    afterVis: syncVis,
  });
  window.bimcraftBundle = ST.bundleUi;   // tests
  // 0.6 LC.4 (analysis-bim-ui.js): frame analysis of the open model's beams, columns and braces — settings kept in the IFC
  ST.analysisUi = mountAnalysisBim({
    pane: rPanel.querySelector('[data-analysis]'), W: WebIFC,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    viewer: () => ST.viewer,
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps(); },
    status: (text, isError) => status(text, isError),
    download,
    fileName: () => ST.ifcName,
    afterEdit,
    place: (p) => toWorld(toViewer(coordMatrix(), p)),
    shown: () => !rPanel.querySelector('[data-rpane="analysis"]')?.hidden,
    setFrameProblems: (list) => { ST.frameProblems = list; ST.frameSet?.(list); },   // 0.8 SU.1056
    setBreakProblems: (list) => { ST.breakProblems = list; ST.breakSet?.(list); },   // 0.8 EG.31: "What breaks first?" findings in the shell's Problems
  });
  window.bimcraftAnalysis = ST.analysisUi;   // tests
  // 0.6 LC.22 (layout-bim-ui.js): field points from the model, written for a total station; as-built points compared
  ST.pointsUi = mountFieldPoints({
    pane: rPanel.querySelector('[data-points]'), W: WebIFC,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    viewer: () => ST.viewer,
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    status: (text, isError) => status(text, isError),
    download,
    fileName: () => ST.ifcName,
    place: (p) => toWorld(toViewer(coordMatrix(), p)),
    shown: () => !rPanel.querySelector('[data-rpane="points"]')?.hidden,
  });
  window.bimcraftPoints = ST.pointsUi;   // tests
  // 0.6 LC.12 (assets-bim-ui.js): the model's assets, their data and a maintenance record, kept in the IFC
  ST.assetsUi = mountAssets({
    pane: rPanel.querySelector('[data-assets]'), W: WebIFC,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    viewer: () => ST.viewer,
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size) showProps(ST.viewer.selected); },
    status: (text, isError) => status(text, isError),
    download,
    fileName: () => ST.ifcName,
    saveBundle: () => ST.picturesUi?.saveBundle(),   // 0.10 BK.114: the handover list's Save as a project bundle
    afterEdit,
    shown: () => !rPanel.querySelector('[data-rpane="assets"]')?.hidden,
    storeyName: (id) => String((cur()?.model?.storeys || []).find((s) => s.id === id)?.name || ''),
    today: () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); },
  });
  window.bimcraftAssets = ST.assetsUi;   // tests
  // 0.8 SU.915 + SU.889 (session sx-tags; tags-ui.js, doc-ui.js): tags kept in the IFC, a schedule that reads them, documents from templates
  ST.tagsUi = mountTags({
    root, W: WebIFC,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    model: () => (ST.mode === 'ifc' ? ST.model : null),
    tasks: () => ST.fdTasks || [],   // 0.8 EG.17 (energy_PART_2's mount line 2): the parsed 4D tasks cost5d_check prices
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size) showProps(ST.viewer.selected); },
    status: (text, isError) => status(text, isError),
    download,
    fileName: () => ST.ifcName,
    afterEdit: () => { ST.propIx = null; afterEdit(); renderQto(); },   // the Quantities panel and Find see the new CadCraft_Tags values
  });
  window.bimcraftTags = ST.tagsUi;   // tests
  // 0.8 EG.59 (bim_PART_2; phases-ui.js): existing / demolish / new in the IFC, phase views, the demolition list
  ST.phasesUi = mountPhases({
    root, W: WebIFC,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    model: () => (ST.mode === 'ifc' ? ST.model : null),
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    status: (text, isError) => status(text, isError),
    download,
    fileName: () => ST.ifcName,
    afterEdit: () => { ST.propIx = null; afterEdit(); renderQto(); },
    applyView: (v) => {
      if (!ST.viewer) return;
      if (!v) ST.viewer.vis.showAll(); else ST.viewer.vis.isolate(v.show, { ghost: v.ghost.length > 0 });   // the rest is see-through when something is to be shown ghosted, else hidden
      ST.viewer.applyVisibility(); syncVis();
    },
  });
  window.bimcraftPhases = ST.phasesUi;   // tests
  // 0.8 EG.44 (bim_PART_2; permit-ui.js): the regulation check, the problems, sheets and forms into one zip with the comments a reviewer is likely to make
  const permitUi = mountPermit({ root, editor: () => (ST.mode === 'ifc' ? ST.editor : null), status: (text, isError) => status(text, isError), download, fileName: () => ST.ifcName, afterEdit });   // afterEdit: BK.109, the checklist's choices are edits (Undo, the changes list)
  root.querySelector('[data-eg44-details]')?.addEventListener('toggle', (e) => { if (e.target.open) permitUi?.render(); });
  window.bimcraftPermit = permitUi;   // tests
  const issuesUi = mountIssues({ root, editor: () => (ST.mode === 'ifc' ? ST.editor : null), model: () => ST.model, index, status: (text, isError) => status(text, isError), download, fileName: () => ST.ifcName, afterEdit,
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size) showProps(ST.viewer.selected); }, selection: () => (ST.viewer ? [...ST.viewer.selection] : []), openSheet: (id) => ST.viewsUi?.openSheet(id),
    presetSheets: () => { try { const rows = permitUi?.checklist?.forPackage()?.rows || []; const ids = [...new Set(rows.flatMap((r) => (r.by || []).filter((b) => b.kind === 'sheet').map((b) => b.id)))]; return ids.length ? ids : null; } catch (e) { return null; } } });   // 0.10 BK.46: a submission starts from the sheets the permit package's list is linked to
  root.querySelector('[data-issues-details]')?.addEventListener('toggle', (e) => { if (e.target.open) issuesUi?.render(); });
  // 0.10 stages-10 (landed by bim-core-10): Project stages (brief, options against the brief, type links, shop drawings, site instructions), a section after Issues
  {
    const ixGuid = () => { const ix = index(); return ix ? { ix, g: ix.values('guid') } : null; };
    const stKeysOf = (guids) => { const r = ixGuid(); if (!r) return []; const want = new Set(guids), out = []; for (const [id, g] of r.g) if (want.has(g)) out.push(r.ix.keyBase + id); return out; };
    const stGuidsOf = (keys) => { const r = ixGuid(); if (!r) return []; return keys.map((k) => r.g.get(k - r.ix.keyBase)).filter(Boolean); };
    mountStages({ after: root.querySelector('[data-issues-details]'), editor: () => (ST.mode === 'ifc' ? ST.editor : null), status: (text, isError) => status(text, isError), afterEdit,
      selection: () => stGuidsOf(ST.viewer ? [...ST.viewer.selection] : []), select: (g) => { if (!ST.viewer) return; ST.viewer.select(stKeysOf(g)); afterPick(); }, download, fileName: () => ST.ifcName, WebIFC, IfcModel,
      openNew: (bytes, name) => openIfc(bytes, new File([bytes], name, { type: 'application/x-step' })), templates: async () => (await listTemplates()), template: (id) => getTemplate(id),
      priceRows: () => { try { return ST.mode === 'ifc' && ST.editor ? readCostSettings(new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid)).rows : []; } catch (e) { return []; } },
      changes: (id) => issuesUi?.changes?.(id), issues: () => issuesUi?.history?.()?.issues || [] });
  }
  window.bimcraftIssueLog = issuesUi;   // tests   // its own name: window.bimcraftIssues is the BCF issues list (0.4), which this assignment had replaced
  // 0.8 EG.1–EG.4 (mep_PART_2; mep-calc-ui.js): pipe, duct, cable and lighting calculations in a right-panel tab; the sizes that fix a problem apply as ONE undo step
  const calcPane = rPanel.querySelector('[data-mepcalc]');
  if (calcPane) {
    ST.mepCalcUi = mountMepCalc(calcPane, {
      w: () => { if (!ST.editor || ST.mode !== 'ifc') throw new Error(t('mepc.needs-ifc')); return new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid); },
      apply: async (label, op) => { if (!ST.editor || ST.mode !== 'ifc') throw new Error(t('mepc.needs-ifc')); const r = ST.editor.modelChange(op, { label, verb: t('mepc.verb') }); ST.propIx = null; afterEdit(); renderQto(); return r; },
      problems: window.ccProblems,
      save: (name, text) => download(name, text, 'text/csv'),
    });
    window.bimcraftMepCalc = ST.mepCalcUi;   // tests
  }
  // 0.8 EG.13–EG.17 (energy_PART_2's mount line 1; mounted by bim-sim_PART_2): the EnergyPlus, embodied carbon, 5D cost and solar panes in one Energy tab.
  // They read the model's settings when they are made, so they are made when the tab is shown with a model open, and again for the next model.
  const energyPane = rPanel.querySelector('[data-energy]');
  ST.energyFor = null;
  ST.mountEnergy = () => {
    if (!energyPane || ST.mode !== 'ifc' || !ST.editor || !ST.model || (ST.energyFor === ST.model && ST.energyUis)) return;
    const needIfc = () => { if (!ST.editor || ST.mode !== 'ifc') throw new Error(t('mepc.needs-ifc')); };
    const energyApp = {
      w: () => { needIfc(); return new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid); },
      ed: () => { needIfc(); return ST.editor; },
      apply: async (label, op) => { needIfc(); const r = ST.editor.modelChange(op, { label, verb: t('energy.verb') }); ST.propIx = null; afterEdit(); renderQto(); return r; },
      problems: window.ccProblems,
      save: (name, text) => download(name, text, /\.json$/i.test(name) ? 'application/json' : /\.idf$/i.test(name) ? 'text/plain' : 'text/csv'),
      index: () => (ST.mode === 'ifc' && ST.model ? index() : null),
      tasks: () => ST.fdTasks || [],
    };
    const sub = (k) => { const n = energyPane.querySelector('[data-energy-' + k + ']'); n?.replaceChildren(); return n; };
    const one = (fn, k) => { try { return fn(sub(k), energyApp); } catch (err) { console.warn('energy pane ' + k, err); return null; } };
    ST.energyUis = { ep: one(mountEnergyEp, 'ep'), carbon: one(mountCarbon, 'carbon'), cost: one(mountCost5d, 'cost'), pv: one(mountPv, 'pv') };
    ST.energyFor = ST.model;
    window.bimcraftEnergy = ST.energyUis;   // tests
  };
  // 0.8 EG.30 (energy_PART_2 mount line 3; bim_PART_3): the model's embodied carbon and priced cost feed the shell's running totals. A source says
  // nothing (null) until there is a model with elements (carbon) or a price table (cost); the price table carries no currency, so the total says so.
  {
    const feed = () => {
      const T = window.ccTotals;
      if (!T || feed.done) return;
      feed.done = true;
      const wr = () => (ST.editor && ST.mode === 'ifc' && ST.model ? new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid) : null);
      const carbon = T.source({ id: 'bim.carbon', measure: 'carbon', label: t('totals.carbon'), read: () => { const w = wr(); if (!w) return null; const r = carbonTotal(w); return r.empty ? null : { value: r.kg, note: r.unmatched || r.missing ? t('totals.carbon.left', { n: r.unmatched + r.missing }) : undefined }; } });
      const cost = T.source({ id: 'bim.cost', measure: 'cost', label: t('totals.cost'), read: () => { const w = wr(); if (!w) return null; const cs = readCostSettings(w), rows = cs.rows; if (!rows.length) return null; const r = costTotal(w, { rows, matched: ST.fdTasks || [], keyBase: index()?.keyBase || 0 }); return { value: r.cost, currency: cs.shownIn, note: (cs.currencyDefaulted ? t('totals.cost.defaultcur', { cur: cs.shownIn }) : '') + (r.unpriced ? ' ' + t('totals.cost.unpriced', { n: r.unpriced }) : '') }; } });
      const time = T.source({ id: 'bim.time', measure: 'time', label: t('totals.time'), read: () => { const h = scheduleHours(ST.fdTasks); return h === null ? null : { value: h, note: t('totals.time.note') }; } });   // the 4D schedule as working time (shell-mount.js scheduleHours)
      ST.bimTotalsInvalidate = () => { carbon.invalidate(); cost.invalidate(); time.invalidate(); };
    };
    window.ccTotals ? feed() : document.addEventListener('cc-totals-ready', feed, { once: true });
  }
  // 0.8 EG.60 + EG.58 (bim_PART_2; design-ui.js): furnish a room by rules; a room program into massing options, built as levels, walls and slabs
  const designHost = { root, editor: () => (ST.mode === 'ifc' ? ST.editor : null), frameModel: () => ST.analysisUi?.frameModel?.() || null, viewer: () => ST.viewer, place: (p) => toWorld(toViewer(coordMatrix(), p)), status: (text, isError) => status(text, isError), download, fileName: () => ST.ifcName, afterEdit: () => { ST.propIx = null; afterEdit(); renderQto(); } };
  const furnishUi = mountFurnish(designHost), programUi = mountProgram(designHost);
  mountMassOptions({ ...designHost, programUi, keyBase: () => (ST.mode === 'ifc' && ST.model ? ST.model.keyBase || 0 : 0), afterEdit: () => { ST.propIx = null; return guard(() => rebuild(null)); } });   // 0.10 BK.44: the list under the program's options (mass-options-ui.js)
  root.querySelector('[data-eg60-details]')?.addEventListener('toggle', (e) => { if (e.target.open) furnishUi?.render(); });
  window.bimcraftFurnish = furnishUi;
  window.bimcraftProgram = programUi;   // tests
  // 0.8 EG.48 (bim-sim_PART_2; people-ui.js): evacuation and arrivals, queues at doors and stairs, a plan that plays the run
  const peopleUi = mountPeople({ ...designHost, problems: window.ccProblems });
  root.querySelector('[data-eg48-details]')?.addEventListener('toggle', (e) => { if (e.target.open) peopleUi?.render(); });
  window.bimcraftPeople = peopleUi;   // tests
  // 0.8 EG.49 (bim-sim_PART_2; acoustics-ui.js): reverberation by band for each room, a target, and listening through a computed impulse response
  const acousticsUi = mountAcoustics({ ...designHost, problems: window.ccProblems });
  root.querySelector('[data-eg49-details]')?.addEventListener('toggle', (e) => { if (e.target.open) acousticsUi?.render(); });
  window.bimcraftAcoustics = acousticsUi;   // tests
  // 0.8 EG.47 (bim-sim_PART_2; hazard-ui.js): a flood through the rooms, wind on the storeys, an earthquake shaking them
  const hazardUi = mountHazard({ ...designHost, problems: window.ccProblems });
  root.querySelector('[data-eg47-details]')?.addEventListener('toggle', (e) => { if (e.target.open) hazardUi?.render(); });
  window.bimcraftHazard = hazardUi;   // tests
  // 0.8 EG.45 (bim-sim_PART_2; lifecycle-ui.js): what wears out over fifty years and when it is replaced
  const lifecycleUi = mountLifecycle(designHost);
  root.querySelector('[data-eg45-details]')?.addEventListener('toggle', (e) => { if (e.target.open) lifecycleUi?.render(); });
  window.bimcraftLifecycle = lifecycleUi;   // tests
  // 0.6 LC.20 (daylight-bim-ui.js): each room's average daylight factor, the sky angle measured in the model
  ST.daylightUi = mountDaylight({
    pane: rPanel.querySelector('[data-daylight]'), W: WebIFC,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); },
    status: (text, isError) => status(text, isError),
    download,
    fileName: () => ST.ifcName,
    shown: () => !rPanel.querySelector('[data-rpane="daylight"]')?.hidden,
    storeyName: (id) => String((cur()?.model?.storeys || []).find((s) => s.id === id)?.name || ''),
    afterEdit,   // 0.7 LC.20: typed U-values (energy-bim-ui.js) refresh the model like any edit
  });
  window.bimcraftDaylight = ST.daylightUi;   // tests
  // 0.6 DF.12 (c): between two BIM programs (interop-view.js) — the section follows the Models section's own `hidden`
  if (ui.modelsSec) window.bimcraftInterop = mountInterop({
    after: ui.modelsSec, W: WebIFC, models: () => models, active: cur,
    manifest: () => ST.bundleUi?.state()?.manifest || null,
    download,
    status,
  });
}
