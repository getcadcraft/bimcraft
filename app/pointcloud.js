/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pointcloud.js — point clouds in BimCraft and CadCraft (0.5 SG.1, suggestions #507 and #600). No DOM, no three.js:
 * bin/test-pointcloud.mjs runs all of it in Node. Canonical here in bimcraft/dev; CadCraft carries a byte-identical copy
 * (`node tools/pointcloud/sync.mjs [--check]`, which also copies CivilCraft's las.js / terrain.js / crs.js that this reads
 * LAS and LAZ through — CivilCraft's reader and its laz-perf, never a second LAS reader).
 *
 *   sniffCloud(name, head) → 'las' | 'xyz' | 'ply' | 'pcd' | 'ptx' | 'e57' | null   by signature (LASF, "ply", "# .PCD" /
 *                                                       VERSION, ASTM-E57), else the extension (.las .laz .xyz .pts .ply .pcd .ptx .e57)
 *   nativeError(name, id) · nativeCard(name, id)       a scanner maker's own format (cloud-types.js CLOUD_NATIVE; 0.6 PF.3)
 *   await readCloudInfo(file) → info                   header only (LAS/LAZ/PLY/PCD) or the first 64 KB (text, PTX):
 *     { kind 'las'|'laz'|'xyz'|'ply'|'pcd'|'ptx', name, size, count (exact from a header, an estimate for text/PTX), estimate (bool),
 *       min [3] | null, max [3] | null, color (bool), intensity (bool), classes (bool), crs, code, crsNote,
 *       unit ('m'|'ft'|'ftUS'|null — x and y), zUnit, notes[], las (the las.js header) | null, columns (text) }
 *   await loadCloud(file, info, { budget, signal, progress(fraction), lazPerf }) → cloud
 *     every point is read once; at most `budget` are kept, evenly through the file (a scan's own order, so the kept
 *     points thin it evenly). Positions are float32 RELATIVE to `origin` (file units), so state-plane coordinates keep
 *     their millimetres. cloud = { name, kind, info, read, n, origin [3], pos Float32Array(3n), rgb Uint8Array(3n) | null,
 *     inten Uint16Array(n) | null, cls Uint8Array(n) | null, min [3], max [3] (absolute, of every point read),
 *     classCounts Map(class → points read), unit, zUnit, notes[] }
 *   colorize(cloud, mode, { color }) → Uint8Array(3n)   'rgb' (the file's own; height when it has none) | 'height' |
 *                                                       'intensity' | 'class' | 'single'
 *   sliceOf(cloud, { axis 'x'|'y'|'z', at, thick }) → Uint32Array   points within thick/2 of `at` (absolute file units)
 *   pointAt(cloud, i) → [x, y, z]                        absolute file units
 *   new PlanGrid(cloud, indices | null, cell)           a bucket grid of points in plan (x, y), for snapping:
 *     .nearest(x, y, r) → i | -1                        the point nearest (x, y) within r (absolute file units)
 *   nearestOnScreen(cloud, indices | null, toScreen(x, y, z) → [sx, sy] | null, sx, sy, tol) → i | -1
 *   cloudSummary(cloud) → { read, kept, size [dx, dy, dz], classes [{ c, name, n }] }
 *   UNIT_M { m: 1, ft: 0.3048, ftUS: 1200 / 3937 } · CLOUD_EXT · LIMITS
 *
 * LAS / LAZ: header, coordinate system and LAZ decoding are las.js's (readLasHeader, lazPerf). Each record is read here
 * because the viewer needs more than CivilCraft's terrain import does: intensity (bytes 12–13), the class (formats 0–5
 * low 5 bits of byte 15; 6–10 byte 16) and the colour (formats 2, 3, 5, 7, 8, 10; 16-bit by the spec, but many writers
 * store 0–255 — when no value is over 255 the colours are taken as they are).
 * E57 (0.6 PF.1): through e57.js's one call, readE57 (0.8: our own reader in a Worker, web-e57 only for what it refuses; pictures come back in `pictures`): every scan with
 * its pose applied, colours (or intensity when the file has no colours), the same budget and notes; pictures in the file
 * are left out (said); up to E57_MAX_POINTS points and LIMITS.e57Bytes for now (web-e57 answers in one string).
 * Text clouds: "x y z", "x y z r g b", "x y z i", "x y z i r g b" (PTS: a first line with the count), separated by spaces,
 * tabs, commas or semicolons; lines that are not numbers are skipped and counted.
 * PLY (0.6 PF.2): ascii, binary_little_endian, binary_big_endian 1.0; the `vertex` element's x y z, colour (red green blue,
 * r g b or diffuse_*; 8- or 16-bit, or 0–1 floats) and intensity (intensity, scalar_intensity, reflectance); elements before
 * it are stepped over, faces and anything after it are left out (said). PCD (PCL's format, v0.7 and older): ascii and
 * binary, fields x y z, rgb / rgba (packed), r g b, intensity; points that are not numbers (organised clouds) are skipped and
 * counted; binary_compressed is refused with how to convert it; VIEWPOINT is said, not applied (PCL does not apply it
 * either). PTX (Leica's text export): one or more scans, each `columns, rows, scanner position, its x y z axes, a 4 × 4
 * transform (rows; the last row the translation)` then x y z intensity [r g b] lines in the scanner's frame — every point is
 * transformed (p · M) into the registered frame; points the scanner did not measure (0 0 0) are left out and counted; meters.
 * Intensities are kept as read and turned into 0–65535 at the end: whole numbers in that range as they are, anything else
 * (0–1 floats, PTS's −2048…2047) stretched from its own lowest to highest value.
 */

import { readLasHeader, lazPerf, className } from './las.js';
import { t } from './i18n.js';
import { CLOUD_READ, CLOUD_NATIVE, nativeCloud } from './cloud-types.js';

export const UNIT_M = { m: 1, ft: 0.3048, ftUS: 1200 / 3937 };
export const CLOUD_EXT = CLOUD_READ;
export const LIMITS = { fileBytes: 2000 * 1024 * 1024, textBytes: 400 * 1024 * 1024, e57Bytes: 512 * 1024 * 1024, budget: 20e6 };

const COLOR_AT = { 2: 20, 3: 28, 5: 28, 7: 30, 8: 30, 10: 30 };
const tick = () => new Promise((r) => setTimeout(r, 0));
const aborted = (signal) => { if (signal?.aborted) throw Object.assign(new Error(t('pc.cancelled')), { name: 'AbortError' }); };
const starts = (h, s) => h.length >= s.length && [...s].every((c, i) => h[i] === c.charCodeAt(0));
const BY_EXT = { las: 'las', laz: 'las', xyz: 'xyz', pts: 'xyz', ply: 'ply', pcd: 'pcd', ptx: 'ptx', e57: 'e57' };

export function sniffCloud(name, head) {
  const h = head instanceof Uint8Array ? head : new Uint8Array(head || []);
  if (starts(h, 'LASF')) return 'las';
  if (starts(h, 'ASTM-E57')) return 'e57';
  if (starts(h, 'ply') && (h[3] === 10 || h[3] === 13)) return 'ply';
  if (starts(h, '# .PCD') || starts(h, 'VERSION .7') || starts(h, 'VERSION 0.7')) return 'pcd';
  const ext = String(name || '').split('.').pop().toLowerCase();
  return BY_EXT[ext] || null;
}

// --------------------------------------------------------------------- info
export async function readCloudInfo(file) {
  const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  const native = nativeCloud(file.name, head);
  if (native) throw nativeError(file.name, native);
  const kind = sniffCloud(file.name, head);
  if (!kind) throw new Error(t('pc.not_cloud', { name: file.name }));
  if (kind === 'e57') return e57Info(file);
  if (file.size > LIMITS.fileBytes) throw new Error(t('pc.too_big', { name: file.name, mb: Math.round(file.size / 1048576), max: LIMITS.fileBytes / 1048576 }));
  if (kind === 'las') return lasInfo(file);
  if (kind === 'ply') return plyInfo(file);
  if (kind === 'pcd') return pcdInfo(file);
  if (kind === 'ptx') return ptxInfo(file);
  return textInfo(file);
}
/**
 * A scanner maker's own format (0.6 PF.3): never read. The error carries `code` 'native' and `format` (a CLOUD_NATIVE id);
 * the apps show a card from it (cloud-ui.js, cloud-cad.js): what the file is, how to export E57 or LAS, help point-cloud-formats.
 */
export function nativeError(name, format) {
  return Object.assign(new Error(t('pc.native.short', { name, format: CLOUD_NATIVE[format].name })), { code: 'native', format, userFacing: true });
}
/** The card's words for a native format: { title, body, how } (formats named only in the body, never the title). */
export function nativeCard(name, format) {
  return { title: t('pc.native.title'), body: t('pc.native.body', { name, format: CLOUD_NATIVE[format].name }), how: t(NATIVE_HOW[format]) };
}
const NATIVE_HOW = { rcp: 'pc.native.how.rcp', rcs: 'pc.native.how.rcs', fls: 'pc.native.how.fls', lgs: 'pc.native.how.lgs', tzf: 'pc.native.how.tzf', zfs: 'pc.native.how.zfs' };
/** What a header-less format leaves unknown until the points are read. */
const plain = (file, kind) => ({
  kind, name: file.name, size: file.size, estimate: false, min: null, max: null, classes: false,
  crs: null, code: null, crsNote: t('las.crs.none'), unit: null, zUnit: null, notes: [], las: null, columns: null,
});
/** The start of a file as text (latin1: a header is ASCII, the bytes after it may be binary). */
async function headText(file, max = 1048576) {
  const b = new Uint8Array(await file.slice(0, Math.min(file.size, max)).arrayBuffer());
  let s = '';
  for (let i = 0; i < b.length; i += 8192) s += String.fromCharCode.apply(null, b.subarray(i, i + 8192));
  return s;
}

async function lasInfo(file) {
  // the coordinate system is matched against crs.js's catalog: load it once (a page fetches crs-db.json; tests set it)
  try { const crs = await import('./crs.js'); if (!crs.catalogLoaded()) await crs.loadCatalog(); } catch (e) { /* no catalog: the file's system goes unnamed, said */ }
  if (file.size > LIMITS.fileBytes) throw new Error(t('pc.too_big', { name: file.name, mb: Math.round(file.size / 1048576), max: LIMITS.fileBytes / 1048576 }));
  // las.js refuses files over CivilCraft's terrain limit; a viewer keeps only what it shows, so it may read larger ones
  const h = await readLasHeader(lenient(file, 200 * 1048576));
  if (h.compressed && file.size > 1024 * 1048576) throw new Error(t('pc.laz_too_big', { name: file.name, mb: Math.round(file.size / 1048576) }));
  const xyUnit = h.crs?.unit && h.crs.unit !== 'deg' ? h.crs.unit : null;
  const notes = [...h.notes];
  if (h.crs?.unit === 'deg') notes.push(t('pc.degrees'));
  return {
    kind: h.compressed ? 'laz' : 'las', name: file.name, size: file.size, count: h.compressed ? h.count : h.available, estimate: false,
    min: h.min, max: h.max, color: h.format in COLOR_AT, intensity: true, classes: true,
    crs: h.crs, code: h.code, crsNote: h.crsNote, unit: xyUnit, zUnit: h.zUnit || xyUnit, notes, las: h, columns: null,
    version: h.version, format: h.format,
  };
}
/**
 * The file as las.js sees it: readLasHeader's first look at `size` is its terrain limit (200 MB, CivilCraft keeps the
 * points it imports); a viewer keeps only a budget of points, so that first answer is held under the limit and every
 * later one is the real size (bin/test-pointcloud.mjs reads a 210 MB LAS to keep this honest).
 */
function lenient(file, limit) {
  let asked = 0;
  return { name: file.name, get size() { return asked++ === 0 ? Math.min(file.size, limit) : file.size; }, slice: (a, b) => file.slice(a, b) };
}

const SEP = /[\s,;]+/;
function numbers(line) {
  const parts = line.trim().split(SEP);
  const out = [];
  for (const p of parts) { if (p === '') continue; const v = Number(p); if (!Number.isFinite(v)) return null; out.push(v); }
  return out;
}

async function textInfo(file) {
  if (file.size > LIMITS.textBytes) throw new Error(t('pc.too_big', { name: file.name, mb: Math.round(file.size / 1048576), max: LIMITS.textBytes / 1048576 }));
  const text = new TextDecoder().decode(await file.slice(0, 65536).arrayBuffer());
  const lines = text.split(/\r?\n/);
  if (file.size > 65536) lines.pop();   // the last line may be cut
  let first = 0, declared = null;
  const one = numbers(lines[0] || '');
  if (one && one.length === 1 && Number.isInteger(one[0])) { declared = one[0]; first = 1; }   // PTS count line
  let cols = 0, rows = 0, bytes = 0;
  const counts = new Map();
  for (let i = first; i < lines.length; i++) {
    const v = numbers(lines[i]);
    if (!v || v.length < 3) continue;
    counts.set(v.length, (counts.get(v.length) || 0) + 1);
    rows++; bytes += lines[i].length + 1;
  }
  if (!rows) throw new Error(t('pc.text.none', { name: file.name }));
  cols = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
  const columns = textColumns(cols);
  const estimate = declared === null;
  const count = declared ?? Math.max(rows, Math.round(file.size / Math.max(8, bytes / rows)));
  return {
    kind: 'xyz', name: file.name, size: file.size, count, estimate, min: null, max: null,
    color: columns.rgb >= 0, intensity: columns.i >= 0, classes: false, crs: null, code: null, crsNote: t('las.crs.none'),
    unit: null, zUnit: null, notes: [], las: null, columns,
  };
}
/** Which column is what, from how many there are. */
export function textColumns(n) {
  if (n >= 7) return { n, i: 3, rgb: 4 };    // x y z i r g b (PTS)
  if (n === 6) return { n, i: -1, rgb: 3 };  // x y z r g b
  if (n >= 4) return { n, i: 3, rgb: -1 };   // x y z i
  return { n, i: -1, rgb: -1 };
}

// PLY: the number types, by both of their names
const PLY_TYPES = {
  char: 'Int8', int8: 'Int8', uchar: 'Uint8', uint8: 'Uint8', short: 'Int16', int16: 'Int16', ushort: 'Uint16', uint16: 'Uint16',
  int: 'Int32', int32: 'Int32', uint: 'Uint32', uint32: 'Uint32', float: 'Float32', float32: 'Float32', double: 'Float64', float64: 'Float64',
};
const SIZE = { Int8: 1, Uint8: 1, Int16: 2, Uint16: 2, Int32: 4, Uint32: 4, Float32: 4, Float64: 8 };
const COLOR_NAMES = [['red', 'green', 'blue'], ['r', 'g', 'b'], ['diffuse_red', 'diffuse_green', 'diffuse_blue']];
const INTEN_NAMES = ['intensity', 'scalar_intensity', 'reflectance', 'scalar_reflectance', 'i'];

async function plyInfo(file) {
  const text = await headText(file);
  const end = /end_header[ \t]*\r?\n/.exec(text);
  const bad = (key = 'pc.ply.bad', o = {}) => new Error(t(key, { name: file.name, ...o }));
  if (!end || !/^ply\r?\n/.test(text)) throw bad();
  const lines = text.slice(0, end.index).split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  let format = null;
  const elements = [];
  for (const l of lines.slice(1)) {
    const w = l.split(/\s+/);
    if (w[0] === 'format') format = w[1];
    else if (w[0] === 'element') { const count = Number(w[2]); if (!Number.isInteger(count) || count < 0) throw bad(); elements.push({ name: w[1], count, props: [] }); }
    else if (w[0] === 'property') {
      const el = elements[elements.length - 1];
      if (!el) throw bad();
      if (w[1] === 'list') {
        const ct = PLY_TYPES[w[2]], it = PLY_TYPES[w[3]];
        if (!ct || !it) throw bad('pc.ply.type', { type: !ct ? w[2] : w[3] });
        el.props.push({ name: w[4], list: true, countType: ct, type: it });
      } else {
        const ty = PLY_TYPES[w[1]];
        if (!ty) throw bad('pc.ply.type', { type: w[1] });
        el.props.push({ name: w[2], list: false, type: ty });
      }
    }
  }
  if (!['ascii', 'binary_little_endian', 'binary_big_endian'].includes(format)) throw bad();
  const vi = elements.findIndex((e) => e.name === 'vertex');
  const v = elements[vi];
  const at = (n) => v ? v.props.findIndex((p) => !p.list && p.name.toLowerCase() === n) : -1;
  const xyz = ['x', 'y', 'z'].map(at);
  if (!v || xyz.some((k) => k < 0)) throw bad('pc.ply.no_vertex');
  const rgb = COLOR_NAMES.map((names) => names.map(at)).find((ks) => ks.every((k) => k >= 0)) || null;
  const inten = INTEN_NAMES.map(at).find((k) => k >= 0) ?? -1;
  const info = plain(file, 'ply');
  const faces = elements.slice(vi + 1).reduce((n, e) => n + e.count, 0);
  if (faces) info.notes.push(t('pc.ply.faces', { n: faces, count: faces.toLocaleString('en-US') }));
  return Object.assign(info, {
    count: v.count, color: !!rgb, intensity: inten >= 0,
    ply: { format, little: format !== 'binary_big_endian', elements, vi, xyz, rgb, inten, start: end.index + end[0].length },
  });
}

async function pcdInfo(file) {
  const text = await headText(file, 262144);
  const bad = (key = 'pc.pcd.bad') => new Error(t(key, { name: file.name }));
  const h = {};
  let start = -1, pos = 0;
  for (const raw of text.split('\n')) {
    const l = raw.replace(/\r$/, '').trim();
    pos += raw.length + 1;
    if (!l || l.startsWith('#')) continue;
    const [key, ...rest] = l.split(/\s+/);
    h[key.toUpperCase()] = rest;
    if (key.toUpperCase() === 'DATA') { start = pos; break; }
  }
  if (start < 0 || !h.FIELDS) throw bad();
  const fields = h.FIELDS.map((f) => f.toLowerCase());
  const n = fields.length;
  const size = (h.SIZE || fields.map(() => '4')).map(Number);
  const type = (h.TYPE || fields.map(() => 'F')).map((s) => s.toUpperCase());
  const count = (h.COUNT || fields.map(() => '1')).map(Number);
  if (size.length !== n || type.length !== n || count.length !== n || size.some((s) => ![1, 2, 4, 8].includes(s)) || type.some((s) => !'FIU'.includes(s)) || count.some((c) => !(c >= 1))) throw bad();
  const width = Number(h.WIDTH?.[0]), height = Number(h.HEIGHT?.[0] ?? 1);
  const points = Number(h.POINTS?.[0] ?? width * height);
  if (!Number.isInteger(points) || points < 0) throw bad();
  const data = (h.DATA[0] || '').toLowerCase();
  if (data === 'binary_compressed') throw bad('pc.pcd.compressed');
  if (data !== 'ascii' && data !== 'binary') throw bad();
  const f = (name) => { const k = fields.indexOf(name); return k >= 0 && count[k] === 1 ? k : -1; };
  const xyz = ['x', 'y', 'z'].map(f);
  if (xyz.some((k) => k < 0)) throw bad('pc.pcd.no_xyz');
  const packed = f('rgb') >= 0 ? f('rgb') : f('rgba');
  const split = ['r', 'g', 'b'].map(f);
  const inten = f('intensity') >= 0 ? f('intensity') : f('i');
  // where each field starts in a binary record, and the column it starts at in an ascii line
  const offset = [], column = [];
  let o = 0, c = 0;
  for (let k = 0; k < n; k++) { offset.push(o); column.push(c); o += size[k] * count[k]; c += count[k]; }
  const info = plain(file, 'pcd');
  const vp = (h.VIEWPOINT || []).map(Number);
  if (vp.length === 7 && vp.join(' ') !== '0 0 0 1 0 0 0') info.notes.push(t('pc.pcd.viewpoint'));
  const view = (k) => (type[k] === 'F' ? 'Float' : type[k] === 'U' ? 'Uint' : 'Int') + size[k] * 8;
  return Object.assign(info, {
    count: points, color: packed >= 0 || split.every((k) => k >= 0), intensity: inten >= 0,
    pcd: { data, start, stride: o, columns: c, fields, size, type, count, offset, column, xyz, packed, split: split.every((k) => k >= 0) ? split : null, inten, view: fields.map((_, k) => view(k)) },
  });
}

/** E57 (0.6 PF.1): what the scans hold is only known once e57.js has read the file (loadCloud fills it in). Meters (the format's own unit). */
function e57Info(file) {
  if (file.size > LIMITS.e57Bytes) throw new Error(t('pc.e57.too_big', { name: file.name, mb: Math.round(file.size / 1048576), max: LIMITS.e57Bytes / 1048576 }));
  return Object.assign(plain(file, 'e57'), { count: Math.max(1, Math.round(file.size / 16)), estimate: true, color: true, intensity: true, unit: 'm', zUnit: 'm' });
}

/**
 * Where web-e57 is: a page resolves it through its import map (manifest "web-e57/" → the pinned vendor folder) and runs the
 * reading in a Worker (e57.js itself); Node passes `e57: { glue, wasm }` to loadCloud.
 */
function e57Lib() {
  try { return { glue: import.meta.resolve('web-e57/e57_bg.js'), wasm: import.meta.resolve('web-e57/e57_bg.wasm'), worker: import.meta.resolve('./e57.js') }; }
  catch { return null; }
}
const E57_NOTES = { scans: 'pc.e57.scans', invalid: 'pc.e57.invalid', images: 'pc.e57.images', intensity: 'pc.e57.intensity' };

async function loadE57(file, info, { budget, signal, progress, e57 }) {
  const { readE57, E57_MAX_POINTS } = await import('./e57.js');
  const lib = e57 || e57Lib();
  let r;
  try {
    if (!lib) throw Object.assign(new Error('load'), { code: 'load', detail: 'web-e57 is not mapped' });   // i18n-ignore: a technical {detail} (the build's import map lacks it)
    r = await readE57(file, { budget, signal, progress, lib });
  } catch (e) {
    if (e?.name === 'AbortError') throw Object.assign(new Error(t('pc.cancelled')), { name: 'AbortError' });
    const fill = { name: file.name, detail: e?.detail || e?.message || '', count: Number(e?.n || 0).toLocaleString('en-US'), max: E57_MAX_POINTS.toLocaleString('en-US') };
    if (e?.code === 'too_many') throw new Error(t('pc.e57.too_many', fill));
    if (e?.code === 'empty') throw new Error(t('pc.empty', fill));
    if (e?.code === 'load') throw new Error(t('pc.e57.load', fill));
    throw new Error(t('pc.e57.bad', fill));
  }
  const keep = new Keeper(Math.max(1, r.kept), 1, { rgb: !!r.rgb, inten: !!r.inten });
  for (let k = 0; k < r.kept; k++) {
    keep.want();
    keep.put(r.xyz[k * 3], r.xyz[k * 3 + 1], r.xyz[k * 3 + 2], r.rgb ? r.rgb[k * 3] : 0, r.rgb ? r.rgb[k * 3 + 1] : 0, r.rgb ? r.rgb[k * 3 + 2] : 0, r.inten ? r.inten[k] : 0, 0);
  }
  const box = new Bounds();
  box.min = r.min; box.max = r.max;
  Object.assign(info, { count: r.count, estimate: false, color: !!r.rgb, intensity: !!r.inten, e57: { scans: r.scans, images: r.images } });
  const notes = [...info.notes, ...r.notes.map((x) => t(E57_NOTES[x.code], { n: x.n, count: x.n.toLocaleString('en-US') }))];
  if (r.crs) {   // coordinateMetadata: a WKT names the system (most files leave it empty)
    try {
      const crs = await import('./crs.js');
      if (!crs.catalogLoaded()) await crs.loadCatalog();
      const m = crs.crsFromPrj(r.crs);
      Object.assign(info, { crs: m.crs, code: m.matched?.code ?? null, crsNote: m.matched?.name || m.crs?.name || '' });
    } catch { notes.push(t('pc.e57.crs')); }
  }
  return finish(file, info, keep, box, new Map(), r.count, notes);
}

async function ptxInfo(file) {
  if (file.size > LIMITS.textBytes) throw new Error(t('pc.too_big', { name: file.name, mb: Math.round(file.size / 1048576), max: LIMITS.textBytes / 1048576 }));
  const text = new TextDecoder().decode(await file.slice(0, 65536).arrayBuffer());
  const lines = text.split(/\r?\n/);
  if (file.size > 65536) lines.pop();
  const head = lines.slice(0, 10).map(numbers);
  const shape = [1, 1, 3, 3, 3, 3, 4, 4, 4, 4];
  if (head.length < 10 || head.some((v, k) => !v || v.length !== shape[k]) || !Number.isInteger(head[0][0]) || !Number.isInteger(head[1][0])) throw new Error(t('pc.ptx.bad', { name: file.name }));
  const counts = new Map();
  let rows = 0, bytes = 0;
  for (const l of lines.slice(10)) { const v = numbers(l); if (!v || v.length < 4) continue; counts.set(v.length, (counts.get(v.length) || 0) + 1); rows++; bytes += l.length + 1; }
  const cols = rows ? [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0] : 4;
  const info = plain(file, 'ptx');
  const perScan = head[0][0] * head[1][0];
  return Object.assign(info, {
    count: Math.max(perScan, rows ? Math.round(file.size / Math.max(8, bytes / rows)) : perScan), estimate: true,
    color: cols >= 7, intensity: true, unit: 'm', zUnit: 'm', ptx: { columns: cols },
  });
}

// --------------------------------------------------------------------- loading
/** Keeps at most `cap` points evenly: when full, every other kept point goes and the keep rate halves. */
class Keeper {
  constructor(cap, rate, { rgb, inten, cls }) {
    this.cap = Math.max(1, Math.floor(cap));
    this.rate = Math.min(1, rate);
    this.acc = 0;
    this.n = 0;
    this.x = new Float64Array(this.cap); this.y = new Float64Array(this.cap); this.z = new Float64Array(this.cap);
    this.rgb = rgb ? new Uint16Array(this.cap * 3) : null;
    this.inten = inten ? new Float32Array(this.cap) : null;   // as read; finish() turns it into 0–65535
    this.cls = cls ? new Uint8Array(this.cap) : null;
  }
  want() {
    this.acc += this.rate;
    if (this.acc < 1) return false;
    this.acc -= 1;
    if (this.n === this.cap) this.halve();
    return true;
  }
  halve() {
    let k = 0;
    for (let j = 0; j < this.n; j += 2, k++) {
      this.x[k] = this.x[j]; this.y[k] = this.y[j]; this.z[k] = this.z[j];
      if (this.rgb) { this.rgb[k * 3] = this.rgb[j * 3]; this.rgb[k * 3 + 1] = this.rgb[j * 3 + 1]; this.rgb[k * 3 + 2] = this.rgb[j * 3 + 2]; }
      if (this.inten) this.inten[k] = this.inten[j];
      if (this.cls) this.cls[k] = this.cls[j];
    }
    this.n = k;
    this.rate /= 2;
  }
  put(x, y, z, r, g, b, i, c) {
    const k = this.n++;
    this.x[k] = x; this.y[k] = y; this.z[k] = z;
    if (this.rgb) { this.rgb[k * 3] = r; this.rgb[k * 3 + 1] = g; this.rgb[k * 3 + 2] = b; }
    if (this.inten) this.inten[k] = i;
    if (this.cls) this.cls[k] = c;
  }
}

class Bounds {
  constructor() { this.min = [Infinity, Infinity, Infinity]; this.max = [-Infinity, -Infinity, -Infinity]; this.n = 0; }
  add(x, y, z) {
    this.n++;
    if (x < this.min[0]) this.min[0] = x; if (x > this.max[0]) this.max[0] = x;
    if (y < this.min[1]) this.min[1] = y; if (y > this.max[1]) this.max[1] = y;
    if (z < this.min[2]) this.min[2] = z; if (z > this.max[2]) this.max[2] = z;
  }
}

export async function loadCloud(file, info, { budget = 2e6, signal = null, progress = null, lazPerf: lp = null, e57 = null } = {}) {
  budget = Math.max(1000, Math.min(LIMITS.budget, Math.floor(budget)));
  if (info.kind === 'e57') return loadE57(file, info, { budget, signal, progress, e57 });
  const rate = info.count > 0 ? budget / info.count : 1;
  const keep = new Keeper(budget, rate, { rgb: info.color, inten: info.intensity, cls: info.classes });
  const box = new Bounds();
  const classCounts = new Map();
  const notes = [...info.notes];
  const scan = { xyz: scanText, ply: scanPly, pcd: scanPcd, ptx: scanPtx }[info.kind];
  const read = scan ? await scan(file, info, keep, box, notes, signal, progress)
    : await scanLas(file, info, keep, box, classCounts, notes, signal, progress, lp);
  if (!keep.n) throw new Error(t('pc.empty', { name: file.name }));
  return finish(file, info, keep, box, classCounts, read, notes);
}

function finish(file, info, keep, box, classCounts, read, notes) {
  const n = keep.n;
  // the origin: the low corner of what was read, rounded to a whole unit, so the float32 offsets stay small
  const origin = box.min.map((v) => Math.floor(v));
  const pos = new Float32Array(n * 3);
  for (let k = 0; k < n; k++) { pos[k * 3] = keep.x[k] - origin[0]; pos[k * 3 + 1] = keep.y[k] - origin[1]; pos[k * 3 + 2] = keep.z[k] - origin[2]; }
  let rgb = null;
  if (keep.rgb) {
    let hi = 0;
    for (let k = 0; k < n * 3; k++) if (keep.rgb[k] > hi) hi = keep.rgb[k];
    if (hi === 0) notes.push(t('pc.no_color'));
    else {
      const shift = hi > 255 ? 8 : 0;
      rgb = new Uint8Array(n * 3);
      for (let k = 0; k < n * 3; k++) rgb[k] = keep.rgb[k] >> shift;
    }
  }
  if (read < info.count && (info.kind === 'las' || info.kind === 'laz')) notes.push(t('pc.read_short', { read: read.toLocaleString('en-US'), count: info.count.toLocaleString('en-US') }));
  return {
    name: file.name, kind: info.kind, info, read, n, origin, pos, rgb,
    inten: keep.inten ? intensities(keep.inten, n) : null, cls: keep.cls ? keep.cls.slice(0, n) : null,
    min: box.min, max: box.max, classCounts, unit: info.unit, zUnit: info.zUnit || info.unit, notes,
  };
}

/** Intensities as read → 0–65535: whole numbers in that range stay as they are; others are stretched from lowest to highest. */
function intensities(f, n) {
  let lo = Infinity, hi = -Infinity, whole = true;
  for (let k = 0; k < n; k++) { const v = f[k]; if (v < lo) lo = v; if (v > hi) hi = v; if (whole && v !== Math.round(v)) whole = false; }
  const out = new Uint16Array(n);
  if (whole && lo >= 0 && hi <= 65535) { for (let k = 0; k < n; k++) out[k] = f[k]; return out; }
  const span = hi - lo || 1;
  for (let k = 0; k < n; k++) out[k] = Math.round((f[k] - lo) / span * 65535);
  return out;
}

function recordDecoder(fmt, L, scale, offset) {
  const [sx, sy, sz] = scale, [ox, oy, oz] = offset, ext = fmt >= 6, ca = COLOR_AT[fmt] ?? -1;
  const colorOk = ca >= 0 && ca + 6 <= L;
  return (dv, o, keep, box, classCounts) => {
    const x = dv.getInt32(o, true) * sx + ox, y = dv.getInt32(o + 4, true) * sy + oy, z = dv.getInt32(o + 8, true) * sz + oz;
    const c = ext ? dv.getUint8(o + 16) : dv.getUint8(o + 15) & 31;
    box.add(x, y, z);
    classCounts.set(c, (classCounts.get(c) || 0) + 1);
    if (!keep.want()) return;
    const i = dv.getUint16(o + 12, true);
    if (colorOk) keep.put(x, y, z, dv.getUint16(o + ca, true), dv.getUint16(o + ca + 2, true), dv.getUint16(o + ca + 4, true), i, c);
    else keep.put(x, y, z, 0, 0, 0, i, c);
  };
}

async function scanLas(file, info, keep, box, classCounts, notes, signal, progress, lp) {
  const h = info.las;
  const dec = recordDecoder(h.format, h.recordLength, h.scale, h.offset);
  let read = 0;
  if (!h.compressed) {
    const L = h.recordLength, per = Math.max(1, Math.floor(4 * 1048576 / L)), total = info.count;
    for (let i = 0; i < total; i += per) {
      aborted(signal);
      const n = Math.min(per, total - i), start = h.offsetToPoints + i * L;
      const dv = new DataView(await file.slice(start, start + n * L).arrayBuffer());
      const m = Math.floor(dv.byteLength / L);
      for (let k = 0; k < m; k++) dec(dv, k * L, keep, box, classCounts);
      read += m;
      if (m < n) break;
      if (progress) { progress(read / total); await tick(); }
    }
    return read;
  }
  const M = await (lp || lazPerf());
  const size = file.size, ptr = M._malloc(size);
  if (!ptr) throw new Error(t('las.laz.memory'));
  let laz = null, buf = 0;
  try {
    for (let off = 0; off < size; off += 8 * 1048576) {
      aborted(signal);
      M.HEAPU8.set(new Uint8Array(await file.slice(off, Math.min(size, off + 8 * 1048576)).arrayBuffer()), ptr + off);
      if (progress) progress(0.05 * off / size);
    }
    laz = new M.LASZip();
    try { laz.open(ptr, size); } catch { throw new Error(t('las.bad.laz_open')); }
    const n = Math.min(laz.getCount(), h.count), L = laz.getPointLength();
    if (L < 20) throw new Error(t('las.bad.laz_len'));
    buf = M._malloc(L);
    let heap = M.HEAPU8.buffer, dv = new DataView(heap, buf, L);
    for (let i = 0; i < n; i++) {
      try { laz.getPoint(buf); } catch { notes.push(t('las.laz.stopped', { read: i.toLocaleString('en-US'), n: n.toLocaleString('en-US') })); break; }
      if (M.HEAPU8.buffer !== heap) { heap = M.HEAPU8.buffer; dv = new DataView(heap, buf, L); }
      dec(dv, 0, keep, box, classCounts);
      read++;
      if ((i & 65535) === 65535) { aborted(signal); if (progress) progress(0.05 + 0.95 * i / n); await tick(); }
    }
  } finally {
    if (laz) laz.delete();
    if (buf) M._free(buf);
    M._free(ptr);
  }
  aborted(signal);
  return read;
}

async function scanText(file, info, keep, box, notes, signal, progress) {
  const cols = info.columns, dec = new TextDecoder();
  let rest = '', read = 0, skipped = 0, first = true;
  const CH = 4 * 1048576;
  const line = (s) => {
    if (first) { first = false; const v = numbers(s); if (v && v.length === 1 && Number.isInteger(v[0])) return; }
    const v = numbers(s);
    if (!v || v.length < 3) { if (s.trim()) skipped++; return; }
    const [x, y, z] = v;
    box.add(x, y, z);
    read++;
    if (!keep.want()) return;
    const i = cols.i >= 0 && v.length > cols.i ? v[cols.i] : 0;
    if (cols.rgb >= 0 && v.length > cols.rgb + 2) keep.put(x, y, z, clamp16(v[cols.rgb]), clamp16(v[cols.rgb + 1]), clamp16(v[cols.rgb + 2]), i, 0);
    else keep.put(x, y, z, 0, 0, 0, i, 0);
  };
  for (let off = 0; off < file.size; off += CH) {
    aborted(signal);
    const text = rest + dec.decode(await file.slice(off, off + CH).arrayBuffer(), { stream: off + CH < file.size });
    const parts = text.split(/\r?\n/);
    rest = parts.pop();
    for (const s of parts) line(s);
    if (progress) { progress(Math.min(1, (off + CH) / file.size)); await tick(); }
  }
  if (rest) line(rest);
  if (skipped) notes.push(t('pc.text.skipped', { n: skipped, count: skipped.toLocaleString('en-US') }));
  return read;
}
const clamp16 = (v) => Math.max(0, Math.min(65535, Math.round(v)));

/** Every line of a text file from byte `start`, read in 4 MB pieces; `fn(line)` returning false stops early. */
async function eachLine(file, start, fn, signal, progress) {
  const dec = new TextDecoder(), CH = 4 * 1048576, span = Math.max(1, file.size - start);
  let rest = '';
  for (let off = start; off < file.size; off += CH) {
    aborted(signal);
    const text = rest + dec.decode(await file.slice(off, off + CH).arrayBuffer(), { stream: off + CH < file.size });
    const parts = text.split(/\r?\n/);
    rest = parts.pop();
    for (const s of parts) if (fn(s) === false) return;
    if (progress) { progress(Math.min(1, (off + CH - start) / span)); await tick(); }
  }
  if (rest) fn(rest);
}

/** A binary file read forward in 4 MB pieces: `dv` / `p` are the current piece and place in it. */
class Bytes {
  constructor(file, start) { this.file = file; this.start = start; this.next = start; this.buf = new Uint8Array(0); this.dv = new DataView(this.buf.buffer); this.p = 0; }
  left() { return this.buf.length - this.p; }
  /** Makes at least `n` bytes readable from `p`; false when the file ends first. */
  async fill(n) {
    const keep = this.buf.subarray(this.p);
    const more = new Uint8Array(await this.file.slice(this.next, this.next + Math.max(n - keep.length, 4 * 1048576)).arrayBuffer());
    this.next += more.length;
    const b = new Uint8Array(keep.length + more.length);
    b.set(keep); b.set(more, keep.length);
    this.buf = b; this.dv = new DataView(b.buffer); this.p = 0;
    return b.length >= n;
  }
  async skip(n) { if (n <= this.left()) { this.p += n; return true; } this.next += n - this.left(); this.p = this.buf.length; return this.next <= this.file.size; }
  done() { return Math.min(1, (this.next - this.left() - this.start) / Math.max(1, this.file.size - this.start)); }
}
const get = (dv, o, type, le) => dv['get' + type](o, le);
const fin3 = (x, y, z) => Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z);
/** A colour value as 0–255 (8-bit), 0–65535 (16-bit: finish() shifts it) or a 0–1 float. */
const colorOf = (v, type) => (type === 'Float32' || type === 'Float64') ? clamp16(v * 255) : clamp16(v);

async function scanPly(file, info, keep, box, notes, signal, progress) {
  const P = info.ply, v = P.elements[P.vi], props = v.props;
  const [ix, iy, iz] = P.xyz, rgb = P.rgb, ii = P.inten;
  let read = 0, bad = 0;
  const take = (x, y, z, vals) => {
    if (!fin3(x, y, z)) { bad++; return; }
    box.add(x, y, z);
    read++;
    if (!keep.want()) return;
    keep.put(x, y, z, rgb ? colorOf(vals[rgb[0]], props[rgb[0]].type) : 0, rgb ? colorOf(vals[rgb[1]], props[rgb[1]].type) : 0, rgb ? colorOf(vals[rgb[2]], props[rgb[2]].type) : 0, ii >= 0 ? vals[ii] : 0, 0);
  };
  const vals = new Float64Array(props.length);
  if (P.format === 'ascii') {
    let el = 0, left = P.elements[0]?.count ?? 0;
    while (el < P.vi && left === 0) left = P.elements[++el].count;
    await eachLine(file, P.start, (s) => {
      if (!s.trim()) return;
      if (el < P.vi) { if (--left === 0) { do { left = P.elements[++el].count; } while (el < P.vi && left === 0); } return; }
      if (read + bad >= v.count) return false;
      const w = s.trim().split(/\s+/);
      let c = 0;
      for (let k = 0; k < props.length; k++) {
        if (props[k].list) { c += 1 + Number(w[c]); vals[k] = NaN; } else vals[k] = Number(w[c++]);
      }
      take(vals[ix], vals[iy], vals[iz], vals);
    }, signal, progress);
  } else {
    const le = P.little, s = new Bytes(file, P.start);
    const short = () => { notes.push(t('pc.read_short', { read: read.toLocaleString('en-US'), count: v.count.toLocaleString('en-US') })); };
    /** One record of `pr` (lists stepped over) into `vals`; false at the end of the file. */
    const record = async (pr, out) => {
      for (let k = 0; k < pr.length; k++) {
        const q = pr[k];
        if (q.list) {
          if (s.left() < SIZE[q.countType] && !(await s.fill(SIZE[q.countType]))) return false;
          const m = get(s.dv, s.p, q.countType, le); s.p += SIZE[q.countType];
          if (!(await s.skip(m * SIZE[q.type]))) return false;
          if (out) out[k] = NaN;
        } else {
          if (s.left() < SIZE[q.type] && !(await s.fill(SIZE[q.type]))) return false;
          if (out) out[k] = get(s.dv, s.p, q.type, le);
          s.p += SIZE[q.type];
        }
      }
      return true;
    };
    for (let e = 0; e < P.vi; e++) {   // elements before the vertices: step over them
      const el = P.elements[e];
      if (el.props.every((q) => !q.list)) { if (!(await s.skip(el.count * el.props.reduce((n, q) => n + SIZE[q.type], 0)))) { short(); return read; } }
      else for (let k = 0; k < el.count; k++) if (!(await record(el.props, null))) { short(); return read; }
    }
    const fixed = props.every((q) => !q.list);
    const stride = props.reduce((n, q) => n + (q.list ? 0 : SIZE[q.type]), 0);
    const off = []; props.reduce((o, q) => { off.push(o); return o + SIZE[q.type]; }, 0);
    for (let k = 0; k < v.count; k++) {
      if (fixed) {
        if (s.left() < stride && !(await s.fill(stride))) { short(); return read; }
        for (let j = 0; j < props.length; j++) vals[j] = get(s.dv, s.p + off[j], props[j].type, le);
        s.p += stride;
      } else if (!(await record(props, vals))) { short(); return read; }
      take(vals[ix], vals[iy], vals[iz], vals);
      if ((k & 65535) === 65535) { aborted(signal); if (progress) progress(s.done()); await tick(); }
    }
  }
  if (bad) notes.push(t('pc.nan', { n: bad, count: bad.toLocaleString('en-US') }));
  if (P.format === 'ascii' && read + bad < v.count) notes.push(t('pc.read_short', { read: read.toLocaleString('en-US'), count: v.count.toLocaleString('en-US') }));
  return read;
}

const F32 = new Float32Array(1), U32 = new Uint32Array(F32.buffer);
/** PCL's packed colour: a float (or a whole number) whose bits are 0x(AA)RRGGBB. */
const unpack = (v, isFloat) => { if (isFloat) { F32[0] = v; return U32[0]; } return v >>> 0; };

async function scanPcd(file, info, keep, box, notes, signal, progress) {
  const D = info.pcd, [ix, iy, iz] = D.xyz, pk = D.packed, sp = D.split, ii = D.inten;
  let read = 0, bad = 0;
  /** `u` = a packed colour's bits (0x(AA)RRGGBB), else r g b. */
  const take = (x, y, z, u, r, g, b, i) => {
    if (!fin3(x, y, z)) { bad++; return; }
    box.add(x, y, z);
    read++;
    if (!keep.want()) return;
    if (pk >= 0) keep.put(x, y, z, (u >>> 16) & 255, (u >>> 8) & 255, u & 255, i, 0);
    else keep.put(x, y, z, r, g, b, i, 0);
  };
  if (D.data === 'ascii') {
    await eachLine(file, D.start, (s) => {
      if (read + bad >= info.count) return false;
      const w = s.trim().split(SEP);   // spaces by the format; tabs and commas from some writers too
      if (w.length < D.columns) { if (s.trim()) bad++; return; }
      const n = (k) => Number(w[D.column[k]]);
      const i = ii >= 0 ? n(ii) : 0;
      const col = pk >= 0 ? n(pk) : NaN;
      take(n(ix), n(iy), n(iz), Number.isFinite(col) ? unpack(col, D.type[pk] === 'F') : 0, sp ? clamp16(n(sp[0])) : 0, sp ? clamp16(n(sp[1])) : 0, sp ? clamp16(n(sp[2])) : 0, Number.isFinite(i) ? i : 0);
    }, signal, progress);
  } else {
    const s = new Bytes(file, D.start), L = D.stride, o = D.offset, V = D.view;
    const at = (k) => get(s.dv, s.p + o[k], V[k], true);
    for (let k = 0; k < info.count; k++) {
      if (s.left() < L && !(await s.fill(L))) { notes.push(t('pc.read_short', { read: read.toLocaleString('en-US'), count: info.count.toLocaleString('en-US') })); break; }
      // a packed colour is its bits: read them as a whole number, whatever TYPE says
      const col = pk >= 0 ? s.dv.getUint32(s.p + o[pk], true) : 0;
      const i = ii >= 0 ? at(ii) : 0;
      take(at(ix), at(iy), at(iz), col, sp ? clamp16(at(sp[0])) : 0, sp ? clamp16(at(sp[1])) : 0, sp ? clamp16(at(sp[2])) : 0, Number.isFinite(i) ? i : 0);
      s.p += L;
      if ((k & 65535) === 65535) { aborted(signal); if (progress) progress(s.done()); await tick(); }
    }
  }
  if (bad) notes.push(t('pc.nan', { n: bad, count: bad.toLocaleString('en-US') }));
  return read;
}

async function scanPtx(file, info, keep, box, notes, signal, progress) {
  const shape = [1, 1, 3, 3, 3, 3, 4, 4, 4, 4];
  let read = 0, missing = 0, skipped = 0, scans = 0, head = [], left = 0, M = null, broken = false;
  await eachLine(file, 0, (s) => {
    if (left === 0) {   // a scan's header: ten lines
      if (!s.trim()) return;
      const v = numbers(s);
      if (!v || v.length !== shape[head.length]) { broken = true; return false; }
      head.push(v);
      if (head.length === 10) {
        left = head[0][0] * head[1][0];
        M = head.slice(6);
        head = [];
        scans++;   // a scan of 0 × 0 points: the next header follows at once
      }
      return;
    }
    left--;
    const v = numbers(s);
    if (!v || v.length < 3) { skipped++; return; }
    const [px, py, pz] = v;
    if (px === 0 && py === 0 && pz === 0) { missing++; return; }
    // p · M: the rows are the scanner's axes in the registered frame, the last row its position
    const x = px * M[0][0] + py * M[1][0] + pz * M[2][0] + M[3][0];
    const y = px * M[0][1] + py * M[1][1] + pz * M[2][1] + M[3][1];
    const z = px * M[0][2] + py * M[1][2] + pz * M[2][2] + M[3][2];
    box.add(x, y, z);
    read++;
    if (!keep.want()) return;
    const i = v.length > 3 ? v[3] : 0;
    if (v.length >= 7) keep.put(x, y, z, clamp16(v[4]), clamp16(v[5]), clamp16(v[6]), i, 0);
    else keep.put(x, y, z, 0, 0, 0, i, 0);
  }, signal, progress);
  if (scans > 1) notes.push(t('pc.ptx.scans', { n: scans, count: scans.toLocaleString('en-US') }));
  if (missing) notes.push(t('pc.ptx.missing', { n: missing, count: missing.toLocaleString('en-US') }));
  if (skipped) notes.push(t('pc.text.skipped', { n: skipped, count: skipped.toLocaleString('en-US') }));
  if (broken || head.length) notes.push(t('pc.ptx.stopped', { n: scans + 1 }));
  return read;
}

// --------------------------------------------------------------------- colours
const ramp = [[0.19, 0.29, 0.75], [0.15, 0.62, 0.85], [0.2, 0.7, 0.35], [0.95, 0.8, 0.2], [0.85, 0.25, 0.15]];
function rampAt(f, out, k) {
  const x = Math.max(0, Math.min(1, f)) * (ramp.length - 1), i = Math.min(ramp.length - 2, Math.floor(x)), u = x - i;
  const a = ramp[i], b = ramp[i + 1];
  out[k] = Math.round((a[0] + (b[0] - a[0]) * u) * 255);
  out[k + 1] = Math.round((a[1] + (b[1] - a[1]) * u) * 255);
  out[k + 2] = Math.round((a[2] + (b[2] - a[2]) * u) * 255);
}
/** ASPRS classes as colours (ground earth, vegetation greens, buildings red, water blue, noise grey). */
export const CLASS_COLORS = {
  0: [150, 150, 150], 1: [170, 170, 170], 2: [160, 120, 70], 3: [140, 200, 110], 4: [70, 160, 60], 5: [30, 110, 40],
  6: [215, 70, 50], 7: [110, 110, 110], 8: [240, 200, 40], 9: [50, 110, 220], 10: [120, 80, 160], 11: [90, 90, 100],
  12: [200, 200, 120], 13: [230, 150, 40], 14: [240, 120, 20], 15: [180, 60, 160], 16: [220, 160, 60], 17: [140, 140, 190], 18: [80, 80, 80],
};
/** A value below which `frac` of the values lie (sampled), so a few outliers do not wash the ramp out. */
function quantile(arr, step, offset, frac, n) {
  const pick = [];
  const every = Math.max(1, Math.floor(n / 20000));
  for (let k = 0; k < n; k += every) pick.push(arr[k * step + offset]);
  pick.sort((a, b) => a - b);
  return pick[Math.min(pick.length - 1, Math.max(0, Math.floor(frac * (pick.length - 1))))];
}

export function colorize(cloud, mode = 'rgb', { color = [200, 200, 200] } = {}) {
  const n = cloud.n, out = new Uint8Array(n * 3);
  if (mode === 'rgb' && cloud.rgb) { out.set(cloud.rgb); return out; }
  if (mode === 'single') { for (let k = 0; k < n; k++) out.set(color, k * 3); return out; }
  if (mode === 'class' && cloud.cls) {
    for (let k = 0; k < n; k++) out.set(CLASS_COLORS[cloud.cls[k]] || [200, 200, 200], k * 3);
    return out;
  }
  if (mode === 'intensity' && cloud.inten) {
    const lo = quantile(cloud.inten, 1, 0, 0.02, n), hi = quantile(cloud.inten, 1, 0, 0.98, n) || 1;
    for (let k = 0; k < n; k++) { const g = Math.round(40 + 215 * Math.max(0, Math.min(1, (cloud.inten[k] - lo) / Math.max(1, hi - lo)))); out[k * 3] = g; out[k * 3 + 1] = g; out[k * 3 + 2] = g; }
    return out;
  }
  // height (also rgb without colours, class without classes, intensity without intensity)
  const lo = quantile(cloud.pos, 3, 2, 0.01, n), hi = quantile(cloud.pos, 3, 2, 0.99, n);
  const span = hi - lo || 1;
  for (let k = 0; k < n; k++) rampAt((cloud.pos[k * 3 + 2] - lo) / span, out, k * 3);
  return out;
}
/** The modes a cloud can show (its own colours, intensity and classes only when the file has them). */
export function colorModes(cloud) {
  return ['rgb', 'height', 'intensity', 'class', 'single'].filter((m) => (m === 'rgb' ? !!cloud.rgb : m === 'intensity' ? !!cloud.inten : m === 'class' ? !!cloud.cls && cloud.classCounts.size > 1 : true));
}

// --------------------------------------------------------------------- slices, snapping
const AX = { x: 0, y: 1, z: 2 };
export function sliceOf(cloud, { axis = 'z', at, thick }) {
  const a = AX[axis] ?? 2, c = at - cloud.origin[a], h = Math.abs(thick) / 2;
  const out = [];
  for (let k = 0; k < cloud.n; k++) if (Math.abs(cloud.pos[k * 3 + a] - c) <= h) out.push(k);
  return Uint32Array.from(out);
}
export const pointAt = (cloud, i) => [cloud.pos[i * 3] + cloud.origin[0], cloud.pos[i * 3 + 1] + cloud.origin[1], cloud.pos[i * 3 + 2] + cloud.origin[2]];

/** A bucket grid in plan (x, y) of some of a cloud's points (or all), for the nearest point within a radius. */
export class PlanGrid {
  constructor(cloud, indices = null, cell = 0) {
    this.cloud = cloud;
    const idx = indices || Uint32Array.from({ length: cloud.n }, (_, k) => k);
    const span = Math.max(cloud.max[0] - cloud.min[0], cloud.max[1] - cloud.min[1], 1e-9);
    this.cell = cell > 0 ? cell : Math.max(span / 1024, span / Math.sqrt(Math.max(1, idx.length)) * 2);
    this.map = new Map();
    for (const k of idx) {
      const key = this.key(Math.floor(cloud.pos[k * 3] / this.cell), Math.floor(cloud.pos[k * 3 + 1] / this.cell));
      let b = this.map.get(key);
      if (!b) this.map.set(key, (b = []));
      b.push(k);
    }
    this.size = idx.length;
  }
  key(i, j) { return i * 1048576 + j; }
  nearest(x, y, r) {
    const c = this.cloud, lx = x - c.origin[0], ly = y - c.origin[1];
    const i0 = Math.floor((lx - r) / this.cell), i1 = Math.floor((lx + r) / this.cell);
    const j0 = Math.floor((ly - r) / this.cell), j1 = Math.floor((ly + r) / this.cell);
    if ((i1 - i0 + 1) * (j1 - j0 + 1) > 40000) return -1;   // a radius far bigger than the points: nothing sensible to snap to
    let best = -1, bd = r * r;
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const b = this.map.get(this.key(i, j));
      if (!b) continue;
      for (const k of b) { const dx = c.pos[k * 3] - lx, dy = c.pos[k * 3 + 1] - ly, d = dx * dx + dy * dy; if (d <= bd) { bd = d; best = k; } }
    }
    return best;
  }
}

export function nearestOnScreen(cloud, indices, toScreen, sx, sy, tol) {
  let best = -1, bd = tol * tol;
  const o = cloud.origin, p = cloud.pos;
  const visit = (k) => {
    const q = toScreen(p[k * 3] + o[0], p[k * 3 + 1] + o[1], p[k * 3 + 2] + o[2]);
    if (!q) return;
    const dx = q[0] - sx, dy = q[1] - sy, d = dx * dx + dy * dy;
    if (d <= bd) { bd = d; best = k; }
  };
  if (indices) for (const k of indices) visit(k); else for (let k = 0; k < cloud.n; k++) visit(k);
  return best;
}

export function cloudSummary(cloud) {
  const classes = [...cloud.classCounts.entries()].sort((a, b) => a[0] - b[0]).map(([c, n]) => ({ c, name: className(c) || t('pc.class.other', { c }), n }));
  return { read: cloud.read, kept: cloud.n, size: [0, 1, 2].map((a) => cloud.max[a] - cloud.min[a]), classes };
}
