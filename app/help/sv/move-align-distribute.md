---
title: Flytta, kopiera, justera och fördela byggnadselement
summary: Flytta väggar, golv, pelare och placerade objekt med en basspunkt och en andra punkt eller ett inskrivet avstånd, kopiera dem under tiden, och rikta in dem eller fördela dem jämnt, på planen eller från ett val i 3D.
keywords: flytta, kopiera, justera, fördela, avstånd, förskjutning, basspunkt, förflyttning, väggar, pelare, golv, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Vad du ska göra

Flytta en vägg, en pelare, ett golv eller ett placerat biblioteksobjekt till en ny plats, skapa kopior av det, eller rikta in flera, utan att rita om dem.

## Namn och tangenter

Kommandona heter {{ui:Flytta}}, {{ui:Justera}} och {{ui:Fördela}}, och du kan skriva `MOVE`, `ALIGN` och `DISTRIBUTE` på kommandoraden, som i CadCraft-ritappen. En skillnad: i BimCraft är {{key:M}} Mät, så Flytta har en egen tangent, {{key:Shift+M}}. Verktygen finns i menyn {{ui:Bygge}}.

## Flytta

1. Välj vad som ska flyttas, på planen eller i 3D-vyn. Väggar, golv, pelare och placerade biblioteksobjekt kan alla ingå i ett och samma val.
2. Tryck på {{key:Shift+M}} eller välj {{ui:Flytta}}.
3. Klicka en basspunkt och sedan en andra punkt. Eller skriv, efter basspunkten, ett avstånd och tryck på {{key:Enter}}: det går åt det håll pekaren pekar från basspunkten. Du kan också skriva `dx,dy` (eller `@dx,dy`), eller `längd<vinkel`.
4. Tryck på {{key:C}} för att slå på {{ui:Kopiera}}: varje flyttning gör då kopior och är redo för nästa. Tryck på {{key:Esc}} för att sluta.

Båda punkterna kan också klickas i 3D-vyn: med Flytta på pekar pekaren på nivåns golvhöjd, så ett klick där är en punkt på planen. Håll {{key:Shift}} nedtryckt när du klickar för att välja ett annat element i stället. Använd en plan-, Ovan-, Framsida- eller Sidavy efter behag: punkterna ligger alltid på den nivån.

En vägg tar med sig sina dörrar och fönster. Ett ritat golv tar med sina öppningar. Rum, golv och undertak som följer väggarna uppdateras. Väggar som var sammanfogade med den flyttade väggen står kvar där de är.

Varje flyttning är en ändring: ett {{key:Mod+Z}} ångrar den, och den går till alla i en Live TeamWork-session. Ett placerat biblioteksobjekt kan inte kopieras på detta sätt; använd {{ui:Redigera}} › {{ui:Kopiera}} och {{ui:Klistra in}}.

## Justera

Markera två eller fler element, välj {{ui:Justera}}, sedan en sida (vänster, centrum, höger, överst, mitten eller nederst) och vad som ska justeras mot: det markerade, det först markerade, det sist markerade, eller en punkt du klickar. Tryck på {{ui:Justera}} i verktygsfältet.

## Fördela

Markera tre eller fler element, välj {{ui:Fördela}}, sedan en riktning (i sidled eller nedåt) och avståndet: lika stora luckor mellan dem eller lika stora centrum. De två i ändarna står kvar där de är.

Väggar som Justera eller Fördela flyttar behåller sina sammanfogningar, som vid Flytta: en vägg som är sammanfogad med en flyttad vägg glider med sin ände längs sin egen linje för att förbli sammanfogad, skiljeväggar som stöter in i den följer med, och två sammanfogade väggar som båda flyttas behåller sitt hörn där deras nya linjer möts. Rum förblir slutna. Det är ett steg i **Ändringar**.
