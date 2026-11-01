---
title: Split, VRF and fan coil units
summary: Place wall, cassette and ducted indoor units, single-split and VRF outdoor units, refnet joints and 2-pipe or 4-pipe fan coils, each with its refrigerant, water, condensate and duct connections, and draw the line sets between them sized from a table you can change.
section: tasks
order: 38
keywords: split, mini split, minisplit, multi split, vrf, vrv, variable refrigerant flow, heat pump, indoor unit, outdoor unit, condensing unit, wall mounted, high wall, cassette, ducted, concealed, fan coil, fcu, 2-pipe, 4-pipe, refnet, branch joint, y joint, line set, lineset, refrigerant, liquid line, gas line, suction line, acr, copper, condensate, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
---

## What you'll do

Put the units of a split, multi-split or VRF system and its fan coils in the model, then join them with line sets: a liquid and a gas line in ACR copper, fixed to the units' ports. The units work like every other piece in [MEP equipment with ports](topic:mep-equipment): the same bar, Properties, ports and [connections](topic:mep-connections).

:::note
This is a drafting and coordination aid. The units are generic shapes sized by the values you type, not a maker's products. Their tube sizes come from a table of **typical example values** for R410A and R32 equipment, not from any maker: the unit maker's installation manual decides the real sizes, and long runs or big height differences change them. Change the table, or type the sizes, to match the units you use.
:::

## Place a unit

1. Turn on {{ui:Draw}}, open {{ui:Build}} and choose {{ui:Equipment}}.
2. Pick the kind and set its values:

| Kind | You set | Its ports |
|---|---|---|
| Split indoor unit, wall | capacity, liquid and gas line, length, depth, height, condensate size | refrigerant liquid and gas, condensate drain (on the right end, near the wall) |
| Split indoor unit, cassette | capacity, liquid and gas line, panel, body, height, condensate size | refrigerant liquid and gas, condensate drain (on one side, near the top) |
| Split indoor unit, ducted | capacity, liquid and gas line, length, width, height, supply and return openings, condensate size | supply duct out, return duct in, refrigerant liquid and gas, condensate drain |
| Split outdoor unit | capacity, liquid and gas line, width, depth, height | refrigerant liquid and gas (on the right side) |
| VRF outdoor unit | capacity, liquid and gas line, width, depth, height | refrigerant liquid and gas (on the front, low) |
| Refnet joint | liquid or gas line, the load on each branch, the tube at each end | inlet, branch A, branch B |
| Fan coil unit | 2-pipe or 4-pipe, length, width, height, supply and return openings, coil pipe and system, heating pipe, condensate size | supply duct out, return duct in, coil in and out, heating in and out (4-pipe), condensate drain |

3. Set **At**: the height of the unit's base above the level. A wall unit's base is its underside (often 2100 mm); a cassette's is its face in the ceiling; a refnet's is the height of its pipe's centre line.
4. Click where it goes ({{key:R}} turns it 90°).

**Capacity** is the unit's nominal cooling capacity in kW, with Btu/h beside it. With **Liquid line** and **Gas line** left on **From the table**, the unit's connections take the table's sizes for that capacity; pick a tube size to use your unit's own. A refnet's inlet is sized for both branches together, each branch for its own load.

Refrigerant ports work both ways (a heat pump runs in either direction). The condensate drain is a pipe size like any drain.

## Draw a line set

1. Pick two pieces ({{key:Shift}}+click the second): an outdoor unit and an indoor unit (a single split), or an outdoor unit and a refnet, a refnet and an indoor unit, or two refnets (VRF).
2. Open {{ui:Build}} and choose {{ui:Line set}}.

BimCraft draws the liquid and gas runs between their free ports, out of each port and up to a common height, in ACR copper (annealed coil up to 1-5/8 in, drawn tube above), as one step of {{ui:Undo}}. A refnet only takes its own line, into its inlet from the outdoor side and out of a branch toward the indoor units. Each run takes the size of its downstream end (the indoor unit, or the refnet's inlet); where the other end's port is another size, {{ui:Check connections}} lists it: that is where a reducer goes. Two indoor units need a refnet between them.

Move the runs afterwards like any pipe run; their ends stay on the ports. Runs between levels are drawn with {{ui:Pipe}}: a pipe started on a refrigerant port takes its system, ACR copper and its size.

## Change the line set table

Open {{ui:Build}} and choose {{ui:Line set sizes}}. Each row says: up to this capacity (kW), this liquid tube and this gas tube.

| Up to | Liquid | Gas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

These are the starting, typical values. Change a row, add or remove rows and choose {{ui:Save}}: the table is kept in the model, so everyone working on the file uses it, and {{ui:Undo}} takes it back. {{ui:Use the typical values}} puts the starting table back. Pieces already placed keep their ports until you change them.

## In the IFC file

Indoor and outdoor units of split and VRF systems are IfcUnitaryEquipment of type SPLITSYSTEM, with the object type saying which ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). A fan coil is IfcUnitaryEquipment of type AIRHANDLER with the object type "Fan coil unit": IFC4 has no fan coil type, and a fan, a coil and a filter for one room is what AIRHANDLER describes. A refnet joint is an IfcPipeFitting of type JUNCTION ("Refnet joint"). IFC2X3 files get IfcEnergyConversionDevice and IfcFlowFitting with the matching types.

Refrigerant ports and runs are in REFRIGERATION systems (one for the liquid lines, one for the gas lines), condensate in a DRAINAGE system. ACR runs are named by outside diameter. The line set table is the property set CadCraft_HvacLineSets on the project.

See also [MEP equipment with ports](topic:mep-equipment), [Connect pipes and ducts to equipment](topic:mep-connections) and [Pipes and ducts](topic:pipes-and-ducts).
