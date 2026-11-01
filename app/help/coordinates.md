---
title: Coordinates in BimCraft
summary: Where you are working: the pointer's position in the plan and the 3D view, the level you are on, the project origin and the site's survey point.
section: start
order: 22
keywords: coordinates, where am I, position, pointer, readout, x y z, level, storey, project origin, origin, base point, survey point, site, map coordinates, eastings, northings, georeference, units, location
---

## What you'll do

Know where you are in a model at a glance: which level you are drawing on, how far the pointer is from the project origin, and where the site's survey point is.

## Where the numbers show

- **Over the 3D view** (bottom right, beside the view cube): move the pointer over the model. The box shows the level the point is on and how high above that level's floor it is, then its **X, Y and Z**. Over empty space it reads the point on the floor of the lowest level.
- **On the plan** (bottom right, while {{ui:Draw}} is on): the level the plan shows and the height of its floor, and the pointer's **X and Y** while it is over the plan.
- When the file has a map conversion (it was exported with map coordinates), both boxes add the **eastings and northings** on the map grid, in the {{ui:Units}} you chose (always with the unit written beside them; feet and inches show as decimal feet). A drawing (DWG or DXF) keeps its own units: its pointer readout names them, and is never converted.

Every X, Y and Z is measured from the **project origin**, in the {{ui:Units}} chosen on the toolbar (feet and inches, inches, decimal feet, millimeters, centimeters or meters). Positive Y points to the model's north, which is not always true north. Map eastings and northings follow the same choice (feet and inches show as decimal feet); when the map system's own unit is different from the one you picked, it is named in brackets after the numbers, for example *(US survey feet)*, so a surveyor can see what the system itself is written in.

## The two markers

- **Project origin** (a red circle with a cross): the point 0, 0, 0 every coordinate in the model is measured from.
- **Survey point** (a blue circle with a triangle): the site's reference point, the one its latitude, longitude and elevation, or its map coordinates, are given for. In the 3D view, point at it to read where it is.

When the site sits on the project origin, as in a new building drawn here, one marker shows both. Click the crosshair button in either box to hide or show the markers; BimCraft remembers your choice in this browser.

## What you should see

- The numbers change as the pointer moves, and the plan's box names the level you chose in the level list.
- The markers stay put while you orbit, pan and zoom.

:::tip
To read a point's latitude and longitude, use {{ui:Measure}} › {{ui:Location}}: see [Measure distances, face areas and locations in 3D](topic:measure).
:::

:::touch
On a touch screen the 3D box shows nothing until you use a mouse or a pen: a finger moves the view instead.
:::
