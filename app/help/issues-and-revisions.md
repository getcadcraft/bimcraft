---
title: Issues, revisions and the drawing changelog
summary: Record each set of sheets you give out, see what changed since on every sheet and element, and keep site instructions, shop drawings and linked models against the issue they belong to.
section: tasks
order: 79
keywords: issue, issued set, submitted set, submission, revision, revisions, what changed, since issue, changelog, drawing changelog, drawing register, transmittal, site instruction, shop drawing, linked model, tender, construction, snapshot, compare
---

## What you'll do

Record an issue: which sheets went out, on what date, for what purpose, each at its revision. Later, ask what changed since that issue. Keep site instructions and returned shop drawings against the issue.

## Steps

1. In the left panel open **Issues and revisions**.
2. Choose **Record an issue**. The revision is suggested (A, then B; a numbered one such as P1 counts up). Pick what it is issued for, who it goes to, the date and the sheets. When your project stage is set, the purpose follows it. When the permit package has a list of supporting documents, the sheets linked to that list are ticked for you.
3. Leave **Also save a copy of the model as issued** ticked to keep the model exactly as it went out. The copy is downloaded; its name, size and SHA-256 are kept with the issue.
4. Choose **Record this issue**. A sheet that changed since it was last issued takes the new revision. A sheet that did not change keeps the revision it has. Each sheet's title block shows its revision.
5. To see what changed, choose **Changes since** beside an issue. Each sheet reads Same or Changed, with the elements added, changed and removed on it. Click a count to select those elements.
6. Choose **Add a record** for a site instruction, a shop drawing, a markup set, a linked model or a note. Pick the issue it is against. A file you choose is recorded by its name, size and SHA-256; the file stays where it is.
7. **Drawing changelog** shows one row for each sheet and one column for each issue. **Download the changelog (CSV)** saves it with the issues and records.
8. **Save the issue history** writes a `.issues.json` file. MarkupCraft, TakeoffCraft and DetailCraft read it with **Read an issue history**.

## Good to know

- The history is kept inside the IFC file (property set `CadCraft_Issues` on the project). Other programs ignore it.
- A sheet counts as changed when its own set-up changed, or when an element it shows changed: a plan shows its level, an elevation or section the whole model, a door or window schedule its doors or windows.
- An element counts as changed when a property, its position, its size or its shape changed.
- To see exactly which property changed, open the saved copy of the issued model with **Compare versions**.
- Removing an issue keeps its records, without an issue. Each step is one Undo.
- A model with more than 60,000 elements keeps no record of each element with the issue. Sheets are still compared.

## Not built yet

- Sheets are not saved as PDFs with the issue.
- A revision cloud is not drawn on BimCraft's own sheets. Record clouds in MarkupCraft against the issue.
