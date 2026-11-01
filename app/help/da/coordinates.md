---
title: Koordinater i BimCraft
summary: Hvor du arbejder: markørens position i planen og 3D-visningen, niveauet du er på, projektets nulpunkt og byggegrundens opmålingspunkt.
keywords: koordinater, hvor er jeg, position, markør, aflæsning, x y z, niveau, etage, projektets nulpunkt, nulpunkt, basispunkt, opmålingspunkt, byggegrund, kortkoordinater, øst, nord, georeference, enheder, placering
from: 84df5245
---

## Hvad du gør

Find hurtigt ud af, hvor du er i en model: hvilket niveau du tegner på, hvor langt markøren er fra projektets nulpunkt, og hvor byggegrundens opmålingspunkt ligger.

## Hvor tallene vises

- **Over 3D-visningen** (nederst til højre, ved siden af ViewCube): flyt markøren hen over modellen. Boksen viser det niveau, punktet ligger på, og hvor højt det ligger over dette niveaus gulv, og derefter **X, Y og Z**. Over tomt rum aflæses punktet på gulvet i det laveste niveau.
- **På planen** (nederst til højre, mens {{ui:Tegn}} er tændt): det niveau, planen viser, og højden på dets gulv, samt markørens **X og Y**, mens den er over planen.
- Når filen har en kortkonvertering (den er eksporteret med kortkoordinater), tilføjer begge bokse **øst- og nordkoordinaterne** på kortnettet i den {{ui:Enheder}}, du valgte (altid med enheden skrevet ved siden af; fod og tommer vises som decimalfod). En tegning (DWG eller DXF) beholder sine egne enheder: dens markøraflæsning angiver dem, og den konverteres aldrig.

Alle X, Y og Z måles fra **projektets nulpunkt** i den {{ui:Enheder}}, der er valgt på værktøjslinjen (fod og tommer, tommer, decimalfod, millimeter, centimeter eller meter). Positiv Y peger mod modellens nord, som ikke altid er det sande nord. Kortets øst- og nordkoordinater følger samme valg (fod og tommer vises som decimalfod). Når kortsystemets egen enhed er en anden end den, du valgte, står den i parentes efter tallene, fx *(US survey feet)*, så en landinspektør kan se, hvilken enhed systemet selv bruger.

## De to markører

- **Projektets nulpunkt** (en rød cirkel med et kryds): punktet 0, 0, 0, som alle koordinater i modellen måles fra.
- **Opmålingspunkt** (en blå cirkel med en trekant): byggegrundens referencepunkt, det som dens breddegrad, længdegrad og kote eller dens kortkoordinater er angivet for. Peg på det i 3D-visningen for at se, hvor det ligger.

Når byggegrunden ligger på projektets nulpunkt, som i en ny bygning, der er tegnet her, viser én markør begge. Klik på krydsknappen i en af boksene for at skjule eller vise markørerne. BimCraft husker dit valg i denne browser.

## Hvad du bør se

- Tallene ændrer sig, når markøren flyttes, og planens boks angiver det niveau, du valgte i niveaulisten.
- Markørerne bliver stående, mens du kredser, panorerer og zoomer.

:::tip
For at aflæse et punkts breddegrad og længdegrad, brug {{ui:Mål}} › {{ui:Placering}}: se [Mål afstande, fladeområder og placeringer i 3D](topic:measure).
:::

:::touch
På en berøringsskærm viser 3D-boksen ingenting, før du bruger en mus eller pen: en finger flytter i stedet visningen.
:::
