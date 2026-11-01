---
title: Play a flood, wind or an earthquake on the building
summary: Water rising through the rooms, wind pressure on each storey, or an earthquake shaking the storeys, played on a plan or an elevation with a time slider. Simple models with their assumptions listed; not a code check or a structural design.
section: tasks
order: 62
keywords: hazard, flood, wind, earthquake, seismic, drift, sway, base shear, water level, climate, scenario, sea level, playback, storey, period
---

The {{ui:Hazard playback}} section of the left panel plays a hazard on the open IFC model. Nothing in the model is changed.

:::warning
These are **simple models to see what a hazard does to this layout**, not a flood study, a wind-code check or a structural design. Each result lists its assumptions.
:::

## Flood

Set the highest water level above the lowest floor and the minutes to rise, hold and fall. Water enters a room through an opening whose sill it has passed, and rooms joined to wet rooms by openings below the water stand at the same level (quasi-static). The table gives when each room first gets wet and how deep; the plan plays it. Type the most water a room may take and rooms over it are warnings. **Climate futures:** load your own scenario file (JSON or CSV with a year, a sea level rise and a flood factor) and choose a year; the app ships no climate data.

## Wind

The pressure follows ½ρV² with the speed rising up the height; the force on a storey is that pressure times a gust factor, the two pressure coefficients, the width and the storey height. You get shear, overturning moment and the sway.

## Earthquake

A shear building: a mass per floor (footprint × kilograms per square metre, which you set), the same stiffness in every storey fitted to the first period you give (a tenth of a second a storey if you leave it blank, and it says so), damping, and a made ground motion (a pulse or filtered noise) at the peak acceleration you choose. The result is each storey's drift, the floor accelerations and the base shear; the elevation plays the sway, drawn larger than it is. Type a drift ratio you allow and storeys over it are warnings. It is elastic: nothing yields or cracks.

## Floor stiffness from the Analysis frame

For an earthquake or for wind sway, choose **The Analysis frame** as the source of the stiffness instead of typing a period. Each floor is pushed sideways in turn, the frame (beams, columns, bracing, slabs) is solved, and the floors' stiffness with everything working together drives the run. The weight is the members' own plus the floor load per square metre you set on each floor's plan box. The real first period is shown. It is elastic: nothing yields, and torsion is not modelled. For wind, the storey forces are still the assumed ones above (a power-law profile, your gust factor and the fixed pressure coefficients, not a wind code); only the sway comes from the frame, by solving the frame's full stiffness matrix against those forces. The model needs an IFC with a frame the Analysis tab can read.

## Units

Water depths, floor-by-floor sway and drift, distances and areas are shown in the {{ui:Units}} you chose. Forces (kN), times and accelerations keep their own units, and a value you type in a box labelled in meters stays in meters. The same goes for the evacuation, daylight, heating and cooling and furnish results: lengths, areas and volumes follow your choice; pressure, flow, temperature, energy and power are never converted.
