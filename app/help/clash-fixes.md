---
title: Settle clashes with each discipline's fixes
summary: From the clash results, Propose fixes lists for every clash what each discipline could do about it — a duct detoured under a beam, a pipe moved aside, a column moved, an opening in a beam — each tried on a copy of the model with its trade-offs, for you to accept or reject. Accepted fixes go in as one undo step.
section: tasks
order: 31
keywords: clash, clash fix, resolve clashes, settle clashes, coordination, propose fixes, reroute, detour, offset, duct, pipe, tray, beam, column, opening, sleeve, trade-off, discipline, structure, mechanical, plumbing, electrical, architecture, assistant
---

## What you'll do

Turn a list of clashes into decisions. Each discipline (structure, mechanical, plumbing, electrical, architecture) proposes fixes for its own elements only, every proposal is checked on a copy of the model, and you choose.

## Steps

1. Run the clash check first. See [Check for clashes](topic:clash-check) and [Check pipes and ducts against the structure](topic:mep-against-structure).
2. Under the results, click {{ui:Propose fixes}}. The **Proposed fixes** panel opens beside the model.
3. For each clash you see each discipline's proposals, the best first. Each line says what it does and its trade-offs: whether it settles the clash, how many new clashes it makes, which rules it breaks, how much run it adds or how far it moves, how many fittings and a cost score.
4. Click {{ui:Show}} to see the elements in 3D. Click {{ui:Accept}} on the fix you want (one per clash), or {{ui:Reject}}.
5. The line at the bottom says what all your accepted fixes do together: how many clashes are settled, how many are left and whether anything new clashes.
6. Click {{ui:Apply accepted fixes (one undo step)}}. The clash check runs again. {{ui:Undo}} takes all of them back at once.

## What each discipline may do

- **Mechanical** (ducts, heating and cooling pipes): detour over or under on the leg that hits, raise or lower the whole run, move it to the side, make a rectangular duct flatter with the same area.
- **Plumbing** (water, drains, gas, fire): the same moves, except that a gravity drain is never given a detour; it can only move as a whole, keeping its fall.
- **Electrical** (trays and conduit): the same moves; a tray must keep 150 mm clear above it to lay cable.
- **Structure**: move a column (up to 300 mm), or an opening in a beam's web or a slab for the run that passes. Every structural fix says the structural engineer signs it off.
- **Architecture**: a sleeve in a wall for the run that passes, or move a wall that is known not to carry load.

## What you should see

- Fixes that break a rule are marked: closer than the 25 mm gap to something else, under the 2,100 mm headroom line, a web opening bigger than 40% of the beam's depth or too near its ends, a beam that would change span.
- Fixes BimCraft can make are applied to the model: runs you drew with the Pipe and Duct tools and columns you drew. The others say **Advice only**: accepting them adds an issue in the Issues tab instead.

## Good to know

- The fixes come from built-in rules in the app; no AI is used for them.
- If you connect an assistant (see [Let an AI assistant work with your model](topic:assistants)), it can read the clashes and add its own proposals for one discipline to the open panel. They are checked the same way, marked with the assistant's name, and nothing is changed until you accept and apply.
- The copy is checked with boxes round each element and each leg of a run, so a slanted run may show a clash the clash check would not. Run the clash check again after applying: it is the final word.
- The limits (how far a run may move, how high a detour may climb, the gap) are the defaults written in the panel.

## Next

- [Issues and BCF files](topic:issues-bcf)
- [Draw pipe and duct runs](topic:pipes-and-ducts)
