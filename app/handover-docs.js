/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handover-docs.js: completion and occupancy documents and other handover information attached to the PROJECT (booklet row
 * BK.114, session bk-stages-10). DOM-free: node bin/test-bimcraft.mjs --handover. Assets keep their own documents per element
 * (assets-bim.js addDocOp); this is the list that belongs to the building as a whole and goes out with the handover package.
 *
 * A handover document = { kind, title, date ('YYYY-MM-DD' | ''), issuer, reference, location, file: { name, bytes, sha256 } | null }
 *   kind      completion (completion certificate) | occupancy (occupancy certificate) | warranty | manual | asbuilt (as-built
 *             drawings) | other
 *   location  where it is: a web address (http / https), or a file name or path beside the model: the same rule as an asset's
 *             document (assets-bim.js docLocation). An ATTACHED file gets the place 'handover/<safe name>' and its size and
 *             SHA-256 are kept in the record; its bytes are kept for as long as the page is open (putFile / getFile) and are
 *             written into the handover package and into a project bundle (.ccbundle, folder handover/); opening the bundle gives them
 *             back, each checked against its record's SHA-256. A plain .ifc does not hold the bytes: after opening it the record
 *             says the file is not loaded, and attaching it again is checked against the SHA-256.
 *
 * In the IFC (the schema's own way to say "this document belongs to the project"; other programs list it as a document):
 *   IfcDocumentInformation   Identification (IFC2X3 DocumentId) = the reference ('n/a' when none: the attribute is required),
 *                            Name = title, Location (IFC4; IFC2X3: one IfcDocumentReference in DocumentReferences), Purpose =
 *                            the kind in plain English ('Certificate of occupancy'), IntendedUse = 'Handover', Scope =
 *                            'file=<name>;bytes=<n>;sha256=<hex>' for an attached file, DocumentOwner = an IfcOrganization named
 *                            as the issuer, ValidFrom = the date (IFC4 IfcDate; IFC2X3 IfcCalendarDate)
 *   IfcRelAssociatesDocument Name 'CadCraft_HandoverDocument', Description = the kind key, RelatedObjects = the IfcProject
 * COBie: one Document sheet row per document (handoverRows; SheetName Facility, RowName the facility).
 *
 *   HANDOVER_KINDS, EXPECTED (the kinds a handover normally has: completion, occupancy)
 *   cleanDoc(d) → the document, tidied (throws { key } on a bad one)      safeName(name) → a file name safe inside a zip
 *   readHandover(api, mid) → [{ rel, id, ...document, loaded }]           (loaded: the attached file's bytes are here)
 *   addHandoverOp(doc) · editHandoverOp(rel, doc) · removeHandoverOp(rel) → op(ed)      one undo step each
 *   missingKinds(docs) → [kind]                                           advisory: nothing is refused
 *   handoverRows(docs, { by, on, facility }) → [COBie Document row]       handoverCsv(docs) · handoverIndex(docs, { project, date, t })
 *   handoverPackage({ docs, base, ifc, cobie, index, csv }) → [{ name, data }]   for bcf.js zip()
 *   putFile(loc, bytes, sha) · getFile(loc) · sha256Hex(bytes) → Promise<hex>
 *   adoptHandover(bundle index) → Promise<n> · handoverBundleFiles(api, mid) → [{ loc, bytes }]   the project bundle (.ccbundle) carries handover/ beside pictures/
 *   Errors: handover.err.title, handover.err.date, handover.err.kind, assets.err.doc-location, assets.err.doc-scheme, handover.err.gone
 */
import { ids, val, deleteLine } from './ifc-util.js';
import { ModelWriter } from './model-write.js';
import { docLocation, isDay } from './assets-bim.js';
import { packageEntries } from './permit-package.js';   // 0.10 BK.49: one packager for the permit and the handover package
import { csvCell as cell } from './util.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const HANDOVER_KINDS = ['completion', 'occupancy', 'warranty', 'manual', 'asbuilt', 'other'];
export const EXPECTED = ['completion', 'occupancy'];
export const HANDOVER_REL = 'CadCraft_HandoverDocument';
/** The kind as a COBie Category and an IFC Purpose (data in the file, English). */
export const KIND_TEXT = { completion: 'Certificate of completion', occupancy: 'Certificate of occupancy', warranty: 'Warranty', manual: 'Operations and maintenance manual', asbuilt: 'As-built drawings', other: 'Handover document' };   // i18n-ignore: COBie / IFC values (data)
const NA = 'n/a', EXT = 'BimCraft', USE = 'Handover';
const err = (key) => Object.assign(new Error(key), { key });
const clip = (s, n = 255) => String(s ?? '').replace(/[\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, n);
const tryIds = (api, mid, cls, inh = false) => { try { return ids(api, mid, cls, inh); } catch { return []; } };
const enc = (s) => new TextEncoder().encode(s);

// ---------------------------------------------------------------- attached files (bytes kept while the page is open)
const store = new Map();   // place → { bytes, sha } (sha '' until it is known)
export const putFile = (loc, bytes, sha = '') => { if (loc && bytes?.length) store.set(loc, { bytes, sha: String(sha || '') }); };
export const getFile = (loc) => store.get(loc)?.bytes || null;
export const fileSha = (loc) => store.get(loc)?.sha || '';
export const forgetFiles = () => store.clear();
export async function sha256Hex(bytes) {
  const d = new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', bytes));
  return [...d].map((b) => b.toString(16).padStart(2, '0')).join('');
}
const HANDOVER_LOC = /^handover\/[\w .()-]{1,120}$/;
export const MAX_FILE = 100 * 1024 * 1024;
/** A bundle opened (lib/bundle ZipIndex): every handover/* entry goes in with its SHA-256, so a record can tell its own file. → how many. */
export async function adoptHandover(index) {
  let n = 0;
  for (const name of index.names()) {
    if (!HANDOVER_LOC.test(name) || name.includes('..')) continue;
    try { const bytes = await index.read(name, { max: MAX_FILE }); putFile(name, bytes, await sha256Hex(bytes)); n++; } catch (e) { /* a cut or oversize entry: that record reads as not loaded */ }
  }
  return n;
}
/** The attached files that are loaded and are the ones recorded, for Save as bundle: [{ loc, bytes }]. */
export function handoverBundleFiles(api, mid) {
  const out = [], seen = new Set();
  for (const d of readHandover(api, mid)) if (d.loaded && !seen.has(d.location)) { seen.add(d.location); out.push({ loc: d.location, bytes: getFile(d.location) }); }
  return out;
}
/** A file name that is safe inside a zip and on every system: letters, digits, dot, dash, underscore, space; no path. */
export function safeName(name) {
  const base = String(name ?? '').split(/[\\/]/).pop().normalize('NFKD').replace(/[^\w .()-]+/g, '_').replace(/^[. ]+/, '').replace(/\s+/g, ' ').trim().slice(0, 120);
  return base || 'document';
}
const fileScope = (f) => (f ? 'file=' + safeName(f.name) + ';bytes=' + Math.max(0, Math.floor(Number(f.bytes) || 0)) + ';sha256=' + String(f.sha256 || '').toLowerCase().replace(/[^0-9a-f]/g, '').slice(0, 64) : '');
function scopeFile(s) {
  const m = /^file=([^;]*);bytes=(\d+);sha256=([0-9a-f]{0,64})$/.exec(String(s ?? ''));
  return m ? { name: m[1], bytes: Number(m[2]), sha256: m[3] } : null;
}

// ---------------------------------------------------------------- one document
export function cleanDoc(d) {
  const kind = String(d?.kind ?? '');
  if (!HANDOVER_KINDS.includes(kind)) throw err('handover.err.kind');
  const file = d?.file && d.file.name ? { name: safeName(d.file.name), bytes: Math.max(0, Math.floor(Number(d.file.bytes) || 0)), sha256: String(d.file.sha256 || '').toLowerCase().replace(/[^0-9a-f]/g, '').slice(0, 64) } : null;
  const location = file ? 'handover/' + file.name : String(d?.location ?? '').trim();
  const bad = docLocation(location);
  if (bad) throw err(bad);
  const date = String(d?.date ?? '').trim();
  if (date && !isDay(date)) throw err('handover.err.date');
  const title = clip(d?.title) || clip(file ? file.name : location.replace(/[?#].*$/, '').split(/[\\/]/).filter(Boolean).pop());
  if (!title) throw err('handover.err.title');
  return { kind, title, date, issuer: clip(d?.issuer, 120), reference: clip(d?.reference, 120), location, file };
}

// ---------------------------------------------------------------- reading
export function readHandover(api, mid) {
  const out = [];
  let schema = '';
  try { schema = String(api.GetModelSchema(mid) || ''); } catch { schema = ''; }
  const v4 = !/^IFC2X3/i.test(schema);
  for (const rid of tryIds(api, mid, 'IFCRELASSOCIATESDOCUMENT')) {
    const r = api.GetLine(mid, rid, false);
    if (!r || val(r.Name) !== HANDOVER_REL) continue;
    const did = r.RelatingDocument?.value, d = did ? api.GetLine(mid, did, false) : null;
    if (!d) continue;
    const k0 = String(val(r.Description) ?? '').toLowerCase();
    let location = '', date = '', issuer = '';
    if (v4) { location = String(val(d.Location) ?? ''); date = String(val(d.ValidFrom) ?? '').slice(0, 10); }
    else {
      const ref = (d.DocumentReferences || [])[0]?.value, rl = ref ? api.GetLine(mid, ref, false) : null;
      location = String(val(rl?.Location) ?? '');
      const cd = d.ValidFrom?.value ? api.GetLine(mid, d.ValidFrom.value, false) : null;
      if (cd) date = [String(val(cd.YearComponent)).padStart(4, '0'), String(val(cd.MonthComponent)).padStart(2, '0'), String(val(cd.DayComponent)).padStart(2, '0')].join('-');
    }
    const own = d.DocumentOwner?.value ? api.GetLine(mid, d.DocumentOwner.value, false) : null;
    if (own) issuer = String(val(own.Name) ?? '');
    const idv = String(val(v4 ? d.Identification : d.DocumentId) ?? '');
    const file = scopeFile(val(d.Scope));
    out.push({
      rel: val(r.GlobalId), id: did, kind: HANDOVER_KINDS.includes(k0) ? k0 : 'other', title: String(val(d.Name) ?? ''), date: isDay(date) ? date : '', issuer,
      reference: idv === NA ? '' : idv, location, file,
      // loaded: the bytes are here AND are the recorded file (a file of the same name with another SHA-256 is not it)
      loaded: !!(file && getFile(location) && (!fileSha(location) || !file.sha256 || fileSha(location) === file.sha256)), mismatch: !!(file && getFile(location) && fileSha(location) && file.sha256 && fileSha(location) !== file.sha256),
    });
  }
  return out;
}

// ---------------------------------------------------------------- writing
function projectOf(w) {
  const id = tryIds(w.api, w.mid, 'IFCPROJECT')[0];
  if (id === undefined) throw err('handover.err.noproject');
  return id;
}
function writeInfo(w, d) {
  const owner = d.issuer ? w.make('IFCORGANIZATION', null, w.L(d.issuer), null, null, null) : null;
  const H = (id) => (id ? w.H(id) : null);
  const common = [w.L(KIND_TEXT[d.kind]), w.X(USE), w.X(fileScope(d.file)), null, H(owner), null, null, null, null];   // Purpose, IntendedUse, Scope, Revision, DocumentOwner, Editors, CreationTime, LastRevisionTime, ElectronicFormat
  if (w.v4) return w.make('IFCDOCUMENTINFORMATION', w.T('IFCIDENTIFIER', d.reference || NA), w.L(d.title), null, w.T('IFCURIREFERENCE', d.location), ...common, d.date ? w.T('IFCDATE', d.date) : null, null, null, null);
  const ref = w.make('IFCDOCUMENTREFERENCE', w.T('IFCLABEL', d.location), null, w.L(d.title));
  const [y, m, day] = d.date ? d.date.split('-').map(Number) : [];
  const cd = d.date ? w.make('IFCCALENDARDATE', day, m, y) : null;
  return w.make('IFCDOCUMENTINFORMATION', w.T('IFCIDENTIFIER', d.reference || NA), w.L(d.title), null, [w.H(ref)], ...common, H(cd), null, null, null);
}
function relOf(w, relGuid) {
  for (const r of ids(w.api, w.mid, 'IFCRELASSOCIATESDOCUMENT')) { const l = w.api.GetLine(w.mid, r, false); if (l && val(l.GlobalId) === relGuid && val(l.Name) === HANDOVER_REL) return r; }
  throw err('handover.err.gone');
}
/** The document's own lines go with it: the information and, under it, its reference (IFC2X3), date and issuer (made for it alone). */
function dropInfo(w, did) { if (w.api.GetLine(w.mid, did, false)) w.dropTree(did); }
export function addHandoverOp(doc) {
  const d = cleanDoc(doc);
  let guid = null;
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const pid = projectOf(w), info = writeInfo(w, d);
      if (!guid) guid = val(w.guid());
      const rel = w.make('IFCRELASSOCIATESDOCUMENT', guid, w.ownerHistory(), w.L(HANDOVER_REL), w.X(d.kind), [w.H(pid)], w.H(info));
      return { id: pid, rel: guid, relId: rel };
    });
  };
}
export function editHandoverOp(relGuid, doc) {
  const d = cleanDoc(doc);
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const rid = relOf(w, relGuid), rel = w.touch(rid), old = rel.RelatingDocument?.value;
      const info = writeInfo(w, d);
      rel.RelatingDocument = w.H(info); rel.Description = w.X(d.kind);
      w.write(rel);
      if (old) dropInfo(w, old);
      return { id: projectOf(w), rel: relGuid };
    });
  };
}
export function removeHandoverOp(relGuid) {
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const rid = relOf(w, relGuid), old = w.api.GetLine(w.mid, rid, false).RelatingDocument?.value;
      w.touch(rid);   // journaled: undo writes the relation back
      deleteLine(w.api, w.mid, rid);   // the relation only: never dropTree here, it names the IfcProject
      if (old) dropInfo(w, old);
      return { id: projectOf(w) };
    });
  };
}

// ---------------------------------------------------------------- the handover package
/** The kinds a handover normally has that are not in the list yet. Advisory: the package is made either way. */
export const missingKinds = (docs) => EXPECTED.filter((k) => !(docs || []).some((d) => d.kind === k));

const isWeb = (loc) => /^https?:/i.test(loc);
/** COBie 2.4 Document rows for the project's handover documents (objects keyed by the Document sheet's columns). */
export function handoverRows(docs, { by = NA, on = '', facility = NA } = {}) {
  return (docs || []).map((d) => ({
    Name: d.title || d.location, CreatedBy: by, CreatedOn: on, Category: KIND_TEXT[d.kind] || KIND_TEXT.other, ApprovalBy: d.issuer || NA, Stage: 'As built',   // i18n-ignore: COBie's stage value (data)
    SheetName: 'Facility', RowName: facility,
    Directory: isWeb(d.location) ? NA : d.location.replace(/[^\\/]*$/, '') || NA, File: isWeb(d.location) ? NA : d.location.split(/[\\/]/).pop(),
    ExtSystem: EXT, ExtObject: 'IfcDocumentInformation', ExtIdentifier: d.rel || NA,
    Description: [KIND_TEXT[d.kind] || KIND_TEXT.other, d.date && 'dated ' + d.date, d.issuer && 'issued by ' + d.issuer].filter(Boolean).join(', '),   // i18n-ignore: COBie cell text (data)
    Reference: d.reference || d.location,
  }));
}
export function handoverCsv(docs, head = ['Kind', 'Title', 'Date', 'Issued by', 'Reference', 'Where', 'File in this package', 'SHA-256']) {   // i18n-ignore: the default header (the UI passes its own)
  const rows = [head, ...(docs || []).map((d) => [KIND_TEXT[d.kind] || d.kind, d.title, d.date, d.issuer, d.reference, d.location, d.file ? (d.loaded ? 'yes' : 'no') : '', d.file?.sha256 || ''])];   // i18n-ignore: yes / no (data)
  return rows.map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}
/** The package's cover page (Markdown): what is in it, what is linked and what is still missing. */
export function handoverIndex(docs, { project = '', date = '', t = (k) => k, files = [] } = {}) {
  const L = [];
  L.push('# ' + t('handover.pkg.h', { project: project || t('handover.pkg.project') }), '');
  if (date) L.push(t('handover.pkg.date', { date }), '');
  L.push('## ' + t('handover.pkg.docs'), '');
  if (!(docs || []).length) L.push(t('handover.pkg.none'), '');
  for (const d of docs || []) {
    const bits = [d.date && t('handover.pkg.dated', { date: d.date }), d.issuer && t('handover.pkg.by', { issuer: d.issuer }), d.reference && t('handover.pkg.ref', { ref: d.reference })].filter(Boolean).join(', ');
    const where = d.file ? (d.loaded ? t('handover.pkg.infile', { file: d.location }) : t('handover.pkg.notloaded', { file: d.file.name })) : t('handover.pkg.at', { where: d.location });
    L.push('- **' + t('handover.kind.' + d.kind) + ':** ' + d.title + (bits ? ' (' + bits + ')' : '') + '. ' + where);
  }
  const miss = missingKinds(docs);
  if (miss.length) { L.push('', '## ' + t('handover.pkg.missing'), ''); for (const k of miss) L.push('- ' + t('handover.kind.' + k)); L.push('', t('handover.pkg.missing.note')); }
  if (files.length) { L.push('', '## ' + t('handover.pkg.files'), ''); for (const f of files) L.push('- `' + f.name + '`' + (f.note ? ': ' + f.note : '')); }
  L.push('');
  return L.join('\n');
}
/** The files of the handover package: the cover, the list, the COBie workbook, the model, and every attached file that is loaded. */
export function handoverPackage({ docs, base = 'model', ifc = null, ifcName = '', cobie = null, index = '', csv = '', extra = [] }) {
  const out = [{ name: 'README.md', data: enc(index) }, { name: 'handover-documents.csv', data: enc('﻿' + csv) }];
  if (cobie) out.push({ name: base + ' COBie.xlsx', data: cobie });
  if (ifc) out.push({ name: ifcName || base + '.ifc', data: ifc });
  const seen = new Set();
  for (const d of docs || []) { const b = d.file && d.loaded ? getFile(d.location) : null; if (b && !seen.has(d.location)) { seen.add(d.location); out.push({ name: d.location, data: b }); } }
  // 0.10 BK.49 (bk-r3-checks-10): the as-built part (asbuilt.js: statement, verified elements, drawing set, issue history) rides in `extra`;
  // the list goes through the one packager the permit package uses (permit-package.js packageEntries)
  return packageEntries([...out, ...(extra || [])]);
}
