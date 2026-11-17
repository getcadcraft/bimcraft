---
title: Lös kollisioner med varje disciplins åtgärder
summary: Från kollisionsresultaten listar Föreslå åtgärder för varje kollision vad varje disciplin kan göra åt den, till exempel en kanal omdirigerad under en balk, ett rör flyttat åt sidan, en pelare som flyttas eller en öppning i en balk. Varje åtgärd testas på en kopia av modellen med sina avvägningar, för dig att godkänna eller avvisa. Godkända åtgärder läggs in som ett enda ångra-steg.
keywords: kollision, kollisionsåtgärd, lös kollisioner, åtgärda kollisioner, samordning, föreslå åtgärder, omdirigera, omväg, förskjutning, kanal, rör, kabelstege, balk, pelare, öppning, hylsa, avvägning, disciplin, konstruktion, VVS, sanitet, el, arkitektur, assistent
from: f7bafdd9
---

## Vad du gör

Gör en lista av kollisioner till beslut. Varje disciplin (konstruktion, VVS, sanitet, el och arkitektur) föreslår åtgärder för bara sina egna element, varje förslag kontrolleras på en kopia av modellen, och du väljer.

## Steg

1. Kör kollisionskontrollen först. Se [Kontrollera kollisioner](topic:clash-check) och [Kontrollera rör och kanaler mot konstruktionen](topic:mep-against-structure).
2. Under resultaten klickar du på {{ui:Propose fixes}}. Panelen **Föreslagna åtgärder** öppnas bredvid modellen.
3. För varje kollision ser du varje disciplins förslag, bäst först. Varje rad säger vad den gör och dess avvägningar: om den löser kollisionen, hur många nya kollisioner den skapar, vilka regler den bryter, hur mycket ledning den lägger till eller hur långt den flyttar, hur många kopplingsdelar det blir och en kostnadspoäng.
4. Klicka på {{ui:Show}} för att se elementen i 3D. Klicka på {{ui:Accept}} på den åtgärd du vill ha (en per kollision), eller på {{ui:Reject}}.
5. Raden längst ned säger vad alla dina godkända åtgärder gör tillsammans: hur många kollisioner som är lösta, hur många som återstår och om något nytt kolliderar.
6. Klicka på {{ui:Apply accepted fixes (one undo step)}}. Kollisionskontrollen körs igen. {{ui:Undo}} tar tillbaka dem alla på en gång.

## Vad varje disciplin får göra

- **VVS** (kanaler, värme- och kylrör): gå om över eller under på det ben som träffar, höja eller sänka hela ledningen, flytta den åt sidan, eller göra en rektangulär kanal flackare med samma area.
- **Sanitet** (vatten, avlopp, gas, brand): samma åtgärder, förutom att ett självfallsavlopp aldrig får en omväg. Det kan bara flyttas som helhet, med bibehållet fall.
- **El** (kabelstegar och installationsrör): samma åtgärder. En kabelstege måste hålla 150 mm fritt ovanför sig för att kunna dra kabel.
- **Konstruktion**: flytta en pelare (upp till 300 mm), eller en öppning i en balks liv eller i ett bjälklag för den ledning som passerar. Varje konstruktiv åtgärd anger att konstruktören måste godkänna den.
- **Arkitektur**: en hylsa i en vägg för ledningen som passerar, eller flytta en vägg som är känd för att inte bära last.

## Vad du bör se

- Åtgärder som bryter en regel är markerade: närmare än 25 mm mellanrum till något annat, under 2,100 mm fri höjd, en öppning i liv större än 40 % av balkens djup eller för nära dess ändar, eller en balk som skulle ändra spännvidd.
- Åtgärder som BimCraft kan göra tillämpas på modellen: ledningar du ritat med verktygen Rör och Kanal och pelare du ritat. De andra visar **Endast råd**. Att godkänna dem lägger i stället till ett ärende på fliken Ärenden.

## Bra att veta

- Åtgärderna kommer från inbyggda regler i appen. Ingen AI används för dem.
- Om du kopplar en assistent (se [Låt en AI-assistent arbeta med din modell](topic:assistants)) kan den läsa kollisionerna och lägga till egna förslag för en disciplin i den öppna panelen. De kontrolleras på samma sätt, märks med assistentens namn, och inget ändras förrän du godkänner och verkställer.
- Kopian kontrolleras med lådor runt varje element och varje ben i en ledning, så en sluttande ledning kan visa en kollision som kollisionskontrollen inte skulle visa. Kör kollisionskontrollen igen efter att du verkställt: den är det sista ordet.
- Gränserna (hur långt en ledning får flyttas, hur högt en omväg får gå, avståndet) är standardvärdena som står i panelen.

## Nästa

- [Ärenden och BCF-filer](topic:issues-bcf)
- [Rita rör- och kanalledningar](topic:pipes-and-ducts)
