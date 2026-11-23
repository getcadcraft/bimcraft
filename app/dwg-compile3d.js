/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-compile3d.js — a drawing model's model space (cc-dwg readDwg / dxf-model.js) as 3D batches for the drawing's 3D view
 * (dwg-view3d.js). No DOM, no three.js: bin/test-bimcraft.mjs runs it in Node.
 *
 *   const m = compileModel3d(model, { xrefs })
 *         = compileScene(fromDwgModel(model, { xrefs }))
 *   fromDwgModel — the one adapter that knows the reader's model → a plain DXF-semantic scene (shape documented above
 *                  the function and in docs/apps/bimcraft-3d.md); switching readers = rewriting only this function.
 *   compileScene — scene → batches; never sees the reader's model.
 *   m.batches  [{ layer, color, lines: Float64Array (segment pairs, x y z), tris: Float64Array (x y z per corner),
 *                 lineOwner: Uint32Array (per segment), triOwner: Uint32Array (per triangle) }]
 *   m.owners   per model-space entity, in the reader's order: { type, handle, layer } — a primitive's owner is the index
 *              of the TOP-LEVEL entity it came from (a block reference picks as a whole, as in AutoCAD; 0.4 B2)
 *   m.bounds   { min: [x, y, z], max: [x, y, z] } in drawing units (empty: min > max)
 *   m.stats    { entities, segments, triangles, drawn {type: n}, notDrawn {type: n}, flatOnly {type: n},
 *                polyline3dFixed, truncated }
 *
 * One batch per layer × colour (colour rules as dwg-compile.js: layer "0" and BYBLOCK inherit from the insert,
 * 'ink' = ACI 7). What has real Z:
 *   LINE (+ THICKNESS: a vertical quad along the extrusion), LWPOLYLINE / 2D POLYLINE at their elevation
 *   (+ THICKNESS: walls), 3D POLYLINE (every vertex),
 *   3DFACE (invisible edges left out), POLYFACE and POLYGON MESH, CIRCLE / ARC in their own
 *   plane (+ THICKNESS: a cylinder wall; a circle is capped top and bottom, as AutoCAD hides it), ELLIPSE, SPLINE,
 *   LEADER, MLINE, SOLID / TRACE (flat faces), HATCH outlines, and INSERTs with full 3D transforms (OCS from the
 *   extrusion direction by the arbitrary-axis rule, X/Y/Z scale, rotation, arrays) — nested, xrefs included.
 *   Dimensions and tables draw their anonymous blocks.
 * Text, MTEXT and visible attributes (0.4 B7): `batch.texts` [{ owner, s, o, xd, yd, ha, va }] — one line of text at o, xd / yd
 * one unit of text height along its baseline / up in world space; dwg-view3d.js draws them from a canvas atlas. Wide
 * polylines (start / end widths, constant width) are ribbons of faces in their plane.
 * Shown in the 2D view only (counted in `flatOnly`): multileaders, pictures, hatch patterns.
 * Not drawn yet (counted in `notDrawn`, never guessed): 3DSOLID / BODY / REGION (ACIS), the SURFACE family, MESH
 * (subdivision), and anything else this does not know.
 */
import { arcPoints, bulgePolyline, hatchRings, layerColor, rgbHex, aciColor, UNITS, plainText, mtextLines } from './dwg-compile.js';
import { t } from "./i18n.js";
import { cross3 as cross, unit3 as unit } from './geom-vec.js';   // shared helpers (0.11 PERF.74)

const MAX_PRIMS = 4_000_000;
const TAU = Math.PI * 2;
const FLAT_ONLY = new Set(['MULTILEADER', 'IMAGE', 'ARCALIGNEDTEXT', 'TOLERANCE', 'WIPEOUT', 'OLE2FRAME', 'OLEFRAME']);   // text: drawn since 0.4 B7
const SILENT = new Set(['VIEWPORT', 'POINT', 'XLINE', 'RAY', 'SEQEND']);
const ACIS = new Set(['3DSOLID', 'BODY', 'REGION']);
/** The name a not-drawn type is counted under (ACIS is the solid modeller's name, the same in every language). */
const notDrawnName = (type) => (ACIS.has(type) ? type + ' (ACIS)' : type === 'MESH' ? t('dwg.skip.subdivision', { type }) : type);

// ---- 3 × 4 affine matrices, row-major [m00 m01 m02 m03, m10 …, m20 …] ----
export const I3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0];
export function mul3(a, b) {
  const r = new Array(12);
  for (let i = 0; i < 3; i++) {
    const o = i * 4;
    r[o] = a[o] * b[0] + a[o + 1] * b[4] + a[o + 2] * b[8];
    r[o + 1] = a[o] * b[1] + a[o + 1] * b[5] + a[o + 2] * b[9];
    r[o + 2] = a[o] * b[2] + a[o + 1] * b[6] + a[o + 2] * b[10];
    r[o + 3] = a[o] * b[3] + a[o + 1] * b[7] + a[o + 2] * b[11] + a[o + 3];
  }
  return r;
}
const T3 = (x, y, z) => [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z];
const S3 = (x, y, z) => [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0];
const Rz = (a) => { const c = Math.cos(a), s = Math.sin(a); return [c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0]; };
export const apply3 = (m, x, y, z) => [m[0] * x + m[1] * y + m[2] * z + m[3], m[4] * x + m[5] * y + m[6] * z + m[7], m[8] * x + m[9] * y + m[10] * z + m[11]];
const dir3 = (m, x, y, z) => [m[0] * x + m[1] * y + m[2] * z, m[4] * x + m[5] * y + m[6] * z, m[8] * x + m[9] * y + m[10] * z];

/** The extrusion direction (DXF 210), or Z when it is missing or zero. */
export function normal(ext) {
  const x = ext?.x || 0, y = ext?.y || 0, z = ext?.z || 0, l = Math.hypot(x, y, z);
  return l < 1e-12 ? [0, 0, 1] : [x / l, y / l, z / l];
}
/** Object coordinate system → world: AutoCAD's arbitrary-axis algorithm (columns Ax, Ay, N). */
export function ocsMatrix(ext) {
  const N = normal(ext);
  if (N[0] === 0 && N[1] === 0 && N[2] === 1) return I3;
  const Ax = unit(Math.abs(N[0]) < 1 / 64 && Math.abs(N[1]) < 1 / 64 ? cross([0, 1, 0], N) : cross([0, 0, 1], N));
  const Ay = unit(cross(N, Ax));
  return [Ax[0], Ay[0], N[0], 0, Ax[1], Ay[1], N[1], 0, Ax[2], Ay[2], N[2], 0];
}

/** A drawing model (readDwg / dxf-model.js) → 3D batches: the adapter, then the compiler. */
export function compileModel3d(model, opts = {}) { return compileScene(fromDwgModel(model, opts)); }

// ---------------------------------------------------------------------------------------------------------------------
// The adapter: the ONLY code here that knows the reader's model (cc-dwg's readDwg, docs/DWG-LIB-SPEC.md; dxf-model.js
// gives the same shape). It turns it into a plain scene for the compiler:
//   scene  { units, layers [{name, color ('ink'|'#rrggbb'), on}], model [Ent], blocks Map(name → {name, base, entities, xref?}),
//            notes {polyline3dFixed} }   — xref = a scene of its own (the linked drawing's model, blocks, layers)
//   Ent    { type, handle, layer, color: {index} | {rgb}, invisible } plus, per type (points {x,y,z}, angles radians):
//     LINE start end thickness extrusion · CIRCLE center radius thickness extrusion · ARC + startAngle endAngle
//     LWPOLYLINE vertices[{x,y,bulge}] closed elevation thickness extrusion
//     POLYLINE_2D vertices[{x,y,bulge,flags}] closed elevation thickness extrusion · POLYLINE_3D vertices[{x,y,z,flags}] closed
//     POLYLINE_PFACE vertices faces[[i1..i4]] (1-based, negative = hidden edge) · POLYLINE_MESH m n vertices closedM closedN
//     3DFACE points[4] invisibleEdges (bits 1,2,4,8) · SOLID / TRACE points[4] (DXF order) elevation extrusion
//     ELLIPSE center majorAxis ratio startParam endParam extrusion · SPLINE degree knots weights control fit
//     LEADER / MLINE vertices · HATCH rings (flat [x,y,…] in its OCS) solid elevation extrusion
//     INSERT block insert scale{x,y,z} rotation extrusion cols rows colSpacing rowSpacing attribs [ATTRIB] (MINSERT too)
//     TEXT / ATTRIB value height insert align hAlign vAlign rotation widthFactor generation extrusion (0.4 B7) ·
//     MTEXT value height insert attach xAxis lineSpacing rotation extrusion · polylines' vertices carry sw / ew (widths)
//     DIMENSION block insert (every DIMENSION_* type) · ACAD_TABLE block insert · 3DSOLID / BODY / REGION / *SURFACE / MESH and
//     anything else: type only (UNKNOWN → its DXF class name)
// The reader keeps THICKNESS, every 3D polyline vertex, polyface meshes and polygon meshes, so nothing is recovered here.
// ---------------------------------------------------------------------------------------------------------------------
export function fromDwgModel(model, { xrefs = new Map() } = {}) {
  const notes = { polyline3dFixed: 0 };
  const P = (p) => ({ x: p?.x || 0, y: p?.y || 0, z: p?.z || 0 });
  const color = (e) => (e.color && e.color.rgb !== undefined ? { rgb: e.color.rgb } : { index: e.color?.index ?? 256 });

  function ent(e) {
    const base = { type: e.type, handle: e.handle, layer: e.layer || '0', color: color(e), invisible: !!e.invisible };
    const t = e.thickness || 0, ext = e.extrusion;
    switch (e.type) {
      case 'LINE': return { ...base, start: P(e.start), end: P(e.end), thickness: t, extrusion: ext };
      case 'CIRCLE': return { ...base, center: P(e.center), radius: e.radius, thickness: t, extrusion: ext };
      case 'ARC': return { ...base, center: P(e.center), radius: e.radius, startAngle: e.startAngle, endAngle: e.endAngle, thickness: t, extrusion: ext };
      case 'LWPOLYLINE': {
        const cw = e.constantWidth || 0;
        return { ...base, vertices: (e.vertices || []).map((v) => ({ x: v.x, y: v.y, bulge: v.bulge || 0, sw: v.startWidth ?? cw, ew: v.endWidth ?? cw })), closed: !!e.closed,
          elevation: e.elevation || 0, thickness: t, extrusion: ext };
      }
      case 'POLYLINE_2D':
        return { ...base, vertices: (e.vertices || []).map((v) => ({ x: v.x, y: v.y, bulge: v.bulge || 0, flags: v.flags || 0, sw: v.startWidth ?? e.startWidth ?? 0, ew: v.endWidth ?? e.endWidth ?? 0 })),
          closed: !!e.closed, elevation: e.elevation || 0, thickness: t, extrusion: ext };
      case 'TEXT': case 'ATTRIB': case 'ATTDEF':
        return { ...base, value: e.value, height: e.height || 0, insert: P(e.insert), align: e.align ? P(e.align) : null, hAlign: e.hAlign || 0, vAlign: e.vAlign || 0,
          rotation: e.rotation || 0, widthFactor: e.widthFactor || 1, generation: e.generation || 0, extrusion: ext, invisible: !!e.invisible || ((e.flags || 0) & 1) === 1 };
      case 'MTEXT':
        return { ...base, value: e.value, height: e.height || 0, insert: P(e.insert), attach: e.attach || 1, xAxis: e.xAxis ? P(e.xAxis) : null, lineSpacing: e.lineSpacing || 1, rotation: e.rotation || 0, extrusion: ext };
      case 'POLYLINE_3D': return { ...base, vertices: (e.vertices || []).map((v) => ({ x: v.x, y: v.y, z: v.z || 0, flags: v.flags || 0 })), closed: !!e.closed };
      case 'POLYLINE_PFACE': return { ...base, vertices: (e.vertices || []).map(P), faces: e.faces || [] };
      case 'POLYLINE_MESH': return { ...base, m: e.m, n: e.n, vertices: (e.vertices || []).map(P), closedM: !!(e.flags & 1), closedN: !!(e.flags & 32) };
      case '3DFACE': { const p = e.points || []; return { ...base, points: [p[0], p[1], p[2], p[3] || p[2]].map(P), invisibleEdges: e.invisibleEdges || 0 }; }
      case 'SOLID': case 'TRACE': { const p = e.points || []; return { ...base, points: [p[0], p[1], p[2], p[3] || p[2]].map(P), elevation: e.elevation ?? p[0]?.z ?? 0, extrusion: ext }; }
      case 'ELLIPSE': return { ...base, center: P(e.center), majorAxis: P(e.majorAxis), ratio: e.ratio, startParam: e.startParam, endParam: e.endParam, extrusion: ext };
      case 'SPLINE': return { ...base, degree: e.degree, knots: e.knots, weights: e.weights, control: (e.control || []).map(P), fit: (e.fit || []).map(P) };
      case 'LEADER': return { ...base, vertices: (e.vertices || []).map(P) };
      case 'MLINE': { const vs = (e.vertices || []).map((v) => P(v.point)); if (e.closed && vs.length > 2) vs.push(vs[0]); return { ...base, vertices: vs }; }
      case 'HATCH': return { ...base, rings: hatchRings(e), solid: !!e.solid, elevation: e.elevation || 0, extrusion: ext };
      case 'INSERT': case 'MINSERT': return { ...base, type: 'INSERT', block: e.block, insert: P(e.insert), scale: { x: e.scale?.x || 1, y: e.scale?.y || 1, z: e.scale?.z || 1 },
        rotation: e.rotation || 0, extrusion: ext, cols: e.cols || 1, rows: e.rows || 1, colSpacing: e.colSpacing || 0, rowSpacing: e.rowSpacing || 0, attribs: (e.attribs || []).map(ent) };
      case 'ACAD_TABLE': return { ...base, block: e.block, insert: P(e.insert) };   // its *T block is in table coordinates
      case 'UNKNOWN': return { ...base, type: e.dxfName || e.className || 'UNKNOWN' };
      default:
        if (e.type.startsWith('DIMENSION') || e.type === 'ARC_DIMENSION' || e.type === 'LARGE_RADIAL_DIMENSION') return { ...base, type: 'DIMENSION', block: e.block, insert: P(e.insert) };
        return base;
    }
  }
  function scene(d) {
    const layers = (d.tables?.layers || []).map((l) => ({ name: l.name, color: layerColor(l), on: !l.off && !l.frozen }));
    const model = (d.blocks || []).find((b) => /^\*model_space$/i.test(b.name));
    const blocks = new Map();
    for (const b of d.blocks || []) {
      if (b === model || /^\*paper_space/i.test(b.name)) continue;
      const blk = { name: b.name, base: P(b.base), entities: [] };
      if (b.flags & 4) { const x = xrefs.get(b.name.toLowerCase()); if (x) blk.xref = scene(x); else blk.xrefMissing = true; }
      else blk.entities = (b.entities || []).filter((e) => e.type !== 'ATTDEF').map(ent);
      blocks.set(b.name, blk);
    }
    return { units: UNITS[d.header?.INSUNITS] || '', layers, model: model ? model.entities.map(ent) : [], blocks, base: P(d.header?.INSBASE) };
  }
  return { ...scene(model), notes };
}

/**
 * A TEXT / ATTRIB / MTEXT as lines of text in its own coordinate system (OCS): each { s, x, y, z (baseline start),
 * ux uy (one unit of text height along the baseline, width factor and mirroring in), vx vy (one unit up), ha (0 left,
 * 1 centre, 2 right), va (0 baseline, 1 bottom, 2 middle, 3 top) } — the view measures the string and aligns it.
 */
export function textLines(e) {
  const h = e.height || 0;
  if (!(h > 0)) return [];
  if (e.type === 'MTEXT') {
    const lines = mtextLines(e.value).filter((l, i, a) => l.trim() || i < a.length - 1);
    if (!lines.length) return [];
    const rot = e.xAxis && (e.xAxis.x || e.xAxis.y) ? Math.atan2(e.xAxis.y, e.xAxis.x) : (e.rotation || 0);
    const ap = (e.attach || 1) - 1, ha = ap % 3, row = Math.floor(ap / 3);
    const gap = h * 1.667 * (e.lineSpacing || 1), total = gap * (lines.length - 1);
    const top = row === 0 ? -h : row === 1 ? total / 2 - h / 2 : total;
    const c = Math.cos(rot), sn = Math.sin(rot);
    return lines.map((ln, i) => {
      const dy = top - gap * i;
      return { s: ln, x: e.insert.x - dy * sn, y: e.insert.y + dy * c, z: e.insert.z || 0, ux: c * h, uy: sn * h, vx: -sn * h, vy: c * h, ha, va: 0 };
    }).filter((l) => l.s.trim());
  }
  const s = plainText(e.value);
  if (!s.trim()) return [];
  const aligned = (e.hAlign || 0) !== 0 || (e.vAlign || 0) !== 0;
  const p = aligned && e.align && (e.align.x || e.align.y) ? e.align : e.insert;
  const rot = e.rotation || 0, c = Math.cos(rot), sn = Math.sin(rot), wf = (e.widthFactor || 1) * ((e.generation & 2) ? -1 : 1);
  return [{ s, x: p.x, y: p.y, z: p.z || e.insert.z || 0, ux: c * h * wf, uy: sn * h * wf, vx: -sn * h, vy: c * h,
    ha: [0, 1, 2, 0, 1, 0][e.hAlign || 0], va: e.hAlign === 4 ? 2 : (e.vAlign || 0) }];
}

// ---------------------------------------------------------------------------------------------------------------------
// The compiler: the scene above → batches. Knows nothing of the reader.
// ---------------------------------------------------------------------------------------------------------------------
export function compileScene(sc) {
  const layers = new Map(sc.layers.map((l) => [l.name, { ...l }]));
  const layerOf = (name, fb) => {
    if (!layers.has(name)) layers.set(name, { name, color: fb ? fb.color : 'ink', on: fb ? fb.on : true });
    return layers.get(name);
  };
  const stats = { entities: 0, segments: 0, triangles: 0, drawn: {}, notDrawn: {}, flatOnly: {}, polyline3dFixed: sc.notes?.polyline3dFixed || 0, truncated: false };
  const count = (o, t) => { o[t] = (o[t] || 0) + 1; };
  const bmin = [Infinity, Infinity, Infinity], bmax = [-Infinity, -Infinity, -Infinity];
  const grow = (p) => {
    for (let k = 0; k < 3; k++) { if (!Number.isFinite(p[k])) return false; }
    for (let k = 0; k < 3; k++) { if (p[k] < bmin[k]) bmin[k] = p[k]; if (p[k] > bmax[k]) bmax[k] = p[k]; }
    return true;
  };
  const batches = new Map();
  const batch = (layer, color) => {
    const k = layer + '\u0000' + color;
    let b = batches.get(k);
    if (!b) { b = { layer, color, lines: [], tris: [], lo: [], to: [], texts: [] }; batches.set(k, b); }
    return b;
  };
  const full = () => { if (stats.segments + stats.triangles > MAX_PRIMS) { stats.truncated = true; return true; } return false; };

  function emit(e, ctx) {
    if (full()) return;
    if (e.invisible) return;
    const src = e.layer || '0';
    const layer = src === '0' && ctx.layer ? ctx.layer : (ctx.xp ? ctx.xp + src : src);
    const lay = layerOf(layer, ctx.xlayers && ctx.xlayers.get(src));
    const c = e.color || { index: 256 };
    let color;
    if (c.rgb !== undefined) color = rgbHex(c.rgb);
    else if (c.index === 0) color = ctx.color || 'ink';
    else if (c.index === 256 || c.index === undefined) color = src === '0' && ctx.layerColor ? ctx.layerColor : lay.color;
    else color = aciColor(c.index);
    const out = batch(layer, color);
    const m = ctx.m;
    const W = (p) => apply3(m, p.x, p.y, p.z || 0);
    const own = ctx.owner;
    const seg = (a, b) => { if (grow(a) && grow(b)) { out.lines.push(a[0], a[1], a[2], b[0], b[1], b[2]); out.lo.push(own); stats.segments++; } };
    const path = (pts) => { for (let i = 0; i + 1 < pts.length; i++) seg(pts[i], pts[i + 1]); };
    const tri = (a, b, c3) => { if (grow(a) && grow(b) && grow(c3)) { out.tris.push(a[0], a[1], a[2], b[0], b[1], b[2], c3[0], c3[1], c3[2]); out.to.push(own); stats.triangles++; } };
    const quad = (a, b, c3, d) => { tri(a, b, c3); tri(a, c3, d); };
    /** A path in world space plus, with thickness, the same path moved along `up` and walls between them. */
    const extrude = (pts, up, verticals, cap) => {
      path(pts);
      if (!up) return;
      const top = pts.map((p) => [p[0] + up[0], p[1] + up[1], p[2] + up[2]]);
      path(top);
      for (let i = 0; i + 1 < pts.length; i++) quad(pts[i], pts[i + 1], top[i + 1], top[i]);
      for (const i of verticals) if (pts[i]) seg(pts[i], top[i]);
      if (cap) {   // a closed outline (circle): fan from its centre, both ends
        const ct = [cap[0] + up[0], cap[1] + up[1], cap[2] + up[2]];
        for (let i = 0; i + 1 < pts.length; i++) { tri(cap, pts[i + 1], pts[i]); tri(ct, top[i], top[i + 1]); }
      }
    };
    /** Flat [x,y,…] points in the entity's OCS at height z → world points. */
    const ocsPts = (flat, z, om) => { const r = []; for (let i = 0; i + 1 < flat.length; i += 2) r.push(apply3(om, flat[i], flat[i + 1], z)); return r; };
    const thick = (t, ext) => {
      if (!t) return null;
      const N = normal(ext);
      const v = dir3(m, N[0] * t, N[1] * t, N[2] * t);
      return Math.hypot(v[0], v[1], v[2]) > 0 ? v : null;
    };
    const drawn = () => count(stats.drawn, e.type);

    switch (e.type) {
      case 'LINE': extrude([W(e.start), W(e.end)], thick(e.thickness, e.extrusion), [0, 1], null); drawn(); break;
      case 'LWPOLYLINE': case 'POLYLINE_2D': {
        const vs = e.vertices.filter((v) => !(v.flags & 16));   // not a spline frame's control points
        if (vs.length < 2) break;
        const om = mul3(m, ocsMatrix(e.extrusion));
        const flat = bulgePolyline(vs, e.closed);
        const pts = ocsPts(flat, e.elevation || 0, om);
        const up = thick(e.thickness, e.extrusion);
        const at = [];   // verticals at the real vertices only (not at every arc segment)
        if (up) { const corners = new Set(vs.map((v) => v.x + ',' + v.y)); for (let i = 0, k = 0; i + 1 < flat.length; i += 2, k++) if (corners.has(flat[i] + ',' + flat[i + 1])) at.push(k); }
        extrude(pts, up, at, null);
        // wide polylines (0.4 B7): a ribbon of quads in the polyline's plane, widths interpolated along each segment
        if (vs.some((v) => v.sw > 0 || v.ew > 0)) {
          const n = e.closed ? vs.length : vs.length - 1;
          for (let i = 0; i < n; i++) {
            const a = vs[i], b = vs[(i + 1) % vs.length];
            const seg = bulgePolyline([{ x: a.x, y: a.y, bulge: a.bulge }, { x: b.x, y: b.y, bulge: 0 }], false);
            const P2 = []; for (let k = 0; k + 1 < seg.length; k += 2) P2.push([seg[k], seg[k + 1]]);
            if (P2.length < 2) continue;
            let total = 0; const at2 = [0];
            for (let k = 1; k < P2.length; k++) { total += Math.hypot(P2[k][0] - P2[k - 1][0], P2[k][1] - P2[k - 1][1]); at2.push(total); }
            const side = (k) => {   // half the width at point k, along the normal of the path there
              const w = ((a.sw || 0) + ((b === a ? 0 : (a.ew || 0)) - (a.sw || 0)) * (total ? at2[k] / total : 0)) / 2;
              const p = P2[Math.max(0, k - 1)], q = P2[Math.min(P2.length - 1, k + 1)];
              const dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy) || 1;
              return [-dy / l * w, dx / l * w];
            };
            const z = e.elevation || 0;
            for (let k = 0; k + 1 < P2.length; k++) {
              const s0 = side(k), s1 = side(k + 1);
              const L0 = apply3(om, P2[k][0] + s0[0], P2[k][1] + s0[1], z), R0 = apply3(om, P2[k][0] - s0[0], P2[k][1] - s0[1], z);
              const L1 = apply3(om, P2[k + 1][0] + s1[0], P2[k + 1][1] + s1[1], z), R1 = apply3(om, P2[k + 1][0] - s1[0], P2[k + 1][1] - s1[1], z);
              quad(L0, R0, R1, L1);
            }
          }
        }
        drawn(); break;
      }
      case 'TEXT': case 'ATTRIB': case 'ATTDEF': case 'MTEXT': {
        const lines = textLines(e);
        if (!lines.length) break;
        const om = mul3(m, ocsMatrix(e.extrusion));
        for (const ln of lines) {
          const o = apply3(om, ln.x, ln.y, ln.z), xd = dir3(om, ln.ux, ln.uy, 0), yd = dir3(om, ln.vx, ln.vy, 0);
          if (!grow(o)) continue;
          grow([o[0] + xd[0] * ln.s.length * 0.6, o[1] + xd[1] * ln.s.length * 0.6, o[2] + xd[2] * ln.s.length * 0.6]);
          out.texts.push({ owner: own, s: ln.s, o, xd, yd, ha: ln.ha, va: ln.va });
        }
        drawn(); break;
      }
      case 'POLYLINE_3D': {
        let vs = e.vertices;
        if (vs.some((v) => v.flags & 8)) vs = vs.filter((v) => !(v.flags & 16));   // spline-fit: the fitted vertices, not the frame
        const pts = vs.map(W);
        if (e.closed && pts.length > 2) pts.push(pts[0]);
        path(pts);
        drawn(); break;
      }
      case '3DFACE': {
        const c4 = e.points.map(W);
        const same = (p, q) => p[0] === q[0] && p[1] === q[1] && p[2] === q[2];
        tri(c4[0], c4[1], c4[2]);
        if (!same(c4[2], c4[3])) tri(c4[0], c4[2], c4[3]);
        for (let i = 0; i < 4; i++) { const a = c4[i], b = c4[(i + 1) % 4]; if (!(e.invisibleEdges & (1 << i)) && !same(a, b)) seg(a, b); }
        drawn(); break;
      }
      case 'POLYLINE_PFACE': {
        const V = e.vertices.map(W);
        for (const f of e.faces) {
          const idx = f.filter((i) => i !== 0);
          const pts = idx.map((i) => V[Math.abs(i) - 1]);
          if (pts.length < 3 || pts.some((p) => !p)) continue;
          for (let k = 1; k + 1 < pts.length; k++) tri(pts[0], pts[k], pts[k + 1]);
          for (let k = 0; k < idx.length; k++) if (idx[k] > 0) seg(pts[k], pts[(k + 1) % pts.length]);
        }
        drawn(); break;
      }
      case 'POLYLINE_MESH': {
        const M = e.m | 0, N = e.n | 0, V = e.vertices.map(W);
        if (M < 2 || N < 2 || V.length < M * N) { count(stats.notDrawn, t('dwg.skip.incomplete', { type: 'POLYGON MESH' })); break; }
        const at = (i, j) => V[(i % M) * N + (j % N)];
        const mi = e.closedM ? M : M - 1, nj = e.closedN ? N : N - 1;
        for (let i = 0; i < mi; i++) for (let j = 0; j < nj; j++) quad(at(i, j), at(i + 1, j), at(i + 1, j + 1), at(i, j + 1));
        for (let i = 0; i < M; i++) for (let j = 0; j < nj; j++) seg(at(i, j), at(i, j + 1));
        for (let j = 0; j < N; j++) for (let i = 0; i < mi; i++) seg(at(i, j), at(i + 1, j));
        drawn(); break;
      }
      case 'CIRCLE': case 'ARC': {
        const om = mul3(m, ocsMatrix(e.extrusion));
        const c0 = e.center, z = c0.z || 0;
        const flat = e.type === 'CIRCLE' ? arcPoints(c0.x, c0.y, e.radius, 0, TAU, true) : arcPoints(c0.x, c0.y, e.radius, e.startAngle, e.endAngle, true);
        const pts = ocsPts(flat, z, om);
        const up = thick(e.thickness, e.extrusion);
        const verts = e.type === 'ARC' ? [0, pts.length - 1] : [0, Math.floor(pts.length / 4), Math.floor(pts.length / 2), Math.floor(3 * pts.length / 4)];
        extrude(pts, up, verts, e.type === 'CIRCLE' && up ? apply3(om, c0.x, c0.y, z) : null);
        drawn(); break;
      }
      case 'ELLIPSE': {   // centre and major axis are world coordinates; the minor axis is N × major × ratio
        const N = normal(e.extrusion), mj = e.majorAxis, c0 = e.center;
        const mn = [(N[1] * mj.z - N[2] * mj.y) * e.ratio, (N[2] * mj.x - N[0] * mj.z) * e.ratio, (N[0] * mj.y - N[1] * mj.x) * e.ratio];
        let sweep = e.endParam - e.startParam;
        while (sweep <= 0) sweep += TAU;
        const n = Math.max(8, Math.min(128, Math.ceil(sweep / TAU * 72))), pts = [];
        for (let i = 0; i <= n; i++) {
          const t = e.startParam + sweep * (i / n), co = Math.cos(t), si = Math.sin(t);
          pts.push(apply3(m, c0.x + co * mj.x + si * mn[0], c0.y + co * mj.y + si * mn[1], c0.z + co * mj.z + si * mn[2]));
        }
        path(pts);
        drawn(); break;
      }
      case 'SPLINE': path(spline3(e).map((p) => apply3(m, p[0], p[1], p[2]))); drawn(); break;
      case 'LEADER': case 'MLINE': path(e.vertices.map(W)); drawn(); break;
      case 'SOLID': case 'TRACE': {
        const om = mul3(m, ocsMatrix(e.extrusion)), z = typeof e.elevation === 'number' ? e.elevation : 0;
        const q = [e.points[0], e.points[1], e.points[3], e.points[2]].map((p) => apply3(om, p.x, p.y, z));   // DXF 1,2,3,4 → outline 1,2,4,3
        tri(q[0], q[1], q[2]); tri(q[0], q[2], q[3]);
        path([...q, q[0]]);
        drawn(); break;
      }
      case 'HATCH': {
        const om = mul3(m, ocsMatrix(e.extrusion));
        for (const r of e.rings) { const pts = ocsPts(r, e.elevation || 0, om); if (pts.length > 2) path([...pts, pts[0]]); }
        if (!e.solid) count(stats.flatOnly, 'HATCH pattern');
        drawn(); break;
      }
      case 'INSERT': {
        const blk = ctx.blocks.get(e.block);
        if (!blk) { count(stats.notDrawn, t('dwg.skip.missing_block', { type: 'INSERT' })); break; }
        if (ctx.depth > 20) { count(stats.notDrawn, t('dwg.skip.nested', { type: 'INSERT' })); break; }
        if (blk.xrefMissing) break;   // linked drawing not loaded (the 2D view lists it)
        const x = blk.xref || null;
        const base = x ? x.base : blk.base;
        const content = x ? x.model : blk.entities;
        const ip = e.insert, s = e.scale;
        const om = mul3(m, ocsMatrix(e.extrusion));
        for (let r = 0; r < Math.max(1, e.rows); r++) {
          for (let k = 0; k < Math.max(1, e.cols); k++) {
            const local = mul3(mul3(T3(ip.x, ip.y, ip.z), Rz(e.rotation)),
              mul3(T3(k * e.colSpacing, r * e.rowSpacing, 0), mul3(S3(s.x, s.y, s.z), T3(-base.x, -base.y, -base.z))));
            const sub = { m: mul3(om, local), layer, color, layerColor: lay.color, depth: ctx.depth + 1, owner: ctx.owner,
              blocks: x ? x.blocks : ctx.blocks, xp: x ? e.block + '|' : ctx.xp,
              xlayers: x ? new Map(x.layers.map((l) => [l.name, l])) : ctx.xlayers };
            for (const be of content) emit(be, sub);
          }
        }
        for (const at of e.attribs || []) emit(at, ctx);   // attributes are placed in the parent's space, as in 2D (0.4 B7)
        drawn(); break;
      }
      case 'DIMENSION': case 'ACAD_TABLE': {
        const blk = e.block && ctx.blocks.get(e.block);
        if (!blk) { count(stats.notDrawn, e.type); break; }
        const sub = { ...ctx, m: mul3(m, T3(e.insert.x, e.insert.y, e.insert.z)), layer, color, layerColor: lay.color, depth: ctx.depth + 1 };
        for (const be of blk.entities) emit(be, sub);
        drawn(); break;
      }
      default:
        if (FLAT_ONLY.has(e.type)) count(stats.flatOnly, e.type);
        else if (!SILENT.has(e.type)) count(stats.notDrawn, notDrawnName(e.type));
    }
  }

  const top = { m: I3, layer: null, color: null, layerColor: null, depth: 0, blocks: sc.blocks, xp: '', xlayers: null, owner: 0 };
  sc.model.forEach((e, i) => { stats.entities++; top.owner = i; emit(e, top); });

  const out = [];
  for (const b of batches.values()) {
    if (!b.lines.length && !b.tris.length && !b.texts.length) continue;
    out.push({ layer: b.layer, color: b.color, lines: Float64Array.from(b.lines), tris: Float64Array.from(b.tris),
      lineOwner: Uint32Array.from(b.lo), triOwner: Uint32Array.from(b.to), texts: b.texts });
  }
  return {
    units: sc.units,
    batches: out,
    owners: sc.model.map((e) => ({ type: e.type, handle: e.handle, layer: e.layer || '0' })),
    bounds: { min: bmin, max: bmax },
    layers: [...layers.values()].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })),
    stats,
  };
}

/** A spline through its fit points, else its B-spline from the control points (de Boor), in 3D. */
export function spline3(e) {
  const P = (q) => [q.x, q.y, q.z || 0];
  const fit = e.fit || e.fitPoints || [], cp = e.control || e.controlPoints || [], k = e.knots || [], p = e.degree || 3;
  if (fit.length > 1) return fit.map(P);
  if (cp.length < 2) return [];
  if (k.length !== cp.length + p + 1) return cp.map(P);
  const w = e.weights && e.weights.length === cp.length ? e.weights : null;
  const lo = k[p], hi = k[k.length - p - 1], n = Math.max(16, cp.length * 8), pts = [];
  for (let s = 0; s <= n; s++) {
    const u = s === n ? hi - 1e-9 * (hi - lo) : lo + (hi - lo) * (s / n);
    let span = p;
    while (span < cp.length - 1 && u >= k[span + 1]) span++;
    const d = [];
    for (let j = 0; j <= p; j++) { const q = cp[span - p + j], wt = w ? w[span - p + j] : 1; d.push([q.x * wt, q.y * wt, (q.z || 0) * wt, wt]); }
    for (let r = 1; r <= p; r++) {
      for (let j = p; j >= r; j--) {
        const i = span - p + j, den = k[i + p - r + 1] - k[i], a = den === 0 ? 0 : (u - k[i]) / den;
        d[j] = d[j].map((v, c) => (1 - a) * d[j - 1][c] + a * v);
      }
    }
    pts.push([d[p][0] / d[p][3], d[p][1] / d[p][3], d[p][2] / d[p][3]]);
  }
  return pts;
}
