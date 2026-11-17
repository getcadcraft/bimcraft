---
title: Måttsätt ett rutnät
summary: Visa avståndet mellan närliggande rutnätslinjer och rutnätets totala storlek på varje nivås plan. Sparas i IFC och följer rutnätet när linjerna ändras.
keywords: rutnät, rutnätsmått, mått, avstånd, spann, totalstorlek, bubblor, pelarrutnät, plan, blad
from: aaea5d08
---

## Vad du gör

Placera avståndet mellan rutnätslinjerna och rutnätets totala storlek i planerna, utanför bubblorna, så att de blad som görs av dem bär måtten. Du behöver först ett rutnät: se [Rutnät och pelare](topic:grids-and-columns).

## Steg

1. Visa planen för en nivå och klicka på {{ui:Rutnät}} för att slå på rutnätsverktyget. Alternativraden för rutnät visas.
2. Bocka i {{ui:Måttsättning}}. Avståndet mellan närliggande numrerade linjer och mellan närliggande bokstavslinjer, samt den totala storleken åt varje håll, ritas ut i planen.
3. Välj en annan nivå: samma mått visas i dess plan.
4. Flytta en linje, byt namn på en eller lägg till en. Måtten följer rutnätet.
5. Avbocka {{ui:Måttsättning}} för att ta bort måtten igen.

## Anteckningar

- Varje ändring är ett ångra-steg: {{key:Mod+Z}} tar tillbaka den.
- Inställningen sparas i IFC-filen tillsammans med rutnätet, och planerna som placeras på blad bär måtten.
- Om modellen inte har något rutnät du kan ändra (ett rutnät som kom i en fil från ett annat program kan inte ändras här) står det på statusraden: ”Det finns inget rutnät att ändra.”
