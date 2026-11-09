---
title: Shape a wall: attach, profile, slant and openings
summary: Attach a wall's top to a roof, floor or ceiling, give it its own elevation outline, lean it, or cut an opening with no door or window; each is one undo step.
section: tasks
order: 18
keywords: attach, attach top, attach base, roof, slab, ceiling, gable, profile, edit profile, elevation outline, stepped, parapet, slant, slanted, lean, tilt, tapered, double slant, opening, wall opening, hole, pass-through, no door
---

## What you'll do

Change a wall's shape above and below its plan: its top can follow a roof, floor slab or ceiling, it can have its own outline seen from the side, it can lean, and it can have openings with no door or window in them. The wall's plan, its corners and its location line stay as they were.

## Open the Shape part

1. With {{ui:Draw}} on and {{ui:Select}} on, click one straight wall you drew.
2. **Properties** shows the wall's rows, then **Shape**. Each change there is one step in **Changes**; {{ui:Undo}} takes it back.

Shape is for straight walls only: a curved wall keeps its plain shape.

## Attach the top or the base

- **Attach top**: pick a roof, a floor or a ceiling. The wall's top follows the underside of what you picked, straight above each corner of the wall. Under a pitched roof a wall gets a sloped top, and where the roof changes plane (a ridge or a hip) the wall's top bends with it.
- **Attach base**: pick a floor or a ceiling. The wall's base follows its top face.
- Where nothing is above (or below) a part of the wall, that part keeps the wall's own height.
- The link stays: change the roof's pitch or overhang, or the ceiling's height, and the attached walls follow in the same step.
- Pick **Its own height** to let go.

## Edit the profile

{{ui:Edit profile…}} opens the wall's outline seen from its side:

- **Top line**: rows of **Along** (the distance from the wall's start) and **Height** (above the wall's base). Three rows 0 / 3000, 2500 / 4500, 5000 / 3000 make a gable end on a 5 m wall.
- **Bottom line**: leave it empty for a level base, or give rows for a wall on a stepped footing.
- {{ui:Add a point}} adds a row, **Remove** takes one out. {{ui:Use this profile}} applies it; {{ui:Back to straight}} removes it.

Each line runs along the wall once, from its start to its end; a line that goes back on itself, or a top that comes down to the base, is refused. With an attached top as well, the lower of the two is used.

## Lean the wall

**Slant**: **Upright**, **Slanted** (both faces lean the same way, the thickness stays) or **Double slant** (each face its own angle: a wall that gets thinner or thicker as it rises). Type degrees from upright; a plus angle leans to the wall's left, seen from its start. The wall stays where it is drawn at its base; the walls joined to it do not lean with it.

## Openings with no door or window

{{ui:Add opening}} cuts a hole 900 wide in the middle of the wall. Its row in **Openings** sets **From start**, **Width**, **Sill** (from the level) and **Height**; **Remove** takes it out. The opening goes through the whole wall, the wall's quantities leave it out, and the plan shows a gap where it reaches the plan's cut height. When the wall's start slides along its line, the opening keeps its place; a change that would leave it outside the wall is refused.

## In the file

A shaped wall is written as a faceted solid (IfcFacetedBrep), which other programs read as it is drawn; its settings are on the wall (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). An opening is an IfcOpeningElement in the wall with nothing filling it.

## Not built yet

- Shaping curved walls.
- A profile with overhangs or holes in the outline (use openings for holes).
- Editing the profile or openings by dragging in an elevation, section or the 3D view: type them in Properties.
- Copying a level, or copying a wall, does not copy its wall openings.
