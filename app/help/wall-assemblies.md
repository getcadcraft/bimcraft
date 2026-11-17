---
title: Wall assemblies and reference dimensions
summary: Build your own wall types layer by layer with an explicit core, keep a project material library, and dimension to faces and centerlines that stay attached when the wall changes.
section: tasks
order: 17
keywords: lod, level of development, lod 200, lod 300, generic, wall assembly, wall type, layers, core, core face, core centerline, cavity, air gap, membrane, house wrap, material library, materials, thickness, reference dimension, dimension, associative, location line, siding, stud, drywall
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

## Tag a type with its level of development (LOD)

A type can say how developed it is. In the editor, **Level of development (LOD)** offers the fixed scale 100, 200, 300, 350, 400 and 500, or **Not set**. A generic wall ("Wall 230 generic") is LOD 100 or 200; a specific build-up with its real layers ("230 clay brick, plastered both sides") is LOD 300 or more. The tag is yours to set: BimCraft does not work it out, and the starter types have none.

The tag shows beside the type's name in the Wall tool's type list, in a wall's Properties and in the [Swap type](topic:wall-tools) list, and the report after a swap says whether the level went up or down. To see it in the **Walls by type** schedule and its CSV, tick **Show each wall type's LOD in the wall schedule** in Settings › BimCraft › Walls: a last column, LOD, is added. It is saved in the IFC file with the type (in the type's `CadCraft_WallType` property set, as the property `LOD` and inside the type's record), so it is there when you open the file again. The tag is on wall types only for now, not on single elements or other kinds of element.

## Generic walls for the sketch stage

The Wall tool's Type list starts with two **generic** walls: **Generic wall 200 mm (exterior)** and **Generic wall 100 mm (interior)**. Each is one layer of the generic material, tagged LOD 200. Use them when you know where the walls go and not yet what they are made of.

A wall whose type is tagged **LOD 100** or **LOD 200** is drawn in every plan as **one hatched band**, at every detail level: no layers, no layer lines. That is true of the generic walls and of any type of your own that you tag LOD 100 or 200. The wall itself is complete: it has its thickness, its doors and windows, its rooms and its quantities.

To develop it, swap its type (Edit › Walls › **Swap type**, or Type in Properties). The wall is never drawn again: the same wall takes the new type, and the report says what moved. A type tagged LOD 300 or higher is drawn with its layers as before.

To draw every wall by its layers whatever its tag: Settings › BimCraft › Walls, untick **Draw walls of an LOD 100 or LOD 200 type as one hatched band**.

The starter doors and windows are generic kinds too (a size and a way of opening, not a product). With **Show each wall type's LOD in the wall schedule** on, the Doors and Windows schedules show LOD 200 for them.

## Give a type its takeoff data

In the wall type editor, **Takeoff data** takes what an estimator needs to know about the wall, once for the type: the **unit** it is built of (a brick or a block: its name, length, height and width), the **mortar** (name and joint thickness) and a **rate** with its currency code (three letters, such as USD, EUR or ZAR) and what it is per: a square metre or square foot of net wall area, a metre or foot of wall length, or each wall. All of it is optional.

It is saved with the type in the file. Every wall of the type then reports it: {{ui:Schedules}} › **Wall types: takeoff data** lists the unit, the mortar, the rate and the rate times the measured quantity, and the takeoff handed to TakeoffCraft carries it on that wall type's item. Change it on the type and every wall follows.

Three more fields are for counting bricks or blocks and mortar:

- **Waste on units, %** is added to the number of units. Leave it empty to use the figure of the project's measurement method, or none if the method has none. Enter 0 to have no waste whatever the method says.
- **Extra mortar, %** is for frogs or perforations that take mortar. It is added to the mortar volume. Leave it empty for none.
- **Layers built of this unit**: tick each layer that is a leaf of this brick or block. A cavity wall has two. With none ticked, the core layers are counted.

The rate can also be per unit to order, per 1000 units to order or per m³ of mortar. Where the unit has a length and a height, **Wall types: takeoff data** shows the units per m² (or ft²) of one leaf, the units to order and the mortar volume; the formulas are in [Bricks, blocks and mortar](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). A type has one unit: two leaves of different units (a brick outer leaf and a block inner leaf) cannot be counted on one type yet.

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
