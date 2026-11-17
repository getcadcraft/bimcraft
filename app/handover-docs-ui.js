/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handover-docs-ui.js: the Handover documents part of BimCraft's Assets tab (booklet row BK.114, session bk-stages-10): the
 * completion certificate, the occupancy certificate, warranties, manuals, as-built drawings and other handover papers of the
 * PROJECT: add, edit, remove, open, and build the handover package (a zip: cover, list, COBie workbook, the model, attached files).
 * Rules and the IFC: handover-docs.js. The zip writer (bcf.js) and the COBie writer load on the first click.
 *
 *   handoverSection(host, { assets() → readAssets list, commit(op, label) → bool, render() }) → element
 *   host = the Assets tab's host (W, editor(), status, download, fileName, today)
 * Advisory: a missing certificate is listed, the package is built all the same.
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { openable } from './assets-bim.js';
import { HANDOVER_KINDS, readHandover, addHandoverOp, editHandoverOp, removeHandoverOp, missingKinds, cleanDoc, safeName, putFile, getFile, sha256Hex, MAX_FILE, handoverRows, handoverCsv, handoverIndex, handoverPackage } from './handover-docs.js';

const blank = () => ({ rel: null, kind: 'completion', title: '', date: '', issuer: '', reference: '', location: '', file: null });

export function handoverSection(host, ctx) {
  const S = handoverSection.state || (handoverSection.state = { form: null, open: false, busy: false });
  const e = host.editor();
  let docs = [];
  try { docs = e ? readHandover(e.api, e.mid) : []; } catch (err) { docs = []; }
  const say = (err) => host.status(err.key ? t(err.key) : String(err.message || err), true);
  const kb = (n) => (n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' kB');   // i18n-ignore: units

  async function attach(file, F) {
    if (!file) return;
    if (file.size > MAX_FILE) { host.status(t('handover.err.too-big'), true); return; }
    const bytes = new Uint8Array(await file.arrayBuffer());
    const sha = await sha256Hex(bytes), name = safeName(file.name);
    if (F.file && F.file.sha256 && F.file.sha256 !== sha && F.rel) host.status(t('handover.file.differs', { name }));
    else if (F.file && F.file.sha256 === sha) host.status(t('handover.file.same', { name }));
    F.file = { name, bytes: bytes.length, sha256: sha };
    F.location = 'handover/' + name;
    if (!F.title) F.title = file.name.replace(/\.[^.]+$/, '');
    putFile(F.location, bytes, sha);
    ctx.render();
  }
  function save(F) {
    try {
      const d = cleanDoc(F);
      const done = F.rel ? ctx.commit(editHandoverOp(F.rel, d), d.title) : ctx.commit(addHandoverOp(d), d.title);
      if (done) { S.form = null; host.status(t(F.rel ? 'handover.changed' : 'handover.added')); ctx.render(); }
    } catch (err) { say(err); }
  }
  function open(d) {
    const b = getFile(d.location);
    if (!b) return;
    host.download(d.file.name, b, 'application/octet-stream');
  }
  async function build() {
    const ed = host.editor();
    if (!ed || S.busy) return;
    S.busy = true;
    try {
      const [C, X, Z, AS, VM, IS, MW] = await Promise.all([import('./assets-bim-cobie.js'), import('./assets-bim-xlsx.js'), import('./bcf.js'), import('./asbuilt.js'), import('./verify-model.js'), import('./issue-set.js'), import('./model-write.js')]);
      const list = readHandover(ed.api, ed.mid);
      const base = String(host.fileName() || 'model').replace(/\.ifc$/i, '');
      const facts = C.gatherFacility(host.W, ed.api, ed.mid);
      const sheets = C.cobieWorkbook(ctx.assets(), facts, { documents: (o) => handoverRows(list, o) });
      const cobie = await X.writeXlsx(sheets, { title: base + ' COBie' });
      const loaded = list.filter((d) => d.file && d.loaded);
      // 0.10 BK.49 (bk-r3-checks-10): the as-built part. The model in the package is the AS-BUILT IFC: it states on the project how many
      // elements were measured on site (one undo step), and each such element carries its own record. With it: that list as a CSV, the
      // drawing set as it is now (the as-built drawings) and the drawing changelog when the model has issues.
      const by = (() => { try { return window.ccDocInfo?.info.get().author || ''; } catch (e) { return ''; } })();
      ctx.commit(VM.asBuiltOp({ by, on: host.today() }), t('asbuilt.undo'));
      const w = new MW.ModelWriter(host.W, ed.api, ed.mid);
      let history = null;
      try { history = IS.readIssues(w); } catch (e) { history = null; }
      const AB = AS.asBuiltParts(w, { by, on: host.today(), t, drawings: AS.drawingSet(), history });
      const files = [{ name: 'handover-documents.csv', note: t('handover.pkg.f.csv') }, { name: base + ' COBie.xlsx', note: t('handover.pkg.f.cobie') }, { name: AS.asBuiltName(base), note: t('asbuilt.f.ifc') }, ...AB.entries.map((e) => ({ name: e.name, note: e.note })), ...loaded.map((d) => ({ name: d.location, note: d.title }))];
      const index = handoverIndex(list, { project: facts.project?.name || facts.building?.name || base, date: host.today(), t, files }) + '\n' + AB.lines.join('\n') + '\n';
      const csv = handoverCsv(list, [t('handover.kind'), t('handover.title'), t('handover.date'), t('handover.issuer'), t('handover.reference'), t('handover.where'), t('handover.csv.inpkg'), 'SHA-256']);
      const out = Z.zip(handoverPackage({ docs: list, base, ifc: ed.save(), ifcName: AS.asBuiltName(base), cobie, index, csv, extra: AB.entries }));
      host.download(base + '-handover-package.zip', out, 'application/zip');
      const miss = missingKinds(list), notLoaded = list.filter((d) => d.file && !d.loaded).length;
      host.status(t('handover.built', { n: list.length }) + ' ' + t('asbuilt.built', { field: AB.summary.fieldVerified, total: AB.summary.total }) + (miss.length ? ' ' + t('handover.built.missing', { kinds: miss.map((k) => t('handover.kind.' + k)).join(', ') }) : '') + (notLoaded ? ' ' + t('handover.built.notloaded', { n: notLoaded }) : ''));
    } catch (err) { host.status(t('handover.err.build', { why: String(err.message || err) }), true); }
    S.busy = false;
  }

  const field = (label, input) => el('label', { className: 'fa-field' }, el('span', {}, label), input);
  const text = (F, k, attr, more = {}) => el('input', { type: more.type || 'text', className: 'bc-input fa-input', value: F[k], 'data-ho-f': attr, ...(more.placeholder ? { placeholder: more.placeholder } : {}), oninput: (ev) => { F[k] = ev.target.value; } });
  function form(F) {
    return el('div', { className: 'as-entry-form', 'data-ho-form': F.rel || 'new' },
      el('div', { className: 'as-form' },
        field(t('handover.kind'), el('select', { className: 'select-cc fa-select', 'data-ho-f': 'kind', onchange: (ev) => { F.kind = ev.target.value; } }, ...HANDOVER_KINDS.map((k) => el('option', { value: k, selected: k === F.kind }, t('handover.kind.' + k))))),
        field(t('handover.title'), text(F, 'title', 'title'))),
      el('div', { className: 'as-form' },
        field(t('handover.date'), text(F, 'date', 'date', { type: 'date' })),
        field(t('handover.issuer'), text(F, 'issuer', 'issuer'))),
      field(t('handover.reference'), text(F, 'reference', 'reference')),
      F.file
        ? el('p', { className: 'bc-muted', 'data-ho-file': '' }, t('handover.file.is', { name: F.file.name, size: kb(F.file.bytes) }), ' ',
          el('button', { type: 'button', className: 'bc-linkbtn', 'data-ho-unattach': '', onclick: () => { F.file = null; F.location = ''; ctx.render(); } }, t('handover.file.link-instead')))
        : field(t('assets.doc.location'), text(F, 'location', 'location', { placeholder: t('assets.doc.location.hint') })),
      el('div', { className: 'fa-head' },
        el('label', { className: 'btn-line btn-sm-cc' }, t(F.file ? 'handover.file.replace' : 'handover.file.attach'),
          el('input', { type: 'file', hidden: true, 'data-ho-attach': '', onchange: (ev) => { const f = ev.target.files?.[0]; ev.target.value = ''; attach(f, F); } })),
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-ho-save': '', onclick: () => save(F) }, t(F.rel ? 'handover.btn.save' : 'handover.btn.add')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ho-cancel': '', onclick: () => { S.form = null; ctx.render(); } }, t('assets.btn.cancel'))));
  }
  const miss = missingKinds(docs);
  const row = (d) => (S.form?.rel === d.rel ? el('li', { 'data-ho-doc': d.rel }, form(S.form)) : el('li', { 'data-ho-doc': d.rel, 'data-ho-kind': d.kind },
    el('div', { className: 'as-log-head' }, el('span', { className: 'as-due' }, t('handover.kind.' + d.kind)), ' ',
      openable(d.location) ? el('a', { href: d.location.trim(), target: '_blank', rel: 'noopener noreferrer', 'data-ho-open': '' }, d.title) : el('strong', {}, d.title)),   // i18n-ignore: a rel value
    el('div', { className: 'bc-muted as-notes' }, [d.date && t('handover.pkg.dated', { date: d.date }), d.issuer && t('handover.pkg.by', { issuer: d.issuer }), d.reference && t('handover.pkg.ref', { ref: d.reference })].filter(Boolean).join(', ')),
    el('div', { className: 'bc-muted as-notes', 'data-ho-where': '' }, d.file ? (d.loaded ? t('handover.file.is', { name: d.file.name, size: kb(d.file.bytes) }) : t(d.mismatch ? 'handover.file.mismatch' : 'handover.file.notloaded', { name: d.file.name })) : openable(d.location) ? d.location : t('assets.doc.beside', { name: d.location })),
    el('div', { className: 'as-log-acts' },
      d.file && d.loaded ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-ho-openfile': d.rel, onclick: () => open(d) }, t('handover.btn.open')) : null,
      d.file && !d.loaded ? el('label', { className: 'bc-linkbtn' }, t('handover.file.again'), el('input', { type: 'file', hidden: true, 'data-ho-again': d.rel, onchange: (ev) => { const f = ev.target.files?.[0]; ev.target.value = ''; again(f, d); } })) : null,
      el('button', { type: 'button', className: 'bc-linkbtn', 'data-ho-edit': d.rel, onclick: () => { S.form = { ...d, file: d.file ? { ...d.file } : null }; ctx.render(); } }, t('handover.btn.edit')),
      el('button', { type: 'button', className: 'bc-linkbtn', 'data-ho-del': d.rel, onclick: () => { if (ctx.commit(removeHandoverOp(d.rel), d.title)) host.status(t('handover.removed')); } }, t('assets.btn.remove')))));
  /** The file of a record attached again after the model was opened: the same file is taken as is; another one replaces it (one undo step). */
  async function again(file, d) {
    if (!file) return;
    if (file.size > MAX_FILE) { host.status(t('handover.err.too-big'), true); return; }
    const bytes = new Uint8Array(await file.arrayBuffer()), sha = await sha256Hex(bytes);
    if (sha === d.file.sha256) { putFile(d.location, bytes, sha); host.status(t('handover.file.same', { name: d.file.name })); ctx.render(); return; }
    const name = safeName(file.name);
    putFile('handover/' + name, bytes, sha);
    try { if (ctx.commit(editHandoverOp(d.rel, { ...d, file: { name, bytes: bytes.length, sha256: sha } }), d.title)) host.status(t('handover.file.differs', { name })); } catch (err) { say(err); }
  }
  return el('details', { className: 'as-cobie', 'data-ho': '', open: !!S.form || S.open, ontoggle: (ev) => { S.open = ev.target.open; } },
    el('summary', {}, t('handover.h') + (docs.length ? ' (' + docs.length + ')' : '')),
    el('p', { className: 'bc-muted' }, t('handover.intro')),
    !e ? el('p', { className: 'bc-muted' }, t('handover.nomodel')) : null,
    docs.length ? el('ul', { className: 'as-log', 'data-ho-list': '' }, ...docs.map(row)) : el('p', { className: 'bc-muted', 'data-ho-none': '' }, t('handover.none')),
    miss.length ? el('p', { className: 'bc-muted fa-warn', 'data-ho-missing': '' }, t('handover.missing', { kinds: miss.map((k) => t('handover.kind.' + k)).join(', ') })) : null,
    S.form && !S.form.rel ? form(S.form) : null,
    docs.some((d) => d.file) ? el('p', { className: 'bc-muted', 'data-ho-bundle-note': '' }, t('handover.bundle.note')) : null,
    el('div', { className: 'fa-head' },
      !S.form ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ho-new': '', disabled: !e, onclick: () => { S.form = { ...blank(), date: '' }; ctx.render(); } }, t('handover.btn.new')) : null,
      docs.some((d) => d.file && d.loaded) && host.saveBundle ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ho-savebundle': '', onclick: () => host.saveBundle() }, t('handover.btn.bundle')) : null,
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-ho-build': '', disabled: !e, onclick: build }, t('handover.btn.build'))));
}
