---
title: Room air: getting started
summary: What the Room air add-on works out, how to switch it on, and how to go from a room with its diffusers, grilles or fan coils to air speed, temperature and humidity in a few steps.
section: start
order: 1
keywords: room air, airflow, cfd, ventilation, diffuser, grille, fan coil, air terminal, air speed, draught, temperature, humidity, occupied zone, add-on
---

## What it is

Room air works out how the air moves in one room: the air speed, the temperature and the humidity everywhere in it, from the room's supply and return terminals and fan coils and the heat and moisture of what is in it. It uses CadCraft's own airflow solver (a lattice Boltzmann method with buoyancy, so cold air falls and warm air rises).

It works in BimCraft. Switch it on in Settings, General, Add-ons. It is off until you do.

## Steps

1. **Room.** Pick a room from Rooms found (the rooms the walls enclose, with the ceiling height from the walls around it), or type the outline in millimetres.
2. **Terminals and fan coils.** Picking a room reads the diffusers, grilles and fan coils of BimCraft's equipment in it, with the airflow the duct calculation uses. The supply air temperature and humidity are not in the model: 14 °C and 90 % are filled in to start. Type yours. You can also type terminals, one per line.
3. **Heat and moisture.** Type a box for each person, machine or light, with its heat in watts and its moisture in grams an hour.
4. **Run.** Set the air at the start, the grid (Quick is a few thousand cells and takes about a minute) and the time to simulate (two minutes of air to start; a big room needs longer to settle). Run works in steps, so the page stays live; Stop keeps what it has.
5. **Read the result.** The occupied zone (0.1 m to 1.8 m above the floor and 0.5 m in from the walls) gives the mean and highest air speed, the lowest, mean and highest temperature and humidity, and how much warmer the air is at 1.1 m than at 0.1 m. The air in and out, the air leaving and the heat added are listed. A plan at a height, or a section across the room, is coloured by speed, temperature or humidity; CSV gives that plane's numbers.

## What the numbers are

- What comes in goes out: the air, the heat and the water that the supplies and the sources bring are the air, heat and water that leave through the returns, to within a fraction of a percent once the room has settled. That is checked by the add-on's tests.
- It has **not yet been compared with air measured in a real test room.** That comparison waits on measured profiles, and the result says so until it is made.
- The turbulence is an eddy viscosity with a floor that keeps a coarse grid steady, so jets spread faster and fade sooner than real ones. Walls pass no heat, there is no radiation or sun, and a diffuser blows straight down.
- No comfort index (draught rating, PMV) is worked out.

This is a design aid, not a certificate: the engineer responsible for the ventilation checks the result.
