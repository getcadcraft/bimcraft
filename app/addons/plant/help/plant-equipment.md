---
title: Plant: process equipment and layout
summary: Add generic equipment with nozzles, save it as an IFC file with a port at every nozzle, and check the layout for aisles, access and floor load.
section: tasks
order: 30
keywords: equipment, vessel, tank, pump, exchanger, column, nozzle, port, ifc, layout, aisle, clearance, floor load
---

## Equipment with nozzles

The {{ui:Plant}} tab keeps a table of equipment in this browser: vertical and horizontal vessel, storage tank, column, centrifugal pump, shell and tube exchanger and plate exchanger. Choose a type, give it a tag, a place (X, Y, Z in millimetres), a turn about Z and, if you know it, a weight, and press {{ui:Add}}.

Each is drawn in closed solids of the right proportions and has **nozzles**: where a pipe meets it, with a position, the direction the pipe leaves in, a size and a flow direction. They are generic shapes — no maker's dimensions — so use your vendor's figures where they matter.

{{ui:Save as IFC file}} writes the table as an IFC4 file: each item as the right class (a pump, a tank, a heat exchanger), its solids, its tag, and one distribution port per nozzle with its flow direction and size, so the pipe runs of any program can connect to it. Open the file in BimCraft like any other.

## In the open model

{{ui:Place}} on a row (or the "Place equipment in the model" command, for every row not placed yet) writes the item into the open model through BimCraft's add-on API: the equipment, its tag and the property set `CadCraft_Plant`, and a port at every nozzle, written the way BimCraft's own equipment ports are (`CadCraft_Port`: size, nominal size, flow direction), so a pipe started or ended there snaps to it and Check connections sees it. It lands on the model's first storey at the place in the table; it is one undo step, and Undo takes the equipment and its ports out again.

## Route a pipe

{{ui:Route a pipe}} lists the ports of the model. Choose two, a spec and a size and press {{ui:Find a route}}: the router leaves each nozzle straight out, runs only along X, Y and Z, keeps clear of the equipment you placed, never bends twice within two pipe diameters (150 mm at least) and prefers few bends and few climbs. The result is its length, its bends and its corners, in the storey's own millimetres. Press {{ui:Draw this run}} to put it into the model as a pipe run, in the spec's material and class and in the pipe system you choose (BimCraft has no process system of its own: chilled water, heating water, cold water, hot water, gas or fire protection). It is one undo step, and its two ends are joined to the nozzles they touch. Both ports must be on the same level.

## Layout check

{{ui:Check the layout}} looks at the table, and at equipment placed in the model from the library (its width, depth and weight), for: items that **overlap**; **aisles** narrower than your limit (900 mm to start with); the **space beside each item** that must stay free (800 mm in front, 300 mm elsewhere to start with) when something stands in it; and **floor load** over your limit (1000 kg/m² to start with). The limits are numbers you set; they are not a code requirement, and the check is a drafting aid.
