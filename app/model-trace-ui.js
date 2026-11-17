/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model-trace-ui.js — from a traced drawing to walls, on the plan (0.6 DF.23, session `bim-draw`), through model-ui.js
 * `extend()`. Build › From a drawing… `[data-trace-open]` opens a dialog `[data-trace-dialog]`: the drawings kept on this
 * level (each with Remove), then "Choose a drawing…" (DWG or DXF, read by bimcraft.js's own readers: cc-dwg in a worker,
 * dxf-model.js) → its layers (tick the walls' layers), how the lines are drawn (both faces / centre lines / one face, walls to
 * its left or right), the wall type and top, its blocks (each a door or window type, or left out), its units, where it goes
 * (its own coordinates, or its lower-left corner on the plan's origin) and "Keep the drawing as an underlay" — with a running
 * count of the walls, doors and windows it will make. Make → model-trace.js traceDrawing (one undo step).
 * Every level's plan draws its underlays as thin lines (scene.below). Test hook: window.bimcraftTrace = { state, open, parts }.
 */
import { drawingParts, wallsFromLines, openingsFromInserts, traceDrawing, readUnderlays, removeUnderlays, MAX_UNDERLAY_POINTS } from './model-trace.js';
import { WALL_TYPES, wallType, typeThickness } from './model-walls.js';
import { DOOR_TYPES, WINDOW_TYPES, openingTypeName } from './model-openings.js';
import { ModelWriter } from './model-write.js';
import { fmtLen } from './model-units.js';
import { el } from './ui-util.js';
import { createPlans } from './model-plans-ui.js';   // 0.7 DC.116 (session trace): a PDF or a scan, page by page, one level each

const UNIT_CHOICES = [['', null], ['mm', 1], ['cm', 10], ['m', 1000], ['in', 25.4], ['ft', 304.8]];
const CSS = `
.bc-trace { width: min(34rem, calc(100vw - 2rem)); }
.bc-trace fieldset { border: 0; padding: 0; margin: .5rem 0; display: grid; gap: .3rem; }
.bc-trace legend { float: none; width: auto; font-size: var(--fs-sm, .875rem); font-weight: 600; margin: 0 0 .2rem; padding: 0; }
.bc-trace-row { display: flex; flex-wrap: wrap; gap: .4rem; align-items: center; font-size: var(--fs-sm, .875rem); }
.bc-trace-row > span:first-of-type { min-width: 8rem; }
.bc-trace-row .select-cc { max-width: 16rem; }
.bc-trace-list { list-style: none; padding: 0; margin: 0 0 .5rem; display: grid; gap: .3rem; }
.bc-trace-list li { display: flex; gap: .5rem; align-items: center; justify-content: space-between; }
`;

export function mountTrace(modelUi, o) {
  if (!document.getElementById('bc-trace-css')) { const st = el('style', { id: 'bc-trace-css' }); st.textContent = CSS; document.head.append(st); }
  const R = { underlays: [], cache: new Map(), parts: null, file: null };
  let A = null, plans = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const levelGuid = () => A.S.data.levels.find((l) => l.id === A.S.level)?.guid;
  function read() {
    if (!A.ed()) { R.underlays = []; return; }
    try { R.underlays = readUnderlays(W()); } catch (e) { R.underlays = []; }
  }

  async function open() {
    const dlg = el('dialog', { className: 'bc-dialog bc-trace', 'aria-labelledby': 'bc-trace-h', 'data-trace-dialog': '' });
    const body = el('div', { 'data-trace-body': '' });
    const close = () => dlg.close();
    const here = R.underlays.filter((u) => u.storey === A.S.level);
    const list = el('ul', { className: 'bc-trace-list', 'data-trace-underlays': '' }, ...here.map((u) => el('li', {}, el('span', {}, u.name || u.source),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-trace-remove': u.guid, onClick: () => { close(); A.commit(removeUnderlays([u.guid]), { label: u.name, verb: t('model.verb.deleted') }); } }, t('model.trace.remove')))));
    const pick = el('input', { type: 'file', accept: '.dwg,.dxf,.pdf,.png,.jpg,.jpeg,.tif,.tiff', hidden: true, 'data-trace-file': '' });
    const choose = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-trace-choose': '', onClick: () => pick.click() }, t('model.trace.choose'));
    pick.addEventListener('change', async () => { if (pick.files[0]) await load(pick.files[0], body, dlg); });
    dlg.append(el('form', { method: 'dialog' },
      el('h2', { className: 'bc-h', id: 'bc-trace-h' }, t('model.trace.title')),
      el('p', { className: 'bc-muted' }, t('model.trace.lede')),
      el('p', { className: 'bc-muted' }, t('model.trace.plans.lede')),
      here.length ? el('div', {}, el('h3', { className: 'bc-sub' }, t('model.trace.kept')), list) : null,
      el('p', {}, choose, pick), body,
      el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('model.gp.cancel')))));
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
    return dlg;
  }

  /** Read the chosen drawing and show its choices. */
  async function load(file, body, dlg) {
    if (!/\.(dwg|dxf)$/i.test(file.name)) { plans ||= createPlans(A, { root: A.root.closest('main') || A.root }); return plans.load(file, body, dlg); }   // a PDF or a scan: DC.116
    body.replaceChildren(el('p', { className: 'bc-muted' }, t('model.trace.reading', { name: file.name })));
    let model;
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      model = await o.readDrawing(bytes, /\.dxf$/i.test(file.name) ? 'dxf' : 'dwg');
    } catch (e) { body.replaceChildren(el('p', { className: 'bc-input-err', role: 'alert' }, t('model.trace.unread', { why: e.message || e }))); return; }
    R.file = file; R.model = model;
    // 0.10 BK.8 (units on import): a drawing that states no units is asked about before its lines are read as walls (the shell's one
    // dialog, remembered per file); it was read as millimeters. The Drawing units list below still changes it.
    let unitMm = 0;
    if (!(model.header?.INSUNITS > 0) && window.ccImportUnits) {
      const a = await window.ccImportUnits.resolve({ file, format: /\.dxf$/i.test(file.name) ? 'DXF' : 'DWG', stated: null, choices: UNIT_CHOICES.filter((c) => c[0]).map((c) => c[0]), say: (s) => A.host.status(s) });
      if (!a) { body.replaceChildren(el('p', { className: 'bc-input-err', role: 'alert' }, t('model.trace.nounits', { name: file.name }))); return; }
      unitMm = UNIT_CHOICES.find((c) => c[0] === a.unit)?.[1] || 0;
    }
    render(body, dlg, unitMm);
  }

  function render(body, dlg, unitMm) {
    const parts = R.parts = drawingParts(R.model, { unitMm });
    const units = A.units(), L = (mm) => fmtLen(mm, units);
    const field = (label, input) => el('label', { className: 'bc-dlg-field' }, el('span', {}, label), input);
    // layers: the walls' layers ticked when their names say so
    const layerBoxes = parts.layers.filter((l) => l.segs).map((l) => {
      const cb = el('input', { type: 'checkbox', checked: /wall|mur|muro|wand|partition/i.test(l.name), 'data-trace-layer': l.name });
      return el('label', { className: 'bc-trace-row' }, cb, ' ', el('span', {}, l.name), ' ', el('span', { className: 'bc-sub' }, t('model.trace.lines', { n: l.segs }) + (l.curved ? ' ' + t('model.trace.curved', { n: l.curved }) : '')));
    });
    const how = el('select', { className: 'select-cc', 'data-trace-mode': '' }, ...['pairs', 'center', 'left', 'right'].map((m) => el('option', { value: m }, t('model.trace.mode.' + m))));
    const wt = el('select', { className: 'select-cc', 'data-trace-type': '' }, ...WALL_TYPES.map((x) => el('option', { value: x.key }, t('model.wt.' + x.key) + ' (' + L(typeThickness(x)) + ')')));
    const above = A.levelAbove();
    const top = el('select', { className: 'select-cc', 'data-trace-top': '' }, el('option', { value: 'level', disabled: !above }, t('model.wall.top.level')), el('option', { value: 'fixed', selected: !above }, t('model.wall.top.fixed')));
    const unitSel = el('select', { className: 'select-cc', 'data-trace-units': '' }, ...UNIT_CHOICES.map(([k, mm]) => el('option', { value: k, selected: k ? mm === unitMm : !unitMm }, k ? k : t('model.trace.units.auto', { u: unitLabel(parts.unitMm) }))));
    unitSel.addEventListener('change', () => { const c = UNIT_CHOICES.find((x) => x[0] === unitSel.value); render(body, dlg, c?.[1] || 0); });
    const where = el('select', { className: 'select-cc', 'data-trace-where': '' }, el('option', { value: 'own' }, t('model.trace.where.own')), el('option', { value: 'origin' }, t('model.trace.where.origin')));
    const keep = el('input', { type: 'checkbox', checked: true, 'data-trace-underlay': '' });
    const types = [['', t('model.trace.block.skip')], ...DOOR_TYPES.map((x) => [x.key, openingTypeName(x)]), ...WINDOW_TYPES.map((x) => [x.key, openingTypeName(x)])];
    const blockRows = parts.blocks.map((b) => {
      const guess = /door|puerta|tür|porte|\bdr\b/i.test(b.name) ? 'door-single' : /win|ventana|fenster|fen[eê]tre/i.test(b.name) ? 'win-casement' : '';
      const s = el('select', { className: 'select-cc', 'data-trace-block': b.name }, ...types.map(([k, label]) => el('option', { value: k, selected: k === guess }, label)));
      return el('label', { className: 'bc-trace-row' }, el('span', {}, b.name + ' (' + b.count + ')'), ' ', s);
    });
    const count = el('p', { className: 'bc-sub', 'data-trace-count': '', role: 'status' });
    const make = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-trace-make': '' }, t('model.trace.make'));
    /** What the choices make now. */
    const plan = () => {
      const layers = [...body.querySelectorAll('[data-trace-layer]')].filter((x) => x.checked).map((x) => x.dataset.traceLayer);
      let segs = layers.flatMap((l) => parts.segs.get(l) || []);
      const sh = where.value === 'origin' && parts.bounds ? [parts.bounds.x0, parts.bounds.y0] : [0, 0];
      const mv = (s) => [s[0] - sh[0], s[1] - sh[1], s[2] - sh[0], s[3] - sh[1]];
      segs = segs.map(mv);
      const type = wallType(wt.value), tt = typeThickness(type);
      const r = wallsFromLines(segs, { mode: how.value, t: tt, maxT: Math.max(600, tt * 2) });
      if (how.value !== 'pairs') for (const x of r.walls) x.t = tt;
      const map = {};
      for (const s of body.querySelectorAll('[data-trace-block]')) if (s.value) map[s.dataset.traceBlock] = { typeKey: s.value };
      const ins = parts.inserts.map((i) => ({ ...i, x: i.x - sh[0], y: i.y - sh[1], box: i.box && [i.box[0] - sh[0], i.box[1] - sh[1], i.box[2] - sh[0], i.box[3] - sh[1]] }));
      const ops = openingsFromInserts(ins, map, r.walls);
      let underlay = null;
      if (keep.checked) {
        const lines = [...parts.segs.values()].flat().map(mv);
        underlay = { name: R.file.name, units: unitLabel(parts.unitMm), lines: lines.slice(0, Math.floor(MAX_UNDERLAY_POINTS / 2)) };
      }
      return { walls: r.walls, left: r.left.length, openings: ops, underlay, typeKey: type.key, layers };
    };
    const update = () => {
      const p = plan();
      count.textContent = t('model.trace.will', { w: p.walls.length, o: p.openings.length }) + (p.left ? ' ' + t('model.trace.left', { n: p.left }) : '');
      make.disabled = !p.walls.length && !p.underlay;
    };
    body.replaceChildren(
      el('p', {}, el('strong', {}, R.file.name), ' ', el('span', { className: 'bc-sub' }, t('model.trace.size', { w: parts.bounds ? L(parts.bounds.x1 - parts.bounds.x0) : '?', h: parts.bounds ? L(parts.bounds.y1 - parts.bounds.y0) : '?' }))),
      field(t('model.trace.units'), unitSel),
      el('fieldset', {}, el('legend', {}, t('model.trace.layers')), ...(layerBoxes.length ? layerBoxes : [el('p', { className: 'bc-muted' }, t('model.trace.nolines'))])),
      field(t('model.trace.mode'), how), field(t('model.wall.type'), wt), field(t('model.wall.top'), top),
      parts.blocks.length ? el('fieldset', {}, el('legend', {}, t('model.trace.blocks')), ...blockRows) : null,
      field(t('model.trace.where'), where),
      el('label', { className: 'bc-trace-row' }, keep, ' ', t('model.trace.underlay')),
      count, el('p', {}, make));
    body.addEventListener('change', update);
    update();
    make.addEventListener('click', () => {
      const p = plan();
      dlg.close();
      const hgt = A.S.data.levels.find((l) => l.id === A.S.level)?.height || 3000;
      A.commit(traceDrawing({ storey: levelGuid(), walls: p.walls, openings: p.openings, typeKey: p.typeKey, topLevel: top.value === 'level' && above ? above.guid : '', height: hgt, underlay: p.underlay }),
        { label: R.file.name, verb: t('model.verb.made') });
      A.host.status(t('model.trace.done', { w: p.walls.length, o: p.openings.length, name: R.file.name }) + ' ' + t('verify.recognised'), false, true);   // 0.10 BK.64
    });
  }
  const unitLabel = (mm) => (UNIT_CHOICES.find((x) => x[1] === mm)?.[0]) || String(mm) + ' mm';

  A = modelUi.extend({
    refresh() { read(); },
    scene(sc) {
      const k = A.kb();
      for (const u of R.underlays.filter((x) => x.storey === A.S.level)) {
        let segs = R.cache.get(u.id);
        if (!segs) { segs = []; for (const f of u.lines) for (let i = 0; i + 3 < f.length; i += 2) segs.push(f[i], f[i + 1], f[i + 2], f[i + 3]); R.cache.set(u.id, segs); }
        sc.below.push({ key: k + u.id, segs });
      }
    },
  });
  A.root.querySelector('[data-trace-open]')?.addEventListener('click', () => { const m = A.root.querySelector('[data-res-tools]'); if (m) m.open = false; if (!A.S.on) return; open(); });
  if (typeof window !== 'undefined') window.bimcraftTrace = { state: R, open, get parts() { return R.parts; } };   // for tests
  return { state: R, open };
}
