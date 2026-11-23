/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host.js — the Dome generator's adapter for BimCraft (copied from tools/dome/src/dome/hosts/bimcraft.js by tools/dome/sync.mjs). 0.11 DOME.2.
 *
 * The dome becomes ELEMENTS of the open model on a level: the ring beam (IfcFooting), the floor slab, the stem wall, the shell (IfcRoof, type
 * DOME_ROOF), the foam and the form membrane (IfcCovering), each a set of revolved solids (IfcRevolvedAreaSolid: the true surface of
 * revolution of a many-sided profile), with a colour, the `CadCraft_Dome` property set and base quantities. One placement is one undo step
 * (api.model.write); placing again replaces that dome's elements (found by the Job row of their property set) and nobody else's. z = 0 of the
 * dome (its floor) is the level's own height; its axis stands at the position typed in the panel. The openings are real gaps in the solids;
 * no door or window element is put in them.
 */
import { ids } from '../../ifc-util.js';
import { psetRows, qtyRows, pieceFrame } from './lib/ifcout.js';

export const PSET = 'CadCraft_Dome';
const CLASSES = ['IFCFOOTING', 'IFCSLAB', 'IFCWALL', 'IFCWALLSTANDARDCASE', 'IFCROOF', 'IFCCOVERING', 'IFCBUILDINGELEMENTPROXY'];
const rgb = (hex) => { const m = /^#?([0-9a-f]{6})$/i.exec(String(hex)); const n = m ? parseInt(m[1], 16) : 0xb8b8b0; return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };
const round = (v, dp = 9) => Number(Number(v).toFixed(dp));
export const jobKey = (name) => 'dome|' + String(name || 'Dome').slice(0, 60);

/** How many of the file's angle units make a radian (1, or 180/π when the file measures in degrees). */
function angleUnit(w) {
  let k = 1;
  try {
    for (const id of ids(w.api, w.mid, 'IFCCONVERSIONBASEDUNIT')) {
      const u = w.api.GetLine(w.mid, id, false), type = u.UnitType && u.UnitType.value, name = u.Name && u.Name.value;
      if (String(type) === 'PLANEANGLEUNIT' && /deg/i.test(String(name))) k = 180 / Math.PI;
    }
  } catch { /* radians */ }
  return k;
}

function elementsOf(w, key) {
  const out = [];
  for (const cls of CLASSES) {
    let list = [];
    try { list = ids(w.api, w.mid, cls); } catch { list = []; }
    for (const id of list) { let ps = null; try { ps = w.readPset(id, PSET); } catch { ps = null; } if (ps && ps.Job === key) out.push(id); }
  }
  return [...new Set(out)];
}
export function dropJob(w, key) { const old = elementsOf(w, key); if (old.length) w.dropProduct(old); return old.length; }

/** Write the element list into the model through a ModelWriter (inside api.model.write). → how many elements were made. */
export function writeElements(w, storeyGuid, elements, key, at = [0, 0]) {
  const st = w.byGuid(storeyGuid);
  if (!st) throw new Error('storey');
  const stl = w.api.GetLine(w.mid, st, false);
  dropJob(w, key);
  const sch = typeof w.fileSchema === 'function' ? w.fileSchema() : null;
  const ak = angleUnit(w);
  const styles = new Map();
  const styleFor = (hex, alpha) => { const k = hex + '|' + alpha; if (!styles.has(k)) styles.set(k, w.surfaceStyle('Dome ' + hex + (alpha < 1 ? ' ' + alpha : ''), rgb(hex), 1 - alpha)); return styles.get(k); };
  let n = 0;
  for (const e of elements) {
    const occ = sch && sch.entity(e.ifc) ? e.ifc : 'IFCBUILDINGELEMENTPROXY';
    const lp = w.placeAt(stl.ObjectPlacement.value, at[0], at[1], 0, 0);
    const g = w.gid();
    const pre = e.predefined || (e.objectType ? 'USERDEFINED' : 'NOTDEFINED');
    const id = w.make(occ, g, w.ownerHistory(), w.L(e.name), null, w.L(e.objectType || e.group), w.H(lp), null, w.L(e.key), ...w.occExtra(occ, { ifc: { predefined: pre } }));
    w.noteGuid(g, id);
    const items = [];
    for (const pc of e.pieces) {
      if (!(pc.a1 > pc.a0) || pc.profile.length < 3) continue;
      const f = pieceFrame(pc);
      const axis = w.make('IFCAXIS1PLACEMENT', w.H(w.point3(0, 0, 0)), w.H(w.dir(0, 1, 0)));
      items.push(w.make('IFCREVOLVEDAREASOLID', w.H(w.profile(pc.profile)), w.H(w.axisFrame(f.origin, f.z, f.x)), w.H(axis), round((pc.a1 - pc.a0) * ak)));
    }
    if (!items.length) continue;
    w.setShape(id, [w.rep('body', 'Body', 'SweptSolid', items)]);
    const style = styleFor(e.color, e.alpha ?? 1);
    for (const it of items) w.styleItem(it, style);
    w.contain(id, st);
    w.upsertPset(id, PSET, [['Job', 'IFCLABEL', key], ...psetRows(e)]);
    const q = qtyRows(e);
    if (q.length) w.upsertQto(id, 'Qto_CadCraftDomeBaseQuantities', q);
    n++;
  }
  return n;
}

export function makeHost(api) {
  const t = api.t;
  const level = () => {
    const lv = typeof api.model.levels === 'function' ? api.model.levels() : [];
    if (!lv.length) throw new Error(t('dome.bim.nolevel'));
    return lv[0];
  };
  return {
    id: 'bimcraft',
    notes: [t('dome.bim.note')],
    actions: [
      { id: 'place', label: t('dome.bim.place'), async run(result) {
        const lv = level(), key = jobKey(result.design.name);
        const r = await api.model.write(t('dome.bim.place.label'), (w) => writeElements(w, lv.guid, result.built.elements, key, result.at || [0, 0]));
        return t('dome.bim.placed', { n: r.value, level: lv.name || '' });
      } },
      { id: 'remove', label: t('dome.bim.remove'), async run(result) {
        const key = jobKey(result.design.name);
        const r = await api.model.write(t('dome.bim.remove.label'), (w) => dropJob(w, key));
        return r.value ? t('dome.bim.removed', { n: r.value }) : t('dome.bim.none');
      } },
    ],
  };
}
