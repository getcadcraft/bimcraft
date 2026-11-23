/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rvt-reader.js — reads what can honestly be read from a Revit file (.rvt, .rfa, .rte, .rft)
 * without Autodesk software. The file is an OLE compound file; its model data is an
 * undocumented, compressed format we do not touch. What we read:
 *
 *   BasicFileInfo       UTF-16 "Key: value" lines — release, build, worksharing, last save path…
 *   ProjectInformation  a one-entry zip holding Project Information parameters as Atom XML
 *   PartAtom            Atom XML for families — title, category, family parameters
 *   TransmissionData    UTF-16 XML list of external references (links, keynotes, CAD imports)
 *   RevitPreview4.0     the preview picture Revit saves, as a PNG after a small header
 *
 * Pure: no DOM, no dependencies. Input is a File/Blob (browser: read by byte range, so a
 * 190 MB central model on a network drive costs ~100 KB of reads) or a Uint8Array (tests).
 * bin/test-bimcraft.mjs runs this exact file.
 *
 *   const info = await readRevit(file, 'House.rvt');
 *   const ok = await checkCompoundFile(file);   // header-only: {ok} | {ok:false, code:'truncated', …}
 *
 * A file cut off mid-copy (its own index points past its end) throws code 'truncated'. With
 * readRevit(file, name, { partial: true }) it opens instead as far as it is really there: the result
 * has `partial: true`, `incomplete` {message, size, expectedAtLeast}, `recovered` (streams with every
 * byte present, parsed as usual) and `missing` (the rest: "not in the file"). Nothing is filled in.
 */

import { t } from "./i18n.js";

const OLE_MAGIC = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1];

export function isOleFile(bytes) {
  return bytes.length >= 8 && OLE_MAGIC.every((b, i) => bytes[i] === b);
}

/** A random-access byte source over a Uint8Array or a Blob/File. */
export function toSource(input) {
  if (input instanceof Uint8Array) {
    return { size: input.length, read: async (o, n) => input.subarray(o, Math.min(o + n, input.length)) };
  }
  if (input && typeof input.slice === 'function' && typeof input.size === 'number') {
    return { size: input.size, read: async (o, n) => new Uint8Array(await input.slice(o, Math.min(o + n, input.size)).arrayBuffer()) };
  }
  throw new Error('readRevit needs a File, Blob or Uint8Array.');   // i18n-ignore: developer error (wrong argument type)
}

/**
 * `partial: true` — a file cut off mid-copy is read as far as it is really there (readRevitPartial)
 * instead of failing; the result then has `partial: true`. Without it a cut-off file throws
 * (code 'truncated'), as callers that pick a sound copy (folder-scan.js) expect.
 */
export async function readRevit(input, fileName = '', { partial = false } = {}) {
  const src = toSource(input);
  const head = await src.read(0, 512);
  if (!isOleFile(head)) throw new Error('This is not a Revit file: it is not an OLE compound file.');   // i18n-ignore: tools/library/convert.mjs prints this and loads no language file (reported; key rvt.err.not_revit is ready)
  let cfb;
  try {
    cfb = await openCompoundFile(src, head);
  } catch (e) {
    if (partial && e.code === 'truncated') return readRevitPartial(src, head, fileName, e);
    throw e;
  }

  const basicBytes = await cfb.stream('BasicFileInfo');
  if (!basicBytes) throw new Error('This compound file has no BasicFileInfo stream, so it is not a Revit file.');   // i18n-ignore: tools/library/convert.mjs prints this and loads no language file (reported; key rvt.err.no_basic is ready)

  const ext = (fileName.split('.').pop() || '').toLowerCase();
  const basic = parseBasicFileInfo(basicBytes);
  const partAtomBytes = await cfb.stream('PartAtom');
  const projBytes = await cfb.stream('ProjectInformation');
  const transBytes = await cfb.stream('TransmissionData');
  const previewBytes = await cfb.stream('RevitPreview4.0');

  let project = null;
  if (projBytes) {
    try { project = parseAtom(await unzipFirst(projBytes)); } catch (e) { project = null; }
  }
  const family = partAtomBytes ? parseAtom(new TextDecoder('utf-8').decode(partAtomBytes)) : null;

  return {
    fileName,
    size: src.size,
    kind: kindOf(ext, !!partAtomBytes),
    release: basic.release,
    basic,
    project,
    family,
    references: transBytes ? parseTransmission(transBytes) : [],
    preview: previewBytes ? extractPng(previewBytes) : null,
    streams: cfb.entries.filter((d) => d.type === 2).length,
    bytesRead: cfb.bytesRead(),
    partial: false,
  };
}

/**
 * A cut-off file: read only what is in it. `cut` is the 'truncated' error the full open threw; its
 * message (the incomplete-file wording) goes into the result unchanged. Each known stream is parsed
 * only when every byte of it is present; nothing is filled in for missing sectors. Throws (code
 * 'truncated', `unreadable: true`) when not even the file's list of contents survived.
 */
async function readRevitPartial(src, head, fileName, cut) {
  const cfb = await openPartialCompoundFile(src, head, cut);
  const ext = (fileName.split('.').pop() || '').toLowerCase();
  const notes = [];
  const get = async (name) => (cfb.recovered.some((s) => s.path === name) ? cfb.read(name) : null);
  const parse = (name, fn) => { try { return fn(); } catch (e) { notes.push(t('rvt.note.unreadable', { stream: name, error: e.message })); return null; } };

  const basicBytes = await get('BasicFileInfo');
  const partAtomBytes = await get('PartAtom');
  const projBytes = await get('ProjectInformation');
  const transBytes = await get('TransmissionData');
  const previewBytes = await get('RevitPreview4.0');
  const basic = (basicBytes && parse('BasicFileInfo', () => parseBasicFileInfo(basicBytes))) || { lines: [], release: null };
  let project = null;
  if (projBytes) {
    try { project = parseAtom(await unzipFirst(projBytes)); } catch (e) { notes.push(t('rvt.note.unreadable', { stream: 'ProjectInformation', error: e.message })); }
  }
  const family = partAtomBytes ? parse('PartAtom', () => parseAtom(new TextDecoder('utf-8').decode(partAtomBytes))) : null;

  return {
    fileName,
    size: src.size,
    kind: kindOf(ext, !!partAtomBytes),
    release: basic.release,
    basic,
    project,
    family,
    references: transBytes ? (parse('TransmissionData', () => parseTransmission(transBytes)) || []) : [],
    preview: previewBytes ? parse('RevitPreview4.0', () => extractPng(previewBytes)) : null,
    streams: cfb.recovered.length + cfb.missing.length,
    bytesRead: cfb.bytesRead(),
    partial: true,
    incomplete: { message: cut.message, size: src.size, expectedAtLeast: cut.expectedAtLeast },
    recovered: cfb.recovered,                     // [{path, size}] every byte present
    missing: cfb.missing,                         // [{path, size, why}] listed as "not in the file"
    directory: cfb.directory,                     // {complete, entries}
    notes,
  };
}

/**
 * Header-only health check (512 bytes): is the file long enough for its own index?
 * Catches files cut off by a failed copy, upload or sync without reading them.
 */
export async function checkCompoundFile(input) {
  const src = toSource(input);
  const head = await src.read(0, 512);
  if (!isOleFile(head)) return { ok: false, code: 'not_ole', message: t('rvt.err.not_ole') };
  try {
    await openCompoundFile(src, head, { headerOnly: true });
    return { ok: true };
  } catch (e) {
    return { ok: false, code: e.code || 'error', message: e.message, expectedAtLeast: e.expectedAtLeast || null };
  }
}

/**
 * Minimal MS-CFB (OLE compound file) reader — [MS-CFB] is an open Microsoft specification.
 * Reads the header, FAT (via the DIFAT), directory and mini FAT, then hands out streams by
 * name. Reads are byte ranges, neighbouring sectors merged into one read. Every chain walk is
 * bounded, so a corrupt or hostile file ends in an error, not a hang.
 */
const ENDOFCHAIN = 0xfffffffe;
const FREESECT = 0xffffffff;
const MAXREGSECT = 0xfffffffa;
const NOSTREAM = 0xffffffff;

export async function openCompoundFile(src, head, { headerOnly = false } = {}) {
  head = head || await src.read(0, 512);
  let bytesRead = head.length;
  const read = async (o, n) => { const b = await src.read(o, n); bytesRead += b.length; return b; };
  const hv = new DataView(head.buffer, head.byteOffset, head.byteLength);
  const u32 = (o) => hv.getUint32(o, true);
  const sectorShift = hv.getUint16(0x1e, true);
  const miniShift = hv.getUint16(0x20, true);
  if (sectorShift !== 9 && sectorShift !== 12) throw new Error('Unsupported compound file sector size.');   // i18n-ignore: tools/library/convert.mjs prints this and loads no language file (reported; key rvt.err.sector_size is ready)
  const ss = 1 << sectorShift;
  const miniSize = 1 << miniShift;
  const maxSectors = Math.ceil(src.size / ss) + 1;
  const offsetOf = (sec) => (sec + 1) * ss;

  // A file cut off mid-copy/upload/sync keeps its header, so its index points past the end.
  // Say that plainly instead of failing later with a broken chain.
  const truncated = (sector) => {
    const need = offsetOf(sector) + ss;
    const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
    // tools/library/convert.mjs prints this and loads no language file (reported; key rvt.err.truncated is ready).
    const err = new Error('This file is incomplete: it is ' + mb(src.size) + ', but its own index points to data '   // i18n-ignore: see above
      + 'at least ' + mb(need) + ' in. It was probably cut off while being copied, uploaded or synced (a cloud-drive '   // i18n-ignore: see above
      + '"online-only" file does this too). Copy the original again and reopen it.');   // i18n-ignore: see above
    err.code = 'truncated';
    err.expectedAtLeast = need;
    err.sizeText = mb(src.size);   // kept so a later message can restate the sizes in one sentence
    err.needText = mb(need);
    return err;
  };
  const fits = (sector) => offsetOf(sector) + ss <= src.size;

  // FAT sector numbers: 109 in the header, the rest in the DIFAT chain.
  const fatSectors = [];
  for (let i = 0; i < 109; i++) {
    const s = u32(0x4c + i * 4);
    if (s === FREESECT || s === ENDOFCHAIN) break;
    fatSectors.push(s);
  }
  const firstMiniFat = u32(0x3c);
  const headerIndex = [...fatSectors, u32(0x30)];
  if (u32(0x40) && firstMiniFat !== ENDOFCHAIN) headerIndex.push(firstMiniFat);
  const furthest = Math.max(...headerIndex);
  if (!fits(furthest)) throw truncated(furthest);

  let dif = u32(0x44);
  for (let guard = 0; dif !== ENDOFCHAIN && dif !== FREESECT && guard < maxSectors; guard++) {
    if (!fits(dif)) throw truncated(dif);
    const b = await read(offsetOf(dif), ss);
    const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
    for (let i = 0; i < ss / 4 - 1; i++) {
      const s = dv.getUint32(i * 4, true);
      if (s === FREESECT || s === ENDOFCHAIN) continue;
      if (!fits(s)) throw truncated(s);
      fatSectors.push(s);
    }
    dif = dv.getUint32(ss - 4, true);
  }
  if (headerOnly) return { bytesRead: () => bytesRead };

  /** Read whole sectors (in order) with one read per run of neighbouring sectors. */
  const readSectors = async (list) => {
    const out = new Uint8Array(list.length * ss);
    for (let i = 0; i < list.length;) {
      let j = i + 1;
      while (j < list.length && list[j] === list[j - 1] + 1) j++;
      const b = await read(offsetOf(list[i]), (j - i) * ss);
      out.set(b, i * ss);
      i = j;
    }
    return out;
  };

  const fat = new Uint32Array((await readSectors(fatSectors)).buffer);
  // The index can fit while the data does not (cut off after the FAT): every sector the FAT marks
  // as used must be in the file, or the reads below would come back short and be padded with zeros.
  for (let s = fat.length - 1; s >= 0; s--) {
    if (fat[s] === FREESECT) continue;
    if (!fits(s)) throw truncated(s);
    break;
  }

  const chain = (start, table, limit) => {
    const out = [];
    for (let s = start; s !== ENDOFCHAIN && s !== FREESECT; s = table[s]) {
      if (s >= table.length || out.length > limit) throw new Error('Broken sector chain in the compound file.');   // i18n-ignore: tools/library/convert.mjs prints this and loads no language file (reported; key rvt.err.broken_chain is ready)
      out.push(s);
    }
    return out;
  };
  const readChain = async (start, size) => {
    const sectors = chain(start, fat, maxSectors).slice(0, Math.ceil(size / ss));
    return (await readSectors(sectors)).subarray(0, size);
  };

  // Directory: 128-byte entries along the directory chain.
  const dirBytes = await readSectors(chain(u32(0x30), fat, maxSectors));
  const dv = new DataView(dirBytes.buffer, dirBytes.byteOffset, dirBytes.byteLength);
  const entries = [];
  for (let o = 0; o + 128 <= dirBytes.length; o += 128) {
    const nameLen = dv.getUint16(o + 0x40, true);
    const type = dirBytes[o + 0x42];
    if (type === 0 || nameLen < 2 || nameLen > 64) { entries.push({ type: 0 }); continue; }
    const name = new TextDecoder('utf-16le').decode(dirBytes.subarray(o, o + nameLen - 2));
    entries.push({ name, type, start: dv.getUint32(o + 0x74, true), size: dv.getUint32(o + 0x78, true) });
  }
  const root = entries[0];
  const cutoff = u32(0x38) || 4096;

  // Mini stream: small streams live in 64-byte mini sectors inside the root entry's chain.
  // Only the mini sectors a stream uses are read, not the whole mini stream.
  let miniFat = null, rootChain = null;
  const mini = async () => {
    if (miniFat) return;
    const n = u32(0x40);
    miniFat = n ? new Uint32Array((await readChain(firstMiniFat, n * ss)).buffer.slice(0)) : new Uint32Array(0);
    rootChain = root && root.type === 5 ? chain(root.start, fat, maxSectors) : [];
  };

  return {
    entries,
    bytesRead: () => bytesRead,
    async stream(name) {
      const d = entries.find((e) => e.type === 2 && e.name === name);
      if (!d || !d.size) return null;
      if (d.size >= cutoff) return readChain(d.start, d.size);
      await mini();
      const perSector = ss / miniSize;
      const minis = chain(d.start, miniFat, rootChain.length * perSector + 1).slice(0, Math.ceil(d.size / miniSize));
      // Map each mini sector to the regular sector holding it; read those sectors once each.
      const need = [...new Set(minis.map((m) => rootChain[Math.floor(m / perSector)]))];
      if (need.some((s) => s === undefined)) throw new Error('Broken mini stream in the compound file.');   // i18n-ignore: tools/library/convert.mjs prints this and loads no language file (reported; key rvt.err.broken_mini is ready)
      const pos = new Map();
      const got = await readSectors(need);
      need.forEach((s, i) => pos.set(s, i * ss));
      const out = new Uint8Array(d.size);
      let w = 0;
      for (const m of minis) {
        const base = pos.get(rootChain[Math.floor(m / perSector)]) + (m % perSector) * miniSize;
        const n = Math.min(miniSize, d.size - w);
        out.set(got.subarray(base, base + n), w);
        w += n;
      }
      return out;
    },
  };
}

/**
 * The same MS-CFB structures, read from a file that was cut off. Only bytes inside the file are
 * used: a FAT or mini FAT sector beyond the cut leaves its links unknown, a chain stops at the
 * first unknown link, and a stream is "recovered" only when its place in the directory tree is
 * known and every byte of it is present. Everything else in the directory is listed as missing.
 *   → { recovered [{path, size}], missing [{path, size, why}], directory {complete, entries},
 *       read(path) → bytes of a recovered stream, bytesRead() }
 */
export async function openPartialCompoundFile(src, head, cut = null) {
  head = head || await src.read(0, 512);
  let bytesRead = head.length;
  const read = async (o, n) => { const b = await src.read(o, n); bytesRead += b.length; return b; };
  const hv = new DataView(head.buffer, head.byteOffset, head.byteLength);
  const u32 = (o) => hv.getUint32(o, true);
  const sectorShift = hv.getUint16(0x1e, true);
  if (sectorShift !== 9 && sectorShift !== 12) throw new Error(t('rvt.err.sector_size'));
  const ss = 1 << sectorShift;
  const miniSize = 1 << hv.getUint16(0x20, true);
  const per = ss / 4;                                   // links per FAT / mini FAT sector
  const offsetOf = (sec) => (sec + 1) * ss;
  const has = (sec, n = ss) => sec <= MAXREGSECT && offsetOf(sec) + n <= src.size;

  // FAT sector numbers: header, then DIFAT sectors as long as they are in the file.
  const fatSectors = [];
  for (let i = 0; i < 109; i++) {
    const s = u32(0x4c + i * 4);
    if (s === FREESECT || s === ENDOFCHAIN) break;
    fatSectors.push(s);
  }
  for (let dif = u32(0x44), guard = 0; dif !== ENDOFCHAIN && dif !== FREESECT && has(dif) && guard < 1 << 20; guard++) {
    const b = await read(offsetOf(dif), ss);
    const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
    for (let i = 0; i < per - 1; i++) {
      const s = dv.getUint32(i * 4, true);
      if (s !== FREESECT && s !== ENDOFCHAIN) fatSectors.push(s);
    }
    dif = dv.getUint32(ss - 4, true);
  }
  // Links of FAT sectors beyond the cut stay unknown (undefined), never guessed.
  const fat = new Uint32Array(fatSectors.length * per);
  const fatKnown = fatSectors.map(() => false);
  for (let i = 0; i < fatSectors.length; i++) {
    if (!has(fatSectors[i])) continue;
    const b = await read(offsetOf(fatSectors[i]), ss);
    fat.set(new Uint32Array(b.slice().buffer), i * per);
    fatKnown[i] = true;
  }
  const next = (s) => (s < fat.length && fatKnown[Math.floor(s / per)] ? fat[s] : undefined);
  /** Follow a chain for up to `want` entries. `known` false = it goes on, but we can't see where. */
  const walk = (start, want, nextOf, limit) => {
    const list = [], seenHere = new Set();
    let s = start;
    while (list.length < want) {
      if (s === ENDOFCHAIN || s === FREESECT) return { list, known: true };
      if (s > MAXREGSECT || list.length > limit || seenHere.has(s)) return { list, known: false, broken: true };
      list.push(s);
      seenHere.add(s);
      if (list.length === want) break;
      s = nextOf(s);
      if (s === undefined) return { list, known: false };
    }
    return { list, known: true };
  };
  const limit = fat.length + 1;

  // Directory: every sector of its chain that we can locate and that is in the file.
  const dirChain = walk(u32(0x30), Infinity, next, limit);
  const entries = [];
  let dirPresent = 0;
  for (let k = 0; k < dirChain.list.length; k++) {
    const sec = dirChain.list[k];
    const base = k * (ss / 128);
    if (!has(sec)) continue;
    dirPresent++;
    const b = await read(offsetOf(sec), ss);
    const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
    for (let o = 0; o + 128 <= b.length; o += 128) {
      const nameLen = dv.getUint16(o + 0x40, true);
      const type = b[o + 0x42];
      if (type === 0 || nameLen < 2 || nameLen > 64) continue;
      entries[base + o / 128] = {
        name: new TextDecoder('utf-16le').decode(b.subarray(o, o + nameLen - 2)), type,
        left: dv.getUint32(o + 0x44, true), right: dv.getUint32(o + 0x48, true), child: dv.getUint32(o + 0x4c, true),
        start: dv.getUint32(o + 0x74, true), size: dv.getUint32(o + 0x78, true),
      };
    }
  }
  const root = entries[0];
  if (!root || root.type !== 5) {
    const err = new Error(cut && cut.sizeText
      ? t('rvt.err.truncated.unreadable', { size: cut.sizeText, need: cut.needText })
      : t('rvt.err.incomplete.unreadable'));
    err.code = 'truncated';
    err.unreadable = true;
    err.expectedAtLeast = cut ? cut.expectedAtLeast : null;
    throw err;
  }

  // Paths: walk the red-black trees from the root. A link to an entry we don't have = part of that storage is lost.
  const paths = new Map();
  const seen = new Set();
  const stack = [[root.child, '']];
  while (stack.length) {
    const [id, prefix] = stack.pop();
    if (id === NOSTREAM || seen.has(id)) continue;
    seen.add(id);
    const e = entries[id];
    if (!e) continue;
    paths.set(id, prefix + e.name);
    stack.push([e.left, prefix], [e.right, prefix]);
    if (e.type === 1) stack.push([e.child, prefix + e.name + '/']);
  }

  // Mini stream: the mini FAT sectors in the file, and the root chain as far as its links are known.
  const cutoff = u32(0x38) || 4096;
  const miniChain = walk(u32(0x3c), u32(0x40), next, limit);
  const miniFat = new Uint32Array(miniChain.list.length * per);
  const miniKnown = miniChain.list.map(() => false);
  for (let k = 0; k < miniChain.list.length; k++) {
    if (!has(miniChain.list[k])) continue;
    const b = await read(offsetOf(miniChain.list[k]), ss);
    miniFat.set(new Uint32Array(b.slice().buffer), k * per);
    miniKnown[k] = true;
  }
  const nextMini = (m) => (m < miniFat.length && miniKnown[Math.floor(m / per)] ? miniFat[m] : undefined);
  const rootChain = walk(root.start, Math.ceil(root.size / ss), next, limit).list;
  const perMini = ss / miniSize;

  /** Where every byte of a stream lies: [[offset, length]…], or null with the reason it isn't all here. */
  const locate = (e) => {
    if (!e.size) return { parts: [] };
    if (e.size >= cutoff) {
      const want = Math.ceil(e.size / ss);
      const c = walk(e.start, want, next, limit);
      if (c.list.length < want) return { why: c.known ? t('rvt.why.chain_short') : t('rvt.why.index_missing') };
      const parts = c.list.map((s, i) => [offsetOf(s), Math.min(ss, e.size - i * ss)]);
      return parts.every(([o, n]) => o + n <= src.size) ? { parts } : { why: t('rvt.why.data_missing') };
    }
    const want = Math.ceil(e.size / miniSize);
    const c = walk(e.start, want, nextMini, miniFat.length + 1);
    if (c.list.length < want) return { why: t('rvt.why.index_missing') };
    const parts = [];
    for (let i = 0; i < want; i++) {
      const m = c.list[i];
      const sec = rootChain[Math.floor(m / perMini)];
      if (sec === undefined) return { why: t('rvt.why.data_missing') };
      const o = offsetOf(sec) + (m % perMini) * miniSize;
      if (o + miniSize > src.size) return { why: t('rvt.why.data_missing') };
      parts.push([o, Math.min(miniSize, e.size - i * miniSize)]);
    }
    return { parts };
  };

  const recovered = [], missing = [], where = new Map();
  entries.forEach((e, id) => {
    if (!e || e.type !== 2) return;
    const p = paths.get(id);
    if (p === undefined) { missing.push({ path: '…/' + e.name, size: e.size, why: t('rvt.why.place_missing') }); return; }
    const loc = locate(e);
    if (loc.parts) { recovered.push({ path: p, size: e.size }); where.set(p, loc.parts); }
    else missing.push({ path: p, size: e.size, why: loc.why });
  });
  const byPath = (a, b) => a.path.localeCompare(b.path, 'en', { numeric: true });
  recovered.sort(byPath);
  missing.sort((a, b) => a.path.startsWith('…') - b.path.startsWith('…') || byPath(a, b));   // unplaced ones last

  return {
    recovered,
    missing,
    directory: { complete: dirChain.known && dirPresent === dirChain.list.length, entries: entries.filter(Boolean).length },
    bytesRead: () => bytesRead,
    async read(path) {
      const parts = where.get(path);
      if (!parts) return null;
      const out = new Uint8Array(parts.reduce((n, [, len]) => n + len, 0));
      let w = 0;
      for (let i = 0; i < parts.length;) {
        // one read per run of neighbouring pieces
        let j = i + 1, end = parts[i][0] + parts[i][1];
        while (j < parts.length && parts[j][0] === end) { end += parts[j][1]; j++; }
        const b = await read(parts[i][0], end - parts[i][0]);
        if (b.length !== end - parts[i][0]) throw new Error(t('rvt.err.changed'));
        out.set(b, w);
        w += b.length;
        i = j;
      }
      return out;
    },
  };
}

function kindOf(ext, hasPartAtom) {
  return {
    rvt: t('rvt.kind.project'), rte: t('rvt.kind.project_template'), rfa: t('rvt.kind.family'), rft: t('rvt.kind.family_template'),
  }[ext] || (hasPartAtom ? t('rvt.kind.family') : t('rvt.kind.project'));
}

/** UTF-16LE decode at a byte offset (0 or 1 — the text block is not always aligned). */
function utf16(bytes, offset = 0) {
  const len = (bytes.length - offset) & ~1;
  return new TextDecoder('utf-16le').decode(bytes.subarray(offset, offset + len));
}

/** Decode at whichever alignment contains `needle`; null when neither does. */
function utf16Find(bytes, needle) {
  for (const off of [0, 1]) {
    const t = utf16(bytes, off);
    const i = t.indexOf(needle);
    if (i >= 0) return t.slice(i);
  }
  return null;
}

// BasicFileInfo key names as Revit writes them in the file (file-format text, matched, never shown).
const BASIC_KEYS = {
  'Worksharing': 'worksharing',   // i18n-ignore: Revit file key
  'Username': 'username',   // i18n-ignore: Revit file key
  'Central Model Path': 'centralPath',   // i18n-ignore: Revit file key
  'Format': 'format',   // i18n-ignore: Revit file key
  'Build': 'build',   // i18n-ignore: Revit file key
  'Revit Build': 'product',   // i18n-ignore: Revit file key
  'Last Save Path': 'lastSavePath',   // i18n-ignore: Revit file key
  'Locale when saved': 'locale',   // i18n-ignore: Revit file key
  'Unique Document GUID': 'documentGuid',   // i18n-ignore: Revit file key
  'Unique Document Increments': 'increments',   // i18n-ignore: Revit file key
  'All Local Changes Saved To Central': 'savedToCentral',   // i18n-ignore: Revit file key
};

export function parseBasicFileInfo(bytes) {
  const out = { lines: [] };
  const text = utf16Find(bytes, 'Worksharing:');
  if (text) {
    for (const raw of text.split(/\r?\n/)) {
      const m = /^([^:\r\n]{2,80}):\s?(.*)$/.exec(raw);
      if (!m) continue;
      const key = m[1].trim();
      // Older releases leave stray bytes after a value ("ENU" + junk): drop control/format/unassigned/replacement chars.
      const value = m[2].replace(/[\p{C}\uFFFD]/gu, '').trim();
      out.lines.push({ key, value });
      if (BASIC_KEYS[key] && out[BASIC_KEYS[key]] === undefined) out[BASIC_KEYS[key]] = value;
    }
  }
  // Release year: "Format: 2025" (2019 and later) or "Revit Build: Autodesk Revit 2017 (Build: …)".
  const fromFormat = out.format && /\b(20\d\d)\b/.exec(out.format);
  const fromProduct = out.product && /Revit[^(]*?\b(20\d\d)\b/.exec(out.product);
  out.release = fromFormat ? fromFormat[1] : fromProduct ? fromProduct[1] : null;
  if (!out.build && out.product) {
    const b = /\(Build:\s*(.+)\)\s*$/.exec(out.product);
    if (b) out.build = b[1].trim();
  }
  return out;
}

/** ProjectInformation is a zip with one deflated entry. Read its local header and inflate. */
async function unzipFirst(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (dv.getUint32(0, true) !== 0x04034b50) throw new Error(t('rvt.zip.not_zip'));
  const flags = dv.getUint16(6, true);
  const method = dv.getUint16(8, true);
  let compSize = dv.getUint32(18, true);
  const start = 30 + dv.getUint16(26, true) + dv.getUint16(28, true);
  if ((flags & 0x08) || compSize === 0) {
    // Sizes live in the central directory when bit 3 is set.
    for (let i = start; i < bytes.length - 46; i++) {
      if (dv.getUint32(i, true) === 0x02014b50) { compSize = dv.getUint32(i + 20, true); break; }
    }
  }
  const data = bytes.subarray(start, start + compSize);
  if (method === 0) return new TextDecoder('utf-8').decode(data);
  if (method !== 8) throw new Error(t('rvt.zip.method', { method }));
  const ds = new DecompressionStream('deflate-raw');
  const buf = await new Response(new Blob([data]).stream().pipeThrough(ds)).arrayBuffer();
  return new TextDecoder('utf-8').decode(buf);
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
function unxml(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENTITIES[e] ?? m;
  }).trim();
}

/**
 * Autodesk "partatom" Atom XML (PartAtom stream and ProjectInformation's project.xml).
 * Returns {title, updated, product, version, categories[], groups[{title, params[{name, value, type}]}], types[{name, params[…]}]}.
 * types (PO.4): one per <A:part> under <A:family>: a family type with the parameter values that type carries (its title is the type's name).
 * Regex-based on purpose: same code in the browser and in Node, and the shape is flat.
 */
export function parseAtom(xml) {
  const one = (re) => { const m = re.exec(xml); return m ? unxml(m[1]) : null; };
  const out = {
    title: one(/<title>([^<]*)<\/title>/),
    updated: one(/<updated>([^<]*)<\/updated>/),
    product: one(/<A:product>([^<]*)<\/A:product>/),
    version: one(/<A:product-version>([^<]*)<\/A:product-version>/),
    categories: [],
    groups: [],
    types: [],
  };
  const paramsIn = (body) => {
    const params = [];
    for (const p of body.matchAll(/<([A-Za-z_][\w.-]*)((?:\s+[\w:-]+="[^"]*")*)\s*>([^<]*)<\/\1>/g)) {
      if (p[1] === 'title') continue;
      const attrs = Object.fromEntries([...p[2].matchAll(/([\w:-]+)="([^"]*)"/g)].map((a) => [a[1], unxml(a[2])]));
      params.push({ name: attrs.displayName || p[1].replace(/_/g, ' '), value: unxml(p[3]), type: attrs.typeOfParameter || null, ...(attrs.units ? { units: attrs.units } : {}) });
    }
    return params;
  };
  for (const part of xml.split(/<A:part\b[^>]*>/).slice(1)) {
    const body = part.split(/<\/A:part>/)[0];
    const name = (/<title>([^<]*)<\/title>/.exec(body) || [])[1];
    if (out.types.length < 500) out.types.push({ name: name ? unxml(name) : 'Type ' + (out.types.length + 1), params: paramsIn(body) });
  }
  for (const m of xml.matchAll(/<category>\s*<term>([^<]*)<\/term>/g)) out.categories.push(unxml(m[1]));

  for (const g of xml.split(/<A:group>/).slice(1)) {
    const body = g.split(/<\/A:group>/)[0];
    const title = (/<A:title>([^<]*)<\/A:title>/.exec(body) || [])[1];
    const params = [];
    for (const p of body.matchAll(/<([A-Za-z_][\w.-]*)((?:\s+[\w:-]+="[^"]*")*)\s*>([^<]*)<\/\1>/g)) {
      const attrs = Object.fromEntries([...p[2].matchAll(/([\w:-]+)="([^"]*)"/g)].map((a) => [a[1], unxml(a[2])]));
      params.push({
        name: attrs.displayName || p[1].replace(/_/g, ' '),
        value: unxml(p[3]),
        type: attrs.typeOfParameter || null,
      });
    }
    if (title || params.length) out.groups.push({ title: title ? unxml(title) : 'Other', params });
  }
  return out;
}

/** External references: links, imports, keynote tables… [{type, path, element}] */
export function parseTransmission(bytes) {
  const text = utf16Find(bytes, '<?xml');
  if (!text) return [];
  const refs = [];
  for (const m of text.matchAll(/<ExternalFileReference>([\s\S]*?)<\/ExternalFileReference>/g)) {
    const pick = (tag) => { const r = new RegExp('<' + tag + '>([^<]*)</' + tag + '>').exec(m[1]); return r ? unxml(r[1]) : ''; };
    refs.push({
      type: pick('ExternalFileReferenceType') || 'Reference',
      path: pick('LastSavedPath') || pick('LastSavedAbsolutePath') || pick('Path'),
      absolute: pick('LastSavedAbsolutePath'),
      element: pick('ElementId'),
    });
  }
  return refs;
}

/** The PNG inside RevitPreview4.0 (after a short header), walked chunk by chunk to IEND. */
export function extractPng(bytes) {
  let i = -1;
  for (let k = 0; k < bytes.length - 8; k++) {
    if (bytes[k] === 0x89 && bytes[k + 1] === 0x50 && bytes[k + 2] === 0x4e && bytes[k + 3] === 0x47) { i = k; break; }
  }
  if (i < 0) return null;
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let p = i + 8;
  let width = 0, height = 0;
  while (p + 12 <= bytes.length) {
    const len = dv.getUint32(p);
    const type = String.fromCharCode(bytes[p + 4], bytes[p + 5], bytes[p + 6], bytes[p + 7]);
    if (type === 'IHDR') { width = dv.getUint32(p + 8); height = dv.getUint32(p + 12); }
    p += 12 + len;
    if (type === 'IEND') return { png: bytes.slice(i, p), width, height };
  }
  return null;
}
