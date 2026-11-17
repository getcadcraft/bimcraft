---
title: Een nieuw gebouw starten
summary: Maak een leeg gebouwmodel met zijn niveaus, teken de wanden, plaats items uit de bibliotheek en sla het op als IFC.
keywords: nieuw, nieuw gebouw, leeg, blanco, vanaf nul beginnen, sjabloon, niveaus, verdiepingen, vloeren, maken, model
from: 68786865
---

## Wat u gaat doen

Start een gebouwmodel vanaf niets, in plaats van er een te openen. BimCraft maakt een leeg IFC-model met een project, een terrein, het gebouw en zijn niveaus. U kunt apparatuur en meubilair uit de bibliotheek op de niveaus plaatsen en het opslaan als IFC-bestand.

:::note
Wanden kunt u nu tekenen: zie [Wanden tekenen](topic:draw-walls). Deuren, ramen, vloeren en daken zijn nog niet beschikbaar.
:::

## Stappen

1. Klik op {{ui:Nieuw gebouw}} onder **Een bestand of map openen**, of op de startpagina.
2. Typ de **Gebouwnaam**.
3. Kies hoeveel **Niveaus** het heeft (1 tot 200).
4. Typ de **Niveauhoogte**, vloer tot vloer: bijvoorbeeld `10'-0"`, `10'6"` of `3000 mm`. Een getal zonder eenheid is voet in de VS, elders millimeter.
5. Alle velden zijn al ingevuld, dus u kunt ze allemaal laten staan. Daaronder staat in het vak wat u meekrijgt: de eenheden, het **Wandtype** dat het hulpmiddel Wand eerst tekent (kies desgewenst een ander uit de lijst) en het eerste blad.
6. Klik op {{ui:Maken}}. De niveaus worden op elkaar gestapeld vanaf 0, elk één niveauhoogte boven het vorige, en heten Niveau 1, Niveau 2, enzovoort. Ze verschijnen in de modelboom, en de plattegrond van Niveau 1 opent naast de 3D-weergave met {{ui:Tekenen}} aan.
7. Teken de wanden: klik op {{ui:Wand}} en daarna op twee punten. Zie [Wanden tekenen](topic:draw-walls). Hernoem niveaus of wijzig hun hoogten in het paneel **Niveaus**.
8. Plaats items: zie [Apparatuur en meubilair uit de bibliotheek plaatsen](topic:place-from-library). De plaatsingsbalk toont elk niveau.
9. Klik op {{ui:Opslaan als IFC}}. Het bestand krijgt de naam van het gebouw, bijvoorbeeld `Smith's house.ifc`.

## Goed om te weten

- Het model wordt opgeslagen in millimeters, als IFC4. Andere BIM-programma's openen het.
- Een nieuw gebouw krijgt één blad, **A-101**, met de plattegrond van het laagste niveau: A3 op 1:100 als u met metrische eenheden werkt, Tabloid op 1/8" = 1'-0" anders. Het is leeg tot de eerste wand en toont dan de plattegrond terwijl u tekent. Open het onder **Bladen** in de projectbrowser om papier, schaal of titel te wijzigen, weergaven toe te voegen of het te verwijderen. Een gebouw dat uit een sjabloon is gestart, krijgt in plaats daarvan de bladen van de sjabloon.
- Om te wijzigen waarmee elk nieuw gebouw begint (het wandtype voor metrische projecten, de niveaus, het eerste blad, het hulpmiddel dat na Maken actief is), zie [Standaardbeleid](topic:default-policies).
- Er hoeft niets vooraf te worden ingesteld voor de eerste wand. Het wandtype, de niveauhoogten, de eenheden en het blad kunnen allemaal later worden gewijzigd.
- **Verdiepingen** in het linkerpaneel toont alleen niveaus met iets erop; de modelboom toont ze allemaal.
- Totdat u opslaat, telt het nieuwe gebouw als niet-opgeslagen werk. BimCraft vraagt voordat u een ander bestand opent of afsluit, en bewaart een kopie in deze browser voor het geval het tabblad sluit.
