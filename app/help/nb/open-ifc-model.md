---
title: Åpne en IFC-modell og se deg rundt i 3D
summary: Åpne en IFC-fil, roter, panorer og zoom, og bruk Tilpass, Topp, Front og Side for å orientere deg.
keywords: ifc, 3d, rotere, panorere, zoom, tilpass, toppvisning, frontvisning, sidevisning, navigere, ViewCube, kamera
from: 68b460dd
---

## Hva du skal gjøre

Åpne en IFC-modell, rør deg rundt i 3D og hopp til standardvisningene. Omtrent fem minutter.

Du trenger en `.ifc`-fil. De fleste BIM-programmer eksporterer en; i Revit er det **File > Export > IFC**. Se [Få en prosjektfil inn i 3D via IFC](topic:rvt-to-ifc).

## Trinn

1. Klikk {{ui:Velg en fil}} (eller slippområdet øverst til venstre).
2. Velg `.ifc`-filen din og bekreft.
3. Vent til statuslinjen er ferdig. Den viser «Starter IFC-motoren…» første gang, deretter «Leser modellen…» og «Bygger geometri: … av … elementer».
4. Se på modellen: den åpnes i en tre-kvartsvisning, tilpasset skjermen.
5. Klikk {{ui:Topp}} i verktøylinjen over modellen for å se rett ned.
6. Klikk {{ui:Front}} for å se forsiden, og deretter {{ui:Side}} for å se fra siden.
7. Klikk {{ui:Tilpass}}, eller trykk {{key:F}}, for å gå tilbake til tre-kvartsvisningen av hele modellen.

## Hva du skal se

- Modellen i midten, med tynne mørke kanter for et tegningsaktig utseende.
- {{ui:Fil}}-panelet til venstre: filnavnet, størrelsen, IFC-skjemaet (for eksempel IFC2X3 eller IFC4), prosjektnavnet, fasen, programmet den ble eksportert fra, forfatteren, eksportdatoen, og antall elementer og trekanter.
- {{ui:Etasjer}}- og {{ui:Elementer}}-listene under den.
- Statuslinjen: «Åpnet *filnavn*: *n* elementer på *s* s».

## Bevege seg rundt

:::mouse
| For å | Gjør dette |
|---|---|
| Rotere | Dra med venstre knapp |
| Panorere | Dra med høyre knapp, eller hold {{key:Shift}} (eller {{key:Mod}}) og dra med venstre knapp |
| Zoome | Rull hjulet, eller dra med midtknappen |
| Se alt | Trykk {{key:F}} eller klikk {{ui:Tilpass}} |
:::

:::mac mouse
På styreflaten: dra med ett finger trykket for å rotere; hold {{key:Shift}} eller {{key:Mod}} og dra for å panorere; rull med to fingre eller klyp for å zoome. Et klikk med to fingre er et høyreklikk, og du kan dra med det for å panorere, men {{key:Shift}} og dra er enklere.
:::

:::touch
| For å | Gjør dette |
|---|---|
| Rotere | Dra med ett finger |
| Zoome | Klyp med to fingre |
| Panorere | Flytt to fingre sammen |
| Se alt | Trykk {{ui:Tilpass}} |
:::

Rotasjon dreier alltid rundt et punkt midt i modellen. Panorering flytter det punktet, så etter en lang panorering kan rotasjonen føles skjev: klikk {{ui:Tilpass}} for å tilbakestille den.

## Skyggelagt, kanter eller trådramme

Tre små knapper rett over ViewCube velger hvordan modellen tegnes: {{ui:Skygget}}, {{ui:Skygget med kanter}} (standard) og {{ui:Trådramme}}. De er også kommandoer (Visning i menyene og i listen for tilpasning), så de kan ha egne taster. {{ui:Plan}}, {{ui:Del}} og {{ui:3D}} står på raden {{ui:Visning}} i verktøylinjen.

## Vanlige feil

- **Forventer navngitte visninger.** BimCraft har fire faste visninger ({{ui:Tilpass}}, {{ui:Topp}}, {{ui:Front}}, {{ui:Side}}), ViewCube nederst til høyre og fri rotasjon. Den lagrer ikke visninger.
- **Leter etter planer og snitt.** Det finnes ingen 2D-planer eller snittbokser i denne versjonen. Kutt modellen med ett {{ui:Snitt}}-plan ([Kutt en IFC-modell med et snittplan](topic:section-plane)), eller slå av etasjer: [Vis og skjul etasjer, rom og kanter](topic:storeys-and-spaces).
- **Åpner en prosjektfil og forventer 3D.** En prosjektfil åpnes som et filkort. Eksporter IFC først.
- **Åpner en `.ifczip`.** Pakk den ut, eller eksporter vanlig `.ifc`.
- **En veldig stor modell gjør fanen treg eller får den til å krasje.** Se [Nettlesere, enheter og minne](topic:platforms).

## Neste

[Plukk et element og les egenskapene](topic:inspect-element).
