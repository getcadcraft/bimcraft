/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pack-ui.js: client packs and stage reports from the model (0.10 BK.63, BK.170; session bk-r3-stages-10), through model-ui.js
 * extend(). It gives Documents from the model (doc-ui.js) six more fields and builds a pack as one zip:
 *   {{stage}}     the project stage (the drawing details' own: window.ccDocInfo)
 *   {{options}}   the kept massing options side by side on area and cost (option-compare.js; cost from the price table, or "No rate")
 *   {{areas}}     floor area by level, from the rooms schedule
 *   {{sheets}}    the sheets with the revision each stands at (the issue history)
 *   {{issues}}    the issue history and drawing changelog
 *   {{changes}}   what changed since the last issue
 * Tables note their elements (doc-fields.js noteFigures), so a figure in the preview selects them. The pack section
 * (ui.inc data-pack) picks the Client pack or Stage report template, shows it in Documents, and "Build the pack" zips the
 * document as a PDF, a picture of the 3D view, and figures.csv (every figure with the GlobalIds behind it: the link that
 * survives outside the app, where a PDF cannot select anything).
 *
 *   mountPack(modelUi, { status, docs() → doc-ui.js api, prints() → element prints now, words() → the issue panel's words }) → { build(templateId) → Promise<{ name, entries }>, table(name), state }
 */
import { ModelWriter } from './model-write.js';
import { el } from './ui-util.js';
import { zip } from './bcf.js';
import { fmtArea, fmtLen } from './model-units.js';
import { registerDocField, noteFigures, mdTable, mdEscape, figureTables } from './doc-fields.js';
import { readSheets } from './views-model.js';
import { readIssues, changesFor } from './issue-set.js';
import { changelogMarkdown } from './issuelog/history.js';
import { readOptionSets } from './mass-options.js';
import { compareOptions, optionTable } from './option-compare.js';
import { readCostSettings } from './cost5d.js';
import { sheetsTable, areasTable, changesTable, stageLine, figuresCsv } from './pack-fields.js';

export const PACK_TEMPLATES = ['clientpack', 'stagereport'];

export function mountPack(modelUi, { status = () => {}, docs = () => null, prints = () => null, words = () => ({}) } = {}) {
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => { const e = A.ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const U = () => A.units();
  const stage = () => { try { const s = window.ccDocInfo?.tools().find((x) => x.name === 'stage_get')?.run(); return s?.stage ? { [s.stage]: s.name, key: s.stage } : null; } catch (e) { return null; } };
  const money = (cur) => (v) => { try { return cur ? new Intl.NumberFormat(undefined, { style: 'currency', currency: cur, maximumFractionDigits: Math.abs(v) >= 1000 ? 0 : 2 }).format(v) : v.toLocaleString(undefined, { maximumFractionDigits: 2 }); } catch (e) { return String(v); } };
  const keyOfGuid = (w, g) => { try { const id = w.byGuid(g); return id ? A.kb() + id : null; } catch (e) { return null; } };
  /** The tables, by field name: { title?, head, rows, keys: [[selection key…] per row], note? } | { text } | null. */
  function table(name) {
    const w = W();
    if (!w) return null;
    if (name === 'options') {
      const sets = readOptionSets(w);
      if (!sets.length) return { text: t('pack.opt.none') };
      const cost = readCostSettings(w), cur = cost.currency;
      return { tables: compareOptions(sets, { rows: cost.rows, currency: cur }).map((c) => { const T = optionTable(c, { t, fmtArea: (m2) => fmtArea(m2 * 1e6, U()), fmtLen: (mm) => fmtLen(mm, U()), money: money(cur) }); return { ...T, keys: c.options.map((o) => [A.kb() + o.id]), cmp: c }; }) };
    }
    if (name === 'areas') {
      const sc = A.schedules?.()?.rooms;
      const T = areasTable({ table: sc?.table, fmtArea: (v) => fmtArea(v, U()), t });
      return T ? { tables: [{ ...T, keys: T.ids.map((ids) => ids.map((id) => A.kb() + id)) }] } : { text: t('pack.areas.none') };
    }
    if (name === 'sheets') {
      const T = sheetsTable({ sheets: readSheets(w), history: readIssues(w), t });
      return T ? { tables: [{ ...T, keys: T.ids }] } : { text: t('issues.nosheets') };
    }
    if (name === 'issues') return { text: changelogMarkdown(readIssues(w), words()), raw: true };
    if (name === 'changes') {
      const h = readIssues(w), last = h.issues[h.issues.length - 1];
      if (!last) return { text: t('issues.none') };
      const T = changesTable({ changes: changesFor(w, last.id, prints()), issue: last, t });
      return { tables: [{ ...T, keys: T.guids.map((gs) => gs.map((g) => keyOfGuid(w, g)).filter(Boolean)) }] };
    }
    if (name === 'stage') { const s = stage(); return { text: stageLine(s?.key, s, t) }; }
    return null;
  }
  const md = (name) => {
    if (!A.ed()) return null;
    const r = table(name);
    if (!r) return null;
    if (r.text !== undefined) return r.raw ? '\n\n' + r.text + '\n\n' : mdEscape(r.text);
    return r.tables.map((T) => {
      noteFigures(T.head, T.rows.map((cells, i) => ({ cells, ids: T.keys[i] || [], cellIds: null })));
      return '\n\n' + (T.title ? '**' + mdEscape(T.title) + '**' : '') + mdTable(T.head, T.rows) + (T.note ? mdEscape(T.note) + '\n\n' : '');
    }).join('');
  };
  for (const name of ['stage', 'options', 'areas', 'sheets', 'issues', 'changes']) registerDocField(name, () => md(name));

  async function build(id) {
    const d = docs();
    if (!d || !A.ed()) { status(t('sx.su915.needs'), true); return null; }
    d.pickTemplate(id);
    const res = d.make('pdf', { keep: true });
    if (!res?.pdf) return null;
    const w = W(), base = String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
    const guidOf = (key) => { try { return w.guidOf(key - A.kb()) || ''; } catch (e) { return ''; } };
    const enc = (s) => new TextEncoder().encode(s);
    const entries = [{ name: '01-' + id + '.pdf', data: res.pdf.bytes }, { name: '02-figures.csv', data: enc(String.fromCharCode(0xfeff) + figuresCsv(figureTables(), guidOf, { table: t('pack.fig.table'), row: t('pack.fig.row'), column: t('pack.fig.column'), figure: t('pack.fig.figure'), elements: t('pack.fig.elements') })) }];
    try { const url = A.host.viewer?.()?.snapshot?.(); if (url && url.startsWith('data:image/png;base64,')) entries.push({ name: '03-view.png', data: Uint8Array.from(atob(url.slice(22)), (c) => c.charCodeAt(0)) }); } catch (e) { /* no 3D view up: the pack goes without the picture */ }
    entries.push({ name: 'README.md', data: enc(t('pack.readme', { title: res.title, date: new Date().toISOString().slice(0, 10), files: entries.map((x) => x.name).join(', ') }) + '\n') });
    const name = base + '-' + id + '.zip';
    A.host.download(name, zip(entries), 'application/zip');
    status(t('pack.built', { name, n: entries.length }));
    return { name, entries };
  }

  function render() {
    const box = A.root.querySelector('[data-pack]');
    if (!box) return;
    const open = (id) => { const d = docs(); if (!d) return; d.pickTemplate(id); A.root.querySelector('[data-sx-docs-details]')?.scrollIntoView({ block: 'nearest' }); };
    box.replaceChildren(
      el('p', { className: 'bc-muted' }, t('pack.intro')),
      ...PACK_TEMPLATES.map((id) => el('div', { className: 'bc-find-row', 'data-pack-row': id },
        el('strong', {}, t('sx.su889.tpl.' + id)), ' ',
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-pack-open': id, onClick: () => open(id) }, t('pack.btn.open')), ' ',
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-pack-build': id, onClick: () => build(id).catch((e) => status(String(e?.message || e), true)) }, t('pack.btn.build')))),
      el('p', { className: 'bc-sub' }, t('pack.help')));
  }
  A = modelUi.extend({ refresh() { /* the fields read the model when a document is made */ } });
  A.root.querySelector('[data-pack-details]')?.addEventListener('toggle', (e) => { if (e.target.open) render(); });
  render();
  const api = { build, table, render, md };
  if (typeof window !== 'undefined') window.bimcraftPack = api;   // tests
  return api;
}
