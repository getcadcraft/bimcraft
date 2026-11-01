/* SPDX-License-Identifier: Apache-2.0 */
// Semantic references are authoritative. Coordinates and IFC curves are derived, never a saved measurement.
import { ids, val } from './ifc-util.js';
import { readWalls, locationOffset } from './model-walls.js';
import { wallGeom, BULGE_MAX } from './model-arcs.js';
import { ModelWriter } from './model-write.js';
import { t as tr } from './i18n.js';
import { checkRecordVersion, parseRecord, recordError, readRecordPset } from './record-contract.js';
export const DIMENSION_PSET = 'CadCraft_WallDimension';
export const WALL_REFERENCES = ['exterior', 'interior', 'center', 'coreExterior', 'coreInterior', 'coreCenter'];
export function referencePoint(ref, walls, level = null) {
  if (!ref || !WALL_REFERENCES.includes(ref.reference) || !Number.isFinite(ref.station) || ref.station < 0 || ref.station > 1) return null;
  const hosts = walls.filter(w => w.guid === ref.wall);
  if (hosts.length !== 1) return null;
  const wall = hosts[0];
  if (wall.referenceIssue || (level !== null && wall.storey !== level) ||
      ![...(wall.a || []), ...(wall.b || []), wall.t, wall.bulge ?? 0].every(Number.isFinite) ||
      Math.abs(wall.bulge || 0)>BULGE_MAX || wall.a?.length !== 2 || wall.b?.length !== 2 || wall.t <= 0 || Math.hypot(wall.b[0]-wall.a[0],wall.b[1]-wall.a[1]) < 0.001) return null;
  const off = locationOffset(ref.reference, wall.t, wall.extSide, wall.assembly), g=wallGeom(wall);
  if (!Number.isFinite(off) || !Number.isFinite(g.L) || (g.arc && g.arc.R <= wall.t/2)) return null;
  const p=g.at(g.L * ref.station, off);
  return p.every(Number.isFinite) ? p : null;
}
export function resolveDimension(d, walls) {
  // A caller may pass a previously resolved row: never retain its cached value/points.
  const {a:oldA,b:oldB,witnesses,value,off,...base}=d;
  const unresolved=status=>({...base,status});
  if(d.issue) return unresolved(d.issue);
  try { checkRecordVersion(d,'dimension'); validateReferences(d); } catch { return unresolved('invalid'); }
  if(d.storey===null) return unresolved('missing');
  const hostIssue=d.refs.map(r=>walls.find(w=>w.guid===r.wall)?.referenceIssue).find(Boolean);
  if(hostIssue) return unresolved(hostIssue);
  const a = referencePoint(d.refs[0], walls, d.storey), end = referencePoint(d.refs[1], walls, d.storey);
  if (!a || !end) return unresolved('missing');
  const b = d.axis === 'x' ? [end[0], a[1]] : d.axis === 'y' ? [a[0], end[1]] : end;
  const distance = Math.hypot(b[0]-a[0], b[1]-a[1]);
  if(!Number.isFinite(distance)) return unresolved('invalid');
  if(distance < 0.001) return unresolved('coincident');
  return { ...base, a, b, witnesses: [a, end], value:distance, status:'ok', off:d.offset };
}
export function readWallDimensions(w) {
  const out = [];
  let so = null;   // one pass over the containment relations, only when there is a dimension (0.7: storeyOfId per dimension scanned them all)
  for (const id of ids(w.api,w.mid,'IFCANNOTATION')) {
    so ??= w.storeyOf();
    const identity={id,guid:w.guidOf(id),storey:so.get(id) ?? null};
    let d;
    try {
      const ps=readRecordPset(w,id,DIMENSION_PSET,'dimension');
      if(!ps && val(w.api.GetLine(w.mid,id,false).ObjectType)!=='CadCraft_WallDimension') continue;
      if(!ps) throw recordError('dimension','corrupt');
      Object.assign(identity,{geometry:ps.Geometry || '',raw:ps.Spec});
      d=parseRecord(ps.Spec,'dimension'); validateSpec(d);
      out.push({...d,...identity});
    } catch(e) {
      out.push({...identity,view:typeof d?.view==='string'?d.view:null,issue:e.recordIssue || 'invalid'});
    }
  }
  const counts=new Map();for(const d of out)counts.set(d.guid,(counts.get(d.guid)||0)+1);
  return out.map(d=>counts.get(d.guid)>1?{...d,issue:'ambiguous'}:d);
}
function validateReferences(d) {
  if (!d || !['x','y','aligned'].includes(d.axis) || !Number.isFinite(d.offset) || Math.abs(d.offset)>1e7) throw new Error(tr('wall.err.invalid_dimension_settings'));
  if (!Array.isArray(d.refs) || d.refs.length!==2 || d.refs.some(r=>!r || typeof r.wall!=='string' || !r.wall || !WALL_REFERENCES.includes(r.reference) || !Number.isFinite(r.station) || r.station<0 || r.station>1)) throw new Error(tr('wall.err.pick_two_valid_wall_references'));
}
function validateSpec(d) {
  checkRecordVersion(d,'dimension'); validateReferences(d);
  if(!/^(plan:|rcp:|callout:).+/.test(d.view || '')) throw new Error(tr('wall.err.invalid_dimension_view'));
}
// Update exported IFC curves in the same journal as the wall edit. Broken references lose their curves.
export function syncWallDimensions(w) {
  const dims=readWallDimensions(w);
  if (!dims.length) return;
  const walls=readWalls(w);
  for (const d of dims) {
    if(d.issue) throw recordError('dimension',d.issue==='unsupported'?'unsupported':'corrupt');
    const r=resolveDimension(d,walls), signature=JSON.stringify(r.status==='ok'?[r.a,r.b,r.witnesses,r.off]:[r.status]);
    if(signature===d.geometry) continue;
    if(r.status==='ok') {
      const n=[-(r.b[1]-r.a[1])/r.value,(r.b[0]-r.a[0])/r.value];
      const a=r.a.map((v,i)=>v+n[i]*r.off), b=r.b.map((v,i)=>v+n[i]*r.off);
      w.setShape(d.id,[w.rep('foot','FootPrint','GeometricCurveSet',[w.make('IFCGEOMETRICCURVESET',[[a,b],[r.witnesses[0],a],[r.witnesses[1],b]].map(p=>w.H(w.polyline2(p))))])]);
    } else {
      const line=w.touch(d.id), old=line.Representation?.value; line.Representation=null; w.write(line); if(old) w.dropTree(old);
    }
    w.upsertPset(d.id,DIMENSION_PSET,[['Geometry','IFCTEXT',signature],['Status','IFCLABEL',r.status]]);
  }
}
const operation = fn => ed => new ModelWriter(ed.W,ed.api,ed.mid).run(w=>{ const result=fn(w);syncWallDimensions(w);return result; });
function saveInto(w, input) {
  const spec=structuredClone(input); let guid=spec.guid || null;
  checkRecordVersion(spec,'dimension');
  const d={version:1,refs:spec.refs,axis:spec.axis || 'aligned',offset:spec.offset ?? 300,view:spec.view}; validateSpec(d);
  const st=w.byGuid(spec.level); if(!st) throw new Error(tr('wall.err.dimension_level_is_missing'));
  const r=resolveDimension({...d,storey:st},readWalls(w));
  if(['unsupported','corrupt'].includes(r.status)) throw recordError('assembly',r.status);
  if(r.status!=='ok') throw new Error(tr('wall.err.the_references_are_missing_or_coincide_in_the_se'));
  const existing=readWallDimensions(w).filter(d=>d.guid===guid);
  if(spec.guid && (existing.length!==1 || existing[0].storey!==st)) throw new Error(tr('wall.err.dimension_is_no_longer_available'));
  if(existing.some(d=>d.issue)) throw recordError('dimension',existing[0].issue==='unsupported'?'unsupported':'corrupt');
  let id=existing[0]?.id || null;
  if(!id) {
    guid ||= val(w.guid()); const sl=w.api.GetLine(w.mid,st,false);
    // i18n-ignore: the annotation's name as written into the IFC
    id=w.make('IFCANNOTATION',guid,w.ownerHistory(),w.L('Wall reference dimension'),null,w.L('CadCraft_WallDimension'),w.H(w.placeAt(sl.ObjectPlacement.value,0,0,0,0)),null,...(/^IFC4X3/i.test(w.schema||'')?['USERDEFINED']:[]));
    w.noteGuid(guid,id);w.contain(id,st);
  }
  w.upsertPset(id,DIMENSION_PSET,[['Spec','IFCTEXT',JSON.stringify(d)]]);
  return {id,ids:[id],guid,made:new Map([[guid,id]])};
}
export function saveWallDimension(input) { return operation(w=>saveInto(w,input)); }
/** 0.8 EG.20: many dimensions in ONE undo step (the auto-dimension command). Any refused one refuses all. */
export function saveWallDimensions(inputs) {
  return operation(w=>{
    const made=new Map(), ids=[];
    for(const input of inputs){ const r=saveInto(w,input); ids.push(r.id); for(const [g,i] of r.made) made.set(g,i); }
    return {id:ids[ids.length-1] ?? null,ids,made};
  });
}
export const removeWallDimensions = guids => operation(w=>{
  const list=readWallDimensions(w).filter(d=>guids.includes(d.guid));
  if(list.some(d=>d.issue)) throw recordError('dimension','corrupt');
  if(list.length) w.dropProduct(list.map(d=>d.id));
  return {id:null,ids:[]};
});
