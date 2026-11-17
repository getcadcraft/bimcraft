---
title: Leidingen en kanalen op apparatuur aansluiten
summary: Begin of eindig een leiding of kanaal op een poort, zodat het de maat en het systeem van die poort overneemt en eraan vastzit, en controleer daarna de aansluitingen: open poorten, maat- en systeemverschillen, en stukken zonder bron.
keywords: mep, aansluiten, aansluiting, aansluitingen, poort, poorten, open poort, maatverschil, systeemverschil, bron, aansluitingen controleren, vast, volgen, apparatuur verplaatsen, ifcrelconnectsports, coördinatie
from: 29144fb0
---

## Wat u gaat doen

Verbind de stukken met de apparatuur, zodat het model één samenhangend systeem is: de uitgang van een pomp met de leiding die er vandaan komt, de hals van een diffusor met zijn aftakkanaal. Laat BimCraft daarna weergeven wat niet is aangesloten.

## Tekenen vanaf een poort

1. Kies {{ui:Leiding}} of {{ui:Kanaal}}.
2. Beweeg de aanwijzer naar een poort van een stuk apparatuur (de kleine cirkels; een open poort wordt in de waarschuwingskleur getekend). De aanwijzer springt erop vast en zegt **op een poort**.
3. Klik: het stuk begint op de hoogte van de poort en **neemt de maat en het systeem over** (een leiding neemt ook het gebruikelijke materiaal van het systeem over). De statusregel zegt wat er is overgenomen.
4. Teken verder zoals gewoonlijk. Een stuk eindigen op een andere poort maakt dat einde ook vast.

Het einde van een stuk op een poort is **vast** eraan: verplaats of draai de apparatuur (in Eigenschappen), dan gaat het einde van het stuk mee; bewerk het stuk, dan blijft dat einde op de poort. De andere hoeken van het stuk blijven waar ze zijn, dus na een grote verplaatsing kan het eerste deel onder een hoek van de poort loskomen: verplaats ook de volgende hoek.

## De aansluitingen controleren

Open {{ui:Build}} en klik op {{ui:Aansluitingen controleren}}. De lijst onder de balk toont:

| Regel | Wat het betekent |
|---|---|
| Een poort is niet aangesloten | Een stuk apparatuur heeft een aansluiting waarop niets is getekend |
| Niets aan het einde | Een stuk eindigt in de lucht |
| Aangesloten poorten van verschillende maten | Een stuk van de ene maat komt zonder verloop op een poort of stuk van een andere maat (nominale maat van een leiding, vorm en zijden van een kanaal) |
| Aangesloten poorten van verschillende systemen | Bijvoorbeeld een retourkanaal op een toevoerdiffusor |
| Een leiding aan een kanaal aangesloten | Twee aansluitingen van verschillende soort komen samen |
| Geen apparatuur in het netwerk levert het | Niets waarop een stuk is aangesloten, hoe ver ook verderop, heeft een uitgang. Afvoer, regenwaterafvoer en ontluchting worden hier niet naar gevraagd: hun water komt van de armaturen |
| Vast aan een poort van apparatuur die niet meer in het model staat | De apparatuur is verwijderd; teken het einde opnieuw of verwijder het stuk |

Fouten staan eerst. Klik op een regel om het object te selecteren dat erin genoemd wordt. {{ui:Sluiten}} verbergt de lijst. De controle leest het model zoals het is getekend: hij controleert aansluitingen en maten, nooit debieten, drukken of afregeling.
