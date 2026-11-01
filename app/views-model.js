/* SPDX-License-Identifier: Apache-2.0 */
import { PLAN_DETAILS } from './wall-plan-graphics.js';
/**
 * views-model.js — views the BIM way (0.6 DF.19, session `bim-draw`): each plan's view range and what it shows, view templates
 * that carry those settings, and sheets you arrange yourself. No DOM: bin/test-bimcraft.mjs --draw06 runs it in Node.
 * Kept in the IFC as property sets other programs ignore (one undo step per change):
 *   on each level  CadCraft_PlanView  Cut, Top, Bottom, Depth (mm above the level; Top 0 = the level's height), HiddenClasses
 *                                     ("IfcFurniture,IfcSpace"), HiddenElements (GlobalIds), Template (a template's name or '');
 *                                     0.6 DC.117 (bim-views_PART_2): Scale (1:n the plan prints and goes onto sheets at, 0 = fit),
 *                                     CropX0 CropY0 CropX1 CropY1 (the crop region in the level's plan; all 0 = none),
 *                                     Underlay (another level's GlobalId drawn light under this one, '' = none)
 *   on each level  CadCraft_CeilingPlan  0.6 DC.117: the level's reflected ceiling plan — Cut (default 2300), Top (0 = the level's
 *                                     height), Scale, CropX0…CropY1, HiddenClasses, HiddenElements, Underlay; no template
 *   on the project CadCraft_ViewTemplates  one IfcText per template, named by it: JSON { cut, top, bottom, depth, hidden, scale }
 *                  CadCraft_Sheets         one IfcText per sheet ("sheet-<n>"): JSON { number, title, paper, views: [{ kind
 *                                          'plan' | 'elevation' | 'section' | 'schedule', ref (a level's GlobalId, 'north'…,
 *                                          a section line's GlobalId, a schedule kind), x, y (the view's middle, sheet mm),
 *                                          ratio (1:ratio, 0 = the largest standard scale that fits a third of the sheet) }] }
 *                                          (0.6 DC.117: kind 'rcp' = a ceiling plan, 'callout' = a callout, ref its id)
 *   on the project CadCraft_CalloutViews   0.6 DC.117 (c): one IfcText per callout ("callout-<n>"): JSON { name, parent (a view key:
 *                                          'plan:<level GlobalId>' | 'rcp:<level GlobalId>' | 'callout:<id>'), crop [x0, y0, x1, y1]
 *                                          (mm in the root level's plan), scale (1:n, 0 = fit) }. A callout draws its parent's
 *                                          view (range, what it shows, floor or ceiling plan) cropped to its rectangle at its own
 *                                          scale; a parent gone (its level deleted) leaves it listed as missing until deleted.
 *   readCallouts(w) → [{ id, name, parent, crop, scale }]   parseViewKey(k) → { kind, ref } | null
 *   calloutRoot(callouts, id, levelGuids) → { kind, level, chain } | null (missing)   calloutsInside(callouts, id) → [ids]
 *   saveCallout({ id?, name, parent, crop, scale }) → op ({ callout })   deleteCallout(id) → op (with the callouts inside it and
 *       the drafting drawn in them: drafting.js)   Errors model.err.co.name, model.err.co.parent, model.err.co.gone
 *
 *   RANGE_DEFAULTS { cut 1200, top 0, bottom 0, depth 50 }
 *   readPlanViews(w, kind = 'plan' | 'rcp') → Map(level id → view)   readTemplates(w) → [template]   readSheets(w) → [sheet]
 *   effectiveView(view, templates, levelHeight) → { cut, top, bottom, depth, scale, crop, underlay, hiddenClasses: Set, hiddenGuids:
 *       Set, template }   a view with a template takes the template's range, scale and categories; its own hidden elements, crop
 *       ([x0, y0, x1, y1] plan mm | null) and underlay stay its own
 *   ops: setPlanView(levelGuid, { cut, top, bottom, depth, hiddenClasses, hiddenGuids, template, scale, crop, underlay }, kind) ·
 *       saveTemplate({ name, cut, top, bottom, depth, hidden, scale }, oldName?) · deleteTemplate(name) (views using it keep its settings as their own) · saveSheet(sheet)
 *       → op ({ id } = the sheet's id) · deleteSheet(id)
 *   ceilingGrid(poly, holes, pattern) → [x1, y1, x2, y2, …]   0.6 DC.117: a ceiling pattern's grid (model-slabs.js CEILING_PATTERNS)
 *       clipped to the ceiling's outline (minus its holes), a tile centred on the outline's box
 *   underlaySegments(scene, T) → [x1, y1, x2, y2, …]   0.6 DC.117: another level's plan scene (walls' outline, cut elements, door /
 *       window symbols) as plain segments, moved by T (4×4, that level's plan → this level's plan)
 *   Errors: model.err.vr.order (bottom ≤ cut ≤ top), model.err.vr.name, model.err.vr.template, model.err.sheet.none,
 *       model.err.vr.crop (a crop under 100 mm a side), model.err.vr.underlay (not another level), model.err.vr.scale
 */
import { op } from './model-ops.js';
import { readLevels } from './model-levels.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';
import { removeDraftingInViews } from './drafting.js';   // 0.6 DC.117 (d): a callout deleted takes its drafting with it

export const PLANVIEW_PSET = 'CadCraft_PlanView', TEMPLATES_PSET = 'CadCraft_ViewTemplates', SHEETS_PSET = 'CadCraft_Sheets';
export const RANGE_DEFAULTS = { cut: 1200, top: 0, bottom: 0, depth: 50, scale: 0, detail: 'coarse' };
export const CEILINGPLAN_PSET = 'CadCraft_CeilingPlan';
export const RCP_DEFAULTS = { cut: 2300, top: 0, bottom: 0, depth: 0, scale: 0, detail: 'coarse' };   // 0.6 DC.117: looks up from 2300 mm (about 7'-6")
const PSET_OF = { plan: PLANVIEW_PSET, rcp: CEILINGPLAN_PSET };
export const SHEET_KINDS = ['plan', 'rcp', 'callout', 'elevation', 'section', 'schedule'];
export const CALLOUTS_PSET = 'CadCraft_CalloutViews';   // 0.6 DC.117 (c)
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
const list = (s) => String(s || '').split(',').map((x) => x.trim()).filter(Boolean);
const json = (s) => { try { const v = JSON.parse(s || 'null'); return v && typeof v === 'object' ? v : null; } catch (e) { return null; } };
const fin = (x, d) => (Number.isFinite(Number(x)) ? Number(x) : d);
const scaleOf = (x) => Math.max(0, Math.min(10000, Math.round(fin(x, 0))));
/** A crop region from its four numbers (mm): ordered, or null when there is none (all 0) or it is not a real rectangle. */
export function cropOf(c) {
  if (!Array.isArray(c) || c.length !== 4 || !c.every((v) => Number.isFinite(Number(v)))) return null;
  const [a, b, d, e] = c.map(Number);
  if (!a && !b && !d && !e) return null;
  const r = [Math.min(a, d), Math.min(b, e), Math.max(a, d), Math.max(b, e)];
  return r[2] - r[0] >= 100 && r[3] - r[1] >= 100 ? r : null;
}
const cleanName = (s) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60);

export function readPlanViews(w, kind = 'plan') {
  const out = new Map(), D = kind === 'rcp' ? RCP_DEFAULTS : RANGE_DEFAULTS;
  for (const l of readLevels(w)) {
    const ps = w.readPset(l.id, PSET_OF[kind] || PLANVIEW_PSET);
    if (!ps) continue;
    out.set(l.id, {
      level: l.guid, kind, cut: fin(ps.Cut, D.cut / w.unitMm) * w.unitMm, top: fin(ps.Top, 0) * w.unitMm, bottom: fin(ps.Bottom, 0) * w.unitMm, depth: fin(ps.Depth, D.depth / w.unitMm) * w.unitMm,
      hiddenClasses: list(ps.HiddenClasses), hiddenGuids: list(ps.HiddenElements), template: String(ps.Template || ''),
      detail: PLAN_DETAILS.includes(ps.Detail) ? ps.Detail : 'coarse', scale: scaleOf(ps.Scale), crop: cropOf([ps.CropX0, ps.CropY0, ps.CropX1, ps.CropY1].map((v) => fin(v, 0) * w.unitMm)), underlay: String(ps.Underlay || ''),
    });
  }
  return out;
}
export function readTemplates(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, TEMPLATES_PSET), out = [];
  for (const [name, v] of Object.entries(ps || {})) {
    const t = json(v);
    if (!t) continue;
    out.push({ name, cut: fin(t.cut, RANGE_DEFAULTS.cut), top: fin(t.top, 0), bottom: fin(t.bottom, 0), depth: fin(t.depth, RANGE_DEFAULTS.depth), hidden: Array.isArray(t.hidden) ? t.hidden.filter((c) => /^Ifc\w+$/.test(c)) : [], scale: scaleOf(t.scale), detail: PLAN_DETAILS.includes(t.detail) ? t.detail : 'coarse' });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}
export function readSheets(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, SHEETS_PSET), out = [];
  for (const [id, v] of Object.entries(ps || {})) {
    const s = json(v);
    if (!s || !/^sheet-\d+$/.test(id)) continue;
    out.push({ id, number: String(s.number || '').slice(0, 20), title: String(s.title || '').slice(0, 120), paper: String(s.paper || ''),
      views: (Array.isArray(s.views) ? s.views : []).filter((x) => SHEET_KINDS.includes(x.kind) && typeof x.ref === 'string').map((x) => ({ kind: x.kind, ref: x.ref.slice(0, 64), x: fin(x.x, 0), y: fin(x.y, 0), ratio: Math.max(0, Math.round(fin(x.ratio, 0))) })),
      legend: (Array.isArray(s.legend) ? s.legend : []).slice(0, 60).map((e, i) => ({ n: i + 1, kind: e.kind === 'classification' ? 'classification' : 'layer', key: String(e.key || '').slice(0, 80), text: String(e.text || e.key || '').slice(0, 160), count: Math.max(0, Math.round(fin(e.count, 0))) })).filter((e) => e.key) });
  }
  return out.sort((a, b) => a.number.localeCompare(b.number, undefined, { numeric: true }) || a.id.localeCompare(b.id));
}

export function effectiveView(view, templates, levelHeight = 3000, kind = view?.kind || 'plan') {
  const t = view?.template && kind !== 'rcp' ? templates.find((x) => x.name === view.template) : null;
  const D = kind === 'rcp' ? RCP_DEFAULTS : RANGE_DEFAULTS;
  const src = t || view || D;
  const top = (src.top || 0) > 0 ? src.top : levelHeight;
  return {
    kind, detail: src.detail || 'coarse', cut: src.cut ?? D.cut, top, bottom: src.bottom ?? 0, depth: src.depth ?? RANGE_DEFAULTS.depth, scale: src.scale || 0,
    crop: view?.crop || null, underlay: view?.underlay || '',
    hiddenClasses: new Set(t ? t.hidden : view?.hiddenClasses || []), hiddenGuids: new Set(view?.hiddenGuids || []), template: t ? t.name : '',
  };
}
function checkRange(r, levelHeight = 1e9) {
  const top = r.top > 0 ? r.top : levelHeight;
  if (!(r.bottom <= r.cut && r.cut <= top) || !(r.depth >= 0)) refuse('model.err.vr.order');
}

export function setPlanView(levelGuid, ch, kind = 'plan') {
  const c = { ...ch };
  return op((w) => {
    const L = readLevels(w).find((l) => l.guid === levelGuid);
    if (!L) refuse('model.err.nolevel');
    const cur = readPlanViews(w, kind).get(L.id) || { ...(kind === 'rcp' ? RCP_DEFAULTS : RANGE_DEFAULTS), hiddenClasses: [], hiddenGuids: [], template: '', crop: null, underlay: '' };
    const nv = { ...cur, ...c };
    if (kind === 'rcp' && c.template) refuse('model.err.vr.template');   // ceiling plans take no template
    if (c.template && !readTemplates(w).some((t) => t.name === c.template)) refuse('model.err.vr.template');
    if (kind === 'rcp' && !(nv.cut > 0)) refuse('model.err.vr.order');
    checkRange(nv, L.height);
    if (!PLAN_DETAILS.includes(nv.detail)) refuse('model.err.vr.detail');
    if ('crop' in c && c.crop !== null && !cropOf(c.crop)) refuse('model.err.vr.crop');
    if ('scale' in c && !(Number.isFinite(Number(c.scale)) && Number(c.scale) >= 0 && Number(c.scale) <= 10000)) refuse('model.err.vr.scale');
    if (nv.underlay && (nv.underlay === levelGuid || !readLevels(w).some((l) => l.guid === nv.underlay))) refuse('model.err.vr.underlay');
    const crop = cropOf(nv.crop) || [0, 0, 0, 0];
    w.upsertPset(L.id, PSET_OF[kind] || PLANVIEW_PSET, [
      ['Cut', 'IFCLENGTHMEASURE', round(w.u(nv.cut))], ['Top', 'IFCLENGTHMEASURE', round(w.u(nv.top || 0))], ['Bottom', 'IFCLENGTHMEASURE', round(w.u(nv.bottom))],
      ['Depth', 'IFCLENGTHMEASURE', round(w.u(nv.depth))], ['HiddenClasses', 'IFCTEXT', [...new Set(nv.hiddenClasses)].filter((x) => /^Ifc\w+$/.test(x)).join(',')],
      ['HiddenElements', 'IFCTEXT', [...new Set(nv.hiddenGuids)].join(',')], ['Template', 'IFCLABEL', nv.template || ''],
      ['Scale', 'IFCINTEGER', scaleOf(nv.scale)], ...['CropX0', 'CropY0', 'CropX1', 'CropY1'].map((k, i) => [k, 'IFCLENGTHMEASURE', round(w.u(crop[i]))]),
      ['Underlay', 'IFCLABEL', nv.underlay || ''], ['Detail', 'IFCLABEL', nv.detail],
    ]);
    return { id: L.id, ids: [] };
  });
}

export function saveTemplate(t, oldName = null) {
  const T = { ...t, name: cleanName(t.name) };
  return op((w) => {
    if (T.detail !== undefined && !PLAN_DETAILS.includes(T.detail)) refuse('model.err.vr.detail');
    if (!T.name) refuse('model.err.vr.name');
    const all = readTemplates(w);
    if (all.some((x) => x.name === T.name && x.name !== oldName)) refuse('model.err.vr.name');
    checkRange({ cut: fin(T.cut, 1200), top: fin(T.top, 0), bottom: fin(T.bottom, 0), depth: fin(T.depth, 50) });
    const pj = project(w);
    const rows = [[T.name, 'IFCTEXT', JSON.stringify({ cut: fin(T.cut, 1200), top: fin(T.top, 0), bottom: fin(T.bottom, 0), depth: fin(T.depth, 50), hidden: (T.hidden || []).filter((c) => /^Ifc\w+$/.test(c)), scale: scaleOf(T.scale), detail: T.detail || 'coarse' })]];
    if (oldName && oldName !== T.name) {
      rows.push([oldName, 'IFCTEXT', '']);
      // views that used the old name follow the new one
      for (const [lid, v] of readPlanViews(w)) if (v.template === oldName) w.upsertPset(lid, PLANVIEW_PSET, [['Template', 'IFCLABEL', T.name]]);
    }
    w.upsertPset(pj, TEMPLATES_PSET, rows);
    return { id: pj, ids: [] };
  });
}

export function deleteTemplate(name) {
  return op((w) => {
    const t = readTemplates(w).find((x) => x.name === name);
    if (!t) refuse('model.err.vr.template');
    // views that used it keep its settings as their own
    for (const [lid, v] of readPlanViews(w)) if (v.template === name) {
      w.upsertPset(lid, PLANVIEW_PSET, [['Cut', 'IFCLENGTHMEASURE', round(w.u(t.cut))], ['Top', 'IFCLENGTHMEASURE', round(w.u(t.top))], ['Bottom', 'IFCLENGTHMEASURE', round(w.u(t.bottom))],
        ['Depth', 'IFCLENGTHMEASURE', round(w.u(t.depth))], ['HiddenClasses', 'IFCTEXT', t.hidden.join(',')], ['Scale', 'IFCINTEGER', t.scale || 0], ['Template', 'IFCLABEL', ''], ['Detail', 'IFCLABEL', t.detail || 'coarse']]);
    }
    w.upsertPset(project(w), TEMPLATES_PSET, [[name, 'IFCTEXT', '']]);
    return { id: null, ids: [] };
  });
}

export function saveSheet(sheet) {
  const S = JSON.parse(JSON.stringify(sheet));
  let fixed = S.id || null;
  return op((w) => {
    const pj = project(w);
    if (!fixed) { const have = readSheets(w); let n = 1; while (have.some((x) => x.id === 'sheet-' + n)) n++; fixed = 'sheet-' + n; }
    const views = (S.views || []).filter((x) => SHEET_KINDS.includes(x.kind)).map((x) => ({ kind: x.kind, ref: String(x.ref), x: round(fin(x.x, 0), 2), y: round(fin(x.y, 0), 2), ratio: Math.max(0, Math.round(fin(x.ratio, 0))) }));
    w.upsertPset(pj, SHEETS_PSET, [[fixed, 'IFCTEXT', JSON.stringify({ number: String(S.number || '').slice(0, 20), title: String(S.title || '').slice(0, 120), paper: String(S.paper || ''), views, ...(S.legend?.length ? { legend: S.legend.slice(0, 60).map((e) => ({ kind: e.kind, key: String(e.key).slice(0, 80), text: String(e.text || '').slice(0, 160), count: Math.round(fin(e.count, 0)) })) } : {}) })]]);
    return { id: pj, ids: [], sheet: fixed };
  });
}

// ------------------------------------------------------------------------------------------- callouts (0.6 DC.117 (c))
/** A view's key: 'plan:<level GlobalId>' | 'rcp:<level GlobalId>' | 'callout:<id>' → { kind, ref } (null when it is none). */
export function parseViewKey(k) {
  const m = /^(plan|rcp|callout):(.+)$/.exec(String(k || ''));
  return m ? { kind: m[1], ref: m[2] } : null;
}
export function readCallouts(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, CALLOUTS_PSET), out = [];
  for (const [id, v] of Object.entries(ps || {})) {
    const c = json(v);
    if (!c || !/^callout-\d+$/.test(id) || !parseViewKey(c.parent)) continue;
    const crop = cropOf(Array.isArray(c.crop) ? c.crop.map(Number) : null);
    if (!crop) continue;
    out.push({ id, name: cleanName(c.name) || id, parent: String(c.parent).slice(0, 80), crop, scale: scaleOf(c.scale) });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }) || a.id.localeCompare(b.id, undefined, { numeric: true }));
}
/** Where a callout's drawing comes from: its root view — { kind: 'plan' | 'rcp', level (GlobalId), chain: [ids, root first] } —
 *  or null when a view up its chain is gone (its level deleted: "missing"). `levels` = the levels' GlobalIds (a Set). */
export function calloutRoot(callouts, id, levels) {
  const by = new Map(callouts.map((c) => [c.id, c])), chain = [];
  let cur = by.get(id);
  while (cur && chain.length < 50) {
    if (chain.includes(cur.id)) return null;   // a loop (a file edited by hand): treated as missing
    chain.unshift(cur.id);
    const p = parseViewKey(cur.parent);
    if (p.kind !== 'callout') return levels.has(p.ref) ? { kind: p.kind, level: p.ref, chain } : null;
    cur = by.get(p.ref);
  }
  return null;
}
/** The callouts inside one (its children, theirs, …), not itself. */
export function calloutsInside(callouts, id) {
  const out = [], todo = [id];
  while (todo.length) { const p = 'callout:' + todo.pop(); for (const c of callouts) if (c.parent === p && !out.includes(c.id) && c.id !== id) { out.push(c.id); todo.push(c.id); } }
  return out;
}
/** Make or change a callout: { id? (to change), name, parent (a view key), crop [x0, y0, x1, y1] (the root level's plan, mm),
 *  scale (1:n, 0 = fit) }. → op whose result has { callout: id }. */
export function saveCallout(c) {
  const C = JSON.parse(JSON.stringify(c));
  let fixed = C.id || null;
  return op((w) => {
    const pj = project(w), all = readCallouts(w);
    const was = fixed ? all.find((x) => x.id === fixed) : null;
    if (fixed && !was && C.id) refuse('model.err.co.gone');
    const nv = { name: cleanName(C.name ?? was?.name), parent: C.parent ?? was?.parent, crop: 'crop' in C ? cropOf(C.crop) : was?.crop, scale: 'scale' in C ? C.scale : was?.scale ?? 0 };
    if (!nv.name) refuse('model.err.co.name');
    if (!nv.crop) refuse('model.err.vr.crop');
    if (!(Number.isFinite(Number(nv.scale)) && Number(nv.scale) >= 0 && Number(nv.scale) <= 10000)) refuse('model.err.vr.scale');
    const p = parseViewKey(nv.parent);
    if (!p) refuse('model.err.co.parent');
    if (p.kind === 'callout') {
      if (!all.some((x) => x.id === p.ref) || p.ref === fixed || (fixed && calloutsInside(all, fixed).includes(p.ref))) refuse('model.err.co.parent');
    } else if (!readLevels(w).some((l) => l.guid === p.ref)) refuse('model.err.co.parent');
    if (!fixed) { let n = 1; while (all.some((x) => x.id === 'callout-' + n)) n++; fixed = 'callout-' + n; }
    w.upsertPset(pj, CALLOUTS_PSET, [[fixed, 'IFCTEXT', JSON.stringify({ name: nv.name, parent: nv.parent, crop: nv.crop.map((v) => round(v, 2)), scale: scaleOf(nv.scale) })]]);
    return { id: pj, ids: [], callout: fixed };
  });
}
/** Delete a callout, the callouts inside it and the drafting drawn in any of them (drafting.js), in one step. */
export function deleteCallout(id) {
  return op((w) => {
    const all = readCallouts(w);
    if (!all.some((x) => x.id === id)) refuse('model.err.co.gone');
    const gone = [id, ...calloutsInside(all, id)];
    w.upsertPset(project(w), CALLOUTS_PSET, gone.map((g) => [g, 'IFCTEXT', '']));
    const drafting = removeDraftingInViews(w, new Set(gone.map((g) => 'callout:' + g)));
    return { id: null, ids: [], callouts: gone, drafting };
  });
}

export function deleteSheet(id) {
  return op((w) => {
    if (!readSheets(w).some((x) => x.id === id)) refuse('model.err.sheet.none');
    w.upsertPset(project(w), SHEETS_PSET, [[id, 'IFCTEXT', '']]);
    return { id: null, ids: [] };
  });
}

/** 0.6 DC.117: what an underlay draws — another level's walls (their joined outline), cut elements and door / window symbols
 *  (arcs as 12 chords) as segments in this level's plan; T maps that level's plan into this one (column-major 4×4). */
export function underlaySegments(sc, T) {
  const P = (x, y) => [T[0] * x + T[4] * y + T[12], T[1] * x + T[5] * y + T[13]];
  const out = [];
  const line = (a, b) => { const p = P(a[0], a[1]), q = P(b[0], b[1]); out.push(p[0], p[1], q[0], q[1]); };
  const segs = (f) => { for (let i = 0; i + 3 < f.length; i += 4) line([f[i], f[i + 1]], [f[i + 2], f[i + 3]]); };
  for (const pl of sc.wallEdges || (sc.walls || []).flatMap((w) => w.pieces || [])) for (let i = 0; i < pl.length; i++) line(pl[i], pl[(i + 1) % pl.length]);
  for (const c of sc.cut || []) segs(c.segs);
  for (const s of sc.symbols || []) {
    for (const l of [...(s.lines || []), ...(s.thin || [])]) segs(l);
    for (const a of s.arcs || []) {
      const n = 12;
      for (let i = 0; i < n; i++) { const t0 = a.a0 + (a.a1 - a.a0) * i / n, t1 = a.a0 + (a.a1 - a.a0) * (i + 1) / n; line([a.c[0] + a.r * Math.cos(t0), a.c[1] + a.r * Math.sin(t0)], [a.c[0] + a.r * Math.cos(t1), a.c[1] + a.r * Math.sin(t1)]); }
    }
  }
  return out;
}

/** 0.6 DC.117: a ceiling pattern's grid lines inside a ceiling's outline. poly [[x, y]…], holes [poly…], pattern { u, v } (mm
 *  along x and y; 0 = none). A tile is centred on the outline's box; each line is cut where it crosses the outline (even-odd). */
export function ceilingGrid(poly, holes = [], pattern = null) {
  const out = [];
  if (!pattern || !(pattern.u > 0) || !(pattern.v > 0) || !poly?.length) return out;
  const rings = [poly, ...(holes || [])];
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of poly) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  // the spans of the line {axis = k} inside the rings: crossings sorted, taken in pairs
  const spans = (k, vertical) => {
    const xs = [];
    for (const r of rings) for (let i = 0; i < r.length; i++) {
      const a = r[i], b = r[(i + 1) % r.length];
      const [pa, qa, pb, qb] = vertical ? [a[0], a[1], b[0], b[1]] : [a[1], a[0], b[1], b[0]];
      if ((pa > k) === (pb > k)) continue;
      xs.push(qa + (qb - qa) * (k - pa) / (pb - pa));
    }
    xs.sort((m, n) => m - n);
    for (let i = 0; i + 1 < xs.length; i += 2) if (xs[i + 1] - xs[i] > 0.5) out.push(...(vertical ? [k, xs[i], k, xs[i + 1]] : [xs[i], k, xs[i + 1], k]));
  };
  const lines = (c, lo, hi, m, vertical) => { for (let k = c + m / 2 - Math.ceil((c + m / 2 - lo) / m) * m; k <= hi; k += m) if (k > lo + 1e-6 && k < hi - 1e-6) spans(k, vertical); };
  lines(cx, x0, x1, pattern.u, true);
  lines(cy, y0, y1, pattern.v, false);
  return out;
}
