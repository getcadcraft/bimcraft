---
title: MEP equipment with ports
summary: Place generic air handlers, fans, pumps, boilers, water heaters, terminal units, diffusers, grilles and tanks sized by the values you type, each with the pipe and duct connections other runs join.
section: tasks
order: 37
keywords: mep, equipment, air handler, ahu, fan, inline fan, pump, boiler, water heater, terminal unit, vav, diffuser, grille, register, tank, port, ports, connection, nozzle, neck size, hvac, plumbing, mechanical, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
---

## What you'll do

Put the equipment at the ends of your pipes and ducts. Each piece is a generic shape sized by the values you type, with its connections as **ports**: where a pipe or duct joins it, which system, which way the flow goes, and what size. Pipes and ducts drawn from a port take its size and system and stay fixed to it: see [Connect pipes and ducts to equipment](topic:mep-connections).

:::note
This is a drafting and coordination aid, sized by an engineer. The equipment is not a maker's product: no capacities, weights or makers' connection sizes. Bring a maker's model from your MEP program as IFC when you need it.
:::

## Place a piece

1. Turn on {{ui:Draw}}, open {{ui:Build}} and choose {{ui:Equipment}}.
2. In the bar, pick the kind and type its sizes. Each kind asks for its own:

| Kind | You type | Its ports |
|---|---|---|
| Air handler | length, width, height; supply and return openings; coil pipe size and system; condensate size | supply duct out, return duct in, coil in and out, condensate drain |
| Inline fan | diameter, length, system | duct in and out |
| Pump | pipe size, system | inlet and outlet |
| Boiler | length, width, height, pipe size, gas size, flue diameter | heating supply out and return in, gas in, flue out |
| Water heater | diameter, height, pipe size, gas or electric | cold water in, hot water out (and gas in and a flue when it burns gas) |
| Terminal unit | length, width, height, round inlet, outlet width and height | supply air in and out |
| Diffuser | face, neck, system | its neck (air in) |
| Grille | face width and height, neck width and height, system | its neck (air out to the return or exhaust duct) |
| Tank | diameter, height, pipe size, system | inlet on top, outlet near the bottom |
| Radiator | length, height, depth, pipe size, system | flow in at the top of one end, return out at the bottom of the other |
| Convector / panel heater | length, height, depth, pipe size, system | flow in at one end, return out at the other |
| Manufacturer's family | the family (see [Pipe specs, valves, dampers and manufacturers' families](topic:pipe-specs)) | the ports its family was given |

3. Set **At**, the height of its base above the level. A diffuser's or grille's height is its face: type the ceiling height.
4. Type a **Tag** if you want one (`AHU-1`); the next piece of the same kind gets the next number.
5. Move the pointer over the plan: the footprint and its ports follow it. Press {{key:R}} to turn it 90°. Click where it goes.

Pipe sizes are steel pipe sizes (ASME B36.10M). A pipe drawn from a pump in another material takes the same nominal size in its own material.

## Change or remove it

Pick it in the plan or the 3D view. Properties shows every size you typed, its tag, X, Y, height and turn, and each port: its size, system, which way the flow goes, and whether something is connected. Each change is one step of {{ui:Undo}}; runs fixed to its ports move with it. {{key:Delete}} removes it; runs that were fixed to it stay and the Connections check lists them.

## In the IFC file

Each kind is saved as its IFC class: IfcUnitaryEquipment (air handler), IfcFan, IfcPump, IfcBoiler (boiler; a water heater is an IfcBoiler of type water with the object type "Water heater"), IfcAirTerminalBox (terminal unit), IfcAirTerminal (diffuser, grille) and IfcTank, with a type shared by every piece of the same kind and sizes. IFC2X3 files get IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal and IfcFlowStorageDevice with the matching types. Each port is an IfcDistributionPort placed where the connection is, facing out, with its flow direction and system; other programs read which run connects to which port. The piece joins the system of each of its ports, and carries the library item sets every placed library item has.
