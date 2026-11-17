---
title: Skakter og åbninger gennem etager
summary: En skakt er én kontur, der skærer alle gulve, lofter og tage mellem to niveauer. En lodret åbning skærer ét af dem. Vægåbning skærer en væg.
keywords: skakt, elevatorskakt, trappeåbning, stigrør, lodret åbning, gulvåbning, loftsåbning, tagåbning, ovenlysåbning, hul i gulv, vægåbning, IfcOpeningElement, fradrag, nettoareal
from: 8e9e1641
---

## Hvad du skal gøre

Skær en elevatorskakt gennem en bygning med én skitse, skær et hul i én etage, og læs hvad der er fjernet fra arealerne.

## Hvor værktøjerne findes

- Båndlayouts: {{ui:Arkitektur}} › **Åbning** › {{ui:Skakt}}, {{ui:Lodret åbning}} og {{ui:Vægåbning}}.
- Klassisk layout: tegnelinjen › menuen {{ui:Rum}} (Skakt, Lodret åbning) og › menuen {{ui:Vægge}} (Vægåbning).

## En skakt

1. Åbn gulvplanen for det niveau, skakten starter på. Vælg {{ui:Skakt}}.
2. I rækken vælger du {{ui:Bundniveau}} og {{ui:Topniveau}} og forskydninger, hvis den starter eller slutter over eller under dem.
3. Klik på konturens hjørner. Klik på det første hjørne igen, dobbeltklik eller tryk Enter for at afslutte.
4. Alle gulve, lofter og tage mellem de to højder skæres. Statuslinjen siger, hvor mange.

En skakt er ét objekt. Vælg dens kontur på et hvilket som helst niveau, den går igennem: **Egenskaber** viser dens navn, niveauer og forskydninger, hvad den skærer, og det areal, der er fjernet. Ændrer du den, følger alle åbninger med. Sletter du den, forsvinder alle åbninger. Hver er ét trin i Fortryd.

Den bliver ved med at skære: et gulv, der laves senere mellem dens niveauer, skæres uden at blive bedt om det, og et gulv, du sletter, frigives.

Gulvet, skakten står på, skæres ikke (dets top er bunden). Giv bunden en negativ forskydning for at skære det også. Giv toppen en positiv forskydning for at gå gennem taget.

## En lodret åbning

1. Vælg {{ui:Lodret åbning}}. I rækken vælger du, hvad der skal skæres: gulvet, loftet eller taget.
2. Klik på konturens hjørner, og afslut som ovenfor.
3. Gulvet, loftet eller taget på dette niveau under konturen skæres. Det hører til dette ene element: sletter du gulvet, forsvinder åbningen med det.

## En vægåbning

{{ui:Vægåbning}} er værktøjet fra [Form en væg](topic:wall-shape): klik på en væg i planen, eller på to hjørner på dens flade i 3D.

## Mængder

Efter målereglen for gulve er et elements nettoareal dets bruttoareal minus det, der er skåret ud af det. En skakt eller en lodret åbning er et fradrag på hvert gulv og loft, den skærer; arkene Gulve og overflader og IFC-mængderne viser de samme tal. På et tag er fradraget tagfladens areal: planarealet divideret med cosinus til hældningen.

En kontur, der hænger ud over kanten, fratrækker kun den del, der ligger på elementet.

## Hvis intet skæres

En skakt med intet i vejen laves stadig, og det siges: den vil skære det, der bygges der senere. En lodret åbning kræver noget under sig; uden det siger statuslinjen det, og intet laves.

## I IFC

Hver skæring er et IfcOpeningElement med IfcRelVoidsElement til elementet, det skærer, så ethvert IFC-program viser hullet. Et tag skæres flade for flade. Selve skakten er en IfcGroup af sine åbninger.

## Ikke lavet endnu

- Buede konturer.
- En skakts vægge: tegn dem med værktøjet Væg.
- Redigering af konturen ved at trække dens hjørner (ændr den i Egenskaber, eller slet den og skitsér igen).
- Et tegnet gulvs egne Egenskaber viser kun dets areal minus dets egne åbninger; listerne og IFC-mængderne inkluderer skakten.

Se også [Rum og rumadskillere](topic:rooms-and-separators).
