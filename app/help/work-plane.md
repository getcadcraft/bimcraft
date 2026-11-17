---
title: The work plane: set it, show it, look straight at it
summary: The work plane is the plane that model lines, model text and the Work Plane Viewer use. Set it to a level, a face, a named reference plane or a line; show it in the views; open the viewer to draw on an upright plane.
section: tasks
order: 173
keywords: work plane, set work plane, show work plane, reference plane, work plane viewer, named plane, face, level, upright plane, vertical plane, draw on a wall, elevation drawing, snap, alignment, ref plane
---

## What you'll do

Choose the plane you draw on, see where it is, and draw on a plane that stands upright.

## Steps

1. Turn **Draw** on and open the **Build** menu (in a ribbon layout: the Architecture tab, Work Plane).
2. Choose **Set Work Plane**. Then do one of these:
   - pick a level in **Set to**;
   - pick a named reference plane in the list beside it;
   - click a line in the plan: a wall, a grid line, a reference plane, a model line or a curtain system. The work plane becomes the upright plane through that line;
   - click a flat face in the 3D view. The work plane lies on that face.
3. Choose **Show Work Plane** to see it: a tinted sheet with a metre grid in the 3D view, a dashed outline or line in the plan, and a dashed outline in the elevation and section panel. Choose it again to hide it.
4. Choose **Work Plane Viewer** to look straight at the plane. The black lines are the model cut by the plane. Use its tools to draw a model line, a model text or a reference plane on the plane. **Look at it in 3D** turns the 3D view to face the plane.

## Reference planes

A reference plane is a named plane you draw as a line.

1. Choose **Reference Plane**. Type a name in its row if you want one (it is named for you otherwise) and a height.
2. Click where it starts and where it ends. In the plan this makes an upright plane. In the Work Plane Viewer it makes a plane that stands square to the work plane.
3. It shows as a dashed green line with its name in the plan, a dashed outline in the 3D view and in the elevation and section panel.
4. Select it to rename it, change its length, height and foot, or press **Use as the work plane**.

Two reference planes cannot have the same name, because the name is how you pick one.

## Good to know

- A model with no work plane set works on its lowest level.
- The work plane is saved in the file. Showing or hiding it is remembered in this browser, not in the file.
- If the work plane follows a reference plane and you move that plane, the work plane moves with it.
- On an upright work plane the Model Line and Model Text tools open the viewer, because a plan cannot point at a height.
- Drawing tools catch the ends of reference planes drawn in the plan the same way they catch other lines' ends in the viewer.

## In the IFC file

- The work plane is a property set (CadCraft_WorkPlane) on the project.
- A reference plane is an IfcAnnotation with the object type ReferencePlane and its name. Its shape is the closed outline of the plane, so another program shows where it is. Its set CadCraft_ReferencePlane holds the origin, direction, normal and extent. IFC has no class for a reference plane; an annotation is not counted as a building element and does not bound rooms.
