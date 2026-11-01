---
title: Engineering checks in the Plant panel
summary: Vessel, pipe stress, relief, consequence zones and hazardous areas in the Plant panel, and what each does with the model.
section: tasks
order: 60
keywords: pressure vessel, pipe stress, relief valve, consequence, hazardous area, zones, equipment table
---

A calculation aid, not an engineering approval. These five calculators are not engineer-reviewed: every result says so, and one engineer will review them together before any number is used for design.

Open the **Engineering checks** section of the Plant tab. Pick a calculator, change the sample input and press **Run**.

1. **Vessel.** The shell, head, flat head, nozzle reinforcement with its limits, and a drawing of the vessel. **Add the vessel to the equipment table** puts a vertical or horizontal vessel of the size you worked out into the Plant table.
2. **Pipe stress.** **Use a pipe run of the model** fills the input from the run with the most points: its points and size, and an anchor at each end. Set the temperature, the supports and, for more realistic results, `flexibility` (bends are less stiff than straight pipe) and `mu` (friction on the rests).
3. **Relief.** Gas, steam, liquid and fire areas with the orifice letter, a rupture disc in series, the outlet line and the thrust of an open discharge.
4. **Consequence** and **area.** Radiation, blast and plume zones, or hazardous-area zones from release sources. **Put the zones in the model** makes each zone a closed solid in the open model, in one undo step.

The numbers are only as good as the input and the typed constants; the Problems list says which were not confirmed against the standards.

**More calculators (round 4).** The same section also runs: **bell** (Bell-Delaware geometry of a shell-and-tube exchanger, and the rating when you give your own coefficient pack), **vessel2** (external pressure and the stiffening ring from the chart pairs you type, the vessel body outline), **pumptrip** (a pump trip with check valve and run-down, with a trend), **pipestress2** (pressure thrust, spring hanger choice from a maker's table, stop gaps), **relief2** (depressuring, control-valve failure, the load of each relief header), **blast** (multi-energy blast from your own curve pack), **heavygas** (a heavy-gas cloud with your own constants) and **packs** (a table with a clause per row becomes a threshold, reactivity or area-classification pack). A calculator that needs a table from a book says which book and stops; nothing is typed in for you.

**Fitting losses (draft table).** The *Fitting losses* calculator picks a fitting or valve from the 2-K and 3-K tables and gives K and the head loss for a Reynolds number, pipe size and velocity. The table is a draft: its numbers come from the tables of the MIT-licensed `fluids` library for the Hooper (1981) and Darby (1999) methods and have not been checked against the papers by an engineer. Put the K on a pipe link to use it in a network.

**Network fittings, compressor and pump.** The Pipe network calculator takes a `fit` list on a link (fittings from the draft table, `"fittingPack": "draft"`): the K is worked out at each step from the link's own Reynolds number and diameter and added to the typed K. The Compressor calculator gives head, shaft work, power and outlet temperature for an ideal gas with the k and Z you give (it states its assumptions); the Pump calculator gives the head from its curve and the margin of NPSH available over required.
