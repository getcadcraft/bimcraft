/* SPDX-License-Identifier: Apache-2.0 */
/**
 * views-bim.js — saved camera views and walkthroughs kept in the IFC (0.5 RC.7, session `render`). DOM-free: the Node test
 * runs it on cc-ifc. Stored as the property set `CadCraft_Views` on the IfcProject (plain IFC, ignored by other programs):
 *   'View: <name>'  IfcText "x y z dx dy dz fov"                 the eye and the looking direction, IFC axes (Z up), metres
 *   'Narr: <name>'  IfcText  0.8 EG.50: the walk's narration, JSON {lang, cues: [[seconds, text]]} (narration.js)
 *   'Walk: <name>'  IfcText "t x y z dx dy dz; t x y z dx dy dz; …"  a walkthrough: seconds from its start, eye, direction
 * Order in the set = the order the views play in. Coordinates are the first model's (bcf.js toIfcPoint / fromIfcPoint).
 *
 *   PSET, MAX_VIEWS 200, MAX_WALK 4800 samples (20 minutes at 4 a second)
 *   readViews(api, mid) → {views: [{name, pos, dir, fov}], walks: [{name, pts: [{t, pos, dir}]}]}   (untrusted: checked)
 *   writeViewsOp({views, walks}) → op for IfcEditor.modelChange: the set replaced by this list (one undo step)
 *   encodeView(v) / decodeView(s) · encodeWalk(pts) / decodeWalk(s) · cleanName(s)
 *   viewAt(walk, t) → {pos, dir}   a walkthrough's camera at time t (linear between samples; direction normalised)
 *   ease(f)                        the transition curve between two views
 */
import { ModelWriter } from './model-write.js';
import { ids, val, deleteLine } from './ifc-util.js';
import { encode as encodeNarr, decode as decodeNarr } from './narration.js';   // 0.8 EG.50

export const PSET = 'CadCraft_Views';
export const MAX_VIEWS = 200;
export const MAX_WALK = 4800;
const LIMIT = 1e7;   // metres: anything further is not a camera in a building

const fin = (x) => typeof x === 'number' && Number.isFinite(x) && Math.abs(x) < LIMIT;
const r4 = (x) => Math.round(x * 1e4) / 1e4;
const unit = (d) => { const l = Math.hypot(d[0], d[1], d[2]); return l > 1e-9 ? [d[0] / l, d[1] / l, d[2] / l] : null; };

export function cleanName(s) {
  return String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80);
}
export function encodeView(v) { return [...v.pos, ...v.dir].map(r4).join(' ') + ' ' + Math.round(v.fov * 100) / 100; }
export function decodeView(s) {
  const a = String(s ?? '').trim().split(/\s+/).map(Number);
  if (a.length !== 7 || !a.every(fin)) return null;
  const dir = unit(a.slice(3, 6));
  if (!dir) return null;
  return { pos: a.slice(0, 3), dir, fov: Math.max(10, Math.min(120, a[6])) };
}
export function encodeWalk(pts) { return pts.slice(0, MAX_WALK).map((p) => [Math.round(p.t * 100) / 100, ...p.pos.map(r4), ...p.dir.map(r4)].join(' ')).join('; '); }
export function decodeWalk(s) {
  const out = [];
  let last = -Infinity;
  for (const part of String(s ?? '').split(';')) {
    if (out.length >= MAX_WALK) break;
    const a = part.trim().split(/\s+/).map(Number);
    if (a.length !== 7 || !a.every(fin) || a[0] < last || a[0] > 86400) continue;
    const dir = unit(a.slice(4, 7));
    if (!dir) continue;
    out.push({ t: a[0], pos: a.slice(1, 4), dir });
    last = a[0];
  }
  return out.length >= 2 ? out : null;
}

function projectId(api, mid) { return ids(api, mid, 'IFCPROJECT')[0] ?? null; }

export function readViews(api, mid) {
  const views = [], walks = [], narr = new Map();
  const pid = projectId(api, mid);
  if (pid === null) return { views, walks };
  for (const rid of ids(api, mid, 'IFCRELDEFINESBYPROPERTIES')) {
    const r = api.GetLine(mid, rid, false);
    if (!(r?.RelatedObjects || []).some((h) => h.value === pid)) continue;
    const d = r.RelatingPropertyDefinition?.value ? api.GetLine(mid, r.RelatingPropertyDefinition.value, false) : null;
    if (!d || val(d.Name) !== PSET) continue;
    for (const h of d.HasProperties || []) {
      const p = api.GetLine(mid, h.value, false), n = String(val(p?.Name) || ''), v = val(p?.NominalValue);
      if (n.startsWith('View: ') && views.length < MAX_VIEWS) { const c = decodeView(v), name = cleanName(n.slice(6)); if (c && name) views.push({ name, ...c }); }
      else if (n.startsWith('Narr: ')) { const nn = decodeNarr(v), name = cleanName(n.slice(6)); if (nn && name) narr.set(name, nn); }   // 0.8 EG.50: a walk's narration
      else if (n.startsWith('Walk: ') && walks.length < MAX_VIEWS) { const pts = decodeWalk(v), name = cleanName(n.slice(6)); if (pts && name) walks.push({ name, pts }); }
    }
    break;
  }
  for (const w of walks) if (narr.has(w.name)) w.narration = narr.get(w.name);
  return { views, walks };
}

export function writeViewsOp({ views = [], walks = [] }) {
  const rows = [
    ...views.slice(0, MAX_VIEWS).map((v) => ['View: ' + cleanName(v.name), 'IFCTEXT', encodeView(v)]),
    ...walks.slice(0, MAX_VIEWS).map((w) => ['Walk: ' + cleanName(w.name), 'IFCTEXT', encodeWalk(w.pts)]),
    ...walks.slice(0, MAX_VIEWS).filter((w) => w.narration && encodeNarr(w.narration)).map((w) => ['Narr: ' + cleanName(w.name), 'IFCTEXT', encodeNarr(w.narration)]),   // 0.8 EG.50
  ];
  return (ed) => {
    const w = new ModelWriter(ed.W, ed.api, ed.mid);
    return w.run(() => {
      const pid = projectId(w.api, w.mid);
      if (pid === null) throw new Error('no IfcProject');   // i18n-ignore: a file with no project cannot be opened here
      const d = w.defNamed(pid, PSET);
      if (!d) { if (rows.length) w.relateDef(pid, w.pset(PSET, rows)); return { id: pid }; }
      const ps = w.touch(d.def);
      for (const h of ps.HasProperties || []) { if (w.api.GetLine(w.mid, h.value, false)) { w.touch(h.value); deleteLine(w.api, w.mid, h.value); } }
      ps.HasProperties = w.propLines(rows);   // an empty set is valid IFC; it stays for the next view
      w.write(ps);
      return { id: pid };
    });
  };
}

export function viewAt(walk, t) {
  const p = walk.pts;
  if (t <= p[0].t) return { pos: p[0].pos.slice(), dir: p[0].dir.slice() };
  const last = p[p.length - 1];
  if (t >= last.t) return { pos: last.pos.slice(), dir: last.dir.slice() };
  let i = 1;
  while (p[i].t < t) i++;
  const a = p[i - 1], b = p[i], f = (t - a.t) / Math.max(1e-6, b.t - a.t);
  const pos = a.pos.map((x, k) => x + (b.pos[k] - x) * f);
  const dir = unit(a.dir.map((x, k) => x + (b.dir[k] - x) * f)) || b.dir.slice();
  return { pos, dir };
}

export const ease = (f) => (f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2);
