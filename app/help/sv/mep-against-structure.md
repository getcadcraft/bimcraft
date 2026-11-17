---
title: Kontrollera rör och kanaler mot stommen
summary: Kör de färdiga kollisionsuppsättningarna för rör och kanaler mot väggar, bjälklag, balkar och pelare, hitta sträckor som ligger närmare stommen än sin isolering och ett mellanrum, och lista de håltagningar som sträckorna behöver genom väggar och bjälklag, som CSV och BCF.
keywords: mep, kollision, kollisionskontroll, samordning, stomme, väggar, bjälklag, balkar, pelare, fria avstånd, mjuk kollision, isolering, mellanrum, håltagning, håltagningar, genomföring, hylsa, kärna, byggarbete, bcf, csv
from: 2d597f01
---

## Vad du gör

Se till att installationerna passar i byggnaden: vad som går in i stommen, vad som passerar för nära den, och var väggarna och bjälklagen behöver hål. Öppna {{ui:Kollisionskontroll}} i den vänstra panelen; avsnittet **Rör och kanaler mot stommen** finns under den vanliga kontrollen.

## Hårda kollisioner

De två uppsättningslistorna erbjuder nu också **Rör och kanaler**, **Väggar**, **Bjälklag och tak**, **Balkar**, **Pelare** och **Stomme** (alla fyra), med hur många element var och en innehåller. Klicka på {{ui:Rör och kanaler × stomme}} för att välja den första och den sista och köra kontrollen; eller välj ett valfritt par själv och klicka på {{ui:Kör}}. Se [Kontrollera kollisioner](topic:clash-check).

## Fria avstånd

Vissa installationer behöver utrymme runt sig: deras isolering, och plats att arbeta i eller för en hylsa.

1. Ange isoleringstjockleken för en rör- eller kanalsträcka i Egenskaper under **Isolering** (inget ritas för den).
2. Skriv in **Mellanrum runt rör och kanaler** (mm) i Kollisionskontroll.
3. Klicka på {{ui:Kontrollera fria avstånd}}: varje del som ligger närmare en vägg, ett bjälklag, en balk eller en pelare än sin isolering plus mellanrummet listas med det avstånd den har och det avstånd den vill ha. Klicka på en rad för att se båda.

En del som går genom en vägg eller ett bjälklag är en håltagning, inte ett fritt avstånd, och listas i stället där.

## Håltagningar som behövs

Klicka på {{ui:Håltagningar som behövs}}. Där en sträckas mittlinje går genom en vägg eller ett bjälklag listar BimCraft håltagningen den behöver: rund för ett runt rör eller en rund kanal, annars rektangulär, lika stor som sträckans yttermått plus dubbel isolering plus dubbelt mellanrum, centrerad där sträckan korsar. Klicka på en rad för att se sträckan och väggen eller bjälklaget.

- {{ui:Håltagningar som CSV}}: en rad per håltagning med sträckan, dess storlek och isolering, håltagningens storlek, elementet den går genom och dess GlobalId, nivån, mittpunktens X, Y och Z samt hur långt sträckan går igenom.
- {{ui:Håltagningar som BCF-ärenden}}: ett ärende per håltagning, med en kamera som riktas mot den och sträckan och elementet valda, för konstruktörens program.

:::note
Ingenting skärs: håltagningarna är en lista för dem som dimensionerar dem. Mellanrummet är ditt att skriva in; ingen norm säger hur stor en håltagning måste vara. Balkar och pelare är kollisioner, inte håltagningar: om ett rör får gå genom en sådan är konstruktörens beslut.
:::
