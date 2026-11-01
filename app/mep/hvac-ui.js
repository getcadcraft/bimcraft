/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/hvac-ui.js — the split / VRF / fan-coil pack's two commands (0.8 SU.888, session `sx-mep`), through model-ui.js
 * `extend()`; bimcraft.js mounts it beside mep-ui.js. The kinds themselves are in Build › Equipment (mep/hvac.js adds them to
 * mep/equipment.js's table, so equip-ui.js lists, places and edits them).
 *
 *   Line set    [data-hv-lineset]  with two pieces selected (an outdoor unit, a refnet or an indoor unit), draws the liquid and
 *               gas runs between them in ACR tube, fixed to their ports, sized at the downstream end, as ONE undo step
 *               (hvac.js planLineSet + chainOps over mep-model.js placeRun).
 *   Line set sizes…  [data-hv-table]  the table "From the table" sizes come from: typical example values until the person
 *               saves their own, kept in the model as CadCraft_HvacLineSets { Rows (JSON) } on the IfcProject (one undo step;
 *               everyone editing the file uses the same table). Pieces already placed keep their ports until they are changed.
 */
import { planLineSet, chainOps, setLineSetTable, lineSetTable, cleanLineSetTable, LINESET_DEFAULT, roleOf } from './hvac.js';
import { readEquipment } from './equipment.js';
import { readPorts } from './ports.js';
import { placeRun } from '../mep-model.js';
import { op } from '../model-ops.js';
import { ModelWriter } from '../model-write.js';
import { ids, val } from '../ifc-util.js';
import { ACR, ACR_MM } from './tables-acr.js';
import { el } from '../ui-util.js';

export const TABLE_PSET = 'CadCraft_HvacLineSets';
const projectOf = (w) => { try { return ids(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
/** The model's own table (null = none saved: the typical one). */
export function readModelTable(w) {
  const id = projectOf(w);
  const ps = id ? w.readPset(id, TABLE_PSET) : null;
  if (!ps?.Rows) return null;
  try { const c = cleanLineSetTable(JSON.parse(String(ps.Rows))); return c.rows || null; } catch (e) { return null; }
}
/** Save a table into the model (rows = null: back to the typical values). */
export function saveModelTable(rows) {
  const json = rows ? JSON.stringify(rows) : '';
  return op((w) => {
    const id = projectOf(w);
    if (!id) throw Object.assign(new Error('sx.su888.table.err.project'), { key: 'sx.su888.table.err.project' });
    w.upsertPset(id, TABLE_PSET, [['Rows', 'IFCTEXT', json]]);
    return { id, ids: [] };
  });
}

export function mountHvac(modelUi) {
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const sizeName = (s) => 'Ø' + ACR_MM[s] + ' (' + s + '")';   // i18n-ignore: size marks

  /** The model's table in force (read on every refresh, so Undo, Live edits and opening another file follow). */
  function syncTable() {
    if (!A.ed()) return;
    try { setLineSetTable(readModelTable(W())); } catch (e) { setLineSetTable(null); }
  }

  function lineSet() {
    if (!A.ed()) return;
    const keys = new Set(A.host.viewer()?.selection || []), k = A.kb();
    const w = W(), eqs = readEquipment(w);
    const two = eqs.filter((e) => keys.has(k + e.id));
    if (two.length !== 2) { A.host.status(t('sx.su888.ls.err.pick'), true); return; }
    // upstream first: outdoor, then refnet, then indoor (the run is drawn from the upstream port)
    const rank = { outdoor: 0, refnet: 1, indoor: 2 };
    two.sort((a, b) => (rank[roleOf(a.kind)] ?? 9) - (rank[roleOf(b.kind)] ?? 9));
    if (two[0].storey !== two[1].storey) { A.host.status(t('sx.su888.ls.err.level'), true); return; }
    const free = new Set();
    for (const p of readPorts(w)) if (p.role === 'equipment' && !p.connectedTo) free.add(p.owner + '#' + p.portName);
    const plan = planLineSet(two[0], two[1], { free });
    if (plan.error) { A.host.status(t(plan.error), true); return; }
    const storey = val(w.api.GetLine(w.mid, two[0].storey, false).GlobalId);
    const ops = plan.runs.map((r) => placeRun({ storey, kind: 'pipe', system: r.system, mat: r.mat, cls: r.cls, size: r.size, points: r.points, ends: r.ends }));
    const liq = plan.runs.find((r) => r.system === 'refl'), gas = plan.runs.find((r) => r.system === 'refg');
    A.commit(chainOps(ops), { label: t('sx.su888.ls.label'), verb: t('model.verb.added') });
    A.host.status(t('sx.su888.ls.done', { liquid: liq ? sizeName(liq.size) : '—', gas: gas ? sizeName(gas.size) : '—' }));
  }

  function tableDialog() {
    if (!A.ed()) return;
    const sizes = Object.keys(ACR).filter((s) => ACR[s][1] !== null || ACR[s][2] !== null);
    const sel = (v, label) => el('select', { className: 'bc-mb-select', 'aria-label': label }, ...sizes.map((s) => el('option', { value: s, selected: s === v }, sizeName(s))));
    const body = el('tbody', {});
    const row = (r) => {
      const kw = el('input', { type: 'number', className: 'bc-input bc-num', min: '0.1', step: '0.1', value: String(r.upTo), 'aria-label': t('sx.su888.table.kw'), 'data-hv-kw': '' });
      const del = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-hv-del': '' }, t('sx.su888.table.remove'));
      const tr = el('tr', {}, el('td', {}, kw), el('td', {}, sel(r.liquid, t('sx.su888.table.liquid'))), el('td', {}, sel(r.gas, t('sx.su888.table.gas'))), el('td', {}, del));
      del.addEventListener('click', () => tr.remove());
      body.append(tr);
    };
    const fill = (rows) => { body.replaceChildren(); rows.forEach(row); };
    fill(lineSetTable());
    const saved = !!readModelTable(W());
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-hv-add': '' }, t('sx.su888.table.add'));
    add.addEventListener('click', () => { const last = lineSetTable().at(-1); row({ upTo: Math.round((Number(body.lastElementChild?.querySelector('input')?.value) || last.upTo) * 1.5), liquid: last.liquid, gas: last.gas }); });
    const typical = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-hv-typical': '' }, t('sx.su888.table.typical'));
    typical.addEventListener('click', () => fill(LINESET_DEFAULT));
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-hv-h', 'data-hv-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-hv-h' }, t('sx.su888.table.title')),
        el('p', { className: 'bc-muted' }, t('sx.su888.table.note')),
        el('p', { className: 'bc-sub', 'data-hv-whose': '' }, t(saved ? 'sx.su888.table.yours' : 'sx.su888.table.default')),
        el('table', { className: 'bc-table' }, el('thead', {}, el('tr', {}, el('th', {}, t('sx.su888.table.kw')), el('th', {}, t('sx.su888.table.liquid')), el('th', {}, t('sx.su888.table.gas')), el('th', {}, ''))), body),
        el('p', { className: 'bc-lib-actions' }, add, typical), err,
        el('p', { className: 'bc-sub' }, t('sx.su888.table.later')),
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-hv-save': '' }, t('sx.su888.table.save')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      const rows = [...body.querySelectorAll('tr')].map((tr) => { const [kw, l, g] = tr.querySelectorAll('input, select'); return { upTo: Number(kw.value), liquid: l.value, gas: g.value }; });
      const same = rows.length === LINESET_DEFAULT.length && rows.every((r, i) => r.upTo === LINESET_DEFAULT[i].upTo && r.liquid === LINESET_DEFAULT[i].liquid && r.gas === LINESET_DEFAULT[i].gas);
      const c = same ? { rows: null } : cleanLineSetTable(rows);
      if (c.error) { e.preventDefault(); err.textContent = t(c.error, { row: c.row ?? '' }); return; }
      A.commit(saveModelTable(c.rows), { label: t('sx.su888.table.title'), verb: t('model.verb.changed') });
      syncTable();
    });
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
  }

  A = modelUi.extend({ tools: [], refresh() { syncTable(); } });
  for (const [sel, fn] of [['[data-hv-lineset]', lineSet], ['[data-hv-table]', tableDialog]]) {
    const b = A.root.querySelector(sel);
    if (b && !b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => { const m = b.closest('details'); if (m) m.open = false; fn(); }); }
  }
  syncTable();
  const api = { lineSet, tableDialog, syncTable };
  if (typeof window !== 'undefined') window.bimcraftHvac = api;   // for tests
  return api;
}
