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
import { mountAddonsWire } from './addons-wire.js';
import { mountDrawWire } from './draw-wire.js';
import { mountBundlesWire } from './bundles-wire.js';
import { mountEditMenuWire } from './edit-menu-wire.js';
import { mountPlacingWire } from './placing-wire.js';
import { mountLibraryWire } from './library-wire.js';
import { mountShortStagesWire } from './short-stages-wire.js';
import { mountAssistantsWire } from './assistants-wire.js';
import { mountMapsWire } from './maps-wire.js';
import { mountMeasureWire } from './measure-wire.js';
import { mountWalkWire } from './walk-wire.js';
import { mountSectionBoxWire } from './section-box-wire.js';
import { mountSectionPlaneWire } from './section-plane-wire.js';
import { mountCompareWire } from './compare-wire.js';
import { mountFederationWire } from './federation-wire.js';
import { mountColorWire } from './color-wire.js';
import { mountBcfIssuesWire } from './bcf-issues-wire.js';
import { mountClashWire2 } from './clash-wire-2.js';
import { mountClashWire } from './clash-wire.js';
import { mountIdsWire } from './ids-wire.js';
import { mountQuantitiesWire } from './quantities-wire.js';
import { mountFourdWire } from './fourd-wire.js';
import { mountLibraryDropWire } from './library-drop-wire.js';
import { mountFilesWire2 } from './files-wire-2.js';
import { mountFilesWire } from './files-wire.js';
import { mountSettingsWire } from './settings-wire.js';

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
  ST.verifyUi = null;
  ST.auditUi = null;
  ST.lodUi = null;   // 0.10 BK.64 / BK.49 / BK.65 / BK.20: verify-ui.js, audit-ui.js
  ST.annoUi = null;   // 0.10 BK.10 (anno-scale-ui.js)
  ST.workspace = null;
  ST.planViews = null;
  ST.coreCommands = null;
  ST.toolbox = null;
  ST.reportAsUi = null;   // 0.9: reportAsUi = report-as.js
  ST.modelUi = null;      // Draw (0.5 track BM, model-ui.js): mounted at the end of init
  ST.coordsUi = null;     // where am I working (0.6 DF.15, coords-ui.js): mounted with the 3D view
  ST.siteCtxUi = null;    // CivilCraft's site-context file taken as suggestions (0.8 EG.63, site-ctx-ui.js)
  ST.scanProgUi = null;
  ST.brkScanSet = null;
  ST.scanProgProblems = [];   // EG.39: scan against the model and the 4D schedule
  ST.scanUi = null;       // a point cloud's slice on the plan (0.6 DF.22, cloud-slice-ui.js)
  ST.linksUi = null;      // linked models (0.6 DF.21, links-ui.js)
  ST.picturesUi = null;   // pictures (0.8 D8.8, picture-ui.js): bytes beside the IFC, 3D planes, plan PDF
  ST.bundleUi = null;     // project bundles (0.6 DF.12 (b), bundle-view.js): mounted at the end of init
  ST.analysisUi = null;   // the Analysis tab (0.6 LC.4, analysis-bim-ui.js): mounted after the bundles
  ST.pointsUi = null;     // the Points tab (0.6 LC.22, layout-bim-ui.js): mounted with it
  ST.assetsUi = null;     // the Assets tab (0.6 LC.12, assets-bim-ui.js)
  ST.frameSet = null;
  ST.frameProblems = [];   // SU.1056: concrete checks and drift in the shell's Problems
  ST.breakSet = null;
  ST.breakProblems = [];   // EG.31: the Problems source of "What breaks first?"
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
  //   ifcx  the IFC5 alpha (IFCX) lab option: Open .ifcx and Export (0.9 SU.882; the format is still changing)   default off
  //   idsEmbed  Check against IDS: also keep the IDS text inside the IFC (0.7.1 71.25; a client's IDS may be confidential)   default off
  const SET_DEFAULTS = { spaces: false, edges: 'on', view: 'iso', turned: 'square', snap: false, corner: 'cube', boxMargin: 300, geoCrs: '4326', dwgStart: '3d', idsEmbed: false, ifcx: false, panelFocus: false };
  const { picks, classOfId, currentClip, whyNot, syncEdit, act, redo, copyText, commitPaste, rememberItem } = mountEditMenu({
    ST, libItems, status, guard, clearProps, showMany,
    get clsMemo() { return clsMemo; },
    get cur() { return cur; },
    get SPATIAL() { return SPATIAL; },
    get store() { return store; },
    get NOT_BUILT() { return NOT_BUILT; },
    get elementSnaps() { return elementSnaps; },
    get editButtons() { return editButtons; },
    get MENU_TITLE() { return MENU_TITLE; },
    get undo() { return undo; },
    get stopPlacing() { return stopPlacing; },
    get afterPick() { return afterPick; },
    get showProps() { return showProps; },
    get rebuild() { return rebuild; },
    get undoHook() { return undoHook; },
    get afterEdit() { return afterEdit; },
    get coordMatrix() { return coordMatrix; },
    get dialog() { return dialog; },
    get startPlacing() { return startPlacing; },
    get pb() { return pb; },
  });
  const { showCredits, checkUpdates, toggleIfcEquipment, renderIfcEquipment } = mountCreditsUpdates({
    ST, ui, status, guard, rememberItem,
    get dialog() { return dialog; },
    get download() { return download; },
    get csvCell() { return csvCell; },
    get library() { return library; },
    get rebuild() { return rebuild; },
    get setPressed() { return setPressed; },
    get showProps() { return showProps; },
    get showTab() { return showTab; },
  });
  const { revealRightPanel, revealPaletteOf, showTab, libraryBlock, coordMatrix, storeyElev, startPlacing, pointWhere, stopPlacing, planCut, syncPlaceUnits, syncPlacebar, toggleSnap, typedPlace, moveGhost, moveGhostXY, commitPlace, doSwap, rebuild, dialog, download, csvCell } = mountLibraryPlace({
    ST, ui, status, frame, guard, fillStoreys, fillClasses, clearProps, checkUpdates, renderIfcEquipment, syncEdit, commitPaste, rememberItem,
    get rPanel() { return rPanel; },
    get library() { return library; },
    get renderColor() { return renderColor; },
    get renderIssues() { return renderIssues; },
    get pb() { return pb; },
    get settings() { return settings; },
    get toWorld() { return toWorld; },
    get cur() { return cur; },
    get toLocal() { return toLocal; },
    get applySection() { return applySection; },
    get fillTree() { return fillTree; },
    get renderFind() { return renderFind; },
    get renderChecks() { return renderChecks; },
    get renderQto() { return renderQto; },
    get applyColor() { return applyColor; },
    get renderChanges() { return renderChanges; },
    get showProps() { return showProps; },
    get fileHost() { return fileHost; },
    get libraryOn() { return libraryOn; },
  });
  const { copyBtn, copyRow, copyAllBar, addonSelection, addonSections, renderAddonExports, tagLast, afterEdit, renderChanges, undo, saveIfc } = mountEditingAddons({
    ST, ui, status, guard, rebuild, download, syncEdit, copyText, root,
    get models() { return models; },
    get cur() { return cur; },
    get entryOf() { return entryOf; },
    get editableRow() { return editableRow; },
    get showProps() { return showProps; },
    get undoHook() { return undoHook; },
    get syncAccepted() { return syncAccepted; },
    get syncAutosave() { return syncAutosave; },
    get unsavedIn() { return unsavedIn; },
    get fileHost() { return fileHost; },
    get IFC_TYPES() { return IFC_TYPES; },
  });
  const { metres, secOnDwg, secView, secUnit, secText, buildingTurn, applyViewTurn, startCutTurn, applySection, placeSectionBar, sectionOff, toggleSection, applyBox, renderShape, setTilt, boxRoundPick, onBoxGrip } = mountSection({
    ST, ui, status, root,
    get settings() { return settings; },
    get turnBtn() { return turnBtn; },
    get ubox() { return ubox; },
    get usec() { return usec; },
    get ui3() { return ui3; },
    get setPressed() { return setPressed; },
    get ushape() { return ushape; },
    get AXIS() { return AXIS; },
  });
  const { cur, isSpaceKey, entryOf, placementOf, toWorld, toLocal, addModel, setActive, removeModel, applyOffset, renderModels, teamTw, showTeamBtn } = mountFederation({
    ST, ui, status, frame, guard, ifcWithUnits, fillIfcInfo, fillStoreys, fillClasses, clearProps, renderChanges, applySection, stopPlacing,
    get models() { return models; },
    get open() { return open; },
    get colorOff() { return colorOff; },
    get fillTree() { return fillTree; },
    get renderColor() { return renderColor; },
    get afterPick() { return afterPick; },
    get keepEdits() { return keepEdits; },
    get clearCompare() { return clearCompare; },
    get renderCompare() { return renderCompare; },
    get teamBtn() { return teamBtn; },
  });
  const { showStage, toolButton, setPressed } = mountStageBar({
    ST, ui, stopPlacing, syncEdit, root,
    get usec() { return usec; },
    get measureOff() { return measureOff; },
    get walkOff() { return walkOff; },
  });
  const { applyIfcxOption, openIfcx, exportIfcx, openObj, openFolder, showFolder, syncDisplayButtons } = mountFoldersIfcx({
    ST, ui, status, frame, guard, addModel, showStage, root,
    get settings() { return settings; },
    get models() { return models; },
    get keepEdits() { return keepEdits; },
    get openIfc() { return openIfc; },
    get fileHost() { return fileHost; },
    get renderRecent() { return renderRecent; },
    get open() { return open; },
  });
  const { scanProgElementKeys, syncScanProg } = mountDrawPlan({
    ST, ui,
    get index() { return index; },
  });
  const { renderHooks, openRender, openLive, exportGlb, makeUsd, exportUsd, openCloud, openRegister, hasSavedMaps, ensureMaps, cloudPressed, locateCloudPoint } = mountRenderExport({
    ST, ui, status, frame, guard, renderChanges, cur, entryOf, nameOfKey, showStage, syncScanProg, root,
    get models() { return models; },
    get fileHost() { return fileHost; },
    get ensureViewer() { return ensureViewer; },
    get fx() { return fx; },
    get gu() { return gu; },
    get ownNote() { return ownNote; },
    get syncMeasureBar() { return syncMeasureBar; },
    get redrawMeasure() { return redrawMeasure; },
  });
  const { isCardDrag, dragOver, dragEnd, dropIt, outsideFiles, unsavedIn, anyDirty, keepEdits, open, fromFolder } = mountLibraryDrop({
    ST, ui, status, frame, guard, openIfcx, openObj, ifcWithUnits, cur, setActive, saveIfc, openCloud, startPlacing, moveGhost, moveGhostXY, commitPlace, root, hasFiles, startsWith,
    get DRAG_TYPE() { return DRAG_TYPE; },
    get models() { return models; },
    get openDwg() { return openDwg; },
    get openRevit() { return openRevit; },
    get openIfc() { return openIfc; },
  });
  const { okMargin, okGeoCrs, readAssist, syncSettingsForm, addCorner, applyCorner, applyPanelFocus, saveSettings, openSampleHouse } = mountSettingsFiles({
    status, open, root,
    get GEO_CRS() { return GEO_CRS; },
    get settings() { return settings; },
    get settingsDlg() { return settingsDlg; },
    get corners() { return corners; },
  });
  const GEO_CRS = ['4326', 'file', '4258', '4269', '4283', '7844', '4167', '6668', '4490'];
  const settings = { ...SET_DEFAULTS, assistants: { enabled: false, groups: ['read'] } };
  mountSettingsWire({
    okMargin, okGeoCrs, readAssist, settings,
  });
  const settingsDlg = document.querySelector('[data-app-settings]');
  if (settingsDlg) bindWorkStyle(settingsDlg, t);   // 0.9 D8.12: Settings › BimCraft › Working style (work-style-ui.js)
  mountMachineCard(settingsDlg);
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
        if (typeof v.ifcx === 'boolean') settings.ifcx = v.ifcx;
        if (typeof v.panelFocus === 'boolean') settings.panelFocus = v.panelFocus;
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
      else if (t.name === 'bcPanelFocus') { settings.panelFocus = t.checked; applyPanelFocus(); }   // 0.9 FX.55: panel sections close each other (panel-focus.js)
      else if (t.name === 'bcIfcx') { settings.ifcx = t.checked; applyIfcxOption(); }   // 0.9 SU.882: the IFC5 alpha lab option
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
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, SET_DEFAULTS, { assistants: { enabled: false, groups: ['read'] } }); saveSettings(); syncSettingsForm(); applyIfcxOption(); applyCorner(); applyAssist(); });
  }
  // ---- Corner indicator (Settings › BimCraft): the view cube or an X/Y/Z axis icon in each 3D view (m3d/viewcube.js,
  // byte-identical copies of ModelCraft's). Never on the 2D drawing: the hosts are the 3D views' own wrappers. ----
  const corners = [];   // { cube, axes } per 3D view
  ST.cube3d = null;     // the IFC view's cube (its compass follows the view turn: applyViewTurn)

  mountFilesWire({
    ui, status, guard, openFolder, open, openSampleHouse, root,
    get listing() { return listing; },
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
  mountFilesWire2({
    ST, ui, status, guard, rebuild, startPlacing, renderChanges, afterEdit, openFolder, showFolder, open, openHost, renderRecent, fileHost, autosave,
    get openIfc() { return openIfc; },
  });


  // ---- 0.9: a Library card / picture dropped on the plan or the 3D view (library-view.js dragSource) ----
  const DRAG_TYPE = 'application/x-cadcraft-library-item';
  mountLibraryDropWire({
    ST, ui, status, guard, openFolder, applyIfcxOption, openIfcx, isCardDrag, dragOver, dragEnd, dropIt, outsideFiles, open, anyDirty, keepEdits, listing, root, hasFiles,
    get library() { return library; },
  });









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
  ST.findRules = [{ field: 'cls', op: 'is', value: '' }];
  ST.findMode = 'all';
  ST.findSaving = false;
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
  ST.fdTasks = null;
  ST.fdErrors = [];
  ST.fdDay = null;
  ST.fdOn = false;
  ST.fdPlay = 0;
  ST.fdFile = '';
  ST.fdRaf = 0;
  ST.fdGroup = '';   // 0.6 WL.6: '' = every task, else a stage ('s:…') or work package ('p:…') key (ifc-4d.js groupsOf)
  const { fdView, fdSetGroup, renderFd, fdOpen, fdApply, fdClear } = mountFourD({
    ST, ui, status, treeView, pickKeys, index, colorOff, syncVis, download,
    get theme() { return theme; },
    get clearCompare() { return clearCompare; },
  });
  mountFourdWire({
    ST, index, fdOpen, fdApply, fdSetGroup, fdView,
  });

  mountQuantitiesWire({
    ST, ui, runModelChecks, renderQto, qtoResult, spaceRes, renderChecks,
  });

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
  mountIdsWire({
    ST, ui, status, afterEdit, settings, projectOf,
  });

  mountClashWire({
    ST,
  });
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
  mountClashWire2({
    ST, status, rebuild, afterEdit, cur, afterPick, showProps, models, root,
    get undoHook() { return undoHook; },
  });
  function nameOfKey(k) { const e = entryOf(k); if (!e) return '#' + k; const id = k - e.model.keyBase; const n = e.ifc.api.GetLine(e.model.modelID, id).Name?.value; return (n || '#' + id) + (models.length > 1 ? ' (' + e.name + ')' : ''); }

  // ---- Issues: BCF (0.4 B9) ----
  ST.issues = [];
  ST.issueForm = false;
  ST.currentIssue = null;
  ST.guidKeys = null;
  // Your name on issues (0.5 SI.9): signed in, it is your account's (fileHost.account()) with nothing to type; a name typed in
  // Settings › BimCraft or in the issue form wins until it is cleared. Signed out: the form's name box, as before.
  const typedAuthor = () => { try { return localStorage.getItem('bimcraft.author') || ''; } catch (e) { return ''; } };
  const accountName = () => { const a = fileHost.account(); return a && typeof a.name === 'string' ? a.name.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 120) : ''; };
  function authorOf() { return typedAuthor() || accountName(); }
  /** A name typed for issues: kept unless it is the account's own (or empty: the account's from then on). */
  const keepAuthor = (v) => {
    try { if (!v || v === accountName()) localStorage.removeItem('bimcraft.author'); else localStorage.setItem('bimcraft.author', v); } catch (err) { /* this tab keeps it */ }
  };
  mountBcfIssuesWire({
    ST, status, settingsDlg, fileHost, typedAuthor, accountName, keepAuthor,
    get renderIssues() { return renderIssues; },
  });
  const { guidIndex, guidOf, frameC, renderIssues } = mountBcfIssues({
    ST, ui, status, guard, afterPick, showProps, models, accountName, authorOf, keepAuthor, clearProps, showMany, entryOf, applySection, sectionOff, download,
  });

  mountColorWire({
    ST, ui, guard, applyColor, openScheme, colorOff, index, recolor,
  });

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
  mountFederationWire({
    status, guard, showTeamBtn, teamTw, addModel, models, teamBtn,
  });

  // ---- Compare versions (0.4 B21) ----
  ST.cmpOld = null;
  ST.cmpNew = null;
  ST.cmpRes = null;
  ST.cmpPair = null;
  const { renderCompare, clearCompare } = mountCompare({
    ST, ui, status, treeView, fdClear, pickKeys, models, theme, index, fieldLabel, colorOff, cur, entryOf, syncVis, download,
  });
  mountCompareWire({
    ST, ui, guard, addModel, cur, setActive, removeModel, applyOffset, renderModels, models,
  });






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
  ST.vaultUi = null;
  ST.vaultRef = null;
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
  mountSectionPlaneWire({
    ST, ui, status, buildingTurn, applySection, placeSectionBar, usec, turnBtn, root,
  });
  // ---- Section box (0.4 B4; viewer3d.js setSectionBox): from / to per IFC axis, metres from the model's minimum corner ----
  // Free-form volumes (0.5 WL.1; section-volume.js): `cut.cells` = boxes kept as a union, each with tilted faces and extra
  // planes; `cut.cell` = the one the sliders edit; `cut.box` is that cell's box (setting it to another object or null —
  // Box round the pick, Whole model, tests — replaces the box of that cell).
  const ushape = { cell: $('[data-sec-cell]'), add: $('[data-sec-cell-add]'), remove: $('[data-sec-cell-remove]'), details: $('[data-sec-shape]'),
    face: $('[data-sec-tilt-face]'), a: $('[data-sec-tilt-a]'), b: $('[data-sec-tilt-b]'), alabel: $('[data-sec-tilt-alabel]'), blabel: $('[data-sec-tilt-blabel]'),
    planes: $('[data-sec-planes]'), planeAdd: $('[data-sec-plane-add]'), note: $('[data-sec-shape-note]') };
  const AXIS = ['X', 'Y', 'Z'];   // i18n-ignore: axis letters, as on the sliders
  mountSectionBoxWire({
    ST, status, applyBox, renderShape, setTilt, boxRoundPick, secOnDwg, applySection, sectionOff, secView, secUnit, secText, metres, startCutTurn, usec, ubox, ushape,
  });

  // ---- Walk (0.4 B18; viewer3d.js startWalk) ----
  const uw = { bar: $('[data-walkbar]'), out: $('[data-walk-out]'), height: $('[data-walk-height]'), gravity: $('[data-walk-gravity]'), collide: $('[data-walk-collide]') };
  mountWalkWire({
    ST, status, walkOpts, eyeShow, eyeBad, walkOff, walkOn, uw,
  });

  // ---- Measure (0.4 B6) ----
  const um = { bar: $('[data-measurebar]'), out: $('[data-measure-out]'), labels: $('[data-measure-labels]'), copy: $('[data-measure-copy]') };
  mountMeasureWire({
    ST, ui, syncPlaceUnits, applySection, measurementText, syncMeasureBar, redrawMeasure, shiftNow, showProps, models,
  });
  // ---- Location (0.5 WL.4; ifc-geo.js + the crs.js copy): where a picked point is on the earth. The point goes back to
  // its model's own file coordinates (each federated model has its own georeference), then through IfcMapConversion to
  // the map grid of its IfcProjectedCRS and on to latitude / longitude in Settings › BimCraft › Location's system; with
  // no map conversion, from IfcSite's latitude / longitude (approximate). crs.js and its catalog load on the first use.
  ST.crsLib = null;
  ST.pickLib = null;
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
  ST.xrOn = null;
  ST.xrWhy = 'none';
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
  mountMapsWire({
    ST, status, guard, copyText, renderChanges, cur, entryOf, saveSettings, syncSettingsForm, settings, settingsDlg, syncMeasureBar, redrawMeasure, measureOff, measureOn, um,
  });

  // ---- Hide and isolate (0.4 B12; ifc-vis.js through viewer.vis) ----
  // Hide = the picked elements go; Isolate = only they stay; See-through = only they stay solid, the rest faint (clicks
  // go through it); Show all = everything back. The pick is kept where it is still shown.
  const visButtons = [...ui.toolbar.querySelectorAll('[data-vis]')];
  const visMenu = ui.toolbar.querySelector('[data-vis-menu]');
  const VIS_TITLE = { hide: 'vis.hide.title', isolate: 'vis.isolate.title', ghost: 'vis.ghost.title', all: 'vis.showall.title', secbox: 'vis.secbox.title' };
  mountAssistantsWire({
    ST, $, ui, status, cur, entryOf, unsavedIn, settings, fileHost, syncVis, renderAssist, visAct, afterPick, index, treeView, showProps, keysOfGuids, renderClash, runClash, models, nameOfKey, clearProps, showMany,
  });



  mountShortStagesWire({
    ST, ui, status, guard, act, toggleIfcEquipment, checkUpdates, showCredits, revealRightPanel, revealPaletteOf, showTab, stopPlacing, syncPlacebar, moveGhost, toggleSnap, toggleSection, setPressed, toolButton, syncDisplayButtons, exportIfcx, ensureMaps, cloudPressed, openRender, openLive, exportGlb, exportUsd, visAct, measureOff, measureOn, walkOff, walkOn, redrawMeasure, togglePrint, toggle3d, pick3d, openVr, exportDae, openPaint, openViews, visMenu, root,
    get rPanel() { return rPanel; },
    get libraryOn() { return libraryOn; },
  });

  // ==== Library ====================================================================================
  const tabs = root.querySelectorAll('[data-rtab]');
  const rPanel = tabs[0]?.closest('aside') || root;   // the right panel: its tabs and panes travel with it (panels window)
  mountLibraryWire({
    ST, showTab, tabs, root,
  });

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
  mountPlacingWire({
    ST, ui, toggleSnap, syncPlacebar, moveGhost, planCut, coordMatrix, storeyElev, stopPlacing, typedPlace, toWorld, pb,
  });











  // ==== Edit menu ===================================================================================
  // Toolbar Undo, Redo, Copy, Paste and the More menu (ui.inc), the same actions on keys. What each one can do in
  // BimCraft is decided here; an action that cannot act right now is aria-disabled with the reason as its title, and a
  // click or key says the reason in the status line instead of doing nothing.
  const store = (() => { try { return window.localStorage; } catch (e) { return null; } })();
  ST.clip = null;   // this tab's clip (clipboard.js); another tab's newer one in storage wins
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
  /** The picked keys this model can delete or copy (storeys, spaces and the project cannot), as expressIDs. Cheap: classes
   * come from the load result (a Select all on a big model asks this on every redraw of the menu). */
  const SPATIAL = /^Ifc(Project|Site|Building|BuildingStorey|Space|Facility|FacilityPart|Bridge|Road|Railway|MarineFacility|SpatialZone|ExternalSpatialElement)$/;
  const clsMemo = { model: null, map: new Map() };

  mountEditMenuWire({
    ST, ui, status, guard, syncEdit, act, currentClip, whyNot, picks, editMenu, NOT_BUILT, root,
  });












  mountBundlesWire({
    ST, ui, status, guard, download, coordMatrix, rebuild, afterEdit, cur, toWorld, open, syncVis, afterPick, index, openIfc, showProps, renderQto, models, clearProps, showMany, rPanel, root,
  });

  mountDrawWire({
    ST, ui, emitViewMode, status, rebuild, download, coordMatrix, renderChanges, saveIfc, afterEdit, applySection, toWorld, toLocal, cur, entryOf, addModel, removeModel, placementOf, renderModels, scanProgElementKeys, makeUsd, renderHooks, fileHost, afterPick, index, colorOff, treeView, showProps, spacesIndex, fdView, runClash, models, nameOfKey, authorOf, renderIssues, guidOf, clearProps, showMany, readDrawingModel, root,
  });

  // ---- Menus, keys and mouse (0.5 track IP): the shell's input engine (assets/js/app-input-ui.js, manifest "input":
  // input-bimcraft.js) runs the styles; it asks BimCraft for the status line, downloads and whether a tool is running ----
  window.ccInputHooks = {
    status: (text, isError) => status(text, isError),
    download,
    busy: () => !!ST.placing || ST.walking,   // a running tool keeps its own letter keys (R, Tab; W A S D Q E)
  };

  // A phone (owner, 2026-10-15): the shell's app-phone.js (manifest "phone") — the view keeps the screen, the panels are sheets.

  mountAddonsWire({
    ST, ui, status, guard, redo, act, classOfId, showTab, afterEdit, addonSelection, tagLast, renderAddonExports, saveIfc, undo, entryOf, cur, open, unsavedIn, openHost, fileHost, IFC_TYPES, afterPick, showProps, keysOfGuid, clearProps, showMany, library, root,
    get libraryOn() { return libraryOn; },
  });



}

function hasFiles(e) { return !!e.dataTransfer && [...e.dataTransfer.types].includes('Files'); }
function startsWith(data, text) {
  for (let i = 0; i < text.length; i++) if (data[i] !== text.charCodeAt(i)) return false;
  return true;
}
