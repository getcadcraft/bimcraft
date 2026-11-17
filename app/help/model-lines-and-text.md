---
title: Model lines and model text: drawn in the model, on the work plane
summary: A model line is a line, polyline or arc that lives in the model and shows in every view that sees it. Model text is 3D lettering with real depth. Both are drawn on the work plane.
section: tasks
order: 174
keywords: model line, model text, 3D text, lettering, sign, signage, line in 3D, arc, polyline, work plane, extruded text, font, depth, detail line, drafting line, annotation, IfcAnnotation
---

## What you'll do

Draw lines and lettering that are part of the model, not of one view.

## Steps

1. Set the work plane first (see **The work plane**). A level plane is drawn on in the plan; an upright plane in the Work Plane Viewer.
2. For a line choose **Model Line** in the **Build** menu and pick **Line**, **Polyline** or **Arc (three points)**:
   - a line is two clicks;
   - a polyline is a click for each point, then Enter or a double-click. A click on the first point closes it;
   - an arc is three clicks: its start, a point it passes through, its end.
3. For text choose **Model Text**. Type the words, set the capital height and the depth, then click where the text starts (the left end of its baseline).
4. Select a line or a text to see it in **Properties**. A text's words, height and depth can be changed there. Delete removes it.

## Where they show

- A model line shows in the plan of its level, in the 3D view, in the elevation and section panel and in the Work Plane Viewer when it lies on the work plane. A drafting line (Annotate, Line) belongs to one view only.
- Model text is solid geometry: it shows wherever the model shows, in the plan, in 3D, in elevations and sections, and on sheets.
- Model lines are not drawn on printed sheets yet. Model text is.

## The font

Model text uses the same font as the sheets and PDFs: Liberation Sans, under the SIL Open Font License. A letter the font does not have is drawn as a question mark and you are told which. There is one font and one weight. Letters are spaced by the font's own widths, without kerning.

## In the IFC file

- A model line is an IfcAnnotation with the object type ModelLine. Its shape is a 3D curve: a polyline, or a trimmed circle for an arc.
- Model text is an IfcBuildingElementProxy with the object type ModelText. Its shape is one extruded solid for each letter piece, with the holes of letters like O and B. Its quantities are the face area and the volume (face area times depth).

## Good to know

- Any size is made as you ask. Only a line with no length, an arc whose three points are in one line, or a text with no letters is refused, because there is nothing to make.
- Each line, and each text or change to it, is one step of Undo.
