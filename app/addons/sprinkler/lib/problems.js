/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems.js — the sprinkler layout and calculation as shared Problems (rule 29), in the shape mep/problems-mep.js builds.
 *   layoutProblems(layout, hazard) · designProblems(result, hazard, opts) → [problem]
 * Source `bimcraft.mep.sprinklers`. Words are English; `msg.key` is for the language files later.
 */
import { sprinklerProblem as P } from '../../../mep/problems-mep.js';

const f1 = (x) => Math.round(x * 10) / 10, f2 = (x) => Math.round(x * 100) / 100;
export function layoutProblems(layout, hazard) {
  const out = [];
  for (const i of layout.issues || []) {
    if (i.code === 'coverage') out.push(P('spk.coverage', 'error', `${f1(i.vars.pct)} % of the room is more than 0.75 × the allowed spacing (${hazard.maxSpacing} mm) from a head.`, { part: 'coverage', vars: i.vars, req: { op: '<=', value: f1(0.75 * hazard.maxSpacing), unit: 'mm' } }));
    else if (i.code === 'wall') out.push(P('spk.wall', 'warning', `A head would be ${i.vars.mm} mm from the wall; the nearest allowed is set in the options.`, { part: 'wall', vars: i.vars }));
    else if (i.code === 'offgrid') out.push(P('spk.offgrid', 'note', `${i.vars.n} head${i.vars.n > 1 ? 's' : ''} in cells the room only partly fills sit off the grid.`, { part: 'offgrid', vars: i.vars }));
    else if (i.code === 'room') out.push(P('spk.room', 'error', 'The room outline has fewer than three corners.', { part: 'room' }));
  }
  if (layout.heads?.length && layout.coveragePerHead > hazard.maxCoverage + 1e-9) out.push(P('spk.area', 'error', `Each head covers ${f1(layout.coveragePerHead)} m²; the class allows ${hazard.maxCoverage} m².`, { part: 'area', req: { op: '<=', value: hazard.maxCoverage, unit: 'm2' }, found: { value: f1(layout.coveragePerHead), unit: 'm2' } }));
  if (layout.heads?.length && Math.max(layout.sx, layout.sy) > hazard.maxSpacing + 1e-6) out.push(P('spk.spacing', 'error', `Head spacing of ${Math.round(Math.max(layout.sx, layout.sy))} mm is over the allowed ${hazard.maxSpacing} mm.`, { part: 'spacing', req: { op: '<=', value: hazard.maxSpacing, unit: 'mm' }, found: { value: Math.round(Math.max(layout.sx, layout.sy)), unit: 'mm' } }));
  return out;
}
export function designProblems(r, hazard, { vmax = 6 } = {}) {
  const out = [];
  if (r.failed) return [P('spk.solve', 'error', 'The calculation could not find a pressure that gives every head in the remote area its minimum. Check the pipe sizes and the head K-factor.', { part: 'solve' })];
  if (r.ok === false) out.push(P('spk.supply', 'error', `The supply gives ${f2(r.availableBar)} bar at ${Math.round(r.qTotalLmin)} L/min; the system needs ${f2(r.requiredWithMarginBar)} bar.`, { part: 'supply', req: { op: '>=', value: f2(r.requiredWithMarginBar), unit: 'bar' }, found: { value: f2(r.availableBar), unit: 'bar' } }));
  if (r.minDensity < hazard.density - 0.02) out.push(P('spk.density', 'error', `The least served head gets ${f2(r.minDensity)} mm/min; the design density is ${hazard.density}.`, { part: 'density', req: { op: '>=', value: hazard.density, unit: 'mm/min' }, found: { value: f2(r.minDensity), unit: 'mm/min' } }));
  if (r.maxV > vmax) out.push(P('spk.velocity', 'warning', `Water moves at ${f1(r.maxV)} m/s in the fastest pipe; ${vmax} m/s is the limit set.`, { part: 'velocity', req: { op: '<=', value: vmax, unit: 'm/s' }, found: { value: f1(r.maxV), unit: 'm/s' } }));
  out.push(P('spk.defaults', 'note', 'The design density, area, spacing and hose allowance are labelled defaults, and fitting losses are equivalent lengths in pipe diameters. Type the table of the standard in force and have the result reviewed.', { part: 'defaults' }));
  return out;
}
