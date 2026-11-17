/* SPDX-License-Identifier: Apache-2.0 */
// Project-owned defaults. Layer thickness is always explicit, never a live link to a default.
import { ids, val } from './ifc-util.js';
import { t as tr } from './i18n.js';
import { parseRecord, recordError, readRecordPset } from './record-contract.js';
export const MATERIAL_PSET = 'CadCraft_MaterialLibrary';
export const FILLS = ['none', 'solid', 'diagonal', 'crosshatch'];
export const VENTILATION = ['unspecified', 'unventilated', 'ventilated'];
// i18n-ignore-start: the starter materials' names are data written into the project's IFC (the file keeps one name), not interface words
const starters = [
  ['gypsum','Gypsum board','Board',12.7,'#e5dfd0','solid'],
  ['studs','Wood framing','Framing',139.7,'#c9a675','diagonal'],
  ['osb','OSB sheathing','Sheathing',12.7,'#b99862','crosshatch'],
  ['plywood','Plywood','Sheathing',12.7,'#c6a77d','diagonal'],
  ['siding','Siding','Cladding',19.05,'#e8e4dc','solid'],
  ['brick','Brick veneer','Masonry',92.075,'#94503c','diagonal'],
  ['cmu','Concrete masonry unit','Masonry',193.675,'#a4a19b','crosshatch'],
  ['concrete','Concrete','Concrete',200,'#b0ada5','solid'],
  ['block','Masonry block','Masonry',175,'#a4a19b','crosshatch'],
  ['insulation','Insulation','Insulation',100,'#e5cf89','diagonal'],
  ['render','Render','Finish',15,'#d0c6b5','solid'],
  ['plaster','Plaster','Finish',10,'#e5dfd0','solid'],
  ['membrane','Membrane','Membrane',0,'#6b747a','solid'],
];
// 0.10 BK.15 / BK.24 (bk-r3-types-10): the generic material of the generic starter types, and what the floor, roof and ceiling starter
// types are built of. NOT part of a new project's library (a project that uses none of them is written exactly as before): each joins
// the project's library the first time a type that uses it is used or opened in the type editor.
const extras = [
  ['generic','Generic (not yet chosen)','Generic',200,'#ececec','diagonal'],
  ['flooring','Floor finish','Finish',15,'#c9b08a','solid'],
  ['screed','Screed','Finish',50,'#c4c0b6','solid'],
  ['roofing','Roof covering','Cladding',20,'#7d6a5d','diagonal'],
  ['ceilingtile','Ceiling tile','Board',15,'#eeeeea','solid'],
];
// i18n-ignore-end
export const STARTER_MATERIALS = starters.map(([legacyName,name,category,defaultThickness,color,fill])=>({id:'material-'+legacyName,legacyName,name,category,defaultThickness,color,fill,fillColor:'#555555',notes:'Generic starting value; verify the product and assembly before use.'}));
export const EXTRA_MATERIALS = extras.map(([legacyName,name,category,defaultThickness,color,fill])=>({id:'material-'+legacyName,legacyName,name,category,defaultThickness,color,fill,fillColor:'#555555',notes:'Generic starting value; verify the product and assembly before use.'}));
export function legacyMaterialId(name) {
  return [...STARTER_MATERIALS,...EXTRA_MATERIALS].find(m=>m.legacyName===name)?.id || 'material-legacy-'+Array.from(new TextEncoder().encode(name),b=>b.toString(16).padStart(2,'0')).join('');
}
export function normalizeLayer(layer) {
  const cavity=layer.kind==='cavity' || (layer.kind==null && layer.mat==='air');
  return {...layer,kind:cavity?'cavity':'material',materialId:cavity?null:(layer.materialId || legacyMaterialId(layer.mat)),...(cavity?{ventilation:layer.ventilation || 'unspecified'}:{})};
}
export function validateMaterial(input) {
  const m={id:input?.id,name:String(input?.name || '').trim(),legacyName:String(input?.legacyName || input?.name || '').trim(),category:String(input?.category || '').trim(),defaultThickness:input?.defaultThickness,color:input?.color,fill:input?.fill,fillColor:input?.fillColor,notes:String(input?.notes || '').trim()};
  if(!/^material-[a-zA-Z0-9_-]{1,800}$/.test(m.id || '')) throw new Error(tr('wall.err.invalid_material_id'));
  if(!m.name || m.name.length>100 || !m.legacyName || m.legacyName.length>100) throw new Error(tr('wall.err.enter_a_material_name_up_to_100_characters'));
  if(m.category.length>100 || m.notes.length>2000) throw new Error(tr('wall.err.category_or_notes_are_too_long'));
  if(!Number.isFinite(m.defaultThickness) || m.defaultThickness<0 || m.defaultThickness>2000) throw new Error(tr('wall.err.default_thickness_must_be_between_0_and_2000_mm'));
  if(!/^#[0-9a-f]{6}$/i.test(m.color) || !/^#[0-9a-f]{6}$/i.test(m.fillColor) || !FILLS.includes(m.fill)) throw new Error(tr('wall.err.choose_valid_colors_and_a_fill_pattern'));
  return m;
}
function legacyLayers(w) {
  const layers=[];
  for(const id of ids(w.api,w.mid,'IFCWALLTYPE')) {
    const line=w.api.GetLine(w.mid,id,false);
    for(const h of line.HasPropertySets || []) {
      const ps=w.api.GetLine(w.mid,h.value,false);
      if(val(ps?.Name)!=='CadCraft_WallType') continue;
      for(const ph of ps.HasProperties || []) {
        const p=w.api.GetLine(w.mid,ph.value,false);
        if(val(p?.Name)==='Recipe') { try { const r=JSON.parse(val(p.NominalValue)); if((!Object.hasOwn(r,'version') || r.version===1) && Array.isArray(r.layers)) layers.push(...r.layers); } catch { /* Preserve unreadable recipes untouched. */ } }
      }
    }
  }
  return layers;
}
export function readMaterials(w, additionalLayers=[]) {
  if(!w) return structuredClone(STARTER_MATERIALS);
  const project=ids(w.api,w.mid,'IFCPROJECT')[0];
  const ps=project && readRecordPset(w,project,MATERIAL_PSET,'materials'), raw=ps?.Library;
  let materials;
  if(ps) {
    const doc=parseRecord(raw,'materials',false);
    try {
      if(!Array.isArray(doc.materials) || !doc.materials.length) throw new Error();
      materials=doc.materials.map(validateMaterial);
      if(new Set(materials.map(m=>m.id)).size!==materials.length) throw new Error();
    } catch { throw recordError('materials','corrupt'); }
  } else materials=structuredClone(STARTER_MATERIALS);
  for(const rawLayer of [...legacyLayers(w),...additionalLayers]) {
    if(typeof rawLayer?.mat!=='string' || !rawLayer.mat.trim() || rawLayer.mat.length>100 || !Number.isFinite(rawLayer.t) || rawLayer.t<0 || rawLayer.t>2000) continue;
    const l=normalizeLayer(rawLayer);
    if(l.kind==='cavity' || materials.some(m=>m.id===l.materialId)) continue;
    // Only known legacy names can create a fallback. Broken explicit references must remain visible.
    if(l.materialId!==legacyMaterialId(l.mat)) continue;
    // 0.10 BK.15: one of the extra starter materials comes in as what it is (name, colour, hatch), not as an imported one
    const starter=EXTRA_MATERIALS.find(m=>m.id===l.materialId);
    // i18n-ignore: a note stored in the project's material record
    materials.push(starter?structuredClone(starter):validateMaterial({id:l.materialId,legacyName:l.mat,name:l.mat,category:'Imported',defaultThickness:l.t,color:'#d8d3c4',fill:'solid',fillColor:'#555555',notes:'Preserved from an existing wall assembly.'}));
  }
  return materials;
}
export function writeMaterials(w,materials) {
  readMaterials(w);
  const project=ids(w.api,w.mid,'IFCPROJECT')[0];
  if(!project) throw new Error(tr('wall.err.a_project_is_required_to_save_materials'));
  w.upsertPset(project,MATERIAL_PSET,[['Library','IFCTEXT',JSON.stringify({version:1,materials:materials.map(validateMaterial)})]]);
}
export function saveMaterial(w,input) {
  const m=validateMaterial(input), materials=readMaterials(w), index=materials.findIndex(x=>x.id===m.id);
  if(materials.some(x=>x.id!==m.id && x.name.toLowerCase()===m.name.toLowerCase())) throw new Error(tr('wall.err.a_material_with_this_name_already_exists'));
  if(index<0) materials.push(m); else materials[index]={...m,legacyName:materials[index].legacyName};
  writeMaterials(w,materials);
  // IFC materials owned by this library have a stable identity independent of their display name.
  const cls=w.v4?'IFCMATERIALPROPERTIES':'IFCEXTENDEDMATERIALPROPERTIES';
  for(const id of ids(w.api,w.mid,cls)) {
    const p=w.api.GetLine(w.mid,id,false);
    if(val(p.Name)!=='CadCraft_Material') continue;
    const props=p.Properties || p.ExtendedProperties || [];
    if(!props.some(h=>{const x=w.api.GetLine(w.mid,h.value,false);return val(x.Name)==='Id' && val(x.NominalValue)===m.id;})) continue;
    const mat=w.touch(p.Material.value);mat.Name=w.L(m.name);if(w.v4) mat.Category=w.L(m.category);w.write(mat);
  }
  return m;
}
export function materialEntity(w,material) {
  const cls=w.v4?'IFCMATERIALPROPERTIES':'IFCEXTENDEDMATERIALPROPERTIES';
  for(const id of ids(w.api,w.mid,cls)) {
    const p=w.api.GetLine(w.mid,id,false);
    if(val(p.Name)==='CadCraft_Material' && (p.Properties || p.ExtendedProperties || []).some(h=>{const x=w.api.GetLine(w.mid,h.value,false);return val(x.Name)==='Id' && val(x.NominalValue)===material.id;})) return p.Material.value;
  }
  const id=w.make('IFCMATERIAL',w.L(material.name),...(w.v4?[null,w.L(material.category)]:[]));
  const props=w.propLines([['Id','IFCIDENTIFIER',material.id]]);
  if(w.v4) w.make(cls,w.T('IFCIDENTIFIER','CadCraft_Material'),null,props,w.H(id));
  else w.make(cls,w.H(id),props,null,w.L('CadCraft_Material'));
  return id;
}
export function writeMaterialLayers(w,layers) {
  const normalized=layers.map(normalizeLayer), materials=readMaterials(w,normalized);
  for(const l of normalized) if(l.kind==='material' && !materials.some(m=>m.id===l.materialId)) throw new Error(tr('wall.err.a_layer_references_a_missing_material_choose_a_m'));
  writeMaterials(w,materials);
  // IFC2X3 requires positive material-layer thickness. Keep zero-thickness membranes
  // in the authoritative Recipe/library rather than inventing physical thickness.
  return normalized.filter(l=>w.v4 || l.t>0).map(l=>{
    const m=l.kind==='material'?materials.find(m=>m.id===l.materialId):null;
    // i18n-ignore: the layer's name as written into the IFC
    return w.make('IFCMATERIALLAYER',m?w.H(materialEntity(w,m)):null,w.u(l.t),l.kind==='cavity' && l.ventilation!=='unspecified'?w.T('IFCLOGICAL',l.ventilation==='ventilated'):null,...(w.v4?[w.L(m?.name || 'Air cavity'),null,w.L(l.function || 'finish'),null]:[]));
  });
}
// CSS is generated only from validated colors and enumerated patterns.
export function materialBackground(m) {
  if(!m || m.fill==='none') return 'transparent';
  const base=m.color;
  if(m.fill==='solid') return base;
  // i18n-ignore: CSS
  const stripe=angle=>`repeating-linear-gradient(${angle}deg,transparent 0 6px,${m.fillColor} 6px 7px,transparent 7px 9px)`;
  return (m.fill==='crosshatch'?stripe(-45)+',':'')+stripe(45)+','+base;
}
