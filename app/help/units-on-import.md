---
title: Units on import: a file states its units, or you are asked first
summary: When a file you bring in states its units, BimCraft uses them and says so. When it does not, BimCraft asks before placing anything and remembers your answer for that file.
section: tasks
order: 36
keywords: units, import, open, OBJ, STL, DWG, DXF, IFC, point cloud, library item, millimeters, meters, inches, feet, scale, wrong size, too big, too small, 1000 times, ask, remembered
---

## What you'll do

Bring in a file and be sure it comes in at the right size.

## Steps

1. Open or add the file as usual: {{ui:Open}}, the Library's {{ui:Files}}, {{ui:Point clouds}}, or Build › From a drawing.
2. If the file states its units, nothing is asked. The status line says which units the file states.
3. If it does not, a dialog asks **Units of** the file. Choose what one unit in the file is and click {{ui:Use these units}}. Nothing is placed before you answer.
4. {{ui:Cancel}} (or {{key:Esc}}) brings nothing in.

## Which files state their units

- **IFC**: states its length unit, and "Opened" says which. An IFC that states none is asked about before it opens; your answer is written into the model, so the file states it once you save.
- **DWG and DXF**: the drawing's insertion units. A drawing without them is asked about (Library files, Build › From a drawing, terrain from contours).
- **Lists of points** for terrain: state no units. You are asked.
- **Point clouds**: LAS and LAZ with a coordinate system, E57, PTX and PLY state theirs. Others are asked about.
- **OBJ and STL**: never state units. You are asked.
- **glTF and GLB**: meters, by the format's own rule.
- **Pictures**: have no size of their own. A picture is fitted to the view and you set its size with Scale by two points. The size you give is remembered for that file: placed again, it comes in at that size and the status line says so.
- **The Point clouds add-on**: asks when you build a cloud whose file states no unit, and labels the cloud's numbers in the unit it carries.

## Good to know

- The answer is remembered for that file (its name, size and date) on this computer, in every CadCraft app. The next time the same file comes in you are not asked, and the status line says the remembered units were used.
- To be asked again: the command palette ({{key:Mod+K}}) › **Ask again for the units of imported files**.
- A units list that an import already has (the Library's Units, the cloud bar's Units, Drawing units in From a drawing) still changes the units afterwards. The terrain tool's Units list is now only what the question starts on.
