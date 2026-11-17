/* SPDX-License-Identifier: Apache-2.0 */
/**
 * permit-submission-ui.js: the approval process and the submission format of the chosen regulation pack, as two collapsed blocks under the
 * supporting documents list (booklet rows BK.67 and BK.156, session bk-r3-regs; the words are in permit-submission.js). A fee or a time
 * frame shows only with the page it was read from and the date. Nothing here stops the package.
 *
 *   mountSubmissionInfo(pack, t) → [element]      [] when the pack has neither a process nor a format
 */
import { el } from './ui-util.js';
import { processRows, formatLines } from './permit-submission.js';

const link = (src, t) => (src ? el('a', { href: src.url, target: '_blank', rel: 'noopener noreferrer' }, t('permit.sub.read.link', { date: src.fetched })) : null);   // i18n-ignore: a rel value

export function mountSubmissionInfo(pack, t) {
  const out = [], rows = processRows(pack), lines = formatLines(pack, t);
  if (rows.length) {
    out.push(el('details', { 'data-cl-process': '' }, el('summary', {}, t('permit.sub.process.sum', { n: rows.length })),
      pack.process.summary ? el('p', { className: 'bc-muted' }, pack.process.summary) : null,
      el('ol', { className: 'bc-muted', 'data-cl-steps': '' }, ...rows.map((r) => el('li', { 'data-cl-step': r.id },
        el('strong', {}, r.title), r.who ? ' (' + r.who + ')' : '', r.clause ? ' [' + r.clause + ']' : '',
        r.handIn ? el('div', {}, t('permit.sub.handin', { what: r.handIn })) : null,
        r.documents.length ? el('div', {}, t('permit.sub.docs', { list: r.documents.join(', ') })) : null,
        r.detail ? el('div', {}, r.detail) : null,
        r.fee ? el('div', { 'data-cl-fee': '' }, t('permit.sub.fee', { text: r.fee.text }), ' ', link(r.fee.src, t)) : null,
        r.time ? el('div', { 'data-cl-time': '' }, t('permit.sub.time', { text: r.time.text }), ' ', link(r.time.src, t)) : null))),
      el('p', { className: 'bc-muted' }, t('permit.sub.process.note'))));
  }
  if (lines.length) {
    out.push(el('details', { 'data-cl-format': '' }, el('summary', {}, t('permit.sub.format.sum')),
      el('ul', { className: 'bc-muted' }, ...lines.map(([k, v]) => el('li', {}, el('strong', {}, k + ': '), v))),
      pack.subFormat.src ? el('p', { className: 'bc-muted' }, link(pack.subFormat.src, t)) : null));
  }
  return out;
}
