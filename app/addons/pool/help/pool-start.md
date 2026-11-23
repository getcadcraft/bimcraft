---
title: Pool generator: getting started
summary: Make a swimming pool or a fountain from its length, width and depth: the concrete shell, steps, tiles, coping and paving, the filter, pump, pipes and a machine room, with quantities and an IFC file. A drawing aid, not a design.
section: start
order: 1
keywords: pool, swimming pool, fountain, L-shaped pool, round pool, freeform pool, benches, gate, rebar, bar schedule, feet and inches, report binder, concrete shell, tiles, paving, coping, filter, pump, pipes, machine room, plant room, skimmer, overflow, turnover, IFC, quantities, add-on
---

## What you'll do

1. Switch the add-on on in {{ui:Settings}} › {{ui:Add-ons}}, then open the **Pool generator** tab.
2. Under **Shape**, pick the **Units** (metric, or US feet and inches) and the **Shape** (rectangle, L-shaped, round or oval, or freeform from your own corners), then type the length (A), the width (B) and the water depth at the shallow and the deep end. Choose a swimming pool or a fountain, outdoors or indoors, private or public, and skimmers or an overflow channel all round.
3. Read the **Result**: the plan and the long section, the water volume, the circulation flow, the filter, pump and pipe sizes, and the quantities (concrete, formwork, steel, tiles, coping, paving, pipes).
4. Press **Save as an IFC file** for the 3D model, or **Save quantities (CSV)** for the figures.

## Shapes, steps, benches and the gate

- **L-shaped** cuts a rectangle of the cut-out length and width from the deep end's far corner. **Round or oval** fits an oval in the length and width (a circle when they are equal). **Freeform** takes your corners, one pair per corner: `0,0; 9000,0; 9000,3000; 5000,5000; 0,4000` (feet and inches work in US units: `30',0`). The floor always falls in one slope from the shallow end (the smallest x) to the deep end.
- The sides are numbered on the plan. **Steps on side** puts the entry steps on that side (0 keeps them at the shallow end); **Middle of the steps along the side** moves them along it.
- **Benches** are one line each: side, where it starts along the side, and its length. The seat is the depth you set under the water.
- With a **barrier** height, a **gate** of the width you set leaves an opening in the barrier on the side you pick. Self-closing and latching hardware is the local rule's: check it.

## Reinforcement as bars

Pick **Bars** under **Reinforcement** for a bar layout and a bar schedule: one layer each way in the walls and the floor, spaced from the steel ratio and your bar diameter, never wider than the largest spacing (the spec's when it has one). The lap, the floor leg and the 12 m stock length are starting figures, not from a standard. It is a schedule to estimate from, not a reinforcement design.

## Pipes and the report binder

The pipes in the IFC file are one connected network: straight lengths, bends and junctions, with ports on every pipe, fitting, skimmer, inlet, drain, pump and filter, and each pair that meets connected. **Calculation page (.md)** saves the pool as one page; in SuperCad Studio the same page goes into the project's report binder under Calculations while the Pool generator tab is open.

## Where the figures come from

Thicknesses, cover, steel, turnover time, filter rate, pipe velocities and skimmer spacing are set by norms. The generator holds **no norm values**. Leave those boxes empty and each one is filled:

- from the **spec** you picked, when a spec add-on is switched on and has a value for it, or
- from a **starting figure**, which is a round number so that something is drawn. A starting figure is not from any standard, and the box says so.

Type your own figure in a box to overrule either. The result then says when your figure breaks the spec.

## Specs are side add-ons

Add **Pool spec: Europe** or **Pool spec: United States** in {{ui:Settings}} › {{ui:Add-ons}}, then pick it under **Spec**. The table under the picker lists every rule in the spec with its standard, its clause and how we read it: in the standard itself, in a document that quotes the standard, or not at all. Check each value against your own copy of the standard and its national annex before you rely on it.

## What it does not do

It does not design the pool. Nothing is checked for strength, ground water, uplift, cracking, entrapment or electrical safety. The steel is an estimate from a ratio, or a simple bar schedule if you ask for bars, never a reinforcement design. The machine room pipes are laid out square by fixed offsets and not checked for clashes, and valves are not drawn. The pump head is your own figure unless you choose "Calculated from the routed pipes": then it is the friction in the routed pipes (Hazen-Williams), the bends and your filter-and-valves figure. The roughness, bend factor and equipment loss are starting figures, not from a standard, and the height of the pump above the water, a dirty filter and valve throttling are not counted. Filter, motor and pipe sizes are generic size steps, not a maker's catalogue. A licensed engineer must design and check the pool.
