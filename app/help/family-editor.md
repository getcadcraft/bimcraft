---
title: Edit a family
summary: Change a family's parameters, formulas and solids, show parts by a Yes / No parameter, cut and join solids, give it connectors for pipes and ducts, and see the result drawn from the IFC it will save.
section: tasks
order: 38
keywords: family editor, edit family, parameter, parameters, formula, formulas, visibility, yes no, solid, solids, box, extrusion, extrude, revolve, sweep, profile, arc, boolean, booleans, cut, join, difference, union, handle, handles, work plane, sketch, new family, connector, connectors, port, ports, pipe connector, duct connector, drain, water supply
---

## Open the editor

Open a family (the project browser's **Families**, or {{ui:Build}} › {{ui:Families…}}) and click {{ui:Edit the family}}. To start from nothing, click {{ui:New family}}: give it a name, say what it is (a door, a window, furniture, a fixture or something else) and, for a door or window, which starter its plan symbol and hand come from. The editor opens on a family with a few parameters and one solid.

Editing a starter family keeps your changes in this model only. Other models keep the starter as it is.

Nothing in the model changes until you click {{ui:Save the family}}. The editor has its own undo and redo (the arrow buttons beside the name, or {{key:Mod+Z}} and {{key:Mod+Y}}); saving is one step in the model's undo.

## Parameters

The {{ui:Parameters}} tab lists the family's parameters: a name, a kind and a default. The kinds: **Length** (millimetres), **Angle** (degrees), **Number**, **Whole number**, **Yes / No**, **Pen** (1–16), and three that hold words instead of numbers: **Text**, **Material** (one of the project's materials) and **Fill** (a plan fill). Words are not used in formulas; they colour a solid (its **Material**), fill a symbol part, or print as `{Name}` inside a symbol's text. The **Per element** box makes a parameter something each placed element sets for itself instead of its size.

- A **formula** makes a parameter follow others, for example `Width / 30` or `if(Width > 1200, 2, 1)`. Lengths in formulas are millimeters, or write a unit: `3'`, `6in`, `50cm`.
- Renaming a parameter renames it in every formula and field that uses it. A parameter still in use cannot be removed.
- A solid's **Material** takes a project material's colour (or a Material parameter's), **Shown at** hides it at coarser detail levels, and **Repeat** makes copies: a count (a number or a whole-number parameter, 1 to 200) and the step between them in x, y and z. A repeated solid is a row of boards, bars or holes; used in a cut, the copies cut together.
- A door or window family also gets two names from its wall: `WallThickness` and `Face` (1 or −1, the side the door swings to).

## Solids

The {{ui:Solids}} tab lists the solids. Add a box, an extrusion, a revolve or a sweep:

| Solid | What you set |
|---|---|
| Box | its two corners: x0 to x1, y0 to y1, z0 to z1 |
| Extrusion | a profile on a work plane (plan, front or side), where the plane is, and a depth |
| Revolve | a profile, an axis on the plane, and an angle up to 360° |
| Sweep | a path of points and a radius (a rod or a rail) |

Every number can be a typed number or an expression of the parameters. Each solid has a color and **Shown when**: leave it empty to show it always, or name a Yes / No parameter (or write a comparison such as `Shelves >= 3`) to show it only then. That is a visibility parameter.

### Draw a profile

An extrusion's or a revolve's profile is drawn on its work plane under the preview:

- Click on the paper to add a point after the picked one.
- Drag a point to move it. Points snap to the grid; hold {{key:Shift}} to place them freely.
- Click a small square on a segment to add a point there. {{key:Shift}}+click it to make that segment an arc (click again for the other way, then straight).
- Double-click a point to remove it.

Hollow points are set by parameters: change them in the table, not by dragging.

## Booleans

The {{ui:Booleans}} tab cuts the second solid out of the first, or joins them. A Boolean's result can be cut or joined again. A solid used in a Boolean is drawn only as part of it.

When the second solid is hidden by its Yes / No parameter, the first is kept as it is; when the first is hidden, the result is hidden.

## Plan symbol

The {{ui:Plan symbol}} tab draws what the plan shows for this family instead of the cut of its solids: lines, rectangles, circles, arcs, polygons and text, in the family's own axes. Each part has a **pen** (1–16, an expression or a Pen parameter), a **fill** (none, solid, diagonal, crossed, concrete, insulation, earth, or a Fill parameter), a **shown by** expression, a **cut range** in millimetres above its base (a part drawn full weight when the plan's cut is inside it, thin below it, dashed above it: a cabinet above the cut shows dashed), a detail level and a repeat. Text may name parameters as `{Name}`. **The plan shows: The cut of the solids** keeps the plan cutting the solids while the symbol stays in the family. Other programs read the symbol as the family's footprint (lines and shapes; the text stays in BimCraft).

## Families inside

The {{ui:Families inside}} tab puts another family inside this one: a leg in a table, a handle on a door. Choose the family, then where it goes (x, y, z), how far it is turned (only quarter turns: 0, 90, 180, 270), when it is shown, and the values it gets, one per line as `Height = Height - 40`. Saving the inner family draws this one again; a family that is held by another cannot be deleted; a family cannot hold itself, not even through another, and the nesting stops at four levels.

## Hotspots

A hotspot is a point or an edge you drag to change a parameter. On the {{ui:Hotspots}} tab add one, choose the axis it drags along and the number parameter it changes, and write its position in the same expressions as the solids. In the preview, choose **Hotspots** under the handles to drag them. On a placed element in the plan (pick it with {{ui:Select}}) the x and y hotspots show as grips: drag one and the element takes the size that puts the hotspot there, through any formulas between them; one Undo puts it back. A hotspot cannot change a driven parameter, a Yes / No or a word.

In the 3D view the same hotspots show as grips on the picked element, and the up-and-down ones (axis z) show there too, which the plan cannot draw. Pick the element, drag a grip along its axis and let go: the element takes the size that puts the hotspot there, as one undo step. The grips are hidden while the section box is on, since it uses the same grips.

## Connectors

Families placed on a floor (furniture, fixtures and others) have a {{ui:Connectors}} tab: the points where a pipe or a duct joins the element, as on a basin's tap and drain. Click {{ui:Add a connector}} and set:

- **Kind**: pipe or duct, and its **System** (cold water, sanitary drain, supply air…).
- **x**, **y** and **z**: where it is, in the family's own axes. Like a solid's numbers, each can be a number or a formula of the parameters, so the connector moves with the size.
- **Way out**: the direction a pipe or duct leaves it, along one of the family's axes (a drain under a basin goes **Down**).
- **Size (mm)**: the pipe's nominal size (DN) or the round duct's diameter.
- **Flow**: **In** for a connector that is fed (a tap), **Out** for one that drains.

The preview draws each connector as a ring with an arrow the way out. Doors and windows have no connectors.

For a plumbing fixture, choose which one it is under **Plumbing fixture** (water closet, lavatory, kitchen sink, shower, laundry tub). The starter fixtures already say so.

Every element placed from the family gets its connectors as ports in the IFC file, and they are made again when the element changes size or the family is saved. Programs that read IFC systems see where each pipe or duct belongs.

## The preview and its handles

The preview is the family written as IFC, by the same code that saves it into the model, and drawn back. What you see is what other programs get. Under it, **Size shown** sets the parameter values the preview uses.

**Handles** are dots on the preview: **The size** shows a handle for Width, Depth and Height; **The solid picked** shows one on each face of the solid you picked. Drag a handle:

- on a face set by a parameter, the size shown changes (the family's formulas are kept);
- on a face set by a typed number, the number changes.

## Saving

{{ui:Save the family}} checks the family, then draws every size of it again and makes every element of it again, as one step you can undo. If a size cannot be drawn with the change (for example a solid would have no width at that size), nothing is saved and the editor says which size.

If someone else saved the same family while your editor was open (in a Live TeamWork session, or in another window), {{ui:Save the family}} refuses and says so instead of replacing their change with yours. Close the editor, open the family again to see their change, and make yours again.

:::note
The geometry is saved as IFC's own solids: extrusions, revolves, swept disks, and Boolean results. Nothing is turned into a list of triangles, so files stay small and other programs can read the shapes as shapes. Profiles with arcs are saved with arcs in IFC4; IFC2X3 has no arc segments in a profile, so there the arcs are saved as short straight pieces.
:::

See also [Families and their sizes](topic:families).
