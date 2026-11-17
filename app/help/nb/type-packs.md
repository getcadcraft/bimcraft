---
title: Typepakker: del vegg-typer som åpne filer
summary: Lagre vegg-typer med deres lag, materialer, etiketter og klassifiseringskoder, og familier, som én åpen fil (vanlig JSON eller IFC), og legg dem til i et annet prosjekt. Vegg-typer i en IFC-fil fra et annet program kan også leses.
keywords: typepakke, typer, vegg-type, dele, eksport, import, bibliotek, åpent format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materialer, lag, mal, kontorstandard, familier
from: e4c91331
---

## Hva du skal gjøre

Ta vegg-typene dine med fra ett prosjekt til et annet, eller gi dem til noen som jobber i et annet program. En typepakke holder hver vegg-type med sine lag, tykkelser, materialer, kjerne, hulrom, lagprioritet, detaljeringsnivå, mengdedata og klassifiseringskoder, og eventuelle familier du legger til. Det er en åpen fil: vanlig JSON-tekst som alle kan lese, eller en IFC-fil. Ingenting i den er låst til et firma, et land eller en konto.

## Lagre typer fra et prosjekt

1. Åpne **Data** i modellfeltet og velg {{ui:Typepakker}}.
2. Under {{ui:Lagre typer fra dette prosjektet}} krysser du av for vegg-typene som skal med. Prosjektets egne typer er avkrysset; en startertype kan legges til og tas med som en kopi. Kryss av for familier hvis du vil ha dem med.
3. Skriv et {{ui:Pakkenavn}}.
4. {{ui:Lagre som pakke (.json)}} laster ned en `.cctypes.json`-fil. {{ui:Lagre som IFC (.ifc)}} laster ned en IFC-fil som bare inneholder typer: hver vegg-type som en IfcWallType med sitt materiallagsett, materialer og klassifisering, for alle BIM-programmer.

## Legge typer til i et prosjekt

1. I samme dialog velger du {{ui:Åpne en pakke eller en IFC-fil…}} og velger en `.json`-pakke eller en `.ifc`-fil.
2. Dialogen lister det filen inneholder: hver vegg-type med sin tykkelse, antall lag og koder, materialene og familiene.
3. Velg hva som skjer med {{ui:En type prosjektet allerede har}}: **Behold prosjektets**, **Legg til pakkens som en kopi** (den får et nytt navn som slutter med "(2)"), eller **Erstatt den (bare når ingen vegg bruker den)**.
4. {{ui:Legg til i prosjektet}}. Dialogen lister det som ble lagt til, kopiert, erstattet eller beholdt. Det er ett steg å angre.

De nye typene står i Vegg-verktøyets typeliste med en gang.

## Gulv-, tak- og himlingstyper

Listen over typer som skal lagres inneholder også prosjektets gulv-, tak- og himlingstyper og deres startere (merket Floor, Roof, Ceiling). En pakke kan bære alle fire slagene; hver type angir sin IFC-klasse (IfcWallType, IfcSlabType, IfcCoveringType). En gulv-, tak- eller himlingstype som elementer bruker, erstattes ikke fra en pakke: endre den i typeredigereren.

## Én type som et bibliotekselement

Kryss av for nøyaktig én type og velg **Lagre som bibliotekselement…**. Det lagrer en `.cctype.json`-fil: et bibliotekselement av typen Typer som holder den ene typen (dens lag, materialer, detaljeringsnivå og klassifiseringskoder). Last den opp i biblioteket for å dele den. **Åpne en pakke eller en IFC-fil** leser også et slikt element og legger typen til i prosjektet som en pakke.

## Greit å vite

- En IFC-fil fra et annet program kan også åpnes her. Hver av dens vegg-typer som har materiallag, leses: navnet, lagenes materialer og tykkelser og eventuelle hulrom er filens egne. Hvilke lag som er kjernen, og hva hvert lag gjør (overflate, konstruksjon, isolasjon), gjettes; typen merkes **(gjettet)**, og du bør kontrollere den i vegg-typeredigereren. En vegg-type uten lag utelates og nevnes med navn.
- Et materiale prosjektet allerede har, beholdes som det er. Et nytt materiale hvis navn er tatt, får "(pakke)" etter navnet.
- En type som vegger bruker, erstattes aldri fra en pakke. Endre den i vegg-typeredigereren, som flytter veggene sine på riktig måte.
- En kode satt på én vegg følger ikke med: den hører til den veggen. En kode satt på typen følger med.
- En fil med et felt formatet ikke har, et lag der materialet mangler, eller noe som ikke er ren tekst, avvises, og meldingen sier hvor og hvorfor.
- Ikke bygget ennå: gulv-, tak- og himlingstyper (de har ingen typer i denne versjonen: hver har sin egen tykkelse), dør- og vindustyper utover familier, og heller eller farger fra et annet programs fil.
