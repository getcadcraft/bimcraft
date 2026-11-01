---
title: What's new in 0.7
summary: BimCraft adds walls through several levels and Copy this level, walls from PDFs and scans, your own wall assemblies, richer families, MEP equipment with ports, clash sets, openings and pipe spools, asset documents, COBie and sensor readings, sky, sun, daylight on a grid and heating and cooling loads, scan registration, a live view and path tracing on the graphics card, STEP and USD, library variants, and more for AI assistants.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.7, version, new features, walls through levels, copy this level, pdf, scan, trace, walls from plans, wall assemblies, layers, core, membrane, reference dimensions, material library, display units, view style, framing, joists, families, parameters, plan symbol, hotspots, repeat, detail level, nested families, csv sizes, per element, equipment, ports, connections, clearances, openings, spools, spool sheets, field weld, duct cut list, documents, cobie, sensors, mqtt, live feed, vertical sky component, solar gain, daylight grid, heating, cooling, loads, u-value, register scans, icp, e57, live view, path tracing, webgpu, denoise, physical sky, light mixing, render queue, your machine, step, usd, project bundle, develop a mass, variants, assistants, add-on api, plant, electrical, design checks
---

This is what changed in BimCraft 0.7, compared with 0.6. The list is grouped by area, with the most important first.

## New

### Draw a building

- **Walls through several levels.** The Wall tool's height list offers **Up to** any level further up, as Properties does for a picked wall. The plans of the levels in between show the wall lighter, rooms there close against it, and doors and windows can be placed in it from those plans; **Runs through** in Properties names the levels it passes. See [Change a wall, door or window](topic:change-a-wall-or-door#change-a-wall).
- **Copy this level.** {{ui:Copy this level…}} in the Levels panel draws a level's walls with their doors and windows, its floors and ceilings again on another level or on a new one on top, in one undo step; rooms appear by themselves. See [Draw walls](topic:draw-walls#levels).
- **Walls from a PDF or a scan.** {{ui:Build}} › {{ui:From a drawing…}} now takes a PDF (line work or a scan inside it) or a scanned plan (PNG, JPEG, TIFF, many pages): each page becomes the walls, doors, windows and rooms of a level, with the page kept under its plan. The trace uses no network and no trained model, and the result is what the lines gave: check each level against its page. See [Walls from a set of plans](topic:walls-from-plans).
- **Your own wall assemblies.** {{ui:Wall assemblies…}} builds a wall type layer by layer, with a core, air gaps and membranes, and a dimensioned preview; {{ui:Material library…}} keeps the project's materials in the IFC; {{ui:Annotate}} › {{ui:Reference dimension}} measures to faces and core lines and follows the walls when they change. From a community contributor, Doc (drsurfbum). See [Wall assemblies and reference dimensions](topic:wall-assemblies).
- **Display units and view controls.** {{ui:Units}} on the toolbar shows lengths in feet and inches, inches, decimal feet, millimeters, centimeters or meters, in dimensions, schedules, coordinates, measurements and sections. {{ui:Plan}}, {{ui:Split}} and {{ui:3D}} sit in the toolbar, the split can be dragged (or moved from the keyboard), {{ui:Shaded}}, {{ui:Edges}} and {{ui:Wireframe}} sit beside the view cube, and roof pitch, fascia and soffit change the picked roof at once. From a community contributor, Joel (yisraelk). See [Draw walls](topic:draw-walls#levels).
- **Floor joists by span.** {{ui:Framing}} can lay out engineered joists (preliminary) as well as sawn lumber, picking the smallest listed series and depth that reaches the span, 16" or 24" on center, in either direction; they go in the IFC and the cut list. A suggestion from a maker's published table, not engineering. Also from Joel. See [Framing walls, floors and roofs](topic:framing).
- **More electrical devices.** {{ui:Electrical}} adds data, phone and audio-video outlets, a selector switch, a timer, a thermostat, smoke and heat detectors, a pull station and a siren, a fan, an energy meter and a sub-panel, each its own IFC class. See [The electrical plan](topic:electrical-plan).

### Families

- **Families do more.** Parameters can be whole numbers, text, a material, a pen or a fill; a family can draw its own plan symbol, repeat a solid, mark parts for coarser detail levels, hold other families (a leg in a table), and have hotspots you drag, also on a placed element in the plan. Sizes come from a CSV table, and parameters marked **Per element** let two doors of one size differ. See [Edit a family](topic:family-editor#plan-symbol) and [Families and their sizes](topic:families#sizes-from-a-table).

### Pipes, ducts and equipment

- **Equipment with ports.** {{ui:Build}} › {{ui:Equipment}} places a generic air handler, inline fan, pump, boiler, water heater, terminal unit, diffuser, grille or tank, sized by the values you type, with its pipe and duct connections as ports. Each is saved as its IFC class with IFC ports. See [MEP equipment with ports](topic:mep-equipment).
- **Connected runs.** A pipe or duct started on a port takes its size and system and stays fixed to it: move the pump and its pipe follows. {{ui:Check connections}} lists open ports, loose ends, size and system mismatches and runs nothing supplies. See [Connect pipes and ducts to equipment](topic:mep-connections).
- **Pipes and ducts against the structure.** The {{ui:Clash check}} has ready-made sets and {{ui:Pipes and ducts × structure}} in one click; {{ui:Check clearances}} uses each run's insulation plus a gap you type; {{ui:Openings needed}} lists where runs pass through walls and slabs, as CSV and BCF issues. Nothing is cut. See [Check pipes and ducts against the structure](topic:mep-against-structure).
- **Steel pipe spools.** A steel run is cut into numbered spools at a longest length and at {{ui:Field weld}}s you place; {{ui:Spool sheets (PDF)}} gives a page per spool with its isometric view, cut lengths, fittings, welds and bill of materials, and {{ui:Duct cut list}} lists straight duct pieces. See [Steel pipe spools and spool sheets](topic:pipe-spools).

These are drafting and coordination aids, sized by an engineer: no flows, pressures or balancing.

### Running the building

- **Documents per asset.** The {{ui:Assets}} tab links manuals, warranties, photos and drawings to an asset by a file name beside the IFC or a web address; only the link goes in the IFC. See [Documents](topic:assets-and-maintenance#documents).
- **COBie spreadsheet.** {{ui:Save as COBie (.xlsx)}} writes the COBie 2.4 handover workbook, and a COBie workbook read back lists every change before one {{ui:Apply}}. It has not been through a COBie validator yet. See [COBie spreadsheet](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensor readings and live feeds.** Open a CSV of readings, or {{ui:Connect}} straight from the browser to your own MQTT broker or an address your building system answers: each asset shows its latest reading and a chart, is coloured on the model, and is flagged outside the limits saved in the IFC. Readings stay in the tab; passwords are never saved. See [Sensor readings](topic:assets-and-maintenance#sensor-readings) and [Live readings](topic:assets-and-maintenance#live-readings).

### Daylight and energy

- **Sky and sun at every window.** The {{ui:Daylight}} tab gives each window its vertical sky component and angle of obstruction, follows the sun through a date with {{ui:Sun through the windows on a date}}, and works out the {{ui:Daylight factor on a grid}} across each room, drawn on its plan. See [Vertical sky component of each window](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Heating and cooling loads.** {{ui:Heating and cooling loads}} works out each room's heat loss, its heating over a year from degree-days and its cooling peak, from what bounds it in the model and each element's U-value; a U-value typed there is written into the IFC. See [Estimate heating and cooling loads](topic:heating-and-cooling-loads).

Both are design aids by published methods, not compliance calculations, and every panel says so.

### Scans

- **Register several scans.** {{ui:Register scans…}} (on the start panel, or in {{ui:Show}}) places scans in one frame by picked point pairs or typed targets, refines them with ICP point to point then point to plane, saves the registration as a small project file and writes the registered cloud as one LAS or E57 file. See [Register several scans into one](topic:register-scans).

### Pictures and the live view

- **The live view.** {{ui:Live view}} on the toolbar shows the model in the real-time look beside the 3D view, following it and every change, with Walk, the time of day and the month; {{ui:Live view in a new window}} puts it on a second screen. See [The live view](topic:live-view).
- **Path tracing on the graphics card.** With WebGPU, {{ui:Render}} › {{ui:High quality (path traced)}} runs CadCraft's own path tracer on the graphics card, can stop and {{ui:Resume}}, and is denoised at the end; without WebGPU it uses the WebGL path tracer as before. See [High quality](topic:render#high-quality).
- **More in the Render dialog** (on the graphics card, so it needs WebGPU): a physical sky and sky pictures, IES light profiles, a camera with f-stop, depth of field, two-point perspective, white balance and 360° panoramas, a grade for the finished picture, light mixing and render elements after the render, fog, smoke and caustics, saving as 16-bit PNG, EXR or a render file, and a render queue. See [Skies and light profiles on the graphics card](topic:render#skies-and-light-profiles-on-the-graphics-card) and [The render queue](topic:render#the-render-queue).
- **Your machine.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} shows the graphics, processor cores and memory this browser lets the app use, and the level rendering starts at. See [What your machine renders with](topic:your-machine).

### Files and other apps

- **STEP files open.** A `.step` or `.stp` part, piece of equipment or supplier's model (AP203, AP214, AP242) opens as a small IFC model, each solid an element you can inspect, section, measure and save as IFC. Colors and the assembly's part names are not read yet. See [Files BimCraft opens and saves](topic:files#what-it-opens).
- **USD export.** {{ui:USD}} on the toolbar writes the open models as `.usda`, `.usdc` or `.usdz`, laid out site, building, storey and discipline, with every element's IFC class, GlobalId and properties. See [Export the model as USD](topic:usd).
- **A mass from CivilCraft.** A building mass sent from CivilCraft's site view shows its study numbers in Properties, and {{ui:Develop this mass}} builds walls on every level and a floor from it in one undo step. See [Develop a building mass from a site study](topic:develop-a-mass).
- **Library items with variants.** An item that comes in several variants has a {{ui:Variant}} choice in the {{ui:Library}} tab; the placed element keeps its variant in the IFC, {{ui:Swap item…}} lists the other variants, and copies and updates keep it. See [Place and swap a library item that has variants](topic:library-variants).
- **Project bundles in a folder.** {{ui:Open a folder}} lists `.ccbundle.zip` files under {{ui:Project bundles}}, and each layout in a bundle has **Open in …**: the PDF to MarkupCraft, the DWG to CadCraft, in a new tab. See [Open a layout](topic:open-project-bundle#open-a-layout).

### Assistants and add-ons

- **More for AI assistants.** An assistant can now rename elements and set property values, move and delete elements, change walls, doors and windows, export USD, and render a picture or run the render queue; each change is one undo step. See [Let an AI assistant work with your model](topic:assistants).
- **Add-ons can build in the model.** The add-on API 1.1 lets an add-on make a change in the model as one undo step (it travels in Live TeamWork), read the model, and read pipe and duct runs, ports, equipment and spools.
- **The Plant add-on** (switched off until you turn it on in {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}): pipe specs checked against the runs, isometric drawings of a run as SVG and DXF with a bill of materials, generic process equipment with nozzles placed in the model, a router between two ports, and a factory layout check. A drafting aid, not an engineering approval; its words are English only.

## Changed

- **A first house on a laptop.** On a laptop-sized screen BimCraft starts with the plan alone, the Draw bar is a narrow panel with the plan fitted beside it, the plan and the 3D view come back into view when the drawing leaves them, the 3D view frames the whole house in a narrow pane, and doors and windows are picked before dimension lines.
- **Saving a picture.** **Save PNG** in the Render dialog is now {{ui:Save}}, with {{ui:Save as}} beside it for the other formats. See [Save the picture](topic:render#save-the-picture).
- **The Analysis tab** has a {{ui:Design checks}} block: it makes the load combinations of ASCE 7 or EN 1990 for your cases and checks each rolled steel I-shape (a W, S, IPE, HEA or HEB size by its profile name and size) to AISC 360 or EN 1993-1-1, showing how much of its capacity it uses. An aid until an engineer has reviewed it; welded shapes and other sections say "not checked". See [Design checks](topic:frame-analysis#design-checks).

## Fixed

- Redo after a step that made a new family size failed ("no size"). Every step now makes the same IFC GlobalIds again on a redo, so redo works for families and every other change.
- When two people saved the same family (in a Live TeamWork session or two windows), the second save silently replaced the first one's change. It now refuses and says how to see their change and make yours again.
- A model in US survey feet was read as 0.3048 m to the foot instead of 0.3048006096 m, which moved every georeferenced IFC in US feet on the map.
- The family editor: closing it no longer drops the keyboard focus to the page, its Save stays in sight on a phone, and its fields no longer make a phone zoom in.

## In every app

- **Units.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} has one list each for length, area, volume, angle and slope, with the exact sizes the units' definitions give (the US survey foot is its own unit). Switch off the units you never use and they leave the unit lists; star one and new work starts in it. A file always keeps its own unit. In BimCraft the {{ui:Units}} list on the toolbar follows the switches, the star sets the display units until you pick them on the toolbar (your earlier pick is kept), and the drawing tools' length boxes take any unit's mark, such as `3.5 m` or `10 US ft`. See [Units, typed values and the unit lists](common:unit-lists).
- **A denser layout and panels that tidy away.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fits more on the screen (touch screens and phones keep their large buttons). Each side panel has a slim title bar: drag it to dock or float the panel, drop it on another panel's bar to share one frame as tabs, pin it to slide away to the edge, or hide it and bring it back from the edge. See [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Dialogs move.** Drag a dialog by its title bar out of the way of the drawing; it comes back where you left it. Double-click the title bar to centre it again. See [Move a dialog](common:arrange-panels#move-a-dialog).
- **Recipes for AI assistants.** Ten worked requests for your own assistant (tidy a drawing, plot a set, check drawings, ask a model questions, total a takeoff, try a part variant…), each with the tools it calls and the permissions it needs, and each replayed by our tests. The apps contain no AI. See [Recipes for AI assistants](common:assistants-recipes).
- **Languages.** **Português (Portugal)** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. It, **Português (Brasil)**, **Español (México)** and **Bahasa Indonesia** now have every word of the apps, as drafts not yet reviewed by a native speaker. Help topics are in English, with a few in Spanish.
- **CadCraft Studio** says why an update check failed (no file for your system yet, no network, a bad signature) instead of just "Done", and stops bringing back a What's new card you closed until there is a newer release.

## Not in this version yet

- **0.7 is not code-signed.** Signing, and the Microsoft Store package, moved to 0.8 because the certificate validation has not come through yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. CadCraft Studio is not in an app store yet, and there is no iPad or iPhone build yet.
- The angle and slope lists in {{ui:Units}} are saved, but no box reads them yet.
- Path tracing on the graphics card, the extras in the Render dialog and the render queue need WebGPU (without it, high quality uses the WebGL path tracer); the live view uses WebGPU where the browser has it, else WebGL 2. They have been tested here on a software graphics stand-in only, not yet on real graphics cards. The live view has no scatter or sharing in BimCraft (ModelCraft's has them).
- Rendering a recorded walkthrough as a video isn't built in BimCraft.
- Design checks: an I-shape whose IFC profile name is not a W, S, IPE, HEA or HEB size (or whose size differs from it) is taken as welded and comes back "not checked", as do tubes, angles, channels, slender parts and torsion. No engineer has reviewed the checks yet.
- Drawn elements can't be copied one by one, turned, mirrored or arrayed (a whole level can be copied), and there is no split wall, Text tool or curtain wall. A wall that meets a wall from a lower level on an upper level isn't cut into that wall's 3D body, and schedules list an upper-level opening under its wall's own level.
- Families: a library of families shared between projects isn't built. Families and copied levels have not yet been opened in other BIM programs.
- MEP: equipment is generic (no makers' data); tees and reducers on steel spools are generic, not from the ASME B16.9 table; ports of library items placed from the {{ui:Library}} tab aren't written into the IFC; nothing is reviewed by an engineer.
- The Plant add-on can't yet draw a routed run into the model, number spools on its isometrics or check the layout of equipment placed from the library.
- Plants from CivilCraft's plant library can't be placed from BimCraft's {{ui:Library}} tab yet.
- Energy: no hourly simulation, no ISO 52016-1 method and no climate files. Assets: no hosted twin that keeps readings or sends alerts while BimCraft is closed.
- Scan registration has been tried on test scans, not yet on a real scanner's scan set; E57 files still open up to 6 million points and 512 MB.
- Project bundles open in BimCraft only (the other apps take a layout through **Open in …**), and bundles and the two-program kit have been tested against stand-ins, not yet with Archicad or Revit themselves.

Everything else is in [What is not built yet](topic:not-built-yet).
