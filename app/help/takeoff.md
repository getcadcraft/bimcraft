---
title: Quantities to TakeoffCraft
summary: One click sends the model's quantities to TakeoffCraft — walls by type, roofs by sloped area, ridges, hips and valleys, foundations, doors and windows, cabinets, electrical devices, floor area and the lumber cut list — marked on a plan of each level, with the trade packs' assemblies on the items.
section: tasks
order: 28
keywords: takeoff, quantity takeoff, estimate, estimating, materials list, bill of materials, takeoffcraft, quantities, wall area, roof area, squares, footing, concrete, cubic yards, cut list, lumber, trade pack, assembly
---

## What you'll do

Turn the model into a materials list and estimate in TakeoffCraft. BimCraft draws a plan of each level at a standard scale, marks every quantity on it, and puts the takeoff inside the PDF. TakeoffCraft measures the marks itself, so every number can be checked on the sheet.

## Send it

1. Click {{ui:Takeoff}} in the model bar (beside {{ui:Sheets}}).
2. TakeoffCraft opens in a new tab with the plans. When it asks, choose to open the takeoff it found in the PDF.
3. Add your prices in TakeoffCraft's quantities table; the assemblies already list the materials.

:::note
When TakeoffCraft isn't available here, the button downloads the PDF instead. Open it in TakeoffCraft later: it finds the takeoff inside.
:::

## What is measured

- **Walls** by type and height: their centrelines as runs, with the wall height on the item, so TakeoffCraft gives the length and the wall area. Each run carries the wall's doors and windows, so TakeoffCraft takes them out of the wall area once, by the same rule as BimCraft's schedules: the two agree on gross, deductions and net. A wall type's takeoff data (unit, mortar, rate; see [Wall assemblies](topic:wall-assemblies)) comes along as one priced line on that type's item. Under a measurement method other than the default (see [Choose a measurement method](topic:plan-schedules-and-pdf#choose-a-measurement-method)), the takeoff carries the method, each run carries what the junctions take off its wall face, and TakeoffCraft measures by the same method and names it. A type whose unit has a length and a height also hands over two components with quantities: the units to order and the mortar volume, priced when the type's rate is per unit, per 1000 units or per m³ of mortar. A count that lands exactly on a whole number can be one unit higher in TakeoffCraft, because the hand-over rounds positions on the sheet.
- **Roofs**: each roof plane as an area with its pitch (TakeoffCraft gives the sloped area), ridges, hips and valleys (hips and valleys along their slope), eaves and rakes.
- **Foundations**: footings and stem walls as runs round their middles, slabs as areas with their thickness, so the concrete comes out by volume.
- **Doors and windows** counted by type, with window trim.
- **Base cabinets** by the length of their fronts.
- **Electrical devices** counted by kind.
- **Floor area** of each level, from its rooms.
- **The lumber cut list** from the framing, counted on a sheet of its own (one dot a piece).

Where a trade pack has a matching assembly — exterior and interior walls, slabs, footings, stem walls, shingles, ridge and hip cap, valleys, eaves, interior doors, window trim, base cabinets, outlets, switches, lights, junction boxes and the panel — the item comes with its materials and formulas. The packs come without prices and have not been reviewed by an estimator yet.

:::tip
The plans are made from the model each time you click, so after a change just click {{ui:Takeoff}} again.
:::
