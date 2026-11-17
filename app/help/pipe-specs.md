---
title: Pipe specs, valves, dampers and manufacturers' families
summary: Set up your own piping specifications (size tables with material, joint and roughness), kept in the model file; put valves, a strainer and dampers on runs; and bring in a manufacturer's valve or equipment model as a family with connection ports.
section: tasks
order: 39
keywords: pipe spec, pipe specs, piping specification, piping class, custom pipe, size table, tube, hygienic tube, stainless, schedule, outside diameter, wall thickness, inside diameter, roughness, pressure rating, csv, json, import, export, spreadsheet, standard, bpe, din, en 10357, en 10255, valve, valves, butterfly valve, balancing valve, control valve, strainer, damper, volume damper, fire damper, oem, manufacturer, maker, family, families, ports, connection, step, obj, gltf, ifc, radiator, convector, panel heater, air handler, diffuser, grille
---

## What you'll do

Draw pipe in your own specification instead of the built-in steel, copper and plastic tables, put valves and dampers on the runs, and place a maker's model with ports that the pipes connect to.

:::note
A drafting and coordination aid. A pipe spec holds the numbers you type or import: check every table against your project standard. Built-in valves, strainers and dampers are schematic shapes sized from the run, not a maker's or a valve standard's length.
:::

## Set up a pipe spec

1. Turn on {{ui:Draw}}, open {{ui:Build}} and choose {{ui:Pipe specs}}. The same button is on the Pipe tool's bar.
2. Choose {{ui:New}}, or start from a file, a paste or a starter spec (below).
3. Type its name, the standard or reference it follows, the material and the end or joint type.
4. Type one row per size: the size's name, the outside diameter and the wall, in millimetres. Type the inside diameter instead of the wall if that is what you have: the other is filled in. DN, pressure rating and weight are optional.
5. Optional: the roughness in millimetres (the pressure-drop calculation uses it), an insulation thickness new runs start with, the elbow radius as a factor of the outside diameter, whether the spec has tees and reducers, and a colour of its own in 3D.
6. Tick the services whose new runs should start in this spec, for example chilled water.
7. Choose {{ui:Save in the model}}.

The specs are saved in the model file. Anyone who opens the file has them, and Undo takes a change back.

A spec, or one of its sizes, cannot be deleted while a run is drawn in it. Changing a size's numbers redraws the runs in that size.

## Reuse a spec in another model

- {{ui:Export .json}} saves the selected spec as a small file; {{ui:Export all}} saves every spec of the model. {{ui:Import a file}} reads them back.
- {{ui:Export .csv}} saves the size table for a spreadsheet. {{ui:Import a file}} also reads a `.csv`.
- {{ui:Paste rows}} takes a table copied from a spreadsheet. The first row names the columns: `Size`, `OD` and `Wall` (or `ID`), and optionally `DN`, `Pressure`, `Weight`. One row per size. Numbers are millimetres unless you choose inches or a cell writes its unit (`0.065 in`).

## Starter specs

{{ui:Add a starter spec}} adds one of these to your model as a copy you can edit:

| Starter | Sizes |
|---|---|
| ASME BPE tube | 1/4" to 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 to DN200 |
| EN 10255 steel tube, medium series | DN15 to DN150 |
| EN 10255 steel tube, heavy series | DN15 to DN125 |

These tables are the outside diameters and walls that two or more published supplier pages print for the standard and agree on. They are not taken from the standards themselves. Sizes that only one page gave are left out. Each starter shows its source pages and is marked "check against your project standard". No roughness, pressure rating or weight is given.

## Draw a run in a spec

1. Choose {{ui:Pipe}}. A service you ticked in a spec starts in it. For any other run, pick the spec in the material list: specs are listed after the built-in materials as "Spec: name".
2. The size list now holds only that spec's sizes. Pick one and draw the run.

To move a run into a spec later, select it and change **Material** in Properties. Its size becomes the spec's nearest size by outside diameter.

In the IFC file the pipe carries the spec's name, standard, material, joint and dimensions (`CadCraft_PipeSpec` and `Pset_PipeSegmentTypeCommon`, on the pipe and on its type).

The sizing and pressure-drop calculations read the spec's inside diameter. When the spec has a roughness, a run's friction is worked out with it (Darcy-Weisbach); without one, the calculation's usual default is used.

## Valves, a strainer and dampers

1. Choose {{ui:Valve}} and pick the kind in the bar: gate, ball, butterfly, globe, check, balancing or control valve, or a strainer, for pipes; a volume damper or a fire damper for ducts.
2. Click on the run where it goes. The run is cut round it and both sides stay connected. It takes the run's size and moves with the run.

Properties of the run lists each one with {{ui:Remove}}; the run closes up again.

The pressure-drop calculation counts a fitting loss for gate, ball, globe and check valves only. The other kinds, dampers and manufacturers' families add no loss there: allow for them in your own check. They are counted in the **Fittings and valves** schedule and in the takeoff, and written to IFC as valves, a filter (the strainer) and dampers with two connected ports.

## A manufacturer's model as a family

1. Open {{ui:Build}} and choose {{ui:Families}}, then {{ui:Import a model}}. IFC, STEP, OBJ, STL, glTF and Library item files are read. For OBJ and STL, set the file's units and up axis first.
2. In the ports dialog, type the name, maker and model number.
3. Choose whether it goes **On a run** (a valve, strainer or damper) or is **Equipment**, and what it is written as.
4. Give it its ports. Each has a name, pipe or duct, the service, the size in millimetres (a pipe's outside diameter), the nominal size as your spec names it, the end type, its position and the way it faces. {{ui:On a face}} puts a port at the centre of a face of the model's box. The small top view shows the ports.
5. Choose {{ui:Save the family in the model}}.

A family that goes on a run needs exactly two ports facing away from each other on one line. Pick it in the Valve tool's list and click on a run: it is placed at its own length and the pipes connect to its ports.

A family is never stretched. If its ports are not the run's size, you are told when you place it, and {{ui:Check connections}} lists it.

An equipment family is placed with {{ui:Equipment}}, kind **Manufacturer's family**. Pipes and ducts snap to its ports.

{{ui:Download as a Library item}} saves a family with its ports as a file you can submit to the Library.

## Radiators and convectors

{{ui:Equipment}} also has **Radiator** and **Convector / panel heater**: generic bodies with a flow and a return connection for heating water. See [MEP equipment with ports](topic:mep-equipment).
