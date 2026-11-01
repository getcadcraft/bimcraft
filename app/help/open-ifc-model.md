---
title: Open an IFC model and look around in 3D
summary: Open an IFC file, orbit, pan and zoom, and use Fit, Top, Front and Side to get your bearings.
section: tasks
order: 10
keywords: ifc, 3d, orbit, pan, zoom, fit, top view, front view, side view, navigate, viewcube, camera
---

## What you'll do

Open an IFC model, move around it in 3D and jump to the standard views. About five minutes.

You need an `.ifc` file. Most BIM programs export one; in Revit it is **File > Export > IFC**. See [Get a project file into 3D through IFC](topic:rvt-to-ifc).

## Steps

1. Click {{ui:Choose a file}} (or the drop area at the top left).
2. Choose your `.ifc` file and confirm.
3. Wait for the status line to finish. It shows "Starting the IFC engine…" the first time, then "Reading the model…" and "Building geometry: … of … elements".
4. Look at the model: it opens in a three-quarter view, fitted to the screen.
5. Click {{ui:Top}} in the toolbar above the model to look straight down.
6. Click {{ui:Front}} to look at the front, then {{ui:Side}} to look from the side.
7. Click {{ui:Fit}}, or press {{key:F}}, to go back to the three-quarter view of the whole model.

## What you should see

- The model in the middle, with thin dark edges for a drawing-like look.
- The {{ui:File}} panel on the left: the file name, size, IFC schema (for example IFC2X3 or IFC4), project name, phase, the program it was exported from, author, export date, and element and triangle counts.
- The {{ui:Storeys}} and {{ui:Elements}} lists under it.
- The status line: "Opened *file name*: *n* elements in *s* s".

## Moving around

:::mouse
| To | Do this |
|---|---|
| Orbit | Drag with the left button |
| Pan | Drag with the right button, or hold {{key:Shift}} (or {{key:Mod}}) and drag with the left button |
| Zoom | Scroll the wheel, or drag with the middle button |
| See everything | Press {{key:F}} or click {{ui:Fit}} |
:::

:::mac mouse
On a trackpad: drag with one finger pressed to orbit; hold {{key:Shift}} or {{key:Mod}} and drag to pan; scroll with two fingers or pinch to zoom. A two-finger click is a right-click, and you can drag with it to pan, but {{key:Shift}} and drag is easier.
:::

:::touch
| To | Do this |
|---|---|
| Orbit | Drag with one finger |
| Zoom | Pinch with two fingers |
| Pan | Move two fingers together |
| See everything | Tap {{ui:Fit}} |
:::

Orbiting always turns around a point in the middle of the model. Panning moves that point, so after a long pan the orbit may feel off-center: click {{ui:Fit}} to reset it.

## Shaded, edges or wireframe

Three small buttons just above the view cube pick how the model is drawn: {{ui:Shaded}}, {{ui:Shaded with edges}} (the default) and {{ui:Wireframe}}. They are also commands (View in the menus and the Customize list), so they can have keys of your own. {{ui:Plan}}, {{ui:Split}} and {{ui:3D}} are in the {{ui:View}} row of the toolbar.

## Common mistakes

- **Expecting named views.** BimCraft has four fixed views ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), the view cube in the bottom-right corner and free orbit. It does not save views.
- **Looking for plans and sections.** There are no 2D plans or section boxes in this build. Cut the model with one {{ui:Section}} plane ([Cut an IFC model with a section plane](topic:section-plane)), or turn storeys off: [Show and hide storeys, spaces and edges](topic:storeys-and-spaces).
- **Opening a project file and expecting 3D.** A project file opens as a file card. Export IFC first.
- **Opening an `.ifczip`.** Unzip it, or export plain `.ifc`.
- **A very large model makes the tab slow or crash.** See [Browsers, devices and memory](topic:platforms).

## Next

[Pick an element and read its properties](topic:inspect-element).
