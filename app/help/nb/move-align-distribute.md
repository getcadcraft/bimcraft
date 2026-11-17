---
title: Flytt, kopier, innrett og fordel bygningselementer
summary: Flytt vegger, dekker, søyler og plasserte elementer med et basispunkt og et annet punkt eller en skrevet avstand, kopier dem underveis, og rett dem inn eller fordel dem jevnt, på planen eller fra et plukk i 3D.
keywords: flytt, kopier, innrett, fordel, avstand, mellomrom, forskyv, basispunkt, vegger, søyler, dekker, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Hva du skal gjøre

Flytt en vegg, en søyle, et dekke eller et plassert bibliotekselement til et nytt sted, lag kopier av det, eller rett inn flere på linje, uten å tegne dem på nytt.

## Navn og taster

Kommandoene heter {{ui:Flytt}}, {{ui:Innrett}} og {{ui:Fordel}}, og du kan skrive `MOVE`, `ALIGN` og `DISTRIBUTE` på kommandolinjen, slik som i tegneappen CadCraft. En forskjell: i BimCraft er {{key:M}} {{ui:Mål}}, så Flytt har sin egen tast, {{key:Shift+M}}. Verktøyene finnes i menyen {{ui:Bygg}}.

## Flytt

1. Plukk det som skal flyttes, på planen eller i 3D-visningen. Vegger, dekker, søyler og plasserte bibliotekselementer kan alle være med i ett plukk.
2. Trykk {{key:Shift+M}} eller velg {{ui:Flytt}}.
3. Klikk et basispunkt, og deretter et annet punkt. Eller skriv en avstand etter basispunktet og trykk {{key:Enter}}: den går i retningen pekeren peker fra basispunktet. Du kan også skrive `dx,dy` (eller `@dx,dy`), eller `lengde<vinkel`.
4. Trykk {{key:C}} for å slå på {{ui:Kopier}}: hver flytting lager da kopier og er klar for neste. Trykk {{key:Esc}} for å stoppe.

Begge punktene kan også klikkes i 3D-visningen: med Flytt på, møter pekeren gulvhøyden på nivået, så et klikk der er et punkt på planen. Hold {{key:Shift}} mens du klikker for å plukke et annet element i stedet. Bruk plan-, topp-, front- eller sidevisning etter ønske: punktene ligger alltid på det nivået.

En vegg tar sine dører og vinduer med seg. Et tegnet gulv tar med seg sine åpninger. Rom, gulv og himlinger som følger veggene, oppdateres. Vegger som var sammenføyd med den flyttede veggen, blir stående der de er.

Hver flytting er én endring: ett {{key:Mod+Z}} angrer den, og den går til alle i en Live TeamWork-økt. Et plassert bibliotekselement kan ikke kopieres på denne måten; bruk {{ui:Rediger}} › {{ui:Kopier}} og {{ui:Lim inn}}.

## Innrett

Plukk to eller flere elementer, velg {{ui:Innrett}}, deretter en side (venstre, midt, høyre, topp, midt eller bunn) og hva som skal innrettes etter: det plukkede settet, det første plukkede, det siste plukkede, eller et punkt du klikker. Trykk {{ui:Innrett}} i verktøylinjen.

## Fordel

Plukk tre eller flere elementer, velg {{ui:Fordel}}, deretter en retning (på tvers eller nedover) og avstanden: like store mellomrom mellom dem, eller like store midtpunkter. De to i endene blir stående der de er.

Vegger som Innrett eller Fordel flytter, beholder sine sammenføyinger, som ved Flytt: en vegg som er sammenføyd med en flyttet vegg glir med enden langs sin egen linje for å holde seg sammenføyd, skillevegger som støter inn i den følger med, og to sammenføyde vegger som begge flyttes beholder hjørnet der de nye linjene møtes. Rom forblir lukket. Det er ett steg i **Endringer**.
