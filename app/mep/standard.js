/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/standard.js — the model's plumbing standard (0.8 SU.955, session `mep-08`; asked on /suggest by the contributor of the
 * plumbing PRs #7–#12). DOM-free. "US" (IPC tables, inch sizes) or "Brazil (ABNT)" (NBR 5648 / NBR 5688 PVC, NBR 8160 slopes,
 * DN sizes). It is kept in the model, so everyone editing a file starts runs the same way:
 *
 *   CadCraft_MepProject { PlumbingStandard: 'us' | 'br' } on the IfcProject (no set = not chosen: a run follows its material, as in 0.7)
 *   readModelStandard(w) → 'us' | 'br' | null · saveModelStandard(std) → one op (std null clears it)
 *
 * What it changes: the material, class, size and slope a NEW run starts with (mep-model.js runDefaults), also when it is started
 * on a family connector or an equipment port. Runs already drawn keep their material (and so their own tables and slopes); the
 * material list on the bar is still open, so a Brazilian run can be drawn in a US project on purpose.
 */
import { op } from '../model-ops.js';
import { ids } from '../ifc-util.js';
import { PLUMBING_STANDARDS } from './pipes.js';

export const STANDARD_PSET = 'CadCraft_MepProject';
const projectOf = (w) => { try { return ids(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };

export function readModelStandard(w) {
  const id = projectOf(w);
  const ps = id ? w.readPset(id, STANDARD_PSET) : null;
  const v = ps?.PlumbingStandard == null ? '' : String(ps.PlumbingStandard).toLowerCase();
  return PLUMBING_STANDARDS.includes(v) ? v : null;
}
export function saveModelStandard(std) {
  return op((w) => {
    const id = projectOf(w);
    if (!id) throw Object.assign(new Error('mep.std.err.project'), { key: 'mep.std.err.project' });
    w.upsertPset(id, STANDARD_PSET, [['PlumbingStandard', 'IFCLABEL', PLUMBING_STANDARDS.includes(std) ? std : '']]);
    return { id, ids: [] };
  });
}
