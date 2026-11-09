---
title: Print stage: put your model on the printer's bed
summary: Lay IFC elements of your model on a printer bed, as a scale model or life size, lay them flat, arrange them and send them to the printer without exporting.
section: tasks
order: 10
keywords: 3d print, printer, bed, stage, slicer, g-code, send to printer, scale model, ifc, elements, lay flat, arrange
---

## Print part of your model from here

1. Pick the elements you want in the 3D view (a wall, a column, a stair), then open the {{ui:Print stage}} tab in the right panel, or press {{ui:Print stage}} in the toolbar. The model steps aside and a dashed bed appears with your elements on it. They are copies of what the 3D view draws, in the places the model gives them.
2. {{ui:Take the selected elements}} reads the 3D view's selection again; {{ui:Take everything shown}} takes every element the view shows (at most 300 at a time).
3. Elements are life size, so most are far bigger than a bed. Type a number in {{ui:Scale 1 :}} (50 makes a 1 to 50 model) and press {{ui:Make a scale model}}: everything shrinks by that one number, so the proportions stay. {{ui:Life size}} puts it back.
4. Choose an element in the list, then {{ui:Lay flat}} puts the largest flat face that can carry it on the bed, {{ui:Turn 90°}} turns it a quarter turn and {{ui:As designed}} puts it back the way the model has it. {{ui:Undo layout}} takes the last change back.
5. {{ui:Arrange on the bed}} spreads everything out. Choose material and quality, connect the printer once, and press {{ui:Send to 3D printer}}. A box says the time, material and temperatures first; nothing is sent until you say yes.

The layout is a copy: moving things on the bed never changes your model.

An element that is not a closed solid (its skin has holes, it passes through itself, or the model gives it no shape) is left off the bed and named with the reason, because a slicer would print it wrongly or not at all. Doors, windows and walls made of several pieces are judged as the one element they are.

New in this build, and nothing has yet been printed on a real printer from BimCraft: watch the first prints. A scale model of a building is thin at small scales: look at the preview for walls thinner than your nozzle.
