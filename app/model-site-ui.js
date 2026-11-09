/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-site-ui.js — the spatial structure as tools on the plan (0.6 DF.20, session `bim-draw`), through model-ui.js `extend()`:
 *   Site  [data-mtool="site"]   click the corners of the site (snapping like the Wall tool), finish on the first corner, by
 *                               double-click or Enter: the site's outline (a site is set up above the building when the file
 *                               has none). The row places the building on the site: X, Y, Turn ([data-site-bx|by|bang]) or
 *                               "Place the building by a click" [data-site-place] (the click is where its origin goes).
 *   Add levels…  [data-lv-addmany] under the Levels panel → a dialog [data-lv-dialog]: levels at these heights (above the
 *                               lowest level), or the building's height split into equal levels.
 * Every level's plan shows the site outline (a property line). Every Draw tool works on the level chosen in the plan's level
 * list. IFC: model-site.js. Test hook: window.bimcraftSite = { state }.
 */
import { readSite, siteToPlan, planToSite, setSiteOutline, placeBuilding, addLevels, splitLevels } from './model-site.js';
import { polyProblem } from './model-floors.js';
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen, fmtArea } from './model-units.js';
import { el } from './ui-util.js';

export function mountSite(modelUi) {
  const R = { site: null, plan: [], pts: [], hover: null, placing: false };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const L = (mm) => fmtLen(mm, A.units());
  const area = (p) => { let s = 0; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; s += a[0] * b[1] - a[1] * b[0]; } return Math.abs(s / 2); };
  const levelGuid = () => A.S.data.levels.find((l) => l.id === A.S.level)?.guid;
  const hint = (key) => { const h = A.root.querySelector('[data-model-hint]'); if (h) h.textContent = t(key); };
  const hintNow = () => hint(R.placing ? 'model.hint.siteplace' : 'model.hint.site');
  function read() {
    if (!A.ed() || !A.S.level) { R.site = null; R.plan = []; return; }
    try { const w = W(); R.site = readSite(w); R.plan = R.site?.points.length ? siteToPlan(w, A.S.level, R.site.points) : []; } catch (e) { R.site = null; R.plan = []; }
  }
  const at = (p, e) => A.snapFrom(p, e, R.pts.length ? R.pts[R.pts.length - 1] : null).p;
  function finish() {
    const pts = R.pts.slice(); R.pts = [];
    if (pts.length < 3) { hintNow(); return; }
    if (polyProblem(pts)) { A.host.status(t('model.err.site.shape'), true); hintNow(); return; }
    A.commit(setSiteOutline({ storey: levelGuid(), points: pts }), { label: t('model.site'), verb: t('model.verb.drew') });
  }
  function bindRows() {
    const root = A.root;
    const bx = root.querySelector('[data-site-bx]');
    if (bx && !bx.dataset.bound) {
      bx.dataset.bound = '1';
      const go = () => {
        const x = parseLen(root.querySelector('[data-site-bx]').value, A.units()), y = parseLen(root.querySelector('[data-site-by]').value, A.units()), a = Number(root.querySelector('[data-site-bang]').value);
        if (![x, y, a].every(Number.isFinite)) { A.host.status(t('model.err.length'), true); bindRows(); return; }
        A.commit(placeBuilding({ at: [x, y], angle: a }), { label: t('model.site.building'), verb: t('model.verb.moved') });
      };
      for (const sel of ['[data-site-bx]', '[data-site-by]', '[data-site-bang]']) root.querySelector(sel)?.addEventListener('change', go);
      root.querySelector('[data-site-place]')?.addEventListener('click', () => { R.placing = true; R.pts = []; hintNow(); });
    }
    const b = R.site?.building;
    const set = (sel, v) => { const i = root.querySelector(sel); if (i && document.activeElement !== i) i.value = v; };
    if (b) { set('[data-site-bx]', L(b.at[0])); set('[data-site-by]', L(b.at[1])); set('[data-site-bang]', String(Math.round(b.angle * 100) / 100)); }
    const ar = root.querySelector('[data-site-area]');
    if (ar) ar.textContent = R.site?.points.length ? t('model.site.area', { a: fmtArea(area(R.site.points), A.units()) }) : t('model.site.none');
  }

  // ---- Add levels… ----
  function openLevels() {
    const u = A.units(), Ls = A.S.data.levels, top = Ls[Ls.length - 1], base = Ls[0]?.elevation || 0;
    const field = (label, input) => el('label', { className: 'bc-dlg-field' }, el('span', {}, label), input);
    const mode = el('select', { className: 'select-cc', 'data-lvd-mode': '' }, el('option', { value: 'at' }, t('model.lvd.at')), el('option', { value: 'split' }, t('model.lvd.split')));
    const heights = el('input', { type: 'text', className: 'bc-input', 'data-lvd-heights': '', value: top ? [1, 2].map((k) => L(top.elevation - base + top.height * k)).join(', ') : '' });
    const total = el('input', { type: 'text', className: 'bc-input', 'data-lvd-total': '', value: L(top ? top.elevation - base + top.height : 9000) });
    const count = el('input', { type: 'number', className: 'bc-input', 'data-lvd-count': '', value: String(Math.max(Ls.length, 2)), min: '1', max: '200', step: '1' });
    const atBox = el('div', {}, field(t('model.lvd.heights'), heights), el('p', { className: 'bc-muted' }, t('model.lvd.heights.note')));
    const splitBox = el('div', { hidden: true }, field(t('model.lvd.total'), total), field(t('model.lvd.count'), count), el('p', { className: 'bc-muted' }, t('model.lvd.split.note')));
    mode.addEventListener('change', () => { atBox.hidden = mode.value !== 'at'; splitBox.hidden = mode.value !== 'split'; });
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-lvd-h', 'data-lv-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-lvd-h' }, t('model.lvd.title')),
        field(t('model.lvd.how'), mode), atBox, splitBox, err,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-lvd-ok': '' }, t('model.lvd.ok')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      if (mode.value === 'at') {
        const list = heights.value.split(/[,;]+/).map((x) => x.trim()).filter(Boolean).map((x) => parseLen(x, u));
        if (!list.length || !list.every((v) => Number.isFinite(v) && v >= -100000)) { e.preventDefault(); err.textContent = t('model.lvd.bad'); return; }
        A.commit(addLevels({ elevations: list }), { label: t('model.lvd.levels', { n: list.length }), verb: t('model.verb.added') });
      } else {
        const T = parseLen(total.value, u), n = Math.floor(Number(count.value));
        if (!(T >= 1000 * n) || !(n >= 1 && n <= 200)) { e.preventDefault(); err.textContent = t('model.err.lv.split'); return; }
        A.commit(splitLevels({ total: T, count: n }), { label: t('model.lvd.levels', { n }), verb: t('model.verb.changed') });
      }
    });
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
  }

  A = modelUi.extend({
    tools: ['site'],
    hint: () => 'model.hint.site',
    typed: () => false,
    move(p, e) { R.hover = R.placing ? p : at(p, e); },
    click(p, e) {
      if (R.placing) {
        R.placing = false; hintNow();
        const sp = planToSite(W(), A.S.level, [p])[0], b = R.site?.building;
        A.commit(placeBuilding({ at: sp, angle: b ? b.angle : 0 }), { label: t('model.site.building'), verb: t('model.verb.moved') });
        return;
      }
      const q = at(p, e);
      if (R.pts.length >= 3 && Math.hypot(q[0] - R.pts[0][0], q[1] - R.pts[0][1]) < A.pv().pxToMm(8)) { finish(); return; }
      R.pts.push(q);
    },
    dbl() { finish(); },
    key(e) {
      if (A.S.tool !== 'site') return false;
      if (e.key === 'Enter' && R.pts.length) { finish(); return true; }
      if (e.key === 'Backspace' && R.pts.length) { R.pts.pop(); return true; }
      return false;
    },
    escape() { if (A.S.tool !== 'site' || !(R.pts.length || R.placing)) return false; R.pts = []; R.placing = false; hintNow(); return true; },
    toolChanged() { R.pts = []; R.placing = false; R.hover = null; bindRows(); const m = A.root.querySelector('[data-res-tools]'); if (m?.open) m.open = false; },
    refresh() { read(); bindRows(); },
    scene(sc) {
      if (!R.plan.length) return;
      const p = R.plan, dashed = p.map((q, i) => { const r = p[(i + 1) % p.length]; return [q[0], q[1], r[0], r[1]]; });
      sc.symbols.push({ key: -1, dashed, lines: [] });   // the property line (not picked: key -1)
    },
    overlay(o) {
      if (A.S.tool !== 'site') return;
      if (R.placing && R.hover) { o.points.push(R.hover); o.hud = { p: R.hover, text: t('model.hud.siteplace') }; return; }
      if (R.hover) o.snap = { p: R.hover, kind: 'free' };
      if (R.pts.length) {
        const pts = R.hover ? [...R.pts, R.hover] : R.pts;
        for (let i = 0; i + 1 < pts.length; i++) o.dashed.push([pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]]);
        for (const q of R.pts) o.points.push(q);
        if (R.hover) o.hud = { p: R.hover, text: L(Math.hypot(R.hover[0] - R.pts[R.pts.length - 1][0], R.hover[1] - R.pts[R.pts.length - 1][1])) + (pts.length >= 3 ? '\n' + fmtArea(area(pts), A.units()) : '') };
      }
    },
    levelButtons() {
      const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lv-addmany': '' }, el('i', { className: 'bi bi-layers', 'aria-hidden': 'true' }), ' ' + t('model.lvd.open'));
      b.addEventListener('click', () => openLevels());
      return [b];
    },
  });
  if (typeof window !== 'undefined') window.bimcraftSite = { state: R };   // for tests
  return { state: R };
}
