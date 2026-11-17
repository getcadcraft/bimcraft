---
title: Kontrollera en modell mot en kunds IDS
summary: Läs in .ids-filen du fick och se varje element som inte uppfyller den i Problem, innan du levererar IFC-filen.
keywords: ids, information delivery specification, buildingsmart, krav, leverans, kontroll, validering, qa, eir, bep, egenskap, klassificering, material, upphandling
from: 7b960222
---

## Vad du gör

En IDS (Information Delivery Specification, en buildingSMART-standard) är listan över vad en IFC måste innehålla: vilka klasser, vilka egenskaper med vilka värden, klassificeringar, material och var saker ska finnas. Beställare och offentlig upphandling skickar en med uppdraget. BimCraft kontrollerar den öppna IFC-modellen mot den och listar varje element som inte räcker till.

## Steg

1. Öppna en IFC-modell.
2. Öppna {{ui:Check against an IDS}} i vänstra panelen, under {{ui:Model checks}}, eller välj {{ui:Check against IDS…}} i menyn för din menystil.
3. Klicka på {{ui:Load an .ids file…}} och välj filen. Inget laddas upp.
4. Läs resultatet: varje specifikation med {{ui:Pass}} eller {{ui:Fail}} och hur många element den gäller för.
5. Öppna Problem ({{key:Ctrl+Shift+M}}) och klicka på ett fel för att välja elementet och zooma till det.

## Vad du bör se

- En varning per element och krav som det inte uppfyller, med specifikationens namn, vad IDS:en kräver och vad elementet har.
- Ett obligatoriskt krav som inget i modellen matchar blir en egen varning.
- Kontrollrapporten (i Problem) börjar med IDS:en: dess titel, version, författare och för varje specifikation antalet tillämpliga, godkända och underkända.

## Bra att veta

- IFC-filen innehåller bara en referens till IDS:en (dess namn, titel, version och en hash), inte själva IDS:en: en kunds IDS kan vara konfidentiell, och IFC-filen går till andra personer. IDS:en finns kvar i den här webbläsaren bredvid modellen, så när du öppnar den sparade IFC-filen här igen kontrolleras den på nytt. Att läsa in eller glömma IDS:en är ett steg som du kan ångra.
- Öppnad på en annan dator eller i en annan webbläsare visar Problem en notis om att IDS:en inte hittades: läs in den igen för att kontrollera på nytt.
- För att skicka med IDS:en tillsammans med IFC-filen, slå på {{ui:Keep the IDS inside the IFC}} i Inställningar, på fliken BimCraft, innan du läser in den.
- Varje redigering, ångra och gör om kontrolleras på nytt en stund senare.
- Värden jämförs på IDS-sättet: text exakt (versaler och gemener räknas), tal i SI-enheter med en liten tolerans (längder i meter, så en modell i millimeter konverteras först).
- En specifikation skriven för en annan IFC-version (till exempel IFC2X3 när modellen är IFC4) kontrolleras ändå, och resultatet anger det.
- Om IDS-filen har fel som en IDS-granskning skulle flagga, listar dialogen dem; specifikationerna de finns i underkänns.
- Du kan godkänna ett fel med en motivering, precis som vilket problem som helst. Det förblir godkänt så länge elementets värden är desamma.

- Mönster i IDS:en läses som hela värdet. Ett `^` i början och ett `$` i slutet tolkas också som "hela värdet", eftersom de flesta IDS-filer menar så.

## Nästa

- [Kontrollera en modell mot vanliga problem](topic:model-checks)
- [Ändra en vägg eller dörr](topic:change-a-wall-or-door)
