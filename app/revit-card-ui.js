/* SPDX-License-Identifier: Apache-2.0 */
/**
 * revit-card-ui.js: bimcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 bimcraft; no behaviour change).
 * mountRevitCard(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { readRevit } from './rvt-reader.js';
import { fillDl, bytes, el, num, projectParam, isPlaceholder } from './ui-util.js';
import { previewSupport, convertRevit } from './rvt-convert.js';
import { resolveLink } from './folder-scan.js';

export function mountRevitCard(ctx) {
  const { ST, ui, status, frame, guard, fromFolder, showFolder, openIfc, section, showStage, root } = ctx;

  // ---- RVT / RFA ----
  async function openRevit(file, path) {
    ST.mode = 'none';
    status(t('rvt.reading'));
    await frame();
    // A cut-off file opens as far as it is really there (info.partial); the card says so first.
    const info = await readRevit(file, file.name, { partial: true });
    ST.rvtOpen = { file, path, info };
    showStage('rvt');
    renderCard(info, fromFolder(path) ? path : null);
    ui.infoH.textContent = t('info.h.file');
    fillDl(ui.infoDl, [
      [t('info.file'), file.name], [t('info.size'), bytes(file.size)], [t('info.kind'), info.kind],
      [t('info.savedin'), info.release ? t('rvt.release', { release: info.release }) : null], [t('info.build'), info.basic.build],
      [t('info.read'), t('rvt.read.of', { read: bytes(info.bytesRead), size: bytes(file.size) })],
      [t('info.complete'), info.partial ? t('rvt.complete.no', { size: bytes(file.size), expected: bytes(info.incomplete.expectedAtLeast) }) : null],
    ]);
    ui.info.hidden = false;
    ui.back.hidden = !fromFolder(path);
    ui.storeys.hidden = true;
    ui.classes.hidden = true;
    ui.props.replaceChildren(el('p', { className: 'bc-muted' }, t('rvt.props.need')));
    // Not "Opened": a partial open is not a success, and the line stays until the next action.
    status(info.partial ? t('rvt.partly', { file: file.name }) : t('rvt.opened', { file: file.name }), false, !info.partial);
  }

  /** 0.5 SG.8 (b), lab only (ui.inc data-rvt-preview = the library's pinned rvt.js): the card's offer to read the model with the rvt library, or why
   *  an older project gets none. Families, templates and cut-off copies get nothing (rvt-convert.js previewSupport). */
  function rvtPreviewOffer(info) {
    if (!root?.dataset.rvtPreview || ST.rvtOpen?.info !== info) return null;
    const pv = previewSupport(info, ST.rvtOpen.file.name);
    if (!pv.ok) return pv.why === 'old' ? el('p', { className: 'bc-card-sub', 'data-rvt-preview-old': '' }, t('rvt.preview.old', { release: pv.release })) : null;
    return el('div', { className: 'bc-card-rvtpreview', 'data-rvt-preview-offer': pv.level },
      el('p', {}, t('rvt.preview.what.' + pv.level, { release: pv.release })),
      el('p', {}, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-rvt-preview-go': '', onClick: () => guard(previewRevit) },
        el('i', { className: 'bi bi-box', 'aria-hidden': 'true' }), ' ' + t('rvt.preview.button'))));
  }

  /** Convert the project on the card to IFC4 in a worker (rvt-convert.js) and open it like any IFC: the File panel then
   *  says it is a preview, what read it and which classes are boxes. The original file is untouched. */
  async function previewRevit() {
    if (!ST.rvtOpen) return;
    const { file, path } = ST.rvtOpen;
    const t0 = performance.now();
    status(t('rvt.preview.loading'));
    await frame();
    let out;
    try {
      out = await convertRevit(new Uint8Array(await file.arrayBuffer()), {
        libUrl: new URL(root.dataset.rvtPreview, location.href).href, convertUrl: import.meta.resolve('./rvt-convert.js'),
        workerUrl: import.meta.resolve('./rvt-convert-worker.js'),
        onPhase: (p) => status(p === 'loading' ? t('rvt.preview.loading') : t('rvt.preview.converting', { file: file.name, size: bytes(file.size) })),
      });
    } catch (e) {
      throw Object.assign(new Error(t('rvt.preview.failed', { error: e.message || String(e) })), { userFacing: true });
    }
    const { ifc: data, summary } = out;
    if (!summary.elements) throw Object.assign(new Error(t('rvt.preview.empty', { file: file.name })), { userFacing: true });
    const name = file.name.replace(/\.rvt$/i, '') + ' (preview).ifc';   // i18n-ignore: a file name
    await openIfc(data, new File([data], name, { type: 'application/x-step' }), path);
    const boxed = summary.byClass.filter((r) => r.boxes && r.cls !== 'IfcSpace');
    ui.infoDl.append(
      el('dt', {}, t('rvt.preview.of')), el('dd', { 'data-rvt-preview-of': '' }, file.name),
      el('dt', {}, t('rvt.preview.reader')), el('dd', {}, t('rvt.preview.reader.value')),
      el('dt', {}, t('rvt.preview.boxes')), el('dd', { 'data-rvt-preview-boxes': String(summary.boxes) },
        ...(boxed.length ? boxed.map((r) => el('span', { className: 'bc-note-line' }, t('rvt.preview.boxes.row', { cls: r.cls.replace(/^Ifc/, ''), count: num(r.boxes) }))) : [t('rvt.preview.boxes.none')])));
    // only fixtures and equipment came in (no wall, floor or roof): say so, never let it pass for the building
    if (!summary.fabric) ui.infoDl.append(el('dt', {}, t('rvt.preview.fabric')), el('dd', { 'data-rvt-preview-nofabric': '' }, t('rvt.preview.fabric.none')));
    window.bimcraftRvtPreview = { file: file.name, summary, ms: Math.round(performance.now() - t0) };   // for tests and the spike notes
    status(t(summary.fabric ? 'rvt.preview.done' : 'rvt.preview.done.nofabric', { file: file.name, n: summary.elements, count: num(summary.elements), boxes: num(summary.boxes) }));
  }

  /** The RVT/RFA card. With `path` (opened from a folder) links are checked against the folder. */
  function renderCard(info, path) {
    if (ST.previewUrl) { URL.revokeObjectURL(ST.previewUrl); ST.previewUrl = null; }
    const proj = info.project;
    const fam = info.family;
    const title = projectParam(proj, 'Project Name') || (fam && fam.title) || (proj && proj.title) || info.fileName;   // i18n-ignore: a parameter name in the file
    const sub = [projectParam(proj, 'Project Number'), projectParam(proj, 'Client Name'), fam && fam.categories.join(', ')].filter(Boolean).join(', ');   // i18n-ignore: parameter names in the file

    let preview;
    if (info.preview && info.preview.png.length) {
      ST.previewUrl = URL.createObjectURL(new Blob([info.preview.png], { type: 'image/png' }));
      preview = el('div', { className: 'bc-card-preview' }, el('img', { src: ST.previewUrl, alt: t('rvt.preview.alt'), width: info.preview.width || undefined, height: info.preview.height || undefined }));
    } else {
      const cutOff = info.partial && info.missing.some((s) => s.path === 'RevitPreview4.0');
      preview = el('div', { className: 'bc-card-preview' }, el('p', { className: 'bc-muted' }, cutOff ? t('rvt.preview.cutoff') : t('rvt.preview.none')));
    }

    const kids = [];
    if (path !== null) {
      kids.push(el('p', { className: 'bc-card-back' },
        el('button', { type: 'button', className: 'bc-linkbtn', onClick: showFolder }, t('rvt.back', { name: ST.folder.scan.name })),
        el('span', { className: 'bc-sub' }, path)));
    }
    if (info.partial) {
      kids.push(el('div', { className: 'bc-card-alert', role: 'alert', 'data-partial': '' },
        el('p', {}, info.incomplete.message),
        el('p', { className: 'bc-card-alert-strong' }, t('rvt.partial.strong'))));
    }
    kids.push(el('div', { className: 'bc-card-head' }, preview, el('div', {},
      el('p', { className: 'bc-card-kind' }, info.release ? t('rvt.kind.release', { kind: info.kind, release: info.release }) : info.kind),
      el('h1', {}, title),
      sub ? el('p', { className: 'bc-card-sub' }, sub) : null,
      // (the "no one outside its maker can read" note was removed, owner 2026-10-14)
      // 0.5 SG.8 (a): the export settings that open best here, in the help panel
      el('p', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-rvt-export-help': '', onClick: () => window.cadcraftHelp?.open('rvt-to-ifc') }, t('rvt.export.help'))),
      rvtPreviewOffer(info),
    )));

    const sections = [];
    const b = info.basic;
    const lost = (name) => (info.partial && !info.recovered.some((s) => s.path === name) ? t('rvt.lost') : null);
    sections.push(section(t('rvt.sec.file'), [
      [t('rvt.f.filename'), info.fileName], [t('info.size'), bytes(info.size)], [t('info.kind'), info.kind],
      [t('info.savedin'), b.product || (info.release ? t('rvt.release', { release: info.release }) : lost('BasicFileInfo'))], [t('info.build'), b.build],
      [t('rvt.f.worksharing'), b.worksharing], [t('rvt.f.central'), b.centralPath], [t('rvt.f.lastsave'), b.lastSavePath],
      [t('rvt.f.savedby'), b.username], [t('rvt.f.locale'), b.locale], [t('rvt.f.guid'), b.documentGuid],
    ]));
    for (const g of proj?.groups || []) {
      const filled = g.params.filter((p) => !isPlaceholder(p));
      if (filled.length) sections.push(section(g.title === 'Other' ? t('rvt.sec.projinfo') : g.title, filled.map((p) => [p.name, p.value])));
    }
    if (fam) {
      sections.push(section(t('rvt.sec.family'), [[t('rvt.f.name'), fam.title], [t('rvt.f.category'), fam.categories.join(', ')], [t('info.savedin'), fam.version ? t('rvt.release', { release: fam.version }) : null], [t('rvt.f.updated'), fam.updated]]));
      for (const g of fam.groups) if (g.params.length) sections.push(section(t('rvt.sec.familygroup', { group: g.title }), g.params.map((p) => [p.name, p.value])));
    }
    const refs = info.references.filter((r) => r.path || r.absolute);
    if (refs.length && path !== null) {
      const dir = path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : '';
      const WHERE = { found: t('rvt.link.found'), found_by_name: t('rvt.link.byname'), library: t('rvt.link.library'), missing: t('rvt.link.missing') };
      sections.push(el('section', { className: 'bc-card-sec' }, el('h2', {}, t('rvt.sec.links')),
        el('table', {}, el('tbody', {}, refs.map((r) => {
          const res = resolveLink(r, dir, ST.folder.index);
          return el('tr', {}, el('th', { scope: 'row' }, r.type),
            el('td', {}, r.path || r.absolute, el('span', { className: 'bc-sub' }, res.match ? t('rvt.link.at', { where: WHERE[res.status], path: res.match.path }) : WHERE[res.status])));
        })))));
    } else if (refs.length) {
      sections.push(section(t('rvt.sec.links'), refs.map((r) => [r.type, r.path || r.absolute])));
    }
    if (info.partial) {
      // Only streams with every byte present are read; the rest are named, never filled in.
      sections.push(section(t('rvt.sec.recovered'), [
        [t('rvt.f.inthefile'), t('rvt.atleast', { size: bytes(info.size), expected: bytes(info.incomplete.expectedAtLeast) })],
        [t('rvt.f.contents'), info.directory.complete ? t('rvt.contents.complete') : t('rvt.contents.partly')],
        ...(info.recovered.length ? info.recovered.map((s) => [s.path, bytes(s.size)]) : [[t('rvt.f.streams'), t('rvt.streams.none')]]),
      ]));
      sections.push(section(t('rvt.sec.missing'), info.missing.map((s) => [s.path, bytes(s.size)])));
      for (const n of info.notes) sections.push(el('p', { className: 'bc-note' }, n));
    }

    kids.push(el('div', { className: 'bc-card-grid' }, ...sections.filter(Boolean)));
    ui.card.replaceChildren(...kids);
    ui.card.scrollTop = 0;
  }

  return { openRevit };
}
