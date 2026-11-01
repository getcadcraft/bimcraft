/* SPDX-License-Identifier: Apache-2.0 */
/**
 * permit-package.js — a permit package with the comments a reviewer is likely to make (0.8 EG.44, session bim_PART_2). No DOM:
 * tools/bimcraft-test/permit-test.mjs (node bin/test-bimcraft.mjs --permit) runs it in Node.
 *
 * It gathers what the model already knows into one folder for the plan examiner: the regulation check (the `regs` add-on's report data),
 * the other problems in the Problems list (IDS, model checks), the sheets and forms the person lists, and a cover that says what is in it.
 * "Likely review comments" are written from the checks, not guessed: a rule the drawing fails is a comment; a rule it meets by a
 * hair is a heads-up; a rule that could not be checked is a question. Each cites its pack and clause as the report has it.
 * A guide only: the registered professional and the local authority decide. Nothing is sent anywhere; the person gets a zip.
 *
 *   reviewComments(rows, { margin = 0.05 }) → [{ kind: 'fail'|'borderline'|'unchecked', where, rule, clause, required, found, source, text, fix }]
 *       rows = ccRegsReportData().rows (strings for the report plus raw: { id, ok, req, found, op, unit }); a row without raw is read from its strings
 *       borderline = meets a '<='/'>=' rule within `margin` (5 %) of the limit, the side where one more inch fails it
 *   problemComments(problems, { skip = ['regulation'] }) → [{ kind: 'problem', where, text, source }]   non-regulation Problems, one per message, counted
 *   permitMarkdown({ project, comments, problems, report, sheets, forms, files }, t?) → markdown   the cover + checklist + comments
 *   commentsCsv(comments) → CSV (formula cells neutralised)
 *   packageFiles({ cover, comments, ifc, reportPdf, extra }) → [{ name, data: Uint8Array }]   for bcf.js zip()
 *   manifest(files) → [{ name, bytes, sha256 }] is left to the caller (SubtleCrypto); names are fixed here: 00-cover.md, 01-review-comments.csv, 02-regulation-report.pdf, 03-model.ifc
 */
const clip = (s, n) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const esc = (s) => clip(s, 400).replace(/\|/g, '/');
const FIX = {
  '<=': 'Reduce it to the limit or below, or show the authority why a relaxation applies.',
  '>=': 'Increase it to the limit or above, or show the authority why a relaxation applies.',
  between: 'Bring it inside the range, or show the authority why a relaxation applies.',
};

export function reviewComments(rows, { margin = 0.05 } = {}) {
  const out = [];
  for (const r of rows || []) {
    const raw = r.raw || {};
    const ok = raw.ok !== undefined ? raw.ok : /meets|pass|yes/i.test(r.result || '') ? true : /fail/i.test(r.result || '') ? false : null;
    const base = { where: clip(r.where, 120), rule: clip(r.label, 160), clause: clip(r.clause, 80), required: clip(r.required, 80), found: clip(r.found, 80), source: clip(r.source, 200) };
    if (ok === false) {
      out.push({ kind: 'fail', ...base, text: base.rule + (base.where ? ' (' + base.where + ')' : '') + ': required ' + base.required + ', the drawing has ' + base.found + (base.clause ? ' [' + base.clause + ']' : '') + '.', fix: FIX[raw.op] || 'Change the drawing to meet the rule, or show why a relaxation applies.' });
    } else if (ok === null) {
      out.push({ kind: 'unchecked', ...base, text: base.rule + (base.where ? ' (' + base.where + ')' : '') + ': this could not be checked from the model' + (base.clause ? ' [' + base.clause + ']' : '') + '. A reviewer will ask for it.', fix: 'Add the missing information to the model or the drawing set (a note, a schedule or a detail).' });
    } else if (ok === true && typeof raw.found === 'number' && (raw.op === '<=' || raw.op === '>=') && typeof raw.req === 'number' && raw.req > 0) {
      const room = raw.op === '<=' ? (raw.req - raw.found) / raw.req : (raw.found - raw.req) / raw.req;
      if (room >= 0 && room <= margin) {
        out.push({ kind: 'borderline', ...base, text: base.rule + (base.where ? ' (' + base.where + ')' : '') + ': meets the rule by ' + Math.round(room * 1000) / 10 + '% of the limit (' + base.found + ' against ' + base.required + ')' + (base.clause ? ' [' + base.clause + ']' : '') + '. A reviewer measuring on the sheet may call it a miss.', fix: 'Dimension it on the sheet, or leave more margin.' });
      }
    }
  }
  const rank = { fail: 0, borderline: 1, unchecked: 2 };
  return out.sort((a, b) => rank[a.kind] - rank[b.kind]);
}

export function problemComments(problems, { skip = ['regulation'] } = {}) {
  const by = new Map();
  for (const p of problems || []) {
    if (!p || skip.includes(p.sourceKind || p.kind)) continue;
    if (p.severity === 'note') continue;
    const said = p.text ?? p.message ?? '';   // the Problems store calls it message in its report rows, text in the problem itself
    const key = (p.source?.name || p.sourceKind || '') + '|' + (p.code || '') + '|' + clip(said, 120);
    const b = by.get(key) || { kind: 'problem', where: '', text: clip(said, 300), source: clip(p.source?.name || p.sourceKind || '', 80), n: 0 };
    b.n++;
    by.set(key, b);
  }
  return [...by.values()].map((b) => ({ ...b, text: b.n > 1 ? b.text + ' (' + b.n + ' elements)' : b.text })).sort((a, b) => b.n - a.n);
}

export function permitMarkdown({ project = {}, comments = [], problems = [], report = null, sheets = [], forms = [], files = [] } = {}, t = (k, v) => k) {
  const L = [];
  L.push('# ' + (esc(project.name) || 'Permit package'), '');
  L.push([project.address && 'Address: ' + esc(project.address), project.applicant && 'Applicant: ' + esc(project.applicant), project.date && 'Date: ' + esc(project.date)].filter(Boolean).join('  \n'), '');
  L.push('## What is in this package', '', ...files.map((f) => '- ' + esc(f.name) + (f.note ? ' — ' + esc(f.note) : '')), '');
  if (report?.sum) L.push('## Regulation check', '', 'Rules met: ' + report.sum.meets + '. Rules failed: ' + report.sum.fails + '. Rules not checked: ' + report.sum.none + '.', '');
  const n = { fail: 0, borderline: 0, unchecked: 0 };
  for (const c of comments) n[c.kind]++;
  L.push('## Comments a reviewer is likely to make', '', 'Written from the checks above: ' + n.fail + ' the drawing fails, ' + n.borderline + ' it meets by a hair, ' + n.unchecked + ' it could not be checked.', '');
  if (!comments.length) L.push('None found by the checks run.', '');
  else {
    L.push('| Kind | Where | Comment | What to do |', '|---|---|---|---|');
    for (const c of comments) L.push('| ' + [c.kind, c.where, c.text, c.fix].map(esc).join(' | ') + ' |');
    L.push('');
  }
  if (problems.length) { L.push('## Other problems in the model', '', ...problems.map((p) => '- ' + esc(p.text) + (p.source ? ' (' + esc(p.source) + ')' : '')), ''); }
  L.push('## Sheets', '');
  L.push(...(sheets.length ? sheets.map((s) => '- [' + (s.included ? 'x' : ' ') + '] ' + esc(s.name) + (s.note ? ' — ' + esc(s.note) : '')) : ['None listed.']), '');
  L.push('## Forms', '');
  L.push(...(forms.length ? forms.map((s) => '- [' + (s.done ? 'x' : ' ') + '] ' + esc(s.name) + (s.note ? ' — ' + esc(s.note) : '')) : ['None listed.']), '');
  L.push('---', '', 'This package is a guide made from the model. The registered professional and the local authority decide what is required and what is accepted. No representation is made that any requirement is met.');
  return L.join('\n');
}

export function commentsCsv(comments) {
  const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const head = ['kind', 'where', 'rule', 'clause', 'required', 'found', 'source', 'comment', 'what to do'];
  return [head, ...comments.map((c) => [c.kind, c.where, c.rule, c.clause, c.required, c.found, c.source, c.text, c.fix])].map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}

export const NAMES = { cover: '00-cover.md', comments: '01-review-comments.csv', report: '02-regulation-report.pdf', ifc: '03-model.ifc' };
export function packageFiles({ cover, comments, ifc = null, reportPdf = null, extra = [] }) {
  const enc = (s) => new TextEncoder().encode(s);
  const out = [{ name: NAMES.cover, data: enc(cover) }, { name: NAMES.comments, data: enc(comments) }];
  if (reportPdf) out.push({ name: NAMES.report, data: reportPdf });
  if (ifc) out.push({ name: NAMES.ifc, data: ifc });
  for (const e of extra || []) if (e?.name && e.data) out.push({ name: String(e.name).replace(/[^A-Za-z0-9._ -]/g, '_').slice(0, 80), data: e.data });
  return out;
}
