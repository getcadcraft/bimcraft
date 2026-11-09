---
title: The site, the building on it, and its levels
summary: Draw the site's outline, place and turn the building on the site, add levels at given heights or split the building's height, and draw on the level you choose.
section: tasks
order: 21
keywords: site, site plan, property line, lot, plot, boundary, building placement, rotate building, place building, levels, storeys, stories, floors, add levels, split height, floor to floor, IfcSite, IfcBuilding, IfcBuildingStorey, spatial structure
---

## What you'll do

Set up the parts of an IFC model that hold everything else: the site, the building on it and the building's levels.

A model is organized as a **site** that holds a **building**, which holds its **levels** (storeys); walls, floors and everything else belong to a level. {{ui:File}} › {{ui:New building}} sets up all three. A model from another program that has a building but no site gets a site the first time you draw one: the building is placed on it where it already was.

## Draw the site

1. Turn on {{ui:Draw}}, then choose {{ui:Build}} › {{ui:Site}}.
2. Click the corners of the site (the tool snaps like the Wall tool). Click the first corner again, double-click or press {{key:Enter}} to finish. {{key:Backspace}} takes back a corner.
3. The row shows the site's area. Draw it again to change it.

Every level's plan shows the site outline as a property line.

## Place the building on the site

With {{ui:Site}} on, type the building's **X** and **Y** on the site and its **Turn** in degrees, or click {{ui:Place the building by a click}} and click where the building's origin goes. Everything in the building (levels, walls, grids, all you drew) moves with it; the site and its outline stay. The plans keep showing each level square to the building.

## Add levels

In the {{ui:Levels}} panel, {{ui:Add a level on top}} adds one, {{ui:Add a level below}} adds one under the lowest (a basement, at a negative elevation). {{ui:Add levels…}} adds several at once:

- **At these heights**: type heights above the lowest level, separated by commas (for example `12', 24', 36'`). Heights that already have a level are skipped.
- **Split the building's height**: type the building's height and the number of levels. The levels you have move to their new heights from the lowest up, missing ones are added, and any above them stay where they are.

Walls that run to the level above follow it, as do columns and ramps.

{{ui:Copy this level…}} (same panel) copies what is drawn on the level you are looking at to another level or to a new level on top, so a floor plan can go up the building in one step. See [Draw walls](topic:draw-walls).

## Draw on a level

Every {{ui:Draw}} tool works on the level chosen in the plan's level list (or picked in the {{ui:Levels}} panel): what you draw belongs to that level.

## What you should see

- Each of these changes is one step: {{key:Mod+Z}} takes it back.
- In the IFC file: the site (IfcSite) with its outline and area, the building (IfcBuilding) placed on it, and the levels (IfcBuildingStorey) in the building.

See also [Coordinates in BimCraft](topic:coordinates) for the project origin and the survey point.
