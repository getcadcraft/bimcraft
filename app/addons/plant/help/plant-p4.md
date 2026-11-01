---
title: Plant: place the plant with its pipes, batch schedule in 4D, live values
summary: Put the process model's layout in the model with its pipes, show a batch recipe in the 4D panel, and tint equipment by plant readings.
section: tasks
order: 65
keywords: process layout, place, nozzle, pipes, batch, recipe, 4d, schedule, live, readings, historian, tint
---

A drafting and study aid, not an engineering approval. No representation.

Open the **Plant** tab and the section **Plant with pipes, batch schedule, live values**.

## The plant and its pipes

With a process model that has a layout loaded (Process model section), pick a pipe system and press **Place the plant and its pipes**. The equipment goes into the equipment table and into the open model, then every run of the layout is routed from the first free outlet nozzle of one item to the first free inlet nozzle of the next, round the equipment, and drawn as a pipe run. One undo step each. A run is left out, and the panel says why, when an end is not in the model, has no free nozzle, or the two ends are on different storeys, or no route was found.

## A batch recipe in 4D

The recipe is JSON (steps with a duration and the class of equipment, and the equipment with its size). **Show the batch schedule in 4D** sends it to the 4D tab as tasks: one per step and batch, linked finish-to-start, each on its equipment, found in the model by its Tag. Open the 4D tab first.

## Live values

Paste readings as CSV with the header `tag,time,value,quality` and press **Show the values**: the equipment whose Tag matches is tinted in the 3D view by its state (green ok, red high or bad, blue low, grey stale). **Clear the tint** takes it off. Read only: nothing here controls equipment, and nothing here is an alarm system.
