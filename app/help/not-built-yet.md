---
title: What is not built yet
summary: What this BimCraft build does not do yet, and what to use instead today.
section: trouble
order: 20
keywords: missing, limits, limitations, not supported, roadmap, authoring, modeling, sections, measure, clash, bcf, cloud, desktop, export
---

BimCraft today is a reader, checker and IFC data editor that has started to draw buildings: walls, doors and windows, rooms, floors, ceilings and roofs (see [Draw walls](topic:draw-walls), [Doors and windows](topic:doors-and-windows) and [Rooms, floors, ceilings and roofs](topic:floors-and-roofs)). This is the honest list of what it does not do yet, with what to do instead.

## Modeling and authoring

| Not yet | Instead, today |
|---|---|
| Drawing beams; columns of steel sections | Use your authoring program, then open its IFC export here. Rectangular and round columns are placed here (see [Grids and columns](topic:grids-and-columns)); straight, L, U, winder and spiral stairs and railings are drawn here (see [Stairs and railings](topic:stairs-and-railings)) |
| A window in a dormer's front; dormers on roof planes drawn by hand; curved roofs; a rendered roof covering texture | Roof planes drawn by their corners, and a pitch for each wall: see [Roofs: a pitch for each wall, gables, sheds and roof planes](topic:roofs) |
| Changing walls, doors or windows that another program made | Your authoring program; the drawing tools change only what they drew |
| On curved walls: {{ui:Trim / extend}} and {{ui:Corner}}, framing, automatic plan dimensions, snapping along the arc (it snaps to its ends and the middle of its arc) | Draw the wall straight for those, or use straight segments. Curved walls are in [Draw walls](topic:draw-walls) |
| Dragging a placed library item in the 3D view | Drag it in the plan, or type X, Y and Rotation in {{ui:Properties}}: see [Place equipment and furniture from the library](topic:place-from-library) |
| Placing plants from the plant library of CivilCraft's Landscape workspace | Plant them in CivilCraft, or place trees and shrubs from the library's entourage: see [Place equipment and furniture from the library](topic:place-from-library) |
| In the Plant add-on (switched off until you turn it on): drawing a routed run into the model, spool numbers on its isometrics, a layout check of equipment placed from the library | Draw the run with {{ui:Pipe}} (see [Pipes and ducts](topic:pipes-and-ducts)); the layout check reads the add-on's own equipment table |
| Copying, turning, mirroring or arraying single drawn walls, doors and windows (a wall moves by its grips); splitting a wall; a Text tool; curtain walls | Copy everything on a level with {{ui:Copy this level…}} (see [Draw walls](topic:draw-walls#levels)); otherwise draw them again |
| Wall assembly layers drawn in the plan and the section; dimensions in sections and elevations; reference dimensions to doors, windows and other components; assemblies and membranes in schedules and quantities; a material library shared between projects; complex core-priority corners, wrapped or variable layers; editing the assembly of a wall another program made | The layers are in the wall's type and its preview ({{ui:Wall assemblies…}}); walls are measured as one envelope: see [Wall assemblies and reference dimensions](topic:wall-assemblies) |
| Changing an element's shape or size (other than walls, doors and windows drawn here, and elements placed from a family) | Your authoring program. Delete, copy, cut and paste work here: see [Delete, cut, copy and paste building elements](topic:edit-elements) |
| Deleting storeys, spaces, buildings or the site | Delete the elements in them |
| Pasting building elements into another model | Copy and paste within one model; placed library items paste into any model |
| Adding new properties or property sets | Fill in existing values here, or add the parameter in your authoring program and export again |
| Editing quantities, lists, enumerations | Your authoring program |
| Saving project files of other programs | BimCraft saves IFC (and its own family files: see [Families and their sizes](topic:families)) |
| Families: a library of families placed from the plan and shared between projects (Library), a hotspot dragged in the 3D view of a placed element (they drag in the family editor's preview and in the plan), detail levels chosen per view (one level for the project; sheets choose by scale), a revolve on an upright plane inside another family turned by a quarter turn, door and window plan symbols of their own (they draw their starter's) | Families with typed parameters, formulas, a plan symbol of their own, hotspots, repeats, detail levels, families inside families, sizes from a table and per-element parameters are made here: see [Edit a family](topic:family-editor) and [Families and their sizes](topic:families). Duplicate a family to start from one |
| Editing other programs' types as families; turning a library item into a family | Other programs' types are listed, grouped by a guess, and their elements selected. Library items are placed as they are |
| Makers' fittings, valves and equipment (capacities, weights, makers' connection sizes); ASME B16.9 tee and reducer lengths on steel spools; pressure losses through fittings, flows and balancing; sprinklers; cable trays; sizing stacks and vents by fixture units; dragging a run's corners; cutting openings in walls and slabs; letting go of a run's end fixed to a port (except by deleting the equipment); ports on library items placed from the Library panel; fitting weights; duct seams, gauges and connectors | Pipe and duct runs with generic standard fittings, systems, plans, schedules and the takeoff are drawn here: see [Pipes and ducts](topic:pipes-and-ducts). Generic equipment with ports, connected runs and the Connections check: [MEP equipment with ports](topic:mep-equipment), [Connect pipes and ducts to equipment](topic:mep-connections). Clash sets, clearances and the openings list: [Check pipes and ducts against the structure](topic:mep-against-structure). Steel spools and sheets, the duct cut list: [Steel pipe spools and spool sheets](topic:pipe-spools). Bring makers' items from your MEP program as IFC |
| Design code checks of welded I-shapes, of I-shapes whose IFC profile is not named as a rolled W, S, IPE, HEA or HEB size, and of tubes, angles and channels (they come back not checked); second-order (P-Δ), buckling or dynamic analysis; walls and slabs in the analysis; loads made from areas | The {{ui:Analysis}} tab gives forces, reactions and deflections of beams, columns and braces by first-order analysis and checks rolled I-shapes, an aid until an engineer has reviewed it: see [Analyse the structural frame](topic:frame-analysis#design-checks) |

## Viewing models

| Not yet | Instead, today |
|---|---|
| 3D from project files | Export IFC and open it. See [Get a project file into 3D through IFC](topic:rvt-to-ifc) |
| Interior elevations in the generated drawing set (from a room's Properties and on your own sheets they are built); notes and your own dimensions on elevations and sections (level marks, heights, the width and door / window tags are drawn) | The drawing set made from the model: see [Elevations, sections and sheets](topic:sheets). For any IFC model: one {{ui:Section}} plane, or a section box; see [Cut an IFC model with a section plane](topic:section-plane) |
| Callout views, detail views, drafting views and legends; drafting lines and hatch drawn in a view; cropping an elevation or section; view templates for elevations, sections, ceiling plans and 3D views; ceiling plans in the generated drawing set; a whole set of your own sheets in one PDF | Plans and ceiling plans have view ranges, a crop region, a scale and an underlay (plans also templates), and your own sheets take plans, ceiling plans, elevations, sections and schedules, each saved as a PDF: see [Views, view ranges and your own sheets](topic:views-and-sheets) |
| Moving a placed light up to the ceiling afterwards; sloped or stepped ceilings; ceiling patterns other than the five grids; a light's own symbol in the ceiling plan | Place it with **Mount: At the ceiling**; the ceiling plan draws a fixture from its own shape: see [Place equipment and furniture from the library](topic:place-from-library) |
| Sharing search sets with others, sets inside the IFC file | Sets stay in this browser; see [Find elements by class, name or property](topic:find) |
| Measuring angles, or along a path of several points | Measure each part with {{ui:Measure}}: see [Measure distances, face areas and locations in 3D](topic:measure) |
| Textures in the live 3D view | Painted materials show their color in the view and their texture in rendered pictures: see [Render a picture of the model](topic:render) |
| Clearance (soft) clashes between any two sets, clash groups, saving clash results | Run {{ui:Clash check}} and make issues of the ones that matter: see [Check for clashes](topic:clash-check). Pipes and ducts against the structure have {{ui:Check clearances}}: see [Check pipes and ducts against the structure](topic:mep-against-structure) |
| Saving several models as one set, or editing two models at once | Edit one model at a time; each saves its own file |
| Assigning issues, due dates, labels, several viewpoints per issue, editing an issue | One view per issue; see [Issues and BCF files](topic:issues-bcf) |
| `.ifczip` and `.ifcxml` | Unzip or export plain `.ifc` |
| Map layers for a model without a map conversion, or in a drawing's views | Export the model with its coordinates: see [A map on the ground under the model](topic:map-layers) |
| E57 scans over 6 million points or 512 MB; scanner makers' own files (RCP, RCS, FLS, LGS, TZF, ZFS); point clouds in a drawing's 3D view; saving a cloud's place with the model | Export the scan as LAS or LAZ and open it beside an IFC model: see [Point cloud formats](topic:point-cloud-formats) and [Show a point cloud beside the model](topic:point-clouds) |
| Registering scans: finding targets (spheres, checkerboards) in a scan by itself, solving all scans together (bundle adjustment), scale, registering against a model | Pick matching points or type target coordinates, then refine one scan at a time with ICP: see [Register several scans into one](topic:register-scans) |
| Opening `.pln`, `.pla`, `.tpl` and `.bpn` project files | Export IFC and DWG from them, or a project bundle: see [Open .pln and .pla project files](topic:pln-project-files) and [Open a project bundle](topic:open-project-bundle) |
| Opening the {{ui:Elements}} list to select by kind | Click a kind's group in the {{ui:Model tree}}: see [Find your way with the model tree](topic:model-tree) |
| Typing a comment or a title on an issue in VR, voice notes, moving a section plane by hand in VR, a section box in VR | Place the issue in VR, then add its words in the Issues tab; set a section plane or box in the 3D view before you go in: see [Review the model in a VR headset](topic:vr-review) |
| Seeing people at the desk in VR (only people in VR show), recording a VR walk | Ask them to join in VR, or follow along in the 3D view |
| Daylight simulation (climate-based daylight, glare, sun hours), roof windows in the daylight factor, checks against BS EN 17037 or green building schemes; the ISO 52016-1 energy method, hourly energy simulation, thermal mass and bridges, climate files | Design aids: the average daylight factor, each window's vertical sky component, the sun through the windows on a date and the daylight factor on a grid ([Estimate the daylight in each room](topic:daylight-factor)); heat loss, a degree-day year and a cooling peak per room ([Estimate heating and cooling loads](topic:heating-and-cooling-loads)). Use a simulation program for compliance |
| A hosted building twin: readings kept and alerts emailed while BimCraft is closed, maintenance-due emails; MQTT 5; reading COBie's jobs back | Readings from a CSV or straight from your own broker or address while the model is open, limits that flag assets, documents, COBie out and in: see [Keep asset data and a maintenance record in the model](topic:assets-and-maintenance) |
| A plug-in or live link for Enscape, Twinmotion or other visualization programs; FBX or Datasmith files; one object per element, saved views and walks in the .glb | Save a .glb for rendering programs that read glTF, a USD file (one object per element, with its IFC data: see [Export the model as USD](topic:usd)), or the IFC for those that run inside another design program: see [Send the model to a rendering program](topic:model-for-rendering) and [Open the scene in another program](topic:render-open-in) |
| Another program drawing the Render picture without a render-engine add-on (CadCraft never runs a program under the GNU GPL licence); panorama or stereo cameras and a sky picture through another program; the Unreal Engine plug-in (the files are written, the plug-in that opens them is not released) | Our own Fast and Path tracer engines; an add-on's engine ([draw the picture with another program](topic:render-other-program)); a USD, glTF or Unreal folder file from the Engine list to take to any program |
| In the live view: scattering plants and rocks, sharing panoramas, a tour, an offline viewer or a video | ModelCraft's live view has them; here, render pictures and 360° panoramas: see [The live view](topic:live-view) and [Render a picture of the model](topic:render) |

## Drawings

| Not yet | Instead, today |
|---|---|
| Editing, measuring or saving DWG and DXF | The CadCraft drafting app ({{ui:Edit in CadCraft}} on the 2D view) |
| Printing or exporting PDF | Print from the program that made the drawing; check it first with {{ui:Print view}} |
| Plot styles and pen tables | {{ui:Print view}} shows plain black with line weights |
| DWG files older than R13, and binary DXF (BimCraft says so when you open one) | Save the drawing again as a newer DWG, or as ASCII DXF |
| Drawings linked inside linked drawings | Open them directly |
| TIFF pictures | Save a PNG or JPEG copy with the same name and add it |
| DGN drawings | Listed in folder reports only |
| Objects listed under **Not drawn yet** | View the drawing in the program that made it |
| ACIS solids, bodies, regions and surfaces, and subdivision meshes in 3D | Export IFC or 3D faces from the program that made the drawing |
| Pictures, multileaders and sheets in the 3D view of a drawing | See them on the {{ui:Model}} tab and the sheets |
| Picking objects in a drawing's 2D view | Switch to {{ui:3D}} and click the object there: see [See a DWG or DXF drawing in 3D](topic:dwg-in-3d) |
| Equipment schedules from drawings without `KCL-ITEM` tags | Not available |
| Equipment schedule as XLSX or PDF | {{ui:Download CSV}} and open it in a spreadsheet |

## Files and platforms

| Not yet | Instead, today |
|---|---|
| Cloud saving | Save copies on your computer or office server. Cloud saving is not available yet |
| Remembering folders in Firefox and Safari | Choose the folder again, or drag it in |
| Undo after saving | Open the original file again to start over |
| Filling in the missing part of a cut-off project file | Copy the original again; in a folder, BimCraft reads the newest complete backup |
| Reopening the files you had open | Unsaved changes are offered back as "Recover your work?" when you return; open the files again from the recent list |
