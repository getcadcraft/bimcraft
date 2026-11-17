---
title: Lay out, save and export a schedule
summary: Group a schedule, give it subtotals and totals, add a column read from a property, save it as a set-up in the file, and export it as a spreadsheet workbook (.xlsx), as text to paste into an online sheet, or as CSV. The office standard fills in what a schedule does not state.
section: tasks
order: 21
keywords: schedule layout, group by, subtotal, total, headings, office standard, default policies, set-up, door schedule by floor, fire rating, ironmongery, xlsx, workbook, online sheet, paste, csv, export, spreadsheet, elements, select from schedule, figure
---

## What you'll do

Turn a plain schedule into the one your office issues: grouped by level, type or room, with subtotals and a total, with the columns you need, under its own name. Then send it to a spreadsheet. Every row and every figure still knows the elements it came from.

## Steps

1. Turn {{ui:Draw}} on and open **Schedules** in the left panel. Pick a schedule, for example **Doors**.
2. Above the table, choose **Group by** (a column of the schedule, such as Level or Type, or **No grouping**) and **Totals** (**No totals**, **One total**, or **Subtotals and a total**). **As set** leaves the choice to the saved set-up or to the office standard.
3. To add a column that is read from the elements, type a property or tag name under the table (for example `FireRating`, `Pset_DoorCommon.FireRating` or the name of a tag such as `Ironmongery`) and click **Add column**. BimCraft reads the element's own property sets first, then its type's. When no element has a value yet it says so; the column fills by itself once a value is set.
4. Type a name (for example "Door schedule by floor") and click **Save as a set-up**. The set-up is kept in the building file and joins the Schedules list under its name. It follows every change of the model. **Remove this set-up** takes it out again. Both are one step in Undo.

## Click a figure to select what it came from

Click any row, or any single figure, to select the elements behind it in the plan and in 3D:

- a row selects the elements of that row;
- a subtotal or a total selects everything it adds up, a group heading its group;
- a figure with elements of its own selects those: the **Deductions** of a wall type select its doors and windows, the wall area of a room its walls.

The same works in a document made from the model: in the preview, click a figure of a schedule.

## Export

- **Download Excel** saves an .xlsx workbook. Lengths, areas, volumes and counts are real numbers in the unit the column shows (feet and inches stay text). A second sheet, **Elements**, lists for each line the GlobalIds of the elements behind it.
- **Copy for Google Sheets** puts the schedule on your clipboard as tab-separated text. In a Google Sheet, click cell A1 and paste. **Open a new Google Sheet** opens `sheets.new`, Google's own address for an empty sheet, in your own Google account. BimCraft does not sign in to Google and sends nothing there: the paste is yours.
- **Download CSV** saves the table as it is laid out on screen.

## The office standard

An office can say once how its schedules are laid out. Switch on the **Default Policies** add-on ([Default Policies](topic:default-policies)) and set, in **Settings › Global › Default Policies › Schedule layout (the office standard)**:

| Policy | What it does |
|---|---|
| Group schedules by | Level, Type, Room or no grouping, for every schedule that has such a column |
| Totals in schedules | No totals, one total at the end, or a subtotal under each group and a total |
| Schedule title | A pattern, for example `{project}: {schedule}` |
| Column headings | As written, IN CAPITALS or With Capitals |

The standard applies to every schedule, whoever sets it up: the plain schedules in the panel, a saved set-up, a schedule an assistant sets up, the exports and the schedules in a document. A set-up that states its own grouping, totals or title keeps them; the standard fills in the rest. The panel says which parts the office standard set. The policies travel in the Default Policies file with the others.

## Good to know

- A set-up names its source schedule and its columns; it holds no numbers. The numbers are read from the model each time.
- Lists that are not rows of elements (the wall assemblies and the material legend) have no layout and no export here.
- An assistant can do all of this for you: see [Let an AI assistant work with your model](topic:assistants).
