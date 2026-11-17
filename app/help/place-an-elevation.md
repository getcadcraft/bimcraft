---
title: Place an elevation and open its view
summary: Put an elevation marker on the floor plan, point it the way it looks, then find its drawing in the project browser, edit in it and put it on a sheet. Steps for the ribbon layouts and for the classic layout.
section: tasks
order: 35
keywords: elevation, elevation view, elevation marker, elevation tag, place an elevation, new elevation, make an elevation, exterior elevation, side view, front view, view from a point, where is my elevation, open elevation, elevation on a sheet, flip elevation, rename elevation, north elevation, tile views, split view, plan and 3D side by side
---

## What you'll do

Make an elevation of your own: a drawing of the building seen from a point you choose, looking the way you choose. It takes two clicks on a floor plan. The drawing is then listed with the building's other elevations.

:::note
The four sides are already there. Every building has North, East, South and West elevations in the {{ui:Project browser}} under {{ui:Elevations}} without placing anything. Place one of your own when you want a view from somewhere else: square to an angled wing, from inside a courtyard, or of one wall inside a room.
:::

## Where the tool is

- Ribbon layouts: {{ui:View}} › **Create** › {{ui:Elevation}}.
- Classic layout: turn on {{ui:Draw}}, then {{ui:Build}} › {{ui:Elevation}}.
- Any menu style: the command is named Elevation; the command palette finds it, and the command line takes ELEVATION.

## Steps

1. Choose {{ui:Elevation}}. An elevation is placed on a floor plan, so if you were in the 3D view BimCraft shows the plan of the level you were on. The pointer says **Click where the elevation stands**.
2. Click where the view is taken from. For an outside elevation, click outside the building, a little way off the wall you want to see.
3. The pointer now says **Click the way it looks**. Move towards the building: an arrow shows the direction, and the short line across your first click is the edge the view looks from. Click.
4. A circle with a number and a pointer appears on the plan. That is the elevation marker. The first is 1, the next 2.
5. Press Esc to finish, or carry on and place another.

Placing a marker is one step: {{key:Mod+Z}} takes it back.

## Open the drawing

The plan stays in front of you after the second click. The drawing is in the {{ui:Project browser}}:

1. Open {{ui:Elevations}}. Yours is listed after the four sides as **Elevation 1**.
2. Click the pencil button {{ui:Edit in this view}} on its row to see the drawing and work in it: move walls, doors, windows and levels, add notes and dimensions. See [Edit in elevations and sections](topic:edit-in-elevations).
3. Click the row itself to open the drawing set, or add the view to a sheet of your own. See [Views and sheets](topic:views-and-sheets).

In the classic layout the project browser is in the left panel while {{ui:Draw}} is on. In the ribbon layouts it is the {{ui:Project Browser}} tab under Properties.

## What the view shows

- Everything in front of the marker, as far as the building goes. Nothing behind it.
- The levels, with their names and heights.
- If the marker stands inside the building, whatever it stands in is cut there, as a section cuts it. For a clean outside elevation, stand outside.

## Change it

Pick the marker on the plan (click its circle with {{ui:Select}}). Properties has:

- {{ui:Label}}: its number or a name of your own, up to 8 characters.
- {{ui:Flip the view}}: look the opposite way from the same spot.
- {{ui:Look as far as}}: how far in front of the marker the view reaches. 0 shows everything.

Press Delete to remove the marker and its drawing. Undo puts both back.

:::tip
To see the plan and the 3D view at the same time while you work, use {{ui:View}} › **Windows** › {{ui:Tile Views}} in the ribbon layouts, or {{ui:Split}} in the classic layout. A click on a view tab goes back to one view.
:::

## Limits

- A marker cannot be dragged or turned on the plan yet. Delete it and place it again, or use {{ui:Flip the view}}.
- In the list of views you can add to a sheet, an elevation of your own is listed with the sections.
- Door and window tags are drawn on the four side elevations, not on one you placed.

## In the IFC

The marker is saved in the file as an IfcAnnotation named "Elevation 1" with the object type "Elevation marker", in the level it was placed on. Another program shows it as an annotation; the drawing itself is made by BimCraft from the model each time.
