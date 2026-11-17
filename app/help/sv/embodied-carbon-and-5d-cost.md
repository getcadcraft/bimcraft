---
title: Inbäddad koldioxid och kostnader i tidplanen
summary: Summera modellens inbäddade koldioxid från en öppen, redigerbar faktortabell, och fördela priser över 4D-tidplanen till en kostnads- och kassaflödeskurva. Båda utgår från värden du skriver in eller importerar.
keywords: inbäddad koldioxid, koldioxid, co2, kgco2e, utsläpp, faktortabell, epd, 5d, kostnad, kassaflöde, s-kurva, tidplanskostnad, priser, mängdavtagningspriser
from: 83e82840
---

## Inbäddad koldioxid

Öppna panelen **Koldioxid**. Varje elements mängd (volym, area eller längd) multipliceras med en faktor från tabellen, per livscykelmodul: produktskedet krävs, transport och avfall är valfria. Summor fås per material, klass och våningsplan, och per kvadratmeter golvyta.

**Faktortabellen är din.** Raderna som följer med BimCraft är generiska startvärden i rätt storleksordning. De kommer inte från en databas, är markerade som ej kontrollerade och behöver ersättas med den källa du använder (en EPD, en nationell databas eller ditt företags siffror). Redigera rader i panelen, eller importera och exportera tabellen som CSV eller JSON. Rader du lägger till åsidosätter startraden med samma id. Tabellen sparas i modellen.

Element utan träff, eller utan mängd, listas som **Problem** i stället för att räknas som noll.

## Kostnader i 4D-tidplanen

Öppna panelen **Kostnad** bredvid 4D-tidplanen. Ge den priser (skriv in dem, importera en CSV- eller JSON-fil, eller ta med raderna från TakeoffCraft). Koppla varje pris till modellens material med nyckelord, så prissätter den varje uppgifts element. En uppgifts kostnad fördelas över dess dagar från start till slut, jämnt eller med tyngdpunkten i början eller slutet. Panelen ritar den kumulativa kassaflödeskurvan per dag, vecka eller månad, med kostnad per skede och paket, och vad som är planerat mot vad som är byggt på ett datum. Export som CSV. Inget prissätts förrän du anger priser. Inga priser levereras med.

## Valuta

En prislista kan ange i vilken valuta priserna är (tre bokstäver, till exempel USD eller EUR). Panelen 5D har en ruta för det. Valutan sparas i filen tillsammans med priserna, och JSON-exporter innehåller den. En tabell som gjorts tidigare, eller där du lämnat fältet tomt, har ingen valuta. Dess kostnader visas i USD, programmets standard, och panelen och de löpande summorna säger det. Inget omräknas mellan valutor.
