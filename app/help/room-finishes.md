---
title: Room finishes and finish schedules
summary: Say what covers the floor, walls and ceiling of each room, add zones such as a tiled splashback, and get finish schedules by room, wall and zone with areas, tile counts including cuts and substrate volumes.
section: tasks
order: 22
keywords: finish, finishes, finish schedule, room finishes, floor finish, wall finish, ceiling finish, skirting, tile, tiles, cut tiles, tile count, waste, substrate, screed, backing board, plaster, zone, splashback, dado, wet area, interior, quantities
---

## What you'll do

Tell BimCraft once what each room is finished in. The finish schedules then give the areas, the tiles to order and the substrate volumes, and change with the model.

## Steps

1. Turn {{ui:Draw}} on, open **Schedules** in the left panel and click **Room finishes**.
2. Under **Finish types**, click **Add a finish type**. Give it a name, a kind (Tile, Sheet, Coat or Board) and a thickness. For a tile, give the tile length and width, the joint and a waste allowance in percent. If something goes under the finish (a screed, a backing board, a plaster coat), name it under **Substrate** and give its thickness.
3. Under **Rooms**, choose the floor, wall and ceiling finish of each room. Type a skirting name and its height if the room has one.
4. Under **Zones**, click **Add a zone** for a part of a room that takes another finish:
   - a **wall** zone is a band between two heights above the floor (a tiled splashback from 0 to 1200, a dado). It is on every wall of the room, or pick walls of that room in the model and click the **On** button to keep it to those;
   - a **floor** or **ceiling** zone is an area you type. It is taken out of the room's own finish.
5. Click **Save**. It is one step in Undo. Lengths are typed in the project's units.

## The schedules

Four entries join the Schedules list:

- **Finishes by room**: each room with its floor, wall and ceiling finish, their areas, and the skirting with its length.
- **Finishes by wall**: each stretch of wall on a room's side and the band of it a finish covers, with its length, gross area, deductions, net area and, for tiles, whole tiles, cut tiles and tiles to order.
- **Finishes by zone**: each zone with its finish, net area, tiles and substrate volume.
- **Finish quantities**: one row per finish: net area, whole and cut tiles, tiles to order, the substrate and its volume, and the finish's own volume.

Group, total, save and export them like any schedule: see [Lay out, save and export a schedule](topic:schedule-layouts). Click a figure to select what it came from: the deductions of a wall select its doors and windows.

## How finishes are measured

- **Walls**: each stretch of wall on the room's side, its length along the room times the height the finish covers, less the part of each door and window inside that height. A wall lower than the room is finished to its own top. The project's measurement method decides which openings are too small to deduct ([Schedules](topic:plan-schedules-and-pdf)).
- **Floors and ceilings**: the room inside its wall faces, less the islands in it.
- **Skirting**: the room's wall length less the width of its doors.
- **Tiles**: laid as a grid from one corner of the surface, with one joint between tiles. A tile wholly on the surface is a whole tile; a tile partly on it (at an edge, round an opening) is a cut tile. Tiles to order are whole plus cut, plus the waste allowance, rounded up. Every cut tile is counted as a new tile: offcuts are not reused.
- **Substrate volume**: the net area times the substrate's thickness.
- A count marked **≈** is worked out from the area instead of laid out tile by tile: a surface with a typed zone taken out of it, or a very large one.

## Good to know

- The finishes are kept in the building file (property set `CadCraft_Finishes` on the project). Each room that has a finish also gets the standard IFC property set `Pset_SpaceCoveringRequirements`, so other programs read the names.
- The tile layout starts at a corner. A layout centred on the room, a pattern (herringbone, brick bond) and reuse of offcuts are not worked out.
- A curved wall, and a room boundary that is not a wall (a room separator), is listed as **Other boundary** with its length and no openings.
- The **Finishes** entry that was there before lists the finish layers of the wall types; **Layers: area and volume** lists every layer of every layered type. The room finishes here are what is applied to the room on top of those.
- An assistant can set finishes for you with `finishes_set`: see [Let an AI assistant work with your model](topic:assistants).
