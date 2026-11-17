/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/route-systems-ui.js — "Route other systems automatically" under the duct router in the Clash check (0.10 MEP.2, MEP.3, MEP.4;
 * suggestions #1557, #1558, #1559). mep/autoroute-ui.js mounts it (one place for the model's geometry and the editor), so bimcraft.js
 * needs no line of its own. A system picker (drainage by gravity, cold and hot water, split / multi-split / VRF) shows that system's
 * fields; [data-rs-route] finds the network with the shared engines (mep/route-systems.js) round the open model and draws it as
 * runs in ONE undo step. Anything that cannot be reached or does not pass a limit is listed in [data-rs-msg]; the rest is still drawn.
 * ctx = { t, el, host(), editor(), status(text, isError), apply(run, label) → Promise, rerender() } (the same ctx as mountAutoroute)
 * Strings: STRINGS below until the Bim core session merges them into lang/en.json (docs/0.10-sessions/mep-10.md § Inbox); t() wins when it knows a key.
 */
import { readEquipment, portsAt } from './equipment.js';
import { readFixturePorts } from '../mep-model.js';
import { planDrain, planWaterSystems, planRefrigerant, placeNetwork } from './route-systems.js';
import { obstaclesFrom, toPlanOf } from './autoroute.js';
import { ModelWriter } from '../model-write.js';
import { val } from '../ifc-util.js';
import { getDisplayUnits, isMetric, parseLen } from '../model-units.js';
import { projectStandard } from './pipes.js';
import { STRINGS } from './route-systems-strings.js';

export function mountRouteSystems(ctx) {
  const el = ctx.el;
  const S = { sys: 'drain', f: {}, picked: new Set(), cap: {}, hot: false, loop: false, msg: '', busy: false };
  const T = (key, fill) => { const s = ctx.t(key, fill); if (s !== key) return s; return String(STRINGS[key] ?? key).replace(/\{(\w+)\}/g, (m, k) => (fill && fill[k] != null ? fill[k] : m)); };
  const writer = () => { const ed = ctx.editor(); return ed ? new ModelWriter(ed.W, ed.api, ed.mid) : null; };
  const num = (s) => { const v = Number(String(s ?? '').trim().replace(',', '.')); return Number.isFinite(v) ? v : NaN; };
  const len = (s) => (String(s ?? '').trim() === '' ? NaN : parseLen(s, getDisplayUnits()));
  const eqLabel = (e, p) => (e.tag || e.name || e.kind) + (p ? ' — ' + p.name : '');
  const withPort = (pred) => { const w = writer(); const out = []; if (w) for (const eq of readEquipment(w)) for (const p of portsAt(eq)) if (pred(p, eq)) out.push({ key: eq.guid + '|' + p.name, eq, p, label: eqLabel(eq, p) }); return out; };

  const input = (k, attr, label, size = 6) => { const i = el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', size, value: S.f[k] ?? '', [attr]: '' }); i.addEventListener('input', () => { S.f[k] = i.value; }); return el('label', {}, label, i); };
  const select = (k, attr, label, opts) => { const s = el('select', { className: 'select-cc', [attr]: '' }, opts.map((o) => el('option', { value: o.key }, o.label))); if (!opts.some((o) => o.key === S.f[k])) S.f[k] = opts[0]?.key ?? ''; s.value = S.f[k]; s.addEventListener('change', () => { S.f[k] = s.value; ctx.rerender(); }); return el('label', {}, label, s); };
  const check = (label, on, set, attr) => { const b = el('input', { type: 'checkbox', [attr]: '' }); b.checked = on; b.addEventListener('change', () => { set(b.checked); ctx.rerender(); }); return el('label', {}, b, ' ', label); };

  async function run() {
    const ent = ctx.host(), w = writer();
    if (!ent || !w) return;
    S.busy = true; S.msg = T('mep.rs.busy'); ctx.rerender();
    await new Promise((r) => setTimeout(r, 30));
    try {
      const units = getDisplayUnits();
      let storeyId = null, specsOf = null;
      const fixtureStorey = (sys) => readFixturePorts(w).find((q) => q.domain === 'pipe' && q.system === sys && q.fixture)?.storey ?? null;
      const eqs = readEquipment(w);
      if (S.sys === 'drain') storeyId = fixtureStorey('san');
      else if (S.sys === 'water') storeyId = eqs.find((e) => e.guid === S.f.src?.split('|')[0])?.storey ?? null;
      else storeyId = eqs.find((e) => e.guid === S.f.out)?.storey ?? null;
      if (storeyId == null) { S.msg = T('mep.rs.err.storey'); return; }
      const storey = val(w.api.GetLine(w.mid, storeyId, false).GlobalId);
      const toPlan = toPlanOf(ent.ifc.api.GetCoordinationMatrix(ent.model.modelID), w.storeyWorld(storeyId));
      const obstacles = obstaclesFrom(ent.model.batches, ent.model.classOf, toPlan);
      const dir = { '-x': [-1, 0, 0], '+x': [1, 0, 0], '-y': [0, -1, 0], '+y': [0, 1, 0] };
      let plan, missed = [];
      if (S.sys === 'drain') {
        const ox = len(S.f.ox), oy = len(S.f.oy), oz = len(S.f.oz);
        if (!Number.isFinite(ox) || !Number.isFinite(oy)) { S.msg = T('mep.rs.err.outlet'); return; }
        const stacks = String(S.f.stacks || '').split(';').map((s) => s.split(',').map((v) => parseLen(v.trim(), units))).filter((p) => p.length === 2 && p.every(Number.isFinite)).map((p, i) => ({ id: 'S' + (i + 1), p }));
        const tail = S.f.tail === '' || S.f.tail == null ? 100 : len(S.f.tail);
        plan = planDrain(w, { storey, std: projectStandard() || 'us', outlet: { p: [ox, oy, Number.isFinite(oz) ? oz : 0], out: dir[S.f.od || '-x'], ...(Number.isFinite(oz) ? { z: oz } : {}) }, stacks, obstacles, minTail: tail });
      } else if (S.sys === 'water') {
        const [eq, port] = String(S.f.src).split('|');
        const ps = num(S.f.ps), pr = num(S.f.pr);
        const o = { storey, source: { eq, port }, obstacles, pressure: Number.isFinite(ps) ? { source: ps, required: Number.isFinite(pr) ? pr : 0 } : null };
        if (S.hot && S.f.hsrc) { const [heq, hport] = S.f.hsrc.split('|'); o.hot = { source: { eq: heq, port: hport } }; if (S.loop && S.f.lport) { const [leq, lport] = S.f.lport.split('|'); o.hot.loop = { size: S.f.lsize || '1/2', port: { eq: leq, port: lport } }; } }
        plan = planWaterSystems(w, o);
      } else {
        const indoors = [...S.picked].map((g) => ({ eq: g, capacity: num(S.cap[g]) })).filter((x) => x.capacity > 0);
        if (!S.f.out || !indoors.length) { S.msg = T('mep.rs.err.pick'); return; }
        const lim = {}; for (const [k, v] of [['maxTotal', S.f.l1], ['maxLongest', S.f.l2], ['maxOutdoorAbove', S.f.l3], ['maxOutdoorBelow', S.f.l4], ['maxIndoorIndoor', S.f.l5]]) { const n = len(v); if (Number.isFinite(n)) lim[k] = n; }
        const cx = len(S.f.cx), cy = len(S.f.cy), cz = len(S.f.cz);
        plan = planRefrigerant(w, { storey, outdoor: S.f.out, indoors, limits: lim, obstacles, condensate: Number.isFinite(cx) && Number.isFinite(cy) ? { outlet: { p: [cx, cy, Number.isFinite(cz) ? cz : 0], out: dir[S.f.cd || '-x'] } } : null });
      }
      missed = (plan.failed || []).map((f) => (f.system ? f.system + ' ' : '') + (f.id ?? '') + ': ' + T('mep.rs.why.' + String(f.error).replace(/^limit-.*/, 'limit'), { mm: f.short ?? f.over ?? '' }));
      if (!plan.specs.length) { S.msg = T('mep.rs.none') + (missed.length ? ' ' + missed.join('; ') : ''); return; }
      await ctx.apply(placeNetwork(plan.specs), T('mep.rs.undo'));
      S.msg = T('mep.rs.done', { runs: plan.specs.length }) + (missed.length ? ' ' + T('mep.rs.missed', { list: missed.join('; ') }) : '');
    } catch (e) {
      S.msg = T(e.key || 'mep.rs.err.fail');
      if (!e.key) ctx.status(String(e.message || e), true);
    } finally { S.busy = false; ctx.rerender(); }
  }

  function node() {
    const w = writer();
    const kids = [el('h4', { className: 'bc-sub' }, T('mep.rs.title')), el('p', { className: 'bc-muted' }, T('mep.rs.intro'))];
    const sys = el('select', { className: 'select-cc', 'data-rs-system': '' }, ['drain', 'water', 'ref'].map((k) => el('option', { value: k }, T('mep.rs.sys.' + k))));
    sys.value = S.sys; sys.addEventListener('change', () => { S.sys = sys.value; S.msg = ''; ctx.rerender(); });
    kids.push(el('label', {}, T('mep.rs.system'), sys));
    const u = isMetric(getDisplayUnits()) ? 'mm' : '';
    if (!w) return el('div', { className: 'bc-clash bc-mep-route', 'data-mep-route-systems': '' }, ...kids, el('p', { className: 'bc-muted' }, T('mep.rs.empty')));
    if (S.sys === 'drain') {
      const n = readFixturePorts(w).filter((q) => q.domain === 'pipe' && q.system === 'san' && q.fixture).length;
      kids.push(el('p', { className: 'bc-muted', 'data-rs-count': '' }, T('mep.rs.drain.count', { n })));
      kids.push(input('ox', 'data-rs-ox', T('mep.rs.drain.ox')), input('oy', 'data-rs-oy', T('mep.rs.drain.oy')), input('oz', 'data-rs-oz', T('mep.rs.drain.oz')),
        select('od', 'data-rs-od', T('mep.rs.drain.od'), ['-x', '+x', '-y', '+y'].map((k) => ({ key: k, label: k }))), input('stacks', 'data-rs-stacks', T('mep.rs.drain.stacks'), 24), input('tail', 'data-rs-tail', T('mep.rs.drain.tail')));
      kids.push(el('p', { className: 'bc-muted' }, T('mep.rs.drain.note')));
    } else if (S.sys === 'water') {
      const cwOut = withPort((p) => p.kind === 'pipe' && p.system === 'cw' && p.direction !== 'in'), hwOut = withPort((p) => p.kind === 'pipe' && p.system === 'hw' && p.direction !== 'in'), anyIn = withPort((p) => p.kind === 'pipe' && p.direction !== 'out');
      if (!cwOut.length) kids.push(el('p', { className: 'bc-muted', 'data-rs-empty': '' }, T('mep.rs.water.empty')));
      else {
        kids.push(select('src', 'data-rs-src', T('mep.rs.water.src'), cwOut), input('ps', 'data-rs-ps', T('mep.rs.water.ps')), input('pr', 'data-rs-pr', T('mep.rs.water.pr')));
        if (hwOut.length) {
          kids.push(check(T('mep.rs.water.hot'), S.hot, (v) => { S.hot = v; }, 'data-rs-hot'));
          if (S.hot) { kids.push(select('hsrc', 'data-rs-hsrc', T('mep.rs.water.hsrc'), hwOut), check(T('mep.rs.water.loop'), S.loop, (v) => { S.loop = v; }, 'data-rs-loop'));
            if (S.loop) kids.push(select('lport', 'data-rs-lport', T('mep.rs.water.lport'), anyIn), input('lsize', 'data-rs-lsize', T('mep.rs.water.lsize'))); }
        }
        kids.push(el('p', { className: 'bc-muted' }, T('mep.rs.water.note')));
      }
    } else {
      const outs = withPort((p) => p.system === 'refl'), outdoors = outs.filter((x) => /outdoor/.test(x.eq.kind)), indoors = outs.filter((x) => !/outdoor/.test(x.eq.kind) && /split|fancoil/.test(x.eq.kind));
      if (!outdoors.length || !indoors.length) kids.push(el('p', { className: 'bc-muted', 'data-rs-empty': '' }, T('mep.rs.ref.empty')));
      else {
        const o1 = outdoors.map((x) => ({ key: x.eq.guid, label: eqLabel(x.eq) }));
        kids.push(select('out', 'data-rs-out', T('mep.rs.ref.out'), o1), el('p', { className: 'bc-muted' }, T('mep.rs.ref.indoor')));
        for (const x of indoors) {
          const b = el('input', { type: 'checkbox', 'data-rs-term': x.eq.guid }); b.checked = S.picked.has(x.eq.guid); b.addEventListener('change', () => { if (b.checked) S.picked.add(x.eq.guid); else S.picked.delete(x.eq.guid); });
          const f = el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', size: 4, value: S.cap[x.eq.guid] ?? '', 'data-rs-cap': x.eq.guid, 'aria-label': T('mep.rs.ref.cap', { what: eqLabel(x.eq) }) }); f.addEventListener('input', () => { S.cap[x.eq.guid] = f.value; });
          kids.push(el('div', { className: 'bc-find-row' }, el('label', {}, b, ' ', eqLabel(x.eq)), f, ' kW'));   // i18n-ignore: unit mark
        }
        kids.push(el('p', { className: 'bc-muted' }, T('mep.rs.ref.limits')));
        kids.push(input('l1', 'data-rs-l1', T('mep.rs.ref.l1')), input('l2', 'data-rs-l2', T('mep.rs.ref.l2')), input('l3', 'data-rs-l3', T('mep.rs.ref.l3')), input('l4', 'data-rs-l4', T('mep.rs.ref.l4')), input('l5', 'data-rs-l5', T('mep.rs.ref.l5')));
        kids.push(el('p', { className: 'bc-muted' }, T('mep.rs.ref.cond')), input('cx', 'data-rs-cx', T('mep.rs.drain.ox')), input('cy', 'data-rs-cy', T('mep.rs.drain.oy')), input('cz', 'data-rs-cz', T('mep.rs.drain.oz')), select('cd', 'data-rs-cd', T('mep.rs.drain.od'), ['-x', '+x', '-y', '+y'].map((k) => ({ key: k, label: k }))));
        kids.push(el('p', { className: 'bc-muted' }, T('mep.rs.ref.note')));
      }
    }
    void u;
    kids.push(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-rs-route': '', disabled: S.busy, onClick: () => { run(); } }, T('mep.rs.route'))));
    if (S.msg) kids.push(el('p', { className: 'bc-muted', 'data-rs-msg': '' }, S.msg));
    kids.push(el('p', { className: 'bc-muted' }, T('mep.rs.aid')));
    return el('div', { className: 'bc-clash bc-mep-route', 'data-mep-route-systems': '' }, ...kids);
  }
  const api = { node, run, state: S };
  if (typeof window !== 'undefined') window.bimcraftRouteSystems = api;   // for tests
  return api;
}
