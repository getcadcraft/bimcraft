---
title: Energy code check: getting started
summary: Check a house against California's 2025 Energy Code prescriptive package: the climate zone from the ZIP code, wall U-factors from the code's own tables, ceiling and floor insulation, and window U-factor, SHGC and area. A guide, not a compliance document.
section: start
order: 1
keywords: energy code, Title 24, Part 6, California, climate zone, ZIP code, prescriptive, component package, U-factor, R-value, SHGC, fenestration, west-facing, insulation, CF1R, performance, LSC, compliance, add-on
---

## What you'll do

1. Switch the add-on on in {{ui:Settings}} › {{ui:Add-ons}}, then open the **Energy code check** tab.
2. Under **Place and size**, type the site's ZIP code. The climate zone appears. Check the conditioned floor area: it comes from the model's outline, and you can type your own.
3. Under **Outside walls**, each exterior wall type has a card. Choose the stud size, the spacing, the insulation between the studs and any continuous insulation. The U-factor is read from the code's own table and shown under the boxes.
4. Under **Ceiling or roof** and **Floor**, choose what the house has and its insulation.
5. Under **Windows and doors**, type the rated U-factor and SHGC from the window labels.
6. Read the **Result**. A tick meets the code's figure, a cross does not, and a question mark could not be checked, with the reason beside it. Each row names its table or section.

## Where the numbers come from

The code's numbers are in a code pack, made by script from the California Energy Commission's published documents: Table 150.1-A, Section 150.0 and Reference Joint Appendix JA4 of the 2025 Building Energy Efficiency Standards, and the Commission's list of climate zones by ZIP code. The pack holds numbers and section numbers, never the code's text.

## What the model gives, and what you state

- **From the model:** exterior wall types and their areas, windows and doors in exterior walls, each window's compass direction, the floor area.
- **From you:** what is between the studs, continuous insulation, ceiling and floor insulation, the radiant barrier, the windows' rated values.

What you state is kept in the drawing, so it travels with the file.

## A project file for the approved program

Under **The performance path**, press **Save the project file (.ribd25)**. It saves the envelope in the format of CBECC, the Energy Commission's own compliance program, so the energy consultant starts from your model. The panel lists what the file assumed (roof pitch, roofing, floor framing) and what the consultant must add (heating, cooling, water heating, solar panels, the garage). The button stays off while something the envelope needs is missing, and the panel says what.

The file is checked against the program's published data model. We have not opened it in the program itself: treat it as a starting file.

## What it does not do

- It does not produce or register a certificate of compliance.
- It checks the envelope only. Heating, cooling, water heating, ventilation and solar panels are listed as not checked.
- It does not do the performance approach. That needs software the Energy Commission has approved. The project file gives that software a start; it is not a result.
