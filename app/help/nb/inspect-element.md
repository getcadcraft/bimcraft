---
title: Velg et element og les egenskapene
summary: Klikk på et hvilket som helst element i 3D-modellen for å markere det og lese navn, type, merkelapp, GlobalId, egenskapssett og mengder.
keywords: egenskaper, velg, klikk, element, parametere, egenskapssett, pset, mengder, globalid, guid, type, inspiser
from: 43b80aa8
---

## Hva du skal gjøre

Velg elementer i en IFC-modell og les alt filen sier om dem: attributter, egenskapssett, typeegenskaper og mengder.

## Steg

1. Åpne en IFC-modell.
2. Klikk på et element, for eksempel en dør. Klikk uten å dra: hvis du drar mer enn noen få piksler, roterer du i stedet for å velge.
3. Se på elementet: det markeres i blått.
4. Se på panelet {{ui:Egenskaper}} til høyre. Øverst står elementets klasse (for eksempel «Door» eller «WallStandardCase») og navnet.
5. Les den første blokken: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** og **Line**.
6. Rull ned til egenskapssettene. De tre første er åpne. Klikk på navnet på et annet sett for å åpne det.
7. Klikk på et annet element for å bytte til det.
8. Trykk {{key:Esc}}, eller klikk på en tom bakgrunn, for å fjerne valget.

## Hva du skal se

- Det markerte elementet og dets data til høyre.
- Egenskapssett i alfabetisk rekkefølge. Sett som kommer fra elementets **type**, har « (type)» etter navnet og merknaden «Typeegenskap: en endring her gjelder for hvert element av denne typen.»
- Mengdesett (for eksempel lengder, arealer og volumer) listet sammen med de andre settene. Mengder er skrivebeskyttet.
- Verdier du kan endre, ser ut som knapper. [Endre IFC-egenskaper og lagre en redigert kopi](topic:edit-ifc-properties) viser hvordan.

[Felt i egenskapspanelet](topic:properties-panel) forklarer hvert felt.

## Skjulte elementer

1. For å komme til noe inne i bygningen, fjern krysset for etasjene over det i listen {{ui:Etasjer}}.
2. For å komme til en vegg bak et romvolum, slå av {{ui:Rom}}.
3. Klikk på elementet.

## Vanlige feil

- **Å dra litt mens du klikker.** BimCraft tar det som en rotasjon og velger ikke. Hold musen i ro.
- **Å forvente enheter ved siden av tall.** Verdier vises slik de er lagret i filen, avrundet til fire desimaler, uten enhetssymbol. Lengder i en metrisk eksport er vanligvis millimeter eller meter. Sjekk innstillingene i eksportøren.
- **Å lete etter en parameter under et kjent navn.** Eksportører gir parametere nye navn og grupperer dem i IFC-egenskapssett, for eksempel `Pset_WallCommon`. Se gjennom hvert sett. Egendefinerte parametere ligger ofte i et sett oppkalt etter eksportprogrammet eller firmaet ditt.
- **Å forvente et søkefelt.** Klikk for å velge et element. {{key:Mod}}+klikk eller {{key:Shift}}+klikk velger flere, og {{key:Mod+A}} velger alle viste elementer. Listen {{ui:Elementer}} til venstre teller bare elementer etter klasse. Den kan ikke klikkes.
- **Å velge på et prosjektfilkort.** Et filkort har ingen elementer å velge: «Elementegenskaper krever 3D-modellen. Åpne en IFC-eksport av denne filen for å se dem.»
