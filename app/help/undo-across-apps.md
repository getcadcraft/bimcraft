---
title: Undo across apps in CadCraft Studio
summary: Inside Studio, BimCraft tells Studio each finished step, so Studio can undo your last step in whichever window you worked in last.
section: tasks
order: 153
keywords: undo, studio, across apps, project undo, history, journal, window
---

## What it does

In CadCraft Studio, each app window tells Studio when a step is finished (a wall drawn, a set of walls accepted from a scan). Studio keeps those steps in the order you worked and can ask the window that made the latest one to undo it, using that window's own undo. Ctrl+Z inside BimCraft stays BimCraft's own and is told to Studio too.

## What to know

- Studio only asks a window to undo when its undo list is exactly as the step left it. After Save (which starts a fresh change list) or after you switch the model you edit, BimCraft answers that the list moved and Studio skips this window. Nothing is forced.
- Undoing the effects of one app in another is not built.
- Outside Studio nothing changes.
- The Studio menu item that asks for the undo comes with a Studio build; until then the steps are reported but no menu item uses them.

## Next

- [Work live with others](topic:work-live)
