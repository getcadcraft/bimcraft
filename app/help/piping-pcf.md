---
title: Send pipe to a stress or isometric program, and read it back (PCF)
summary: Write the model's pipe runs as a PCF piping component file, or read a PCF file from a pipe-stress or isometric program and draw its pipe as runs.
section: tasks
order: 58
keywords: pcf, piping component file, pipe stress, isometric, isometrics, export, import, piping, plant, steel pipe, move a job, other software
---

## What you'll do

PCF is the plain-text file that pipe-stress and isometric programs read and write. It lists each pipeline's components with their end points and bores.

## Export

1. Choose the Pipe tool. The options row shows **Export PCF**.
2. Click it. Every pipe run in the model is written: straight pipe, elbows (a turn of 90 degrees, otherwise a bend), tees with their branch point, reducers and valves.
3. The file uses millimetres. Bores are nominal diameters in millimetres. An elbow's centre point is its corner, where its two legs meet.

PCF is written for steel butt-weld pipe. A run in another material is written too, with steel component keys, and noted in the Problems panel.

## Import

1. Choose the Pipe tool and click **Import PCF…**, then pick the file.
2. Straight pipe through elbows, bends, valves and flanges becomes one run on the current level. A size change starts a new run. A tee's branch becomes its own run starting at the tee centre.
3. The model lays its own fittings. Reducers and tees are not copied: they appear where runs of different sizes, or a branch, meet.

:::note
Heights in the file are read as heights above the current level. Loads, restraints and the stress analysis itself are not in a PCF file and do not come over.
:::

## Check what came over

- Total pipe length per pipeline should match the source.
- The Problems panel lists, once each, an elbow whose centre point is not the same distance from both ends, pipe with no length, and a bore that is not a standard size.

## Piping that is already in an IFC file

When an IFC file is open, **Export PCF** also writes its own pipe segments, fittings and valves, next to the runs you drew. A segment gets its ends from its ports, or from the ends of its body. A fitting with no ports is left out and the Problems panel says so. You can export from the IFC alone when the model has no drawn runs.

On import, supports, olets, flanges, gaskets and caps in the file are not drawn. The Problems panel lists how many of each were left out, so nothing disappears silently.
