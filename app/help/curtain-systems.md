---
title: Curtain systems: glazed walls on a grid, with mullions
summary: Draw a curtain system like a wall or lay one on a face, then set its grid lines and its mullions. It is saved as an IfcCurtainWall with its panes and mullions.
section: tasks
order: 172
keywords: curtain system, curtain wall, curtain grid, mullion, glazing, storefront, glass wall, panel, pane, by face, face, mass, grid line, spacing, profile, transom, IfcCurtainWall, IfcPlate, IfcMember
---

## What you'll do

Make a glazed wall of panes between mullions, change where its grid lines are, and choose which lines carry a mullion.

## Steps

1. Turn **Draw** on and open the **Build** menu (in a ribbon layout: the Architecture tab).
2. Choose **Curtain System**. In its row set the top (the level above, or a height), a line every so much along it, a line every so much up it (leave empty for none), whether it gets mullions, and the mullion profile.
3. Click where it starts and where it ends, as you draw a wall. Shift keeps it square.
4. To change the grid choose **Curtain Grid** and click the system:
   - **Add a line**: an upright line goes where you click. For a level line type its height in **At** first.
   - **Move a line**: click the line, then where it goes.
   - **Remove a line**: click the line.
   - **Set by spacing**: type the spacing in **Every**, then click the system.
5. To change mullions choose **Mullion**, pick what it works on (the upright line you click, the level line at a height, the border, or every line), choose **Place mullions** or **Remove mullions** and a profile, then click the system.
6. Select a system to see all of it in **Properties**: every grid line with its place, a tick for its mullion and a button to remove it; the spacing; the border; the profile; the pane thickness.

## By Face

**By Face** makes a curtain system on a flat face you click in the 3D view. Its row has the same grid and mullion settings.

- It works on any flat face of any element the 3D view shows: a mass, a wall, a floor, a roof plane, a column, a placed item. The face can be upright, sloping or level.
- The system takes the face's outline. A gable or another odd shape cuts the panes and mullions to it.
- It can make a **wall** instead, along the foot of an upright face and as high as the face. A wall here always stands upright, so a sloping or level face cannot take one.
- It does not make a roof. A roof in BimCraft is worked out from a level's outline and a pitch, not from a single face.
- A curved face is many small flat faces: one click takes one of them.
- A face with openings in it: the system covers the face's outer outline.

## How it is measured

- **Gross area** is the system's outline.
- **Glass area** is the panes as made: each pane loses half a mullion width on a side with a grid mullion and a whole width at a border mullion.
- An upright mullion runs through from border to border. A level mullion stops at every upright mullion and at the border. Border mullions lie inside the outline; where two meet, the more upright one runs through. Joints are cut square, not mitred.
- **Schedules** has a **Curtain systems** list with these numbers once the model has one.

## In the IFC file

An IfcCurtainWall on its level, made up of one IfcPlate (curtain panel) per pane and one IfcMember (mullion) per mullion piece, each with its own shape, material and base quantities.

## Good to know

- Any size is made as you ask. Only an outline with no area is refused, because there is nothing to make.
- A system drawn like a wall keeps the height it was drawn with. If you move a level later, set its height again in Properties.
- The Move tool does not move a curtain system yet. Delete it and draw it again, or change its grid in place.
- Undo takes back each step: the whole system, one grid change, one mullion change.
