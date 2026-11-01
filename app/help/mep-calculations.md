---
title: Size pipes and ducts, check cable fill and lighting
summary: Check supply pipe and duct sizes with pressure drop, route cables through cable trays and conduits and see their fill, and compute illuminance in rooms from IES or EULUMDAT files. Defaults are labelled; type the values of the code in force.
section: tasks
order: 37
keywords: sizing, pipe sizing, duct sizing, pressure drop, fixture units, demand, hunter, hazen-williams, velocity, friction, equal friction, fan pressure, damper, critical path, cable tray, conduit, fill, cable schedule, ies, ldt, eulumdat, photometry, illuminance, lux, uniformity, lighting calculation, power density, mep, calculations, problems
---

## What you'll do

Draw the pipes, ducts, cable trays and conduits as usual, then open the **Calculations** pane. Each tab reads the model, shows a table, and lists what is wrong as Problems in the ⚠ panel. When a size would fix a Problem, **Apply sizes** changes the runs in one undo step.

These are drafting aids. Every default is labelled on screen, and none of them is a code table: type the numbers from the standard you design to, and have the result reviewed by the engineer who answers for it.

## Pipes

1. Pick the **system** key (cold water is `cw`, hot water `hw`).
2. Set the highest velocity and, if you want the pressure checked, the pressure at the source and the least pressure a fixture needs.
3. Click {{ui:Check}}.

Each pipe carries the demand of the fixture units below it. The demand comes from a curve of fixture units against flow, in the way Hunter described. **The built-in curve is an example, not a code table**; the Problems say so until you type your own. Friction is Hazen–Williams, fittings are loss coefficients, and a rise costs 9.8 kPa per metre. A fixture's units come from its kind, or from the number you set with the assistant tool `loads_set`.

## Ducts

Set the system, the friction rate (equal friction) or a velocity, and any coil, filter or silencer loss. Terminals take their airflow from `loads_set` on the diffuser. The table shows velocity and friction per piece, the **fan pressure** at the critical path, and the pressure each other terminal's damper has to take up. Fitting losses use rounded default coefficients, not a fitting database.

## Cable trays and conduits

Draw them with the Duct tool: the systems **Cable tray** and **Conduit** are saved as cable carriers, so other programs read them as trays and conduits. In the Cables tab, paste the cable list (tag, outside diameter in mm, count, from, to). `from` and `to` are the tag of a piece of equipment or a point `x,y,z` in millimetres. Cables follow the shortest continuous route through the trays and conduits; each run shows its fill against the limits you type, and the schedule saves as CSV with a length that includes a slack percentage and the ends.

## Lighting

Give each luminaire its IES (LM-63) or EULUMDAT file with the assistant tool `photometry_set`. Type the targets, the grid spacing and workplane height. The result is **direct** illuminance only: no inter-reflection and no shadows, so it is a lower bound in a room.

## Fire sprinklers

The **Fire sprinklers** add-on has its own tab; see its help.
