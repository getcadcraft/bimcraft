/* SPDX-License-Identifier: Apache-2.0 */
import { assemblyDimensionLayout, drawAssemblyDimensions } from './assembly-preview.js';
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { wallType, typeName, typeThickness, readWalls } from './model-walls.js';
import { validateAssembly, LAYER_FUNCTIONS, assertAssembliesEditable } from './wall-assemblies.js';
import { saveWallAssembly } from './model-ops.js';
import { readMaterials, normalizeLayer, VENTILATION, materialBackground } from './project-materials.js';
import { openMaterialLibrary } from './project-materials-ui.js';
import { fmtLen, parseLen } from './model-units.js';
import { takeoffFields } from './wall-type-takeoff-ui.js';   // 0.10 BK.40
import { newTypeLod } from './new-policy.js';
import { LOD_SCALE, lodLabel } from './walls/lod.js';   // 0.10 BK.16: the type's LOD tag
import { layerPriority } from './walls/layerjoin.js';   // 0.9 WT.5 (walls-join-10): each layer's junction priority
export function mountWallAssemblies(modelUi) {
  let A;
  const W=()=>A.ed()?new ModelWriter(A.ed().W,A.ed().api,A.ed().mid):null;
  const t=k=>A.t('assembly.'+k.replace(/[A-Z]/g,c=>'_'+c.toLowerCase())), L=n=>fmtLen(n,A.units());
  const button=(text,fn,props={})=>el('button',{type:'button',className:'btn-line btn-sm-cc',onClick:fn,...props},text);
  // 0.10 BK.24 (bk-r3-types-10): the same editor edits a floor, roof or ceiling type when `host` is given (element-types-ui.js):
  // { kind, title, top, bottom, order, source(w), count(w), save(input, assign), saved(key), effects(duplicate, n, rest, name) }
  function openAssembly(key=A.S.wall.typeKey,assign=[],host=null) {
    let source;
    const tt=k=>host&&host[k]?host[k]:t(k);
    const editor=A.ed(); if(!editor) return;
    try { assertAssembliesEditable(W()); readMaterials(W()); source=host?host.source(W()):wallType(key,W()); }
    catch(e) {
      const dlg=el('dialog',{className:'bc-dialog','aria-label':t('title')},el('h2',{},t('title')),el('p',{role:'alert'},e.message),button(t('cancel'),()=>dlg.close()));
      dlg.addEventListener('close',()=>dlg.remove());A.root.append(dlg);dlg.showModal();return;
    }
    if(!source) { A.host.status(A.t('wall.err.type_missing'),true); return; }
    const recipe=structuredClone(source), editing=!!recipe.custom&&!recipe.starter;
    if(!editing){const first=newTypeLod();if(first)recipe.lod=first;}   // 0.10 DP.1 (bk-defaults-10): the LOD a newly made type starts with, when the person's Default Policies say so
    let duplicate=!editing, materials=readMaterials(W(),recipe.layers);
    const instanceCount=host?host.count(W()):readWalls(W()).filter(w=>w.typeKey===key).length;
    const effects=el('p',{'data-assembly-effects':'',role:'status'});
    const describeEffects=()=>{effects.textContent=host?host.effects(duplicate,assign.length,Math.max(0,instanceCount-assign.length),typeName(source)):duplicate
      ? A.t('assembly.effects.duplicate',{n:assign.length,rest:Math.max(0,instanceCount-assign.length)})
      : A.t('assembly.effects.typewide',{n:instanceCount,name:typeName(source)});};
    recipe.layers=recipe.layers.map(normalizeLayer);
    const mt=k=>A.t('materials.'+k.replace(/[A-Z]/g,c=>'_'+c.toLowerCase()));
    const name=el('input',{className:'bc-input',value:editing?typeName(source):typeName(source)+' copy',maxlength:100,'aria-label':t('name'),'data-assembly-name':''});
    const exterior=el('input',{type:'checkbox',checked:recipe.exterior});
    // 0.10 BK.16 (bk-typeswap-10): the type's LOD tag (walls/lod.js LOD_SCALE); "Not set" keeps the field out of the recipe
    const lod=el('select',{className:'bc-mb-select','data-assembly-lod':'','aria-label':t('lod'),title:t('lodNote')},el('option',{value:''},t('lodNone')),...LOD_SCALE.map(n=>el('option',{value:String(n),selected:recipe.lod===n},lodLabel(n))));
    lod.addEventListener('change',()=>{if(lod.value==='')delete recipe.lod;else recipe.lod=Number(lod.value);});
    const rows=el('tbody'), total=el('p',{className:'bc-muted','aria-live':'polite'}), error=el('p',{className:'bc-error',role:'alert'});
    const preview=el('div',{'aria-label':t('preview'),style:'position:relative;height:40px;outline:1px solid currentColor;margin:12px 0 0'});
    const dimensions=el('div',{'data-assembly-dimensions':''});
    const membraneNote=el('p',{className:'bc-muted'},t('membraneNote'));
    const orientation=el('div',{'data-assembly-orientation':'',style:'display:flex;justify-content:space-between;gap:16px;font-weight:600'},el('span',{},tt('exteriorSide')),el('span',{'aria-hidden':'true'},'→'),el('span',{},tt('interiorSide')));
    const dlg=el('dialog',{className:'bc-dialog bc-fam-dlg','aria-label':tt('title'),'data-assembly-editor':host?host.kind:'',style:'width:min(1050px,96vw);max-width:1050px'});
    const save=button(t('save'),()=>submit(),{'data-assembly-save':''});
    function totals() {
      const th=typeThickness(recipe), core=recipe.layers.filter(l=>l.core).reduce((s,l)=>s+l.t,0);
      total.textContent=t('total')+' '+L(th)+' · '+t('core')+' '+L(core);
      const layout=assemblyDimensionLayout(recipe.layers,L);
      preview.replaceChildren();
      if(layout) for(const [i,l] of recipe.layers.entries()) {
        const span=layout.segments[i],m=materials.find(m=>m.id===l.materialId);
        const label=`${i+1}: ${l.kind==='cavity'?mt('cavity'):m?.name || l.mat} · ${L(l.t)}`;
        preview.append(el('div',{style:`position:absolute;box-sizing:border-box;left:${span.start/10}%;width:${(span.end-span.start)/10}%;height:100%;background:${l.kind==='cavity'?'transparent':materialBackground(m)};border-right:1px solid #888;${l.core?'box-shadow:inset 0 -5px #527687;':''}${l.t===0?`border-right:3px dashed ${m?.color || '#888'};z-index:1;`:''}`,title:label,'aria-label':label}));
      }
      drawAssemblyDimensions(dimensions,layout,L,{dimensions:t('dimensions'),core:t('core'),total:t('total')});
      membraneNote.hidden=!recipe.layers.some(l=>l.t===0);

    }
    function selectMaterial(layer,m) {
      Object.assign(layer,{kind:'material',materialId:m.id,mat:m.legacyName,t:m.defaultThickness});
      if(m.defaultThickness===0) layer.function='membrane';
      delete layer.ventilation;
    }
    function draw() {
      rows.replaceChildren(...recipe.layers.map((layer,i)=>{
        const kind=el('select',{'aria-label':mt('kind')+' '+(i+1),className:'bc-mb-select'},...['material','cavity'].map(k=>el('option',{value:k,selected:layer.kind===k},mt(k))));
        kind.addEventListener('change',()=>{if(kind.value==='cavity'){Object.assign(layer,{kind:'cavity',materialId:null,mat:'air',ventilation:'unspecified'});}else{selectMaterial(layer,materials[0]);}draw();});
        const mat=el('select',{className:'bc-input','aria-label':t('material')+' '+(i+1)},...materials.map(m=>el('option',{value:m.id,selected:m.id===layer.materialId},m.name)),el('option',{value:'__new__'},mt('createFromPicker')));
        if(layer.kind==='material' && !materials.some(m=>m.id===layer.materialId)) mat.prepend(el('option',{value:layer.materialId,selected:true},mt('missing')+' '+layer.mat));
        mat.addEventListener('change',()=>{
          if(mat.value==='__new__') {
            mat.value=layer.materialId;
            openMaterialLibrary(A,saved=>{
              if(A.ed()!==editor || !dlg.isConnected) return;
              materials=readMaterials(W(),recipe.layers);
              if(saved) selectMaterial(layer,saved);
              draw();
            },{createNew:true});
          } else {selectMaterial(layer,materials.find(m=>m.id===mat.value));draw();}
        });
        const vent=el('select',{'aria-label':mt('ventilation')+' '+(i+1),className:'bc-input'},...VENTILATION.map(v=>el('option',{value:v,selected:layer.ventilation===v},mt(v))));
        vent.addEventListener('change',()=>{layer.ventilation=vent.value;});
        const useDefault=button(mt('useDefault'),()=>{const m=materials.find(m=>m.id===layer.materialId);if(m){layer.t=m.defaultThickness;if(layer.t===0)layer.function='membrane';draw();}},{disabled:layer.kind==='cavity'});
        const thickness=el('input',{className:'bc-input',value:L(layer.t),size:9,'aria-label':t('thickness')+' '+(i+1)});
        thickness.addEventListener('input',()=>{const v=parseLen(thickness.value,A.units());layer.t=v;if(v===0 && layer.kind==='material'){layer.function='membrane';fn.value='membrane';}totals();});
        const fn=el('select',{className:'bc-mb-select','aria-label':t('function')+' '+(i+1)},...LAYER_FUNCTIONS.map(f=>el('option',{value:f,selected:f===layer.function},t('function.'+f))));
        fn.addEventListener('change',()=>{layer.function=fn.value;draw();});
        const core=el('input',{type:'checkbox',checked:layer.core,'aria-label':t('core')+' '+(i+1)});core.addEventListener('change',()=>{layer.core=core.checked;totals();});
        // 0.9 WT.5: the layer's priority where walls meet (0..999, the stronger cuts the weaker); empty = the default of its function, shown as the hint
        const prio=el('input',{className:'bc-input',type:'number',min:0,max:999,step:1,size:4,style:'width:5.5em',value:Number.isInteger(layer.priority)?String(layer.priority):'',placeholder:String(layerPriority({function:layer.function,kind:layer.kind})),'aria-label':t('priority')+' '+(i+1),'data-layer-priority':''});
        prio.addEventListener('change',()=>{const v=prio.value.trim(),n=Number(v);if(v===''){delete layer.priority;}else if(Number.isInteger(n)&&n>=0&&n<=999){layer.priority=n;}else{prio.value=Number.isInteger(layer.priority)?String(layer.priority):'';}});
        const move=delta=>{[recipe.layers[i],recipe.layers[i+delta]]=[recipe.layers[i+delta],recipe.layers[i]];draw();};
        const swatch=el('span',{'data-layer-swatch':'',role:'img','aria-label':t('swatch')+' '+(i+1),title:layer.kind==='cavity'?mt('cavity'):materials.find(m=>m.id===layer.materialId)?.name || layer.mat,style:`display:inline-block;flex:0 0 24px;width:24px;height:24px;border:1px solid #888;background:${layer.kind==='cavity'?'transparent':materialBackground(materials.find(m=>m.id===layer.materialId))}`});
        return el('tr',{},el('td',{},el('div',{style:'display:flex;align-items:center;gap:8px'},el('span',{},String(i+1)),swatch,kind),layer.kind==='cavity'?vent:mat),el('td',{},thickness,useDefault),el('td',{},fn),el('td',{},core),el('td',{},prio),el('td',{},button('↑',()=>move(-1),{disabled:i===0,'aria-label':t('up')}),button('↓',()=>move(1),{disabled:i===recipe.layers.length-1,'aria-label':t('down')}),button('×',()=>{recipe.layers.splice(i,1);draw();},{'aria-label':t('remove')})));
      }));
      const boundary=label=>el('tr',{},el('th',{colSpan:6,style:'text-align:left;padding:8px 4px;background:rgba(128,128,128,.12)'},label));
      rows.prepend(boundary(tt('exteriorSide')+' ↓'));
      rows.append(boundary(tt('interiorSide')+' ↑'));
      totals();
    }
    const copy=button(t('duplicate'),()=>{duplicate=true;name.value+=' copy';copy.disabled=true;save.textContent=t('savecopy');describeEffects();},{'data-assembly-duplicate':''});
    dlg.append(el('h2',{className:'bc-h'},tt('title')),effects,el('label',{className:'bc-dlg-field'},t('name'),name),el('label',{hidden:!!host},exterior,' '+t('exterior')),el('label',{className:'bc-dlg-field'},t('lod'),lod),el('p',{},tt('order')),el('div',{style:'overflow-x:auto'},el('div',{style:'min-width:900px;padding:0 12px'},orientation,preview,dimensions)),membraneNote,total,el('div',{style:'overflow:auto'},el('table',{'data-assembly-layers':''},el('thead',{},el('tr',{},...['material','thickness','function','core','priority','actions'].map(k=>el('th',{},t(k))))),rows)),
      button(t('add'),()=>{const m=materials.find(m=>m.id==='material-gypsum') || materials[0];recipe.layers.push(normalizeLayer({mat:m.legacyName,materialId:m.id,t:m.defaultThickness,function:m.defaultThickness===0?'membrane':'finish',core:false}));draw();}),button(t('addMembrane'),()=>{const m=materials.find(m=>m.id==='material-membrane') || materials[0];recipe.layers.push(normalizeLayer({mat:m.legacyName,materialId:m.id,t:0,function:'membrane',core:false}));draw();}),button(mt('addCavity'),()=>{recipe.layers.push(normalizeLayer({mat:'air',kind:'cavity',t:25.4,function:'substrate',core:false}));draw();}),button(mt('title'),()=>openMaterialLibrary(A,()=>{materials=readMaterials(W(),recipe.layers);draw();})),el('p',{className:'bc-muted'},mt('defaults')),el('p',{className:'bc-muted'},t('priorityNote')),el('p',{className:'bc-muted'},t('scope')),error,
      el('p',{className:'bc-lib-actions'},...(editing?[copy]:[]),button(t('cancel'),()=>dlg.close()),save));
    if(!host) error.before(takeoffFields(recipe,{t:(k,v)=>A.t('assembly.'+k,v),units:()=>A.units()}));   // 0.10 BK.40 (bk-quantities-10): unit, mortar and rate, entered once on the type
    dlg.addEventListener('close',()=>dlg.remove());
    dlg.addEventListener('keydown',e=>e.stopPropagation());
    function submit() {
      try {
        if(A.ed()!==editor) throw new Error(t('changed'));
        const input=validateAssembly({...recipe,key:duplicate?(host?host.kind:'wall')+'-'+crypto.randomUUID():recipe.key,name:name.value,exterior:exterior.checked});
        save.disabled=true;error.textContent='';
        const operation=host?host.save(input,duplicate?assign:[]):saveWallAssembly(input,duplicate?assign:[]);
        A.commit(ed=>{if(ed!==editor) throw new Error(t('changed'));const r=operation(ed);if(host)host.saved?.(input.key);else A.S.wall.typeKey=input.key;dlg.close();return r;},{label:input.name,verb:A.t('model.verb.changed'),onError:e=>{save.disabled=false;error.textContent=e.message;}});
      }catch(e){error.textContent=e.message;}
    }
    describeEffects();draw();A.root.append(dlg);dlg.showModal();
  }
  A=modelUi.extend({openAssembly});
  const row=A.root.querySelector('[data-mopts="wall"]');
  row?.append(button(t('open'),()=>openAssembly(),{'data-wall-assemblies':''}));
  // The Draw bar's Library group (ui.inc [data-mb-library]): flat tools like the rest of the bar (closing 0.7 part 2 § A).
  // A project-wide entry point for assemblies remains available when the Wall tool is not active.
  const tool=(icon,text,fn,props)=>el('button',{type:'button',className:'bc-tool',title:text,onClick:fn,...props},el('i',{className:'bi '+icon,'aria-hidden':'true'}),el('span',{},text));
  const libRow=A.root.querySelector('[data-mb-library]');
  if(libRow) libRow.append(tool('bi-palette',A.t('materials.title'),()=>openMaterialLibrary(A),{'data-materials-menu':''}),tool('bi-stack',t('open'),()=>openAssembly(),{'data-wall-assemblies-menu':''}));
  else { A.root.querySelector('[data-annot-tools]')?.before(button(A.t('materials.title'),()=>openMaterialLibrary(A),{'data-materials-menu':''})); A.root.querySelector('[data-annot-tools]')?.before(button(t('open'),()=>openAssembly(),{'data-wall-assemblies-menu':''})); }
}
