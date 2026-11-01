#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * BimCraft reader test: runs every .ifc / .rvt / .rfa / .rte / .rft in a folder through the
 * SAME modules the browser UI uses (public_html/assets/apps/bimcraft/<dev|version>/ifc-model.js
 * and rvt-reader.js) and prints what each file yields. Use it to "test through" a set of drawings.
 *
 *   node bin/test-bimcraft.mjs                      # fixtures/ (public) + ../testfiles (deploy root) when present, recursively
 *   node bin/test-bimcraft.mjs /path/to/drawings    # any folder or single file
 *   node bin/test-bimcraft.mjs --json               # one JSON line per file
 *   node bin/test-bimcraft.mjs --build 0.1          # a frozen release instead of dev
 *   node bin/test-bimcraft.mjs --folder <dir>       # "Open a folder": the folder scan, as the browser does it
 *   node bin/test-bimcraft.mjs --edit [file.ifc…]   # IFC editing: copy-on-write, save, reopen, undo
 *   node bin/test-bimcraft.mjs --clipboard          # Edit menu logic: clipboard.js (clips, storage, validation), copy /
 *                                                   #   paste / paste in place / duplicate of placements, undo + redo
 *   node bin/test-bimcraft.mjs --dwg3d              # DWG/DXF in 3D: readDwg (dwg/) + dwg-compile3d.js on the ezdxf fixture with
 *                                                   #   every 3D type (tools/bimcraft-test/fixtures, AutoCAD 2000 + 2018),
 *                                                   #   counts and bounds; m3d/ copies; every sample DWG compiles in 3D
 *   node bin/test-bimcraft.mjs --library            # library items: adapters, validateItem, place/swap/update in IFC,
 *                                                   #   the IFC equipment schedule, tools/library/convert.mjs (spec §7 B)
 *   node bin/test-bimcraft.mjs --vis                # 0.4 B12 hide / isolate / see-through: element runs per batch (ifc-model.js),
 *                                                   #   ifc-vis.js index buffers, per-element edges, bounds, keys of a second model;
 *                                                   #   on the generated fixture (tools/bimcraft-test/ifc-fixture.mjs) + public samples
 *   node bin/test-bimcraft.mjs --elements           # 0.4 B1 delete / cut / copy / paste of any IFC element (ifc-elements.js via
 *                                                   #   IfcEditor): parts, openings, relations, undo / redo, storeys, turns; every
 *                                                   #   saved file reopened and checked for references to missing lines
 *   node bin/test-bimcraft.mjs --tree               # 0.4 B13 model tree data (ifc-tree.js): spatial levels, class groups, parts,
 *                                                   #   elements in nothing, leaves, checkbox states, paths; public samples
 *   node bin/test-bimcraft.mjs --color              # 0.4 B15 property index (ifc-props.js: built-ins, sets, type sets, materials,
 *                                                   #   quantities) and colorBy (fixed order, Other, ranges, no value, themes)
 *   node bin/test-bimcraft.mjs --federation         # 0.4 B16 several models in one scene: keys, placement in the first model's
 *                                                   #   coordinates (a site shifted 100 m lands 100 m away), offsets, edits
 *                                                   #   on one model only, both saved and reopened; public samples together
 *   node bin/test-bimcraft.mjs --measure            # 0.4 B6 measure.js: face regions and areas, feature edges, snapping, IFC deltas
 *   node bin/test-bimcraft.mjs --bcf                # 0.4 B9 bcf.js: BCF 2.1 written and validated against the buildingSMART XSDs
 *                                                   #   (tools/markupcraft-test/bcf_check.py when its venv exists), read back, a
 *                                                   #   deflated zip, cameras through a coordination matrix, refusals
 *   node bin/test-bimcraft.mjs --find               # 0.4 B14 ifc-find.js: every operator on the fixture's index, all / any, sets
 *   node bin/test-bimcraft.mjs --agent              # 0.4 X.7 bim-agent.js: the live tools through host.js's dispatcher on the
 *                                                   #   fixture (permissions, filters, paging, isolate, properties, refusals)
 *   node bin/test-bimcraft.mjs --clash              # 0.4 B17 clash.js: triangle pairs, the fixture's corners and slab, tolerance, sets
 *   node bin/test-bimcraft.mjs --checks             # 0.4 B19 ifc-checks.js on the fixture with problems: required, GlobalIds, storey, stacked
 *   node bin/test-bimcraft.mjs --qto                # 0.4 B20 ifc-qto.js: totals by storey / class / property, sums, CSV
 *   node bin/test-bimcraft.mjs --compare            # 0.4 B21 ifc-compare.js: the fixture against its revision b (also moved 100 m)
 *   node bin/test-bimcraft.mjs --handoff            # 0.4 1.5 handoff.js: every app's copy byte-identical, ids, sendHandoff refusals
 *   node bin/test-bimcraft.mjs --4d                 # 0.4 B22 ifc-4d.js: task CSV parsing and refusals, matching, status on a date
 *   node bin/test-bimcraft.mjs --section            # 0.5 WL.1/WL.2 section-volume.js: cells, tilts, extra planes, unions, clip GLSL
 *   node bin/test-bimcraft.mjs --geo                # 0.5 WL.4 ifc-geo.js + the crs.js copy: map conversion and site lat/long vs PROJ
 *   node bin/test-bimcraft.mjs --dynamic            # 0.5 DB.11 dwg-dynamic.js (+ ModelCraft's copy), states per reference, library state items
 *   node bin/test-bimcraft.mjs --partial            # cut-off RVT/RFA: sample files cut at many offsets must recover exactly
 *                                                   #   the streams whose bytes and index are all present (byte-equal to the
 *                                                   #   original), never more; no complete file is reported partial. Also runs
 *                                                   #   after the default (no folder) run. A cut-off file found in the folder
 *                                                   #   passes only as a correct partial open (checkPartialOpen).
 *   node bin/test-bimcraft.mjs --walls             # 0.7 contributions (Doc, achartt): wall assemblies, the project material library and
 *                                                   #   reference dimensions: tools/bimcraft-test/{wall-precision,material-library}.test.mjs (node:test)
 *
 * Drawings live OUTSIDE the repo (/var/www/CADCRAFT/testfiles): client work never goes in git.
 * IFC is read by cc-ifc, the build's own engine (dev/ifc/api.js; lib/ifc/api.js for a frozen release, which shipped web-ifc),
 * with manifold-3d (assets/vendor) for openings. `--web-ifc` runs the same checks on web-ifc instead — a test-only oracle,
 * never shipped: setup once (cd tools/bimcraft-test && npm install).
 * Exit code 1 if any file fails to open.
 */
import { createRequire, register } from 'node:module';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// The machine's own test files, OUTSIDE the repo (public samples, a corpus, client drawings that never go in git). A clean
// clone of the app's repo has none: every check that needs one skips with a line saying so. BIMCRAFT_TESTFILES points
// elsewhere (a missing folder simulates a clean clone).
const TESTFILES = process.env.BIMCRAFT_TESTFILES || path.join(ROOT, '..', 'testfiles');
const SAMPLE_DIR = path.join(TESTFILES, 'samples');
/** Is this public sample here? Prints a skip line when not. */
function hasSample(name) {
  const here = fs.existsSync(path.join(SAMPLE_DIR, name));
  if (!here) console.log('  (skipped: ' + name + ' — the public samples are not in this checkout)');
  return here;
}
// --build <version> tests a frozen release instead of the dev working copy.
const buildArg = process.argv.indexOf('--build');
const BUILD = buildArg > 0 ? process.argv[buildArg + 1] : 'dev';
const APP = path.join(ROOT, 'public_html/assets/apps/bimcraft', BUILD);
// The build's language file: DOM-free modules speak through t() (docs/LANG.md); a build without one keeps its English.
if (fs.existsSync(path.join(APP, 'lang/en.json'))) (await import(pathToFileURL(path.join(APP, 'i18n.js')).href)).init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const require = createRequire(path.join(ROOT, 'tools/bimcraft-test/package.json'));

// cc-ifc's IfcAPI.Init() imports 'manifold-3d' by name (the page maps it in the manifest); Node gets the vendored build.
// The crs.js copy (0.5 WL.4) imports 'proj4' the same way; tin.js (0.5 RC.10 terrain) imports delaunator and robust-predicates.
register('data:text/javascript,' + encodeURIComponent(`import { pathToFileURL } from 'node:url';
export async function resolve(spec, ctx, next) {
  if (/^[A-Za-z]:/.test(spec)) return { url: pathToFileURL(spec).href, shortCircuit: true };
  if (spec === 'manifold-3d') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/manifold-3d/current/manifold.js')).href)}, shortCircuit: true };
  if (spec === 'proj4') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/proj4/current/proj4.esm.min.js')).href)}, shortCircuit: true };
  if (spec === 'delaunator') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/delaunator/current/index.js')).href)}, shortCircuit: true };
  if (spec === 'robust-predicates') return { url: ${JSON.stringify(pathToFileURL(path.join(ROOT, 'public_html/assets/vendor/robust-predicates/current/index.js')).href)}, shortCircuit: true };
  return next(spec, ctx);
}`), import.meta.url);
let WebIFC;
if (process.argv.includes('--web-ifc')) {
  try {
    WebIFC = require('web-ifc');
  } catch (e) {
    console.error('--web-ifc needs the oracle. Run: (cd tools/bimcraft-test && npm install)');
    process.exit(2);
  }
} else {
  const own = path.join(APP, 'ifc/api.js');
  WebIFC = await import(fs.existsSync(own) ? own : path.join(ROOT, 'lib/ifc/api.js'));
}
const { IfcModel } = await import(path.join(APP, 'ifc-model.js'));
const { readRevit, isOleFile } = await import(path.join(APP, 'rvt-reader.js'));

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const folderArg = args.indexOf('--folder');
// --folder alone: the public folder fixture (fixtures/folder/Cad), checked against fixtures/facts.json
if (folderArg >= 0) process.exit(await folderMode(args[folderArg + 1] && !args[folderArg + 1].startsWith('--') ? path.resolve(args[folderArg + 1]) : path.join(ROOT, 'fixtures/folder/Cad')));
if (args.includes('--library')) process.exit(await libraryMode());
if (args.includes('--drop')) process.exit(await dropMode());
if (args.includes('--clipboard')) process.exit(await clipboardMode());
if (args.includes('--dwg3d')) process.exit(await dwg3dMode());
if (args.includes('--partial')) process.exit(await partialMode());
if (args.includes('--vis')) process.exit(await visMode());
if (args.includes('--elements')) process.exit(await elementsMode());
if (args.includes('--tree')) process.exit(await treeMode());
if (args.includes('--color')) process.exit(await colorMode());
if (args.includes('--federation')) process.exit(await federationMode());
if (args.includes('--measure')) process.exit(await measureMode());
if (args.includes('--bcf')) process.exit(await bcfMode());
if (args.includes('--find')) process.exit(await findMode());
if (args.includes('--agent')) process.exit(await agentMode());
if (args.includes('--clash')) process.exit(await clashMode());
if (args.includes('--checks')) process.exit(await checksMode());
if (args.includes('--qto')) process.exit(await qtoMode());
if (args.includes('--compare')) process.exit(await compareMode());
if (args.includes('--handoff')) process.exit(await handoffMode());
if (args.includes('--4d')) process.exit(await fourDMode());
if (args.includes('--section')) process.exit(await sectionMode());
if (args.includes('--geo')) process.exit(await geoMode());
if (args.includes('--dynamic')) process.exit(await dynamicMode());
if (args.includes('--new')) process.exit(await newMode());
if (args.includes('--rotated')) process.exit(await rotatedMode());
// 0.7 contributions (Doc, achartt/bimcraft-SDH): the two node:test files that came with the wall assemblies
if (args.includes('--walls')) {
  const { spawnSync } = await import('node:child_process');
  const r = spawnSync(process.execPath, ['--test', path.join(ROOT, 'tools/bimcraft-test/wall-precision.test.mjs'), path.join(ROOT, 'tools/bimcraft-test/material-library.test.mjs')], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}
// 0.8 D8.9 (session d89_PART_3): any projection — UTM, EPSG codes and your own — tools/bimcraft-test/crs-pick-test.mjs
if (args.includes('--crspick')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/crs-pick-test.mjs'))).crsPickMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.8 D8.9 round 3 (session d89b_PART_3): place a model on the map, rewrite its projected system, reproject files — tools/bimcraft-test/georef-test.mjs
if (args.includes('--georef')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/georef-test.mjs'))).georefMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.7 BIM-MLWALL (session bim-07): walls that run through several levels — tools/bimcraft-test/mlwall-test.mjs
if (args.includes('--mlwall')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/mlwall-test.mjs'))).mlwallMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.7 BIM-BUNDLE-OPEN (session bim-07): bundles in a folder scan — tools/bimcraft-test/bundle-open-test.mjs
if (args.includes('--bundle-open')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/bundle-open-test.mjs'))).bundleOpenMode({ APP, ROOT }));
// 0.7 DC.116 (session trace): walls from a set of plans (vector PDF, raster PDF, scan) — tools/bimcraft-test/plans-test.mjs
if (args.includes('--variants')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/variants-test.mjs'))).variantsMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.7 W3.19 (configurator)
if (args.includes('--plans')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/plans-test.mjs'))).plansMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.7 SU.461 (session bim-07): copy a level's drawing — tools/bimcraft-test/copylevel-test.mjs
if (args.includes('--copylevel')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/copylevel-test.mjs'))).copyLevelMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.7 BIM-FAM-SOLID (session bim-07): families used hard, broken, round-tripped, timed — tools/bimcraft-test/families-solid-test.mjs
if (args.includes('--famsolid')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/families-solid-test.mjs'))).famSolidMode({ APP, ROOT, WebIFC, IfcModel, quiet, args }));
// 0.7 BIM-FAM-MORE (session bim-07): families like parametric objects — tools/bimcraft-test/families-more-test.mjs
if (args.includes('--fammore')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/families-more-test.mjs'))).famMoreMode({ APP, ROOT, WebIFC, IfcModel, quiet, args }));
// 0.7 SU.878 (session bim-07): the I shape of BimCraft's analytical sections — tools/bimcraft-test/su878-test.mjs
if (args.includes('--su878')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/su878-test.mjs'))).su878Mode({ APP, ROOT, WebIFC, IfcModel, quiet }));
if (args.includes('--sx-tags')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/tags-test.mjs'))).sxTagsMode({ APP, ROOT, WebIFC, IfcModel, quiet, args }));   // 0.8 SU.915 + SU.889 (session sx-tags)
if (args.includes('--ask')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/ask-test.mjs'))).askMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 AC.8 ★ (session bim_PART_2)
if (args.includes('--furnish')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/furnish-test.mjs'))).furnishMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.60 (session bim_PART_2)
if (args.includes('--program-mass')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/program-mass-test.mjs'))).programMassMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.58 (session bim_PART_2)
if (args.includes('--permit')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/permit-test.mjs'))).permitMode({ APP, ROOT }));   // 0.8 EG.44 (session bim_PART_2)
if (args.includes('--scan-walls')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/scan-walls-test.mjs'))).scanWallsMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.37 spike (session bim_PART_2)
if (args.includes('--r47')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/r47-test.mjs'))).r47Mode({ APP, ROOT, WebIFC, IfcModel, quiet, args }));   // 0.8 R4.7 (session bim-model_PART_4): narration, add-on record, team models
if (args.includes('--r52')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/r52-test.mjs'))).r52Mode({ APP, ROOT, WebIFC, IfcModel, quiet, args }));   // 0.8 R5.2 (session bim-build_PART_5): D8.8 sheets, BIM-FAM-MORE, SU.1055, EG.6
if (args.includes('--scan-propose')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/scan-propose-test.mjs'))).scanProposeMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.37 build (session spikes_PART_4)
if (args.includes('--site-ctx')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/site-ctx-test.mjs'))).siteCtxMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.63 (session civil_PART_4): the site context taken as suggestions
if (args.includes('--acoustics')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/acoustics-test.mjs'))).acousticsMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.49 (session bim-sim_PART_2)
if (args.includes('--hazard')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/hazard-test.mjs'))).hazardMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.47 (session bim-sim_PART_2)
if (args.includes('--lifecycle')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/lifecycle-test.mjs'))).lifecycleMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.45 (session bim-sim_PART_2)
if (args.includes('--people')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/people-test.mjs'))).peopleMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.48 (session bim-sim_PART_2)
if (args.includes('--phases')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/phases-test.mjs'))).phasesMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 EG.59 (session bim_PART_2)
if (args.includes('--ifcsolids')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/ifc-solids-test.mjs'))).ifcSolidsMode({ APP, ROOT, WebIFC, IfcModel, quiet }));   // 0.8 DC.115 (session ifc_PART_3)
if (args.includes('--schedule')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/schedule-test.mjs'))).scheduleMode({ APP, ROOT, quiet }));   // 0.8 SU.931 (session ifc-08)
// 0.5 part 3 track BM (session bim-model): the building tools — tools/bimcraft-test/model-test.mjs
if (args.includes('--gh3ui')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/gh3ui-test.mjs'))).gh3uiMode({ APP, ROOT, quiet }));   // 0.8 GH.3 A/C (gh3ui_PART_3)
if (args.includes('--model')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/model-test.mjs'))).modelMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.5 part 4 track RC (session bim-residential): the residential tools — tools/bimcraft-test/res-test.mjs
if (args.includes('--res')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/res-test.mjs'))).resMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 REG.1 (regulation packs by jurisdiction): the pack format, inheritance, the two packs, the stair and room checks — tools/bimcraft-test/regs-test.mjs
// 0.8 REG.1: write the sample house that fails some IRC rules on purpose (tools/bimcraft-test/make-regs-sample.mjs)
if (args.includes('--make-regs-sample')) {
  const out = path.resolve(args[args.indexOf('--make-regs-sample') + 1] || 'irc-check-sample.ifc');
  const r = await (await import(path.join(ROOT, 'tools/bimcraft-test/make-regs-sample.mjs'))).makeRegsSample({ APP, WebIFC, IfcModel, quiet, out });
  for (const x of r.rows) console.log((x.ok === true ? '  meets    ' : x.ok === false ? '  FAILS    ' : '  not checked ') + x.where + ' | ' + x.label + ' | ' + x.clause + ' | found ' + (x.found === null ? '-' : Math.round(x.found * 100) / 100) + ' ' + x.unit);
  console.log(`${out}: ${r.bytes} bytes, ${r.rooms} rooms, ${r.stairs} stairs; ${r.sum.meets} meet, ${r.sum.fails} fail`);
  process.exit(0);
}
if (args.includes('--regs')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/regs-test.mjs'))).regsMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.6 (session bim-draw): the 0.6 drawing work — tools/bimcraft-test/draw06-test.mjs
// 0.7 (session massing): CivilCraft's building masses developed in BimCraft — tools/bimcraft-test/mass07-test.mjs
if (args.includes('--mass07')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/mass07-test.mjs'))).mass07Mode({ APP, ROOT, WebIFC, IfcModel, quiet }));
if (args.includes('--draw06')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/draw06-test.mjs'))).draw06Mode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.6 DF.29 (session bim-draw): pipes and ducts — tools/bimcraft-test/mep-test.mjs
if (args.includes('--mep')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/mep-test.mjs'))).mepMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.7 LC.9 (session mep-07): add-on API 1.1, equipment with ports, connected runs, clash sets, spools — tools/bimcraft-test/mep07-test.mjs
if (args.includes('--mep07')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/mep07-test.mjs'))).mep07Mode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 SU.888 (session sx-mep): split, VRF and fan-coil equipment, refnets, line sets — tools/bimcraft-test/hvac-test.mjs
if (args.includes('--hvac')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/hvac-test.mjs'))).hvacMode({ APP, ROOT, WebIFC, IfcModel, quiet, args }));
// 0.8 round 2 EG.1–EG.4 (session mep_PART_2): sizing + pressure drop, tray / conduit fill, IES / LDT lighting, sprinkler libraries — tools/bimcraft-test/eg-mep-test.mjs
if (args.includes('--eg')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/eg-mep-test.mjs'))).egMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.8 round 2 EG.13 (session energy_PART_2): the EnergyPlus step — IDF writer, engine harness, readers — tools/bimcraft-test/eg-energy-test.mjs
if (args.includes('--ep')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/eg-energy-test.mjs'))).epMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.8 EG.39 (session bim-analysis_PART_4): the scan against the model and the 4D schedule — tools/bimcraft-test/scan-progress-test.mjs
if (args.includes('--scanprogress')) { const { spawnSync } = await import('node:child_process'); process.exit(spawnSync(process.execPath, [path.join(ROOT, 'tools/bimcraft-test/scan-progress-test.mjs')], { stdio: 'inherit' }).status ?? 1); }
// 0.8 round 2 EG.14 + EG.17 (session energy_PART_2): embodied carbon and 5D costs — tools/bimcraft-test/eg-carbon-test.mjs
if (args.includes('--carbon')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/eg-carbon-test.mjs'))).carbonMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.8 round 2 EG.15 (session energy_PART_2): solar PV — arrays, shading, yield, strings, one-line — tools/bimcraft-test/eg-pv-test.mjs
if (args.includes('--pv')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/eg-pv-test.mjs'))).pvMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.8 EG.14 / EG.17 / EG.15 (session dec-eg_PART_3): swappable data sources — tools/bimcraft-test/datapacks-test.mjs
if (args.includes('--datapacks')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/datapacks-test.mjs'))).datapacksMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.8 SU.955 (session mep-08): the model's plumbing standard (US / Brazil ABNT) — tools/bimcraft-test/plumbstd-test.mjs
if (args.includes('--plumbstd')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/plumbstd-test.mjs'))).plumbstdMode({ APP, ROOT, WebIFC, IfcModel, quiet }));
// 0.6 DC.114 (session bim-families_PART_2): families on IFC types — tools/bimcraft-test/families-test.mjs
if (args.includes('--families')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/families-test.mjs'))).familiesMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.6 round 2 (session bim-fixes_PART_2): DC.53 / DC.57 — tools/bimcraft-test/fixes2-test.mjs
if (args.includes('--fixes2')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/fixes2-test.mjs'))).fixes2Mode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
if (args.includes('--views2')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/views2-test.mjs'))).views2Mode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));   // 0.6 DC.117 (bim-views_PART_2)
// 0.6 round 2 (session bim-comforts_PART_2): curved walls, justification, moving items, dormers, spiral stairs, interior elevations — tools/bimcraft-test/comforts-test.mjs
if (args.includes('--comforts')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/comforts-test.mjs'))).comfortsMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 SU.1055 (session bim-08): OBJ import — tools/bimcraft-test/obj-test.mjs
if (args.includes('--obj')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/obj-test.mjs'))).objMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 SU.1055 (session bim-08): Trace Reference geometry — tools/bimcraft-test/traceref-test.mjs
if (args.includes('--traceref')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/traceref-test.mjs'))).traceRefMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 D8.8 (session d88_PART_3): pictures as backgrounds — tools/bimcraft-test/picture-test.mjs
if (args.includes('--picture')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/picture-test.mjs'))).pictureMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 SU.1055 (session bim-08): pen overrides — tools/bimcraft-test/pens-test.mjs
if (args.includes('--pens')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/pens-test.mjs'))).pensMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 SU.1055 (session bim-08): a stair from a sketch — tools/bimcraft-test/stairsketch-test.mjs
if (args.includes('--stairsketch')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/stairsketch-test.mjs'))).stairSketchMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 D8.3 (session bim-08): Move / Copy / Align / Distribute — tools/bimcraft-test/modify-test.mjs
// 0.8 BIM-FAM-MORE step 8 (oltl2-d_PART_3): a loadable family library — tools/bimcraft-test/family-library-test.mjs
if (args.includes('--famlib')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/family-library-test.mjs'))).famLibMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 GH.3-D / GH.3-E (session gh3build_PART_3): roof edits coalesce; TJI floor framing from a loaded table — tools/bimcraft-test/gh3-test.mjs
if (args.includes('--gh3')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/gh3-test.mjs'))).gh3Mode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
// 0.8 GH.3-F/G (session gh3sym_PART_3): the symbol-set registry, electrical + plumbing sets, plan symbols — tools/bimcraft-test/symbols-test.mjs
if (args.includes('--symbols')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/symbols-test.mjs'))).symbolsMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
if (args.includes('--modify')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/modify-test.mjs'))).modifyMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));
if (args.includes('--ops')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/ops-test.mjs'))).opsMode({ APP, ROOT, WebIFC, IfcModel, quiet, args }));   // 0.7 LC.12 / LC.20 (bim-ops)
if (args.includes('--extra2')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/extra2-test.mjs'))).extra2Mode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));   // 0.6 DC.22 / LC.12 / LC.20 (bim-extra_PART_2)
if (args.includes('--shell')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/shell-mount-test.mjs'))).shellMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));   // 0.8 EG.18 / EG.23 mount (oltl-eg-a_PART_3)
if (args.includes('--photo')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/photo-material-test.mjs'))).photoMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));   // 0.8 EG.62 BimCraft half (material from a photo)
if (args.includes('--render')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/render-test.mjs'))).renderMode({ APP, ROOT, WebIFC, IfcModel, quiet, require, args }));   // 0.5 RC.7 / RC.11 (session render)
// 0.5 part 4 track IP.1: menu styles, keys and mouse — tools/bimcraft-test/input-test.mjs
if (args.includes('--input')) process.exit(await (await import(path.join(ROOT, 'tools/bimcraft-test/input-test.mjs'))).inputMode({ APP, ROOT }));
if (args.includes('--edit')) process.exit(await editMode(args.filter((a) => !a.startsWith('--')).map((a) => path.resolve(a))));
const explicitTarget = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--build');
// Default: the repo's public fixtures, plus the machine's own test files when this checkout has them (a clean clone
// of the app's repo has only fixtures/; CC_DEVSHELL=1).
const targets = explicitTarget ? [path.resolve(explicitTarget)] : [path.join(ROOT, 'fixtures'), TESTFILES].filter((p) => fs.existsSync(p));
const target = targets[0];
const EXT = /\.(ifc|rvt|rfa|rte|rft|dwg|dxf)$/i;

const files = [];
for (const t of targets) (function walk(p) {
  if (!fs.existsSync(p)) return;
  const st = fs.statSync(p);
  // _truth: the cc-dwg harness's ODA DXF + JSON (tools/dwg-test)
  // fixtures/folder and testfiles/folder-fixture are "Open a folder" fixtures (--folder; a shell IFC without geometry on purpose)
  if (st.isDirectory()) { if (path.basename(p) === 'folder-fixture' || path.basename(p) === '_truth' || p === path.join(ROOT, 'fixtures/folder')) return; for (const n of fs.readdirSync(p).sort()) walk(path.join(p, n)); }
  else if (EXT.test(p)) files.push(p);
})(t);
if (!files.length) { console.error('No .ifc/.rvt/.rfa files under ' + targets.join(', ')); process.exit(2); }

// web-ifc logs parse warnings to the console; keep the report readable.
function quiet(fn) {
  return async (...a) => {
    const log = console.log, warn = console.warn, err = console.error;
    console.log = console.warn = console.error = () => {};
    try { return await fn(...a); } finally { console.log = log; console.warn = warn; console.error = err; }
  };
}

let ifc = null;
let failed = 0, partials = 0;
const mb = (n) => (n / 1048576).toFixed(1) + ' MB';

for (const f of files) {
  const rel = path.relative(f.startsWith(ROOT + '/') ? ROOT : path.dirname(ROOT), f) || path.basename(f);
  const bytes = new Uint8Array(fs.readFileSync(f));
  const t0 = Date.now();
  let r;
  try {
    if (/\.(dwg|dxf)$/i.test(f)) {
      r = await readDrawing(bytes, f, rel);
    } else if (isOleFile(bytes) && indexPastEnd(bytes)) {
      // Cut off (its own index points past its end — found from the bytes, not the name): it must open
      // partially with only what is really there. checkPartialOpen throws on any wrong claim.
      r = { file: rel, ok: true, ...await checkPartialOpen(bytes, path.basename(f)) };
      partials++;
    } else if (isOleFile(bytes)) {
      const info = await readRevit(bytes, path.basename(f), { partial: true });
      if (info.partial) throw new Error('a complete file was reported as partial');
      const param = (n) => { for (const g of info.project?.groups || []) for (const p of g.params) if (p.name === n && p.value) return p.value; return null; };
      r = {
        file: rel, ok: true, kind: info.kind, size: mb(info.size), release: info.release, build: info.basic.build || null,
        worksharing: info.basic.worksharing || null,
        project: param('Project Name'), number: param('Project Number'), client: param('Client Name'),
        family: info.family ? (info.family.title + (info.family.categories.length ? ' [' + info.family.categories.join(', ') + ']' : '')) : null,
        references: info.references.filter((x) => x.path || x.absolute).length,
        preview: info.preview ? info.preview.width + '×' + info.preview.height : 'none',
      };
      if (!info.release) throw new Error('no release found in BasicFileInfo');
    } else {
      if (!ifc) ifc = await quiet(IfcModel.create)(WebIFC, null);
      const m = await quiet((b) => ifc.load(b))(bytes);
      const firstId = m.batches.find((b) => !b.space)?.triIds[0];
      const props = firstId ? await quiet((id) => ifc.properties(id))(firstId) : null;
      r = {
        file: rel, ok: true, kind: 'IFC', size: mb(bytes.length), schema: m.schema,
        project: [m.project.name, m.project.longName].filter(Boolean).join(', ') || null,
        from: m.project.application, storeys: m.storeys.length, elements: m.elements, triangles: m.triangles,
        batches: m.batches.length, top: m.types.slice(0, 4).map((t) => t.name.replace(/^Ifc/, '') + ' ' + t.count).join(', '),
        sample: props ? props.cls + ' "' + (props.name || '') + '" with ' + props.sets.length + ' property sets' : null,
      };
      if (!m.elements && hasProductBody(bytes)) throw new Error('no geometry');
      if (!m.elements) r.note = 'nothing to draw: no element has a Body shape (curves or loose geometry only — the schema examples)';
    }
  } catch (e) {
    failed++;
    r = { ...(r || {}), file: rel, ok: false, error: e.message || String(e) };
  }
  r.ms = Date.now() - t0;
  if (asJson) { console.log(JSON.stringify(r)); continue; }
  console.log((r.ok ? 'ok   ' : 'FAIL ') + r.file + '  (' + r.ms + ' ms)');
  for (const [k, v] of Object.entries(r)) {
    if (['file', 'ok', 'ms'].includes(k) || v === null || v === '' || v === undefined) continue;
    console.log('       ' + k.padEnd(12) + String(v));
  }
}
if (!asJson) console.log('\n' + (files.length - failed) + ' of ' + files.length + ' files opened'
  + (partials ? ' (' + partials + ' cut off, opened partially as expected)' : '') + (failed ? ', ' + failed + ' failed' : ''));
/** Does any IfcProductDefinitionShape hold a 'Body' representation? (Text scan, test-only: a file with none has nothing to draw.) */
function hasProductBody(bytes) {
  const text = Buffer.from(bytes).toString('latin1');
  const line = new Map();
  for (const mm of text.matchAll(/#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(([^;]*)\);/g)) line.set(mm[1], [mm[2], mm[3]]);
  for (const [type, args] of line.values()) {
    if (type !== 'IFCPRODUCTDEFINITIONSHAPE') continue;
    for (const ref of args.matchAll(/#(\d+)/g)) {
      const rep = line.get(ref[1]);
      if (rep && /SHAPEREPRESENTATION$/.test(rep[0]) && /^\s*#\d+\s*,\s*'Body'/.test(rep[1])) return true;
    }
  }
  return false;
}
// With no folder given: partial mode on cut copies of complete samples, and no complete file reported partial.
const partialBad = explicitTarget || asJson ? 0 : await partialMode();
process.exit(failed || partialBad ? 1 : 0);

/** --folder: scanFolder() over a real directory (files as Blobs, read by byte range like the browser). */
async function folderMode(dir) {
  const { scanFolder, resolveLink, indexFiles, normalizePath, HOUSEKEEPING_DIR } = await import(path.join(APP, 'folder-scan.js'));

  // Link matching rules, on the path shapes Revit writes.
  const idx = indexFiles(['X-Refs/BASE/ELECTRICAL.dwg', 'Mech/Q1305320.dwg', 'Links/Arch Central.rvt', 'Sub/Model.rvt'].map((p) => ({ path: p, file: { size: 0 } })));
  const cases = [
    [{ type: 'CAD Link', path: 'X-Refs\\BASE\\ELECTRICAL.dwg' }, '', 'found', 'X-Refs/BASE/ELECTRICAL.dwg'],
    [{ type: 'CAD Link', path: '..\\BASE\\ELECTRICAL.dwg' }, 'X-Refs/Sub', 'found', 'X-Refs/BASE/ELECTRICAL.dwg'],
    [{ type: 'CAD Link', path: '\\\\fileserver1\\SHARE\\Proj\\Cad\\X-Refs\\BASE\\electrical.DWG' }, '', 'found', 'X-Refs/BASE/ELECTRICAL.dwg'],
    [{ type: 'CAD Link', path: '..\\Manufacturer Info\\thermokool\\Q1305320.dwg' }, '', 'found_by_name', 'Mech/Q1305320.dwg'],
    [{ type: 'Revit Link', path: 'Arch Central.rvt' }, 'Sub', 'found_by_name', 'Links/Arch Central.rvt'],
    [{ type: 'Keynote Table', path: 'RevitKeynotes_Imperial_2004.txt' }, '', 'library', null],
    [{ type: 'CAD Link', path: 'X-Refs\\BASE\\PLUMBING.dwg' }, '', 'missing', null],
  ];
  let bad = 0;
  for (const [ref, dirOfModel, want, wantPath] of cases) {
    const r = resolveLink(ref, dirOfModel, idx);
    const ok = r.status === want && (r.match ? r.match.path : null) === wantPath;
    if (!ok) { bad++; console.log('FAIL link rule', ref.path, '→', r.status, r.match?.path); }
  }
  if (normalizePath('a/../../b') !== null || normalizePath('a\\b/../c') !== 'a/c') { bad++; console.log('FAIL normalizePath'); }
  console.log(bad ? bad + ' link rule(s) failed' : 'ok   link rules (' + cases.length + ')');

  const files = [], skipped = [];
  (function walk(d, rel) {
    for (const n of fs.readdirSync(d).sort()) {
      const full = path.join(d, n), r = rel ? rel + '/' + n : n;
      if (fs.statSync(full).isDirectory()) { if (HOUSEKEEPING_DIR.test(n)) skipped.push(r); else walk(full, r); }
      else files.push({ path: r, full });
    }
  })(dir, '');
  // A File (like the browser's) so lastModified is real; the Blob underneath is still read lazily.
  for (const f of files) f.file = new File([await fs.openAsBlob(f.full)], path.basename(f.full), { lastModified: fs.statSync(f.full).mtimeMs });
  const t0 = Date.now();
  const scan = await scanFolder({ name: path.basename(dir), files, skipped });
  const read = scan.models.reduce((n, g) => n + (g.info?.bytesRead || 0), 0);
  console.log(`\n${scan.name}: ${scan.files} files, ${(scan.totalSize / 1048576).toFixed(1)} MB, scanned in ${Date.now() - t0} ms (${(read / 1024).toFixed(0)} KB read for model cards)`);
  if (scan.focus) {
    console.log('  START HERE  ' + scan.focus.group.name);
    for (const r of scan.focus.reasons) console.log('              - ' + r);
  } else console.log('  START HERE  (none)');
  for (const g of scan.models) {
    if (g.roles && g.roles.length) console.log(`  roles  ${g.name}: ${g.roles.join(', ')}`);
    const copies = [g.main, ...g.backups].filter(Boolean);
    console.log(`  model  ${g.dir ? g.dir + '/' : ''}${g.name}  — ${g.info ? 'read from ' + path.basename(g.best.entry.path) + ', Revit ' + g.info.release : 'unreadable'}; ${copies.length} cop${copies.length === 1 ? 'y' : 'ies'}`);
    for (const c of copies) if (c.status !== 'ok') console.log(`         ! ${path.basename(c.entry.path)}: ${c.status}`);
    for (const l of g.links || []) console.log(`         link ${l.status.padEnd(13)} ${l.type}: ${l.path || l.absolute}${l.match ? '  → ' + l.match.path : ''}`);
  }
  for (const c of scan.cad) console.log(`  cad    ${c.path}${c.usedBy.length ? '  (linked by ' + c.usedBy.join(', ') + ')' : ''}`);
  for (const f of scan.ifc) console.log(`  ifc    ${f.path}`);
  for (const h of scan.housekeeping) console.log(`  revit housekeeping (not read): ${h.path}`);
  console.log(`  leftovers: ${scan.leftovers.map((f) => f.path).join(', ') || 'none'}`);
  console.log(`  other: ${scan.other.map((f) => f.path).join(', ') || 'none'}`);
  console.log(`  problems: ${scan.problems}`);
  if (dir === path.join(ROOT, 'fixtures/folder/Cad')) {
    // the public fixture: what bin/test-fixtures.mjs measured (fixtures/facts.json) — dates come from make-folder --touch
    const F = JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures/facts.json'), 'utf8')).folder;
    const check = (cond, label) => { if (!cond) bad++; console.log((cond ? 'ok   ' : 'FAIL ') + label); };
    check(scan.focus && scan.focus.group.name === F.startHere, 'START HERE is ' + F.startHere + ' (' + (scan.focus?.group.name || 'none') + ')');
    for (const [name, roles] of Object.entries(F.roles)) {
      const g = scan.models.find((x) => x.name === name);
      check(g && roles.every((r) => (g.roles || []).includes(r)), name + ': roles ' + roles.join(', ') + ' (' + (g?.roles || []).join(', ') + ')');
    }
    const dmg = scan.models.find((x) => x.name === F.damaged);
    check(dmg && [dmg.main, ...dmg.backups].some((c) => c && c.status !== 'ok'), F.damaged + ': the cut-off copy is flagged, a complete backup is read');
  }
  return bad ? 1 : 0;
}

/** --edit: ifc-edit.js on real IFC files — edit shared values, check neighbours, save, reopen, undo. */
async function editMode(list) {
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  // the public samples when this checkout has them, else the generated fixture (written to a temporary file)
  let files = list;
  if (!files.length) {
    files = fs.existsSync(SAMPLE_DIR) ? fs.readdirSync(SAMPLE_DIR).filter((n) => n.endsWith('.ifc')).map((n) => path.join(SAMPLE_DIR, n)) : [];
    const fx = path.join(fs.mkdtempSync(path.join((await import('node:os')).tmpdir(), 'bimcraft-fixture-')), 'bimcraft-fixture.ifc');
    fs.writeFileSync(fx, await fixtureBytes());
    files.push(fx);
  }
  let bad = 0;
  const ok = (cond, label) => { console.log((cond ? '  ok   ' : '  FAIL ') + label); if (!cond) bad++; };
  const engine = await quiet(IfcModel.create)(WebIFC, null);
  const engine2 = await quiet(IfcModel.create)(WebIFC, null);
  const propOf = async (m, id, setName, propName) => {
    const p = await quiet((x) => m.properties(x))(id);
    for (const s of p.sets) if (s.name === setName) for (const r of s.rows) if (r.name === propName) return r;
    return null;
  };
  for (const f of files) {
    console.log('== ' + path.basename(f));
    const model = await quiet((b) => engine.load(b))(new Uint8Array(fs.readFileSync(f)));
    const { api, modelID: mid } = engine;
    const ed = new IfcEditor(WebIFC, engine);

    // An element in a property set shared with another element, with a text value to edit.
    let target = null;
    const rels = api.GetLineIDsWithType(mid, WebIFC.IFCRELDEFINESBYPROPERTIES);
    for (let i = 0; i < rels.size() && !target; i++) {
      const r = api.GetLine(mid, rels.get(i), false);
      const objs = (r.RelatedObjects || []).map((h) => h.value);
      if (objs.length < 2) continue;
      const ps = api.GetLine(mid, r.RelatingPropertyDefinition.value, false);
      if (!ps.HasProperties) continue;
      for (const h of ps.HasProperties) {
        const p = api.GetLine(mid, h.value, false);
        if (p.NominalValue && /LABEL|TEXT|IDENTIFIER/.test(p.NominalValue.name || '')) { target = { a: objs[0], b: objs[1], set: ps.Name.value, prop: p.Name.value }; break; }
      }
    }
    if (!target) { console.log('  (no shared text property in this file)'); continue; }
    const before = await propOf(engine, target.b, target.set, target.prop);
    const row = await propOf(engine, target.a, target.set, target.prop);
    ok(row && row.edit, `shared value found: "${target.set}" / "${target.prop}" on #${target.a}, also on #${target.b}`);
    ed.setProperty(target.a, row.edit, 'BimCraft edit');
    ok((await propOf(engine, target.a, target.set, target.prop)).value === 'BimCraft edit', 'edited element shows the new value');
    ok((await propOf(engine, target.b, target.set, target.prop)).value === before.value, 'the element sharing that set is unchanged (' + JSON.stringify(before.value) + ')');

    // A number property, if there is one, and an attribute.
    const pa = await quiet((x) => engine.properties(x))(target.a);
    const numRow = pa.sets.flatMap((s) => s.rows).find((r) => r.edit && /REAL|MEASURE/.test(r.edit.valueType || ''));
    if (numRow) {
      let threw = false; try { ed.setProperty(target.a, numRow.edit, 'not a number'); } catch (e) { threw = true; }
      ok(threw, 'a number property refuses text');
      ed.setProperty(target.a, numRow.edit, '42.5');
    }
    const oldName = api.GetLine(mid, target.a, false).Name?.value ?? null;
    ed.setAttribute(target.a, 'Name', 'BimCraft renamed');
    ok(ed.changes.length === (numRow ? 3 : 2), ed.changes.length + ' changes recorded');

    // Save, reopen in a second engine, compare.
    const bytes = ed.save();
    const re = await quiet((b) => engine2.load(b))(bytes);
    ok(re.elements === model.elements && re.triangles === model.triangles, `reopened: same ${model.elements} elements and ${model.triangles} triangles`);
    ok(engine2.api.GetLine(engine2.modelID, target.a, false).Name.value === 'BimCraft renamed', 'saved file has the new name');
    ok((await propOf(engine2, target.a, target.set, target.prop)).value === 'BimCraft edit', 'saved file has the new value');
    ok((await propOf(engine2, target.b, target.set, target.prop)).value === before.value, 'saved file leaves the neighbour unchanged');
    if (numRow) ok((await propOf(engine2, target.a, numRow.edit.setName, numRow.name)).value === '42.5', 'saved file has the new number');

    // Undo everything.
    while (ed.changes.length) ed.undo();
    ok((api.GetLine(mid, target.a, false).Name?.value ?? null) === oldName, 'undo restores the name');
    ok((await propOf(engine, target.a, target.set, target.prop)).value === row.value, 'undo restores the value');
  }
  console.log(bad ? `\n${bad} check(s) failed` : '\nall edit checks passed');
  return bad ? 1 : 0;
}

/** DWG/DXF bytes → the drawing model, with the build's own readers: dwg/read.js (cc-dwg) and dxf-model.js, as the browser. */
async function parseDrawing(b, dxf) {
  // Frozen releases up to 0.4 shipped the vendored libredwg-web instead (--build 0.x): use that build's own reader.
  if (!fs.existsSync(path.join(APP, 'dwg/read.js'))) {
    const dir = path.join(ROOT, 'public_html/assets/vendor/libredwg-web/current');
    const mod = await import(path.join(dir, 'dist/libredwg-web.js'));
    const lib = await quiet(() => mod.LibreDwg.create(path.join(dir, 'wasm') + '/'))();
    const raw = await quiet(() => lib.dwg_read_data(b, dxf ? mod.Dwg_File_Type.DXF : mod.Dwg_File_Type.DWG))();
    if (!raw) throw new Error('LibreDWG could not read this file');
    try { return lib.convert(raw); } finally { lib.dwg_free(raw); }
  }
  if (dxf) {
    const { readDxfModel } = await import(path.join(APP, 'dxf-model.js'));
    let text = new TextDecoder('utf-8').decode(b);
    if (text.includes('\ufffd')) text = new TextDecoder('windows-1252').decode(b);
    return readDxfModel(text);
  }
  const { readDwg } = await import(path.join(APP, 'dwg/read.js'));
  return readDwg(b);
}

/** DWG/DXF: the build's reader → dwg-compile.js, the same reader and compiler the browser uses. */
async function readDrawing(bytes, f, rel) {
  const { compileDrawing } = await import(path.join(APP, 'dwg-compile.js'));
  const { equipmentList, equipmentCsv } = await import(path.join(APP, 'dwg-equipment.js'));
  const isDxf = /\.dxf$/i.test(f);
  const tag = isDxf ? '' : new TextDecoder().decode(bytes.subarray(0, 6));
  const parse = parseDrawing;
  const db = await parse(bytes, isDxf);
  // Linked drawings (xrefs): looked for by name next to the drawing, as the browser does in a folder.
  const xrefs = new Map();
  for (const b of (db.blocks || []).filter((r) => r.flags & 4)) {
    const cand = fs.readdirSync(path.dirname(f)).find((n) => n.toLowerCase() === (b.name + '.dwg').toLowerCase());
    if (cand) xrefs.set(b.name.toLowerCase(), await parse(new Uint8Array(fs.readFileSync(path.join(path.dirname(f), cand))), false));
  }
  const d = compileDrawing(db, { versionTag: tag, xrefs });
  const count = (s, k) => [...s.batches.values()].reduce((n, b) => n + b[k].length, 0);
  const sheets = d.spaces.map((s) => `${s.name}${s.kind === 'paper' ? ' (sheet, ' + s.viewports.length + ' viewports)' : ''}: ${count(s, 'lines')} lines, ${count(s, 'fills')} fills, ${count(s, 'texts')} texts`);
  const empty = !d.spaces.some((s) => s.batches.size);
  // A drawing whose every entity is a kind BimCraft's 2D view deliberately lists as "Not drawn yet" (ACIS solids, 0.7 acis;
  // PDF/DWF/DGN underlays, 0.7 cad-bugs) reads correctly and shows that list: not a failure. Anything else drawn as nothing is.
  const NOT_DRAWN_ON_PURPOSE = new Set(['3DSOLID', 'BODY', 'REGION', 'SURFACE', 'PDFUNDERLAY', 'DWFUNDERLAY', 'DGNUNDERLAY']);
  const unsup = Object.entries(d.stats.unsupported || {});
  const onPurpose = empty && d.stats.entities > 0 && unsup.length > 0 && unsup.every(([k]) => NOT_DRAWN_ON_PURPOSE.has(k)) && unsup.reduce((n, [, c]) => n + c, 0) === d.stats.entities;
  if (empty && d.stats.entities > 0 && !onPurpose) throw new Error('nothing to draw from ' + d.stats.entities + ' entities');
  const bad = d.spaces.flatMap((s) => [...s.batches.values()]).some((b) => b.lines.some((l) => l.some((v) => !Number.isFinite(v))));
  if (bad) throw new Error('non-finite coordinates in output');
  // Print view: every batch has a line weight in mm (AutoCAD's table, 0–2.11).
  const lws = new Map();
  for (const s of d.spaces) for (const b of s.batches.values()) {
    if (!(b.lw >= 0 && b.lw <= 2.11)) throw new Error('batch without a valid line weight: ' + b.layer + ' ' + b.lw);
    lws.set(b.lw, (lws.get(b.lw) || 0) + b.lines.length);
  }
  const noPlot = d.layers.filter((l) => l.plot === false).length;

  // Equipment schedule from item tags (KCL-ITEM …): invariants, and the public kitchen fixture checked against the facts
  // bin/test-fixtures.mjs measured (fixtures/facts.json: shelving tagged 5 + 3 is scheduled as 8, item 61 used twice).
  const eq = equipmentList(db, d);
  let equipment = null;
  if (eq) {
    for (const r of eq.rows) if (!r.no || !r.places.length) throw new Error('equipment row without a number or a place');
    const on = eq.rows.filter((r) => r.sheets.length);
    equipment = on.length + ' items on sheets (' + eq.sheets.map((x) => x.name + ' ' + x.count).join(', ') + '), ' + eq.offSheet + ' off sheets, from ' + eq.tags + ' tags';
    if (path.basename(f) === 'kitchen-equipment.dwg' && path.dirname(f) === path.join(ROOT, 'fixtures/dwg')) {
      const F = JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures/facts.json'), 'utf8')).dwg['kitchen-equipment.dwg'].equipment;
      const rows = (no) => on.filter((x) => x.no === no);
      const one = (no) => { const r = rows(no); if (r.length !== 1) throw new Error('fixture: item ' + no + ' on sheets ×' + r.length); return r[0]; };
      if (on.length !== F.onSheets || eq.offSheet !== F.offSheet || eq.tags !== F.tags) throw new Error('fixture: ' + on.length + ' on sheets, ' + eq.offSheet + ' off, ' + eq.tags + ' tags');
      if (eq.sheets.map((x) => x.name + ' ' + x.count).join() !== F.sheets.map((x) => x.name + ' ' + x.count).join()) throw new Error('fixture: sheets ' + eq.sheets.map((x) => x.name + ' ' + x.count));
      if (one('54').qty !== '8' || one('54').category !== 'Shelving, Wire') throw new Error('fixture: item 54 is "' + one('54').qty + ' ' + one('54').category + '"');
      if (rows('61').length !== 2 || !rows('61').every((r) => r.clash)) throw new Error('fixture: item 61 is not marked as used twice');
      if (one('1').elecText !== F.item1[0].elec) throw new Error('fixture: item 1 electrical ' + one('1').elecText);
      if (one('4').plumbText !== 'CW 1/2", HW 1/2", DD 1 1/2"') throw new Error('fixture: item 4 plumbing ' + one('4').plumbText);
      const csv = equipmentCsv([{ ...one('1'), category: '=HYPERLINK("x")', remark: 'a "b", c' }], (k) => k);
      if (!csv.includes(`"'=HYPERLINK(""x"")"`) || !csv.includes('"a ""b"", c"')) throw new Error('fixture: CSV escaping');
      equipment += ' — matches fixtures/facts.json';
    }
  }
  return {
    file: rel, ok: true, kind: 'Drawing', size: (bytes.length / 1048576).toFixed(1) + ' MB',
    release: d.release ? 'AutoCAD ' + d.release + ' (' + tag + ')' : tag || 'DXF', units: d.units || null,
    layers: d.layers.length, entities: d.stats.entities,
    spaces: sheets.join(' | '),
    note: onPurpose ? 'nothing BimCraft draws in 2D: listed as Not drawn yet (' + unsup.map(([k, c]) => k + ' ×' + c).join(', ') + ')' : empty ? 'empty drawing: the file holds no entities (valid, nothing to show)' : null,
    linked: d.xrefs.length ? d.xrefs.map((x) => x.name + (x.loaded ? ' (loaded)' : ' (NOT FOUND)')).join('; ') + (d.stats.xrefEntities ? ' — ' + d.stats.xrefEntities + ' entities drawn from links' : '') : null,
    weights: [...lws].filter(([, n]) => n).sort((x, y) => x[0] - y[0]).map(([w, n]) => w.toFixed(2) + ' mm × ' + n).join(', ') + (noPlot ? ' | ' + noPlot + ' non-printing layers' : ''),
    equipment,
    images: d.images.length ? d.images.map((im) => im.name + ' ×' + im.uses).join(', ') : null,
    notDrawn: Object.entries(d.stats.unsupported).map(([k, v]) => k + ' ' + v).join(', ') || null,
    truncated: d.stats.truncated || null,
  };
}


/** --clipboard: the Edit menu's DOM-free logic (clipboard.js + IfcEditor.placeLike / redo) on the sample models. */
async function clipboardMode() {
  const C = await import(path.join(APP, 'clipboard.js'));
  const L = await import(path.join(APP, 'libitem.js'));
  const { IfcPlacer, PSETS } = await import(path.join(APP, 'ifc-place.js'));
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  const { ids } = await import(path.join(APP, 'ifc-util.js'));
  const TF = TESTFILES;
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const near = (a, b, tol = 0.5) => Math.abs(a - b) <= tol;
  const memStore = (limit = Infinity) => {
    const m = new Map();
    return { m, getItem: (k) => (m.has(k) ? m.get(k) : null), removeItem: (k) => m.delete(k),
      setItem: (k, v) => { v = String(v); if (v.length > limit) { const e = new Error('QuotaExceededError'); e.name = 'QuotaExceededError'; throw e; } m.set(k, v); } };
  };
  const refusing = { getItem: () => { throw new Error('SecurityError'); }, setItem: () => { throw new Error('SecurityError'); }, removeItem: () => { throw new Error('SecurityError'); } };

  // A full library item (as the Library hands it over) from the seed CSV.
  const csv = L.itemsFromCsv(fs.readFileSync(path.join(ROOT, 'tools/library/seed.csv'), 'utf8'));
  const item = { ...L.cleanItem(csv.items[0]), uuid: '11111111-1111-4111-8111-111111111111', version: 1, license: { id: 'CC0-1.0', holder: 'CadCraft', attribution: '', url: '' } };
  const fileItem = L.cleanItem(csv.items[3]);
  const fileSha = await L.itemHash(fileItem);

  console.log('== clipboard.js: clips, storage, validation');
  const row = { id: 501, name: item.name, storey: 39, x: 1200, y: 3400, rot: 90, itemNumber: '7', quantity: 2, notes: 'by the door', library: 'librarycraft', uuid: item.uuid, version: 1, sha256: '', equipment: { Name: item.name, Width: 1828.8, Depth: 762, Height: 863.6 } };
  const clip = C.placementClip(row, { model: 'abc-123', file: 'House.ifc', storeyName: 'Ground floor', storeyElevation: 0, item, meta: { library: 'librarycraft', sha256: '', sourceFile: '' }, box: C.boxFromItem(item), now: '2026-10-11T10:00:00.000Z' });
  ok(clip.kind === 'placement' && clip.key === item.uuid + '@1' && clip.itemNumber === '7' && clip.quantity === 2, 'placementClip: kind, key uuid@version, number and quantity from the placement');
  ok(C.libKey({ uuid: '', sha256: fileSha }) === 'sha:' + fileSha, 'libKey: an item from a file is found by sha:<sha256>');
  const v1 = C.validateClip(JSON.parse(JSON.stringify(clip)));
  ok(v1.ok && v1.clip.item && v1.clip.box && v1.notes.length === 0, 'validateClip accepts it after a JSON round trip, item and box kept');
  const st = memStore();
  ok(C.writeClip(st, clip).stored && JSON.stringify(C.readClip(st)) === JSON.stringify(v1.clip), 'writeClip → readClip ("' + C.CLIP_KEY + '") gives back the same clip');
  const tamper = (label, patch) => {
    const o = JSON.parse(JSON.stringify(clip)); patch(o);
    const s2 = memStore(); s2.setItem(C.CLIP_KEY, JSON.stringify(o));
    ok(C.readClip(s2) === null, 'readClip refuses ' + label);
  };
  tamper('another format', (o) => { o.format = 'modelcraft-clip'; });
  tamper('a newer version', (o) => { o.version = 2; });
  tamper('an unknown kind', (o) => { o.kind = 'wall'; });
  tamper('a coordinate given as text', (o) => { o.x = '1200'; });
  tamper('a coordinate that was NaN (null in JSON)', (o) => { o.y = null; });
  tamper('a coordinate beyond 10^9 mm', (o) => { o.x = 2e9; });
  tamper('a quantity of 0', (o) => { o.quantity = 0; });
  tamper('a fractional element id', (o) => { o.id = 1.5; });
  tamper('a negative storey id', (o) => { o.storey = -4; });
  tamper('a malformed item key', (o) => { o.key = '<script>@1'; });
  tamper('notes over 200 characters', (o) => { o.notes = 'x'.repeat(201); });
  tamper('a model tag with spaces', (o) => { o.model = 'a b'; });
  tamper('a box with no width', (o) => { o.box.x1 = o.box.x0; });
  tamper('meta with a bad sha256', (o) => { o.meta.sha256 = 'zz'; });
  tamper('a bad copiedAt', (o) => { o.copiedAt = 'yesterday'; });
  const s3 = memStore(); s3.setItem(C.CLIP_KEY, '{not json');
  ok(C.readClip(s3) === null && C.readClip(memStore()) === null, 'readClip: broken JSON or nothing stored → null');
  ok(C.readClip(refusing) === null && C.writeClip(refusing, clip).stored === false && C.writeClip(null, clip).stored === false, 'storage that throws (private window) → null / not stored, no exception');
  const badItem = JSON.parse(JSON.stringify(clip)); badItem.item.category = 'foodservice/sinkz';
  const vb = C.validateClip(badItem);
  ok(vb.ok && vb.clip.item === null && /format check/.test(vb.notes[0]), 'an item that fails validateItem is dropped (noted); the clip still works in its own model');
  const otherItem = JSON.parse(JSON.stringify(clip)); otherItem.item.uuid = '22222222-2222-4222-8222-222222222222';
  ok(C.validateClip(otherItem).clip.item === null, 'an item that is not the one the clip names is dropped');
  const big = memStore(JSON.stringify({ ...clip, item: null }).length + 50);
  const w = C.writeClip(big, clip);
  ok(w.stored && w.withoutItem && C.readClip(big).item === null && C.readClip(big).key === clip.key, 'too big for storage: kept without the item (this tab keeps the whole clip)');
  const ec = C.elementClip({ id: 77, name: 'Basic Wall:Generic 200', cls: 'IfcWallStandardCase', guid: '2O2Fr$t4X7Zf8NOew3FLOH' }, { model: 'abc-123', file: 'House.ifc', now: '2026-10-11T10:00:01.000Z' });
  const ve = C.validateClip(JSON.parse(JSON.stringify(ec)));
  ok(ve.ok && ve.clip.kind === 'element' && ve.clip.cls === 'IfcWallStandardCase' && !('x' in ve.clip), 'elementClip: what the element was, no place (Paste says copying building elements is not built)');
  const text = C.elementText({ cls: 'IfcWall', name: 'Wall 1', typeName: 'Generic 200', objectType: '', tag: '123', description: null, guid: 'G1', id: 9,
    sets: [{ name: 'Pset_WallCommon', rows: [{ name: 'IsExternal', value: true }, { name: 'FireRating', value: '' }, { name: 'ThermalTransmittance', value: 0.35 }] }, { name: 'Empty', rows: [{ name: 'X', value: null }] }] });
  ok(text === 'Wall: Wall 1\nType: Generic 200\nTag: 123\nGlobalId: G1\n\nPset_WallCommon\n  IsExternal: Yes\n  ThermalTransmittance: 0.35\n', 'elementText: name, type, tag, GlobalId, then each set with its filled values (Yes/No, no empty rows or sets)');
  // 0.5 WL.3: Copy as CSV — every field, empty ones too; formula-looking values escaped; a Model column for federated models
  const wp = { cls: 'IfcWall', name: 'Wall, "north"', typeName: 'Generic 200', objectType: '', tag: '=SUM(A1)', description: null, guid: '2O2Fr$t4X7Zf8NOew3FLOH', id: 9,
    sets: [{ name: 'Pset_WallCommon', rows: [{ name: 'IsExternal', value: true }, { name: 'FireRating', value: '' }] }, { name: 'Identity Data', rows: [{ name: 'Serial number', value: 'SN-0042' }] }] };
  const crows = C.elementCopyRows(wp);
  ok(crows.length === 11 && crows[0].join('|') === 'Element|Class|Wall' && crows[6].join('|') === 'Element|GlobalId|2O2Fr$t4X7Zf8NOew3FLOH' && crows[9].join('|') === 'Pset_WallCommon|FireRating|' && crows[10].join('|') === 'Identity Data|Serial number|SN-0042', 'elementCopyRows: the element\'s 8 fields, then every set value, empty ones kept');
  const pcsv = C.elementCsv(wp);
  ok(pcsv.startsWith('Group,Property,Value\r\nElement,Class,Wall\r\nElement,Name,"Wall, ""north"""\r\n') && pcsv.includes("Element,Tag,'=SUM(A1)\r\n") && pcsv.includes('Pset_WallCommon,IsExternal,Yes\r\n') && pcsv.endsWith('Identity Data,Serial number,SN-0042\r\n'), 'elementCsv: header, quotes doubled, a formula cell escaped, Yes/No, CRLF');
  ok(C.elementCsv(wp, { file: 'b.ifc' }).startsWith('Model,Group,Property,Value\r\nb.ifc,Element,Class,Wall\r\n'), 'elementCsv with a file: a Model column first (federated models)');
  const b0 = C.boxFromEquipment({ Width: 1828.8, Depth: 762, Height: 863.6 }, 1), bm = C.boxFromEquipment({ Width: 1.8288, Depth: 0.762 }, 1000);
  ok(near(b0.x1 - b0.x0, 1828.8) && b0.y1 === 0 && near(b0.y0, -762) && near(bm.x1, 914.4) && bm.z1 === 900 && C.boxFromEquipment({}, 1) === null, 'boxFromEquipment: back on y = 0, file units → mm, 900 mm stand-in height, null without sizes');
  const g = C.ghostItem({ ...clip, item: null });
  ok(g.body.type === 'box' && near(g.body.w, 1828.8) && near(g.body.d, 762) && C.ghostItem(clip) === item, 'ghostItem: a box from the clip for the ghost and wall snap, or the kept item itself');
  const s0 = C.besideSpot({ ...clip, rot: 0, x: 1000, y: 2000 }), s90 = C.besideSpot({ ...clip, rot: 90, x: 1000, y: 2000 });
  ok(near(s0.x, 1000 + 1828.8 + C.GAP_MM) && near(s0.y, 2000) && near(s90.x, 1000) && near(s90.y, 2000 + 1828.8 + C.GAP_MM) && s90.rot === 90, 'besideSpot: one item width + ' + C.GAP_MM + ' mm along the item\'s own X axis (turned with it)');
  const storeys = [{ id: 10, name: 'Level 0', elevation: 0 }, { id: 11, name: 'Ground floor', elevation: 3000 }, { id: 12, name: 'Roof', elevation: 6000 }];
  ok(C.pickStorey({ ...clip, storey: 12 }, storeys, true).how === 'same' && C.pickStorey({ ...clip, storey: 12 }, storeys, false).id === 11
    && C.pickStorey({ ...clip, storeyName: 'Nope', storeyElevation: 5500 }, storeys, false).id === 12 && C.pickStorey({ ...clip, storeyName: '', storeyElevation: null }, storeys, false).how === 'first'
    && C.pickStorey(clip, [], true) === null, 'pickStorey: same storey in its own model, else same name, else nearest elevation, else the lowest');

  const engine = await quiet(IfcModel.create)(WebIFC, null);
  const engine2 = await quiet(IfcModel.create)(WebIFC, null);
  const api = engine.api;
  for (const f of ['Ifc4_SampleHouse.ifc', 'Ifc2x3_Duplex_Architecture.ifc'].filter(hasSample)) {
    console.log('== Copy, paste, duplicate, undo and redo in ' + f);
    await quiet((b) => engine.load(b))(new Uint8Array(fs.readFileSync(path.join(TF, 'samples', f))));
    const mid = engine.modelID;
    const ed = new IfcEditor(WebIFC, engine);
    const inf = ed.placer().info();
    const storey = inf.storeys[0];
    const a = ed.placeItem(item, { storey: storey.id, x: 1000, y: 1000, rot: 0, itemNumber: '1', quantity: 3, notes: 'by the window' });
    const fileA = ed.placeItem(fileItem, { storey: storey.id, x: 5000, y: 1000, rot: 0, itemNumber: '2', library: 'file', sha256: fileSha, sourceFile: 'seed.csv' });
    const pl = ed.placer();
    const rowA = pl.placements().find((p) => p.id === a.id);
    const theClip = C.placementClip(rowA, { model: 'm1', file: f, storeyName: storey.name, storeyElevation: storey.elevation, box: C.boxFromEquipment(rowA.equipment, pl.unitMm) });
    ok(theClip.box && near(theClip.box.x1 - theClip.box.x0, 1828.8, 1), 'copy: the clip\'s box comes from the placement\'s own Width/Depth (' + Math.round(theClip.box.x1 - theClip.box.x0) + ' mm)');
    // Paste with the pointer, like its source.
    const n0 = ed.changes.length;
    const next = ed.placer().nextItemNumber();
    const b = ed.placeLike(a.id, { storey: storey.id, x: 3000, y: 2000, rot: 90, itemNumber: next, quantity: theClip.quantity, notes: theClip.notes }, { label: theClip.name });
    const rows = ed.placer().placements();
    const rowB = rows.find((p) => p.id === b.id);
    ok(b.id !== a.id && b.typeId === a.typeId && ed.changes.length === n0 + 1 && ed.changes.at(-1).kind === 'place', 'paste: a new element of the same type (same geometry), recorded as one change');
    ok(rowB && rowB.itemNumber === '3' && rowB.quantity === 3 && rowB.notes === 'by the window' && rowB.uuid === item.uuid && rowB.version === 1, 'paste: next free item number (3), quantity and notes from the copy, same library item');
    ok(rowB && near(rowB.x, 3000, 1) && near(rowB.y, 2000, 1) && near(rowB.rot, 90, 0.01) && rowB.storey === storey.id, 'paste: at the clicked 3000, 2000 mm, turned 90°, on ' + storey.name);
    ok(rowB && JSON.stringify(rowB.equipment) === JSON.stringify(rowA.equipment) && rowB.license === rowA.license && rowB.cls === rowA.cls, 'paste: equipment data, license and IFC class copied (' + rowB?.cls + ')');
    const psB = ed.placer().psetsOf(b.id), psA = ed.placer().psetsOf(a.id);
    ok(psB[PSETS.library].id !== psA[PSETS.library].id && psB[PSETS.equipment].id !== psA[PSETS.equipment].id, 'paste: its property sets are its own copies (editing one never changes the other)');
    // Paste in place: beside the original.
    const spot = C.besideSpot({ ...theClip });
    const c2 = ed.placeLike(a.id, { storey: storey.id, ...spot, itemNumber: ed.placer().nextItemNumber(), quantity: 3, notes: '' });
    const rowC = ed.placer().placements().find((p) => p.id === c2.id);
    ok(rowC && near(rowC.x, 1000 + 1828.8 + C.GAP_MM, 1) && near(rowC.y, 1000, 1) && rowC.itemNumber === '4', 'paste in place beside the original: x + width + 100 mm, item 4');
    // A file item (sha key) copies too.
    const fileB = ed.placeLike(fileA.id, { storey: storey.id, x: 6000, y: 4000, rot: 180, itemNumber: '5', quantity: 1, notes: '' });
    const rowFB = ed.placer().placements().find((p) => p.id === fileB.id);
    ok(rowFB && rowFB.sha256 === fileSha && rowFB.library === 'file' && C.libKey(rowFB) === 'sha:' + fileSha && fileB.typeId === fileA.typeId, 'an item from a file (sha key) copies with its library data');
    // Refusals leave nothing behind.
    const wall = ids(api, mid, 'IFCWALL', true)[0] || ids(api, mid, 'IFCWALLSTANDARDCASE')[0];
    const psCount = ids(api, mid, 'IFCPROPERTYSET').length;
    let refused = '';
    try { ed.placeLike(wall, { storey: storey.id, x: 0, y: 0, rot: 0, itemNumber: '9' }); } catch (e) { refused = e.message; }
    ok(/Only placed library items/.test(refused) && ids(api, mid, 'IFCPROPERTYSET').length === psCount, 'placeLike refuses a wall ("' + refused + '") and writes nothing');
    let refused2 = '';
    const lines0 = api.GetMaxExpressID(mid);
    try { ed.placeLike(a.id, { storey: wall, x: 0, y: 0, rot: 0, itemNumber: '9' }); } catch (e) { refused2 = e.message; }
    const leftovers = [];
    for (let id = lines0 + 1; id <= api.GetMaxExpressID(mid); id++) { try { if (api.GetLine(mid, id, false) && !ids(api, mid, 'IFCOWNERHISTORY').includes(id)) leftovers.push(id); } catch (e) { /* gone */ } }
    ok(/storey/.test(refused2) && leftovers.length === 0 && ed.changes.length === n0 + 3, 'a paste onto a non-storey is refused and leaves no lines and no change');
    // Undo and redo.
    const nPl = () => ed.placer().placements().length;
    const before = nPl();
    ed.undo();   // file copy
    ed.undo();   // paste in place
    ok(nPl() === before - 2 && ed.canRedo && ed.undone.length === 2, 'undo takes back two pastes; both can be redone');
    const r1 = ed.redo();
    ok(r1 && r1.kind === 'place' && nPl() === before - 1 && ed.placer().placements().some((p) => p.id === r1.id && near(p.x, 1000 + 1828.8 + C.GAP_MM, 1)), 'redo puts the paste in place back (same place, id ' + r1?.id + ')');
    ed.redo();
    ok(nPl() === before && !ed.canRedo, 'redo again: the file item copy is back; nothing left to redo');
    // Chain: undo the paste AND its source, redo both — the paste follows its source's new id.
    for (let i = 0; i < 5; i++) ed.undo();
    ok(!ed.placer().placements().some((p) => p.id === a.id), 'undo back past the first placement: the source is gone too');
    ed.redo(); ed.redo();   // item 1 (new id), item 2
    const redoneA = ed.now(a.id);
    const r3 = ed.redo();   // the paste of item 1
    const rowR3 = ed.placer().placements().find((p) => p.id === r3.id);
    ok(redoneA !== a.id && rowR3 && rowR3.itemNumber === '3' && near(rowR3.x, 3000, 1) && r3.journal.created.length > 0, 'redo of a paste whose source was placed again follows the new id (' + a.id + ' → ' + redoneA + ')');
    // A new change clears redo (two pastes are still waiting to be redone here).
    ok(ed.canRedo && ed.undone.length === 2, 'two more pastes could still be redone');
    ed.setAttribute(redoneA, 'Name', 'Renamed table');
    ok(!ed.canRedo, 'a new change clears what could be redone');
    ed.undo();
    ok(api.GetLine(mid, redoneA, false).Name?.value === item.name && ed.canRedo, 'undo of a name change writes the old name back');
    ed.redo();
    ok(api.GetLine(mid, redoneA, false).Name?.value === 'Renamed table', 'redo of a name change writes the new name again');
    // Duplicate = copy + paste: and save → reopen.
    const dupe = ed.placeLike(redoneA, { storey: storey.id, x: 1000, y: 5000, rot: 0, itemNumber: ed.placer().nextItemNumber(), quantity: 1, notes: '' });
    const bytes = ed.save();
    const re = await quiet((x) => engine2.load(x))(bytes);
    const back = new IfcPlacer(WebIFC, engine2.api, engine2.modelID).placements();
    const geomIds = new Set(); for (const bb of re.batches) for (const t of bb.triIds) geomIds.add(t);
    ok(back.length === 4 && back.map((p) => p.itemNumber).join() === '1,2,3,4' && geomIds.has(dupe.id) && geomIds.has(r3.id), 'saved and reopened: items 1–4, the pasted ones with geometry');
    // Paste into ANOTHER model from the kept item (the clip went through storage and back).
    const kept = C.placementClip(rowA, { model: 'm1', file: f, storeyName: storey.name, storeyElevation: storey.elevation, item, meta: { library: 'librarycraft', sha256: '', sourceFile: '' }, box: C.boxFromItem(item) });
    const s4 = memStore(); C.writeClip(s4, kept);
    const back4 = C.readClip(s4);
    const other = f === 'Ifc4_SampleHouse.ifc' ? 'Ifc2x3_Duplex_Architecture.ifc' : 'Ifc4_SampleHouse.ifc';
    await quiet((x) => engine2.load(x))(new Uint8Array(fs.readFileSync(path.join(TF, 'samples', other))));
    const ed2 = new IfcEditor(WebIFC, engine2);
    const inf2 = ed2.placer().info();
    const pick = C.pickStorey(back4, inf2.storeys, false);
    const x = ed2.placeItem(back4.item, { storey: pick.id, x: back4.x, y: back4.y, rot: back4.rot, itemNumber: ed2.placer().nextItemNumber(), quantity: back4.quantity, notes: back4.notes, library: back4.meta.library });
    const rowX = ed2.placer().placements().find((p) => p.id === x.id);
    ok(rowX && rowX.uuid === item.uuid && near(rowX.x, 1000, 1) && rowX.itemNumber === '1' && rowX.quantity === 3, 'paste in place into ' + other + ' from the stored clip\'s item: same X, Y, quantity 3, item 1 there (storey by ' + pick.how + ')');
  }
  console.log(`\n${good} passed, ${bad} failed`);
  return bad ? 1 : 0;
}


/** --drop: a part dragged here from PartCraft (0.8 EG.78, studio_PART_2): the library item PartCraft builds is checked, placed and
 *  scheduled by BimCraft's own code; the handlers drive the placement mode; ModelCraft's OBJ reader takes the other form. */
async function dropMode() {
  const L = await import(path.join(APP, 'libitem.js'));
  const D = await import(path.join(APP, 'drop-item.js'));
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  const PC = path.join(ROOT, 'public_html/assets/apps/partcraft', BUILD);
  const MC = path.join(ROOT, 'public_html/assets/apps/modelcraft', BUILD);
  const PI = await import(path.join(PC, 'part-item.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  // a 300 × 200 × 400 mm block in PartCraft's own space (Y up, millimetres)
  const box = (w, h, d) => ({ positions: [0, 0, 0, w, 0, 0, w, h, 0, 0, h, 0, 0, 0, d, w, 0, d, w, h, d, 0, h, d], indices: [0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 3, 7, 6, 3, 6, 2, 0, 4, 7, 0, 7, 3, 1, 2, 6, 1, 6, 5] });
  const mesh = box(300, 400, 200), part = { name: 'Pump P-101', partNumber: 'P-101' };
  console.log('== PartCraft builds the forms');
  const f = PI.dragForms(part, mesh);
  ok(f.name === 'Pump P-101' && f.files.map((x) => x.kind).join() === 'item,mesh' && f.meta.partNumber === 'P-101', 'two forms: a library item and an OBJ, with the part number as meta');
  const text = await f.files[0].file.text();
  const got = await D.itemFromText(text, L);
  ok(got.item && got.item.name === 'Pump P-101' && got.item.model === 'P-101' && got.item.body.type === 'mesh', 'BimCraft\'s libitem.js accepts the item (cleanItem + validateItem)');
  const b = got.item.body;
  let minZ = Infinity, maxZ = -Infinity; for (let i = 2; i < b.positions.length; i += 3) { minZ = Math.min(minZ, b.positions[i]); maxZ = Math.max(maxZ, b.positions[i]); }
  ok(minZ === 0 && Math.abs(maxZ - 400) < 0.01 && got.item.params.width === 300 && got.item.params.depth === 200 && got.item.params.height === 400, 'Z up, standing on 0, 300 wide × 200 deep × 400 high (PartCraft\'s Y up turned)');
  ok((await D.itemFromText('not json', L)).error === 'json' && (await D.itemFromText('{"format":"x"}', L)).error === 'invalid' && (await D.itemFromText(JSON.stringify({ ...JSON.parse(text), category: 'nope/nope' }), L)).error === 'invalid', 'junk, a foreign format and a bad category are refused');
  let threw = false; try { PI.partItem(part, { positions: [], indices: [] }); } catch { threw = true; }
  ok(threw, 'no solid → an error, not an empty item');

  console.log('== BimCraft places it and schedules it');
  const engine = await quiet(IfcModel.create)(WebIFC, null);
  await quiet((x) => engine.load(x))(await fixtureBytes());
  const ed = new IfcEditor(WebIFC, engine);
  const pl = ed.placer(), info = pl.info();
  const no = pl.nextItemNumber();
  const r = ed.placeItem(got.item, { storey: info.storeys[0].id, x: 2000, y: 1500, rot: 0, itemNumber: no, quantity: 1, library: 'file', sha256: await L.itemHash(got.item), sourceFile: 'PartCraft: Pump P-101' });
  const sched = ed.placer().schedule();
  const list = Array.isArray(sched) ? sched : sched.rows || sched.list || [];
  const row = list.find((x) => /Pump P-101/.test(x.category || '') && String(x.no) === String(no));
  ok(r && r.id && row && row.model === 'P-101' && row.qty === '1', 'placed on the first storey and a row in the equipment schedule (item ' + no + ', model P-101)');
  const back = ed.placer().placements().find((x) => x.id === r.id);
  ok(back && back.name === 'Pump P-101' && Math.abs(back.x - 2000) < 1 && Math.abs(back.y - 1500) < 1 && String(back.itemNumber) === String(no) && /PartCraft/.test(back.sourceFile || ''), 'read back: name, place, item number, and where it came from');
  ed.undo();
  ok(!ed.placer().placements().some((x) => x.id === r.id), 'one undo takes it out again');

  console.log('== the drop handler drives the placement mode');
  const calls = [];
  const viewer = { placeY: 7, placing: { move: () => {}, click: (pt) => calls.push(['click', pt]) }, planePoint: (cx, cy, y) => ({ x: cx, y, z: cy }) };
  const mk = (over = {}) => D.dropHandlers({ L, startPlacing: (e) => calls.push(['start', e]), viewer, status: () => {}, t: (k, v) => k + (v ? JSON.stringify(v) : ''), ready: () => null, ...over });
  const file = f.files[0].file;
  const msg = await mk().item({ file, point: { clientX: 120, clientY: 80 }, name: 'Pump P-101', from: 'PartCraft' });
  ok(calls[0][0] === 'start' && calls[0][1].item.name === 'Pump P-101' && calls[0][1].meta.library === 'file' && /^[0-9a-f]{64}$/.test(calls[0][1].meta.sha256) && /PartCraft/.test(calls[0][1].meta.sourceFile), 'a drop enters placement mode with the item and where it came from');
  ok(calls[1][0] === 'click' && calls[1][1].x === 120 && calls[1][1].y === 7 && /drop\.item\.dropped/.test(msg), 'and clicks at the drop point on the storey plane');
  calls.length = 0;
  const msg2 = await mk().item({ file, point: null, name: 'Pump P-101', from: 'PartCraft' });
  ok(calls.length === 1 && calls[0][0] === 'start' && /drop\.item\.click/.test(msg2), 'from the shelf\'s button there is no point: the ghost follows the pointer');
  let why = ''; try { await mk({ ready: () => 'Open an IFC model' }).item({ file, point: null }); } catch (e) { why = e.message; }
  ok(why === 'Open an IFC model', 'no model open → the reason, not a placement');
  why = ''; try { await mk().item({ file: new File(['{'], 'x.json'), point: null }); } catch (e) { why = e.message; }
  ok(/drop\.item\.json/.test(why), 'a broken file → the reason');

  console.log('== ModelCraft takes the OBJ form');
  const objText = await f.files[1].file.text();
  ok(/^v /m.test(objText) && objText.split('\n').filter((l) => l.startsWith('f ')).length === 12 && /0\.300000 0\.400000 0\.200000/.test(objText), 'OBJ: metres (300 mm = 0.3), 8 vertices, 12 faces');
  try {
    const { readObj } = await import(path.join(MC, 'io/obj.js'));
    const obj = await readObj(new TextEncoder().encode(objText), { resolve: async () => null });
    const n = JSON.stringify(obj).length;
    ok(n > 100, "ModelCraft's own OBJ reader parses it (" + Object.keys(obj).join(',') + ')');
  } catch (e) { ok(false, "ModelCraft's OBJ reader: " + e.message); }
  console.log('\n' + good + ' passed, ' + bad + ' failed');
  return bad ? 1 : 0;
}

/** --library: docs/LIBRARY-SPEC.md §7 B. */
async function libraryMode() {
  const { execFileSync } = await import('node:child_process');
  const os = await import('node:os');
  const L = await import(path.join(APP, 'libitem.js'));
  const { itemsFromIfc } = await import(path.join(APP, 'libitem-ifc.js'));
  const { IfcPlacer, snapToWall, PSETS, classesFor } = await import(path.join(APP, 'ifc-place.js'));
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  const { readRevit } = await import(path.join(APP, 'rvt-reader.js'));
  const TF = TESTFILES;
  const KITCHEN = path.join(ROOT, 'fixtures/dwg/kitchen-equipment.dwg');   // public fixture (fixtures/README.md)
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const near = (a, b, tol = 0.5) => Math.abs(a - b) <= tol;
  const valid = (it) => L.validateItem(L.cleanItem(it), { partial: true });

  console.log('== validateItem / itemHash');
  const { BUILTIN_SYMBOLS } = await import(path.join(APP, 'library-symbols.js'));
  ok(BUILTIN_SYMBOLS.length >= 2 && BUILTIN_SYMBOLS.every((i) => i.category === 'symbols/plumbing' && valid(i).ok), 'built-in plumbing symbols are valid library items');
  const csv = L.itemsFromCsv(fs.readFileSync(path.join(ROOT, 'tools/library/seed.csv'), 'utf8'));
  const table = csv.items[0];
  ok(csv.items.length === 6 && csv.items.every((i) => valid(i).ok), 'seed.csv: 6 generic items, all valid');
  ok(near(table.body.w, 1828.8) && near(table.body.d, 762) && near(table.body.h, 863.6) && table.body.y === -762 && near(table.body.x, -914.4), 'work table 72 × 30 × 34 in → mm, back on y = 0, centred in x');
  ok(csv.items.every((i) => !i.maker && !i.model && /^Generic /.test(i.name)), 'seed items: generic names, no maker or model');
  const full = { ...L.cleanItem(table), uuid: '6f1c2a3b-1d2e-4f50-8a9b-0c1d2e3f4a5b', version: 1, license: { id: 'CC0-1.0', holder: 'CadCraft', attribution: '', url: '' } };
  ok(L.validateItem(full).ok, 'a full item (uuid, version, license) validates');
  ok(!L.validateItem(L.cleanItem(table)).ok, 'without uuid/version/license only partial mode accepts it');
  const rej = (label, patch) => { const o = JSON.parse(JSON.stringify(full)); patch(o); const r = L.validateItem(o); ok(!r.ok, 'rejects ' + label + (r.ok ? '' : ' (' + r.errors[0] + ')')); };
  rej('a category outside the taxonomy', (o) => { o.category = 'foodservice/sinkz'; });
  rej('a license outside the list', (o) => { o.license.id = 'CC-BY-NC-4.0'; });
  rej('format_version 2', (o) => { o.format_version = 2; });
  rej('an unknown top-level key', (o) => { o.extra = 1; });
  rej('an unknown params key', (o) => { o.params.colour = 'red'; });
  rej('a number over 10^7 mm', (o) => { o.body.w = 2e7; });
  rej('a non-finite number', (o) => { o.plan.entities[0].pts[0][0] = NaN; });
  rej('text over 500 characters', (o) => { o.description = 'x'.repeat(501); });
  rej('a mesh index out of range', (o) => { o.body = { type: 'mesh', positions: [0, 0, 0, 1, 0, 0, 0, 1, 0], indices: [0, 1, 3] }; });
  rej('more than 200 000 triangles', (o) => { o.body = { type: 'mesh', positions: [0, 0, 0, 1, 0, 0, 0, 1, 0], indices: new Array(600003).fill(0) }; });
  rej('more than 50 000 plan entities', (o) => { o.plan.entities = new Array(50001).fill({ type: 'point', layer: '0', color: null, x: 0, y: 0 }); });
  rej('a bad plan entity type', (o) => { o.plan.entities.push({ type: 'spline', layer: '0', color: null }); });
  rej('a pattern hatch', (o) => { o.plan.entities.push({ type: 'hatch', layer: '0', color: null, loops: [[0, 0, 1, 0, 1, 1]], solid: false }); });
  ok(L.validateItem({ ...full, source_attrs: { 'ANY-NAME': 'kept verbatim' } }).ok, 'any key is fine under source_attrs');
  const h1 = await L.itemHash(full), h2 = await L.itemHash({ provenance: { sha256: 'x' }, ...Object.fromEntries(Object.entries(full).reverse()) });
  ok(/^[0-9a-f]{64}$/.test(h1) && h1 === h2, 'itemHash: hex sha256, independent of key order and provenance');
  ok(h1 !== await L.itemHash({ ...full, name: 'Other' }), 'itemHash changes with the content');
  // 0.5: without crypto.subtle (a page on plain http, Studio Live's browser joiners) the plain-JS SHA-256 gives the same hash
  const subtleDesc = Object.getOwnPropertyDescriptor(globalThis.crypto, 'subtle') || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(globalThis.crypto), 'subtle');
  Object.defineProperty(globalThis.crypto, 'subtle', { value: undefined, configurable: true });
  const h3 = await L.itemHash(full);
  delete globalThis.crypto.subtle;
  if (!globalThis.crypto.subtle && subtleDesc) Object.defineProperty(globalThis.crypto, 'subtle', subtleDesc);
  const { createHash } = await import('node:crypto');
  const shaOk = [0, 1, 55, 56, 64, 119, 100000].every((n) => { const b = new Uint8Array(n).map((_, i) => (i * 31 + 7) & 255); return Buffer.from(L.sha256(b)).toString('hex') === createHash('sha256').update(b).digest('hex'); });
  ok(h3 === h1 && shaOk && !!globalThis.crypto.subtle, 'itemHash without crypto.subtle: the same hash (plain-JS SHA-256 checked against Node\'s at the padding edges 0, 55, 56, 64, 119 bytes and 100 kB)');

  console.log('== Adapters');
  // The public kitchen fixture: KCL blocks, params from the item tags, inches → mm (fixtures/facts.json).
  const db = await parseDrawing(new Uint8Array(fs.readFileSync(KITCHEN)), false);   // the build's dwg/read.js (cc-dwg)
  const dw = L.itemsFromDwg(db, { fileName: 'kitchen-equipment.dwg' });
  const kcl = dw.items.filter((i) => Object.keys(i.source_attrs).some((k) => /^KCL-/.test(k)) && i.maker);
  ok(dw.candidates.length === 163 && dw.items.length === 163 && dw.items.every((i) => valid(i).ok), `kitchen fixture: ${dw.candidates.length} blocks listed, ${dw.items.length} items, all valid`);
  ok(kcl.length === 51, `${kcl.length} equipment blocks carry KCL data from their item tags`);
  const hw = dw.items.find((i) => i._key === 'hw-dropin-2');
  ok(hw && hw.name === 'Drop-In, Hot Wells' && hw.maker === 'Example Foodservice Co.' && hw.model === 'HW-2E', 'HW-DROPIN-2: name, maker, model from its tag');
  ok(hw && near(hw.params.width, 774.7) && near(hw.params.depth, 577.85) && hw.params.plumb?.id === '(2) 1"', 'HW-DROPIN-2: 30.5 × 22.75 in → mm (INSUNITS inches), plumbing ID (2) 1"');
  ok(hw && !('KCL-ITEM' in hw.source_attrs) && !('KCL-QTY' in hw.source_attrs) && hw.source_attrs['KCL-FILENAME'] === 'HW-DROPIN-2', 'item number and quantity stay out of the item; other attributes verbatim');
  const pb = L.planBounds(hw.plan);
  ok(pb && near(pb.maxY, 0, 0.01) && near(pb.minY, -577.85), 'HW-DROPIN-2 plan: back on y = 0, front toward −Y');
  const prep = dw.items.find((i) => i._key === 'toaster-conv');
  ok(prep && prep.params.elec?.volts === '120' && prep.params.elec?.nema === '5-15P' && prep.params.elec?.plug === 'yes', 'TOASTER-CONV: electrical decoded (120 V, NEMA 5-15P, cord and plug)');
  ok(dw.items.filter((i) => i.body?.type === 'mesh').length === 4, 'the 4 blocks with 3D faces get a mesh body');
  const tagBlock = dw.items.find((i) => i._key === 'itemtag-rect');
  ok(tagBlock && tagBlock.name === 'ITEMTAG-RECT' && !tagBlock.maker && !Object.keys(tagBlock.source_attrs).length, 'item-tag blocks (KCL-ITEM) carry no placement data into an item');
  const listed = L.itemsFromDwg(db, { list: true });
  ok(listed.items.length === 0 && listed.candidates.find((c) => c.key === 'hw-dropin-2')?.attrs['KCL-MODEL'] === 'HW-2E', 'list mode: candidates with attributes, no items');
  ok(L.itemsFromDwg(db, { units: 'mm', blocks: ['HW-DROPIN-2'] }).items[0].params.width === 30.5, '--units overrides the drawing units');

  // IFC types → items.
  const engine = await quiet(IfcModel.create)(WebIFC, null);
  const api = engine.api;
  for (const [f, want] of [['Ifc4_SampleHouse.ifc', 17], ['Ifc2x3_Duplex_Architecture.ifc', 25]].filter(([n]) => hasSample(n))) {
    const mid = api.OpenModel(new Uint8Array(fs.readFileSync(path.join(TF, 'samples', f))), { COORDINATE_TO_ORIGIN: false });
    const r = await quiet(() => itemsFromIfc(api, mid))();
    ok(r.items.length === want && r.items.every((i) => valid(i).ok && i.body?.type === 'mesh'), `${f}: ${r.items.length} types → items with mesh bodies, all valid`);
    if (f.startsWith('Ifc4')) {
      const desk = r.items.find((i) => i.name === '1525x762mm');
      ok(desk && near(desk.params.height, 762, 1) && desk.params.width > 1500 && desk.params.width < 1600, 'IFC4 desk type: body in mm around its own placement (' + Math.round(desk?.params.width) + ' × ' + Math.round(desk?.params.depth) + ' × ' + Math.round(desk?.params.height) + ')');
    } else ok(r.items.some((i) => near(i.params.height, 2000, 1) && near(i.params.width, 800, 1)), 'IFC2X3 tall cabinet type: 800 wide, 2000 tall (metre file → mm)');
    api.CloseModel(mid);
  }

  // glTF (generated GLB, Y up) and OBJ.
  const cube = { positions: [0, 0, 0, 1, 0, 0, 1, 0, 0.5, 0, 0, 0.5, 0, 2, 0, 1, 2, 0, 1, 2, 0.5, 0, 2, 0.5], indices: [0, 1, 2, 0, 2, 3, 4, 6, 5, 4, 7, 6, 0, 4, 5, 0, 5, 1, 1, 5, 6, 1, 6, 2, 2, 6, 7, 2, 7, 3, 3, 7, 4, 3, 4, 0] };
  const glb = makeGlb(cube);
  const g = L.itemFromMesh(glb, 'glb', {});
  const gi = g.items[0];
  ok(gi && valid(gi).ok && near(gi.params.width, 1000) && near(gi.params.depth, 500) && near(gi.params.height, 2000), 'glTF (GLB, meters, Y up) → 1000 × 500 × 2000 mm, Z up');
  ok(gi && gi.body.indices.length === 36 && gi.plan.entities[0]?.type === 'poly', 'glTF: 12 triangles, hull outline as the plan');
  const obj = 'o box\n' + Array.from({ length: 8 }, (_, i) => 'v ' + cube.positions.slice(i * 3, i * 3 + 3).join(' ')).join('\n') + '\n' + Array.from({ length: 12 }, (_, i) => 'f ' + cube.indices.slice(i * 3, i * 3 + 3).map((k) => k + 1).join(' ')).join('\n');
  const o = L.itemFromMesh(new TextEncoder().encode(obj), 'obj', { units: 'm', upAxis: 'z' });
  ok(o.items[0] && near(o.items[0].params.height, 500) && near(o.items[0].params.depth, 2000), 'OBJ (meters, Z up as asked) → 1000 × 2000 × 500 mm');
  ok(L.itemFromMesh(new TextEncoder().encode(obj), 'obj', {}).notes.some((n) => /no units/.test(n)), 'OBJ without units: says it read millimeters');

  // RFA: PartAtom only.
  for (const f of ['MassWithBoxAndCone.rfa', 'empty.rfa'].filter(hasSample)) {
    const info = await readRevit(new Uint8Array(fs.readFileSync(path.join(TF, 'samples', f))), f);
    const r = L.itemFromRfa(info);
    ok(r.items.length === 1 && valid(r.items[0]).ok && r.items[0].body === null && r.notes.some((n) => /Geometry not read/.test(n)), f + ': title "' + r.items[0]?.name + '", no geometry (no size parameters), with a note');
  }
  const fake = { family: { title: 'Prep table', categories: ['Specialty Equipment'], groups: [{ title: 'Dimensions', params: [{ name: 'Width', value: "6' - 0\"" }, { name: 'Depth', value: '2\' - 6"' }, { name: 'Height', value: '914.4 mm' }] }] } };
  const fr = L.itemFromRfa(fake);
  ok(fr.items[0].body?.type === 'box' && near(fr.items[0].body.w, 1828.8) && near(fr.items[0].body.h, 914.4) && fr.notes.some((n) => /a box stands in/.test(n)), 'RFA with Width/Depth/Height → a box stands in, with the note');
  const csvBad = L.itemsFromCsv('name,width,depth\nNo units,30,24\n');
  ok(csvBad.items.length === 0 && csvBad.notes.some((n) => /no units/.test(n)), 'CSV: a length without units is refused with a note, not guessed');

  console.log('== Placing in IFC');
  const engine2 = await quiet(IfcModel.create)(WebIFC, null);
  const items = [csv.items[0], csv.items[3], { ...hw, body: null }].map((it, i) => ({ ...L.cleanItem(it), uuid: ['11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222222', '33333333-3333-4333-8333-333333333333'][i], version: 1, license: { id: 'CC0-1.0', holder: 'CadCraft', attribution: '"' + it.name + '" by CadCraft, CC0 1.0', url: '' } }));
  for (const f of ['Ifc4_SampleHouse.ifc', 'Ifc2x3_Duplex_Architecture.ifc'].filter(hasSample)) {
    console.log('-- ' + f);
    const model = await quiet((b) => engine.load(b))(new Uint8Array(fs.readFileSync(path.join(TF, 'samples', f))));
    const ed = new IfcEditor(WebIFC, engine);
    const pl = ed.placer();
    const inf = pl.info();
    const storey = inf.storeys[0];
    const C = api.GetCoordinationMatrix(engine.modelID);
    const placed = [];
    const t0 = Date.now();
    placed.push(ed.placeItem(items[0], { storey: storey.id, x: 1000, y: 1000, rot: 0, itemNumber: pl.nextItemNumber(), quantity: 1, notes: 'by the window' }));
    placed.push(ed.placeItem(items[0], { storey: storey.id, x: 3000, y: 1000, rot: 90, itemNumber: ed.placer().nextItemNumber(), quantity: 2 }));
    placed.push(ed.placeItem(items[1], { storey: storey.id, x: 1000, y: 3000, rot: 180, itemNumber: '3' }));
    placed.push(ed.placeItem(items[2], { storey: storey.id, x: 4000, y: 3000, rot: 45, itemNumber: '4', standInHeight: 900 }));
    ok(placed[0].typeId === placed[1].typeId && placed[0].typeId !== placed[2].typeId, 'the same item twice shares one type; another item gets its own');
    ok(placed.map((p) => ed.changes.find((c) => c.id === p.id)).every(Boolean) && ed.changes.length === 4, '4 placements recorded as 4 changes (' + (Date.now() - t0) + ' ms)');
    // Undo the last one, then place it again.
    const lastId = placed[3].id;
    ed.undo();
    let gone = false; try { gone = !api.GetLine(engine.modelID, lastId, false); } catch (e) { gone = true; }
    ok(gone && ed.changes.length === 3, 'undo removes the last placement');
    placed[3] = ed.placeItem(items[2], { storey: storey.id, x: 4000, y: 3000, rot: 45, itemNumber: '4', standInHeight: 900 });

    // Swap item 3 to the work table, then "update" item 1 to a version 2 — numbers stay.
    const clsOf = (id) => String(api.GetLine(engine.modelID, id, false).constructor?.name || '').toUpperCase();
    const sink = { ...items[0], uuid: '44444444-4444-4444-8444-444444444444', name: 'Sink', category: 'plumbing/sinks', ifc: { ...(items[0].ifc || {}), class: 'IfcSanitaryTerminal' } };
    const was3 = clsOf(placed[2].id), sinkCls = classesFor(sink, inf.schema).occ, want3 = classesFor(items[0], inf.schema).occ;
    const sw = ed.swapItem(placed[2].id, sink, {});
    ok(was3 !== sinkCls && sw.classChanged?.to.toUpperCase() === sinkCls && /^Ifc[A-Z]/.test(sw.classChanged.from) && clsOf(placed[2].id) === sinkCls, 'B11: swapped for a sink, the class changes ' + was3 + ' → ' + clsOf(placed[2].id) + ', same express ID #' + placed[2].id);
    ed.undo();
    ok(clsOf(placed[2].id) === was3, 'B11: undo brings the old class back (' + clsOf(placed[2].id) + ')');
    ed.redo();
    ok(clsOf(placed[2].id) === sinkCls, 'B11: redo changes it again');
    ed.swapItem(placed[2].id, items[0], {});
    ok(clsOf(placed[2].id) === want3, 'B11: swapped on to the work table: ' + want3);
    const v2 = { ...items[0], version: 2, name: items[0].name + ' (v2)', body: { ...items[0].body, h: 900 } };
    ed.swapItem(placed[0].id, v2, {}, { what: 'update' });
    const bytes = ed.save();
    const src = new TextDecoder().decode(bytes);
    ok(this_schema(src) === inf.schema, 'saved as ' + inf.schema);
    ok(inf.schema === 'IFC2X3' ? /IFCFACETEDBREP\(/.test(src) && !/IFCTRIANGULATEDFACESET\(/.test(src) : /IFCTRIANGULATEDFACESET\(/.test(src), inf.schema === 'IFC2X3' ? 'IFC2X3 body: IfcFacetedBrep (no IFC4 entities)' : 'IFC4 body: IfcTriangulatedFaceSet');
    ok(/IFCGEOMETRICCURVESET\(/.test(src) && /'FootPrint'/.test(src) && /IFCMAPPEDITEM\(/.test(src), 'FootPrint curve set and mapped items written');

    // Reopen in a second engine.
    const re = await quiet((b) => engine2.load(b))(bytes);
    const geomIds = new Set(); for (const b of re.batches) for (const t of b.triIds) geomIds.add(t);
    ok(placed.every((p) => geomIds.has(p.id)), 'reopened: all 4 placements have geometry');
    ok(re.elements === model.elements + 4, `reopened: ${model.elements} + 4 elements`);
    const sp = await engine2.spatial();
    ok(placed.every((p) => sp.storeyOf.get(p.id) === storey.id), 'every placement is on the chosen storey (' + storey.name + ')');
    const pl2 = new IfcPlacer(WebIFC, engine2.api, engine2.modelID);
    const back = pl2.placements();
    const byId = new Map(back.map((p) => [p.id, p]));
    ok(back.length === 4, '4 placements read back from their psets');
    const p0 = byId.get(placed[0].id), p2 = byId.get(placed[2].id);
    ok(p0 && p0.itemNumber === '1' && p0.notes === 'by the window' && p0.version === 2, 'update kept ItemNumber 1 and its notes, now version 2');
    ok(p2 && p2.itemNumber === '3' && p2.uuid === items[0].uuid, 'swap kept ItemNumber 3 and points at the new item');
    ok(String(engine2.api.GetLine(engine2.modelID, placed[2].id, false).constructor?.name || '').toUpperCase() === want3 && sp.storeyOf.get(placed[2].id) === storey.id, 'B11: reopened, the swapped placement is a ' + want3 + ', still on its storey, with its type and psets');
    ok(byId.get(placed[1].id)?.quantity === 2 && near(byId.get(placed[1].id).x, 3000, 1) && near(byId.get(placed[1].id).y, 1000 + 0, 1) && near(byId.get(placed[1].id).rot, 90, 0.01), 'placement 2: quantity 2, at 3000, 1000 mm, rotated 90°');
    const props = await quiet((x) => engine2.properties(x))(placed[0].id);
    const setNames = props.sets.map((s) => s.name);
    ok([PSETS.placement, PSETS.library, PSETS.equipment].every((n) => setNames.includes(n)) && setNames.some((n) => n === PSETS.library + ' (type)'), 'psets on the element: ' + setNames.filter((n) => /CadCraft/.test(n)).join(', '));
    const hwProps = await quiet((x) => engine2.properties(x))(placed[3].id);
    ok(hwProps.sets.some((s) => s.name === PSETS.source && s.rows.some((r) => r.name === 'KCL-MODEL' && r.value === 'HW-2E')), 'CadCraft_SourceAttributes carries the KCL attributes verbatim');
    const types = pl2.libraryTypes();
    const typeOfOcc = pl2.relTypeOf();
    ok(typeOfOcc.get(placed[1].id).type === typeOfOcc.get(placed[2].id).type && types.size === 5, 'one shared type per item@version (' + types.size + ' library types: table v1, v2, refrigerator, hot well, and the sink B11 swapped through — unused types stay)');
    const sched = pl2.schedule();
    ok(sched && sched.rows.length === 4 && sched.rows.map((r) => r.no).join() === '1,2,3,4' && sched.rows.find((r) => r.no === '2').qty === '2', 'IFC equipment schedule: items 1–4, quantities from the placements');
    ok(sched.rows.find((r) => r.no === '4').mfr === 'Example Foodservice Co.' && sched.rows.find((r) => r.no === '4').plumbText === 'ID (2) 1"' && sched.sheets[0].name === storey.name, 'schedule rows: maker, plumbing, storey as the sheet');
    const { equipmentCsv } = await import(path.join(APP, 'dwg-equipment.js'));
    ok(equipmentCsv(sched.rows, (k) => k).split('\r\n').length === 6, 'same CSV as the DWG schedule');
    // Walls: snap the back of an item to the nearest wall.
    const faces = pl2.wallFaces();
    if (faces.length) {
      const f = faces[0], mid = [(f.a[0] + f.b[0]) / 2 + f.n[0] * 500, (f.a[1] + f.b[1]) / 2 + f.n[1] * 500];
      const s = snapToWall(mid, items[0], faces);
      const back = [s.x, s.y], sf = s.face;
      const onFace = Math.abs((back[0] - sf.a[0]) * sf.n[0] + (back[1] - sf.a[1]) * sf.n[1]) < 1 && s.distance <= 500.5;
      const front = [Math.sin(s.rot * Math.PI / 180), -Math.cos(s.rot * Math.PI / 180)];   // item −Y rotated
      ok(s && onFace && front[0] * sf.n[0] + front[1] * sf.n[1] > 0.99, `wall snap: ${faces.length} wall faces; back on the face, front facing the room (rot ${s.rot}°)`);
    } else ok(false, 'wall faces found');
    void C;
  }

  console.log('== tools/library/convert.mjs');
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-lib-'));
  const conv = path.join(ROOT, 'tools/library/convert.mjs');
  const run = (...a) => { try { return { code: 0, json: JSON.parse(execFileSync(process.execPath, ['--max-old-space-size=1024', conv, ...a], { encoding: 'utf8' })) }; } catch (e) { return { code: e.status, json: JSON.parse(e.stdout || '{}') }; } };
  const ls = run(KITCHEN, out, '--list');
  ok(ls.code === 0 && ls.json.ok && ls.json.kind === 'dwg' && ls.json.candidates.length === 163 && ls.json.candidates.every((c) => c.key && c.name && typeof c.entities === 'number' && typeof c.has_body === 'boolean' && c.attrs), `--list on the kitchen fixture: ${ls.json.candidates?.length} candidates {key, name, entities, attrs, has_body}`);
  ok(fs.readdirSync(out).length === 0, '--list writes nothing');
  const cv = run(KITCHEN, out, '--block', 'HW-DROPIN-2', '--block', 'TOASTER-CONV');
  ok(cv.code === 0 && cv.json.ok && cv.json.items.length === 2 && cv.json.items.every((i) => i.path.startsWith(out + '/') && fs.existsSync(i.path)), 'convert --block ×2: 2 items written inside the out dir');
  const written = JSON.parse(fs.readFileSync(cv.json.items[0].path, 'utf8'));
  ok(L.validateItem(written, { partial: true }).ok && !('uuid' in written) && !('license' in written) && !('provenance' in written), 'item.json validates and leaves uuid/version/license/provenance to the server');
  const svg = fs.readFileSync(path.join(path.dirname(cv.json.items[0].path), 'preview.svg'), 'utf8');
  ok(/^<svg[^>]+viewBox=/.test(svg) && /vector-effect:non-scaling-stroke/.test(svg) && !/<script/i.test(svg), 'preview.svg: viewBox fit, non-scaling strokes, no script');
  const bad1 = run(path.join(out, 'missing.dwg'), out);
  ok(bad1.code !== 0 && bad1.json.ok === false && bad1.json.error, 'a missing input fails with {ok:false, error}');
  const bad2 = run(path.join(ROOT, 'fixtures/pdf/kitchen-plan-sheet.pdf'), out);
  ok(bad2.code !== 0 && /Not a file the library can read/.test(bad2.json.error || ''), 'a PDF is refused');
  const seed = run(path.join(ROOT, 'tools/library/seed.csv'), path.join(out, 'seed'));
  ok(seed.code === 0 && seed.json.items.length === 6, 'seed.csv converts to 6 items');
  // A finished format-1 item (.json): validated (partial) and passed through, with its preview.
  const seedDir = path.join(ROOT, 'tools/library/seed');
  const rangeSrc = JSON.parse(fs.readFileSync(path.join(seedDir, 'range.item.json'), 'utf8'));
  const ij = run(path.join(seedDir, 'range.item.json'), path.join(out, 'item'));
  const ijItem = ij.json.items ? JSON.parse(fs.readFileSync(ij.json.items[0].path, 'utf8')) : null;
  ok(ij.code === 0 && ij.json.kind === 'item' && ij.json.items.length === 1 && JSON.stringify(ijItem) === JSON.stringify(rangeSrc), 'an item .json converts as kind "item", passed through unchanged');
  const pubbed = { ...rangeSrc, uuid: '7d0f5c2e-58f4-4c55-9a43-1b1f00d2c001', version: 3, license: { id: 'CC0-1.0' }, provenance: { library: 'librarycraft' } };
  fs.writeFileSync(path.join(out, 'pub.json'), JSON.stringify(pubbed));
  const pj = run(path.join(out, 'pub.json'), path.join(out, 'pub'), '--list');
  ok(pj.code === 0 && pj.json.notes.some((n) => /Left out uuid, version, license, provenance/.test(n)), 'a published item .json: server-owned fields left out with a note');
  fs.writeFileSync(path.join(out, 'bad.json'), JSON.stringify({ format: 'cadcraft-library-item', format_version: 1, name: 'x', kind: 'nope' }));
  const bj = run(path.join(out, 'bad.json'), path.join(out, 'bad'));
  ok(bj.code !== 0 && /format checks/.test(bj.json.error || ''), 'an invalid item .json is refused with the format errors');
  fs.rmSync(out, { recursive: true, force: true });

  console.log('== Seed symbols and previewSvg');
  const sym = execFileSync(process.execPath, [path.join(ROOT, 'tools/library/seed-symbols.mjs'), '--check'], { encoding: 'utf8' });
  ok((sym.match(/^ok /gm) || []).length === 6, 'tools/library/seed-symbols.mjs --check: six symbols validate');
  const manifest = JSON.parse(fs.readFileSync(path.join(seedDir, 'manifest.json'), 'utf8'));
  ok(manifest.length === 6 && manifest.every((m) => {
    const it = JSON.parse(fs.readFileSync(path.join(seedDir, m.file), 'utf8'));
    return L.validateItem(it, { partial: true }).ok && it.maker === '' && it.model === '' && !it.plan.entities.some((e) => e.type === 'text')
      && it.plan.entities.length >= 4 && L.planBounds(it.plan).maxY <= 1.5 * 25.4 + 1e-6;
  }), 'seed items: valid, no maker/model, no name text in the symbol, back on y = 0');
  ok(L.layerLinetype('EQUIP-HIDDEN') === 'hidden' && L.layerLinetype('shelf ABOVE') === 'hidden' && L.layerLinetype('door swing') === 'clear'
    && L.layerLinetype('A-CENTER') === 'center' && L.layerLinetype('EQUIP-DETAIL') === 'thin' && L.layerLinetype('EQUIP') === '', 'layerLinetype: the layer-name convention');
  ok(L.lengthLabel(1828.8, true) === '72"' && L.lengthLabel(647.7, true) === '25½"' && L.lengthLabel(762.4, false) === '762', 'lengthLabel: 72", 25½", 762');
  const ps = L.previewSvg(rangeSrc);
  const sizes = [...ps.matchAll(/font-size="([\d.]+)"/g)].map((m) => +m[1]);
  ok(/^<svg[^>]+viewBox="0 0 480 360" width="480" height="360"/.test(ps) && /vector-effect:non-scaling-stroke/.test(ps) && /\.k\{stroke-width:1\.5\}/.test(ps)
    && /\.m\{stroke-width:1\}/.test(ps) && /class="k"/.test(ps) && /class="hd"/.test(ps) && /class="t"/.test(ps) && /class="fl"/.test(ps), 'previewSvg: 480×360 tile, 1.5/1/0.6 strokes, heavy outline, hidden oven door, thin detail, light fill');
  ok(/>36(&quot;|")<\/text>/.test(ps) && />33(&quot;|")<\/text>/.test(ps) && />Front<\/text>/.test(ps) && !/<script|\son\w+=|href/i.test(ps), 'previewSvg: overall dims 36" and 33", Front marker, nothing active');
  const csvTable = L.itemsFromCsv(fs.readFileSync(path.join(ROOT, 'tools/library/seed.csv'), 'utf8')).items[0];
  const pc = L.previewSvg(csvTable);
  const csvSizes = [...pc.matchAll(/font-size="([\d.]+)"/g)].map((m) => +m[1]);
  ok(csvSizes.length === 1 && csvSizes[0] <= 11 && sizes.length === 0, `previewSvg: plan text kept small (${csvSizes.join(', ')} px), no giant name text`);

  const ccCopy = path.join(ROOT, 'public_html/assets/apps/cadcraft/dev/libitem.js');
  if (fs.existsSync(ccCopy)) ok(fs.readFileSync(ccCopy).equals(fs.readFileSync(path.join(APP, 'libitem.js'))), 'cadcraft/dev/libitem.js is byte-identical');
  else console.log('  (cadcraft/dev/libitem.js not there yet)');

  console.log(bad ? `\n${bad} of ${good + bad} library checks failed` : `\nall ${good} library checks passed`);
  return bad ? 1 : 0;

  function this_schema(src) { return (src.match(/FILE_SCHEMA\(\('([^']+)'/) || [])[1]; }
}

/**
 * --dwg3d: the drawing's 3D view, DOM-free (docs/3D-SPEC.md §D). Fixture: tools/bimcraft-test/fixture3d.py (ezdxf) →
 * make-fixture3d.sh (ODA File Converter) → dwg3d-acad2000.dwg / dwg3d-acad2018.dwg (+ the ezdxf dwg3d.dxf); read by the
 * build's dwg/read.js (cc-dwg) and dxf-model.js, as the browser does.
 */
async function dwg3dMode() {
  const C3 = await import(path.join(APP, 'dwg-compile3d.js'));
  const FIX = path.join(ROOT, 'tools/bimcraft-test/fixtures');
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol;
  const read = async (file) => ({ db: await parseDrawing(new Uint8Array(fs.readFileSync(file)), /\.dxf$/i.test(file)) });
  /** Every corner of a layer's batches: { tris: [[x,y,z]…], lines: [[x,y,z]…] } */
  const pointsOf = (m, layer) => {
    const out = { tris: [], lines: [], nTris: 0, nSegs: 0 };
    for (const b of m.batches.filter((x) => x.layer === layer)) {
      for (let i = 0; i < b.tris.length; i += 3) out.tris.push([b.tris[i], b.tris[i + 1], b.tris[i + 2]]);
      for (let i = 0; i < b.lines.length; i += 3) out.lines.push([b.lines[i], b.lines[i + 1], b.lines[i + 2]]);
      out.nTris += b.tris.length / 9; out.nSegs += b.lines.length / 6;
    }
    return out;
  };
  const range = (pts, k) => pts.length ? [Math.min(...pts.map((p) => p[k])), Math.max(...pts.map((p) => p[k]))] : [NaN, NaN];
  const has = (pts, q, tol = 1e-3) => pts.some((p) => near(p[0], q[0], tol) && near(p[1], q[1], tol) && near(p[2], q[2], tol));

  console.log('== m3d/: ModelCraft camera and view cube copies');
  for (const f of ['camera.js', 'vec.js', 'viewcube.js', 'viewcube-three.js', 'viewcube-camera.js']) {
    const src = path.join(ROOT, 'public_html/assets/apps/modelcraft/dev', f), copy = path.join(APP, 'm3d', f);
    ok(fs.existsSync(copy) && fs.readFileSync(copy).equals(fs.readFileSync(src)), `m3d/${f} is byte-identical to modelcraft/dev/${f} (re-copy when it changes)`);
  }

  console.log('== dwg/: the cc-dwg reader (byte-identical copies of lib/dwg; node tools/dwg-test/writer-sync.mjs bimcraft)');
  const { READER_FILES } = await import(path.join(ROOT, 'tools/dwg-test/writer-sync.mjs'));
  const differ = READER_FILES.filter((f) => !fs.existsSync(path.join(APP, 'dwg', f)) || !fs.readFileSync(path.join(APP, 'dwg', f)).equals(fs.readFileSync(path.join(ROOT, 'lib/dwg', f))));
  const extra = fs.existsSync(path.join(APP, 'dwg')) ? fs.readdirSync(path.join(APP, 'dwg')).filter((f) => f.endsWith('.js') && !READER_FILES.includes(f)) : [];
  ok(!differ.length && !extra.length, `dwg/ holds byte-identical copies of the ${READER_FILES.length} lib/dwg files the reader needs` + (differ.length || extra.length ? ' — differ: ' + differ.join(', ') + (extra.length ? '; not needed: ' + extra.join(', ') : '') : ''));
  ok(!fs.existsSync(path.join(APP, 'dwg-raw3d.js')), 'dwg-raw3d.js (the LibreDWG extras reader) is gone');
  ok(fs.readFileSync(path.join(APP, 'dxf-model.js')).equals(fs.readFileSync(path.join(APP, '../../cadcraft/dev/dxf-model.js'))), 'dxf-model.js is byte-identical in bimcraft/dev and cadcraft/dev');
  {   // DXF and DWG of the same drawing (ODA truth) give the same 2D drawing
    const { compileDrawing } = await import(path.join(APP, 'dwg-compile.js'));
    const C = path.join(TESTFILES, 'dwg-corpus') + '/';
    const sum = (d) => d.spaces.map((sp) => { const c = (k) => [...sp.batches.values()].reduce((x, y) => x + y[k].length, 0); return sp.name + ':' + c('lines') + '/' + c('fills') + '/' + c('texts'); }).join(' ');
    for (const n of ['example-2018', 'architectural-annotation-scaling-and-multileaders', 'blocks-and-tables-imperial']) {
      if (!fs.existsSync(C + '_truth/AC1032/' + n + '.dxf')) continue;
      const a = sum(compileDrawing(await parseDrawing(new Uint8Array(fs.readFileSync(C + 'AC1032/' + n + '.dwg')), false)));
      const b = sum(compileDrawing(await parseDrawing(new Uint8Array(fs.readFileSync(C + '_truth/AC1032/' + n + '.dxf')), true)));
      ok(a === b, `${n}: the ODA DXF (dxf-model.js) draws as the DWG (readDwg): ${b}` + (a === b ? '' : ' vs ' + a));
    }
  }
  const manifest = fs.readFileSync(path.join(APP, 'manifest.json'), 'utf8') + fs.readFileSync(path.join(APP, 'ui.inc'), 'utf8');
  ok(!/libredwg|dwgWasm|dwg-wasm/i.test(manifest), 'manifest.json and ui.inc no longer load libredwg-web');

  console.log('== OCS (arbitrary axis) and 3D splines');
  const om = C3.ocsMatrix({ x: 0, y: 0, z: -1 });
  ok(near(C3.apply3(om, 1, 2, 3)[0], -1) && near(C3.apply3(om, 1, 2, 3)[1], 2) && near(C3.apply3(om, 1, 2, 3)[2], -3), 'extrusion (0,0,-1): X mirrored, as AutoCAD draws it');
  const ox = C3.apply3(C3.ocsMatrix({ x: 1, y: 0, z: 0 }), 6000, 1000, 4500);
  ok(near(ox[0], 4500) && near(ox[1], 6000) && near(ox[2], 1000), 'extrusion (1,0,0): OCS (6000, 1000, 4500) → world (4500, 6000, 1000)');
  ok(C3.ocsMatrix({ x: 0, y: 0, z: 0 }) === C3.I3, 'no extrusion (0,0,0) = world Z');
  const sp = C3.spline3({ degree: 1, controlPoints: [{ x: 0, y: 0, z: 0 }, { x: 10, y: 0, z: 10 }], knots: [0, 0, 1, 1] });
  ok(sp.length > 2 && near(sp[sp.length - 1][2], 10, 1e-3) && near(sp[0][2], 0), 'spline3: a degree-1 spline climbs from z 0 to z 10');

  console.log('== compileScene on a hand-made scene (the reader-neutral intermediate; no reader)');
  const hand = C3.compileScene({ units: 'millimeters', layers: [{ name: 'A', color: '#ff0000', on: true }], notes: {},
    blocks: new Map([['B', { name: 'B', base: { x: 0, y: 0, z: 0 }, entities: [
      { type: '3DFACE', layer: '0', color: { index: 0 }, points: [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 0, y: 1, z: 0 }], invisibleEdges: 2 }] }]]),
    model: [
      { type: 'LINE', layer: 'A', color: { index: 256 }, start: { x: 0, y: 0, z: 0 }, end: { x: 10, y: 0, z: 0 }, thickness: 5, extrusion: { x: 0, y: 0, z: 1 } },
      { type: 'INSERT', layer: 'A', color: { rgb: 0x00ff00 }, block: 'B', insert: { x: 20, y: 0, z: 3 }, scale: { x: 2, y: 2, z: 2 }, rotation: 0, extrusion: { x: 0, y: 0, z: 1 }, cols: 1, rows: 1, colSpacing: 0, rowSpacing: 0, attribs: 0 },
      { type: 'BODY', layer: 'A', color: { index: 256 } }] });
  ok(hand.stats.segments === 4 + 3 && hand.stats.triangles === 2 + 2 && hand.batches.some((b) => b.color === '#00ff00' && b.layer === 'A') && hand.stats.notDrawn['BODY (ACIS)'] === 1
    && hand.bounds.max[0] === 22 && hand.bounds.max[2] === 5, `LINE with thickness, a BYBLOCK 3DFACE in a scaled INSERT (one hidden edge), a BODY counted (${hand.stats.segments} segments, ${hand.stats.triangles} triangles)`);

  console.log('== text, attributes and wide polylines in 3D (0.4 B7)');
  {
    const base = { layer: 'A', color: { index: 256 } };
    const sc = { units: '', layers: [{ name: 'A', color: '#ff0000', on: true }], notes: {}, blocks: new Map([['TAG', { name: 'TAG', base: { x: 0, y: 0, z: 0 }, entities: [] }]]), model: [
      { ...base, type: 'LWPOLYLINE', vertices: [{ x: 0, y: 0, bulge: 0, sw: 100, ew: 100 }, { x: 1000, y: 0, bulge: 0, sw: 0, ew: 0 }], closed: false, elevation: 50, thickness: 0 },
      { ...base, type: 'LWPOLYLINE', vertices: [{ x: 0, y: 500, bulge: 0, sw: 0, ew: 200 }, { x: 1000, y: 500, bulge: 0, sw: 0, ew: 0 }], closed: false, elevation: 0, thickness: 0 },
      { ...base, type: 'LWPOLYLINE', vertices: [{ x: 0, y: 1000, bulge: 1, sw: 20, ew: 20 }, { x: 1000, y: 1000, bulge: 0, sw: 0, ew: 0 }], closed: false, elevation: 0, thickness: 0 },
      { ...base, type: 'TEXT', value: 'Middle', height: 50, insert: { x: 0, y: 0, z: 0 }, align: { x: 2000, y: 0, z: 30 }, hAlign: 1, vAlign: 2, rotation: Math.PI / 2, widthFactor: 1, generation: 0 },
      { ...base, type: 'MTEXT', value: 'One\\PTwo', height: 10, insert: { x: 3000, y: 0, z: 0 }, attach: 1, xAxis: null, lineSpacing: 1, rotation: 0 },
      { ...base, type: 'INSERT', block: 'TAG', insert: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, rotation: 0, cols: 1, rows: 1, colSpacing: 0, rowSpacing: 0,
        attribs: [{ ...base, type: 'ATTRIB', value: '12', height: 20, insert: { x: 5, y: 5, z: 0 }, hAlign: 0, vAlign: 0, rotation: 0, invisible: false },
          { ...base, type: 'ATTRIB', value: 'secret', height: 20, insert: { x: 5, y: 50, z: 0 }, hAlign: 0, vAlign: 0, rotation: 0, invisible: true }] }] };
    const m = C3.compileScene(sc);
    const tris = (o) => { const t = []; for (const b of m.batches) for (let i = 0; i < b.triOwner.length; i++) if (b.triOwner[i] === o) t.push([...b.tris.subarray(i * 9, i * 9 + 9)]); return t; };
    const w0 = tris(0), ys0 = w0.flat().filter((_, i) => i % 3 === 1);
    ok(w0.length === 2 && Math.min(...ys0) === -50 && Math.max(...ys0) === 50 && w0.flat().filter((_, i) => i % 3 === 2).every((z) => z === 50), 'constant width 100: one quad, ±50 from the path, at its elevation 50');
    const w1 = tris(1), at1000 = w1.flat().reduce((a, v, i, arr) => (i % 3 === 0 && v === 1000 ? a.concat([arr[i + 1]]) : a), []);
    ok(w1.length === 2 && Math.max(...at1000) === 600 && Math.min(...at1000) === 400, 'tapered 0 → 200: a point at the start, 200 wide at the end');
    const w2 = tris(2);
    ok(w2.length > 10 && w2.flat().filter((_, i) => i % 3 === 1).some((y) => y < 1000 - 400), 'a bulged wide segment follows its arc (' + w2.length + ' triangles)');
    const tx = m.batches.flatMap((b) => b.texts);
    const mid = tx.find((t) => t.s === 'Middle');
    ok(mid && mid.ha === 1 && mid.va === 2 && near(mid.o[0], 2000) && near(mid.o[2], 30) && near(mid.xd[1], 50) && near(mid.xd[0], 0), 'TEXT: aligned at its alignment point (z 30), centred and middle, turned 90°');
    const one = tx.find((t) => t.s === 'One'), two = tx.find((t) => t.s === 'Two');
    ok(one && two && near(one.o[1] - two.o[1], 16.67, 0.01), 'MTEXT: two lines, 1.667 × height apart');
    ok(tx.some((t) => t.s === '12' && t.owner === 5) && !tx.some((t) => t.s === 'secret'), 'a visible attribute is drawn and picks as its block reference; an invisible one is not');
    ok(m.stats.drawn.TEXT === 1 && m.stats.drawn.MTEXT === 1 && m.stats.drawn.ATTRIB === 1 && !m.stats.flatOnly.ATTRIB, 'TEXT, MTEXT and ATTRIB counted as drawn');
    const T = C3.textLines({ type: 'TEXT', value: 'Mirror', height: 10, insert: { x: 0, y: 0 }, generation: 2, widthFactor: 0.8 });
    ok(T.length === 1 && near(T[0].ux, -8), 'a mirrored TEXT (generation 2) runs backwards; width factor 0.8 narrows it');
  }

  for (const [file, version] of [['dwg3d-acad2000.dwg', 'AutoCAD 2000'], ['dwg3d-acad2018.dwg', 'AutoCAD 2018'], ['dwg3d.dxf', 'DXF from ezdxf, dxf-model.js']]) {
    const f = path.join(FIX, file);
    console.log(`== ${file} (${version}; fixture3d.py through the ODA File Converter)`);
    if (!fs.existsSync(f)) { ok(false, `${file} exists (run: sh tools/bimcraft-test/make-fixture3d.sh)`); continue; }
    const { db } = await read(f);
    const ms = db.blocks.find((b) => /^\*model_space$/i.test(b.name)).entities;
    ok(!db.report.notes.length && !ms.some((e) => e.damaged), `the reader read every object (${db.report.notes.length} notes)`);
    ok(ms.filter((e) => ['LINE', 'CIRCLE', 'ARC'].includes(e.type) && e.thickness).map((e) => e.thickness).sort((a, b) => a - b).join() === '500,800,1000', `thickness read: LINE 800, CIRCLE 1000, ARC 500`);
    const pf = ms.find((e) => e.type === 'POLYLINE_PFACE'), pm = ms.find((e) => e.type === 'POLYLINE_MESH');
    ok(pf && pf.vertices.length === 8 && pf.faces.length === 6 && pf.layer === 'PFACE', `polyface mesh: 8 vertices, 6 faces, layer PFACE, model space (${pf?.vertices.length}/${pf?.faces.length})`);
    ok(pm && pm.m === 4 && pm.n === 3 && pm.vertices.length === 12 && !(pm.flags & 1) && !(pm.flags & 32), `polygon mesh: 4 × 3, 12 vertices, open (${pm?.m}×${pm?.n}, ${pm?.vertices.length})`);
    const bodies = ms.filter((e) => ['BODY', 'REGION', '3DSOLID', 'UNKNOWN'].includes(e.type) || /SURFACE$/.test(e.type)).map((e) => e.type === 'UNKNOWN' ? e.dxfName : e.type).sort().join();
    ok(bodies === '3DSOLID,BODY,EXTRUDEDSURFACE,MESH,REGION', `3D bodies are in the model (to count): ${bodies}`);
    const p3 = ms.find((e) => e.type === 'POLYLINE_3D');
    ok(p3 && p3.vertices.length === 5, `3D polyline: all 5 vertices (${p3?.vertices.length}; libredwg-web lost the last one in AutoCAD 2000 files)`);

    const t0 = Date.now();
    const m = C3.compileModel3d(db);
    const s = m.stats;
    ok(near(m.bounds.min[0], 0) && near(m.bounds.min[1], 0) && near(m.bounds.min[2], 0) && near(m.bounds.max[0], 10000) && near(m.bounds.max[1], 8000) && near(m.bounds.max[2], 3000),
      `bounds (0,0,0)–(10000,8000,3000): ${m.bounds.min.map((v) => v.toFixed(3))} – ${m.bounds.max.map((v) => v.toFixed(3))} (${Date.now() - t0} ms)`);
    const want = { LWPOLYLINE: 2, LINE: 2, POLYLINE_2D: 1, POLYLINE_3D: 1, '3DFACE': 26, CIRCLE: 2, ARC: 1, INSERT: 5, POLYLINE_PFACE: 1, POLYLINE_MESH: 1, TEXT: 1 };
    ok(JSON.stringify(Object.fromEntries(Object.entries(s.drawn).sort())) === JSON.stringify(Object.fromEntries(Object.entries(want).sort())), `drawn by type: ${JSON.stringify(s.drawn)}`);
    ok(JSON.stringify(Object.keys(s.notDrawn).sort()) === JSON.stringify(['3DSOLID (ACIS)', 'BODY (ACIS)', 'EXTRUDEDSURFACE', 'MESH (subdivision)', 'REGION (ACIS)']) && Object.values(s.notDrawn).every((n) => n === 1),
      `Not drawn yet, never guessed: ${JSON.stringify(s.notDrawn)}`);
    const texts = m.batches.flatMap((b) => b.texts);
    ok(Object.keys(s.flatOnly).length === 0 && texts.length === 1 && texts[0].s === '3D FIXTURE' && near(texts[0].o[0], 500, 1e-6) && near(texts[0].o[1], 7500, 1e-6) && near(Math.hypot(...texts[0].yd), 200, 1e-6),
      'the TEXT is drawn in 3D since 0.4 B7: "3D FIXTURE" at (500, 7500), 200 high; nothing left as 2D only');
    ok(m.batches.every((b) => b.lines.every(Number.isFinite) && b.tris.every(Number.isFinite)) && m.batches.every((b) => b.lines.length % 6 === 0 && b.tris.length % 9 === 0), 'every coordinate finite; whole segments and triangles');
    ok(s.segments === m.batches.reduce((a, b) => a + b.lines.length / 6, 0) && s.triangles === m.batches.reduce((a, b) => a + b.tris.length / 9, 0), `stats agree with the batches: ${s.segments} segments, ${s.triangles} triangles`);

    const flat = pointsOf(m, 'FLAT');
    ok(flat.nSegs === 4 && flat.nTris === 0 && range(flat.lines, 2).join() === '0,0', `2D linework stays flat: the closed rectangle is 4 segments at z 0 (${flat.nSegs})`);
    const lines = pointsOf(m, 'LINES');
    ok(has(lines.lines, [2000, 2000, 1500]) && lines.nTris === 2 && range(lines.tris, 2).join() === '0,800', `LINE with Z ends at (2000,2000,1500); LINE thickness 800 = one wall of 2 triangles (${lines.nTris})`);
    const pl = pointsOf(m, 'PLINE');
    ok(pl.nTris === 8 && range(pl.tris, 2).join() === '1200,1500', `LWPOLYLINE at elevation 1200, thickness 300: 4 walls (8 triangles) from z 1200 to 1500 (${pl.nTris}, ${range(pl.tris, 2)})`);
    ok(pl.lines.some((p) => near(p[2], 600) && p[1] < 1000 - 1), '2D POLYLINE at elevation 600 with its bulge (an arc dips below y 1000)');
    const p3d = pointsOf(m, 'P3D');
    ok(p3d.nSegs === 4 && has(p3d.lines, [1000, 3000, 2000]) && range(p3d.lines, 2).join() === '0,2000', `3D POLYLINE: 4 segments up to its last vertex (1000, 3000, 2000) (${p3d.nSegs})`);
    const fc = pointsOf(m, 'FACES');
    ok(fc.nTris === 3 && fc.nSegs === 7 && has(fc.tris, [4000, 4000, 1000]) && has(fc.tris, [4750, 3500, 800]), `3DFACEs: a quad (2 triangles) and a triangle, 7 edges (${fc.nTris}, ${fc.nSegs})`);
    const pfp = pointsOf(m, 'PFACE');
    ok(pfp.nTris === 12 && pfp.nSegs === 24 && range(pfp.tris, 0).join() === '6000,7000' && range(pfp.tris, 2).join() === '0,1000', `polyface cube: 12 triangles, 24 edges, 6000–7000 × 0–1000 (${pfp.nTris}, ${pfp.nSegs})`);
    const pmp = pointsOf(m, 'PMESH');
    ok(pmp.nTris === 12 && pmp.nSegs === 17 && has(pmp.tris, [9500, 4000, 600]), `polygon mesh 4 × 3: 6 quads (12 triangles), 17 grid lines, corner (9500, 4000, 600) (${pmp.nTris}, ${pmp.nSegs})`);
    const ci = pointsOf(m, 'CIRC');
    const disc = ci.lines.filter((p) => near(p[0], 4500, 1e-6));
    ok(disc.length > 30 && near(range(disc, 1)[0], 5700, 1) && near(range(disc, 1)[1], 6300, 1) && near(range(disc, 2)[0], 700, 1) && near(range(disc, 2)[1], 1300, 1),
      `CIRCLE with extrusion (1,0,0) stands in the plane x 4500, centre (4500, 6000, 1000), r 300 (${disc.length} points)`);
    const cyl = ci.tris.filter((p) => Math.hypot(p[0] - 1500, p[1] - 6000) < 401);
    ok(cyl.length > 0 && range(cyl, 2).join() === '0,1000' && cyl.some((p) => near(p[0], 1500) && near(p[1], 6000) && near(p[2], 1000)), 'CIRCLE thickness 1000: a capped cylinder (cap centre at z 1000)');
    const arcT = ci.tris.filter((p) => Math.hypot(p[0] - 3000, p[1] - 6000) < 401);
    ok(arcT.length > 0 && range(arcT, 2).join() === '0,500' && !arcT.some((p) => near(p[0], 3000) && near(p[1], 6000)), 'ARC thickness 500: a wall, no cap');
    const blk = pointsOf(m, 'BLK');
    ok(blk.nTris === 48 && blk.nSegs === 96, `4 cube inserts (one nested): 48 triangles, 96 edges (${blk.nTris}, ${blk.nSegs})`);
    ok(has(blk.tris, [5500, 6000, 500]), 'INSERT at (5000, 5500, 0): far corner (5500, 6000, 500)');
    ok(has(blk.tris, [6500 + 1000 * Math.SQRT1_2 - 500 * Math.SQRT1_2, 5500 + 1000 * Math.SQRT1_2 + 500 * Math.SQRT1_2, 3000]), 'INSERT rotated 45°, scaled 2 × 1 × 2 at z 2000: far corner at z 3000');
    ok(has(blk.tris, [8500, 5500, 500]) && !blk.tris.some((p) => p[1] < 5500 - 1e-6 && p[0] >= 8000 - 1e-6), 'INSERT with extrusion (0,-1,0): the cube stands at x 8000–8500, y 5500–6000 (its Z along −Y)');
    ok(has(blk.tris, [9500, 7500, 500]), 'nested INSERT (NEST → CUBE) at (9000, 7000, 0)');
    // layer "0" inside the block takes the insert's layer: no batch on layer 0
    ok(!m.batches.some((b) => b.layer === '0'), 'block content on layer 0 is drawn on the insert\'s layer');
  }

  console.log('== polyface and polygon meshes in the 2D view (0.4 B8)');
  {
    const { compileDrawing } = await import(path.join(APP, 'dwg-compile.js'));
    for (const f of ['dwg3d-acad2018.dwg', 'dwg3d.dxf']) {
      const { db } = await read(path.join(FIX, f));
      const d = compileDrawing(db);
      const model = d.spaces.find((x) => x.kind === 'model');
      const segs = (layer) => [...model.batches.values()].filter((b) => b.layer === layer).reduce((a, b) => a + b.lines.reduce((x, l) => x + l.length / 2 - 1, 0), 0);
      const lines = (layer) => [...model.batches.values()].filter((b) => b.layer === layer).reduce((a, b) => a + b.lines.length, 0);
      ok(!d.stats.unsupported.POLYLINE_PFACE && !d.stats.unsupported.POLYLINE_MESH, f + ': polyface and polygon meshes are drawn, not "Not drawn yet"');
      ok(segs('PFACE') === 12, f + ': the polyface cube shows its 12 edges once each from above (' + segs('PFACE') + ')');
      ok(lines('PMESH') === 7 && segs('PMESH') === 4 * 2 + 3 * 3, f + ': the 4 × 3 polygon mesh shows 4 + 3 grid lines (' + lines('PMESH') + ' lines, ' + segs('PMESH') + ' segments)');
    }
  }

  console.log('== picking in the 3D view (0.4 B2): owners and Properties rows');
  {
    const P3 = await import(path.join(APP, 'dwg-props.js'));
    const { db } = await read(path.join(FIX, 'dwg3d-acad2018.dwg'));
    const m = C3.compileModel3d(db);
    const ms = db.blocks.find((b) => /^\*model_space$/i.test(b.name)).entities;
    ok(m.owners.length === ms.length && m.owners.every((o, i) => o.type === (ms[i].type === 'MINSERT' ? 'INSERT' : ms[i].type === 'UNKNOWN' ? (ms[i].dxfName || ms[i].className || 'UNKNOWN') : /^DIMENSION|_DIMENSION$/.test(ms[i].type) ? 'DIMENSION' : ms[i].type) && o.handle === ms[i].handle), 'one owner per model-space entity, same order, type and handle (' + m.owners.length + ')');
    ok(m.batches.every((b) => b.lineOwner.length === b.lines.length / 6 && b.triOwner.length === b.tris.length / 9), 'every segment and triangle has an owner');
    const ownersOn = (layer) => new Set(m.batches.filter((b) => b.layer === layer).flatMap((b) => [...b.lineOwner, ...b.triOwner]));
    const inserts = ms.map((e, i) => [e, i]).filter(([e]) => e.type === 'INSERT').map(([, i]) => i);
    ok(JSON.stringify([...ownersOn('BLK')].sort((a, b) => a - b)) === JSON.stringify(inserts), 'every primitive of the four block references (nested NEST included) belongs to its top-level INSERT: ' + inserts.join(', '));
    const tris = (i) => m.batches.reduce((a, b) => a + b.triOwner.filter((o) => o === i).length, 0);
    const nest = ms.findIndex((e) => e.type === 'INSERT' && e.block === 'NEST');
    ok(tris(nest) === 12, 'the NEST reference owns the 12 triangles of the cube inside it');
    const quad = ms.findIndex((e) => e.type === '3DFACE' && e.points?.[2]?.z === 1000);
    ok(tris(quad) === 2, 'the quad 3DFACE owns its 2 triangles');
    const line = ms.find((e) => e.type === 'LINE' && !e.thickness);
    const rows = P3.entityRows(line, { units: m.units });
    const r = (k) => rows.find((x) => x.key === k)?.value;
    ok(r('dwg.prop.type') === 'LINE' && r('dwg.prop.layer') === 'LINES' && r('dwg.prop.start') === '1000, 1000, 0' && r('dwg.prop.length') === '2061.55' + (m.units ? ' ' + m.units : ''), 'LINE rows: layer, start, length 2061.55 (' + rows.map((x) => x.key.split('.').pop() + '=' + x.value).join('; ') + ')');
    const rot = P3.entityRows(ms.find((e) => e.type === 'INSERT' && e.rotation), {});
    const q = (k) => rot.find((x) => x.key === k)?.value;
    ok(q('dwg.prop.block') === 'CUBE' && q('dwg.prop.rotation') === '45°' && q('dwg.prop.scale') === '2, 1, 2' && q('dwg.prop.insert') === '6500, 5500, 2000', 'INSERT rows: block CUBE, rotation 45°, scale 2, 1, 2, at (6500, 5500, 2000)');
    const ex = P3.entityRows(ms.find((e) => e.type === 'INSERT' && e.extrusion?.y < 0), {});
    ok(ex.some((x) => x.key === 'dwg.prop.extrusion' && x.value === '0, -1, 0'), 'a reference with extrusion (0,-1,0) lists it');
    ok(P3.colorText({ index: 256 }) === 'ByLayer' && P3.colorText({ index: 0 }) === 'ByBlock' && P3.colorText({ index: 1 }) === 'ACI 1' && P3.colorText({ rgb: 0x12ab34 }) === '#12ab34', 'colour: ByLayer, ByBlock, ACI n, true colour');
    const kitchen = path.join(ROOT, 'fixtures/dwg/kitchen-equipment.dwg');
    if (fs.existsSync(kitchen)) {
      const { db: kd } = await read(kitchen);
      const tag = kd.blocks.find((b) => /^\*model_space$/i.test(b.name)).entities.find((e) => e.type === 'INSERT' && e.attribs?.some((a) => a.tag === 'KCL-ITEM'));
      const at = P3.attributeRows(tag);
      ok(at.some((a) => a.tag === 'KCL-ITEM' && a.value) && at.length === tag.attribs.length, 'an item tag in the public kitchen fixture lists its ' + at.length + ' attribute values (KCL-ITEM = ' + at.find((a) => a.tag === 'KCL-ITEM').value + ')');
    }
  }

  console.log('== real drawings: every sample compiles in 3D');
  const SAMPLES = path.join(TESTFILES, 'dwg-samples');   // public samples on this machine; a clean clone has the fixtures only
  const samples = [path.join(ROOT, 'fixtures/dwg/kitchen-equipment.dwg'), path.join(ROOT, 'fixtures/dwg/base-plan.dwg'),
    ...(fs.existsSync(SAMPLES) ? fs.readdirSync(SAMPLES).filter((n) => /\.dwg$/i.test(n)).map((n) => path.join(SAMPLES, n)) : [])].filter((p) => fs.existsSync(p));
  for (const f of samples) {
    try {
      const { db } = await read(f);
      const t0 = Date.now();
      const m = C3.compileModel3d(db);
      const ms = Date.now() - t0;
      const fin = m.batches.every((b) => b.lines.every(Number.isFinite) && b.tris.every(Number.isFinite));
      ok(fin && (m.stats.segments + m.stats.triangles > 0) && ms < 5000, `${path.basename(f)}: ${m.stats.segments} lines, ${m.stats.triangles} faces, z ${m.bounds.min[2].toFixed(1)}…${m.bounds.max[2].toFixed(1)}, ${ms} ms` +
        (Object.keys(m.stats.notDrawn).length ? '; not drawn ' + JSON.stringify(m.stats.notDrawn) : ''));
    } catch (e) { ok(false, path.basename(f) + ': ' + e.message); }
  }

  console.log(bad ? `\n${bad} of ${good + bad} DWG 3D checks failed` : `\nall ${good} DWG 3D checks passed`);
  return bad ? 1 : 0;
}

/** A tiny GLB: one mesh, float positions + uint16 indices. */
function makeGlb({ positions, indices }) {
  const pos = new Float32Array(positions), idx = new Uint16Array(indices);
  const binLen = pos.byteLength + idx.byteLength, pad = (4 - (binLen % 4)) % 4;
  const json = { asset: { version: '2.0' }, scene: 0, scenes: [{ nodes: [0], name: 'box' }], nodes: [{ mesh: 0 }],
    meshes: [{ primitives: [{ attributes: { POSITION: 0 }, indices: 1 }] }],
    buffers: [{ byteLength: binLen + pad }],
    bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: pos.byteLength }, { buffer: 0, byteOffset: pos.byteLength, byteLength: idx.byteLength }],
    accessors: [{ bufferView: 0, componentType: 5126, count: pos.length / 3, type: 'VEC3' }, { bufferView: 1, componentType: 5123, count: idx.length, type: 'SCALAR' }] };
  let js = new TextEncoder().encode(JSON.stringify(json));
  const jpad = (4 - (js.length % 4)) % 4;
  const total = 12 + 8 + js.length + jpad + 8 + binLen + pad;
  const out = new Uint8Array(total), dv = new DataView(out.buffer);
  dv.setUint32(0, 0x46546c67, true); dv.setUint32(4, 2, true); dv.setUint32(8, total, true);
  dv.setUint32(12, js.length + jpad, true); dv.setUint32(16, 0x4e4f534a, true); out.set(js, 20); out.fill(0x20, 20 + js.length, 20 + js.length + jpad);
  let o = 20 + js.length + jpad;
  dv.setUint32(o, binLen + pad, true); dv.setUint32(o + 4, 0x004e4942, true); o += 8;
  out.set(new Uint8Array(pos.buffer), o); out.set(new Uint8Array(idx.buffer), o + pos.byteLength);
  return out;
}

// ---- Cut-off compound files (partial mode). Written apart from rvt-reader.js on purpose: a second reading of
// MS-CFB that knows, for every stream, which bytes of the file it depends on. ----

/** Does the file's own index point past its end? → {need: bytes the index says the file has at least} | null. */
function indexPastEnd(b) {
  const SPECIAL = 0xfffffffa;   // MAXREGSECT: anything above is FREESECT / ENDOFCHAIN / FATSECT / DIFSECT
  if (b.length < 512) return { need: 512 };
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const u32 = (o) => dv.getUint32(o, true);
  const ss = 1 << dv.getUint16(0x1e, true), per = ss / 4;
  const end = (s) => (s + 2) * ss;   // first byte after sector s
  const fatSecs = [];
  for (let i = 0; i < 109; i++) { const s = u32(0x4c + i * 4); if (s >= SPECIAL) break; fatSecs.push(s); }
  let need = 0;
  const index = [...fatSecs, u32(0x30)];
  if (u32(0x40) && u32(0x3c) < SPECIAL) index.push(u32(0x3c));
  for (let dif = u32(0x44), n = 0; dif < SPECIAL && n < 1e6; n++) {
    index.push(dif);
    if (end(dif) > b.length) break;
    for (let i = 0; i < per - 1; i++) { const s = u32(end(dif) - ss + i * 4); if (s < SPECIAL) { index.push(s); fatSecs.push(s); } }
    dif = u32(end(dif) - 4);
  }
  for (const s of index) need = Math.max(need, end(s));
  // Sectors the FAT marks as used (in the FAT sectors that are in the file).
  fatSecs.forEach((fs_, i) => {
    if (end(fs_) > b.length) return;
    for (let k = per - 1; k >= 0; k--) if (u32(end(fs_) - ss + k * 4) !== 0xffffffff) { need = Math.max(need, end(i * per + k)); break; }
  });
  return need > b.length ? { need } : null;
}

/**
 * Every stream of a compound file with the byte ranges it depends on: its directory entry (and the entries on the
 * tree path from the root), the FAT / DIFAT / mini FAT sectors holding the links that locate it, and its data.
 * Links that are not in `b` stay unknown, and a stream depending on one is never complete.
 * → { root: {deps, ok}, streams: [{path, size, deps:[[offset, length]], ok, bytes()}] }
 */
function cfbTruth(b) {
  const SPECIAL = 0xfffffffa;
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const u32 = (o) => dv.getUint32(o, true);
  const ss = 1 << dv.getUint16(0x1e, true), per = ss / 4, ms = 1 << dv.getUint16(0x20, true), perMini = ss / ms;
  const off = (s) => (s + 1) * ss;
  const here = ([o, n]) => o + n <= b.length;
  const fatLoc = [];   // FAT sector i → {sec, deps (DIFAT sectors read to find it)}
  for (let i = 0; i < 109; i++) { const s = u32(0x4c + i * 4); if (s >= SPECIAL) break; fatLoc.push({ sec: s, deps: [] }); }
  const difDeps = [];
  for (let dif = u32(0x44); dif < SPECIAL && difDeps.length < 1e6;) {
    difDeps.push([off(dif), ss]);
    if (!here([off(dif), ss])) break;
    for (let i = 0; i < per - 1; i++) { const s = u32(off(dif) + i * 4); if (s < SPECIAL) fatLoc.push({ sec: s, deps: [...difDeps] }); }
    dif = u32(off(dif) + ss - 4);
  }
  /** FAT[s] → {value (undefined = not in b), deps}. */
  const link = (s) => {
    const f = fatLoc[Math.floor(s / per)];
    if (!f) return { value: undefined, deps: [] };
    const deps = [...f.deps, [off(f.sec), ss]];
    return { value: deps.every(here) ? u32(off(f.sec) + (s % per) * 4) : undefined, deps };
  };
  /** Follow a chain → positions [{sec, deps (links needed to reach it)}]; stops at the end or an unknown link. */
  const chain = (start, want, linkOf) => {
    const out = [];
    let s = start, deps = [];
    const seen = new Set();
    while (out.length < want && s < SPECIAL && !seen.has(s)) {
      seen.add(s);
      out.push({ sec: s, deps });
      if (out.length === want) break;
      const l = linkOf(s);
      if (l.value === undefined) break;
      deps = [...deps, ...l.deps];
      s = l.value;
    }
    return out;
  };

  const dir = chain(u32(0x30), Infinity, link);
  const entries = [];
  dir.forEach((p, k) => {
    const sdeps = [...p.deps, [off(p.sec), ss]];
    if (!sdeps.every(here)) return;
    for (let j = 0; j < ss / 128; j++) {
      const o = off(p.sec) + j * 128, nl = dv.getUint16(o + 0x40, true), type = b[o + 0x42];
      if (!type || nl < 2 || nl > 64) continue;
      entries[k * (ss / 128) + j] = { name: Buffer.from(b.subarray(o, o + nl - 2)).toString('utf16le'), type, deps: sdeps,
        left: u32(o + 0x44), right: u32(o + 0x48), child: u32(o + 0x4c), start: u32(o + 0x74), size: u32(o + 0x78) };
    }
  });
  const root = entries[0];
  if (!root) return { root: { ok: false, deps: [[off(u32(0x30)), ss]] }, streams: [] };

  const miniFat = chain(u32(0x3c), u32(0x40), link);
  const miniLink = (m) => {
    const p = miniFat[Math.floor(m / per)];
    if (!p) return { value: undefined, deps: [] };
    const deps = [...p.deps, [off(p.sec), ss]];
    return { value: deps.every(here) ? u32(off(p.sec) + (m % per) * 4) : undefined, deps };
  };
  const rootChain = chain(root.start, Math.ceil(root.size / ss), link);
  const cutoff = u32(0x38) || 4096;

  const streams = [];
  const stack = [[root.child, '', [...root.deps]]];
  const seen = new Set();
  while (stack.length) {
    const [id, prefix, pdeps] = stack.pop();
    if (id >= SPECIAL || seen.has(id)) continue;
    seen.add(id);
    const e = entries[id];
    if (!e) continue;
    const deps = [...pdeps, ...e.deps];
    stack.push([e.left, prefix, deps], [e.right, prefix, deps]);
    if (e.type === 1) { stack.push([e.child, prefix + e.name + '/', deps]); continue; }
    if (e.type !== 2) continue;
    const data = [];
    let ok = true;
    if (e.size >= cutoff) {
      const want = Math.ceil(e.size / ss), c = chain(e.start, want, link);
      if (c.length < want) ok = false;
      else { deps.push(...c[want - 1].deps); c.forEach((p, i) => data.push([off(p.sec), Math.min(ss, e.size - i * ss)])); }
    } else if (e.size) {
      const want = Math.ceil(e.size / ms), c = chain(e.start, want, miniLink);
      if (c.length < want) ok = false;
      else {
        deps.push(...c[want - 1].deps);
        c.forEach((p, i) => {
          const r = rootChain[Math.floor(p.sec / perMini)];
          if (!r) { ok = false; return; }
          deps.push(...r.deps);
          data.push([off(r.sec) + (p.sec % perMini) * ms, Math.min(ms, e.size - i * ms)]);
        });
      }
    }
    const all = [...deps, ...data.map(([o]) => [o, 0]), ...data];
    // Mini sectors are read whole (64 bytes) — the reader asks for that much, so the truth does too.
    if (e.size && e.size < cutoff) data.forEach(([o]) => all.push([o, ms]));
    streams.push({
      path: prefix + e.name, size: e.size, ok, deps: all,
      bytes: () => { const out = new Uint8Array(e.size); let w = 0; for (const [o, n] of data) { out.set(b.subarray(o, o + n), w); w += n; } return out; },
    });
  }
  return { root: { ok: true, deps: root.deps }, streams };
}
function fitsIn(deps, c) { return deps.every(([o, n]) => o + n <= c); }

/**
 * A cut-off file must open partially: strict open throws 'truncated'; partial open says partial, carries the
 * incomplete-file message, recovers exactly the streams whose bytes and index are all here (cfbTruth on the same
 * bytes), byte for byte, and parses the known ones. Throws on the first wrong claim; returns report fields.
 */
async function checkPartialOpen(bytes, name) {
  const { readRevit: read, openPartialCompoundFile, toSource } = await import(path.join(APP, 'rvt-reader.js'));
  const zlib = await import('node:zlib');
  const cut = indexPastEnd(bytes);
  const mb = (n) => (n / 1048576).toFixed(1) + ' MB';   // the reader's own rounding
  const must = (cond, what) => { if (!cond) throw new Error('partial open: ' + what); };
  let strict = null;
  try { await read(bytes, name); } catch (e) { strict = e; }
  must(strict && strict.code === 'truncated', 'a plain open did not refuse the cut-off file');
  must(strict.message.startsWith('This file is incomplete: it is ' + mb(bytes.length) + ', but its own index points to data at least '), 'wrong message: ' + strict.message);

  const truth = cfbTruth(bytes);
  const expect = truth.streams.filter((s) => s.ok && fitsIn(s.deps, bytes.length));
  let info;
  try { info = await read(bytes, name, { partial: true }); } catch (e) {
    must(!truth.root.ok || !fitsIn(truth.root.deps, bytes.length), 'refused although its list of contents is here: ' + e.message);
    must(e.code === 'truncated' && e.unreadable && /nothing in it can be opened/.test(e.message), 'unreadable file, wrong error: ' + e.message);
    return { partial: 'nothing: its list of contents is in the missing part', error: e.message };
  }
  must(truth.root.ok, 'opened although its list of contents is missing');
  must(info.partial === true, 'not marked partial');
  must(info.incomplete.message === strict.message, 'the incomplete-file message changed');
  must(info.incomplete.size === bytes.length && info.incomplete.expectedAtLeast > bytes.length, 'sizes wrong');
  // A true lower bound: past the end, and never more than the furthest sector the index points to.
  must(info.incomplete.expectedAtLeast <= cut.need, 'expectedAtLeast ' + info.incomplete.expectedAtLeast + ' beyond what the index says (' + cut.need + ')');
  const got = info.recovered.map((s) => s.path).sort().join('|');
  must(got === expect.map((s) => s.path).sort().join('|'), 'recovered [' + got + '], expected [' + expect.map((s) => s.path).sort().join(', ') + ']');
  must(!info.missing.some((m) => expect.some((s) => s.path === m.path)), 'a recovered stream is also listed missing');
  const cfb = await openPartialCompoundFile(toSource(bytes), null);
  for (const s of expect) {
    const a = await cfb.read(s.path), want = s.bytes();
    must(a && a.length === s.size && Buffer.compare(Buffer.from(a), Buffer.from(want)) === 0, s.path + ': bytes differ from the file');
    // Compressed element data really inflates (Revit writes a gzip header with a CRC that does not check out).
    if (a[0] === 0x1f && a[1] === 0x8b) must(zlib.inflateRawSync(a.subarray(10), { finishFlush: zlib.constants.Z_SYNC_FLUSH }).length > 0, s.path + ' does not inflate');
  }
  const has = (p) => expect.some((s) => s.path === p);
  must(has('BasicFileInfo') ? !!info.release : info.release === null, 'release claimed without BasicFileInfo, or missing with it');
  must(has('RevitPreview4.0') ? !!info.preview : info.preview === null, 'preview claimed without RevitPreview4.0, or missing with it');
  must(has('PartAtom') ? !!info.family : info.family === null, 'family claimed without PartAtom');
  must(has('ProjectInformation') || info.project === null, 'project information claimed without ProjectInformation');
  const known = ['BasicFileInfo', 'RevitPreview4.0', 'PartAtom', 'ProjectInformation', 'TransmissionData'];
  return {
    partial: mb(bytes.length) + ' of at least ' + mb(info.incomplete.expectedAtLeast) + ' (' + info.directory.entries + ' directory entries readable, list of contents ' + (info.directory.complete ? 'complete' : 'partly here') + ')',
    release: info.release || 'none (BasicFileInfo is not in the file)', preview: info.preview ? info.preview.width + '×' + info.preview.height : 'none',
    recovered: info.recovered.map((s) => s.path + ' (' + (s.size / 1024).toFixed(0) + ' KB)').join(', ') || 'none',
    'not in file': info.missing.length + ' streams, incl. ' + (known.filter((k) => info.missing.some((m) => m.path === k)).join(', ') || 'none of the known ones'),
  };
}

/** --partial: cut complete samples at many offsets; partial mode must recover exactly what is there. */
async function partialMode() {
  const TF = TESTFILES;
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; if (!cond || process.argv.includes('--verbose')) console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  console.log('\nPartial mode (cut-off RVT/RFA)');

  // No complete file is ever reported partial (folder-fixture included: it holds complete backups).
  const ole = [];
  for (const root of [path.join(ROOT, 'fixtures/folder'), TF].filter((p) => fs.existsSync(p))) (function walk(p) {
    for (const n of fs.readdirSync(p).sort()) {
      const full = path.join(p, n);
      if (fs.statSync(full).isDirectory()) { if (n !== '_truth') walk(full); }
      else if (/\.(rvt|rfa|rte|rft)$/i.test(n)) ole.push(full);
    }
  })(root);
  {   // the public folder fixture's cut-off copy recovers exactly the streams fixtures/facts.json lists
    const F = JSON.parse(fs.readFileSync(path.join(ROOT, 'fixtures/facts.json'), 'utf8')).folder.cutOff;
    const info = await readRevit(new Uint8Array(fs.readFileSync(path.join(ROOT, 'fixtures/folder/Cad', F.file))), F.file, { partial: true });
    const got = info.recovered.map((x) => x.path).sort().join(), miss = info.missing.map((x) => x.path).sort().join();
    ok(info.partial && got === [...F.recovered].sort().join() && miss === [...F.missing].sort().join(), 'fixture ' + F.file + ': partial, recovers ' + info.recovered.length + ' streams, ' + info.missing.length + ' not in the file');
  }
  let complete = 0;
  for (const f of ole) {
    const b = new Uint8Array(fs.readFileSync(f));
    if (!isOleFile(b)) continue;
    if (indexPastEnd(b)) {
      // Real cut-off copies (an incomplete upload on this machine, the folder fixture's): a correct partial open.
      let res;
      try { res = await checkPartialOpen(b, path.basename(f)); } catch (e) { res = { error: e.message }; }
      ok(!res.error || /nothing in it can be opened/.test(res.error), 'cut-off, opened partially: ' + path.relative(ROOT, f) + (res.error ? ' (' + res.error + ')' : ' — ' + res.recovered));
      continue;
    }
    complete++;
    let info = null;
    try { info = await readRevit(b, path.basename(f), { partial: true }); } catch (e) { info = { error: e.message }; }
    ok(info.partial === false, 'complete, not partial: ' + path.relative(ROOT, f) + (info.error ? ' (' + info.error + ')' : ''));
  }
  console.log('  ' + complete + ' complete Revit files checked: none reported partial');

  for (const name of ['MassWithBoxAndCone.rfa', 'Room_Properties.rvt', 'empty2013.rfa', 'cutWalls.rvt'].filter(hasSample)) {
    const full = new Uint8Array(fs.readFileSync(path.join(TF, 'samples', name)));
    const orig = await readRevit(full, name);
    const truth = cfbTruth(full);
    const ss = 1 << new DataView(full.buffer).getUint16(0x1e, true);
    ok(truth.streams.every((s) => s.ok) && !indexPastEnd(full), name + ': complete and fully mapped (' + truth.streams.length + ' streams)');
    const n = full.length;
    const cuts = [...new Set([600, ss + 100, 2 * ss, 3 * ss, 3 * ss + 1000, 4 * ss + 700, 6 * ss, 12 * ss + 64,
      Math.floor(n * 0.25), Math.floor(n * 0.5), Math.floor(n * 0.9), n - ss, n - 1])].filter((c) => c < n).sort((a, b) => a - b);
    let opened = 0, unreadable = 0, withRelease = 0, withPreview = 0;
    for (const c of cuts) {
      const b = full.slice(0, c);
      const label = name + ' cut at ' + c;
      ok(!!indexPastEnd(b), label + ': cut found from the file itself');
      const expect = truth.streams.filter((s) => fitsIn(s.deps, c));
      let res;
      try { res = await checkPartialOpen(b, name); } catch (e) { ok(false, label + ': ' + e.message); continue; }
      // Against the COMPLETE file's map: exactly the streams whose every dependency lies before the cut.
      if (res.error) { unreadable++; ok(!fitsIn(truth.root.deps, c), label + ': unreadable only when the root entry is cut'); continue; }
      const info = await readRevit(b, name, { partial: true });
      opened++;
      const got = info.recovered.map((s) => s.path).sort().join('|');
      ok(got === expect.map((s) => s.path).sort().join('|'), label + ': recovers exactly the ' + expect.length + ' complete streams (' + info.recovered.length + ')');
      const bfi = expect.some((s) => s.path === 'BasicFileInfo');
      if (bfi) { withRelease++; ok(info.release === orig.release && info.basic.build === orig.basic.build, label + ': release ' + orig.release + ' from BasicFileInfo'); }
      if (expect.some((s) => s.path === 'RevitPreview4.0')) {
        withPreview++;
        ok(info.preview && Buffer.compare(Buffer.from(info.preview.png), Buffer.from(orig.preview.png)) === 0, label + ': preview identical');
      }
      if (expect.some((s) => s.path === 'PartAtom')) ok(info.family && info.family.title === orig.family.title, label + ': family ' + (orig.family && orig.family.title));
    }
    ok(opened > 0 && withRelease > 0, name + ': ' + cuts.length + ' cuts — ' + opened + ' opened partially (' + withRelease + ' with the release, ' + withPreview + ' with the preview), ' + unreadable + ' unreadable');
    console.log('  ' + name + ': ' + cuts.length + ' cuts, ' + opened + ' partial opens (' + withRelease + ' with release, ' + withPreview + ' with preview), ' + unreadable + ' with no list of contents');
  }
  console.log(bad ? `  ${bad} of ${good + bad} partial-mode checks failed` : `  all ${good} partial-mode checks passed`);
  return bad ? 1 : 0;
}

/** The generated IFC fixture (tools/bimcraft-test/ifc-fixture.mjs) as bytes; variants: { rev: 'b', problems: true }. */
async function fixtureBytes(opts = {}) {
  const { fixtureIfc } = await import(path.join(ROOT, 'tools/bimcraft-test/ifc-fixture.mjs'));
  return new TextEncoder().encode(fixtureIfc(opts));
}
/** Public IFC samples when this machine has them (outside the repo); a clean clone has none, and these checks skip. */
function publicSamples() {
  const dir = SAMPLE_DIR;
  return fs.existsSync(dir) ? fs.readdirSync(dir).filter((n) => /\.ifc$/i.test(n)).map((n) => path.join(dir, n)) : [];
}

async function visMode() {
  const V = await import(path.join(APP, 'ifc-vis.js'));
  const { keyOf, splitKey, KEY_SPAN } = await import(path.join(APP, 'ifc-model.js'));
  const { FIXTURE } = await import(path.join(ROOT, 'tools/bimcraft-test/ifc-fixture.mjs'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const load = quiet((bytes, o) => ifcm.load(bytes, () => {}, o));

  /** Every run is contiguous and complete: the batch's triangles and vertices, split by element, nothing left over. */
  const runsOk = (m) => {
    for (const b of m.batches) {
      const E = b.elems, tris = b.indices.length / 3, verts = b.positions.length / 3;
      let t = 0, v = 0;
      for (let r = 0; r < E.ids.length; r++) {
        if (E.t0[r] !== t || E.v0[r] !== v) return 'run ' + r + ' does not follow the one before';
        for (let k = E.t0[r]; k < E.t0[r] + E.tn[r]; k++) {
          if (b.triIds[k] !== E.ids[r]) return 'triangle ' + k + ' belongs to ' + b.triIds[k] + ', its run says ' + E.ids[r];
          for (let j = 0; j < 3; j++) { const vi = b.indices[k * 3 + j]; if (vi < E.v0[r] || vi >= E.v0[r] + E.vn[r]) return 'triangle ' + k + ' uses a vertex outside its run'; }
        }
        t += E.tn[r]; v += E.vn[r];
      }
      if (t !== tris || v !== verts) return 'runs cover ' + t + '/' + tris + ' triangles, ' + v + '/' + verts + ' vertices';
      if (new Set(E.ids).size !== E.ids.length) return 'an element has two runs in one batch';
    }
    return '';
  };

  console.log('== element runs (ifc-model.js) on the fixture');
  const m = await load(await fixtureBytes());
  const keyByName = new Map();
  for (const id of m.classOf.keys()) keyByName.set(String(ifcm.api.GetLine(m.modelID, id).Name?.value), id);
  const K = (name) => keyByName.get(name);
  const runs = runsOk(m);
  ok(!runs, 'every batch splits into one contiguous run per element' + (runs ? ': ' + runs : ''));
  ok(m.keyBase === 0 && [...m.classOf.keys()].every((id) => m.batches.some((b) => b.elems.ids.includes(id))), 'keys of the first model are its expressIDs (keyBase 0)');
  ok(m.elements === 11 && FIXTURE.walls1.concat(FIXTURE.walls2, [FIXTURE.door, FIXTURE.desk, FIXTURE.slab], FIXTURE.flights).every((n) => keyByName.has(n)), '11 elements with geometry, each found by name');
  ok(m.tree && m.classOf.get(K('W-101')) === 'IfcWall' && m.storeyOf.get(K(FIXTURE.desk)) === m.storeys[0].id, 'the load result carries the spatial tree, classes and storeys (the desk, inside the space, is on Level 1)');

  console.log('== Visibility + batchIndex');
  const vis = new V.Visibility();
  const all = m.batches.map((b) => b.indices.length / 3);
  ok(m.batches.every((b) => V.batchIndex(b, vis).index === b.indices), 'nothing hidden: each batch keeps its own index buffer (no copy)');
  const tn = (key) => m.batches.reduce((a, b) => { const r = b.elems.ids.indexOf(key); return a + (r >= 0 ? b.elems.tn[r] : 0); }, 0);
  const count = (fn) => m.batches.reduce((a, b) => a + fn(V.batchIndex(b, vis)), 0);
  const total = all.reduce((a, b) => a + b, 0);
  ok(vis.hide([K('W-101'), K('W-102')]) === 2 && vis.hide([K('W-101')]) === 0, 'hide counts only newly hidden elements');
  ok(count((r) => r.nSolid) === total - tn(K('W-101')) - tn(K('W-102')) && count((r) => r.nGhost) === 0, 'Hide: their triangles are left out (' + (total - tn(K('W-101')) - tn(K('W-102'))) + ' of ' + total + ' drawn)');
  ok(m.batches.every((b) => { const r = V.batchIndex(b, vis); return ![...r.triIds].includes(K('W-101')) && r.index.length === r.triIds.length * 3; }), 'and the reordered triangle ids no longer name them');
  vis.isolate([K('D-101'), K('W-101')]);
  ok(vis.state(K('W-101')) === V.SOLID && !vis.hidden.has(K('W-101')), 'Isolate shows a hidden element it names');
  ok(count((r) => r.nSolid) === tn(K('D-101')) + tn(K('W-101')) && count((r) => r.nGhost) === 0, 'Isolate: only the door and its wall are drawn');
  vis.isolate([K('D-101')], { ghost: true });
  ok(count((r) => r.nSolid) === tn(K('D-101')) && count((r) => r.nGhost) === total - tn(K('D-101')) - tn(K('W-102')), 'See-through: the door solid, the rest faint, a still-hidden wall left out');
  const order = m.batches.map((b) => V.batchIndex(b, vis)).every((r) => [...r.triIds.subarray(0, r.nSolid)].every((k) => vis.state(k) === V.SOLID) && [...r.triIds.subarray(r.nSolid)].every((k) => vis.state(k) === V.GHOST));
  ok(order, 'solid triangles come first in each buffer, see-through ones after (two draw groups)');
  const json = JSON.parse(JSON.stringify(vis.toJSON()));
  const vis2 = new V.Visibility(); vis2.load(json);
  ok(m.batches.every((b) => { const a = V.batchIndex(b, vis), c = V.batchIndex(b, vis2); return a.nSolid === c.nSolid && a.nGhost === c.nGhost; }), 'toJSON → load gives the same drawing (kept over a rebuild)');
  const v0 = vis.version;
  ok(vis.prune((k) => k !== K('W-102')) === 1 && !vis.hidden.has(K('W-102')) && vis.version > v0, 'prune forgets an element that is gone (after a delete)');
  vis.showAll();
  ok(vis.plain && m.batches.every((b) => V.batchIndex(b, vis).index === b.indices), 'Show all: back to the original buffers');

  console.log('== per-element edges, bounds');
  const edgesOf = (key) => m.batches.reduce((a, b) => { const e = V.batchEdges(b); const r = [...e.ids].indexOf(key); return a + (r >= 0 ? e.sn[r] : 0); }, 0);
  ok(edgesOf(K('W-102')) === 12, 'a plain box wall has its 12 edges (got ' + edgesOf(K('W-102')) + ')');
  ok(edgesOf(K('W-101')) > 12, 'the wall with the door opening has more (' + edgesOf(K('W-101')) + ')');
  vis.hide([K('W-102')]);
  const segs = (fn) => m.batches.reduce((a, b) => a + fn(V.edgeIndex(V.batchEdges(b), vis)), 0);
  const allSegs = m.batches.reduce((a, b) => a + V.batchEdges(b).positions.length / 6, 0);
  ok(segs((r) => r.nSolid) === allSegs - 12, 'a hidden element takes its edges with it');
  vis.isolate([K('S-201')], { ghost: true });
  ok(segs((r) => r.nSolid) === edgesOf(K('S-201')) && segs((r) => r.nGhost) === allSegs - 12 - edgesOf(K('S-201')), 'see-through edges are their own group');
  vis.showAll();
  const bb = V.boundsOf(m.batches, [K('W-102')]);
  const size = bb ? bb.max.map((x, i) => x - bb.min[i]).sort((a, b) => a - b).map((x) => Math.round(x * 1000) / 1000) : null;
  ok(size && size[0] === 0.2 && size[1] === 3 && size[2] === 6, 'boundsOf W-102: 0.2 × 3 × 6 m (got ' + JSON.stringify(size) + ')');
  ok(V.boundsOf(m.batches, [999999]) === null, 'boundsOf an element without geometry is null');
  ok(V.keysOf(m.batches).size === 12 && m.elements === 11 && m.spaces === 1, 'keysOf lists every element and space once (11 + 1)');

  console.log('== keys of a second model (federation)');
  const ifc2 = IfcModel.sharing(ifcm);
  const m2 = await quiet((b) => ifc2.load(b, () => {}, { keyBase: keyOf(3, 0) }))(await fixtureBytes({ rev: 'b' }));
  const k2 = m2.batches[0].elems.ids[0];
  ok(splitKey(k2).mi === 3 && splitKey(k2).id < KEY_SPAN && m2.classOf.has(splitKey(k2).id), 'keyBase 3 × 2^26: keys split back into (model 3, expressID)');
  ok(!runsOk(m2) && ifcm.modelID !== ifc2.modelID && ifc2.api === ifcm.api, 'the second model has its own runs, on the same engine, both open');
  ifc2.close();

  for (const f of publicSamples()) {
    const mm = await load(new Uint8Array(fs.readFileSync(f)));
    const r = runsOk(mm);
    const t0 = performance.now();
    const v = new V.Visibility(); v.hide([...V.keysOf(mm.batches)].filter((_, i) => i % 2));
    let drawn = 0; for (const b of mm.batches) drawn += V.batchIndex(b, v).nSolid;
    const ms = performance.now() - t0;
    ok(!r && drawn > 0 && drawn < mm.triangles, path.basename(f) + ': runs complete; half hidden → ' + drawn.toLocaleString('en-US') + ' of ' + mm.triangles.toLocaleString('en-US') + ' triangles in ' + ms.toFixed(1) + ' ms' + (r ? ' — ' + r : ''));
  }
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' visibility checks passed');
  return bad ? 1 : 0;
}

/** Lines a STEP file refers to that it does not define (an edit that left a dangling reference). → [ids] */
function danglingRefs(text) {
  const defined = new Set(), refs = new Set();
  for (const m of text.matchAll(/^#(\d+)=/gm)) defined.add(Number(m[1]));
  for (const line of text.split('\n')) {
    const eq = line.indexOf('=');
    if (!/^#\d+=/.test(line)) continue;
    const body = line.slice(eq + 1).replace(/'(?:[^']|'')*'/g, "''");
    for (const m of body.matchAll(/#(\d+)/g)) refs.add(Number(m[1]));
  }
  return [...refs].filter((r) => !defined.has(r));
}

async function elementsMode() {
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  const { FIXTURE } = await import(path.join(ROOT, 'tools/bimcraft-test/ifc-fixture.mjs'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const load = quiet((bytes) => ifcm.load(bytes, () => {}));
  const api = ifcm.api;
  const nameOf = (id) => String(api.GetLine(ifcm.modelID, id).Name?.value ?? '');
  const find = (m, name) => { for (const id of m.classOf.keys()) if (nameOf(id) === name) return id; return null; };
  const findAny = (name, type) => { const v = api.GetLineIDsWithType(ifcm.modelID, api.GetTypeCodeFromName(type), true); for (let i = 0; i < v.size(); i++) if (nameOf(v.get(i)) === name) return v.get(i); return null; };
  const tris = (m, id) => m.batches.reduce((a, b) => { const r = b.elems.ids.indexOf(id); return a + (r >= 0 ? b.elems.tn[r] : 0); }, 0);
  /** Save, check, reopen: → the reloaded model (the editor follows ifcm). */
  const roundTrip = async (ed, label) => {
    const bytes = ed.save();
    const text = new TextDecoder().decode(bytes);
    const d = danglingRefs(text);
    ok(d.length === 0, label + ': the saved file refers to no missing line' + (d.length ? ' (missing ' + d.slice(0, 5).map((x) => '#' + x).join(', ') + ')' : ''));
    const m = await load(bytes);
    ed.reindex();
    return { m, text };
  };
  const world = (id) => { const l = api.GetLine(ifcm.modelID, id, false); return api.GetWorldTransformMatrix(ifcm.modelID, l.ObjectPlacement.value); };
  const containerOf = (id) => { const v = api.GetLineIDsWithType(ifcm.modelID, WebIFC.IFCRELCONTAINEDINSPATIALSTRUCTURE); for (let i = 0; i < v.size(); i++) { const r = api.GetLine(ifcm.modelID, v.get(i)); if (r.RelatedElements.some((h) => h.value === id)) return r.RelatingStructure.value; } return null; };
  const { ids: liveIds } = await import(path.join(APP, 'ifc-util.js'));   // web-ifc keeps listing deleted lines
  const relsNaming = (id) => { let n = 0; for (const rid of liveIds(api, ifcm.modelID, 'IFCRELATIONSHIP', true)) { const t = JSON.stringify(api.GetLine(ifcm.modelID, rid, false)); if (new RegExp('"value":' + id + '[,}]').test(t)) n++; } return n; };

  console.log('== Delete');
  let m = await load(await fixtureBytes());
  let ed = new IfcEditor(WebIFC, ifcm);
  const n0 = m.elements;
  const w102 = find(m, 'W-102');
  const sharedBefore = relsNaming(find(m, 'W-101'));
  let r = ed.removeElements([w102], { label: 'W-102' });
  ok(r.removed.length === 1 && r.removed[0] === w102 && ed.changes.length === 1 && ed.changes[0].kind === 'remove', 'removeElements(W-102): one element, one change');
  ok(relsNaming(w102) === 0, 'no relationship names it any more (containment, shared property set, its own sets, type, material)');
  ok(relsNaming(find(m, 'W-101')) === sharedBefore, 'W-101 keeps every relationship it had (the shared Pset_WallCommon relation is kept for the others)');
  ({ m } = await roundTrip(ed, 'after deleting W-102'));
  ok(m.elements === n0 - 1 && find(m, 'W-102') === null, 'reopened: ' + m.elements + ' elements, W-102 gone');
  const p101 = await ifcm.properties(find(m, 'W-101'));
  ok(p101.sets.some((x) => x.name === 'Pset_WallCommon' && x.rows.some((rr) => rr.name === 'IsExternal' && rr.value === 'Yes')), 'W-101 still shows the shared Pset_WallCommon');
  ed.undo();
  ({ m } = await roundTrip(ed, 'after Undo'));
  ok(m.elements === n0 && find(m, 'W-102') === w102 && nameOf(w102) === 'W-102', 'Undo brings W-102 back with its own id');
  const p102 = await ifcm.properties(w102);
  ok(p102.typeName === 'Basic wall 200' && ['Pset_WallCommon', 'Fixture_Data', 'Qto_WallBaseQuantities'].every((n) => p102.sets.some((x) => x.name === n)) && containerOf(w102) === m.storeys[0].id, 'and with its type, property sets, quantities and storey');
  const rr2 = ed.redo();
  ({ m } = await roundTrip(ed, 'after Redo'));
  ok(rr2 && rr2.kind === 'remove' && find(m, 'W-102') === null, 'Redo deletes it again');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo again'));

  const door = find(m, 'D-101'), w101 = find(m, 'W-101');
  const t101 = tris(m, w101);
  r = ed.removeElements([door]);
  ok(r.removed.length === 2 && r.removed.includes(door), 'deleting the door takes the opening it filled with it (' + r.removed.length + ' lines)');
  ({ m } = await roundTrip(ed, 'after deleting the door'));
  ok(tris(m, w101) === 12 && t101 > 12, 'and the wall closes: W-101 is a plain box again (' + t101 + ' → ' + tris(m, w101) + ' triangles)');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));
  ok(tris(m, w101) === t101 && find(m, 'D-101') === door, 'Undo: door and opening back');

  r = ed.removeElements([w101]);
  ({ m } = await roundTrip(ed, 'after deleting W-101'));
  ok(r.removed.length === 2 && find(m, 'D-101') === door && containerOf(door) === m.storeys[0].id, 'deleting the wall takes its opening; the door stays, still on Level 1');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));

  const stair = findAny('ST-1', 'IFCSTAIR');
  r = ed.removeElements([stair]);
  ({ m } = await roundTrip(ed, 'after deleting the stair'));
  ok(r.removed.length === 3 && FIXTURE.flights.every((f) => find(m, f) === null), 'deleting the stair takes its two flights (an aggregate)');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));

  const space = findAny(FIXTURE.space.split(' ')[0], 'IFCSPACE');
  r = ed.removeElements([m.storeys[0].id, space]);
  ok(r.removed.length === 0 && r.refused.length === 2 && r.refused.every((x) => x.why === 'spatial') && ed.changes.length === 0, 'storeys and spaces are refused (spatial structure); nothing changes');

  r = ed.removeElements([find(m, 'W-103'), find(m, 'W-104'), find(m, 'F-101')]);
  ({ m } = await roundTrip(ed, 'after deleting three at once'));
  ok(r.removed.length === 3 && ed.changes.length === 1 && m.elements === n0 - 3, 'three elements in one change');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));
  ok(m.elements === n0, 'one Undo brings all three back');

  console.log('== Copy and paste');
  const at = (id) => { const w = world(id); return [w[12], w[13], w[14]].map((v) => Math.round(v)); };
  const w102b = find(m, 'W-102');
  let snap = ed.snapshot([w102b]);
  ok(snap.top.length === 1 && snap.elements.length === 1 && snap.storey === m.storeys[0].id, 'snapshot(W-102): one element, on Level 1');
  let p = ed.pasteElements(snap, { dx: 0, dy: 8000 }, { label: 'W-102' });
  ({ m } = await roundTrip(ed, 'after pasting W-102 8 m along Y'));
  const copy = p.ids[0];
  ok(nameOf(copy) === 'W-102' && api.GetLine(ifcm.modelID, copy).GlobalId.value !== api.GetLine(ifcm.modelID, w102b).GlobalId.value, 'the copy has the name and a new GlobalId');
  ok(JSON.stringify(at(copy)) === JSON.stringify([at(w102b)[0], at(w102b)[1] + 8000, at(w102b)[2]]), 'it sits 8000 mm along Y: ' + at(copy).join(', '));
  ok(tris(m, copy) === tris(m, w102b) && containerOf(copy) === m.storeys[0].id, 'same geometry (shared shape), on Level 1');
  const pc = await ifcm.properties(copy);
  ok(pc.typeName === 'Basic wall 200' && pc.sets.some((x) => x.name === 'Fixture_Data' && x.rows.some((q) => q.name === 'Cost' && q.value === '980')), 'same type and property values');
  const editRow = pc.sets.find((x) => x.name === 'Fixture_Data').rows.find((q) => q.name === 'Cost').edit;
  ed.setProperty(copy, editRow, '1');
  const orig = (await ifcm.properties(w102b)).sets.find((x) => x.name === 'Fixture_Data').rows.find((q) => q.name === 'Cost').value;
  ok(orig === '980', 'editing the copy\'s shared value leaves the original alone (copy-on-write): ' + orig);
  ed.undo(); ed.undo();
  ({ m } = await roundTrip(ed, 'Undo the edit and the paste'));
  ok(m.elements === n0, 'Undo takes the copy away');

  const l2 = m.storeys[1].id;
  p = ed.pasteElements(ed.snapshot([w102b]), { storey: l2, dx: 0, dy: 0 });
  ({ m } = await roundTrip(ed, 'after pasting onto Level 2'));
  ok(containerOf(p.ids[0]) === l2 && at(p.ids[0])[2] === at(w102b)[2] + 3000, 'pasted onto Level 2: contained there, 3000 mm higher');
  const plc = api.GetLine(ifcm.modelID, api.GetLine(ifcm.modelID, p.ids[0]).ObjectPlacement.value);
  ok(plc.PlacementRelTo.value === api.GetLine(ifcm.modelID, l2).ObjectPlacement.value, 'and placed relative to Level 2');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));

  const w0 = world(w102b);
  p = ed.pasteElements(ed.snapshot([w102b]), { rot: 90, about: [w0[12], w0[13]], dx: 0, dy: 0 });
  ({ m } = await roundTrip(ed, 'after a turned paste'));
  const w1 = world(p.ids[0]);
  ok(Math.abs(w1[0] - (-w0[1])) < 1e-6 && Math.abs(w1[1] - w0[0]) < 1e-6 && Math.abs(w1[12] - w0[12]) < 1e-6, 'turned 90° about its own origin: X axis (' + [w0[0], w0[1]].map((v) => v.toFixed(2)) + ') → (' + [w1[0], w1[1]].map((v) => v.toFixed(2)) + ')');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));

  snap = ed.snapshot([w101, door]);
  ok(snap.top.length === 2 && snap.elements.length === 3, 'wall + door: both on top, the opening comes along (3 lines)');
  p = ed.pasteElements(snap, { dx: 0, dy: -9000 });
  ({ m } = await roundTrip(ed, 'after pasting wall + door'));
  const [nw, nd] = p.ids;
  ok(tris(m, nw) === t101 && tris(m, nd) === tris(m, door), 'the copied wall has the copied opening cut in it, the door fills it');
  const dpl = api.GetLine(ifcm.modelID, api.GetLine(ifcm.modelID, nd).ObjectPlacement.value);
  const op = p.all.find((x) => x !== nw && x !== nd);
  ok(dpl.PlacementRelTo.value === api.GetLine(ifcm.modelID, op).ObjectPlacement.value, 'the copied door is placed relative to the copied opening, as the original');
  ok(at(nd)[1] === at(door)[1] - 9000, 'and moved with it');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));

  p = ed.pasteElements(ed.snapshot([stair]), { dx: -4000, dy: 0 });
  ({ m } = await roundTrip(ed, 'after pasting the stair'));
  const flights = p.all.filter((x) => x !== p.ids[0]);
  ok(flights.length === 2 && flights.every((f) => tris(m, f) > 0), 'the stair copy brings two flight copies with geometry');
  ed.undo(); ({ m } = await roundTrip(ed, 'Undo'));

  console.log('== Cut, then paste');
  snap = ed.snapshot([w101]);
  ed.removeElements([w101]);
  ({ m } = await roundTrip(ed, 'after Cut'));
  p = ed.pasteElements(snap, { dx: 500, dy: 0 });
  ({ m } = await roundTrip(ed, 'after pasting what was cut'));
  ok(tris(m, p.ids[0]) === t101 && find(m, 'W-101') === p.ids[0] && find(m, 'D-101') === door, 'the cut wall is pasted with its opening (its shape lines stayed in the file); the door is still there');
  ed.undo(); ed.undo(); ({ m } = await roundTrip(ed, 'Undo both'));
  ok(find(m, 'W-101') === w101 && m.elements === n0, 'two Undos: the original wall is back where it was');

  console.log('== Library placement copied with other elements');
  {
    const L = await import(path.join(APP, 'libitem.js'));
    const csv = L.itemsFromCsv(fs.readFileSync(path.join(ROOT, 'tools/library/seed.csv'), 'utf8'));
    const item = L.cleanItem(csv.items[0]);
    const pl = ed.placeItem(item, { storey: m.storeys[0].id, x: 2000, y: 2000, rot: 0, itemNumber: '7', quantity: 2, notes: 'n', library: 'file', sha256: 'a'.repeat(64), sourceFile: 'seed.csv' });
    ({ m } = await roundTrip(ed, 'after placing a library item'));
    p = ed.pasteElements(ed.snapshot([pl.id, w102b]), { dx: 0, dy: 1000 });
    ({ m } = await roundTrip(ed, 'after pasting it with a wall'));
    const rows = ed.placer().placements().map((x) => x.itemNumber + '×' + x.quantity).sort();
    ok(rows.join() === '7×2,8×2', 'the pasted placement gets its own item number (next free), same quantity: ' + rows.join(', '));
  }

  for (const f of publicSamples()) {
    console.log('== ' + path.basename(f));
    m = await load(new Uint8Array(fs.readFileSync(f)));
    ed = new IfcEditor(WebIFC, ifcm);
    const walls = [...m.classOf].filter(([, c]) => /^IfcWall/.test(c)).map(([id]) => id);
    const doors = [...m.classOf].filter(([, c]) => c === 'IfcDoor').map(([id]) => id);
    const n = m.elements;
    const wid = walls.find((w) => ed.elements().relations().voids.has(w)) || walls[0];
    r = ed.removeElements([wid]);
    let rt = await roundTrip(ed, path.basename(f) + ': delete a wall with openings');
    ok(rt.m.elements < n && !rt.m.classOf.has(wid), 'the wall is gone (' + r.removed.length + ' lines with its openings)');
    ed.undo(); rt = await roundTrip(ed, 'Undo');
    ok(rt.m.elements === n && rt.m.classOf.has(wid), 'Undo: ' + n + ' elements again');
    if (doors.length) {
      p = ed.pasteElements(ed.snapshot([doors[0]]), { dx: 1000, dy: 0 });
      rt = await roundTrip(ed, 'paste a door');
      ok(rt.m.elements === n + 1 && tris(rt.m, p.ids[0]) === tris(rt.m, doors[0]), 'a pasted door has the same geometry');
    }
  }
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' element edit checks passed');
  return bad ? 1 : 0;
}

async function treeMode() {
  const T = await import(path.join(APP, 'ifc-tree.js'));
  const V = await import(path.join(APP, 'ifc-vis.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const load = quiet((bytes) => ifcm.load(bytes, () => {}));
  const nameOf = (id) => String(ifcm.api.GetLine(ifcm.modelID, id).Name?.value ?? '');
  const desc = (n) => (n.kind === 'group' ? 'group ' + n.cls.replace(/^Ifc/, '') + ' (' + n.kids.length + ')' : n.cls.replace(/^Ifc/, '') + ' ' + nameOf(n.id));

  console.log('== the fixture');
  let m = await load(await fixtureBytes());
  let tree = T.buildTree(m, { className: (id) => ifcm.className(id) });
  const root = tree.root;
  ok(root && root.cls === 'IfcProject' && root.kind === 'spatial' && tree.loose === null, 'root: the project; nothing outside the spatial structure');
  const chain = []; for (let n = root; n && n.kind === 'spatial'; n = n.kids.find((k) => k.kind === 'spatial')) chain.push(n.cls);
  ok(chain.join(' → ') === 'IfcProject → IfcSite → IfcBuilding → IfcBuildingStorey → IfcSpace', 'levels: ' + chain.join(' → '));
  const bld = root.kids[0].kids[0];
  const [l1, l2] = bld.kids;
  ok(nameOf(l1.id) === 'Level 1' && nameOf(l2.id) === 'Level 2', 'the building holds Level 1 and Level 2, in file order');
  ok(l1.kids.map(desc).join(', ') === 'Space 101, group Wall (4), group Door (1), group Stair (1)', 'Level 1: the space first, then elements by class, the largest group first: ' + l1.kids.map(desc).join(', '));
  ok(l2.kids.map(desc).join(', ') === 'group Wall (2), group Slab (1)', 'Level 2: ' + l2.kids.map(desc).join(', '));
  const space = l1.kids[0];
  ok(space.kids.map(desc).join() === 'group Furniture (1)' && nameOf(space.kids[0].kids[0].id) === 'F-101', 'the space holds its desk (contained in the space, not the storey)');
  const stair = l1.kids.find((k) => k.cls === 'IfcStair').kids[0];
  ok(!stair.geo && stair.kids.length === 2 && stair.kids.every((f) => f.geo && f.cls === 'IfcStairFlight') && stair.size === 2, 'the stair (no body of its own) holds its two flights');
  ok(root.size === 11 && l1.size === 8 && l2.size === 3, 'sizes count elements with geometry: project 11, Level 1 8, Level 2 3');
  ok(T.leaves(stair).length === 2 && T.leaves(l1).length === 9 && T.leaves(root).length === 12, 'leaves: the stair 2, Level 1 8 + its space, all 11 + the space (hiding a storey hides its rooms)');
  const vis = new V.Visibility();
  const w101 = l1.kids.find((k) => k.cls === 'IfcWall').kids.find((w) => nameOf(w.id) === 'W-101');
  vis.hide([w101.key]);
  ok(T.checkState(l1, vis) === 'mixed' && T.checkState(w101.parent, vis) === 'mixed' && T.checkState(w101, vis) === 'off' && T.checkState(l2, vis) === 'on', 'one wall hidden: wall off, its group and storey mixed, Level 2 on');
  vis.hide(T.leaves(l2));
  ok(T.checkState(l2, vis) === 'off' && T.checkState(root, vis) === 'mixed', 'Level 2 hidden: off; the project mixed');
  vis.isolate([w101.key]);
  ok(T.shown(vis, w101.key) && !T.shown(vis, stair.kids[0].key), 'shown() follows isolation (rows dim)');
  const trail = T.pathTo(tree, stair.kids[1].key).map(desc);
  ok(trail.length === 7 && trail[4] === 'group Stair (1)' && trail[5] === 'Stair ST-1', 'pathTo a flight: ' + trail.join(' › '));
  ok(T.pathTo(tree, 999999).length === 0, 'pathTo an unknown key: []');

  console.log('== an element contained nowhere');
  m = await load(await fixtureBytes({ problems: true }));
  tree = T.buildTree(m, { className: (id) => ifcm.className(id) });
  ok(tree.loose && tree.loose.kids.length === 1 && tree.loose.kids[0].cls === 'IfcBuildingElementProxy' && T.pathTo(tree, tree.loose.kids[0].key).length === 2, 'the loose proxy is in its own group at the end');
  const counted = T.leaves(tree.root).length + T.leaves(tree.loose).length;
  ok(counted === m.elements + m.spaces, 'every element and space with geometry is in the tree once (' + counted + ' of ' + m.elements + ' + ' + m.spaces + ')');

  console.log('== keys of a second model');
  const ifc2 = IfcModel.sharing(ifcm);
  const m2 = await quiet((b) => ifc2.load(b, () => {}, { keyBase: 7 * 2 ** 26 }))(await fixtureBytes());
  const t2 = T.buildTree(m2, { className: (id) => ifc2.className(id) });
  ok(T.leaves(t2.root).every((k) => k >= 7 * 2 ** 26) && t2.byKey.get(7 * 2 ** 26 + m2.storeys[0].id)?.cls === 'IfcBuildingStorey', 'a federated model\'s tree uses its keys (keyBase 7 × 2^26)');
  ifc2.close();

  for (const f of publicSamples()) {
    const mm = await load(new Uint8Array(fs.readFileSync(f)));
    const t0 = performance.now();
    const tt = T.buildTree(mm, { className: (id) => ifcm.className(id) });
    const ms = performance.now() - t0;
    const n = T.leaves(tt.root).length + (tt.loose ? tt.loose.kids.length : 0);
    const seen = new Set([...T.leaves(tt.root), ...(tt.loose ? T.leaves(tt.loose) : [])]);
    ok(n === mm.elements + mm.spaces && seen.size === n, path.basename(f) + ': all ' + n + ' elements and spaces once, ' + (tt.loose ? tt.loose.kids.length + ' outside the structure, ' : '') + ms.toFixed(0) + ' ms');
  }
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' model tree checks passed');
  return bad ? 1 : 0;
}

async function colorMode() {
  const P = await import(path.join(APP, 'ifc-props.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const load = quiet((bytes) => ifcm.load(bytes, () => {}));

  console.log('== the property index on the fixture');
  const m = await load(await fixtureBytes());
  const ix = P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, m);
  const idOf = (name) => [...m.classOf.keys()].find((id) => ix.value('name', id) === name);
  const ids = Object.fromEntries(['W-101', 'W-201', 'F-101', 'S-201', 'D-101', 'ST-1 flight 1'].map((n) => [n, idOf(n)]));
  const f = (id) => ix.fields.find((x) => x.id === id);
  const firstSet = ix.fields.findIndex((x) => x.group);
  const setIds = ix.fields.slice(firstSet).map((x) => x.id);
  ok(ix.fields.slice(0, firstSet).map((x) => x.id).join() === 'cls,type,storey,material,name,tag,predefined,guid' && ix.fields.slice(firstSet).every((x) => x.group)
    && setIds.join() === [...setIds].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).join(), 'built-in fields first (no Object type: the fixture has none), then the sets\' fields in name order');
  ok(ix.value('cls', ids['W-101']) === 'IfcWall' && ix.value('storey', ids['F-101']) === 'Level 1' && ix.value('storey', ids['S-201']) === 'Level 2', 'Class and Storey (the desk in its space is on Level 1)');
  ok(ix.value('type', ids['W-101']) === 'Basic wall 200' && ix.value('type', ids['D-101']) === undefined, 'Type: the wall type\'s name; the door has none');
  ok(ix.value('material', ids['W-101']) === 'Concrete' && ix.value('material', ids['F-101']) === 'Oak' && ix.value('material', ids['S-201']) === 'Concrete', 'Material: Concrete walls and slab, an Oak desk');
  ok(ix.value('p:Fixture_Data.Cost', ids['W-101']) === 1250.5 && f('p:Fixture_Data.Cost').kind === 'number' && f('p:Fixture_Data.Cost').count === 6, 'Fixture_Data.Cost: a number on the 6 walls');
  ok(ix.value('p:Pset_WallCommon.IsExternal', ids['W-101']) === 'Yes' && ix.value('p:Pset_WallCommon.IsExternal', ids['W-201']) === 'No', 'a shared set (W-101) and an own one (W-201): Yes / No');
  ok(ix.value('p:Pset_WallCommon.FireRating', ids['W-201']) === 'EI60', 'a type set\'s value reaches every wall of the type (FireRating EI60)');
  ok(ix.value('p:Qto_WallBaseQuantities.Length', ids['W-101']) === 10000 && f('p:Qto_WallBaseQuantities.NetVolume').kind === 'number', 'quantity sets: Length 10000, NetVolume a number');
  ok(ix.keys.length === 11 && ix.value('guid', ids['W-101']) === '0BimCraftFixture000201', 'every element with geometry, GlobalId too');

  console.log('== colorBy');
  const byCls = P.colorBy(ix, 'cls');
  ok(byCls.kind === 'category' && byCls.legend.map((l) => l.label + ':' + l.count).join() === 'IfcWall:6,IfcStairFlight:2,IfcDoor:1,IfcFurniture:1,IfcSlab:1', 'Class: most common first, ties by name: ' + byCls.legend.map((l) => l.label + ':' + l.count).join(', '));
  ok(byCls.legend.every((l, i) => l.color === P.CATEGORICAL.light[i]) && byCls.colorOf.get(ids['W-101']) === P.CATEGORICAL.light[0], 'colors in the fixed categorical order; a wall gets the first');
  const dark = P.colorBy(ix, 'cls', { theme: 'dark' });
  ok(dark.legend.every((l, i) => l.color === P.CATEGORICAL.dark[i]) && dark.legend[0].color !== byCls.legend[0].color, 'the dark theme uses its own steps of the same hues');
  const cost = P.colorBy(ix, 'p:Fixture_Data.Cost');
  const none = cost.legend.find((l) => l.none);
  ok(cost.kind === 'category' && cost.legend.filter((l) => !l.none).length === 4 && none && none.count === 5 && none.color === P.NONE.light, 'Cost: 4 values in categories; the 5 elements without it in the pale "no value" color');
  ok(cost.colorOf.size === 11, 'every element has a color');
  const guid = P.colorBy(ix, 'guid');
  const other = guid.legend.find((l) => l.other);
  ok(guid.legend.filter((l) => !l.other && !l.none).length === 7 && other && other.other === 4 && other.count === 4 && other.color === P.OTHER.light, '11 GlobalIds: 7 colors, the other 4 fold into "4 other values"');
  const synth = { keyBase: 0, ids: Array.from({ length: 20 }, (_, i) => i + 1), values: () => new Map(Array.from({ length: 20 }, (_, i) => [i + 1, i * 5])) };
  const rng = P.colorBy(synth, 'x');
  ok(rng.kind === 'range' && rng.legend.length === 6 && rng.legend.reduce((a, l) => a + l.count, 0) === 20 && rng.legend.every((l, i) => l.color === P.SEQUENTIAL.light[i]) && rng.legend[5].keys.includes(20) && rng.legend[0].keys.includes(1), '20 numbers: 6 equal ranges on the sequential ramp, low to high, every element in one');
  ok(rng.legend[0].label === '0 – 15.8' && rng.legend[5].label === '79.2 – 95', 'range labels: ' + rng.legend.map((l) => l.label).join(' | '));

  console.log('== color schemes (0.5 WL.5)');
  const sc = P.schemeOf(byCls, f('cls'));
  ok(sc.format === 'bimcraft-color-scheme' && sc.version === 1 && sc.field.id === 'cls' && sc.values.map((v) => v.value).join() === 'IfcWall,IfcStairFlight,IfcDoor,IfcFurniture,IfcSlab' && sc.values[0].color === P.CATEGORICAL.light[0], 'schemeOf: field, kind, every value with its color');
  const rs = P.readScheme(JSON.stringify(sc));
  const same = P.applyScheme(ix, rs.scheme);
  ok(rs.ok && !same.missing && same.unmatched === 0 && [...byCls.colorOf].every(([k, c]) => same.colorOf.get(k) === c.toLowerCase()), 'saved → read → applied to the same model: every element the same color (colors kept in lower case)');
  // the scheme's colors win over the theme: a teammate's green doors stay green
  const doors = { ...rs.scheme, values: rs.scheme.values.map((v) => (v.value === 'IfcDoor' ? { ...v, color: '#00aa44' } : v)) };
  const painted = P.applyScheme(ix, doors);
  ok(painted.colorOf.get(ids['D-101']) === '#00aa44', 'a changed color is kept: the door is #00aa44');
  // another revision: W-203 is new, W-104 gone; a scheme that lacks a value folds it into "not in the scheme"
  const mb = await load(await fixtureBytes({ rev: 'b' }));
  const ixb = P.propertyIndex(WebIFC, ifcm.api, mb.modelID, mb);
  const part = { ...rs.scheme, values: rs.scheme.values.filter((v) => v.value !== 'IfcSlab' && v.value !== 'IfcFurniture').concat([{ value: 'IfcColumn', color: '#123456' }]) };
  const pb = P.applyScheme(ixb, part);
  const out = pb.legend.find((l) => l.outside), col = pb.legend.find((l) => l.label === 'IfcColumn');
  ok(pb.unmatched === 2 && out && out.count === 2 && out.color === P.OTHER.light.toLowerCase() && col && col.count === 0, 'revision b with a scheme lacking Slab and Furniture: those 2 values go gray as "not in the scheme"; IfcColumn stays listed with 0');
  const cs = P.applyScheme(ix, P.readScheme(P.schemeOf(cost, f('p:Fixture_Data.Cost'))).scheme);
  ok(cs.legend.filter((l) => !l.none).length === 4 && cs.colorOf.get(ids['W-101']) === cost.colorOf.get(ids['W-101']).toLowerCase(), 'a number field\'s values match as numbers (Cost 1250.5)');
  const rsc = P.schemeOf(rng, { id: 'x', label: 'X', group: 'Set', kind: 'number' });
  ok(rsc.kind === 'range' && rsc.ranges.length === 6 && rsc.ranges[0].from === 0 && rsc.ranges[5].to === 95, 'a range legend saves as ranges (from / to)');
  const wider = { ...synth, ids: [...synth.ids, 21], values: () => new Map([...synth.values(), [21, 500]]), fields: [{ id: 'x' }] };
  const ar = P.applyScheme(wider, P.readScheme(rsc).scheme);
  ok(ar.legend.slice(0, 6).every((l, i) => l.count === rng.legend[i].count) && ar.legend[6]?.outside && ar.legend[6].count === 1, 'applied to a model with a value past the last range: same bins, the outlier "not in the scheme"');
  const miss = P.applyScheme(ix, { ...rs.scheme, field: { ...rs.scheme.field, id: 'p:Nope.Nothing' } });
  ok(miss.missing && miss.colorOf.size === 11 && miss.legend.every((l) => l.none || !l.count), 'a field this model does not have: said (missing), every element "no value"');
  const bad1 = [P.readScheme('{'), P.readScheme({ format: 'x' }), P.readScheme({ ...sc, version: 2 }), P.readScheme({ ...sc, field: { id: '' } }),
    P.readScheme({ ...sc, values: [{ value: 'a', color: 'red' }] }), P.readScheme({ ...sc, values: [] }), P.readScheme({ ...sc, values: Array.from({ length: 501 }, (_, i) => ({ value: 'v' + i, color: '#000000' })) }),
    P.readScheme({ ...rsc, ranges: [{ from: 5, to: 1, color: '#000000' }] }), P.readScheme({ ...rsc, ranges: [{ from: 'x', to: 1, color: '#000000' }] })];
  ok(bad1.every((r) => !r.ok) && bad1.map((r) => r.error).join() === 'json,format,version,field,rows,rows,rows,rows,rows', 'refused: broken JSON, another format, version 2, no field, a color not #rrggbb, no rows, 501 rows, a backwards or text range');
  const dup = P.readScheme({ ...sc, values: [{ value: 'A', color: '#AABBCC' }, { value: 'A', color: '#000000' }, { value: 1, color: '#111111' }, { value: '1', color: '#222222' }], other: 'nope' });
  ok(dup.ok && dup.scheme.values.length === 3 && dup.scheme.values[0].color === '#aabbcc' && dup.scheme.other === P.OTHER.light, 'a repeated value keeps the first, number 1 and text "1" are different values, a bad Other color falls back');

  for (const file of publicSamples()) {
    const mm = await load(new Uint8Array(fs.readFileSync(file)));
    const t0 = performance.now();
    const pix = P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, mm);
    const ms = performance.now() - t0;
    const c = P.colorBy(pix, 'cls');
    ok(pix.fields.length > 10 && c.colorOf.size === mm.elements, path.basename(file) + ': ' + pix.fields.length + ' fields for ' + mm.elements + ' elements in ' + ms.toFixed(0) + ' ms; by class ' + c.legend.length + ' legend rows');
  }
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' color checks passed');
  return bad ? 1 : 0;
}

async function federationMode() {
  const { placementMatrix, apply4 } = await import(path.join(APP, 'ifc-util.js'));
  const { keyOf, splitKey } = await import(path.join(APP, 'ifc-model.js'));
  const V = await import(path.join(APP, 'ifc-vis.js'));
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const near = (a, b, tol = 1e-4) => Math.abs(a - b) <= tol;
  const A = await quiet(() => IfcModel.create(WebIFC, null))();
  const B = IfcModel.sharing(A), C2 = IfcModel.sharing(A);
  const ld = (im, bytes, mi) => quiet((b) => im.load(b, () => {}, { keyBase: keyOf(mi, 0) }))(bytes);
  /** World bounds of a model through its placement (8 corners of its local box). */
  const worldBox = (m, P) => {
    const bb = V.boundsOf(m.batches, V.keysOf(m.batches));
    const pts = [];
    for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) pts.push(apply4(P, x, y, z));
    return { min: [0, 1, 2].map((k) => Math.min(...pts.map((p) => p[k]))), max: [0, 1, 2].map((k) => Math.max(...pts.map((p) => p[k]))) };
  };

  console.log('== two models: the fixture, and the fixture with its site 100 m east');
  const ma = await ld(A, await fixtureBytes(), 0);
  const mb = await ld(B, await fixtureBytes({ shift: 100000 }), 1);
  const refC = [...A.api.GetCoordinationMatrix(ma.modelID)];
  const Pa = placementMatrix(refC, refC), Pb = placementMatrix(refC, [...B.api.GetCoordinationMatrix(mb.modelID)]);
  ok(Pa.every((v, i) => near(v, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1][i])), 'the first model stays where it is (identity)');
  const wa = worldBox(ma, Pa), wb = worldBox(mb, Pb);
  ok(near(wb.min[0] - wa.min[0], 100, 1e-3) && near(wb.min[1], wa.min[1], 1e-3) && near(wb.min[2], wa.min[2], 1e-3) && near(wb.max[0] - wa.max[0], 100, 1e-3),
    'the second lands 100 m along X, exactly (each was moved to the origin on load; the placement puts it back): ΔX ' + (wb.min[0] - wa.min[0]).toFixed(4));
  const Po = placementMatrix(refC, [...B.api.GetCoordinationMatrix(mb.modelID)], [0, 10, 2]);
  const wo = worldBox(mb, Po);
  ok(near(wo.min[0], wb.min[0], 1e-3) && near(wo.min[1] - wb.min[1], 2, 1e-3) && near(wo.min[2] - wb.min[2], -10, 1e-3), 'an offset of Y 10 m, Z 2 m: viewer Z −10, Y +2 (IFC Z is up)');
  const ka = V.keysOf(ma.batches), kb = V.keysOf(mb.batches);
  ok([...kb].every((k) => !ka.has(k) && splitKey(k).mi === 1) && ka.size === kb.size, 'keys never collide: model 1\'s keys split back to model 1 (' + kb.size + ' each)');

  console.log('== editing one model leaves the other alone');
  const edB = new IfcEditor(WebIFC, B);
  const w102 = [...mb.classOf.keys()].find((id) => B.api.GetLine(mb.modelID, id).Name?.value === 'W-102');
  edB.removeElements([w102]);
  const sb = new TextDecoder().decode(edB.save()), sa = new TextDecoder().decode(A.api.SaveModel(ma.modelID));
  ok(!/'W-102'/.test(sb) && /'W-102'/.test(sa), 'deleting W-102 in model 1 removes it from model 1\'s file only');
  const mb2 = await ld(C2, new TextEncoder().encode(sb), 1);
  ok(mb2.elements === mb.elements - 1 && danglingRefs(sb).length === 0, 'model 1 saves and reopens on its own (' + mb2.elements + ' elements, no missing references)');
  ok(ma.elements === 11 && A.modelID !== B.modelID && B.modelID !== C2.modelID, 'model 0 still has its 11 elements; three models open on one engine');

  const samples = publicSamples();
  if (samples.length >= 2) {
    console.log('== public samples together');
    const s0 = await ld(A, new Uint8Array(fs.readFileSync(samples[0])), 0);
    const s1 = await ld(B, new Uint8Array(fs.readFileSync(samples[1])), 2);
    const r0 = [...A.api.GetCoordinationMatrix(s0.modelID)], P1 = placementMatrix(r0, [...B.api.GetCoordinationMatrix(s1.modelID)]);
    const k0 = V.keysOf(s0.batches), k1 = V.keysOf(s1.batches);
    ok([...k1].every((k) => !k0.has(k)) && P1.every(Number.isFinite), path.basename(samples[0]) + ' + ' + path.basename(samples[1]) + ': ' + k0.size + ' + ' + k1.size + ' elements, no shared key, a finite placement');
  }
  A.close(); B.close(); C2.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' federation checks passed');
  return bad ? 1 : 0;
}

async function measureMode() {
  const M = await import(path.join(APP, 'measure.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const near = (a, b, tol = 1e-4) => Math.abs(a - b) <= tol;
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes());
  const key = (name) => [...m.classOf.keys()].find((id) => ifcm.api.GetLine(m.modelID, id).Name?.value === name);
  const where = (k) => { for (const b of m.batches) { const r = M.runOf(b, k); if (r >= 0) return { b, r }; } return null; };

  console.log('== faces and areas (W-102: 6 m × 3 m × 0.2 m, a plain box)');
  const { b, r } = where(key('W-102'));
  const areas = new Map();
  for (let t = b.elems.t0[r]; t < b.elems.t0[r] + b.elems.tn[r]; t++) { const f = M.faceRegion(b, r, t); areas.set(Math.round(f.area * 1000) / 1000, (areas.get(Math.round(f.area * 1000) / 1000) || 0) + 1); }
  const kinds = [...areas.keys()].sort((x, y) => x - y);
  ok(kinds.join() === '0.6,1.2,18', 'every triangle belongs to one of three face sizes: ends 0.6 m², top and bottom 1.2 m², sides 18 m² (' + kinds.join(', ') + ')');
  ok(areas.get(18) === 4 && areas.get(1.2) === 4 && areas.get(0.6) === 4, 'two triangles per face, both report the whole face (4 each)');
  const side = M.faceRegion(b, r, [...Array(b.elems.tn[r]).keys()].map((i) => b.elems.t0[r] + i).find((t) => near(M.faceRegion(b, r, t).area, 18, 1e-3)));
  ok(side.tris.length === 2 && near(Math.hypot(...side.normal), 1), 'a side face: 2 triangles, a unit normal');
  const w1 = where(key('W-101'));
  const big = Math.max(...[...Array(w1.b.elems.tn[w1.r]).keys()].map((i) => M.faceRegion(w1.b, w1.r, w1.b.elems.t0[w1.r] + i).area));
  ok(near(big, 30 - 2.1, 1e-3), 'W-101\'s face with the door opening: 10 × 3 m less the 1 × 2.1 m opening = 27.9 m² (' + big.toFixed(3) + ')');

  console.log('== feature edges and snapping');
  const edges = M.runEdges(b.positions, b.indices, b.elems.t0[r], b.elems.tn[r]);
  ok(edges.length / 6 === 12, 'W-102: 12 feature edges (no face diagonals)');
  const proj = (p) => [p[0] * 100, p[2] * 100];   // a plan on screen, 1 px = 1 cm
  const corners = []; for (let i = 0; i < edges.length; i += 3) corners.push([edges[i], edges[i + 1], edges[i + 2]]);
  const c0 = corners[0], s0 = proj(c0);
  const sv = M.snapTo(corners, edges, [s0[0] + 4, s0[1] - 3], proj);
  ok(sv && sv.kind === 'vertex' && near(proj(sv.point)[0], s0[0]) && near(proj(sv.point)[1], s0[1]), '5 px from a corner: snaps to the corner (top and bottom share the spot in plan)');
  const mid = [(edges[0] + edges[3]) / 2, (edges[1] + edges[4]) / 2, (edges[2] + edges[5]) / 2], sm = proj(mid);
  const se = M.snapTo(corners, edges, [sm[0] + 3, sm[1] + 3], proj);
  ok(se && (se.kind === 'edge' || se.kind === 'vertex'), 'near the middle of an edge: snaps to the edge (' + se?.kind + ')');
  ok(M.snapTo(corners, edges, [1e6, 1e6], proj) === null, 'far from everything: no snap (the face point is used)');
  const behind = M.snapTo(corners, edges, s0, () => null);
  ok(behind === null, 'points behind the camera never snap');

  console.log('== distances in IFC axes');
  ok(near(M.distance([0, 0, 0], [3, 4, 0]), 5), 'distance 3-4-5');
  const d = M.ifcDelta([0, 0, 0], [1, 2, -3]);
  ok(d[0] === 1 && d[1] === 3 && d[2] === 2, 'viewer (x, y up, z) → IFC ΔX = Δx, ΔY = −Δz, ΔZ = Δy: ' + d.join(', '));
  const U = await import(path.join(APP, 'model-units.js'));
  U.setDisplayUnits('m');
  ok(M.fmtLength(3.25) === '3.25 m' && M.fmtArea(1.2) === '1.20 m²', 'metric measure formats');
  U.setDisplayUnits('ftdec');
  ok(M.fmtLength(3.048) === '10 ft' && M.axisSnap([0, 0, 0], [2, 0.02, 0], [2, 0], (p) => [p[0], p[1]])[1] === 0, 'decimal feet and orthogonal snap');
  U.setDisplayUnits('ftin');
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' measure checks passed');
  return bad ? 1 : 0;
}

async function bcfMode() {
  const B = await import(path.join(APP, 'bcf.js'));
  const zlib = await import('node:zlib');
  const os = await import('node:os');
  const { execFileSync } = await import('node:child_process');
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const near = (a, b, tol = 1e-6) => a.every((v, i) => Math.abs(v - b[i]) <= tol);
  const png = Uint8Array.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0]);

  console.log('== cameras: viewer (Y up, moved by the coordination matrix) ↔ IFC (Z up, metres)');
  const C = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -100, -2, 50, 1];   // web-ifc moved the model by (−100, −2, 50)
  const vp = [3, 4, 5];
  const ip = B.toIfcPoint(C, vp);
  ok(near(ip, [103, -(5 - 50), 4 + 2]), 'viewer (3, 4, 5) → IFC (103, 45, 6): the move undone, Y up → Z up (' + ip + ')');
  ok(near(B.fromIfcPoint(C, ip), vp), 'and back');
  ok(near(B.toIfcDir(C, [0, 0, -1]), [0, 1, 0]) && near(B.fromIfcDir(C, [0, 0, 1]), [0, 1, 0]), 'directions: viewer −Z is IFC +Y; IFC up is viewer +Y');

  console.log('== write → validate → read');
  const g = () => B.newGuid();
  const topics = [
    { guid: g(), title: 'Duct through beam <B-12> & "column"', status: 'Open', type: 'Issue', author: 'tester@example.com', created: '2026-10-12T10:00:00Z', description: 'Line 1\nLine 2',
      comments: [], viewpoints: [{ guid: g(), camera: { kind: 'perspective', viewPoint: [10, -5, 3], direction: [0, 1, 0], up: [0, 0, 1], fov: 45 },
        selection: ['0BimCraftFixture000201'], visibility: { defaultVisible: true, exceptions: ['0BimCraftFixture000202'] }, clipping: [{ location: [0, 0, 1.5], direction: [0, 0, 1] }], snapshot: png }] },
    { guid: g(), title: 'Isolated', status: 'Closed', type: '', author: 'a', created: '2026-10-12T11:00:00Z', description: '', comments: [],
      viewpoints: [{ guid: g(), camera: { kind: 'orthogonal', viewPoint: [0, 0, 50], direction: [0, 0, -1], up: [0, 1, 0], scale: 20 }, selection: [], visibility: { defaultVisible: false, exceptions: ['0BimCraftFixture000303'] }, clipping: [], snapshot: null }] },
  ];
  topics[0].comments.push({ guid: g(), date: '2026-10-12T10:05:00Z', author: 'tester@example.com', text: 'Seen on Level 1', viewpoint: topics[0].viewpoints[0].guid });
  const bytes = await B.writeBcf({ topics, file: { name: 'bimcraft-fixture.ifc', ifcProject: '0BimCraftFixture000001', date: '2026-10-12T00:00:00Z' } });
  const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'bimcraft-bcf-')), 'issues.bcf');
  fs.writeFileSync(tmp, bytes);
  let unz = '';
  try { unz = execFileSync('unzip', ['-t', tmp], { encoding: 'utf8' }); } catch (e) { unz = e.stdout || ''; }
  ok(/No errors detected/.test(unz), 'unzip -t: no errors');
  const py = path.join(ROOT, 'tools/markupcraft-test/venv/bin/python'), checker = path.join(ROOT, 'tools/markupcraft-test/bcf_check.py');
  if (fs.existsSync(py) && fs.existsSync(checker)) {
    let res;
    try { res = JSON.parse(execFileSync(py, [checker, tmp], { encoding: 'utf8' })); } catch (e) { res = JSON.parse(e.stdout || '{}'); }
    ok(res.ok && res.topics === 2, 'valid against the buildingSMART BCF 2.1 schemas (markup, visinfo, version)' + (res.ok ? '' : ': ' + (res.errors || []).slice(0, 3).join(' | ')));
  } else console.log('  (skipped: the BCF schema check needs tools/markupcraft-test/venv with lxml)');
  const back = await B.readBcf(bytes);
  const t0 = back.topics.find((t) => t.guid === topics[0].guid), v0 = t0?.viewpoints[0];
  ok(back.version === '2.1' && back.topics.length === 2 && back.notes.length === 0, 'read back: version 2.1, 2 topics, no notes');
  ok(t0 && t0.title === topics[0].title && t0.description === 'Line 1\nLine 2' && t0.status === 'Open' && t0.comments[0].text === 'Seen on Level 1' && t0.comments[0].viewpoint === v0.guid, 'title with < & " kept, description, status, the comment and its viewpoint');
  ok(v0 && near(v0.camera.viewPoint, [10, -5, 3]) && v0.camera.fov === 45 && v0.selection.join() === '0BimCraftFixture000201' && !v0.visibility.defaultVisible === false && v0.visibility.exceptions.join() === '0BimCraftFixture000202', 'the camera, the selection and a hidden element come back');
  ok(v0.clipping.length === 1 && near(v0.clipping[0].location, [0, 0, 1.5]) && v0.snapshot && v0.snapshot[1] === 0x50, 'the clipping plane and the snapshot come back');
  const t1 = back.topics.find((t) => t.guid === topics[1].guid);
  ok(t1.viewpoints[0].camera.kind === 'orthogonal' && t1.viewpoints[0].camera.scale === 20 && t1.viewpoints[0].visibility.defaultVisible === false, 'an orthogonal camera and "everything hidden but…" come back');

  console.log('== a deflated zip (as other programs write them), and refusals');
  const files = await B.unzip(bytes);
  const defl = [];
  let off = 0; const parts = [], central = [];
  const u16 = (v) => Buffer.from([v & 255, v >> 8 & 255]), u32 = (v) => { const b = Buffer.alloc(4); b.writeUInt32LE(v >>> 0); return b; };
  for (const [name, data] of files) {
    const c = zlib.deflateRawSync(data), n = Buffer.from(name), crc = B.crc32(data);
    const local = Buffer.concat([u32(0x04034b50), u16(20), u16(0), u16(8), u16(0), u16(0), u32(crc), u32(c.length), u32(data.length), u16(n.length), u16(0), n, c]);
    central.push(Buffer.concat([u32(0x02014b50), u16(20), u16(20), u16(0), u16(8), u16(0), u16(0), u32(crc), u32(c.length), u32(data.length), u16(n.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(off), n]));
    parts.push(local); off += local.length; defl.push(name);
  }
  const cd = Buffer.concat(central);
  const deflated = Buffer.concat([...parts, cd, u32(0x06054b50), u16(0), u16(0), u16(files.size), u16(files.size), u32(cd.length), u32(off), u16(0)]);
  const back2 = await B.readBcf(new Uint8Array(deflated));
  ok(back2.topics.length === 2 && back2.topics.find((t) => t.guid === topics[0].guid).viewpoints[0].selection.length === 1, 'a deflated BCF reads the same (' + defl.length + ' entries)');
  let err = '';
  try { await B.readBcf(new Uint8Array([1, 2, 3])); } catch (e) { err = e.message; }
  ok(err === 'not a zip', 'a file that is not a zip is refused: ' + err);
  let threw = ''; try { B.parseXml('<!DOCTYPE x [<!ENTITY a "aaaa">]><x>&a;</x>'); } catch (e) { threw = e.message; }
  ok(/DTD/.test(threw), 'DTDs (and so entity expansion) are refused: ' + threw);
  const evil = B.zip([{ name: 'bcf.version', data: new TextEncoder().encode('<Version VersionId="2.1"/>') }, { name: 'x/markup.bcf', data: new TextEncoder().encode('<Markup><Topic Guid="x"><Title>t</Title></Topic><Viewpoints Guid="v"><Viewpoint>../../etc/passwd</Viewpoint></Viewpoints></Markup>') }]);
  const r3 = await B.readBcf(evil);
  ok(r3.topics.length === 1 && r3.topics[0].viewpoints.length === 0, 'a viewpoint path with .. is never followed');
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' BCF checks passed');
  return bad ? 1 : 0;
}

async function findMode() {
  const P = await import(path.join(APP, 'ifc-props.js'));
  const F = await import(path.join(APP, 'ifc-find.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes());
  const ix = P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, m);
  const names = (keys) => keys.map((k) => ix.value('name', k)).sort().join(', ');
  const f = (rules, mode = 'all') => names(F.find(ix, { rules, mode }));
  console.log('== rules on the fixture');
  ok(f([{ field: 'cls', op: 'is', value: 'ifcwall' }]) === 'W-101, W-102, W-103, W-104, W-201, W-202', 'Class is "ifcwall" (case does not matter): the 6 walls');
  ok(f([{ field: 'name', op: 'starts', value: 'W-1' }]) === 'W-101, W-102, W-103, W-104', 'Name starts with W-1: Level 1\'s walls');
  ok(f([{ field: 'p:Fixture_Data.Cost', op: 'gt', value: '1000' }]) === 'W-101, W-103, W-201', 'Cost is more than 1000 (a number against a number)');
  ok(f([{ field: 'p:Fixture_Data.Cost', op: 'lte', value: '980' }]) === 'W-102, W-104, W-202', 'Cost is at most 980');
  ok(f([{ field: 'p:Pset_WallCommon.IsExternal', op: 'is', value: 'yes' }]) === 'W-101, W-102, W-103, W-104', 'IsExternal is yes (a shared set)');
  ok(f([{ field: 'p:Fixture_Data.Zone', op: 'hasnot' }, { field: 'cls', op: 'is', value: 'IfcWall' }]) === 'W-201, W-202', 'every rule: walls without a Zone');
  ok(f([{ field: 'storey', op: 'is', value: 'Level 2' }, { field: 'material', op: 'is', value: 'Oak' }], 'any') === 'F-101, S-201, W-201, W-202', 'any rule: on Level 2, or made of Oak');
  ok(f([{ field: 'p:Qto_WallBaseQuantities.Length', op: 'is', value: '6000' }]) === 'W-102, W-104, W-202', 'a quantity typed as "6000" matches 6000 (two on Level 1, one on Level 2)');
  ok(f([{ field: 'type', op: 'contains', value: 'wall 2' }]) === 'W-101, W-102, W-103, W-104, W-201, W-202' && f([{ field: 'type', op: 'notcontains', value: 'wall' }]).split(', ').length === 5, 'contains / does not contain (the type name)');
  ok(f([{ field: 'p:Nope.Missing', op: 'is', value: 'x' }]) === '' && F.find(ix, { rules: [{ field: 'p:Nope.Missing', op: 'hasnot' }] }).length === 11, 'a field nobody has: "is" finds nothing, "has no value" finds all 11');
  ok(F.find(ix, { rules: [{ field: 'cls', op: 'is', value: '' }] }).length === 0 && F.find(ix, { rules: [] }).length === 0, 'a rule without its value, or no rule: nothing');
  console.log('== search sets from storage (untrusted)');
  const sets = F.cleanSets(JSON.stringify([
    { name: ' External walls ', mode: 'all', rules: [{ field: 'p:Pset_WallCommon.IsExternal', op: 'is', value: 'Yes' }] },
    { name: 'Bad op', rules: [{ field: 'cls', op: 'eval', value: 'x' }] },
    { name: '', rules: [{ field: 'cls', op: 'is', value: 'x' }] },
    { name: 'Object value', rules: [{ field: 'cls', op: 'is', value: { a: 1 } }] },
    { name: 'x'.repeat(500), mode: 'whatever', rules: [{ field: 'cls', op: 'has' }] }, 42, null]));
  ok(sets.length === 2 && sets[0].name === 'External walls' && sets[1].name.length === 80 && sets[1].mode === 'all', 'kept: the good set (name trimmed) and a long one cut to 80 characters; dropped: bad operator, no name, an object value, junk');
  ok(F.cleanSets('{not json').length === 0 && F.cleanSets('{"a":1}').length === 0, 'unreadable or not a list: no sets');
  ok(F.suggestions(ix, 'cls')[0] === 'IfcWall', 'value suggestions: the most common first');
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' find checks passed');
  return bad ? 1 : 0;
}

async function agentMode() {
  const P = await import(path.join(APP, 'ifc-props.js'));
  const A = await import(path.join(APP, 'bim-agent.js'));
  const { createDispatcher } = await import(path.join(APP, 'host.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes());
  let ix = P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, m);
  const vis = [];
  const app = {
    index: () => ix, name: () => 'bimcraft-fixture.ifc',
    properties: (k) => ifcm.properties(k - ix.keyBase),
    visibility: (how, keys) => { vis.push([how, keys.length]); return { hidden: how === 'hide' ? keys.length : 0 }; },
  };
  let allowed = ['read'];
  const d = createDispatcher({ server: { name: 'bimcraft', title: 'BimCraft', version: 'test' }, allowed: () => allowed });
  for (const def of A.bimTools(app)) d.tool(def);
  const call = async (name, a) => { const r = await d.call(name, a); return { r, v: r.structuredContent, text: r.content?.[0]?.text || '' }; };
  const names = (els) => els.map((e) => e.name).sort().join(', ');
  console.log('== the tools and their permissions');
  ok(d.list().map((t) => t.name).sort().join() === 'element_properties,elements_find', 'with read allowed: elements_find and element_properties are listed');
  allowed = ['read', 'edit'];
  ok(d.list().length === 3 && d.list().find((t) => t.name === 'elements_isolate')?.annotations?.readOnlyHint === false, 'with edit: elements_isolate too (not read-only)');
  allowed = ['read'];
  let x = await call('elements_isolate', { how: 'isolate', class: 'IfcWall' });
  ok(x.r.isError && /edit permission/.test(x.text) && vis.length === 0, 'elements_isolate is refused without edit, and nothing changes: ' + x.text.slice(0, 60));
  console.log('== elements_find');
  x = await call('elements_find', { class: 'ifcwall' });
  ok(x.v.total === 6 && names(x.v.elements) === 'W-101, W-102, W-103, W-104, W-201, W-202' && x.v.model === 'bimcraft-fixture.ifc', 'class IfcWall (any case): the 6 walls');
  const w = x.v.elements.find((e) => e.name === 'W-101');
  ok(Number.isInteger(w.id) && /^[0-9A-Za-z_$]{22}$/.test(w.guid) && w.storey === 'Level 1' && w.class === 'IfcWall', 'each element: id, guid, class, name, storey, type (' + JSON.stringify(w).slice(0, 90) + ')');
  x = await call('elements_find', { class: 'IfcWall', storey: 'Level 2' });
  ok(names(x.v.elements) === 'W-201, W-202', 'class and storey together: Level 2\'s walls');
  x = await call('elements_find', { property: { name: 'IsExternal', equals: 'yes' } });
  ok(names(x.v.elements) === 'W-101, W-102, W-103, W-104', 'a property by name, without its set: IsExternal is yes');
  x = await call('elements_find', { property: { set: 'Fixture_Data', name: 'Cost' }, rules: [{ field: 'p:Fixture_Data.Cost', op: 'gt', value: '1000' }] });
  ok(names(x.v.elements) === 'W-101, W-103, W-201', 'a property that is there, and a Find rule (Cost more than 1000)');
  x = await call('elements_find', { storey: 'Level 2', rules: [{ field: 'material', op: 'is', value: 'Oak' }], mode: 'any' });
  ok(names(x.v.elements) === 'F-101, S-201, W-201, W-202', 'mode any: on Level 2, or made of Oak (' + names(x.v.elements) + ')');
  x = await call('elements_find', { offset: 2, limit: 3 });
  ok(x.v.total === 11 && x.v.offset === 2 && x.v.elements.length === 3, 'no filter: every element, paged (offset 2, limit 3 of 11)');
  x = await call('elements_find', { limit: 1000 });
  ok(x.r.isError && /Invalid arguments/.test(x.text), 'a limit over 500 is refused by the schema');
  x = await call('elements_find', { name: 'no such thing' });
  ok(!x.r.isError && x.v.total === 0, 'no match: total 0, not an error');
  console.log('== elements_isolate (edit: visibility only)');
  allowed = ['read', 'edit'];
  x = await call('elements_isolate', { how: 'ghost', class: 'IfcWall', storey: 'Level 1' });
  ok(!x.r.isError && x.v.elements === 4 && vis.at(-1).join() === 'ghost,4', 'ghost Level 1\'s walls: the app gets 4 keys');
  x = await call('elements_isolate', { how: 'isolate', ids: [w.id, 99999999] });
  ok(x.r.isError && /99999999/.test(x.text) && vis.length === 1, 'an unknown id is refused, and nothing changes');
  x = await call('elements_isolate', { how: 'hide', ids: [w.id] });
  ok(x.v.hidden === 1 && vis.at(-1).join() === 'hide,1', 'hide one by id');
  x = await call('elements_isolate', { how: 'show_all' });
  ok(x.v.elements === 11 && x.v.hidden === 0 && vis.at(-1)[0] === 'show_all', 'show_all needs no ids');
  x = await call('elements_isolate', { how: 'isolate' });
  ok(x.r.isError && /Say which elements/.test(x.text), 'isolate with no ids and no filter is refused');
  console.log('== element_properties');
  x = await call('element_properties', { id: w.id });
  const cost = x.v.sets.find((s) => s.name === 'Fixture_Data')?.properties.find((p) => p.name === 'Cost');
  ok(x.v.name === 'W-101' && x.v.class === 'IfcWall' && x.v.storey === 'Level 1' && cost && Number(String(cost.value).replace(/[^0-9.]/g, '')) > 1000, 'by id: W-101 with its sets (Fixture_Data Cost ' + cost?.value + ')');
  ok(x.v.sets.some((s) => s.properties.some((p) => p.name === 'Length')), 'quantity sets are there too');
  const byGuid = await call('element_properties', { guid: w.guid });
  ok(byGuid.v.id === w.id, 'by GlobalId: the same element');
  x = await call('element_properties', { id: 12345678 });
  ok(x.r.isError && /No element 12345678/.test(x.text), 'an unknown id: an error result that says so');
  ix = null;
  x = await call('elements_find', {});
  ok(x.r.isError && /No IFC model is open/.test(x.text), 'with no model open: every tool says to open one');
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' assistant tool checks passed');
  return bad ? 1 : 0;
}

async function clashMode() {
  const K = await import(path.join(APP, 'clash.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  console.log('== triangle pairs');
  const T = (...v) => Float32Array.from(v);
  const flat = T(0, 0, 0, 2, 0, 0, 0, 2, 0);
  ok(K.triTri(flat, 0, T(0.5, 0.5, -1, 0.5, 0.5, 1, 1.5, 0.2, 0), 0) !== null, 'a triangle through another crosses it');
  ok(K.triTri(flat, 0, T(0.5, 0.5, 0.1, 1.5, 0.5, 0.1, 0.5, 1.5, 0.1), 0) === null, 'a parallel one just above does not');
  ok(K.triTri(flat, 0, T(0.2, 0.2, 0, 1, 0.2, 0, 0.2, 1, 0), 0) === null, 'a triangle lying in the same plane only touches: not a clash');
  ok(K.triTri(flat, 0, T(3, 3, -1, 3, 3, 1, 4, 3, 0), 0) === null, 'one far off does not');

  console.log('== the fixture: walls against everything');
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes());
  const nameOf = (k) => String(ifcm.api.GetLine(m.modelID, k).Name?.value);
  const keys = [...m.classOf.keys()], walls = keys.filter((k) => m.classOf.get(k) === 'IfcWall');
  const A = K.elementsOf(m.batches, walls), B = K.elementsOf(m.batches, keys);
  const t0 = performance.now();
  const res = K.clashes(A, B, { tolerance: 0.01 });
  const ms = performance.now() - t0;
  const pairs = res.map((c) => [nameOf(c.a), nameOf(c.b)].sort().join(' × ')).sort();
  console.log('    ' + pairs.join(', '));
  ok(['W-101 × W-102', 'W-102 × W-103', 'W-103 × W-104', 'W-101 × W-104', 'W-201 × W-202'].every((p) => pairs.includes(p)), 'the walls\' corners clash where they overlap (L1 four, L2 one)');
  ok(['W-101', 'W-102', 'W-103', 'W-104'].every((w) => pairs.includes(['S-201', w].sort().join(' × '))), 'Level 1\'s walls run 200 mm into the Level 2 slab');
  ok(!pairs.some((p) => /D-101|F-101/.test(p)), 'the door in its opening and the desk in the room clash with nothing');
  ok(!pairs.some((p) => /W-20[12] × S-201|S-201 × W-20[12]/.test(p)), 'Level 2\'s walls only stand on the slab (touching is not a clash)');
  ok(new Set(pairs).size === pairs.length, 'each pair once, though walls are in both sets (' + pairs.length + ' clashes, ' + ms.toFixed(0) + ' ms)');
  const one = res.find((c) => [nameOf(c.a), nameOf(c.b)].sort().join() === 'S-201,W-101');
  ok(one && Math.abs(one.depth - 0.1) < 1e-3 && [one.a, one.b].every((k) => { const e = B.find((x) => x.key === k); return one.point.every((v, i) => v >= e.box[i] - 1e-6 && v <= e.box[i + 3] + 1e-6); }), 'the wall into the slab: boxes overlap 0.100 m at the least (the wall\'s half-thickness over the slab\'s edge), a point on the crossing, inside both');
  ok(K.clashes(A, B, { tolerance: 0.15 }).length === 0 && K.clashes(A, B, { tolerance: 0.05 }).length === res.length, 'tolerance 0.15 m drops them all (each overlaps 0.1 m), 0.05 m keeps them all');
  ok(K.clashes(A, K.elementsOf(m.batches, keys.filter((k) => m.classOf.get(k) === 'IfcFurniture'))).length === 0, 'walls against the furniture: none');
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' clash checks passed');
  return bad ? 1 : 0;
}

async function checksMode() {
  const P = await import(path.join(APP, 'ifc-props.js'));
  const Q = await import(path.join(APP, 'ifc-checks.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const load = async (o) => { const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes(o)); return { m, ix: P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, m) }; };
  const nm = (ix, keys) => keys.map((k) => ix.value('name', k)).sort().join(', ');
  console.log('== the clean fixture');
  let { m, ix } = await load();
  let r = Q.runChecks(ix, m, { required: [{ cls: '', field: 'name' }, { cls: 'IfcWall', field: 'p:Fixture_Data.Cost' }] });
  ok(r.map((c) => c.id + ':' + c.count).join() === 'required:0,guid:0,storey:0,stacked:0', 'nothing to report: ' + r.map((c) => c.id + ' ' + c.count).join(', '));
  console.log('== the fixture with problems');
  ({ m, ix } = await load({ problems: true }));
  r = Q.runChecks(ix, m, { required: [{ cls: '', field: 'name' }, { cls: 'IfcWall', field: 'p:Fixture_Data.Cost' }] });
  const by = Object.fromEntries(r.map((c) => [c.id, c]));
  ok(by.required.groups.length === 1 && nm(ix, by.required.groups[0].keys) === 'W-105 bare', 'required: the wall without Fixture_Data.Cost (every element has a name)');
  ok(by.guid.groups.length === 1 && by.guid.groups[0].label === '0BimCraftFixture000202' && nm(ix, by.guid.groups[0].keys) === 'W-102, W-102 copy', 'GlobalIds: W-102 and its copy share one');
  ok(nm(ix, by.storey.groups[0]?.keys || []) === 'Loose proxy', 'no storey: the proxy contained nowhere (the desk in its space is on a storey)');
  ok(by.stacked.groups.length === 1 && nm(ix, by.stacked.groups[0].keys) === 'W-103, W-103', 'stacked: the copy of W-103 on top of it');
  ok(Q.runChecks(ix, m, { required: [{ cls: 'IfcDoor', field: 'p:Fixture_Data.Cost' }] })[0].count === 1, 'a rule for one class looks at that class only (the door has no Cost)');
  ok(JSON.stringify(Q.cleanRules('[{"cls":"IfcWall","field":"p:A.B"},{"field":""},{"cls":7,"field":"x"},"junk"]')) === '[{"cls":"IfcWall","field":"p:A.B"}]' && Q.cleanRules('nope') === null, 'saved rules from storage: only well-formed ones');
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' model check checks passed');
  return bad ? 1 : 0;
}

async function qtoMode() {
  const P = await import(path.join(APP, 'ifc-props.js'));
  const Q = await import(path.join(APP, 'ifc-qto.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes());
  const ix = P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, m);
  const L = 'p:Qto_WallBaseQuantities.Length', A = 'p:Qto_WallBaseQuantities.NetSideArea', C = 'p:Fixture_Data.Cost';
  // what the fixture should add up to, read straight from the index
  const walls = ix.ids.filter((id) => ix.value('cls', id) === 'IfcWall');
  const sumOf = (f, ids) => ids.reduce((a, id) => a + (ix.value(f, id) || 0), 0);
  console.log('== by storey, walls');
  let r = Q.totals(ix, { keys: walls.map((id) => ix.keyBase + id), groupBy: ['storey'], sum: [L, A] });
  ok(r.rows.map((x) => x.values[0] + ':' + x.count).join() === 'Level 1:4,Level 2:2', 'walls by storey: Level 1 four, Level 2 two (' + r.rows.map((x) => x.values[0] + ' ' + x.count).join(', ') + ')');
  const l1 = walls.filter((id) => ix.value('storey', id) === 'Level 1');
  ok(Math.abs(r.rows[0].sums[0] - sumOf(L, l1)) < 1e-9 && r.rows[0].sums[0] > 0, 'Level 1 wall length = the sum of its walls\' Qto lengths (' + r.rows[0].sums[0] + ')');
  ok(Math.abs(r.total.sums[1] - sumOf(A, walls)) < 1e-9 && r.total.count === walls.length, 'the total row adds every wall\'s net side area (' + r.total.sums[1] + ')');
  console.log('== by class, everything');
  r = Q.totals(ix, { groupBy: ['cls'], sum: [L] });
  const door = r.rows.find((x) => x.values[0] === 'IfcDoor');
  ok(door && door.count === 1 && door.counted[0] === 0 && door.sums[0] === 0, 'a door has no wall length: counted, sum 0, left out 1');
  ok(r.total.count === ix.ids.length, 'every element with a shape is counted once (' + r.total.count + ')');
  console.log('== two group fields, a property');
  r = Q.totals(ix, { groupBy: ['cls', 'p:Fixture_Data.Zone'], sum: [C] });
  const zones = r.rows.filter((x) => x.values[0] === 'IfcWall').map((x) => x.values[1]);
  ok(zones.length >= 2 && zones[zones.length - 1] === '', 'walls split by Zone, the walls with none last (' + JSON.stringify(zones) + ')');
  ok(Math.abs(r.total.sums[0] - sumOf(C, walls)) < 1e-6, 'Cost totals the walls\' costs');
  console.log('== CSV');
  const csv = Q.totalsCsv(Q.totals(ix, { groupBy: ['cls'], sum: [L] }), { label: (f) => f === 'cls' ? 'Class' : f.split('.').pop() });
  const lines = csv.trim().split('\r\n');
  ok(lines[0] === 'Class,Count,Length,Length (left out)', 'header: groups, Count, the sum, and "left out" since some elements have no length');
  ok(/^Total,\d+,[\d.]+,\d+$/.test(lines[lines.length - 1]), 'a total row: ' + lines[lines.length - 1]);
  const evil = Q.totalsCsv({ groupBy: ['name'], sum: [], rows: [{ values: ['=HYPERLINK("x")'], count: 1, sums: [], counted: [] }, { values: [-5], count: 1, sums: [], counted: [] }], total: { count: 2, sums: [], counted: [] } });
  ok(evil.includes(`"'=HYPERLINK(""x"")"`) && evil.includes('\r\n-5,1'), 'formula-looking text gets a leading \' (quoted); a negative number stays a number');
  ok(Q.quantityFields(ix)[0].group.startsWith('Qto_') && Q.quantityFields(ix).every((f) => f.kind === 'number'), 'quantity fields: number fields, quantity sets first');
  ok(Q.tidy(0.1 + 0.2) === 0.3, 'sums lose binary noise (0.1 + 0.2 = 0.3)');
  console.log('== B10 schedules: one row per element');
  const er = Q.elementRows(ix, { keys: walls.map((id) => ix.keyBase + id), columns: ['storey', 'name', L] });
  ok(er.rows.length === walls.length && er.rows[0].values[0] === 'Level 1' && er.rows.map((r) => r.values[1]).slice(0, 4).join() === 'W-101,W-102,W-103,W-104', 'walls, sorted by storey then name: ' + er.rows.map((r) => r.values[1]).join(', '));
  ok(er.rows.every((r) => typeof r.values[2] === 'number'), 'each row carries its own Qto length');
  console.log('== B10 spaces: measured from the shape, then from the file\'s quantities');
  let sp = Q.spaceSchedule(P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, m, { spaces: true }), m);
  ok(sp.rows.length === 1 && sp.rows[0].number === '101' && sp.rows[0].name === '101 Office' && sp.rows[0].storey === 'Level 1', 'one space: number 101 (Name), "101 Office" (Long name), on Level 1');
  ok(sp.rows[0].area === 53.76 && sp.rows[0].areaFrom === 'shape' && sp.rows[0].volume === 155.904 && sp.rows[0].volumeFrom === 'shape', 'no quantity set: 9.6 × 5.6 × 2.9 m → 53.76 m², 155.904 m³ measured from its shape (' + sp.rows[0].area + ', ' + sp.rows[0].volume + ')');
  ifcm.close();
  const ifq = await quiet(() => IfcModel.create(WebIFC, null))();
  const mq = await quiet((b) => ifq.load(b, () => {}))(await fixtureBytes({ spaceQto: true }));
  const ixq = P.propertyIndex(WebIFC, ifq.api, ifq.modelID, mq, { spaces: true });
  sp = Q.spaceSchedule(ixq, mq);
  ok(sp.rows[0].area === 52.5 && sp.rows[0].areaFrom === 'file' && sp.rows[0].volume === 152.25 && sp.rows[0].volumeFrom === 'file', 'with Qto_SpaceBaseQuantities: the file\'s 52.5 m² and 152.25 m³ win');
  ok(sp.total.count === 1 && sp.total.area === 52.5, 'totals: 1 space, 52.5 m²');
  ok(Q.spaceSchedule(ixq, mq, { keys: walls.map((id) => ixq.keyBase + id) }).rows.length === 0 && P.propertyIndex(WebIFC, ifq.api, ifq.modelID, mq).ids.every((id) => mq.classOf.get(id) !== 'IfcSpace'), 'only spaces are scheduled (walls picked: no rows); the element index leaves spaces out');
  const csv2 = Q.tableCsv(['A', 'B'], [['=1+1', 2], ['x,y', -3]]);
  ok(csv2 === "A,B\r\n'=1+1,2\r\n\"x,y\",-3\r\n", 'tableCsv escapes formulas and commas');
  ifq.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' quantity total checks passed');
  return bad ? 1 : 0;
}

async function compareMode() {
  const P = await import(path.join(APP, 'ifc-props.js'));
  const K = await import(path.join(APP, 'ifc-compare.js'));
  const { placementMatrix } = await import(path.join(APP, 'ifc-util.js'));
  const { keyOf } = await import(path.join(APP, 'ifc-model.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const A = await quiet(() => IfcModel.create(WebIFC, null))();
  const B = IfcModel.sharing(A), B2 = IfcModel.sharing(A);
  const ld = (im, bytes, mi) => quiet((b) => im.load(b, () => {}, { keyBase: keyOf(mi, 0) }))(bytes);
  const ma = await ld(A, await fixtureBytes(), 0), mb = await ld(B, await fixtureBytes({ rev: 'b' }), 1), mc = await ld(B2, await fixtureBytes({ rev: 'b', shift: 100000 }), 2);
  const ixa = P.propertyIndex(WebIFC, A.api, ma.modelID, ma), ixb = P.propertyIndex(WebIFC, B.api, mb.modelID, mb), ixc = P.propertyIndex(WebIFC, B2.api, mc.modelID, mc);
  const refC = [...A.api.GetCoordinationMatrix(ma.modelID)];
  const side = (ix, m, im) => ({ ix, model: m, matrix: placementMatrix(refC, [...im.api.GetCoordinationMatrix(m.modelID)]) });
  const nm = (ix, k) => ix.value('name', k - ix.keyBase);
  console.log('== the fixture → revision b');
  const r = K.compareModels(side(ixa, ma, A), side(ixb, mb, B));
  ok(r.removed.map((k) => nm(ixa, k)).join() === 'W-104', 'removed: W-104');
  ok(r.added.map((k) => nm(ixb, k)).join() === 'W-203', 'added: W-203');
  const ch = Object.fromEntries(r.changed.map((c) => [nm(ixb, c.b), c]));
  console.log('    changed: ' + r.changed.map((c) => nm(ixb, c.b) + ' [' + c.props.map((p) => p.field).join(' ') + (c.moved ? ' moved ' + c.moved.toFixed(3) : '') + (c.reshaped ? ' reshaped' : '') + ']').join(', '));
  ok(ch['W-201'] && ch['W-201'].props.some((p) => p.field === 'p:Fixture_Data.Cost' && p.before !== p.after) && !ch['W-201'].moved, 'W-201: Cost changed (' + ch['W-201']?.props.map((p) => p.before + ' → ' + p.after).join() + '), not moved');
  const desk = Object.values(ch).find((c) => ixb.value('cls', c.b - ixb.keyBase) === 'IfcFurniture');
  ok(desk && Math.abs(desk.moved - 0.5) < 1e-6 && !desk.reshaped && !desk.props.length, 'the desk moved 0.500 m, same shape, same properties');
  ok(r.same > 0 && r.same + r.changed.length + r.removed.length === ixa.ids.length, 'every old element accounted for (' + r.same + ' the same)');
  const others = r.changed.filter((c) => c !== desk && c !== ch['W-201']);
  ok(others.length === 0, 'nothing else changed');
  console.log('== revision b with its site moved 100 m east');
  const r2 = K.compareModels(side(ixa, ma, A), side(ixc, mc, B2));
  ok(r2.changed.length === ixb.ids.length - 1 && r2.changed.every((c) => c.moved > 99.99), 'in true coordinates every matched element moved (100 m; the desk 100.5)');
  const aligned = { ix: ixc, model: mc, matrix: placementMatrix(refC, [...B2.api.GetCoordinationMatrix(mc.modelID)], [-100, 0, 0]) };
  const r3 = K.compareModels(side(ixa, ma, A), aligned);
  ok(r3.changed.map((c) => nm(ixc, c.b)).sort().join() === r.changed.map((c) => nm(ixb, c.b)).sort().join() && r3.changed.every((c) => !c.moved || Math.abs(c.moved - 0.5) < 1e-6), 'moved back 100 m (a Move offset, as the Models panel sets): the same changes as before');
  console.log('== the same file twice; CSV');
  ok(K.compareModels(side(ixa, ma, A), side(ixa, ma, A)).changed.length === 0, 'a model against itself: nothing changed');
  const csv = K.compareCsv(r, { name: (s, k) => nm(s === 'a' ? ixa : ixb, k), guid: (s, k) => (s === 'a' ? ixa : ixb).value('guid', k - (s === 'a' ? ixa : ixb).keyBase) });
  const lines = csv.trim().split('\r\n');
  ok(lines[0] === 'Change,GlobalId,Element,What,Before,After' && lines.some((l) => /^Changed,\w+,W-201,p:Fixture_Data\.Cost,/.test(l)) && lines.some((l) => /^Moved,\w+,.*,0\.5$/.test(l)) && lines.some((l) => /^Added,\w+,W-203/.test(l)) && lines.some((l) => /^Removed,\w+,W-104/.test(l)), 'CSV: a row per change with the GlobalId');
  console.log('== in words (EG.65)');
  const say = { added: (v) => v.name + ' was added.', removed: (v) => v.name + ' was removed.', moved: (v) => v.name + ' moved ' + v.d + ' m.', reshaped: (v) => v.name + ' changed shape.', prop: (v) => v.name + ': ' + v.field + ' changed from ' + v.before + ' to ' + v.after + '.' };
  const wd = K.compareWords(r, { name: (s, k) => nm(s === 'a' ? ixa : ixb, k), say });
  ok(wd.total === wd.lines.length && wd.lines.includes('W-104 was removed.') && wd.lines.includes('W-203 was added.'), 'one sentence for the removed and the added element');
  ok(wd.lines.some((l) => /^W-201: p:Fixture_Data\.Cost changed from .+ to .+\.$/.test(l)) && wd.lines.some((l) => /moved 0\.5 m\.$/.test(l)), 'the changed cost and the 0.5 m move are said in words');
  ok(K.compareWords(r, { say, max: 2 }).lines.length === 2 && K.compareWords(r, { say, max: 2 }).total === wd.total, 'a cap keeps the count of what was left out');
  for (const im of [A, B, B2]) im.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' compare checks passed');
  return bad ? 1 : 0;
}

async function dynamicMode() {
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const D = await import(path.join(APP, 'dwg-dynamic.js'));
  const L = await import(path.join(APP, 'libitem.js'));
  const { entityRows } = await import(path.join(APP, 'dwg-props.js'));
  console.log('== the copy');
  const mc = path.resolve(APP, '..', '..', 'modelcraft', 'dev', 'dwg-dynamic.js');
  if (fs.existsSync(path.dirname(mc))) ok(fs.existsSync(mc) && Buffer.compare(fs.readFileSync(mc), fs.readFileSync(path.join(APP, 'dwg-dynamic.js'))) === 0, 'modelcraft/dev/dwg-dynamic.js is byte-identical to the canonical copy');
  else console.log('  skip modelcraft (not in this clone)');

  console.log('== a dynamic block made by hand (the shapes cc-dwg reads, DB.2)');
  const line = (h, y, inv = false) => ({ type: 'LINE', handle: h, layer: '0', start: { x: 0, y }, end: { x: 10, y }, invisible: inv });
  const def = { name: 'Sink', record: 'D1', base: { x: 0, y: 0, z: 0 }, entities: [line('E1', 0), line('E2', 1, true), line('E3', 2, true)],
    dynamic: { params: [{ kind: 'visibility', label: 'Visibility', states: [{ name: 'Single bowl', entities: ['E1'] }, { name: 'Double bowl', entities: ['E2', 'E3'] }] }] } };
  const copy = { name: '*B7', record: 'C1', dynamicOf: 'D1', base: { x: 0, y: 0, z: 0 }, entities: [line('F1', 0, true), line('F2', 1), line('F3', 2)] };
  const plain = { name: 'Chair', record: 'P1', entities: [line('G1', 0)] };
  const ms = { name: '*Model_Space', entities: [
    { type: 'INSERT', block: 'Sink', insert: { x: 0, y: 0 } },                                   // the definition itself: as saved
    { type: 'INSERT', block: '*B7', insert: { x: 50, y: 0 }, dyn: { def: 'D1', state: 'Double bowl' } },
    { type: 'INSERT', block: '*B7', insert: { x: 90, y: 0 } },                                   // a copy without values: by its objects
    { type: 'INSERT', block: 'Chair', insert: { x: 0, y: 50 } }] };
  const model = { blocks: [ms, def, copy, plain] };
  const defs = D.dynamicDefs(model);
  ok(defs.size === 1 && defs.get('D1').name === 'Sink' && defs.get('D1').vis.states.length === 2, 'one dynamic definition with two visibility states');
  const [a, b, c, d] = ms.entities.map((e) => D.dynamicOf(model, e, defs));
  ok(a.state === 'Single bowl' && a.others.join() === 'Double bowl', 'a reference to the definition shows the state it was saved in (Single bowl), the other listed');
  ok(b.state === 'Double bowl' && b.others.join() === 'Single bowl', 'a reference with values: its state (Double bowl)');
  ok(c.state === 'Double bowl', 'a reference to a copy without values: the state its copy shows, found by position');
  ok(d === null, 'an ordinary block is not dynamic');
  const sum = D.dynamicSummary(model, defs);
  ok(sum.length === 1 && sum[0].count === 3 && JSON.stringify(sum[0].shown.sort()) === JSON.stringify([['Double bowl', 2], ['Single bowl', 1]]), 'summary: Sink placed 3 times, Double bowl ×2, Single bowl ×1');
  const rows = entityRows({ type: 'INSERT', handle: 'X', layer: '0', block: '*B7', insert: { x: 0, y: 0, z: 0 } }, { dyn: b });
  ok(rows.some((r) => r.key === 'dwg.prop.dyn' && r.value === 'Sink') && rows.some((r) => r.key === 'dwg.prop.dyn.state' && r.value === 'Double bowl') && rows.some((r) => r.key === 'dwg.prop.dyn.others' && r.value === 'Single bowl'), 'a picked reference\'s rows: Dynamic block Sink, State shown Double bowl, Other states Single bowl');
  console.log('== library candidates per state (libitem.js)');
  const cand = L.itemsFromDwg(model, { list: true, units: 'mm' }).candidates;
  ok(cand.filter((x) => x.block === 'Sink').map((x) => x.name).join('|') === 'Sink: Single bowl|Sink: Double bowl' && cand.some((x) => x.name === 'Chair') && !cand.some((x) => x.name === 'Sink'), 'the dynamic block is offered once per state ("Sink: Single bowl", "Sink: Double bowl"); Chair as before');
  const its = L.itemsFromDwg(model, { blocks: ['Sink: Double bowl', 'Sink: Single bowl'], units: 'mm' }).items;
  const dbl = its.find((i) => i.name === 'Sink: Double bowl'), sgl = its.find((i) => i.name === 'Sink: Single bowl');
  ok(dbl && dbl.plan.entities.length === 2 && dbl.plan.entities.every((e) => e.y1 > 0) && sgl && sgl.plan.entities.length === 1 && sgl.plan.entities[0].y1 === 0, 'each state draws only its own objects (Double bowl: the two lines saved invisible; Single bowl: the one)');
  ok(/Block Sink \(Double bowl\)/.test(dbl.description), 'the item says which state it is: ' + dbl.description);
  const direct = L.itemFromBlock(model, 'Sink: Double bowl', { units: 'mm' });
  ok(direct.item && direct.item.plan.entities.length === 2, 'itemFromBlock by the state\'s name alone (as BimCraft\'s "This file" calls it) finds the state');
  const vr = L.validateItem(L.cleanItem(dbl), { partial: true });
  ok(vr.ok, 'and it is a valid item (partial, as the converter hands it on)' + (vr.ok ? '' : ': ' + vr.errors.slice(0, 2).join(' | ')));

  const sample = path.join(TESTFILES, 'dwg-samples', 'blocks_and_tables_-_imperial.dwg');
  if (fs.existsSync(sample)) {
    console.log('== AutoCAD\'s blocks sample (testfiles)');
    const { readDwg } = await import(path.join(APP, 'dwg', 'read.js'));
    const md = readDwg(new Uint8Array(fs.readFileSync(sample)));
    const dd = D.dynamicDefs(md), s2 = D.dynamicSummary(md, dd);
    ok(dd.size === 12 && s2.find((x) => x.name === 'Receptacle')?.count === 45, '12 dynamic definitions; Receptacle placed 45 times in model space');
    const refs = md.blocks.flatMap((bk) => bk.entities).filter((e) => e.type === 'INSERT' && e.dyn?.state);
    const inferred = refs.filter((e) => { const { dyn, ...bare } = e; return D.dynamicOf(md, bare, dd)?.state === dyn.state; }).length;
    ok(refs.length > 50 && inferred === refs.length, 'every reference\'s state worked out from its copy\'s objects alone matches the state AutoCAD stored (' + inferred + ' / ' + refs.length + ')');
    const sc = L.itemsFromDwg(md, { list: true }).candidates.filter((x) => x.state);
    ok(sc.length === 14 && sc.some((x) => x.name === 'Sink: Kitchen - Plan'), 'library: 14 state candidates (Receptacle, Switch, Refrigerator, Range_Oven, Sink ×3, Toilet ×3)');
  } else console.log('  skip AutoCAD sample (testfiles not on this machine)');
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' dynamic block checks passed');
  return bad ? 1 : 0;
}

async function geoMode() {
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const G = await import(path.join(APP, 'ifc-geo.js'));
  const CRS = await import(path.join(APP, 'crs.js'));
  const { GEOREF } = await import(path.join(ROOT, 'tools/bimcraft-test/ifc-fixture.mjs'));
  const { execFileSync } = await import('node:child_process');
  console.log('== the crs.js copy');
  let sync = '';
  try { sync = execFileSync('node', [path.join(ROOT, 'tools/bimcraft-test/crs-sync.mjs'), '--check'], { encoding: 'utf8' }); } catch (e) { sync = e.stdout || String(e); }
  ok(/in step/.test(sync), 'crs.js and crs-db.json are byte-identical to CivilCraft\'s, every word they show is in BimCraft\'s language file');
  CRS.setCatalog(JSON.parse(fs.readFileSync(path.join(APP, 'crs-db.json'), 'utf8')));
  console.log('== names and angles');
  ok(G.epsgOf('EPSG:28356') === 28356 && G.epsgOf('urn:ogc:def:crs:EPSG::7856') === 7856 && G.epsgOf('http://www.opengis.net/def/crs/EPSG/0/2277') === 2277 && G.epsgOf('EPSG 25832') === 25832 && G.epsgOf('28356') === 28356, 'epsgOf reads EPSG codes written five ways');
  ok(G.epsgOf('GDA94 / MGA zone 56') === null && G.epsgOf('') === null && G.epsgOf('Zone 12345') === null, 'and nothing from a name without a code');
  ok(Math.abs(G.compound([-33, -51, -35, -900000]) - GEOREF.latDeg) < 1e-12 && G.compound(null) === null, 'compound angles (deg, min, sec, millionths) → degrees, negative south');
  ok(G.dms(GEOREF.latDeg, 'lat') === '33° 51′ 35.90″ S' && G.dms(GEOREF.lonDeg, 'lon') === '151° 12′ 33.48″ E' && G.dms(-0.5, 'lon') === '0° 30′ 00.00″ W', 'dms: ' + G.dms(GEOREF.latDeg, 'lat') + ', ' + G.dms(GEOREF.lonDeg, 'lon'));
  ok(G.datumOf('+proj=utm +zone=56 +south +ellps=GRS80 +units=m +no_defs') === '+proj=longlat +ellps=GRS80 +no_defs' && G.datumOf('+proj=lcc +datum=NAD27 +units=us-ft') === '+proj=longlat +datum=NAD27 +no_defs', 'datumOf keeps the ellipsoid / datum, drops the projection');
  const py = (code) => JSON.parse(execFileSync(path.join(ROOT, 'tools/civilcraft-test/venv/bin/python'), ['-c', code], { encoding: 'utf8' }));
  const hasPy = fs.existsSync(path.join(ROOT, 'tools/civilcraft-test/venv/bin/python'));

  console.log('== a map conversion (IfcProjectedCRS EPSG:28356 + IfcMapConversion)');
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes({ georef: 'map' }));
  const g = G.readGeoref(ifcm.api, m.modelID);
  ok(g && g.kind === 'map' && g.crs.code === 28356 && g.crs.geodeticDatum === 'GDA94' && g.crs.verticalDatum === 'AHD' && g.mapUnitM === 1 && g.fileUnitM === 0.001, 'read: EPSG:28356, datum GDA94, heights AHD, map unit metre, file unit mm (' + JSON.stringify(g && { code: g.crs.code, mapUnitM: g.mapUnitM, fileUnitM: g.fileUnitM }) + ')');
  // W-101's far top outer corner: (10000, −100, 3000) mm in the file
  const P = [10000, -100, 3000], r = GEOREF.rotationDeg * Math.PI / 180, s = GEOREF.scale;
  const want = [GEOREF.e + s * (Math.cos(r) * P[0] - Math.sin(r) * P[1]), GEOREF.n + s * (Math.sin(r) * P[0] + Math.cos(r) * P[1]), GEOREF.h + P[2] * 0.001];
  const got = G.fileToMap(g, P);
  ok(got.every((v, k) => Math.abs(v - want[k]) < 1e-6), 'fileToMap: rotated 30°, scaled mm → m, moved to E/N/H: ' + got.map((v) => v.toFixed(4)).join(', '));
  // the same corner as BimCraft's viewer holds it: Y up, metres, moved to the origin by the coordination matrix
  const C = [...ifcm.api.GetCoordinationMatrix(m.modelID)];
  const yup = [P[0] * 0.001, P[2] * 0.001, -P[1] * 0.001];
  const v = [yup[0] + C[12], yup[1] + C[13], yup[2] + C[14]];
  const back = G.viewerToFile(v, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], C, g.fileUnitM);
  ok(back.every((x, k) => Math.abs(x - P[k]) < 1e-6), 'viewerToFile undoes the coordination matrix, Y up and metres: ' + back.map((x) => x.toFixed(3)).join(', '));
  const moved = G.viewerToFile([v[0] + 100, v[1], v[2]], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 100, 0, 0, 1], C, g.fileUnitM);
  ok(moved.every((x, k) => Math.abs(x - P[k]) < 1e-6), '… and a federated model\'s scene placement (moved 100 m)');
  const entry = CRS.byCode(28356);
  const ll = CRS.transformer(entry, null)(got[0], got[1]);
  const llOwn = CRS.transformer(entry, G.datumOf(entry.proj4))(got[0], got[1]);
  if (hasPy) {
    const o = py(`import json,pyproj; t=pyproj.Transformer.from_crs(28356,4283,always_xy=True); print(json.dumps(t.transform(${got[0]},${got[1]})))`);
    ok(Math.abs(llOwn[0] - o[0]) < 1e-9 && Math.abs(llOwn[1] - o[1]) < 1e-9, 'on its own datum (GDA94): ' + llOwn.map((x) => x.toFixed(9)).join(', ') + ' = PROJ ' + o.map((x) => x.toFixed(9)).join(', '));
    const w = py(`import json,pyproj; t=pyproj.Transformer.from_crs(28356,4326,always_xy=True); print(json.dumps(t.transform(${got[0]},${got[1]})))`);
    const off = Math.hypot((ll[0] - w[0]) * 111320 * Math.cos(ll[1] * Math.PI / 180), (ll[1] - w[1]) * 110574);
    ok(off <= entry.shiftAccuracy + 0.01, 'in WGS 84: within the catalog\'s stated datum accuracy (' + entry.shiftAccuracy + ' m) of PROJ\'s own choice: ' + off.toFixed(3) + ' m apart');
  } else console.log('  skip PROJ checks (no tools/civilcraft-test/venv)');
  ifcm.close?.();

  console.log('== a map unit that is a conversion-based unit (US survey foot, EPSG:2277; found by the 0.7 site-concept spike)');
  // fixtures/ifc/site-masses.ifc (CivilCraft's ifc-massing.js): written in US survey feet, MapUnit the same foot, IfcMapConversion
  // at E 2080150, N 6150220, H 254.5 ftUS with no scale; the origin is the middle of the two masses
  const FTUS = 1200 / 3937;
  const ifcu = await quiet(() => IfcModel.create(WebIFC, null))();
  const mu = await quiet((b) => ifcu.load(b, () => {}))(new Uint8Array(fs.readFileSync(path.join(ROOT, 'fixtures/ifc/site-masses.ifc'))));
  const gu = G.readGeoref(ifcu.api, mu.modelID);
  ok(gu && gu.kind === 'map' && gu.crs.code === 2277 && Math.abs(gu.mapUnitM - FTUS) < 1e-12 && Math.abs(gu.fileUnitM - FTUS) < 1e-12, 'read: EPSG:2277, map unit and file unit 0.3048006096 m, not 0.3048 (' + (gu && gu.mapUnitM) + ')');
  // Block A's far corner: (2080130, 6150240) ftUS on the map is (−20, +20) ft from the file's origin
  const cu = G.fileToMap(gu, [-20, 20, 0]);
  ok(Math.abs(cu[0] - 2080130 * FTUS) < 0.001 && Math.abs(cu[1] - 6150240 * FTUS) < 0.001, 'the corner round-trips to under 1 mm: ' + [cu[0] - 2080130 * FTUS, cu[1] - 6150240 * FTUS].map((v) => (v * 1000).toFixed(4)).join(', ') + ' mm off');
  ifcu.close?.();

  console.log('== only IfcSite latitude / longitude');
  const ifcs = await quiet(() => IfcModel.create(WebIFC, null))();
  const ms = await quiet((b) => ifcs.load(b, () => {}))(await fixtureBytes({ georef: 'site' }));
  const gs = G.readGeoref(ifcs.api, ms.modelID);
  ok(gs && gs.kind === 'site' && Math.abs(gs.lat - GEOREF.latDeg) < 1e-12 && Math.abs(gs.lon - GEOREF.lonDeg) < 1e-12 && Math.abs(gs.elev - 42) < 1e-9, 'read: the site\'s latitude, longitude and 42 m elevation');
  ok(Math.abs(gs.north[0] + Math.sin(GEOREF.northDeg * Math.PI / 180)) < 1e-9 && Math.abs(gs.north[1] - Math.cos(GEOREF.northDeg * Math.PI / 180)) < 1e-9, 'TrueNorth: 20° west of the model\'s +Y');
  const at0 = G.siteLonLat(gs, gs.origin);
  ok(Math.abs(at0[0] - GEOREF.lonDeg) < 1e-12 && Math.abs(at0[1] - GEOREF.latDeg) < 1e-12 && Math.abs(at0[2] - 42) < 1e-9, 'the site\'s own point is its latitude and longitude');
  // 1000 m along the model's +Y = 1000 m on an azimuth of 20° (north is 20° to the left of +Y)
  const far = G.siteLonLat(gs, [gs.origin[0], gs.origin[1] + 1e6, gs.origin[2] + 5000]);
  if (hasPy) {
    const o = py(`import json,pyproj; print(json.dumps(pyproj.Geod(ellps='WGS84').fwd(${GEOREF.lonDeg},${GEOREF.latDeg},20,1000)[:2]))`);
    const off = Math.hypot((far[0] - o[0]) * 111320 * Math.cos(far[1] * Math.PI / 180), (far[1] - o[1]) * 110574);
    ok(off < 0.05 && Math.abs(far[2] - 47) < 1e-9, '1 km along the model\'s +Y lands where PROJ\'s geodesic puts a 20° azimuth, within ' + (off * 100).toFixed(1) + ' cm; height 47 m');
  }
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' georeference checks passed');
  return bad ? 1 : 0;
}

async function sectionMode() {
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const S = await import(path.join(APP, 'section-volume.js'));
  const near = (a, b, e = 1e-6) => Math.abs(a - b) <= e;
  const box = (min, max) => ({ box: { min, max } });
  console.log('== cleanCell (untrusted input)');
  const c0 = S.cleanCell({ box: { min: [5, -2, 'x'], max: [1, 30, 4] }, tilt: { x1: [95, 'q'], zz: [10, 10], y0: [0, 0] }, planes: [{ az: -90, el: 120, off: 'n' }, null, 7] }, [10, 20, 3]);
  ok(c0.box.min.join() === '1,0,0' && c0.box.max.join() === '5,20,3', 'min/max swapped, clamped to the model (0 … size): ' + JSON.stringify(c0.box));
  ok(JSON.stringify(c0.tilt) === '{"x1":[80,0]}', 'tilts: capped at 80°, junk faces and level faces dropped: ' + JSON.stringify(c0.tilt));
  ok(c0.planes.length === 1 && c0.planes[0].az === 270 && c0.planes[0].el === 90 && c0.planes[0].off === 0, 'extra planes: angles wrapped / capped, junk dropped: ' + JSON.stringify(c0.planes));
  const many = S.cleanVolume(Array.from({ length: 12 }, () => box([0, 0, 0], [1, 1, 1])), [2, 2, 2]);
  ok(many.length === S.MAX_CELLS, 'at most ' + S.MAX_CELLS + ' cells');
  ok(S.cleanVolume(null, [4, 5, 6])[0].box.max.join() === '4,5,6', 'no cells → the whole model');
  console.log('== a plain box');
  const plain = S.cleanCell(box([0, 0, 0], [10, 6, 3]));
  const pl = S.cellPlanes(plain);
  ok(pl.length === 6 && pl.every((q) => near(Math.hypot(...q.n), 1)), 'six planes with unit normals');
  ok(S.inside(pl, [5, 3, 1.5]) && S.inside(pl, [10, 6, 3]) && !S.inside(pl, [10.01, 3, 1]) && !S.inside(pl, [5, 3, -0.1]), 'inside / on the face / outside');
  const ph = S.polyhedron(pl);
  ok(ph.verts.length === 8 && ph.edges.length === 12 && ph.loops.every((L) => L.length === 4), 'outline: 8 corners, 12 edges, six faces of 4');
  console.log('== a tilted face (the box roof sloping 30° towards +Y)');
  const roof = S.cleanCell({ box: { min: [0, 0, 0], max: [10, 6, 3] }, tilt: { z1: [0, 30] } });
  const rp = S.cellPlanes(roof), top = rp.find((q) => q.face === 'z1');
  ok(near(top.n[1], Math.sin(Math.PI / 6)) && near(top.n[2], Math.cos(Math.PI / 6)), 'the top face faces 30° towards +Y: n = ' + top.n.map((v) => v.toFixed(3)));
  // pivot at the face's centre (y = 3, z = 3): the roof is at z = 3 + (3 − y)·tan 30°
  const zAt = (y) => 3 + (3 - y) * Math.tan(Math.PI / 6);
  ok(S.inside(rp, [5, 0.5, zAt(0.5) - 0.01]) && !S.inside(rp, [5, 0.5, zAt(0.5) + 0.01]) && S.inside(rp, [5, 5.5, zAt(5.5) - 0.01]) && !S.inside(rp, [5, 5.5, 3]), 'kept under the sloping roof at both ends (higher at y = 0, lower at y = 6)');
  const rph = S.polyhedron(rp);
  ok(rph.verts.length === 8 && rph.edges.length === 12, 'still a six-faced cell: 8 corners, 12 edges');
  const hiZ = Math.max(...rph.verts.map((v) => v[2])), loZ = Math.min(...rph.verts.filter((v) => v[2] > 1).map((v) => v[2]));
  ok(near(hiZ, zAt(0)) && near(loZ, zAt(6)), 'the roof corners: ' + hiZ.toFixed(3) + ' m at y = 0, ' + loZ.toFixed(3) + ' m at y = 6');
  console.log('== an extra plane cutting a corner');
  const cutc = S.cleanCell({ box: { min: [0, 0, 0], max: [10, 6, 3] }, planes: [{ az: 45, el: 0, off: 2 }] });
  const cp = S.cellPlanes(cutc), cph = S.polyhedron(cp);
  ok(cp.length === 7 && cph.verts.length === 10 && cph.edges.length === 15, 'a vertical plane takes off the +X +Y corner: 10 corners, 15 edges (' + cph.verts.length + ', ' + cph.edges.length + ')');
  ok(!S.inside(cp, [9.9, 5.9, 1]) && S.inside(cp, [0.1, 0.1, 1]) && S.inside(cp, [9.9, 0.1, 1]), 'the corner is cut away, the other corners kept');
  const back = S.planeFromPoint(cp[6].n, cp[6].p, cutc.box);
  ok(near(back.az, 45) && near(back.el, 0) && near(back.off, 2), 'planeFromPoint gives the same plane back (BCF import): ' + JSON.stringify(back));
  const tilted = S.planeFromPoint([0, -1, 1], [5, 3, 2], cutc.box);
  ok(near(tilted.az, 270) && near(tilted.el, 45) && near(tilted.off, Math.SQRT1_2 * 0.5), 'a sloping plane through a point: az 270°, el 45°, off ' + tilted.off.toFixed(4));
  ok(!S.polyhedron(S.cellPlanes(S.cleanCell({ box: { min: [0, 0, 0], max: [1, 1, 1] }, planes: [{ az: 0, el: 90, off: -5 }] }))).verts.length, 'a plane that leaves nothing → an empty outline');
  console.log('== an L-shaped volume (a union of two boxes)');
  const L = [S.cellPlanes(S.cleanCell(box([0, 0, 0], [10, 3, 3]))), S.cellPlanes(S.cleanCell(box([0, 0, 0], [3, 8, 3])))];
  ok(S.insideAny(L, [8, 1, 1]) && S.insideAny(L, [1, 7, 1]) && S.insideAny(L, [1, 1, 1]) && !S.insideAny(L, [8, 7, 1]), 'kept in either arm and their overlap; the missing corner is cut away');
  const groups = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
  const ms = S.modelSpec(groups);
  ok(ms.clauses.length === 1 && ms.clauses[0].length === 2 && !ms.clauses[0].some((l) => l.neg), 'model: one clause, in cell 0 OR in cell 1');
  const cs = S.capSpec(groups, 0, 1);
  ok(cs.order.join() === '0,2,3,4,5,6,7,8,9,10,11' && cs.spec.groups[0].length === 5 && cs.spec.groups[1].join() === '5,6,7,8,9,10' && cs.spec.clauses[1][0].neg === true, 'cut face of cell 0 plane 1: on cell 0\'s other five planes, and NOT in cell 1');
  const glsl = S.clipGlsl(ms);
  ok(/bool ccIn0 = .*clippingPlanes\[ 5 \]/.test(glsl) && /bool ccIn1 = .*clippingPlanes\[ 11 \]/.test(glsl) && /if \( !\( ccIn0 \|\| ccIn1 \) \) discard;/.test(glsl), 'GLSL: one test per cell, discard outside both');
  ok(/if \( !\( !ccIn1 \) \) discard;/.test(S.clipGlsl(cs.spec)), 'GLSL for a cut face: discard inside the other cell');
  ok(S.specKey(ms) !== S.specKey(cs.spec) && S.specKey(null) === '', 'program cache keys differ per spec');
  ok(S.isPlainBox(plain) && !S.isPlainBox(roof) && !S.isPlainBox(cutc), 'isPlainBox');
  console.log('== grips (WL.2)');
  const B = { min: [1, 1, 0], max: [9, 5, 3] };
  const G = S.boxGrips(B), kinds = (k) => G.filter((g) => g.kind === k).length;
  ok(G.length === 26 && kinds('face') === 6 && kinds('edge') === 12 && kinds('corner') === 8 && new Set(G.map((g) => g.id)).size === 26, '26 grips: 6 faces, 12 edges, 8 corners, ids unique');
  const ex = G.find((g) => g.id === 'x1y0'), cz = G.find((g) => g.id === 'x0y1z1'), fz = G.find((g) => g.id === 'z1');
  ok(ex.p.join() === '9,1,1.5' && ex.axes.join() === '0,1' && cz.p.join() === '1,5,3' && fz.p.join() === '5,3,3', 'grip places: the X-to/Y-from edge at its middle, a top corner, the top face\'s centre');
  // from straight above (looking down −Z), a drag of the X-to/Y-from edge to (11, −0.5): both faces move, Z untouched
  const down = { o: [11, -0.5, 50], d: [0, 0, -1] };
  const de = S.dragDelta(down, ex.p, ex.axes, [0, 0, -1]);
  ok(near(de[0], 2) && near(de[1], -1.5) && de[2] === 0, 'edge grip from above: moves along X and Y only (' + de.map((v) => v.toFixed(3)) + ')');
  const nb = S.dragBox(B, ex.faces, de, [10, 6, 3]);
  ok(nb.max[0] === 10 && nb.min[1] === 0 && nb.min[0] === 1 && nb.max[1] === 5 && nb.max[2] === 3, 'dragBox: X to 11 is clamped to the model (10), Y from to 0; other faces kept: ' + JSON.stringify(nb));
  // a face grip follows the nearest point of its line; a ray from the side
  const side = { o: [5, -40, 2.2], d: [0, 1, 0] };
  const df = S.dragDelta(side, fz.p, fz.axes, [0, 1, 0]);
  ok(df[0] === 0 && df[1] === 0 && near(df[2], -0.8), 'face grip seen from the front: the top moves down 0.8 m (' + df.map((v) => v.toFixed(3)) + ')');
  ok(S.dragDelta({ o: [5, 3, 50], d: [0, 0, -1] }, fz.p, fz.axes, [0, 0, -1]) === null, 'a face grip seen end-on (top face from above) does not move');
  const inside = S.dragBox(B, [[2, 1]], [0, 0, -10], [10, 6, 3]);
  ok(near(inside.max[2], 0.01) && inside.min[2] === 0, 'a face never passes the opposite one (the box keeps 1 cm): ' + JSON.stringify(inside));
  // an edge grip whose plane is seen edge-on falls back to the view plane: X-to/Z-to edge from straight above
  const exz = G.find((g) => g.id === 'x1z1');
  const dv = S.dragDelta({ o: [10, 3, 50], d: [0, 0, -1] }, exz.p, exz.axes, [0, 0, -1]);
  ok(dv && near(dv[0], 1) && dv[1] === 0 && near(dv[2], 0), 'an edge grip seen edge-on moves in the view plane, projected on its axes (' + (dv || []).map((v) => v.toFixed(3)) + ')');
  const dc = S.dragDelta({ o: [0, 6, 50], d: [0, 0, -1] }, cz.p, cz.axes, [0, 0, -1]);
  ok(dc && near(dc[0], -1) && near(dc[1], 1) && near(dc[2], 0), 'a corner from above moves in the view plane (' + (dc || []).map((v) => v.toFixed(3)) + ')');
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' section checks passed');
  return bad ? 1 : 0;
}

async function handoffMode() {
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const canon = fs.readFileSync(path.join(APP, 'handoff.js'));
  const apps = path.resolve(APP, '..', '..');
  console.log('== copies');
  for (const a of ['cadcraft', 'modelcraft', 'detailcraft', 'markupcraft', 'takeoffcraft', 'civilcraft']) {   // civilcraft: 0.7 LC.1, "Develop in BimCraft"
    const f = path.join(apps, a, 'dev', 'handoff.js');
    if (!fs.existsSync(path.join(apps, a, 'dev'))) { console.log('  skip ' + a + ' (not in this clone)'); continue; }
    ok(fs.existsSync(f) && Buffer.compare(fs.readFileSync(f), canon) === 0, a + '/dev/handoff.js is byte-identical to the canonical copy');
  }
  const H = await import(path.join(APP, 'handoff.js'));
  console.log('== ids');
  const id = H.newHandoffId();
  ok(H.handoffParam('?handoff=' + id.toUpperCase()) === id, 'a fresh id reads back from a query string (lower case)');
  ok(H.handoffParam('?handoff=../../etc') === null && H.handoffParam('?x=1') === null && H.handoffParam('?handoff=' + id + 'x') === null, 'anything but a UUID is ignored');
  // 0.5: a page that is not a secure context (a Studio Live browser joiner on plain http) has no crypto.randomUUID
  const ru = Object.getOwnPropertyDescriptor(globalThis.crypto, 'randomUUID');
  Object.defineProperty(globalThis.crypto, 'randomUUID', { value: undefined, configurable: true });
  const ids2 = new Set(Array.from({ length: 200 }, () => H.newHandoffId()));
  if (ru) Object.defineProperty(globalThis.crypto, 'randomUUID', ru); else delete globalThis.crypto.randomUUID;
  ok(ids2.size === 200 && [...ids2].every((x) => /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(x) && H.handoffParam('?handoff=' + x) === x), 'without crypto.randomUUID (plain http): version-4 UUIDs from getRandomValues, 200 different, each read back');
  console.log('== meta (0.7 LC.1: what a file is for)');
  ok(JSON.stringify(H.cleanMeta({ kind: 'mass', n: 3, ok: true, 'bad key': 'x', big: 'y'.repeat(500), nested: { a: 1 }, nan: NaN })) === JSON.stringify({ kind: 'mass', n: 3, ok: true, big: 'y'.repeat(200) }), 'cleanMeta keeps short plain values under plain keys, cuts strings at 200, drops objects, NaN and odd keys');
  ok(JSON.stringify(H.cleanMeta(null)) === '{}' && JSON.stringify(H.cleanMeta('x')) === '{}', 'no meta is {}');
  console.log('== sendHandoff');
  const saved = globalThis.window;
  const opened = [];
  globalThis.window = { open: (u) => { opened.push(u); return null; } };
  let err = null;
  try { await H.sendHandoff('/lab/detailcraft', { name: 'a.ifc' }, 'bimcraft'); } catch (e) { err = e; }
  ok(err?.code === 'blocked' && /^\/lab\/detailcraft\?handoff=[0-9a-f-]{36}$/.test(opened[0]), 'a blocked tab: code "blocked", the address carried the id (' + opened[0] + ')');
  let closed = false;
  globalThis.window = { open: (u) => { opened.push(u); return { close: () => { closed = true; } }; } };
  err = null;
  try { await H.sendHandoff('/lab/markupcraft?x=1', { name: 'a.pdf' }, 'takeoffcraft'); } catch (e) { err = e; }
  ok(/\?x=1&handoff=/.test(opened[1]) && err && closed, 'no IndexedDB here: storing fails and the new tab is closed again (' + (err?.code || err?.message) + ')');
  globalThis.window = saved;
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' handoff checks passed');
  return bad ? 1 : 0;
}

async function fourDMode() {
  const P = await import(path.join(APP, 'ifc-props.js'));
  const D = await import(path.join(APP, 'ifc-4d.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  console.log('== dates');
  ok(D.dayText(D.parseDay('2026-11-02')) === '2026-11-02' && D.parseDay('2026-02-30') === null && D.parseDay('02/11/2026') === null && D.parseDay('2026-1-2') === null, 'YYYY-MM-DD only, real days only (2026-02-30 and 02/11/2026 refused)');
  console.log('== the CSV');
  const csv = '﻿Task;Start;Finish;Field;Value\r\n'
    + 'Level 1;2026-11-02;2026-11-13;Storey;Level 1\r\n'
    + 'Slab;2026-11-16;2026-11-16;Class;IfcSlab\r\n'
    + 'Level 2 walls;2026-11-17;2026-11-27;Storey;level 2\r\n'
    + 'Level 2 walls;2026-11-17;2026-11-27;Fixture_Data.Zone;North\r\n'
    + '"Fit-out; desk";2026-11-30;2026-12-04;Name;F-101\r\n'
    + 'Ghost;2026-12-07;2026-12-08;Name;nothing like this\r\n'
    + 'Bad date;2026-13-01;2026-12-01;Name;x\r\n'
    + 'Backwards;2026-12-05;2026-12-01;Name;x\r\n'
    + 'Level 1;2026-11-03;2026-11-13;Class;IfcDoor\r\n';
  const p = D.parseTasks(csv);
  ok(p.tasks.map((t) => t.name).join('|') === 'Level 1|Slab|Level 2 walls|Fit-out; desk|Ghost', 'semicolons, a BOM, a quoted ; in a name, one task per name, by start date: ' + p.tasks.map((t) => t.name).join(' | '));
  ok(p.errors.map((e) => e.message + '@' + e.line).join() === 'date@8,order@9,dates-differ@10', 'refused with their lines: a bad date, a finish before the start, the same task with other dates (' + p.errors.map((e) => e.message + '@' + e.line).join(', ') + ')');
  ok(D.parseTasks('Name,When\nx,y\n').errors[0]?.message === 'header' && D.parseTasks('').errors[0]?.message === 'empty', 'a file without the columns, or empty: said so');
  console.log('== matching the fixture');
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null))();
  const m = await quiet((b) => ifcm.load(b, () => {}))(await fixtureBytes());
  const ix = P.propertyIndex(WebIFC, ifcm.api, ifcm.modelID, m);
  const mt = D.matchTasks(ix, p.tasks);
  const by = Object.fromEntries(mt.map((t) => [t.name, t]));
  const nm = (keys) => keys.map((k) => ix.value('name', k - ix.keyBase)).sort().join(',');
  ok(by['Level 1'].keys.length === 8 && by['Slab'].keys.length === 1 && nm(by['Fit-out; desk'].keys) === 'F-101', 'Storey = Level 1 → 8 elements, Class = IfcSlab → 1, Name = F-101 → the desk');
  ok(by['Level 2 walls'].keys.length === 3 + 1, 'two rows for one task add up, and a value ignores case: Level 2 (3) + the North wall (' + by['Level 2 walls'].keys.length + ')');
  ok(by['Ghost'].keys.length === 0 && by['Ghost'].unmatched.length === 1, 'a row that matches nothing is reported');
  ok(D.fieldId(ix, 'GlobalId') === 'guid' && D.fieldId(ix, 'fixture_data.cost') === 'p:Fixture_Data.Cost' && D.fieldId(ix, 'Nope') === null, 'fields by name, property sets as "Set.Property" (any case)');
  console.log('== status on a date');
  const day = D.parseDay;
  const at = (d) => D.statusAt(mt, day(d));
  const w101 = ix.keyBase + ix.ids.find((id) => ix.value('name', id) === 'W-101'), slab = by['Slab'].keys[0], north = by['Level 2 walls'].keys.find((k) => !by['Level 1'].keys.includes(k) && ix.value('storey', k - ix.keyBase) === 'Level 1');
  const one = (t, d) => D.statusAt([t], day(d));
  ok(one(by['Level 1'], '2026-11-01').get(w101) === 'waiting' && one(by['Level 1'], '2026-11-02').get(w101) === 'progress' && one(by['Level 1'], '2026-11-13').get(w101) === 'progress' && one(by['Level 1'], '2026-11-14').get(w101) === 'built', 'one task: waiting, in progress from Start through Finish, built the day after');
  ok(one(by['Slab'], '2026-11-16').get(slab) === 'progress' && one(by['Slab'], '2026-11-17').get(slab) === 'built', 'a one-day task: in progress on its day, built the next');
  ok(at('2026-11-14').get(w101) === 'progress' && at('2026-11-28').get(w101) === 'built', 'W-101 is also the North wall of "Level 2 walls": in progress between the two, built after both');
  ok(north === undefined || at('2026-11-14').get(north) === 'progress', 'an element in two tasks (Level 1 done, Level 2 walls not started): in progress');
  ok(at('2026-12-31').size === new Set(mt.flatMap((t) => t.keys)).size && [...at('2026-12-31').values()].every((s) => s === 'built'), 'after the last finish everything in a task is built');
  const sp = D.span(mt);
  ok(D.dayText(sp.first) === '2026-11-02' && D.dayText(sp.last) === '2026-12-08', 'the slider runs from the first start to the last finish');
  const tpl = D.parseTasks(D.templateCsv(['Level 1', 'Level 2'], day('2026-11-02')));
  ok(tpl.errors.length === 0 && tpl.tasks.map((t) => t.name + ' ' + D.dayText(t.start) + '–' + D.dayText(t.finish)).join(', ') === 'Level 1 2026-11-02–2026-11-06, Level 2 2026-11-09–2026-11-13' && D.matchTasks(ix, tpl.tasks)[0].keys.length === 8, 'the template: a week per storey, reads back and matches');
  ifcm.close();
  console.log(bad ? '\n' + bad + ' FAILED, ' + good + ' passed' : '\nall ' + good + ' 4D checks passed');
  return bad ? 1 : 0;
}

/** --new (0.5 part 3): new-model.js → a blank IFC4 building that cc-ifc (and web-ifc, when installed) opens, with its
 *  levels, that takes a library item and saves; GUIDs, STEP strings and refusals. */
async function newMode() {
  const N = await import(path.join(APP, 'new-model.js'));
  const L = await import(path.join(APP, 'libitem.js'));
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  console.log('== GUIDs and strings');
  const g = new Set(Array.from({ length: 2000 }, () => N.ifcGuid()));
  ok(g.size === 2000 && [...g].every((x) => /^[0-3][0-9A-Za-z_$]{21}$/.test(x)), '2000 GUIDs: unique, 22 characters of IFC base-64, first one 0–3');
  ok(N.stepString("Smith's \\ house") === "'Smith''s \\\\ house'", 'quotes and backslashes doubled');
  ok(N.stepString('Café 🏠') === "'Caf\\X2\\00E9\\X0\\ \\X2\\D83CDFE0\\X0\\'", 'non-ASCII as \\X2\\ (a surrogate pair for the emoji)');
  console.log('== Refusals');
  const lv = (n, h) => N.stackLevels(n, h, (i) => 'Level ' + (i + 1));
  ok(N.levelsProblem([]) === 'new.err.levels' && N.levelsProblem(lv(201, 3000)) === 'new.err.levels', 'no levels, or more than 200');
  ok(N.levelsProblem(lv(2, NaN)) === 'new.err.height' && N.levelsProblem(lv(2, 500)) === 'new.err.height' && N.levelsProblem(lv(2, 200000)) === 'new.err.height', 'height not a number, under 1 m, over 100 m');
  ok(N.levelsProblem(lv(3, 3000)) === '', '3 levels of 3000 mm are fine');
  let threw = ''; try { N.newBuilding({ name: 'x', levels: [] }); } catch (e) { threw = e.key; }
  ok(threw === 'new.err.levels', 'newBuilding refuses bad levels with the key');
  console.log('== Opens, takes an item, saves');
  const text = N.newBuilding({ name: "Smith's house — ñ", levels: lv(3, 3200.4), author: 'Test', fileName: 'x.ifc', now: new Date('2026-10-14T12:00:00Z') });
  ok(/FILE_SCHEMA\(\('IFC4'\)\);/.test(text) && /'2026-10-14T12:00:00'/.test(text), 'IFC4 header with the time stamp');
  const engine = await quiet(IfcModel.create)(WebIFC, null);
  const m = await quiet((b) => engine.load(b))(new TextEncoder().encode(text));
  ok(m.schema === 'IFC4' && m.project.name === "Smith's house — ñ" && m.elements === 0, 'cc-ifc opens it: IFC4, the name with its accent, no elements yet');
  const ed = new IfcEditor(WebIFC, engine);
  const inf = ed.placer().info();
  ok(inf.unitMm === 1 && inf.storeys.map((s) => s.name + '@' + Math.round(s.elevation * 10) / 10).join() === 'Level 1@0,Level 2@3200.4,Level 3@6400.8', 'millimetres; levels at 0, 3200.4, 6400.8');
  const csv = L.itemsFromCsv(fs.readFileSync(path.join(ROOT, 'tools/library/seed.csv'), 'utf8'));
  const item = { ...L.cleanItem(csv.items[0]), uuid: '11111111-1111-4111-8111-111111111111', version: 1, license: { id: 'CC0-1.0', holder: 'CadCraft', attribution: '', url: '' } };
  const p = ed.placeItem(item, { storey: inf.storeys[1].id, x: 1000, y: 1000, rot: 0, itemNumber: '1' });
  const bytes = ed.save();
  const e2 = await quiet(IfcModel.create)(WebIFC, null);
  const m2 = await quiet((b) => e2.load(b))(bytes);
  const sp = await e2.spatial();
  ok(m2.elements === 1 && sp.storeyOf.get(p.id) === inf.storeys[1].id, 'saved and reopened: the item, on Level 2');
  ok(/IFCGEOMETRICREPRESENTATIONSUBCONTEXT\('Body'/.test(new TextDecoder().decode(bytes)) && (new TextDecoder().decode(bytes).match(/SUBCONTEXT\('Body'/g) || []).length === 1, 'the item used the Body sub-context the file came with (not a second one)');
  try {
    const W = require('web-ifc');
    const a = new W.IfcAPI(); await quiet(() => a.Init())();
    const id = a.OpenModel(new TextEncoder().encode(text));
    ok(a.GetLineIDsWithType(id, W.IFCBUILDINGSTOREY).size() === 3, 'web-ifc (oracle) opens it with 3 storeys');
  } catch (e) { console.log('  --   web-ifc not installed: oracle check skipped'); }
  console.log(`\n${good} passed, ${bad} failed`);
  return bad ? 1 : 0;
}

/**
 * --rotated (Discord bug, 2026-10-14): a building turned 30° in its site at map-sized coordinates (as Revit exports with
 * shared coordinates). Copying a door must keep the door's own frame: the clip's turn and box follow the door, wall snap
 * gives the wall's direction, and the pasted copy runs along the wall — never squared to the model's axes.
 * The model is generated here (no client file): one 6 m wall and a 900 × 2100 door in it, both placed in the wall's frame.
 */
async function rotatedMode() {
  const C = await import(path.join(APP, 'clipboard.js'));
  const { snapToWall, orientedBox } = await import(path.join(APP, 'ifc-place.js'));
  const { IfcEditor } = await import(path.join(APP, 'ifc-edit.js'));
  let bad = 0, good = 0;
  const ok = (cond, label) => { if (cond) good++; else bad++; console.log((cond ? '  ok   ' : '  FAIL ') + label); };
  const ang = (a, b, mod = 180) => { const d = (((a - b) % mod) + mod) % mod; return Math.min(d, mod - d); };
  const TURN = 30, R = TURN * Math.PI / 180;
  const ifcText = (() => {
    const L = [];
    const add = (s) => { L.push('#' + (L.length + 1) + '=' + s + ';'); return '#' + L.length; };
    let g = 0; const gid = () => "'" + String(++g).padStart(22, '0').replace(/^0/, '1') + "'";
    const o = add('IFCCARTESIANPOINT((0.,0.,0.))');
    const w = add(`IFCAXIS2PLACEMENT3D(${o},$,$)`);
    const ctx = add(`IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,${w},$)`);
    const body = add(`IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*,${ctx},$,.MODEL_VIEW.,$)`);
    const mm = add('IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.)');
    const ua = add(`IFCUNITASSIGNMENT((${mm}))`);
    const proj = add(`IFCPROJECT(${gid()},$,'Turned',$,$,$,$,(${ctx}),${ua})`);
    const sp = add(`IFCLOCALPLACEMENT($,${w})`);
    const site = add(`IFCSITE(${gid()},$,'Site',$,$,${sp},$,$,.ELEMENT.,$,$,$,$,$)`);
    // the building: 417 km east, 78 km north, turned 30°
    const bo = add('IFCCARTESIANPOINT((417598225.,78717139.,0.))');
    const bx = add(`IFCDIRECTION((${Math.cos(R)},${Math.sin(R)},0.))`);
    const bz = add('IFCDIRECTION((0.,0.,1.))');
    const bp = add(`IFCLOCALPLACEMENT(${sp},${add(`IFCAXIS2PLACEMENT3D(${bo},${bz},${bx})`)})`);
    const bldg = add(`IFCBUILDING(${gid()},$,'B',$,$,${bp},$,$,.ELEMENT.,$,$,$)`);
    const stp = add(`IFCLOCALPLACEMENT(${bp},${w})`);
    const st = add(`IFCBUILDINGSTOREY(${gid()},$,'Parking',$,$,${stp},$,$,.ELEMENT.,0.)`);
    const box = (len, th, h, ox, oy, oz) => {
      const c2 = add(`IFCCARTESIANPOINT((${len / 2},${th / 2}))`);
      const prof = add(`IFCRECTANGLEPROFILEDEF(.AREA.,$,${add(`IFCAXIS2PLACEMENT2D(${c2},$)`)},${len}.,${th}.)`);
      const pos = add(`IFCAXIS2PLACEMENT3D(${add(`IFCCARTESIANPOINT((${ox}.,${oy}.,${oz}.))`)},$,$)`);
      const sol = add(`IFCEXTRUDEDAREASOLID(${prof},${pos},${add('IFCDIRECTION((0.,0.,1.))')},${h}.)`);
      return add(`IFCPRODUCTDEFINITIONSHAPE($,$,(${add(`IFCSHAPEREPRESENTATION(${body},'Body','SweptSolid',(${sol}))`)}))`);
    };
    // the wall runs along the storey's X (so 30° in the model), from (2000, 1000), 6000 × 200 × 3000
    const wp = add(`IFCLOCALPLACEMENT(${stp},${add(`IFCAXIS2PLACEMENT3D(${add('IFCCARTESIANPOINT((2000.,1000.,0.))')},$,$)`)})`);
    const wall = add(`IFCWALL(${gid()},$,'Wall',$,$,${wp},${box(6000, 200, 3000, 0, 0, 0)},$,.STANDARD.)`);
    // the door: 900 wide along the wall, 50 thick, in the wall at 2000 along it
    const dp = add(`IFCLOCALPLACEMENT(${wp},${add(`IFCAXIS2PLACEMENT3D(${add('IFCCARTESIANPOINT((2000.,75.,0.))')},$,$)`)})`);
    const door = add(`IFCDOOR(${gid()},$,'Door-Passage-Single:36" x 84"',$,$,${dp},${box(900, 50, 2100, 0, 0, 0)},$,2100.,900.,.DOOR.,$,$)`);
    add(`IFCRELAGGREGATES(${gid()},$,$,$,${proj},(${site}))`);
    add(`IFCRELAGGREGATES(${gid()},$,$,$,${site},(${bldg}))`);
    add(`IFCRELAGGREGATES(${gid()},$,$,$,${bldg},(${st}))`);
    add(`IFCRELCONTAINEDINSPATIALSTRUCTURE(${gid()},$,$,$,(${wall},${door}),${st})`);
    return { text: "ISO-10303-21;\nHEADER;\nFILE_DESCRIPTION((''),'2;1');\nFILE_NAME('turned.ifc','2026-10-14T00:00:00',(''),(''),'','','');\nFILE_SCHEMA(('IFC4'));\nENDSEC;\nDATA;\n" + L.join('\n') + '\nENDSEC;\nEND-ISO-10303-21;\n', wall: Number(wall.slice(1)), door: Number(door.slice(1)) };
  })();

  console.log('== A building turned 30° at map coordinates');
  if (args.includes('--keep')) { const out = path.join(ROOT, 'tmp/bimcraft-rotated.ifc'); fs.mkdirSync(path.dirname(out), { recursive: true }); fs.writeFileSync(out, ifcText.text); console.log('  (kept ' + out + ')'); }
  const engine = await quiet(IfcModel.create)(WebIFC, null);
  const model = await quiet((b) => engine.load(b))(new TextEncoder().encode(ifcText.text));
  ok(model.elements === 2, 'the generated model opens: a wall and a door');
  const ed = new IfcEditor(WebIFC, engine);
  const pl = ed.placer();
  const storey = pl.info().storeys[0];
  const faces = pl.wallFaces(storey.id);
  ok(faces.length === 2 && faces.every((f) => ang(Math.atan2(f.b[1] - f.a[1], f.b[0] - f.a[0]) * 180 / Math.PI, TURN) < 0.01), 'wallFaces: two faces, both running at 30°');
  ok(Math.abs(pl.planRotation(storey.id) - TURN) < 0.1, 'planRotation finds the building\'s turn: ' + pl.planRotation(storey.id) + '°');

  console.log('== Copy the door: the clip keeps the door\'s own frame');
  const snap = ed.snapshot([ifcText.door]);
  const fr = snap.frame;
  ok(fr && ang(fr.rot, TURN, 360) < 0.01, 'frame turned like the door: ' + fr?.rot + '°');
  const bw = fr ? fr.box.x1 - fr.box.x0 : 0, bd = fr ? fr.box.y1 - fr.box.y0 : 0, bh = fr ? fr.box.z1 - fr.box.z0 : 0;
  ok(Math.abs(bw - 900) < 1 && Math.abs(bd - 50) < 1 && Math.abs(bh - 2100) < 1, `the box is the door: ${bw.toFixed(1)} × ${bd.toFixed(1)} × ${bh.toFixed(1)} (not the ${(900 * Math.cos(R) + 50 * Math.sin(R)).toFixed(0)}-wide square box along the model's axes)`);
  const clip = C.elementsClip([{ id: ifcText.door, name: 'Door', cls: 'IfcDoor', guid: '' }], { model: 'm', file: 'turned.ifc', now: '2026-10-14T00:00:00.000Z', storey: snap.storey, storeyName: storey.name, storeyElevation: storey.elevation, x: fr.x, y: fr.y, rot: fr.rot, box: fr.box });
  const back = C.validateClip(JSON.parse(JSON.stringify(clip)));
  ok(back.ok && back.clip.rot === clip.rot && Math.abs(clip.rot - TURN) < 0.01, 'the clip carries the turn through storage: ' + back.clip.rot + '°');

  console.log('== Paste with wall snap');
  const ghost = C.ghostItem(back.clip);
  // a point 1 m off the wall's outer face, 4 m along it
  const f0 = faces.find((f) => f.n[0] * -Math.sin(R) + f.n[1] * Math.cos(R) > 0) || faces[0];
  const along = [Math.cos(R), Math.sin(R)];
  const p = [f0.a[0] + along[0] * 4000 + f0.n[0] * 1000, f0.a[1] + along[1] * 4000 + f0.n[1] * 1000];
  const s = snapToWall(p, ghost, faces);
  ok(s && ang(s.rot, TURN) < 0.01, 'snapToWall turns the ghost along the wall: ' + s?.rot + '°');
  const mv = C.pasteMove(back.clip, { x: s.x, y: s.y, rot: s.rot });
  ok(ang(mv.rot, 0) < 0.01, 'the copy is turned BY ' + mv.rot + '° (0 or 180: it stays along the wall; before the fix it was turned by the whole ' + s.rot + '°)');
  const r = ed.pasteElements(snap, { storey: storey.id, ...mv });
  const newDoor = r.ids[0];
  const plId = engine.api.GetLine(engine.modelID, newDoor, false).ObjectPlacement.value;
  const W = engine.api.GetWorldTransformMatrix(engine.modelID, plId);
  const dirDeg = Math.atan2(W[1], W[0]) * 180 / Math.PI;
  ok(ang(dirDeg, TURN) < 0.01, 'the pasted door runs along the wall: its X axis at ' + dirDeg.toFixed(3) + '°');
  const fr2 = ed.snapshot([newDoor]).frame;
  const gap = fr2 ? Math.abs((fr2.x - f0.a[0]) * f0.n[0] + (fr2.y - f0.a[1]) * f0.n[1]) : NaN;
  ok(Math.abs(gap - 25) < 1, 'its back is on the wall face, the whole width (centre ' + gap.toFixed(1) + ' mm off the face = half its 50 mm)');

  console.log('== Paste in place keeps the turn');
  const bs = C.besideSpot(back.clip);
  const mv2 = C.pasteMove(back.clip, bs);
  ok(mv2.rot === 0 && Math.abs(Math.hypot(bs.x - back.clip.x, bs.y - back.clip.y) - 1000) < 1 && ang(Math.atan2(bs.y - back.clip.y, bs.x - back.clip.x) * 180 / Math.PI, TURN) < 0.01, 'beside the original: 900 + 100 mm along the door\'s own X (30°), not turned');

  console.log('== A model along its axes is unchanged');
  ok(C.pasteMove({ x: 0, y: 0, rot: 0 }, { x: 5, y: 6, rot: 90 }).rot === 90 && orientedBox([0, 0, 0, 10, 20, 30], 0).box.x1 === 5, 'rot 0 clips turn by the ghost\'s turn, as before');
  console.log(`\n${good} passed, ${bad} failed`);
  return bad ? 1 : 0;
}
