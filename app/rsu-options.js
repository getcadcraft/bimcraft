/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rsu-options.js: res-ui.js's 2 bindings for this topic, moved out of mountRes() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountRsuOptions(ctx) is called once by mountRes(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountRes() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { parsePitch, fmtPitch, parseLen, isMetric } from './model-units.js';
import { el } from './ui-util.js';
import { activeTji } from './tji-table.js';
import { RULES as STEEL_RULES } from './steelstair/steelstair.js';
import { STAIR_DEFAULTS, SPIRAL_DEFAULTS } from './res-stair.js';
import { RAIL_DEFAULTS } from './res-railing.js';
import { loadLibraryType, typeFromFile } from './fence/index.js';

export function mountRsuOptions(ctx) {
  const { R, t, L, fillFenceTypes, useFenceType, frameAllWalls, applyFrameVis, loadTjiFile, makeFromSpots, groundFromFile, exportLandXml } = ctx;

  // ---- options rows ----
  function bindRows() {
    const root = ctx.A.root;
    const pi = root.querySelector('[data-res-rppitch]'), bs = root.querySelector('[data-res-rpbase]');
    if (pi && !pi.dataset.bound) {
      pi.dataset.bound = '1';
      pi.addEventListener('change', () => { const d = parsePitch(pi.value); if (d >= 0 && d < 80) R.plane.pitch = d; else ctx.A.host.status(t('model.err.pitch'), true); pi.value = fmtPitch(R.plane.pitch, ctx.A.units()); });
      bs.addEventListener('change', () => { const v = bs.value.trim(); if (!v) { R.plane.base = null; return; } const mm = parseLen(v, ctx.A.units()); if (Number.isFinite(mm)) R.plane.base = mm; else { ctx.A.host.status(t('model.err.length'), true); } bs.value = R.plane.base === null ? '' : L(R.plane.base); });
    }
    const fsp = root.querySelector('[data-res-frsp]');
    if (fsp && !fsp.dataset.bound) {
      fsp.dataset.bound = '1';
      fsp.addEventListener('change', () => { R.frame.spacing = Number(fsp.value); });
      root.querySelector('[data-res-frcorner]')?.addEventListener('change', (e) => { R.frame.corners = e.target.value; });
      root.querySelector('[data-res-frroof]')?.addEventListener('change', (e) => { R.frame.roofMode = e.target.value; });
      root.querySelector('[data-res-frfloor]')?.addEventListener('change', (e) => { R.frame.floorMode = e.target.value; ctx.tjiBar?.(); });
      // GH.3-E: TJI has no built-in numbers, so the table is loaded here, before a TJI floor exists (Properties offers it too)
      const flab = root.querySelector('[data-res-frfloor]')?.closest('label');
      if (flab && !root.querySelector('[data-res-tjibar]')) {
        const inp = el('input', { type: 'file', accept: '.json,.csv,application/json,text/csv', hidden: true, 'data-res-tjifile': '' });
        const nm = el('span', { className: 'bc-sub', 'data-res-tjiname': '' });
        const btn = el('button', { type: 'button', className: 'bc-btn', 'data-res-tjiload': '' }, t('tji.load'));
        const bar = el('label', { 'data-res-tjibar': '', hidden: true }, nm, ' ', btn, inp);
        flab.after(bar);
        btn.addEventListener('click', () => inp.click());
        inp.addEventListener('change', () => { if (inp.files[0]) loadTjiFile(inp.files[0], () => { ctx.tjiBar(); }); });
        ctx.tjiBar = () => {
          bar.hidden = R.frame.floorMode !== 'tji';
          const a = activeTji();
          nm.textContent = a ? a.table.id + ' (' + a.table.edition + ')' : t('tji.help');
          btn.textContent = t(a ? 'tji.replace' : 'tji.load');
        };
        ctx.tjiBar();
      }
      root.querySelector('[data-res-frdir]')?.addEventListener('change', (e) => { R.frame.floorDir = e.target.value; });
      root.querySelector('[data-res-frblock]')?.addEventListener('change', (e) => { R.frame.blocking = e.target.checked; });
      root.querySelector('[data-res-frall]')?.addEventListener('click', () => frameAllWalls());
      root.querySelector('[data-res-frshow]')?.addEventListener('click', (e) => { R.frame.show = !R.frame.show; e.currentTarget.setAttribute('aria-pressed', R.frame.show ? 'true' : 'false'); applyFrameVis(); });
      root.querySelector('[data-res-frsee]')?.addEventListener('click', (e) => { R.frame.see = !R.frame.see; e.currentTarget.setAttribute('aria-pressed', R.frame.see ? 'true' : 'false'); applyFrameVis(); });
    }
    if (fsp) {
      const mm = isMetric(ctx.A.units());
      const opts = mm ? [[400, '400 mm'], [600, '600 mm']] : [[406.4, '16" o.c.'], [609.6, '24" o.c.']];   // i18n-ignore: lengths
      if (fsp.dataset.units !== ctx.A.units()) { fsp.dataset.units = ctx.A.units(); fsp.replaceChildren(...opts.map(([v, l]) => el('option', { value: String(v) }, l))); R.frame.spacing = opts[0][0]; }
      fsp.value = String(opts.reduce((b, o) => (Math.abs(o[0] - R.frame.spacing) < Math.abs(b[0] - R.frame.spacing) ? o : b))[0]);
    }
    const tz = root.querySelector('[data-res-trz]');
    if (tz && !tz.dataset.bound) {
      tz.dataset.bound = '1';
      tz.addEventListener('change', () => { const mm = parseLen(tz.value, ctx.A.units()); if (Number.isFinite(mm)) R.tr.z = mm; else ctx.A.host.status(t('model.err.length'), true); tz.value = L(R.tr.z); });
      root.querySelector('[data-res-trunit]')?.addEventListener('change', (e) => { R.tr.unit = e.target.value; });
      root.querySelector('[data-res-trmake]')?.addEventListener('click', () => makeFromSpots());
      root.querySelector('[data-res-trclear]')?.addEventListener('click', () => { R.tr.spots = []; ctx.A.drawOverlay(); });
      const fi = root.querySelector('[data-res-trfile]');
      fi?.addEventListener('change', () => { const f = fi.files?.[0]; fi.value = ''; if (f) groundFromFile(f); });
      root.querySelector('[data-res-trxml]')?.addEventListener('click', () => exportLandXml());
      const pm = (sel, key, min) => { const i = root.querySelector(sel); i?.addEventListener('change', () => { const mm = parseLen(i.value, ctx.A.units()); if (mm >= min) R.tr.pad[key] = mm; else ctx.A.host.status(t('model.err.length'), true); i.value = L(R.tr.pad[key]); }); };
      pm('[data-res-padmargin]', 'margin', 0); pm('[data-res-paddepth]', 'depth', -2000);
      root.querySelector('[data-res-padslope]')?.addEventListener('change', (e) => { const v = Number(String(e.target.value).replace(/:1$/, '')); if (v >= 0.1 && v <= 100) R.tr.pad.slope = v; else ctx.A.host.status(t('res.err.padslope'), true); e.target.value = R.tr.pad.slope + ':1'; });
      root.querySelector('[data-res-hdkind]')?.addEventListener('change', (e) => { R.tr.hard.kind = e.target.value; });
    }
    if (tz && document.activeElement !== tz) tz.value = L(R.tr.z);
    for (const [sel, v] of [['[data-res-padmargin]', L(R.tr.pad.margin)], ['[data-res-paddepth]', L(R.tr.pad.depth)], ['[data-res-padslope]', R.tr.pad.slope + ':1']]) { const i = root.querySelector(sel); if (i && document.activeElement !== i) i.value = v; }
    const sk = root.querySelector('[data-res-stkind]');
    if (sk && !sk.dataset.bound) {
      sk.dataset.bound = '1';
      const pick = (sel, key) => root.querySelector(sel)?.addEventListener('change', (e) => { R.stair[key] = e.target.value; ctx.A.drawOverlay(); });
      pick('[data-res-stkind]', 'kind'); pick('[data-res-stturn]', 'turn'); pick('[data-res-strail]', 'railings');
      // 0.11 SU.1814c: the Steel kind's rule set (lib/steelstair RULES, named as the lib names them) and tread type
      const sr = root.querySelector('[data-res-strule]');
      if (sr) { sr.replaceChildren(...Object.values(STEEL_RULES).map((ru) => Object.assign(document.createElement('option'), { value: ru.id, textContent: ru.name, selected: ru.id === R.stair.rule }))); }
      pick('[data-res-strule]', 'rule'); pick('[data-res-sttread]', 'treadType');
      const steelRow = () => { const g = root.querySelector('[data-res-steel]'); if (g) g.hidden = R.stair.kind !== 'steel'; for (const sel of ['[data-res-stturn]']) { const x = root.querySelector(sel)?.closest('label'); if (x) x.hidden = R.stair.kind === 'steel'; } };
      root.querySelector('[data-res-stkind]')?.addEventListener('change', steelRow); steelRow();
      const sw = root.querySelector('[data-res-stwidth]');
      // 0.6 round 2: a spiral stair starts 30" wide (its own labelled default) unless a width was typed
      root.querySelector('[data-res-stkind]')?.addEventListener('change', (e) => {
        if (e.target.value === 'spiral' && R.stair.width === STAIR_DEFAULTS.width) R.stair.width = SPIRAL_DEFAULTS.width;
        else if (e.target.value !== 'spiral' && R.stair.width === SPIRAL_DEFAULTS.width) R.stair.width = STAIR_DEFAULTS.width;
        if (sw) sw.value = L(R.stair.width);
        if (ctx.A.S.tool === 'stair' && ctx.A.root.querySelector('[data-model-hint]')) ctx.A.root.querySelector('[data-model-hint]').textContent = t(e.target.value === 'spiral' ? 'comforts.hint.spiral' : 'res.hint.stair');
      });
      sw?.addEventListener('change', () => { const mm = parseLen(sw.value, ctx.A.units()); if (mm >= 500) R.stair.width = mm; else ctx.A.host.status(t('res.err.stairwidth'), true); sw.value = L(R.stair.width); ctx.A.drawOverlay(); });
      root.querySelector('[data-res-rlkind]')?.addEventListener('change', (e) => { R.rail.kind = e.target.value; R.rail.height = e.target.value === 'handrail' ? 36 * 25.4 : e.target.value === 'fence' ? 1800 : RAIL_DEFAULTS.height; const rh = root.querySelector('[data-res-rlheight]'); if (rh) rh.value = L(R.rail.height); fenceRow(); });
      // 0.11 SU.1814b: the Fence kind's style and Library fence type (the list is asked of the Library the first time Fence is chosen)
      const fenceRow = () => { const g = root.querySelector('[data-res-fence]'); if (g) g.hidden = R.rail.kind !== 'fence'; if (R.rail.kind === 'fence' && !R.rail.types) fillFenceTypes(); };
      root.querySelector('[data-res-flstyle]')?.addEventListener('change', (e) => { R.rail.style = e.target.value; });
      const ft = root.querySelector('[data-res-fltype]'), ff = root.querySelector('[data-res-flfile]');
      ft?.addEventListener('change', async () => {
        const v = ft.value;
        if (v === '') { R.rail.item = null; return; }
        if (v === '#file') { ft.value = R.rail.item ? 'x:' + (R.rail.item.uuid || '') : ''; ff?.click(); return; }
        const row = (R.rail.types || []).find((x) => 'u:' + x.uuid === v);
        const it = row ? await loadLibraryType(row) : null;
        if (!it) { ctx.A.host.status(t('fence.err.item'), true); ft.value = ''; R.rail.item = null; return; }
        useFenceType(it);
      });
      ff?.addEventListener('change', async () => {
        const f = ff.files?.[0]; ff.value = '';
        if (!f) return;
        const it = typeFromFile(await f.text());
        if (!it) { ctx.A.host.status(t('fence.err.item'), true); return; }
        useFenceType(it, true);
      });
      fenceRow();
      const rh = root.querySelector('[data-res-rlheight]');
      rh?.addEventListener('change', () => { const mm = parseLen(rh.value, ctx.A.units()); if (mm >= 300) R.rail.height = mm; else ctx.A.host.status(t('model.err.length'), true); rh.value = L(R.rail.height); });
    }
    const swi = root.querySelector('[data-res-stwidth]'), rhi = root.querySelector('[data-res-rlheight]');
    if (swi && document.activeElement !== swi) swi.value = L(R.stair.width);
    if (rhi && document.activeElement !== rhi) rhi.value = L(R.rail.height);
    const co = root.querySelector('[data-res-ctover]'), ct = root.querySelector('[data-res-ctthick]');
    if (co && !co.dataset.bound) {
      co.dataset.bound = '1';
      const len = (input, key, min) => input.addEventListener('change', () => { const mm = parseLen(input.value, ctx.A.units()); if (mm >= min) R.counter[key] = mm; else ctx.A.host.status(t('model.err.length'), true); input.value = L(R.counter[key]); });
      len(co, 'overhang', 0); len(ct, 'thickness', 5);
    }
    if (co && document.activeElement !== co) co.value = L(R.counter.overhang);
    if (ct && document.activeElement !== ct) ct.value = L(R.counter.thickness);
    const fk = root.querySelector('[data-res-fdkind]');
    if (fk && !fk.dataset.bound) { fk.dataset.bound = '1'; fk.addEventListener('change', () => { R.found.kind = fk.value; ctx.A.drawOverlay(); }); }
    if (pi && document.activeElement !== pi) pi.value = fmtPitch(R.plane.pitch, ctx.A.units());
    if (bs && document.activeElement !== bs) { bs.value = R.plane.base === null ? '' : L(R.plane.base); bs.placeholder = t('res.rp.base.auto'); }
  }

  /** After a reload: the element (found again by GlobalId in `list()`) picked by its first part — parts are made again. */
  const again = (list, guid) => () => { const x = list().find((y) => y.guid === guid); return x?.parts.length ? [ctx.A.kb() + x.parts[0]] : null; };

  return { bindRows, again };
}
