---
title: Låt personer gå genom byggnaden
summary: En utrymning eller en vanlig dags ankomster genom dina rum, dörrar och trappor, med köer där byggnaden smalnar, den längsta gången till en utgång från varje rum, och fynden som Problem. En grov folkmodell för projekteringsbeslut, inte ett brandskyddsintyg.
keywords: personer, utrymning, utrymningsväg, rymning, utgång, gångavstånd, kö, folkflöde, flöde, dörrbredd, trappor, ankomster, flaskhals, simulering, personer i byggnaden, fotgängare, vad händer om, blockerad dörr
from: 84aa8920
---

Avsnittet {{ui:Personer i byggnaden}} i vänster panel låter personer gå genom rummen, dörrarna och trapporna i den öppna IFC-modellen. Ingenting i modellen ändras och ingenting laddas upp.

:::warning
Detta är **ett projekteringsstöd, inte ett brandskyddsintyg**. Det känner inte till brand, rök, panik, rörelsehinder eller vad en kod kräver av dig. Gränserna är dina: den längsta gången till en utgång och den tid som finns till förfogande är tal du skriver in, och inget antas.
:::

## Kör det

1. Öppna en modell med slutna rum och dörrar. En dörr med ett rum på bara ena sidan är en utgång; en dörr mellan två rum förbinder dem; en trappa förbinder rummen i sina ändar.
2. Välj **Utrymning** (alla går till en utgång), **Ankomst** (alla kommer in och går till ett rum) eller **Byte** (personerna i rummen lämnar medan lika många kommer in), och golvytan per person. Rum som har ett namn som korridor, trappa, hall eller toalett rymmer ingen.
3. Klicka på {{ui:Kör}}. Du får tiden då den sista personen är ute (och när hälften och nio av tio är ute), kön vid varje dörr och trappa, rummet med den längsta gången, och en plan som spelar upp körningen.

## Vad-om-scenarier

Bocka i {{ui:Stängd}} på en dörr i tabellen och kör igen: personerna hittar en annan väg, eller så listas de rum som saknar väg ut som fel. En dörr dubbelt så bred tömmer ett rum mycket tidigare; tabellen visar var köerna finns.

## Hur det fungerar

Varje rum är ett rutnät, så personer går runt hörn, inte genom väggar. Hastigheten sjunker när ett rum fylls (S = 1.4 (1 − 0.266 D) m/s, D i personer per m²). En dörr släpper igenom 1.3 personer per sekund för varje meter av sin bredd, minus 150 mm på varje sida; en trappa 1.0 och långsammare gång. Personer väntar i en kö i ankomstordning. Ett körningsnummer upprepar samma körning exakt.

Assistenten kan köra samma sak: be om en utrymning, eller den längsta gången till en utgång från varje rum.

## Personer i varje rum

Öppna {{ui:Personer i varje rum}} för att skriva in ett tal för valfritt rum. En tom ruta använder golvytevärdet (visas i grått); 0 tömmer ett rum. Dina tal används för körningen och sparas i den här webbläsaren.

## Motströmning vid dörrar

I **Byte** möts personer som går ut och personer som kommer in vid samma dörrar. När en dörr släpper igenom någon i motsatt riktning tätt efter den sista personen, behåller den en del av sin takt (0.8 här; ett antagande, eftersom publicerade värden varierar), och tabellen räknar riktningsbyten. En dörr som ofta byter riktning listas under Problem som en anteckning.

## Trappor och podier

Varje podest på en trappa kostar en gående en sekund att vända (ett antagande). En rak trappa har inga; en L- eller U-trappa har en. Trappans takt kommer fortfarande från bredden på trapplöpet.

## I 3D-vyn

Bocka i {{ui:Visa personerna i 3D-vyn}} så visas gångarna som figurer i modellen, färgade efter vad de gör, och de rör sig när du spelar upp körningen. Ingenting läggs till i modellen.
