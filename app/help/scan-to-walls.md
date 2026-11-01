---
title: Walls and doors from a phone or laser scan
summary: Turn a scan of a room into proposed walls, doors and rooms that you accept one by one.
section: tasks
order: 29
keywords: scan, phone scan, lidar, point cloud, walls from scan, doors from scan, room scan, ply, e57, las, obj, suggest
---

## What it does

With a scan open (a point cloud such as PLY, E57 or LAS, or a mesh such as OBJ), BimCraft cuts the scan at the plan height, turns it square to the building, and looks for long, thin runs of points: those are walls. A gap about the width of a door between two runs on one line becomes one wall with a door in it. The walls that close a space make a room.

Nothing is drawn until you accept it. The walls and doors come as a list of proposals (they are Suggest-mode changes): keep the ones that are right, reject the others, and everything you keep is drawn in one undo step. The rooms appear by themselves.

## What it checks

Walls that do not close, wall runs shorter than a wall is thick, and a door-sized gap with no wall around it are reported as Problems with a position, so you can look at the scan there.

## What it cannot do

- It finds walls that run in two perpendicular directions. A diagonal or curved wall is not found.
- One storey at a time. Windows are not found (a window is only a gap when the cut is at sill height).
- It has been tried on generated room scans and meshes, not yet on scans from a real phone. How well it does on a real scan (drift over a long walk, furniture against walls, glass, open doors) is not known, and tuning it on real scans is the next step. Check every proposal against the scan before you accept it.
