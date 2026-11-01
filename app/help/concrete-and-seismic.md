---
title: Check concrete members and make seismic loads
summary: Set up the bars of concrete beams and columns of the open model, check them to ACI 318-19, make equivalent lateral forces to ASCE 7-22 on rigid floors, and see storey drift. An aid for an engineer to check.
section: tasks
order: 61
keywords: concrete, reinforced concrete, ACI 318, ACI 318-19, rebar, beam, column, shear, ties, seismic, earthquake, equivalent lateral force, ELF, ASCE 7-22, drift, storey drift, floors, rigid diaphragm, story weight, utilisation, structural, engineer, analysis
---

The {{ui:Concrete members}} and {{ui:Seismic loads}} blocks in the {{ui:Analysis}} tab check reinforced concrete beams and columns of the open IFC, and make the sideways forces of an earthquake on the floors of its frame. They are the same blocks as DetailCraft's, run after the {{ui:Analysis}} tab's analysis, and saved in the IFC with the other analysis settings.

:::warning
The results are **for checking by an engineer**: an aid until one has reviewed it. Concrete checks use first-order forces (a column in a frame you call non-sway is designed for its magnified moment), with no sway magnification, no torsion design, no seismic detailing (ACI chapter 18) and no tie detailing. The seismic loads leave out the redundancy factor, the vertical seismic effect, torsional amplification and P-delta effects. **Wind loads are not built**: the standard's wind chapters are not in the project's reference pages.
:::

## What BimCraft reads

The analysis reads the model's beams, columns and braces with their profiles (see [Analyse the structural frame](topic:frame-analysis)). The {{ui:Concrete members}} block lists every section they use. Press {{ui:Set up as concrete…}} on a section that is concrete: BimCraft takes a rectangle from the profile's area and stiffness (the width b and depth h you can then change), so a section that is not close to a rectangle (a rolled steel shape) gives a size you must correct, or is left alone.

A section set up as concrete, and any element whose material is named concrete, is analysed as concrete: E = 4700 √f′c, 2400 kg/m³, and by default with **cracked sections** (columns 0.70 Ig, beams 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Choose {{ui:Gross sections}} to turn that off. Without these settings the model is analysed exactly as before.

## Bars, combinations, check

Give the cover, the top, bottom and side bars (or a column cage) and the ties of each section, set f′c, fy, fyt, K and sway or non-sway. Give the load cases their kind, press {{ui:Make combinations}} (ASCE 7 §5.3.1) and then {{ui:Check concrete}}: each member gets a utilisation, coloured on the model. Members over capacity, and a storey drift over its limit, are listed in {{ui:Problems}} with their clause; click one to select the element.

## Floors and seismic loads

In the {{ui:Seismic loads}} block {{ui:Find floors}} takes the levels where two or more beams meet; each becomes a rigid diaphragm. {{ui:Take weights from cases}} reads each floor's seismic weight from the cases you give a factor. Fill in SDS, SD1, S1, R, Ie, Cd, TL, the system and the risk category, then {{ui:Make seismic cases}} (ASCE 7-22 12.8: period, base shear, distribution up the floors, 5 % accidental torsion). The storey forces and the drift check (12.12) show after a run. The same period and storey stiffness feed the earthquake in [Play a flood, wind or an earthquake](topic:hazard-playback) when you pick the analysis frame as its source.

Slabs and walls of concrete become plates in the analysis, and the {{ui:Slab reinforcement}} block works out the steel they need per metre. The details of every check are in DetailCraft's topic of the same name.
