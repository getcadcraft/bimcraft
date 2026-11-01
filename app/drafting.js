/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drafting.js — drafting lines and hatch regions drawn in one view (0.6 DC.117 (d), session `bim-views_PART_2`): a floor
 * plan, a ceiling plan or a callout. No DOM: bin/test-bimcraft.mjs --views2 --only d runs it in Node. Plan millimetres of the
 * view's level (the level's own X / Y).
 *
 * Kept in the IFC as what it is — an IfcAnnotation (ObjectType "Drafting") contained in the view's level:
 *   lines   Representation 'FootPrint' context, 'Annotation' / 'GeometricCurveSet': an IfcGeometricCurveSet of one 2D IfcPolyline
 *           (a closed one ends on its first point)
 *   hatch   'Annotation' / 'Annotation2D': an IfcAnnotationFillArea (outer IfcPolyline, inner ones for holes) with an IfcStyledItem
 *           naming an IfcFillAreaStyle — IfcFillAreaStyleHatching per line family of the pattern (one per angle; dots, zigzags
 *           and short strokes are BimCraft's drawing of it), or an IfcColourRgb for Solid. Styles are shared by name
 *           ("CadCraft drafting: <pattern> x<scale>").
 *   CadCraft_Drafting   View ('plan:<level GlobalId>' | 'rcp:<level GlobalId>' | 'callout:<id>'), Kind ('lines' | 'hatch'),
 *           Pattern (a key of PATTERNS, hatch only), PatternScale (1 = the pattern's own spacing)
 * Other programs see the curves and the fill area (and its hatching); BimCraft shows each only in its own view (never in 3D,
 * never in another view), on screen, on sheets and in the PDF.
 *
 *   PATTERNS  [{ key, solid?, families: [{ angle (degrees), gap (mm at scale 1), group?: [offsets] }] }]   six, no import
 *   readDrafting(w) → [{ id, guid, storey, view, kind, pattern, scale, pts: [[x, y]…], closed, holes: [[[x, y]…]] }]
 *   addDrafting({ level, view, kind: 'lines' | 'hatch', pts, closed, holes, pattern, scale }) → op (one undo step; { guid })
 *   changeDrafting(guids, { pattern, scale }) → op   moveDrafting(guids, dx, dy) → op   removeDrafting(guids) → op
 *   removeDraftingInViews(w, views: Set) — for views-model.js deleteCallout (inside its op)
 *   hatchSegments(outer, holes, pattern, scale) → [x1, y1, x2, y2, …]   the pattern's strokes clipped to the region (even-odd),
 *       anchored at the plan's origin so neighbouring regions line up
 *   clipSegment(rings, a, b) → [[a', b']…]   the pieces of a–b inside the rings (even-odd)
 *   draftingItem(d, key) → the plan scene's item (model-planview.js scene.drafting): { key, guid, kind, lines: [[[x, y]…]],
 *       closed, rings (hatch: outer + holes), solid, segs }
 *   Errors: model.err.dr.short (under 2 points / 10 mm), model.err.dr.area (a hatch under 3 corners or no area),
 *       model.err.dr.pattern, model.err.dr.view, model.err.gone
 */
import { op } from './model-ops.js';
import { ids, val } from './ifc-util.js';
import { round } from './model-write.js';

export const DRAFT_PSET = 'CadCraft_Drafting';
const OBJECT_TYPE = 'Drafting';
/** The six patterns: line families (angle in degrees, gap between lines in mm at scale 1; `group` = more lines at these
 *  offsets after each one), plus what BimCraft adds when it draws them (dots for concrete, zigzags for insulation). */
export const PATTERNS = [
  { key: 'solid', solid: true, families: [] },
  { key: 'diagonal', families: [{ angle: 45, gap: 150 }] },
  { key: 'cross', families: [{ angle: 45, gap: 150 }, { angle: 135, gap: 150 }] },
  { key: 'concrete', families: [{ angle: 45, gap: 600 }], dots: 120 },
  { key: 'insulation', families: [], zigzag: 200 },
  { key: 'earth', families: [{ angle: 45, gap: 450, group: [40, 80] }] },
];
export const PATTERN_KEYS = PATTERNS.map((p) => p.key);
const MAX_STROKES = 30000;   // a pattern far too fine for its region gets coarser rather than freezing the page
const refuse = (key) => { throw Object.assign(new Error(key), { key }); };
const VIEW_RE = /^(plan|rcp):[0-9A-Za-z_$]{22}$|^callout:callout-\d+$/;
export const isViewKey = (v) => VIEW_RE.test(String(v || ''));
const scaleOf = (x) => { const v = Number(x); return Number.isFinite(v) && v > 0 ? Math.min(50, Math.max(0.1, v)) : 1; };
const area2 = (p) => { let a = 0; for (let i = 0; i < p.length; i++) { const q = p[i], r = p[(i + 1) % p.length]; a += q[0] * r[1] - r[0] * q[1]; } return a / 2; };
const clean = (pts) => {
  const out = [];
  for (const q of pts || []) { if (!Array.isArray(q) || !Number.isFinite(+q[0]) || !Number.isFinite(+q[1])) continue; const p = [+q[0], +q[1]]; const l = out[out.length - 1]; if (!l || Math.hypot(p[0] - l[0], p[1] - l[1]) > 0.5) out.push(p); }
  return out;
};

// ------------------------------------------------------------------------------------------------------------ reading
export function readDrafting(w) {
  const out = [];
  let list = [];
  try { list = ids(w.api, w.mid, 'IFCANNOTATION'); } catch (e) { return out; }
  const so = w.storeyOf();
  for (const id of list) {
    const ps = w.readPset(id, DRAFT_PSET);
    if (!ps) continue;
    const a = w.api.GetLine(w.mid, id, false);
    const d = { id, guid: val(a.GlobalId), storey: so.get(id) ?? null, view: String(ps.View || ''), kind: ps.Kind === 'hatch' ? 'hatch' : 'lines', pattern: PATTERN_KEYS.includes(ps.Pattern) ? ps.Pattern : 'diagonal', scale: scaleOf(ps.PatternScale), pts: [], closed: false, holes: [] };
    const curve = (h) => {
      const pl = h ? w.api.GetLine(w.mid, h, false) : null, pts = [];
      for (const ph of pl?.Points || []) { const p = w.api.GetLine(w.mid, ph.value, false); const c = (p?.Coordinates || []).map((v) => Number(val(v)) * w.unitMm); pts.push([c[0], c[1]]); }
      return pts;
    };
    const sh = a.Representation?.value ? w.api.GetLine(w.mid, a.Representation.value, false) : null;
    for (const h of sh?.Representations || []) {
      const r = w.api.GetLine(w.mid, h.value, false);
      for (const it of r?.Items || []) {
        const item = w.api.GetLine(w.mid, it.value, false);
        if (item?.OuterBoundary) { d.pts = curve(item.OuterBoundary.value); d.holes = (item.InnerBoundaries || []).map((x) => curve(x.value)); }
        else for (const ch of item?.Elements || []) d.pts = curve(ch.value);
      }
    }
    const P = d.pts;
    if (P.length > 2 && Math.hypot(P[0][0] - P[P.length - 1][0], P[0][1] - P[P.length - 1][1]) < 0.01) { P.pop(); d.closed = true; }
    if (d.kind === 'hatch') { d.closed = true; d.holes = d.holes.map((h) => (h.length > 2 && Math.hypot(h[0][0] - h[h.length - 1][0], h[0][1] - h[h.length - 1][1]) < 0.01 ? h.slice(0, -1) : h)); }
    if (P.length >= 2) out.push(d);
  }
  return out;
}

// ------------------------------------------------------------------------------------------------------------ writing
const angleK = (w) => {
  if (w._angleK !== undefined) return w._angleK;
  let k = 1;
  try { for (const id of ids(w.api, w.mid, 'IFCCONVERSIONBASEDUNIT')) { const u = w.api.GetLine(w.mid, id, false); if (String(val(u.UnitType)) === 'PLANEANGLEUNIT' && /deg/i.test(String(val(u.Name)))) k = 180 / Math.PI; } } catch (e) { /* radians */ }
  return (w._angleK = k);
};
/** The fill area style of a pattern at a scale, shared by name (found in the file, else made). */
function fillStyle(w, pattern, scale) {
  const name = 'CadCraft drafting: ' + pattern + ' x' + round(scale, 3);   // i18n-ignore: a style name kept in the IFC (plain ASCII)
  for (const id of ids(w.api, w.mid, 'IFCFILLAREASTYLE')) { const l = w.api.GetLine(w.mid, id, false); if (l && val(l.Name) === name) return id; }
  const P = PATTERNS.find((p) => p.key === pattern) || PATTERNS[1];
  const black = () => w.make('IFCCOLOURRGB', null, 0, 0, 0);
  const styles = [];
  if (P.solid) styles.push(w.H(w.make('IFCCOLOURRGB', null, 0.35, 0.35, 0.35)));
  for (const f of P.families) {
    const cs = w.v4 ? w.make('IFCCURVESTYLE', null, null, null, w.H(black()), null) : w.make('IFCCURVESTYLE', null, null, null, w.H(black()));
    styles.push(w.H(w.make('IFCFILLAREASTYLEHATCHING', w.H(cs), w.T('IFCPOSITIVELENGTHMEASURE', round(w.u(f.gap * scale))), null, null, round(f.angle * Math.PI / 180 * angleK(w), 9))));
  }
  if (!styles.length) styles.push(w.H(black()));   // insulation: drawn by BimCraft; other programs get a plain black fill style
  return w.v4 ? w.make('IFCFILLAREASTYLE', w.L(name), styles, null) : w.make('IFCFILLAREASTYLE', w.L(name), styles);
}
/** The annotation's shape for a drafting item (replacing any it had). */
function writeShape(w, id, d) {
  if (d.kind === 'hatch') {
    const fa = w.make('IFCANNOTATIONFILLAREA', w.H(w.polyline2(d.pts, true)), d.holes.length ? d.holes.map((h) => w.H(w.polyline2(h, true))) : null);
    w.styleItem(fa, fillStyle(w, d.pattern, d.scale));
    w.setShape(id, [w.rep('foot', 'Annotation', 'Annotation2D', [fa])]);
  } else {
    w.setShape(id, [w.rep('foot', 'Annotation', 'GeometricCurveSet', [w.make('IFCGEOMETRICCURVESET', [w.H(w.polyline2(d.pts, d.closed))])])]);
  }
}
function check(d) {
  if (d.kind === 'hatch') {
    if (d.pts.length < 3 || Math.abs(area2(d.pts)) < 100) refuse('model.err.dr.area');
    if (!PATTERN_KEYS.includes(d.pattern)) refuse('model.err.dr.pattern');
  } else {
    let L = 0; for (let i = 1; i < d.pts.length; i++) L += Math.hypot(d.pts[i][0] - d.pts[i - 1][0], d.pts[i][1] - d.pts[i - 1][1]);
    if (d.pts.length < 2 || L < 10) refuse('model.err.dr.short');
  }
}

/** The body of addDrafting inside a writer `w` (so several can share one undo step: putDrafting).*/
export function addDraftingIn(w, spec) {
  const kind = spec.kind === 'hatch' ? 'hatch' : 'lines';
  const d = { kind, pts: clean(spec.pts), closed: kind === 'hatch' || !!spec.closed, holes: (spec.holes || []).map(clean).filter((h) => h.length >= 3), pattern: spec.pattern || 'diagonal', scale: scaleOf(spec.scale), view: String(spec.view || '') };
  let guid = spec.guid || null;
  if (!isViewKey(d.view)) refuse('model.err.dr.view');
  const st = w.byGuid(spec.level);
  if (!st) refuse('model.err.nolevel');
  if (d.closed && d.pts.length > 2) { const a = d.pts[0], b = d.pts[d.pts.length - 1]; if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 0.5) d.pts.pop(); }
  check(d);
  if (!guid) guid = val(w.guid());
  const sl = w.api.GetLine(w.mid, st, false);
  const id = w.make('IFCANNOTATION', guid, w.ownerHistory(), w.L(kind === 'hatch' ? 'Hatch region' : 'Drafting line'), null, w.L(OBJECT_TYPE), w.H(w.placeAt(sl.ObjectPlacement.value, 0, 0, 0, 0)), null, ...(/^IFC4X3/i.test(w.schema || '') ? ['USERDEFINED'] : []));   // i18n-ignore: IFC Name / ObjectType (IFC4X3 adds PredefinedType)
  w.noteGuid(guid, id);
  writeShape(w, id, d);
  w.contain(id, st);
  w.upsertPset(id, DRAFT_PSET, [['View', 'IFCLABEL', d.view], ['Kind', 'IFCLABEL', kind], ['Pattern', 'IFCLABEL', kind === 'hatch' ? d.pattern : ''], ['PatternScale', 'IFCREAL', kind === 'hatch' ? round(d.scale, 3) : 1]]);
  return { id, ids: [id], made: new Map([[guid, id]]), guid };
}
export function addDrafting(spec) {
  return op((w) => addDraftingIn(w, spec));
}

const findAll = (w, guids) => { const set = new Set(guids); const list = readDrafting(w).filter((d) => set.has(d.guid)); if (!list.length) refuse('model.err.gone'); return list; };
export function changeDrafting(guids, ch) {
  const C = { ...ch };
  return op((w) => {
    const list = findAll(w, guids);
    if (C.pattern !== undefined && !PATTERN_KEYS.includes(C.pattern)) refuse('model.err.dr.pattern');
    for (const d of list) {
      if (d.kind !== 'hatch') continue;
      const nd = { ...d, pattern: C.pattern ?? d.pattern, scale: C.scale !== undefined ? scaleOf(C.scale) : d.scale };
      writeShape(w, d.id, nd);
      w.upsertPset(d.id, DRAFT_PSET, [['Pattern', 'IFCLABEL', nd.pattern], ['PatternScale', 'IFCREAL', round(nd.scale, 3)]]);
    }
    return { id: list[0].id, ids: list.map((d) => d.id) };
  });
}
export function moveDrafting(guids, dx, dy) {
  return op((w) => {
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) refuse('model.err.length');
    const list = findAll(w, guids);
    const mv = (pts) => pts.map(([x, y]) => [x + dx, y + dy]);
    for (const d of list) writeShape(w, d.id, { ...d, pts: mv(d.pts), holes: d.holes.map(mv) });
    return { id: list[0].id, ids: list.map((d) => d.id) };
  });
}
export function removeDrafting(guids) {
  return op((w) => {
    const set = new Set(guids), list = readDrafting(w).filter((d) => set.has(d.guid)).map((d) => d.id);
    if (list.length) w.dropProduct(list);
    return { id: null, ids: [] };
  });
}
/** Inside another op: every drafting item drawn in one of these views goes (a callout deleted). → how many. */
export function removeDraftingInViews(w, views) {
  const list = readDrafting(w).filter((d) => views.has(d.view)).map((d) => d.id);
  if (list.length) w.dropProduct(list);
  return list.length;
}

// ------------------------------------------------------------------------------------------------------- the patterns
function inRings(x, y, rings) {
  let inside = false;
  for (const p of rings) for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, yi] = p[i], [xj, yj] = p[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
export function clipSegment(rings, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], ts = [0, 1];
  for (const p of rings) for (let i = 0; i < p.length; i++) {
    const c = p[i], d = p[(i + 1) % p.length], ex = d[0] - c[0], ey = d[1] - c[1];
    const den = dx * ey - dy * ex;
    if (Math.abs(den) < 1e-12) continue;
    const t = ((c[0] - a[0]) * ey - (c[1] - a[1]) * ex) / den, u = ((c[0] - a[0]) * dy - (c[1] - a[1]) * dx) / den;
    if (t > 0 && t < 1 && u >= 0 && u <= 1) ts.push(t);
  }
  ts.sort((m, n) => m - n);
  const out = [];
  for (let i = 0; i + 1 < ts.length; i++) {
    const t0 = ts[i], t1 = ts[i + 1];
    if (t1 - t0 < 1e-9) continue;
    const tm = (t0 + t1) / 2;
    if (!inRings(a[0] + dx * tm, a[1] + dy * tm, rings)) continue;
    const last = out[out.length - 1];
    const p0 = [a[0] + dx * t0, a[1] + dy * t0], p1 = [a[0] + dx * t1, a[1] + dy * t1];
    if (last && Math.hypot(last[1][0] - p0[0], last[1][1] - p0[1]) < 1e-6) last[1] = p1; else out.push([p0, p1]);
  }
  return out;
}
/** A pattern's strokes inside a region. scale multiplies its spacing; a scale too fine for the region is made coarser. */
export function hatchSegments(outer, holes = [], pattern = 'diagonal', scale = 1) {
  const P = PATTERNS.find((p) => p.key === pattern);
  const out = [];
  if (!P || P.solid || !outer || outer.length < 3) return out;
  const rings = [outer, ...(holes || [])];
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of outer) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  const diag = Math.hypot(x1 - x0, y1 - y0) || 1;
  let k = scaleOf(scale);
  // how many strokes it would take; too many → coarser (the drawing stays readable and the page responsive)
  const est = (kk) => (P.families.reduce((n, f) => n + diag / (f.gap * kk) * (1 + (f.group?.length || 0)), 0) + (P.dots ? (x1 - x0) * (y1 - y0) / (P.dots * kk * 2.5) ** 2 : 0) + (P.zigzag ? (x1 - x0) * (y1 - y0) / (P.zigzag * kk) ** 2 * 2 : 0));
  while (est(k) > MAX_STROKES) k *= 2;
  const push = (a, b) => { for (const [p, q] of clipSegment(rings, a, b)) out.push(p[0], p[1], q[0], q[1]); };
  for (const f of P.families) {
    const r = f.angle * Math.PI / 180, d = [Math.cos(r), Math.sin(r)], n = [-d[1], d[0]], gap = f.gap * k;
    const corners = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
    const ns = corners.map((c) => c[0] * n[0] + c[1] * n[1]), ds = corners.map((c) => c[0] * d[0] + c[1] * d[1]);
    const nmin = Math.min(...ns), nmax = Math.max(...ns), dmin = Math.min(...ds) - 1, dmax = Math.max(...ds) + 1;
    const offs = [0, ...(f.group || []).map((o) => o * k)];
    for (let c = Math.floor((nmin - offs[offs.length - 1]) / gap) * gap; c <= nmax; c += gap) for (const o of offs) {
      const m = c + o;
      if (m < nmin || m > nmax) continue;
      push([n[0] * m + d[0] * dmin, n[1] * m + d[1] * dmin], [n[0] * m + d[0] * dmax, n[1] * m + d[1] * dmax]);
    }
  }
  if (P.dots) {
    // concrete: dots (very short strokes) on a staggered grid, nudged by a fixed hash so they do not read as a grid
    const s = P.dots * k * 2.5, dot = P.dots * k * 0.08;
    for (let gy = Math.floor(y0 / s); gy * s <= y1; gy++) for (let gx = Math.floor(x0 / s) - 1; gx * s <= x1; gx++) {
      const h = Math.abs(Math.sin(gx * 12.9898 + gy * 78.233) * 43758.5453) % 1, h2 = Math.abs(Math.sin(gx * 39.346 + gy * 11.135) * 24634.6345) % 1;
      const x = gx * s + (gy % 2 ? s / 2 : 0) + (h - 0.5) * s * 0.6, y = gy * s + (h2 - 0.5) * s * 0.6;
      if (inRings(x, y, rings)) out.push(x - dot / 2, y, x + dot / 2, y);
    }
  }
  if (P.zigzag) {
    // insulation: rows of zigzag, each row as high as one zag
    const h = P.zigzag * k, p = h * 0.6;
    for (let ry = Math.floor(y0 / h) * h; ry < y1; ry += h) for (let x = Math.floor(x0 / p) * p; x < x1; x += p) {
      push([x, ry], [x + p / 2, ry + h]);
      push([x + p / 2, ry + h], [x + p, ry]);
    }
  }
  return out;
}

/** The plan scene's item for one drafting item. */
export function draftingItem(d, key) {
  const it = { key, guid: d.guid, kind: d.kind, lines: [d.pts], closed: d.closed, rings: null, solid: false, segs: [] };
  if (d.kind === 'hatch') {
    it.rings = [d.pts, ...d.holes];
    it.lines = it.rings;
    it.solid = d.pattern === 'solid';
    it.segs = it.solid ? [] : hatchSegments(d.pts, d.holes, d.pattern, d.scale);
  }
  return it;
}

/** Drafting items put for an owner `tag` (an add-on's drawing): the items it put before go and these are drawn, ONE undo step (add-on API 1.4 `drafting.put`).
 *  items = [{ level (GlobalId), view? ('plan:<level>' by default), kind: 'lines' | 'hatch', pts, closed, holes, pattern, scale }]. → op ({ ids, made, removed }). */
export const TAG_PSET = 'CadCraft_DraftTag';
export function putDrafting(tag, items) {
  const T = String(tag || '').replace(/[^A-Za-z0-9._-]/g, '').slice(0, 40);
  if (!T) throw new Error('putDrafting: a tag');
  const list = (items || []).slice(0, 4000);
  return op((w) => {
    const old = readDrafting(w).filter((d) => { try { return (w.readPset(d.id, TAG_PSET) || {}).Tag === T; } catch { return false; } }).map((d) => d.id);
    if (old.length) w.dropProduct(old);
    const ids = [], made = new Map();
    for (const spec of list) {
      const view = spec.view || 'plan:' + spec.level;
      const r = addDraftingIn(w, { ...spec, view });
      w.upsertPset(r.id, TAG_PSET, [['Tag', 'IFCLABEL', T]]);
      ids.push(...r.ids); for (const [g, id] of r.made) made.set(g, id);
    }
    return { id: ids[0] ?? null, ids, made, removed: old.length };
  });
}
