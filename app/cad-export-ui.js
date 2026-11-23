/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cad-export-ui.js — the small dialog that asks which CAD file to save (SU.1994): DWG in one of six AutoCAD versions or DXF 2000,
 * with what goes in it. model-ui.js (the plan's Save as DWG or DXF) and res-ui.js (the drawing set's) open it.
 *
 *   askCadFormat(root, { title, note }) → Promise<format key (plan-cad.js CAD_FORMATS) | null>
 *
 * The last choice is remembered in this browser (a convenience only: DWG 2018 when nothing is kept).
 */
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { CAD_FORMATS } from './plan-cad.js';

const KEY = 'bimcraft.cad.format';
const lastFormat = () => { try { const v = localStorage.getItem(KEY); return CAD_FORMATS[v] ? v : 'dwg'; } catch (e) { return 'dwg'; } };

export function askCadFormat(root, { title = '', note = '' } = {}) {
  return new Promise((done) => {
    const sel = el('select', { className: 'bc-mb-select bc-cad-format', 'data-cad-format': '', 'aria-label': t('cad.format') },
      ...Object.entries(CAD_FORMATS).map(([k, f]) => el('option', { value: k, selected: k === lastFormat() }, f.label)));
    let answer = null;
    const dlg = el('dialog', { className: 'bc-dialog bc-cad-dlg', 'data-cad-dlg': '', 'aria-labelledby': 'bc-cad-h' },
      el('h2', { id: 'bc-cad-h', className: 'bc-h' }, title),
      el('label', { className: 'bc-cad-field' }, el('span', {}, t('cad.format')), sel),
      note ? el('p', { className: 'bc-muted', 'data-cad-note': '' }, note) : null,
      el('div', { className: 'bc-cad-actions' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-cad-save': '', onClick: () => { answer = sel.value; try { localStorage.setItem(KEY, answer); } catch (e) { /* this tab only */ } dlg.close(); } },
          el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ' + t('cad.save')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cad-cancel': '', onClick: () => dlg.close() }, t('cad.cancel'))));
    dlg.addEventListener('keydown', (e) => e.stopPropagation());   // the app's keys stay out while it is open
    dlg.addEventListener('close', () => { dlg.remove(); done(answer); });
    root.append(dlg);
    dlg.showModal();
    sel.focus();
  });
}
