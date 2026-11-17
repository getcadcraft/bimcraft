---
title: Op ware grootte tekenen, annoteren op schaal
summary: Het gebouw wordt altijd op ware grootte getekend. Tekst, maatvoering, tags, ruimtenamen, rasterbollen en symbolen worden op papier gedimensioneerd, in millimeters zoals afgedrukt, en behouden die maat wanneer de schaal van een tekening van 1:100 naar 1:50 verandert.
keywords: annotatieschaal, annotatief, tekstgrootte, teksthoogte, papierhoogte, grootte maatvoeringstekst, tagmaat, grootte ruimtenaam, rasterbol, symboolgrootte, tekeningschaal, 1:50, 1:100, kantoorstandaard, letters, tekenen op 1:1, ware grootte, bladtekst
from: 94118788
---

## Wat u gaat doen

Stel één keer voor het hele gebouw in hoe hoog de letters van uw tekeningen op papier zijn. U schaalt het model nooit en u past tekst nooit aan voor een schaal: BimCraft berekent de maat uit de papierhoogte en de schaal van de tekening.

## Hoe het werkt

- Het model is op ware grootte. Een wand van 10 m lang is 10 000 mm lang, op elke schaal.
- Een annotatie heeft een **papierhoogte**: de hoogte van een hoofdletter op het afgedrukte blad, in millimeters.
- Bij een schaal van 1:100 is een tekst van 2.5 mm 250 mm hoog in het model; bij 1:50 is dat 125 mm. Op papier is het in beide gevallen 2.5 mm.
- Plansymbolen (elektrisch, sanitair) worden getekend in papiermillimeters en volgen dezelfde regel.

## Stappen

1. Open de projectbrowser. Klik onder {{ui:Sheets}} op {{ui:Annotation sizes…}}.
2. Typ een hoogte in millimeters voor de soorten die u wilt instellen: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} en {{ui:Schedule text}}. Een leeg vak houdt de eigen maat van BimCraft aan, grijs weergegeven.
3. Klik op {{ui:Save}}. Het is één stap die u ongedaan kunt maken.

Elk blad, de tekenset, de plan-PDF en de gevels en doorsneden gebruiken vanaf dan die maten. De ruimte tussen een maatlijn en haar tekst, de grootte van een rasterbol en de hoogte van een staatrij groeien mee met hun tekst.

## Een plan met een eigen schaal

Geef een plan een schaal in zijn weergavebereik ({{ui:Scale}}; zie [Weergaven en bladen](topic:views-and-sheets)). Dan:

- op het scherm worden ruimtenamen, tags, maatvoeringstekst en rasterbollen getekend in hun afgedrukte grootte ten opzichte van het model, zodat u ziet wat het blad zal tonen;
- plansymbolen en hun tags zijn bepaald op die schaal. Verandert u de schaal van 1:100 naar 1:50, dan zijn ze in het model half zo groot en op papier even groot.

Een plan zonder eigen schaal houdt zijn vaste schermtekst, en zijn symbolen zijn bepaald op 1:50 (1/4" = 1'-0" in voet en duim), zoals voorheen.

## De maten van uw kantoor

Met de add-on Default Policies ingeschakeld, stelt u de hoogten van het kantoor in via Instellingen › Global › Default Policies › {{ui:Annotation sizes on paper}}. Een nieuw gebouw neemt ze over zodra u op Aanmaken klikt. In een gebouw dat u al bent begonnen, heeft het dialoogvenster {{ui:Use my office's sizes}}. Zie [Default Policies](topic:default-policies).

## De maten van een voorschriftenpakket

Een voorschriftenpakket kan de teksthoogten geven die de plaats vraagt (de add-on Building regulations, tekenconventies). Vink het pakket aan in Instellingen › Building regulations, en klik dan in het dialoogvenster op {{ui:Use a regulation pack's sizes}}: de vakjes vullen zich, u controleert ze en slaat op. Een maat die een pakket in punten geeft, is een lettergrootte en wordt omgezet naar een hoofdletterhoogte, dus controleer die. Er wordt niets ingesteld tot u opslaat.

## Wat u zou moeten zien

- Dezelfde teksthoogte in millimeters op een blad op 1:100 en op een blad op 1:50, terwijl het plan zelf op 1:50 twee keer zo groot is.
- De maten reizen mee met het gebouw: ze worden opgeslagen in het IFC-bestand.

## Goed om te weten

- De eigen maten van BimCraft zijn de maten die de bladen altijd hebben gebruikt (ongeveer 1.5 mm hoofdletters voor maatvoeringstekst). Het zijn geen tekenstandaard: stel die van uw kantoor in.
- Een hoogte moet tussen 0.5 en 50 mm liggen.
- Letterwerk van het titelblok en legenda's van sleutelverklaringen horen hier niet bij: die houden hun eigen maten.
