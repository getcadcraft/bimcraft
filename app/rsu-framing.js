/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-framing.js: res-ui.js's 14 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuFraming(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { loopAt, labelPoint } from './model-rooms.js';
import { wallType } from './model-walls.js';
import { frameHosts, changeFraming, keepPiece, LUMBER, lumberList } from './res-framing.js';
import { isMetric } from './model-units.js';
import { el } from './ui-util.js';
import { activeTji, parseTjiTable, setActiveTji, tjiStatement } from './tji-table.js';

export function mountRsuFraming(ctx) {
  const { R, t, L, writer } = ctx;

  // ---- framing (RC.9) ----
  function frameHostAt(p) {
    const tol = ctx.A.pv().pxToMm(14);
    let best = null;
    for (const w of ctx.A.wallsHere()) {
      const L2 = w.len, u = [(w.b[0] - w.a[0]) / L2, (w.b[1] - w.a[1]) / L2], n = [-u[1], u[0]];
      const s2 = (p[0] - w.a[0]) * u[0] + (p[1] - w.a[1]) * u[1], d = Math.abs((p[0] - w.a[0]) * n[0] + (p[1] - w.a[1]) * n[1]);
      if (s2 < -tol || s2 > L2 + tol) continue;
      const sc = Math.max(0, d - w.t / 2);
      if (sc <= tol && (!best || sc < best.sc)) best = { sc, kind: 'wall', guid: w.guid, poly: ctx.A.S.outlines.get(w.guid), label: t('res.fr.of.wall') };
    }
    if (best) return best;
    const D = ctx.A.S.data?.derived;
    for (const rf of (D?.roofs || []).filter((x) => x.storey === ctx.A.S.level || (ctx.A.S.data.levels.find((l) => l.guid === x.walls)?.id === ctx.A.S.level))) {
      const lv = ctx.A.S.data.levels.find((l) => l.guid === rf.walls), loops = lv && ctx.A.loopsOf(lv.id), o = loops && loopAt(loops.outlines, rf.seed);
      if (o && ctx.inRun(p, o.poly) && rf.storey === ctx.A.S.level) return { kind: 'roof', guid: rf.guid, poly: o.poly, label: t('res.fr.of.roof') };
    }
    for (const fl of (D?.floors || []).filter((x) => x.storey === ctx.A.S.level)) {
      const loop = ctx.A.S.loops && loopAt(fl.mode === 'building' ? ctx.A.S.loops.outlines : ctx.A.S.loops.rooms, fl.seed);
      if (loop && ctx.inRun(p, loop.poly)) return { kind: 'floor', guid: fl.guid, poly: loop.poly, label: t('res.fr.of.floor') };
    }
    return null;
  }
  const frameOpts = () => ({ spacing: R.frame.spacing, corners: R.frame.corners, blocking: R.frame.blocking, roofMode: R.frame.roofMode, floorMode: R.frame.floorMode, floorDir: R.frame.floorDir });
  function frameAllWalls() {
    const hosts = ctx.A.wallsHere().filter((w) => (w.assembly || wallType(w.typeKey))?.layers.some((l) => l.mat === 'studs')).map((w) => w.guid);
    if (!hosts.length) { ctx.A.host.status(t('res.err.noframe'), true); return; }
    ctx.A.commit(frameHosts({ hosts, ...frameOpts() }), { label: t('res.fr.walls', { n: hosts.length }), verb: t('res.verb.framed') });
  }
  /** Framing shown or hidden, walls / floors / roofs see-through: applied to the 3D view after every reload. */
  function applyFrameVis() {
    const v = ctx.A.host.viewer?.();
    if (!v?.vis) return;
    const k = ctx.A.kb(), framing = [], hosts = [];
    for (const fr of R.frames) { for (const p of fr.parts) framing.push(k + p); }
    const D = ctx.A.S.data;
    for (const fr of R.frames) {
      const wall = D?.walls.find((x) => x.guid === fr.host);
      if (wall) { hosts.push(k + wall.id); continue; }
      const fl = D?.derived?.floors.find((x) => x.guid === fr.host);
      if (fl) { hosts.push(k + fl.id); continue; }
      const rf = D?.derived?.roofs.find((x) => x.guid === fr.host);
      if (rf) for (const p of rf.parts) hosts.push(k + p);
    }
    const have = v.allKeys?.() || null, ok = (key) => !have || have.has(key);
    v.vis.unhide([...framing, ...hosts]);
    const hide = [...(R.frame.show ? [] : framing), ...(R.frame.see ? hosts : [])].filter(ok);
    if (hide.length) v.vis.hide(hide);
    v.applyVisibility();
  }
  function frameScene(scene) {
    if (!R.frame.show) return;
    const k = ctx.A.kb();
    for (const fr of R.frames) {
      if (fr.kind !== 'wall' || fr.storey !== ctx.A.S.level || !fr.wallPieces) continue;
      const thin = [];
      for (const pc of fr.wallPieces.pieces) {
        if (!pc.box || !/^(stud|king|jack)/.test(pc.role) || pc.box.z0 > 1200 || pc.box.z1 < 1200) continue;   // what the plan's cut passes through
        const b = pc.box, P = fr.wallPieces.toPlan, q = [P(b.x0, b.y0), P(b.x1, b.y0), P(b.x1, b.y1), P(b.x0, b.y1)];
        thin.push(...ctx.pp(q));
      }
      if (thin.length) scene.symbols.push({ key: null, thin });
    }
  }
  function frameOverlay(o) {
    if (ctx.A.S.tool !== 'framing' || !R.frame.hover) return;
    const h = R.frame.hover;
    if (h.poly) o.walls.push(h.poly);
    const have = R.frames.find((x) => x.host === h.guid);
    o.hud = { p: h.poly ? labelPoint(h.poly) : [0, 0], text: t(have ? 'res.fr.hud.again' : 'res.fr.hud', { what: h.label }) };
  }
  function frameProps(items, kit) {
    const it = items[0];
    const fr = R.frames.find((x) => x.guid === it.guid);
    if (!fr) return null;
    const run = (ch) => ctx.A.commit(changeFraming(fr.guid, ch), { ...kit.one(t('res.fr.of.' + fr.kind)), reselect: ctx.again(() => R.frames, fr.guid) });
    const mm = isMetric(ctx.A.units()), opts = mm ? [['400', '400 mm'], ['600', '600 mm']] : [['406.4', '16" o.c.'], ['609.6', '24" o.c.']];   // i18n-ignore: lengths
    const cur = opts.reduce((b, o) => (Math.abs(Number(o[0]) - fr.spacing) < Math.abs(Number(b[0]) - fr.spacing) ? o : b))[0];
    kit.field(t('res.fr.spacing'), kit.select(opts, cur, 'data-mp-frsp', (v) => run({ spacing: Number(v) })));
    if (fr.kind === 'wall') {
      kit.field(t('res.fr.corners'), kit.select([['three-stud', t('res.fr.corner.three')], ['california', t('res.fr.corner.california')]], fr.corners, 'data-mp-frcorner', (v) => run({ corners: v })));
      const bl = el('input', { type: 'checkbox', checked: !!fr.blocking, 'data-mp-frblock': '' });
      bl.addEventListener('change', () => run({ blocking: bl.checked }));
      kit.field(t('res.fr.blocking'), el('label', {}, bl, ' ' + t('res.fr.blocking.on')));
    }
    if (fr.kind === 'roof') kit.field(t('res.fr.roofmode'), kit.select([['stick', t('res.fr.roof.stick')], ['truss', t('res.fr.roof.truss')]], fr.roofMode, 'data-mp-frroof', (v) => run({ roofMode: v })));
    if (fr.kind === 'floor') {
      kit.field(t('res.fr.floormode'), kit.select([['lumber', t('res.fr.floor.lumber')], ['tji', t('res.fr.floor.tji')]], fr.floorMode, 'data-mp-frfloor', (v) => run({ floorMode: v })));
      kit.field(t('res.fr.floordir'), kit.select([['auto', t('res.fr.dir.auto')], ['x', t('res.fr.dir.x')], ['y', t('res.fr.dir.y')]], fr.floorDir, 'data-mp-frdir', (v) => run({ floorDir: v })));
      if (fr.floorMode === 'tji') tjiRows(fr, kit, run);
    }
    const q = fr.qty || {};
    kit.rows.push(el('dt', {}, t('res.fr.pieces')), el('dd', { 'data-mp-frpieces': '' }, String(q.Pieces ?? fr.parts.length)), el('dt', {}, t('res.fr.bf')), el('dd', {}, String(Math.round(Number(q.BoardFeet) || 0))));
    if (fr.notes && fr.notes !== 'ok') kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-frnotes': '' }, fr.notes.split(',').map((x) => t('res.fr.note.' + x)).join(' ')));
    if (it.piece) {
      const pc = it.piece;
      kit.rows.push(el('dt', {}, t('res.fr.piece')), el('dd', { 'data-mp-frpiece': '' }, t('res.fr.role.' + pc.role) + ', ' + sizeLabel(pc.size) + ', ' + L(pc.length)));
      if (pc.check) kit.rows.push(el('dt', {}, ''), el('dd', { className: 'bc-sub' }, pc.check));
      const keep = kit.button(t(pc.generated ? 'res.fr.keep' : 'res.fr.kept'), 'data-mp-frkeep', () => ctx.A.commit(keepPiece(pc.guid), kit.one(t('res.fr.piece'))));
      if (!pc.generated) keep.disabled = true;
      kit.field(t('res.fr.keepq'), keep);
    }
    kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub' }, t('res.fr.note')));
    return { title: t('res.fr.of.' + fr.kind) };
  }

  const saveTji = () => { try { const a = activeTji(); if (a) localStorage.setItem(ctx.TJI_KEY, JSON.stringify({ text: a.raw, caseId: a.caseId })); else localStorage.removeItem(ctx.TJI_KEY); } catch (e) { /* private window: the table stays for this page */ } };

  function loadTjiFile(file, again) {
    const rd = new FileReader();
    rd.onload = () => {
      const text = String(rd.result || ''), r = parseTjiTable(text);
      if (!r.ok) { ctx.A.host.status(r.errors.slice(0, 3).map((x) => t(x.key, x.fill)).join(' '), true); return; }
      setActiveTji(r.table); activeTji().raw = text; saveTji();
      ctx.A.host.status(t('tji.loaded', { table: r.table.id, n: r.table.rows.length }));
      again(); ctx.tjiBar?.();
    };
    rd.readAsText(file);
  }
  function tjiRows(fr, kit, run) {
    const act = activeTji();
    const inp = el('input', { type: 'file', accept: '.json,.csv,application/json,text/csv', hidden: true, 'data-mp-tjifile': '' });
    inp.addEventListener('change', () => { if (inp.files[0]) loadTjiFile(inp.files[0], () => run({ floorMode: 'tji' })); });
    const load = kit.button(t(act ? 'tji.replace' : 'tji.load'), 'data-mp-tjiload', () => inp.click());
    kit.field(t('tji.table'), el('span', {}, act ? el('span', { 'data-mp-tjitable': '' }, act.table.id + ' (' + act.table.edition + ')') : el('span', { className: 'bc-sub', 'data-mp-tjitable': '' }, t('tji.none')), ' ', load, inp));
    if (act) {
      if (act.table.cases.length > 1) kit.field(t('tji.case'), kit.select(act.table.cases.map((c) => [c.id, c.id]), act.caseId, 'data-mp-tjicase', (v) => { act.caseId = v; saveTji(); run({ floorMode: 'tji' }); }));
      kit.field('', kit.button(t('tji.clear'), 'data-mp-tjiclear', () => { setActiveTji(null); saveTji(); ctx.tjiBar?.(); run({ floorMode: 'tji' }); }));
      const a = tjiStatement(act.table, act.caseId, t);
      kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-tjiassume': '' }, a.join(' ')));
    } else kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub' }, t('tji.help')));
  }

  function tjiProblems() {
    const out = [];
    for (const fr of R.frames) {
      if (fr.kind !== 'floor' || fr.floorMode !== 'tji') continue;
      const about = [{ kind: 'framing', id: fr.guid, label: t('res.fr.of.floor') }], tb = fr.tji;
      const add = (code, severity, key, vars = {}) => out.push({ code, severity, msg: { key, vars }, text: t(key, vars), about });
      if (!tb || !tb.Table) add('frame.tji.default', 'warning', 'tji.p.default');
      else {
        if (tb.Example === true || /^(\.?T\.?|true)$/i.test(String(tb.Example ?? ''))) add('frame.tji.example', 'warning', 'tji.p.example', { table: tb.Table });
        add('frame.tji.assumptions', 'note', 'tji.p.assume', { table: tb.Table, text: String(tb.Assumptions || '').replace(/\n/g, ' ') });
      }
    }
    return out;
  }
  function tjiRegister() {
    const P = window.ccProblems;
    if (!P?.source) return;
    ctx.tjiSrc ||= P.source({ id: 'bimcraft.framing', kind: 'check', label: t('tji.src'), debounceMs: 400, run: () => (ctx.A.S.on ? tjiProblems() : null) });
    ctx.tjiSrc.invalidate();
  }

  const sizeLabel = (sz) => (isMetric(ctx.A.units()) ? sz.replace(/^(\dx\d+)/, (m) => LUMBER[m]?.metric || m) : sz);
  // the cut list as a schedule (model-ui.js Schedules panel): size, stock length, pieces, board feet
  function lumberSchedule() {
    const w = writer();
    if (!w) return null;
    const mm = isMetric(ctx.A.units()), lst = lumberList(w, { metric: mm });
    if (!lst.rows.length) return { head: [t('res.fr.sch.size'), t('res.fr.sch.length'), t('res.fr.sch.count'), t('res.fr.sch.bf')], rows: [], nums: [2, 3], total: null };
    const tj = R.frames.find((f) => f.kind === 'floor' && f.floorMode === 'tji' && f.tji?.Assumptions);   // GH.3-E: the assumptions go on the schedule
    return {
      ...(tj ? { note: String(tj.tji.Assumptions).replace(/\n/g, ' ') } : {}),
      head: [t('res.fr.sch.size'), t('res.fr.sch.length'), t('res.fr.sch.count'), t('res.fr.sch.bf')],
      rows: lst.rows.map((r) => [r.label, L(r.stock), String(r.count), r.bf.toFixed(1)]),
      nums: [2, 3], total: [t('model.sch.total'), '', String(lst.pieces), lst.bf.toFixed(1)],
    };
  }

  return { frameHostAt, frameOpts, frameAllWalls, applyFrameVis, frameScene, frameOverlay, frameProps, loadTjiFile, tjiRegister, lumberSchedule };
}
