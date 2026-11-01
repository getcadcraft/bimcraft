---
title: Draw walls
summary: Draw walls on the plan of a level by clicking their corners or typing lengths; corners join by themselves, and the walls are saved as IFC.
section: tasks
order: 16
keywords: curved, arc, location line, justification, wall, walls, draw, plan, floor plan, room, corner, join, wall type, 2x6, 2x4, cmu, concrete, height, level, levels, storey, typed length, ortho, snap
---

## What you'll do

Draw the walls of a building on a plan of each level. Click where a wall starts and then each corner; BimCraft joins the corners for you, gives each wall its layers (siding, sheathing, studs, drywall …) and runs it up to the level above. The 3D view shows the walls as you go.

## Open the plan

1. Start a new building ([Start a new building](topic:start-a-new-building)) or open an IFC model.
2. Click {{ui:Draw}} in the toolbar. A new building opens with it on already.
3. The plan of a level shows on the left and the 3D view on the right. Pick the level in the list at the top of the plan, or with the round button beside it in the **Levels** panel.
4. {{ui:Plan}}, {{ui:Split}} and {{ui:3D}} are tools in the {{ui:View}} row of the toolbar (the commands PLAN, SPLIT and the keys work as before). Use {{ui:Plan}} for the plan alone, {{ui:Split}} for both, {{ui:3D}} to close the plan. When the window is narrow (or the interface size large), {{ui:Split}} puts the plan above the 3D view instead of beside it.

The plan cuts the level 4'-0" (1200 mm) above its floor, as a floor plan does. Scroll to zoom, drag with the middle or right button (or hold {{key:Space}} and drag) to pan; with {{ui:Select}} on, a plain drag pans too. {{key:F}} with the pointer over the plan fits it.

## Draw a room

1. Click {{ui:Wall}} (or press {{key:W}}).
2. Choose the wall type in the first list, for example **Exterior 2×6** or **Interior 2×4**.
3. Choose its height: **Up to the level above** (the wall follows if that level moves), **Up to** a level further up for a wall that runs through several levels (a stair hall, a double-height room, a tall gable), or **Fixed height** and type it. A wall like that belongs to the level you drew it on; the plans of the levels it passes show it lighter, the rooms there close against it, and you can click doors and windows into it from those plans (a door stands on that level's floor). To move or reshape the wall itself, go to the level it starts on.
4. Click where the first wall starts.
5. Click each corner. Every click makes a wall; the next one starts where it ended. The length and angle show beside the pointer.
6. Click the first point again to close the room. The status line says how many walls the room has, and in centerline mode every wall gets its outside layer on the outside of the room.
7. Press {{key:Esc}} (or right-click, or double-click) to stop without closing.

The corners join by themselves: two walls meet at a mitre, a wall that ends on another one stops at its face (a T), and three or more walls at one point share the corner. Walls that cross are left as they are.

## Choose the drawing reference

Choose **Centerline**, **Inside face** or **Outside face** before the first click. With a face selected, your clicks and typed lengths describe that face; BimCraft offsets the wall centerline by half the total thickness and joins consecutive corners. Choose **Outside on left** or **Outside on right** relative to the direction you draw. For a closed outline drawn counterclockwise, the outside is on the right; clockwise, on the left. With **Inside face** the wall's body goes to the outside side of your line; with **Outside face**, to the other side. Face drawing keeps your chosen outside side when you close the loop. On the centerline, walls that do not close a room take the outside side you chose; closing a room sets every wall's outside to the outside of the room by itself, whichever way you drew it.

Changing the wall type, reference or outside side ends the current chain. Near a reversing corner, long mitres are capped by leaving square ends.

While drawing, an endpoint across empty space can align horizontally or vertically with a wall endpoint or an earlier corner. A dashed guide joins that point to the snapped pointer. Shift keeps the drawing direction square; alignment then stops along that direction. Nearby endpoints, midpoints and wall intersections keep priority over distant alignment.

## Location line

With **Reference** on **Outside face** or **Inside face**, the wall keeps that face as its location line. Later, if the wall gets thicker or its outside is flipped, that face stays where it is and the wall grows or flips around it. A straight wall that meets it at a corner follows, so the corner still closes. You can change the location line afterwards in **Properties**: see [Change a wall, door or window](topic:change-a-wall-or-door).

## Draw a curved wall

1. Click {{ui:Wall}}, then choose **Curved** in the **Shape** list of the options row.
2. Click where the wall starts, then where it ends.
3. Click a point on its arc. Or type the arc height and press {{key:Enter}}.
4. The chain goes on from the end of the wall. Press {{key:Esc}} to end it.

A curved wall joins the walls at its ends (corners and T joins work), makes rooms, and holds doors and windows along its arc. They stay straight units, square to the wall at their middle, and their distance is measured along the arc. A wall can turn at most three quarters of a circle. It snaps to its ends and to the middle of its arc.

Not built yet for curved walls: {{ui:Trim / extend}} and {{ui:Corner}}, framing, automatic plan dimensions and snapping along the arc. See [What is not built yet](topic:not-built-yet).

## Type a length instead of clicking

After the first click, type and press {{key:Enter}}:

| Type | Draws |
|---|---|
| `12'6"` or `3810` | a wall that long, in the direction the pointer shows |
| `12'6"<90` | that long, at that angle (degrees, counter-clockwise from the right) |
| `@3000,0` | to a point that far from the last one, across and up |
| `1200,3400` | to that point on the plan |

Typing a number while the Wall tool is on goes straight into the {{ui:Length}} box. In feet and inches a plain number is inches; in millimeters it is millimeters. You can always type the unit: `3.5 m`, `10 ft`, `6 1/2"`.

## Snaps

- Wall ends, their face corners and wall midpoints snap when the pointer is near them (a square, a triangle).
- The pointer snaps to a wall's center line or either face (a cross).
- From the last point, the direction holds at every 15° when it is close; hold {{key:Shift}} to keep it at 0°, 90°, 180° or 270°.
- Free directions round the length to 1/2" (or 10 mm).

## Change, undo, delete

- Every wall is one step in **Changes**: {{ui:Undo}} and {{ui:Redo}} take walls back and put them back.
- With {{ui:Select}} on, click a wall in the plan to pick it; the 3D view and **Properties** follow. {{key:Delete}} deletes the picked walls, and the walls they joined are cleaned up again.

## Levels

The **Levels** panel lists every level with its elevation and height.

- Type a new name, elevation or height and press {{key:Enter}}. Changing a level's height (or elevation) moves the levels above it by the same amount, and walls that run up to a level follow.
- {{ui:Add a level on top}} adds a level above the top one, as tall as it.
- {{ui:Copy this level…}} draws what is on the level you are looking at again on another level, or on a new one on top: its walls with their doors and windows, floors and ceilings (not roofs). Walls that ran up to the level above run up to the level above the new one; rooms appear by themselves. One {{ui:Undo}} takes all of it back. If the other level already has walls, the copy is added to them.
- {{ui:Units}} on the toolbar chooses the units (feet and inches, inches, decimal feet, millimeters, centimeters or meters) for everything the drawing tools show and read.

## Save

Click {{ui:Save as IFC}}. Each wall is an IFC wall with its center line, its joined shape, its type and layers, `Pset_WallCommon` and base quantities (length, height, areas and volumes), so other BIM programs open it and schedule it.

## Good to know

- Walls are drawn on their center line. The thickness comes from the wall type.
- The plan shows walls drawn here filled, and everything else (library items, models from other programs) cut by the same plane, with what lies below the cut in thin lines.
- Walls made by other programs show in the plan but can't be changed with these tools yet.
