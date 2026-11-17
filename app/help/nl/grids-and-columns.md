---
title: Rasters en kolommen
summary: Leg rasterlijnen aan met genummerde en letterbolletjes, op afstand of één voor één, teken wanden en kolommen erlangs, en zie ze op plattegronden, gevels en doorsneden.
keywords: raster, rasters, rasterlijn, kolomraster, as, assen, bolletje, rasterlijn, structureel raster, 1 2 3, A B C, kolom, kolommen, pijler, paal, snap, IfcGrid, IfcColumn
from: bf99a8f7
---

## Wat u gaat doen

Zet een gebouw uit op een raster en teken daarna wanden en plaats kolommen langs de lijnen.

## Een heel raster plaatsen

1. Schakel {{ui:Tekenen}} in en kies {{ui:Build}} › {{ui:Raster}}.
2. Klik op {{ui:Een raster plaatsen…}}. Geef aan hoeveel **genummerde lijnen** (1, 2, 3…) en **letterlijnen** (A, B, C…) u wilt en hoe ver ze uit elkaar liggen. Typ één afstand, of meerdere gescheiden door komma's voor ongelijke traveeën (bijvoorbeeld `20', 24', 20'`). {{ui:Voorbij de laatste lijnen}} is hoe ver elke lijn doorloopt voorbij de buitenste lijnen van de andere soort, en {{ui:Gedraaid (graden)}} draait het hele raster.
3. Klik op {{ui:Plaatsen}} en klik daarna waar het eerste kruispunt (1 / A) komt. De voorvertoning volgt de aanwijzer.

Genummerde lijnen lopen omhoog over de plattegrond en worden er overheen verdeeld; letterlijnen lopen dwars over de plattegrond en worden er omhoog verdeeld. Letters slaan I en O over, zoals op tekeningen, zodat ze nooit als 1 en 0 worden gelezen.

## Rasterlijnen één voor één tekenen

Klik met {{ui:Raster}} ingeschakeld waar een lijn begint en waar hij eindigt. Hij krijgt het volgende label van de lijnen waarlangs hij loopt (na 3 komt 4; na B komt C). Druk op {{key:Esc}} om te stoppen.

## Een rasterlijn wijzigen

Klik met {{ui:Raster}} ingeschakeld op een lijn om hem te selecteren. Typ een nieuw {{ui:Label}} en druk op {{key:Enter}}, of klik op {{ui:Deze lijn verwijderen}} (of druk op {{key:Delete}}). Met {{ui:Bolletjes}} komen de bolletjes aan beide uiteinden, aan het begin of het einde van elke lijn, of nergens. Elke wijziging is één stap: {{key:Mod+Z}} neemt die terug.

## Langs het raster tekenen

Het gereedschap {{ui:Wand}}, het gereedschap {{ui:Kolom}} en de andere tekengereedschappen snappen naar rasterlijnen en naar de plaats waar ze kruisen (de snapmarkering is een klein cirkeltje met een kruis).

**Kolommen:** kies {{ui:Build}} › {{ui:Kolom}}, kies de vorm (rechthoekig of rond), het formaat, en of de kolom **tot de verdieping erboven** loopt of tot een vaste hoogte, en klik daarna. {{ui:Op elke rasterkruising}} plaatst een kolom op elke kruising die er nog geen heeft. Klik op een kolom om de vorm, het formaat of de hoogte te wijzigen in {{ui:Eigenschappen}}; {{key:Delete}} verwijdert hem. Kolommen die tot de verdieping erboven lopen, volgen die wanneer de hoogte ervan verandert.

## Wat u ziet

- Het raster op de plattegrond van elke verdieping, met een bolletje en zijn label aan de uiteinden van elke lijn.
- Rasterlijnen in de tekenset: op de plattegronden, en op gevels en doorsneden waar een lijn van de kant gezien wordt, met zijn bolletje boven het gebouw. Zie [Gevels, doorsneden en bladen](topic:sheets).
- In het IFC-bestand: één raster voor het gebouw (IfcGrid, met de genummerde lijnen in de ene lijst en de letterlijnen in de andere), en kolommen als IfcColumn met hun formaat, hoogte en hoeveelheden. Andere BIM-programma's tonen beide.

:::note
Een raster dat uit een bestand van een ander programma komt, wordt getoond en de gereedschappen snappen erop, maar de lijnen kunnen hier niet worden gewijzigd.
:::
