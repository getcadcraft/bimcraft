---
title: Start en ny bygning
summary: Lag en tom bygningsmodell med nivåene sine, tegn veggene, plasser elementer fra biblioteket, og lagre den som IFC.
keywords: ny, ny bygning, tom, blank, start fra bunnen av, mal, nivåer, etasjer, gulv, opprett, modell
from: 68786865
---

## Hva du skal gjøre

Start en bygningsmodell fra bunnen av i stedet for å åpne en. BimCraft lager en tom IFC-modell med et prosjekt, en tomt, bygningen og nivåene. Utstyr og møbler kan plasseres på nivåene fra biblioteket, og modellen kan lagres som en IFC-fil.

:::note
Vegger kan tegnes nå: se [Tegn vegger](topic:draw-walls). Dører, vinduer, gulv og tak bygges neste.
:::

## Fremgangsmåte

1. Klikk {{ui:Ny bygning}} under **Åpne en fil eller mappe**, eller på startsiden.
2. Skriv inn **Bygningsnavn**.
3. Velg hvor mange **Nivåer** bygningen har (1 til 200).
4. Skriv inn **Nivåhøyde**, fra gulv til gulv: for eksempel `10'-0"`, `10'6"` eller `3000 mm`. Et rent tall er fot i USA, millimeter ellers.
5. Alle felt er allerede fylt ut, så de kan stå som de er. Under dem står det hva som starter: enhetene, **Veggtype** som Vegg-verktøyet tegner først (velg en annen fra listen hvis ønskelig), og det første arket.
6. Klikk {{ui:Opprett}}. Nivåene stables fra 0, hvert en nivåhøyde over det forrige, og navnes Nivå 1, Nivå 2 og så videre. De vises i modelltreet, og planen for Nivå 1 åpnes ved siden av 3D-visningen med {{ui:Tegn}} på.
7. Tegn veggene: klikk {{ui:Vegg}} og to punkter. Se [Tegn vegger](topic:draw-walls). Gi nivåene nytt navn eller endre høydene deres i panelet **Nivåer**.
8. Plasser elementer: se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library). Plasseringslinjen lister alle nivåene.
9. Klikk {{ui:Lagre som IFC}}. Filen får navn etter bygningen, for eksempel `Smiths hus.ifc`.

## Greit å vite

- Modellen lagres i millimeter, som IFC4. Andre BIM-programmer åpner den.
- En ny bygning får ett ark, **A-101**, som holder planen for det laveste nivået: A3 i 1:100 når man arbeider med metriske enheter, ellers Tabloid i 1/8" = 1'-0". Arket er tomt til den første veggen, og viser deretter planen etter hvert som du tegner. Åpne det under **Ark** i prosjektnettleseren for å endre papir, målestokk eller tittelfelt, legge til visninger eller slette det. En bygning startet fra en mal får malens ark i stedet.
- For å endre hva alle nye bygninger starter med (veggtypen for metriske prosjekter, nivåene, det første arket, verktøyet som er aktivt etter Opprett), se [Standardregler](topic:default-policies).
- Det må ikke settes opp noe før den første veggen. Veggtypen, nivåhøydene, enhetene og arket kan alle endres senere.
- **Etasjer** i venstre panel lister bare nivåer som har noe på seg; modelltreet lister dem alle.
- Før det lagres, regnes den nye bygningen som ulagret arbeid. BimCraft spør før en annen fil åpnes eller programmet forlates, og beholder en kopi i denne nettleseren i tilfelle fanen lukkes.
