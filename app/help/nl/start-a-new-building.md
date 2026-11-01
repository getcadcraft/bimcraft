---
title: Een nieuw gebouw beginnen
summary: Maak een leeg gebouwmodel met zijn niveaus, teken de wanden, plaats items uit de bibliotheek en sla het op als IFC.
keywords: nieuw, nieuw gebouw, leeg, helemaal opnieuw beginnen, sjabloon, niveaus, verdiepingen, vloeren, maken, model
from: 546b8ae8
---

## Wat u doet

U begint een gebouwmodel vanaf nul in plaats van er een te openen. BimCraft maakt een leeg IFC-model met een project, een terrein, het gebouw en de niveaus ervan. U kunt apparatuur en meubilair uit de bibliotheek op de niveaus plaatsen en het opslaan als IFC-bestand.

:::note
Wanden kunt u nu tekenen: zie [Wanden tekenen](topic:draw-walls). Deuren, ramen, vloeren en daken volgen.
:::

## Stappen

1. Klik op {{ui:Nieuw gebouw}} onder **Een bestand of map openen**, of op de startpagina.
2. Typ de **Naam van het gebouw**.
3. Kies hoeveel **Niveaus** het heeft (1 tot 200).
4. Typ de **Niveauhoogte**, van vloer tot vloer: bijvoorbeeld `10'-0"`, `10'6"` of `3000 mm`. Een los getal is in de VS feet en elders millimeters.
5. Klik op {{ui:Maken}}. De niveaus worden vanaf 0 gestapeld, elk een niveauhoogte boven het vorige, en heten Niveau 1, Niveau 2 enzovoort. Ze staan in de modelboom, en de plattegrond van Niveau 1 opent naast de 3D-weergave met {{ui:Tekenen}} aan.
6. Teken de wanden: zie [Wanden tekenen](topic:draw-walls). Hernoem niveaus of wijzig hun hoogte in het paneel **Niveaus**.
7. Plaats items: zie [Apparatuur en meubilair uit de bibliotheek plaatsen](topic:place-from-library). De plaatsingsbalk toont alle niveaus.
8. Klik op {{ui:Opslaan als IFC}}. Het bestand is genoemd naar het gebouw, bijvoorbeeld `Smith's house.ifc`.

## Goed om te weten

- Het model wordt opgeslagen in millimeters, als IFC4. Andere BIM-programma's openen het.
- **Verdiepingen** in het linkerpaneel toont alleen niveaus waarop iets staat; de modelboom toont ze allemaal.
- Totdat u opslaat, geldt het nieuwe gebouw als niet-opgeslagen werk. BimCraft vraagt het eerst als u een ander bestand opent of weggaat, en bewaart een kopie in deze browser voor het geval het tabblad sluit.
