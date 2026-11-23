/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: technical diagnostics; the page shows them inside a translated sentence (bcf.unreadable, bcf.read.notes). */
/**
 * bcf.js — BCF 2.1 issues in and out, with a real model camera (0.4 B9). No DOM, no library: bin/test-bimcraft.mjs --bcf
 * runs it in Node and validates what it writes against the buildingSMART schemas (tools/markupcraft-test/bcf_check.py).
 * BimCraft's own module (MarkupCraft writes BCF for sheets; an app never imports another app's folder).
 *
 *   const bytes = await writeBcf({ topics, file })        a .bcf zip (stored entries): bcf.version, <guid>/markup.bcf,
 *                                                          <guid>/viewpoint.bcfv (+ snapshot.png)
 *   const { topics, notes } = await readBcf(bytes)        any BCF 2.0 / 2.1 zip (stored or deflated); untrusted input:
 *                                                          sizes, depth and counts are capped, unknown parts ignored
 *   topic = { guid, title, status, type, author, created, modified?, description, comments: [{ guid, date, author, text,
 *             viewpoint? }], viewpoints: [{ guid, camera, selection: [ifcGuid], visibility: { defaultVisible,
 *             exceptions: [ifcGuid] }, clipping: [{ location, direction }], snapshot: Uint8Array | null }] }
 *   camera  = { kind: 'perspective' | 'orthogonal', viewPoint, direction, up, fov | scale }   IFC world, metres, Z up
 *
 * Coordinates: BCF uses the model's own coordinates (metres, Z up). The viewer works in web-ifc's space (Y up, moved to
 * the origin by the coordination matrix C). toIfcPoint / toIfcDir / fromIfcPoint / fromIfcDir convert with C.
 * ClippingPlane Direction points to the side that is cut away (BCF 2.1).
 */

const MAX_FILE = 20 * 1024 * 1024, MAX_TOTAL = 200 * 1024 * 1024, MAX_ENTRIES = 5000, MAX_DEPTH = 64, MAX_TOPICS = 2000;

// ---- coordinates ----
function inv4(m) {   // column-major 4 × 4
  const a = m, o = new Array(16);
  const b00 = a[0] * a[5] - a[1] * a[4], b01 = a[0] * a[6] - a[2] * a[4], b02 = a[0] * a[7] - a[3] * a[4], b03 = a[1] * a[6] - a[2] * a[5];
  const b04 = a[1] * a[7] - a[3] * a[5], b05 = a[2] * a[7] - a[3] * a[6], b06 = a[8] * a[13] - a[9] * a[12], b07 = a[8] * a[14] - a[10] * a[12];
  const b08 = a[8] * a[15] - a[11] * a[12], b09 = a[9] * a[14] - a[10] * a[13], b10 = a[9] * a[15] - a[11] * a[13], b11 = a[10] * a[15] - a[11] * a[14];
  const det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  const d = det ? 1 / det : 0;
  o[0] = (a[5] * b11 - a[6] * b10 + a[7] * b09) * d; o[1] = (a[2] * b10 - a[1] * b11 - a[3] * b09) * d; o[2] = (a[13] * b05 - a[14] * b04 + a[15] * b03) * d; o[3] = (a[10] * b04 - a[9] * b05 - a[11] * b03) * d;
  o[4] = (a[6] * b08 - a[4] * b11 - a[7] * b07) * d; o[5] = (a[0] * b11 - a[2] * b08 + a[3] * b07) * d; o[6] = (a[14] * b02 - a[12] * b05 - a[15] * b01) * d; o[7] = (a[8] * b05 - a[10] * b02 + a[11] * b01) * d;
  o[8] = (a[4] * b10 - a[5] * b08 + a[7] * b06) * d; o[9] = (a[1] * b08 - a[0] * b10 - a[3] * b06) * d; o[10] = (a[12] * b04 - a[13] * b02 + a[15] * b00) * d; o[11] = (a[9] * b02 - a[8] * b04 - a[11] * b00) * d;
  o[12] = (a[5] * b07 - a[4] * b09 - a[6] * b06) * d; o[13] = (a[0] * b09 - a[1] * b07 + a[2] * b06) * d; o[14] = (a[13] * b01 - a[12] * b03 - a[14] * b00) * d; o[15] = (a[8] * b03 - a[9] * b01 + a[10] * b00) * d;
  return o;
}
const pt = (m, v) => [m[0] * v[0] + m[4] * v[1] + m[8] * v[2] + m[12], m[1] * v[0] + m[5] * v[1] + m[9] * v[2] + m[13], m[2] * v[0] + m[6] * v[1] + m[10] * v[2] + m[14]];
const dr = (m, v) => [m[0] * v[0] + m[4] * v[1] + m[8] * v[2], m[1] * v[0] + m[5] * v[1] + m[9] * v[2], m[2] * v[0] + m[6] * v[1] + m[10] * v[2]];
const norm = (v) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
/** viewer (Y up, coordinated) → IFC (Z up, metres) */
export const toIfcPoint = (C, v) => { const [x, y, z] = pt(inv4(C), v); return [x, -z, y]; };
export const toIfcDir = (C, v) => { const [x, y, z] = dr(inv4(C), v); return norm([x, -z, y]); };
export const fromIfcPoint = (C, p) => pt(C, [p[0], p[2], -p[1]]);
export const fromIfcDir = (C, d) => norm(dr(C, [d[0], d[2], -d[1]]));

// ---- zip ----
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
export function crc32(b) { let c = 0xffffffff; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
const enc = new TextEncoder();

/** A zip with stored (uncompressed) entries: [{ name, data: Uint8Array }]. */
export function zip(entries) {
  const parts = [], central = [];
  let off = 0;
  const u16 = (v) => [v & 255, (v >>> 8) & 255], u32 = (v) => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
  for (const e of entries) {
    const name = enc.encode(e.name), crc = crc32(e.data), n = e.data.length;
    const local = Uint8Array.from([...u32(0x04034b50), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(crc), ...u32(n), ...u32(n), ...u16(name.length), ...u16(0)]);
    parts.push(local, name, e.data);
    central.push(Uint8Array.from([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(crc), ...u32(n), ...u32(n), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(off)]), name);
    off += local.length + name.length + n;
  }
  const cdSize = central.reduce((a, p) => a + p.length, 0);
  const end = Uint8Array.from([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(entries.length), ...u16(entries.length), ...u32(cdSize), ...u32(off), ...u16(0)]);
  const all = [...parts, ...central, end], out = new Uint8Array(all.reduce((a, p) => a + p.length, 0));
  let at = 0; for (const p of all) { out.set(p, at); at += p.length; }
  return out;
}

async function inflate(data) {
  const ds = new DecompressionStream('deflate-raw');
  const buf = await new Response(new Blob([data]).stream().pipeThrough(ds)).arrayBuffer();
  return new Uint8Array(buf);
}

/** Entries of a zip (stored or deflated), from its central directory: Map(name → Uint8Array). Throws on a broken zip. */
export async function unzip(bytes) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let eocd = -1;
  for (let i = b.length - 22; i >= Math.max(0, b.length - 22 - 65535); i--) if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('not a zip');
  const count = dv.getUint16(eocd + 10, true), cdOff = dv.getUint32(eocd + 16, true);
  if (count > MAX_ENTRIES) throw new Error('too many files in the zip');
  const out = new Map();
  let p = cdOff, total = 0;
  for (let k = 0; k < count; k++) {
    if (p + 46 > b.length || dv.getUint32(p, true) !== 0x02014b50) throw new Error('broken zip directory');
    const method = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true), usize = dv.getUint32(p + 24, true);
    const nlen = dv.getUint16(p + 28, true), xlen = dv.getUint16(p + 30, true), clen = dv.getUint16(p + 32, true), lho = dv.getUint32(p + 42, true);
    const name = new TextDecoder().decode(b.subarray(p + 46, p + 46 + nlen));
    p += 46 + nlen + xlen + clen;
    if (name.endsWith('/')) continue;
    if (usize > MAX_FILE || (total += usize) > MAX_TOTAL) throw new Error('a file in the zip is too large');
    if (lho + 30 > b.length || dv.getUint32(lho, true) !== 0x04034b50) throw new Error('broken zip entry');
    const start = lho + 30 + dv.getUint16(lho + 26, true) + dv.getUint16(lho + 28, true);
    const raw = b.subarray(start, start + csize);
    let data;
    if (method === 0) data = raw.slice();
    else if (method === 8) data = await inflate(raw);
    else throw new Error('unsupported zip compression ' + method);
    if (data.length > MAX_FILE) throw new Error('a file in the zip is too large');
    out.set(name.replace(/\\/g, '/'), data);
  }
  return out;
}

// ---- XML ----
const esc = (s) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f￾￿]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
const unesc = (s) => s.replace(/&(#x[0-9a-fA-F]+|#\d+|amp|lt|gt|quot|apos);/g, (m, e) => (e[0] === '#' ? String.fromCodePoint(e[1] === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENT[e]));

/** A small XML reader for BCF: elements, attributes, text; no DTDs or custom entities (never expanded). → root node. */
export function parseXml(text) {
  const root = { name: '#doc', attrs: {}, children: [], text: '' };
  const stack = [root];
  let i = 0;
  const s = String(text).replace(/^﻿/, '');
  while (i < s.length) {
    const lt = s.indexOf('<', i);
    if (lt < 0) { stack[stack.length - 1].text += unesc(s.slice(i)); break; }
    if (lt > i) stack[stack.length - 1].text += unesc(s.slice(i, lt));
    if (s.startsWith('<!--', lt)) { const e = s.indexOf('-->', lt); if (e < 0) throw new Error('unclosed comment'); i = e + 3; continue; }
    if (s.startsWith('<![CDATA[', lt)) { const e = s.indexOf(']]>', lt); if (e < 0) throw new Error('unclosed CDATA'); stack[stack.length - 1].text += s.slice(lt + 9, e); i = e + 3; continue; }
    if (s.startsWith('<?', lt)) { const e = s.indexOf('?>', lt); if (e < 0) throw new Error('unclosed declaration'); i = e + 2; continue; }
    if (s.startsWith('<!', lt)) throw new Error('DTDs are not read');
    const gt = s.indexOf('>', lt);
    if (gt < 0) throw new Error('unclosed tag');
    const tag = s.slice(lt + 1, gt);
    if (tag[0] === '/') {
      const name = tag.slice(1).trim().replace(/^.*:/, '');
      const top = stack.pop();
      if (!top || top.name !== name) throw new Error('mismatched </' + name + '>');
      i = gt + 1; continue;
    }
    const self = tag.endsWith('/');
    const body = self ? tag.slice(0, -1) : tag;
    const m = /^\s*([^\s/>]+)/.exec(body);
    if (!m) throw new Error('bad tag');
    const node = { name: m[1].replace(/^.*:/, ''), attrs: {}, children: [], text: '' };
    const ar = /([^\s=]+)\s*=\s*("([^"]*)"|'([^']*)')/g;
    let a;
    while ((a = ar.exec(body.slice(m[0].length)))) node.attrs[a[1].replace(/^.*:/, '')] = unesc(a[3] ?? a[4]);
    stack[stack.length - 1].children.push(node);
    if (!self) { stack.push(node); if (stack.length > MAX_DEPTH) throw new Error('too deeply nested'); }
    i = gt + 1;
  }
  if (stack.length !== 1) throw new Error('unclosed <' + stack[stack.length - 1].name + '>');
  return root;
}
const kid = (n, name) => n?.children.find((c) => c.name === name) || null;
const kids = (n, name) => (n ? n.children.filter((c) => c.name === name) : []);
const txt = (n, name) => { const c = kid(n, name); return c ? c.text.trim() : ''; };
const num = (v) => { const x = Number(v); return Number.isFinite(x) ? x : null; };
const xyz = (n) => { if (!n) return null; const v = ['X', 'Y', 'Z'].map((k) => num(txt(n, k))); return v.every((x) => x !== null) ? v : null; };

// ---- write ----
const guidRe = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const newGuid = () => (globalThis.crypto?.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3) | 8).toString(16); }));
const f6 = (v) => String(Math.round(v * 1e6) / 1e6);
const P = (tag, v) => '<' + tag + '><X>' + f6(v[0]) + '</X><Y>' + f6(v[1]) + '</Y><Z>' + f6(v[2]) + '</Z></' + tag + '>';
const comps = (list) => list.map((g) => '<Component IfcGuid="' + esc(g) + '"/>').join('');

export function viewpointXml(vp) {
  const c = vp.camera;
  const parts = ['<?xml version="1.0" encoding="UTF-8"?>', '<VisualizationInfo Guid="' + esc(vp.guid) + '">', '<Components>'];
  if (vp.selection?.length) parts.push('<Selection>' + comps(vp.selection) + '</Selection>');
  const v = vp.visibility || { defaultVisible: true, exceptions: [] };
  parts.push('<Visibility DefaultVisibility="' + (v.defaultVisible ? 'true' : 'false') + '">' + (v.exceptions.length ? '<Exceptions>' + comps(v.exceptions) + '</Exceptions>' : '') + '</Visibility>');
  parts.push('</Components>');
  if (c) {
    const head = P('CameraViewPoint', c.viewPoint) + P('CameraDirection', c.direction) + P('CameraUpVector', c.up);
    if (c.kind === 'orthogonal') parts.push('<OrthogonalCamera>' + head + '<ViewToWorldScale>' + f6(c.scale) + '</ViewToWorldScale></OrthogonalCamera>');
    else parts.push('<PerspectiveCamera>' + head + '<FieldOfView>' + f6(c.fov) + '</FieldOfView></PerspectiveCamera>');
  }
  if (vp.clipping?.length) parts.push('<ClippingPlanes>' + vp.clipping.map((p) => '<ClippingPlane>' + P('Location', p.location) + P('Direction', p.direction) + '</ClippingPlane>').join('') + '</ClippingPlanes>');
  parts.push('</VisualizationInfo>');
  return parts.join('');
}

export function markupXml(t, file) {
  const p = ['<?xml version="1.0" encoding="UTF-8"?>', '<Markup>'];
  if (file?.name) p.push('<Header><File' + (file.ifcProject ? ' IfcProject="' + esc(file.ifcProject) + '"' : '') + ' isExternal="true"><Filename>' + esc(file.name) + '</Filename>' + (file.date ? '<Date>' + esc(file.date) + '</Date>' : '') + '</File></Header>');
  p.push('<Topic Guid="' + esc(t.guid) + '"' + (t.type ? ' TopicType="' + esc(t.type) + '"' : '') + (t.status ? ' TopicStatus="' + esc(t.status) + '"' : '') + '>');
  p.push('<Title>' + esc(t.title) + '</Title>', '<CreationDate>' + esc(t.created) + '</CreationDate>', '<CreationAuthor>' + esc(t.author || 'BimCraft') + '</CreationAuthor>');
  if (t.modified) p.push('<ModifiedDate>' + esc(t.modified) + '</ModifiedDate>');
  if (t.description) p.push('<Description>' + esc(t.description) + '</Description>');
  p.push('</Topic>');
  for (const c of t.comments || []) p.push('<Comment Guid="' + esc(c.guid) + '"><Date>' + esc(c.date) + '</Date><Author>' + esc(c.author || 'BimCraft') + '</Author><Comment>' + esc(c.text) + '</Comment>' + (c.viewpoint ? '<Viewpoint Guid="' + esc(c.viewpoint) + '"/>' : '') + '</Comment>');
  (t.viewpoints || []).forEach((vp, i) => {
    const base = i ? 'viewpoint-' + (i + 1) : 'viewpoint';
    p.push('<Viewpoints Guid="' + esc(vp.guid) + '"><Viewpoint>' + base + '.bcfv</Viewpoint>' + (vp.snapshot ? '<Snapshot>' + (i ? 'snapshot-' + (i + 1) : 'snapshot') + '.png</Snapshot>' : '') + '</Viewpoints>');
  });
  p.push('</Markup>');
  return p.join('');
}

export async function writeBcf({ topics, file = null }) {
  const entries = [{ name: 'bcf.version', data: enc.encode('<?xml version="1.0" encoding="UTF-8"?><Version VersionId="2.1"><DetailedVersion>2.1</DetailedVersion></Version>') }];
  for (const t of topics) {
    if (!guidRe.test(t.guid)) throw new Error('topic GUID ' + t.guid);
    entries.push({ name: t.guid + '/markup.bcf', data: enc.encode(markupXml(t, file)) });
    (t.viewpoints || []).forEach((vp, i) => {
      entries.push({ name: t.guid + '/' + (i ? 'viewpoint-' + (i + 1) : 'viewpoint') + '.bcfv', data: enc.encode(viewpointXml(vp)) });
      if (vp.snapshot) entries.push({ name: t.guid + '/' + (i ? 'snapshot-' + (i + 1) : 'snapshot') + '.png', data: vp.snapshot });
    });
  }
  return zip(entries);
}

// ---- read ----
function readViewpoint(doc, notes) {
  const vi = kid(doc, 'VisualizationInfo');
  if (!vi) return null;
  const C = kid(vi, 'Components');
  const selection = kids(kid(C, 'Selection'), 'Component').map((c) => c.attrs.IfcGuid).filter(Boolean).slice(0, 100000);
  const visN = kid(C, 'Visibility');
  const visibility = visN
    ? { defaultVisible: visN.attrs.DefaultVisibility !== 'false', exceptions: kids(kid(visN, 'Exceptions'), 'Component').map((c) => c.attrs.IfcGuid).filter(Boolean).slice(0, 100000) }
    : { defaultVisible: true, exceptions: [] };
  // BCF 2.0 lists components with Visible / Selected attributes
  for (const c of kids(C, 'Component')) {
    if (c.attrs.Selected === 'true' && c.attrs.IfcGuid) selection.push(c.attrs.IfcGuid);
    if (c.attrs.Visible === 'false' && c.attrs.IfcGuid) visibility.exceptions.push(c.attrs.IfcGuid);
  }
  let camera = null;
  const pc = kid(vi, 'PerspectiveCamera'), oc = kid(vi, 'OrthogonalCamera');
  const cam = pc || oc;
  if (cam) {
    const vp = xyz(kid(cam, 'CameraViewPoint')), d = xyz(kid(cam, 'CameraDirection')), up = xyz(kid(cam, 'CameraUpVector'));
    if (vp && d && up) camera = pc ? { kind: 'perspective', viewPoint: vp, direction: norm(d), up: norm(up), fov: num(txt(pc, 'FieldOfView')) || 60 } : { kind: 'orthogonal', viewPoint: vp, direction: norm(d), up: norm(up), scale: num(txt(oc, 'ViewToWorldScale')) || 10 };
    else notes.push('A viewpoint camera is incomplete and was left out.');
  }
  const clipping = kids(kid(vi, 'ClippingPlanes'), 'ClippingPlane').map((p) => ({ location: xyz(kid(p, 'Location')), direction: xyz(kid(p, 'Direction')) })).filter((p) => p.location && p.direction).map((p) => ({ ...p, direction: norm(p.direction) }));
  return { guid: vi.attrs.Guid || '', camera, selection, visibility, clipping, snapshot: null };
}

export async function readBcf(bytes) {
  const files = await unzip(bytes);
  const notes = [];
  const dec = new TextDecoder();
  const xml = (name) => { try { return parseXml(dec.decode(files.get(name))); } catch (e) { notes.push(name + ': ' + e.message); return null; } };
  let version = '';
  if (files.has('bcf.version')) version = kid(xml('bcf.version'), 'Version')?.attrs.VersionId || '';
  const topics = [];
  for (const name of [...files.keys()].filter((n) => /^[^/]+\/markup\.bcf$/.test(n)).sort()) {
    if (topics.length >= MAX_TOPICS) { notes.push('Only the first ' + MAX_TOPICS + ' issues were read.'); break; }
    const folder = name.split('/')[0];
    const m = kid(xml(name), 'Markup');
    const tp = kid(m, 'Topic');
    if (!tp) { notes.push(name + ': no Topic'); continue; }
    const t = {
      guid: tp.attrs.Guid || folder, title: txt(tp, 'Title'), status: tp.attrs.TopicStatus || '', type: tp.attrs.TopicType || '',
      author: txt(tp, 'CreationAuthor'), created: txt(tp, 'CreationDate'), modified: txt(tp, 'ModifiedDate') || null, description: txt(tp, 'Description'),
      comments: [...kids(kid(tp, 'Comments'), 'Comment'), ...kids(m, 'Comment')].map((c) => ({ guid: c.attrs.Guid || '', date: txt(c, 'Date'), author: txt(c, 'Author'), text: txt(c, 'Comment'), viewpoint: kid(c, 'Viewpoint')?.attrs.Guid || null })),
      viewpoints: [],
    };
    const refs = [...kids(m, 'Viewpoints'), ...kids(kid(tp, 'Viewpoints'), 'ViewPoint')].map((v) => ({ guid: v.attrs.Guid || '', file: txt(v, 'Viewpoint'), snap: txt(v, 'Snapshot') }));   // BCF 3.0 (inside Topic: ViewPoint) as well as 2.x
    // BCF 2.0 without a Viewpoints list: the default viewpoint.bcfv / snapshot.png
    if (!refs.length && files.has(folder + '/viewpoint.bcfv')) refs.push({ guid: '', file: 'viewpoint.bcfv', snap: files.has(folder + '/snapshot.png') ? 'snapshot.png' : '' });
    for (const r of refs) {
      const path = folder + '/' + r.file;
      if (!r.file || r.file.includes('..') || !files.has(path)) { if (r.file) notes.push(path + ' is missing'); continue; }
      const vp = readViewpoint(xml(path), notes);
      if (!vp) continue;
      vp.guid = vp.guid || r.guid;
      const sp = r.snap && !r.snap.includes('..') ? folder + '/' + r.snap : null;
      if (sp && files.has(sp)) { const d = files.get(sp); if (d[0] === 0x89 && d[1] === 0x50 || d[0] === 0xff && d[1] === 0xd8) vp.snapshot = d; }
      t.viewpoints.push(vp);
    }
    topics.push(t);
  }
  if (!topics.length && !version) throw new Error('not a BCF file');
  return { version, topics, notes };
}
