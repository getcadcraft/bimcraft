---
title: Dome generator: the dome in your model or drawing
summary: Place the dome in a BimCraft model as elements with properties and quantities, or draw its plan and section in CadCraft. Both save an IFC file from the panel.
section: tasks
order: 2
keywords: dome, place, IFC, elements, roof, footing, slab, wall, covering, revolved solid, plan, section, layers, DOME, undo
---

## In BimCraft

Press **Place in the model**. The dome is written on the model's first level as elements: the ring beam, the floor slab, the stem wall, the shell, the foam and the form membrane. Each is a true solid of revolution with a `CadCraft_Dome` property set and base quantities, so it schedules and saves in the IFC file like anything else. The dome's floor stands at the level's height.

- It is one step: **Undo** takes the whole dome back.
- Placing again replaces the dome **of the same name**. Give a second dome another name.
- **Position** moves the dome's centre from the level's origin.
- **Remove the dome** takes the elements of that name out.
- The openings are real gaps in the shell, the foam and the membrane. No door or window is put in them.

## In CadCraft

Press **Draw plan and section**. The plan and the section are drawn as circles, arcs, polylines, text and dimensions on `DOME-` layers, in the drawing's own units. They are ordinary entities: they plot and export to DXF and DWG, and they do not follow later changes to the dome. Press **Remove the dome drawing**, change the dome, and draw again.

## The IFC file

**Save as an IFC file** writes an IFC4 file of the same dome from either app: the ring beam as a footing, the slab, the stem wall, the shell as a dome roof, the foam and membrane as coverings, with colours, properties, quantities and materials. The design figures and the first membrane forces are written on the building. Open it in BimCraft or any IFC viewer. Reinforcement is not in the file.
