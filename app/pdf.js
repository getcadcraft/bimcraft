/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pdf.js — a vector PDF 1.4 (one or more pages) written by hand, adapted from the CadCraft drafting app's
 * plot.js (assemble + WinAnsi text). No DOM, no library.
 *
 *   toPdf(list | [list, …], { title }) → { bytes: Uint8Array, missing }   one page per list
 * list = { w, h (mm), items: [
 *   { k: 'path', pts: [[x,y]…], closed, w (pen mm), dash: [on, off] | null, fill: bool },
 *   { k: 'circle', c: [x,y], r, w, dash },
 *   { k: 'text', x, y, s, h (font size mm), align: left|center|right, rot (rad), bold } ] }  y up, mm.
 * Text is Helvetica (WinAnsiEncoding); characters outside Windows-1252 print "?" and are counted.
 * The content stream is FlateDecode-compressed when CompressionStream exists (browsers, Node 18+).
 */
import { CP1252, SUBST, advance } from './font.js';
import { t } from './i18n.js';

const K = 72 / 25.4;

export function num(v) {
  if (!Number.isFinite(v)) return '0';
  const s = (Math.abs(v) < 5e-5 ? 0 : v).toFixed(4);
  return s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s;
}

/** A string as an escaped PDF literal in WinAnsiEncoding + how many characters had no glyph. */
export function winAnsi(s) {
  let str = '', missing = 0;
  for (let ch of String(s)) {
    ch = SUBST[ch] || ch;
    let code = ch.codePointAt(0);
    if (CP1252[ch] !== undefined) code = CP1252[ch];
    else if (code > 0xff || (code >= 0x7f && code < 0xa0) || code < 0x20) { code = 0x3f; missing++; }
    if (code === 0x28 || code === 0x29 || code === 0x5c) str += '\\' + String.fromCharCode(code);
    else if (code >= 0x20 && code < 0x7f) str += String.fromCharCode(code);
    else str += '\\' + code.toString(8).padStart(3, '0');
  }
  return { str, missing };
}

/** Text width in mm at size h (Helvetica; bold is drawn ~5% wider). */
export function textWidth(s, h, bold = false) { return advance(String(s)) / 1000 * h * (bold ? 1.05 : 1); }

export function contentStream(list) {
  const out = [];
  let missing = 0;
  out.push(num(K) + ' 0 0 ' + num(K) + ' 0 0 cm', '1 J 1 j 0 0 0 RG 0 0 0 rg');
  let lw = null, dash = '';
  const pen = (w, d) => {
    if (w !== lw) { out.push(num(w) + ' w'); lw = w; }
    const ds = d ? '[' + d.map(num).join(' ') + '] 0 d' : '[] 0 d';
    if (ds !== dash) { out.push(ds); dash = ds; }
  };
  for (const it of list.items) {
    if (it.k === 'path') {
      if (it.pts.length < 2) continue;
      pen(it.w ?? 0.25, it.dash);
      out.push(num(it.pts[0][0]) + ' ' + num(it.pts[0][1]) + ' m');
      for (const p of it.pts.slice(1)) out.push(num(p[0]) + ' ' + num(p[1]) + ' l');
      out.push(it.fill ? 'h f' : it.closed ? 'h S' : 'S');
    } else if (it.k === 'circle') {
      pen(it.w ?? 0.25, it.dash);
      const [cx, cy] = it.c, r = it.r, k = 0.5522847498 * r;
      out.push(num(cx + r) + ' ' + num(cy) + ' m',
        [cx + r, cy + k, cx + k, cy + r, cx, cy + r].map(num).join(' ') + ' c',
        [cx - k, cy + r, cx - r, cy + k, cx - r, cy].map(num).join(' ') + ' c',
        [cx - r, cy - k, cx - k, cy - r, cx, cy - r].map(num).join(' ') + ' c',
        [cx + k, cy - r, cx + r, cy - k, cx + r, cy].map(num).join(' ') + ' c', it.fill ? 'h f' : 'h S');
    } else if (it.k === 'text') {
      const enc = winAnsi(it.s);
      missing += enc.missing;
      const h = it.h, wdt = textWidth(it.s, h, it.bold);
      const dx = it.align === 'center' ? -wdt / 2 : it.align === 'right' ? -wdt : 0;
      const c = Math.cos(it.rot || 0), s = Math.sin(it.rot || 0);
      const x = it.x + dx * c, y = it.y + dx * s;
      out.push('BT /' + (it.bold ? 'F2' : 'F1') + ' 1 Tf ' + [h * c, h * s, -h * s, h * c, x, y].map(num).join(' ') + ' Tm (' + enc.str + ') Tj ET');   // i18n-ignore (PDF operators)
    }
  }
  return { text: out.join('\n') + '\n', missing };
}

async function deflate(bytes) {
  if (typeof CompressionStream === 'undefined') return null;
  try {
    const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch { return null; }
}

export async function toPdf(lists, { title = t('pdf.title'), compress = true } = {}) {
  const pages = [];
  let missing = 0;
  for (const list of Array.isArray(lists) ? lists : [lists]) {
    const cs = contentStream(list);
    missing += cs.missing;
    const raw = new TextEncoder().encode(cs.text);
    const packed = compress ? await deflate(raw) : null;
    pages.push({ w: list.w, h: list.h, content: packed || raw, flate: !!packed });
  }
  return { bytes: assemble(pages, title), missing };
}

/** Objects: 1 catalog, 2 pages, 3 Helvetica, 4 Helvetica-Bold, 5 info, then a page + its content per page. */
function assemble(pages, title) {
  const enc = new TextEncoder();
  const parts = [], offsets = [];
  let size = 0;
  const push = (b) => { const u = typeof b === 'string' ? enc.encode(b) : b; parts.push(u); size += u.length; };
  const obj = (n, body) => { offsets[n] = size; push(n + ' 0 obj\n'); for (const b of [].concat(body)) push(b); push('\nendobj\n'); };
  const pt = (mm) => num(mm * K);
  const now = new Date(), pad = (x) => String(x).padStart(2, '0');
  const date = 'D:' + now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate()) + pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + 'Z';
  const pageObj = (i) => 6 + 2 * i;
  push('%PDF-1.4\n');
  push(Uint8Array.from([0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a]));
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
  obj(2, '<< /Type /Pages /Kids [' + pages.map((_, i) => pageObj(i) + ' 0 R').join(' ') + '] /Count ' + pages.length + ' >>');
  obj(3, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  obj(4, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  obj(5, '<< /Title (' + winAnsi(title).str + ') /Producer (DetailCraft) /Creator (DetailCraft) /CreationDate (' + date + ') >>');
  pages.forEach((pg, i) => {
    const n = pageObj(i);
    obj(n, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + pt(pg.w) + ' ' + pt(pg.h) + '] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ' + (n + 1) + ' 0 R >>');
    obj(n + 1, ['<< /Length ' + pg.content.length + (pg.flate ? ' /Filter /FlateDecode' : '') + ' >>\nstream\n', pg.content, '\nendstream']);
  });
  const count = 6 + 2 * pages.length;
  const xref = size;
  push('xref\n0 ' + count + '\n0000000000 65535 f \n' + offsets.slice(1).map((o) => String(o).padStart(10, '0') + ' 00000 n \n').join(''));
  push('trailer\n<< /Size ' + count + ' /Root 1 0 R /Info 5 0 R >>\nstartxref\n' + xref + '\n%%EOF\n');
  const out = new Uint8Array(size);
  let at = 0;
  for (const p of parts) { out.set(p, at); at += p.length; }
  return out;
}
