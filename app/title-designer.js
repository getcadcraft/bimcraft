/* SPDX-License-Identifier: Apache-2.0 */
/**
 * title-designer.js — draw your own sheet border and title block on a sheet (0.9 D8.17, session bim-views-09). Rectangles, lines, words and `{{field}}` words, a drawing area for the views;
 * saved as an SVG title block (title-svg.js designSvg), the same kind a person imports from a drawing program. Called from the sheet formats dialog (views-ui.js).
 *   openTitleDesigner({ el, dialog, btn, field, t, save, papers, units })   save(name, svgText) → an error message or null
 */
import { designSvg, parseTitleSvg } from './title-svg.js';

const NS = 'http://www.w3.org/2000/svg';
const FIELDS = ['title', 'number', 'project', 'company', 'name', 'date', 'drawn-by', 'checked-by', 'revision', 'scale', 'client'];

export function openTitleDesigner({ el, dialog, btn, field, t, save, papers }) {
  let [pw, ph] = papers[0].size, shapes = [], tool = 'rect', draft = null;
  const stage = el('div', { className: 'bc-sh-stage bc-td-stage', 'data-td-stage': '' });
  const name = el('input', { type: 'text', className: 'bc-input', 'data-td-name': '', maxLength: 60, placeholder: t('sf.tname.ph') });
  const paper = el('select', { className: 'select-cc', 'data-td-paper': '' }, ...papers.map((p, i) => el('option', { value: String(i) }, p.label)));
  const words = el('input', { type: 'text', className: 'bc-input', 'data-td-words': '', maxLength: 80, value: '' });
  const pick = el('select', { className: 'select-cc', 'data-td-field': '' }, el('option', { value: '' }, t('sf.d.ownwords')), ...FIELDS.map((k) => el('option', { value: k }, t('sf.d.f.' + k))));
  pick.addEventListener('change', () => { if (pick.value) words.value = '{{' + pick.value + '}}'; });
  const size = el('input', { type: 'text', className: 'bc-input bc-num', 'data-td-size': '', value: '3.5' });
  const hint = el('p', { className: 'bc-muted', 'data-td-hint': '' });
  const tools = {};
  const bar = el('div', { className: 'bc-lib-actions' });
  for (const k of ['rect', 'line', 'text', 'area']) {
    tools[k] = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-td-tool': k, onClick: () => { tool = k; mark(); } }, t('sf.d.' + k));
    bar.append(tools[k]);
  }
  bar.append(el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-td-border': '', onClick: () => { shapes.push({ k: 'rect', x0: 10, y0: 10, x1: pw - 10, y1: ph - 10, w: 0.5 }); render(); } }, t('sf.d.border')),
    el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-td-undo': '', onClick: () => { shapes.pop(); render(); } }, t('sf.d.undo')),
    el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-td-clear': '', onClick: () => { shapes = []; render(); } }, t('sf.d.clear')));
  function mark() {
    for (const [k, b] of Object.entries(tools)) b.setAttribute('aria-pressed', k === tool ? 'true' : 'false');
    hint.textContent = t('sf.d.hint.' + tool);
  }
  const mk = (tag, a) => { const e = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(a)) e.setAttribute(k, String(v)); return e; };
  function draw(svg, s, ghost) {
    const st = ghost ? { stroke: '#2563eb', 'stroke-dasharray': '2 1' } : { stroke: '#000' };
    if (s.k === 'rect' || s.k === 'area') svg.append(mk('rect', { x: Math.min(s.x0, s.x1), y: Math.min(s.y0, s.y1), width: Math.abs(s.x1 - s.x0), height: Math.abs(s.y1 - s.y0), fill: s.k === 'area' ? 'rgba(37,99,235,.06)' : 'none', ...(s.k === 'area' ? { stroke: '#2563eb', 'stroke-dasharray': '4 2' } : st), 'stroke-width': s.w || 0.35 }));
    else if (s.k === 'line') svg.append(mk('line', { x1: s.x0, y1: s.y0, x2: s.x1, y2: s.y1, ...st, 'stroke-width': s.w || 0.35 }));
    else if (s.k === 'text') { const e = mk('text', { x: s.x0, y: s.y0, 'font-size': s.size || 3.5, fill: /\{\{/.test(s.s) ? '#b45309' : '#000', 'font-family': 'Helvetica, Arial, sans-serif' }); e.textContent = s.s; svg.append(e); }   // i18n-ignore: a CSS font stack
  }
  let svg = null;
  function render() {
    svg = mk('svg', { viewBox: `0 0 ${pw} ${ph}`, width: '100%', style: 'display:block;touch-action:none;background:#fff;cursor:crosshair' });
    for (const s of shapes) draw(svg, s, false);
    stage.replaceChildren(svg);
    stage.style.maxWidth = 'calc(56vh * ' + (pw / ph).toFixed(4) + ')';
    svg.addEventListener('pointerdown', down);
  }
  const at = (e) => { const b = svg.getBoundingClientRect(), g = e.shiftKey ? 5 : 1; return [Math.round(((e.clientX - b.left) / b.width) * pw / g) * g, Math.round(((e.clientY - b.top) / b.height) * ph / g) * g]; };
  function down(e) {
    e.preventDefault();
    const [x, y] = at(e);
    if (tool === 'text') {
      const s = words.value.trim();
      if (!s) { hint.textContent = t('sf.d.nowords'); return; }
      const h = Number(String(size.value).replace(',', '.'));
      shapes.push({ k: 'text', x0: x, y0: y, s, size: h >= 1 && h <= 40 ? h : 3.5, bold: false });
      render();
      return;
    }
    draft = { k: tool, x0: x, y0: y, x1: x, y1: y };
    svg.setPointerCapture?.(e.pointerId);
    let ghost = null;   // the rubber band is drawn on top; the page's svg stays, so the pointer stays captured
    const move = (ev) => { const [qx, qy] = at(ev); draft.x1 = qx; draft.y1 = qy; if (tool === 'line' && !ev.altKey) { if (Math.abs(draft.y1 - draft.y0) <= 2) draft.y1 = draft.y0; if (Math.abs(draft.x1 - draft.x0) <= 2) draft.x1 = draft.x0; } ghost?.remove(); draw(svg, draft, true); ghost = svg.lastChild; };
    const up = () => {
      svg.removeEventListener('pointermove', move); svg.removeEventListener('pointerup', up); svg.removeEventListener('pointercancel', up);
      const d = draft; draft = null;
      if (d && (d.x0 !== d.x1 || d.y0 !== d.y1)) {
        if (d.k === 'area') shapes = shapes.filter((s) => s.k !== 'area');   // one drawing area
        shapes.push(d);
      }
      render();
    };
    svg.addEventListener('pointermove', move); svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up);
  }
  paper.addEventListener('change', () => { [pw, ph] = papers[Number(paper.value)].size; shapes = []; render(); });
  mark(); render();
  dialog({ 'data-td-dialog': '' }, t('sf.draw.title'),
    [el('p', { className: 'bc-muted' }, t('sf.d.lede')), el('div', { className: 'bc-sh-head' }, field(t('sf.name'), name), field(t('sf.d.paper'), paper)), bar,
      el('div', { className: 'bc-sh-head' }, field(t('sf.d.field'), pick), field(t('sf.d.words'), words), field(t('sf.d.size'), size)), hint, stage],
    [btn('save', t('sf.d.save'), { 'data-td-save': '' }, true), btn('cancel', t('model.sh.close'), { 'data-td-close': '' })],
    (what, e) => {
      if (what !== 'save') return null;
      if (!shapes.some((s) => s.k === 'line' || s.k === 'rect')) return t('sf.d.empty');
      const svgText = designSvg(shapes, { w: pw, h: ph });
      if (!parseTitleSvg(svgText).ok) return t('model.err.sf.svg');
      const why = save(name.value, svgText);
      if (why) { e.preventDefault(); return why; }
      return null;
    });
}
