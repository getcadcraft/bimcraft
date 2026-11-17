---
title: Utvecklingsnivå (LOD) och milstolpskontroller
summary: Ge element en utvecklingsnivå, se var den kommer ifrån, kontrollera modellen mot den LOD som en milstolpe kräver och åtgärda saknade taggar och onamngivna rum. Alla kontroller ger råd; ingenting blockeras.
keywords: lod, utvecklingsnivå, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, milstolpe, milstolpstabell, modellkontroller, saknade taggar, onamngivna rum, generisk tidigt, IFC-klass, klassifikation
from: 2091c79b
---

## Vad du gör

Ange hur långt utvecklat varje element är och kontrollera sedan hela modellen mot vad en projektmilstolpe kräver.

## Steg

1. Välj ett element (eller flera) och öppna {{ui:Egenskaper}}. Hitta {{ui:Utvecklingsnivå}}.
2. Välj en nivå i listan. Varje nivå namnges efter vad den betyder, och varje nivå inkluderar nivåerna under den. Ett ångrasteg omfattar hela markeringen.
3. Läs var nivån kommer ifrån: detta element, dess typ eller en fältverifierad markering.
4. Om du vill kontrollera modellen, öppna {{ui:Modellkontroller}} till vänster och sedan {{ui:LOD-milstolpar}}. Välj milstolpen och tabellen (starttabellen eller din egen CSV- eller JSON-fil med {{ui:Last}}).
5. Klicka på {{ui:Kontrollera modellen}}. Summorna och en rad för varje tabellrad visar vad som nått sin nivå och vad som inte gjort det; fynden visas också i listan Problem.
6. Under {{ui:Saknade taggar och onamngivna rum}} klickar du på {{ui:Hitta dem}}, redigerar förslagen om du vill och klickar på {{ui:Verkställ}}.

## Vad du bör se

- Nivån du valde på elementet, med dess IFC-klass och klassifikationskoder bredvid.
- Summor och rader för milstolpen. En tabell ändrar aldrig vad en nivå betyder: skalan är fast, och en tabell anger bara vilken nivå en milstolpe kräver.
- "Förbli generisk tidigt": råd om att hålla elementen generiska vid en tidig milstolpe. Det är endast råd.

## Bra att veta

- Inget här blockerar dig. En modell under den nivå som en milstolpe kräver listas, men nekas inte.
- De tre delarna av en nivå (geometri, information, dokumentation) kan var och en anges; en markering visar uppfyllt, under eller inte angiven.
