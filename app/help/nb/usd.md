---
title: Eksporter modellen som USD
summary: Skriv de åpne IFC-modellene som USD for gjengivelse, scenesammensetning og andre 3D-programmer, med hvert elements IFC-klasse, GlobalId og egenskaper.
keywords: usd, usda, usdc, usdz, openusd, eksport, ifc, globalid, egenskaper, etasjer, fag, scenesammensetning, archviz, gjengivelse
from: 2be5f7b8
---

{{ui:USD}} på verktøylinjen skriver det som er åpent (alle modeller, sammenstilte der du plasserte dem) som én USD-fil.

## Eksport

1. Velg {{ui:USD}} på verktøylinjen.
2. Velg {{ui:Tekst (.usda)}}, {{ui:Binær (.usdc)}} eller {{ui:Pakke (.usdz)}}.
3. Filen lastes ned. Statuslinjen sier hvor mange elementer som ble med.

## Hva som er i filen

| I IFC-modellen | I USD-filen |
|---|---|
| Tomt, bygning, etasjer | Nøstede grupper, etasjer i rekkefølge etter høyde |
| Hvert element | Ett prim under sin etasje og sitt fag (Arkitektur, Konstruksjon, MEP, Inventar, Terreng, Rom, Annet), med geometrien som et nett |
| Klasse, GlobalId, navn, type, merke | Attributter kalt `ifc:class`, `ifc:globalId`, `ifc:name` og så videre |
| Egenskaps- og mengdesett | Ett attributt per egenskap; lengder, arealer og volum i meter, kvadratmeter og kubikkmeter |
| Farger | Materialer (med gjennomsiktighet) |
| Rom (Space) | Beholdt, merket som hjelpeelementer slik at gjengivere hopper over dem |

Geometrien ligger i IFC-filens egne koordinater. Oppsettet følger CadCraft sine publiserte USD-konvensjoner for bygninger.
