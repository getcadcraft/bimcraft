/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stair-family.js — a stair from a sketch as a FAMILY (0.8 SU.1055, round 5, session bim-build_PART_5). DOM-free; bin/test-bimcraft.mjs --r52.
 * The sketch (stair-sketch.js) gives the stair's spec; this writes it as a family recipe (family-model.js) so it opens in the family editor, takes sizes,
 * parameters and hotspots like any family, and is placed as one element.
 *
 *   stairFamily(spec, { name, key }) → recipe (format cadcraft-family v1)
 *     family axes: x along the first flight, y to the left of it, z up; the first tread's front edge is x = 0, the walking line y = 0
 *     parameters: Width, Tread (going), Height (total rise), Thick (a tread's thickness), N1 (treads in the first flight), N2 (treads in the second; L and U),
 *                 Gap (between the flights of a U), and the two it works out: Steps = the risers, Rise = Height / Steps (formulas)
 *     solids: the treads of each flight as ONE box repeated by the solid's array (count N1 / N2, step Tread and Rise), a square landing for an L, a wide one for a U
 *   stairFamilyPlace(spec) → { x, y, rot }   where the element goes so the family lands on the sketch
 *
 * Straight, L and U only (a winder or spiral stair stays an ordinary stair). The first-flight direction is the stair's `angle`; a right turn mirrors y.
 * Not part of the family: railings, the stairwell above, the code checks (those belong to an ordinary stair).
 */
import { STAIR_DEFAULTS, stairLayout } from './res-stair.js';

const fail = (key) => { throw Object.assign(new Error(key), { key }); };

export function stairFamily(spec0, { name = 'Stair', key = 'stair-sketch' } = {}) {
  const spec = { ...STAIR_DEFAULTS, ...spec0 };
  if (!['straight', 'l', 'u'].includes(spec.kind)) fail('model.err.stairfamily.kind');
  const L = stairLayout(spec);
  if (L.error) fail(L.error);
  const flights = L.pieces.filter((p) => p.kind === 'flight');
  const n1 = flights[0].n, n2 = flights[1]?.n ?? 0;
  const right = spec.turn === 'right' ? -1 : 1;   // the turn's side in the stair's own y
  const m = (e) => (right < 0 ? `(-1 * ${e})` : e);   // y of a bar on the turn side
  const params = [
    { key: 'Width', kind: 'length', value: Math.round(spec.width * 100) / 100 },
    { key: 'Tread', kind: 'length', value: Math.round(L.tread * 1e4) / 1e4 },
    { key: 'Height', kind: 'length', value: Math.round(spec.height * 100) / 100 },
    { key: 'Thick', kind: 'length', value: 150 },
    { key: 'N1', kind: 'integer', value: n1, label: 'Treads in the first flight' },
  ];
  if (spec.kind !== 'straight') params.push({ key: 'N2', kind: 'integer', value: n2, label: 'Treads in the second flight' });
  if (spec.kind === 'u') params.push({ key: 'Gap', kind: 'length', value: Math.round((spec.gap ?? STAIR_DEFAULTS.gap) * 100) / 100 });
  params.push({ key: 'Steps', kind: 'integer', value: L.n, formula: spec.kind === 'straight' ? '(N1 + 1)' : '(N1 + N2 + 2)', label: 'Risers' });
  params.push({ key: 'Rise', kind: 'length', value: Math.round(L.riser * 1e4) / 1e4, formula: '(Height / Steps)', label: 'Riser height' });
  const solids = [];
  const box = (id, nm, o) => solids.push({ id, name: nm, op: 'box', style: 'concrete', ...o });
  // flight 1: tread i (0-based) spans x i·Tread … (i+1)·Tread, top at (i+1)·Rise
  box('f1', 'Treads, first flight', { x0: '0', x1: 'Tread', y0: '(-Width / 2)', y1: '(Width / 2)', z0: '(Rise - Thick)', z1: 'Rise', array: { count: 'N1', dx: 'Tread', dy: '0', dz: 'Rise' } });
  if (spec.kind === 'l') {
    box('land', 'Landing', { x0: '(N1 * Tread)', x1: '(N1 * Tread + Width)', y0: '(-Width / 2)', y1: '(Width / 2)', z0: '((N1 + 1) * Rise - Thick)', z1: '((N1 + 1) * Rise)' });
    // flight 2 leaves the landing along the turn side: tread j spans y (Width/2 + j·Tread) … (Width/2 + (j+1)·Tread), top at (N1 + 2 + j)·Rise
    const y0 = right > 0 ? '(Width / 2)' : '(-Width / 2 - Tread)', y1 = right > 0 ? '(Width / 2 + Tread)' : '(-Width / 2)';
    box('f2', 'Treads, second flight', { x0: '(N1 * Tread)', x1: '(N1 * Tread + Width)', y0, y1, z0: '((N1 + 2) * Rise - Thick)', z1: '((N1 + 2) * Rise)', array: { count: 'N2', dx: '0', dy: right > 0 ? 'Tread' : '(-Tread)', dz: 'Rise' } });
  } else if (spec.kind === 'u') {
    // the landing spans the two flights and the gap; flight 2 comes back down the other side, centred at y = ±(Width + Gap)
    const lo = right > 0 ? '(-Width / 2)' : '(-1.5 * Width - Gap)', hi = right > 0 ? '(1.5 * Width + Gap)' : '(Width / 2)';
    box('land', 'Landing', { x0: '(N1 * Tread)', x1: '(N1 * Tread + Width)', y0: lo, y1: hi, z0: '((N1 + 1) * Rise - Thick)', z1: '((N1 + 1) * Rise)' });
    const c = m('(Width + Gap)');
    box('f2', 'Treads, second flight', { x0: '(N1 * Tread - Tread)', x1: '(N1 * Tread)', y0: `(${c} - Width / 2)`, y1: `(${c} + Width / 2)`, z0: '((N1 + 2) * Rise - Thick)', z1: '((N1 + 2) * Rise)', array: { count: 'N2', dx: '(-Tread)', dy: '0', dz: 'Rise' } });
  }
  return {
    format: 'cadcraft-family', version: 1, key, name, kind: 'generic', host: 'none', base: '', ifc: { class: 'IfcBuildingElementProxy' },
    params, solids, booleans: [],
    notes: 'A stair made from a sketch. N1 and N2 are the treads in each flight; Steps and Rise follow from them and Height. Railings and the stairwell are not part of it.',
  };
}

/** Where the element goes: the stair's start, turned to its angle (the family's x is the first flight). */
export function stairFamilyPlace(spec) { return { x: spec.start[0], y: spec.start[1], rot: ((spec.angle || 0) % 360 + 360) % 360 }; }
