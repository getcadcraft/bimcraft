<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — BimCraft's own panel of the Settings dialog (core/components/app-settings.inc includes it, as the
 * "BimCraft" tab). bimcraft.js reads and stores the fields (localStorage bimcraft.settings), shows the stored values
 * each time the dialog opens, and resets them on "cc-settings-reset".
 *   bcSpaces  show rooms and spaces (IfcSpace) when a model opens            default off
 *   bcEdges   edges when a model opens: on / small models only / off          default on
 *   bcView    the view a model opens in: Fit / Top / Front / Side            default Fit
 *   bcSnap    wall snap is on when placing or pasting a library item starts   default off
 *   bcPanelFocus  opening a panel section closes the others; a lock keeps one open (0.9 FX.55)   default off
 *   bcCorner  the corner indicator in the 3D views: view cube / axis icon / none   default view cube
 *   bcBoxMargin  room left round the pick by "Section box round the pick", in mm (0.5 WL.2)   default 300
 *   bcGeoCrs  the system Measure › Location gives latitude and longitude in (0.5 WL.4): WGS 84, the file's own datum, or
 *             one of a few common geographic systems (EPSG codes); 0.8 D8.9: "Choose another system…" adds any EPSG system,
 *             UTM zone or one of the person's own as one more option                         default WGS 84
 *   bcIfcx    IFC5 alpha (IFCX) lab option: Open .ifcx and Export (0.9 SU.882)   default off
 *   bcIdsEmbed  Check against IDS: also keep the IDS text inside the IFC (0.7.1 71.25; off: only a reference, the text stays in this browser)
 *   bcAuthor  your name on BCF issues (localStorage bimcraft.author; 0.5 SI.9): signed in, [data-bc-author-account] says
 *             "From your account (<name>)" with "Use another name"; a typed name wins until cleared; not reset
 *   bcAssist, bcAssistRead, bcAssistEdit   AI assistants and scripts (0.4 X.7, AGENTS-SPEC §7): on/off, then which groups
 *             (read on, edit off when first turned on); the Activity list is filled by bimcraft.js        default off
 *   Menus, keys and mouse (0.5 track IP): the shell prints that fieldset first (app-settings.inc, manifest "input") and
 *             assets/js/app-input-ui.js fills it (localStorage bimcraft.input — not reset by "cc-settings-reset")
 *   Working style (0.9 D8.12): presets "Each view its own" / "Shared annotations and pen tables" over four defaults (work-style-ui.js)
 * The dialog is wider, in two columns: the shell's own since IP.6 (app-shell.css .shell-settings-wide).
 */
?>
<?php /* 0.9 D8.12 (bim-views-09): the working style — a preset of D8.12-A…D's defaults, each still changeable (work-style.js, work-style-ui.js).
   Names describe the way of working, never a product. Stored in localStorage bimcraft.workstyle; not reset by "cc-settings-reset" (as the layout). */ ?>
<fieldset class="shell-set bc-set-wide" data-bc-workstyle-set>
  <legend><?= Lang::e('ws9.legend') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('ws9.preset') ?>">
    <label><input type="radio" name="bcWorkStyle" value="own" data-ws9-preset="own"> <i class="bi bi-files" aria-hidden="true"></i> <?= Lang::e('ws9.own') ?></label>
    <label><input type="radio" name="bcWorkStyle" value="shared" data-ws9-preset="shared"> <i class="bi bi-link-45deg" aria-hidden="true"></i> <?= Lang::e('ws9.shared') ?></label>
    <label><input type="radio" name="bcWorkStyle" value="custom" data-ws9-preset="custom" disabled> <i class="bi bi-sliders" aria-hidden="true"></i> <?= Lang::e('ws9.custom') ?></label>
  </div>
  <p class="shell-hint-text" data-ws9-hint></p>
  <div class="shell-row"><label for="bc-ws9-dup"><?= Lang::e('ws9.dup') ?></label>
    <select id="bc-ws9-dup" class="select-cc" data-ws9="dup"><option value="own"><?= Lang::e('ws9.dup.own') ?></option><option value="linked"><?= Lang::e('ws9.dup.linked') ?></option></select></div>
  <div class="shell-row"><label for="bc-ws9-print"><?= Lang::e('ws9.print') ?></label>
    <select id="bc-ws9-print" class="select-cc" data-ws9="print"><option value="shown"><?= Lang::e('ws9.print.shown') ?></option><option value="table"><?= Lang::e('ws9.print.table') ?></option></select></div>
  <div class="shell-row"><label for="bc-ws9-count"><?= Lang::e('ws9.count') ?></label>
    <select id="bc-ws9-count" class="select-cc" data-ws9="count"><option value="reported"><?= Lang::e('ws9.count.reported') ?></option><option value="drawn"><?= Lang::e('ws9.count.drawn') ?></option></select></div>
  <div class="shell-row"><label for="bc-ws9-start"><?= Lang::e('ws9.start') ?></label>
    <select id="bc-ws9-start" class="select-cc" data-ws9="start"><option value="blank"><?= Lang::e('ws9.start.blank') ?></option><option value="template"><?= Lang::e('ws9.start.template') ?></option></select></div>
  <p class="shell-hint-text"><?= Lang::e('ws9.note') ?></p>
</fieldset>
<fieldset class="shell-set" data-bc-settings>
  <legend><?= Lang::e('set.open.legend') ?></legend>
  <label class="shell-check"><input type="checkbox" name="bcSpaces"> <?= Lang::e('ui.spaces.title') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.spaces.hint') ?></p>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.edges.label') ?>">
    <label><input type="radio" name="bcEdges" value="on"> <i class="bi bi-bounding-box" aria-hidden="true"></i> <?= Lang::e('set.edges.on') ?></label>
    <label><input type="radio" name="bcEdges" value="small"> <i class="bi bi-speedometer2" aria-hidden="true"></i> <?= Lang::e('set.edges.small') ?></label>
    <label><input type="radio" name="bcEdges" value="off"> <i class="bi bi-square" aria-hidden="true"></i> <?= Lang::e('set.edges.off') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.edges.hint') ?></p>
</fieldset>
<fieldset class="shell-set" data-bc-ids-settings>
  <legend><?= Lang::e('ids.set.legend') ?></legend>
  <label class="shell-check"><input type="checkbox" name="bcIdsEmbed"> <?= Lang::e('ids.set.embed') ?></label>
  <p class="shell-hint-text"><?= Lang::e('ids.set.embed.hint') ?></p>
</fieldset>
<?php /* IFC5 alpha (IFCX), a lab option (0.9 SU.882): bimcraft.js applyIfcxOption shows Open IFC5 alpha and Export › IFC5 alpha. Default off. */ ?>
<fieldset class="shell-set" data-bc-ifcx-settings>
  <legend><?= Lang::e('ifcx.dialog.title') ?></legend>
  <label class="shell-check"><input type="checkbox" name="bcIfcx"> <?= Lang::e('ifcx.set.label') ?></label>
  <p class="shell-hint-text"><?= Lang::e('ifcx.set.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.dwgstart') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.dwgstart') ?>">
    <label><input type="radio" name="bcDwgStart" value="3d"> <i class="bi bi-badge-3d" aria-hidden="true"></i> <?= Lang::e('set.dwgstart.3d') ?></label>
    <label><input type="radio" name="bcDwgStart" value="2d"> <i class="bi bi-bounding-box-circles" aria-hidden="true"></i> <?= Lang::e('set.dwgstart.2d') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.dwgstart.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.view') ?></legend>
  <div class="shell-seg bc-set-seg4" role="radiogroup" aria-label="<?= Lang::e('set.view') ?>">
    <label><input type="radio" name="bcView" value="iso"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('ui.view.fit') ?></label>
    <label><input type="radio" name="bcView" value="top"> <i class="bi bi-square" aria-hidden="true"></i> <?= Lang::e('viewcube.face.top') ?></label>
    <label><input type="radio" name="bcView" value="front"> <i class="bi bi-layout-sidebar-inset" aria-hidden="true"></i> <?= Lang::e('viewcube.face.front') ?></label>
    <label><input type="radio" name="bcView" value="side"> <i class="bi bi-layout-sidebar-inset-reverse" aria-hidden="true"></i> <?= Lang::e('ui.view.side') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.view.hint') ?></p>
  <p class="shell-hint-text" id="bc-set-turned-label"><strong><?= Lang::e('set.turned') ?></strong></p>
  <div class="shell-seg" role="radiogroup" aria-labelledby="bc-set-turned-label">
    <label><input type="radio" name="bcTurned" value="square"> <i class="bi bi-bounding-box-circles" aria-hidden="true"></i> <?= Lang::e('set.turned.square') ?></label>
    <label><input type="radio" name="bcTurned" value="placed"> <i class="bi bi-compass" aria-hidden="true"></i> <?= Lang::e('set.turned.placed') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.turned.hint') ?></p>
</fieldset>
<?php /* 0.9 walls-09: the wall tool's open decisions D2 and D3, as settings (wall-tools-ui.js; localStorage bimcraft.walls, per viewer) */ ?>
<fieldset class="shell-set" data-walls-settings>
  <legend><?= Lang::e('walls.set.legend') ?></legend>
  <p class="shell-hint-text" id="bc-set-wsplit-label"><strong><?= Lang::e('walls.set.split') ?></strong></p>
  <div class="shell-seg" role="radiogroup" aria-labelledby="bc-set-wsplit-label">
    <label><input type="radio" name="bcWallSplit" value="joined"> <?= Lang::e('walls.set.split.joined') ?></label>
    <label><input type="radio" name="bcWallSplit" value="free"> <?= Lang::e('walls.set.split.free') ?></label>
  </div>
  <p class="shell-hint-text" id="bc-set-wfrom-label"><strong><?= Lang::e('walls.from') ?></strong></p>
  <div class="shell-seg" role="radiogroup" aria-labelledby="bc-set-wfrom-label">
    <label><input type="radio" name="bcWallFrom" value="center"> <?= Lang::e('model.from.center') ?></label>
    <label><input type="radio" name="bcWallFrom" value="inside"> <?= Lang::e('model.from.inside') ?></label>
    <label><input type="radio" name="bcWallFrom" value="outside"> <?= Lang::e('model.from.outside') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('walls.set.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.snap.legend') ?></legend>
  <label class="shell-check"><input type="checkbox" name="bcSnap"> <?= Lang::e('set.snap') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.snap.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.panelfocus.legend') ?></legend>
  <label class="shell-check"><input type="checkbox" name="bcPanelFocus"> <?= Lang::e('set.panelfocus') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.panelfocus.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.corner') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.corner') ?>">
    <label><input type="radio" name="bcCorner" value="cube"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('viewcube.group') ?></label>
    <label><input type="radio" name="bcCorner" value="axes"> <i class="bi bi-arrows-move" aria-hidden="true"></i> <?= Lang::e('set.corner.axes') ?></label>
    <label><input type="radio" name="bcCorner" value="none"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('checks.none') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.corner.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.box.legend') ?></legend>
  <div class="shell-row">
    <label for="bc-set-box-margin"><?= Lang::e('set.box.margin') ?></label>
    <span class="bc-set-margin"><input type="number" id="bc-set-box-margin" class="bc-input" name="bcBoxMargin" min="0" max="5000" step="50" inputmode="numeric"> <?= Lang::e('set.box.mm') ?></span>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.box.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.geo.legend') ?></legend>
  <div class="shell-row">
    <label for="bc-set-geo-crs"><?= Lang::e('set.geo.crs') ?></label>
    <select id="bc-set-geo-crs" class="select-cc" name="bcGeoCrs">
      <option value="4326"><?= Lang::e('set.geo.wgs84') ?></option>
      <option value="file"><?= Lang::e('set.geo.file') ?></option>
      <?php /* i18n-ignore-start: names of geodetic systems, as EPSG writes them */ ?>
      <option value="4258">ETRS89 (EPSG:4258)</option>
      <option value="4269">NAD83 (EPSG:4269)</option>
      <option value="4283">GDA94 (EPSG:4283)</option>
      <option value="7844">GDA2020 (EPSG:7844)</option>
      <option value="4167">NZGD2000 (EPSG:4167)</option>
      <option value="6668">JGD2011 (EPSG:6668)</option>
      <option value="4490">CGCS2000 (EPSG:4490)</option>
      <?php /* i18n-ignore-end */ ?>
    </select>
    <button type="button" class="btn-line btn-sm-cc" data-bc-geo-more><?= Lang::e('set.geo.more') ?></button>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.geo.hint') ?></p>
</fieldset>
<fieldset class="shell-set" data-bc-author-set>
  <legend><?= Lang::e('set.author.legend') ?></legend>
  <div data-bc-author-account hidden>
    <p class="shell-hint-text" data-bc-author-from></p>
    <p><button type="button" class="btn-line btn-sm-cc" data-bc-author-other><?= Lang::e('set.author.other') ?></button></p>
  </div>
  <div class="shell-row" data-bc-author-row>
    <label for="bc-set-author"><?= Lang::e('set.author.label') ?></label>
    <input type="text" id="bc-set-author" class="bc-input" name="bcAuthor" maxlength="120" autocomplete="name">
    <button type="button" class="btn-line btn-sm-cc" data-bc-author-mine hidden><?= Lang::e('set.author.mine') ?></button>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.author.hint') ?></p>
</fieldset>
<fieldset class="shell-set bc-set-wide" data-bc-assist-set>
  <legend><?= Lang::e('set.assist.legend') ?></legend>
  <label class="shell-check"><input type="checkbox" name="bcAssist"> <?= Lang::e('set.assist.on') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.assist.hint') ?></p>
  <label class="shell-check bc-set-sub"><input type="checkbox" name="bcAssistRead"> <?= Lang::e('set.assist.read') ?></label>
  <label class="shell-check bc-set-sub"><input type="checkbox" name="bcAssistEdit"> <?= Lang::e('set.assist.edit') ?></label>
  <label class="shell-check bc-set-sub"><input type="checkbox" name="bcAssistSave"> <?= Lang::e('set.assist.save') ?></label>
  <label class="shell-check bc-set-sub"><input type="checkbox" name="bcAssistExport"> <?= Lang::e('set.assist.export') ?></label>
  <details class="bc-assist-log" data-bc-assist-log>
    <summary><?= Lang::e('set.assist.activity') ?></summary>
    <ol></ol>
  </details>
</fieldset>
<?php /* 0.7 CU.1 (session compute): what this machine can render with; compute-bim.js fills it from compute/probe.js */ ?>
<fieldset class="shell-set" data-compute-set>
  <legend><?= Lang::e('compute.set.title') ?></legend>
  <p class="shell-hint-text"><strong><?= Lang::e('compute.card.title') ?></strong><br><?= Lang::e('compute.card.lede') ?></p>
  <div data-compute-card><p class="shell-hint-text"><?= Lang::e('compute.card.wait') ?></p></div>
  <?php /* 0.7 CU.7: other computers on the network — filled only inside CadCraft Studio, which can find them (lan-ui.js) */ ?>
  <div data-compute-lan hidden></div>
</fieldset>
