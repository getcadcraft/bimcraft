---
title: Check heating and cooling with EnergyPlus
summary: Write the model as an EnergyPlus file, or run EnergyPlus version 26.2.0 on it in the browser, and compare its design loads with the quick heating and cooling aid. A second opinion for early design, not a compliance calculation.
section: tasks
order: 38
keywords: energyplus, energy simulation, design day, heating load, cooling load, weather file, epw, idf, thermal mass, annual energy, simulate
---

## What you'll do

The **Check with EnergyPlus** pane writes the open model as an EnergyPlus input file (an IDF): one zone per room, the walls, floors, roofs and windows with their U-values, the air changes and ideal heating and cooling. You can always **save that file** and run it in your own EnergyPlus.

If you also set up the engine, the pane can simulate on the spot, and lists EnergyPlus's design heating and cooling next to the quick aid's, room by room.

This is a design aid. Energy codes, certification and permits need an approved tool and the climate data it requires, and the result needs review by the person who answers for it.

## Set up the engine

BimCraft does not carry EnergyPlus. It is a large WebAssembly build (about 6 MB compressed, plus a 4.6 MB data file), so you host it yourself and type its address in the pane. The page loads it only when you press a simulate button, never at start-up. The address must be https, a path on this site, or localhost.

## Design days or a year

- **Simulate design days** needs no weather file. It runs a cold winter day with no sun and a hot clear summer day at the temperatures in the heating and cooling inputs of the Daylight tab, and reports each room's load in watts.
- **Simulate a year** needs a weather file in EPW format that you pick. It adds people, lights and equipment from the same inputs (always on, since no schedule is invented) and reports the heating and cooling energy of each room in kWh. Weather files carry their own licences, so use one you may use.

## Thermal mass

Tick **Give walls with known layers thermal mass** and walls, roofs and floors whose material layers are known are written layer by layer, with density and specific heat taken from a short table of typical values by material name. The layers are taken outside first, in the order the file lists them. Elements without layers stay at their U-value with no mass.

## Reading the comparison

The two methods answer slightly different questions. The quick aid keeps every element; the EnergyPlus file averages each room's U-values by kind of surface. A difference over 15 % in a room's design heating is listed as a note in the ⚠ panel, with both figures. Cooling differs more by design: the quick aid works out a peak from the sun on one date, and EnergyPlus sizes on its own design day.
