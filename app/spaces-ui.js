/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spaces-ui.js — the Room, Room Separator, Tag Room, Area, Area Boundary, Tag Area, Shaft, Vertical Opening and Model Group tools
 * on the plan (0.10, session bk-tools-a-10), through model-ui.js `extend()`. A thin adapter: what the tools do is in spaces-ops.js
 * (ops, one undo step each) over room-bounds.js, slab-openings.js and model-groups.js; the geometry is spaces-geom.js.
 *
 * The buttons are added to the model bar here (a "Rooms" menu after the Walls menu, [data-space-tools]) and each has an options row
 * ([data-mopts=<tool>]); the ribbon layouts and the menu styles click these same buttons (workspace/engine.js, input-bimcraft.js):
 *   room       click in a closed room: it is picked (Properties: name, number, area, perimeter, volume); a name or number typed in the
 *              row first is given to it. Rooms are the ones the walls already make (model-slabs.js); nothing new is made here.
 *   roomsep    click two points (and on: a chain): a Room separator, a line that bounds rooms like a wall with no thickness
 *   tagroom    click in a room: a tag (number, name, area) where clicked; "Tag all untagged" does the level. Drag a picked tag.
 *   area       click inside the area boundaries of the chosen scheme: an area (name, number, type), measured from them
 *   areabound  draw area boundary lines, or pick walls (their centre line or the face on the side clicked)
 *   tagarea    as tagroom, for areas
 *   shaft      sketch an outline, choose the base and top level: every floor, ceiling and roof between them is cut; one thing
 *   vopening   sketch an outline: one floor, ceiling or roof (the row says which) is cut
 *   mgroup     with elements picked: they become a group (named in the row). Then: Place another, Add the picked, Ungroup.
 * Test hook: window.bimcraftSpaces = { state, read }.
 */
import { ModelWriter } from './model-write.js';
import { fmtLen, parseLen, fmtArea, isMetric } from './model-units.js';
import { loopAt } from './model-rooms.js';
import { el } from './ui-util.js';
import { readBounds, readAreas, readTags, areaLoops, wallFaceLine, SCHEMES, TAG_PAPER } from './room-bounds.js';
import { onAnno } from './anno-scale-bim.js';
import { readShafts, hostsOf, cutsOf } from './slab-openings.js';
import { readGroups, describe, copyProblem } from './model-groups.js';
import { tagLines, tagSize, nextNumber, sideOf, polyProblem, absArea, overlapArea } from './spaces-geom.js';
import * as OP from './spaces-ops.js';

export const SPACE_TOOLS = ['room', 'roomsep', 'tagroom', 'area', 'areabound', 'tagarea', 'shaft', 'vopening', 'mgroup'];
const ICON = { room: ['room', 'bi-door-open'], roomsep: ['roomsep', 'bi-distribute-horizontal'], tagroom: ['roomtag', 'bi-tag'], area: ['area', 'bi-bounding-box'], areabound: ['areabound', 'bi-border-outer'],
  tagarea: ['areatag', 'bi-tags'], shaft: ['shaft', 'bi-box-arrow-down'], vopening: ['vertopen', 'bi-square'], mgroup: ['modelgroup', 'bi-collection'] };

export function mountSpaces(modelUi) {
  const R = {
    bounds: [], areas: [], tags: [], shafts: [], groups: [], hosts: null,
    hover: null, chain: null, pts: [],
    room: { name: '', number: '' },
    area: { scheme: 'gross', name: '', number: '', type: '' },
    bound: { scheme: 'gross', pick: 'draw' },
    tag: { paper: TAG_PAPER },
    shaft: { base: '', top: '', baseOffset: 0, topOffset: 0 },
    vop: { cut: 'floor' },
    group: { name: '', placing: null },
    dragTag: null,
  };
  // 0.10 BK.10: a new tag starts at the building's tag height (Annotation sizes), when it has one
  onAnno((std) => { if (typeof std?.heights?.tag === 'number') R.tag.paper = std.heights.tag; });
  let A = null;
  const t = (k, v) => A.t('spaces.' + k, v);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const L = (mm) => fmtLen(mm, A.units());
  const fmtVol = (mm3) => (isMetric(A.units()) ? (mm3 / 1e9).toFixed(2) + ' m³' : (mm3 / 28316846.592).toFixed(1) + ' ft³');
  const say = (k, v, err = false) => A.host.status(t(k, v), err);
  const level = () => A.S.data?.levels.find((l) => l.id === A.S.level) || null;
  const levelGuid = () => level()?.guid;
  const heightOf = (st) => { const ls = A.S.data?.levels || [], i = ls.findIndex((l) => l.id === st); return i < 0 ? 0 : (ls[i + 1] ? ls[i + 1].elevation - ls[i].elevation : ls[i].height); };
  const spaces = () => (A.S.data?.derived?.spaces || []).filter((x) => x.storey === A.S.level);
  const roomAt = (p) => { const loop = A.S.loops && loopAt(A.S.loops.rooms, p); return loop ? { loop, sp: spaces().find((s) => loopAt(A.S.loops.rooms, s.seed) === loop) || null } : null; };
  const areaAt = (p, scheme) => { const loops = areaLoopsHere(scheme), loop = loopAt(loops, p); return loop ? { loop, area: R.areas.find((a) => a.storey === A.S.level && a.scheme === scheme && loopAt(loops, a.seed) === loop) || null } : null; };
  const loopCache = new Map();
  function areaLoopsHere(scheme) {
    const k = A.S.level + ':' + scheme;
    if (!loopCache.has(k)) { try { loopCache.set(k, areaLoops(W(), A.S.level, scheme, R.bounds)); } catch (e) { loopCache.set(k, []); } }
    return loopCache.get(k);
  }
  const hint = (key, v) => { const h = document.querySelector('[data-model-hint]'); if (h) h.textContent = t(key, v); };
  const hintNow = () => {
    const tool = A.S.tool;
    if (!SPACE_TOOLS.includes(tool)) return;
    hint(tool === 'mgroup' ? (R.group.placing ? 'hint.mgroup.place' : 'hint.mgroup') : tool === 'areabound' && R.bound.pick !== 'draw' ? 'hint.areabound.pick' : (tool === 'roomsep' || tool === 'areabound') && R.chain ? 'hint.line2' : 'hint.' + tool);
  };

  function read() {
    loopCache.clear(); R.hosts = null;
    if (!A.ed()) { R.bounds = []; R.areas = []; R.tags = []; R.shafts = []; R.groups = []; return; }
    try { const w = W(); R.bounds = readBounds(w); R.areas = readAreas(w); R.tags = readTags(w); R.shafts = readShafts(w); R.groups = readGroups(w); }
    catch (e) { console.error(e); R.bounds = []; R.areas = []; R.tags = []; R.shafts = []; R.groups = []; }
  }
  const at = (p, e, from = null) => A.snapFrom(p, e, from).p;
  const meta = (label, verb, select) => ({ label: t(label), verb: A.t('model.verb.' + verb), ...(select ? { select } : {}) });

  // ------------------------------------------------------------------------------------------------ the buttons and their rows
  const row0 = document.querySelector('[data-wall-tools]') || document.querySelector('[data-modify-tools]');
  if (row0 && !document.querySelector('[data-space-tools]')) {
    const menu = el('div', { className: 'bc-mb-menu', role: 'group' });
    for (const name of SPACE_TOOLS) {
      const b = el('button', { type: 'button', className: 'bc-tool', 'data-mtool': name, 'aria-pressed': 'false' }, el('i', { className: 'bi ' + ICON[name][1], 'aria-hidden': 'true', 'data-ccic': ICON[name][0] }), el('span', {}, ''));
      b.addEventListener('click', () => { const d = menu.closest('details'); if (d) d.open = false; });
      menu.append(b);
    }
    const sum = el('summary', { className: 'bc-tool' }, el('i', { className: 'bi bi-door-open', 'aria-hidden': 'true', 'data-ccic': 'room' }), el('span', {}, ''));
    row0.after(el('details', { className: 'bc-mb-more', 'data-space-tools': '' }, sum, menu));
  }

  // ------------------------------------------------------------------------------------------------------------ doing things
  function clickRoom(p) {
    const hit = roomAt(p);
    if (!hit || !hit.sp) { say('room.open'); return; }   // advice: nothing is refused, there is just no closed room here
    const key = A.kb() + hit.sp.id, ch = {};
    if (R.room.name.trim()) ch.name = R.room.name.trim();
    if (R.room.number.trim()) ch.number = R.room.number.trim();
    const h = heightOf(hit.sp.storey);
    A.host.select([key]);
    if (Object.keys(ch).length) {
      A.commit(OP.nameRoom(hit.sp.guid, ch), meta('room', 'changed', [key]));
      if (ch.number) { R.room.number = nextNumber(ch.number); syncRows(); }
    }
    say('room.picked', { name: [ch.number || hit.sp.number, ch.name || hit.sp.name].filter(Boolean).join(' '), area: fmtArea(hit.loop.area, A.units()), perimeter: L(hit.loop.perimeter), volume: fmtVol(hit.loop.area * h) });
  }
  function clickLine(p, e, kind) {
    const q = at(p, e, R.chain);
    if (!R.chain) { R.chain = q; hintNow(); return; }
    const a = R.chain;
    if (Math.hypot(q[0] - a[0], q[1] - a[1]) < 1) return;
    R.chain = q;
    A.commit(OP.drawBounds({ storey: levelGuid(), kind, scheme: R.bound.scheme, lines: [{ a, b: q }] }), meta(kind === 'area' ? 'areabound' : 'separator', 'drew'));
  }
  function clickPickWall(p, e) {
    // the wall under the click, by its own line (a boundary already on it must not hide it)
    const walls = A.S.data?.walls || [], tol = A.pv().pxToMm(6);
    const dist = (x) => { const d = [x.b[0] - x.a[0], x.b[1] - x.a[1]], L2 = d[0] * d[0] + d[1] * d[1] || 1, u = Math.max(0, Math.min(1, ((p[0] - x.a[0]) * d[0] + (p[1] - x.a[1]) * d[1]) / L2)); return Math.hypot(p[0] - x.a[0] - d[0] * u, p[1] - x.a[1] - d[1] * u); };
    const wall = walls.filter((x) => x.storey === A.S.level && dist(x) <= x.t / 2 + tol).sort((x, y) => dist(x) - dist(y))[0] || null;
    if (!wall) { say('areabound.nowall'); return; }
    const face = R.bound.pick === 'face' ? sideOf(wall, p) : 'centre';
    if (R.bounds.some((b) => b.kind === 'area' && b.scheme === R.bound.scheme && b.wall === wall.guid && b.face === face)) { say('areabound.have'); return; }
    const [a, b] = wallFaceLine(walls, wall, face);
    A.commit(OP.drawBounds({ storey: levelGuid(), kind: 'area', scheme: R.bound.scheme, lines: [{ a, b, wall: wall.guid, face }] }), meta('areabound', 'added'));
  }
  function clickArea(p) {
    const hit = areaAt(p, R.area.scheme);
    if (hit?.area) { A.host.select([A.kb() + hit.area.id]); say('area.have', { name: hit.area.name }); return; }
    A.commit(OP.placeArea({ storey: levelGuid(), scheme: R.area.scheme, seed: p, name: R.area.name, number: R.area.number, type: R.area.type }), meta('area', 'placed'));
    if (R.area.number.trim()) { R.area.number = nextNumber(R.area.number.trim()); syncRows(); }
    if (hit) say('area.placed', { area: fmtArea(hit.loop.area, A.units()), scheme: t('scheme.' + R.area.scheme) }); else say('area.open', { scheme: t('scheme.' + R.area.scheme) });
  }
  function clickTag(p, kind) {
    const hit = kind === 'area' ? ['gross', 'rentable'].map((s) => areaAt(p, s)).filter((x) => x?.area).sort((a, b) => a.loop.area - b.loop.area)[0] : roomAt(p);
    const target = kind === 'area' ? hit?.area : hit?.sp;
    if (!target) { say(kind === 'area' ? 'tag.noarea' : 'room.open'); return; }
    const offset = [p[0] - target.seed[0], p[1] - target.seed[1]];
    const have = R.tags.find((x) => x.target === target.guid);
    if (have) { A.commit(OP.moveTag(have.guid, { offset, paper: R.tag.paper }), meta('tag.' + kind, 'moved', [A.kb() + have.id])); return; }
    A.commit(OP.placeTags([{ target: target.guid, offset, paper: R.tag.paper }]), meta('tag.' + kind, 'placed'));
  }
  function tagAll(kind) {
    const tagged = new Set(R.tags.map((x) => x.target));
    const list = (kind === 'area' ? R.areas.filter((a) => a.storey === A.S.level && a.enclosed) : spaces()).filter((x) => !tagged.has(x.guid));
    if (!list.length) { say('tag.none'); return; }
    A.commit(OP.placeTags(list.map((x) => ({ target: x.guid, paper: R.tag.paper }))), meta('tag.' + kind, 'placed'));
    say('tag.all', { n: list.length });
  }
  const hosts = () => { if (!R.hosts) { try { R.hosts = hostsOf(W()); } catch (e) { console.error(e); R.hosts = []; } } return R.hosts; };
  function finishSketch() {
    const pts = R.pts.slice(), tool = A.S.tool;
    R.pts = [];
    if (pts.length < 3) { hintNow(); return; }
    if (polyProblem(pts)) { say('err.outline', null, true); return; }
    if (tool === 'shaft') {
      const ls = A.S.data.levels, base = R.shaft.base || levelGuid(), top = R.shaft.top || (ls[ls.length - 1]?.guid);
      const spec = { kind: 'shaft', storey: levelGuid(), points: pts, base, top, baseOffset: R.shaft.baseOffset, topOffset: R.shaft.topOffset };
      let n = 0;
      try { n = cutsOf(W(), { ...spec, points: pts }, hosts(), ls).length; } catch (e) { n = 0; }
      A.commit(OP.placeShaft(spec), meta('shaft', 'placed'));
      say(n ? 'shaft.cuts' : 'shaft.nocut', { n });
      return;
    }
    // a vertical opening: the one floor, ceiling or roof of this level the sketch lies on most
    const want = R.vop.cut, lv = level();
    const cand = hosts().filter((h) => (want === 'floor' ? (h.kind === 'floor' || h.kind === 'drawnfloor') : h.kind === want) && (h.storey === lv.id || h.hostStorey === lv.id))
      .map((h) => ({ h, a: overlapArea(h.outline, pts) })).filter((x) => x.a > 1).sort((x, y) => y.a - x.a);
    if (!cand.length) { say('vopening.nohost', { what: t('cut.' + want) }); return; }
    A.commit(OP.placeShaft({ kind: 'vertical', storey: levelGuid(), points: pts, host: cand[0].h.guid }), meta('vopening', 'placed'));
    say(cand[0].a < absArea(pts) - 1 ? 'vopening.part' : 'vopening.cut', { what: t('cut.' + want), area: fmtArea(cand[0].a, A.units()) });
  }
  // ---- groups ----
  const keyGuid = () => {
    const k = A.kb(), m = new Map();
    for (const x of A.S.data?.walls || []) m.set(k + x.id, x.guid);
    return m;
  };
  /** GlobalIds of what is picked that a group can hold (walls, and what the other tools made: columns, drawn floors, …). */
  function pickedGuids() {
    const p = modelUi.pickedElements?.() || { walls: [], ext: [] };
    const byKey = keyGuid(), direct = A.selectedKeys().map((k) => byKey.get(k)).filter(Boolean);   // walls by their own keys, whatever else claims them
    return [...new Set([...direct, ...(p.walls || []), ...(p.ext || []).filter((q) => !['bound', 'area', 'tag', 'shaft'].includes(q.it.kind)).map((q) => q.it.guid).filter(Boolean)])];
  }
  const groupOfSelection = () => {
    const keys = A.selectedKeys(), k = A.kb();
    const gs = new Set(keys.map((key) => R.groups.find((g) => g.members.some((id) => k + id === key))).filter(Boolean));
    return gs.size === 1 ? [...gs][0] : null;
  };
  const membersKeys = (g) => g.members.map((id) => A.kb() + id);
  function makeGroupNow() {
    if (A.S.tool === 'mgroup' && R.group.keys?.length) A.host.select(R.group.keys);
    const guids = pickedGuids();
    if (!guids.length) { say('group.pickfirst'); return; }
    const before = new Set(R.groups.map((g) => g.guid));
    A.commit(OP.groupOp({ name: R.group.name, members: guids }), meta('group', 'made', A.selectedKeys()));
    const g = R.groups.find((x) => !before.has(x.guid));
    if (g) { say('group.made', { name: g.name, n: g.members.length }); R.group.name = ''; syncRows(); }
  }
  function placeGroupAt(p) {
    const g = R.groups.find((x) => x.guid === R.group.placing);
    if (!g) { R.group.placing = null; return; }
    A.commit(OP.placeInstanceOp({ group: g.guid, dx: p[0] - g.origin[0], dy: p[1] - g.origin[1] }), meta('group', 'placed'));
    say('group.placed', { name: g.name, n: R.groups.filter((x) => x.definition === g.definition).length });
  }

  // ------------------------------------------------------------------------------------------------------------ option rows
  const bar = document.querySelector('[data-mopts="wall"]')?.parentElement;
  const text = (attr, get, set, label, size = 10) => { const i = el('input', { type: 'text', className: 'bc-input', size, [attr]: '', 'aria-label': label }); i.addEventListener('change', () => set(i.value)); i._get = get; return el('label', { className: 'bc-mb-field' }, el('span', {}, label + ' '), i); };
  const lenIn = (attr, get, set, label, { any = false } = {}) => {
    const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 6, [attr]: '', 'aria-label': label });
    i.addEventListener('change', () => { const mm = parseLen(i.value, A.units()); if (!Number.isFinite(mm) || (!any && mm < 0)) { A.host.status(A.t('model.err.length'), true); syncRows(); return; } set(mm); syncRows(); });
    i._get = () => L(get());
    return el('label', { className: 'bc-mb-field' }, el('span', {}, label + ' '), i);
  };
  const sel = (attr, options, get, set, label) => { const s = el('select', { className: 'bc-mb-select', [attr]: '', 'aria-label': label }, ...options().map(([v, l]) => el('option', { value: v }, l))); s.addEventListener('change', () => { set(s.value); syncRows(); hintNow(); }); s._get = get; s._opts = options; return el('label', { className: 'bc-mb-field' }, el('span', {}, label + ' '), s); };
  const btn = (attr, label, fn) => { const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', [attr]: '' }, label); b.addEventListener('click', fn); return b; };
  const rows = {};
  function buildRows() {
    if (!bar || rows.room) return;   // built once (a layout may move the rows out of the bar: they are still these)
    const schemes = () => SCHEMES.map((s) => [s, t('scheme.' + s)]);
    const levels = () => (A.S.data?.levels || []).map((l) => [l.guid, l.name]);
    const mk = (name, ...kids) => { rows[name] = el('div', { className: 'bc-modelbar-row', 'data-mopts': name, hidden: true }, ...kids); bar.append(rows[name]); };
    mk('room', text('data-sp-rname', () => R.room.name, (v) => { R.room.name = v; }, t('f.name'), 14), text('data-sp-rnum', () => R.room.number, (v) => { R.room.number = v; }, t('f.number'), 6));
    mk('roomsep');
    mk('tagroom', lenPaper('data-sp-paper'), btn('data-sp-tagall', t('tag.allbtn'), () => tagAll('room')));
    mk('area', sel('data-sp-scheme', schemes, () => R.area.scheme, (v) => { R.area.scheme = v; }, t('f.scheme')), text('data-sp-aname', () => R.area.name, (v) => { R.area.name = v; }, t('f.name'), 14),
      text('data-sp-anum', () => R.area.number, (v) => { R.area.number = v; }, t('f.number'), 6), text('data-sp-atype', () => R.area.type, (v) => { R.area.type = v; }, t('f.type'), 10));
    mk('areabound', sel('data-sp-bscheme', schemes, () => R.bound.scheme, (v) => { R.bound.scheme = v; }, t('f.scheme')),
      sel('data-sp-pick', () => [['draw', t('pick.draw')], ['centre', t('pick.centre')], ['face', t('pick.face')]], () => R.bound.pick, (v) => { R.bound.pick = v; R.chain = null; }, t('f.pick')));
    mk('tagarea', lenPaper('data-sp-apaper'), btn('data-sp-atagall', t('tag.allbtn'), () => tagAll('area')));
    mk('shaft', sel('data-sp-base', levels, () => R.shaft.base || levelGuid(), (v) => { R.shaft.base = v; }, t('f.base')), lenIn('data-sp-baseoff', () => R.shaft.baseOffset, (mm) => { R.shaft.baseOffset = mm; }, t('f.baseoff'), { any: true }),
      sel('data-sp-top', levels, () => R.shaft.top || (A.S.data?.levels.at(-1)?.guid), (v) => { R.shaft.top = v; }, t('f.top')), lenIn('data-sp-topoff', () => R.shaft.topOffset, (mm) => { R.shaft.topOffset = mm; }, t('f.topoff'), { any: true }));
    mk('vopening', sel('data-sp-cut', () => [['floor', t('cut.floor')], ['ceiling', t('cut.ceiling')], ['roof', t('cut.roof')]], () => R.vop.cut, (v) => { R.vop.cut = v; }, t('f.cut')));
    mk('mgroup', text('data-sp-gname', () => R.group.name, (v) => { R.group.name = v; const g = groupOfSelection(); if (g && v.trim()) { A.commit(OP.renameGroupOp(g.guid, v.trim()), meta('group', 'renamed', A.selectedKeys())); R.group.name = ''; } }, t('f.gname'), 14),
      btn('data-sp-gmake', t('group.makebtn'), makeGroupNow),
      btn('data-sp-gplace', t('group.placebtn'), () => { const g = groupOfSelection(); if (!g) { say('group.pickone'); return; } const why = groupWhy(g); if (why) { say(why.replace('spaces.', '')); return; } R.group.placing = g.guid; hintNow(); }),
      btn('data-sp-gadd', t('group.addbtn'), () => { const g = lastGroup(); const extra = pickedGuids(); if (!g || !extra.length) { say('group.pickone'); return; } A.commit(OP.addToGroupOp(g.guid, extra), meta('group', 'changed', A.selectedKeys())); }),
      btn('data-sp-gungroup', t('group.ungroupbtn'), () => { const g = groupOfSelection(); if (!g) { say('group.pickone'); return; } A.commit(OP.ungroupOp([g.guid]), meta('group', 'changed', A.selectedKeys())); say('group.ungrouped', { name: g.name }); }),
      el('span', { className: 'bc-sub', 'data-sp-ginfo': '' }, ''));
  }
  function lenPaper(attr) {
    const i = el('input', { type: 'text', className: 'bc-input bc-num', size: 5, [attr]: '', 'aria-label': t('f.paper') });
    i.addEventListener('change', () => { const v = Number(String(i.value).replace(',', '.').replace(/[^\d.]/g, '')); if (v >= 0.5 && v <= 50) R.tag.paper = v; else say('tag.paperrange'); syncRows(); });
    i._get = () => String(R.tag.paper);
    return el('label', { className: 'bc-mb-field' }, el('span', {}, t('f.paper') + ' '), i, el('span', {}, ' mm'));
  }
  let lastG = null;
  const lastGroup = () => R.groups.find((g) => g.guid === lastG) || null;
  function groupWhy(g) { try { return copyProblem(describe(W(), g.members)); } catch (e) { return 'spaces.group.why.other'; } }
  function syncRows() {
    buildRows();
    for (const r of Object.values(rows)) for (const c of r.querySelectorAll('input, select')) {
      if (c._opts) { const want = c._opts(); if (want.map((o) => o[0]).join() !== [...c.options].map((o) => o.value).join()) c.replaceChildren(...want.map(([v, l]) => el('option', { value: v }, l))); }
      if (c._get && document.activeElement !== c) c.value = c._get() ?? '';
    }
    const g = A.S.tool === 'mgroup' ? groupOfSelection() : null;
    if (g) lastG = g.guid;
    const info = rows.mgroup?.querySelector('[data-sp-ginfo]');
    if (info) info.textContent = g ? t('group.info', { name: g.name, n: g.members.length, k: R.groups.filter((x) => x.definition === g.definition).length }) : '';
  }

  // ------------------------------------------------------------------------------------------------------------- the plan
  const seg = (a, b) => [a[0], a[1], b[0], b[1]];
  const ring = (p) => p.map((q, i) => seg(q, p[(i + 1) % p.length]));
  function tagSymbol(tag, target, scale, areaText, key) {
    const lines = tagLines(target, { area: areaText }), sz = tagSize(lines, tag.paper, scale || 100);
    const at0 = R.dragTag && R.dragTag.guid === tag.guid && R.dragTag.at ? R.dragTag.at : [target.seed[0] + tag.offset[0], target.seed[1] + tag.offset[1]];
    const y0 = at0[1] + (lines.length - 1) * sz.gap / 2;
    return { key, lines: [], thin: [], texts: lines.map((text, i) => ({ p: [at0[0], y0 - i * sz.gap], h: i === 0 ? sz.hgt : sz.hgt * 0.85, text })), box: [at0[0] - sz.w / 2, at0[1] - sz.h / 2, at0[0] + sz.w / 2, at0[1] + sz.h / 2], at: at0 };
  }
  function scene(sc) {
    if (sc.kind === 'rcp') return;
    const k = A.kb(), lv = A.S.level, scale = sc.scale || 100;
    const mine = SPACE_TOOLS.includes(A.S.tool);
    // boundary lines: separators long-dashed, area boundaries (shown while a room or area tool is in hand, or when picked) dotted
    const selKeys = new Set(A.selectedKeys());
    for (const b of R.bounds.filter((x) => x.storey === lv)) {
      if (b.kind === 'area' && !mine && !selKeys.has(k + b.id)) continue;
      sc.symbols.push({ key: k + b.id, lines: [], thin: [], dashed: [seg(b.a, b.b)], poly: [b.a, b.b, b.a], bound: b.kind });
    }
    // tags replace the plain label of the room they name
    const tagged = new Map(R.tags.filter((x) => x.storey === lv).map((x) => [x.target, x]));
    for (const sp of spaces()) {
      const tag = tagged.get(sp.guid);
      if (!tag) continue;
      const r = (sc.rooms || []).find((x) => x.key === k + sp.id), loop = A.S.loops && loopAt(A.S.loops.rooms, sp.seed);
      if (r) r.label = null;
      sc.symbols.push(tagSymbol(tag, sp, scale, loop ? fmtArea(loop.area, A.units()) : '', k + tag.id));
    }
    for (const a of R.areas.filter((x) => x.storey === lv)) {
      const tag = tagged.get(a.guid), areaText = a.enclosed ? fmtArea(a.area, A.units()) : t('area.notenclosed');
      if (tag) sc.symbols.push(tagSymbol(tag, a, scale, areaText, k + tag.id));
      if (!mine && !selKeys.has(k + a.id)) continue;
      // while an area tool is in hand: the area itself can be picked (its outline) and an untagged one says what it is
      const loop = a.enclosed ? loopAt(areaLoopsHere(a.scheme), a.seed) : null;
      const sz = tagSize(['x'], 2, scale);
      sc.symbols.push({ key: k + a.id, lines: [], thin: [], roof: true, poly: loop ? loop.poly : [[a.seed[0] - 300, a.seed[1] - 300], [a.seed[0] + 300, a.seed[1] - 300], [a.seed[0] + 300, a.seed[1] + 300], [a.seed[0] - 300, a.seed[1] + 300]],
        texts: tag ? [] : [{ p: [a.seed[0], a.seed[1] - sz.gap * 2], h: sz.hgt, text: [a.number, a.name, areaText].filter(Boolean).join(' · ') }] });
    }
    // shafts and vertical openings: their outline and a cross, on every level they cut (a shaft: every level in its range)
    const ls = A.S.data?.levels || [], me = ls.find((l) => l.id === lv);
    for (const s of R.shafts) {
      if (s.points.length < 3 || !me) continue;
      let here = s.storey === me.guid;
      if (s.kind === 'shaft') { const b = ls.find((l) => l.guid === s.base), tp = ls.find((l) => l.guid === s.top); here = !!(b && tp && me.elevation >= Math.min(b.elevation + s.baseOffset, tp.elevation + s.topOffset) - 1 && me.elevation <= Math.max(b.elevation + s.baseOffset, tp.elevation + s.topOffset) + 1); }
      if (!here) continue;
      const xs = s.points.map((q) => q[0]), ys = s.points.map((q) => q[1]), bx = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
      const cross = s.points.length === 4 ? [seg(s.points[0], s.points[2]), seg(s.points[1], s.points[3])] : [[bx[0], bx[1], bx[2], bx[3]], [bx[0], bx[3], bx[2], bx[1]]];
      sc.symbols.push({ key: k + s.id, lines: ring(s.points), thin: s.kind === 'shaft' ? cross : [cross[0]], poly: s.points, shaft: s.kind });
    }
  }
  /** While Model Group is in hand a click is for elements: the lines, tags and outlines drawn here are shown but not picked. */
  function sceneFor(sc) {
    const n0 = sc.symbols.length;
    scene(sc);
    if (A.S.tool === 'mgroup') for (let i = n0; i < sc.symbols.length; i++) { delete sc.symbols[i].poly; delete sc.symbols[i].box; }
  }
  function overlay(o) {
    const tool = A.S.tool;
    if (!SPACE_TOOLS.includes(tool)) return;
    const h = R.hover;
    if (tool === 'room' || tool === 'tagroom') {
      const hit = h && roomAt(h);
      if (hit) { o.walls.push(hit.loop.poly); o.hud = { p: h, text: [hit.sp ? [hit.sp.number, hit.sp.name].filter(Boolean).join(' ') : '', fmtArea(hit.loop.area, A.units()), L(hit.loop.perimeter), fmtVol(hit.loop.area * heightOf(A.S.level))].filter(Boolean).join('\n') }; }
    } else if (tool === 'area' || tool === 'tagarea') {
      const hit = h && (tool === 'area' ? areaAt(h, R.area.scheme) : ['gross', 'rentable'].map((s) => areaAt(h, s)).filter((x) => x?.area)[0]);
      if (hit) { o.walls.push(hit.loop.poly); o.hud = { p: h, text: [hit.area?.name || '', fmtArea(hit.loop.area, A.units())].filter(Boolean).join('\n') }; }
    } else if (tool === 'roomsep' || (tool === 'areabound' && R.bound.pick === 'draw')) {
      if (h) o.snap = { p: h, kind: 'free' };
      if (R.chain) { o.points.push(R.chain); if (h) { o.lines.push(seg(R.chain, h)); o.hud = { p: h, text: L(Math.hypot(h[0] - R.chain[0], h[1] - R.chain[1])) }; } }
    } else if (tool === 'shaft' || tool === 'vopening') {
      if (h) o.snap = { p: h, kind: 'free' };
      if (R.pts.length) {
        const pts = h ? [...R.pts, h] : R.pts;
        if (pts.length >= 3) o.walls.push(pts);
        for (let i = 0; i + 1 < pts.length; i++) o.lines.push(seg(pts[i], pts[i + 1]));
        for (const q of R.pts) o.points.push(q);
        if (h) o.hud = { p: h, text: L(Math.hypot(h[0] - R.pts.at(-1)[0], h[1] - R.pts.at(-1)[1])) + (pts.length >= 3 ? '\n' + fmtArea(absArea(pts), A.units()) : '') };
      }
    } else if (tool === 'mgroup' && R.group.placing && h) {
      const g = R.groups.find((x) => x.guid === R.group.placing);
      if (g) { try { const d = describe(W(), g.members); if (d.box) { const dx = h[0] - g.origin[0], dy = h[1] - g.origin[1]; o.walls.push([[d.box[0] + dx, d.box[1] + dy], [d.box[2] + dx, d.box[1] + dy], [d.box[2] + dx, d.box[3] + dy], [d.box[0] + dx, d.box[3] + dy]]); } } catch (e) { /* nothing to show */ } }
    }
  }

  const tagHit = (p) => {
    const keys = A.selectedKeys(), k = A.kb();
    if (keys.length !== 1) return null;
    const tag = R.tags.find((x) => k + x.id === keys[0]);
    if (!tag) return null;
    const target = tag.kind === 'area' ? R.areas.find((a) => a.guid === tag.target) : spaces().find((s) => s.guid === tag.target);
    if (!target) return null;
    const sym = tagSymbol(tag, target, A.viewRange?.()?.scale || 100, '0', 0);
    return p[0] >= sym.box[0] && p[0] <= sym.box[2] && p[1] >= sym.box[1] && p[1] <= sym.box[3] ? { tag, target, grab: [p[0] - sym.at[0], p[1] - sym.at[1]] } : null;
  };

  let extSelf = null;
  A = modelUi.extend(extSelf = {
    tools: SPACE_TOOLS,
    hint: (name) => 'spaces.hint.' + name,
    typed: () => false,
    classes: /^Ifc(VirtualElement|Annotation|Group|Space)$/,
    move(p, e) {
      const tool = A.S.tool;
      R.hover = tool === 'roomsep' || (tool === 'areabound' && R.bound.pick === 'draw') ? at(p, e, R.chain) : tool === 'shaft' || tool === 'vopening' ? at(p, e, R.pts.at(-1) || null) : p;
    },
    click(p, e) {
      const tool = A.S.tool;
      if (!level()) return;
      // a field of the row keeps the keyboard after a click on the plan (the canvas takes no focus): give it back, so Enter and Esc reach the tool
      { const f = document.activeElement; if (f && f !== document.body && f.closest?.('[data-mopts]')) f.blur(); }
      if (tool === 'room') clickRoom(p);
      else if (tool === 'roomsep') clickLine(p, e, 'room');
      else if (tool === 'areabound') { if (R.bound.pick === 'draw') clickLine(p, e, 'area'); else clickPickWall(p, e); }
      else if (tool === 'area') clickArea(p);
      else if (tool === 'tagroom') clickTag(p, 'room');
      else if (tool === 'tagarea') clickTag(p, 'area');
      else if (tool === 'shaft' || tool === 'vopening') {
        const q = at(p, e, R.pts.at(-1) || null);
        if (R.pts.length >= 3 && Math.hypot(q[0] - R.pts[0][0], q[1] - R.pts[0][1]) < A.pv().pxToMm(8)) { finishSketch(); return; }
        R.pts.push(q);
      } else if (tool === 'mgroup') {
        if (R.group.placing) { placeGroupAt(p); return; }
        // a click picks the whole group the element is in (or adds / takes the element with Ctrl or Shift, to gather members)
        const key = e && e.clientX !== undefined ? A.pv().hit(e.clientX, e.clientY) : null;
        if (key === null) { A.host.select([]); syncRows(); return; }
        const g = R.groups.find((x) => x.members.some((id) => A.kb() + id === key));
        // what this tool picked last is kept here: a layout may clear the pick as the pointer goes down, before the click is heard
        const cur = new Set(A.selectedKeys().length ? A.selectedKeys() : R.group.keys || []);
        if (e && (e.ctrlKey || e.metaKey || e.shiftKey)) { if (cur.has(key)) cur.delete(key); else cur.add(key); R.group.keys = [...cur]; }
        else R.group.keys = g ? membersKeys(g) : [key];
        A.host.select(R.group.keys);
        { const keep = R.group.keys; setTimeout(() => { if (A.S.tool === 'mgroup' && R.group.keys === keep && A.selectedKeys().join() !== keep.join()) { A.host.select(keep); syncRows(); } }, 0); }   // a ribbon layout's own click picks one element after this: the gathered pick is put back
        syncRows();
      }
      hintNow();
    },
    dbl() { if (A.S.tool === 'shaft' || A.S.tool === 'vopening') finishSketch(); else if (R.chain) { R.chain = null; hintNow(); } },
    key(e) {
      const tool = A.S.tool;
      if ((tool === 'shaft' || tool === 'vopening') && e.key === 'Enter' && R.pts.length) { finishSketch(); return true; }
      if ((tool === 'shaft' || tool === 'vopening') && e.key === 'Backspace' && R.pts.length) { R.pts.pop(); return true; }
      if ((tool === 'roomsep' || tool === 'areabound') && e.key === 'Enter' && R.chain) { R.chain = null; hintNow(); return true; }
      if (tool === 'mgroup' && e.key === 'Enter' && !R.group.placing) { makeGroupNow(); return true; }
      return false;
    },
    escape() {
      const tool = A.S.tool;
      if ((tool === 'shaft' || tool === 'vopening') && R.pts.length) { R.pts = []; hintNow(); return true; }
      if ((tool === 'roomsep' || tool === 'areabound') && R.chain) { R.chain = null; hintNow(); return true; }
      if (tool === 'mgroup' && R.group.placing) { R.group.placing = null; hintNow(); return true; }
      return false;
    },
    toolChanged(name) {
      R.pts = []; R.chain = null; R.hover = null; R.group.placing = null;
      R.group.keys = null;
      if (SPACE_TOOLS.includes(name)) {
        const d = document.querySelector('[data-space-tools]'); if (d?.open) d.open = false;
        // Model Group with elements already picked: they become a group at once
        if (name === 'mgroup' && A.ed() && pickedGuids().length && !groupOfSelection()) makeGroupNow();
        hintNow();
      }
      syncRows();
      if (A.pv?.() && A.S.on) A.buildScene();   // area boundaries show only while one of these tools is in hand
    },
    refresh() {
      read(); syncRows();
      const kinds = A.root.querySelector('[data-msched-kind]');
      if (kinds && !kinds.querySelector('option[value="areas"]')) kinds.append(el('option', { value: 'areas', 'data-spaces': '' }, t('sched.areas')));
    },
    picked() { if (A.S.tool === 'mgroup') syncRows(); },
    scene: sceneFor, overlay,
    roomProps(d, kit) {
      const loop = kit.loop;
      if (loop) kit.rows.push(el('dt', {}, t('f.volume')), el('dd', { 'data-mp-rvol': '' }, fmtVol(loop.area * heightOf(d.storey))));
      const tag = R.tags.find((x) => x.target === d.guid);
      kit.rows.push(el('dt', {}, t('f.tag')), el('dd', {}, tag ? t('tag.has') : btn('data-mp-rtag', t('tag.addbtn'), () => A.commit(OP.placeTags([{ target: d.guid, paper: R.tag.paper }]), meta('tag.room', 'placed')))));
    },
    down(p) { const hit = tagHit(p); if (!hit) return false; R.dragTag = { guid: hit.tag.guid, grab: hit.grab, target: hit.target, at: null }; return true; },
    drag(p) { if (R.dragTag) { R.dragTag.at = [p[0] - R.dragTag.grab[0], p[1] - R.dragTag.grab[1]]; A.buildScene(); } },
    up(p, e, { moved, cancel }) {
      const d = R.dragTag; R.dragTag = null;
      if (!d) return;
      if (!d.at || !moved || cancel) { A.buildScene(); return; }
      const tag = R.tags.find((x) => x.guid === d.guid);
      A.commit(OP.moveTag(d.guid, { offset: [d.at[0] - d.target.seed[0], d.at[1] - d.target.seed[1]] }), meta('tag.' + (tag?.kind || 'room'), 'moved', A.selectedKeys()));
    },
    pick(key) {
      const k = A.kb();
      const b = R.bounds.find((x) => k + x.id === key);
      if (b) return { kind: 'bound', guid: b.guid, label: t(b.kind === 'area' ? 'areabound' : 'separator') };
      const a = R.areas.find((x) => k + x.id === key);
      if (a) return { kind: 'area', guid: a.guid, label: a.name || t('area') };
      const tg = R.tags.find((x) => k + x.id === key);
      if (tg) return { kind: 'tag', guid: tg.guid, label: t('tag.' + tg.kind) };
      const s = R.shafts.find((x) => k + x.id === key);
      if (s) return { kind: 'shaft', guid: s.guid, label: s.name || t(s.kind === 'shaft' ? 'shaft' : 'vopening') };
      return null;
    },
    props(items, kit) {
      const it = items[0], same = items.every((x) => x.kind === it.kind);
      if (!same) return null;
      const txt = (value, attr, fn) => { const i = el('input', { type: 'text', className: 'bc-input', value, [attr]: '' }); i.addEventListener('change', () => { if (i.value.trim()) fn(i.value.trim()); else i.value = value; }); return i; };
      if (it.kind === 'bound') {
        const list = items.map((x) => R.bounds.find((b) => b.guid === x.guid)).filter(Boolean);
        if (!list.length) return null;
        const b = list[0];
        if (b.kind === 'area') kit.rows.push(el('dt', {}, t('f.scheme')), el('dd', {}, t('scheme.' + (b.scheme || 'gross'))));
        kit.rows.push(el('dt', {}, t('f.length')), el('dd', { 'data-mp-blen': '' }, L(list.reduce((s, x) => s + Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1]), 0))));
        if (b.wall && b.wall !== '-') kit.rows.push(el('dt', {}, t('f.follows')), el('dd', {}, t('bound.follows.' + b.face)));
        return { title: items.length > 1 ? t('bound.many', { n: items.length }) : t(b.kind === 'area' ? 'areabound' : 'separator') };
      }
      if (items.length !== 1) return null;
      if (it.kind === 'area') {
        const a = R.areas.find((x) => x.guid === it.guid);
        if (!a) return null;
        const run = (ch) => A.commit(OP.changeAreaOp(a.guid, ch), kit.one(t('area')));
        kit.field(t('f.name'), txt(a.name, 'data-mp-aname', (v) => run({ name: v })));
        kit.field(t('f.number'), txt(a.number, 'data-mp-anum', (v) => run({ number: v })));
        kit.field(t('f.type'), txt(a.type, 'data-mp-atype', (v) => run({ type: v })));
        kit.rows.push(el('dt', {}, t('f.scheme')), el('dd', {}, t('scheme.' + a.scheme)), el('dt', {}, t('f.area')), el('dd', { 'data-mp-aarea': '' }, a.enclosed ? fmtArea(a.area, A.units()) : t('area.notenclosed')),
          el('dt', {}, t('f.perimeter')), el('dd', {}, a.enclosed ? L(a.perimeter) : ''));
        if (!a.enclosed) kit.rows.push(el('dt', {}, ''), el('dd', { className: 'bc-sub', 'data-mp-aopen': '' }, t('area.open', { scheme: t('scheme.' + a.scheme) })));
        if (!R.tags.some((x) => x.target === a.guid)) kit.field(t('f.tag'), kit.button(t('tag.addbtn'), 'data-mp-atag', () => A.commit(OP.placeTags([{ target: a.guid, paper: R.tag.paper }]), meta('tag.area', 'placed'))));
        return { title: t('area') };
      }
      if (it.kind === 'tag') {
        const tg = R.tags.find((x) => x.guid === it.guid);
        if (!tg) return null;
        const p = el('input', { type: 'text', className: 'bc-input bc-num', value: String(tg.paper), 'data-mp-tpaper': '', size: 5 });
        p.addEventListener('change', () => { const v = Number(String(p.value).replace(',', '.')); if (v >= 0.5 && v <= 50) A.commit(OP.moveTag(tg.guid, { paper: v }), kit.one(t('tag.' + tg.kind))); else { say('tag.paperrange'); p.value = String(tg.paper); } });
        kit.field(t('f.paper') + ' (mm)', p);
        kit.rows.push(el('dt', {}, t('f.says')), el('dd', { 'data-mp-ttext': '' }, tg.text.split('\n').join(' · ')));
        kit.field('', kit.button(t('tag.centre'), 'data-mp-tcentre', () => A.commit(OP.moveTag(tg.guid, { offset: [0, 0] }), kit.one(t('tag.' + tg.kind)))));
        return { title: t('tag.' + tg.kind) };
      }
      if (it.kind === 'shaft') {
        const s = R.shafts.find((x) => x.guid === it.guid);
        if (!s) return null;
        const run = (ch) => A.commit(OP.changeShaftOp(s.guid, ch), kit.one(t(s.kind === 'shaft' ? 'shaft' : 'vopening')));
        const ls = (A.S.data?.levels || []).map((l) => [l.guid, l.name]);
        kit.field(t('f.name'), txt(s.name, 'data-mp-sname', (v) => run({ name: v })));
        if (s.kind === 'shaft') {
          kit.field(t('f.base'), kit.select(ls, s.base, 'data-mp-sbase', (v) => run({ base: v })));
          kit.field(t('f.baseoff'), kit.lenInput(s.baseOffset, 'data-mp-sbaseoff', (mm) => run({ baseOffset: mm }), { any: true }));
          kit.field(t('f.top'), kit.select(ls, s.top, 'data-mp-stop', (v) => run({ top: v })));
          kit.field(t('f.topoff'), kit.lenInput(s.topOffset, 'data-mp-stopoff', (mm) => run({ topOffset: mm }), { any: true }));
        }
        kit.rows.push(el('dt', {}, t('f.outline')), el('dd', { 'data-mp-sarea': '' }, fmtArea(absArea(s.points), A.units())), el('dt', {}, t('f.cuts')), el('dd', { 'data-mp-scuts': '' }, t('shaft.cutsn', { n: new Set(s.openings.map((o) => o.host)).size })),
          el('dt', {}, t('f.deducted')), el('dd', { 'data-mp-sded': '' }, fmtArea(s.openings.reduce((x, o) => x + o.area, 0), A.units())));
        return { title: t(s.kind === 'shaft' ? 'shaft' : 'vopening') };
      }
      return null;
    },
    remove(items) {
      const of = (kind) => items.filter((x) => x.kind === kind).map((x) => x.guid);
      const ops = [of('bound').length && OP.removeBounds(of('bound')), of('area').length && OP.removeAreas(of('area')), of('tag').length && OP.removeTags(of('tag')), of('shaft').length && OP.removeShaftsOp(of('shaft'))].filter(Boolean);
      return (ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: A.mergeJournals(r.journal, r2.journal) } : r2; } return r || { id: null, ids: [] }; };
    },
    schedules() {
      const lv = new Map((A.S.data?.levels || []).map((l) => [l.id, l.name]));
      const list = R.areas.slice().sort((a, b) => a.scheme.localeCompare(b.scheme) || String(lv.get(a.storey)).localeCompare(String(lv.get(b.storey))) || a.number.localeCompare(b.number, undefined, { numeric: true }));
      const total = list.reduce((s, a) => s + a.area, 0);
      R.schedList = list;
      return { areas: { title: t('sched.areas'), head: [t('f.scheme'), t('f.number'), t('f.name'), t('f.type'), t('sched.level'), t('f.area'), t('f.perimeter')],
        rows: list.map((a) => [t('scheme.' + a.scheme), a.number, a.name, a.type, lv.get(a.storey) || '', a.enclosed ? fmtArea(a.area, A.units()) : t('area.notenclosed'), a.enclosed ? L(a.perimeter) : '']),
        nums: list.map((a) => [a.area, a.perimeter]), total: [t('sched.total'), '', '', '', '', fmtArea(total, A.units()), ''], note: t('sched.areas.note') } };
    },
    scheduleKeys: (name, i) => (name === 'areas' && R.schedList?.[i] ? [A.kb() + R.schedList[i].id] : []),
  });
  // In the ribbon layouts the plan's own key handler is off (model-ui.js: ws-active) and the layout's Esc ends the tool. These tools
  // need Enter (finish), Backspace (one corner back) and a first Esc that drops only what is half drawn, there as in classic.
  const X = () => extSelf;
  window.addEventListener('keydown', (e) => {
    if (!A.S.on || !A.root.classList.contains('ws-active') || !SPACE_TOOLS.includes(A.S.tool) || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.target.closest?.('input, textarea, select, [contenteditable="true"], dialog') || document.querySelector('dialog[open]')) return;
    const did = e.key === 'Escape' ? X().escape() : (e.key === 'Enter' || e.key === 'Backspace') ? X().key(e) : false;
    if (did) { e.preventDefault(); e.stopImmediatePropagation(); A.drawOverlay(); }
  }, true);
  // the words on the buttons, the CadCraft icon set (DU.1) when it is loaded
  const sum = document.querySelector('[data-space-tools] > summary');
  if (sum) { sum.title = t('menu.title'); const sp = sum.querySelector('span'); if (sp) sp.textContent = t('menu'); }
  for (const name of SPACE_TOOLS) { const b = document.querySelector(`[data-mtool="${name}"]`); if (b) { b.title = t('tool.' + name + '.title'); const sp = b.querySelector('span'); if (sp) sp.textContent = t('tool.' + name); } }
  const icons = () => { const set = globalThis.ccIconSet; if (!set?.node) return; for (const i of document.querySelectorAll('[data-space-tools] i[data-ccic]')) { const n = set.node(i.dataset.ccic); if (n) { n.dataset.ccic = i.dataset.ccic; i.replaceWith(n); } } };
  icons(); globalThis.addEventListener?.('cc-icon-set', icons);
  buildRows();
  if (typeof window !== 'undefined') window.bimcraftSpaces = { state: R, read: () => { read(); return R; }, tagAll, makeGroupNow, finishSketch };
  return { state: R };
}
