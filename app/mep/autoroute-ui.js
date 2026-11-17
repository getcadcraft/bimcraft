/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/autoroute-ui.js — "Route ducts automatically" under "Pipes and ducts against the structure" in the Clash check (0.10 MEP.1,
 * suggestion #1556); bimcraft.js mounts it beside mep/structure-ui.js (the Clash check is where the open model's geometry and the
 * editor meet). Pick the air outlet a network starts from ([data-ar-source]: every duct port that supplies air), tick the terminals
 * it feeds and type each one's airflow ([data-ar-term], [data-ar-flow]), the clearance, the main's height and the friction rate;
 * [data-ar-route] finds the network (mep/autoroute.js, the shared engine in mep-route/) round the open model's walls, slabs, beams,
 * columns, equipment and existing pipes and ducts, and draws it as duct runs in ONE undo step. The fittings, ports and
 * connections are the runs' own (mep-model.js), so editing a run afterwards makes its fittings again. A terminal that cannot be
 * reached is listed ([data-ar-msg]); the rest is still drawn.
 * ctx = { t, el, host() (the open model's entry: { ifc, model }), editor(), status(text, isError), apply(run, label) → Promise }
 * Only the open model's own elements are obstacles (not other models of a federation).
 */
import { readEquipment, portsAt } from './equipment.js';
import { mountRouteSystems } from './route-systems-ui.js';   // 0.10 MEP.2-4: drainage, water, refrigerant, under the duct router
import { planDucts, placeNetwork, obstaclesFrom, toPlanOf } from './autoroute.js';
import { DUCT_SYSTEMS } from '../mep-model.js';
import { ModelWriter } from '../model-write.js';
import { val } from '../ifc-util.js';
import { getDisplayUnits, isMetric, parseLen, fmtLen } from '../model-units.js';

export function mountAutoroute(ctx) {
  const t = ctx.t, el = ctx.el;
  const S = { source: '', picked: new Set(), flow: {}, clear: '25', h: '', rate: '', msg: '', busy: false };
  const writer = () => { const ed = ctx.editor(); return ed ? new ModelWriter(ed.W, ed.api, ed.mid) : null; };
  const sizeText = (p) => (p.shape === 'round' ? 'Ø' + Math.round(p.size) : Math.round(p.size) + '×' + Math.round(p.h));
  /** every duct port of the model's equipment: outlets (out) can start a network, inlets (in) end one */
  function ports() {
    const w = writer();
    if (!w) return [];
    const out = [];
    for (const eq of readEquipment(w)) for (const p of portsAt(eq)) if (p.kind === 'duct') out.push({ key: eq.guid + '|' + p.name, eq, p, label: (eq.tag || eq.name || eq.kind) + ' — ' + p.name + ' ' + sizeText(p) });
    return out;
  }
  const rs = mountRouteSystems(ctx);
  const imperial = () => !isMetric(getDisplayUnits());
  const num = (s) => { const v = Number(String(s ?? '').trim().replace(',', '.')); return Number.isFinite(v) ? v : NaN; };

  async function run() {
    const all = ports(), src = all.find((x) => x.key === S.source), terms = all.filter((x) => S.picked.has(x.key));
    if (!src || !terms.length) { S.msg = t('mep.ar.err.pick'); ctx.rerender(); return; }
    const flows = terms.map((x) => num(S.flow[x.key]));
    if (flows.some((f) => !(f > 0))) { S.msg = t('mep.ar.err.flow'); ctx.rerender(); return; }
    const units = getDisplayUnits();
    const clear = S.clear.trim() === '' ? 25 : parseLen(S.clear, units), h = S.h.trim() === '' ? null : parseLen(S.h, units), rate = S.rate.trim() === '' ? null : num(S.rate);
    if (!(clear >= 0) || (h !== null && !(h >= 50)) || (rate !== null && !(rate > 0))) { S.msg = t('mep.ar.err.num'); ctx.rerender(); return; }
    const ent = ctx.host(), w = writer();
    if (!ent || !w) return;
    S.busy = true; S.msg = t('mep.ar.busy'); ctx.rerender();
    await new Promise((r) => setTimeout(r, 30));   // let the panel say so before the search holds the page
    try {
      const storey = src.eq.storey, storeyGuid = val(w.api.GetLine(w.mid, storey, false).GlobalId);   // placeRun takes the GlobalId
      const toPlan = toPlanOf(ent.ifc.api.GetCoordinationMatrix(ent.model.modelID), w.storeyWorld(storey));
      const obstacles = obstaclesFrom(ent.model.batches, ent.model.classOf, toPlan);
      const system = DUCT_SYSTEMS[src.p.system] ? src.p.system : 'supply';
      const plan = planDucts(w, { storey: storeyGuid, source: { eq: src.eq.guid, port: src.p.name }, terminals: terms.map((x, i) => ({ eq: x.eq.guid, port: x.p.name, flow: flows[i] })),
        obstacles, system, clearance: clear, rate, h, u: imperial() ? 'in' : 'mm' });
      if (!plan.ok) { S.msg = t('mep.ar.none', { why: t('mep.ar.why.' + (plan.failed?.[0]?.error || 'no-route')) }); return; }
      await ctx.apply(placeNetwork(plan.specs), t('mep.ar.undo'));
      const missed = plan.failed.map((f) => { const x = terms[Number(f.id)]; return (x ? x.label : '?') + ': ' + t('mep.ar.why.' + f.error); });
      S.msg = t('mep.ar.done', { runs: plan.specs.length, terms: terms.length - plan.failed.length, of: terms.length }) + (missed.length ? ' ' + t('mep.ar.missed', { list: missed.join('; ') }) : '');
    } catch (e) {
      S.msg = t(e.key || 'mep.ar.err.fail');
      if (!e.key) ctx.status(String(e.message || e), true);
    } finally { S.busy = false; ctx.rerender(); }
  }

  function node() {
    const all = ports();
    const outs = all.filter((x) => x.p.direction === 'out'), ins = all.filter((x) => x.p.direction === 'in' && x.key.split('|')[0] !== S.source.split('|')[0]);
    if (!outs.some((x) => x.key === S.source)) S.source = outs[0]?.key || '';
    const kids = [el('h4', { className: 'bc-sub' }, t('mep.ar.title')), el('p', { className: 'bc-muted' }, t('mep.ar.intro'))];
    if (!outs.length || !ins.length) {
      kids.push(el('p', { className: 'bc-muted', 'data-ar-empty': '' }, t('mep.ar.empty')));
      return el('div', { className: 'bc-clash-wrap' }, el('div', { className: 'bc-clash bc-mep-route', 'data-mep-route': '' }, ...kids), rs.node());
    }
    const src = el('select', { className: 'select-cc', 'data-ar-source': '' }, outs.map((x) => el('option', { value: x.key }, x.label)));
    src.value = S.source;
    src.addEventListener('change', () => { S.source = src.value; ctx.rerender(); });
    kids.push(el('label', {}, t('mep.ar.source'), src));
    const flowU = imperial() ? 'cfm' : 'L/s';   // i18n-ignore: unit marks
    kids.push(el('p', { className: 'bc-muted' }, t('mep.ar.terms', { u: flowU })));
    for (const x of ins) {
      const box = el('input', { type: 'checkbox', 'data-ar-term': x.key });
      box.checked = S.picked.has(x.key);
      box.addEventListener('change', () => { if (box.checked) S.picked.add(x.key); else S.picked.delete(x.key); });
      const f = el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', size: 5, value: S.flow[x.key] ?? '', 'data-ar-flow': x.key, 'aria-label': t('mep.ar.flow', { u: flowU, what: x.label }) });
      f.addEventListener('input', () => { S.flow[x.key] = f.value; });
      kids.push(el('div', { className: 'bc-find-row' }, el('label', {}, box, ' ', x.label), f));
    }
    const units = getDisplayUnits();
    const field = (k, attr, lbl) => { const i = el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', size: 5, value: S[k], [attr]: '' }); i.addEventListener('input', () => { S[k] = i.value; }); return el('label', {}, lbl, i); };
    if (S.clear === '25' && !isMetric(units)) S.clear = fmtLen(25, units);
    kids.push(field('clear', 'data-ar-clear', t('mep.ar.clear')), field('h', 'data-ar-h', t('mep.ar.h')), field('rate', 'data-ar-rate', t(imperial() ? 'mep.ar.rate.in' : 'mep.ar.rate.mm')));
    kids.push(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ar-route': '', disabled: S.busy, onClick: () => { run(); } }, t('mep.ar.route'))));
    if (S.msg) kids.push(el('p', { className: 'bc-muted', 'data-ar-msg': '' }, S.msg));
    kids.push(el('p', { className: 'bc-muted' }, t('mep.ar.aid')));
    return el('div', { className: 'bc-clash-wrap' }, el('div', { className: 'bc-clash bc-mep-route', 'data-mep-route': '' }, ...kids), rs.node());
  }
  const api = { node, run, state: S };
  if (typeof window !== 'undefined') window.bimcraftMepRoute = api;   // for tests
  return api;
}
