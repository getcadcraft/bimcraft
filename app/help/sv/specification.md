---
title: Skriv specifikationen utifrån modellen
summary: En specifikationsrubrik för varje väggtyp, dörrtyp, fönstertyp, golv och ytskikt som används, med dess fakta lästa från modellen och din egen text, gjord till en PDF eller ett Word-dokument.
keywords: specifikation, spec, arbetsritningar, steg 5, bygghandlingar, avsnitt, väggtyp, dörrtyp, fönstertyp, ytskikt, klassificering, uniclass, omniclass, masterformat, dokument, pdf, word, docx, förteckningar
from: a6acc6d4
---

## Vad du gör

Få en specifikation som följer modellen: en rubrik för varje typ som verkligen finns i byggnaden, var och en med sin uppbyggnad och sina mängder lästa från modellen, och texten du skriver för den.

## Steg

1. Slå på {{ui:Rita}}, öppna **Förteckningar** i den vänstra panelen och klicka på **Specifikation**.
2. Dialogrutan listar en rubrik för varje väggtyp, dörrtyp, fönstertyp, golv och rumsyta som används. Under varje rubrik finns dess **fakta**, lästa från modellen: tjocklek, skikten ett efter ett, utvecklingsnivån, mått, hur många och hur mycket. En rubrik vars element har en klassificeringskod visar koden i sin rubrik.
3. Skriv din specifikationstext i rutan under en rubrik. **Markera dess element** visar vad rubriken handlar om.
4. Klicka på **Spara**. Det är ett steg i Ångra, och texten sparas i byggnadsfilen.
5. Öppna **Dokument från modellen**, välj mallen **Specifikation** och klicka på **Förhandsgranska**, spara sedan som PDF, Word eller Markdown. Se [Dokument från modellen](topic:documents-from-the-model).

## Arbetsritningsförteckningarna som ett dokument

Mallen **Arbetsritningsförteckningar** skriver ut dörr-, fönster- och ytskiktsförteckningarna direkt från modellen, i ditt kontors layout. I din egen mall skriver du `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, eller namnet på en sparad uppsättning, till exempel `{{schedule Door schedule by floor}}`. `{{specification}}` skriver ut specifikationen.

## Bra att veta

- Fakta är modellens. De ändras när modellen ändras; din text gör det inte.
- BimCraft skriver ingen paragraf i någon standard och ingen tillverkartext. En rubrik utan text skrivs ut som ”Ingen specifikationstext skriven ännu.”
- Text skriven för en typ som inte längre finns i modellen behålls och listas under ”Text för typer som inte längre finns i modellen”.
- För att ändra en generisk typ till en specifik uppbyggnad, se [Väggverktyg](topic:wall-tools) (Byt typ).
