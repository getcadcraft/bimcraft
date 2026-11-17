/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asbuilt.js: the as-built part of the handover package (0.10 booklet row BK.49, session bk-r3-checks-10). DOM-free:
 * node bin/test-bimcraft.mjs --checks10. It adds to the ONE handover package (handover-docs.js handoverPackage, built on the
 * packager the permit package uses: permit-package.js packageEntries); it is not another package.
 *
 *   asBuiltParts(w, { by, on, t, drawings, history }) → { summary, entries: [{ name, data, note }], lines: [markdown…] }
 *       as-built/verified-elements.csv   every element and room with its verification state, who, when and how
 *       as-built/as-built-statement.md   what the as-built IFC states (the totals; what "no record" means)
 *       as-built/as-built-drawings.pdf   the drawing set as it is now (drawings = { bytes, sheets } from the page, when it has sheets)
 *       as-built/issue-history.md + .json   the drawing changelog (history = the model's issue history, lib/issuelog; when there is one)
 *   setDrawingSource(fn) / drawingSet()   the page registers how to make the drawing set PDF (res-ui.js through verify-ui.js)
 *   asBuiltName(base) → '<base>-as-built.ifc'
 */
import { verificationList } from './verify-model.js';
import { summary, verifiedCsv, ASBUILT_PSET, VERIFY_PSET } from './modelaudit/verify.js';
import { changelogMarkdown, historyJson } from './issuelog/history.js';

let source = null;
export const setDrawingSource = (fn) => { source = typeof fn === 'function' ? fn : null; };
export function drawingSet() { try { return source ? source() : null; } catch (e) { console.error(e); return null; } }
export const asBuiltName = (base) => String(base || 'model').replace(/\.ifc$/i, '') + '-as-built.ifc';
const enc = (s) => new TextEncoder().encode(s);

export function asBuiltParts(w, { by = '', on = '', t = (k) => k, drawings = null, history = null } = {}) {
  const list = verificationList(w), sum = summary(list.map((x) => x.record));
  const head = ['GlobalId', t('verify.csv.class'), t('verify.csv.name'), t('model.level'), t('verify.state'), t('verify.by'), t('verify.on'), t('verify.method'), t('verify.source'), t('verify.note')];
  const L = ['# ' + t('asbuilt.h'), ''];
  if (on || by) L.push([on && t('asbuilt.date', { date: on }), by && t('asbuilt.by', { by })].filter(Boolean).join('  \n'), '');
  L.push(t('asbuilt.sum', { total: sum.total, field: sum.fieldVerified, checked: sum.checked, unverified: sum.unverified, none: sum.none }), '',
    t('asbuilt.explain', { pset: VERIFY_PSET, project: ASBUILT_PSET }), '');
  if (sum.unverified) L.push(t('asbuilt.warn.unverified', { n: sum.unverified }), '');
  if (sum.total && !sum.fieldVerified) L.push(t('asbuilt.warn.none'), '');
  const entries = [
    { name: 'as-built/as-built-statement.md', data: enc(L.join('\n')), note: t('asbuilt.f.statement') },
    { name: 'as-built/verified-elements.csv', data: enc('﻿' + verifiedCsv(list, head)), note: t('asbuilt.f.csv') },
  ];
  if (drawings?.bytes?.length) entries.push({ name: 'as-built/as-built-drawings.pdf', data: drawings.bytes, note: t('asbuilt.f.drawings', { n: drawings.sheets || 0 }) });
  if (history?.issues?.length) {
    entries.push({ name: 'as-built/issue-history.md', data: enc(changelogMarkdown(history)), note: t('asbuilt.f.history', { n: history.issues.length }) });
    entries.push({ name: 'as-built/issue-history.json', data: enc(historyJson(history)), note: t('asbuilt.f.historyjson') });
  }
  const lines = ['## ' + t('asbuilt.h'), '', t('asbuilt.sum', { total: sum.total, field: sum.fieldVerified, checked: sum.checked, unverified: sum.unverified, none: sum.none }),
    ...(drawings?.bytes?.length ? [] : ['', t('asbuilt.nodrawings')])];
  return { summary: sum, list, entries, lines };
}
