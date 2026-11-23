/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspace-bimcraft.js — BimCraft's adapter for the shell's workspace layout engine (assets/js/app-workspace.js; 0.7 WS.6; maps
 * docs/apps/app-workspace.md and docs/apps/bimcraft-workspace.md). The engine builds the blocks a layout file names; this file fills
 * them with BimCraft's own things and keeps everything only BimCraft has:
 *
 *   ribbon      Doc's ribbon (workspace/catalog.js), each tool run by Doc's commands (workspace/commands.js) or BimCraft's own
 *               buttons (workspace/engine.js); a selected wall adds the Modify | Walls context tab
 *   toolbox     every Draw tool the build has ([data-mtool]), in groups; each clicks the app's own button (Draw on, a plan first)
 *   slots       level (level + plan kind), document (the Draw bar's right side), layout (plan / split / 3D), units, and for the view
 *               bar scale, detail, view range, fit
 *   palettes    properties (view properties, the element's Properties, a new wall's defaults), browser (the Project Browser),
 *               panel (the host panel's own content: the Model palette on the left, the right panel's tabs on the right); the
 *               toolbox layout puts the browser on the right as its navigator (WS.19): a click there opens the view, as in classic
 *   fields      the picked element's main fields for the toolbox layout's info box (WS.20): the first labelled controls of its Properties
 *   views       each level's floor plan and {3D}; 'open' tabs keep a camera per plan (Doc's), 'all' tabs pick the Draw bar's level
 *   walls       Doc's wall placement and type editing (workspace/walls.js), only where the layout has a ribbon
 *
 *   createBimcraftWorkspace(host) → { adapter, api }   host = { root, modelUi, views, commands, props, current, status, statusEl }
 *   api: what bimcraft.js and Doc's commands call (refresh, opened, picked, propertiesChanged, stageChanged, state, activatePlan,
 *        activate3d, openRange, setSettings, fit, selectTool, startWall, editType, editStructure, cancelWall, active, inspect)
 */
import { catalog } from './workspace/catalog.js';
import { availability } from './workspace/availability.js';
import { ENGINE, engineRun } from './workspace/engine.js';
import { node, icon, button } from './workspace/dom.js';
import { fmtLen } from './model-units.js';
import { scalesFor } from './res-sheets.js';
import { mountWallWorkflow, INSTANCE_WALL_FIELDS } from './workspace/walls.js';
import { fieldsIn } from 'cc-workspace';

const GROUPS = [
  ['design', ['select', 'wall', 'door', 'window', 'column', 'floor', 'ceiling', 'roof', 'roofplane', 'stair', 'railing', 'ramp', 'family', 'countertop', 'dormer', 'foundation', 'framing']],
  ['systems', ['pipe', 'duct', 'valve', 'equip', 'electrical', 'weld']],
  ['site', ['terrain', 'pad', 'paving', 'site']],
  ['document', ['section', 'callout', 'grid', 'dline', 'dpoly', 'drect', 'dhatch']],
  ['modify', ['trim', 'corner']],
];

export function createBimcraftWorkspace({ root, modelUi, views, commands, props, current, status, statusEl }) {
  const stage = root.querySelector('.bc-stage');
  let engine = null, ctx = null, frame = 0;
  const soon = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; engine?.refresh(); }); };
  const A = modelUi.extend({ refresh: soon, settled: soon, toolChanged: soon });
  const T = (k, v) => A.t(k, v);
  const docked = () => !!engine?.has('ribbon');   // Doc's command layer (ribbon, walls, keys) is on
  const mode = () => ctx?.block('viewtabs')?.mode || null;
  // 0.11 FX.434: a layout with open view tabs keeps the document's views (token, levels, the first {3D} tab) whether or not it has
  // palettes: Drafting has open tabs and a ribbon but no palettes, and opened with "No view is open" (documentToken never set)
  const tracks = (c = ctx) => !!c && (c.has('palettes') || c.block('viewtabs')?.mode === 'open');

  // ---- the document and the views ----
  let documentToken = null, browserView = null, propertyMode = 'view', lastView = null, viewPropsSig = '';
  const cameras = new Map();
  const planView = (l) => ({ id: 'plan:' + l.guid, kind: 'plan', levelId: l.id, guid: l.guid, name: l.name, icon: 'bi-square' });
  const threeView = () => ({ id: '3d:default', kind: '3d', name: mode() === 'all' ? T('tbx.tab.3d') : T('ws.view3d'), icon: 'bi-box' });
  const levels = () => (current().editor && (current().editor === documentToken || !docked()) ? A.S.data?.levels || [] : []);
  const listViews = () => (current().editor ? [...levels().map(planView), threeView()] : []);
  const viewOf = (id) => listViews().find((v) => v.id === id) || null;
  const drawOn = () => root.querySelector('[data-model-toggle]')?.getAttribute('aria-pressed') === 'true';
  function needDraw() { if (current().editor && !drawOn()) root.querySelector('[data-model-toggle]')?.click(); }
  function rememberCamera() {
    const v = viewOf(lastView), pv = A.pv();
    if (v?.kind === 'plan' && pv) cameras.set(v.id, { cx: pv.cx, cy: pv.cy, scale: pv.scale, fitted: pv.fitted });
  }
  function go(id, how) {
    const v = viewOf(id); if (!v || !current().editor || snapshot().busy) return;
    if (how === 'open') {   // Doc's: a tab per opened view, each plan keeps its camera
      rememberCamera(); lastView = id; browserView = v; propertyMode = 'view';
      A.setTool('select');
      A.activateWorkspaceView(v.kind === 'plan' ? v.levelId : null, cameras.get(v.id));
      views.render();
    } else {   // a tab for every view: the Draw bar's own level and plan / 3D buttons
      if (v.kind === '3d') { needDraw(); root.querySelector('[data-model-layout="3d"]')?.click(); }
      else {
        needDraw();
        const sel = root.querySelector('[data-model-level]');
        if (sel && sel.value !== String(v.levelId)) { sel.value = String(v.levelId); sel.dispatchEvent(new Event('change', { bubbles: true })); }
        if (A.S.layout === '3d') root.querySelector('[data-model-layout="plan"]')?.click();
      }
    }
    soon();
  }
  function currentAll() {
    if (!current().editor) return null;
    if (!drawOn() || A.S.layout === '3d') return '3d:default';
    const l = (A.S.data?.levels || []).find((x) => x.id === A.S.level);
    return l ? 'plan:' + l.guid : '3d:default';
  }
  function snapshot() {
    const c = current(), view = engine?.view() || null;
    return { ...c, document: c.editor, busy: c.busy || !!A.S.busy || !!A.S.reloading, levels: levels(), view,
      settings: view?.kind === 'plan' ? views.workspaceSettings() : null, live: docked(), wall: walls.metadata() };
  }

  // ---- palettes (the ribbon layout's Properties and Project Browser) ----
  const elementProps = node('div', { className: 'ws-element-props' });
  const placementProps = node('div', { className: 'ws-placement-props', 'data-ws-placement-props': '', hidden: true });
  const viewProps = node('div', { className: 'ws-view-props' });
  const propHeading = node('span', {}, T('ws.props'));
  const unitsSlot = node('div', { className: 'ws-props-units', 'data-ws-units-slot': '' });
  const propsBody = node('div', { className: 'ws-props-body' }, viewProps, elementProps, placementProps);
  const optionsExtra = node('div', { className: 'ws-bc-options' });
  const propsHome = document.createComment('workspace: Properties home');   // i18n-ignore: a comment node
  props.before(propsHome);
  const walls = mountWallWorkflow({ root, A, commands, defaults: placementProps, unitsHost: unitsSlot, options: optionsExtra, status });
  const browserEl = () => root.querySelector('[data-pb-sec]');

  // ---- the view bar's controls ----
  function settingsSelect(key) {
    const select = node('select', { 'data-ws-setting': key, 'aria-label': key === 'detail' ? T('ws.detail.level') : T('ws.scale.view') });
    const choices = key === 'detail' ? [['coarse', T('ws.detail.coarse')], ['medium', T('ws.detail.medium')], ['fine', T('ws.detail.fine')]] : [[0, A.t('model.pv.scale.fit')], ...scalesFor(A.units()).map((x) => [x.ratio, x.label])];
    for (const [value, text] of choices) select.append(node('option', { value }, text));
    if (key === 'scale') select.dataset.wsScaleUnits = A.units();
    return select;
  }
  function syncSelect(select, value) {
    if (document.activeElement === select) return;
    if (select.dataset.wsSetting === 'scale' && select.dataset.wsScaleUnits !== A.units()) { const fresh = settingsSelect('scale'); select.replaceChildren(...fresh.options); select.dataset.wsScaleUnits = A.units(); }
    if (![...select.options].some((o) => o.value === String(value))) select.append(node('option', { value }, '1 : ' + value));
    select.value = String(value);
  }
  const detailSelect = settingsSelect('detail'), scaleSelect = settingsSelect('scale');
  // any layout's scale and detail controls (the ribbon layout's view bar, the toolbox layout's quick bar) change the open plan through Doc's commands
  root.addEventListener('change', (e) => { const key = e.target.dataset?.wsSetting; if (key && engine?.layout) commands.execute(key, key === 'scale' ? Number(e.target.value) : e.target.value); });
  const scaleLabel = node('label', {}, T('ws.scale') + ' ', scaleSelect), detailLabel = node('label', {}, T('ws.detail') + ' ', detailSelect);

  // ---- the toolbox ----
  const src = (key) => root.querySelector('[data-modelbar] [data-mtool="' + key + '"], [data-mtool="' + key + '"]');
  const labelOf = (b) => (b?.querySelector('span:not(.visually-hidden)')?.textContent || b?.title || '').trim();
  const known = new Set(GROUPS.flatMap(([, keys]) => keys));

  // ---- Doc's ribbon on BimCraft's tools ----
  const works = (id) => commands.ids.includes(id) || !!ENGINE[id];
  // 0.10 BK.175: the Duncan layout's tool rows list every Draw tool of the build (nothing removed, only arranged), as the toolbox layout does. A tool with a
  // command of its own keeps running through it; one without (Grid, Column, Ramp, Trim, Pipe, Duct and the rest of the Draw bar) is the Draw bar's own button.
  const viaBar = (id, block) => block === 'toolbox' || (block === 'toolrows' && !works(id) && !!src(id));
  const ribbon = () => catalog.ribbon.map((r) => ({ tab: r.tab, label: T('ws.tab.' + r.tab), context: !!r.context,
    groups: r.groups.map((g) => ({ id: g.group, label: T('ws.grp.' + g.group), large: g.large, stacks: g.stacks })) }));
  const isWall = () => snapshot().selection.length === 1 && !!props.querySelector('[data-mp-height]');

  const adapter = {
    app: 'bimcraft', root, stage, panels: { left: root.querySelector('.bc-left'), right: root.querySelector('.bc-right') }, status: statusEl,
    t: T, say: status, actions: ['open', 'save', 'undo', 'redo', 'select', 'clear', 'fit'],
    hide: ['[data-modelbar]', '[data-model-hint]'],   // 0.10 BT.11: the plan / 3D divider stays (model-ui.js shows it only while the two are side by side: Tile Views)
    fill: ':is(.bc-canvas, .bc-plan, .bc-dwg)', flow: ':is(.bc-card, .bc-empty)',   // i18n-ignore: selectors
    state() {
      const c = current(), s = snapshot();
      const other = c.mode === 'dwg' || !!root.querySelector('.bc-stage > [data-rvt]:not([hidden]), .bc-stage > [data-folder]:not([hidden])');
      const tool = A.S.tool || 'select';
      return { document: c.editor, name: other ? c.name || '' : c.name || T('ws.noifc'), dirty: s.dirty, busy: s.busy, selection: s.selection || [], other,
        tool, toolLabel: tool !== 'select' ? labelOf(src(tool)) || T('tbx.ig.tool') : '',
        // 0.11 UI.25: into ccState. kinds = IFC classes without "Ifc", lower case (wall, door, slab …); mode = plan | 3d | dwg (or other: a Revit file, a folder)
        kinds: c.kindsOf ? c.kindsOf(s.selection || []) : undefined, mode: c.mode === 'dwg' ? 'dwg' : other ? 'other' : !c.editor ? '' : drawOn() && A.S.layout !== '3d' ? 'plan' : '3d' };
    },
    // 0.11 UI.25: ccState.select / reveal / highlight (a Problems line, a schedule row, a test): the viewer's own pick, reveal also frames it
    select: (ids) => !!current().pick?.(window.ccState?.refs(ids) || [], false),
    reveal: (ids) => !!current().pick?.(window.ccState?.refs(ids) || [], true),
    highlight: (ids) => !!current().pick?.(window.ccState?.refs(ids) || [], false),
    endTool() { if (A.S.tool && A.S.tool !== 'select') A.setTool('select'); },
    ribbon, contextTab: () => (docked() && isWall() ? 'modify-walls' : null),
    toolbox: () => {
      const extra = [...new Set([...root.querySelectorAll('[data-modelbar] [data-mtool]')].map((b) => b.dataset.mtool))].filter((k) => !known.has(k));
      return [...GROUPS, ['more', extra]].map(([g, tools]) => ({ id: g, label: T('tbx.grp.' + g), tools }));
    },
    source: (id) => src(id) || null,   // 0.10 BK.33: the Draw bar's own button behind a layout tool (two-stage tooltips read its command)
    tool(id, block) {
      if (viaBar(id, block)) { const s = src(id); return { label: labelOf(s) || id, icon: s?.querySelector('i.bi')?.className.replace(/^bi\s+/, '') || 'bi-square', built: !!s }; }
      const t = catalog.tools[id] || { icon: id === 'fit' ? 'eye' : 'pointer' };
      return { label: T('ws.tool.' + id), icon: icon(t.icon), built: works(id) || ['fit', 'clear'].includes(id) };
    },
    can(id, block) {
      if (viaBar(id, block)) {
        const s = src(id), ifc = !!current().editor;
        if (!ifc) return { enabled: false, reason: T('tbx.why.ifc') };
        const off = !s || s.disabled || s.getAttribute('aria-disabled') === 'true';
        return { enabled: !off, reason: off ? s?.title || T('ws.why.off') : '' };
      }
      return availability(id, commands, snapshot(), { root, t: T });
    },
    async run(id, block) {
      if (viaBar(id, block)) {
        needDraw();
        if (A.S.layout === '3d') root.querySelector('[data-model-layout="plan"]')?.click();
        const s = src(id); if (!s) return;
        s.closest('details:not([open])')?.setAttribute('open', '');
        s.click();
        s.closest('details.bc-mb-more')?.removeAttribute('open');
        return;
      }
      if (commands.ids.includes(id)) return commands.execute(id);
      if (ENGINE[id]) return engineRun(root, ENGINE[id], { activatePlan: () => api.activatePlan(), showModel: () => ctx?.palette('panel'), state: snapshot });
    },
    pressed: (id, block) => viaBar(id, block) && src(id)?.getAttribute('aria-pressed') === 'true' && drawOn(),
    options(s) {
      if (s.other) return { title: T('ws.modify'), text: T('ws.opt.other') };
      const w = walls.metadata(), wallCtx = isWall(), toolOn = A.S.tool && A.S.tool !== 'select' && A.S.tool !== 'wall';
      return { title: w.placing ? T('ws.modify.wall.place') : toolOn ? T('ws.modify.tool') : wallCtx ? T('ws.modify.walls') : T('ws.modify'),
        text: s.busy ? T('ws.opt.busy') : w.placing ? T('ws.opt.wall.place') : toolOn ? '' : wallCtx ? T('ws.opt.wall') : s.document ? T('ws.opt.select') : T('ws.opt.open'),
        cls: [wallCtx ? 'ws-wall-options' : '', w.placing ? 'ws-placing' : ''].filter(Boolean).join(' ') };
    },
    optionsExtra: () => optionsExtra,
    toolOptions(block) {
      const tool = A.S.tool;
      if (!tool || tool === 'select') return null;
      // the options bar is above <main> (outside root) once the row is there: look in the whole page
      if (block === 'options') return tool === 'wall' ? null : document.querySelector('[data-modelbar] [data-mopts="' + tool + '"], [data-ws-tool-options] [data-mopts="' + tool + '"]');
      return document.querySelector('[data-mopts="' + tool + '"]');
    },
    showProperties: () => { if (ctx?.block('palettes')?.lower?.includes('properties')) ctx.palette('properties'); else root.querySelector('[data-rtab="props"]')?.click(); },
    fields: () => fieldsIn(props.querySelector('[data-model-props]') || props),
    slots: {
      level: { label: T('tbx.ig.level'), nodes: () => [root.querySelector('[data-model-level]')?.closest('label'), root.querySelector('[data-model-viewkind]')?.closest('label')].filter(Boolean) },
      document: { label: T('tbx.ig.document'), nodes: () => [root.querySelector('[data-modelbar] .bc-mb-right')].filter(Boolean) },
      layout: { label: '', nodes: () => [root.querySelector('[data-model-layout-group]')].filter(Boolean) },
      units: { label: '', nodes: () => [root.querySelector('.bc-global-units')].filter(Boolean) },
      scale: { label: T('ws.scale'), nodes: () => [scaleLabel] },
      detail: { label: T('ws.detail'), nodes: () => [detailLabel] },
      range: { label: T('ws.tool.range'), nodes: (c) => [c.tool('range', 'viewbar', true)] },
      fit: { label: T('ws.tool.fit'), nodes: (c) => [c.tool('fit', 'viewbar', true)] },
    },
    palettes: {
      properties: { label: T('ws.props'), title: propHeading, actions: [button(T('ws.props.view'), { 'data-ws-view-props': '' })], body: () => propsBody, foot: unitsSlot },
      browser: { label: T('ws.browser'), hint: T('ws.browser.hint'), body: () => browserEl() },
      panel: { label: T('ws.model') },   // in the right panel (the toolbox layout) the shell names it "More panels"
    },
    views: {
      list: listViews, token: () => documentToken, initial: () => '3d:default',
      current: () => (mode() === 'open' ? lastView : currentAll()),
      go: (id, how) => go(id, how),
      empty: (c) => c.tool('three', 'viewbar'),
    },
    toolbar: () => stage.querySelector(':scope > [data-toolbar]') || root.querySelector('[data-toolbar]'),
    escape() {   // Doc's keys turn Esc into "clear the selection": with his ribbon on, Esc first ends a running Draw tool, as in classic
      if (!docked() || !A.S.tool || A.S.tool === 'select' || A.S.tool === 'wall') return false;
      A.workspaceCancel(false); return true;
    },
    entered(c) {
      ctx = c;
      if (c.has('palettes')) {
        elementProps.append(props);
        if (c.has('ribbon')) walls.setActive(true);   // Doc's wall placement belongs to his ribbon; the toolbox layout keeps the app's own Wall tool
        // the right panel's Properties tab is the Properties palette now: show another of its tabs
        if (root.querySelector('.bc-right [data-rtab="props"]')?.getAttribute('aria-selected') === 'true') root.querySelector('.bc-right [data-rtab]:not([data-rtab="props"]):not([hidden])')?.click();
        opened();
      } else if (tracks(c)) opened();
      if (c.has('toolbox') && current().editor) needDraw();
    },
    leaving(c) {
      if (c.has('palettes')) {
        walls.setActive(false); rememberCamera(); propsHome.after(props); restoreBrowser();
      }
    },
    left(c) { if (c.was && root.querySelector('.bc-right [data-rtab="props"]')) root.querySelector('.bc-right [data-rtab="props"]').click(); ctx = null; },
    resized() { current().viewer?.resize(); A.pv()?.resize(); },
    refresh(c) {
      root.classList.toggle('tbx-noifc', c.has('toolbox') && !current().editor);
      if (!tracks(c)) return;
      if (documentToken !== current().editor && !adapter.state().other) { opened(); return; }
      if (!c.has('palettes')) return;
      const s = snapshot();
      decorateBrowser();
      elementProps.hidden = s.wall.placing || propertyMode !== 'element' || !s.selection.length;
      viewProps.hidden = s.wall.placing || !elementProps.hidden;
      if (adapter.state().other) { elementProps.hidden = false; viewProps.hidden = true; }
      propHeading.textContent = adapter.state().other ? T('ws.props') : s.wall.placing ? T('ws.props.newwall') : viewProps.hidden ? T('ws.props.element') : T('ws.props.viewh');
      if (!viewProps.hidden) renderViewProperties();
      syncSelect(detailSelect, s.settings?.detail || 'coarse'); syncSelect(scaleSelect, s.settings?.scale || 0);
      for (const sel of [detailSelect, scaleSelect, ...viewProps.querySelectorAll('[data-ws-setting]')]) {
        const a = commands.describe(sel.dataset.wsSetting);
        sel.disabled = !a.enabled; sel.parentElement.title = a.reason; sel.parentElement.setAttribute('tabindex', a.enabled ? '-1' : '0'); sel.parentElement.dataset.wsReason = a.reason;
      }
      walls.refresh(); restrictProperties();
    },
  };

  function opened() {
    const c = current();
    documentToken = c.editor; cameras.clear(); browserView = null; lastView = null;
    if (c.editor && tracks()) { A.prepareWorkspace(); A.setTool('select'); views.render(); lastView = '3d:default'; browserView = threeView(); }
    propertyMode = 'view'; soon();
  }
  function renderViewProperties() {
    const v = browserView || engine?.view(), s = snapshot();
    const setting = v?.kind === 'plan' ? views.workspaceSettings(v.levelId) : null;
    const sig = JSON.stringify([v?.id, setting, s.document?.mid, engine?.view()?.id]);
    if (sig === viewPropsSig || viewProps.contains(document.activeElement)) return;
    viewPropsSig = sig;
    const dl = node('dl', { className: 'ws-view-dl' });
    const row = (label, value) => dl.append(node('dt', {}, label), node('dd', {}, value));
    if (!s.document) { viewProps.replaceChildren(node('p', { className: 'ws-note' }, T('ws.vp.open')), ctx.tool('open', 'properties')); return; }
    if (!v) { viewProps.replaceChildren(node('p', { className: 'ws-note' }, T('ws.vp.pick'))); return; }
    row(T('ws.vp.name'), v.name); row(T('ws.vp.type'), v.kind === 'plan' ? T('ws.vp.plan') : T('ws.vp.3d'));
    row(T('ws.vp.document'), s.name);
    if (v.kind === 'plan') {
      const isActive = engine?.view()?.id === v.id;
      const ds = settingsSelect('detail'), sc = settingsSelect('scale');
      syncSelect(ds, setting?.detail || 'coarse'); syncSelect(sc, setting?.scale || 0);
      row(T('ws.scale.view'), isActive ? sc : '1 : ' + (setting?.scale || T('ws.vp.fit'))); row(T('ws.detail.level'), isActive ? ds : T('ws.detail.' + (setting?.detail || 'coarse'))); row(T('ws.tool.range'), isActive ? ctx.tool('range', 'properties', true) : T('ws.vp.openit'));
      row(T('ws.vp.cut'), fmtLen(setting?.cut ?? 1200, A.units()));
      row(T('ws.vp.top'), setting?.top ? fmtLen(setting.top, A.units()) : T('ws.vp.top.auto'));
      row(T('ws.vp.bottom'), fmtLen(setting?.bottom ?? 0, A.units())); row(T('ws.vp.depth'), fmtLen(setting?.depth ?? 50, A.units()));
      if (setting?.template) row(T('ws.vp.template'), setting.template);
      if (!isActive) for (const control of dl.querySelectorAll('select, button')) { control.disabled = true; control.title = T('ws.vp.openit'); }
    } else row(T('ws.tool.range'), T('ws.vp.no3d'));
    viewProps.replaceChildren(node('div', { className: 'ws-prop-identity' }, icon(v.kind === 'plan' ? 'plan' : 'cube'), node('strong', {}, v.name)), dl, node('p', { className: 'ws-note' }, T('ws.vp.note')));
  }
  /** The Project Browser in the palette: a {3D} entry, the selected view marked, its summary counting it. */
  function decorateBrowser() {
    const b = browserEl(); if (!b) return;
    const group = b.querySelector('[data-pb-group="3d"]');
    if (group && !group.querySelector('[data-ws-browser-3d]')) {
      const list = group.querySelector('ul') || node('ul'); if (!list.parentNode) group.append(list);
      list.prepend(node('li', {}, button('{3D}', { className: 'bc-pb-go', 'data-ws-browser-3d': '' })));   // i18n-ignore: the default 3D view's name
    }
    if (group) { const summary = group.querySelector('summary'); if (summary) { if (!summary.hasAttribute('data-ws-original-summary')) summary.dataset.wsOriginalSummary = summary.textContent; summary.textContent = A.t('model.pb.views3d') + ' (' + (1 + group.querySelectorAll('[data-pb-3d]').length) + ')'; } }
    for (const x of b.querySelectorAll('[data-pb-plan], [data-ws-browser-3d]')) {
      const v = x.hasAttribute('data-ws-browser-3d') ? threeView() : levels().map(planView).find((y) => y.guid === x.dataset.pbPlan);
      x.classList.toggle('ws-browser-selected', !!v && browserView?.id === v.id);
      x.setAttribute('aria-current', engine?.view()?.id === v?.id ? 'page' : 'false');
    }
  }
  function restoreBrowser() {
    const b = browserEl(); if (!b) return;
    b.querySelector('[data-ws-browser-3d]')?.closest('li')?.remove();
    for (const s of b.querySelectorAll('[data-ws-original-summary]')) { s.textContent = s.dataset.wsOriginalSummary; delete s.dataset.wsOriginalSummary; }
    for (const x of props.querySelectorAll('[data-ws-wall-label]')) { x.textContent = x.dataset.wsWallLabel; delete x.dataset.wsWallLabel; }
  }
  function restrictProperties() {
    // every property keeps its own action (ours: nothing is read-only that is editable in classic); a wall's assembly button reads
    // "Edit Type…" and opens Doc's type dialog (walls.js)
    for (const input of props.querySelectorAll('input, select, button, textarea')) {
      const wall = docked() && input.matches(INSTANCE_WALL_FIELDS) && walls.metadata().supported;
      if (wall && input.matches('[data-mp-assembly]') && !input.hasAttribute('data-ws-wall-label')) { input.dataset.wsWallLabel = input.textContent; input.textContent = T('ws.edittype'); }
      if (wall && input.matches('[data-mp-height], [data-mp-base]')) input.setAttribute('aria-label', input.matches('[data-mp-height]') ? T('ws.wall.height') : T('ws.wall.base'));
    }
    for (const dd of props.querySelectorAll('dd')) {
      const label = dd.previousElementSibling?.textContent;
      if (label) for (const i of dd.querySelectorAll('input, select')) if (!i.hasAttribute('aria-label')) i.setAttribute('aria-label', label);
    }
  }
  // the Project Browser's view entries: a click shows the view's properties, a double-click or Enter opens it (Doc's)
  const inBrowser = (e) => docked() && ctx?.has('palettes') && browserEl()?.contains(e.target);
  root.addEventListener('click', (e) => {
    if (e.target.closest?.('[data-ws-view-props]') && ctx?.has('palettes')) { if (A.S.tool === 'wall') A.setTool('select'); browserView = engine?.view(); propertyMode = 'view'; viewPropsSig = ''; soon(); return; }
    // the navigator (toolbox layout): plans open as in classic; the {3D} entry the palette adds opens the 3D view
    if (!docked() && ctx?.has('palettes') && e.target.closest?.('[data-ws-browser-3d]') && browserEl()?.contains(e.target)) { e.preventDefault(); ctx.open('3d:default'); return; }
    if (!inBrowser(e)) return;
    const b = e.target.closest('button'); if (!b || !(b.dataset.pbPlan || b.hasAttribute('data-ws-browser-3d') || b.dataset.pbRange)) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (b.dataset.pbRange) { if (!snapshot().busy) views.openRange(b.dataset.pbRange); return; }
    browserView = b.hasAttribute('data-ws-browser-3d') ? threeView() : levels().map(planView).find((v) => v.guid === b.dataset.pbPlan);
    propertyMode = 'view'; viewPropsSig = ''; soon();
  }, true);
  const openFromBrowser = (b) => ctx?.open(b.hasAttribute('data-ws-browser-3d') ? '3d:default' : 'plan:' + b.dataset.pbPlan);
  root.addEventListener('dblclick', (e) => { if (!inBrowser(e)) return; const b = e.target.closest('[data-pb-plan], [data-ws-browser-3d]'); if (!b) return; e.preventDefault(); e.stopImmediatePropagation(); openFromBrowser(b); }, true);
  root.addEventListener('keydown', (e) => { if (e.key !== 'Enter' || !inBrowser(e)) return; const b = e.target.closest('[data-pb-plan], [data-ws-browser-3d]'); if (!b) return; e.preventDefault(); e.stopImmediatePropagation(); openFromBrowser(b); }, true);
  new MutationObserver(() => soon()).observe(props, { childList: true });

  const api = {
    get active() { return docked(); },
    attach(e) { engine = e; },
    refresh: soon, stageChanged: soon, opened: () => { if (tracks()) opened(); else soon(); }, state: snapshot,
    propertiesChanged: soon,
    picked() { if (!snapshot().busy) { propertyMode = current().selection.length ? 'element' : 'view'; if (propertyMode === 'view') browserView = engine?.view(); viewPropsSig = ''; } soon(); },
    inspect: () => { const s = snapshot(); return { active: docked(), layout: engine?.layout || null, document: s.document ? s.name : null, busy: s.busy, dirty: s.dirty, selection: s.selection, view: s.view, settings: s.settings, propertyMode }; },
    selectTool: () => { A.setTool('select'); status(T('ws.select.hint')); },
    activatePlan(levelGuid) {
      const ls = levels();
      const level = ls.find((l) => l.guid === levelGuid) || ls.find((l) => l.id === A.S.level) || ls.find((l) => Math.abs(l.elevation) < 1) || ls[0];
      if (level) ctx?.open('plan:' + level.guid);
    },
    activate3d: () => ctx?.open('3d:default'),
    openRange: () => { const v = engine?.view(); if (v?.kind === 'plan') views.openRange(v.guid); },
    setSettings: (patch) => { const why = views.setWorkspaceSettings(patch); if (why) status(why, true); soon(); },
    fit: () => { if (engine?.view()?.kind === 'plan') A.fitPlan(); else current().viewer?.view('iso'); },
    startWall: () => walls.start(), editType: () => walls.editType(), editStructure: () => walls.editStructure(),
    cancelWall: (finish) => { A.workspaceCancel(finish); soon(); },
  };
  window.ccState?.adapt?.(adapter);   // 0.11 UI.25: kinds, mode, view and the Problems counts publish into ccState
  return { adapter, api };
}
