/* SPDX-License-Identifier: Apache-2.0 */
/**
 * issue-ui.js: the "Issues and revisions" section of BimCraft's left panel (0.10 BK.46, BK.48; session bk-r3-stages-10), a <details>
 * under the Permit package (ui.inc, data-issues). The panel is the shared one (issuelog/panel.js); the model side is issue-set.js.
 * Recording an issue prints every sheet and element, writes the issue into the IFC in one undo step and, when asked, saves a copy
 * of the model as issued (its name, size and SHA-256 go into the issue, so the copy is recognised by Compare later).
 *
 *   mountIssues(host) → { render(), panel, history(), record(spec), changes(issueId) } | null
 *   host = { root, editor(), model(), index(), status(text, isError), download(name, data, type), fileName(), afterEdit(),
 *            select(keys), selection() → keys, openSheet(id), presetSheets() → [sheet id] | null }
 */
import { mountIssuePanel } from './issuelog/panel.js';
import { readIssues, elementPrints, planFor, recordIssueOp, setHistoryOp, changesFor, sheetsNow, allPrints } from './issue-set.js';
import { ModelWriter } from './model-write.js';
import { sha256Hex } from './handover-docs.js';
import { t } from './i18n.js';

export function mountIssues(host) {
  const box = host.root?.querySelector('[data-issuelog]')   /* its own container: [data-issues] is the BCF issues pane */;
  if (!box) return null;
  const ed = () => host.editor();
  const W = () => { const e = ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const prints = () => { const ix = host.index(), m = host.model(), w = W(); return ix && m && w ? elementPrints({ ix, model: m, w }) : null; };
  const base = () => (host.fileName() || 'model').replace(/\.ifc$/i, '');
  const keysOf = (guids) => { const ix = host.index(); if (!ix) return []; const want = new Set(guids), out = []; for (const [id, g] of ix.values('guid')) if (want.has(g)) out.push(ix.keyBase + id); return out; };
  const guidsOf = (keys) => { const ix = host.index(); if (!ix) return []; const g = ix.values('guid'); return keys.map((k) => g.get(k - ix.keyBase)).filter(Boolean); };
  let drop = [], keep = {};
  const commit = (run, label) => { const e = ed(); if (!e) return false; e.modelChange(run, { label, verb: t('issues.verb') }); host.afterEdit?.(); return true; };
  const empty = { format: 'cadcraft-issues', version: 1, issues: [], records: [] };

  const panel = mountIssuePanel(box, {
    t: (k, v) => t(k, v), app: 'bimcraft', canSnapshot: true,
    cls: { button: 'btn-plot btn-sm-cc', input: 'bc-input', table: 'bc-table', muted: 'bc-muted', note: 'bc-sub' },
    get: () => { const w = W(); return w ? readIssues(w) : empty; },
    set: (history, label) => { try { commit(setHistoryOp(history, { dropPrints: drop, keepPrints: keep }), label); } catch (err) { host.status(err.key ? t(err.key) : String(err.message || err), true); } drop = []; keep = {}; },
    sheets: () => { const w = W(); return w ? sheetsNow(w, prints()) : []; },
    preset: () => host.presetSheets?.() || null,
    presetPurpose: () => { const s = stage(); return s === 'submission' ? 'submission' : s === 'tender' ? 'tender' : s === 'working-drawings' ? 'construction' : s === 'concept' ? 'concept' : s === 'close-out' ? 'record' : ''; },
    issue: (spec) => record(spec),
    changes: (id) => { const w = W(); return w ? changesFor(w, id, prints()) : null; },
    select: (guids) => host.select(keysOf(guids)),
    selection: () => guidsOf(host.selection()),
    openSheet: (id) => host.openSheet?.(id),
    dropPrints: (id) => drop.push(id),
    keepPrints: (id, text) => { keep[id] = text; },
    allPrints: () => { const w = W(); return w ? allPrints(w) : null; },
    download: (name, data, type) => host.download(name, data, type),
    fileBase: base,
    today: () => new Date().toISOString().slice(0, 10),
    who: () => { try { return window.ccDocInfo?.info.get().author || ''; } catch (e) { return ''; } },
  });
  function stage() { try { return window.ccDocInfo?.info.get().stage || ''; } catch (e) { return ''; } }

  async function record(spec) {
    const e = ed(), w = W();
    if (!e || !w) { host.status(t('eg44.nomodel'), true); return null; }
    const pr = prints();
    let snapshot = null;
    if (spec.snapshot) {
      const bytes = e.save(), data = typeof bytes === 'string' ? new TextEncoder().encode(bytes) : bytes;
      const name = base() + '-issue-' + String(spec.code || 'A').replace(/[^A-Za-z0-9._-]/g, '_') + '.ifc';
      snapshot = { name, bytes: data.length, sha256: await sha256Hex(data) };
      host.download(name, data, 'application/x-step');
    }
    const issue = planFor(w, pr, { ...spec, stage: stage(), snapshot });
    commit(recordIssueOp(issue, pr), t('issues.undo.issue', { code: issue.code }));
    host.status(t('issues.issued', { code: issue.code, n: issue.sheets.length, revised: issue.sheets.filter((s) => s.state === 'revised').length }) + (issue.elements || !pr ? '' : ' ' + t('issues.noprints.kept')));
    return issue;
  }
  const render = () => { if (box.isConnected) panel.render(); };
  return { render, panel, history: () => panel && readIssues(W()), record, changes: (id) => panel.changes(id), prints };
}
