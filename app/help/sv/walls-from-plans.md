---
title: Väggar från en uppsättning planer (PDF eller skanning)
summary: Gör sidorna i en PDF, eller en skannad ritning, till väggar, dörrar och fönster, en nivå för varje sida, med sidan kvar under varje plan.
keywords: pdf, planer, uppsättning planer, skanning, skannad ritning, tiff, spåra, väggar från en pdf, väggar från en skanning, nivåer, sidor, skala, dörrar, fönster, svängning, fönsterbänk, underlägg
from: b70d9db7
---

## Vad du gör

Starta en modell från planerna du har på papper: en PDF (ritad som linjer, eller en skanning inne i en PDF) eller en skanning (PNG, JPEG, TIFF med en eller flera sidor). Varje sida blir väggarna, dörrarna och fönstren på en nivå.

## Steg

1. Slå på {{ui:Rita}}. Välj {{ui:Bygge}} › {{ui:Från en ritning…}}, sedan {{ui:Välj en ritning…}} och välj PDF-filen eller skanningen.
2. **Sidor och nivåer.** Varje sida listas med vad den är (**linjearbete**, eller **en bild (spårad)**) och nivån den går till: en av de nivåer du har, **en ny nivå ovanför de andra**, eller **utelämna den här sidan**. Sidor kopplas till dina nivåer i ordning; ändra vilken som helst av dem.
3. **Skala.** För en PDF anger du hur den ritades (**1 : 100**, **1 : 50**…). För allt annat, eller när du inte vet, väljer du **från ett avstånd jag känner**: klicka på de två ändarna av ett mått eller en skalstapel i förhandsvisningen, skriv sedan det verkliga avståndet. Alla sidor använder den enda skalan.
4. Välj **väggtyp** och **höjden på en ny nivå**. Låt **Behåll varje sida under planen för dess nivå** vara ibockad för att se varje sida som tunna linjer under dess plan.
5. Raden under valen säger hur många väggar, dörrar och fönster det skapar, och på hur många nivåer. Klicka på {{ui:Gör dem}}.

## Så läser den en sida

- **Väggar** kommer från par av parallella linjer upp till 600 mm från varandra (de två ytorna på en vägg); väggen är lika tjock som mellanrummet. Skrafferingar och text utelämnas.
- **Dörrar och fönster.** Ett gap i en vägg (500 till 2600 mm) med en dörrsvängning ritad bredvid det är en dörr, gångjärnsfäst i ena änden av gapet och öppnas åt svängningens sida. Ett gap, eller en vägg med fönsterbänksstreck i sig, är ett fönster. Ett gap utan något av dessa är en dörr upp till 1300 mm och ett fönster över det.
- **En skanning** rätas först upp om den skannades snett (dialogrutan säger det), görs svartvit, rensas från prickar och spåras; en **PDF-sida som är en bild** ritas först och behandlas sedan på samma sätt. Spårningen hittar mitten av varje streck och anpassar raka linjer och bågar till den, och den använder inget nätverk och ingen tränad modell.
- **Rum** följer av sig själva från de slutna slingor som väggarna bildar. När PDF:en har text tar ett rum sitt namn från texten inuti det (den största; ett mått, en skala eller ett bladnummer är inget namn). En skanning har ingen text, så dess rum behåller de namn programmet ger dem.
- **Allt som läses från sidan markeras som overifierat**: varje vägg, dörr, fönster och rum har en streckad ruta och ett ”?” i planen tills du kontrollerat det. Välj det du kontrollerat och använd {{ui:Verktyg}} › {{ui:Markera som kontrollerad}}. Se [Markera element som kontrollerade eller verifierade i fält](topic:verification).

## Det här ser du

- Väggarna, dörrarna, fönstren och rummen på varje nivå, och eventuella nya nivåer, allt som ett steg: {{key:Mod+Z}} tar tillbaka allt.
- Varje sida som tunna linjer under planen för sin nivå, listad under {{ui:Bygge}} › {{ui:Från en ritning…}} med {{ui:Ta bort}}.

:::note
Det här är vad linjerna gav, med sidans noggrannhet. En skanning kan tappa en svag vägg, sammanfoga två väggar som ligger mycket nära varandra, eller hitta en vägg i en fläck; en svängning som ritningen inte visar gör ett gap till en vanlig dörr. Kontrollera varje nivå mot sidan innan du litar på den, och rätta det som är fel med verktygen {{ui:Vägg}}, {{ui:Dörr}} och {{ui:Fönster}}.
:::
