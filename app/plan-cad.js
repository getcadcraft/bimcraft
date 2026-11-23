/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — layer names, linetype names and file-format text: what CAD programs show, not the app's words. */
/**
 * plan-cad.js — BimCraft's drawings as DWG and DXF, at true size (SU.1994: "add DXF export of sheets and views, with layers kept
 * and text and dimensions as native entities, and DWG"). DOM-free: model-ui.js (the plan's Save as DWG or DXF), res-ui.js (the
 * drawing set's) and plan-export.js (headless, `cadcraft plot model.ifc plan.dwg`) use it; bin/test-plan-cad.mjs checks it.
 *
 *   planCad(scene, { units, ratio, kindOf })       → model     one plan: the scene the plan view and its PDF draw (model-ui.js)
 *   setCad(input, { units, planRatio, title })     → model     a drawing set's plans, elevations and sections (res-ui.js setInput)
 *   cadFile(model, format)                         → { bytes, ext, mime, report }   format 'dwg' (AutoCAD 2018) | 'dwg2013' |
 *                                                    'dwg2010' | 'dwg2007' | 'dwg2004' | 'dwg2000' | 'dxf' (DXF 2000)
 *   CAD_FORMATS · CAD_LAYERS
 *
 * What is written: the same drawing the plan PDF and the sheets draw (model-pdf.js planPdf, res-sheets.js planItems / viewItems),
 * in the model's own place, in millimetres (inches for a feet-and-inches model), one layer per kind of line (CAD_LAYERS, with
 * colour, lineweight and linetype), solid fills as solid HATCH, door swings as real arcs, text as TEXT (Arial; Arial Bold for room
 * names and grid tags) at the height it prints at on paper times the scale, and dimensions as real aligned DIMENSIONs (their
 * points, the text BimCraft shows, the unnamed *D block that draws them, and a Standard dimension style sized for that scale).
 * A view's pen overrides keep their colour (true colour), weight and dash. A set puts every plan in a row at the plans' own
 * coordinates (the first level where the model is), and the elevations and sections in a row under them, each titled.
 * Not written: pictures, the white masks under door and window symbols (a CAD file has no "white"), a crop region's clip (the
 * whole view is written), the sheets' title blocks and schedules (the set PDF has them).
 */
import { writeDwg } from './dwg/write.js';
import { modelDxf } from './plan-dxf.js';
import { layerPrimitives, colorRgb } from './wall-plan-graphics.js';
import { cutFaceItems } from './wall-section-graphics.js';
import { noteItems } from './comforts-views.js';
import { penDash } from './pen-colors.js';
import { PHASE_PLAN } from './phase-pens.js';
import { penMm, penRgb, sheetFor } from './model-pdf.js';
import { annoMm, annoPt, annoK } from './anno-scale-bim.js';
import { isMetric } from './model-units.js';

/** The formats offered: key → { version (DWG), label, ext }. 'dwg' is the default. */
export const CAD_FORMATS = {
  dwg: { version: 'AC1032', label: 'DWG (AutoCAD 2018)', ext: 'dwg' },
  dwg2013: { version: 'AC1027', label: 'DWG (AutoCAD 2013)', ext: 'dwg' },
  dwg2010: { version: 'AC1024', label: 'DWG (AutoCAD 2010)', ext: 'dwg' },
  dwg2007: { version: 'AC1021', label: 'DWG (AutoCAD 2007)', ext: 'dwg' },
  dwg2004: { version: 'AC1018', label: 'DWG (AutoCAD 2004)', ext: 'dwg' },
  dwg2000: { version: 'AC1015', label: 'DWG (AutoCAD 2000)', ext: 'dwg' },
  dxf: { version: 'AC1015', label: 'DXF (AutoCAD 2000)', ext: 'dxf' },
};

/** Layers (US National CAD Standard style names): colour (ACI), lineweight (1/100 mm), linetype. */
export const CAD_LAYERS = {
  'A-WALL': { color: 7, lw: 50, desc: 'Wall outlines' },
  'A-WALL-PATT': { color: 8, lw: 9, desc: 'Wall fills and layer hatching' },
  'A-WALL-PHAS': { color: 7, lw: 30, desc: 'Renovation phases (existing, to demolish, new)' },
  'A-CUT': { color: 7, lw: 25, desc: 'Other cut elements: columns, slabs, stairs, furniture at the cut' },
  'A-CUT-PATT': { color: 8, lw: 9, desc: 'Fills of other cut elements' },
  'A-BELOW': { color: 8, lw: 13, desc: 'Seen below the cut' },
  'A-ABOVE': { color: 8, lw: 13, lt: 'HIDDEN', desc: 'Above the cut, under the view range top' },
  'A-DOOR': { color: 7, lw: 35, desc: 'Doors and their swings' },
  'A-GLAZ': { color: 7, lw: 35, desc: 'Windows' },
  'A-ROOF': { color: 7, lw: 18, desc: 'Roof edges and ridges' },
  'A-UNDR': { color: 9, lw: 13, desc: 'Another level shown under this one' },
  'A-DETL': { color: 7, lw: 25, desc: 'Drafting lines drawn in the view' },
  'A-DETL-PATT': { color: 8, lw: 9, desc: 'Drafting fills and hatches' },
  'A-GRID': { color: 8, lw: 13, lt: 'CENTER', desc: 'Grid lines' },
  'A-GRID-IDEN': { color: 7, lw: 25, desc: 'Grid bubbles and their tags' },
  'A-AREA-IDEN': { color: 7, lw: 18, desc: 'Room names, numbers and areas' },
  'A-ANNO-DIMS': { color: 7, lw: 13, desc: 'Dimensions' },
  'A-ANNO-TEXT': { color: 7, lw: 18, desc: 'Notes and labels' },
  'A-ANNO-SYMB': { color: 7, lw: 13, desc: 'Level marks, tags and other symbols on elevations and sections' },
  'A-ELEV': { color: 7, lw: 18, desc: 'Elevation and section lines seen beyond the cut' },
  'A-ELEV-GRND': { color: 7, lw: 60, desc: 'The ground line' },
  'A-SECT': { color: 7, lw: 50, desc: 'Cut in a section' },
  'A-SECT-PATT': { color: 8, lw: 9, desc: 'Fills and hatches of what a section cuts' },
  'A-VIEW-TITL': { color: 7, lw: 35, desc: 'View titles in a drawing set' },
};
/** A dash on paper (mm, model-pdf.js / pen-colors.js) → a linetype name; others get CC_DASH_n. */
const KNOWN_DASH = { '2,1.2': 'HIDDEN', '5,1,0.6,1': 'CENTER', '1.5,1': 'DASHED', '2.5,1.2': 'DASHED2', '0.5,0.9': 'DOT', '1.8,1': 'DEMOLISH', '1.2,0.6': 'MEMBRANE', '4,0.8,0.6,0.8': 'LEVEL' };
const LT_OF_LAYER = { HIDDEN: [2, 1.2], CENTER: [5, 1, 0.6, 1] };
const fin = (...v) => v.every(Number.isFinite);
const grayRgb = (g) => { const v = Math.max(0, Math.min(255, Math.round(g * 255))); return (v << 16) | (v << 8) | v; };
const rgbInt = ([r, g, b]) => (Math.round(r * 255) << 16) | (Math.round(g * 255) << 8) | Math.round(b * 255);
const hexInt = (s) => (/^#[0-9a-f]{6}$/i.test(String(s)) ? parseInt(String(s).slice(1), 16) : null);
const lwOf = (mm) => Math.max(0, Math.round(mm * 100));
const TITLE_GAP = 12;   // paper mm under a view for its title in a set

/** The model being built: entities in drawing units (mm, or inches when `units` is feet and inches), layers, linetypes, *D blocks. */
class CadOut {
  constructor({ units = 'mm', ratio = 100 } = {}) {
    this.metric = isMetric(units);
    this.u = this.metric ? 1 : 1 / 25.4;
    this.ratio = ratio;   // the scale annotations are sized for (paper mm × ratio = model mm), and LTSCALE
    this.view = ratio;    // the current view's scale (a set's elevations may differ from its plans)
    this.ox = 0; this.oy = 0;
    this.ents = []; this.blocks = []; this.layers = new Set(); this.lts = new Map(); this.nDim = 0; this.counts = {};
    this.bb = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
    this.capPerPt = annoMm('text') / annoPt('text');   // a font size in points → cap height on paper (mm)
  }
  count(k, n = 1) { this.counts[k] = (this.counts[k] || 0) + n; }
  /** model mm (the view's own frame) → drawing units */
  pt(p) {
    const x = (p[0] + this.ox) * this.u, y = (p[1] + this.oy) * this.u;
    if (x < this.bb.x0) this.bb.x0 = x; if (x > this.bb.x1) this.bb.x1 = x; if (y < this.bb.y0) this.bb.y0 = y; if (y > this.bb.y1) this.bb.y1 = y;
    return { x, y, z: 0 };
  }
  /** paper mm at this view's scale → drawing units of length */
  paper(mm) { return mm * this.view * this.u; }
  lt(dash) {
    if (!dash?.length) return undefined;
    const key = dash.map((v) => Math.round(v * 100) / 100).join(',');
    if (!this.lts.has(key)) this.lts.set(key, KNOWN_DASH[key] || 'CC_DASH_' + (this.lts.size + 1));
    return this.lts.get(key);
  }
  base(layer, o = {}) {
    this.layers.add(layer);
    const e = { layer, color: o.rgb != null ? { rgb: o.rgb } : o.index != null ? { index: o.index } : { index: 256 }, lineweight: o.lw != null ? lwOf(o.lw) : -1 };
    const lt = this.lt(o.dash);
    if (lt) e.linetype = lt;
    if (this.view !== this.ratio) e.ltscale = this.view / this.ratio;
    return e;
  }
  push(e) { this.ents.push(e); this.count(e.type); return e; }
  line(a, b, layer, o) { if (!fin(a?.[0], a?.[1], b?.[0], b?.[1])) return; this.push({ ...this.base(layer, o), type: 'LINE', start: this.pt(a), end: this.pt(b) }); }
  segs(flat, layer, o) { for (let i = 0; i + 3 < (flat?.length || 0); i += 4) this.line([flat[i], flat[i + 1]], [flat[i + 2], flat[i + 3]], layer, o); }
  poly(pts, closed, layer, o) {
    const p = (pts || []).filter((q) => fin(q?.[0], q?.[1]));
    if (p.length > 2 && closed && Math.hypot(p[0][0] - p[p.length - 1][0], p[0][1] - p[p.length - 1][1]) < 1e-6) p.pop();
    if (p.length < 2) return;
    if (p.length === 2 && !closed) return this.line(p[0], p[1], layer, o);
    this.push({ ...this.base(layer, o), type: 'LWPOLYLINE', vertices: p.map((q) => { const v = this.pt(q); return { x: v.x, y: v.y, bulge: 0 }; }), closed: !!closed, elevation: 0 });
  }
  arc(c, r, a0, a1, layer, o) {
    if (!fin(c?.[0], c?.[1], r, a0, a1) || !(r > 0)) return;
    const base = { ...this.base(layer, o), center: this.pt(c), radius: r * this.u };
    if (Math.abs(a1 - a0) >= 2 * Math.PI - 1e-9) return this.push({ ...base, type: 'CIRCLE' });
    const [s, e] = a1 >= a0 ? [a0, a1] : [a1, a0];   // DXF arcs run counter-clockwise from start to end: the same points either way
    this.push({ ...base, type: 'ARC', startAngle: s, endAngle: e });
  }
  circle(c, r, layer, o) { if (fin(c?.[0], c?.[1], r) && r > 0) this.push({ ...this.base(layer, o), type: 'CIRCLE', center: this.pt(c), radius: r * this.u }); }
  /** text: hPaper = its cap height on paper (mm); align left | center | right; va baseline | middle */
  text(s, p, hPaper, layer, { rot = 0, align = 'center', va = 'baseline', bold = false, rgb = null } = {}) {
    const value = String(s ?? '');
    if (!value.trim() || !fin(p?.[0], p?.[1]) || !(hPaper > 0)) return;
    const at = this.pt(p), ha = align === 'left' ? 0 : align === 'right' ? 2 : 1, v = va === 'middle' ? 2 : 0;
    this.push({ ...this.base(layer, rgb != null ? { rgb } : {}), type: 'TEXT', insert: at, align: ha || v ? at : undefined, hAlign: ha, vAlign: v,
      height: this.paper(hPaper), rotation: rot || 0, widthFactor: 1, value, style: bold ? 'Bold' : 'Standard' });
  }
  hatch(loops, layer, o) {
    const ls = (loops || []).map((l) => (l || []).filter((q) => fin(q?.[0], q?.[1]))).filter((l) => l.length >= 3);
    if (!ls.length) return;
    this.push({ ...this.base(layer, o), type: 'HATCH', solid: true, pattern: 'SOLID', style: 0, patternType: 1,
      loops: ls.map((l) => ({ flags: 1, polyline: { vertices: l.map((q) => { const v = this.pt(q); return { x: v.x, y: v.y }; }), closed: true } })) });
  }
  /**
   * An aligned dimension: a, b the measured points (model mm), off how far the dimension line sits from them (model mm, to the
   * left of a→b), witnesses the points its extension lines start from (default a, b), text what BimCraft shows, hPaper its height.
   * Written as DIMENSION + its *D block, drawn as the plan PDF draws it: line, extension lines (0.8 mm gap, 1.5 mm past), 45°
   * ticks, the text 0.8 mm above the line.
   */
  dim({ a, b, off = 0, witnesses = null, text = '' }, layer, hPaper, o = {}) {
    if (!fin(a?.[0], a?.[1], b?.[0], b?.[1])) return;
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < 1) return;
    const u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], n = [-u[1], u[0]];
    const A = [a[0] + n[0] * off, a[1] + n[1] * off], B = [b[0] + n[0] * off, b[1] + n[1] * off];
    const mm = (v) => v * this.view;   // paper mm → model mm at this view's scale
    const name = '*D' + ++this.nDim;
    const own = { layer: '0', color: { index: 0 }, lineweight: -2 };
    const be = [];
    const L2 = (p, q) => be.push({ ...own, type: 'LINE', start: this.pt(p), end: this.pt(q) });
    L2(A, B);
    for (const [i, q] of [A, B].entries()) {
      const src = witnesses?.[i] || (i ? b : a), d = Math.hypot(q[0] - src[0], q[1] - src[1]);
      if (d < 0.001) continue;
      const dir = [(q[0] - src[0]) / d, (q[1] - src[1]) / d], gap = Math.min(mm(0.8), d / 2);
      L2([src[0] + dir[0] * gap, src[1] + dir[1] * gap], [q[0] + dir[0] * mm(1.5), q[1] + dir[1] * mm(1.5)]);
    }
    const tk = [(u[0] - n[0]) * mm(1), (u[1] - n[1]) * mm(1)];
    for (const q of [A, B]) L2([q[0] - tk[0], q[1] - tk[1]], [q[0] + tk[0], q[1] + tk[1]]);
    let rot = Math.atan2(u[1], u[0]);
    if (rot > Math.PI / 2 + 1e-9 || rot <= -Math.PI / 2) rot += Math.PI;
    const up = [-Math.sin(rot), Math.cos(rot)], mid = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
    const base = [mid[0] + up[0] * mm(0.8), mid[1] + up[1] * mm(0.8)], middle = [base[0] + up[0] * mm(hPaper / 2), base[1] + up[1] * mm(hPaper / 2)];
    const label = String(text ?? '');
    if (label.trim()) { const at = this.pt(base); be.push({ ...own, type: 'TEXT', insert: at, align: at, hAlign: 1, vAlign: 0, height: this.paper(hPaper), rotation: rot, widthFactor: 1, value: label, style: 'Standard' }); }
    this.blocks.push({ name, base: { x: 0, y: 0, z: 0 }, entities: be });
    this.push({ ...this.base(layer, o), type: 'DIMENSION', dimType: 1, flags: 1 | 32 | 128, block: name, style: 'Standard', attach: 5,
      defPoint: this.pt(B), textMid: this.pt(middle), xline1: this.pt(a), xline2: this.pt(b), measurement: L * this.u, text: label, textRotation: rot });
  }
  /** a sheet item (res-sheets.js: line / fill / text in paper mm, P = p → p / ratio) → entities on `layer` (text on `textLayer`) */
  item(it, layer, textLayer = layer) {
    const back = (q) => [q[0] * this.view, q[1] * this.view];
    if (it.t === 'line') {
      const pts = it.pts.map(back), closed = pts.length > 3 && Math.hypot(pts[0][0] - pts[pts.length - 1][0], pts[0][1] - pts[pts.length - 1][1]) < 1e-6;
      return this.poly(pts, closed, layer, { lw: it.w, dash: it.dash, rgb: hexInt(it.color) ?? (it.g > 0 ? grayRgb(it.g) : null) });
    }
    if (it.t === 'fill') return it.g >= 0.999 && !it.color ? this.count('white') : this.hatch(it.polys.map((p) => p.map(back)), layer, { rgb: hexInt(it.color) ?? grayRgb(it.g ?? 0) });
    if (it.t === 'text') return this.text(it.s, back([it.x, it.y]), (it.size || annoPt('text')) * this.capPerPt, textLayer, { rot: it.rot || 0, align: it.align || 'center', bold: !!it.bold, rgb: it.g > 0 ? grayRgb(it.g) : null });
    if (it.t === 'image') return this.count('pictures');
  }
  /** the grid bubble of model-pdf.js: a circle of 3.5 mm (paper) beyond the end, its tag inside */
  bubble(c, tag) {
    const r = 3.5 * annoK('grid');
    this.circle(c, this.view * r, 'A-GRID-IDEN');
    this.text(tag, c, annoMm('grid'), 'A-GRID-IDEN', { va: 'middle', bold: true });
  }
  /** → the cc-dwg model */
  model({ title = '' } = {}) {
    const lts = [...this.lts.entries()].map(([key, name]) => {
      const d = key.split(',').map(Number), elements = d.map((v, i) => ({ length: i % 2 ? -v : v }));
      return { name, description: name, patternLength: d.reduce((s, v) => s + v, 0), elements };
    });
    for (const [name, d] of Object.entries(LT_OF_LAYER)) if (![...this.lts.values()].includes(name) && [...this.layers].some((l) => CAD_LAYERS[l]?.lt === name)) lts.push({ name, description: name, patternLength: d.reduce((s, v) => s + v, 0), elements: d.map((v, i) => ({ length: i % 2 ? -v : v })) });
    const layers = [{ name: '0', color: { index: 7 }, lineweight: -3, plot: true }, ...[...this.layers].filter((n) => n !== '0').sort().map((name) => {
      const L = CAD_LAYERS[name] || { color: 7, lw: 25 };
      return { name, color: { index: L.color }, lineweight: L.lw, linetype: L.lt || 'Continuous', plot: true };
    })];
    const R = this.ratio * this.u;
    const ok = Number.isFinite(this.bb.x0);
    return {
      version: 'AC1032', codepage: 'ANSI_1252',
      header: {
        INSUNITS: this.metric ? 4 : 1, MEASUREMENT: this.metric ? 1 : 0, LUNITS: this.metric ? 2 : 4, LUPREC: this.metric ? 0 : 4, LTSCALE: R,
        ...(ok ? { EXTMIN: { x: this.bb.x0, y: this.bb.y0, z: 0 }, EXTMAX: { x: this.bb.x1, y: this.bb.y1, z: 0 } } : {}),
        ...(title ? { PROJECTNAME: title } : {}),
      },
      tables: {
        layers, linetypes: lts,
        styles: [{ name: 'Standard', font: 'arial.ttf', height: 0, widthFactor: 1 }, { name: 'Bold', font: 'arialbd.ttf', height: 0, widthFactor: 1 }],
        dimstyles: [{ name: 'Standard', vars: { DIMSCALE: R, DIMTXT: annoMm('dimension'), DIMASZ: 1, DIMTSZ: 1, DIMEXO: 0.8, DIMEXE: 1.5, DIMGAP: 0.8, DIMTAD: 1, DIMTIH: 0, DIMTOH: 0, DIMLUNIT: this.metric ? 2 : 4, DIMDEC: this.metric ? 0 : 4, DIMZIN: this.metric ? 8 : 3 } }],
      },
      blocks: [{ name: '*Model_Space', entities: this.ents }, { name: '*Paper_Space', entities: [] }, ...this.blocks],
      layouts: [], objects: [],
      report: { counts: this.counts },
    };
  }
}

/** One plan into `out`, as model-pdf.js planPdf draws it. kindOf(guid) → 'door' | 'window' | null names a symbol's layer. */
function drawPlan(out, scene, { kindOf = null } = {}) {
  const sc = scene || {};
  const pen = (p, w0) => (p ? { lw: p.w ? penMm(p.w) : w0, rgb: p.color ? rgbInt(penRgb(p.color)) : null, dash: penDash(p.dash) } : { lw: w0 });
  if (sc.underlay?.segs?.length) out.segs(sc.underlay.segs, 'A-UNDR', { lw: 0.13 });
  for (const x of sc.grids || []) out.line(x.a, x.b, 'A-GRID');
  for (const b of sc.below || []) out.segs(b.segs, 'A-BELOW');
  for (const b of sc.above || []) out.segs(b.segs, 'A-ABOVE');
  for (const c of sc.cut || []) {
    if (c.loops?.length) out.hatch(c.loops.map((l) => { const p = []; for (let i = 0; i + 1 < l.length; i += 2) p.push([l[i], l[i + 1]]); return p; }), 'A-CUT-PATT', { rgb: grayRgb(0.75) });
    out.segs(c.segs, 'A-CUT', c.pen ? pen(c.pen, 0.25) : {});
  }
  for (const w of sc.walls || []) {
    if (w.layers) for (const it of layerPrimitives(w)) {
      if (it.t === 'fill') out.hatch(it.polys, 'A-WALL-PATT', { rgb: rgbInt(colorRgb(it.color)) });
      else out.poly(it.pts, false, 'A-WALL-PATT', { lw: it.w, dash: it.dash, rgb: rgbInt(colorRgb(it.color)) });
    }
    for (const p of w.pieces || [w.poly]) {
      if (!p?.length) continue;
      if (!w.layers) out.hatch([p], 'A-WALL-PATT', { rgb: grayRgb(0.55) });
      if (!sc.wallEdges) out.poly(p, true, 'A-WALL');
    }
  }
  for (const p of sc.wallEdges || []) out.poly(p, p.length > 2, 'A-WALL');
  for (const w of sc.walls || []) {
    const ph = w.phase && PHASE_PLAN[w.phase];
    if (ph) for (const p of w.pieces || [w.poly]) if (p?.length) out.poly(p, true, 'A-WALL-PHAS', { lw: ph.mm, dash: ph.mmDash, rgb: rgbInt(ph.rgb) });
    if (w.pen) for (const p of w.pieces || [w.poly]) if (p?.length) out.poly(p, true, 'A-WALL', pen(w.pen, 0.5));
  }
  for (const s of sc.symbols || []) {
    const k = s.guid && kindOf ? kindOf(s.guid) : null;
    const layer = k === 'door' ? 'A-DOOR' : k === 'window' ? 'A-GLAZ' : s.guid ? 'A-DOOR' : 'A-ROOF';
    const o = { lw: s.lw ? penMm(s.lw) : undefined, rgb: s.color ? rgbInt(penRgb(s.color)) : null };
    if (s.fill?.length) out.count('white', s.fill.length);
    for (const l of s.lines || []) out.segs(l, layer, o);
    for (const a of s.arcs || []) out.arc(a.c, a.r, a.a0, a.a1, layer, { lw: 0.18 });
    for (const l of s.thin || []) out.segs(l, layer, { lw: 0.18 });
    for (const l of s.dashed || []) out.segs(l, layer, { lw: 0.18, dash: [1.5, 1] });
  }
  for (const d of sc.drafting || []) {
    const rgb = d.pen?.color ? rgbInt(penRgb(d.pen.color)) : null;
    if (d.solid && d.rings) out.hatch(d.rings, 'A-DETL-PATT', { rgb: rgb ?? grayRgb(0.6) });
    if (d.segs?.length) out.segs(d.segs, d.kind === 'hatch' ? 'A-DETL-PATT' : 'A-DETL', { lw: 0.13, rgb });
    for (const l of d.lines || []) if (l.length > 1) out.poly(l, !!d.closed, d.kind === 'hatch' ? 'A-DETL-PATT' : 'A-DETL', { lw: d.pen?.w ? penMm(d.pen.w) : d.kind === 'hatch' ? 0.18 : 0.25, rgb, dash: penDash(d.pen?.dash) });
  }
  for (const lb of sc.labels || []) out.text(lb.text, lb.p, annoMm('text'), 'A-ANNO-TEXT', { rot: (lb.rot || 0) * Math.PI / 180 });
  for (const d of sc.dims || []) {
    // offMm: paper mm; offPx: a set distance on screen, about 0.3 mm of paper each, as res-sheets.js planItems prints it (grid spacing dimensions)
    const off = d.offMm !== undefined ? d.offMm * out.view : d.offPx !== undefined ? d.offPx * 0.3 * out.view : d.off || 0;
    out.dim({ a: d.a, b: d.b, off, witnesses: d.witnesses, text: d.text }, 'A-ANNO-DIMS', annoMm('dimension'), d.pen?.color ? { rgb: rgbInt(penRgb(d.pen.color)) } : {});
  }
  for (const r of sc.rooms || []) {
    if (!r.at || !r.label) continue;
    r.label.forEach((s, i) => out.text(s, [r.at[0], r.at[1] - out.view * (i - (r.label.length - 1) / 2) * 3.4 * annoK('room')], i ? annoMm('tag') : annoMm('room'), 'A-AREA-IDEN', { bold: !i }));
  }
  for (const x of sc.grids || []) {
    if (x.bubbles === 'none' || !x.tag) continue;
    const L = Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1]) || 1, u = [(x.b[0] - x.a[0]) / L, (x.b[1] - x.a[1]) / L], R = out.view * 3.5 * annoK('grid');
    if (x.bubbles !== 'end') out.bubble([x.a[0] - u[0] * R, x.a[1] - u[1] * R], x.tag);
    if (x.bubbles !== 'start') out.bubble([x.b[0] + u[0] * R, x.b[1] + u[1] * R], x.tag);
  }
  if (sc.crop) out.count('crop');
}

/** One elevation or section view (res-views.js projectView + notes) into `out`, as res-sheets.js viewItems draws it. */
function drawView(out, view) {
  const k = 1 / out.view, P = (p) => [p[0] * k, p[1] * k];
  for (const l of view.lines || []) out.line([l[0], l[1]], [l[2], l[3]], 'A-ELEV');
  for (const c of view.cuts || []) for (const it of cutFaceItems(c, P, out.view)) out.item(it, it.t === 'fill' || (it.w ?? 0.5) < 0.3 ? 'A-SECT-PATT' : 'A-SECT');
  const b = view.bounds;
  if (b) for (const g of view.grids || []) {
    if (g.x < b.x0 - 1 || g.x > b.x1 + 1) continue;
    const hi = [g.x, b.y1 + 600];
    out.line([g.x, b.y0 - 300], hi, 'A-GRID');
    if (g.tag) out.bubble([hi[0], hi[1] + out.view * 3.5 * annoK('grid')], g.tag);
  }
  const groundY = view.groundY ?? b?.y0;
  if (b && !view.ground && groundY >= b.y0 && groundY <= b.y1) out.line([b.x0 - 450, groundY], [b.x1 + 450, groundY], 'A-ELEV-GRND');
  const notes = view.notes || [];
  for (const n of notes) if (n.t === 'dim') out.dim({ a: n.a, b: n.b, off: (n.off || 0) * out.view, text: n.text }, 'A-ANNO-DIMS', annoMm('dimension'));
  for (const it of noteItems(notes.filter((n) => n.t !== 'dim'), P, k)) out.item(it, 'A-ANNO-SYMB', 'A-ANNO-TEXT');
  if (view.images?.length) out.count('pictures', view.images.length);
}

/** One plan as a model. ratio: the scale its annotation is sized for (the plan PDF's: model-pdf.js sheetFor). */
export function planCad(scene, { units = 'mm', ratio = null, kindOf = null, paper = null } = {}) {
  const r = ratio || sheetFor(scene, { paper: paper || (isMetric(units) ? 'a4' : 'letter'), units }).sc[0];
  const out = new CadOut({ units, ratio: r });
  drawPlan(out, scene, { kindOf });
  return out.model();
}

/**
 * A drawing set as one model: input = res-ui.js setInput() { plans: [{ title, scene }], elevations, sections: [{ title, view }] }.
 * The plans in a row, each at the plans' own coordinates moved right by the widest plan and a gap (so the first is where the model
 * is and grid lines line up across levels); the elevations and sections in a row under them; a title under each view.
 */
export function setCad(input, { units = 'mm', planRatio = null, viewRatio = null, kindOf = null } = {}) {
  const metric = isMetric(units);
  const plans = (input.plans || []).filter((p) => p.scene);
  const ratioOf = (scene) => scene.scale > 0 ? scene.scale : planRatio || (metric ? 100 : 96);
  const R = plans.length ? ratioOf(plans[0].scene) : planRatio || (metric ? 100 : 96);
  const out = new CadOut({ units, ratio: R });
  const boxes = plans.map((p) => sheetFor(p.scene, { units }).bb);
  const X0 = Math.min(...boxes.map((b) => b.x0), 0), X1 = Math.max(...boxes.map((b) => b.x1), 0);
  const Y0 = Math.min(...boxes.map((b) => b.y0), 0);
  const gap = Math.max(3000, (X1 - X0) * 0.15);
  plans.forEach((p, i) => {
    out.view = ratioOf(p.scene);
    out.ox = i * (X1 - X0 + gap); out.oy = 0;
    drawPlan(out, p.scene, { kindOf });
    const bb = boxes[i];
    out.text(p.title, [bb.x0, bb.y0 - out.view * TITLE_GAP], annoMm('title'), 'A-VIEW-TITL', { align: 'left', bold: true });
  });
  const views = [...(input.elevations || []), ...(input.sections || [])].filter((v) => v.view?.bounds);
  out.count('views-skipped', [...(input.elevations || []), ...(input.sections || [])].length - views.length);
  let x = X0, top = Y0 - gap - (plans.length ? R * TITLE_GAP * 2 : 0);
  for (const v of views) {
    const b = v.view.bounds;
    out.view = v.view.scale > 0 ? v.view.scale : viewRatio || (metric ? 100 : 96);
    out.ox = x - b.x0; out.oy = top - b.y1;
    drawView(out, v.view);
    out.text(v.title, [b.x0, b.y0 - out.view * TITLE_GAP], annoMm('title'), 'A-VIEW-TITL', { align: 'left', bold: true });
    x += (b.x1 - b.x0) + gap;
  }
  out.view = R; out.ox = 0; out.oy = 0;
  return out.model();
}

/** The file. report.counts: entities by type, + white (masks left out), pictures, crop, views-skipped; report.notes from the DWG writer. */
export function cadFile(model, format = 'dwg') {
  const F = CAD_FORMATS[format] || CAD_FORMATS.dwg;
  const counts = model.report?.counts || {};
  if (F.ext === 'dxf') {
    const r = modelDxf(model);
    return { bytes: new TextEncoder().encode(r.text), ext: 'dxf', mime: 'image/vnd.dxf', report: { counts, notes: [] } };
  }
  const r = writeDwg({ ...model, version: F.version }, { version: F.version });
  return { bytes: r.bytes, ext: 'dwg', mime: 'image/vnd.dwg', report: { counts, notes: r.report?.notes || [], skipped: r.report?.skipped || 0 } };
}
