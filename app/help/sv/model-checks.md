---
title: Kontrollera en modell mot vanliga problem
summary: Hitta element som saknar en egenskap du behöver, GlobalId som används två gånger, element utan våningsplan och kopior som ligger ovanpå varandra.
keywords: kontrollera, modellkontroll, validering, kvalitet, kvalitetssäkring, saknad egenskap, obligatorisk, dubblett, globalid, guid, våningsplan, staplad, överlappning
from: 4d835513
---

## Vad du gör

Gå igenom en modell innan du lämnar den vidare: de problem som stör scheman, kvantiteter och andras programvara.

## Steg

1. Öppna en IFC-modell.
2. Öppna {{ui:Modellkontroller}} i den vänstra panelen.
3. Under {{ui:Obligatoriska egenskaper}} finns redan en regel (valfri klass, Namn). Ändra dess klass (eller {{ui:Valfri klass}}) och egenskap, eller klicka {{ui:Lägg till en egenskap}} för en regel till; krysset tar bort en regel. Ett element underkänns av en regel när egenskapen saknas eller är tom. Reglerna finns kvar i den här webbläsaren för alla modeller.
4. Klicka {{ui:Kör kontroller}}.
5. Klicka på ett resultat för att markera de elementen och zooma till dem.

## Vad du bör se

- **Saknad obligatorisk egenskap**: varje regel, med de element som saknar värde för den.
- **GlobalId används två gånger**: element som delar ett GlobalId. Annan programvara behandlar dem som ett element.
- **Utan våningsplan**: element med en form som ingen våningsplan innehåller.
- **Kopior ovanpå varandra**: element av samma klass och typ med samma form på samma plats, som räknas dubbelt i kvantiteterna.

Varje rad i resultatet är en knapp: klicka på den för att markera och zooma till de elementen. Endast de första 50 grupperna i en kontroll listas. Samma fynd visas också i {{ui:Problem}}.

## Bra att veta

- Kontroller tittar på den aktiva modellen när flera är öppna. Se [Visa flera IFC-modeller tillsammans](topic:several-models).
- Kör kontrollerna igen efter en ändring.
- I panelen {{ui:Problem}} följer längder, areor och volymer i ett problems text de {{ui:Enheter}} som valts i verktygsfältet (en dörr på "800 mm" visas som 2'-7 1/2" i fot och tum); byt enhet så skriver panelen om dem.

## Nästa

- [Granska modellen: rum, taggar, LOD, kollisioner och gränssnitt](topic:audit-the-model)
- [Hitta element efter klass, namn eller egenskap](topic:find)
- [Ta bort, klipp ut, kopiera och klistra in element](topic:copy-paste)
