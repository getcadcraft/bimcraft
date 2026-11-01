/* SPDX-License-Identifier: Apache-2.0 */
/**
 * analysis-bim.js — structural frame analysis of an IFC model in BimCraft (0.6 LC.4). No DOM: bin/test-frame.mjs runs it
 * in Node. An analysis aid, not a code check. The solver, report and panel are lib/frame (copied into ./frame/ by
 * `node tools/frame/sync.mjs`); this module turns the model's beams, columns and members into the analytical model and
 * keeps the analysis settings in the IFC itself.
 *
 *   readFrameElements(W, api, mid) → { elements, skipped: [{ id, gid, cls, why }], unit }
 *     element = { id, gid, cls, type: beam|column|brace, name, a, b (centroid line ends, model mm, Z up),
 *                 U, V (the section's axes in the model), sec { name, A, Iy, Iz, J, roll }, size (largest section
 *                 dimension, mm), mat { name, kind: steel|concrete|timber, E, G, rho }, approxJ }
 *   frameOfElements(elements, analysis, { name }) → { model, parts: Map(gid → [{ k, s0, s1 }]), nodes, skipped, notes,
 *                 warnings, snapped }
 *   analyseIfc(W, api, mid, analysis) → { frame, sol }
 *   readAnalysis(W, api, mid) → settings | null      (the project's CadCraft_Analysis.Settings, JSON, untrusted)
 *   writeAnalysis(json) → an op for IfcEditor.modelChange (model-ops.js op): one undo step, saved with the IFC
 *
 * Reading (the same rules as DetailCraft's IFC import, ifc-import.js, written again here: an app never imports another's
 * folder): IfcBeam / IfcColumn / IfcMember (and IFC4 …StandardCase) whose body is ONE IfcExtrudedAreaSolid (also
 * through an IfcMappedItem without scale, or as the first operand of a boolean clipping, which is left out) square to its
 * profile. Profiles: I (with root fillets), U, L, T, rectangle, rectangle tube, circle, round tube, and any closed
 * outline (IfcArbitraryClosedProfileDef / …WithVoids: polylines, indexed curves; arcs as chords) whose properties come
 * from the outline (frame-model.js polySection) and whose torsion constant is then an estimate (`approxJ`). The axis is
 * the extrusion through the section's centroid. Lengths in the file's unit (SI prefixes, feet, inches) → mm.
 * Materials: the element's (or its type's) material name: "concrete" / "beton" / "hormigón" → concrete (E 30 GPa,
 * G 12.5 GPa, 2400 kg/m³), "wood" / "timber" / "glulam" / "madera" → timber (E 11 GPa, G 0.69 GPa, 500 kg/m³), anything
 * else steel (frame-model.js STEEL); said in the report.
 *
 * The analytical model from physical elements (frameOfElements): IFC beams stop at a column's face and sit d/2 below a
 * level, so each member end is carried along its own line onto the nearest other member's axis when that axis passes
 * within 0.6 × the larger section size + 25 mm of the line, no further than 0.6 × the other's size + 150 mm beyond (or
 * back from) the end: a beam reaches the column's axis, a column's top reaches the beam above it. The snapped point is on
 * the other member's axis (that member is split there). Points within 10 mm are one node. Supports: the foot of every
 * column nothing goes below (the `bases` rule, or a support of the user's own at that point). Releases: every beam end
 * follows `beamEnds`, members (braces) `braces`; `ends` (by GlobalId) overrides.
 */
import { addPlates } from './frame/plate-bim.js';   // 0.8 SU.1056 step 2 (concrete-08): concrete slabs and walls as plates
import { cleanFrame, sectionOf, torsionJ, polySection, STEEL, RELEASES, FORMAT, VERSION } from './frame/frame-model.js';
import { solveFrame } from './frame/frame-solve.js';
import { cleanConcrete, concreteMaterial, stiffnessFactor, diaphragmsOf } from './frame/frame-concrete.js';   // 0.8 SU.1056
import { cleanAnalysis } from './frame/frame-panel.js';
import { op } from './model-ops.js';
import { findSection } from './shapes/sections.js';

export const ANALYSIS_PSET = 'CadCraft_Analysis';
export const MERGE_TOL = 10;          // mm: points this close are one node
export const SPLIT_TOL = 10;          // mm: an end this close to a member's axis splits it
const TYPES = [['IFCBEAM', 'beam'], ['IFCBEAMSTANDARDCASE', 'beam'], ['IFCCOLUMN', 'column'], ['IFCCOLUMNSTANDARDCASE', 'column'], ['IFCMEMBER', 'brace'], ['IFCMEMBERSTANDARDCASE', 'brace']];
const MATS = {
  concrete: { kind: 'concrete', E: 30000, G: 12500, rho: 2400 },
  timber: { kind: 'timber', E: 11000, G: 690, rho: 500 },
  steel: { kind: 'steel', ...STEEL },
};
export const materialKind = (name) => (/concrete|beton|béton|hormig[oó]n|cement/i.test(name || '') ? 'concrete' : /wood|timber|glulam|lumber|madera|holz|\bclt\b/i.test(name || '') ? 'timber' : 'steel');

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const I4 = () => ({ X: [1, 0, 0], Y: [0, 1, 0], Z: [0, 0, 1], O: [0, 0, 0] });
const apply = (M, p) => add(add(add(M.O, mul(M.X, p[0])), mul(M.Y, p[1])), mul(M.Z, p[2] || 0));
const applyDir = (M, d) => add(add(mul(M.X, d[0]), mul(M.Y, d[1])), mul(M.Z, d[2] || 0));
const compose = (A, B) => ({ X: applyDir(A, B.X), Y: applyDir(A, B.Y), Z: applyDir(A, B.Z), O: apply(A, B.O) });
const txt = (s, max = 60) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

/**
 * Is this IFC I-shape a rolled section? (0.7 SU.878, honesty-fixes.) IFC has no "rolled" flag, so a profile counts as rolled
 * only when its name (ProfileName, else the element's ObjectType) is a hot-rolled I-shape of the shared section table
 * (shapes/sections.js: AISC W and S, EN 10365 IPE, HEA, HEB; "IPE 300", "W12x26", "HE 200 A" all match) AND the file's
 * d, bf, tw and tf agree with that row within 1 % (at least 0.5 mm). Anything else (a plate girder, a custom name, a
 * renamed or edited size) stays welded, which the Design checks report as "not checked". Exported for the tests.
 */
export function rolledIShape(names, dims) {
  for (const raw of names) {
    if (typeof raw !== 'string' || !raw.trim()) continue;
    let key = raw.replace(/\s+/g, '').toUpperCase();
    key = key.replace(/^HE(\d+)([AB])$/, 'HE$2$1');            // "HE200A" (the older European way) → "HEA200"
    const row = findSection(key);
    if (!row || row.kind !== 'I' || !['W', 'S', 'IPE', 'HEA', 'HEB'].includes(row.family)) continue;
    const near = (a, b) => Number.isFinite(a) && Math.abs(a - b) <= Math.max(0.5, 0.01 * b);
    if (near(dims.d, row.d) && near(dims.bf, row.bf) && near(dims.tw, row.tw) && near(dims.tf, row.tf)) return row.name;
  }
  return null;
}

/** The beams, columns and members of a model, ready for the analysis. */
export function readFrameElements(W, api, mid) {
  const line = (id) => api.GetLine(mid, id, false);
  const ref = (x) => (x && typeof x === 'object' && 'value' in x && x.type === 5 ? x.value : (typeof x === 'number' ? x : null));
  const val = (x) => (x && typeof x === 'object' && 'value' in x ? x.value : x);
  const ids = (type) => { if (type === undefined) return []; const v = api.GetLineIDsWithType(mid, type), o = []; for (let i = 0; i < v.size(); i++) o.push(v.get(i)); return o; };
  const clsName = (l) => (l && l.constructor && /^Ifc/.test(l.constructor.name) ? l.constructor.name : 'IfcEntity');

  // units
  let toMm = 1000, unit = 'metre';
  const prefix = { KILO: 1e3, HECTO: 100, DECA: 10, DECI: 0.1, CENTI: 0.01, MILLI: 1e-3, MICRO: 1e-6 };
  const siScale = (u) => (u && val(u.Name) === 'METRE' ? (u.Prefix ? prefix[val(u.Prefix)] ?? 1 : 1) : null);
  for (const ua of ids(W.IFCUNITASSIGNMENT).slice(0, 1)) for (const r of line(ua).Units || []) {
    const u = line(ref(r));
    if (!u || val(u.UnitType) !== 'LENGTHUNIT') continue;
    const s = siScale(u);
    if (s !== null) { toMm = s * 1000; unit = (u.Prefix ? String(val(u.Prefix)).toLowerCase() : '') + 'metre'; }
    else if (u.ConversionFactor) {
      const mwu = line(ref(u.ConversionFactor));
      const f = Number(val(mwu?.ValueComponent)), base = siScale(line(ref(mwu?.UnitComponent)));
      if (Number.isFinite(f) && base !== null) { toMm = f * base * 1000; unit = String(val(u.Name) || '').toLowerCase(); }
    }
  }
  // placements (file units)
  const coords = (id) => { const p = line(id); const c = (p?.Coordinates || []).map((v) => Number(val(v))); return [c[0] || 0, c[1] || 0, c[2] || 0]; };
  const dirOf = (id) => { const d = line(id); const r = (d?.DirectionRatios || []).map((v) => Number(val(v))); return [r[0] || 0, r[1] || 0, r[2] || 0]; };
  const axis3 = (id) => {
    const a = line(id);
    if (!a) return I4();
    const O = coords(ref(a.Location));
    if (clsName(a) === 'IfcAxis2Placement2D') { const X = a.RefDirection ? norm(dirOf(ref(a.RefDirection))) : [1, 0, 0]; return { X, Y: [-X[1], X[0], 0], Z: [0, 0, 1], O }; }
    const Z = a.Axis ? norm(dirOf(ref(a.Axis))) : [0, 0, 1];
    let X = a.RefDirection ? dirOf(ref(a.RefDirection)) : (Math.abs(Z[0]) > 0.9 ? [0, 0, 1] : [1, 0, 0]);
    X = norm(sub(X, mul(Z, dot(X, Z))));
    if (len(X) < 0.5) X = norm(cross(Math.abs(Z[2]) < 0.9 ? [0, 0, 1] : [0, 1, 0], Z));
    return { X, Y: cross(Z, X), Z, O };
  };
  const placeCache = new Map();
  const placement = (id, depth = 0) => {
    if (!id || depth > 50) return I4();
    if (placeCache.has(id)) return placeCache.get(id);
    const lp = line(id);
    let M = I4();
    if (lp && clsName(lp) === 'IfcLocalPlacement') {
      const local = lp.RelativePlacement ? axis3(ref(lp.RelativePlacement)) : I4();
      const parent = ref(lp.PlacementRelTo);
      M = parent ? compose(placement(parent, depth + 1), local) : local;
    }
    placeCache.set(id, M);
    return M;
  };
  const cartOp = (id) => {
    const o = line(id);
    if (!o) return I4();
    const s = o.Scale !== undefined && o.Scale !== null ? Number(val(o.Scale)) : 1;
    const X = o.Axis1 ? norm(dirOf(ref(o.Axis1))) : [1, 0, 0];
    let Z = o.Axis3 ? norm(dirOf(ref(o.Axis3))) : [0, 0, 1];
    const Y = o.Axis2 ? norm(dirOf(ref(o.Axis2))) : norm(cross(Z, X));
    if (!o.Axis3) Z = cross(X, Y);
    return { X, Y, Z, O: coords(ref(o.LocalOrigin)), scale: s };
  };
  function bodySolid(el) {
    const pds = line(ref(el.Representation));
    const reps = (pds?.Representations || []).map((r) => line(ref(r))).filter(Boolean);
    const rep = reps.find((r) => /^body$/i.test(val(r.RepresentationIdentifier) || '')) || reps.find((r) => /swept|solid|clipping|csg|mapped/i.test(val(r.RepresentationType) || ''));
    if (!rep) return { why: 'no-body' };
    const found = [];
    const walk = (id, M, d = 0) => {
      const it = line(id);
      if (!it || d > 10) return;
      const c = clsName(it);
      if (c === 'IfcExtrudedAreaSolid') found.push({ solid: it, M });
      else if (c === 'IfcBooleanClippingResult' || c === 'IfcBooleanResult') walk(ref(it.FirstOperand), M, d + 1);
      else if (c === 'IfcMappedItem') {
        const src = line(ref(it.MappingSource));
        const target = cartOp(ref(it.MappingTarget));
        if (Math.abs((target.scale ?? 1) - 1) > 1e-9) { found.push({ bad: 'scaled' }); return; }
        const rp = src ? line(ref(src.MappedRepresentation)) : null;
        for (const s2 of rp?.Items || []) walk(ref(s2), compose(compose(M, target), src ? axis3(ref(src.MappingOrigin)) : I4()), d + 1);
      } else found.push({ bad: 'not-extrusion' });
    };
    for (const it of rep.Items || []) walk(ref(it), I4());
    if (found.some((f) => f.bad)) return { why: found.find((f) => f.bad).bad };
    if (found.length !== 1) return { why: found.length ? 'solids' : 'no-extrusion' };
    return found[0];
  }
  // profiles → { kind, dims (mm) | loops, name }
  const n = (x) => Number(val(x)) * toMm;
  const curvePts = (id) => {
    const cv = line(id);
    if (!cv) return null;
    const c = clsName(cv);
    let pts = null;
    if (c === 'IfcPolyline') pts = (cv.Points || []).map((p) => coords(ref(p)).slice(0, 2));
    else if (c === 'IfcIndexedPolyCurve') {
      const list = line(ref(cv.Points));
      const P = (list?.CoordList || []).map((p) => p.map((v) => Number(val(v))));
      if (!cv.Segments) pts = P.map((p) => p.slice(0, 2));
      else {
        pts = [];
        for (const s of cv.Segments) {
          const ix = (Array.isArray(s.value) ? s.value : Array.isArray(s) ? s : []).map((q) => Number(val(q)) - 1);
          for (const k of ix) { const q = P[k]; if (q && !(pts.length && pts[pts.length - 1][0] === q[0] && pts[pts.length - 1][1] === q[1])) pts.push(q.slice(0, 2)); }
        }
      }
    } else if (c === 'IfcCircle' || c === 'IfcEllipse') return null;
    if (!pts || pts.length < 3) return null;
    if (Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1]) < 1e-9) pts.pop();
    return pts.map(([x, y]) => [x * toMm, y * toMm]);
  };
  /** A centred w × h rectangle with corners rounded to r (8 steps a corner). */
  const rounded = (w, h, r) => {
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    if (!r) return [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]];
    const out = [];
    for (const [cx, cy, a0] of [[w / 2 - r, -h / 2 + r, -Math.PI / 2], [w / 2 - r, h / 2 - r, 0], [-w / 2 + r, h / 2 - r, Math.PI / 2], [-w / 2 + r, -h / 2 + r, Math.PI]]) {
      for (let k = 0; k <= 8; k++) { const a = a0 + Math.PI / 2 * k / 8; out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    }
    return out;
  };
  const circle = (r, k = 64, cx = 0, cy = 0) => Array.from({ length: k }, (_, i) => [cx + r * Math.cos(2 * Math.PI * i / k), cy + r * Math.sin(2 * Math.PI * i / k)]);
  function profileOf(pd) {
    const c = clsName(pd);
    const name = txt(val(pd.ProfileName) || '', 40);
    const pos = pd.Position ? axis3(ref(pd.Position)) : I4();
    const sc = (pts) => pts.map(([x, y]) => [x, y]);
    switch (c) {
      case 'IfcIShapeProfileDef': {
        const d = n(pd.OverallDepth), bf = n(pd.OverallWidth), tw = n(pd.WebThickness), tf = n(pd.FlangeThickness), r = pd.FilletRadius ? n(pd.FilletRadius) : 0;
        return { kind: 'I', name, pos, dims: { d, bf, tw, tf, r }, loops: [iLoop(d, bf, tw, tf, r)] };
      }
      case 'IfcUShapeProfileDef': {
        const d = n(pd.Depth), bf = n(pd.FlangeWidth), tw = n(pd.WebThickness), tf = n(pd.FlangeThickness);
        const x0 = -bf / 2, x1 = bf / 2, y0 = -d / 2, y1 = d / 2;
        return { kind: 'C', name, pos, dims: { d, bf, tw, tf }, loops: [[[x0, y0], [x1, y0], [x1, y0 + tf], [x0 + tw, y0 + tf], [x0 + tw, y1 - tf], [x1, y1 - tf], [x1, y1], [x0, y1]]] };
      }
      case 'IfcLShapeProfileDef': {
        const d = n(pd.Depth), w = pd.Width ? n(pd.Width) : d, t = n(pd.Thickness);
        const x0 = -w / 2, y0 = -d / 2;
        return { kind: 'L', name, pos, dims: { b: w, h: d, t }, loops: [[[x0, y0], [x0 + w, y0], [x0 + w, y0 + t], [x0 + t, y0 + t], [x0 + t, y0 + d], [x0, y0 + d]]] };
      }
      case 'IfcTShapeProfileDef': {
        const d = n(pd.Depth), bf = n(pd.FlangeWidth), tw = n(pd.WebThickness), tf = n(pd.FlangeThickness);
        return { kind: 'T', name, pos, dims: { d, bf, tw, tf }, loops: [[[-tw / 2, -d / 2], [tw / 2, -d / 2], [tw / 2, d / 2 - tf], [bf / 2, d / 2 - tf], [bf / 2, d / 2], [-bf / 2, d / 2], [-bf / 2, d / 2 - tf], [-tw / 2, d / 2 - tf]]] };
      }
      case 'IfcRectangleProfileDef': { const x = n(pd.XDim), y = n(pd.YDim); return { kind: 'PL', name, pos, dims: { b: x, t: y }, loops: [[[-x / 2, -y / 2], [x / 2, -y / 2], [x / 2, y / 2], [-x / 2, y / 2]]] }; }
      case 'IfcRectangleHollowProfileDef': {
        const x = n(pd.XDim), y = n(pd.YDim), t = n(pd.WallThickness);
        const ro = pd.OuterFilletRadius ? n(pd.OuterFilletRadius) : 0, ri = pd.InnerFilletRadius ? n(pd.InnerFilletRadius) : 0;
        return { kind: 'RHS', name, pos, dims: { h: y, b: x, t }, loops: [rounded(x, y, ro), rounded(x - 2 * t, y - 2 * t, ri).reverse()] };
      }
      case 'IfcCircleProfileDef': { const r = n(pd.Radius); return { kind: 'CHS', name, pos, dims: { D: 2 * r, t: r }, loops: [circle(r)] }; }
      case 'IfcCircleHollowProfileDef': { const r = n(pd.Radius), t = n(pd.WallThickness); return { kind: 'CHS', name, pos, dims: { D: 2 * r, t }, loops: [circle(r), circle(r - t).reverse()] }; }
      case 'IfcArbitraryClosedProfileDef': case 'IfcArbitraryProfileDefWithVoids': {
        const outer = curvePts(ref(pd.OuterCurve));
        if (!outer) return { why: 'curve' };
        const loops = [sc(outer)];
        for (const ic of pd.InnerCurves || []) { const q = curvePts(ref(ic)); if (q) loops.push(sc(q)); }
        return { kind: 'POLY', name, pos: I4(), loops, arbitrary: true };
      }
      default: return { why: 'profile' };
    }
  }

  // materials: the element's own, else its type's
  const matName = new Map();
  const nameOf = (id, d = 0) => {
    const m = line(id);
    if (!m || d > 4) return '';
    const c = clsName(m);
    if (c === 'IfcMaterial') return val(m.Name) || '';
    if (/^IfcMaterial(Profile|Layer)SetUsage/.test(c)) return nameOf(ref(m.ForProfileSet ?? m.ForLayerSet), d + 1);
    if (c === 'IfcMaterialProfileSet') return nameOf(ref((m.MaterialProfiles || [])[0]), d + 1);
    if (c === 'IfcMaterialLayerSet') return nameOf(ref((m.MaterialLayers || [])[0]), d + 1);
    if (c === 'IfcMaterialConstituentSet') return nameOf(ref((m.MaterialConstituents || [])[0]), d + 1);
    if (/^IfcMaterial(Profile|Layer|Constituent)$/.test(c)) return nameOf(ref(m.Material), d + 1);
    if (c === 'IfcMaterialList') return nameOf(ref((m.Materials || [])[0]), d + 1);
    return '';
  };
  for (const id of ids(W.IFCRELASSOCIATESMATERIAL)) { const r = line(id), nm = nameOf(ref(r.RelatingMaterial)); if (nm) for (const o of r.RelatedObjects || []) matName.set(ref(o), nm); }
  const typeOf = new Map();
  for (const id of ids(W.IFCRELDEFINESBYTYPE)) { const r = line(id), ty = ref(r.RelatingType); for (const o of r.RelatedObjects || []) typeOf.set(ref(o), ty); }

  const elements = [], skipped = [];
  for (const [T, type] of TYPES) for (const id of ids(W[T])) {
    const el = line(id);
    const gid = String(val(el.GlobalId) || '#' + id), cls = clsName(el);
    const b = bodySolid(el);
    if (b.why) { skipped.push({ id, gid, cls, why: b.why }); continue; }
    const pd = line(ref(b.solid.SweptArea));
    const prof = pd ? profileOf(pd) : { why: 'profile' };
    if (prof.why) { skipped.push({ id, gid, cls, why: prof.why }); continue; }
    const Mel = el.ObjectPlacement ? placement(ref(el.ObjectPlacement)) : I4();
    const Msolid = compose(compose(Mel, b.M), b.solid.Position ? axis3(ref(b.solid.Position)) : I4());
    const Mprof = compose(Msolid, prof.pos);
    const ext = norm(applyDir(Msolid, dirOf(ref(b.solid.ExtrudedDirection))));
    const depth = Number(val(b.solid.Depth)) * toMm;
    let U = norm(Mprof.X), V = norm(Mprof.Y);
    if (Math.abs(dot(ext, U)) > 1e-3 || Math.abs(dot(ext, V)) > 1e-3) { skipped.push({ id, gid, cls, why: 'not-square' }); continue; }
    if (!(depth > 0)) { skipped.push({ id, gid, cls, why: 'zero-length' }); continue; }
    // section about its centroid; the axis through the centroid
    const s = polySection(prof.loops);
    const c0 = mul(apply(Mprof, [s.cu / toMm, s.cv / toMm, 0]), toMm);   // the centroid on the profile's plane, mm
    let a = c0, e = add(c0, mul(ext, depth));
    if (dot(cross(U, V), ext) < 0) { [a, e] = [e, a]; }
    const loops = prof.loops.map((l) => l.map(([x, y]) => [x - s.cu, y - s.cv]));
    const rec = { kind: prof.kind, ...(prof.dims || {}), loops, name: prof.name || prof.kind };
    const sec = sectionOf(rec, prof.name || '');
    let J = sec.J;
    if (prof.kind === 'POLY' || !Number.isFinite(J)) J = torsionJ({ kind: 'POLY', loops });
    const bb = loops[0].reduce((q, [x, y]) => [Math.min(q[0], x), Math.max(q[1], x), Math.min(q[2], y), Math.max(q[3], y)], [Infinity, -Infinity, Infinity, -Infinity]);
    const size = Math.max(bb[1] - bb[0], bb[3] - bb[2]);
    const mname = matName.get(id) || matName.get(typeOf.get(id)) || '';
    const kind = materialKind(mname);
    elements.push({ id, gid, cls, type, name: txt(val(el.Name) || val(el.Tag) || '', 60), a, b: e, U, V, sec: { ...sec, J, name: sec.name || txt(val(el.ObjectType) || '', 40) || prof.kind, ...(prof.kind === 'I' && prof.dims.d > 0 && prof.dims.bf > 0 && prof.dims.tw > 0 && prof.dims.tf > 0 ? { shape: { kind: 'I', d: prof.dims.d, bf: prof.dims.bf, tw: prof.dims.tw, tf: prof.dims.tf, r: prof.dims.r || 0, ...(rolledIShape([prof.name, val(el.ObjectType)], prof.dims) ? {} : { welded: true }) } } : {}) }, size, mat: { name: mname || kind, ...MATS[kind] }, approxJ: prof.kind === 'POLY' });   // (sec.shape, 0.7 SU.878: the I shape the Design checks need; rolled when its name and size are a table row — rolledIShape — else welded)
  }
  // 0.8 SU.1056 step 2 (concrete-08): CONCRETE slabs and walls (material name, like the members) as plain shapes for the plates in
  // frame/plate-bim.js. A slab: its outline (and holes) and thickness, extruded up or down; a wall: a straight extrusion whose plan is
  // (about) a rectangle, read as its centre line, thickness and height. What does not fit is left out and said, never guessed.
  const slabs = [], walls = [];
  const world = (M, [x, y]) => mul(apply(M, [x / toMm, y / toMm, 0]), toMm);
  const shoelace = (L) => L.reduce((a, q, i) => { const n2 = L[(i + 1) % L.length]; return a + q[0] * n2[1] - n2[0] * q[1]; }, 0) / 2;
  for (const [T, kind] of [['IFCSLAB', 'slab'], ['IFCWALL', 'wall'], ['IFCWALLSTANDARDCASE', 'wall']]) for (const id of ids(W[T])) {
    const el = line(id);
    if (materialKind(matName.get(id) || matName.get(typeOf.get(id)) || '') !== 'concrete') continue;
    const gid = String(val(el.GlobalId) || '#' + id), cls = clsName(el);
    const b = bodySolid(el);
    if (b.why) { skipped.push({ id, gid, cls, why: b.why }); continue; }
    const pd = line(ref(b.solid.SweptArea));
    const prof = pd ? profileOf(pd) : { why: 'profile' };
    if (prof.why) { skipped.push({ id, gid, cls, why: prof.why }); continue; }
    const Mel = el.ObjectPlacement ? placement(ref(el.ObjectPlacement)) : I4();
    const Msolid = compose(compose(Mel, b.M), b.solid.Position ? axis3(ref(b.solid.Position)) : I4());
    const Mprof = compose(Msolid, prof.pos);
    const ext = norm(applyDir(Msolid, dirOf(ref(b.solid.ExtrudedDirection))));
    const depth = Number(val(b.solid.Depth)) * toMm;
    if (!(depth > 0) || Math.abs(ext[2]) < 0.95) { skipped.push({ id, gid, cls, why: 'not-vertical' }); continue; }
    const base = world(Mprof, [0, 0]), zA = base[2], zB = base[2] + ext[2] * depth;
    const ref0 = { id: gid, ref: txt(val(el.Name) || val(el.Tag) || gid, 40) };
    if (kind === 'slab') {
      let outline = prof.loops[0].map((q) => world(Mprof, q)).map((q) => [q[0], q[1]]);
      if (shoelace(outline) < 0) outline = outline.reverse();
      const holes = prof.loops.slice(1).map((l) => l.map((q) => world(Mprof, q)).map((q) => [q[0], q[1]]));
      slabs.push({ ...ref0, outline, ...(holes.length ? { holes } : {}), z: (zA + zB) / 2, t: depth });
      continue;
    }
    const L0 = prof.loops[0];
    let best = null;
    for (let i = 0; i < L0.length; i++) { const q = L0[i], n2 = L0[(i + 1) % L0.length], d = Math.hypot(n2[0] - q[0], n2[1] - q[1]); if (!best || d > best.d) best = { d, th: Math.atan2(n2[1] - q[1], n2[0] - q[0]) }; }
    const c = Math.cos(-best.th), sn = Math.sin(-best.th), R = L0.map(([x, y]) => [x * c - y * sn, x * sn + y * c]);
    const x0 = Math.min(...R.map((q) => q[0])), x1 = Math.max(...R.map((q) => q[0])), y0 = Math.min(...R.map((q) => q[1])), y1 = Math.max(...R.map((q) => q[1]));
    if (Math.abs(shoelace(R)) < 0.9 * (x1 - x0) * (y1 - y0) || prof.loops.length > 1) { skipped.push({ id, gid, cls, why: 'plate-shape' }); continue; }
    const back = ([x, y]) => [x * Math.cos(best.th) - y * Math.sin(best.th), x * Math.sin(best.th) + y * Math.cos(best.th)];
    const ym = (y0 + y1) / 2, a2 = world(Mprof, back([x0, ym])), b2 = world(Mprof, back([x1, ym]));
    walls.push({ ...ref0, from: [a2[0], a2[1]], to: [b2[0], b2[1]], z0: Math.min(zA, zB), z1: Math.max(zA, zB), t: y1 - y0 });
  }
  return { elements, skipped, unit, slabs, walls };
}

/** An I-shape's outline with its four root fillets (arcs in 6 steps), centred, web along Y. */
function iLoop(d, bf, tw, tf, r) {
  const x = tw / 2, y = d / 2 - tf, pts = [];
  const arc = (cx, cy, a0, a1) => { for (let k = 0; k <= 6; k++) { const t = a0 + (a1 - a0) * k / 6; pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]); } };
  pts.push([-bf / 2, -d / 2], [bf / 2, -d / 2], [bf / 2, -y]);
  if (r > 0) arc(x + r, -y + r, -Math.PI / 2, -Math.PI); else pts.push([x, -y]);
  if (r > 0) arc(x + r, y - r, Math.PI, Math.PI / 2); else pts.push([x, y]);
  pts.push([bf / 2, y], [bf / 2, d / 2], [-bf / 2, d / 2], [-bf / 2, y]);
  if (r > 0) arc(-x - r, y - r, Math.PI / 2, 0); else pts.push([-x, y]);
  if (r > 0) arc(-x - r, -y + r, 0, -Math.PI / 2); else pts.push([-x, -y]);
  pts.push([-bf / 2, -y]);
  return pts;
}

/** Closest points of the line p + s·o and the segment q0–q1: { s, t (0…1 along the segment, unclamped), d }. */
function closest(p, o, q0, q1) {
  const w = sub(q1, q0), r = sub(p, q0);
  const a = dot(o, o), b = dot(o, w), c = dot(w, w), dd = dot(o, r), e = dot(w, r);
  const den = a * c - b * b;
  if (den < 1e-12 * a * c) {        // parallel: the end against the segment's nearer end
    const t = Math.max(0, Math.min(1, e / c));
    const q = add(q0, mul(w, t));
    return { s: dot(sub(q, p), o) / a, t, d: len(sub(add(p, mul(o, dot(sub(q, p), o) / a)), q)) };
  }
  const s = (b * e - c * dd) / den, t = (a * e - b * dd) / den;
  return { s, t, d: len(sub(add(p, mul(o, s)), add(q0, mul(w, t)))) };
}

/** The analytical model of the elements. */
export function frameOfElements(elements, analysis, { name = '', slabs = [], walls = [] } = {}) {
  const A = analysis;
  const conc = cleanConcrete(A.concrete);   // 0.8 SU.1056
  let nConc = 0, nCracked = 0;
  const notes = [], skipped = [];
  // 1. member ends carried onto the nearest other axis
  const ends = elements.map((el) => [el.a.slice(), el.b.slice()]);
  let snapped = 0;
  elements.forEach((el, k) => {
    for (const end of [0, 1]) {
      const E = end ? el.b : el.a, o = norm(end ? sub(el.b, el.a) : sub(el.a, el.b));
      let best = null;
      elements.forEach((ot, j) => {
        if (j === k) return;
        const segLen = len(sub(ot.b, ot.a));
        const reach = 0.6 * ot.size + 150, perp = 0.6 * Math.max(ot.size, el.size) + 25, overT = (0.6 * el.size + 150) / segLen;
        const c = closest(E, o, ot.a, ot.b);
        if (c.d > perp || c.s > reach || c.s < -reach || c.t < -overT || c.t > 1 + overT) return;
        const t = Math.max(0, Math.min(1, c.t));
        const q = add(ot.a, mul(sub(ot.b, ot.a), t));
        const score = c.d + 0.01 * Math.abs(c.s);
        if (!best || score < best.score) best = { q, score };
      });
      if (best && len(sub(best.q, E)) > 0.5) { ends[k][end] = best.q; snapped++; }
    }
  });
  // 2. nodes and splits
  const nodes = [];
  const nodeAt = (p) => { for (const nd of nodes) if (len(sub(nd.p, p)) <= MERGE_TOL) return nd; const nd = { id: 'n' + (nodes.length + 1), p: [...p] }; nodes.push(nd); return nd; };
  const points = ends.flat();
  for (const c of A.cases) for (const l of c.loads) if (l.type === 'node') points.push(l.at);
  const sections = new Map(), materials = new Map(), members = [], parts = new Map();
  const endKind = new Map();
  for (const el of elements) for (const end of ['start', 'end']) endKind.set(el.gid + ':' + end, el.type === 'brace' ? A.braces : el.type === 'beam' ? A.beamEnds : 'rigid');
  let own = 0;
  for (const e of A.ends || []) if (endKind.has(e.member + ':' + e.end)) { endKind.set(e.member + ':' + e.end, e.kind); own++; }
  elements.forEach((el, k) => {
    const [a, b] = ends[k];
    const d = sub(b, a), L = len(d);
    if (L < 1) { skipped.push({ id: el.gid, why: 'short' }); return; }
    const ux = mul(d, 1 / L);
    const cuts = [0, L];
    for (const q of points) {
      const s = dot(sub(q, a), ux);
      if (s <= SPLIT_TOL || s >= L - SPLIT_TOL) continue;
      if (len(sub(add(a, mul(ux, s)), q)) <= SPLIT_TOL) cuts.push(s);
    }
    cuts.sort((x, y) => x - y);
    const at = cuts.filter((s, i) => i === 0 || s - cuts[i - 1] > MERGE_TOL);
    if (L - at[at.length - 1] > MERGE_TOL) at.push(L); else at[at.length - 1] = L;
    // 0.8 SU.1056: with concrete settings in the analysis, a concrete element is analysed as concrete (ACI 318-19 19.2.2.1.b) with cracked bending stiffness (Table 6.6.3.1.1(a)); without them nothing changes
    const cc = !!conc && (el.mat.kind === 'concrete' || !!conc.forms[String(el.sec.name).toUpperCase()]);
    const vertical = Math.abs(b[2] - a[2]) > 0.999999 * L;
    const cf = cc ? stiffnessFactor(conc.mat, vertical) : 1;
    if (cc) { nConc++; if (cf !== 1) nCracked++; }
    const skey = el.sec.name + '|' + [el.sec.A, el.sec.Iy, el.sec.Iz, el.sec.J].map((v) => v.toPrecision(8)).join('|') + (cf === 1 ? '' : '|' + cf);
    if (!sections.has(skey)) sections.set(skey, { id: 's' + (sections.size + 1), name: el.sec.name || 's' + (sections.size + 1), A: el.sec.A, Iy: el.sec.Iy * cf, Iz: el.sec.Iz * cf, J: el.sec.J, ...(el.sec.shape ? { shape: el.sec.shape } : {}) });
    const mkey = cc ? 'conc|' + conc.mat.fc : el.mat.kind + '|' + el.mat.name;
    if (!materials.has(mkey)) materials.set(mkey, cc ? { id: 'g' + (materials.size + 1), name: "f'c " + conc.mat.fc + ' MPa', ...concreteMaterial(conc.mat) } : { id: 'g' + (materials.size + 1), name: el.mat.name, E: el.mat.E, G: el.mat.G, rho: el.mat.rho });
    // roll: the drawn section axes against the default local axes (frame-model.js axesOf), plus the principal turn
    const ez0 = Math.abs(ux[2]) > 0.999999 ? [1, 0, 0] : norm([-ux[2] * ux[0], -ux[2] * ux[1], 1 - ux[2] * ux[2]]);
    const ey0 = cross(ez0, ux);
    const roll = Math.atan2(dot(el.U, ez0), dot(el.U, ey0)) * 180 / Math.PI + (el.sec.roll || 0);
    const pinS = endKind.get(el.gid + ':start') === 'pinned', pinE = endKind.get(el.gid + ':end') === 'pinned';
    const list = [];
    for (let q = 0; q + 1 < at.length; q++) {
      const s0 = at[q], s1 = at[q + 1];
      const ni = nodeAt(q === 0 ? a : add(a, mul(ux, s0))), nj = nodeAt(q + 2 === at.length ? b : add(a, mul(ux, s1)));
      if (ni === nj) continue;
      const rel = { i: [...RELEASES.rigid], j: [...RELEASES.rigid] };
      if (q === 0 && pinS) rel.i = [...(pinE && el.type === 'brace' ? RELEASES.truss : RELEASES.pinned)];
      if (q + 2 === at.length && pinE) rel.j = [...RELEASES.pinned];
      members.push({ id: el.gid + (at.length > 2 ? '.' + (q + 1) : ''), i: ni.id, j: nj.id, section: sections.get(skey).id, material: materials.get(mkey).id, roll, rel, from: { app: 'bimcraft', ref: el.name || el.gid } });
      list.push({ k: members.length - 1, s0, s1 });
    }
    parts.set(el.gid, list);
  });
  // 3. supports at the foot of every column nothing goes below
  const byId = new Map(nodes.map((x) => [x.id, x]));
  const lowest = new Map();
  for (const mb of members) { const za = byId.get(mb.i).p[2], zb = byId.get(mb.j).p[2]; lowest.set(mb.i, Math.min(lowest.get(mb.i) ?? Infinity, zb)); lowest.set(mb.j, Math.min(lowest.get(mb.j) ?? Infinity, za)); }
  const baseFix = A.bases === 'pinned' ? [true, true, true, false, false, true] : [true, true, true, true, true, true];
  const supports = new Map();
  let nBases = 0;
  elements.forEach((el, k) => {
    if (el.type !== 'column') return;
    const [a, b] = ends[k];
    const foot = a[2] <= b[2] ? a : b;
    const nd = nodes.find((x) => len(sub(x.p, foot)) <= MERGE_TOL);
    if (nd && !supports.has(nd.id) && lowest.get(nd.id) >= nd.p[2] - MERGE_TOL) { supports.set(nd.id, baseFix); nBases++; }
  });
  for (const s of A.supports || []) {
    const nd = nodes.find((x) => len(sub(x.p, s.at)) <= MERGE_TOL);
    if (!nd) continue;
    if (s.fix.some(Boolean)) supports.set(nd.id, s.fix); else supports.delete(nd.id);
  }
  // 4. loads (by GlobalId, along the element's own line from its start)
  const cases = A.cases.map((c) => {
    const loads = [];
    for (const l of c.loads) {
      if (l.type === 'node') { const nd = nodes.find((x) => len(sub(x.p, l.at)) <= MERGE_TOL); if (nd) loads.push({ type: 'node', node: nd.id, F: l.F }); continue; }
      const list = parts.get(l.member);
      if (!list?.length) continue;
      if (l.type === 'point') { const pc = list.find((q) => l.a >= q.s0 - 1e-9 && l.a <= q.s1 + 1e-9) || list[list.length - 1]; loads.push({ type: 'point', member: members[pc.k].id, dir: l.dir, P: l.P, a: Math.max(0, l.a - pc.s0) }); continue; }
      const Lm = list[list.length - 1].s1, a0 = l.a ?? 0, b0 = l.b ?? Lm, w2 = l.w2 ?? l.w;
      const wAt = (s) => (b0 > a0 ? l.w + (w2 - l.w) * (s - a0) / (b0 - a0) : l.w);
      for (const q of list) { const s0 = Math.max(a0, q.s0), s1 = Math.min(b0, q.s1); if (s1 - s0 > 1e-6) loads.push({ type: 'udl', member: members[q.k].id, dir: l.dir, w: wAt(s0), w2: wAt(s1), a: s0 - q.s0, b: s1 - q.s0 }); }
    }
    return { id: c.id, name: c.name, kind: c.kind, selfWeight: c.selfWeight, loads };
  });
  const raw = {
    format: FORMAT, version: VERSION, name,
    nodes: nodes.map((x) => ({ id: x.id, x: x.p[0], y: x.p[1], z: x.p[2] })), materials: [...materials.values()], sections: [...sections.values()],
    members, supports: [...supports].map(([node, fix]) => ({ node, fix })), cases, combos: A.combos,
    diaphragms: diaphragmsOf(A.concrete?.floors),   // 0.8 SU.1056: the floors people set up are rigid diaphragms (none: frame-only, as before)
  };
  if (slabs.length || walls.length) {   // 0.8 SU.1056 step 2: concrete slabs and walls become plates, merged with the frame's nodes
    const pl = addPlates(raw, { slabs, walls }, { fc: A.concrete?.mat?.fc ?? 28, size: 0 });
    for (const x of pl.skipped) skipped.push({ id: x.id, why: x.why });
    if (pl.plates?.length) notes.push({ key: 'frame.note.ifc-plates', n: pl.plates.length });
  }
  const { model, warnings } = cleanFrame(raw);
  notes.push({ key: 'frame.note.ifc-elements', n: elements.length });
  notes.push({ key: A.bases === 'pinned' ? 'frame.note.bases-pinned' : 'frame.note.bases-fixed', n: nBases });
  const nb = elements.filter((e) => e.type === 'beam').length * 2, nr = elements.filter((e) => e.type === 'brace').length;
  if (nb) notes.push({ key: A.beamEnds === 'pinned' ? 'frame.note.free-pinned' : 'frame.note.free-rigid', n: nb });
  if (nr) notes.push({ key: A.braces === 'pinned' ? 'frame.note.braces-pinned' : 'frame.note.braces-rigid', n: nr });
  if (own) notes.push({ key: 'frame.note.own-ends', n: own });
  if ((A.supports || []).length) notes.push({ key: 'frame.note.own-supports', n: A.supports.length });
  if (snapped) notes.push({ key: 'frame.note.ifc-snapped', n: snapped });
  const approx = elements.filter((e) => e.approxJ).length;
  if (approx) notes.push({ key: 'frame.note.ifc-approx-j', n: approx });
  notes.push({ key: 'frame.note.ifc-material', n: 0 }, { key: 'frame.note.worklines', n: elements.length });
  if (nConc) notes.push({ key: nCracked ? 'frame.note.concrete-cracked' : 'frame.note.concrete-gross', n: nConc });
  if (skipped.length) notes.push({ key: 'frame.note.skipped', n: skipped.length });
  return { model, parts, nodes, skipped, notes, warnings, snapped };
}

/** 0.8 SU.1056: the sections the model's members use, with their properties (the Concrete block sets up a rectangle from A and Iy). */
export function sectionsOfElements(elements) {
  const seen = new Map();
  for (const e of elements) { const k = String(e.sec.name).toUpperCase(); if (!seen.has(k)) seen.set(k, { name: e.sec.name, A: e.sec.A, Iy: e.sec.Iy, Iz: e.sec.Iz }); }
  return [...seen.values()];
}

export function analyseIfc(W, api, mid, analysis, { name = '' } = {}) {
  const r = readFrameElements(W, api, mid);
  const frame = frameOfElements(r.elements, analysis, { name, slabs: r.slabs, walls: r.walls });
  frame.skipped.push(...r.skipped.map((s) => ({ id: s.gid, why: s.why, cls: s.cls })));
  if (r.skipped.length) frame.notes.push({ key: 'frame.note.ifc-not-read', n: r.skipped.length });
  frame.elements = r.elements;
  return { frame, sol: solveFrame(frame.model) };
}

/** The analysis settings kept in the IFC: the project's CadCraft_Analysis.Settings (JSON text; untrusted). */
export function readAnalysis(W, api, mid) {
  const v = api.GetLineIDsWithType(mid, W.IFCPROJECT);
  if (!v.size()) return null;
  const proj = v.get(0);
  const rels = api.GetLineIDsWithType(mid, W.IFCRELDEFINESBYPROPERTIES);
  for (let i = 0; i < rels.size(); i++) {
    const r = api.GetLine(mid, rels.get(i), false);
    if (!(r.RelatedObjects || []).some((o) => o.value === proj)) continue;
    const ps = api.GetLine(mid, r.RelatingPropertyDefinition?.value, false);
    if (!ps || ps.Name?.value !== ANALYSIS_PSET) continue;
    for (const h of ps.HasProperties || []) {
      const p = api.GetLine(mid, h.value, false);
      if (p?.Name?.value !== 'Settings') continue;
      try { return cleanAnalysis(JSON.parse(String(p.NominalValue?.value ?? ''))); } catch { return null; }
    }
  }
  return null;
}

/** An op (IfcEditor.modelChange) writing the settings into the project's CadCraft_Analysis set. */
export function writeAnalysis(json) {
  return op((w) => {
    const v = w.api.GetLineIDsWithType(w.mid, w.W.IFCPROJECT);
    if (!v.size()) throw Object.assign(new Error('frame.err.no-project'), { key: 'frame.err.no-project' });
    const proj = v.get(0);
    w.upsertPset(proj, ANALYSIS_PSET, [['Settings', 'IFCTEXT', json]]);
    return { id: proj, ids: [proj], made: new Map() };
  });
}
