/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-shape-ui.js — the wall Shape tools on the page (0.9 WT.6, session walls-09), through model-ui.js `extend()`. With ONE drawn wall
 * picked, Properties gets a Shape part (`[data-wshape]`, added under the wall's own rows):
 *   Attach top / Attach base   [data-ws-attachtop] / [data-ws-attachbase]  a roof, floor or ceiling of the model (none = its own height)
 *   Slant                      [data-ws-slant] none | single | double, angles [data-ws-slantl] [data-ws-slantr] (degrees from vertical,
 *                              + leans to the wall's left)
 *   Profile…                   [data-ws-profile] a dialog of along / height rows for the top line and the bottom line ([data-ws-prow]); Reset
 *   Openings                   each of the wall's openings (no door or window) with its offset, width, sill, height and Remove; Add opening
 * One undo step each. The plan shows a gap where an opening reaches the plan's cut. The ops are wall-shape.js. Test hook:
 * window.bimcraftWallShape = { bounds(keys), keyOf(id), readShape, readWallOpenings }.
 */
import { setWallShape, readShape, attachChoices, readWallOpenings, addWallOpening, changeWallOpening, removeWallOpenings } from './wall-shape.js';
import { ModelWriter } from './model-write.js';
import { wallPieces } from './model-plan.js';
import { wallPlanEdges } from './wall-plan-graphics.js';
import { fmtLen, parseLen } from './model-units.js';
import { el } from './ui-util.js';

export function mountWallShape(modelUi) {
  let A = null, cached = { data: null, list: [] };
  const t = (k, v) => A.t('wshape.' + k, v);
  const writer = () => { const ed = A.ed(); return ed ? new ModelWriter(ed.W, ed.api, ed.mid) : null; };
  const L = (mm) => fmtLen(mm, A.units());
  const openings = () => {
    if (cached.data !== A.S.data) { const w = writer(); cached = { data: A.S.data, list: w ? safe(() => readWallOpenings(w, A.S.data?.walls || undefined), []) : [] }; }
    return cached.list;
  };
  const meta = () => ({ label: A.t('model.wall'), verb: A.t('model.verb.changed'), select: A.selectedKeys() });
  const run = (opFn) => A.commit(opFn, meta());

  A = modelUi.extend({
    tools: [],
    wallProps: (w0, kit) => wallProps(w0, kit),
    // a gap in the plan where a wall opening reaches the cut (the doors' and windows' gaps are cut by model-ui.js already)
    scene(scene) {
      const ops = openings();
      if (!ops.length || !scene.walls) return;
      const byGuid = new Map((A.S.data?.walls || []).map((w) => [w.guid, w]));
      let cut = false;
      for (const row of scene.walls) {
        const wall = byGuid.get(row.guid), mine = ops.filter((o) => o.wallGuid === row.guid);
        if (!wall || !mine.length || !row.pieces?.length) continue;
        const rel = mine.map((o) => ({ offset: o.offset, width: o.width, sill: o.sill, height: o.height }));
        row.pieces = row.pieces.flatMap((p) => wallPieces(wall, p, rel, scene.cutZ ?? 1200));
        cut = true;
      }
      if (cut) scene.wallEdges = wallPlanEdges(scene.walls);
    },
  });

  // ---- Properties: the Shape part under one picked wall's rows ----
  /** model-ui.js propsBlock calls this for ONE picked drawn wall, after its own rows (kit: rows, field, el, …). */
  function wallProps(w0, kit) {
    const wall = (A.S.data?.walls || []).find((x) => x.guid === w0.guid) || w0;
    const rows = kit.rows;
    const field = (label, ...kids) => rows.push(el('dt', {}, label), el('dd', {}, ...kids));
    if (wall.bulge) { rows.push(el('dt', { className: 'bc-mp-wide', 'data-wshape': '' }, el('strong', {}, t('title'))), el('dd', { className: 'bc-mp-wide' }, el('span', { className: 'bc-sub' }, t('curved')))); return; }
    rows.push(el('dt', { className: 'bc-mp-wide', 'data-wshape': '' }, el('strong', {}, t('title'))), el('dd', { className: 'bc-mp-wide' }));
    const sh = readShape(wall), w = writer(), choices = w ? safe(() => attachChoices(w, wall), []) : [];
    const sel = (attr, opts, value, onPick) => { const s = el('select', { className: 'bc-mb-select', [attr]: '' }, ...opts.map(([v, l]) => el('option', { value: v, selected: v === value }, l))); s.addEventListener('change', () => onPick(s.value)); return s; };
    field(t('attachtop'), sel('data-ws-attachtop', [['', t('own')], ...choices.filter((c) => c.top).map((c) => [c.guid, c.label])], sh.attachTop, (v) => run(setWallShape(wall.guid, { attachTop: v }))));
    field(t('attachbase'), sel('data-ws-attachbase', [['', t('own')], ...choices.filter((c) => c.base).map((c) => [c.guid, c.label])], sh.attachBase, (v) => run(setWallShape(wall.guid, { attachBase: v }))));
    // slant
    const kind = !sh.slant ? 'none' : sh.slant.length === 2 ? 'double' : 'single';
    const num = (attr, v) => { const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 5, value: Number.isFinite(v) ? String(Math.round(v * 100) / 100) : '', [attr]: '' }); return i; };
    const sl = num('data-ws-slantl', sh.slant?.[0]), sr = num('data-ws-slantr', sh.slant?.[1] ?? sh.slant?.[0]);
    const kindSel = sel('data-ws-slant', [['none', t('slant.none')], ['single', t('slant.single')], ['double', t('slant.double')]], kind, () => show());
    const show = () => { sl.hidden = kindSel.value === 'none'; sr.hidden = kindSel.value !== 'double'; if (kindSel.value === 'none' && sh.slant) apply(); };
    const apply = () => {
      if (kindSel.value === 'none') { run(setWallShape(wall.guid, { slant: null })); return; }
      const a = parseFloat(sl.value), b = parseFloat(sr.value);
      if (!Number.isFinite(a) || (kindSel.value === 'double' && !Number.isFinite(b))) { A.host.status(t('err.slant'), true); return; }
      run(setWallShape(wall.guid, { slant: kindSel.value === 'double' ? [a, b] : [a] }));
    };
    for (const i of [sl, sr]) { i.addEventListener('change', apply); i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); i.blur(); } }); }
    field(t('slant'), kindSel, ' ', sl, ' ', sr, el('span', { className: 'bc-sub' }, ' ' + t('slant.deg')));
    sl.hidden = kind === 'none'; sr.hidden = kind !== 'double';
    // profile
    const pb = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ws-profile': '' }, t(sh.profile ? 'profile.edit' : 'profile.add'));
    pb.addEventListener('click', () => profileDialog(wall, sh));
    field(t('profile'), pb, sh.profile ? el('span', { className: 'bc-sub' }, ' ' + t('profile.set')) : null);
    // openings
    const mine = openings().filter((o) => o.wallGuid === wall.guid);
    const list = el('ul', { className: 'bc-ws-openings', 'data-ws-openings': '' }, ...mine.map((o) => openingRow(wall, o)));
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ws-addopen': '' }, t('opening.add'));
    add.addEventListener('click', () => {
      const width = Math.min(900, wall.len - 100), offset = Math.max(0, (wall.len - width) / 2);
      run(addWallOpening({ wall: wall.guid, offset, width, height: Math.min(2100, wall.height - 50), sill: wall.baseOffset }));
    });
    rows.push(el('dt', { className: 'bc-mp-wide' }, t('openings')), el('dd', { className: 'bc-mp-wide' }, list, add));
  }
  function openingRow(wall, o) {
    const inp = (attr, v, key) => {
      const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 6, value: L(v), [attr]: '', 'aria-label': t('opening.' + key) });
      i.addEventListener('change', () => { const mm = parseLen(i.value, A.units()); if (!Number.isFinite(mm)) { A.host.status(A.t('model.err.length'), true); i.value = i.defaultValue; return; } run(changeWallOpening(o.guid, { [key]: mm })); });
      i.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); i.blur(); } });
      return el('label', { className: 'bc-mb-field' }, t('opening.' + key) + ' ', i);
    };
    const rm = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ws-rmopen': '' }, t('opening.remove'));
    rm.addEventListener('click', () => run(removeWallOpenings([o.guid])));
    return el('li', { 'data-ws-opening': o.guid }, inp('data-ws-ooff', o.offset, 'offset'), ' ', inp('data-ws-ow', o.width, 'width'), ' ', inp('data-ws-osill', o.sill, 'sill'), ' ', inp('data-ws-oh', o.height, 'height'), ' ', rm);
  }
  function profileDialog(wall, sh) {
    const lines = { top: sh.profile?.top || [[0, wall.height], [wall.len, wall.height]], bottom: sh.profile?.bottom || null };
    const table = (key) => {
      const body = el('tbody', {});
      const addRow = (s, z) => {
        const tr = el('tr', { 'data-ws-prow': key }, el('td', {}, el('input', { type: 'text', className: 'bc-input bc-num', size: 8, value: L(s), 'data-ws-ps': '', 'aria-label': t('profile.along') })),
          el('td', {}, el('input', { type: 'text', className: 'bc-input bc-num', size: 8, value: L(z), 'data-ws-pz': '', 'aria-label': t('profile.height') })),
          el('td', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => tr.remove() }, t('profile.rowremove'))));
        body.append(tr);
      };
      for (const [s, z] of lines[key] || []) addRow(s, z);
      const more = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ws-paddrow': key, onClick: () => addRow(wall.len, key === 'top' ? wall.height : 0) }, t('profile.rowadd'));
      return [el('h3', { className: 'bc-h' }, t('profile.' + key)), el('table', { className: 'bc-ws-ptable' }, el('thead', {}, el('tr', {}, el('th', {}, t('profile.along')), el('th', {}, t('profile.height')), el('th', {}))), body), more];
    };
    const read = (dlg, key) => {
      const out = [];
      for (const tr of dlg.querySelectorAll(`[data-ws-prow="${key}"]`)) {
        const s = parseLen(tr.querySelector('[data-ws-ps]').value, A.units()), z = parseLen(tr.querySelector('[data-ws-pz]').value, A.units());
        if (!Number.isFinite(s) || !Number.isFinite(z)) return undefined;
        out.push([s, z]);
      }
      out.sort((p, q) => p[0] - q[0]);
      return out.length >= 2 ? out : out.length ? undefined : null;
    };
    const say = el('p', { role: 'status', 'data-ws-psay': '' });
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': t('profile'), 'data-ws-pdialog': '' }, el('h2', {}, t('profile')), el('p', {}, t('profile.lede', { len: L(wall.len) })), ...table('top'), ...table('bottom'), say);
    const ok = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-ws-psave': '' }, t('profile.save'));
    const reset = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-ws-preset': '' }, t('profile.reset'));
    const close = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => dlg.close() }, A.t('dimension.close'));
    ok.addEventListener('click', () => {
      const top = read(dlg, 'top'), bottom = read(dlg, 'bottom');
      if (top === undefined || bottom === undefined) { say.textContent = t('err.profile'); return; }
      dlg.close(); run(setWallShape(wall.guid, { profile: top || bottom ? { top, bottom } : null }));
    });
    reset.addEventListener('click', () => { dlg.close(); run(setWallShape(wall.guid, { profile: null })); });
    dlg.append(el('p', {}, ok, ' ', reset, ' ', close));
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg); dlg.showModal();
  }
  if (typeof window !== 'undefined') window.bimcraftWallShape = { bounds: (keys) => A.host.viewer?.()?.keyBounds?.(new Set(keys)) || null, keyOf: (id) => A.kb() + id, readShape, readWallOpenings: () => { const w = writer(); return w ? readWallOpenings(w) : []; } };
  return {};
}
function safe(fn, dflt) { try { return fn(); } catch (e) { return dflt; } }
