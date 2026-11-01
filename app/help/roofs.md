---
title: Roofs: a pitch for each wall, gables, sheds and roof planes
summary: Set each wall under a roof to pitched, gable end or none, use the hip, gable and shed presets, lift the roof with the plate height, add fascia and soffit, and draw single roof planes where the automatic roof doesn't fit.
section: tasks
order: 20
keywords: change a roof, edit a roof, selected roof, roof properties, undo roof, roof, pitch, per wall, gable, gable end, shed, lean-to, hip, valley, ridge, plate height, heel, fascia, soffit, eave, rake, overhang, roof plane, porch roof, dormer, gable dormer, shed dormer
---

## What you'll do

Shape the roof from the walls under it. Every wall gets its own setting, so one roof can be hipped at the front, gabled at the ends and stop flat against a taller wall at the back. For a porch or any face the automatic roof can't make, draw a roof plane by its corners.

## Put a roof on

1. On the level whose walls carry the roof, click {{ui:Roof}}.
2. Type the **Pitch** (`6/12`, or degrees such as `30`) and the **Overhang**.
3. Choose a preset: **Hip roof**, **Gables on the short sides**, **Gables on the long sides**, or **Shed** (the side nearest the pointer is the low eave; the other sides are gable ends).
4. Leave **Fascia and soffit** ticked for boxed eaves with a fascia board, or untick it for a bare roof edge.
5. Point inside the building: the eave, the ridge, the hips and the valleys show on the plan. Click.

Any outline works: L, T, U and plus shapes, angled corners and notches. Hips, ridges and valleys are found where the roof planes meet.

## One wall at a time

Pick the roof (on the level above the walls, click inside its outline) and look under **Each wall** in **Properties**. Pointing at a row marks that wall on the plan.

- **Pitched**: the wall has a sloping roof plane over it. Type its own pitch beside it, for example `12/12` for steep ends on a `6/12` roof.
- **Gable end**: the roof stops in a vertical end over that wall, the wall is filled up to the roof, and the roof runs past it by the **Gable overhang**.
- **None (stops flush)**: the roof stops at that wall with no overhang and no gable wall, for a roof against a taller wall.

The **Ends** list at the top sets every wall at once; **Set per wall** shows when the walls no longer match a preset.

## Change a roof you already put on

Pick the roof and **Properties** shows the same settings the Roof tool has: **Pitch**, **Overhang**, **Gable overhang**, **Plate height**, **Fascia height**, **Boxed eaves** and **Thickness**. Each change shows at once in the plan and in 3D, with the same checks as the tool (a pitch of 80 degrees or more is refused, and so is a setting that cannot make a roof). Type a value and press {{key:Enter}}, or leave the box.

Each change is one undo step. Several changes to the same box one after another (type `6/12`, then `7/12`, then `8/12`) join into one step, so one {{key:Ctrl}}+{{key:Z}} puts back what the roof had before the series; changing a different box starts a new step.

## Plate height, fascia and soffit

- **Plate height** is where the roof planes meet the outside of the walls, measured from the level's floor. Leave it blank to sit the roof on the top of the walls; type a larger value for a raised heel.
- **Fascia height** is the board along the eaves and up the rakes. Type `0` for none.
- **Boxed eaves** puts a level soffit under each eave, from the wall to the back of the fascia.

Every plane meets its wall at the plate height, so walls with different pitches keep one plate line and their eaves end at different heights, as they would be framed.

## Draw a roof plane

1. On the level whose walls the plane sits on, open {{ui:Build}} and choose {{ui:Roof plane}}.
2. Type the **Pitch** and, if it isn't the top of the walls, the **Eave height**.
3. Click the corners. The first side you draw is the eave; the plane rises from it towards the rest of the shape.
4. Click the first corner again, double-click, or press {{key:Enter}} to finish. {{key:Esc}} drops the corners.

A roof plane doesn't follow the walls. Pick it on the level above (click inside it) to change its pitch, eave height or thickness, or press {{key:Delete}} to remove it.

## Add a dormer

1. Show the level the roof is on.
2. Open {{ui:Build}} and choose {{ui:Dormer}}.
3. In the options row choose **Dormer kind** (**Gable** or **Shed**) and set **Width**, **Front wall** (the height of the front wall from the roof's top to the dormer's eave), **Pitch** and **Overhang**.
4. Click on a roof face where the middle of the dormer's front goes.

BimCraft builds the front wall, two cheek walls and the dormer's roof, and runs it back until it meets the roof. A gable dormer has two planes that meet at a ridge. A shed dormer has one plane, which must be less steep than the roof. The roof below the dormer is cut away. The dormer follows the roof when the walls move.

Pick it to change its kind, width, front wall, pitch or overhang in **Properties**. {{key:Delete}} removes it and closes the roof again. It must fit on one roof face, away from hips, valleys and the ridge, and only roofs made with the {{ui:Roof}} tool take dormers, not roof planes drawn by hand. Not built yet: a window in the dormer's front, and dormers on hand-drawn roof planes.

## What's saved

Roofs are IFC roofs made of one roof slab per plane, gable walls, one fascia member and one soffit covering. The roof carries its ridge, hip, valley, eave and rake lengths, and its areas, for takeoffs. A roof plane is an IFC roof with one slab.

:::tip
Undo takes back any roof change in one step, including a preset that changes every wall.
:::
