---
title: Save a plan, elevation or section as DWG or DXF
summary: Save the plan you are looking at, or every plan, elevation and section of the drawing set, as a DWG or DXF drawing at true size, with a layer for each kind of line, text and dimensions you can edit.
section: tasks
order: 27
keywords: dwg, dxf, export, save as, cad, 2d, drawing, plan, floor plan, ceiling plan, elevation, section, drawing set, layers, dimensions, true size, model space, hand off, consultant, r2018, r2013, r2010, r2007, r2004, r2000
---

## What you'll do

Hand a plan, or the whole drawing set, to someone who works in a CAD program. The file holds the same drawing BimCraft prints, at true size, so it can be measured, dimensioned and drawn over.

## Save the plan

1. Show the level you want, as a floor plan or a ceiling plan, the way you want it: the cut height, the view range and the pens are all used.
2. Click {{ui:Save as DWG or DXF}} in the model bar (beside {{ui:Print}}).
3. Choose the {{ui:File type}}: DWG for AutoCAD 2018, 2013, 2010, 2007, 2004 or 2000, or DXF (AutoCAD 2000). DWG 2018 opens in every current CAD program. Choose an older one only for an older program. BimCraft remembers your choice in this browser.
4. Click {{ui:Save}}. The file is named after the model and the level, for example *small-house — Ground floor.dwg*.

## Save the drawing set

1. Click {{ui:Sheets}} in the model bar.
2. Click {{ui:DWG or DXF}} beside {{ui:Download the set as PDF}}.
3. Choose the {{ui:File type}} and click {{ui:Save}}.

Every plan, the four elevations and every section go into one drawing, each with its title under it. The plans sit in a row: the first is where the model is, and the next ones are moved to the right by the same distance, so grid lines line up from level to level. The elevations and sections are in a row under the plans. Title blocks and schedules stay in the PDF of the set.

## What is in the file

- **True size, in the model's place.** Lengths are in millimeters. A model in feet and inches is written in inches. The file's units say which, so the drawing comes in at the right size.
- **A layer for each kind of line.** The names follow the US National CAD Standard:

| Layer | What is on it |
|---|---|
| A-WALL | Wall outlines (0.50 mm) |
| A-WALL-PATT | Wall fills and the hatching of wall layers, in their material colours |
| A-WALL-PHAS | Renovation phases: existing, to demolish (dashed), new |
| A-CUT, A-CUT-PATT | Other elements the cut passes through, such as columns, slabs and stairs, and their fills |
| A-BELOW | What is seen below the cut |
| A-ABOVE | What is above the cut, under the top of the view range (HIDDEN line) |
| A-DOOR, A-GLAZ | Doors with their swings, windows |
| A-ROOF | Roof edges and ridges |
| A-UNDR | Another level shown under this one |
| A-DETL, A-DETL-PATT | Lines and fills drafted in the view |
| A-GRID, A-GRID-IDEN | Grid lines (CENTER line), their bubbles and tags |
| A-AREA-IDEN | Room names, numbers and areas |
| A-ANNO-DIMS | Dimensions |
| A-ANNO-TEXT | Notes and labels |
| A-ANNO-SYMB | Level marks and tags on elevations and sections |
| A-ELEV, A-ELEV-GRND | Lines seen in an elevation or section, the ground line |
| A-SECT, A-SECT-PATT | What a section cuts, and its fills |
| A-VIEW-TITL | View titles in a drawing set |

- **Lines keep their weight, dash and colour.** A pen you set for the view (see [Pens](topic:trace-pens-stairs-obj)) keeps its weight, dash and colour on that object. Solid fills are solid hatches.
- **Door swings are arcs** and grid bubbles are circles, not short straight lines.
- **Text is text** (Arial, and Arial Bold for room names and grid tags), as high as it prints on paper times the scale. At 1:100, text 2 mm high on paper is 200 mm high in the drawing.
- **Dimensions are dimensions.** Each one keeps its two points, where its line sits and the text BimCraft shows. The drawing's Standard dimension style is set for the same scale, with ticks.
- The scale used for the text is the one the plan prints at ({{ui:Print}} on the plan's bar). The status bar says which, for example *Saved the plan as DWG (AutoCAD 2018), with text and dimensions sized for 1:100.*

## What is not in the file

- Pictures placed in the model.
- The white masks under door and window symbols. A CAD drawing has no white that hides what is under it.
- A crop region: the whole view is written, and the status bar says so.
- Sheets, title blocks and schedules: use {{ui:Download the set as PDF}} for those.

## Check the file

The files are checked by opening them with CadCraft's own DWG and DXF readers and with other programs. Open one in the CadCraft drafting app to see its layers and measure it.
