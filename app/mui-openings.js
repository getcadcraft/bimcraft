/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-openings.js: model-ui.js's 13 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiOpenings(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { wallGeom, wallMap, arcMid, BULGE_MAX, bulgeThrough } from './model-arcs.js';
import { fitOffset, openingSymbol, openingTypeName, openingType } from './model-openings.js';
import { fmtLen, parseLen } from './model-units.js';
import { familyFor } from './family-model.js';
import { t } from './i18n.js';
import { placeLibraryOpening, placeOpening, changeWall, changeWallsBy, changeOpening } from './model-ops.js';
import { snapPoint } from './model-tools.js';
import { squareSnap, squareDistance, squareMove } from './wall-square.js';
import { endDrag } from './walls/reline.js';

export function mountMuiOpenings(ctx) {
  const { MS, S, exts, kb, famW, libraryPlaced, sizeName, wallsHere, throughHere, riseOver, selectedKeys, buildScene, snapWalls, drawOverlay, commit, host } = ctx;

  // ---- doors and windows: which wall, where along it ----
  /**
   * The wall under (or beside) plan point p and where an opening `width` wide would go, centred on p: → { wall, offset,
   * face, ok, ends: [x0, x1] (the face's ends along the wall, for the distances), s (along), side } | null.
   * Doors swing to the side the pointer is on; windows sit on the wall's outside.
   */
  function hoverOpening(p, kind, width) {
    const tol = MS.pv.pxToMm(16);
    let best = null;
    for (const w of [...wallsHere(), ...throughHere()]) {   // 0.7 BIM-MLWALL: walls running through this level take doors and windows too
      const L = w.len, u = [(w.b[0] - w.a[0]) / L, (w.b[1] - w.a[1]) / L], n = [-u[1], u[0]];
      const rx = p[0] - w.a[0], ry = p[1] - w.a[1], q = w.bulge ? wallGeom(w).param(p) : null;   // a curved wall: along its arc
      const s = q ? q.s : rx * u[0] + ry * u[1], d = q ? q.off : rx * n[0] + ry * n[1];
      if (s < -tol || s > L + tol) continue;
      const score = Math.max(0, Math.abs(d) - w.t / 2);
      if (score <= tol && (!best || score < best.score)) best = { w, s, d, score };
    }
    if (!best) return null;
    const w = best.w, step = ctx.round();
    let offset = best.s - width / 2;
    if (Math.abs(best.s - w.len / 2) <= tol) offset = (w.len - width) / 2;   // the middle of the wall snaps
    else offset = Math.round(offset / step) * step;
    const fit = fitOffset(w, width, offset);
    const face = kind === 'door' ? (best.d >= 0 ? 'left' : 'right') : w.extSide;
    return { wall: w, offset: fit ?? offset, face, ok: fit !== null, ends: faceEnds(w, face), s: best.s };
  }
  /** Where the given face of a wall starts and ends along it (its joined outline), mm from the wall's start. */
  function faceEnds(w, face) {
    const poly = S.outlines.get(w.guid);
    if (!poly) return [0, w.len];
    const u = [(w.b[0] - w.a[0]) / w.len, (w.b[1] - w.a[1]) / w.len], sgn = face === 'right' ? -1 : 1;
    const toL = w.bulge ? wallMap(w).toL : ([x, y]) => [(x - w.a[0]) * u[0] + (y - w.a[1]) * u[1], -(x - w.a[0]) * u[1] + (y - w.a[1]) * u[0]];
    const xs = poly.map(toL).filter(([, y]) => Math.abs(y - sgn * w.t / 2) < 0.5).map(([x]) => x);
    return xs.length >= 2 ? [Math.min(...xs), Math.max(...xs)] : [0, w.len];
  }
  /** The preview: the symbol where it would go and its distances to both ends of that face. */
  function openingPreview(h, spec, o) {
    const w = h.wall, op = { kind: spec.kind, typeKey: spec.typeKey, width: spec.width, height: spec.height, sill: spec.sill || 0, hand: spec.hand, face: h.face, offset: h.offset };
    o.symbols.push(openingSymbol(op, w));
    const u = [(w.b[0] - w.a[0]) / w.len, (w.b[1] - w.a[1]) / w.len], n = [-u[1], u[0]], sgn = h.face === 'right' ? -1 : 1;
    const P = w.bulge ? (x) => wallGeom(w).at(x, sgn * w.t / 2) : (x) => [w.a[0] + u[0] * x + n[0] * sgn * w.t / 2, w.a[1] + u[1] * x + n[1] * sgn * w.t / 2];
    const off = sgn * MS.pv.pxToMm(22);
    const [e0, e1] = h.ends;
    if (h.offset - e0 > 0.5) o.dims.push({ a: P(e0), b: P(h.offset), off, text: fmtLen(h.offset - e0, S.units) });
    if (e1 - h.offset - op.width > 0.5) o.dims.push({ a: P(h.offset + op.width), b: P(e1), off, text: fmtLen(e1 - h.offset - op.width, S.units) });
    o.hud = { p: P(h.offset + op.width / 2), text: h.ok ? (spec.lib?.item.name || familyFor(famW(), spec.family || spec.typeKey)?.name || openingTypeName(openingType(spec.typeKey))) + '  ' + fmtLen(op.width, S.units) + ' × ' + fmtLen(op.height, S.units) : t('model.err.nofit') };
  }
  function placeHere(h, kind) {
    const o = S.open[kind];
    if (!h.ok) { host.status(t('model.err.nofit'), true); return; }
    if (o.lib) {   // 2026-11-02: a Library door / window, its own size and mesh
      const sill = (kind === 'window' ? o.sill : 0) + (h.wall.storey === S.level ? 0 : riseOver(h.wall.storey));
      const name = o.lib.item.name;
      commit(placeLibraryOpening(o.lib.item, { wall: h.wall.guid, typeKey: o.typeKey, offset: h.offset, sill, hand: o.hand, face: h.face, width: o.width, height: o.height }, o.lib.opts),
        { label: name, verb: t('model.verb.placed') });
      libraryPlaced(name);
      return;
    }
    const type = openingType(o.typeKey);
    const fam = familyFor(famW(), o.family || o.typeKey);
    commit(placeOpening({ wall: h.wall.guid, typeKey: o.typeKey, family: o.family || o.typeKey, values: o.values || {}, sizeName: sizeName({ Width: o.width, Height: o.height }), offset: h.offset, width: o.width, height: o.height, sill: (kind === 'window' ? o.sill : 0) + (h.wall.storey === S.level ? 0 : riseOver(h.wall.storey)), hand: o.hand, face: h.face }),
      { label: fam?.name || openingTypeName(type), verb: t('model.verb.placed') });
  }
  // dragging a door or window along its wall (or onto another one) with Select
  /** The picked drawn wall, when exactly one is picked (its grips show). */
  function gripWall() {
    const keys = selectedKeys();
    if (keys.length !== 1) return null;
    return wallsHere().find((w) => kb() + w.id === keys[0]) || null;
  }
  // a curved wall's middle grip bends it (through the point it is dragged to); a straight wall's moves it (0.6 round 2)
  const gripsOf = (w) => [{ p: w.a, end: 'a' }, { p: w.b, end: 'b' }, w.bulge ? { p: arcMid(w.a, w.b, w.bulge), end: 'bend' } : { p: [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2], end: 'mid' }];
  function onDown(p, e) {
    if (S.tool !== 'select' || !MS.pv) return false;
    for (const x of exts) if (x.down?.(p, e)) { S.drag = { kind: 'ext', x }; return true; }   // 0.6 round 2: an extension's grips (moving a library item)
    const gw = gripWall();
    if (gw) {
      const tol = MS.pv.pxToMm(9);
      const g = gripsOf(gw).find((x) => Math.hypot(p[0] - x.p[0], p[1] - x.p[1]) <= tol);
      if (g) { S.drag = { kind: 'grip', wall: gw, end: g.end, from: p, key: kb() + gw.id, typed: '' }; if (g.end !== 'bend') host.status(t(g.end === 'mid' ? 'model.grip.mid' : 'model.grip.end')); return true; }
    }
    const k = MS.pv.hit(e.clientX, e.clientY);
    const o = k !== null ? (S.data?.openings || []).find((x) => kb() + x.id === k) : null;
    if (!o) return false;
    S.drag = { kind: 'opening', op: o, key: k, from: p, moved: false };
    return true;
  }
  /** Where a wall grip dragged to `p` puts the wall: { a, b } (snapped; a middle grip moves the whole wall). */
  function gripMove(d, p, e) {
    const w = d.wall;
    const others = snapWalls(wallsHere().filter((x) => x.guid !== w.guid), []);
    if (d.end === 'bend') {
      const s0 = snapPoint(p, others, { tol: MS.pv.pxToMm(ctx.SNAP_PX) });
      const bg = Math.max(-BULGE_MAX, Math.min(BULGE_MAX, bulgeThrough(w.a, s0.p, w.b)));
      return { a: w.a, b: w.b, bulge: Math.abs(bg) < 1e-6 ? 0 : bg, snap: s0 };
    }
    if (d.end === 'mid') {
      if (e?.altKey) { const s0 = snapPoint(p, others, { tol: MS.pv.pxToMm(ctx.SNAP_PX), from: d.from, ortho: !!e?.shiftKey, step: 90, round: ctx.round() }); const dx = s0.p[0] - d.from[0], dy = s0.p[1] - d.from[1]; return { a: [w.a[0] + dx, w.a[1] + dy], b: [w.b[0] + dx, w.b[1] + dy], snap: s0, disjoin: true }; }   // 0.9 FX.67: Alt breaks its joins
      if (!e?.ctrlKey && !e?.metaKey) return gripSquare(d, p);   // 0.9 FX.22: square to itself; Ctrl for a free move
      const s0 = snapPoint(p, others, { tol: MS.pv.pxToMm(ctx.SNAP_PX), from: d.from, ortho: !!e?.shiftKey, step: 90, round: ctx.round() });
      const dx = s0.p[0] - d.from[0], dy = s0.p[1] - d.from[1];
      return { a: [w.a[0] + dx, w.a[1] + dy], b: [w.b[0] + dx, w.b[1] + dy], snap: s0 };
    }
    const fixed = d.end === 'a' ? w.b : w.a;
    let s1 = snapPoint(p, others, { tol: MS.pv.pxToMm(ctx.SNAP_PX), from: fixed, ortho: !!e?.shiftKey, step: 15, round: ctx.round() });
    if (!e?.shiftKey && (s1.kind === 'free' || s1.kind === 'angle')) s1 = squareSnap(S.data.walls, w, fixed, p, { round: ctx.round() }) || s1;   // 0.9 FX.22: square to the wall it is joined to, whatever way the building turns
    const free = d.end === 'a' ? { a: s1.p, b: w.b, snap: s1 } : { a: w.a, b: s1.p, snap: s1 };
    if (e?.altKey) return { ...free, disjoin: true };   // Alt: the joins at this wall break, as on the middle grip (FX.67)
    if (e?.ctrlKey || e?.metaKey || w.bulge) return free;   // Ctrl: a free drag, the joined wall's end comes with it (it turns)
    // FX.63 (wall tool spec, solver step 2): the joined walls keep their direction; their ends slide along their own lines to this wall's new line
    try { const plan = endDrag(S.data.walls, w.guid, d.end, s1.p), m = plan.get(w.guid); if (m) return { a: m.a, b: m.b, snap: s1, plan, reline: { end: d.end, to: s1.p } }; } catch (err) { /* no square answer: the free drag below */ }
    return free;
  }
  /** 0.9 FX.22: the middle grip's move, square to the wall: other walls' points and parallel faces still catch it, else round steps. */
  function gripSquare(d, p) {
    const w = d.wall, ends = [w.a, w.b], joined = (x) => [x.a, x.b].some((q) => ends.some((r) => Math.hypot(q[0] - r[0], q[1] - r[1]) <= 1));
    const s0 = snapPoint(p, snapWalls(wallsHere().filter((x) => x.guid !== w.guid && !joined(x)), []), { tol: MS.pv.pxToMm(ctx.SNAP_PX) });
    const inLine = s0.kind === 'on' && s0.wall && Math.abs(squareDistance(w, [s0.wall.b[0] - s0.wall.a[0], s0.wall.b[1] - s0.wall.a[1]])) < 1;
    const caught = s0.kind === 'end' || s0.kind === 'mid' || s0.kind === 'grid' || inLine;
    const raw = squareDistance(w, [(caught ? s0.p : p)[0] - d.from[0], (caught ? s0.p : p)[1] - d.from[1]]);
    return gripSquareBy(d, caught ? raw : Math.round(raw / ctx.round()) * ctx.round(), caught ? s0 : null, raw);
  }
  function gripSquareBy(d, by, snap = null, raw = by) {
    try { const plan = squareMove(S.data.walls, d.wall.guid, by), m = plan.get(d.wall.guid); return { a: m.a, b: m.b, snap, plan, by, raw }; }
    catch { return d.at || null; }   // past a joined wall's far end: it stays at the last place that worked
  }
  /** 0.9 FX.22: a distance typed while a grip is held, along the way it is being dragged. → the move, or null (said why). */
  function gripTyped(d) {
    const mm = parseLen(d.typed, S.units), w = d.wall, at = d.at;
    if (!Number.isFinite(mm)) { host.status(t('model.err.length'), true); return null; }
    if (!at) { host.status(t('model.grip.nodir'), true); return null; }
    if (d.end === 'mid' && at.plan) {
      if (!at.raw) { host.status(t('model.grip.nodir'), true); return null; }
      return gripSquareBy({ ...d, at: null }, Math.sign(at.raw) * mm);
    }
    const from = d.end === 'mid' ? w.a : d.end === 'a' ? w.b : w.a, to = d.end === 'mid' ? at.a : d.end === 'a' ? at.a : at.b;
    const v = [to[0] - from[0], to[1] - from[1]], len = Math.hypot(v[0], v[1]);
    if (!len) { host.status(t('model.grip.nodir'), true); return null; }
    const q = [from[0] + v[0] / len * mm, from[1] + v[1] / len * mm];
    if (d.end === 'mid') { const dx = q[0] - w.a[0], dy = q[1] - w.a[1]; return { a: q, b: [w.b[0] + dx, w.b[1] + dy] }; }
    if (at.reline) { try { const plan = endDrag(S.data.walls, w.guid, d.end, q), m = plan.get(w.guid); if (m) return { a: m.a, b: m.b, plan, reline: { end: d.end, to: q } }; } catch (err) { /* the free result below */ } }   // FX.63
    return d.end === 'a' ? { a: q, b: w.b } : { a: w.a, b: q };
  }
  function gripCommit(d, m) {
    if (Math.hypot(m.b[0] - m.a[0], m.b[1] - m.a[1]) < 10) { host.status(t('model.err.short'), true); drawOverlay(); return; }
    if (d.end === 'bend') { commit(changeWall(d.wall.guid, { bulge: m.bulge }), { label: t('model.wall'), verb: t('model.verb.changed'), select: [d.key] }); return; }
    const meta = { label: t('model.wall'), verb: t('model.verb.moved'), select: [d.key] };
    if (m.reline) { const { end, to } = m.reline; commit(changeWallsBy(d.wall.guid, (walls) => endDrag(walls, d.wall.guid, end, to)), meta); return; }   // FX.63
    if (m.plan) { const by = m.by; commit(changeWallsBy(d.wall.guid, (walls) => squareMove(walls, d.wall.guid, by)), meta); return; }
    if (m.disjoin) { commit(changeWall(d.wall.guid, { a: m.a, b: m.b }, { carryJoined: false }), { ...meta, verb: t('walls.verb.disjoined') }); return; }   // 0.9 FX.67: joins broken, the wall keeps its id
    commit(changeWall(d.wall.guid, d.end === 'a' ? { a: m.a } : d.end === 'b' ? { b: m.b } : { a: m.a, b: m.b }), meta);
  }
  function onUp(p, e, { moved, cancel }) {
    const d = S.drag;
    S.drag = null;
    if (!d) return;
    if (d.kind === 'ext') { d.x.up?.(p, e, { moved, cancel }); drawOverlay(); return; }
    if (d.kind === 'grip') {
      const m = !cancel && d.typed ? gripTyped(d) : d.at;
      if (cancel || (moved <= 4 && !d.typed) || !m) { drawOverlay(); return; }
      gripCommit(d, m);
      return;
    }
    if (cancel || moved <= 4 || !S.hover) { S.hover = null; buildScene(); return; }
    const h = S.hover;
    S.hover = null;
    if (!h.ok) { host.status(t('model.err.nofit'), true); buildScene(); return; }
    const ch = { offset: h.offset };
    if (h.wall.guid !== d.op.wallGuid) { ch.wall = h.wall.guid; if (d.op.kind === 'door') ch.face = h.face; }
    host.select([d.key]);
    commit(changeOpening(d.op.guid, ch), { label: openingTypeName(openingType(d.op.typeKey)), verb: t('model.verb.moved'), select: [d.key] });
  }

  return { hoverOpening, faceEnds, openingPreview, placeHere, gripWall, gripsOf, onDown, gripMove, gripTyped, gripCommit, onUp };
}
