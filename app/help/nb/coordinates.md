---
title: Koordinater i BimCraft
summary: Hvor du arbeider: pekerens posisjon i planen og 3D-visningen, nivået du er på, prosjektets origo og tomtens oppmålingspunkt.
keywords: koordinater, hvor er jeg, posisjon, peker, avlesning, x y z, nivå, etasje, prosjektorigo, origo, basispunkt, oppmålingspunkt, tomt, kartkoordinater, østverdi, nordverdi, georeferering, enheter, plassering
from: 84df5245
---

## Hva du gjør

Se raskt hvor du er i en modell: hvilket nivå du tegner på, hvor langt pekeren er fra prosjektets origo, og hvor tomtens oppmålingspunkt ligger.

## Hvor tallene vises

- **Over 3D-visningen** (nederst til høyre, ved siden av ViewCube): flytt pekeren over modellen. Boksen viser nivået punktet ligger på og hvor høyt over gulvet på det nivået det er, deretter **X, Y og Z**. Over tomt rom leses punktet på gulvet på det laveste nivået.
- **På planen** (nederst til høyre, mens {{ui:Draw}} er på): nivået planen viser og høyden på gulvet, samt pekerens **X og Y** mens den er over planen.
- Når filen har en kartkonvertering (den ble eksportert med kartkoordinater), legger begge boksene til **øst- og nordverdiene** på kartnettet, i den {{ui:Units}} du valgte (alltid med enheten skrevet ved siden av; fot og tommer vises som desimalfot). En tegning (DWG eller DXF) beholder sine egne enheter: avlesningen for pekeren viser dem, og de blir aldri konvertert.

Hver X, Y og Z måles fra **prosjektets origo**, i den {{ui:Units}} som er valgt på verktøylinjen (fot og tommer, tommer, desimalfot, millimeter, centimeter eller meter). Positiv Y peker mot modellens nord, som ikke alltid er det sanne nord. Kartøst- og kartnordverdier følger samme valg (fot og tommer vises som desimalfot). Når kartsystemets egen enhet er en annen enn den du valgte, angis den i parentes etter tallene, for eksempel *(US survey feet)*, slik at en landmåler kan se hva systemet selv er skrevet i.

## De to markørene

- **Prosjektets origo** (en rød sirkel med et kryss): punktet 0, 0, 0 som alle koordinater i modellen måles fra.
- **Oppmålingspunkt** (en blå sirkel med en trekant): tomtens referansepunkt, det som breddegrad, lengdegrad og høyde, eller kartkoordinatene, er oppgitt for. Pek på det i 3D-visningen for å lese hvor det ligger.

Når tomten ligger på prosjektets origo, slik som i en ny bygning tegnet her, viser én markør begge. Klikk på korsknappen i en av boksene for å skjule eller vise markørene; BimCraft husker valget ditt i denne nettleseren.

## Hva du skal se

- Tallene endrer seg når pekeren flyttes, og planens boks viser navnet på nivået du valgte i nivålisten.
- Markørene blir stående på plass når du kretser, panorerer og zoomer.

:::tip
For å lese et punkts breddegrad og lengdegrad, bruk {{ui:Measure}} › {{ui:Location}}: se [Mål avstander, flateareal og plassering i 3D](topic:measure).
:::

:::touch
På en berøringsskjerm viser 3D-boksen ingenting før du bruker en mus eller en penn: en finger flytter visningen i stedet.
:::
