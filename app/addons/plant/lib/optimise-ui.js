/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: English fallback words of the Optimise panel; the add-on's own language file wins */
/**
 * optimise-ui.js — "Optimise overnight" in the Plant tab (0.8 CH.31, chem-mount_PART_5): a design study over flowsheet variables (a unit parameter between two values), judged by energy, cost or emissions,
 * with the variants solved by the other computers on the network that turned on "Let others render on this computer" in Studio (job type 'process-variant'; lib/compute lan.js / lan-node.js), and here for
 * every variant no computer takes. A node that leaves loses nothing. The numbers given (prices, factors) are the person's: nothing is defaulted.
 *   mountOptimise(el, { t, model() → process model | null, lan?() → { taskNodes(task) } | null }) → { run(spec) }
 */
import { optimise, remoteEvaluator, VARIANT_TASK } from '../../../process/optimise.js';
import * as STUDY from '../../../study/study.js';

const WORDS = {
  'opt.lede': 'Try many settings of the process model and rank them. Name the unit and the parameter to vary, the range, and what to minimise. Computers you connected in Studio (Settings, Rendering, other computers) solve variants too; the rest are solved here.',
  'opt.spec': 'Study (JSON)', 'opt.run': 'Run the study', 'opt.nodes': '{n} other computers can solve variants.', 'opt.nonodes': 'No other computer is connected: every variant is solved here.',
  'opt.nomodel': 'No process model yet. Bring one in from the process file first.', 'opt.badjson': 'The study is not valid JSON: {why}', 'opt.running': 'Running…',
  'opt.done': '{n} variants: {remote} solved on other computers, {local} here, {failed} could not be solved.', 'opt.best': 'Best by your ranking: {text}', 'opt.none': 'No variant met every limit.',
};
const wordsOf = (t) => (k, v) => { const r = t ? t(k, v) : k; if (r && r !== k) return r; return (WORDS[k] || k).replace(/\{(\w+)\}/g, (m, a) => (v && v[a] !== undefined ? v[a] : m)); };
export const SAMPLE = { title: 'My study', variables: [{ unit: 'UNIT-ID', param: 'PARAMETER', from: 0, to: 0, steps: 5 }], objectives: [{ key: 'energy', metric: 'energy_kW', goal: 'min' }] };

export function mountOptimise(el, { t: t0, model, lan = () => globalThis.bimcraftLan || null } = {}) {
  const t = wordsOf(t0), d = el.ownerDocument, mk = (tag, text) => { const n = d.createElement(tag); if (text !== undefined) n.textContent = text; return n; };
  const info = mk('p'); info.setAttribute('data-opt-nodes', '');
  const ta = d.createElement('textarea'); ta.rows = 9; ta.spellcheck = false; ta.className = 'form-control'; ta.style.cssText = 'font-family:monospace;font-size:0.75rem;width:100%'; ta.setAttribute('data-opt-spec', ''); ta.setAttribute('aria-label', t('opt.spec'));
  ta.value = JSON.stringify(SAMPLE, null, 2);
  const out = mk('div'); out.setAttribute('data-opt-out', ''); out.setAttribute('aria-live', 'polite');
  const nodes = () => { try { return lan()?.taskNodes?.(VARIANT_TASK) || []; } catch { return []; } };
  const count = () => { const n = nodes().length; info.textContent = n ? t('opt.nodes', { n }) : t('opt.nonodes'); return n; };
  async function run(spec) {
    const m = model(); if (!m) { out.replaceChildren(mk('p', t('opt.nomodel'))); return null; }
    const st = { remote: 0, local: 0 };
    out.replaceChildren(mk('p', t('opt.running')));
    const r = await optimise(m, spec, { studyLib: STUDY, evaluate: remoteEvaluator(nodes, m, spec, { onRemote: () => st.remote++, onLocal: () => st.local++ }) });
    const rows = r.ranked && r.ranked.length ? r.ranked.slice(0, 10) : [];
    const ul = mk('ul'); ul.className = 'meta-items';
    for (const rk of rows) { const row = r.rows.find((x) => x.id === rk.id) || {}; const li = mk('li', (rk.label || rk.id) + ' : ' + Object.entries(row.values || {}).map(([k, v]) => k + ' ' + (Number.isFinite(v) ? +v.toPrecision(5) : v)).join(', ')); ul.append(li); }
    out.replaceChildren(mk('p', t('opt.done', { n: r.rows.length, remote: st.remote, local: st.local, failed: r.failed })), ...(rows.length ? [ul] : [mk('p', t('opt.none'))]), ...r.problems.map((p) => mk('p', p.text)));
    out.setAttribute('data-opt-done', String(r.rows.length));
    return { ...r, remote: st.remote, local: st.local };
  }
  const go = mk('button', t('opt.run')); go.type = 'button'; go.className = 'btn-line btn-sm-cc'; go.setAttribute('data-opt-run', '');
  go.addEventListener('click', () => { count(); let spec; try { spec = JSON.parse(ta.value); } catch (e) { out.replaceChildren(mk('p', t('opt.badjson', { why: e.message }))); return; } run(spec).catch((e) => out.replaceChildren(mk('p', String(e && e.message || e)))); });
  el.replaceChildren(mk('p', t('opt.lede')), info, ta, go, out); count();
  return { run, count, spec: ta };
}
