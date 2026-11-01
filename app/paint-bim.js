/* SPDX-License-Identifier: Apache-2.0 */
/**
 * paint-bim.js — library materials painted onto IFC elements (0.5 RC.7 / RC.11 (b), session `render`). DOM-free: the Node
 * test runs it on cc-ifc. The library is render/materials.js (a synced copy of ModelCraft's).
 *
 * What a painted element carries (plain IFC4 / IFC2X3, so other BIM programs open it):
 *   · the property set `CadCraft_Render`: `Material` = a library id for the whole element, and `Material X+` … `Material Z-`
 *     for the faces whose normal runs along that axis of the element's own placement (a wall's two sides are Y+ and Y−
 *     for walls drawn in BimCraft; a slab's top is Z+, its underside Z−). '' = none. This is what BimCraft reads back.
 *   · its body items styled (IfcStyledItem) with a surface style named "<material> (CadCraft)": the material's colour
 *     (IfcSurfaceStyleRendering) and, in IFC4, an IfcSurfaceStyleWithTextures naming it (IfcImageTexture, URLReference
 *     `cadcraft-material:<id>`) — other programs show the colour; the texture name tells a person what it was.
 *     A side-only paint leaves the style as it is (one item, one style: IFC styles the whole body).
 *
 *   PSET, AXES
 *   paintOp({ ids, mat, axis }) → op for IfcEditor.modelChange   mat = library id | null (take the paint off); axis null =
 *                                 the whole element (its sides cleared), else one of AXES
 *   readPaint(api, mid) → Map<expressID, {all, sides: {'Y+': id, …}}>   what the file says (unknown ids dropped)
 *   faceAxis(api, mid, id, nFile) → 'X+' … 'Z-'           which axis of the element's placement a face normal (file axes,
 *                                 Z up) runs along; viewerToFileDir(nViewer, C, P) turns the 3D view's normal into file axes
 *   paintOf(paint, id, nFile, api, mid) → library id | null   the material a face of element `id` with normal nFile shows
 */
import { ModelWriter } from './model-write.js';
import { ids, val, deleteLine } from './ifc-util.js';
import { material, isMaterialId } from './render/materials.js';
import { ensure as ensurePhotoMaterials } from './photo-materials.js';   // 0.8 EG.62: the file's own photo materials are known before ids are read

export const PSET = 'CadCraft_Render';
export const AXES = ['X+', 'X-', 'Y+', 'Y-', 'Z+', 'Z-'];
const prop = (axis) => (axis ? 'Material ' + axis : 'Material');
const rgb01 = (hex) => [1, 3, 5].map((o) => Math.round((parseInt(hex.slice(o, o + 2), 16) / 255) * 1e4) / 1e4);

/** The body items of a product (its 'Body' shape representations; every representation when none is named so). */
function bodyItems(api, mid, id) {
  const p = api.GetLine(mid, id, false);
  const sh = p?.Representation?.value ? api.GetLine(mid, p.Representation.value, false) : null;
  const reps = (sh?.Representations || []).map((h) => api.GetLine(mid, h.value, false)).filter(Boolean);
  const body = reps.filter((r) => String(val(r.RepresentationIdentifier) || '').toLowerCase() === 'body');
  return (body.length ? body : reps).flatMap((r) => (r.Items || []).map((h) => h.value));
}

/** A surface style for a library material (found again by name, else made). IFC4 adds the texture's name. */
function materialStyle(w, id) {
  const m = material(id), name = (m ? id : 'material') + ' (CadCraft)';   // i18n-ignore: a style name written into the file
  if (!w._matStyles) {
    w._matStyles = new Map();
    for (const sid of ids(w.api, w.mid, 'IFCSURFACESTYLE')) { const n = val(w.api.GetLine(w.mid, sid, false).Name); if (n && !w._matStyles.has(n)) w._matStyles.set(n, sid); }
  }
  let sid = w._matStyles.get(name);
  if (sid && w.api.GetLine(w.mid, sid, false)) return sid;
  const [r, g, b] = rgb01(m.color);
  const col = w.make('IFCCOLOURRGB', null, r, g, b);
  const styles = [];
  if (w.v4) {
    // IfcSurfaceStyleRendering: colour, transparency, then diffuse … reflectance; only what we know is filled in
    styles.push(w.H(w.make('IFCSURFACESTYLERENDERING', w.H(col), m.glass ? Math.round(m.glass * 100) / 100 : 0, null, null, null, null, null, null, 'NOTDEFINED')));
    if (m.tex) {
      const tex = w.make('IFCIMAGETEXTURE', w.T('IFCBOOLEAN', true), w.T('IFCBOOLEAN', true), w.T('IFCIDENTIFIER', 'MODULATE'), null, null, w.T('IFCURIREFERENCE', 'cadcraft-material:' + id));
      styles.push(w.H(w.make('IFCSURFACESTYLEWITHTEXTURES', [w.H(tex)])));
    }
  } else styles.push(w.H(w.make('IFCSURFACESTYLESHADING', w.H(col))));
  sid = w.make('IFCSURFACESTYLE', w.L(name), 'BOTH', styles);   // enums as model-write.js writes them
  w._matStyles.set(name, sid);
  return sid;
}

export function paintOp({ ids: targets, mat, axis = null }) {
  if (mat !== null && !isMaterialId(mat)) throw new Error('unknown material');   // i18n-ignore: a programming error
  if (axis !== null && !AXES.includes(axis)) throw new Error('unknown axis');      // i18n-ignore: a programming error
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      for (const id of targets) {
        if (!w.api.GetLine(w.mid, id, false)) continue;
        const rows = axis ? [[prop(axis), 'IFCLABEL', mat || '']] : [[prop(null), 'IFCLABEL', mat || ''], ...AXES.map((a) => [prop(a), 'IFCLABEL', ''])];
        // a new set gets only what is said; an existing one has every listed property set (empty = none)
        const have = w.defNamed(id, PSET);
        w.upsertPset(id, PSET, have ? rows : rows.filter((r) => r[2] !== ''));
        if (axis) continue;
        // the whole element: its body styled with the material (or left unstyled when the paint is taken off)
        for (const item of bodyItems(w.api, w.mid, id)) {
          for (const st of w.styledOf(item)) { if (w.api.GetLine(w.mid, st, false)) { w.touch(st); deleteLine(w.api, w.mid, st); } }   // as model-write.js's dropTree
          w._styled?.delete(item);
          if (mat) w.styleItem(item, materialStyle(w, mat));
        }
      }
      return { ids: targets.slice() };
    });
  };
}

export function readPaint(api, mid) {
  ensurePhotoMaterials(api, mid);
  const out = new Map();
  for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false);
    const d = r?.RelatingPropertyDefinition?.value ? api.GetLine(mid, r.RelatingPropertyDefinition.value, false) : null;
    if (!d || val(d.Name) !== PSET) continue;
    const p = { all: null, sides: {} };
    for (const h of d.HasProperties || []) {
      const q = api.GetLine(mid, h.value, false), n = String(val(q?.Name) || ''), v = String(val(q?.NominalValue) ?? '');
      if (!isMaterialId(v)) continue;
      if (n === 'Material') p.all = v;
      else { const a = n.slice(9); if (n.startsWith('Material ') && AXES.includes(a)) p.sides[a] = v; }
    }
    if (!p.all && !Object.keys(p.sides).length) continue;
    for (const h of r.RelatedObjects || []) out.set(h.value, p);
  }
  return out;
}

/** The element's placement rotation (columns = its X, Y, Z in file axes). */
function placementAxes(api, mid, id) {
  try {
    const p = api.GetLine(mid, id, false);
    if (!p?.ObjectPlacement?.value) return null;
    const M = api.GetWorldTransformMatrix(mid, p.ObjectPlacement.value);
    const col = (i) => { const v = [M[i * 4], M[i * 4 + 1], M[i * 4 + 2]], l = Math.hypot(...v) || 1; return v.map((x) => x / l); };
    return [col(0), col(1), col(2)];
  } catch { return null; }
}

export function faceAxis(api, mid, id, nFile, axesCache = null) {
  let ax = axesCache ? axesCache.get(id) : undefined;
  if (ax === undefined) { ax = placementAxes(api, mid, id); axesCache?.set(id, ax); }
  const A = ax || [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  let best = -1, at = null;
  for (let i = 0; i < 3; i++) {
    const d = nFile[0] * A[i][0] + nFile[1] * A[i][1] + nFile[2] * A[i][2];
    if (Math.abs(d) > best) { best = Math.abs(d); at = 'XYZ'[i] + (d >= 0 ? '+' : '-'); }
  }
  return at;   // the axis the face is nearest (any unit normal has a component ≥ 0.577)
}

/** A direction in the 3D view → file axes (Z up): undo the model's placement and coordination rotations, then Y up → Z up. */
export function viewerToFileDir(n, C = null, P = null) {
  const inv = (M, v) => (M ? [M[0] * v[0] + M[1] * v[1] + M[2] * v[2], M[4] * v[0] + M[5] * v[1] + M[6] * v[2], M[8] * v[0] + M[9] * v[1] + M[10] * v[2]] : v);   // rotation⁻¹ = transpose
  const v = inv(C, inv(P, n));
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, -v[2] / l, v[1] / l];
}

export function paintOf(paint, id, nFile, api, mid, axesCache = null) {
  const p = paint.get(id);
  if (!p) return null;
  if (Object.keys(p.sides).length) { const a = faceAxis(api, mid, id, nFile, axesCache); if (a && p.sides[a]) return p.sides[a]; }
  return p.all;
}
