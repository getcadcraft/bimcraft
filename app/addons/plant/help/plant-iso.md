---
title: Plant: isometric drawings
summary: Save the isometric of selected pipe runs as SVG or DXF, with dimensions, elevations, valves, welds, spool balloons and a bill of materials.
section: tasks
order: 20
keywords: isometric, iso, drawing, dimension, elevation, bill of materials, bom, spool, weld, svg, dxf
---

## Make one

Select one or more pipe runs in the model, then {{ui:Export}} › **Isometric of the selected pipe runs** (SVG or DXF), or the buttons in the {{ui:Plant}} tab. {{ui:Bill of materials (CSV)}} saves the list on its own.

## What is on it

- The pipe on its centre line in the usual 30° projection: east to the right and up, north to the left and up, up stays up. The north arrow shows the plant's north.
- A dimension on every leg: its true length along the pipe, in millimetres, or feet and inches for a drawing in inches.
- The elevation at each end and where the run changes level; the run's tag.
- A weld dot at each elbow, valves as symbols turned along the pipe, a flow arrow.
- Spool balloons with the numbers BimCraft gave a steel run when it was cut into spools (Pipes and ducts › Spools); nothing is numbered twice.
- A bill of materials: pipe length by size and spec, elbows by angle, valves by kind, welds. A title block with the project, drawing number, revision, drawn by and date.

**Not to scale.** The drawing says so. It is fitted to an A3 sheet.

The DXF opens in CadCraft and other CAD programs: lines, circles, solid fills and text on layers named `ISO-PIPE`, `ISO-DIM`, `ISO-SYMBOL`, `ISO-TEXT`, `ISO-BOM` and `ISO-FRAME`.
