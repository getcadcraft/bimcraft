// SPDX-License-Identifier: Apache-2.0
/**
 * draw-advice.js: advice at the moment of drawing (0.10 BK.73, "no roadblocks: checks advise and never block").
 *
 * Some drawing tools used to REFUSE a size outside what is usual in practice (a stair 400 mm wide, a riser of 320 mm, a column
 * 40 mm across, a ramp 250 mm wide, a door 80 mm wide). Those are judgements about good practice, not things that cannot exist,
 * so the tools now make what was asked and say so here; they still refuse only what cannot be built at all (under FLOOR mm, or
 * no number). The advice is a warning in the shared Problems panel (source "bimcraft.advice"), never an error and never a stop.
 *
 * No DOM and no app imports: Node tests, BimCraft and any host (SuperCad Studio) use the same file.
 *
 *   FLOOR, CEIL                      mm: under FLOOR or over CEIL nothing sensible can be built; that alone is refused
 *   USUAL                            the usual ranges, by kind (data: change a number here, nowhere else)
 *   stairAdvice(s) · spiralAdvice(s) · columnAdvice(c, height) · rampAdvice(r) · openingAdvice(op) · gridAdvice(len) · wallAdvice(len) ·
 *   levelAdvice(height) · dormerAdvice(d) · padAdvice(p) → [[code, vars]]   pure: what is unusual about it
 *   modelAdvice(model) → [advice]    all of them over a whole model (plain data): what Problems shows, also after a file is reopened
 *   advise(kind, items, about?)      record them (about = { id, label } of the element when it is known); → the advice records
 *   advice() · clearAdvice() · onAdvice(fn) → off()
 *   adviceProblems(list, t) → [problem]   the Problems shape (docs/0.8-PROBLEMS-SPEC.md): severity "warning", code advice.<kind>.<what>
 */
export const FLOOR = 10, CEIL = 100000;
export const USUAL = {
  stair: { width: [500, 5000], riser: [100, 300], tread: [150, 600] },
  spiral: { post: [40, 400], tread: 100 },
  column: { across: 50, tall: 300 },
  ramp: { width: 300 },
  opening: { size: 100 },
  grid: { length: 100 },
  wall: { length: 50 },
  level: { height: [1000, 100000] },
  dormer: { width: [600, 12000], height: [300, 4000], overhang: [0, 1000], wall: [50, 400] },
  pad: { slope: [1, 10] },
};
/** What is still refused for a building pad's side slope (run per rise): under 0.1 the bank is a wall, not graded ground; over 100
 *  the grading rings reach a hundred times the height difference and the ground mesh grows past what the page can hold. */
export const PAD_SLOPE = [0.1, 100];
/** A level's height: refused only under FLOOR or over 10 km (a slip of the keyboard that no drawing survives). */
export const LEVEL_MAX = 1e7;
const mm = (v) => Math.round(v);
const outside = (v, [lo, hi]) => !(v >= lo && v <= hi);

export function stairAdvice(s) {
  const out = [], U = USUAL.stair;
  if (outside(s.width, U.width)) out.push(['width', { is: mm(s.width), lo: U.width[0], hi: U.width[1] }]);
  if (outside(s.riserMax, U.riser)) out.push(['riser', { is: mm(s.riserMax), lo: U.riser[0], hi: U.riser[1] }]);
  if (outside(s.tread, U.tread)) out.push(['tread', { is: mm(s.tread), lo: U.tread[0], hi: U.tread[1] }]);
  return out;
}
export function columnAdvice(c, height) {
  const out = [], U = USUAL.column, across = c.shape === 'round' ? c.width : Math.min(c.width, c.depth);
  if (!(across >= U.across)) out.push(['across', { is: mm(across), lo: U.across }]);
  if (Number.isFinite(height) && !(height >= U.tall)) out.push(['tall', { is: mm(height), lo: U.tall }]);
  return out;
}
export const rampAdvice = (r) => (!(r.width >= USUAL.ramp.width) ? [['width', { is: mm(r.width), lo: USUAL.ramp.width }]] : []);
export const openingAdvice = (op) => (!(op.width >= USUAL.opening.size && op.height >= USUAL.opening.size) ? [['size', { w: mm(op.width), h: mm(op.height), lo: USUAL.opening.size }]] : []);

export const gridAdvice = (len) => (!(len >= USUAL.grid.length) ? [['short', { is: mm(len), lo: USUAL.grid.length }]] : []);
export const wallAdvice = (len) => (!(len >= USUAL.wall.length) ? [['short', { is: mm(len), lo: USUAL.wall.length }]] : []);
export const levelAdvice = (height) => (Number.isFinite(height) && height > 0 && outside(height, USUAL.level.height) ? [['height', { is: mm(height), lo: USUAL.level.height[0], hi: USUAL.level.height[1] }]] : []);
export function dormerAdvice(d) {
  const U = USUAL.dormer, off = ['width', 'height', 'overhang', 'wall'].filter((k) => outside(d[k], U[k]));
  return off.length ? [['size', { w: mm(d.width), h: mm(d.height), o: mm(d.overhang), t: mm(d.wall) }]] : [];
}
export function spiralAdvice(s) {
  const out = [], U = USUAL.spiral;
  if (outside(s.post, U.post)) out.push(['post', { is: mm(s.post), lo: U.post[0], hi: U.post[1] }]);
  if (!(s.tread >= U.tread)) out.push(['tread', { is: mm(s.tread), lo: U.tread }]);
  return out;
}
export const padAdvice = (p) => (outside(p.slope, USUAL.pad.slope) ? [['slope', { is: Math.round(p.slope * 100) / 100, lo: USUAL.pad.slope[0], hi: USUAL.pad.slope[1] }]] : []);

/**
 * Everything unusual in a model, from plain data (draw-advice-model.js reads it out of an IFC): the SAME rules as at the moment of
 * drawing, so the advice is there again when a file is opened and gone when the thing is put right.
 * m = { stairs, columns: [{..., h}], ramps, openings, grids: [{ axes }], walls: [{ guid, len }], levels: [{ guid, name, height }], dormers, pads }
 * → [{ code, kind, vars, part, about }] (at most `cap` of one kind)
 */
export function modelAdvice(m, cap = 40) {
  const out = [], per = {};
  const put = (kind, items, id, label) => { for (const [what, vars] of items) { per[kind] = (per[kind] || 0) + 1; if (per[kind] > cap) return; out.push({ code: 'advice.' + kind + '.' + what, kind, vars, part: String(id || '') + '|' + JSON.stringify(vars), about: id ? [{ kind: 'element', id: String(id), label: label || '' }] : [] }); } };
  for (const s of m.stairs || []) { if (s.kind === 'spiral') put('spiral', [...stairAdvice(s).filter(([c]) => c === 'riser'), ...spiralAdvice(s)], s.guid, 'Stair'); else put('stair', stairAdvice(s), s.guid, 'Stair'); }   // i18n-ignore: IFC names
  for (const c of m.columns || []) put('column', columnAdvice(c, c.h), c.guid, 'Column');
  for (const r of m.ramps || []) put('ramp', rampAdvice(r), r.guid, 'Ramp');
  for (const o of m.openings || []) put('opening', openingAdvice(o), o.guid, o.kind === 'window' ? 'Window' : 'Door');
  for (const g of m.grids || []) for (const x of g.axes || []) put('grid', gridAdvice(Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1])), g.guid, 'Grid ' + (x.tag || ''));
  for (const w of m.walls || []) put('wall', wallAdvice(w.len), w.guid, 'Wall');
  for (const l of m.levels || []) put('level', levelAdvice(l.height), l.guid, l.name || 'Level');
  for (const d of m.dormers || []) put('dormer', dormerAdvice(d), d.guid, 'Dormer');
  for (const p of m.pads || []) put('pad', padAdvice(p), p.guid, 'Building pad');
  return out;
}

let list = [], seq = 0;
const subs = new Set();
const tell = () => { for (const f of subs) { try { f(list.slice()); } catch (e) { /* a listener's own trouble never stops a drawing */ } } };
/** Record advice. The same advice about the same thing is kept once (a tool checks its sizes on every preview and again on the commit). */
export function advise(kind, items, about = null) {
  const made = [];
  for (const [what, vars] of items || []) {
    const code = 'advice.' + kind + '.' + what, part = (about?.id || '') + '|' + JSON.stringify(vars);
    list = list.filter((a) => !(a.code === code && a.part === part));
    const a = { code, kind, vars, part, about: about ? [{ kind: 'element', id: String(about.id), label: about.label || '' }] : [], n: ++seq };
    list.push(a); made.push(a);
  }
  if (list.length > 60) list = list.slice(-60);
  if (made.length) tell();
  return made;
}
export const advice = () => list.slice();
export function clearAdvice() { if (list.length) { list = []; tell(); } }
export function onAdvice(fn) { subs.add(fn); return () => subs.delete(fn); }

export function adviceProblems(items, t = (k) => k) {
  return (items || []).map((a) => ({ code: a.code, severity: 'warning', part: a.part, msg: { key: a.code, vars: a.vars }, text: t(a.code, a.vars), about: a.about, source: { name: 'bimcraft.advice' } }));
}
