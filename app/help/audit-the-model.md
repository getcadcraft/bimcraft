---
title: Audit the model: rooms, tags, LOD, clashes and interfaces
summary: Run ready checks for unnamed rooms, missing tags, elements below the level of development the project stage asks for, clashes between disciplines and LOD 350 interfaces. Advice only: nothing is blocked.
section: tasks
order: 175
keywords: audit, check, unnamed room, missing tag, mark, lod, level of development, milestone, stage, clash, discipline, coordination, interface, lod 350, opening, lintel, header, penetration, sleeve, pipe, duct, problems, check report, advisory
---

## What you'll do

Look over the whole model in one go before you issue it. The audit runs ready rule sets and puts what it finds in the {{ui:Problems}} list as advice. Nothing is blocked: you fix a finding, or accept it with a reason, like any other problem.

## Steps

1. Open {{ui:Model checks}} › {{ui:Audit}} in the left panel, or {{ui:Tools}} › {{ui:Audit the model…}} (typed: `AUDIT`).
2. Choose the {{ui:Project stage}}. It is the same stage as in the drawing details.
3. Tick the rule sets to run.
4. Click {{ui:Run the audit}}.
5. Read the line for each rule set, then {{ui:Open the Problems list}}. A click on a finding picks its element.
6. {{ui:The check report}} downloads the report: every finding, who accepted what and why, and the rule sets that ran.

## The rule sets

- **Unnamed rooms**: a room with no name, or still called what the program called it ("Room 3").
- **Missing tags**: a door or window with no mark, a room with no number, an electrical device with no tag.
- **Elements below the stage's LOD**: each wall, floor, ceiling, roof, door and window whose LOD is under what the stage asks for. An element reads its type's LOD tag; a field-verified element is LOD 500. Elements with no tag are counted in one note, because they cannot be checked.
- **Clashes between disciplines**: elements of two disciplines (architecture, structure, mechanical, plumbing, electrical, by IFC class) that run into each other. A roof resting on its walls is not counted.
- **LOD 350 interfaces**: every door and window sits in an opening of its wall, the opening fits inside the wall, two openings do not overlap, an opening wider than the limit has a lintel or header (an element over it, or a note on the door or window), and a pipe, duct or cable tray that crosses a wall or slab has an opening there. Findings are counted per pair of disciplines.
- **Recognised elements nobody has checked**: walls, doors, windows and rooms read from a PDF, a scan or a drawing that are still unverified. See [Mark elements as checked or field-verified](topic:verification).

## The LOD each stage asks for

Open {{ui:The LOD each stage asks for}} to see or change the table.

:::note
The table and the lintel width are CadCraft's starting values. They are not taken from a standard: a project sets the LOD per stage in its BIM execution plan. Set them to yours. An office can set the table for everyone in Settings › Default Policies › Audit; a change in the Audit section is kept on this computer.
:::

## Good to know

- A lintel can be noted instead of modelled: pick the door or window and fill {{ui:Lintel or header note}} under {{ui:Verification}} in Properties.
- A pipe that passes through a real opening crosses no surface and is not reported. One that is modelled straight through the wall is.
- The clash check stops after a few seconds on a very large model and says so. For a full check of two chosen sets use [Find clashes between elements](topic:clash-check).
- Run the audit again after you change the model. Accepted findings stay accepted while their numbers do not change.
- It reads the model. It does not replace a coordination review by the people responsible.

## Next

- [Check a model for common problems](topic:model-checks)
- [Find clashes between elements](topic:clash-check)
- [Mark elements as checked or field-verified](topic:verification)
