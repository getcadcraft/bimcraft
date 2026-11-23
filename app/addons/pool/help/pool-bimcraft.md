---
title: Pool generator: the pool in your model or drawing
summary: Place the pool in a BimCraft model as elements with properties and quantities, or draw its plan and section in CadCraft. Both save an IFC file from the panel.
section: tasks
order: 2
keywords: pool, place, IFC, elements, slab, wall, covering, pump, filter, pipe, plan, section, layers, POOL, undo
---

## In BimCraft

Press **Place in the model**. The pool is written on the model's first level as elements: the floor slab and walls, the steps, the tile coverings, coping and paving, the barrier, the machine room, each filter and pump, the drains, skimmers and inlets, and every pipe. Each element has a `CadCraft_Pool` property set and base quantities, so it schedules and saves in the IFC file like anything else. The top of the coping stands at the level's height.

- It is one step: **Undo** takes the whole pool back.
- Placing again replaces the pool **of the same name**. Give a second pool another name.
- **Position** moves the pool's shallow-end corner from the level's origin.
- **Remove the pool** takes the elements of that name out.

## In CadCraft

Press **Draw plan and section**. The plan and the long section are drawn as polylines, lines, text and dimensions on `POOL-` layers, in the drawing's own units. They are ordinary entities: they plot and export to DXF and DWG, and they do not follow later changes to the pool. Press **Remove the pool drawing**, change the pool, and draw again.

## The IFC file

**Save as an IFC file** writes an IFC4 file of the same pool from either app: one element per part in its own class, with colours, properties, quantities and materials. Open it in BimCraft or any IFC viewer. The pipes are connected: every pipe, bend, junction, skimmer, inlet, drain, pump and filter has its ports, and each pair that meets is connected. With **Bars** picked, the bar marks are in the file as reinforcing bars. **Place in the model** writes the same ports and connections into BimCraft's model.
