---
title: Start en ny bygning
summary: Lag en tom bygningsmodell med nivåer, tegn veggene, plasser elementer fra biblioteket og lagre som IFC.
keywords: ny, ny bygning, tom, start fra bunnen, mal, nivåer, etasjer, gulv, opprett, modell
from: 546b8ae8
---

## Dette gjør du

Start en bygningsmodell fra ingenting i stedet for å åpne en. BimCraft lager en tom IFC-modell med et prosjekt, en tomt, bygningen og nivåene. Du kan plassere utstyr og møbler på nivåene fra biblioteket og lagre som en IFC-fil.

:::note
Vegger kan tegnes nå: se [Tegn vegger](topic:draw-walls). Dører, vinduer, dekker og tak bygges neste.
:::

## Trinn

1. Klikk {{ui:Ny bygning}} under **Åpne en fil eller mappe**, eller på startsiden.
2. Skriv **Bygningsnavn**.
3. Velg hvor mange **Nivåer** den har (1 til 200).
4. Skriv **Nivåhøyde**, gulv til gulv: for eksempel `10'-0"`, `10'6"` eller `3000 mm`. Et vanlig tall er fot i USA og millimeter ellers.
5. Klikk {{ui:Opprett}}. Nivåene stables fra 0, hvert en nivåhøyde over det forrige, og får navnene Nivå 1, Nivå 2 og så videre. De vises i modelltreet, og planen for Nivå 1 åpnes ved siden av 3D-visningen med {{ui:Tegn}} på.
6. Tegn veggene: se [Tegn vegger](topic:draw-walls). Gi nivåene nye navn eller endre høydene i panelet **Nivåer**.
7. Plasser elementer: se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library). Plasseringslinjen lister alle nivåer.
8. Klikk {{ui:Lagre som IFC}}. Filen får navn etter bygningen, for eksempel `Smith's house.ifc`.

## Greit å vite

- Modellen lagres i millimeter, som IFC4. Andre BIM-programmer åpner den.
- **Etasjer** i panelet til venstre lister bare nivåer med noe på seg; modelltreet lister alle.
- Helt til du lagrer, regnes den nye bygningen som ulagret arbeid. BimCraft spør før du åpner en annen fil eller forlater siden, og beholder en kopi i denne nettleseren i tilfelle fanen lukkes.
