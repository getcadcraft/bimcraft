---
title: Binnenaanzichten
summary: Maak één blad met de vier wanden van een ruimte van binnenuit, met maatvoering en tags, en sla het op als PDF.
keywords: binnenaanzicht, ruimte, wand, kast, keuken, aanzicht, blad, PDF, maatvoering, tag, space, A-501
from: 1e3a70a8
---

## Wat u gaat doen

Selecteer een ruimte en krijg één blad dat de vier wanden laat zien zoals u ze van binnenuit zou zien. Het is gemaakt voor keukens, badkamers en elke ruimte waar u de kasten, deuren en ramen op elke wand wilt zien.

## Het blad maken

1. Selecteer de ruimte. Klik in de plattegrond met {{ui:Tekenen}} aan binnen de ruimte. Selecteer in de 3D-weergave of de modelboom de ruimte (een IfcSpace).
2. Klik in **Eigenschappen** op {{ui:Binnenaanzichten…}}.
3. Het dialoogvenster opent met het blad.
4. Klik op {{ui:PDF downloaden}} om het op te slaan. Het bestand heet "<file> — Interior elevations — <room>.pdf" en is een vector-PDF.
5. Klik op {{ui:Sluiten}} wanneer u klaar bent.

## Wat het blad toont

Het blad heeft vier weergaven, twee bij twee, op één schaal: de grootste standaardschaal die past. Het zijn **Noordwand**, **Oostwand**, **Zuidwand** en **Westwand**. Een titelblok bevat het bladnummer A-501, de titel "Binnenaanzichten — " met het nummer en de naam van de ruimte, het project en de datum.

Elke weergave is midden door de ruimte gesneden en kijkt naar de wand aan die kant. De zijwanden, en alles dat erin is gesneden, zoals een raam, worden rond de weergave als grijze doorsnedearcering getoond. De weergave stopt net achter het wandvlak, zodat niets achter de wand zichtbaar is.

Elke weergave bevat:

- de breedte van de ruimte eronder, van binnenvlak tot binnenvlak;
- de hoogte van de ruimte ernaast, van de vloer tot het niveau erboven;
- een vierkante tag op elke deur en een zeshoekige tag op elk raam in die wand, met hun markering (D1, W1 enzovoort);
- een ronde tag met het itemnummer op elk bibliotheekitem dat voor die wand is geplaatst: kasten, vaste voorzieningen en apparatuur.

:::note
De weergaven worden elke keer dat u het dialoogvenster opent uit het model gemaakt, zodat ze altijd overeenkomen. Verplaats een kast en open het dialoogvenster daarna opnieuw.
:::

## Op uw eigen bladen

Elke wand van elke ruimte is ook een weergave die u op een blad kunt zetten dat u maakt: klik in de projectbrowser op {{ui:Nieuw blad}} en voeg daarna onder **Binnenaanzichten** "101 Keuken — Noordwand" en de andere toe. Die komt met dezelfde maatvoering en tags.

## Nog niet beschikbaar

Binnenaanzichten in de gegenereerde tekenset (ze komen uit de **Eigenschappen** van de ruimte of uit uw eigen bladen), ruimten die niet overwegend rechthoekig zijn (de weergave kijkt vierkant naar elke kant van de doos van de ruimte), tekenwerk, notities of uw eigen maatvoering erop, en het kiezen welke wanden worden getoond, zijn nog niet beschikbaar. Zie [Wat nog niet beschikbaar is](topic:not-built-yet).
