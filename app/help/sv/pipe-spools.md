---
title: Rörspolar och rörspolblad i stål
summary: Dela upp en stålledning med svetsändar i spolar efter en längsta längd och vid de montagesvetsar du placerar, numrera dem, och ladda ner ett spolblad per spole (3D-vy, kapmått, kopplingsdelar, svetsar, materialförteckning) som PDF och CSV; kanaler får en kapplista med raka bitar.
keywords: spole, spolar, spolblad, isometrisk, tillverkning, förtillverkning, montagesvets, verkstadssvets, stumsvets, kapmått, kapplista, materialförteckning, stycklista, stålrör, schema 40, linjenummer, kanalkapplista, kanaldelar
from: 539f51de
---

## Det här gör du

Gör om en stålrörsledning till de delar som en verkstad svetsar ihop och en montör monterar: spolar som inte är längre än en längd du väljer, delade där du placerar montagesvetsar, var och en med sitt eget blad.

Endast **stålrör med stumsvets** delas i spolar (rördimensioner enligt ASME B36.10M, knän enligt ASME B16.9 långradie). Koppar-, PVC- och PEX-skarvar är inte stumsvetsar, så deras ledningar har inga spolar.

## Dela en ledning i spolar

1. Välj en stålrörsledning. Bocka i **Dela i spolar** i {{ui:Egenskaper}}.
2. **Längsta spole**: den största mittlinjelängden en spole får ha (6 m, cirka 20 ft, till att börja med).
3. **Linjenummer**: en del av varje spoles nummer. En ny spolad ledning får nästa lediga nummer i sitt system.

Spolarna numreras längs ledningen från dess första punkt: `CHW-12-S01`, `CHW-12-S02` … (systemet, linjenumret, spolen). En spole växer del för del; delen som skulle göra den för lång startar nästa, och en rak sträcka längre än en spole delas där spolen är full.

## Placera montagesvetsar

1. Öppna {{ui:Bygge}} och välj {{ui:Montagesvets}}.
2. Klicka på ett spolat rör där montagesvetsen ska sitta. Inne i en rak sträcka delas röret där; inne i en koppling eller en ventil flyttas svetsen till närmaste skarv.

{{ui:Egenskaper}} listar ledningens montagesvetsar, var och en med {{ui:Ta bort}}. Varje ändring är ett steg i {{ui:Ångra}}.

## Spolblad

I {{ui:Egenskaper}} för en spolad ledning:

- {{ui:Rörspolblad (PDF)}}: en sida per spole. Till vänster, spolen i en isometrisk vy på 30°: dess raka sträckor numrerade, verkstadssvetsar som prickar, montagesvetsar märkta FW och planens norr. Till höger, spolens nummer, storlek, schema och längd, sedan dess **kapmått**, **kopplingsdelar**, **svetsar** (en verkstadsstumsvets vid varje skarv inne i spolen, en montagesvets där den möter nästa spole) och dess **materialförteckning** med rörets vikt (ASME B36.10M-vikt för rör med släta ändar).
- {{ui:Rörspolslista (CSV)}}: samma sak, ett block per spole.

:::note
Kapmåtten är ände mot ände som ritade: inget rotgap eller svetsmån dras av. Knän är långradie enligt B16.9; T-stycken, reducerare och ventiler är generiska, dimensionerade efter röret, inte efter B16.9 eller en tillverkare, och bladet säger det. Kopplingsdelarnas vikter anges inte. Ett hjälpmedel för ritning och samordning, dimensionerat av en ingenjör.
:::

## I IFC-filen

Varje del av en spolad ledning har **CadCraft_Spool** med sitt SpoolId, ledningen, spolens nummer i ledningen och var den börjar och slutar längs ledningen. Ledningen behåller sina regler (längsta spole, montagesvetsar, linjenummer) i sin egen uppsättning, så att spolarna blir desamma när filen öppnas igen.

## Kanaler: en kapplista

Öppna {{ui:Bygge}} och klicka på {{ui:Kanalkapplista}}: en CSV över de raka kanalbitarna efter system, form och storlek, där varje rak sträcka delas i bitar om **Bitlängd** i Kanalfältet (1500 mm, cirka 5 ft, till att börja med) och det som blir över. Endast längder: inga skarvar, plåttjocklekar eller kopplingar.
