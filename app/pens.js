/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pens.js — a view's pen and line overrides (0.8 SU.1055, session bim-08). DOM-free; bin/test-bimcraft.mjs --pens.
 * A view here is a level's plan. An override is { id, scope, weight, dash, color }:
 *   scope  { by: 'category', value: 'wall' | 'door' | 'window' }   every element of that category
 *          { by: 'type', value: '<typeKey>' }                      every element made from that wall / door / window type
 *          { by: 'element', value: '<GlobalId>' }                  one element
 *   weight  pen width in px (0.5 – 8), dash 'solid' | 'dash' | 'dot', color a page token ('--ink', '--layer-red', …) or ''
 * More specific beats less: element, then type, then category; the last one added wins within a rule.
 *
 *   penFor(overrides, item) → { w, dash, color } | null     item = { kind: 'wall'|'door'|'window', typeKey, guid }
 */
export const WEIGHTS = [0.5, 1, 1.75, 2.5, 4, 6];
export const DASHES = ['solid', 'dash', 'dot'];
export const COLORS = ['', '--ink', '--ink-2', '--layer-red', '--layer-blue', '--layer-orange', '--layer-magenta', '--layer-ochre', '--layer-green', '--layer-violet', '--layer-cyan'];
const RANK = { element: 3, type: 2, category: 1 };

/** An override as stored, made safe (it comes from localStorage): unknown scope or colour dropped, weight clamped. */
export function cleanOverride(o) {
  if (!o || typeof o !== 'object' || !o.scope || !RANK[o.scope.by] || typeof o.scope.value !== 'string' || !o.scope.value) return null;
  if (o.scope.by === 'category' && !['wall', 'door', 'window'].includes(o.scope.value)) return null;
  const w = Number(o.weight) > 0 ? Math.max(0.5, Math.min(8, Number(o.weight))) : null;
  const dash = DASHES.includes(o.dash) ? o.dash : 'solid';
  const color = COLORS.includes(o.color) ? o.color : '';
  if (!w && dash === 'solid' && !color) return null;
  return { id: String(o.id || ''), scope: { by: o.scope.by, value: o.scope.value.slice(0, 80) }, weight: w, dash, color };
}

export function penFor(overrides, item) {
  let best = null, rank = 0;
  for (const o of overrides || []) {
    const r = RANK[o.scope.by];
    const hit = (o.scope.by === 'category' && o.scope.value === item.kind) || (o.scope.by === 'type' && o.scope.value === item.typeKey) || (o.scope.by === 'element' && o.scope.value === item.guid);
    if (hit && r >= rank) { best = o; rank = r; }
  }
  return best ? { w: best.weight || 0, dash: best.dash, color: best.color } : null;
}

/**
 * 0.8 SU.1055 round 5: the pens' colours in the 3D view. all = { <level GlobalId>: [override…] } (the Pens panel's store), D = the model's data
 * ({ levels: [{ id, guid }], walls: [{ id, guid, storey, typeKey }], openings: [{ id, guid, storey, kind, typeKey }] }), key(id) → the viewer key.
 * → Map(viewer key → colour token). Only the colour counts in 3D (a weight or a dash is a line's; the 3D view draws surfaces), and an element with no colour pen is left alone.
 */
export function penColors(all, D, key = (id) => id) {
  const out = new Map(), guidOf = new Map((D?.levels || []).map((l) => [l.id, l.guid])), lists = new Map();
  const listFor = (storey) => {
    const g = guidOf.get(storey);
    if (!lists.has(g)) lists.set(g, ((all || {})[g] || []).map(cleanOverride).filter(Boolean));
    return lists.get(g);
  };
  for (const w of D?.walls || []) { const p = penFor(listFor(w.storey), { kind: 'wall', typeKey: w.typeKey, guid: w.guid }); if (p?.color) out.set(key(w.id), p.color); }
  for (const o of D?.openings || []) { const p = penFor(listFor(o.storey), { kind: o.kind === 'window' ? 'window' : 'door', typeKey: o.typeKey, guid: o.guid }); if (p?.color) out.set(key(o.id), p.color); }
  return out;
}
