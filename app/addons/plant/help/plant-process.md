---
title: Plant: check the pipe runs against a process model
summary: Load a process model, tie the pipe runs and equipment to its lines and units, and see each line's velocity and pressure drop from the run as drawn, and what the P&ID has to change.
section: tasks
order: 40
keywords: process, flowsheet, hydraulics, velocity, pressure drop, line size, P&ID, process.json, stream
---

A drafting and study aid, not an engineering approval. No representation.

Open the **Plant** tab and the **Process model** section. Load a `process.json` (made in CadCraft's P&ID, SuperCad Studio or by the assistant), then press **Check the runs**.

- Pipe runs are tied to the model's lines by their system name (the line number), and equipment by its tag.
- Each line's velocity and pressure drop come from the run as you drew it: its length, the elbows at its corners, its valves, the height it rises and its size. A bigger pipe lowers both.
- The list says, for each line, the pipe size, velocity and drop; and anything that disagrees (a different size on the P&ID, equipment missing, a velocity over the limit) appears in the Problems panel.
- The command **Check against the process model** does the same from the command list, and **Process model (JSON)** in Export writes the model back, with the links it made.

Viscosity is an assumed default until the line gives one; the result says so.
