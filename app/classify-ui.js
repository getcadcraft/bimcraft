/* SPDX-License-Identifier: Apache-2.0 */
/**
 * classify-ui.js — classification codes in the page (0.10 BK.94, session bk-content-10). The rules are ./classify/classify.js, the
 * file side classify-model.js / classify-ops.js; this is only the page.
 *
 *   mountClassify({ modelUi, t, status }) → { decorate(container, ids), openProject(), packs() }
 *
 * 1. Properties › Classification [data-cls]: for each system the project uses (all three while none is chosen) a code box
 *    [data-cls-code=<system>] with the title beside it [data-cls-title], where the code comes from [data-cls-from] (this element, its
 *    type, the project default) and, when a code list is loaded, matches to pick from [data-cls-hits]. "Applies to" [data-cls-target]:
 *    this element or its type (every element of the type). A code can always be typed, list or no list. Codes of any other system the
 *    file carries are shown, not edited [data-cls-others].
 * 2. Model bar › Data › Classification [data-cls-open] → the project's dialog [data-cls-project]: which systems the project uses
 *    [data-cls-use=<system>], what code list each has and under what licence, Load a table (CSV) [data-cls-load=<system>] for an
 *    office's own licensed table (kept in this browser only: classify.packs in localStorage), default codes by class
 *    [data-cls-defaults], codes in the schedules [data-cls-schedules].
 * 3. Schedules: one column per system in use on doors, windows, walls by type and rooms when the project says so.
 */
import { el } from './ui-util.js';
import { ModelWriter } from './model-write.js';
import { val } from './ifc-util.js';
import { SYSTEMS, systemById, readPack, packFromCsv, packIndex, codeLooksRight, readDefaults, cleanCode } from './classify/classify.js';
import { classificationIndex, codesOf, readProjectClassification, effectiveCodes } from './classify-model.js';
import { setClassification, setProjectClassification } from './classify-ops.js';
import { addClassificationColumns } from './classify-schedule.js';

const STORE = 'bimcraft.classify.packs';
const DATA = new URL('./classify/data/', import.meta.url);

export function mountClassify({ modelUi, t, status }) {
  let A = null;
  const T = (k, v) => t('classify.' + k, v);
  const W = () => (A.ed() ? new ModelWriter(A.ed().W, A.ed().api, A.ed().mid) : null);
  const sysName = (id) => systemById(id)?.name || id;

  // ---------------------------------------------------------------------------------------------- the code lists (data, loaded when needed)
  const P = { bundled: [], own: [], defaults: {}, index: packIndex([]), loading: null, loaded: false, catalogue: null };
  const readOwn = () => { try { const j = JSON.parse(localStorage.getItem(STORE) || '[]'); return (Array.isArray(j) ? j : []).map((p) => readPack(p)).filter((r) => r.ok).map((r) => r.pack); } catch (e) { return []; } };
  const writeOwn = () => { try { localStorage.setItem(STORE, JSON.stringify(P.own)); return true; } catch (e) { return false; } };
  const reindex = () => { P.index = packIndex([...P.own, ...P.bundled]); };   // an office's own table is read first
  P.own = readOwn(); reindex();
  const getJson = async (name) => { const r = await fetch(new URL(name, DATA)); if (!r.ok) throw new Error(name + ' ' + r.status); return r.json(); };
  /** The bundled tables: the catalogue first (small), then the tables themselves. Loaded once, on first need. */
  function loadBundled() {
    if (P.loading) return P.loading;
    P.loading = (async () => {
      try {
        P.catalogue = await getJson('index.json');
        const got = await Promise.all((P.catalogue.packs || []).map((p) => getJson(p.file).then(readPack).catch(() => ({ ok: false }))));
        P.bundled = got.filter((r) => r.ok).map((r) => r.pack);
        for (const s of SYSTEMS) if (s.bundled) { try { const d = readDefaults(await getJson('defaults-' + s.id + '.json')); if (d) P.defaults[s.id] = d; } catch (e) { /* no defaults for it */ } }
      } catch (e) { P.catalogue = P.catalogue || { packs: [] }; }
      P.loaded = true; reindex();
      if (last.container?.isConnected && last.container.querySelector('[data-cls]')) decorate(last.container, last.ids);
    })();
    return P.loading;
  }

  // ---------------------------------------------------------------------------------------------- Properties
  const last = { container: null, ids: [] };
  let userOpen = null;
  function decorate(container, ids) {
    last.container = container; last.ids = ids;
    container.querySelector('[data-cls]')?.remove();
    const w = W();
    if (!w || !ids || !ids.length) return;
    let rec, ix, all;
    try { rec = readProjectClassification(w); ix = classificationIndex(w); all = ids.map((id) => ({ id, guid: val(w.api.GetLine(w.mid, id, false)?.GlobalId), c: codesOf(w, id, ix) })).filter((x) => x.guid); }
    catch (e) { return; }
    if (!all.length) return;
    if (!P.loading) loadBundled();
    const systems = rec.systems.length ? rec.systems : SYSTEMS.map((s) => s.id);
    const hasType = all.some((x) => x.c.typeId);
    const target = el('select', { className: 'bc-mb-select', 'data-cls-target': '', 'aria-label': T('target') },
      el('option', { value: 'element' }, T(all.length > 1 ? 'target.elements' : 'target.element')), ...(hasType ? [el('option', { value: 'type' }, T('target.type'))] : []));
    const rows = [];
    for (const sys of systems) {
      const eff = all.map((x) => x.c.effective[sys] || null);
      const same = eff.every((e) => (e?.code || '') === (eff[0]?.code || ''));
      const cur = same ? eff[0] : null;
      const input = el('input', { type: 'text', className: 'bc-input', value: cur?.code || '', maxLength: 60, placeholder: same ? systemById(sys).example : T('varies'), autocomplete: 'off', spellcheck: false, 'data-cls-code': sys, 'aria-label': T('code.of', { system: sysName(sys) }) });
      const title = el('span', { className: 'bc-sub', 'data-cls-title': sys }, cur?.title || P.index.find(sys, cur?.code)?.title || '');
      const from = el('span', { className: 'bc-muted', 'data-cls-from': sys, 'data-from': cur?.from || '' }, cur ? T('from.' + cur.from) : (same ? '' : T('varies')));
      const hits = el('ul', { className: 'bc-counts', 'data-cls-hits': sys, hidden: true });
      const hint = el('p', { className: 'bc-muted', 'data-cls-hint': sys, hidden: true });
      const apply = (code, ttl) => {
        code = cleanCode(code);
        const where = target.value === 'type' ? 'type' : 'element';
        const known = P.index.find(sys, code);
        let why = null;
        A.commit(setClassification(all.map((x) => x.guid), { system: sys, code, title: ttl ?? known?.title ?? '', target: where }), { label: T('label'), verb: t('model.verb.changed'), onError: (e, wtext) => { why = /^classify\./.test(e.key || '') ? t(e.key) : wtext || e.message; } });
        if (why) status(why, true);
        else status(code ? T('done', { system: sysName(sys), code }) : T('cleared', { system: sysName(sys) }));
      };
      const showHits = () => {
        const q = input.value.trim();
        const list = q && P.index.has(sys) ? P.index.search(sys, q, 12) : [];
        hits.replaceChildren(...list.map((h) => el('li', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cls-hit': h.code, onClick: () => { input.value = h.code; hits.hidden = true; apply(h.code, h.title); } }, h.code), el('span', {}, ' ' + h.title))));
        hits.hidden = !list.length;
        const odd = q && !codeLooksRight(sys, q), unknown = q && P.index.has(sys) && !P.index.find(sys, q);
        hint.textContent = odd ? T('hint.shape', { system: sysName(sys), example: systemById(sys).example }) : unknown ? T('hint.notinlist') : '';
        hint.hidden = !hint.textContent;
      };
      input.addEventListener('input', showHits);
      input.addEventListener('change', () => { if (input.value.trim() !== (cur?.code || '') || (cur && cur.from !== 'element' && target.value === 'element' && input.value.trim() === '')) apply(input.value); });
      input.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); input.blur(); } if (e.key === 'Escape') { input.value = input.defaultValue; hits.hidden = true; input.blur(); } });
      const clear = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cls-clear': sys, title: T('clear.title'), disabled: !all.some((x) => (target.value === 'type' ? x.c.type[sys] : x.c.own[sys])), onClick: () => apply('') }, T('clear'));
      target.addEventListener('change', () => { clear.disabled = !all.some((x) => (target.value === 'type' ? x.c.type[sys] : x.c.own[sys])); });
      rows.push(el('dt', {}, sysName(sys)), el('dd', {}, input, ' ', clear, el('div', {}, title, title.textContent && from.textContent ? ' · ' : '', from), hits, hint));
    }
    const others = [...new Map(all.flatMap((x) => x.c.others).map((o) => [o.systemName + '|' + o.code, o])).values()];
    const tableNote = systems.map((sys) => {
      const s = systemById(sys), n = P.index.count(sys);
      return el('li', { 'data-cls-list': sys, 'data-rows': String(n) }, sysName(sys) + ': ' + (n ? T('list.loaded', { n }) : s.bundled && !P.loaded ? T('list.loading') : T('list.none')));
    });
    const box = el('details', { className: 'bc-set', 'data-cls': '', 'data-count': String(all.length), open: userOpen ?? (systems.some((s) => all.some((x) => x.c.effective[s])) || rec.systems.length > 0) },
      el('summary', {}, T('title')),
      el('p', { className: 'bc-muted' }, rec.systems.length ? T('intro.project', { systems: rec.systems.map(sysName).join(', ') }) : T('intro.none')),
      el('label', { className: 'bc-dlg-field' }, T('target'), target),
      el('dl', { className: 'bc-dl' }, ...rows),
      others.length ? el('p', { className: 'bc-muted', 'data-cls-others': '' }, T('others') + ' ' + others.map((o) => (o.systemName || '?') + ' ' + o.code).join(', ')) : null,
      el('ul', { className: 'bc-muted', 'data-cls-lists': '' }, ...tableNote),
      el('p', { className: 'bc-lib-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cls-project-open': '', onClick: () => openProject() }, T('project.open'))));
    box.addEventListener('toggle', () => { userOpen = box.open; });   // stays as the person left it while they pick other elements
    const at = container.querySelector('[data-ra]') || container.querySelector('[data-model-props]') || container.querySelector('.bc-prop-name, [data-pick-count]');
    if (at) at.after(box); else container.append(box);
  }

  // ---------------------------------------------------------------------------------------------- the project's dialog
  async function openProject() {
    const w = W();
    if (!w) { status(T('err.nomodel'), true); return; }
    await loadBundled();
    const rec = readProjectClassification(w);
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': T('project.title'), 'data-cls-project': '', style: 'max-height:92vh;overflow:auto' });
    const error = el('p', { className: 'bc-error', role: 'alert' });
    const use = {}, sections = [];
    const defaults = el('input', { type: 'checkbox', checked: rec.defaults, 'data-cls-defaults': '' });
    const schedules = el('input', { type: 'checkbox', checked: rec.schedules, 'data-cls-schedules': '' });
    const draw = () => {
      sections.length = 0;
      for (const s of SYSTEMS) {
        use[s.id] = use[s.id] || el('input', { type: 'checkbox', checked: rec.systems.includes(s.id), 'data-cls-use': s.id });
        const bundled = P.bundled.filter((p) => p.system === s.id), own = P.own.filter((p) => p.system === s.id);
        const file = el('input', { type: 'file', accept: '.csv,.tsv,.txt,text/csv', hidden: true, 'data-cls-file': s.id });
        file.addEventListener('change', async () => {
          const f = file.files?.[0]; file.value = '';
          if (!f) return;
          const r = packFromCsv(await f.text(), { system: s.id, name: f.name.replace(/\.[a-z0-9]+$/i, ''), source: f.name });
          if (!r.ok) { error.textContent = T('load.err.' + (['rows', 'many', 'big'].includes(r.error) ? r.error : 'rows')); return; }
          P.own = P.own.filter((p) => p.id !== r.pack.id).concat(r.pack);
          if (!writeOwn()) { P.own = P.own.filter((p) => p.id !== r.pack.id); error.textContent = T('load.err.store'); return; }
          error.textContent = ''; reindex(); draw(); if (last.container?.isConnected) decorate(last.container, last.ids);
          status(T('load.done', { n: r.pack.rows.length, system: s.name, skipped: r.skipped }));
        });
        sections.push(el('section', { className: 'bc-set', 'data-cls-system': s.id, 'data-bundled': s.bundled ? '1' : '0' },
          el('label', {}, use[s.id], ' ', el('strong', {}, s.name), ' ', el('span', { className: 'bc-muted' }, s.publisher)),
          bundled.length
            ? el('div', { 'data-cls-bundled': s.id },
              el('p', {}, T('bundled.yes', { n: bundled.reduce((a, p) => a + p.rows.length, 0) })),
              el('ul', {}, ...bundled.map((p) => el('li', {}, p.name + ', ' + p.edition + ' (' + p.rows.length + ')'))),
              el('p', { className: 'bc-muted' }, T('bundled.licence', { licence: bundled[0].source.licence, publisher: s.publisher, fetched: bundled[0].source.fetched }) + ' ',
                el('a', { href: bundled[0].source.url, target: '_blank', rel: 'noopener' }, T('bundled.source')), ' · ', el('a', { href: bundled[0].source.licence_url, target: '_blank', rel: 'noopener' }, bundled[0].source.licence)),
              el('p', { className: 'bc-muted' }, T('bundled.older')))
            : el('p', { className: 'bc-muted', 'data-cls-nobundle': s.id }, s.bundled ? T('bundled.failed') : T('bundled.no', { publisher: s.publisher })),
          own.length ? el('ul', { 'data-cls-own': s.id }, ...own.map((p) => el('li', {}, T('own.row', { name: p.name, n: p.rows.length }) + ' ',
            el('button', { type: 'button', className: 'shell-x', title: T('own.remove'), 'aria-label': T('own.remove'), 'data-cls-remove': p.id, onClick: () => { P.own = P.own.filter((x) => x.id !== p.id); writeOwn(); reindex(); draw(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }))))) : null,
          el('p', { className: 'bc-lib-actions' }, file, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cls-load': s.id, title: T('load.title'), onClick: () => file.click() }, T('load')))));
      }
      body.replaceChildren(...sections);
    };
    const body = el('div', {});
    const save = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cls-save': '', onClick: () => {
      const systems = SYSTEMS.map((s) => s.id).filter((id) => use[id].checked);
      const defaultCodes = {}, editions = {};
      for (const id of systems) {
        const d = P.defaults[id];
        if (defaults.checked && d) defaultCodes[id] = Object.fromEntries(Object.entries(d.classes).map(([cls, code]) => [cls, [code, P.index.find(id, code)?.title || '']]));
        const ed = P.bundled.find((p) => p.system === id && p.id === (d?.pack || ''))?.edition || P.own.find((p) => p.system === id)?.edition || '';
        if (ed) editions[id] = ed;
      }
      let why = null;
      A.commit(setProjectClassification({ version: 1, systems, defaults: defaults.checked && Object.keys(defaultCodes).length > 0, schedules: schedules.checked, defaultCodes, editions }), { label: T('project.label'), verb: t('model.verb.changed'), onError: (e, wtext) => { why = /^classify\./.test(e.key || '') ? t(e.key) : wtext || e.message; } });
      if (why) { error.textContent = why; return; }
      dlg.close(); status(systems.length ? T('project.done', { systems: systems.map(sysName).join(', ') }) : T('project.done.none'));
    } }, T('project.save'));
    dlg.append(el('h2', { className: 'bc-h' }, T('project.title')), el('p', {}, T('project.intro')), body,
      el('p', {}, el('label', {}, defaults, ' ' + T('defaults'))), el('p', { className: 'bc-muted' }, T('defaults.note')),
      el('p', {}, el('label', {}, schedules, ' ' + T('schedules'))),
      error, el('p', { className: 'bc-lib-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cls-cancel': '', onClick: () => dlg.close() }, T('cancel')), save));
    dlg.addEventListener('close', () => dlg.remove());
    dlg.addEventListener('keydown', (e) => e.stopPropagation());
    draw(); A.root.append(dlg); dlg.showModal();
  }

  A = modelUi.extend({
    /** 0.10 BK.94: one column per system in use, when the project asks for them. */
    scheduleColumns(all) {
      const w = W();
      if (!w) return;
      let rec; try { rec = readProjectClassification(w); } catch (e) { return; }
      if (!rec.schedules || !rec.systems.length) return;
      addClassificationColumns(all, { systems: rec.systems, codes: (sys) => effectiveCodes(w, sys), label: sysName, varies: T('varies') });
    },
    openClassification: () => openProject(),
  });
  A.root.querySelector('[data-cls-open]')?.addEventListener('click', () => openProject());
  return { decorate, openProject, packs: () => ({ bundled: P.bundled.map((p) => p.id), own: P.own.map((p) => p.id), loaded: P.loaded }), load: loadBundled };
}
