/* SPDX-License-Identifier: Apache-2.0 */
/**
 * coords-ui.js — where am I working, on screen (0.6 DF.15, session `bim-draw`): a coordinate readout over the 3D view and
 * over the plan (x, y and the level, in the model's units, measured from the project origin; map grid coordinates too when
 * the file has a map conversion), the plan's level named in its corner, and the project origin and the site's survey point
 * as markers (3D: placed over the view on every render; plan: drawn by model-planview.js from planMarkers()).
 * The maths is coords.js. Its own CSS (injected once), so bimcraft.css is untouched.
 *
 *   const c = mountCoords({ wrap3d, canvas, planWrap, viewer(), entry() → { api, mid, C, place } | null (cheap: asked
 *                           per frame), levels() → readLevels rows of that model (asked by modelChanged), units(), t })
 *   c.modelChanged()          read the markers again (a model opened, reloaded, moved)
 *   c.render()                3D markers follow the camera (call from the viewer's onRender)
 *   c.plan(p | null, level, M)   the plan readout: p = plan point (the storey's own X / Y, mm), M = its storeyWorld matrix
 *   c.planMarkers(M) → [{ p, kind: 'origin' | 'survey' | 'both', label }]   for the plan of the storey M belongs to
 *   c.on                      markers shown (localStorage "bimcraft.coords" = "off" hides them; the readouts stay)
 *   c.onToggle = () => …      after the markers button changed it (the plan redraws)
 * Test hook: window.bimcraftCoords = this API + last (the last readout's lines).
 */
import { readMarkers, levelFor, mapText, readout, planToFile, fileToPlan, fileToViewer } from './coords.js';
import { lenMark } from './model-units.js';
const OWN_UNIT = { m: 'terrain.unit.m', ft: 'terrain.unit.ft', 'us-ft': 'terrain.unit.ftus' };
import { dms, viewerToFile, fileToMap } from './ifc-geo.js';

const CSS = `
.bc-coords { position: absolute; z-index: 2; display: flex; align-items: flex-start; gap: .35rem; padding: .25rem .4rem; background: var(--sheet-2);
  border: var(--pen-1) solid var(--line); border-radius: var(--radius); font-size: .75rem; line-height: 1.35; font-variant-numeric: tabular-nums;
  color: var(--ink); pointer-events: auto; max-width: calc(100% - 1.5rem); }
.bc-coords-3d { right: 8.5rem; bottom: .5rem; }   /* left of the view cube; the toolbar lies over the top of the view */
.bc-coords-plan { right: .5rem; bottom: 3rem; }   /* over the status line */
.bc-coords-lines { display: grid; white-space: nowrap; }
.bc-coords-lines > :first-child { font-weight: 600; }
.bc-coords-btn { border: 0; background: none; padding: 0 .1rem; color: var(--ink-2); cursor: pointer; line-height: 1; font-size: .9rem; }
.bc-coords-btn[aria-pressed="true"] { color: var(--action); }
.bc-coords-btn:focus-visible { outline: var(--pen-2) solid var(--action); }
.bc-coords-marks { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }
.bc-coords-mark { position: absolute; transform: translate(-.625rem, -.625rem); display: flex; align-items: flex-start; gap: .2rem; color: var(--layer-red); }
.bc-coords-mark.is-survey { color: var(--layer-blue); }
.bc-coords-mark svg { width: 1.25rem; height: 1.25rem; display: block; pointer-events: auto; cursor: help; }
.bc-coords-mark span { margin-top: .75rem; padding: 0 .25rem; font-size: .7rem; font-weight: 600; white-space: nowrap; background: color-mix(in srgb, var(--sheet-2) 85%, transparent); border-radius: var(--radius); }
html.cc-phone .bc-coords { font-size: .7rem; }
html.cc-phone .bc-coords-plan { display: none; }
`;
const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'className') e.className = v; else e.setAttribute(k, v === true ? '' : String(v));
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k instanceof Node ? k : document.createTextNode(String(k)));
  return e;
}
/** The marker glyph: a circle with a cross (project origin) or a triangle in a circle (survey point), as on site plans. */
function glyph(kind) {
  const s = document.createElementNS(SVG_NS, 'svg');
  s.setAttribute('viewBox', '0 0 20 20'); s.setAttribute('aria-hidden', 'true');
  const add = (name, a) => { const n = document.createElementNS(SVG_NS, name); for (const [k, v] of Object.entries(a)) n.setAttribute(k, v); s.append(n); };
  add('circle', { cx: 10, cy: 10, r: 8, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 });
  if (kind !== 'survey') { add('path', { d: 'M10 1v18M1 10h18', stroke: 'currentColor', 'stroke-width': 1.25 }); }
  if (kind !== 'origin') { add('path', { d: 'M10 4.5 15 13.5H5Z', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.25 }); }
  return s;
}

export function mountCoords(o) {
  const t = o.t;
  if (!document.getElementById('bc-coords-css')) { const s = el('style', { id: 'bc-coords-css' }); s.textContent = CSS; document.head.append(s); }
  let on = true;
  try { on = localStorage.getItem('bimcraft.coords') !== 'off'; } catch (e) { /* private window: on */ }
  let marks = null, levels = [];   // readMarkers and the levels of the current model
  const fmt = (mm) => lenMark(mm, o.units());   // GH.3-A: the unit beside every number (feet-inches marks itself)
  const entry = () => { try { return o.entry(); } catch (e) { return null; } };   // a model closing while another opens: none
  const uM = () => (marks?.unitMm || 1) / 1000;   // metres per file unit
  const button = () => {
    const b = el('button', { type: 'button', className: 'bc-coords-btn', 'data-coords-marks': '', 'aria-pressed': String(on), title: t('coords.marks.title'), 'aria-label': t('coords.marks.title') });
    b.append(el('i', { className: 'bi bi-crosshair', 'aria-hidden': 'true' }));
    b.addEventListener('click', () => {
      on = !on;
      try { localStorage.setItem('bimcraft.coords', on ? 'on' : 'off'); } catch (e) { /* this tab only */ }
      for (const x of document.querySelectorAll('[data-coords-marks]')) x.setAttribute('aria-pressed', String(on));
      api.render();
      api.onToggle?.();
    });
    return b;
  };
  // 3D: the readout box (bottom right, beside the view cube) and a layer for the markers
  const lines3 = el('div', { className: 'bc-coords-lines', 'data-coords-lines': '' });
  const box3 = el('div', { className: 'bc-coords bc-coords-3d', 'data-coords': '3d', role: 'status', 'aria-live': 'off', hidden: true }, lines3, button());
  const layer = el('div', { className: 'bc-coords-marks', 'aria-hidden': 'true' });
  o.wrap3d.append(layer, box3);
  // the plan: its box (bottom right)
  const linesP = el('div', { className: 'bc-coords-lines', 'data-coords-lines': '' });
  const boxP = el('div', { className: 'bc-coords bc-coords-plan', 'data-coords': 'plan', role: 'status', 'aria-live': 'off', hidden: true }, linesP, button());
  o.planWrap?.append(boxP);

  const show = (box, linesEl, lines) => {
    box.hidden = !lines.length;
    linesEl.replaceChildren(...lines.map((l) => el('span', {}, l)));
    api.last = lines;
  };
  const mapOf = (fileMm) => {
    const g = marks?.georef;
    if (!g || g.kind !== 'map') return null;
    const u = marks.unitMm, [e, n] = fileToMap(g, [fileMm[0] / u, fileMm[1] / u, (fileMm[2] || 0) / u]);
    const m = mapText(g, e, n, o.units());
    if (m.note) m.unit += ' (' + t(OWN_UNIT[m.note]) + ')';   // GH.3-A: the CRS's own unit beside the pick, e.g. (US survey feet)
    return m;
  };

  // 3D pointer: what lies under it (the element's face, else the floor of the level shown lowest), at most once a frame;
  // a model so big that one look takes long is looked at less often
  let raf = 0, last = null, cost = 0, nextAt = 0;
  const look = () => {
    raf = 0;
    const v = o.viewer(), ent = entry();
    if (!v || !ent || !last) return;
    const now = performance.now();
    if (now < nextAt) { raf = requestAnimationFrame(look); return; }
    const hit = v.hitAt(last.x, last.y);
    cost = performance.now() - now; nextAt = performance.now() + Math.min(500, cost * 4);
    const u = uM();
    let pv = hit?.point || null;
    if (!pv) {
      const g0 = fileToViewer([0, 0, (levels[0]?.elevation || 0) / (u * 1000)], ent.place, ent.C, u);
      const q = v.planePoint(last.x, last.y, g0[1]);
      pv = q ? [q.x, q.y, q.z] : null;
    }
    if (!pv) return;
    const mm = viewerToFile(pv, ent.place, ent.C, u).map((x) => x * u * 1000);   // file mm, Z up
    show(box3, lines3, readout({ x: mm[0], y: mm[1], z: mm[2], level: levelFor(levels, mm[2]), map: mapOf(mm) }, fmt, t));
  };
  o.canvas.addEventListener('pointermove', (e) => { if (e.pointerType === 'touch') return; last = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(look); });
  o.canvas.addEventListener('pointerleave', () => { last = null; });   // the last reading stays, so the box's button can be reached

  // 3D markers
  const markEls = { origin: null, survey: null };
  const markEl = (kind, label, title) => {
    const m = el('div', { className: 'bc-coords-mark is-' + (kind === 'survey' ? 'survey' : 'origin'), title, 'data-coords-mark': kind });
    m.append(glyph(kind), el('span', {}, label));
    layer.append(m);
    return m;
  };
  function surveyWhere(s) {
    if (s.map) { const mt = mapOf(s.at); return t('coords.map', { e: mt.e, n: mt.n, unit: mt.unit }); }
    if (s.lat !== null) return dms(s.lat, 'lat') + ', ' + dms(s.lon, 'lon');
    return '';
  }
  const api = {
    last: [],
    get on() { return on; },
    onToggle: null,
    modelChanged() {
      const ent = entry();
      try { marks = ent ? readMarkers(ent.api, ent.mid) : null; } catch (e) { marks = null; }
      try { levels = ent ? o.levels() || [] : []; } catch (e) { levels = []; }
      layer.replaceChildren(); markEls.origin = markEls.survey = null;
      show(box3, lines3, marks ? [t('coords.hint3d')] : []);
      if (marks) {
        const s = marks.survey, where = s ? surveyWhere(s) : '';
        if (marks.same) markEls.origin = markEl(s ? 'both' : 'origin', t(s ? 'coords.both' : 'coords.origin'), t('coords.origin.title') + (where ? ' ' + t('coords.survey.where', { where }) : ''));
        else {
          markEls.origin = markEl('origin', t('coords.origin'), t('coords.origin.title'));
          markEls.survey = markEl('survey', t('coords.survey'), t('coords.survey.title') + (where ? ' ' + t('coords.survey.where', { where }) : ''));
        }
      }
      api.render();
    },
    render() {
      const v = o.viewer(), ent = entry();
      layer.hidden = !on || !marks || !v || !ent;
      if (layer.hidden) return;
      const r = o.wrap3d.getBoundingClientRect();
      const place = (m, fileMm) => {
        if (!m) return;
        const p = v.project(fileToViewer(fileMm.map((x) => x / (uM() * 1000)), ent.place, ent.C, uM()));
        m.hidden = !p || !Number.isFinite(p.x) || !Number.isFinite(p.y) || p.x < r.left || p.x > r.right || p.y < r.top || p.y > r.bottom;
        if (!m.hidden) { m.style.left = (p.x - r.left) + 'px'; m.style.top = (p.y - r.top) + 'px'; }
      };
      place(markEls.origin, marks.origin);
      if (marks.survey && !marks.same) place(markEls.survey, marks.survey.at);
    },
    plan(p, level, M) {
      if (!level) { show(boxP, linesP, []); return; }
      if (!p || !M) { show(boxP, linesP, [t('coords.level.plan', { level: level.name, h: fmt(level.elevation) })]); return; }
      const f = planToFile(M, p);
      const lines = readout({ x: f[0], y: f[1], level: null, map: mapOf(f) }, fmt, t);
      show(boxP, linesP, [t('coords.level.plan', { level: level.name, h: fmt(level.elevation) }), ...lines]);
    },
    planMarkers(M) {
      if (!on || !marks || !M) return [];
      const out = [];
      if (marks.same) out.push({ p: fileToPlan(M, marks.origin), kind: marks.survey ? 'both' : 'origin', label: t(marks.survey ? 'coords.both' : 'coords.origin') });
      else {
        out.push({ p: fileToPlan(M, marks.origin), kind: 'origin', label: t('coords.origin') });
        out.push({ p: fileToPlan(M, marks.survey.at), kind: 'survey', label: t('coords.survey') });
      }
      return out;
    },
  };
  if (typeof window !== 'undefined') window.bimcraftCoords = api;   // for tests
  return api;
}
