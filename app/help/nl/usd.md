---
title: Het model exporteren als USD
summary: Schrijf de geopende IFC-modellen als USD voor renderen, scèneopbouw en andere 3D-programma's, met de IFC-klasse, GlobalId en eigenschappen van elk element.
keywords: usd, usda, usdc, usdz, openusd, exporteren, ifc, globalid, eigenschappen, verdiepingen, disciplines, scèneopbouw, archviz, renderen
from: 2be5f7b8
---

{{ui:USD}} op de werkbalk schrijft wat er open is (elk model, gefedereerde modellen waar u ze hebt geplaatst) als één USD-bestand.

## Exporteren

1. Kies {{ui:USD}} op de werkbalk.
2. Kies {{ui:Tekst (.usda)}}, {{ui:Binair (.usdc)}} of {{ui:Pakket (.usdz)}}.
3. Het bestand wordt gedownload. In de statusbalk staat hoeveel elementen erin zijn opgenomen.

## Wat er in het bestand zit

| In het IFC-model | In het USD-bestand |
|---|---|
| Terrein, gebouw, verdiepingen | Geneste groepen, verdiepingen in volgorde van hoogte |
| Elk element | Eén prim onder zijn verdieping en discipline (Architecture, Structure, MEP, Furnishing, Site, Spaces, Other), met zijn geometrie als mesh |
| Klasse, GlobalId, naam, type, tag | Attributen met de namen `ifc:class`, `ifc:globalId`, `ifc:name` enzovoort |
| Eigenschaps- en hoeveelheidssets | Één attribuut per eigenschap; lengten, oppervlakten en volumes in meter, vierkante meter en kubieke meter |
| Kleuren | Materialen (met transparantie) |
| Ruimten | Behouden, gemarkeerd als hulpgeometrie zodat renderers ze overslaan |

De geometrie staat op de eigen coördinaten van het IFC-bestand. De indeling volgt de vastgelegde USD-conventies van CadCraft voor gebouwen.
