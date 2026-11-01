---
title: See what wears out over fifty years
summary: The windows, doors, finishes and roof the model holds, their service lives, the years each is replaced, and the cost by year and its present value when you type a cost per unit.
section: tasks
order: 63
keywords: life cycle, lifecycle, service life, replacement, maintenance, cost, present value, discount, inflation, 50 years, windows, paint, roof, finishes, whole life
---

The {{ui:Life-cycle view}} section of the left panel lists what the model holds that wears out and when it is replaced over the study period (50 years to begin with). Nothing in the model is changed.

## Read it

Each part shows its quantity (measured from the model: window area, outside and inside doors, outside-wall finish, interior paint, floor and ceiling finish, the roof's footprint, stairs), a **life in years** and a **cost per unit**. A part is replaced at its life, twice its life and so on while that is before the end of the study, so a 30-year window in a 50-year study is replaced once, at year 30. The service lives are typical planning figures: change them to your products and climate. No cost is assumed; type one to see the money by year, the total and its present value. Add a discount rate and an inflation rate if you want them.

{{ui:Save the schedule (CSV)}} writes the components and the years. Pipes, ducts, wiring and equipment are listed too (see below).

## Pipes, ducts, wiring and equipment

- **Pipes and ducts** are the metres of every drawn run. **Equipment** (pumps, fans, valves, terminals, fixtures, outlets, switches, boards and the other things the Assets tab tracks) is counted by kind, each kind with a planning life. An item whose own *service life* is set in the Assets tab is its own line with that life, and if it has an install date it starts at its age: a pump that is 16 years old with a 10-year life is due now, then every ten years.
- **Wiring** is an **estimate**: the plan distance from the board along the devices of each circuit, nearest first, times 1.25 for the routing. The model draws no cable, so check it against your own take-off.
- Lives are planning figures to review, not a source.

## Carbon per replacement

Tick {{ui:Include the embodied carbon of each replacement}}. A new window, door, stair, roof, pipe or piece of equipment is counted at the carbon the model's own elements of that kind carry (the Carbon tab's factors, per unit). A part with no element or factor, such as paint, finishes and wiring, shows a dash and is listed. The old part's end of life and the work of replacing it are not counted.
