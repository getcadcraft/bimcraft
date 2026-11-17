---
title: Schedules, dimensions and a PDF of the plan
summary: Door, window, wall and room schedules that change as you draw, dimensions on the plan, and the plan of a level saved as a PDF at a standard scale.
section: tasks
order: 20
keywords: schedule, door schedule, window schedule, wall schedule, room schedule, quantities, takeoff, area, csv, spreadsheet, dimensions, dimension, print, pdf, plot, scale, 1/4", 1:50, sheet
---

## What you'll do

See what the building you drew adds up to, while you draw it: how many doors and windows of each size, how much wall of each type, how big each room is. Put dimensions on the plan and save it as a PDF to print or send.

## Schedules

With {{ui:Draw}} on, **Schedules** in the left panel shows one table at a time:

- **Doors** and **Windows**: each one by its mark (D1, D2 … and W1 …, given as you place them), its type, width, height (and sill), level and the wall it is in.
- **Walls by type**: for each wall type, how many walls, their thickness, their total length and their side area as **Gross area**, **Deductions** and **Net area**, with a total.
- **Rooms**: number, name, level, area and perimeter, with the total area.
- **Floors**: each floor with its level, kind and thickness, and its gross area, deductions and net area.
- **Finishes**: each finish layer of the wall types (by material and side of the wall) and the ceilings, with the number of faces and gross, deductions and net.
- **Wall types: takeoff data**: what was entered once on each wall type (unit, mortar, rate), with the number of walls, their length and net area, and the rate times the measured quantity. See [Wall assemblies](topic:wall-assemblies).

- **Finishes by room**, **Finishes by wall**, **Finishes by zone** and **Finish quantities**: what covers each room, with areas, tile counts including cuts and substrate volumes. See [Room finishes and finish schedules](topic:room-finishes).
- Your own **set-ups**: a schedule you grouped, totalled and saved under a name. See [Lay out, save and export a schedule](topic:schedule-layouts).

The tables change with every edit. Click a row, or a single figure, to pick the elements it came from. **Download CSV** saves the table, to open in a spreadsheet; **Download Excel** and **Copy for Google Sheets** are under it. **Room finishes** and **Specification** ([Write the specification from the model](topic:specification)) open from the same place.

## Area and volume of each layer

Choose **Layers: area and volume** in the Schedules list. It has one row for each layer of each wall, floor, roof and ceiling type in use: the element, the type and its LOD, the layer (counted from the exterior side of a wall, from the top of a floor, roof or ceiling), its material and function, its thickness, how many elements, the **net area** and the **volume**.

- The area is the net area of the elements of that type, measured exactly as in Walls by type, Floors and Finishes, by the project's measurement method. A roof is measured on the slope; no measurement method has a rule for roofs.
- The volume is that area times the layer's own thickness.
- A floor, roof or ceiling with no type is one row: one layer of its own thickness.
- An air cavity is listed with its area and left out of the total volume. A membrane has an area and no volume.

Click a row to pick its elements. **Download CSV** saves the table.

## How areas are measured

Every area is three numbers that add up: gross less deductions is the net. The rule is written above each of these tables, and it is one rule: the schedules, the quantities saved in the IFC file and the takeoff handed to TakeoffCraft all use it.

- **A wall**: gross is one face of the wall, its length along the centre line times its height (the real face for a wall with a shaped top or base). Every door, window and other opening is deducted, width times height, each opening once.
- **A floor or a ceiling**: gross is the area inside its outline. Every opening and cut-out inside it is deducted once.
- **A wall finish**: each finish layer of the wall type covers one face of the wall, measured like the wall, with the same openings deducted. A finish is a layer of the wall: it is listed under Finishes and is not added to the wall area, so a wall with a door is never counted twice.

That is the **CadCraft default**: every opening is deducted, whatever its size; wall lengths are along the centre line; reveals are not measured. It is what every project uses until you choose another method.

## Choose a measurement method

Above the schedule, **Measurement method** lists the methods that come with BimCraft, and **Load a method file** takes your office's own. The choice is saved in the IFC file, as one undo step, and three things follow it at once: the schedules, the net quantities saved in the file, and the takeoff handed to TakeoffCraft. The rule above each table then starts with the method, its source, the date the source was read and the words **Unchecked by a quantity surveyor**.

A method is a small file of facts, not program code. For each quantity it says:

- **the smallest opening deducted**: for example, an opening of 0.5 m² or less stays in the wall area;
- **how wall junctions are measured**: along the centre line; or with a wall that ends against another measured to the face of that wall; or with every wall end that meets another wall measured to the near face;
- **whether reveals are measured** for a finish (the returns of the finish into the openings), as an area or, when shallow, as a length. The depth of a reveal is taken as half the thickness of the wall;
- **what it says about masonry**: how it is measured, and any waste or mortar allowance it states.

The methods that come with BimCraft:

| Method | Walls: smallest opening deducted | Wall finishes | Ceilings | Masonry |
|---|---|---|---|---|
| CadCraft default | every opening | every opening | every cut-out | no allowances |
| RICS NRM 2 (United Kingdom), 2nd edition 2021 | 0.5 m² or less stays in | 1 m² or less stays in | 1 m² or less stays in | by area; no percentages stated |
| AAQS Standard Method for Africa 2015 | 0.5 m² or less stays in | 0.5 m² or less stays in | 0.5 m² or less stays in | by area; measured net, 0% waste |
| IS 1200 (India), 1976, brickwork | 0.1 m² or less stays in | default (see below) | default | by volume |
| BIA Technical Note 10 (United States), 2009 | every opening | default | default | 5% waste on units, 15% on mortar |

Read these limits before you rely on a method:

- **No quantity surveyor has checked any of them.** Each was made by reading the source named and recording its numbers with the clause they come from. If you are a quantity surveyor and can check one, the app's makers would like to hear from you.
- Where a rule could not be read from the source, the method says **not confirmed** for it and the CadCraft default is used. No method that comes with BimCraft has a confirmed rule for wall junctions, reveals or floors, so those are measured the default way under all of them.
- IS 1200 deducts openings in plaster in three bands. A method file cannot hold bands yet, so wall finishes use the default under that method, and the rule says so.
- The South African Standard System of Measuring Building Work is **not** among them: its text could not be read. The AAQS method for Africa says it was built on the 1991 edition of that system, but it is a different document.
- BIA Technical Note 10 is an industry estimating note, not a standard method of measurement.
- An opening that is exactly the smallest size follows the method's own words ("not exceeding", "less than"). Sizes within 2 parts in 10 000 of it count as exactly it.
- Under a method, the file's net side area of a wall and net area of a floor or ceiling follow the method, and the quantity set names it. The gross areas and the volumes in the file stay as drawn.

**Notes on this method**, under the picker, says what each source leaves open. **Open the source** goes to the document.

### Your office's own method

A method file is JSON in the format `cadcraft-measurement-method`. Every value in it names the clause it comes from; a value with no clause is refused. The file is checked when you load it, a wrong field is named, and nothing is used from a file that does not pass. Once chosen, the file is saved inside the project, so the project opens the same on another computer. Its id is a plain name of your own (it may not be the id of a method that comes with the app).

## Bricks, blocks and mortar

**Wall types: takeoff data** counts the units and the mortar of every wall type whose unit has a length and a height (see [Give a type its takeoff data](topic:wall-assemblies#give-a-type-its-takeoff-data)). These are the formulas, exactly as computed:

- **Units per area of one leaf** = 1 / ((unit length + joint) × (unit height + joint)). A 215 × 65 mm brick with a 10 mm joint: 1 / (225 × 75 mm) = 59.26 per m².
- **Unit widths across a leaf** = (leaf thickness + joint) / (unit width + joint), rounded to a whole number, at least 1. A 102.5 mm leaf of 102.5 mm bricks is 1; a 215 mm wall of the same bricks is 2.
- **Units** = units per area × unit widths across × the net area of the wall face, added up over the type's masonry leaves.
- **Units to order** = units × (1 + waste % / 100), rounded up to a whole unit. The waste is the one entered on the type; with none entered, the method's, if it states one; otherwise 0%.
- **Mortar** = net area × leaf thickness, less the volume of the units (units × length × height × width), then plus the extra percentage entered on the type for frogs or perforations, then plus the method's allowance if it states one. It needs the unit width.

What is assumed: every masonry leaf of a type is built of the type's one unit; a leaf thicker than one unit width is counted as that many unit widths, each like a leaf laid lengthways, so cut units, closers and special shapes are not counted apart; where no layer is ticked as built of the unit, the core layers are taken as the leaves, and the note above the table says so. **Amount** is the rate times what the rate is per, which can now also be a unit to order, 1000 units to order or a m³ of mortar.

Marks are the elements' IFC tag: change one in **Properties** (Tag) and the schedule follows. For every IFC model, drawn or not, [Add up quantities, list elements and schedule spaces](topic:quantity-totals) adds up any property.

## Dimensions

The plan shows each drawn wall's length along its outside face (an inside wall: along one face) and, for a wall with doors or windows, a chain from the corners to each opening. {{ui:Dimensions}} in the model bar hides them and shows them again.

## Save the plan as a PDF

1. Show the level you want and set the units in the **Levels** panel.
2. Click {{ui:Print}} in the model bar.
3. BimCraft saves "<file> — <level>.pdf": the plan in black and white at the largest standard scale that fits the page (1/4" = 1'-0", 1/8" = 1'-0" … on Letter in feet and inches; 1:50, 1:100 … on A4 in millimeters), with the walls filled, doors, windows, room names and areas, dimensions, and a title strip with the level, the file, the cut height, the date and the scale.

The PDF is drawn as lines and text, so it stays sharp at any zoom and its text can be searched.

## Good to know

- The schedules list what the drawing tools made. Doors and windows from another program show in Quantity totals instead.
- To price the job, hand the quantities to TakeoffCraft: see [Quantities to TakeoffCraft](topic:takeoff). The CSV download stays for a spreadsheet.
