/* SPDX-License-Identifier: Apache-2.0 */
/**
 * symbols-ui.js — BimCraft's host for the shared symbol palette (lib/symbols; 0.8 GH.3-F electrical symbols one click away, GH.3-G plumbing plan
 * symbols). The palette lists every registered set: Electrical (the symbols the Electrical tool places, res-elec-symbols.js) and Plumbing (plumbing-set.js,
 * data), searchable, with favourites kept in this browser. One click picks a symbol; the plan then places it by the SAME path as before:
 *   Electrical   the Electrical tool (res-ui.js) takes the kind through the `bc-symbol-pick` event; placing is its click, one undo step each.
 *   Plumbing     the Plan symbol tool of this file: click the plan (a symbol that sits on a wall snaps to the nearest wall face, back to the wall;
 *                the others go where you click), turn it with R (90°) or the Rotation box, Esc stops. One IFC annotation per symbol, one undo step.
 * Open it from Build › Symbol palette (command `build.symbols`, typed SYMBOLS), or the Tools menu. Test hook: window.bimcraftSymbols.
 */
import { createSymbolSets, createFavourites, symbolPlan, placedProblems, lostWallProblems, setProblems } from './symbol-sets.js';
import { mountSymbolPalette } from './symbol-palette.js';
import { PLUMBING_SET } from './plumbing-set.js';
import { SYMBOLS as EL_SYMBOLS, GROUPS as EL_GROUPS } from './res-elec-symbols.js';
import { wallSpot, symbolScale } from './res-elec.js';
import { readPlanSymbols, placePlanSymbol, changePlanSymbol, removePlanSymbols, symbolsWithoutWall } from './plan-symbols.js';
import { ModelWriter } from './model-write.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';

const FAV_KEY = 'bimcraft.symbols.favourites';
const D2R = Math.PI / 180;

/** The registry BimCraft starts with: Electrical (from the symbols res-ui places) and Plumbing (data). */
export function bimcraftSymbolSets() {
  const reg = createSymbolSets();
  const problems = [];
  const elec = reg.register({ id: 'electrical', version: 1, name: 'Electrical', nameKey: 'sym.set.electrical', license: 'Apache-2.0', source: 'The CadCraft Electrical add-on’s installation symbols (res-elec-symbols.js).',
    categories: EL_GROUPS.map((g) => ({ id: g, name: g, nameKey: 'res.el.group.' + g })),
    symbols: EL_SYMBOLS.map((s) => ({ key: s.key, category: s.group, name: s.key, nameKey: 'res.el.kind.' + s.key, kind: 'symbol', ents: s.ents })) });
  problems.push(...elec.problems.map((p) => ({ ...p, set: 'electrical' })));
  const plumb = reg.register(PLUMBING_SET);
  problems.push(...plumb.problems.map((p) => ({ ...p, set: 'plumbing' })));
  return { registry: reg, problems };
}

export function mountSymbols(modelUi) {
  const { registry, problems: setIssues } = bimcraftSymbolSets();
  const favourites = createFavourites((() => { try { return window.localStorage; } catch (e) { return null; } })(), FAV_KEY);
  const R = { cur: null, rot: 0, at: null, items: [], spot: null, lost: new Set() };
  let A = null, palette = null, src = null;
  const tx = (...a) => t(...a);
  const writer = () => { const e = A?.ed(); return e ? new ModelWriter(e.W, e.api, e.mid) : null; };
  const levelGuid = () => A.level()?.guid;
  const symOf = (it) => registry.find(it.set, it.key);
  const labelOf = (sym) => registry.label(sym, tx);

  // ---- the placement spot: a wall face (symbols that sit on a wall) or the pointer ----
  const elWalls = () => A.wallsHere().map((w) => ({ guid: w.guid, a: w.a, b: w.b, t: w.t }));
  function spotAt(p) {
    const sym = R.cur && registry.find(R.cur.set, R.cur.key);
    if (!sym) return null;
    let base = Math.PI / 2, at = p, wall = null;
    if (sym.wall) {
      const ws = wallSpot(elWalls(), p, Math.max(600, A.pv().pxToMm(30)));
      if (ws) { at = ws.at; base = ws.angle; wall = { wall: ws.wall, side: ws.side, offset: ws.offset, base: ws.angle }; }   // the wall face it sits on: it follows that wall (plan-symbols.js syncPlanSymbols)
    }
    return { at, angle: base + R.rot * D2R, ...(wall || {}) };
  }

  // ---- the tool ----
  function pickSymbol(setId, sym) {
    if (setId === 'electrical') {
      if (!A.S.on) modelUi.show(true);
      if (!A.S.on) { A.host.status(tx('sym.err.noplan'), true); return; }
      A.root.dispatchEvent(new CustomEvent('bc-symbol-pick', { bubbles: true, detail: { set: setId, key: sym.key } }));
      A.host.status(tx('sym.picked.electrical', { name: labelOf(sym) }));
      phoneHide();
      return;
    }
    if (!A.S.on) modelUi.show(true);
    if (!A.S.on) { A.host.status(tx('sym.err.noplan'), true); return; }
    R.cur = { set: setId, key: sym.key };
    A.setTool('plansymbol');
    syncRow();
    A.host.status(tx('sym.picked.plan', { name: labelOf(sym) }));
    A.drawOverlay();
    phoneHide();
  }
  /** At phone width the palette is a sheet over the plan: it steps aside once a symbol is picked (Build › Symbol palette brings it back). */
  function phoneHide() { try { if (window.matchMedia('(max-width: 640px)').matches) palette.hide(); } catch (e) { /* no matchMedia */ } }
  function place(p) {
    const sp = spotAt(p), sym = R.cur && registry.find(R.cur.set, R.cur.key);
    if (!sp || !sym) { A.host.status(tx('sym.err.none'), true); return; }
    A.commit(placePlanSymbol({ level: levelGuid(), set: R.cur.set, key: R.cur.key, name: labelOf(sym), abbr: sym.kind === 'line' ? '' : sym.abbr, tag: sym.kind === 'line' ? '' : undefined, at: sp.at, angle: sp.angle, wall: sp.wall, side: sp.side, offset: sp.offset, base: sp.base }), { label: labelOf(sym), verb: tx('model.verb.placed') });
  }
  function draw(item, at, angle, key) {
    const sym = symOf(item);
    const sc = symbolScale(A.units());
    if (!sym) {   // the set is not here: a box where it was, listed in Problems
      const h = 3 * sc;
      return { key, poly: [[at[0] - h, at[1] - h], [at[0] + h, at[1] - h], [at[0] + h, at[1] + h], [at[0] - h, at[1] + h]], lines: [[at[0] - h, at[1] - h, at[0] + h, at[1] - h], [at[0] + h, at[1] - h, at[0] + h, at[1] + h], [at[0] + h, at[1] + h, at[0] - h, at[1] + h], [at[0] - h, at[1] + h, at[0] - h, at[1] - h], [at[0] - h, at[1] - h, at[0] + h, at[1] + h], [at[0] - h, at[1] + h, at[0] + h, at[1] - h]], arcs: [], thin: [], dashed: [] };
    }
    const g = symbolPlan(sym, at, angle, sc);
    return g ? { key, lines: g.lines, arcs: g.arcs, thin: g.thin, poly: g.poly } : null;
  }
  function syncRow() {
    const row = A?.root.querySelector('[data-mopts="plansymbol"]');
    if (!row) return;
    const sym = R.cur && registry.find(R.cur.set, R.cur.key);
    row.querySelector('[data-sym-current]').textContent = sym ? labelOf(sym) : tx('sym.row.none');
    const inp = row.querySelector('[data-sym-angle]');
    if (document.activeElement !== inp) inp.value = String(Math.round(R.rot * 100) / 100);
  }
  function setRot(deg) { R.rot = ((deg % 360) + 360) % 360; if (R.rot > 180) R.rot -= 360; syncRow(); A.drawOverlay(); }
  function buildRow() {
    if (A.root.querySelector('[data-mopts="plansymbol"]')) return;
    const anchor = A.root.querySelector('[data-mopts="electrical"]') || A.root.querySelector('[data-mopts]');
    if (!anchor) return;
    const angle = el('input', { type: 'text', inputMode: 'decimal', className: 'bc-input bc-num', size: 5, 'data-sym-angle': '', 'aria-label': tx('sym.row.rotation') });
    angle.addEventListener('change', () => { const v = Number(String(angle.value).replace(/[°\s]/g, '').replace(',', '.')); if (Number.isFinite(v)) setRot(v); else { A.host.status(tx('sym.err.angle'), true); syncRow(); } });
    const turn = (d, key) => { const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sym-turn': String(d), title: tx(key + '.title') }, tx(key)); b.addEventListener('click', () => setRot(R.rot + d)); return b; };
    const open = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sym-reopen': '' }, tx('sym.row.palette'));
    open.addEventListener('click', () => api.open());
    const row = el('div', { className: 'bc-modelbar-row', 'data-mopts': 'plansymbol', hidden: true },
      el('strong', { 'data-sym-current': '' }), el('label', {}, el('span', {}, tx('sym.row.rotation') + ' '), angle), turn(90, 'sym.row.left'), turn(-90, 'sym.row.right'), open);
    anchor.after(row);
  }
  function buildEntry() {
    for (const tb of A.root.querySelectorAll('[data-sym-toolbar]')) tb.addEventListener('click', () => api.toggle(tb));   // the toolbar row's Symbols button (0.8 GH.3-G)
    const have = A.root.querySelector('[data-sym-open]');   // ui.inc has the button; this builds one only when a page has none
    if (have) { have.addEventListener('click', () => api.open(have)); return; }
    const menu = A.root.querySelector('[data-res-tools] .bc-mb-menu');
    const b = el('button', { type: 'button', className: 'bc-tool', 'data-sym-open': '', title: tx('sym.open.title'), 'aria-haspopup': 'dialog' }, el('i', { className: 'bi bi-grid-3x3-gap-fill', 'aria-hidden': 'true' }), el('span', {}, tx('sym.open')));
    b.addEventListener('click', () => api.open(b));
    if (menu) menu.append(b); else { b.hidden = true; A.root.append(b); }
  }

  // ---- Problems (rule 29): sets that were not read cleanly, placed symbols whose set is gone ----
  function problemList() {
    const out = [];
    for (const sid of new Set(setIssues.map((p) => p.set))) out.push(...setProblems(sid, setIssues.filter((p) => p.set === sid)));
    out.push(...placedProblems(R.items.map((it) => ({ ...it, guid: it.guid })), registry));
    out.push(...lostWallProblems(R.items.map((it) => ({ ...it, lostWall: R.lost.has(it.guid) }))));   // 0.8 GH.3-G: its wall was deleted
    return out;
  }
  function register() {
    const P = window.ccProblems;
    if (!P?.source) return;
    src ||= P.source({ id: 'bimcraft.symbols', kind: 'check', label: tx('sym.src'), debounceMs: 300, run: () => problemList() });
    src.invalidate();
  }
  if (window.ccProblems) register(); else document.addEventListener('cc-problems-ready', () => register(), { once: true });

  const ext = {
    tools: ['plansymbol'],
    hint: () => 'sym.hint.plansymbol',
    typed: () => false,
    classes: /^IfcAnnotation$/,
    refresh() { const w = writer(); R.items = w ? readPlanSymbols(w) : []; R.lost = w ? symbolsWithoutWall(w, R.items) : new Set(); src?.invalidate(); },
    ownKeys(set, k) { for (const it of R.items) set.add(k + it.id); },
    scene(scene) {
      const k = A.kb();
      for (const it of R.items) {
        if (it.storey !== A.S.level) continue;
        const g = draw(it, it.at, it.angle, k + it.id);
        if (!g) continue;
        scene.symbols.push(g);
        const sym = symOf(it), sc = symbolScale(A.units());
        const lab = sym && sym.kind === 'line' ? sym.abbr : it.tag;
        if (lab) scene.rooms.push({ key: k + it.id, at: [it.at[0] + 4 * sc, it.at[1] - 4 * sc], label: [lab] });
      }
    },
    overlay(o) {
      if (A.S.tool !== 'plansymbol' || !R.at) return;
      const sp = spotAt(R.at), sym = R.cur && registry.find(R.cur.set, R.cur.key);
      if (!sp || !sym) return;
      const g = symbolPlan(sym, sp.at, sp.angle, symbolScale(A.units()));
      if (g) o.symbols.push({ key: null, lines: g.lines, arcs: g.arcs, thin: g.thin });
      o.hud = { p: sp.at, text: labelOf(sym) };
    },
    move(p) { if (A.S.tool === 'plansymbol') R.at = p; },
    click(p) { if (A.S.tool === 'plansymbol') place(p); },
    key(e, low) {
      if (A.S.tool !== 'plansymbol') return false;
      if ((low === 'r' || e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey) { setRot(R.rot + (e.shiftKey ? -90 : 90)); return true; }
      return false;
    },
    escape() { if (A.S.tool === 'plansymbol') { A.setTool('select'); return true; } return false; },
    toolChanged(name) { if (name === 'plansymbol') { buildRow(); syncRow(); } else R.at = null; },
    pick(key) {
      const it = R.items.find((x) => A.kb() + x.id === key);
      return it ? { kind: 'plansymbol', guid: it.guid, label: (it.tag ? it.tag + ' · ' : '') + (symOf(it) ? labelOf(symOf(it)) : it.key) } : null;   // i18n-ignore: tag and name
    },
    props(items, kit) {
      if (!items.every((x) => x.kind === 'plansymbol')) return null;
      const its = items.map((x) => R.items.find((d) => d.guid === x.guid)).filter(Boolean);
      if (!its.length) return null;
      const d = its[0], sym = symOf(d);
      const one = its.length === 1;
      const title = one ? labelOf(sym || { name: d.key }) : tx('sym.props.n', { n: its.length });
      const run = (ch) => A.commit((ed) => { let r = null; for (const x of its) { const r2 = changePlanSymbol(x.guid, ch)(ed); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r; }, { ...kit.one(title), reselect: () => its.map((x) => A.kb() + x.id) });
      if (one) {
        const ti = el('input', { type: 'text', className: 'bc-input', value: d.tag, maxLength: 20, 'data-mp-symtag': '' });
        ti.addEventListener('change', () => run({ tag: ti.value }));
        kit.field(tx('sym.props.tag'), ti);
      }
      const ai = el('input', { type: 'text', inputMode: 'decimal', className: 'bc-input bc-num', size: 6, value: String(Math.round(((d.angle - Math.PI / 2) / D2R) * 100) / 100), 'data-mp-symangle': '' });
      ai.addEventListener('change', () => { const v = Number(String(ai.value).replace(/[°\s]/g, '').replace(',', '.')); if (Number.isFinite(v)) run({ angle: Math.PI / 2 + v * D2R }); else A.host.status(tx('sym.err.angle'), true); });
      kit.field(tx('sym.row.rotation'), ai);
      return { title };
    },
    remove(items) {
      const g = items.filter((x) => x.kind === 'plansymbol').map((x) => x.guid);
      return g.length ? removePlanSymbols(g) : null;
    },
  };
  A = modelUi.extend(ext);
  buildEntry();
  buildRow();

  palette = mountSymbolPalette(A.root.closest('body') || document.body, { registry, favourites, t: tx, onPick: pickSymbol, initialSet: 'electrical' });
  const api = {
    open(opener) { palette.show(opener || document.querySelector('[data-sym-open]')); },
    close() { palette.hide(); },
    toggle(opener) { palette.toggle(opener || document.querySelector('[data-sym-open]')); },
    registry, favourites, palette, state: R, problems: problemList, pick: (setId, key) => { const s = registry.find(setId, key); if (s) pickSymbol(setId, s); },
  };
  if (typeof window !== 'undefined') window.bimcraftSymbols = api;   // for tests
  return api;
}
