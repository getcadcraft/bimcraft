---
title: Shafts and openings through floors
summary: A shaft is one outline that cuts every floor, ceiling and roof between two levels. A vertical opening cuts one of them. Wall Opening cuts a wall.
section: tasks
order: 37
keywords: shaft, lift shaft, elevator shaft, stair opening, riser, vertical opening, floor opening, ceiling opening, roof opening, skylight opening, hole in floor, wall opening, IfcOpeningElement, deduction, net area
---

## What you'll do

Cut a lift shaft through a building with one sketch, cut a hole in one floor, and read what was taken out of the areas.

## Where the tools are

- Ribbon layouts: {{ui:Architecture}} › **Opening** › {{ui:Shaft}}, {{ui:Vertical Opening}} and {{ui:Wall Opening}}.
- Classic layout: the Draw bar › {{ui:Rooms}} menu (Shaft, Vertical Opening) and › {{ui:Walls}} menu (Wall opening).

## A shaft

1. Open the floor plan of the level the shaft starts on. Choose {{ui:Shaft}}.
2. In the row choose the {{ui:Base level}} and the {{ui:Top level}}, and offsets if it starts or ends above or below them.
3. Click the corners of the outline. Click the first corner again, double-click or press Enter to finish.
4. Every floor, ceiling and roof between the two heights is cut. The status line says how many.

A shaft is one thing. Pick its outline on any level it passes: Properties has its name, levels and offsets, what it cuts and the area taken out. Change it and every opening follows. Delete it and every opening goes. Each is one undo step.

It keeps cutting: a floor made later between its levels is cut without being asked, and a floor you delete is let go.

The floor the shaft stands on is not cut (its top is the base). Give the base a negative offset to cut it too. Give the top a positive offset to go through the roof.

## A vertical opening

1. Choose {{ui:Vertical Opening}}. In the row choose what to cut: the floor, the ceiling or the roof.
2. Click the corners of the outline and finish as above.
3. The floor, ceiling or roof of this level under the outline is cut. It belongs to that one element: delete the floor and the opening goes with it.

## A wall opening

{{ui:Wall Opening}} is the tool of [Shape a wall](topic:wall-shape): click a wall on the plan, or two corners on its face in 3D.

## Quantities

By the measuring rule for floors, an element's net area is its gross area less what is cut out of it. A shaft or a vertical opening is a deduction on each floor and ceiling it cuts; the Floors and Finishes schedules and the IFC quantities show the same numbers. On a roof the deduction is the area of roof surface: the plan area divided by the cosine of the pitch.

An outline that hangs over the edge deducts only the part that lies on the element.

## If nothing is cut

A shaft with nothing in its way is still made, and says so: it will cut what is built there later. A vertical opening needs something under it; with nothing there the status line says so and nothing is made.

## In the IFC

Each cut is an IfcOpeningElement with IfcRelVoidsElement to the element it cuts, so any IFC program shows the hole. A roof is cut face by face. The shaft itself is an IfcGroup of its openings.

## Not built yet

- Curved outlines.
- A shaft's walls: draw them with the Wall tool.
- Editing the outline by dragging its corners (change it in Properties, or delete and sketch again).
- A drawn floor's own Properties show its area less its own openings only; the schedules and the IFC quantities include the shaft's.

See also [Rooms and room separators](topic:rooms-and-separators).
