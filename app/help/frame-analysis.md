---
title: Analyse the structural frame
summary: Forces, reactions and deflections of the model's beams, columns and braces under load cases and combinations you set, kept in the IFC. An analysis aid, not a code check.
section: tasks
order: 60
keywords: analysis, units, feet and inches, display unit, structural analysis, design checks, utilisation, rolled, welded, AISC 360, EN 1993-1-1, frame analysis, analytical model, stiffness method, loads, load case, combination, dead load, live load, self weight, own weight, reactions, bending moment, shear, axial force, deflection, deflected shape, supports, pinned, fixed, release, report, pdf, csv, craftscript, frame3d, beams, columns, members
---

The {{ui:Analysis}} tab on the right finds the forces in the open model's beams, columns and braces, the reactions at the column feet and how far the members bend, for the loads you give it.

:::warning
It is an **analysis aid, not a code check**. The analysis applies no design code: it does not size members or check capacities, and it does not pick load factors. An engineer checks the analytical model, its loads and supports, and decides what the numbers mean. The {{ui:Design checks}} block below it checks rolled steel I-shapes to AISC 360 or EN 1993-1-1, an aid until an engineer has reviewed it: see [Design checks](topic:frame-analysis#design-checks).
:::

## Run it

1. Open an IFC model and the {{ui:Analysis}} tab.
2. Pick one or more beams, columns or braces in the view, choose a {{ui:Case}}, a {{ui:Load}} and a {{ui:Direction}}, type the value and press {{ui:Add load}}: kN/m for a load spread along a member, kN for a point load.
3. Press {{ui:Run analysis}}.

The table lists each member's largest axial force, shears, bending moments, torsion and deflection; click a member's name to pick it in the view. Below are the reactions. {{ui:On the model}} draws the deflected shape, or one action as a diagram beside each member. The results go out of date when the model changes: run it again.

Each load and setting is one change in the {{ui:Changes}} list: {{ui:Undo}} takes it back, and {{ui:Save as IFC}} keeps them in the file (the project's `CadCraft_Analysis` property set), so the next time the model opens here its loads are still there.

## How the analytical model is made

- Every IfcBeam, IfcColumn and IfcMember whose shape is one straight extrusion becomes a member on its section's centroid line. Its section properties come from the profile: I, U, L and T shapes, rectangles and tubes, circles and round tubes, or any closed outline (then the torsion constant is an estimate, said in the report). Anything else is left out and counted.
- In a model, beams stop at a column's face and sit below the floor. Each member end is carried along its own line onto the axis of the member it frames into, when that axis is close (within about the size of the sections), and that member is split there. The report says how many ends moved.
- **Column feet** nothing goes below are supports: fixed (the start) or pinned (held in place and against twisting, free to turn).
- **Beam ends** are rigid or pinned by the {{ui:Beam ends with no connection}} rule; **braces** (IfcMember) are pinned at both ends. Pick one member to give its ends, or a column's foot, a rule of their own.
- Materials by name: concrete (E = 30 GPa), timber (E = 11 GPa), otherwise steel (E = 200 GPa).

If the frame can move without bending anything — a mechanism — the run stops and says where and which way.

## Cases, combinations, signs and the report

The analysis starts with **Dead** (own weight), **Live** and **Dead + live**; add cases and combinations with the factors your design code asks for. N > 0 is tension; My > 0 puts the member's local −z side in tension (a beam sagging under gravity has My > 0). {{ui:Report (PDF)}} and {{ui:Report (CSV)}} hold the assumptions, sections, cases, reactions with their sums, member forces, displacements and an envelope. {{ui:Export as CraftScript}} writes the frame for PartCraft's Script workspace, where the library function `frame3d` solves it in readable code.

The method is the direct stiffness method, linear and first order unless you tick Second order (P-Delta), checked against textbook cases.

**Second order (P-Delta).** Tick *Second order (P-Delta)* beside Run: each combination is solved again with the members' axial forces acting on the deflected frame (each member cut into 4 pieces, so the bending of a member between its ends counts too), until the axial forces settle. The result line gives the number of passes and how much the sway grew; the moments, deflections, design checks and report then use these results. Above the frame's elastic critical load the run stops and says so. It is elastic with small rotations, flexural only, with no stiffness reduction or notional loads (not the AISC direct analysis method by itself); slabs, walls and rigid floors stay first order.

**Floor pressure on slabs.** For concrete slabs (the analysis reads a slab as plates when its material is concrete), the Loads block has {{ui:Pressure on every slab}}: type kN/m², pick the case above and press {{ui:Add to slabs}}. It is spread over every slab the analysis found, downward, and listed with a Remove link. It is one pressure for all slabs, not one per slab, and it is not a code load: type the value your engineer gives you.

**Natural frequencies (finite elements).** The {{ui:Finite elements: natural frequencies}} block under the results finds the lowest modes of the same model with the finite element engine: beams with their end releases, slabs and walls as flat four-node shells, rigid floors, supports. Choose how many modes (3, 6, 10 or 20) and the slab element (the four-node shell for thick or thin slabs, or the thin-slab one) and press {{ui:Find the frequencies}}. The table gives each mode's frequency in Hz, its period in seconds and its effective modal mass along X, Y and Z as a share of the mass that can move; {{ui:Show on the model}} draws any mode the way the deflected shape is drawn. Mass is the material density times the volume: loads do not add mass, and a material with no density has none. The report (PDF, CSV) carries the table. It is elastic and small-movement only, and no seismic or wind load is made from a code here. Not a code check; your engineer reviews the results.

**Response spectrum, time history and pushover.** Three more blocks sit below the frequencies, using the same finite element model. Mass for all of them is the material density plus the downward loads of the cases you tick, each times a factor you type (for example Dead at 1 and Live at the share you count as mass).

{{ui:Response spectrum}} reads each mode off a spectrum you give (a table of period and acceleration, or the ASCE 7 shape from SDS, SD1 and TL; the {{ui:Use the Seismic block values}} button copies those from the Seismic block) and combines the modes by CQC, SRSS, the ten percent rule or an absolute sum, then puts the X, Y and Z directions together (100 % + 30 % or SRSS). It gives the base shear, storey drifts, member end forces and a mode table that warns when the modes used carry less than 90 % of the mass. You can scale the results by a factor or up to a base shear you type; the block never computes that base shear itself. Results have no sign.

{{ui:Time history}} runs a ground acceleration by modal superposition (exact for the record's straight lines between points) or by direct integration (Newmark average acceleration with Rayleigh damping). The input is a made-up sine or pulse (always labelled synthetic), a record you paste, or a text file you open (time and acceleration, one acceleration per line with a step, or a PEER-style file with a DT= header; in g or m/s²). It gives the roof displacement and base shear against time, the drift of each level, and the envelope of the member end forces. Models with a very long record keep it for the session only.

{{ui:Pushover}} pushes the roof sideways in small steps (pattern like the first mode, or uniform), with plastic hinges at the ends of members that have an I shape. A hinge yields at the plastic moment, which falls as the axial force grows (worked out from the drawn shape, fillets ignored); hardening is optional, P-delta is optional, and a gravity combination can be applied first. It gives the capacity curve (base shear against roof displacement), the first hinge, and the state and plastic rotation of each hinge. {{ui:Run the nonlinear time history}} runs the same hinges under the Time history block's record on small models. Hinges form at member ends only (put a node where one should form inside a span); a member released at both ends gets none, and yielding and buckling of braces are not modelled; slabs and walls stay elastic; no acceptance criteria are given. Not a code check; your engineer reviews the results. The settings are saved with the model, and the report carries the tables.

Not built yet: buckling, a missing-mass correction for the response spectrum, record scaling, acceptance criteria for hinges (dynamic response is there, above), area loads other than the one pressure on every slab, member offsets, tension-only braces, walls and slabs in the frame, design code checks of welded shapes and of sections other than rolled I-shapes. See [Not built yet](topic:not-built-yet).

## Units

Lengths follow the unit you pick in the toolbar ({{ui:Units}}), like the rest of BimCraft: the load positions you type and see ({{ui:From}}, {{ui:To}}, {{ui:At}}), the points of node loads and reactions, the floor heights in {{ui:Seismic}}, and the deflection and drift columns (feet and inches show these small lengths in decimal inches). Change the unit at any time; the tab redraws. Forces stay in kN and kN·m, and the report (PDF, CSV) and the CraftScript file stay in millimetres with the unit written. Section sizes, bar diameters and covers in the {{ui:Concrete}} block stay in millimetres, as they are named.

## Design checks

The {{ui:Design checks}} block (the same as DetailCraft's) takes a {{ui:Design code}}, ASCE 7 + AISC 360 or EN 1990 + EN 1993-1-1, and a {{ui:Steel grade}}. Give each load case its kind (dead, live, wind …) and {{ui:Make combinations}} writes the code's load combinations of your cases; the analysis then runs them like any combination.

{{ui:Check members}} then checks each **rolled steel I-shape** with DetailCraft's checks (tension, compression with buckling, bending with lateral-torsional buckling, shear, bending with axial force, deflection; the clauses are in the report) and shows how much of its capacity it uses, coloured on the model. It is an **aid until an engineer has reviewed it**.

**Which members are checked.** An IFC profile does not say whether a steel I-shape is rolled or welded, so BimCraft calls it rolled only when its profile name (else the element's type name) is a size from the AISC W or S tables or the EN 10365 IPE, HEA or HEB tables (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **and** the depth, width, web and flange in the file match that size within 1 %. Every other I-shape (a plate girder, a size under another name, an edited size) is taken as welded and comes back **not checked**, as are tubes, angles, channels and other sections, slender parts and torsion. Check those members with an engineer.
