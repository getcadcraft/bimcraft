/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the words a person reads come through `t` (permit.sub.* in the language file); the rest are ids and CSV/markdown structure. */
/**
 * permit-submission.js: what a regulation pack's `process` and `submission` sections add to the permit package (booklet rows BK.67 and
 * BK.156, session bk-r3-regs). No DOM: node bin/test-bimcraft.mjs --permitsub. The one checklist engine is permit-checklist.js (it reads a
 * pack's required drawings and supporting documents as its list: checklistFromSections in the regs add-on's lib/sections.js); this file
 * adds the three things around it:
 *
 *   formatAdvice(pack, rows, facts) → [{ code, key, id, sheet?, vars }]       what the sheets in the model do not match in the pack's submission
 *       format: a paper size the format does not list (submission.paper), a portrait/landscape mismatch (submission.orientation), a view
 *       at a scale coarser than the drawing's (submission.scale; only a view with an explicit scale, never "fit"), a title block field the
 *       format asks for that no sheet carries (submission.titleblock). ADVISORY: a note in Problems, never a refusal.
 *   advice(pack, rows, facts) → [...]     formatAdvice + one entry per drawing or paper still missing (submission.drawing.missing /
 *       submission.document.missing, only for 'always' items; an 'if-applicable' one is not nagged)
 *   problemsFor(list, t) → [problem]      the Problems shape (severity 'note': it informs, it never blocks), source bimcraft.submission
 *   processMarkdown(pack, t) · formatLines(pack, t) · processRows(pack)   the approval steps and the format as the cover and the panel show them;
 *       a fee or a time frame is printed only with the source it was read from and the date (the pack format refuses one without)
 */
import { baseKey, isPortrait } from './res-sheets.js';

const clip = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const label = (s) => [s.number, s.title].filter(Boolean).join(' ') || s.id;
const lower = (v) => String(v ?? '').toLowerCase();

export function formatAdvice(pack, rows, facts) {
  const out = [], f = pack?.subFormat;
  if (!f) return out;
  const sheets = facts?.sheets || [];
  for (const s of sheets) {
    const key = baseKey(s.paper || ''), own = key.startsWith('fmt:') || !key;
    if (Array.isArray(f.sheetSizes) && f.sheetSizes.length && !own && !f.sheetSizes.includes(key)) out.push({ code: 'submission.paper', key: 'paper', id: s.id, sheet: label(s), vars: { sheet: label(s), paper: key.toUpperCase(), sizes: f.sheetSizes.map((x) => x.toUpperCase()).join(', ') } });
    if (f.orientation && f.orientation !== 'either' && s.paper && ((f.orientation === 'portrait') !== isPortrait(s.paper))) out.push({ code: 'submission.orientation', key: 'orientation', id: s.id, sheet: label(s), vars: { sheet: label(s), wanted: f.orientation } });
  }
  for (const r of rows || []) {
    const max = r.scale?.maxDenominator;
    if (!(max > 0) || r.status !== 'linked') continue;
    const kinds = (r.satisfy || []).flatMap((c) => c.view || []);
    for (const b of r.by || []) {
      const sheet = sheets.find((s) => s.id === b.id);
      for (const v of sheet?.views || []) {
        if (v.kind === 'schedule' || (kinds.length && !kinds.includes(v.kind)) || !(v.ratio > max)) continue;   // ratio 0 = fitted to the sheet: not known here
        out.push({ code: 'submission.scale', key: 'scale', id: r.id + ':' + b.id + ':' + v.ref, sheet: label(sheet), vars: { item: r.title, sheet: label(sheet), have: '1:' + v.ratio, need: r.scale.text } });
      }
    }
  }
  const tf = f.titleBlock?.fields || [];
  if (tf.length && sheets.length) {
    for (const fld of tf) {
      const words = [fld.key, ...(fld.words || [])].map(lower);
      const found = sheets.some((s) => Object.entries(s.fields || {}).some(([k, v]) => String(v).trim() && words.some((w) => lower(k).includes(w))) || (words.some((w) => /^(sheet|number|drawing|title)$/.test(w)) && (s.number || s.title)));
      if (!found) out.push({ code: 'submission.titleblock', key: 'titleblock', id: fld.key, vars: { field: fld.label } });
    }
  }
  return out;
}

export function advice(pack, rows, facts) {
  const out = formatAdvice(pack, rows, facts);
  for (const r of rows || []) if (r.status === 'missing' && r.when === 'always') out.push({ code: r.supplied ? 'submission.document.missing' : 'submission.drawing.missing', key: r.supplied ? 'document' : 'drawing', id: r.id, vars: { item: r.title, clause: r.clause } });
  return out;
}

export function problemsFor(list, t = (k) => k) {
  return list.map((a) => {
    const key = 'permit.sub.p.' + a.key;
    return { code: a.code, severity: 'note', msg: { key, vars: a.vars }, text: t(key, a.vars), about: [{ kind: a.sheet ? 'sheet' : 'submission', id: a.id, label: a.sheet || a.vars.item || a.vars.field || '' }], source: { name: 'submission' } };
  });
}

// ---------------------------------------------------------------- the process and the format, in words
const when = (s) => (s ? s.fetched : '');
export function processRows(pack) {
  const p = pack?.process;
  if (!p) return [];
  return (p.steps || []).map((s, i) => ({
    n: i + 1, id: s.id, title: s.title, who: s.who, handIn: s.handIn, documents: s.documents || [], detail: s.detail, clause: s.clause,
    fee: s.fee ? { text: s.fee.text, src: s.fee.src || p.sources?.[s.fee.source] || null } : null,
    time: s.time ? { text: s.time.text, src: s.time.src || p.sources?.[s.time.source] || null } : null,
    src: s.src || (s.source >= 0 ? p.sources?.[s.source] : null) || null,
  }));
}
const srcText = (src, t) => (src ? t('permit.sub.read', { title: clip(src.title, 120), url: src.url, date: when(src) }) : '');

export function processMarkdown(pack, t = (k) => k) {
  const rows = processRows(pack);
  if (!rows.length) return '';
  const L = ['## ' + t('permit.sub.process.h', { name: clip(pack.name, 160) }), ''];
  if (pack.process.summary) L.push(clip(pack.process.summary, 400), '');
  for (const r of rows) {
    L.push(r.n + '. **' + clip(r.title, 160) + '**' + (r.who ? ' (' + clip(r.who, 120) + ')' : '') + (r.clause ? ' [' + clip(r.clause, 80) + ']' : ''));
    if (r.handIn) L.push('   - ' + t('permit.sub.handin', { what: clip(r.handIn, 300) }));
    if (r.documents.length) L.push('   - ' + t('permit.sub.docs', { list: r.documents.map((d) => clip(d, 120)).join(', ') }));
    if (r.detail) L.push('   - ' + clip(r.detail, 600));
    if (r.fee) L.push('   - ' + t('permit.sub.fee', { text: clip(r.fee.text, 160) }) + ' (' + srcText(r.fee.src, t) + ')');
    if (r.time) L.push('   - ' + t('permit.sub.time', { text: clip(r.time.text, 160) }) + ' (' + srcText(r.time.src, t) + ')');
  }
  L.push('', '*' + t('permit.sub.process.note') + '*', '');
  return L.join('\n');
}

/** The submission format as [[label, text]] pairs (the panel and the cover both print these). */
export function formatLines(pack, t = (k) => k) {
  const f = pack?.subFormat;
  if (!f) return [];
  const out = [];
  if (f.sheetSizes?.length) out.push([t('permit.sub.f.sizes'), f.sheetSizes.map((x) => x.toUpperCase()).join(', ')]);
  if (f.orientation) out.push([t('permit.sub.f.orientation'), t('permit.sub.o.' + f.orientation)]);
  if (f.fileFormats?.length) out.push([t('permit.sub.f.files'), f.fileFormats.map((x) => x.toUpperCase()).join(', ') + (f.singleFile ? ' (' + t('permit.sub.f.single') + ')' : '')]);
  if (f.maxFileMB) out.push([t('permit.sub.f.max'), f.maxFileMB + ' MB']);
  if (f.fileNaming) out.push([t('permit.sub.f.naming'), clip(f.fileNaming, 300)]);
  if (f.copies && (f.copies.text || f.copies.paper !== undefined || f.copies.electronic !== undefined)) out.push([t('permit.sub.f.copies'), clip(f.copies.text || [f.copies.paper !== undefined ? t('permit.sub.f.paper', { n: f.copies.paper }) : '', f.copies.electronic !== undefined ? t('permit.sub.f.electronic', { n: f.copies.electronic }) : ''].filter(Boolean).join('; '), 300)]);
  if (f.titleBlock?.fields?.length) out.push([t('permit.sub.f.titleblock'), f.titleBlock.fields.map((x) => x.label).join(', ')]);
  if (f.stampSpace) out.push([t('permit.sub.f.stamp'), clip(f.stampSpace, 160)]);
  if (f.note) out.push([t('permit.sub.f.note'), clip(f.note, 300)]);
  return out;
}
export function formatMarkdown(pack, t = (k) => k) {
  const lines = formatLines(pack, t);
  if (!lines.length) return '';
  const src = pack.subFormat.src || null;
  return ['## ' + t('permit.sub.format.h', { name: clip(pack.name, 160) }), '', ...lines.map(([k, v]) => '- **' + k + ':** ' + v), ...(src ? ['', srcText(src, t)] : []), ''].join('\n');
}
