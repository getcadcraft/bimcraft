---
title: What's new in 0.10
summary: Rooms, room separators, areas and shafts, curtain systems, model groups, work planes, model lines and text, elevations, walls that stay joined, level of development, project stages, schedules and quantities, model checks, and plans from PDFs and scans.
section: start
order: 5
keywords: whats new, what's new, 0.10, release notes, changelog, changes, version, new features, room, rooms, room separator, room tag, area, area boundary, gross building area, rentable area, shaft, vertical opening, wall opening, curtain system, curtain wall, curtain grid, mullion, model group, work plane, reference plane, model line, model text, elevation, tile views, walls, joins, disallow join, attach top, attach base, wall profile, lean, lod, level of development, ifc class, classification, uniformat, omniclass, uniclass, starter types, swap type, milestone check, project stages, massing options, submission set, revisions, close-out, field-verified, as-built ifc, schedules, totals, xlsx, google sheets, csv, finish schedules, gross and net, measurement method, bricks, blocks, mortar, model checks, missing tags, unnamed rooms, clash, lod 350, pdf to model, scan, presentation pack, render presets, default policies, pro layouts, trackpad, swipe, tour
---

This is what changed in BimCraft 0.10, compared with 0.9. The big parts are rooms and areas, more building tools on the ribbon, level of development and project stages.

## New

### Rooms, areas and openings

- **A Room tool with room separators.** Pick a room to name and number it and read its area, perimeter and volume; a room separator divides two rooms that have no wall between them. See [Rooms and room separators](topic:rooms-and-separators).
- **Room and area tags** with the number, name and area. See [Room and area tags](topic:room-and-area-tags).
- **Areas and area boundaries** for gross building area and rentable area. See [Areas and area boundaries](topic:areas-and-area-boundaries).
- **Shafts and vertical openings**, and {{ui:Wall Opening}}. See [Shafts and openings through floors](topic:shafts-and-vertical-openings).

### More building tools on the ribbon

- **Curtain systems:** draw one, set its grid and its mullions, or lay one on a face. See [Curtain systems](topic:curtain-systems).
- **Model groups.** See [Model groups](topic:model-groups).
- **Work planes and reference planes.** See [The work plane](topic:work-plane).
- **Model lines and model text.** See [Model lines and model text](topic:model-lines-and-text).
- **{{ui:Elevation}}** places a marker and makes its view, and **{{ui:Tile Views}}** shows plan and 3D side by side. See [Place an elevation and open its view](topic:place-an-elevation).

### Walls stay joined and square

- Moving, resizing or changing the type of a wall carries the walls joined to it, including a wall that ends on another's side. Disallow join frees one end.
- Wall shape: attach the top or base to a roof or slab, edit the profile, or lean a wall.

### Level of development

- An LOD tag, an IFC class and classification fields (Uniformat, OmniClass, Uniclass) on every element, generic starter types at LOD 100 to 200, swap type without redrawing, level of detail shown apart from level of development, and a milestone check per element. See [Level of development](topic:level-of-development) and [Classification codes](topic:classification).

### Project stages

- Site survey, building lines and massing options (stage 2), cost quantities (stage 3), a submission set with revisions against what was submitted (stage 4), working drawings and schedules (stage 5), and a close-out package with elements marked field-verified and an as-built IFC (stage 7). See [Project stages](topic:project-stages), [Massing options](topic:massing-options), [Issues, revisions and the drawing changelog](topic:issues-and-revisions) and [Mark elements as checked or field-verified](topic:verification).

### Schedules and quantities

- Schedules grouped by type with totals, exported as a spreadsheet workbook (.xlsx), to Google Sheets and as CSV. See [Lay out, save and export a schedule](topic:schedule-layouts).
- Finish schedules by room, wall and zone. See [Room finishes and finish schedules](topic:room-finishes).
- Gross and net with openings deducted once, a measurement method per project, and bricks, blocks and mortar counted from the wall type. Types have real layer thicknesses.

### Checks, plans and presentation

- **Model checks:** missing tags, unnamed rooms, elements below the stage's LOD, and LOD 350 clash checks between disciplines. See [Audit the model](topic:audit-the-model).
- **Plans from PDFs and scans** become a starting model, marked unverified.
- **Presentation packs** with an option comparison table (area and cost). See [Client packs, stage reports and comparing options](topic:client-pack-and-stage-report).
- **Render presets** (Exterior, Interior and more).
- **Default Policies add-on** (off by default): the first wall type and starter LOD for new projects, set once by an office. See [Default Policies](topic:default-policies).

## Fixed

- The Move tool, and changing the type of several walls at once, left joined walls behind.
- A section that cut a wall opened an empty panel; a section sheet through joined walls printed "Envelope fallback".
- The Walls by type schedule could not be put on a sheet. The drawing set's title block named the file, not the project, and ignored a plan's own scale.
- 22 Draw-bar tools had no command (Grid, Column, Ramp, Trim, Pipe, Duct and others). Enter and Backspace did not reach the older sketch tools in the ribbon layouts.
- The discipline clash check reported a roof resting on its walls as clashes.
- "Cannot access 'models' before initialization" on opening, and "No IFC model is open with id null" with no model open.
- A Type option with no floor areas got a floor space of 0 m2. Grass broke through driveways and walks in the sample house.

## In every app

- **Docking tool groups.** In a layout with a ribbon, tool rows or a toolbox, a group of tools can be docked as a palette beside the drawing. See [Dock a group of tools](common:dock-tool-groups).
- **Four Pro layouts** (Ribbon, Workbench, Review, Studio) in an optional Pro skin, in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}.
- **A two-finger trackpad swipe pans** the plan.
- **Tour tips** have one {{ui:Next}} button; the X closes the tour.

## Said plainly

- Rooms and areas are straight-sided, and a room's volume is its area times the level height.
- A curtain system has one panel type and one profile, no doors or vents, and does not follow a level moved later. Only IFC4 was tested.
- The stage-to-LOD table, the measurement methods and the 1000 mm lintel width are our starting values, labelled so; no quantity surveyor has reviewed them.
- Room names from a plan need a PDF text layer; scanned plans are not read (no OCR). The as-built IFC has not been opened in another program.
- Docking tool groups has not been tried on two monitors.
- The new tools were checked by automated tests in a browser, not yet by a person on a real project.
- Languages beyond English are machine drafts, and some words new in 0.10 are still English only.

For the version before this one, see [What's new in 0.9](topic:whats-new-0-9).
