/* SPDX-License-Identifier: Apache-2.0 */
/**
 * type-pack-ui.js — type packs in the page (0.10 BK.97, session bk-content-10): Model bar › Data › Type packs [data-typepack-open].
 * The format and the rules are type-pack.js (JSON) and type-pack-ifc.js (IFC); docs/apps/bimcraft-type-packs.md describes the file.
 *
 *   mountTypePacks({ modelUi, t, status }) → { open() }
 *
 * The dialog [data-tp]:
 *   Save: the wall types to put in [data-tp-type=<key>] (the project's own ticked, the starters not), the families [data-tp-family=<key>],
 *     a name [data-tp-name], Save as a pack [data-tp-save-json] (.cctypes.json) and Save as IFC [data-tp-save-ifc] (.ifc).
 *   Open: Open a pack or an IFC file [data-tp-open] → what it holds [data-tp-found] (types with their thickness and layers, materials,
 *     families; a type read from another program's file is marked as guessed; what was left out is listed), what to do with a type the
 *     project already has [data-tp-conflict], Add to the project [data-tp-import] → what was done [data-tp-result]. One undo step.
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { IfcModel } from './ifc-model.js';
import { fmtLen } from './model-units.js';
import { checkContent } from './lod/scale.js';   // 0.10 BK.93
import { wallTypeChoices, makeTypePack, readTypePack, importTypePack } from './type-pack.js';
import { typePackScratch } from './type-pack-ifc.js';
import { typeToLibraryItem, typeFromLibraryItem } from './type-library-item.js';
import { readFamilies } from './family-ops.js';

export function mountTypePacks({ modelUi, t, status }) {
  let A = null, scratchP = null;
  const T = (k, v) => t('typepack.' + k, v);
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const scratch = () => (scratchP ||= typePackScratch(A.ed().W, IfcModel));
  const fileName = (s) => String(s || '').replace(/[\\/:*?"<>|]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80) || T('name.default');
  const L = (mm) => fmtLen(mm, A.units());

  function open() {
    const w = W();
    if (!w) { status(T('err.nomodel'), true); return; }
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': T('title'), 'data-tp': '', style: 'max-height:92vh;overflow:auto' });
    const error = el('p', { className: 'bc-error', role: 'alert', 'data-tp-error': '' });
    // ---- save
    const choices = [...wallTypeChoices(w), ...(A.ask('elementTypeChoices') || [])];   // 0.10 BK.24 (bk-r3-types-10): floor, roof and ceiling types too (element-types-ui.js)
    let fams = [];
    try { fams = readFamilies(w).filter((f) => f.source === 'project' && f.fam && !f.fam.starter); } catch (e) { fams = []; }
    const typeBoxes = choices.map((c) => [c, el('input', { type: 'checkbox', checked: c.custom, 'data-tp-type': c.key })]);
    const famBoxes = fams.map((f) => [f, el('input', { type: 'checkbox', checked: false, 'data-tp-family': f.key })]);
    const name = el('input', { type: 'text', className: 'bc-input', maxLength: 120, placeholder: T('name.default'), 'data-tp-name': '', 'aria-label': T('name') });
    const build = () => {
      const keys = typeBoxes.filter(([, b]) => b.checked).map(([c]) => c.key), families = famBoxes.filter(([, b]) => b.checked).map(([f]) => f.key);
      if (!keys.length && !families.length) { error.textContent = T('err.nothing'); return null; }
      try { error.textContent = ''; return makeTypePack(W(), { keys, families: families.length ? families : null, name: name.value }); }
      catch (e) { error.textContent = e.key ? t(e.key, e.fill || {}) : e.message; return null; }
    };
    const saveJson = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-tp-save-json': '', title: T('save.json.title'), onClick: () => {
      const pack = build(); if (!pack) return;
      A.host.download(fileName(pack.name) + '.cctypes.json', new TextEncoder().encode(JSON.stringify(pack, null, 1) + '\n'), 'application/json');
      status(T('saved', { n: pack.types.length, f: pack.families?.length || 0 }));
    } }, T('save.json'));
    const saveIfc = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-tp-save-ifc': '', title: T('save.ifc.title'), onClick: async () => {
      const pack = build(); if (!pack) return;
      saveIfc.disabled = true;
      try { const bytes = await (await scratch()).toIfc(pack, { name: pack.name }); A.host.download(fileName(pack.name) + '.ifc', bytes, 'application/x-step'); status(T('saved', { n: pack.types.length, f: pack.families?.length || 0 })); }
      catch (e) { error.textContent = e.key ? t(e.key, e.fill || {}) : T('err.ifc', { why: e.message }); }
      saveIfc.disabled = false;
    } }, T('save.ifc'));
    // 0.10 BK.24 / BK.21: one ticked type as a Library item of the Types kind (type-library-item.js); a Library type item opens like a pack
    const saveItem = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-tp-save-item': '', title: t('typeitem.save.title'), onClick: () => {
      const keys = typeBoxes.filter(([, b]) => b.checked).map(([c]) => c.key);
      if (keys.length !== 1) { error.textContent = t('typeitem.err.one'); return; }
      try { error.textContent = ''; const item = typeToLibraryItem(W(), keys[0], { name: name.value }); A.host.download(fileName(item.name) + '.cctype.json', new TextEncoder().encode(JSON.stringify(item, null, 1) + '\n'), 'application/json'); status(t('typeitem.saved', { name: item.name })); }
      catch (e) { error.textContent = e.key ? t(e.key, e.fill || {}) : e.message; }
    } }, t('typeitem.save'));
    const typeList = el('ul', { className: 'bc-counts', 'data-tp-types': '' }, ...typeBoxes.map(([c, b]) => el('li', {}, el('label', {}, b, ' ' + c.name + (c.custom ? '' : ' ' + T('starter'))), el('span', { className: 'n' }, L(c.thickness)))));
    const famList = famBoxes.length ? el('ul', { className: 'bc-counts', 'data-tp-families': '' }, ...famBoxes.map(([f, b]) => el('li', {}, el('label', {}, b, ' ' + f.name)))) : null;

    // ---- open
    let found = null;
    const foundBox = el('div', { 'data-tp-found': '', hidden: true });
    const result = el('div', { 'data-tp-result': '', hidden: true, role: 'status' });
    const conflict = el('select', { className: 'bc-mb-select', 'data-tp-conflict': '', 'aria-label': T('conflict') }, ...['skip', 'copy', 'replace'].map((v) => el('option', { value: v }, T('conflict.' + v))));
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-tp-import': '', disabled: true, onClick: () => {
      if (!found) return;
      let why = null, out = null;
      const run = importTypePack(found.pack, { conflict: conflict.value });
      A.commit((ed) => { out = run(ed); return out; }, { label: T('label'), verb: t('model.verb.changed'), onError: (e, wtext) => { why = e.key && /^typepack\./.test(e.key) ? t(e.key, e.fill || {}) : wtext || e.message; } });
      if (why) { error.textContent = why; return; }
      const s = out?.summary;
      if (!s) { status(T('queued')); return; }
      const line = (key, list) => (list.length ? el('li', { 'data-tp-did': key, 'data-n': String(list.length) }, T('did.' + key, { n: list.length }) + ' ' + list.join(', ')) : null);
      result.replaceChildren(el('p', { className: 'bc-h' }, T('did')), el('ul', {}, line('added', s.added), line('copied', s.copied), line('replaced', s.replaced), line('skipped', s.skipped), line('inuse', s.inUse),
        line('materials', [...s.materials.added, ...s.materials.renamed]), line('families', s.families)));
      result.hidden = false; add.disabled = true;
      status(T('done', { n: s.added.length + s.copied.length + s.replaced.length }));
    } }, T('import'));
    const show = (r, fname) => {
      found = r;
      const p = r.pack;
      foundBox.replaceChildren(
        el('p', { className: 'bc-h' }, T('found', { file: fname, types: p.types.length, materials: p.materials.length, families: p.families?.length || 0 })),
        el('ul', { className: 'bc-counts' }, ...p.types.map((x) => el('li', { 'data-tp-found-type': x.recipe.key, 'data-guessed': x.guessed ? '1' : '0' },
          el('span', {}, x.recipe.name + (x.guessed ? ' ' + T('guessed') : '') + (x.classification ? ' · ' + Object.values(x.classification).map((c) => c.code).join(', ') : '')),
          el('span', { className: 'n' }, L(x.thickness) + ' · ' + T('layers', { n: x.recipe.layers.length }))))),
        p.types.some((x) => x.guessed) ? el('p', { className: 'bc-muted', 'data-tp-guessnote': '' }, T('guessed.note')) : null,
        (r.notes || []).length ? el('ul', { className: 'bc-muted', 'data-tp-notes': '' }, ...r.notes.map((n) => el('li', {}, t(n.key, n.fill || {})))) : null,
        el('label', { className: 'bc-dlg-field' }, T('conflict'), conflict));
      foundBox.hidden = false; result.hidden = true; add.disabled = !(p.types.length || p.families?.length);
    };
    const file = el('input', { type: 'file', accept: '.json,.ifc,application/json', hidden: true, 'data-tp-file': '' });
    file.addEventListener('change', async () => {
      const f = file.files?.[0]; file.value = '';
      if (!f) return;
      error.textContent = ''; found = null; add.disabled = true; foundBox.hidden = true;
      try {
        if (/\.ifc$/i.test(f.name)) {
          const r = await (await scratch()).fromIfc(new Uint8Array(await f.arrayBuffer()), { name: f.name.replace(/\.ifc$/i, '') });
          if (!r.pack.types.length && !r.pack.families?.length) { error.textContent = T('err.notypes'); if (r.notes.length) error.textContent += ' ' + r.notes.map((n) => t(n.key, n.fill || {})).join(' '); return; }
          const chk = readTypePack(r.pack);
          if (!chk.ok) { error.textContent = T('err.format', { why: chk.errors[0] }); return; }
          show({ pack: chk.pack, notes: r.notes }, f.name);
        } else {
          let textIn = await f.text();
          // a Library item of the Types kind carries a one-type pack: read that (type-library-item.js)
          try { const j = JSON.parse(textIn.replace(/^\ufeff/, '')); if (j && j.format === 'cadcraft-library-item') { const r = typeFromLibraryItem(j); if (!r.ok) { error.textContent = t('typeitem.err.format', { why: r.errors[0] }); return; } textIn = JSON.stringify(r.pack); } } catch (e) { /* not JSON: the pack check says so */ }
          const chk = readTypePack(textIn);
          if (!chk.ok) { error.textContent = T('err.format', { why: chk.errors[0] }); return; }
          let lodNotes = [];   // 0.10 BK.93 (bim-lod-10): a pack may say which LOD a milestone needs, never what a level means: a block that tries is named and ignored
          try { lodNotes = checkContent(JSON.parse(textIn.replace(/^\ufeff/, ''))).map((n) => ({ key: 'lod.content.note', fill: { text: n.text } })); } catch (e) { /* not JSON the checker reads */ }
          show({ pack: chk.pack, notes: lodNotes }, f.name);
        }
      } catch (e) { error.textContent = T('err.read', { why: e.message }); }
    });
    dlg.append(el('h2', { className: 'bc-h' }, T('title')), el('p', {}, T('intro')),
      el('section', { className: 'bc-set', 'data-tp-savepart': '' }, el('p', { className: 'bc-h' }, T('save')), typeList, famList ? el('p', { className: 'bc-muted' }, T('families')) : null, famList,
        el('label', { className: 'bc-dlg-field' }, T('name'), name), el('p', { className: 'bc-lib-actions' }, saveJson, saveIfc, saveItem)),
      el('section', { className: 'bc-set', 'data-tp-openpart': '' }, el('p', { className: 'bc-h' }, T('open')), file,
        el('p', { className: 'bc-lib-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-tp-open': '', onClick: () => file.click() }, T('open.file'))),
        foundBox, el('p', { className: 'bc-lib-actions' }, add), result),
      error, el('p', { className: 'bc-lib-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-tp-close': '', onClick: () => dlg.close() }, T('close'))));
    dlg.addEventListener('close', () => dlg.remove());
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    A.root.append(dlg); dlg.showModal();
  }

  A = modelUi.extend({ openTypePacks: () => open() });
  A.root.querySelector('[data-typepack-open]')?.addEventListener('click', () => open());
  return { open };
}
