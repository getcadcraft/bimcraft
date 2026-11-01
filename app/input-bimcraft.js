/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-bimcraft.js — BimCraft's command registry for the shell's input engine (0.5 track IP: IP.1 here, IP.2 moved the
 * engine to assets/js/app-input.js + app-input-ui.js; manifest "input": "input-bimcraft.js"). DOM-free data, plus
 * hooks() which runs only on the page (docs/apps/app-input.md).
 *
 * COMMANDS: one entry per command the toolbar, the left panel or a key gives today.
 *   id        stable id (saved in people's own profiles and export files — never rename one)
 *   group     for the Customize list
 *   icon      Bootstrap Icons class
 *   sel       the button the shell (app-input-ui.js) clicks to run it (the app's own button: one code path for every style)
 *   draw      the button lives in Draw's model bar: hooks().prepare turns Draw on first
 *   defKeys   the keys BimCraft has without any profile (bimcraft.js / model-ui.js handlers) — the CadCraft style
 *   fixed     keys nobody can take or move (Delete, Esc)
 *   keyOnly / optional   needs no menu place / exists only in some areas (the DetailCraft hand-off)
 * Labels are text keys `input.cmd.<id>` in lang/en.json.
 *
 * STYLES: CadCraft (today's toolbar), Home design, BIM ribbon, Drafting classic, Viewer (0.5 IP.3: open and check models). Named for a way of working, never for
 * a product (trademark rule). Menu, tab and panel labels are text keys `input.m.*`.
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, sel, more = {}) => ({ id, group, icon, sel, label: 'input.cmd.' + id, defKeys: [], ...more });

export const COMMANDS = [
  C('file.open', 'file', 'bi-folder2-open', '[data-file]'),
  C('file.folder', 'file', 'bi-folder-symlink', '.bc-left [data-pick-folder]'),
  C('file.documents', 'file', 'bi-folder2-open', '[data-vault-open]', { label: 'sx.vault.title' }),   // 0.8 SU.1058 (vault-08): check out / in, revisions, release states
  C('file.new', 'file', 'bi-building-add', '.bc-left [data-new]'),
  C('file.save', 'file', 'bi-download', '[data-save]', { defKeys: ['Ctrl+S'] }),
  C('file.print', 'file', 'bi-printer', '[data-model-print]', { draw: true }),
  C('edit.undo', 'edit', 'bi-arrow-counterclockwise', '[data-toolbar] [data-act="undo"]', { defKeys: ['Ctrl+Z'] }),
  C('edit.redo', 'edit', 'bi-arrow-clockwise', '[data-toolbar] [data-act="redo"]', { defKeys: ['Ctrl+Y', 'Ctrl+Shift+Z'] }),
  C('edit.cut', 'edit', 'bi-scissors', '[data-edit-menu] [data-act="cut"]', { defKeys: ['Ctrl+X'] }),
  C('edit.copy', 'edit', 'bi-copy', '[data-edit-menu] [data-act="copy"]', { defKeys: ['Ctrl+C'] }),
  C('edit.paste', 'edit', 'bi-clipboard-plus', '[data-edit-menu] [data-act="paste"]', { defKeys: ['Ctrl+V'] }),
  C('edit.paste-in-place', 'edit', 'bi-clipboard-check', '[data-edit-menu] [data-act="paste-in-place"]', { defKeys: ['Ctrl+Shift+V'] }),
  C('edit.duplicate', 'edit', 'bi-files', '[data-edit-menu] [data-act="duplicate"]', { defKeys: ['Ctrl+D'] }),
  C('edit.delete', 'edit', 'bi-trash', '[data-edit-menu] [data-act="delete"]', { defKeys: ['Delete'], fixed: true }),
  C('edit.select-all', 'edit', 'bi-check2-all', '[data-edit-menu] [data-act="select-all"]', { defKeys: ['Ctrl+A'] }),
  C('edit.select-none', 'edit', 'bi-x-square', '[data-edit-menu] [data-act="select-none"]', { defKeys: ['Escape'], fixed: true }),
  C('model.draw', 'model', 'bi-bricks', '[data-model-toggle]'),
  C('model.select', 'model', 'bi-cursor', '[data-mtool="select"]', { draw: true, defKeys: ['V'] }),
  C('model.wall', 'model', 'bi-bricks', '[data-mtool="wall"]', { draw: true, defKeys: ['W'] }),
  C('model.door', 'model', 'bi-door-open', '[data-mtool="door"]', { draw: true, defKeys: ['D'] }),
  C('model.window', 'model', 'bi-window', '[data-mtool="window"]', { draw: true, defKeys: ['N'] }),
  C('model.floor', 'model', 'bi-layers', '[data-mtool="floor"]', { draw: true }),
  C('model.ceiling', 'model', 'bi-layers-half', '[data-mtool="ceiling"]', { draw: true }),
  C('model.roof', 'model', 'bi-house', '[data-mtool="roof"]', { draw: true }),
  // the residential tools in Draw's Build menu, the drawing set and the takeoff (0.5 part 4 track RC, session bim-residential)
  C('build.stairsketch', 'model', 'bi-bezier2', '[data-mtool="stairsketch"]', { draw: true }),   // 0.8 SU.1055
  C('model.pens', 'model', 'bi-pencil', '[data-mtool="pens"]', { draw: true }),   // 0.8 SU.1055
  C('model.traceref', 'model', 'bi-layers-half', '[data-mtool="traceref"]', { draw: true }),   // 0.8 SU.1055
  C('model.picture', 'model', 'bi-image', '[data-mtool="picture"]', { draw: true }),   // 0.8 D8.8: pictures as backgrounds
  C('modify.move', 'model', 'bi-arrows-move', '[data-mtool="move"]', { draw: true, defKeys: ['Shift+M'] }),   // 0.8 D8.3: M stays Measure
  C('modify.align', 'model', 'bi-align-start', '[data-mtool="align"]', { draw: true }),
  C('modify.distribute', 'model', 'bi-distribute-horizontal', '[data-mtool="distribute"]', { draw: true }),
  C('build.roofplane', 'model', 'bi-triangle', '[data-mtool="roofplane"]', { draw: true }),
  C('build.dormer', 'model', 'bi-house-up', '[data-mtool="dormer"]', { draw: true }),   // 0.6 round 2 (bim-comforts_PART_2)
  C('build.foundation', 'model', 'bi-bricks', '[data-mtool="foundation"]', { draw: true }),
  C('build.stair', 'model', 'bi-ladder', '[data-mtool="stair"]', { draw: true }),
  C('build.railing', 'model', 'bi-border-outer', '[data-mtool="railing"]', { draw: true }),
  C('build.countertop', 'model', 'bi-columns-gap', '[data-mtool="countertop"]', { draw: true }),
  C('build.framing', 'model', 'bi-grid-3x3-gap', '[data-mtool="framing"]', { draw: true }),
  C('build.panels', 'model', 'bi-columns-gap', '[data-panels-open]', { draw: true }),   // 0.8 EG.6: panel shop drawings, timber or light-gauge steel
  C('build.electrical', 'model', 'bi-plug', '[data-mtool="electrical"]', { draw: true }),
  C('build.symbols', 'model', 'bi-grid-3x3-gap-fill', '[data-sym-open], [data-sym-toolbar]', { draw: true }),   // 0.8 GH.3-F/G (symbols-ui.js): the symbol palette
  C('build.terrain', 'model', 'bi-globe', '[data-mtool="terrain"]', { draw: true }),
  C('build.pad', 'model', 'bi-square-half', '[data-mtool="pad"]', { draw: true }),
  C('build.paving', 'model', 'bi-signpost-split', '[data-mtool="paving"]', { draw: true }),
  C('build.section', 'model', 'bi-slash-square', '[data-mtool="section"]', { draw: true }),
  C('file.sheets', 'file', 'bi-files', '[data-res-sheetsopen]', { draw: true }),
  C('tools.takeoff', 'tools', 'bi-calculator', '[data-res-takeoff]', { draw: true }),
  C('view.plan', 'view', 'bi-square', '[data-model-layout="plan"]', { draw: true }),
  C('view.split', 'view', 'bi-layout-split', '[data-model-layout="split"]', { draw: true }),
  C('view.3d', 'view', 'bi-box', '[data-model-layout="3d"]', { draw: true }),
  C('view.planfit', 'view', 'bi-arrows-fullscreen', '[data-model-fit]', { draw: true }),
  C('view.dims', 'view', 'bi-arrows', '[data-model-dims]', { draw: true }),
  C('view.fit', 'view', 'bi-box', '[data-toolbar] [data-view="iso"]', { defKeys: ['F'] }),
  C('view.problems', 'view', 'bi-exclamation-triangle', '[data-problems-open]', { defKeys: ['Ctrl+Shift+M'], keyOnly: true, optional: true }),   // 0.7.1: the shell's Problems panel (rebindable; docs/0.8-PROBLEMS-SPEC.md)
  C('view.top', 'view', 'bi-square', '[data-toolbar] [data-view="top"]'),
  C('view.front', 'view', 'bi-layout-sidebar-inset', '[data-toolbar] [data-view="front"]'),
  C('view.side', 'view', 'bi-layout-sidebar-inset-reverse', '[data-toolbar] [data-view="side"]'),
  C('view.edges', 'view', 'bi-bounding-box', '[data-toolbar] [data-toggle="edges"]'),
  // GH.3-B (0.8 round 3): the display modes, three buttons beside the view cube (the old drop-down is gone)
  C('view.display.shaded', 'view', 'bi-hexagon-fill', '[data-display-set="shaded"]', { label: 'view.display.shaded' }),
  C('view.display.edges', 'view', 'bi-hexagon-half', '[data-display-set="edges"]', { label: 'view.display.edges' }),
  C('view.display.wireframe', 'view', 'bi-hexagon', '[data-display-set="wireframe"]', { label: 'view.display.wireframe' }),
  C('view.spaces', 'view', 'bi-grid-3x3', '[data-toolbar] [data-toggle="spaces"]'),
  C('view.section', 'view', 'bi-scissors', '[data-toolbar] [data-toggle="section"]', { defKeys: ['X'] }),
  C('view.secbox', 'view', 'bi-box', '[data-vis="secbox"]', { defKeys: ['Shift+X'] }),
  C('view.walk', 'view', 'bi-person-walking', '[data-toolbar] [data-toggle="walk"]'),
  C('view.render', 'view', 'bi-camera', '[data-render-open]'),   // 0.5 RC.11 (session render)
  C('view.live', 'view', 'bi-play-btn', '[data-live-open]', { label: 'rt.menu' }),   // 0.7 RT.3 (session realtime): the live view
  C('view.livewindow', 'view', 'bi-window-stack', '[data-live-window]', { label: 'rt.menu.window' }),   // 0.7 RT.3: the live view in its own window
  C('view.vr', 'view', 'bi-headset-vr', '[data-xr-enter]'),   // 0.6 LC.19 (session lc-model)
  C('file.glb', 'file', 'bi-box-arrow-up', '[data-glb-export]'),
  C('file.gltf', 'file', 'bi-file-earmark-code', '[data-gltf-export]'),   // 0.8 DC.22: .gltf for Enscape's asset library   // 0.6 DC.22 (session bim-extra_PART_2)
  C('file.usd', 'file', 'bi-box-arrow-up-right', '[data-usd-export]'),   // 0.7 XF.8 (session usd)
  C('tools.paint', 'tools', 'bi-paint-bucket', '[data-paint-open]'),   // 0.5 RC.7 (session render)
  C('view.views', 'view', 'bi-camera-reels', '[data-saved-views]'),   // 0.5 RC.7 (session render)
  C('vis.hide', 'show', 'bi-eye-slash', '[data-vis="hide"]', { defKeys: ['H'] }),
  C('vis.isolate', 'show', 'bi-bullseye', '[data-vis="isolate"]', { defKeys: ['I'] }),
  C('vis.ghost', 'show', 'bi-transparency', '[data-vis="ghost"]', { defKeys: ['T'] }),
  C('vis.all', 'show', 'bi-eye', '[data-vis="all"]', { defKeys: ['Shift+H'] }),
  C('view.cloud', 'show', 'bi-cloud-haze2', '[data-cloud-open]'),
  C('view.register', 'show', 'bi-bounding-box-circles', '[data-toolbar] [data-cloud-register]', { label: 'reg.menu' }),   // 0.7 LC.3 (session scans): Register scans…   // i18n-ignore: a CSS selector
  C('view.maps', 'show', 'bi-map', '[data-map-open]'),
  C('tools.measure', 'tools', 'bi-rulers', '[data-toolbar] [data-toggle="measure"]', { defKeys: ['M'] }),
  C('library.open', 'library', 'bi-collection', '[data-lib-tool="library"]'),
  C('library.equipment', 'library', 'bi-list-check', '[data-lib-tool="equipment"]'),
  C('library.updates', 'library', 'bi-arrow-repeat', '[data-lib-tool="updates"]'),
  C('library.credits', 'library', 'bi-c-circle', '[data-lib-tool="credits"]'),
  C('tools.handoff', 'tools', 'bi-box-arrow-up-right', '[data-handoff-ifc]', { optional: true }),
  C('tools.ids', 'tools', 'bi-clipboard2-check', '[data-ids-open]', { optional: true }),   // 0.7.1 71.25: Check against IDS… (ids-ui.js)
  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['file', 'edit', 'model', 'view', 'show', 'tools', 'library', 'app'];

// CadCraft's own keys = the registry's (what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));
const CTRL_KEYS = Object.fromEntries(Object.entries(DEFAULT_KEYS).filter(([, k]) => k.every((x) => /^(Ctrl|F\d)/.test(x))));

const m = (label, items) => ({ label: 'input.m.' + label, items });
// a panel is [label, items, extra?]: extra = the 0.7 RIBBON-COMPACT fields (mixed, more) of app-input.js
const tab = (label, panels) => ({ label: 'input.m.' + label, panels: panels.map(([l, items, extra]) => ({ label: 'input.m.' + l, items, ...(extra || {}) })) });
const lg = (id) => ({ id, size: 'lg' }), sm = (id) => ({ id, size: 'sm' });   // 0.8 RIBBON-COMPACT rest (shell-08)

const FILE_MENU = ['file.new', 'file.open', 'file.folder', 'file.documents', '-', 'file.save', 'file.print', '-', 'app.settings', 'app.palette', 'app.help'];
const EDIT_MENU = ['edit.undo', 'edit.redo', '-', 'edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.duplicate', 'edit.delete', '-', 'edit.select-all', 'edit.select-none'];

export const STYLES = {
  cadcraft: {
    format: 'cadcraft-input', version: 1, id: 'cadcraft', name: 'input.style.cadcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },   // null: each 3D view as it is
  },
  home: {
    format: 'cadcraft-input', version: 1, id: 'home', name: 'input.style.home', builtin: true, layout: 'menubar',
    menus: [
      m('file', [...FILE_MENU.slice(0, 6), 'file.sheets', ...FILE_MENU.slice(6)]),
      m('edit', EDIT_MENU),
      m('build', ['model.draw', '-', 'model.select', 'model.wall', 'model.door', 'model.window', '-', 'model.floor', 'model.ceiling', 'model.roof', '-', 'build.roofplane', 'build.dormer', 'build.foundation', 'build.stair', 'build.railing', 'build.countertop', 'build.framing', 'build.panels', 'build.electrical', 'build.symbols', '-', 'build.terrain', 'build.pad', 'build.paving', '-', 'build.section', '-', 'build.stairsketch', 'model.pens', 'model.traceref', 'model.picture', 'modify.move', 'modify.align', 'modify.distribute']),
      m('library', ['library.open', 'library.equipment', 'library.updates', 'library.credits']),
      m('3d', ['view.3d', 'view.split', '-', 'view.fit', 'view.top', 'view.front', 'view.side', '-', 'view.walk', 'view.views', 'view.section', 'view.secbox', '-', 'view.render', 'view.live', 'view.livewindow', 'view.vr', 'file.glb', 'file.gltf', 'file.usd']),
      m('cad', ['view.dims', 'tools.measure']),
      m('tools', ['tools.paint', '-', 'tools.takeoff', 'tools.handoff', 'tools.ids', 'view.cloud', 'view.register', 'view.maps']),
      m('view', ['view.plan', 'view.planfit', '-', 'view.edges', 'view.display.shaded', 'view.display.edges', 'view.display.wireframe', 'view.spaces', '-', 'vis.hide', 'vis.isolate', 'vis.ghost', 'vis.all']),
    ],
    bar: ['model.select', '-', 'model.wall', 'model.door', 'model.window', 'model.floor', 'model.roof', '-', 'view.plan', 'view.split', 'view.3d', '-', 'edit.undo', 'edit.redo', 'library.open'],
    labels: { 'model.select': 'input.lbl.home.select', 'model.draw': 'input.lbl.home.draw', 'library.open': 'input.lbl.home.library', 'view.3d': 'input.lbl.home.3d', 'view.plan': 'input.lbl.home.plan', 'library.equipment': 'input.lbl.home.equipment' },
    keys: { ...DEFAULT_KEYS, 'library.open': ['Ctrl+L'], 'view.3d': ['F9'], 'view.plan': ['F10'], 'view.split': ['F11'] },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['right', 'middle'], orbit3d: { left: 'orbit', middle: 'pan', right: 'pan' } },
  },
  ribbon: {
    format: 'cadcraft-input', version: 1, id: 'ribbon', name: 'input.style.ribbon', builtin: true, layout: 'ribbon',
    menus: [m('file', FILE_MENU)],
    quick: ['file.open', 'file.save', 'edit.undo', 'edit.redo'],
    tabs: [
      tab('architecture', [['select', ['model.select']], ['build', [lg('model.wall'), sm('model.door'), sm('model.window'), sm('model.floor')], { more: ['model.ceiling', 'model.roof'] }], ['residential', [lg('build.roofplane'), sm('build.dormer'), sm('build.foundation'), sm('build.stair')], { more: ['build.railing', 'build.countertop', 'build.framing', 'build.panels', 'build.electrical', 'build.symbols'] }], ['site', [lg('build.terrain'), sm('build.pad'), sm('build.paving')]], ['model', ['model.draw']]]),
      tab('insert', [['library', [lg('library.open'), sm('library.equipment'), sm('library.updates'), sm('library.credits')]], ['open', ['file.open', 'file.folder', 'file.documents', 'file.new']], ['link', ['tools.handoff', 'view.cloud', 'view.register', 'view.maps']]]),
      tab('annotate', [['dimension', ['view.dims', 'tools.measure']], ['sections', ['build.section']]]),
      tab('modify', [['arrange', [lg('modify.move'), sm('modify.align'), sm('modify.distribute'), sm('model.traceref')], { more: ['build.stairsketch', 'model.pens', 'model.picture'] }], ['clipboard', ['edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.duplicate', 'edit.delete']], ['selection', ['edit.select-all', 'edit.select-none']]]),
      tab('view', [['views', ['view.plan', 'view.split', 'view.3d', 'view.planfit']], ['navigate', ['view.fit', 'view.top', 'view.front', 'view.side', 'view.walk', 'view.views']], ['graphics', ['view.edges', 'view.display.shaded', 'view.display.edges', 'view.display.wireframe', 'view.spaces', 'view.section', 'view.secbox']], ['visibility', ['vis.hide', 'vis.isolate', 'vis.ghost', 'vis.all']]]),
      tab('output', [['print', ['file.print', 'file.sheets', 'file.save']], ['render', ['tools.paint', 'view.render', 'view.live', 'view.livewindow', 'view.vr', 'file.glb', 'file.gltf', 'file.usd']], ['quantities', ['tools.takeoff']]]),
    ],
    labels: { 'model.select': 'input.lbl.ribbon.select', 'view.3d': 'input.lbl.ribbon.3d', 'view.plan': 'input.lbl.ribbon.plan' },
    keys: {
      ...CTRL_KEYS,
      'model.select': ['M D'], 'model.wall': ['W A'], 'model.door': ['D R'], 'model.window': ['W N'], 'model.floor': ['F L'],
      'model.ceiling': ['C L'], 'model.roof': ['R F'], 'view.dims': ['D I'], 'tools.measure': ['M E'], 'view.section': ['S C'],
      'view.secbox': ['B X'], 'vis.hide': ['H H'], 'vis.isolate': ['H I'], 'vis.ghost': ['H G'], 'vis.all': ['H R'],
      'view.fit': ['Z F'], 'view.3d': ['3 D'], 'view.plan': ['P L'], 'view.walk': ['W K'],
    },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: { left: 'none', middle: 'pan', right: 'none' } },
  },
  drafting: {
    format: 'cadcraft-input', version: 1, id: 'drafting', name: 'input.style.drafting', builtin: true, layout: 'ribbon', commandLine: true,
    menus: [m('file', FILE_MENU)],
    quick: ['file.new', 'file.open', 'file.save', 'file.print', 'edit.undo', 'edit.redo'],
    tabs: [
      tab('home', [['draw', [lg('model.wall'), sm('model.door'), sm('model.window'), sm('model.floor')], { more: ['model.ceiling', 'model.roof'] }], ['residential', [lg('build.roofplane'), sm('build.dormer'), sm('build.foundation'), sm('build.stair')], { more: ['build.railing', 'build.countertop', 'build.framing', 'build.panels', 'build.electrical', 'build.symbols', 'build.terrain', 'build.pad', 'build.paving', 'build.section'] }], ['modify', [lg('modify.move'), sm('modify.align'), sm('modify.distribute'), sm('model.select')], { more: ['build.stairsketch', 'model.pens', 'model.traceref', 'model.picture', 'edit.copy', 'edit.paste', 'edit.duplicate', 'edit.delete'] }], ['annotation', ['view.dims', 'tools.measure']], ['levels', ['model.draw']]]),
      tab('insert', [['block', [lg('library.open'), sm('library.equipment'), sm('library.updates'), sm('library.credits')]], ['reference', ['tools.handoff', 'view.cloud', 'view.register', 'view.maps']]]),
      tab('view', [['viewports', ['view.plan', 'view.split', 'view.3d', 'view.planfit']], ['navigate', ['view.fit', 'view.top', 'view.front', 'view.side', 'view.walk', 'view.views']], ['visual', ['view.edges', 'view.display.shaded', 'view.display.edges', 'view.display.wireframe', 'view.spaces', 'view.section', 'view.secbox', 'vis.hide', 'vis.isolate', 'vis.ghost', 'vis.all']]]),
      tab('output', [['plot', ['file.print', 'file.sheets', 'file.save']], ['render', ['tools.paint', 'view.render', 'view.live', 'view.livewindow', 'view.vr', 'file.glb', 'file.gltf', 'file.usd']], ['quantities', ['tools.takeoff']], ['clipboard', ['edit.cut', 'edit.paste-in-place', 'edit.select-all', 'edit.select-none']]]),
    ],
    labels: { 'library.open': 'input.lbl.drafting.insert', 'file.print': 'input.lbl.drafting.plot', 'view.3d': 'input.lbl.drafting.3d' },
    keys: { ...CTRL_KEYS },
    typed: {
      'model.wall': ['WALL', 'WA'], 'model.door': ['DOOR', 'DR'], 'model.window': ['WINDOW', 'WIN'], 'model.floor': ['FLOOR', 'SLAB'],
      'model.ceiling': ['CEILING'], 'model.roof': ['ROOF'], 'model.select': ['SELECT'], 'model.draw': ['DRAW', 'MODEL'],
      'build.stairsketch': ['STAIRSKETCH', 'SKETCHSTAIR'], 'model.pens': ['PENS', 'LINEWEIGHT'], 'model.traceref': ['TRACE', 'TRACEREF'], 'model.picture': ['PICTURE', 'BACKGROUND'], 'modify.move': ['MOVE'], 'modify.align': ['ALIGN', 'AL'], 'modify.distribute': ['DISTRIBUTE', 'DISTR'],
      'edit.undo': ['U', 'UNDO'], 'edit.redo': ['REDO'], 'edit.copy': ['COPYCLIP'], 'edit.cut': ['CUTCLIP'], 'edit.paste': ['PASTECLIP'],
      'edit.paste-in-place': ['PASTEORIG'], 'edit.duplicate': ['DUPLICATE', 'DUP'], 'edit.delete': ['ERASE', 'E'], 'edit.select-all': ['SELECTALL', 'AI_SELALL'],
      'view.dims': ['DIM'], 'tools.measure': ['DIST', 'DI', 'MEASURE'], 'view.fit': ['ZOOM', 'Z', 'ZE'], 'view.top': ['TOP'], 'view.front': ['FRONT'],
      'view.side': ['SIDE'], 'view.3d': ['3D'], 'view.plan': ['PLAN'], 'view.split': ['SPLIT', 'VPORTS'], 'view.section': ['SECTION', 'SECTIONPLANE'],
      'view.secbox': ['SECTIONBOX'], 'view.walk': ['WALK', '3DWALK'], 'view.render': ['RENDER'], 'view.live': ['LIVEVIEW'], 'view.vr': ['VR'], 'file.glb': ['GLB'], 'file.gltf': ['GLTFOUT'], 'file.usd': ['USDOUT', 'USD'], 'tools.paint': ['PAINT', 'MATERIALS'], 'view.views': ['VIEWS', 'VIEW'], 'view.edges': ['EDGES'], 'view.spaces': ['SPACES', 'ROOMS'],
      'vis.hide': ['HIDEOBJECTS', 'HIDE'], 'vis.isolate': ['ISOLATEOBJECTS', 'ISOLATE'], 'vis.ghost': ['GHOST'], 'vis.all': ['UNISOLATEOBJECTS', 'UNHIDE'],
      'library.open': ['INSERT', 'I', 'LIBRARY'], 'library.equipment': ['EQUIPMENT'], 'library.updates': ['UPDATES'], 'library.credits': ['CREDITS'],
      'file.new': ['NEW'], 'file.open': ['OPEN'], 'file.folder': ['OPENFOLDER'], 'file.documents': ['DOCUMENTS', 'VAULT'], 'file.save': ['SAVE', 'QSAVE', 'SAVEAS'], 'file.print': ['PLOT', 'PRINT'],
      'app.settings': ['OPTIONS', 'SETTINGS'], 'app.help': ['HELP'], 'view.cloud': ['POINTCLOUD'], 'view.maps': ['MAP'], 'tools.handoff': ['DETAILCRAFT'], 'tools.ids': ['IDS', 'IDSCHECK'],
      'build.roofplane': ['ROOFPLANE'], 'build.dormer': ['DORMER'], 'build.foundation': ['FOUNDATION', 'FOOTING'], 'build.stair': ['STAIR'], 'build.railing': ['RAILING'], 'build.countertop': ['COUNTERTOP'],
      'build.framing': ['FRAMING', 'FRAME'], 'build.panels': ['PANELS', 'PANELDRAW'], 'build.electrical': ['ELECTRICAL', 'ELINSTALL'], 'build.symbols': ['SYMBOLS', 'SYMBOL'], 'build.terrain': ['TERRAIN', 'TOPO'], 'build.pad': ['PAD'], 'build.paving': ['PAVING'],
      'build.section': ['SECTIONLINE'], 'file.sheets': ['SHEETS', 'SHEETSET', 'PUBLISH'], 'tools.takeoff': ['TAKEOFF'],
    },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: { left: 'none', middle: 'pan', right: 'none' } },
  },
  // 0.5 IP.3 (session input-apps): for people who only open and check models — the checking tools up front, the
  // authoring tools tucked in one Model menu at the end; no family (IP.4's four families each keep their own member)
  viewer: {
    format: 'cadcraft-input', version: 1, id: 'viewer', name: 'input.style.viewer', builtin: true, layout: 'menubar',
    menus: [
      m('file', ['file.open', 'file.folder', 'file.documents', '-', 'file.save', 'file.print', 'file.sheets', '-', 'app.settings', 'app.palette', 'app.help']),
      m('view', ['view.fit', 'view.top', 'view.front', 'view.side', '-', 'view.3d', 'view.plan', 'view.split', 'view.planfit', '-', 'view.walk', 'view.views', 'view.render', 'view.live', 'view.livewindow', 'view.vr', 'file.glb', 'file.gltf', 'file.usd', '-', 'view.edges', 'view.display.shaded', 'view.display.edges', 'view.display.wireframe', 'view.spaces']),
      m('show', ['vis.hide', 'vis.isolate', 'vis.ghost', 'vis.all', '-', 'view.section', 'view.secbox', '-', 'view.cloud', 'view.register', 'view.maps']),
      m('check', ['tools.measure', 'view.dims', '-', 'library.equipment', 'library.updates', 'library.credits', '-', 'tools.takeoff', 'tools.handoff', '-', 'tools.ids']),
      m('edit', EDIT_MENU),
      m('model', ['file.new', 'model.draw', '-', 'model.select', 'model.wall', 'model.door', 'model.window', 'model.floor', 'model.ceiling', 'model.roof', '-', 'build.roofplane', 'build.dormer', 'build.foundation', 'build.stair', 'build.railing', 'build.countertop', 'build.framing', 'build.panels', 'build.electrical', 'build.symbols', '-', 'build.terrain', 'build.pad', 'build.paving', 'build.section', '-', 'build.stairsketch', 'model.pens', 'model.traceref', 'model.picture', 'modify.move', 'modify.align', 'modify.distribute', '-', 'library.open', 'tools.paint', '-', 'tools.ids']),
    ],
    bar: ['file.open', 'file.folder', '-', 'view.fit', 'view.top', 'view.front', 'view.side', '-', 'view.section', 'tools.measure', '-', 'vis.hide', 'vis.isolate', 'vis.ghost', 'vis.all', '-', 'view.walk'],
    labels: { 'model.draw': 'input.lbl.viewer.draw' },
    keys: { ...DEFAULT_KEYS },
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },
  },
};
export const STYLE_ORDER = ['cadcraft', 'home', 'ribbon', 'drafting', 'viewer'];

/** IP.4: each style's family ("use this style in every app"). */
export const FAMILY = { cadcraft: 'own', home: 'menus', ribbon: 'ribbon', drafting: 'classic' };
/** Where a person's styles are kept (IP.1's key: their styles stay). */
export const STORE = 'bimcraft.input';

/**
 * The page side the shell asks for (app-input-ui.js): the toolbar, why a command can't run, Draw turned on first for the
 * plan's tools, the keys a running tool keeps, and the mouse handed to the views (input-mouse.js). bimcraft.js sets
 * window.ccInputHooks = { status, download, busy } (placing or walking keeps its letter keys).
 */
export function hooks({ root, t }) {
  const drawOn = () => root.querySelector('[data-model-toggle]')?.getAttribute('aria-pressed') === 'true';
  const toggle = () => root.querySelector('[data-model-toggle]');
  const frame = () => new Promise((r) => requestAnimationFrame(() => r()));
  return {
    toolbar: () => root.querySelector('[data-toolbar]'),
    why(c, b, generic) {
      if (!b || b.disabled || b.getAttribute('aria-disabled') === 'true') return generic(c, b);
      const hid = b.closest('[hidden]');
      if (hid && !(c.draw && hid.matches('[data-plan-wrap], [data-plan-wrap] *'))) return hid.matches('[data-toolbar]') ? t('input.why.model') : t('shell.input.why.off');
      if (c.draw && !drawOn() && (!toggle() || toggle().closest('[hidden]'))) return t('input.why.model');
      return '';
    },
    async prepare(c) {
      if (!c.draw || drawOn()) return '';
      toggle()?.click();
      await frame();
      return drawOn() ? '' : t('input.why.model');
    },
    // a running tool keeps its own keys: digits for typed lengths, H with the door and window tools
    keepKey(combo, plain) {
      const st = window.bimcraftPlan?.state, tool = st?.on ? st.tool : 'select';
      // 2026-10-24: Esc ends a running Draw tool (or its chain) — the engine's fixed Esc (Select none) took it first, in every layout
      if (combo === 'Escape' && st?.on && (tool !== 'select' || st.chain)) return true;
      return plain && tool !== 'select' && (/^[0-9]$/.test(combo) || ((tool === 'door' || tool === 'window') && combo === 'H'));
    },
    mouse: (m) => setMouse(m),
  };
}
