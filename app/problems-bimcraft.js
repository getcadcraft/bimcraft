/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems-bimcraft.js — BimCraft's model checks (ifc-checks.js, 0.4 B19) as shared Problems (0.7.1 → 0.8; spec docs/0.8-PROBLEMS-SPEC.md
 * § Migration). No DOM: bin/test-problems.mjs runs it in Node; bimcraft.js hands the result to the shell's window.ccProblems (manifest
 * "problems") each time Model checks run. The regulations add-on brings its own problems (addons/regs/lib/problems.js) through rules-hook.js.
 *
 *   checkProblems(results, { guidOf(key), nameOf(key), t }) → [problem]   one problem per group: GlobalId used twice = error (two elements
 *     cannot share one; other programs merge or drop them), a required property missing / on no storey / stacked copies = warning.
 *     Objects are named by GlobalId (kind 'element'), so an acceptance survives closing and opening the file (keys change, GlobalIds don't).
 */
const SEVERITY = { guid: 'error', required: 'warning', storey: 'warning', stacked: 'warning' };

export function checkProblems(results, { guidOf = (k) => String(k), nameOf = (k) => '#' + k, t = (k) => k } = {}) {
  const out = [];
  for (const c of results || []) {
    for (const g of c.groups || []) {
      const keys = g.keys || [];
      if (!keys.length) continue;
      const about = keys.slice(0, 50).map((k) => ({ kind: 'element', id: guidOf(k) || '#' + k, label: nameOf(k) })).filter((r) => r.id);
      const n = keys.length;
      const what = c.id === 'required' ? t('checks.group.required', { cls: g.rule?.cls ? String(g.rule.cls).replace(/^Ifc/, '') : t('checks.class.any'), field: g.rule?.field || '', n })
        : c.id === 'guid' ? t('checks.group.guid', { guid: g.label, n }) : c.id === 'stacked' ? t('checks.group.stacked', { name: about[0]?.label || '', n }) : String(n);
      out.push({
        code: 'checks.' + c.id, severity: SEVERITY[c.id] || 'warning',
        part: c.id === 'required' ? (g.rule?.cls || '*') + '.' + (g.rule?.field || '') : c.id === 'guid' ? String(g.label) : '',
        msg: { key: 'checks.name.' + c.id, vars: {} }, text: t('checks.name.' + c.id) + ': ' + what,
        about, source: { name: 'bimcraft.checks' },
      });
    }
  }
  return out;
}

// ---- P.6 (0.8, session problems-08): ⚠ markers in the 3D view. bimcraft.js mounts them with
// `P.markers(bimMarkers({ viewer: () => viewer, stage: ui.canvas.parentElement, keysOf: keysOfGuid, active: () => mode === 'ifc' }))`.
// The anchor is the middle of the top of the first object's bounds that is drawn (viewer.keyBounds, viewer space); the camera does the rest.
// Plan-view markers (Draw's pv.toScreen) need each element's plan point by GlobalId: not built yet, see docs/0.8-sessions/problems-08.md.
/** The anchor of a problem in viewer space: [x, y, z] or null (no object of it is in the model / drawn). */
export function bimAnchor(viewer, keysOf, p) {
  for (const r of p.about || []) {
    if (r.kind !== 'element') continue;
    const keys = keysOf(r.id);
    if (!keys || !keys.length) continue;
    const b = viewer.keyBounds(keys);
    if (b) return [(b.min[0] + b.max[0]) / 2, b.max[1], (b.min[2] + b.max[2]) / 2];   // viewer space is y-up
  }
  return null;
}
export function bimMarkers({ viewer, stage, keysOf, active = () => true }) {
  return {
    stage,
    anchor: (p) => { const v = viewer(); return v && active() ? bimAnchor(v, keysOf, p) : null; },
    toScreen: (pt) => {
      const v = viewer();
      if (!v) return null;
      const cam = v.camera, r = v.canvas.getBoundingClientRect(), s = stage.getBoundingClientRect();
      cam.updateMatrixWorld();
      const q = new cam.position.constructor(pt[0], pt[1], pt[2]).project(cam);
      if (q.z > 1) return { x: 0, y: 0, behind: true };
      return { x: (q.x * 0.5 + 0.5) * r.width + (r.left - s.left), y: (-q.y * 0.5 + 0.5) * r.height + (r.top - s.top) };
    },
    onView: (fn) => {
      const v = viewer();
      if (!v) return () => {};
      const prev = v.onRender;
      const wrapped = () => { prev?.(); fn(); };
      v.onRender = wrapped;
      return () => { if (v.onRender === wrapped) v.onRender = prev; };
    },
  };
}
