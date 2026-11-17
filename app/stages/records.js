/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stages/records.js: Stage 6, tender and construction: shop drawings back for review (BK.113) and site instructions with the revisions they
 * cause, recorded against elements (BK.178). Session stages-10. DOM-free: node tools/bimcraft-test/stages-test.mjs --records.
 *
 * Built before (bk-r3-stages-10, BK.46/48): the ONE issue history (lib/issuelog/history.js, kept in the IFC by ../issue-set.js) already
 * holds RECORDS of kind `shop-drawing` and `instruction`, each with a reference (SD-001, SI-001), a status, sheets, elements, an attached
 * file (name, bytes, SHA-256) and a link. Nothing here makes a second list. What the plain record lacked, kept beside it:
 *
 *   BK.113  the REVIEW: who reviewed which revision when and what they said (the review history), the trade, the due date, and how it came
 *           back (as markups, as a linked model, as a file); resubmission = the next revision of the SAME record; and the review STATE on
 *           each element it covers, so Find, Color by property and the schedules see "revise and resubmit" on the pipe, not only in a list.
 *   BK.178  the CAUSE of a site instruction (client, site condition, design development, authority, error or omission, other), what it does to
 *           cost and time (typed words, never computed), and the instruction on each element it changes; plus EXPLAIN CHANGES: of the elements
 *           that changed since an issued set, which an instruction explains and which changed with nothing recorded.
 *
 * In the IFC (other programs ignore these sets):
 *   project   CadCraft_RecordExtras: Format 'cadcraft-record-extras 1', Extras (IfcText JSON { <record id>: { trade, due, as, cause, cost, time, reviews: [{ rev, state, by, on, note }] } })
 *   element   CadCraft_ShopDrawing: Ref, Rev, Status (a record state word), ReviewedBy, ReviewedOn      (the newest shop drawing that covers it)
 *             CadCraft_SiteInstruction: Refs ('SI-001; SI-004'), Latest, Cause, Status                   (every open or answered instruction that covers it)
 *
 *   readExtras(w) → { id: extras } · readRecords(w, kind) → [{ ...record, extras }]
 *   receiveShopDrawingOp(spec) · reviewShopDrawingOp(id, { state, by, on, note }) · resubmitShopDrawingOp(id, spec) · removeRecordOp(id)
 *   recordInstructionOp(spec) · setInstructionStatusOp(id, status, { by, on, note })
 *   waitingOn(history, extras) → [{ guid, ref, rev, status }]          elements whose newest shop drawing is not approved
 *   instructionsFor(history, extras, guid) → [record + extras]
 *   explainChanges(changes, history, extras, { issueId }) → { explained: [{ guid, how, by: [ref] }], unexplained: [{ guid, how }], counts }
 *   recordProblems(history, extras, { t, today }) → [problem]          overdue reviews, revise-and-resubmit not resubmitted, unexplained changes are not here (they are a report)
 */
import { op } from '../model-ops.js';
import { readIssues, ISSUES_PSET } from '../issue-set.js';
import { FORMAT as H_FORMAT, VERSION as H_VERSION, putRecord, dropRecord, nextRef, nextRev, RECORD_STATES } from '../issuelog/history.js';
import { refuse, clean, cleanText, projectId, readJson, hash, day, today as todayStr } from './common.js';

export const EXTRAS_PSET = 'CadCraft_RecordExtras', SHOP_PSET = 'CadCraft_ShopDrawing', SI_PSET = 'CadCraft_SiteInstruction';
export const CAUSES = ['client', 'site', 'design', 'authority', 'error', 'other'];
export const RETURNED_AS = ['file', 'markup', 'model'];
export const REVIEW_STATES = ['open', 'approved', 'approved-as-noted', 'revise', 'closed'];
export const LIMITS = { reviews: 60, extras: 5000 };
const cleanGuid = (g) => (/^[0-9A-Za-z_$]{22}$/.test(String(g || '')) ? String(g) : '');

// ---- reading -------------------------------------------------------------------------------------------------------------------
function cleanExtras(x) {
  const e = x && typeof x === 'object' ? x : {};
  return {
    trade: clean(e.trade, 80), due: day(e.due), as: RETURNED_AS.includes(e.as) ? e.as : 'file', cause: CAUSES.includes(e.cause) ? e.cause : '', cost: clean(e.cost, 200), time: clean(e.time, 200),
    reviews: (Array.isArray(e.reviews) ? e.reviews : []).slice(-LIMITS.reviews).map((r) => ({ rev: clean(r?.rev, 12), state: REVIEW_STATES.includes(r?.state) ? r.state : 'open', by: clean(r?.by, 120), on: day(r?.on), note: cleanText(r?.note, 1000) })),
  };
}
export function readExtras(w) {
  const raw = readJson(w, projectId(w), EXTRAS_PSET, 'Extras'), out = {};
  for (const [k, v] of Object.entries(raw).slice(0, LIMITS.extras)) out[k] = cleanExtras(v);
  return out;
}
export function readRecords(w, kind = null) {
  const ex = readExtras(w);
  return readIssues(w).records.filter((r) => !kind || r.kind === kind).map((r) => ({ ...r, extras: ex[r.id] || cleanExtras({}) }));
}

// ---- writing: the record, its extras and the marks on the elements, one undo step ---------------------------------------------------
function save(w, history, extras) {
  const pj = projectId(w);
  if (pj === undefined) refuse('records.err.noproject');
  w.upsertPset(pj, ISSUES_PSET, [['Format', 'IFCLABEL', H_FORMAT + ' ' + H_VERSION], ['History', 'IFCTEXT', JSON.stringify(history)]]);
  const live = new Set(history.records.map((r) => r.id));
  const keep = Object.fromEntries(Object.entries(extras).filter(([k]) => live.has(k)));
  w.upsertPset(pj, EXTRAS_PSET, [['Format', 'IFCLABEL', 'cadcraft-record-extras 1'], ['Extras', 'IFCTEXT', JSON.stringify(keep)]]);
  return pj;
}
const newestFirst = (a, b) => String(b.at || '').localeCompare(String(a.at || '')) || String(b.ref).localeCompare(String(a.ref));

/** What each element should carry now, from every shop drawing and instruction (pure). */
export function marksFor(history, extras) {
  const shop = new Map(), si = new Map();
  for (const r of [...history.records].sort(newestFirst)) {
    const x = extras[r.id] || cleanExtras({});
    if (r.kind === 'shop-drawing') for (const g of r.elements) if (!shop.has(g)) { const last = x.reviews[x.reviews.length - 1]; shop.set(g, { Ref: r.ref, Rev: r.rev, Status: r.status, ReviewedBy: last?.by || '', ReviewedOn: last?.on || '' }); }
    if (r.kind === 'instruction' && r.status !== 'closed') for (const g of r.elements) { if (!si.has(g)) si.set(g, []); si.get(g).push({ ref: r.ref, cause: x.cause, status: r.status }); }
  }
  return { shop, si };
}
function applyMarks(w, before, after) {
  const touch = (pset, guid, rows) => { const id = w.byGuid(guid); if (id) w.upsertPset(id, pset, rows); };
  const A = marksFor(after.history, after.extras), B = marksFor(before.history, before.extras);
  for (const [g, m] of A.shop) touch(SHOP_PSET, g, [['Ref', 'IFCLABEL', m.Ref], ['Rev', 'IFCLABEL', m.Rev], ['Status', 'IFCLABEL', m.Status], ['ReviewedBy', 'IFCLABEL', m.ReviewedBy], ['ReviewedOn', 'IFCLABEL', m.ReviewedOn]]);
  for (const g of B.shop.keys()) if (!A.shop.has(g)) touch(SHOP_PSET, g, [['Ref', 'IFCLABEL', ''], ['Rev', 'IFCLABEL', ''], ['Status', 'IFCLABEL', ''], ['ReviewedBy', 'IFCLABEL', ''], ['ReviewedOn', 'IFCLABEL', '']]);
  for (const [g, list] of A.si) touch(SI_PSET, g, [['Refs', 'IFCTEXT', list.map((x) => x.ref).join('; ')], ['Latest', 'IFCLABEL', list[0].ref], ['Cause', 'IFCLABEL', list[0].cause], ['Status', 'IFCLABEL', list[0].status]]);
  for (const g of B.si.keys()) if (!A.si.has(g)) touch(SI_PSET, g, [['Refs', 'IFCTEXT', ''], ['Latest', 'IFCLABEL', ''], ['Cause', 'IFCLABEL', ''], ['Status', 'IFCLABEL', '']]);
}
/** Run `change(history, extras)` → { history, extras, result }, write both, move the marks. */
function commit(w, change) {
  const history = readIssues(w), extras = readExtras(w);
  const next = change(history, extras);
  const pj = save(w, next.history, next.extras);
  applyMarks(w, { history, extras }, next);
  return { id: pj, ids: [], made: new Map(), ...(next.result || {}) };
}
const guidsOf = (w, list) => [...new Set((list || []).map(cleanGuid).filter((g) => g && w.byGuid(g)))];
const fileOf = (f) => (f && f.name ? { name: clean(f.name, 200), bytes: Math.max(0, Math.round(Number(f.bytes) || 0)), sha256: /^[0-9a-f]{64}$/.test(String(f.sha256 || '')) ? f.sha256 : '' } : null);
const newId = (kind, title) => 'r' + hash(kind + '|' + title + '|' + Date.now() + '|' + Math.random());
const cleanBase = (spec, w, h) => ({ title: clean(spec.title, 200), by: clean(spec.by, 120), date: day(spec.date) || todayStr(), note: cleanText(spec.note, 2000), link: clean(spec.link, 500), sheets: (spec.sheets || []).map((s) => clean(s, 40)).filter(Boolean) });

// ---- BK.113 shop drawings --------------------------------------------------------------------------------------------------------------
export function receiveShopDrawingOp(spec = {}) {
  const title = clean(spec.title, 200);
  if (!title) refuse('records.err.title');
  const id = newId('shop-drawing', title), at = new Date().toISOString();
  return op((w) => commit(w, (history, extras) => {
    const b = cleanBase(spec), ref = clean(spec.ref, 40) || nextRef(history, 'shop-drawing');
    const rec = { id, kind: 'shop-drawing', issue: spec.issue || '', ref, title: b.title, date: b.date, by: b.by, note: b.note, status: 'open', sheets: b.sheets, elements: guidsOf(w, spec.elements), rev: clean(spec.rev, 12) || 'A', link: b.link, file: fileOf(spec.file), app: 'bimcraft', target: '', at };
    extras[id] = cleanExtras({ trade: spec.trade, due: spec.due, as: spec.as, reviews: [] });
    return { history: putRecord(history, rec), extras, result: { record: id, ref } };
  }));
}
export function reviewShopDrawingOp(id, { state, by = '', on = '', note = '' } = {}) {
  if (!REVIEW_STATES.includes(state) || state === 'open') refuse('records.err.state');
  const at = new Date().toISOString();
  return op((w) => commit(w, (history, extras) => {
    const rec = history.records.find((r) => r.id === id && r.kind === 'shop-drawing');
    if (!rec) refuse('records.err.gone');
    if (!RECORD_STATES.includes(state)) refuse('records.err.state');
    const x = cleanExtras(extras[id]);
    x.reviews = [...x.reviews, { rev: rec.rev, state, by: clean(by, 120), on: day(on) || todayStr(), note: cleanText(note, 1000) }].slice(-LIMITS.reviews);
    extras[id] = cleanExtras(x);
    return { history: putRecord(history, { ...rec, status: state, at }), extras, result: { record: id, ref: rec.ref } };
  }));
}
/** The trade sends it again: the next revision of the same record, back to open; the reviews stay as its history. */
export function resubmitShopDrawingOp(id, spec = {}) {
  const at = new Date().toISOString();
  return op((w) => commit(w, (history, extras) => {
    const rec = history.records.find((r) => r.id === id && r.kind === 'shop-drawing');
    if (!rec) refuse('records.err.gone');
    if (rec.status === 'approved' || rec.status === 'closed') refuse('records.err.settled');
    const next = nextRev(rec.rev);
    const merged = { ...rec, rev: next, status: 'open', date: day(spec.date) || todayStr(), by: clean(spec.by, 120) || rec.by, note: cleanText(spec.note, 2000) || rec.note, file: spec.file ? fileOf(spec.file) : rec.file, link: clean(spec.link, 500) || rec.link, elements: spec.elements ? guidsOf(w, spec.elements) : rec.elements, at };
    return { history: putRecord(history, merged), extras, result: { record: id, ref: rec.ref, rev: next } };
  }));
}
export function removeRecordOp(id) {
  return op((w) => commit(w, (history, extras) => {
    if (!history.records.some((r) => r.id === id)) refuse('records.err.gone');
    return { history: dropRecord(history, id), extras, result: { record: id } };
  }));
}

// ---- BK.178 site instructions ----------------------------------------------------------------------------------------------------------
export function recordInstructionOp(spec = {}) {
  const title = clean(spec.title, 200);
  if (!title) refuse('records.err.title');
  if (spec.cause && !CAUSES.includes(spec.cause)) refuse('records.err.cause');
  const id = newId('instruction', title), at = new Date().toISOString();
  return op((w) => commit(w, (history, extras) => {
    const b = cleanBase(spec), ref = clean(spec.ref, 40) || nextRef(history, 'instruction');
    const els = guidsOf(w, spec.elements);
    const rec = { id, kind: 'instruction', issue: spec.issue || '', ref, title: b.title, date: b.date, by: b.by, note: b.note, status: 'open', sheets: b.sheets, elements: els, rev: '', link: b.link, file: fileOf(spec.file), app: 'bimcraft', target: '', at };
    extras[id] = cleanExtras({ cause: spec.cause, cost: spec.cost, time: spec.time, reviews: [] });
    return { history: putRecord(history, rec), extras, result: { record: id, ref, elements: els.length } };
  }));
}
export function setInstructionStatusOp(id, status, { by = '', on = '', note = '' } = {}) {
  if (!RECORD_STATES.includes(status)) refuse('records.err.state');
  const at = new Date().toISOString();
  return op((w) => commit(w, (history, extras) => {
    const rec = history.records.find((r) => r.id === id && r.kind === 'instruction');
    if (!rec) refuse('records.err.gone');
    const x = cleanExtras(extras[id]);
    x.reviews = [...x.reviews, { rev: '', state: REVIEW_STATES.includes(status) ? status : 'open', by: clean(by, 120), on: day(on) || todayStr(), note: cleanText(note, 1000) }].slice(-LIMITS.reviews);
    extras[id] = x;
    return { history: putRecord(history, { ...rec, status, at }), extras, result: { record: id, ref: rec.ref } };
  }));
}

// ---- reports ---------------------------------------------------------------------------------------------------------------------------
export function waitingOn(history, extras) {
  const { shop } = marksFor(history, extras || {});
  return [...shop].filter(([, m]) => m.Status !== 'approved' && m.Status !== 'approved-as-noted' && m.Status !== 'closed').map(([guid, m]) => ({ guid, ref: m.Ref, rev: m.Rev, status: m.Status }));
}
export function instructionsFor(history, extras, guid) {
  return history.records.filter((r) => r.kind === 'instruction' && r.elements.includes(guid)).map((r) => ({ ...r, extras: extras?.[r.id] || cleanExtras({}) }));
}
/** `changes` = changesFor() of ../issue-set.js (changes.elements = comparePrints); an instruction explains an element it lists when it is against that issue or dated on or after it. */
export function explainChanges(changes, history, extras, { issueId = '' } = {}) {
  const issue = history.issues.find((i) => i.id === issueId);
  const cmp = changes?.elements || { added: [], removed: [], changed: [] };
  const list = [...cmp.changed.map((c) => ({ guid: c.guid, how: 'changed' })), ...cmp.added.map((g) => ({ guid: g, how: 'added' })), ...cmp.removed.map((g) => ({ guid: g, how: 'removed' }))];
  const explained = [], unexplained = [];
  for (const it of list) {
    const by = instructionsFor(history, extras, it.guid).filter((r) => r.issue === issueId || (issue && r.date && r.date >= issue.date)).map((r) => r.ref);
    if (by.length) explained.push({ ...it, by }); else unexplained.push(it);
  }
  return { explained, unexplained, counts: { changed: list.length, explained: explained.length, unexplained: unexplained.length } };
}

export function recordProblems(history, extras, { t = (k) => k, today = todayStr() } = {}) {
  const out = [];
  for (const r of history.records) {
    if (r.kind !== 'shop-drawing') continue;
    const x = extras?.[r.id] || cleanExtras({});
    const item = (code, severity, vars) => out.push({ code, severity, part: r.id, msg: { key: code, vars }, text: t('records.p.' + code, { ref: r.ref, title: r.title, ...vars }), about: r.elements.slice(0, 20).map((g) => ({ kind: 'element', id: g, label: r.ref })), source: { name: 'bimcraft.stages' } });
    if (r.status === 'open' && x.due && x.due < today) item('shop.overdue', 'warning', { due: x.due });
    if (r.status === 'revise') item('shop.revise', 'note', { rev: r.rev });
  }
  return out;
}
