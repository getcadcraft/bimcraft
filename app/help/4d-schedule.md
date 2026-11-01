---
title: Play a construction schedule on the model
summary: Open a task list as a CSV, link each task to elements by a property, and move through the dates to see what is built, in progress and not started yet.
section: tasks
order: 36
keywords: 4d, schedule, construction sequence, timeline, phasing, programme, gantt, tasks, dates, simulation, progress, built, csv, stage, phase, work package, wbs, group
---

## What you'll do

Watch the building go up: each task in your schedule linked to the elements it builds, shown day by day.

## Steps

1. Open an IFC model and open {{ui:4D schedule}} in the left panel.
2. Click {{ui:Download a template}} for a task list with a week per storey, and change it in a spreadsheet. Or write your own.
3. Click {{ui:Open a task list…}} and choose the CSV.
4. Drag the date slider, or click {{ui:Play}}.

## The task list

A CSV with a header row and the columns **Task**, **Start**, **Finish**, **Field** and **Value**. Commas or semicolons both work.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Write dates as YYYY-MM-DD.
- A row links the task to every element whose **Field** has exactly that **Value**. The field is a property such as Storey, Class, Name, Type, Material, Tag or GlobalId, or any property written as its set and name: `Pset_WallCommon.FireRating`.
- Repeat a task on more rows, with the same dates, to link more elements to it.

## Stages and work packages

Add a **Stage** column, a **Package** column, or both, to gather tasks into stages and work packages. Phase and WBS work as column names too.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- A task belongs to one stage and one package. If a later row of the same task names another, that row is listed with its line number and left out.
- The same package name in two stages is two packages.

When the list has groups, a {{ui:Show}} list appears above the date. Choose a stage or a package and it plays as one:

- the slider and {{ui:Play}} run from the group's first start to its last finish,
- only the group's tasks are listed and painted, and everything outside the group is see-through,
- the line under the list says how many of its tasks are done, under way and to come on that date,
- {{ui:Select its elements}} selects every element of the group, for {{ui:Show}}, {{ui:Section}} or a schedule.

Choose **Every task** to see the whole schedule again.

## What you should see

- **Built**: elements whose tasks are all finished, in their own colors.
- **In progress**: elements with a task under way that day, in ochre. A task is under way from its start date through its finish date.
- **Not started**: see-through.
- Elements in no task stay as they are. The list shows how many elements each task found. Rows that could not be read, or found nothing, are listed with their line numbers.

## Links, the Gantt chart and MS Project

- Open a Microsoft Project XML file (`.xml`) or a CSV that has a `Predecessors` column. Links can be finish to start, start to start, finish to finish or start to finish, each with a lead or lag in days.
- Under the task list, the Gantt chart draws every task as a bar with arrows for the links. Tasks on the critical path are red. A link loop or a predecessor that does not exist is listed in the panel.
- {{ui:Save as MS Project XML}} and {{ui:Save CSV with links}} write the schedule back with its links.

## Next

- [Find elements by class, name or property](topic:find)
- [Color elements by a property](topic:color-by-property)
