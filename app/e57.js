/* SPDX-License-Identifier: Apache-2.0 */
/**
 * e57.js — E57 scans (ASTM E2807) for BimCraft and CadCraft (0.6 PF.1, session `pointcloud`). ONE call, `readE57`, so the
 * 0.7 Rust crate (docs/0.7-PART1.md, cc-e57-rs over the `e57` crate) can replace what is behind it without touching
 * pointcloud.js. Today it is `web-e57` 1.2.0 (assets/vendor/web-e57/<version>/, Apache-2.0; the `e57` crate 0.10.5 compiled
 * to WebAssembly — see its SOURCE.txt: the wrapper's source is not available, so it can't be rebuilt here).
 * Canonical in bimcraft/dev; CadCraft carries a byte-identical copy (`node tools/pointcloud/sync.mjs`).
 *
 * 0.8: `readE57` reads with our own reader first (`decodeE57Native`: no point limit, the pictures come back in `pictures`) and
 * asks web-e57 only for what that refuses as 'unsupported'. `{ native: false }` forces web-e57 (the tests compare the two).
 * Import-free on purpose: in a page this same file is the module Worker that does the reading (a worker has no import
 * map, so the page hands it the pinned URLs of web-e57's glue and .wasm); in Node (tests) the reading runs in-process.
 *
 *   await readE57(file, { budget, signal, progress(f), lib: { glue, wasm, worker } }) → {
 *     scans: [{ name, points (the file's recordCount), fields [prototype names], pose { rotation [w x y z],
 *               translation [x y z] } | null }],
 *     count (points read), kept, xyz Float64Array(kept × 3) absolute metres, poses applied,
 *     rgb Uint8Array(kept × 3) | null, inten Float32Array(kept) | null, min [3], max [3] (of every point read),
 *     images (pictures in the file, left out), crs (coordinateMetadata text) | null, notes: [{ code, n }] }
 *   lib.glue  URL of web-e57's e57_bg.js;  lib.wasm  URL of e57_bg.wasm, or its bytes (Node);  lib.worker  URL of this
 *   file for the Worker (a page: import.meta.resolve('./e57.js')); without a worker (Node, no Worker) it runs here.
 *   Errors carry `code`: 'bad' (web-e57 refused the file: `detail` = its words), 'too_many' (`n` points: more than
 *   E57_MAX_POINTS fit in web-e57's one-string answer), 'empty', 'load' (the library would not start).
 * Points come back evenly thinned to `budget` (a scan's own order, as the other readers keep them). The extra columns
 * web-e57 writes are the scan's colours when the file has colours, else its intensity as grey: taken as intensity then.
 */

/** web-e57 answers with ONE string of "x y z r g b" lines; a JS string holds at most ~512 M characters. */
export const E57_MAX_POINTS = 6e6;

// --------------------------------------------------------------------- the file's XML section
/** A small XML reader: elements, attributes, text and CDATA — enough for E57's XML section (no DTD, no entities but the five). */
export function parseXml(s) {
  const root = { name: '#root', attrs: {}, kids: [], text: '' };
  const stack = [root];
  const ent = (x) => x.replace(/&(lt|gt|amp|quot|apos);/g, (_, e) => ({ lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" })[e]);
  let i = 0;
  while (i < s.length) {
    const lt = s.indexOf('<', i);
    if (lt < 0) break;
    if (lt > i) stack[stack.length - 1].text += ent(s.slice(i, lt));
    if (s.startsWith('<!--', lt)) { i = s.indexOf('-->', lt); i = i < 0 ? s.length : i + 3; continue; }
    if (s.startsWith('<![CDATA[', lt)) { const e = s.indexOf(']]>', lt); stack[stack.length - 1].text += s.slice(lt + 9, e < 0 ? s.length : e); i = e < 0 ? s.length : e + 3; continue; }
    if (s[lt + 1] === '?' || s[lt + 1] === '!') { i = s.indexOf('>', lt); i = i < 0 ? s.length : i + 1; continue; }
    const gt = s.indexOf('>', lt);
    if (gt < 0) break;
    const tag = s.slice(lt + 1, gt);
    i = gt + 1;
    if (tag[0] === '/') { if (stack.length > 1) stack.pop(); continue; }
    const self = tag.endsWith('/');
    const m = /^([^\s/>]+)/.exec(tag);
    const node = { name: m ? m[1] : '', attrs: {}, kids: [], text: '' };
    for (const a of tag.matchAll(/([^\s=]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) node.attrs[a[1]] = ent(a[3] ?? a[4]);
    stack[stack.length - 1].kids.push(node);
    if (!self) stack.push(node);
  }
  return root;
}
const kid = (n, name) => n?.kids.find((k) => k.name === name) || null;
const num = (n) => (n && n.text.trim() !== '' ? Number(n.text) : 0);

/** The scans, pictures and coordinate metadata named in an E57 XML section. */
export function e57Contents(xml) {
  const doc = parseXml(xml);
  const root = kid(doc, 'e57Root');
  if (!root) return null;
  const scans = (kid(root, 'data3D')?.kids || []).filter((k) => k.name === 'vectorChild').map((s) => {
    const pts = kid(s, 'points');
    const pose = kid(s, 'pose');
    const r = kid(pose, 'rotation'), tr = kid(pose, 'translation');
    return {
      name: kid(s, 'name')?.text.trim() || '',
      points: Number(pts?.attrs.recordCount || 0),
      fields: (kid(pts, 'prototype')?.kids || []).map((k) => k.name),
      pose: pose ? { rotation: ['w', 'x', 'y', 'z'].map((a) => (r ? num(kid(r, a)) : a === 'w' ? 1 : 0)), translation: ['x', 'y', 'z'].map((a) => (tr ? num(kid(tr, a)) : 0)) } : null,
    };
  });
  const images = (kid(root, 'images2D')?.kids || []).filter((k) => k.name === 'vectorChild').length;
  const crs = kid(root, 'coordinateMetadata')?.text.trim() || null;
  return { scans, images, crs };
}

// --------------------------------------------------------------------- reading (worker or in-process)
const fail = (code, more = {}) => Object.assign(new Error(code), { code, ...more });

/**
 * web-e57 started on `lib` ({ glue, wasm }): its convertE57. Once per glue module: the glue keeps views of the wasm's
 * memory, so a second instance behind the same (cached) module would read the old one.
 */
const started = new Map();
function start(lib) {
  if (!started.has(lib.glue)) started.set(lib.glue, (async () => {
    try {
      const bg = await import(lib.glue);
      const src = typeof lib.wasm === 'string' ? await (await fetch(lib.wasm)).arrayBuffer() : lib.wasm;
      const { instance } = await WebAssembly.instantiate(src, { './e57_bg.js': bg });
      bg.__wbg_set_wasm(instance.exports);
      return bg.convertE57;
    } catch (e) { started.delete(lib.glue); throw fail('load', { detail: String(e?.message || e) }); }
  })());
  return started.get(lib.glue);
}

/** The whole read, on the bytes of one file. `report(fraction)` as it goes. */
export async function decodeE57(convert, bytes, budget, report = () => {}) {
  let xml;
  try { xml = convert(bytes, 'XML'); } catch (e) { throw fail('bad', { detail: String(e?.message || e) }); }
  const c = e57Contents(xml);
  if (!c) throw fail('bad', { detail: 'no e57Root' });   // i18n-ignore: the format's own element name, shown as {detail}
  const listed = c.scans.reduce((n, s) => n + s.points, 0);
  if (listed > E57_MAX_POINTS) throw fail('too_many', { n: listed });
  if (!listed) throw fail('empty');
  report(0.1);
  let text;
  try { text = convert(bytes, 'XYZ'); } catch (e) { throw fail(/length|memory|allocation/i.test(String(e?.message)) ? 'too_many' : 'bad', { n: listed, detail: String(e?.message || e) }); }
  report(0.6);
  const colour = c.scans.some((s) => s.fields.includes('colorRed'));
  const grey = !colour && c.scans.some((s) => s.fields.includes('intensity'));
  const cap = Math.max(1, Math.min(listed, Math.floor(budget)));
  const rate = Math.min(1, cap / listed);
  const xyz = new Float64Array(cap * 3);
  const rgb = colour ? new Uint8Array(cap * 3) : null;
  const inten = grey ? new Float32Array(cap) : null;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  let read = 0, kept = 0, acc = 0, pos = 0;
  const L = text.length;
  while (pos < L) {
    let end = text.indexOf('\n', pos);
    if (end < 0) end = L;
    if (end > pos) {
      const v = text.slice(pos, end).split(' ');
      const x = +v[0], y = +v[1], z = +v[2];
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
        read++;
        if (x < min[0]) min[0] = x; if (x > max[0]) max[0] = x;
        if (y < min[1]) min[1] = y; if (y > max[1]) max[1] = y;
        if (z < min[2]) min[2] = z; if (z > max[2]) max[2] = z;
        acc += rate;
        if (acc >= 1 && kept < cap) {
          acc -= 1;
          xyz[kept * 3] = x; xyz[kept * 3 + 1] = y; xyz[kept * 3 + 2] = z;
          if (v.length >= 6) {
            if (rgb) { rgb[kept * 3] = +v[3]; rgb[kept * 3 + 1] = +v[4]; rgb[kept * 3 + 2] = +v[5]; }
            else if (inten) inten[kept] = +v[3];
          }
          kept++;
        }
      }
    }
    pos = end + 1;
    if ((read & 262143) === 262143) report(0.6 + 0.4 * Math.min(1, pos / L));
  }
  if (!read) throw fail('empty');
  const notes = [];
  if (c.scans.length > 1) notes.push({ code: 'scans', n: c.scans.length });
  if (read < listed) notes.push({ code: 'invalid', n: listed - read });
  if (c.images) notes.push({ code: 'images', n: c.images });
  if (colour && c.scans.some((s) => s.fields.includes('intensity'))) notes.push({ code: 'intensity', n: 0 });
  return {
    scans: c.scans, count: read, kept, xyz: xyz.subarray(0, kept * 3), rgb: rgb ? rgb.subarray(0, kept * 3) : null,
    inten: inten ? inten.subarray(0, kept) : null, min, max, images: c.images, crs: c.crs, notes,
  };
}


// --------------------------------------------------------------------- our own reader (0.8 PF.1: no point limit, pictures kept)
/**
 * Written from ASTM E2807 (the paged file, the XML section, CompressedVector sections of data packets, the bit-packed
 * codecs); no library. It reads what web-e57 cannot: more than E57_MAX_POINTS points, index packets, the pictures
 * (images2D: the JPEG / PNG blobs with their pose and pinhole numbers). Anything it does not know it refuses with code
 * 'unsupported', and readE57 then asks web-e57. Page checksums (CRC-32C) are not verified: a damaged page shows up as bad numbers.
 */
const PAGE = 1024, PAYLOAD = 1020;
const toLogical = (p) => Math.floor(p / PAGE) * PAYLOAD + (p % PAGE);
const toPhysical = (l) => Math.floor(l / PAYLOAD) * PAGE + (l % PAYLOAD);

function openPaged(bytes) {
  if (bytes.length < 48 || String.fromCharCode(...bytes.subarray(0, 8)) !== 'ASTM-E57') throw fail('bad', { detail: 'not an E57 file' });   // i18n-ignore: technical {detail}
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const big = (o) => Number(dv.getBigUint64(o, true));
  const head = { major: dv.getUint32(8, true), length: big(16), xmlOffset: big(24), xmlLength: big(32), page: big(40) };
  if (head.major !== 1) throw fail('unsupported', { detail: 'E57 major version ' + head.major });   // i18n-ignore: technical {detail}
  if (head.page !== PAGE) throw fail('unsupported', { detail: 'page size ' + head.page });   // i18n-ignore: technical {detail}
  if (head.length > bytes.length || head.length % PAGE) throw fail('bad', { detail: 'the file is cut off (' + bytes.length + ' of ' + head.length + ' bytes)' });   // i18n-ignore: technical {detail}
  /** n logical bytes from logical offset l: a view when inside one page, else a copy. */
  const read = (l, n) => {
    if (!(l >= 0) || !(n >= 0) || toPhysical(l + Math.max(n, 1) - 1) >= head.length) throw fail('bad', { detail: 'a section runs past the end of the file' });   // i18n-ignore: technical {detail}
    const p = toPhysical(l), inPage = PAYLOAD - (l % PAYLOAD);
    if (n <= inPage) return bytes.subarray(p, p + n);
    const out = new Uint8Array(n);
    let got = 0, at = l;
    while (got < n) {
      const q = toPhysical(at), take = Math.min(n - got, PAYLOAD - (at % PAYLOAD));
      out.set(bytes.subarray(q, q + take), got);
      got += take; at += take;
    }
    return out;
  };
  return { head, read, dv };
}

/** Everything the reader needs from the XML section: scans (fields, limits, pose) and pictures. */
export function e57Detail(xml) {
  const doc = parseXml(xml);
  const root = kid(doc, 'e57Root');
  if (!root) return null;
  const nu = (a, d) => (a === undefined || a === '' ? d : Number(a));
  const field = (k) => {
    const a = k.attrs;
    if (k.name === 'cartesianInvalidState' || k.name === 'sphericalInvalidState') { /* an Integer 0..2 like any other */ }
    if (k.attrs.type === 'Float') return { name: k.name, kind: a.precision === 'single' ? 'f32' : 'f64' };
    if (k.attrs.type === 'Integer' || k.attrs.type === 'ScaledInteger') {
      const min = nu(a.minimum, -(2 ** 63)), max = nu(a.maximum, 2 ** 63 - 1);
      let bits = 0;
      while (2 ** bits <= max - min && bits < 64) bits++;
      return { name: k.name, kind: 'int', bits, min, scale: k.attrs.type === 'ScaledInteger' ? nu(a.scale, 1) : 1, offset: k.attrs.type === 'ScaledInteger' ? nu(a.offset, 0) : 0 };
    }
    throw fail('unsupported', { detail: 'field type ' + k.attrs.type });   // i18n-ignore: technical {detail}
  };
  const limits = (node, nameMin, nameMax) => {
    const lo = kid(node, nameMin), hi = kid(node, nameMax);
    return lo && hi ? [num(lo), num(hi)] : null;
  };
  const poseOf = (pose) => {
    if (!pose) return null;
    const r = kid(pose, 'rotation'), tr = kid(pose, 'translation');
    return { rotation: ['w', 'x', 'y', 'z'].map((a) => (r ? num(kid(r, a)) : a === 'w' ? 1 : 0)), translation: ['x', 'y', 'z'].map((a) => (tr ? num(kid(tr, a)) : 0)) };
  };
  const scans = (kid(root, 'data3D')?.kids || []).filter((k) => k.name === 'vectorChild').map((s) => {
    const pts = kid(s, 'points');
    const cl = kid(s, 'colorLimits'), il = kid(s, 'intensityLimits');
    return {
      name: kid(s, 'name')?.text.trim() || '', points: Number(pts?.attrs.recordCount || 0), offset: Number(pts?.attrs.fileOffset || 0),
      fields: (kid(pts, 'prototype')?.kids || []).map(field), pose: poseOf(kid(s, 'pose')),
      colorLimits: cl ? ['Red', 'Green', 'Blue'].map((c) => limits(cl, 'color' + c + 'Minimum', 'color' + c + 'Maximum')) : null,
      intensityLimit: il ? limits(il, 'intensityMinimum', 'intensityMaximum') : null,
    };
  });
  const pictures = [];
  for (const im of (kid(root, 'images2D')?.kids || []).filter((k) => k.name === 'vectorChild')) {
    for (const rep of ['pinholeRepresentation', 'sphericalRepresentation', 'cylindricalRepresentation', 'visualReferenceRepresentation']) {
      const r = kid(im, rep);
      if (!r) continue;
      const blob = kid(r, 'jpegImage') || kid(r, 'pngImage');
      if (!blob) continue;
      pictures.push({
        name: kid(im, 'name')?.text.trim() || '', representation: rep.replace('Representation', ''), mime: blob.name === 'jpegImage' ? 'image/jpeg' : 'image/png',
        width: num(kid(r, 'imageWidth')), height: num(kid(r, 'imageHeight')), offset: Number(blob.attrs.fileOffset || 0), length: Number(blob.attrs.length || 0),
        pose: poseOf(kid(im, 'pose')), focalLength: r.kids.some((k) => k.name === 'focalLength') ? num(kid(r, 'focalLength')) : null,
        pixelWidth: r.kids.some((k) => k.name === 'pixelWidth') ? num(kid(r, 'pixelWidth')) : null, pixelHeight: r.kids.some((k) => k.name === 'pixelHeight') ? num(kid(r, 'pixelHeight')) : null,
      });
      break;
    }
  }
  return { scans, pictures, crs: kid(root, 'coordinateMetadata')?.text.trim() || null, imageCount: (kid(root, 'images2D')?.kids || []).filter((k) => k.name === 'vectorChild').length };
}

/** `bits` (≤ 24) bits at bit position `pos` of `buf`, least significant bit first. */
function bits24(buf, pos, bits) {
  const i = pos >>> 3, sh = pos & 7;
  let v = ((buf[i] | (buf[i + 1] << 8) | (buf[i + 2] << 16) | (buf[i + 3] << 24)) >>> sh) >>> 0;
  if (sh) v = (v | ((buf[i + 4] || 0) << (32 - sh))) >>> 0;   // bits 32.. of the window (a shift by 32 would not shift)
  return bits === 32 ? v : v & (2 ** bits - 1);
}
function readInt(buf, pos, bits) {
  if (bits <= 32) return bits24(buf, pos, bits);
  let r = 0, got = 0;
  while (got < bits) { const take = Math.min(32, bits - got); r += bits24(buf, pos + got, take) * 2 ** got; got += take; }
  return r;
}

const NEEDED = ['cartesianX', 'cartesianY', 'cartesianZ', 'sphericalRange', 'sphericalAzimuth', 'sphericalElevation', 'cartesianInvalidState', 'sphericalInvalidState', 'colorRed', 'colorGreen', 'colorBlue', 'intensity'];

/** The whole read of an E57's bytes, in-process, with no library. Same answer as decodeE57, plus `pictures`. */
export function decodeE57Native(bytes, budget, report = () => {}) {
  const f = openPaged(bytes);
  let xml;
  try { xml = new TextDecoder().decode(f.read(toLogical(f.head.xmlOffset), f.head.xmlLength)); } catch (e) { throw e.code ? e : fail('bad', { detail: String(e?.message || e) }); }
  const c = e57Detail(xml);
  if (!c) throw fail('bad', { detail: 'no e57Root' });   // i18n-ignore: the format's own element name, shown as {detail}
  const listed = c.scans.reduce((n, s) => n + s.points, 0);
  if (!listed) throw fail('empty');
  const has = (n) => c.scans.some((s) => s.fields.some((q) => q.name === n));
  const colour = has('colorRed') && has('colorGreen') && has('colorBlue');
  const grey = !colour && has('intensity');
  const cap = Math.max(1, Math.min(listed, Math.floor(budget)));
  const rate = Math.min(1, cap / listed);
  const xyz = new Float64Array(cap * 3);
  const rgb = colour ? new Uint8Array(cap * 3) : null;
  const inten = grey ? new Float32Array(cap) : null;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  let read = 0, kept = 0, acc = 0, done = 0;
  for (const s of c.scans) {
    if (!s.points) continue;
    const names = s.fields.map((q) => q.name);
    const cart = ['cartesianX', 'cartesianY', 'cartesianZ'].every((n) => names.includes(n));
    const sph = ['sphericalRange', 'sphericalAzimuth', 'sphericalElevation'].every((n) => names.includes(n));
    if (!cart && !sph) { done += s.points; continue; }   // no positions in this scan (the file's own business)
    const R = (() => {
      if (!s.pose) return null;
      let [w, x, y, z] = s.pose.rotation;
      const n = Math.hypot(w, x, y, z) || 1; w /= n; x /= n; y /= n; z /= n;
      return [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)];
    })();
    const T = s.pose?.translation || [0, 0, 0];
    const want = s.fields.map((q) => NEEDED.includes(q.name));
    const colLim = (k) => {
      const q = s.fields.find((z) => z.name === ['colorRed', 'colorGreen', 'colorBlue'][k]);
      if (s.colorLimits?.[k]) return s.colorLimits[k];
      if (q?.kind === 'int') return [q.min * q.scale + q.offset, (q.min + 2 ** q.bits - 1) * q.scale + q.offset];
      return q ? [0, 1] : [0, 255];   // a Float colour with no limits is a fraction
    };
    const iq = s.fields.find((z) => z.name === 'intensity');
    const iLim = s.intensityLimit || (iq?.kind === 'int' ? [iq.min * iq.scale + iq.offset, (iq.min + 2 ** iq.bits - 1) * iq.scale + iq.offset] : [0, 1]);
    // the section header: id, length, where the packets start
    const sec = f.read(toLogical(s.offset), 32);
    const sdv = new DataView(sec.buffer, sec.byteOffset, 32);
    if (sec[0] !== 1) throw fail('bad', { detail: 'a points section has the wrong id' });   // i18n-ignore: technical {detail}
    let at = toLogical(Number(sdv.getBigUint64(16, true)));
    let left = s.points;
    const rest = s.fields.map(() => new Uint8Array(0)), boff = s.fields.map(() => 0);
    const idx = (n) => s.fields.findIndex((q) => q.name === n);
    const I = { x: idx('cartesianX'), y: idx('cartesianY'), z: idx('cartesianZ'), r: idx('sphericalRange'), a: idx('sphericalAzimuth'), e: idx('sphericalElevation'), bad: idx('cartesianInvalidState') >= 0 ? idx('cartesianInvalidState') : idx('sphericalInvalidState'), cr: idx('colorRed'), cg: idx('colorGreen'), cb: idx('colorBlue'), i: idx('intensity') };
    while (left > 0) {
      const h = f.read(at, 4);
      const len = (h[2] | (h[3] << 8)) + 1;
      if (len < 4) throw fail('bad', { detail: 'a packet shorter than its header' });   // i18n-ignore: technical {detail}
      if (h[0] !== 1) { at += len; continue; }   // index and empty packets: skipped
      const pk = f.read(at, len);
      const pdv = new DataView(pk.buffer, pk.byteOffset, pk.byteLength);
      const nb = pdv.getUint16(4, true);
      if (nb !== s.fields.length) throw fail('bad', { detail: 'a packet holds ' + nb + ' streams for ' + s.fields.length + ' fields' });   // i18n-ignore: technical {detail}
      let off = 6 + 2 * nb;
      // a field's bit stream runs on from one packet to the next (a value may start in one packet and end in the next):
      // what was left over is put in front of this packet's bytes
      const bufs = [];
      for (let j = 0; j < nb; j++) {
        const l = pdv.getUint16(6 + 2 * j, true);
        if (off + l > len) throw fail('bad', { detail: 'a stream runs past its packet' });   // i18n-ignore: technical {detail}
        const part = pk.subarray(off, off + l);
        off += l;
        if (rest[j].length) { const m = new Uint8Array(rest[j].length + l); m.set(rest[j]); m.set(part, rest[j].length); bufs.push(m); } else bufs.push(part);
      }
      const size = s.fields.map((q) => (q.kind === 'f64' ? 64 : q.kind === 'f32' ? 32 : q.bits));
      // records in this packet: what every field with bytes can give, at most what is left
      let n = left;
      s.fields.forEach((q, j) => { if (size[j] > 0) n = Math.min(n, Math.floor((bufs[j].length * 8 - boff[j]) / size[j])); });
      const col = (j) => {
        const q = s.fields[j];
        const out = new Float64Array(n);
        if (!want[j]) return out;
        const buf = bufs[j], b0 = boff[j];
        if (q.kind === 'f64' || q.kind === 'f32') {
          const d = new DataView(buf.buffer, buf.byteOffset, buf.byteLength), w = q.kind === 'f64' ? 8 : 4, o0 = b0 >>> 3;
          for (let k = 0; k < n; k++) out[k] = q.kind === 'f64' ? d.getFloat64(o0 + k * w, true) : d.getFloat32(o0 + k * w, true);
        } else if (q.bits === 0) out.fill(q.min * q.scale + q.offset);
        else for (let k = 0; k < n; k++) out[k] = (readInt(buf, b0 + k * q.bits, q.bits) + q.min) * q.scale + q.offset;
        return out;
      };
      const C = {};
      for (const key of Object.keys(I)) if (I[key] >= 0) C[key] = col(I[key]);
      for (let k = 0; k < n; k++) {
        let x, y, z;
        if (cart) { x = C.x[k]; y = C.y[k]; z = C.z[k]; }
        else { const rr = C.r[k], ca = Math.cos(C.e[k]); x = rr * ca * Math.cos(C.a[k]); y = rr * ca * Math.sin(C.a[k]); z = rr * Math.sin(C.e[k]); }
        if (C.bad && C.bad[k] !== 0) continue;
        if (!(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z))) continue;
        if (R) { const X = R[0] * x + R[1] * y + R[2] * z + T[0], Y = R[3] * x + R[4] * y + R[5] * z + T[1], Z = R[6] * x + R[7] * y + R[8] * z + T[2]; x = X; y = Y; z = Z; }
        else { x += T[0]; y += T[1]; z += T[2]; }
        read++;
        if (x < min[0]) min[0] = x; if (x > max[0]) max[0] = x;
        if (y < min[1]) min[1] = y; if (y > max[1]) max[1] = y;
        if (z < min[2]) min[2] = z; if (z > max[2]) max[2] = z;
        acc += rate;
        if (acc >= 1 && kept < cap) {
          acc -= 1;
          xyz[kept * 3] = x; xyz[kept * 3 + 1] = y; xyz[kept * 3 + 2] = z;
          if (rgb && C.cr && C.cg && C.cb) {
            for (const [q, a] of [[0, C.cr], [1, C.cg], [2, C.cb]]) { const L = colLim(q), sp = L[1] - L[0] || 1; rgb[kept * 3 + q] = Math.max(0, Math.min(255, Math.round(((a[k] - L[0]) / sp) * 255))); }
          } else if (inten && C.i) inten[kept] = Math.max(0, Math.min(255, Math.round(((C.i[k] - iLim[0]) / (iLim[1] - iLim[0] || 1)) * 255)));
          kept++;
        }
      }
      for (let j = 0; j < nb; j++) {
        const used = boff[j] + n * size[j];
        rest[j] = bufs[j].subarray(used >>> 3).slice();
        boff[j] = used & 7;
      }
      left -= n; done += n;
      at += len;
      report(Math.min(0.98, done / listed));
    }
  }
  if (!read) throw fail('empty');
  const pictures = [];
  for (const p of c.pictures.slice(0, 64)) {
    try {
      const head = f.read(toLogical(p.offset), 16);
      if (head[0] !== 0) continue;
      const len = Math.min(p.length, Number(new DataView(head.buffer, head.byteOffset, 16).getBigUint64(8, true)));
      const data = f.read(toLogical(p.offset) + 16, len);
      const isJpeg = data[0] === 0xff && data[1] === 0xd8, isPng = data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4e && data[3] === 0x47;
      if ((p.mime === 'image/jpeg' && !isJpeg) || (p.mime === 'image/png' && !isPng)) continue;   // a blob that is not the picture it names (some writers leave zeros)
      pictures.push({ ...p, bytes: data.slice() });
    } catch { /* a picture that is cut off is left out; the note counts what the file lists */ }
  }
  const notes = [];
  if (c.scans.length > 1) notes.push({ code: 'scans', n: c.scans.length });
  if (read < listed) notes.push({ code: 'invalid', n: listed - read });
  if (c.imageCount) notes.push({ code: 'images', n: c.imageCount });
  if (colour && has('intensity')) notes.push({ code: 'intensity', n: 0 });
  return {
    scans: c.scans.map((s) => ({ name: s.name, points: s.points, fields: s.fields.map((q) => q.name), pose: s.pose })), count: read, kept, xyz: xyz.subarray(0, kept * 3),
    rgb: rgb ? rgb.subarray(0, kept * 3) : null, inten: inten ? inten.subarray(0, kept) : null, min, max, images: c.imageCount, pictures, crs: c.crs, notes, reader: 'native',
  };
}

/**
 * Read an E57 file (a File / Blob). In a page with `lib.worker` the reading runs in a module Worker (this file), which is
 * ended on Cancel; otherwise here.
 */
export async function readE57(file, { budget = 2e6, signal = null, progress = null, lib = {}, native = true } = {}) {
  const abortErr = () => Object.assign(new Error('cancelled'), { name: 'AbortError' });
  if (signal?.aborted) throw abortErr();
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (signal?.aborted) throw abortErr();
  if (lib.worker && typeof Worker !== 'undefined') {
    return new Promise((resolve, reject) => {
      const w = new Worker(lib.worker, { type: 'module' });
      const stop = () => { w.terminate(); reject(abortErr()); };
      signal?.addEventListener('abort', stop, { once: true });
      w.onmessage = (e) => {
        const m = e.data;
        if (m.progress !== undefined) { progress?.(m.progress); return; }
        signal?.removeEventListener('abort', stop);
        w.terminate();
        if (m.error) reject(Object.assign(new Error(m.error.code), m.error)); else resolve(m.result);
      };
      w.onerror = (e) => { signal?.removeEventListener('abort', stop); w.terminate(); reject(fail('load', { detail: e.message || 'worker' })); };
      w.postMessage({ bytes, budget, glue: lib.glue, wasm: lib.wasm, native }, [bytes.buffer]);
    });
  }
  return decodeAny(bytes, budget, lib, native, (f) => progress?.(f));
}

/** Our own reader first; web-e57 only for what it refuses as 'unsupported' (and only when the build carries web-e57). */
async function decodeAny(bytes, budget, lib, native, report) {
  if (native) {
    try { return decodeE57Native(bytes, budget, report); }
    catch (e) { if (e.code !== 'unsupported' || !lib?.glue) throw e; }
  }
  const convert = await start(lib);
  return decodeE57(convert, bytes, budget, report);
}

// --------------------------------------------------------------------- as the Worker
if (typeof WorkerGlobalScope !== 'undefined' && typeof self !== 'undefined' && self instanceof WorkerGlobalScope) {
  self.onmessage = async (e) => {
    const { bytes, budget, glue, wasm, native = true } = e.data;
    try {
      const r = await decodeAny(bytes, budget, { glue, wasm }, native, (f) => self.postMessage({ progress: f }));
      const moved = [r.xyz.buffer, r.rgb?.buffer, r.inten?.buffer].filter(Boolean);
      self.postMessage({ result: r }, moved);
    } catch (err) {
      self.postMessage({ error: { code: err.code || 'bad', n: err.n, detail: err.detail || String(err?.message || err) } });
    }
  };
}
