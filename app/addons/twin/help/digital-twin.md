---
title: Digital twin: run a plant layout inside your building
summary: Put a Material flow cell or layout file on a level, see the equipment in the 3D view, check it against the walls, and run the flow and a soft PLC on it.
section: tasks
order: 20
keywords: digital twin, material flow, conveyor, plc, layout, throughput, commissioning, walls, fit
---

## Put a layout in your building

1. Switch on the {{ui:Digital twin}} add-on and open its tab in the right panel.
2. Under {{ui:Start from a cell}} choose a ready cell and press {{ui:Use this cell}}, or press {{ui:Open a layout file}} to load one made in Material flow (ModelCraft). The layout is kept in your IFC file, so saving the model saves it, and Undo takes it back.
3. Choose the {{ui:Level}} it stands on, its X and Y in millimetres and its turn. The equipment is drawn in the 3D view there.
4. {{ui:Check against the walls}} puts every box of the equipment against the level's walls, in plan and in height, and names the items that touch one.
5. The rest of the panel is the same as in ModelCraft: show a run, test the controls with a soft PLC and faults, compare layouts, read a measured line, and get a bill of materials.

## What the building gives, and what it does not

A building model carries rooms, walls and levels. It does not carry how machines behave, so the speeds, times and logic are the ones in the layout and the panel. The check looks only at the equipment's boxes against walls: doors and windows are not looked at, and the flow run does not know about the walls. Putting a run into the model's timeline and saving a video are not offered in BimCraft. Nothing here is a safety validation.
