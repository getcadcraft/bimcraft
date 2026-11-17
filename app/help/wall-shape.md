---
title: Shape a wall: attach, profile, slant and openings
summary: Attach a wall's top to a roof, floor or ceiling, give it its own elevation outline, lean it, or cut an opening with no door or window, in Properties, in an elevation or section, on the wall's own face view or in 3D; each is one undo step.
section: tasks
order: 18
keywords: attach, attach top, attach base, roof, slab, ceiling, gable, profile, edit profile, elevation outline, stepped, parapet, slant, slanted, lean, tilt, tapered, double slant, opening, wall opening, hole, pass-through, no door, grips, elevation, section, 3D, face view, curved wall, copy
---

## What you'll do

Change a wall's shape above and below its plan: its top can follow a roof, floor slab or ceiling, it can have its own outline seen from the side, it can lean, and it can have openings with no door or window in them. The wall's plan, its corners and its location line stay as they were.

## Where you can do it

- **Properties**: with {{ui:Draw}} on and {{ui:Select}} on, click one wall you drew. **Properties** shows the wall's rows, then **Shape**, where everything is typed.
- **An elevation or a section**: the project browser's pencil ({{ui:Edit in this view}}) opens the view; pick a wall there and drag its grips. See "In an elevation or a section" below.
- **The wall's own face view**: {{ui:Walls}} › {{ui:Edit profile}}, then click the wall in the plan. It works for any wall, also one no elevation looks at squarely, and for a curved wall (shown unrolled).
- **The plan and the 3D view**: the four commands in {{ui:Walls}} (Edit group): {{ui:Attach top / base}}, {{ui:Edit profile}}, {{ui:Slant}} and {{ui:Wall opening}}. See "In the plan and in 3D" below.

Whichever way you choose, it is the same change: one step in **Changes**, and {{ui:Undo}} takes it back.

Straight and curved walls both take every Shape tool. On a curved wall, distances run along its arc.

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

## In an elevation or a section

Open the view with the project browser's pencil. With {{ui:Select and move}} on:

- **Profile**: click a wall that faces the view. Its top and bottom lines turn blue, with a square grip on every point and a dot in the middle of every piece.
  - Drag a square to move that point (the two end points move up and down only).
  - Drag a dot to move the whole piece up or down.
  - Double-click a line (or right-click it) to add a point there; {{ui:Add a point (top)}} and {{ui:Add a point (bottom)}} add one in the middle of the longest piece.
  - Click a square and press Delete (or right-click it) to remove that point. {{ui:Back to straight}} removes the profile.
  - With a point picked, type its **Along** and **Height** in the strip under the toolbar.
- **Attach**: the strip has **Attach top** and **Attach base** lists for the picked wall. Or use the {{ui:Attach top}} or {{ui:Attach base}} tool: click the wall or walls, then the roof, floor or ceiling, shown as dashed boxes. All the picked walls attach in one step.
- **Wall openings**: with the {{ui:Wall opening}} tool, drag a rectangle on a wall's face. Back in {{ui:Select and move}}, drag an opening to move it, drag one of its eight grips to resize it, type **From start**, **Width**, **Sill** and **Height** in the strip, or press Delete to remove it.
- **Slant**: a wall the view looks along (seen end-on, as a section through it or in an elevation from its end) can be clicked too. Drag the round handle at its top to lean it, or pick **Upright**, **Slanted** or **Double slant** in the strip and type the angles.

Sizes snap to 10 mm; type a value for anything finer. A curved wall can be edited in an elevation while it runs one way across the view; its own face view always works.

## In the plan and in 3D

Open {{ui:Walls}} in the Edit group:

- {{ui:Attach top / base}}: choose **Attach top** or **Attach base** in the tool's row. Click the wall or walls (in the plan or in the 3D view), then what they attach to: in 3D click the roof, floor or ceiling itself; in the plan click a point under it (when more than one is there, a list asks which).
- {{ui:Edit profile}}: in the plan, click a wall to open its face view. In 3D, click a wall: its profile points get grips; drag one in the wall's plane.
- {{ui:Slant}}: click a wall (plan or 3D) and type how far it leans.
- {{ui:Wall opening}}: in the plan, click a wall where the opening goes; its **Width**, **Height** and **Sill** are in the tool's row. In 3D, click one corner on the wall's face, then the opposite corner. With a wall picked in 3D, its openings have grips: the corners resize, the middle moves.

The 3D grips are the 3D view's own grips, so they wait while the section box shows its grips.

## On the plan

A slanted wall is drawn where the plan cuts it (1200 above the level unless the view says otherwise): its outline is moved over by how far it leans at that height, and a double slant is wider or narrower there. Its outline at the floor is drawn with the thin lines of what lies below the cut. The wall's corners, grips and dimensions stay at its base.

## Copies

{{ui:Copy this level…}} and Move with **Copy** take the wall's profile, slant and wall openings along. A wall attached to a floor or ceiling is attached to the copied floor or ceiling of the new level; an attachment to a roof is not copied with a level (roofs are not copied). A copy on the same level stays attached to the same roof, floor or ceiling.

## In the file

A shaped wall is written as a faceted solid (IfcFacetedBrep), which other programs read as it is drawn; its settings are on the wall (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). An opening is an IfcOpeningElement in the wall with nothing filling it.

## Not built yet

- A profile with overhangs or holes in the outline (use openings for holes).
- In 3D: adding or removing profile points, and the slant by a handle (use the wall's face view, an elevation or a section, or type them).
- {{ui:Offset}} with Copy on does not copy the shape or the wall openings (Move with Copy does).
- A slanted wall's layers are not drawn on Medium and Fine plans (its outline is).
- Openings that are not rectangles.
