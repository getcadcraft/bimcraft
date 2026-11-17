---
title: Project stages, from the brief to site instructions
summary: Start from a brief with target areas and see met or short as you draw, compare concept options against it, link specifications and details to types, review shop drawings and record site instructions against elements.
section: tasks
order: 80
keywords: brief, accommodation schedule, target area, met, short, rooms, concept options, options, massing, budget, specification, spec, detail, construction detail, type, shop drawing, review, approve, resubmit, site instruction, revision, cause, field, stage
---

## What you'll do

Work through a project's stages in one panel: write the client's brief as rooms with target areas, compare concept options against it, keep the specification and construction details with the types they belong to, review shop drawings as they come back from the trades, and record site instructions against the elements they change.

## Steps

1. In the left panel open **Project stages**, then **Brief**.
2. Paste the rooms, one a line: `Living; 1; 30` means one room of 30 m². The count can be left out. Choose **Add the rooms**. Fill in the client, site, budget, tolerance and programme, then **Save the brief**.
3. Draw walls. Each room the walls make that has the brief room's name (a number after it, such as "Bedroom 2", is ignored) is counted. The **Accommodation schedule** says **Met**, **Short**, **Over** or **Not drawn**, with the difference in m².
4. To begin a new project this way choose **Start a new project from a brief**. It opens a new model, from one of your saved templates if you pick one, and puts the brief in as its first step.
5. Open **Options against the brief**. Every massing option kept in the model is drawn on one scale with its gross area, what the brief asks for, and how many of the brief's rooms fit. **Stack the brief here** puts the rooms into the option's floors, lowest first, and says what does not fit. Cost comes only from the project's price table; with no matching row it says "No rate".
6. Open **Types, specifications and details**. Each wall, door, window and floor type shows whether it has specification text, the details linked to it, and where the specification, the schedules and the sheets disagree. **Link a detail** adds a DetailCraft or CadCraft file, an address, or a sheet of this model.
7. Open **Shop drawings**. Select the elements a shop drawing covers in the model, then **Receive it**. Use **Approve**, **As noted** or **Revise** with the reviewer's name and note. **Resubmitted** makes the next revision of the same record and keeps the review history. The state is also written on each element.
8. Open **Site instructions**. Select the elements, give the cause and what it does to cost and time in your own words, and **Record it**. After an issue has been recorded, **Explain the changes since this issue** says which changed elements an instruction covers and which changed with nothing recorded.

## Good to know

- Every step is one Undo. Nothing is refused: a brief that is not met, a type that disagrees with its text, or an overdue shop drawing is a warning or a note in Problems.
- The brief rooms are spaces without walls. They carry a target, not a drawn area, so room schedules and COBie never count them as drawn rooms.
- A layout only stacks rooms into floors by area. It draws no walls.
- The specification text is written in Documents from the model. Here it is only compared with the model's own sizes: no standard's clause is ever written for you.
- Shop drawings and site instructions are records in the same history as the Issues and revisions panel, so both panels show them.
- The state of a shop drawing is a property of each element (`CadCraft_ShopDrawing`), and a site instruction is `CadCraft_SiteInstruction`, so Find and Color by property can use them.
- Field-verified marks (Stage 7) are in Properties under Verification.
