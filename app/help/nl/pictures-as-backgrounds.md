---
title: Een afbeelding onder het plan zetten
summary: Plaats een PNG-, JPEG- of WebP-afbeelding (een gescand plan, een schets, een foto van de bouwplaats, een luchtfoto) onder het plan van een verdieping of op een verticaal vlak, schaal hem aan de hand van twee punten, verplaats, draai, vervaag en vergrendel hem, bekijk hem in 3D en in de plan-PDF, en bewaar hem naast het model in een bundel.
keywords: afbeelding, beeld, achtergrond, PNG, JPEG, WebP, scan, schets, foto, luchtfoto, situatietekening, schaal, doorzichtigheid, vergrendelen, onderlegger, overtrekken
from: e3c78d1f
---

## Een afbeelding plaatsen

Zet {{ui:Tekenen}} aan, ga naar de verdieping, en kies {{ui:Afbeelding}} in het menu {{ui:Build}}. Kies dan {{ui:Afbeelding invoegen…}} en kies een PNG-, JPEG- of WebP-bestand. Het wordt in uw browser gelezen en nooit geüpload. Het verschijnt onder het plan, passend in de weergave, en de werkbalk zegt dat het nog niet geschaald is. Alles wat u tekent staat erboven.

## De schaal instellen

Kies {{ui:Schaal}}, klik op twee punten op de afbeelding waarvan u de echte afstand kent (twee uiteinden van een wand op een gescand plan, een maat die op een schets staat), typ dan de afstand en druk op {{key:Enter}}. De afbeelding wordt groter of kleiner rond het eerste punt dat u aanklikte. {{key:Esc}} annuleert.

## Een gekopieerd gebied plakken

In MarkupCraft kopieert {{ui:Gebied kopiëren}} een deel van een PDF-blad als afbeelding. Terug in BimCraft, met het plan van een verdieping zichtbaar, drukt u op {{key:Ctrl+V}} (of {{ui:Plakken}} in het menu {{ui:Bewerken}}): het gebied komt op het plan als afbeelding, gecentreerd waar de aanwijzer staat (of in het midden van de weergave). Wanneer het blad een tekeningschaal had, komt het binnen op de ware grootte, zodat een wand erop even lang is als uw wanden. Zonder schaal komt het binnen op papierformaat en start {{ui:Schaal}}, zodat u twee punten kunt aanklikken en hun afstand kunt typen. Een gebied dat als overlay is gekopieerd, begint met de doorzichtigheid waarmee het gekopieerd is. Het is één stap ongedaan te maken en wordt bewaard als elke andere afbeelding.

Plakken neemt wat u als laatste hebt gekopieerd: een gekopieerd gebied, of iets dat u in BimCraft hebt gekopieerd. {{key:Ctrl+V}} plakt ook elke andere PNG-, JPEG- of WebP-afbeelding op uw klembord, geplaatst zoals {{ui:Afbeelding invoegen…}} en nog niet geschaald. Een gekopieerd gebied wordt zes uur onthouden.

## Verplaatsen, draaien, vervagen, vergrendelen

{{ui:Verplaatsen}} neemt een basispunt op de afbeelding en daarna de plek waarheen hij moet. {{ui:Draaien}} neemt een hoek in graden, rond het midden van de afbeelding. {{ui:Doorzichtigheid}} vervaagt hem zodat uw lijnen opvallen. {{ui:Vergrendelen}} houdt hem tegen bewegen tijdens het tekenen; een vergrendelde afbeelding laat u nog wel de doorzichtigheid wijzigen en hem verbergen. Elke wijziging is één stap ongedaan te maken.

## Meerdere afbeeldingen, meerdere verdiepingen

Een afbeelding hoort bij de verdieping waarop hij is geplaatst en wordt getoond op het plan en het plafondplan van die verdieping. Klik op een afbeelding om eraan te werken, of kies hem in de lijst. {{ui:Verbergen}} zet hem uit zonder hem te verwijderen; {{ui:Verwijderen}} (of {{key:Delete}}) haalt hem uit het model.

## Afbeeldingen in de 3D-weergave

Elke afbeelding staat ook in de 3D-weergave als vlak: een afbeelding op het plan ligt op zijn verdieping, een afbeelding op een verticaal vlak staat boven zijn snijlijn. Hij wordt over het model getekend zonder het te verbergen, en het model verbergt het deel van de afbeelding dat erachter ligt. Overlappende afbeeldingen worden gesorteerd op afstand. Doorzichtigheid, Verbergen, Vergrendelen en Verwijderen werken hetzelfde, en {{ui:Tonen in 3D}} zet alle vlakken alleen in de 3D-weergave uit. Een verdieping bevat maximaal 8 afbeeldingen, om de weergaven snel te houden.

## Een afbeelding op een verticaal vlak

Kies onder {{ui:Plaatsen op}} {{ui:Een verticaal vlak (snijlijn)}}, en daarna {{ui:Afbeelding invoegen…}}. Klik op de twee uiteinden van een lijn op het plan (een uiteinde van een wandvlak snapt vast), of kies een benoemde snijlijn van de verdieping in {{ui:Op een doorsnedelijn}}; dan zijn geen klikken nodig. De afbeelding staat op de verdieping over die lijn, even breed als de lijn. Stel de {{ui:Breedte}}, de plaats {{ui:Langs de lijn}} en de {{ui:Hoogte boven verdieping}} in door te typen; {{ui:Draaien}} draait hem in zijn eigen vlak. Een verticale afbeelding wordt niet onder het plan getekend; het plan toont de lijn ervan terwijl u eraan werkt. BimCraft heeft geen interactief 2D-doorsnedevenster: doorsneden en gevels worden op de bladen getekend, en afbeeldingen worden in die bladweergaven nog niet afgedrukt.

## Afdrukken

{{ui:Afdrukweergave}} op een plan schrijft de afbeeldingen van de verdieping in de PDF onder de tekening, op hun schaal, draai en doorzichtigheid, afgeknipt op het blad; een verborgen afbeelding blijft eruit. Een JPEG gaat er zoals hij is in; andere afbeeldingen worden eerst op het blad naar 200 dpi teruggebracht.

## Naast het model bewaard

De bytes van de afbeelding worden niet in de IFC-tekst geschreven. Het model verwijst naar elke afbeelding met zijn naam (een IfcDocumentReference zoals pictures/<id>.png) en de bytes reizen mee in een projectbundel. Gebruik {{ui:Opslaan als bundel…}} (of {{ui:Opslaan als IFC}} en kies het): u krijgt één .ccbundle-bestand met het model en zijn afbeeldingen; het IFC blijft klein en bewerken blijft snel. Open de .ccbundle en de afbeeldingen zijn er weer.

Een gewoon .ifc kan geen afbeelding bevatten zonder groot te worden. Wanneer u er een opslaat, zegt BimCraft hoeveel afbeeldingen buiten het bestand worden bewaard en biedt een bundel aan, of een gewoon IFC dat de afbeeldingen tot 512 KB insluit en de andere weglaat. Een gewoon .ifc dat zonder zijn bundel wordt geopend, toont die afbeeldingen als ontbrekend, en Problemen somt ze op; open de .ccbundle waarin ze zijn opgeslagen. Bestanden die door de eerste versie zijn opgeslagen, met de afbeelding in het IFC, openen nog steeds, en een bundel-opslag haalt hun afbeeldingen eruit. Een afbeelding wordt tot 6 MB bewaard zoals hij is; een grotere wordt eerst kleiner gemaakt, en u krijgt daarvan bericht. Andere programma's openen het model en negeren de afbeeldingen. Een afbeelding die u nog niet hebt geschaald, staat in Problemen als opmerking.

## In doorsnede- en gevelbladen

Een afbeelding op een verticaal vlak (kies {{ui:Verticaal}} in het afbeeldingenpaneel en klik op de twee uiteinden van een lijn, of zet hem over een benoemde snijlijn) wordt afgedrukt in de bladweergaven die er recht op kijken. Een doorsnede toont een afbeelding die op zijn snijlijn staat, of die bij naam over die doorsnedelijn is geplaatst. Een gevel toont elke verticale afbeelding waarvan het vlak naar hem toe is gericht. De afbeelding wordt onder de lijnen van de weergave getekend, op de schaal van de weergave, afgeknipt op de weergave, en behoudt zijn doorzichtigheid. Open {{ui:Bladen…}} om het te zien; de bladen-PDF bevat het als afbeelding. Van achteren gezien is een afbeelding gespiegeld, zoals in 3D. Verborgen afbeeldingen blijven eruit.
