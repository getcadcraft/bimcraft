---
title: Schakt och öppningar genom golv
summary: Ett schakt är en enda kontur som skär varje golv, undertak och tak mellan två nivåer. En vertikal öppning skär ett av dem. Väggöppning skär en vägg.
keywords: schakt, hissschakt, elevatorschakt, trappöppning, steg, vertikal öppning, golvöppning, öppning i undertak, taköppning, takfönsteröppning, hål i golv, väggöppning, IfcOpeningElement, avdrag, nettoarea
from: 8e9e1641
---

## Vad du gör

Skär ett hissschakt genom en byggnad med en skiss, skär ett hål i ett golv och läs vad som tagits bort från ytorna.

## Var verktygen finns

- Menyfliksupplägg: {{ui:Arkitektur}} › **Öppning** › {{ui:Schakt}}, {{ui:Vertikal öppning}} och {{ui:Väggöppning}}.
- Klassiskt upplägg: ritfältet › menyn {{ui:Rum}} (Schakt, Vertikal öppning) och › menyn {{ui:Väggar}} (Väggöppning).

## Ett schakt

1. Öppna planen för den nivå schaktet börjar på. Välj {{ui:Schakt}}.
2. I raden väljer du {{ui:Nedre nivå}} och {{ui:Övre nivå}}, och förskjutningar om det börjar eller slutar över eller under dem.
3. Klicka på konturens hörn. Klicka på det första hörnet igen, dubbelklicka eller tryck på {{key:Enter}} för att avsluta.
4. Varje golv, undertak och tak mellan de två höjderna skärs. Statusraden anger hur många.

Ett schakt är en enda sak. Markera dess kontur på valfri nivå den passerar: Egenskaper har dess namn, nivåer och förskjutningar, vad den skär och ytan som tas bort. Ändrar du den följer alla öppningar. Tar du bort den försvinner alla öppningar. Varje är ett steg i Ångra.

Det fortsätter att skära: ett golv som skapas senare mellan dess nivåer skärs utan att du ber om det, och ett golv du tar bort släpps.

Golvet som schaktet står på skärs inte (dess överkant är basen). Ge basen en negativ förskjutning för att skära även den. Ge toppen en positiv förskjutning för att gå genom taket.

## En vertikal öppning

1. Välj {{ui:Vertikal öppning}}. I raden väljer du vad som ska skäras: golvet, undertaket eller taket.
2. Klicka på konturens hörn och avsluta som ovan.
3. Golvet, undertaket eller taket på den här nivån under konturen skärs. Det tillhör det enda elementet: tar du bort golvet försvinner öppningen med det.

## En väggöppning

{{ui:Väggöppning}} är verktyget i [Forma en vägg](topic:wall-shape): klicka på en vägg i planen, eller på två hörn på dess yta i 3D.

## Mängder

Enligt mätregeln för golv är ett elements nettoarea dess bruttoarea minus det som skärs ut ur det. Ett schakt eller en vertikal öppning är ett avdrag på varje golv och undertak det skär; förteckningarna Golv och ytskikt samt IFC-mängderna visar samma tal. På ett tak är avdraget takytans area: planarean delat med cosinus för lutningen.

En kontur som hänger över kanten drar bara av den del som ligger på elementet.

## Om inget skärs

Ett schakt som inget står i vägen för skapas ändå, och det säger så: det skär det som byggs där senare. En vertikal öppning behöver något under sig; utan något där säger statusraden det och ingenting skapas.

## I IFC

Varje skärning är ett IfcOpeningElement med IfcRelVoidsElement till elementet det skär, så vilket IFC-program som helst visar hålet. Ett tak skärs yta för yta. Själva schaktet är en IfcGroup av sina öppningar.

## Finns inte ännu

- Krökta konturer.
- Ett schakts väggar: rita dem med verktyget Vägg.
- Redigera konturen genom att dra i hörnen (ändra den i Egenskaper, eller ta bort och skissa på nytt).
- Ett ritat golvs egna Egenskaper visar bara dess yta minus dess egna öppningar; förteckningarna och IFC-mängderna inkluderar schaktets.

Se även [Rum och rumsavskiljare](topic:rooms-and-separators).
