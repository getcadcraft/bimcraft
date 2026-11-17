/* SPDX-License-Identifier: Apache-2.0 */
/**
 * permit-checklist-ui.js: the "Supporting documents" block of the Permit package section (booklet row BK.109, session
 * bk-stages-10; permit-ui.js mounts it). Choose the approving authority's list (data: ./permit-checklists/), see each document
 * linked to the sheet or schedule in the model that satisfies it, mark what you supply yourself, and see what is missing.
 * Rules: permit-checklist.js. The choices are kept in the IFC (CadCraft_SubmissionChecklist on the project, one undo step each).
 * Every authority list says it is unverified by a local practitioner. Advisory: nothing here stops the package being built.
 *
 *   mountChecklist(host, { changed() }) → { el() → element, forPackage() → { pack, rows, markdown, csv } | null, ready: Promise, state }
 *   host = permit-ui.js's host (editor(), status, afterEdit())
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { ModelWriter } from './model-write.js';
import { snapshotModel } from './model-ops.js';
import { readSheets } from './views-model.js';
import { readConstraints } from './model-site-constraints.js';
import { advice, problemsFor, processMarkdown, formatMarkdown } from './permit-submission.js';   // 0.10 BK.67/156: a regulation pack's process and submission format
import { mountSubmissionInfo } from './permit-submission-ui.js';
import { cleanChecklist, isUnverified, modelFacts, resolveChecklist, summary, readState, saveStateOp, cleanState, checklistMarkdown, checklistCsv, hintText } from './permit-checklist.js';

const at = (file) => new URL('./permit-checklists/' + file, import.meta.url).href;

export function mountChecklist(host, { changed = () => {} } = {}) {   // `changed` is wrapped below so the advisory Problems follow every change
  const S = { index: [], packs: new Map(), error: '', loading: new Set() };
  const getJson = async (file) => { const r = await fetch(at(file), { cache: 'no-cache' }); if (!r.ok) throw new Error(file + ': ' + r.status); return r.json(); };
  const ready = getJson('index.json').then((ix) => { S.index = (Array.isArray(ix?.packs) ? ix.packs : []).filter((p) => /^[a-z0-9-]+\.json$/.test(String(p.file || ''))).slice(0, 200); changed(); }).catch((e) => { S.error = String(e.message || e); changed(); });
  /** Lists that come from a regulation pack (the regs add-on, when it is on): choosing one fills the required drawings and the papers. */
  const regsList = () => { try { return (window.ccRegsLocal?.list() || []).filter((x) => x.has.includes('submission')); } catch (e) { return []; } };
  const fromRegs = (id) => { try { return window.ccRegsLocal?.checklist(id) || null; } catch (e) { return null; } };
  async function loadPack(id) {
    if (S.packs.has(id) || S.loading.has(id)) return;
    const ent = S.index.find((p) => p.id === id);
    if (!ent) {
      const raw = fromRegs(id);
      if (raw) { const r = cleanChecklist(raw); S.packs.set(id, r.pack && r.pack.id === id ? r.pack : { bad: r.problems.length ? r.problems : ['its id is not ' + id] }); changed(); }
      return;
    }
    S.loading.add(id);
    try { const r = cleanChecklist(await getJson(ent.file)); S.packs.set(id, r.pack && r.pack.id === id ? r.pack : { bad: r.problems.length ? r.problems : ['its id is not ' + id] }); }   // i18n-ignore: a pack maker's validation reason
    catch (e) { S.packs.set(id, { bad: [String(e.message || e)] }); }
    S.loading.delete(id);
    changed();
  }
  window.addEventListener('cc-regs-local-changed', () => { for (const [k, v] of [...S.packs]) if (v.fromPack || v.bad) { if (!S.index.some((p) => p.id === k)) S.packs.delete(k); } changed(); });
  const writer = () => { const e = host.editor(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  function facts(w) {
    const snap = snapshotModel(host.editor());
    let site = null;
    try { const c = readConstraints(w); site = { outline: (c.site?.points.length || 0) >= 3, buildingLines: c.items.filter((x) => x.kind === 'buildingline').length, servitudes: c.items.filter((x) => x.kind === 'servitude').length }; } catch (e) { site = null; }
    return modelFacts({ sheets: readSheets(w), levels: snap.levels, site,
      counts: { doors: snap.openings.filter((o) => o.kind === 'door').length, windows: snap.openings.filter((o) => o.kind === 'window').length, rooms: (snap.derived?.spaces || []).length, walls: snap.walls.length } });
  }
  /** What the block shows now: the chosen pack, the rows, the sheets (null when there is no model or no list chosen). */
  function now() {
    const w = writer();
    if (!w) return null;
    const st = readState(w), pack = st.pack ? S.packs.get(st.pack) : null;
    if (st.pack && !pack) loadPack(st.pack);
    if (!pack || pack.bad) return { chosen: st.pack, pack: null, bad: pack?.bad || null, state: st.state };
    const f = facts(w), state = cleanState(st.state, pack);
    return { chosen: st.pack, pack, state, facts: f, rows: resolveChecklist(pack, f, state) };
  }
  function commit(packId, state, label) {
    const e = host.editor();
    if (!e) return;
    try { e.modelChange(saveStateOp({ pack: packId, state }), { label, verb: t('permit.cl.verb') }); host.afterEdit?.(); } catch (err) { host.status(err.key ? t(err.key) : String(err.message || err), true); }
    changed();
  }
  function choose(row, N, value) {
    const st = { links: { ...N.state.links }, supplied: { ...N.state.supplied }, na: { ...N.state.na } };
    delete st.links[row.id]; delete st.supplied[row.id]; delete st.na[row.id];
    if (value === 'supplied') st.supplied[row.id] = true;
    else if (value === 'na') st.na[row.id] = true;
    else if (/^sheet-\d+$/.test(value)) st.links[row.id] = value;
    commit(N.chosen, st, row.title);
  }
  const whyText = (b) => (b.why === 'chosen' ? t('permit.cl.why.chosen') : b.why === 'title' ? t('permit.cl.why.title') : b.why.startsWith('schedule:') ? t('permit.cl.why.schedule', { kind: t('permit.cl.sched.' + b.why.slice(9)) }) : t('permit.cl.why.view', { kind: t('permit.cl.view.' + b.why.slice(5)) }));

  function view() {
    const e = host.editor(), N = e ? now() : null;
    const pick = el('select', { className: 'select-cc', 'data-cl-pack': '', 'aria-label': t('permit.cl.pack'), disabled: !e },
      el('option', { value: '' }, t('permit.cl.pack.none')),
      ...S.index.map((p) => el('option', { value: p.id, selected: N?.chosen === p.id }, p.name)),
      ...regsList().filter((x) => !S.index.some((p) => p.id === x.id)).map((x) => el('option', { value: x.id, selected: N?.chosen === x.id, 'data-cl-regs': '' }, x.name)));
    pick.addEventListener('change', () => { if (pick.value) loadPack(pick.value); commit(pick.value, N?.state || {}, t('permit.cl.title')); });
    const kids = [el('h3', { className: 'bc-h fa-h3' }, t('permit.cl.title')), el('p', { className: 'bc-muted' }, t('permit.cl.intro')),
      el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, t('permit.cl.pack')), pick)];
    if (!window.ccRegsLocal) kids.push(el('p', { className: 'bc-note', 'data-cl-needregs': '' }, t('permit.sub.needregs')));
    if (S.error) kids.push(el('p', { className: 'bc-note', role: 'alert' }, t('permit.cl.err.load', { why: S.error })));
    if (!e) kids.push(el('p', { className: 'bc-muted' }, t('eg44.nomodel')));
    if (N?.bad) kids.push(el('p', { className: 'bc-note', role: 'alert', 'data-cl-bad': '' }, t('permit.cl.err.pack', { why: N.bad.slice(0, 3).join('; ') })));
    if (N?.pack) {
      const P = N.pack, n = summary(N.rows);
      kids.push(el('p', { className: 'bc-note', 'data-cl-unverified': P.review }, t(P.review === 'generic' ? 'permit.cl.generic' : isUnverified(P) ? 'permit.cl.unverified' : 'permit.cl.verified', { by: P.reviewedBy })));
      if (P.authority && P.review !== 'generic') kids.push(el('p', { className: 'bc-muted' }, t('permit.cl.authority', { authority: P.authority })));
      if (P.sources.length) kids.push(el('ul', { className: 'bc-muted', 'data-cl-sources': '' }, ...P.sources.map((s) => el('li', {}, el('a', { href: s.url, target: '_blank', rel: 'noopener noreferrer' }, s.title), ' ', t('permit.cl.fetched', { date: s.fetched })))));   // i18n-ignore: a rel value
      kids.push(...mountSubmissionInfo(P, t));
      kids.push(el('p', { 'data-cl-sum': '' }, t('permit.cl.sum', n)));
      kids.push(el('ul', { className: 'bc-checks-res', 'data-cl-list': '' }, ...N.rows.map((r) => {
        const value = r.status === 'na' ? 'na' : r.how === 'manual' && r.status === 'linked' ? r.by[0].id : r.status === 'supplied' ? 'supplied' : '';
        const how = el('select', { className: 'select-cc', 'data-cl-how': r.id, 'aria-label': t('permit.cl.how', { item: r.title }) },
          el('option', { value: '', selected: value === '' }, t(r.supplied ? 'permit.cl.how.notyet' : 'permit.cl.how.auto')),
          el('option', { value: 'supplied', selected: value === 'supplied' }, t('permit.cl.how.supplied')),
          ...(r.when === 'if-applicable' ? [el('option', { value: 'na', selected: value === 'na' }, t('permit.cl.how.na'))] : []),
          ...N.facts.sheets.map((s) => el('option', { value: s.id, selected: value === s.id }, t('permit.cl.how.sheet', { sheet: [s.number, s.title].filter(Boolean).join(' ') || s.id }))));
        how.addEventListener('change', () => choose(r, N, how.value));
        const hint = hintText(r, t);
        return el('li', { 'data-cl-item': r.id, 'data-cl-status': r.status },
          el('div', { className: 'bc-check-head' }, el('span', {}, r.title + (r.when === 'if-applicable' ? ' (' + t('permit.cl.ifapp') + ')' : '')), el('span', { className: r.status === 'missing' ? 'n' : 'ok', 'data-cl-chip': '' }, t('permit.cl.status.' + r.status))),
          r.clause ? el('div', { className: 'bc-muted' }, r.clause) : null,
          r.detail ? el('div', { className: 'bc-muted' }, r.detail) : null,
          r.status === 'linked' ? el('div', { 'data-cl-by': '' }, ...r.by.slice(0, 6).map((b) => el('div', {}, t('permit.cl.by', { sheet: b.label, why: whyText(b) })))) : null,
          hint ? el('div', { className: 'bc-muted', 'data-cl-hint': '' }, hint) : null,
          el('label', { className: 'bc-4d-grouplabel' }, el('span', { className: 'visually-hidden' }, t('permit.cl.how', { item: r.title })), how));
      })));
      if (n.missing) kids.push(el('p', { className: 'bc-muted', 'data-cl-missing': '' }, t('permit.cl.missing.note')));
    }
    return el('div', { 'data-cl': '' }, ...kids);
  }
  function forPackage() {
    if (!host.editor()) return null;
    const N = now();
    if (!N?.pack) return null;
    return { pack: N.pack, rows: N.rows, markdown: [checklistMarkdown(N.pack, N.rows, t), formatMarkdown(N.pack, t), processMarkdown(N.pack, t)].filter(Boolean).join('\n'), csv: checklistCsv(N.pack, N.rows, t), advice: advice(N.pack, N.rows, N.facts) };
  }
  // BK.156: what the chosen pack asks for and the model does not yet show, as advisory Problems (severity note: never blocking)
  let src = null;
  const adviceProblems = () => { const N = host.editor() ? now() : null; return N?.pack ? problemsFor(advice(N.pack, N.rows, N.facts), t) : []; };
  const goProblems = () => {
    const P = window.ccProblems;
    if (!P || src) return;
    src = P.source({ id: 'bimcraft.submission', kind: 'check', label: t('permit.sub.source'), debounceMs: 600, budgetMs: 150, run: () => adviceProblems() });
    src.invalidate();
  };
  if (document.getElementById('cc-problems')) { if (window.ccProblems) goProblems(); else document.addEventListener('cc-problems-ready', goProblems, { once: true }); }
  const prevChanged = changed;
  changed = (...a) => { prevChanged(...a); try { src?.invalidate(); } catch (e) { /* the store is gone */ } };
  return { el: view, forPackage, ready, state: S, load: loadPack, advice: adviceProblems };
}
