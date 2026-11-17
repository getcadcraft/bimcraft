---
title: Ta bort, klipp ut, kopiera och klistra in byggnadselement
summary: Välj väggar, dörrar, möbler eller annat i en IFC-modell; ta bort dem, klipp ut dem, eller kopiera och klistra in dem där du klickar, på plats eller på en annan våningsplan.
keywords: ta bort, radera, ta bort, klipp ut, kopiera, klistra in, duplicera, flytta, markera allt, välj alla, byggnadselement, vägg, dörr, fönster, trappa, öppning, ångra
from: d9eec37f
---

## Vad du gör

Ändra det som finns i en IFC-modell: ta bort element du inte vill ha, kopiera en vägg eller en uppsättning möbler till en annan plats, eller flytta element genom att klippa ut och klistra in dem. Varje ändring är ett steg som du kan ångra, och när du sparar skrivs en ny fil, så originalet ligger kvar oförändrat.

## Steg

1. Öppna en IFC-modell. Se [Öppna en IFC-modell och titta runt i 3D](topic:open-ifc-model).
2. Markera det du vill ändra: klicka på ett element, håll ned {{key:Mod}} eller {{key:Shift}} och klicka för att markera fler, eller tryck {{key:Mod+A}} ({{ui:Mer}}, {{ui:Markera allt}}) för att markera alla synliga element.
3. Sedan:
   - **Ta bort:** tryck {{key:Delete}}, eller {{ui:Mer}}, {{ui:Ta bort}}.
   - **Kopiera:** tryck {{key:Mod+C}} eller klicka {{ui:Kopiera}}.
   - **Klipp ut:** tryck {{key:Mod+X}}, eller {{ui:Mer}}, {{ui:Klipp ut}}. Elementen försvinner, och du kan klistra in dem.
4. Om du vill klistra in trycker du {{key:Mod+V}} eller klickar {{ui:Klistra in}}. En genomskinlig låda i samma storlek som det du kopierade följer pekaren på den våningsplan som valts i placeringsfältet. Tryck {{key:R}} för att vrida den 90°, och klicka sedan där den ska stå. Varje klick placerar en ny kopia; tryck {{key:Esc}} för att sluta.
5. Eller tryck {{key:Mod+Shift+V}} ({{ui:Mer}}, {{ui:Klistra in på plats}}): efter en klippning går elementen tillbaka exakt dit de var; efter en kopiering hamnar kopian precis bredvid originalen.
6. Klicka {{ui:Spara som IFC}} för att ladda ner den redigerade modellen.

## Vad som följer med ett element

- **Delar:** en trappa tar med sina trapplöp, en gardinvägg sina paneler; allt som består av delar tar med alla.
- **Öppningar:** en vägg tar med de öppningar som skurits i den. Om du tar bort en dörr eller ett fönster tas även öppningen den satt i bort, så väggen sluts, precis som i ett modelleringsprogram. Om du tar bort en vägg som ritats i BimCraft tas även dess dörrar och fönster bort, och de återstående väggarna fogas ihop. Om du tar bort en vägg från en fil som gjorts någon annanstans ligger dess dörrar och fönster kvar där de var.
- **Data:** en kopia har samma typ, material, egenskapsuppsättningar och kvantiteter som originalet, samt ett nytt GlobalId. Om du senare ändrar ett värde på kopian påverkas inte originalet.
- **Biblioteksobjekt** behåller sina biblioteksdata; en kopia får nästa lediga objektnummer, och ett klippt objekt som klistras in igen behåller sitt eget.

## Vad du bör se

- "Borttaget: …" eller "Inklistrat: …" i listan {{ui:Ändringar}}. {{key:Mod+Z}} tar tillbaka den senaste ändringen; {{key:Mod+Y}} lägger tillbaka den igen.
- Efter en borttagning säger statusraden hur många delar och öppningar som också togs bort.
- Inklistrade element är markerade, så du kan klistra in på plats igen för att göra en rad, eller ta bort dem.

## Bra att veta

- Kopior använder samma geometri som originalet (IFC tillåter att element delar den), så filen växer mycket lite.
- Byggnadselement klistras in i den modell de kopierades från, i samma flik. För att använda placerade biblioteksobjekt i en annan modell kopierar du ett objekt i taget: se [Kopiera, klistra in och duplicera biblioteksobjekt](topic:copy-paste).
- Våningsplan, utrymmen, byggnader och tomten kan inte tas bort eller kopieras. Markera de element som finns i dem i stället. Ett rum som ritats i BimCraft kommer från väggarna runt omkring det: ta bort en vägg för att slå ihop två rum.
- Väggar, dörrar och fönster som ritats med BimCraft egna vägg-, dörr- och fönsterverktyg kan inte kopieras, klippas ut eller dupliceras ännu; statusraden säger det. Rita dem igen. Ta bort fungerar.
- Kopiering lägger även namnen och egenskaperna för det du kopierade på urklippet som text, så att du kan klistra in dem i ett kalkylblad eller ett e-postmeddelande.

## Vanliga misstag

- **{{ui:Ta bort}} är nedtonad.** Inget är markerat, eller så är bara våningsplan eller utrymmen markerade. Peka på knappen för att se varför.
- **Klistra in säger att elementen kommer från en annan modell.** Du har öppnat en annan modell sedan du kopierade dem. Öppna den första modellen igen och kopiera dem där.
- **Den inklistrade kopian hamnar på en annan våning.** Placeringsfältets {{ui:Våningsplan}} avgör var den hamnar; välj våningsplan innan du klickar.

## Relaterat

- [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate)
- [Tangentbord och mus](topic:keyboard#edit)
