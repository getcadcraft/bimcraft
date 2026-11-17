/* SPDX-License-Identifier: Apache-2.0 */
/**
 * assets-bim-cobie-ui.js — the COBie part of BimCraft's Assets tab (0.7 LC.12 item 2, session bim-ops): save the model and its
 * asset data as a COBie spreadsheet (.xlsx), and read one back — every change listed first, applied in one undo step.
 * The spreadsheet code (assets-bim-cobie.js, assets-bim-xlsx.js) loads on the first click.
 *
 *   cobieSection(host, { assets() → readAssets list, commit(op, label) → bool, render() }) → element
 *   host = the Assets tab's host (W, editor(), status, download, fileName)
 * The address typed for COBie's CreatedBy is a convenience kept in this browser (localStorage `bimcraft.cobie.by`).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { importOp } from './assets-bim.js';

const BY_KEY = 'bimcraft.cobie.by';
const load = () => Promise.all([import('./assets-bim-cobie.js'), import('./assets-bim-xlsx.js')]);
const readBy = () => { try { return localStorage.getItem(BY_KEY) || ''; } catch { return ''; } };

export function cobieSection(host, ctx) {
  const S = cobieSection.state || (cobieSection.state = { by: readBy(), preview: null, busy: false });
  const ed = () => host.editor();

  async function save() {
    const e = ed();
    if (!e || S.busy) return;
    S.busy = true;
    try {
      const [C, X] = await load();
      const H = await import('./handover-docs.js');   // BK.114: the project's handover documents go on the Document sheet too
      const sheets = C.cobieWorkbook(ctx.assets(), C.gatherFacility(host.W, e.api, e.mid), { createdBy: S.by, documents: (o) => H.handoverRows(H.readHandover(e.api, e.mid), o) });
      const base = String(host.fileName() || 'model').replace(/\.ifc$/i, '');
      host.download(base + ' COBie.xlsx', await X.writeXlsx(sheets, { title: base + ' COBie' }), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      const n = sheets.find((s) => s.name === 'Component').rows.length - 1;
      host.status(t('assets.cobie.saved', { n }));
    } catch (err) { host.status(t('assets.cobie.err.save', { why: String(err.message || err) }), true); }
    S.busy = false;
  }
  async function read(file) {
    const e = ed();
    if (!e || !file) return;
    if (file.size > 30 * 1024 * 1024) { host.status(t('assets.cobie.err.too-big'), true); return; }
    S.busy = true;
    try {
      const [C, X] = await load();
      const wb = await X.readXlsx(new Uint8Array(await file.arrayBuffer()));
      const r = C.cobieChanges(wb.sheets, ctx.assets(), C.elementIndex(e.api, e.mid));
      S.preview = { file: file.name, ...r, formulas: wb.formulas };
      host.status(r.changes.length ? t('assets.cobie.read', { n: r.changes.length, rows: r.rows }) : t('assets.cobie.same', { n: r.rows }), !r.rows);
    } catch (err) { S.preview = null; host.status(err.key ? t(err.key) : t('assets.cobie.err.read', { why: String(err.message || err) }), true); }
    S.busy = false;
    ctx.render();
  }
  function apply() {
    const p = S.preview;
    if (!p?.changes.length) return;
    try {
      if (ctx.commit(importOp(p.changes), t('assets.cobie.label'))) { host.status(t('assets.cobie.applied', { n: p.changes.length })); S.preview = null; ctx.render(); }
    } catch (err) { host.status(err.key ? t(err.key) : String(err.message || err), true); }
  }

  const field = (f) => (f === 'doc' ? t('assets.h.docs') : t('assets.f.' + f.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())));
  const p = S.preview;
  return el('details', { className: 'as-cobie', 'data-as-cobie': '', open: !!p || S.open, ontoggle: (ev) => { S.open = ev.target.open; } },
    el('summary', {}, t('assets.cobie.h')),
    el('p', { className: 'bc-muted' }, t('assets.cobie.intro')),
    el('label', { className: 'fa-field' }, el('span', {}, t('assets.cobie.by')),
      el('input', { type: 'email', className: 'bc-input fa-input', value: S.by, placeholder: 'name@example.com', 'data-as-cobie-by': '', oninput: (ev) => { S.by = ev.target.value.trim().slice(0, 120); try { localStorage.setItem(BY_KEY, S.by); } catch { /* private window */ } } })),
    el('div', { className: 'fa-head' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-as-cobie-save': '', onclick: save }, t('assets.cobie.btn.save')),
      el('label', { className: 'btn-line btn-sm-cc' }, t('assets.cobie.btn.read'),
        el('input', { type: 'file', accept: '.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', hidden: true, 'data-as-cobie-file': '', onchange: (ev) => { const f = ev.target.files?.[0]; ev.target.value = ''; read(f); } }))),
    p ? el('div', { className: 'as-detail', 'data-as-cobie-preview': '' },
      el('p', {}, t('assets.cobie.preview', { file: p.file, rows: p.rows, n: p.changes.length })),
      p.changes.length ? el('ul', { className: 'as-log' }, ...p.changes.slice(0, 200).map((c) => el('li', { 'data-as-cobie-change': c.guid },
        el('strong', {}, c.name || c.guid),
        ...c.diff.map((d) => el('div', { className: 'bc-muted' }, t(d.from ? 'assets.cobie.diff' : 'assets.cobie.diff-new', { field: field(d.field), from: d.from, to: d.to })))))) : null,
      p.changes.length > 200 ? el('p', { className: 'bc-muted' }, t('assets.more', { n: p.changes.length - 200 })) : null,
      p.unmatched.length ? el('p', { className: 'bc-muted', 'data-as-cobie-unmatched': '' }, t('assets.cobie.unmatched', { n: p.unmatched.length, names: p.unmatched.slice(0, 5).join(', ') })) : null,
      p.skipped.length ? el('p', { className: 'bc-muted fa-warn', 'data-as-cobie-skipped': '' }, t('assets.cobie.skipped', { n: p.skipped.length })) : null,
      p.formulas ? el('p', { className: 'bc-muted' }, t('assets.cobie.formulas', { n: p.formulas })) : null,
      p.jobs ? el('p', { className: 'bc-muted' }, t('assets.cobie.jobs', { n: p.jobs })) : null,
      el('div', { className: 'fa-head' },
        p.changes.length ? el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-as-cobie-apply': '', onclick: apply }, t('assets.cobie.btn.apply', { n: p.changes.length })) : null,
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-as-cobie-cancel': '', onclick: () => { S.preview = null; ctx.render(); } }, t('assets.btn.cancel')))) : null);
}
