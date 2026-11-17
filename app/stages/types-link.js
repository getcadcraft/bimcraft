/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stages/types-link.js: specifications and construction details linked to TYPES (0.10 BK.110 and BK.111, session stages-10). DOM-free:
 * node tools/bimcraft-test/stages-test.mjs --types.
 *
 * The specification TEXT of a type already lives in the file (../spec-model.js, BK.47: one section per wall, door, window, floor and finish
 * type, the facts read from the model, the words the person's own). This module adds what the rows still lacked:
 *
 *   BK.111  DETAIL LINKS on a type. A wall, floor, roof, door or window type (or any section id of spec-model.js) carries links to the
 *           construction details that belong to it: a detail in DetailCraft or CadCraft (a file name or a web address), or a sheet of this
 *           model. In the IFC: property set CadCraft_TypeLinks on the IfcProject, Links = JSON { <section id>: [{ id, app, title, ref, sheet, note }] }.
 *           Types made in the Library keep the same ids, so a link survives a retype and a save.
 *   BK.110  AGREEMENT between the specification, the schedule and the drawings: findings (the shared Problems shape, source bimcraft.stages):
 *             spec.missing   a type in use with no specification text                        (note)
 *             spec.orphan    text kept for a type the model no longer has                    (note)
 *             spec.size      the text states a size in mm that no measure of the type in the model has  (warning)
 *             spec.schedule  the model has types of a kind but no sheet holds that kind's schedule     (warning)
 *             detail.missing a wall, floor or roof type in use with no detail linked          (note)
 *             detail.sheet   a link to a sheet this model does not have (any more)            (warning)
 *           Nothing is refused and no standard's clause is written: the person's text is only compared with the model's own numbers.
 *
 *   readLinks(w) → { <section id>: [link] }          cleanLink(raw) → link | null
 *   linkDetailOp({ type, app, title, ref, sheet, note, id? }) → op · unlinkDetailOp(type, linkId) → op       one undo step each
 *   statedSizes(text) → [mm]                          every "<n> mm" (and "<n> m", "<n> cm") in the text, in mm
 *   knownSizes(section) → Set of mm                   the numbers in the section's facts (read with fmtLen = whole mm)
 *   typeAgreement({ sections, links, sheets, roofs }) → { rows: [{ id, group, title, inUse, text: bool, links: [link], findings: [code] }], findings: [finding] }
 *   typeProblems(agreement, { t }) → [problem]        the findings as Problems
 *   typeMarkdown(agreement, { t, title }) → Markdown   one section per type: facts, text, the details to look at
 */
import { op } from '../model-ops.js';
import { refuse, clean, cleanText, projectId, readJson, hash } from './common.js';

export const LINKS_PSET = 'CadCraft_TypeLinks', LINKS_FORMAT = 'cadcraft-type-links 1';
export const LIMITS = { types: 400, perType: 20, title: 160, ref: 500, note: 600 };
export const APPS = ['detailcraft', 'cadcraft', 'bimcraft', 'other'];
/** The kinds of schedule a sheet can hold (views-model.js: view.ref starts with this word) that list each type group. */
export const SCHEDULES = { wall: ['walls', 'walltypes'], door: ['doors'], window: ['windows'], floor: ['floors'] };
export const DETAIL_GROUPS = ['wall', 'floor', 'roof'];
const idOk = (s) => /^[a-z]+:[A-Za-z0-9_.\-|]{1,120}$/.test(String(s || ''));

export function cleanLink(x) {
  if (!x || typeof x !== 'object') return null;
  const title = clean(x.title, LIMITS.title), ref = clean(x.ref, LIMITS.ref), sheet = clean(x.sheet, 40);
  if (!title || (!ref && !sheet)) return null;
  const id = /^[a-z0-9]{3,16}$/.test(String(x.id || '')) ? String(x.id) : hash(title + '|' + ref + '|' + sheet);
  return { id, app: APPS.includes(x.app) ? x.app : 'other', title, ref, sheet, note: clean(x.note, LIMITS.note) };
}

export function readLinks(w) {
  const raw = readJson(w, projectId(w), LINKS_PSET, 'Links'), out = {};
  for (const [k, v] of Object.entries(raw.links || raw)) {
    if (!idOk(k) || !Array.isArray(v)) continue;
    const list = v.map(cleanLink).filter(Boolean).slice(0, LIMITS.perType);
    if (list.length) out[k] = list;
  }
  return out;
}
const write = (w, links) => {
  const pj = projectId(w);
  if (pj === undefined) refuse('types.err.noproject');
  w.upsertPset(pj, LINKS_PSET, [['Format', 'IFCLABEL', LINKS_FORMAT], ['Links', 'IFCTEXT', JSON.stringify({ links })]]);
  return pj;
};

export function linkDetailOp(spec = {}) {
  const type = String(spec.type || ''), link = cleanLink({ ...spec, id: spec.id });
  if (!idOk(type)) refuse('types.err.type');
  if (!link) refuse('types.err.link');
  return op((w) => {
    const all = readLinks(w);
    if (!all[type] && Object.keys(all).length >= LIMITS.types) refuse('types.err.many', { n: LIMITS.types });
    const list = (all[type] || []).filter((l) => l.id !== link.id);
    if (list.length >= LIMITS.perType) refuse('types.err.per-type', { n: LIMITS.perType });
    all[type] = [...list, link];
    return { id: write(w, all), ids: [], made: new Map(), link };
  });
}
export function unlinkDetailOp(type, linkId) {
  return op((w) => {
    const all = readLinks(w);
    if (!all[type]?.some((l) => l.id === linkId)) refuse('types.err.gone');
    all[type] = all[type].filter((l) => l.id !== linkId);
    if (!all[type].length) delete all[type];
    return { id: write(w, all), ids: [], made: new Map() };
  });
}

// ---- agreement -------------------------------------------------------------------------------------------------------------------
const UNIT = { mm: 1, cm: 10, m: 1000 };
export function statedSizes(text) {
  const out = [];
  for (const m of String(text || '').matchAll(/(\d+(?:[.,]\d+)?)\s*(mm|cm|m)\b(?!\w)/gi)) { const v = Number(m[1].replace(',', '.')) * UNIT[m[2].toLowerCase()]; if (Number.isFinite(v) && v > 0) out.push(Math.round(v * 100) / 100); }
  return out;
}
/** The measures a section's facts state: every number in them, with each as it stands and as millimetres from m and cm. Facts read with fmtLen = '<n> mm'. */
export function knownSizes(section) {
  const out = new Set();
  for (const f of section.facts || []) for (const m of String(f).matchAll(/(\d+(?:[.,]\d+)?)\s*(mm|cm|m)?\b/gi)) { const v = Number(m[1].replace(',', '.')); if (!Number.isFinite(v)) continue; out.add(Math.round(v * 100) / 100); if (m[2]) out.add(Math.round(v * UNIT[m[2].toLowerCase()] * 100) / 100); }
  return out;
}
const near = (set, v) => { for (const k of set) if (Math.abs(k - v) <= Math.max(0.5, v * 0.005)) return true; return false; };

export function typeAgreement({ sections = [], links = {}, sheets = [], roofs = [] } = {}) {
  const all = [...sections, ...[...new Set((roofs || []).map((r) => r.typeKey).filter(Boolean))].map((k) => ({ id: 'roof:' + k, group: 'roof', title: k, facts: [], text: '', inUse: true, count: 0 }))];
  const sheetIds = new Set((sheets || []).flatMap((s) => [s.id, s.number].filter(Boolean)));
  const heldSchedules = new Set((sheets || []).flatMap((s) => (s.views || []).filter((v) => v.kind === 'schedule').map((v) => String(v.ref).split(':')[0])));
  const findings = [], rows = [];
  const add = (code, severity, sec, vars = {}) => { const f = { code, severity, type: sec.id, title: sec.title, group: sec.group, vars }; findings.push(f); return code; };
  for (const s of all) {
    const mine = [], list = links[s.id] || [];
    if (s.inUse && !String(s.text || '').trim() && s.group !== 'roof') mine.push(add('spec.missing', 'note', s));
    if (!s.inUse && String(s.text || '').trim()) mine.push(add('spec.orphan', 'note', s));
    if (s.inUse && s.text) {
      const known = knownSizes(s), bad = [...new Set(statedSizes(s.text))].filter((v) => known.size && !near(known, v));
      if (bad.length) mine.push(add('spec.size', 'warning', s, { sizes: bad.join(', '), known: [...known].sort((a, b) => a - b).join(', ') }));
    }
    if (s.inUse && SCHEDULES[s.group] && !SCHEDULES[s.group].some((k) => heldSchedules.has(k))) mine.push(add('spec.schedule', 'warning', s, { schedule: SCHEDULES[s.group][0] }));
    if (s.inUse && DETAIL_GROUPS.includes(s.group) && !list.length) mine.push(add('detail.missing', 'note', s));
    for (const l of list) if (l.sheet && !sheetIds.has(l.sheet)) mine.push(add('detail.sheet', 'warning', s, { sheet: l.sheet, link: l.title }));
    rows.push({ id: s.id, group: s.group, title: s.title, inUse: !!s.inUse, text: !!String(s.text || '').trim(), links: list, findings: mine });
  }
  return { rows, findings };
}

export function typeProblems(ag, { t = (k) => k } = {}) {
  return ag.findings.map((f) => ({
    code: f.code, severity: f.severity, part: f.type, msg: { key: f.code, vars: f.vars }, text: t('types.p.' + f.code, { name: f.title, ...f.vars }),
    about: [{ kind: 'type', id: f.type, label: f.title }], source: { name: 'bimcraft.stages' },
  }));
}

const esc = (v) => String(v ?? '').replace(/([\\*_`|#[\]])/g, '\\$1');
export function typeMarkdown(ag, sections, { t = (k) => k, title = '' } = {}) {
  const by = new Map(sections.map((s) => [s.id, s])), lines = ['# ' + esc(title || t('types.title')), ''];
  for (const r of ag.rows.filter((x) => x.inUse)) {
    const s = by.get(r.id);
    lines.push('## ' + esc(r.title), '');
    for (const f of s?.facts || []) lines.push('- ' + esc(f));
    if (s?.facts?.length) lines.push('');
    lines.push(r.text ? esc(String(s.text).replace(/\n+/g, ' ')) : '*' + t('spec.text.none') + '*', '');
    if (r.links.length) { lines.push('**' + t('types.details') + '**', ''); for (const l of r.links) lines.push('- ' + esc(l.title) + ' (' + t('types.app.' + l.app) + (l.ref ? ', ' + esc(l.ref) : '') + (l.sheet ? ', ' + t('types.sheet', { sheet: esc(l.sheet) }) : '') + ')' + (l.note ? ': ' + esc(l.note) : '')); lines.push(''); }
  }
  return lines.join('\n');
}
export { cleanText };
