// SPDX-License-Identifier: Apache-2.0
// A project bundle in BimCraft's left panel (0.6 DF.12 (b), session `bim-interop`): the project, its views (each opens
// with its storey, layer combination and scale), its layouts (PDF / DWG), its property groups and standards.
// The DOM-free work is bundle-open.js and prop-map.js; this file only draws and wires. Every text from the bundle
// goes through el() (text nodes): a bundle is untrusted.
import { el, bytes, num } from './ui-util.js';
import { adoptFromBundle } from './picture-store.js';   // 0.8 D8.8 round 3
import { t } from './i18n.js';
import { getDisplayUnits, fmtPaper } from './model-units.js';   // GH.3-A: a layout's size in the display unit
import { openBundle, layerIndex, viewPlan, viewTree, storeyGuids } from './bundle-open.js';
import { groupProps } from './prop-map.js';

const ERR = ['notzip', 'zip64', 'broken', 'toomany', 'nomanifest', 'json', 'format', 'version', 'depth', 'model', 'nomodel', 'toolarge', 'encrypted', 'method'];
const KIND_ICON = { plan: 'bi-grid-3x3', section: 'bi-distribute-vertical', elevation: 'bi-building', interior_elevation: 'bi-door-open', detail: 'bi-zoom-in', worksheet: 'bi-file-earmark', '3d': 'bi-box', document_3d: 'bi-box', schedule: 'bi-table', list: 'bi-list-ul', other: 'bi-eye' };

/** A bundle error → the person's words. */
export function bundleError(e, name) {
  const code = ERR.includes(e?.code) ? e.code : 'other';
  return t('bundle.err.' + code, { file: name, entry: e?.entry || '' });
}

/**
 * Mount the bundle section. ctx: { panel (element the section goes after), status(msg, isError, fade), mode() → 'ifc'|…,
 * openModel(bytes, fileLike) → Promise (BimCraft's openIfc), openFile(file) (BimCraft's open: DWG layouts),
 * download(name, bytes, type), viewer() → Viewer3D, model() → the active model entry {mi, ifc, model}, afterVis() }.
 * → { open(file), clear(), picked(p), state() }
 */
export function mountBundle(ctx) {
  const sec = el('section', { className: 'bc-sec bc-bundle', 'data-bundle-sec': '', hidden: true });
  ctx.panel.after(sec);
  let b = null;          // { file, index, manifest, notes, missing, layers, guids, current (view id) }
  let pick = null;       // the last picked element's properties

  async function open(file) {
    ctx.status(t('bundle.reading', { file: file.name, size: bytes(file.size) }));
    let ob;
    try { ob = await openBundle(file); } catch (e) { throw Object.assign(new Error(bundleError(e, file.name)), { userFacing: true }); }
    b = { file, ...ob, layers: null, guids: null, current: null };
    await loadModel();
    const m = ob.manifest;
    const ent = ctx.model();
    try { b.layers = layerIndex(ent.ifc.api, ent.model.modelID, ent.model); b.guids = storeyGuids(ent.ifc.api, ent.model.modelID, ent.model); } catch (e) { b.layers = new Map(); b.guids = new Map(); }
    render();
    const n = m.views.length, k = m.layouts.length;
    ctx.status(t('bundle.opened', { file: file.name, views: t('bundle.n.views', { n, count: num(n) }), layouts: t('bundle.n.layouts', { n: k, count: num(k) }) }), false, true);
  }

  /** Open (or open again, after a layout's DWG took the stage) the bundle's model. */
  async function loadModel() {
    let data;
    try { data = await b.index.read(b.manifest.model.file); } catch (e) { throw Object.assign(new Error(bundleError(e, b.file.name)), { userFacing: true }); }
    try { await adoptFromBundle(b.index); } catch (e) { /* pictures missing: Problems says so */ }   // 0.8 D8.8: the bundle's pictures/ files, before the model reads its references
    await ctx.openModel(data, new File([data], b.manifest.model.file.split('/').pop()));
  }

  function clear() { b = null; pick = null; sec.hidden = true; sec.replaceChildren(); }

  async function showView(v) {
    if (!b) return;
    if (ctx.mode() !== 'ifc') { await loadModel(); render(); }   // a layout drawing is open: back to the model
    const viewer = ctx.viewer(), ent = ctx.model();
    if (!viewer || !ent) return;
    const plan = viewPlan(b.manifest, v, ent.model, b.layers, b.guids);
    const kb = ent.model.keyBase || 0;
    viewer.vis.showAll();
    if (plan.hidden.size) viewer.vis.hide([...plan.hidden].map((id) => kb + id));
    viewer.applyVisibility?.();
    const show = plan.storeyIds ? new Set(plan.storeyIds) : null;
    for (const s of ent.model.storeys) viewer.setStoreyVisible(s.id, !show || show.has(s.id), ent.mi);
    viewer.setStoreyVisible(-1, !show, ent.mi);
    for (const box of document.querySelectorAll('[data-storey]')) box.checked = !show || show.has(Number(box.dataset.storey));
    viewer.view(plan.mode === 'plan' ? 'top' : 'iso');
    ctx.afterVis?.();
    b.current = v.id;
    render();
    const bits = [];
    if (plan.story) bits.push(t('bundle.view.story', { name: plan.story.name }));
    if (plan.scale) bits.push(t('bundle.view.scale', { scale: num(plan.scale) }));
    if (plan.combination) bits.push(plan.unknownCombination ? t('bundle.view.lc.unknown', { name: plan.combination }) : t('bundle.view.lc', { name: plan.combination, n: plan.hidden.size, count: num(plan.hidden.size) }));
    if (v.story !== undefined && !plan.storeyIds) bits.push(t('bundle.view.nostorey'));
    ctx.status(t('bundle.view.shown', { name: v.name, what: bits.join('; ') || t('bundle.view.whole') }), false, true);
  }

  /** 0.7 BIM-BUNDLE-OPEN: a layout's file to the app that can work on it, in a new tab (handoff.js). */
  async function layoutHand(l, kind) {
    const app = ctx.apps?.[kind], path = kind === 'pdf' ? l.pdf : l.dwg;
    if (!app || !ctx.handoff) return;
    const name = path.split('/').pop();
    try {
      await ctx.handoff(app, async () => new File([await b.index.read(path)], name, { type: kind === 'pdf' ? 'application/pdf' : 'application/acad' }));
      ctx.status(t('bundle.layout.sent', { file: name, app: app.name }), false, true);
    } catch (e) { console.error(e); ctx.status(e.code && ERR.includes(e.code) ? bundleError(e, b.file.name) : t(e.code === 'blocked' ? 'handoff.blocked' : 'handoff.failed'), true); }
  }
  async function layoutFile(l, kind) {
    const path = kind === 'pdf' ? l.pdf : l.dwg;
    let data;
    try { data = await b.index.read(path); } catch (e) { ctx.status(bundleError(e, b.file.name), true); return; }
    const name = path.split('/').pop();
    if (kind === 'dwg') { await ctx.openFile(new File([data], name, { type: 'application/acad' })); return; }
    ctx.download(name, data, 'application/pdf');
  }

  const dl = (rows) => el('dl', { className: 'bc-dl' }, rows.filter(([, v]) => v !== undefined && v !== null && v !== '').map(([k, v]) => [el('dt', {}, k), el('dd', {}, String(v))]));

  function viewsBlock(m) {
    if (!m.views.length) return el('p', { className: 'bc-muted' }, t('bundle.views.none'));
    return viewTree(m.views).map((g) => el('div', { className: 'bc-bundle-group' },
      g.path.length ? el('p', { className: 'bc-bundle-path' }, g.path.join(' / ')) : null,
      el('ul', { className: 'bc-bundle-list', 'data-bundle-views': '' }, g.items.map((v) => el('li', { className: v.id === b.current ? 'is-now' : null },
        el('i', { className: 'bi ' + (KIND_ICON[v.kind] || 'bi-eye'), 'aria-hidden': 'true' }),
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-bundle-view': v.id, title: t('bundle.view.title'), onClick: () => showView(v).catch((e) => ctx.status(e.message || String(e), true)) }, v.name),
        el('span', { className: 'bc-muted' }, [v.scale ? '1:' + num(v.scale) : null, v.layer_combination].filter(Boolean).join(', ')))))));
  }

  function layoutsBlock(m) {
    if (!m.layouts.length) return el('p', { className: 'bc-muted' }, t('bundle.layouts.none'));
    return el('ul', { className: 'bc-bundle-list', 'data-bundle-layouts': '' }, m.layouts.map((l) => el('li', {},
      el('span', { className: 'bc-bundle-lname' }, [l.number, l.name].filter(Boolean).join(' ')),
      l.size ? el('span', { className: 'bc-muted' }, fmtPaper(Number(l.size.w), Number(l.size.h), getDisplayUnits()) || t('bundle.layout.size', { w: num(l.size.w), h: num(l.size.h) })) : null,
      el('span', { className: 'bc-bundle-acts' },
        l.pdf && b.index.has(l.pdf) ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-bundle-pdf': l.id, title: t('bundle.layout.pdf.title'), onClick: () => layoutFile(l, 'pdf') }, t('bundle.layout.pdf')) : null,
        l.dwg && b.index.has(l.dwg) ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-bundle-dwg': l.id, title: t('bundle.layout.dwg.title'), onClick: () => layoutFile(l, 'dwg') }, t('bundle.layout.dwg')) : null,
        l.pdf && b.index.has(l.pdf) && ctx.apps?.pdf ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-bundle-pdf-hand': l.id, title: t('bundle.layout.hand.title', { app: ctx.apps.pdf.name }), onClick: () => layoutHand(l, 'pdf') }, t('bundle.layout.hand', { app: ctx.apps.pdf.name })) : null,
        l.dwg && b.index.has(l.dwg) && ctx.apps?.dwg ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-bundle-dwg-hand': l.id, title: t('bundle.layout.hand.title', { app: ctx.apps.dwg.name }), onClick: () => layoutHand(l, 'dwg') }, t('bundle.layout.hand', { app: ctx.apps.dwg.name })) : null,
        !(l.pdf && b.index.has(l.pdf)) && !(l.dwg && b.index.has(l.dwg)) ? el('span', { className: 'bc-muted' }, t('bundle.layout.nofile')) : null),
      l.drawings.length ? el('span', { className: 'bc-muted bc-bundle-drawings' }, t('bundle.layout.drawings', { list: l.drawings.map((d) => d.name).filter(Boolean).join(', ') })) : null)));
  }

  function propsBlock(m) {
    const groups = m.properties.groups, defs = m.properties.definitions;
    if (!defs.length) return el('p', { className: 'bc-muted' }, t('bundle.props.none'));
    const out = [];
    if (pick) {
      const g = groupProps(m, pick);
      out.push(el('p', { className: 'bc-muted' }, t('bundle.props.of', { name: pick.name || pick.cls })));
      if (!g.groups.length) out.push(el('p', { className: 'bc-muted' }, t('bundle.props.nomatch')));
      for (const grp of g.groups) out.push(el('p', { className: 'bc-bundle-path' }, grp.name ?? t('bundle.props.ungrouped')), dl(grp.rows.map((r) => [r.name, r.value + (r.unit ? ' ' + r.unit : '')])));
    } else out.push(el('p', { className: 'bc-muted' }, t('bundle.props.pick')));
    out.push(el('details', { className: 'bc-bundle-defs' }, el('summary', {}, t('bundle.props.defs', { n: defs.length, count: num(defs.length) })),
      el('ul', { className: 'bc-bundle-list' }, defs.map((d) => el('li', {}, el('span', {}, d.name),
        el('span', { className: 'bc-muted' }, [groups.find((x) => x.id === d.group)?.name, d.type, d.ifc?.pset && d.ifc?.name ? d.ifc.pset + '.' + d.ifc.name : null].filter(Boolean).join(', ')))))));
    return out;
  }

  function standardsBlock(m) {
    const s = m.standards;
    const rows = [['layers', s.layers], ['layer_combinations', s.layer_combinations], ['pen_sets', s.pen_sets], ['line_types', s.line_types], ['fills', s.fills], ['surfaces', s.surfaces], ['composites', s.composites], ['materials', s.materials]].filter(([, v]) => v.length);
    if (!rows.length) return el('p', { className: 'bc-muted' }, t('bundle.std.none'));
    return dl(rows.map(([k, v]) => [t('bundle.std.' + k), num(v.length)]));
  }

  function render() {
    if (!b) { clear(); return; }
    const m = b.manifest;
    const host = m.generator?.host;
    const notes = [...m.notes, ...b.notes.map((n) => t('bundle.note.field', { where: n.where, what: t('bundle.note.' + n.what) })), ...b.missing.map((p) => t('bundle.note.nofile', { path: p }))];
    sec.replaceChildren(
      el('h2', { className: 'bc-h' }, t('bundle.title')),
      dl([[t('bundle.project'), m.project.name], [t('bundle.file'), b.file.name], [t('bundle.from'), host?.program ? [host.program, host.version].filter(Boolean).join(' ') : null],
        [t('bundle.kind'), m.project.kind ? t('bundle.kind.' + m.project.kind) : null], [t('bundle.exported'), m.project.exported_at], [t('bundle.translator'), m.model.translator]]),
      el('details', { className: 'bc-find-details', open: true, 'data-bundle-views-sec': '' }, el('summary', { className: 'bc-h' }, t('bundle.views')), viewsBlock(m)),
      el('details', { className: 'bc-find-details', open: true, 'data-bundle-layouts-sec': '' }, el('summary', { className: 'bc-h' }, t('bundle.layouts')), layoutsBlock(m)),
      el('details', { className: 'bc-find-details', 'data-bundle-props-sec': '', open: !!pick }, el('summary', { className: 'bc-h' }, t('bundle.props')), propsBlock(m)),
      el('details', { className: 'bc-find-details', 'data-bundle-std-sec': '' }, el('summary', { className: 'bc-h' }, t('bundle.std')), standardsBlock(m)),
      notes.length ? el('details', { className: 'bc-find-details', 'data-bundle-notes': '' }, el('summary', { className: 'bc-h' }, t('bundle.notes', { n: notes.length, count: num(notes.length) })),
        el('ul', { className: 'bc-bundle-list' }, notes.slice(0, 200).map((s) => el('li', {}, s)))) : null);
    sec.hidden = false;
  }

  /** The Properties panel picked an element (null = nothing): show it in the bundle's groups. */
  function picked(p) { if (!b) return; pick = p || null; render(); }

  return { open, clear, picked, showView, state: () => b && { manifest: b.manifest, notes: b.notes, missing: b.missing, current: b.current, layers: b.layers && Object.fromEntries([...b.layers].map(([k, v]) => [k, v.size])) } };
}
