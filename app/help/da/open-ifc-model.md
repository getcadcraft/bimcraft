---
title: Åbn en IFC-model og kig dig omkring i 3D
summary: Åbn en IFC-fil, roter, panorér og zoom, og brug Tilpas, Top, Front og Side til at finde orienteringen.
keywords: ifc, 3d, rotér, panorér, zoom, tilpas, topvisning, frontvisning, sidevisning, navigér, viewcube, kamera
from: 68b460dd
---

## Hvad du gør

Åbn en IFC-model, bevæg dig rundt i den i 3D, og hop til standardvisningerne. Cirka fem minutter.

Du har brug for en `.ifc`-fil. De fleste BIM-programmer eksporterer en; i Revit er det **File > Export > IFC**. Se [Få en projektfil ind i 3D via IFC](topic:rvt-to-ifc).

## Trin

1. Klik på {{ui:Vælg en fil}} (eller slip-området øverst til venstre).
2. Vælg din `.ifc`-fil, og bekræft.
3. Vent, til statuslinjen er færdig. Den viser "Starter IFC-motoren…" første gang, derefter "Læser modellen…" og "Bygger geometri: … af … elementer".
4. Kig på modellen: den åbner i en tre-kvart-visning, tilpasset til skærmen.
5. Klik på {{ui:Top}} i værktøjslinjen over modellen for at kigge lige ned.
6. Klik på {{ui:Front}} for at kigge på forsiden, og derefter {{ui:Side}} for at kigge fra siden.
7. Klik på {{ui:Tilpas}}, eller tryk {{key:F}}, for at vende tilbage til tre-kvart-visningen af hele modellen.

## Hvad du skal se

- Modellen i midten, med tynde mørke kanter for et tegningsagtigt udseende.
- {{ui:Fil}}-panelet til venstre: filnavnet, størrelsen, IFC-skemaet (for eksempel IFC2X3 eller IFC4), projektnavnet, fasen, programmet den blev eksporteret fra, forfatteren, eksportdatoen og antal elementer og trekanter.
- {{ui:Etager}}- og {{ui:Elementer}}-listerne under den.
- Statuslinjen: "Åbnede *filnavn*: *n* elementer på *s* s".

## Bevægelse rundt i modellen

:::mouse
| For at | Gør dette |
|---|---|
| Rotere | Træk med venstre knap |
| Panorere | Træk med højre knap, eller hold {{key:Shift}} (eller {{key:Mod}}) nede og træk med venstre knap |
| Zoome | Rul med hjulet, eller træk med midterknappen |
| Se alt | Tryk {{key:F}}, eller klik på {{ui:Tilpas}} |
:::

:::mac mouse
På trackpad: træk med én finger trykket ned for at rotere; hold {{key:Shift}} eller {{key:Mod}} og træk for at panorere; rul med to fingre eller knib for at zoome. Et klik med to fingre er et højreklik, og du kan trække med det for at panorere, men {{key:Shift}} og træk er lettere.
:::

:::touch
| For at | Gør dette |
|---|---|
| Rotere | Træk med én finger |
| Zoome | Knib med to fingre |
| Panorere | Flyt to fingre sammen |
| Se alt | Tryk på {{ui:Tilpas}} |
:::

Rotation drejer altid om et punkt midt i modellen. Panorering flytter det punkt, så efter en lang panorering kan rotationen føles forskudt: klik på {{ui:Tilpas}} for at nulstille den.

## Skygget, kanter eller trådmodel

Tre små knapper lige over ViewCube'en vælger, hvordan modellen tegnes: {{ui:Skygget}}, {{ui:Skygget med kanter}} (standard) og {{ui:Trådmodel}}. De er også kommandoer (Visning i menuerne og i tilpasningslisten), så de kan have egne taster. {{ui:Plan}}, {{ui:Del}} og {{ui:3D}} findes i rækken {{ui:Visning}} på værktøjslinjen.

## Almindelige fejl

- **At forvente navngivne visninger.** BimCraft har fire faste visninger ({{ui:Tilpas}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), ViewCube'en nederst til højre og fri rotation. Den gemmer ikke visninger.
- **At lede efter planer og snit.** Der er ingen 2D-planer eller snitbokse i denne version. Skær modellen med ét {{ui:Snit}}-plan ([Skær en IFC-model med et snitplan](topic:section-plane)), eller slå etager fra: [Vis og skjul etager, zoner og kanter](topic:storeys-and-spaces).
- **At åbne en projektfil og forvente 3D.** En projektfil åbner som et filkort. Eksportér IFC først.
- **At åbne en `.ifczip`.** Pak den ud, eller eksportér almindelig `.ifc`.
- **En meget stor model gør fanen langsom eller får den til at gå ned.** Se [Browsere, enheder og hukommelse](topic:platforms).

## Næste

[Vælg et element, og læs dets egenskaber](topic:inspect-element).
