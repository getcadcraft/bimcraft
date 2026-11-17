---
title: Leidingen en kanalen dimensioneren, kabelvulling en verlichting controleren
summary: Controleer de maten van toevoerleidingen en kanalen met drukverlies, leg kabels door kabelgoten en kabelbuizen en bekijk hun vulling, en bereken de verlichtingssterkte in ruimtes uit IES- of EULUMDAT-bestanden. Standaardwaarden zijn gelabeld; typ de waarden van de geldende norm.
keywords: dimensionering, leidingdimensionering, kanaaldimensionering, drukverlies, armatuureenheden, belasting, hunter, hazen-williams, snelheid, wrijving, gelijke wrijving, ventilatordruk, smoorklep, kritiek pad, kabelgoot, kabelbuis, vulling, kabelschema, ies, ldt, eulumdat, fotometrie, verlichtingssterkte, lux, uniformiteit, verlichtingsberekening, vermogensdichtheid, mep, berekeningen, problemen
from: 9cb90815
---

## Wat u gaat doen

Teken de leidingen, kanalen, kabelgoten en kabelbuizen zoals gewoonlijk, en open daarna het **Berekeningen**-paneel. Elk tabblad leest het model, toont een tabel en somt wat niet klopt op als Problemen in het ⚠-paneel. Wanneer een maat een probleem zou oplossen, past **Maten toepassen** de stukken aan in één stap die ongedaan kan worden gemaakt.

Dit zijn hulpmiddelen bij het tekenen. Elke standaardwaarde staat op het scherm vermeld, en geen ervan is een normentabel: typ de getallen uit de norm waarop u ontwerpt, en laat het resultaat controleren door de ingenieur die ervoor instaat.

## Leidingen

1. Kies de **systeem**-sleutel (koud water is `cw`, warm water `hw`).
2. Stel de hoogste snelheid in en, als u de druk wilt controleren, de druk aan de bron en de kleinste druk die een armatuur nodig heeft.
3. Klik op {{ui:Controleer}}.

Elke leiding draagt de vraag van de armatuureenheden erboven. De vraag komt uit een curve van armatuureenheden tegen debiet, op de manier die Hunter beschreef. **De ingebouwde curve is een voorbeeld, geen normentabel**; de Problemen zeggen dat tot u uw eigen curve invoert. Wrijving is Hazen–Williams, fittingen zijn verliescoëfficiënten, en een stijging kost 9.8 kPa per meter. De armatuureenheden van een armatuur komen uit zijn soort, of uit het getal dat u instelt met het assistenthulpmiddel `loads_set`.

## Kanalen

Stel het systeem in, de wrijvingsnorm (gelijke wrijving) of een snelheid, en eventueel het verlies van een batterij, filter of geluidsdemper. Eindapparaten halen hun luchtdebiet uit `loads_set` op de diffusor. De tabel toont per stuk snelheid en wrijving, de **ventilatordruk** op het kritieke pad, en de druk die de smoorklep van elk ander eindapparaat moet opnemen. Verliezen van fittingen gebruiken afgeronde standaardcoëfficiënten, geen fittingdatabase.

## Kabelgoten en kabelbuizen

Teken ze met het kanaalgereedschap: de systemen **Kabelgoot** en **Kabelbuis** worden opgeslagen als kabeldragers, zodat andere programma's ze lezen als goten en buizen. Plak in het tabblad Kabels de kabellijst (tag, buitendiameter in mm, aantal, van, naar). `from` en `to` zijn de tag van een stuk apparatuur of een punt `x,y,z` in millimeters. Kabels volgen de kortste doorlopende route door de goten en buizen; elke route toont zijn vulling tegen de grenzen die u invoert, en het schema wordt als CSV opgeslagen, met een lengte die een reserve-percentage en de uiteinden bevat.

## Verlichting

Geef elke armatuur zijn IES- (LM-63) of EULUMDAT-bestand met het assistenthulpmiddel `photometry_set`. Typ de doelen, de rasterafstand en de hoogte van het werkvlak. Het resultaat is alleen **directe** verlichtingssterkte: geen onderlinge reflectie en geen schaduwen, dus het is een ondergrens in een ruimte.

## Brandsprinklers

De add-on **Brandsprinklers** heeft een eigen tabblad; zie de help daarvan.
