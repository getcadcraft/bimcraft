---
title: What's new in 0.8 and 0.8.1
summary: BimCraft adds people walked through the building, room acoustics you can hear, flood, wind and earthquake playback, a fifty-year life-cycle view, checks against an IDS, tags and schedules, Move, Align and Distribute, pictures under the plan, walls from a scan, panel drawings, solar, split and VRF systems, pipe and cable sizing, concrete and seismic checks, any map projection, a render engine choice, and Studio undo; 0.8.1 fixes the Ribbon layout's greyed tools.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, evacuation, people, queues, acoustics, reverberation, impulse response, flood, wind, earthquake, hazard, life cycle, service life, ids, tags, schedules, move, align, distribute, picture, background, scan to walls, site from civilcraft, panel drawings, framing, solar, pv, split, vrf, fan coil, pipe sizing, cable tray, illuminance, concrete, seismic, compare scan, epsg, projection, documents, template, carbon, cost, energyplus, render engine, open in, usd, glb, unreal, undo, add-ons, pcf, symbols, plants, trace, pens, ribbon, project browser, layout
---

This is what changed in BimCraft 0.8 (2026-11-01) and 0.8.1 (2026-11-02), compared with 0.7. BimCraft can now answer questions about a building and test it, with people, sound, water, wind and earthquakes, and draw it with more tools; 0.8.1 is a fix release.

## New

### Test the building

- **People in the building.** The {{ui:People in the building}} section of the left panel walks an evacuation or a normal day's arrivals through your rooms, doors and stairs. You see the queues where the building narrows, the longest walk to an exit from each room and how long the last person takes. Tick {{ui:Shut}} on a door to see what changes, and tick {{ui:Show the people in the 3D view}} to watch the walkers. The findings go to Problems. A coarse crowd model for design decisions, not a fire-safety certificate. See [Walk people through the building](topic:people-in-the-building).
- **Room acoustics, and hear it.** The {{ui:Room acoustics}} section gives each room's reverberation time by octave band (Sabine and Eyring) from its size and the finishes you pick, and with a target of your own says how much absorption would meet it. {{ui:Play it in this room}} plays a voice, a clap, plucked notes or your own sound file through an impulse response computed for the room. The absorption figures are typical published values for you to replace. See [Room acoustics](topic:room-acoustics).
- **Flood, wind and earthquake playback.** {{ui:Hazard playback}} plays water rising through the rooms, wind pressure on each storey and an earthquake shaking the storeys, on a plan or an elevation with a time slider. Simple models with their assumptions on the panel; not a code check. See [Play a flood, wind or an earthquake](topic:hazard-playback).
- **What wears out in fifty years.** {{ui:Life-cycle view}} lists the windows, doors, finishes and roof with a service life each, the years they are replaced and, when you type a cost per unit, the cost by year and its present value. {{ui:Save the schedule (CSV)}} writes it out. The service lives are planning figures. See [See what wears out over fifty years](topic:life-cycle-view).
- **Concrete and seismic checks.** The {{ui:Concrete members}} and {{ui:Seismic loads}} blocks of the {{ui:Analysis}} tab check concrete beams and columns to ACI 318-19 and make equivalent lateral forces to ASCE 7-22 on rigid floors, with storey drift. For an engineer to check. See [Check concrete members and make seismic loads](topic:concrete-and-seismic).

### Check and report

- **Check against an IDS.** Load the `.ids` file a client gave you and see every element that does not meet it in Problems, before you deliver the IFC. Open {{ui:Check against an IDS}} under {{ui:Model checks}}. See [Check a model against a client's IDS](topic:check-against-ids).
- **Tags and schedules.** Define your own tags, set them on many elements at once and make schedules whose columns, filters and groups read them; the tags are kept in the IFC. See [Tags and schedules](topic:tags-and-schedules).
- **Documents from the model.** {{ui:Documents from the model}} fills a specification template from the open IFC and saves it as a PDF, a Word document or Markdown. See [Documents from the model](topic:documents-from-the-model).
- **Compare a scan with the model.** With a point cloud open, {{ui:Compare}} judges each element as built, partly built, missing or not reached, and shows the percent built. See [Compare a scan with the model](topic:compare-scan-with-model).
- **Carbon and cost.** The Carbon pane adds up embodied carbon from a factor table you can edit, and the Cost pane spreads prices over the 4D schedule. The factors that come with BimCraft are generic and marked unchecked. See [Embodied carbon and cost](topic:embodied-carbon-and-5d-cost).
- **Any map projection.** {{ui:Measure}} › {{ui:Coordinate system…}} takes an EPSG number, a UTM zone, a name or your own projection definition. See [Georeference with any projection](topic:georeference-any-projection).

### Draw and edit

- **Move, Align and Distribute.** Under {{ui:Build}}; {{key:Shift+M}} starts Move (plain {{key:M}} is still Measure). Move copies as you go with {{key:C}}, each step is one undo, and it travels in a Live TeamWork session. See [Move, copy, align and distribute](topic:move-align-distribute).
- **Pictures under the plan.** {{ui:Build}} › {{ui:Picture}} places a PNG, JPEG or WebP under a level's plan or on a vertical plane. Set the scale by two points, and move, turn, fade and lock it. An area copied in MarkupCraft pastes in at its sheet's scale. See [Put a picture under the plan](topic:pictures-as-backgrounds).
- **Walls from a scan.** With a scan open, walls, doors and rooms come as proposals you keep or reject one by one, in one undo step. Only walls in two perpendicular directions are found. See [Turn a scan into walls](topic:scan-to-walls).
- **Trace, pens and sketch stair.** {{ui:Trace}} shows another level dashed under the plan, {{ui:Pens}} gives walls, doors and windows their own line weight in one view, and {{ui:Sketch stair}} turns a walking line into a stair. A Wavefront OBJ mesh opens. See [Trace a level, pens and a stair from a sketch](topic:trace-pens-stairs-obj).
- **Buildings round an address.** The buildings and parcel that CivilCraft's Address to site found arrive as suggestions; you tick the ones to add. See [Start from CivilCraft's site](topic:site-from-civilcraft).
- **Panel drawings.** {{ui:Build}} › {{ui:Panel drawings}} frames walls, floors and roofs in timber or light-gauge steel and saves a cut list as CSV and shop drawings as a PDF. Starting values, not a structural design. See [Panel drawings](topic:panel-drawings).
- **Symbol palette and plants.** {{ui:Build}} › {{ui:Symbol palette}} finds electrical and plumbing symbols by name; the {{ui:Plants}} source of the {{ui:Library}} lists about 400 plants with plan symbols. See [Symbol palette](topic:symbol-palette) and [Place a plant](topic:plant-list).

### Pipes, ducts and energy

- **Split, VRF and fan coils.** Indoor and outdoor units with their connections, and line sets sized from a table of typical example values that you can change. See [Split, VRF and fan coils](topic:split-vrf-fan-coils).
- **Calculations.** The Calculations pane checks supply pipe and duct sizes with pressure drop, routes cables through trays and conduits and shows their fill, and computes illuminance from IES or EULUMDAT files. Defaults are labeled; type the values of your code. See [Pipe, duct, cable and light calculations](topic:mep-calculations).
- **PCF files.** The Pipe tool's **Export PCF** writes the runs for pipe-stress and isometric programs, and a PCF file read back draws its pipe. See [Piping component files](topic:piping-pcf).
- **Solar PV.** Fit arrays on roofs or the ground, shade them from the model, estimate yearly energy, check strings and make one-line diagram data. The starter module and losses are generic. See [Solar PV](topic:solar-pv).
- **EnergyPlus file.** The Check with EnergyPlus pane writes the model as an IDF to run in your own EnergyPlus. Running it in the browser needs a build you host yourself and type the address of; BimCraft does not carry it. See [Check heating and cooling with EnergyPlus](topic:check-with-energyplus).

### Pictures and files

- **Choose the render engine.** {{ui:Render}} has an {{ui:Engine}} choice. Our two built-in engines (Fast and Path tracer) stay the default. **Open in** saves the scene as a USD or glTF file, and an Unreal project folder as a .zip; in CadCraft Studio an add-on can add an engine. The Unreal plug-in that opens the project is not released. See [Choose which program draws the picture](topic:render-engines).
- **Studio undo.** Inside CadCraft Studio, BimCraft tells Studio each finished step so Studio can undo your last step in whichever window you used last. See [Undo across apps](topic:undo-across-apps).
- **Add-ons in your file.** An IFC records which add-ons wrote into it, and offers the ones you lack when you open it. See [Add-ons in your file](topic:add-ons-in-your-file).

### In every app

- **Connect your AI.** Your own assistant can drive BimCraft through Studio's connection and answer questions about the model, such as which rooms are under a given area. Studio has no AI of its own. See [Let an AI assistant work with your model](topic:assistants).
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} offers Wrap, 2 rows or 1 row; Wrap stays the default.
- **Input devices.** Trackpad, pen, 3D mouse, controller and MIDI settings are shared by all apps.
- **Problems and Live.** The warnings panel and Live sessions work as before, with the new checks above feeding Problems.
- **Languages.** 54 languages, ten of them new. Those other than English are machine drafts not yet read by a native speaker; help topics are mostly English.

## Fixed in 0.8.1

- **Ribbon + Project browser layout.** Insert › Import CAD, Insert › Image and Manage › Project Units said "Not built in BimCraft yet". Image now opens the Picture tool, Import CAD opens {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF or a scan), and Project Units opens {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Move and Align run the Move and Align tools, Level opens {{ui:Add levels…}}, Phases opens the Renovation phases section and Materials opens the material library.
- **DWG classes section.** It was read as the wrong type; fixed in BimCraft and the other apps that read DWG.
- **Language at run time.** Studio and the packed editions can now switch language without a restart. This is not yet tested on every platform; tell us if the language does not change.
- **Archicad bundle script.** `archicad_bundle.py`, a separate download, now finds Archicad's path, watches the folder for up to 20 seconds and retries beside the bundle.

## Not in this version yet

- **Safety and design aids.** People in the building has no travel-distance limit from a building code (you type the limit) and has not been checked by hand on a real plan. The acoustics, life-cycle and hazard figures are planning values, not a code check.
- **Climate futures and EnergyPlus.** No built-in climate futures: you can load a scenario file for the flood run. The EnergyPlus run in the browser is not part of this release.
- **Ribbon layout.** Material Takeoff stays "Not built" because BimCraft has no material quantity list, and 54 other greyed ribbon tools have no BimCraft tool behind them yet.
- **Signing and platforms.** Windows installers and the macOS .dmg are unsigned, so SmartScreen shows {{ui:More info}}, then {{ui:Run anyway}}, and macOS needs right-click then {{ui:Open}}. The iPad and iPhone build was not rebuilt for 0.8.1.
- **Real-page tests.** Some older BimCraft browser tests still fail in our test page, as they did before 0.8.1.

Everything else is in [What is not built yet](topic:not-built-yet). Earlier changes are in [What's new in 0.7](topic:whats-new-0-7).
