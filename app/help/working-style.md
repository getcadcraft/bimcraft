---
title: Working style, duplicated views, pens on paper, Report as and templates
summary: Pick how BimCraft behaves for the way you work, duplicate any view as its own copy or linked, keep pen overrides in the file and print as shown or through a pen table, report an element as another IFC class, and start projects from your own templates.
section: tasks
order: 35
keywords: working style, duplicate view, duplicate, copy view, dependent view, linked view, own copy, view copy, pen overrides, pens, line weights, print as shown, pen table, plot style, ctb, monochrome, grayscale, report as, ifc class, reclassify, predefined type, generic model, slab as road, wall as panel, roof as ramp, project template, template, new from template, save as template, office standard
---

## What you'll do

Set BimCraft up for the way you work, then duplicate views, print them the way you expect, count elements as what they really are and start every project from your office's template.

## Choose a working style

1. Open {{ui:Settings}} and the {{ui:BimCraft}} tab. Find {{ui:Working style}}.
2. Pick one:
   - {{ui:Each view its own}} (the first choice): a duplicated view copies its annotations and they stay that view's; sheets print as the screen shows.
   - {{ui:Shared annotations and pen tables}}: duplicated views share their annotations; printing goes through a pen table.
3. Below the choice are the four things it sets. Change any one on its own; the style then reads {{ui:Custom}}.

The working style is kept in this browser, like the workspace layout. A template carries it to new models.

## Duplicate a view

1. In the {{ui:Project browser}}, every floor plan, ceiling plan, callout, elevation and section has a {{ui:Duplicate}} button (two sheets).
2. Name the copy and pick how it behaves:
   - {{ui:Own copy}}: its drafting, dimensions, crop, hidden elements and pens are copied and stay its own. Editing either view never changes the other, so a view on an issued sheet stays as it was issued.
   - {{ui:Linked}}: it shows the same view with one set of annotations and settings.
3. The copy is listed under {{ui:Duplicated views}}. Click it to open it; the bar above the plan says it is a copy, with {{ui:Up}} back to its view.
4. Its slider button opens its settings: the name, {{ui:View range}} (an own copy has its own), {{ui:Make own copy}} for a linked one, and {{ui:Delete}}.

Copies of elevations and sections go on your own sheets like the views they came from. Duplicating is one undo step, and copies are kept in the IFC beside the callouts.

## Pens kept with the view, and printed as shown

1. Turn on {{ui:Draw}} and pick {{ui:Pens}}.
2. {{ui:For}} now lists every category: walls, doors and windows, slabs, roofs, columns, stairs, furniture and the rest, and drafting and dimensions.
3. {{ui:Apply}} keeps the pen in the IFC with the view shown: a plan, a ceiling plan, a callout or a duplicated view. Pens made before 0.9 were kept in the browser; {{ui:Keep these in the file}} moves them.
4. Sheets and the PDF draw every pen as the screen shows it.

To print through a pen table instead, set {{ui:Print}} in the Pens row to {{ui:Through a pen table}}, then pick a table (colour, monochrome, grayscale) or {{ui:Edit pen table…}}: each colour gets the colour, weight and screening it prints with. The table is CadCraft's plot style file, so {{ui:Import…}} takes a table made in the CadCraft app and {{ui:Export}} gives one back. The model keeps its choice; with none, the working style decides.

## Report an element as another class

A slab drawn as a road, a wall used as a panel, a roof shaped as a ramp: keep the tool you drew it with and report it as what it is.

1. Pick the element and open {{ui:Properties}}. Open {{ui:Report as}}.
2. Type in the search box to find a class that fits the shape, pick it and its predefined type. For a type of your own, pick USERDEFINED and give it a name.
3. {{ui:Apply}} (one undo step). {{ui:Clear}} reports it as drawn again.

You still edit it with the tool it was drawn with. The saved IFC writes it as the reported class, so other programs, the {{ui:Quantities}} takeoff, Find, Color by, model checks and {{ui:Problems}} count it as that. The schedules leave a wall reported as a panel out of the walls schedule, and {{ui:Elements by reported class}} lists every one. It works in IFC4 and IFC2X3 files; the list offers only the classes the file's IFC version has. Doors, windows, stairs, rooms and levels keep their own class.

## Save a project as a template, and start from it

1. With a project open, click {{ui:Save as template}} beside {{ui:Save}}.
2. Name it. Tick {{ui:Also download the template file}} to share it as an IFC file, and {{ui:Start new models from it}} to make it your default.
3. A template keeps the levels, view templates and view settings, duplicated views and callouts, drafting, pens and the pen table, tags, families and types, sheets, sheet sizes, title blocks and the working style. Walls, floors, doors and every other model element are left out.
4. Click {{ui:New building}} and pick it under {{ui:Start from}}, or pick {{ui:A template file…}} for one you were sent. The new project gets its own name and its own project identity; everything else is as the template has it.

:::note
Templates are kept in this browser. Team templates shared through CadCraft Studio are not built yet: send the template file instead.
:::
