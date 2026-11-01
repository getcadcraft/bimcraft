---
title: Trace a level, set pens per view, sketch a stair, open an OBJ
summary: Show another level dashed under the plan and line it up, give walls, doors and windows their own pen in one view, draw a walking line to get a stair, and open a Wavefront OBJ mesh.
section: tasks
order: 158
keywords: trace reference, ghost, underlay, pen, line weight, line type, override, stair, sketch, landing, OBJ, mesh, import, Wavefront
---

## Trace a level

Choose {{ui:Trace}} in the {{ui:Build}} menu, then a view in the list: another level's plan, a level's ceiling plan or a callout (cut to its crop). Its walls, columns and floors show dashed under the plan you are drawing on. Move it by clicking a base point on the reference and then where that point should go, or type X, Y and an angle (it turns about its own centre). {{ui:Reset}} puts it back, {{ui:Hide}} removes it. It is a reference only: nothing picks it, it is not printed and not saved in the IFC. BimCraft remembers it for each level in this browser.

## Pens per view

Choose {{ui:Pens}}. Say what the pen is for: all walls, all doors, all windows, the type of the picked element, or the picked elements. Choose a weight, a line (solid, dashed, dotted) and a colour, then {{ui:Apply}}. The change is only for this level's plan. A pick beats a type, and a type beats a whole category. {{ui:Clear all}} removes them. They are kept in this browser. Tick **Pen colours in 3D** to paint the colour pens on the model in the 3D view (a weight or a dash is a line's, so only the colour shows there); untick it to go back. {{ui:Print}} draws them on the PDF of the plan: the weight scales from the screen (the default wall pen of 1.75 pixels is 0.5 mm), dashes stay dashes and a colour prints in its paper-theme value.

## A stair from a sketch

Choose {{ui:Sketch stair}} and click the corners of the walking line, bottom step first. One line is a straight stair, two lines meeting at a right angle are an L, and three lines (up, across, back) are a U. Press {{key:L}} to draw a landing: click its corners and press {{key:Enter}}, and its short side sets the stair's width. Press {{key:Enter}} to place the stair. Each tread is worked out from the length of your line and the number of risers the height needs. After that it is an ordinary stair: change it in Properties, and the stairwell and handrails follow.

Tick **Make it a family** in the tool's row (or press {{key:F}}) before {{key:Enter}} to place the stair as a family instead (a straight, L or U stair). It comes in as one element and opens in the family editor with its width, tread, total height, the treads in each flight and the gap of a U as parameters, so you can add sizes, a plan symbol or hotspots. Steps and the riser height follow from them. It has no handrails or stairwell: those belong to an ordinary stair.

## Open an OBJ

Open a `.obj` file like any other file. An OBJ has no units, so BimCraft reads metres with Y up, as most programs write it. Every object or group becomes one mesh element on a single level, and you can then view, measure, section, place it in a model and save it as IFC. Lines, curves and surfaces are left out, and the status line says so.

An object that is exactly a straight prism (a closed mesh with two parallel, identical end faces and flat sides square to them: a slab, a post, a wall block, a plate with holes) is saved in the IFC as IFC's own extruded solid with its outline and depth, not as a list of triangles. Other programs read it as a real solid, it stays small, and its depth and outline can be edited later. The status line says how many objects were kept that way. Anything that is not exactly a prism (a tapered shape, a mesh with one vertex moved, a mesh with a gap) stays as triangles. A STEP file is read the same way.
