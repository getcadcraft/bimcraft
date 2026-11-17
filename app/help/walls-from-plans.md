---
title: Walls from a set of plans (PDF or scan)
summary: Turn the pages of a PDF, or a scanned drawing, into walls, doors and windows, one level for each page, with the page kept under each plan.
section: tasks
order: 33
keywords: pdf, plans, set of plans, scan, scanned drawing, tiff, trace, walls from a pdf, walls from a scan, levels, pages, scale, doors, windows, swing, sill, underlay
---

## What you'll do

Start a model from the plans you have on paper: a PDF (drawn as lines, or a scan inside a PDF) or a scan (PNG, JPEG, TIFF with one or many pages). Each page becomes the walls, doors and windows of one level.

## Steps

1. Turn on {{ui:Draw}}. Choose {{ui:Build}} › {{ui:From a drawing…}}, then {{ui:Choose a drawing…}} and pick the PDF or the scan.
2. **Pages and levels.** Each page is listed with what it is (**line work**, or **a picture (traced)**) and the level it goes to: one of the levels you have, **a new level above the others**, or **leave this page out**. Pages are matched to your levels in order; change any of them.
3. **Scale.** For a PDF, say how it was drawn (**1 : 100**, **1 : 50**…). For anything else, or when you do not know, choose **from a distance I know**: click the two ends of a dimension or a scale bar on the preview, then type the true distance. All the pages use the one scale.
4. Choose the **wall type** and the **height of a new level**. Leave **Keep each page under the plan of its level** ticked to see each page as thin lines under its plan.
5. The line under the choices says how many walls, doors and windows it will make, and on how many levels. Click {{ui:Make them}}.

## How it reads a page

- **Walls** come from pairs of parallel lines up to 600 mm apart (the two faces of a wall); the wall is as thick as the gap. Hatching and lettering are left out.
- **Doors and windows.** A gap in a wall (500 to 2600 mm) with a door swing drawn beside it is a door, hinged at one end of the gap and opening to the side of the swing. A gap or a wall with sill lines in it is a window. A gap with neither is a door up to 1300 mm and a window above that.
- **A scan** is squared first when it was scanned crooked (the dialog says so), made black and white, cleaned of specks and traced; a **PDF page that is a picture** is drawn first and then treated the same way. The trace finds the centre of each stroke and fits straight lines and arcs to it, and it uses no network and no trained model.
- **Rooms** follow by themselves from the closed loops the walls make. When the PDF has text, a room takes its name from the lettering inside it (the largest; a dimension, a scale or a sheet number is not a name). A scan has no text, so its rooms keep the names the program gives them.
- **Everything read from the page is marked unverified**: each wall, door, window and room has a dashed box and a "?" in the plan until you check it. Pick what you have checked and use {{ui:Tools}} › {{ui:Mark as checked}}. See [Mark elements as checked or field-verified](topic:verification).

## What you should see

- The walls, doors, windows and rooms on each level, and any new levels, all as one step: {{key:Mod+Z}} takes everything back.
- Each page as thin lines under the plan of its level, listed under {{ui:Build}} › {{ui:From a drawing…}} with {{ui:Remove}}.

:::note
This is what the lines gave, to the accuracy of the page. A scan can lose a faint wall, join two walls that lie very close, or find a wall in a stain; a swing the drawing does not show makes a gap into a plain door. Check each level against the page before you rely on it, and mend what is wrong with the {{ui:Wall}}, {{ui:Door}} and {{ui:Window}} tools.
:::
