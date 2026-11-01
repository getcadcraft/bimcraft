---
title: Walk people through the building
summary: An evacuation or a normal day's arrivals through your rooms, doors and stairs, with queues where the building narrows, the longest walk to an exit from each room, and the findings as Problems. A coarse crowd model for design decisions, not a fire-safety certificate.
section: tasks
order: 60
keywords: people, evacuation, egress, escape, exit, travel distance, queue, crowd, flow, door width, stairs, arrivals, bottleneck, simulation, occupants, pedestrian, what if, blocked door
---

The {{ui:People in the building}} section of the left panel walks people through the rooms, doors and stairs of the open IFC model. Nothing in the model is changed and nothing is uploaded.

:::warning
This is **a design aid, not a fire-safety certificate**. It does not know fire, smoke, panic, mobility differences or what a code asks of you. The limits are yours: the longest walk to an exit and the time available are numbers you type, and none is assumed.
:::

## Run it

1. Open a model with closed rooms and doors. A door with a room on one side only is an exit; a door between two rooms joins them; a stair joins the rooms at its ends.
2. Choose **Evacuation** (everyone walks to an exit), **Arrivals** (everyone comes in and walks to a room) or **Exchange** (the people in the rooms leave while as many come in), and the floor area per person. Rooms named like a corridor, stair, lobby or toilet hold nobody.
3. Click {{ui:Run}}. You get the time the last person is out (and when half and nine in ten are), the queue at each door and stair, the room with the longest walk, and a plan that plays the run.

## What-ifs

Tick {{ui:Shut}} on a door in the table and run again: people find another way, or the rooms with no way out are listed as errors. A door twice as wide empties a room much sooner; the table shows where the queues are.

## How it works

Each room is a grid, so people walk round corners, not through walls. Speed falls as a room fills (S = 1.4 (1 − 0.266 D) m/s, D in people per m²). A door lets 1.3 people per second through each metre of its width, less 150 mm each side; a stair 1.0 and slower walking. People wait in a first-come queue. A run number repeats the same run exactly.

The assistant can run the same thing: ask for an evacuation, or the longest walk to an exit from each room.

## People in each room

Open {{ui:People in each room}} to type a number for any room. A blank box uses the floor-area figure (shown in grey); 0 empties a room. Your numbers are used for the run and are kept in this browser.

## Counter-flow at doors

In **Exchange**, people going out and people coming in meet at the same doors. When a door passes someone the other way close behind the last person, it keeps part of its rate (0.8 here; an assumption, since published values vary), and the table counts the direction changes. A door that changes direction often is listed in Problems as a note.

## Stairs and landings

Each landing of a stair costs a walker one second to turn (an assumption). A straight stair has none; an L or U stair has one. The stair's rate still comes from the width of its flight.

## In the 3D view

Tick {{ui:Show the people in the 3D view}} and the walkers appear as figures in the model, coloured by what they are doing, and move as you play the run. Nothing is added to the model.
