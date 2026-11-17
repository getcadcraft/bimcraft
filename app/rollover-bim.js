/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rollover-bim.js — rollover information on the plan (0.10 BK.33, session bk-r3-shell-10): rest the pointer on a wall, a door, a
 * window, a room or a dimension, WITHOUT picking it, and read its type, its level, its size, and whether a wall is straight or skew.
 * The mechanism (when to ask, the tooltip beside the pointer, when it goes) is the shell's tooltip engine: window.ccTooltips.hover
 * (assets/js/app-tooltips.js; every tooltip is a Bootstrap tooltip). This file is BimCraft's thin adapter: the hit test is the
 * plan's own (PlanView.hit, the one a click uses) and the numbers come from the plan's data (model-ops.js snapshotModel).
 *
 *   wallShape(walls, wall)   → { kind: 'curved' | 'straight' | 'skew', deg }   DOM-free. Straight = square to the main direction of
 *                              the walls it is connected to (walls/square.js offSquare: the main direction squareUp turns walls
 *                              to); skew = off it by `deg` (0.05 degrees or more); a wall on its own is straight.
 *   infoFor(hit, ctx)        → { key, title, lines } | null   DOM-free. hit = { key, dim?: the dimension row }; ctx = { walls, openings,
 *                              spaces, levels, keyBase, units, t, wallName(wall), openingName(opening), roomLabel(key) → [name, area] }
 *   mountRollover(modelUi)   the page side: only with the Select tool, no drag and nothing being placed (a running tool keeps its
 *                              own hover marks). Test hook: window.bimcraftRollover = { at(clientX, clientY) }.
 */
import { offSquare } from './wall-square.js';
import { fmtLen } from './model-units.js';
import { openingType, openingTypeName } from './opening-types.js';
import { typeName } from './model-walls.js';

const SKEW_MIN = 0.05;   // degrees: below this a wall reads as straight (drawing and solver noise)

export function wallShape(walls, wall) {
  if (!wall) return null;
  if (wall.bulge) return { kind: 'curved', deg: 0 };
  let deg = 0;
  try { deg = offSquare(walls, wall.guid); } catch (e) { deg = 0; }   // a wall the level no longer has
  return deg >= SKEW_MIN ? { kind: 'skew', deg: Math.round(deg * 10) / 10 || 0.1 } : { kind: 'straight', deg: 0 };
}

export function infoFor(hit, ctx) {
  if (!hit || hit.key === null || hit.key === undefined) return null;
  const { t, units, keyBase = 0 } = ctx, len = (mm) => fmtLen(mm, units, { unit: true });
  const levelLine = (storey) => { const l = (ctx.levels || []).find((x) => x.id === storey); return l ? t('rollover.level', { name: l.name }) : null; };
  const title = (kind, name) => (name ? t('rollover.title', { kind, name }) : kind);
  if (hit.dim) {
    const d = hit.dim, w = (ctx.walls || []).find((x) => x.guid === d.wall);
    return { key: 'dim:' + hit.key + ':' + d.text, title: t('rollover.dim'), lines: [t('rollover.dim.len', { len: d.text }), t(d.overall ? 'rollover.dim.overall' : 'rollover.dim.part', { from: t('model.from.' + (d.from || 'center')) }),
      w ? t('rollover.dim.of', { name: ctx.wallName(w) }) : null, w ? levelLine(w.storey) : null].filter(Boolean) };
  }
  const w = (ctx.walls || []).find((x) => keyBase + x.id === hit.key);
  if (w) {
    const s = wallShape(ctx.walls, w);
    return { key: hit.key, title: title(t('model.wall'), ctx.wallName(w)), lines: [levelLine(w.storey), t('rollover.wall.size', { len: len(w.len), t: len(w.t) }),
      s.kind === 'curved' ? t('rollover.wall.curved') : s.kind === 'skew' ? t('rollover.wall.skew', { deg: s.deg }) : t('rollover.wall.straight')].filter(Boolean) };
  }
  const o = (ctx.openings || []).find((x) => keyBase + x.id === hit.key);
  if (o) {
    const host = (ctx.walls || []).find((x) => x.id === o.wall);
    return { key: hit.key, title: title(t(o.kind === 'door' ? 'model.tool.door' : 'model.tool.window'), ctx.openingName(o)), lines: [levelLine(o.storey), t('rollover.opening.size', { w: len(o.width), h: len(o.height) }),
      o.kind === 'window' && Number.isFinite(o.sill) ? t('rollover.opening.sill', { h: len(o.sill) }) : null, host ? t('rollover.opening.in', { name: ctx.wallName(host) }) : null].filter(Boolean) };
  }
  const sp = (ctx.spaces || []).find((x) => keyBase + x.id === hit.key);
  if (sp) {
    const lab = ctx.roomLabel ? ctx.roomLabel(hit.key) : null;
    return { key: hit.key, title: title(t('model.room'), sp.name || sp.number || ''), lines: [sp.name && sp.number ? t('rollover.room.number', { n: sp.number }) : null, levelLine(sp.storey), lab && lab[1] ? t('rollover.room.area', { area: lab[1] }) : null].filter(Boolean) };
  }
  return null;
}

export function mountRollover(modelUi) {
  if (!modelUi?.extend || typeof window === 'undefined') return null;
  const A = modelUi.extend({});
  const canvas = A.root.querySelector('[data-plan-canvas]');
  if (!canvas) return null;
  const wallName = (w) => { const a = w.assembly || A.projectWallType?.(w.typeKey); try { if (a) return typeName(a); } catch (e) { /* a type the project no longer has */ } return w.typeName || w.name || ''; };
  const openingName = (o) => { const ty = openingType(o.typeKey); return o.sizeName || (ty ? openingTypeName(ty) : '') || o.typeName || o.name || ''; };
  function at(clientX, clientY) {
    const S = A.S, pv = A.pv();
    if (!pv || !S.on || !S.data || S.tool !== 'select' || S.drag || S.placeHook) return null;
    const key = pv.hit(clientX, clientY);
    if (key === null || key === undefined) return null;
    // a dimension answers with its wall's key: it is the dimension when the plan without its dimensions has something else here
    let dim = null;
    const dims = pv.scene.dims || [];
    if (dims.some((d) => d.key === key)) {
      let under = key;
      pv.scene.dims = [];
      try { under = pv.hit(clientX, clientY); } finally { pv.scene.dims = dims; }
      if (under !== key) {
        const [x, y] = pv.toPlan(clientX, clientY), mine = dims.filter((d) => d.key === key);
        dim = mine.reduce((best, d) => { const m = Math.hypot((d.a[0] + d.b[0]) / 2 - x, (d.a[1] + d.b[1]) / 2 - y); return !best || m < best.m ? { d, m } : best; }, null)?.d || null;
      }
    }
    return infoFor({ key, dim }, { walls: S.data.walls, openings: S.data.openings, spaces: S.data.derived?.spaces || [], levels: S.data.levels, keyBase: A.kb(), units: A.units(), t: A.t, wallName, openingName,
      roomLabel: (k) => (pv.scene.rooms || []).find((r) => r.key === k)?.label || null });
  }
  let stop = null;
  const start = () => { if (!stop && window.ccTooltips?.hover) stop = window.ccTooltips.hover(canvas, (e) => at(e.clientX, e.clientY)); return !!stop; };
  if (!start()) window.addEventListener('load', start, { once: true });
  window.bimcraftRollover = { at };
  return { at };
}
