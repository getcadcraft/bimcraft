---
title: Plant: a P&ID from the 3D model
summary: Read the equipment and pipe runs of the model into one plant graph, draw P&ID sheets from it, add valves and instruments on the P&ID, and get one bill of materials.
section: tasks
order: 25
keywords: p&id, pid, piping and instrumentation, line number, valve, instrument, balloon, bill of materials, bom, connectivity, plant graph
---

The Plant tab has a section **P&ID from the model**. It keeps one plant graph under both views: the equipment, the lines with their line numbers, the valves and the instruments. Nothing in it is copied by hand from one drawing to the other.

## Steps

1. Put your equipment in the Plant table and draw the pipe runs between its nozzles.
2. In **P&ID from the model**, choose **Read the 3D model**. Each piece of equipment, each run (with a line number such as 3"-PW-101-CS40) and each valve on a run goes into the graph. A run end that touches a nozzle is tied to that nozzle.
3. Choose **P&ID sheet 1 (SVG)**. Equipment is placed in columns by flow, lines are drawn square, valves and instrument balloons sit on their lines. A line that crosses to another sheet ends in a connector that names the line and the sheet.
4. To add a valve or an instrument on the P&ID, pick the line, the kind and **Add valve** or the letters (for example FIC) and **Add instrument**. It is listed under "3D has to follow" until you have put it in the model. Read the 3D model again and it is adopted.
5. When a size or a valve changes in 3D, the P&ID side lists what it has to follow.
6. **Bill of materials (CSV)** is made from the graph, so it is the same list whichever side you ask from. A row says pending while a view has not caught up.

## What to know

- Instrument balloons follow the common idea of ISA-5.1: letters over a loop number, a plain circle for a field instrument, a line across it for the main panel, a dashed line for an auxiliary location. The shapes are our own drawings.
- The 3D model does not store instruments; they live in the graph and stay marked for 3D.
- DEXPI import and export is a separate item and is not part of this. This is a drafting aid, not an engineering approval, and it does not claim to match any plant design program.
