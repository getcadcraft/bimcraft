---
title: Walk through a model
summary: Walk through an IFC model at eye height with the keyboard, with gravity keeping you on the floor and walls stopping you.
section: tasks
order: 31
keywords: walk, walkthrough, first person, fly, navigate, eye height, gravity, collision, wasd, inside, tour
---

## What you'll do

See a model as someone standing in it: walk down a corridor, into a room, up a stair.

## Steps

1. Open an IFC model and click {{ui:Walk}} in the toolbar.
2. Click the floor where you want to stand. You stand there with your eyes at {{ui:Eye height}} (1.6 m to start, shown and typed in the {{ui:Units}} you chose: 5'-3" in feet and inches, 1600 in millimeters; a bare number is in that unit, or write a unit such as 1.8 m), looking the way the view looked.
3. Move with {{key:W}} {{key:A}} {{key:S}} {{key:D}} or the arrow keys. Hold {{key:Shift}} to go faster. Drag in the view to look round.
4. Press {{key:Esc}} or click {{ui:Done}} to stop. The view stays where you were, ready to orbit.

## What you should see

- **Gravity** keeps you on the floor below you and takes you up steps and stairs. Turn it off to float: {{key:E}} or {{key:PageUp}} rises, {{key:Q}} or {{key:PageDown}} sinks.
- **Stop at walls** stops you just short of walls, doors and anything else in the way, and lets you slide along them. Turn it off to walk through.
- Hidden and see-through elements, and what a section cuts away, do not stop you and are not stood on.

## Common mistakes

- **Nothing happens when I press W.** The keys go to a box you are typing in: click in the view first.
- **I fell a long way.** There was no floor under the spot (an opening, or the floor is hidden). Turn gravity off, or start on a floor.

## Next

- [Hide, isolate and see through elements](topic:hide-and-isolate)
- [Cut an IFC model with a section plane](topic:section-plane)
