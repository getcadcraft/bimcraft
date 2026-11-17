---
title: Rum och rumsavskiljare
summary: Välj ett rum för att namnge och numrera det och läsa dess area, omkrets och volym. Rita en rumsavskiljare där två rum möts utan vägg mellan dem.
keywords: rum, rumsavskiljare, avskiljningslinje, utrymme, IfcSpace, namn, nummer, area, omkrets, volym, öppen planlösning, dela ett rum, kök och vardagsrum, ej inneslutet
from: d4c1d66b
---

## Vad du gör

Namnge rummen som väggarna bildar, och dela ett öppet rum i två utan vägg.

## Var verktygen finns

- Menyflikslayouter: {{ui:Architecture}} › **Rum & area** › {{ui:Room}} och {{ui:Room Separator}}.
- Klassisk layout: ritverktygsfältet › menyn {{ui:Rooms}}.
- Valfri menystil: kommandona heter {{ui:Room}} och {{ui:Room Separator}}; kommandopaletten hittar dem.

## Steg

1. Rita väggarna. Varje sluten slinga av väggar är redan ett rum: BimCraft skapar det, numrerar det och ger det dess area medan du ritar.
2. Välj {{ui:Room}}. Rör dig över planen: rummet under pekaren lyser upp med sin area, omkrets och volym.
3. För att snabbt namnge rum skriver du först ett {{ui:Name}} och ett {{ui:Number}} på raden, och klickar sedan i rummet. Numret räknas upp med ett för nästa rum (101, 102; A-09, A-10).
4. Eller klicka bara på ett rum: det väljs, och Egenskaper visar dess namn, nummer, area, omkrets, volym och tagg.
5. För att dela ett öppet rum väljer du {{ui:Room Separator}} och klickar på två punkter: vägg till vägg, eller vägg till en annan avskiljare. Fortsätt klicka för en kedja; Enter, Esc eller dubbelklick avslutar.

## Vad en avskiljare gör

- Den avgränsar rum som en vägg utan tjocklek. De två rummens areor adderas exakt till det rum de var.
- Rummet som innehåller det gamla rummets mitt behåller sitt namn och nummer. Det andra är nytt.
- En avskiljare som slutar i det fria, utan att röra något i ena änden, delar ingenting. Förläng den så gör den det.
- Den del av en avskiljare som ligger inne i en vägg ignoreras, så att du kan fånga mot väggarnas mittlinjer.
- Välj en avskiljare och tryck på Delete för att ta bort den: de två rummen blir ett igen. Ångra lägger tillbaka den.

## Om det inte finns något rum där du klickar

Statusraden säger det: väggarna sluter sig inte där. Stäng gapet, eller rita en avskiljare över det. Inget avvisas; det finns helt enkelt inget slutet rum än.

## I IFC

Ett rum är en IfcSpace med sitt nummer (Name), sitt namn (LongName) och Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Volymen är arean gånger höjden till nivån ovanför.

En rumsavskiljare är ett IfcVirtualElement, den entitet IFC använder för en gräns som inte är byggd. Den har en linje och ingen kropp, så ett annat program läser ingen vägg och räknar inget för den.

## Finns inte ännu

- Krökta avskiljare.
- Ett rum som följer ett sluttande tak: volymen är alltid arean gånger nivåns höjd.
- Relationer för rumsgränser (IfcRelSpaceBoundary) skrivs inte, varken för väggar eller för avskiljare.

Se även [Rum- och areataggar](topic:room-and-area-tags), [Areor och areagränser](topic:areas-and-area-boundaries).
