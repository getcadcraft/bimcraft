---
title: Velden van het paneel Eigenschappen
summary: Wat elk veld in het paneel Eigenschappen en in de paneelen Bestand, Tekening en Map betekent, en welke u kunt wijzigen.
keywords: eigenschappen, velden, attributen, globalid, guid, kopiëren, waarde kopiëren, alles kopiëren, csv, klembord, serienummer, tag, objecttype, regel, express-id, eigenschapsset, pset, hoeveelheden, schema, bestandspaneel
from: fe55b435
---

## Een IFC-element

Het bovenste deel van het paneel {{ui:Eigenschappen}} toont de soort van het element zonder het voorvoegsel "Ifc" (bijvoorbeeld "Door", "WallStandardCase", "FurnishingElement") en de naam ervan, of "Zonder naam".

| Veld | Betekenis | Bewerkbaar |
|---|---|---|
| Naam | De naam van het element, vaak de familie- en typenaam van de exporteur | Ja |
| Type | De naam van het type van het element, wanneer het er een heeft | Nee |
| Objecttype | Een vrije tekstbeschrijving van het type, die sommige exporteurs invullen | Ja |
| Tag | De tag of het merkteken van het element; veel exporteurs schrijven hier het element-ID | Ja |
| Beschrijving | Vrije tekst | Ja |
| GlobalId | Het permanente IFC-identificatiecode van 22 tekens van het element, dezelfde bij elke export van hetzelfde element | Nee |
| Regel | Het regelnummer (`#1234`) van het element in dit IFC-bestand. Het verandert tussen exports | Nee |

Hieronder staan de **eigenschapssets**, op naam gesorteerd:

- Elke set opent en sluit wanneer u op de naam klikt. De eerste drie staan open.
- Een set met "(type)" hoort bij het type van het element: "Typeigenschap: een wijziging hier geldt voor elk element van dit type."
- Hoeveelheidssets (lengten, oppervlakten, volumes, aantallen, gewichten) zijn alleen-lezen.
- Lijsten en opsommingswaarden worden getoond, alleen-lezen.
- Ja/Nee-waarden worden getoond als **Ja** of **Nee**.
- Getallen worden voor de weergave op vier decimalen afgerond. Lengten (een lengte-eigenschap of de lengte van een hoeveelheid) worden getoond in de {{ui:Eenheden}} die op de werkbalk is gekozen, met de eenheid ernaast. U kunt een nieuwe waarde typen in die eenheid of met een andere eenheidsaanduiding (2.4 m, 8'-0"): BimCraft schrijft het eigen getal van het bestand terug. Andere getallen worden getoond zoals het bestand ze heeft.
- Een lege waarde wordt getoond als *leeg*. Een bewerkte waarde is vetgedrukt met een blauwe balk ernaast.

## Een waarde kopiëren

Elke waarde in {{ui:Eigenschappen}} heeft een kleine kopieerknop ernaast: klik erop om die waarde exact zoals getoond op het klembord te zetten, bijvoorbeeld een GlobalId, een serienummer of een waarde van een eigenschapsset. Kopiëren start nooit een bewerking.

Bovenaan kopieert {{ui:Alles kopiëren}} elke waarde van het element als tekst, set voor set, en {{ui:Kopiëren als CSV}} kopieert ze als rijen van groep, eigenschap en waarde om in een spreadsheet te plakken. Lege waarden blijven behouden, zodat elk veld een rij heeft. Dit werkt hetzelfde voor een element van een ander geopend model; wanneer meer dan één model open is, begint de CSV met een kolom Model die het bestand noemt.

## Het bestandspaneel (IFC)

| Veld | Betekenis |
|---|---|
| Bestand, Grootte | Het bestand dat u opende |
| Schema | De IFC-versie, zoals IFC2X3 of IFC4 |
| Project | De naam en lange naam van het project |
| Fase | De projectfase, als de exporteur er een heeft geschreven |
| Geëxporteerd vanuit | Het exporterende programma, uit de bestandskop |
| Auteur | De auteur in de bestandskop |
| Geëxporteerd | De datum en tijd in de bestandskop |
| Elementen | Hoeveel elementen met een vorm zijn getekend |
| Driehoeken | Hoeveel driehoeken hun vormen maken; een maat voor hoe zwaar het model is |

## Het bestandspaneel (project- en familiebestanden)

| Veld | Betekenis |
|---|---|
| Soort | Project, Projectsjabloon, Familie of Familiesjabloon |
| Opgeslagen in | De uitgave die het bestand het laatst heeft opgeslagen |
| Build | De exacte build van die uitgave |
| Gelezen | Hoeveel van het bestand BimCraft heeft gelezen, uit de grootte ervan |

## Het tekeningpaneel (DWG en DXF)

| Veld | Betekenis |
|---|---|
| Formaat | De uitgave waarin de tekening is opgeslagen, met de formaatcode, zoals AC1032 |
| Eenheden | De invoegeenheden van de tekening, wanneer ingesteld |
| Entiteiten | Hoeveel objecten zijn gelezen |
| Lagen | Hoeveel lagen |
| Bladen | Hoeveel bladen (indelingen), of Geen |
| Gekoppelde tekeningen | Hoeveel van de gekoppelde tekeningen zijn gevonden en geladen |
| Apparatuur | Hoeveel gelabelde apparatuuritems op bladen staan |

## Het mappaneel

| Veld | Betekenis |
|---|---|
| Map, Bestanden, Grootte | De map die u opende, hoeveel bestanden erin staan en hun totale grootte |
| Modellen | Project- en familiebestanden, elk met zijn back-ups één keer geteld |
| CAD-tekeningen, IFC-modellen | Hoeveel van elk |
| Problemen | Hoeveel modelkopieën onvolledig of onleesbaar zijn, of Geen |
