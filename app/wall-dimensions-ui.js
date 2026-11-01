/* SPDX-License-Identifier: Apache-2.0 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { WALL_REFERENCES, readWallDimensions, referencePoint, resolveDimension, saveWallDimension, saveWallDimensions, removeWallDimensions } from './wall-dimensions.js';
import { planAutoDimensions } from './autodim.js';   // 0.8 EG.20
import { wallGeom } from './model-arcs.js';
import { fmtLen, parseTyped } from './model-units.js';
export function mountWallDimensions(modelUi) {
  let currentContext=null, currentView=null;
  let A, items=[], refs=[], hover=null, at=null, editing=null;
  let reference='coreExterior', axis='x';
  const t=(k,v)=>A.t('dimension.'+k,v), L=n=>fmtLen(n,A.units());
  const level=()=>A.S.data?.levels.find(l=>l.id===A.S.level);
  const view=()=>A.S.callout?'callout:'+A.S.callout:(A.S.kind==='rcp'?'rcp:':'plan:')+level()?.guid;
  const walls=()=>A.S.data?.walls || [];
  const label=r=>t('ref.'+r.toLowerCase());
  function pickRef(p) {
    let best=null, distance=Infinity;
    const visible = new Set((A.pv()?.scene.walls || []).map(w=>w.guid));
    for(const w of walls().filter(w=>w.storey===A.S.level && visible.has(w.guid))) {
      const g=wallGeom(w), param=g.param(p), station=Math.max(0,Math.min(1,param.s/g.L));
      const ref={wall:w.guid,reference,station}, q=referencePoint(ref,[w]); if(!q) continue;
      const d=Math.hypot(q[0]-p[0],q[1]-p[1]);
      if(d<distance && d<Math.max(A.pv()?.pxToMm(14)||100,w.t/2)) {best=ref;distance=d;}
    }
    return best;
  }
  function candidate(p, pair=refs) {
    const d=resolveDimension({refs:pair,axis,offset:0,storey:A.S.level},walls());
    if(d.status!=='ok') return null;
    const n=[-(d.b[1]-d.a[1])/d.value,(d.b[0]-d.a[0])/d.value];
    const off=(p[0]-d.a[0])*n[0]+(p[1]-d.a[1])*n[1];
    return {...d,off,offset:off,text:L(d.value)};
  }
  function hint() {const h=A.root.querySelector('[data-model-hint]');if(h)h.textContent=t(refs.length===2?'hint.offset':refs.length===1?'hint.second':'hint.first');}
  function reset(){refs=[];hover=null;at=null;editing=null;}
  function choose(p) {
    if(refs.length<2) {
      const r=pickRef(p);if(!r){A.host.status(t('pickwall'),true);return;}
      if(refs.length===1 && !candidate(p,[refs[0],r])) {A.host.status(t('coincident'),true);return;}
      refs.push(r);hint();return;
    }
    const d=candidate(p);if(!d) return;
    const spec={guid:editing,refs:structuredClone(refs),axis,offset:d.off,view:view(),level:level().guid};
    A.commit(saveWallDimension(spec),{label:t('title'),verb:A.t('model.verb.drew')});reset();hint();
  }
  function startEdit(d){A.setTool('wallDimension');editing=d.guid;axis=d.axis;axisSelect.value=axis;hint();}
  function props(selected,k) {
    const ds=selected.map(s=>items.find(d=>d.guid===s.guid)).filter(Boolean);if(!ds.length)return null;
    if(ds.length===1){const d=ds[0],r=resolveDimension(d,walls());
      k.field(t('value'),el('span',{},r.status==='ok'?L(r.value):t('status.'+r.status)));
      if(d.issue || ['unsupported','corrupt'].includes(r.status)){k.field('',el('p',{role:'alert'},A.t('contract.recovery')));return {title:t('title')};}
      for(let i=0;i<2;i++)k.field(t(i?'second':'first'),el('span',{},label(d.refs[i].reference)+' · '+(walls().find(w=>w.guid===d.refs[i].wall)?.typeName || t('missingwall'))));
      k.field(t('offset'),k.lenInput(d.offset,'data-mp-dimoffset',mm=>A.commit(saveWallDimension({...d,offset:mm,level:level().guid}),k.one(t('title'))),{any:true}));
      k.field('',k.button(t('rebind'),'data-mp-dimrebind',()=>startEdit(d)));
    }
    return {title:t('title')};
  }
  const extension={tools:['wallDimension'],hint:()=> 'dimension.hint.first',typed:(name,text)=>{
      if(text===undefined) return true;
      const q=parseTyped(text,A.units());
      if(q?.kind!=='abs'){A.host.status(t('coordinates'),true);return false;}
      choose([q.x,q.y]);A.drawOverlay();return true;
    },classes:/^IfcAnnotation$/i,
    refresh(){const context=A.ed()?.model; if(currentContext!==context || currentView!==view()){reset();currentContext=context;currentView=view();}const ed=A.ed();items=ed?readWallDimensions(new ModelWriter(ed.W,ed.api,ed.mid)):[];},
    ownKeys(set,k){for(const d of items)set.add(k+d.id);},
    scene(scene){if([...(A.viewRange()?.hiddenClasses||[])].some(c=>c.toLowerCase()==='ifcannotation'))return;
      for(const d of items.filter(d=>d.view===view())){const r=resolveDimension(d,walls());if(r.status==='ok')(scene.dims ||= []).push({...r,key:A.kb()+d.id,text:L(r.value)});}
      // Missing hosts remain discoverable in the list; never display a stale numeric measurement.
    },
    pick(key){const d=items.find(d=>A.kb()+d.id===key);return d?{guid:d.guid,label:t('title')}:null;},props,
    remove(selected){return removeWallDimensions(selected.map(s=>s.guid));},
    move(p){at=p;hover=refs.length<2?pickRef(p):null;},click(p){choose(p);},
    overlay(o){for(const r of refs){const q=referencePoint(r,walls());if(q)o.points.push(q);}if(hover){const q=referencePoint(hover,walls());if(q){o.snap={p:q,kind:'free'};o.hud={p:q,text:label(hover.reference)};
        const wall=walls().find(w=>w.guid===hover.wall);
        const samples=wall.bulge?32:1;
        for(let i=0;i<samples;i++){
          const a=referencePoint({...hover,station:i/samples},[wall]),b=referencePoint({...hover,station:(i+1)/samples},[wall]);
          o.lines.push([...a,...b]);
        }
      }}
      if(refs.length===2 && at){const d=candidate(at);if(d)o.dims.push(d);}},
    toolChanged(){reset();},escape(){if(A.S.tool!=='wallDimension')return false;const had=refs.length||editing;reset();return !!had;}   // only its own picks: Esc ends any other tool, and this one once nothing is picked (2026-10-24: it took every Esc)
  };
  A=modelUi.extend(extension);
  const optionSelect=(choices,current,change)=>{const s=el('select',{className:'bc-mb-select'},...choices.map(([v,text])=>el('option',{value:v,selected:v===current},text)));s.addEventListener('change',()=>change(s.value));return s;};
  const refSelect=optionSelect(WALL_REFERENCES.map(r=>[r,label(r)]),reference,v=>{reference=v;});refSelect.setAttribute('aria-label',t('reference'));
  const axisSelect=optionSelect(['x','y','aligned'].map(r=>[r,t('axis.'+r)]),axis,v=>{axis=v;refs=[];hint();});axisSelect.setAttribute('aria-label',t('direction'));
  const menu=A.root.querySelector('[data-annot-tools] .bc-mb-menu');
  menu?.append(el('button',{type:'button',className:'bc-tool','data-mtool':'wallDimension'},t('title')),
    el('button',{type:'button',className:'bc-tool',onClick:showList},t('list')));
  A.root.querySelector('[data-mopts="wall"]')?.after(el('div',{className:'bc-modelbar-row','data-mopts':'wallDimension',hidden:true},el('label',{},t('reference')+' ',refSelect),el('label',{},t('direction')+' ',axisSelect)));
  menu?.querySelector('[data-mtool="wallDimension"]')?.addEventListener('click',()=>{menu.closest('details').open=false;});
  // 0.8 EG.20: dimension the plan by rules (autodim.js) — overall, rows along the outside, doors and windows; one undo step
  const autoBtn=el('button',{type:'button',className:'bc-tool','data-autodim':'',title:t('auto.title')},t('auto'));
  menu?.append(autoBtn);
  autoBtn.addEventListener('click',()=>{menu.closest('details').open=false;autoDialog();});
  const planFor=o=>planAutoDimensions({walls:A.S.data?.walls||[],openingRows:A.S.data?.openings||[],level:A.S.level,view:view(),existing:items.filter(d=>d.view===view()&&!d.issue).map(d=>({refs:d.refs,axis:d.axis})),...o});
  function autoDialog(){
    if(!A.ed()||!A.S.data||A.S.kind!=='plan'||!level()){A.host.status(t('auto.noplan'),true);return;}
    const opt={overall:true,chains:true,openings:true};
    const box=(k)=>{const i=el('input',{type:'checkbox',checked:true,'data-autodim-opt':k});i.addEventListener('change',()=>{opt[k]=i.checked;sum();});return el('label',{className:'bc-mb-field'},i,' ',t('auto.'+k));};
    const say=el('p',{role:'status','data-autodim-say':''});
    const go=el('button',{type:'button',className:'btn-plot btn-sm-cc','data-autodim-go':''},t('auto.go'));
    const dlg=el('dialog',{className:'bc-dialog','aria-label':t('auto')},el('h2',{},t('auto')),el('p',{},t('auto.lede')),box('overall'),box('chains'),box('openings'),say);
    let plan=null;
    function sum(){plan=planFor({...opt,level:level().id});const c=plan.counts;go.disabled=!plan.specs.length;say.textContent=plan.specs.length?t('auto.sum',{overall:c.overall,chain:c.chain,skipped:c.skipped}):(c.skipped?t('auto.already'):t('auto.nothing'));}
    go.addEventListener('click',()=>{sum();if(!plan.specs.length)return;A.commit(saveWallDimensions(plan.specs.map(({kind,side,...sp})=>({...sp,level:level().guid}))),{label:t('auto'),verb:A.t('model.verb.drew')});dlg.close();A.host.status(t('auto.done',{n:plan.specs.length}),false,true);});
    const cancel=el('button',{type:'button',className:'btn-line btn-sm-cc',onClick:()=>dlg.close()},t('close'));
    dlg.append(el('p',{},go,' ',cancel));dlg.addEventListener('close',()=>dlg.remove());A.root.append(dlg);sum();dlg.showModal();
  }
  modelUi.extend({}); // Bind the newly inserted tool button through the normal tool dispatcher.
  function showList(){
    const dlg=el('dialog',{className:'bc-dialog','aria-label':t('list')},el('h2',{},t('list')));
    const list=items.filter(d=>d.issue || d.view===view());
    if(!list.length)dlg.append(el('p',{},t('empty')));
    for(const d of list){const r=resolveDimension(d,walls());
      if(d.issue || ['unsupported','corrupt'].includes(r.status)){dlg.append(el('p',{role:'alert'},d.guid+' · '+t('status.'+r.status)+' '+A.t('contract.recovery')));continue;}
      dlg.append(el('p',{},el('span',{},label(d.refs[0].reference)+' → '+label(d.refs[1].reference)+' · '+(r.status==='ok'?L(r.value):t('status.'+r.status))+' '),
      el('button',{type:'button',className:'btn-line btn-sm-cc',onClick:()=>{dlg.close();A.setTool('select');A.host.select([A.kb()+d.id]);}},t('properties')),
      el('button',{type:'button',className:'btn-line btn-sm-cc',onClick:()=>{dlg.close();startEdit(d);}},t('rebind')),
      el('button',{type:'button',className:'btn-line btn-sm-cc',onClick:()=>{A.commit(removeWallDimensions([d.guid]),{label:t('title'),verb:A.t('model.verb.changed')});dlg.close();}},t('delete'))));}
    dlg.append(el('button',{type:'button',className:'btn-line btn-sm-cc',onClick:()=>dlg.close()},t('close')));dlg.addEventListener('close',()=>dlg.remove());A.root.append(dlg);dlg.showModal();
  }
}
