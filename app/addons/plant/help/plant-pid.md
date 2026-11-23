---
title: Plant: a P&ID from the 3D model
summary: Read the equipment and pipe runs of the model into one plant graph, draw P&ID sheets from it, add valves and instruments on the P&ID, and get one bill of materials.
section: tasks
order: 25
keywords: p&id, pid, piping and instrumentation, line number, valve, instrument, balloon, bill of materials, bom, connectivity, plant graph, write instruments to 3d
---

The Plant tab has a section **P&ID from the model**. It keeps one plant graph under both views: the equipment, the lines with their line numbers, the valves and the instruments. Nothing in it is copied by hand from one drawing to the other.

## Steps

1. Put your equipment in the Plant table and draw the pipe runs between its nozzles.
2. In **P&ID from the model**, choose **Read the 3D model**. Each piece of equipment, each run (with a line number such as 3"-PW-101-CS40) and each valve on a run goes into the graph. A run end that touches a nozzle is tied to that nozzle.
3. Choose **P&ID sheet 1 (SVG)**. Equipment is placed in columns by flow, lines are drawn square, valves and instrument balloons sit on their lines. A line that crosses to another sheet ends in a connector that names the line and the sheet.
4. To add a valve or an instrument on the P&ID, pick the line, the kind and **Add valve** or the letters (for example FIC) and **Add instrument**. It is listed under "3D has to follow" until the model has it.
5. Choose **Write P&ID instruments to 3D**. Each instrument is stored on its pipe run in the model, with its tag, letters and place along the run, as one change that Undo takes back. The model is read again and the instruments no longer wait. A valve you add in 3D yourself; read the 3D model again and it is adopted.
6. When a size, a valve or an instrument changes in 3D, the P&ID side lists what it has to follow.
7. **Bill of materials (CSV)** is made from the graph, so it is the same list whichever side you ask from. A row says pending while a view has not caught up.

![Step 2: Read the 3D model in the P&ID from the model section, with the totals above it and the lists of what each side has to follow below](plant-pid-2.webp)

![Step 3: the P&ID sheet 1 (SVG) button, which downloads the sheet drawn from the graph](plant-pid-3.webp)

![Part of a P&ID sheet: the tank and the pump joined by a numbered line, an FIC balloon on the line and a vessel added on the P&ID; dashed shapes are still waiting for a view](plant-pid-sheet.webp)

![Step 4: a line picked under Edit on the P&ID, the letters box and Add instrument](plant-pid-4.webp)

![Step 5: Write P&ID instruments to 3D, with the bar below the view saying the instruments are stored on the pipe run](plant-pid-5.webp)

![Step 7: the Bill of materials (CSV) button](plant-pid-7.webp)

## What to know

- Instrument balloons follow the common idea of ISA-5.1: letters over a loop number, a plain circle for a field instrument, a line across it for the main panel, a dashed line for an auxiliary location. The shapes are our own drawings.
- Instruments are stored in the 3D model on their pipe run (in the IFC file, the run's CadCraft_MepRun property set, Instruments). They are data on the run, not a solid in the view, so they show in the plant graph, the P&ID and the bill of materials. Open the file again later, or on another computer, and Read the 3D model brings them back.
- An instrument on a line that has no pipe run in the model yet stays listed for 3D until the run is drawn.
- DEXPI import and export is a separate item and is not part of this. This is a drafting aid, not an engineering approval, and it does not claim to match any plant design program.
