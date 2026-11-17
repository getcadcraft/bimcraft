---
title: Färglägg element efter en egenskap
summary: Färga varje element efter värdet på en egenskap, till exempel dess klass, typ, våningsplan, material, brandklass eller kostnad, läs teckenförklaringen, klicka på ett värde för att visa bara de elementen, och spara färgerna som ett schema att använda på andra modeller.
keywords: färg, färglägg, färga efter, teckenförklaring, smart vy, utseende, egenskap, typ, material, brandklass, filter, isolera, tema, värden, schema, färgschema, spara färger, återanvänd, team, json, färgprov
from: f081d343
---

## Vad du gör

Se på en gång hur en egenskap är spridd över modellen: vilka väggar som är ytterväggar, vilka material som används var, vilka element som saknar brandklass. Varje element får färgen för sitt värde, och teckenförklaringen visar vad varje färg betyder och hur många element som har den.

## Steg

1. Öppna en IFC-modell.
2. Klicka på fliken {{ui:Färg}} till höger.
3. Välj en egenskap i listan. De första gäller varje element ({{ui:Klass}}, {{ui:Typ}}, {{ui:Våningsplan}}, {{ui:Material}}, {{ui:Namn}}…); resten kommer från modellens egenskapsuppsättningar och mängduppsättningar, under uppsättningens namn. Siffran efter varje är hur många element som har den.
4. Läs teckenförklaringen: en färg, värdet och hur många element som har det.
5. Klicka på ett värde för att visa bara de elementen. Håll ned {{key:Mod}} och klicka för att lägga till fler värden. Tryck på {{key:Shift+H}} för att visa allt igen.
6. Klicka på {{ui:Av}} för att gå tillbaka till modellens egna färger.

## Vad du bör se

- Upp till sju värden får var sin färg, det vanligaste värdet först. Fler värden än så delar en grå färg och listas som **övriga värden**.
- Ett tal med många olika värden delas i sex lika intervall, från ljus (låg) till mörk (hög).
- Element utan egenskapen är en blek grå färg och listas som **Inget värde**, så att de färgade syns tydligare.
- Färgerna ändras med Papper och Modell och finns kvar när du redigerar modellen.
- En typs egenskap gäller för alla element av den typen; när ett element har ett eget värde för samma egenskap vinner det egna värdet.

## Ändra färger och spara dem som ett schema

- Klicka på ett värdes färgprov i teckenförklaringen för att välja en annan färg. Modellen målas om direkt.
- {{ui:Spara schema}} laddar ner färgerna som en liten `.json`-fil döpt efter egenskapen, till exempel `Class colors.json`.
- På en annan modell, eller på en kollegas dator, klicka på {{ui:Öppna schema…}} och välj den filen. Varje värde i schemat får sin färg, så samma brandklass eller system har samma färg i varje modell.
- Ett värde som schemat saknar målas grått och listas som ”inte i schemat”. Värden i schemat som den här modellen inte har står kvar i listan med 0, så att du ser hela schemat.
- Ett schema behåller sina färger i båda teman. Om du väljer en egenskap i listan börjar det om från de automatiska färgerna.

## Vanliga misstag

- **”Den här modellen har inga … värden.”** Schemat sparades för en egenskap som den här modellen inte har (ett annat namn på egenskapsuppsättningen, till exempel). Öppna ett schema som gjorts för den här typen av modell, eller välj en egenskap i listan.

- **En egenskap saknas i listan.** Inget element med en form i modellen har den. Egenskaper hos våningsplan och utrymmen själva listas inte.
- **Allt har samma färg.** Alla element har samma värde, eller inget: titta på teckenförklaringens antal.

## Nästa

- [Dölj, isolera och se igenom element](topic:hide-and-isolate)
- [Hitta i modellträdet](topic:model-tree)
