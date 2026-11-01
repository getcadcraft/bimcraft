/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — piece kinds, marks and problem codes; the words the person reads come from the language file (frm.*) */
/**
 * framing.js — timber and light-gauge steel framing panels with cut lists and shop drawings (0.8 round 2, EG.6, the DetailCraft side). No DOM:
 * tools/detailcraft-test/test-framing.mjs runs it in Node. Millimetres.
 *
 *   wallPanel(spec) → panel     studs, plates, king and jack studs, headers, cripples and sills of a wall panel with openings
 *   floorPanel(spec) → panel    joists, rim joists and blocking of a floor panel
 *   roofPanel(spec) → panel     rafters in pairs and the ridge board of a gable roof panel
 *   panelOf(spec) → panel       by spec.kind
 *   cutList(panel) → rows       one row per (size, length): mark, count, total length
 *   nestPanels(panels, stock) → the stock lengths to buy for every size, by nest.js
 *   panelSvg(panel, { words }) → string   the shop drawing: the panel to scale with every piece marked, and its dimensions
 *   panelProblems(panel, stock) → [problem]   geometry that cannot be framed, in the shared Problems shape
 *   cleanFraming(j) → { panels } | null     what a model file keeps
 *
 * A piece = { id, kind, size, length, x, y, w, h, mark } where (x, y, w, h) is the piece in the panel's drawing (mm; y up, from the panel's lower left
 * corner; a floor's y runs along its span, a roof panel is its gable elevation).
 *
 * What the numbers are: lumber nominal sizes with their dressed sizes in millimetres (38 × 89 for a 2×4: PS 20 / CSA O141 softwood lumber) and
 * light-gauge C-studs with a track, named by their depth and thickness. Header sizes, stud spacing and the number of top plates are the
 * person's; the defaults are common starting values, not a code check. Whether a stud at that spacing carries that wall, and a header that span,
 * is for the code tables (BimCraft's Regulations add-on has the IRC's) and the engineer.
 */
import { nestBars } from './nest.js';
import { toPdf } from './pdf.js';

export const TIMBER = Object.freeze({ '2x3': [38, 64], '2x4': [38, 89], '2x6': [38, 140], '2x8': [38, 184], '2x10': [38, 235], '2x12': [38, 286], '4x4': [89, 89], '4x6': [89, 140] });
export const STEEL = Object.freeze({ 'C63-0.9': [41, 63, 0.9], 'C92-1.2': [41, 92, 1.2], 'C150-1.2': [41, 150, 1.2], 'C150-1.5': [41, 150, 1.5], 'C200-1.5': [41, 200, 1.5] });   // [flange, web depth, thickness]
export const MATERIALS = ['timber', 'lgs'];
export const WALL_DEFAULTS = Object.freeze({ kind: 'wall', material: 'timber', length: 3600, height: 2400, size: '2x4', spacing: 400, topPlates: 2, headerSize: '2x10', headerPlies: 2, openings: [] });
export const FLOOR_DEFAULTS = Object.freeze({ kind: 'floor', material: 'timber', width: 3600, span: 4200, size: '2x10', spacing: 400, rim: true, blocking: false });
export const ROOF_DEFAULTS = Object.freeze({ kind: 'roof', material: 'timber', length: 4800, run: 3000, rise: 1500, overhang: 400, size: '2x6', spacing: 600, ridge: '2x8' });

const r1 = (v) => Math.round(v * 10) / 10;

/** [face, depth, thickness] of a size: face = the width seen on a wall's elevation, depth = through the wall, thickness for steel. */
export function sizeOf(material, size) {
  if (material === 'lgs') { const s = STEEL[size]; return s ? { face: s[0], depth: s[1], t: s[2], steel: true } : null; }
  const s = TIMBER[size];
  return s ? { face: s[0], depth: s[1], t: s[0] } : null;
}
const clampN = (v, lo, hi, d) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : d; };

function addPiece(list, kind, size, length, x, y, w, h) { list.push({ id: kind + (list.length + 1), kind, size, length: r1(length), x: r1(x), y: r1(y), w: r1(w), h: r1(h) }); }

export function wallPanel(specIn) {
  const spec = { ...WALL_DEFAULTS, ...specIn };
  const sz = sizeOf(spec.material, spec.size), hd = sizeOf(spec.material, spec.headerSize);
  const pieces = [], issues = [];
  if (!sz) return { spec, pieces, issues: [{ code: 'size', size: spec.size }], summary: summary([]) };
  const lgs = !!sz.steel, tp = lgs ? sz.t : sz.face;                        // a plate's (track's) thickness on the elevation
  const nTop = lgs ? 1 : Math.max(1, Math.min(3, spec.topPlates | 0)), nBot = 1;
  const L = spec.length, H = spec.height;
  const plateStack = (nTop + nBot) * tp;
  const studLen = H - plateStack, studY = nBot * tp;
  if (!(studLen > 0)) return { spec, pieces, issues: [{ code: 'height' }], summary: summary([]) };
  const face = sz.face;
  addPiece(pieces, 'plate', spec.size, L, 0, 0, L, tp);                                                     // bottom plate (track)
  for (let i = 0; i < nTop; i++) addPiece(pieces, 'plate', spec.size, L, 0, H - (i + 1) * tp, L, tp);      // top plate(s)
  // openings, sorted; the blocked bands are jack + king studs on both sides
  const ops = (spec.openings || []).map((o) => ({ x: o.x, w: o.width, h: o.height, sill: o.sill || 0 })).sort((a, b) => a.x - b.x);
  const bands = [];
  for (const o of ops) {
    const j0 = o.x - face, j1 = o.x + o.w + face;                                                                // the jacks' outer faces
    if (o.x < 2 * face || o.x + o.w > L - 2 * face) { issues.push({ code: 'edge', at: o.x }); }
    if (bands.length && j0 - face < bands[bands.length - 1][1]) issues.push({ code: 'overlap', at: o.x });
    bands.push([j0 - face, j1 + face, o]);
  }
  // end studs
  addPiece(pieces, 'stud', spec.size, studLen, 0, studY, face, studLen);
  addPiece(pieces, 'stud', spec.size, studLen, L - face, studY, face, studLen);
  // regular studs on the grid, left out where an opening is
  const inBand = (x0, x1) => bands.some(([b0, b1]) => x1 > b0 + 1e-6 && x0 < b1 - 1e-6);
  for (let c = spec.spacing; c < L - face; c += spec.spacing) {
    const x0 = c - face / 2;
    if (x0 < face + 1e-6 || x0 + face > L - face - 1e-6) continue;
    if (!inBand(x0, x0 + face)) addPiece(pieces, 'stud', spec.size, studLen, x0, studY, face, studLen);
  }
  const grid = []; for (let c = spec.spacing; c < L - face; c += spec.spacing) grid.push(c - face / 2);
  for (const [b0, b1, o] of bands) {
    // king studs (full height) and jack studs (trimmers) up to the header
    addPiece(pieces, 'king', spec.size, studLen, b0, studY, face, studLen);
    addPiece(pieces, 'king', spec.size, studLen, b1 - face, studY, face, studLen);
    const headerBottom = o.sill + o.h;                                                                           // the rough opening is measured from the panel's underside (the subfloor)
    const hdrDepth = hd ? hd.depth : face, headerTop = headerBottom + hdrDepth;
    if (headerTop > H - nTop * tp + 1e-6) issues.push({ code: 'tall', at: o.x });
    const jack = headerBottom - studY;                                                                         // the jacks stand on the bottom plate and carry the header
    if (jack > 1) { addPiece(pieces, 'jack', spec.size, jack, b0 + face, studY, face, jack); addPiece(pieces, 'jack', spec.size, jack, b1 - 2 * face, studY, face, jack); }
    // the header: between the kings, on the jacks
    const hLen = o.w + 2 * face;
    for (let p = 0; p < (hd ? Math.max(1, spec.headerPlies | 0) : 1); p++) addPiece(pieces, 'header', hd ? spec.headerSize : spec.size, hLen, b0 + face, headerBottom, hLen, hdrDepth);
    // cripples over the header and under the sill, on the stud grid, between the kings
    const above = H - nTop * tp - headerTop;
    const below = o.sill - tp - studY;
    for (const x0 of grid) {
      if (x0 < b0 + face - 1e-6 || x0 + face > b1 - face + 1e-6) continue;
      if (above > 1) addPiece(pieces, 'cripple', spec.size, above, x0, headerTop, face, above);
      if (o.sill > 0 && below > 1) addPiece(pieces, 'cripple', spec.size, below, x0, studY, face, below);
    }
    if (o.sill > 0) addPiece(pieces, 'sill', spec.size, o.w, b0 + 2 * face, o.sill - tp, o.w, tp);
  }
  return finish({ spec, pieces, issues, width: L, height: H });
}

export function floorPanel(specIn) {
  const spec = { ...FLOOR_DEFAULTS, ...specIn }, sz = sizeOf(spec.material, spec.size);
  const pieces = [], issues = [];
  if (!sz) return { spec, pieces, issues: [{ code: 'size', size: spec.size }], summary: summary([]) };
  const face = sz.face, W = spec.width, S = spec.span;
  const rimT = spec.rim ? face : 0;
  const joistLen = S - 2 * rimT;
  // joists across the width along the span (drawn as vertical bars in plan); the first and last are at the edges
  const xs = [0];
  for (let c = spec.spacing; c < W - face; c += spec.spacing) xs.push(c - face / 2);
  xs.push(W - face);
  for (const x of [...new Set(xs.map(r1))]) addPiece(pieces, 'joist', spec.size, joistLen, x, rimT, face, joistLen);
  if (spec.rim) { addPiece(pieces, 'rim', spec.size, W, 0, 0, W, face); addPiece(pieces, 'rim', spec.size, W, 0, S - face, W, face); }
  if (spec.blocking) {
    const ys = S / 2 - face / 2, js = pieces.filter((p) => p.kind === 'joist').sort((a, b) => a.x - b.x);
    for (let i = 1; i < js.length; i++) { const gap = js[i].x - (js[i - 1].x + face); if (gap > 1) addPiece(pieces, 'blocking', spec.size, gap, js[i - 1].x + face, ys, gap, face); }
  }
  return finish({ spec, pieces, issues, width: W, height: S });
}

export function roofPanel(specIn) {
  const spec = { ...ROOF_DEFAULTS, ...specIn }, sz = sizeOf(spec.material, spec.size), rg = sizeOf(spec.material, spec.ridge);
  const pieces = [], issues = [];
  if (!sz) return { spec, pieces, issues: [{ code: 'size', size: spec.size }], summary: summary([]) };
  const run = spec.run, rise = spec.rise, slope = Math.hypot(run, rise);
  const len = slope + spec.overhang * slope / run;                                                            // along the slope, eaves overhang measured horizontally
  const pairs = [0];
  for (let c = spec.spacing; c < spec.length - sz.face; c += spec.spacing) pairs.push(c - sz.face / 2);
  pairs.push(spec.length - sz.face);
  const pairAt = [...new Set(pairs.map(r1))];
  const nPairs = pairAt.length;
  const ridgeT = rg ? rg.face : sz.face;
  // gable elevation: both rafters of one pair, and the ridge board end
  const total = 2 * (run + spec.overhang);
  addPiece(pieces, 'rafter', spec.size, len, 0, 0, run + spec.overhang, rise * (run + spec.overhang) / run);
  addPiece(pieces, 'rafter', spec.size, len, run + spec.overhang, 0, run + spec.overhang, rise * (run + spec.overhang) / run);
  addPiece(pieces, 'ridge', spec.ridge, spec.length, run + spec.overhang - ridgeT / 2, rise * (run + spec.overhang) / run - (rg ? rg.depth : sz.depth) / 2, ridgeT, rg ? rg.depth : sz.depth);
  // one drawing of one pair; the counts are the pairs
  const counts = { rafter: 2 * nPairs, ridge: 1 };
  return finish({ spec, pieces, issues, width: total, height: rise * (run + spec.overhang) / run + 100, counts, pairAt, pitch: Math.atan2(rise, run) * 180 / Math.PI });
}

export const panelOf = (spec) => (spec.kind === 'floor' ? floorPanel(spec) : spec.kind === 'roof' ? roofPanel(spec) : wallPanel(spec));

function finish(p) {
  // marks: one per (kind, size, length)
  const marks = new Map(), prefix = { stud: 'S', king: 'K', jack: 'J', header: 'H', cripple: 'C', sill: 'W', plate: 'P', joist: 'J', rim: 'R', blocking: 'B', rafter: 'R', ridge: 'G' };
  const counters = {};
  for (const pc of p.pieces) {
    const key = pc.kind + '|' + pc.size + '|' + pc.length;
    if (!marks.has(key)) { counters[pc.kind] = (counters[pc.kind] || 0) + 1; marks.set(key, (prefix[pc.kind] || 'X') + (counters[pc.kind])); }
    pc.mark = marks.get(key);
  }
  return { ...p, summary: summary(p.pieces, p.counts) };
}
function summary(pieces, counts = null) {
  const n = counts ? Object.values(counts).reduce((a, b) => a + b, 0) : pieces.length;
  const metres = counts ? pieces.reduce((a, p) => a + p.length * (counts[p.kind] / pieces.filter((q) => q.kind === p.kind).length), 0) / 1000 : pieces.reduce((a, p) => a + p.length, 0) / 1000;
  return { pieces: n, metres: Math.round(metres * 100) / 100 };
}

/** One row per mark: { mark, kind, size, length, count, total (m) }. A roof counts its pairs. */
export function cutList(panel) {
  const rows = new Map();
  for (const pc of panel.pieces) {
    const k = pc.mark;
    if (!rows.has(k)) rows.set(k, { mark: pc.mark, kind: pc.kind, size: pc.size, length: pc.length, count: 0 });
    rows.get(k).count++;
  }
  const out = [...rows.values()];
  if (panel.counts) for (const r of out) { const same = panel.pieces.filter((p) => p.kind === r.kind).length; r.count = Math.round(r.count * panel.counts[r.kind] / same); }
  for (const r of out) r.total = Math.round(r.length * r.count) / 1000;
  return out.sort((a, b) => a.size.localeCompare(b.size) || b.length - a.length);
}

/** Stock lengths to buy for all panels together, per size (nest.js: first-fit decreasing, then each bar shrunk to the shortest stock that takes its cuts). */
export function nestPanels(panels, { stock = [2400, 3000, 3600, 4800, 6000], kerf = 3, trim = 0, keep = 600 } = {}) {
  const pieces = [];
  for (const p of panels) for (const r of cutList(p)) pieces.push({ mark: r.mark, profile: r.size, material: p.spec.material, length: r.length, count: r.count });
  return nestBars(pieces, { stock, kerf, trim, keep });
}

export function panelProblems(panel, stock = [2400, 3000, 3600, 4800, 6000], { name = '' } = {}) {
  const out = [], source = { kind: 'engine', name: 'detailcraft.framing' };
  const max = Math.max(...stock);
  const push = (code, severity, vars) => out.push({ id: 'frm:' + code + ':' + name + ':' + (vars.at ?? vars.size ?? vars.mark ?? ''), code: 'frm.' + code, severity, msg: { key: 'frm.prob.' + code, vars: { name, ...vars } }, about: [], source, panel: name });
  for (const i of panel.issues) push(i.code, 'error', i);
  for (const r of cutList(panel)) if (r.length > max) push('long', 'warning', { mark: r.mark, length: Math.round(r.length), max });
  const s = panel.spec;
  if (s.kind === 'wall' && s.spacing > 610) push('spacing', 'warning', { spacing: s.spacing });
  return out;
}

// ---- the shop drawing ----

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export function panelSvg(panel, { words = {}, title = '' } = {}) {
  const W = panel.width || 1000, H = panel.height || 1000;
  const margin = Math.max(W, H) * 0.12, vw = W + 2 * margin, vh = H + 2 * margin;
  const fs = Math.max(W, H) / 60;
  const colour = { stud: '#8a6a3a', king: '#6b4f27', jack: '#6b4f27', header: '#a0522d', cripple: '#a58b5a', sill: '#a58b5a', plate: '#5c4a2e', joist: '#8a6a3a', rim: '#5c4a2e', blocking: '#a58b5a', rafter: '#8a6a3a', ridge: '#5c4a2e' };
  const lgs = panel.spec.material === 'lgs';
  const yy = (y, h) => (panel.spec.kind === 'wall' || panel.spec.kind === 'roof' ? margin + H - y - h : margin + y);   // walls and roofs: y up; floors: span runs down the page
  const parts = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r1(vw)} ${r1(vh)}" role="img" aria-label="${esc(title || words.drawing || 'Framing panel')}" font-family="sans-serif" font-size="${r1(fs)}">`,
    `<rect x="0" y="0" width="${r1(vw)}" height="${r1(vh)}" fill="#fff"/>`];
  const roof = panel.spec.kind === 'roof';
  for (const p of panel.pieces) {
    const x = margin + p.x, minT = Math.max(p.h, fs * 0.25);
    if (roof && p.kind === 'rafter') {
      const rise = p.h, run = p.w, left = p.x === 0;
      const pts = left ? [[x, yy(0, 0)], [x + run, yy(rise, 0)]] : [[x, yy(rise, 0)], [x + run, yy(0, 0)]];
      parts.push(`<line x1="${r1(pts[0][0])}" y1="${r1(pts[0][1])}" x2="${r1(pts[1][0])}" y2="${r1(pts[1][1])}" stroke="${colour.rafter}" stroke-width="${r1(Math.max(fs * 0.5, 40))}" data-piece="${p.id}"/>`);
      continue;
    }
    const h = p.kind === 'plate' || p.kind === 'sill' ? minT : p.h;
    parts.push(`<rect x="${r1(x)}" y="${r1(yy(p.y, h))}" width="${r1(p.w)}" height="${r1(h)}" fill="${lgs ? '#b8c2cc' : colour[p.kind] || '#999'}" fill-opacity="0.55" stroke="#222" stroke-width="${r1(fs / 14)}" data-piece="${p.id}" data-mark="${p.mark}"/>`);
    if (p.kind !== 'plate' && p.kind !== 'sill' && p.w >= fs * 0.8 && p.h >= fs * 1.2 && p.kind !== 'cripple') parts.push(`<text x="${r1(x + p.w / 2)}" y="${r1(yy(p.y, h) + h / 2)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(-90 ${r1(x + p.w / 2)} ${r1(yy(p.y, h) + h / 2)})">${esc(p.mark)}</text>`);
    else if (p.kind === 'plate') parts.push(`<text x="${r1(x + 40)}" y="${r1(yy(p.y, h) - fs * 0.2)}" font-size="${r1(fs * 0.8)}">${esc(p.mark)}</text>`);
  }
  if (panel.spec.kind === 'wall') for (const o of (panel.spec.openings || [])) {
    const x = margin + o.x, y = yy((panel.pieces.find((q) => q.kind === 'plate')?.h ?? 38) + (o.sill || 0), o.height);
    parts.push(`<rect x="${r1(x)}" y="${r1(y)}" width="${r1(o.width)}" height="${r1(o.height)}" fill="none" stroke="#2a6" stroke-width="${r1(fs / 10)}" stroke-dasharray="${r1(fs)} ${r1(fs / 2)}"/>`);
  }
  // overall dimensions
  const dim = (x1, y1, x2, y2, text) => `<g stroke="#c0392b" fill="#c0392b" stroke-width="${r1(fs / 14)}"><line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}"/><text x="${r1((x1 + x2) / 2)}" y="${r1((y1 + y2) / 2 - fs * 0.4)}" text-anchor="middle" stroke="none">${esc(text)}</text></g>`;
  parts.push(dim(margin, margin + H + margin * 0.5, margin + W, margin + H + margin * 0.5, `${Math.round(W)}`));
  parts.push(`<g stroke="#c0392b" fill="#c0392b" stroke-width="${r1(fs / 14)}"><line x1="${r1(margin * 0.5)}" y1="${r1(margin)}" x2="${r1(margin * 0.5)}" y2="${r1(margin + H)}"/><text x="${r1(margin * 0.5 - fs * 0.4)}" y="${r1(margin + H / 2)}" text-anchor="middle" stroke="none" transform="rotate(-90 ${r1(margin * 0.5 - fs * 0.4)} ${r1(margin + H / 2)})">${Math.round(H)}</text></g>`);
  if (title) parts.push(`<text x="${r1(margin)}" y="${r1(margin * 0.6)}" font-size="${r1(fs * 1.3)}" font-weight="bold">${esc(title)}</text>`);
  parts.push('</svg>');
  return parts.join('');
}

// ---- what the model file keeps ----

export function cleanPanelSpec(j) {
  if (!j || typeof j !== 'object') return null;
  const kind = ['wall', 'floor', 'roof'].includes(j.kind) ? j.kind : null;
  if (!kind) return null;
  const material = MATERIALS.includes(j.material) ? j.material : 'timber';
  const sizes = material === 'lgs' ? STEEL : TIMBER;
  const size = (v, d) => (typeof v === 'string' && sizes[v] ? v : d);
  const def = material === 'lgs' ? { wall: 'C92-1.2', floor: 'C200-1.5', roof: 'C150-1.2' }[kind] : { wall: '2x4', floor: '2x10', roof: '2x6' }[kind];
  const place = j.place && typeof j.place === 'object' ? { x: clampN(j.place.x, -1e6, 1e6, 0), y: clampN(j.place.y, -1e6, 1e6, 0), z: clampN(j.place.z, -1e5, 1e5, 0), angle: clampN(j.place.angle, -360, 360, 0) } : null;
  const out = { id: String(j.id || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 20), name: String(j.name || '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 60), kind, material, size: size(j.size, def) };
  if (kind === 'wall') {
    Object.assign(out, { length: clampN(j.length, 300, 30000, 3600), height: clampN(j.height, 600, 8000, 2400), spacing: clampN(j.spacing, 200, 900, 400), topPlates: clampN(j.topPlates, 1, 3, 2), headerSize: size(j.headerSize, material === 'lgs' ? 'C200-1.5' : '2x10'), headerPlies: clampN(j.headerPlies, 1, 4, 2) });
    out.openings = (Array.isArray(j.openings) ? j.openings : []).slice(0, 40).map((o) => ({ x: clampN(o?.x, 0, 30000, 0), width: clampN(o?.width, 200, 10000, 900), height: clampN(o?.height, 200, 6000, 2100), sill: clampN(o?.sill, 0, 6000, 0) }));
  } else if (kind === 'floor') Object.assign(out, { width: clampN(j.width, 300, 30000, 3600), span: clampN(j.span, 600, 12000, 4200), spacing: clampN(j.spacing, 200, 900, 400), rim: j.rim !== false, blocking: !!j.blocking });
  else Object.assign(out, { length: clampN(j.length, 600, 30000, 4800), run: clampN(j.run, 600, 12000, 3000), rise: clampN(j.rise, 100, 12000, 1500), overhang: clampN(j.overhang, 0, 2000, 400), spacing: clampN(j.spacing, 200, 1200, 600), ridge: size(j.ridge, material === 'lgs' ? 'C200-1.5' : '2x8') });
  if (place) out.place = place;
  return out;
}
export function cleanFraming(j) {
  if (!j || typeof j !== 'object') return null;
  const panels = (Array.isArray(j.panels) ? j.panels : []).slice(0, 200).map(cleanPanelSpec).filter(Boolean);
  const seen = new Set();
  panels.forEach((p, i) => { if (!p.id || seen.has(p.id)) p.id = 'p' + (i + 1) + (seen.has('p' + (i + 1)) ? 'x' : ''); seen.add(p.id); });
  return panels.length ? { panels } : null;
}

// ---- panels placed as members (0.8 round 3, EG.6) ----

/** Typical air-dry softwood (SPF / Douglas fir-larch lie between 420 and 530): the weight of a placed timber piece. Steel studs use the steel density. */
export const TIMBER_DENSITY = 500;

/**
 * The members of a panel placed in the model: every piece becomes one beam or column with the profile its dressed size gives (a custom flat bar with the
 * timber's density, or a cold-formed C of the studs' own depth and flange), at `place` = { x, y, z (mm), angle (degrees about z) }. A wall runs along
 * the angle from its lower left end, its depth across the angle and its bottom at z; a floor lies with its width along the angle and its span across,
 * z = the underside of the joists; a roof has its gable elevation along the angle, its length across, z = the top of the wall plates. Each header ply is
 * a member of its own side by side; a roof makes one pair of rafters at every spacing.
 *   → { profiles: [custom profile definitions], members: [member specs, each with `panel` = the panel's id] }
 */
export function placePanel(panel, place = {}) {
  const spec = panel.spec, lgs = spec.material === 'lgs';
  const a = (place.angle || 0) * Math.PI / 180, ux = Math.cos(a), uy = Math.sin(a), nx = -Math.sin(a), ny = Math.cos(a);
  const O = [place.x || 0, place.y || 0, place.z || 0];
  const at = (u, n, z) => [Math.round((O[0] + ux * u + nx * n) * 10) / 10, Math.round((O[1] + uy * u + ny * n) * 10) / 10, Math.round((O[2] + z) * 10) / 10];
  const profiles = new Map(), members = [];
  // the profile of a piece: across = the dimension along the member's first profile axis (horizontal across the member), up = the other one
  const profileFor = (size, across, up) => {
    const lum = sizeOf(spec.material, size);
    if (lgs) {
      const name = 'LGS ' + size;
      if (!profiles.has(name)) profiles.set(name, { name, kind: 'C', d: lum.depth, bf: lum.face, tw: lum.t, tf: lum.t });
      return name;
    }
    const name = 'TIM ' + r1(across) + 'x' + r1(up);
    if (!profiles.has(name)) profiles.set(name, { name, kind: 'FLAT', b: r1(across), t: r1(up), density: TIMBER_DENSITY });
    return name;
  };
  const material = lgs ? 'S235' : 'timber';
  const member = (type, profile, start, end, piece, rotation = 0) => members.push({ type, profile, material, position: 'middle', rotation, start, end, name: piece.mark || '', panel: spec.id || '' });
  const plies = new Map();
  for (const pc of panel.pieces) {
    const lum = sizeOf(spec.material, pc.size);
    if (!lum) continue;
    if (spec.kind === 'wall') {
      const vertical = ['stud', 'king', 'jack', 'cripple'].includes(pc.kind);
      const inPlane = vertical ? pc.w : pc.h;
      const normal = Math.abs(inPlane - lum.face) < 1 ? lum.depth : lum.face;
      let off = 0;
      if (pc.kind === 'header') { const key = pc.x + '|' + pc.y; const k = plies.get(key) || 0; plies.set(key, k + 1); off = k * normal; }
      const prof = profileFor(pc.size, normal, inPlane);
      if (vertical) member('column', prof, at(pc.x + pc.w / 2, off, pc.y), at(pc.x + pc.w / 2, off, pc.y + pc.h), pc, lgs ? 90 : 0);
      else member('beam', prof, at(pc.x, off, pc.y + pc.h / 2), at(pc.x + pc.w, off, pc.y + pc.h / 2), pc, lgs ? 90 : 0);
    } else if (spec.kind === 'floor') {
      const prof = profileFor(pc.size, lum.face, lum.depth), z = lum.depth / 2;
      if (pc.kind === 'joist') member('beam', prof, at(pc.x + pc.w / 2, pc.y, z), at(pc.x + pc.w / 2, pc.y + pc.h, z), pc);
      else member('beam', prof, at(pc.x, pc.y + pc.h / 2, z), at(pc.x + pc.w, pc.y + pc.h / 2, z), pc);
    }
  }
  if (spec.kind === 'roof') {
    const sz = sizeOf(spec.material, spec.size), rg = sizeOf(spec.material, spec.ridge) || sz;
    const prof = profileFor(spec.size, sz.face, sz.depth), rprof = profileFor(spec.ridge, rg.face, rg.depth);
    for (const pc of panel.pieces) {
      if (pc.kind === 'rafter') {
        for (const c of panel.pairAt || [0]) {
          const left = pc.x === 0, n = c + sz.face / 2;
          member('beam', prof, at(left ? pc.x : pc.x + pc.w, n, left ? 0 : 0), at(left ? pc.x + pc.w : pc.x, n, pc.h), pc);
        }
      } else if (pc.kind === 'ridge') member('beam', rprof, at(pc.x + pc.w / 2, 0, pc.y + pc.h / 2), at(pc.x + pc.w / 2, spec.length, pc.y + pc.h / 2), pc);
    }
  }
  return { profiles: [...profiles.values()], members };
}

// ---- PDF panel sheets (0.8 round 3, EG.6) ----

/**
 * The shop sheet of one panel as a page for pdf.js: the panel to scale with every piece marked, the overall dimensions, the cut list and the title
 * block, A3 landscape. `words` = { sheet, panel, material, mark, piece, size, length, count, total, timber, lgs, scale, date, pieces, note, kinds: {stud: …}, kind } as the
 * language file has them (the caller passes the translated words; defaults are English).
 */
export function panelPage(panel, { title = '', project = '', words = {}, date = '' } = {}) {
  const w = { sheet: 'Framing panel', mark: 'Mark', piece: 'Piece', size: 'Size', length: 'Length (mm)', count: 'Count', total: 'Total (m)', scale: 'Scale', pieces: 'pieces', note: 'Dressed sizes; check against the code tables and the engineer.', kinds: {}, ...words };
  const items = [], W = 420, H = 297, M = 12;
  const draw = { x: M, y: 70, w: W - 2 * M, h: H - 70 - 34 };
  const pw = panel.width || 1000, ph = panel.height || 1000;
  const k = Math.min(draw.w / pw, draw.h / ph), ox = draw.x + (draw.w - pw * k) / 2, oy = draw.y + (draw.h - ph * k) / 2;
  const wall = panel.spec.kind === 'wall' || panel.spec.kind === 'roof';
  const X = (x) => ox + x * k, Y = (y, h) => (wall ? oy + y * k : oy + (ph - y - h) * k);   // the page's y is up; a floor's span runs down the page
  const rect = (x, y, rw, rh, o = {}) => items.push({ k: 'path', pts: [[x, y], [x + rw, y], [x + rw, y + rh], [x, y + rh]], closed: true, w: o.w ?? 0.25, dash: o.dash || null, fill: !!o.fill });
  items.push({ k: 'path', pts: [[M, M], [W - M, M], [W - M, H - M], [M, H - M]], closed: true, w: 0.5, dash: null, fill: false });
  const roof = panel.spec.kind === 'roof';
  for (const pc of panel.pieces) {
    if (roof && pc.kind === 'rafter') {
      const left = pc.x === 0;
      items.push({ k: 'path', pts: left ? [[X(pc.x), Y(0, 0)], [X(pc.x + pc.w), Y(pc.h, 0)]] : [[X(pc.x), Y(pc.h, 0)], [X(pc.x + pc.w), Y(0, 0)]], closed: false, w: Math.max(0.5, 38 * k), dash: null, fill: false });
      continue;
    }
    const hh = Math.max(pc.h, 1.2 / k);
    rect(X(pc.x), Y(pc.y, hh), pc.w * k, hh * k, { w: 0.2 });
    if (pc.w * k >= 3.5 && pc.h * k >= 6 && pc.kind !== 'cripple') items.push({ k: 'text', x: X(pc.x) + pc.w * k / 2, y: Y(pc.y, hh) + hh * k / 2, s: pc.mark, h: Math.min(3.2, pc.w * k * 0.9), align: 'center', rot: Math.PI / 2, bold: false });
    else if (pc.kind === 'plate') items.push({ k: 'text', x: X(pc.x) + 2, y: Y(pc.y, hh) + hh * k + 1, s: pc.mark, h: 2.8, align: 'left', rot: 0, bold: false });
  }
  if (panel.spec.kind === 'wall') for (const o of (panel.spec.openings || [])) {
    const base = panel.pieces.find((q) => q.kind === 'plate')?.h ?? 38;
    rect(X(o.x), Y(base + (o.sill || 0), o.height), o.width * k, o.height * k, { w: 0.2, dash: [2, 1] });
  }
  // overall dimensions
  items.push({ k: 'path', pts: [[X(0), oy - 8], [X(pw), oy - 8]], closed: false, w: 0.2, dash: null, fill: false });
  items.push({ k: 'text', x: X(pw / 2), y: oy - 12, s: String(Math.round(pw)), h: 3.2, align: 'center', rot: 0, bold: false });
  items.push({ k: 'path', pts: [[ox - 8, oy], [ox - 8, oy + ph * k]], closed: false, w: 0.2, dash: null, fill: false });
  items.push({ k: 'text', x: ox - 11, y: oy + ph * k / 2, s: String(Math.round(ph)), h: 3.2, align: 'center', rot: Math.PI / 2, bold: false });
  // title and cut list (top band), title block (bottom)
  items.push({ k: 'text', x: M + 3, y: H - M - 9, s: title || w.sheet, h: 6, align: 'left', rot: 0, bold: true });
  const rows = cutList(panel);
  const cols = [[w.mark, 14], [w.piece, 30], [w.size, 20], [w.length, 24], [w.count, 14], [w.total, 18]];
  let y = H - M - 20;
  const row = (cells, bold) => { let x = M + 3; cells.forEach((c, i) => { items.push({ k: 'text', x, y, s: String(c), h: 3.2, align: 'left', rot: 0, bold }); x += cols[i][1]; }); y -= 4.4; };
  row(cols.map((c) => c[0]), true);
  const perCol = 8;
  rows.slice(0, perCol).forEach((r) => row([r.mark, w.kinds[r.kind] || r.kind, r.size, Math.round(r.length * 10) / 10, r.count, r.total], false));
  if (rows.length > perCol) { y = H - M - 20; const save = cols.map((c) => c[1]); const shift = 125; const rr = rows.slice(perCol, 2 * perCol); let x0 = M + 3 + shift; items.push({ k: 'text', x: x0, y, s: cols.map((c) => c[0]).join('  '), h: 3.2, align: 'left', rot: 0, bold: true }); y -= 4.4; for (const r of rr) { let x = x0; [r.mark, w.kinds[r.kind] || r.kind, r.size, Math.round(r.length * 10) / 10, r.count, r.total].forEach((c, i) => { items.push({ k: 'text', x, y, s: String(c), h: 3.2, align: 'left', rot: 0, bold: false }); x += save[i]; }); y -= 4.4; } }
  items.push({ k: 'path', pts: [[M, M + 12], [W - M, M + 12]], closed: false, w: 0.25, dash: null, fill: false });
  const foot = [project, `${w.scale} 1:${Math.max(1, Math.round(1 / k))}`, `${panel.summary.pieces} ${w.pieces}`, date].filter(Boolean).join('   ');
  items.push({ k: 'text', x: M + 3, y: M + 6, s: foot, h: 3.4, align: 'left', rot: 0, bold: false });
  items.push({ k: 'text', x: M + 3, y: M + 2, s: w.note, h: 2.6, align: 'left', rot: 0, bold: false });
  return { w: W, h: H, items };
}

/** One page for each panel, as a PDF (pdf.js): { bytes, missing } */
export async function panelsPdf(panels, o = {}) {
  const lists = panels.map((p, i) => panelPage(p, { ...o, title: (o.names && o.names[i]) || '' }));
  return toPdf(lists, { title: o.title || 'Framing panels' });
}
