/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view-copies.js — duplicate a view, as its own copy or linked (0.9 D8.12-A, session `bim-views-09`). No DOM:
 * node bin/test-bimcraft.mjs --views09 --only a runs it in Node.
 *
 * Plans, ceiling plans, callouts, elevations and sections can be duplicated. A copy is kept beside the callouts, in the project's
 * CadCraft_CalloutViews set (one IfcText per view, "callout-<n>", the same numbering), so its key is an ordinary view key
 * ('callout:callout-<n>') and drafting (CadCraft_Drafting View), wall dimensions and pens name it as they name any view:
 *   { name, copy: { of, base, mode }, range? }
 *     of     the view it was made from: 'plan:<level GlobalId>' | 'rcp:<…>' | 'callout:<id>' | 'elevation:<side>' | 'section:<GlobalId>'
 *     base   the view it draws: plan | rcp | elevation | section key (a copy of a callout or of a copy is found through its chain)
 *     mode   'own'    its view range, crop, scale, hidden elements and categories are its own (range), and the drafting, wall
 *                     dimensions and pen overrides of the view it was made from were copied onto it: editing either never
 *                     changes the other (an older view on an issued sheet stays as issued)
 *            'linked' it shows the view it was made from with everything that view has: one set of annotations and settings
 *     range  own copies only. Plans and ceiling plans: { cut, top, bottom, depth, scale, detail, crop, underlay, hiddenClasses,
 *            hiddenGuids, template }; elevations and sections: { detail, scale, crop } (projected-views.js's record)
 * BimCraft before 0.9 reads only entries with a top-level crop as callouts, so it skips copies (they have none) and opens the file.
 *
 *   readCopies(w) → [{ id, name, of, base, mode, range }]
 *   copyRoot(copies, callouts, id, { levels: Set, sections: Set }) → { kind: 'plan'|'rcp'|'elevation'|'section', ref, chain } | null
 *   annotationKey(copies, id) → the view key whose drafting / dimensions / pens the copy shows ('callout:<id>' for an own copy,
 *       the linked source's key, followed down a chain of linked copies)
 *   duplicateView({ of, mode, name }) → op ({ copy: id })   one undo step: the entry, and for an own copy its drafting, dimensions
 *       and pens (each a new element with its own GlobalId)
 *   saveCopy(id, { name?, range? }) → op   range only on an own copy (model.err.copy.linked)
 *   makeOwn(id) → op   a linked copy becomes its own copy (what it shows now, copied)
 *   deleteCopy(id) → op   with its own drafting, dimensions and pens; copies linked to it are then listed as missing
 *   Errors: model.err.copy.of (no such view), model.err.copy.mode, model.err.copy.gone, model.err.copy.linked, model.err.co.name
 */
import { op } from './model-ops.js';
import { ids } from './ifc-util.js';
import { readLevels } from './model-levels.js';
import { readPlanViews, readTemplates, readCallouts, effectiveView, parseViewKey, cropOf, CALLOUTS_PSET, RANGE_DEFAULTS, RCP_DEFAULTS, nextViewId } from './views-model.js';
import { readDrafting, addDraftingIn } from './drafting.js';
import { readWallDimensions, saveWallDimensionIn } from './wall-dimensions.js';
import { readProjectedView } from './projected-views.js';
import { readSectionLines } from './res-sheets.js';
import { readViewPens, copyViewPensIn, VIEWPENS_PSET } from './pens.js';
import { PLAN_DETAILS } from './wall-plan-graphics.js';

export const COPY_MODES = ['own', 'linked'];
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const project = (w) => ids(w.api, w.mid, 'IFCPROJECT')[0];
const json = (s) => { try { const v = JSON.parse(s || 'null'); return v && typeof v === 'object' ? v : null; } catch (e) { return null; } };
const fin = (x, d) => (Number.isFinite(Number(x)) ? Number(x) : d);
const cleanName = (s) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60);
const KEY_RE = /^(plan|rcp):[0-9A-Za-z_$]{22}$|^callout:callout-\d+$|^elevation:(north|east|south|west)$|^section:[0-9A-Za-z_$]{22}$/;
export const isCopySource = (k) => KEY_RE.test(String(k || ''));
const kindOf = (k) => String(k || '').split(':')[0];
export const projectedKind = (k) => kindOf(k) === 'elevation' || kindOf(k) === 'section';

/** A range as kept (own copies of plans and ceiling plans): numbers clamped, lists cleaned. */
function cleanPlanRange(r, kind) {
  const D = kind === 'rcp' ? RCP_DEFAULTS : RANGE_DEFAULTS;
  const list = (a) => (Array.isArray(a) ? a.map(String).filter(Boolean).slice(0, 5000) : []);
  return {
    cut: fin(r?.cut, D.cut), top: fin(r?.top, 0), bottom: fin(r?.bottom, 0), depth: fin(r?.depth, D.depth), scale: Math.max(0, Math.min(10000, Math.round(fin(r?.scale, 0)))),
    detail: PLAN_DETAILS.includes(r?.detail) ? r.detail : 'coarse', crop: cropOf(r?.crop), underlay: String(r?.underlay || '').slice(0, 22),
    hiddenClasses: list(r?.hiddenClasses).filter((c) => /^Ifc\w+$/.test(c)), hiddenGuids: list(r?.hiddenGuids), template: cleanName(r?.template || ''),
  };
}
function cleanProjected(r) {
  const c = Array.isArray(r?.crop) && r.crop.length === 4 && r.crop.every((v) => Number.isFinite(Number(v))) && Number(r.crop[2]) > Number(r.crop[0]) && Number(r.crop[3]) > Number(r.crop[1]) ? r.crop.map(Number) : null;
  return { detail: PLAN_DETAILS.includes(r?.detail) ? r.detail : 'coarse', scale: Math.max(0, Math.min(10000, fin(r?.scale, 0))), crop: c };
}

export function readCopies(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, CALLOUTS_PSET), out = [];
  for (const [id, v] of Object.entries(ps || {})) {
    const c = json(v);
    if (!c || !/^callout-\d+$/.test(id) || !c.copy || typeof c.copy !== 'object') continue;
    const of = String(c.copy.of || ''), base = String(c.copy.base || '');
    if (!isCopySource(of) || !isCopySource(base) || kindOf(base) === 'callout') continue;
    const mode = c.copy.mode === 'linked' ? 'linked' : 'own';
    const range = mode === 'own' ? (projectedKind(base) ? cleanProjected(c.range) : cleanPlanRange(c.range, kindOf(base))) : null;
    out.push({ id, name: cleanName(c.name) || id, of, base, mode, range });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }) || a.id.localeCompare(b.id, undefined, { numeric: true }));
}

/** The view a copy draws and how it got there: { kind, ref, chain (ids, the copy last) } or null when a view on the way is gone. */
export function copyRoot(copies, callouts, id, { levels, sections = null }) {
  const byC = new Map(copies.map((c) => [c.id, c])), byO = new Map(callouts.map((c) => [c.id, c]));
  const chain = [];
  let key = 'callout:' + id;
  while (chain.length < 60) {
    const p = parseViewKey(key) || (/^(elevation|section):/.test(key) ? { kind: kindOf(key), ref: key.slice(key.indexOf(':') + 1) } : null);
    if (!p) return null;
    if (p.kind === 'plan' || p.kind === 'rcp') return levels.has(p.ref) ? { kind: p.kind, ref: p.ref, chain } : null;
    if (p.kind === 'elevation') return ['north', 'east', 'south', 'west'].includes(p.ref) ? { kind: 'elevation', ref: p.ref, chain } : null;
    if (p.kind === 'section') return !sections || sections.has(p.ref) ? { kind: 'section', ref: p.ref, chain } : null;
    if (chain.includes(p.ref)) return null;   // a loop (a file edited by hand)
    chain.unshift(p.ref);
    const c = byC.get(p.ref), o = byO.get(p.ref);
    if (c) key = c.of; else if (o) key = o.parent; else return null;
  }
  return null;
}
/** Whose annotations a copy shows: its own (own copy) or, down a chain of linked copies, the first view that has its own. */
export function annotationKey(copies, id) {
  const by = new Map(copies.map((c) => [c.id, c]));
  let cur = by.get(id), n = 0;
  if (!cur) return 'callout:' + id;
  while (cur && cur.mode === 'linked' && n++ < 60) {
    const p = parseViewKey(cur.of);
    const next = p?.kind === 'callout' ? by.get(p.ref) : null;
    if (!next) return cur.of;
    cur = next;
  }
  return 'callout:' + cur.id;
}

/** What a view shows now, as an own copy's range (plans, ceiling plans and callouts; elevations and sections: their record). */
function snapshotRange(w, key, copies, callouts, levels) {
  const p = parseViewKey(key);
  if (projectedKind(key)) {
    if (p?.kind === 'callout') { const c = copies.find((x) => x.id === p.ref); return c?.range && projectedKind(c.base) ? { ...c.range } : linkedRange(w, c, copies); }
    const r = readProjectedView(w, key);
    return cleanProjected(r);
  }
  if (p.kind === 'plan' || p.kind === 'rcp') {
    const L = levels.find((l) => l.guid === p.ref);
    const v = readPlanViews(w, p.kind).get(L.id) || null;
    const e = effectiveView(v, readTemplates(w), L.height || 3000, p.kind);
    return cleanPlanRange({ ...e, top: v ? v.top : 0, hiddenClasses: v && !e.template ? v.hiddenClasses : [...e.hiddenClasses], hiddenGuids: [...e.hiddenGuids], template: v?.template || '' }, p.kind);
  }
  // a callout or a copy
  const cp = copies.find((x) => x.id === p.ref);
  if (cp) {
    if (cp.mode === 'own') return JSON.parse(JSON.stringify(cp.range));
    return snapshotRange(w, cp.of, copies, callouts, levels);
  }
  const co = callouts.find((x) => x.id === p.ref);
  if (!co) refuse('model.err.copy.of');
  const parent = snapshotRange(w, co.parent, copies, callouts, levels);
  return { ...parent, crop: co.crop.slice(), scale: co.scale };
}
function linkedRange(w, c, copies) {
  if (!c) refuse('model.err.copy.of');
  const p = parseViewKey(c.of);
  if (p?.kind === 'callout') { const n = copies.find((x) => x.id === p.ref); return n?.mode === 'own' ? { ...n.range } : linkedRange(w, n, copies); }
  return cleanProjected(readProjectedView(w, c.of));
}
const rangeKind = (base) => (projectedKind(base) ? 'projected' : kindOf(base));

function exists(w, key, copies, callouts, levels) {
  const p = parseViewKey(key);
  if (p?.kind === 'plan' || p?.kind === 'rcp') return levels.some((l) => l.guid === p.ref);
  if (p?.kind === 'callout') return copies.some((c) => c.id === p.ref) || callouts.some((c) => c.id === p.ref);
  if (/^elevation:(north|east|south|west)$/.test(key)) return true;
  if (/^section:/.test(key)) return readSectionLines(w).some((s) => 'section:' + s.guid === key);
  return false;
}
function baseOf(key, copies, callouts) {
  const p = parseViewKey(key);
  if (!p || p.kind !== 'callout') return key;
  const c = copies.find((x) => x.id === p.ref);
  if (c) return c.base;
  // a callout: its root plan / ceiling plan
  let cur = callouts.find((x) => x.id === p.ref), n = 0;
  while (cur && n++ < 60) { const q = parseViewKey(cur.parent); if (q.kind !== 'callout') return cur.parent; cur = callouts.find((x) => x.id === q.ref); }
  return null;
}

/** Copy what is drawn in view `from` onto view `to`: drafting, wall dimensions, pen overrides (inside an op). → counts. */
function copyAnnotationsIn(w, from, to) {
  let drafting = 0, dims = 0;
  for (const d of readDrafting(w).filter((x) => x.view === from)) {
    const level = d.storey !== null ? w.guidOf(d.storey) : null;
    if (!level) continue;
    addDraftingIn(w, { kind: d.kind, pts: d.pts, closed: d.closed, holes: d.holes, pattern: d.pattern, scale: d.scale, view: to, level });
    drafting++;
  }
  for (const d of readWallDimensions(w).filter((x) => x.view === from && !x.issue)) {
    const level = d.storey !== null ? w.guidOf(d.storey) : null;
    if (!level) continue;
    try { saveWallDimensionIn(w, { version: 1, refs: d.refs, axis: d.axis, offset: d.offset, view: to, level }); dims++; } catch (e) { /* a dimension whose walls are gone is not copied */ }
  }
  const pens = copyViewPensIn(w, from, to);
  return { drafting, dims, pens };
}
function writeEntry(w, id, entry) {
  w.upsertPset(project(w), CALLOUTS_PSET, [[id, 'IFCTEXT', JSON.stringify(entry)]]);
}

export function duplicateView(spec) {
  const S = { of: String(spec?.of || ''), mode: spec?.mode, name: spec?.name };
  let fixed = spec?.id || null;
  return op((w) => {
    if (!COPY_MODES.includes(S.mode)) refuse('model.err.copy.mode');
    const copies = readCopies(w), callouts = readCallouts(w), levels = readLevels(w);
    if (!isCopySource(S.of) || !exists(w, S.of, copies, callouts, levels)) refuse('model.err.copy.of');
    const base = baseOf(S.of, copies, callouts);
    if (!base) refuse('model.err.copy.of');
    const name = cleanName(S.name);
    if (!name) refuse('model.err.co.name');
    if (!fixed) fixed = nextViewId(w);
    const entry = { name, copy: { of: S.of, base, mode: S.mode } };
    let copied = { drafting: 0, dims: 0, pens: 0 };
    if (S.mode === 'own') {
      entry.range = snapshotRange(w, S.of, copies, callouts, levels);
      // what the source shows: its own annotations, or (a linked copy) its source's
      const from = parseViewKey(S.of)?.kind === 'callout' && copies.some((c) => c.id === parseViewKey(S.of).ref) ? annotationKey(copies, parseViewKey(S.of).ref) : S.of;
      copied = copyAnnotationsIn(w, from, 'callout:' + fixed);
    }
    writeEntry(w, fixed, entry);
    return { id: project(w), ids: [], copy: fixed, copied };
  });
}

export function saveCopy(id, ch) {
  const C = JSON.parse(JSON.stringify(ch || {}));
  return op((w) => {
    const c = readCopies(w).find((x) => x.id === id);
    if (!c) refuse('model.err.copy.gone');
    const entry = { name: c.name, copy: { of: c.of, base: c.base, mode: c.mode }, ...(c.range ? { range: c.range } : {}) };
    if ('name' in C) { entry.name = cleanName(C.name); if (!entry.name) refuse('model.err.co.name'); }
    if ('range' in C) {
      if (c.mode !== 'own') refuse('model.err.copy.linked');
      const k = rangeKind(c.base);
      if (k === 'projected') entry.range = cleanProjected({ ...c.range, ...C.range });
      else {
        const nv = { ...c.range, ...C.range };
        if ('crop' in C.range && C.range.crop !== null && !cropOf(C.range.crop)) refuse('model.err.vr.crop');
        const lv = readLevels(w).find((l) => l.guid === parseViewKey(c.base)?.ref);
        const top = nv.top > 0 ? nv.top : (lv?.height || 1e9);
        if (k === 'rcp' ? !(nv.cut > 0 && nv.cut <= top) : !(nv.bottom <= nv.cut && nv.cut <= top && nv.depth >= 0)) refuse('model.err.vr.order');
        if (nv.template && !readTemplates(w).some((t) => t.name === nv.template)) refuse('model.err.vr.template');
        entry.range = cleanPlanRange(nv, k);
      }
    }
    writeEntry(w, id, entry);
    return { id: project(w), ids: [], copy: id };
  });
}

export function makeOwn(id) {
  return op((w) => {
    const copies = readCopies(w), callouts = readCallouts(w), levels = readLevels(w);
    const c = copies.find((x) => x.id === id);
    if (!c) refuse('model.err.copy.gone');
    if (c.mode === 'own') return { id: project(w), ids: [], copy: id };
    const range = snapshotRange(w, 'callout:' + id, copies, callouts, levels);
    const from = annotationKey(copies, id);
    const copied = copyAnnotationsIn(w, from, 'callout:' + id);
    writeEntry(w, id, { name: c.name, copy: { of: c.of, base: c.base, mode: 'own' }, range });
    return { id: project(w), ids: [], copy: id, copied };
  });
}

export function deleteCopy(id) {
  return op((w) => {
    const c = readCopies(w).find((x) => x.id === id);
    if (!c) refuse('model.err.copy.gone');
    const key = 'callout:' + id;
    const drop = [...readDrafting(w).filter((d) => d.view === key).map((d) => d.id), ...readWallDimensions(w).filter((d) => d.view === key).map((d) => d.id)];
    if (drop.length) w.dropProduct(drop);
    const pj = project(w);
    w.upsertPset(pj, CALLOUTS_PSET, [[id, 'IFCTEXT', '']]);
    if (readViewPens(w).has(key)) w.upsertPset(pj, VIEWPENS_PSET, [[key, 'IFCTEXT', '']]);
    return { id: null, ids: [], removed: drop.length };
  });
}
