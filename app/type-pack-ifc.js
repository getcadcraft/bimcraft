/* SPDX-License-Identifier: Apache-2.0 */
/**
 * type-pack-ifc.js — a type pack as an IFC file, and wall types read out of any IFC file (0.10 BK.97, session bk-content-10). No DOM.
 *
 *   typePackFromModel(w, { name }) → { pack, notes: [{ key, fill }] }      (w: a ModelWriter on the file)
 *       Our own wall types (their recipe is in the file) come back exactly. Another program's IfcWallType is read from its
 *       IfcMaterialLayerSet: each layer's material name and thickness are the file's; what the file does not say is GUESSED and the
 *       type is marked `guessed`: a layer's function from its IFC4 Category or its material's name, the core as the structure layers
 *       (else the thickest layer). Classification codes on the type come along. A type with no layer set is left out and named in notes.
 *   typePackScratch(WebIFC, IfcModel) → { toIfc(pack, { name }) → bytes, fromIfc(bytes) → { pack, notes }, close() }
 *       toIfc: a small IFC4 file: an IfcProjectLibrary that declares (IfcRelDeclares) every IfcWallType of the pack, each with its
 *       IfcMaterialLayerSet (IfcRelAssociatesMaterial), its classification references and the property set CadCraft_WallType (Key,
 *       Thickness, Recipe: the whole recipe as text, so CadCraft reads it back exactly), plus the pack's families as IFC types. Any BIM
 *       program reads the types, layers, materials and codes; only the tags IFC has no place for live in the Recipe text.
 */
import { newBuilding, stackLevels } from './new-model.js';
import { IfcEditor } from './ifc-edit.js';
import { ModelWriter } from './model-write.js';
import { op } from './model-ops.js';
import { readAssemblyRecords, validateAssembly, ASSEMBLY_PSET } from './wall-assemblies.js';
import { readMaterials, validateMaterial, normalizeLayer } from './project-materials.js';
import { classificationIndex, codesOf } from './classify-model.js';
import { SYSTEM_IDS } from './classify/classify.js';
import { makeTypePack, importTypePack, TYPE_PACK_FORMAT } from './type-pack.js';
import { familyIndex } from './family-model.js';
import { familyWriter } from './family-ops.js';
import { ids, val } from './ifc-util.js';

const cname = (l) => String(l?.constructor?.name || '');
const FUNCTION_WORDS = [
  ['finish', /facing|veneer|cladding|siding|lining/i],   // a facing brick is a finish, not the structure
  ['membrane', /membrane|vapou?r|barrier|dpc|dpm|damp|air ?tight|wrap|foil/i],
  ['insulation', /insul|wool|eps\b|xps\b|pir\b|pur\b|foam|cellulose|glass ?fib|rock ?wool/i],
  ['structure', /load|struct|stud|fram|concrete|block|brick|masonry|cmu|clt\b|timber|steel|stone|adobe|rammed/i],
  ['substrate', /sheath|osb\b|plywood|board(?!.*gyps)|substrate|backing|batten|furring|lath/i],
  ['finish', /finish|gyps|plaster|render|stucco|paint|tile|clad|siding|panel|veneer|drywall|lining/i],
];
/** A layer's function: the file's own word first (IFC4 Category), then the material's name; 'finish' when nothing says. */
export function guessFunction(category, materialName) {
  for (const s of [category, materialName]) for (const [fn, re] of FUNCTION_WORDS) if (s && re.test(s)) return fn;
  return 'finish';
}

function foreignType(w, id, n) {
  const line = w.api.GetLine(w.mid, id, false);
  const rel = w.materialRel(id);
  let set = rel?.def ? w.api.GetLine(w.mid, rel.def, false) : null;
  if (set && /LAYERSETUSAGE$/i.test(cname(set))) set = set.ForLayerSet ? w.api.GetLine(w.mid, set.ForLayerSet.value, false) : null;
  const name = String(val(line.Name) || val(set?.LayerSetName) || '').trim().slice(0, 100) || 'Wall type ' + n;   // i18n-ignore: a name for a type that has none in its file
  if (!set || !/MATERIALLAYERSET$/i.test(cname(set)) || !(set.MaterialLayers || []).length) return { skip: { key: 'typepack.note.nolayers', fill: { name } } };
  const layers = [];
  for (const h of set.MaterialLayers) {
    const l = w.api.GetLine(w.mid, h.value, false);
    const t = Math.round(Number(val(l.LayerThickness)) * w.unitMm * 1000) / 1000;
    const mat = l.Material ? String(val(w.api.GetLine(w.mid, l.Material.value, false)?.Name) || '').trim().slice(0, 100) : '';
    const category = String(val(l.Category) || '');
    if (!(t >= 0)) return { skip: { key: 'typepack.note.badlayer', fill: { name } } };
    if (!mat) layers.push({ mat: 'air', kind: 'cavity', t, function: 'finish', core: false, ventilation: l.IsVentilated == null ? 'unspecified' : val(l.IsVentilated) === true ? 'ventilated' : 'unventilated' });
    else layers.push({ mat, t, function: t === 0 ? 'membrane' : guessFunction(category, val(l.Name) ? val(l.Name) + ' ' + mat : mat), core: false });
  }
  // the core: the structure layers when they sit together, else the thickest layer
  const st = layers.map((l, i) => (l.function === 'structure' && l.kind !== 'cavity' && l.t > 0 ? i : -1)).filter((i) => i >= 0);
  if (st.length && st.at(-1) - st[0] + 1 === st.length) for (const i of st) layers[i].core = true;
  else { const solid = layers.filter((l) => l.kind !== 'cavity'); const thick = solid.reduce((a, b) => (b.t > a.t ? b : a), solid[0]); if (thick) thick.core = true; }
  const key = 'wall-ifc-' + String(val(line.GlobalId) || n).replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 60);
  try { return { recipe: validateAssembly({ version: 1, key, name, exterior: /ext|outer|facade|façade/i.test(name), layers }), id }; }
  catch (e) { return { skip: { key: 'typepack.note.refused', fill: { name, why: e.message } } }; }
}

export function typePackFromModel(w, { name = '' } = {}) {
  const notes = [];
  const records = [...readAssemblyRecords(w), ...['floor', 'roof', 'ceiling'].flatMap((k) => readAssemblyRecords(w, k))];   // 0.10 BK.24 (bk-r3-types-10): floor, roof and ceiling types too
  for (const r of records) if (r.issue) notes.push({ key: 'typepack.note.damaged', fill: { name: r.key || '' } });
  const ours = records.filter((r) => !r.issue);
  let pack;
  try { pack = makeTypePack(w, { keys: ours.map((r) => r.key), families: 'all', name }); }
  catch (e) { pack = makeTypePack(w, { keys: ours.map((r) => r.key), name }); notes.push({ key: 'typepack.note.families', fill: {} }); }
  // another program's wall types: those with no CadCraft_WallType set
  const ix = classificationIndex(w), extra = [], layers = [];
  let n = 0;
  for (const id of ids(w.api, w.mid, 'IFCWALLTYPE')) {
    const line = w.api.GetLine(w.mid, id, false);
    if ((line.HasPropertySets || []).some((h) => val(w.api.GetLine(w.mid, h.value, false)?.Name) === ASSEMBLY_PSET)) continue;
    const r = foreignType(w, id, ++n);
    if (r.skip) { notes.push(r.skip); continue; }
    let recipe = r.recipe;
    if ([...pack.types, ...extra].some((t) => t.recipe.name.toLowerCase() === recipe.name.toLowerCase())) recipe = { ...recipe, name: (recipe.name.slice(0, 90) + ' (' + n + ')') };
    const own = codesOf(w, id, ix).own, classification = {};
    for (const s of SYSTEM_IDS) if (own[s]?.code) classification[s] = { code: own[s].code, title: own[s].title || '' };
    extra.push({ kind: 'wall', ifc: { class: 'IfcWallType', predefined: 'STANDARD' }, recipe, thickness: Math.round(recipe.layers.reduce((s, l) => s + l.t, 0) * 1000) / 1000, ...(Object.keys(classification).length ? { classification } : {}), guessed: true });
    layers.push(...recipe.layers.map(normalizeLayer));
  }
  if (extra.length) {
    const used = new Set(layers.filter((l) => l.kind === 'material').map((l) => l.materialId));
    const have = new Set(pack.materials.map((m) => m.id));
    for (const m of readMaterials(w, layers)) if (used.has(m.id) && !have.has(m.id)) pack.materials.push(validateMaterial(m));
    pack.types.push(...extra);
  }
  return { pack, notes };
}

export async function typePackScratch(WebIFC, IfcModel) {
  const eng = await IfcModel.create(WebIFC, null);
  const fresh = async (bytes) => { await eng.load(bytes); return new IfcEditor(WebIFC, eng); };
  return {
    async toIfc(pack, { name = '' } = {}) {
      const title = String(name || pack.name || 'Type pack').slice(0, 120);   // i18n-ignore: the library's name inside the file when the pack has none
      const ed = await fresh(new TextEncoder().encode(newBuilding({ name: title, levels: stackLevels(1, 3000, () => 'Level 1'), fileName: 'types.ifc', now: new Date() })));   // i18n-ignore: a name inside a file of types (no model in it)
      ed.modelChange(importTypePack({ ...pack, format: TYPE_PACK_FORMAT }, { conflict: 'copy' }));
      ed.modelChange(op((w) => {
        familyWriter(w);
        const proj = w.api.GetLine(w.mid, ids(w.api, w.mid, 'IFCPROJECT')[0], false);
        const lib = w.make('IFCPROJECTLIBRARY', w.guid(), w.ownerHistory(), w.L(title), null, null, null, null, proj.RepresentationContexts, proj.UnitsInContext);
        const idx = familyIndex(w);
        const defs = [...ids(w.api, w.mid, 'IFCWALLTYPE'), ...['floor', 'roof', 'ceiling'].flatMap((k) => readAssemblyRecords(w, k).map((r) => r.id)), ...[...idx.groups.values()].map((g) => g.id), ...idx.sizes.keys()].map((id) => w.H(id));
        if (defs.length) w.make('IFCRELDECLARES', w.guid(), w.ownerHistory(), null, null, w.H(lib), defs);
        w.make('IFCRELDECLARES', w.guid(), w.ownerHistory(), null, null, w.H(proj.expressID), [w.H(lib)]);
        return { id: null, ids: [] };
      }));
      return ed.save();
    },
    async fromIfc(bytes, { name = '' } = {}) {
      const ed = await fresh(bytes);
      return typePackFromModel(new ModelWriter(WebIFC, ed.api, ed.mid), { name });
    },
    close() { eng.close(); },
  };
}
