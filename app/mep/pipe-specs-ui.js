/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/pipe-specs-ui.js — the Pipe specs manager (0.9.1, suggestion #1499), through model-ui.js `extend()`; mep-ui.js mounts it.
 *
 *   Pipe specs…  [data-pspec-open] (Build ribbon, and beside the size list on the Pipe tool's bar)
 *     the model's own piping specifications: New, Duplicate, Delete, Add a starter spec (mep/pipe-specs-data.js: tables from
 *     fetched supplier pages, marked "check against your project standard"), Import (.json or .csv), Paste rows (from a
 *     spreadsheet: Size, DN, OD, Wall, ID …), Export (.json, .csv). The selected spec is edited on the right: name, standard,
 *     material, joint, the services that start their runs in it, colour, roughness (for the pressure-drop calculation),
 *     default insulation, how its elbows are drawn, whether it has tees and reducers, and one row per size (millimetres).
 *     Save writes every spec into the model as ONE undo step (mep/pipe-specs-model.js saveSpecs); a spec or a size that a run
 *     is drawn in cannot be deleted. A run is put in a spec with the Material list (bar and Properties): the size list then
 *     offers only that spec's sizes.
 * Test hook: window.bimcraftPipeSpecs = { open(), state() }.
 */
import { modelSpecs, systemSpecs, cleanSpec, newSpec, duplicateSpec, specToJson, specsToJson, specsFromJson, specToCsv, specFromCsv, lengthMm, specSlug, JOINTS, SPEC_LIMITS } from './pipe-specs.js';
import { STARTER_SPECS, starterSpec } from './pipe-specs-data.js';
import { saveSpecs, specUse, syncMepData } from './pipe-specs-model.js';
import { PIPE_SYSTEMS, systemLabel } from '../mep-model.js';
import { ModelWriter } from '../model-write.js';
import { el } from '../ui-util.js';

export function mountPipeSpecs(modelUi) {
  let A = null, ST = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const num = (v) => (v === null || v === undefined || v === '' ? '' : String(Math.round(v * 10000) / 10000));
  const errText = (c) => t(c.error || c.key || 'mep.spec.err.format', c.fill || {});

  function open() {
    if (!A.ed()) { A.host.status(t('mep.spec.err.nomodel'), true); return; }
    A.root.querySelector('[data-pspec-dialog]')?.remove();
    let use = new Map();
    try { const w = W(); syncMepData(w); use = specUse(w); } catch (e) { use = new Map(); }
    const S = ST = { specs: modelSpecs().map((s) => JSON.parse(JSON.stringify(s))), sys: systemSpecs(), sel: 0, use };
    const err = el('p', { className: 'bc-input-err', role: 'alert', 'data-pspec-err': '' });
    const say = (text, bad = true) => { err.textContent = text || ''; err.className = bad ? 'bc-input-err' : 'bc-sub'; };
    const list = el('ul', { className: 'bc-pspec-list', 'data-pspec-list': '', role: 'listbox', 'aria-label': t('mep.spec.title') });
    const pane = el('div', { className: 'bc-pspec-pane', 'data-pspec-pane': '' });
    const ids = () => S.specs.map((s) => s.id);
    const cur = () => S.specs[S.sel] || null;

    // ---- the editor's fields → the working copy (kept as typed; cleaned on Save) ----
    function pull() {
      const s = cur();
      if (!s || !pane.firstChild) return;
      const v = (k) => pane.querySelector('[data-pspec-f="' + k + '"]');
      s.name = v('name').value; s.standard = v('standard').value; s.material = v('material').value; s.joint = v('joint').value; s.note = v('note').value;
      s.colour = v('usecolour').checked ? v('colour').value : '';
      s.roughness = v('roughness').value.trim() === '' ? null : lengthMm(v('roughness').value, 'mm');
      s.insulation = v('insulation').value.trim() === '' ? 0 : lengthMm(v('insulation').value, 'mm');
      s.elbow = Number(v('elbow').value.replace(',', '.'));
      s.tees = v('tees').checked; s.reducers = v('reducers').checked;
      for (const k of Object.keys(S.sys)) if (S.sys[k] === s.id) delete S.sys[k];
      for (const c of pane.querySelectorAll('[data-pspec-sys]')) if (c.checked) S.sys[c.value] = s.id;
      s.sizes = [...pane.querySelectorAll('[data-pspec-row]')].map((tr) => {
        const c = (k) => tr.querySelector('[data-pspec-c="' + k + '"]').value.trim();
        return { name: c('name'), dn: c('dn') === '' ? null : Number(c('dn').replace(/^dn\s*/i, '').replace(',', '.')), od: lengthMm(c('od'), 'mm'), wall: c('wall') === '' ? NaN : lengthMm(c('wall'), 'mm'), id: c('id') === '' ? NaN : lengthMm(c('id'), 'mm'), pn: c('pn'), weight: c('weight') === '' ? null : Number(c('weight').replace(',', '.')) };
      }).filter((z) => z.name !== '' || Number.isFinite(z.od));
    }
    function sizeRow(z = {}) {
      const inp = (k, val, size, label) => el('input', { type: 'text', className: 'bc-input' + (k === 'name' || k === 'pn' ? '' : ' bc-num'), size, value: val, 'data-pspec-c': k, 'aria-label': label });
      const x = el('button', { type: 'button', className: 'bc-pspec-x', 'data-pspec-delrow': '', 'aria-label': t('mep.spec.row.remove'), title: t('mep.spec.row.remove') }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
      const od = inp('od', num(z.od), 7, t('mep.spec.c.od')), wall = inp('wall', num(z.wall), 6, t('mep.spec.c.wall')), id = inp('id', num(z.id), 7, t('mep.spec.c.id'));
      // typing OD or wall fills the inside diameter; typing the inside diameter fills the wall
      const calc = (from) => { const o = lengthMm(od.value, 'mm'), w = lengthMm(wall.value, 'mm'), i = lengthMm(id.value, 'mm'); if (from === 'id' && o > 0 && i > 0 && i < o) wall.value = num((o - i) / 2); else if (o > 0 && w > 0 && o - 2 * w > 0) id.value = num(o - 2 * w); };
      od.addEventListener('change', () => calc('od')); wall.addEventListener('change', () => calc('wall')); id.addEventListener('change', () => calc('id'));
      const tr = el('tr', { 'data-pspec-row': '' }, el('td', {}, inp('name', z.name || '', 8, t('mep.spec.c.size'))), el('td', {}, inp('dn', num(z.dn), 4, t('mep.spec.c.dn'))), el('td', {}, od), el('td', {}, wall), el('td', {}, id),
        el('td', {}, inp('pn', z.pn || '', 6, t('mep.spec.c.pn'))), el('td', {}, inp('weight', num(z.weight), 5, t('mep.spec.c.weight'))), el('td', {}, x));
      x.addEventListener('click', () => { const u = S.use.get(cur()?.id); if (u && u.sizes.has(tr.querySelector('[data-pspec-c="name"]').value.trim())) { say(t('mep.spec.err.sizeinuse', { name: cur().name, size: z.name })); return; } tr.remove(); });
      return tr;
    }
    function drawPane() {
      const s = cur();
      if (!s) { pane.replaceChildren(el('p', { className: 'bc-muted', 'data-pspec-empty': '' }, t('mep.spec.empty'))); return; }
      const f = (k, label, input, wide) => el('label', { className: 'bc-pspec-f' + (wide ? ' bc-pspec-wide' : '') }, el('span', {}, label), input);
      const txt = (k, val, size) => el('input', { type: 'text', className: 'bc-input', value: val ?? '', size, 'data-pspec-f': k });
      const chk = (k, on) => { const c = el('input', { type: 'checkbox', 'data-pspec-f': k }); c.checked = !!on; return c; };
      const colour = el('input', { type: 'color', value: s.colour || '#7a8794', 'data-pspec-f': 'colour', 'aria-label': t('mep.spec.f.colour') });
      const useColour = chk('usecolour', !!s.colour);
      colour.disabled = !s.colour;
      useColour.addEventListener('change', () => { colour.disabled = !useColour.checked; });
      const body = el('tbody', { 'data-pspec-rows': '' }, ...s.sizes.map(sizeRow));
      const addRow = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pspec-addrow': '' }, t('mep.spec.row.add'));
      addRow.addEventListener('click', () => { if (body.children.length >= SPEC_LIMITS.sizes) return; const tr = sizeRow(); body.append(tr); tr.querySelector('input').focus(); });
      const inUse = S.use.get(s.id);
      const head = (k, tip) => el('th', { scope: 'col', title: tip || null }, t('mep.spec.c.' + k));
      const kids = [
        s.check ? el('p', { className: 'bc-pspec-check', 'data-pspec-check': '' }, el('i', { className: 'bi bi-exclamation-triangle', 'aria-hidden': 'true' }), ' ', t(s.builtin ? 'mep.spec.check.builtin' : 'mep.spec.check')) : null,
        el('div', { className: 'bc-pspec-fields' },
          f('name', t('mep.spec.f.name'), txt('name', s.name, 28), true), f('standard', t('mep.spec.f.standard'), txt('standard', s.standard, 40), true),
          f('material', t('mep.spec.f.material'), txt('material', s.material, 20)),
          f('joint', t('mep.spec.f.joint'), el('select', { className: 'bc-mb-select', 'data-pspec-f': 'joint' }, ...JOINTS.map((j) => el('option', { value: j, selected: j === s.joint }, t('mep.spec.joint.' + j))))),
          f('roughness', t('mep.spec.f.roughness'), txt('roughness', num(s.roughness), 7)), f('insulation', t('mep.spec.f.insulation'), txt('insulation', s.insulation ? num(s.insulation) : '', 6)),
          f('elbow', t('mep.spec.f.elbow'), txt('elbow', num(s.elbow), 4)),
          el('label', { className: 'bc-pspec-f bc-pspec-inline' }, chk('tees', s.tees), el('span', {}, t('mep.spec.f.tees'))), el('label', { className: 'bc-pspec-f bc-pspec-inline' }, chk('reducers', s.reducers), el('span', {}, t('mep.spec.f.reducers'))),
          el('label', { className: 'bc-pspec-f bc-pspec-inline' }, useColour, el('span', {}, t('mep.spec.f.colour')), colour),
          f('note', t('mep.spec.f.note'), txt('note', s.note, 40), true)),
        el('fieldset', { className: 'bc-pspec-sys' }, el('legend', {}, t('mep.spec.f.services')),
          ...Object.keys(PIPE_SYSTEMS).map((k) => { const c = el('input', { type: 'checkbox', value: k, 'data-pspec-sys': '' }); c.checked = S.sys[k] === s.id; return el('label', {}, c, ' ', systemLabel('pipe', k)); })),
        s.source?.url ? el('p', { className: 'bc-sub bc-pspec-src', 'data-pspec-src': '' }, t('mep.spec.source', { date: s.source.fetched || '' }), ' ', el('a', { href: s.source.url, target: '_blank', rel: 'noopener noreferrer' }, s.source.url), s.source.url2 ? [' · ', el('a', { href: s.source.url2, target: '_blank', rel: 'noopener noreferrer' }, s.source.url2)] : null, s.source.edition ? [el('br'), s.source.edition] : null) : null,
        el('p', { className: 'bc-sub' }, t('mep.spec.mm'), inUse ? ' ' + t('mep.spec.inuse', { n: inUse.runs }) : ''),
        el('div', { className: 'bc-pspec-scroll' }, el('table', { className: 'bc-table bc-pspec-table', 'data-pspec-table': '' },
          el('thead', {}, el('tr', {}, head('size'), head('dn'), head('od'), head('wall'), head('id'), head('pn'), head('weight'), el('th', {}, ''))), body)),
        el('p', { className: 'bc-lib-actions' }, addRow)];
      pane.replaceChildren(...kids.filter(Boolean));
      // the list on the left follows the name as it is typed
      pane.querySelector('[data-pspec-f="name"]').addEventListener('input', (e) => { const n = list.querySelector('.bc-pspec-item.is-on .bc-pspec-name'); if (n) n.textContent = e.target.value || '—'; });
    }
    function drawList() {
      list.replaceChildren(...S.specs.map((s, i) => {
        const b = el('button', { type: 'button', className: 'bc-pspec-item' + (i === S.sel ? ' is-on' : ''), role: 'option', 'aria-selected': i === S.sel ? 'true' : 'false', 'data-pspec-item': s.id }, el('span', { className: 'bc-pspec-name' }, s.name || '—'), el('span', { className: 'bc-sub' }, t('mep.spec.sizes', { n: s.sizes.length })));
        b.addEventListener('click', () => { pull(); S.sel = i; draw(); });
        return el('li', {}, b);
      }));
    }
    const draw = () => { if (S.sel >= S.specs.length) S.sel = Math.max(0, S.specs.length - 1); drawList(); drawPane(); };
    const add = (spec) => { pull(); if (S.specs.length >= SPEC_LIMITS.specs) { say(t('mep.spec.err.manyspecs', { n: SPEC_LIMITS.specs })); return; } S.specs.push(spec); S.sel = S.specs.length - 1; say(''); draw(); };
    const withFreeId = (spec) => ({ ...spec, id: duplicateSpec(spec, ids(), '').id });

    // ---- the commands on the left ----
    const btn = (key, attr, fn, title) => { const b = el('button', { type: 'button', className: 'btn-line btn-sm-cc', [attr]: '', title: title || null }, t(key)); b.addEventListener('click', fn); return b; };
    const starter = el('select', { className: 'bc-mb-select', 'data-pspec-starter': '', 'aria-label': t('mep.spec.starter') }, el('option', { value: '' }, t('mep.spec.starter')), ...STARTER_SPECS.map((s) => el('option', { value: s.builtin }, s.name)));
    starter.addEventListener('change', () => { const raw = starterSpec(starter.value); starter.value = ''; if (!raw) return; const c = cleanSpec(raw); if (c.error) { say(errText(c)); return; } add(withFreeId(c.spec)); say(t('mep.spec.starter.added', { name: c.spec.name }), false); });
    const file = el('input', { type: 'file', accept: '.json,.csv,.txt,.tsv,application/json,text/csv', hidden: true, 'data-pspec-file': '' });
    const takeText = (text, name) => {
      const isJson = /^\s*[[{]/.test(text);
      if (isJson) { const r = specsFromJson(text); for (const s of r.specs) add(withFreeId(s)); say(r.errors.length ? r.errors.map((e) => (e.fill?.name ? e.fill.name + ': ' : '') + errText(e)).join(' ') : t('mep.spec.imported', { n: r.specs.length }), !!r.errors.length); return; }
      const r = specFromCsv(text, { unit: unitSel.value, name: String(name || '').replace(/\.[^.]+$/, '') });
      if (r.error) { say(errText(r)); return; }
      add(withFreeId(r.spec));
      say(t('mep.spec.imported.rows', { n: r.spec.sizes.length }) + (r.notes.length ? ' ' + r.notes.map((n) => t(n.key, n.fill)).join(' ') : ''), false);
    };
    file.addEventListener('change', async () => { const fl = file.files?.[0]; file.value = ''; if (!fl) return; if (fl.size > SPEC_LIMITS.bytes) { say(t('mep.spec.err.big')); return; } takeText(await fl.text(), fl.name); });
    const unitSel = el('select', { className: 'bc-mb-select', 'data-pspec-unit': '', 'aria-label': t('mep.spec.unit') }, el('option', { value: 'mm' }, t('mep.spec.unit.mm')), el('option', { value: 'in' }, t('mep.spec.unit.in')));
    const paste = el('textarea', { className: 'bc-input bc-pspec-paste', rows: 4, 'data-pspec-paste': '', placeholder: t('mep.spec.paste.hint'), 'aria-label': t('mep.spec.paste') });
    const pasteBox = el('div', { className: 'bc-pspec-pastebox', hidden: true }, paste, el('p', { className: 'bc-lib-actions' }, el('label', {}, el('span', { className: 'bc-sub' }, t('mep.spec.unit')), ' ', unitSel), btn('mep.spec.paste.go', 'data-pspec-pastego', () => { if (!paste.value.trim()) return; takeText(paste.value, t('mep.spec.pasted')); if (!err.classList.contains('bc-input-err')) { paste.value = ''; pasteBox.hidden = true; } })));
    const save = (text, name, type) => A.host.download(name, text, type);
    const side = el('div', { className: 'bc-pspec-side' }, list,
      el('p', { className: 'bc-lib-actions' }, btn('mep.spec.new', 'data-pspec-new', () => add(newSpec(t('mep.spec.newname'), ids()))),
        btn('mep.spec.duplicate', 'data-pspec-dup', () => { pull(); const s = cur(); if (s) add(duplicateSpec({ ...s, sizes: s.sizes.filter((z) => Number.isFinite(z.od)) }, ids(), t('mep.spec.copy'))); }),
        btn('mep.spec.delete', 'data-pspec-del', () => { const s = cur(); if (!s) return; const u = S.use.get(s.id); if (u) { say(t('mep.spec.err.inuse', { name: s.name, n: u.runs })); return; } for (const k of Object.keys(S.sys)) if (S.sys[k] === s.id) delete S.sys[k]; S.specs.splice(S.sel, 1); pane.replaceChildren(); say(''); draw(); })),
      el('p', { className: 'bc-lib-actions' }, starter),
      el('p', { className: 'bc-lib-actions' }, btn('mep.spec.import', 'data-pspec-import', () => file.click(), t('mep.spec.import.title')), btn('mep.spec.paste', 'data-pspec-pasteopen', () => { pasteBox.hidden = !pasteBox.hidden; if (!pasteBox.hidden) paste.focus(); }, t('mep.spec.paste.title'))),
      pasteBox,
      el('p', { className: 'bc-lib-actions' },
        btn('mep.spec.export.json', 'data-pspec-json', () => { pull(); const s = cur(); if (!s) return; const c = cleanSpec(s); if (c.error) { say(errText(c)); return; } save(specToJson(c.spec), c.spec.id + '.pipespec.json', 'application/json'); }, t('mep.spec.export.json.title')),
        btn('mep.spec.export.csv', 'data-pspec-csv', () => { pull(); const s = cur(); if (!s) return; const c = cleanSpec(s); if (c.error) { say(errText(c)); return; } save(specToCsv(c.spec), c.spec.id + '.pipespec.csv', 'text/csv'); }, t('mep.spec.export.csv.title')),
        btn('mep.spec.export.all', 'data-pspec-all', () => { pull(); const out = []; for (const s of S.specs) { const c = cleanSpec(s); if (c.error) { say((s.name || '') + ': ' + errText(c)); return; } out.push(c.spec); } if (out.length) save(specsToJson(out), 'pipe-specs.json', 'application/json'); }, t('mep.spec.export.all.title'))),
      file);
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide bc-pspec', 'aria-labelledby': 'bc-pspec-h', 'data-pspec-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-pspec-h' }, t('mep.spec.title')),
        el('p', { className: 'bc-muted' }, t('mep.spec.note')),
        el('div', { className: 'bc-pspec-cols' }, side, pane), err,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-pspec-save': '' }, t('mep.spec.save')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel', formnovalidate: true }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      pull();
      // a spec that is not in the model yet takes its id from the name it ends up with (one already saved keeps its id: runs name it)
      const known = new Set(modelSpecs().map((x) => x.id));
      for (const sp of S.specs) {
        if (known.has(sp.id)) continue;
        const others = S.specs.filter((x) => x !== sp).map((x) => x.id), base = specSlug(sp.name);
        let nid = base, k = 2;
        while (others.includes(nid)) nid = base.slice(0, 36) + '-' + k++;
        for (const key of Object.keys(S.sys)) if (S.sys[key] === sp.id) S.sys[key] = nid;
        sp.id = nid;
      }
      const out = [];
      for (let i = 0; i < S.specs.length; i++) {
        const c = cleanSpec(S.specs[i]);
        if (c.error) { e.preventDefault(); S.sel = i; draw(); say((S.specs[i].name ? S.specs[i].name + ': ' : '') + errText(c)); return; }
        out.push({ ...c.spec, id: S.specs[i].id });
      }
      // what the model would refuse is said here, with the dialog still open: a spec or a size a run is drawn in
      for (const [sid, u] of S.use) {
        const s = out.find((x) => x.id === sid), old = modelSpecs().find((x) => x.id === sid);
        if (!s) { e.preventDefault(); say(t('mep.spec.err.inuse', { name: old?.name || sid, n: u.runs })); return; }
        const gone = [...u.sizes].find((z) => !s.sizes.some((x) => x.name === z));
        if (gone !== undefined) { e.preventDefault(); S.sel = out.indexOf(s); draw(); say(t('mep.spec.err.sizeinuse', { name: s.name, size: gone })); return; }
      }
      A.commit(saveSpecs(out, S.sys), { label: t('mep.spec.title'), verb: t('model.verb.changed') });
      A.host.status(t('mep.spec.saved', { n: out.length }));
    });
    dlg.addEventListener('close', () => { dlg.remove(); ST = null; });
    A.root.append(dlg);
    draw();
    dlg.showModal();
  }

  A = modelUi.extend({ tools: [], refresh() { /* the specs in force follow the model through mep-model.js readRuns */ } });
  for (const b of A.root.querySelectorAll('[data-pspec-open]')) if (!b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => { const m = b.closest('details'); if (m) m.open = false; open(); }); }
  const api = { open, state: () => ST };
  if (typeof window !== 'undefined') window.bimcraftPipeSpecs = api;   // for tests
  return api;
}
