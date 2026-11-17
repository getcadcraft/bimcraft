---
title: Een hoogte plaatsen en de weergave ervan openen
summary: Plaats een hoogtemarkering op de plattegrond, richt haar op de manier waarop het gebouw eruitziet, zoek daarna de tekening in de projectbrowser, bewerk erin en plaats ze op een blad. Stappen voor de lintindelingen en voor de klassieke indeling.
keywords: hoogte, hoogteweergave, hoogtemarkering, hoogtetag, hoogte plaatsen, nieuwe hoogte, hoogte maken, buitenhoogte, zijaanzicht, vooraanzicht, weergave vanaf een punt, waar is mijn hoogte, hoogte openen, hoogte op een blad, hoogte spiegelen, hoogte hernoemen, noordhoogte, weergaven tegelen, splitsweergave, plattegrond en 3D naast elkaar
from: a7cfd2b9
---

## Wat u gaat doen

Maak een eigen hoogte: een tekening van het gebouw, gezien vanaf een punt dat u kiest, en in de richting die u kiest. Dit kost twee klikken op een plattegrond. De tekening komt daarna in de lijst met de andere hoogten van het gebouw te staan.

:::note
De vier zijden zijn er al. Elk gebouw heeft de hoogten Noord, Oost, Zuid en West in de {{ui:Project browser}} onder {{ui:Elevations}}, zonder dat u iets plaatst. Plaats er zelf een wanneer u een weergave vanaf een andere plek wilt: recht op een hoekige vleugel, vanuit een binnenplaats, of van één wand binnen een ruimte.
:::

## Waar het gereedschap staat

- Lintindelingen: {{ui:View}} › **Maken** › {{ui:Elevation}}.
- Klassieke indeling: schakel {{ui:Draw}} in en kies daarna {{ui:Build}} › {{ui:Elevation}}.
- Elke menustijl: de opdracht heet Hoogte. Het opdrachtenpalet vindt haar, en op de opdrachtregel typt u ELEVATION.

## Stappen

1. Kies {{ui:Elevation}}. Een hoogte wordt op een plattegrond geplaatst. Als u in de 3D-weergave was, toont BimCraft de plattegrond van de verdieping waarop u was. De aanwijzer zegt **Klik waar de hoogte staat**.
2. Klik waar de weergave vandaan wordt genomen. Voor een buitenhoogte klikt u buiten het gebouw, een stukje van de wand af die u wilt zien.
3. De aanwijzer zegt nu **Klik op de kijkrichting**. Beweeg richting het gebouw: een pijl toont de richting, en de korte lijn die door uw eerste klik loopt, is de rand waarvandaan de weergave kijkt. Klik.
4. Op de plattegrond verschijnt een cirkel met een nummer en een aanwijzer. Dat is de hoogtemarkering. De eerste is 1, de volgende 2.
5. Druk op Esc om af te ronden, of ga door en plaats een andere.

Het plaatsen van een markering is één stap: {{key:Mod+Z}} maakt het ongedaan.

## De tekening openen

De plattegrond blijft voor u staan na de tweede klik. De tekening staat in de {{ui:Project browser}}:

1. Open {{ui:Elevations}}. Uw hoogte staat na de vier zijden als **Hoogte 1**.
2. Klik op de potloodknop {{ui:Edit in this view}} op de rij om de tekening te zien en erin te werken: muren, deuren, ramen en niveaus verplaatsen, notities en maatvoering toevoegen. Zie [Bewerken in aanzichten en doorsneden](topic:edit-in-elevations).
3. Klik op de rij zelf om de tekenset te openen, of voeg de weergave toe aan een blad van uzelf. Zie [Weergaven en bladen](topic:views-and-sheets).

In de klassieke indeling staat de projectbrowser in het linkerpaneel terwijl {{ui:Draw}} aan staat. In de lintindelingen is het het tabblad {{ui:Project Browser}} onder Eigenschappen.

## Wat de weergave toont

- Alles voor de markering, tot waar het gebouw reikt. Niets erachter.
- De niveaus, met hun namen en hoogten.
- Staat de markering binnen het gebouw, dan wordt wat erin staat daar doorgesneden, zoals een doorsnede dat doet. Voor een schone buitenhoogte: sta buiten.

## Aanpassen

Selecteer de markering op de plattegrond (klik op haar cirkel met {{ui:Select}}). Eigenschappen heeft:

- {{ui:Label}}: het nummer of een eigen naam, tot 8 tekens.
- {{ui:Flip the view}}: kijk vanaf dezelfde plek de andere kant op.
- {{ui:Look as far as}}: hoe ver vóór de markering de weergave reikt. 0 toont alles.

Druk op Delete om de markering en de tekening te verwijderen. Ongedaan maken zet beide terug.

:::tip
Om de plattegrond en de 3D-weergave tegelijk te zien terwijl u werkt, gebruikt u in de lintindelingen {{ui:View}} › **Vensters** › {{ui:Tile Views}}, of in de klassieke indeling {{ui:Split}}. Klikken op een weergavetabblad brengt u terug naar één weergave.
:::

## Beperkingen

- Een markering kan op de plattegrond nog niet worden versleept of gedraaid. Verwijder haar en plaats haar opnieuw, of gebruik {{ui:Flip the view}}.
- In de lijst met weergaven die u aan een blad kunt toevoegen, staat een eigen hoogte bij de doorsneden.
- Deur- en raamtags worden getekend op de vier zijhoogten, niet op een hoogte die u zelf hebt geplaatst.

## In de IFC

De markering wordt in het bestand opgeslagen als een IfcAnnotation met de naam "Elevation 1" en het objecttype "Elevation marker", in het niveau waarop hij is geplaatst. Een ander programma toont hem als annotatie; de tekening zelf maakt BimCraft elke keer opnieuw uit het model.
