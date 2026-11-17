---
title: Draw at full size, annotate by scale
summary: The building is always drawn at full size. Text, dimensions, tags, room names, grid bubbles and symbols are sized on paper, in millimetres as printed, and keep that size when a drawing's scale changes from 1:100 to 1:50.
section: tasks
order: 27
keywords: annotation scale, annotative, text size, text height, paper height, dimension text size, tag size, room name size, grid bubble, symbol size, drawing scale, 1:50, 1:100, office standard, lettering, draw at 1:1, full size, sheet text
---

## What you'll do

Set how tall the lettering of your drawings is on paper, once for the building. You never scale the model and you never resize text for a scale: BimCraft works out the size from the paper height and the drawing's scale.

## How it works

- The model is full size. A wall 10 m long is 10 000 mm long at every scale.
- An annotation has a **paper height**: the height of a capital letter on the printed sheet, in millimetres.
- At a scale of 1:100 a 2.5 mm text is 250 mm tall in the model; at 1:50 it is 125 mm. On paper it is 2.5 mm both times.
- Plan symbols (electrical, plumbing) are drawn in paper millimetres and follow the same rule.

## Steps

1. Open the project browser. Under {{ui:Sheets}} click {{ui:Annotation sizes…}}.
2. Type a height in millimetres for the kinds you want to set: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} and {{ui:Schedule text}}. An empty box keeps BimCraft's own size, shown in grey.
3. Click {{ui:Save}}. It is one step you can undo.

Every sheet, the drawing set, the plan PDF and the elevations and sections use the sizes from then on. The gap between a dimension line and its text, the size of a grid bubble and the height of a schedule row grow with their text.

## A plan with a scale of its own

Give a plan a scale in its view range ({{ui:Scale}}; see [Views and sheets](topic:views-and-sheets)). Then:

- on screen, room names, tags, dimension text and grid bubbles are drawn at their printed size against the model, so what you see is what the sheet will show;
- plan symbols and their tags are sized for that scale. Change the scale from 1:100 to 1:50 and they are half as large in the model and the same on paper.

A plan with no scale of its own keeps its fixed screen text, and its symbols are sized for 1:50 (1/4" = 1'-0" in feet and inches), as before.

## Your office's sizes

With the Default Policies add-on on, set the office's heights in Settings › Global › Default Policies › {{ui:Annotation sizes on paper}}. A new building takes them when you click Create. In a building you already started, the dialog has {{ui:Use my office's sizes}}. See [Default Policies](topic:default-policies).

## A regulation pack's sizes

A regulation pack can give the text heights its place asks for (the Building regulations add-on, drawing conventions). Tick the pack in Settings › Building regulations, then in the dialog click {{ui:Use a regulation pack's sizes}}: the boxes fill in, and you check them and save. A size a pack gives in points is a font size, and it is turned into a capital height, so check it. Nothing is set until you save.

## What you should see

- The same text height in millimetres on a sheet at 1:100 and on a sheet at 1:50, while the plan itself is twice as large at 1:50.
- The sizes travel with the building: they are saved in its IFC file.

## Good to know

- BimCraft's own sizes are the ones its sheets have always used (about 1.5 mm capitals for dimension text). They are not a drafting standard: set your office's.
- A height must be from 0.5 to 50 mm.
- Title block lettering and keynote legends are not part of this: they keep their own sizes.
