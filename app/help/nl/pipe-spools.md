---
title: Stalen leidingspools en spoolbladen
summary: Snijd een stalen stompgaslas-leidingtraject in spools op een langste lengte en bij de montagelassen die u plaatst, nummer ze, en download per spool een spoolblad (3D-weergave, snijlengten, fittingen, lassen, materiaalstaat) als pdf en csv; kanalen krijgen een snijlijst van rechte stukken.
keywords: spool, spools, spoolblad, isometrie, fabricage, prefabricatie, montagelas, werkplaatslas, stompgaslas, snijlengte, snijlijst, materiaalstaat, stuklijst, bom, stalen leiding, schedule 40, lijnnummer, kanaalzaaglijst, kanaalstukken
from: 539f51de
---

## Wat u gaat doen

Maak van een stalen leidingtraject de stukken die een werkplaats aan elkaar last en een monteur plaatst: spools die niet langer zijn dan een lengte die u kiest, gesplitst waar u montagelassen plaatst, elk met een eigen blad.

Alleen **stalen stompgaslas-leiding** wordt in spools gesneden (leidingmaten ASME B36.10M, bochten met de lange straal van ASME B16.9). Koper-, PVC- en PEX-verbindingen zijn geen stompgaslassen, dus hun trajecten hebben geen spools.

## Een traject in spools snijden

1. Kies een stalen leidingtraject. Vink in Eigenschappen **In spools snijden** aan.
2. **Langste spool**: de meeste hartlijnlengte die één spool mag hebben (om mee te beginnen 6 m, ongeveer 20 ft).
3. **Lijnnummer**: onderdeel van elk spoolnummer. Een nieuw in spools gesneden traject krijgt het eerstvolgende vrije nummer van zijn systeem.

De spools worden langs het traject genummerd, vanaf het eerste punt: `CHW-12-S01`, `CHW-12-S02` … (het systeem, het lijnnummer, de spool). Een spool groeit onderdeel voor onderdeel; het onderdeel dat hem te lang zou maken, begint de volgende; een recht stuk dat langer is dan een spool, wordt gesneden waar de spool vol is.

## Montagelassen plaatsen

1. Open {{ui:Build}} en kies {{ui:Montagelas}}.
2. Klik op een leiding met spools waar de montagelas komt. In een recht stuk wordt de leiding daar doorgesneden; binnen een fitting of een afsluiter verschuift de las naar de dichtstbijzijnde verbinding.

Eigenschappen somt de montagelassen van het traject op, elk met {{ui:Verwijderen}}. Elke wijziging is één stap van {{ui:Ongedaan maken}}.

## Spoolbladen

In Eigenschappen van een traject met spools:

- {{ui:Spoolbladen (PDF)}}: één pagina per spool. Links de spool in een isometrisch aanzicht van 30°: de rechte stukken genummerd, werkplaatslassen als stippen, montagelassen gemarkeerd als FW, en het noorden van de plattegrond. Rechts het spoolnummer, de maat, de schedule en de lengte, daarna de **snijlengten**, **fittingen**, **lassen** (een werkplaatsstompgaslas bij elke verbinding binnen de spool, en een montagelas waar hij op de volgende spool aansluit) en de **materiaalstaat** met het gewicht van de leiding (ASME B36.10M plain-end gewicht).
- {{ui:Spoollijst (CSV)}}: hetzelfde, één blok per spool.

:::note
Snijlengten zijn van uiteinde tot uiteinde, zoals getekend: er wordt geen wortelspleet of lasmarge afgetrokken. Bochten zijn van de lange straal van B16.9; T-stukken, verlopen en afsluiters zijn generiek, bepaald op basis van de leiding en niet van B16.9 of een fabrikant, en het blad zegt dat. Gewichten van fittingen worden niet gegeven. Een hulpmiddel voor tekenen en coördinatie, bepaald door een ingenieur.
:::

## In het IFC-bestand

Elk onderdeel van een traject met spools draagt **CadCraft_Spool** met zijn SpoolId, het traject, het spoolnummer in het traject, en waar het langs het traject begint en eindigt. Het traject houdt zijn regels (langste spool, montagelassen, lijnnummer) in een eigen set, zodat de spools hetzelfde terugkomen wanneer het bestand opnieuw wordt geopend.

## Kanalen: een snijlijst

Open {{ui:Build}} en klik op {{ui:Kanaalzaaglijst}}: een csv van de rechte kanaalstukken per systeem, vorm en maat, waarbij elk recht stuk wordt gesneden in stukken van de **Stuklengte** in de kanaalbalk (om mee te beginnen 1500 mm, ongeveer 5 ft), plus wat overblijft. Alleen lengten: geen naden, plaatdiktes of verbindingen.
