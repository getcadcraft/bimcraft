---
title: Typepakketten: wandtypen delen als open bestanden
summary: Bewaar wandtypen met hun lagen, materialen, tags en classificatiecodes, en families, als één open bestand (gewone JSON of IFC), en voeg ze toe aan een ander project. Wandtypen van een IFC-bestand van een ander programma kunnen ook worden gelezen.
keywords: typepakket, typen, wandtype, delen, exporteren, importeren, bibliotheek, open formaat, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materialen, lagen, sjabloon, kantoorstandaard, families
from: e4c91331
---

## Wat u gaat doen

Neem uw wandtypen mee van het ene project naar het andere, of geef ze aan iemand die in een ander programma werkt. Een typepakket bevat elk wandtype met zijn lagen, diktes, materialen, kern, holtes, laagprioriteit, ontwikkelingsniveau, hoeveelheidsgegevens en classificatiecodes, en alle families die u toevoegt. Het is een open bestand: gewone JSON-tekst die iedereen kan lezen, of een IFC-bestand. Niets erin is gebonden aan een bedrijf, een land of een account.

## Typen uit een project opslaan

1. Open **Data** op de modelbalk en kies {{ui:Typepakketten}}.
2. Vink onder {{ui:Typen uit dit project opslaan}} de wandtypen aan die erin moeten. De eigen typen van het project zijn aangevinkt; een startertype kan worden toegevoegd en gaat erin als kopie. Vink families aan als u ze erin wilt hebben.
3. Typ een {{ui:Naam van het pakket}}.
4. {{ui:Opslaan als pakket (.json)}} downloadt een `.cctypes.json`-bestand. {{ui:Opslaan als IFC (.ifc)}} downloadt een IFC-bestand dat alleen typen bevat: elk wandtype als een IfcWallType met zijn materiaallaagset, materialen en classificatie, voor elk BIM-programma.

## Typen aan een project toevoegen

1. Kies in dezelfde dialoog {{ui:Een pakket of IFC-bestand openen…}} en kies een `.json`-pakket of een `.ifc`-bestand.
2. De dialoog toont wat het bestand bevat: elk wandtype met zijn dikte, aantal lagen en codes, de materialen en de families.
3. Kies wat er gebeurt met {{ui:Een type dat dit project al heeft}}: **De eigen van het project behouden**, **De pakketversie toevoegen als kopie** (die krijgt een nieuwe naam die eindigt op "(2)"), of **Vervangen (alleen als geen wand het gebruikt)**.
4. {{ui:Aan het project toevoegen}}. De dialoog toont wat is toegevoegd, gekopieerd, vervangen of behouden. Het is één stap om ongedaan te maken.

De nieuwe typen staan meteen in de typelijst van het wandgereedschap.

## Vloer-, dak- en plafondtypen

De lijst van typen om op te slaan bevat ook de vloer-, dak- en plafondtypen van het project en hun startertypen (gemarkeerd als Vloer, Dak, Plafond). Een pakket kan alle vier soorten bevatten; elk type noemt zijn IFC-klasse (IfcWallType, IfcSlabType, IfcCoveringType). Een vloer-, dak- of plafondtype dat elementen gebruiken, wordt niet vervangen door een pakket: wijzig het in de typeeditor.

## Eén type als bibliotheekitem

Vink precies één type aan en kies **Opslaan als bibliotheekitem…**. Het slaat een `.cctype.json`-bestand op: een bibliotheekitem van het soort Typen dat dat ene type bevat (zijn lagen, materialen, LOD en classificatiecodes). Upload het in de bibliotheek om het te delen. **Een pakket of IFC-bestand openen** leest zo'n item ook en voegt het type toe aan het project, net als een pakket.

## Goed om te weten

- Een IFC-bestand van een ander programma kan hier ook worden geopend. Elk van zijn wandtypen met materiaallagen wordt gelezen: de naam, de materialen en diktes van de lagen en eventuele holtes zijn van het bestand zelf. Welke lagen de kern zijn en wat elke laag doet (afwerking, constructie, isolatie) wordt geraden; het type wordt gemarkeerd als **(geraden)**, en u moet het controleren in de wandtypeeditor. Een wandtype zonder lagen wordt weggelaten en genoemd.
- Een materiaal dat het project al heeft, blijft zoals het is. Een nieuw materiaal waarvan de naam al bestaat, krijgt "(pakket)" achter zijn naam.
- Een type dat wanden gebruiken, wordt nooit vervangen door een pakket. Wijzig het in de wandtypeeditor, die zijn wanden correct verplaatst.
- Een code die op één wand is ingesteld, reist niet mee: die hoort bij die wand. Een code die op het type is ingesteld, wel.
- Een bestand met een veld dat het formaat niet heeft, een laag waarvan het materiaal ontbreekt, of iets dat geen gewone tekst is, wordt geweigerd, en het bericht zegt waar en waarom.
- Nog niet beschikbaar: vloer-, dak- en plafondtypen (die hebben in deze versie geen typen: elk heeft zijn eigen dikte), deur- en raamtypen anders dan families, en arceringen of kleuren uit het bestand van een ander programma.
