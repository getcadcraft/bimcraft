/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/structure-ui.js — "MEP against the structure" in the Clash check (0.7 LC.9 item 4, session `mep-07`); bimcraft.js mounts it.
 *   - the clash sets ready to run on clash.js: Pipes and ducts, Walls, Slabs, Beams, Columns, Structure (all four) in both set
 *     lists, and [data-mep-clash] "Pipes and ducts × structure" picks them and runs the hard clash check;
 *   - [data-mep-gap] the gap round pipes and ducts (mm, typed; default 25) and [data-mep-soft] "Check clearances": soft clashes,
 *     an MEP part closer to the structure than its run's insulation + the gap ([data-mep-soft-row]);
 *   - [data-mep-openings] "Openings needed": where a run passes through a wall or a slab, the opening it needs (its outside size +
 *     2 × insulation + 2 × gap) and where, as a list ([data-mep-open-row]) and as CSV [data-mep-open-csv] and BCF [data-mep-open-bcf].
 *     Nothing is cut in the model.
 * ctx = { t, el, viewer(), models(), host() (the open model's federation entry), editor(), keyBase(), entryOf(key), nameOfKey(key),
 *         show(keys), status(text, isError), download(name, data, type), rerender(), fileName() }
 */
import { SETS, setKeys, clearances, openings, openingsCsv, openingTopics, DEFAULT_GAP } from './structure.js';
import { readRuns, systemLabel } from '../mep-model.js';
import { elementsOf } from '../clash.js';
import { ModelWriter } from '../model-write.js';
import { getDisplayUnits, lenMark } from '../model-units.js';   // GH.3-A: the gap in the display unit
import { writeBcf, newGuid } from '../bcf.js';

const SET_ORDER = ['mep', 'walls', 'slabs', 'beams', 'columns', 'structure'];

export function mountStructure(ctx) {
  const t = ctx.t, el = ctx.el;
  const S = { gap: String(DEFAULT_GAP), soft: null, open: null, msg: '' };
  const keysOf = (set) => { const out = []; for (const m of ctx.models()) out.push(...setKeys(m.model.classOf, set, m.model.keyBase)); return out; };
  /** The sets for the two lists (only those the open models have). */
  function sources() {
    const out = [];
    for (const k of SET_ORDER) { const ks = keysOf(k); if (ks.length) out.push({ value: 'mep:' + k, label: t('mep.st.set.' + k, { n: ks.length }), keys: () => keysOf(k) }); }
    return out;
  }
  const mats = () => { const m = new Map(), v = ctx.viewer(); for (const L of v.layers.values()) for (const bt of L.batches) m.set(bt, L.group.matrix.elements); return m; };
  const elems = (keys) => { const M = mats(), v = ctx.viewer(); return elementsOf(v.batches, keys, (bt) => M.get(bt)); };
  const gapMm = () => { const g = Number(String(S.gap).trim().replace(',', '.')); return Number.isFinite(g) && g >= 0 && g <= 1000 ? g : null; };
  /** The open model's runs and how to bring their plan points into the viewer's frame. */
  function frame() {
    const ent = ctx.host(), ed = ctx.editor();
    if (!ent || !ed) return null;
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    const C = ent.ifc.api.GetCoordinationMatrix(ent.model.modelID), Lm = ctx.viewer().modelMatrix(ent.mi), base = ent.model.keyBase || 0;
    const SW = new Map();
    const sw = (st) => { if (!SW.has(st)) SW.set(st, w.storeyWorld(st)); return SW.get(st); };
    const ap = (M, v) => [M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]];
    const worldMm = (st, p) => ap(sw(st), p);
    const toViewer = (st, p) => { const q = worldMm(st, p).map((x) => x / 1000); return ap(Lm || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], ap(C, [q[0], q[2], -q[1]])); };
    return { w, runs: readRuns(w), toViewer, worldMm, base, ent };
  }

  function soft() {
    const g = gapMm(), F = frame();
    if (g === null) { ctx.status(t('mep.st.err.gap'), true); return; }
    if (!F) return;
    const mepKeys = keysOf('mep'), stKeys = keysOf('structure');
    if (!mepKeys.length || !stKeys.length) { ctx.status(t('mep.st.empty'), true); return; }
    const ins = new Map();
    for (const r of F.runs) for (const id of r.parts) ins.set(F.base + id, r.insulation || 0);
    // a run through a wall is an opening, not a clearance
    const through = new Set(openingRows(F, g).map((o) => o.part + ':' + o.element));
    const res = clearances({ mep: elems(mepKeys), structure: elems(stKeys), gapMm: g, insulationOf: (k) => ins.get(k) || 0, skip: (a, b) => through.has(a + ':' + b) });
    S.soft = res; S.open = null;
    S.msg = t('mep.st.soft.found', { n: res.length });
    ctx.status(S.msg);
    ctx.rerender();
  }
  function openingRows(F, g) {
    const st = elems(keysOf('structure'));
    const cls = new Map();
    for (const m of ctx.models()) for (const [id, c] of m.model.classOf) cls.set(m.model.keyBase + id, c);
    for (const e of st) e.cls = cls.get(e.key);
    return openings({ runs: F.runs, structure: st, toViewer: F.toViewer, keyOf: (id) => F.base + id, gapMm: g });
  }
  function opens() {
    const g = gapMm(), F = frame();
    if (g === null) { ctx.status(t('mep.st.err.gap'), true); return; }
    if (!F) return;
    if (!F.runs.length) { ctx.status(t('mep.st.noruns'), true); return; }
    S.open = openingRows(F, g).map((r, i) => ({ ...r, n: i + 1, world: F.worldMm(r.storey, r.at) }));
    S.soft = null;
    S.msg = t('mep.st.open.found', { n: S.open.length });
    ctx.status(S.msg);
    ctx.rerender();
  }
  const levelName = (st) => { try { const l = ctx.editor().api.GetLine(ctx.editor().mid, st, false); return l?.Name?.value || ''; } catch (e) { return ''; } };
  const sizeText = (r) => (r.shape === 'round' ? 'Ø' + Math.round(r.w) : Math.round(r.w) + ' × ' + Math.round(r.h));   // i18n-ignore: size marks (mm)
  const guidOf = (k) => { const e = ctx.entryOf(k); if (!e) return null; try { return e.ifc.api.GetLine(e.model.modelID, k - e.model.keyBase, false)?.GlobalId?.value || null; } catch (x) { return null; } };
  function csv() {
    const head = [t('mep.st.c.n'), t('mep.st.c.run'), t('mep.system'), t('mep.size'), t('mep.insulation'), t('mep.st.c.opening'), t('mep.st.c.through'), t('mep.st.c.guid'), t('mep.st.c.level'), 'X', 'Y', 'Z', t('mep.st.c.length')];   // i18n-ignore: axis letters
    const r1 = (v) => Math.round(v);
    const data = openingsCsv(S.open, head, (r) => [r.n, t(r.kind === 'duct' ? 'mep.run.duct' : 'mep.run.pipe'), systemLabel(r.kind, r.system), r.sizeLabel, r1(r.insulation), sizeText(r), ctx.nameOfKey(r.element), guidOf(r.element) || '', levelName(r.storey), r1(r.at[0]), r1(r.at[1]), r1(r.at[2]), r1(r.through)]);
    ctx.download(base() + '-openings.csv', data, 'text/csv');
  }
  async function bcf() {
    const now = new Date().toISOString();
    const topics = openingTopics(S.open, {
      title: (r) => t('mep.st.bcf.title', { n: r.n, size: sizeText(r), what: ctx.nameOfKey(r.element) }),
      description: (r) => t('mep.st.bcf.desc', { run: t(r.kind === 'duct' ? 'mep.run.duct' : 'mep.run.pipe') + ' ' + r.sizeLabel + ' ' + systemLabel(r.kind, r.system), size: sizeText(r), ins: Math.round(r.insulation), gap: Math.round(r.gap), level: levelName(r.storey), x: Math.round(r.at[0]), y: Math.round(r.at[1]), z: Math.round(r.at[2]) }),
      author: ctx.author?.() || 'BimCraft', now, guidOf, worldOf: (r) => r.world.map((x) => x / 1000), newGuid,   // i18n-ignore: author fallback written into the file
    });
    const bytes = await writeBcf({ topics, file: { name: ctx.fileName() } });
    ctx.download(base() + '-openings.bcf', bytes, 'application/octet-stream');
  }
  const base = () => String(ctx.fileName() || 'model').replace(/\.[^.]+$/, '');

  /** The section under the Clash check's own rows. */
  function node(setPair) {
    const gap = el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', value: S.gap, size: 4, 'data-mep-gap': '' });
    gap.addEventListener('input', () => { S.gap = gap.value; });
    const kids = [
      el('h4', { className: 'bc-sub' }, t('mep.st.title')),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-mep-clash': '', onClick: () => setPair('mep:mep', 'mep:structure') }, t('mep.st.clash'))),
      el('label', {}, t('mep.st.gap'), gap),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-mep-soft': '', onClick: () => soft() }, t('mep.st.soft')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-mep-openings': '', onClick: () => opens() }, t('mep.st.open'))),
    ];
    if (S.soft) kids.push(el('ul', { className: 'bc-clash-results', 'data-mep-soft-list': '' }, S.soft.map((c, i) => el('li', {}, el('button', { type: 'button', className: 'bc-clash-row', 'data-mep-soft-row': String(i), onClick: () => ctx.show([c.a, c.b]) },
      el('span', {}, t('clash.row', { a: ctx.nameOfKey(c.a), b: ctx.nameOfKey(c.b) })), el('span', { className: 'n' }, t('mep.st.soft.gap.u', { gap: lenMark(c.gap * 1000, getDisplayUnits()), need: lenMark(c.need * 1000, getDisplayUnits()) })))))));
    if (S.open) {
      kids.push(el('ul', { className: 'bc-clash-results', 'data-mep-open-list': '' }, S.open.map((r, i) => el('li', {}, el('button', { type: 'button', className: 'bc-clash-row', 'data-mep-open-row': String(i), onClick: () => ctx.show([r.part, r.element]) },
        el('span', {}, t('mep.st.open.row', { n: r.n, size: sizeText(r), what: ctx.nameOfKey(r.element) })), el('span', { className: 'n' }, levelName(r.storey)))))));
      if (S.open.length) kids.push(el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-mep-open-csv': '', onClick: () => csv() }, t('mep.st.csv')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-mep-open-bcf': '', onClick: () => bcf().catch((e) => ctx.status(String(e.message || e), true)) }, t('mep.st.bcf'))));
    }
    if (S.msg) kids.push(el('p', { className: 'bc-muted', 'data-mep-st-msg': '' }, S.msg));
    kids.push(el('p', { className: 'bc-muted' }, t('mep.st.aid')));
    return el('div', { className: 'bc-clash bc-mep-struct', 'data-mep-struct': '' }, ...kids);
  }
  const api = { sources, node, soft, opens, state: S, reset() { S.soft = null; S.open = null; S.msg = ''; } };
  if (typeof window !== 'undefined') window.bimcraftMepStruct = api;   // for tests
  return api;
}
