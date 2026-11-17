---
title: Jämför två versioner av en modell
summary: Öppna två versioner av samma IFC-modell och se vilka element som lagts till, tagits bort och ändrats, matchade via deras GlobalId, med en CSV över varje ändring.
keywords: jämför, diff, skillnad, versioner, revision, ändringar, ändrad, tillagd, borttagen, flyttad, globalid, guid, vad som ändrats
from: cfca6971
---

## Vad du gör

Se vad som ändrats mellan modellen du hade och den du fick skickad: vilka element som är nya, vilka som är borta, vilka som flyttats eller fått nya egenskapsvärden.

## Steg

1. Öppna den nyare versionen, klicka sedan på {{ui:Lägg till en modell…}} och välj den äldre. Se [Se flera IFC-modeller tillsammans](topic:several-models).
2. Under {{ui:Modeller}}, öppna {{ui:Jämför versioner}}.
3. Välj {{ui:Äldre version}} och {{ui:Nyare version}}.
4. Klicka på {{ui:Jämför}}.
5. Klicka på ett element i en lista för att välja det och se dess egenskaper. Klicka på {{ui:Ladda ner CSV}} för alla ändringar, egenskap för egenskap.
6. Klicka på {{ui:Rensa}} för att gå tillbaka till den vanliga vyn.

## Vad du bör se

- **Tillagda** element i blått, från den nyare versionen.
- **Borttagna** element i rött, från den äldre versionen.
- **Ändrade** element i ockra, från den nyare versionen, där det står vad som ändrats: egenskaper, en flyttning med hur långt, eller en ny form.
- Allt som är likadant, genomskinligt.

## Bra att veta

- Elementen matchas via deras GlobalId. Ett program som ger element nya GlobalId vid varje export gör att varje element ser borttaget och tillagt igen.
- Positioner jämförs där modellerna står i scenen. Om en version flyttats med avsikt, rada upp dem först med {{ui:Flytta}} i {{ui:Modeller}}.
- Ett GlobalId som används två gånger i en modell utelämnas från jämförelsen. [Kontrollera en modell efter vanliga problem](topic:model-checks) hittar sådana.

## Nästa

- [Ärenden och BCF-filer](topic:issues-bcf)
- [Summera mängder efter egenskap](topic:quantity-totals)
