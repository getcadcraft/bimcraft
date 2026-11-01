<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * BimCraft browser UI (rendered inside app-shell.inc; $app, $__area, $__build and $__manifest are set).
 * Server-rendered: the three panels, the file picker and the empty-state instructions.
 * bimcraft.js fills the panels from the opened file. Files are read in the browser and
 * never leave the visitor's computer; nothing here posts anywhere.
 *
 *   left   open a file or folder · file/folder facts · storeys · element classes
 *   stage  toolbar (view · Edit: undo, redo, copy, paste, More menu · library) + 3D canvas (IFC) | file card (RVT/RFA) | folder report | empty state
 *   right  tabs: Properties of the picked element | Library (library-view.js: sources, cards, place/swap)
 *
 * "Edit in <drafting app>" on the 2D view: only when that app is open in this area and the build it
 * runs here takes a handed-over file (manifest "accepts": ["handoff"]; see handoff.js).
 */
Lang::use($__build); echo Lang::bootTag();   // language files (docs/LANG.md); harmless once app-shell.inc does it
$__edit = Catalog::app('cadcraft');
$__editBuild = $__edit && Catalog::openIn($__edit, $__area['key']) ? AppBuilds::resolve($__edit['slug'], $__area['key']) : null;
$__editUrl = $__editBuild && in_array('handoff', $__editBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__edit['slug'] : '';
// "Open in <detailing app>" on an IFC model (0.4 1.5): the same rule — open in this area, and its build takes a handoff.
$__detail = Catalog::app('detailcraft');
$__detailBuild = $__detail && Catalog::openIn($__detail, $__area['key']) ? AppBuilds::resolve($__detail['slug'], $__area['key']) : null;
$__detailUrl = $__detailBuild && in_array('handoff', $__detailBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__detail['slug'] : '';
// "Takeoff" (0.5 part 4 RC.8, res-ui.js): the same rule for TakeoffCraft — else the button downloads the file instead.
$__takeoff = Catalog::app('takeoffcraft');
$__takeoffBuild = $__takeoff && Catalog::openIn($__takeoff, $__area['key']) ? AppBuilds::resolve($__takeoff['slug'], $__area['key']) : null;
$__takeoffUrl = $__takeoffBuild && in_array('handoff', $__takeoffBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__takeoff['slug'] : '';
// Project bundles (0.7 BIM-BUNDLE-OPEN): a layout's PDF goes to the markup app, its DWG to the drafting app above — same rule.
$__markup = Catalog::app('markupcraft');
$__markupBuild = $__markup && Catalog::openIn($__markup, $__area['key']) ? AppBuilds::resolve($__markup['slug'], $__area['key']) : null;
$__markupUrl = $__markupBuild && in_array('handoff', $__markupBuild['manifest']['accepts'] ?? [], true) ? $__area['path'] . '/' . $__markup['slug'] : '';
// RVT preview (0.5 SG.8 b, rvt-convert.js): a spike, so the lab only — a release of this build keeps it off in /use. The
// library's pinned URL is handed to the page here, not through manifest.json (and written so the packers' vendor scan does
// not see it), so editions, the public repo and Studio never carry it before the owner's legal look (docs/spikes/rvt-preview.md).
$__rvtLib = 'rvt';
$__rvtVer = ($__area['key'] ?? '') === 'lab' ? basename((string)@readlink(dirname(__DIR__, 3) . "/vendor/$__rvtLib/current")) : '';
$__rvtPreview = $__rvtVer !== '' ? "/assets/vendor/$__rvtLib/$__rvtVer/rvt.js" : '';
?>
<main id="main" class="bc" data-bimcraft
      data-pdf-worker="<?= e($__manifest['pdfWorker'] ?? '') ?>"
      data-pdf-cmaps="<?= e($__manifest['pdfCmaps'] ?? '') ?>"
      data-pdf-fonts="<?= e($__manifest['pdfFonts'] ?? '') ?>"
      data-pdf-wasm="<?= e($__manifest['pdfWasm'] ?? '') ?>"
      data-pdf-icc="<?= e($__manifest['pdfIcc'] ?? '') ?>"<?php if ($__editUrl): ?> data-edit-url="<?= e($__editUrl) ?>" data-edit-app="<?= e($__edit['name']) ?>"<?php endif; ?><?php if ($__markupUrl): ?> data-pdf-url="<?= e($__markupUrl) ?>" data-pdf-app="<?= e($__markup['name']) ?>"<?php endif; ?><?php if ($__rvtPreview): ?> data-rvt-preview="<?= e($__rvtPreview) ?>"<?php endif; ?>>
  <aside class="bc-panel bc-left" aria-label="<?= Lang::e('qto.sp.file') ?>">
    <section class="bc-sec">
      <h2 class="bc-h"><?= Lang::e('ui.open.title') ?></h2>
      <label class="bc-drop" for="bc-file" data-drop>
        <i class="bi bi-folder2-open" aria-hidden="true"></i>
        <span class="bc-drop-main"><?= Lang::e('ui.drop.main') ?></span>
        <span class="bc-drop-sub"><?= Lang::e('ui.drop.sub') ?></span>
        <input type="file" id="bc-file" class="visually-hidden" accept=".ifc,.rvt,.rfa,.rte,.rft,.dwg,.dxf,.step,.stp,.obj,.pln,.pla,.tpl,.bpn,.ccbundle,.zip,.las,.laz,.xyz,.pts,.ply,.pcd,.ptx,.e57" data-file>
      </label>
      <button type="button" class="btn-line bc-folder-btn" data-pick-folder><i class="bi bi-folder-symlink" aria-hidden="true"></i> <?= Lang::e('ui.open.folder') ?></button>
      <?php /* The Documents panel (0.8 SU.1058, vault-08): bimcraft.js openVault, vault/vault-app.js */ ?>
      <button type="button" class="btn-line bc-folder-btn" data-vault-open><i class="bi bi-folder2-open" aria-hidden="true"></i> <?= Lang::e('sx.vault.title') ?></button>
      <?php /* Register scans (0.7 LC.3): bimcraft.js openRegister + register-ui.js; also in the Show menu once a model is open. */ ?>
      <button type="button" class="btn-line bc-folder-btn" data-cloud-register title="<?= Lang::e('reg.menu.title') ?>"><i class="bi bi-bounding-box-circles" aria-hidden="true"></i> <?= Lang::e('reg.menu') ?></button>
      <?php /* New building (0.5 part 3): bimcraft.js "New building", new-model.js */ ?>
      <button type="button" class="btn-line bc-folder-btn" data-new><i class="bi bi-building-add" aria-hidden="true"></i> <?= Lang::e('new.button') ?></button>
      <input type="file" class="visually-hidden" webkitdirectory multiple tabindex="-1" aria-hidden="true" data-folder-input>
      <input type="file" class="visually-hidden" accept=".dwg,.png,.jpg,.jpeg,.gif,.bmp,.webp,.tif,.tiff" multiple tabindex="-1" aria-hidden="true" data-xref-input>
      <div class="bc-recent" data-recent hidden>
        <p class="bc-recent-h"><?= Lang::e('ui.recent') ?></p>
        <ul></ul>
      </div>
      <?php /* recent files (host.js 1.4): the shell fills it with files it can reopen; empty = hidden */ ?>
      <div data-recent-files data-max="6"></div>
      <p class="bc-note"><i class="bi bi-hand-index" aria-hidden="true"></i> <?= Lang::e('ui.tip.drag') ?></p>
      <p class="bc-note"><i class="bi bi-shield-check" aria-hidden="true"></i> <?= Lang::e('ui.privacy') ?></p>
    </section>
    <section class="bc-sec" data-changes hidden>
      <h2 class="bc-h"><?= Lang::e('ui.changes') ?></h2>
      <ol class="bc-changes" data-change-list></ol>
      <div class="bc-change-actions">
        <button type="button" class="btn-line btn-sm-cc" data-undo disabled title="<?= Lang::e('ui.undo.title') ?>"><i class="bi bi-arrow-counterclockwise" aria-hidden="true"></i> <?= Lang::e('ui.undo') ?></button>
        <button type="button" class="btn-plot btn-sm-cc" data-save disabled title="<?= Lang::e('ui.save.title') ?>"><i class="bi bi-download" aria-hidden="true"></i><span> <?= Lang::e('ui.save') ?></span></button>
      </div>
      <p class="bc-note"><?= Lang::e('ui.save.note') ?></p>
    </section>
    <?php /* Levels (0.5 part 3, BM.2; model-ui.js renderLevels): shown while Draw is on — pick the plan's level, rename, elevation, height, add. */ ?>
    <section class="bc-sec" data-levels-sec hidden>
      <h2 class="bc-h"><?= Lang::e('model.levels') ?></h2>
      <div data-levels></div>
      <p class="bc-note"><?= Lang::e('model.levels.note') ?></p>
    </section>
    <?php /* Schedules of what was drawn (0.5 BM.7; model-schedule.js): live, one table at a time, CSV. */ ?>
    <section class="bc-sec" data-msched-sec hidden>
      <h2 class="bc-h"><?= Lang::e('model.sch.title') ?></h2>
      <label class="bc-lv-units"><span class="visually-hidden"><?= Lang::e('model.sch.which') ?></span><select class="bc-mb-select" data-msched-kind aria-label="<?= Lang::e('model.sch.which') ?>">
        <option value="doors"><?= Lang::e('model.sch.doors') ?></option>
        <option value="windows"><?= Lang::e('model.sch.windows') ?></option>
        <option value="walls"><?= Lang::e('model.sch.walls') ?></option>
        <option value="rooms"><?= Lang::e('model.sch.rooms') ?></option>
      </select></label>
      <div class="bc-msched" data-msched></div>
      <button type="button" class="btn-line btn-sm-cc" data-msched-csv><i class="bi bi-download" aria-hidden="true"></i> <?= Lang::e('model.sch.csv') ?></button>
    </section>
    <section class="bc-sec" data-file-info hidden>
      <h2 class="bc-h"><?= Lang::e('qto.sp.file') ?></h2>
      <dl class="bc-dl" data-file-dl></dl>
      <button type="button" class="bc-linkbtn bc-back" data-folder-back hidden><i class="bi bi-arrow-left" aria-hidden="true"></i> <?= Lang::e('ui.folder.back') ?></button>
    </section>
    <section class="bc-sec" data-layers hidden>
      <h2 class="bc-h"><?= Lang::e('ui.layers') ?></h2>
      <p class="bc-layer-all"><button type="button" class="bc-linkbtn" data-layers-all="1"><?= Lang::e('ui.layers.allon') ?></button> <button type="button" class="bc-linkbtn" data-layers-all="0"><?= Lang::e('ui.layers.alloff') ?></button></p>
      <ul class="bc-checks" data-layer-list></ul>
    </section>
    <?php /* 0.8 AL.6: "This file uses ..." for add-ons the open file needs (addons-file.js) */ ?>
    <div class="bc-note" data-addons-file role="status" hidden></div>
    <section class="bc-sec" data-models-sec hidden>
      <h2 class="bc-h"><?= Lang::e('fed.title') ?></h2>
      <p class="bc-note"><?= Lang::e('fed.hint') ?></p>
      <ul class="bc-models" data-model-list></ul>
      <button type="button" class="btn-line btn-sm-cc bc-model-add" data-model-add><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('fed.add') ?></button>
      <?php /* 0.8 LC.2 (teamwork_PART_4): the project's other models, opened beside this one at the offsets the project set */ ?>
      <button type="button" class="btn-line btn-sm-cc bc-model-add" data-model-team hidden title="<?= Lang::e('fed.team.title') ?>"><i class="bi bi-people" aria-hidden="true"></i> <?= Lang::e('fed.team') ?></button>
      <?php /* Compare versions (0.4 B21): shown with two models or more; bimcraft.js "Compare versions", ifc-compare.js. */ ?>
      <details class="bc-find-details" data-compare-details hidden>
        <summary class="bc-h"><?= Lang::e('cmp.title') ?></summary>
        <div data-compare></div>
      </details>
      <input type="file" class="visually-hidden" accept=".ifc" multiple tabindex="-1" aria-hidden="true" data-model-input>
    </section>
    <?php /* Linked models (0.6 DF.21, bim-draw): links-ui.js fills the list; each link is written into the model you edit. */ ?>
    <section class="bc-sec" data-links-sec hidden>
      <h2 class="bc-h"><?= Lang::e('link.title') ?></h2>
      <p class="bc-note"><?= Lang::e('link.hint') ?></p>
      <ul class="bc-models" data-links></ul>
      <button type="button" class="btn-line btn-sm-cc bc-model-add" data-link-add><i class="bi bi-link-45deg" aria-hidden="true"></i> <?= Lang::e('link.add') ?></button>
    </section>
    <section class="bc-sec" data-find-sec hidden>
      <?php /* Find (0.4 B14): built when opened (it reads every element's properties); bimcraft.js "Find". */ ?>
      <details class="bc-find-details" data-find-details>
        <summary class="bc-h"><?= Lang::e('find.title') ?></summary>
        <div data-find></div>
      </details>
    </section>
    <section class="bc-sec" data-qto-sec hidden>
      <?php /* Quantity totals (0.4 B20): built when opened; bimcraft.js "Quantity totals", ifc-qto.js. */ ?>
      <details class="bc-find-details" data-qto-details>
        <summary class="bc-h"><?= Lang::e('qto.title') ?></summary>
        <div data-qto></div>
      </details>
      <?php /* 0.8 SU.915 tags + SU.889 documents from the model (session sx-tags): tags-ui.js / doc-ui.js fill them; shown with Quantities. */ ?>
      <details class="bc-find-details" data-sx-tags-details>
        <summary class="bc-h"><?= Lang::e('sx.su915.title') ?></summary>
        <div data-sx-tags></div>
      </details>
      <?php /* 0.8 EG.59 renovation phases (session bim_PART_2): phases-ui.js fills it. */ ?>
      <details class="bc-find-details" data-eg59-details>
        <summary class="bc-h"><?= Lang::e('eg59.title') ?></summary>
        <div data-eg59></div>
      </details>
      <?php /* 0.8 EG.44 permit package (session bim_PART_2): permit-ui.js fills it. */ ?>
      <details class="bc-find-details" data-eg44-details>
        <summary class="bc-h"><?= Lang::e('eg44.title') ?></summary>
        <div data-eg44></div>
      </details>
      <?php /* 0.8 EG.60 furnish a room and EG.58 room program to massing (session bim_PART_2): design-ui.js fills them. */ ?>
      <details class="bc-find-details" data-eg60-details>
        <summary class="bc-h"><?= Lang::e('eg60.title') ?></summary>
        <div data-eg60></div>
      </details>
      <details class="bc-find-details" data-eg58-details>
        <summary class="bc-h"><?= Lang::e('eg58.title') ?></summary>
        <div data-eg58></div>
      </details>
      <?php /* 0.8 EG.48 people in the building (session bim-sim_PART_2): people-ui.js fills it. */ ?>
      <details class="bc-find-details" data-eg48-details>
        <summary class="bc-h"><?= Lang::e('eg48.title') ?></summary>
        <div data-eg48></div>
      </details>
      <?php /* 0.8 EG.49 room acoustics (session bim-sim_PART_2): acoustics-ui.js fills it. */ ?>
      <details class="bc-find-details" data-eg49-details>
        <summary class="bc-h"><?= Lang::e('eg49.title') ?></summary>
        <div data-eg49></div>
      </details>
      <?php /* 0.8 EG.47 hazard playback (session bim-sim_PART_2): hazard-ui.js fills it. */ ?>
      <details class="bc-find-details" data-eg47-details>
        <summary class="bc-h"><?= Lang::e('eg47.title') ?></summary>
        <div data-eg47></div>
      </details>
      <?php /* 0.8 EG.45 life-cycle view (session bim-sim_PART_2): lifecycle-ui.js fills it. */ ?>
      <details class="bc-find-details" data-eg45-details>
        <summary class="bc-h"><?= Lang::e('eg45.title') ?></summary>
        <div data-eg45></div>
      </details>
      <details class="bc-find-details" data-sx-docs-details>
        <summary class="bc-h"><?= Lang::e('sx.su889.title') ?></summary>
        <div data-sx-docs></div>
      </details>
    </section>
    <section class="bc-sec" data-4d-sec hidden>
      <?php /* 4D schedule (0.4 B22): built when opened; bimcraft.js "4D schedule", ifc-4d.js. */ ?>
      <details class="bc-find-details" data-4d-details>
        <summary class="bc-h"><?= Lang::e('fd.title') ?></summary>
        <input type="file" accept=".csv,.txt,.xml,.mspdi,text/csv,application/xml,text/xml" hidden data-4d-input>
        <div data-4d></div>
      </details>
    </section>
    <section class="bc-sec" data-scanprog-sec hidden>
      <?php /* Compare the scan with the model (0.8 EG.39): scan-progress-ui.js, scan-progress.js; shown while a point cloud is open. */ ?>
      <details class="bc-find-details" data-scanprog-details>
        <summary class="bc-h"><?= Lang::e('sp.title') ?></summary>
        <div data-scanprog></div>
      </details>
    </section>
    <section class="bc-sec" data-checks-sec hidden>
      <?php /* Model checks (0.4 B19): built when opened; bimcraft.js "Model checks", ifc-checks.js. */ ?>
      <details class="bc-find-details" data-checks-details>
        <summary class="bc-h"><?= Lang::e('checks.title') ?></summary>
        <div data-checks></div>
      </details>
      <?php /* Check against IDS (0.7.1 71.25): ids-ui.js + cc-ids (./ids/); the input registry's tools.ids clicks data-ids-open. */ ?>
      <details class="bc-find-details" data-ids-details>
        <summary class="bc-h"><?= Lang::e('ids.title') ?></summary>
        <div data-ids></div>
      </details>
      <button type="button" class="bc-linkbtn" data-ids-open title="<?= Lang::e('ids.menu.title') ?>"><?= Lang::e('ids.menu') ?></button>
    </section>
    <section class="bc-sec" data-clash-sec hidden>
      <?php /* Clash check (0.4 B17): built when opened; bimcraft.js "Clash check", clash.js in clash-worker.js. */ ?>
      <details class="bc-find-details" data-clash-details>
        <summary class="bc-h"><?= Lang::e('clash.title') ?></summary>
        <div data-clash></div>
      </details>
    </section>
    <section class="bc-sec" data-tree-sec hidden>
      <h2 class="bc-h" id="bc-tree-h"><?= Lang::e('tree.title') ?></h2>
      <ul class="bc-tree" data-tree aria-labelledby="bc-tree-h"></ul>
    </section>
    <section class="bc-sec" data-storeys hidden>
      <h2 class="bc-h"><?= Lang::e('ui.storeys') ?></h2>
      <ul class="bc-checks" data-storey-list></ul>
    </section>
    <section class="bc-sec" data-classes hidden>
      <h2 class="bc-h"><?= Lang::e('ui.elements') ?></h2>
      <ul class="bc-counts" data-class-list></ul>
    </section>
  </aside>

  <section class="bc-stage" aria-label="<?= Lang::e('ui.stage.label') ?>">
    <?php /* The view toolbar, built like CadCraft's .cc-tools (closing 0.7 part 2 § A, owner 2026-10-24): named groups (role=group
       + aria-label; data-tb-key = the English name, so a saved Arrange order holds in every language), each a small title
       (.bc-tool-label) over a .bc-tool-row of flat tools, icon above label. The shell's toolbar settings (icons / labels, group
       names) and Arrange the toolbar find the groups by that shape. Units come right after the Edit tools (owner 2026-10-24). */ ?>
    <div class="bc-toolbar" role="toolbar" aria-label="<?= Lang::e('ui.toolbar.view') ?>" data-toolbar hidden>
      <div class="bc-tool-group" role="group" data-tb-key="View" aria-label="<?= Lang::e('ui.tbgroup.view') ?>">
        <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('ui.tbgroup.view') ?></span>
        <div class="bc-tool-row">
          <button type="button" class="bc-tool" data-view="iso" title="<?= Lang::e('ui.view.fit.title') ?>"><i class="bi bi-box" aria-hidden="true"></i><span><?= Lang::e('ui.view.fit') ?></span></button>
          <button type="button" class="bc-tool" data-view="top" title="<?= Lang::e('ui.view.top.title') ?>"><i class="bi bi-square" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.top') ?></span></button>
          <button type="button" class="bc-tool" data-view="front" title="<?= Lang::e('ui.view.front.title') ?>"><i class="bi bi-layout-sidebar-inset" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.front') ?></span></button>
          <button type="button" class="bc-tool" data-view="side" title="<?= Lang::e('ui.view.side.title') ?>"><i class="bi bi-layout-sidebar-inset-reverse" aria-hidden="true"></i><span><?= Lang::e('ui.view.side') ?></span></button>
          <button type="button" class="bc-tool" data-toggle="edges" aria-pressed="true" title="<?= Lang::e('ui.edges.title') ?>"><i class="bi bi-bounding-box" aria-hidden="true"></i><span><?= Lang::e('ui.edges') ?></span></button>
          <button type="button" class="bc-tool" data-toggle="spaces" aria-pressed="false" title="<?= Lang::e('ui.spaces.title') ?>"><i class="bi bi-grid-3x3" aria-hidden="true"></i><span><?= Lang::e('qto.view.spaces') ?></span></button>
          <span class="bc-mb-layout" role="group" aria-label="<?= Lang::e('model.layout') ?>" data-model-layout-group hidden>
            <button type="button" class="bc-tool" data-model-layout="plan" aria-pressed="false" title="<?= Lang::e('model.layout.plan.title') ?>"><i class="bi bi-square" aria-hidden="true"></i><span><?= Lang::e('model.layout.plan') ?></span></button>
            <button type="button" class="bc-tool" data-model-layout="split" aria-pressed="false" title="<?= Lang::e('model.layout.split.title') ?>"><i class="bi bi-layout-split" aria-hidden="true"></i><span><?= Lang::e('model.layout.split') ?></span></button>
            <button type="button" class="bc-tool" data-model-layout="3d" aria-pressed="true" title="<?= Lang::e('model.layout.3d.title') ?>"><i class="bi bi-box" aria-hidden="true"></i><span><?= Lang::e('model.layout.3d') ?></span></button>
          </span>
        </div>

      </div>
      <?php /* Edit: bimcraft.js (search "Edit menu") keeps aria-disabled and each title (the reason when it cannot act) up to date. */ ?>
      <div class="bc-tool-group" role="group" data-tb-key="Edit" aria-label="<?= Lang::e('ui.tbgroup.edit') ?>">
        <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('ui.tbgroup.edit') ?></span>
        <div class="bc-tool-row">
          <button type="button" class="bc-tool" data-act="undo" title="<?= Lang::e('ui.undo.title') ?>"><i class="bi bi-arrow-counterclockwise" aria-hidden="true"></i><span><?= Lang::e('ui.undo') ?></span></button>
          <button type="button" class="bc-tool" data-act="redo" title="<?= Lang::e('ui.redo.title') ?>"><i class="bi bi-arrow-clockwise" aria-hidden="true"></i><span><?= Lang::e('ui.redo') ?></span></button>
          <button type="button" class="bc-tool" data-act="copy" title="<?= Lang::e('edit.copy.title') ?>"><i class="bi bi-copy" aria-hidden="true"></i><span><?= Lang::e('ui.copy') ?></span></button>
          <button type="button" class="bc-tool" data-act="paste" title="<?= Lang::e('edit.paste.title') ?>"><i class="bi bi-clipboard-plus" aria-hidden="true"></i><span><?= Lang::e('ui.paste') ?></span></button>
          <details class="bc-menu" data-edit-menu>
            <summary class="bc-tool" title="<?= Lang::e('ui.more.title') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('ui.more') ?></span></summary>
            <div class="bc-menu-list" role="menu" aria-label="<?= Lang::e('ui.more.label') ?>">
              <button type="button" role="menuitem" data-act="cut"><?= Lang::e('ui.cut') ?> <kbd>Ctrl+X</kbd></button>
              <button type="button" role="menuitem" data-act="copy"><?= Lang::e('ui.copy') ?> <kbd>Ctrl+C</kbd></button>
              <button type="button" role="menuitem" data-act="paste"><?= Lang::e('ui.paste') ?> <kbd>Ctrl+V</kbd></button>
              <button type="button" role="menuitem" data-act="paste-in-place"><?= Lang::e('ui.paste.inplace') ?> <kbd>Ctrl+Shift+V</kbd></button>
              <button type="button" role="menuitem" data-act="duplicate"><?= Lang::e('ui.duplicate') ?> <kbd>Ctrl+D</kbd></button>
              <button type="button" role="menuitem" data-act="delete"><?= Lang::e('ui.delete') ?> <kbd>Delete</kbd></button>
              <hr>
              <button type="button" role="menuitem" data-act="select-all"><?= Lang::e('ui.selectall') ?> <kbd>Ctrl+A</kbd></button>
              <button type="button" role="menuitem" data-act="select-none"><?= Lang::e('ui.selectnone') ?> <kbd>Esc</kbd></button>
            </div>
          </details>
        </div>
      </div>
      <?php /* Units (yisraelk's PR #4) open the Model group, right after the Edit tools. Arrange keys it by its select's data-model-units. */ ?>
      <?php /* Model (0.5 part 3, track BM; model-ui.js): Draw opens the plan view of a level beside the 3D view, with the building tools. */ ?>
      <div class="bc-tool-group" role="group" data-tb-key="Model" aria-label="<?= Lang::e('ui.tbgroup.model') ?>">
        <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('ui.tbgroup.model') ?></span>
        <div class="bc-tool-row">
          <label class="bc-global-units"><span><?= Lang::e('model.units') ?></span> <select class="bc-mb-select" data-model-units aria-label="<?= Lang::e('model.units') ?>">
            <option value="ftin"><?= Lang::e('model.units.ftin') ?></option>
            <option value="in"><?= Lang::e('model.units.in') ?></option>
            <option value="ftdec"><?= Lang::e('model.units.ftdec') ?></option>
            <option value="mm"><?= Lang::e('model.units.mm') ?></option>
            <option value="cm"><?= Lang::e('model.units.cm') ?></option>
            <option value="m"><?= Lang::e('model.units.m') ?></option>
          </select></label>
          <button type="button" class="bc-tool" data-model-toggle aria-pressed="false" title="<?= Lang::e('model.draw.title') ?>"><i class="bi bi-bricks" aria-hidden="true"></i><span><?= Lang::e('model.draw') ?></span></button>
        </div>
      </div>
      <div class="bc-tool-group" role="group" data-tb-key="Library" aria-label="<?= Lang::e('ui.tbgroup.library') ?>">
        <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('ui.tbgroup.library') ?></span>
        <div class="bc-tool-row">
          <button type="button" class="bc-tool" data-lib-tool="library" title="<?= Lang::e('ui.lib.title') ?>"><i class="bi bi-collection" aria-hidden="true"></i><span><?= Lang::e('ui.library') ?></span></button>
          <button type="button" class="bc-tool" data-lib-tool="equipment" aria-pressed="false" title="<?= Lang::e('ui.equip.title') ?>"><i class="bi bi-list-check" aria-hidden="true"></i><span><?= Lang::e('ui.equipment') ?></span></button>
          <button type="button" class="bc-tool" data-lib-tool="updates" title="<?= Lang::e('ui.updates.title') ?>"><i class="bi bi-arrow-repeat" aria-hidden="true"></i><span><?= Lang::e('ui.updates') ?></span></button>
          <button type="button" class="bc-tool" data-lib-tool="credits" title="<?= Lang::e('ui.credits.title') ?>"><i class="bi bi-c-circle" aria-hidden="true"></i><span><?= Lang::e('ui.credits') ?></span></button>
          <?php /* Symbols (0.8 GH.3-G, gh3g2_PART_3): the symbol palette from the toolbar row; symbols-ui.js wires it, same as Build > Symbol palette. */ ?>
          <button type="button" class="bc-tool" data-sym-toolbar aria-haspopup="dialog" title="<?= Lang::e('sym.open.title') ?>"><i class="bi bi-grid-3x3-gap-fill" aria-hidden="true"></i><span><?= Lang::e('sym.open') ?></span></button>
        </div>
      </div>
      <?php /* Show (0.4 B12): bimcraft.js (search "Hide and isolate") keeps aria-disabled and the titles up to date. A menu, so the toolbar keeps its two rows. */ ?>
      <div class="bc-tool-group" role="group" data-tb-key="Review" aria-label="<?= Lang::e('ui.tbgroup.review') ?>">
        <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('ui.tbgroup.review') ?></span>
        <div class="bc-tool-row">
          <details class="bc-menu" data-vis-menu>
            <summary class="bc-tool" title="<?= Lang::e('vis.menu.title') ?>"><i class="bi bi-eye" aria-hidden="true"></i><span><?= Lang::e('vis.toolbar') ?></span></summary>
            <div class="bc-menu-list" role="menu" aria-label="<?= Lang::e('vis.toolbar') ?>">
              <button type="button" role="menuitem" data-vis="hide" title="<?= Lang::e('vis.hide.title') ?>"><?= Lang::e('vis.hide') ?> <kbd>H</kbd></button>
              <button type="button" role="menuitem" data-vis="isolate" title="<?= Lang::e('vis.isolate.title') ?>"><?= Lang::e('vis.isolate') ?> <kbd>I</kbd></button>
              <button type="button" role="menuitem" data-vis="ghost" title="<?= Lang::e('vis.ghost.title') ?>"><?= Lang::e('vis.ghost') ?> <kbd>T</kbd></button>
              <button type="button" role="menuitem" data-vis="secbox" title="<?= Lang::e('vis.secbox.title') ?>"><?= Lang::e('vis.secbox') ?> <kbd>Shift+X</kbd></button><?php /* i18n-ignore: key names */ ?>
              <hr>
              <button type="button" role="menuitem" data-vis="all" title="<?= Lang::e('vis.showall.title') ?>"><?= Lang::e('vis.showall') ?> <kbd>Shift+H</kbd></button><?php /* i18n-ignore: key names */ ?>
              <hr>
              <?php /* Point clouds (0.5 SG.1): bimcraft.js "Point clouds" + cloud-ui.js (its bar is built there). In this menu, so the toolbar keeps its two rows. */ ?>
              <button type="button" role="menuitem" data-cloud-open aria-pressed="false" title="<?= Lang::e('pc.tool.title') ?>"><?= Lang::e('pc.tool') ?></button>
              <?php /* Register scans (0.7 LC.3, session scans): register-ui.js, loaded on first use. */ ?>
              <button type="button" role="menuitem" data-cloud-register title="<?= Lang::e('reg.menu.title') ?>"><?= Lang::e('reg.menu') ?></button>
              <?php /* Map layers on the ground (0.5 SG.3): bimcraft.js "Map layers" + maps-bim.js / maplayers.js. */ ?>
              <button type="button" role="menuitem" data-map-open title="<?= Lang::e('ml.bim.tool.title') ?>"><?= Lang::e('ml.bim.tool') ?></button>
            </div>
          </details>
          <button type="button" class="bc-tool" data-toggle="section" aria-pressed="false" title="<?= Lang::e('ui.section.title') ?>"><i class="bi bi-scissors" aria-hidden="true"></i><span><?= Lang::e('sec.button') ?></span></button>
          <button type="button" class="bc-tool" data-toggle="walk" aria-pressed="false" title="<?= Lang::e('walk.title') ?>"><i class="bi bi-person-walking" aria-hidden="true"></i><span><?= Lang::e('walk.button') ?></span></button>
          <button type="button" class="bc-tool" data-toggle="measure" aria-pressed="false" title="<?= Lang::e('measure.title') ?>"><i class="bi bi-rulers" aria-hidden="true"></i><span><?= Lang::e('measure.button') ?></span></button>
        </div>
      </div>
      <div class="bc-tool-group" role="group" data-tb-key="Output" aria-label="<?= Lang::e('ui.tbgroup.output') ?>">
        <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('ui.tbgroup.output') ?></span>
        <div class="bc-tool-row">
          <?php /* Render a picture (0.5 RC.11): bimcraft.js "Render a picture" → render-bim.js + the shared render/ (ModelCraft's, synced). */ ?>
          <button type="button" class="bc-tool" data-render-open title="<?= Lang::e('ui.render.title') ?>"><i class="bi bi-camera" aria-hidden="true"></i><span><?= Lang::e('ui.render') ?></span></button>
          <button type="button" class="bc-tool" data-live-open title="<?= Lang::e('rt.menu') ?>"><i class="bi bi-play-btn" aria-hidden="true"></i><span><?= Lang::e('rt.menu') ?></span></button>
          <button type="button" class="bc-tool" data-live-window title="<?= Lang::e('rt.menu.window') ?>"><i class="bi bi-window-stack" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('rt.menu.window') ?></span></button>
          <?php /* Review in VR (0.6 LC.19, session lc-model): bimcraft.js "Review in VR" → the shared xr/ (ModelCraft's, synced). */ ?>
          <button type="button" class="bc-tool" data-xr-enter aria-disabled="true" title="<?= Lang::e('ui.vr.title') ?>"><i class="bi bi-headset-vr" aria-hidden="true"></i><span><?= Lang::e('ui.vr') ?></span></button>
          <?php /* Model for rendering programs (0.6 DC.22, session bim-extra_PART_2): bimcraft.js "exportGlb" → glb-bim.js (.glb). */ ?>
          <button type="button" class="bc-tool" data-glb-export title="<?= Lang::e('glb.title') ?>"><i class="bi bi-box-arrow-up" aria-hidden="true"></i><span><?= Lang::e('glb.button') ?></span></button>
          <?php /* 0.8 DC.22: the same scene as one self-contained .gltf (Enscape's custom assets list .gltf, .obj, .fbx): bimcraft.js exportGlb('gltf') → glb-bim.js glbToGltf. */ ?>
          <button type="button" class="bc-tool" data-gltf-export title="<?= Lang::e('gltf.title') ?>"><i class="bi bi-file-earmark-code" aria-hidden="true"></i><span><?= Lang::e('gltf.button') ?></span></button>
          <?php /* Export › USD (0.7 XF.8, session usd): bimcraft.js "exportUsd" → usd-bimcraft.js on cc-usd (./usd/, lib/usd synced). */ ?>
          <button type="button" class="bc-tool" data-usd-export title="<?= Lang::e('usd.export.title') ?>"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span><?= Lang::e('usd.export.button') ?></span></button>
          <?php /* Paint materials (0.5 RC.7): bimcraft.js "Paint materials" → paint-ui-bim.js + paint-bim.js. */ ?>
          <button type="button" class="bc-tool" data-paint-open="paint" aria-pressed="false" title="<?= Lang::e('ui.paint.title') ?>"><i class="bi bi-paint-bucket" aria-hidden="true"></i><span><?= Lang::e('ui.paint') ?></span></button>
          <?php /* Views (0.5 RC.7): bimcraft.js "Views" → views-ui-bim.js + views-bim.js (saved cameras and walkthroughs in the IFC). */ ?>
          <button type="button" class="bc-tool" data-saved-views="views" aria-pressed="false" title="<?= Lang::e('ui.views.title') ?>"><i class="bi bi-camera-reels" aria-hidden="true"></i><span><?= Lang::e('ui.views') ?></span></button>
          <?php if ($__detailUrl): ?>
          <button type="button" class="bc-tool" data-handoff-ifc data-handoff-url="<?= e($__detailUrl) ?>" data-handoff-app="<?= e($__detail['name']) ?>" title="<?= Lang::e('handoff.ifc.title', ['app' => $__detail['name']]) ?>"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span><?= Lang::e('handoff.ifc.button', ['app' => $__detail['name']]) ?></span></button>
          <?php endif; ?>
        </div>
      </div>
      <input type="file" class="visually-hidden" accept=".las,.laz,.xyz,.pts,.ply,.pcd,.ptx,.e57" tabindex="-1" aria-hidden="true" data-cloud-input>
    </div>
    <?php /* Section plane (viewer3d.js setSection): bimcraft.js (search "Section plane") fills and wires it. */ ?>
    <div class="bc-sectionbar" data-sectionbar hidden>
      <span class="bc-sub"><?= Lang::e('ui.sec.cutfrom') ?></span>
      <button type="button" class="bc-tool" data-sec-axis="top" aria-pressed="true" title="<?= Lang::e('ui.sec.top.title') ?>"><i class="bi bi-square" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.top') ?></span></button>
      <button type="button" class="bc-tool" data-sec-axis="front" aria-pressed="false" title="<?= Lang::e('ui.sec.front.title') ?>"><i class="bi bi-layout-sidebar-inset" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.front') ?></span></button>
      <button type="button" class="bc-tool" data-sec-axis="side" aria-pressed="false" title="<?= Lang::e('ui.sec.side.title') ?>"><i class="bi bi-layout-sidebar-inset-reverse" aria-hidden="true"></i><span><?= Lang::e('ui.view.side') ?></span></button>
      <button type="button" class="bc-tool" data-sec-axis="box" aria-pressed="false" title="<?= Lang::e('sec.box.title') ?>"><i class="bi bi-box" aria-hidden="true"></i><span><?= Lang::e('sec.box') ?></span></button>
      <span class="bc-sec-plane" data-sec-plane>
        <label><?= Lang::e('sec.offset.label') ?> <input type="range" min="0" max="1" step="0.001" value="0.5" data-sec-range aria-describedby="bc-sec-hint"></label>
        <label><span class="visually-hidden"><?= Lang::e('sec.offset.label') ?></span><input type="text" class="bc-input" inputmode="decimal" data-sec-offset aria-describedby="bc-sec-hint"> <span data-sec-unit>m</span></label>
        <span class="bc-sub" id="bc-sec-hint" data-sec-hint><?= Lang::e('ui.sec.hint') ?></span>
        <button type="button" class="bc-tool" data-sec-flip aria-pressed="false" title="<?= Lang::e('ui.sec.flip.title') ?>"><i class="bi bi-arrow-down-up" aria-hidden="true"></i><span><?= Lang::e('ui.sec.flip') ?></span></button>
      </span>
      <?php /* Section box (0.4 B4): from / to per IFC axis, metres from the model's minimum corner; bimcraft.js "Section box". */ ?>
      <span class="bc-sec-box" data-sec-box hidden>
        <?php foreach (['x' => 'sec.box.x', 'y' => 'sec.box.y', 'z' => 'sec.box.z'] as $__ax => $__key): ?>
        <span class="bc-sec-boxrow" data-box-axis="<?= $__ax ?>"><span class="bc-sec-boxlbl"><?= Lang::e($__key) ?></span>
          <input type="range" min="0" max="1" step="0.001" value="0" data-box-from aria-label="<?= Lang::e($__key) ?> <?= Lang::e('sec.box.from') ?>">
          <input type="range" min="0" max="1" step="0.001" value="1" data-box-to aria-label="<?= Lang::e($__key) ?> <?= Lang::e('sec.box.to') ?>">
          <span class="bc-sub" data-box-val></span></span>
        <?php endforeach; ?>
        <button type="button" class="btn-line btn-sm-cc" data-sec-box-pick><?= Lang::e('sec.box.pick') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-sec-box-all><?= Lang::e('sec.box.all') ?></button>
        <?php /* Free-form volumes (0.5 WL.1; section-volume.js): several boxes (kept: inside any), tilted faces, extra planes. */ ?>
        <span class="bc-sec-cells">
          <label><span class="visually-hidden"><?= Lang::e('sec.cell.label') ?></span><select class="select-cc bc-select" data-sec-cell></select></label>
          <button type="button" class="btn-line btn-sm-cc" data-sec-cell-add title="<?= Lang::e('sec.cell.add.title') ?>"><?= Lang::e('sec.cell.add') ?></button>
          <button type="button" class="btn-line btn-sm-cc" data-sec-cell-remove hidden><?= Lang::e('sec.cell.remove') ?></button>
        </span>
        <details class="bc-sec-shape" data-sec-shape>
          <summary><?= Lang::e('sec.shape') ?></summary>
          <span class="bc-sec-shape-body">
            <span class="bc-sec-tilt">
              <label><?= Lang::e('sec.tilt.face') ?> <select class="select-cc bc-select" data-sec-tilt-face>
                <?php foreach (['x0', 'x1', 'y0', 'y1', 'z0', 'z1'] as $__f): ?><option value="<?= $__f ?>"><?= Lang::e('sec.face.' . $__f) ?></option><?php endforeach; ?>
              </select></label>
              <label><span data-sec-tilt-alabel></span> <input type="number" class="bc-input bc-num" min="-80" max="80" step="1" value="0" data-sec-tilt-a> °</label>
              <label><span data-sec-tilt-blabel></span> <input type="number" class="bc-input bc-num" min="-80" max="80" step="1" value="0" data-sec-tilt-b> °</label>
              <button type="button" class="btn-line btn-sm-cc" data-sec-tilt-level title="<?= Lang::e('sec.tilt.level.title') ?>"><?= Lang::e('sec.tilt.level') ?></button>
            </span>
            <span class="bc-sec-planes" data-sec-planes></span>
            <button type="button" class="btn-line btn-sm-cc" data-sec-plane-add title="<?= Lang::e('sec.plane.add.title') ?>"><?= Lang::e('sec.plane.add') ?></button>
            <span class="bc-sub" data-sec-shape-note></span>
          </span>
        </details>
      </span>
      <?php /* Sections square to a building turned in its site (0.5 BM.9): shown when the model's walls run at an angle to its axes. */ ?>
      <button type="button" class="bc-tool" data-sec-turn aria-pressed="false" hidden title="<?= Lang::e('sec.turn.title') ?>"><i class="bi bi-bounding-box-circles" aria-hidden="true"></i><span><?= Lang::e('sec.turn') ?></span></button>
      <button type="button" class="bc-tool" data-sec-fill aria-pressed="true" title="<?= Lang::e('sec.fill.title') ?>"><i class="bi bi-square-fill" aria-hidden="true"></i><span><?= Lang::e('sec.fill') ?></span></button>
      <button type="button" class="btn-line btn-sm-cc" data-sec-off><?= Lang::e('color.off') ?></button>
    </div>
    <div class="bc-placebar" data-placebar hidden>
      <p class="bc-placebar-what"><span data-place-name></span> <span class="bc-sub" data-place-hint><?= Lang::e('ui.place.hint') ?></span></p>
      <div class="bc-placebar-row">
        <label><?= Lang::e('qto.sp.storey') ?> <select class="select-cc" data-place-storey></select></label>
        <label><?= Lang::e('ui.place.xy') ?> <input type="text" class="bc-input" data-place-xy inputmode="decimal" placeholder="1200, 3400" size="14"></label>
        <button type="button" class="btn-line btn-sm-cc" data-place-typed><?= Lang::e('ui.place.here') ?></button>
        <button type="button" class="bc-tool" data-place-snap aria-pressed="false" title="<?= Lang::e('ui.place.snap.title') ?>"><i class="bi bi-magnet" aria-hidden="true"></i><span><?= Lang::e('ui.place.snap') ?></span></button>
        <?php /* 0.6 DC.117 (bim-views_PART_2): on the floor, or at the ceiling (a light: its top at the ceiling's underside) */ ?>
        <label><?= Lang::e('ui.place.mount') ?> <select class="select-cc" data-place-mount><option value="floor"><?= Lang::e('ui.place.mount.floor') ?></option><option value="ceiling"><?= Lang::e('ui.place.mount.ceiling') ?></option></select></label>
        <span class="bc-placebar-xy" data-place-at aria-live="polite"></span>
        <button type="button" class="bc-tool" data-place-turn title="<?= Lang::e('place.turn.title') ?>"><i class="bi bi-arrow-clockwise" aria-hidden="true"></i><span><?= Lang::e('place.turn') ?></span></button>
        <button type="button" class="btn-line btn-sm-cc" data-place-stop><?= Lang::e('ui.place.stop') ?></button>
      </div>
    </div>

    <div class="bc-equip bc-ifc-equip" data-ifc-equip hidden></div>

    <div class="bc-canvas" data-canvas-wrap hidden><canvas data-canvas aria-label="<?= Lang::e('ui.canvas.label') ?>"></canvas><div class="bc-measure-labels" data-measure-labels aria-hidden="true"></div>
      <?php /* Display mode (GH.3-B, 0.8): three buttons beside the view cube (they were a drop-down); bimcraft.js setDisplayMode, input commands view.display.* click them. */ ?>
      <div class="bc-display-mode" role="group" aria-label="<?= Lang::e('view.display') ?>" data-display-mode>
        <button type="button" class="bc-tool" data-display-set="shaded" aria-pressed="false" title="<?= Lang::e('view.display.shaded') ?>" aria-label="<?= Lang::e('view.display.shaded') ?>"><i class="bi bi-hexagon-fill" aria-hidden="true"></i></button>
        <button type="button" class="bc-tool" data-display-set="edges" aria-pressed="true" title="<?= Lang::e('view.display.edges') ?>" aria-label="<?= Lang::e('view.display.edges') ?>"><i class="bi bi-hexagon-half" aria-hidden="true"></i></button>
        <button type="button" class="bc-tool" data-display-set="wireframe" aria-pressed="false" title="<?= Lang::e('view.display.wireframe') ?>" aria-label="<?= Lang::e('view.display.wireframe') ?>"><i class="bi bi-hexagon" aria-hidden="true"></i></button>
      </div>
    </div>
    <?php /* Plan view + model bar (0.5 part 3, track BM): model-ui.js / model-planview.js. Beside the 3D view (Split) or alone (Plan). */ ?>
    <div class="bc-plan" data-plan-wrap hidden>
      <canvas data-plan-canvas aria-label="<?= Lang::e('model.plan.label') ?>"></canvas>
      <div class="bc-modelbar" role="toolbar" aria-label="<?= Lang::e('model.bar.label') ?>" data-modelbar data-shell-tear>
        <?php /* The Draw bar's first row in CadCraft's toolbar shape (closing 0.7 part 2 § A): named groups, each a small title over
           a row of flat tools, icon above label. Hooks unchanged; wall-assemblies-ui.js fills the Library row ([data-mb-library]). */ ?>
        <div class="bc-modelbar-row bc-mb-groups">
          <div class="bc-tool-group" role="group" data-tb-key="View" aria-label="<?= Lang::e('model.bar.group.view') ?>">
            <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('model.bar.group.view') ?></span>
            <div class="bc-tool-row">
              <label><span class="visually-hidden"><?= Lang::e('model.level') ?></span><select class="bc-mb-select" data-model-level aria-label="<?= Lang::e('model.level') ?>"></select></label>
              <?php /* 0.6 DC.117 (bim-views_PART_2): the level's floor plan or its reflected ceiling plan */ ?>
              <label><span class="visually-hidden"><?= Lang::e('model.viewkind') ?></span><select class="bc-mb-select" data-model-viewkind aria-label="<?= Lang::e('model.viewkind') ?>"><option value="plan"><?= Lang::e('model.viewkind.plan') ?></option><option value="rcp"><?= Lang::e('model.viewkind.rcp') ?></option></select></label>
              <?php /* dimensions, print, sheets, takeoff, fit: the plan's own (the toolbox layout moves this span to its Document slot) */ ?>
              <span class="bc-mb-right">
                <button type="button" class="bc-tool" data-model-dims aria-pressed="true" title="<?= Lang::e('model.dims.title') ?>"><i class="bi bi-arrows" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('model.dims') ?></span></button>
                <button type="button" class="bc-tool" data-model-print title="<?= Lang::e('model.print.title') ?>"><i class="bi bi-printer" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('model.print') ?></span></button>
                <button type="button" class="bc-tool" data-res-sheetsopen title="<?= Lang::e('res.sh.open.title') ?>"><i class="bi bi-files" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('res.sh.title') ?></span></button>
                <button type="button" class="bc-tool" data-res-takeoff data-handoff-url="<?= e($__takeoffUrl) ?>" title="<?= Lang::e('res.to.title') ?>"><i class="bi bi-calculator" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('res.to.button') ?></span></button>
                <button type="button" class="bc-tool" data-model-fit title="<?= Lang::e('model.fit.title') ?>"><i class="bi bi-arrows-fullscreen" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('model.fit') ?></span></button>
              </span>
            </div>
          </div>
          <div class="bc-mb-tools">
            <div class="bc-tool-group" role="group" data-tb-key="Draw" aria-label="<?= Lang::e('model.bar.group.draw') ?>">
              <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('model.bar.group.draw') ?></span>
              <div class="bc-tool-row">
                <button type="button" class="bc-tool" data-mtool="select" aria-pressed="true" title="<?= Lang::e('model.tool.select.title') ?>"><i class="bi bi-cursor" aria-hidden="true"></i><span><?= Lang::e('model.tool.select') ?></span></button>
                <button type="button" class="bc-tool" data-mtool="wall" aria-pressed="false" title="<?= Lang::e('model.tool.wall.title') ?>"><i class="bi bi-bricks" aria-hidden="true"></i><span><?= Lang::e('model.tool.wall') ?></span></button>
                <button type="button" class="bc-tool" data-mtool="door" aria-pressed="false" title="<?= Lang::e('model.tool.door.title') ?>"><i class="bi bi-door-open" aria-hidden="true"></i><span><?= Lang::e('model.tool.door') ?></span></button>
                <button type="button" class="bc-tool" data-mtool="window" aria-pressed="false" title="<?= Lang::e('model.tool.window.title') ?>"><i class="bi bi-window" aria-hidden="true"></i><span><?= Lang::e('model.tool.window') ?></span></button>
                <button type="button" class="bc-tool" data-mtool="floor" aria-pressed="false" title="<?= Lang::e('model.tool.floor.title') ?>"><i class="bi bi-layers" aria-hidden="true"></i><span><?= Lang::e('model.tool.floor') ?></span></button>
                <button type="button" class="bc-tool" data-mtool="ceiling" aria-pressed="false" title="<?= Lang::e('model.tool.ceiling.title') ?>"><i class="bi bi-layers-half" aria-hidden="true"></i><span><?= Lang::e('model.tool.ceiling') ?></span></button>
                <button type="button" class="bc-tool" data-mtool="roof" aria-pressed="false" title="<?= Lang::e('model.tool.roof.title') ?>"><i class="bi bi-house" aria-hidden="true"></i><span><?= Lang::e('model.tool.roof') ?></span></button>
                <button type="button" class="bc-tool" data-mtool="electrical" aria-pressed="false" title="<?= Lang::e('res.tool.electrical.title') ?>"><i class="bi bi-plug" aria-hidden="true"></i><span><?= Lang::e('res.tool.electrical') ?></span></button>
                <?php /* The residential tools (0.5 part 4, track RC; res-ui.js through model-ui.js extend()). */ ?>
                <details class="bc-mb-more" data-res-tools>
                  <summary class="bc-tool" title="<?= Lang::e('res.tools.title') ?>"><i class="bi bi-tools" aria-hidden="true"></i><span><?= Lang::e('res.tools') ?></span></summary>
                  <div class="bc-mb-menu" role="group" aria-label="<?= Lang::e('res.tools') ?>">
                    <?php /* Move, Align, Distribute (0.8 D8.3, bim-08): modify-ui.js. M stays Measure; Move is Shift+M. */ ?>
                    <?php /* The symbol palette (0.8 GH.3-F/G, gh3sym_PART_3): symbols-ui.js; electrical + plumbing symbols, Build › Symbol palette. */ ?>
                    <button type="button" class="bc-tool" data-sym-open aria-haspopup="dialog" title="<?= Lang::e('sym.open.title') ?>"><i class="bi bi-grid-3x3-gap-fill" aria-hidden="true"></i><span><?= Lang::e('sym.open') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="stairsketch" aria-pressed="false" title="<?= Lang::e('model.tool.stairsketch.title') ?>"><i class="bi bi-bezier2" aria-hidden="true"></i><span><?= Lang::e('model.tool.stairsketch') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="pens" aria-pressed="false" title="<?= Lang::e('model.tool.pens.title') ?>"><i class="bi bi-pencil" aria-hidden="true"></i><span><?= Lang::e('model.tool.pens') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="traceref" aria-pressed="false" title="<?= Lang::e('model.tool.traceref.title') ?>"><i class="bi bi-layers-half" aria-hidden="true"></i><span><?= Lang::e('model.tool.traceref') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="move" aria-pressed="false" title="<?= Lang::e('model.tool.move.title') ?>"><i class="bi bi-arrows-move" aria-hidden="true"></i><span><?= Lang::e('model.tool.move') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="align" aria-pressed="false" title="<?= Lang::e('model.tool.align.title') ?>"><i class="bi bi-align-start" aria-hidden="true"></i><span><?= Lang::e('model.tool.align') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="distribute" aria-pressed="false" title="<?= Lang::e('model.tool.distribute.title') ?>"><i class="bi bi-distribute-horizontal" aria-hidden="true"></i><span><?= Lang::e('model.tool.distribute') ?></span></button>
                    <?php /* Grids and columns (0.6 DF.16, bim-draw): model-grids-ui.js through model-ui.js extend(). */ ?>
                    <button type="button" class="bc-tool" data-mtool="grid" aria-pressed="false" title="<?= Lang::e('model.tool.grid.title') ?>"><i class="bi bi-hash" aria-hidden="true"></i><span><?= Lang::e('model.tool.grid') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="column" aria-pressed="false" title="<?= Lang::e('model.tool.column.title') ?>"><i class="bi bi-square-fill" aria-hidden="true"></i><span><?= Lang::e('model.tool.column') ?></span></button>
                    <?php /* Floors of any shape and ramps (0.6 DF.18, bim-draw): model-floors-ui.js. */ ?>
                    <button type="button" class="bc-tool" data-mtool="drawfloor" aria-pressed="false" title="<?= Lang::e('model.tool.drawfloor.title') ?>"><i class="bi bi-pentagon" aria-hidden="true"></i><span><?= Lang::e('model.tool.drawfloor') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="ramp" aria-pressed="false" title="<?= Lang::e('model.tool.ramp.title') ?>"><i class="bi bi-graph-up-arrow" aria-hidden="true"></i><span><?= Lang::e('model.tool.ramp') ?></span></button>
                    <?php /* Pipes, ducts and valves (0.6 DF.29, bim-draw): mep-ui.js. */ ?>
                    <button type="button" class="bc-tool" data-mtool="pipe" aria-pressed="false" title="<?= Lang::e('mep.tool.pipe.title') ?>"><i class="bi bi-droplet" aria-hidden="true"></i><span><?= Lang::e('mep.tool.pipe') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="duct" aria-pressed="false" title="<?= Lang::e('mep.tool.duct.title') ?>"><i class="bi bi-wind" aria-hidden="true"></i><span><?= Lang::e('mep.tool.duct') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="valve" aria-pressed="false" title="<?= Lang::e('mep.tool.valve.title') ?>"><i class="bi bi-hourglass" aria-hidden="true"></i><span><?= Lang::e('mep.tool.valve') ?></span></button>
                    <?php /* Equipment with ports and the Connections check (0.7 LC.9, mep-07): mep/equip-ui.js. */ ?>
                    <button type="button" class="bc-tool" data-mtool="equip" aria-pressed="false" title="<?= Lang::e('mep.tool.equip.title') ?>"><i class="bi bi-fan" aria-hidden="true"></i><span><?= Lang::e('mep.tool.equip') ?></span></button>
                    <button type="button" class="bc-tool" data-mep-check title="<?= Lang::e('mep.tool.check.title') ?>"><i class="bi bi-diagram-3" aria-hidden="true"></i><span><?= Lang::e('mep.tool.check') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="weld" aria-pressed="false" title="<?= Lang::e('mep.tool.weld.title') ?>"><i class="bi bi-lightning-charge" aria-hidden="true"></i><span><?= Lang::e('mep.tool.weld') ?></span></button>
                    <button type="button" class="bc-tool" data-mep-ductcut title="<?= Lang::e('mep.tool.ductcut.title') ?>"><i class="bi bi-scissors" aria-hidden="true"></i><span><?= Lang::e('mep.tool.ductcut') ?></span></button>
                    <?php /* Split / VRF line sets and their size table (0.8 SU.888, sx-mep): mep/hvac-ui.js. */ ?>
                    <button type="button" class="bc-tool" data-hv-lineset title="<?= Lang::e('sx.su888.tool.lineset.title') ?>"><i class="bi bi-arrow-left-right" aria-hidden="true"></i><span><?= Lang::e('sx.su888.tool.lineset') ?></span></button>
                    <button type="button" class="bc-tool" data-hv-table title="<?= Lang::e('sx.su888.tool.table.title') ?>"><i class="bi bi-table" aria-hidden="true"></i><span><?= Lang::e('sx.su888.tool.table') ?></span></button>
                    <?php /* The site and the building on it (0.6 DF.20, bim-draw): model-site-ui.js. */ ?>
                    <button type="button" class="bc-tool" data-mtool="site" aria-pressed="false" title="<?= Lang::e('model.tool.site.title') ?>"><i class="bi bi-map" aria-hidden="true"></i><span><?= Lang::e('model.tool.site') ?></span></button>
                    <?php /* Panel shop drawings (0.8 EG.6, bim-build_PART_5): panels-ui.js — wall, floor and roof panels in timber or light-gauge steel, cut lists, PDF. */ ?>
                    <button type="button" class="bc-tool" data-panels-open title="<?= Lang::e('panels.open.title') ?>"><i class="bi bi-columns-gap" aria-hidden="true"></i><span><?= Lang::e('panels.open') ?></span></button>
                    <?php /* Families (0.6 DC.114, bim-families_PART_2): family-ui.js — every family with its sizes, and placing one on a floor. */ ?>
                    <button type="button" class="bc-tool" data-fam-list title="<?= Lang::e('fam.list.open.title') ?>"><i class="bi bi-collection" aria-hidden="true"></i><span><?= Lang::e('fam.list.open') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="family" aria-pressed="false" title="<?= Lang::e('fam.tool.title') ?>"><i class="bi bi-box" aria-hidden="true"></i><span><?= Lang::e('fam.tool') ?></span></button>
                    <?php /* From a traced drawing (0.6 DF.23, bim-draw): model-trace-ui.js opens its dialog. */ ?>
                    <button type="button" class="bc-tool" data-trace-open title="<?= Lang::e('model.trace.open.title') ?>"><i class="bi bi-file-earmark-arrow-up" aria-hidden="true"></i><span><?= Lang::e('model.trace.open') ?></span></button>
                    <?php /* Pictures as backgrounds (0.8 D8.8, d88_PART_3): picture-ui.js through model-ui.js extend(). */ ?>
                    <button type="button" class="bc-tool" data-mtool="picture" aria-pressed="false" title="<?= Lang::e('pic.tool.title') ?>"><i class="bi bi-image" aria-hidden="true"></i><span><?= Lang::e('pic.tool') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="roofplane" aria-pressed="false" title="<?= Lang::e('res.tool.roofplane.title') ?>"><i class="bi bi-triangle" aria-hidden="true"></i><span><?= Lang::e('res.tool.roofplane') ?></span></button>
                    <?php /* Dormers (0.6 round 2, bim-comforts_PART_2): comforts-ui.js through model-ui.js extend(). */ ?>
                    <button type="button" class="bc-tool" data-mtool="dormer" aria-pressed="false" title="<?= Lang::e('comforts.tool.dormer.title') ?>"><i class="bi bi-house-up" aria-hidden="true"></i><span><?= Lang::e('comforts.tool.dormer') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="foundation" aria-pressed="false" title="<?= Lang::e('res.tool.foundation.title') ?>"><i class="bi bi-bounding-box" aria-hidden="true"></i><span><?= Lang::e('res.tool.foundation') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="countertop" aria-pressed="false" title="<?= Lang::e('res.tool.countertop.title') ?>"><i class="bi bi-square-half" aria-hidden="true"></i><span><?= Lang::e('res.tool.countertop') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="stair" aria-pressed="false" title="<?= Lang::e('res.tool.stair.title') ?>"><i class="bi bi-reception-4" aria-hidden="true"></i><span><?= Lang::e('res.tool.stair') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="railing" aria-pressed="false" title="<?= Lang::e('res.tool.railing.title') ?>"><i class="bi bi-distribute-horizontal" aria-hidden="true"></i><span><?= Lang::e('res.tool.railing') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="framing" aria-pressed="false" title="<?= Lang::e('res.tool.framing.title') ?>"><i class="bi bi-grid-3x3" aria-hidden="true"></i><span><?= Lang::e('res.tool.framing') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="terrain" aria-pressed="false" title="<?= Lang::e('res.tool.terrain.title') ?>"><i class="bi bi-image-alt" aria-hidden="true"></i><span><?= Lang::e('res.tool.terrain') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="pad" aria-pressed="false" title="<?= Lang::e('res.tool.pad.title') ?>"><i class="bi bi-square" aria-hidden="true"></i><span><?= Lang::e('res.tool.pad') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="paving" aria-pressed="false" title="<?= Lang::e('res.tool.paving.title') ?>"><i class="bi bi-signpost-split" aria-hidden="true"></i><span><?= Lang::e('res.tool.paving') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="section" aria-pressed="false" title="<?= Lang::e('res.tool.section.title') ?>"><i class="bi bi-slash-square" aria-hidden="true"></i><span><?= Lang::e('res.tool.section') ?></span></button>
                  </div>
                </details>
              </div>
            </div>
            <div class="bc-tool-group" role="group" data-tb-key="Edit" aria-label="<?= Lang::e('model.bar.group.edit') ?>">
              <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('model.bar.group.edit') ?></span>
              <div class="bc-tool-row">
                <?php /* Modify (0.6 DF.17, bim-draw): model-trim-ui.js through model-ui.js extend(). */ ?>
                <details class="bc-mb-more" data-modify-tools>
                  <summary class="bc-tool" title="<?= Lang::e('model.tools.modify.title') ?>"><i class="bi bi-scissors" aria-hidden="true"></i><span><?= Lang::e('model.tools.modify') ?></span></summary>
                  <div class="bc-mb-menu" role="group" aria-label="<?= Lang::e('model.tools.modify') ?>">
                    <button type="button" class="bc-tool" data-mtool="trim" aria-pressed="false" title="<?= Lang::e('model.tool.trim.title') ?>"><i class="bi bi-arrows-collapse-vertical" aria-hidden="true"></i><span><?= Lang::e('model.tool.trim') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="corner" aria-pressed="false" title="<?= Lang::e('model.tool.corner.title') ?>"><i class="bi bi-bounding-box-circles" aria-hidden="true"></i><span><?= Lang::e('model.tool.corner') ?></span></button>
                  </div>
                </details>
                <?php /* Annotate (0.6 DC.117 (c)(d), bim-views_PART_2): a callout of this view (views-ui.js) and drafting drawn in it (drafting-ui.js). */ ?>
                <details class="bc-mb-more" data-annot-tools>
                  <summary class="bc-tool" title="<?= Lang::e('model.tools.annot.title') ?>"><i class="bi bi-pencil-square" aria-hidden="true"></i><span><?= Lang::e('model.tools.annot') ?></span></summary>
                  <div class="bc-mb-menu" role="group" aria-label="<?= Lang::e('model.tools.annot') ?>">
                    <button type="button" class="bc-tool" data-mtool="callout" aria-pressed="false" title="<?= Lang::e('model.tool.callout.title') ?>"><i class="bi bi-zoom-in" aria-hidden="true"></i><span><?= Lang::e('model.tool.callout') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="dline" aria-pressed="false" title="<?= Lang::e('model.tool.dline.title') ?>"><i class="bi bi-slash-lg" aria-hidden="true"></i><span><?= Lang::e('model.tool.dline') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="dpoly" aria-pressed="false" title="<?= Lang::e('model.tool.dpoly.title') ?>"><i class="bi bi-activity" aria-hidden="true"></i><span><?= Lang::e('model.tool.dpoly') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="drect" aria-pressed="false" title="<?= Lang::e('model.tool.drect.title') ?>"><i class="bi bi-square" aria-hidden="true"></i><span><?= Lang::e('model.tool.drect') ?></span></button>
                    <button type="button" class="bc-tool" data-mtool="dhatch" aria-pressed="false" title="<?= Lang::e('model.tool.dhatch.title') ?>"><i class="bi bi-grid-3x3-gap" aria-hidden="true"></i><span><?= Lang::e('model.tool.dhatch') ?></span></button>
                  </div>
                </details>
                <?php /* A point cloud's slice on the plan (0.6 DF.22, bim-draw): cloud-slice-ui.js shows this menu while a cloud is open. */ ?>
                <details class="bc-mb-more" data-scan-tools hidden>
                  <summary class="bc-tool" title="<?= Lang::e('model.scan.title') ?>"><i class="bi bi-cloud-haze2" aria-hidden="true"></i><span><?= Lang::e('model.scan') ?></span></summary>
                  <div class="bc-mb-menu" role="group" aria-label="<?= Lang::e('model.scan') ?>">
                    <button type="button" class="bc-tool" data-scan-slice aria-pressed="true"><span><?= Lang::e('model.scan.slice') ?></span></button>
                    <label class="bc-mb-field"><span><?= Lang::e('model.scan.thick') ?></span> <input type="text" class="bc-input bc-num" data-scan-thick size="6"></label>
                    <button type="button" class="bc-tool" data-scan-floor title="<?= Lang::e('model.scan.floor.title') ?>"><span><?= Lang::e('model.scan.floor') ?></span></button>
                    <button type="button" class="bc-tool" data-scan-square title="<?= Lang::e('model.scan.square.title') ?>"><span><?= Lang::e('model.scan.square') ?></span></button>
                    <button type="button" class="bc-tool" data-scan-reset><span><?= Lang::e('model.scan.resetbtn') ?></span></button>
                    <?php /* 0.8 EG.37 (spikes_PART_4): walls and doors proposed from the scan's slice; the person keeps what is right */ ?>
                    <button type="button" class="bc-tool" data-scan-propose title="<?= Lang::e('model.scan.propose.title') ?>"><span><?= Lang::e('model.scan.propose') ?></span></button>
                    <div class="bc-scan-list" data-scan-list hidden></div>
                  </div>
                </details>
              </div>
            </div>
            <div class="bc-tool-group" role="group" data-tb-key="Library" aria-label="<?= Lang::e('model.bar.group.library') ?>">
              <span class="bc-tool-label" aria-hidden="true"><?= Lang::e('model.bar.group.library') ?></span>
              <div class="bc-tool-row" data-mb-library></div>
            </div>
          </div>
        </div>
        <div class="bc-modelbar-row" data-mopts="wall" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.wall.type') ?></span><select class="bc-mb-select" data-model-walltype aria-label="<?= Lang::e('model.wall.type') ?>"></select></label>
          <?php /* 0.6 round 2 (bim-comforts_PART_2): a straight or a curved wall (start, end, then a point on the arc) */ ?>
          <label><span class="visually-hidden"><?= Lang::e('comforts.wall.shape') ?></span><select class="bc-mb-select" data-model-wallshape aria-label="<?= Lang::e('comforts.wall.shape') ?>">
            <option value="straight"><?= Lang::e('comforts.wall.shape.straight') ?></option>
            <option value="arc"><?= Lang::e('comforts.wall.shape.arc') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.wall.reference') ?></span><select class="bc-mb-select" data-model-wallref aria-label="<?= Lang::e('model.wall.reference') ?>">
            <option value="center"><?= Lang::e('model.wall.ref.center') ?></option>
            <option value="inside"><?= Lang::e('model.wall.ref.inside') ?></option>
            <option value="outside"><?= Lang::e('model.wall.ref.outside') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.wall.side') ?></span><select class="bc-mb-select" data-model-wallside aria-label="<?= Lang::e('model.wall.side') ?>">
            <option value="left"><?= Lang::e('model.wall.side.left') ?></option>
            <option value="right"><?= Lang::e('model.wall.side.right') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.wall.top') ?></span><select class="bc-mb-select" data-model-walltop aria-label="<?= Lang::e('model.wall.top') ?>">
            <option value="level"><?= Lang::e('model.wall.top.level') ?></option>
            <option value="fixed"><?= Lang::e('model.wall.top.fixed') ?></option>
          </select></label>
          <input type="text" class="bc-input bc-num" data-model-wallh aria-label="<?= Lang::e('model.wall.height') ?>" size="7">
        </div>
        <?php foreach (['door', 'window'] as $__k): ?>
        <div class="bc-modelbar-row" data-mopts="<?= $__k ?>" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.ot.type') ?></span><select class="bc-mb-select" data-model-otype="<?= $__k ?>" aria-label="<?= Lang::e('model.ot.type') ?>"></select></label>
          <label><span><?= Lang::e('model.ot.w') ?></span> <input type="text" class="bc-input bc-num" data-model-ow="<?= $__k ?>" aria-label="<?= Lang::e('model.ot.width') ?>" size="7"></label>
          <label><span><?= Lang::e('model.ot.h') ?></span> <input type="text" class="bc-input bc-num" data-model-oh="<?= $__k ?>" aria-label="<?= Lang::e('model.ot.height') ?>" size="7"></label>
          <?php if ($__k === 'window'): ?><label><span><?= Lang::e('model.ot.sill') ?></span> <input type="text" class="bc-input bc-num" data-model-osill aria-label="<?= Lang::e('model.ot.sill.label') ?>" size="7"></label><?php endif; ?>
          <button type="button" class="bc-tool" data-model-flip title="<?= Lang::e('model.ot.flip.title') ?>"><i class="bi bi-symmetry-vertical" aria-hidden="true"></i><span><?= Lang::e('model.ot.flip') ?></span></button>
        </div>
        <?php endforeach; ?>
        <div class="bc-modelbar-row" data-mopts="floor" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.fl.mode') ?></span><select class="bc-mb-select" data-model-flmode="floor" aria-label="<?= Lang::e('model.fl.mode') ?>">
            <option value="room"><?= Lang::e('model.fl.room') ?></option>
            <option value="building"><?= Lang::e('model.fl.building') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.fl.kind') ?></span><select class="bc-mb-select" data-model-flkind aria-label="<?= Lang::e('model.fl.kind') ?>">
            <option value="wood"><?= Lang::e('model.floor.wood') ?></option>
            <option value="concrete"><?= Lang::e('model.floor.concrete') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.prop.thickness') ?></span> <input type="text" class="bc-input bc-num" data-model-flthick size="7"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="ceiling" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.fl.mode') ?></span><select class="bc-mb-select" data-model-flmode="ceiling" aria-label="<?= Lang::e('model.fl.mode') ?>">
            <option value="room"><?= Lang::e('model.fl.room') ?></option>
            <option value="building"><?= Lang::e('model.fl.building') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.ce.height') ?></span> <input type="text" class="bc-input bc-num" data-model-ceheight size="7"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="roof" hidden>
          <label><span><?= Lang::e('model.rf.pitch') ?></span> <input type="text" class="bc-input bc-num" data-model-rfpitch size="6"></label>
          <label><span><?= Lang::e('model.rf.overhang') ?></span> <input type="text" class="bc-input bc-num" data-model-rfover size="7"></label>
          <label><span class="visually-hidden"><?= Lang::e('model.rf.ends') ?></span><select class="bc-mb-select" data-model-rfends aria-label="<?= Lang::e('model.rf.ends') ?>">
            <option value="hip"><?= Lang::e('model.rf.hip') ?></option>
            <option value="gable-short"><?= Lang::e('model.rf.gable.short') ?></option>
            <option value="gable-long"><?= Lang::e('model.rf.gable.long') ?></option>
            <option value="shed"><?= Lang::e('res.rf.shed.near') ?></option>
          </select></label>
          <label><input type="checkbox" data-model-rffascia checked> <?= Lang::e('res.rf.fasciasoffit') ?></label>
        </div>
        <?php /* 0.6 round 2 (bim-comforts_PART_2): the Dormer tool's settings */ ?>
        <div class="bc-modelbar-row" data-mopts="dormer" hidden>
          <label><span class="visually-hidden"><?= Lang::e('comforts.dm.kind') ?></span><select class="bc-mb-select" data-cf-dkind aria-label="<?= Lang::e('comforts.dm.kind') ?>">
            <option value="gable"><?= Lang::e('comforts.dm.gable') ?></option>
            <option value="shed"><?= Lang::e('comforts.dm.shed') ?></option>
          </select></label>
          <label><span><?= Lang::e('comforts.dm.width') ?></span> <input type="text" class="bc-input bc-num" data-cf-dw size="7"></label>
          <label><span><?= Lang::e('comforts.dm.height') ?></span> <input type="text" class="bc-input bc-num" data-cf-dh size="7"></label>
          <label><span><?= Lang::e('comforts.dm.pitch') ?></span> <input type="text" class="bc-input bc-num" data-cf-dp size="6"></label>
          <label><span><?= Lang::e('comforts.dm.overhang') ?></span> <input type="text" class="bc-input bc-num" data-cf-dov size="6"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="foundation" hidden>
          <label><span class="visually-hidden"><?= Lang::e('res.fd.kind') ?></span><select class="bc-mb-select" data-res-fdkind aria-label="<?= Lang::e('res.fd.kind') ?>">
            <?php foreach (['slab', 'stemslab', 'crawl', 'basement'] as $__fk): ?><option value="<?= $__fk ?>"><?= Lang::e('res.fd.kind.' . $__fk) ?></option><?php endforeach; ?>
          </select></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="stairsketch" hidden>
          <label title="<?= Lang::e('model.stairfamily.title') ?>"><input type="checkbox" data-stairsketch-family> <span><?= Lang::e('model.stairfamily.label') ?></span></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="countertop" hidden>
          <label><span><?= Lang::e('res.ct.overhang') ?></span> <input type="text" class="bc-input bc-num" data-res-ctover size="6"></label>
          <label><span><?= Lang::e('model.prop.thickness') ?></span> <input type="text" class="bc-input bc-num" data-res-ctthick size="6"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="stair" hidden>
          <label><span class="visually-hidden"><?= Lang::e('res.st.kind') ?></span><select class="bc-mb-select" data-res-stkind aria-label="<?= Lang::e('res.st.kind') ?>">
            <?php foreach (['straight', 'l', 'u', 'winder'] as $__sk): ?><option value="<?= $__sk ?>"><?= Lang::e('res.st.kind.' . $__sk) ?></option><?php endforeach; ?>
            <option value="spiral"><?= Lang::e('comforts.st.spiral') ?></option><?php /* 0.6 round 2 (bim-comforts_PART_2) */ ?>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('res.st.turn') ?></span><select class="bc-mb-select" data-res-stturn aria-label="<?= Lang::e('res.st.turn') ?>">
            <option value="left"><?= Lang::e('res.st.turn.left') ?></option><option value="right"><?= Lang::e('res.st.turn.right') ?></option>
          </select></label>
          <label><span><?= Lang::e('res.st.width') ?></span> <input type="text" class="bc-input bc-num" data-res-stwidth size="6"></label>
          <label><span class="visually-hidden"><?= Lang::e('res.st.railings') ?></span><select class="bc-mb-select" data-res-strail aria-label="<?= Lang::e('res.st.railings') ?>">
            <?php foreach (['both', 'left', 'right', 'none'] as $__sr): ?><option value="<?= $__sr ?>"><?= Lang::e('res.st.rail.' . $__sr) ?></option><?php endforeach; ?>
          </select></label>
          <span class="bc-sub" data-res-rules-tag></span><?php /* 0.8 REG.1: where the limits come from, when a regulations add-on is on */ ?>
        </div>
        <div class="bc-modelbar-row" data-mopts="railing" hidden>
          <label><span class="visually-hidden"><?= Lang::e('res.rl.kind') ?></span><select class="bc-mb-select" data-res-rlkind aria-label="<?= Lang::e('res.rl.kind') ?>">
            <option value="guard"><?= Lang::e('res.rail.guard') ?></option><option value="handrail"><?= Lang::e('res.rail.handrail') ?></option>
          </select></label>
          <label><span><?= Lang::e('res.rl.height') ?></span> <input type="text" class="bc-input bc-num" data-res-rlheight size="6"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="framing" hidden>
          <label><span class="visually-hidden"><?= Lang::e('res.fr.spacing') ?></span><select class="bc-mb-select" data-res-frsp aria-label="<?= Lang::e('res.fr.spacing') ?>"></select></label>
          <label><?= Lang::e('res.fr.floormode') ?> <select class="bc-mb-select" data-res-frfloor><option value="lumber"><?= Lang::e('res.fr.floor.lumber') ?></option><option value="tji"><?= Lang::e('res.fr.floor.tji') ?></option></select></label>
          <label><?= Lang::e('res.fr.floordir') ?> <select class="bc-mb-select" data-res-frdir><option value="auto"><?= Lang::e('res.fr.dir.auto') ?></option><option value="x"><?= Lang::e('res.fr.dir.x') ?></option><option value="y"><?= Lang::e('res.fr.dir.y') ?></option></select></label>
          <label><span class="visually-hidden"><?= Lang::e('res.fr.corners') ?></span><select class="bc-mb-select" data-res-frcorner aria-label="<?= Lang::e('res.fr.corners') ?>">
            <option value="three-stud"><?= Lang::e('res.fr.corner.three') ?></option><option value="california"><?= Lang::e('res.fr.corner.california') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('res.fr.roofmode') ?></span><select class="bc-mb-select" data-res-frroof aria-label="<?= Lang::e('res.fr.roofmode') ?>">
            <option value="stick"><?= Lang::e('res.fr.roof.stick') ?></option><option value="truss"><?= Lang::e('res.fr.roof.truss') ?></option>
          </select></label>
          <label><input type="checkbox" data-res-frblock checked> <?= Lang::e('res.fr.blocking.on') ?></label>
          <button type="button" class="bc-tool" data-res-frall><?= Lang::e('res.fr.all') ?></button>
          <button type="button" class="bc-tool" data-res-frshow aria-pressed="true"><?= Lang::e('res.fr.show') ?></button>
          <button type="button" class="bc-tool" data-res-frsee aria-pressed="false"><?= Lang::e('res.fr.see') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="terrain" hidden>
          <label class="btn-line btn-sm-cc"><input type="file" data-res-trfile hidden accept=".csv,.txt,.xyz,.pnezd,.dxf,.dwg,.las,.laz,.tif,.tiff,.asc,.xml,.landxml"><i class="bi bi-folder2-open" aria-hidden="true"></i> <?= Lang::e('res.tr.open') ?></label>
          <label><span class="visually-hidden"><?= Lang::e('res.tr.unit') ?></span><select class="bc-mb-select" data-res-trunit aria-label="<?= Lang::e('res.tr.unit') ?>">
            <option value="ft"><?= Lang::e('res.tr.unit.ft') ?></option><option value="ftUS"><?= Lang::e('res.tr.unit.ftus') ?></option><option value="m"><?= Lang::e('res.tr.unit.m') ?></option><option value="mm"><?= Lang::e('res.tr.unit.mm') ?></option>
          </select></label>
          <span class="bc-sub"><?= Lang::e('res.tr.or') ?></span>
          <label><span><?= Lang::e('res.tr.spot') ?></span> <input type="text" class="bc-input bc-num" data-res-trz size="7"></label>
          <button type="button" class="bc-tool" data-res-trmake><?= Lang::e('res.tr.make') ?></button>
          <button type="button" class="bc-tool" data-res-trclear><?= Lang::e('res.tr.clear') ?></button>
          <button type="button" class="bc-tool" data-res-trxml title="<?= Lang::e('res.tr.xml.title') ?>"><?= Lang::e('res.tr.xml') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="pad" hidden>
          <label><span><?= Lang::e('res.pad.margin') ?></span> <input type="text" class="bc-input bc-num" data-res-padmargin size="7"></label>
          <label><span><?= Lang::e('res.pad.depth') ?></span> <input type="text" class="bc-input bc-num" data-res-paddepth size="7"></label>
          <label><span><?= Lang::e('res.pad.slope') ?></span> <input type="text" class="bc-input bc-num" data-res-padslope size="5"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="electrical" hidden>
          <label><span class="visually-hidden"><?= Lang::e('res.el.device') ?></span><select class="bc-mb-select" data-res-elkind aria-label="<?= Lang::e('res.el.device') ?>"></select></label>
          <label><span><?= Lang::e('res.el.sch.circuit') ?></span> <input type="text" class="bc-input bc-num" data-res-elcircuit size="4" maxlength="20"></label>
          <label><span><?= Lang::e('res.el.height') ?></span> <input type="text" class="bc-input bc-num" data-res-elheight size="7"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="ellink" hidden>
          <span class="bc-sub"><?= Lang::e('res.el.link.row') ?></span>
          <button type="button" class="btn-line btn-sm-cc" data-res-eldone><?= Lang::e('res.el.done') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="paving" hidden>
          <label><span class="visually-hidden"><?= Lang::e('res.hard.kind') ?></span><select class="bc-mb-select" data-res-hdkind aria-label="<?= Lang::e('res.hard.kind') ?>">
            <option value="walk"><?= Lang::e('res.hard.walk') ?></option><option value="driveway"><?= Lang::e('res.hard.driveway') ?></option><option value="patio"><?= Lang::e('res.hard.patio') ?></option>
          </select></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="grid" hidden>
          <button type="button" class="btn-line btn-sm-cc" data-grid-place><?= Lang::e('model.grid.place') ?></button>
          <label><span><?= Lang::e('model.grid.bubbles') ?></span> <select class="bc-mb-select" data-grid-bubbles></select></label>
          <span data-grid-picked hidden>
            <label><span><?= Lang::e('model.grid.tag') ?></span> <input type="text" class="bc-input bc-num" data-grid-tag size="5" maxlength="12"></label>
            <button type="button" class="btn-line btn-sm-cc" data-grid-del><?= Lang::e('model.grid.del') ?></button>
          </span>
        </div>
        <?php /* A hatch region's pattern (0.6 DC.117 (d), drafting-ui.js; the six of drafting.js PATTERNS). */ ?>
        <div class="bc-modelbar-row" data-mopts="dhatch" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.dr.pattern') ?></span><select class="bc-mb-select" data-dr-pattern aria-label="<?= Lang::e('model.dr.pattern') ?>">
            <?php foreach (['solid', 'diagonal', 'cross', 'concrete', 'insulation', 'earth'] as $__p): ?><option value="<?= $__p ?>"<?= $__p === 'diagonal' ? ' selected' : '' ?>><?= Lang::e('model.dr.pat.' . $__p) ?></option><?php endforeach; ?>
          </select></label>
          <label><span><?= Lang::e('model.dr.scale') ?></span> <input type="text" class="bc-input bc-num" data-dr-scale size="4" value="1"></label>
          <label><input type="checkbox" data-dr-room> <span><?= Lang::e('model.dr.room') ?></span></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="drawfloor" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.fl.kind') ?></span><select class="bc-mb-select" data-fl-kind aria-label="<?= Lang::e('model.fl.kind') ?>">
            <option value="concrete"><?= Lang::e('model.floor.concrete') ?></option><option value="wood"><?= Lang::e('model.floor.wood') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.fl.use') ?></span><select class="bc-mb-select" data-fl-use aria-label="<?= Lang::e('model.fl.use') ?>">
            <option value="floor"><?= Lang::e('model.fl.use.floor') ?></option><option value="landing"><?= Lang::e('model.fl.use.landing') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.fl.thick.short') ?></span> <input type="text" class="bc-input bc-num" data-fl-thick size="6" aria-label="<?= Lang::e('model.fl.thick') ?>"></label>
          <label><span><?= Lang::e('model.fl.top.short') ?></span> <input type="text" class="bc-input bc-num" data-fl-top size="6" aria-label="<?= Lang::e('model.fl.top') ?>"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="ramp" hidden>
          <label><span><?= Lang::e('model.ot.w') ?></span> <input type="text" class="bc-input bc-num" data-ramp-width size="6" aria-label="<?= Lang::e('model.ramp.width') ?>"></label>
          <label><span class="visually-hidden"><?= Lang::e('model.ramp.top') ?></span><select class="bc-mb-select" data-ramp-top aria-label="<?= Lang::e('model.ramp.top') ?>">
            <option value="level"><?= Lang::e('model.ramp.top.level') ?></option><option value="rise"><?= Lang::e('model.ramp.top.rise') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.ramp.rise') ?></span> <input type="text" class="bc-input bc-num" data-ramp-rise size="6"></label>
          <label><span class="visually-hidden"><?= Lang::e('model.ramp.by') ?></span><select class="bc-mb-select" data-ramp-by aria-label="<?= Lang::e('model.ramp.by') ?>">
            <option value="slope"><?= Lang::e('model.ramp.by.slope') ?></option><option value="length"><?= Lang::e('model.ramp.by.length') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.ramp.slope') ?></span> <input type="text" class="bc-input bc-num" data-ramp-slope size="5"></label>
        </div>
        <?php /* Pipe, duct and valve options (0.6 DF.29): mep-ui.js fills the lists. */ ?>
        <div class="bc-modelbar-row" data-mopts="pipe" hidden>
          <?php /* 0.8 SU.955 (mep-08): the model's plumbing standard; mep-ui.js fills it. */ ?>
          <label><span class="visually-hidden"><?= Lang::e('mep.std.title') ?></span><select class="bc-mb-select" data-mep-std aria-label="<?= Lang::e('mep.std.title') ?>" title="<?= Lang::e('mep.std.note') ?>"></select></label>
          <label><span class="visually-hidden"><?= Lang::e('mep.system') ?></span><select class="bc-mb-select" data-mep-sys aria-label="<?= Lang::e('mep.system') ?>"></select></label>
          <label><span class="visually-hidden"><?= Lang::e('mep.material') ?></span><select class="bc-mb-select" data-mep-mat aria-label="<?= Lang::e('mep.material') ?>"></select></label>
          <label><span class="visually-hidden"><?= Lang::e('mep.class') ?></span><select class="bc-mb-select" data-mep-cls aria-label="<?= Lang::e('mep.class') ?>"></select></label>
          <label><span class="visually-hidden"><?= Lang::e('mep.size') ?></span><select class="bc-mb-select" data-mep-size aria-label="<?= Lang::e('mep.size') ?>"></select></label>
          <label><span><?= Lang::e('mep.z.short') ?></span> <input type="text" class="bc-input bc-num" data-mep-z size="6" aria-label="<?= Lang::e('mep.z') ?>"></label>
          <label><span><?= Lang::e('mep.slope') ?></span> <input type="text" class="bc-input bc-num" data-mep-slope size="7"></label>
          <?php /* 0.8 IND.4: PCF piping component files (mep/pcf-ui.js). */ ?>
          <button type="button" class="btn-line btn-sm-cc" data-mep-pcfout title="<?= Lang::e('mep.pcf.out.title') ?>"><?= Lang::e('mep.pcf.out') ?></button>
          <button type="button" class="btn-line btn-sm-cc" data-mep-pcfin title="<?= Lang::e('mep.pcf.in.title') ?>"><?= Lang::e('mep.pcf.in') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="duct" hidden>
          <label><span class="visually-hidden"><?= Lang::e('mep.system') ?></span><select class="bc-mb-select" data-mep-dsys aria-label="<?= Lang::e('mep.system') ?>"></select></label>
          <label><span class="visually-hidden"><?= Lang::e('mep.shape') ?></span><select class="bc-mb-select" data-mep-shape aria-label="<?= Lang::e('mep.shape') ?>"></select></label>
          <label><span><?= Lang::e('model.ot.w') ?></span> <input type="text" class="bc-input bc-num" data-mep-w size="5" aria-label="<?= Lang::e('mep.width') ?>"></label>
          <label><span><?= Lang::e('model.ot.h') ?></span> <input type="text" class="bc-input bc-num" data-mep-h size="5" aria-label="<?= Lang::e('mep.height') ?>"></label>
          <label><span><?= Lang::e('mep.z.short') ?></span> <input type="text" class="bc-input bc-num" data-mep-dz size="6" aria-label="<?= Lang::e('mep.z') ?>"></label>
          <label><span><?= Lang::e('mep.airflow') ?></span> <input type="text" class="bc-input bc-num" data-mep-flow size="5"> <span class="bc-sub" data-mep-flowunit></span></label>
          <label><span><?= Lang::e('mep.rate') ?></span> <input type="text" class="bc-input bc-num" data-mep-rate size="5"> <span class="bc-sub" data-mep-rateunit></span></label>
          <button type="button" class="btn-line btn-sm-cc" data-mep-sizeit title="<?= Lang::e('mep.sizeit.title') ?>"><?= Lang::e('mep.sizeit') ?></button>
          <label><span><?= Lang::e('mep.dc.piece') ?></span> <input type="text" class="bc-input bc-num" data-mep-piece size="5"></label>
        </div>
        <div class="bc-modelbar-row" data-mopts="valve" hidden>
          <label><span class="visually-hidden"><?= Lang::e('mep.valve.kind') ?></span><select class="bc-mb-select" data-mep-valve aria-label="<?= Lang::e('mep.valve.kind') ?>"></select></label>
        </div>
        <?php /* Equipment options (0.7 LC.9): mep/equip-ui.js fills the kind list and the kind's own size fields. */ ?>
        <div class="bc-modelbar-row" data-mopts="equip" hidden>
          <label><span class="visually-hidden"><?= Lang::e('mep.eq.kind') ?></span><select class="bc-mb-select" data-eq-kind aria-label="<?= Lang::e('mep.eq.kind') ?>"></select></label>
          <span class="bc-eq-fields" data-eq-fields></span>
          <label><span><?= Lang::e('mep.z.short') ?></span> <input type="text" class="bc-input bc-num" data-eq-z size="6" aria-label="<?= Lang::e('mep.z') ?>"></label>
          <label><span><?= Lang::e('mep.eq.tag') ?></span> <input type="text" class="bc-input" data-eq-tag size="7"></label>
        </div>
        <?php /* The Connections check's list (0.7 LC.9): shown after Check connections, closed with its button. */ ?>
        <div class="bc-modelbar-row bc-mep-issues-row" data-mep-issues hidden></div>
        <div class="bc-modelbar-row" data-mopts="site" hidden>
          <span class="bc-sub" data-site-area></span>
          <span><?= Lang::e('model.site.building') ?>:</span>
          <label><span>X</span> <input type="text" class="bc-input bc-num" data-site-bx size="7" aria-label="<?= Lang::e('model.site.bx') ?>"></label><?php /* i18n-ignore: axis letter */ ?>
          <label><span>Y</span> <input type="text" class="bc-input bc-num" data-site-by size="7" aria-label="<?= Lang::e('model.site.by') ?>"></label><?php /* i18n-ignore: axis letter */ ?>
          <label><span><?= Lang::e('model.site.turn') ?></span> <input type="text" class="bc-input bc-num" data-site-bang size="5"></label>
          <button type="button" class="btn-line btn-sm-cc" data-site-place><?= Lang::e('model.site.place') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="pens" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.pens.for') ?></span><select class="bc-mb-select" data-pen-scope aria-label="<?= Lang::e('model.pens.for') ?>">
            <option value="wall"><?= Lang::e('model.pens.walls') ?></option><option value="door"><?= Lang::e('model.pens.doors') ?></option><option value="window"><?= Lang::e('model.pens.windows') ?></option>
            <option value="type"><?= Lang::e('model.pens.type') ?></option><option value="element"><?= Lang::e('model.pens.element') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.pens.weight') ?></span> <select class="bc-mb-select" data-pen-weight aria-label="<?= Lang::e('model.pens.weight') ?>"><option value="0.5">0.5</option><option value="1">1</option><option value="1.75">1.75</option><option value="2.5">2.5</option><option value="4">4</option><option value="6">6</option></select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.pens.line') ?></span><select class="bc-mb-select" data-pen-dash aria-label="<?= Lang::e('model.pens.line') ?>">
            <option value="solid"><?= Lang::e('model.pens.solid') ?></option><option value="dash"><?= Lang::e('model.pens.dash') ?></option><option value="dot"><?= Lang::e('model.pens.dot') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.pens.color') ?></span><select class="bc-mb-select" data-pen-color aria-label="<?= Lang::e('model.pens.color') ?>"><option value=""><?= Lang::e('model.pens.c.auto') ?></option><option value="--ink"><?= Lang::e('model.pens.c.ink') ?></option><option value="--ink-2"><?= Lang::e('model.pens.c.grey') ?></option><option value="--layer-red"><?= Lang::e('model.pens.c.red') ?></option><option value="--layer-blue"><?= Lang::e('model.pens.c.blue') ?></option><option value="--layer-orange"><?= Lang::e('model.pens.c.orange') ?></option><option value="--layer-magenta"><?= Lang::e('model.pens.c.magenta') ?></option><option value="--layer-ochre"><?= Lang::e('model.pens.c.ochre') ?></option><option value="--layer-green"><?= Lang::e('model.pens.c.green') ?></option><option value="--layer-violet"><?= Lang::e('model.pens.c.violet') ?></option><option value="--layer-cyan"><?= Lang::e('model.pens.c.cyan') ?></option></select></label>
          <button type="button" class="btn-line btn-sm-cc" data-pen-apply><?= Lang::e('model.pens.apply') ?></button>
          <button type="button" class="btn-line btn-sm-cc" data-pen-clear><?= Lang::e('model.pens.clear') ?></button>
          <label title="<?= Lang::e('model.pens.3d.title') ?>"><input type="checkbox" data-pen-3d> <span><?= Lang::e('model.pens.3d') ?></span></label>
          <span class="bc-sub" data-pen-count></span>
        </div>
        <div class="bc-modelbar-row" data-mopts="picture" hidden>
          <label><span class="visually-hidden"><?= Lang::e('pic.plane') ?></span><select class="bc-mb-select" data-pic-plane aria-label="<?= Lang::e('pic.plane') ?>" title="<?= Lang::e('pic.plane.title') ?>"><option value="level"><?= Lang::e('pic.plane.level') ?></option><option value="vertical"><?= Lang::e('pic.plane.vertical') ?></option></select></label>
          <label><span class="visually-hidden"><?= Lang::e('pic.secline') ?></span><select class="bc-mb-select" data-pic-secline aria-label="<?= Lang::e('pic.secline') ?>" title="<?= Lang::e('pic.secline.title') ?>"></select></label>
          <button type="button" class="btn-plot btn-sm-cc" data-pic-insert title="<?= Lang::e('pic.insert.title') ?>"><?= Lang::e('pic.insert') ?></button>
          <input type="file" accept=".png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp" hidden data-pic-file>
          <label><span class="visually-hidden"><?= Lang::e('pic.list') ?></span><select class="bc-mb-select" data-pic-list aria-label="<?= Lang::e('pic.list') ?>"></select></label>
          <button type="button" class="btn-line btn-sm-cc" data-pic-scale aria-pressed="false" title="<?= Lang::e('pic.scale.title') ?>"><?= Lang::e('pic.scale') ?></button>
          <span class="bc-sub" data-pic-dist-wrap hidden><label><span><?= Lang::e('pic.distance') ?></span> <input type="text" class="bc-input bc-num" data-pic-dist size="8" aria-label="<?= Lang::e('pic.distance') ?>"></label> <button type="button" class="btn-plot btn-sm-cc" data-pic-dist-ok><?= Lang::e('pic.apply') ?></button></span>
          <button type="button" class="btn-line btn-sm-cc" data-pic-move aria-pressed="false" title="<?= Lang::e('pic.move.title') ?>"><?= Lang::e('pic.move') ?></button>
          <label><span><?= Lang::e('pic.turn') ?></span> <input type="text" class="bc-input bc-num" data-pic-angle size="5" aria-label="<?= Lang::e('pic.turn') ?>"></label>
          <label><span><?= Lang::e('pic.fade') ?></span> <input type="number" class="bc-input bc-num" data-pic-opacity min="5" max="100" step="5" value="100" aria-label="<?= Lang::e('pic.fade') ?>"> %</label><?php /* i18n-ignore: unit */ ?>
          <label class="bc-check"><input type="checkbox" data-pic-lock> <span><?= Lang::e('pic.lock') ?></span></label>
          <label class="bc-check"><input type="checkbox" data-pic-hide> <span><?= Lang::e('pic.hide') ?></span></label>
          <button type="button" class="btn-line btn-sm-cc" data-pic-remove><?= Lang::e('pic.remove') ?></button>
          <span class="bc-sub" data-pic-v-wrap hidden>
            <label><span><?= Lang::e('pic.width') ?></span> <input type="text" class="bc-input bc-num" data-pic-width size="8" aria-label="<?= Lang::e('pic.width') ?>"></label>
            <label><span><?= Lang::e('pic.along') ?></span> <input type="text" class="bc-input bc-num" data-pic-along size="8" aria-label="<?= Lang::e('pic.along') ?>"></label>
            <label><span><?= Lang::e('pic.height') ?></span> <input type="text" class="bc-input bc-num" data-pic-height size="8" aria-label="<?= Lang::e('pic.height') ?>"></label>
          </span>
          <label class="bc-check"><input type="checkbox" data-pic-3d checked> <span><?= Lang::e('pic.show3d') ?></span></label>
          <button type="button" class="btn-line btn-sm-cc" data-pic-bundle title="<?= Lang::e('pic.bundle.title') ?>"><?= Lang::e('pic.bundle') ?></button>
          <span class="bc-sub" data-pic-count></span>
          <span class="bc-sub" data-pic-state role="status"></span>
        </div>
        <div class="bc-modelbar-row" data-mopts="traceref" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.trace.level') ?></span><select class="bc-mb-select" data-tr-level aria-label="<?= Lang::e('model.trace.level') ?>"></select></label>
          <label><span>X</span> <input type="text" class="bc-input bc-num" data-tr-x size="7" aria-label="<?= Lang::e('model.trace.x') ?>"></label><?php /* i18n-ignore: axis letter */ ?>
          <label><span>Y</span> <input type="text" class="bc-input bc-num" data-tr-y size="7" aria-label="<?= Lang::e('model.trace.y') ?>"></label><?php /* i18n-ignore: axis letter */ ?>
          <label><span><?= Lang::e('model.trace.angle') ?></span> <input type="text" class="bc-input bc-num" data-tr-angle size="5" aria-label="<?= Lang::e('model.trace.angle') ?>"></label>
          <button type="button" class="btn-line btn-sm-cc" data-tr-reset><?= Lang::e('model.trace.reset') ?></button>
          <button type="button" class="btn-line btn-sm-cc" data-tr-off><?= Lang::e('model.trace.off') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="move" hidden>
          <button type="button" class="btn-line btn-sm-cc" data-mod-copy aria-pressed="false" title="<?= Lang::e('model.move.copy.title') ?>"><?= Lang::e('model.move.copy') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="align" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.align.side') ?></span><select class="bc-mb-select" data-mod-side aria-label="<?= Lang::e('model.align.side') ?>">
            <option value="left"><?= Lang::e('model.align.left') ?></option><option value="center"><?= Lang::e('model.align.center') ?></option><option value="right"><?= Lang::e('model.align.right') ?></option>
            <option value="top"><?= Lang::e('model.align.top') ?></option><option value="middle"><?= Lang::e('model.align.middle') ?></option><option value="bottom"><?= Lang::e('model.align.bottom') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.align.to') ?></span><select class="bc-mb-select" data-mod-to aria-label="<?= Lang::e('model.align.to') ?>">
            <option value="selection"><?= Lang::e('model.align.to.selection') ?></option><option value="first"><?= Lang::e('model.align.to.first') ?></option><option value="last"><?= Lang::e('model.align.to.last') ?></option><option value="point"><?= Lang::e('model.align.to.point') ?></option>
          </select></label>
          <button type="button" class="btn-line btn-sm-cc" data-mod-apply="align"><?= Lang::e('model.align.apply') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="distribute" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.dist.axis') ?></span><select class="bc-mb-select" data-mod-axis aria-label="<?= Lang::e('model.dist.axis') ?>">
            <option value="h"><?= Lang::e('model.dist.h') ?></option><option value="v"><?= Lang::e('model.dist.v') ?></option>
          </select></label>
          <label><span class="visually-hidden"><?= Lang::e('model.dist.mode') ?></span><select class="bc-mb-select" data-mod-mode aria-label="<?= Lang::e('model.dist.mode') ?>">
            <option value="gaps"><?= Lang::e('model.dist.gaps') ?></option><option value="centers"><?= Lang::e('model.dist.centers') ?></option>
          </select></label>
          <button type="button" class="btn-line btn-sm-cc" data-mod-apply="distribute"><?= Lang::e('model.dist.apply') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="column" hidden>
          <label><span class="visually-hidden"><?= Lang::e('model.col.shape') ?></span><select class="bc-mb-select" data-col-shape aria-label="<?= Lang::e('model.col.shape') ?>">
            <option value="rect"><?= Lang::e('model.col.rect') ?></option><option value="round"><?= Lang::e('model.col.round') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.ot.w') ?></span> <input type="text" class="bc-input bc-num" data-col-width size="7" aria-label="<?= Lang::e('model.col.width') ?>"></label>
          <label><span><?= Lang::e('model.col.d') ?></span> <input type="text" class="bc-input bc-num" data-col-depth size="7" aria-label="<?= Lang::e('model.col.depth') ?>"></label>
          <label><span class="visually-hidden"><?= Lang::e('model.col.top') ?></span><select class="bc-mb-select" data-col-top aria-label="<?= Lang::e('model.col.top') ?>">
            <option value="level"><?= Lang::e('model.col.top.level') ?></option><option value="fixed"><?= Lang::e('model.col.top.fixed') ?></option>
          </select></label>
          <label><span><?= Lang::e('model.ot.h') ?></span> <input type="text" class="bc-input bc-num" data-col-height size="7" aria-label="<?= Lang::e('model.col.height') ?>"></label>
          <button type="button" class="btn-line btn-sm-cc" data-col-grid><?= Lang::e('model.col.grid') ?></button>
        </div>
        <div class="bc-modelbar-row" data-mopts="roofplane" hidden>
          <label><span><?= Lang::e('model.rf.pitch') ?></span> <input type="text" class="bc-input bc-num" data-res-rppitch size="6"></label>
          <label><span><?= Lang::e('res.rp.base') ?></span> <input type="text" class="bc-input bc-num" data-res-rpbase size="8"></label>
        </div>
        <div class="bc-modelbar-row" data-mtyped-row hidden>
          <label class="bc-mb-typed"><span><?= Lang::e('model.typed') ?></span> <input type="text" class="bc-input" data-model-typed size="12" autocomplete="off" spellcheck="false" aria-describedby="bc-model-hint"></label>
          <span class="bc-sub" id="bc-model-hint" data-model-hint aria-live="polite"></span>
        </div>
      </div>
    </div>
    <div class="bc-splitter" data-model-splitter role="separator" tabindex="0" aria-label="<?= Lang::e('model.layout.resize') ?>" aria-valuemin="20" aria-valuemax="80" aria-valuenow="50" hidden></div>
    <?php /* Sheets (0.5 part 4 RC.5; res-ui.js openSheets): the drawing set made from the model. */ ?>
    <dialog class="bc-sheets" data-res-sheets-dlg aria-labelledby="bc-sheets-h">
      <div class="bc-sheets-head">
        <h2 id="bc-sheets-h" class="bc-h"><?= Lang::e('res.sh.title') ?></h2>
        <label><span><?= Lang::e('res.sh.paper') ?></span> <select class="bc-mb-select" data-res-shpaper>
          <option value="letter"><?= Lang::e('res.sh.paper.letter') ?></option><option value="tabloid"><?= Lang::e('res.sh.paper.tabloid') ?></option><option value="archd"><?= Lang::e('res.sh.paper.archd') ?></option><option value="a3">A3</option><option value="a1">A1</option>
        </select></label>
        <button type="button" class="btn-plot btn-sm-cc" data-res-shpdf><i class="bi bi-download" aria-hidden="true"></i> <?= Lang::e('res.sh.pdf') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-res-shclose><?= Lang::e('res.sh.close') ?></button>
      </div>
      <div class="bc-sheets-body">
        <ol class="bc-sheets-list" data-res-shlist></ol>
        <div class="bc-sheets-view" data-res-shview></div>
      </div>
    </dialog>
    <?php /* Measure (0.4 B6): bimcraft.js "Measure" fills and wires it. */ ?>
    <?php /* Walk (0.4 B18): bimcraft.js "Walk" wires it. */ ?>
    <div class="bc-measurebar" data-walkbar hidden>
      <output class="bc-measure-out" data-walk-out aria-live="polite"></output>
      <label><?= Lang::e('walk.height') ?> <input type="text" class="bc-input" inputmode="decimal" size="4" value="1.6" data-walk-height> m</label>
      <label><input type="checkbox" checked data-walk-gravity> <?= Lang::e('walk.gravity') ?></label>
      <label><input type="checkbox" checked data-walk-collide> <?= Lang::e('walk.collide') ?></label>
      <span class="bc-walkpad" role="group" aria-label="<?= Lang::e('walk.pad') ?>" data-walkpad>
        <button type="button" class="bc-tool" data-walk-key="w" title="<?= Lang::e('walk.fwd') ?>"><i class="bi bi-arrow-up" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('walk.fwd') ?></span></button>
        <button type="button" class="bc-tool" data-walk-key="s" title="<?= Lang::e('walk.back') ?>"><i class="bi bi-arrow-down" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('walk.back') ?></span></button>
        <button type="button" class="bc-tool" data-walk-key="a" title="<?= Lang::e('walk.left') ?>"><i class="bi bi-arrow-left" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('walk.left') ?></span></button>
        <button type="button" class="bc-tool" data-walk-key="d" title="<?= Lang::e('walk.right') ?>"><i class="bi bi-arrow-right" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('walk.right') ?></span></button>
        <button type="button" class="bc-tool" data-walk-key="e" title="<?= Lang::e('walk.up') ?>"><i class="bi bi-chevron-double-up" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('walk.up') ?></span></button>
        <button type="button" class="bc-tool" data-walk-key="q" title="<?= Lang::e('walk.down') ?>"><i class="bi bi-chevron-double-down" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('walk.down') ?></span></button>
      </span>
      <button type="button" class="btn-line btn-sm-cc" data-walk-done><?= Lang::e('measure.done') ?></button>
    </div>
    <div class="bc-measurebar" data-measurebar hidden>
      <button type="button" class="bc-tool" data-measure-mode="distance" aria-pressed="true"><i class="bi bi-arrows" aria-hidden="true"></i><span><?= Lang::e('measure.distance') ?></span></button>
      <button type="button" class="bc-tool" data-measure-mode="area" aria-pressed="false"><i class="bi bi-bounding-box-circles" aria-hidden="true"></i><span><?= Lang::e('measure.area') ?></span></button>
      <button type="button" class="bc-tool" data-measure-mode="point" aria-pressed="false" title="<?= Lang::e('measure.point.title') ?>"><i class="bi bi-geo-alt" aria-hidden="true"></i><span><?= Lang::e('measure.point') ?></span></button>
      <?php /* GH.3-C: keep the measured segment straight along an axis (Shift does the same while held) */ ?>
      <button type="button" class="bc-tool" data-measure-ortho aria-pressed="false" title="<?= Lang::e('measure.ortho.title') ?>"><i class="bi bi-distribute-horizontal" aria-hidden="true"></i><span><?= Lang::e('measure.ortho') ?></span></button>
      <button type="button" class="btn-line btn-sm-cc" data-measure-crs title="<?= Lang::e('measure.crs.title') ?>"><i class="bi bi-globe-europe-africa" aria-hidden="true"></i> <?= Lang::e('measure.crs') ?></button>
      <button type="button" class="btn-line btn-sm-cc" data-measure-georef title="<?= Lang::e('measure.georef.title') ?>"><i class="bi bi-geo-alt" aria-hidden="true"></i> <?= Lang::e('measure.georef') ?></button>
      <output class="bc-measure-out" data-measure-out aria-live="polite"></output>
      <button type="button" class="btn-line btn-sm-cc" data-measure-copy hidden><?= Lang::e('measure.point.copy') ?></button>
      <button type="button" class="btn-line btn-sm-cc" data-measure-clear><?= Lang::e('measure.clear') ?></button>
      <button type="button" class="btn-line btn-sm-cc" data-measure-done><?= Lang::e('measure.done') ?></button>
    </div>

    <div class="bc-card" data-rvt hidden></div>

    <div class="bc-dwg" data-dwg hidden>
      <div class="bc-toolbar bc-sheets" role="toolbar" aria-label="<?= Lang::e('ui.sheets.label') ?>" data-sheet-tabs></div>
      <?php /* 3D: bimcraft.js shows this bar and the 3D canvas when the drawing is switched to 3D (dwg-view3d.js, loaded then). */ ?>
      <div class="bc-toolbar bc-sheets bc-dwg3d-bar" role="toolbar" aria-label="<?= Lang::e('ui.dwg3d.label') ?>" data-dwg3d-bar hidden>
        <button type="button" class="bc-tool" data-v3="iso" title="<?= Lang::e('ui.v3.iso.title') ?>"><i class="bi bi-box" aria-hidden="true"></i><span><?= Lang::e('ui.v3.iso') ?></span></button>
        <button type="button" class="bc-tool" data-v3="top" title="<?= Lang::e('ui.view.top.title') ?>"><i class="bi bi-square" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.top') ?></span></button>
        <button type="button" class="bc-tool" data-v3="bottom" title="<?= Lang::e('ui.v3.bottom.title') ?>"><i class="bi bi-square-fill" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.bottom') ?></span></button>
        <button type="button" class="bc-tool" data-v3="front" title="<?= Lang::e('ui.view.front.title') ?>"><i class="bi bi-layout-sidebar-inset" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.front') ?></span></button>
        <button type="button" class="bc-tool" data-v3="back" title="<?= Lang::e('ui.v3.back.title') ?>"><i class="bi bi-layout-sidebar" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.back') ?></span></button>
        <button type="button" class="bc-tool" data-v3="left" title="<?= Lang::e('ui.v3.left.title') ?>"><i class="bi bi-layout-split" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.left') ?></span></button>
        <button type="button" class="bc-tool" data-v3="right" title="<?= Lang::e('ui.v3.right.title') ?>"><i class="bi bi-layout-sidebar-inset-reverse" aria-hidden="true"></i><span><?= Lang::e('viewcube.face.right') ?></span></button>
        <span class="bc-tool-sep" aria-hidden="true"></span>
        <button type="button" class="bc-tool" data-v3="persp" aria-pressed="true" title="<?= Lang::e('ui.v3.persp.title') ?>"><i class="bi bi-camera" aria-hidden="true"></i><span><?= Lang::e('ui.v3.persp') ?></span></button>
        <button type="button" class="bc-tool" data-v3="extents" title="<?= Lang::e('ui.v3.extents.title') ?>"><i class="bi bi-arrows-fullscreen" aria-hidden="true"></i><span><?= Lang::e('ui.v3.extents') ?></span></button>
        <span class="bc-tool-sep" aria-hidden="true"></span>
        <button type="button" class="bc-tool" data-v3="section" aria-pressed="false" title="<?= Lang::e('sec.dwg.title') ?>"><i class="bi bi-scissors" aria-hidden="true"></i><span><?= Lang::e('sec.button') ?></span></button>
      </div>
      <canvas data-dwg-canvas aria-label="<?= Lang::e('ui.dwg.canvas.label') ?>"></canvas>
      <div class="bc-dwg3d" data-dwg3d hidden><canvas data-dwg3d-canvas aria-label="<?= Lang::e('ui.dwg3d.canvas.label') ?>"></canvas></div>
      <p class="bc-coords" data-coords aria-hidden="true"></p>
      <div class="bc-equip" data-equip hidden></div>
      <?php /* A view switch that takes a while (bimcraft.js working()): shown at once, visible after 0.4 s (bimcraft.css). */ ?>
      <div class="bc-busy" data-dwg-busy role="status" hidden><span class="bc-busy-spin" aria-hidden="true"></span><span><?= Lang::e('dwg.busy') ?></span></div>
    </div>

    <div class="bc-card bc-folder" data-folder hidden></div>

    <div class="bc-empty" data-empty>
      <h1 class="bc-empty-h"><?= Lang::e('ui.empty.title') ?></h1>
      <p class="bc-empty-lede"><?= Lang::e('ui.empty.lede') ?></p>
      <p class="bc-empty-cta">
        <button type="button" class="btn-plot" data-pick><i class="bi bi-file-earmark" aria-hidden="true"></i> <?= Lang::e('ui.choose.file') ?></button>
        <button type="button" class="btn-line" data-pick-folder><i class="bi bi-folder2-open" aria-hidden="true"></i> <?= Lang::e('ui.open.folder') ?></button>
        <button type="button" class="btn-line" data-new><i class="bi bi-building-add" aria-hidden="true"></i> <?= Lang::e('new.button') ?></button>
      </p>
      <ul class="bc-formats">
        <li>
          <p class="bc-fmt-name">IFC</p><?php /* i18n-ignore: file format name */ ?>
          <p><?= Lang::e('ui.fmt.ifc') ?></p>
        </li>
        <li>
          <p class="bc-fmt-name"><?= Lang::e('ui.fmt.rvt.name') ?></p>
          <p><?= Lang::e('ui.fmt.rvt') ?></p>
        </li>
        <li>
          <p class="bc-fmt-name"><?= Lang::e('ui.fmt.dwg.name') ?></p>
          <p><?= Lang::e('ui.fmt.dwg') ?></p>
        </li>
        <li>
          <p class="bc-fmt-name"><?= Lang::e('ui.fmt.folder.name') ?></p>
          <p><?= Lang::e('ui.fmt.folder') ?></p>
        </li>
      </ul>
      <noscript><p class="bc-noscript"><?= Lang::e('ui.noscript') ?></p></noscript>
    </div>

    <p class="bc-status" role="status" aria-live="polite" data-status></p>
    <div class="bc-dropveil" data-dropveil hidden><p><?= Lang::e('ui.dropveil') ?></p></div>
  </section>

  <aside class="bc-panel bc-right" aria-label="<?= Lang::e('ui.right.label') ?>">
    <?php /* an assistant is connected (0.4 X.7, AGENTS-SPEC §7): bimcraft.js fills and shows it; never over the model */ ?>
    <div class="bc-assist-banner" role="status" data-assist-banner hidden><p></p><button type="button" class="btn-line btn-sm-cc" data-assist-disconnect><?= Lang::e('assist.disconnect') ?></button></div>
    <div class="bc-rtabs" role="tablist" aria-label="<?= Lang::e('ui.right.tabs') ?>">
      <button type="button" role="tab" id="bc-tab-props" class="bc-rtab" aria-selected="true" aria-controls="bc-pane-props" data-rtab="props"><?= Lang::e('ui.properties') ?></button>
      <button type="button" role="tab" id="bc-tab-color" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-color" data-rtab="color" tabindex="-1"><?= Lang::e('color.tab') ?></button>
      <button type="button" role="tab" id="bc-tab-issues" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-issues" data-rtab="issues" tabindex="-1"><?= Lang::e('bcf.tab') ?></button>
      <button type="button" role="tab" id="bc-tab-lib" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-lib" data-rtab="library" tabindex="-1"><?= Lang::e('ui.library') ?></button>
      <button type="button" role="tab" id="bc-tab-analysis" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-analysis" data-rtab="analysis" tabindex="-1"><?= Lang::e('frame.ui.tab') ?></button>
      <button type="button" role="tab" id="bc-tab-points" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-points" data-rtab="points" tabindex="-1"><?= Lang::e('fieldpts.tab') ?></button>
      <button type="button" role="tab" id="bc-tab-assets" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-assets" data-rtab="assets" tabindex="-1"><?= Lang::e('assets.tab') ?></button>
      <button type="button" role="tab" id="bc-tab-daylight" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-daylight" data-rtab="daylight" tabindex="-1"><?= Lang::e('day.tab') ?></button>
      <?php /* 0.8 EG.1–EG.4 (mep_PART_2): the Calculations tab, mep-calc-ui.js */ ?>
      <button type="button" role="tab" id="bc-tab-calc" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-calc" data-rtab="calc" tabindex="-1"><?= Lang::e('mepc.tab') ?></button>
      <?php /* 0.8 EG.13–EG.17 (energy_PART_2's mount line 1, mounted by bim-sim_PART_2): one Energy tab holding the EnergyPlus, carbon, 5D cost and solar panels */ ?>
      <button type="button" role="tab" id="bc-tab-energy" class="bc-rtab" aria-selected="false" aria-controls="bc-pane-energy" data-rtab="energy" tabindex="-1"><?= Lang::e('energy.tab') ?></button>
    </div>
    <section class="bc-sec" id="bc-pane-props" role="tabpanel" aria-labelledby="bc-tab-props" data-rpane="props">
      <h2 class="bc-h"><?= Lang::e('ui.properties') ?></h2>
      <div data-props><p class="bc-muted"><?= Lang::e('ui.props.empty') ?></p></div>
    </section>
    <section class="bc-sec" id="bc-pane-color" role="tabpanel" aria-labelledby="bc-tab-color" data-rpane="color" hidden>
      <h2 class="bc-h"><?= Lang::e('color.title') ?></h2>
      <div data-color><p class="bc-muted"><?= Lang::e('color.needs.ifc') ?></p></div>
      <input type="file" class="visually-hidden" accept=".json,application/json" tabindex="-1" aria-hidden="true" data-color-input>
    </section>
    <section class="bc-sec" id="bc-pane-issues" role="tabpanel" aria-labelledby="bc-tab-issues" data-rpane="issues" hidden>
      <h2 class="bc-h"><?= Lang::e('bcf.title') ?></h2>
      <div data-issues><p class="bc-muted"><?= Lang::e('bcf.needs.ifc') ?></p></div>
      <input type="file" class="visually-hidden" accept=".bcf,.bcfzip" tabindex="-1" aria-hidden="true" data-bcf-input>
    </section>
    <section class="bc-sec" id="bc-pane-lib" role="tabpanel" aria-labelledby="bc-tab-lib" data-rpane="library" hidden>
      <h2 class="bc-h"><?= Lang::e('ui.library') ?></h2>
      <div data-library><p class="bc-muted"><?= Lang::e('ui.lib.nojs') ?></p></div>
    </section>
    <section class="bc-sec" id="bc-pane-analysis" role="tabpanel" aria-labelledby="bc-tab-analysis" data-rpane="analysis" hidden>
      <h2 class="bc-h"><?= Lang::e('frame.ui.title') ?></h2>
      <div data-analysis><p class="bc-muted"><?= Lang::e('frame.ui.needs-ifc') ?></p></div>
    </section>
    <section class="bc-sec" id="bc-pane-points" role="tabpanel" aria-labelledby="bc-tab-points" data-rpane="points" hidden>
      <h2 class="bc-h"><?= Lang::e('fieldpts.title') ?></h2>
      <div data-points><p class="bc-muted"><?= Lang::e('fieldpts.needs-ifc') ?></p></div>
    </section>
    <?php /* Assets (0.6 LC.12, session bim-extra_PART_2): assets-bim-ui.js + assets-bim.js — asset data and a maintenance record in the IFC. */ ?>
    <section class="bc-sec" id="bc-pane-assets" role="tabpanel" aria-labelledby="bc-tab-assets" data-rpane="assets" hidden>
      <h2 class="bc-h"><?= Lang::e('assets.title') ?></h2>
      <div data-assets><p class="bc-muted"><?= Lang::e('assets.needs-ifc') ?></p></div>
    </section>
    <?php /* Daylight (0.6 LC.20, session bim-extra_PART_2): daylight-bim-ui.js + daylight-bim.js — each room's average daylight factor. */ ?>
    <section class="bc-sec" id="bc-pane-daylight" role="tabpanel" aria-labelledby="bc-tab-daylight" data-rpane="daylight" hidden>
      <h2 class="bc-h"><?= Lang::e('day.title') ?></h2>
      <div data-daylight><p class="bc-muted"><?= Lang::e('day.needs-ifc') ?></p></div>
    </section>
    <section class="bc-sec" id="bc-pane-calc" role="tabpanel" aria-labelledby="bc-tab-calc" data-rpane="calc" hidden>
      <h2 class="bc-h"><?= Lang::e('mepc.title') ?></h2>
      <div data-mepcalc><p class="bc-muted"><?= Lang::e('mepc.needs-ifc') ?></p></div>
    </section>
    <section class="bc-sec" id="bc-pane-energy" role="tabpanel" aria-labelledby="bc-tab-energy" data-rpane="energy" hidden>
      <h2 class="bc-h"><?= Lang::e('energy.title') ?></h2>
      <div data-energy>
        <details class="bc-find-details" open><summary class="bc-h"><?= Lang::e('energy.sec.ep') ?></summary><div data-energy-ep></div></details>
        <details class="bc-find-details"><summary class="bc-h"><?= Lang::e('energy.sec.carbon') ?></summary><div data-energy-carbon></div></details>
        <details class="bc-find-details"><summary class="bc-h"><?= Lang::e('energy.sec.cost') ?></summary><div data-energy-cost></div></details>
        <details class="bc-find-details"><summary class="bc-h"><?= Lang::e('energy.sec.pv') ?></summary><div data-energy-pv></div></details>
      </div>
    </section>
  </aside>
</main>
