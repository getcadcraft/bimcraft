---
title: Edit in elevations and sections, sheet sizes, title blocks and renaming
summary: Move walls, doors, windows and levels and draw walls, openings, levels, dimensions and notes right in an elevation or a section, keep your own sheet sizes and title blocks as data, and rename families, sizes and elements from the project browser.
section: tasks
order: 36
keywords: new level in elevation, dimension in elevation, edit in elevation, edit in section, elevation view, section view, move wall in elevation, window sill, level height, drag level, draw wall in section, notes on elevation, annotation, sheet size, custom sheet size, paper size, title block, title block template, sheet format, border, fields, client, drawn by, revision, rename family, rename type, rename element, project browser
---

## What you'll do

Change the building where you see it from the side, set up the sheets your office uses, and give families, sizes and elements the names you want.

## Edit in an elevation or a section

1. Turn on {{ui:Draw}}. In the {{ui:Project browser}}, open {{ui:Elevations}} or {{ui:Sections}}.
2. Click the pencil button {{ui:Edit in this view}} on a row. The view opens as the sheets draw it, with what you can change on top.
3. With {{ui:Select and move}}:
   - drag a wall that faces the view along it;
   - drag a door or window along its wall, and a window up or down to change its sill;
   - drag a level's line up or down to change its height;
   - drag a note.
4. {{ui:Door}} and {{ui:Window}}: click on a wall where it goes (a window at the height you click).
5. {{ui:Wall}} (sections): click where it starts and where it ends on the section's plane; it is drawn on the level under your first click, up to the next level.
6. {{ui:Note}}: click and write. Notes are kept in the file and drawn on every sheet that shows the view.
7. {{ui:Level}}: click at the height where a new level goes. It is as tall as the gap to the level above (3000 mm at the top); drag its line to change it. A second level within 50 mm of another is refused.
8. {{ui:Dimension}}: click where it starts and where it ends. The clicks catch wall, door, window and level edges, and the dimension is horizontal or vertical, whichever way you move. It is kept in the file and drawn, with its length, on every sheet that shows the view. Click it with {{ui:Select and move}} to pick it.
9. {{ui:Delete}} or the Delete key removes the picked wall, door, window, dimension or note. Ctrl+Z undoes the last change while the panel is open. Esc goes back to {{ui:Select and move}}.

Each change is the same change the plan makes, one undo step: the plan, the 3D view and the sheets follow.

## Sheet sizes and title blocks

1. Open a sheet ({{ui:New sheet}}, or one of yours under {{ui:Sheets}}). Beside {{ui:Paper}} are {{ui:Title block}} and {{ui:Formats…}}.
2. {{ui:Paper}} lists every standard size (Letter to Arch E, A4 to A0) and your own.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, {{ui:Column (right)}} with the usual fields, or your own. The fields of the one you pick show under the sheet's name: type the client, who drew it, the revision.
4. {{ui:Formats…}} makes your own: a sheet size (name, width, height, border) and a title block (where it goes, its width, its fields one per line; end a field with * to make it large).
5. {{ui:Export}} saves them as a library file and {{ui:Import…}} adds one to another model. They are kept in the model, so a template carries them.

## Rename families, sizes and elements

1. In the {{ui:Project browser}}, open {{ui:Families}}.
2. The pencil beside a family renames it; every size's type takes the new name.
3. Open a family's sizes to rename a size, or an element placed from it (up to 40 per size are listed).

Each rename is one undo step.
