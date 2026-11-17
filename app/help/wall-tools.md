---
title: Wall shapes, split, offset, stretch and lock
summary: Draw walls as a rectangle, polygon, arc, on picked lines or round an outline; split them, take a piece out, offset, box stretch, line them up and lock them to each other, to a dimension or to a grid line. Every change keeps the walls joined and is one undo step.
section: tasks
order: 17
keywords: swap type, change type, retype, what moved, lod, level of development, join style, mitre, miter, butt, square off, wall joins, next, runs through, disallow join, allow join, layer priority, core, priority, junction, rectangle, rotated rectangle, polygon, inscribed, circumscribed, arc, centre, center, tangent arc, pick lines, tab, trace, outline, magic wand, split, split with gap, gap, delete segment, rejoin, offset, copy, box stretch, marquee, stretch, align, lock, padlock, constraint, lock dimension, edit dimension, grid, lock to grid, move grid line, placement offset, join off, free-standing, grow from, measure from, centre line, inside face, outside face, disjoin, alt
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

## Join style, Disallow join, layer priority

Open {{ui:Walls}} in the Edit group.

- **Join style**: click a corner where two straight walls end. Each click goes to the next style: **Mitre** (both ends cut on the line from the inner to the outer corner, what every corner starts as), **Butt** (one wall runs through to the outer face of the other, which stops against its side) and **Square off** (as butt, and the wall that runs through ends square; at a right angle it looks like butt). **Next**, or {{key:Tab}}, makes the other wall the one that runs through. The **Style** list in the bar shows the corner you clicked last. The same two choices are in **Properties** of one wall: **Join style at start / at end** and **Runs through**. Each change is one step in **Changes**. The plan, the 3D body, the rooms and the quantities follow.
- At a T the wall whose side is met always runs through. Where two walls cross, a click (or **Continuous where it crosses** in Properties) says which of the two is continuous; that decides which wall's layers are drawn through the crossing.
- The style belongs to the join: it stays when the walls move and goes only when the join goes (the wall is deleted, split at that end, or the end gets Disallow join). A corner with a curved wall, or where three or more walls meet, keeps the mitre. A corner sharper than about 30 degrees, or flatter than about 150, also falls back to the mitre.
- **Disallow join**: click near a wall end. That end is freed: it joins nothing, wherever the wall goes, until you click it again. Free ends are marked with a cross while the tool is on. The same switch is **Join at start / Join at end** in Properties.
- **Layer priority**: where walls with layers meet, the stronger layer cuts the weaker, so cores join to cores and a finish stops against the stronger layer. Each layer has a priority from 0 to 999; by default it comes from the layer's function (structure 800, substrate 600, insulation 400, membrane 300, finish 200, a cavity 100). {{ui:Layer priority}} opens the wall assembly, where the **Priority** column sets a layer's own number. Layers of equal priority stop against each other, and a line is drawn only between different materials. You see it on plans with **Medium** or **Fine** detail, at corners, T joins and crossings of two straight walls; Settings › BimCraft › Walls › **Clean wall layers where walls meet** switches it off. It changes what is drawn inside the walls only: the walls' outlines and quantities stay as the join style gives them.

## Swap the type of many walls

Going from sketch plans to working drawings is mostly a change of type: a generic wall becomes the specific build-up. You do not redraw anything.

1. Pick the walls (one, or many with {{key:Ctrl}} or {{key:Shift}}).
2. In Properties, press **Swap type…** under Wall type (or open {{ui:Walls}} in the Edit group and choose {{ui:Swap type}}, which opens the same list). The list opens inside Properties, in the picked walls' own block. It is not a dialog and it covers nothing: the plan, the 3D view and the pick keep working while it is open, and it follows the walls you pick.
3. The list shows every wall type with its thickness and its LOD tag, for example "Wall 230 generic, LOD 200" and "230 clay brick, plastered both sides, LOD 300". The types the picked walls have now are marked. Type in **Find** to narrow it: a name, a thickness, or `lod 300`.
4. Click a type. Every picked wall changes to it in one step, so one {{ui:Undo}} takes the whole swap back. The small x closes the list.

Each wall keeps its location line. A wall on its centre line grows to both sides; a wall whose location line is a face keeps that face and grows the other way, and the walls joined to it follow at the corners. Walls locked to a swapped wall follow it too. Doors and windows stay in their walls and are cut again for the new thickness.

After the swap the list shows **What moved**: how many walls changed and to what, the thickness and LOD before and after, the walls that moved sideways to keep their location line, the joined walls that followed, the doors and windows hosted again, and each room whose area changed with its area before and after. The status bar says the same in one line. The report only tells you; it never stops a swap. Choosing a type in **Properties › Wall type** does the same swap and gives the same report.

Two things do stop a swap, and then nothing is changed at all: a door or window that would no longer fit in its wall (a wall gets shorter where a corner follows; make the door narrower or move it away from the corner first), and a lock the swap would break (a wall locked to a grid line by its centre line while its location line is a face; unlock it or put its location line back on the centre line).

An assistant connected to BimCraft can do the same swap (tools `wall_types_list` and `walls_swap_type`) and gets the same report back.

The LOD tag of a type is set in the wall assembly editor: see [Wall assemblies](topic:wall-assemblies).

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

- These recipes are the wall tool specification's (pages 4 to 9). Join style and layer priority are built for straight walls; layer priority shows on the plan only (not in sections, elevations or 3D, where a wall is one body), not at nodes of three walls or more, and membranes are not carried on.
- A join's style is stored in its record in the IFC file (the name of the `IfcRelConnectsPathElements`, for example `CadCraft join L butt 1`), so other programs still read the join and an older file opens with mitres.
- The locks and the joins are stored in the IFC file (the locks as `CadCraft_WallHolds` on the project, the joins as `IfcRelConnectsPathElements`), so they are there when you open the file again.
- Curved walls can be split, rejoined and have a piece taken out; they are not offset or locked.
- See also [Draw walls](topic:draw-walls), [Change a wall, door or window](topic:change-a-wall-or-door) and [Shape a wall](topic:wall-shape).
