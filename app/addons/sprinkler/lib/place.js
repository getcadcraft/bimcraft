/* SPDX-License-Identifier: Apache-2.0 */
/**
 * place.js — put sprinkler heads into the open BimCraft model (0.8 EG.3; add-on API 1.1 `api.model.write`). The heads are IfcFireSuppressionTerminal
 * .SPRINKLER. (IFC2X3: IfcFlowTerminal) with a small pendent body, contained in the storey, with the property set CadCraft_Sprinkler (K-factor, coverage,
 * design density, hazard class). Points are in the storey's plan mm. The fn that calls this must be repeatable (model.write runs it again on Redo).
 */
import { ids } from '../../../ifc-util.js';

export function placeHeads(w, heads, { storey = null, hazard, k, coverageM2 }) {
  const st = storey ?? ids(w.api, w.mid, 'IFCBUILDINGSTOREY')[0];
  if (!st) throw new Error('No level to put the heads on.');
  const stLine = w.api.GetLine(w.mid, st, false), made = [];
  // a pendent head: a cone of 8 sides, 25 mm across at the frame, 70 mm tall, the deflector at the placement
  const pos = [0, 0, 0], idx = [];
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; pos.push(25 * Math.cos(a), 25 * Math.sin(a), 70); }
  pos.push(0, 0, 70);
  for (let i = 0; i < 8; i++) { const a = 1 + i, b = 1 + ((i + 1) % 8); idx.push(0, b, a, 9, a, b); }
  for (const h of heads) {
    const lp = w.placeAt(stLine.ObjectPlacement.value, h.p[0], h.p[1], h.p[2], 0);
    const g = w.gid(), name = w.L('Sprinkler ' + h.id);
    const id = w.v4 ? w.make('IFCFIRESUPPRESSIONTERMINAL', g, w.ownerHistory(), name, null, w.L('Sprinkler'), w.H(lp), null, null, 'SPRINKLER')
      : w.make('IFCFLOWTERMINAL', g, w.ownerHistory(), name, null, w.L('Sprinkler'), w.H(lp), null, null);
    w.noteGuid(g, id);
    const body = w.bodyItems({ type: 'mesh', positions: pos, indices: idx });
    w.setShape(id, [w.rep('body', 'Body', body.type, body.items)]);
    w.contain(id, st);
    w.upsertPset(id, 'CadCraft_Sprinkler', [['Head', 'IFCLABEL', h.id], ['KFactor', 'IFCREAL', k], ['CoverageM2', 'IFCREAL', Math.round(coverageM2 * 100) / 100], ['DesignDensity', 'IFCREAL', hazard.density], ['Hazard', 'IFCLABEL', hazard.id]]);
    made.push({ id, guid: g });
  }
  return made;
}
