---
title: Rooms and room separators
summary: Pick a room to name and number it and read its area, perimeter and volume. Draw a room separator where two rooms meet with no wall between them.
section: tasks
order: 34
keywords: room, rooms, room separator, separation line, space, IfcSpace, name, number, area, perimeter, volume, open plan, divide a room, kitchen and living, not enclosed
---

## What you'll do

Name the rooms the walls make, and divide an open room into two without a wall.

## Where the tools are

- Ribbon layouts: {{ui:Architecture}} › **Room & Area** › {{ui:Room}} and {{ui:Room Separator}}.
- Classic layout: the Draw bar › {{ui:Rooms}} menu.
- Any menu style: the commands are named Room and Room Separator; the command palette finds them.

## Steps

1. Draw the walls. Every closed loop of walls is a room already: BimCraft makes it, numbers it and gives it its area as you draw.
2. Choose {{ui:Room}}. Move over the plan: the room under the pointer lights up with its area, perimeter and volume.
3. To name rooms quickly, type a {{ui:Name}} and a {{ui:Number}} in the row first, then click in the room. The number goes on by one for the next room (101, 102; A-09, A-10).
4. Or just click a room: it is picked, and Properties has its name, number, area, perimeter, volume and its tag.
5. To split an open room, choose {{ui:Room Separator}} and click two points: wall to wall, or wall to another separator. Carry on clicking for a chain; Enter, Esc or a double-click ends it.

## What a separator does

- It bounds rooms like a wall with no thickness. The two rooms' areas add up exactly to the room they were.
- The room that holds the old room's middle keeps its name and number. The other is new.
- A separator that stops in the open, touching nothing at one end, divides nothing. Extend it and it will.
- The part of a separator that lies inside a wall is ignored, so you can snap to wall centre lines.
- Pick a separator and press Delete to remove it: the two rooms become one again. Undo puts it back.

## If there is no room where you click

The status line says so: the walls do not close there. Close the gap, or draw a separator across it. Nothing is refused; there is simply no closed room yet.

## In the IFC

A room is an IfcSpace with its number (Name), name (LongName) and Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. The volume is the area times the height to the level above.

A room separator is an IfcVirtualElement, the entity IFC has for a boundary that is not built. It has a line and no body, so another program reads no wall and counts nothing for it.

## Not built yet

- Curved separators.
- A room that follows a sloped ceiling: the volume is always area times the level height.
- Space boundary relations (IfcRelSpaceBoundary) are not written, for walls or for separators.

See also [Room and area tags](topic:room-and-area-tags), [Areas and area boundaries](topic:areas-and-area-boundaries).
