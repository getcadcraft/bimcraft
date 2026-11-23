/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mui-walls.js: model-ui.js's 18 bindings for this topic, moved out of mountModel() unchanged (0.11 PERF.78, perf-finish-11 bimcraft: one module per panel section; no behaviour change).
 * mountMuiWalls(ctx) is called once by mountModel(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountModel() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { arcMid, bulgeThrough, BULGE_MAX, wallGeom, bulgeFromHeight, arcHeight, flatPoly, arcLength } from './model-arcs.js';
import { snapPoint, closesChain, loopSide, wallPath } from './model-tools.js';
import { t } from './i18n.js';
import { typeThickness, typeName, locationLine, wallOutlines } from './model-walls.js';
import { drawWalls, drawWallPath, changeWalls } from './model-ops.js';
import { placementReference, placementPath } from './wall-placement.js';
import { parseLen, parseTyped, fmtLen, fmtAngle } from './model-units.js';
import { fitOffset } from './model-openings.js';

export function mountMuiWalls(mc) {
  const { MS, root, ui, S, exts, extTool, commit, host, mergeJournals } = mc;

  // ---- drawing walls ----
  /** Walls to snap to: a curved wall gives its ends and the middle of its arc as points (it has no straight face). */
  function snapWalls(list, points) {
    const pts = points.slice(), walls = [];
    for (const w of list) { if (w.bulge) pts.push(w.a, w.b, arcMid(w.a, w.b, w.bulge)); else walls.push({ a: w.a, b: w.b, t: w.t }); }
    return { walls, points: pts };
  }
  function snapCtx() {
    const ctx = snapWalls([...mc.wallsHere(), ...S.queuedSegs()], S.chain ? S.chain.points : []);
    for (const x of exts) x.snapCtx?.(ctx);   // 0.6 DF.16: grid lines and their crossings (model-grids-ui.js)
    return ctx;
  }

  function snapAt(p, e) {
    const from = S.chain?.points[S.chain.points.length - 1] || null;
    return snapPoint(p, snapCtx(), { tol: MS.pv.pxToMm(mc.SNAP_PX), from, ortho: !!e?.shiftKey, step: 15, round: from ? mc.round() : 0, align: S.tool === 'wall' });
  }
  // FX.81: the readout box steps aside when the wall being drawn (or the pointer) runs under it
  function dodgeCoords(p, e) {
    const c = host.coords?.(); if (!c?.dodge) return;
    if (S.tool !== 'wall' || !S.chain || e?.clientX == null) { c.dodge(null); return; }
    const r = ui.canvas.getBoundingClientRect(), path = [];
    const last = S.chain.points[S.chain.points.length - 1];
    if (last) { const q = MS.pv.toScreen(last); path.push({ x: r.left + q.x, y: r.top + q.y }); }
    path.push({ x: e.clientX, y: e.clientY });
    c.dodge(path, ui.bar ? [ui.bar.getBoundingClientRect()] : []);
  }
  function onMove(p, e) {
    host.coords?.()?.plan(p, mc.level(), S.planM);   // 0.6 DF.15: where the pointer is
    dodgeCoords(p, e);
    if (S.drag?.kind === 'grip') { S.drag.at = mc.gripMove(S.drag, p, e); drawOverlay(); return; }
    if (S.drag?.kind === 'ext') { S.drag.x.drag?.(p, e); drawOverlay(); return; }
    if (S.drag) {
      const o = S.drag.op;
      S.hover = mc.hoverOpening(p, o.kind, o.width);
      if (S.hover && S.hover.wall.guid === o.wallGuid) S.hover.face = o.face;
      if (!S.drag.moved) { S.drag.moved = true; mc.buildScene(); }   // the symbol leaves its place while it is dragged
      drawOverlay();
      return;
    }
    if (S.placeHook) { S.placeHook.move(p, e); drawOverlay(); return; }   // a Library item being placed in the plan (bimcraft.js startPlacing, where: 'plan')
    if (extTool(S.tool)) { extTool(S.tool).move?.(p, e); drawOverlay(); return; }
    if (S.tool === 'door' || S.tool === 'window') { S.last = { raw: p }; S.hover = mc.hoverOpening(p, S.tool, S.open[S.tool].width); drawOverlay(); return; }
    if (S.tool === 'floor' || S.tool === 'ceiling' || S.tool === 'roof') { S.hover = mc.hoverSlab(p, S.tool); drawOverlay(); return; }
    if (S.tool === 'select') { const k = MS.pv.hit(e.clientX ?? 0, e.clientY ?? 0); if (k !== MS.pv.hover) { MS.pv.hover = k; MS.pv.render(); } return; }
    S.last = { raw: p, snap: snapAt(p, e), shift: !!e?.shiftKey };
    drawOverlay();
  }
  function onClick(p, e) {
    if (!mc.canDraw()) return;
    if (S.placeHook) { S.placeHook.click(p, e); drawOverlay(); return; }
    if (S.tool === 'select') {
      if (exts.some((x) => x.selectClick?.(p, e))) return;   // 0.6 DC.117 (c): a callout's tag opens it (views-ui.js)
      const k = e && e.clientX !== undefined ? MS.pv.hit(e.clientX, e.clientY) : null;
      const add = e && (e.ctrlKey || e.metaKey || e.shiftKey);
      if (k === null) { if (!add) host.select([]); return; }
      const cur = new Set(mc.selectedKeys());
      if (add) { if (cur.has(k)) cur.delete(k); else cur.add(k); host.select([...cur]); } else host.select([k]);
      return;
    }
    if (extTool(S.tool)) { extTool(S.tool).click?.(p, e); drawOverlay(); return; }
    if (S.tool === 'floor' || S.tool === 'ceiling' || S.tool === 'roof') {
      const h = mc.hoverSlab(p, S.tool);
      if (!h) { host.status(t(S.tool === 'roof' || S.slab[S.tool]?.mode === 'building' ? 'model.err.nobuilding2' : 'model.err.noroom'), true); return; }
      mc.placeSlab(h, S.tool);
      return;
    }
    if (S.tool === 'door' || S.tool === 'window') {
      const h = mc.hoverOpening(p, S.tool, S.open[S.tool].width);
      if (!h && S.open[S.tool].lib) { mc.placeFree(p, S.tool); return; }   // a Library door / window may stand on its own until a wall comes
      if (!h) { host.status(t('model.hint.' + S.tool)); return; }
      mc.placeHere(h, S.tool);
      return;
    }
    const s = snapAt(p, e);
    if (S.tool === 'wall') wallPoint(s.p);
  }
  function onDbl(p, e) { if (S.tool === 'wall') endChain(); else extTool(S.tool)?.dbl?.(p, e); }
  /** The location line drawn: the centre line, the outside face or the inside face (Wall › Reference). */
  const justOf = (ref) => (ref === 'outside' ? 'exterior' : ref === 'inside' ? 'interior' : 'center');
  /**
   * A curved wall (0.6 round 2, Wall › Shape: Arc): its start, its end, then a point on the arc (or a typed arc height). Drawn
   * on a face (Reference), its centre line is that arc moved over by half its thickness (the same turn). The chain goes on
   * from its end.
   */
  function arcPoint(q, bulgeTyped = null) {
    const pts = S.chain.points, a = pts[pts.length - 1];
    if (!S.arcEnd) { if (Math.hypot(q[0] - a[0], q[1] - a[1]) < 10) return; S.arcEnd = q; drawOverlay(); return; }
    const b = S.arcEnd;
    let bg = bulgeTyped ?? bulgeThrough(a, q, b);
    if (!(Math.abs(bg) <= BULGE_MAX)) { host.status(t('comforts.err.arc'), true); return; }
    if (Math.abs(bg) < 1e-6) bg = 0;
    const type = mc.projectWallType(S.wall.typeKey), th = typeThickness(type);
    const above = mc.levelAbove();
    const top = mc.drawTop(above);
    const side = S.wall.side;   // 0.6.1 FIX-061-WALL-SIDE: the Outside select counts on the centre line too (it was always left)
    const seg = arcCentre(a, b, bg, th);
    S.arcEnd = null;
    const closing = closesChain(pts, b, 1);
    pts.push(b);
    commit(drawWalls({ storey: mc.level().guid, segs: [{ a: seg.a, b: seg.b, bulge: bg, justification: justOf(S.wall.reference) }], typeKey: S.wall.typeKey, extSide: side, ...top }),
      { label: typeName(type), verb: t('model.verb.drew'), preview: [{ ...seg, t: th, bulge: bg }], chain: S.chain });
    if (closing) { const n = S.chain.guids.length + 1; endChain(); host.status(t('model.room.closed', { n })); }
    drawOverlay();
  }
  /** The centre line of an arc drawn on a face: the same turn, its ends moved square to it by half the thickness. */
  function arcCentre(a, b, bg, th) {
    if (S.wall.reference === 'center' || !bg) return { a, b };
    const off = th / 2 * (S.wall.reference === 'outside' ? -1 : 1) * (S.wall.side === 'left' ? 1 : -1), g = wallGeom({ a, b, bulge: bg });
    return { a: g.at(0, off), b: g.at(g.L, off) };
  }
  function wallPoint(q) {
    if (!S.chain) { S.chain = { points: [q], guids: [] }; drawOverlay(); return; }
    if (S.wall.shape === 'arc') { arcPoint(q); return; }
    const pts = S.chain.points, a = pts[pts.length - 1];
    if (Math.hypot(q[0] - a[0], q[1] - a[1]) < 1) return;
    const closing = closesChain(pts, q, 1);
    const b = closing ? pts[0] : q;
    const type = mc.projectWallType(S.wall.typeKey);
    // Live straight placement uses all six existing location lines and the chosen exterior orientation.
    // Legacy three-reference and curved behavior remains unchanged in the established layout.
    if (root.classList.contains('ws-active') || S.wall.reference.startsWith('core')) {
      let spec;
      const side = S.wall.side;
      try { spec = placementReference(S.wall.reference, type, side); } catch (e) { host.status(e.message, true); return; }
      const above = mc.levelAbove();
      if (S.wall.top === 'level' && !above) { host.status(t('model.err.notop'), true); return; }
      const top = S.wall.top === 'level' ? { topLevel: above.guid } : { height: S.wall.height };
      const set = drawSet();   // 0.9 WT.3: placement offset, join on / off (wall-tools-ui.js)
      const segs = placementPath(set.shift([...pts, b]), type, S.wall.reference, side);
      pts.push(b);
      commit(drawWallPath({ storey: mc.level().guid, points: set.shift(pts.slice()), guids: S.chain.guids, typeKey: S.wall.typeKey,
        thickness: spec.thickness, reference: S.wall.reference, extSide: side, axisOffset: spec.axisOffset, justification: spec.justification, ...top, ...set.join }),
        { label: typeName(type), verb: t('model.verb.drew'), preview: [segs.at(-1)], chain: S.chain });
      if (closing) endChain();
      drawOverlay(); return;
    }
    const above = mc.levelAbove();
    const top = mc.drawTop(above);
    const seg = { a, b, t: typeThickness(type) };
    // closing a room: every wall of the chain gets its outside to the outside of the loop
    // the Outside select (left / right of the way you draw) — on the centre line too (0.6.1 FIX-061-WALL-SIDE: it was always
    // left there); closing a room drawn on the centre line still puts every wall's outside to the outside of the loop
    const side = S.wall.reference === 'center' && closing ? loopSide(pts) : S.wall.side;
    const flips = closing ? S.chain.guids.slice() : [];
    pts.push(b);
    const run = S.wall.reference === 'center'
      ? drawWalls({ storey: mc.level().guid, segs: [{ a, b }], typeKey: S.wall.typeKey, extSide: side, ...top })
      : drawWallPath({ storey: mc.level().guid, points: pts.slice(), guids: S.chain.guids, typeKey: S.wall.typeKey, thickness: seg.t, reference: S.wall.reference, extSide: side, justification: justOf(S.wall.reference), ...top });   // 0.6 round 2: the face drawn on stays the wall's location line
    // 0.9 WT.3: a placement offset or Join off: the chain goes through drawWallPath (it re-solves the chain's corners on the offset line)
    const set = drawSet(), offAxis = set.offset ? set.offset + (S.wall.reference === 'center' ? 0 : seg.t / 2 * (S.wall.reference === 'outside' ? -1 : 1) * (side === 'left' ? 1 : -1)) : undefined;
    const run2 = !set.offset && !set.join.joinOff ? run : drawWallPath({ storey: mc.level().guid, points: pts.slice(), guids: S.chain.guids, typeKey: S.wall.typeKey, thickness: seg.t, reference: S.wall.reference, extSide: side, axisOffset: offAxis, justification: justOf(S.wall.reference), ...top, ...set.join });
    const op = closing && flips.length && S.wall.reference === 'center' ? chainClose(run2, flips, side) : run2;
    commit(op, { label: typeName(type), verb: t('model.verb.drew'), preview: S.wall.reference === 'center' && !set.offset ? [seg] : wallPath([a, b], seg.t, S.wall.reference, side, offAxis), chain: S.chain });
    if (closing) { endChain(); host.status(t('model.room.closed', { n: flips.length + 1 })); }
    drawOverlay();
  }
  /** The closing wall and the outside of every wall in the chain, as one change. */
  function chainClose(run, guids, side) {
    return (editor) => {
      const r = run(editor);
      const r2 = changeWalls(guids, { extSide: side })(editor);
      return { ...r, journal: mergeJournals(r.journal, r2.journal) };
    };
  }
  function endChain() { S.arcEnd = null; if (S.chain) { S.chain = null; drawOverlay(); } }
  /** 0.9 WT.3 Set: what the Wall row's placement offset and Join on / off ask of the walls drawn (wall-tools-ui.js answers drawSet()). */
  function drawSet() {
    const x = exts.find((e) => e.drawSet), d = x?.drawSet?.() || {};
    const offset = Number.isFinite(d.offset) ? d.offset : 0;
    return { offset, join: d.joinOff ? { joinOff: { a: true, b: true } } : {}, shift: (pts) => (offset && x?.shiftPoints ? x.shiftPoints(pts, offset) : pts) };
  }

  function applyTyped(text) {
    if (S.tool === 'select') return false;
    if (extTool(S.tool)) return !!extTool(S.tool).typed?.(S.tool, text);
    if (S.tool === 'door' || S.tool === 'window') {
      // a distance from the nearer end of the wall face the preview shows
      const d = parseLen(text, S.units), h = S.hover, o = S.open[S.tool];
      if (!h || !Number.isFinite(d) || d < 0) { host.status(t(h ? 'model.err.length' : 'model.typed.wall'), true); return false; }
      const [e0, e1] = h.ends, nearStart = h.s < (e0 + e1) / 2;
      const offset = nearStart ? e0 + d : e1 - d - o.width, fit = fitOffset(h.wall, o.width, offset);
      if (fit === null || Math.abs(fit - offset) > 0.5) { host.status(t('model.err.nofit'), true); return false; }
      mc.placeHere({ ...h, offset: fit, ok: true }, S.tool);
      return true;
    }
    // 0.6 round 2: a curved wall's arc height (to the side the pointer is on), once its end is set
    if (S.tool === 'wall' && S.wall.shape === 'arc' && S.chain && S.arcEnd) {
      const h = parseLen(text, S.units), a = S.chain.points[S.chain.points.length - 1], b = S.arcEnd;
      if (!Number.isFinite(h)) { host.status(t('model.err.length'), true); return false; }
      const p = S.last?.snap?.p, side = p ? Math.sign((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) || 1 : 1;
      arcPoint(b, bulgeFromHeight(a, b, side * Math.abs(h)));
      return true;
    }
    const v = parseTyped(text, S.units);
    if (!v) { host.status(t('model.err.typed'), true); return false; }
    const pts = S.chain?.points;
    const last = pts ? pts[pts.length - 1] : null;
    let q = null;
    if (v.kind === 'abs') q = [v.x, v.y];
    else if (!last) { host.status(t('model.typed.first'), true); return false; }
    else if (v.kind === 'rel') q = [last[0] + v.dx, last[1] + v.dy];
    else if (v.kind === 'polar') q = [last[0] + v.len * Math.cos(v.angle * Math.PI / 180), last[1] + v.len * Math.sin(v.angle * Math.PI / 180)];
    else {
      // a length along the direction the pointer shows (its snapped direction), else along X
      const to = S.last?.snap?.p || [last[0] + 1, last[1]];
      const d = Math.hypot(to[0] - last[0], to[1] - last[1]) || 1;
      q = [last[0] + (to[0] - last[0]) / d * v.len, last[1] + (to[1] - last[1]) / d * v.len];
    }
    if (S.tool === 'wall') wallPoint(q);
    return true;
  }

  function drawOverlay() {
    if (!MS.pv) return;
    const o = { walls: [], lines: [], dashed: [], points: [], dims: [], symbols: [] };
    for (const q of S.queuedSegs()) o.walls.push(...[outlineOf(q)]);
    const lst = S.last;
    if (S.tool === 'wall' && lst?.snap) { o.snap = lst.snap; o.dashed.push(...(lst.snap.guides || [])); }
    if (S.tool === 'wall' && S.chain && S.wall.shape === 'arc') {
      // 0.6 round 2: a curved wall — the chord to its end, then the arc through the pointer
      const pts = S.chain.points, a = pts[pts.length - 1], p = lst?.snap?.p;
      for (const q of pts) o.points.push(q);
      if (S.arcEnd) o.points.push(S.arcEnd);
      if (p && S.arcEnd) {
        const bg = Math.max(-BULGE_MAX, Math.min(BULGE_MAX, bulgeThrough(a, p, S.arcEnd))), th = typeThickness(mc.projectWallType(S.wall.typeKey));
        const c = arcCentre(a, S.arcEnd, bg, th);
        o.walls.push(previewOutline({ a: c.a, b: c.b, t: th, bulge: Math.abs(bg) < 1e-6 ? 0 : bg }));
        const g = wallGeom({ a, b: S.arcEnd, bulge: bg });
        o.hud = { p, text: fmtLen(g.L, S.units) + (g.arc ? '  R ' + fmtLen(g.arc.R, S.units) : '') + '\n' + t('comforts.hud.archeight', { h: fmtLen(Math.abs(arcHeight(a, S.arcEnd, bg)), S.units) }) };
      } else if (p) {
        o.dashed.push([a[0], a[1], p[0], p[1]]);
        o.hud = { p, text: fmtLen(Math.hypot(p[0] - a[0], p[1] - a[1]), S.units) + '\n' + t('comforts.hud.arcend') };
      }
    } else if (S.tool === 'wall' && S.chain) {
      const pts = S.chain.points, a = pts[pts.length - 1];
      for (const q of pts) o.points.push(q);
      if (lst) {
        const b = lst.snap.p, L = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const type0 = mc.projectWallType(S.wall.typeKey);   // 0.10 FX.190: a just-saved type is not readable while the model reloads: no preview that frame
        if (L >= 1 && type0) {
          const type = type0, seg = { a, b, t: typeThickness(type) };
          const path = root.classList.contains('ws-active') || S.wall.reference.startsWith('core') ? placementPath([...pts, b], type, S.wall.reference, S.wall.side) : wallPath([...pts, b], seg.t, S.wall.reference, S.wall.side);
          o.walls.push(previewOutline(path.at(-1) || seg));
          const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
          o.hud = { p: b, text: fmtLen(L, S.units) + '  ' + fmtAngle(ang) + (closesChain(pts, b, 1) ? '\n' + t('model.hud.close') : '') };
          o.dims.push({ a, b, off: seg.t / 2 + MS.pv.pxToMm(18), text: fmtLen(L, S.units) });
        }
      }
    } else if (S.tool === 'wall' && lst?.snap) o.hud = { p: lst.snap.p, text: t('model.hud.start') };   // lst.snap: the Door / Window tool leaves a last point with no snap (0.10 bk-r3-shell: switching from it to Wall threw here)
    if (S.hover && (S.tool === 'door' || S.tool === 'window')) mc.openingPreview(S.hover, { kind: S.tool, ...S.open[S.tool] }, o);
    if (S.hover && (S.tool === 'floor' || S.tool === 'ceiling' || S.tool === 'roof')) mc.slabPreview(S.hover, S.tool, o);
    if (S.hover && S.drag?.kind === 'opening') mc.openingPreview(S.hover, { ...S.drag.op }, o);
    // the picked wall's grips; while one is dragged, the wall where it would go (joined to the others) and its length
    const gw = S.tool === 'select' ? mc.gripWall() : null;
    if (gw) o.grips = mc.gripsOf(gw).map((g) => ({ p: g.p, kind: g.end === 'mid' || g.end === 'bend' ? 'mid' : 'end' }));
    // 0.6 round 2: a wall drawn on a face shows that face (its location line) dashed when picked
    if (gw && gw.justification && gw.justification !== 'center') { const ll = locationLine(gw), pts = flatPoly([[...ll.a, ll.bulge], ll.b]); for (let i = 0; i + 1 < pts.length; i++) o.dashed.push([...pts[i], ...pts[i + 1]]); if (ll.bulge) o.dashed.push([...pts[pts.length - 1], ...ll.b]); }
    if (S.drag?.kind === 'grip' && S.drag.at) {
      const m = S.drag.at, w = S.drag.wall;
      const walls = mc.wallsHere().filter((x) => x.guid !== w.guid).map((x) => ({ key: x.guid, a: x.a, b: x.b, t: x.t, bulge: x.bulge }));
      walls.push({ key: '*', a: m.a, b: m.b, t: w.t, bulge: m.bulge ?? w.bulge });
      // 0.9 FX.22: a square move shows the joined walls going with it
      if (m.plan) for (const x of walls) { const q = m.plan.get(x.key); if (q) { x.a = q.a; x.b = q.b; } }
      const outlines = wallOutlines(walls), poly = outlines.get('*');
      if (m.plan) for (const g of m.plan.keys()) { const q = outlines.get(g); if (q) o.walls.push(q); }
      if (poly) o.walls.push(poly);
      const L = arcLength(m.a, m.b, m.bulge ?? w.bulge);
      o.dims.push({ a: m.a, b: m.b, off: w.t / 2 + MS.pv.pxToMm(18), text: fmtLen(L, S.units) });
      if (S.drag.typed) o.hud = { p: [(m.a[0] + m.b[0]) / 2, (m.a[1] + m.b[1]) / 2], text: S.drag.typed };
      else if (S.drag.end === 'mid') o.hud = { p: [(m.a[0] + m.b[0]) / 2, (m.a[1] + m.b[1]) / 2], text: fmtLen(m.plan ? Math.abs(m.by) : Math.hypot(m.a[0] - w.a[0], m.a[1] - w.a[1]), S.units) };
      if (m.snap && m.snap.kind !== 'free') o.snap = { p: S.drag.end === 'mid' || S.drag.end === 'bend' ? m.snap.p : (S.drag.end === 'a' ? m.a : m.b), kind: m.snap.kind };
    }
    for (const x of exts) x.overlay?.(o);
    S.placeHook?.overlay?.(o);
    if (S.dropGhost?.poly) { o.walls.push(S.dropGhost.poly); if (S.dropGhost.text) o.hud = { p: S.dropGhost.at, text: S.dropGhost.text }; }
    if (S.fixedMark && MS.pv) { const q = S.fixedMark, r = MS.pv.pxToMm(7); o.symbols.push({ lines: [[q[0] - r, q[1] - r, q[0] + r, q[1] + r], [q[0] - r, q[1] + r, q[0] + r, q[1] - r]], arcs: [{ c: q, r, a0: 0, a1: 2 * Math.PI }] }); }   // 0.9 FX.67: the side that holds
    if (S.hiEdge) o.lines.push(S.hiEdge);   // a roof's wall row hovered in Properties (RC.1)
    MS.pv.setOverlay(o);
  }
  /** The preview wall joined to the walls already there (so a corner looks as it will). */
  function previewOutline(seg) {
    const walls = mc.wallsHere().map((w) => ({ key: w.guid, a: w.a, b: w.b, t: w.t, bulge: w.bulge, off: w.joinOff }));
    S.queuedSegs().forEach((q, i) => walls.push({ key: 'q' + i, a: q.a, b: q.b, t: q.t, bulge: q.bulge }));
    walls.push({ key: '*', ...seg });
    return wallOutlines(walls).get('*') || outlineOf(seg);
  }
  function outlineOf(seg) {
    if (seg.bulge) return wallOutlines([{ key: '*', ...seg }]).get('*') || [];
    const L = Math.hypot(seg.b[0] - seg.a[0], seg.b[1] - seg.a[1]) || 1, n = [-(seg.b[1] - seg.a[1]) / L * seg.t / 2, (seg.b[0] - seg.a[0]) / L * seg.t / 2];
    return [[seg.a[0] - n[0], seg.a[1] - n[1]], [seg.b[0] - n[0], seg.b[1] - n[1]], [seg.b[0] + n[0], seg.b[1] + n[1]], [seg.a[0] + n[0], seg.a[1] + n[1]]];
  }

  return { snapWalls, snapCtx, snapAt, onMove, onClick, onDbl, endChain, applyTyped, drawOverlay };
}
