/* SPDX-License-Identifier: Apache-2.0 */
/**
 * doc-ui.js — Documents from the model (0.8 SU.889, session sx-tags): the left panel's "Documents from the model" <details>
 * (ui.inc). Pick a trade template (doc-templates.js), load a .md file or keep your own in this browser, edit it, see the
 * document, save it as PDF (doc-pdf.js), Word .docx (doc-docx.js) or Markdown. Fields read the open IFC and the project's tags
 * (doc-template.js); "Add this template's tags" adds the tag definitions a template reads (one undo step).
 *
 *   mountDocs(ctx) → { changed(), state, render(), make(kind) } | null   ctx = tags-ui.js's host plus defs(), index(), writer(),
 *     commit(op, label), tagsChanged()
 * Own templates: localStorage "bimcraft.sx.doctemplates" (per viewer, a convenience; a private window may refuse it).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { labelPapers } from './paper-labels.js';
import { saveDefsOp } from './tags.js';
import { docSource, projectUnits, render as renderDoc } from './doc-template.js';
import { docPdf } from './doc-pdf.js';
import { docDocx } from './doc-docx.js';
import { TEMPLATES, missingTags } from './doc-templates.js';
import { validateItem } from './libitem.js';

const STORE = 'bimcraft.sx.doctemplates';
const MAX_OWN = 30, MAX_TEXT = 200000;
const readOwn = () => { try { const a = JSON.parse(localStorage.getItem(STORE) || '[]'); return Array.isArray(a) ? a.filter((x) => x && typeof x.name === 'string' && typeof x.text === 'string').slice(0, MAX_OWN).map((x) => ({ name: x.name.slice(0, 80), text: x.text.slice(0, MAX_TEXT) })) : []; } catch (e) { return []; } };
const writeOwn = (list) => { try { localStorage.setItem(STORE, JSON.stringify(list.slice(0, MAX_OWN))); return true; } catch (e) { return false; } };
const LIB_LIST = '/api/v1/library/items?kind=template&per=50';
const tplName = (x) => (x.raw ? x.name : t(x.name));
const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

/** Blocks → DOM for the preview (text nodes only: model text never becomes HTML). */
function runsEl(runs) {
  return runs.map((r) => { let n = r.code ? el('code', {}, r.s) : document.createTextNode(r.s); if (r.i) n = el('em', {}, n); if (r.b) n = el('strong', {}, n); return n; });
}
function blocksEl(blocks) {
  return blocks.map((b) => {
    if (b.t === 'h') return el('h' + Math.min(6, b.level + 2), {}, runsEl(b.runs));
    if (b.t === 'p') return el('p', {}, runsEl(b.runs));
    if (b.t === 'quote') return el('blockquote', {}, runsEl(b.runs));
    if (b.t === 'hr') return el('hr', {});
    if (b.t === 'ul' || b.t === 'ol') return el(b.t, {}, b.items.map((it) => el('li', {}, runsEl(it))));
    if (b.t === 'table') return el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table' },
      el('thead', {}, el('tr', {}, b.head.map((h) => el('th', {}, runsEl(h))))),
      el('tbody', {}, b.rows.map((r) => el('tr', {}, r.map((c, j) => el('td', { className: b.align[j] === 'r' ? 'n' : '' }, runsEl(c))))))));
    return null;
  });
}

export function mountDocs(ctx) {
  const box = ctx.root?.querySelector('[data-sx-docs]');
  const details = ctx.root?.querySelector('[data-sx-docs-details]');
  if (!box) return null;
  const S = { pick: 'tpl:' + TEMPLATES[0].id, text: TEMPLATES[0].text, result: null, paper: 'a4', dirty: false };
  const input = el('input', { type: 'file', accept: '.md,.markdown,.txt,text/markdown,text/plain', hidden: true, 'data-sx-docs-input': '' });
  input.addEventListener('change', async () => {
    const f = input.files[0]; input.value = '';
    if (!f) return;
    if (f.size > MAX_TEXT) { ctx.status(t('sx.su889.err.toobig'), true); return; }
    S.text = await f.text(); S.pick = 'file'; S.result = null; S.fileName = f.name;
    ctx.status(t('sx.su889.loaded', { name: f.name })); render();
  });
  const tplOf = () => (S.pick.startsWith('tpl:') ? TEMPLATES.find((x) => 'tpl:' + x.id === S.pick) : S.pick.startsWith('lib:') ? S.libTpl || null : null);
  /** Templates per trade in the Library (0.8 SU.889, kind template): the list, then one item.json checked by libitem.js before its text is used. */
  async function fromLibrary(uuid) {
    try {
      const r = await fetch('/api/v1/library/items/' + encodeURIComponent(uuid), { headers: { Accept: 'application/json' } });
      const d = (await r.json()).data?.item;
      if (!r.ok || !d?.version) throw new Error('no item');
      const f = await fetch('/api/v1/library/items/' + encodeURIComponent(uuid) + '/' + d.version + '/item.json');
      const json = await f.json();
      const chk = validateItem(json, { partial: false });
      if (!f.ok || !chk.ok || json.kind !== 'template') { ctx.status(t('sx.su889.lib.bad'), true); return; }
      const rec = json.template;
      S.libTpl = { id: rec.key, name: json.name, raw: true, tags: rec.tags, text: rec.text };
      S.pick = 'lib:' + uuid; S.text = rec.text; S.result = null;
      ctx.status(t('sx.su889.loaded', { name: json.name })); render();
    } catch (e) { ctx.status(t('sx.su889.lib.offline'), true); }
  }
  async function loadLibrary() {
    try {
      const r = await fetch(LIB_LIST, { headers: { Accept: 'application/json' } });
      const list = (await r.json()).data?.items;
      if (!r.ok || !Array.isArray(list)) throw new Error('list');
      S.lib = list.map((x) => ({ uuid: x.uuid, name: x.name }));
      if (!S.lib.length) ctx.status(t('sx.su889.lib.none'));
    } catch (e) { S.lib = null; ctx.status(t('sx.su889.lib.offline'), true); }
    render();
  }
  function source() {
    const e = ctx.editor(), m = ctx.model(), ix = ctx.index();
    if (!e || !m || !ix) return null;
    const w = ctx.writer();
    let project = {};
    try { const ids = e.api.GetLineIDsWithType(e.mid, e.api.GetTypeCodeFromName('IFCPROJECT')); const p = ids.size() ? e.api.GetLine(e.mid, ids.get(0), false) : null; project = { name: String(p?.LongName?.value || p?.Name?.value || ''), description: String(p?.Description?.value || ''), phase: String(p?.Phase?.value || '') }; } catch (err) { project = {}; }
    return docSource({ ixs: [ix], defs: ctx.defs(), units: projectUnits(e.api, e.mid), unitMm: w?.unitMm || 1, project, file: ctx.fileName() || '', date: today() });
  }
  function make(kind) {
    const src = source();
    if (!src) { ctx.status(t('sx.su915.needs'), true); return null; }
    const res = renderDoc(S.text, src);
    S.result = res;
    const base = (tplOf() ? tplName(tplOf()) : S.ownName || String(S.fileName || 'document').replace(/\.(md|markdown|txt)$/i, '')) + ' - ' + String(ctx.fileName() || 'model').replace(/\.ifc$/i, '');   // i18n-ignore: a file name
    const title = res.blocks.find((b) => b.t === 'h')?.runs.map((r) => r.s).join('') || base;
    if (kind === 'pdf') {
      const p = docPdf(res.blocks, { title, paper: S.paper, footer: title, page: (n, of) => t('sx.su889.page', { n, of }) });
      ctx.download(base + '.pdf', p.bytes, 'application/pdf');
      ctx.status(t('sx.su889.saved.pdf', { name: base + '.pdf', pages: p.pages }) + (p.missing ? ' ' + t('sx.su889.missing', { n: p.missing }) : ''));
    } else if (kind === 'docx') {
      ctx.download(base + '.docx', docDocx(res.blocks, { title }), 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      ctx.status(t('sx.su889.saved', { name: base + '.docx' }));
    } else if (kind === 'md') {
      ctx.download(base + '.md', res.markdown, 'text/markdown;charset=utf-8');
      ctx.status(t('sx.su889.saved', { name: base + '.md' }));
    }
    render();
    return res;
  }

  function render() {
    if (!details?.open) return;
    if (!ctx.editor() || !ctx.model()) { box.replaceChildren(el('p', { className: 'bc-muted' }, t('sx.su915.needs'))); return; }
    const own = readOwn();
    const pick = el('select', { className: 'select-cc', 'data-sx-docs-pick': '' },
      el('optgroup', { label: t('sx.su889.builtin') }, TEMPLATES.map((x) => el('option', { value: 'tpl:' + x.id }, t(x.name) + ' (' + t(x.trade) + ')'))),
      own.length ? el('optgroup', { label: t('sx.su889.own') }, own.map((x, i) => el('option', { value: 'own:' + i }, x.name))) : null,
      S.lib && S.lib.length ? el('optgroup', { label: t('sx.su889.lib') }, S.lib.map((x) => el('option', { value: 'lib:' + x.uuid }, x.name))) : null,
      S.pick === 'file' ? el('option', { value: 'file' }, S.fileName || t('sx.su889.fromfile')) : null);
    pick.value = S.pick;
    pick.addEventListener('change', () => {
      S.pick = pick.value; S.result = null;
      if (S.pick.startsWith('lib:')) { fromLibrary(S.pick.slice(4)); return; }
      if (S.pick.startsWith('tpl:')) S.text = tplOf().text;
      else if (S.pick.startsWith('own:')) { const o = own[Number(S.pick.slice(4))]; S.text = o?.text || ''; S.ownName = o?.name || ''; }
      render();
    });
    const area = el('textarea', { className: 'bc-input', rows: 14, spellcheck: false, 'aria-label': t('sx.su889.template'), 'data-sx-docs-text': '', style: 'width:100%;font-family:ui-monospace,monospace;font-size:.75rem' });
    area.value = S.text;
    area.addEventListener('input', () => { S.text = area.value.slice(0, MAX_TEXT); S.result = null; });
    const tpl = tplOf();
    const missing = tpl ? missingTags(tpl, ctx.defs()) : [];
    const addTags = () => {
      if (ctx.commit(saveDefsOp([...ctx.defs(), ...missing]), tplName(tpl))) { ctx.status(t('sx.su889.tags.added', { n: missing.length })); ctx.tagsChanged(); render(); }
    };
    const paper = el('select', { className: 'select-cc', 'aria-label': t('sx.su889.paper') }, el('option', { value: 'a4' }, 'A4'), el('option', { value: 'letter' }, t('sx.su889.letter')));   // i18n-ignore: a paper size
    labelPapers(paper);   // GH.3-A
    paper.value = S.paper; paper.addEventListener('change', () => { S.paper = paper.value; });
    const ownName = el('input', { type: 'text', className: 'bc-input', maxLength: 80, value: S.ownName || '', placeholder: t('sx.su889.own.name'), 'aria-label': t('sx.su889.own.name') });
    const keep = () => {
      const name = ownName.value.trim();
      if (!name) { ownName.focus(); ctx.status(t('sx.su889.own.noname'), true); return; }
      const list = readOwn().filter((x) => x.name !== name);
      list.unshift({ name, text: S.text });
      if (!writeOwn(list)) { ctx.status(t('sx.su889.own.nostore'), true); return; }
      S.pick = 'own:0'; S.ownName = name; ctx.status(t('sx.su889.own.kept', { name })); render();
    };
    const forget = S.pick.startsWith('own:') ? () => { const list = readOwn(); list.splice(Number(S.pick.slice(4)), 1); writeOwn(list); S.pick = 'tpl:' + TEMPLATES[0].id; S.text = TEMPLATES[0].text; render(); } : null;
    const res = S.result;
    box.replaceChildren(el('div', { className: 'bc-find' },
      el('p', { className: 'bc-muted' }, t('sx.su889.intro')),
      el('label', { className: 'bc-clash' }, t('sx.su889.template'), pick),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-sx-docs-load': '', onClick: () => input.click() }, t('sx.su889.load')), ' ',
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-sx-docs-library': '', onClick: loadLibrary }, t('sx.su889.lib.open'))),
      missing.length ? el('p', { className: 'bc-muted', 'data-sx-docs-missing': '' }, t('sx.su889.tags.missing', { list: missing.map((d) => d.name).join(', ') }), ' ',
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-sx-docs-addtags': '', onClick: addTags }, t('sx.su889.tags.add'))) : null,
      area,
      el('details', {}, el('summary', { className: 'bc-muted' }, t('sx.su889.help.h')), el('p', { className: 'bc-muted' }, t('sx.su889.help'))),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sx-docs-preview': '', onClick: () => make('preview') }, t('sx.su889.preview')), ' ',
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-sx-docs-pdf': '', onClick: () => make('pdf') }, el('i', { className: 'bi bi-file-earmark-pdf', 'aria-hidden': 'true' }), ' ', t('sx.su889.pdf')), ' ',
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sx-docs-docx': '', onClick: () => make('docx') }, el('i', { className: 'bi bi-file-earmark-word', 'aria-hidden': 'true' }), ' ', t('sx.su889.docx')), ' ',
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-sx-docs-md': '', onClick: () => make('md') }, t('sx.su889.md'))),
      el('label', { className: 'bc-clash' }, t('sx.su889.paper'), paper),
      el('div', { className: 'bc-find-row' }, ownName, ' ', el('button', { type: 'button', className: 'bc-linkbtn', onClick: keep }, t('sx.su889.own.keep')),
        forget ? [' ', el('button', { type: 'button', className: 'bc-linkbtn', onClick: forget }, t('sx.su889.own.forget'))] : null, ' ',
        el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => ctx.download((S.ownName || (tpl ? tpl.id : 'template')) + '.md', S.text, 'text/markdown;charset=utf-8') }, t('sx.su889.own.download'))),
      res && res.warnings.length ? el('ul', { className: 'bc-muted', 'data-sx-docs-warnings': '' }, res.warnings.map((x) => el('li', {}, t(x.key, x.fill)))) : null,
      res ? el('div', { className: 'bc-doc-preview', 'data-sx-docs-out': '', style: 'border:1px solid var(--line);padding:.5rem;max-height:28rem;overflow:auto' }, blocksEl(res.blocks)) : null,
      input));
  }
  details?.addEventListener('toggle', () => { if (details.open) render(); });
  return {
    changed() { S.result = null; render(); },
    render,
    make,
    get state() { return { pick: S.pick, text: S.text, result: S.result }; },
    setText(s) { S.text = String(s); S.pick = 'file'; S.fileName = 'test.md'; S.result = null; if (details) details.open = true; render(); },   // tests
    pickTemplate(id) { S.pick = 'tpl:' + id; S.text = tplOf()?.text || ''; S.result = null; if (details) details.open = true; render(); },   // tests
  };
}
