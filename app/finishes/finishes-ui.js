/* SPDX-License-Identifier: Apache-2.0 */
/**
 * finishes-ui.js: the Wall finishes panel (0.10 BK.25, BK.26, BK.27, BK.28, BK.130; session bim-finishes-10), through model-ui.js extend(). The rules are lib/finishes
 * (finishes/lib/, byte copies), the reading and writing wall-finishes.js. Mounted by `mountWallFinishes(modelUi)`; the mount line is bim-core's (log: Inbox).
 *
 *   What it is: one panel (a card over the right of the drawing, closed by default) with four tabs, each a scrolling strip as the owner's UI rules ask.
 *     Face        the picked wall's two faces; the finishes on the face in the order they are laid (a later one lies over an earlier one); add one: Full height,
 *                 Splash-back, Shower wall or By corners (two opposite corners typed as along-the-wall and height); the tile set-out of the selected tile finish
 *                 (start point: a corner, the centre, an opening's edge or a point; tile direction; straight grid or brick) with the count of whole and cut tiles.
 *     Finish types  a finish type: name, kind, the tile (length, width, joint, waste, texture) and its build-up: layers from the wall outwards, each a role
 *                 (substrate, waterproofing, adhesive, finish), a material and a thickness.
 *     Substrates  the substrate layers of one type on their own: material and thickness (BK.27), and what the wall measures finished.
 *     Schedules   wall finishes by zone, by finish and by room (BK.130).
 *   Every change is ONE undo step through the plan's commit (the document and its IfcCoverings together). The panel is not a dialog and never covers the Draw bar.
 *   Words: finishes/words.js (the keys wfin.* and finishes.err.*); the page's own catalogue wins when it has them.
 * Test hook: window.bimcraftFinishes = { state, open, close, show, tab, render }.
 */
import { el } from '../ui-util.js';
import { ModelWriter } from '../model-write.js';
import { lenMark, fmtArea, parseLen } from '../model-units.js';
import * as F from './wall-finishes.js';
import * as M from './lib/model.js';
import { WORDS } from './words.js';

const ROLE_LIST = ['substrate', 'waterproofing', 'adhesive', 'finish'];
const fill = (s, v) => String(s).replace(/\{(\w+)\}/g, (m, k) => (v && k in v ? v[k] : m));

export function mountWallFinishes(modelUi) {
  let A = null;
  const R = { open: false, tab: 'face', face: 'left', zone: null, type: null, draft: null, err: '', note: '', preset: 'full', input: {} };
  const t = (k, v) => { const s = A?.t ? A.t(k, v) : k; return s === k ? fill(WORDS[k] ?? k, v) : s; };
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const units = () => A.units();
  const len = (mm) => lenMark(mm, units());
  const area = (mm2) => fmtArea(mm2, units());
  const picked = () => (modelUi.wallsPicked?.() || []);
  let box = null, body = null, tabs = null, link = null;

  // ---- the model, as the panel reads it
  const read = () => {
    const w = W();
    if (!w) return null;
    const doc = F.readWallFinishes(w), rows = F.wallRows(w), S = F.finishRows(w, doc, rows);
    return { w, doc, rows, S };
  };
  const wall = (D) => { const g = picked()[0]; return g ? D.rows.walls.find((x) => x.guid === g) || null : null; };
  const errText = (e) => (e?.key ? t(e.key) : String(e?.message || e));
  /** Run a change of the document as ONE undo step; a refusal says why and changes nothing. */
  function change(fn, label, okNote = '') {
    const D = read();
    try { M.cleanDoc(fn(D.doc, D.w)); fn(D.doc, D.w); } catch (e) { R.err = errText(e); render(); return false; }
    R.err = ''; R.note = okNote;
    A.commit(F.wallFinishOp(fn), { label: label || t('wfin.title'), verb: t('model.verb.changed'), onError: (e) => { R.err = errText(e); render(); } });
    setTimeout(render, 0);
    return true;
  }

  // ---- small controls
  const input = (key, value, props = {}) => { const n = el('input', { className: 'bc-input', type: 'text', value: value ?? '', 'data-wf-in': key, ...props }); n.addEventListener('input', () => { R.input[key] = n.value; }); return n; };
  const field = (label, ctl) => el('label', { className: 'bc-wf-field' }, label, ctl);
  const select = (key, options, value) => {
    const s = el('select', { className: 'select-cc', 'data-wf-in': key }, options.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
    s.addEventListener('change', () => { R.input[key] = s.value; });
    return s;
  };
  const val = (key, fallback = '') => (key in R.input ? R.input[key] : fallback);
  const mm = (key, fallback) => { const v = parseLen(val(key, fallback), units()); if (!Number.isFinite(v)) throw Object.assign(new Error('finishes.err.number'), { key: 'finishes.err.number' }); return v; };
  const btn = (label, onClick, props = {}) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick, ...props }, label);

  // ---- tab: Face
  function faceTab(D) {
    const wl = wall(D), out = [];
    if (!picked().length) return [el('p', { className: 'bc-wf-note', 'data-wf-pick': '' }, t('wfin.pick'))];
    if (!wl) return [el('p', { className: 'bc-wf-err' }, t('wfin.curved'))];
    const info = F.wallFaceInfo(D.w, wl.guid, R.face, D.rows);
    out.push(el('p', { className: 'bc-wf-note' }, t('wfin.wall', { name: wl.name || wl.guid.slice(0, 6), len: len(wl.len), height: len(wl.height) })));
    const seg = el('div', { className: 'bc-wf-seg', role: 'group', 'aria-label': t('wfin.tab.face') });
    for (const f of ['left', 'right']) seg.append(btn(t('wfin.face.' + f), () => { R.face = f; R.zone = null; render(); }, { 'data-wf-face': f, 'aria-pressed': String(R.face === f) }));
    out.push(seg);
    const room = info.room ? D.rows.rooms.get(info.room) : null;
    out.push(el('p', { className: 'bc-wf-note' }, room ? t('wfin.faceroom', { room: (room.number ? room.number + ' ' : '') + room.name }) : t('wfin.faceout'), ' ', t('wfin.face.note')));
    // the zones on this face, in the order they are laid
    const face = D.doc.faces.find((x) => x.wall === wl.guid && x.face === R.face), rows = D.S.rows.filter((r) => r.wall === wl.guid && r.face === R.face);
    out.push(el('h3', {}, t('wfin.zones')));
    const list = el('ul', { className: 'bc-wf-list', 'data-wf-zones': '' });
    if (!face?.zones.length) list.append(el('li', { className: 'bc-wf-note' }, t('wfin.nozones')));
    for (const z of face?.zones || []) {
      const r = rows.find((x) => x.zone === z.id);
      if (!r) continue;
      const li = el('li', { className: 'bc-wf-zone', 'data-wf-zone': z.id, 'aria-current': String(R.zone === z.id) },
        el('span', {}, (z.name || z.id) + ' · ' + r.typeName, el('small', {}, r.lost ? t('wfin.zone.lost') : t('wfin.zone.line', { area: area(r.net), size: len(r.rect.s1 - r.rect.s0) + ' × ' + len(r.rect.v1 - r.rect.v0) }) + (r.clipped ? ' · ' + t('wfin.zone.clipped') : ''), r.tiles ? el('small', {}, r.tiles.estimated ? t('wfin.count.est', r.tiles) : t('wfin.count', r.tiles)) : null)),
        el('span', {}, btn('↑', () => change((d) => M.withZoneMoved(d, wl.guid, R.face, z.id, 'up')), { className: 'bc-wf-mini', title: t('wfin.zone.up'), 'aria-label': t('wfin.zone.up') }),
          btn('↓', () => change((d) => M.withZoneMoved(d, wl.guid, R.face, z.id, 'down')), { className: 'bc-wf-mini', title: t('wfin.zone.down'), 'aria-label': t('wfin.zone.down') }),
          btn('×', () => { if (R.zone === z.id) R.zone = null; change((d) => M.withoutZone(d, wl.guid, R.face, z.id), t('wfin.title'), t('wfin.removed')); }, { className: 'bc-wf-mini', title: t('wfin.zone.remove'), 'aria-label': t('wfin.zone.remove'), 'data-wf-remove': z.id })));
      li.addEventListener('click', (e) => { if (e.target.closest('button')) return; R.zone = z.id; render(); });
      list.append(li);
    }
    out.push(list);
    // add a finish
    out.push(el('h3', {}, t('wfin.add')));
    if (!D.doc.types.length) out.push(el('p', { className: 'bc-wf-note' }, t('wfin.add.notypes')));
    else {
      const ty = val('addtype', D.doc.types[0].id);
      out.push(field(t('wfin.add.type'), select('addtype', D.doc.types.map((x) => [x.id, x.name]), ty)));
      const seg2 = el('div', { className: 'bc-wf-seg', role: 'group' });
      for (const p of ['full', 'splash', 'shower', 'corners']) seg2.append(btn(t('wfin.preset.' + p), () => { R.preset = p; render(); }, { 'data-wf-preset': p, 'aria-pressed': String(R.preset === p) }));
      out.push(seg2);
      const g = info.geom, ex = info.extent;
      const span = () => [mm('s0', len(ex[0])), mm('s1', len(ex[1]))];
      const rowIn = (...c) => el('div', { className: 'bc-wf-row' }, ...c);
      if (R.preset === 'splash') out.push(rowIn(field(t('wfin.from'), input('s0', val('s0', len(ex[0])))), field(t('wfin.to'), input('s1', val('s1', len(ex[1])))), field(t('wfin.splash.from'), input('sf', val('sf', len(M.DEFAULTS.splashFrom)))), field(t('wfin.splash.height'), input('sh', val('sh', len(M.DEFAULTS.splashHeight))))));
      if (R.preset === 'shower') out.push(rowIn(field(t('wfin.from'), input('s0', val('s0', len(ex[0])))), field(t('wfin.to'), input('s1', val('s1', len(ex[1])))), field(t('wfin.shower.height'), input('sh', val('sh', len(M.DEFAULTS.showerHeight))))));
      if (R.preset === 'corners') out.push(rowIn(field(t('wfin.corner.s0'), input('c0s', val('c0s', len(ex[0])))), field(t('wfin.corner.v0'), input('c0v', val('c0v', len(0)))), field(t('wfin.corner.s1'), input('c1s', val('c1s', len(ex[1])))), field(t('wfin.corner.v1'), input('c1v', val('c1v', len(g.height))))));
      out.push(btn(t('wfin.place'), () => {
        try {
          const type = val('addtype', D.doc.types[0].id);
          let z;
          if (R.preset === 'full') z = M.zoneFullHeight();
          else if (R.preset === 'splash') z = M.zoneSplashBack(span(), g, { from: mm('sf', len(M.DEFAULTS.splashFrom)), height: mm('sh', len(M.DEFAULTS.splashHeight)) });
          else if (R.preset === 'shower') z = M.zoneShower(span(), g, { height: mm('sh', len(M.DEFAULTS.showerHeight)) });
          else z = M.zoneFromCorners([[mm('c0s', len(ex[0])), mm('c0v', len(0))], [mm('c1s', len(ex[1])), mm('c1v', len(g.height))]], g);
          const kind = { full: 'full', splash: 'splash', shower: 'shower', corners: 'custom' }[R.preset];
          const name = t('wfin.preset.' + R.preset);
          R.input = {};
          change((d) => M.withZone(d, wl.guid, R.face, { ...z, kind, type, name }), t('wfin.title'), t('wfin.added', { face: t('wfin.face.' + R.face) }));
        } catch (e) { R.err = errText(e); render(); }
      }, { 'data-wf-place': '' }));
    }
    // the set-out of the selected tile finish
    const sel = face?.zones.find((z) => z.id === R.zone), selRow = rows.find((r) => r.zone === R.zone), selType = sel ? M.typeById(D.doc, sel.type) : null;
    if (sel && M.tileOf(selType)) out.push(...setoutBlock(D, wl, sel, selRow, info));
    return out;
  }
  function setoutBlock(D, wl, z, row, info) {
    const so = z.setout || { start: { kind: 'corner', corner: 'bl' }, direction: 'horizontal', pattern: 'grid', shift: 0.5 };
    const k = (n, d) => val('so.' + n, d);
    const startKind = k('start', so.start.kind);
    const blk = [el('h3', {}, t('wfin.setout') + ': ' + (z.name || z.id))];
    blk.push(field(t('wfin.setout.start'), select('so.start', ['corner', 'centre', 'opening', 'point'].map((x) => [x, t('wfin.start.' + x)]), startKind)));
    if (startKind === 'corner') blk.push(field(t('wfin.setout.start'), select('so.corner', ['bl', 'br', 'tl', 'tr'].map((x) => [x, t('wfin.corner.' + x)]), k('corner', so.start.corner || 'bl'))));
    if (startKind === 'opening') {
      if (!wl.openings.length) blk.push(el('p', { className: 'bc-wf-note' }, t('wfin.opening.none')));
      else blk.push(el('div', { className: 'bc-wf-row' }, field(t('wfin.opening'), select('so.opening', wl.openings.map((o) => [o.id, o.kind + ' ' + len(o.offset) + ' / ' + len(o.width)]), k('opening', so.start.opening || wl.openings[0].id))),
        field(t('wfin.setout.start'), select('so.edge', ['left', 'right', 'top', 'bottom'].map((x) => [x, t('wfin.edge.' + x)]), k('edge', so.start.edge || 'right')))));
    }
    if (startKind === 'point') blk.push(el('div', { className: 'bc-wf-row' }, field(t('wfin.along'), input('so.s', k('s', len(so.start.s ?? row.rect.s0)))), field(t('wfin.up'), input('so.v', k('v', len(so.start.v ?? row.rect.v0))))));
    blk.push(el('div', { className: 'bc-wf-row' }, field(t('wfin.dir'), select('so.dir', ['horizontal', 'vertical'].map((x) => [x, t('wfin.dir.' + x)]), k('dir', so.direction))), field(t('wfin.pattern'), select('so.pattern', ['grid', 'brick'].map((x) => [x, t('wfin.pattern.' + x)]), k('pattern', so.pattern)))));
    if (k('pattern', so.pattern) === 'brick') blk.push(field(t('wfin.shift'), input('so.shift', k('shift', String(so.shift ?? 0.5)))));
    blk.push(btn(t('wfin.setout.apply'), () => {
      try {
        const kind = k('start', so.start.kind), start = { kind };
        if (kind === 'corner') start.corner = k('corner', so.start.corner || 'bl');
        if (kind === 'opening') { start.opening = k('opening', so.start.opening || wl.openings[0]?.id); start.edge = k('edge', so.start.edge || 'right'); }
        if (kind === 'point') { start.s = mm('so.s', len(row.rect.s0)); start.v = mm('so.v', len(row.rect.v0)); }
        const setout = { start, direction: k('dir', so.direction), pattern: k('pattern', so.pattern), shift: Number(k('shift', String(so.shift ?? 0.5))) };
        change((d) => M.withZoneChanged(d, wl.guid, R.face, z.id, { setout }));
      } catch (e) { R.err = errText(e); render(); }
    }, { 'data-wf-setout': '' }));
    if (row?.tiles) {
      blk.push(el('p', { className: 'bc-wf-note', 'data-wf-count': '' }, row.tiles.estimated ? t('wfin.count.est', row.tiles) : t('wfin.count', row.tiles)));
      if (row.tiles.cutSizes?.length) blk.push(el('p', { className: 'bc-wf-note' }, t('wfin.cuts', { list: row.tiles.cutSizes.slice(0, 6).map((c) => c.count + ' × ' + len(c.w) + ' × ' + len(c.h)).join(', ') })));
    }
    return blk;
  }

  // ---- tab: Finish types
  const blankType = (D) => ({ id: M.newId('type', D.doc.types.map((x) => x.id)), name: '', kind: 'paint', layers: [{ role: 'substrate', material: '', thickness: 0 }, { role: 'finish', material: '', thickness: 0 }] });
  const draftOf = (D) => { if (!R.draft || R.draftFor !== R.type) { R.draftFor = R.type; R.draft = JSON.parse(JSON.stringify(R.type ? M.typeById(D.doc, R.type) || blankType(D) : blankType(D))); } return R.draft; };
  function layerRows(d, only = null) {
    const wrap = el('div', { className: 'bc-wf-list', 'data-wf-layers': '' });
    d.layers.forEach((l, i) => {
      if (only && l.role !== only) return;
      const mat = el('input', { className: 'bc-input', type: 'text', value: l.material, 'aria-label': t('wfin.layer.material'), placeholder: t('wfin.layer.material'), 'data-wf-lmat': String(i) });
      mat.addEventListener('input', () => { l.material = mat.value; });
      const th = el('input', { className: 'bc-input', type: 'text', value: l.thickness ? len(l.thickness) : '', 'aria-label': t('wfin.layer.thickness'), placeholder: t('wfin.layer.thickness'), 'data-wf-lt': String(i) });
      th.addEventListener('input', () => { const v = parseLen(th.value, units()); l.thickness = Number.isFinite(v) ? v : -1; });
      const role = el('select', { className: 'select-cc', 'aria-label': t('wfin.layers'), 'data-wf-lrole': String(i), disabled: !!only }, ROLE_LIST.map((r) => el('option', { value: r, selected: r === l.role }, t('wfin.role.' + r))));
      role.addEventListener('change', () => { l.role = role.value; });
      wrap.append(el('div', { className: 'bc-wf-layer' }, role, mat, th, btn('×', () => { d.layers.splice(i, 1); render(); }, { className: 'bc-wf-mini', title: t('wfin.layer.remove'), 'aria-label': t('wfin.layer.remove') })));
    });
    return wrap;
  }
  function typesTab(D) {
    const d = draftOf(D), out = [];
    const sel = el('select', { className: 'select-cc', 'data-wf-type': '', 'aria-label': t('wfin.types') }, el('option', { value: '' }, t('wfin.type.new')), D.doc.types.map((x) => el('option', { value: x.id, selected: x.id === R.type }, x.name)));
    sel.addEventListener('change', () => { R.type = sel.value || null; R.draft = null; render(); });
    out.push(field(t('wfin.types'), sel));
    const nm = el('input', { className: 'bc-input', type: 'text', value: d.name, 'data-wf-tname': '' }); nm.addEventListener('input', () => { d.name = nm.value; });
    const kd = el('select', { className: 'select-cc', 'data-wf-tkind': '' }, M.KINDS.map((x) => el('option', { value: x, selected: x === d.kind }, t('wfin.kind.' + x)))); kd.addEventListener('change', () => { d.kind = kd.value; if (d.kind === 'tile' && !d.tile) d.tile = { length: 300, width: 300, joint: M.DEFAULTS.joint, waste: M.DEFAULTS.waste }; render(); });
    out.push(el('div', { className: 'bc-wf-row' }, field(t('wfin.type.name'), nm), field(t('wfin.type.kind'), kd)));
    if (d.kind === 'tile' && d.tile) {
      const tf = (key, label, isLen) => { const n = el('input', { className: 'bc-input', type: 'text', value: isLen ? len(d.tile[key]) : String(d.tile[key]), 'data-wf-tile': key }); n.addEventListener('input', () => { const v = isLen ? parseLen(n.value, units()) : Number(n.value); d.tile[key] = Number.isFinite(v) ? v : -1; }); return field(label, n); };
      out.push(el('div', { className: 'bc-wf-row' }, tf('length', t('wfin.tile.length'), true), tf('width', t('wfin.tile.width'), true), tf('joint', t('wfin.tile.joint'), true), tf('waste', t('wfin.tile.waste'), false)));
    }
    out.push(el('h3', {}, t('wfin.layers')), layerRows(d), btn(t('wfin.layer.add'), () => { d.layers.push({ role: 'finish', material: '', thickness: 0 }); render(); }, { 'data-wf-addlayer': '' }));
    out.push(el('p', { className: 'bc-wf-note' }, t('wfin.type.thickness', { t: len(M.typeThickness(d)) })));
    out.push(el('div', { className: 'bc-wf-seg' }, btn(t('wfin.type.save'), () => saveType(d), { 'data-wf-savetype': '' }),
      R.type ? btn(t('wfin.type.remove'), () => { const id = R.type; R.type = null; R.draft = null; change((x) => M.withoutType(x, id)); }, { 'data-wf-removetype': '' }) : null));
    return out;
  }
  function saveType(d) {
    const x = JSON.parse(JSON.stringify(d));
    for (const l of x.layers) if (l.thickness < 0) { R.err = t('finishes.err.layer'); render(); return; }
    if (x.kind !== 'tile') delete x.tile;
    if (!x.name.trim()) { R.err = t('finishes.err.type.name'); render(); return; }
    R.type = x.id; R.draft = null;
    change((doc) => M.withType(doc, x), t('wfin.title'), t('wfin.type.saved'));
  }

  // ---- tab: Substrates
  function substratesTab(D) {
    const out = [el('p', { className: 'bc-wf-note' }, t('wfin.sub.lede'))];
    if (!D.doc.types.length) return [...out, el('p', { className: 'bc-wf-note' }, t('wfin.add.notypes'))];
    const id = val('subtype', R.type || D.doc.types[0].id), ty = M.typeById(D.doc, id) || D.doc.types[0];
    out.push(field(t('wfin.sub.pick'), select('subtype', D.doc.types.map((x) => [x.id, x.name]), ty.id)));
    if (R.draft?.id !== ty.id || R.draftFor !== ty.id) { R.draft = JSON.parse(JSON.stringify(ty)); R.draftFor = ty.id; }
    R.type = ty.id;
    const d = R.draft;
    if (!M.substrates(d).length) out.push(el('p', { className: 'bc-wf-note' }, t('wfin.sub.none')));
    out.push(layerRows(d, 'substrate'), btn(t('wfin.layer.add'), () => { d.layers.unshift({ role: 'substrate', material: '', thickness: 0 }); render(); }, { 'data-wf-addsub': '' }));
    out.push(btn(t('wfin.sub.save'), () => saveType(d), { 'data-wf-savesub': '' }));
    const wl = wall(D);
    if (wl) {
      const th = (f) => D.S.rows.filter((r) => r.wall === wl.guid && r.face === f && !r.lost).reduce((m, r) => Math.max(m, r.thickness), 0), l = th('left'), r = th('right');
      out.push(el('p', { className: 'bc-wf-note', 'data-wf-finished': '' }, t('wfin.finished', { raw: len(wl.t), left: len(l), right: len(r), total: len(M.finishedWall(wl, l, r).finished) })));
    }
    return out;
  }

  // ---- tab: Schedules
  function scheduleTab(D) {
    const S = F.finishSchedules(D.doc, D.w, { fmtLen: len, fmtArea: area, fmtVol: (v) => (v / 1e9).toFixed(4) + ' m³', t, rows: D.S });
    if (!D.S.rows.length) return [el('p', { className: 'bc-wf-note' }, t('wfin.none'))];
    const tbl = (s, key) => el('div', { className: 'bc-wf-scroll', 'data-wf-sched': key }, el('h3', {}, s.title), el('table', { className: 'bc-wf-table' },
      el('thead', {}, el('tr', {}, s.head.map((h) => el('th', {}, h)))), el('tbody', {}, s.rows.map((r) => el('tr', {}, r.map((c) => el('td', {}, c))))), el('tfoot', {}, el('tr', {}, s.total.map((c) => el('td', {}, c))))));
    return [tbl(S.wallfinishtotals, 'totals'), tbl(S.wallfinishrooms, 'rooms'), tbl(S.wallfinishes, 'zones'), el('p', { className: 'bc-wf-note' }, S.wallfinishes.note)];
  }

  // ---- the panel
  function render() {
    if (!box || !R.open) return;
    const D = read();
    if (!D) return;
    for (const b of tabs.children) b.setAttribute('aria-selected', String(b.dataset.wfTab === R.tab));
    const parts = R.tab === 'types' ? typesTab(D) : R.tab === 'substrates' ? substratesTab(D) : R.tab === 'schedule' ? scheduleTab(D) : faceTab(D);
    body.replaceChildren(...parts, R.err ? el('p', { className: 'bc-wf-err', role: 'alert', 'data-wf-err': '' }, R.err) : null, R.note ? el('p', { className: 'bc-wf-note', role: 'status', 'data-wf-note': '' }, R.note) : null);
  }
  function show(on) {
    if (on && !A.ed()) return;
    if (on && !box) build();
    R.open = !!on;
    if (box) box.hidden = !on;
    if (on) { R.err = ''; render(); }
  }
  function tab(name) { R.tab = name; R.err = ''; R.note = ''; R.draft = null; render(); }
  function build() {
    if (!link) { link = el('link', { rel: 'stylesheet', href: new URL('./finishes.css', import.meta.url).href }); document.head.append(link); }
    tabs = el('div', { className: 'bc-wf-tabs', role: 'tablist' }, [['face', 'wfin.tab.face'], ['types', 'wfin.tab.types'], ['substrates', 'wfin.tab.substrates'], ['schedule', 'wfin.tab.schedule']].map(([k, w]) =>
      el('button', { type: 'button', className: 'bc-wf-tab', role: 'tab', 'data-wf-tab': k, 'aria-selected': String(R.tab === k), onClick: () => tab(k) }, t(w))));
    body = el('div', { className: 'bc-wf-body' });
    const close = el('button', { type: 'button', className: 'bc-wf-x', 'data-wf-close': '', 'aria-label': t('wfin.close'), title: t('wfin.close'), onClick: () => show(false) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
    box = el('section', { className: 'bc-wf', 'data-wallfinishes': '', 'aria-label': t('wfin.title') }, el('div', { className: 'bc-wf-head' }, el('h2', { className: 'bc-wf-title' }, t('wfin.title')), close), tabs, body);
    box.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); show(false); } });
    (A.root || document.body).append(box);
  }

  A = modelUi.extend({
    refresh() { try { render(); } catch (e) { console.error(e); } },
    openWallFinishes() { show(true); return true; },
    wallFinishesOpen() { return R.open; },
  });
  if (typeof window !== 'undefined') window.bimcraftFinishes = { state: R, open: () => show(true), close: () => show(false), tab, render, show };   // for tests
  return { state: R, open: () => show(true), close: () => show(false) };
}
