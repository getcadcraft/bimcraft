/* SPDX-License-Identifier: Apache-2.0 */
/**
 * panels-ui.js — panel shop drawings from the model's walls, floors and roofs, in timber or light-gauge steel (0.8 EG.6, round 5, session bim-build_PART_5).
 * Build menu › Panel drawings… [data-panels-open] (command build.panels, typed PANELS): a dialog [data-panels-dialog] lists every drawn wall, floor and roof
 * with a tick each; the material (Timber or Light-gauge steel), the member size, the spacing and the roof's ridge board apply to the ticked ones; the first
 * ticked panel is drawn to scale in the dialog [data-panels-preview]; Cut list (CSV), Shop drawings (PDF, one A3 page per panel) and Drawing (SVG) save them.
 * Problems the framing code finds (an opening too near a wall's end, a header too tall, a piece longer than the stock) go to the shell's Problems
 * (source bimcraft.panels). The rules are framing.js (DetailCraft's, byte-identical) and panels-bim.js. Nothing is written to the model: a panel is a drawing
 * made from it whenever you ask. Test hook: window.bimcraftPanels = { state, open, build }.
 */
import { panelHosts, buildPanels, sizesFor } from './panels-bim.js';
import { panelSvg, panelsPdf, nestPanels, STEEL, TIMBER } from './framing.js';
import { fmtLen } from './model-units.js';

const csvCell = (v) => { const s = String(v ?? ''); const f = /^[=+\-@\t\r]/.test(s) && !/^-?\d/.test(s) ? "'" + s : s; return /[",\n\r]/.test(f) ? '"' + f.replace(/"/g, '""') + '"' : f; };

export function mountPanels(modelUi) {
  const R = { material: 'timber', size: '', spacing: 0, ridge: '', ticked: null, built: [] };
  let A = null, psrc = null;
  const t = (...a) => A.t(...a);
  const nameOf = (h) => [h.levelName, t('frm.kind.' + h.kind), h.size].filter(Boolean).join(' ');
  const hosts = () => {
    const D = A.S.data || {};
    const hs = panelHosts({ walls: D.walls || [], openings: D.openings || [], floors: D.derived?.floors || [], roofs: D.derived?.roofs || [], loops: (st) => A.loopsOf(st), levels: D.levels || [], fmt: (mm) => fmtLen(mm, A.units()) });
    for (const h of hs) h.nameFor = nameOf;
    return hs;
  };
  const chosen = (hs) => hs.filter((h) => !R.ticked || R.ticked.has(h.id));
  function build() {
    const hs = hosts();
    R.built = buildPanels(chosen(hs), { material: R.material, size: R.size, spacing: R.spacing, ridge: R.ridge });
    publish();
    return R.built;
  }
  function publish() {
    try {
      if (!window.ccProblems?.source) return;
      psrc = psrc || window.ccProblems.source({ id: 'bimcraft.panels', kind: 'engine', label: t('panels.title') });
      psrc.set(R.built.flatMap((b) => b.problems.map((q) => ({ code: q.code, severity: q.severity, text: t('frm.prob.' + q.code.slice(4), { ...q.msg.vars, name: nameOf(b.host) }), about: [{ kind: 'element', id: b.host.guid, label: nameOf(b.host) }] }))));
    } catch (e) { /* the panel is optional */ }
  }
  const base = () => String(A.host.fileName?.() || 'model').replace(/\.ifc$/i, '');
  const saveCsv = () => {
    const out = [];
    for (const b of R.built) {
      out.push([csvCell(nameOf(b.host))]);
      out.push(['mark', 'piece', 'size', 'length', 'count', 'total'].map((k) => csvCell(t('frm.col.' + k))));
      for (const r of b.rows) out.push([r.mark, t('frm.piece.' + r.kind), r.size, Math.round(r.length * 10) / 10, r.count, r.total].map(csvCell));
      out.push([]);
    }
    const nest = nestPanels(R.built.map((b) => b.panel));
    out.push([csvCell(t('frm.stock'))], [t('frm.col.size'), t('frm.col.stock'), t('frm.col.cuts'), t('frm.col.drop')].map(csvCell));
    for (const g of nest.groups) for (const b of g.bars) out.push([g.profile, b.stock, b.cuts.length, Math.round(b.drop)].map(csvCell));
    A.host.download(base() + ' ' + t('frm.file') + '.csv', '﻿' + out.map((r) => r.join(',')).join('\r\n') + '\r\n', 'text/csv');
    A.host.status(t('frm.saved.csv', { n: R.built.length }));
  };
  const words = () => ({ sheet: t('frm.title'), mark: t('frm.col.mark'), piece: t('frm.col.piece'), size: t('frm.col.size'), length: t('frm.col.length'), count: t('frm.col.count'), total: t('frm.col.total'), scale: t('frm.pdf.scale'), pieces: t('frm.pdf.pieces'), note: t('frm.pdf.note'),
    kinds: Object.fromEntries(['stud', 'king', 'jack', 'header', 'cripple', 'sill', 'plate', 'joist', 'rim', 'blocking', 'rafter', 'ridge'].map((k) => [k, t('frm.piece.' + k)])) });
  async function savePdf() {
    const r = await panelsPdf(R.built.map((b) => b.panel), { names: R.built.map((b) => nameOf(b.host)), project: base(), words: words(), title: t('frm.title'), date: new Date().toISOString().slice(0, 10) });
    A.host.download(base() + ' ' + t('frm.file') + '.pdf', r.bytes, 'application/pdf');
    A.host.status(t('frm.saved.pdf', { n: R.built.length }));
  }
  const saveSvg = () => { const b = R.built[0]; if (b) { A.host.download(base() + ' ' + nameOf(b.host) + '.svg', panelSvg(b.panel, { title: nameOf(b.host) }), 'image/svg+xml'); A.host.status(t('frm.saved.svg')); } };

  function open() {
    if (!A.ed()) { A.host.status(t('model.needs.ifc')); return; }
    document.querySelector('[data-panels-dialog]')?.remove();
    const hs = hosts();
    if (!hs.length) { A.host.status(t('panels.none'), true); return; }
    if (!R.ticked) R.ticked = new Set(hs.filter((h) => h.kind !== 'wall').map((h) => h.id).concat(hs.filter((h) => h.kind === 'wall').slice(0, 8).map((h) => h.id)));
    const doc = document, dlg = doc.createElement('dialog');
    dlg.dataset.panelsDialog = ''; dlg.setAttribute('aria-label', t('panels.title')); dlg.style.cssText = 'max-width:46rem;width:calc(100vw - 2rem);max-height:86vh;overflow:auto';
    const add = (tag, text, cls, to = dlg) => { const n = doc.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; to.append(n); return n; };
    add('h2', t('panels.title'));
    add('p', t('panels.lead'), 'bc-muted');
    const row = add('div', undefined, 'bc-modelbar-row');
    const sel = (label, attrs, options, value, on) => { const l = add('label', undefined, 'bc-mb-field', row); l.append(label + ' '); const s = doc.createElement('select'); s.className = 'bc-mb-select'; for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v); for (const [v, text] of options) { const o = doc.createElement('option'); o.value = v; o.textContent = text; s.append(o); } s.value = value; s.addEventListener('change', () => on(s.value)); l.append(s); return s; };
    const sizeOpts = () => [['', t('panels.size.auto')], ...sizesFor(R.material).map((k) => [k, k])];
    const sizeSel = sel(t('frm.f.size'), { 'data-panels-size': '' }, sizeOpts(), R.size, (v) => { R.size = v; redraw(); });
    sel(t('frm.f.material'), { 'data-panels-material': '' }, [['timber', t('frm.material.timber')], ['lgs', t('frm.material.lgs')]], R.material, (v) => { R.material = v; R.size = ''; R.ridge = ''; sizeSel.replaceChildren(...sizeOpts().map(([k, x]) => { const o = doc.createElement('option'); o.value = k; o.textContent = x; return o; })); sizeSel.value = ''; redraw(); });
    sel(t('frm.f.spacing'), { 'data-panels-spacing': '' }, [['0', t('panels.size.auto')], ...[300, 400, 450, 600].map((v) => [String(v), v + ' mm'])], String(R.spacing), (v) => { R.spacing = Number(v); redraw(); });
    const list = add('div', undefined, 'bc-panels-list'); list.style.cssText = 'max-height:14rem;overflow:auto;margin:.5rem 0';
    const prev = add('div'); prev.dataset.panelsPreview = ''; prev.style.cssText = 'background:#fff;border:1px solid #ccc;margin:.5rem 0';
    const sum = add('p', '', 'bc-muted'); sum.dataset.panelsSummary = '';
    const acts = add('p', undefined, 'bc-lib-actions');
    const btn = (label, attr, on, primary) => { const b = add('button', label, primary ? 'btn-plot btn-sm-cc' : 'btn-line btn-sm-cc', acts); b.type = 'button'; b.dataset[attr] = ''; b.addEventListener('click', on); return b; };
    btn(t('panels.csv'), 'panelsCsv', () => { if (build().length) saveCsv(); });
    btn(t('panels.pdf'), 'panelsPdf', async () => { if (build().length) await savePdf(); }, true);
    btn(t('panels.svg'), 'panelsSvg', () => { if (build().length) saveSvg(); });
    const close = btn(t('model.sh.close'), 'panelsClose', () => dlg.close());
    close.type = 'button';
    function redraw() {
      list.replaceChildren();
      for (const h of hs) {
        const lab = doc.createElement('label'); lab.className = 'bc-mb-field'; lab.style.display = 'block';
        const cb = doc.createElement('input'); cb.type = 'checkbox'; cb.checked = R.ticked.has(h.id); cb.dataset.panelsHost = h.id;
        cb.addEventListener('change', () => { if (cb.checked) R.ticked.add(h.id); else R.ticked.delete(h.id); redraw(); });
        lab.append(cb, ' ', nameOf(h) + (h.approx ? ' - ' + t('panels.approx') : ''));
        list.append(lab);
      }
      const b = build();
      prev.replaceChildren();
      if (b[0]) { const holder = doc.createElement('div'); holder.innerHTML = panelSvg(b[0].panel, { title: nameOf(b[0].host) }); /* made here from numbers; the title is escaped inside */ holder.firstChild?.setAttribute('style', 'width:100%;height:auto;max-height:18rem'); prev.append(holder); }
      const pieces = b.reduce((n, x) => n + x.panel.summary.pieces, 0), probs = b.reduce((n, x) => n + x.problems.length, 0);
      sum.textContent = b.length ? t('panels.summary', { panels: b.length, pieces, problems: probs }) : t('panels.pick');
    }
    dlg.addEventListener('close', () => dlg.remove());
    doc.body.append(dlg);
    redraw();
    dlg.showModal();
  }

  A = modelUi.extend({});
  for (const b of A.root.querySelectorAll('[data-panels-open]')) b.addEventListener('click', () => { b.closest('details')?.removeAttribute('open'); open(); });
  window.bimcraftPanels = { state: R, open, build, hosts, materials: { timber: Object.keys(TIMBER), lgs: Object.keys(STEEL) } };
  return A;
}
