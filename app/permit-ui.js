/* SPDX-License-Identifier: Apache-2.0 */
/**
 * permit-ui.js — the Permit package section (0.8 EG.44, session bim_PART_2): a <details> under Renovation phases in the left panel (ui.inc,
 * data-eg44). The core is permit-package.js (DOM-free, tools/bimcraft-test/permit-test.mjs). It reads the `regs` add-on's report data
 * (window.ccRegsReportData / ccRegsReportPdf, when that add-on is on) and the Problems list (window.ccProblems.report), asks for the project's
 * name, address and applicant and the sheets and forms (one per line; a ✓ at the start marks one done), shows the likely review comments,
 * and builds a zip: cover, comments CSV, the regulation report PDF and the IFC.
 *
 *   mountPermit(host) → { build(), comments() } | null
 *   host = { root, editor(), status(text, isError), download(name, data, type), fileName(), t }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { zip } from './bcf.js';
import { reviewComments, problemComments, permitMarkdown, commentsCsv, packageFiles, NAMES } from './permit-package.js';

const KEY = 'bimcraft.permit';
const lines = (s) => String(s || '').split(/\r?\n/).map((x) => x.trim()).filter(Boolean).slice(0, 200);
const todo = (x) => { const done = /^(✓|\[x\]|x )/i.test(x); return { name: x.replace(/^(✓|\[x\]|x )\s*/i, ''), included: done, done }; };

export function mountPermit(host) {
  const box = host.root?.querySelector('[data-eg44]');
  if (!box) return null;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
  const S = { name: saved.name || '', address: saved.address || '', applicant: saved.applicant || '', sheets: saved.sheets || '', forms: saved.forms || '' };
  const keep = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private window */ } };
  const reportData = () => { try { return window.ccRegsReportData ? window.ccRegsReportData() : null; } catch (e) { return null; } };
  const problems = () => { try { return window.ccProblems?.report?.()?.rows || []; } catch (e) { return []; } };
  const comments = () => { const d = reportData(); return { data: d, list: [...reviewComments(d?.rows || []), ...problemComments(problems())] }; };

  function render() {
    const { data, list } = comments();
    const field = (k, label, ta = false) => el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, label),
      (() => { const i = el(ta ? 'textarea' : 'input', { className: ta ? 'bc-input' : 'bc-input', rows: 3, value: S[k], 'data-eg44-field': k, 'aria-label': label }); if (ta) i.textContent = S[k]; i.addEventListener('input', () => { S[k] = i.value; keep(); }); return i; })());
    const n = { fail: 0, borderline: 0, unchecked: 0, problem: 0 };
    for (const c of list) n[c.kind]++;
    box.replaceChildren(
      el('p', { className: 'bc-muted' }, t('eg44.intro')),
      data ? el('p', { 'data-eg44-sum': '' }, t('eg44.sum', n)) : el('p', { className: 'bc-note', 'data-eg44-noregs': '' }, t('eg44.noregs')),
      field('name', t('eg44.name')), field('address', t('eg44.address')), field('applicant', t('eg44.applicant')), field('sheets', t('eg44.sheets'), true), field('forms', t('eg44.forms'), true),
      list.length ? el('ul', { className: 'bc-checks-res', 'data-eg44-list': '' }, list.slice(0, 40).map((c) => el('li', { 'data-eg44-kind': c.kind }, el('div', { className: 'bc-check-head' }, el('span', {}, c.text), el('span', { className: c.kind === 'fail' ? 'n' : 'ok' }, t('eg44.kind.' + c.kind))), el('span', { className: 'bc-muted' }, c.fix || '')))) : null,
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-eg44-build': '', onClick: () => build() }, t('eg44.build'))));
  }
  async function build() {
    const e = host.editor();
    if (!e) { host.status(t('eg44.nomodel'), true); return; }
    const { data, list } = comments();
    const reg = list.filter((c) => c.kind !== 'problem'), other = list.filter((c) => c.kind === 'problem');
    let pdf = null;
    try { pdf = window.ccRegsReportPdf ? window.ccRegsReportPdf().bytes : null; } catch (err) { pdf = null; }
    const ifc = e.save();
    const files = [{ name: NAMES.cover }, { name: NAMES.comments, note: t('eg44.f.comments') }, ...(pdf ? [{ name: NAMES.report, note: t('eg44.f.report') }] : []), { name: NAMES.ifc, note: t('eg44.f.ifc') }];
    const cover = permitMarkdown({ project: { name: S.name || host.fileName(), address: S.address, applicant: S.applicant, date: new Date().toISOString().slice(0, 10) }, comments: reg, problems: other,
      report: data, sheets: lines(S.sheets).map(todo), forms: lines(S.forms).map(todo), files });
    const out = zip(packageFiles({ cover, comments: commentsCsv(list), ifc, reportPdf: pdf }));
    host.download((host.fileName() || 'model').replace(/\.ifc$/i, '') + '-permit-package.zip', out, 'application/zip');
    host.status(t('eg44.built', { n: list.length }));
  }
  render();
  return { build, comments: () => comments().list, render };
}
