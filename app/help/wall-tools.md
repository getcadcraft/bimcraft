---
title: Wall shapes, split, offset, stretch and lock
summary: Draw walls as a rectangle, polygon, arc, on picked lines or round an outline; split them, take a piece out, offset, box stretch, line them up and lock them to each other, to a dimension or to a grid line. Every change keeps the walls joined and is one undo step.
section: tasks
order: 17
keywords: rectangle, rotated rectangle, polygon, inscribed, circumscribed, arc, centre, center, tangent arc, pick lines, tab, trace, outline, magic wand, split, split with gap, gap, delete segment, rejoin, offset, copy, box stretch, marquee, stretch, align, lock, padlock, constraint, lock dimension, edit dimension, grid, lock to grid, move grid line, placement offset, join off, free-standing, grow from, measure from, centre line, inside face, outside face, disjoin, alt
---

## What you'll do

Make and change walls with the wall tool's recipes. Each one ends the same way as drawing a wall by its corners: the corners join by themselves, the joins are stored in the file, and the whole change is one step in **Changes** that {{ui:Undo}} takes back. The walls keep their identity: a wall you split, offset or stretch is still the same wall, with its doors, windows and dimensions.

## Draw a rectangle, polygon or arc

With {{ui:Draw}} on, open {{ui:Shapes}} in the Draw group (or pick a shape in the Wall row's **Shape** list). The Wall row shows the wall type, the drawing reference, the outside side and the top, as for the {{ui:Wall}} tool. Then click, or type the points (x,y · @dx,dy · @length<angle · a length along the pointer):

- **Rectangle**: two opposite corners. Four walls, four corner joins, one step.
- **Rotated rectangle**: where the first side starts and ends (that sets its turn and length), then a third click for the other side.
- **Polygon**: the centre, then a corner (**Inscribed**) or the middle of a side (**Circumscribed**). Set **Sides** (3 to 64) first.
- **Arc, centre**: the centre, the start (that sets the radius), the end. **Way round**: the shorter way, anticlockwise or clockwise. A sweep over three quarters of a circle is drawn as two walls.
- **Tangent arc**: click the end of a wall, then where the arc ends. The arc leaves the wall's end in the wall's own direction.

A closed shape gets its outside outward. Drawn on the **Outside face** or **Inside face**, the face you click is the face that stays put.

## Walls on lines you already have

- **Pick lines**: click a line and a wall goes on it. Press {{key:Tab}} (or hold {{key:Shift}} as you click) to take the whole chain of lines joined end to end. The lines are this view's drafting lines, the trace reference and the grid lines.
- **Trace outline**: click inside an area closed by those lines or by walls. The walls go round the smallest area around the click.

## Set before you draw: offset and join

The Wall row has two more fields, used by the {{ui:Wall}} tool and the shapes:

- **Offset**: the walls are drawn this far from the line you click: + to its left, − to its right, seen the way you draw.
- **Join**: untick it to draw free-standing walls. Their ends get **Disallow join** and stay free wherever they go (see [Change a wall](topic:change-a-wall-or-door)).

## Split, take a piece out, rejoin

Open {{ui:Walls}} in the Edit group.

- **Split**: click a wall where it should be cut, or type the distance from its start. Near a wall that crosses it, the cut snaps to where they meet. The two parts have the same type and stay joined end to end. **Gap** leaves a space of that length centred on the cut. **Free ends** gives the cut ends Disallow join instead (Settings › BimCraft › Walls › **When a wall is split** sets which one is ticked to begin with). A door or window goes with the part it stands in; a cut through one is refused.
- **Delete segment**: click where the piece starts and where it ends. A door in the piece goes with it.
- **Rejoin**: click the two parts of one wall (in line, the same type). They become one wall again, the first one you clicked, with the doors of both.

## Offset and box stretch

- **Offset**: click a wall, then the side to move it to, or type the distance. The wall moves square to itself and the walls joined to it stretch. Tick **Copy** for a parallel copy instead (it is not joined to the original).
- **Box stretch**: click two corners of a box, then a point to move from and a point to move to. Every wall end inside the box moves; a wall wholly inside moves and the walls butting into it come too; walls crossing the box stretch.

## Edit a dimension and lock it

Pick a reference dimension (Annotate › {{ui:Reference dimension}}) and type its value in **Properties**: the wall of its second reference moves square to itself, the first reference holds and the joined walls follow. Tick **Lock this dimension** to keep the value: when either wall moves later, the other one follows. A locked value can't be typed over until you untick it.

## Align and lock

**Align and lock**: click a wall face (or the centre line, near the middle of the wall) or a grid line, then the face of the wall to bring onto that line. The wall moves square onto it. Tick **Lock** first to keep them lined up: a padlock shows on the plan, and when one wall moves the other follows. **Properties** of a wall lists its **Locks**, each with **Unlock**.

## Lock walls to grid lines

Pick a wall that runs along a grid line, or whose end sits on one, and choose the grid line in **Properties** › **Lock to grid**. Then pick the grid line with the {{ui:Grid}} tool and type a distance in **Move by**: the line moves square to itself and the walls locked to it follow, with their joined walls, in one step. A wall locked to a grid line can't be moved off it by itself (move the line, or unlock the wall); a grid line turned so a locked wall can't stay square on it is refused. Renaming the line keeps the lock; deleting it removes the lock.

## Length: which side holds, and what it measures

- **Grow from** (Properties of one wall): **Start holds** (the end moves), **End holds** (the start moves) or **Centre holds** (both ends move by half). While you type the Length, the plan marks the point that holds. The wall joined at the end that moves moves square to itself and keeps its angle.
- **Measure from** (beside Dimensions on the plan, in Properties, and in Settings › BimCraft › Walls): the centre line, the inside face or the outside face. The Length field and the plan's wall dimensions read the same one, so they agree. It starts on the centre line.
- To move a wall free of its joins (they break, the wall keeps its identity), hold {{key:Alt}} while you drag its middle grip.

## Good to know

- These recipes are the wall tool specification's (pages 4 to 9); join style (butt, mitre, square off) and layer priority are not built yet: corners are mitred.
- The locks and the joins are stored in the IFC file (the locks as `CadCraft_WallHolds` on the project, the joins as `IfcRelConnectsPathElements`), so they are there when you open the file again.
- Curved walls can be split, rejoined and have a piece taken out; they are not offset or locked.
- See also [Draw walls](topic:draw-walls), [Change a wall, door or window](topic:change-a-wall-or-door) and [Shape a wall](topic:wall-shape).
