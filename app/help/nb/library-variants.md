---
title: Plasser og bytt et bibliotekselement som har varianter
summary: Noen bibliotekselementer finnes i flere størrelser eller valg. Velg variant før du plasserer det, se hvilken variant et plassert element er, bytt til en annen variant med ett klikk, og behold den når elementet oppdateres.
keywords: variant, varianter, størrelser, valg, konfigurasjon, bibliotek, librarycraft, plasser, bytt, konfigurator, familie, type, oppdatering, porter
from: c05f0af3
---

## Formål

Plasser et bibliotekselement i størrelsen eller valget du trenger, og endre mening senere uten å plassere det på nytt. Et element med varianter er ett element i biblioteket (ett navn, én lisens, én versjon) med en tabell over variantene det finnes i: for eksempel en monteringsplate i Liten, Middels og Stor, eller samme plate uten hull.

## Velg variant og plasser den

1. Åpne fanen {{ui:Bibliotek}} og klikk på elementets kort.
2. Under navnet lister valget {{ui:Variant}} alle variantene med størrelse. Elementets standard er valgt først.
3. Velg én. Planen, størrelsen og 3D-kroppen følger valget ditt.
4. Klikk {{ui:Plasser i plan}} (eller {{ui:Plasser i modell}} i 3D-visningen) og plasser det som et hvilket som helst element: se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library).

Det plasserte elementet får navn etter elementet og varianten, for eksempel *Monteringsplate — Stor*, slik at {{ui:Utstyr}}-listen og treet skiller dem. Hver variant er sin egen IFC-type: å plassere samme variant to ganger deler én type, en annen variant får sin egen.

## Se hvilken variant et plassert element er

Velg elementet. I {{ui:Egenskaper}} har boksen **Bibliotekselement** en linje **Variant**. IFC-filen lagrer den i `CadCraft_LibraryItem`: `Variant` (variantens id), `VariantName` og `VariantValues` (valgverdiene, som tekst), slik at andre programmer kan lese dem.

## Bytt til en annen variant

1. Velg det plasserte elementet og klikk {{ui:Bytt element…}} i boksen **Bibliotekselement**. Fanen {{ui:Bibliotek}} åpnes.
2. Øverst lister **Andre varianter av** *elementet* alle variantene med størrelse. Den som er plassert, er merket og kan ikke velges.
3. Klikk {{ui:Bytt til …}} på varianten du vil ha.

Elementet beholder plasseringen, vendingen, etasjen, elementnummeret, mengden og notatene; typen, formen og dataene endres til den andre varianten. {{key:Mod+Z}} henter den første tilbake. Du kan fortsatt velge et hvilket som helst annet element i listen under i stedet, som før: se [Bytt et plassert element, og oppdater elementer fra biblioteket](topic:swap-and-update-library-items).

## Kopiering, liming og oppdateringer

- En kopi av en plassert variant er samme variant: i denne modellen, og i en annen modell åpnet i samme nettleserfane, via Kopier og Lim inn.
- **Oppdateringer** beholder varianten: hvis den nyere versjonen av elementet fortsatt har den, blir plasseringen den varianten i den nye versjonen. Hvis den nye versjonen ikke lenger har den, får plasseringen i stedet elementets standardvariant.

## Greit å vite

- Bare noen bibliotekselementer har varianter. Kortene sier ikke det; du ser {{ui:Variant}}-valget når du åpner et.
- Et element kan liste **porter** (tilkoblingspunkter for rør og kanaler) per variant. Fanen Bibliotek viser hvor mange en variant har. De skrives ennå **ikke** inn i IFC-filen når du plasserer elementet fra fanen Bibliotek.
- En variant uten 3D-kropp plasseres med en erstatningsboks, slik som ethvert 2D-symbol.
- Størrelsene i valget er i millimeter, slik biblioteket skriver dem.
