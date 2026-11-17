---
title: Het model exporteren als Collada of voor Google Earth
summary: Schrijf de geopende IFC-modellen als Collada-bestand (.dae) voor Blender en andere 3D-programma's, of als Google Earth-pakket (.kmz) geplaatst waar het model op de kaart staat.
keywords: collada, dae, kmz, kml, google earth, blender, exporteren, geolocatie, georeferentie, breedtegraad, lengtegraad, locatie, 3D-programma's
from: 81cfec09
---

{{ui:Collada}} op de werkbalk (of {{ui:Collada exporteren (.dae, .kmz)…}} in het menu Bestand van de menu- en lintstijlen) schrijft wat open is als Collada 1.4.1: elk model dat getoond wordt, samengevoegde modellen op de plaats waar u ze hebt gezet.

## Exporteren

1. Kies {{ui:Collada}}.
2. Kies het formaat:
   - {{ui:Collada-bestand (.dae), voor Blender en andere 3D-programma's}}.
   - {{ui:Google Earth-pakket (.kmz): het model geplaatst waar het op de kaart staat}}. Alleen beschikbaar wanneer het model een locatie heeft.
3. Kies de opties en klik daarna op {{ui:Exporteren}}. Het bestand wordt gedownload en de statusbalk toont hoeveel elementen erin zijn opgenomen.

| Optie | Wat het doet |
|---|---|
| {{ui:Locatie in het bestand schrijven}} | Voegt de breedtegraad, lengtegraad, hoogte en koers van de oorsprong van het bestand toe aan het .dae |
| {{ui:Hoogte}} | {{ui:Op de grond: niveau 0 van het model ligt op het terrein}}, of {{ui:De eigen hoogte van het model boven zeeniveau}} |
| {{ui:Ruimten en spaces opnemen}} | Ruimten worden ook opgenomen (standaard niet) |
| {{ui:Verborgen elementen opnemen}} | Verborgen elementen worden ook opgenomen (standaard alleen wat u ziet) |

## Wat er in het bestand zit

| In het model | In het Collada-bestand |
|---|---|
| Gebouw, verdiepingen | Geneste knooppunten, verdiepingen in volgorde van hoogte; elementen op geen enkele verdieping onder "Unplaced" |
| Elk element | Eén knooppunt met een eigen mesh, genoemd zoals in het model (de naam, anders de klasse en tag) |
| Klasse, GlobalId, vooraf gedefinieerd type | In de extra gegevens van het knooppunt (profiel IFC), met de exacte naam (profiel ModelCraft) |
| Kleuren | Materialen, met transparantie |
| Eenheden en assen | Meters, Z omhoog. Niveau 0 van het model op de voorgrond ligt op hoogte 0 |

Het model blijft over het terrein dicht bij de oorsprong, zodat programma's die met enkele precisie werken het zonder trillen tonen. ModelCraft schrijft zijn Collada-bestanden met dezelfde schrijver en opent deze bestanden met hun elementnamen.

## Waar de locatie vandaan komt

Het model op de voorgrond geeft de locatie, op dezelfde manier waarop {{ui:Meten}} de breedte- en lengtegraad van een punt berekent:

- Een kaartconversie (IFC4 IfcMapConversion, of de IFC2X3-eigenschapssets) via het coördinatenstelsel van het model. Een stelsel dat u voor het model hebt gekozen, gaat voor het stelsel dat in het bestand is genoemd.
- Anders de breedte- en lengtegraad van de bouwplaats (benaderd: voldoende over een bouwplaats).

De koers wordt gemeten, niet aangenomen: de rotatie van de kaart, het ware noorden en de meridiaanconvergentie van de kaart worden meegenomen. Om een model een locatie te geven, gebruikt u {{ui:Oorsprong op de kaart…}} in Meten.

## In andere programma's

- **Google Earth** leest het .kmz: het model verschijnt op de locatie, naar het noorden gedraaid. Een gewoon .dae bevat geen plaats waaruit Google Earth een locatie leest; gebruik daarom het .kmz.
- **Blender** (4.x en eerder): File, Import, Collada (.dae). Elk element komt binnen als eigen object met zijn materiaal. De locatie wordt bewaard in de extra gegevens van het bestand, die Blender niet leest. Blender 5.0 heeft de ingebouwde Collada-importeur verwijderd; gebruik daar in plaats daarvan {{ui:USD}} of de glTF-export, of open het .dae in Blender 4.5 en sla het op als .blend.

Onze tests controleren elk bestand tegen het Collada 1.4.1-schema en lezen het terug met een onafhankelijke Collada-lezer. We hebben het niet in Blender of Google Earth geopend.
