/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clashfix-bim.js — BimCraft's thin adapter for cc-clashfix (0.9 EG.42, session `clash-assistants-09`; engine lib/clashfix, copied
 * byte for byte into ./clashfix/ by tools/clashfix/sync.mjs). bimcraft.js mounts it with a few lines.
 *
 *   - the Clash check's results get a "Propose fixes" button [data-clash-fix]: the clash list becomes a sandbox model (every element
 *     of the open models as its box; the pipe, duct, tray and conduit runs BimCraft drew as centre lines with their sizes, slopes,
 *     insulation and fixed ends), each discipline's rule proposer runs, and the shared review panel opens;
 *   - Apply writes the accepted fixes that BimCraft can make — runs moved, detoured or resized (mep-model.js changeRun) and columns
 *     moved (model-modify.js moveElements) — as ONE undo step, then runs the Clash check again. Anything else (openings, sleeves,
 *     elements of a linked or imported file) is advice: it becomes an issue in the Issues tab;
 *   - a connected assistant (Settings › Assistants) gets two tools, clashes_list and clash_fix_add (lib/clashfix/assistant.js); its
 *     proposals land in the same open review list. Nothing runs an assistant here; nothing changes the model before Apply.
 *
 * ctx = { viewer(), models(), host() (the open model's entry, null when not an IFC), editor(), modelUi, entryOf(k), nameOfKey(k),
 *         results() (clash.js results, viewer keys), rerun() (the Clash check again), show(keys), status(text, bad),
 *         control (host.control), addIssue({ title, description }) }
 * Test hook: window.bimcraftClashFix = { open(), panel, model(), result() }.
 */
import { coordinate, addProposal, applyActions, clashTools, kindOfIfc, disciplineOfIfc, disciplineOfRun, runKind, pairKey, wordsOf } from './clashfix/index.js';
import { mountClashPanel } from './clashfix/panel.js';
import { ModelWriter } from './model-write.js';
import { readRuns, sectionOf, carrierOf, changeRun, PIPE_SYSTEMS } from './mep-model.js';
import { readColumns } from './model-columns.js';
import { moveElements } from './model-modify.js';
import { mergeJournals } from './model-ui.js';
import { fmtLength } from './measure.js';
import { t, has, locale } from './i18n.js';
import { ToolError } from './host.js';
import { el } from './ui-util.js';

const SKIP = /^Ifc(Space|OpeningElement|VirtualElement|Annotation|Grid|Zone|Site|Building|BuildingStorey|Project|DistributionPort)$/;
const ap = (M, v) => [M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]];
const I4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
/** The viewer (metres, y up) → the sandbox (mm, z up). */
const libOf = (v) => [v[0] * 1000, -v[2] * 1000, v[1] * 1000];
const libBox = (b) => [b.min[0] * 1000, -b.max[2] * 1000, b.min[1] * 1000, b.max[0] * 1000, -b.min[2] * 1000, b.max[1] * 1000];
function inv3(m) {   // m: 3 columns [c0, c1, c2]
  const [a, b, c] = m, det = a[0] * (b[1] * c[2] - b[2] * c[1]) - b[0] * (a[1] * c[2] - a[2] * c[1]) + c[0] * (a[1] * b[2] - a[2] * b[1]);
  if (Math.abs(det) < 1e-12) return null;
  const r = [[(b[1] * c[2] - b[2] * c[1]) / det, (c[1] * a[2] - a[1] * c[2]) / det, (a[1] * b[2] - a[2] * b[1]) / det],
    [(c[0] * b[2] - b[0] * c[2]) / det, (a[0] * c[2] - c[0] * a[2]) / det, (b[0] * a[2] - a[0] * b[2]) / det],
    [(b[0] * c[1] - c[0] * b[1]) / det, (c[0] * a[1] - a[0] * c[1]) / det, (a[0] * b[1] - b[0] * a[1]) / det]];
  return (v) => [r[0][0] * v[0] + r[1][0] * v[1] + r[2][0] * v[2], r[0][1] * v[0] + r[1][1] * v[1] + r[2][1] * v[2], r[0][2] * v[0] + r[1][2] * v[1] + r[2][2] * v[2]];
}

export function mountClashFix(ctx) {
  const W = wordsOf((k, v) => (has(k) ? t(k, v) : k), locale());
  const S = { model: null, result: null, recheck: false };

  /** Plan mm of a storey ↔ the sandbox frame, through the storey's placement, the model's coordination matrix and its place in the view. */
  function frames() {
    const ent = ctx.host(), ed = ctx.editor();
    if (!ent || !ed) return null;
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    let C = I4; try { C = ent.ifc.api.GetCoordinationMatrix(ent.model.modelID); } catch (e) { /* identity */ }
    const Lm = ctx.viewer().modelMatrix?.(ent.mi) || I4;
    const cache = new Map();
    const of = (st) => {
      if (cache.has(st)) return cache.get(st);
      const SW = w.storeyWorld(st);
      const to = (p) => { const q = ap(SW, p).map((x) => x / 1000); return libOf(ap(Lm, ap(C, [q[0], q[2], -q[1]]))); };
      const o = to([0, 0, 0]), cols = [[1000, 0, 0], [0, 1000, 0], [0, 0, 1000]].map((e) => to(e).map((x, i) => (x - o[i]) / 1000));
      const back = inv3(cols);
      const f = { to, o, back: back ? (q) => back([q[0] - o[0], q[1] - o[1], q[2] - o[2]]) : null, delta: back };
      cache.set(st, f);
      return f;
    };
    return { w, of, base: ent.model.keyBase || 0 };
  }

  function build() {
    const v = ctx.viewer(), F = frames();
    const elements = [], keyTo = new Map(), made = new Map();
    if (F) {
      for (const r of readRuns(F.w)) {
        const sec = sectionOf(r);
        if (!sec) continue;
        const fr = F.of(r.storey), carrier = carrierOf(r);
        const kind = carrier || runKind(r.kind, r.system);
        const id = 'run:' + r.guid;
        elements.push({ id, group: id, name: ctx.nameOfKey(F.base + r.id), kind, system: r.system, discipline: disciplineOfRun(carrier || r.kind, r.system),
          path: r.points.map((p) => fr.to(p)), section: { w: sec.w, h: sec.h, round: !!sec.round }, insulation: r.insulation || 0, slope: r.slope || 0, bend: sec.kind === 'pipe' ? sec.R : sec.round ? 1.5 * sec.w : sec.h,   // a turn up or down (mep-model.js bendR)
          drain: !!PIPE_SYSTEMS[r.system]?.drain, fixedEnds: (r.ends || []).map(Boolean), level: fr.o[2], keys: r.parts.map((p) => F.base + p) });
        made.set(id, { kind: 'run', guid: r.guid, storey: r.storey, run: r });
        for (const p of r.parts) keyTo.set(F.base + p, id);
      }
      for (const c of readColumns(F.w)) made.set('k:' + (F.base + c.id), { kind: 'column', guid: c.guid, storey: c.storey });
    }
    const keys = [...v.allKeys()].filter((k) => { if (keyTo.has(k)) return false; const e = ctx.entryOf(k); const c = e?.model.classOf.get(k - e.model.keyBase); return !c || !SKIP.test(c); });
    const boxes = v.keyBoundsMap(keys);
    for (const k of keys) {
      const b = boxes.get(k); if (!b) continue;
      const e = ctx.entryOf(k), cls = e?.model.classOf.get(k - e.model.keyBase) || '';
      const id = 'k:' + k;
      elements.push({ id, name: ctx.nameOfKey(k), kind: kindOfIfc(cls), discipline: disciplineOfIfc(cls), box: libBox(b), cls, keys: [k] });
    }
    // the clash list, in sandbox ids: the parts of one run are one element; a pair inside one run is not a clash
    const seen = new Map();
    for (const c of ctx.results() || []) {
      const a = keyTo.get(c.a) || 'k:' + c.a, b = keyTo.get(c.b) || 'k:' + c.b;
      if (a === b) continue;
      const id = pairKey(a, b), [x, y] = a < b ? [a, b] : [b, a];
      const depth = (c.depth || 0) * 1000;
      if (!seen.has(id) || seen.get(id).depth < depth) seen.set(id, { id, a: x, b: y, depth, keys: [c.a, c.b] });
    }
    const model = { elements };
    model.made = made;
    return { model, clashes: [...seen.values()] };
  }

  const canApply = (p) => p.actions.every((a) => {
    const m = S.model?.made.get(a.element);
    if (!m) return false;
    if (m.kind === 'run') return ['shift', 'crossover', 'resize'].includes(a.op);
    if (m.kind === 'column') return a.op === 'move_column';
    return false;
  });

  /** The accepted fixes BimCraft can make, as one change; the rest as issues. */
  async function apply(review) {
    const acc = review.accepted(), doable = acc.filter(canApply), advice = acc.filter((p) => !canApply(p));
    const F = frames();
    const ops = [];
    if (doable.length && F) {
      const after = applyActions(S.model, doable.flatMap((p) => p.actions));
      const byId = new Map(after.elements.map((e) => [e.id, e]));
      const cols = [];
      for (const id of after.changed) {
        const m = S.model.made.get(id), e1 = byId.get(id), fr = F.of(m.storey);
        if (!fr.back) throw new Error('storey placement');
        if (m.kind === 'run') {
          const ch = { points: e1.path.map((q) => fr.back(q).map((x) => Math.round(x * 10) / 10)) };
          if (m.run.kind === 'duct' && (e1.section.w !== m.run.w || e1.section.h !== m.run.h)) { ch.w = e1.section.w; ch.h = e1.section.h; }
          ops.push(changeRun(m.guid, ch));
        } else if (m.kind === 'column') {
          const e0 = S.model.elements.find((x) => x.id === id), d = fr.delta([e1.box[0] - e0.box[0], e1.box[1] - e0.box[1], 0]);
          cols.push({ guid: m.guid, dx: Math.round(d[0] * 10) / 10, dy: Math.round(d[1] * 10) / 10 });
        }
      }
      if (cols.length) ops.push(moveElements(cols));
    }
    if (ops.length) {
      const run = (ed) => { let r = null; for (const o of ops) { const r2 = o(ed); r = r ? { ...r2, journal: mergeJournals(r.journal, r2.journal) } : r2; } return r; };
      S.recheck = !!A?.commit;   // the clash check runs again once the model has been rebuilt (settled, below)
      const ed = ctx.editor(), n0 = ed.changes.length;
      if (A?.commit) A.commit(run, { label: W('clashfix.title') + ' (' + doable.length + ')', verb: t('model.verb.changed') });
      else ed.modelChange(run, { label: W('clashfix.title') + ' (' + doable.length + ')' });
      if (ed.changes.length === n0) throw new Error(W('clashfix.refused.model'));   // the model refused the change (the Draw tools said why in the status line)
    }
    for (const p of advice) {
      const it = S.result.items.find((x) => x.clash.id === p.clash);
      const nm = (id) => S.model.elements.find((e) => e.id === id)?.name || id;
      ctx.addIssue?.({ title: W(p.title.key, Object.fromEntries(Object.entries(p.title.vars || {}).map(([k, v]) => [k, typeof v === 'number' ? fmt(v) : v]))) + ' — ' + nm(it.clash.a) + ' × ' + nm(it.clash.b),
        description: [W('clashfix.disc.' + p.discipline), p.why || '', ...p.breaks.map((b) => W('clashfix.r.' + b.rule, b.vars)), ...p.notes.map((n) => W(n.key, n.vars))].filter(Boolean).join('\n') });
    }
    if (ops.length && !A?.commit) setTimeout(() => ctx.rerun?.(), 0);
    return { applied: doable.length, advice: advice.length };
  }

  // the Draw plan's change path (one undo step, queued while the model reloads); settled() = the 3D view has the new model
  const A = ctx.modelUi?.extend?.({ settled: () => { if (S.recheck) { S.recheck = false; setTimeout(() => ctx.rerun?.(), 0); } } }) || null;
  const fmt = (mm) => fmtLength(mm / 1000);
  const panel = mountClashPanel({
    doc: document, words: W, fmt,
    nameOf: (id) => S.model?.elements.find((e) => e.id === id)?.name || id,
    canApply,
    assistants: () => { try { return ctx.control?.sessions?.().length || 0; } catch (e) { return 0; } },
    onShow: (x) => {
      const ids = x.actions ? [...new Set(x.actions.flatMap((a) => [a.element, a.through]).filter(Boolean)), ...String(x.clash).split('|')] : [x.a, x.b];
      const keys = [...new Set(ids.flatMap((id) => S.model.elements.find((e) => e.id === id)?.keys || []))];
      if (keys.length) ctx.show(keys);
    },
    onApply: (review) => apply(review),
    status: (m, bad) => ctx.status(m, bad),
  });

  function open() {
    const { model, clashes } = build();
    S.model = model;
    S.result = coordinate(model, { clashes });
    panel.open(model, S.result);
    ctx.status(W('clashfix.title') + ': ' + S.result.items.reduce((n, it) => n + it.proposals.length, 0));
  }

  // a connected assistant reads the clashes and files proposals into the open list (never edits)
  const tools = clashTools({ result: () => (panel.dialog.open ? S.result : null), model: () => S.model, add: (p) => { const r = addProposal(S.result, S.model, p); panel.refresh(); return r; } }, { ToolError });
  for (const def of tools) { try { ctx.control?.tool?.(def); } catch (e) { console.warn('clashfix tool', def.name, e.message); } }

  if (typeof window !== 'undefined') window.bimcraftClashFix = { open, panel, model: () => S.model, result: () => S.result };
  return {
    /** The button under the clash results. */
    button: () => el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-clash-fix': '', title: W('clashfix.lede'), onClick: () => open() }, W('clashfix.open')),
    open, panel,
  };
}
