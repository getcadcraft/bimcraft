/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pack-fields.js: what a client pack or a stage report prints from the model (0.10 BK.63, BK.170; session bk-r3-stages-10).
 * No DOM: tools/bimcraft-test/pack-test.mjs (node bin/test-bimcraft.mjs --pack). Each builder returns a table
 * { title?, head, rows, ids: [[key…] per row], note? } or null when the model has nothing for it; pack-ui.js registers them as
 * document fields (doc-fields.js), so they print in any document, and every row keeps the elements behind it (BK.142).
 *
 *   sheetsTable({ sheets, history, t })            the model's sheets with the revision each stands at and when it was last issued
 *   areasTable({ table, fmtArea, t })              floor area by level from the rooms schedule's table (schedule-layouts.js describeSchedule)
 *   changesTable({ changes, issue, t })            sheets changed since the last issue (issuelog changesSince), with their element counts
 *   stageLine(stage, names, t)                     the project stage in words ('' → "not set")
 *   figuresCsv(tables, guidOf)                     every figure of a rendered document with the GlobalIds behind it (the pack's link file)
 */
import { lastIssueOf } from './issuelog/history.js';

export function sheetsTable({ sheets = [], history, t }) {
  if (!sheets.length) return null;
  const rows = sheets.map((s) => { const last = history ? lastIssueOf(history, s.id) : null; return [s.number, s.title, String((s.views || []).length), last ? last.sheet.rev : t('pack.sheets.notissued'), last ? last.issue.date : '']; });
  return { head: [t('pack.sheets.h.number'), t('pack.sheets.h.title'), t('pack.sheets.h.views'), t('pack.sheets.h.rev'), t('pack.sheets.h.issued')], rows, ids: rows.map(() => []) };
}

export function areasTable({ table, fmtArea, t }) {
  if (!table || !table.rows?.length) return null;
  const lv = table.cols.findIndex((c) => c.role === 'level'), ar = table.cols.findIndex((c) => c.kind === 'area');
  if (lv < 0 || ar < 0) return null;
  const groups = new Map();
  table.rows.forEach((r, i) => {
    const k = String(r[lv] ?? '');
    if (!groups.has(k)) groups.set(k, { n: 0, area: 0, ids: [] });
    const g = groups.get(k), v = table.vals?.[i]?.[ar];
    g.n++; if (typeof v === 'number') g.area += v;
    g.ids.push(...(Array.isArray(table.ids?.[i]) ? table.ids[i] : table.ids?.[i] !== undefined && table.ids?.[i] !== null ? [table.ids[i]] : []));
  });
  const order = table.cols[lv].order || [];
  const keys = [...groups.keys()].sort((a, b) => { const x = order.indexOf(a), y = order.indexOf(b); return x >= 0 && y >= 0 ? x - y : a.localeCompare(b, undefined, { numeric: true }); });
  const rows = keys.map((k) => [k || t('pack.areas.nolevel'), String(groups.get(k).n), fmtArea(groups.get(k).area)]);
  let n = 0, sum = 0; const all = [];
  for (const g of groups.values()) { n += g.n; sum += g.area; all.push(...g.ids); }
  rows.push([t('pack.areas.total'), String(n), fmtArea(sum)]);
  return { head: [t('pack.areas.h.level'), t('pack.areas.h.rooms'), t('pack.areas.h.area')], rows, ids: [...keys.map((k) => groups.get(k).ids), all], sums: { rooms: n, area: sum } };
}

export function changesTable({ changes, issue, t }) {
  if (!changes || !issue) return null;
  const rows = changes.sheets.map((s) => [s.number, s.title, s.rev, t('issues.state.' + s.state) + (s.why.length ? ' (' + s.why.map((w) => t('issues.why.' + w)).join(', ') + ')' : ''),
    String(s.elements.added.length), String(s.elements.changed.length), String(s.elements.removed.length)]);
  return { title: t('issues.changes.title', { code: issue.code, date: issue.date }), head: [t('issues.h.sheet'), t('issues.h.title'), t('issues.h.rev'), t('issues.h.state'), t('issues.changes.added'), t('issues.changes.changed'), t('issues.changes.removed')],
    rows, guids: changes.sheets.map((s) => [...s.elements.added, ...s.elements.changed]), note: changes.elements ? '' : t('issues.changes.noprints') };
}

export const stageLine = (stage, names, t) => (stage && names?.[stage] ? names[stage] : t('pack.stage.notset'));

/** tables = doc-fields.js figureTables(): [{ head, lines: [{ cells, ids, cellIds }] }]; guidOf(key) → GlobalId | ''. */
export function figuresCsv(tables, guidOf, words = {}) {
  const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s) && !/^-?\d/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const out = [[words.table || 'Table', words.row || 'Row', words.column || 'Column', words.figure || 'Figure', words.elements || 'GlobalIds']];   // i18n-ignore: defaults; the page passes its words
  tables.forEach((tb, ti) => tb.lines.forEach((l, ri) => {
    const whole = (l.ids || []).map(guidOf).filter(Boolean);
    if (!whole.length && !l.cellIds) return;
    l.cells.forEach((c, ci) => {
      if (ci === 0 || c === '' || c === undefined) return;
      const own = l.cellIds?.[ci] ? l.cellIds[ci].map(guidOf).filter(Boolean) : whole;
      if (own.length) out.push([ti + 1, l.cells[0], tb.head[ci] ?? '', c, own.join(' ')]);
    });
  }));
  return out.map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}
