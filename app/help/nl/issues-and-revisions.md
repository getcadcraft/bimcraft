---
title: Issues, revisies en het wijzigingslog van de tekening
summary: Leg elke set bladen die u uitgeeft vast, zie wat er sindsdien op elk blad en element is veranderd, en houd bouwplaatsinstructies, werkplaatstekeningen en gekoppelde modellen bij de issue waartoe ze behoren.
keywords: issue, uitgegeven set, ingediende set, indiening, revisie, revisies, wat er is veranderd, sinds issue, wijzigingslog, wijzigingslog van de tekening, tekeningregister, transmittal, bouwplaatsinstructie, werkplaatstekening, gekoppeld model, aanbesteding, bouw, momentopname, vergelijken
from: 4c732832
---

## Wat u gaat doen

Leg een issue vast: welke bladen zijn uitgegaan, op welke datum, met welk doel, elk met zijn revisie. Vraag later na wat er is veranderd sinds dat issue. Houd bouwplaatsinstructies en teruggekomen werkplaatstekeningen bij het issue.

## Stappen

1. Open in het linkerpaneel **Issues en revisies**.
2. Kies **Een issue vastleggen**. De revisie wordt voorgesteld (A, dan B; een genummerde zoals P1 telt omhoog). Kies waarvoor het is uitgegeven, aan wie het gaat, de datum en de bladen. Wanneer uw projectfase is ingesteld, volgt het doel die fase. Wanneer het vergunningenpakket een lijst met ondersteunende documenten heeft, worden de bladen die aan die lijst zijn gekoppeld voor u aangevinkt.
3. Laat **Ook een kopie van het model opslaan zoals uitgegeven** aangevinkt om het model precies te bewaren zoals het is uitgegaan. De kopie wordt gedownload; de naam, grootte en SHA-256 worden bij het issue bewaard.
4. Kies **Dit issue vastleggen**. Een blad dat is veranderd sinds het laatst is uitgegeven, krijgt de nieuwe revisie. Een blad dat niet is veranderd, houdt zijn revisie. Het titelblok van elk blad toont zijn revisie.
5. Om te zien wat er is veranderd, kiest u **Wijzigingen sinds** naast een issue. Elk blad staat op Gelijk of Gewijzigd, met de toegevoegde, gewijzigde en verwijderde elementen erop. Klik op een aantal om die elementen te selecteren.
6. Kies **Een record toevoegen** voor een bouwplaatsinstructie, een werkplaatstekening, een markup-set, een gekoppeld model of een notitie. Selecteer het issue waartoe het behoort. Een bestand dat u kiest, wordt vastgelegd met zijn naam, grootte en SHA-256; het bestand blijft waar het is.
7. **Wijzigingslog van de tekening** toont één rij voor elk blad en één kolom voor elk issue. **Het wijzigingslog downloaden (CSV)** slaat het op met de issues en records.
8. **De issuegeschiedenis opslaan** schrijft een `.issues.json`-bestand. MarkupCraft, TakeoffCraft en DetailCraft lezen het met **Een issuegeschiedenis lezen**.

## Goed om te weten

- De geschiedenis wordt bewaard in het IFC-bestand (eigenschapsset `CadCraft_Issues` op het project). Andere programma's negeren haar.
- Een blad geldt als gewijzigd wanneer de eigen instelling ervan is veranderd, of wanneer een element dat het toont is veranderd: een plattegrond toont zijn niveau, een gevel of doorsnede het hele model, en een deur- of raamstaat zijn deuren of ramen.
- Een element geldt als gewijzigd wanneer een eigenschap, zijn positie, zijn grootte of zijn vorm is veranderd.
- Om precies te zien welke eigenschap is veranderd, opent u de opgeslagen kopie van het uitgegeven model met **Versies vergelijken**.
- Het verwijderen van een issue behoudt zijn records, zonder issue. Elke stap is één keer ongedaan maken.
- Een model met meer dan 60.000 elementen houdt geen record per element bij het issue. Bladen worden nog steeds vergeleken.

## Nog niet beschikbaar

- Bladen worden niet als PDF bij het issue opgeslagen.
- Een revisiewolk wordt niet getekend op de eigen bladen van BimCraft. Leg wolken vast in MarkupCraft bij het issue.
