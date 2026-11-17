---
title: Vis en DWG- eller DXF-tegning
summary: Åpne en DWG eller DXF, beveg deg rundt i modellrommet og arkene, les koordinater, og se hva som ennå ikke er tegnet.
keywords: dynamiske blokker, synlighetstilstander, dwg, dxf, cad, tegning, 2d, visning, panorer, zoom, modellrom, papirrom, layout, koordinater, åpne dwg
from: 4db3122a
---

## Det du skal gjøre

Åpne en CAD-tegning, se den i 3D eller 2D, beveg deg rundt i den, bytt mellom modellrom og arkene, og les koordinater. BimCraft viser DWG- og DXF-tegninger; det redigerer eller lagrer dem ikke. For å endre en, klikk {{ui:Rediger i CadCraft}}, så åpnes tegningen i CadCraft-tegneprogrammet i en ny fane.

## Steg

1. Klikk {{ui:Velg en fil}}, eller slipp tegningen på siden.
2. Velg en `.dwg`- eller `.dxf`-fil.
3. Vent mens statuslinjen sier «Leser tegningen…». Store tegninger tar noen sekunder. Deretter sier den hvor lang tid lesingen tok, «gjengir…» mens det første bildet tegnes, og hvor lang tid det tok.
4. Tegningen åpnes i {{ui:3D}}, den raskeste måten å vise en stor tegning på (se [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d)). Klikk {{ui:Modell}} for den flate 2D-visningen. For alltid å åpne tegninger i 2D, sett {{ui:Innstillinger}} › {{ui:BimCraft}} › **Tegninger åpnes i** til {{ui:Modell (2D)}}. En tegning uten noe i modellrom, eller en nettleser som ikke kan vise 3D, åpnes i 2D.
5. Se på fanene over tegningen: {{ui:Modell}} først, deretter én fane per ark, i tegningens egen rekkefølge.
6. Klikk en arkfane for å se det arket: papiret, med modellen vist gjennom sine visningsområder.
7. Klikk {{ui:Modell}} for å gå tilbake til modellrommet.
8. Før pekeren over tegningen og les X- og Y-koordinatene i hjørnet.

## Hva du bør se

- Tegningen, tilpasset vinduet. Farger følger tegningen. Hvite linjer (farge 7) tegnes i temaets blekk, og lyse farger mørkes på lyst tema slik at de forblir lesbare.
- {{ui:Tegning}}-panelet på venstre side: fil, størrelse, format (for eksempel «AutoCAD 2018 (AC1032)»), enheter, antall entiteter og layer, antall ark, og koblede tegninger og utstyr når det finnes noen.
- {{ui:Layer}}-listen på venstre side.
- På høyre side: hvordan du beveger deg rundt, koblede tegninger og bilder, og **Ikke tegnet ennå**.

## Bevege deg rundt

:::mouse
| For å | Gjør dette |
|---|---|
| Panorere | Dra med en hvilken som helst museknapp |
| Zoome | Rull hjulet; punktet under pekeren blir stående |
| Tilpasse | Dobbeltklikk, trykk {{key:F}}, eller klikk {{ui:Tilpass}} |
:::

:::mac mouse
På en styreplate **zoomer** rulling med to fingre, den panorerer ikke. Klyp zoomer også. For å panorere, klikk og dra.
:::

:::touch
Dra med ett finger for å panorere. Klypezoom er ikke bygget ennå for tegninger: trykk {{ui:Tilpass}} for å se hele arket, og bruk mus eller styreplate for å zoome inn.
:::

## Dynamiske blokker

En dynamisk blokk tegnes slik tegningen viser den: hver plassert blokk i den synlighetstilstanden tegningen ble lagret med ("Plan" eller "Front", "Single bowl" eller "Double bowl"). Til høyre lister **Dynamiske blokker** hver eneste plassert i modellrommet: hvor mange som er plassert, tilstandene de viser, og hver tilstand blokken har. I {{ui:3D}} klikker du en plassert blokk for å se **Dynamisk blokk**, **Vist tilstand** og **Andre tilstander** under {{ui:Egenskaper}}. BimCraft bytter ikke tilstander.

## Ikke tegnet ennå

Noen typer objekter er ikke tegnet i denne versjonen. De telles under **Ikke tegnet ennå** til høyre («Disse delene av tegningen hoppes over foreløpig, ikke gjettes på.»), slik at du vet at noe mangler. Linjer, polylinjer, buer, sirkler, ellipser, splines, skraveringer og heldekkende fyll, tekst og flerlinjetekst, blokker med attributter, måltilsettinger, pekere og flerpekere, tabeller, bilder og visningsområder tegnes. 3D-flater, polyflatenett og polygonnett tegnes som kantene sett ovenfra; bytt til {{ui:3D}} for å se dem som flater.

En binær DXF åpnes ikke: BimCraft sier fra om det. Lagre den på nytt som ASCII-DXF, eller som DWG, fra programmet som laget den.

## Vanlige feil

- **Tegningen ser tom ut.** Noen layer kan være av eller frosset i selve tegningen; de starter uten hake i {{ui:Layer}}. Klikk {{ui:Alle på}}. Hvis statuslinjen sier «*navn* er en tom tegning: den inneholder ingen linjer, tekst eller blokker.», er det ingenting i den.
- **Et ark viser en tom ramme.** Arket kan være avhengig av koblede tegninger. Se [Finn koblede tegninger og bilder](topic:dwg-linked-files).
- **Teksten ser litt annerledes ut.** BimCraft tegner tekst med en smal sans-serif-skrift, ikke tegningens egne skrifter, så tekst kan være litt bredere eller smalere enn i programmet som laget den.
- **«*navn* kunne ikke leses. Den kan være skadet, eller lagret i et format leseren ikke håndterer ennå.»** Parentesen på slutten navner filens formatkode. Lagre den fra programmet som laget den, som eldre DWG eller som DXF, og prøv igjen.
- **Du forventer å måle, tegne eller redigere.** BimCraft viser bare tegninger. Klikk {{ui:Rediger i CadCraft}} for å åpne den samme filen i CadCraft-tegneprogrammet, som redigerer den og lagrer en kopi som DWG eller DXF. Originalfilen din endres ikke, og koblede tegninger blir i BimCraft. Knappen vises bare der CadCraft er tilgjengelig for deg.

## Neste

- [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d)
- [Arbeid med layer og ark](topic:dwg-layers-sheets)
- [Kontroller en tegning i utskriftsvisning](topic:print-view)
