/* SPDX-License-Identifier: Apache-2.0 */
import { PLAN_DETAILS } from './wall-plan-graphics.js';
import { readProjectedView, setProjectedView } from './projected-views.js';
/**
 * views-ui.js — views the BIM way on screen (0.6 DF.19, session `bim-draw`), through model-ui.js `extend()`:
 *   Project browser  a section of the left panel [data-pb-sec] (made here, before the Links section): Floor plans (each level;
 *                    click = its plan, [data-pb-range=<guid>] = its view range), Elevations and Sections (on the drawing
 *                    set), 3D views (the saved views), Schedules, Sheets (yours [data-pb-sheet=<id>], New sheet
 *                    [data-pb-newsheet], Drawing set… [data-pb-set]), View templates ([data-pb-tpl=<name>], New template
 *                    [data-pb-newtpl]), Links; other modules add groups through browserGroups (family-ui.js: Families).
 *   View range       dialog [data-pv-dialog]: template, cut, top, bottom, depth below, scale [data-pv-scale], categories shown,
 *                    elements hidden in this view, crop region [data-pv-crop] (Draw on the plan [data-pv-cropdraw] → the Crop tool:
 *                    two corners; Clear [data-pv-cropclear]), underlay [data-pv-underlay] (another level drawn light under this
 *                    one); the plan cuts at the cut height, draws what is below down to bottom − depth thin, and what is above
 *                    the cut and under the top dashed. (Scale, crop, underlay: 0.6 DC.117, session bim-views_PART_2.)
 *   Ceiling plans    0.6 DC.117: each level's reflected ceiling plan ([data-pb-rcp=<guid>] shows it, [data-pb-rcprange=<guid>] its
 *                    range: cut, top, scale, categories, hidden elements, crop, underlay — no template); its scene gets each
 *                    ceiling's pattern grid (model-slabs.js CEILING_PATTERNS) and a height tag "CLG 2438"
 *   Templates        dialog [data-vt-dialog]: a named set of those settings; views using one follow it.
 *   Sheet editor     dialog [data-sh-dialog]: number, title, paper; add plans, elevations, sections and schedules, drag them
 *                    where they go, a scale each; Save (one undo step), PDF; res-sheets.js composeSheet draws it.
 *   Callouts         0.6 DC.117 (c): Project browser › Callouts ([data-pb-callout=<id>] opens one, [data-pb-coedit=<id>] its dialog
 *                    [data-co-dialog]: name, scale, Open, Draw again, Delete — the callouts inside it go too, asked first
 *                    [data-co-confirm]); New callout [data-pb-newcallout] or Annotate › Callout = the Callout tool (two corners on the
 *                    view shown). A callout shows its parent's view cropped at its own scale; the model bar says so [data-co-chip]
 *                    with Up [data-co-back]; its parent draws its rectangle and a tag (name, "1 / A-501" once on a sheet) that opens it
 *                    with the Select tool. Missing ([data-pb-comissing]): a parent gone, listed with Delete [data-pb-codel]. Sheets take
 *                    callouts (input.callouts, kind 'callout'). Drafting in each view: drafting-ui.js (mounted here).
 * IFC: views-model.js. Test hook: window.bimcraftViews = { state, api }.
 */
import { readPlanViews, readTemplates, readSheets, effectiveView, setPlanView, saveTemplate, deleteTemplate, saveSheet, deleteSheet, underlaySegments, ceilingGrid, RCP_DEFAULTS,
  readCallouts, saveCallout, deleteCallout, calloutRoot, calloutsInside, parseViewKey } from './views-model.js';
import { mountDrafting } from './drafting-ui.js';   // 0.6 DC.117 (d): drafting lines and hatch regions in this view
import { CEILING_PATTERNS } from './model-slabs.js';
import { loopAt, labelPoint } from './model-rooms.js';
import { readViews } from './views-bim.js';
import { buildLegend, legendToText, legendFromText, parseKeynoteFile } from './keynotes.js';
import { composeSheet, arrangeSheet, setPdf, sheetSvg, PAPERS, scalesFor, readSectionLines } from './res-sheets.js';
import { ModelWriter } from './model-write.js';
import { mul4, inv4 } from './ifc-util.js';
import { fmtLen, parseLen, isMetric } from './model-units.js';
import { labelPapers } from './paper-labels.js';
import { el } from './ui-util.js';

/** Categories a plan can leave out (IFC classes; a wall's StandardCase follows its class). */
export const CATEGORIES = [
  ['IfcWall', 'walls'], ['IfcDoor', 'doors'], ['IfcWindow', 'windows'], ['IfcSpace', 'rooms'], ['IfcSlab', 'slabs'], ['IfcRoof', 'roofs'],
  ['IfcColumn', 'columns'], ['IfcGrid', 'grids'], ['IfcStair', 'stairs'], ['IfcRamp', 'ramps'], ['IfcRailing', 'railings'], ['IfcBeam', 'beams'],
  ['IfcFurniture', 'furniture'], ['IfcFurnishingElement', 'furnishing'], ['IfcFlowTerminal', 'fixtures'], ['IfcLightFixture', 'lights'],
  ['IfcAnnotation', 'annotations'], ['IfcGeographicElement', 'site'],
  ['IfcPipeSegment', 'pipes'], ['IfcDuctSegment', 'ducts'],   // 0.6 DF.29: the pipe and duct runs (mep-ui.js) and other programs' segments
];
const PAPER_KEYS = Object.keys(PAPERS);
const CSS = `
.bc-pb details { margin: 0; }
.bc-pb summary { cursor: pointer; font-size: var(--fs-sm, .875rem); font-weight: 600; padding: .15rem 0; }
.bc-pb ul { list-style: none; margin: 0 0 .25rem; padding: 0 0 0 .9rem; display: grid; gap: .1rem; }
.bc-pb li { display: flex; align-items: center; gap: .25rem; min-width: 0; }
.bc-pb li > .bc-pb-go { flex: 1; min-width: 0; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; background: none; border: 0; color: inherit; padding: .1rem .2rem; font: inherit; font-size: var(--fs-sm, .875rem); }
.bc-pb li > .bc-pb-go:hover, .bc-pb li > .bc-pb-go:focus-visible { color: var(--action); text-decoration: underline; }
.bc-pb .bc-pb-tag { font-size: .75rem; color: var(--ink-2); }
.bc-pb .bc-pb-ic { background: none; border: 0; color: var(--ink-2); padding: .1rem .3rem; }
.bc-pb [data-pb-range], .bc-pb [data-pb-rcprange] { flex-shrink: 0; font: inherit; font-size: var(--fs-sm, .875rem); border: 1px solid currentColor; border-radius: .25rem; padding: .2rem .4rem; }
.bc-pb .bc-pb-ic:hover { color: var(--action); }
.bc-pb-actions { display: flex; flex-wrap: wrap; gap: .3rem; padding-left: .9rem; margin-bottom: .3rem; }
.bc-pv-cats { display: grid; grid-template-columns: repeat(auto-fill, minmax(8.5rem, 1fr)); gap: .1rem .6rem; margin: .25rem 0; }
.bc-pv-cats label { display: flex; gap: .35rem; align-items: center; font-size: var(--fs-sm, .875rem); }
.bc-pv-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .25rem .75rem; }
.bc-dialog.bc-sh-dlg { width: min(80rem, calc(100vw - 2rem)); max-width: none; max-height: calc(100vh - 2rem); }
.bc-dialog .bc-pv-h { margin: .75rem 0 .25rem; font-size: var(--fs-base, 1rem); }
.bc-sh-body { display: grid; grid-template-columns: 14rem minmax(0, 1fr); gap: .75rem; min-height: 0; }
.bc-sh-src { overflow: auto; max-height: 60vh; font-size: var(--fs-sm, .875rem); }
.bc-sh-src h3 { font-size: var(--fs-sm, .875rem); margin: .4rem 0 .15rem; }
.bc-sh-src ul { list-style: none; margin: 0; padding: 0; display: grid; gap: .1rem; }
.bc-sh-src li { display: flex; gap: .3rem; align-items: center; }
.bc-sh-src li span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.bc-sh-stage { position: relative; border: var(--pen-1, 1px) solid var(--line); background: #fff; }
.bc-sh-stage > svg { display: block; width: 100%; height: auto; }
.bc-sh-ov { position: absolute; inset: 0; width: 100%; height: 100%; }
.bc-sh-ov rect { fill: transparent; stroke: var(--action); stroke-width: .6; stroke-dasharray: 3 2; cursor: move; touch-action: none; }
.bc-sh-ov rect[aria-selected="true"] { stroke-width: 1.2; stroke-dasharray: none; }
.bc-sh-head { display: flex; flex-wrap: wrap; gap: .5rem .75rem; align-items: end; margin-bottom: .5rem; }
.bc-sh-head label { display: grid; gap: .1rem; font-size: var(--fs-sm, .875rem); }
.bc-sh-sel { display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; margin-top: .4rem; font-size: var(--fs-sm, .875rem); min-height: 2rem; }
@media (max-width: 760px) { .bc-sh-body { grid-template-columns: 1fr; } .bc-sh-src { max-height: 30vh; } }
.bc-co-chip { display: inline-flex; align-items: center; gap: .35rem; font-size: var(--fs-sm, .875rem); white-space: nowrap; }
.bc-co-chip[hidden] { display: none; }
`;

export function mountViewsBim(modelUi, o = {}) {
  if (typeof document !== 'undefined' && !document.getElementById('bc-pb-css')) { const st = document.createElement('style'); st.id = 'bc-pb-css'; st.textContent = CSS; document.head.append(st); }
  const R = { views: new Map(), rcps: new Map(), templates: [], sheets: [], callouts: [], open: new Set(['plans', 'rcp', 'callouts', 'missing', 'sheets', 'tpl', 'families']), sec: null, crop: null, under: null, co: null, chip: null };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const L = (mm) => fmtLen(mm, A.units());
  const field = (label, input, attrs = {}) => el('label', { className: 'bc-dlg-field', ...attrs }, el('span', {}, label), input);
  const icon = (c) => el('i', { className: 'bi ' + c, 'aria-hidden': 'true' });
  function read() {
    const w = W();
    if (!w) { R.views = new Map(); R.rcps = new Map(); R.templates = []; R.sheets = []; R.callouts = []; return; }
    try { R.views = readPlanViews(w); R.rcps = readPlanViews(w, 'rcp'); R.templates = readTemplates(w); R.sheets = readSheets(w); R.callouts = readCallouts(w); } catch (e) { R.views = new Map(); R.rcps = new Map(); R.templates = []; R.sheets = []; R.callouts = []; }
    // the callout shown was deleted (or its parent's level): back to the level's own view
    if (A.S.callout && !rootOf(A.S.callout)) A.S.callout = null;
  }
  const levelOf = (id) => A.S.data?.levels.find((l) => l.id === id) || null;
  const levelByGuid = (g) => A.S.data?.levels.find((l) => l.guid === g) || null;
  /** The view range in force on a level: null = no settings of its own (model-ui.js keeps its plain cut). */
  function rangeOf(levelId, kind = 'plan', callout = null) {
    const v = (kind === 'rcp' ? R.rcps : R.views).get(levelId);
    const c = callout ? R.callouts.find((x) => x.id === callout) : null;
    if (!v && !c) return null;
    // 0.6 DC.117 (c): a callout draws its parent's view (as model-ui.js would with no settings of its own) cropped, at its scale
    const e = v || kind === 'rcp' ? effectiveView(v || null, R.templates, levelOf(levelId)?.height || 3000, kind)
      : { kind, cut: 1200, top: null, bottom: 0, depth: 50, scale: 0, crop: null, underlay: '', hiddenClasses: new Set(), hiddenGuids: new Set(), template: '' };
    if (c) Object.assign(e, { crop: c.crop, scale: c.scale, callout: c.id });
    return e;
  }
  // ------------------------------------------------------------------------------------- callouts (0.6 DC.117 (c))
  const levelGuids = () => new Set((A.S.data?.levels || []).map((l) => l.guid));
  const rootOf = (id) => calloutRoot(R.callouts, id, levelGuids());
  /** The key of the view shown: 'callout:<id>', else 'rcp:' / 'plan:' + the level's GlobalId. */
  function viewKey() {
    if (A.S.callout) return 'callout:' + A.S.callout;
    const g = levelOf(A.S.level)?.guid;
    return g ? (A.S.kind === 'rcp' ? 'rcp:' : 'plan:') + g : null;
  }
  /** A view key in words: "Level 1 floor plan", "Level 1 ceiling plan", a callout's name. */
  function viewName(key) {
    const p = parseViewKey(key);
    if (!p) return '';
    if (p.kind === 'callout') return R.callouts.find((c) => c.id === p.ref)?.name || t('model.co.gone');
    const lv = levelByGuid(p.ref);
    return lv ? t(p.kind === 'rcp' ? 'model.co.of.rcp' : 'model.co.of.plan', { level: lv.name }) : t('model.co.gone');
  }
  /** Where a callout is placed: "<n> / <sheet number>" (its place among the sheet's views), else ''. */
  function sheetRef(id) {
    for (const s of R.sheets) { const i = s.views.findIndex((v) => v.kind === 'callout' && v.ref === id); if (i >= 0) return t('model.co.ref', { n: i + 1, sheet: s.number || s.title }); }
    return '';
  }
  function openCallout(id) {
    const r = rootOf(id), lv = r ? levelByGuid(r.level) : null;
    if (!lv) { A.host.status(t('model.co.missing'), true); return; }
    if (!A.S.on) modelUi.show(true);
    A.showKind(lv.id, r.kind, id);
  }
  /** Back from a callout to its parent view. */
  function backToParent() {
    const c = R.callouts.find((x) => x.id === A.S.callout);
    const p = c ? parseViewKey(c.parent) : null;
    if (p?.kind === 'callout') { openCallout(p.ref); return; }
    const lv = p ? levelByGuid(p.ref) : levelOf(A.S.level);
    if (lv) A.showKind(lv.id, p?.kind === 'rcp' ? 'rcp' : 'plan');
  }
  const bubbleR = () => 5 * (rangeOf(A.S.level, A.S.kind, A.S.callout)?.scale || (isMetric(A.units()) ? 50 : 48));   // 5 mm on paper
  const tagOf = (c, r) => [c.crop[2] + r * 1.6, c.crop[3] + r * 1.6];
  /** The callouts drawn on this view: their rectangles, a leader and a tag bubble (name, and where it is placed). */
  function addCallouts(scene) {
    const key = viewKey();
    if (!key) return;
    const r = bubbleR();
    for (const c of R.callouts) {
      if (c.parent !== key || !rootOf(c.id)) continue;
      const [x0, y0, x1, y1] = c.crop, at = tagOf(c, r), k = Math.SQRT1_2;
      scene.symbols.push({ key: null, callout: c.id, lines: [[x0, y0, x1, y0], [x1, y0, x1, y1], [x1, y1, x0, y1], [x0, y1, x0, y0], [x1, y1, at[0] - r * k, at[1] - r * k]], arcs: [{ c: at, r, a0: 0, a1: Math.PI * 2 }] });
      const ref = sheetRef(c.id);
      scene.rooms.push({ key: null, callout: c.id, at, label: ref ? [c.name, ref] : [c.name] });
    }
  }
  /** Select tool: a click on a callout's tag opens it. */
  function tagClick(p) {
    const key = viewKey(), r = bubbleR();
    const c = R.callouts.find((x) => x.parent === key && rootOf(x.id) && Math.hypot(p[0] - tagOf(x, r)[0], p[1] - tagOf(x, r)[1]) <= r * 1.15);
    if (!c) return false;
    openCallout(c.id);
    return true;
  }
  /** The model bar says when a callout is shown, with the way back to its parent. */
  function renderChip() {
    const kindSel = A.root.querySelector('[data-model-viewkind]');
    if (!kindSel) return;
    if (!R.chip?.isConnected) {
      R.chip = el('span', { className: 'bc-co-chip', 'data-co-chip': '', hidden: true });
      (kindSel.closest('label') || kindSel).after(R.chip);
    }
    const c = A.S.on && A.S.callout ? R.callouts.find((x) => x.id === A.S.callout) : null;
    R.chip.hidden = !c;
    if (!c) { R.chip.replaceChildren(); return; }
    R.chip.replaceChildren(el('strong', {}, t('model.co.chip', { name: c.name })),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-co-back': '', title: t('model.co.back', { name: viewName(c.parent) }), onClick: () => backToParent() }, icon('bi-arrow-90deg-up'), ' ' + t('model.co.up')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-co-edit': c.id, title: t('model.co.edit', { name: c.name }), 'aria-label': t('model.co.edit', { name: c.name }), onClick: () => editCallout(c.id) }, icon('bi-sliders')));
  }
  const defaultScale = () => (isMetric(A.units()) ? 20 : 24);
  function nextName() { let n = R.callouts.length + 1; while (R.callouts.some((c) => c.name === t('model.co.default', { n }))) n++; return t('model.co.default', { n }); }
  /** The Callout tool: two corners on the view shown (a plan, a ceiling plan, a callout); `edit` = draw an existing one's again. */
  function startCallout(edit = null) {
    if (!A.S.on) modelUi.show(true);
    if (edit) { const c = R.callouts.find((x) => x.id === edit); const p = c ? parseViewKey(c.parent) : null; if (p?.kind === 'callout') openCallout(p.ref); else { const lv = p ? levelByGuid(p.ref) : null; if (lv) A.showKind(lv.id, p.kind); } }
    R.co = { edit, a: null, at: null };
    A.setTool('callout');
    R.co = { edit, a: null, at: null };
  }
  function calloutClick(p) {
    const c = R.co;
    if (!c) return;
    if (!c.a) { c.a = p.slice(); const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t('model.hint.callout2'); return; }
    const rect = [Math.min(c.a[0], p[0]), Math.min(c.a[1], p[1]), Math.max(c.a[0], p[0]), Math.max(c.a[1], p[1])];
    if (rect[2] - rect[0] < 100 || rect[3] - rect[1] < 100) { A.host.status(t('model.err.vr.crop'), true); return; }
    R.co = null;
    A.setTool('select');
    if (c.edit) {
      const was = R.callouts.find((x) => x.id === c.edit);
      const why = run(saveCallout({ id: c.edit, crop: rect }), { label: was?.name || '', verb: t('model.verb.changed') });
      if (why) A.host.status(why, true);
      return;
    }
    const name = nextName(), parent = viewKey();
    const why = run(saveCallout({ name, parent, crop: rect, scale: defaultScale() }), { label: name, verb: t('model.verb.made') });
    if (why) A.host.status(why, true); else A.host.status(t('model.co.made', { name }));
  }
  function calloutOverlay(o) {
    const c = R.co;
    if (!c || A.S.tool !== 'callout' || !c.a || !c.at) return;
    const [x0, y0] = c.a, [x1, y1] = c.at;
    o.lines.push([x0, y0, x1, y0], [x1, y0, x1, y1], [x1, y1, x0, y1], [x0, y1, x0, y0]);
    o.hud = { p: c.at, text: L(Math.abs(x1 - x0)) + ' × ' + L(Math.abs(y1 - y0)) };   // i18n-ignore: width × height
  }
  /** A callout's name, scale, parent; draw its rectangle again; delete it (and the callouts inside it, asked first). */
  function editCallout(id) {
    const c = R.callouts.find((x) => x.id === id);
    if (!c) return;
    const nm = el('input', { type: 'text', className: 'bc-input', 'data-co-name': '', value: c.name, maxLength: 60 });
    const u = A.units();
    const scale = el('select', { className: 'select-cc', 'data-co-scale': '' }, el('option', { value: '0' }, t('model.pv.scale.fit')), ...scalesFor(u).map((x) => el('option', { value: String(x.ratio) }, x.label)));
    scale.value = scalesFor(u).some((x) => x.ratio === c.scale) ? String(c.scale) : '0';
    const missing = !rootOf(id);
    dialog({ 'data-co-dialog': '' }, t('model.co.title', { name: c.name }),
      [field(t('model.co.name'), nm), field(t('model.pv.scale'), scale), el('p', { className: 'bc-muted', 'data-co-parent': '' }, t(missing ? 'model.co.parent.missing' : 'model.co.parent', { name: viewName(c.parent) })),
        el('p', { className: 'bc-muted' }, t('model.co.note'))],
      [btn('ok', t('model.co.ok'), { 'data-co-ok': '' }, true), missing ? null : btn('open', t('model.co.open'), { 'data-co-open': '' }), missing ? null : btn('redraw', t('model.co.redraw'), { 'data-co-redraw': '' }),
        btn('delete', t('model.co.delete'), { 'data-co-delete': '' }), btn('cancel', t('model.gp.cancel'))].filter(Boolean),
      (what) => {
        if (what === 'cancel' || !what) return null;
        if (what === 'delete') { setTimeout(() => askDelete(id), 0); return null; }
        if (what === 'open') { setTimeout(() => openCallout(id), 0); return null; }
        if (!nm.value.trim()) return t('model.err.co.name');
        const why = run(saveCallout({ id, name: nm.value, scale: Number(scale.value) || 0 }), { label: nm.value.trim(), verb: t('model.verb.changed') });
        if (!why && what === 'redraw') setTimeout(() => startCallout(id), 0);
        return why;
      });
  }
  function askDelete(id) {
    const c = R.callouts.find((x) => x.id === id);
    if (!c) return;
    const inside = calloutsInside(R.callouts, id);
    if (!inside.length) { const why = run(deleteCallout(id), { label: c.name, verb: t('model.verb.deleted') }); if (why) A.host.status(why, true); return; }
    dialog({ 'data-co-confirm': '' }, t('model.co.del.title', { name: c.name }), [el('p', {}, t('model.co.del.inside', { n: inside.length }))],
      [btn('yes', t('model.co.del.yes', { n: inside.length + 1 }), { 'data-co-yes': '' }, true), btn('cancel', t('model.gp.cancel'))],
      (what) => (what === 'yes' ? run(deleteCallout(id), { label: c.name, verb: t('model.verb.deleted') }) : null));
  }
  const guidOfKey = (k) => { const ed = A.ed(); if (!ed) return null; try { return ed.api.GetLine(ed.mid, k - A.kb(), false)?.GlobalId?.value || null; } catch (e) { return null; } };

  // ---------------------------------------------------------------------------------------------- the project browser
  function section() {
    if (R.sec?.isConnected) return R.sec;
    const links = A.root.querySelector('[data-links-sec]');
    if (!links) return null;
    R.sec = el('section', { className: 'bc-sec bc-pb', 'data-pb-sec': '' }, el('h2', { className: 'bc-h' }, t('model.pb.title')), el('div', { 'data-pb-tree': '' }));
    links.before(R.sec);
    return R.sec;
  }
  function group(key, title, n, items, actions = []) {
    const d = el('details', { 'data-pb-group': key }, el('summary', {}, title + (n !== null ? ' (' + n + ')' : '')), items.length ? el('ul', {}, ...items) : null, actions.length ? el('div', { className: 'bc-pb-actions' }, ...actions) : null);
    d.open = R.open.has(key);
    d.addEventListener('toggle', () => { if (d.open) R.open.add(key); else R.open.delete(key); });
    return d;
  }
  const row = (attrs, label, onClick, ...extra) => el('li', {}, el('button', { type: 'button', className: 'bc-pb-go', ...attrs, onClick }, label), ...extra);
  const small = (attrs, label, onClick, ic) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', ...attrs, onClick }, ic ? icon(ic) : null, ic ? ' ' + label : label);
  function render() {
    const sec = section();
    if (!sec) return;
    const tree = sec.querySelector('[data-pb-tree]');
    const levels = (A.S.data?.levels || []).slice().reverse();
    const plans = levels.map((l) => {
      const v = R.views.get(l.id);
      return row({ 'data-pb-plan': l.guid, 'aria-current': l.id === A.S.level && A.S.on && A.S.kind !== 'rcp' ? 'true' : null }, l.name, () => goPlan(l.id),
        v?.template ? el('span', { className: 'bc-pb-tag' }, v.template) : null,
        el('button', { type: 'button', className: 'bc-pb-ic', 'data-pb-range': l.guid, title: t('model.pv.open', { level: l.name }), 'aria-label': t('model.pv.open', { level: l.name }), onClick: () => openRange(l.guid) }, icon('bi-sliders'), ' ' + t('model.pv.button')));
    });
    // 0.6 DC.117: every level's reflected ceiling plan
    const rcps = levels.map((l) => row({ 'data-pb-rcp': l.guid, 'aria-current': l.id === A.S.level && A.S.on && A.S.kind === 'rcp' ? 'true' : null }, l.name, () => A.showKind(l.id, 'rcp'),
      el('button', { type: 'button', className: 'bc-pb-ic', 'data-pb-rcprange': l.guid, title: t('model.pv.rcpopen', { level: l.name }), 'aria-label': t('model.pv.rcpopen', { level: l.name }), onClick: () => openRange(l.guid, 'rcp') }, icon('bi-sliders'), ' ' + t('model.pv.button'))));
    const openSet = () => A.root.querySelector('[data-res-sheetsopen]')?.click();
    const graphicButton=(key)=>el('button',{type:'button',className:'bc-pb-ic','data-pb-projected':key,title:t('proj.settings'),'aria-label':t('proj.settings'),onClick:()=>openProjected(key)},icon('bi-sliders'));
    const elevs = ['north', 'east', 'south', 'west'].map((s) => row({ 'data-pb-elev': s }, t('res.sh.elev.' + s), openSet,graphicButton('elevation:'+s)));
    let secs = [];
    try { const w = W(); secs = w ? readSectionLines(w) : []; } catch (e) { secs = []; }
    const sections = secs.map((s) => row({ 'data-pb-section': s.guid }, t('res.sec.name', { name: s.name }), openSet,graphicButton('section:'+s.guid)));
    let views3d = [];
    try { const ed = A.ed(); views3d = ed ? readViews(ed.api, ed.mid).views : []; } catch (e) { views3d = []; }
    const v3 = views3d.map((v) => row({ 'data-pb-3d': v.name }, v.name, () => A.root.querySelector('[data-saved-views]')?.click()));
    const sch = A.schedules?.() || {};
    const schedules = Object.keys(sch).filter((k) => sch[k]?.rows).map((k) => row({ 'data-pb-sched': k }, sch[k].title || t('model.sch.' + k), () => goSchedule(k)));
    const sheets = R.sheets.map((s) => row({ 'data-pb-sheet': s.id }, (s.number ? s.number + ' ' : '') + (s.title || t('model.sh.untitled')), () => openSheet(s.id)));
    const tpls = R.templates.map((x) => row({ 'data-pb-tpl': x.name }, x.name, () => openTemplate(x.name)));
    // 0.6 DC.117 (c): callouts (under the view each is drawn on), and those whose parent is gone
    const coEdit = (c) => el('button', { type: 'button', className: 'bc-pb-ic', 'data-pb-coedit': c.id, title: t('model.co.edit', { name: c.name }), 'aria-label': t('model.co.edit', { name: c.name }), onClick: () => editCallout(c.id) }, icon('bi-sliders'));
    const live = R.callouts.filter((c) => rootOf(c.id)), gone = R.callouts.filter((c) => !rootOf(c.id));
    const callouts = live.map((c) => row({ 'data-pb-callout': c.id, 'aria-current': A.S.on && A.S.callout === c.id ? 'true' : null, title: viewName(c.parent) }, c.name, () => openCallout(c.id), el('span', { className: 'bc-pb-tag' }, viewName(c.parent)), coEdit(c)));
    const missing = gone.map((c) => row({ 'data-pb-comissing': c.id }, c.name, () => editCallout(c.id), el('span', { className: 'bc-pb-tag' }, t('model.co.missingtag')),
      el('button', { type: 'button', className: 'bc-pb-ic', 'data-pb-codel': c.id, title: t('model.co.delete'), 'aria-label': t('model.co.delete'), onClick: () => askDelete(c.id) }, icon('bi-trash'))));
    const links = A.root.querySelectorAll('[data-links] > li').length;
    tree.replaceChildren(
      group('plans', t('model.pb.plans'), plans.length, plans),
      group('rcp', t('model.pb.rcps'), rcps.length, rcps),
      group('callouts', t('model.pb.callouts'), callouts.length, callouts.length ? callouts : [el('li', { className: 'bc-pb-tag' }, t('model.pb.nocallouts'))], [small({ 'data-pb-newcallout': '' }, t('model.pb.newcallout'), () => startCallout(), 'bi-plus-lg')]),
      ...(missing.length ? [group('missing', t('model.pb.missing'), missing.length, missing)] : []),
      group('elev', t('model.pb.elevations'), elevs.length, elevs),
      group('sections', t('model.pb.sections'), sections.length, sections.length ? sections : [el('li', { className: 'bc-pb-tag' }, t('model.pb.nosections'))]),
      group('3d', t('model.pb.views3d'), v3.length, v3.length ? v3 : [el('li', { className: 'bc-pb-tag' }, t('model.pb.no3d'))]),
      group('sched', t('model.pb.schedules'), schedules.length, schedules),
      group('sheets', t('model.pb.sheets'), sheets.length, sheets, [small({ 'data-pb-newsheet': '' }, t('model.pb.newsheet'), () => openSheet(null), 'bi-plus-lg'), small({ 'data-pb-set': '' }, t('model.pb.set'), openSet, 'bi-files')]),
      group('tpl', t('model.pb.templates'), tpls.length, tpls, [small({ 'data-pb-newtpl': '' }, t('model.pb.newtpl'), () => openTemplate(null), 'bi-plus-lg')]),
      ...(A.ask('browserGroups', { group, row, small, icon }) || []),   // 0.6 DC.114: Families (family-ui.js)
      group('links', t('model.pb.links'), links, [row({ 'data-pb-links': '' }, t('model.pb.linksgo'), () => A.root.querySelector('[data-links-sec]')?.scrollIntoView({ block: 'nearest' }))]),
    );
  }
  function goPlan(id) {
    if (!A.S.on) modelUi.show(true);
    A.goLevel(id);
  }
  function goSchedule(kind) {
    const sel = A.root.querySelector('[data-msched-kind]');
    if (sel && [...sel.options].some((x) => x.value === kind)) { sel.value = kind; sel.dispatchEvent(new Event('change')); }
    A.root.querySelector('[data-msched-sec]')?.scrollIntoView({ block: 'nearest' });
  }

  // ------------------------------------------------------------------------------------------- range fields (shared)
  /** The range and category inputs of the view range and template dialogs. vals: { cut, top, bottom, depth, hidden: [] }. */
  function rangeFields(vals, prefix, rcp = false) {
    const u = A.units();
    const len = (k, v) => el('input', { type: 'text', className: 'bc-input', ['data-' + prefix + '-' + k]: '', value: v === null ? '' : L(v) });
    const inp = { cut: len('cut', vals.cut), top: len('top', vals.top > 0 ? vals.top : null), bottom: len('bottom', vals.bottom), depth: len('depth', vals.depth) };
    inp.top.placeholder = t('model.pv.top.auto');
    // 0.6 DC.117: the scale the plan prints and goes onto sheets at (0 = the largest that fits)
    const scale = el('select', { className: 'select-cc', ['data-' + prefix + '-scale']: '' }, el('option', { value: '0' }, t('model.pv.scale.fit')), ...scalesFor(u).map((x) => el('option', { value: String(x.ratio) }, x.label)));
    scale.value = scalesFor(u).some((x) => x.ratio === vals.scale) ? String(vals.scale) : '0';
    const detail = el('select', { className: 'select-cc', ['data-' + prefix + '-detail']: '' }, ...PLAN_DETAILS.map(d => el('option', { value: d }, t('model.pv.detail.' + d))));
    detail.value = vals.detail || 'coarse';
    const cats = CATEGORIES.map(([cls, key]) => {
      const c = el('input', { type: 'checkbox', ['data-' + prefix + '-cat']: cls });
      c.checked = !vals.hidden.includes(cls);
      return el('label', {}, c, t('model.pv.cat.' + key));
    });
    const box = el('div', {},
      el('div', { className: 'bc-pv-grid' }, field(t('model.pv.cut'), inp.cut), field(t('model.pv.top'), inp.top), rcp ? null : field(t('model.pv.bottom'), inp.bottom), rcp ? null : field(t('model.pv.depth'), inp.depth), field(t('model.pv.scale'), scale), field(t('model.pv.detail'), detail)),
      el('p', { className: 'bc-muted' }, t(rcp ? 'model.pv.rcp.note' : 'model.pv.range.note')),
      el('h3', { className: 'bc-pv-h' }, t('model.pv.cats')), el('div', { className: 'bc-pv-cats' }, ...cats));
    const value = () => {
      const g = (i) => (i.value.trim() === '' ? 0 : parseLen(i.value, u));
      const out = { cut: g(inp.cut), top: g(inp.top), bottom: inp.bottom.value.trim() === '' ? 0 : parseLen(inp.bottom.value, u), depth: g(inp.depth) };
      if (![out.cut, out.top, out.bottom, out.depth].every(Number.isFinite)) return null;
      out.hidden = CATEGORIES.map(([cls]) => cls).filter((cls) => !box.querySelector(`[data-${prefix}-cat="${cls}"]`).checked);
      out.scale = Number(scale.value) || 0;
      out.detail = detail.value;
      return out;
    };
    const disable = (on) => { for (const i of box.querySelectorAll('input, select')) i.disabled = on; };
    return { box, value, disable };
  }
  function dialog(attrs, title, body, buttons, onSubmit) {
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const id = 'bc-' + Object.keys(attrs)[0] + '-h';
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': id, ...attrs },
      el('form', { method: 'dialog' }, el('h2', { className: 'bc-h', id }, title), ...body, err, el('p', { className: 'bc-lib-actions' }, ...buttons)));
    dlg.querySelector('form').addEventListener('submit', (e) => { const why = onSubmit(e.submitter?.value, e); if (why) { e.preventDefault(); err.textContent = why; } });
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
    return dlg;
  }
  const btn = (value, label, attrs = {}, primary = false) => el('button', { type: 'submit', className: (primary ? 'btn-plot' : 'btn-line') + ' btn-sm-cc', value, ...attrs }, label);
  /** Run an op; a refusal comes back as its message (the dialog stays open). */
  function run(op, meta) {
    try { A.commit(op, meta); return null; } catch (e) { return e.key ? t(e.key) : String(e.message || e); }
  }

  function openProjected(key) {
    const settings=readProjectedView(W(),key);
    const detail=el('select',{className:'select-cc','data-pj-detail':''},...PLAN_DETAILS.map(d=>el('option',{value:d},t('model.pv.detail.'+d))));detail.value=settings.detail;
    const scale=el('input',{type:'number',min:0,max:10000,step:'any',className:'bc-input',value:settings.scale,'data-pj-scale':''});
    const crop=el('input',{type:'text',className:'bc-input',value:settings.crop?.join(', ')||'','data-pj-crop':''});
    const body=[el('p',{},t('proj.scope')),field(t('model.pv.detail'),detail),field(t('model.pv.scale'),scale),field(t('proj.crop'),crop)];
    if(settings.issue)body.unshift(el('p',{role:'alert'},settings.issue));
    if(key.startsWith('elevation:'))body.push(el('p',{},t('proj.elevation')));
    dialog({'data-pj-dialog':''},t('proj.settings'),body,[btn('cancel',t('model.gp.cancel')),btn('save',t('model.sh.save'),{'data-pj-save':'',disabled:!!settings.issue},true)],value=>{
      if(value!=='save')return null;
      const values=crop.value.trim()?crop.value.split(',').map(x=>Number(x.trim())):null;
      if(values&&(crop.value.split(',').some(x=>!x.trim())||values.length!==4||values.some(x=>!Number.isFinite(x))))return t('proj.crop_error');
      return run(setProjectedView(key,{detail:detail.value,scale:Number(scale.value),crop:values}),{label:t('proj.settings'),verb:t('model.verb.changed')});
    });
  }

  // ---------------------------------------------------------------------------------------------- a plan's view range
  function openRange(levelGuid, kind = 'plan') {
    const lv = levelByGuid(levelGuid);
    if (!lv) return;
    const rcp = kind === 'rcp';   // 0.6 DC.117: a ceiling plan's range (no template, no bottom or depth: it looks up)
    const v = (rcp ? R.rcps : R.views).get(lv.id) || { ...(rcp ? RCP_DEFAULTS : { cut: 1200, top: 0, bottom: 0, depth: 50, scale: 0 }), hiddenClasses: [], hiddenGuids: [], template: '', crop: null, underlay: '' };
    const tpl = el('select', { className: 'select-cc', 'data-pv-template': '' }, el('option', { value: '' }, t('model.pv.notpl')), ...R.templates.map((x) => el('option', { value: x.name }, x.name)));
    tpl.value = v.template || '';
    const show = (name) => { const x = R.templates.find((q) => q.name === name); return x ? { cut: x.cut, top: x.top, bottom: x.bottom, depth: x.depth, hidden: x.hidden, scale: x.scale, detail: x.detail } : { cut: v.cut, top: v.top, bottom: v.bottom, depth: v.depth, hidden: v.hiddenClasses, scale: v.scale, detail: v.detail }; };
    let F = rangeFields(show(tpl.value), 'pv', rcp);
    const holder = el('div', {}, F.box);
    const tplNote = el('p', { className: 'bc-muted', 'data-pv-tplnote': '' });
    const sync = () => { F = rangeFields(show(tpl.value), 'pv', rcp); holder.replaceChildren(F.box); F.disable(!!tpl.value); tplNote.textContent = tpl.value ? t('model.pv.tpl.note', { name: tpl.value }) : ''; };
    tpl.addEventListener('change', sync);
    let hidden = v.hiddenGuids.slice();
    const hidCount = el('span', { 'data-pv-hidcount': '' });
    const showHid = () => { hidCount.textContent = t('model.pv.hidden', { n: hidden.length }); };
    const hideSel = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pv-hidesel': '' }, t('model.pv.hidesel'));
    hideSel.addEventListener('click', () => { const g = A.selectedKeys().map(guidOfKey).filter(Boolean); hidden = [...new Set([...hidden, ...g])]; showHid(); });
    const showAll = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pv-showall': '' }, t('model.pv.showall'));
    showAll.addEventListener('click', () => { hidden = []; showHid(); });
    showHid();
    // 0.6 DC.117: the crop region (drawn on the plan) and the underlay (another level, light, under this one)
    let crop = v.crop ? v.crop.slice() : null;
    const cropText = el('span', { 'data-pv-crop': '' });
    const showCrop = () => { cropText.textContent = crop ? t('model.pv.crop.is', { w: L(crop[2] - crop[0]), h: L(crop[3] - crop[1]) }) : t('model.pv.crop.none'); clearCrop.disabled = !crop; };
    const clearCrop = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pv-cropclear': '' }, t('model.pv.crop.clear'));
    clearCrop.addEventListener('click', () => { crop = null; showCrop(); });
    const under = el('select', { className: 'select-cc', 'data-pv-underlay': '' }, el('option', { value: '' }, t('model.pv.underlay.none')),
      ...(A.S.data?.levels || []).filter((l) => l.guid !== levelGuid).slice().reverse().map((l) => el('option', { value: l.guid }, l.name)));
    under.value = (A.S.data?.levels || []).some((l) => l.guid === v.underlay) ? v.underlay : '';
    showCrop();
    dialog({ 'data-pv-dialog': '', 'data-pv-kind': kind }, t(rcp ? 'model.pv.rcptitle' : 'model.pv.title', { level: lv.name }),
      [rcp ? null : field(t('model.pv.template'), tpl), rcp ? null : tplNote, holder, el('h3', { className: 'bc-pv-h' }, t('model.pv.elements')), el('p', { className: 'bc-sh-sel' }, hidCount, hideSel, showAll),
        el('h3', { className: 'bc-pv-h' }, t('model.pv.crop')), el('p', { className: 'bc-sh-sel' }, cropText, btn('crop', t('model.pv.crop.draw'), { 'data-pv-cropdraw': '' }), clearCrop),
        field(t('model.pv.underlay'), under), el('p', { className: 'bc-muted' }, t('model.pv.underlay.note'))],
      [btn('ok', t('model.pv.ok'), { 'data-pv-ok': '' }, true), rcp ? null : btn('astpl', t('model.pv.astpl'), { 'data-pv-astpl': '' }), btn('cancel', t('model.gp.cancel'))].filter(Boolean),
      (what) => {
        if (what === 'cancel' || !what) return null;
        const val = F.value();
        if (!val) return t('model.err.length');
        if (what === 'astpl') { closeAndTemplate(val, levelGuid); return null; }
        const own = { hiddenGuids: hidden, crop, underlay: under.value };
        const ch = tpl.value ? { template: tpl.value, ...own } : { cut: val.cut, top: val.top, bottom: val.bottom, depth: val.depth, scale: val.scale, detail: val.detail, hiddenClasses: val.hidden, template: '', ...own };
        if (rcp) { ch.bottom = 0; ch.depth = 0; }
        const top = (tpl.value ? 0 : val.top) || lv.height;
        if (!tpl.value && !((rcp ? val.cut > 0 : val.bottom <= val.cut) && val.cut <= top && (rcp || val.depth >= 0))) return t('model.err.vr.order');
        const why = run(setPlanView(levelGuid, ch, kind), { label: t(rcp ? 'model.pv.rcpwhat' : 'model.pv.what', { level: lv.name }), verb: t('model.verb.changed') });
        if (!why && what === 'crop') setTimeout(() => startCrop(levelGuid, kind), 0);   // the settings saved, then two corners on the plan
        return why;
      });
    sync();
  }
  function closeAndTemplate(val, levelGuid) { setTimeout(() => openTemplate(null, val, levelGuid), 0); }

  // ----------------------------------------------------------------------------------------------------- templates
  function openTemplate(name, preset = null, applyTo = null) {
    const x = name ? R.templates.find((q) => q.name === name) : null;
    const vals = x || preset || { cut: 1200, top: 0, bottom: 0, depth: 50, hidden: [], scale: 0 };
    const nm = el('input', { type: 'text', className: 'bc-input', 'data-vt-name': '', value: x ? x.name : '', maxLength: 60 });
    const F = rangeFields({ ...vals, hidden: vals.hidden || [] }, 'vt');
    const users = [...R.views.values()].filter((v) => v.template === name).length;
    const buttons = [btn('ok', t('model.vt.ok'), { 'data-vt-ok': '' }, true)];
    if (x) buttons.push(btn('delete', t('model.vt.delete'), { 'data-vt-delete': '' }));
    buttons.push(btn('cancel', t('model.gp.cancel')));
    dialog({ 'data-vt-dialog': '' }, x ? t('model.vt.edit', { name: x.name }) : t('model.vt.new'),
      [field(t('model.vt.name'), nm), x ? el('p', { className: 'bc-muted' }, t('model.vt.users', { n: users })) : null, F.box].filter(Boolean),
      buttons,
      (what) => {
        if (what === 'cancel' || !what) return null;
        if (what === 'delete') return run(deleteTemplate(x.name), { label: x.name, verb: t('model.verb.deleted') });
        const val = F.value();
        if (!val) return t('model.err.length');
        const clean = nm.value.replace(/\s+/g, ' ').trim();
        if (!clean || R.templates.some((q) => q.name === clean && q.name !== name)) return t('model.err.vr.name');
        if (!(val.bottom <= val.cut && (val.top === 0 || val.cut <= val.top) && val.depth >= 0)) return t('model.err.vr.order');
        const op = saveTemplate({ name: clean, ...val }, name);
        if (!applyTo) return run(op, { label: clean, verb: x ? t('model.verb.changed') : t('model.verb.made') });
        // made from a plan's settings: the template and that plan using it, one step
        return run(chain(op, setPlanView(applyTo, { template: clean })), { label: clean, verb: t('model.verb.made') });
      });
  }
  /** Two ops as one (one undo step): the second sees the first's changes. */
  const chain = (a, b) => (editor) => { const r1 = a(editor), r2 = b(editor); return { ...r2, journal: A.mergeJournals(r1.journal, r2.journal) }; };

  // --------------------------------------------------------------------------------------------------- the sheets
  function openSheet(id) {
    const input = A.ask('sheetInput');
    const opts = A.ask('sheetOpts') || { paper: 'tabloid', units: A.units() };
    if (!input) { A.host.status(t('model.sh.nomodel'), true); return; }
    input.callouts = calloutInput();
    const have = id ? R.sheets.find((s) => s.id === id) : null;
    const D = have ? JSON.parse(JSON.stringify(have)) : { id: null, number: 'A-' + (501 + R.sheets.length), title: t('model.sh.newtitle'), paper: opts.paper, views: [] };
    if (!PAPERS[D.paper]) D.paper = opts.paper;
    let sel = -1, sheet = null;
    const units = opts.units || A.units();
    const num = el('input', { type: 'text', className: 'bc-input', 'data-sh-number': '', value: D.number, maxLength: 20 });
    const title = el('input', { type: 'text', className: 'bc-input', 'data-sh-title': '', value: D.title, maxLength: 120 });
    const paper = el('select', { className: 'select-cc', 'data-sh-paper': '' }, ...PAPER_KEYS.map((k) => el('option', { value: k }, /^a\d$/.test(k) ? k.toUpperCase() : t('res.sh.paper.' + k))));
    labelPapers(paper, A.units());   // GH.3-A: names kept, sizes in the display unit
    paper.value = D.paper;
    num.addEventListener('input', () => { D.number = num.value; draw(); });
    title.addEventListener('input', () => { D.title = title.value; draw(); });
    paper.addEventListener('change', () => { D.paper = paper.value; draw(); });
    const arrange = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-arrange': '', title: t('model.sh.arrange.title') }, icon('bi-grid-1x2'), ' ' + t('model.sh.arrange'));
    arrange.addEventListener('click', () => {   // 0.8 EG.56: one scale that fits, shelf-packed; everything stays editable (drag, scale, remove)
      if (!D.views.length) { A.host.status(t('model.sh.empty'), true); return; }
      const r = arrangeSheet(D, input, { paper: D.paper, units });
      D.views = r.views; sel = -1; draw();
      A.host.status(r.fits ? t('model.sh.arranged', { n: D.views.length, scale: r.label }) : t('model.sh.arranged.nofit', { scale: r.label }), !r.fits);
    });
    // 0.8 EG.56 (decided 2026-10-29): a numbered legend from the model's classifications and layers; a keynote file (the person's own) gives the words; every line stays editable text
    let notes = null;
    const legendBox = el('textarea', { className: 'bc-input', 'data-sh-legend': '', rows: 6, hidden: true, 'aria-label': t('model.sh.legend.edit') });
    const legendOn = () => (D.legend || []).length > 0;
    const showLegend = () => { legendBox.hidden = !legendOn(); legendBox.value = legendToText(D.legend || []); };
    const makeLegend = () => {
      const src = window.bimcraftLegendSource?.() || A.ask('legendSource') || [];   // the window hook is for tests (a model with classifications is hard to build by clicks)
      const lg = buildLegend(src, { notes });
      if (!lg.length) { A.host.status(t('model.sh.legend.none'), true); return; }
      D.legend = lg; D.legendTitle = t('model.sh.legend.title'); showLegend(); draw();
      A.host.status(t('model.sh.legend.made', { n: lg.length }));
    };
    legendBox.addEventListener('input', () => { D.legend = legendFromText(legendBox.value, D.legend || []).map((e, i) => ({ ...e })); draw(); });
    const keynotesBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-keynotes': '', title: t('model.sh.legend.title.tip') }, icon('bi-list-ol'), ' ' + t('model.sh.legend'));
    keynotesBtn.addEventListener('click', () => { if (legendOn()) { D.legend = []; showLegend(); draw(); } else makeLegend(); });
    const keyFile = el('input', { type: 'file', accept: '.txt,.csv,.tsv,.tab,text/plain,text/csv', hidden: true, 'data-sh-keyfile': '' });
    keyFile.addEventListener('change', async () => {
      const f = keyFile.files[0]; if (!f) return;
      const r = parseKeynoteFile(await f.text());
      if (!r.rows) { A.host.status(t('model.sh.legend.badfile'), true); return; }
      notes = r.notes; makeLegend(); A.host.status(t('model.sh.legend.file', { n: r.rows, bad: r.bad }));
    });
    const keyFileBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-keyfilebtn': '', title: t('model.sh.legend.file.tip') }, icon('bi-file-earmark-text'), ' ' + t('model.sh.legend.fileb'));
    keyFileBtn.addEventListener('click', () => keyFile.click());
    const stage = el('div', { className: 'bc-sh-stage', 'data-sh-stage': '' });
    const selBar = el('div', { className: 'bc-sh-sel', 'data-sh-selbar': '' });
    const srcList = (kind, list, label) => list.length ? [el('h3', {}, label), el('ul', {}, ...list.map((x) => el('li', {}, el('span', { title: x.title }, x.title),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-add': kind + ':' + x.ref, onClick: () => add(kind, x.ref) }, t('model.sh.add')))))] : [];
    const src = el('div', { className: 'bc-sh-src', 'data-sh-src': '' },
      ...srcList('plan', input.plans, t('model.pb.plans')), ...srcList('rcp', input.rcps || [], t('model.pb.rcps')), ...srcList('callout', input.callouts || [], t('model.pb.callouts')), ...srcList('elevation', input.elevations, t('model.pb.elevations')), ...srcList('interior', input.interiors || [], t('comforts.ie.src')),   // 0.6 round 2 (bim-comforts_PART_2)
      ...srcList('section', input.sections, t('model.pb.sections')), ...srcList('schedule', input.schedules, t('model.pb.schedules')));
    function add(kind, ref) {
      const [pw, ph] = PAPERS[D.paper];
      const n = D.views.length;
      const documentation=kind==='schedule'&&ref.startsWith('f06-');
      D.views.push({ kind, ref, x: documentation?pw/2:pw / 2 + (n % 3 - 1) * 20, y: documentation?(ph+28)/2:ph / 2 + 10 - (n % 3) * 10, ratio: 0 });
      sel = D.views.length - 1;
      draw();
    }
    function draw() {
      sheet = composeSheet(D, input, { ...opts, paper: D.paper, units });
      const [pw, ph] = PAPERS[D.paper];
      stage.innerHTML = sheetSvg(sheet, { paper: D.paper });   // generated here: text in it is escaped
      stage.style.maxWidth = 'calc(56vh * ' + (pw / ph).toFixed(4) + ')';   // the whole dialog stays in the window
      const svgNS = 'http://www.w3.org/2000/svg';
      const ov = document.createElementNS(svgNS, 'svg');
      ov.setAttribute('class', 'bc-sh-ov'); ov.setAttribute('viewBox', `0 0 ${pw} ${ph}`); ov.setAttribute('preserveAspectRatio', 'none');
      for (const v of sheet.views) {
        const r = document.createElementNS(svgNS, 'rect');
        const [x0, y0, x1, y1] = v.box;
        r.setAttribute('x', x0); r.setAttribute('y', ph - y1); r.setAttribute('width', Math.max(4, x1 - x0)); r.setAttribute('height', Math.max(4, y1 - y0));
        r.setAttribute('data-sh-view', String(v.i)); r.setAttribute('aria-selected', v.i === sel ? 'true' : 'false');
        r.addEventListener('pointerdown', (e) => drag(e, v.i, r, ov));
        ov.append(r);
      }
      stage.append(ov);
      renderSel();
    }
    function drag(e, i, r, ov) {
      e.preventDefault();
      sel = i;
      for (const q of ov.querySelectorAll('rect')) q.setAttribute('aria-selected', q === r ? 'true' : 'false');
      renderSel();
      const box = ov.getBoundingClientRect(), [pw, ph] = PAPERS[D.paper];
      const kx = pw / box.width, ky = ph / box.height, sx = e.clientX, sy = e.clientY, v = D.views[i], x0 = v.x, y0 = v.y;
      const rx = Number(r.getAttribute('x')), ry = Number(r.getAttribute('y'));
      r.setPointerCapture?.(e.pointerId);
      const move = (ev) => { const dx = (ev.clientX - sx) * kx, dy = (ev.clientY - sy) * ky; r.setAttribute('x', rx + dx); r.setAttribute('y', ry + dy); v.x = round1(x0 + dx); v.y = round1(y0 - dy); };
      const up = () => { r.removeEventListener('pointermove', move); r.removeEventListener('pointerup', up); r.removeEventListener('pointercancel', up); draw(); };
      r.addEventListener('pointermove', move); r.addEventListener('pointerup', up); r.addEventListener('pointercancel', up);
    }
    function renderSel() {
      const v = D.views[sel];
      const missing = sheet?.missing.length ? el('span', { className: 'bc-input-err', 'data-sh-missing': '' }, t('model.sh.missing', { n: sheet.missing.length })) : null;
      if (!v) { selBar.replaceChildren(el('span', { className: 'bc-muted' }, D.views.length ? t('model.sh.pick') : t('model.sh.empty')), missing || ''); return; }
      const scale = el('select', { className: 'select-cc', 'data-sh-scale': '' }, el('option', { value: '0' }, t('model.sh.autoscale')), ...scalesFor(units).map((s) => el('option', { value: String(s.ratio) }, s.label)));
      scale.value = String(v.ratio || 0);
      scale.disabled = v.kind === 'schedule';
      scale.addEventListener('change', () => { v.ratio = Number(scale.value); draw(); });
      const rm = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-remove': '' }, icon('bi-x-lg'), ' ' + t('model.sh.remove'));
      rm.addEventListener('click', () => { D.views.splice(sel, 1); sel = -1; draw(); });
      const name = (input[v.kind === 'plan' ? 'plans' : v.kind === 'rcp' ? 'rcps' : v.kind === 'callout' ? 'callouts' : v.kind === 'elevation' ? 'elevations' : v.kind === 'interior' ? 'interiors' : v.kind === 'section' ? 'sections' : 'schedules'] || []).find((x) => x.ref === v.ref)?.title || v.ref;
      selBar.replaceChildren(el('strong', {}, name), field(t('model.sh.scale'), scale), rm, missing || '');
    }
    const buttons = [btn('save', t('model.sh.save'), { 'data-sh-save': '' }, true), btn('pdf', t('model.sh.pdf'), { 'data-sh-pdf': '' })];
    if (have) buttons.push(btn('delete', t('model.sh.delete'), { 'data-sh-delete': '' }));
    buttons.push(btn('cancel', t('model.sh.close')));
    const dlg = dialog({ 'data-sh-dialog': '' }, have ? t('model.sh.edit') : t('model.sh.new'),
      [el('div', { className: 'bc-sh-head' }, field(t('model.sh.number'), num), field(t('model.sh.titlef'), title), field(t('res.sh.paper'), paper), arrange, keynotesBtn, keyFileBtn, keyFile),
        el('div', { className: 'bc-sh-body' }, src, el('div', {}, stage, selBar, legendBox)), el('p', { className: 'bc-muted' }, t('model.sh.note'))],
      buttons,
      (what, e) => {
        if (what === 'cancel' || !what) return null;
        if (what === 'pdf') {
          e.preventDefault();
          const base = String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
          A.host.download(base + ' — ' + (D.number || t('model.sh.untitled')) + '.pdf', setPdf([sheet], { paper: D.paper, title: base }), 'application/pdf');   // i18n-ignore: a file name
          return null;
        }
        if (what === 'delete') return run(deleteSheet(have.id), { label: D.number || D.title, verb: t('model.verb.deleted') });
        if (!D.number.trim() && !D.title.trim()) return t('model.err.sheet.name');
        return run(saveSheet(D), { label: t('model.sh.what', { n: D.number || D.title }), verb: have ? t('model.verb.changed') : t('model.verb.made') });
      });
    dlg.classList.add('bc-sh-dlg');
    showLegend();
    draw();
  }
  const round1 = (v) => Math.round(v * 10) / 10;
  /** 0.6 DC.117 (c): what a sheet can show of each callout (one whose parent is gone is not offered: it is missing). */
  function calloutInput() {
    return R.callouts.map((c) => {
      const r = rootOf(c.id), lv = r ? levelByGuid(r.level) : null;
      return lv ? { ref: c.id, title: c.name, get scene() { return this._scene || (this._scene = A.sceneFor(lv.id, r.kind, c.id)); } } : null;
    }).filter(Boolean);
  }

  // --------------------------------------------------------------------------- the crop tool (0.6 DC.117): two corners
  function startCrop(levelGuid, kind = 'plan') {
    const lv = levelByGuid(levelGuid);
    if (!lv) return;
    if (!A.S.on) modelUi.show(true);
    if (A.S.level !== lv.id || A.S.kind !== kind) A.showKind(lv.id, kind);
    R.crop = { level: levelGuid, kind, a: null, at: null };
    A.setTool('crop');
  }
  function cropClick(p) {
    const c = R.crop;
    if (!c) return;
    if (!c.a) { c.a = p.slice(); return; }
    const rect = [Math.min(c.a[0], p[0]), Math.min(c.a[1], p[1]), Math.max(c.a[0], p[0]), Math.max(c.a[1], p[1])];
    if (rect[2] - rect[0] < 100 || rect[3] - rect[1] < 100) { A.host.status(t('model.err.vr.crop'), true); return; }
    const lv = levelByGuid(c.level);
    R.crop = null;
    A.setTool('select');
    const why = run(setPlanView(c.level, { crop: rect }, c.kind), { label: t('model.pv.crop.what', { level: lv?.name || '' }), verb: t('model.verb.changed') });
    if (why) A.host.status(why, true);
  }
  function cropOverlay(o) {
    const c = R.crop;
    if (!c || A.S.tool !== 'crop' || !c.a || !c.at) return;
    const [x0, y0] = c.a, [x1, y1] = c.at;
    o.dashed.push([x0, y0, x1, y0], [x1, y0, x1, y1], [x1, y1, x0, y1], [x0, y1, x0, y0]);
    o.hud = { p: c.at, text: L(Math.abs(x1 - x0)) + ' × ' + L(Math.abs(y1 - y0)) };   // i18n-ignore: width × height
  }

  // ------------------------------------------------------------------------- the underlay (0.6 DC.117): another level
  /** Another level's walls, cut elements and door / window symbols as plain segments in this level's plan. Cached per model
   *  snapshot; never nested (an underlay's own underlay is not drawn). */
  function underlaySegs(fromId, toId) {
    const key = fromId + '>' + toId;
    if (R.under?.data === A.S.data && R.under.key === key) return R.under.segs;
    const Mf = A.storeyMatrix(fromId), Mt = A.storeyMatrix(toId);
    if (!Mf || !Mt) return null;
    R.under = { data: A.S.data, key, segs: null, busy: true };
    let sc;
    try { sc = A.sceneFor(fromId); } finally { R.under.busy = false; }
    R.under.segs = underlaySegments(sc, mul4(inv4(Mt), Mf));
    return R.under.segs;
  }
  function addUnderlay(scene) {
    if (R.under?.busy) return;   // drawing an underlay's own level: no underlay of its own
    const r = rangeOf(A.S.level, A.S.kind), lv = r?.underlay ? levelByGuid(r.underlay) : null;
    if (!lv || lv.id === A.S.level) return;
    const segs = underlaySegs(lv.id, A.S.level);
    if (segs?.length) scene.underlay = { segs, level: lv.guid };
  }

  // ------------------------------------------------------------------ a ceiling plan's ceilings (0.6 DC.117): grid + height
  function addCeilings(scene) {
    if (scene.kind !== 'rcp') return;
    const k = A.kb(), level = A.S.level;
    const cs = (A.S.data?.derived?.ceilings || []).filter((c) => c.storey === level);
    if (!cs.length) return;
    let loops = null;
    try { loops = A.loopsOf(level); } catch (e) { return; }
    for (const c of cs) {
      const lp = loopAt(c.mode === 'building' ? loops.outlines : loops.rooms, c.seed);
      if (!lp) continue;
      const pat = CEILING_PATTERNS.find((x) => x.key === c.pattern);
      const g = ceilingGrid(lp.poly, lp.holes || [], pat);
      const thin = [];
      for (let i = 0; i + 3 < g.length; i += 4) thin.push([g[i], g[i + 1], g[i + 2], g[i + 3]]);
      if (thin.length) scene.symbols.push({ key: k + c.id, thin, poly: lp.poly });
      scene.rooms.push({ key: k + c.id, at: labelPoint(lp.poly), label: [t('model.rcp.tag', { h: L(c.height) })] });
    }
  }

  A = modelUi.extend({
    tools: ['crop', 'callout'],
    hint: (name) => (name === 'crop' ? (R.crop?.a ? 'model.hint.crop2' : 'model.hint.crop') : name === 'callout' ? (R.co?.a ? 'model.hint.callout2' : 'model.hint.callout') : null),
    typed: () => false,
    move(p) { if (R.crop) R.crop.at = p.slice(); if (R.co) R.co.at = p.slice(); },
    click(p) {
      if (A.S.tool === 'crop') { cropClick(p); if (R.crop?.a && A.root.querySelector('[data-model-hint]')) A.root.querySelector('[data-model-hint]').textContent = t('model.hint.crop2'); }
      if (A.S.tool === 'callout') calloutClick(p);
    },
    overlay: (o) => { cropOverlay(o); calloutOverlay(o); },
    escape() { if (A.S.tool !== 'crop' && A.S.tool !== 'callout') return false; R.crop = null; R.co = null; A.setTool('select'); return true; },
    toolChanged(name) { if (name !== 'crop') R.crop = null; if (name !== 'callout') R.co = null; else if (!R.co) R.co = { edit: null, a: null, at: null }; const m = A.root.querySelector('[data-annot-tools]'); if (m?.open && name === 'callout') m.open = false; },
    scene: (scene) => { addUnderlay(scene); addCeilings(scene); addCallouts(scene); },
    viewRange: (levelId, kind, callout) => rangeOf(levelId, kind, callout),
    selectClick: (p) => tagClick(p),
    viewTitle: () => { const c = A.S.callout ? R.callouts.find((x) => x.id === A.S.callout) : null; return c ? t('model.co.print', { name: c.name }) : null; },
    refresh() { read(); render(); renderChip(); },
  });
  mountDrafting(modelUi, { viewKey, viewName });   // 0.6 DC.117 (d)
  /** F28-A: the bottom bar and Properties share the authoritative effective settings and transaction. */
  function workspaceSettings(levelId = A.S.level) {
    const lv = levelOf(levelId);
    if (!lv) return null;
    const v = R.views.get(lv.id);
    return { ...effectiveView(v || null, R.templates, lv.height || 3000, 'plan'), detail: v?.detail || 'coarse', ...rangeOf(lv.id) };
  }
  function setWorkspaceSettings(patch) {
    const lv = levelOf(A.S.level), current = workspaceSettings();
    if (!lv || !A.S.on || A.S.kind !== 'plan' || A.S.callout) return t('model.needs.ifc');
    if (current?.template) return t('model.pv.tpl.note', { name: current.template });
    if (patch.detail !== undefined && !PLAN_DETAILS.includes(patch.detail)) return t('model.err.vr.order');
    if (patch.scale !== undefined && (!Number.isFinite(patch.scale) || patch.scale < 0 || patch.scale > 10000)) return t('model.err.vr.order');
    const ch = {};
    if (patch.detail !== undefined) ch.detail = patch.detail;
    if (patch.scale !== undefined) ch.scale = patch.scale;
    return run(setPlanView(lv.guid, ch), { label: t('model.pv.what', { level: lv.name }), verb: t('model.verb.changed') });
  }
  const api = { openRange, openTemplate, openSheet, render, rangeOf, startCrop, startCallout, openCallout, editCallout, viewKey, backToParent, workspaceSettings, setWorkspaceSettings };
  if (typeof window !== 'undefined') window.bimcraftViews = { state: R, api };   // for tests
  return api;
}
