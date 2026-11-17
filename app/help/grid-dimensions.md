---
title: Dimension a grid
summary: Show the spacing between neighbouring grid lines and the overall grid size on every level's plan, saved in the IFC and following the grid when lines change.
section: tasks
order: 45
keywords: grid, grid dimensions, dimension, spacing, bays, overall size, bubbles, column grid, plan, sheet
---

## What you'll do

Put the spacing between grid lines and the overall size of the grid on the plans, past the bubbles, so the sheets made from them carry the dimensions. You need a grid first: see [Grids and columns](topic:grids-and-columns).

## Steps

1. Show the plan of a level and click {{ui:Grid}} to turn the grid tool on. The grid options row shows.
2. Tick {{ui:Dimensions}}. The spacing between neighbouring numbered lines and between neighbouring lettered lines, and the overall size each way, are drawn on the plan.
3. Pick another level: the same dimensions show on its plan.
4. Move a line, rename one or add one. The dimensions follow the grid.
5. Untick {{ui:Dimensions}} to take them off again.

## Notes

- Each change is one undo step: {{key:Mod+Z}} takes it back.
- The setting is saved in the IFC with the grid, and the plans placed on sheets carry the dimensions.
- If the model has no grid you can change (a grid that came in a file from another program cannot be changed here), the status line says "There is no grid to change."
