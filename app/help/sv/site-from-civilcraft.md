---
title: Grannbyggnader och fastighet från CivilCraft
summary: Ta byggnaderna och fastigheten som CivilCrafts Adress till tomt hittade runt en adress som förslag, och lägg till de du markerar.
keywords: tomt, adress, fastighet, grannar, sammanhang, civilcraft, ccsite, byggnader, tomtkontur, föreslå
from: 3be9407b
---

## Vad det gör

I CivilCraft, Yta › Mer › Adress till tomt hittar byggnaderna, fastigheten, detaljplanen, översvämningszonen och jorden runt en adress från öppna data. Knappen ”Skicka till BimCraft som förslag” (eller ”Spara tomten som en fil”, och öppna sedan `.ccsite.json` här) tar dem till BimCraft. Ingenting läggs till förrän du säger det.

## Så här använder du det

1. Starta eller öppna en modell. Adresspunkten ligger i origo för nivån du är på.
2. En ruta listar varje grannbyggnad och fastigheten med en kryssruta. Avmarkera det du inte vill ha.
3. Byggnader vars höjd källan inte angav använder höjden som skrivits in överst i rutan. En byggnad som bara angav sitt antal våningar räknas som 3 m per våning, och rutan säger det.
4. Tryck på ”Lägg till de markerade”. Byggnaderna blir väggar runt sina fotavtryck, lika höga som angivna, i ett steg i Ångra. Fastigheten blir tomtens kontur, som ett andra steg i Ångra.

Detaljplan, översvämningszon och jordart visas endast för information; de ritas inte.

## Att tänka på

- Konturerna är så bra som de öppna data är: OpenStreetMap och kommunala fastighetslager skiljer sig mycket från plats till plats. Kontrollera det som betyder något mot en mätning.
- Lägen är meter österut och norrut från adresspunkten på en platt approximation, bra inom några meter inom några kilometer.
- Data bär sina källors licenser (OpenStreetMap är ODbL); rutan visar källangivelsen.
