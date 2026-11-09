/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pens-ui.js — pen and line overrides per view (0.8 SU.1055, session `bim-08`), through model-ui.js `extend()`:
 *   Pens  [data-mtool="pens"]  "For": all walls / doors / windows, every other category (slabs, roofs, columns, stairs, furniture, …,
 *         drafting, dimensions; added here to [data-pen-scope]), the type of the picked element, or the picked elements; a pen weight, a
 *         line (solid, dashed, dotted) and a colour; Apply adds the override to THE VIEW SHOWN, Clear removes them.
 * 0.9 D8.12-B (session bim-views-09): the overrides are kept in the IFC with the view (pens.js CadCraft_ViewPens, by view key: a plan,
 * a ceiling plan, a callout, a duplicated view; a linked copy shares its source's), one undo step each. An older browser-only set
 * (localStorage `bimcraft.pens`, a level's plan) is shown with "Keep these in the file" [data-pen-keep] until it is moved.
 *   Print [data-pen-print] "As shown" | "Through a pen table" (print-style.js; '' = the working style's default), the table
 *   [data-pen-table] (colour / monochrome / grayscale / the model's own), Edit… [data-pen-tableedit] → dialog [data-pt-dialog] (a row per
 *   colour BimCraft draws with: printed colour, weight, screening), Import… a CadCraft plot style file [data-pt-import], Export [data-pt-export].
 * Walls get a second outline in the pen (model-planview.js); doors and windows take the weight and colour; cut elements, drafting and
 * dimensions their pen. "Show pen colours in 3D" [data-pen-3d] paints the colour pens on the model in the 3D view (pens.js penColors).
 * Test hook: window.bimcraftPens = { state, add, clear, list, paint3d, keep, print }.
 */
import { cleanOverride, penFor, penColors, readViewPens, setViewPens, PEN_CLASSES } from './pens.js';
import { readPrintStyle, setPrintStyle, modeIn, setActive, tableItems, PEN_ROWS } from './print-style.js';
import { builtinTable, exportTable, readTableFile, setPens, penOf, LINEWEIGHTS, BUILTIN } from './plotstyle/plotstyle.js';
import { readStyle } from './work-style.js';
import { composeSheet, setPdf, PAPERS } from './res-sheets.js';
import { ModelWriter } from './model-write.js';
import { el } from './ui-util.js';

const KEY = 'bimcraft.pens';
const load = () => { try { const o = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; return o && typeof o === 'object' ? o : {}; } catch { return {}; } };
const save = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch { /* private window: this session only */ } };
/** The view-range category words BimCraft already has for these IFC classes (views-ui.js CATEGORIES); new ones under model.pens.cat.*. */
const CAT_WORD = { IfcSlab: 'model.pv.cat.slabs', IfcRoof: 'model.pv.cat.roofs', IfcColumn: 'model.pv.cat.columns', IfcBeam: 'model.pv.cat.beams', IfcStair: 'model.pv.cat.stairs', IfcRamp: 'model.pv.cat.ramps',
  IfcRailing: 'model.pv.cat.railings', IfcFurniture: 'model.pv.cat.furniture', IfcFurnishingElement: 'model.pv.cat.furnishing', IfcFlowTerminal: 'model.pv.cat.fixtures', IfcLightFixture: 'model.pv.cat.lights',
  IfcPipeSegment: 'model.pv.cat.pipes', IfcDuctSegment: 'model.pv.cat.ducts', IfcSpace: 'model.pv.cat.rooms' };

const CSS = `.bc-pt-table { border-collapse: collapse; margin: .5rem 0; font-size: var(--fs-sm, .875rem); }
.bc-pt-table th, .bc-pt-table td { text-align: left; padding: .2rem .5rem; border-bottom: var(--pen-1, 1px) solid var(--line); }
.bc-pt-sw { display: inline-block; width: .9rem; height: .9rem; border: 1px solid var(--line); vertical-align: middle; }
.bc-pt-table input[type=color] { width: 2.2rem; height: 1.6rem; padding: 0; border: 0; background: none; vertical-align: middle; }`;
export function mountPens(modelUi) {
  if (typeof document !== 'undefined' && !document.getElementById('bc-pt-css')) { const st = document.createElement('style'); st.id = 'bc-pt-css'; st.textContent = CSS; document.head.append(st); }
  const R = { legacy: load(), file: new Map(), print: { mode: '', table: null, name: '' }, scope: 'wall', weight: 2.5, dash: 'solid', color: '', show3d: false, painted: false };
  let A = null;
  const t = (...a) => A.t(...a);
  const W = () => { const ed = A.ed(); return ed ? new ModelWriter(ed.W, ed.api, ed.mid) : null; };
  const levelGuid = () => (A.S.data?.levels || []).find((l) => l.id === A.S.level)?.guid;
  /** The view whose pens are shown and changed: views-ui.js says (a linked copy → its source); else this level's plan. */
  const viewKey = () => globalThis.bimcraftViews?.api?.viewKey?.() || (levelGuid() ? (A.S.kind === 'rcp' ? 'rcp:' : 'plan:') + levelGuid() : null);
  const legacyFor = (key) => (/^plan:/.test(key || '') && !R.file.has(key) ? (R.legacy[key.slice(5)] || []).map(cleanOverride).filter(Boolean) : []);
  /** The file's pens, read again whenever the model has changed (a scene can be built before this extension's refresh runs). */
  const fresh = () => { const d = A.S.data; if (R.seen !== d) { R.seen = d; readFile(); } };
  const list = () => { fresh(); const k = viewKey(); return k ? (R.file.get(k) || legacyFor(k)) : []; };
  function readFile() {
    const w = W();
    try { R.file = w ? readViewPens(w) : new Map(); } catch (e) { R.file = new Map(); }
    try { R.print = w ? readPrintStyle(w) : { mode: '', table: null, name: '' }; } catch (e) { R.print = { mode: '', table: null, name: '' }; }
    setActive(printMode() === 'table' ? currentTable() : null);
  }
  const printMode = () => { fresh(); return modeIn(R.print.mode, readStyle().print); };
  const currentTable = () => R.print.table || builtinTable('monochrome');
  /** Change the view's pens: one undo step in the file; the older browser copy of this plan's is dropped once it is in the file. */
  function put(arr) {
    const k = viewKey();
    if (!k || !A.ed()) { A.host.status(t('model.needs.ifc'), true); return false; }
    let why = null;
    A.commit(setViewPens(k, arr), { label: t('model.pens.what'), verb: t('model.verb.changed'), onError: (e, w) => { why = w; } });
    if (why) { A.host.status(why, true); return false; }
    if (/^plan:/.test(k) && R.legacy[k.slice(5)]) { delete R.legacy[k.slice(5)]; save(R.legacy); }
    readFile(); fill(); paint3d();
    return true;
  }
  function keep() { const l = list(); if (!l.length) return false; const ok = put(l); if (ok) A.host.status(t('model.pens.kept', { n: l.length })); return ok; }

  /** The scope the "For" list says: a category, or the picked elements' type, or the picked elements themselves. */
  function scopesFor(choice) {
    if (['wall', 'door', 'window', 'drafting', 'dimension', ...PEN_CLASSES].includes(choice)) return [{ by: 'category', value: choice }];
    const p = A.pickedElements();
    const D = A.S.data || {};
    const guids = [...p.walls, ...p.openings];
    if (choice === 'element') return guids.map((g) => ({ by: 'element', value: g }));
    const types = new Set(guids.map((g) => (D.walls || []).find((w) => w.guid === g)?.typeKey || (D.openings || []).find((o) => o.guid === g)?.typeKey).filter(Boolean));
    return [...types].map((v) => ({ by: 'type', value: v }));
  }
  function add() {
    const scopes = scopesFor(R.scope);
    if (!scopes.length) { A.host.status(t(['type', 'element'].includes(R.scope) ? 'model.pens.pick' : 'model.pens.none'), true); return false; }
    const next = list().filter((o) => !scopes.some((s) => s.by === o.scope.by && s.value === o.scope.value));
    for (const s of scopes) { const o = cleanOverride({ id: Math.random().toString(36).slice(2, 8), scope: s, weight: R.weight, dash: R.dash, color: R.color }); if (o) next.push(o); }
    if (!put(next)) return false;
    A.host.status(t('model.pens.done', { n: scopes.length }));
    return true;
  }
  /** 0.8 SU.1055 round 5: the pens' colours on the model in the 3D view (viewer.setColors); only each level's floor plan pens. */
  function paint3d() {
    const v = A.host.viewer?.();
    if (!v?.setColors) return 0;
    if (!R.show3d) { if (R.painted) { v.setColors(null); R.painted = false; } return 0; }
    const hex = (tok) => { const c = getComputedStyle(document.documentElement).getPropertyValue(tok).trim(); return c || null; };
    const all = {};
    for (const l of A.S.data?.levels || []) { const k = 'plan:' + l.guid; const ls = R.file.get(k) || legacyFor(k); if (ls.length) all[l.guid] = ls; }
    const map = new Map();
    for (const [k, tok] of penColors(all, A.S.data, (id) => A.kb() + id)) { const c = hex(tok); if (c) map.set(k, c); }
    v.setColors(map.size ? map : null);
    R.painted = map.size > 0;
    return map.size;
  }
  function fill() {
    const q = (s) => A.root.querySelector(s);
    const n = q('[data-pen-count]');
    const k = viewKey(), legacy = k && !R.file.has(k) && legacyFor(k).length;
    if (n) n.textContent = t(legacy ? 'model.pens.count.browser' : 'model.pens.count', { n: list().length });
    const kp = q('[data-pen-keep]');
    if (kp) kp.hidden = !legacy;
    const pm = q('[data-pen-print]');
    if (pm) pm.value = R.print.mode || '';
    const tb = q('[data-pen-table]');
    if (tb) {
      const own = R.print.table && !BUILTIN.includes(R.print.table.name) ? R.print.table.name : null;
      tb.replaceChildren(...BUILTIN.map((b) => el('option', { value: b }, t('model.pens.pt.' + b))), ...(own ? [el('option', { value: '=' + own }, own)] : []));
      tb.value = own ? '=' + own : (R.print.table?.name || 'monochrome');
      tb.disabled = printMode() !== 'table';
    }
    const hint = q('[data-pen-printnote]');
    if (hint) hint.textContent = R.print.mode ? '' : t('model.pens.print.default', { what: t(printMode() === 'table' ? 'model.pens.print.table' : 'model.pens.print.shown') });
  }
  /** The extra controls of the Pens row (0.9): more categories in "For", Keep these in the file, the print style. */
  function extend(q) {
    const sc = q('[data-pen-scope]');
    if (sc && !sc.querySelector('option[value="drafting"]')) {
      const after = sc.querySelector('option[value="window"]');
      const opts = [...PEN_CLASSES.map((c) => el('option', { value: c }, t('model.pens.all', { what: t(CAT_WORD[c] || 'model.pens.cat.' + c.slice(3).toLowerCase()) }))),
        el('option', { value: 'drafting' }, t('model.pens.drafting')), el('option', { value: 'dimension' }, t('model.pens.dimensions'))];
      after.after(...opts);
    }
    const row = q('[data-mopts="pens"]');
    if (row && !row.querySelector('[data-pen-keep]')) {
      const keepB = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pen-keep': '', hidden: true, title: t('model.pens.keep.title'), onClick: () => keep() }, t('model.pens.keep'));
      const pm = el('select', { className: 'bc-mb-select', 'data-pen-print': '', 'aria-label': t('model.pens.print') },
        el('option', { value: '' }, t('model.pens.print.auto')), el('option', { value: 'shown' }, t('model.pens.print.shown')), el('option', { value: 'table' }, t('model.pens.print.table')));
      pm.addEventListener('change', () => setPrint({ mode: pm.value }));
      const tb = el('select', { className: 'bc-mb-select', 'data-pen-table': '', 'aria-label': t('model.pens.pt') });
      tb.addEventListener('change', () => { if (!tb.value.startsWith('=')) setPrint({ table: tb.value }); });
      const ed = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pen-tableedit': '', onClick: () => editTable() }, t('model.pens.pt.edit'));
      row.querySelector('[data-pen-count]')?.before(keepB, el('label', {}, el('span', {}, t('model.pens.print')), ' ', pm), tb, ed, el('span', { className: 'bc-sub', 'data-pen-printnote': '' }));
    }
  }
  function setPrint(ch) {
    if (!A.ed()) { A.host.status(t('model.needs.ifc'), true); return false; }
    let why = null;
    A.commit(setPrintStyle(ch), { label: t('model.pens.print'), verb: t('model.verb.changed'), onError: (e, w) => { why = w; } });
    if (why) { A.host.status(why, true); return false; }
    readFile(); fill();
    return true;
  }
  /** The pen table: one row per colour BimCraft draws with (CadCraft's pens by colour number). */
  function editTable() {
    let table = JSON.parse(JSON.stringify(R.print.table && !BUILTIN.includes(R.print.table.name) ? R.print.table : { name: t('model.pens.pt.newname'), description: '', pens: { ...(R.print.table?.pens || builtinTable('monochrome').pens) } }));
    delete table.builtin;
    const nm = el('input', { type: 'text', className: 'bc-input', 'data-pt-name': '', value: table.name, maxLength: 64 });
    const swatch = (tok) => el('span', { className: 'bc-pt-sw', style: 'background:var(' + tok + ')' });
    const body = el('tbody', {});
    const draw = () => body.replaceChildren(...PEN_ROWS.map((r) => {
      const p = penOf(table, r.aci);
      const col = el('input', { type: 'color', 'data-pt-color': r.token, value: p.color || (r.hex === 'ink' ? '#000000' : r.hex), 'aria-label': t('model.pens.pt.printed') });
      const asIs = el('input', { type: 'checkbox', 'data-pt-own': r.token }); asIs.checked = !p.color;
      const lw = el('select', { className: 'select-cc', 'data-pt-lw': r.token, 'aria-label': t('model.pens.pt.lw') }, el('option', { value: '' }, t('model.pens.pt.lw.own')), ...LINEWEIGHTS.filter((x) => x > 0).map((x) => el('option', { value: String(x) }, x + ' mm')));   // i18n-ignore: a unit
      lw.value = p.lw === null ? '' : String(p.lw);
      const scr = el('input', { type: 'number', className: 'bc-input bc-num', min: 0, max: 100, step: 5, 'data-pt-screen': r.token, value: p.screen, 'aria-label': t('model.pens.pt.screen') });
      const upd = () => { table = setPens(table, [r.aci], { color: asIs.checked ? null : col.value, lw: lw.value === '' ? null : Number(lw.value), screen: Math.max(0, Math.min(100, Number(scr.value) || 0)) }); };
      for (const x of [col, asIs, lw, scr]) x.addEventListener('change', upd);
      return el('tr', {}, el('td', {}, swatch(r.token), ' ', t('model.pens.c.' + (r.token === '--ink' ? 'ink' : r.token === '--ink-2' ? 'grey' : r.token.slice(8)))), el('td', {}, el('label', {}, asIs, ' ', t('model.pens.pt.asdrawn')), ' ', col), el('td', {}, lw), el('td', {}, scr));
    }));
    draw();
    const file = el('input', { type: 'file', accept: '.json,application/json', hidden: true, 'data-pt-file': '' });
    file.addEventListener('change', async () => {
      const f = file.files[0]; if (!f) return;
      const r = readTableFile(await f.text());
      if (!r.ok) { err.textContent = t('model.pens.pt.bad', { why: r.error }); return; }
      table = r.table; nm.value = table.name; draw(); err.textContent = '';
    });
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const dlg = el('dialog', { className: 'bc-dialog', 'data-pt-dialog': '', 'aria-labelledby': 'bc-pt-h' },
      el('form', { method: 'dialog' }, el('h2', { className: 'bc-h', id: 'bc-pt-h' }, t('model.pens.pt.title')), el('p', { className: 'bc-muted' }, t('model.pens.pt.lede')),
        el('label', { className: 'bc-dlg-field' }, el('span', {}, t('model.pens.pt.name')), nm),
        el('table', { className: 'bc-pt-table' }, el('thead', {}, el('tr', {}, ...['model.pens.pt.colour', 'model.pens.pt.printed', 'model.pens.pt.lw', 'model.pens.pt.screen'].map((k) => el('th', {}, t(k))))), body),
        file, err,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-pt-ok': '' }, t('model.pens.pt.use')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pt-import': '', onClick: () => file.click() }, t('model.pens.pt.import')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pt-export': '', onClick: () => { try { table.name = nm.value.trim() || table.name; A.host.download(table.name + '.json', exportTable(table), 'application/json'); } catch (e) { err.textContent = t('model.pens.pt.bad', { why: e.message }); } } }, t('model.pens.pt.export')),   // i18n-ignore: a file name
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      table.name = nm.value.trim();
      if (!table.name || BUILTIN.includes(table.name.toLowerCase())) { e.preventDefault(); err.textContent = t('model.pens.pt.badname'); return; }
      if (!setPrint({ mode: 'table', table })) e.preventDefault();
    });
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
  }
  /** The plan Print when the model prints through a pen table: the plan on a sheet at its scale, every stroke through the table. */
  function printPlan(sc, o) {
    if (printMode() !== 'table') return null;
    const paper = PAPERS[o.paper] ? o.paper : 'letter', [pw, ph] = PAPERS[paper];
    const sheet = composeSheet({ number: '', title: o.title, views: [{ kind: 'plan', ref: 'p', x: pw / 2, y: ph / 2 + 6, ratio: o.scale || 0 }] }, { plans: [{ ref: 'p', title: o.title, scene: sc }] }, { paper, units: o.units, project: (o.lines || [])[0] || '', date: (o.lines || [])[2] || '' });
    sheet.items = tableItems(sheet.items, currentTable());
    const v = sheet.views[0];
    return { bytes: setPdf([sheet], { paper, title: o.title }), scale: { label: v?.label || '' }, missing: 0, images: 0 };
  }
  function bind() {
    const q = (s) => A.root.querySelector(s);
    const sc = q('[data-pen-scope]');
    if (!sc || sc.dataset.bound) return;
    sc.dataset.bound = '1';
    extend(q);
    for (const [sel, key, parse] of [['[data-pen-scope]', 'scope', String], ['[data-pen-weight]', 'weight', Number], ['[data-pen-dash]', 'dash', String], ['[data-pen-color]', 'color', String]]) {
      const f = q(sel); f.value = String(R[key]); f.addEventListener('change', () => { R[key] = parse(f.value); });
    }
    const c3 = q('[data-pen-3d]');
    if (c3) { c3.checked = R.show3d; c3.addEventListener('change', () => { R.show3d = c3.checked; const n = paint3d(); A.host.status(t(R.show3d ? (n ? 'model.pens.3d.on' : 'model.pens.3d.none') : 'model.pens.3d.off', { n })); }); }
    q('[data-pen-apply]').addEventListener('click', add);
    q('[data-pen-clear]').addEventListener('click', () => { if (put([])) A.host.status(t('model.pens.cleared')); });
  }
  const classOf = (key) => { const m = A.host.model?.(); return m?.classOf?.get(key - A.kb()) || ''; };

  A = modelUi.extend({
    tools: ['pens'],
    hint: () => 'model.hint.pens',
    typed: () => false,
    scene(scene) {
      const ov = list();
      if (!ov.length) return;
      const D = A.S.data || {};
      for (const w of scene.walls || []) {
        const src = (D.walls || []).find((x) => x.guid === w.guid);
        const pen = penFor(ov, { kind: 'wall', typeKey: src?.typeKey, guid: w.guid });
        if (pen) w.pen = pen;
      }
      for (const s of scene.symbols || []) {
        const src = (D.openings || []).find((x) => x.guid === s.guid);
        if (!src) continue;
        const pen = penFor(ov, { kind: src.kind === 'window' ? 'window' : 'door', typeKey: src.typeKey, guid: s.guid });
        if (pen) { if (pen.w) s.lw = pen.w; if (pen.color) s.color = pen.color; }
      }
      // 0.9 D8.12-B: every other category (cut elements by IFC class), the drafting and the dimensions of this view
      for (const c of scene.cut || []) { const pen = penFor(ov, { kind: '', cls: classOf(c.key), guid: null }); if (pen) c.pen = pen; }
      for (const d of scene.drafting || []) { const pen = penFor(ov, { kind: 'drafting', guid: d.guid }); if (pen) d.pen = pen; }
      for (const d of scene.dims || []) { const pen = penFor(ov, { kind: 'dimension', guid: null }); if (pen) d.pen = pen; }
    },
    printPlan,
    toolChanged(name) { if (name === 'pens') { bind(); fill(); } },
    refresh() { R.seen = A.S.data; readFile(); bind(); fill(); if (R.show3d) paint3d(); },
  });
  bind();
  addEventListener('bimcraft-workstyle', () => { readFile(); fill(); });
  window.bimcraftPens = { state: R, add, clear: () => put([]), list, paint3d, keep, print: () => ({ mode: printMode(), table: printMode() === 'table' ? currentTable() : null }), setPrint, viewKey };
  return A;
}
