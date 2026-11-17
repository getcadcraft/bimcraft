---
title: Kopiera, klistra in och duplicera biblioteksobjekt
summary: Kopiera ett placerat biblioteksobjekt och klistra in det där du klickar, på samma plats bredvid originalet eller i en annan modell; kopiera egenskaperna för andra element som text; ångra och gör om.
keywords: kopiera, klistra in, duplicera, urklipp, klistra in på plats, klipp ut, ta bort, markera allt, ångra, gör om, redigeringsmeny, mer, biblioteksobjekt, placering, upprepa, matris
from: 6ac15931
---

## Vad du gör

Lägg ut fler kopior av ett objekt du redan placerat: ett andra arbetsbord, en rad diskbänkar. Det här ämnet handlar om **placerade biblioteksobjekt**, de element BimCraft skrev in i modellen. Ett av dem kan klistras in i valfri modell, även i en annan flik. Väggar, dörrar och alla andra element kopieras, klipps ut, klistras in och tas bort på samma sätt inom sin egen modell: se [Ta bort, klipp ut, kopiera och klistra in byggnadselement](topic:edit-elements).

Kommandona finns i verktygsfältet ovanför modellen: {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}} och {{ui:Mer}}, en meny med {{ui:Klipp ut}}, {{ui:Kopiera}}, {{ui:Klistra in}}, {{ui:Klistra in på plats}}, {{ui:Duplicera}}, {{ui:Ta bort}}, {{ui:Markera allt}} och {{ui:Avmarkera}}. Ett kommando som inte kan utföras just nu är nedtonat. Peka på det för att läsa varför, eller klicka på det så säger statusraden varför.

## Steg

1. Öppna en IFC-modell med ett biblioteksobjekt i, eller placera ett först. Se [Placera utrustning och möbler från biblioteket](topic:place-from-library).
2. Klicka på objektet i 3D-vyn. Dess egenskaper visar en ruta **Biblioteksobjekt**.
3. Klicka på {{ui:Kopiera}} eller tryck på {{key:Mod+C}}.
4. Klicka på {{ui:Klistra in}} eller tryck på {{key:Mod+V}}. Placeringsfältet öppnas och en genomskinlig ruta följer pekaren, vriden som originalet.
5. Tryck på {{key:R}} för att vrida den 90°, {{key:Tab}} för att fästa dess baksida mot en vägg, eller skriv X och Y i placeringsfältet.
6. Klicka där kopian ska hamna. Varje klick placerar en ny kopia. Tryck på {{key:Esc}} för att sluta.
7. Klicka på {{ui:Spara som IFC}} för att ladda ner den redigerade kopian av modellen.

## Klistra in på plats

{{ui:Mer}}, {{ui:Klistra in på plats}} eller {{key:Mod+Shift+V}} klistrar in utan klick, på samma X- och Y-läge och med samma vridning:

- **In i samma modell, på samma våningsplan**: två objekt på exakt samma plats gör ingen nytta, så kopian hamnar precis bredvid originalet, en objektbredd plus 100 mm längs objektets egen bredd. Klistra in på plats igen från den nya kopian för att göra en rad.
- **Till en annan våningsplan eller in i en annan modell**: exakt samma X, Y och vridning. BimCraft använder våningsplanet med samma namn. Finns inget sådant används det med närmaste höjd. Statusraden anger vilket.

## Duplicera

{{ui:Mer}}, {{ui:Duplicera}} eller {{key:Mod+D}} kopierar det valda objektet och börjar klistra in det direkt: ett steg i stället för två.

## In i en annan modell eller en annan flik

Det du kopierat sparas i den här webbläsaren. Du kan därför öppna en annan IFC-modell, eller BimCraft i en annan flik, och klistra in där. Den andra modellen behöver själva biblioteksobjektet. BimCraft har det när objektet placerades, byttes ut eller uppdaterades i den här fliken. Ett objekt som placerades i en tidigare session kan klistras in igen bara i sin egen modell. I en annan modell placerar du det från fliken {{ui:Bibliotek}}.

## Vad du bör se

- Kopian i modellen, markerad, med samma biblioteksobjekt, licens, utrustningsdata, mängd och anteckning som originalet, samt **nästa lediga objektnummer**. Ändra numret i Egenskaper, under `CadCraft_Placement`.
- "Placerad: *objekt* (objekt *n*)" i ändringslistan. {{key:Mod+Z}} tar tillbaka den och {{key:Mod+Y}} lägger tillbaka den.

## Bra att veta

- Kopior delar originalets typ, så de använder alla samma geometri, precis som när samma objekt placeras två gånger.
- {{ui:Ångra}} och {{ui:Gör om}} omfattar alla ändringar: redigerade värden, placeringar, inklistringar, byten och uppdateringar. Gör om lägger tillbaka en placering på samma plats. En ny ändring rensar det som kunde göras om.
- I 2D-vyn av en ritning finns inget att markera, så det finns inget att kopiera. Använd {{ui:Redigera i CadCraft}} för att ändra ritningen, när det knappen visas.

## Vanliga misstag

- **{{ui:Klistra in}} säger att elementen kom från en annan modell.** Det sista du kopierade var ett byggnadselement, eller flera element. Sådana klistras bara in i sin egen modell. Markera ett placerat biblioteksobjekt och kopiera det.
- **{{ui:Klistra in}} säger att kopian kom från en annan modell utan sitt biblioteksobjekt.** Placera objektet från fliken {{ui:Bibliotek}} en gång i den här fliken, kopiera det och klistra sedan in det.
- **{{key:Mod+C}} kopierar sidtext i stället.** Text var markerad på sidan. Klicka först på modellen.

## Relaterat

- [Tangenter och mus](topic:keyboard#edit)
- [BimCraft-inställningar](topic:settings)
