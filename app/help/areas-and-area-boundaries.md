---
title: Areas and area boundaries
summary: Measure gross building area or rentable area inside boundary lines you draw or take from the walls, and list the areas in a schedule.
section: tasks
order: 35
keywords: area, areas, area boundary, area scheme, gross building area, gross floor area, GFA, rentable, area plan, schedule of areas, pick walls, not enclosed
---

## What you'll do

Draw the boundaries of an area scheme, place areas inside them, and read the totals.

## Where the tools are

- Ribbon layouts: {{ui:Architecture}} › **Room & Area** › {{ui:Area}} and {{ui:Area Boundary}}.
- Classic layout: the Draw bar › {{ui:Rooms}} menu.

## Steps

1. Choose {{ui:Area Boundary}}. In the row choose the {{ui:Scheme}}: Gross building or Rentable. Each scheme has its own boundaries.
2. Choose how to make the lines in {{ui:Make by}}:
   - **Draw**: click point after point.
   - **Pick walls: centre line**: click a wall, and its centre line is a boundary.
   - **Pick walls: the face clicked**: click a wall on the side you want; that face is the boundary. For gross building area click the outside of the outer walls.
3. Choose {{ui:Area}}. Choose the same scheme, type a name, number or type if you like, and click inside the boundaries.
4. The area is measured at once. Pick it to change its name, number or type in Properties.

## What follows what

- A boundary made by picking a wall follows that wall: move the wall and the area is measured again in the same step.
- A boundary you drew stays where you drew it.
- Faces of walls that meet at a corner meet there too, so four picked walls close an area with no gaps.
- Area boundaries show on the plan while a room or area tool is in your hand, so they do not clutter the plan the rest of the time.

## If the boundaries do not close

The area is still placed. It says **Not enclosed** and measures nothing until the boundaries close round it. This is advice: nothing is refused.

## The schedule

Left panel › {{ui:Schedules}} › **Areas**: scheme, number, name, type, level, area and perimeter, with a total. A click on a row picks the area. {{ui:Download CSV}} gives the same table.

## In the IFC

An area is an IfcSpace with no body: PredefinedType GFA for the gross building scheme, USERDEFINED with ObjectType Rentable for rentable. It carries GrossFloorArea and GrossPerimeter, and no net area, so it is not mistaken for a room. A boundary is an IfcVirtualElement.

## Not built yet

- Schemes of your own (only Gross building and Rentable).
- Colour fills by area type.
- Rules that place the boundary for you, such as "to the glass line".

See also [Rooms and room separators](topic:rooms-and-separators), [Room and area tags](topic:room-and-area-tags).
