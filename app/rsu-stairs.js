/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-stairs.js: res-ui.js's 14 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuStairs(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { rules } from './rules-hook.js';
import { steelPreview } from './steelstair-bim.js';
import { stairLayout, changeStair, STAIR_KINDS } from './res-stair.js';
import { libraryTypes, typeFromItem as fenceTypeFromItem } from './fence/index.js';
import { placeFenceParts } from './fence-bim.js';
import { placeRailing, changeRailing, railingParts } from './res-railing.js';
import { el } from './ui-util.js';

export function mountRsuStairs(ctx) {
  const { R, t, stairKindName, L, levelGuid, snap } = ctx;

  function stairSpecAt(p, e) {
    const st = R.stair;
    if (!st.start) return null;
    const q = snap(p, e, [st.start]).p;
    const dx = q[0] - st.start[0], dy = q[1] - st.start[1];
    if (Math.hypot(dx, dy) < 50) return null;
    const lv = ctx.A.level(), above = ctx.A.levelAbove();
    const height = above ? above.elevation - lv.elevation : lv.height;
    return { kind: st.kind, turn: st.turn, width: st.width, railings: st.railings, start: st.start, angle: Math.atan2(dy, dx) * 180 / Math.PI, height, ...packStair(st.kind) };
  }
  /** 0.8 REG.1: a new stair starts from the riser and tread the regulations add-on gives (a spiral keeps its own labelled defaults; none without an add-on). */
  function packStair(kind) {
    return kind === 'spiral' ? {} : (rules()?.stairStart?.(kind) || {});
  }
  function stairSymbols(L, onTop, k, key) {
    const dashed = [], thin = [], lines = [];
    for (const pc of L.pieces) for (const tr2 of (pc.kind === 'landing' ? [{ poly: pc.poly, z: pc.z }] : pc.treads || [])) (onTop || tr2.z <= ctx.CUT ? thin : dashed).push(...ctx.pp(tr2.poly));   // a spiral's post has no treads
    for (const o of L.outline) lines.push(...ctx.pp(o));
    // the walk line with an arrow at its end (up on the bottom level, down from the top)
    const W = onTop ? L.walk.slice().reverse() : L.walk;
    for (let i = 0; i + 1 < W.length; i++) thin.push([W[i][0], W[i][1], W[i + 1][0], W[i + 1][1]]);
    const b = W[W.length - 1], a = W[W.length - 2] || W[0], dl = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, ux = (b[0] - a[0]) / dl, uy = (b[1] - a[1]) / dl, hs = 200;
    thin.push([b[0], b[1], b[0] - ux * hs - uy * hs / 2, b[1] - uy * hs + ux * hs / 2], [b[0], b[1], b[0] - ux * hs + uy * hs / 2, b[1] - uy * hs - ux * hs / 2]);
    return { key, lines, thin, dashed, poly: L.outline[0] };
  }
  function stairScene(scene) {
    const k = ctx.A.kb(), levels = ctx.A.S.data?.levels || [];
    for (const st of R.stairs) {
      if (!st.layout) continue;
      const i = levels.findIndex((l) => l.id === st.storey), top = st.topLevel ? levels.find((l) => l.guid === st.topLevel) : levels[i + 1];
      if (st.storey === ctx.A.S.level) scene.symbols.push(stairSymbols(st.layout, false, k, k + st.id));
      else if (top && top.id === ctx.A.S.level) scene.symbols.push(stairSymbols(st.layout, true, k, k + st.id));
    }
    for (const r of R.rails) {
      if (r.storey !== ctx.A.S.level || r.points.length < 2) continue;
      const lines = [];
      for (let i = 0; i + 1 < r.points.length; i++) lines.push([r.points[i][0], r.points[i][1], r.points[i + 1][0], r.points[i + 1][1]]);
      scene.symbols.push({ key: k + r.id, lines, poly: bandOf(r.points, 60) });
    }
  }
  /** A thin polygon round a path (for picking a railing on the plan). */
  function bandOf(P, h) {
    const left = [], right = [];
    for (let i = 0; i < P.length; i++) {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)], d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, n = [-(b[1] - a[1]) / d, (b[0] - a[0]) / d];
      left.push([P[i][0] + n[0] * h, P[i][1] + n[1] * h]); right.push([P[i][0] - n[0] * h, P[i][1] - n[1] * h]);
    }
    return [...left, ...right.reverse()];
  }
  function stairOverlay(o) {
    if (ctx.A.S.tool === 'stair') {
      const st = R.stair;
      if (st.at) o.snap = st.at;
      if (!st.start) { if (st.at) o.hud = { p: st.at.p, text: t('res.st.hud.start') }; return; }
      o.points.push(st.start);
      const spec = st.spec;
      if (!spec) return;
      if (spec.kind === 'steel') {   // 0.11 SU.1814c: the generator's outline and its risers
        const pv = steelPreview(spec);
        if (pv.error) { o.hud = { p: st.at?.p || st.start, text: t(pv.error) }; return; }
        const q = pv.outline;
        for (let i = 0; i < 4; i++) o.lines.push([q[i][0], q[i][1], q[(i + 1) % 4][0], q[(i + 1) % 4][1]]);
        o.hud = { p: st.at?.p || st.start, text: t('steel.hud', { n: pv.n, r: L(pv.riser), d: L(pv.going), f: pv.flights }) };
        return;
      }
      const L2 = stairLayout(spec);
      if (L2.error) { o.hud = { p: st.at?.p || st.start, text: t(L2.error) }; return; }
      const sym = stairSymbols(L2, false, 0, null);
      o.symbols.push({ lines: sym.lines, thin: [...sym.thin, ...sym.dashed] });
      for (const side of L2.sides) for (let i = 0; i + 1 < side.length; i++) o.dashed.push([side[i][0], side[i][1], side[i + 1][0], side[i + 1][1]]);
      o.hud = { p: st.at?.p || st.start, text: t('res.st.hud', { n: L2.n, r: L(L2.riser), m: L2.treads, d: L(L2.tread) }) };
    }
    if (ctx.A.S.tool === 'railing') {
      const rl = R.rail;
      if (rl.at) o.snap = rl.at;
      const pts = rl.pts || [];
      for (const q of pts) o.points.push(q);
      const all = rl.at ? [...pts, rl.at.p] : pts;
      for (let i = 0; i + 1 < all.length; i++) o.lines.push([all[i][0], all[i][1], all[i + 1][0], all[i + 1][1]]);
      if (rl.at) o.hud = { p: rl.at.p, text: pts.length ? L(all.slice(1).reduce((s2, q, i) => s2 + Math.hypot(q[0] - all[i][0], q[1] - all[i][1]), 0)) : t('res.rl.hud.start') };
    }
  }
  /** The Library's fence types into the Fence kind's picker (none in the Library, or offline: only "No Library type" and "From a file"). */
  async function fillFenceTypes() {
    R.rail.types = [];
    const ft = ctx.A.root.querySelector('[data-res-fltype]');
    const rows = await libraryTypes();
    R.rail.types = rows;
    if (!ft) return;
    const opt = (value, text) => Object.assign(document.createElement('option'), { value, textContent: text });
    ft.replaceChildren(opt('', t('fence.type.none')), ...rows.map((r) => opt('u:' + r.uuid, r.name)), opt('#file', t('fence.type.file')));
    if (!rows.length) ft.title = t('fence.type.empty');
  }
  /** A fence type chosen: its style shows in the style picker; its height is the type's (the height field is not used while a type is chosen). */
  function useFenceType(it, fromFile = false) {
    R.rail.item = it;
    const ft = ctx.A.root.querySelector('[data-res-fltype]');
    if (ft && fromFile) { const v = 'x:' + (it.uuid || ''); if (![...ft.options].some((o) => o.value === v)) ft.insertBefore(Object.assign(document.createElement('option'), { value: v, textContent: it.name || t('fence.type.file') }), ft.lastElementChild); ft.value = v; }
    const st = fenceTypeFromItem(it, 'm')?.style, fs = ctx.A.root.querySelector('[data-res-flstyle]');   // a Barriers fence type or an older fence-type file
    if (['panel', 'rails', 'pickets'].includes(st)) { R.rail.style = st; if (fs) fs.value = st; }
    ctx.A.host.status(t('fence.type.used', { name: it.name || '' }));
  }
  function finishRailing() {
    const pts = R.rail.pts;
    R.rail.pts = null;
    if (!pts || pts.length < 2) { ctx.A.host.status(t('res.err.rail'), true); return; }
    ctx.A.commit(R.rail.kind === 'fence' ? placeFenceParts({ level: levelGuid(), points: pts, height: R.rail.item ? undefined : R.rail.height, style: R.rail.style, item: R.rail.item }) : placeRailing({ level: levelGuid(), points: pts, height: R.rail.height, kind: R.rail.kind }), { label: t(R.rail.kind === 'fence' ? 'res.rl.fence' : R.rail.kind === 'handrail' ? 'res.rail.handrail' : 'res.rail.guard'), verb: t('model.verb.placed') });
  }
  const fmtRule = (v, unit) => (unit === 'pct' ? (Math.round(v * 10) / 10) + ' %' : L(v));
  /** What the regulations add-on says about this stair's checks, in its words; null without one (the labelled-defaults line is used). */
  function regsStairLine(st, Lt) {
    return rules()?.stairLine?.(st, Lt, fmtRule) || null;
  }
  /** The stair options row says where the limits come from (the add-on's words; empty without one). */
  function regsTag() {
    const el2 = ctx.A?.root.querySelector('[data-res-rules-tag]');
    if (el2) el2.textContent = rules()?.tag?.() || '';
  }
  function stairProps(items, kit) {
    if (items.length !== 1) return null;
    const st = R.stairs.find((x) => x.guid === items[0].guid);
    if (!st) return null;
    const run = (ch) => ctx.A.commit(changeStair(st.guid, ch), { ...kit.one(t('res.stair')), reselect: ctx.again(() => R.stairs, st.guid) });
    kit.field(t('res.st.kind'), kit.select(STAIR_KINDS.map((x) => [x, stairKindName(x)]), st.kind, 'data-mp-stkind', (v) => run({ kind: v })));
    if (st.kind !== 'straight') kit.field(t('res.st.turn'), kit.select([['left', t('res.st.turn.left')], ['right', t('res.st.turn.right')]], st.turn, 'data-mp-stturn', (v) => run({ turn: v })));
    kit.field(t('res.st.width'), kit.lenInput(st.width, 'data-mp-stwidth', (mm) => run({ width: mm }), { min: 500 }));
    kit.field(t('res.st.risermax'), kit.lenInput(st.riserMax, 'data-mp-strisermax', (mm) => run({ riserMax: mm }), { min: 100 }));
    kit.field(t('res.st.tread'), kit.lenInput(st.tread, 'data-mp-sttread', (mm) => run({ tread: mm }), { min: st.kind === 'spiral' ? 100 : 150 }), st.kind === 'spiral' ? el('span', { className: 'bc-sub' }, ' ' + t('comforts.st.onwalk')) : null);
    if (st.kind === 'spiral') kit.field(t('comforts.st.post'), kit.lenInput(st.post, 'data-mp-stpost', (mm) => run({ post: mm }), { min: 40 }));
    kit.field(t('res.st.railings'), kit.select(['both', 'left', 'right', 'none'].map((x) => [x, t('res.st.rail.' + x)]), st.railings, 'data-mp-strail', (v) => run({ railings: v })));
    if (st.railings !== 'none') kit.field(t('res.st.railheight'), kit.lenInput(st.railHeight, 'data-mp-strailh', (mm) => run({ railHeight: mm }), { min: 300 }));
    const wl = el('input', { type: 'checkbox', checked: !!st.well, 'data-mp-stwell': '' });
    wl.addEventListener('change', () => run({ well: wl.checked }));
    kit.field(t('res.st.well'), el('label', {}, wl, ' ' + t('res.st.well.on')));
    const Lt = st.layout;
    if (Lt) {
      kit.rows.push(el('dt', {}, t('res.st.risers')), el('dd', { 'data-mp-strisers': '' }, t('res.st.risers.v', { n: Lt.n, r: L(Lt.riser) })), el('dt', {}, t('res.st.treads')), el('dd', {}, t('res.st.risers.v', { n: Lt.treads, r: L(Lt.tread) })));
      const sp = st.kind === 'spiral';   // 0.6 round 2: a spiral stair's labelled defaults are its own
      const bad = Object.entries(Lt.checks).filter(([, ok]) => !ok).map(([k2]) => t((sp ? 'comforts.st.check.' : 'res.st.check.') + k2));
      const packLine = sp ? null : regsStairLine(st, Lt);   // 0.8 REG.1: worded from the active pack's own numbers
      kit.rows.push(el('dt', { className: 'bc-mp-wide' }, ''), el('dd', { className: 'bc-mp-wide bc-sub', 'data-mp-stchecks': '' }, packLine || (bad.length ? t('res.st.checks.bad', { list: bad.join(', ') }) : t(sp ? 'comforts.st.checks.ok' : 'res.st.checks.ok'))));
    }
    return { title: t('res.stair') };
  }
  function railProps(items, kit) {
    if (items.length !== 1) return null;
    const r = R.rails.find((x) => x.guid === items[0].guid);
    if (!r) return null;
    const run = (ch) => ctx.A.commit(changeRailing(r.guid, ch), kit.one(t('res.rail.guard')));
    kit.field(t('res.rl.kind'), kit.select([['guard', t('res.rail.guard')], ['handrail', t('res.rail.handrail')]], r.kind, 'data-mp-rlkind', (v) => run({ kind: v })));
    kit.field(t('res.rl.height'), kit.lenInput(r.height, 'data-mp-rlheight', (mm) => run({ height: mm }), { min: 300 }));
    kit.field(t('res.rl.base'), kit.lenInput(r.base, 'data-mp-rlbase', (mm) => run({ base: mm }), { any: true }));
    const parts = railingParts(r.points.map(([x, y]) => [x, y, r.base]), { height: r.height });
    kit.rows.push(el('dt', {}, t('res.rl.length')), el('dd', {}, L(parts.length)), el('dt', {}, t('res.rl.balusters')), el('dd', { 'data-mp-rlbal': '' }, String(parts.balusters.length)));
    return { title: t(r.kind === 'handrail' ? 'res.rail.handrail' : 'res.rail.guard') };
  }

  return { stairSpecAt, packStair, stairScene, bandOf, stairOverlay, fillFenceTypes, useFenceType, finishRailing, regsTag, stairProps, railProps };
}
