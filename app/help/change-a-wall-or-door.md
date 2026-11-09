---
title: Change a wall, door or window
summary: Click a drawn wall, door or window and change its type, size, height or place in Properties, or drag it in the plan; each change is one undo step.
section: tasks
order: 18
keywords: square up, square, 90, right angle, skew, angle, ortho, room size, inside face, outside face, measure from, move distance, typed distance, curved, arc, arc height, radius, location line, justification, change, edit, properties, wall type, thickness, length, height, base offset, top, level, flip, outside, door size, window size, sill, distance, move, grip, drag, change type, several
---

## What you'll do

Change what you drew: pick a wall, door or window, then type a new number in **Properties** or drag it in the plan. The plan and the 3D view follow, the corners join again, and doors and windows stay in their walls.

## Change a wall

1. With {{ui:Draw}} on and {{ui:Select}} on, click the wall in the plan (or in the 3D view).
2. **Properties** shows a box with the wall's numbers. Change one and press {{key:Enter}}:
   - **Wall type**: another of the starter types. The thickness and the layers change with it.
   - **Thickness**: any thickness. The type keeps its other layers and its main layer (the studs or the block) takes the difference, for example "Exterior 2×6, 200 mm".
   - **Measure from**: **Centre line**, **Inside face** or **Outside face**. **Length** and **Room size** read and set from it. Outside face is what the plan's dimensions show.
   - **Length**: the wall's end moves along its line. The wall joined at that end moves square to itself and keeps its angle.
   - **Room size** (when there is a parallel wall across the room): type the size you want. This wall moves square and the joined walls stretch to follow.
   - **Move square**: type how far to move the wall square to itself: a plain number moves it out, a minus number moves it in.
   - **Angle to joined wall**: the angle to the wall joined at its start. Type 90 to set it square. A wall joined to nothing shows **Direction**, in degrees from east.
   - {{ui:Square up}}: turns the walls connected to this one back to right angles, along the direction most of their length runs in. It works on the whole connected room or layout, whichever of its walls you pick. A wall more than 10 degrees off a right angle stays as it is, so one set at 45 degrees is safe. One {{ui:Undo}} takes it all back.
   - **Wall height**: **Up to the level above** follows that level, **Up to Level 3** (and any level further up) makes a wall that runs through the levels between; typing a height then sets how far below or above that level the top is. **Fixed height** keeps the number you type. **Runs through** lists the levels such a wall passes: it is drawn lighter in their plans, rooms there close against it, and doors and windows can be placed in it from those plans. It is moved and reshaped on the level it starts on.
   - **Base offset**: how far above the level the wall starts. Its top stays where it was.
   - **Outside**: {{ui:Flip}} puts the outside layers on the other face.
   - **Location line**: **Center line**, **Outside face**, **Inside face**, **Left face** or **Right face**. Changing it moves nothing. Later, when the wall gets thicker (by type or **Thickness**) or its outside is flipped, the location line stays put and the wall grows or flips around it. A straight wall meeting it at a corner follows, so the corner still closes. The picked wall's location line is drawn dashed in the plan. Pick several walls to set it for all of them.
   - **Arc height** (curved walls): how far the middle bows off a straight line. 0 makes it straight; a negative value bows it to the other side. The radius shows beside it.
3. Each change is one step in **Changes**; {{ui:Undo}} takes it back.

## Drag a wall in the plan

When one wall is picked, it shows three grips: a square at each end and a circle in the middle.

- Drag an end to make the wall longer, shorter or turn it. It snaps like the Wall tool, and catches square to the wall joined at its other end when you are within 3 degrees; {{key:Shift}} keeps it on the plan's axes.
- Drag the middle to move the whole wall square to itself, whichever way you drag. Its corners slide along the joined walls, so those walls keep their angle.
- Hold {{key:Mod}} while dragging the middle for a free move, when you do want to break the angle. {{ui:Square up}} brings it back.
- While a grip is held, type a distance and press {{key:Enter}} (or let go): the wall goes exactly that far, the way you were dragging. {{key:Esc}} drops the move.
- A picked curved wall shows grips at its ends and a round grip at the middle of its arc. Drag the round grip to bend it.
- Doors and windows stay in the wall. A wall too short for what it holds is refused with "It doesn't fit in that wall."

## Change a door or window

1. Click the door or window in the plan.
2. In **Properties**: **Type** (another door or window of the same kind), **Width**, **Height**, **Sill** (windows), **From the start** and **From the end** (the distance from each end of the wall face to its edge), **Hinges** {{ui:Flip}} (doors with one leaf and casement windows; sliding, pocket, barn and bifold doors say **Opens to** instead; fixed, hung and picture windows and double doors have none), and **Swings to** (doors) or **Frame side** (windows) {{ui:Flip}}.
3. Or drag it along its wall, or onto another wall: see [Doors and windows](topic:doors-and-windows).

## Change several at once

Pick several walls (or several doors, or several windows) with {{key:Shift}}+click or {{key:Mod}}+click. **Properties** offers what they share: **Change type…**, the height, the size. One change sets all of them, and one {{ui:Undo}} takes all of it back.

## Good to know

- The numbers show in the {{ui:Units}} chosen on the toolbar.
- Walls, doors and windows from other programs show their IFC data in **Properties** as before, without this box.
