---
title: Pipes and ducts
summary: Draw pipe and duct runs on the plan by their centre lines; the elbows, tees, reducers and transitions are made for you, the runs belong to systems with connected ports in the IFC file, and they show in plans, schedules and the takeoff.
section: tasks
order: 36
keywords: pipe, pipes, piping, plumbing, duct, ducts, ductwork, hvac, mep, mechanical, elbow, tee, reducer, transition, fitting, fittings, valve, valves, gate valve, ball valve, globe valve, check valve, riser, slope, drain, sanitary, storm, vent, cold water, hot water, chilled water, heating, gas, fire protection, supply air, return air, exhaust, system, systems, port, ports, connector, connectors, fixture, fixtures, plumbing fixture, basin, sink, toilet, water closet, lavatory, kitchen sink, shower, laundry tub, fixture units, uhc, dfu, size the drains, drain sizing, building drain, branch, ramal, coletor, airflow, cfm, friction, equal friction, sizing, schedule, takeoff, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
---

## What you'll do

Draw the pipes and ducts of a building the way you draw walls: click the corners of a run's centre line at the height you set. BimCraft makes the fittings, puts each part in its system and connects them, so other programs read the run as one connected system.

## Draw a pipe

1. Turn on {{ui:Draw}}, open {{ui:Build}} and choose {{ui:Pipe}}.
2. In the bar, pick the **system** (cold water, hot water, sanitary drain, gas…). It sets a usual material: copper for water, PVC for drains and vents, steel for heating, chilled water, gas and fire protection. Change the **material**, **class** and **size** if you need to. Sizes and walls come from public standards: steel pipe ASME B36.10M, copper tube ASTM B88, PVC ASTM D1785 and PEX ASTM F876. Brazilian projects can use **PVC water pipe (NBR 5648)**, the solvent-weld PVC for cold water, and **PVC drain pipe (NBR 5688)**, série normal or reforçada, for drains and vents: their sizes are named by DN (DN 25, DN 100). Once you pick one of them, choosing another system keeps to the Brazilian pipes (PVC drain pipe for a sanitary drain after PVC water pipe).
3. Set **At**: the height of the pipe's centre line above the level.
4. Click where the pipe starts, then each corner. Double-click, or press {{key:Enter}}, at the last point. {{key:Backspace}} takes back the last corner; {{key:Esc}} drops the run.

The pipe snaps like walls do, and to other runs: start on a pipe's end to carry on from it, or end on a pipe's line to branch off it. A new run takes the height of the pipe it snaps to.

A run started or ended on a piece of equipment's port takes its size and system and stays fixed to it: see [MEP equipment with ports](topic:mep-equipment) and [Connect pipes and ducts to equipment](topic:mep-connections).

## Set the project's plumbing standard

The first list in the pipe bar is the model's **plumbing standard**: **US (IPC, inches)** or **Brazil (ABNT, DN)**. It is saved in the model, so everyone who opens the file starts runs the same way. Under **US**, a new run starts in copper (water) or PVC Schedule 40 (drains), in inches, with the International Plumbing Code slope. Under **Brazil**, cold water starts as PVC soldável DN 25, sanitary and storm drains and vents as PVC esgoto DN 100 with the slope of NBR 8160, and hot water in copper. It also applies to a run started on a fixture's connector or an equipment port. Pipes already drawn keep their material and their own tables; the material list stays open, so you can still draw one Brazilian run in a US model on purpose. A file with no choice behaves as before: a new run follows the material in use.

## Draw a duct

1. Choose {{ui:Duct}}. Pick the system (supply, return, exhaust or outside air) and the shape: round, rectangular or flat oval.
2. Type the width and height (a round duct's width is its diameter), and **At** for the centre line's height.
3. To size it from the airflow, type the **Airflow** and the **Friction** rate and click {{ui:Size it}}. The duct is sized by equal friction, the method in the duct design chapter of the ASHRAE Handbook, and rounded up to a stocked size, so the friction comes out at or under the rate you typed. With no rate typed it uses 0.08 in. of water per 100 ft (0.8 Pa/m). A rectangular duct keeps the height you typed and gets a width; BimCraft says so when its sides are more than 4 to 1.
4. Click the corners as for a pipe.

## Plumbing fixtures

{{ui:Build}} › {{ui:Place family}} offers five fixtures to start from, each with a drain and a cold-water connector: a **Water closet**, a **Lavatory**, a **Kitchen sink**, a **Shower tray** and a **Laundry tub**. Their front faces you as you place them and their back goes against the wall. Their drains are at the smallest fixture drain of NBR 8160 (DN 100 for the water closet, DN 50 for the kitchen sink, DN 40 for the others); water is DN 20. Change their sizes, or edit them, as any family: see [Families and their sizes](topic:families).

A family says which fixture it is under {{ui:Plumbing fixture}} on the {{ui:Connectors}} tab of the family editor. Its drain is then counted in fixture units: 6 UHC for a water closet, 1 for a lavatory, 3 for a kitchen sink or a laundry tub, 2 for a shower (NBR 8160), or the drainage fixture units of IPC Table 709.1.

## From a fixture's connector

Elements placed from a family with connectors (a basin's drain and tap, an air terminal's neck: see [Edit a family](topic:family-editor)) show their free connectors as points while {{ui:Pipe}} or {{ui:Duct}} is on, and the pointer snaps to them.

- **Start on a connector**: the run takes its system and size (the pipe of the bar's material at or just above the connector's size; a round duct of its diameter). When the connector points down or up, as a drain under a basin does, the run first goes straight down or up to the height in **At**, then on along your clicks.
- **End on a connector**: the run goes down or up onto it and ends there.

The run is connected to the element in the IFC file, so other programs see the fixture as part of its system. An element placed later with a connector on the end of a run is connected to it too. A run moved away from a connector is no longer connected to it.

## The fittings, made for you

| Where | What BimCraft makes |
|---|---|
| A run turns | An elbow. Steel pipe at the long radius of ASME B16.9 (1.5 × the size), other pipe at one outside diameter, round duct at 1.5 diameters, rectangular duct at one width (or one height for a turn up or down) |
| A run ends on another run's line | A tee; the other run is split there |
| Two runs meet end to end at different sizes | A reducer (pipes) or a transition (ducts) |
| Two runs of one size meet end to end at an angle | An elbow |

When you change, move or delete a run, every fitting on that level is made again. If a leg is too short for the fittings at its ends, BimCraft says so and changes nothing: move the corner further away.

:::note
The fittings and valves are generic: drawn from the pipe or duct size, not from a maker's catalogue. Socket, press and grooved fittings, valve bodies and equipment have makers' own sizes; check them with your supplier before you order.
:::

## Risers

While drawing, type a new height in **At** and press {{key:Enter}}: the run goes straight up or down at the last corner, with an elbow at each end. A riser can go up into the level above. Each level shows the parts of a run its view range reaches, with **UP** or **DN** at the riser.

## Drains and their slope

Sanitary and storm drains start at the smallest slope the International Plumbing Code allows for their size: 1/4 in. per foot up to 2-1/2 in., 1/8 in. per foot from 3 to 6 in., 1/16 in. per foot from 8 in. Brazilian PVC drain pipe starts at the slope of NBR 8160: 2 % up to DN 75, 1 % from DN 100. Type another slope in the bar or in Properties: `1/4"/ft`, `2 %` or `1:50`. The run falls from its first point, so draw drains in the direction they flow. The plan shows the fall and an arrow. Properties warns when a drain is flatter than the code's minimum.

## Size the drains by fixture units

Pick a sanitary drain: **Fixture units** in Properties says how many it carries and the smallest size they need. Every plumbing fixture whose drain connector is on the run counts, and so does every drain that flows into it: draw drains in the direction they flow, each ending on the drain it flows into.

- Drains in Brazilian PVC drain pipe count **UHC** and follow NBR 8160; the others count **DFU** and follow the International Plumbing Code.
- **Drain**: a **Branch** is sized from the code's table for fixture branches; a **Building drain** from its table by slope, so its **Slope** matters.
- A drain is never smaller than the fixture drains it serves (a water closet needs DN 100, or 3 in.), nor than a drain flowing into it. Under NBR 8160 a building drain is DN 100 at least.

{{ui:Size the drains}} makes every sanitary drain of the model that is too small for its fixture units the size it needs, as one step you can undo. A drain drawn bigger than it needs is left as it is. When a drain carries more than the largest size of its pipe can at its slope, BimCraft says so: give it a steeper slope or another pipe.

:::note
The tables are those of horizontal drains. Stacks, vents and storm drains are not sized here: check them, and the whole design, against the code that applies to the project.
:::

## Valves

1. Choose {{ui:Valve}} and the kind: gate, ball, globe or check.
2. Click on a pipe where it goes. The pipe is cut round it and the valve is connected to both sides.

Properties of the run lists its valves, each with {{ui:Remove}}.

## Change a run

Pick any part of a run, in the plan or the 3D view. In Properties:

- **System**, **Material**, **Class** and **Size** (pipes), or **Shape**, **Width**, **Height** (ducts).
- **Height above the level** moves the whole run up or down.
- **Insulation**: its thickness, kept for the clearance check and the openings list (nothing is drawn for it): see [Check pipes and ducts against the structure](topic:mep-against-structure).
- Steel pipe: **Cut into spools**: see [Steel pipe spools and spool sheets](topic:pipe-spools).
- **Slope** (pipes).
- **Flow** with {{ui:Size it}}: for water, the smallest size that keeps the water at 8 ft/s (2.4 m/s), or 5 ft/s (1.5 m/s) for hot water; at 3 m/s for the Brazilian PVC water pipe (NBR 5626). For ducts, the velocity and friction rate of the duct as drawn. Sanitary drains are sized by their fixture units instead: see **Size the drains by fixture units** below.

Each change is one step of {{ui:Undo}}. {{key:Delete}} removes the whole run.

## Plans

- Pipes smaller than 150 mm (about 6 in.) are drawn as one line on their centre line, larger pipes and all ducts as two lines at their width.
- Each system has its own colour; the plan PDF prints them in black.
- Each run is labelled with its size and system (for example `2" CW` or `16×10 SA`).
- A plan's view range decides which runs it shows, and {{ui:Shown in this plan}} can leave out **Pipes** or **Ducts**: see [Views, view ranges and your own sheets](topic:views-and-sheets).

## Schedules and the takeoff

The {{ui:Schedules}} panel adds **Pipes** (by system, material and size, with their lengths), **Ducts** (by system, shape and size, with lengths and the outside surface area) and **Fittings and valves** (by kind and size, counted). Click a row to pick what it lists; {{ui:Download CSV}} downloads it.

{{ui:Takeoff}} takes the runs along to TakeoffCraft: pipe and duct by size as runs drawn on the plan (sloped drains measured along their slope), fittings and valves counted where they are: see [Send the model's quantities to TakeoffCraft](topic:takeoff). Risers are left out of that sheet, because a plan cannot measure them; the Pipes schedule has their length.

## In the IFC file

Each run is an assembly holding its parts: pipe and duct segments, fittings and valves, each with its type, material, a colour for its system and its ports. Touching ports are connected, and every part belongs to its distribution system (IFC2X3 files get the same as flow segments, fittings and controllers in a system). Other programs that read IFC systems see one connected run per system. The run's own definition is kept with it, so BimCraft makes it again the same way when you change it.
