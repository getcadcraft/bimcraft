/* SPDX-License-Identifier: Apache-2.0 */
/** Read-only analytic cut faces in the SAME frame as projectView's triangles.
 * Cuts are perpendicular to straight wall axes. Nothing here changes IFC data.
 * Geometry, layer metadata, projected edges and annotation overlays stay separate.
 */
import { hatchSegments } from './drafting.js';
import { layerPrimitives, PLAN_DETAILS } from './wall-plan-graphics.js';
import { readWalls } from './model-walls.js';
import { readOpenings } from './model-openings.js';
import { mul4, inv4 } from './ifc-util.js';
import { isSketchWall, SKETCH_BAND } from './wall-plan-graphics.js';   // 0.10 BK.15
import { segDist } from './model-plan.js';
import { dot2 as dot } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const rect = (a, b, lo, hi) => [[Math.min(a,b),lo],[Math.max(a,b),lo],[Math.max(a,b),hi],[Math.min(a,b),hi]];
const finite = a => a.every(Number.isFinite);

/** Envelope width for the existing overall-elevation note. A wall's thickness
 * projects along its normal, not along both view axes unconditionally.
 * Curved envelopes remain outside this analytic slice.
 */
export function straightElevationWidth(walls, dir) {
  if(!walls.length||walls.some(w=>w.bulge||w.frameUnsupported))return null;
  const right=[dir[1],-dir[0]],xs=[];
  for(const w of walls) {
    const L=Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1]);if(L<1)return null;
    const n=[-(w.b[1]-w.a[1])/L,(w.b[0]-w.a[0])/L],half=Math.abs(dot(n,right))*w.t/2;
    for(const p of [w.a,w.b])xs.push(dot(p,right)-half,dot(p,right)+half);
  }
  return {x0:xs.reduce((m,x)=>Math.min(m,x),Infinity),x1:xs.reduce((m,x)=>Math.max(m,x),-Infinity)};   // #1995: Math.min(...xs) without the spread (same values, NaN too)
}

export function isolatedWall(w, walls) {
  return !walls.some(q=>{
    if(q.id===w.id)return false;
    if((w.z??0)+w.height<=(q.z??0)+1e-7 || (q.z??0)+q.height<=(w.z??0)+1e-7)return false;
    const near=(p,a,b)=>segDist(p[0],p[1],a,b)<=(w.t+q.t)/2+1;
    if([w.a,w.b].some(p=>near(p,q.a,q.b))||[q.a,q.b].some(p=>near(p,w.a,w.b)))return true;
    const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
    return cross(w.a,w.b,q.a)*cross(w.a,w.b,q.b)<0&&cross(q.a,q.b,w.a)*cross(q.a,q.b,w.b)<0;
  });
}

/** Surface edge candidates for the existing hidden-line projector. Mesh face
 * triangulation can contain unmatched subdivision edges around holes. Authored
 * straight walls instead supply their actual envelope and opening boundaries;
 * the unchanged triangle depth buffer still decides which edges are visible.
 */
export function wallSurfaceEdges(wall, openings) {
  if(wall.bulge||wall.frameUnsupported||wall.junctionUnsupported||!finite([...wall.a,...wall.b,wall.t,wall.height,wall.z??0]))return null;
  const L=Math.hypot(wall.b[0]-wall.a[0],wall.b[1]-wall.a[1]);if(L<1)return null;
  const u=[(wall.b[0]-wall.a[0])/L,(wall.b[1]-wall.a[1])/L],n=[-u[1],u[0]],z=wall.z??wall.baseOffset??0,top=z+wall.height;
  const ops=openings.filter(o=>o.wall===wall.id);if(ops.some(o=>!finite([o.offset,o.width,o.sill,o.height])))return null;
  const edges=[],P=(s,t,h)=>[wall.a[0]+u[0]*s+n[0]*t,wall.a[1]+u[1]*s+n[1]*t,h];
  for(const t of [-wall.t/2,wall.t/2]) {
    for(const h of [z,top]) {
      let spans=[[0,L]];
      for(const o of ops)if(h>=o.sill&&h<=o.sill+o.height)spans=spans.flatMap(([a,b])=>[[a,Math.min(b,o.offset)],[Math.max(a,o.offset+o.width),b]]).filter(([a,b])=>b>a);
      for(const [a,b]of spans)edges.push([P(a,t,h),P(b,t,h)]);
    }
    for(const s of [0,L])edges.push([P(s,t,z),P(s,t,top)]);
    for(const o of ops) {
      const a=o.offset,b=o.offset+o.width,lo=Math.max(z,o.sill),hi=Math.min(top,o.sill+o.height);
      if(hi<=lo)continue;
      edges.push([P(a,t,lo),P(a,t,hi)],[P(b,t,lo),P(b,t,hi)]);
      if(lo>z)edges.push([P(a,t,lo),P(b,t,lo)]);
      if(hi<top)edges.push([P(a,t,hi),P(b,t,hi)]);
    }
  }
  for(const s of [0,L])for(const h of [z,top])edges.push([P(s,-wall.t/2,h),P(s,wall.t/2,h)]);
  return edges;
}

/** All authored walls/openings into one storey's axes, including translated and
 * rotated levels. A tilted storey is unsupported rather than flattened silently.
 */
export function sectionModel(w, storey, keyBase = 0) {
  const I = inv4(w.storeyWorld(storey)), originals = readWalls(w), openings = readOpenings(w, null, originals);
  const walls = originals.map(wall => {
    const T = mul4(I, w.storeyWorld(wall.storey));
    const P = p => [T[0]*p[0]+T[4]*p[1]+T[12], T[1]*p[0]+T[5]*p[1]+T[13]];
    return { ...wall, key: keyBase + wall.id, a:P(wall.a), b:P(wall.b),
      z:T[14] + wall.baseOffset, frameUnsupported: Math.abs(T[2])+Math.abs(T[6])+Math.abs(T[8])+Math.abs(T[9])+Math.abs(T[10]-1)>1e-8 };
  });
  const ops = openings.map(o => {
    const T = mul4(I, w.storeyWorld(o.storey));
    return {...o,sill:o.sill+T[14]};
  });
  return {walls,openings:ops};
}

/** Replaces only supported mesh cut faces; leaves projected visibility untouched.
 * station includes jambs (closed intervals); sill/head bound the open void.
 */
export function wallSectionGraphics(view, walls, openings, materials, {dir,cut,detail='coarse',scale=50,box=null}={}) {
  if (!PLAN_DETAILS.includes(detail)) throw new Error('Invalid section detail')   // i18n-ignore: a programming error (callers pass PLAN_DETAILS);
  const warnings = [...(view.warnings || [])], cuts = [...view.cuts], right = [dir[1],-dir[0]];
  if (!cut) return {...view,detail,warnings}; // elevations NEVER expose hidden layers
  const materialById = new Map((materials || []).map(m=>[m.id,m]));
  for (const wall of walls) {
    const key = wall.key ?? wall.id, L = Math.hypot(wall.b[0]-wall.a[0],wall.b[1]-wall.a[1]);
    const warn = reason => warnings.push({key:wall.guid,reason});
    if (!finite([...wall.a,...wall.b,wall.t,wall.height,wall.z??wall.baseOffset??0]) || L < 1 || wall.t <= 0 || wall.height <= 0) {warn('invalid-wall');continue;}
    const u = [(wall.b[0]-wall.a[0])/L,(wall.b[1]-wall.a[1])/L], n = [-u[1],u[0]], den = dot(u,dir);
    // No claim to exact layered oblique/curved cuts. Only warn when mesh cuts it.
    if (wall.bulge || wall.frameUnsupported || !isolatedWall(wall,walls) || Math.abs(Math.abs(den)-1)>1e-8) {
      if(cuts.some(c=>c.key===key)) warn('unsupported-cut');
      continue;
    }
    const s = dot([cut.o[0]-wall.a[0],cut.o[1]-wall.a[1]],dir)/den;
    if (s <= 1e-7 || s >= L-1e-7) {if(cuts.some(c=>c.key===key))warn('end-cut');continue;}
    const layers = wall.assembly?.layers;
    const valid = materials && !wall.referenceIssue && layers?.length &&
      layers.every(l=>Number.isFinite(l.t)&&l.t>=0&&(l.t>0||l.function==='membrane')&&(l.kind==='cavity'?l.t>0:materialById.has(l.materialId))) &&
      Math.abs(layers.reduce((sum,l)=>sum+l.t,0)-wall.t)<0.005;
    const hosted = openings.filter(o=>o.wall===wall.id);
    if(hosted.some(o=>!finite([o.offset,o.width,o.sill,o.height])||o.width<=0||o.height<=0||o.offset<0||o.offset+o.width>L+0.005)) {warn('invalid-opening');continue;}
    let spans = [[wall.z??wall.baseOffset??0,(wall.z??wall.baseOffset??0)+wall.height]];
    for(const o of hosted) if(s>=o.offset-1e-7&&s<=o.offset+o.width+1e-7) {
      spans=spans.flatMap(([a,b])=>[[a,Math.min(b,o.sill)],[Math.max(a,o.sill+o.height),b]]).filter(([a,b])=>b>a+1e-9);
    }
    const c = dot([wall.a[0]+u[0]*s,wall.a[1]+u[1]*s],right), lateral = dot(n,right), sign=wall.extSide==='right'?-1:1;
    const cropRect = (a,b,lo,hi) => {
      const x0=Math.max(Math.min(a,b),box?.x0??-Infinity),x1=Math.min(Math.max(a,b),box?.x1??Infinity);
      const y0=Math.max(lo,box?.y0??-Infinity),y1=Math.min(hi,box?.y1??Infinity);
      return x1>x0&&y1>y0 ? rect(x0,x1,y0,y1) : null;
    };
    const loops=spans.map(([a,b])=>cropRect(c-wall.t/2,c+wall.t/2,a,b)).filter(Boolean);
    const row={key,guid:wall.guid,cls:'IfcWall',loops,source:'authored-wall',detail,scale,layers:undefined,boundaries:[]};
    // 0.10 BK.15 (bk-r3-types-10): a sketch-stage wall (its type tagged LOD 100 or 200) is ONE hatched band in a section too, at every detail level
    const sketch=isSketchWall(wall);
    if(sketch) { row.sketch=true; row.layers=[{index:0,materialId:null,kind:'material',core:true,thickness:wall.t,from:c-wall.t/2,to:c+wall.t/2,polys:loops,fill:SKETCH_BAND.fill,color:SKETCH_BAND.color,fillColor:SKETCH_BAND.fillColor,hatch:loops.flatMap(p=>hatchSegments(p,[],'diagonal',SKETCH_BAND.spacing*(scale||50)/75))}]; }
    if(!valid && !sketch) warn('unavailable-layers');
    if(valid && !sketch && detail!=='coarse') {
      row.layers=[];let off=sign*wall.t/2;
      const boundaries=new Map();
      for(const [index,l] of layers.entries()) {
        const end=off-sign*l.t,mat=materialById.get(l.materialId),fill=l.kind==='cavity'?'none':mat.fill;
        const polys=l.t?spans.map(([a,b])=>cropRect(c+off*lateral,c+end*lateral,a,b)).filter(Boolean):[];
        const hatch=detail==='fine'&&['diagonal','crosshatch'].includes(fill)?polys.flatMap(p=>hatchSegments(p,[],fill==='crosshatch'?'cross':'diagonal',(scale||50)/75)):[];
        row.layers.push({index,materialId:l.materialId,kind:l.kind,core:!!l.core,thickness:l.t,from:c+off*lateral,to:c+end*lateral,polys,fill,color:mat?.color,fillColor:mat?.fillColor,hatch});
        if(index>0&&l.t>0&&!boundaries.has(off))boundaries.set(off,{offset:c+off*lateral});
        if(l.t===0)boundaries.set(off,{offset:c+off*lateral,membrane:true,color:mat.fillColor});
        off=end;
      }
      for(const b of boundaries.values()) {
        const x=b.offset;
        b.paths=spans.map(([a,z])=>[[x,Math.max(a,box?.y0??-Infinity)],[x,Math.min(z,box?.y1??Infinity)]]).filter(p=>p[1][1]>p[0][1]&&x>=(box?.x0??-Infinity)&&x<=(box?.x1??Infinity));
        row.boundaries.push(b);
      }
    }
    for(let i=cuts.length-1;i>=0;i--)if(cuts[i].key===key)cuts.splice(i,1);
    if(loops.length)cuts.push(row);
  }
  let bounds=view.bounds?{...view.bounds}:null;
  for(const c of cuts)for(const loop of c.loops)for(const [x,y]of loop) {
    if(!bounds)bounds={x0:x,x1:x,y0:y,y1:y};
    bounds.x0=Math.min(bounds.x0,x);bounds.x1=Math.max(bounds.x1,x);bounds.y0=Math.min(bounds.y0,y);bounds.y1=Math.max(bounds.y1,y);
  }
  return {...view,cuts,bounds,detail,warnings};
}

/** Same paper primitives consumed by screen SVG, drawing PDF and sheet PDF.
 * White masks hide projected edges inside ALL cut bands, including cavities.
 */
export function cutFaceItems(c, P, scale = c.scale) {
  const polys=c.loops.map(l=>l.map(P)),out=[];
  out.push({t:'fill',polys,g:c.layers?1:/Geographic/.test(c.cls)?0.82:0.6});
  const graphic = c.layers && c.detail==='fine' && scale!==c.scale ? {...c,layers:c.layers.map(l=>({...l,hatch:['diagonal','crosshatch'].includes(l.fill)?l.polys.flatMap(p=>hatchSegments(p,[],l.fill==='crosshatch'?'cross':'diagonal',(scale||50)/75)):[]}))} : c;
  if(c.layers)for(const it of layerPrimitives(graphic))out.push(it.t==='fill'?{...it,polys:it.polys.map(p=>p.map(P))}:{...it,pts:it.pts.map(P)});
  for(const pl of polys)out.push({t:'line',pts:[...pl,pl[0]],w:0.45,g:0});
  return out;
}
