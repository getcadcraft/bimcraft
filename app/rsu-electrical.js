/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-electrical.js: res-ui.js's 10 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuElectrical(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { GROUPS as EL_GROUPS, SYMBOLS as EL_SYMBOLS } from './res-elec-symbols.js';
import { el } from './ui-util.js';
import { parseLen, isMetric } from './model-units.js';
import { DEVICES, wallSpot, placeDevice, symbolPlan, symbolScale, isSwitch, changeDevice, isBoard, isLight, deviceSchedule, circuitSchedule } from './res-elec.js';

export function mountRsuElectrical(ctx) {
  const { R, t, L, levelGuid } = ctx;

  // ---- electrical (RC.6) ----
  function bindElecRow() {
    const root = ctx.A.root, ks = root.querySelector('[data-res-elkind]');
    if (!ks) return;
    if (!ks.dataset.bound) {
      ks.dataset.bound = '1';
      ks.replaceChildren(...EL_GROUPS.map((g) => el('optgroup', { label: t('res.el.group.' + g) }, ...EL_SYMBOLS.filter((x) => x.group === g).map((x) => el('option', { value: x.key }, t('res.el.kind.' + x.key))))));
      ks.addEventListener('change', () => { R.el.kind = ks.value; R.el.height = null; const hi = root.querySelector('[data-res-elheight]'); if (hi) hi.value = ''; ctx.A.drawOverlay(); });
      root.querySelector('[data-res-elcircuit]')?.addEventListener('change', (e) => { R.el.circuit = e.target.value.trim().slice(0, 20); });
      const hi = root.querySelector('[data-res-elheight]');
      hi?.addEventListener('change', () => { const v = hi.value.trim(); if (!v) { R.el.height = null; return; } const mm = parseLen(v, ctx.A.units()); if (mm > 0) R.el.height = mm; else ctx.A.host.status(t('model.err.length'), true); hi.value = R.el.height ? L(R.el.height) : ''; });
      root.querySelector('[data-res-eldone]')?.addEventListener('click', () => endLink());
    }
    ks.value = R.el.kind;
    const hi = root.querySelector('[data-res-elheight]');
    if (hi && document.activeElement !== hi) { hi.value = R.el.height ? L(R.el.height) : ''; hi.placeholder = DEVICES[R.el.kind].mount === 'ceiling' ? t('res.el.height.ceiling') : L(DEVICES[R.el.kind].height[isMetric(ctx.A.units()) ? 'mm' : 'ftin']); }
  }
  const elWalls = () => ctx.A.wallsHere().map((w) => ({ guid: w.guid, a: w.a, b: w.b, t: w.t }));
  function elSpot(p) {
    const D = DEVICES[R.el.kind];
    if (D.mount !== 'wall') return { at: p, angle: Math.PI / 2 };
    return wallSpot(elWalls(), p, Math.max(600, ctx.A.pv().pxToMm(30)));
  }
  function elClick(p) {
    const sp = elSpot(p);
    if (!sp) { ctx.A.host.status(t('res.err.elwall'), true); return; }
    ctx.A.commit(placeDevice({ level: levelGuid(), kind: R.el.kind, units: ctx.A.units(), circuit: R.el.circuit, height: R.el.height ?? undefined, ...sp }), { label: t('res.el.kind.' + R.el.kind), verb: t('model.verb.placed') });
  }
  function elOverlay(o) {
    if (ctx.A.S.tool === 'ellink') {
      const sw = R.devs.find((d) => d.guid === R.el.link);
      if (sw && R.el.at) o.hud = { p: R.el.at, text: t('res.el.hud.link', { tag: sw.tag }) };
      return;
    }
    if (ctx.A.S.tool !== 'electrical' || !R.el.at) return;
    const sp = elSpot(R.el.at);
    if (!sp) { o.hud = { p: R.el.at, text: t('res.el.hud.wall') }; return; }
    const sym = symbolPlan(R.el.kind, sp.at, sp.angle, symbolScale(ctx.A.units()));
    if (sym) o.symbols.push({ key: null, lines: sym.lines, arcs: sym.arcs, thin: sym.thin });
    o.hud = { p: sp.at, text: t('res.el.kind.' + R.el.kind) };
  }
  function elScene(scene) {
    const k = ctx.A.kb(), sc = symbolScale(ctx.A.units());
    const here = R.devs.filter((d) => d.storey === ctx.A.S.level);
    const byGuid = new Map(here.map((d) => [d.guid, d]));
    for (const d of here) {
      const sym = symbolPlan(d.kind, d.at, d.angle, sc);
      if (!sym) continue;
      scene.symbols.push({ key: k + d.id, lines: sym.lines, arcs: sym.arcs, thin: sym.thin, poly: sym.poly });
      // the tag beside it, on the room side
      const f = [Math.cos(d.angle), Math.sin(d.angle)];
      const at = DEVICES[d.kind].mount === 'wall' ? [d.at[0] + f[0] * 7 * sc, d.at[1] + f[1] * 7 * sc] : [d.at[0] + 4.5 * sc, d.at[1] + 4.5 * sc];
      scene.rooms.push({ key: k + d.id, at, label: [d.tag] });
      // switch legs: a curved dashed line to each light it switches
      if (isSwitch(d.kind)) for (const g of d.controls) {
        const lt = byGuid.get(g);
        if (!lt) continue;
        const a = d.at, b = lt.at, m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], L2 = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        const c = [m[0] - (b[1] - a[1]) / L2 * L2 * 0.2, m[1] + (b[0] - a[0]) / L2 * L2 * 0.2];
        const pts = [];
        for (let i = 0; i <= 16; i++) { const u = i / 16; pts.push([(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]]); }
        scene.symbols.push({ key: null, dashed: pts.slice(1).map((q, i) => [pts[i][0], pts[i][1], q[0], q[1]]) });
      }
    }
  }
  function endLink() { R.el.link = null; ctx.A.setTool('select'); }
  function elProps(items, kit) {
    const devs = items.map((x) => R.devs.find((d) => d.guid === x.guid)).filter(Boolean);
    if (!devs.length) return null;
    const d = devs[0];
    if (devs.length > 1) {
      const ci = el('input', { type: 'text', className: 'bc-input', value: devs.every((x) => x.circuit === d.circuit) ? d.circuit : '', maxLength: 20, 'data-mp-elcircuit': '' });
      ci.addEventListener('change', () => { const ops = devs.map((x) => changeDevice(x.guid, { circuit: ci.value })); ctx.A.commit((ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: ctx.A.mergeJournals(r.journal, r2.journal) } : r2; } return r; }, { label: t('res.el.devices', { n: devs.length }), verb: t('model.verb.changed') }); });
      kit.field(t('res.el.sch.circuit'), ci);
      return { title: t('res.el.devices', { n: devs.length }) };
    }
    const title = d.tag + ' · ' + t('res.el.kind.' + d.kind);   // i18n-ignore: tag and name
    const run = (ch) => ctx.A.commit(changeDevice(d.guid, ch), { ...kit.one(title), reselect: () => { const x = R.devs.find((y) => y.guid === d.guid); return x ? [ctx.A.kb() + x.id] : null; } });
    const tg = el('input', { type: 'text', className: 'bc-input', value: d.tag, maxLength: 20, 'data-mp-eltag': '' });
    tg.addEventListener('change', () => { if (tg.value.trim()) run({ tag: tg.value }); });
    kit.field(t('res.el.sch.tag'), tg);
    const ci = el('input', { type: 'text', className: 'bc-input', value: d.circuit, maxLength: 20, 'data-mp-elcircuit': '' });
    ci.addEventListener('change', () => run({ circuit: ci.value }));
    kit.field(t('res.el.sch.circuit'), ci);
    if (!isBoard(d.kind)) {
      const ld = el('input', { type: 'text', className: 'bc-input bc-num', value: String(Math.round(d.load)), 'data-mp-elload': '' });
      ld.addEventListener('change', () => { const v = Number(ld.value); if (v >= 0) run({ load: v }); else ld.value = ld.defaultValue; });
      kit.field(t('res.el.load'), ld, el('span', { className: 'bc-sub' }, ' W'));   // i18n-ignore: watts
    }
    kit.field(DEVICES[d.kind].mount === 'ceiling' ? t('res.el.height.at') : t('res.el.height'), kit.lenInput(d.height, 'data-mp-elheight', (mm) => run({ height: mm }), { min: 50 }));
    kit.field(t('res.el.room'), el('span', { 'data-mp-elroom': '' }, d.room || t('res.el.room.none')));   // 0.10 BK.22 (bk-r3-types-10): the room it stands in (room-lookup.js keeps it up to date)
    if (isSwitch(d.kind)) {
      const tags = d.controls.map((g) => R.devs.find((x) => x.guid === g)?.tag).filter(Boolean);
      kit.field(t('res.el.controls'), el('span', { 'data-mp-elcontrols': '' }, tags.length ? tags.join(', ') : t('res.el.controls.none')));
      kit.field('', kit.button(t('res.el.link'), 'data-mp-ellink', () => { R.el.link = d.guid; ctx.A.setTool('ellink'); ctx.A.host.status(t('res.el.link.status', { tag: d.tag })); }));
    }
    if (isLight(d.kind)) {
      const by = R.devs.filter((x) => x.controls.includes(d.guid)).map((x) => x.tag);
      kit.field(t('res.el.switchedby'), el('span', { 'data-mp-elby': '' }, by.length ? by.join(', ') : t('res.el.controls.none')));
    }
    return { title };
  }
  function elSchedules() {
    if (!ctx.A.S.on || !R.devs.length) return {};
    return { devices: deviceSchedule(R.devs, ctx.A.S.data?.levels || [], { fmtLen: L, t }), circuits: circuitSchedule(R.devs, { units: ctx.A.units(), t }) };
  }
  function elScheduleKeys(kind, i) {
    const k = ctx.A.kb();
    if (kind === 'devices') { const d = R.devs[i]; return d ? [k + d.id] : []; }
    const sc = circuitSchedule(R.devs, { units: ctx.A.units(), t }), row = sc.rows[i];
    if (!row) return [];
    const c = row[0] === t('res.el.nocircuit') ? '' : row[0];
    return R.devs.filter((d) => !isBoard(d.kind) && d.circuit === c).map((d) => k + d.id);
  }

  return { bindElecRow, elClick, elOverlay, elScene, endLink, elProps, elSchedules, elScheduleKeys };
}
