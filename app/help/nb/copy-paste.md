---
title: Kopier, lim inn og dupliser bibliotekselementer
summary: Kopier et plassert bibliotekselement og lim det inn der du klikker, på samme sted ved siden av originalen, eller i en annen modell; kopier andre elementers egenskaper som tekst; angre og gjør om.
keywords: kopier, lim inn, dupliser, utklippstavle, lim inn på samme sted, klipp ut, slett, velg alle, angre, gjør om, redigeringsmeny, mer, bibliotekselement, plassering, gjenta, matrise
from: 6ac15931
---

## Hva du skal gjøre

Legg flere kopier av et element du allerede har plassert: et ekstra arbeidsbord, en rad med vasker. Dette emnet handler om **plasserte bibliotekselementer**, elementene BimCraft skrev inn i modellen. Ett av dem kan limes inn i en hvilken som helst modell, også i en annen fane. Vegger, dører og alle andre elementer kopieres, klippes ut, limes inn og slettes på samme måte innenfor sin egen modell: se [Slett, klipp ut, kopier og lim inn bygningselementer](topic:edit-elements).

Kommandoene står i verktøylinjen over modellen: {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}} og {{ui:Mer}}, en meny med {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}} og {{ui:Fjern utvalg}}. En kommando som ikke kan utføres akkurat nå, er gråtonet; pek på den for å lese hvorfor, eller klikk på den, så forteller statuslinjen hvorfor.

## Steg

1. Åpne en IFC-modell med et bibliotekselement i, eller plasser et først. Se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library).
2. Klikk på elementet i 3D-visningen. Egenskapene viser en boks **Bibliotekselement**.
3. Klikk på {{ui:Kopier}} eller trykk {{key:Mod+C}}.
4. Klikk på {{ui:Lim inn}} eller trykk {{key:Mod+V}}. Plasseringslinjen åpnes, og en gjennomsiktig boks følger pekeren, snudd likt som originalen.
5. Trykk {{key:R}} for å snu den 90°, {{key:Tab}} for å feste baksiden til en vegg, eller skriv inn X og Y i plasseringslinjen.
6. Klikk der kopien skal stå. Hvert klikk plasserer en ny kopi; trykk {{key:Esc}} for å stoppe.
7. Klikk på {{ui:Lagre som IFC}} for å laste ned den redigerte kopien av modellen.

## Lim inn på samme sted

{{ui:Mer}}, {{ui:Lim inn på samme sted}} eller {{key:Mod+Shift+V}} limer inn uten klikk, på samme X- og Y-koordinat og snudd likt:

- **Inn i samme modell, på samme etasje**: To elementer på nøyaktig samme sted ville ikke gitt mening, så kopien havner rett ved siden av originalen, én elementbredde pluss 100 mm langs elementets egen bredde. Lim inn på samme sted igjen fra den nye kopien for å lage en rad.
- **Til en annen etasje eller inn i en annen modell**: Nøyaktig samme X, Y og vinkel. BimCraft bruker etasjen med samme navn; finnes det ingen, brukes den som ligger nærmest i høyde. Statuslinjen forteller hvilken.

## Dupliser

{{ui:Mer}}, {{ui:Dupliser}} eller {{key:Mod+D}} kopierer det valgte elementet og starter innlimingen med én gang: ett steg i stedet for to.

## Inn i en annen modell eller fane

Det du kopierer, lagres i denne nettleseren, så du kan åpne en annen IFC-modell, eller BimCraft i en annen fane, og lime inn der. Den andre modellen trenger selve bibliotekselementet: BimCraft har det når elementet ble plassert, byttet ut eller oppdatert i denne fanen. Et element som ble plassert i en tidligere økt, kan limes inn igjen bare i sin egen modell; i en annen modell plasserer du det fra fanen {{ui:Bibliotek}}.

## Hva du skal se

- Kopien i modellen, valgt, med samme bibliotekselement, lisens, utstyrsdata, mengde og merknad som originalen, og **neste ledige elementnummer**. Endre nummeret i Egenskaper, under `CadCraft_Placement`.
- «Plassert: *element* (element *n*)» i endringslisten. {{key:Mod+Z}} tar den tilbake; {{key:Mod+Y}} legger den inn igjen.

## Greit å vite

- Kopier deler typen med originalen, så alle bruker ett sett geometri, slik som når samme element plasseres to ganger.
- {{ui:Angre}} og {{ui:Gjør om}} dekker alle endringer: redigerte verdier, plasseringer, innlimingen, bytter og oppdateringer. Gjør om legger en plassering tilbake på samme sted; en ny endring fjerner det som kunne gjøres om.
- I 2D-visningen av en tegning er det ingenting å velge, så det er ingenting å kopiere. Bruk {{ui:Rediger i CadCraft}} for å endre tegningen, når den vises.

## Vanlige feil

- **{{ui:Lim inn}} sier at elementene kom fra en annen modell.** Det siste du kopierte, var et bygningselement, eller flere elementer: disse limes bare inn i sin egen modell. Velg ett plassert bibliotekselement og kopier det.
- **{{ui:Lim inn}} sier at kopien kom fra en annen modell uten bibliotekselementet.** Plasser elementet fra fanen {{ui:Bibliotek}} én gang i denne fanen, og kopier og lim det inn.
- **{{key:Mod+C}} kopierer sidetekst i stedet.** Tekst var markert på siden. Klikk på modellen først.

## Relatert

- [Taster og mus](topic:keyboard#edit)
- [BimCraft-innstillinger](topic:settings)
