---
title: Kontrollera ett rums efterklang och lyssna på det
summary: Efterklangstid per oktavband för varje rum (Sabine och Eyring) utifrån dess storlek och ytskikt, ett mål du själv anger, och en röst, ett klapp eller musik spelad genom ett beräknat impulssvar för rummet.
keywords: akustik, efterklang, efterklangstid, rt60, sabine, eyring, absorption, eko, ljud, lyssna, impulssvar, tal, klassrum, kontor, matta, undertakplatta, brus
from: 16996cbb
---

Avsnittet {{ui:Room acoustics}} i den vänstra panelen beräknar hur länge ljudet dröjer kvar i varje rum. Det läser varje rums golvyta, höjd, väggar, dörrar och fönster från den öppna IFC-modellen. Ingenting i modellen ändras.

## Välj ytskikt

Där modellen anger vad som finns på en yta läser rummet det: det inre skiktet i varje väggtyp (gips, puts, tegel, betong och block är kända), golvets typ (trä eller betong) och om ett undertak finns. Etiketten bredvid varje val anger om värdet kommer från modellen, är ett standardvärde eller är ditt eget val; välj ett annat ytskikt för att åsidosätta det. Allt som inte modellen anger ligger kvar på standardvärdet. Koefficienterna är **typiska publicerade värden**; ersätt dem med en produkts provningsdata när du har det. Skriv ett **mål** (den längsta mellanfrekventa efterklangstid du vill ha) så markeras varje rum som överskrider det, tillsammans med den absorption som skulle sänka den.

## Läs tabellen

Efterklang anges för 125 Hz till 4 kHz. Sabine passar levande rum och Eyring döda rum; raden markerad *Använd* tar Eyring där medelabsorptionen är över 0.2. Luftens absorption ingår (den förkortar de höga banden i stora rum). Det är en statistisk modell: den antar att ljudet sprids jämnt, så långa eller platta rum och mycket små rum ger en grov vägledning, och möbler, personer och öppna dörrar räknas inte med.

## Lyssna

{{ui:Play it in this room}} spelar upp en röst (gjord här), ett klapp, plockade toner eller **en egen ljudfil** (den ligger kvar på din dator) genom ett impulssvar beräknat för rummet: det direkta ljudet, de första reflexerna från en låda av den storleken och en svans som avtar med rummets egen efterklangstid i varje band. {{ui:Play it dry}} spelar upp samma ljud på samma nivå utan rummet. Du kan spara impulssvaret eller ljudet i rummet som WAV-filer. Det låter som ett rum med den storleken och det ytskiktet, inte som något verkligt rum.

## Personer och möbler

Skriv antalet **personer i det här rummet** för att lägga till deras absorption. Möbler som modellen innehåller (soffor, sängar, stolar, bord, garderober, identifierade efter namn) lägger till sin egen. Värdena är grova planeringsvärden, avrundade; ersätt dem med mätningar för ett rum som är viktigt.

## Källa och lyssnare

Under {{ui:Source and listener}} trycker du på {{ui:Place the source}} eller {{ui:Place the listener}} och klickar i rummets plan. Ljudet du spelar upp hörs då därifrån: det direkta ljudet kommer efter avståndet, och den efterklingande delen ligger på den nivå som hör till avståndet. Rensa båda för att gå tillbaka till avståndsrutan.

## Ojämn absorption och rumsmoder

Under {{ui:Uneven absorption (box room)}} skriver du in rummet som en låda och väljer dess golv-, tak- och väggytskikt. Tabellen lägger till Fitzroy och Arau-Puchades till Sabine och Eyring: de behandlar de tre paren av motstående ytor var för sig, så ett mattbelagt rum med hårt tak läses inte som för kort. När paren skiljer sig mycket säger en anteckning vilket du ska lita på. Under tabellen listar **Rumsmoder** de lägsta stående vågorna i lådan och frekvensen under vilken rummet har separata moder i stället för ett jämnt ljudfält. Detta är förutsägelser för ett lådformat rum, ett underlag för design och inte en mätning.

## Enheter

Rumsytor, höjder, volymer och avstånd visas i den {{ui:Units}} du valt (kvadratfot och kubikfot, tum, millimeter, centimeter eller meter). Beräkningen i sig sker i SI; bara visningen ändras. Tider (sekunder), frekvenser och nivåer är oförändrade.
