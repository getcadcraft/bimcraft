/* SPDX-License-Identifier: Apache-2.0 */
import { layerPrimitives, colorRgb } from './wall-plan-graphics.js';
import { PHASE_PLAN } from './phase-pens.js';   // 0.8 EG.59
import { dimensionFootprint } from './dimension-geometry.js';
import * as PDF from './picture-pdf.js';   // 0.8 D8.8 round 3: image XObjects
/**
 * model-pdf.js — the plan of a level as a vector PDF (0.5 part 3, BM.7). No DOM, no library: bin/test-bimcraft.mjs --model
 * writes one and checks it (and with poppler's pdfinfo / pdftotext when they are installed).
 *
 *   planPdf(scene, { title, lines, paper, units, scale }) → { bytes: Uint8Array, scale: { label, ratio }, missing }
 *     scene    what the plan view draws (model-ui.js: walls, symbols, cut, below, rooms, dims, grids; plan mm, y up)
 *     title    the drawing's title (the level), lines: more lines under it (building, date) — printed in the title strip
 *     paper    'letter' | 'a4' | 'tabloid' | 'a3', landscape; units 'ftin' | 'mm' picks the scales tried
 *     scale    a ratio to use (48 = 1/4" = 1'-0"), else the largest standard scale the plan fits at
 *
 * 0.6 DC.117: scene.crop [x0, y0, x1, y1] (a view's crop region) is the drawing's extent and clips it; scene.underlay { segs }
 * (another level) is drawn first in light grey; scene.drafting (drafting.js draftingItem: lines, hatch strokes, solid fills) is drawn
 * over the building, under the dimensions.
 * Drawn as on screen, in black on white: walls filled grey with a heavy outline, other cut elements filled lighter, what
 * lies below the cut in thin lines, doors and windows (arcs as short lines), room names and areas, dimensions with ticks.
 * 0.8 D8.8 (round 3): opts.images [{ m (picture.js matrix: pixels → plan mm), w, h (the picture's own pixels), opacity, image }] are drawn FIRST, under everything, at their
 * scale / turn / opacity, clipped to the drawing area of the sheet (the title strip stays clear). `image` is picture-pdf.js's { kind: 'jpeg', bytes, w, h, comps } (DCTDecode as it is)
 * or { kind: 'flate', w, h, rgb (zlib), alpha (zlib | null) } (FlateDecode + /SMask); picture-ui.js pdfImages makes them (≤ 200 dpi on the sheet). Hidden pictures are not passed.
 * Text is Helvetica in WinAnsiEncoding (characters outside it print as "?" and are counted in `missing`).
 */
import { isMetric } from './model-units.js';
const PAPER = { letter: [279.4, 215.9], a4: [297, 210], tabloid: [431.8, 279.4], a3: [420, 297] };
const PT = 72 / 25.4;
/** Standard scales tried, largest first: architectural (ft-in) or metric. label is drawn in the title strip. */
const SCALES = {
  ftin: [[16, '3/4" = 1\'-0"'], [24, '1/2" = 1\'-0"'], [32, '3/8" = 1\'-0"'], [48, '1/4" = 1\'-0"'], [64, '3/16" = 1\'-0"'], [96, '1/8" = 1\'-0"'], [192, '1/16" = 1\'-0"'], [384, '1/32" = 1\'-0"']],   // i18n-ignore: drawing scales
  mm: [[20, '1:20'], [25, '1:25'], [50, '1:50'], [100, '1:100'], [200, '1:200'], [500, '1:500'], [1000, '1:1000']],   // i18n-ignore: drawing scales
};
// Helvetica advance widths (1/1000 em), characters 32–126 (the standard AFM)
const HW = [278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584];
const width = (s, size) => { let w = 0; for (const ch of String(s)) { const c = ch.charCodeAt(0); w += c >= 32 && c <= 126 ? HW[c - 32] : 556; } return w / 1000 * size; };

/** Text as a PDF literal in WinAnsi (Latin-1 + the usual symbols); others → "?". */
function lit(s) {
  const map = { '²': 0xb2, '³': 0xb3, '°': 0xb0, '×': 0xd7, '—': 0x97, '–': 0x96, '’': 0x92, '“': 0x93, '”': 0x94, '…': 0x85 };
  let out = '', missing = 0;
  for (const ch of String(s)) {
    let c = map[ch] ?? ch.codePointAt(0);
    if (c > 0xff || (c >= 0x7f && c < 0xa0 && map[ch] === undefined) || c < 0x20) { c = 0x3f; missing++; }
    out += c === 0x28 || c === 0x29 || c === 0x5c ? '\\' + String.fromCharCode(c) : c >= 0x20 && c < 0x7f ? String.fromCharCode(c) : '\\' + c.toString(8).padStart(3, '0');
  }
  return { s: '(' + out + ')', missing };
}
const n = (v) => { const s = (Math.abs(v) < 5e-5 ? 0 : v).toFixed(3); return s.replace(/\.?0+$/, '') || '0'; };

// Vector coordinates retain sub-0.005 mm model precision at supported drawing scales.
const coord = v => String(Number(v.toFixed(6)));

/** A pen's screen weight (px, pens.js) on paper (mm): the default 1.75 px wall pen is 0.5 mm. */
export const penMm = (px) => Math.max(0.1, Math.min(2, px * 0.5 / 1.75));
const PEN_RGB = { '--ink': [0, 0, 0], '--ink-2': [0.3, 0.3, 0.3], '--layer-red': [0.702, 0.071, 0.18], '--layer-blue': [0.118, 0.282, 0.784], '--layer-orange': [0.659, 0.29, 0], '--layer-magenta': [0.604, 0.122, 0.525], '--layer-ochre': [0.541, 0.384, 0], '--layer-green': [0.09, 0.439, 0.227], '--layer-violet': [0.357, 0.235, 0.769], '--layer-cyan': [0, 0.439, 0.494] };
/** A pen colour token on paper (the paper theme's values; no token = black). */
export const penRgb = (tok) => PEN_RGB[tok] || [0, 0, 0];

/** The sheet and the scale a plan prints at: { PW, PH, margin, strip, bb, W, H, room, sc: [ratio, label] }. */
export function sheetFor(scene, { paper = 'letter', units = 'ftin', scale = null } = {}) {
  const [PW, PH] = PAPER[paper] || PAPER.letter;
  const margin = 12, strip = 16;
  const bb = bounds(scene);
  const W = Math.max(1, bb.x1 - bb.x0), H = Math.max(1, bb.y1 - bb.y0);
  const room = [PW - 2 * margin, PH - 2 * margin - strip];
  const list = SCALES[isMetric(units) ? 'mm' : 'ftin'];
  let sc = scale ? list.find((x) => x[0] === scale) || [scale, '1:' + scale] : list.find(([r]) => W / r <= room[0] && H / r <= room[1]);   // i18n-ignore: a scale ratio
  if (!sc) { const r = Math.ceil(Math.max(W / room[0], H / room[1])); sc = [r, '1:' + r]; }   // i18n-ignore: a scale ratio
  return { PW, PH, margin, strip, bb, W, H, room, sc };
}

export function planPdf(scene, { title = '', lines = [], paper = 'letter', units = 'ftin', scale = null, images = [] } = {}) {
  const { PW, PH, margin, strip, bb, W, H, room, sc } = sheetFor(scene, { paper, units, scale });
  const k = 1 / sc[0];   // plan mm → paper mm
  const ox = margin + (room[0] - W * k) / 2 - bb.x0 * k, oy = margin + strip + (room[1] - H * k) / 2 - bb.y0 * k;
  const P = ([x, y]) => [ox + x * k, oy + y * k];
  const ops = ['1 J 1 j'];
  let missing = 0;
  const pen = (w, gray = 0, dash = null) => ops.push(n(w * PT) + ' w ' + n(gray) + ' G ' + (dash ? '[' + dash.map((d) => n(d * PT)).join(' ') + '] 0 d' : '[] 0 d'));
  const path = (pts, close) => { pts.forEach((p, i) => { const q = P(p); ops.push(coord(q[0] * PT) + ' ' + coord(q[1] * PT) + (i ? ' l' : ' m')); }); if (close) ops.push('h'); };
  const seg = (a) => { for (let i = 0; i < a.length; i += 4) { path([[a[i], a[i + 1]], [a[i + 2], a[i + 3]]]); } };
  const text = (s, x, y, size, { align = 'center', rot = 0, bold = false, gray = 0 } = {}) => {
    const l = lit(s); missing += l.missing;
    const w = width(s, size), dx = align === 'center' ? -w / 2 : align === 'right' ? -w : 0;
    const c = Math.cos(rot), sn = Math.sin(rot);
    const tx = x * PT + (dx * c) , ty = y * PT + (dx * sn);
    ops.push('BT /' + (bold ? 'F2' : 'F1') + ' ' + n(size) + ' Tf ' + n(gray) + ' g ' + [c, sn, -sn, c, tx, ty].map(n).join(' ') + ' Tm ' + l.s + ' Tj ET');   // i18n-ignore: PDF text operators
  };
  // 0.6 DC.117: the crop region clips everything up to the title strip
  if (scene.crop) { const a = P([scene.crop[0], scene.crop[1]]), b = P([scene.crop[2], scene.crop[3]]); ops.push('q ' + [a[0], a[1], b[0] - a[0], b[1] - a[1]].map((v) => n(v * PT)).join(' ') + ' re W n'); }   // i18n-ignore: PDF operators
  // 0.8 D8.8: pictures under everything, clipped to the drawing area (never over the title strip)
  const xobj = [];   // { name, dict, data }[] the page resources need
  if (images.length) {
    ops.push('q ' + [margin, margin + strip, PW - 2 * margin, PH - 2 * margin - strip].map((v) => n(v * PT)).join(' ') + ' re W n');   // i18n-ignore: PDF operators
    images.forEach((it, i) => {
      const u = PDF.unitMatrix(it.m, it.w, it.h);
      const cm = [u[0] * k * PT, u[1] * k * PT, u[2] * k * PT, u[3] * k * PT, (ox + u[4] * k) * PT, (oy + u[5] * k) * PT];
      xobj.push({ im: 'Im' + i, image: it.image, gs: it.opacity < 1 ? { name: 'GS' + i, dict: PDF.gsDict(it.opacity) } : null });
      ops.push(PDF.drawOps({ im: 'Im' + i, gs: it.opacity < 1 ? 'GS' + i : null, cm }));
    });
    ops.push('Q');
  }
  if (scene.underlay?.segs?.length) { pen(0.13, 0.72); seg(scene.underlay.segs); ops.push('S'); }   // another level, light, under everything
  // grid lines (0.6 DF.16): thin dash-dot, under everything; their bubbles (7 mm on paper) come with the room labels
  if (scene.grids?.length) {
    pen(0.13, 0.35, [5, 1, 0.6, 1]);
    for (const x of scene.grids) path([x.a, x.b]);
    ops.push('S');
  }
  // below the cut: thin grey
  pen(0.13, 0.45);
  for (const b of scene.below || []) seg(b.segs);
  ops.push('S');
  // above the cut, under the view range's top (0.6 DF.19): thin dashed
  if (scene.above?.length) { pen(0.13, 0.45, [2, 1.2]); for (const b of scene.above) seg(b.segs); ops.push('S'); }
  // rooms: names and areas come last; nothing filled for them on paper
  // other cut elements: light fill, outline
  for (const c of scene.cut || []) {
    if (c.loops?.length) { ops.push('0.75 g'); for (const l of c.loops) { const pts = []; for (let i = 0; i + 1 < l.length; i += 2) pts.push([l[i], l[i + 1]]); path(pts, true); } ops.push('f*'); }
    pen(0.25, 0); seg(c.segs); ops.push('S');
  }
  // walls: grey fill, heavy outline
  for (const w of scene.walls || []) {
    if (w.layers) for (const it of layerPrimitives(w)) {
      if (it.t === 'fill') { ops.push(colorRgb(it.color).map(coord).join(' ') + ' rg'); for (const p of it.polys) path(p, true); ops.push('f*'); }
      else { pen(it.w, 0, it.dash); ops.push(colorRgb(it.color).map(coord).join(' ') + ' RG'); path(it.pts); ops.push('S'); }
    }
    for (const p of w.pieces || [w.poly]) { if (!p?.length) continue; if (!w.layers) { ops.push('0.55 g'); path(p, true); ops.push('f'); } if (!scene.wallEdges) { pen(0.5, 0); path(p, true); ops.push('S'); } }
  }
  if (scene.wallEdges) { pen(0.5, 0); for (const p of scene.wallEdges) path(p, true); ops.push('S'); }
  // 0.8 EG.59: renovation phases on paper: existing light grey, to demolish red dashed (a white gap under it), new heavy black
  for (const w of scene.walls || []) {
    const ph = w.phase && PHASE_PLAN[w.phase];
    if (!ph) continue;
    for (const p of w.pieces || [w.poly]) {
      if (!p?.length) continue;
      if (ph.fill !== undefined && !w.layers) { ops.push(n(ph.fill) + ' g'); path(p, true); ops.push('f'); }
      if (ph.mmDash) { pen(ph.mm + 0.3, 1); ops.push('1 G'); path(p, true); ops.push('S'); }
      pen(ph.mm, 0, ph.mmDash); ops.push(ph.rgb.map(n).join(' ') + ' RG'); path(p, true); ops.push('S');
    }
  }   // one outline round the walls: joins not drawn
  // 0.8 SU.1055: a view's pen overrides (pens.js) on paper: the wall's outline again in that weight, line and colour
  for (const w of scene.walls || []) {
    if (!w.pen) continue;
    pen(penMm(w.pen.w || 1.75), 0, w.pen.dash === 'dash' ? [2.5, 1.2] : w.pen.dash === 'dot' ? [0.5, 0.9] : null); ops.push(penRgb(w.pen.color).map(n).join(' ') + ' RG');
    for (const p of w.pieces || [w.poly]) { if (p?.length) { path(p, true); ops.push('S'); } }
  }
  // doors, windows, roofs
  for (const s of scene.symbols || []) {
    if (s.fill) for (const p of s.fill) { ops.push('1 g'); path(p, true); ops.push('f'); }
    pen(s.lw ? penMm(s.lw) : 0.35, 0); if (s.color) ops.push(penRgb(s.color).map(n).join(' ') + ' RG'); seg((s.lines || []).flat()); ops.push('S');
    if (s.color) ops.push('0 G');
    pen(0.18, 0);
    for (const a of s.arcs || []) { const steps = Math.max(8, Math.ceil(Math.abs(a.a1 - a.a0) / (Math.PI / 32))); const pts = []; for (let i = 0; i <= steps; i++) { const t = a.a0 + (a.a1 - a.a0) * i / steps; pts.push([a.c[0] + a.r * Math.cos(t), a.c[1] + a.r * Math.sin(t)]); } path(pts); }
    seg((s.thin || []).flat()); ops.push('S');
    if (s.dashed?.length) { pen(0.18, 0, [1.5, 1]); seg(s.dashed.flat()); ops.push('S'); }
  }
  // 0.6 DC.117 (d): drafting lines and hatch regions drawn in this view
  for (const d of scene.drafting || []) {
    if (d.solid && d.rings) { ops.push('0.6 g'); for (const r of d.rings) path(r, true); ops.push('f*'); }
    if (d.segs?.length) { pen(0.13, 0); seg(d.segs); ops.push('S'); }
    pen(d.kind === 'hatch' ? 0.18 : 0.25, 0); for (const l of d.lines || []) if (l.length > 1) path(l, !!d.closed); ops.push('S');
  }
  // dimensions: line, ticks, text above
  for (const d of scene.dims || []) {
    const L = Math.hypot(d.b[0] - d.a[0], d.b[1] - d.a[1]);
    if (L < 1) continue;
    const u = [(d.b[0] - d.a[0]) / L, (d.b[1] - d.a[1]) / L], nn = [-u[1], u[0]];
    const off = d.offMm !== undefined ? d.offMm / k : d.off || 0;
    const A = [d.a[0] + nn[0] * off, d.a[1] + nn[1] * off], B = [d.b[0] + nn[0] * off, d.b[1] + nn[1] * off];
    pen(0.13, 0);
    path([A, B]);
    const ext = 1.5 / k, gap = 0.8 / k;
    for (const [i, q] of [A, B].entries()) {
      const source = d.witnesses?.[i] || (i ? d.b : d.a), distance = Math.hypot(q[0]-source[0],q[1]-source[1]);
      if (distance < 0.001) continue;
      const dir = [(q[0]-source[0])/distance,(q[1]-source[1])/distance];
      path([source.map((v,j)=>v+dir[j]*Math.min(gap,distance/2)),q.map((v,j)=>v+dir[j]*ext)]);
    }
    const tk = 1 / k, tick = [(u[0] - nn[0]) * tk, (u[1] - nn[1]) * tk];
    for (const q of [A, B]) path([[q[0] - tick[0], q[1] - tick[1]], [q[0] + tick[0], q[1] + tick[1]]]);
    ops.push('S');
    let rot = Math.atan2(u[1], u[0]);
    if (rot > Math.PI / 2 + 1e-9 || rot <= -Math.PI / 2) rot += Math.PI;
    const mid = P([(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]), up = [-Math.sin(rot), Math.cos(rot)];
    if (width(d.text, 6) / PT * 1.1 < L * k) text(d.text, mid[0] + up[0] * 0.8, mid[1] + up[1] * 0.8, 6, { rot });
  }
  // room labels
  for (const r of scene.rooms || []) {
    if (!r.at || !r.label) continue;
    const q = P(r.at);
    r.label.forEach((s, i) => text(s, q[0], q[1] - (i - (r.label.length - 1) / 2) * 3.4, i ? 6.5 : 7.5, { bold: !i }));
  }
  // grid bubbles: a circle beyond each end the grid shows them at, its label inside
  for (const x of scene.grids || []) {
    if (x.bubbles === 'none') continue;
    const a = P(x.a), b = P(x.b), L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L], R = 3.5;
    const at = [];
    if (x.bubbles !== 'end') at.push([a[0] - u[0] * R, a[1] - u[1] * R]);
    if (x.bubbles !== 'start') at.push([b[0] + u[0] * R, b[1] + u[1] * R]);
    for (const c of at) {
      const pts = []; for (let i = 0; i <= 24; i++) { const t = i / 24 * Math.PI * 2; pts.push([(c[0] + R * Math.cos(t) - ox) / k, (c[1] + R * Math.sin(t) - oy) / k]); }
      ops.push('1 g'); path(pts, true); ops.push('f'); pen(0.25, 0); path(pts, true); ops.push('S');
      text(x.tag, c[0], c[1] - 1.1, x.tag.length > 2 ? 5 : 6.5, { bold: true });
    }
  }
  if (scene.crop) ops.push('Q');
  // title strip
  pen(0.35, 0);
  path([[(margin - ox) / k, (margin + strip - 2 - oy) / k], [(PW - margin - ox) / k, (margin + strip - 2 - oy) / k]]);
  ops.push('S');
  text(title, margin, margin + 7, 11, { align: 'left', bold: true });
  if (lines.length) text(lines.join('   '), margin, margin + 2, 7, { align: 'left', gray: 0.25 });   // i18n-ignore: spacing between the strip's items
  text(sc[1], PW - margin, margin + 7, 9, { align: 'right', bold: true });
  return { bytes: assemble(ops.join('\n'), PW * PT, PH * PT, title, xobj), images: xobj.length, scale: { label: sc[1], ratio: sc[0] }, missing };
}

function bounds(scene) {
  if (scene.crop) return { x0: scene.crop[0], y0: scene.crop[1], x1: scene.crop[2], y1: scene.crop[3] };   // 0.6 DC.117
  const b = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  const g = (x, y) => { if (x < b.x0) b.x0 = x; if (x > b.x1) b.x1 = x; if (y < b.y0) b.y0 = y; if (y > b.y1) b.y1 = y; };
  for (const w of scene.walls || []) for (const q of w.poly || []) g(q[0], q[1]);
  for (const c of [...(scene.cut || []), ...(scene.below || [])]) for (let i = 0; i + 1 < c.segs.length; i += 2) g(c.segs[i], c.segs[i + 1]);
  for (const s of scene.symbols || []) for (const q of s.poly || []) g(q[0], q[1]);
  for (const d of scene.dims || []) for (const q of dimensionFootprint(d)) g(q[0], q[1]);
  for (const x of scene.grids || []) { g(x.a[0], x.a[1]); g(x.b[0], x.b[1]); }
  for (const d of scene.drafting || []) for (const l of d.lines || []) for (const q of l) g(q[0], q[1]);   // 0.6 DC.117 (d)
  if (!Number.isFinite(b.x0)) return { x0: 0, y0: 0, x1: 10000, y1: 10000 };
  const pad = Math.max(b.x1 - b.x0, b.y1 - b.y0) * 0.06 + 600;   // room for the dimensions outside the walls
  return { x0: b.x0 - pad, y0: b.y0 - pad, x1: b.x1 + pad, y1: b.y1 + pad };
}

/** The file: catalog, pages, one page, its content, two fonts, info. */
function assemble(content, W, H, title, xobj = []) {
  const enc = (s) => Uint8Array.from(String(s), (c) => c.charCodeAt(0) & 0xff);
  const body = enc(content);
  const t = lit(title).s;
  // extra objects from 8: each picture's image (and its soft mask), then the opacity states
  const extra = [], names = [], gsNames = [];
  for (const x of xobj) {
    const first = 8 + extra.length, made = PDF.imageObjects(x.image, first);
    names.push('/' + x.im + ' ' + first + ' 0 R'); extra.push(...made.objs);
  }
  for (const x of xobj) if (x.gs) { gsNames.push('/' + x.gs.name + ' ' + (8 + extra.length) + ' 0 R'); extra.push(x.gs.dict); }
  const res = `/Font << /F1 5 0 R /F2 6 0 R >>${names.length ? ' /XObject << ' + names.join(' ') + ' >>' : ''}${gsNames.length ? ' /ExtGState << ' + gsNames.join(' ') + ' >>' : ''}`;
  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${n(W)} ${n(H)}] /Resources << ${res} >> /Contents 4 0 R >>`,
    null,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    `<< /Title ${t} /Producer (BimCraft) >>`,   // i18n-ignore: PDF metadata (the program's name)
    ...extra,
  ];
  const parts = [], offs = [];
  let size = 0;
  const put = (b) => { parts.push(b); size += b.length; };
  put(enc('%PDF-1.4\n%\xe2\xe3\xcf\xd3\n'));   // i18n-ignore: PDF syntax
  objs.forEach((o, i) => {
    offs.push(size);
    if (o === null) { put(enc(`${i + 1} 0 obj\n<< /Length ${body.length} >>\nstream\n`)); put(body); put(enc('\nendstream\nendobj\n')); }   // i18n-ignore: PDF syntax
    else if (typeof o === 'object') { put(enc(`${i + 1} 0 obj\n<< ${o.dict} /Length ${o.data.length} >>\nstream\n`)); put(o.data); put(enc('\nendstream\nendobj\n')); }   // i18n-ignore: PDF syntax
    else put(enc(`${i + 1} 0 obj\n${o}\nendobj\n`));
  });
  const xref = size;
  put(enc(`xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map((o) => String(o).padStart(10, '0') + ' 00000 n \n').join('') + `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R /Info 7 0 R >>\nstartxref\n${xref}\n%%EOF\n`));
  const out = new Uint8Array(size);
  let p = 0;
  for (const b of parts) { out.set(b, p); p += b.length; }
  return out;
}
