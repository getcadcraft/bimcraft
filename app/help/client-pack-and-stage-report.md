---
title: Client packs, stage reports and comparing options
summary: Make a client pack or a stage report from the model, with the massing options compared on area and cost, floor areas, the drawings with their revisions and the issue history. Every figure keeps the elements behind it.
section: tasks
order: 80
keywords: client pack, presentation, stage report, report, option comparison, options, compare options, area and cost, cost per option, no rate, massing, floor areas, drawings list, issue history, figures, linked figures
---

## What you'll do

Build a client pack or a stage report from the model as it is now, and compare kept massing options side by side on area and cost.

## Steps

1. In the left panel open **Client pack and stage report**.
2. Choose **Open in Documents** beside Client pack or Stage report. The document appears in Documents from the model, where you can change its text.
3. In the preview, click a figure to select the elements behind it.
4. Choose **Build the pack**. One zip is saved: the document as a PDF, a picture of the 3D view, and `figures.csv`, which lists every figure with the GlobalIds of its elements.

## The fields

You can use these in any document.

| Field | What it prints |
|---|---|
| `{{stage}}` | The project stage from the drawing details. |
| `{{options}}` | The kept massing options, side by side: floors, height, footprint, gross floor area, envelope and cost. |
| `{{areas}}` | Floor area by level, from the rooms. |
| `{{sheets}}` | The sheets with the revision each stands at and when it was last issued. |
| `{{issues}}` | The issue history and drawing changelog. |
| `{{changes}}` | What changed since the last issue, sheet by sheet. |

## How options are costed

Cost comes only from your project's price table (Energy/Cost, 5D cost). Nothing is estimated for you.

- A price row prices an option only when its classes name `IfcBuildingElementProxy`.
- The floor area is priced by a row whose words name the option's use, such as office. Without one, a row with the words gross floor area or building mass is used. A row by m² uses the gross floor area. A row by m³ uses the volume.
- The envelope (perimeter times height) is priced by a row with the word envelope or facade.
- An option with no matching row shows **No rate**. A total is shown only when every part asked for has a rate.

## Good to know

- Keep options with **Keep as an option** in the room program's massing list. See Massing options.
- A PDF cannot select elements. Outside BimCraft, `figures.csv` carries the link from each figure to its elements.

## Not built yet

- Sheets and drawn views are not placed inside the document. The pack holds a picture of the 3D view only.
