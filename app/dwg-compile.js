/* SPDX-License-Identifier: Apache-2.0 */
/**
 * dwg-compile.js — turns a drawing model (cc-dwg's readDwg for DWG, dxf-model.js for DXF; docs/DWG-LIB-SPEC.md)
 * into what dwg-view.js draws. No DOM: bin/test-bimcraft.mjs runs it in Node.
 *
 *   const drawing = compileDrawing(model);
 *   drawing.spaces   [{ key, name, kind: 'model'|'paper', batches, bounds, paper, viewports }]
 *   drawing.layers   [{ name, color, on }]
 *
 * A batch is everything on one layer in one colour and one line weight (`lw`, mm; 0 = thinnest):
 * `lines` (flat [x0,y0,x1,y1,…] polylines), `fills` ({ rings: [flat…], pattern }) and `texts`
 * ({ x, y, h, rot, s, ha, va }) — all in the space's world coordinates. A space's `images` are
 * raster images ({ m: pixel → world affine, w, h, ref (the file name the drawing points at), layer }). Block inserts are expanded with their transforms (layer "0" and
 * BYBLOCK colour inherit from the insert, as in AutoCAD); dimensions and tables draw from their
 * anonymous blocks. Colours are 'ink' (ACI 7: black on paper, white on a dark screen) or '#rrggbb'.
 * Line weights follow AutoCAD's rules (by layer, by block, default 0.25 mm). Layers carry `lw` and
 * `plot` (false = never printed, e.g. DEFPOINTS) for the print view. Multileaders draw their leader
 * lines, arrowheads, landing, text and block content. Unsupported entity types are counted, never
 * guessed at.
 *
 * Linked drawings (xrefs): pass the read models as `xrefs` (Map, key = xref block name in lower
 * case). Each is drawn where it is inserted, from its own model space with its own blocks; its
 * layers appear under the host's "<xref>|<layer>" names (the host's settings for them win).
 * `drawing.xrefs` lists every xref the host uses and whether it was loaded.
 */

import { cross3 as cross, unit3 as unit } from './geom-vec.js';   // shared helpers (0.11 PERF.74)
export const VERSIONS = {
  AC1009: 'R12', AC1012: 'R13', AC1014: 'R14', AC1015: '2000', AC1018: '2004',
  AC1021: '2007', AC1024: '2010', AC1027: '2013', AC1032: '2018',
};
export const UNITS = { 0: '', 1: 'inches', 2: 'feet', 3: 'miles', 4: 'millimeters', 5: 'centimeters', 6: 'meters', 7: 'kilometers', 8: 'microinches', 9: 'mils', 10: 'yards' };

const MAX_PRIMS = 3_000_000;   // safety stop for runaway nesting
const TAU = Math.PI * 2;

/** The model's line weights are 1/100 mm (−1 by layer, −2 by block, −3 default) → mm. */
export const LW_DEFAULT = 0.25;
const LW_BYLAYER = -1, LW_BYBLOCK = -2;
const lwOf = (v) => (v >= 0 && v <= 211 ? v / 100 : LW_DEFAULT);

/** The model's spaces: `*Model_Space`, blocks by name and by block record handle, IMAGEDEFs by handle. */
export function modelParts(model) {
  const blocks = new Map(), byRecord = new Map();
  for (const b of model.blocks || []) { blocks.set(b.name, b); if (b.record) byRecord.set(b.record, b); }
  const space = (model.blocks || []).find((b) => /^\*model_space$/i.test(b.name)) || null;
  const imageDefs = new Map((model.objects || []).filter((o) => o.type === 'IMAGEDEF').map((d) => [d.handle, d]));
  return { blocks, byRecord, space, imageDefs };
}
const isDim = (t) => t.startsWith('DIMENSION') || t === 'ARC_DIMENSION' || t === 'LARGE_RADIAL_DIMENSION';
const typeName = (e) => (e.type === 'UNKNOWN' ? e.dxfName || e.className || 'UNKNOWN' : e.type);

export function compileDrawing(db, { versionTag = '', xrefs = new Map() } = {}) {
  const layers = new Map();
  for (const l of db.tables?.layers || []) {
    layers.set(l.name, { name: l.name, color: layerColor(l), on: !l.off && !l.frozen, lw: lwOf(l.lineweight), plot: layerPlots(l) });
  }
  const layerOf = (name, fallback) => {
    if (!layers.has(name)) layers.set(name, { name, color: fallback ? fallback.color : 'ink', on: fallback ? fallback.on : true, lw: fallback ? fallback.lw : LW_DEFAULT, plot: fallback ? fallback.plot : true });
    return layers.get(name);
  };

  const { blocks, byRecord: recordByHandle, space: model, imageDefs } = modelParts(db);

  // Linked drawings: their blocks, model-space entities, layer colours and base point.
  const xinfo = new Map();
  for (const [key, xdb] of xrefs) {
    const x = modelParts(xdb);
    xinfo.set(key, {
      blocks: x.blocks, byHandle: x.byRecord, imageDefs: x.imageDefs,
      model: x.space ? x.space.entities : [],
      layers: new Map((xdb.tables?.layers || []).map((l) => [l.name, { color: layerColor(l), on: !l.off && !l.frozen, lw: lwOf(l.lineweight), plot: layerPlots(l) }])),
      base: xdb.header?.INSBASE || { x: 0, y: 0 },
    });
  }
  const xrefNames = (db.blocks || []).filter((b) => b.flags & 4).map((b) => b.name);

  const stats = { entities: 0, unsupported: {}, truncated: false, prims: 0, xrefEntities: 0 };
  const images = new Map();   // file the drawing points at → { ref, name, uses }
  const skip = (t) => { stats.unsupported[t] = (stats.unsupported[t] || 0) + 1; };

  // ---- one space (model or a layout) ----
  function compileSpace(entities) {
    const batches = new Map();
    const bounds = emptyBounds();
    const viewports = [];
    const pics = [];
    const batch = (layer, color, lw) => {
      const k = layer + '\u0000' + color + '\u0000' + lw;
      let b = batches.get(k);
      if (!b) { b = { layer, color, lw, lines: [], fills: [], texts: [] }; batches.set(k, b); }
      return b;
    };

    // ctx: { m: affine [a,b,c,d,e,f], layer (for "0"), color (for BYBLOCK), lw (for BYBLOCK), depth,
    //        blocks (block table in force), byHandle (block records by handle), imageDefs,
    //        xp (layer prefix inside an xref), xlayers (its layer table) }
    const subCtx = (ctx, m, layer, color, lay, lw, x) => (x
      ? { m, layer, color, layerColor: lay.color, lw, depth: ctx.depth + 1, blocks: x.blocks, byHandle: x.byHandle, imageDefs: x.imageDefs, xp: x.prefix, xlayers: x.layers, attrs: null }
      : { m, layer, color, layerColor: lay.color, lw, depth: ctx.depth + 1, blocks: ctx.blocks, byHandle: ctx.byHandle, imageDefs: ctx.imageDefs, xp: ctx.xp, xlayers: ctx.xlayers, attrs: null });
    // PERF.78 (perf-finish-11 bimcraft): the entity switch as a table, one handler per entity type (was a 130-line switch,
    // cyclomatic complexity 140). Each handler gets the entity and what emit() worked out for it (positional, no object per entity; a null-prototype table so no
    // inherited name can match an entity type); a handler's `return` is the old
    // case's `break`. Types sharing a case share the handler (filled in below). Same order of checks, same output.
    const SAME_AS = { POLYLINE_3D: 'POLYLINE_2D', TRACE: 'SOLID', MINSERT: 'INSERT', XLINE: 'POINT', RAY: 'POINT' };
    const DRAW = Object.assign(Object.create(null), {
    LINE: (e, ctx, m, layer, color, lay, lw, out, line) => { line([e.start.x, e.start.y, e.end.x, e.end.y]); },
    LWPOLYLINE: (e, ctx, m, layer, color, lay, lw, out, line) => { line(bulgePolyline(e.vertices || [], !!e.closed)); },
    POLYLINE_2D: (e, ctx, m, layer, color, lay, lw, out, line) => { line(bulgePolyline((e.vertices || []).filter((v) => !(v.flags & 16)), !!e.closed)); },
    POLYLINE_3D: null,   // = POLYLINE_2D
    CIRCLE: (e, ctx, m, layer, color, lay, lw, out, line) => { line(arcPoints(e.center.x, e.center.y, e.radius, 0, TAU, true)); },
    ARC: (e, ctx, m, layer, color, lay, lw, out, line) => { line(arcPoints(e.center.x, e.center.y, e.radius, e.startAngle, e.endAngle, true)); },
    ELLIPSE: (e, ctx, m, layer, color, lay, lw, out, line) => { line(ellipsePoints(e.center, e.majorAxis, e.ratio, e.startParam, e.endParam)); },
    SPLINE: (e, ctx, m, layer, color, lay, lw, out, line) => { line(splinePoints(e)); },
    LEADER: (e, ctx, m, layer, color, lay, lw, out, line) => { line((e.vertices || []).flatMap((v) => [v.x, v.y])); },
    MLINE: (e, ctx, m, layer, color, lay, lw, out, line) => { line((e.vertices || []).flatMap((v) => [v.point.x, v.point.y]).concat(e.closed && e.vertices?.length ? [e.vertices[0].point.x, e.vertices[0].point.y] : [])); },
    SOLID: (e, ctx, m, layer, color, lay, lw, out, line) => {
      const p = e.points || [];
      const ring = tx(m, [p[0], p[1], p[3] || p[2], p[2]].filter(Boolean).flatMap((q) => [q.x, q.y]));   // DXF order 1,2,3,4 → outline 1,2,4,3
      out().fills.push({ rings: [ring], pattern: false }); grow(bounds, ring); stats.prims++;
    },
    TRACE: null,   // = SOLID
    '3DFACE': (e, ctx, m, layer, color, lay, lw, out, line) => {
      const p = e.points;
      line([p[0], p[1], p[2], p[3] || p[2], p[0]].flatMap((q) => [q.x, q.y]));
    },
    POLYLINE_PFACE: (e, ctx, m, layer, color, lay, lw, out, line) => {   // seen from above (0.4 B8): each face's visible edges; a negative index hides the edge it starts
      const V = e.vertices || [];
      const done = new Set();
      for (const f of e.faces || []) {
        const idx = f.filter((i) => i);
        for (let k = 0; k < idx.length; k++) {
          const i = idx[k], j = idx[(k + 1) % idx.length];
          if (i < 0) continue;
          const a = V[Math.abs(i) - 1], b = V[Math.abs(j) - 1];
          if (!a || !b) continue;
          const key = Math.min(Math.abs(i), Math.abs(j)) + '|' + Math.max(Math.abs(i), Math.abs(j));
          if (done.has(key)) continue;   // an edge two faces share is drawn once
          done.add(key);
          line([a.x, a.y, b.x, b.y]);
        }
      }
    },
    POLYLINE_MESH: (e, ctx, m, layer, color, lay, lw, out, line) => {   // seen from above: the M × N grid of lines (open or closed each way)
      const V = e.vertices || [], M = e.m || 0, N = e.n || 0;
      if (M * N > V.length || M < 1 || N < 1) { skip('POLYLINE_MESH (damaged)'); return; }   // i18n-ignore: tools/fixtures/check-kitchen-dwg.mjs prints these and loads no language file (reported; key dwg.skip.damaged is ready)
      const at = (i, j) => V[i * N + j];
      const cm = !!(e.flags & 1), cn = !!(e.flags & 32);
      for (let i = 0; i < M; i++) { const r = []; for (let j = 0; j < N; j++) r.push(at(i, j).x, at(i, j).y); if (cn && N > 2) r.push(at(i, 0).x, at(i, 0).y); line(r); }
      for (let j = 0; j < N; j++) { const r = []; for (let i = 0; i < M; i++) r.push(at(i, j).x, at(i, j).y); if (cm && M > 2) r.push(at(0, j).x, at(0, j).y); line(r); }
    },
    HATCH: (e, ctx, m, layer, color, lay, lw, out, line) => {
      const rings = hatchRings(e).map((r) => tx(m, r)).filter((r) => r.length >= 6);
      if (rings.length) { out().fills.push({ rings, pattern: !e.solid }); for (const r of rings) grow(bounds, r); stats.prims++; }
    },
    TEXT: (e, ctx, m, layer, color, lay, lw, out, line) => { text(e, m, out, bounds); },
    ATTRIB: (e, ctx, m, layer, color, lay, lw, out, line) => {
      if (e.flags & 1) return;   // invisible attribute
      if (e.attType > 1 && e.mtext) mtext(e.mtext, m, out, bounds); else text(e, m, out, bounds);
    },
    MTEXT: (e, ctx, m, layer, color, lay, lw, out, line) => { mtext(e, m, out, bounds); },
    INSERT: (e, ctx, m, layer, color, lay, lw, out, line) => {
      const blk = ctx.blocks.get(e.block);
      if (!blk) { skip('INSERT (missing block)'); return; }   // i18n-ignore: tools/fixtures/check-kitchen-dwg.mjs prints these and loads no language file (reported; key dwg.skip.missing_block is ready)
      if (ctx.depth > 20) { skip('INSERT (nested too deep)'); return; }   // i18n-ignore: tools/fixtures/check-kitchen-dwg.mjs prints these and loads no language file (reported; key dwg.skip.nested is ready)
      const x = blk.flags & 4 ? xinfo.get(e.block.toLowerCase()) : null;
      if (blk.flags & 4 && !x) return;   // linked drawing not loaded: listed in drawing.xrefs
      const base = x ? x.base : (blk.base || { x: 0, y: 0 });
      const content = x ? x.model : (blk.entities || []);
      const sx = e.scale?.x || 1, sy = e.scale?.y || 1;
      const cols = Math.max(1, e.cols || 1), rows = Math.max(1, e.rows || 1);
      // A tilted extrusion (3D blocks such as insulators on a power line): the insertion point is in the block's own
      // coordinate system, z included, so it is placed by the full arbitrary-axis rule seen from above. Ignoring the
      // tilt put Plans.dwg's insulators kilometres from the drawing (2026-10-24).
      const tilt = planOcs(e.extrusion, e.insert.z || 0);
      const im = tilt ? mul(ctx.m, tilt) : m;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const local = mul(
            mul(translate(e.insert.x, e.insert.y), rotate(e.rotation || 0)),
            mul(scale(sx, sy), translate(-base.x + c * (e.colSpacing || 0) / sx, -base.y + r * (e.rowSpacing || 0) / sy)),
          );
          const sub = subCtx(ctx, mul(im, local), layer, color, lay, lw, x ? { ...x, prefix: e.block + '|' } : null);
          for (const be of content) { if (be.type !== 'ATTDEF') { if (x) stats.xrefEntities++; emit(be, sub); } }
        }
      }
      for (const a of e.attribs || []) emit(a, ctx);   // attributes are placed in the parent's space
    },
    MINSERT: null,   // = INSERT
    ACAD_TABLE: (e, ctx, m, layer, color, lay, lw, out, line) => {
      // Drawn from its anonymous block (*T…), placed like a block reference at the table's insertion point.
      const blk = e.block && ctx.blocks.get(e.block);
      if (!blk) { skip(e.type); return; }
      const ip = e.insert || { x: 0, y: 0 };
      const local = mul(mul(translate(ip.x || 0, ip.y || 0), rotate(e.rotation || 0)), scale(e.scale?.x || 1, e.scale?.y || 1));
      const sub = subCtx(ctx, mul(m, local), layer, color, lay, lw, null);
      for (const be of blk.entities || []) emit(be, sub);
    },
    MULTILEADER: (e, ctx, m, layer, color, lay, lw, out, line) => { mleader(e, m, ctx, { layer, color, lay, lw, out, line }); },
    IMAGE: (e, ctx, m, layer, color, lay, lw, out, line) => {
      const def = ctx.imageDefs.get(e.def);
      const w = e.size?.x, h = e.size?.y, u = e.u, v = e.v, p = e.insert;
      if (!def || !w || !h || !u || !v || !p) { skip('IMAGE (no picture file named)'); return; }   // i18n-ignore: tools/fixtures/check-kitchen-dwg.mjs prints these and loads no language file (reported; key dwg.skip.no_picture is ready)
      // pixel (x right, y down) → world: the position is the image's lower-left corner
      const pm = mul(m, [u.x, u.y, -v.x, -v.y, p.x + h * v.x, p.y + h * v.y]);
      const ref = String(def.fileName || '');
      pics.push({ m: pm, w, h, ref, layer });
      grow(bounds, tx(pm, [0, 0, w, 0, w, h, 0, h]));
      const img = images.get(ref) || { ref, name: baseName(ref), uses: 0 };
      img.uses++; images.set(ref, img);
      stats.prims++;
    },
    VIEWPORT: (e, ctx, m, layer, color, lay, lw, out, line) => { if (ctx.depth === 0) viewports.push(e); },
    ATTDEF: (e, ctx, m, layer, color, lay, lw, out, line) => {   // only a multileader's block shows its attribute definitions, with the leader's values
      const v = ctx.attrs && ctx.attrs.get(e.handle);
      if (v != null) text({ ...e, value: v }, m, out, bounds);
    },
    POINT: () => {},   // not drawn on a sheet
    XLINE: null,   // = POINT
    RAY: null,   // = POINT
    });
    for (const [k, f] of Object.entries(DRAW)) if (f === null) DRAW[k] = DRAW[SAME_AS[k]];
    const emit = (e, ctx) => {
      if (stats.prims > MAX_PRIMS) { stats.truncated = true; return; }
      if (e.invisible) return;
      const src = e.layer || '0';
      const layer = src === '0' && ctx.layer ? ctx.layer : (ctx.xp ? ctx.xp + src : src);
      const lay = layerOf(layer, ctx.xlayers && ctx.xlayers.get(src));
      const c = e.color || { index: 256 };
      let color;
      if (c.rgb !== undefined) color = rgbHex(c.rgb);
      else if (c.index === 0) color = ctx.color || 'ink';
      else if (c.index === 256 || c.index === undefined) color = e.layer === '0' && ctx.layerColor ? ctx.layerColor : lay.color;
      else color = aciColor(c.index);
      const lwi = e.lineweight ?? LW_BYLAYER;
      const lw = lwi === LW_BYLAYER ? lay.lw : lwi === LW_BYBLOCK ? (ctx.lw ?? LW_DEFAULT) : lwOf(lwi);
      const m = ocs(ctx.m, e.extrusion);
      const out = () => batch(layer, color, lw);
      const line = (pts) => { if (pts.length >= 4) { const t = tx(m, pts); out().lines.push(t); grow(bounds, t); stats.prims++; } };

      const draw = DRAW[e.type];
      if (draw) { draw(e, ctx, m, layer, color, lay, lw, out, line); return; }
      if (isDim(e.type)) {   // drawn from its anonymous block (*D…), already in this space's coordinates
        const blk = e.block && ctx.blocks.get(e.block);
        if (!blk) { skip('DIMENSION'); return; }
        const ip = e.insert || { x: 0, y: 0 };
        const sub = subCtx(ctx, mul(m, translate(ip.x || 0, ip.y || 0)), layer, color, lay, lw, null);
        for (const be of blk.entities || []) emit(be, sub);
      } else skip(typeName(e));
    };

    /** Multileader: leader lines (+ closed arrowhead and landing), then its text or block. */
    function mleader(e, m, ctx, { layer, color, lay, lw, out, line }) {
      const cx = e.context || {};
      const arrow = cx.arrowSize ?? e.arrowSize ?? 0;
      for (const sec of cx.roots || []) {
        const last = sec.connection;
        for (const ll of sec.lines || []) {
          const vs = (ll.points || []).filter(Boolean);
          if (!vs.length && !last) continue;
          const pts = [...vs, ...(last ? [last] : [])];
          if (e.leaderType !== 0) line(pts.flatMap((p) => [p.x, p.y]));
          if (arrow > 0 && pts.length > 1) {   // closed filled arrowhead at the first point
            const a = pts[0], b = pts[1], d = Math.hypot(b.x - a.x, b.y - a.y);
            if (d > 0) {
              const ux = (b.x - a.x) / d, uy = (b.y - a.y) / d, bx = a.x + ux * arrow, by = a.y + uy * arrow, hw = arrow / 6;
              const ring = tx(m, [a.x, a.y, bx - uy * hw, by + ux * hw, bx + uy * hw, by - ux * hw]);
              out().fills.push({ rings: [ring], pattern: false }); grow(bounds, ring);
            }
          }
        }
        const dl = sec.landingDistance ?? sec.doglegLength;   // readDwg / dxf-model.js
        if (last && e.doglegEnabled && sec.direction && dl) line([last.x, last.y, last.x + sec.direction.x * dl, last.y + sec.direction.y * dl]);
      }
      const t = cx.hasText && cx.text;
      if (t && t.label && t.location) {
        mtext({ value: t.label, height: cx.textHeight, insert: t.location, attach: t.alignment, xAxis: t.direction, lineSpacing: t.lineSpacing }, m, out, bounds);
      }
      const bc = cx.hasBlock && cx.block;
      const blk = bc && ctx.byHandle.get(bc.blockHandle ?? bc.handle);
      if (bc && blk) {
        const t = bc.matrix;   // 4 × 4, row-major
        const bm = t && t.length === 16 ? [t[0], t[4], t[1], t[5], t[3], t[7]]
          : mul(translate(bc.location.x, bc.location.y), mul(rotate(bc.rotation || 0), scale(bc.scale?.x || 1, bc.scale?.y || 1)));
        const base = blk.base || { x: 0, y: 0 };
        const sub = subCtx(ctx, mul(m, mul(bm, translate(-base.x, -base.y))), layer, color, lay, lw, null);
        sub.attrs = new Map((e.blockLabels || []).map((a) => [a.attdefHandle, a.text]));
        for (const be of blk.entities || []) emit(be, sub);
      }
      stats.prims++;
    }

    for (const e of entities) { stats.entities++; emit(e, { m: IDENTITY, layer: null, color: null, lw: null, depth: 0, blocks, byHandle: recordByHandle, imageDefs, xp: '', xlayers: null, attrs: null }); }
    return { batches, bounds, viewports, images: pics };
  }

  // ---- spaces: model first, then layouts in tab order ----
  const spaces = [];
  if (model) {
    const s = compileSpace(model.entities || []);
    spaces.push({ key: 'model', name: 'Model', kind: 'model', ...s, viewports: [] });
  }
  const s0 = spaces[0];   // model space, for the viewports' blank check
  const layouts = (db.layouts || []).filter((l) => !/^model$/i.test(l.name || '')).sort((a, b) => (a.tabOrder ?? 0) - (b.tabOrder ?? 0));
  for (const l of layouts) {
    const rec = recordByHandle.get(l.block);
    if (!rec || rec === model) continue;
    const s = compileSpace(rec.entities || []);
    const lim = l.limits;
    const paper = lim && lim.min && lim.max && lim.max.x > lim.min.x
      ? { minX: lim.min.x, minY: lim.min.y, maxX: lim.max.x, maxY: lim.max.y } : null;
    // The first viewport of every layout is the sheet itself (DXF: "paper space viewport"), not a
    // window onto the model — skip it; the rest show the model.
    const vps = s.viewports.slice(1)
      .filter((v) => v.width > 0 && v.height > 0 && v.viewHeight > 0)
      .map((v) => {
        // Model point at the viewport centre (2D plan views): view target + view centre, the centre being in display
        // coordinates — turned by the twist, so it is turned back first (as ezdxf's Viewport.get_transformation_matrix).
        const tw = v.twist || 0, c = Math.cos(tw), sn = Math.sin(tw), dx = v.viewCenter?.x || 0, dy = v.viewCenter?.y || 0;
        const vp = {
          cx: v.center.x, cy: v.center.y, w: v.width, h: v.height,
          vx: (v.viewTarget?.x || 0) + c * dx + sn * dy, vy: (v.viewTarget?.y || 0) - sn * dx + c * dy,
          viewHeight: v.viewHeight, twist: tw,
          frozen: new Set(v.frozenLayers || []),
        };
        // Nothing of the model inside the window (e.g. the drawing was moved after the sheet was set up): the view says so.
        vp.blank = !model || !s0 || !overlaps(s0.bounds, vpWindow(vp));
        return vp;
      });
    const empty = !s.batches.size && !vps.length;
    if (empty && !paper) continue;
    if (paper) grow(s.bounds, [paper.minX, paper.minY, paper.maxX, paper.maxY]);
    // Paper units: AutoCAD sheets are in inches or millimetres; a sheet wider than 100 units is millimetres.
    const paperUnit = paper && paper.maxX - paper.minX > 100 ? 'mm' : 'in';
    spaces.push({ key: 'layout:' + l.handle, name: l.name, kind: 'paper', batches: s.batches, bounds: s.bounds, paper, paperUnit, viewports: vps, images: s.images });
  }

  return {
    version: versionTag,
    release: VERSIONS[versionTag] || '',
    units: UNITS[db.header?.INSUNITS] || '',
    xrefs: xrefNames.map((name) => ({ name, loaded: xinfo.has(name.toLowerCase()) })),
    images: [...images.values()],
    layers: [...layers.values()].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })),
    spaces,
    stats,
  };
}

// ---------------------------------------------------------------------------
// Geometry

const IDENTITY = [1, 0, 0, 1, 0, 0];
const translate = (x, y) => [1, 0, 0, 1, x, y];
const scale = (sx, sy) => [sx, 0, 0, sy, 0, 0];
const rotate = (r) => { const c = Math.cos(r), s = Math.sin(r); return [c, s, -s, c, 0, 0]; };
function mul(p, q) {
  return [
    p[0] * q[0] + p[2] * q[1], p[1] * q[0] + p[3] * q[1],
    p[0] * q[2] + p[2] * q[3], p[1] * q[2] + p[3] * q[3],
    p[0] * q[4] + p[2] * q[5] + p[4], p[1] * q[4] + p[3] * q[5] + p[5],
  ];
}
/** Entities drawn with a -Z extrusion are mirrored in X (arbitrary-axis rule, plan views). */
const ocs = (m, ext) => (ext && ext.z < -0.5 ? mul(m, scale(-1, 1)) : m);
/**
 * A tilted extrusion (neither +Z nor -Z) → the object coordinate system seen from above, as an affine: the arbitrary-axis
 * rule's Ax and Ay projected on XY, and the point's OCS z moved along N. Null for +Z/-Z (`ocs` handles those).
 */
function planOcs(ext, z) {
  if (!ext) return null;
  const l = Math.hypot(ext.x || 0, ext.y || 0, ext.z || 0);
  if (l < 1e-12) return null;
  const N = [(ext.x || 0) / l, (ext.y || 0) / l, (ext.z || 0) / l];
  if (Math.abs(N[0]) < 1e-9 && Math.abs(N[1]) < 1e-9) return null;
  const Ax = unit(Math.abs(N[0]) < 1 / 64 && Math.abs(N[1]) < 1 / 64 ? cross([0, 1, 0], N) : cross([0, 0, 1], N));
  const Ay = unit(cross(N, Ax));
  return [Ax[0], Ax[1], Ay[0], Ay[1], N[0] * z, N[1] * z];
}
function tx(m, pts) {
  const out = new Float64Array(pts.length);
  for (let i = 0; i < pts.length; i += 2) {
    const x = pts[i], y = pts[i + 1];
    out[i] = m[0] * x + m[2] * y + m[4];
    out[i + 1] = m[1] * x + m[3] * y + m[5];
  }
  return out;
}

/** A viewport's window on the model: the axis-aligned box round its four corners (the model shown, turned or not). */
function vpWindow(vp) {
  const hw = vp.w / 2 * vp.viewHeight / vp.h, hh = vp.viewHeight / 2, c = Math.cos(vp.twist), sn = Math.sin(vp.twist);
  const b = emptyBounds();
  for (const [x, y] of [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]]) grow(b, [vp.vx + c * x + sn * y, vp.vy - sn * x + c * y]);
  return b;
}
const overlaps = (a, b) => a.minX <= b.maxX && b.minX <= a.maxX && a.minY <= b.maxY && b.minY <= a.maxY;

export function emptyBounds() { return { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }; }
function grow(b, pts) {
  for (let i = 0; i < pts.length; i += 2) {
    const x = pts[i], y = pts[i + 1];
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
    if (x < b.minX) b.minX = x; if (x > b.maxX) b.maxX = x;
    if (y < b.minY) b.minY = y; if (y > b.maxY) b.maxY = y;
  }
}

/** Segments for an arc: about 5° each, 8 to 128. */
function segCount(sweep) { return Math.max(8, Math.min(128, Math.ceil(Math.abs(sweep) / TAU * 72))); }

function arcPoints(cx, cy, r, a0, a1, ccw) {
  let sweep = ccw ? a1 - a0 : a0 - a1;
  while (sweep <= 0) sweep += TAU;
  if (a1 - a0 === TAU) sweep = TAU;
  const n = segCount(sweep), dir = ccw ? 1 : -1, pts = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + dir * sweep * (i / n);
    pts.push(cx + r * Math.cos(a), cy + r * Math.sin(a));
  }
  return pts;
}

function ellipsePoints(c, maj, ratio, p0, p1) {
  const mx = maj.x, my = maj.y, len = Math.hypot(mx, my), rot = Math.atan2(my, mx);
  let sweep = p1 - p0;
  while (sweep <= 0) sweep += TAU;
  const n = segCount(sweep), pts = [], cr = Math.cos(rot), sr = Math.sin(rot);
  for (let i = 0; i <= n; i++) {
    const t = p0 + sweep * (i / n), x = len * Math.cos(t), y = len * ratio * Math.sin(t);
    pts.push(c.x + x * cr - y * sr, c.y + x * sr + y * cr);
  }
  return pts;
}

/** Vertices with bulges (LWPOLYLINE, POLYLINE2D, hatch polyline paths) → points. */
function bulgePolyline(vs, closed) {
  const pts = [];
  const n = vs.length;
  for (let i = 0; i < n; i++) {
    const a = vs[i], b = vs[(i + 1) % n];
    pts.push(a.x, a.y);
    if (i === n - 1 && !closed) break;
    const bulge = a.bulge || 0;
    if (Math.abs(bulge) > 1e-9) {
      const theta = 4 * Math.atan(bulge), chord = Math.hypot(b.x - a.x, b.y - a.y);
      if (chord > 0) {
        const r = chord / (2 * Math.sin(theta / 2));
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, h = r * Math.cos(theta / 2);
        const ux = -(b.y - a.y) / chord, uy = (b.x - a.x) / chord;
        const cx = mx + ux * h, cy = my + uy * h;
        const a0 = Math.atan2(a.y - cy, a.x - cx);
        const steps = segCount(theta);
        for (let k = 1; k < steps; k++) {
          const t = a0 + theta * (k / steps);
          pts.push(cx + Math.abs(r) * Math.cos(t), cy + Math.abs(r) * Math.sin(t));
        }
      }
    }
    if (i === n - 1 && closed) pts.push(b.x, b.y);
  }
  return pts;
}

/** Fit points when present, else the B-spline evaluated from its control points (de Boor). */
function splinePoints(e) {
  if (e.fit && e.fit.length > 1) return e.fit.flatMap((p) => [p.x, p.y]);
  const cp = e.control || [], k = e.knots || [], p = e.degree || 3;
  if (cp.length < 2) return [];
  if (k.length !== cp.length + p + 1) return cp.flatMap((q) => [q.x, q.y]);
  const w = e.weights && e.weights.length === cp.length ? e.weights : null;
  const lo = k[p], hi = k[k.length - p - 1], n = Math.max(16, cp.length * 8), pts = [];
  for (let s = 0; s <= n; s++) {
    const u = s === n ? hi - 1e-9 * (hi - lo) : lo + (hi - lo) * (s / n);
    let span = p;
    while (span < cp.length - 1 && u >= k[span + 1]) span++;
    const d = [];
    for (let j = 0; j <= p; j++) {
      const q = cp[span - p + j], wt = w ? w[span - p + j] : 1;
      d.push([q.x * wt, q.y * wt, wt]);
    }
    for (let r = 1; r <= p; r++) {
      for (let j = p; j >= r; j--) {
        const i = span - p + j, den = k[i + p - r + 1] - k[i];
        const a = den === 0 ? 0 : (u - k[i]) / den;
        d[j] = [(1 - a) * d[j - 1][0] + a * d[j][0], (1 - a) * d[j - 1][1] + a * d[j][1], (1 - a) * d[j - 1][2] + a * d[j][2]];
      }
    }
    pts.push(d[p][0] / d[p][2], d[p][1] / d[p][2]);
  }
  return pts;
}

/** HATCH loops (polyline or edges: line, arc, ellipse, spline; angles in radians) → flat rings in the hatch's OCS. */
function hatchRings(e) {
  const rings = [];
  for (const loop of e.loops || []) {
    if (loop.polyline) { rings.push(bulgePolyline(loop.polyline.vertices || [], true)); continue; }
    const pts = [];
    for (const ed of loop.edges || []) {
      if (ed.type === 'line') pts.push(ed.start.x, ed.start.y, ed.end.x, ed.end.y);
      else if (ed.type === 'arc') {   // a clockwise edge keeps its angles mirrored (DXF 73 = 0)
        const s = ed.startAngle, f = ed.endAngle;
        pts.push(...(ed.ccw === false ? arcPoints(ed.center.x, ed.center.y, ed.radius, -s, -f, false) : arcPoints(ed.center.x, ed.center.y, ed.radius, s, f, true)));
      } else if (ed.type === 'ellipse') {
        const s = ed.ccw === false ? -ed.endAngle : ed.startAngle, f = ed.ccw === false ? -ed.startAngle : ed.endAngle;
        pts.push(...ellipsePoints(ed.center, ed.majorAxis, ed.ratio || 1, s, f));
      } else if (ed.type === 'spline') {
        pts.push(...splinePoints(ed));
      }
    }
    if (pts.length >= 6) rings.push(pts);
  }
  return rings;
}

// ---------------------------------------------------------------------------
// Text

const SPECIAL = { '%%c': 'ø', '%%C': 'ø', '%%d': '°', '%%D': '°', '%%p': '±', '%%P': '±', '%%%': '%' };
export function plainText(s) {
  return String(s || '')
    .replace(/%%[cCdDpP%]/g, (m) => SPECIAL[m] || '')
    .replace(/%%[uUoO]/g, '')
    .replace(/\\U\+([0-9a-fA-F]{4})/g, (m, h) => String.fromCharCode(parseInt(h, 16)));
}
/** MTEXT codes → plain lines: \P breaks, {\f…;} \H…; \C…; formatting dropped, stacked fractions as a/b. */
export function mtextLines(s) {
  let t = plainText(s)
    .replace(/\\P/g, '\n')
    .replace(/\\~/g, ' ')
    .replace(/\\S([^;]*?)[#^/]([^;]*?);/g, '$1/$2')
    .replace(/\\[ACcFfHhQqTtWwp][^;\\]*;/g, '')
    .replace(/\\[LlOoKkNn]/g, '')
    .replace(/[{}]/g, '')
    .replace(/\\\\/g, '\\');
  return t.split('\n');
}

/** TEXT / ATTRIB / ATTDEF (model fields: value, height, insert, align, hAlign, vAlign, rotation, generation). */
function text(t, m, out, bounds) {
  const s = plainText(t.value);
  if (!s.trim() || !t.height) return;
  const aligned = (t.hAlign || 0) !== 0 || (t.vAlign || 0) !== 0;
  const p = aligned && t.align && (t.align.x || t.align.y) ? t.align : t.insert;
  const ha = [0, 1, 2, 0, 1, 0][t.hAlign || 0];   // left, center, right; aligned/fit → left; middle → center
  const va = (t.hAlign === 4) ? 2 : (t.vAlign || 0); // 0 baseline, 1 bottom, 2 middle, 3 top
  place(out, bounds, m, p.x, p.y, t.height, t.rotation || 0, s, ha, va, (t.generation & 2) === 2);
}

/** MTEXT (model fields: value, height, insert, attach, xAxis, lineSpacing). */
function mtext(e, m, out, bounds) {
  const lines = mtextLines(e.value).filter((l, i, a) => l.trim() || i < a.length - 1);
  if (!lines.length || !e.height || !e.insert) return;
  const rot = e.xAxis && (e.xAxis.x || e.xAxis.y) ? Math.atan2(e.xAxis.y, e.xAxis.x) : (e.rotation || 0);
  const ap = (e.attach || 1) - 1, ha = ap % 3, row = Math.floor(ap / 3);   // row 0 top, 1 middle, 2 bottom
  const h = e.height, gap = h * 1.667 * (e.lineSpacing || 1);
  const total = gap * (lines.length - 1);
  const top = row === 0 ? -h : row === 1 ? total / 2 - h / 2 : total;   // baseline of the first line, relative to the insertion point
  const cr = Math.cos(rot), sr = Math.sin(rot);
  lines.forEach((ln, i) => {
    if (!ln.trim()) return;
    const dy = top - gap * i;
    place(out, bounds, m, e.insert.x - dy * sr, e.insert.y + dy * cr, h, rot, ln, ha, 0, false);
  });
}

/** Put one line of text into the batch, transformed by m (position, height and rotation). */
function place(out, bounds, m, x, y, h, rot, s, ha, va, mirror) {
  const X = m[0] * x + m[2] * y + m[4], Y = m[1] * x + m[3] * y + m[5];
  const sx = Math.hypot(m[0], m[1]), sy = Math.hypot(m[2], m[3]);
  const det = m[0] * m[3] - m[1] * m[2];
  const angle = Math.atan2(m[1], m[0]) + (det < 0 ? -rot : rot);
  const H = h * sy;
  out().texts.push({ x: X, y: Y, h: H, rot: angle, s, ha, va, mirror: mirror !== (det < 0) });
  // Rough extent so fit-to-drawing includes text: assume 0.6 h per character.
  const w = s.length * H * 0.6 * (sx / (sy || 1));
  grow(bounds, [X, Y, X + w * Math.cos(angle), Y + w * Math.sin(angle)]);
}

// ---------------------------------------------------------------------------
// Colour

/** A layer prints unless its plot flag is off; DEFPOINTS never prints. */
function layerPlots(l) { return l.plot !== false && !/^defpoints$/i.test(l.name || ''); }
const baseName = (p) => String(p).split(/[\\/]/).pop();

function layerColor(l) {
  const c = l.color || { index: 7 };
  if (c.rgb !== undefined) return rgbHex(c.rgb);
  return aciColor(Math.abs(c.index ?? 7));
}
function rgbHex(n) { return '#' + (n & 0xffffff).toString(16).padStart(6, '0'); }

/** AutoCAD Color Index → 'ink' for 7 (and 255-ish whites), else '#rrggbb'. */
export function aciColor(i) {
  if (i === 7 || i === 255 || i <= 0 || i > 255) return 'ink';
  const base = { 1: '#ff0000', 2: '#ffff00', 3: '#00ff00', 4: '#00ffff', 5: '#0000ff', 6: '#ff00ff', 8: '#808080', 9: '#c0c0c0' };
  if (base[i]) return base[i];
  if (i >= 250) return ['#333333', '#505050', '#696969', '#828282', '#bebebe'][i - 250];
  const hue = Math.floor((i - 10) / 10) * 15, j = (i - 10) % 10;
  const v = [1, 1, 0.8, 0.8, 0.6, 0.6, 0.5, 0.5, 0.3, 0.3][j], s = j % 2 === 0 ? 1 : 0.5;
  return hsvHex(hue, s, v);
}
function hsvHex(h, s, v) {
  const f = (n) => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); };
  return '#' + [f(5), f(3), f(1)].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
}

// Shared with dwg-compile3d.js (the 3D view tessellates the same way; it lifts these 2D points into each entity's plane).
export { arcPoints, ellipsePoints, bulgePolyline, splinePoints, hatchRings, layerColor, layerPlots, rgbHex, lwOf, planOcs };
