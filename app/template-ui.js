/* SPDX-License-Identifier: Apache-2.0 */
/**
 * template-ui.js — Save as template and New from template on the page (0.9 D8.12-D, session `bim-views-09`). bimcraft.js mounts it.
 *   Save as template…  [data-tpl-save] (beside Save, also the command file.saveTemplate): dialog [data-tpl-dialog] — name [data-tpl-name],
 *                      "Also download the file" [data-tpl-download], "Start new models from it" [data-tpl-default] (the working style's
 *                      default template, D8.12); kept in this browser (template-store.js)
 *   New building       askNewBuilding adds "Start from" [data-new-from]: a blank building | your templates | a template file…
 *                      ([data-new-tplfile]); Remove [data-new-tplremove]. The working style decides which is picked first.
 *   Team templates     (D8.12-D, bim-core-11): signed in (Studio's device sign-in or the tab's Library sign-in) and on a team, the dialog
 *                      offers "Share it with my team" [data-tpl-team] + a team [data-tpl-teampick], and Start from lists the team's
 *                      templates [data-new-teamtpl] with who shared them (team-templates.js; the TeamShared store). Signed out: as before.
 *   mountTemplates(o) → { saveDialog(), startField(), build(choice, name) → { bytes, style, from } | null }
 */
import { templateBytes, newFromTemplate } from './project-template.js';
import { listTemplates, getTemplate, putTemplate, removeTemplate } from './template-store.js';
import { readStyle, setOne, CHOICES } from './work-style.js';
import { kitItem } from './libitem.js';   // 0.10 BK.98: a template as a Library item file
import { teamTemplates, teamValue, parseTeamValue } from './team-templates.js';   // D8.12-D: team templates (bim-core-11)

export function mountTemplates({ el, t, status, WebIFC, IfcModel, currentBytes, fileName, download, team = teamTemplates() }) {
  async function saveDialog() {
    const bytes = currentBytes();
    if (!bytes) { status(t('model.needs.ifc'), true); return; }
    const base = String(fileName() || '').replace(/\.ifc$/i, '').replace(/ \(edited\)$/, '') || t('new.default.name');
    const nm = el('input', { type: 'text', className: 'bc-input', 'data-tpl-name': '', value: base, maxLength: 80, required: true });
    const dl = el('input', { type: 'checkbox', 'data-tpl-download': '' });
    const def = el('input', { type: 'checkbox', 'data-tpl-default': '' });
    // 0.10 BK.98: share it: a format-1 Library item file (kind kit), uploaded at /library/upload like any item (review, licence, attestation)
    const share = el('input', { type: 'checkbox', 'data-tpl-share': '' });
    const shVer = el('input', { type: 'text', className: 'bc-input', value: '0.1.0', maxLength: 20, 'data-tpl-version': '' });
    const shSum = el('input', { type: 'text', className: 'bc-input', maxLength: 300, 'data-tpl-summary': '' });
    const shBox = el('div', { 'data-tpl-sharebox': '', hidden: true }, el('label', { className: 'bc-dlg-field' }, el('span', {}, t('tpl.share.summary')), shSum),
      el('label', { className: 'bc-dlg-field' }, el('span', {}, t('tpl.share.version')), shVer), el('p', { className: 'bc-muted' }, t('tpl.share.note')));
    share.addEventListener('change', () => { shBox.hidden = !share.checked; });
    // D8.12-D: share with a team, shown only once the account says which teams the person is on
    const tShare = el('input', { type: 'checkbox', 'data-tpl-team': '' });
    const tPick = el('select', { className: 'select-cc', 'data-tpl-teampick': '' });
    const tBox = el('div', { 'data-tpl-teambox': '', hidden: true }, el('p', {}, el('label', {}, tShare, ' ', t('tpl.team'))),
      el('label', { className: 'bc-dlg-field', hidden: true, 'data-tpl-teamfield': '' }, el('span', {}, t('tpl.team.pick')), tPick), el('p', { className: 'bc-muted' }, t('tpl.team.note')));
    let teams = [];
    if (team && team.available()) team.list().then((r) => {
      teams = r.teams || [];
      if (!teams.length) return;
      tPick.replaceChildren(...teams.map((x, i) => el('option', { value: String(i) }, x.name)));
      tBox.hidden = false;
      tBox.querySelector('[data-tpl-teamfield]').hidden = teams.length < 2;
    }).catch(() => {});
    const err = el('p', { className: 'bc-input-err', role: 'alert' });
    const dlg = el('dialog', { className: 'bc-dialog', 'data-tpl-dialog': '', 'aria-labelledby': 'bc-tpl-h' },
      el('form', { method: 'dialog' }, el('h2', { className: 'bc-h', id: 'bc-tpl-h' }, t('tpl.save.title')), el('p', {}, t('tpl.save.lede')),
        el('label', { className: 'bc-dlg-field' }, el('span', {}, t('tpl.name')), nm),
        el('p', {}, el('label', {}, dl, ' ', t('tpl.download'))), el('p', {}, el('label', {}, def, ' ', t('tpl.default'))),
        el('p', {}, el('label', {}, share, ' ', t('tpl.share'))), shBox, tBox,
        el('p', { className: 'bc-muted' }, t('tpl.keeps')), err,
        el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-tpl-ok': '' }, t('tpl.save')), el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('dialog.cancel')))));
    const done = new Promise((ok) => dlg.addEventListener('close', () => { dlg.remove(); ok(dlg.returnValue); }));
    dlg.querySelector('form').addEventListener('submit', (e) => { if (e.submitter?.value === 'ok' && !nm.value.trim()) { e.preventDefault(); err.textContent = t('model.err.tpl.name'); } });
    document.body.append(dlg);
    dlg.showModal();
    if ((await done) !== 'ok') return;
    const name = nm.value.trim();
    status(t('tpl.making'));
    try {
      const tb = await templateBytes(bytes, { WebIFC, IfcModel, name, style: readStyle() });
      const id = await putTemplate({ name, bytes: tb });
      if (def.checked) { setOne('template', id); setOne('start', 'template'); }
      let sharedMsg = null;
      if (tShare.checked && teams.length) {
        const to = teams[Number(tPick.value) || 0];
        const r = await team.share({ owner: to.owner, team: to.team, name, bytes: tb });
        if (!r.ok) { status(t('tpl.team.err', { why: r.message }), true); return; }
        sharedMsg = t('tpl.team.shared', { name, team: to.name });
      }
      if (share.checked) {
        const r = kitItem({ type: 'project-template', name, app: 'bimcraft', summary: shSum.value.trim(), ifcText: new TextDecoder().decode(tb), version: shVer.value.trim() || '0.1.0' });
        if (!r.ok) status(t('tpl.share.err', { why: r.errors[0] }), true);
        else { const f = name.replace(/[\\/:*?"<>|]+/g, '-') + ' (Library template).json'; download(f, new TextEncoder().encode(JSON.stringify(r.item, null, 1) + '\n'), 'application/json'); status(t('tpl.share.saved', { file: f })); return; }   // i18n-ignore: a file name
      }
      if (dl.checked) download(name.replace(/[\\/:*?"<>|]+/g, '-') + ' (template).ifc', tb, 'application/x-step');   // i18n-ignore: a file name
      status(sharedMsg || t('tpl.saved', { name, kb: Math.max(1, Math.round(tb.length / 1024)) }));
    } catch (e) { status(e.key ? t(e.key) : String(e.message || e), true); }
  }
  /** The "Start from" field of the New building dialog, and how to tell what was picked. */
  async function startField(onChange) {
    let list = [], shared = [];
    try { list = await listTemplates(); } catch (e) { list = []; }
    try { shared = team && team.available() ? (await team.list()).items || [] : []; } catch (e) { shared = []; }
    const st = readStyle();
    const mine = list.map((x) => el('option', { value: x.id }, x.name));
    const theirs = shared.map((x) => el('option', { value: teamValue(x), 'data-new-teamtpl': '' }, t('new.from.teamitem', { name: x.name, by: x.by, team: x.team_name })));
    const sel = el('select', { className: 'select-cc', 'data-new-from': '' }, el('option', { value: '' }, t('new.from.blank')),
      ...(theirs.length ? [...(mine.length ? [el('optgroup', { label: t('new.from.mine') }, ...mine)] : []), el('optgroup', { label: t('new.from.team') }, ...theirs)] : mine),
      el('option', { value: '@file' }, t('new.from.file')));
    sel.value = st.start === 'template' && list.length ? (list.some((x) => x.id === st.template) ? st.template : list[0].id) : '';
    const file = el('input', { type: 'file', accept: '.ifc', hidden: true, 'data-new-tplfile': '' });
    const note = el('span', { className: 'bc-sub', 'data-new-fromnote': '' });
    const rm = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-new-tplremove': '', hidden: true }, t('new.from.remove'));
    let picked = null;
    const sync = () => {
      rm.hidden = !sel.value || sel.value === '@file' || !!parseTeamValue(sel.value);
      note.textContent = sel.value === '@file' ? (picked ? picked.name : t('new.from.pick')) : '';
      onChange?.(!!sel.value);
    };
    sel.addEventListener('change', () => { if (sel.value === '@file') file.click(); sync(); });
    file.addEventListener('change', () => { picked = file.files[0] || null; sync(); });
    rm.addEventListener('click', async () => {
      const id = sel.value, name = sel.selectedOptions[0]?.textContent || '';
      await removeTemplate(id);
      sel.querySelector('option[value="' + CSS.escape(id) + '"]')?.remove();
      if (readStyle().template === id) setOne('template', '');
      sel.value = ''; sync();
      status(t('new.from.removed', { name }));
    });
    sync();
    const row = el('label', { className: 'bc-new-field' }, el('span', {}, t('new.from')), sel, note, rm, file);
    return { row, choice: () => (sel.value === '@file' ? (picked ? { file: picked } : { missing: true }) : parseTeamValue(sel.value) ? { team: parseTeamValue(sel.value) } : sel.value ? { id: sel.value } : null) };
  }
  /** A new model from the picked template: its bytes, and the working style it carries. */
  async function build(choice, name) {
    let bytes = null;
    if (choice.file) bytes = new Uint8Array(await choice.file.arrayBuffer());
    else if (choice.team) { try { bytes = await team.bytes(choice.team); } catch (e) { status(t('new.from.teamgone', { why: String(e.message || e) }), true); return null; } }
    else { const row = await getTemplate(choice.id); if (row) bytes = new Uint8Array(row.bytes); }
    if (!bytes) return null;
    const made = await newFromTemplate(bytes, { WebIFC, IfcModel, name });
    if (made.style) for (const k of Object.keys(CHOICES)) if (made.style[k]) setOne(k, made.style[k]);
    return made;
  }
  return { saveDialog, startField, build };
}
