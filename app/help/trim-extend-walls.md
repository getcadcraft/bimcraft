---
title: Trim, extend and join walls
summary: Trim or extend walls to another wall, and join two walls at the point where they meet, each as one step you can undo.
section: tasks
order: 33
keywords: trim, extend, corner, join, meet, clean up, wall end, wall corner, cut back, lengthen, shorten, modify, TR
---

## What you'll do

Tidy the walls you drew: cut back a wall that runs past another, lengthen one that stops short, or close an open corner.

## Steps

1. Turn on {{ui:Draw}} and choose the level in the plan's level list.
2. **Trim or extend to a wall:** choose {{ui:Modify}} › {{ui:Trim / extend}}. Click the wall to trim or extend to (the edge), then click each wall you want to change. A wall that runs past the edge is cut back to it, and the part you click is the part that stays; a wall that stops short is lengthened until it meets the edge. The edge stays chosen, so you can click several walls one after the other. Press {{key:Esc}} to choose another edge.
3. **Join two walls at a corner:** choose {{ui:Modify}} › {{ui:Corner}}, click the first wall, then the second. Both run to the point where they meet, and BimCraft cleans the corner. When a wall crosses the other one, the part you clicked stays.
4. Press {{key:Esc}} to start again, or {{key:V}} to go back to {{ui:Select}}.

## What you should see

- While you point at a wall, the plan shows where it would go, already joined to the walls it meets, with its new length.
- Each change is one step: {{key:Mod+Z}} takes it back.
- Rooms, floors, ceilings, roofs and what follows the walls are made again, as after any change to the walls. A room closed by a corner appears with its number and area.
- A door or window on a part that is cut off is deleted with it.

## Good to know

- Walls are drawn on their center line, so they are trimmed and extended along it: a wall meets the other wall's center line, and the joint is cleaned into a T or an L.
- BimCraft says why when it cannot do it: the two walls are parallel, the wall's line passes beside the other wall, a door or window is in the way (move or delete it first), or nothing would be left of the wall (under 1 mm). A wall left shorter than 50 mm is made, with a warning in Problems: see [Drawing advice](topic:drawing-advice).
- Only walls drawn in BimCraft can be trimmed or extended.

See also [Draw walls](topic:draw-walls) and [Change a wall, door or window](topic:change-a-wall-or-door).
