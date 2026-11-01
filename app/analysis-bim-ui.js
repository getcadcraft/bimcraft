/* SPDX-License-Identifier: Apache-2.0 */
/**
 * analysis-bim-ui.js — BimCraft's Analysis tab (0.6 LC.4, session lc-structure): the shared frame analysis panel
 * (frame/frame-panel.js, the same in DetailCraft) on the open IFC's beams, columns and members. analysis-bim.js reads
 * the model and keeps the settings in it (one undo step each, saved with the IFC); results are drawn on the 3D view in
 * a group of their own. An analysis aid, not a code check.
 *
 *   mountAnalysisBim(host) → { render(), changed(), picked(), panel (the framePanel) } | null without a pane
 *   host = { pane, W, editor() → IfcEditor | null, viewer() → Viewer3D | null, selection() → [keys], select(keys),
 *            status(text, isError), download(name, data, type), fileName(), afterEdit(), place(p mm) → [x, y, z] in the scene,
 *            setFrameProblems(list) → the concrete checks' and drift findings as Problems (0.8 SU.1056, optional),
 *            shown() → is the tab showing, setBreakProblems(list) → the "What breaks first" findings as Problems (optional) }
 */
import * as THREE from 'three';
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { framePanel, defaultAnalysis, cleanAnalysis } from './frame/frame-panel.js';
import { resultGeometry } from './frame/frame-draw.js';
import { readFrameElements, frameOfElements, readAnalysis, writeAnalysis, sectionsOfElements } from './analysis-bim.js';
import { solveFrame } from './frame/frame-solve.js';
import { KEY_SPAN } from './ifc-model.js';
import * as B from './study/breakit.js';   // 0.8 EG.31: findings, reserve, Problems (lib/study, copied by tools/study/sync.mjs bimcraft)
import { frameLive } from './study/live.js';   // 0.8 EG.29: live re-solve

const drawnId = (id) => String(id).replace(/\.\d+$/, '');
/** Findings point at analytical ids: back to the element's GlobalId (a member split at a crossing is its element), the combination has no element. */
export function breakAbout(list) {
  const own = (p) => (p.code === 'breakit.combo' && p.msg?.vars && p.msg.vars.util === undefined ? { ...p, id: p.id + ':reserve', code: 'breakit.reserve', msg: { key: 'breakit.p.reserve' + (p.severity === 'error' ? '.fail' : ''), vars: p.msg.vars } } : p);
  return list.map(own).map((p) => ({ ...p, about: p.about.filter((a) => a.kind === 'member').map((a) => ({ ...a, id: drawnId(a.id) })) }));
}

export function mountAnalysisBim(host) {
  if (!host.pane) return null;
  let version = 0;
  let cache = null;          // { version, elements, byGid, settings }
  let group = null;
  const ed = () => host.editor();
  /** What the model holds now (elements read once per version). */
  function state() {
    const e = ed();
    if (!e) return null;
    if (cache && cache.version === version && cache.editor === e) return cache;
    const r = readFrameElements(host.W, e.api, e.mid);
    cache = { version, editor: e, elements: r.elements, slabs: r.slabs, walls: r.walls, skipped: r.skipped, byGid: new Map(r.elements.map((x) => [x.gid, x])), byId: new Map(r.elements.map((x) => [x.id, x])), settings: readAnalysis(host.W, e.api, e.mid) };
    return cache;
  }
  function hide() {
    const v = host.viewer();
    if (group && v) { group.traverse((o) => { o.geometry?.dispose(); o.material?.dispose?.(); }); v.scene.remove(group); group = null; v.render(); }
  }
  function show(frame, sol, key, { mode, scale }) {
    hide();
    const v = host.viewer();
    if (!v || !sol.results[key] || mode === 'off') return { max: 0, scale: 0 };
    const geo = resultGeometry(sol, key, { mode, scale });
    const place = (list) => { const out = []; for (let i = 0; i < list.length; i += 3) out.push(...host.place([list[i], list[i + 1], list[i + 2]])); return out; };
    group = new THREE.Group();
    if (geo.tris.length) {
      const b = new THREE.BufferGeometry();
      b.setAttribute('position', new THREE.Float32BufferAttribute(place(geo.tris), 3));
      b.setAttribute('color', new THREE.Float32BufferAttribute(geo.triColors, 3));
      const mesh = new THREE.Mesh(b, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthTest: false, depthWrite: false }));
      mesh.renderOrder = 10;
      group.add(mesh);
    }
    if (geo.lines.length) {
      const b = new THREE.BufferGeometry();
      b.setAttribute('position', new THREE.Float32BufferAttribute(place(geo.lines), 3));
      b.setAttribute('color', new THREE.Float32BufferAttribute(geo.lineColors, 3));
      const line = new THREE.LineSegments(b, new THREE.LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true }));
      line.renderOrder = 11;
      group.add(line);
    }
    v.scene.add(group);
    v.render();
    return { max: geo.max, scale: geo.scale };
  }
  const keyOf = (id) => id;                         // the open model is the first one: its keys are its express ids
  const panel = framePanel({
    el, t,
    design: true,   // 0.7 SU.878: the sections carry an I shape (analysis-bim.js), so the Design checks block shows
    cls: { block: 'fa-block', note: 'bc-muted', head: 'fa-head', table: 'bc-qto-table fa-table', btn: 'btn-line btn-sm-cc', primary: 'btn-plot btn-sm-cc', link: 'bc-linkbtn', select: 'select-cc fa-select', input: 'bc-input fa-input', error: 'fa-error' },
    version: () => version,
    analysis: () => state()?.settings || defaultAnalysis(t),
    setAnalysis: (label, next) => {
      const e = ed();
      if (!e) return null;
      const clean = cleanAnalysis(next);
      try { e.modelChange(writeAnalysis(JSON.stringify(clean)), { label, verb: null }); }
      catch (err) { host.status(err.key ? t(err.key) : err.message, true); return null; }
      version++;
      host.afterEdit();
      return true;
    },
    analyse: () => {
      const s = state();
      if (!s) throw new Error(t('frame.err.empty'));
      const frame = frameOfElements(s.elements, s.settings || defaultAnalysis(t), { name: host.fileName(), slabs: s.slabs, walls: s.walls });
      frame.skipped.push(...s.skipped.map((x) => ({ id: x.gid, why: x.why })));
      if (s.skipped.length) frame.notes.push({ key: 'frame.note.ifc-not-read', n: s.skipped.length });
      return { frame, sol: solveFrame(frame.model) };
    },
    selection: () => {
      const s = state();
      if (!s) return [];
      return host.selection().filter((k) => k < KEY_SPAN).map((k) => s.byId.get(k)?.gid).filter(Boolean);
    },
    member: (gid) => {
      const x = state()?.byGid.get(gid);
      return x ? { label: x.name || x.gid, type: x.type, profile: x.sec.name, start: x.a, end: x.b } : null;
    },
    select: (gid) => { const x = state()?.byGid.get(gid); if (x) host.select([keyOf(x.id)]); },
    print: (text) => host.status(text),
    download: host.download,
    fileName: () => String(host.fileName() || 'model').replace(/\.ifc$/i, '').replace(/[\\/:*?"<>|\u0000-\u001f]+/g, '-').slice(0, 80) || 'model',
    show, hide,
    breakit: { B, source: 'bimcraft.breakit', connections: () => [], setProblems: (list) => host.setBreakProblems?.(breakAbout(list)) },   // an IFC has no bolted joints the checks can read: members and the combination only
    live: { frameLive },
    concrete: true,   // 0.8 SU.1056: the Concrete and Seismic blocks (frame/frame-concrete-panel.js, the same as DetailCraft's)
    sections: () => sectionsOfElements(state()?.elements || []),
    problems: (list) => host.setFrameProblems?.(list.map((p) => ({ ...p, source: { name: 'bimcraft.frame' }, about: (p.about || []).map((a) => (a.kind === 'member' ? { ...a, id: drawnId(a.id) } : a)) }))),
    rerender: () => render(),
  });
  function render() {
    if (!host.shown()) return;
    if (!ed()) { host.pane.replaceChildren(el('p', { className: 'bc-muted' }, t('frame.ui.needs-ifc'))); return; }
    host.pane.replaceChildren(...panel.panel());
  }
  return {
    panel, render,
    /** 0.8 EG.47 (bim-sim_PART_3): the open model's analytical frame (no solve), for the earthquake run's floor stiffness; null without a model or members. */
    frameModel() {
      const s = state();
      if (!s || !s.elements.length) return null;
      const frame = frameOfElements(s.elements, s.settings || defaultAnalysis(t), { name: host.fileName(), slabs: s.slabs, walls: s.walls });
      return frame.model && frame.model.members.length ? frame.model : null;
    },
    /** After every edit, undo, rebuild or new model: results go stale, elements are read again. */
    changed() { version++; cache = null; panel.modelChanged(); render(); },
    picked() { render(); },
  };
}
