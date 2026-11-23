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
import { firstSheet } from './new-defaults.js';   // 0.10 BK.74: what a new building starts with
import { startBlock, startFor, startSheet, policyMark } from './new-defaults-ui.js';   // 0.10 DP.1 (bk-defaults-10): + the person's Default Policies, asked through defaults-hook.js
import { onDefaults } from './defaults-hook.js';
import { mountModel } from './model-ui.js';
import { mountWorkspaces } from 'cc-workspace';   // the shell's layout engine (assets/js/app-workspace.js; 0.7 WS.6)
import { createBimcraftWorkspace } from './workspace-bimcraft.js';
import { createCommands, shortcutCommand, isTextEntry } from './workspace/commands.js';   // 0.5 part 3, track BM: Draw (plan view, walls, levels)
import { mountRes } from './res-ui.js';   // 0.5 part 4, track RC: the residential tools in the plan (roof planes, …)
import { isCloudFile, cloudSignature, CLOUD_ACCEPT } from './cloud-types.js';   // 0.6 PF (session pointcloud): which files are point clouds
import { mountCoords } from './coords-ui.js';   // 0.6 DF.15 (bim-draw): coordinate readouts, project origin and survey point
import { mountTrim } from './model-trim-ui.js';   // 0.6 DF.17 (bim-draw): Modify › Trim / extend, Corner
import { mountStages } from './stages/stages-ui.js';   // 0.10 BK.176 / BK.105 / BK.110 / BK.111 / BK.113 / BK.178 (stages-10): the project stages panel (landed by bim-core-10)
import { listTemplates, getTemplate } from './template-store.js';
import { mountPartLinks } from './part-link-ui.js';   // 0.10 BK.179 / SU.1814 (bim-part-link-10): Send to PartCraft and back
import { mountWallFinishes } from './finishes/finishes-ui.js';   // 0.10 BK.25-28, BK.130 (bim-finishes-10): wall finishes, substrates, tile set-out (landed by bim-core-10)
import { mountWallTools } from './wall-tools-ui.js';   // 0.9 WT.2-WT.7 (walls-09): the wall tool's recipes on lib/walls
import { mountWallShape } from './wall-shape-ui.js';   // 0.9 WT.6 (walls-09): the wall Shape tools in Properties
import { mountStairSketch } from './stair-sketch-ui.js';   // 0.8 SU.1055 (bim-08): a stair from a sketch
import { mountPens } from './pens-ui.js';
import { mountReportAs } from './report-as.js';
import { mountClassify } from './classify-ui.js';   // 0.10 BK.94 (bk-content-10): classification codes
import { mountVerify } from './verify-ui.js';   // 0.10 BK.64 / BK.49 (bk-r3-checks-10): unverified → checked → field-verified
import { mountAudit } from './audit-ui.js';
import { mountLod } from './lod/lod-ui.js';   // 0.10 BK.13-BK.101 (bim-lod-10): Level of development, milestones, advice (landed by bim-core-10)   // 0.10 BK.65 / BK.20 (bk-r3-checks-10): the audit rule sets as advisory Problems
import { mountTypePacks } from './type-pack-ui.js';   // 0.10 BK.97 (bk-content-10): type packs
import { mountLibraryKinds } from './library-kinds-bim.js';   // 0.10 BK.21 / BK.98 (bk-r3-library-10): a Library Type, project template, Quick Kit
import { mountTemplates } from './template-ui.js';
import { mountWallShapeViews } from './wall-shape-view-ui.js';   // 0.9 WT.6 (walls-shape-10): the Shape tools in elevation, section and 3D
import { mountElevEdit } from './elev-edit-ui.js';   // 0.9 SU.1123 (bim-views-09)   
import { bindWorkStyle } from './work-style-ui.js';   // 0.9 D8.12 (bim-views-09): the working style in Settings   // 0.9 D8.12-D (bim-views-09): project templates   // 0.9 D8.12-C (bim-views-09): Report as another IFC class   // 0.8 SU.1055 (bim-08): pen overrides per view
import { mountPicture } from './picture-ui.js';
import { AREA_KEY } from './areaclip.js';   // 0.8 D8.15: MarkupCraft's copied area (picture-paste.js)   // 0.8 D8.8 (d88_PART_3): pictures as backgrounds on the plan
import { mountTraceRef } from './trace-ref-ui.js';   // 0.8 SU.1055 (bim-08): Trace Reference
import { mountModify } from './modify-ui.js';   // 0.8 D8.3 (bim-08): Move, Align, Distribute
import { mountSymbols } from './symbols-ui.js';   // 0.8 GH.3-F/G (gh3sym_PART_3): the symbol palette (electrical, plumbing), lib/symbols
import { mountGrids } from './model-grids-ui.js';   // 0.6 DF.16 (bim-draw): Build › Grid, Column
import { mountPlanMeasure } from './model-measure-ui.js';   // 0.9 D9.3: Measure on the plan
import { mountRollover } from './rollover-bim.js';   // 0.10 BK.33: rollover information on the plan
import { mountFloors } from './model-floors-ui.js';   // 0.6 DF.18 (bim-draw): Build › Floor by outline, Ramp
import { mountPanelFocus } from './panel-focus.js';   // 0.9 FX.55: panel sections close each other; a lock keeps one open
import { mountSite } from './model-site-ui.js';   // 0.6 DF.20 (bim-draw): Build › Site, Add levels…
import { mountSiteConstraints } from './model-site-constraints-ui.js';   // 0.10 BK.104 (bk-stages-10): building lines, servitudes, the wall-crossing warning
import { mountSiteMass } from './model-site-mass-ui.js';   // 0.7 LC.1 B2 (massing): a CivilCraft building mass in Properties; Develop this mass
import { mountMep } from './mep-ui.js';   // 0.6 DF.29 (bim-draw): Build › Pipe, Duct, Valve
import { mountAnnoScale } from './anno-scale-ui.js';   // 0.10 BK.10: annotation sizes from paper heights (the building's standard)
import { mountViewsBim } from './views-ui.js';   // 0.6 DF.19 (bim-draw): project browser, view ranges, templates, your own sheets
import { mountWallAssemblies } from './wall-assemblies-ui.js';
import { mountQuantities } from './quantities-ui.js';
import { mountScheduleLayouts } from './schedule-layouts-ui.js';   // 0.10 BK.39 / BK.29 / BK.149 / BK.142 / BK.47 (bk-r3-schedules-10)
import { mountElementTypes } from './element-types-ui.js';   // 0.10 BK.24 / BK.15 (bk-r3-types-10)
import { mountAssetSymbols } from './asset-symbol-ui.js';   // 0.10 BK.23 / BK.22 (bk-r3-types-10)
import { bimcraftSymbolSets } from './symbols-ui.js';   // 0.10 BK.84 / BK.11 / BK.40 (bk-quantities-10)
import { mountWorkPlane } from './workplane-ui.js';   // 0.10 bk-tools-b-10: Set / Show Work Plane, Reference Plane, Work Plane Viewer, Model Line, Model Text
import { mountCurtain } from './curtain-ui.js';   // 0.10 bk-tools-b-10: Curtain System, Curtain Grid, Mullion, By Face
import { mountSpaces } from './spaces-ui.js';   // 0.10 (bk-tools-a-10): Room, Room Separator, Tag Room, Area, Area Boundary, Tag Area, Shaft, Vertical Opening, Model Group
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
import { getDisplayUnits, fmtLen, parseLen, parseTyped, fmtCoord, lenMark, unitMark, localizeLengths, localizeQuantities, crsUnitNote } from './model-units.js';
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
import { ifcJournal, recoverIfc, IFC_BASE, IFC_WHOLE } from "./history/ifc-journal.js";   // 0.11 PERF.24: autosave writes what changed
import { withPictures, recoverPictures } from './autosave-pictures.js';   // 0.11 PERF.24 (perf-finish-11): pictures ride beside the journal
import { bundleFiles } from './model-picture.js';
import { putBytes } from './picture-store.js';
import { IfcFile } from "./ifc/model.js";
import { offerRecovery } from './recover-offer.js';   // 0.9 FX.41: the recovery list does not lock the page
import { CLIP_KEY, placementClip, elementsClip, pasteMove, readClip, writeClip, libKey, boxFromItem, boxFromEquipment, ghostItem,
  besideSpot, pickStorey, elementText, elementCsv } from './clipboard.js';
import { boundsOf, HIDDEN } from './ifc-vis.js';
import { cleanVolume, FACE_AXES, MAX_CELLS, MAX_PLANES, MAX_TILT, planeFromPoint, boxGrips, dragDelta, dragBox } from './section-volume.js';
import { inv4, placementMatrix } from './ifc-util.js';
import { ids as idsOfType, lengthUnitOf } from './ifc-util.js';   // 0.7.1 → 0.8: IfcProject, for the accepted problems' property set
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
import { mountAutoroute } from './mep/autoroute-ui.js';   // 0.10 MEP.1 (#1556): route ducts from an outlet to its terminals, under the MEP × structure section
import { mountClashFix } from './clashfix-bim.js';   // 0.9 EG.42 (clash-assistants-09): one assistant per discipline to settle clashes
import { mountHvac } from './mep/hvac-ui.js';   // 0.8 SU.888 (sx-mep): split / VRF / fan-coil pack (mep/hvac.js adds the kinds to Build › Equipment), Line set, Line set sizes
import { runChecks, cleanRules } from './ifc-checks.js';
import { checkProblems, bimMarkers } from './problems-bimcraft.js';   // 0.7.1 → 0.8: the shell's Problems (docs/0.8-PROBLEMS-SPEC.md)
import { onAdvice, adviceProblems } from './draw-advice.js';
import { readAdvice } from './draw-advice-model.js';   // 0.10 BK.73: unusual sizes are advice in Problems, never a refusal
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
import { handoverBundleFiles } from './handover-docs.js';   // 0.10 BK.114: attached handover files go into the project bundle
import { mountAssets } from './assets-bim-ui.js';     // 0.6 LC.12: assets + maintenance record (session bim-extra_PART_2)
import { mountEnergyEp } from './energy-ep-ui.js';   // 0.8 EG.13 (energy_PART_2 mount line 1)
import { carbonTotal } from './carbon-calc.js';   // EG.30 running totals
import { costTotal, readCostSettings } from './cost5d.js';
import { mountCarbon } from './carbon-ui.js';   // EG.14
import { mountCost5d } from './cost5d-ui.js';   // EG.17
import { mountPv } from './pv-ui.js';   // EG.15
import { mountMepCalc } from './mep-calc-ui.js';   // 0.8 EG.1–EG.4 Calculations tab (mep_PART_2's line 2)
import { mountMassOptions } from './mass-options-ui.js';   // 0.10 BK.44 (bk-r3-stages-10): massing options kept side by side in the model, one current
import { mountFurnish, mountProgram } from './design-ui.js';   // 0.8 EG.60 furnish a room, EG.58 room program (session bim_PART_2)
import { mountPermit } from './permit-ui.js';   // 0.8 EG.44 permit package (session bim_PART_2)
import { mountIssues } from './issue-ui.js';   // 0.10 BK.46 / BK.48 (bk-r3-stages-10): issued sets, what changed since, the drawing changelog, records against an issue
import { mountPack } from './pack-ui.js';   // 0.10 BK.63 / BK.170 (bk-r3-stages-10): client pack and stage report, the option comparison table
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
import { mountSidePanels } from './side-panels-ui.js';
import { mountXrPaint } from './xr-paint-ui.js';
import { mountDwg3d } from './dwg-3d-ui.js';
import { mountDwgOpen } from './dwg-open-ui.js';
import { mountRevitCard } from './revit-card-ui.js';
import { mountCompare } from './compare-ui.js';
import { mountPropsPanel } from './props-panel-ui.js';
import { mountBcfIssues } from './bcf-issues-ui.js';
import { mountClash } from './clash-ui.js';
import { mountFourD } from './fourd-ui.js';
import { mountIfcOpen } from './ifc-open-ui.js';
import { mountSettingsFiles } from './settings-files-ui.js';
import { mountNewBuilding } from './new-building-ui.js';
import { mountLibraryDrop } from './library-drop-ui.js';
import { mountFoldersIfcx } from './folders-ifcx-ui.js';
import { mountTreeAccess } from './tree-access-ui.js';
import { mountChecksPanels } from './checks-panels-ui.js';
import { mountColorBy } from './color-ui.js';
import { mountFederation } from './federation-ui.js';
import { mountEditingAddons } from './editing-addons-ui.js';
import { mountDocumentsPanel } from './documents-ui.js';
import { mountSection } from './section-ui.js';
import { mountWalkMeasure } from './walk-measure-ui.js';
import { mountLocation } from './location-ui.js';
import { mountRenderExport } from './render-export-ui.js';
import { mountCrsModel } from './crs-model-ui.js';
import { mountVisAgents } from './vis-agents-ui.js';
import { mountStageBar } from './stage-ui.js';
import { mountLibraryPlace } from './library-place-ui.js';
import { mountCreditsUpdates } from './credits-updates-ui.js';
import { mountEditMenu } from './edit-menu-ui.js';
import { mountDrawPlan } from './draw-ui.js';
import { mountSettingsWire } from './settings-wire.js';
import { mountSectionBoxWire } from './section-box-wire.js';
import { mountStageWire } from './stage-wire.js';
import { mountEditMenuWire } from './edit-menu-wire.js';
import { mountBundlesWire } from './bundles-wire.js';

/** The library needs getcadcraft.com's API: off in the self-hosted browser edition (devshell `#cc-edition` {library: false}). */
const libraryOn = (() => { try { const ed = JSON.parse(document.getElementById('cc-edition')?.textContent || 'null'); return !ed || ed.library !== false; } catch { return true; } })();

const root = document.querySelector('[data-bimcraft]');
if (root) init(root);
// Touch screens (0.4 S.8): the first touch marks the app, so CSS gives bigger targets and the walk pad shows
if (root) root.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') root.classList.add('is-touch'); }, { capture: true, passive: true });

function init(root) {
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const ST = { addons: undefined, ifc: undefined, viewer: undefined, busy: undefined, previewUrl: undefined, rvtOpen: undefined, pickToken: undefined, folder: undefined, editor: undefined, dwgView: undefined, lastDwg: undefined, printView: undefined, dwg3d: undefined, view3d: undefined, view3dOn: undefined, props2d: undefined, cut: undefined, ifcName: undefined, selected: undefined, model: undefined, mode: undefined, idsUi: undefined, dwgCoordUnits: undefined, dwgOpen: undefined, placing: undefined, swapTarget: undefined, modelTag: undefined, classifyUi: undefined, verifyUi: undefined, auditUi: undefined, lodUi: undefined, annoUi: undefined, workspace: undefined, planViews: undefined, coreCommands: undefined, toolbox: undefined, reportAsUi: undefined, modelUi: undefined, coordsUi: undefined, siteCtxUi: undefined, scanProgUi: undefined, brkScanSet: undefined, scanProgProblems: undefined, scanUi: undefined, linksUi: undefined, picturesUi: undefined, bundleUi: undefined, analysisUi: undefined, pointsUi: undefined, assetsUi: undefined, frameSet: undefined, frameProblems: undefined, breakSet: undefined, breakProblems: undefined, bimTotalsInvalidate: undefined, mountEnergy: undefined, energyUis: undefined, mepCalcUi: undefined, phasesUi: undefined, tagsUi: undefined, daylightUi: undefined, pc: undefined, bimMaps: undefined, selInfo: undefined, statusTimer: undefined, cube3d: undefined, dragDepth: undefined, innerDrag: undefined, leaving: undefined, liveTex: undefined, ifcAnswered: undefined, tree: undefined, findRules: undefined, findMode: undefined, findSaving: undefined, fdTasks: undefined, fdErrors: undefined, fdDay: undefined, fdOn: undefined, fdPlay: undefined, fdFile: undefined, fdRaf: undefined, fdGroup: undefined, qtoScope: undefined, qtoGroups: undefined, qtoSums: undefined, qtoView: undefined, checkRes: undefined, adviceSrc: undefined, checksSrc: undefined, checksArmed: undefined, solidsRep: undefined, guidIx: undefined, clashA: undefined, clashB: undefined, clashTol: undefined, clashRes: undefined, clashRun: undefined, clashAt: undefined, clashMsg: undefined, clashFix: undefined, hostSets: undefined, issues: undefined, issueForm: undefined, currentIssue: undefined, guidKeys: undefined, authorOther: undefined, propIx: undefined, colorField: undefined, colorLegend: undefined, picked: undefined, colorScheme: undefined, gridFocus: undefined, active: undefined, refC: undefined, cmpOld: undefined, cmpNew: undefined, cmpRes: undefined, cmpPair: undefined, bimShell: undefined, savedOnce: undefined, vaultUi: undefined, vaultRef: undefined, blankNote: undefined, busyDepth: undefined, props3dSummary: undefined, turnOf: undefined, gripDrag: undefined, hot3d: undefined, walking: undefined, measOrtho: undefined, measShift: undefined, meas: undefined, crsLib: undefined, pickLib: undefined, geoCache: undefined, liveView: undefined, xrOn: undefined, xrWhy: undefined, paintUi: undefined, viewsUi: undefined, registerUi: undefined, bimMapsLoading: undefined, libraryLoaded: undefined, libKinds: undefined, storeyElevs: undefined, clip: undefined, srcMemo: undefined, pasteKey: undefined, energyFor: undefined };
  const $ = (s) => root.querySelector(s);
  ST.addons = null;   // 0.5 AO.7: the add-on API's handle once startAddons() resolves (search "Add-ons")
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
  ST.ifc = null;          // IfcModel, created on the first IFC (loads the wasm once)
  ST.viewer = null;       // Viewer3D, created on the first IFC
  ST.busy = false;
  ST.previewUrl = null;
  ST.rvtOpen = null;      // the RVT/RFA on the card: { file, path, info } (the lab preview converts it)
  ST.pickToken = 0;
  ST.folder = null;       // { scan, index } while a folder is open
  ST.editor = null;       // IfcEditor for the open IFC
  ST.dwgView = null;      // DrawingView
  ST.lastDwg = null;      // { file, path, kind } — reopened when linked drawings are added
  const xrefFiles = new Map();   // "name.dwg" / "logo.png" (lower case) → File, added with "Add linked files…"
  ST.printView = false;   // DWG: black on white with line weights
  ST.dwg3d = null;        // { db, xrefs, compiled } for the open drawing's 3D view
  ST.view3d = null;       // DrawingView3D (dwg-view3d.js, imported on the first switch to 3D)
  ST.view3dOn = false;    // the drawing shows in 3D
  ST.props2d = null;      // the 2D Properties content, put back when leaving 3D
  ST.cut = null;          // IFC section plane { axis: top|front|side, offset (m from the model's bottom/front/side), flip }
  ST.ifcName = '';        // file name of the open IFC (for Save as)
  ST.selected = null;     // picked element id
  ST.model = null;        // the open IFC's load result
  ST.mode = 'none';       // 'ifc' | 'dwg' | 'none' (what the library panel can do)
  ST.idsUi = null;        // 0.7.1 71.25: the IDS check (ids-ui.js), mounted with the Problems below
  ST.dwgCoordUnits = '';   // the open drawing's own units (its coordinates are never converted to the display unit)
  ST.dwgOpen = null;      // { db, fileName } while a drawing is open (the library's "This file")
  ST.placing = null;      // { entry, rot, snap, faces, at, where: 'plan'|'model' } while placing an item
  // 0.9 (owner 2026-11-09): the Library's Place button follows the view mode (model-ui.js viewMode, announced by applyLayout)
  const viewModeSubs = new Set();
  function viewMode() { return ST.modelUi?.viewMode?.() ?? 'model'; }   // 'plan' | 'split' | 'model'
  function emitViewMode(m) {
    for (const f of viewModeSubs) { try { f(m); } catch (e) { console.error(e); } }
    // placing in a pane that has just gone away: the pointer moves to the one that is left
    if (ST.placing && !ST.placing.paste) { if (ST.placing.where === 'plan' && m === 'model') pointWhere('model'); else if (ST.placing.where === 'model' && m === 'plan') pointWhere('plan'); }
  }
  ST.swapTarget = null;   // { id, name, uuid, version, variant, library } after "Swap item…" (the library item it is, for its other variants)
  ST.modelTag = '';       // this open IFC's session tag: a clip copied from it can be pasted "like" its source
  ST.classifyUi = null;   // 0.10 BK.94: classify-ui.js
  ST.verifyUi = null; ST.auditUi = null; ST.lodUi = null;   // 0.10 BK.64 / BK.49 / BK.65 / BK.20: verify-ui.js, audit-ui.js
  ST.annoUi = null;   // 0.10 BK.10 (anno-scale-ui.js)
  ST.workspace = null; ST.planViews = null; ST.coreCommands = null; ST.toolbox = null; ST.reportAsUi = null;   // 0.9: reportAsUi = report-as.js
  ST.modelUi = null;      // Draw (0.5 track BM, model-ui.js): mounted at the end of init
  ST.coordsUi = null;     // where am I working (0.6 DF.15, coords-ui.js): mounted with the 3D view
  ST.siteCtxUi = null;    // CivilCraft's site-context file taken as suggestions (0.8 EG.63, site-ctx-ui.js)
  ST.scanProgUi = null; ST.brkScanSet = null; ST.scanProgProblems = [];   // EG.39: scan against the model and the 4D schedule
  ST.scanUi = null;       // a point cloud's slice on the plan (0.6 DF.22, cloud-slice-ui.js)
  ST.linksUi = null;      // linked models (0.6 DF.21, links-ui.js)
  ST.picturesUi = null;   // pictures (0.8 D8.8, picture-ui.js): bytes beside the IFC, 3D planes, plan PDF
  ST.bundleUi = null;     // project bundles (0.6 DF.12 (b), bundle-view.js): mounted at the end of init
  ST.analysisUi = null;   // the Analysis tab (0.6 LC.4, analysis-bim-ui.js): mounted after the bundles
  ST.pointsUi = null;     // the Points tab (0.6 LC.22, layout-bim-ui.js): mounted with it
  ST.assetsUi = null;     // the Assets tab (0.6 LC.12, assets-bim-ui.js)
  ST.frameSet = null; ST.frameProblems = [];   // SU.1056: concrete checks and drift in the shell's Problems
  ST.breakSet = null; ST.breakProblems = [];   // EG.31: the Problems source of "What breaks first?"
  ST.bimTotalsInvalidate = () => {};   // EG.30: the running totals re-read after an edit
  ST.mountEnergy = null;  // set where the tab's panes are made (below)
  ST.energyUis = null;    // 0.8 EG.13–EG.17 (energy_PART_2's panes, mounted by bim-sim_PART_2): EnergyPlus, carbon, 5D cost, solar PV
  ST.mepCalcUi = null;    // 0.8 EG.1–EG.4 (mep_PART_2, mep-calc-ui.js): the Calculations tab
  ST.phasesUi = null;     // 0.8 EG.59 (bim_PART_2, phases-ui.js): existing / demolish / new, kept in the IFC
  ST.tagsUi = null;       // 0.8 SU.915 / SU.889 (sx-tags, tags-ui.js): Tags + Documents from the model, under Quantities
  ST.daylightUi = null;   // the Daylight tab (0.6 LC.20, daylight-bim-ui.js)
  ST.pc = null;           // point clouds (0.5 SG.1): cloud-ui.js, made on the first cloud
  ST.bimMaps = null;      // map layers on the ground (0.5 SG.3): maps-bim.js, made on first use
  ST.selInfo = null;      // { id, p (IfcModel.properties), placement (bool) } for the picked element
  const libItems = new Map();   // libKey → { item, meta } placed, swapped in or updated in this tab (Paste in another model)

  ST.statusTimer = 0;
  function status(msg, isError = false, fade = false) {   // fade: a done message that clears itself after 6 s
    clearTimeout(ST.statusTimer);
    ui.status.textContent = isError && msg ? localizeLengths(msg, getDisplayUnits()) : (msg || '');   // GH.3-A: a refusal's limits in the display unit
    ui.status.classList.toggle('is-error', !!isError);
    if (msg && !isError && fade) ST.statusTimer = setTimeout(() => { ui.status.textContent = ''; }, 6000);
  }
  const frame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
  const guard = async (fn) => {
    if (ST.busy) { status(t('busy.wait')); return; }
    ST.busy = true;
    // an error made for the person (err.userFacing: a refusal with its reason) goes to the status line only
    try { await fn(); } catch (err) { if (!err.userFacing) console.error(err); status(err.message || String(err), true); } finally { ST.busy = false; ST.workspace?.refresh(); }
  };

  const { SMALL_MODEL, syncEdit, classOfId, copyText, act, currentClip, whyNot, picks, redo, toggleIfcEquipment, checkUpdates, showCredits, pointWhere, download, rebuild, startPlacing, stopPlacing, libraryBlock, showTab, syncPlaceUnits, revealRightPanel, revealPaletteOf, syncPlacebar, moveGhost, toggleSnap, doSwap, planCut, coordMatrix, storeyElev, typedPlace, renderChanges, afterEdit, addonSections, tagLast, copyRow, copyAllBar, copyBtn, addonSelection, undo, saveIfc, renderAddonExports, boxRoundPick, applyViewTurn, sectionOff, onBoxGrip, applySection, toggleSection, buildingTurn, placeSectionBar, applyBox, renderShape, setTilt, secOnDwg, secView, secUnit, secText, metres, startCutTurn, entryOf, cur, renderModels, placementOf, isSpaceKey, setActive, showTeamBtn, teamTw, addModel, removeModel, applyOffset, toWorld, toLocal, setPressed, showStage, toolButton, openFolder, showFolder, applyIfcxOption, openIfcx, syncDisplayButtons, exportIfcx, scanProgElementKeys, locateCloudPoint, ensureMaps, hasSavedMaps, openLive, renderHooks, openCloud, openRegister, cloudPressed, openRender, exportGlb, exportUsd, makeUsd, open, keepEdits, unsavedIn, isCardDrag, dragOver, dragEnd, dropIt, outsideFiles, anyDirty, fromFolder, openSampleHouse, addCorner, saveSettings, syncSettingsForm, settings, settingsDlg } = mountSettingsWire({
    ST, ui, libItems, status, frame, guard, ifcWithUnits, fillIfcInfo, fillStoreys, fillClasses, nameOfKey, clearProps, showMany, root, hasFiles, startsWith,
    get clsMemo() { return clsMemo; },
    get SPATIAL() { return SPATIAL; },
    get store() { return store; },
    get NOT_BUILT() { return NOT_BUILT; },
    get elementSnaps() { return elementSnaps; },
    get editButtons() { return editButtons; },
    get MENU_TITLE() { return MENU_TITLE; },
    get afterPick() { return afterPick; },
    get showProps() { return showProps; },
    get undoHook() { return undoHook; },
    get pb() { return pb; },
    get library() { return library; },
    get rPanel() { return rPanel; },
    get renderColor() { return renderColor; },
    get renderIssues() { return renderIssues; },
    get fillTree() { return fillTree; },
    get renderFind() { return renderFind; },
    get renderChecks() { return renderChecks; },
    get renderQto() { return renderQto; },
    get applyColor() { return applyColor; },
    get fileHost() { return fileHost; },
    get models() { return models; },
    get editableRow() { return editableRow; },
    get syncAccepted() { return syncAccepted; },
    get syncAutosave() { return syncAutosave; },
    get IFC_TYPES() { return IFC_TYPES; },
    get turnBtn() { return turnBtn; },
    get ubox() { return ubox; },
    get usec() { return usec; },
    get ui3() { return ui3; },
    get ushape() { return ushape; },
    get AXIS() { return AXIS; },
    get colorOff() { return colorOff; },
    get clearCompare() { return clearCompare; },
    get renderCompare() { return renderCompare; },
    get teamBtn() { return teamBtn; },
    get measureOff() { return measureOff; },
    get walkOff() { return walkOff; },
    get openIfc() { return openIfc; },
    get renderRecent() { return renderRecent; },
    get index() { return index; },
    get ensureViewer() { return ensureViewer; },
    get fx() { return fx; },
    get gu() { return gu; },
    get ownNote() { return ownNote; },
    get syncMeasureBar() { return syncMeasureBar; },
    get redrawMeasure() { return redrawMeasure; },
    get DRAG_TYPE() { return DRAG_TYPE; },
    get openDwg() { return openDwg; },
    get openRevit() { return openRevit; },
    get corners() { return corners; },
    get applyAssist() { return applyAssist; },
    get libraryOn() { return libraryOn; },
  });
  // ---- Corner indicator (Settings › BimCraft): the view cube or an X/Y/Z axis icon in each 3D view (m3d/viewcube.js,
  // byte-identical copies of ModelCraft's). Never on the 2D drawing: the hosts are the 3D views' own wrappers. ----
  const corners = [];   // { cube, axes } per 3D view
  ST.cube3d = null;     // the IFC view's cube (its compass follows the view turn: applyViewTurn)

  // ---- Choosing files and folders ----
  root.querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', () => ui.file.click()));
  root.querySelectorAll('[data-sample-open]').forEach((b) => b.addEventListener('click', openSampleHouse));
  // 2026-11-20: in the lab, /lab/bimcraft?open=<name>.ifc opens a file staff put in /lab-files/ (a made model handed over by link); same open path as a chosen file
  { const labFile = /^\/lab\//.test(location.pathname) ? new URLSearchParams(location.search).get('open') : null;
    if (labFile && /^[a-z0-9][a-z0-9-]{0,79}\.ifc$/.test(labFile)) fetch('/lab-files/' + labFile).then(async (r) => { if (!r.ok) throw new Error('HTTP ' + r.status); await open(new File([await r.blob()], labFile, { type: 'application/octet-stream' }), labFile); }).catch((err) => status(t('ui.hint.trysample.fail', { why: err.message }), true)); }
  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  { const regSample = () => window.ccPalette?.register?.([{ id: 'bim-sample', label: t('ui.hint.trysample'), group: 'file', keywords: 'sample example demo try house ifc', run: openSampleHouse }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }
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
  const { askNewBuilding, openHost, syncAutosave, listing, renderRecent } = mountNewBuilding({
    ST, ui, status, guard, open, openFolder, renderChanges, root,
    get keepEdits() { return keepEdits; },
    get templates() { return templates; },
    get openIfc() { return openIfc; },
    get unsavedIn() { return unsavedIn; },
    get models() { return models; },
    get autosave() { return autosave; },
  });
  onDefaults(() => { try { ST.modelUi?.refreshTypes?.(); } catch (e) { /* the plan is not up yet */ } });   // 0.10 DP.1: a starter-type LOD policy changed: the type lists show it
  root.querySelectorAll('[data-new]').forEach((b) => b.addEventListener('click', () => guard(askNewBuilding)));
  // 0.9 D8.12-D: Save as template (template-ui.js)
  const templates = mountTemplates({ el, t, status, WebIFC, IfcModel, currentBytes: () => (ST.mode === 'ifc' && ST.editor ? ST.editor.save() : null), fileName: () => ST.ifcName, download });
  root.querySelectorAll('[data-tpl-save]').forEach((b) => b.addEventListener('click', () => guard(() => templates.saveDialog())));
  // Files through the host adapter (host.js, W2.19): on the desktop the picker is the native dialog (the file keeps its
  // path), a double-clicked file opens at launch or while running; in the browser the same input as before.
  const fileHost = getHost({ app: 'bimcraft' });
  const IFC_TYPES = [{ description: 'IFC', extensions: ['.ifc'] }];   // i18n-ignore: a file type label the OS shows
  const OPEN_TYPES = [{ description: 'IFC, RVT, RFA, DWG, DXF, LAS, LAZ, STEP', extensions: ['.ifc', '.rvt', '.rfa', '.rte', '.rft', '.dwg', '.dxf', '.step', '.stp', '.obj', '.ifcx', '.pln', '.pla', '.tpl', '.bpn', '.ccbundle', '.zip', ...CLOUD_ACCEPT.split(',')] }];   // i18n-ignore: OS file types
  if (fileHost.kind === 'desktop') {
    root.querySelector('label[for="bc-file"]')?.addEventListener('click', (e) => {
      e.preventDefault();
      guard(async () => { const [hf] = await fileHost.openFile({ types: OPEN_TYPES }); await openHost(hf); });
    });
  }
  // Autosave (0.4 1.2; app-autosave.js): each IFC model with unsaved edits is a document; its copy is the edited IFC
  // (editor.save()), so "Recover your work?" reopens it with the edits in it — then Save as IFC keeps it.
  const autosave = new Autosave({ app: 'bimcraft' });
  offerRecovery({ autosave, status, t, statusText: () => ui.status.textContent, onRecover: async (rec) => {
    const base = String(rec.meta?.name || 'model.ifc').replace(/\.ifc$/i, '');
    const journaled = rec.data && (rec.data.kind === IFC_BASE || rec.data.kind === IFC_WHOLE);   // a journal copy: the opened bytes + the changes → the IFC (history/ifc-journal.js)
    if (journaled) for (const [loc, bytes] of recoverPictures(rec)) putBytes(loc, bytes);   // the pictures the copy carried, back in the store before the model reads its references
    const data = journaled ? new Blob([recoverIfc(rec, IfcFile)], { type: 'application/x-step' }) : rec.data instanceof Blob ? rec.data : new Blob([rec.data], { type: 'application/x-step' });
    await guard(() => open(new File([data], base + '.ifc', { type: 'application/x-step' }), null));
    if (ST.mode !== 'ifc' || !ST.editor) throw new Error(t('recover.failed'));
    ST.editor.recovered = true;
    renderChanges();
    status(t('recover.done', { file: base + '.ifc', n: rec.meta?.changes || 0 }));
  } });
  fileHost.onOpenFiles((files) => guard(() => openHost(files[0])));
  fileHost.launchFiles().then((files) => { if (files[0]) guard(() => openHost(files[0])); });
  // Studio Live (0.5 LV.21, live.js): the open model for the adapter; `live` = the session's adapter while one runs
  window.bimcraftLive = {
    live: null,
    get editor() { return ST.editor; }, get name() { return ST.ifcName; },
    get viewer() { return ST.viewer; },   // 0.9 SU.1112: the others' cursors are drawn over it (live.js presenceView)
    open: (bytes, name) => { window.bimcraftLive.joining = true; return guard(() => openIfc(bytes, new File([bytes], name, { type: 'application/x-step' }))); },
    refresh: (geometry) => { if (!ST.editor) return; if (geometry) guard(() => rebuild(null)); else afterEdit(); },
    status: (m) => status(m),
  };
  // …and from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the model comes from the host
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.bimcraftLive, fileHost), (err) => status(err.message, true));
  // 0.7 LC.1 (massing): a model handed over from another app (?handoff=<id>, CivilCraft's "Develop in BimCraft"): opened as if it had been dropped
  if (/[?&]handoff=/.test(location.search)) import('./handoff-in.js').then((m) => m.receiveHandoff({ search: location.search, open: async (f) => { if (ST.siteCtxUi && await ST.siteCtxUi.receive(f)) return; return guard(() => open(f, null)); }, status })).catch((err) => status(err.message, true));
  // 0.8 EG.78 (studio_PART_2): a library item dragged here from another app (PartCraft's part) through Studio's drag module — drop-item.js
  if (window.cadcraftStudio?.drag) Promise.all([import('./drop-item.js'), import('./libitem.js')]).then(([m, L]) => window.cadcraftStudio.drag.accept(m.dropHandlers({ L, startPlacing, get viewer() { return ST.viewer; }, status, t, ready: () => (ST.mode !== 'ifc' || !ST.editor ? t('place.need.ifc') : null) }))).catch((err) => status(err.message, true));
  ui.folderInput.addEventListener('change', () => {
    const picked = fromInput(ui.folderInput.files);
    ui.folderInput.value = '';
    if (picked) guard(() => openFolder(picked));
  });
  ui.back.addEventListener('click', () => { if (ST.folder) showFolder(); });

  renderRecent();

  // ---- 0.9: a Library card / picture dropped on the plan or the 3D view (library-view.js dragSource) ----
  const DRAG_TYPE = 'application/x-cadcraft-library-item';
  document.addEventListener('dragover', (e) => {
    if (!isCardDrag(e)) return;
    const target = dragOver(library.drag, e.clientX, e.clientY);
    if (target) { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; } else e.dataTransfer.dropEffect = 'none';
  }, true);
  document.addEventListener('dragleave', (e) => { if (isCardDrag(e) && !e.relatedTarget) dragEnd(); }, true);
  document.addEventListener('drop', (e) => {
    if (!isCardDrag(e)) return;   // a file (or anything else) goes on to the file handling below
    e.preventDefault(); e.stopPropagation();
    ST.innerDrag = false;   // the source card may be re-drawn before its dragend
    const d = library.drag;
    dropIt(d, e.clientX, e.clientY);
  }, true);

  ST.dragDepth = 0;
  // 2026-11-02 (BIMBro): something dragged from inside the page (a Library preview picture) is not a file to open
  ST.innerDrag = false;
  document.addEventListener('dragstart', () => { ST.innerDrag = true; }, true);
  document.addEventListener('dragend', () => { ST.innerDrag = false; }, true);
  document.addEventListener('dragenter', (e) => {
    if (!outsideFiles(e)) return;
    e.preventDefault();
    ST.dragDepth++;
    ui.veil.hidden = false;
  });
  document.addEventListener('dragleave', (e) => {
    if (!outsideFiles(e)) return;
    if (--ST.dragDepth <= 0) { ST.dragDepth = 0; ui.veil.hidden = true; }
  });
  document.addEventListener('dragover', (e) => { if (outsideFiles(e)) e.preventDefault(); });
  document.addEventListener('drop', (e) => {
    if (ST.innerDrag) { ST.innerDrag = false; if (hasFiles(e)) { e.preventDefault(); status(t('lib.drag.place')); } return; }
    if (!hasFiles(e)) return;
    e.preventDefault();
    ST.dragDepth = 0;
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

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  ST.leaving = false;
  window.addEventListener('beforeunload', (e) => { if (anyDirty() && !ST.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !anyDirty() || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (await keepEdits()) return;
    ST.leaving = true;
    setTimeout(() => location.assign(url.href), anyDirty() ? 0 : 800);
  });



  applyIfcxOption();
  root.querySelectorAll('[data-ifcx-open]').forEach((b) => b.addEventListener('click', () => root.querySelector('[data-ifcx-input]')?.click()));
  root.querySelector('[data-ifcx-input]')?.addEventListener('change', (e) => {
    const files = [...e.target.files];
    e.target.value = '';
    if (files.length) guard(() => openIfcx(files, null, { beside: true }));
  });




  /** The 3D view, made on the first IFC model or point cloud. */
  ST.liveTex = null;
  const { syncVis, visAct, applyAssist, renderAssist, renderLayers } = mountVisAgents({
    ST, $, ui, status, boxRoundPick, settings, settingsDlg, fileHost, clearProps,
    get visButtons() { return visButtons; },
    get VIS_TITLE() { return VIS_TITLE; },
    get renderColor() { return renderColor; },
    get treeView() { return treeView; },
  });
  const { lineName, short, fillTree, afterPick } = mountTreeAccess({
    ST, ui, syncVis,
    get treeView() { return treeView; },
    get renderQto() { return renderQto; },
  });
  const { theme, index, fieldLabel, renderColor, recolor, openScheme, applyColor, colorOff } = mountColorBy({
    ST, ui, status, syncVis, download,
    get fdClear() { return fdClear; },
    get treeView() { return treeView; },
  });
  const { fx, ownNote, gu, locatePoint } = mountLocation({
    ST, status, entryOf, cur, settings,
    get OWN_UNIT() { return OWN_UNIT; },
    get syncMeasureBar() { return syncMeasureBar; },
    get redrawMeasure() { return redrawMeasure; },
  });
  const { eyeShow, eyeBad, walkOpts, walkOn, walkOff, measurementText, measureOn, measureOff, syncMeasureBar, shiftNow, redrawMeasure, placeMeasureLabels } = mountWalkMeasure({
    ST, ui, status, guard, locatePoint, locateCloudPoint, stopPlacing, root,
    get uw() { return uw; },
    get setPressed() { return setPressed; },
    get um() { return um; },
    get models() { return models; },
  });
  const { ensureViewer, openIfc } = mountIfcOpen({
    ST, ui, status, frame, SMALL_MODEL, settings, addCorner, fromFolder, syncDisplayButtons, ifcUnitsSaid, fillIfcInfo, fillStoreys, fillClasses, fillTree, afterPick, renderColor, clearProps, showMany, cur, renderModels, renderChanges, applyViewTurn, sectionOff, onBoxGrip, walkOff, measureOff, placeMeasureLabels, ensureMaps, syncVis, showStage, stopPlacing, syncEdit, root,
    get showProps() { return showProps; },
    get setPressed() { return setPressed; },
    get models() { return models; },
    get library() { return library; },
    get placementOf() { return placementOf; },
    get hasSavedMaps() { return hasSavedMaps; },
    get renderIssues() { return renderIssues; },
    get renderFind() { return renderFind; },
    get syncAccepted() { return syncAccepted; },
    get renderChecks() { return renderChecks; },
    get renderQto() { return renderQto; },
    get fdClear() { return fdClear; },
    get renderFd() { return renderFd; },
    get renderClash() { return renderClash; },
    get toolButton() { return toolButton; },
  });
  // ---- IFC ----
  /** 0.10 BK.8 (units on import): what the opened IFC says about its length unit, in words after "Opened …". A file that states none is
   *  read in meters (the IFC standard's rule) and that is said: never a silent guess. */
  function ifcUnitsSaid(file) {
    if (ST.ifcAnswered) { const s = ST.ifcAnswered; ST.ifcAnswered = ''; return s; }   // the person's answer, not the file's own statement
    try {
      const u = lengthUnitOf(ST.ifc.api, ST.model.modelID);
      if (!u.stated) return ' ' + t('ifc.units.none', { file: file.name });
      const id = { 1: 'mm', 10: 'cm', 1000: 'm', 25.4: 'in', 304.8: 'ft' }[Math.round(u.mm * 1e6) / 1e6];
      return ' ' + t('ifc.units.stated', { unit: id ? window.ccImportUnits?.unitName(id) || id : t('ifc.units.mm', { mm: +u.mm.toPrecision(8) }) });
    } catch (e) { return ''; }
  }
  /** 0.10 BK.8: an IFC that states no length unit is asked about before it is opened (the shell's one dialog, remembered per file) and the
   *  answer is written into the model text (ifc-length-unit.js), so the reader and a later Save agree. → the bytes to load, or null (not answered). */
  ST.ifcAnswered = '';
  async function ifcWithUnits(data, file) {
    ST.ifcAnswered = '';
    const U = await import('./ifc-length-unit.js');
    if (!window.ccImportUnits || U.hasLengthUnit(data)) return data;
    const a = await window.ccImportUnits.resolve({ file, format: 'IFC', stated: null, choices: ['mm', 'cm', 'm', 'in', 'ft'], suggest: 'm' });
    if (!a) { status(t('ifc.units.notgiven', { file: file.name }), true); return null; }
    try { data = U.stateLengthUnit(data, a.unit); ST.ifcAnswered = ' ' + a.text; }
    catch (e) { ST.ifcAnswered = ' ' + t('ifc.units.none', { file: file.name }); }   // a file with no project to hold a unit: read as the standard says, and said
    return data;
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
    const notes = [...(ST.ifc.api.notes?.(model.modelID) || [])];
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
      box.addEventListener('change', () => ST.viewer.setStoreyVisible(s.id, box.checked, cur().mi));
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
  ST.tree = null;
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
      if (on) ST.viewer.vis.unhide(keys); else ST.viewer.vis.hide(keys);
      ST.viewer.applyVisibility();
      treeView.sync();
      syncVis();
    },
    onPick: (n, { add }) => {
      // an element: itself (its parts lit with it); a group, storey or space: every element in it — rooms only while shown
      const own = n.kind === 'element' ? [n.key] : leaves(n).filter((k) => ST.viewer.spacesOn || !isSpaceKey(k));
      if (!own.length) { status(t('tree.nothing', { name: treeView.o.label('name', n) })); return; }
      let keys = own;
      if (add) { const cur = new Set(ST.viewer.selection); const all = own.every((k) => cur.has(k)); for (const k of own) { if (all) cur.delete(k); else cur.add(k); } keys = [...cur]; }
      ST.viewer.select(keys, { also: n.kind === 'element' ? leaves(n) : [] });
      afterPick();
      if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps();
      if (n.kind !== 'element' && !add) status(t('tree.picked', { n: own.length, name: treeView.o.label('name', n) }));
    },
    onInfo: (n) => { ST.viewer.select([n.key], { also: leaves(n) }); afterPick(); showProps(n.key); },
    onZoom: (n) => { if (ST.viewer.frameKeys(leaves(n))) status(t('tree.zoomed', { name: treeView.o.label('name', n) })); },
  });
  window.bimcraftTree = () => ({ tree: ST.tree, view: treeView });   // for tests
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
      visit(ST.tree?.root, 0);
      if (ST.tree?.loose) visit(ST.tree.loose, 0);
      return out;
    };
    const goAccess = () => window.ccAccess.mount({
      stage: ui.canvas, label: () => t('access.stage'),
      walk: nodes,
      describe: () => {
        if (!ST.tree || (!ST.tree.root && !ST.tree.loose)) return t('access.empty');
        const st = nodes().filter((x) => x.node.kind === 'spatial' && /storey/i.test(x.node.cls || ''));
        return t('access.model', { name: ST.tree.root ? treeView.o.label('name', ST.tree.root) : '', n: ST.tree.root?.size ?? 0, storeys: st.length, list: st.slice(0, 12).map((x) => treeView.o.label('name', x.node)).join(', ') });
      },
      selection: () => { const n = ST.viewer?.selection?.size || 0; if (!n) return t('access.nosel'); return t('access.selected', { n, what: String(ui.props?.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 240) }); },
      pick: (p, item) => { if (item) { treeView.o.onPick(item.node, { add: false }); window.ccAccess.say(t('access.picked', { what: item.label, n: ST.viewer?.selection?.size || 0 })); } else window.ccAccess.say(t('access.nosel')); },
    });
    const goStatus = () => window.ccAccess.follow(ui.status, { max: 240 });
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }

  // ---- Find (0.4 B14) ----
  ST.findRules = [{ field: 'cls', op: 'is', value: '' }]; ST.findMode = 'all'; ST.findSaving = false;
  const { showProps, editableRow } = mountPropsPanel({
    ST, ui, status, clearProps, lengthRows, lengthToFile, showForeign, cur, entryOf, addonSections, afterEdit, libraryBlock, syncEdit,
    get tagLast() { return tagLast; },
    get copyRow() { return copyRow; },
    get copyAllBar() { return copyAllBar; },
    get copyBtn() { return copyBtn; },
  });
  const { editableBox, runModelChecks, pickKeys, projectOf, saveAcceptedInIfc, syncAccepted, keysOfGuid } = mountChecksPanels({
    ST, status, afterPick, showProps, nameOfKey, index, showMany, afterEdit, rebuild,
    get readRules() { return readRules; },
    get guidOf() { return guidOf; },
    get renderChecks() { return renderChecks; },
    get PROBLEMS_PSET() { return PROBLEMS_PSET; },
    get PROBLEMS_FORMAT() { return PROBLEMS_FORMAT; },
  });
  const { readSets, renderFind, runFind, spacesIndex, spaceRes, qtoResult, renderQto, readRules, renderChecks } = mountSidePanels({
    ui, status, afterPick, editableBox, runModelChecks, pickKeys, clearProps, showProps, showMany,
    get mode() { return ST.mode; },
    get model() { return ST.model; },
    get index() { return index; },
    get findRules() { return ST.findRules; }, set findRules(v) { ST.findRules = v; },
    get findMode() { return ST.findMode; }, set findMode(v) { ST.findMode = v; },
    get findSaving() { return ST.findSaving; }, set findSaving(v) { ST.findSaving = v; },
    get viewer() { return ST.viewer; },
    get ifc() { return ST.ifc; },
    get qtoScope() { return ST.qtoScope; }, set qtoScope(v) { ST.qtoScope = v; },
    get qtoGroups() { return ST.qtoGroups; },
    get qtoSums() { return ST.qtoSums; }, set qtoSums(v) { ST.qtoSums = v; },
    get fieldLabel() { return fieldLabel; },
    get qtoView() { return ST.qtoView; }, set qtoView(v) { ST.qtoView = v; },
    get ifcName() { return ST.ifcName; },
    get download() { return download; },
    get nameOfKey() { return nameOfKey; },
    get checkRes() { return ST.checkRes; },
  });
  window.addEventListener('storage', (e) => { if (e.key === SETS_KEY && ST.model) renderFind(); });   // another tab saved a set
  ui.findDetails?.addEventListener('toggle', () => { if (ui.findDetails.open) renderFind(); });
  window.bimcraftFind = { run: (rules, m = 'all') => { ST.findRules = rules; ST.findMode = m; ui.findDetails.open = true; renderFind(); runFind(); return [...ST.viewer.selection]; } };   // for tests

  // ---- 4D schedule (0.4 B22) ----
  ST.fdTasks = null; ST.fdErrors = []; ST.fdDay = null; ST.fdOn = false; ST.fdPlay = 0; ST.fdFile = ''; ST.fdRaf = 0;
  ST.fdGroup = '';   // 0.6 WL.6: '' = every task, else a stage ('s:…') or work package ('p:…') key (ifc-4d.js groupsOf)
  const { fdView, fdSetGroup, renderFd, fdOpen, fdApply, fdClear } = mountFourD({
    ST, ui, status, treeView, pickKeys, index, colorOff, syncVis, download,
    get theme() { return theme; },
    get clearCompare() { return clearCompare; },
  });
  // 0.8 chem-draw_PART_4 (XE.9): live values tint the elements whose Tag is a reading's tag (the Plant tab's "Show the values"); read only, one colour per state.
  const LIVE_TINT = { ok: '#3a8f5c', uncertain: '#c9891a', bad: '#d33a2f', stale: '#8a8a8a', high: '#d33a2f', low: '#2a6fd6' };
  window.bimcraftTint = {
    tint: (list) => {
      if (!ST.viewer) return { matched: 0, unmatched: (list || []).map((x) => x.tag) };
      const rows = (list || []).filter((x) => x && x.tag != null), m = matchTasks(index(), rows.map((x) => ({ rows: [{ field: 'tag', value: x.tag }] })));
      const colors = new Map(), unmatched = [];
      m.forEach((tk, k) => { if (!tk.keys.length) unmatched.push(rows[k].tag); for (const key of tk.keys) colors.set(key, LIVE_TINT[rows[k].state] || LIVE_TINT.ok); });
      ST.viewer.setColors(colors.size ? colors : null);
      return { matched: colors.size, unmatched };
    },
    clear: () => { if (ST.viewer) ST.viewer.setColors(null); },
  };
  window.bimcraftFourD = { open: (name, text) => fdOpen(new File([text], name, { type: /\.(xml|mspdi)$/i.test(name) ? 'application/xml' : 'text/csv' })), tasks: () => ST.fdTasks, day: (d) => { ST.fdDay = d; fdApply(); }, group: fdSetGroup, groups: () => groupsOf(ST.fdTasks || []), state: () => ST.fdOn && { day: ST.fdDay, tasks: ST.fdTasks.length, group: ST.fdGroup, shown: fdView().length, status: Object.fromEntries(statusAt(fdView(), ST.fdDay)), solid: ST.viewer.vis.isolated ? ST.viewer.vis.isolated.size : null } };   // for tests

  // ---- Quantity totals (0.4 B20) ----
  ST.qtoScope = 'all'; ST.qtoGroups = ['cls']; ST.qtoSums = null; ST.qtoView = 'totals';   // qtoSums null = the quantity sets' fields, first time
  ui.qtoDetails?.addEventListener('toggle', () => { if (ui.qtoDetails.open) renderQto(); });
  window.bimcraftQto = { set: (o) => { if (o.view) ST.qtoView = o.view; if (o.scope) ST.qtoScope = o.scope; if (o.groups) ST.qtoGroups = o.groups; if (o.sums) ST.qtoSums = o.sums; ui.qtoDetails.open = true; renderQto(); return qtoResult(); }, spaces: () => spaceRes() };   // for tests; spaces(): the space schedule rows (SuperCad Studio's accommodation schedule, bk-r4-office-10)

  ST.checkRes = null;
  ST.adviceSrc = null;   // 0.10 BK.73: the Drawing advice source (below)
  ST.checksSrc = null; ST.checksArmed = false;   // 0.7.1 → 0.8: Model checks in the shell's Problems (below)
  /** 0.8 DC.115: what the model's shapes are made of (extrusions and other solids stay editable; face lists do not) and, when some
   *  tessellated bodies are exactly straight prisms, a button that writes them back as IfcExtrudedAreaSolid (one undo step). */
  ST.solidsRep = null;
  ui.checksDetails?.addEventListener('toggle', () => { if (ui.checksDetails.open) renderChecks(); });
  window.bimcraftChecks = { run: () => { ui.checksDetails.open = true; runModelChecks(); return ST.checkRes; } };   // for tests
  // ---- Problems (0.7.1 → 0.8; docs/0.8-PROBLEMS-SPEC.md): Model checks (each run) and the regulations add-on (model-ui.js, live) in the shell's
  // ⚠ panel (manifest "problems"). A problem names elements by GlobalId; a click picks them and frames them. Accepted problems travel inside
  // the IFC (owner 2026-10-26): one property set CadCraft_Problems on IfcProject — Accepted (IfcText, the list as JSON) and Format (IfcLabel) —
  // written as one undo step through IfcEditor.modelChange, read back on open and after every edit, undo and redo (renderChanges).
  const PROBLEMS_PSET = 'CadCraft_Problems', PROBLEMS_FORMAT = 'cadcraft-problems-accepted 1';
  ST.guidIx = null;
  {
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      // 0.9 GH.3-A: lengths, areas and volumes in BimCraft's own problems' words follow the display unit (the lists keep the words as made)
      const Qp = (list) => list.map((p) => (p.text ? { ...p, text: localizeQuantities(p.text, getDisplayUnits()) } : p));
      const brkSrc = P.source({ id: 'bimcraft.breakit', kind: 'engine', label: t('problems.src.breakit') });
      ST.breakSet = (list) => brkSrc.set(Qp(list));
      ST.breakSet(ST.breakProblems);
      const spSrc = P.source({ id: 'bimcraft.scanprogress', kind: 'import', label: t('sp.title') });
      ST.brkScanSet = (list) => spSrc.set(Qp(list));
      ST.brkScanSet(ST.scanProgProblems);
      const frmSrc = P.source({ id: 'bimcraft.frame', kind: 'engine', label: t('problems.src.frame') });
      ST.frameSet = (list) => frmSrc.set(Qp(list));
      ST.frameSet(ST.frameProblems);
      // 0.10 BK.73: advice from the drawing tools (a stair, column, ramp or opening outside the usual sizes was made as asked)
      // It is worked out from the model itself (draw-advice-model.js), so it is there again when a file is reopened and goes when the thing is put right.
      ST.adviceSrc = P.source({ id: 'bimcraft.advice', kind: 'check', label: t('advice.title'), debounceMs: 300,
        run: () => (ST.model && ST.mode === 'ifc' && ST.editor ? Qp(adviceProblems(readAdvice(new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid)), t)) : null) });
      onAdvice(() => ST.adviceSrc.invalidate()); ST.adviceSrc.invalidate();
      ST.checksSrc = P.source({ id: 'bimcraft.checks', kind: 'check', label: t('checks.title'),
        run: () => (ST.checksArmed && ST.model && ST.mode === 'ifc' ? checkProblems(runChecks(index(), ST.model, { required: readRules() }), { guidOf, nameOf: nameOfKey, t }) : null) });
      const problemsAdapter = {
        t: (k, v) => localizeQuantities(t(k, v), getDisplayUnits()),   // 0.9 GH.3-A: problems worded from a key (checks, add-ons' msg) in the display unit
        file: () => ST.ifcName,
        packs: () => rulesProvider()?.packs?.() || [],
        saveAccepted: saveAcceptedInIfc,
        select: (p) => { if (!ST.viewer || ST.mode !== 'ifc') return; const keys = [...new Set(p.about.flatMap((r) => keysOfGuid(r.id)))]; if (keys.length) pickKeys(keys); },
      };
      P.adapter(problemsAdapter);
      // 0.9 GH.3-A: a unit change re-words BimCraft's own lists and re-draws the panel (setting the adapter again repaints it) for every other source
      window.addEventListener('bimcraft-units', () => { ST.breakSet(ST.breakProblems); ST.brkScanSet(ST.scanProgProblems); ST.frameSet(ST.frameProblems); if (ST.checksArmed) ST.checksSrc?.invalidate(); P.adapter(problemsAdapter); });
      P.markers(bimMarkers({ viewer: () => ST.viewer, stage: ui.canvas.parentElement, keysOf: keysOfGuid, active: () => ST.mode === 'ifc' }));   // P.6: ⚠ over the 3D view
    };
    if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }
  }
  // ---- Check against IDS (0.7.1 71.25; ids-ui.js, cc-ids in ./ids/): the client's .ids, referred to from the IFC by a property set on
  // IfcProject (CadCraft_IDS: Name, Hash, Title, Version, Format; one undo step through modelChange, like the accepted problems above).
  // The text stays beside the model in this browser (ids-ui.js); Content only with Settings › "Keep the IDS inside the IFC" (lead 2026-10-26)
  const IDS_PSET = 'CadCraft_IDS', IDS_FORMAT = 'cadcraft-ids 1';
  if (ui.idsBox) ST.idsUi = mountIds({
    box: ui.idsBox, details: ui.idsDetails, openBtn: ui.idsOpen, t, el, status: (m) => status(m, false, true),
    ifc: () => (ST.editor && ST.mode === 'ifc' && typeof ST.editor.api?.file === 'function' ? ST.editor.api.file(ST.editor.mid) : null),
    canWrite: () => !!ST.editor && ST.mode === 'ifc',
    embed: () => settings.idsEmbed === true,   // Settings › BimCraft › Keep the IDS inside the IFC (off)
    readRecord: () => {
      if (!ST.editor || ST.mode !== 'ifc') return null;
      try {
        const w = new ModelWriter(ST.editor.W, ST.editor.api, ST.editor.mid), pid = projectOf(w);
        const ps = pid === null ? null : w.readPset(pid, IDS_PSET);
        return ps && ps.Hash ? { name: String(ps.Name || ''), hash: String(ps.Hash), title: String(ps.Title || ''), version: String(ps.Version || ''), text: typeof ps.Content === 'string' && ps.Content ? ps.Content : null } : null;
      } catch (e) { return null; }
    },
    writeRecord: (rec) => {
      if (!ST.editor || ST.mode !== 'ifc') throw new Error(t('ids.err.noifc'));
      const run = (ed) => new ModelWriter(ed.W, ed.api, ed.mid).run((w) => {
        const pid = projectOf(w);
        if (pid === null) throw new Error(t('problems.err.noproject'));
        const had = w.readPset(pid, IDS_PSET);
        // Content: the text only when embedding; a text embedded before is emptied, never left behind
        const content = rec?.text ? [['Content', 'IFCTEXT', rec.text]] : had && 'Content' in had ? [['Content', 'IFCTEXT', '']] : [];
        w.upsertPset(pid, IDS_PSET, [['Name', 'IFCLABEL', rec ? rec.name : ''], ['Hash', 'IFCLABEL', rec ? rec.hash : ''], ['Title', 'IFCLABEL', rec ? rec.title : ''], ['Version', 'IFCLABEL', rec ? rec.version : ''], ...content, ['Format', 'IFCLABEL', IDS_FORMAT]]);
        return {};
      });
      ST.editor.modelChange(run, { label: t(rec ? 'ids.undo.set' : 'ids.undo.clear'), verb: '' });
      afterEdit();
    },
  });
  window.bimcraftIds = ST.idsUi;   // for tests (tools/ids/browser-bimcraft.mjs)

  // ---- Clash check (0.4 B17) ----
  ST.clashA = 'pick'; ST.clashB = 'all'; ST.clashTol = '0.01'; ST.clashRes = null; ST.clashRun = null; ST.clashAt = -1; ST.clashMsg = '';
  ST.clashFix = null;   // 0.9 EG.42: discipline proposals for the clashes (mounted with the assistants, below)
  /** What a set can be: the pick, every class over the open models, each saved search set, everything. */
  ST.hostSets = [];   // BK.128 / BK.45: sets of elements a host (Super's model layers) names by GlobalId
  function keysOfGuids(guids) { const ix = guidIndex(), out = []; for (const g of guids || []) { const k = ix.get(g); if (k !== undefined) out.push(k); } return out; }
  const { renderClash, runClash } = mountClash({
    ST, ui, status, frame, treeView, afterPick, readSets, keysOfGuids, nameOfKey, index, showMany, entryOf, showTab,
    get models() { return models; },
    get mepStruct() { return mepStruct; },
    get mepRoute() { return mepRoute; },
    get renderIssues() { return renderIssues; },
  });
  // 0.7 LC.9 (mep-07, mep/structure-ui.js): ready-made MEP × structure sets, soft clearances and the openings list
  const mepStruct = mountStructure({
    t, el, viewer: () => ST.viewer, models: () => models, host: () => (ST.mode === 'ifc' ? cur() : null), editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    entryOf, nameOfKey, status: (m, bad) => status(m, bad), download, fileName: () => ST.ifcName,
    author: authorOf, rerender: renderClash,
    show: (keys) => { ST.viewer.vis.isolate(keys, { ghost: true }); ST.viewer.applyVisibility(); ST.viewer.select(keys); afterPick(); showMany(); ST.viewer.frameKeys(keys); treeView.sync(); },
  });
  // 0.10 MEP.1 (#1556, mep/autoroute-ui.js): a duct network found round the open model and drawn as runs (one undo step)
  const mepRoute = mountAutoroute({
    t, el, host: () => (ST.mode === 'ifc' ? cur() : null), editor: () => (ST.mode === 'ifc' ? ST.editor : null), status: (m, bad) => status(m, bad), rerender: renderClash,
    apply: async (run, label) => { ST.editor.modelChange(run, { label, verb: '' }); await rebuild(); afterEdit(); },
  });
  // 0.10 UI.17: declared here, ahead of the Part links card, which reads it while it mounts (it was declared further down: "Cannot access 'models' before initialization" on every page load)
  const models = [];   // { mi, ifc, model, editor, name, tag, offset [x, y, z] metres (IFC axes), visible }
  // 0.10 SU.1814 (bim-part-link-10): the "Part links" card; the button is drawn by ui.inc only when PartCraft takes a link in this area
  const partLinks = (() => {
    const btn = root.querySelector('[data-part-link]');
    if (!btn || !(btn.dataset.partUrl || btn.dataset.modelUrl)) return null;
    return mountPartLinks({
      t, el, root, status, button: btn, countEl: btn.querySelector('[data-part-link-count]'), partUrl: btn.dataset.partUrl, modelUrl: btn.dataset.modelUrl,   // 0.11 SU.1814: ModelCraft too
      models: () => models.filter((m) => m.ifc && m.model), selection: () => (ST.mode === 'ifc' ? [...ST.viewer.selection] : []),
      show: (keys) => { ST.viewer.select(keys); afterPick(); showProps(keys[0]); ST.viewer.frameKeys(keys); },
      apply: async (ent, run, label) => {
        if (ent !== cur()) throw Object.assign(new Error('partlink.err.notactive'), { code: 'partlink.err.notactive' });
        ent.editor.modelChange(run, { label, verb: t('partlink.verb') });
        await rebuild(); afterEdit();
      },
      // 0.11 SU.1814 (su-finish-11): an accept whose IFC solids do not build to the shape sent is taken back and written as a mesh
      undo: async (ent) => { if (ent !== cur() || !ent.editor.undo()) return; try { undoHook.undone(); } catch { /* not mounted yet */ } await rebuild(); afterEdit(); },
    });
  })();
  window.bimcraftPartLinks = partLinks;
  function nameOfKey(k) { const e = entryOf(k); if (!e) return '#' + k; const id = k - e.model.keyBase; const n = e.ifc.api.GetLine(e.model.modelID, id).Name?.value; return (n || '#' + id) + (models.length > 1 ? ' (' + e.name + ')' : ''); }

  // ---- Issues: BCF (0.4 B9) ----
  ST.issues = []; ST.issueForm = false; ST.currentIssue = null; ST.guidKeys = null;
  // Your name on issues (0.5 SI.9): signed in, it is your account's (fileHost.account()) with nothing to type; a name typed in
  // Settings › BimCraft or in the issue form wins until it is cleared. Signed out: the form's name box, as before.
  const typedAuthor = () => { try { return localStorage.getItem('bimcraft.author') || ''; } catch (e) { return ''; } };
  const accountName = () => { const a = fileHost.account(); return a && typeof a.name === 'string' ? a.name.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120) : ''; };
  function authorOf() { return typedAuthor() || accountName(); }
  /** A name typed for issues: kept unless it is the account's own (or empty: the account's from then on). */
  const keepAuthor = (v) => {
    try { if (!v || v === accountName()) localStorage.removeItem('bimcraft.author'); else localStorage.setItem('bimcraft.author', v); } catch (err) { /* this tab keeps it */ }
  };
  // Settings › BimCraft › Your name on issues: "From your account (<name>)" + "Use another name", or the typed name
  ST.authorOther = false;
  function syncAuthorForm() {
    const box = settingsDlg && settingsDlg.querySelector('[data-bc-author-set]');
    if (!box) return;
    const acc = accountName(), typed = typedAuthor(), other = !!typed || ST.authorOther;
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
    new MutationObserver(() => { if (settingsDlg.open) { ST.authorOther = false; syncAuthorForm(); } }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
    settingsDlg.addEventListener('change', (e) => {
      if (e.target.name !== 'bcAuthor') return;
      const v = e.target.value.trim().slice(0, 120);
      keepAuthor(v);
      if (!v) ST.authorOther = false;
      syncAuthorForm();
      status(v && v !== accountName() ? t('set.author.done', { name: v }) : accountName() ? t('set.author.account.done', { name: accountName() }) : t('set.author.cleared'));
    });
    settingsDlg.addEventListener('click', (e) => {
      if (e.target.closest('[data-bc-author-other]')) { ST.authorOther = true; syncAuthorForm(); settingsDlg.querySelector('[name="bcAuthor"]')?.focus(); }
      else if (e.target.closest('[data-bc-author-mine]')) { keepAuthor(''); ST.authorOther = false; syncAuthorForm(); status(t('set.author.account.done', { name: accountName() })); }
    });
  }
  fileHost.on('account', () => { syncAuthorForm(); if (ST.issueForm) renderIssues(); });
  syncAuthorForm();
  const { guidIndex, guidOf, frameC, renderIssues } = mountBcfIssues({
    ST, ui, status, guard, afterPick, showProps, models, accountName, authorOf, keepAuthor, clearProps, showMany, entryOf, applySection, sectionOff, download,
  });

  // ---- Color by property (0.4 B15) ----
  ST.propIx = null; ST.colorField = ''; ST.colorLegend = null; ST.picked = new Set();
  ST.colorScheme = null;   // 0.5 WL.5: a scheme opened from a file or made by changing a color; it keeps its colors over themes and edits
  // the theme has its own steps of the same colors
  // (a scheme keeps the colors it was given)
  new MutationObserver(() => { if (ST.colorField && ST.viewer && !ST.colorScheme) applyColor(ST.colorField, true); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
  ui.colorInput?.addEventListener('change', () => { const f = ui.colorInput.files[0]; ui.colorInput.value = ''; if (f) guard(() => openScheme(f)); });
  window.bimcraftColor = { apply: applyColor, off: colorOff, legend: () => ST.colorLegend, index, scheme: () => ST.colorScheme, recolor };   // for tests

  // ---- Properties ----
  function clearProps() {
    ST.selInfo = null;
    ST.bundleUi?.picked(null);
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

  ST.gridFocus = null;   // the grid row to focus once the panel has been rebuilt after an edit

  /** Several elements picked: how many, by class. Properties are shown for one element at a time. */
  function showMany() {
    ST.pickToken++;
    const keys = [...ST.viewer.selection];
    ST.selected = ST.viewer.selected;
    ST.selInfo = null;
    const byClass = new Map(), keysOf = new Map();
    for (const k of keys) { const e = entryOf(k); const c = (e === cur() ? classOfId(k - ST.model.keyBase) : e?.model.classOf.get(k - e.model.keyBase) || t('pick.many.unknown')).replace(/^Ifc/, ''); byClass.set(c, (byClass.get(c) || 0) + 1); if (!keysOf.has(c)) keysOf.set(c, []); keysOf.get(c).push(k); }
    // 0.9 D9.1 (Discord ask, 2026-11-03): a pick of several classes (columns in walls, a box over a plan) keeps one class in a
    // click, so what those elements share (a column's height, a wall's type) shows without picking them again one by one
    const only = (c) => { const ks = keysOf.get(c) || []; ST.viewer.select(ks); afterPick(); if (ks.length > 1) showMany(); else if (ks.length) showProps(ks[0]); };
    const mixed = byClass.size > 1;
    ui.props.replaceChildren(
      el('p', { className: 'bc-prop-name', 'data-pick-count': String(keys.length) }, t('pick.many', { n: keys.length })),
      el('p', { className: 'bc-muted' }, t('pick.many.hint')),
      el('p', { className: 'bc-h' }, t('pick.many.classes')),
      ...(mixed ? [el('p', { className: 'bc-muted', 'data-pick-only-hint': '' }, t('pick.many.only.hint'))] : []),
      el('ul', { className: 'bc-counts' }, [...byClass].sort((a, b) => b[1] - a[1]).map(([c, n]) => el('li', {}, el('span', {}, c),
        el('span', { className: 'n' }, num(n)),
        mixed ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-pick-only': c, title: t('pick.many.only.title', { cls: c }), onClick: () => only(c) }, t('pick.many.only')) : null))));
    ST.modelUi?.decorate(ui.props);   // several drawn walls, doors or windows: what they share (0.5 BM.5)
    if (ST.editor) ST.classifyUi?.decorate(ui.props, keys.filter((k) => entryOf(k) === cur()).map((k) => k - ST.model.keyBase));   // 0.10 BK.94
    if (ST.editor) ST.verifyUi?.decorate(ui.props, keys.filter((k) => entryOf(k) === cur()).map((k) => k - ST.model.keyBase));   // 0.10 BK.64 / BK.49
    if (ST.editor) ST.lodUi?.decorate(ui.props, keys.filter((k) => entryOf(k) === cur()).map((k) => k - ST.model.keyBase));   // 0.10 bim-lod-10
    syncEdit();
    addonSections(addonSelection(), ST.pickToken);   // 0.5 AO.7
  }

  /** Properties of an element in another model: read only, with a way to make that model the active one. */
  function showForeign(p, ent) {
    ui.props.replaceChildren(
      el('p', { className: 'bc-prop-cls' }, p.cls.replace(/^Ifc/, '')),
      el('p', { className: 'bc-prop-name' }, p.name || t('prop.unnamed')),
      el('div', { className: 'bc-card-alert', 'data-foreign': '' },
        el('p', {}, t('fed.foreign', { file: ent.name })),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => { const k = ST.selected; setActive(ent); ST.viewer.select([k]); afterPick(); showProps(k); } }, t('fed.make.active'))),
      copyAllBar(p, ent.name),
      el('dl', { className: 'bc-dl' }, copyRow(t('prop.type'), p.typeName), copyRow(t('prop.tag'), p.tag), copyRow(t('prop.guid'), p.guid), copyRow(t('prop.line'), '#' + p.id)),
      ...p.sets.map((s, i) => el('details', { className: 'bc-set', open: i < 3 }, el('summary', {}, s.name),
        el('dl', { className: 'bc-dl' }, s.rows.map((r) => copyRow(r.name, r.value))))));
    syncEdit();
  }

  // ---- Federation (0.4 B16) ----
  // (models is declared above, before the Part links card reads it: 0.10 UI.17)
  ST.active = null;
  ST.refC = null;     // the first model's coordination matrix: every model is placed in its coordinates

  ui.modelsSec?.querySelector('[data-model-add]')?.addEventListener('click', () => ui.modelInput.click());
  // 0.8 LC.2: the team's model (shell teamwork module, a cloud file in a project); the button shows when the shell has the module and this file is in the cloud
  const teamBtn = ui.modelsSec?.querySelector('[data-model-team]');
  window.addEventListener('cc-teamwork-ready', showTeamBtn);
  teamBtn?.addEventListener('click', () => guard(async () => {
    const tw = teamTw();
    if (!tw) return;
    const { loadTeamModels } = await import('./team-models.js');
    status(t('fed.team.reading'));
    const r = await loadTeamModels({ tw, addModel, have: () => models.map((m) => m.teamDrawing).filter(Boolean) });
    if (!r.ok) { status(t('fed.team.failed', { why: r.message || '' }), true); return; }
    status(t(r.added.length ? 'fed.team.done' : 'fed.team.none', { n: r.added.length, hidden: r.hidden, turned: r.turned, skipped: r.skipped.length }));
  }));
  showTeamBtn();

  // ---- Compare versions (0.4 B21) ----
  ST.cmpOld = null; ST.cmpNew = null; ST.cmpRes = null; ST.cmpPair = null;
  const { renderCompare, clearCompare } = mountCompare({
    ST, ui, status, treeView, fdClear, pickKeys, models, theme, index, fieldLabel, colorOff, cur, entryOf, syncVis, download,
  });
  ui.modelInput?.addEventListener('change', () => {
    const files = [...ui.modelInput.files];
    ui.modelInput.value = '';
    guard(async () => { for (const f of files) await addModel(f); });
  });
  window.bimcraftModels = { list: () => models.map((m) => ({ mi: m.mi, name: m.name, active: m === cur(), visible: m.visible, offset: m.offset, elements: m.model.elements })), add: addModel, setActive: (mi) => setActive(models.find((m) => m.mi === mi)), matrix: (mi) => ST.viewer.modelMatrix(mi),
    // SuperCad Studio (SC.3 / SC.5, super-wire-links.js): a shape another app made is shown beside the model, moved and taken out again through the same code as the Models list
    remove: (mi) => { const m = models.find((x) => x.mi === mi); return m ? removeModel(m) : null; },
    setOffset: (mi, v) => { const m = models.find((x) => x.mi === mi); if (!m || !Array.isArray(v) || v.length !== 3 || !v.every(Number.isFinite)) return false; applyOffset(m, v.slice()); renderModels(); return true; } };   // for tests






  ST.bimShell = null; ST.savedOnce = false;
  const undoHook = mountUndoHook({ changes: () => (ST.editor ? ST.editor.changes : []), undoOne: undo });   // 0.8 EG.77

  // through the workspace's commands when they are there (one enablement for every caller), else as before
  ui.undo.addEventListener('click', () => { if (ST.coreCommands) ST.coreCommands.execute('undo'); else undo(); });
  ui.save.addEventListener('click', () => { if (ST.coreCommands) ST.coreCommands.execute('save'); else saveIfc(); });
  document.addEventListener('keydown', (e) => {
    if (document.querySelector('dialog[open]')) return;
    if (!ST.coreCommands) {   // no workspace commands (no Draw extension): the keys as they were
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's' && unsavedIn(ST.editor)) { e.preventDefault(); saveIfc(); }
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z' && ST.editor && ST.editor.dirty && !e.target.closest('input, textarea, select')) { e.preventDefault(); undo(); }
      return;
    }
    const id = shortcutCommand(e, ST.workspace?.active ? ST.workspace.state() : {});
    // Escape / fit retain established tool cancellation and camera behavior in the fallback.
    if (!id || (!ST.workspace?.active && (id === 'clear' || id === 'fit' || id === 'open'))) return;
    e.preventDefault();
    ST.coreCommands?.execute(id);
  });


  // ---- the Documents panel (0.8 SU.1058, session vault-08): vault/vault-app.js, loaded on first use. Check-in writes the open model's
  // bytes (as Save writes them); a file opened from the vault is saved over only while it is checked out to you. ----
  ST.vaultUi = null; ST.vaultRef = null;
  const { openVault, section, clearBlankNote } = mountDocumentsPanel({
    ST, ui, status, guard, renderChanges, open, fileHost, root,
  });
  root.querySelector('[data-vault-open]')?.addEventListener('click', () => openVault().catch((err) => status(String(err.message || err), true)));

  const { openRevit } = mountRevitCard({
    ST, ui, status, frame, guard, fromFolder, showFolder, openIfc, section, showStage, root,
  });





  const { openDwg, readDrawingModel, togglePrint } = mountDwgOpen({
    ST, $, ui, xrefFiles, status, frame, guard, settings, fromFolder, cur, clearBlankNote, renderLayers, showStage, download, root, startsWith,
    get leave3d() { return leave3d; },
    get library() { return library; },
    get dynamicBlock() { return dynamicBlock; },
    get toggle3d() { return toggle3d; },
    get ui3() { return ui3; },
  });





  ST.blankNote = '';
  /**
   * Run a view switch with "Working…" over the drawing (2026-10-24 report: switches on a big drawing took seconds with no
   * sign of life). The overlay is shown and painted first; CSS keeps it invisible for 0.4 s, so quick switches don't flash.
   */
  ST.busyDepth = 0;

  const { ui3, toggle3d, leave3d, dynamicBlock, pick3d } = mountDwg3d({
    ST, $, ui, status, frame, addCorner, clearBlankNote, sectionOff, toggleSection,
  });
  // ---- Picking in the drawing's 3D view (0.4 B2): dwg-view3d.js pick() → the model-space entity → dwg-props.js ----
  ST.props3dSummary = null;



  // ---- Section plane: the IFC model (viewer3d.js) or a drawing in 3D (dwg-view3d.js; 0.4 B3) — whichever shows ----
  const usec = { bar: $('[data-sectionbar]'), range: $('[data-sec-range]'), offset: $('[data-sec-offset]'), hint: $('[data-sec-hint]'), flip: $('[data-sec-flip]'), unit: $('[data-sec-unit]') };
  const ubox = { panel: $('[data-sec-box]'), plane: $('[data-sec-plane]'), boxBtn: $('[data-sec-axis="box"]'), fill: $('[data-sec-fill]') };
  // Sections square to the building (0.5 BM.9): a building turned in its site (true north, shared coordinates) is cut along
  // its own walls, not the model's axes. The turn is the direction most wall length runs in (IfcPlacer.planRotation),
  // read once per model; the button shows only when it is more than half a degree.
  const turnBtn = $('[data-sec-turn]');
  ST.turnOf = null;
  turnBtn?.addEventListener('click', () => {
    if (!ST.viewer || !ST.cut) return;
    const on = !ST.viewer.sectionTurn, deg = buildingTurn();
    ST.viewer.setSectionTurn(on ? deg * Math.PI / 180 : 0);
    ST.cut.offset = null; ST.cut.cells = null; ST.cut.box = null;   // the numbers were in the other frame
    applySection();
    status(on ? t('sec.turn.on', { deg: Math.round(deg * 10) / 10 }) : t('sec.turn.off'));
  });
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
  const { ushape, AXIS } = mountSectionBoxWire({
    ST, $, status, applyBox, renderShape, setTilt, boxRoundPick, secOnDwg, applySection, sectionOff, secView, secUnit, secText, metres, startCutTurn, usec, ubox,
  });

  // ---- Walk (0.4 B18; viewer3d.js startWalk) ----
  const uw = { bar: $('[data-walkbar]'), out: $('[data-walk-out]'), height: $('[data-walk-height]'), gravity: $('[data-walk-gravity]'), collide: $('[data-walk-collide]') };
  ST.walking = false;
  uw.height.addEventListener('change', () => { walkOpts(); });   // a typed height is kept (in metres) when the unit changes
  eyeShow();
  window.addEventListener('bimcraft-units', eyeShow);
  uw.bar.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') e.target.blur();   // the walking keys go on working after a tick
    if (!ST.viewer?.walk) return;
    const o = walkOpts();
    if (!(o.height > 0 && o.height < 10)) { eyeBad(); return; }
    const old = ST.viewer.walk.o.height;
    Object.assign(ST.viewer.walk.o, o);
    ST.viewer.walk.pos.y += o.height - old;
    ST.viewer.settle();
    ST.viewer.applyWalk();
  });
  uw.bar.querySelector('[data-walk-done]').addEventListener('click', () => { walkOff(); status(t('walk.off')); });
  // the on-screen walk pad (touch screens): held = the key held
  for (const b of uw.bar.querySelectorAll('[data-walk-key]')) {
    const k = b.dataset.walkKey;
    const off = () => ST.viewer?.walkKey(k, false);
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); b.setPointerCapture?.(e.pointerId); ST.viewer?.walkKey(k, true); });
    b.addEventListener('pointerup', off);
    b.addEventListener('pointercancel', off);
    b.addEventListener('lostpointercapture', off);
    b.addEventListener('contextmenu', (e) => e.preventDefault());   // a long press on a pad button is not a right-click
  }
  window.bimcraftWalk = { on: walkOn, off: walkOff, state: () => ST.viewer?.walk && { pos: ST.viewer.walk.pos.toArray(), o: { ...ST.viewer.walk.o } } };   // for tests

  // ---- Measure (0.4 B6) ----
  const um = { bar: $('[data-measurebar]'), out: $('[data-measure-out]'), labels: $('[data-measure-labels]'), copy: $('[data-measure-copy]') };
  ST.measOrtho = false; ST.measShift = false;   // GH.3-C: orthogonal measuring: the bar's toggle, and Shift held
  ST.meas = null;   // { mode: 'distance' | 'area' | 'point', a: point | null, items: [{ kind, a, b, tris, center, text, geo }], hover }
  window.addEventListener('bimcraft-units', () => {
    if (ST.cut) applySection();
    ST.coordsUi?.render();
    for (const m of models) ui.modelList?.querySelectorAll(`[data-model-offset="${m.mi}"] input[data-axis]`).forEach((inp, i) => { inp.value = lenMark(m.offset[i] * 1000, getDisplayUnits()); });   // GH.3: the Offset boxes are re-worded in the new unit (they were written once)
    if (ST.mode === 'ifc' && ST.selected !== null && ST.selected !== undefined && ST.selInfo) showProps(ST.selected);   // GH.3-A: Properties in the new unit
    syncPlaceUnits?.();
    if (!ST.meas) return;
    for (const it of ST.meas.items) it.text = measurementText(it);
    syncMeasureBar(); redrawMeasure();
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Shift') shiftNow(true); });
  window.addEventListener('keyup', (e) => { if (e.key === 'Shift') shiftNow(false); });
  window.addEventListener('blur', () => shiftNow(false));
  ui.canvasWrap.addEventListener('pointermove', (e) => { if (ST.meas) { ST.meas.lastX = e.clientX; ST.meas.lastY = e.clientY; } shiftNow(e.shiftKey); }, true);
  ui.canvasWrap.addEventListener('pointerdown', (e) => { shiftNow(e.shiftKey); }, true);
  // ---- Location (0.5 WL.4; ifc-geo.js + the crs.js copy): where a picked point is on the earth. The point goes back to
  // its model's own file coordinates (each federated model has its own georeference), then through IfcMapConversion to
  // the map grid of its IfcProjectedCRS and on to latitude / longitude in Settings › BimCraft › Location's system; with
  // no map conversion, from IfcSite's latitude / longitude (approximate). crs.js and its catalog load on the first use.
  ST.crsLib = null; ST.pickLib = null;
  ST.geoCache = new WeakMap();   // model entry → readGeoref result (null = none); 0.8 D8.9 replaces it when the model's system changes
  const OWN_UNIT = { m: 'terrain.unit.m', ft: 'terrain.unit.ft', 'us-ft': 'terrain.unit.ftus' };
  // ---- Live view (0.7 RT.3, session realtime): the model in the real-time look beside the 3D view (rt/ is a copy of ModelCraft's,
  // tools/rt/sync.mjs; BimCraft's adapter rt/rt-bim.js); the same scene, paints, lamps and sun as Render ----
  ST.liveView = null;
  window.bimcraftRt = { open: openLive, get view() { return ST.liveView; } };   // for tests
  const { exportDae, openVr, openPaint, openViews } = mountXrPaint({
    ui, status, fileHost, models, nameOfKey, authorOf, frameC, renderIssues, cur, entryOf, renderChanges, walkOff, measureOff, renderHooks, rebuild, root,
    get viewer() { return ST.viewer; },
    get mode() { return ST.mode; },
    get modelUi() { return ST.modelUi; },
    get ifcName() { return ST.ifcName; },
    get xrOn() { return ST.xrOn; }, set xrOn(v) { ST.xrOn = v; },
    get xrWhy() { return ST.xrWhy; },
    get issues() { return ST.issues; },
    get editor() { return ST.editor; },
    get paintUi() { return ST.paintUi; }, set paintUi(v) { ST.paintUi = v; },
    get meas() { return ST.meas; },
    get liveTex() { return ST.liveTex; },
    get setPressed() { return setPressed; },
    get viewsUi() { return ST.viewsUi; }, set viewsUi(v) { ST.viewsUi = v; },
    get walking() { return ST.walking; },
  });
  window.bimcraftDae = { open: () => guard(exportDae), last: null };   // for tests
  // ---- Review in VR (0.6 LC.19, session lc-model): the shared xr/ (a copy of ModelCraft's, tools/xr/sync.mjs) on the same scene
  // as Render (render-bim.js). Issues placed in the headset join the Issues tab as BCF topics (the model's own coordinates). ----
  const xrBtn = root.querySelector('[data-xr-enter]');
  ST.xrOn = null; ST.xrWhy = 'none';
  (navigator.xr ? navigator.xr.isSessionSupported('immersive-vr').catch(() => false) : Promise.resolve(false)).then((yes) => {
    ST.xrWhy = yes ? null : navigator.xr ? 'unsupported' : window.isSecureContext === false ? 'insecure' : 'none';
    xrBtn?.setAttribute('aria-disabled', String(!yes));
    if (xrBtn) xrBtn.title = yes ? t('ui.vr.title') : t('xr.why.' + ST.xrWhy);
  });
  // ---- Paint materials (0.5 RC.7, session render): paint-ui-bim.js + paint-bim.js + the library in render/, imported on
  // first use. Painting writes the active model (one undo step each), then it reloads so the colour shows. ----
  ST.paintUi = null;
  ST.viewsUi = null;
  // ---- Point clouds (0.5 SG.1; cloud-ui.js, pointcloud.js, pointcloud-three.js — imported on the first cloud) ----
  // A cloud joins the 3D view beside the model (or on its own): it is not a document, so it never asks about unsaved
  // edits and a new model keeps it. Measure snaps to its points; Location reads a cloud point through the cloud's own system.
  ui.cloudInput = $('[data-cloud-input]');
  ui.cloudInput.accept = CLOUD_ACCEPT;   // 0.6 PF: every cloud format pointcloud.js reads
  ui.cloudInput.addEventListener('change', () => { const f = ui.cloudInput.files[0]; ui.cloudInput.value = ''; if (f) guard(() => openCloud(f)); });
  // ---- Register scans (0.7 LC.3, session scans; register-ui.js — imported on first use): several scans in one frame, ICP, LAS / E57 out.
  // "Show registered cloud" hands the registered LAS to openCloud, so it joins the 3D view like any cloud.
  ST.registerUi = null;
  root.querySelectorAll('[data-cloud-register]').forEach((b) => b.addEventListener('click', () => { b.closest('details')?.removeAttribute('open'); guard(openRegister); }));   // the start panel's button and the Show menu's
  // ---- Map layers on the ground (0.5 SG.3; maps-bim.js + the shared maplayers.js, imported on first use) ----
  ST.bimMapsLoading = null;
  const { openModelCrs, openMapOrigin } = mountCrsModel({
    ST, status, guard, renderChanges, cur,
  });
  // Settings › BimCraft › Location: "Choose another system…" (any EPSG system, UTM zone or one of your own)
  settingsDlg?.querySelector('[data-bc-geo-more]')?.addEventListener('click', () => guard(async () => {
    const [{ openCrsPicker }, P] = await Promise.all([import('./crs-pick-ui.js'), import('./crs-pick.js')]);
    await openCrsPicker({ mode: 'target', onPick: (c) => {
      settings.geoCrs = c.code != null ? String(c.code) : 'my:' + P.addMine(null, c, c.name).id;
      saveSettings(); syncSettingsForm();
      status(t('geo.pick.target.set', { name: c.name }), false, true);
    } });
  }));
  um.copy.addEventListener('click', () => { const last = ST.meas?.items[ST.meas.items.length - 1]; if (last?.geo) copyText(last.geo.text).then(() => status(t('geo.copied'), false, true)); });
  um.bar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !ST.meas) return;
    if (b.hasAttribute('data-measure-crs')) { guard(openModelCrs); return; }
    if (b.hasAttribute('data-measure-georef')) { guard(openMapOrigin); return; }
    if (b.hasAttribute('data-measure-ortho')) { ST.measOrtho = !ST.measOrtho; syncMeasureBar(); status(t(ST.measOrtho ? 'measure.ortho.on' : 'measure.ortho.off')); }
    else if (b.dataset.measureMode) { ST.meas.mode = b.dataset.measureMode; ST.meas.a = null; syncMeasureBar(); redrawMeasure(); if (ST.meas.mode === 'point') status(t('geo.start')); }
    else if (b.hasAttribute('data-measure-clear')) { ST.meas.items = []; ST.meas.a = null; syncMeasureBar(); redrawMeasure(); status(t('measure.cleared')); }
    else if (b.hasAttribute('data-measure-done')) { measureOff(); status(t('measure.ended')); }
  });
  window.bimcraftMeasure = { on: measureOn, off: measureOff, state: () => ST.meas && { mode: ST.meas.mode, a: ST.meas.a, items: ST.meas.items.map((i) => ({ kind: i.kind, value: i.value, delta: i.delta, text: i.text, a: i.a, lonlat: i.geo?.lonlat || null })) },
    fileOf: (pt, key) => { const ent = entryOf(key) || cur(); return viewerToFile(pt, ST.viewer.modelMatrix(ent.mi), [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], readGeoref(ent.ifc.api, ent.model.modelID)?.fileUnitM ?? 0.001); } };   // for tests

  // ---- Hide and isolate (0.4 B12; ifc-vis.js through viewer.vis) ----
  // Hide = the picked elements go; Isolate = only they stay; See-through = only they stay solid, the rest faint (clicks
  // go through it); Show all = everything back. The pick is kept where it is still shown.
  const visButtons = [...ui.toolbar.querySelectorAll('[data-vis]')];
  const visMenu = ui.toolbar.querySelector('[data-vis-menu]');
  const VIS_TITLE = { hide: 'vis.hide.title', isolate: 'vis.isolate.title', ghost: 'vis.ghost.title', all: 'vis.showall.title', secbox: 'vis.secbox.title' };
  // ---- Assistants and scripts (0.4 X.7; bim-agent.js, AGENTS-SPEC §5.2/§6.3): the open model's elements through
  // host.control — find, isolate / ghost / hide / show all (the Show menu's own calls), properties. Studio routes an
  // assistant's calls here only while Settings › Assistants allows them (stored in bimcraft.settings `assistants`).
  for (const def of bimTools({
    index: () => (ST.mode === 'ifc' && ST.model ? index() : null),
    name: () => ST.ifcName,
    properties: (k) => { const m = cur(); return m.ifc.properties(k - m.model.keyBase); },
    visibility: (how, keys) => {
      const v = ST.viewer.vis;
      if (how === 'show_all') v.showAll();
      else if (how === 'hide') { v.hide(keys); ST.viewer.select(null); ST.selected = null; ST.pickToken++; clearProps(); }
      else v.isolate(keys, { ghost: how === 'ghost' });
      ST.viewer.applyVisibility();
      syncVis();
      status(how === 'show_all' ? t('vis.shown.all') : how === 'hide' ? t('vis.hidden.count', { n: keys.length, total: v.hidden.size }) : t(how === 'ghost' ? 'vis.ghosted' : 'vis.isolated', { n: keys.length }));
      return { hidden: v.hidden.size };
    },
  })) fileHost.control.tool(def);
  $('[data-assist-disconnect]')?.addEventListener('click', () => { fileHost.control.disconnect(); renderAssist(); status(t('assist.disconnected')); });
  fileHost.control.on('change', () => renderAssist());
  fileHost.control.configure({
    title: 'BimCraft', enabled: settings.assistants.enabled, groups: settings.assistants.groups,   // i18n-ignore: the product name
    info: () => ({ model: ST.mode === 'ifc' ? ST.ifcName || null : null, elements: ST.mode === 'ifc' && ST.model ? ST.model.elements : 0, unsaved: models.some((m) => unsavedIn(m.editor)) }),
    busy: () => (ST.busy ? 'opening or saving a file' : ST.placing ? 'placing a library item' : null),   // i18n-ignore: read by the assistant
  });
  window.bimcraftControl = fileHost.control;   // for tests and the console
  renderAssist();

  /** For tests and the console: the key of the first element with this Name in the open model. */
  window.bimcraftKeys = (name, mi = null) => {
    if (!ST.model) return null;
    for (const m of (mi === null ? [cur()] : models.filter((x) => x.mi === mi))) {
      for (const id of m.model.classOf.keys()) if (m.ifc.api.GetLine(m.model.modelID, id).Name?.value === name) return m.model.keyBase + id;
      const st = m.model.storeys.find((x) => x.name === name);
      if (st) return m.model.keyBase + st.id;
    }
    return null;
  };
  window.bimcraftVis = { act: visAct, state: () => ST.viewer?.vis.toJSON(), pick: (keys) => { ST.viewer.select(keys); if (ST.viewer.selection.size > 1) showMany(); else showProps(ST.viewer.selected); afterPick(); } };   // for tests
  // BK.128 / BK.45 (Super's model layers, super-layers-ui.js): a host switches sets of elements off by GlobalId (apart from the person's own Hide), reads
  // which elements the view holds, and names sets the clash check can run between. Inert until a host calls it.
  window.bimcraftLayerSets = {
    all: () => { if (!ST.viewer || ST.mode !== 'ifc') return []; const out = []; for (const m of models) for (const [id, c] of m.model.classOf) { const g = m.ifc.api.GetLine(m.model.modelID, id).GlobalId?.value; if (g) out.push({ guid: g, cls: c }); } return out; },
    count: () => { let n = 0; for (const m of models) n += m.model.classOf.size; return n; },
    keysOf: keysOfGuids,
    guidOf: (key) => { const e = entryOf(key); return e ? e.ifc.api.GetLine(e.model.modelID, key - e.model.keyBase).GlobalId?.value || null : null; },
    off: (guids) => { if (!ST.viewer) return 0; ST.guidKeys = null; const keys = keysOfGuids(guids); if (ST.viewer.vis.setOff(keys)) { ST.viewer.applyVisibility(); syncVis(); if (ST.tree) treeView.sync(); } return keys.length; },
    offKeys: () => (ST.viewer ? [...ST.viewer.vis.off] : []),
    sources: (list) => { ST.hostSets = (Array.isArray(list) ? list : []).filter((h) => h && typeof h.value === 'string' && Array.isArray(h.guids)).map((h) => ({ value: h.value, label: String(h.label || h.value), guids: h.guids })); if (ui.clashDetails?.open) renderClash(); return ST.hostSets.length; },
    /** Check two named sets against each other with the clash check as it is → Promise<[{ a, b (GlobalIds), an, bn (names), depth }]> (null when it could not run). */
    check: async (a, b, tol = 0.01) => {
      if (!ST.viewer || ST.mode !== 'ifc' || ST.clashRun) return null;
      ST.clashA = 'host:' + a; ST.clashB = 'host:' + b; ST.clashTol = String(tol); ST.clashRes = null;
      await runClash();
      for (let i = 0; i < 1200 && ST.clashRun; i++) await new Promise((r) => setTimeout(r, 100));
      if (ST.clashRun || !ST.clashRes) return null;
      const g = window.bimcraftLayerSets.guidOf;
      return ST.clashRes.map((c) => ({ a: g(c.a), b: g(c.b), an: nameOfKey(c.a), bn: nameOfKey(c.b), depth: c.depth }));
    },
  };


  mountStageWire({
    ST, ui, status, guard, syncDisplayButtons, setPressed, toggleSection, ensureMaps, cloudPressed, openRender, openLive, exportGlb, exportUsd, exportIfcx, revealRightPanel, revealPaletteOf, showTab, toggleIfcEquipment, checkUpdates, showCredits, stopPlacing, syncPlacebar, moveGhost, toggleSnap, toolButton, act, visAct, measureOff, measureOn, walkOff, walkOn, redrawMeasure, togglePrint, toggle3d, pick3d, openVr, exportDae, openPaint, openViews, visMenu, root,
    get rPanel() { return rPanel; },
    get libraryOn() { return libraryOn; },
  });

  // ==== Library ====================================================================================
  const tabs = root.querySelectorAll('[data-rtab]');
  const rPanel = tabs[0]?.closest('aside') || root;   // the right panel: its tabs and panes travel with it (panels window)
  const rpanes = root.querySelectorAll('[data-rpane]');   // kept: the right panel may move to the panels window
  ST.libraryLoaded = false;
  tabs.forEach((t) => {
    t.addEventListener('click', () => showTab(t.dataset.rtab));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const list = [...tabs], i = list.indexOf(t), next = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
      next.focus(); showTab(next.dataset.rtab);
    });
  });

  ST.libKinds = null;   // set where the model tools mount (library-kinds-bim.js)
  const library = new LibraryPanel(ui.library, {
    mode: () => ST.mode, localOnly: !libraryOn,   // SU.812
    addType: (item) => (ST.libKinds ? ST.libKinds.addType(item) : status(t('lib.type.needs_model'), true)),   // 0.10 BK.21
    saveKitTemplate: (item) => ST.libKinds?.saveKitTemplate(item), quickKit: () => ST.libKinds?.quickKitDialog(),   // 0.10 BK.98
    dwg: () => ST.dwgOpen,
    ifcApi: async () => { if (!ST.ifc) ST.ifc = await IfcModel.create(WebIFC); return ST.ifc.api; },
    readDrawing: readDrawingModel,
    readRevit: (b, name) => readRevit(b, name),
    status,
    place: (entry) => startPlacing(entry),
    viewMode,
    dragRefused: (x, y) => { if ((x || y) && !root.querySelector('[data-rpane="library"]')?.contains(document.elementFromPoint(x, y))) status(t('lib.drop.where'), true); },
    dragOver, dragEnd, dropIt,
    onViewMode: (fn) => { viewModeSubs.add(fn); return () => viewModeSubs.delete(fn); },
    swapTarget: () => ST.swapTarget,
    swap: (entry) => guard(() => doSwap(entry)),
  });
  window.bimcraftLibrary = library;   // for tests and the console
  if (!libraryOn) {   // packaged edition: no Updates button, no calls to /api/v1/library; the Library tab keeps its local sources
    for (const n of root.querySelectorAll('[data-lib-tool="updates"]')) n.hidden = true;   // SU.812: the tab stays for the local sources (library-view.js LOCAL_SOURCES)
  }


  // ---- placing ----
  const pb = {
    name: ui.placebar.querySelector('[data-place-name]'), storey: ui.placebar.querySelector('[data-place-storey]'),
    xy: ui.placebar.querySelector('[data-place-xy]'), at: ui.placebar.querySelector('[data-place-at]'), snap: ui.placebar.querySelector('[data-place-snap]'),
    mount: ui.placebar.querySelector('[data-place-mount]'),
  };
  ST.storeyElevs = new Map();   // storey id → elevation in model mm (ifc-place.js info())

  pb.snap.addEventListener('click', toggleSnap);
  ui.placebar.querySelector('[data-place-turn]').addEventListener('click', () => {   // = R (touch screens have no R)
    if (!ST.placing) return;
    ST.placing.rot = (ST.placing.rot + 90) % 360; ST.placing.snap = false; syncPlacebar(); moveGhost(ST.placing.last);
  });
  pb.storey.addEventListener('change', () => {
    if (!ST.placing) return;
    if (ST.placing.where === 'plan') ST.modelUi?.ensurePlan?.(Number(pb.storey.value)); else planCut();   // the plan shows the storey picked here
    ST.placing.faces = null; ST.placing.snap = false; ST.viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, storeyElev()]))[1]; syncPlacebar();
  });
  ui.placebar.querySelector('[data-place-stop]').addEventListener('click', () => stopPlacing());
  ui.placebar.querySelector('[data-place-typed]').addEventListener('click', typedPlace);
  pb.xy.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); typedPlace(); } });










  const { store, editButtons, MENU_TITLE, NOT_BUILT, elementSnaps, SPATIAL, clsMemo } = mountEditMenuWire({
    ST, ui, status, guard, currentClip, syncEdit, act, whyNot, picks, root,
  });













  mountBundlesWire({
    ST, ui, status, guard, open, download, cur, afterEdit, toWorld, coordMatrix, rebuild, syncVis, afterPick, index, openIfc, showProps, renderQto, models, clearProps, showMany, rPanel, root,
  });

  // ---- Draw (0.5 part 3, track BM; model-ui.js): the plan view of a level and the building tools ----
  ST.modelUi = mountModel({
    root,
    viewModeChanged: emitViewMode,
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    model: () => (ST.mode === 'ifc' ? ST.model : null),
    ifc: () => ST.ifc,
    viewer: () => ST.viewer,
    rebuild,
    select: (keys) => {
      if (!ST.viewer) return;
      ST.viewer.select(keys.length ? keys : null);
      afterPick();
      if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps();
    },
    status: (text, isError) => status(text, isError),
    afterEdit: renderChanges,
    download,   // schedules' CSV, the plan's PDF
    fileName: () => ST.ifcName,
    coords: () => ST.coordsUi,   // 0.6 DF.15: the plan's readout and markers
    // 0.8 BIM-FAM-MORE (family-ui.js): a family's hotspots as grips in the 3D view. list = [{ p: [x, y, z] model mm, kind }] | null; h = { start(i, e), move(i, ray { o, d: model mm }, e), end(i, e) }.
    // false while the section box owns the grips.
    grips3d: (list, h) => {
      if (!ST.viewer) return false;
      if (!list || !list.length) { if (ST.hot3d) { ST.hot3d = null; ST.viewer.setGrips(null); } return true; }
      if (ST.cut && ST.cut.axis === 'box') return false;
      const C = coordMatrix(), rel = (mm) => ST.viewer.relPoint(toWorld(toViewer(C, mm)));
      const mmOf = (r) => fromViewer(C, toLocal(ST.viewer.ifcPoint(r).toArray()));
      ST.hot3d = { on: (phase, i, e) => {
        const r = ST.viewer.rayIfc(e.clientX, e.clientY), o = mmOf(r.o), q = mmOf([r.o[0] + r.d[0], r.o[1] + r.d[1], r.o[2] + r.d[2]]);
        h[phase === 'start' ? 'start' : phase === 'end' ? 'end' : 'move'](i, { o, d: [q[0] - o[0], q[1] - o[1], q[2] - o[2]] }, e);
      } };
      ST.viewer.setGrips(list.map((g) => ({ p: rel(g.p), kind: g.kind || 'corner' })), -1);
      return true;
    },
    // 0.8 D8.3 (modify-ui.js): pointer points inside the 3D view — h = { move(mm|null, e), click(mm, e) } on the plane at a level's height (model mm, plan coordinates); null stops. false while an item is being placed.
    pointer3d: (elevMm, h) => {
      if (!ST.viewer) return false;
      if (!h) { if (ST.viewer.placing && ST.viewer.placing.ownerTag === 'pointer3d') ST.viewer.placing = null; return true; }
      if (ST.placing || (ST.viewer.placing && ST.viewer.placing.ownerTag !== 'pointer3d')) return false;
      ST.viewer.placeY = toWorld(toViewer(coordMatrix(), [0, 0, elevMm]))[1];
      const mm = (pt) => (pt ? fromViewer(coordMatrix(), toLocal([pt.x, pt.y, pt.z])).slice(0, 2) : null);
      ST.viewer.placing = { ownerTag: 'pointer3d', move: (pt, e) => h.move(mm(pt), e), click: (pt, e) => h.click(mm(pt), e) };
      return true;
    },
  });
  if (ST.modelUi) mountRes(ST.modelUi);   // 0.5 part 4, track RC (res-ui.js): the residential tools join the plan's tools
  if (ST.modelUi) mountTrim(ST.modelUi);   // 0.6 DF.17 (model-trim-ui.js): trim, extend and corner walls
  if (ST.modelUi) { let wallFin = null; try { wallFin = mountWallFinishes(ST.modelUi); } catch (e) { console.error(e); } root.querySelector('[data-wall-finishes]')?.addEventListener('click', () => { wallFin?.open();   // 0.11 FX (bim-core-11): modelUi has no ask(); the mount's own handle opens the card (the button did nothing in 0.10)
 root.querySelectorAll('details.bc-mb-more[open]').forEach((d) => d.removeAttribute('open')); }); }   // 0.10 bim-finishes-10: the Walls menu's Wall finishes… button
  if (ST.modelUi) mountWallTools(ST.modelUi);   // 0.9 WT.2-WT.7 (wall-tools-ui.js): wall shapes, split, offset, box stretch, align and lock, grid locks
  if (ST.modelUi) mountWallShape(ST.modelUi);   // 0.9 WT.6 (wall-shape-ui.js): attach top / base, profile, slant, wall openings
  if (ST.modelUi) mountStairSketch(ST.modelUi);   // 0.8 SU.1055 (stair-sketch-ui.js)
  if (ST.modelUi) mountPhasePlan(ST.modelUi, ST.phasesUi);   // 0.8 EG.59: walls drawn in their phase's pen on the plan and the printed plan (phases-ui.js)
  if (ST.modelUi) ST.picturesUi = mountPicture(ST.modelUi, { viewer: () => ST.viewer, entry: () => (ST.mode === 'ifc' ? cur() : null), save: saveIfc });   // 0.8 D8.8 (picture-ui.js)
  if (ST.modelUi) mountTraceRef(ST.modelUi);   // 0.8 SU.1055 (trace-ref-ui.js)
  if (ST.modelUi) mountModify(ST.modelUi);   // 0.8 D8.3 (modify-ui.js)
  if (ST.modelUi) mountSymbols(ST.modelUi);   // 0.8 GH.3-F/G (symbols-ui.js): Build › Symbol palette; plumbing plan symbols
  if (ST.modelUi) mountGrids(ST.modelUi);   // 0.6 DF.16 (model-grids-ui.js): grids and columns
  if (ST.modelUi) mountPlanMeasure(ST.modelUi);   // 0.9 D9.3 (model-measure-ui.js): temporary measuring on the plan
  if (ST.modelUi) mountRollover(ST.modelUi);   // 0.10 BK.33 (rollover-bim.js): rest the pointer on a wall, door, window, room or dimension to read it
  if (ST.modelUi) mountFloors(ST.modelUi);   // 0.6 DF.18 (model-floors-ui.js): floors of any shape, ramps
  mountPanelFocus(root, { t });
  if (ST.modelUi) mountSite(ST.modelUi);   // 0.6 DF.20 (model-site-ui.js): the site, the building on it, levels
  if (ST.modelUi) mountSiteConstraints(ST.modelUi);   // 0.10 BK.104 (model-site-constraints-ui.js): building lines and servitudes; a wall over one is a Problems warning
  if (ST.modelUi) mountSiteMass(ST.modelUi);   // 0.7 LC.1 B2 (model-site-mass-ui.js): a CivilCraft building mass in Properties
  if (ST.modelUi) mountMep(ST.modelUi);   // 0.6 DF.29 (mep-ui.js): pipe and duct runs with their fittings, valves
  if (ST.modelUi) mountHvac(ST.modelUi);   // 0.8 SU.888 (sx-mep, mep/hvac-ui.js): Build › Line set and Line set sizes
  if (ST.modelUi) mountWallAssemblies(ST.modelUi);
  if (ST.modelUi) mountElementTypes(ST.modelUi);   // 0.10 BK.24 / BK.15 (element-types-ui.js): floor, roof and ceiling types with layers, Schedules › Layers, the sketch band setting
  if (ST.modelUi) mountAssetSymbols(ST.modelUi, { registry: bimcraftSymbolSets().registry });   // 0.10 BK.23 (asset-symbol-ui.js): Build › Symbol link; mounted after the tools that draw elements
  if (ST.modelUi) mountQuantities(ST.modelUi);   // 0.10 BK.84 / BK.11 / BK.40 (quantities-ui.js): Floors, Finishes and Wall types: takeoff data schedules, gross / deductions / net
  if (ST.modelUi) { const wpUi = mountWorkPlane(ST.modelUi); mountCurtain(ST.modelUi, wpUi); }   // 0.10 bk-tools-b-10 (workplane-ui.js, curtain-ui.js): the work plane tools and curtain systems
  if (ST.modelUi) mountWallDimensions(ST.modelUi);
  if (ST.modelUi) mountFamilies(ST.modelUi);   // 0.6 DC.114 (family-ui.js): Families (before the project browser, which lists them)
  if (ST.modelUi) ST.annoUi = mountAnnoScale(ST.modelUi);   // 0.10 BK.10 (before the views: they ask it for the dialog)
  if (ST.modelUi) ST.planViews = mountViewsBim(ST.modelUi);   // 0.6 DF.19 (views-ui.js): the project browser, view ranges, templates, sheets
  if (ST.modelUi) ST.reportAsUi = mountReportAs({ modelUi: ST.modelUi, t, status, schema: () => { try { return ST.editor ? ST.editor.api.GetModelSchema(ST.editor.mid) : 'IFC4'; } catch (e) { return 'IFC4'; } } });   // 0.9 D8.12-C
  if (ST.modelUi) ST.classifyUi = mountClassify({ modelUi: ST.modelUi, t, status });   // 0.10 BK.94
  // 0.10 BK.64 / BK.49 (verify-ui.js): Properties › Verification, the plan's marks, Schedules › Verification; BK.65 / BK.20 (audit-ui.js): Model checks › Audit
  if (ST.modelUi) ST.verifyUi = mountVerify({ modelUi: ST.modelUi, t, status, who: authorOf });
  if (ST.modelUi) ST.lodUi = mountLod({ root, modelUi: ST.modelUi, editor: () => (ST.mode === 'ifc' ? ST.editor : null), model: () => (ST.mode === 'ifc' ? ST.model : null), t, status: (text, isError) => status(text, isError) });   // 0.10 bim-lod-10 (BK.13-BK.101)
  ST.auditUi = mountAudit({ root, editor: () => (ST.mode === 'ifc' ? ST.editor : null), model: () => (ST.mode === 'ifc' ? ST.model : null), t, status: (text, isError) => status(text, isError), nameOfKey, verify: ST.verifyUi });
  if (ST.modelUi) window.bimcraftSchedules = mountScheduleLayouts(ST.modelUi, { status });   // 0.10 BK.39 / BK.29 / BK.149 / BK.142 / BK.47 (schedule-layouts-ui.js; after classification, so its columns are in): set-ups, the office layout, finishes, exports, figure links, the specification
  if (ST.modelUi) mountPack(ST.modelUi, { status, docs: () => ST.tagsUi?.docs, prints: () => window.bimcraftIssueLog?.prints() || null, words: () => window.bimcraftIssueLog?.panel.words() || {} });   // 0.10 BK.63 / BK.170 (pack-ui.js; after the schedules, whose rooms table it reads)
  if (ST.modelUi) mountTypePacks({ modelUi: ST.modelUi, t, status });   // 0.10 BK.97
  ST.libKinds = mountLibraryKinds({ modelUi: ST.modelUi, t, status, el, download,
    placed: () => { try { const seen = new Map(); for (const p of ST.editor ? ST.editor.placer().placements() : []) if (p.uuid && p.library === 'librarycraft' && !seen.has(p.uuid)) seen.set(p.uuid, { uuid: p.uuid, name: p.equipment?.Name || p.name || '' }); return [...seen.values()]; } catch (e) { return []; } } });   // 0.10 BK.21 / BK.98
  if (ST.modelUi) mountElevEdit(ST.modelUi);   // 0.9 SU.1123 (elev-edit-ui.js): edit in elevation and section views
  if (ST.modelUi) mountWallShapeViews(ST.modelUi);   // 0.9 WT.6 (wall-shape-view-ui.js): profile grips, wall openings, slant and attach in those views and in 3D; the Walls menu's four Shape commands
  if (ST.modelUi) mountSpaces(ST.modelUi);   // 0.10 (spaces-ui.js, bk-tools-a-10): rooms, separators, areas, tags, shafts, vertical openings, model groups; a Rooms menu after the Walls menu
  if (ST.modelUi) mountPens(ST.modelUi);   // 0.8 SU.1055 (pens-ui.js); 0.9 D8.12-B: after the views, so its scene hook sees their drafting and the dimensions
  if (ST.modelUi) mountComforts(ST.modelUi);   // 0.6 round 2 (comforts-ui.js): drawing comforts — moving library items, dormers
  // 0.6 DF.25 (agents.js): an assistant draws walls, doors, windows, floors, levels and grids, each one undo step "Assistant: …"
  ST.clashFix = mountClashFix({   // 0.9 EG.42 (clashfix-bim.js; engine lib/clashfix): Propose fixes under the clash results + clashes_list / clash_fix_add
    viewer: () => ST.viewer, models: () => models, host: () => (ST.mode === 'ifc' ? cur() : null), editor: () => (ST.mode === 'ifc' ? ST.editor : null), modelUi: ST.modelUi,
    entryOf, nameOfKey, results: () => ST.clashRes, rerun: runClash, status: (m, bad) => status(m, bad), control: fileHost.control,
    show: (keys) => { ST.viewer.vis.isolate(keys, { ghost: true }); ST.viewer.applyVisibility(); ST.viewer.select(keys); afterPick(); showMany(); ST.viewer.frameKeys(keys); treeView.sync(); },
    addIssue: ({ title, description }) => { ST.issues.push({ guid: newGuid(), title, status: 'Open', type: 'Issue', author: authorOf() || 'BimCraft', created: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'), description, comments: [], viewpoints: [] }); renderIssues(); },   // i18n-ignore: BCF values
  });
  if (ST.modelUi) installAgents(ST.modelUi, {
    control: fileHost.control,
    frameModel: () => ST.analysisUi?.frameModel?.() || null,   // 0.8 EG.47 (bim-sim_PART_3): hazard_run source 'frame'
    ask: {   // 0.8 AC.8 ★ (bim_PART_2; ask-tools.js): the answer is selected and framed in 3D (view state only: nothing in the model changes)
      index: () => (ST.mode === 'ifc' && ST.model ? index() : null),
      spacesIndex: () => (ST.mode === 'ifc' && ST.model ? spacesIndex() : null),
      model: () => (ST.mode === 'ifc' ? ST.model : null),
      name: () => ST.ifcName,
      bounds: (keys) => (ST.viewer ? ST.viewer.keyBoundsMap(keys) : new Map()),
      highlight: (keys, { frame = true } = {}) => {
        ST.viewer.vis.showAll(); ST.viewer.applyVisibility();
        ST.viewer.select(keys); afterPick(); if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected);
        if (frame) ST.viewer.frameKeys(keys);
        status(t('ask.found', { n: keys.length }));
      },
    },
    analysis: () => ST.analysisUi?.panel || null,   // 0.8 EG.31: frame_break runs the Analysis tab's Break it
    model: () => (ST.mode === 'ifc' ? ST.model : null),
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps(); },
    save: saveIfc,
    usd: (format) => (ST.viewer && ST.mode === 'ifc' && models.length ? makeUsd(format) : null),   // 0.7 AS.6
    render: async () => {   // 0.7 AS.6 (assistants-gaps): render_still / render_queue, through the Render dialog's own hooks
      if (!ST.viewer || ST.mode !== 'ifc' || ST.viewer.box.isEmpty()) throw new Error('Open an IFC model in the 3D view first.');   // i18n-ignore: read by the assistant
      ST.modelUi?.need3d();
      const H = await renderHooks();
      let saved = H.saved;
      return { scene: H.scene, viewSize: () => ({ w: ui.canvas.clientWidth, h: ui.canvas.clientHeight }), settings: () => { try { saved = JSON.parse(localStorage.getItem('bimcraft.render') || 'null'); } catch { /* the last one read */ } return saved; },
        fileBase: () => (ST.ifcName || 'model').replace(/\.ifc$/i, ''), download: (blob, name) => fileHost.download(blob, name, blob.type || 'image/png'), appName: 'BimCraft' };
    },
    download: (blob, name, type) => fileHost.download(blob, name, type),
    undo: async () => { if (ST.coreCommands) ST.coreCommands.execute('undo'); else ui.undo.click(); },
    busy: () => (ST.busy ? 'opening or saving a file' : ST.placing ? 'placing a library item' : null),   // i18n-ignore: read by the assistant
  });
  ST.bimShell = mountBimShell({
    ifc: () => ST.ifc, model: () => ST.model, editor: () => ST.editor, mode: () => ST.mode, control: fileHost.control, saved: () => ST.savedOnce, name: () => ST.ifcName || 'model',
    selection: () => (ST.viewer ? [...ST.viewer.selection] : []),
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys.length ? keys : null); afterPick(); if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps(); },
    onSelection: (fn) => { const h = () => fn(); document.addEventListener('click', h); return () => document.removeEventListener('click', h); },
    after: afterEdit,
  });
  // 0.6 DF.22 (cloud-slice-ui.js): a point cloud's slice on the plan; the cloud is cloud-ui.js's (pc, made on its first open)
  if (ST.modelUi) mountTrace(ST.modelUi, { readDrawing: readDrawingModel });   // 0.6 DF.23 (model-trace-ui.js)
  // 0.6 DF.21 (links-ui.js): linked models are federation entries flagged `link`, placed by an `adjust` matrix
  if (ST.modelUi) ST.linksUi = mountLinks(ST.modelUi, {
    root, fileHost, status,
    fed: {
      add: addModel, remove: removeModel, models: () => models, host: () => (ST.mode === 'ifc' ? cur() : null),
      setMatrix: (ent, M) => { ent.matrix = M; ST.viewer.setModelMatrix(ent.mi, placementOf(ent)); if (ST.cut) applySection(); ST.viewer.render(); },
      viewer: () => ST.viewer, refresh: renderModels,
    },
  });
  if (ST.modelUi) mountPanels(ST.modelUi);   // 0.8 EG.6 (bim-build_PART_5)
  if (ST.modelUi) ST.siteCtxUi = mountSiteContext(ST.modelUi);   // 0.8 EG.63 (civil_PART_4)
  ST.scanProgUi = mountScanProgress({
    pane: ui.sp,
    cloud: () => { const L = ST.pc?.has?.() ? ST.pc.layer?.() : null; if (!L?.cloud || !L.points) return null; L.points.updateMatrixWorld(true); return { cloud: L.cloud, matrix: [...L.points.matrixWorld.elements] }; },
    keys: scanProgElementKeys,
    bounds: (keys) => (ST.viewer ? ST.viewer.keyBoundsMap(keys) : new Map()),
    expected: () => (ST.fdTasks ? statusAt(fdView(), ST.fdDay) : null),
    dayLabel: () => (ST.fdTasks && ST.fdDay !== null ? dayText(ST.fdDay) : ''),
    name: nameOfKey, guid: guidOf,
    verify: (keys, o) => ST.verifyUi?.fromScan(keys, o),   // 0.10 BK.49: what the scan matched within tolerance → field-verified
    select: (keys) => { if (!ST.viewer) return; ST.viewer.select(keys); afterPick(); if (ST.viewer.selection.size) showProps(ST.viewer.selected); },
    setColors: (m) => { if (!ST.viewer) return; if (m && ST.colorField) colorOff(); ST.viewer.setColors(m); },
    setProblems: (list) => { ST.scanProgProblems = list; ST.brkScanSet?.(list); },
    status: (text, isError) => status(text, isError),
    download, fileName: () => ST.ifcName,
  });
  window.bimcraftScanProgress = ST.scanProgUi;   // tests
  if (ST.modelUi) ST.scanUi = mountCloudSlice(ST.modelUi, { cloud: () => ST.pc, viewer: () => ST.viewer, entry: () => { const ent = ST.mode === 'ifc' ? cur() : null; return ent ? { C: [...ent.ifc.api.GetCoordinationMatrix(ent.model.modelID)], P: ST.viewer.modelMatrix(ent.mi) } : null; } });

  // ---- Menus, keys and mouse (0.5 track IP): the shell's input engine (assets/js/app-input-ui.js, manifest "input":
  // input-bimcraft.js) runs the styles; it asks BimCraft for the status line, downloads and whether a tool is running ----
  window.ccInputHooks = {
    status: (text, isError) => status(text, isError),
    download,
    busy: () => !!ST.placing || ST.walking,   // a running tool keeps its own letter keys (R, Tab; W A S D Q E)
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
  const addonDraw = ST.modelUi ? ST.modelUi.extend({ tools: [] }) : null;
  async function addonWrite(run, meta) {
    if (!ST.editor || ST.mode !== 'ifc') throw new Error('no IFC model is open');   // i18n-ignore: an add-on's error
    if (!addonDraw) { const r = ST.editor.modelChange(run, { label: meta.label, verb: '' }); afterEdit(); return r; }
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
    editor: () => (ST.mode === 'ifc' ? ST.editor : null),
    model: () => (ST.mode === 'ifc' && ST.model ? ST.ifc : null),
    loadResult: () => (ST.mode === 'ifc' && ST.model ? ST.model : null),   // 0.11 SU.1816: the batches, for api.model.triangles
    name: () => ST.ifcName,
    selection: addonSelection,
    select: (ids) => {
      if (!ST.viewer || ST.mode !== 'ifc' || !ST.model) return;
      ST.viewer.select(ids.map((id) => (ST.model.keyBase || 0) + Number(id)));
      afterPick();
      if (ST.viewer.selection.size > 1) showMany(); else if (ST.viewer.selection.size) showProps(ST.viewer.selected); else clearProps();
    },
    afterEdit: (label) => { tagLast(label); afterEdit(); },
    versionOf: (id) => { try { return window.ccAddonsFile?.stamp({}, [id])?.addons?.[id] || ''; } catch (e) { return ''; } },   // 0.8 AL.6: the account's version of the add-on, else its manifest's
    write: addonWrite,   // 0.7 API 1.1 (mep-07): model.write, one undo step through the Draw module
    status: (text) => status(text),
    openIfc: (bytes, name) => open(new File([bytes], name), null),
    find: (sel) => root.querySelector(sel),
    showTab: (k) => showTab(k || 'props'),
  }).then((a) => {
    ST.addons = a;
    // the Open picker offers the add-ons' importer extensions too (the picker filters by accept)
    const baseAccept = ui.file.getAttribute('accept') || '';
    const sync = () => { renderAddonExports(); const ext = [...new Set(a.importers().flatMap((x) => x.extensions || []))]; ui.file.setAttribute('accept', [baseAccept, ...ext].filter(Boolean).join(',')); };
    a.onChange(sync); sync();
  })
    .catch((e) => console.warn('add-ons did not start:', e));   // i18n-ignore: a console note


  // The docked-ribbon workspace (Doc's F28; Settings › Global › Layout › Workspace). Both startup paths call this same mount
  // after every extension is installed; workspace.js switches itself on when it is the chosen layout.
  if (ST.modelUi && ST.planViews) {
    ST.coreCommands = createCommands({
      t,
      state: () => ST.workspace?.state() || {
        document: ST.mode === 'ifc' ? ST.editor : null, busy: ST.busy, dirty: unsavedIn(ST.editor),
        canUndo: !!ST.editor?.changes.length, canRedo: !!ST.editor?.canRedo,
        selection: ST.viewer ? [...ST.viewer.selection] : [], levels: [], view: null,
      },
      explain: (why) => status(why),
      actions: {
        open: () => fileHost.kind === 'desktop'
          ? guard(async () => { const [hf] = await fileHost.openFile({ types: IFC_TYPES }); await openHost(hf); })
          : ui.file.click(),
        save: () => guard(saveIfc), undo, redo,
        select: () => ST.workspace.selectTool(),
        clear: () => act('select-none'),
        three: () => ST.workspace.activate3d(), plan: () => ST.workspace.activatePlan(),
        range: () => ST.workspace.openRange(),
        detail: (detail) => ST.workspace.setSettings({ detail }), scale: (scale) => ST.workspace.setSettings({ scale }),
        fit: () => ST.workspace.fit(),
        wall: () => ST.workspace.startWall(), assembly: () => ST.workspace.editType(), structure: () => ST.workspace.editStructure(),
        cancel: () => ST.workspace.cancelWall(false), finish: () => ST.workspace.cancelWall(true),
      },
    });
    const wsCurrent = () => ({ editor: ST.mode === 'ifc' ? ST.editor : null, name: ST.mode === 'dwg' ? ST.dwgOpen?.fileName || '' : ST.ifcName, busy: ST.busy || !!ST.placing, placing: !!ST.placing,
      dirty: unsavedIn(ST.editor), canUndo: !!ST.editor?.changes.length, canRedo: !!ST.editor?.canRedo,
      selection: ST.viewer ? [...ST.viewer.selection] : [], viewer: ST.viewer, mode: ST.mode, pick: wsPick, kindsOf: wsKinds });
    // 0.11 UI.25 (ccState): refs → viewer keys (a key number, 'key:<n>', or an IFC GlobalId as a Problems line has it), and the IFC class words of a selection
    function wsKeys(refs) {
      const out = [];
      for (const r of refs) { const n = Number(r.id); if ((r.kind === 'key' || !r.kind) && r.id !== '' && Number.isInteger(n) && entryOf(n)) out.push(n); else out.push(...keysOfGuid(r.id)); }
      return [...new Set(out)];
    }
    function wsPick(refs, frame) {
      if (!ST.viewer || ST.mode !== 'ifc') return false;
      const keys = wsKeys(refs); if (!keys.length) return false;
      ST.viewer.select(keys); afterPick(); if (keys.length > 1) showMany(); else showProps(keys[0]);
      if (frame) ST.viewer.frameKeys(keys);
      return true;
    }
    function wsKinds(keys) {
      return [...new Set(keys.map((k) => { const e = entryOf(k); const c = e === cur() ? classOfId(k - ST.model.keyBase) : e?.model.classOf.get(k - e.model.keyBase); return c ? String(c).replace(/^Ifc/, '').toLowerCase() : ''; }).filter(Boolean))];
    }
    // the layouts (Settings › Global › Layout): the shell's engine builds a layout file's blocks, workspace-bimcraft.js fills them
    const bw = createBimcraftWorkspace({ root, modelUi: ST.modelUi, views: ST.planViews, commands: ST.coreCommands, props: ui.props, current: wsCurrent, status, statusEl: ui.status });
    ST.workspace = bw.api;
    const engine = mountWorkspaces(bw.adapter);
    bw.api.attach(engine); engine.refresh();
    window.bimcraftWorkspace = Object.freeze({ snapshot: ST.workspace.inspect, commands: () => ST.coreCommands.ids.map(ST.coreCommands.describe), engine });
    ST.toolbox = { refresh: () => engine.refresh() };
    window.bimcraftToolbox = Object.freeze({ get active() { return engine.has('toolbox'); }, refresh: () => engine.refresh(),
      use: (on) => window.ccShellWorkspace?.set(on ? 'toolbox' : 'standard'), inspect: () => engine.inspect() });   // for tests and the console
  } else document.documentElement.removeAttribute('data-cc-ws-boot');   // no layouts without the Draw extension: show the page (app-shell.inc)

  // ?library=<uuid>: open the panel on that item.
  const deep = new URLSearchParams(location.search).get('library');
  if (libraryOn && deep && /^[0-9a-f-]{36}$/i.test(deep)) { ST.libraryLoaded = true; showTab('library'); library.open(deep); }
}

function hasFiles(e) { return !!e.dataTransfer && [...e.dataTransfer.types].includes('Files'); }
function startsWith(data, text) {
  for (let i = 0; i < text.length; i++) if (data[i] !== text.charCodeAt(i)) return false;
  return true;
}
