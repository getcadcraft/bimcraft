---
title: Route ducts, drains, water and refrigerant pipes automatically
summary: In the clash check, BimCraft finds a way round the open model for ducts, drainage by gravity, cold and hot water, and split or multi-split refrigerant pipes, and draws the runs with their fittings in one undo step. A drafting aid: sizes, slopes and checks come from the tables in the program and the numbers you type; nothing here says a design meets a code.
section: tasks
order: 32
keywords: auto route, autoroute, route ducts, route pipes, drainage, sanitary, gravity, stack, vent, trap, water, hot water, return loop, recirculation, refrigerant, split, multi-split, VRF, equivalent length, branch kit, wye
---

## What you'll do

Let BimCraft lay out a network of runs between connectors that already sit in the model, round walls and beams, then check it against numbers you can see.

## Steps

1. Open the model and the clash check. Under **Route ducts automatically** pick an air handler and its terminals, or under **Route other systems automatically** pick a system.
2. **Sanitary drainage by gravity.** Type the outlet position and, if you have them, the stack positions. Tick **Route every storey in one go** to take every storey that has fixtures: each storey's drains meet the stack at their own level, and the stack runs from above the highest tap to its foot. Press {{ui:Route}}.
3. **Trap to vent.** The panel lists the distance from each trap to its vent. Type the most your code allows in **Most from a trap to its vent**; any fixture over it is listed as not done, with the millimetres over. Tick **Vent through the stack** when the fixtures have no vent stub of their own: the distance is then measured to the stack. BimCraft does not ship a code table for this: you type the number.
4. **Cold and hot water.** Pick the source, type the pressure at the source and the pressure you need at a fixture. Tick **Hot water**, pick the heater's hot connection, and tick **Return loop** to end a return line at the heater's **hot-return** connection, or at any other connection you pick (that one ends 150 mm short, open, for you to join).
5. **Split, multi-split and VRF.** Pick the outdoor unit, tick the indoor units and type each one's capacity. Type the limits from your maker's data. Type the **equivalent length** of a bend and of a branch kit (the maker's values) and the longest and total lengths are checked on equivalent lengths.
6. Press {{ui:Route}}. The panel says how many runs it drew, and anything it could not do and why. {{ui:Undo}} takes everything back in one step.

## What you should see

Pipes with elbows, tees and reducers; drains that fall at least the smallest slope for their size; vent stubs at the fixtures; refrigerant lines as a liquid and gas pair that turns the same way round every corner, with a branch kit marked where a branch leaves the trunk.

## Good to know

- Where a drain meets another drain the model draws a tee. The plan names those places as 45-degree wye junctions so you can change the fitting.
- Hot water uses the fixture's own hot connection when its family has one, and a connection 100 mm beside the cold one when it does not.
- The refrigerant lines start between the two ports of each unit. When a unit's two ports stand too close for a bend, the pair stays centred between them.
- The water network uses the demand curve and friction numbers shown in the calculations; replace them with your code's before relying on the pressures.
- Large houses can take half a minute or more, mostly the hot network.
- This is a drafting aid. A qualified person checks sizes, slopes, vents and pressures against the code that applies.

## Next

[Check for clashes](topic:clash-check) · [Check pipes and ducts against the structure](topic:mep-against-structure) · [Connections between pipes and equipment](topic:mep-connections)
