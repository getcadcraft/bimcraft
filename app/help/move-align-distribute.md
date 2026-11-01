---
title: Move, copy, align and distribute building elements
summary: Move walls, floors, columns and placed items by a base point and a second point or a typed distance, copy them as you go, and line them up or space them evenly, on the plan or from a pick in 3D.
section: tasks
order: 157
keywords: move, copy, align, distribute, spacing, offset, base point, displacement, walls, columns, floors, MOVE, ALIGN, DISTRIBUTE, Shift+M
---

## What you'll do

Shift a wall, a column, a floor or a placed library item to a new place, make copies of it, or line several up, without redrawing them.

## Names and keys

The commands are called {{ui:Move}}, {{ui:Align}} and {{ui:Distribute}}, and you can type `MOVE`, `ALIGN` and `DISTRIBUTE` in the command line, as in the CadCraft drafting app. One difference: in BimCraft {{key:M}} is Measure, so Move has its own key, {{key:Shift+M}}. The tools are in the {{ui:Build}} menu.

## Move

1. Pick what to move, on the plan or in the 3D view. Walls, floors, columns and placed library items can all go in one pick.
2. Press {{key:Shift+M}} or choose {{ui:Move}}.
3. Click a base point, then a second point. Or, after the base point, type a distance and press {{key:Enter}}: it goes the way the pointer points from the base point. You can also type `dx,dy` (or `@dx,dy`), or `length<angle`.
4. Press {{key:C}} to switch {{ui:Copy}} on: every move then makes copies and stays ready for the next. Press {{key:Esc}} to stop.
Both points can be clicked in the 3D view as well: with Move on, the pointer meets the level's floor height, so a click there is a point of the plan. Hold {{key:Shift}} while you click to pick another element instead. Use a plan, Top, Front or Side view as you like: the points always lie on that level.

A wall takes its doors and windows with it. A drawn floor takes its openings. Rooms, floors and ceilings that follow the walls are brought up to date. Walls that joined the moved wall stay where they are.

Each move is one change: one {{key:Mod+Z}} undoes it, and it travels to everyone in a Live TeamWork session. A placed library item cannot be copied this way; use {{ui:Edit}} › {{ui:Copy}} and {{ui:Paste}}.

## Align

Pick two or more elements, choose {{ui:Align}}, then a side (left, centre, right, top, middle or bottom) and what to align to: the picked set, the first picked, the last picked, or a point you click. Press {{ui:Align}} in the bar.

## Distribute

Pick three or more elements, choose {{ui:Distribute}}, then a direction (across or down) and the spacing: equal gaps between them or equal centres. The two at the ends stay where they are.
