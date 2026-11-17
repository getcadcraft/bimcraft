/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — canvas and file-type names; the words are in the language file (model.trace.plans.*). */
/**
 * model-plans-ui.js — walls from a set of plans (0.7 DC.116, session `trace`), the part of Build › From a drawing… that takes a PDF or a
 * scan (model-trace-ui.js hands the chosen file over). A vector PDF gives its lines (pdf-vector.js), a PDF page that is a picture or a
 * scan (PNG, JPEG, TIFF, several pages) is squared, cleaned and traced (raster/), then plan-pages.js turns the lines into walls and the
 * gaps beside swing arcs or sill lines into doors and windows. Each page is a level: the person picks which page goes to which level (or a
 * new level, or none). The scale comes from the paper (1 : n) or from two picked points and a distance; the page stays as its level's
 * underlay. Make → model-trace.js tracePages: every page, one undo step. Rooms follow by themselves: BimCraft makes a room of every
 * closed loop of walls (model-slabs.js syncDerived), as for walls drawn by hand.
 * Test hook: window.bimcraftPlans = { state }.
 *
 *   createPlans(A, { root }) → { load(file, body, dlg) }        A = the extension handle of model-trace-ui.js
 */
import { configurePdf, openPdf, pdfInfo, pageVector, renderRegion } from './pdfhost.js';
import { sniffScan, scanPages, readScan, RasterError } from './raster/index.js';
import { pdfPageParts, scanParts, tracePicture, wallsFromPlan, mmPerUnit } from './plan-pages.js';
import { tracePages, MAX_UNDERLAY_POINTS } from './model-trace.js';
import { WALL_TYPES, typeThickness, wallType } from './model-walls.js';
import { parseLen, fmtLen } from './model-units.js';
import { el } from './ui-util.js';

const MAX_PAGES_UI = 40;
const MAX_RENDER_PIXELS = 25e6;
const PREVIEW = { w: 560, h: 340 };

function fromRgba(id) {
  const { width: w, height: h, data } = id, out = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) out[i] = (data[i * 4] * 77 + data[i * 4 + 1] * 151 + data[i * 4 + 2] * 28) >> 8;
  return { w, h, channels: 1, data: out };
}

export function createPlans(A, { root }) {
  const t = (...a) => A.t(...a);
  if (root) configurePdf({ root });
  const R = { pages: [], file: null, kind: null, rec: null, scale: { mode: 'ratio', ratio: 100, dpi: 200, picks: [], dist: 0 }, built: new Map() };
  if (typeof window !== 'undefined') window.bimcraftPlans = { state: R };

  async function load(file, body, dlg) {
    body.replaceChildren(el('p', { className: 'bc-muted' }, t('model.trace.reading', { name: file.name })));
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      R.file = file; R.bytes = bytes; R.pages = []; R.built.clear();
      const head = new TextDecoder('latin1').decode(bytes.subarray(0, 1024));
      if (head.includes('%PDF-')) {
        R.kind = 'pdf'; R.rec = { name: file.name, bytes };
        const info = await pdfInfo(R.rec);
        const n = Math.min(info.pages, MAX_PAGES_UI);
        for (let i = 1; i <= n; i++) {
          body.replaceChildren(el('p', { className: 'bc-muted' }, t('model.trace.plans.reading', { n: i, total: n })));
          const vec = await pageVector(R.rec, i);
          const picture = vec.shapes.length < 20 && vec.images >= 1;
          R.pages.push({ n: i, kind: picture ? 'picture' : 'vector', vec, size: info.sizes[i - 1], level: '' });
        }
        R.truncated = info.pages > n ? info.pages : 0;
        R.scale.mode = 'ratio';
      } else {
        const kind = sniffScan(bytes);
        if (!kind) throw new RasterError('not_scan', file.name);
        R.kind = 'scan'; R.rec = null;
        const pages = Math.min(scanPages(bytes), MAX_PAGES_UI);
        for (let i = 0; i < pages; i++) R.pages.push({ n: i + 1, kind: 'scan', level: '' });
        R.truncated = scanPages(bytes) > pages ? scanPages(bytes) : 0;
        const first = await readScan(bytes, 0);
        R.scale.dpi = first.dpi?.x ? Math.round(first.dpi.x) : 200;
        R.scale.mode = 'picks';
      }
      // page → level: the levels there are, in order, then new ones; a page past that is left out only if the person says so
      const lv = A.S.data.levels;
      R.pages.forEach((p, i) => { p.level = i < lv.length ? lv[i].guid : 'new'; });
      render(body, dlg);
    } catch (e) {
      body.replaceChildren(el('p', { className: 'bc-input-err', role: 'alert' }, t('model.trace.plans.err.read', { why: e instanceof RasterError ? t('scan.err.' + e.key, { detail: e.detail }) : (e.message || String(e)) })));
    }
  }

  /** A page's lines and arcs in its own units (points or pixels), read once. { parts, unit: 'pt' | 'px', hPx?, skew? } */
  async function native(p, dpi) {
    const key = p.n + '|' + (p.kind === 'vector' ? '' : dpi);
    if (R.built.has(key)) return R.built.get(key);
    let out;
    if (p.kind === 'vector') out = { parts: pdfPageParts(p.vec, { mmPerPt: 1 }), unit: 'pt', w: p.size[0], h: p.size[1] };
    else {
      let img;
      if (R.kind === 'pdf') {
        const [w, h] = p.size, scale = Math.min(dpi / 72, Math.sqrt(MAX_RENDER_PIXELS / (w * h)));
        const c = await renderRegion(R.rec, p.n, { scale, x0: 0, y0: 0, w, h });
        const cv = Object.assign(document.createElement('canvas'), { width: c.width, height: c.height }), ctx = cv.getContext('2d', { willReadFrequently: true });
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height); ctx.drawImage(c, 0, 0);
        img = fromRgba(ctx.getImageData(0, 0, cv.width, cv.height));
        img.dpi = scale * 72;
      } else img = await readScan(R.bytes, p.n - 1);
      const tp = tracePicture(img, { tol: 1.5 });
      out = { parts: scanParts(tp.result, { mmPerPx: 1, hPx: img.h }), unit: 'px', w: img.w, h: img.h, skew: tp.skew, bitmap: tp.bitmap, dpi: img.dpi };
    }
    R.built.set(key, out);
    return out;
  }

  /** The millimetres a unit of this page is. */
  function mmUnit(p, nat) {
    const s = R.scale;
    if (s.mode === 'picks') return s.mmPerUnit || 0;
    const dpi = nat.unit === 'pt' ? 72 : (R.kind === 'pdf' ? (nat.dpi || s.dpi) : s.dpi);
    return s.ratio * 25.4 / dpi;
  }
  const scaled = (parts, k) => ({ source: parts.source, segs: parts.segs.map((q) => q.map((v) => v * k)), arcs: parts.arcs.map((a) => ({ ...a, cx: a.cx * k, cy: a.cy * k, r: a.r * k })), bounds: null, curves: parts.curves,
    labels: (parts.labels || []).map((l) => ({ name: l.name, at: [l.at[0] * k, l.at[1] * k], h: l.h * k })) });   // 0.10 BK.64: the page's words, for room names

  function render(body, dlg) {
    const lv = A.S.data.levels, units = A.units();
    const above = A.levelAbove();
    const field = (label, input) => el('label', { className: 'bc-dlg-field' }, el('span', {}, label), input);
    const wt = el('select', { className: 'select-cc', 'data-plans-type': '' }, ...WALL_TYPES.map((x) => el('option', { value: x.key }, t('model.wt.' + x.key) + ' (' + fmtLen(typeThickness(x), units) + ')')));
    const top = el('select', { className: 'select-cc', 'data-plans-top': '' }, el('option', { value: 'level', disabled: !above }, t('model.wall.top.level')), el('option', { value: 'fixed', selected: !above }, t('model.wall.top.fixed')));
    const newH = el('input', { className: 'form-control', type: 'text', value: fmtLen(lv[lv.length - 1]?.height || 3000, units), 'data-plans-height': '' });
    const keep = el('input', { type: 'checkbox', checked: true, 'data-plans-underlay': '' });
    const count = el('p', { className: 'bc-sub', 'data-plans-count': '', role: 'status' });
    const make = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-plans-make': '' }, t('model.trace.make'));
    const status = el('p', { className: 'bc-muted', 'data-plans-status': '' });

    // pages
    const rows = R.pages.map((p) => {
      const sel = el('select', { className: 'select-cc', 'data-plans-page-level': String(p.n), 'aria-label': t('model.trace.plans.level') },
        ...lv.map((l) => el('option', { value: l.guid, selected: p.level === l.guid }, l.name)),
        el('option', { value: 'new', selected: p.level === 'new' }, t('model.trace.plans.level.new')),
        el('option', { value: '', selected: p.level === '' }, t('model.trace.plans.level.skip')));
      sel.addEventListener('change', () => { p.level = sel.value; update(); });
      return el('li', { className: 'bc-trace-row' }, el('span', {}, t('model.trace.plans.page', { n: p.n })), el('span', { className: 'bc-sub' }, t('model.trace.plans.kind.' + (p.kind === 'vector' ? 'vector' : 'picture'))), sel);
    });

    // scale
    const mode = el('select', { className: 'select-cc', 'data-plans-scale-mode': '' }, el('option', { value: 'ratio', selected: R.scale.mode === 'ratio' }, t('model.trace.plans.scale.ratio')), el('option', { value: 'picks', selected: R.scale.mode === 'picks' }, t('model.trace.plans.scale.picks')));
    const ratio = el('input', { className: 'form-control', type: 'number', min: '1', step: '1', value: String(R.scale.ratio), 'data-plans-ratio': '', 'aria-label': t('model.trace.plans.scale.ratio') });
    const dpi = el('input', { className: 'form-control', type: 'number', min: '30', max: '1200', step: '1', value: String(R.scale.dpi), 'data-plans-dpi': '' });
    const dist = el('input', { className: 'form-control', type: 'text', placeholder: t('model.trace.plans.picks.dist'), 'data-plans-dist': '', 'aria-label': t('model.trace.plans.picks.dist') });
    const measured = el('p', { className: 'bc-sub', 'data-plans-measured': '' });
    const canvas = el('canvas', { width: PREVIEW.w, height: PREVIEW.h, className: 'bc-plans-preview', 'data-plans-preview': '', role: 'img', 'aria-label': t('model.trace.plans.preview', { n: 1 }), style: 'width:100%;max-width:' + PREVIEW.w + 'px;border:1px solid var(--line);cursor:crosshair' });
    const ratioRow = el('div', { className: 'bc-trace-row', 'data-plans-ratio-row': '' }, mode, ratio, R.kind !== 'pdf' || R.pages.some((p) => p.kind === 'picture') ? el('span', {}, t('model.trace.plans.dpi'), ' ', dpi) : null);
    const picksRow = el('div', { 'data-plans-picks-row': '' }, el('p', { className: 'bc-muted' }, t('model.trace.plans.picks.hint', { n: firstPage()?.n ?? 1 })), canvas, measured, field(t('model.trace.plans.picks.dist'), dist));

    let view = null;   // preview transform: units → canvas px
    async function drawPreview() {
      const p = firstPage();
      if (!p) return;
      const nat = await native(p, R.scale.dpi);
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      const W = nat.w, H = nat.h, k = Math.min(PREVIEW.w / W, PREVIEW.h / H);
      view = { k, W, H, flip: nat.unit === 'pt' };
      R.view = view;
      ctx.strokeStyle = '#222'; ctx.lineWidth = 1; ctx.beginPath();
      for (const s of nat.parts.segs) {
        const [x1, y1, x2, y2] = nat.unit === 'pt' ? [s[0] * k, (H - s[1]) * k, s[2] * k, (H - s[3]) * k] : [s[0] * k, (H - s[1]) * k, s[2] * k, (H - s[3]) * k];
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      }
      ctx.stroke();
      ctx.strokeStyle = '#d33'; ctx.fillStyle = '#d33';
      for (const q of R.scale.picks) { const x = q[0] * k, y = (H - q[1]) * k; ctx.beginPath(); ctx.moveTo(x - 6, y); ctx.lineTo(x + 6, y); ctx.moveTo(x, y - 6); ctx.lineTo(x, y + 6); ctx.stroke(); }
      if (R.scale.picks.length === 2) { ctx.beginPath(); ctx.moveTo(R.scale.picks[0][0] * k, (H - R.scale.picks[0][1]) * k); ctx.lineTo(R.scale.picks[1][0] * k, (H - R.scale.picks[1][1]) * k); ctx.stroke(); }
    }
    canvas.addEventListener('click', (e) => {
      if (!view) return;
      const r = canvas.getBoundingClientRect(), x = (e.clientX - r.left) * (canvas.width / r.width) / view.k, y = view.H - (e.clientY - r.top) * (canvas.height / r.height) / view.k;
      if (R.scale.picks.length >= 2) R.scale.picks = [];
      R.scale.picks.push([x, y]);
      applyPicks();
    });
    function applyPicks() {
      const s = R.scale, pk = s.picks;
      measured.textContent = pk.length === 2 ? t('model.trace.plans.picks.measured', { d: fmt(Math.hypot(pk[1][0] - pk[0][0], pk[1][1] - pk[0][1])) }) : '';
      const mm = pk.length === 2 ? parseLen(dist.value, units) : NaN;
      s.mmPerUnit = pk.length === 2 && Number.isFinite(mm) && mm > 0 ? mmPerUnit(pk[0], pk[1], mm) : 0;
      drawPreview();
      update();
    }
    const fmt = (v) => String(Math.round(v * 10) / 10);
    dist.addEventListener('input', applyPicks);
    mode.addEventListener('change', () => { R.scale.mode = mode.value; picksRow.hidden = mode.value !== 'picks'; if (mode.value === 'picks') drawPreview(); update(); });
    ratio.addEventListener('input', () => { R.scale.ratio = Math.max(1, Number(ratio.value) || 100); update(); });
    dpi.addEventListener('change', () => { R.scale.dpi = Math.max(30, Math.min(1200, Number(dpi.value) || 200)); update(); });
    picksRow.hidden = R.scale.mode !== 'picks';

    /** What each page makes now. → [{ p, nat, k, plan, parts }] */
    async function plans() {
      const out = [];
      for (const p of R.pages) {
        if (!p.level) continue;
        status.textContent = t('model.trace.plans.tracing', { n: p.n });
        const nat = await native(p, R.scale.dpi);
        const k = mmUnit(p, nat);
        if (!(k > 0)) { out.push({ p, nat, k: 0, plan: null }); continue; }
        const parts = scaled(nat.parts, k);
        const tt = typeThickness(wallType(wt.value));
        out.push({ p, nat, k, parts, plan: wallsFromPlan(parts, { t: tt, maxT: Math.max(600, tt * 2) }) });
      }
      status.textContent = '';
      return out;
    }
    let busy = 0;
    async function update() {
      const my = ++busy;
      make.disabled = true;
      const list = await plans();
      if (my !== busy) return;
      const sum = list.reduce((s, x) => { if (x.plan) { s.w += x.plan.walls.length; s.d += x.plan.openings.filter((o) => o.kind === 'door').length; s.n += x.plan.openings.filter((o) => o.kind === 'window').length; s.l++; } return s; }, { w: 0, d: 0, n: 0, l: 0 });
      count.textContent = sum.w ? t('model.trace.plans.will', { w: sum.w, d: sum.d, n: sum.n, l: sum.l }) : t('model.trace.plans.none');
      make.disabled = !sum.w;
      R.last = { sum, list };
      for (const x of list) if (x.nat.skew && Math.abs(x.nat.skew.applied) > 0) count.textContent += ' ' + t('model.trace.plans.skew', { deg: x.nat.skew.applied });
    }
    function firstPage() { return R.pages.find((p) => p.level) || R.pages[0]; }
    for (const c of [wt, top, keep]) c.addEventListener('change', update);

    make.addEventListener('click', async () => {
      const list = (await plans()).filter((x) => x.plan && x.plan.walls.length);
      if (!list.length) return;
      // the first page's lower-left corner puts every page on the same origin, so the levels line up
      const b0 = list[0].parts.bounds || bounds(list[0].parts), sh = [b0.x0, b0.y0];
      const mv = (q) => [q[0] - sh[0], q[1] - sh[1], q[2] - sh[0], q[3] - sh[1]];
      const hNew = parseLen(newH.value, units) > 1000 ? parseLen(newH.value, units) : 3000;
      let top0 = Math.max(...lv.map((l) => l.elevation + l.height), 0), nNew = 0;
      const pages = list.map((x) => {
        let level = x.p.level;
        if (level === 'new') { nNew++; level = { name: t('model.trace.plans.name.new', { n: lv.length + nNew }), elevation: top0, height: hNew }; top0 += hNew; }
        const exists = typeof level === 'string' ? lv.find((l) => l.guid === level) : null;
        const topGuid = exists && top.value === 'level' ? (lv[lv.indexOf(exists) + 1]?.guid || '') : '';
        return {
          level,
          walls: x.plan.walls.map((w) => ({ a: [w.a[0] - sh[0], w.a[1] - sh[1]], b: [w.b[0] - sh[0], w.b[1] - sh[1]], t: w.t })),
          openings: x.plan.openings.map((o) => ({ ...o, typeKey: o.kind === 'door' ? 'door-single' : 'win-casement' })),
          typeKey: wt.value, topLevel: topGuid, height: exists ? exists.height : hNew,
          // 0.10 BK.64 (bk-r3-checks-10): what is read from the page is marked unverified; a room takes its name from the page's text inside it
          source: x.parts.source === 'scan' ? 'scan' : 'pdf', roomNames: (x.parts.labels || []).map((l) => ({ name: l.name, at: [l.at[0] - sh[0], l.at[1] - sh[1]] })),
          underlay: keep.checked ? { name: R.file.name + (R.pages.length > 1 ? ' (' + x.p.n + ')' : ''), units: 'mm', lines: x.parts.segs.map(mv).slice(0, Math.floor(MAX_UNDERLAY_POINTS / 2)) } : null,
        };
      });
      dlg.close();
      const w = pages.reduce((s, p) => s + p.walls.length, 0), d = pages.reduce((s, p) => s + p.openings.filter((o) => o.kind === 'door').length, 0), n = pages.reduce((s, p) => s + p.openings.filter((o) => o.kind === 'window').length, 0);
      A.commit(tracePages(pages), { label: R.file.name, verb: t('model.verb.made') });
      A.host.status(t('model.trace.plans.done', { w, d, n, name: R.file.name, l: pages.length }) + ' ' + t('verify.recognised'), false, true);
    });

    body.replaceChildren(
      el('p', {}, el('strong', {}, R.file.name), ' ', el('span', { className: 'bc-sub' }, t('model.trace.plans.file', { n: R.pages.length }) + (R.truncated ? ' ' + t('model.trace.plans.err.toomany', { n: R.pages.length }) : ''))),
      el('ul', { className: 'bc-trace-list', 'data-plans-pages': '' }, ...rows),
      el('fieldset', {}, el('legend', {}, t('model.trace.plans.scale')), ratioRow, picksRow),
      field(t('model.wall.type'), wt), field(t('model.wall.top'), top), field(t('model.trace.plans.height'), newH),
      el('label', { className: 'bc-trace-row' }, keep, ' ', t('model.trace.plans.underlay')),
      status, count, el('p', { className: 'bc-muted' }, t('model.trace.plans.note')), el('p', {}, make));
    if (R.scale.mode === 'picks') drawPreview();
    update();
  }
  const bounds = (parts) => { let x0 = Infinity, y0 = Infinity; for (const s of parts.segs) { x0 = Math.min(x0, s[0], s[2]); y0 = Math.min(y0, s[1], s[3]); } return { x0: Number.isFinite(x0) ? x0 : 0, y0: Number.isFinite(y0) ? y0 : 0 }; };
  return { load, state: R };
}
