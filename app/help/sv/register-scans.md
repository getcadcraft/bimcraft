---
title: Passa in flera skanningar till en
summary: Placera skanningar tagna från olika positioner i en ram med utvalda punktpar eller inskrivna målpunkter, förfina dem med ICP, spara inpassningen som ett projekt och exportera det inpassade molnet som LAS eller E57.
keywords: inpassning, registrering, skanningar, punktmoln, icp, iterative closest point, målpunkter, punktpar, stel transformation, justera, sammanfoga, e57, las, skanning till BIM
from: e8e270db
---

## Vad du gör

Flera skanningar av samma plats (var och en från sin egen skannerposition) börjar i sina egna koordinater. Passa in dem: ge varje skanning en placering så att alla hamnar i en och samma ram, spara sedan det som ett projekt och skriv det inpassade molnet som en LAS- eller E57-fil.

## Placera skanningarna

1. Öppna dialogen ({{ui:Register scans…}} på startpanelen, eller {{ui:Show}} › {{ui:Register scans…}} när en modell är öppen). {{ui:Add scans…}} tar LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- eller XYZ-filer, eller släpp dem på dialogen. Skanningar som använder olika enheter nekas med en anteckning: konvertera en först.
2. Välj {{ui:Scan to move}} och {{ui:Place against}}. Bilden visar varje skanning i ramen som den är nu, en färg för varje: {{ui:Plan}}, {{ui:Front}} eller {{ui:Side}}. Dra för att panorera, använd hjulet för att zooma.
3. **Med punktpar.** Klicka på {{ui:Pick a pair}}, sedan på en punkt på skanningen som ska flyttas, sedan på samma plats på en annan skanning (ett hörn, ett måltecken, foten av en pelare). Gör detta minst tre gånger, med punkter som inte ligger på en linje och är utspridda. Klicka på {{ui:Place by pairs}}: skanningen placeras med en minsta kvadrat-anpassning, och **Left over** (Kvar) visar hur långt varje par ännu missar. Ett par med ett stort tal är ett dåligt val: ta bort det med krysset och placera igen.
4. **Med målpunkter.** Om en punkts sanna koordinater är kända (mätta måltecken), klicka på {{ui:Pick, then type target}}, klicka på punkten på dess skanning och skriv målets X, Y och Z på raden. Par och inskrivna målpunkter kan blandas fritt.

## Förfina med ICP

Par ger en grov placering. {{ui:Refine}} flyttar skanningen tills dess ytor ligger på den andra skanningens: först **point to point**, sedan **point to plane**. Tabellen listar varje steg med dess fel och hur många punkter som matchade; raden ovanför ritar felet som sjunker. {{ui:Stop}} avslutar körningen efter steget som pågår och behåller det som nåddes. {{ui:Undo}} tar hela körningen (eller den senaste placeringen) tillbaka; {{ui:Reset}} flyttar skanningen tillbaka till dess filkoordinater.

För att det ska gå snabbt på en bärbar dator arbetar ICP med en gallrad andel av punkterna ({{ui:Points used}}, 5,000 till 60,000) och ignorerar matchningar som ligger längre bort än {{ui:Largest match distance}} (som standard 5% av skanningens storlek, och det krymper när den lägger sig). Den behöver en grov placering först: skanningar som knappt överlappar rapporterar att de inte kan matchas. Ytor som bara är plana eller bara är raka kan inte låsa en position längs sig själva; lägg till par i så fall.

## Spara och exportera

- {{ui:Save project}} skriver en liten `.ccscans.json`-fil: varje skannings namn, storlek och ett fingeravtryck av dess första 64 KB, med dess transformation. Den innehåller inga punkter. {{ui:Open project…}} hittar skanningsfilerna via dessa referenser (filerna måste läggas till först) och återställer varje transformation.
- {{ui:Export LAS}} och {{ui:Export E57}} skriver en fil med alla skanningar på sin inpassade plats. Punkterna skrivs aldrig om i originalen; transformationen tillämpas på vägen ut. Med {{ui:Read every point from the files}} på läses varje fil igen för varje punkt (upp till 20 miljoner per skanning); av skrivs bara de punkter som visas i visaren.
- {{ui:Show registered cloud}} (BimCraft) skriver LAS-filen och öppnar den i 3D-vyn bredvid modellen, som alla andra moln.

:::note
Inget laddas upp. Inpassningen sker i filernas egna enheter och behåller millimeter: en LAS skrivs med en skala som passar (ned till 0.1 mm), en E57 med dubbla flyttal. Ett koordinatsystem förs över till LAS endast när alla skanningar anger samma EPSG-kod. E57-skrivaren är vår egen; den kontrolleras genom att dess filer läses tillbaka med denna läsare och med libE57Format.
:::
