/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the plain words here are a pack maker's validation reasons (cleanChecklist, like the regulation packs' cleanPack) and CSV data; everything a person reads in the app is in the language file (permit.cl.*). */
/**
 * permit-checklist.js: the supporting documents an approving authority asks for, per authority, each linked to the sheet or
 * schedule in the model that satisfies it (booklet row BK.109, session bk-stages-10). No DOM:
 * node bin/test-bimcraft.mjs --permitchecklist. Shown with the permit package (permit-package.js, permit-ui.js).
 *
 * AUTHORITIES ARE DATA, never code: ./permit-checklists/<id>.json (format `cadcraft-submission-checklist` v1, listed in
 * index.json), shaped like the regulation packs (jurisdiction, authority, sources, review). Every pack cites its sources (title,
 * URL, date fetched, licence) and is `review: 'unchecked'` = NOT verified by a local practitioner; `generic` is a general list
 * and no authority's. ADVISORY ONLY: a missing document never stops the package being built.
 *
 * An item: { id, title, detail, clause, when: 'always' | 'if-applicable', source (index into sources), supplied (a paper the
 *   person supplies: a form, a title deed, a fee receipt), satisfy: [{ view: [sheet view kinds] } | { schedule: [schedule kinds] }
 *   | { words: [words looked for in a sheet's title] }] (any one is enough), site (the site outline, building lines and servitudes
 *   in the model are named as a hint) }
 *
 *   cleanChecklist(o) → { pack | null, problems: [text] }      untrusted data: known fields only, bounded
 *   isUnverified(pack) → boolean                               true for every pack no practitioner has confirmed
 *   modelFacts({ sheets (views-model.js readSheets), levels, counts: { doors, windows, rooms, walls }, site: { outline, buildingLines, servitudes } }) → facts
 *   resolveChecklist(pack, facts, state) → [{ id, title, detail, clause, when, supplied, status: 'linked' | 'supplied' | 'missing' | 'na',
 *                                             how: 'auto' | 'manual' | '', by: [{ kind: 'sheet', id, label, why }], hint, source }]
 *       state = { links: { itemId: sheet id }, supplied: { itemId: true }, na: { itemId: true } }   (the person's own choices)
 *   summary(rows) → { linked, supplied, missing, na, total }
 *   cleanState(o, pack) · STATE_PSET, readState(w) → { pack, state }, saveStateOp({ pack, state }) → op (one undo step, on the IfcProject)
 *   checklistMarkdown(pack, rows, t) → the section for the package's cover        checklistCsv(pack, rows) → CSV
 */
import { ids } from './ifc-util.js';
import { op } from './model-ops.js';
import { csvCell as cell } from './util.js';   // shared helpers (0.11 PERF.74)

export const FORMAT = 'cadcraft-submission-checklist';
export const STATE_PSET = 'CadCraft_SubmissionChecklist';
export const VIEW_KINDS = ['plan', 'rcp', 'callout', 'elevation', 'section', 'schedule'];
export const SCHEDULE_KINDS = ['doors', 'windows', 'rooms', 'walls'];
const clip = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f‪-‮⁦-⁩]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DAY = /^\d{4}-\d{2}-\d{2}$/;

// ---------------------------------------------------------------- the data
export function cleanChecklist(o) {
  const problems = [];
  const bad = (m) => { problems.push(m); };
  if (!o || typeof o !== 'object' || o.format !== FORMAT) return { pack: null, problems: ['not a ' + FORMAT + ' file'] };
  if (o.version !== 1) return { pack: null, problems: ['version ' + o.version + ' is not known (1 is)'] };
  const id = clip(o.id, 80);
  if (!ID.test(id)) bad('id must be lower-case words joined by dashes');
  const j = o.jurisdiction && typeof o.jurisdiction === 'object' ? o.jurisdiction : {};
  const generic = o.review === 'generic';
  const pack = {
    format: FORMAT, version: 1, id, name: clip(o.name, 160), authority: clip(o.authority, 200), submission: clip(o.submission, 300),
    jurisdiction: { country: /^[A-Z]{2}$/.test(String(j.country || '')) ? j.country : '', region: clip(j.region, 12), name: clip(j.name, 120) },
    review: generic ? 'generic' : o.review === 'practitioner' ? 'practitioner' : 'unchecked',
    // 0.10 BK.67/156: a regulation pack's `submission` and `process` sections (regs add-on lib/sections.js, already cleaned there) reach here as one list
    fromPack: o.fromPack === true, subFormat: o.fromPack === true && o.subFormat && typeof o.subFormat === 'object' ? o.subFormat : null, process: o.fromPack === true && o.process && typeof o.process === 'object' ? o.process : null,
    reviewedBy: o.review === 'practitioner' ? clip(o.reviewedBy, 160) : '', note: clip(o.note, 400), sources: [], items: [],
  };
  if (!pack.name) bad('name is missing');
  if (!generic && !pack.jurisdiction.country) bad('jurisdiction.country (two capital letters) is missing');
  if (!generic && !pack.authority) bad('authority is missing');
  if (o.review === 'practitioner' && !pack.reviewedBy) bad('a pack marked as reviewed by a practitioner must name them (reviewedBy)');
  for (const s of Array.isArray(o.sources) ? o.sources.slice(0, 12) : []) {
    const src = { title: clip(s?.title, 300), url: clip(s?.url, 400), fetched: clip(s?.fetched, 10), licence: clip(s?.licence, 400), via: clip(s?.via, 500) };
    if (!src.title) bad('a source has no title');
    if (!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(src.url)) bad('source "' + src.title.slice(0, 40) + '": url must be an https address');
    if (!DAY.test(src.fetched)) bad('source "' + src.title.slice(0, 40) + '": fetched must be a date (YYYY-MM-DD)');
    if (!src.licence) bad('source "' + src.title.slice(0, 40) + '": licence is missing');
    pack.sources.push(src);
  }
  if (!generic && !pack.sources.length) bad('an authority\'s list must cite at least one source');
  const seen = new Set();
  for (const it of Array.isArray(o.items) ? o.items.slice(0, 200) : []) {
    const item = { id: clip(it?.id, 60), title: clip(it?.title, 160), detail: clip(it?.detail, 900), clause: clip(it?.clause, 120), when: it?.when === 'if-applicable' ? 'if-applicable' : 'always',
      source: Number.isInteger(it?.source) ? it.source : 0, supplied: it?.supplied === true, site: it?.site === true, satisfy: [],
      scale: it?.scale && typeof it.scale === 'object' ? { text: clip(it.scale.text, 120), ...(Number.isFinite(it.scale.maxDenominator) ? { maxDenominator: it.scale.maxDenominator } : {}), ...(Number.isFinite(it.scale.minDenominator) ? { minDenominator: it.scale.minDenominator } : {}) } : null };
    if (!ID.test(item.id)) { bad('an item id must be lower-case words joined by dashes: "' + item.id + '"'); continue; }
    if (seen.has(item.id)) { bad('item id used twice: ' + item.id); continue; }
    seen.add(item.id);
    if (!item.title) bad('item ' + item.id + ' has no title');
    if (pack.sources.length && !(item.source >= 0 && item.source < pack.sources.length)) bad('item ' + item.id + ': source ' + item.source + ' is not one of the pack\'s sources');
    for (const s of Array.isArray(it?.satisfy) ? it.satisfy.slice(0, 8) : []) {
      if (Array.isArray(s?.view)) { const v = s.view.filter((k) => VIEW_KINDS.includes(k)); if (v.length !== s.view.length) bad('item ' + item.id + ': unknown view kind in ' + JSON.stringify(s.view)); if (v.length) item.satisfy.push({ view: v }); }
      else if (Array.isArray(s?.schedule)) { const v = s.schedule.filter((k) => SCHEDULE_KINDS.includes(k)); if (v.length !== s.schedule.length) bad('item ' + item.id + ': unknown schedule kind in ' + JSON.stringify(s.schedule)); if (v.length) item.satisfy.push({ schedule: v }); }
      else if (Array.isArray(s?.words)) { const v = s.words.map((x) => clip(x, 40).toLowerCase()).filter(Boolean).slice(0, 12); if (v.length) item.satisfy.push({ words: v }); }
      else bad('item ' + item.id + ': a satisfy entry must have view, schedule or words');
    }
    if (item.supplied && item.satisfy.length) bad('item ' + item.id + ': a paper the person supplies cannot also be satisfied by a drawing');
    if (!item.supplied && !item.satisfy.length) bad('item ' + item.id + ': say what satisfies it (satisfy) or mark it supplied');
    pack.items.push(item);
  }
  if (!pack.items.length && !pack.subFormat) bad('no items');
  return { pack: problems.length ? null : pack, problems };
}
/** Every pack that no local practitioner has confirmed: the UI and the cover say so. */
export const isUnverified = (pack) => pack?.review !== 'practitioner';

// ---------------------------------------------------------------- the model's facts
export function modelFacts({ sheets = [], levels = [], counts = {}, site = null } = {}) {
  const levelName = new Map(levels.map((l) => [l.guid, l.name]));
  return {
    sheets: sheets.map((s) => ({ id: s.id, number: clip(s.number, 20), title: clip(s.title, 120), paper: clip(s.paper, 40), fields: s.fields && typeof s.fields === 'object' ? s.fields : {}, views: (s.views || []).map((v) => ({ kind: v.kind, ref: String(v.ref || ''), ratio: Number.isFinite(v.ratio) ? v.ratio : 0 })) })),
    levelName, counts: { doors: counts.doors | 0, windows: counts.windows | 0, rooms: counts.rooms | 0, walls: counts.walls | 0 },
    site: { outline: !!site?.outline, buildingLines: site?.buildingLines | 0, servitudes: site?.servitudes | 0 },
  };
}
const sheetLabel = (s) => [s.number, s.title].filter(Boolean).join(' ') || s.id;
const wordRe = (w) => new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z0-9]|$)', 'i');
/** Why a sheet satisfies an item ('' when it does not): a view of the right kind, a schedule on it, or its title. */
function sheetWhy(sheet, item) {
  for (const c of item.satisfy) {
    if (c.view) { const v = sheet.views.find((x) => c.view.includes(x.kind) && x.kind !== 'schedule'); if (v) return 'view:' + v.kind; }
    if (c.schedule) { const v = sheet.views.find((x) => x.kind === 'schedule' && c.schedule.includes(x.ref)); if (v) return 'schedule:' + v.ref; }
    if (c.words && c.words.some((w) => wordRe(w).test(sheet.title))) return 'title';
  }
  return '';
}

export function cleanState(o, pack) {
  const out = { links: {}, supplied: {}, na: {} };
  const known = new Set((pack?.items || []).map((i) => i.id));
  for (const [k, v] of Object.entries(o?.links && typeof o.links === 'object' ? o.links : {}).slice(0, 300)) if (known.has(k) && /^sheet-\d{1,6}$/.test(String(v))) out.links[k] = String(v);
  for (const key of ['supplied', 'na']) for (const [k, v] of Object.entries(o?.[key] && typeof o[key] === 'object' ? o[key] : {}).slice(0, 300)) if (known.has(k) && v === true) out[key][k] = true;
  return out;
}

export function resolveChecklist(pack, facts, state = {}) {
  const st = cleanState(state, pack), rows = [];
  for (const item of pack.items) {
    const row = { id: item.id, title: item.title, detail: item.detail, clause: item.clause, when: item.when, supplied: item.supplied, scale: item.scale || null, satisfy: item.satisfy, source: item.source, status: 'missing', how: '', by: [], hint: '' };
    const manual = st.links[item.id] ? facts.sheets.find((s) => s.id === st.links[item.id]) : null;
    if (st.na[item.id] && item.when === 'if-applicable') { row.status = 'na'; row.how = 'manual'; }
    else if (manual) { row.status = 'linked'; row.how = 'manual'; row.by = [{ kind: 'sheet', id: manual.id, label: sheetLabel(manual), why: 'chosen' }]; }
    else if (st.supplied[item.id]) { row.status = 'supplied'; row.how = 'manual'; }
    else if (!item.supplied) {
      const by = facts.sheets.map((s) => ({ s, why: sheetWhy(s, item) })).filter((x) => x.why).map((x) => ({ kind: 'sheet', id: x.s.id, label: sheetLabel(x.s), why: x.why }));
      if (by.length) { row.status = 'linked'; row.how = 'auto'; row.by = by; }
    }
    if (st.links[item.id] && !manual && row.status === 'missing') row.hint = 'gone';   // the sheet it was linked to is not in the model any more
    else if (row.status === 'missing' && !item.supplied) {
      const sk = item.satisfy.flatMap((c) => c.schedule || []).find((k) => facts.counts[k] > 0);
      if (sk) row.hint = 'schedule:' + sk + ':' + facts.counts[sk];                              // the model has the rows; the schedule is not on a sheet yet
      else if (item.site && facts.site.outline) row.hint = 'site:' + facts.site.buildingLines + ':' + facts.site.servitudes;   // the site is drawn; no sheet shows it as a site plan yet
    }
    rows.push(row);
  }
  return rows;
}
export function summary(rows) {
  const n = { linked: 0, supplied: 0, missing: 0, na: 0, total: rows.length };
  for (const r of rows) n[r.status]++;
  return n;
}

// ---------------------------------------------------------------- the person's choices, in the IFC
const project = (w) => { try { return ids(w.api, w.mid, 'IFCPROJECT')[0]; } catch (e) { return undefined; } };
export function readState(w) {
  const pj = project(w), ps = pj === undefined ? null : w.readPset(pj, STATE_PSET);
  let state = {};
  try { state = JSON.parse(String(ps?.State || '{}')) || {}; } catch (e) { state = {}; }
  return { pack: ID.test(String(ps?.Pack || '')) ? String(ps.Pack) : '', state: { links: state.links || {}, supplied: state.supplied || {}, na: state.na || {} } };
}
export function saveStateOp({ pack, state }) {
  const P = ID.test(String(pack || '')) ? String(pack) : '', S = JSON.stringify({ format: 'cadcraft-submission-checklist-state 1', links: state?.links || {}, supplied: state?.supplied || {}, na: state?.na || {} });
  return op((w) => {
    const pj = project(w);
    if (pj === undefined) throw Object.assign(new Error('permit.cl.err.noproject'), { key: 'permit.cl.err.noproject' });
    w.upsertPset(pj, STATE_PSET, [['Pack', 'IFCLABEL', P || '-'], ['State', 'IFCTEXT', S]]);
    return { id: pj, ids: [] };
  });
}

// ---------------------------------------------------------------- out
const esc = (s) => clip(s, 500).replace(/\|/g, '/');
const byText = (row, t) => (row.status === 'linked' ? row.by.map((b) => b.label).join('; ') : row.status === 'supplied' ? t('permit.cl.st.supplied') : row.status === 'na' ? t('permit.cl.st.na') : '');
export function hintText(row, t) {
  const [k, a, b] = String(row.hint || '').split(':');
  if (k === 'gone') return t('permit.cl.hint.gone');
  if (k === 'schedule') return t('permit.cl.hint.schedule', { kind: t('permit.cl.sched.' + a), n: Number(b) });
  if (k === 'site') return t('permit.cl.hint.site', { lines: Number(a), serv: Number(b) });
  return '';
}
export function checklistMarkdown(pack, rows, t = (k) => k) {
  const n = summary(rows), L = [];
  L.push('## ' + t('permit.cl.h', { name: esc(pack.name) }), '');
  if (pack.authority) L.push(t('permit.cl.authority', { authority: esc(pack.authority) }) + (pack.submission ? ' ' + esc(pack.submission) + '.' : ''), '');
  L.push('**' + t(pack.review === 'generic' ? 'permit.cl.generic' : isUnverified(pack) ? 'permit.cl.unverified' : 'permit.cl.verified', { by: esc(pack.reviewedBy) }) + '**', '');
  L.push(t('permit.cl.sum', n), '');
  L.push('| ' + [t('permit.cl.col.item'), t('permit.cl.col.clause'), t('permit.cl.col.status'), t('permit.cl.col.by')].join(' | ') + ' |', '|---|---|---|---|');
  for (const r of rows) L.push('| ' + [r.title + (r.when === 'if-applicable' ? ' (' + t('permit.cl.ifapp') + ')' : ''), r.clause, t('permit.cl.status.' + r.status), byText(r, t) || hintText(r, t)].map(esc).join(' | ') + ' |');
  L.push('');
  const miss = rows.filter((r) => r.status === 'missing');
  if (miss.length) { L.push('### ' + t('permit.cl.missing.h'), '', ...miss.map((r) => '- ' + esc(r.title) + (r.clause ? ' [' + esc(r.clause) + ']' : '') + (r.supplied ? ' (' + t('permit.cl.byperson') + ')' : '')), '', t('permit.cl.missing.note'), ''); }
  if (pack.sources.length) { L.push('### ' + t('permit.cl.sources'), '', ...pack.sources.map((s) => '- ' + esc(s.title) + ': ' + s.url + ' (' + t('permit.cl.fetched', { date: s.fetched }) + ')'), ''); }
  return L.join('\n');
}
export function checklistCsv(pack, rows, t = (k) => k) {
  const head = ['authority list', 'item', 'clause', 'when', 'status', 'satisfied by', 'note', 'source', 'date fetched', 'verified by a local practitioner'];   // i18n-ignore: CSV header (data, as the review-comments CSV)
  return [head, ...rows.map((r) => [pack.name, r.title, r.clause, r.when, r.status, r.status === 'linked' ? r.by.map((b) => b.label).join('; ') : '', hintText(r, t), pack.sources[r.source]?.url || '', pack.sources[r.source]?.fetched || '', isUnverified(pack) ? 'no' : 'yes'])].map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}
