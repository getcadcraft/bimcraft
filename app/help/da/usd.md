---
title: Eksportér modellen som USD
summary: Skriv de åbne IFC-modeller som USD til rendering, scenesamling og andre 3D-programmer, med hvert elements IFC-klasse, GlobalId og egenskaber.
keywords: usd, usda, usdc, usdz, openusd, eksport, ifc, globalid, egenskaber, etager, discipliner, scenesamling, archviz, rendering
from: 2be5f7b8
---

{{ui:USD}} på værktøjslinjen skriver det, der er åbent (alle modeller, de sammenkædede hvor du har placeret dem), som én USD-fil.

## Eksport

1. Vælg {{ui:USD}} på værktøjslinjen.
2. Vælg {{ui:Tekst (.usda)}}, {{ui:Binær (.usdc)}} eller {{ui:Pakke (.usdz)}}.
3. Filen downloades. Statuslinjen siger, hvor mange elementer der kom med.

## Hvad er i filen

| I IFC-modellen | I USD-filen |
|---|---|
| Byggegrund, bygning, etager | Indlejrede grupper, etager i rækkefølge efter kote |
| Hvert element | Ét prim under sin etage og disciplin (Arkitektur, Konstruktion, MEP, Inventar, Byggegrund, Rum, Andet), med sin geometri som et net |
| Klasse, GlobalId, navn, type, mærke | Attributter med navnene `ifc:class`, `ifc:globalId`, `ifc:name` og så videre |
| Egenskabs- og mængdesæt | Én attribut pr. egenskab; længder, arealer og rumfang i meter, kvadratmeter og kubikmeter |
| Farver | Materialer (med gennemsigtighed) |
| Rum | Bevaret, markeret som hjælpeobjekter, så renderere springer dem over |

Geometrien ligger i IFC-filens egne koordinater. Layoutet følger CadCraft's skrevne USD-konventioner for bygninger.
