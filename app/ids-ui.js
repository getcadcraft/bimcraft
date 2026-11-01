/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ids-ui.js — Model › Check against IDS… (0.7.1 71.25; map docs/apps/ids.md): the client's .ids file (buildingSMART Information
 * Delivery Specification) checked against the open IFC by cc-ids (./ids/, lib/ids synced). Every failure is a Problem (source
 * bimcraft.ids, kind check, warning) about the element by GlobalId, re-checked after every edit, undo and redo; the check report
 * lists the IDS and each specification.
 *
 * Where the IDS is kept (lead 2026-10-26: a client's IDS may be confidential and must not travel to every recipient of the IFC):
 *   - the IFC holds only a reference — property set CadCraft_IDS on IfcProject: Name, Hash, Title, Version, Format (one undo step);
 *   - the text stays beside the model in this browser (IndexedDB "cc-ids", by hash; Studio keeps it in its web view the same way);
 *   - Settings › BimCraft › "Keep the IDS inside the IFC" (off by default) also writes the text (Content) into the IFC.
 *   Reopened where the text is not found (another computer, another browser): a note in Problems, "IDS … not found — load it again".
 *
 *   mountIds({ box, details, openBtn, t, el, status, ifc(), readRecord(), writeRecord(ref), canWrite(), embed() }) → { changed(), reset() }
 *     readRecord()  { name, hash, title, version, text | null } from the IFC, or null
 *     writeRecord   { name, hash, title, version, text? } (text only when embedding) or null = forget; one undo step
 */
import { idsSession } from './ids/session.js';
import { cleanIdsRef } from './ids/record.js';

/** The texts beside the models, by hash (IndexedDB; a private window may refuse: then this tab's memory only). */
const mem = new Map();
const idb = () => new Promise((ok, no) => { try { const r = indexedDB.open('cc-ids', 1); r.onupgradeneeded = () => r.result.createObjectStore('texts'); r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error); } catch (e) { no(e); } });
async function putText(hash, text) {
  mem.set(hash, text);
  try { const db = await idb(); await new Promise((ok, no) => { const tx = db.transaction('texts', 'readwrite'); tx.objectStore('texts').put(text, hash); tx.oncomplete = ok; tx.onerror = () => no(tx.error); }); db.close(); } catch (e) { /* this tab keeps it */ }
}
async function getText(hash) {
  if (mem.has(hash)) return mem.get(hash);
  try {
    const db = await idb();
    const v = await new Promise((ok, no) => { const r = db.transaction('texts').objectStore('texts').get(hash); r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error); });
    db.close();
    if (typeof v === 'string') { mem.set(hash, v); return v; }
  } catch (e) { /* not stored here */ }
  return null;
}

export function mountIds({ box, details, openBtn, t, el, status = () => {}, ifc, readRecord, writeRecord, canWrite = () => true, embed = () => false }) {
  const session = idsSession({ t, setKey: 'ids', ifc });
  let src = null, busy = false, last = '', missing = null, gen = 0;
  const input = el('input', { type: 'file', accept: '.ids,.xml,application/xml,text/xml', hidden: true, 'data-ids-input': '' });
  const missingProblem = () => [{ id: 'ids:missing:' + missing.hash, code: 'ids.missing', severity: 'note', msg: { key: 'ids.p.missing', vars: { title: missing.title || missing.name } },
    text: t('ids.p.missing', { title: missing.title || missing.name }), about: [{ kind: 'ids', id: 'ids:' + missing.hash, label: missing.title || missing.name }], source: { name: missing.title || missing.name } }];

  const render = () => {
    const v = session.view();
    const rows = [el('p', { className: 'bc-muted' }, t('ids.intro', { what: t('ids.what.model') }))];
    if (missing) rows.push(el('p', { className: 'bc-note', role: 'alert', 'data-ids-missing': '' }, t('ids.p.missing', { title: missing.title || missing.name })));
    else if (!v) rows.push(el('p', { className: 'bc-muted', 'data-ids-none': '' }, t('ids.none')));
    else {
      rows.push(el('p', { className: 'bc-h', 'data-ids-title': '' }, v.title));
      if (v.meta.length) rows.push(el('p', { className: 'bc-muted' }, v.meta.join(', ')));
      rows.push(el('p', { className: 'bc-muted' }, t(embed() ? 'ids.remembered.embed' : 'ids.remembered.beside')));
      if (v.error) rows.push(el('p', { className: 'bc-note', role: 'alert' }, t('ids.err.read', { msg: v.error })));
      if (v.ifcError) rows.push(el('p', { className: 'bc-note', role: 'alert' }, t('ids.err.ifc', { msg: v.ifcError })));
      if (v.issues.length) rows.push(el('details', {}, el('summary', { className: 'bc-muted' }, t('ids.issues', { n: v.issues.length })), el('ul', {}, v.issues.slice(0, 50).map((x) => el('li', { className: 'bc-muted' }, x)))));
      if (v.sum) rows.push(el('p', { 'data-ids-sum': '' }, v.sum));
      if (v.specs.length) rows.push(el('ul', { className: 'bc-checks-res', 'data-ids-specs': '' }, v.specs.map((s) => el('li', { 'data-ids-spec': s.status },
        el('div', { className: 'bc-check-head' }, el('span', {}, s.name), el('span', { className: s.status === 'pass' ? 'ok' : 'n' }, t('ids.spec.' + s.status))),
        el('span', { className: 'bc-muted' }, s.line), s.mismatch ? el('span', { className: 'bc-muted' }, ' ' + s.mismatch) : null))));
    }
    const has = !!v || !!missing;
    rows.push(el('div', { className: 'bc-find-row' },
      el('button', { type: 'button', className: v ? 'btn-line btn-sm-cc' : 'btn-plot btn-sm-cc', 'data-ids-load': '', onClick: () => input.click() }, v ? t('ids.load.other') : t('ids.load')),
      v ? el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-ids-run': '', disabled: busy, onClick: () => recheck() }, busy ? t('ids.running') : t('ids.run')) : null,
      v && window.ccProblems ? el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => window.ccProblems.open({}) }, t('ids.show.problems')) : null,
      has ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-ids-forget': '', onClick: () => forget() }, t('ids.forget')) : null));
    box.replaceChildren(...rows, input);
  };

  async function recheck() {
    busy = true; render();
    try {
      if (src) await src.recheck(); else await session.run();
      const r = session.state.result;
      if (r) status(t('ids.done', { title: session.state.ids?.info?.title || session.state.record?.name || '', pass: r.counts.pass, n: r.counts.specs }));
    } finally { busy = false; render(); }
  }
  /** The reference (and, when embedding, the text) into the IFC: one undo step. */
  function remember(rec) {
    if (!canWrite()) return;
    const info = session.state.ids?.info || {};
    try { writeRecord(rec ? { name: rec.name, hash: rec.hash, title: info.title || '', version: info.version || '', ...(embed() ? { text: rec.text } : {}) } : null); } catch (e) { status(String(e?.message || e)); }
  }
  async function loadFile(f) {
    if (!f) return;
    let text = '';
    try { text = await f.text(); session.load(text, f.name); } catch (e) { status(t('ids.err.read', { msg: String(e?.message || e) })); render(); return; }
    const rec = session.state.record;
    await putText(rec.hash, text);
    missing = null; last = rec.hash;
    remember(rec);
    await recheck();
  }
  function forget() {
    session.clear(); last = ''; missing = null;
    remember(null);
    src?.clear();
    render();
  }
  input.addEventListener('change', () => { const f = input.files?.[0]; input.value = ''; loadFile(f); });

  // the Problems source: re-run a moment after each change (the store's debounce), heavy models wait longer (its budget)
  const go = () => {
    const P = window.ccProblems;
    if (!P || src) return;
    src = P.source({ id: 'bimcraft.ids', kind: 'check', label: t('ids.source'), budgetMs: 150,
      run: () => (missing ? missingProblem() : session.run().then((list) => { render(); return list; })), summary: () => session.summary() });
    if (session.state.record || missing) src.invalidate();
  };
  if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }

  openBtn?.addEventListener('click', () => { if (details) { details.open = true; details.scrollIntoView?.({ block: 'nearest' }); } if (!session.state.record) input.click(); });
  details?.addEventListener('toggle', () => { if (details.open) render(); });

  /** The IFC changed (an edit, undo, redo): the reference may have changed too, and the problems need a re-check. */
  async function changed() {
    const raw = readRecord();
    const ref = cleanIdsRef(raw);
    const h = ref ? ref.hash : '';
    if (h !== last) {
      last = h;
      const my = ++gen;
      if (!ref) { session.clear(); missing = null; src?.clear(); }
      else {
        let text = typeof raw.text === 'string' && raw.text.trim() ? raw.text : null;   // embedded (the setting), else beside the model
        if (text) await putText(ref.hash, text); else text = await getText(ref.hash);
        if (my !== gen) return;   // a newer change came in meanwhile
        if (text) { missing = null; session.use({ name: ref.name, hash: ref.hash, text }); } else { session.clear(); missing = ref; }
      }
    }
    if (session.state.record || missing) { if (src) src.invalidate(); else if (!missing) session.run().then(render); }
    if (details?.open) render();
  }
  /** Another model is open: start from its own IDS. */
  function reset() { last = '\u0000'; src?.clear(); changed(); }
  render();
  return { changed, reset, session, recheck, get missing() { return missing; } };
}
