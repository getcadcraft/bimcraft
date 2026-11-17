---
title: Hitta element efter klass, namn eller egenskap
summary: Hitta alla element som matchar en eller flera regler — deras klass, namn, typ, våningsplan, material eller värde för en egenskap — markera alla och spara reglerna som en namngiven sökuppsättning.
keywords: hitta, sök, filter, fråga, regel, sökuppsättning, markeringsuppsättning, sparad sökning, egenskap, värde, klass, material, markera alla
from: 3d293bc2
---

## Vad du gör

Markera alla element av en typ eller med ett visst värde i ett enda steg: alla dörrar, alla väggar på Nivå 2, alla element vars brandklass är EI60, alla väggar som kostar mer än ett visst belopp.

## Steg

1. Öppna en IFC-modell.
2. Öppna {{ui:Sök}} i den vänstra panelen.
3. I den första regeln väljer du en egenskap (elementets egna först, till exempel {{ui:Klass}} och {{ui:Våningsplan}}, sedan modellens egenskapsuppsättningar), hur du jämför och ett värde. Värderutan föreslår de värden modellen har.
4. För att avgränsa klickar du på {{ui:Lägg till en regel}}. Välj {{ui:Alla regler}} om alla ska gälla, eller {{ui:Någon regel}} om en av dem ska gälla.
5. Klicka på {{ui:Sök}}, eller tryck på {{key:Enter}} i en värderuta. Det som matchar markeras.
6. För att behålla reglerna klickar du på {{ui:Spara som en uppsättning}}, skriver ett namn och klickar på det igen. Klicka på en uppsättnings namn senare för att söka med den.

## Vad du ska se

- Träffarna markeras i 3D-vyn och modellträdet, och i {{ui:Egenskaper}} står hur många det är per klass. Tryck på {{key:I}} för att bara visa dem, {{key:H}} för att dölja dem.
- Ord matchar oavsett versaler. Tal jämförs som tal: ”är större än 1000” avser värdet, inte texten.
- {{ui:har ett värde}} och {{ui:har inget värde}} behöver inget värde; de hittar det som är ifyllt, eller det som saknas.
- Sparade uppsättningar finns kvar i den här webbläsaren för alla modeller du öppnar.

## Vanliga misstag

- **Inget hittas.** En regel behöver ett värde som den kan matcha: titta på förslagen i värderutan.
- **En egenskap saknas i listan.** Inget element med en form i den här modellen har den.

## Nästa

- [Färglägg element efter en egenskap](topic:color-by-property)
- [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate)
