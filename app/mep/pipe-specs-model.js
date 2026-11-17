/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/pipe-specs-model.js — the open model's pipe specs and manufacturers' families, read from and written into the model file
 * (0.9.1, suggestion #1499). No DOM: bin/test-bimcraft.mjs --pipespecs runs it in Node. They live IN THE FILE, so a shared
 * model carries them and everyone editing it draws from the same tables:
 *
 *   CadCraft_MepPipeSpecs on the IfcProject    { Specs (JSON: the specs, mep/pipe-specs.js), BySystem (JSON: service → spec id) }
 *   CadCraft_MepFamilyIndex on the IfcProject  { Index (JSON: [{ id, name, rev }]) }            small: read on every refresh
 *   CadCraft_MepFamilies on the IfcProject     { F_<id> (JSON: one family with its mesh) … }     read only when the index moved
 *
 *   syncMepData(w)                     the model's specs and families made the ones in force (mep-model.js readRuns calls it, so
 *                                      Undo, Live edits and opening another file follow with nothing else to do)
 *   saveSpecs(specs, bySystem) → op    one undo step; refuses (mep.spec.err.inuse) to drop a spec or a size a run is drawn in;
 *                                      runs drawn in a spec whose numbers changed are made again
 *   specUse(w) → Map(spec id → { runs, sizes: Set })
 *   saveFamily(family) → op · removeFamily(id) → op (refused while it is placed: mep.oem.err.inuse) · familyUse(w) → Map(id → n)
 */
import { op } from '../model-ops.js';
import { ids } from '../ifc-util.js';
import { setModelSpecs, setSystemSpecs, modelSpecs, cleanSpec, isSpecMaterial, specsVersion, SPEC_PREFIX, SPEC_LIMITS } from './pipe-specs.js';
import { setModelFamilies, modelFamilies, cleanFamily, familiesVersion, FAMILY_LIMITS } from './oem-families.js';
import { readRuns, regenMep } from '../mep-model.js';
import { readEquipment } from './equipment.js';

export const SPEC_PSET = 'CadCraft_MepPipeSpecs';
export const FAM_INDEX_PSET = 'CadCraft_MepFamilyIndex';
export const FAM_PSET = 'CadCraft_MepFamilies';
const projectOf = (w) => { try { return ids(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
const refuse = (key, fill) => { throw Object.assign(new Error(key), { key, fill }); };
const parse = (s, d) => { try { const v = JSON.parse(String(s || '')); return v ?? d; } catch (e) { return d; } };

let LAST_SPECS = null, LAST_FAMS = null, SPEC_VER = -1, FAM_VER = -1;   // what was last read, and the registries' counters after it (set by anyone else since = read again)
export function syncMepData(w) {
  const id = projectOf(w);
  let ps = null, ix = null;
  try { ps = id ? w.readPset(id, SPEC_PSET) : null; ix = id ? w.readPset(id, FAM_INDEX_PSET) : null; } catch (e) { ps = null; ix = null; }
  const key = String(ps?.Specs || '') + '\u0001' + String(ps?.BySystem || '');
  if (key !== LAST_SPECS || specsVersion() !== SPEC_VER) {
    LAST_SPECS = key;
    const list = parse(ps?.Specs, []);
    setModelSpecs(Array.isArray(list) ? list : []);
    setSystemSpecs(parse(ps?.BySystem, {}));
    SPEC_VER = specsVersion();
  }
  const fkey = String(ix?.Index || '');
  if (fkey !== LAST_FAMS || familiesVersion() !== FAM_VER) {
    LAST_FAMS = fkey;
    const index = parse(ix?.Index, []), out = [];
    if (Array.isArray(index) && index.length) {
      let all = null;
      try { all = w.readPset(id, FAM_PSET); } catch (e) { all = null; }
      for (const row of index.slice(0, FAMILY_LIMITS.families)) { const c = cleanFamily(parse(all?.['F_' + row?.id], null)); if (c.family) out.push(c.family); }
    }
    setModelFamilies(out);
    FAM_VER = familiesVersion();
  }
}
/** Forget what was last read (a test opening one model after another with equal texts needs nothing; this is for a writer that changed the sets itself). */
function wrote(specsText, bySystemText) { LAST_SPECS = specsText + '\u0001' + bySystemText; SPEC_VER = specsVersion(); }

export function specUse(w) {
  const use = new Map();
  for (const r of readRuns(w)) {
    if (r.kind !== 'pipe' || !isSpecMaterial(r.mat)) continue;
    const id = r.mat.slice(SPEC_PREFIX.length);
    if (!use.has(id)) use.set(id, { runs: 0, sizes: new Set(), storeys: new Set() });
    const u = use.get(id); u.runs++; u.sizes.add(r.size); u.storeys.add(r.storey);
  }
  return use;
}
export function saveSpecs(specs, bySystem = {}) {
  const list = [];
  for (const raw of (specs || []).slice(0, SPEC_LIMITS.specs)) { const c = cleanSpec(raw); if (c.error) refuse(c.error, c.fill); if (list.some((s) => s.id === c.spec.id)) refuse('mep.spec.err.dupid', { name: c.spec.name }); list.push(c.spec); }
  const sys = {};
  for (const [k, v] of Object.entries(bySystem || {})) if (list.some((s) => s.id === v && s.sizes.length)) sys[k] = v;
  const a = JSON.stringify(list), b = JSON.stringify(sys);
  return op((w) => {
    const id = projectOf(w);
    if (!id) refuse('mep.spec.err.project');
    const use = specUse(w), storeys = new Set();   // read with the specs still in force
    for (const [sid, u] of use) {
      const s = list.find((x) => x.id === sid);
      if (!s) refuse('mep.spec.err.inuse', { name: modelSpecs().find((x) => x.id === sid)?.name || sid, n: u.runs });
      const gone = [...u.sizes].find((z) => !s.sizes.some((x) => x.name === z));
      if (gone !== undefined) refuse('mep.spec.err.sizeinuse', { name: s.name, size: gone });
      for (const st of u.storeys) storeys.add(st);
    }
    w.upsertPset(id, SPEC_PSET, [['Specs', 'IFCTEXT', a], ['BySystem', 'IFCTEXT', b]]);
    setModelSpecs(list); setSystemSpecs(sys); wrote(a, b);
    for (const st of storeys) if (st) regenMep(w, st);
    return { id, ids: [] };
  });
}

/** How many times each family is placed (on runs and as equipment). */
export function familyUse(w) {
  const use = new Map(), bump = (id) => use.set(id, (use.get(id) || 0) + 1);
  for (const r of readRuns(w)) for (const v of r.valves || []) if (v.fam) bump(v.fam);
  for (const e of readEquipment(w)) if (e.kind === 'oem' && e.values?.family) bump(e.values.family);
  return use;
}
const indexOf = (fams) => JSON.stringify(fams.map((f) => ({ id: f.id, name: f.name, rev: f.rev || 1 })));
export function saveFamily(family) {
  const c = cleanFamily(family);
  if (c.error) refuse(c.error, c.fill);
  return op((w) => {
    const id = projectOf(w);
    if (!id) refuse('mep.spec.err.project');
    syncMepData(w);
    const cur = modelFamilies(), old = cur.find((f) => f.id === c.family.id);
    if (!old && cur.length >= FAMILY_LIMITS.families) refuse('mep.oem.err.many', { n: FAMILY_LIMITS.families });
    const fam = { ...c.family, rev: (old?.rev || 0) + 1 };
    const next = old ? cur.map((f) => (f.id === fam.id ? fam : f)) : [...cur, fam];
    w.upsertPset(id, FAM_PSET, [['F_' + fam.id, 'IFCTEXT', JSON.stringify(fam)]]);
    const ix = indexOf(next);
    w.upsertPset(id, FAM_INDEX_PSET, [['Index', 'IFCTEXT', ix]]);
    setModelFamilies(next); LAST_FAMS = ix; FAM_VER = familiesVersion();
    // placed copies follow its ports and body
    if (old) { const sts = new Set(); for (const r of readRuns(w)) if ((r.valves || []).some((v) => v.fam === fam.id)) sts.add(r.storey); for (const st of sts) if (st) regenMep(w, st); }
    return { id, ids: [] };
  });
}
export function removeFamily(famId) {
  return op((w) => {
    const id = projectOf(w);
    if (!id) refuse('mep.spec.err.project');
    syncMepData(w);
    const n = familyUse(w).get(famId) || 0;
    if (n) refuse('mep.oem.err.inuse', { n });
    const next = modelFamilies().filter((f) => f.id !== famId), ix = indexOf(next);
    w.upsertPset(id, FAM_PSET, [['F_' + famId, 'IFCTEXT', '']]);
    w.upsertPset(id, FAM_INDEX_PSET, [['Index', 'IFCTEXT', ix]]);
    setModelFamilies(next); LAST_FAMS = ix; FAM_VER = familiesVersion();
    return { id, ids: [] };
  });
}
