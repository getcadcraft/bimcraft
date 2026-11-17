---
title: Het model naar een renderprogramma sturen
summary: Sla op wat de 3D-weergave toont als glTF-model (.glb) met de materialen, texturen en lampen, voor renderings- en visualisatieprogramma's die glTF lezen.
keywords: glb, gltf, gl transmission format, exporteren, renderen, render, visualisatie, realtime, archviz, materialen, texturen, lampen, lichten, asset, eigen asset
from: e62d57dc
---

{{ui:Voor renderen}} op de werkbalk slaat op wat de 3D-weergave toont als één **.glb**-bestand (glTF 2.0, het open formaat van de Khronos Group). Renderprogramma's die glTF lezen, openen het met de materialen en lampen van het model; Twinmotion noemt glTF en GLB onder de geometriebestanden die het importeert en behoudt de lichten ervan (documentatie van Epic, "Importing geometry in Twinmotion"): gebruik {{ui:Voor renderen}} en importeer daar het .glb-bestand. Er wordt niets geüpload: het bestand wordt op deze computer gemaakt.

## Opslaan

1. Open het IFC-model en stel de 3D-weergave in: verberg de verdiepingen, elementen of gekoppelde modellen die u niet wilt, en [kleur de materialen](topic:paint-materials) die u wilt zien.
2. Klik op {{ui:Voor renderen}} (of typ `GLB`).
3. Het bestand wordt gedownload als "<modelnaam>.glb". De statusbalk zegt hoeveel driehoeken, materialen en lampen het bevat.

## Wat het bestand bevat

- **Geometrie** van elk element dat de 3D-weergave toont, in meters, met Y omhoog (de eigen assen van glTF). Eén object per verdieping en materiaal, genoemd "Level 1 — Brick, red", zodat u in het renderprogramma een materiaal kunt kiezen en het door een eigen materiaal kunt vervangen.
- **Materialen:** elke kleur met de look die u er in [Renderen](topic:render) aan hebt gegeven (mat, satijn, glanzend, metaal, glas…), en elk geschilderd bibliotheekmateriaal met zijn kleur, ruwheid en **textuur** (de afbeelding zit in het bestand, geschaald naar zijn echte grootte: een baksteen is zo groot als een baksteen). Glas is doorzichtig.
- **Lampen:** elke lichtarmatuur die is ingeschakeld in Renderen › Lampen, als puntlicht of spotlicht, met zijn helderheid (lumen omgezet naar candela), kleur en stralingshoek.
- **Waar de bouwplaats ligt:** de breedte- en lengtegraad van de bouwplaats worden ter referentie in het bestand geschreven. Renderprogramma's hebben hun eigen zon: typ de plaats daar in.

## Wat er niet in zit

- De doorsnede (hele elementen gaan erin) en elementen die doorzichtig worden getoond (die worden weggelaten).
- Objecten per element (in plaats daarvan één object per verdieping en materiaal), IFC-eigenschappen, bumpmaps, opgeslagen weergaven en opgenomen wandelingen.
- Randen en de achtergrond.

## Enscape en andere plug-in-renderers

Enscape draait binnen een ander ontwerpprogramma en heeft geen bestand waarmee u een heel project kunt openen. Er zijn twee manieren:

- Open het **IFC**-bestand van het model (Bestand › Opslaan) in het programma waarin Enscape draait; de meeste lezen IFC. Kleuren komen mee; de bibliotheekmaterialen komen als hun kleuren.
- Breng een **klein onderdeel** (meubel, armatuur) in als eigen asset: isoleer het eerst en klik daarna op {{ui:Voor Enscape (.gltf)}}. De bibliotheek met eigen assets van Enscape toont .gltf-, .obj- en .fbx-bestanden, niet .glb; deze knop slaat dezelfde scène daarom op als één op zichzelf staand **.gltf**-bestand (de binaire data en de afbeeldingen zitten in het bestand; er is niets anders om mee te kopiëren). Enscape adviseert kleine assets (onder ongeveer 20.000 driehoeken).

:::note
In CadCraft Studio kan hetzelfde glTF-bestand (en een USD-bestand) ook worden opgeslagen vanuit {{ui:Renderen}} › Engine › **glTF-bestand** / **USD-bestand**, of direct worden geopend in een programma op deze computer: zie [De scène openen in een ander programma](topic:render-open-in). Een plug-in of live-koppeling voor Enscape of Twinmotion is nog niet beschikbaar. De FBX- en Datasmith-formaten hebben geen gepubliceerde specificatie, dus BimCraft schrijft ze niet; glTF is de open route.
:::
