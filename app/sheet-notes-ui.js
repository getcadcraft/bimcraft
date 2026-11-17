/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet-notes-ui.js: the "Standard notes" picker of the sheet dialog (booklet row BK.157, session bk-r3-regs; rules and layout in
 * sheet-notes.js). Choose a regulation pack that carries notes, filter by discipline, tick the notes, Place on sheet: the sheet keeps them with
 * the pack and clause they came from (D.notes) and the preview redraws. The packs come from the regs add-on (window.ccRegsLocal); without it
 * the panel says so. Notes of a pack nobody has confirmed are marked unverified here and on the printed sheet.
 *
 *   mountNotesPicker({ D, draw, status, icon }) → { button, panel }      D = the sheet being edited (D.notes is read and written)
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { pickNotes, cleanSheetNotes } from './sheet-notes.js';

const DISCIPLINES = ['general', 'architectural', 'structural', 'civil', 'mechanical', 'electrical', 'plumbing', 'fire', 'accessibility', 'energy', 'landscape'];

export function mountNotesPicker({ D, draw, status, icon }) {
  const L = () => { try { return window.ccRegsLocal || null; } catch (e) { return null; } };
  const panel = el('div', { className: 'bc-sh-notes', 'data-sh-notes-panel': '', hidden: true });
  const button = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-notes': '', title: t('sheet.notes.tip') }, icon('bi-card-text'), ' ' + t('sheet.notes.btn'));
  let packId = '', discipline = '';
  const chosen = new Set((D.notes?.items || []).map((x) => x.id));
  function paint() {
    const api = L(), packs = api ? api.list().filter((x) => x.has.includes('notes')) : [];
    if (!api) { panel.replaceChildren(el('p', { className: 'bc-note', 'data-sh-notes-needregs': '' }, t('sheet.notes.needregs'))); return; }
    if (!packs.length) { panel.replaceChildren(el('p', { className: 'bc-note' }, t('sheet.notes.nopacks'))); return; }
    if (!packs.some((p) => p.id === packId)) packId = D.notes?.items?.[0]?.pack && packs.some((p) => p.id === D.notes.items[0].pack) ? D.notes.items[0].pack : packs[0].id;
    const info = packs.find((p) => p.id === packId), offered = api.notes(packId, {}), have = DISCIPLINES.filter((d) => offered.some((n) => n.discipline === d));
    const shown = offered.filter((n) => !discipline || n.discipline === discipline);
    const pack = el('select', { className: 'select-cc', 'data-sh-notes-pack': '', 'aria-label': t('sheet.notes.pack') }, ...packs.map((p) => el('option', { value: p.id, selected: p.id === packId }, p.name)));
    pack.addEventListener('change', () => { packId = pack.value; discipline = ''; chosen.clear(); paint(); });
    const disc = el('select', { className: 'select-cc', 'data-sh-notes-disc': '', 'aria-label': t('sheet.notes.disc') }, el('option', { value: '' }, t('sheet.notes.disc.all')), ...have.map((d) => el('option', { value: d, selected: d === discipline }, t('sheet.notes.d.' + d))));
    disc.addEventListener('change', () => { discipline = disc.value; paint(); });
    const place = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-notes-place': '' }, t('sheet.notes.place'));
    place.addEventListener('click', () => {
      const picked = pickNotes(offered, [...chosen]);
      if (!picked.length) { status(t('sheet.notes.none'), true); return; }
      D.notes = cleanSheetNotes({ title: t('sheet.notes.title'), items: picked });
      draw(); status(t('sheet.notes.placed', { n: D.notes.items.length })); paint();
    });
    const remove = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sh-notes-remove': '', hidden: !D.notes }, t('sheet.notes.remove'));
    remove.addEventListener('click', () => { D.notes = null; chosen.clear(); draw(); paint(); });
    panel.replaceChildren(
      el('p', { className: 'bc-muted' }, t('sheet.notes.intro')),
      el('p', { className: 'bc-note', 'data-sh-notes-state': info.review.state }, t('sheet.notes.state.' + info.review.state)),
      el('div', { className: 'bc-sh-head' }, pack, disc),
      el('ul', { className: 'bc-checks-res', 'data-sh-notes-list': '' }, ...shown.map((n) => {
        const cb = el('input', { type: 'checkbox', 'data-sh-note': n.id, checked: chosen.has(n.id), 'aria-label': n.title });
        cb.addEventListener('change', () => { if (cb.checked) chosen.add(n.id); else chosen.delete(n.id); });
        return el('li', {}, el('label', {}, cb, ' ', el('strong', {}, n.title), ' ', el('span', { className: 'bc-muted' }, '[' + n.clause + ']')), el('div', { className: 'bc-muted' }, n.text));
      })),
      el('div', { className: 'bc-find-row' }, place, remove));
  }
  button.addEventListener('click', () => { panel.hidden = !panel.hidden; if (!panel.hidden) paint(); });
  return { button, panel };
}
