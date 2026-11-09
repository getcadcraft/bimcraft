/* SPDX-License-Identifier: Apache-2.0 */
// title-svg.js — a sheet design of the person's own as an SVG (0.9 D8.17, session bim-views-09): read into lines, fills and words, never put on the page as SVG. No imports, no DOM.
/**
 * What it reads: <svg> (viewBox, width, height; mm / in / pt / px / cm), g, rect, line, polyline, polygon, circle, ellipse, path (M L H V C S Q T A Z), text / tspan,
 * transform (translate, scale, rotate, matrix), stroke, stroke-width, fill, font-size, font-weight, text-anchor (attributes or style="…"). Everything else (script, image, use,
 * defs, clip paths, filters, styles sheets) is ignored. A word `{{key}}` in a text is a field the person types per sheet: drawing-name / title (the sheet's title),
 * sheet-number / number (its number), project, date, or any word of their own (company, name, drawn-by …). A rectangle with id="drawing-area" (not drawn) marks where the views go.
 *   parseTitleSvg(svg) → { ok, w, h (mm), shapes, fields: [{ key, label, size }], area: [x0, y0, x1, y1] | null } | { ok: false, error }     (shapes in mm, y down)
 *   svgTitleItems(parsed, { PW, PH, margin, vals }) → { items, room }   (sheet mm, y up; the design is fitted to the sheet and centred)
 *   fieldKey(word) → the key a {{word}} stands for ('drawing-name' → 'title')      designSvg(shapes, { w, h }) → the SVG text of a design drawn in the editor
 */
const OWN = new Set(['number', 'title']);
const ALIAS = { 'drawing-name': 'title', drawing: 'title', 'sheet-title': 'title', 'drawing-title': 'title', 'sheet-number': 'number', 'sheet-no': 'number', sheet: 'number', 'drawing-number': 'number', 'project-name': 'project' };
export const fieldKey = (word) => { const k = String(word).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 30); return ALIAS[k] || k; };
const PT = 72 / 25.4;
const UNIT = { mm: 1, cm: 10, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6, px: 25.4 / 96 };

const mul = (a, b) => [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]];
const ap = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
function transformOf(s) {
  let m = [1, 0, 0, 1, 0, 0];
  for (const t of String(s || '').matchAll(/(translate|scale|rotate|matrix)\s*\(([^)]*)\)/g)) {
    const a = t[2].split(/[\s,]+/).filter(Boolean).map(Number);
    if (a.some((v) => !Number.isFinite(v))) continue;
    let n = null;
    if (t[1] === 'translate') n = [1, 0, 0, 1, a[0] || 0, a[1] || 0];
    else if (t[1] === 'scale') n = [a[0] ?? 1, 0, 0, a[1] ?? a[0] ?? 1, 0, 0];
    else if (t[1] === 'matrix' && a.length === 6) n = a;
    else if (t[1] === 'rotate') { const r = ((a[0] || 0) * Math.PI) / 180, c = Math.cos(r), sn = Math.sin(r); n = [c, sn, -sn, c, 0, 0]; if (a.length === 3) n = mul(mul([1, 0, 0, 1, a[1], a[2]], n), [1, 0, 0, 1, -a[1], -a[2]]); }
    if (n) m = mul(m, n);
  }
  return m;
}
const NAMED = { black: 0, white: 1, gray: 0.5, grey: 0.5, silver: 0.75, red: 0.3, blue: 0.1, green: 0.4, none: null, transparent: null };
/** A colour as a grey 0 (black) … 1 (white), null for none, undefined when not understood. */
function grey(c) {
  const v = String(c ?? '').trim().toLowerCase();
  if (!v) return undefined;
  if (v in NAMED) return NAMED[v];
  let m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/.exec(v), r, g, b;
  if (m) { const h = m[1].length === 3 ? m[1].replace(/./g, '$&$&') : m[1]; r = parseInt(h.slice(0, 2), 16); g = parseInt(h.slice(2, 4), 16); b = parseInt(h.slice(4, 6), 16); }
  else if ((m = /^rgb\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/.exec(v))) { r = +m[1]; g = +m[2]; b = +m[3]; }
  else return undefined;
  return Math.round(((0.299 * r + 0.587 * g + 0.114 * b) / 255) * 100) / 100;
}
function attrsOf(s) {
  const o = {};
  for (const m of s.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) o[m[1].toLowerCase()] = m[2] ?? m[3];
  if (o.style) for (const d of o.style.split(';')) { const i = d.indexOf(':'); if (i > 0) o[d.slice(0, i).trim().toLowerCase()] = d.slice(i + 1).trim(); }
  return o;
}
const len = (v, d) => { const m = /^\s*(-?[\d.]+(?:e-?\d+)?)\s*([a-z%]*)\s*$/i.exec(String(v ?? '')); return m ? Number(m[1]) * (m[2] && m[2] !== '%' ? UNIT[m[2].toLowerCase()] ?? 1 : 1) : d; };
const num = (v, d = 0) => { const n = parseFloat(v); return Number.isFinite(n) ? n : d; };

/** A path's d → subpaths of points (curves and arcs flattened). */
function pathPoints(d) {
  const toks = String(d || '').match(/[a-zA-Z]|-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/g) || [];
  const subs = [];
  let i = 0, cmd = '', x = 0, y = 0, sx = 0, sy = 0, cur = null, lc = null, lq = null;
  const n = () => Number(toks[i++]);
  const has = () => i < toks.length && !/^[a-zA-Z]$/.test(toks[i]);
  const start = (px, py) => { cur = { pts: [[px, py]], closed: false }; subs.push(cur); };
  const to = (px, py) => { if (!cur) start(x, y); cur.pts.push([px, py]); x = px; y = py; };
  const cubic = (x1, y1, x2, y2, x3, y3) => { const x0 = x, y0 = y; for (let k = 1; k <= 14; k++) { const t = k / 14, u = 1 - t; to(u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3, u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3); } lc = [x2, y2]; lq = null; };
  const quad = (x1, y1, x2, y2) => { const x0 = x, y0 = y; for (let k = 1; k <= 12; k++) { const t = k / 12, u = 1 - t; to(u * u * x0 + 2 * u * t * x1 + t * t * x2, u * u * y0 + 2 * u * t * y1 + t * t * y2); } lq = [x1, y1]; lc = null; };
  const arc = (rx, ry, rot, large, sweep, ex, ey) => {
    rx = Math.abs(rx); ry = Math.abs(ry);
    if (!rx || !ry || (ex === x && ey === y)) { to(ex, ey); return; }
    const ph = (rot * Math.PI) / 180, c = Math.cos(ph), s = Math.sin(ph), dx = (x - ex) / 2, dy = (y - ey) / 2, x1 = c * dx + s * dy, y1 = -s * dx + c * dy;
    const lam = (x1 * x1) / (rx * rx) + (y1 * y1) / (ry * ry);
    if (lam > 1) { rx *= Math.sqrt(lam); ry *= Math.sqrt(lam); }
    const f = (large === sweep ? -1 : 1) * Math.sqrt(Math.max(0, (rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1) / (rx * rx * y1 * y1 + ry * ry * x1 * x1))), cx1 = (f * rx * y1) / ry, cy1 = (-f * ry * x1) / rx;
    const cx = c * cx1 - s * cy1 + (x + ex) / 2, cy = s * cx1 + c * cy1 + (y + ey) / 2;
    const ang = (ux, uy, vx, vy) => Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy);
    const t1 = ang(1, 0, (x1 - cx1) / rx, (y1 - cy1) / ry);
    let dt = ang((x1 - cx1) / rx, (y1 - cy1) / ry, (-x1 - cx1) / rx, (-y1 - cy1) / ry);
    if (!sweep && dt > 0) dt -= 2 * Math.PI; else if (sweep && dt < 0) dt += 2 * Math.PI;
    const steps = Math.max(6, Math.ceil(Math.abs(dt) / (Math.PI / 18)));
    for (let k = 1; k <= steps; k++) { const t = t1 + (dt * k) / steps, ux = rx * Math.cos(t), uy = ry * Math.sin(t); to(c * ux - s * uy + cx, s * ux + c * uy + cy); }
    lc = lq = null;
  };
  let guard = 0;
  while (i < toks.length && guard++ < 200000) {
    if (/^[a-zA-Z]$/.test(toks[i])) cmd = toks[i++];
    else if (!cmd) break;
    const rel = cmd === cmd.toLowerCase(), C = cmd.toUpperCase(), ox = rel ? x : 0, oy = rel ? y : 0;
    if (C === 'Z') { if (cur) { cur.closed = true; x = sx; y = sy; } cur = null; lc = lq = null; continue; }
    if (!has()) { if (!'ZM'.includes(C)) break; }
    if (C === 'M') { const px = n() + ox, py = n() + oy; x = sx = px; y = sy = py; start(px, py); cmd = rel ? 'l' : 'L'; lc = lq = null; }
    else if (C === 'L') { to(n() + ox, n() + oy); lc = lq = null; }
    else if (C === 'H') { to(n() + ox, y); lc = lq = null; }
    else if (C === 'V') { to(x, n() + oy); lc = lq = null; }
    else if (C === 'C') { const a = n() + ox, b = n() + oy, c2 = n() + ox, d2 = n() + oy; cubic(a, b, c2, d2, n() + ox, n() + oy); }
    else if (C === 'S') { const rx1 = lc ? 2 * x - lc[0] : x, ry1 = lc ? 2 * y - lc[1] : y, c2 = n() + ox, d2 = n() + oy; cubic(rx1, ry1, c2, d2, n() + ox, n() + oy); }
    else if (C === 'Q') { const a = n() + ox, b = n() + oy; quad(a, b, n() + ox, n() + oy); }
    else if (C === 'T') { const qx = lq ? 2 * x - lq[0] : x, qy = lq ? 2 * y - lq[1] : y; quad(qx, qy, n() + ox, n() + oy); }
    else if (C === 'A') { const rx = n(), ry = n(), rot = n(), la = n(), sw = n(); arc(rx, ry, rot, la ? 1 : 0, sw ? 1 : 0, n() + ox, n() + oy); }
    else break;
    if (subs.length > 2000) break;
  }
  return subs;
}
const ellipse = (cx, cy, rx, ry) => { const p = []; for (let k = 0; k < 36; k++) { const t = (k / 36) * 2 * Math.PI; p.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)]); } return [{ pts: p, closed: true }]; };

const CONTAINER = new Set(['g', 'a', 'switch', 'svg', 'symbol']);
const INERT = new Set(['defs', 'clippath', 'mask', 'pattern', 'marker', 'metadata', 'style', 'script', 'foreignobject', 'title', 'desc', 'image', 'use', 'filter', 'lineargradient', 'radialgradient']);
const FRAME = new Set([...CONTAINER, ...INERT, 'text', 'tspan']);   // the tags that push a frame while open
const cache = new Map();
export function parseTitleSvg(svg) {
  const src = String(svg ?? '');
  if (cache.has(src)) return cache.get(src);
  const r = parse(src);
  if (cache.size > 40) cache.clear();
  cache.set(src, r);
  return r;
}
function parse(src) {
  if (src.length > 400_000 || !/<svg[\s>]/i.test(src)) return { ok: false, error: 'svg' };
  const parts = src.replace(/<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<!\[CDATA\[|\]\]>|<!DOCTYPE[^>]*>/gi, '').split(/(<[^>]+>)/);
  const shapes = [], found = new Set(), fields = [];
  let w = 0, h = 0, root = null, area = null, skip = 0, text = null, count = 0;
  const stack = [];
  const note = (s) => { for (const m of s.matchAll(/\{\{\s*([^{}]{1,40}?)\s*\}\}/g)) { const k = fieldKey(m[1]); if (k && !found.has(k)) { found.add(k); if (!OWN.has(k)) fields.push({ key: k, label: m[1].trim().replace(/^./, (c) => c.toUpperCase()).slice(0, 40), size: 'normal' }); } } };
  for (const part of parts) {
    if (!part) continue;
    if (part[0] !== '<') { if (text && !skip) text.s += part.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&'); continue; }
    const m = /^<(\/?)([a-zA-Z][\w:-]*)([\s\S]*?)(\/?)>$/.exec(part);
    if (!m) continue;
    const close = !!m[1], tag = m[2].toLowerCase().replace(/^svg:/, ''), self = !!m[4];
    if (close) {
      if (tag === 'text' && text) { const t = text; text = null; if (!skip && t.s.trim()) { note(t.s); t.s = t.s.replace(/\s+/g, ' ').trim(); shapes.push(t); } }
      if (FRAME.has(tag)) { const top = stack.pop(); if (top?.skip) skip--; }
      continue;
    }
    const at = attrsOf(m[3]), par = stack[stack.length - 1] || null;
    if (tag === 'svg' && !root) {
      const vb = (at.viewbox || '').split(/[\s,]+/).map(Number), hasVb = vb.length === 4 && vb.every(Number.isFinite) && vb[2] > 0 && vb[3] > 0;
      const mm = (v) => { const n = len(v, 0); return n && !/[a-z]/i.test(String(v)) ? n * UNIT.px : n; };   // a bare number is CSS px
      const ww = mm(at.width), hh = mm(at.height);
      if (hasVb) { const u = ww > 0 ? ww / vb[2] : hh > 0 ? hh / vb[3] : 1; w = vb[2] * u; h = vb[3] * u; root = [u, 0, 0, u, -vb[0] * u, -vb[1] * u]; }
      else { w = ww; h = hh; const f = /[a-z]/i.test(at.width || '') ? 1 : UNIT.px; root = [f, 0, 0, f, 0, 0]; }
      if (!(w >= 20 && w <= 5000 && h >= 20 && h <= 5000)) return { ok: false, error: 'size' };
      stack.push({ m: root, st: { stroke: undefined, fill: 'black', sw: 1, fs: 3.5 / root[0], bold: false, anchor: 'start' } });
      continue;
    }
    if (!root) continue;
    const container = CONTAINER.has(tag), inert = INERT.has(tag);
    if (inert) { if (!self) { stack.push({ skip: true, m: par.m, st: par.st }); skip++; } continue; }
    const M = at.transform ? mul(par.m, transformOf(at.transform)) : par.m;
    const st = { ...par.st };
    if (at.stroke !== undefined) st.stroke = at.stroke; if (at.fill !== undefined) st.fill = at.fill;
    if (at['stroke-width'] !== undefined) st.sw = num(at['stroke-width'], 1);
    if (at['font-size'] !== undefined) st.fs = num(at['font-size'], st.fs);
    if (at['font-weight'] !== undefined) st.bold = /bold|[6-9]00/.test(at['font-weight']);
    if (at['text-anchor'] !== undefined) st.anchor = at['text-anchor'];
    if (container) { if (!self) stack.push({ m: M, st, skip: false }); continue; }
    const scale = Math.sqrt(Math.abs(M[0] * M[3] - M[1] * M[2])) || 1;
    if (tag === 'text') {
      const pos = ap(M, num(at.x), num(at.y));
      text = { t: 'text', s: '', x: pos[0], y: pos[1], size: Math.max(2, st.fs * scale * PT), bold: st.bold, align: st.anchor === 'middle' ? 'center' : st.anchor === 'end' ? 'right' : 'left', g: grey(st.fill) ?? 0 };
      if (!self) stack.push({ m: M, st, skip: false, isText: true }); else text = null;
      continue;
    }
    if (tag === 'tspan') { if (!self) stack.push({ m: M, st, skip: false }); continue; }
    if (skip || count++ > 8000) continue;
    let subs = null;
    if (tag === 'rect') { const x = num(at.x), y = num(at.y), rw = num(at.width), rh = num(at.height); if (at.id === 'drawing-area' || at['data-area'] !== undefined) { const a = ap(M, x, y), b = ap(M, x + rw, y + rh); area = [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])]; continue; } if (rw > 0 && rh > 0) subs = [{ pts: [[x, y], [x + rw, y], [x + rw, y + rh], [x, y + rh]], closed: true }]; }
    else if (tag === 'line') subs = [{ pts: [[num(at.x1), num(at.y1)], [num(at.x2), num(at.y2)]], closed: false }];
    else if (tag === 'polyline' || tag === 'polygon') { const v = (at.points || '').split(/[\s,]+/).filter(Boolean).map(Number); const p = []; for (let k = 0; k + 1 < v.length; k += 2) if (Number.isFinite(v[k]) && Number.isFinite(v[k + 1])) p.push([v[k], v[k + 1]]); if (p.length > 1) subs = [{ pts: p, closed: tag === 'polygon' }]; }
    else if (tag === 'circle') subs = ellipse(num(at.cx), num(at.cy), num(at.r), num(at.r));
    else if (tag === 'ellipse') subs = ellipse(num(at.cx), num(at.cy), num(at.rx), num(at.ry));
    else if (tag === 'path') subs = pathPoints(at.d);
    if (!subs) continue;
    const fg = tag === 'line' ? null : grey(st.fill), sg = grey(st.stroke), wmm = Math.min(5, Math.max(0.1, st.sw * scale));
    for (const sp of subs) {
      const pts = sp.pts.map((q) => ap(M, q[0], q[1]));
      if (pts.length < 2) continue;
      if (typeof fg === 'number' && fg < 0.97 && sp.closed && pts.length > 2) shapes.push({ t: 'fill', polys: [pts], g: fg });
      if (typeof sg === 'number') shapes.push({ t: 'line', pts: sp.closed ? [...pts, pts[0]] : pts, w: wmm, g: sg });
    }
  }
  if (!shapes.length) return { ok: false, error: 'empty' };
  return { ok: true, w, h, shapes, fields: fields.slice(0, 24), area };
}

/** The design as sheet items: fitted to the sheet (never stretched) and centred; the words filled in from `vals` (key → text). */
export function svgTitleItems(p, { PW, PH, margin = 10, vals = {} }) {
  const s = Math.min(PW / p.w, PH / p.h), ox = (PW - p.w * s) / 2, oy = (PH - p.h * s) / 2;
  const X = (x) => ox + x * s, Y = (y) => oy + (p.h - y) * s;
  const fill = (str) => str.replace(/\{\{\s*([^{}]{1,40}?)\s*\}\}/g, (_, k) => String(vals[fieldKey(k)] ?? ''));
  const items = [];
  for (const it of p.shapes) {
    if (it.t === 'line') items.push({ t: 'line', pts: it.pts.map((q) => [X(q[0]), Y(q[1])]), w: Math.max(0.1, it.w * s), g: it.g });
    else if (it.t === 'fill') items.push({ t: 'fill', polys: it.polys.map((poly) => poly.map((q) => [X(q[0]), Y(q[1])])), g: it.g });
    else { const str = fill(it.s); if (str.trim()) items.push({ t: 'text', s: str, x: X(it.x), y: Y(it.y), size: it.size * s, align: it.align, bold: it.bold, g: it.g }); }
  }
  const room = p.area ? [X(p.area[0]), Y(p.area[3]), X(p.area[2]), Y(p.area[1])] : [margin, margin, PW - margin, PH - margin];
  return { items, room };
}

/** An SVG of what the designer drew (rectangles, lines, words) on a w × h mm sheet: the same file a person could import from a drawing program. */
export function designSvg(shapes, { w, h }) {
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const f = (v) => String(Math.round(v * 100) / 100);
  const out = [`<svg xmlns="http://www.w3.org/2000/svg" width="${f(w)}mm" height="${f(h)}mm" viewBox="0 0 ${f(w)} ${f(h)}">`];
  for (const s of shapes) {
    if (s.k === 'rect') out.push(`<rect x="${f(Math.min(s.x0, s.x1))}" y="${f(Math.min(s.y0, s.y1))}" width="${f(Math.abs(s.x1 - s.x0))}" height="${f(Math.abs(s.y1 - s.y0))}" fill="none" stroke="#000" stroke-width="${f(s.w || 0.35)}"/>`);
    else if (s.k === 'line') out.push(`<line x1="${f(s.x0)}" y1="${f(s.y0)}" x2="${f(s.x1)}" y2="${f(s.y1)}" stroke="#000" stroke-width="${f(s.w || 0.35)}"/>`);
    else if (s.k === 'area') out.push(`<rect id="drawing-area" x="${f(Math.min(s.x0, s.x1))}" y="${f(Math.min(s.y0, s.y1))}" width="${f(Math.abs(s.x1 - s.x0))}" height="${f(Math.abs(s.y1 - s.y0))}" fill="none"/>`);
    else if (s.k === 'text') out.push(`<text x="${f(s.x0)}" y="${f(s.y0)}" font-size="${f(s.size || 3.5)}"${s.bold ? ' font-weight="bold"' : ''} fill="#000">${esc(s.s)}</text>`);
  }
  out.push('</svg>');
  return out.join('\n') + '\n';
}
