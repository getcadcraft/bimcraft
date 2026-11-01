---
title: Wall assemblies and reference dimensions
summary: Build your own wall types layer by layer with an explicit core, keep a project material library, and dimension to faces and centerlines that stay attached when the wall changes.
section: tasks
order: 17
keywords: wall assembly, wall type, layers, core, core face, core centerline, cavity, air gap, membrane, house wrap, material library, materials, thickness, reference dimension, dimension, associative, location line, siding, stud, drywall
---

## What you'll do

Make a wall type that matches the wall you will build: siding, sheathing, a 5½-inch stud core and drywall, or brick, an air gap and a wood-frame wall. Mark which layers are the core, so a dimension or a location line can hold the core while the finishes around it change. Then dimension walls to the faces and centerlines you mean.

## Make a wall type

1. Start a building or open an IFC model and turn on {{ui:Draw}}, then choose the {{ui:Wall}} tool.
2. Choose a starter in {{ui:Wall type}} and open {{ui:Wall assemblies…}}. A starter opens as a copy; give the new type a name.
3. Layers run from the exterior at the top of the list to the interior at the bottom. Pick each layer's material, type its thickness (project units, or explicit ones such as `12.7 mm` or `1/2"`), choose its function (finish, substrate, structure, insulation, membrane) and tick the **Core** layers. The core must be one continuous group.
4. {{ui:Add layer}} adds a layer, {{ui:Add cavity}} adds an air gap with its ventilation (unspecified, unventilated, ventilated), {{ui:Add membrane}} adds a layer with no nominal thickness, such as house wrap. The arrows move a layer outward or inward.
5. The preview draws the layers to scale with the core underlined, numbered like the rows, and dimensions each layer, the core and the total. {{ui:Save type}}.

The new type is in the Wall tool's list and in a selected wall's **Properties**. Saving a type you edit changes every wall that uses it; {{ui:Duplicate type}} makes a separate one and gives it only to the walls you selected. Each save is one undo step, together with the walls it moves, the doors and windows in them and the dimensions that depend on them.

A cavity adds width. A membrane adds none: it stays in the type so a schedule can find it later, and it does not count toward the wall's or the core's thickness. A cavity or a membrane is never counted as solid material. In a file saved as IFC2X3 a membrane is kept in the type's record but left out of its physical material layers.

## Hold the core still

In **Properties**, set a wall's **Location line** to a core face or the core centerline. When you later add or thicken a finish, that line stays where it is and the wall grows around it; walls that meet it at a corner follow, so straight corners stay closed.

## Project materials

{{ui:Material library…}} lists the project's materials: name, category, the thickness a layer starts with, display color, cut fill pattern and notes. The library is saved in the IFC with the project. Choosing a material for a layer gives that layer the material's default thickness, which you can then change; editing the library later never resizes walls you already drew. You can also make a material from the layer's material list with {{ui:+ New material…}}.

## Reference dimensions

{{ui:Annotate}} › {{ui:Reference dimension}}: choose horizontal, vertical or aligned, and a reference: the exterior or interior finish face, the exterior or interior core face, the wall centerline or the core centerline. Pick the first wall, change the reference if you want, pick the second, then click where the dimension line goes. Two references on one wall measure its total or its core thickness. {{ui:Reference dimensions…}} lists the view's dimensions, including any that lost a wall, with Properties, Rebind references and Delete.

### Dimension the whole plan by rules

{{ui:Annotate}} › {{ui:Dimension the plan…}} dimensions the outside of the floor plan you are looking at: the overall size each way, a row of dimensions along each outside edge (wall ends, walls that meet the edge, and the doors and windows in it), with the rows placed clear of the building. Tick what you want, read the count, then {{ui:Add the dimensions}}. They are ordinary reference dimensions, so they follow the walls when the walls move and you can pick, move or delete any of them; the whole set is one undo step, and running it again does not make any twice.

It dimensions the outside only: rooms inside the building, curved walls and walls that are not square to the plan are left for the hand tools, and grid lines are not walls, so dimensions between grids are not made here. Your connected assistant can do the same with `plan_dimension`.

The dimension is attached to the walls, not to a spot on the screen: when a wall moves or its type changes, the value follows. If a wall is deleted the dimension says it is unresolved and shows no number, until you rebind it or undo. The length box also takes plan coordinates such as `10',12'` for a dimension line at an exact place.

Dimensions are for walls BimCraft drew, in plan views. Not built yet: dimensions in sections and elevations, to doors, windows and other components, and assembly layers drawn in the plan and section; see [What is not built yet](topic:not-built-yet).

## See also

[Draw walls](topic:draw-walls), [Change a wall, door or window](topic:change-a-wall-or-door), [Properties](topic:properties-panel).
