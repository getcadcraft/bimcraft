---
title: Projektetapper, från kravspecifikationen till arbetsinstruktioner
summary: Börja från en kravspecifikation med målareor och se uppfyllt eller för lite medan du ritar, jämför konceptalternativ mot den, koppla specifikationer och detaljer till typer, granska verkstadsritningar och registrera arbetsinstruktioner mot element.
keywords: kravspecifikation, rumsförteckning, målarea, uppfyllt, för lite, rum, konceptalternativ, alternativ, volymstudie, budget, specifikation, spec, detalj, konstruktionsdetalj, typ, verkstadsritning, granska, godkänn, skicka in igen, arbetsinstruktion, revision, orsak, fält, etapp
from: 0a49b852
---

## Vad du gör

Arbeta igenom ett projekts etapper i en och samma panel: skriv klientens kravspecifikation som rum med målareor, jämför konceptalternativ mot den, håll specifikationen och konstruktionsdetaljerna kopplade till de typer de hör till, granska verkstadsritningar när de kommer tillbaka från entreprenörerna och registrera arbetsinstruktioner mot de element de ändrar.

## Steg

1. I den vänstra panelen öppnar du **Projektetapper** och sedan **Kravspecifikation**.
2. Klistra in rummen, ett per rad: `Vardagsrum; 1; 30` betyder ett rum på 30 m². Antalet kan utelämnas. Välj **Lägg till rummen**. Fyll i klient, plats, budget, tolerans och program och välj sedan **Spara kravspecifikationen**.
3. Rita väggar. Varje rum som väggarna bildar och som har kravspecifikationens rumsnamn (ett nummer efter det, till exempel "Sovrum 2", ignoreras) räknas. **Rumsförteckningen** visar **Uppfyllt**, **För mycket**, **För lite** eller **Inte ritad**, med skillnaden i m².
4. Om du vill börja ett nytt projekt på det här sättet väljer du **Starta ett nytt projekt från en kravspecifikation**. Det öppnar en ny modell, från en av dina sparade mallar om du väljer en, och lägger in kravspecifikationen som dess första steg.
5. Öppna **Alternativ mot kravspecifikationen**. Varje volymalternativ som finns kvar i modellen ritas i samma skala med sin bruttoarea, vad kravspecifikationen begär och hur många av kravspecifikationens rum som ryms. **Stapla kravspecifikationen här** lägger rummen i alternativets våningar, lägsta först, och anger vad som inte ryms. Kostnaden kommer bara från projektets prislista; utan matchande rad visas "Ingen taxa".
6. Öppna **Typer, specifikationer och detaljer**. Varje vägg-, dörr-, fönster- och golvtyp visar om den har specifikationstext, vilka detaljer som är kopplade till den och var specifikationen, förteckningarna och ritbladen inte stämmer överens. **Koppla en detalj** lägger till en DetailCraft- eller CadCraft-fil, en adress eller ett blad i den här modellen.
7. Öppna **Verkstadsritningar**. Markera de element som en verkstadsritning omfattar i modellen och välj sedan **Ta emot den**. Använd **Godkänn**, **Godkänd med anmärkningar** eller **Revidera** med granskarens namn och anteckning. **Skickad igen** skapar nästa revision av samma post och behåller granskningshistoriken. Status skrivs också på varje element.
8. Öppna **Arbetsinstruktioner**. Markera elementen, ange orsaken och vad den gör med kostnad och tid med egna ord, och välj **Registrera den**. När en utgåva har registrerats säger **Förklara ändringarna sedan den här utgåvan** vilka ändrade element en instruktion omfattar och vilka som ändrats utan att något registrerats.

## Bra att veta

- Varje steg är ett enda Ångra. Inget avvisas: en kravspecifikation som inte uppfylls, en typ som inte stämmer med sin text eller en försenad verkstadsritning är en varning eller en anteckning i Problem.
- Rummen i kravspecifikationen är utrymmen utan väggar. De har ett mål, inte en ritad area, så rumsförteckningar och COBie räknar aldrig dem som ritade rum.
- En layout staplar bara rum i våningar efter area. Den ritar inga väggar.
- Specifikationstexten skrivs i Dokument från modellen. Här jämförs den bara med modellens egna mått: ingen standards klausul skrivs åt dig.
- Verkstadsritningar och arbetsinstruktioner är poster i samma historik som panelen Utgåvor och revisioner, så båda panelerna visar dem.
- Statusen för en verkstadsritning är en egenskap hos varje element (`CadCraft_ShopDrawing`), och en arbetsinstruktion är `CadCraft_SiteInstruction`, så Hitta och Färglägg efter egenskap kan använda dem.
- Fältverifierade märken (steg 7) finns i Egenskaper under Verifiering.
