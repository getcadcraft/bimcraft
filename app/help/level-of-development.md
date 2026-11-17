---
title: Level of development (LOD) and milestone checks
summary: Give elements a level of development, see where it comes from, check the model against the LOD a milestone asks for, and fix missing tags and unnamed rooms. Every check advises; nothing is blocked.
section: tasks
order: 81
keywords: lod, level of development, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, milestone, milestone table, model checks, missing tags, unnamed rooms, generic early, ifc class, classification
---

## What you'll do

Say how far developed each element is, then check the whole model against what a project milestone asks for.

## Steps

1. Pick an element (or several) and open {{ui:Properties}}. Find {{ui:Level of development}}.
2. Choose a level from the list. Each level is named by what it means, and each includes the ones below it. One undo step covers the whole pick.
3. Read where the level comes from: this element, its type, or a field-verified mark.
4. To check the model, open {{ui:Model checks}} on the left, then {{ui:LOD milestones}}. Choose the milestone and the table (the starting table, or your own CSV or JSON file with {{ui:Load}}).
5. Click {{ui:Check the model}}. The totals and a line for each table row show what has reached its level and what has not; the findings also appear in the Problems list.
6. Under {{ui:Missing tags and unnamed rooms}}, click {{ui:Find them}}, edit the proposals if you like, and click {{ui:Apply}}.

## What you should see

- The level you chose on the element, with its IFC class and classification codes beside it.
- Totals and rows for the milestone. A table never changes what a level means: the scale is fixed, a table only says which level a milestone needs.
- "Staying generic early": advice to keep elements generic at an early milestone. It is advice only.

## Good to know

- Nothing here blocks you. A model below the level a milestone asks for is listed, not refused.
- The three parts of a level (geometry, information, documentation) can each be set; a mark shows met, below or not stated.
