---
title: Model groups
summary: Make picked elements one named group, place the group again elsewhere, and change one copy to change them all.
section: tasks
order: 38
keywords: group, model group, grouping, ungroup, instance, copy, repeat, typical unit, bay, apartment, edit group, IfcGroup
---

## What you'll do

Group a typical bay, place it several times, and change every copy by changing one.

## Where the tool is

- Ribbon layouts: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Classic layout: the Draw bar › {{ui:Rooms}} menu › Model Group.

## Steps

1. With Select, pick the elements: click one, Ctrl+click or Shift+click the others.
2. Choose {{ui:Model Group}}. They become a group at once. Type a {{ui:Group name}} in the row first to name it, or type one afterwards to rename it.
3. Press {{ui:Place another}} and click where the copy should stand: its lower-left corner goes to the click.
4. Change any copy: move a wall end, resize a door, delete a column. Every other copy of the group changes in the same step, and one Undo takes it all back.
5. While Model Group is in your hand, a click on an element picks its whole group.

## Other things you can do

- {{ui:Add the picked}}: add more elements to the group you picked last.
- {{ui:Ungroup}}: this copy becomes ordinary elements again. The other copies stay a group.
- Move a whole copy with Move: it is the same group in a new place; the others do not move.
- Delete the elements of a copy and that copy is gone.

## What can be in a group

Walls with their doors and windows, columns and drawn floors can be placed again and kept alike. A group may hold other elements too, but then it cannot be placed again yet; the row says why.

Copies are moved, not turned or mirrored.

## In the IFC

A group is an IfcGroup with an IfcRelAssignsToGroup to its members, which stay ordinary walls, columns and floors. Every copy of one group carries the same definition id.

## Not built yet

- Turning or mirroring a copy.
- Stairs, roofs, room floors and library items in a group that is placed again.
- A wall's profile, slant and wall openings are not carried to copies.
- Groups inside groups.

See also [Move, align and distribute](topic:move-align-distribute).
