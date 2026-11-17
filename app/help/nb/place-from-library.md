---
title: Plasser utstyr og møbler fra biblioteket
summary: Finn et element i biblioteket, en fil eller den åpne tegningen, plasser det på en etasje i en IFC-modell med en gjennomsiktig forhåndsvisning, snu det, fest det til en vegg, og lagre.
keywords: flytt, roter, snu, dra, bibliotek, librarycraft, plasser, sett inn, utstyr, møbler, blokk, familie, element, katalog, innhold, kcl, csv, gltf, obj, rfa, dwg, ifc-type
from: 3dad5d4b
---

## Hva du gjør

Legg et bibliotekselement inn i en IFC-modell: en vask, et arbeidsbord, en stol. BimCraft skriver det som et riktig IFC-element med en type, slik at hver kopi av samme element deler ett sett med geometri, og dets data, elementnummer og lisens følger med.

## Trinn

1. Åpne en IFC-modell.
2. Klikk fanen {{ui:Library}} ved siden av {{ui:Properties}} til høyre, eller {{ui:Library}} i verktøylinjen over modellen.
3. Velg en kilde:
   - **Built-in symbols**: generiske rørleggersymboler i planen som følger med BimCraft under Apache-2.0, tilgjengelig frakoblet. Kontroller målene før bygging. For elektriske planssymboler og IFC-elektriske enheter, bruk **Bygg › Elektrisk**.
   - **Library**: CadCraft-biblioteket på denne siden. Offentlige elementer krever ingen innlogging.
   - **This file**: blokkene i en åpen DWG- eller DXF-tegning. En dynamisk blokk med synlighetstilstander tilbys én gang per tilstand, med navnet «Sink: Double bowl», og tegnes med bare objektene i den tilstanden.
   - **Files…**: en DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- eller CSV-fil på datamaskinen din. Den leses i denne fanen; ingenting lastes opp.
   - **Other feeds**: et annet bibliotek som bruker samme feedformat. Legg til adressen én gang; den lagres i denne nettleseren.
4. Søk eller velg en kategori, og klikk på et kort. Kortet viser en planforhåndsvisning, navnet, produsenten og modellen, lisensen og versjonen.
5. Klikk {{ui:Place in plan}} (i planvisningen) eller {{ui:Place in model}} (i 3D-visningen). I {{ui:Split}}, der planen og 3D-visningen vises samtidig, er knappen en delt knapp: hovedhandlingen er {{ui:Place in plan}}, og pilen på høyre ende åpner en meny med {{ui:Place in model}}. Eller dra kortet, eller bildet i elementets detaljer, over planen eller 3D-visningen: elementet plasseres der du slipper. Med penn eller finger trykker du og holder på kortet et øyeblikk, og drar deretter.
6. Velg etasjen i plasseringslinjen. I 3D-visningen skjules etasjer over den mens du plasserer, og visningen snur seg til toppen; i planen viser planen allerede den etasjen. Velger du {{ui:Place in model}} fra planen alene, åpnes 3D-visningen ved siden av den.
7. Før pekeren over modellen: en gjennomsiktig boks viser hvor elementet skal stå.
8. Trykk {{key:R}} for å snu det 90°. Trykk {{key:Tab}} (eller {{ui:Wall snap}}) for å sette ryggen mot den nærmeste veggen, vendt mot rommet.
9. Klikk for å plassere det. Eller skriv inn posisjonen i **X, Y (mm)**, for eksempel `1200, 3400`, og trykk {{key:Enter}}.

En lampe eller noe annet hengt fra taket: sett **Mount** til **At the ceiling**. Toppen av elementet står da på undersiden av himlingen over stedet (eller på nivåets høyde der det ikke er noen himling). Med en himlingsplan på planvisningen starter **Mount** på **At the ceiling**.
10. Svar på det ene spørsmålet: **item number** (det neste ledige nummeret er fylt inn), antallet og en merknad. Trykk {{key:Enter}}.
11. Plasser flere, eller trykk {{key:Esc}} for å stoppe.
12. Klikk {{ui:Save as IFC}} for å laste ned den redigerte kopien.

## Plan eller modell

Bibliotekets plasseringsknapp følger visningen du er i, og endrer seg med en gang du endrer visningen (knappene {{ui:Plan}}, {{ui:Split}} og {{ui:3D}}, tastaturet, åpning av en fil). Plan viser én knapp, {{ui:Place in plan}}; 3D viser én knapp, {{ui:Place in model}}; Split viser den delte knappen, med {{ui:Place in plan}} som hovedhandling og {{ui:Place in model}} i menyen. Begge måter bruker samme plasseringslinje og skriver det samme IFC-elementet: pekeren arbeider i planvisningen for den ene og i 3D-visningen for den andre. Trykk {{key:Esc}} når som helst for å stoppe.

Å dra et kort har ingen egen tast: den delte knappen, eller den vanlige knappen, gjør det samme med tastaturet.

## Flytt eller snu et plassert element

Under {{ui:Draw}} velger du elementet i planen. Et kvadratisk håndtak vises ved innsettingspunktet, og et rundt håndtak ved siden av.

- Dra elementet, eller det kvadratiske håndtaket, for å flytte det. Det fester seg som veggverktøyet (veggender og flater); {{key:Shift}} holder det vinkelrett på der det var.
- Dra det runde håndtaket for å snu det i 15°-steg. Hold {{key:Shift}} for 1°-steg.
- Trykk {{key:R}} for å snu det 90°.
- I **Properties** (også i 3D-visningen) skriver du inn **X**, **Y** og **Rotation (°)**, eller klikker **Turn 90°**.

Hver flytting er ett steg i {{ui:Undo}} og sendes i Live TeamWork. Elementet beholder elementnummeret sitt, bibliotekdataene sine og høyden sin over nivået. Ikke bygget ennå: dra det i 3D-visningen.

## Hva du bør se

- Elementet i modellen, valgt, med sine egenskaper til høyre: en boks **Library item** med lisens og kildehenvisning, og settene `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` og, for elementer fra merkede tegninger, `CadCraft_SourceAttributes`.
- «Plassert: *element* (element *n*)» i endringslisten. {{key:Mod+Z}} angrer det.
- Statuslinjen: «Plassert *element* som element *n*.»

## Greit å vite

- Noen elementer finnes i flere størrelser eller alternativer: kortet har da et valg for **Variant**, og det du velger, er det som plasseres. Se [Plasser og bytt et bibliotekselement som har varianter](topic:library-variants).
- Et element uten 3D-kropp (et 2D-symbol) plasseres med en erstatningsboks; du oppgir høyden når du blir spurt.
- Flere av samme: velg et plassert element og bruk {{ui:Copy}} og {{ui:Paste}}, eller {{key:Mod+D}}. Se [Kopier, lim inn og dupliser bibliotekselementer](topic:copy-paste).
- For å ha veggfang på ved hver plassering, slå på **Start with wall snap on** i [BimCraft-innstillinger](topic:settings).
- Lengder konverteres til modellens egne enheter, uansett hva de er.
- **Entourage** (trær, busker, mennesker, biler) finnes også i biblioteket: søk etter «tree», «person» eller «car». Disse tegnes av CadCraft (CC0) og beholder fargene sine når de plasseres (en stamme brun, løv grønn, en bils vinduer gjennomsiktige), i BimCraft og i andre BIM-programmer. De vises i [renderte bilder](topic:render).
- I en IFC2X3-fil skrives kroppen som et fasettert volum; i IFC4 som et triangulert flatesett. Begge åpnes i andre IFC-verktøy.
- En tegning (DWG eller DXF) kan ikke lagres her, så elementer plasseres bare i IFC-modeller. Bruk **This file** på en tegning for å se hva blokkene ville blitt.

## Elementer på ditt språk

Et element kan ha navn, beskrivelse og type på andre språk. Når det har dem på språket BimCraft er satt til (Innstillinger › Generelt › Språk), viser elementets side disse, med navnet produsenten ga det under seg, og **Place** skriver navnet på ditt språk inn i modellen, slik at tabellen {{ui:Equipment}} lister det slik. Elementet er fortsatt det samme elementet: sjekk etter oppdateringer og bytte skjer etter selve elementet, aldri etter navnet. Elementer uten oversettelse beholder sine egne ord.

## Vanlige feil

- **Plasseringsknappen mangler.** Ingen IFC-modell er åpen. Åpne en først.
- **Spøkelsesbildet følger ikke pekeren.** Pekeren er utenfor modellens område, eller etasjeplanet er ikke i visningen. Klikk {{ui:Top}}.
- **{{ui:Wall snap}} sier at det ikke finnes vegger.** Etasjen har ingen vegger i IFC-filen (noen eksporter legger vegger på en annen etasje). Velg den etasjen, eller skriv inn X og Y.
- **En fils elementer har feil størrelse.** Filen mangler enheter, eller har feil enheter. I {{ui:Files…}} velger du enhetene og leser den på nytt.

:::tip
Å plassere samme element to ganger deler én IFC-type, så en modell med førti stoler lagrer stolen én gang.
:::
