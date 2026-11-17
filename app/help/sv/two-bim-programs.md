---
title: Arbeta mellan två BIM-program
summary: Skicka en modell från ett BIM-program till ett annat via IFC med BimCraft i mitten, behåll dess GlobalId:n, egenskapsuppsättningar och klassifikationer, ställ in båda programmen för samma egenskaper, och se vad som kom tillbaka.
keywords: ifc, tur och retur, interoperabilitet, globalid, guid, egenskapsuppsättningar, psets, klassifikationer, delade parametrar, egenskapsmappning, översättare, bcf, samordning, utbyte
from: 9f224176
---

## Vad du gör

Flytta en modell mellan två BIM-program, till exempel från Revit till Archicad och tillbaka, via IFC, med BimCraft i mitten för att kontrollera den, lägga till i den och rapportera vad som överlevde. Inget av programmens egna filformat läses: allt färdas som IFC.

## Vad BimCraft behåller

När du ändrar en modell i BimCraft och klickar på {{ui:Spara som IFC}} skrivs varje rad du inte ändrade tillbaka exakt som den var. Alltså:

- **GlobalId:n** förblir desamma, och det andra programmet kan matcha varje element med det det skickade.
- **Egenskapsuppsättningar** och deras värden finns kvar, utom de värden du ändrade.
- **Klassifikationer** förblir kopplade till sina element.

## Ställ in båda programmen för samma egenskaper

1. Öppna modellen i BimCraft (och projektpaketet, om du har ett: dess egenskapsgrupper läggs till).
2. Öppna {{ui:Mellan två BIM-program}} i den vänstra panelen.
3. Under **Egenskapsmappning** laddar du ned det varje program behöver:
   - {{ui:Delade parametrar}}: en fil med delade parametrar. I Revit läser du in den med Hantera › Delade parametrar och lägger till parametrarna i de kategorier som behöver dem.
   - {{ui:IFC-exportens egenskapsuppsättningar}}: en användardefinierad fil med egenskapsuppsättningar. I Revits IFC-exportinställningar väljer du den under användardefinierade egenskapsuppsättningar, så att den exporterade IFC:n bär samma uppsättnings- och egenskapsnamn.
   - {{ui:Mappningstabell (CSV)}}: varje egenskap med dess IFC-uppsättning och namn, dess typ och motsvarande namn i vart och ett program. Archicads mappningsfiler är inte ett publicerat format, så ställ in dess IFC-översättare och egenskapshanterare för hand utifrån den här tabellen.
   - {{ui:Mappningsfil}}: hela mappningen som en fil, att spara tillsammans med projektet.

Standarduppsättningar (Pset_ och Qto_) utelämnas från den delade parameterfilen: båda programmen skriver dem från sina egna data.

## Skicka modellen och hämta tillbaka den

1. Exportera IFC från det första programmet med GlobalId:n bevarade (Revit: "Store the IFC GUID in an element parameter after export" på).
2. Öppna den i BimCraft, kontrollera den ({{ui:Modellkontroller}}, {{ui:Kollisionskontroll}}), lägg till ärenden ({{ui:Ärenden}}, BCF), ändra värden om du behöver, och {{ui:Spara som IFC}}.
3. Öppna den sparade IFC-filen i det andra programmet, arbeta i den och exportera IFC därifrån med GlobalId:n bevarade (Archicads översättare: "Global Unique Identifiers: Keep existing").
4. Tillbaka i BimCraft öppnar du modellen som skickades ut, och lägger sedan till den som kom tillbaka ({{ui:Lägg till en modell}} under Modeller).
5. I {{ui:Mellan två BIM-program}} väljer du **Skickades ut** och **Kom tillbaka**, och klickar på {{ui:Gör rapporten}}.

## Läs rapporten

- **Element**: hur många som kom tillbaka med samma GlobalId, hur många som saknas och hur många som är nya. Element med en ny GlobalId visas som ett saknat och ett nytt: det andra programmet behöll inte den.
- **IFC-klass ändrad**: element som kom tillbaka som en annan sorts element.
- **Egenskapsvärden behållna**: andelen värden som kom tillbaka oförändrade. Listan nedan visar egenskaperna med flest ändrade eller saknade värden.
- **Klassifikationer**: behållna, ändrade (samma system, annan kod) eller saknade.

{{ui:Ladda ner rapporten (CSV)}} ger varje egenskap med dess antal. För att se vilka element som flyttats eller ändrat form, använd {{ui:Jämför versioner}} på samma två modeller.

:::note
BimCraft kör inget av programmen. Vilka inställningar som för över ett värde beror på varje programs IFC-inställningar: rapporten visar vad som faktiskt kom tillbaka, så prova en inställning, exportera igen och jämför.
:::

## Ärenden skickas som BCF

Ärenden du öppnar i BimCraft exporteras som BCF ({{ui:Ärenden}}), som båda programmen kan läsa med sina BCF-verktyg, så en fråga om ett element når personen som arbetar i det andra programmet, med sin vy.

Se även [Öppna ett projektpaket](topic:open-project-bundle), [Från projektfil till BimCraft via IFC](topic:rvt-to-ifc) och [Jämför två versioner av en modell](topic:compare-versions).
