/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bimcraft.js — BimCraft browser UI controller (entry module; markup in ui.inc).
 * Opens a local file (picker or drop): IFC → 3D view + storeys + classes + properties;
 * RVT/RFA/RTE/RFT → file card, read by byte range (a 190 MB central costs ~100 KB of reads).
 * DWG/DXF → 2D drawing (DWG: our cc-dwg reader in a worker, dwg/read-async.js; dwg/ = byte-identical copies of lib/dwg; DXF: dxf-model.js; both
 * imported on first use, the same drawing model) with model space, sheets and layers, a
 * print view, and — when its equipment is tagged — an equipment schedule (dwg-equipment.js). The "3D" switch (key 3)
 * shows model space in 3D: dwg-compile3d.js and dwg-view3d.js (ModelCraft's camera, m3d/) are imported on the first switch;
 * a click there picks an object (Ctrl/Cmd+click more) and Properties shows its data (dwg-props.js; 0.4 B2). IFC: toolbar "Section" (key X) cuts the
 * model with one clipping plane (viewer3d.js setSection; search "Section plane").
 * BimCraft only views drawings: "Edit in CadCraft" hands the open DWG/DXF to the drafting app in a new tab
 * (handoff.js, same-origin IndexedDB; shown only when ui.inc gives data-edit-url).
 * Opens a local folder (picker, folder input or drop): folder-scan.js → folder-view.js; any
 * model or IFC in it opens from there, and its card checks links against the folder.
 * IFC values are editable in the properties panel (ifc-edit.js, copy-on-write); Save as IFC
 * downloads a new file. Everything happens in this tab; nothing is uploaded.
 *
 * Library (docs/LIBRARY-SPEC.md §3.1): the right panel's Library tab (library-view.js) lists items from the open
 * drawing, a file, LibraryCraft or another feed; "Place in the model" starts placing in the 3D view (ghost box,
 * R rotates, Tab snaps to a wall, typed X,Y), IfcEditor.placeItem writes it (ifc-place.js) and the model is rebuilt
 * from the edited bytes with the camera kept. Swap, Check for updates, Library credits and the IFC equipment
 * schedule read the CadCraft_* property sets back. ?library=<uuid> opens the panel on that item.
 *
 * Edit (toolbar Undo, Redo, Copy, Paste + More; clipboard.js): Copy of ONE placed library item keeps a placement clip
 * (memory + localStorage "bimcraft.clipboard"); Paste places the same item again where you click (the placing bar and
 * ghost), Paste in place at the same X, Y and rotation (beside the original when it is still on that storey), Duplicate
 * = copy + paste. Any other element, or several (0.4 B1; ifc-elements.js), is copied as an elements clip: its snapshot
 * stays in this tab's memory (elementSnaps), its text goes to the system clipboard; Paste follows the pointer with a ghost
 * of the box round them, R turns them, a click places a copy (same geometry and data, new GlobalIds). Cut = copy +
 * delete (a paste after a cut keeps item numbers). Delete takes parts and openings along (one undo step); storeys and
 * spaces are refused. Select all picks every element shown. Redo re-applies what Undo took back (IfcEditor.redo).
 * Settings › BimCraft (settings.inc; localStorage "bimcraft.settings"): spaces, edges and view when a model opens,
 * wall snap when placing starts.
 *
 * Hide and isolate (0.4 B12; ifc-vis.js): the toolbar's Show group and H / I / T / Shift+H hide the picked elements, show
 * only them, show them with everything else see-through, or show everything again. Ctrl/Cmd/Shift+click picks several.
 *
 * Model tree (0.4 B13; ifc-tree.js + tree-view.js): project → site → building → storey → space → elements by class, with
 * checkboxes that hide (viewer.vis), a click that picks what a row stands for, and it follows every pick (afterPick).
 *
 * Color by property (0.4 B15; ifc-props.js): the right panel's Color tab paints every element by one property's value,
 * with a legend; a click on a value isolates those elements. The property index is built on first use per model state.
 *
 * Federation (0.4 B16): "Add a model…" opens more IFC files into the same scene (IfcModel.sharing: one engine; keys
 * keyOf(mi, id) never collide). Each model is placed in the first model's coordinates (its coordination matrix undone,
 * the first one's applied) plus an offset the user can type; it can be hidden or removed. ONE model is active: editing,
 * placing, the tree, storeys, Color by, Save as IFC and the change list work on it (`ifc`, `model`, `editor`, `ifcName`,
 * `modelTag` are the active model's); picking an element of another model shows its properties read-only.
 *
 * Measure (0.4 B6; measure.js + viewer3d.measureAt): the toolbar's Measure (M) — Distance between two points (corners and
 * edges snap; ΔX ΔY ΔZ in IFC axes) or the area of a flat face; labels follow the camera; Esc drops a half-made one, then stops.
 *
 * Issues (0.4 B9; bcf.js): the right panel's Issues tab — a new issue keeps this view (camera, picked elements, hidden or
 * isolated ones, the section, a snapshot) in the first model's real coordinates; Open BCF / Save BCF exchange BCF 2.1;
 * Show puts an issue's view back (elements found by GlobalId in every open model).
 *
 * Find (0.4 B14; ifc-find.js): the left panel's Find — rules on class, name or any property (all / any), Find picks the
 * matches; rules save as named search sets (localStorage "bimcraft.searchsets", checked on read like a file).
 *
 * 4D schedule (0.4 B22; ifc-4d.js): the left panel's 4D schedule — open a task CSV (or download a template), a date
 * slider (and Play): built = own colors, in progress = ochre, not started = see-through; elements in no task as they are.
 *
 * Compare versions (0.4 B21; ifc-compare.js): in Models, with two models open — older / newer, Compare: elements matched
 * by GlobalId in the shared frame (placements and Move offsets); added / removed / changed painted (blue / red / ochre,
 * every list labelled), the rest see-through; lists pick, CSV.
 *
 * Quantity totals (0.4 B20; ifc-qto.js): the left panel's Quantity totals — every element or the pick, grouped by up to
 * three fields, number fields added up; a table and a CSV. Show: Totals | One row per element (the same fields as
 * columns) | Spaces (0.4 B10: number, name, storey, area, volume — the file's quantities, else measured from the shape).
 *
 * Model checks (0.4 B19; ifc-checks.js): the left panel's Model checks — required properties (class + property, kept in
 * this browser), GlobalIds used twice, elements on no storey, copies stacked on each other; a result picks its elements.
 *
 * Clash check (0.4 B17; clash.js in clash-worker.js): the left panel's Clash check — two sets (the pick, a class over every
 * open model, a search set, everything), a tolerance, Run; results deepest first; one isolates the pair, see-through the
 * rest, and can become an issue.
 *
 * Draw (0.5 part 3, track BM; model-ui.js and the model-*.js modules, map docs/apps/bimcraft-model.md): the toolbar's Draw
 * shows the plan of a level beside the 3D view, with walls, doors, windows, floors, ceilings, roofs, rooms, the Levels
 * panel, schedules, dimensions and a PDF of the plan — all written into the open IFC through IfcEditor.modelChange. Hooks
 * here: modelUi.opened / stage / rebuilding / rebuilt / picked / decorate / edit (search "modelUi").
 *
 * Strings added since 0.4 come from lang/en.json through t() (i18n.js, docs/LANG.md).
 *
 * Every string that comes from a file reaches the page through el() (text nodes), never
 * innerHTML: a model or folder is untrusted input.
 */
import * as WebIFC from './ifc/api.js';   // cc-ifc, our own IFC engine (0.4 I.11; was web-ifc)
import { t, has } from './i18n.js';
import { IfcModel, keyOf, KEY_SPAN } from './ifc-model.js';
import { IfcEditor } from './ifc-edit.js';
import { newBuilding, stackLevels, levelsProblem } from './new-model.js';   // 0.5 part 3: File › New building
import { mountModel } from './model-ui.js';
import { mountWorkspaces } from 'cc-workspace';   // the shell's layout engine (assets/js/app-workspace.js; 0.7 WS.6)
import { createBimcraftWorkspace } from './workspace-bimcraft.js';
import { createCommands, shortcutCommand, isTextEntry } from './workspace/commands.js';   // 0.5 part 3, track BM: Draw (plan view, walls, levels)
import { mountRes } from './res-ui.js';   // 0.5 part 4, track RC: the residential tools in the plan (roof planes, …)
import { isCloudFile, cloudSignature, CLOUD_ACCEPT } from './cloud-types.js';   // 0.6 PF (session pointcloud): which files are point clouds
import { mountCoords } from './coords-ui.js';   // 0.6 DF.15 (bim-draw): coordinate readouts, project origin and survey point
import { mountTrim } from './model-trim-ui.js';   // 0.6 DF.17 (bim-draw): Modify › Trim / extend, Corner
import { mountStairSketch } from './stair-sketch-ui.js';   // 0.8 SU.1055 (bim-08): a stair from a sketch
import { mountPens } from './pens-ui.js';   // 0.8 SU.1055 (bim-08): pen overrides per view
import { mountPicture } from './picture-ui.js';
import { AREA_KEY } from './areaclip.js';   // 0.8 D8.15: MarkupCraft's copied area (picture-paste.js)   // 0.8 D8.8 (d88_PART_3): pictures as backgrounds on the plan
import { mountTraceRef } from './trace-ref-ui.js';   // 0.8 SU.1055 (bim-08): Trace Reference
import { mountModify } from './modify-ui.js';   // 0.8 D8.3 (bim-08): Move, Align, Distribute
import { mountSymbols } from './symbols-ui.js';   // 0.8 GH.3-F/G (gh3sym_PART_3): the symbol palette (electrical, plumbing), lib/symbols
import { mountGrids } from './model-grids-ui.js';   // 0.6 DF.16 (bim-draw): Build › Grid, Column
import { mountFloors } from './model-floors-ui.js';   // 0.6 DF.18 (bim-draw): Build › Floor by outline, Ramp
import { mountSite } from './model-site-ui.js';   // 0.6 DF.20 (bim-draw): Build › Site, Add levels…
import { mountSiteMass } from './model-site-mass-ui.js';   // 0.7 LC.1 B2 (massing): a CivilCraft building mass in Properties; Develop this mass
import { mountMep } from './mep-ui.js';   // 0.6 DF.29 (bim-draw): Build › Pipe, Duct, Valve
import { mountViewsBim } from './views-ui.js';   // 0.6 DF.19 (bim-draw): project browser, view ranges, templates, your own sheets
import { mountWallAssemblies } from './wall-assemblies-ui.js';
import { mountWallDimensions } from './wall-dimensions-ui.js';
import { mountFamilies } from './family-ui.js';   // 0.6 DC.114 (bim-families_PART_2): families on IFC types, their sizes, the editor
import { mountComforts } from './comforts-ui.js';   // 0.6 round 2 (bim-comforts_PART_2): move / turn placed library items, dormers
import { installAgents } from './agents.js';   // 0.6 DF.25 (bim-draw): the Draw edits as assistant tools, beside bim-agent.js's
import { mountPanels } from './panels-ui.js';   // 0.8 EG.6 (bim-build_PART_5): panel shop drawings, timber or light-gauge steel
import { mountSiteContext } from './site-ctx-ui.js';   // 0.8 EG.63 (civil_PART_4): CivilCraft's address-to-site file as suggestions
import { mountScanProgress } from './scan-progress-ui.js';   // 0.8 EG.39 (bim-analysis_PART_4)
import { mountCloudSlice } from './cloud-slice-ui.js';   // 0.6 DF.22 (bim-draw): the cloud's slice on the plan, Scan menu
import { mountTrace } from './model-trace-ui.js';   // 0.6 DF.23 (bim-draw): Build › From a drawing…
import { mountLinks } from './links-ui.js';   // 0.6 DF.21 (bim-draw): linked models (the Links section)
import { getDisplayUnits, fmtLen, parseLen, parseTyped, fmtCoord, lenMark, unitMark, localizeLengths, crsUnitNote } from './model-units.js';
import { readLevels } from './model-levels.js';
import { ModelWriter } from './model-write.js';
import { mountBimShell, scheduleHours } from './shell-mount.js';   // 0.8 EG.18 / EG.23 / EG.34 / AC.8: the shell's seven modules (docs/apps/shell-modules.md § Mounting)
import { parseLength } from './libitem.js';
import { readRevit, isOleFile } from './rvt-reader.js';
import { previewSupport, convertRevit } from './rvt-convert.js';   // 0.5 SG.8 (b): RVT preview, lab only (ui.inc data-rvt-preview)
import { Viewer3D } from './viewer3d.js';
import { compileDrawing, UNITS } from './dwg-compile.js';
import { mountViewCube, mountAxisIcon } from './m3d/viewcube.js';
import { threeCubeOptions } from './m3d/viewcube-three.js';
import { cameraCubeOptions } from './m3d/viewcube-camera.js';
import { DrawingView } from './dwg-view.js';
import { equipmentList, equipmentCsv } from './dwg-equipment.js';
import { entityRows, attributeRows } from './dwg-props.js';
import { dynamicDefs, dynamicOf, dynamicSummary } from './dwg-dynamic.js';   // 0.5 DB.11
import { renderEquipment } from './equip-view.js';
import { scanFolder, resolveLink } from './folder-scan.js';
import { canPickFolder, pickFolder, fromHandle, fromInput, dropEntries, dropFolderHandle, fromDropEntries,
  recentFolders, rememberFolder, forgetFolder, reopenFolder } from './folder-pick.js';
import { renderFolder } from './folder-view.js';
import { el, fillDl, bytes, num, isPlaceholder, projectParam } from './ui-util.js';
import { LibraryPanel, licenseLabel } from './library-view.js';
import { fromViewer, toViewer, snapToWall, PSETS, withVariant } from './ifc-place.js';
import { sendHandoff, newHandoffId, putHandoff } from './handoff.js';
import { getHost } from "./host.js";
import { Autosave } from "./app-autosave.js";
import { CLIP_KEY, placementClip, elementsClip, pasteMove, readClip, writeClip, libKey, boxFromItem, boxFromEquipment, ghostItem,
  besideSpot, pickStorey, elementText, elementCsv } from './clipboard.js';
import { boundsOf } from './ifc-vis.js';
import { cleanVolume, FACE_AXES, MAX_CELLS, MAX_PLANES, MAX_TILT, planeFromPoint, boxGrips, dragDelta, dragBox } from './section-volume.js';
import { inv4, placementMatrix } from './ifc-util.js';
import { ids as idsOfType } from './ifc-util.js';   // 0.7.1 → 0.8: IfcProject, for the accepted problems' property set
import { distance, ifcDelta, fmtLength, fmtArea, axisSnap, orthoPoint } from './measure.js';
import { readGeoref, fileToMap, siteLonLat, datumOf, dms, viewerToFile } from './ifc-geo.js';
import { writeBcf, readBcf, newGuid, toIfcPoint, toIfcDir, fromIfcPoint, fromIfcDir } from './bcf.js';
import { buildTree, leaves } from './ifc-tree.js';
import { propertyIndex, colorBy, CATEGORICAL, schemeOf, readScheme, applyScheme } from './ifc-props.js';
import { compareModels, compareCsv, compareWords } from './ifc-compare.js';
import { readMspdi, writeMspdi, readCsv, writeCsv, plan as planTasks, ganttSvg } from './schedule-io.js';   // 0.8 SU.931 (ifc-08's mount line): MS Project XML, links, Gantt
import { parseTasks, matchTasks, statusAt, span, templateCsv, dayText, groupsOf, inGroup, groupKeys, groupState } from './ifc-4d.js';
import { find, cleanSets, suggestions, OPS, SETS_KEY } from './ifc-find.js';
import { elementsOf, clashes } from './clash.js';
import { mountStructure } from './mep/structure-ui.js';   // 0.7 LC.9 (mep-07): MEP against the structure in the Clash check
import { mountHvac } from './mep/hvac-ui.js';   // 0.8 SU.888 (sx-mep): split / VRF / fan-coil pack (mep/hvac.js adds the kinds to Build › Equipment), Line set, Line set sizes
import { runChecks, cleanRules } from './ifc-checks.js';
import { checkProblems, bimMarkers } from './problems-bimcraft.js';   // 0.7.1 → 0.8: the shell's Problems (docs/0.8-PROBLEMS-SPEC.md)
import { mountIds } from './ids-ui.js';   // 0.7.1 71.25: Model › Check against IDS… (cc-ids in ./ids/)
import { rules as rulesProvider } from './rules-hook.js';
import { read43, summary as summary43, quantitiesFile as quantities43 } from './ifc/ifc43.js';   // 0.8 SU.882 (ifc_PART_4)
import { totals, totalsCsv, quantityFields, MAX_GROUP, elementRows, spaceSchedule, tableCsv } from './ifc-qto.js';
import { TreeView } from './tree-view.js';
import { bimTools } from './bim-agent.js';
import { archicadVerdict } from './bundle-open.js';   // 0.6 DF.12 (session bim-interop)
import { mountBundle } from './bundle-view.js';   // 0.6 DF.12 (b): project bundles (session bim-interop)
import { mountAnalysisBim } from './analysis-bim-ui.js';   // 0.6 LC.4: frame analysis (session lc-structure)
import { mountFieldPoints } from './layout-bim-ui.js';     // 0.6 LC.22: field points + as-built (session lc-structure)
import { mountAssets } from './assets-bim-ui.js';     // 0.6 LC.12: assets + maintenance record (session bim-extra_PART_2)
import { mountEnergyEp } from './energy-ep-ui.js';   // 0.8 EG.13 (energy_PART_2 mount line 1)
import { carbonTotal } from './carbon-calc.js';   // EG.30 running totals
import { costTotal, readCostSettings } from './cost5d.js';
import { mountCarbon } from './carbon-ui.js';   // EG.14
import { mountCost5d } from './cost5d-ui.js';   // EG.17
import { mountPv } from './pv-ui.js';   // EG.15
import { mountMepCalc } from './mep-calc-ui.js';   // 0.8 EG.1–EG.4 Calculations tab (mep_PART_2's line 2)
import { mountFurnish, mountProgram } from './design-ui.js';   // 0.8 EG.60 furnish a room, EG.58 room program (session bim_PART_2)
import { mountPermit } from './permit-ui.js';   // 0.8 EG.44 permit package (session bim_PART_2)
import { mountLifecycle } from './lifecycle-ui.js';   // 0.8 EG.45 life-cycle view (session bim-sim_PART_2)
import { mountHazard } from './hazard-ui.js';   // 0.8 EG.47 hazard playback (session bim-sim_PART_2)
import { mountAcoustics } from './acoustics-ui.js';   // 0.8 EG.49 room acoustics (session bim-sim_PART_2)
import { mountPeople } from './people-ui.js';   // 0.8 EG.48 people in the building (session bim-sim_PART_2)
import { mountPhases, mountPhasePlan } from './phases-ui.js';   // 0.8 EG.59 renovation phases (session bim_PART_2)
import { mountTags } from './tags-ui.js';   // 0.8 SU.915 tags into schedules + SU.889 documents from the model (session sx-tags)
import { mountDaylight } from './daylight-bim-ui.js';     // 0.6 LC.20: average daylight factor per room (session bim-extra_PART_2)
import { mountInterop } from './interop-view.js';   // 0.6 DF.12 (c): mapping files + round-trip report (session bim-interop)
import * as paintLib from './paint-bim.js';   // 0.8 RENDER-NEXT: readPaint for the live textures
import * as photoMat from './photo-materials.js';   // 0.8 EG.62: the file's photo materials (kept in the IFC, painted like library ones)
photoMat.setDecoder(async (bytes) => (await import('./photo-material.js')).decodePhoto('image/png', bytes));
import { wireOffer as addonsOffer } from './addons-file.js';   // 0.8 AL.6
import { mountUndoHook } from './undo-hook.js';   // 0.8 EG.77: tells Studio each finished step (round 5)
import { startAddons } from './addons/bimcraft-api.js';   // 0.5 AO.7 (session addons' module; manifest "addons": "own")
import { mountMachineCard } from './compute-bim.js';   // 0.7 CU.1: Settings › Rendering › Your machine (compute/probe.js)

/** The library needs getcadcraft.com's API: off in the self-hosted browser edition (devshell `#cc-edition` {library: false}). */
const libraryOn = (() => { try { const ed = JSON.parse(document.getElementById('cc-edition')?.textContent || 'null'); return !ed || ed.library !== false; } catch { return true; } })();

const root = document.querySelector('[data-bimcraft]');
if (root) init(root);
// Touch screens (0.4 S.8): the first touch marks the app, so CSS gives bigger targets and the walk pad shows
if (root) root.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') root.classList.add('is-touch'); }, { capture: true, passive: true });

function init(root) {
  const $ = (s) => root.querySelector(s);
  let addons = null;   // 0.5 AO.7: the add-on API's handle once startAddons() resolves (search "Add-ons")
  const ui = {
    file: $('[data-file]'), folderInput: $('[data-folder-input]'), recent: $('[data-recent]'), recentList: $('[data-recent] ul'), drop: $('[data-drop]'), veil: $('[data-dropveil]'),   // i18n-ignore: selectors
    status: $('[data-status]'), empty: $('[data-empty]'), toolbar: $('[data-toolbar]'),
    canvasWrap: $('[data-canvas-wrap]'), canvas: $('[data-canvas]'), card: $('[data-rvt]'), folder: $('[data-folder]'),
    info: $('[data-file-info]'), infoH: $('[data-file-info] .bc-h'), infoDl: $('[data-file-dl]'),   // i18n-ignore: selectors
    back: $('[data-folder-back]'),
    storeys: $('[data-storeys]'), storeyList: $('[data-storey-list]'), tree: $('[data-tree]'), treeSec: $('[data-tree-sec]'),
    classes: $('[data-classes]'), classList: $('[data-class-list]'),
    props: $('[data-props]'), xrefInput: $('[data-xref-input]'),
    dwg: $('[data-dwg]'), dwgCanvas: $('[data-dwg-canvas]'), equip: $('[data-equip]'), sheetTabs: $('[data-sheet-tabs]'), coords: $('[data-coords]'), dwgBusy: $('[data-dwg-busy]'),
    layers: $('[data-layers]'), layerList: $('[data-layer-list]'),
    changes: $('[data-changes]'), changeList: $('[data-change-list]'), undo: $('[data-undo]'), save: $('[data-save]'),
    spSec: $('[data-scanprog-sec]'), sp: $('[data-scanprog]'),
    fdSec: $('[data-4d-sec]'), fd: $('[data-4d]'), fdDetails: $('[data-4d-details]'), fdInput: $('[data-4d-input]'),
    qtoSec: $('[data-qto-sec]'), qto: $('[data-qto]'), qtoDetails: $('[data-qto-details]'),
    checksSec: $('[data-checks-sec]'), checks: $('[data-checks]'), checksDetails: $('[data-checks-details]'),
    idsBox: $('[data-ids]'), idsDetails: $('[data-ids-details]'), idsOpen: $('[data-ids-open]'),   // 0.7.1 71.25
    clashSec: $('[data-clash-sec]'), clash: $('[data-clash]'), clashDetails: $('[data-clash-details]'),
    library: $('[data-library]'), color: $('[data-color]'), colorInput: $('[data-color-input]'), findSec: $('[data-find-sec]'), find: $('[data-find]'), findDetails: $('[data-find-details]'), issues: $('[data-issues]'), bcfInput: $('[data-bcf-input]'),
    cmp: $('[data-compare]'), cmpDetails: $('[data-compare-details]'),
    modelsSec: $('[data-models-sec]'), modelList: $('[data-model-list]'), modelInput: $('[data-model-input]'), placebar: $('[data-placebar]'), ifcEquip: $('[data-ifc-equip]'),
  };
  let ifc = null;          // IfcModel, created on the first IFC (loads the wasm once)
  let viewer = null;       // Viewer3D, created on the first IFC
  let busy = false;
  let previewUrl = null;
  let rvtOpen = null;      // the RVT/RFA on the card: { file, path, info } (the lab preview converts it)
  let pickToken = 0;
  let folder = null;       // { scan, index } while a folder is open
  let editor = null;       // IfcEditor for the open IFC
  let dwgView = null;      // DrawingView
  let lastDwg = null;      // { file, path, kind } — reopened when linked drawings are added
  const xrefFiles = new Map();   // "name.dwg" / "logo.png" (lower case) → File, added with "Add linked files…"
  let printView = false;   // DWG: black on white with line weights
  let dwg3d = null;        // { db, xrefs, compiled } for the open drawing's 3D view
  let view3d = null;       // DrawingView3D (dwg-view3d.js, imported on the first switch to 3D)
  let view3dOn = false;    // the drawing shows in 3D
  let props2d = null;      // the 2D Properties content, put back when leaving 3D
  let cut = null;          // IFC section plane { axis: top|front|side, offset (m from the model's bottom/front/side), flip }
  let ifcName = '';        // file name of the open IFC (for Save as)
  let selected = null;     // picked element id
  let model = null;        // the open IFC's load result
  let mode = 'none';       // 'ifc' | 'dwg' | 'none' (what the library panel can do)
  let idsUi = null;        // 0.7.1 71.25: the IDS check (ids-ui.js), mounted with the Problems below
  let dwgCoordUnits = '';   // the open drawing's own units (its coordinates are never converted to the display unit)
  let dwgOpen = null;      // { db, fileName } while a drawing is open (the library's "This file")
  let placing = null;      // { entry, rot, snap, faces, at } while placing an item
  let swapTarget = null;   // { id, name, uuid, version, variant, library } after "Swap item…" (the library item it is, for its other variants)
  let modelTag = '';       // this open IFC's session tag: a clip copied from it can be pasted "like" its source
  let workspace = null, planViews = null, coreCommands = null, toolbox = null;
  let modelUi = null;      // Draw (0.5 track BM, model-ui.js): mounted at the end of init
  let coordsUi = null;     // where am I working (0.6 DF.15, coords-ui.js): mounted with the 3D view
  let siteCtxUi = null;    // CivilCraft's site-context file taken as suggestions (0.8 EG.63, site-ctx-ui.js)
  let scanProgUi = null, brkScanSet = null, scanProgProblems = [];   // EG.39: scan against the model and the 4D schedule
  let scanUi = null;       // a point cloud's slice on the plan (0.6 DF.22, cloud-slice-ui.js)
  let linksUi = null;      // linked models (0.6 DF.21, links-ui.js)
  let picturesUi = null;   // pictures (0.8 D8.8, picture-ui.js): bytes beside the IFC, 3D planes, plan PDF
  let bundleUi = null;     // project bundles (0.6 DF.12 (b), bundle-view.js): mounted at the end of init
  let analysisUi = null;   // the Analysis tab (0.6 LC.4, analysis-bim-ui.js): mounted after the bundles
  let pointsUi = null;     // the Points tab (0.6 LC.22, layout-bim-ui.js): mounted with it
  let assetsUi = null;     // the Assets tab (0.6 LC.12, assets-bim-ui.js)
  let frameSet = null, frameProblems = [];   // SU.1056: concrete checks and drift in the shell's Problems
  let breakSet = null, breakProblems = [];   // EG.31: the Problems source of "What breaks first?"
  let bimTotalsInvalidate = () => {};   // EG.30: the running totals re-read after an edit
  let mountEnergy = null;  // set where the tab's panes are made (below)
  let energyUis = null;    // 0.8 EG.13–EG.17 (energy_PART_2's panes, mounted by bim-sim_PART_2): EnergyPlus, carbon, 5D cost, solar PV
  let mepCalcUi = null;    // 0.8 EG.1–EG.4 (mep_PART_2, mep-calc-ui.js): the Calculations tab
  let phasesUi = null;     // 0.8 EG.59 (bim_PART_2, phases-ui.js): existing / demolish / new, kept in the IFC
  let tagsUi = null;       // 0.8 SU.915 / SU.889 (sx-tags, tags-ui.js): Tags + Documents from the model, under Quantities
  let daylightUi = null;   // the Daylight tab (0.6 LC.20, daylight-bim-ui.js)
  let pc = null;           // point clouds (0.5 SG.1): cloud-ui.js, made on the first cloud
  let bimMaps = null;      // map layers on the ground (0.5 SG.3): maps-bim.js, made on first use
  let selInfo = null;      // { id, p (IfcModel.properties), placement (bool) } for the picked element
  const libItems = new Map();   // libKey → { item, meta } placed, swapped in or updated in this tab (Paste in another model)

  let statusTimer = 0;
  const status = (msg, isError = false, fade = false) => {   // fade: a done message that clears itself after 6 s
    clearTimeout(statusTimer);
    ui.status.textContent = isError && msg ? localizeLengths(msg, getDisplayUnits()) : (msg || '');   // GH.3-A: a refusal's limits in the display unit
    ui.status.classList.toggle('is-error', !!isError);
    if (msg && !isError && fade) statusTimer = setTimeout(() => { ui.status.textContent = ''; }, 6000);
  };
  const frame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
  const guard = async (fn) => {
    if (busy) { status(t('busy.wait')); return; }
    busy = true;
    // an error made for the person (err.userFacing: a refusal with its reason) goes to the status line only
    try { await fn(); } catch (err) { if (!err.userFacing) console.error(err); status(err.message || String(err), true); } finally { busy = false; workspace?.refresh(); }
  };

  // ---- Settings › BimCraft (settings.inc; per viewer conveniences, localStorage "bimcraft.settings") ----
  //   spaces  show rooms and spaces (IfcSpace) when a model opens        default off
  //   edges   edges when a model opens: on / small (models under SMALL_MODEL triangles) / off   default on
  //           (the viewer never draws them above 1.5 million triangles)
  //   view    the view a model opens in: iso (Fit) / top / front / side   default iso
  //   snap    wall snap is on when placing or pasting starts               default off
  const SMALL_MODEL = 300000;
  //   corner  the corner indicator in the 3D views (IFC and a drawing in 3D): cube / axes / none   default cube
  //   boxMargin  room "Section box round the pick" leaves round the pick, mm 0–5000 (0.5 WL.2)   default 300
  //   geoCrs  latitude / longitude in Measure › Location: an EPSG code (geographic), or 'file' = the file's own datum (WL.4)
  //   dwgStart  the view a DWG/DXF opens in: 3d (fastest: WebGL) / 2d (Model, the canvas)   default 3d
  //   idsEmbed  Check against IDS: also keep the IDS text inside the IFC (0.7.1 71.25; a client's IDS may be confidential)   default off
  const SET_DEFAULTS = { spaces: false, edges: 'on', view: 'iso', turned: 'square', snap: false, corner: 'cube', boxMargin: 300, geoCrs: '4326', dwgStart: '3d', idsEmbed: false };
  const okMargin = (v) => Number.isFinite(v) && v >= 0 && v <= 5000;
  const GEO_CRS = ['4326', 'file', '4258', '4269', '4283', '7844', '4167', '6668', '4490'];
  // 0.8 D8.9: any EPSG number, or one of the person's own ('my:<id>', crs-pick.js), besides the quick picks
  const okGeoCrs = (v) => typeof v === 'string' && (GEO_CRS.includes(v) || /^\d{4,6}$/.test(v) || /^my:[a-z0-9]{1,12}$/.test(v));
  const settings = { ...SET_DEFAULTS, assistants: { enabled: false, groups: ['read'] } };
  // 0.4 X.7: assistants (AGENTS-SPEC §7): off unless the person turned them on; groups read, edit and (0.6 DF.25) save
  function readAssist(v) {
    const a = v && v.assistants;
    if (a && typeof a === 'object') settings.assistants = { enabled: a.enabled === true, groups: (Array.isArray(a.groups) ? a.groups : []).filter((g) => g === 'read' || g === 'edit' || g === 'save' || g === 'export') };
  }
  try {
    const v = JSON.parse(localStorage.getItem('bimcraft.settings') || '{}') || {};
    if (typeof v.spaces === 'boolean') settings.spaces = v.spaces;
    if (['on', 'small', 'off'].includes(v.edges)) settings.edges = v.edges;
    if (['iso', 'top', 'front', 'side'].includes(v.view)) settings.view = v.view;
    if (['square', 'placed'].includes(v.turned)) settings.turned = v.turned;
    if (typeof v.snap === 'boolean') settings.snap = v.snap;
    if (['cube', 'axes', 'none'].includes(v.corner)) settings.corner = v.corner;
    if (okMargin(v.boxMargin)) settings.boxMargin = v.boxMargin;
    if (okGeoCrs(v.geoCrs)) settings.geoCrs = v.geoCrs;
    if (v.dwgStart === '3d' || v.dwgStart === '2d') settings.dwgStart = v.dwgStart;
    if (typeof v.idsEmbed === 'boolean') settings.idsEmbed = v.idsEmbed;
    readAssist(v);
  } catch (e) { /* private window or a damaged value: the defaults */ }
  window.bimcraftSettings = settings;   // for tests and the console
  const settingsDlg = document.querySelector('[data-app-settings]');
  mountMachineCard(settingsDlg);
  // 0.8 D8.9: a system chosen from the whole catalog (or one of the person's own) shows as one more option beside the quick picks
  function syncGeoOption(sel) {
    const v = settings.geoCrs;
    sel.querySelectorAll('option[data-geo-extra]').forEach((o) => o.remove());
    if (![...sel.options].some((o) => o.value === v)) {
      const o = document.createElement('option');
      o.value = v; o.dataset.geoExtra = ''; o.textContent = v.startsWith('my:') ? t('set.geo.mine', { name: '…' }) : 'EPSG:' + v;   // i18n-ignore: the number until the catalog names it
      sel.append(o);
      import('./crs-pick.js').then(async (P) => {
        const c = await import('./crs.js');
        if (!c.catalogLoaded()) await c.loadCatalog();
        const sys = P.systemFor(v);
        if (sys) o.textContent = v.startsWith('my:') ? t('set.geo.mine', { name: sys.name }) : t('set.geo.other', { name: sys.name, code: v });
      }).catch(() => { /* the number stays */ });
    }
    sel.value = v;
  }
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const f = (n) => settingsDlg.querySelectorAll('[name="' + n + '"]');
    f('bcSpaces').forEach((i) => { i.checked = settings.spaces; });
    f('bcEdges').forEach((i) => { i.checked = i.value === settings.edges; });
    f('bcView').forEach((i) => { i.checked = i.value === settings.view; });
    f('bcTurned').forEach((i) => { i.checked = i.value === settings.turned; });
    f('bcSnap').forEach((i) => { i.checked = settings.snap; });
    f('bcCorner').forEach((i) => { i.checked = i.value === settings.corner; });
    f('bcBoxMargin').forEach((i) => { i.value = String(settings.boxMargin); });
    f('bcGeoCrs').forEach((i) => syncGeoOption(i));
    f('bcDwgStart').forEach((i) => { i.checked = i.value === settings.dwgStart; });
    f('bcIdsEmbed').forEach((i) => { i.checked = settings.idsEmbed; });   // 0.7.1 71.25
    const as = settings.assistants;
    f('bcAssist').forEach((i) => { i.checked = as.enabled; });
    f('bcAssistRead').forEach((i) => { i.checked = as.groups.includes('read'); i.disabled = !as.enabled; });
    f('bcAssistEdit').forEach((i) => { i.checked = as.groups.includes('edit'); i.disabled = !as.enabled; });
    f('bcAssistSave').forEach((i) => { i.checked = as.groups.includes('save'); i.disabled = !as.enabled; });   // 0.6 DF.25
    f('bcAssistExport').forEach((i) => { i.checked = as.groups.includes('export'); i.disabled = !as.enabled; });   // 0.7 AS.6
  }
  if (settingsDlg) {
    syncSettingsForm();
    // The shared dialog has no open event: watch its open attribute, so the fields show what is stored (another tab may
    // have changed it).
    new MutationObserver(() => {
      if (!settingsDlg.open) return;
      try {
        const v = JSON.parse(localStorage.getItem('bimcraft.settings') || '{}') || {};
        if (typeof v.spaces === 'boolean') settings.spaces = v.spaces;
        if (['on', 'small', 'off'].includes(v.edges)) settings.edges = v.edges;
        if (['iso', 'top', 'front', 'side'].includes(v.view)) settings.view = v.view;
        if (['square', 'placed'].includes(v.turned)) settings.turned = v.turned;
        if (typeof v.snap === 'boolean') settings.snap = v.snap;
        if (['cube', 'axes', 'none'].includes(v.corner)) settings.corner = v.corner;
        if (okMargin(v.boxMargin)) settings.boxMargin = v.boxMargin;
        if (okGeoCrs(v.geoCrs)) settings.geoCrs = v.geoCrs;
        if (v.dwgStart === '3d' || v.dwgStart === '2d') settings.dwgStart = v.dwgStart;
        if (typeof v.idsEmbed === 'boolean') settings.idsEmbed = v.idsEmbed;
        readAssist(v);
      } catch (e) { /* keep what this tab has */ }
      syncSettingsForm();
      applyAssist();
    }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
    settingsDlg.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'bcSpaces') settings.spaces = t.checked;
      else if (t.name === 'bcEdges') settings.edges = t.value;
      else if (t.name === 'bcView') settings.view = t.value;
      else if (t.name === 'bcTurned') { if (!['square', 'placed'].includes(t.value)) return; settings.turned = t.value; applyViewTurn(true); }
      else if (t.name === 'bcSnap') settings.snap = t.checked;
      else if (t.name === 'bcCorner') { settings.corner = t.value; applyCorner(); }
      else if (t.name === 'bcBoxMargin') {
        const v = Math.round(Number(t.value));
        if (t.value.trim() === '' || !okMargin(v)) { t.value = String(settings.boxMargin); return; }
        settings.boxMargin = v;
      }
      else if (t.name === 'bcGeoCrs') { if (!okGeoCrs(t.value)) return; settings.geoCrs = t.value; }
      else if (t.name === 'bcDwgStart') { if (t.value !== '3d' && t.value !== '2d') return; settings.dwgStart = t.value; }
      else if (t.name === 'bcIdsEmbed') settings.idsEmbed = t.checked;   // 0.7.1 71.25: applies the next time an IDS is loaded
      else if (t.name === 'bcAssist' || t.name === 'bcAssistRead' || t.name === 'bcAssistEdit' || t.name === 'bcAssistSave' || t.name === 'bcAssistExport') {
        const as = settings.assistants, on = (n) => settingsDlg.querySelector('[name="' + n + '"]')?.checked;
        if (t.name === 'bcAssist') { as.enabled = t.checked; if (t.checked && !as.groups.length) as.groups = ['read']; }
        else as.groups = [on('bcAssistRead') && 'read', on('bcAssistEdit') && 'edit', on('bcAssistSave') && 'save', on('bcAssistExport') && 'export'].filter(Boolean);
        syncSettingsForm();
        applyAssist();
      }
      else return;
      saveSettings();
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, SET_DEFAULTS, { assistants: { enabled: false, groups: ['read'] } }); saveSettings(); syncSettingsForm(); applyCorner(); applyAssist(); });
  }
  // ---- Corner indicator (Settings › BimCraft): the view cube or an X/Y/Z axis icon in each 3D view (m3d/viewcube.js,
  // byte-identical copies of ModelCraft's). Never on the 2D drawing: the hosts are the 3D views' own wrappers. ----
  const corners = [];   // { cube, axes } per 3D view
  let cube3d = null;     // the IFC view's cube (its compass follows the view turn: applyViewTurn)
  function addCorner(host, opts) {
    const cube = mountViewCube(host, { ...opts, corner: 'bottom-right', i18n: { t, has } });
    const axes = mountAxisIcon(host, { getView: opts.getView, corner: 'bottom-right', i18n: { t, has } });
    const c = { cube, axes, opts };
    corners.push(c);
    applyCorner();
    return { update: () => { cube.update(); axes.update(); }, stop: () => opts.stop?.(), c };
  }
  function applyCorner() {
    for (const c of corners) { c.cube.setVisible(settings.corner === 'cube'); c.axes.setVisible(settings.corner === 'axes'); c.cube.update(); c.axes.update(); }
  }
  function saveSettings() { try { localStorage.setItem('bimcraft.settings', JSON.stringify(settings)); } catch (e) { /* this tab keeps them */ } }

  // ---- Choosing files and folders ----
  root.querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', () => ui.file.click()));
  root.querySelectorAll('[data-pick-folder]').forEach((b) => b.addEventListener('click', () => {
    if (!canPickFolder()) { ui.folderInput.click(); return; }
    guard(async () => {
      const picked = await pickFolder(listing);
      if (picked) await openFolder(picked);
    });
  }));
  ui.file.addEventListener('change', () => {
    const f = ui.file.files[0];
    ui.file.value = '';
    if (f) guard(() => open(f, null));
  });
  // ---- New building (0.5 part 3, BM.2 start; owner 2026-10-14) ----
  // A blank IFC4 model (project, site, building, levels; new-model.js) opened like any file: items can be placed from the
  // Library, and Save as IFC writes it under its own name. Walls, doors and windows are track BM's next items.
  // 0.7 SU.751: the level height starts in the units the person already chose (Units menu), else by the browser's language
  const metricNow = () => { const u = getDisplayUnits(); return ['mm', 'cm', 'm'].includes(u) || (!['ftin', 'ftdec', 'in'].includes(u) && !/^en-(US|LR|MM)$/i.test(navigator.language || 'en-US')); };
  async function askNewBuilding() {
    if (await keepEdits()) return;
    const metricDefault = metricNow();
    const field = (label, input, hint) => el('label', { className: 'bc-new-field' }, el('span', {}, label), input, hint ? el('span', { className: 'bc-sub' }, hint) : null);
    const name = el('input', { type: 'text', value: t('new.default.name'), maxLength: 120, required: true, 'data-new-name': '' });
    const count = el('input', { type: 'number', value: '2', min: '1', max: '200', step: '1', required: true, 'data-new-levels': '' });
    const height = el('input', { type: 'text', value: metricDefault ? '3000 mm' : "10'-0\"", required: true, 'data-new-height': '' });   // i18n-ignore: a length
    const err = el('p', { className: 'bc-new-err', role: 'alert' });
    const result = await new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog bc-new', 'aria-labelledby': 'bc-new-h' },
        el('form', { method: 'dialog', noValidate: true },
          el('h2', { className: 'bc-h', id: 'bc-new-h' }, t('new.title')),
          el('p', {}, t('new.lede')),
          field(t('new.name'), name),
          field(t('new.levels'), count),
          field(t('new.height'), height, t('new.height.hint')),
          err,
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-new-ok': '' }, t('new.create')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel', formNoValidate: true }, t('dialog.cancel')))));
      const read = () => {
        const n = Math.round(Number(count.value)), h = parseLength(height.value, metricDefault ? 1 : 304.8);
        const levels = Number.isFinite(n) && n >= 1 ? stackLevels(n, h, (i) => t('new.level', { n: i + 1 })) : [];
        const bad = !name.value.trim() ? 'new.err.name' : levelsProblem(levels);
        return { bad, levels, name: name.value.trim() };
      };
      dlg.querySelector('form').addEventListener('submit', (e) => {
        if (e.submitter?.value !== 'ok') return;
        const r = read();
        if (r.bad) { e.preventDefault(); err.textContent = t(r.bad); return; }
        dlg.result = r;
      });
      dlg.addEventListener('close', () => { dlg.remove(); done(dlg.returnValue === 'ok' ? dlg.result : null); });
      document.body.append(dlg);
      dlg.showModal();
      name.select();
    });
    if (!result) return;
    const fileName = result.name.replace(/[\\/:*?"<>|]+/g, '-') + '.ifc';   // i18n-ignore: a file name
    const text = newBuilding({ name: result.name, siteName: t('new.site'), levels: result.levels, fileName, version: document.querySelector('[data-bimcraft]')?.dataset.version || '' });
    const data = new TextEncoder().encode(text);
    await openIfc(data, new File([data], fileName, { type: 'application/x-step' }), null);
    editor.isNew = true;   // unsaved until Save as IFC writes it (keepEdits, autosave and Save treat it like edits)
    renderChanges();
    status(t('new.done', { name: result.name, n: result.levels.length }));
    modelUi?.show(true);   // a new building opens with its plan, ready to draw
  }
  root.querySelectorAll('[data-new]').forEach((b) => b.addEventListener('click', () => guard(askNewBuilding)));
  // Files through the host adapter (host.js, W2.19): on the desktop the picker is the native dialog (the file keeps its
  // path), a double-clicked file opens at launch or while running; in the browser the same input as before.
  const fileHost = getHost({ app: 'bimcraft' });
  const IFC_TYPES = [{ description: 'IFC', extensions: ['.ifc'] }];   // i18n-ignore: a file type label the OS shows
  const OPEN_TYPES = [{ description: 'IFC, RVT, RFA, DWG, DXF, LAS, LAZ, STEP', extensions: ['.ifc', '.rvt', '.rfa', '.rte', '.rft', '.dwg', '.dxf', '.step', '.stp', '.obj', '.pln', '.pla', '.tpl', '.bpn', '.ccbundle', '.zip', ...CLOUD_ACCEPT.split(',')] }];   // i18n-ignore: OS file types
  const openHost = async (hf) => {
    if (!hf) return;
    const blob = await hf.file();
    await open(typeof File !== 'undefined' && blob instanceof File ? blob : new File([blob], hf.name, { lastModified: hf.lastModified || Date.now() }), null);
  };
  if (fileHost.kind === 'desktop') {
    root.querySelector('label[for="bc-file"]')?.addEventListener('click', (e) => {
      e.preventDefault();
      guard(async () => { const [hf] = await fileHost.openFile({ types: OPEN_TYPES }); await openHost(hf); });
    });
  }
  // Autosave (0.4 1.2; app-autosave.js): each IFC model with unsaved edits is a document; its copy is the edited IFC
  // (editor.save()), so "Recover your work?" reopens it with the edits in it — then Save as IFC keeps it.
  const autosave = new Autosave({ app: 'bimcraft' });
  function syncAutosave() {
    for (const m of models) {
      if (!m.editor) continue;
      if (!m.asDoc) m.asDoc = autosave.doc({ name: m.name, snapshot: async () => (unsavedIn(m.editor) ? { data: picturesUi ? picturesUi.snapshotBytes(m.editor) : m.editor.save(), meta: { name: m.name, changes: m.editor.changes.length } } : null) });
      if (unsavedIn(m.editor)) m.asDoc.changed(); else m.asDoc.clean();
    }
  }
  autosave.offer({ onRecover: async (rec) => {
    const base = String(rec.meta?.name || 'model.ifc').replace(/\.ifc$/i, '');
    const data = rec.data instanceof Blob ? rec.data : new Blob([rec.data], { type: 'application/x-step' });
    await guard(() => open(new File([data], base + '.ifc', { type: 'application/x-step' }), null));
    if (mode !== 'ifc' || !editor) throw new Error(t('recover.failed'));
    editor.recovered = true;
    renderChanges();
    status(t('recover.done', { file: base + '.ifc', n: rec.meta?.changes || 0 }));
  } });
  fileHost.onOpenFiles((files) => guard(() => openHost(files[0])));
  fileHost.launchFiles().then((files) => { if (files[0]) guard(() => openHost(files[0])); });
  // Studio Live (0.5 LV.21, live.js): the open model for the adapter; `live` = the session's adapter while one runs
  window.bimcraftLive = {
    live: null,
    get editor() { return editor; }, get name() { return ifcName; },
    open: (bytes, name) => { window.bimcraftLive.joining = true; return guard(() => openIfc(bytes, new File([bytes], name, { type: 'application/x-step' }))); },
    refresh: (geometry) => { if (!editor) return; if (geometry) guard(() => rebuild(null)); else afterEdit(); },
    status: (m) => status(m),
  };
  // …and from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the model comes from the host
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.bimcraftLive, fileHost), (err) => status(err.message, true));
  // 0.7 LC.1 (massing): a model handed over from another app (?handoff=<id>, CivilCraft's "Develop in BimCraft"): opened as if it had been dropped
  if (/[?&]handoff=/.test(location.search)) import('./handoff-in.js').then((m) => m.receiveHandoff({ search: location.search, open: async (f) => { if (siteCtxUi && await siteCtxUi.receive(f)) return; return guard(() => open(f, null)); }, status })).catch((err) => status(err.message, true));
  // 0.8 EG.78 (studio_PART_2): a library item dragged here from another app (PartCraft's part) through Studio's drag module — drop-item.js
  if (window.cadcraftStudio?.drag) Promise.all([import('./drop-item.js'), import('./libitem.js')]).then(([m, L]) => window.cadcraftStudio.drag.accept(m.dropHandlers({ L, startPlacing, get viewer() { return viewer; }, status, t, ready: () => (mode !== 'ifc' || !editor ? t('place.need.ifc') : null) }))).catch((err) => status(err.message, true));
  ui.folderInput.addEventListener('change', () => {
    const picked = fromInput(ui.folderInput.files);
    ui.folderInput.value = '';
    if (picked) guard(() => openFolder(picked));
  });
  ui.back.addEventListener('click', () => { if (folder) showFolder(); });

  // Recent folders: reopen without the picker (and, while the browser keeps the grant, without a prompt).
  const listing = (n) => status(t('folder.listing', { n, count: num(n) }));
  async function renderRecent() {
    const list = await recentFolders();
    ui.recentList.replaceChildren(...list.map((r, i) => el('li', {},
      el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => guard(async () => {
        const picked = await reopenFolder(r, listing);
        if (!picked) { status(t('folder.recent.denied', { name: r.name }), true); return; }
        await openFolder(picked);
      }) }, t('folder.recent.reopen', { name: r.name })),
      el('button', { type: 'button', className: 'bc-forget', title: t('folder.recent.forget', { name: r.name }), 'aria-label': t('folder.recent.forget', { name: r.name }),
        onClick: async () => { await forgetFolder(i); renderRecent(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })),
    )));
    ui.recent.hidden = list.length === 0;
  }
  renderRecent();

  let dragDepth = 0;
  document.addEventListener('dragenter', (e) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    dragDepth++;
    ui.veil.hidden = false;
  });
  document.addEventListener('dragleave', (e) => {
    if (!hasFiles(e)) return;
    if (--dragDepth <= 0) { dragDepth = 0; ui.veil.hidden = true; }
  });
  document.addEventListener('dragover', (e) => { if (hasFiles(e)) e.preventDefault(); });
  document.addEventListener('drop', (e) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    dragDepth = 0;
    ui.veil.hidden = true;
    const drop = dropEntries(e.dataTransfer);   // must be taken now, inside the event
    const file = e.dataTransfer.files[0];
    guard(async () => {
      if (drop.entries.some((x) => x.isDirectory)) {
        // A dropped folder needs no permission prompt; Chrome/Edge also give a handle we can remember.
        const handle = await dropFolderHandle(drop);
        const picked = handle ? await fromHandle(handle, listing) : await fromDropEntries(drop.entries, listing);
        if (picked) await openFolder(picked);
      } else if (file) {
        await open(file, null);
      }
    });
  });

  /** Unsaved edits? Ask before replacing the model. */
  /** Unsaved work in this editor: edits, or a model recovered from an autosaved copy (its edits are inside it). */
  const unsavedIn = (ed) => !!(ed && (ed.dirty || ed.recovered || ed.isNew));
  const anyDirty = () => models.some((m) => unsavedIn(m.editor)) || unsavedIn(editor);
  /** Unsaved edits (in `only`, or any open model)? Ask first. → true = cancel what was asked. */
  const keepEdits = async (only = null) => {
    const ed = only ? only.editor : (unsavedIn(editor) ? editor : models.find((m) => unsavedIn(m.editor))?.editor);
    if (!unsavedIn(ed)) return false;
    const n = ed.changes.length;
    const fileName = only ? only.name : (models.find((m) => m.editor === ed)?.name || ifcName);
    const choice = await new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-unsaved-h' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-unsaved-h' }, t('unsaved.title')),
          el('p', {}, t('unsaved.text', { n, file: fileName })),
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'save' }, t('unsaved.save')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'discard' }, t('unsaved.discard')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('dialog.cancel')))));
      dlg.addEventListener('close', () => { dlg.remove(); done(dlg.returnValue || 'cancel'); });
      document.body.append(dlg);
      dlg.showModal();
      dlg.querySelector('button[value="cancel"]').focus();
    });
    if (choice === 'save') { const m = models.find((x) => x.editor === ed); if (m && m !== cur()) setActive(m); if (!(await saveIfc())) return true; }
    return choice === 'cancel';
  };
  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  let leaving = false;
  window.addEventListener('beforeunload', (e) => { if (anyDirty() && !leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !anyDirty() || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (await keepEdits()) return;
    leaving = true;
    setTimeout(() => location.assign(url.href), anyDirty() ? 0 : 800);
  });

  /** Open one file. `path` is its place in the open folder (null for a file opened on its own). */
  async function open(file, path, { keepBundle = false } = {}) {
    vaultRef = null;   // the vault sets its own mark after it opens a file (vault-app.js)
    if (!keepBundle) bundleUi?.clear();   // 0.6 DF.12 (b): another file ends the bundle (its own layout DWGs keep it)
    if (addons?.importerFor(file.name)) { await addons.openFromAddon(file); return; }   // 0.5 AO.7: an add-on reads it into IFC
    if (isCloudFile(file.name)) { await openCloud(file); return; }   // 0.5 SG.1 / 0.6 PF (cloud-types.js; a cloud under another name: see the last branch)
    if (await keepEdits()) return;
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    status(t('open.reading', { file: file.name, size: bytes(file.size) }));
    await frame();
    const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
    if (ext === 'ccbundle' || ext === 'zip') {
      await bundleUi.open(file);   // 0.6 DF.12 (b): a project bundle (manifest.json + the model + layouts); bundle-view.js
    } else if (ext === 'dwg' || ext === 'dxf' || startsWith(head, 'AC10')) {
      await openDwg(file, path, ext === 'dxf' ? 'dxf' : 'dwg');
    } else if (isOleFile(head)) {
      await openRevit(file, path);
    } else if (ext === 'step' || ext === 'stp') {
      await openStep(file, path);   // 0.7 D7.26 (session part-08): a part's STEP, read as triangles and opened as an IFC
    } else if (ext === 'obj') {
      await openObj(file, path);   // 0.8 SU.1055 (session bim-08): a Wavefront OBJ, opened as mesh elements of a small IFC
    } else if (ext === 'ifc' || startsWith(head, 'ISO-10303-21')) {
      await openIfc(new Uint8Array(await file.arrayBuffer()), file, path);
    } else if (archicadVerdict(file.name, head)) {
      // 0.6 DF.12 (a): "ROF FDB " at offset 0 = an Archicad project for certain; the extension without it = renamed?
      throw Object.assign(new Error(t(archicadVerdict(file.name, head) === 'project' ? 'open.pln.project' : 'open.pln.renamed', { name: file.name })), { userFacing: true });
    } else if (ext === 'ifczip' || ext === 'ifcxml') {
      throw new Error(t('open.unsupported', { ext: '.' + ext }));
    } else if (cloudSignature(head)) {
      await openCloud(file);   // a LAS / LAZ, E57 or RCS point cloud with another extension
    } else {
      throw new Error(t('open.unknown', { name: file.name }));
    }
  }
  const fromFolder = (path) => !!(folder && path !== null && path !== undefined);

  /** A STEP file (0.7 D7.26): cc-step reads it as triangles (step-ifc.js), each placed solid becomes a proxy element of a small
   *  IFC4 model on one storey, and that model opens like any IFC; what the reader skipped goes into the status line. */
  async function openStep(file, path) {
    status(t('step.open.reading', { name: file.name }));
    await frame();
    let r;
    try { r = (await import('./step-ifc.js')).stepToIfc(new Uint8Array(await file.arrayBuffer()), { name: file.name.replace(/\.(step|stp)$/i, '') }); }
    catch (err) { throw Object.assign(new Error(t('step.open.failed', { name: file.name, why: err && err.code ? t(err.code, err.vars) : String(err && err.message || err) })), { userFacing: true }); }
    const ifc = new File([r.text], file.name.replace(/\.(step|stp)$/i, '') + '.ifc', { type: 'application/x-step' });   // i18n-ignore: a file name
    await openIfc(new TextEncoder().encode(r.text), ifc, path);
    const tris = r.read.solids.reduce((n, s) => n + s.indices.length / 3, 0);
    const notes = r.read.notes.map((n) => t(n.key, n.vars));
    status(t('step.open.facts', { schema: r.read.schema === 'other' ? 'STEP' : r.read.schema, n: r.read.solids.length, tris: num(tris) }) + (notes.length ? ' ' + t('step.open.notes', { notes: notes.slice(0, 3).join(' ') }) : '') + (r.prisms ? ' ' + t('ifcsolids.kept', { n: r.prisms }) : ''), false, true);
  }

  /** A Wavefront OBJ (0.8 SU.1055): obj-ifc.js reads it (metres, Y up), each OBJ object becomes a mesh element of a small IFC4
   *  model on one storey, and that model opens like any IFC. */
  async function openObj(file, path) {
    status(t('obj.open.reading', { name: file.name }));
    await frame();
    let r;
    try { r = (await import('./obj-ifc.js')).objToIfc(await file.text(), { name: file.name.replace(/\.obj$/i, '') }); }
    catch (err) { throw Object.assign(new Error(t('obj.open.failed', { name: file.name, why: err && err.code ? t(err.code, err.vars) : String(err && err.message || err) })), { userFacing: true }); }
    await openIfc(new TextEncoder().encode(r.text), new File([r.text], file.name.replace(/\.obj$/i, '') + '.ifc', { type: 'application/x-step' }), path);   // i18n-ignore: a file name
    const left = Object.keys(r.read.skipped).map((k) => t('obj.skip.' + k));
    status(t('obj.open.facts', { n: r.read.objects, tris: num(r.read.triangles) }) + (left.length ? ' ' + t('obj.open.skipped', { what: left.join(', ') }) : '') + (r.prisms ? ' ' + t('ifcsolids.kept', { n: r.prisms }) : ''));
  }

  // ---- Folders ----
  async function openFolder(picked) {
    if (await keepEdits()) return;
    status(t('folder.reading', { n: picked.files.length, count: num(picked.files.length) }));
    await frame();
    const t0 = performance.now();
    const scan = await scanFolder(picked, { onProgress: ({ done, total }) => status(t('folder.checking', { done, total })) });
    folder = { scan, index: scan.index };
    showFolder();
    if (picked.handle) { await rememberFolder(picked.handle); renderRecent(); }
    status(t('folder.read', { s: ((performance.now() - t0) / 1000).toFixed(1), models: t('folder.n.models', { n: scan.models.length, count: num(scan.models.length) }), files: t('folder.n.files', { n: scan.files, count: num(scan.files) }) }), false, true);
  }

  function showFolder() {
    const s = folder.scan;
    renderFolder(ui.folder, s, { openFile: (file, path) => guard(() => open(file, path)) });
    showStage('folder');
    ui.infoH.textContent = t('info.h.folder');
    fillDl(ui.infoDl, [
      [t('info.folder'), s.name], [t('info.files'), num(s.files)], [t('info.size'), bytes(s.totalSize)], [t('info.models'), num(s.models.length)],
      [t('info.cad'), s.cad.length ? num(s.cad.length) : null], [t('info.ifc'), s.ifc.length ? num(s.ifc.length) : null],
      [t('info.problems'), s.problems ? num(s.problems) : t('info.problems.none')],
    ]);
    ui.info.hidden = false;
    ui.back.hidden = true;
    ui.storeys.hidden = true;
    ui.classes.hidden = true;
    ui.props.replaceChildren(el('p', { className: 'bc-muted' }, t('folder.hint')));
  }

  /** GH.3-B: the display-mode buttons show the viewer's mode. */
  function syncDisplayButtons() {
    const m = viewer?.displayMode || 'edges';
    root.querySelectorAll('[data-display-set]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.displaySet === m ? 'true' : 'false'));
  }
  /** The 3D view, made on the first IFC model or point cloud. */
  let liveTex = null;
  function ensureViewer() {
    if (viewer) return viewer;
    ui.canvasWrap.hidden = false;
    viewer = new Viewer3D(ui.canvas, { onPick: (key) => { afterPick(); if (viewer.selection.size > 1) showMany(); else showProps(key); } });
    // GH.3-B: Shaded / Edges / Wireframe are three buttons beside the view cube (input commands view.display.* click them)
    root.querySelectorAll('[data-display-set]').forEach((b) => b.addEventListener('click', () => { viewer.setDisplayMode(b.dataset.displaySet); setPressed('edges', viewer.edgesOn); syncDisplayButtons(); }));
    ui.canvas.viewer = viewer;   // for tests and the console
    // 0.8 RENDER-NEXT: painted materials show their texture in the 3D view (textures-live.js, an overlay on the merged batches)
    import('./textures-live.js').then((M) => {
      liveTex = M.mountLiveTextures({
        viewer,
        paints: () => new Map(models.map((m) => [m.mi, { paint: paintLib.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }])),
        settings: () => ({}),
        onTooBig: () => status(t('paint.tex.big'), true),
      });
      window.bimcraftLiveTex = liveTex;   // for tests
      liveTex.later();
    }).catch((e) => console.warn('live textures did not start:', e));   // i18n-ignore: a console note
    // web-ifc hands the viewer Y-up coordinates: the adapter turns them so the cube's Top is the model's top. The cube
    // works in the view frame (0.6 DC.57: a building turned in its site, viewer.viewTurn): its faces are the building's
    // Front, Right … and its compass is turned back so N stays the model's north (applyViewTurn).
    const cubeBase = threeCubeOptions({ camera: () => viewer.camera, controls: () => viewer.controls, render: () => viewer.render(), home: () => viewer.view('iso'), yUp: true });
    const rz = (v, a) => [v[0] * Math.cos(a) - v[1] * Math.sin(a), v[0] * Math.sin(a) + v[1] * Math.cos(a), v[2]];   // cube axes: Z up
    const ci = addCorner(ui.canvasWrap, {
      ...cubeBase,
      getView: () => { const v = cubeBase.getView(), a = -viewer.viewTurn; return { ...v, dir: rz(v.dir, a), up: rz(v.up, a) }; },
      setView: (v, o) => { const a = viewer.viewTurn; cubeBase.setView({ ...v, dir: rz(v.dir, a), up: rz(v.up, a) }, o); },
    });
    cube3d = ci.c.cube;
    viewer.onRender = () => { ci.update(); placeMeasureLabels(); coordsUi?.render(); };
    // 0.6 DF.15 (coords-ui.js): where am I working — readouts over the 3D view and the plan, the origin and survey point
    coordsUi = mountCoords({
      wrap3d: ui.canvasWrap, canvas: ui.canvas, planWrap: root.querySelector('[data-plan-wrap]'), t,
      viewer: () => viewer,
      entry: () => { const ent = mode === 'ifc' ? cur() : null; return ent ? { api: ent.ifc.api, mid: ent.model.modelID, C: [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], place: viewer.modelMatrix(ent.mi) } : null; },
      levels: () => { const ent = cur(); return ent ? readLevels(new ModelWriter(WebIFC, ent.ifc.api, ent.model.modelID)) : []; },
      units: getDisplayUnits,
    });
    coordsUi.onToggle = () => modelUi?.coordsChanged();
    viewer.onUserMove = ci.stop;
    viewer.onGrip = (phase, i, e) => onBoxGrip(phase, i, e);   // section box grips (0.5 WL.2)
    ui.canvas.cube = ci.c;   // for tests
    return viewer;
  }
  // ---- IFC ----
  async function openIfc(data, file, path) {
    if (!ifc) {
      status(t('ifc.starting'));
      await frame();
      ifc = await IfcModel.create(WebIFC);
    }
    ensureViewer();
    status(t('ifc.reading'));
    await frame();
    const t0 = performance.now();
    stopPlacing();
    for (const m of models.slice(1)) m.ifc.close();   // a new file: the scene starts again with this one model
    for (const m of models) m.asDoc?.close();          // … and the old models' recovery copies go (kept or discarded on purpose)
    models.length = 0;
    const lv = window.bimcraftLive?.live;   // Studio Live: another file opened here ends the session for this window; a joiner's snapshot doesn't
    if (lv && !window.bimcraftLive.joining) lv.client?.leave(); else lv?.reloading();
    model = await ifc.load(data, (done, total) => { status(t('ifc.building', { done, total })); });
    refC = [...ifc.api.GetCoordinationMatrix(model.modelID)];
    await frame();
    showStage('ifc');
    mode = 'ifc';
    swapTarget = null;
    library.refresh();
    viewer.spacesOn = settings.spaces;
    viewer.edgesOn = settings.edges === 'on' || (settings.edges === 'small' && model.triangles <= SMALL_MODEL);
    viewer.displayMode = root.querySelector('[data-display-set="wireframe"]')?.getAttribute('aria-pressed') === 'true' ? 'wireframe' : viewer.edgesOn ? 'edges' : 'shaded';
    syncDisplayButtons();
    viewer.vis.showAll();   // a new model starts with everything shown
    if (meas) measureOff();
    if (walking) walkOff();
    viewer.setModel(model);
    sectionOff();   // a new model starts uncut
    modelTag = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    editor = new IfcEditor(WebIFC, ifc);
    ifcName = file.name;
    models.push({ mi: 0, ifc, model, editor, name: file.name, size: file.size, file, tag: modelTag, offset: [0, 0, 0], visible: true });
    active = models[0];
    viewer.setModelMatrix(0, placementOf(models[0]));
    applyViewTurn();   // 0.6 DC.57: square to a building turned in its site (needs the editor: buildingTurn)
    viewer.view(settings.view);
    pc?.modelChanged();   // an open point cloud is placed again against the new model
    if (bimMaps || hasSavedMaps()) ensureMaps().then((m) => m.modelChanged(), () => {});   // map layers on the ground (SG.3)
    renderModels();
    try { addonsOffer(root.querySelector('[data-addons-file]'), ifc.api, model.modelID); } catch (e) { /* the banner is optional */ }   // 0.8 AL.6
    selected = null;
    if (window.bimcraftLive?.joining) { window.bimcraftLive.joining = false; window.bimcraftLive.live?.loaded(); }
    renderChanges();
    picturesUi?.attach();   // 0.8 D8.8: the 3D planes of this model's pictures
    fillIfcInfo(model, file);
    ui.back.hidden = !fromFolder(path);
    fillStoreys(model);
    fillClasses(model);
    fillTree(false);
    propIx = null; colorField = '';
    guidKeys = null; currentIssue = null;
    renderIssues();
    findRules = [{ field: 'cls', op: 'is', value: '' }];
    renderFind();
    clashRun?.stop?.(); clashRes = null; clashAt = -1; clashMsg = '';
    checkRes = null;
    checksArmed = false; checksSrc?.clear(); syncAccepted();   // 0.7.1 → 0.8: another model, its own problems and accepted list (from its IFC)
    idsUi?.reset();   // 0.7.1 71.25: and the IDS it remembers
    if (ui.checksSec) ui.checksSec.hidden = false;
    renderChecks();
    qtoSums = null; qtoGroups = ['cls'];
    if (ui.qtoSec) ui.qtoSec.hidden = false;
    renderQto();
    fdClear(true);
    if (ui.fdSec) ui.fdSec.hidden = false;
    renderFd();
    if (ui.clashSec) ui.clashSec.hidden = false;
    renderClash();
    viewer.setColors(null);
    renderColor();
    clearProps();
    syncVis();
    setPressed('edges', viewer.edgesOn && viewer.edgesAvailable);
    setPressed('spaces', viewer.spacesOn);
    toolButton('edges').disabled = !viewer.edgesAvailable;
    toolButton('edges').title = viewer.edgesAvailable ? t('edges.title') : t('edges.title.off');
    syncEdit();
    status(t('ifc.opened', { file: file.name, n: model.elements, count: num(model.elements), s: ((performance.now() - t0) / 1000).toFixed(1) }), false, true);
    modelUi?.opened();
    workspace?.opened();
    coordsUi?.modelChanged();   // 0.6 DF.15
    linksUi?.modelChanged();   // 0.6 DF.21: the model's links (not loaded until their files are chosen)
  }

  function fillIfcInfo(model, file) {
    const p = model.project;
    ui.infoH.textContent = t('info.h.file');
    fillDl(ui.infoDl, [
      [t('info.file'), file.name],
      [t('info.size'), bytes(file.size)],
      [t('info.schema'), model.schema],
      [t('info.project'), [p.name, p.longName].filter(Boolean).join(', ')],
      [t('info.phase'), p.phase],
      [t('info.exportedfrom'), p.application],
      [t('info.author'), p.author],
      [t('info.exported'), p.timestamp],
      [t('info.elements'), num(model.elements)],
      [t('info.triangles'), num(model.triangles)],
    ]);
    // cc-ifc's notes: shapes it could not draw (yet), each with how often — the engine's own words (English)
    const notes = [...(ifc.api.notes?.(model.modelID) || [])];
    if (notes.length) ui.infoDl.append(el('dt', {}, t('ifc.notdrawn')), el('dd', { 'data-ifc-notes': '' },
      ...notes.map(([text, n]) => el('span', { className: 'bc-note-line' }, n > 1 ? t('ifc.notdrawn.count', { text, n }) : text))));
    ui.info.hidden = false;
  }

  function fillStoreys(model) {
    ui.storeyList.replaceChildren();
    const counts = new Map();
    for (const b of model.batches) counts.set(b.storey, (counts.get(b.storey) || 0) + b.indices.length / 3);
    const entries = model.storeys.filter((s) => counts.has(s.id)).map((s) => ({ id: s.id, name: s.name }));
    if (counts.has(-1)) entries.push({ id: -1, name: t('storey.none') });
    for (const s of entries.slice().reverse()) {   // top storey first, like a section
      const box = el('input', { type: 'checkbox', checked: true, 'data-storey': String(s.id) });
      box.addEventListener('change', () => viewer.setStoreyVisible(s.id, box.checked, cur().mi));
      ui.storeyList.append(el('li', {}, el('label', {}, box, el('span', {}, s.name))));
    }
    ui.storeys.hidden = entries.length === 0;
  }

  function fillClasses(model) {
    ui.classList.replaceChildren(...model.types.slice(0, 30).map((t) =>
      el('li', {}, el('span', {}, t.name.replace(/^Ifc/, '')), el('span', { className: 'n' }, num(t.count)))));
    ui.classes.hidden = model.types.length === 0;
  }

  // ---- Model tree (0.4 B13) ----
  let tree = null;
  const lineName = (id, spatial) => {
    try { const l = ifc.api.GetLine(model.modelID, id); const n = l.Name?.value, ln = l.LongName?.value, tg = l.Tag?.value; return (spatial ? (ln && n && ln !== n && !ln.startsWith(n) ? n + ' ' + ln : ln || n) : n || tg) || '#' + id; } catch (e) { return '#' + id; }
  };
  const short = (cls) => String(cls || '').replace(/^Ifc/, '').replace(/^BuildingStorey$/, 'Storey');
  const treeView = new TreeView(ui.tree, {
    label: (what, n) => {
      const name = n.kind === 'group' ? (n.loose ? t('tree.loose') : short(n.cls)) : lineName(n.id, n.kind === 'spatial');
      if (what === 'name') return name;
      if (what === 'sub') return n.kind === 'group' ? num(n.kids.length) : n.kind === 'spatial' ? short(n.cls) : (n.parent?.loose ? short(n.cls) : '');
      if (what === 'check') return t('tree.check', { name });
      if (what === 'info') return t('tree.info', { name });
      if (what === 'more') return t('tree.more', { n: n.n, total: n.total });
      return '';
    },
    onToggle: (n, on) => {
      const keys = leaves(n);
      if (on) viewer.vis.unhide(keys); else viewer.vis.hide(keys);
      viewer.applyVisibility();
      treeView.sync();
      syncVis();
    },
    onPick: (n, { add }) => {
      // an element: itself (its parts lit with it); a group, storey or space: every element in it — rooms only while shown
      const own = n.kind === 'element' ? [n.key] : leaves(n).filter((k) => viewer.spacesOn || !isSpaceKey(k));
      if (!own.length) { status(t('tree.nothing', { name: treeView.o.label('name', n) })); return; }
      let keys = own;
      if (add) { const cur = new Set(viewer.selection); const all = own.every((k) => cur.has(k)); for (const k of own) { if (all) cur.delete(k); else cur.add(k); } keys = [...cur]; }
      viewer.select(keys, { also: n.kind === 'element' ? leaves(n) : [] });
      afterPick();
      if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected); else clearProps();
      if (n.kind !== 'element' && !add) status(t('tree.picked', { n: own.length, name: treeView.o.label('name', n) }));
    },
    onInfo: (n) => { viewer.select([n.key], { also: leaves(n) }); afterPick(); showProps(n.key); },
    onZoom: (n) => { if (viewer.frameKeys(leaves(n))) status(t('tree.zoomed', { name: treeView.o.label('name', n) })); },
  });
  function fillTree(keep) {
    tree = buildTree(model, { className: (id) => ifc.className(id) });
    treeView.setTree(tree, viewer.vis, { keep });
    ui.treeSec.hidden = !tree.root && !tree.loose;
    treeView.reveal([...viewer.selection]);
  }
  /** After any change of the pick: the Show menu's states and the tree's marks follow. */
  function afterPick() { syncVis(); try { window.bimcraftFamilies?.api?.sync3d?.(); } catch (e) { /* the family panel is not up yet */ } if (tree) treeView.reveal([...viewer.selection]); if (qtoScope === 'pick') renderQto(); modelUi?.picked(); workspace?.picked(); toolbox?.refresh(); analysisUi?.picked(); pointsUi?.picked(); assetsUi?.picked(); tagsUi?.picked(); }
  window.bimcraftTree = () => ({ tree, view: treeView });   // for tests
  // ---- drafting without sight (0.8 round 3, EG.52; assets/js/app-access.js): the model tree walked in order (project, site, building, storeys, and each storey's element classes);
  // Enter picks everything in the node, as a click on the tree row does. The 3D and plan views are not described yet (next step: a plan cursor over the walls). ----
  {
    const nodes = () => {
      const out = [];
      const visit = (n, depth) => {
        if (!n || n.kind === 'element') return;
        const name = treeView.o.label('name', n), sub = treeView.o.label('sub', n);
        out.push({ id: n.key ?? name + depth + out.length, node: n, label: n.kind === 'group' ? t('access.group', { cls: name, n: sub }) : t('access.node', { name, kind: sub, n: n.size || 0, depth }) });
        for (const k of n.kids || []) visit(k, depth + 1);
      };
      visit(tree?.root, 0);
      if (tree?.loose) visit(tree.loose, 0);
      return out;
    };
    const goAccess = () => window.ccAccess.mount({
      stage: ui.canvas, label: () => t('access.stage'),
      walk: nodes,
      describe: () => {
        if (!tree || (!tree.root && !tree.loose)) return t('access.empty');
        const st = nodes().filter((x) => x.node.kind === 'spatial' && /storey/i.test(x.node.cls || ''));
        return t('access.model', { name: tree.root ? treeView.o.label('name', tree.root) : '', n: tree.root?.size ?? 0, storeys: st.length, list: st.slice(0, 12).map((x) => treeView.o.label('name', x.node)).join(', ') });
      },
      selection: () => { const n = viewer?.selection?.size || 0; if (!n) return t('access.nosel'); return t('access.selected', { n, what: String(ui.props?.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 240) }); },
      pick: (p, item) => { if (item) { treeView.o.onPick(item.node, { add: false }); window.ccAccess.say(t('access.picked', { what: item.label, n: viewer?.selection?.size || 0 })); } else window.ccAccess.say(t('access.nosel')); },
    });
    const goStatus = () => window.ccAccess.follow(ui.status, { max: 240 });
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }

  // ---- Find (0.4 B14) ----
  let findRules = [{ field: 'cls', op: 'is', value: '' }], findMode = 'all', findSaving = false;
  const readSets = () => { try { return cleanSets(localStorage.getItem(SETS_KEY) || '[]'); } catch (e) { return []; } };
  const writeSets = (sets) => { try { localStorage.setItem(SETS_KEY, JSON.stringify(sets)); } catch (e) { /* this tab only */ } };
  function renderFind() {
    if (!ui.find) return;
    ui.findSec.hidden = mode !== 'ifc' || !model;
    if (ui.findSec.hidden || !ui.findDetails.open) return;   // built when opened: the index reads every element
    const ix = index();
    const fieldSel = (r) => {
      const sel = el('select', { className: 'select-cc', 'aria-label': t('find.field'), 'data-find-field': '' });
      const groups = new Map();
      for (const f of ix.fields) { const g = f.group || t('color.group.element'); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(f); }
      for (const [g, fs] of groups) sel.append(el('optgroup', { label: g }, fs.map((f) => el('option', { value: f.id }, f.group ? f.label : t('color.field.' + f.id)))));
      if (!ix.fields.some((f) => f.id === r.field)) sel.append(el('option', { value: r.field }, r.field));
      sel.value = r.field;
      return sel;
    };
    const rows = findRules.map((r, i) => {
      const fs = fieldSel(r);
      const op = el('select', { className: 'select-cc', 'aria-label': t('find.op'), 'data-find-op': '' }, OPS.map((o) => el('option', { value: o }, t('find.op.' + o))));
      op.value = r.op;
      const listId = 'bc-find-vals-' + i;
      const val = el('input', { type: 'text', className: 'bc-input', 'aria-label': t('find.value'), value: r.value, list: listId, 'data-find-value': '', hidden: r.op === 'has' || r.op === 'hasnot' });
      const dl = el('datalist', { id: listId }, suggestions(ix, r.field, 100).map((v) => el('option', { value: v })));
      fs.addEventListener('change', () => { r.field = fs.value; r.value = ''; renderFind(); });
      op.addEventListener('change', () => { r.op = op.value; renderFind(); });
      val.addEventListener('input', () => { r.value = val.value; });
      val.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); runFind(); } });
      return el('div', { className: 'bc-find-rule', 'data-find-rule': String(i) }, fs, op, val, dl,
        findRules.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('find.remove'), 'aria-label': t('find.remove'), onClick: () => { findRules.splice(i, 1); renderFind(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null);
    });
    const modeSel = el('select', { className: 'select-cc', 'aria-label': t('find.mode'), 'data-find-mode': '' }, el('option', { value: 'all' }, t('find.mode.all')), el('option', { value: 'any' }, t('find.mode.any')));
    modeSel.value = findMode;
    modeSel.addEventListener('change', () => { findMode = modeSel.value; });
    const sets = readSets();
    const saveName = el('input', { type: 'text', className: 'bc-input', 'aria-label': t('find.save.name'), placeholder: t('find.save.name'), maxLength: 80, 'data-find-setname': '', hidden: !findSaving });
    ui.find.replaceChildren(el('div', { className: 'bc-find' },
      ...rows,
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-find-add': '', onClick: () => { findRules.push({ field: findRules[findRules.length - 1]?.field || 'cls', op: 'is', value: '' }); renderFind(); } }, t('find.add')),
        findRules.length > 1 ? modeSel : null),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-find-go': '', onClick: () => runFind() }, el('i', { className: 'bi bi-search', 'aria-hidden': 'true' }), ' ', t('find.go')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-find-save': '', onClick: () => {
          if (!findSaving) { findSaving = true; renderFind(); ui.find.querySelector('[data-find-setname]')?.focus(); return; }
          const name = ui.find.querySelector('[data-find-setname]').value.trim();
          if (!name) return;
          const rest = readSets().filter((x) => x.name !== name);
          writeSets(cleanSets([...rest, { name, mode: findMode, rules: findRules }]));
          findSaving = false; renderFind();
          status(t('find.saved', { name }));
        } }, t('find.save')),
        saveName),
      el('p', { className: 'bc-h' }, t('find.sets')),
      sets.length ? el('ul', { className: 'bc-find-sets', 'data-find-sets': '' }, sets.map((x) => el('li', {},
        el('button', { type: 'button', className: 'bc-linkbtn', title: t('find.apply', { name: x.name }), 'data-find-set': x.name, onClick: () => { findRules = x.rules.map((r) => ({ ...r })); findMode = x.mode; renderFind(); runFind(); } }, x.name),
        el('button', { type: 'button', className: 'bc-forget', title: t('find.delete', { name: x.name }), 'aria-label': t('find.delete', { name: x.name }), onClick: () => { writeSets(readSets().filter((y) => y.name !== x.name)); renderFind(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })))))
        : el('p', { className: 'bc-muted' }, t('find.none'))));
  }
  function runFind() {
    const needs = findRules.filter((r) => r.op !== 'has' && r.op !== 'hasnot');
    if (needs.some((r) => !String(r.value).trim())) { status(t('find.incomplete'), true); return; }
    const keys = find(index(), { rules: findRules, mode: findMode });
    viewer.select(keys);
    afterPick();
    if (keys.length > 1) showMany(); else if (keys.length) showProps(keys[0]); else clearProps();
    status(t('find.found', { n: keys.length }));
  }
  window.addEventListener('storage', (e) => { if (e.key === SETS_KEY && model) renderFind(); });   // another tab saved a set
  ui.findDetails?.addEventListener('toggle', () => { if (ui.findDetails.open) renderFind(); });
  window.bimcraftFind = { run: (rules, m = 'all') => { findRules = rules; findMode = m; ui.findDetails.open = true; renderFind(); runFind(); return [...viewer.selection]; } };   // for tests

  // ---- 4D schedule (0.4 B22) ----
  let fdTasks = null, fdErrors = [], fdDay = null, fdOn = false, fdPlay = 0, fdFile = '', fdRaf = 0;
  let fdGroup = '';   // 0.6 WL.6: '' = every task, else a stage ('s:…') or work package ('p:…') key (ifc-4d.js groupsOf)
  const fdView = () => (fdTasks ? inGroup(fdTasks, fdGroup) : []);
  const fdGroupName = () => groupsOf(fdTasks || []).find((g) => g.key === fdGroup)?.name || '';
  /** Choose a stage or work package (or '' for every task): the slider, Play, the painting and the list follow it. */
  function fdSetGroup(key) {
    fdGroup = key || '';
    const sp = span(fdView());
    if (sp && (fdDay === null || fdDay < sp.first - 1 || fdDay > sp.last + 1)) fdDay = sp.first;
    fdApply();
  }
  function renderFd() {
    if (!ui.fd) return;
    ui.fdSec.hidden = mode !== 'ifc' || !model;
    if (ui.fdSec.hidden || !ui.fdDetails.open) return;
    const kids = [el('p', { className: 'bc-muted' }, t('fd.intro')),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-4d-open': '', onClick: () => ui.fdInput.click() }, el('i', { className: 'bi bi-folder2-open', 'aria-hidden': 'true' }), ' ', t('fd.open')),
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-template': '', onClick: () => fdTemplate() }, t('fd.template')),
        fdTasks && fdTasks.length ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-save-xml': '', onClick: () => fdSave('xml') }, t('fd.save.xml')) : null,
        fdTasks && fdTasks.length ? el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-save-csv': '', onClick: () => fdSave('csv') }, t('fd.save.csv')) : null)];
    if (fdErrors.length) kids.push(el('p', { className: 'bc-muted' }, t('fd.problems', { n: fdErrors.length })),
      el('ul', { className: 'bc-4d-errors', 'data-4d-errors': '' }, fdErrors.slice(0, 20).map((e) => el('li', {}, t('fd.err.' + e.message, { line: e.line, task: e.task ?? '', field: e.field ?? '', value: e.value ?? '' })))));
    if (fdTasks && fdTasks.length) {
      const view = fdView(), groups = groupsOf(fdTasks);
      const sp = span(view) || span(fdTasks), st = statusAt(view, fdDay);
      const n = { built: 0, progress: 0, waiting: 0 };
      for (const v of st.values()) n[v]++;
      const slider = el('input', { type: 'range', min: String(sp.first - 1), max: String(sp.last + 1), step: '1', value: String(fdDay), 'aria-label': t('fd.date'), 'data-4d-day': '' });
      slider.addEventListener('input', () => { fdDay = Number(slider.value); fdApply(); });
      const pal = CATEGORICAL[theme()];
      const untasked = index().ids.length - st.size;
      if (groups.length) {   // 0.6 WL.6: stages and work packages
        const sel = el('select', { className: 'select-cc bc-4d-group', 'data-4d-group': '', 'aria-label': t('fd.group') },
          el('option', { value: '' }, t('fd.group.all', { n: fdTasks.length })),
          groups.map((g) => el('option', { value: g.key, selected: g.key === fdGroup }, t(g.kind === 'stage' ? 'fd.group.stage' : (g.stage ? 'fd.group.package.in' : 'fd.group.package'), { name: g.name, stage: g.stage, n: g.tasks }))));
        sel.addEventListener('change', () => fdSetGroup(sel.value));
        const gs = groupState(view, fdDay);
        kids.push(el('div', { className: 'bc-find-row' }, el('label', { className: 'bc-4d-grouplabel' }, el('span', {}, t('fd.group')), sel)),
          fdGroup ? el('div', { className: 'bc-find-row' },
            el('span', { className: 'bc-muted', 'data-4d-group-state': '' }, t('fd.group.state', { ...gs })),
            el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-group-pick': '', onClick: () => { const k = groupKeys(view); if (k.length) pickKeys(k); } }, t('fd.group.pick'))) : null);
      }
      kids.push(
        el('div', { className: 'bc-4d-day' }, el('span', { className: 'bc-4d-date', 'data-4d-date': '' }, dayText(fdDay)), slider),
        el('div', { className: 'bc-find-row' },
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-4d-play': '', 'aria-pressed': fdPlay ? 'true' : 'false', onClick: () => fdToggle() }, el('i', { className: 'bi ' + (fdPlay ? 'bi-pause-fill' : 'bi-play-fill'), 'aria-hidden': 'true' }), ' ', t(fdPlay ? 'fd.pause' : 'fd.play')),
          el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-clear': '', onClick: () => fdClear() }, t('fd.clear'))),
        el('ul', { className: 'bc-4d-legend', 'data-4d-legend': '' },
          el('li', { 'data-4d-n': 'built' }, el('span', { className: 'bc-sw is-own', 'aria-hidden': 'true' }), el('span', {}, t('fd.built')), el('span', { className: 'n' }, String(n.built))),
          el('li', { 'data-4d-n': 'progress' }, el('span', { className: 'bc-sw', style: 'background:' + pal[2], 'aria-hidden': 'true' }), el('span', {}, t('fd.progress')), el('span', { className: 'n' }, String(n.progress))),
          el('li', { 'data-4d-n': 'waiting' }, el('span', { className: 'bc-sw is-ghost', 'aria-hidden': 'true' }), el('span', {}, t('fd.waiting')), el('span', { className: 'n' }, String(n.waiting)))),
        el('p', { className: 'bc-muted' }, t('fd.untasked', { n: untasked })),
        el('ul', { className: 'bc-4d-tasks', 'data-4d-tasks': '' }, view.map((tk) => el('li', { className: fdDay >= tk.start && fdDay <= tk.finish ? 'is-now' : '' },
          el('button', { type: 'button', className: 'bc-linkbtn', 'data-4d-task': '', title: tk.name, onClick: () => { if (tk.keys.length) pickKeys(tk.keys); } }, tk.name),
          el('span', { className: 'n' }, t('fd.task.count', { n: tk.keys.length })),
          el('span', { className: 'when' }, t('fd.task.when', { start: dayText(tk.start), finish: dayText(tk.finish) }))))));
      const pl = planTasks(view);   // critical path on calendar days (schedule-io.js); the SVG's text is escaped there
      for (const e of pl.errors) kids.push(el('p', { className: 'bc-muted', 'data-4d-plan-error': '' }, t('fd.err.' + e.message, { line: 0, task: e.task ?? '', uid: e.uid ?? '' })));
      const gantt = el('div', { className: 'bc-4d-gantt', 'data-4d-gantt': '', style: 'overflow:auto' });
      gantt.innerHTML = ganttSvg(pl, { width: 760 });
      kids.push(el('p', { className: 'bc-muted' }, t('fd.gantt', { n: pl.critical.length })), gantt);
    } else if (fdTasks) kids.push(el('p', { className: 'bc-muted' }, t('fd.none')));
    ui.fd.replaceChildren(...kids);
  }
  async function fdOpen(file) {
    let text = '';
    try { text = await file.text(); } catch (e) { status(t('fd.none'), true); return; }
    const isXml = /\.(xml|mspdi)$/i.test(file.name) || /^\s*(<\?xml|<Project)/.test(text);
    const p = isXml ? readMspdi(text) : /(^|,)\s*predecessors?\s*(,|\r|\n|$)/im.test(text.split(/\r?\n/)[0]) ? readCsv(text) : parseTasks(text);
    const m = matchTasks(index(), p.tasks);
    fdErrors = [...p.errors, ...m.flatMap((tk) => tk.unmatched.map((r) => ({ line: r.line, message: r.unknownField ? 'nofield' : 'nomatch', field: r.field, value: r.value, task: tk.name })))].sort((a, b) => a.line - b.line);
    fdTasks = m;
    bimTotalsInvalidate();
    fdGroup = '';
    fdFile = file.name;
    if (!m.length) { fdOn = false; renderFd(); status(t('fd.none'), true); return; }
    fdDay = span(m).first;
    if (colorField) colorOff();
    if (cmpRes) clearCompare(true);
    fdOn = true;
    fdApply();
    status(t('fd.loaded', { file: file.name, n: m.length }), false, true);
  }
  /** Paint the chosen day: in progress ochre, not started see-through, the rest as it is. */
  function fdApply() {
    if (!fdOn || !fdTasks || !viewer) return;
    const view = fdView(), st = statusAt(view, fdDay), pal = CATEGORICAL[theme()];
    const inG = fdGroup ? new Set(groupKeys(view)) : null;   // a group plays as one: what is outside it goes see-through
    const colors = new Map(), solid = [];
    for (const k of index().keys) { const s2 = st.get(k); if (s2 === 'progress') colors.set(k, pal[2]); if (s2 !== 'waiting' && (!inG || inG.has(k))) solid.push(k); }
    viewer.setColors(colors.size ? colors : null);
    if (solid.length === index().keys.length) viewer.vis.showAll(); else viewer.vis.isolate(solid, { ghost: true });
    viewer.applyVisibility();
    treeView.sync();
    syncVis();
    renderFd();
    const n = { built: 0, progress: 0, waiting: 0 };
    for (const v of st.values()) n[v]++;
    if (!fdPlay) status(fdGroup ? t('fd.status.group', { group: fdGroupName(), date: dayText(fdDay), ...n }) : t('fd.status', { date: dayText(fdDay), ...n }));
  }
  function fdToggle() {
    if (fdPlay) { clearInterval(fdPlay); fdPlay = 0; renderFd(); return; }
    const sp = span(fdView()) || span(fdTasks);
    if (fdDay > sp.last) fdDay = sp.first - 1;
    fdPlay = setInterval(() => {
      if (!fdOn || fdDay > sp.last) { clearInterval(fdPlay); fdPlay = 0; fdApply(); return; }
      fdDay++;
      cancelAnimationFrame(fdRaf);
      fdRaf = requestAnimationFrame(fdApply);
    }, 150);
    renderFd();
  }
  function fdClear(quiet = false) {
    if (fdPlay) { clearInterval(fdPlay); fdPlay = 0; }
    const was = fdOn;
    fdOn = false; fdTasks = null; fdErrors = []; fdDay = null; fdGroup = '';
    bimTotalsInvalidate();
    if (was && viewer) { viewer.setColors(null); viewer.vis.showAll(); viewer.applyVisibility(); treeView.sync(); syncVis(); }
    renderFd();
    if (!quiet) status(t('fd.cleared'));
  }
  /** Save the loaded schedule with its links: MS Project XML (MSPDI) or CSV (SU.931). */
  function fdSave(kind) {
    if (!fdTasks?.length) return;
    const base = (fdFile || ifcName || 'schedule').replace(/\.[^.]+$/, '');
    const name = base + (kind === 'xml' ? '.xml' : ' links.csv');   // i18n-ignore: a file name
    const tasks = fdTasks.map(({ keys, unmatched, ...rest }) => rest);
    download(name, kind === 'xml' ? writeMspdi(tasks, { title: base }) : '\ufeff' + writeCsv(tasks), kind === 'xml' ? 'application/xml' : 'text/csv;charset=utf-8');
    status(t('fd.template.done', { name }));
  }
  function fdTemplate() {
    const name = ifcName.replace(/\.ifc$/i, '') + ' tasks.csv';   // i18n-ignore: a file name
    const storeys = [...model.storeys].sort((a, b) => (a.elevation ?? 0) - (b.elevation ?? 0)).map((s2) => s2.name).filter(Boolean);
    download(name, '\ufeff' + templateCsv(storeys), 'text/csv;charset=utf-8');
    status(t('fd.template.done', { name }));
  }
  ui.fdInput?.addEventListener('change', () => { const f = ui.fdInput.files[0]; ui.fdInput.value = ''; if (f) fdOpen(f); });
  ui.fdDetails?.addEventListener('toggle', () => { if (ui.fdDetails.open) renderFd(); });
  new MutationObserver(() => { if (fdOn) fdApply(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  // 0.8 chem-draw_PART_4 (XE.9): live values tint the elements whose Tag is a reading's tag (the Plant tab's "Show the values"); read only, one colour per state.
  const LIVE_TINT = { ok: '#3a8f5c', uncertain: '#c9891a', bad: '#d33a2f', stale: '#8a8a8a', high: '#d33a2f', low: '#2a6fd6' };
  window.bimcraftTint = {
    tint: (list) => {
      if (!viewer) return { matched: 0, unmatched: (list || []).map((x) => x.tag) };
      const rows = (list || []).filter((x) => x && x.tag != null), m = matchTasks(index(), rows.map((x) => ({ rows: [{ field: 'tag', value: x.tag }] })));
      const colors = new Map(), unmatched = [];
      m.forEach((tk, k) => { if (!tk.keys.length) unmatched.push(rows[k].tag); for (const key of tk.keys) colors.set(key, LIVE_TINT[rows[k].state] || LIVE_TINT.ok); });
      viewer.setColors(colors.size ? colors : null);
      return { matched: colors.size, unmatched };
    },
    clear: () => { if (viewer) viewer.setColors(null); },
  };
  window.bimcraftFourD = { open: (name, text) => fdOpen(new File([text], name, { type: /\.(xml|mspdi)$/i.test(name) ? 'application/xml' : 'text/csv' })), tasks: () => fdTasks, day: (d) => { fdDay = d; fdApply(); }, group: (k) => fdSetGroup(k), groups: () => groupsOf(fdTasks || []), state: () => fdOn && { day: fdDay, tasks: fdTasks.length, group: fdGroup, shown: fdView().length, status: Object.fromEntries(statusAt(fdView(), fdDay)), solid: viewer.vis.isolated ? viewer.vis.isolated.size : null } };   // for tests

  // ---- Quantity totals (0.4 B20) ----
  let qtoScope = 'all', qtoGroups = ['cls'], qtoSums = null, qtoView = 'totals';   // qtoSums null = the quantity sets' fields, first time
  let spaceIx = null;   // { model, ix }: the spaces' own index (they are rooms, not in the element index)
  const spacesIndex = () => { if (spaceIx?.model !== model) spaceIx = { model, ix: propertyIndex(WebIFC, ifc.api, model.modelID, model, { spaces: true }) }; return spaceIx.ix; };
  const qtoKeys = () => (qtoScope === 'pick' ? [...viewer.selection] : null);
  const spaceRes = () => spaceSchedule(spacesIndex(), model, { keys: qtoKeys() });
  const rowsRes = () => elementRows(index(), { keys: qtoKeys(), columns: [...qtoGroups, ...(qtoSums || [])] });
  const QTO_SHOWN = 200;
  const fmtNum = (n) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(4))));
  function qtoResult() {
    const ix = index();
    const keys = qtoScope === 'pick' ? [...viewer.selection] : null;
    return totals(ix, { keys, groupBy: qtoGroups, sum: qtoSums || [] });
  }
  function renderQto() {
    if (!ui.qto) return;
    ui.qtoSec.hidden = mode !== 'ifc' || !model;
    if (ui.qtoSec.hidden || !ui.qtoDetails.open) return;
    const ix = index(), qf = quantityFields(ix);
    if (qtoSums === null) qtoSums = qf.filter((f) => /^Qto_|BaseQuantities/i.test(f.group)).slice(0, 3).map((f) => f.id);
    qtoSums = qtoSums.filter((id) => qf.some((f) => f.id === id));
    const fieldName = (id) => { const f = ix.fields.find((x) => x.id === id); return f ? fieldLabel(f) : id; };
    const scope = el('select', { className: 'select-cc', 'data-qto-scope': '' }, el('option', { value: 'all' }, t('qto.scope.all')), el('option', { value: 'pick' }, t('qto.scope.pick', { n: viewer.selection.size })));
    scope.value = qtoScope;
    scope.addEventListener('change', () => { qtoScope = scope.value; renderQto(); });
    const viewSel = el('select', { className: 'select-cc', 'data-qto-view': '' }, ['totals', 'rows', 'spaces', 'infra'].map((v) => el('option', { value: v }, t('qto.view.' + v))));
    viewSel.value = qtoView;
    viewSel.addEventListener('change', () => { qtoView = viewSel.value; renderQto(); });
    const csvBtn = el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-qto-csv': '', onClick: () => qtoCsv() }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('qto.csv')));
    if (qtoView === 'infra') {   // 0.8 SU.882: IFC 4.3 roads, rails, bridges and the rest, totalled per class
      let rows = [], why = '';
      try { rows = summary43(read43(ifc.api.file(model.modelID))); } catch (e) { why = String(e.message || e); }
      const m = (v) => (v ? fmtNum(v) : '');
      ui.qto.replaceChildren(el('div', { className: 'bc-find', 'data-qto-infra': '' },
        el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
        why ? el('p', { className: 'bc-muted' }, t('qto.infra.failed', { why })) : rows.length ? el('p', { className: 'bc-muted' }, t('qto.infra.kinds', { n: rows.length })) : el('p', { className: 'bc-muted', 'data-qto-noinfra': '' }, t('qto.infra.none')),
        rows.length ? el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
          el('thead', {}, el('tr', {}, ['group', 'class', 'type'].map((h) => el('th', {}, t('qto.infra.' + h))), ['count', 'length', 'area', 'volume'].map((h) => el('th', { className: 'n' }, t('qto.infra.' + h))))),
          el('tbody', {}, rows.slice(0, QTO_SHOWN).map((r) => el('tr', {}, el('td', {}, r.group), el('td', {}, String(r.cls).replace(/^Ifc/, '')), el('td', {}, r.predefined), el('td', { className: 'n' }, String(r.count)), el('td', { className: 'n' }, m(r.length)), el('td', { className: 'n' }, m(r.area)), el('td', { className: 'n' }, m(r.volume))))))) : null,
        rows.length ? el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-qto-toTakeoff': '', title: t('qto.infra.send.title'), onClick: () => sendInfra() }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('qto.infra.send'))) : null));
      return;
    }
    if (qtoView === 'spaces') {
      const sp = spaceRes();
      const cellOf = (v, from) => el('td', { className: 'n' + (from === 'shape' ? ' is-measured' : ''), title: from === 'shape' ? t('qto.sp.measured') : null }, v === '' ? '' : fmtNum(v));
      ui.qto.replaceChildren(el('div', { className: 'bc-find' },
        el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
        el('label', { className: 'bc-clash' }, t('qto.scope'), scope),
        sp.rows.length ? el('p', { className: 'bc-muted' }, t('qto.spaces.count', { n: sp.rows.length }), ' ', t('qto.sp.note')) : el('p', { className: 'bc-muted', 'data-qto-nospaces': '' }, t('qto.spaces.none')),
        sp.rows.length ? el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
          el('thead', {}, el('tr', {}, ['number', 'name', 'storey'].map((h) => el('th', {}, t('qto.sp.' + h))), ['area', 'volume'].map((h) => el('th', { className: 'n' }, t('qto.sp.' + h))))),
          el('tbody', {}, sp.rows.slice(0, QTO_SHOWN).map((r) => el('tr', {}, el('td', {}, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-pick': '', onClick: () => pickKeys([r.key]) }, String(r.number))), el('td', {}, String(r.name)), el('td', {}, String(r.storey)), cellOf(r.area, r.areaFrom), cellOf(r.volume, r.volumeFrom)))),
          el('tfoot', {}, el('tr', {}, el('td', { colSpan: 3 }, t('qto.total')), el('td', { className: 'n' }, fmtNum(sp.total.area)), el('td', { className: 'n' }, fmtNum(sp.total.volume)))))) : null,
        sp.rows.length ? csvBtn : null));
      return;
    }
    const groupRows = qtoGroups.map((g, i) => {
      const sel = el('select', { className: 'select-cc', 'aria-label': t('qto.group'), 'data-qto-group': String(i) });
      const groups = new Map();
      for (const f of ix.fields) { if (f.id === 'guid') continue; const gn = f.group || t('color.group.element'); if (!groups.has(gn)) groups.set(gn, []); groups.get(gn).push(f); }
      for (const [gn, list] of groups) sel.append(el('optgroup', { label: gn }, list.map((f) => el('option', { value: f.id }, fieldLabel(f)))));
      sel.value = g;
      sel.addEventListener('change', () => { qtoGroups[i] = sel.value; renderQto(); });
      return el('div', { className: 'bc-find-rule' }, sel,
        qtoGroups.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('find.remove'), 'aria-label': t('find.remove'), onClick: () => { qtoGroups.splice(i, 1); renderQto(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null);
    });
    const sumBoxes = [];
    let lastSet = null;
    for (const f of qf) {   // under a heading per property set, so each box shows just the property's name
      const set = f.group || t('color.group.element');
      if (set !== lastSet) { sumBoxes.push(el('p', { className: 'bc-qto-set', title: set }, set)); lastSet = set; }
      const cb = el('input', { type: 'checkbox', value: f.id, checked: qtoSums.includes(f.id), 'data-qto-sum': f.id });
      cb.addEventListener('change', () => { qtoSums = cb.checked ? [...qtoSums, f.id] : qtoSums.filter((x) => x !== f.id); renderQto(); });
      sumBoxes.push(el('label', {}, cb, el('span', {}, fieldLabel(f))));
    }
    const sums = qf.length ? el('div', { className: 'bc-qto-sums', role: 'group', 'aria-label': t('qto.sum') }, ...sumBoxes) : el('p', { className: 'bc-muted' }, t('qto.sum.none'));
    if (qtoView === 'rows') {
      const rr = rowsRes();
      const show2 = (v) => (v === '' ? '' : typeof v === 'number' ? fmtNum(v) : String(v).replace(/^Ifc(?=[A-Z])/, ''));
      ui.qto.replaceChildren(el('div', { className: 'bc-find' },
        el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
        el('label', { className: 'bc-clash' }, t('qto.scope'), scope),
        el('p', { className: 'bc-h' }, t('qto.columns')), ...groupRows,
        qtoGroups.length < MAX_GROUP ? el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-add': '', onClick: () => { qtoGroups.push('name'); renderQto(); } }, t('qto.column.add'))) : null,
        el('p', { className: 'bc-h' }, t('qto.sum')), sums,
        el('p', { className: 'bc-muted' }, t('qto.elements', { n: rr.rows.length }), ' ', t('qto.units')),
        rr.rows.length > QTO_SHOWN ? el('p', { className: 'bc-muted' }, t('qto.more', { shown: QTO_SHOWN, n: rr.rows.length })) : null,
        el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
          el('thead', {}, el('tr', {}, rr.columns.map((c, i) => el('th', { className: i >= qtoGroups.length ? 'n' : '' }, fieldName(c))))),
          el('tbody', {}, rr.rows.slice(0, QTO_SHOWN).map((r) => el('tr', {}, r.values.map((v, i) => i === 0
            ? el('td', {}, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-pick': '', onClick: () => pickKeys([r.key]) }, show2(v) || '#' + (r.key - model.keyBase)))
            : el('td', { className: i >= qtoGroups.length ? 'n' : '' }, show2(v)))))))),
        csvBtn));
      return;
    }
    const res = qtoResult();
    const shown = res.rows.slice(0, QTO_SHOWN);
    const gaps = res.sum.map((_, i) => res.total.counted[i] < res.total.count);
    const show = (v) => (v === '' ? t('qto.empty') : typeof v === 'number' ? fmtNum(v) : String(v).replace(/^Ifc(?=[A-Z])/, ''));
    const table = el('div', { className: 'bc-qto-wrap' }, el('table', { className: 'bc-qto-table', 'data-qto-table': '' },
      el('thead', {}, el('tr', {}, res.groupBy.map((g) => el('th', {}, fieldName(g))), el('th', { className: 'n' }, t('qto.count')), res.sum.map((f) => el('th', { className: 'n' }, fieldName(f))))),
      el('tbody', {}, shown.map((r) => el('tr', {}, r.values.map((v) => el('td', {}, show(v))), el('td', { className: 'n' }, String(r.count)), r.sums.map((v, i) => el('td', { className: 'n', title: gaps[i] && r.counted[i] < r.count ? t('qto.leftout', { name: String(r.count - r.counted[i]) }) : null }, fmtNum(v)))))),
      el('tfoot', {}, el('tr', {}, el('td', { colSpan: res.groupBy.length }, t('qto.total')), el('td', { className: 'n' }, String(res.total.count)), res.total.sums.map((v) => el('td', { className: 'n' }, fmtNum(v)))))));
    ui.qto.replaceChildren(el('div', { className: 'bc-find' },
      el('label', { className: 'bc-clash' }, t('qto.view'), viewSel),
      el('label', { className: 'bc-clash' }, t('qto.scope'), scope),
      el('p', { className: 'bc-h' }, t('qto.group')), ...groupRows,
      qtoGroups.length < MAX_GROUP ? el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'bc-linkbtn', 'data-qto-add': '', onClick: () => { qtoGroups.push('storey'); renderQto(); } }, t('qto.group.add'))) : null,
      el('p', { className: 'bc-h' }, t('qto.sum')), sums,
      el('p', { className: 'bc-muted' }, t('qto.rows', { n: res.rows.length }), ' ', t('qto.units')),
      res.rows.length > QTO_SHOWN ? el('p', { className: 'bc-muted' }, t('qto.more', { shown: QTO_SHOWN, n: res.rows.length })) : null,
      table,
      csvBtn));
  }
  function sendInfra() {   // 0.8 SU.882: a 'cadcraft-quantities' file TakeoffCraft opens
    try {
      const doc = quantities43(read43(ifc.api.file(model.modelID)), { project: ifcName.replace(/\.ifc$/i, ''), app: 'BimCraft' });
      const name = ifcName.replace(/\.ifc$/i, '') + '.quantities.json';   // i18n-ignore: a file name
      download(name, JSON.stringify(doc, null, 1), 'application/json');
      status(t('qto.downloaded', { name }));
    } catch (e) { status(t('qto.infra.failed', { why: String(e.message || e) }), true); }
  }
  function qtoCsv() {
    const ix = index();
    const label = (id) => { const f = ix.fields.find((x) => x.id === id); return f ? (f.group ? f.group + '.' + f.label : fieldLabel(f)) : id; };
    const base = ifcName.replace(/\.ifc$/i, '');
    let name, text;
    if (qtoView === 'spaces') {
      const sp = spaceRes();
      if (!sp.rows.length) { status(t('qto.spaces.none'), true); return; }
      const from = (f) => (f === 'shape' ? t('qto.sp.shape') : f === 'file' ? t('qto.sp.file') : '');
      text = tableCsv(['number', 'name', 'storey', 'area', 'areafrom', 'volume', 'volumefrom'].map((h) => t('qto.sp.' + h)),
        [...sp.rows.map((r) => [r.number, r.name, r.storey, r.area, from(r.areaFrom), r.volume, from(r.volumeFrom)]), [t('qto.total'), '', '', sp.total.area, '', sp.total.volume, '']]);
      name = base + ' spaces.csv';   // i18n-ignore: a file name
    } else if (qtoView === 'rows') {
      const rr = rowsRes();
      if (!rr.rows.length) { status(t('qto.nothing'), true); return; }
      text = tableCsv(['GlobalId', ...rr.columns.map(label)], rr.rows.map((r) => [ix.value('guid', r.key - ix.keyBase) ?? '', ...r.values]));   // i18n-ignore: an IFC attribute name
      name = base + ' elements.csv';   // i18n-ignore: a file name
    } else {
      const res = qtoResult();
      if (!res.total.count) { status(t('qto.nothing'), true); return; }
      text = totalsCsv(res, { label, countLabel: t('qto.count'), totalLabel: t('qto.total'), leftOut: (h) => t('qto.leftout', { name: h }) });
      name = base + ' quantities.csv';   // i18n-ignore: a file name
    }
    download(name, '\ufeff' + text, 'text/csv;charset=utf-8');
    status(t('qto.downloaded', { name }));
  }
  ui.qtoDetails?.addEventListener('toggle', () => { if (ui.qtoDetails.open) renderQto(); });
  window.bimcraftQto = { set: (o) => { if (o.view) qtoView = o.view; if (o.scope) qtoScope = o.scope; if (o.groups) qtoGroups = o.groups; if (o.sums) qtoSums = o.sums; ui.qtoDetails.open = true; renderQto(); return qtoResult(); } };   // for tests

  // ---- Model checks (0.4 B19) ----
  const RULES_KEY = 'bimcraft.checkrules';
  let checkRes = null;
  let checksSrc = null, checksArmed = false;   // 0.7.1 → 0.8: Model checks in the shell's Problems (below)
  const readRules = () => { try { return cleanRules(localStorage.getItem(RULES_KEY)) || [{ cls: '', field: 'name' }]; } catch (e) { return [{ cls: '', field: 'name' }]; } };
  const writeRules = (rs) => { try { localStorage.setItem(RULES_KEY, JSON.stringify(rs)); } catch (e) { /* this tab only */ } };
  function renderChecks() {
    if (!ui.checks) return;
    ui.checksSec.hidden = mode !== 'ifc' || !model;
    if (ui.checksSec.hidden || !ui.checksDetails.open) return;
    const ix = index(), rules = readRules();
    const classes = [...new Set(ix.values('cls').values())].sort();
    const rows = rules.map((r, i) => {
      const cs = el('select', { className: 'select-cc', 'aria-label': t('color.field.cls'), 'data-checks-cls': '' }, el('option', { value: '' }, t('checks.class.any')), classes.map((c) => el('option', { value: c }, c.replace(/^Ifc/, ''))));
      cs.value = classes.includes(r.cls) ? r.cls : '';
      const fs = el('select', { className: 'select-cc', 'aria-label': t('find.field'), 'data-checks-field': '' });
      const groups = new Map();
      for (const f of ix.fields) { if (f.id === 'cls' || f.id === 'guid') continue; const g = f.group || t('color.group.element'); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(f); }
      for (const [g, list] of groups) fs.append(el('optgroup', { label: g }, list.map((f) => el('option', { value: f.id }, fieldLabel(f)))));
      if (![...fs.options].some((o) => o.value === r.field)) fs.append(el('option', { value: r.field }, r.field));
      fs.value = r.field;
      cs.addEventListener('change', () => { rules[i].cls = cs.value; writeRules(rules); });
      fs.addEventListener('change', () => { rules[i].field = fs.value; writeRules(rules); });
      return el('div', { className: 'bc-find-rule', 'data-checks-rule': String(i) }, cs, fs,
        rules.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('find.remove'), 'aria-label': t('find.remove'), onClick: () => { rules.splice(i, 1); writeRules(rules); renderChecks(); } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null);
    });
    const pickBtn = (label, keys) => el('button', { type: 'button', className: 'bc-linkbtn', 'data-checks-pick': '', onClick: () => pickKeys(keys) }, label);
    const groupLabel = (c, g) => {
      if (c.id === 'required') return t('checks.group.required', { cls: g.rule.cls ? g.rule.cls.replace(/^Ifc/, '') : t('checks.class.any'), field: fieldLabel(ix.fields.find((f) => f.id === g.rule.field) || { group: '-', label: g.rule.field }), n: g.keys.length });
      if (c.id === 'guid') return t('checks.group.guid', { guid: g.label, n: g.keys.length });
      if (c.id === 'stacked') return t('checks.group.stacked', { name: nameOfKey(g.keys[0]), n: g.keys.length });
      return t('checks.group.storey', { n: g.keys.length });
    };
    const res = checkRes ? el('ul', { className: 'bc-checks-res', 'data-checks-res': '' }, checkRes.map((c) => el('li', { 'data-check': c.id },
      el('div', { className: 'bc-check-head' }, el('span', {}, t('checks.name.' + c.id)), c.count ? el('span', { className: 'n' }, String(c.count)) : el('span', { className: 'ok' }, t('checks.none'))),
      c.groups.length ? el('ul', {}, c.groups.slice(0, 50).map((g) => el('li', {}, pickBtn(groupLabel(c, g), g.keys)))) : null))) : null;
    ui.checks.replaceChildren(el('div', { className: 'bc-find' },
      el('p', { className: 'bc-h' }, t('checks.required')),
      el('p', { className: 'bc-muted' }, t('checks.required.hint')),
      ...rows,
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'bc-linkbtn', 'data-checks-add': '', onClick: () => { rules.push({ cls: '', field: 'name' }); writeRules(rules); renderChecks(); } }, t('checks.add'))),
      el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-checks-run': '', onClick: () => runModelChecks() }, t('checks.run'))),
      res,
      editableBox()));
  }
  /** 0.8 DC.115: what the model's shapes are made of (extrusions and other solids stay editable; face lists do not) and, when some
   *  tessellated bodies are exactly straight prisms, a button that writes them back as IfcExtrudedAreaSolid (one undo step). */
  let solidsRep = null;
  function editableBox() {
    if (!editor || mode !== 'ifc') return null;
    const box = el('div', { className: 'bc-find', 'data-editable-geom': '' }, el('p', { className: 'bc-h' }, t('solids.h')));
    const fill = (rep) => {
      const n = rep.products;
      const pct = n ? Math.round(rep.share * 100) : 0;
      box.append(el('p', { className: 'bc-muted', 'data-solids-sum': '' }, t('solids.sum', { n, pct, parametric: rep.parametric, tessellated: rep.tessellated, brep: rep.brep })));
      if (rep.tessellated) box.append(el('div', { className: 'bc-find-row' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-solids-keep': '', title: t('solids.keep.title'), onClick: () => keepSolidsEditable() }, t('solids.keep'))));
    };
    box.append(el('p', { className: 'bc-muted', 'data-solids-wait': '' }, t('solids.reading')));
    (async () => {
      try {
        const S = await import('./ifc-solids.js');
        solidsRep = S.report(ifc.api.file(model.modelID));
        box.querySelector('[data-solids-wait]')?.remove();
        fill(solidsRep);
      } catch (e) { box.querySelector('[data-solids-wait]')?.replaceChildren(t('solids.failed', { why: String(e.message || e) })); }
    })();
    return box;
  }
  async function keepSolidsEditable() {
    if (!editor || mode !== 'ifc') return;
    const S = await import('./ifc-solids.js');
    let out = null;
    const run = (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
      out = S.keepEditable(w.api.file(w.mid), { created: (id) => w.journal.created.push(id), touch: (id) => w.touch(id) });
      return { ids: [] };
    });
    try { editor.modelChange(run, { label: t('solids.undo'), verb: t('solids.verb') }); }
    catch (e) { status(String(e.message || e), true); return; }
    await rebuild();
    afterEdit();
    status(out && out.converted ? t('solids.done', { n: out.converted, skipped: out.skipped }) : t('solids.none'));
  }
  function runModelChecks() {
    checkRes = runChecks(index(), model, { required: readRules() });
    checksArmed = true; checksSrc?.set(checkProblems(checkRes, { guidOf: (k) => guidOf(k), nameOf: (k) => nameOfKey(k), t }));   // 0.7.1 → 0.8: also in the shell's Problems
    renderChecks();
    status(t('checks.done', { n: new Set(checkRes.flatMap((c) => c.groups.flatMap((g) => g.keys))).size }));
  }
  function pickKeys(keys) {
    viewer.select(keys);
    afterPick();
    if (keys.length > 1) showMany(); else showProps(keys[0]);
    viewer.frameKeys(keys);
    status(t('checks.picked', { n: keys.length }));
  }
  ui.checksDetails?.addEventListener('toggle', () => { if (ui.checksDetails.open) renderChecks(); });
  window.bimcraftChecks = { run: () => { ui.checksDetails.open = true; runModelChecks(); return checkRes; } };   // for tests
  // ---- Problems (0.7.1 → 0.8; docs/0.8-PROBLEMS-SPEC.md): Model checks (each run) and the regulations add-on (model-ui.js, live) in the shell's
  // ⚠ panel (manifest "problems"). A problem names elements by GlobalId; a click picks them and frames them. Accepted problems travel inside
  // the IFC (owner 2026-10-26): one property set CadCraft_Problems on IfcProject — Accepted (IfcText, the list as JSON) and Format (IfcLabel) —
  // written as one undo step through IfcEditor.modelChange, read back on open and after every edit, undo and redo (renderChanges).
  const PROBLEMS_PSET = 'CadCraft_Problems', PROBLEMS_FORMAT = 'cadcraft-problems-accepted 1';
  const projectOf = (w) => { try { return idsOfType(w.api, w.mid, 'IFCPROJECT')[0] ?? null; } catch (e) { return null; } };
  function acceptedInIfc() {
    if (!editor || mode !== 'ifc') return [];
    try {
      const w = new ModelWriter(editor.W, editor.api, editor.mid), pid = projectOf(w);
      const ps = pid === null ? null : w.readPset(pid, PROBLEMS_PSET);
      const list = ps && typeof ps.Accepted === 'string' ? JSON.parse(ps.Accepted) : [];
      return Array.isArray(list) ? list : [];   // the store cleans it (untrusted, like any file)
    } catch (e) { return []; }
  }
  function saveAcceptedInIfc(list) {
    if (!editor || mode !== 'ifc') throw new Error(t('problems.err.noifc'));
    const json = JSON.stringify(list);
    const run = (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
      const pid = projectOf(w);
      if (pid === null) throw new Error(t('problems.err.noproject'));
      w.upsertPset(pid, PROBLEMS_PSET, [['Accepted', 'IFCTEXT', json], ['Format', 'IFCLABEL', PROBLEMS_FORMAT]]);
      return {};
    });
    editor.modelChange(run, { label: t('problems.undo.accept'), verb: '' });
    afterEdit();
  }
  const syncAccepted = () => { if (window.ccProblems && document.getElementById('cc-problems')) window.ccProblems.store.loadAccepted(acceptedInIfc()); };
  let guidIx = null;
  const keysOfGuid = (g) => {
    const ix = index();
    if (!ix) return [];
    if (guidIx?.ix !== ix) { guidIx = { ix, map: new Map() }; for (const [id, gv] of ix.values('guid')) guidIx.map.set(gv, ix.keyBase + id); }
    const k = guidIx.map.get(g);
    return k !== undefined ? [k] : modelUi?.problemKeys?.(g) || [];
  };
  {
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      const brkSrc = P.source({ id: 'bimcraft.breakit', kind: 'engine', label: t('problems.src.breakit') });
      breakSet = (list) => brkSrc.set(list);
      breakSet(breakProblems);
      const spSrc = P.source({ id: 'bimcraft.scanprogress', kind: 'import', label: t('sp.title') });
      brkScanSet = (list) => spSrc.set(list);
      brkScanSet(scanProgProblems);
      const frmSrc = P.source({ id: 'bimcraft.frame', kind: 'engine', label: t('problems.src.frame') });
      frameSet = (list) => frmSrc.set(list);
      frameSet(frameProblems);
      checksSrc = P.source({ id: 'bimcraft.checks', kind: 'check', label: t('checks.title'),
        run: () => (checksArmed && model && mode === 'ifc' ? checkProblems(runChecks(index(), model, { required: readRules() }), { guidOf: (k) => guidOf(k), nameOf: (k) => nameOfKey(k), t }) : null) });
      P.adapter({
        t,
        file: () => ifcName,
        packs: () => rulesProvider()?.packs?.() || [],
        saveAccepted: (list) => saveAcceptedInIfc(list),
        select: (p) => { if (!viewer || mode !== 'ifc') return; const keys = [...new Set(p.about.flatMap((r) => keysOfGuid(r.id)))]; if (keys.length) pickKeys(keys); },
      });
      P.markers(bimMarkers({ viewer: () => viewer, stage: ui.canvas.parentElement, keysOf: keysOfGuid, active: () => mode === 'ifc' }));   // P.6: ⚠ over the 3D view
    };
    if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }
  }
  // ---- Check against IDS (0.7.1 71.25; ids-ui.js, cc-ids in ./ids/): the client's .ids, referred to from the IFC by a property set on
  // IfcProject (CadCraft_IDS: Name, Hash, Title, Version, Format; one undo step through modelChange, like the accepted problems above).
  // The text stays beside the model in this browser (ids-ui.js); Content only with Settings › "Keep the IDS inside the IFC" (lead 2026-10-26)
  const IDS_PSET = 'CadCraft_IDS', IDS_FORMAT = 'cadcraft-ids 1';
  if (ui.idsBox) idsUi = mountIds({
    box: ui.idsBox, details: ui.idsDetails, openBtn: ui.idsOpen, t, el, status: (m) => status(m, false, true),
    ifc: () => (editor && mode === 'ifc' && typeof editor.api?.file === 'function' ? editor.api.file(editor.mid) : null),
    canWrite: () => !!editor && mode === 'ifc',
    embed: () => settings.idsEmbed === true,   // Settings › BimCraft › Keep the IDS inside the IFC (off)
    readRecord: () => {
      if (!editor || mode !== 'ifc') return null;
      try {
        const w = new ModelWriter(editor.W, editor.api, editor.mid), pid = projectOf(w);
        const ps = pid === null ? null : w.readPset(pid, IDS_PSET);
        return ps && ps.Hash ? { name: String(ps.Name || ''), hash: String(ps.Hash), title: String(ps.Title || ''), version: String(ps.Version || ''), text: typeof ps.Content === 'string' && ps.Content ? ps.Content : null } : null;
      } catch (e) { return null; }
    },
    writeRecord: (rec) => {
      if (!editor || mode !== 'ifc') throw new Error(t('ids.err.noifc'));
      const run = (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
        const pid = projectOf(w);
        if (pid === null) throw new Error(t('problems.err.noproject'));
        const had = w.readPset(pid, IDS_PSET);
        // Content: the text only when embedding; a text embedded before is emptied, never left behind
        const content = rec?.text ? [['Content', 'IFCTEXT', rec.text]] : had && 'Content' in had ? [['Content', 'IFCTEXT', '']] : [];
        w.upsertPset(pid, IDS_PSET, [['Name', 'IFCLABEL', rec ? rec.name : ''], ['Hash', 'IFCLABEL', rec ? rec.hash : ''], ['Title', 'IFCLABEL', rec ? rec.title : ''], ['Version', 'IFCLABEL', rec ? rec.version : ''], ...content, ['Format', 'IFCLABEL', IDS_FORMAT]]);
        return {};
      });
      editor.modelChange(run, { label: t(rec ? 'ids.undo.set' : 'ids.undo.clear'), verb: '' });
      afterEdit();
    },
  });
  window.bimcraftIds = idsUi;   // for tests (tools/ids/browser-bimcraft.mjs)

  // ---- Clash check (0.4 B17) ----
  let clashA = 'pick', clashB = 'all', clashTol = '0.01', clashRes = null, clashRun = null, clashAt = -1, clashMsg = '';
  /** What a set can be: the pick, every class over the open models, each saved search set, everything. */
  function clashSources() {
    const out = [{ value: 'pick', label: t('clash.src.pick', { n: viewer.selection.size }), keys: () => [...viewer.selection] }, { value: 'all', label: t('clash.src.all'), keys: () => [...viewer.allKeys()].filter((k) => { const e = entryOf(k); return !e || e.model.classOf.get(k - e.model.keyBase) !== 'IfcSpace'; }) }];   // rooms are not clash objects (pick Class: Space to check them)
    const byCls = new Map();
    for (const m of models) for (const [id, c] of m.model.classOf) { if (!byCls.has(c)) byCls.set(c, []); byCls.get(c).push(m.model.keyBase + id); }
    for (const [c, ks] of [...byCls].sort((a, b) => b[1].length - a[1].length)) out.push({ value: 'cls:' + c, label: t('clash.src.class', { cls: c.replace(/^Ifc/, ''), n: ks.length }), keys: () => ks });
    for (const st of readSets()) out.push({ value: 'set:' + st.name, label: t('clash.src.set', { name: st.name }), keys: () => find(index(), st) });
    out.splice(2, 0, ...mepStruct.sources());   // 0.7 LC.9: pipes and ducts, walls, slabs, beams, columns, the structure
    return out;
  }
  // 0.7 LC.9 (mep-07, mep/structure-ui.js): ready-made MEP × structure sets, soft clearances and the openings list
  const mepStruct = mountStructure({
    t, el, viewer: () => viewer, models: () => models, host: () => (mode === 'ifc' ? cur() : null), editor: () => (mode === 'ifc' ? editor : null),
    entryOf: (k) => entryOf(k), nameOfKey: (k) => nameOfKey(k), status: (m, bad) => status(m, bad), download: (n, d, ty) => download(n, d, ty), fileName: () => ifcName,
    author: () => authorOf(), rerender: () => renderClash(),
    show: (keys) => { viewer.vis.isolate(keys, { ghost: true }); viewer.applyVisibility(); viewer.select(keys); afterPick(); showMany(); viewer.frameKeys(keys); treeView.sync(); },
  });
  const nameOfKey = (k) => { const e = entryOf(k); if (!e) return '#' + k; const id = k - e.model.keyBase; const n = e.ifc.api.GetLine(e.model.modelID, id).Name?.value; return (n || '#' + id) + (models.length > 1 ? ' (' + e.name + ')' : ''); };
  function renderClash() {
    if (!ui.clash) return;
    ui.clashSec.hidden = mode !== 'ifc' || !model;
    if (ui.clashSec.hidden || !ui.clashDetails.open) return;
    const src = clashSources();
    const pick = (cur, set, lbl, attr) => {
      const sel = el('select', { className: 'select-cc', [attr]: '' }, src.map((o) => el('option', { value: o.value }, o.label)));
      sel.value = src.some((o) => o.value === cur) ? cur : src[0].value;
      sel.addEventListener('change', () => set(sel.value));
      return el('label', {}, lbl, sel);
    };
    const tol = el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', value: clashTol, 'data-clash-tol': '' });
    tol.addEventListener('input', () => { clashTol = tol.value; });
    const kids = [pick(clashA, (v) => { clashA = v; }, t('clash.a'), 'data-clash-a'), pick(clashB, (v) => { clashB = v; }, t('clash.b'), 'data-clash-b'), el('label', {}, t('clash.tolerance'), tol),
      el('div', { className: 'bc-find-row' }, clashRun
        ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-clash-cancel': '', onClick: () => { clashRun?.stop(); } }, t('clash.cancel'))
        : el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-clash-run': '', onClick: () => runClash() }, t('clash.run')))];
    if (clashRun) kids.push(el('progress', { className: 'bc-clash-progress', max: String(clashRun.total || 1), value: String(clashRun.done || 0), 'data-clash-progress': '' }));
    if (clashMsg) kids.push(el('p', { className: 'bc-muted', 'data-clash-msg': '' }, clashMsg));
    if (clashRes && clashRes.length) kids.push(el('ul', { className: 'bc-clash-results', 'data-clash-results': '' }, clashRes.map((c, i) => el('li', {},
      el('button', { type: 'button', className: 'bc-clash-row', 'aria-pressed': i === clashAt ? 'true' : 'false', 'data-clash-row': String(i), onClick: () => showClash(i) },
        el('span', {}, t('clash.row', { a: nameOfKey(c.a), b: nameOfKey(c.b) })), el('span', { className: 'n' }, fmtLength(c.depth))),
      i === clashAt ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-clash-issue': '', onClick: () => clashIssue(c) }, t('clash.issue')) : null))));
    ui.clash.replaceChildren(el('div', { className: 'bc-clash' }, ...kids), mepStruct.node((a, b) => { clashA = a; clashB = b; renderClash(); runClash(); }));
  }
  async function runClash() {
    const tolText = String(clashTol).trim().replace(',', '.');   // GH.3-A: a bare number is metres (the label says so); a unit mark (2 cm, 1/2") is read in that unit
    const tol = /^-?[\d.]+$/.test(tolText) ? Number(tolText) : parseLen(tolText, getDisplayUnits()) / 1000;
    if (!Number.isFinite(tol) || tol < 0) { status(t('clash.bad.tolerance'), true); return; }
    const src = clashSources(), a = src.find((o) => o.value === clashA) || src[0], b = src.find((o) => o.value === clashB) || src[1];
    const ka = a.keys(), kb = b.keys();
    if (!ka.length || !kb.length) { status(t('clash.empty'), true); return; }
    // world triangles through each model's placement
    const mats = new Map();
    for (const L of viewer.layers.values()) for (const bt of L.batches) mats.set(bt, L.group.matrix.elements);
    const A = elementsOf(viewer.batches, ka, (bt) => mats.get(bt)), B = elementsOf(viewer.batches, kb, (bt) => mats.get(bt));
    clashRes = null; clashAt = -1; clashMsg = '';
    const run = { done: 0, total: 0, stop: null };
    clashRun = run;
    renderClash();
    const finish = (res, why) => {
      if (clashRun !== run) return;
      clashRun = null;
      if (res) { clashRes = res; clashMsg = t('clash.found', { n: res.length }); status(clashMsg); }
      else { clashMsg = why ? t('clash.failed', { why }) : t('clash.stopped'); status(clashMsg, !!why); }
      renderClash();
    };
    let worker = null;
    try { worker = new Worker(import.meta.resolve('./clash-worker.js'), { type: 'module' }); } catch (e) { worker = null; }
    if (!worker) {   // no worker here: on this thread
      await frame();
      try { finish(clashes(A, B, { tolerance: tol })); } catch (e) { finish(null, e.message); }
      return;
    }
    run.stop = () => { worker.terminate(); finish(null, ''); };
    worker.onmessage = (e) => {
      if (e.data.progress) { [run.done, run.total] = e.data.progress; const pr = ui.clash.querySelector('[data-clash-progress]'); if (pr) { pr.max = String(run.total || 1); pr.value = String(run.done); } status(t('clash.progress', { done: run.done, total: run.total })); }
      else { worker.terminate(); if (e.data.error) finish(null, e.data.error); else finish(e.data.result); }
    };
    worker.onerror = (e) => { worker.terminate(); finish(null, e.message || 'worker'); };
    worker.postMessage({ clashUrl: import.meta.resolve('./clash.js'), A, B, tolerance: tol }, [...A, ...B].map((x) => x.tris.buffer).filter((b2, i, all) => all.indexOf(b2) === i));
  }
  function showClash(i) {
    const c = clashRes[i];
    clashAt = i;
    viewer.vis.isolate([c.a, c.b], { ghost: true });
    viewer.applyVisibility();
    viewer.select([c.a, c.b]);
    afterPick();
    showMany();
    viewer.frameKeys([c.a, c.b]);
    treeView.sync();
    renderClash();
    status(t('clash.shown', { a: nameOfKey(c.a), b: nameOfKey(c.b) }));
  }
  function clashIssue(c) {
    showTab('issues');
    issueForm = true;
    renderIssues();
    const f = ui.issues.querySelector('[data-bcf-f-title]');
    if (f) { f.value = t('clash.issue.title', { a: nameOfKey(c.a), b: nameOfKey(c.b) }); f.focus(); }
  }
  ui.clashDetails?.addEventListener('toggle', () => { if (ui.clashDetails.open) renderClash(); });
  window.bimcraftClash = { set: (a, b, tol) => { clashA = a; clashB = b; clashTol = String(tol); ui.clashDetails.open = true; renderClash(); }, results: () => clashRes, run: () => runClash() };   // for tests

  // ---- Issues: BCF (0.4 B9) ----
  let issues = [], issueForm = false, currentIssue = null, guidKeys = null;
  // Your name on issues (0.5 SI.9): signed in, it is your account's (fileHost.account()) with nothing to type; a name typed in
  // Settings › BimCraft or in the issue form wins until it is cleared. Signed out: the form's name box, as before.
  const typedAuthor = () => { try { return localStorage.getItem('bimcraft.author') || ''; } catch (e) { return ''; } };
  const accountName = () => { const a = fileHost.account(); return a && typeof a.name === 'string' ? a.name.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120) : ''; };
  const authorOf = () => typedAuthor() || accountName();
  /** A name typed for issues: kept unless it is the account's own (or empty: the account's from then on). */
  const keepAuthor = (v) => {
    try { if (!v || v === accountName()) localStorage.removeItem('bimcraft.author'); else localStorage.setItem('bimcraft.author', v); } catch (err) { /* this tab keeps it */ }
  };
  // Settings › BimCraft › Your name on issues: "From your account (<name>)" + "Use another name", or the typed name
  let authorOther = false;
  function syncAuthorForm() {
    const box = settingsDlg && settingsDlg.querySelector('[data-bc-author-set]');
    if (!box) return;
    const acc = accountName(), typed = typedAuthor(), other = !!typed || authorOther;
    const input = box.querySelector('[name="bcAuthor"]');
    if (input && document.activeElement !== input) input.value = typed;
    const from = box.querySelector('[data-bc-author-account]');
    if (from) from.hidden = !acc;
    const line = box.querySelector('[data-bc-author-from]');
    if (line) line.textContent = acc ? t('set.author.account', { name: acc }) : '';
    const ob = box.querySelector('[data-bc-author-other]');
    if (ob) ob.hidden = other;
    const row = box.querySelector('[data-bc-author-row]');
    if (row) row.hidden = !!acc && !other;
    const mine = box.querySelector('[data-bc-author-mine]');
    if (mine) mine.hidden = !acc || !other;
  }
  if (settingsDlg) {
    new MutationObserver(() => { if (settingsDlg.open) { authorOther = false; syncAuthorForm(); } }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
    settingsDlg.addEventListener('change', (e) => {
      if (e.target.name !== 'bcAuthor') return;
      const v = e.target.value.trim().slice(0, 120);
      keepAuthor(v);
      if (!v) authorOther = false;
      syncAuthorForm();
      status(v && v !== accountName() ? t('set.author.done', { name: v }) : accountName() ? t('set.author.account.done', { name: accountName() }) : t('set.author.cleared'));
    });
    settingsDlg.addEventListener('click', (e) => {
      if (e.target.closest('[data-bc-author-other]')) { authorOther = true; syncAuthorForm(); settingsDlg.querySelector('[name="bcAuthor"]')?.focus(); }
      else if (e.target.closest('[data-bc-author-mine]')) { keepAuthor(''); authorOther = false; syncAuthorForm(); status(t('set.author.account.done', { name: accountName() })); }
    });
  }
  fileHost.on('account', () => { syncAuthorForm(); if (issueForm) renderIssues(); });
  syncAuthorForm();
  // i18n-ignore: the TopicStatus values written to the file; their labels come from the language file
  const STATUSES = [['Open', 'bcf.st.open'], ['In progress', 'bcf.st.progress'], ['Closed', 'bcf.st.closed']];
  /** GlobalId → key over every open model (built on first use, again after edits). */
  function guidIndex() {
    if (guidKeys) return guidKeys;
    guidKeys = new Map();
    for (const m of models) for (const id of m.model.classOf.keys()) { const g = m.ifc.api.GetLine(m.model.modelID, id).GlobalId?.value; if (g) guidKeys.set(g, m.model.keyBase + id); }
    return guidKeys;
  }
  const guidOf = (key) => { const e = entryOf(key); if (!e) return null; try { return e.ifc.api.GetLine(e.model.modelID, key - e.model.keyBase).GlobalId?.value || null; } catch (err) { return null; } };
  const frameC = () => refC || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  /** This view as a BCF viewpoint, in the first model's IFC coordinates. */
  function captureViewpoint() {
    const cam = viewer.camera, C = frameC();
    cam.updateMatrixWorld();
    const e = cam.matrixWorld.elements, dir = [-e[8], -e[9], -e[10]], up = [e[4], e[5], e[6]];
    const v = viewer.vis;
    const guids = (keys) => [...keys].map(guidOf).filter(Boolean);
    const visibility = v.isolated ? { defaultVisible: false, exceptions: guids(v.isolated) } : { defaultVisible: true, exceptions: guids(v.hidden) };
    // BCF holds one convex cut: a free-form volume of several boxes keeps its first (WL.1; the issue form says so)
    const S = viewer.section, planes = S?.groups?.length > 1 ? S.groups[0].map((i) => viewer.clip[i]) : (viewer.clip || []);
    const clipping = planes.map((pl) => {
      const at = pl.normal.clone().multiplyScalar(-pl.constant).toArray();   // the plane's point nearest the origin
      return { location: toIfcPoint(C, at), direction: toIfcDir(C, pl.normal.clone().negate().toArray()) };   // BCF: towards the side cut away
    });
    let snapshot = null;
    try { const url = viewer.snapshot(); const bin = atob(url.split(',')[1]); snapshot = Uint8Array.from(bin, (c) => c.charCodeAt(0)); } catch (err) { snapshot = null; }
    return { guid: newGuid(), camera: { kind: 'perspective', viewPoint: toIfcPoint(C, cam.position.toArray()), direction: toIfcDir(C, dir), up: toIfcDir(C, up), fov: cam.fov },
      selection: guids(viewer.selection), visibility, clipping, snapshot };
  }
  /** Put an issue's view back: camera, visibility, pick, section (when it lines up with the model's axes). */
  function showIssue(tp0) {
    const vp = tp0.viewpoints[0];
    currentIssue = tp0.guid;
    if (!vp) { renderIssues(); return; }
    const C = frameC(), idx = guidIndex();
    let missing = 0;
    const keys = (list) => list.map((g) => { const k = idx.get(g); if (k === undefined) missing++; return k; }).filter((k) => k !== undefined);
    const v = viewer.vis;
    v.showAll();
    if (vp.visibility.defaultVisible) v.hide(keys(vp.visibility.exceptions)); else v.isolate(keys(vp.visibility.exceptions));
    viewer.applyVisibility();
    viewer.select(keys(vp.selection));
    afterPick();
    if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected); else clearProps();
    let clipNote = '';
    if (vp.clipping.length) clipNote = applyBcfClipping(vp.clipping, C) ? '' : t('bcf.clip.skipped');
    else if (cut) sectionOff();
    if (vp.camera) {
      const cam = viewer.camera, c = vp.camera;
      const pos = fromIfcPoint(C, c.viewPoint), dir = fromIfcDir(C, c.direction);
      const center = viewer.box.isEmpty() ? pos : viewer.box.getCenter(cam.position.clone()).toArray();
      const along = Math.max(1, (center[0] - pos[0]) * dir[0] + (center[1] - pos[1]) * dir[1] + (center[2] - pos[2]) * dir[2]);
      if (c.kind === 'orthogonal') {   // no parallel camera here: back off so the same height of the model fills the view
        const d = (c.scale / 2) / Math.tan(cam.fov * Math.PI / 360);
        cam.position.set(pos[0] - dir[0] * d + dir[0] * along, pos[1] - dir[1] * d + dir[1] * along, pos[2] - dir[2] * d + dir[2] * along);
      } else { cam.position.set(...pos); cam.fov = Math.max(10, Math.min(120, c.fov || 60)); }
      cam.updateProjectionMatrix();
      viewer.controls.target.set(cam.position.x + dir[0] * along, cam.position.y + dir[1] * along, cam.position.z + dir[2] * along);
      viewer.controls.update();
      viewer.render();
    }
    renderIssues();
    status(t('bcf.shown', { title: tp0.title || t('bcf.untitled') }) + (missing ? ' ' + t('bcf.missing', { n: missing }) : '') + (clipNote ? ' ' + clipNote : ''));
  }
  /**
   * One plane, or six making a box, along the model's axes → BimCraft's section plane or box. Any other set of planes (up to
   * MAX_PLANES, tilted or not) → a section volume: the whole model's box cut by those planes (WL.1). → false when too many.
   */
  function applyBcfClipping(planes, C) {
    const vplanes = planes.map((p) => ({ at: fromIfcPoint(C, p.location), n: fromIfcDir(C, p.direction).map((x) => -x) }));   // n: towards what is kept
    const axisOf = (n) => { const a = n.map(Math.abs), i = a.indexOf(Math.max(...a)); return a[i] > 0.999 ? i : -1; };
    const lo = viewer.box.min.toArray(), hi = viewer.box.max.toArray();
    if (vplanes.some((p) => axisOf(p.n) < 0) || (vplanes.length !== 1 && vplanes.length !== 6)) {
      if (!vplanes.length || vplanes.length > MAX_PLANES) return false;
      // viewer → IFC from the model's minimum corner: (x, y, z) → (x − lo.x, hi.z − z, y − lo.y); kept normal → outward
      const size = viewer.sizeIfc(), box = { min: [0, 0, 0], max: [...size] };
      const extra = vplanes.map((p) => planeFromPoint([-p.n[0], p.n[2], -p.n[1]], [p.at[0] - lo[0], hi[2] - p.at[2], p.at[1] - lo[1]], box));
      cut = { axis: 'box', cells: [{ box, tilt: {}, planes: extra }], cell: 0 };
      cut.box = cut.cells[0].box;
      applySection();
      return true;
    }
    if (vplanes.length === 1) {
      const p = vplanes[0], i = axisOf(p.n), name = { 1: 'top', 2: 'front', 0: 'side' }[i];
      cut = { axis: name, offset: p.at[i] - lo[i], flip: p.n[i] > 0 };   // SECTION_AXES keep the low side unless flipped
      applySection();
      return true;
    }
    if (vplanes.length === 6) {
      const mn = [...lo], mx = [...hi];
      for (const p of vplanes) { const i = axisOf(p.n); if (p.n[i] > 0) mn[i] = p.at[i]; else mx[i] = p.at[i]; }
      // viewer (x, y up, z) → the box's IFC axes from the model's minimum corner (viewer3d.js setSectionBox)
      cut = { axis: 'box', box: { min: [mn[0] - lo[0], hi[2] - mx[2], mn[1] - lo[1]], max: [mx[0] - lo[0], hi[2] - mn[2], mx[1] - lo[1]] } };
      applySection();
      return true;
    }
    return false;
  }
  function renderIssues() {
    if (!ui.issues) return;
    if (mode !== 'ifc' || !model) { ui.issues.replaceChildren(el('p', { className: 'bc-muted' }, t('bcf.needs.ifc'))); return; }
    const kids = [el('p', { className: 'bc-muted' }, t('bcf.intro')),
      el('div', { className: 'bc-issue-actions' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-bcf-new': '', onClick: () => { issueForm = true; renderIssues(); ui.issues.querySelector('[data-bcf-f-title]')?.focus(); } }, t('bcf.new')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-bcf-open': '', onClick: () => ui.bcfInput.click() }, t('bcf.open')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-bcf-save': '', disabled: !issues.length, onClick: () => guard(saveIssues) }, t('bcf.save', { n: issues.length })))];
    if (issueForm) {
      const title = el('input', { type: 'text', className: 'bc-input', 'data-bcf-f-title': '', maxLength: 200 });
      const comment = el('textarea', { className: 'bc-input', rows: 3, 'data-bcf-f-comment': '', maxLength: 4000 });
      const st = el('select', { className: 'select-cc', 'data-bcf-f-status': '' }, STATUSES.map(([v, k]) => el('option', { value: v }, t(k))));
      const who = el('input', { type: 'text', className: 'bc-input', value: authorOf(), 'data-bcf-f-author': '', maxLength: 120 });
      const form = el('form', { className: 'bc-issue-form', 'data-bcf-form': '' },
        el('label', {}, t('bcf.f.title'), title), el('label', {}, t('bcf.f.comment'), comment), el('label', {}, t('bcf.f.status'), st), el('label', {}, t('bcf.f.author'), who),
        el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-plot btn-sm-cc' }, t('bcf.f.create')),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => { issueForm = false; renderIssues(); } }, t('bcf.f.cancel'))));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!title.value.trim()) { status(t('bcf.need.title'), true); title.focus(); return; }
        keepAuthor(who.value.trim());   // SI.9: the account's own name is not kept as a typed one
        const now = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
        const vp = captureViewpoint();
        const tp = { guid: newGuid(), title: title.value.trim(), status: st.value, type: 'Issue', author: who.value.trim() || accountName() || 'BimCraft', created: now, description: comment.value.trim(), comments: [], viewpoints: [vp] };
        if (comment.value.trim()) tp.comments.push({ guid: newGuid(), date: now, author: tp.author, text: comment.value.trim(), viewpoint: vp.guid });
        issues.push(tp);
        issueForm = false;
        currentIssue = tp.guid;
        renderIssues();
        status(t('bcf.created', { title: tp.title }) + (viewer.section?.groups?.length > 1 ? ' ' + t('bcf.clip.cells') : ''));
      });
      kids.push(form);
    }
    if (!issues.length) kids.push(el('p', { className: 'bc-muted' }, t('bcf.none')));
    else kids.push(el('ul', { className: 'bc-issues', 'data-issue-list': '' }, issues.map((tp) => {
      const snap = tp.viewpoints[0]?.snapshot;
      if (snap && !tp._url) tp._url = URL.createObjectURL(new Blob([snap], { type: snap[0] === 0xff ? 'image/jpeg' : 'image/png' }));
      const st = STATUSES.find(([v]) => v === tp.status);
      return el('li', {}, el('div', { className: 'bc-issue' + (tp.guid === currentIssue ? ' is-current' : ''), 'data-issue': tp.guid },
        tp._url ? el('img', { src: tp._url, alt: '' }) : el('span', { className: 'bc-issue-noimg', 'aria-hidden': 'true' }),
        el('div', {}, el('p', { className: 'bc-issue-title' }, tp.title || t('bcf.untitled')),
          el('p', { className: 'bc-issue-meta' }, (st ? t(st[1]) : tp.status || '') + ' · ' + t('bcf.meta', { author: tp.author || '?', date: (tp.created || '').slice(0, 10) })),   // i18n-ignore: a separator
          el('button', { type: 'button', className: 'btn-line btn-sm-cc bc-issue-show', 'data-issue-show': tp.guid, onClick: () => showIssue(tp) }, t('bcf.show'))),
        el('button', { type: 'button', className: 'bc-forget', 'aria-label': t('bcf.delete', { title: tp.title }), title: t('bcf.delete', { title: tp.title }), onClick: () => {
          issues = issues.filter((x) => x !== tp); if (tp._url) URL.revokeObjectURL(tp._url); renderIssues();
        } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }))));
    })));
    ui.issues.replaceChildren(...kids);
  }
  async function saveIssues() {
    const proj = ifc.api.GetLineIDsWithType(model.modelID, WebIFC.IFCPROJECT);
    const projGuid = proj.size() ? ifc.api.GetLine(model.modelID, proj.get(0)).GlobalId?.value : null;
    const bytes = await writeBcf({ topics: issues, file: { name: models[0]?.name || ifcName, ifcProject: projGuid, date: null } });
    const name = (models[0]?.name || ifcName).replace(/\.ifc$/i, '') + ' issues.bcf';
    download(name, bytes, 'application/octet-stream');
    status(t('bcf.saved', { file: name, n: issues.length }));
  }
  ui.bcfInput?.addEventListener('change', () => {
    const f = ui.bcfInput.files[0];
    ui.bcfInput.value = '';
    if (!f) return;
    guard(async () => {
      let r;
      try { r = await readBcf(new Uint8Array(await f.arrayBuffer())); } catch (e) { throw Object.assign(new Error(t('bcf.unreadable', { file: f.name, why: e.message })), { userFacing: true }); }
      const known = new Set(issues.map((x) => x.guid));
      for (const tp of r.topics) if (!known.has(tp.guid)) issues.push(tp);
      renderIssues();
      status(t('bcf.read', { n: r.topics.length, file: f.name }) + (r.notes.length ? ' ' + t('bcf.read.notes', { n: r.notes.length, first: r.notes[0] }) : ''));
    });
  });
  window.bimcraftIssues = { list: () => issues.map((x) => ({ guid: x.guid, title: x.title, status: x.status, viewpoints: x.viewpoints.length })), show: (g) => showIssue(issues.find((x) => x.guid === g)), capture: () => captureViewpoint() };   // for tests

  // ---- Color by property (0.4 B15) ----
  let propIx = null, colorField = '', colorLegend = null, picked = new Set();
  let colorScheme = null;   // 0.5 WL.5: a scheme opened from a file or made by changing a color; it keeps its colors over themes and edits
  const theme = () => (document.documentElement.dataset.space === 'model' ? 'dark' : 'light');
  const index = () => {
    if (!propIx && model) propIx = propertyIndex(WebIFC, ifc.api, model.modelID, model);
    return propIx;
  };
  const fieldLabel = (f) => (f.group ? f.label : t('color.field.' + f.id));
  const valueLabel = (v) => (colorField === 'cls' ? String(v).replace(/^Ifc/, '') : v);   // classes read as elsewhere: "Wall"
  function renderColor() {
    if (!ui.color) return;
    if (mode !== 'ifc' || !model) { ui.color.replaceChildren(el('p', { className: 'bc-muted' }, t('color.needs.ifc'))); return; }
    if (ui.color.closest('[data-rpane]').hidden && !colorField) return;   // built when the tab is first shown
    const ix = index();
    const sel = el('select', { className: 'select-cc', 'data-color-field': '' },
      el('option', { value: '', className: 'select-placeholder' }, t('color.field.choose')));
    const groups = new Map();
    for (const f of ix.fields) { const g = f.group || t('color.group.element'); if (!groups.has(g)) groups.set(g, []); groups.get(g).push(f); }
    for (const [g, fs] of groups) sel.append(el('optgroup', { label: g }, fs.map((f) => el('option', { value: f.id }, fieldLabel(f) + ' (' + num(f.count) + ')'))));
    sel.value = colorField;
    sel.classList.toggle('is-empty', !colorField);
    sel.addEventListener('change', () => { if (sel.value) applyColor(sel.value); else colorOff(); });
    const off = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-color-off': '', disabled: !colorField, onClick: colorOff }, t('color.off'));
    const kids = [el('p', { className: 'bc-muted' }, t('color.intro')), el('div', { className: 'bc-color-pick' }, el('label', {}, t('color.field'), sel), off)];
    // schemes (0.5 WL.5): save the colors as a file, open one a teammate saved
    kids.push(el('div', { className: 'bc-color-scheme' },
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-color-save': '', disabled: !colorField || !colorLegend, title: t('color.scheme.save.title'), onClick: saveScheme }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('color.scheme.save')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-color-open': '', title: t('color.scheme.open.title'), onClick: () => ui.colorInput.click() }, el('i', { className: 'bi bi-folder2-open', 'aria-hidden': 'true' }), ' ', t('color.scheme.open'))));
    if (colorScheme && colorLegend?.missing) kids.push(el('p', { className: 'bc-card-alert', 'data-color-missing': '' }, t('color.scheme.missing', { field: schemeFieldLabel(colorScheme) })));
    if (colorField && colorLegend) {
      if (colorLegend.kind === 'range') kids.push(el('p', { className: 'bc-muted' }, t(colorScheme ? 'color.ranges.scheme' : 'color.ranges')));
      if (colorScheme) kids.push(el('p', { className: 'bc-muted', 'data-color-scheme-note': '' }, t('color.scheme.note')));
      kids.push(el('ul', { className: 'bc-legend', 'data-legend': '' }, colorLegend.legend.map((l, i) => {
        const name = l.none ? t('color.none') : l.outside ? t('color.scheme.outside', { n: typeof l.other === 'number' ? l.other : l.count }) : l.other ? t('color.other', { n: l.other }) : valueLabel(l.label);
        const pick = el('input', { type: 'color', className: 'bc-sw-pick', value: l.color, 'aria-label': t('color.scheme.pick', { value: name }), 'data-legend-color': String(i) });
        pick.addEventListener('change', () => recolor(i, pick.value));
        return el('li', { className: l.count ? '' : 'is-empty' }, pick,
          el('button', { type: 'button', 'aria-pressed': picked.has(i) ? 'true' : 'false', 'data-legend-row': String(i), disabled: !l.count, onClick: (e) => isolateValue(i, e.ctrlKey || e.metaKey || e.shiftKey) },
            el('span', { className: 'bc-lv' + (l.none || l.other ? ' is-muted' : '') }, name),
            el('span', { className: 'n' }, num(l.count))));
      })));
    }
    ui.color.replaceChildren(...kids);
  }
  const schemeFieldLabel = (sc) => (sc.field.group ? sc.field.group + ' › ' + (sc.field.label || sc.field.id) : t('color.field.' + sc.field.id));
  /** Change one row's color: the legend becomes this model's own scheme (kept over themes and edits, ready to save). */
  function recolor(i, color) {
    const ix = index(), f = ix.fields.find((x) => x.id === colorField) || colorScheme?.field;
    if (!f || !colorLegend) return;
    const legend = colorLegend.legend.map((l, j) => (j === i ? { ...l, color } : l));
    colorScheme = schemeOf({ ...colorLegend, legend }, f);
    colorLegend = applyScheme(ix, colorScheme);
    viewer.setColors(colorLegend.colorOf);
    renderColor();
    status(t('color.scheme.changed'), false, true);
  }
  function saveScheme() {
    if (!colorField || !colorLegend) return;
    const ix = index(), f = ix.fields.find((x) => x.id === colorField) || colorScheme?.field;
    const sc = colorScheme || schemeOf(colorLegend, f);
    const name = (fieldLabel(f) || 'colors').replace(/[\\/:*?"<>|]+/g, ' ').trim().slice(0, 80) + ' colors.json';   // i18n-ignore: file name
    download(name, JSON.stringify(sc, null, 2) + '\n', 'application/json');
    status(t('color.scheme.saved', { name }), false, true);
  }
  async function openScheme(file) {
    if (mode !== 'ifc' || !model) return;
    if (file.size > 2e6) { status(t('color.scheme.bad'), true); return; }
    const r = readScheme(await file.text());
    if (!r.ok) { status(t('color.scheme.bad'), true); return; }
    if (fdOn) fdClear(true);
    colorScheme = r.scheme;
    colorField = r.scheme.field.id;
    colorLegend = applyScheme(index(), colorScheme);
    picked = new Set();
    viewer.setColors(colorLegend.colorOf);
    renderColor();
    if (colorLegend.missing) status(t('color.scheme.missing', { field: schemeFieldLabel(colorScheme) }), true);
    else status(t('color.scheme.opened', { field: schemeFieldLabel(colorScheme), n: colorLegend.legend.filter((l) => l.count && !l.none && !l.outside).length }) + (colorLegend.unmatched ? ' ' + t('color.scheme.unmatched', { n: colorLegend.unmatched }) : ''));
  }
  function applyColor(fid, quiet = false) {
    if (fdOn) fdClear(true);   // one painting at a time: 4D, Compare or Color by
    const ix = index();
    const f = ix.fields.find((x) => x.id === fid);
    if (!f) { colorOff(); return; }
    colorField = fid;
    colorScheme = null;   // choosing a field starts from its own colors again
    const c = colorBy(ix, fid, { theme: theme() });
    colorLegend = c;
    picked = new Set();
    viewer.setColors(c.colorOf);
    renderColor();
    if (!quiet) status(t('color.done', { field: fieldLabel(f), n: c.legend.filter((l) => !l.none).length }));
  }
  function colorOff() {
    colorField = ''; colorLegend = null; picked = new Set(); colorScheme = null;
    viewer?.setColors(null);
    renderColor();
    status(t('color.cleared'));
  }
  function isolateValue(i, add) {
    const l = colorLegend.legend[i];
    if (add) { if (picked.has(i)) picked.delete(i); else picked.add(i); } else picked = new Set([i]);
    const keys = [...picked].flatMap((j) => colorLegend.legend[j].keys);
    if (keys.length) viewer.vis.isolate(keys); else viewer.vis.showAll();
    viewer.applyVisibility();
    treeView.sync();
    syncVis();
    renderColor();
    status(t('color.isolated', { n: keys.length, value: l.none ? t('color.none') : l.other ? t('color.other', { n: l.other }) : valueLabel(l.label) }));
  }
  // the theme has its own steps of the same colors
  // (a scheme keeps the colors it was given)
  new MutationObserver(() => { if (colorField && viewer && !colorScheme) applyColor(colorField, true); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  ui.colorInput?.addEventListener('change', () => { const f = ui.colorInput.files[0]; ui.colorInput.value = ''; if (f) guard(() => openScheme(f)); });
  window.bimcraftColor = { apply: applyColor, off: colorOff, legend: () => colorLegend, index, scheme: () => colorScheme, recolor };   // for tests

  // ---- Properties ----
  function clearProps() {
    selInfo = null;
    bundleUi?.picked(null);
    ui.props.replaceChildren(el('p', { className: 'bc-muted' }, t('props.hint')));
    syncEdit();
  }

  /** GH.3-A: a length in Properties (a quantity, or a property typed as a length) is shown in the display unit; r.raw keeps the file's own number. */
  function lengthRows(p) {
    if (!p?.unitMm) return p;
    const u = getDisplayUnits();
    for (const s of p.sets) for (const r of s.rows) {
      const n = Number(r.value);
      if (!r.len || r.raw !== undefined || r.value === '' || !Number.isFinite(n)) continue;
      r.raw = r.value; r.value = lenMark(n * p.unitMm, u);
    }
    return p;
  }
  /** What a person typed into a length row, back in the file's own unit (the editor writes the file's number). */
  function lengthToFile(r, p, text) {
    if (r.raw === undefined) return text;
    const mm = parseLen(String(text).trim(), getDisplayUnits());
    if (!Number.isFinite(mm)) throw new Error(t('ifcedit.err.number'));
    return String(Math.round(mm / p.unitMm * 1e9) / 1e9);
  }
  async function showProps(id) {
    const token = ++pickToken;
    selected = id ?? null;
    if (id === null || id === undefined) { clearProps(); return; }
    const ent = entryOf(id);
    if (ent && ent !== cur()) {   // an element of a model that is not the active one: read only
      let q;
      try { q = lengthRows(await ent.ifc.properties(id - ent.model.keyBase)); } catch (e) { console.error(e); return; }
      if (token !== pickToken) return;
      selInfo = null;
      showForeign(q, ent);
      return;
    }
    if (ent) id -= ent.model.keyBase;
    let p;
    try { p = lengthRows(await ifc.properties(id)); } catch (e) { console.error(e); return; }
    if (token !== pickToken) return;   // a newer pick won
    selInfo = { id, p, placement: p.sets.some((x) => x.name === PSETS.placement) };
    bundleUi?.picked(p);   // 0.6 DF.12 (b): the bundle's property groups
    const label = p.cls.replace(/^Ifc/, '') + ' ' + (p.name || '#' + p.id);
    const edited = new Set((editor?.changes || []).filter((c) => c.id === id).map((c) => c.kind === 'attr' ? 'a|' + c.attr : 'p|' + c.setName + '|' + c.propName));

    // Element attributes: Name, Object type, Tag, Description are editable.
    const attr = (name, key, value) => editableRow(name, value, edited.has('a|' + key), {}, (v) => {
      editor.setAttribute(id, key, v);
      tagLast(label);
    });
    const basics = el('dl', { className: 'bc-dl' },
      attr(t('prop.name'), 'Name', p.name),
      copyRow(t('prop.type'), p.typeName),
      attr(t('prop.objtype'), 'ObjectType', p.objectType),
      attr(t('prop.tag'), 'Tag', p.tag),
      attr(t('prop.desc'), 'Description', p.description),
      copyRow(t('prop.guid'), p.guid), copyRow(t('prop.line'), '#' + p.id));

    // 0.8 PANEL-COMPACT: where the shell has the shared property grid, the element's attributes and property sets are its rows
    // (category = the property set; the same editor calls, so one undo step and copy-on-write exactly as the form below).
    const grid = window.ccPropGrid ? propsGrid(id, p, label, edited) : null;
    const sets = grid ? [] : p.sets.map((s, i) => {
      const dl = el('dl', { className: 'bc-dl' }, s.rows.map((r) => r.edit
        ? editableRow(r.name, r.value, edited.has('p|' + r.edit.setName + '|' + r.name), { valueType: r.edit.valueType }, (v) => {
            editor.setProperty(id, r.edit, lengthToFile(r, p, v));
            tagLast(label);
          })
        : copyRow(r.name, r.value)));
      return el('details', { className: 'bc-set', open: i < 3 },
        el('summary', {}, s.name),
        s.fromType ? el('p', { className: 'bc-type-note' }, t('prop.typenote')) : null,
        dl);
    });
    ui.props.replaceChildren(...[   // libraryBlock is null for non-library elements: replaceChildren would print "null"
      el('p', { className: 'bc-prop-cls' }, p.cls.replace(/^Ifc/, '')),
      el('p', { className: 'bc-prop-name' }, p.name || t('prop.unnamed')),
      libraryBlock(id, p),
      el('p', { className: 'bc-edit-hint' }, t('prop.edit.hint')),
      copyAllBar(p, ifcName),
      grid ? grid.node : basics, ...sets].filter(Boolean));
    if (grid && gridFocus) { try { grid.g.focus(gridFocus); } catch (e) { /* the row is gone */ } }
    gridFocus = null;
    modelUi?.decorate(ui.props);   // a drawn wall, door or window: its numbers to change (0.5 BM.5)
    syncEdit();
    workspace?.propertiesChanged();
    addonSections([id], token);   // 0.5 AO.7
  }

  let gridFocus = null;   // the grid row to focus once the panel has been rebuilt after an edit
  /** The Properties grid of one element: { node, g } (data only; the file's values never become markup). */
  function propsGrid(id, p, label, edited) {
    const numeric = (vt) => /REAL|MEASURE|INTEGER|COUNT|RATIO/.test(vt || '');
    const rows = [];
    const cat0 = p.cls.replace(/^Ifc/, '');
    const fail = (e) => { status(e.message, true); gridFocus = null; setTimeout(() => { if (selected === id) showProps(id); }, 0); };
    const run = (rowId, fn) => { try { fn(); } catch (e) { fail(e); return; } gridFocus = rowId; afterEdit(); };
    const str = (v) => (v === null || v === undefined ? '' : String(v));
    const ro = (rid, cat, name, v) => rows.push({ id: rid, category: cat, label: name, type: 'readonly', value: str(v) });
    const attrRow = (name, key, value) => rows.push({ id: 'a:' + key, category: cat0, label: name, type: 'text', value: str(value), hint: edited.has('a|' + key) ? t('cmp.changed') : undefined });
    attrRow(t('prop.name'), 'Name', p.name);
    ro('r:type', cat0, t('prop.type'), p.typeName);
    attrRow(t('prop.objtype'), 'ObjectType', p.objectType);
    attrRow(t('prop.tag'), 'Tag', p.tag);
    attrRow(t('prop.desc'), 'Description', p.description);
    ro('r:guid', cat0, t('prop.guid'), p.guid);
    ro('r:line', cat0, t('prop.line'), '#' + p.id);
    const byId = new Map();
    p.sets.forEach((s, si) => s.rows.forEach((r, ri) => {
      const rid = 'p:' + si + ':' + ri;
      if (!r.edit) { ro(rid, s.name, r.name, r.value); return; }
      const vt = r.edit.valueType, shown = str(r.value);
      byId.set(rid, r);
      if (vt === 'IFCBOOLEAN' || vt === 'IFCLOGICAL') {
        const opts = [{ value: 'Yes', label: t('prop.yes') }, { value: 'No', label: t('prop.no') }];
        if (shown !== 'Yes' && shown !== 'No') opts.unshift({ value: '', label: shown });
        rows.push({ id: rid, category: s.name, label: r.name, type: 'select', options: opts, value: shown === 'Yes' || shown === 'No' ? shown : '' });
      } else if (numeric(vt) && shown !== '' && Number.isFinite(Number(shown))) {
        const whole = /INTEGER|COUNT/.test(vt);
        rows.push({ id: rid, category: s.name, label: r.name, type: 'number', value: Number(shown), step: whole ? 1 : undefined,
          parse: (text) => { const x = String(text).trim(); const n = Number(x); if (x === '' || !Number.isFinite(n)) return { ok: false, message: t('ifcedit.err.number') }; if (whole && !Number.isInteger(n)) return { ok: false, message: t('ifcedit.err.whole') }; return { ok: true, value: n }; } });
      } else rows.push({ id: rid, category: s.name, label: r.name, type: 'text', value: shown });
    }));
    const onChange = (rid, v) => {
      if (rid.startsWith('a:')) { const key = rid.slice(2); run(rid, () => { editor.setAttribute(id, key, String(v)); tagLast(label); }); return; }
      const r = byId.get(rid);
      if (r) run(rid, () => { editor.setProperty(id, r.edit, lengthToFile(r, p, String(v))); tagLast(label); });
    };
    const host = el('div', { className: 'bc-propgrid', 'data-bc-propgrid': '' });
    const g = window.ccPropGrid.create(host, { label: t('ui.properties'), key: 'properties', rows, onChange,
      onInvalid: (rid, res) => status(res?.message || t('ifcedit.err.number'), true) });
    const typeNote = p.sets.some((s) => s.fromType) ? el('p', { className: 'bc-type-note' }, t('prop.typenote')) : null;
    return { g, node: el('div', { className: 'bc-propgrid-wrap' }, ...[typeNote, host].filter(Boolean)) };
  }

  /** Several elements picked: how many, by class. Properties are shown for one element at a time. */
  function showMany() {
    pickToken++;
    const keys = [...viewer.selection];
    selected = viewer.selected;
    selInfo = null;
    const byClass = new Map();
    for (const k of keys) { const e = entryOf(k); const c = (e === cur() ? classOfId(k - model.keyBase) : e?.model.classOf.get(k - e.model.keyBase) || t('pick.many.unknown')).replace(/^Ifc/, ''); byClass.set(c, (byClass.get(c) || 0) + 1); }
    ui.props.replaceChildren(
      el('p', { className: 'bc-prop-name', 'data-pick-count': String(keys.length) }, t('pick.many', { n: keys.length })),
      el('p', { className: 'bc-muted' }, t('pick.many.hint')),
      el('p', { className: 'bc-h' }, t('pick.many.classes')),
      el('ul', { className: 'bc-counts' }, [...byClass].sort((a, b) => b[1] - a[1]).map(([c, n]) => el('li', {}, el('span', {}, c), el('span', { className: 'n' }, num(n))))));
    modelUi?.decorate(ui.props);   // several drawn walls, doors or windows: what they share (0.5 BM.5)
    syncEdit();
    addonSections(addonSelection(), pickToken);   // 0.5 AO.7
  }

  /** Properties of an element in another model: read only, with a way to make that model the active one. */
  function showForeign(p, ent) {
    ui.props.replaceChildren(
      el('p', { className: 'bc-prop-cls' }, p.cls.replace(/^Ifc/, '')),
      el('p', { className: 'bc-prop-name' }, p.name || t('prop.unnamed')),
      el('div', { className: 'bc-card-alert', 'data-foreign': '' },
        el('p', {}, t('fed.foreign', { file: ent.name })),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => { const k = selected; setActive(ent); viewer.select([k]); afterPick(); showProps(k); } }, t('fed.make.active'))),
      copyAllBar(p, ent.name),
      el('dl', { className: 'bc-dl' }, copyRow(t('prop.type'), p.typeName), copyRow(t('prop.tag'), p.tag), copyRow(t('prop.guid'), p.guid), copyRow(t('prop.line'), '#' + p.id)),
      ...p.sets.map((s, i) => el('details', { className: 'bc-set', open: i < 3 }, el('summary', {}, s.name),
        el('dl', { className: 'bc-dl' }, s.rows.map((r) => copyRow(r.name, r.value))))));
    syncEdit();
  }

  // ---- Federation (0.4 B16) ----
  const models = [];   // { mi, ifc, model, editor, name, tag, offset [x, y, z] metres (IFC axes), visible }
  let active = null;
  let refC = null;     // the first model's coordination matrix: every model is placed in its coordinates
  const cur = () => active || models[0];
  const isSpaceKey = (k) => { const e = entryOf(k); return !!e && e.model.classOf.get(k - e.model.keyBase) === 'IfcSpace'; };
  const entryOf = (key) => models.find((m) => m.mi === Math.floor(key / KEY_SPAN)) || null;
  /** A model's placement: its own coordination undone, the first model's applied, then the offset (IFC X, Y, Z → viewer). */
  const placementOf = (m) => m.matrix || placementMatrix(refC, [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)], m.offset);   // ifc-util.js; a link (0.6 DF.21) carries its whole `matrix`
  /** Active model's viewer coordinates ↔ the scene (the placement matrix). */
  const toWorld = (v) => { const M = viewer.modelMatrix(cur().mi); return [M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]]; };
  const toLocal = (v) => { const M = inv4(viewer.modelMatrix(cur().mi)); return [M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12], M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13], M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]]; };

  /** Open another IFC into the scene, beside what is open. */
  async function addModel(file, { link = null } = {}) {   // link (0.6 DF.21): { id, … } — shown by reference, never edited
    if (!models.length) { await open(file, null); return null; }
    const free = [...Array(63).keys()].map((i) => i + 1).find((i) => !models.some((m) => m.mi === i));
    if (!free) { status(t('fed.full'), true); return null; }
    status(t('fed.reading', { file: file.name }));
    await frame();
    const t0 = performance.now();
    const im = IfcModel.sharing(ifc);
    let m;
    try { m = await im.load(new Uint8Array(await file.arrayBuffer()), (done, total) => status(t('fed.building', { file: file.name, done, total })), { keyBase: keyOf(free, 0) }); }
    catch (e) { im.close(); throw new Error(t('fed.unreadable', { file: file.name })); }
    const ent = { mi: free, ifc: im, model: m, editor: new IfcEditor(WebIFC, im), name: file.name, size: file.size, file, tag: Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10), offset: [0, 0, 0], visible: true, link, matrix: null };
    models.push(ent);
    viewer.setModelMatrix(free, placementOf(ent));
    viewer.setModel(m, { add: true });
    if (cut) applySection();
    renderModels();
    status(t(link ? 'link.loaded' : 'fed.added', { file: file.name, n: m.elements, s: ((performance.now() - t0) / 1000).toFixed(1) }));
    return ent;
  }
  /** Make another model the one edits, the tree, storeys and Color by work on. */
  function setActive(ent) {
    if (!ent || ent === cur() || ent.link) return;   // a link (0.6 DF.21) is never the model you edit
    stopPlacing();
    if (colorField) colorOff();
    active = ent;
    ifc = ent.ifc; model = ent.model; editor = ent.editor; ifcName = ent.name; modelTag = ent.tag;
    swapTarget = null;
    selected = null; pickToken++;
    for (const m of models) m.ix = null;   // the model that was active may have been edited
    fillIfcInfo(model, { name: ent.name, size: ent.size ?? 0 });
    fillStoreys(model);
    fillClasses(model);
    fillTree(false);
    propIx = null;
    renderChanges();
    renderModels();
    renderColor();
    clearProps();
    afterPick();
    status(t('fed.active', { file: ent.name }));
  }
  async function removeModel(ent) {
    if (models.length < 2) return;
    if (await keepEdits(ent)) return;
    if (ent === cur()) setActive(models.find((m) => m !== ent));
    viewer.removeModel(ent.mi);
    viewer.vis.prune((k) => Math.floor(k / KEY_SPAN) !== ent.mi);
    ent.ifc.close();
    ent.asDoc?.close();
    models.splice(models.indexOf(ent), 1);
    renderModels();
    afterPick();
    status(t('fed.removed', { file: ent.name }));
  }
  function renderModels() {
    if (!ui.modelsSec) return;
    ui.modelsSec.hidden = mode !== 'ifc' || !models.length;
    try { showTeamBtn(); } catch (e) { /* not set up yet */ }
    queueMicrotask(() => { if (cmpRes && !(cmpPair || []).every((m) => models.includes(m))) clearCompare(true); else renderCompare(); });
    ui.modelList.replaceChildren(...models.map((m) => {
      const radio = el('input', { type: 'radio', name: 'bc-active-model', checked: m === cur(), disabled: !!m.link, title: m.link ? t('link.noedit') : null, 'aria-label': t('fed.edit.this', { file: m.name }), 'data-model-active': String(m.mi) });
      radio.addEventListener('change', () => { if (radio.checked) setActive(m); });
      const vis = el('input', { type: 'checkbox', checked: m.visible, 'aria-label': t('fed.show', { file: m.name }), 'data-model-visible': String(m.mi) });
      vis.addEventListener('change', () => { m.visible = vis.checked; viewer.setModelVisible(m.mi, m.visible); afterPick(); });
      const off = el('details', { className: 'bc-model-offset', 'data-model-offset': String(m.mi) },
        el('summary', { title: t('fed.offset.title.u') }, t('fed.offset')),
        el('form', { className: 'bc-model-offset-form', onsubmit: null },
          ...['X', 'Y', 'Z'].map((ax, i) => el('label', {}, ax, el('input', { type: 'text', className: 'bc-input', inputMode: 'decimal', value: lenMark(m.offset[i] * 1000, getDisplayUnits()), size: 9, 'data-axis': ax }))),   // GH.3-A: the display unit (offsets are kept in metres)
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc' }, t('fed.offset.apply'))));
      off.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = [...off.querySelectorAll('input')].map((i) => parseLen(String(i.value).trim(), getDisplayUnits()) / 1000);
        if (!v.every(Number.isFinite)) { status(t('fed.offset.bad.u'), true); return; }
        m.offset = v;
        viewer.setModelMatrix(m.mi, placementOf(m));
        if (cut) applySection();
        status(t('fed.offset.done.u', { file: m.name, x: lenMark(v[0] * 1000, getDisplayUnits()), y: lenMark(v[1] * 1000, getDisplayUnits()), z: lenMark(v[2] * 1000, getDisplayUnits()) }));
      });
      return el('li', { 'data-model': String(m.mi), className: m === cur() ? 'is-active' : '' },
        el('div', { className: 'bc-model-row' }, radio, vis,
          el('span', { className: 'bc-model-name', title: m.name }, m.name),
          m.link ? el('span', { className: 'bc-sub', 'data-model-link': m.link.id }, t('link.tag')) : null,
          el('span', { className: 'n' }, num(m.model.elements)),
          models.length > 1 ? el('button', { type: 'button', className: 'bc-forget', title: t('fed.remove', { file: m.name }), 'aria-label': t('fed.remove', { file: m.name }), 'data-model-remove': String(m.mi), onClick: () => guard(() => removeModel(m)) }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' })) : null),
        off);
    }));
  }
  ui.modelsSec?.querySelector('[data-model-add]')?.addEventListener('click', () => ui.modelInput.click());
  // 0.8 LC.2: the team's model (shell teamwork module, a cloud file in a project); the button shows when the shell has the module and this file is in the cloud
  const teamBtn = ui.modelsSec?.querySelector('[data-model-team]');
  const teamTw = () => window.ccTeamwork?.tw || null;
  const showTeamBtn = () => { if (teamBtn) teamBtn.hidden = !(teamTw() && teamTw().drawing); };
  window.addEventListener('cc-teamwork-ready', showTeamBtn);
  teamBtn?.addEventListener('click', () => guard(async () => {
    const tw = teamTw();
    if (!tw) return;
    const { loadTeamModels } = await import('./team-models.js');
    status(t('fed.team.reading'));
    const r = await loadTeamModels({ tw, addModel: (f, o) => addModel(f, o), have: () => models.map((m) => m.teamDrawing).filter(Boolean) });
    if (!r.ok) { status(t('fed.team.failed', { why: r.message || '' }), true); return; }
    status(t(r.added.length ? 'fed.team.done' : 'fed.team.none', { n: r.added.length, hidden: r.hidden, turned: r.turned, skipped: r.skipped.length }));
  }));
  showTeamBtn();

  // ---- Compare versions (0.4 B21) ----
  let cmpOld = null, cmpNew = null, cmpRes = null, cmpPair = null;
  const ixOf = (m) => (m === cur() ? index() : (m.ix ??= propertyIndex(WebIFC, m.ifc.api, m.model.modelID, m.model)));
  const keyName = (k) => { const e = entryOf(k); if (!e) return '#' + k; const id = k - e.model.keyBase; return (ixOf(e).value('name', id) ?? '#' + id) + ' (' + e.name + ')'; };
  const keyGuid = (k) => { const e = entryOf(k); return e ? ixOf(e).value('guid', k - e.model.keyBase) ?? '' : ''; };
  const CMP_SHOWN = 100;
  function renderCompare() {
    if (!ui.cmp) return;
    ui.cmpDetails.hidden = models.length < 2;
    if (ui.cmpDetails.hidden) { if (cmpRes) clearCompare(true); return; }
    if (!ui.cmpDetails.open) return;
    if (!models.includes(cmpNew)) cmpNew = cur();
    if (!models.includes(cmpOld) || cmpOld === cmpNew) cmpOld = models.find((m) => m !== cmpNew);
    const pick = (cur2, set, lbl, attr) => {
      const sel = el('select', { className: 'select-cc', [attr]: '' }, models.map((m) => el('option', { value: String(m.mi) }, m.name)));
      sel.value = String(cur2.mi);
      sel.addEventListener('change', () => { set(models.find((m) => String(m.mi) === sel.value)); renderCompare(); });
      return el('label', {}, lbl, sel);
    };
    const pal = CATEGORICAL[theme()];
    const sw = (c) => el('span', { className: 'bc-sw', style: 'background:' + c, 'aria-hidden': 'true' });
    const item = (k, what) => el('li', {}, el('button', { type: 'button', className: 'bc-linkbtn', 'data-cmp-pick': '', title: keyName(k), onClick: () => pickKeys([k]) }, keyName(k)), what ? el('span', { className: 'bc-cmp-what' }, what) : null);
    const list = (keys, f) => el('ul', {}, ...keys.slice(0, CMP_SHOWN).map(f), keys.length > CMP_SHOWN ? el('li', { className: 'bc-muted' }, t('cmp.more', { n: keys.length - CMP_SHOWN })) : null);
    const kids = [el('p', { className: 'bc-muted' }, t('cmp.intro')),
      el('div', { className: 'bc-clash' }, pick(cmpOld, (m) => { cmpOld = m; }, t('cmp.old'), 'data-cmp-old'), pick(cmpNew, (m) => { cmpNew = m; }, t('cmp.new'), 'data-cmp-new')),
      el('div', { className: 'bc-find-row' },
        el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-cmp-run': '', onClick: () => runCompare() }, t('cmp.run')),
        cmpRes ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cmp-clear': '', onClick: () => clearCompare() }, t('cmp.clear')) : null,
        cmpRes ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cmp-csv': '', onClick: () => compareDownload() }, el('i', { className: 'bi bi-download', 'aria-hidden': 'true' }), ' ', t('cmp.csv')) : null,
          cmpRes ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-cmp-words': '', onClick: () => compareCopyWords() }, el('i', { className: 'bi bi-chat-left-text', 'aria-hidden': 'true' }), ' ', t('cmp.words')) : null)];
    if (cmpRes) {
      const what = (c) => [c.props.length ? t('cmp.props', { n: c.props.length }) + ': ' + c.props.slice(0, 3).map((p) => p.field.replace(/^p:/, '')).join(', ') : '', c.moved ? t('cmp.moved.u', { d: fmtLength(c.moved) }) : '', c.reshaped ? t('cmp.reshaped') : ''].filter(Boolean).join('; ');   // i18n-ignore: separators between translated parts
      kids.push(el('ul', { className: 'bc-cmp-sum', 'data-cmp-res': '' },
        el('li', { 'data-cmp': 'added' }, el('div', { className: 'bc-check-head' }, sw(pal[1]), el('span', {}, t('cmp.added')), el('span', { className: 'n' }, String(cmpRes.added.length))), list(cmpRes.added, (k) => item(k))),
        el('li', { 'data-cmp': 'removed' }, el('div', { className: 'bc-check-head' }, sw(pal[0]), el('span', {}, t('cmp.removed')), el('span', { className: 'n' }, String(cmpRes.removed.length))), list(cmpRes.removed, (k) => item(k))),
        el('li', { 'data-cmp': 'changed' }, el('div', { className: 'bc-check-head' }, sw(pal[2]), el('span', {}, t('cmp.changed')), el('span', { className: 'n' }, String(cmpRes.changed.length))), list(cmpRes.changed, (c) => item(c.b, what(c))))),
        el('p', { className: 'bc-muted' }, t('cmp.same', { n: cmpRes.same })),
        cmpRes.dupes.length ? el('p', { className: 'bc-muted' }, t('cmp.dupes', { n: cmpRes.dupes.length })) : null);
    }
    ui.cmp.replaceChildren(...kids.filter(Boolean));
  }
  function runCompare() {
    if (!cmpOld || !cmpNew || cmpOld === cmpNew) { status(t('cmp.same.file'), true); return; }
    if (colorField) colorOff();
    if (fdOn) fdClear(true);
    const side = (m) => ({ ix: ixOf(m), model: m.model, matrix: viewer.modelMatrix(m.mi) });
    cmpRes = compareModels(side(cmpOld), side(cmpNew));
    cmpPair = [cmpOld, cmpNew];
    paintCompare();
    renderCompare();
    status(t('cmp.done', { added: cmpRes.added.length, removed: cmpRes.removed.length, changed: cmpRes.changed.length }));
  }
  function paintCompare() {
    const pal = CATEGORICAL[theme()], colors = new Map();
    for (const k of cmpRes.added) colors.set(k, pal[1]);
    for (const k of cmpRes.removed) colors.set(k, pal[0]);
    for (const c of cmpRes.changed) colors.set(c.b, pal[2]);
    viewer.setColors(colors);
    viewer.vis.isolate([...colors.keys()], { ghost: true });
    viewer.applyVisibility();
    treeView.sync();
    syncVis();
  }
  function clearCompare(quiet = false) {
    cmpRes = null; cmpPair = null;
    viewer?.setColors(null);
    if (viewer) { viewer.vis.showAll(); viewer.applyVisibility(); treeView.sync(); syncVis(); }
    renderCompare();
    if (!quiet) status(t('cmp.cleared'));
  }
  /** EG.65: the changes as plain sentences on the clipboard (an assistant can narrate them). */
  function compareWordsText() {
    const label = (id) => { const f = (ixOf(cmpPair[1]).fields.find((x) => x.id === id) || ixOf(cmpPair[0]).fields.find((x) => x.id === id)); return f ? (f.group ? f.group + '.' + f.label : fieldLabel(f)) : id; };
    const say = { added: (v) => t('cmp.say.added', v), removed: (v) => t('cmp.say.removed', v), moved: (v) => t('cmp.say.moved.u', { ...v, d: fmtLength(v.d) }), reshaped: (v) => t('cmp.say.reshaped', v), prop: (v) => t('cmp.say.prop', v) };
    const w = compareWords(cmpRes, { name: (s, k) => keyName(k), label, say });
    const head = t('cmp.say.head', { old: cmpPair[0].name, new: cmpPair[1].name, added: cmpRes.added.length, removed: cmpRes.removed.length, changed: cmpRes.changed.length });
    return head + '\n' + w.lines.map((l) => '- ' + l).join('\n') + (w.total > w.lines.length ? '\n' + t('cmp.more', { n: w.total - w.lines.length }) : '');
  }
  async function compareCopyWords() {
    const text = compareWordsText();
    try { await navigator.clipboard.writeText(text); status(t('cmp.say.copied')); } catch (e) { status(t('cmp.say.nocopy'), true); }
    return text;
  }
  function compareDownload() {
    const label = (id) => { const f = (ixOf(cmpPair[1]).fields.find((x) => x.id === id) || ixOf(cmpPair[0]).fields.find((x) => x.id === id)); return f ? (f.group ? f.group + '.' + f.label : fieldLabel(f)) : id; };
    const words = Object.fromEntries(['change', 'element', 'what', 'before', 'after', 'added', 'removed', 'changed', 'reshaped'].map((w) => [w, t('cmp.' + w)]));
    words.moved = t('cmp.moved.word');
    const csv = compareCsv(cmpRes, { name: (s, k) => keyName(k), guid: (s, k) => keyGuid(k), label, words });
    const name = cmpPair[1].name.replace(/\.ifc$/i, '') + ' changes.csv';   // i18n-ignore: a file name
    download(name, '\ufeff' + csv, 'text/csv;charset=utf-8');
    status(t('qto.downloaded', { name }));
  }
  ui.cmpDetails?.addEventListener('toggle', () => { if (ui.cmpDetails.open) renderCompare(); });
  new MutationObserver(() => { if (cmpRes && viewer) paintCompare(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  window.bimcraftCompare = { run: (oldMi, newMi) => { cmpOld = models.find((m) => m.mi === oldMi); cmpNew = models.find((m) => m.mi === newMi); ui.cmpDetails.open = true; runCompare(); return cmpRes; }, result: () => cmpRes, words: () => (cmpRes ? compareWordsText() : '') };   // for tests
  ui.modelInput?.addEventListener('change', () => {
    const files = [...ui.modelInput.files];
    ui.modelInput.value = '';
    guard(async () => { for (const f of files) await addModel(f); });
  });
  window.bimcraftModels = { list: () => models.map((m) => ({ mi: m.mi, name: m.name, active: m === cur(), visible: m.visible, offset: m.offset, elements: m.model.elements })), add: addModel, setActive: (mi) => setActive(models.find((m) => m.mi === mi)), matrix: (mi) => viewer.modelMatrix(mi) };   // for tests

  // ---- Editing ----
  const readRow = (k, v) => [el('dt', {}, k), el('dd', {}, v === null || v === undefined ? '' : String(v))];
  // ---- Copy property values (0.5 WL.3): a copy button on every value in Properties (active or another model's element),
  // and Copy all as text / CSV at the top. Values go out as shown. ----
  const copyBtn = (name, value) => el('button', { type: 'button', className: 'bc-copy-val', title: t('prop.copy.title', { name }), 'aria-label': t('prop.copy.title', { name }), 'data-copy-value': name,
    onClick: (e) => { e.stopPropagation(); copyValue(name, value); } }, el('i', { className: 'bi bi-copy', 'aria-hidden': 'true' }));
  /** A read-only Properties row whose value can be copied. */
  const copyRow = (k, v) => {
    const s = v === null || v === undefined ? '' : String(v);
    return [el('dt', {}, k), el('dd', { className: 'bc-copyable' }, el('span', { className: 'bc-copy-text-val' }, s), s ? copyBtn(k, s) : null)];
  };
  async function copyValue(name, value) {
    await copyText(value);
    status(t('prop.copied', { name, value: value.length > 60 ? value.slice(0, 57) + '…' : value }), false, true);
  }
  /** Copy all / Copy as CSV for one element's properties (`p` from properties(); `file` names another model). */
  const copyAllBar = (p, file) => el('p', { className: 'bc-copy-all', 'data-props-copy': '' },
    el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-props-copy-text': '', title: t('prop.copyall.title'), onClick: async () => { await copyText(elementText(p)); status(t('prop.copied.all', { name: p.name || t('prop.unnamed') }), false, true); } },
      el('i', { className: 'bi bi-copy', 'aria-hidden': 'true' }), ' ', t('prop.copyall')),
    el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-props-copy-csv': '', title: t('prop.copycsv.title'), onClick: async () => { await copyText(elementCsv(p, { file: models.length > 1 ? file : undefined })); status(t('prop.copied.csv', { name: p.name || t('prop.unnamed') }), false, true); } },
      el('i', { className: 'bi bi-filetype-csv', 'aria-hidden': 'true' }), ' ', t('prop.copycsv')));

  /** dt + a dd that turns into an input on click. Enter or leaving the field saves; Esc cancels. */
  // ---- Add-ons (0.5 AO.7): the state the add-on API reads, its Properties sections and exporter buttons ----
  /** The pick as the open model's express ids (add-ons see the active model only). */
  function addonSelection() {
    const m = cur();
    if (!m || !viewer) return [];
    return [...viewer.selection].filter((k) => entryOf(k) === m).map((k) => k - m.model.keyBase);
  }
  async function addonSections(ids, token) {
    if (!addons || mode !== 'ifc' || !ids.length) return;
    let secs;
    try { secs = await addons.propsSections(ids, ifc); } catch (e) { return; }
    if (token !== pickToken || !secs?.length) return;
    for (const s of secs) {
      ui.props.append(el('details', { className: 'bc-set', open: true, 'data-addon-props': s.key }, el('summary', {}, s.label),
        el('dl', { className: 'bc-dl' }, s.fields.flatMap((f) => (f.edit ? editableRow(f.label, f.value, false, {}, (v) => f.edit(v)) : readRow(f.label, f.value))))));
    }
  }
  /** One button per add-on exporter beside Save as IFC (the IFC with every edit goes to the add-on's write()). */
  function renderAddonExports() {
    if (!ui.save) return;
    let box = ui.save.parentElement.querySelector('[data-addon-exports]');
    const list = addons && mode === 'ifc' && model ? addons.exporters() : [];
    if (!list.length) { box?.remove(); return; }
    if (!box) { box = el('span', { className: 'bc-addon-exports', 'data-addon-exports': '' }); ui.save.after(box); }
    box.replaceChildren(...list.map((x) => el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-addon-export': x.id, title: t('addon.export.title', { label: x.label }),
      onClick: () => guard(async () => {
        const stem = ifcName.replace(/\.ifc$/i, '');
        const out = await x.write(addons.exportInput(ifcName));
        if (out === null || out === undefined) { status(t('addon.export.nothing', { label: x.label }), true); return; }
        await download(stem + x.extension, out instanceof Blob ? out : new Blob([out], { type: x.mime }), x.mime);
        status(t('addon.export.done', { file: stem + x.extension }), false, true);
      }) }, el('i', { className: 'bi bi-box-arrow-up-right', 'aria-hidden': 'true' }), ' ', x.label)));
  }

  function editableRow(name, value, isEdited, { valueType }, commit) {
    const shown = value === null || value === undefined ? '' : String(value);
    const dd = el('dd', { className: 'bc-editable' + (isEdited ? ' is-edited' : '') });
    const show = () => dd.replaceChildren(...[el('button', { type: 'button', className: 'bc-val', title: t('prop.change.title', { name }), onClick: start },
      shown || el('span', { className: 'bc-empty-val' }, t('prop.empty'))), shown ? copyBtn(name, shown) : null].filter(Boolean));   // never hand replaceChildren a null
    function start() {
      const bool = valueType === 'IFCBOOLEAN' || valueType === 'IFCLOGICAL';
      const input = bool
        ? el('select', { className: 'bc-input', 'aria-label': name }, el('option', { value: 'Yes', selected: shown === 'Yes' }, t('prop.yes')), el('option', { value: 'No', selected: shown !== 'Yes' }, t('prop.no')))
        : el('input', { className: 'bc-input', type: 'text', value: shown, 'aria-label': name, inputMode: /REAL|MEASURE|INTEGER|COUNT|RATIO/.test(valueType || '') ? 'decimal' : 'text' });
      const err = el('span', { className: 'bc-input-err', role: 'alert' });
      let done = false;
      const finish = (save) => {
        if (done) return;
        if (save && input.value !== shown) {
          try { commit(input.value); }
          catch (e) { err.textContent = e.message; input.focus(); return; }
          done = true;
          afterEdit();
          return;
        }
        done = true;
        show();
      };
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); finish(true); }
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish(false); }
      });
      input.addEventListener('blur', () => setTimeout(() => finish(true), 0));
      if (bool) input.addEventListener('change', () => finish(true));
      dd.replaceChildren(input, err);
      input.focus();
      if (input.select) input.select();
    }
    show();
    return [el('dt', {}, name), dd];
  }

  const tagLast = (label) => { const c = editor.changes[editor.changes.length - 1]; if (c) c.label = label; };

  function afterEdit() {
    renderChanges();
    bimTotalsInvalidate();
    if (selected !== null) showProps(selected);
  }

  let bimShell = null, savedOnce = false;
  const undoHook = mountUndoHook({ changes: () => (editor ? editor.changes : []), undoOne: () => undo() });   // 0.8 EG.77
  function renderChanges() {
    undoHook.settle();
    syncAccepted();
    bimShell?.changed();   // calc sheets and reasons live in the IFC: an edit, undo, redo, open or save may have moved them   // 0.7.1 → 0.8: the IFC's accepted problems after an edit, undo or redo
    idsUi?.changed();   // 0.7.1 71.25: re-check against the IDS (and read it again: an undo may have changed it)
    const list = editor ? editor.changes : [];
    ui.changes.hidden = !editor;
    const VERB = { place: t('changes.verb.place'), swap: t('changes.verb.swap'), update: t('changes.verb.update'), remove: t('edit.verb.removed'), paste: t('edit.verb.pasted') };
    const ATTR = { Name: t('prop.name'), ObjectType: t('prop.objtype'), Tag: t('prop.tag'), Description: t('prop.desc') };
    ui.changeList.replaceChildren(...list.slice().reverse().slice(0, 50).map((c) => (VERB[c.kind] || c.verb || c.kind === 'model')
      // a model change with no verb (0.6 DF.25: an assistant's "Assistant: add 4 walls") reads as its label
      ? el('li', {}, el('span', { className: 'bc-change-what' }, (VERB[c.kind] || c.verb) ? t('changes.line', { verb: VERB[c.kind] || c.verb, what: c.label || '#' + c.id }) : c.label || '#' + c.id), c.old ? el('span', { className: 'bc-sub' }, t('changes.was', { old: c.old })) : null)
      : el('li', {},
        el('span', { className: 'bc-change-what' }, t(c.fromType ? 'changes.prop.type' : 'changes.prop', { what: c.label || '#' + c.id, prop: c.kind === 'attr' ? ATTR[c.attr] || c.attr : c.propName })),
        el('span', { className: 'bc-sub' }, t('changes.fromto', { from: fmtVal(c.old), to: fmtVal(c.value) })))));
    if (!list.length) ui.changeList.append(el('li', { className: 'bc-muted' }, t('changes.none')));
    ui.undo.disabled = !list.length;
    ui.save.disabled = !list.length && !editor?.recovered && !editor?.isNew;
    syncAutosave();
    ui.save.lastChild.textContent = ' ' + (list.length ? t('save.ifc.count', { n: list.length }) : t('save.ifc'));
    syncEdit();
    addons?.changed('model');   // 0.5 AO.7: after an edit, an undo, a rebuild or a new model
    analysisUi?.changed();      // 0.6 LC.4: analysis results go stale, the frame is read again
    pointsUi?.changed();        // 0.6 LC.22: field points made before the change say so
    assetsUi?.changed();        // 0.6 LC.12: assets read again
    phasesUi?.changed();        // 0.8 EG.59: phases and a phase view read again
    if (document.querySelector('[data-eg60-details]')?.open) window.bimcraftFurnish?.render();   // 0.8 EG.60: the rooms may have changed
    tagsUi?.changed();          // 0.8 SU.915 / SU.889 (sx-tags): tags and documents read again
    daylightUi?.changed();      // 0.6 LC.20: results made before the change say so
    renderAddonExports();
  }
  const fmtVal = (v) => v === null || v === undefined || v === '' ? t('prop.empty') : v === true ? t('prop.yes') : v === false ? t('prop.no') : typeof v === 'string' ? '"' + v + '"' : String(v);   // i18n-ignore: quotes round a text value

  function undo() {
    if (!editor) return;
    const c = editor.undo();
    if (!c) return;
    undoHook.undone();   // 0.8 EG.77
    if (c.journal) { guard(async () => { await rebuild(null); status(t('edit.undid.step', { what: c.label || c.kind })); }); return; }
    status(t('edit.undid', { what: c.kind === 'attr' ? c.attr : c.propName })); afterEdit();
  }
  // through the workspace's commands when they are there (one enablement for every caller), else as before
  ui.undo.addEventListener('click', () => { if (coreCommands) coreCommands.execute('undo'); else undo(); });
  ui.save.addEventListener('click', () => { if (coreCommands) coreCommands.execute('save'); else saveIfc(); });
  document.addEventListener('keydown', (e) => {
    if (document.querySelector('dialog[open]')) return;
    if (!coreCommands) {   // no workspace commands (no Draw extension): the keys as they were
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's' && unsavedIn(editor)) { e.preventDefault(); saveIfc(); }
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z' && editor && editor.dirty && !e.target.closest('input, textarea, select')) { e.preventDefault(); undo(); }
      return;
    }
    const id = shortcutCommand(e, workspace?.active ? workspace.state() : {});
    // Escape / fit retain established tool cancellation and camera behavior in the fallback.
    if (!id || (!workspace?.active && (id === 'clear' || id === 'fit' || id === 'open'))) return;
    e.preventDefault();
    coreCommands?.execute(id);
  });

  /** Download a new IFC with every change. The original file is never touched. */
  /** Save as IFC: a NEW file, never the original (desktop: the save dialog, named "<name> (edited).ifc"; browser: a
   *  download, as before). host.js W2.19. */
  async function saveIfc() {
    if (vaultUi) { const ro = await vaultUi.saveBlocked(); if (ro) { status(ro, true); return false; } }   // 0.8 SU.1058: a vault file is saved over only while checked out to you
    if (!unsavedIn(editor) && !picturesUi?.wantBundle()) return true;
    const pk = picturesUi ? await picturesUi.beforeSave(editor, ifcName) : null;   // 0.8 D8.8: pictures kept beside the IFC → a bundle, or a plain IFC with the small ones embedded
    if (pk?.cancel) return false;
    const bytes = pk?.bytes || editor.save();
    let name = pk?.name || (editor.isNew ? ifcName : ifcName.replace(/\.ifc$/i, '') + ' (edited).ifc');   // i18n-ignore: the saved file's name (a new building keeps its own)
    const r = await fileHost.saveAs({ data: new Blob([bytes], { type: pk?.mime || 'application/x-step' }), name, types: pk?.types || IFC_TYPES });
    if (!r.ok) { status(r.cancelled ? t('save.cancelled') : (r.error?.message || String(r.error)), !r.cancelled); return false; }
    name = r.name || name;
    const n = editor.changes.length;
    editor.changes = [];   // saved: the downloaded file holds them; start a fresh change list
    savedOnce = true;
    window.ccTotals?.markSaved?.();   // EG.30: "the change since the last save" is measured from here
    editor.recovered = false;
    editor.isNew = false;
    renderChanges();
    status(t('save.done', { file: name, n, bytes: bytes.length.toLocaleString('en-US') }) + (pk?.notice ? ' ' + pk.notice : ''));
    return true;
  }

  // ---- the Documents panel (0.8 SU.1058, session vault-08): vault/vault-app.js, loaded on first use. Check-in writes the open model's
  // bytes (as Save writes them); a file opened from the vault is saved over only while it is checked out to you. ----
  let vaultUi = null, vaultRef = null;
  async function openVault() {
    if (!vaultUi) {
      const { installVaultPanel } = await import('./vault/vault-app.js');
      vaultUi = installVaultPanel({
        stage: root.querySelector('.bc-stage'), el, t, print: (m) => status(m), focusCommandLine: () => {}, fileHost, kinds: ['ifc'],
        openFile: (f) => guard(() => open(f)),
        currentFile: () => (editor ? { bytes: editor.save() } : { wrong: true }),
        getRef: () => vaultRef, setRef: (r) => { vaultRef = r; },
        afterCheckin: () => { editor.changes = []; renderChanges(); },
        saveBlob: (name, text, mime) => fileHost.download(new Blob([text], { type: mime }), name, mime),
      });
    }
    await vaultUi.open();
  }
  root.querySelector('[data-vault-open]')?.addEventListener('click', () => openVault().catch((err) => status(String(err.message || err), true)));

  // ---- RVT / RFA ----
  async function openRevit(file, path) {
    mode = 'none';
    status(t('rvt.reading'));
    await frame();
    // A cut-off file opens as far as it is really there (info.partial); the card says so first.
    const info = await readRevit(file, file.name, { partial: true });
    rvtOpen = { file, path, info };
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
    if (!root?.dataset.rvtPreview || rvtOpen?.info !== info) return null;
    const pv = previewSupport(info, rvtOpen.file.name);
    if (!pv.ok) return pv.why === 'old' ? el('p', { className: 'bc-card-sub', 'data-rvt-preview-old': '' }, t('rvt.preview.old', { release: pv.release })) : null;
    return el('div', { className: 'bc-card-rvtpreview', 'data-rvt-preview-offer': pv.level },
      el('p', {}, t('rvt.preview.what.' + pv.level, { release: pv.release })),
      el('p', {}, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-rvt-preview-go': '', onClick: () => guard(previewRevit) },
        el('i', { className: 'bi bi-box', 'aria-hidden': 'true' }), ' ' + t('rvt.preview.button'))));
  }

  /** Convert the project on the card to IFC4 in a worker (rvt-convert.js) and open it like any IFC: the File panel then
   *  says it is a preview, what read it and which classes are boxes. The original file is untouched. */
  async function previewRevit() {
    if (!rvtOpen) return;
    const { file, path } = rvtOpen;
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
    if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = null; }
    const proj = info.project;
    const fam = info.family;
    const title = projectParam(proj, 'Project Name') || (fam && fam.title) || (proj && proj.title) || info.fileName;   // i18n-ignore: a parameter name in the file
    const sub = [projectParam(proj, 'Project Number'), projectParam(proj, 'Client Name'), fam && fam.categories.join(', ')].filter(Boolean).join(', ');   // i18n-ignore: parameter names in the file

    let preview;
    if (info.preview && info.preview.png.length) {
      previewUrl = URL.createObjectURL(new Blob([info.preview.png], { type: 'image/png' }));
      preview = el('div', { className: 'bc-card-preview' }, el('img', { src: previewUrl, alt: t('rvt.preview.alt'), width: info.preview.width || undefined, height: info.preview.height || undefined }));
    } else {
      const cutOff = info.partial && info.missing.some((s) => s.path === 'RevitPreview4.0');
      preview = el('div', { className: 'bc-card-preview' }, el('p', { className: 'bc-muted' }, cutOff ? t('rvt.preview.cutoff') : t('rvt.preview.none')));
    }

    const kids = [];
    if (path !== null) {
      kids.push(el('p', { className: 'bc-card-back' },
        el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => showFolder() }, t('rvt.back', { name: folder.scan.name })),
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
          const res = resolveLink(r, dir, folder.index);
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

  function section(title, rows) {
    const shown = rows.filter(([, v]) => v !== null && v !== undefined && v !== '');
    if (!shown.length) return null;
    return el('section', { className: 'bc-card-sec' }, el('h2', {}, title),
      el('table', {}, el('tbody', {}, ...shown.map(([k, v]) => el('tr', {}, el('th', { scope: 'row' }, k), el('td', {}, String(v)))))));
  }

  // ---- DWG / DXF ----
  async function openDwg(file, path, kind) {
    status(t('dwg.reading'));
    await frame();
    const t0 = performance.now();
    lastDwg = { file, path, kind };
    const { db, tag } = await parseDrawing(file, kind);
    leave3d();   // back to 2D first; the end of openDwg goes to 3D when Settings › BimCraft says so (the default)
    dwgOpen = { db, fileName: file.name };

    // Linked drawings (xrefs): found by name in the open folder, or among files added by hand.
    const xrefs = new Map(), found = new Map();
    const names = (db.blocks || []).filter((b) => b.flags & 4).map((b) => b.name);
    dwgOpen.xrefs = names.length;
    for (const name of names) {
      const hit = findLinked(name, path);
      if (!hit) continue;
      status(t('dwg.reading.linked', { file: hit.file.name }));
      await frame();
      try {
        xrefs.set(name.toLowerCase(), (await parseDrawing(hit.file, 'dwg')).db);
        found.set(name, hit.where);
      } catch (e) { console.error(e); }
    }
    const drawing = compileDrawing(db, { versionTag: tag, xrefs });
    dwg3d = { db, xrefs, compiled: null };   // compiled for 3D on the first switch to 3D
    if (!drawing.spaces.length) throw new Error(t('dwg.empty.spaces'));
    const equipment = equipmentList(db, drawing);

    showStage('dwg');
    mode = 'dwg';
    library.refresh();
    if (!dwgView) { dwgView = new DrawingView(ui.dwgCanvas, { onCursor: (x, y) => { ui.coords.textContent = t('dwg.coords.u', { x: coord(x), y: coord(y), units: dwgCoordUnits }); } }); ui.dwgCanvas.view = dwgView; }   // .view: tests
    ui.dwgCanvas.view = dwgView;   // for tests and the console
    // opening in 3D: the 2D canvas stays hidden, so its first (slow) frame is not drawn for nothing
    const modelHas = drawing.spaces.some((sp) => sp.kind !== 'paper' && sp.batches.size);
    const start3d = settings.dwgStart === '3d' && modelHas;
    if (start3d) ui.dwgCanvas.hidden = true;
    dwgView.setDrawing(drawing);
    dwgView.setPrint(printView);
    renderSheetTabs(drawing, equipment);
    if (equipment) {
      const sheetName = (key) => drawing.spaces.find((x) => x.key === key)?.name || key;
      renderEquipment(ui.equip, equipment, {
        sheetName,
        onShow: (row) => {
          const place = row.places.find((p) => p.sheets.length) || row.places[0];
          ui.equip.hidden = true;
          ui.dwgCanvas.hidden = false;   // visible first: the zoom is worked out from the canvas size
          const key = dwgView.focusModelPoint(place.x, place.y, place.sheets[0]);
          selectSpace(key, true);
          status(row.category ? t('equip.ringed.cat', { no: row.no, category: row.category, sheet: sheetName(key) }) : t('equip.ringed', { no: row.no, sheet: sheetName(key) }));
        },
        onCsv: (rows, label, pick) => {
          // i18n-ignore: the CSV's file name
          const name = file.name.replace(/\.(dwg|dxf)$/i, '') + ' equipment' + (label && pick !== 'every' && pick !== 'all' ? ' (' + label.replace(/[\\/:*?"<>|]/g, '') + ')' : '') + '.csv';
          download(name, '\ufeff' + equipmentCsv(rows, sheetName), 'text/csv;charset=utf-8');
          status(t('equip.downloaded', { file: name, n: rows.length, count: num(rows.length) }));
        },
      });
    } else ui.equip.replaceChildren();
    selectSpace(drawing.spaces[0]?.key, true);
    renderLayers(drawing);

    // Raster images (logos in title blocks): the file each points at, found by name like linked drawings.
    const pictures = [], bitmaps = new Map();
    for (const im of drawing.images) {
      const hit = findPicture(im.name, path);
      let shown = false, why = hit ? '' : t('dwg.img.notfound');
      if (hit) {
        try { bitmaps.set(im.ref, await createImageBitmap(hit.file)); shown = true; }
        catch { why = /\.tiff?$/i.test(hit.file.name) ? t('dwg.img.tiff') : t('dwg.img.unreadable'); }
      }
      pictures.push({ ...im, hit, shown, why });
    }
    dwgView.setImages(bitmaps);

    dwgCoordUnits = drawing.units || t('sec.units');   // GH.3-A: a drawing's coordinates keep its own units, and the readout says which
    const sheets = drawing.spaces.filter((s) => s.kind === 'paper').length;
    ui.infoH.textContent = t('info.h.drawing');
    const onSheetsN = equipment ? equipment.rows.filter((r) => r.sheets.length).length : 0;
    fillDl(ui.infoDl, [
      [t('info.file'), file.name], [t('info.size'), bytes(file.size)],
      [t('info.format'), drawing.release ? t('dwg.format.release', { release: drawing.release, tag }) : (tag || kind.toUpperCase())],
      [t('info.units'), drawing.units || null], [t('info.entities'), num(drawing.stats.entities)],
      [t('info.layers'), num(drawing.layers.length)], [t('info.sheets'), sheets ? num(sheets) : t('info.sheets.none')],
      [t('info.linked'), drawing.xrefs.length ? t('dwg.linked.loaded', { loaded: drawing.xrefs.filter((x) => x.loaded).length, total: drawing.xrefs.length }) : null],
      [t('info.equipment'), equipment ? t('dwg.equip.onsheets', { n: onSheetsN, count: num(onSheetsN) }) : null],
    ]);
    ui.info.hidden = false;
    ui.back.hidden = !fromFolder(path);
    ui.storeys.hidden = true;
    ui.classes.hidden = true;
    const missing = Object.entries(drawing.stats.unsupported);
    const missingX = drawing.xrefs.filter((x) => !x.loaded);
    const missingP = pictures.filter((p) => !p.hit);
    ui.props.replaceChildren(...[
      el('p', { className: 'bc-muted' }, t('dwg.hint')),
      drawing.xrefs.length ? el('div', { className: 'bc-xrefs' },
        el('p', { className: 'bc-h' }, t('dwg.linked.title')),
        el('ul', { className: 'bc-copies' }, drawing.xrefs.map((x) => el('li', {},
          el('span', {}, x.name + '.dwg'),
          el('span', { className: 'bc-pill ' + (x.loaded ? 'is-ok' : 'is-bad') }, x.loaded ? t('dwg.linked.shown') : t('dwg.linked.notfound')),
          x.loaded && found.get(x.name) ? el('span', { className: 'bc-sub' }, found.get(x.name)) : null))),
        missingX.length ? el('p', { className: 'bc-muted' }, fromFolder(path)
          ? t('dwg.linked.missing.folder')
          : t('dwg.linked.missing.file')) : null,
        missingX.length ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => ui.xrefInput.click() }, t('dwg.linked.add')) : null) : null,
      pictures.length ? el('div', { className: 'bc-xrefs' },
        el('p', { className: 'bc-h' }, t('dwg.images.title')),
        el('ul', { className: 'bc-copies' }, pictures.map((p) => el('li', {},
          el('span', {}, p.name),
          el('span', { className: 'bc-pill ' + (p.shown ? (p.hit.exact ? 'is-ok' : 'is-warn') : 'is-bad') }, p.shown ? (p.hit.exact ? t('dwg.img.shown') : t('dwg.img.similar')) : p.why),
          p.hit ? el('span', { className: 'bc-sub' }, p.hit.where) : null))),
        missingP.length ? el('p', { className: 'bc-muted' }, fromFolder(path) ? t('dwg.img.missing.folder') : t('dwg.img.missing.file')) : null,
        missingP.length ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => ui.xrefInput.click() }, t('dwg.img.add')) : null) : null,
      missing.length ? el('div', { className: 'bc-notdrawn' },
        el('p', { className: 'bc-h' }, t('dwg.notdrawn.title')),
        el('ul', { className: 'bc-counts' }, missing.map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))),
        el('p', { className: 'bc-muted' }, t('dwg.notdrawn.note'))) : null,
      dynamicBlock(db),   // 0.5 DB.11
      drawing.stats.truncated ? el('p', { className: 'bc-input-err' }, t('dwg.truncated')) : null,
    ].filter(Boolean));
    if (!drawing.spaces.some((sp) => sp.batches.size) && !drawing.xrefs.length) {
      status(t('dwg.empty', { file: file.name }), true);
      return;
    }
    // read in {s} s, then "rendering…" until the first frame is on screen (3D, or 2D when 3D is off or can't start), then
    // how long that took
    const openS = ((performance.now() - t0) / 1000).toFixed(1), t1 = performance.now();
    const renderingMsg = t('dwg.opened.rendering', { file: file.name, s: openS });
    status(renderingMsg);
    let fallback = false;
    if (start3d) {
      await frame();
      try { await toggle3d({ quiet: true }); } catch (e) {
        console.warn(e); fallback = true; leave3d();   // WebGL refused (some browsers, remote desktops): the 2D view
        ui3.wrap.hidden = true; ui3.bar.hidden = true; ui.dwgCanvas.hidden = false; ui.coords.hidden = false; dwgView.resize();
      }
    }
    await (view3dOn ? view3d.whenDrawn() : dwgView.whenDrawn());
    if (fallback) status(t('dwg3d.fallback'));
    else if (ui.status.textContent === renderingMsg) status(t('dwg.opened.rendered', { file: file.name, s: openS, r: ((performance.now() - t1) / 1000).toFixed(1) }), false, true);
  }
  async function parseDrawing(file, kind) {
    const data = new Uint8Array(await file.arrayBuffer());
    const tag = kind === 'dwg' ? new TextDecoder().decode(data.subarray(0, 6)) : '';
    let db;
    try { db = await readDrawingModel(data, kind); } catch (e) {
      if (e.binaryDxf) throw Object.assign(new Error(t('dwg.unreadable.binary', { file: file.name, why: e.message })), { userFacing: true });
      console.warn(e);
      throw new Error(t('dwg.unreadable', { file: file.name, format: tag || kind.toUpperCase() }));
    }
    return { db, tag };
  }
  /** DWG or DXF bytes → the drawing model (docs/DWG-LIB-SPEC.md). The readers are plain JS, imported on first use. */
  async function readDrawingModel(data, kind) {
    // a binary DXF ("AutoCAD Binary DXF" + CR LF SUB NUL) cannot be read as text: say so plainly (0.4 B8)
    if (startsWith(data, 'AutoCAD Binary DXF')) { const e = new Error(t('dwg.binary.dxf')); e.binaryDxf = true; throw e; }   // i18n-ignore: the file's own signature
    if (kind === 'dxf') {
      const { readDxfModel } = await import('./dxf-model.js');
      let text = new TextDecoder('utf-8').decode(data);
      if (text.includes('\ufffd')) text = new TextDecoder('windows-1252').decode(data);
      return readDxfModel(text);
    }
    // cc-dwg reads in a module worker (0.4 item 1.3, cad-files): a big drawing no longer freezes the page; it falls back to
    // this thread when a worker cannot start. Same model as readDwg.
    const { readDwgAsync } = await import('./dwg/read-async.js');
    return readDwgAsync(data);
  }

  /** A linked drawing's file: added by hand first, then the open folder (same folder as the host preferred). */
  function findLinked(name, path) {
    const want = (name + '.dwg').toLowerCase();
    if (xrefFiles.has(want)) return { file: xrefFiles.get(want), where: t('dwg.addedbyyou') };
    if (!folder) return null;
    const hits = folder.index.byName.get(want) || [];
    if (!hits.length) return null;
    const dir = path && path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : '';
    const best = hits.find((h) => h.path.slice(0, h.path.lastIndexOf('/') + 1) === (dir ? dir + '/' : '')) || hits[0];
    return { file: best.file, where: best.path };
  }

  /**
   * A picture's file: the same name added by hand or in the open folder (same folder first); else a
   * file whose name contains the picture's name (eTransmit and Revit exports prefix the project name,
   * e.g. "…-studio_logo-5425051.png" for "studio_logo.png").
   */
  function findPicture(name, path) {
    const want = name.toLowerCase();
    if (!want) return null;
    if (xrefFiles.has(want)) return { file: xrefFiles.get(want), where: t('dwg.addedbyyou'), exact: true };
    const dir = path && path.includes('/') ? path.slice(0, path.lastIndexOf('/') + 1) : '';
    const near = (hits) => hits.find((h) => h.path.slice(0, h.path.lastIndexOf('/') + 1) === dir) || hits[0];
    if (folder && folder.index.byName.has(want)) { const h = near(folder.index.byName.get(want)); return { file: h.file, where: h.path, exact: true }; }
    const dot = want.lastIndexOf('.'), stem = dot > 0 ? want.slice(0, dot) : want, ext = dot > 0 ? want.slice(dot) : '';
    if (stem.length < 4) return null;
    const like = (n) => n.endsWith(ext) && n.includes(stem);
    for (const [n, f] of xrefFiles) if (like(n)) return { file: f, where: t('dwg.addedbyyou'), exact: false };
    if (folder) {
      const hits = [...folder.index.byName].filter(([n]) => like(n)).flatMap(([, hs]) => hs);
      if (hits.length) { const h = near(hits); return { file: h.file, where: h.path, exact: false }; }
    }
    return null;
  }

  ui.xrefInput.addEventListener('change', () => {
    for (const f of ui.xrefInput.files) xrefFiles.set(f.name.toLowerCase(), f);
    ui.xrefInput.value = '';
    if (lastDwg) guard(() => openDwg(lastDwg.file, lastDwg.path, lastDwg.kind));
  });

  const coord = (v) => (Math.abs(v) >= 1e5 ? v.toFixed(0) : Math.abs(v) >= 100 ? v.toFixed(2) : v.toFixed(3));

  function renderSheetTabs(drawing, equipment) {
    const tab = (key, icon, label, title) => el('button', { type: 'button', className: 'bc-tool', 'aria-pressed': 'false', 'data-space-key': key, title, onClick: () => working(async () => { selectSpace(key); await dwgView.whenDrawn(); }) },
      el('i', { className: 'bi ' + icon, 'aria-hidden': 'true' }), el('span', {}, label));
    const onSheets = equipment ? equipment.rows.filter((r) => r.sheets.length).length || equipment.rows.length : 0;
    ui.sheetTabs.replaceChildren(...[   // replaceChildren would print a null as "null"
      ...drawing.spaces.map((s) => tab(s.key, s.kind === 'model' ? 'bi-bounding-box-circles' : 'bi-file-earmark', s.name)),
      equipment ? tab('equipment', 'bi-list-check', t('dwg.tab.equipment', { n: num(onSheets) }), t('dwg.tab.equipment.title')) : null,
      el('button', { type: 'button', className: 'bc-tool', 'aria-pressed': 'false', 'data-dwg-3d': '', title: t('dwg.tab.3d.title'), onClick: () => guard(() => working(toggle3d)) },
        el('i', { className: 'bi bi-badge-3d', 'aria-hidden': 'true' }), el('span', {}, '3D')),   // i18n-ignore: a label that is a symbol
      el('button', { type: 'button', className: 'bc-tool', title: t('dwg.tab.fit.title'), onClick: () => { if (view3dOn) view3d.extents(); else if (ui.equip.hidden) dwgView.fit(); } }, el('i', { className: 'bi bi-arrows-fullscreen', 'aria-hidden': 'true' }), el('span', {}, t('dwg.tab.fit'))),
      el('button', { type: 'button', className: 'bc-tool', 'aria-pressed': printView ? 'true' : 'false', 'data-print-view': '', title: t('dwg.tab.print.title'), onClick: togglePrint },
        el('i', { className: 'bi bi-printer', 'aria-hidden': 'true' }), el('span', {}, t('dwg.tab.print'))),
      root.dataset.editUrl ? el('span', { className: 'bc-tool-sep', 'aria-hidden': 'true' }) : null,
      root.dataset.editUrl ? el('button', { type: 'button', className: 'bc-tool', 'data-edit-drawing': '', title: t('handoff.dwg.title', { app: root.dataset.editApp }), onClick: editDrawing },
        el('i', { className: 'bi bi-pencil-square', 'aria-hidden': 'true' }), el('span', {}, t('handoff.dwg.button', { app: root.dataset.editApp }))) : null,
    ].filter(Boolean));
  }
  /** Hand the open drawing to the drafting app in a new tab (handoff.js). Linked drawings stay behind. */
  function editDrawing() {
    if (!lastDwg) return;
    // sendHandoff opens the tab inside the click (pop-up blockers); the new page waits for the file to arrive.
    sendHandoff(root.dataset.editUrl, lastDwg.file, 'bimcraft').then(
      () => status(t('handoff.dwg.done', { file: lastDwg.file.name, app: root.dataset.editApp }) + (dwgOpen?.xrefs ? ' ' + t('handoff.dwg.xrefs') : ''), false, true),
      (e) => { console.error(e); status(t(e.code === 'blocked' ? 'handoff.blocked' : 'handoff.failed'), true); });
  }
  /** Hand the active IFC model to the detailing app (0.4 1.5): the file as opened, or with the unsaved changes in it. */
  function handIfc(btn) {
    if (mode !== 'ifc' || !model) return;
    const file = editor?.dirty ? new File([editor.save()], ifcName, { type: 'application/x-step' }) : (cur().file || new File([editor.save()], ifcName, { type: 'application/x-step' }));
    sendHandoff(btn.dataset.handoffUrl, file, 'bimcraft').then(
      () => status(t('handoff.ifc.done', { file: ifcName, app: btn.dataset.handoffApp }), false, true),
      (e) => { console.error(e); status(t(e.code === 'blocked' ? 'handoff.blocked' : 'handoff.failed'), true); });
  }
  $('[data-handoff-ifc]')?.addEventListener('click', (e) => handIfc(e.currentTarget));
  /** Model, a sheet or the equipment list; `keep` = the view is already set (opening, or a jump to an item). */
  function selectSpace(key, keep = false) {
    if (view3dOn) leave3d();   // a sheet, Model or the equipment list: back to the 2D view
    const eq = key === 'equipment';
    ui.equip.hidden = !eq;
    ui.dwgCanvas.hidden = eq;
    ui.coords.hidden = eq;
    if (!eq && !keep) dwgView.setSpace(key);
    if (!eq) dwgView.resize();
    ui.sheetTabs.querySelectorAll('[data-space-key]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.spaceKey === key ? 'true' : 'false'));
    if (eq) ui.equip.scrollTop = 0;
    // A sheet whose viewports show none of the model (dwg-compile.js vp.blank) would just look broken: say why — and only
    // while that sheet is shown (2026-10-24: the note stayed on Model).
    clearBlankNote();
    const sp = !eq && dwgView.space;
    if (sp?.kind === 'paper' && !sp.batches.size && sp.viewports.length && sp.viewports.every((v) => v.blank)) {
      const mb = dwgView.drawing.spaces.find((x) => x.kind === 'model')?.bounds, v = sp.viewports[0];
      if (mb && Number.isFinite(mb.minX)) status(blankNote = t('dwg.sheet.blank', { sheet: sp.name, at: coord(v.vx) + ', ' + coord(v.vy), from: coord(mb.minX) + ', ' + coord(mb.minY), to: coord(mb.maxX) + ', ' + coord(mb.maxY) }));
    }
  }
  let blankNote = '';
  function clearBlankNote() {
    if (blankNote && ui.status.textContent === blankNote) status('');
    blankNote = '';
  }
  /**
   * Run a view switch with "Working…" over the drawing (2026-10-24 report: switches on a big drawing took seconds with no
   * sign of life). The overlay is shown and painted first; CSS keeps it invisible for 0.4 s, so quick switches don't flash.
   */
  let busyDepth = 0;
  async function working(fn) {
    busyDepth++;
    ui.dwgBusy.hidden = false;
    try { await frame(); return await fn(); } finally { if (--busyDepth === 0) ui.dwgBusy.hidden = true; }
  }
  function togglePrint() {
    printView = !printView;
    dwgView.setPrint(printView);
    ui.sheetTabs.querySelector('[data-print-view]')?.setAttribute('aria-pressed', printView ? 'true' : 'false');
  }

  // ---- Drawing in 3D (dwg-compile3d.js + dwg-view3d.js, both imported on the first switch) ----
  const ui3 = { wrap: $('[data-dwg3d]'), canvas: $('[data-dwg3d-canvas]'), bar: $('[data-dwg3d-bar]') };
  async function toggle3d({ quiet = false } = {}) {   // quiet: openDwg says what happened itself
    if (!dwg3d || ui.dwg.hidden) return;
    if (view3dOn) { leave3d(); return; }
    clearBlankNote();
    if (!dwg3d.compiled) {
      if (!quiet) status(t('dwg3d.building'));
      await frame();
      const { compileModel3d } = await import('./dwg-compile3d.js');
      dwg3d.compiled = compileModel3d(dwg3d.db, { xrefs: dwg3d.xrefs });
    }
    const m = dwg3d.compiled;
    if (cut) sectionOff();
    ui.equip.hidden = true;
    ui.dwgCanvas.hidden = true;
    ui.coords.hidden = true;
    ui3.wrap.hidden = false;
    ui3.bar.hidden = false;
    if (!view3d) {
      const { DrawingView3D } = await import('./dwg-view3d.js');
      view3d = new DrawingView3D(ui3.canvas);
      ui3.canvas.view = view3d;   // for tests and the console
      view3d.onPick = (owner, { add }) => pick3d(owner, add);
      const cd = addCorner(ui3.wrap, cameraCubeOptions(view3d.cam, { invalidate: () => view3d.render(), home: () => view3d.standard('iso') }));
      view3d.onRender = cd.update;
      view3d.onUserMove = cd.stop;
      ui3.canvas.cube = cd.c;   // for tests
    }
    view3d.resize();
    if (view3d.model !== m) view3d.setModel(m, dwgView.hidden);
    else view3d.syncLayers(dwgView.hidden);
    view3d.highlight(null);
    view3dOn = true;
    ui.sheetTabs.querySelectorAll('[data-space-key]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    ui.sheetTabs.querySelector('[data-dwg-3d]')?.setAttribute('aria-pressed', 'true');
    ui3.bar.querySelector('[data-v3="persp"]')?.setAttribute('aria-pressed', view3d.cam.persp ? 'true' : 'false');
    props2d = [...ui.props.childNodes];
    props3dSummary = props3d(m);
    ui.props.replaceChildren(...props3dSummary);
    const s = m.stats;
    if (!quiet) status(s.segments + s.triangles
      ? t(s.truncated ? 'dwg3d.shown.large' : 'dwg3d.shown', { lines: num(s.segments), faces: num(s.triangles) })
      : t('dwg3d.nothing'), !(s.segments + s.triangles));
  }
  function leave3d() {
    if (!view3dOn) return;
    if (cut) sectionOff();   // the cut belongs to the 3D view
    view3dOn = false;
    view3d?.highlight(null);
    ui3.wrap.hidden = true;
    ui3.bar.hidden = true;
    ui.dwgCanvas.hidden = false;
    ui.coords.hidden = false;
    ui.sheetTabs.querySelector('[data-dwg-3d]')?.setAttribute('aria-pressed', 'false');
    const key = dwgView?.space?.key;
    ui.sheetTabs.querySelectorAll('[data-space-key]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.spaceKey === key ? 'true' : 'false'));
    if (props2d) { ui.props.replaceChildren(...props2d); props2d = null; }
    dwgView?.resize();
  }
  // ---- Picking in the drawing's 3D view (0.4 B2): dwg-view3d.js pick() → the model-space entity → dwg-props.js ----
  let props3dSummary = null;
  const modelSpaceOf = (db) => (db.blocks || []).find((b) => /^\*model_space$/i.test(b.name))?.entities || [];
  /**
   * 0.5 DB.11: dynamic blocks (dwg-dynamic.js). The drawing shows each reference in the state its file saved (other states'
   * entities are invisible there); the drawing panel lists every dynamic block placed in model space with the states
   * shown and the ones it also has, and a picked reference names its block, state and other states.
   */
  const dynCache = new WeakMap();
  const defsOf = (db) => { let d = dynCache.get(db); if (!d) dynCache.set(db, (d = dynamicDefs(db))); return d; };
  function dynamicBlock(db) {
    const list = dynamicSummary(db, defsOf(db));
    if (!list.length) return null;
    return el('div', { className: 'bc-xrefs', 'data-dyn-blocks': '' },
      el('p', { className: 'bc-h' }, t('dwg.dyn.title')),
      el('ul', { className: 'bc-copies' }, list.map((d) => el('li', { 'data-dyn-block': d.name },
        el('span', {}, d.name), el('span', { className: 'bc-sub' }, t('dwg.dyn.count', { n: d.count })),
        d.states.length ? el('span', { className: 'bc-sub' }, t('dwg.dyn.shown', { list: d.shown.filter(([k]) => k).map(([k, n]) => t('dwg.dyn.shown.one', { state: k, n })).join(', ') || '—' })) : null,
        d.states.length ? el('span', { className: 'bc-sub' }, t('dwg.dyn.states', { label: d.label || t('dwg.dyn.label'), list: d.states.join(', ') })) : el('span', { className: 'bc-sub' }, t('dwg.dyn.nostates'))))),
      el('p', { className: 'bc-muted' }, t('dwg.dyn.note')));
  }

  function pick3d(owner, add) {
    const cur = [...view3d.picked];
    let next;
    if (add) { if (owner === null) return; next = cur.includes(owner) ? cur.filter((o) => o !== owner) : [...cur, owner]; }
    else next = owner === null ? [] : [owner];
    view3d.highlight(next);
    if (!next.length) { if (props3dSummary) ui.props.replaceChildren(...props3dSummary); status(''); return; }
    const ents = modelSpaceOf(dwg3d.db);
    if (next.length > 1) {
      const by = new Map();
      for (const o of next) { const ty = ents[o]?.type || '?'; by.set(ty, (by.get(ty) || 0) + 1); }
      ui.props.replaceChildren(
        el('p', { className: 'bc-prop-name', 'data-pick-count': String(next.length) }, t('dwg.pick.many', { n: next.length })),
        el('p', { className: 'bc-muted' }, t('dwg.pick.hint')),
        el('ul', { className: 'bc-counts' }, [...by].sort((a, b) => b[1] - a[1]).map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))));
      return;
    }
    const e = ents[next[0]];
    if (!e) return;
    const dyn = dynamicOf(dwg3d.db, e, defsOf(dwg3d.db));   // 0.5 DB.11
    const rows = entityRows(e, { units: dwg3d.compiled.units, dyn });
    const attrs = attributeRows(e);
    ui.props.replaceChildren(...[
      el('p', { className: 'bc-prop-cls' }, dyn ? t('dwg.dyn.kind', { type: e.type }) : e.type),
      el('p', { className: 'bc-prop-name', 'data-dwg-pick': String(next[0]) }, dyn?.name || e.block || e.layer || e.type),
      el('dl', { className: 'bc-dl' }, rows.flatMap((r) => [el('dt', {}, t(r.key)), el('dd', {}, r.valueKey ? t(r.value) : r.value)])),
      attrs.length ? el('details', { className: 'bc-set', open: true }, el('summary', {}, t('dwg.prop.attributes', { n: attrs.length })),
        el('dl', { className: 'bc-dl' }, attrs.flatMap((a) => [el('dt', {}, a.tag), el('dd', {}, a.value)]))) : null,
      el('p', { className: 'bc-muted' }, t('dwg.pick.back')),
    ].filter(Boolean));
  }
  window.bimcraftPick3d = (owner, add = false) => pick3d(owner, add);   // for tests
  window.bimcraftDwgState = () => import('./dwg/read-async.js').then((m) => m.dwgWorkerState());   // 'worker' | 'main' (tests)

  /** Properties while in 3D: what is drawn, what shows in 2D only, and what is not drawn yet. */
  function props3d(m) {
    const s = m.stats, rows = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]);
    const flat = rows(s.flatOnly), missing = rows(s.notDrawn);
    const size = m.bounds.min[0] <= m.bounds.max[0] ? m.bounds.max.map((v, k) => v - m.bounds.min[k]) : null;
    const f = (v) => (Math.abs(v) >= 100 ? v.toFixed(0) : v.toFixed(2));
    return [
      el('p', { className: 'bc-muted' }, t('dwg3d.hint')),
      el('p', { className: 'bc-muted' }, t('dwg.pick.intro')),
      el('dl', { className: 'bc-dl' },
        el('dt', {}, t('dwg3d.lines')), el('dd', {}, num(s.segments)),
        el('dt', {}, t('dwg3d.faces')), el('dd', {}, num(s.triangles)),
        size ? el('dt', {}, t('dwg3d.size')) : null,
        size ? el('dd', {}, size.map(f).join(' × ') + (m.units ? ' ' + m.units : '')) : null,
        s.polyline3dFixed ? el('dt', {}, t('dwg3d.poly3d')) : null,
        s.polyline3dFixed ? el('dd', {}, t('dwg3d.poly3d.fixed', { count: num(s.polyline3dFixed) })) : null),
      flat.length ? el('div', { className: 'bc-notdrawn' },
        el('p', { className: 'bc-h' }, t('dwg3d.flat.title')),
        el('ul', { className: 'bc-counts' }, flat.map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))),
        el('p', { className: 'bc-muted' }, t('dwg3d.flat.note'))) : null,
      missing.length ? el('div', { className: 'bc-notdrawn' },
        el('p', { className: 'bc-h' }, t('dwg.notdrawn.title')),
        el('ul', { className: 'bc-counts' }, missing.map(([ty, n]) => el('li', {}, el('span', {}, ty), el('span', { className: 'n' }, num(n))))),
        el('p', { className: 'bc-muted' }, t('dwg3d.notdrawn.note'))) : null,
    ].filter(Boolean);
  }
  ui3.bar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-v3]');
    if (!b || !view3d) return;
    const v = b.dataset.v3;
    if (v === 'section') { toggleSection(); return; }
    if (v === 'persp') { view3d.setPersp(!view3d.cam.persp); b.setAttribute('aria-pressed', view3d.cam.persp ? 'true' : 'false'); }
    else if (v === 'extents') view3d.extents();
    else view3d.standard(v);
  });

  // ---- Section plane: the IFC model (viewer3d.js) or a drawing in 3D (dwg-view3d.js; 0.4 B3) — whichever shows ----
  const usec = { bar: $('[data-sectionbar]'), range: $('[data-sec-range]'), offset: $('[data-sec-offset]'), hint: $('[data-sec-hint]'), flip: $('[data-sec-flip]'), unit: $('[data-sec-unit]') };
  const SEC_HINT = () => ({ top: t('sec.hint.top'), front: t('sec.hint.front'), side: t('sec.hint.side') });
  const metres = (v) => (Math.round(v * 1000) / 1000).toFixed(3).replace(/\.?0+$/, '') || '0';
  /** What the bar cuts: the drawing's 3D view while it shows, else the IFC viewer. */
  const secOnDwg = () => view3dOn && !ui.dwg.hidden;
  const secView = () => (secOnDwg() ? view3d : viewer);
  const secUnit = () => (secOnDwg() ? (dwg3d?.compiled?.units || t('sec.units')) : getDisplayUnits() === 'ftin' ? 'ft–in' : getDisplayUnits() === 'ftdec' ? 'ft' : getDisplayUnits());
  const secText = (v) => secOnDwg() ? metres(v) : fmtLen(v * 1000, getDisplayUnits());
  const secBound = (v) => secOnDwg() ? `${metres(v)} ${secUnit()}` : fmtLen(v * 1000, getDisplayUnits(), { unit: true });
  const ubox = { panel: $('[data-sec-box]'), plane: $('[data-sec-plane]'), boxBtn: $('[data-sec-axis="box"]'), fill: $('[data-sec-fill]') };
  // Sections square to the building (0.5 BM.9): a building turned in its site (true north, shared coordinates) is cut along
  // its own walls, not the model's axes. The turn is the direction most wall length runs in (IfcPlacer.planRotation),
  // read once per model; the button shows only when it is more than half a degree.
  const turnBtn = $('[data-sec-turn]');
  let turnOf = null;
  function buildingTurn() {
    if (!editor || !model) return 0;
    if (turnOf?.model !== model) { let deg = 0; try { deg = editor.placer().planRotation(null); } catch (e) { deg = 0; } turnOf = { model, deg: deg > 45 ? deg - 90 : deg }; }
    return turnOf.deg;
  }
  // 0.6 DC.57 (Discord: "the model imports at an angle", "section cuts don't line up"): with Settings › BimCraft › A building
  // turned in its site = Square to the building (the default), such a building is seen square — the view presets, the view
  // cube's faces and every new section follow its walls; the cube's compass keeps the model's north. 'placed' = the
  // model's axes, as in 0.5 (the section bar's "Square to the building" still turns a cut either way).
  const viewTurnRad = () => {
    if (settings.turned !== 'square' || mode !== 'ifc') return 0;
    const d = buildingTurn();
    return Math.abs(d) < 0.5 ? 0 : d * Math.PI / 180;
  };
  function applyViewTurn(look = false) {
    if (!viewer) return;
    const a = viewTurnRad(), was = viewer.viewTurn;
    viewer.setViewTurn(a);
    cube3d?.setNorth(-a);
    if (look && a !== was) viewer.view(settings.view);
  }
  /** A new cut starts in the view frame (square to a turned building when the setting says so). */
  const startCutTurn = () => { if (!secOnDwg()) viewer?.setSectionTurn(viewTurnRad()); };
  function syncTurn() {
    if (!turnBtn) return;
    const deg = secOnDwg() ? 0 : buildingTurn();
    turnBtn.hidden = Math.abs(deg) < 0.5;
    if (turnBtn.hidden && viewer?.sectionTurn) viewer.setSectionTurn(0);
    turnBtn.setAttribute('aria-pressed', viewer?.sectionTurn ? 'true' : 'false');
  }
  turnBtn?.addEventListener('click', () => {
    if (!viewer || !cut) return;
    const on = !viewer.sectionTurn, deg = buildingTurn();
    viewer.setSectionTurn(on ? deg * Math.PI / 180 : 0);
    cut.offset = null; cut.cells = null; cut.box = null;   // the numbers were in the other frame
    applySection();
    status(on ? t('sec.turn.on', { deg: Math.round(deg * 10) / 10 }) : t('sec.turn.off'));
  });
  function applySection() {
    const v = secView();
    if (!v || !cut) return;
    syncTurn();
    ubox.boxBtn.hidden = secOnDwg();   // the box is for IFC models
    ubox.fill.hidden = secOnDwg();     // so are filled cut faces (drawings are lines and faces, not solids)
    ubox.fill.setAttribute('aria-pressed', viewer?.capsOn ? 'true' : 'false');
    if (cut.axis === 'box' && secOnDwg()) cut.axis = 'top';
    ubox.panel.hidden = cut.axis !== 'box';
    ubox.plane.hidden = cut.axis === 'box';
    if (cut.axis === 'box') { applyBox(); return; }
    viewer?.setGrips(null);
    const [, max] = v.sectionRange(cut.axis);
    if (cut.offset === null || cut.offset > max) cut.offset = cut.axis === 'top' ? Math.min(max, max * 0.5) : max * 0.5;
    v.setSection(cut);
    usec.bar.hidden = false;
    usec.range.max = String(max || 1);
    usec.range.step = String((max || 1) / 1000);
    usec.range.value = String(cut.offset);
    if (document.activeElement !== usec.offset) usec.offset.value = secText(cut.offset);
    usec.hint.textContent = SEC_HINT()[cut.axis];
    if (usec.unit) usec.unit.textContent = secUnit();
    usec.bar.querySelectorAll('[data-sec-axis]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.secAxis === cut.axis ? 'true' : 'false'));
    usec.flip.setAttribute('aria-pressed', cut.flip ? 'true' : 'false');
    placeSectionBar();
    if (secOnDwg()) ui3.bar.querySelector('[data-v3="section"]')?.setAttribute('aria-pressed', 'true');
    else { setPressed('section', true); if (selected !== null && selected !== undefined) viewer.select([...viewer.selection]); }
  }
  /** The bar sits at the top of the 3D view it cuts (the right half in Split, the lower half when Split is stacked), under
   *  the view's toolbar and under the plan's Draw bar wherever they cover that view, however many rows each wraps to
   *  (0.6 DC.101: in Split and Plan only it lay under the Draw bar). In px, placed again whenever any of them changes. No
   *  taller than the room left in the view (it scrolls), so a short pane — Split stacked at a big interface size — never
   *  pushes the box's controls off the window. */
  function placeSectionBar() {
    const pane = (secOnDwg() ? ui3.wrap : ui.canvasWrap)?.getBoundingClientRect();
    if (!pane?.width) return;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16, gap = 0.4 * rem, side = 0.75 * rem;
    const st = usec.bar.parentElement.getBoundingClientRect();
    let top = pane.top + gap;
    for (const o of [secOnDwg() ? ui3.bar : ui.toolbar, root.querySelector('[data-plan-wrap]:not([hidden]) [data-modelbar]')]) {
      if (!o || o.hidden || !o.offsetParent) continue;
      const r = o.getBoundingClientRect();
      if (r.height && r.right > pane.left + 1 && r.left < pane.right - 1 && r.bottom > pane.top) top = Math.max(top, r.bottom + gap);
    }
    usec.bar.style.setProperty('--bc-sec-top', (top - st.top).toFixed(1) + 'px');
    usec.bar.style.setProperty('--bc-sec-left', (pane.left - st.left + side).toFixed(1) + 'px');
    usec.bar.style.setProperty('--bc-sec-maxw', Math.max(10 * rem, pane.width - 2 * side).toFixed(1) + 'px');
    usec.bar.style.setProperty('--bc-sec-maxh', Math.max(6 * rem, Math.min(pane.bottom, st.bottom) - top - gap).toFixed(1) + 'px');
  }
  {
    const again = () => { if (!usec.bar.hidden) placeSectionBar(); };
    const ro = new ResizeObserver(again);
    for (const o of [ui.toolbar, usec.bar.parentElement, root.querySelector('[data-modelbar]')]) if (o) ro.observe(o);
    // the layout (Split / Plan only / stacked) and the plan showing or not
    const mo = new MutationObserver(again);
    mo.observe(usec.bar.parentElement, { attributes: true, attributeFilter: ['class'] });
    const pw = root.querySelector('[data-plan-wrap]');
    if (pw) mo.observe(pw, { attributes: true, attributeFilter: ['hidden'] });
  }
  function sectionOff() {
    cut = null;
    viewer?.setSectionTurn?.(0);   // the next section starts on the model's axes again
    viewer?.setSection(null);
    viewer?.setGrips(null);
    view3d?.setSection(null);
    usec.bar.hidden = true;
    setPressed('section', false);
    ui3.bar?.querySelector('[data-v3="section"]')?.setAttribute('aria-pressed', 'false');
  }
  function toggleSection() { if (cut) sectionOff(); else { cut = { axis: 'top', offset: null, flip: false }; startCutTurn(); applySection(); } }
  // ---- Section box (0.4 B4; viewer3d.js setSectionBox): from / to per IFC axis, metres from the model's minimum corner ----
  // Free-form volumes (0.5 WL.1; section-volume.js): `cut.cells` = boxes kept as a union, each with tilted faces and extra
  // planes; `cut.cell` = the one the sliders edit; `cut.box` is that cell's box (setting it to another object or null —
  // Box round the pick, Whole model, tests — replaces the box of that cell).
  const ushape = { cell: $('[data-sec-cell]'), add: $('[data-sec-cell-add]'), remove: $('[data-sec-cell-remove]'), details: $('[data-sec-shape]'),
    face: $('[data-sec-tilt-face]'), a: $('[data-sec-tilt-a]'), b: $('[data-sec-tilt-b]'), alabel: $('[data-sec-tilt-alabel]'), blabel: $('[data-sec-tilt-blabel]'),
    planes: $('[data-sec-planes]'), planeAdd: $('[data-sec-plane-add]'), note: $('[data-sec-shape-note]') };
  function applyBox() {
    const size = viewer.sizeIfc();
    if (!cut.cells) cut.cells = [{ box: cut.box || { min: [0, 0, 0], max: [...size] } }];
    cut.cell = Math.max(0, Math.min(cut.cells.length - 1, cut.cell | 0));
    if (cut.box !== cut.cells[cut.cell].box) cut.cells[cut.cell] = { ...cut.cells[cut.cell], box: cut.box || { min: [0, 0, 0], max: [...size] } };
    cut.cells = cleanVolume(cut.cells, size);
    cut.box = cut.cells[cut.cell].box;
    viewer.setSection({ axis: 'box', cells: cut.cells });
    viewer.setGrips(boxGrips(cut.box), viewer.gripHover);
    usec.bar.hidden = false;
    ubox.panel.querySelectorAll('[data-box-axis]').forEach((row, k) => {
      const from = row.querySelector('[data-box-from]'), to = row.querySelector('[data-box-to]');
      for (const r of [from, to]) { r.max = String(size[k] || 1); r.step = String((size[k] || 1) / 1000); }
      from.value = String(cut.box.min[k]); to.value = String(cut.box.max[k]);
      row.querySelector('[data-box-val]').textContent = t('sec.box.val', { from: secBound(cut.box.min[k]), to: secBound(cut.box.max[k]) });
    });
    renderShape();
    usec.bar.querySelectorAll('[data-sec-axis]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.secAxis === 'box' ? 'true' : 'false'));
    placeSectionBar();
    setPressed('section', true);
    if (viewer.selection.size) viewer.select([...viewer.selection]);
  }
  const AXIS = ['X', 'Y', 'Z'];   // i18n-ignore: axis letters, as on the sliders
  /** The box list, the active cell's tilt and its extra planes. Inputs being typed in keep their text. */
  function renderShape() {
    const cells = cut.cells, cell = cells[cut.cell];
    ushape.cell.replaceChildren(...cells.map((_, i) => el('option', { value: String(i) }, t('sec.cell', { n: i + 1 }))));
    ushape.cell.value = String(cut.cell);
    ushape.remove.hidden = cells.length < 2;
    ushape.add.disabled = cells.length >= MAX_CELLS;
    const f = ushape.face.value || 'x0', [ua, ub] = FACE_AXES[f], [ta, tb] = cell.tilt[f] || [0, 0];
    ushape.alabel.textContent = t('sec.tilt.along', { axis: AXIS[ua] });
    ushape.blabel.textContent = t('sec.tilt.along', { axis: AXIS[ub] });
    if (document.activeElement !== ushape.a) ushape.a.value = String(ta);
    if (document.activeElement !== ushape.b) ushape.b.value = String(tb);
    const typing = ushape.planes.contains(document.activeElement);
    if (!typing || ushape.planes.children.length !== cell.planes.length) {
      ushape.planes.replaceChildren(...cell.planes.map((q, i) => el('span', { className: 'bc-sec-planerow', 'data-sec-plane-row': String(i) },
        el('span', { className: 'bc-sec-boxlbl' }, t('sec.plane.n', { n: i + 1 })),
        el('label', { title: t('sec.plane.az.title') }, t('sec.plane.az'), ' ', el('input', { type: 'number', className: 'bc-input bc-num', step: '5', min: '0', max: '360', value: String(Math.round(q.az * 10) / 10), 'data-pl': 'az' }), ' °'),
        el('label', { title: t('sec.plane.el.title') }, t('sec.plane.el'), ' ', el('input', { type: 'number', className: 'bc-input bc-num', step: '5', min: '-90', max: '90', value: String(Math.round(q.el * 10) / 10), 'data-pl': 'el' }), ' °'),
        el('label', { title: t('sec.plane.off.title') }, t('sec.plane.off'), ' ', el('input', { type: 'text', className: 'bc-input bc-num', value: secText(q.off), 'data-pl': 'off' })),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-sec-plane-remove': String(i), 'aria-label': t('sec.plane.remove', { n: i + 1 }) }, '×'))));
    }
    ushape.planeAdd.disabled = cell.planes.length >= MAX_PLANES;
    ushape.note.textContent = viewer.section?.empty ? t('sec.box.empty') : '';
  }
  ushape.cell.addEventListener('change', () => { if (cut?.cells) { cut.cell = Number(ushape.cell.value) || 0; cut.box = cut.cells[cut.cell].box; applyBox(); } });
  ushape.add.addEventListener('click', () => {
    if (!cut?.cells) return;
    if (cut.cells.length >= MAX_CELLS) { status(t('sec.cell.max', { n: MAX_CELLS })); return; }
    // a new box starts as a copy of this one moved half its size along X (or back, when that runs off the model)
    const size = viewer.sizeIfc(), b = cut.box, w = b.max[0] - b.min[0];
    const dx = b.max[0] + w / 2 <= size[0] ? w / 2 : -Math.min(b.min[0], w / 2);
    const box = { min: [b.min[0] + dx, b.min[1], b.min[2]], max: [b.max[0] + dx, b.max[1], b.max[2]] };
    cut.cells.push({ box, tilt: {}, planes: [] });
    cut.cell = cut.cells.length - 1; cut.box = box;
    applyBox();
    status(t('sec.cell.added', { n: cut.cells.length }));
  });
  ushape.remove.addEventListener('click', () => {
    if (!cut?.cells || cut.cells.length < 2) return;
    cut.cells.splice(cut.cell, 1);
    cut.cell = Math.max(0, cut.cell - 1); cut.box = cut.cells[cut.cell].box;
    applyBox();
  });
  ushape.face.addEventListener('change', () => { if (cut?.cells) renderShape(); });
  const setTilt = (a, b) => {
    const cell = cut.cells[cut.cell], f = ushape.face.value;
    const cl = (v) => Math.max(-MAX_TILT, Math.min(MAX_TILT, Number.isFinite(v) ? v : 0));
    if (Math.abs(a) > MAX_TILT || Math.abs(b) > MAX_TILT) status(t('sec.tilt.max', { n: MAX_TILT }));
    cell.tilt = { ...cell.tilt, [f]: [cl(a), cl(b)] };
    applyBox();
  };
  for (const inp of [ushape.a, ushape.b]) inp.addEventListener('input', () => { if (cut?.cells && inp.value.trim() !== '' && inp.value.trim() !== '-') setTilt(Number(ushape.a.value), Number(ushape.b.value)); });
  ubox.panel.querySelector('[data-sec-tilt-level]').addEventListener('click', () => { if (cut?.cells) { ushape.a.value = ushape.b.value = '0'; setTilt(0, 0); } });
  ushape.planeAdd.addEventListener('click', () => {
    if (!cut?.cells) return;
    const cell = cut.cells[cut.cell];
    if (cell.planes.length >= MAX_PLANES) { status(t('sec.plane.max', { n: MAX_PLANES })); return; }
    // a vertical plane cutting off the box's +X +Y corner, halfway between the centre and the corner
    const half = Math.hypot(cell.box.max[0] - cell.box.min[0], cell.box.max[1] - cell.box.min[1]) / 2;
    cell.planes = [...cell.planes, { az: 45, el: 0, off: Math.round(half * 0.5 * 100) / 100 }];
    applyBox();
    ushape.planes.lastElementChild?.querySelector('input')?.focus();
  });
  ushape.planes.addEventListener('input', (e) => {
    const row = e.target.closest('[data-sec-plane-row]'), k = e.target.dataset.pl;
    if (!row || !k || !cut?.cells) return;
    const v = k === 'off' ? parseLen(e.target.value, getDisplayUnits()) / 1000 : Number(String(e.target.value).replace(',', '.'));
    if (!Number.isFinite(v) || e.target.value.trim() === '') return;
    const cell = cut.cells[cut.cell], i = Number(row.dataset.secPlaneRow);
    cell.planes = cell.planes.map((q, j) => (j === i ? { ...q, [k]: v } : q));
    applyBox();
  });
  ushape.planes.addEventListener('click', (e) => {
    const b = e.target.closest('[data-sec-plane-remove]');
    if (!b || !cut?.cells) return;
    const cell = cut.cells[cut.cell];
    cell.planes = cell.planes.filter((_, j) => j !== Number(b.dataset.secPlaneRemove));
    applyBox();
  });
  ubox.panel.addEventListener('input', (e) => {
    const row = e.target.closest('[data-box-axis]');
    if (!row || !cut || cut.axis !== 'box') return;
    const k = ['x', 'y', 'z'].indexOf(row.dataset.boxAxis);
    const from = Number(row.querySelector('[data-box-from]').value), to = Number(row.querySelector('[data-box-to]').value);
    if (e.target.hasAttribute('data-box-from')) cut.box.min[k] = Math.min(from, to); else cut.box.max[k] = Math.max(from, to);
    applyBox();
  });
  ubox.panel.addEventListener('click', (e) => {
    if (!cut || cut.axis !== 'box') return;
    if (e.target.closest('[data-sec-box-pick]')) boxRoundPick();
    else if (e.target.closest('[data-sec-box-all]')) { cut.box = null; applyBox(); }
  });
  /**
   * Section box round the pick (0.4 B4; 0.5 WL.2: the margin is Settings › BimCraft › Section box, default 300 mm): from the
   * box's own button, the Show menu or Shift+X; turns the section box on when it is off. A volume of several boxes keeps the
   * others: the box being edited goes round the pick.
   */
  function boxRoundPick() {
    if (!viewer || mode !== 'ifc') return;
    if (!viewer.selection.size) { status(t('sec.box.nopick')); return; }
    const b = viewer.boxAround([...viewer.selection], settings.boxMargin / 1000);
    if (!b) return;
    if (!cut) cut = { axis: 'box', offset: null, flip: false };
    cut.axis = 'box';
    cut.box = b;
    applySection();
    viewer.frameKeys([...viewer.selection]);
    status(t('sec.box.picked', { n: viewer.selection.size, margin: settings.boxMargin }));
  }
  // Grips (0.5 WL.2): a face grip moves that face, an edge grip the two faces meeting there, a corner all three; the box
  // being edited follows the pointer (section-volume.js dragDelta → dragBox), the sliders with it.
  let gripDrag = null;
  let hot3d = null;   // { on(phase, i, e) } while a family's hotspot grips are in the 3D view (host.grips3d)
  function onBoxGrip(phase, i, e) {
    if (hot3d && !(cut && cut.axis === 'box')) { hot3d.on(phase, i, e); return; }   // 0.8 BIM-FAM-MORE: a family's hotspots in the 3D view
    if (!cut || cut.axis !== 'box' || !cut.cells) { gripDrag = null; return; }
    if (phase === 'start') { const g = viewer.grips[i]; gripDrag = { g, box: { min: [...cut.box.min], max: [...cut.box.max] } }; return; }
    if (!gripDrag) return;
    const r = viewer.rayIfc(e.clientX, e.clientY), d = dragDelta(r, gripDrag.g.p, gripDrag.g.axes, r.view);
    if (d) { cut.box = dragBox(gripDrag.box, gripDrag.g.faces, d, viewer.sizeIfc()); applyBox(); }
    if (phase === 'end') {
      gripDrag = null;
      const B = cut.box;
      status(t('sec.box.dragged', { x: t('sec.box.val', { from: secBound(B.min[0]), to: secBound(B.max[0]) }), y: t('sec.box.val', { from: secBound(B.min[1]), to: secBound(B.max[1]) }), z: t('sec.box.val', { from: secBound(B.min[2]), to: secBound(B.max[2]) }) }));
    }
  }
  usec.bar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !cut) return;
    if (b.dataset.secAxis) {
      if (b.dataset.secAxis === 'box' && secOnDwg()) { status(t('sec.box.ifc')); return; }
      if (b.dataset.secAxis === 'box') { if (cut.axis !== 'box') { cut.axis = 'box'; applySection(); } return; }
      if (b.dataset.secAxis !== cut.axis) {
        cut.axis = b.dataset.secAxis; cut.offset = null; applySection();
        if (secOnDwg()) view3d.standard(cut.axis === 'top' ? 'iso' : cut.axis === 'side' ? 'right' : 'front');
        else viewer.view(cut.axis === 'top' ? 'iso' : cut.axis);
      }
    }
    else if (b.hasAttribute('data-sec-flip')) { cut.flip = !cut.flip; applySection(); }
    else if (b.hasAttribute('data-sec-fill')) { if (secOnDwg()) { status(t('sec.fill.dwg')); return; } viewer.setCaps(!viewer.capsOn); b.setAttribute('aria-pressed', viewer.capsOn ? 'true' : 'false'); }
    else if (b.hasAttribute('data-sec-off')) sectionOff();
  });
  usec.range.addEventListener('input', () => { if (cut) { cut.offset = Number(usec.range.value); applySection(); } });
  usec.offset.addEventListener('change', () => {
    if (!cut) return;
    const txt = usec.offset.value.trim().replace(',', '.');
    const [, max] = secView().sectionRange(cut.axis);
    let v;
    if (secOnDwg()) {   // drawing units, as the drawing says
      v = Number(txt);
      if (txt === '' || !Number.isFinite(v)) { status(t('sec.dwg.type', { units: secUnit() }), true); usec.offset.value = secText(cut.offset); return; }
    } else {
      v = parseLen(txt, getDisplayUnits()) / 1000;
      if (!Number.isFinite(v)) { status(t('sec.ifc.type'), true); usec.offset.value = secText(cut.offset); return; }
    }
    cut.offset = Math.max(0, Math.min(max, v));
    if (v < 0 || v > max) status(secOnDwg() ? t('sec.dwg.beyond', { size: metres(max), units: secUnit() }) : t(v < 0 ? 'sec.ifc.beyond.start' : 'sec.ifc.beyond.end', { size: secText(max) }));
    usec.offset.value = secText(cut.offset);
    applySection();
  });
  usec.offset.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); usec.offset.dispatchEvent(new Event('change')); } });
  window.bimcraftSection = { get: () => cut, set: (s) => { const was = cut; cut = s ? { axis: 'top', offset: null, flip: false, ...s } : null; if (cut) { if (!was) startCutTurn(); applySection(); } else sectionOff(); } };   // for tests

  // ---- Walk (0.4 B18; viewer3d.js startWalk) ----
  const uw = { bar: $('[data-walkbar]'), out: $('[data-walk-out]'), height: $('[data-walk-height]'), gravity: $('[data-walk-gravity]'), collide: $('[data-walk-collide]') };
  let walking = false;
  // GH.3-A: the eye height is shown and typed in the display unit (bare number = the pick; a unit mark is read as written); the viewer works in metres
  const eyeShow = () => {
    const u = getDisplayUnits(), m = Number(uw.height.dataset.eyeM) || 1.6, lab = uw.height.parentNode, last = lab && lab.lastChild;
    uw.height.value = fmtLen(m * 1000, u);
    if (last && last.nodeType === 3) last.textContent = unitMark(u) ? ' ' + unitMark(u) : '';
  };
  const eyeBad = () => status(t('walk.bad.height.u', { example: lenMark(1600, getDisplayUnits()) }), true);
  const walkOpts = () => {
    const h = parseLen(String(uw.height.value).replace(',', '.'), getDisplayUnits()) / 1000;
    if (h > 0 && h < 10) uw.height.dataset.eyeM = String(h);
    return { height: h, gravity: uw.gravity.checked, collide: uw.collide.checked };
  };
  uw.height.addEventListener('change', () => { walkOpts(); });   // a typed height is kept (in metres) when the unit changes
  eyeShow();
  window.addEventListener('bimcraft-units', eyeShow);
  function walkOn() {
    if (!viewer || mode !== 'ifc') return;
    if (meas) measureOff();
    if (placing) stopPlacing();
    walking = true;
    setPressed('walk', true);
    uw.bar.hidden = false;
    uw.out.textContent = t('walk.pick');
    status(t('walk.pick'));
    viewer.walkPick = (pt) => {
      if (!pt) { status(t('walk.nofloor')); return; }
      const o = walkOpts();
      if (!(o.height > 0 && o.height < 10)) { eyeBad(); return; }
      viewer.walkPick = null;
      viewer.startWalk(pt, o);
      const msg = t(root.classList.contains('is-touch') ? 'walk.on.touch' : 'walk.on');
      uw.out.textContent = msg;
      status(msg);
      ui.canvas.focus?.();
    };
  }
  function walkOff() {
    walking = false;
    if (viewer) { viewer.walkPick = null; viewer.stopWalk(); }
    uw.bar.hidden = true;
    setPressed('walk', false);
  }
  uw.bar.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') e.target.blur();   // the walking keys go on working after a tick
    if (!viewer?.walk) return;
    const o = walkOpts();
    if (!(o.height > 0 && o.height < 10)) { eyeBad(); return; }
    const old = viewer.walk.o.height;
    Object.assign(viewer.walk.o, o);
    viewer.walk.pos.y += o.height - old;
    viewer.settle();
    viewer.applyWalk();
  });
  uw.bar.querySelector('[data-walk-done]').addEventListener('click', () => { walkOff(); status(t('walk.off')); });
  // the on-screen walk pad (touch screens): held = the key held
  for (const b of uw.bar.querySelectorAll('[data-walk-key]')) {
    const k = b.dataset.walkKey;
    const off = () => viewer?.walkKey(k, false);
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); b.setPointerCapture?.(e.pointerId); viewer?.walkKey(k, true); });
    b.addEventListener('pointerup', off);
    b.addEventListener('pointercancel', off);
    b.addEventListener('lostpointercapture', off);
    b.addEventListener('contextmenu', (e) => e.preventDefault());   // a long press on a pad button is not a right-click
  }
  window.bimcraftWalk = { on: walkOn, off: walkOff, state: () => viewer?.walk && { pos: viewer.walk.pos.toArray(), o: { ...viewer.walk.o } } };   // for tests

  // ---- Measure (0.4 B6) ----
  const um = { bar: $('[data-measurebar]'), out: $('[data-measure-out]'), labels: $('[data-measure-labels]'), copy: $('[data-measure-copy]') };
  let measOrtho = false, measShift = false;   // GH.3-C: orthogonal measuring: the bar's toggle, and Shift held
  let meas = null;   // { mode: 'distance' | 'area' | 'point', a: point | null, items: [{ kind, a, b, tris, center, text, geo }], hover }
  const m3 = (v) => fmtLength(v);
  const measurementText = (it) => it.kind === 'distance'
    ? t('measure.result.distance', { d: fmtLength(it.value), dx: m3(it.delta[0]), dy: m3(it.delta[1]), dz: m3(it.delta[2]) })
    : it.kind === 'area' ? t('measure.result.area', { a: fmtArea(it.value) }) : it.text;
  window.addEventListener('bimcraft-units', () => {
    if (cut) applySection();
    coordsUi?.render();
    if (mode === 'ifc' && selected !== null && selected !== undefined && selInfo) showProps(selected);   // GH.3-A: Properties in the new unit
    syncPlaceUnits?.();
    if (!meas) return;
    for (const it of meas.items) it.text = measurementText(it);
    syncMeasureBar(); redrawMeasure();
  });
  function measureOn(kind = 'distance') {
    paintUi?.close();   // 0.5 RC.7: Measure and Paint both take the 3D view's clicks
    if (!viewer || (mode !== 'ifc' && !pc?.has())) return;
    if (placing) stopPlacing();
    meas = { mode: kind, a: null, items: [], hover: null };
    viewer.measuring = { move: (x, y) => { meas.hover = measureHit(x, y); redrawMeasure(); }, click: (x, y) => measureClick(x, y) };
    ui.canvasWrap.classList.add('is-measuring');
    um.bar.hidden = false;
    syncMeasureBar();
    setPressed('measure', true);
    status(t('measure.start'));
  }
  function measureOff() {
    meas = null;
    if (viewer) { viewer.measuring = null; viewer.setMeasureOverlay(null); }
    ui.canvasWrap.classList.remove('is-measuring');
    um.labels.replaceChildren();
    um.bar.hidden = true;
    setPressed('measure', false);
  }
  function syncMeasureBar() {
    um.bar.querySelector('[data-measure-ortho]')?.setAttribute('aria-pressed', String(measOrtho));
    um.bar.querySelectorAll('[data-measure-mode]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.measureMode === meas.mode ? 'true' : 'false'));
    const last = meas.items[meas.items.length - 1];
    um.out.textContent = last ? (last.lines ? last.lines.join('\n') : last.text) : '';
    um.out.classList.toggle('is-lines', !!last?.lines);
    um.copy.hidden = !(last && last.kind === 'point' && last.geo);
  }
  function measureClick(x, y) {
    const h = measureHit(x, y);
    if (!h) { status(t('measure.nothing')); return; }
    if (meas.mode === 'point') { guard(() => (h.snap === 'cloud' && (!models.length || h.key === null) ? locateCloudPoint(h) : locatePoint(h))); return; }
    if (meas.mode === 'area') {
      if (!h.face || !h.face.tris.length) { status(t('measure.nothing')); return; }
      const T = h.face.tris, c = [0, 0, 0];
      for (let i = 0; i < T.length; i += 3) for (let k = 0; k < 3; k++) c[k] += T[i + k] / (T.length / 3);
      const it = { kind: 'area', tris: T, center: c, value: h.face.area }; it.text = measurementText(it); meas.items.push(it);
    } else if (!meas.a) { meas.a = h.point; status(t('measure.second')); }
    else {
      const a = meas.a, b = h.point, d = ifcDelta(a, b);
      const it = { kind: 'distance', a, b, value: distance(a, b), delta: d }; it.text = measurementText(it); meas.items.push(it);
      meas.a = null;
      status('');
    }
    syncMeasureBar();
    redrawMeasure();
  }
  function measureHit(x, y) {
    const h = viewer.measureAt(x, y);
    if (!h || !meas?.a || meas.mode !== 'distance' || h.snap === 'vertex') return h;
    if (measOrtho || measShift) {   // GH.3-C: held orthogonal (toggle or Shift): the nearest axis; the horizontal two only when looking straight down
      const dir = viewer.camera.position.clone().sub(viewer.controls.target);
      const o = orthoPoint(meas.a, h.point, Math.abs(dir.y) > 0.98 * dir.length());
      return o.point[0] === h.point[0] && o.point[1] === h.point[1] && o.point[2] === h.point[2] ? { ...h, snap: 'ortho' } : { ...h, point: o.point, snap: 'ortho' };
    }
    const point = axisSnap(meas.a, h.point, [x, y], (p) => { const q = viewer.project(p); return q ? [q.x, q.y] : null; });
    return point === h.point ? h : { ...h, point, snap: 'axis' };
  }
  // GH.3-C: Shift held = orthogonal for as long as it is held (read from the keys and from every pointer event, so a click with Shift counts)
  const shiftNow = (v) => { if (v === measShift) return; measShift = v; if (meas?.a) { meas.hover = measureHit(meas.lastX ?? 0, meas.lastY ?? 0) || meas.hover; redrawMeasure(); } };
  window.addEventListener('keydown', (e) => { if (e.key === 'Shift') shiftNow(true); });
  window.addEventListener('keyup', (e) => { if (e.key === 'Shift') shiftNow(false); });
  window.addEventListener('blur', () => shiftNow(false));
  ui.canvasWrap.addEventListener('pointermove', (e) => { if (meas) { meas.lastX = e.clientX; meas.lastY = e.clientY; } shiftNow(e.shiftKey); }, true);
  ui.canvasWrap.addEventListener('pointerdown', (e) => { shiftNow(e.shiftKey); }, true);
  function redrawMeasure() {
    if (!meas) return;
    const lines = [], points = [], faces = [];
    for (const it of meas.items) {
      if (it.kind === 'distance') { lines.push([it.a, it.b]); points.push(it.a, it.b); } else if (it.kind === 'point') points.push(it.a); else faces.push(it.tris);
    }
    const h = meas.hover;
    if (meas.a) { points.push(meas.a); if (h) lines.push([meas.a, h.point]); }
    if (meas.mode === 'area' && h?.face?.tris.length) faces.push(h.face.tris);
    viewer.setMeasureOverlay({ lines, points, faces, hover: h && meas.mode !== 'area' ? h : null });
    placeMeasureLabels();
  }
  /** Each measurement's value beside it (distances at the middle, areas at the face's centre), redrawn with the camera. */
  function placeMeasureLabels() {
    if (!meas || !viewer) return;
    const wrap = ui.canvasWrap.getBoundingClientRect();
    const tags = [];
    meas.items.forEach((it, i) => {
      const at = it.kind === 'distance' ? it.a.map((v, k) => (v + it.b[k]) / 2) : it.kind === 'point' ? it.a : it.center;
      const p = viewer.project(at);
      if (!p) return;
      tags.push(el('span', { className: 'bc-measure-label', 'data-measure-label': String(i), style: 'left:' + (p.x - wrap.left).toFixed(1) + 'px;top:' + (p.y - wrap.top).toFixed(1) + 'px' }, it.kind === 'distance' ? fmtLength(it.value) : it.kind === 'point' ? it.label : fmtArea(it.value)));
    });
    const h = meas.hover;
    if (h && meas.mode !== 'area') {
      const p = viewer.project(h.point);
      if (p) tags.push(el('span', { className: 'bc-measure-label', style: 'left:' + (p.x - wrap.left).toFixed(1) + 'px;top:' + (p.y - wrap.top).toFixed(1) + 'px;opacity:.75' }, t('measure.snap.' + h.snap)));
    }
    um.labels.replaceChildren(...tags);
  }
  // ---- Location (0.5 WL.4; ifc-geo.js + the crs.js copy): where a picked point is on the earth. The point goes back to
  // its model's own file coordinates (each federated model has its own georeference), then through IfcMapConversion to
  // the map grid of its IfcProjectedCRS and on to latitude / longitude in Settings › BimCraft › Location's system; with
  // no map conversion, from IfcSite's latitude / longitude (approximate). crs.js and its catalog load on the first use.
  let crsLib = null, pickLib = null;
  let geoCache = new WeakMap();   // model entry → readGeoref result (null = none); 0.8 D8.9 replaces it when the model's system changes
  const fx = (v, n) => (Math.round(v * 10 ** n) / 10 ** n).toFixed(n);
  const OWN_UNIT = { m: 'terrain.unit.m', ft: 'terrain.unit.ft', 'us-ft': 'terrain.unit.ftus' };
  const ownNote = (unitId) => { const id = crsUnitNote(getDisplayUnits(), unitId); return id ? ' (' + t(OWN_UNIT[id]) + ')' : ''; };   // GH.3-A: the CRS's own unit when it differs from the pick
  const gu = (m) => fmtCoord(m * 1000, getDisplayUnits());   // GH.3-A: a map grid value or height (metres in) in the person's display unit, with its unit
  async function locatePoint(h) {
    const ent = entryOf(h.key) || cur();
    if (!geoCache.has(ent)) geoCache.set(ent, readGeoref(ent.ifc.api, ent.model.modelID));
    const g = geoCache.get(ent);
    if (!g) { status(t('geo.none', { file: ent.name }), true); return; }
    const C = [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)];
    const p = viewerToFile(h.point, viewer.modelMatrix(ent.mi), C, g.fileUnitM);
    const rows = [];
    let lonlat = null, sysName = '', note = '', gridRow = '';
    if (g.kind === 'map') {
      const [E, N, H] = fileToMap(g, p);
      crsLib ||= await import('./crs.js');
      if (!crsLib.catalogLoaded()) await crsLib.loadCatalog();
      pickLib ||= await import('./crs-pick.js');
      // 0.8 D8.9: the system the person chose for the model (saved in it) wins; else the EPSG code the file names
      const ms = pickLib.modelSystem(g.crs);
      const crsLabel = (ms && ms.source === 'model' ? ms.crs.name : g.crs.name) + (!ms && g.crs.description && g.crs.description !== g.crs.name ? ' (' + g.crs.description + ')' : '');
      rows.push(t('geo.grid.u', { e: gu(E), n: gu(N), crs: crsLabel }) + ownNote(ms ? ms.crs.unit : (Math.abs((g.mapUnitM || 1) - 0.3048) < 1e-9 ? 'ft' : Math.abs((g.mapUnitM || 1) - 1200 / 3937) < 1e-9 ? 'ftUS' : 'm')));
      rows.push(t('geo.height.u', { h: gu(H), datum: g.crs.verticalDatum || t('geo.datum.unstated') }));
      const entry = ms ? ms.crs : null;
      if (!entry || entry.unit === 'deg') note = t(g.crs.code ? 'geo.crs.unknown' : 'geo.crs.nocode', { crs: g.crs.name });
      else {
        const per = crsLib.METRES_PER[entry.unit] || 1;
        const own = settings.geoCrs === 'file', pick = own ? null : pickLib.systemFor(settings.geoCrs);
        const targetGrid = pick && pick.unit !== 'deg';   // a projected system asked for: lat/long in WGS 84 and the grid of that system besides
        const target = own ? datumOf(entry.proj4) : targetGrid || settings.geoCrs === '4326' ? null : pick;
        const shiftTo = ms.entry?.shiftAccuracy;
        lonlat = crsLib.transformer(entry, target)(E / per, N / per);
        sysName = own ? t('geo.sys.file', { datum: g.crs.geodeticDatum || entry.name.split(' / ')[0] }) : !target ? 'WGS 84' : (target.name || 'WGS 84');   // i18n-ignore: the system's own name
        if (!own && shiftTo) note = t('geo.shift', { m: shiftTo, datum: g.crs.geodeticDatum || entry.name.split(' / ')[0] });
        if (targetGrid) { const [te, tn] = crsLib.transformer(entry, pick)(E / per, N / per); gridRow = t('geo.target.grid', { e: gu(te * (crsLib.METRES_PER[pick.unit] || 1)), n: gu(tn * (crsLib.METRES_PER[pick.unit] || 1)), sys: pick.name }); }
      }
      rows.push(t('geo.datum', { datum: g.crs.geodeticDatum || t('geo.datum.unstated') }));
      if (gridRow) rows.push(gridRow);
    } else {
      const [lon, lat, hh] = siteLonLat(g, p);
      lonlat = [lon, lat];
      sysName = t('geo.sys.site');
      rows.push(t('geo.height.site.u', { h: gu(hh) }));
      note = t('geo.site.note');
    }
    let label = rows[0];
    if (lonlat) {
      const [lon, lat] = lonlat;
      rows.unshift(t('geo.latlon', { lat: fx(lat, 8), lon: fx(lon, 8), sys: sysName }), dms(lat, 'lat') + ', ' + dms(lon, 'lon'));
      label = fx(lat, 6) + ', ' + fx(lon, 6);
    }
    // the bar shows three lines (lat/long, the map grid, height and datum); Copy and the tests get one line
    const lines = lonlat ? [rows[0] + ' · ' + rows[1], rows[2], rows.slice(3).join(' · ')] : [rows[0], rows.slice(1).join(' · ')];
    meas.items.push({ kind: 'point', a: h.point, label, text: rows.join(' · '), lines: lines.filter(Boolean), geo: { lonlat, text: rows.join(' · ') } });
    syncMeasureBar();
    redrawMeasure();
    status(note || t('geo.done'), false, !note);
  }
  // ---- Render a picture (0.5 RC.11, session render): the shared renderer in render/ (a copy of ModelCraft's) through
  // render-bim.js, both imported on first use. The settings and looks are this browser's (localStorage "bimcraft.render").
  /** The Render dialog's scene and settings (shared with the assistant's render_still / render_queue, 0.7 AS.6 render-tools.js). */
  async function renderHooks() {
    const [R, PB] = await Promise.all([import('./render-bim.js'), import('./paint-bim.js')]);
    // painted elements (RC.7): each model's CadCraft_Render sets, read when a render starts
    const lampModels = () => models.filter((m) => m.visible !== false).map((m) => ({ mi: m.mi, api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0 }));
    const paints = () => new Map(models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const ent = cur();
    const site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null;
    const base = R.bimSunBase(site);
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { saved = null; }
    const scene = (st) => ({ ...R.bimScene(viewer, st, R.bimSun(site, st, ent ? viewer.modelMatrix(ent.mi) : null), paints()), lights: R.bimLamps(viewer, lampModels()).filter((L) => L.on) });
    return { R, lampModels, site, base, saved, scene };
  }
  async function openRender() {
    if (!viewer || mode !== 'ifc' || viewer.box.isEmpty()) { status(t('ui.render.none'), true); return; }
    modelUi?.need3d();   // 0.6 BIM-F5: the picture is of the 3D view
    const [{ openRenderDialog }, H] = await Promise.all([import('./render/render-ui.js'), renderHooks()]);
    const { R, lampModels, site, base, saved } = H;
    openRenderDialog({
      scene: H.scene,
      handoff: async (s, z) => { const { bimHandoff } = await import('./handoff-bim.js'); return bimHandoff({ scene: H.scene, entries: models, matrixOf: (mi) => viewer.modelMatrix(mi), name: ifcName || 'model.ifc', glb: async () => ({ lamps: R.bimLamps(viewer, lampModels()), site, names: glbNames() }) })(s, z); },   // 0.8 RE.2 + RE.6 (engines): hand-off package for outside engines
      lamps: () => R.bimLamps(viewer, lampModels()),
      setLamp: (key, patch) => {   // one undo step in the fixture's own model (its CadCraft_Light set)
        const e = entryOf(key);
        if (!e || !e.editor) return;
        try { e.editor.modelChange(R.lampOp(key - (e.model.keyBase || 0), patch), { label: nameOfKey(key), verb: t('render.lamps') }); renderChanges(); } catch (err) { status(String(err.message || err), true); }
      },
      viewSize: () => ({ w: ui.canvas.clientWidth, h: ui.canvas.clientHeight }),
      colors: () => R.bimColors(viewer),
      modelSun: () => ({ month: base.month, day: base.day, hour: base.hour, src: site ? 'site' : 'assumed', lat: base.lat }),
      settings: saved,
      save: (st) => { try { localStorage.setItem('bimcraft.render', JSON.stringify(st)); } catch { /* private window: this dialog only */ } },
      download: (blob, name) => fileHost.download(blob, name, 'image/png'),
      fileBase: () => (ifcName || 'model').replace(/\.ifc$/i, ''),
      parent: root,
      onClose: () => viewer.render(),
    });
  }
  // ---- Live view (0.7 RT.3, session realtime): the model in the real-time look beside the 3D view (rt/ is a copy of ModelCraft's,
  // tools/rt/sync.mjs; BimCraft's adapter rt/rt-bim.js); the same scene, paints, lamps and sun as Render ----
  let liveView = null;
  async function openLive(win = false) {
    if (!viewer || mode !== 'ifc' || viewer.box.isEmpty()) { status(t('ui.render.none'), true); return; }
    modelUi?.need3d();
    const [{ openLiveView }, { bimLive }, R, PB, { pagePool }] = await Promise.all([import('./rt/rt-view.js'), import('./rt/rt-bim.js'), import('./render-bim.js'), import('./paint-bim.js'), import('./compute/runtime.js')]);
    const lampModels = () => models.filter((m) => m.visible !== false).map((m) => ({ mi: m.mi, api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0 }));
    const paints = () => new Map(models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const ent = cur();
    const site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null, base = R.bimSunBase(site);
    const place = () => (ent ? viewer.modelMatrix(ent.mi) : null);
    const saved = () => { try { return JSON.parse(localStorage.getItem('bimcraft.render') || 'null') || {}; } catch { return {}; } };
    liveView?.close();
    liveView = await openLiveView(bimLive({
      viewer,
      scene: (st) => ({ ...R.bimScene(viewer, st, R.bimSun(site, st, place()), paints()), lights: R.bimLamps(viewer, lampModels()).filter((L) => L.on) }),
      sun: (st) => R.bimSun(site, st, place()),
      sunBase: () => ({ month: base.month, day: base.day, hour: base.hour }),
      settings: saved,
    }), { t, parent: root, pool: await pagePool({}), window: win });
  }
  window.bimcraftRt = { open: openLive, get view() { return liveView; } };   // for tests
  // ---- Model for rendering programs (0.6 DC.22, session bim-extra_PART_2): what the 3D view shows as glTF (.glb) — the render
  // scene (render-bim.js: painted materials, the colours' chosen looks, the lamps that are on) written by glb-bim.js ----
  /** The names the glTF carries (storey / material / colour): Export › glTF and the render hand-off (0.8 RE.6) both use them. */
  function glbNames() {
    const storeyName = (mi, s) => { const e = models.find((m) => m.mi === mi); const st = e?.model?.storeys?.find?.((x) => x.id === s); return st ? String(st.name) : ''; };
    return { storey: storeyName, material: (id) => t('render.mat.' + id), colour: (hex, look) => t('glb.colour', { color: hex, look: t('render.look.' + look) }) };
  }
  async function exportGlb(kind = 'glb') {   // 'gltf' (0.8 DC.22): the same scene as one self-contained .gltf, the form Enscape's asset library lists
    if (!viewer || mode !== 'ifc' || viewer.box.isEmpty()) { status(t('glb.none'), true); return; }
    modelUi?.need3d();
    status(t('glb.making'));
    const [R, PB, G, L] = await Promise.all([import('./render-bim.js'), import('./paint-bim.js'), import('./glb-bim.js'), import('./render/looks.js')]);
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { saved = null; }
    const settings = L.cleanSettings(saved);
    const paints = new Map(models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const lampModels = models.filter((m) => m.visible !== false).map((m) => ({ mi: m.mi, api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0 }));
    const ent = cur(), site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null;
    const scene = R.bimScene(viewer, settings, null, paints);
    try {
      const { bytes, stats } = await G.sceneGlb(scene, {
        settings, lamps: R.bimLamps(viewer, lampModels), site,
        names: glbNames(),
      });
      const base = (ifcName || 'model').replace(/\.ifc$/i, '');
      if (kind === 'gltf') {
        const text = G.glbToGltf(bytes);
        fileHost.download(new Blob([text], { type: 'model/gltf+json' }), base + '.gltf', 'model/gltf+json');
        status(t('gltf.done', { tris: stats.triangles.toLocaleString(), mats: stats.materials, lamps: stats.lights }));
        return;
      }
      fileHost.download(new Blob([bytes], { type: 'model/gltf-binary' }), base + '.glb', 'model/gltf-binary');
      status(t('glb.done', { tris: stats.triangles.toLocaleString(), mats: stats.materials, lamps: stats.lights }));
    } catch (err) { status(t('glb.failed', { why: String(err.message || err) }), true); }
    finally { scene.dispose(); }
  }
  // ---- Export › USD (0.7 XF.8, session usd): the open models by docs/USD-CONVENTIONS.md — usd-bimcraft.js on cc-usd (./usd/) ----
  /** The open models as OpenUSD bytes (the menu and the assistants' usd_export both call this). */
  async function makeUsd(format, progress) {
    const { bimUsd } = await import('./usd-bimcraft.js');
    const base = (ifcName || 'model').replace(/\.ifc$/i, '');
    const { data, report } = await bimUsd(models, { format, name: ifcName || 'model.ifc', matrixOf: (mi) => viewer.modelMatrix(mi), progress });
    const type = format === 'usda' ? 'model/vnd.usda' : format === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream';
    return { data, report, base, type };
  }
  async function exportUsd() {
    if (!viewer || mode !== 'ifc' || !models.length) { status(t('usd.export.none'), true); return; }
    const format = await new Promise((done) => {
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-labelledby': 'bc-usd-h' },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h', id: 'bc-usd-h' }, t('usd.dialog.title')),
          el('p', {}, t('usd.export.lede')),
          el('p', { className: 'bc-lib-actions' },
            ...['usda', 'usdc', 'usdz'].map((f, k) => el('button', { type: 'submit', className: (k === 2 ? 'btn-plot' : 'btn-line') + ' btn-sm-cc', value: f, ['data-usd-' + f]: '' }, t('usd.dialog.format.' + f))),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('dialog.cancel')))));
      dlg.addEventListener('close', () => { dlg.remove(); done(['usda', 'usdc', 'usdz'].includes(dlg.returnValue) ? dlg.returnValue : null); });
      document.body.append(dlg);
      dlg.showModal();
    });
    if (!format) return;
    status(t('usd.export.making'));
    try {
      const { data, report, base, type } = await makeUsd(format, (d, n) => status(t('usd.export.progress', { done: d, total: n })));
      fileHost.download(new Blob([data], { type }), base + '.' + format, type);
      status(t('usd.done', { name: base + '.' + format, n: report.elements }));
    } catch (err) { status(t('usd.export.failed', { why: String(err.message || err) }), true); }
  }
  // ---- Review in VR (0.6 LC.19, session lc-model): the shared xr/ (a copy of ModelCraft's, tools/xr/sync.mjs) on the same scene
  // as Render (render-bim.js). Issues placed in the headset join the Issues tab as BCF topics (the model's own coordinates). ----
  const xrBtn = root.querySelector('[data-xr-enter]');
  let xrOn = null, xrWhy = 'none';
  (navigator.xr ? navigator.xr.isSessionSupported('immersive-vr').catch(() => false) : Promise.resolve(false)).then((yes) => {
    xrWhy = yes ? null : navigator.xr ? 'unsupported' : window.isSecureContext === false ? 'insecure' : 'none';
    xrBtn?.setAttribute('aria-disabled', String(!yes));
    if (xrBtn) xrBtn.title = yes ? t('ui.vr.title') : t('xr.why.' + xrWhy);
  });
  const xrLayers = new WeakMap();
  let xrNext = 1;
  /** Changes when a model is loaded again (an edit, someone's in a live session): the headset then rebuilds its copy. */
  const xrVersion = () => { if (!viewer) return -1; let v = 0; for (const L of viewer.layers.values()) { if (!xrLayers.has(L)) xrLayers.set(L, xrNext++); v = v * 31 + xrLayers.get(L); } return v; };
  async function openVr() {
    if (xrOn) return;
    if (xrWhy) { status(t('xr.why.' + xrWhy), true); return; }
    if (!viewer || mode !== 'ifc' || viewer.box.isEmpty()) { status(t('ui.render.none'), true); return; }
    modelUi?.need3d();
    const [X, R, PB, L] = await Promise.all([import('./xr/xr-session.js'), import('./render-bim.js'), import('./paint-bim.js'), import('./render/looks.js')]);
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { saved = null; }
    const settings = L.cleanSettings(saved);
    const ent = cur(), site = ent ? R.bimSite(ent.ifc.api, ent.model.modelID) : null;
    const paints = () => new Map(models.map((m) => [m.mi, { paint: PB.readPaint(m.ifc.api, m.model.modelID), api: m.ifc.api, mid: m.model.modelID, keyBase: m.model.keyBase || 0, C: [...m.ifc.api.GetCoordinationMatrix(m.model.modelID)] }]));
    const live = globalThis.bimcraftLive?.live;
    const cam = viewer.camera, tgt = viewer.controls.target;
    try {
      xrOn = await X.startXR({
        scene: () => R.bimScene(viewer, settings, R.bimSun(site, settings, ent ? viewer.modelMatrix(ent.mi) : null), paints()),
        version: xrVersion,
        appCamera: () => ({ eye: cam.position.toArray(), target: tgt.toArray() }),
        format: (m) => fmtLength(m),
        settings,
        addIssue: (x) => {   // the camera and point arrive in the viewer's space: to the model's own (BCF) coordinates
          const C = frameC(), now = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
          const vp = { guid: newGuid(), camera: { kind: 'perspective', viewPoint: toIfcPoint(C, x.camera.viewPoint), direction: toIfcDir(C, x.camera.direction), up: toIfcDir(C, x.camera.up), fov: x.camera.fov },
            selection: [], visibility: { defaultVisible: true, exceptions: [] }, clipping: [], snapshot: x.snapshot };
          issues.push({ guid: newGuid(), title: x.title, status: 'Open', type: 'Issue', author: authorOf() || 'BimCraft', created: now, description: x.description, comments: [], viewpoints: [vp] });   // i18n-ignore: BCF values
          renderIssues();
        },
        presence: live ? { send: (p) => live.setPresence(p), peers: () => live.peers(), nameOf: (c) => live.nameOf(c) } : null,
        onExit: (pose) => {
          xrOn = null;
          if (pose) { cam.position.set(...pose.eye); tgt.set(...pose.target); viewer.controls.update(); viewer.render(); }
          status(t('xr.ended'), false, true);
        },
      });
      window.bimcraftXr = xrOn;   // the running session (tests read its state())
      status(t('xr.started'));
    } catch (e) {
      xrOn = null;
      status(t('xr.failed', { error: String(e?.message || e) }), true);
    }
  }
  // ---- Paint materials (0.5 RC.7, session render): paint-ui-bim.js + paint-bim.js + the library in render/, imported on
  // first use. Painting writes the active model (one undo step each), then it reloads so the colour shows. ----
  let paintUi = null;
  async function openPaint() {
    if (!viewer || mode !== 'ifc' || viewer.box.isEmpty() || !editor) { status(t('paint.nomodel'), true); return; }
    if (!paintUi) {
      const { mountPaint } = await import('./paint-ui-bim.js');
      paintUi = mountPaint({
        root, parent: ui.canvasWrap,
        viewer: () => viewer,
        target: (key) => { const ent = entryOf(key); if (!ent || ent !== cur() || !editor) return null; return { editor, id: key - (ent.model.keyBase || 0), C: [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], P: viewer.modelMatrix(ent.mi) }; },
        selection: () => [...viewer.selection],
        nameOfKey,
        rebuild: (key) => rebuild(key),
        afterEdit: () => renderChanges(),
        status: (text, isError, fade) => status(text, isError, fade),
        beforeOpen: () => { if (meas) measureOff(); },
        liveTextures: { isOn: () => (liveTex ? liveTex.isOn() : true), set: (v) => liveTex?.on(v) },   // 0.8 RENDER-NEXT
        photo: {   // 0.8 EG.62: a photo → a tiling material of the file (colour tile kept in the IFC; roughness and relief worked out from it)
          make: async (file, { size }) => {
            if (!/^image\/(png|jpeg|webp)$/.test(file.type) || file.size > 32 * 1048576) throw new Error(t('paint.photo.type'));
            const { decodePhoto } = await import('./photo-material.js');
            const photo = await decodePhoto(file.type, new Uint8Array(await file.arrayBuffer()));
            const have = photoMat.readRecords(editor.api, editor.mid).records;
            if (have.length >= photoMat.MAX_MATERIALS) throw new Error(t('paint.photo.many', { n: photoMat.MAX_MATERIALS }));
            const name = file.name.replace(/\.[a-z0-9]+$/i, '').replace(/[_\-.]+/g, ' ').trim() || t('paint.photo.default_name');
            const made = photoMat.makeFromPhoto(photo, { name, size });
            photoMat.remember(made.record, made.maps.color);
            editor.modelChange(photoMat.writeOp([...have, made.record]), { label: made.record.name, verb: t('paint.photo.verb') });
            await photoMat.refresh(models.map((m) => ({ api: m.ifc.api, mid: m.model.modelID })));
            renderChanges();
            return { id: made.record.id, name: made.record.name, size: made.record.size, seam: made.stats.seam };
          },
          remove: async (id) => {
            const used = [...paintLib.readPaint(editor.api, editor.mid).values()].filter((p) => p.all === id || Object.values(p.sides).includes(id)).length;
            if (used) throw new Error(t('paint.photo.in_use', { n: used }));
            const have = photoMat.readRecords(editor.api, editor.mid).records, gone = have.find((r) => r.id === id);
            if (!gone) throw new Error(t('paint.photo.missing'));
            editor.modelChange(photoMat.writeOp(have.filter((r) => r.id !== id)), { label: gone.name, verb: t('paint.photo.removed_verb') });
            await photoMat.refresh(models.map((m) => ({ api: m.ifc.api, mid: m.model.modelID })));
            renderChanges();
            return gone.name;
          },
        },
        onClose: () => { setPressed('paint', false, 'paint-open'); },
      });
    }
    if (paintUi.isOpen()) { paintUi.close(); return; }
    modelUi?.need3d();   // 0.6 BIM-F5: the palette sits over the 3D view, so the plan-only layout shows it beside the plan
    paintUi.open();
    setPressed('paint', true, 'paint-open');
  }
  // ---- Views (0.5 RC.7, session render): saved cameras and walkthroughs in the IFC (views-ui-bim.js + views-bim.js) ----
  // 0.8 WALK: a saved walkthrough as a rendered video, frame by frame, in the shared Render video dialog (render/video-ui.js, the one ModelCraft uses).
  // The camera of frame i is the walk's eye and direction at that second (views-bim.js viewAt), in the 3D view's own coordinates.
  async function renderWalkVideo(walk) {
    if (!viewer || mode !== 'ifc' || viewer.box.isEmpty() || !walk || !walk.pts || walk.pts.length < 2) { status(t('ui.render.none'), true); return; }
    modelUi?.need3d();
    const [{ openVideoDialog }, { viewAt }, H] = await Promise.all([import('./render/video-ui.js'), import('./views-bim.js'), renderHooks()]);
    const C = frameC(), end = walk.pts[walk.pts.length - 1].t;
    openVideoDialog({
      scene: (st) => {
        const sc = H.scene(st);
        sc.frameAt = (sec) => ({
          camera(aspect) {
            const at = viewAt(walk, sec), pos = fromIfcPoint(C, at.pos), dir = fromIfcDir(C, at.dir), c = viewer.camera.clone();
            c.position.set(pos[0], pos[1], pos[2]); c.up.set(0, 1, 0); c.lookAt(pos[0] + dir[0], pos[1] + dir[1], pos[2] + dir[2]);
            if (c.isPerspectiveCamera) c.aspect = aspect;
            c.updateProjectionMatrix(); c.updateMatrixWorld(true);
            return { world: c.matrixWorld.elements.slice(), proj: c.projectionMatrix.elements.slice() };
          },
        });
        return sc;
      },
      length: () => end,
      fps: 30,
      viewSize: () => ({ w: ui.canvas.clientWidth, h: ui.canvas.clientHeight }),
      settings: H.saved,
      video: null,
      saveVideo: () => {},
      download: (blob, name) => fileHost.download(blob, name, blob.type),
      fileBase: () => (ifcName || 'model').replace(/\.ifc$/i, '') + ' ' + walk.name,
      parent: root,
      onClose: () => viewer.render(),
    });
  }
  let viewsUi = null;
  async function openViews() {
    if (!viewer || mode !== 'ifc' || viewer.box.isEmpty() || !editor) { status(t('views.nomodel'), true); return; }
    if (!viewsUi) {
      const { mountViews } = await import('./views-ui-bim.js');
      viewsUi = mountViews({
        root, parent: ui.canvasWrap,
        viewer: () => viewer,
        editor: () => (mode === 'ifc' ? editor : null),
        frameC,
        stopWalk: () => { if (walking) walkOff(); },
        status: (text, isError, fade) => status(text, isError, fade),
        afterEdit: () => renderChanges(),
        renderWalk: (walk) => renderWalkVideo(walk),   // 0.8 WALK
        onClose: () => setPressed('views', false, 'saved-views'),
      });
    }
    if (viewsUi.isOpen()) { viewsUi.close(); return; }
    modelUi?.need3d();   // 0.6 BIM-F5: views are cameras of the 3D view
    viewsUi.open();
    setPressed('views', true, 'saved-views');
  }
  // ---- Point clouds (0.5 SG.1; cloud-ui.js, pointcloud.js, pointcloud-three.js — imported on the first cloud) ----
  // A cloud joins the 3D view beside the model (or on its own): it is not a document, so it never asks about unsaved
  // edits and a new model keeps it. Measure snaps to its points; Location reads a cloud point through the cloud's own system.
  ui.cloudInput = $('[data-cloud-input]');
  ui.cloudInput.accept = CLOUD_ACCEPT;   // 0.6 PF: every cloud format pointcloud.js reads
  ui.cloudInput.addEventListener('change', () => { const f = ui.cloudInput.files[0]; ui.cloudInput.value = ''; if (f) guard(() => openCloud(f)); });
  async function openCloud(file) {
    if (!pc) {
      const { installClouds } = await import('./cloud-ui.js');
      pc = installClouds({ root, viewer: () => viewer, ensureViewer: () => { const away = ui.toolbar.hidden || ui.canvasWrap.hidden; const v = ensureViewer(); if (away) showStage('ifc'); return v; },
        models: () => models.filter((m) => m.visible !== false), status, frame, guard, sendHandoff, cloudShown: cloudPressed,
        cloudChanged: () => { scanUi?.changed(); syncScanProg(); } });   // 0.6 DF.22: the plan's slice is cut again (cloud-ui.js calls it when the cloud is placed, adjusted or closed)
      window.bimcraftCloud = pc;   // for tests and the console
    }
    await pc.open(file);
    viewer.cloudSnap = (x, y) => pc.snap(x, y);
    scanUi?.changed();   // 0.6 DF.22
    syncScanProg();
  }
  // ---- Register scans (0.7 LC.3, session scans; register-ui.js — imported on first use): several scans in one frame, ICP, LAS / E57 out.
  // "Show registered cloud" hands the registered LAS to openCloud, so it joins the 3D view like any cloud.
  let registerUi = null;
  root.querySelectorAll('[data-cloud-register]').forEach((b) => b.addEventListener('click', () => { b.closest('details')?.removeAttribute('open'); guard(openRegister); }));   // the start panel's button and the Show menu's
  async function openRegister() {
    if (!registerUi) {
      const { installRegister } = await import('./register-ui.js');
      registerUi = installRegister({ root, status, openRegistered: (file) => openCloud(file) });
      window.bimcraftRegister = registerUi;   // for tests and the console
    }
    registerUi.open();
  }
  // ---- Map layers on the ground (0.5 SG.3; maps-bim.js + the shared maplayers.js, imported on first use) ----
  let bimMapsLoading = null;
  const hasSavedMaps = () => { try { return (JSON.parse(localStorage.getItem('bimcraft.maps') || '{}')?.layers || []).length > 0; } catch { return false; } };
  function ensureMaps() {
    return (bimMapsLoading ||= import('./maps-bim.js').then((m) => m.installBimMaps({
      root, attrib: ui.canvasWrap, viewer: () => viewer, models: () => models.filter((x) => x.visible !== false),
      say: (s) => status(s), busy: (s) => status(s), ask: null, refocus: () => {},
    })).then((m) => { bimMaps = m; window.bimcraftMaps = m; return m; }, (e) => { bimMapsLoading = null; throw e; }));
  }
  const cloudPressed = (on) => ui.toolbar.querySelector('[data-cloud-open]')?.setAttribute('aria-pressed', on ? 'true' : 'false');
  async function locateCloudPoint(h) {
    const g = await pc.locate(h.point);
    if (!g) { status(t('pc.locate.none'), true); return; }
    const text = [t('geo.latlon', { lat: fx(g.lat, 8), lon: fx(g.lon, 8), sys: 'WGS 84' }), dms(g.lat, 'lat') + ', ' + dms(g.lon, 'lon'),   // i18n-ignore: the system's own name
      t('pc.locate.grid.u', { e: gu(g.e * (g.per || 1)), n: gu(g.n * (g.per || 1)), h: gu(g.h * (g.per || 1)), crs: g.crs }) + ownNote(Math.abs((g.per || 1) - 0.3048) < 1e-9 ? 'ft' : Math.abs((g.per || 1) - 1200 / 3937) < 1e-9 ? 'ftUS' : 'm')];
    meas.items.push({ kind: 'point', a: h.point, label: fx(g.lat, 6) + ', ' + fx(g.lon, 6), text: text.join(' · '), lines: [text[0] + ' · ' + text[1], text[2]], geo: { lonlat: [g.lon, g.lat], text: text.join(' · ') } });
    syncMeasureBar();
    redrawMeasure();
    status(t('pc.locate.done'), false, true);
  }
  // ---- Coordinate system of the model (0.8 D8.9, session d89_PART_3): any EPSG system, UTM zone or projection of your own, kept in the
  // model (crs-model.js: CadCraft_CRS on the IfcProject). Measure › Location, the map layers and the point clouds' placement read it. ----
  // The writing side of the georeference dialogs (georef-ui.js, georef-model.js) for one model
  function georefTools(ent) {
    const api = ent.ifc.api, mid = ent.model.modelID;
    const refresh = () => { renderChanges(); geoCache = new WeakMap(); bimMaps?.modelChanged(); pc?.modelChanged?.(); };
    const writeGeoref = async (crs, conv, lonlat, vb, done) => {
      const [Z, GM] = await Promise.all([import('./crs-georef.js'), import('./georef-model.js')]);
      try { ent.editor.modelChange(GM.georefOp({ crs, conv, fields: Z.projectedCrsFields(crs), trueNorth: Z.trueNorth(conv, crs), lonlat }), { label: ent.name, verb: vb }); } catch (err) { status(String(err.message || err), true); return; }
      refresh();
      status(done, false, true);
    };
    const placeOnMap = async (crs, gNow, cancel) => {
      const [{ lengthUnitMm }, GU] = await Promise.all([import('./ifc-util.js'), import('./georef-ui.js')]);
      const v4 = !/^IFC2X3/i.test(api.GetModelSchema(mid));
      let placed = false;
      const dlg = await GU.openOriginDialog({ crs, fileUnitM: lengthUnitMm(api, mid) / 1000, v4, near: gNow?.kind === 'site' ? [gNow.lon, gNow.lat] : null, say: status,
        onApply: async ({ conv, lonlat, problems }) => {
          placed = true;
          GU.sendProblems(problems || []);
          await writeGeoref(crs, conv, lonlat, t('georef.origin.verb'), t(v4 ? 'georef.origin.done' : 'georef.origin.done2x3', { name: crs.name, e: conv.Eastings, n: conv.Northings }));
        } });
      dlg.addEventListener('close', () => { if (!placed) cancel?.(); });
    };
    return { refresh, writeGeoref, placeOnMap };
  }
  async function openModelCrs() {
    const ent = cur();
    if (!ent || mode !== 'ifc') { status(t('geo.pick.model.none'), true); return; }
    const [{ openCrsPicker }, { readModelCrs, crsOp }, P, C, GU] = await Promise.all([import('./crs-pick-ui.js'), import('./crs-model.js'), import('./crs-pick.js'), import('./crs.js'), import('./georef-ui.js')]);
    if (!C.catalogLoaded()) await C.loadCatalog();
    const api = ent.ifc.api, mid = ent.model.modelID;
    const g = readGeoref(api, mid);
    const rec = P.fromRecord(readModelCrs(api, mid));
    const current = rec ? t('geo.pick.current', { name: rec.name + (rec.code ? ' (EPSG:' + rec.code + ')' : '') }) : g?.kind === 'map' ? t('geo.pick.current.file', { crs: g.crs.name }) : t('geo.pick.current.none');
    const verb = t('geo.pick.verb');
    const { refresh, writeGeoref, placeOnMap } = georefTools(ent);
    const apply = (crs) => {
      if (!ent.editor) return;
      try { ent.editor.modelChange(crsOp(crs), { label: ent.name, verb }); } catch (err) { status(String(err.message || err), true); return; }
      refresh();
      status(crs ? t('geo.pick.model.set', { name: crs.name }) : t('geo.pick.model.cleared'), false, true);
    };
    // 0.8 D8.9 round 3 (session d89b_PART_3): what picking a system does to the file. A model with no map conversion is offered one (item 1);
    // a model that has one chooses between "only change what Location reports" and "move the model to this system" (item 2).
    const afterPick = async (crs) => {
      if (!ent.editor) return;
      const [Z, GM] = await Promise.all([import('./crs-georef.js'), import('./georef-model.js')]);
      const gNow = readGeoref(api, mid), cv = gNow?.kind === 'map' ? GM.readConversion(api, mid) : null;
      if (gNow?.kind !== 'map') { await placeOnMap(crs, gNow, () => apply(crs)); return; }
      const ms = P.modelSystem(gNow.crs);
      if (!cv || !ms || ms.crs.unit === 'deg') { apply(crs); if (cv && !ms) GU.sendProblems([Z.problem('nofrom', 'warning', { name: crs.name })]); return; }
      if (P.sameCoordinates(ms.crs, crs)) { apply(crs); return; }
      const mv = Z.reprojectConversion(cv.conv, ms.crs, crs);
      if (mv.error) { apply(crs); GU.sendProblems([mv.error]); status(mv.error.text, true); return; }
      GU.sendProblems(mv.problems);
      await GU.openChoiceDialog({ oldName: ms.crs.name, newCrs: crs, c0: cv.conv, moved: mv, problems: mv.problems, onOnly: () => apply(crs), onMove: () => writeGeoref(crs, mv.conv, mv.after, t('georef.choice.verb'), t('georef.choice.moved', { name: crs.name })) });
    };
    await openCrsPicker({ mode: 'model', near: g?.kind === 'site' ? [g.lon, g.lat] : null, current, note: g?.kind === 'map' ? '' : t('geo.pick.nomap'), canOff: !!rec, onPick: (c) => guard(() => afterPick(c)), onOff: () => apply(null) });
  }
  // Measure › Map origin…: place a model that has no map conversion on the map (the system first, if none was chosen)
  async function openMapOrigin() {
    const ent = cur();
    if (!ent || mode !== 'ifc') { status(t('geo.pick.model.none'), true); return; }
    const [{ readModelCrs }, P, C] = await Promise.all([import('./crs-model.js'), import('./crs-pick.js'), import('./crs.js')]);
    if (!C.catalogLoaded()) await C.loadCatalog();
    const api = ent.ifc.api, mid = ent.model.modelID, g = readGeoref(api, mid);
    const rec = P.fromRecord(readModelCrs(api, mid)) || (g?.kind === 'map' ? P.modelSystem(g.crs)?.crs : null);
    if (g?.kind === 'map') { status(t('georef.origin.already', { name: rec?.name || g.crs.name }), false); return; }
    if (!rec || rec.unit === 'deg') { status(t('georef.origin.pickfirst'), true); await openModelCrs(); return; }
    await georefTools(ent).placeOnMap(rec, g, null);
  }
  // Settings › BimCraft › Location: "Choose another system…" (any EPSG system, UTM zone or one of your own)
  settingsDlg?.querySelector('[data-bc-geo-more]')?.addEventListener('click', () => guard(async () => {
    const [{ openCrsPicker }, P] = await Promise.all([import('./crs-pick-ui.js'), import('./crs-pick.js')]);
    await openCrsPicker({ mode: 'target', onPick: (c) => {
      settings.geoCrs = c.code != null ? String(c.code) : 'my:' + P.addMine(null, c, c.name).id;
      saveSettings(); syncSettingsForm();
      status(t('geo.pick.target.set', { name: c.name }), false, true);
    } });
  }));
  um.copy.addEventListener('click', () => { const last = meas?.items[meas.items.length - 1]; if (last?.geo) copyText(last.geo.text).then(() => status(t('geo.copied'), false, true)); });
  um.bar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !meas) return;
    if (b.hasAttribute('data-measure-crs')) { guard(openModelCrs); return; }
    if (b.hasAttribute('data-measure-georef')) { guard(openMapOrigin); return; }
    if (b.hasAttribute('data-measure-ortho')) { measOrtho = !measOrtho; syncMeasureBar(); status(t(measOrtho ? 'measure.ortho.on' : 'measure.ortho.off')); }
    else if (b.dataset.measureMode) { meas.mode = b.dataset.measureMode; meas.a = null; syncMeasureBar(); redrawMeasure(); if (meas.mode === 'point') status(t('geo.start')); }
    else if (b.hasAttribute('data-measure-clear')) { meas.items = []; meas.a = null; syncMeasureBar(); redrawMeasure(); status(t('measure.cleared')); }
    else if (b.hasAttribute('data-measure-done')) { measureOff(); status(t('measure.ended')); }
  });
  window.bimcraftMeasure = { on: measureOn, off: measureOff, state: () => meas && { mode: meas.mode, a: meas.a, items: meas.items.map((i) => ({ kind: i.kind, value: i.value, delta: i.delta, text: i.text, a: i.a, lonlat: i.geo?.lonlat || null })) },
    fileOf: (pt, key) => { const ent = entryOf(key) || cur(); return viewerToFile(pt, viewer.modelMatrix(ent.mi), [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], readGeoref(ent.ifc.api, ent.model.modelID)?.fileUnitM ?? 0.001); } };   // for tests

  // ---- Hide and isolate (0.4 B12; ifc-vis.js through viewer.vis) ----
  // Hide = the picked elements go; Isolate = only they stay; See-through = only they stay solid, the rest faint (clicks
  // go through it); Show all = everything back. The pick is kept where it is still shown.
  const visButtons = [...ui.toolbar.querySelectorAll('[data-vis]')];
  const visMenu = ui.toolbar.querySelector('[data-vis-menu]');
  const VIS_TITLE = { hide: 'vis.hide.title', isolate: 'vis.isolate.title', ghost: 'vis.ghost.title', all: 'vis.showall.title', secbox: 'vis.secbox.title' };
  function visWhyNot(name) {
    if (!viewer || mode !== 'ifc') return t('vis.need.pick');
    if (name === 'all') return viewer.vis.plain ? t('vis.nothing.hidden') : '';
    return viewer.selection.size ? '' : t('vis.need.pick');
  }
  function syncVis() {
    for (const b of visButtons) {
      const why = visWhyNot(b.dataset.vis);
      b.setAttribute('aria-disabled', why ? 'true' : 'false');
      b.title = why || t(VIS_TITLE[b.dataset.vis]);
    }
  }
  function visAct(name) {
    const why = visWhyNot(name);
    if (why) { status(why); return; }
    if (name === 'secbox') { boxRoundPick(); return; }
    const keys = [...viewer.selection], v = viewer.vis;
    if (name === 'hide') {
      const n = v.hide(keys);
      viewer.select(null);
      selected = null; pickToken++; clearProps();
      viewer.applyVisibility();
      status(t('vis.hidden.count', { n, total: v.hidden.size }));
    } else if (name === 'isolate' || name === 'ghost') {
      v.isolate(keys, { ghost: name === 'ghost' });
      viewer.applyVisibility();
      status(t(name === 'ghost' ? 'vis.ghosted' : 'vis.isolated', { n: keys.length }));
    } else {
      v.showAll();
      viewer.applyVisibility();
      if (picked.size) { picked = new Set(); renderColor(); }
      status(t('vis.shown.all'));
    }
    syncVis();
    if (tree) treeView.reveal([...viewer.selection]);
  }
  // ---- Assistants and scripts (0.4 X.7; bim-agent.js, AGENTS-SPEC §5.2/§6.3): the open model's elements through
  // host.control — find, isolate / ghost / hide / show all (the Show menu's own calls), properties. Studio routes an
  // assistant's calls here only while Settings › Assistants allows them (stored in bimcraft.settings `assistants`).
  for (const def of bimTools({
    index: () => (mode === 'ifc' && model ? index() : null),
    name: () => ifcName,
    properties: (k) => { const m = cur(); return m.ifc.properties(k - m.model.keyBase); },
    visibility: (how, keys) => {
      const v = viewer.vis;
      if (how === 'show_all') v.showAll();
      else if (how === 'hide') { v.hide(keys); viewer.select(null); selected = null; pickToken++; clearProps(); }
      else v.isolate(keys, { ghost: how === 'ghost' });
      viewer.applyVisibility();
      syncVis();
      status(how === 'show_all' ? t('vis.shown.all') : how === 'hide' ? t('vis.hidden.count', { n: keys.length, total: v.hidden.size }) : t(how === 'ghost' ? 'vis.ghosted' : 'vis.isolated', { n: keys.length }));
      return { hidden: v.hidden.size };
    },
  })) fileHost.control.tool(def);
  // Settings › BimCraft › Assistants turns them on (applyAssist); the banner at the top of the right panel says while one is
  // connected, with Disconnect; the settings' Activity lists the calls (host.control.log).
  function applyAssist() {
    fileHost.control.configure({ enabled: settings.assistants.enabled, groups: settings.assistants.groups });
    renderAssist();
  }
  function renderAssist() {
    const c = fileHost.control, on = c.sessions();
    const ban = $('[data-assist-banner]');
    if (ban) {
      ban.hidden = !c.enabled || !on.length;
      const who = on.length ? on[on.length - 1].client?.name || t('set.assist.activity.someone') : '';
      ban.querySelector('p').textContent = on.length ? t(c.groups.includes('edit') ? 'assist.banner.edit' : 'assist.banner.read', { client: who }) : '';
    }
    const list = settingsDlg?.querySelector('[data-bc-assist-log] ol');
    if (list && settingsDlg.open) {
      const rows = c.log.slice(-50).reverse();
      list.replaceChildren(...(rows.length ? rows.map((e) => el('li', {}, t('set.assist.activity.row', { time: new Date(e.time).toLocaleTimeString(), client: e.client || t('set.assist.activity.someone'), tool: e.tool, outcome: e.outcome })))
        : [el('li', { className: 'bc-muted' }, t('set.assist.activity.none'))]));
    }
  }
  $('[data-assist-disconnect]')?.addEventListener('click', () => { fileHost.control.disconnect(); renderAssist(); status(t('assist.disconnected')); });
  fileHost.control.on('change', () => renderAssist());
  fileHost.control.configure({
    title: 'BimCraft', enabled: settings.assistants.enabled, groups: settings.assistants.groups,   // i18n-ignore: the product name
    info: () => ({ model: mode === 'ifc' ? ifcName || null : null, elements: mode === 'ifc' && model ? model.elements : 0, unsaved: models.some((m) => unsavedIn(m.editor)) }),
    busy: () => (busy ? 'opening or saving a file' : placing ? 'placing a library item' : null),   // i18n-ignore: read by the assistant
  });
  window.bimcraftControl = fileHost.control;   // for tests and the console
  renderAssist();

  /** For tests and the console: the key of the first element with this Name in the open model. */
  window.bimcraftKeys = (name, mi = null) => {
    if (!model) return null;
    for (const m of (mi === null ? [cur()] : models.filter((x) => x.mi === mi))) {
      for (const id of m.model.classOf.keys()) if (m.ifc.api.GetLine(m.model.modelID, id).Name?.value === name) return m.model.keyBase + id;
      const st = m.model.storeys.find((x) => x.name === name);
      if (st) return m.model.keyBase + st.id;
    }
    return null;
  };
  window.bimcraftVis = { act: visAct, state: () => viewer?.vis.toJSON(), pick: (keys) => { viewer.select(keys); if (viewer.selection.size > 1) showMany(); else showProps(viewer.selected); afterPick(); } };   // for tests

  function renderLayers(drawing) {
    const boxes = [];
    ui.layerList.replaceChildren(...drawing.layers.map((l) => {
      const box = el('input', { type: 'checkbox', checked: dwgView.layerVisible(l.name) });
      box.addEventListener('change', () => { dwgView.setLayerVisible(l.name, box.checked); view3d?.setLayerVisible(l.name, box.checked); });
      boxes.push([box, l.name]);
      return el('li', {}, el('label', {}, box,
        el('span', { className: 'bc-swatch', style: 'background:' + (l.color === 'ink' ? 'var(--ink)' : l.color) }),
        el('span', {}, l.name)));
    }));
    ui.layers.querySelectorAll('[data-layers-all]').forEach((b) => { b.onclick = () => {
      const on = b.dataset.layersAll === '1';
      for (const [box, name] of boxes) { box.checked = on; dwgView.hidden[on ? 'delete' : 'add'](name); }
      dwgView.render();
      view3d?.syncLayers(dwgView.hidden);
    }; });
    ui.layers.hidden = drawing.layers.length === 0;
  }

  // ---- Stage + toolbar ----
  function showStage(which) {
    // a drawing, an RVT card, a folder or a point cloud opens inside the ribbon layout too (owner 2026-10-24): it shows the stage as is
    workspace?.stageChanged(which); toolbox?.refresh();
    ui.empty.hidden = true;
    modelUi?.stage(which);
    ui.canvasWrap.hidden = which !== 'ifc';
    ui.toolbar.hidden = which !== 'ifc';
    usec.bar.hidden = which !== 'ifc' || !cut;   // the section plane bar belongs to the 3D model view
    if (pc?.has()) { const b = root.querySelector('[data-cloudbar]'); if (which !== 'ifc') b.hidden = true; }
    ui.card.hidden = which !== 'rvt';
    ui.folder.hidden = which !== 'folder';
    ui.dwg.hidden = which !== 'dwg';
    ui.ifcEquip.hidden = true;
    if (which !== 'ifc') { stopPlacing(); setPressed('equipment', false, 'lib-tool'); if (meas) measureOff(); if (walking) walkOff(); }
    if (which !== 'ifc' && which !== 'dwg') mode = 'none';
    if (which !== 'dwg') dwgOpen = which === 'dwg' ? dwgOpen : null;
    if (which !== 'dwg') ui.layers.hidden = true;   // renderLayers() shows it for a drawing
    if (which !== 'ifc') { ui.treeSec.hidden = true; if (ui.modelsSec) ui.modelsSec.hidden = true; if (ui.findSec) ui.findSec.hidden = true; if (ui.clashSec) ui.clashSec.hidden = true; if (ui.checksSec) ui.checksSec.hidden = true; if (ui.qtoSec) ui.qtoSec.hidden = true; if (ui.fdSec) ui.fdSec.hidden = true; }   // fillTree() / renderModels() show them for a model
    if (which === 'ifc' && viewer) viewer.resize();
    if (which === 'dwg' && dwgView) dwgView.resize();
    if (which !== 'ifc') selInfo = null;
    syncEdit();
  }
  // ---- short stages (closing 0.7 part 2 § A; as CadCraft's fitBars, 0.5 VP.5): the classic toolbar is CadCraft's band of named
  // groups, over the top of the view. When it would cover more than 30 % of the stage's height (a short window, a laptop at
  // 125–150 %), it drops its words and group names (titles and screen readers keep them), as CadCraft's toolbar does. Not in
  // the phone layout (one row already) or a workspace layout's strip. Measured on the stage's resize only, so it can't loop. ----
  {
    let frame = 0;
    const stageEl = ui.toolbar.parentElement;
    const fit = () => {
      frame = 0;
      root.classList.remove('bc-fit-compact');
      if (ui.toolbar.hidden || !ui.toolbar.offsetParent || ui.toolbar.classList.contains('ws-toolbar-strip') || document.documentElement.classList.contains('cc-phone')) return;
      if (ui.toolbar.offsetHeight > stageEl.clientHeight * 0.3) root.classList.add('bc-fit-compact');
    };
    const fitSoon = () => { if (!frame) frame = requestAnimationFrame(fit); };
    if (typeof ResizeObserver === 'function') new ResizeObserver(fitSoon).observe(stageEl);
    new MutationObserver(fitSoon).observe(ui.toolbar, { attributes: true, attributeFilter: ['hidden', 'class'] });
    fitSoon();
  }
  const toolButton = (name, attr = 'toggle') => ui.toolbar.querySelector('[data-' + attr + '="' + name + '"]');
  const setPressed = (name, on, attr = 'toggle') => toolButton(name, attr)?.setAttribute('aria-pressed', on ? 'true' : 'false');
  ui.toolbar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !viewer) return;
    if (b.dataset.view) viewer.view(b.dataset.view);
    if (b.dataset.toggle === 'edges') { viewer.setEdges(!viewer.edgesOn); syncDisplayButtons(); setPressed('edges', viewer.edgesOn); }
    if (b.dataset.toggle === 'spaces') { viewer.setSpacesVisible(!viewer.spacesOn); setPressed('spaces', viewer.spacesOn); }
    if (b.dataset.toggle === 'section') toggleSection();
    if (b.dataset.toggle === 'measure') { if (meas) measureOff(); else measureOn(); }
    if (b.hasAttribute('data-map-open')) { visMenu.open = false; guard(async () => (await ensureMaps()).open()); }
    if (b.hasAttribute('data-cloud-open')) { visMenu.open = false; if (pc?.has()) cloudPressed(pc.toggleBar()); else ui.cloudInput.click(); }
    if (b.dataset.toggle === 'walk') { if (walking) walkOff(); else walkOn(); }
    if (b.hasAttribute('data-render-open')) guard(openRender);
    if (b.hasAttribute('data-live-open')) guard(() => openLive(false));   // 0.7 RT.3
    if (b.hasAttribute('data-live-window')) guard(() => openLive(true));
    if (b.hasAttribute('data-xr-enter')) guard(openVr);   // 0.6 LC.19
    if (b.hasAttribute('data-glb-export')) guard(() => exportGlb('glb'));
    if (b.hasAttribute('data-gltf-export')) guard(() => exportGlb('gltf'));   // 0.8 DC.22: .gltf for Enscape's asset library   // 0.6 DC.22
    if (b.hasAttribute('data-usd-export')) guard(exportUsd);   // 0.7 XF.8
    if (b.hasAttribute('data-paint-open')) guard(openPaint);
    if (b.hasAttribute('data-saved-views')) guard(openViews);
    if (b.dataset.vis) { visMenu.open = false; visAct(b.dataset.vis); }
    if (b.dataset.libTool === 'library') showTab('library');
    if (b.dataset.libTool === 'equipment') toggleIfcEquipment();
    if (b.dataset.libTool === 'updates' && libraryOn) guard(checkUpdates);
    if (b.dataset.libTool === 'credits') showCredits();
  });
  document.addEventListener('keydown', (e) => {
    if (dwgView && !ui.dwg.hidden && ui.equip.hidden && !e.target.closest('input, textarea, select') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (e.key === 'f' || e.key === 'F') { if (view3dOn) view3d.extents(); else dwgView.fit(); return; }
      if (e.key === '3') { guard(toggle3d); return; }
      if (e.key === 'Escape' && view3dOn && view3d?.picked.size) { pick3d(null, false); return; }
      if ((e.key === 'x' || e.key === 'X') && view3dOn) { toggleSection(); return; }
      if ((e.key === 'p' || e.key === 'P') && !view3dOn) { togglePrint(); return; }
    }
    if (placing && !e.target.closest('textarea, dialog')) {
      if (e.key === 'Escape') { e.preventDefault(); stopPlacing(); status(t('place.stopped')); return; }
      if (!e.target.closest('input, select')) {
        if (e.key === 'r' || e.key === 'R') { e.preventDefault(); placing.rot = (placing.rot + 90) % 360; placing.snap = false; syncPlacebar(); moveGhost(placing.last); return; }
        if (e.key === 'Tab') { e.preventDefault(); toggleSnap(); return; }
      }
    }
    // keys typed in a dialog (Settings, …) are the dialog's: Esc there closes it, and must not stop measuring or walking
    if (e.defaultPrevented || isTextEntry(e.target) || workspace?.active || !viewer || ui.canvasWrap.hidden) return;
    if (e.key === 'f' || e.key === 'F') viewer.view('iso');
    if ((e.key === 'x' || e.key === 'X') && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && !placing && mode === 'ifc') { e.preventDefault(); visAct('secbox'); return; }
    if ((e.key === 'x' || e.key === 'X') && !e.ctrlKey && !e.metaKey && !e.altKey && !placing) toolButton('section')?.click();
    if (e.key === 'Escape' && walking) { e.preventDefault(); walkOff(); status(t('walk.off')); return; }
    if (e.key === 'Escape' && meas) { e.preventDefault(); if (meas.a) { meas.a = null; redrawMeasure(); status(''); } else { measureOff(); status(t('measure.ended')); } return; }
    if (!e.ctrlKey && !e.metaKey && !e.altKey && mode === 'ifc' && !document.querySelector('dialog[open]')) {
      const k = e.key.toLowerCase();
      if (k === 'm' && !e.shiftKey) { e.preventDefault(); if (meas) measureOff(); else measureOn(); return; }
      if (k === 'h') { e.preventDefault(); visAct(e.shiftKey ? 'all' : 'hide'); return; }
      if (k === 'i' && !e.shiftKey) { e.preventDefault(); visAct('isolate'); return; }
      if (k === 't' && !e.shiftKey) { e.preventDefault(); visAct('ghost'); return; }
    }
    if (e.key === 'Escape' && !e.defaultPrevented) act('select-none');
  });

  // ==== Library ====================================================================================
  const tabs = root.querySelectorAll('[data-rtab]');
  const rPanel = tabs[0]?.closest('aside') || root;   // the right panel: its tabs and panes travel with it (panels window)
  const rpanes = root.querySelectorAll('[data-rpane]');   // kept: the right panel may move to the panels window
  let libraryLoaded = false;
  function showTab(name) {
    if (name === 'library' && !libraryOn) return;   // browser edition: no library tab at all
    if (name === 'library' && !libraryLoaded) { libraryLoaded = true; library.load(); }   // no request until the tab is opened
    // looked up each time: add-ons add tabs of their own (0.5 AO.7) — inside the right panel kept at start, so it works
    // when the panel has moved into the pop-out panels window (another document)
    rPanel.querySelectorAll('[data-rtab]').forEach((t) => { const on = t.dataset.rtab === name; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; });
    rPanel.querySelectorAll('[data-rpane]').forEach((p) => { p.hidden = p.dataset.rpane !== name; if (!p.hidden && p.dataset.addon) p.dispatchEvent(new Event('cc-tab-shown')); });
    if (name === 'color') renderColor();   // after the pane shows: renderColor builds a hidden pane only when coloring
    if (name === 'issues') renderIssues();
    if (name === 'analysis') analysisUi?.render();
    if (name === 'points') pointsUi?.render();
    if (name === 'assets') assetsUi?.render();
    if (name === 'daylight') daylightUi?.render();
    if (name === 'calc') mepCalcUi?.redraw();
    if (name === 'energy') { mountEnergy?.(); energyUis?.ep?.show?.(); energyUis?.pv?.show?.(); }
  }
  tabs.forEach((t) => {
    t.addEventListener('click', () => showTab(t.dataset.rtab));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const list = [...tabs], i = list.indexOf(t), next = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
      next.focus(); showTab(next.dataset.rtab);
    });
  });

  const library = new LibraryPanel(ui.library, {
    mode: () => mode,
    dwg: () => dwgOpen,
    ifcApi: async () => { if (!ifc) ifc = await IfcModel.create(WebIFC); return ifc.api; },
    readDrawing: (bytes, kind) => readDrawingModel(bytes, kind),
    readRevit: (b, name) => readRevit(b, name),
    status,
    place: (entry) => startPlacing(entry),
    swapTarget: () => swapTarget,
    swap: (entry) => guard(() => doSwap(entry)),
  });
  window.bimcraftLibrary = library;   // for tests and the console
  if (!libraryOn) {   // browser edition: no Library tab, no Library/Updates buttons, no calls to /api/v1/library
    for (const n of root.querySelectorAll('[data-rtab="library"], [data-rpane="library"], [data-lib-tool="library"], [data-lib-tool="updates"]')) n.hidden = true;
  }

  /** The library item behind a picked element: license, attribution, swap, updates. */
  function libraryBlock(id, p) {
    const set = p.sets.find((x) => x.name === PSETS.library) || p.sets.find((x) => x.name === PSETS.library + ' (type)');
    if (!set) return null;
    const v = (n) => set.rows.find((r) => r.name === n)?.value || '';
    const pl = p.sets.find((x) => x.name === PSETS.placement);
    const num_ = pl?.rows.find((r) => r.name === 'ItemNumber')?.value;
    return el('div', { className: 'bc-lib-propblock' },
      el('p', { className: 'bc-h' }, num_ ? t('lib.block.title.no', { no: num_ }) : t('lib.block.title')),
      el('dl', { className: 'bc-dl' },
        el('dt', {}, t('lib.block.license')), el('dd', {}, v('License') ? licenseLabel(v('License')) : t('lib.block.license.none')),
        v('Attribution') ? [el('dt', {}, t('lib.block.attribution')), el('dd', {}, v('Attribution'))] : null,
        el('dt', {}, t('lib.block.from')), el('dd', {}, v('Library') === 'librarycraft' ? 'Library' : v('Library') === 'file' ? (v('SourceFile') ? t('lib.block.from.file.name', { file: v('SourceFile') }) : t('lib.block.from.file')) : v('Library')),   // i18n-ignore: LibraryCraft is a product name
        v('ItemVersion') && v('ItemVersion') !== '0' ? [el('dt', {}, t('lib.block.version')), el('dd', {}, v('ItemVersion'))] : null,
        v('VariantName') ? [el('dt', {}, t('lib.block.variant')), el('dd', { 'data-lib-block-variant': '' }, v('VariantName'))] : null),   // 0.7 W3.19
      pl && libraryOn ? el('p', { className: 'bc-lib-actions' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-swap': '', onClick: () => {
          swapTarget = { id, name: p.name || t('lib.swap.theitem'), uuid: v('ItemUuid'), version: Number(v('ItemVersion')) || null, variant: v('Variant'), library: v('Library') };   // 0.7 W3.19: the panel lists the item's other variants
          showTab('library');
          library.render();
          status(t('lib.swap.pick', { name: swapTarget.name }));
        } }, el('i', { className: 'bi bi-arrow-left-right', 'aria-hidden': 'true' }), ' ' + t('lib.swap.button')),
        v('ItemUuid') ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => guard(checkUpdates) }, t('lib.updates.button')) : null) : null);
  }

  // ---- placing ----
  const pb = {
    name: ui.placebar.querySelector('[data-place-name]'), storey: ui.placebar.querySelector('[data-place-storey]'),
    xy: ui.placebar.querySelector('[data-place-xy]'), at: ui.placebar.querySelector('[data-place-at]'), snap: ui.placebar.querySelector('[data-place-snap]'),
    mount: ui.placebar.querySelector('[data-place-mount]'),
  };
  const coordMatrix = () => ifc.api.GetCoordinationMatrix(ifc.modelID);
  let storeyElevs = new Map();   // storey id → elevation in model mm (ifc-place.js info())
  const storeyElev = () => storeyElevs.get(Number(pb.storey.value)) ?? 0;
  /** 0.6 DC.117: how far above its storey an item sits: 0 on the floor; at the ceiling, its top at the underside of the ceiling
   *  over the point (model-ui.js ceilingZ), else at the level's height (up to the next storey). */
  function mountZ(item, at) {
    if (pb.mount?.value !== 'ceiling' || !at) return 0;
    const st = Number(pb.storey.value), b = localBox(item);
    let top = modelUi?.ceilingZ?.(st, at.x, at.y) ?? null;
    if (top === null) { const e = storeyElev(), next = [...storeyElevs.values()].filter((v) => v > e + 1).sort((a, c) => a - c)[0]; top = next !== undefined ? next - e : 2438.4; }
    return Math.max(0, top - b.z1);
  }

  /** Place an item (from the Library tab), or — with `paste` (a placement clip) — paste a copy where the user clicks. */
  function startPlacing(entry, paste = null) {
    if (mode !== 'ifc' || !editor) { status(t('place.need.ifc'), true); return; }
    const info = editor.placer().info();
    if (!info.storeys.length) { status(t('place.need.storeys'), true); return; }
    storeyElevs = new Map(info.storeys.map((s) => [s.id, s.elevation]));
    const keep = pb.storey.value;
    pb.storey.replaceChildren(...info.storeys.map((s) => el('option', { value: String(s.id) }, s.name)));
    if (info.storeys.some((s) => String(s.id) === keep)) pb.storey.value = keep;
    if (paste) {
      // Paste on the storey the copy came from when this model has it (same model, or same name / nearest elevation).
      const st = pickStorey(paste, info.storeys, paste.model === modelTag);
      if (st && st.how !== 'first') pb.storey.value = String(st.id);
    }
    placing = { entry, rot: paste ? paste.rot : 0, snap: false, faces: null, last: null, at: null, sha: entry.meta.sha256, paste };
    if (pb.mount) pb.mount.value = !paste && modelUi?.kind === 'rcp' ? 'ceiling' : 'floor';   // 0.6 DC.117: a ceiling plan on screen = at the ceiling
    if (settings.snap) {
      placing.faces = editor.placer().wallFaces(Number(pb.storey.value));
      placing.snap = placing.faces.length > 0;
    }
    pb.name.textContent = t(paste ? 'place.bar.pasting' : 'place.bar.placing', { name: entry.item.name });
    ui.placebar.hidden = false;
    planCut();
    viewer.view('top');
    viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1];
    viewer.placing = { move: (pt) => moveGhost(pt), click: (pt) => { moveGhost(pt); if (placing?.at) guard(() => commitPlace(placing.at)); } };
    syncPlacebar();
    syncEdit();
    status(t(paste ? (placing.snap ? 'place.start.paste.snap' : 'place.start.paste') : (placing.snap ? 'place.start.snap' : 'place.start'), { name: entry.item.name }));
  }
  function stopPlacing() {
    const was = placing;
    placing = null;
    if (viewer) { viewer.placing = null; viewer.setGhost(null); }
    ui.placebar.hidden = true;
    if (was && model) planCut(null);
    if (was) syncEdit();
  }
  /** While placing, storeys above the chosen one are hidden (a plan cut); their checkboxes follow. null = show all again. */
  function planCut(on = Number(pb.storey.value)) {
    const elev = on === null ? Infinity : storeyElevs.get(on) ?? Infinity;
    for (const s of model.storeys) {
      const show = (storeyElevs.get(s.id) ?? -Infinity) <= elev + 1;
      viewer.setStoreyVisible(s.id, show, cur().mi);
      const box = ui.storeyList.querySelector('[data-storey="' + s.id + '"]');
      if (box) box.checked = show;
    }
  }
  /** GH.3-A: the X, Y box says its unit and shows an example in it (it is typed in the display unit, marks allowed). */
  function syncPlaceUnits() {
    const u = getDisplayUnits(), label = pb.xy.closest('label');
    if (label && label.firstChild?.nodeType === 3) label.firstChild.nodeValue = t('ui.place.xy.u', { unit: unitMark(u) || 'ft-in' }) + ' ';   // i18n-ignore: a unit symbol
    pb.xy.placeholder = lenMark(1200, u) + ', ' + lenMark(3400, u);
  }
  function syncPlacebar() {
    if (!placing) return;
    syncPlaceUnits();
    pb.snap.setAttribute('aria-pressed', placing.snap ? 'true' : 'false');
    const a = placing.at;
    pb.at.textContent = a ? t(a.snapped ? 'place.at.wall' : 'place.at', { x: lenMark(a.x, getDisplayUnits()), y: lenMark(a.y, getDisplayUnits()), rot: Math.round(a.rot) }) : t('place.rot', { rot: Math.round(placing.rot) });
  }
  function toggleSnap() {
    if (!placing) return;
    placing.snap = !placing.snap;
    if (placing.snap && !placing.faces) {
      placing.faces = editor.placer().wallFaces(Number(pb.storey.value));
      if (!placing.faces.length) { placing.snap = false; status(t('place.nowalls'), true); }
    }
    syncPlacebar();
    moveGhost(placing.last);
  }
  pb.snap.addEventListener('click', toggleSnap);
  ui.placebar.querySelector('[data-place-turn]').addEventListener('click', () => {   // = R (touch screens have no R)
    if (!placing) return;
    placing.rot = (placing.rot + 90) % 360; placing.snap = false; syncPlacebar(); moveGhost(placing.last);
  });
  pb.storey.addEventListener('change', () => { if (!placing) return; planCut(); placing.faces = null; placing.snap = false; viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1]; syncPlacebar(); });
  ui.placebar.querySelector('[data-place-stop]').addEventListener('click', () => stopPlacing());
  const typedPlace = () => {
    if (!placing) return;
    const typed = parseTyped(pb.xy.value, getDisplayUnits());   // GH.3-A: typed in the display unit (marks allowed: 2500 mm, 8'-2")
    const m = typed?.kind === 'abs' ? typed : null;
    if (!m) { status(t('place.typed.bad'), true); pb.xy.focus(); return; }
    const at = { x: m.x, y: m.y, rot: placing.rot, snapped: false };
    placing.at = at; drawGhost(at); syncPlacebar();
    guard(() => commitPlace(at));
  };
  ui.placebar.querySelector('[data-place-typed]').addEventListener('click', typedPlace);
  pb.xy.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); typedPlace(); } });

  /** Item-local bounds of what the ghost shows: the body, else the plan with a stand-in height (clipboard.js). */
  const localBox = (item) => boxFromItem(item);
  function moveGhost(pt) {
    if (!placing) return;
    placing.last = pt;
    if (!pt) { viewer.setGhost(null); return; }
    const [x, y] = fromViewer(coordMatrix(), toLocal([pt.x, pt.y, pt.z]));
    let at = { x, y, rot: placing.rot, snapped: false };
    if (placing.snap && placing.faces?.length) {
      const s = snapToWall([x, y], placing.entry.item, placing.faces);
      if (s && s.distance < 3000) at = { x: s.x, y: s.y, rot: s.rot, snapped: true };
    }
    placing.at = at;
    drawGhost(at);
    syncPlacebar();
  }
  function drawGhost(at) {
    const b = localBox(placing.entry.item), r = at.rot * Math.PI / 180, c = Math.cos(r), sn = Math.sin(r), z = storeyElev() + (placing.paste ? 0 : mountZ(placing.entry.item, at)), C = coordMatrix();
    const corner = (lx, ly, lz) => toWorld(toViewer(C, [at.x + lx * c - ly * sn, at.y + lx * sn + ly * c, z + lz]));
    viewer.setGhost([[b.x0, b.y0, b.z0], [b.x1, b.y0, b.z0], [b.x1, b.y1, b.z0], [b.x0, b.y1, b.z0], [b.x0, b.y0, b.z1], [b.x1, b.y0, b.z1], [b.x1, b.y1, b.z1], [b.x0, b.y1, b.z1]].map((q) => corner(...q)));
  }

  async function commitPlace(at) {
    if (placing.paste) { await commitPaste(placing.paste, { storey: Number(pb.storey.value), x: at.x, y: at.y, rot: at.rot }); return; }
    const { entry } = placing;
    const pl = editor.placer();
    const ask = await askPlacement(entry.item, pl.nextItemNumber());
    if (!ask) return;
    const opts = { storey: Number(pb.storey.value), x: at.x, y: at.y, rot: at.rot, itemNumber: ask.itemNumber, quantity: ask.quantity, notes: ask.notes,
      library: entry.meta.library, sha256: entry.meta.sha256, sourceFile: entry.meta.sourceFile || '', variant: entry.meta.variant || null, standInHeight: ask.height, z: mountZ(entry.item, at) };
    const r = editor.placeItem(entry.item, opts);
    rememberItem(entry);
    await rebuild(r.id);
    library.registerUse(entry, ifcName);
    status(t(r.typeCreated ? 'place.done' : 'place.done.shared', { name: entry.item.name, no: ask.itemNumber }));
    if (placing) { placing.faces = null; if (placing.snap) placing.faces = editor.placer().wallFaces(Number(pb.storey.value)); viewer.placing && viewer.setGhost(null); }
  }

  async function doSwap(entry) {
    if (!swapTarget) return;
    const tg = swapTarget;
    const r = editor.swapItem(tg.id, entry.item, { library: entry.meta.library, sha256: entry.meta.sha256, sourceFile: entry.meta.sourceFile || '', variant: entry.meta.variant || null, oldName: tg.name });
    swapTarget = null;
    rememberItem(entry);
    await rebuild(tg.id);
    library.registerUse(entry, ifcName);
    showTab('props');
    status(t('swap.done', { from: tg.name, to: entry.item.name }) + (r.classChanged ? ' ' + t('swap.class', { from: r.classChanged.from, to: r.classChanged.to }) : ''));
  }

  /** Rebuild the model from the editor's bytes (the simplest correct way to show new geometry), camera kept. */
  async function rebuild(selectId) {
    const updating = t('model.updating');
    status(updating);
    try { await rebuildNow(selectId); } finally { if (ui.status.textContent === updating) status(''); }   // 0.6 BIM-F4: not left up after the reload
  }
  async function rebuildNow(selectId) {
    modelUi?.rebuilding();
    await frame();
    window.bimcraftLive?.live?.reloading();   // Studio Live: others' edits wait while the model reloads (live.js)
    const bytes_ = editor.save();
    // the same coordination matrix: cc-ifc centres a model on its first element, which a drawn or edited wall can change —
    // the model would then shift in the scene, away from a point cloud, links and the camera (Discord: scan-to-BIM)
    model = await ifc.load(bytes_, undefined, { keyBase: model.keyBase, coordination: ifc.api.GetCoordinationMatrix(model.modelID) });
    cur().model = model;
    editor.reindex();
    window.bimcraftLive?.live?.loaded();
    const keys = new Set(); for (const b of model.batches) for (const k of b.elems.ids) keys.add(k);
    const mi = cur().mi;
    viewer.vis.prune((k) => Math.floor(k / KEY_SPAN) !== mi || keys.has(k));   // hidden / isolated stay so (keys survive a rebuild); deleted ones drop out
    viewer.setModel(model, { keepCamera: true });
    if (cut) applySection();   // the same cut on the rebuilt model
    if (placing) viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1];
    fillStoreys(model);
    fillClasses(model);
    fillTree(true);
    propIx = null;   // values may have changed: read again on the next use
    guidKeys = null;
    renderFind();
    checkRes = null; renderChecks();   // results describe the model before the edit
    if (checksArmed) checksSrc?.invalidate();   // 0.7.1 → 0.8: once run, Model checks re-run a moment after each edit for the Problems panel
    renderQto();
    if (colorField) applyColor(colorField, true); else renderColor();
    if (placing) planCut();
    renderChanges();
    if (!ui.ifcEquip.hidden) renderIfcEquipment();
    if (selectId !== null && selectId !== undefined) { viewer.select(selectId); await showProps(selectId); }
    else { selected = null; clearProps(); }
    modelUi?.rebuilt();
    coordsUi?.modelChanged();   // 0.6 DF.15: levels and the site may have moved
    linksUi?.modelChanged();   // 0.6 DF.21: a link added, moved or removed
  }

  /** The one prompt per placement: item number (default next free), quantity, notes, and a stand-in height for a 2D-only item. */
  function askPlacement(item, next) {
    return new Promise((resolve) => {
      const f = (label, input) => el('label', { className: 'bc-dlg-field' }, el('span', {}, label), input);
      const no = el('input', { type: 'text', className: 'bc-input', value: next, 'data-ask-number': '', maxLength: 40 });
      const qty = el('input', { type: 'number', className: 'bc-input', value: '1', min: '1', step: '1' });
      const notes = el('input', { type: 'text', className: 'bc-input', maxLength: 200 });
      const h = item.body ? null : el('input', { type: 'text', className: 'bc-input', value: fmtLen(900, getDisplayUnits()), inputMode: 'decimal', 'data-place-height': '' });   // GH.3-A: a length in the display unit
      const err = el('p', { className: 'bc-input-err', role: 'alert' });
      const dlg = el('dialog', { className: 'bc-dialog', 'aria-label': t('place.dlg.title', { name: item.name }) },
        el('form', { method: 'dialog' },
          el('h2', { className: 'bc-h' }, t('place.dlg.title', { name: item.name })),
          f(t('place.dlg.number'), no), f(t('place.dlg.qty'), qty), f(t('place.dlg.notes'), notes),
          h ? f(t('place.dlg.height.u', { unit: unitMark(getDisplayUnits()) || 'ft-in' }), h) : null,   // i18n-ignore: a unit symbol
          err,
          el('p', { className: 'bc-lib-actions' },
            el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok' }, t('place.dlg.ok')),
            el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel', formNoValidate: true }, t('dialog.cancel')))));
      document.body.append(dlg);
      dlg.addEventListener('close', () => {
        dlg.remove();
        if (dlg.returnValue !== 'ok') { resolve(null); return; }
        resolve({ itemNumber: no.value.trim() || next, quantity: Math.max(1, Math.round(Number(qty.value) || 1)), notes: notes.value.trim(), height: h ? Math.max(1, parseLen(h.value, getDisplayUnits()) || 900) : 0 });
      });
      dlg.showModal();
      no.select();
    });
  }

  function dialog(title, body, actions = []) {
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide', 'aria-label': title },
      el('h2', { className: 'bc-h' }, title), body,
      el('p', { className: 'bc-lib-actions' }, ...actions, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => dlg.close() }, t('dialog.close'))));
    dlg.addEventListener('close', () => dlg.remove());
    document.body.append(dlg);
    dlg.showModal();
    return dlg;
  }
  /** An export (CSV, BCF, …): always a copy — a download in the browser, the shell's own handling on the desktop. */
  const download = (name, text, type) => fileHost.download(text, name, type);
  const csvCell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };

  // ---- library credits (file menu: the Credits button) ----
  function showCredits() {
    if (!editor) return;
    const pls = editor.placer().placements();
    const groups = new Map();
    for (const p of pls) {
      const k = p.uuid ? p.uuid + '@' + p.version : 'sha:' + p.sha256;
      if (!groups.has(k)) groups.set(k, { ...p, count: 0, numbers: [] });
      const g = groups.get(k); g.count++; g.numbers.push(p.itemNumber);
    }
    const list = [...groups.values()];
    const line = (g) => (g.attribution || (g.license ? t('credits.line.license', { name: g.equipment.Name || g.name, license: licenseLabel(g.license) }) : t(g.sourceFile ? 'credits.line.file.src' : 'credits.line.file', { name: g.equipment.Name || g.name, file: g.sourceFile })));
    const text = list.map(line).join('\n');
    const body = list.length ? el('table', { className: 'bc-equip-table' },
      el('thead', {}, el('tr', {}, [t('credits.col.item'), t('credits.col.version'), t('credits.col.license'), t('credits.col.attribution'), t('credits.col.usedas')].map((h) => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, list.map((g) => el('tr', {},
        el('th', { scope: 'row' }, g.equipment.Name || g.name), el('td', {}, g.version ? t('lib.version', { version: g.version }) : '—'), el('td', {}, g.license ? licenseLabel(g.license) : t('credits.fromfile')),
        el('td', {}, line(g)), el('td', {}, g.numbers.join(', '))))))
      : el('p', { className: 'bc-muted' }, t('credits.none'));
    dialog(t('credits.title'), el('div', {}, el('p', { className: 'bc-muted' }, t('credits.intro')), body), list.length ? [
      el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onClick: async () => {
        try { await navigator.clipboard.writeText(text); status(t('credits.copied')); } catch (e) { status(t('credits.copy.refused'), true); }
      } }, t('credits.copy')),
      el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => {
        const head = ['Item', 'Qty', 'Name', 'Maker', 'Model', 'Library', 'Item id', 'Version', 'License', 'Attribution', 'Notes'];   // i18n-ignore: CSV column headers
        const rows = pls.map((p) => [p.itemNumber, p.quantity, p.equipment.Name || p.name, p.equipment.Maker || '', p.equipment.Model || '', p.library, p.uuid, p.version || '', p.license, p.attribution, p.notes]);
        download(ifcName.replace(/\.ifc$/i, '') + ' library credits.csv',   // i18n-ignore: a file name
           '\ufeff' + [head, ...rows].map((r) => r.map(csvCell).join(',')).join('\r\n') + '\r\n', 'text/csv;charset=utf-8');
        status(t('credits.downloaded'));
      } }, t('credits.csv'))] : []);
  }

  // ---- check for updates (§6.3) ----
  async function checkUpdates() {
    if (!editor) return;
    const pls = editor.placer().placements().filter((p) => p.uuid && p.library === 'librarycraft');
    if (!pls.length) { status(t('updates.none')); return; }
    const refs = [...new Map(pls.map((p) => [p.uuid + '@' + p.version, { uuid: p.uuid, version: Number(p.version) }])).values()];
    status(t('updates.asking', { n: refs.length }));
    let results;
    try { results = await library.updates(refs); } catch (e) { status(e.message || t('updates.unreachable'), true); return; }
    status('');
    const nameOf = (r) => pls.find((p) => p.uuid === r.uuid)?.equipment.Name || pls.find((p) => p.uuid === r.uuid)?.name || r.uuid;
    const todo = results.filter((r) => r.status === 'newer');
    const STATUS = { current: t('updates.st.current'), newer: t('updates.st.newer'), withdrawn: t('updates.st.withdrawn'), unknown: t('updates.st.unknown') };
    const update = async (list, dlg) => {
      let n = 0;
      for (const r of list) {
        const got = await library.fetchItem(r.uuid, r.latest);
        const sha = got.item.provenance?.sha256 || '';
        for (const p of editor.placer().placements().filter((x) => x.uuid === r.uuid && Number(x.version) === Number(r.version))) {
          // 0.7 W3.19: a placement of a variant stays that variant when the new version still has it, else it takes the default
          const row = p.variant && got.item.variants ? got.item.variants.rows.find((x) => x.id === p.variant) : null;
          const variant = row ? { id: row.id, name: row.name, values: row.values } : null;
          editor.swapItem(p.id, got.item, { library: 'librarycraft', sha256: sha, variant, oldName: (p.equipment.Name || p.name) + ' ' + t('lib.version', { version: p.version }) }, { what: 'update' });
          rememberItem({ item: variant ? withVariant(got.item, { variant })[0] : got.item, meta: { library: 'librarycraft', sha256: sha, ...(variant ? { variant } : {}) } });
          n++;
        }
      }
      dlg.close();
      await rebuild(selected);
      status(t('updates.done', { n }));
    };
    const body = el('table', { className: 'bc-equip-table' },
      el('thead', {}, el('tr', {}, [t('updates.col.item'), t('updates.col.inmodel'), t('updates.col.latest'), t('updates.col.status'), ''].map((h) => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, results.map((r) => el('tr', {},
        el('th', { scope: 'row' }, nameOf(r)), el('td', {}, t('lib.version', { version: r.version })), el('td', {}, r.latest ? t('lib.version', { version: r.latest }) : '—'),
        el('td', {}, el('span', { className: 'bc-pill ' + (r.status === 'current' ? 'is-ok' : r.status === 'withdrawn' ? 'is-bad' : 'is-warn') }, STATUS[r.status] || r.status),
          r.change_kinds?.length ? el('span', { className: 'bc-sub' }, t('updates.changes', { kinds: r.change_kinds.join(', ') })) : null,
          r.license_changed ? el('span', { className: 'bc-sub' }, t('updates.license')) : null,
          r.withdrawn_reason ? el('span', { className: 'bc-sub' }, r.withdrawn_reason) : null),
        el('td', {}, r.status === 'newer' ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: (e) => guard(() => update([r], e.target.closest('dialog'))) }, t('updates.update')) : null)))));
    dialog(t('updates.title'), body, todo.length > 1 ? [el('button', { type: 'button', className: 'btn-plot btn-sm-cc', onClick: (e) => guard(() => update(todo, e.target.closest('dialog'))) }, t('updates.all', { n: todo.length }))] : []);
  }

  // ---- equipment schedule from the IFC (same rows and CSV as a drawing's) ----
  function toggleIfcEquipment() {
    const show = ui.ifcEquip.hidden;
    if (show && !renderIfcEquipment()) return;
    ui.ifcEquip.hidden = !show;
    setPressed('equipment', show, 'lib-tool');
  }
  function renderIfcEquipment() {
    const list = editor && editor.placer().schedule();
    if (!list) { status(t('ifcequip.none')); ui.ifcEquip.hidden = true; setPressed('equipment', false, 'lib-tool'); return false; }
    const sheetName = (key) => model.storeys.find((s) => 'storey:' + s.id === key)?.name || key;
    renderEquipment(ui.ifcEquip, list, {
      sheetName, sheetWord: 'storey',
      intro: t('ifcequip.intro', { n: list.tags, count: num(list.tags) }),
      onShow: (row) => { const id = row.places[0].id; ui.ifcEquip.hidden = true; setPressed('equipment', false, 'lib-tool'); viewer.select(id); showProps(id); showTab('props'); },
      onCsv: (rows, label) => {
        const name = ifcName.replace(/\.ifc$/i, '') + ' equipment.csv';   // i18n-ignore: a file name
        download(name, '\ufeff' + equipmentCsv(rows, sheetName), 'text/csv;charset=utf-8');
        status(t('equip.downloaded', { file: name, n: rows.length, count: num(rows.length) }));
      },
    });
    return true;
  }

  // ==== Edit menu ===================================================================================
  // Toolbar Undo, Redo, Copy, Paste and the More menu (ui.inc), the same actions on keys. What each one can do in
  // BimCraft is decided here; an action that cannot act right now is aria-disabled with the reason as its title, and a
  // click or key says the reason in the status line instead of doing nothing.
  const store = (() => { try { return window.localStorage; } catch (e) { return null; } })();
  let clip = null;   // this tab's clip (clipboard.js); another tab's newer one in storage wins
  window.bimcraftClip = () => currentClip();   // for tests and the console
  const editMenu = ui.toolbar.querySelector('[data-edit-menu]');
  const editButtons = [...root.querySelectorAll('[data-toolbar] [data-act]')];
  for (const b of editButtons) b.dataset.titleDefault = b.getAttribute('title') || '';
  const MENU_TITLE = {
    cut: t('edit.cut.title'), copy: t('menu.copy.title'), paste: t('menu.paste.title'),
    'paste-in-place': t('menu.pasteinplace.title'), duplicate: t('edit.duplicate.title'),
    delete: t('edit.delete.title'), 'select-all': t('edit.selectall.title'), 'select-none': t('menu.selectnone.title'),
  };
  const NOT_BUILT = {
    element: t('edit.paste.textonly'),
    dwg: t('edit.dwg.notbuilt'),
  };
  const elementSnaps = new Map();   // elements clip copiedAt → IfcEditor.snapshot() (this tab only: it names this model's lines)
  const picks = () => (viewer && mode === 'ifc' ? [...viewer.selection] : []);
  /** The picked keys this model can delete or copy (storeys, spaces and the project cannot), as expressIDs. Cheap: classes
   * come from the load result (a Select all on a big model asks this on every redraw of the menu). */
  const SPATIAL = /^Ifc(Project|Site|Building|BuildingStorey|Space|Facility|FacilityPart|Bridge|Road|Railway|MarineFacility|SpatialZone|ExternalSpatialElement)$/;
  const clsMemo = { model: null, map: new Map() };
  /** Class of any line: elements with geometry from the load result, the rest (storeys, a stair's parent) read once. */
  const classOfId = (id) => {
    const known = model.classOf.get(id);
    if (known) return known;
    if (clsMemo.model !== model) { clsMemo.model = model; clsMemo.map = new Map(); }
    if (!clsMemo.map.has(id)) clsMemo.map.set(id, ifc.className(id));
    return clsMemo.map.get(id);
  };
  const editable = () => (editor && model ? picks().filter((k) => Math.floor(k / KEY_SPAN) === cur().mi).map((k) => k - model.keyBase).filter((id) => !SPATIAL.test(classOfId(id))) : []);

  function currentClip() {
    const shared = readClip(store);
    if (!clip) return shared;
    if (shared && shared.copiedAt > clip.copiedAt) return shared;
    return clip;
  }
  /** The element a placement clip was copied from, when it is still in this open model as that same item. */
  let srcMemo = { k: '', p: null };   // placements() reads every property set: once per clip and model state
  function clipSource(c) {
    if (!c || c.kind !== 'placement' || c.model !== modelTag || !editor) return null;
    const k = c.copiedAt + '|' + c.id + '|' + modelTag + '|' + editor.changes.length + '|' + editor.undone.length;
    if (srcMemo.k === k) return srcMemo.p;
    const id = editor.now(c.id);
    const p = editor.placer().placements().find((x) => x.id === id);
    srcMemo = { k, p: p && libKey(p) === c.key ? p : null };
    return srcMemo.p;
  }
  /** Why an action cannot act right now ('' = it can). `area` false: BimCraft's own clip only (0.8 D8.15: a copied area newer than it
   *  makes Paste the area's, picture-ui.js). */
  function whyNot(name, { area = true } = {}) {
    const ifcOpen = mode === 'ifc' && !!editor;
    const c = currentClip();
    switch (name) {
      case 'undo': return !ifcOpen ? t('edit.need.ifc.edit') : editor.changes.length ? '' : t('edit.undo.nothing');
      case 'redo': return !ifcOpen ? t('edit.need.ifc.edit') : editor.canRedo ? '' : t('edit.redo.nothing');
      case 'copy':
        if (mode === 'dwg') return NOT_BUILT.dwg;
        if (!ifcOpen) return t('edit.need.ifc');
        if (!picks().length) return t('edit.need.pick.one');
        return editable().length ? '' : t('edit.refused.spatial');
      case 'paste': case 'paste-in-place':
        if (!ifcOpen) return t('edit.need.ifc.paste');
        if (area && name === 'paste' && picturesUi?.areaWins(c)) return placing ? t('edit.finish.placing') : '';
        if (!c) return t('edit.paste.nothing');
        if (c.kind === 'element') return NOT_BUILT.element;
        if (c.kind === 'elements') {
          if (c.model !== modelTag) return t('edit.paste.othermodel', { file: c.file || '?' });
          if (!elementSnaps.has(c.copiedAt)) return t('edit.paste.othertab');
          return placing ? t('edit.finish.placing') : '';
        }
        if (!clipSource(c) && !c.item) return c.file ? t('edit.paste.noitem', { name: c.name, file: c.file }) : t('edit.paste.noitem.other', { name: c.name });
        return placing ? t('edit.finish.placing') : '';
      case 'duplicate': case 'cut': case 'delete':
        if (mode === 'dwg') return NOT_BUILT.dwg;
        if (!ifcOpen) return t('edit.need.ifc');
        if (!picks().length) return t('edit.need.pick');
        if (!editable().length) return t('edit.refused.spatial');
        return placing ? t('edit.finish.placing') : '';
      case 'select-all': return ifcOpen ? '' : t('edit.need.ifc');
      case 'select-none': return ifcOpen && (picks().length || selInfo || selected !== null) ? '' : t('edit.nothing.picked');
      default: return '';
    }
  }
  function syncEdit() {
    workspace?.refresh();
    for (const b of editButtons) {
      const why = whyNot(b.dataset.act);
      b.setAttribute('aria-disabled', why ? 'true' : 'false');
      b.title = why || (b.getAttribute('role') === 'menuitem' ? MENU_TITLE[b.dataset.act] || '' : b.dataset.titleDefault);
    }
  }
  window.addEventListener('storage', (e) => { if (e.key === CLIP_KEY || e.key === AREA_KEY || e.key === null) syncEdit(); });   // another tab (or MarkupCraft's Copy area) copied

  ui.toolbar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    if (editMenu.contains(b)) editMenu.open = false;
    act(b.dataset.act);
  });
  // Every toolbar menu (Edit's More, Show): closes on a click elsewhere, one open at a time, arrows move, Esc closes.
  const toolMenus = [...ui.toolbar.querySelectorAll('details.bc-menu')];
  document.addEventListener('click', (e) => { for (const m of toolMenus) if (m.open && !m.contains(e.target)) m.open = false; });
  for (const menu of toolMenus) {
    // The list opens toward the side of the stage with room (More usually ends the first row, at the right).
    // Decided on the click, before the list shows, so it never flashes on the wrong side.
    menu.querySelector('summary').addEventListener('click', () => {
      if (menu.open) return;   // this click closes it
      const list = menu.querySelector('.bc-menu-list'), stage = root.querySelector('.bc-stage').getBoundingClientRect();
      const left = menu.getBoundingClientRect().left, need = parseFloat(getComputedStyle(list).minWidth) || 240;
      menu.classList.toggle('is-right', left + need > stage.right - 4);
    });
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.open) { e.preventDefault(); e.stopPropagation(); menu.open = false; menu.querySelector('summary').focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && menu.open) {
        const items = [...menu.querySelectorAll('[role="menuitem"]')], i = items.indexOf(document.activeElement);
        e.preventDefault();
        items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1 + (i < 0 ? 1 : 0))) % items.length].focus();
      }
    });
  }

  function act(name) {
    if (addons?.runCommand(name)) return;   // 0.5 AO.7: an add-on's command
    if (modelUi?.edit(name)) return;   // drawn walls, doors and windows (model-ui.js): their own delete; copy not yet
    const why = whyNot(name);
    if (name === 'undo') { if (why) status(why); else undo(); return; }
    if (name === 'redo') { if (why) status(why); else redo(); return; }
    if (name === 'select-none') {
      if (placing) { stopPlacing(); status(t('place.stopped')); return; }
      if (viewer) viewer.select(null);
      selected = null;
      pickToken++;
      clearProps();
      afterPick();
      return;
    }
    if (name === 'copy') { if (why) status(why); else copyPicked(); return; }
    if (name === 'paste' || name === 'paste-in-place') {
      if (why) { status(why); return; }
      // 0.8 D8.15: a copied area newer than BimCraft's own clip becomes a picture on this level's plan (picture-ui.js)
      if (name === 'paste' && picturesUi?.areaWins(currentClip())) { guard(() => picturesUi.paste({ own: currentClip(), ownOk: false })); return; }
      if (name === 'paste') startPaste(currentClip());
      else guard(() => pasteInPlace(currentClip()));
      return;
    }
    if (name === 'duplicate') {
      if (why) { status(why); return; }
      if (copyPicked(true)) startPaste(clip, true);
      return;
    }
    if (name === 'select-all') {
      if (why) { status(why); return; }
      if (placing) stopPlacing();
      const keys = [...viewer.shownKeys()];
      viewer.select(keys);
      if (keys.length > 1) showMany(); else showProps(viewer.selected);
      afterPick();
      status(t('edit.selectall.done', { n: keys.length }));
      return;
    }
    if (name === 'delete' || name === 'cut') {
      if (why) { status(why); return; }
      guard(() => deletePicked(name === 'cut'));
      return;
    }
    status(why || t('edit.notbuilt'));
  }

  /** Delete the picked elements (with their parts and openings) — or Cut: copy them first. One undo step. */
  async function deletePicked(isCut) {
    const list = editable(), refused = picks().length - list.length;
    if (isCut && !copyPicked(true, true)) return;
    const label = list.length === 1 ? classOfId(list[0]).replace(/^Ifc/, '') + ' ' + (ifc.api.GetLine(model.modelID, list[0]).Name?.value || '#' + list[0]) : t('edit.many', { n: list.length });
    const r = editor.removeElements(list, { label });
    viewer.select(null);
    await rebuild(null);
    const extra = r.removed.length - list.length;
    status((isCut ? t('edit.cut.done', { n: list.length }) : t('edit.delete.done', { n: list.length }))
      + (extra > 0 ? ' ' + t('edit.delete.parts', { n: extra }) : '')
      + (refused ? ' ' + t('edit.refused.some', { n: refused }) : ''));
  }

  function redo() {
    let c;
    try { c = editor.redo(); } catch (e) { console.error(e); status(t('edit.redo.failed', { why: e.message || e }), true); syncEdit(); return; }
    if (!c) return;
    undoHook.redone();   // 0.8 EG.77
    if (c.journal) { guard(async () => { await rebuild(c.kind === 'place' ? c.id : editor.now(c.id)); status(t('edit.redid.step', { what: c.label || c.kind })); }); return; }
    status(t('edit.redid', { what: c.kind === 'attr' ? c.attr : c.propName }));
    afterEdit();
  }

  /**
   * Copy the picked element(s). ONE placed library item → a placement clip (and its text), so it pastes into any model;
   * anything else, several elements, or a Cut → an elements clip (snapshot kept in memory, names and properties as text).
   */
  function copyPicked(quiet = false, isCut = false) {
    const now = new Date().toISOString();
    if (isCut || !selInfo || !selInfo.placement || picks().length > 1) return copyElements(now, quiet, isCut);
    const p = selInfo.p;
    copyText(elementText(p));
    if (selInfo.placement) {
      const placer = editor.placer();
      const pl = placer.placements().find((x) => x.id === selInfo.id);
      if (!pl) { status(t('edit.copy.noplacement'), true); return false; }
      const kept = libItems.get(libKey(pl));
      const st = placer.info().storeys.find((s) => s.id === pl.storey);
      clip = placementClip(pl, {
        model: modelTag, file: ifcName, storeyName: st?.name || '', storeyElevation: st ? st.elevation : null, now,
        item: kept ? kept.item : null, meta: kept ? kept.meta : null,
        box: kept ? boxFromItem(kept.item) : boxFromEquipment(pl.equipment, placer.unitMm),
      });
      const w = writeClip(store, clip);
      syncEdit();
      if (!quiet) status((clip.itemNumber ? t('edit.copy.item.no', { name: clip.name, no: clip.itemNumber }) : t('edit.copy.item', { name: clip.name }))
        + (w.withoutItem ? ' ' + t('edit.copy.toolarge') : ''));
      return true;
    }
    return copyElements(now, quiet, false);
  }

  /** An elements clip: snapshot in memory, anchor and box from the meshes (model mm), the text on the system clipboard. */
  function copyElements(now, quiet, isCut) {
    const list = editable();
    if (!list.length) { status(t('edit.refused.spatial')); return false; }
    const snap = editor.snapshot(list);
    const C = coordMatrix(), bb = boundsOf(model.batches, snap.elements.map((e) => model.keyBase + e.id));
    const info = editor.placer().info();
    const st = info.storeys.find((x) => x.id === snap.storey);
    const zb = st ? st.elevation : 0;
    let box = null, ax = 0, ay = 0, rot = 0;
    if (snap.frame) {
      // turned like the element (ifc-place.js elementsFrame): a door in a building turned in its site keeps its own shape,
      // and the ghost, wall snap and paste turn from there, not from the model's axes (Discord bug, 2026-10-14)
      ({ x: ax, y: ay, rot, box } = snap.frame);
    } else if (bb) {
      const pts = [];
      for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) pts.push(fromViewer(C, [x, y, z]));
      const lo = [0, 1, 2].map((k) => Math.min(...pts.map((q) => q[k]))), hi = [0, 1, 2].map((k) => Math.max(...pts.map((q) => q[k])));
      ax = (lo[0] + hi[0]) / 2; ay = (lo[1] + hi[1]) / 2;
      box = { x0: lo[0] - ax, y0: lo[1] - ay, z0: lo[2] - zb, x1: Math.max(hi[0] - ax, lo[0] - ax + 1), y1: Math.max(hi[1] - ay, lo[1] - ay + 1), z1: Math.max(hi[2] - zb, lo[2] - zb) };
    } else {
      const pl = ifc.api.GetLine(model.modelID, list[0]).ObjectPlacement?.value;
      if (pl) { const w = ifc.api.GetWorldTransformMatrix(model.modelID, pl); ax = w[12] * info.unitMm; ay = w[13] * info.unitMm; }
    }
    const rows = list.map((id) => { const l = ifc.api.GetLine(model.modelID, id); return { id, name: l.Name?.value || '', cls: classOfId(id), guid: l.GlobalId?.value || '' }; });
    clip = elementsClip(rows, { model: modelTag, file: ifcName, now, storey: snap.storey, storeyName: st?.name || '', storeyElevation: st ? st.elevation : null, x: ax, y: ay, rot, box, cut: isCut });
    elementSnaps.clear();   // one clip at a time: an older snapshot is never pasted
    elementSnaps.set(clip.copiedAt, { snap, cut: isCut, pasted: 0 });
    writeClip(store, clip);
    if (list.length === 1 && selInfo && selInfo.id === list[0]) copyText(elementText(selInfo.p));
    else copyText(rows.map((r) => r.cls.replace(/^Ifc/, '') + ': ' + (r.name || t('prop.unnamed')) + (r.guid ? ' (' + r.guid + ')' : '')).join('\n') + '\n');
    syncEdit();
    if (!quiet) status(t('edit.copy.done', { n: list.length }));
    return true;
  }

  /** Text to the system clipboard; a hidden textarea when the Clipboard API is refused; else a dialog to copy from. */
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return; } catch (e) { /* not allowed here: try the old way */ }
    const ta = el('textarea', { readOnly: true, 'aria-hidden': 'true', className: 'bc-offscreen' });
    ta.value = text;
    document.body.append(ta);
    ta.select();
    let done = false;
    try { done = document.execCommand('copy'); } catch (e) { done = false; }
    ta.remove();
    if (done) return;
    const box = el('textarea', { className: 'bc-input bc-copy-text', readOnly: true, rows: 12, 'aria-label': t('clip.text.label') });
    box.value = text;
    dialog(t('clip.text.title'), el('div', {}, el('p', { className: 'bc-muted' }, t('clip.text.hint')), box));
    box.focus();
    box.select();
  }

  /** Paste with the pointer: the placing bar and ghost; each click places another copy until Esc. */
  function startPaste(c, dup = false) {
    const item = ghostItem(c);
    startPlacing({ item, meta: { sha256: c.meta?.sha256 || '' } }, c);
    if (placing && c.kind === 'elements') { status(t(dup ? 'edit.duplicate.start' : 'edit.paste.start', { n: c.count })); return; }
    if (placing) status(t(dup ? 'edit.dup.item' : 'edit.paste.item', { name: c.name }));
  }

  /** One pasted copy: like its source in the model it came from, else from the kept library item. */
  function pastePlacement(c, at) {
    const opts = { storey: at.storey, x: at.x, y: at.y, rot: at.rot, itemNumber: editor.placer().nextItemNumber(), quantity: c.quantity, notes: c.notes };
    const src = clipSource(c);
    if (src) return { r: editor.placeLike(src.id, opts, { label: c.name }), opts };
    if (!c.item) throw new Error(whyNot('paste'));
    const h = c.box ? Math.round(c.box.z1 - c.box.z0) : 900;
    const r = editor.placeItem(c.item, { ...opts, library: c.meta?.library, sha256: c.meta?.sha256 || '', sourceFile: c.meta?.sourceFile || '', variant: c.meta?.variant || null, standInHeight: c.item.body ? 0 : Math.max(1, h) });
    rememberItem({ item: c.item, meta: c.meta || {} });
    return { r, opts };
  }
  /** Paste an elements clip: copies of the snapshot moved from the clip's anchor to `at` (storey, x, y, rot). */
  async function pasteElementsAt(c, at, how) {
    const kept = elementSnaps.get(c.copiedAt);
    if (!kept || c.model !== modelTag) { status(whyNot('paste')); return; }
    const r = editor.pasteElements(kept.snap, { storey: at.storey, ...pasteMove(c, at), keepNumbers: kept.cut && !kept.pasted },
      { label: c.count === 1 ? (c.cls || '').replace(/^Ifc/, '') + ' ' + (c.name || '') : t('edit.many', { n: c.count }) });
    kept.pasted++;
    await rebuild(r.ids[0]);
    viewer.select(r.ids.map((id) => model.keyBase + id));
    if (r.ids.length > 1) showMany();
    afterPick();
    status(t(how === 'place' ? 'edit.paste.inplace' : how === 'beside' ? 'edit.paste.beside' : 'edit.paste.done', { n: r.ids.length }));
    if (placing) viewer.setGhost(null);
  }
  async function commitPaste(c, at) {
    if (c.kind === 'elements') { await pasteElementsAt(c, at, 'click'); return; }
    const { r, opts } = pastePlacement(c, at);
    await rebuild(r.id);
    status(t('edit.pasted.item', { name: c.name, no: opts.itemNumber }));
    if (placing) { placing.faces = placing.snap ? editor.placer().wallFaces(Number(pb.storey.value)) : null; viewer.setGhost(null); }
  }
  /** Paste in place: same X, Y and turn; beside the original when it is still on that storey (an exact overlap helps no one). */
  async function pasteInPlace(c) {
    if (c.kind === 'elements') {
      // beside the originals while they are still in the model (an exact overlap helps no one), else exactly in place
      const still = c.ids.some((id) => model.classOf.has(editor.now(id)));
      const at = still ? { storey: c.storey, ...besideSpot(c) } : { storey: c.storey, x: c.x, y: c.y, rot: c.rot || 0 };
      await pasteElementsAt(c, at, still ? 'beside' : 'place');
      return;
    }
    const storeys = editor.placer().info().storeys;
    const src = clipSource(c);
    const st = pickStorey(c, storeys, !!src || c.model === modelTag);
    if (!st) { status(t('edit.paste.nostoreys'), true); return; }
    let at = { storey: st.id, x: c.x, y: c.y, rot: c.rot }, beside = false;
    if (src && src.storey === st.id) { at = { storey: st.id, ...besideSpot(c) }; beside = true; }
    const { r, opts } = pastePlacement(c, at);
    await rebuild(r.id);
    const where = storeys.find((s) => s.id === st.id)?.name || t('edit.paste.thestorey');
    const HOW = { same: '', name: ' ' + t('edit.paste.how.name'), elevation: ' ' + t('edit.paste.how.elevation'), first: ' ' + t('edit.paste.how.first') };
    status(t(beside ? 'edit.pasted.inplace.beside' : 'edit.pasted.inplace.same', { name: c.name, no: opts.itemNumber, storey: where, how: HOW[st.how] }));
  }

  function rememberItem(entry) {
    if (!entry || !entry.item) return;
    const key = entry.item.uuid ? entry.item.uuid + '@' + entry.item.version + (entry.meta?.variant?.id ? '#' + entry.meta.variant.id : '') : 'sha:' + (entry.meta?.sha256 || '');
    libItems.set(key, { item: entry.item, meta: { library: entry.meta?.library || (entry.item.uuid ? 'librarycraft' : 'file'), sha256: entry.meta?.sha256 || '', sourceFile: entry.meta?.sourceFile || '', ...(entry.meta?.variant ? { variant: entry.meta.variant } : {}) } });
  }

  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.altKey) return;
    const t = e.target;
    if (t.closest?.('input, textarea, select, [contenteditable="true"], dialog, [data-help-panel], [data-app-settings]')) return;
    if (document.querySelector('dialog[open]')) return;
    if (workspace?.active) return;   // F28-A exposes only its bounded commands; no hidden wall delete/copy.
    const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
    if (mode === 'dwg' && !ui.dwg.hidden && mod && k === 'c' && !e.shiftKey) {
      if (String(window.getSelection?.() || '')) return;   // copying text selected on the page: the browser's own copy
      status(NOT_BUILT.dwg);
      return;
    }
    if (mode !== 'ifc' || !editor || ui.canvasWrap.hidden) return;
    let name = null;
    if (mod) {
      if (k === 'c' && !e.shiftKey) { if (String(window.getSelection?.() || '')) return; name = 'copy'; }
      else if (k === 'x' && !e.shiftKey) name = 'cut';
      else if (k === 'v' && !e.shiftKey && picturesUi?.wantsKey({ own: currentClip(), ownOk: !whyNot('paste', { area: false }) })) {
        // 0.8 D8.15: not prevented, so the browser's paste event brings the system clipboard's picture (below); if no paste event
        // comes (a browser that sends none without a text field), Paste runs as from the menu
        pasteKey = setTimeout(() => { pasteKey = 0; act('paste'); }, 400);
        return;
      }
      else if (k === 'v') name = e.shiftKey ? 'paste-in-place' : 'paste';
      else if (k === 'd' && !e.shiftKey) name = 'duplicate';
      else if (k === 'a' && !e.shiftKey) name = 'select-all';
      else if (k === 'y' || (k === 'z' && e.shiftKey)) name = 'redo';
    } else if (e.key === 'Delete' && !e.shiftKey) {
      if (!picks().length) return;
      name = 'delete';
    }
    if (!name) return;
    e.preventDefault();
    act(name);
  });
  /** 0.8 D8.15: Ctrl+V let through above. A picture on the system clipboard → a picture on the plan (sized when it is the copied
   *  area's, picture-paste.js); no picture there → the newer of BimCraft's clip and the copied area, as Edit › Paste. */
  let pasteKey = 0;
  document.addEventListener('paste', (e) => {
    if (!pasteKey) return;   // only a Ctrl+V this page let through: a paste into a field, or one the shell handled, stays theirs
    clearTimeout(pasteKey); pasteKey = 0;
    if (e.target.closest?.('input, textarea, select, [contenteditable="true"]')) return;
    const file = [...(e.clipboardData?.items || [])].find((it) => it.kind === 'file' && /^image\//.test(it.type))?.getAsFile() || null;
    e.preventDefault();
    const own = currentClip(), ownOk = !whyNot('paste', { area: false });
    guard(async () => { if (!(await picturesUi.paste({ own, ownOk, file }))) act('paste'); });
  });
  syncEdit();

  // ---- Project bundles (0.6 DF.12 (b), session bim-interop; bundle-view.js): views, layouts, property groups ----
  bundleUi = mountBundle({
    panel: ui.info,
    status: (text, isError, fade) => status(text, isError, fade),
    mode: () => mode,
    openModel: (data, file) => openIfc(data, file, null),
    openFile: (file) => open(file, null, { keepBundle: true }),
    // 0.7 BIM-BUNDLE-OPEN: a layout's DWG to the drafting app, its PDF to the markup app (only where that app is open here and takes a handoff)
    apps: { dwg: root.dataset.editUrl ? { url: root.dataset.editUrl, name: root.dataset.editApp } : null, pdf: root.dataset.pdfUrl ? { url: root.dataset.pdfUrl, name: root.dataset.pdfApp } : null },
    // the tab opens inside the click (pop-up blockers), the file is read from the zip while it loads: handoff.js's own two steps
    handoff: async (app, getFile) => {
      const id = newHandoffId(), tab = window.open(app.url + '?handoff=' + id, '_blank');
      if (!tab) throw Object.assign(new Error('The browser blocked the new tab.'), { code: 'blocked' });   // i18n-ignore: only e.code is shown
      try { await putHandoff(id, await getFile(), 'bimcraft'); } catch (e) { tab.close(); throw e; }
      return tab;
    },
    download: (name, data, type) => download(name, data, type),
    viewer: () => viewer,
    model: () => cur(),
    afterVis: () => syncVis(),
  });
  window.bimcraftBundle = bundleUi;   // tests
  // 0.6 LC.4 (analysis-bim-ui.js): frame analysis of the open model's beams, columns and braces — settings kept in the IFC
  analysisUi = mountAnalysisBim({
    pane: rPanel.querySelector('[data-analysis]'), W: WebIFC,
    editor: () => (mode === 'ifc' ? editor : null),
    viewer: () => viewer,
    selection: () => (viewer ? [...viewer.selection] : []),
    select: (keys) => { if (!viewer) return; viewer.select(keys.length ? keys : null); afterPick(); if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected); else clearProps(); },
    status: (text, isError) => status(text, isError),
    download: (name, data, type) => download(name, data, type),
    fileName: () => ifcName,
    afterEdit: () => afterEdit(),
    place: (p) => toWorld(toViewer(coordMatrix(), p)),
    shown: () => !rPanel.querySelector('[data-rpane="analysis"]')?.hidden,
    setFrameProblems: (list) => { frameProblems = list; frameSet?.(list); },   // 0.8 SU.1056
    setBreakProblems: (list) => { breakProblems = list; breakSet?.(list); },   // 0.8 EG.31: "What breaks first?" findings in the shell's Problems
  });
  window.bimcraftAnalysis = analysisUi;   // tests
  // 0.6 LC.22 (layout-bim-ui.js): field points from the model, written for a total station; as-built points compared
  pointsUi = mountFieldPoints({
    pane: rPanel.querySelector('[data-points]'), W: WebIFC,
    editor: () => (mode === 'ifc' ? editor : null),
    viewer: () => viewer,
    selection: () => (viewer ? [...viewer.selection] : []),
    status: (text, isError) => status(text, isError),
    download: (name, data, type) => download(name, data, type),
    fileName: () => ifcName,
    place: (p) => toWorld(toViewer(coordMatrix(), p)),
    shown: () => !rPanel.querySelector('[data-rpane="points"]')?.hidden,
  });
  window.bimcraftPoints = pointsUi;   // tests
  // 0.6 LC.12 (assets-bim-ui.js): the model's assets, their data and a maintenance record, kept in the IFC
  assetsUi = mountAssets({
    pane: rPanel.querySelector('[data-assets]'), W: WebIFC,
    editor: () => (mode === 'ifc' ? editor : null),
    viewer: () => viewer,
    selection: () => (viewer ? [...viewer.selection] : []),
    select: (keys) => { if (!viewer) return; viewer.select(keys.length ? keys : null); afterPick(); if (viewer.selection.size) showProps(viewer.selected); },
    status: (text, isError) => status(text, isError),
    download: (name, data, type) => download(name, data, type),
    fileName: () => ifcName,
    afterEdit: () => afterEdit(),
    shown: () => !rPanel.querySelector('[data-rpane="assets"]')?.hidden,
    storeyName: (id) => String((cur()?.model?.storeys || []).find((s) => s.id === id)?.name || ''),
    today: () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); },
  });
  window.bimcraftAssets = assetsUi;   // tests
  // 0.8 SU.915 + SU.889 (session sx-tags; tags-ui.js, doc-ui.js): tags kept in the IFC, a schedule that reads them, documents from templates
  tagsUi = mountTags({
    root, W: WebIFC,
    editor: () => (mode === 'ifc' ? editor : null),
    model: () => (mode === 'ifc' ? model : null),
    tasks: () => fdTasks || [],   // 0.8 EG.17 (energy_PART_2's mount line 2): the parsed 4D tasks cost5d_check prices
    selection: () => (viewer ? [...viewer.selection] : []),
    select: (keys) => { if (!viewer) return; viewer.select(keys.length ? keys : null); afterPick(); if (viewer.selection.size) showProps(viewer.selected); },
    status: (text, isError) => status(text, isError),
    download: (name, data, type) => download(name, data, type),
    fileName: () => ifcName,
    afterEdit: () => { propIx = null; afterEdit(); renderQto(); },   // the Quantities panel and Find see the new CadCraft_Tags values
  });
  window.bimcraftTags = tagsUi;   // tests
  // 0.8 EG.59 (bim_PART_2; phases-ui.js): existing / demolish / new in the IFC, phase views, the demolition list
  phasesUi = mountPhases({
    root, W: WebIFC,
    editor: () => (mode === 'ifc' ? editor : null),
    model: () => (mode === 'ifc' ? model : null),
    selection: () => (viewer ? [...viewer.selection] : []),
    status: (text, isError) => status(text, isError),
    download: (name, data, type) => download(name, data, type),
    fileName: () => ifcName,
    afterEdit: () => { propIx = null; afterEdit(); renderQto(); },
    applyView: (v) => {
      if (!viewer) return;
      if (!v) viewer.vis.showAll(); else viewer.vis.isolate(v.show, { ghost: v.ghost.length > 0 });   // the rest is see-through when something is to be shown ghosted, else hidden
      viewer.applyVisibility(); syncVis();
    },
  });
  window.bimcraftPhases = phasesUi;   // tests
  // 0.8 EG.44 (bim_PART_2; permit-ui.js): the regulation check, the problems, sheets and forms into one zip with the comments a reviewer is likely to make
  const permitUi = mountPermit({ root, editor: () => (mode === 'ifc' ? editor : null), status: (text, isError) => status(text, isError), download: (name, data, type) => download(name, data, type), fileName: () => ifcName });
  root.querySelector('[data-eg44-details]')?.addEventListener('toggle', (e) => { if (e.target.open) permitUi?.render(); });
  window.bimcraftPermit = permitUi;   // tests
  // 0.8 EG.1–EG.4 (mep_PART_2; mep-calc-ui.js): pipe, duct, cable and lighting calculations in a right-panel tab; the sizes that fix a problem apply as ONE undo step
  const calcPane = rPanel.querySelector('[data-mepcalc]');
  if (calcPane) {
    mepCalcUi = mountMepCalc(calcPane, {
      w: () => { if (!editor || mode !== 'ifc') throw new Error(t('mepc.needs-ifc')); return new ModelWriter(editor.W, editor.api, editor.mid); },
      apply: async (label, op) => { if (!editor || mode !== 'ifc') throw new Error(t('mepc.needs-ifc')); const r = editor.modelChange(op, { label, verb: t('mepc.verb') }); propIx = null; afterEdit(); renderQto(); return r; },
      problems: window.ccProblems,
      save: (name, text) => download(name, text, 'text/csv'),
    });
    window.bimcraftMepCalc = mepCalcUi;   // tests
  }
  // 0.8 EG.13–EG.17 (energy_PART_2's mount line 1; mounted by bim-sim_PART_2): the EnergyPlus, embodied carbon, 5D cost and solar panes in one Energy tab.
  // They read the model's settings when they are made, so they are made when the tab is shown with a model open, and again for the next model.
  const energyPane = rPanel.querySelector('[data-energy]');
  let energyFor = null;
  mountEnergy = () => {
    if (!energyPane || mode !== 'ifc' || !editor || !model || (energyFor === model && energyUis)) return;
    const needIfc = () => { if (!editor || mode !== 'ifc') throw new Error(t('mepc.needs-ifc')); };
    const energyApp = {
      w: () => { needIfc(); return new ModelWriter(editor.W, editor.api, editor.mid); },
      ed: () => { needIfc(); return editor; },
      apply: async (label, op) => { needIfc(); const r = editor.modelChange(op, { label, verb: t('energy.verb') }); propIx = null; afterEdit(); renderQto(); return r; },
      problems: window.ccProblems,
      save: (name, text) => download(name, text, /\.json$/i.test(name) ? 'application/json' : /\.idf$/i.test(name) ? 'text/plain' : 'text/csv'),
      index: () => (mode === 'ifc' && model ? index() : null),
      tasks: () => fdTasks || [],
    };
    const sub = (k) => { const n = energyPane.querySelector('[data-energy-' + k + ']'); n?.replaceChildren(); return n; };
    const one = (fn, k) => { try { return fn(sub(k), energyApp); } catch (err) { console.warn('energy pane ' + k, err); return null; } };
    energyUis = { ep: one(mountEnergyEp, 'ep'), carbon: one(mountCarbon, 'carbon'), cost: one(mountCost5d, 'cost'), pv: one(mountPv, 'pv') };
    energyFor = model;
    window.bimcraftEnergy = energyUis;   // tests
  };
  // 0.8 EG.30 (energy_PART_2 mount line 3; bim_PART_3): the model's embodied carbon and priced cost feed the shell's running totals. A source says
  // nothing (null) until there is a model with elements (carbon) or a price table (cost); the price table carries no currency, so the total says so.
  {
    const feed = () => {
      const T = window.ccTotals;
      if (!T || feed.done) return;
      feed.done = true;
      const wr = () => (editor && mode === 'ifc' && model ? new ModelWriter(editor.W, editor.api, editor.mid) : null);
      const carbon = T.source({ id: 'bim.carbon', measure: 'carbon', label: t('totals.carbon'), read: () => { const w = wr(); if (!w) return null; const r = carbonTotal(w); return r.empty ? null : { value: r.kg, note: r.unmatched || r.missing ? t('totals.carbon.left', { n: r.unmatched + r.missing }) : undefined }; } });
      const cost = T.source({ id: 'bim.cost', measure: 'cost', label: t('totals.cost'), read: () => { const w = wr(); if (!w) return null; const cs = readCostSettings(w), rows = cs.rows; if (!rows.length) return null; const r = costTotal(w, { rows, matched: fdTasks || [], keyBase: index()?.keyBase || 0 }); return { value: r.cost, currency: cs.shownIn, note: (cs.currencyDefaulted ? t('totals.cost.defaultcur', { cur: cs.shownIn }) : '') + (r.unpriced ? ' ' + t('totals.cost.unpriced', { n: r.unpriced }) : '') }; } });
      const time = T.source({ id: 'bim.time', measure: 'time', label: t('totals.time'), read: () => { const h = scheduleHours(fdTasks); return h === null ? null : { value: h, note: t('totals.time.note') }; } });   // the 4D schedule as working time (shell-mount.js scheduleHours)
      bimTotalsInvalidate = () => { carbon.invalidate(); cost.invalidate(); time.invalidate(); };
    };
    window.ccTotals ? feed() : document.addEventListener('cc-totals-ready', feed, { once: true });
  }
  // 0.8 EG.60 + EG.58 (bim_PART_2; design-ui.js): furnish a room by rules; a room program into massing options, built as levels, walls and slabs
  const designHost = { root, editor: () => (mode === 'ifc' ? editor : null), frameModel: () => analysisUi?.frameModel?.() || null, viewer: () => viewer, place: (p) => toWorld(toViewer(coordMatrix(), p)), status: (text, isError) => status(text, isError), download: (name, data, type) => download(name, data, type), fileName: () => ifcName, afterEdit: () => { propIx = null; afterEdit(); renderQto(); } };
  const furnishUi = mountFurnish(designHost), programUi = mountProgram(designHost);
  root.querySelector('[data-eg60-details]')?.addEventListener('toggle', (e) => { if (e.target.open) furnishUi?.render(); });
  window.bimcraftFurnish = furnishUi; window.bimcraftProgram = programUi;   // tests
  // 0.8 EG.48 (bim-sim_PART_2; people-ui.js): evacuation and arrivals, queues at doors and stairs, a plan that plays the run
  const peopleUi = mountPeople({ ...designHost, problems: window.ccProblems });
  root.querySelector('[data-eg48-details]')?.addEventListener('toggle', (e) => { if (e.target.open) peopleUi?.render(); });
  window.bimcraftPeople = peopleUi;   // tests
  // 0.8 EG.49 (bim-sim_PART_2; acoustics-ui.js): reverberation by band for each room, a target, and listening through a computed impulse response
  const acousticsUi = mountAcoustics({ ...designHost, problems: window.ccProblems });
  root.querySelector('[data-eg49-details]')?.addEventListener('toggle', (e) => { if (e.target.open) acousticsUi?.render(); });
  window.bimcraftAcoustics = acousticsUi;   // tests
  // 0.8 EG.47 (bim-sim_PART_2; hazard-ui.js): a flood through the rooms, wind on the storeys, an earthquake shaking them
  const hazardUi = mountHazard({ ...designHost, problems: window.ccProblems });
  root.querySelector('[data-eg47-details]')?.addEventListener('toggle', (e) => { if (e.target.open) hazardUi?.render(); });
  window.bimcraftHazard = hazardUi;   // tests
  // 0.8 EG.45 (bim-sim_PART_2; lifecycle-ui.js): what wears out over fifty years and when it is replaced
  const lifecycleUi = mountLifecycle(designHost);
  root.querySelector('[data-eg45-details]')?.addEventListener('toggle', (e) => { if (e.target.open) lifecycleUi?.render(); });
  window.bimcraftLifecycle = lifecycleUi;   // tests
  // 0.6 LC.20 (daylight-bim-ui.js): each room's average daylight factor, the sky angle measured in the model
  daylightUi = mountDaylight({
    pane: rPanel.querySelector('[data-daylight]'), W: WebIFC,
    editor: () => (mode === 'ifc' ? editor : null),
    select: (keys) => { if (!viewer) return; viewer.select(keys.length ? keys : null); afterPick(); },
    status: (text, isError) => status(text, isError),
    download: (name, data, type) => download(name, data, type),
    fileName: () => ifcName,
    shown: () => !rPanel.querySelector('[data-rpane="daylight"]')?.hidden,
    storeyName: (id) => String((cur()?.model?.storeys || []).find((s) => s.id === id)?.name || ''),
    afterEdit: () => afterEdit(),   // 0.7 LC.20: typed U-values (energy-bim-ui.js) refresh the model like any edit
  });
  window.bimcraftDaylight = daylightUi;   // tests
  // 0.6 DF.12 (c): between two BIM programs (interop-view.js) — the section follows the Models section's own `hidden`
  if (ui.modelsSec) window.bimcraftInterop = mountInterop({
    after: ui.modelsSec, W: WebIFC, models: () => models, active: () => cur(),
    manifest: () => bundleUi?.state()?.manifest || null,
    download: (name, data, type) => download(name, data, type),
    status: (text, isError, fade) => status(text, isError, fade),
  });

  // ---- Draw (0.5 part 3, track BM; model-ui.js): the plan view of a level and the building tools ----
  modelUi = mountModel({
    root,
    editor: () => (mode === 'ifc' ? editor : null),
    model: () => (mode === 'ifc' ? model : null),
    ifc: () => ifc,
    viewer: () => viewer,
    rebuild: (key) => rebuild(key),
    select: (keys) => {
      if (!viewer) return;
      viewer.select(keys.length ? keys : null);
      afterPick();
      if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected); else clearProps();
    },
    status: (text, isError) => status(text, isError),
    afterEdit: () => renderChanges(),
    download: (name, data, type) => download(name, data, type),   // schedules' CSV, the plan's PDF
    fileName: () => ifcName,
    coords: () => coordsUi,   // 0.6 DF.15: the plan's readout and markers
    // 0.8 BIM-FAM-MORE (family-ui.js): a family's hotspots as grips in the 3D view. list = [{ p: [x, y, z] model mm, kind }] | null; h = { start(i, e), move(i, ray { o, d: model mm }, e), end(i, e) }.
    // false while the section box owns the grips.
    grips3d: (list, h) => {
      if (!viewer) return false;
      if (!list || !list.length) { if (hot3d) { hot3d = null; viewer.setGrips(null); } return true; }
      if (cut && cut.axis === 'box') return false;
      const C = coordMatrix(), rel = (mm) => viewer.relPoint(toWorld(toViewer(C, mm)));
      const mmOf = (r) => fromViewer(C, toLocal(viewer.ifcPoint(r).toArray()));
      hot3d = { on: (phase, i, e) => {
        const r = viewer.rayIfc(e.clientX, e.clientY), o = mmOf(r.o), q = mmOf([r.o[0] + r.d[0], r.o[1] + r.d[1], r.o[2] + r.d[2]]);
        h[phase === 'start' ? 'start' : phase === 'end' ? 'end' : 'move'](i, { o, d: [q[0] - o[0], q[1] - o[1], q[2] - o[2]] }, e);
      } };
      viewer.setGrips(list.map((g) => ({ p: rel(g.p), kind: g.kind || 'corner' })), -1);
      return true;
    },
    // 0.8 D8.3 (modify-ui.js): pointer points inside the 3D view — h = { move(mm|null, e), click(mm, e) } on the plane at a level's height (model mm, plan coordinates); null stops. false while an item is being placed.
    pointer3d: (elevMm, h) => {
      if (!viewer) return false;
      if (!h) { if (viewer.placing && viewer.placing.ownerTag === 'pointer3d') viewer.placing = null; return true; }
      if (placing || (viewer.placing && viewer.placing.ownerTag !== 'pointer3d')) return false;
      viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, elevMm]))[1];
      const mm = (pt) => (pt ? fromViewer(coordMatrix(), toLocal([pt.x, pt.y, pt.z])).slice(0, 2) : null);
      viewer.placing = { ownerTag: 'pointer3d', move: (pt, e) => h.move(mm(pt), e), click: (pt, e) => h.click(mm(pt), e) };
      return true;
    },
  });
  if (modelUi) mountRes(modelUi);   // 0.5 part 4, track RC (res-ui.js): the residential tools join the plan's tools
  if (modelUi) mountTrim(modelUi);   // 0.6 DF.17 (model-trim-ui.js): trim, extend and corner walls
  if (modelUi) mountStairSketch(modelUi);   // 0.8 SU.1055 (stair-sketch-ui.js)
  if (modelUi) mountPens(modelUi);   // 0.8 SU.1055 (pens-ui.js)
  if (modelUi) mountPhasePlan(modelUi, phasesUi);   // 0.8 EG.59: walls drawn in their phase's pen on the plan and the printed plan (phases-ui.js)
  if (modelUi) picturesUi = mountPicture(modelUi, { viewer: () => viewer, entry: () => (mode === 'ifc' ? cur() : null), save: () => saveIfc() });   // 0.8 D8.8 (picture-ui.js)
  if (modelUi) mountTraceRef(modelUi);   // 0.8 SU.1055 (trace-ref-ui.js)
  if (modelUi) mountModify(modelUi);   // 0.8 D8.3 (modify-ui.js)
  if (modelUi) mountSymbols(modelUi);   // 0.8 GH.3-F/G (symbols-ui.js): Build › Symbol palette; plumbing plan symbols
  if (modelUi) mountGrids(modelUi);   // 0.6 DF.16 (model-grids-ui.js): grids and columns
  if (modelUi) mountFloors(modelUi);   // 0.6 DF.18 (model-floors-ui.js): floors of any shape, ramps
  if (modelUi) mountSite(modelUi);   // 0.6 DF.20 (model-site-ui.js): the site, the building on it, levels
  if (modelUi) mountSiteMass(modelUi);   // 0.7 LC.1 B2 (model-site-mass-ui.js): a CivilCraft building mass in Properties
  if (modelUi) mountMep(modelUi);   // 0.6 DF.29 (mep-ui.js): pipe and duct runs with their fittings, valves
  if (modelUi) mountHvac(modelUi);   // 0.8 SU.888 (sx-mep, mep/hvac-ui.js): Build › Line set and Line set sizes
  if (modelUi) mountWallAssemblies(modelUi);
  if (modelUi) mountWallDimensions(modelUi);
  if (modelUi) mountFamilies(modelUi);   // 0.6 DC.114 (family-ui.js): Families (before the project browser, which lists them)
  if (modelUi) planViews = mountViewsBim(modelUi);   // 0.6 DF.19 (views-ui.js): the project browser, view ranges, templates, sheets
  if (modelUi) mountComforts(modelUi);   // 0.6 round 2 (comforts-ui.js): drawing comforts — moving library items, dormers
  // 0.6 DF.25 (agents.js): an assistant draws walls, doors, windows, floors, levels and grids, each one undo step "Assistant: …"
  if (modelUi) installAgents(modelUi, {
    control: fileHost.control,
    frameModel: () => analysisUi?.frameModel?.() || null,   // 0.8 EG.47 (bim-sim_PART_3): hazard_run source 'frame'
    ask: {   // 0.8 AC.8 ★ (bim_PART_2; ask-tools.js): the answer is selected and framed in 3D (view state only: nothing in the model changes)
      index: () => (mode === 'ifc' && model ? index() : null),
      spacesIndex: () => (mode === 'ifc' && model ? spacesIndex() : null),
      model: () => (mode === 'ifc' ? model : null),
      name: () => ifcName,
      bounds: (keys) => (viewer ? viewer.keyBoundsMap(keys) : new Map()),
      highlight: (keys, { frame = true } = {}) => {
        viewer.vis.showAll(); viewer.applyVisibility();
        viewer.select(keys); afterPick(); if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected);
        if (frame) viewer.frameKeys(keys);
        status(t('ask.found', { n: keys.length }));
      },
    },
    analysis: () => analysisUi?.panel || null,   // 0.8 EG.31: frame_break runs the Analysis tab's Break it
    model: () => (mode === 'ifc' ? model : null),
    selection: () => (viewer ? [...viewer.selection] : []),
    select: (keys) => { if (!viewer) return; viewer.select(keys.length ? keys : null); afterPick(); if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected); else clearProps(); },
    save: () => saveIfc(),
    usd: (format) => (viewer && mode === 'ifc' && models.length ? makeUsd(format) : null),   // 0.7 AS.6
    render: async () => {   // 0.7 AS.6 (assistants-gaps): render_still / render_queue, through the Render dialog's own hooks
      if (!viewer || mode !== 'ifc' || viewer.box.isEmpty()) throw new Error('Open an IFC model in the 3D view first.');   // i18n-ignore: read by the assistant
      modelUi?.need3d();
      const H = await renderHooks();
      let saved = H.saved;
      return { scene: H.scene, viewSize: () => ({ w: ui.canvas.clientWidth, h: ui.canvas.clientHeight }), settings: () => { try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { /* the last one read */ } return saved; },
        fileBase: () => (ifcName || 'model').replace(/\.ifc$/i, ''), download: (blob, name) => fileHost.download(blob, name, blob.type || 'image/png'), appName: 'BimCraft' };
    },
    download: (blob, name, type) => fileHost.download(blob, name, type),
    undo: async () => { if (coreCommands) coreCommands.execute('undo'); else ui.undo.click(); },
    busy: () => (busy ? 'opening or saving a file' : placing ? 'placing a library item' : null),   // i18n-ignore: read by the assistant
  });
  bimShell = mountBimShell({
    ifc: () => ifc, model: () => model, editor: () => editor, mode: () => mode, control: fileHost.control, saved: () => savedOnce, name: () => ifcName || 'model',
    selection: () => (viewer ? [...viewer.selection] : []),
    select: (keys) => { if (!viewer) return; viewer.select(keys.length ? keys : null); afterPick(); if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected); else clearProps(); },
    onSelection: (fn) => { const h = () => fn(); document.addEventListener('click', h); return () => document.removeEventListener('click', h); },
    after: () => afterEdit(),
  });
  // 0.6 DF.22 (cloud-slice-ui.js): a point cloud's slice on the plan; the cloud is cloud-ui.js's (pc, made on its first open)
  if (modelUi) mountTrace(modelUi, { readDrawing: (bytes, kind) => readDrawingModel(bytes, kind) });   // 0.6 DF.23 (model-trace-ui.js)
  // 0.6 DF.21 (links-ui.js): linked models are federation entries flagged `link`, placed by an `adjust` matrix
  if (modelUi) linksUi = mountLinks(modelUi, {
    root, fileHost, status: (text, isError, fade) => status(text, isError, fade),
    fed: {
      add: (file, opts) => addModel(file, opts), remove: (ent) => removeModel(ent), models: () => models, host: () => (mode === 'ifc' ? cur() : null),
      setMatrix: (ent, M) => { ent.matrix = M; viewer.setModelMatrix(ent.mi, placementOf(ent)); if (cut) applySection(); viewer.render(); },
      viewer: () => viewer, refresh: () => renderModels(),
    },
  });
  if (modelUi) mountPanels(modelUi);   // 0.8 EG.6 (bim-build_PART_5)
  if (modelUi) siteCtxUi = mountSiteContext(modelUi);   // 0.8 EG.63 (civil_PART_4)
  // 0.8 EG.39 (scan-progress-ui.js): a scan against the model's elements and the 4D schedule
  const scanProgElementKeys = () => { const ix = index(); if (!ix) return []; const skip = /^Ifc(Space|OpeningElement|VirtualElement|Annotation|Grid|Zone|Site|Building|BuildingStorey|Project)$/; const cls = new Map(ix.values('cls')); return ix.keys.filter((k) => !skip.test(String(cls.get(k - ix.keyBase) ?? ''))); };
  scanProgUi = mountScanProgress({
    pane: ui.sp,
    cloud: () => { const L = pc?.has?.() ? pc.layer?.() : null; if (!L?.cloud || !L.points) return null; L.points.updateMatrixWorld(true); return { cloud: L.cloud, matrix: [...L.points.matrixWorld.elements] }; },
    keys: scanProgElementKeys,
    bounds: (keys) => (viewer ? viewer.keyBoundsMap(keys) : new Map()),
    expected: () => (fdTasks ? statusAt(fdView(), fdDay) : null),
    dayLabel: () => (fdTasks && fdDay !== null ? dayText(fdDay) : ''),
    name: (k) => nameOfKey(k), guid: (k) => guidOf(k),
    select: (keys) => { if (!viewer) return; viewer.select(keys); afterPick(); if (viewer.selection.size) showProps(viewer.selected); },
    setColors: (m) => { if (!viewer) return; if (m && colorField) colorOff(); viewer.setColors(m); },
    setProblems: (list) => { scanProgProblems = list; brkScanSet?.(list); },
    status: (text, isError) => status(text, isError),
    download: (name, data, type) => download(name, data, type), fileName: () => ifcName,
  });
  window.bimcraftScanProgress = scanProgUi;   // tests
  function syncScanProg() { if (ui.spSec) ui.spSec.hidden = !(mode === 'ifc' && model && pc?.has?.()); scanProgUi?.changed(); }
  if (modelUi) scanUi = mountCloudSlice(modelUi, { cloud: () => pc, viewer: () => viewer, entry: () => { const ent = mode === 'ifc' ? cur() : null; return ent ? { C: [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], P: viewer.modelMatrix(ent.mi) } : null; } });

  // ---- Menus, keys and mouse (0.5 track IP): the shell's input engine (assets/js/app-input-ui.js, manifest "input":
  // input-bimcraft.js) runs the styles; it asks BimCraft for the status line, downloads and whether a tool is running ----
  window.ccInputHooks = {
    status: (text, isError) => status(text, isError),
    download: (name, text, type) => download(name, text, type),
    busy: () => !!placing || walking,   // a running tool keeps its own letter keys (R, Tab; W A S D Q E)
  };

  // A phone (owner, 2026-10-15): the shell's app-phone.js (manifest "phone") — the view keeps the screen, the panels are sheets.

  // ---- Add-ons (0.5 AO.7; addons/bimcraft-api.js is session `addons`' module, docs/ADDONS-SPEC.md §5.7). BimCraft runs its
  // own loader (manifest "addons": "own"): add-ons get the open IFC model, the pick, one-undo-step edits, commands, sections
  // in Properties, tabs on the right, importers (a file → IFC) and exporters (buttons beside Save as IFC). An add-on that
  // fails never stops BimCraft. ----
  // Only when the manifest says "addons": "own": then app-shell.inc prints no #cc-addons and the shell's generic loader stays
  // away. Until then the shell's loader runs as before and this stays off (the build needs its addons/index.json first).
  // 0.7 API 1.1 (mep-07): an add-on's model.write goes through the Draw module as the assistant tools' edits do (agents.js): the
  // plan and the 3D view follow, a click made while the model reloads waits its turn; a refusal rejects the add-on's promise
  const addonDraw = modelUi ? modelUi.extend({ tools: [] }) : null;
  async function addonWrite(run, meta) {
    if (!editor || mode !== 'ifc') throw new Error('no IFC model is open');   // i18n-ignore: an add-on's error
    if (!addonDraw) { const r = editor.modelChange(run, { label: meta.label, verb: '' }); afterEdit(); return r; }
    const settle = async () => { const t0 = Date.now(); while ((addonDraw.S.busy || addonDraw.S.reloading || addonDraw.S.queue?.length) && Date.now() - t0 < 60000) await new Promise((r) => setTimeout(r, 50)); };
    await settle();
    let res = null, err = null;
    // the add-on's own throw rejects its promise; the Draw module only shows it on the status line (a keyed refusal, not a fault)
    addonDraw.commit((ed) => { try { res = run(ed); return res; } catch (e) { err = e; throw Object.assign(new Error('model.err.failed'), { key: 'model.err.failed', fill: { why: meta.label + ': ' + (e.message || e) } }); } }, { label: meta.label, verb: '' });
    if (err) throw err;
    await settle();
    return res;
  }
  if (!document.getElementById('cc-addons')) startAddons({
    editor: () => (mode === 'ifc' ? editor : null),
    model: () => (mode === 'ifc' && model ? ifc : null),
    name: () => ifcName,
    selection: () => addonSelection(),
    select: (ids) => {
      if (!viewer || mode !== 'ifc' || !model) return;
      viewer.select(ids.map((id) => (model.keyBase || 0) + Number(id)));
      afterPick();
      if (viewer.selection.size > 1) showMany(); else if (viewer.selection.size) showProps(viewer.selected); else clearProps();
    },
    afterEdit: (label) => { tagLast(label); afterEdit(); },
    versionOf: (id) => { try { return window.ccAddonsFile?.stamp({}, [id])?.addons?.[id] || ''; } catch (e) { return ''; } },   // 0.8 AL.6: the account's version of the add-on, else its manifest's
    write: (run, meta) => addonWrite(run, meta),   // 0.7 API 1.1 (mep-07): model.write, one undo step through the Draw module
    status: (text) => status(text),
    openIfc: (bytes, name) => open(new File([bytes], name), null),
    find: (sel) => root.querySelector(sel),
    showTab: (k) => showTab(k || 'props'),
  }).then((a) => {
    addons = a;
    // the Open picker offers the add-ons' importer extensions too (the picker filters by accept)
    const baseAccept = ui.file.getAttribute('accept') || '';
    const sync = () => { renderAddonExports(); const ext = [...new Set(a.importers().flatMap((x) => x.extensions || []))]; ui.file.setAttribute('accept', [baseAccept, ...ext].filter(Boolean).join(',')); };
    a.onChange(sync); sync();
  })
    .catch((e) => console.warn('add-ons did not start:', e));   // i18n-ignore: a console note


  // The docked-ribbon workspace (Doc's F28; Settings › Global › Layout › Workspace). Both startup paths call this same mount
  // after every extension is installed; workspace.js switches itself on when it is the chosen layout.
  if (modelUi && planViews) {
    coreCommands = createCommands({
      t,
      state: () => workspace?.state() || {
        document: mode === 'ifc' ? editor : null, busy, dirty: unsavedIn(editor),
        canUndo: !!editor?.changes.length, canRedo: !!editor?.canRedo,
        selection: viewer ? [...viewer.selection] : [], levels: [], view: null,
      },
      explain: (why) => status(why),
      actions: {
        open: () => fileHost.kind === 'desktop'
          ? guard(async () => { const [hf] = await fileHost.openFile({ types: IFC_TYPES }); await openHost(hf); })
          : ui.file.click(),
        save: () => guard(saveIfc), undo, redo,
        select: () => workspace.selectTool(),
        clear: () => act('select-none'),
        three: () => workspace.activate3d(), plan: () => workspace.activatePlan(),
        range: () => workspace.openRange(),
        detail: (detail) => workspace.setSettings({ detail }), scale: (scale) => workspace.setSettings({ scale }),
        fit: () => workspace.fit(),
        wall: () => workspace.startWall(), assembly: () => workspace.editType(), structure: () => workspace.editStructure(),
        cancel: () => workspace.cancelWall(false), finish: () => workspace.cancelWall(true),
      },
    });
    const wsCurrent = () => ({ editor: mode === 'ifc' ? editor : null, name: mode === 'dwg' ? dwgOpen?.fileName || '' : ifcName, busy: busy || !!placing, placing: !!placing,
      dirty: unsavedIn(editor), canUndo: !!editor?.changes.length, canRedo: !!editor?.canRedo,
      selection: viewer ? [...viewer.selection] : [], viewer, mode });
    // the layouts (Settings › Global › Layout): the shell's engine builds a layout file's blocks, workspace-bimcraft.js fills them
    const bw = createBimcraftWorkspace({ root, modelUi, views: planViews, commands: coreCommands, props: ui.props, current: wsCurrent, status, statusEl: ui.status });
    workspace = bw.api;
    const engine = mountWorkspaces(bw.adapter);
    bw.api.attach(engine); engine.refresh();
    window.bimcraftWorkspace = Object.freeze({ snapshot: workspace.inspect, commands: () => coreCommands.ids.map(coreCommands.describe), engine });
    toolbox = { refresh: () => engine.refresh() };
    window.bimcraftToolbox = Object.freeze({ get active() { return engine.has('toolbox'); }, refresh: () => engine.refresh(),
      use: (on) => window.ccShellWorkspace?.set(on ? 'toolbox' : 'standard'), inspect: () => engine.inspect() });   // for tests and the console
  } else document.documentElement.removeAttribute('data-cc-ws-boot');   // no layouts without the Draw extension: show the page (app-shell.inc)

  // ?library=<uuid>: open the panel on that item.
  const deep = new URLSearchParams(location.search).get('library');
  if (libraryOn && deep && /^[0-9a-f-]{36}$/i.test(deep)) { libraryLoaded = true; showTab('library'); library.open(deep); }
}

function hasFiles(e) { return !!e.dataTransfer && [...e.dataTransfer.types].includes('Files'); }
function startsWith(data, text) {
  for (let i = 0; i < text.length; i++) if (data[i] !== text.charCodeAt(i)) return false;
  return true;
}
