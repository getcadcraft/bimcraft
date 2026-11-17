---
title: Vyer, visningsintervall och egna blad
summary: Hitta varje plan, fasad, sektion, 3D-vy, förteckning och blad i projektbläddraren, ställ in hur varje plan skärs och vad den visar, skapa utropsrutor, rita linjer och skrafferingar i en vy, behåll inställningar i vymallar, och ordna blad som du själv tagit fram.
keywords: utropsruta, utropsrutevy, detaljvy, förstorad plan, ritning, detaljlinjer, ritlinjer, skraffering, skrafferingsområde, fylld yta, fyllningsmönster, reflekterad undertaksplan, rcp, undertaksplan, undertak, rutnät, armaturer, projektbläddrare, vyer, visningsintervall, beskärning, beskärningsområde, beskär vy, vyskala, underlägg, visa en annan nivå, halvton, skärplan, skärhöjd, topp, botten, visningsdjup, synlighet, kategorier, dölj i vy, vymall, mallar, blad, ritningshuvud, vyport, skala, ordna blad, layout, pdf, planvyinställningar, bläddrare
from: ee1d5afe
---

## Vad du gör

Arbeta så som BIM-projekt är organiserade: varje vy i en lista, varje plan skuren där du vill, samma inställningar för flera planer via en mall, och blad som du lägger upp själv.

## Projektbläddraren

1. Slå på {{ui:Rita}}. Den vänstra panelen har en {{ui:Projektbläddrare}} under modellerna.
2. Den listar:
   - **Planritningar**: varje nivå. Klicka på en för att se dess plan. Reglage-knappen bredvid den ställer in dess visningsintervall (nedan). En plan som följer en mall visar mallens namn.
   - **Undertaksplaner**: varje nivås reflekterade undertaksplan (nedan).
   - **Utropsrutor**: varje utropsruta med vyn den ritas på, och {{ui:Ny utropsruta}}. **Saknas** listar utropsrutor vars vy är borta.
   - **Fasader** och **Sektioner**: de fyra sidorna och varje sektionslinje. Klicka på en för att öppna ritningsuppsättningen den ritas i.
   - **3D-vyer**: vyerna du sparade med {{ui:Vyer}}.
   - **Förteckningar**: klicka på en för att visa den under planen.
   - **Blad**: de blad du gjort, {{ui:Nytt blad}}, och {{ui:Ritningssats…}} för hela uppsättningen gjord av modellen.
   - **Vymallar**, med {{ui:Ny mall}}, och **Länkar** (de länkade modellerna).

## Ställ in en plans visningsintervall

1. Klicka på reglage-knappen bredvid en nivå i **Planritningar**.
2. Ställ in höjderna ovanför den nivån:
   - **Skär vid**: där planen skär genom väggar, dörrar och fönster (1200 mm, ungefär 4 ft, om du inte ändrar det).
   - **Topp**: saker ovanför snittet och under toppen ritas streckade (ett högt skåp, en balk). Lämna tomt för nivåns höjd.
   - **Botten** och **Djup under botten**: saker som ligger lägre än snittet ritas med tunna linjer ner till botten, och så långt under den.
3. Under **Visas i den här planen** avmarkerar du det planen lämnar utanför: möbler, rum, pelare och så vidare.
4. För att lämna utanför enskilda element: välj dem i planen eller 3D-vyn, öppna dialogen och klicka på {{ui:Dölj de markerade här}}. {{ui:Visa alla}} tar tillbaka dem.
5. Klicka på {{ui:Använd de här inställningarna}}.

Planen skärs om direkt, och ritningsuppsättningen och dina blad följer den. En punktmolns skiva följer också skärhöjden.

## Beskär en plan, ge den en skala, visa en annan nivå under den

Alla tre finns i samma dialog (reglage-knappen bredvid en nivå):

- **Skala**: skalan planen skrivs ut i ({{ui:Skriv ut}} på planens fält) och placeras på ett blad i. **Anpassa** väljer den största standardskalan som passar.
- **Beskärningsområde**: klicka på {{ui:Rita på planen…}}, klicka sedan på ett hörn och det motsatta hörnet på planen ({{key:Esc}} avslutar). Planen utanför området döljs på skärmen, och du kan fortfarande arbeta där; utskrivet, på blad och i ritningsuppsättningen visar planen bara det som ligger inom området. {{ui:Rensa}} tar bort beskärningen. {{ui:Anpassa}} anpassar till beskärningen.
- **Underlägg**: välj en annan nivå. Dess väggar, skurna element, dörrar och fönster ritas ljust under den här planen, för att rada upp saker med nivån under eller över. Du kan inte välja dem här, och de skrivs ut i ljusgrått.

En vymall bär skalan tillsammans med höjderna och kategorierna. Beskärningsområdet och underlägget hör alltid till den enda planen.

## En nivås undertaksplan

Varje nivå har en reflekterad undertaksplan bredvid sin planritning: planen sedd underifrån, för att lägga ut undertak och det som hänger från dem.

1. Klicka på nivån under **Undertaksplaner** i bläddraren, eller välj {{ui:Undertaksplan}} bredvid nivån på planens fält.
2. Väggarna skärs vid 2300 mm (ungefär 7'-6"). Det som ligger ovanför det snittet och under nivåns höjd ritas: undertak med deras rutnät och en höjdtagg (`CLG 2438`), lampor, balkar. Dörrar, fönster och det som ligger under snittet lämnas utanför.
3. För att göra ett undertak använder du {{ui:Innertak}} som på golvplanen, markerar det och väljer dess **Mönster** i Egenskaper. Se [Rum, golv, undertak och tak](topic:floors-and-roofs).
4. För att hänga en lampa från det placerar du objektet från biblioteket medan undertaksplanen visas: det hamnar under **Vid taket**. Se [Placera utrustning och möbler från biblioteket](topic:place-from-library).
5. Reglage-knappen bredvid en undertaksplan ställer in dess snitt och topp, skala, kategorier, beskärningsområde och underlägg, som för en planritning. Undertaksplaner tar ingen vymall.

Den ritas på samma sätt som planen (en reflekterad plan, inte en spegelbild). Ett undertak som ligger under snittet ritas inte: sänk snittet för den nivåns undertaksplan. Undertaksplaner läggs på dina egna blad som planer; ritningsuppsättningen lägger inte till dem av sig själv.

## Skapa en utropsruta

En utropsruta visar en del av en plan större, i sin egen skala, som en egen vy: ett kök, en trappa, ett hörn av en vägg.

1. Visa planen, undertaksplanen eller utropsrutan den tillhör.
2. Välj {{ui:Annotera}} › {{ui:Utropsruta}} på planens fält (eller {{ui:Ny utropsruta}} i bläddraren), klicka sedan på ett hörn av området och det motsatta hörnet. {{key:Esc}} avslutar.
3. Utropsrutan görs i 1:20 (1/2" = 1'-0" i fot och tum). Dess rektangel och en rund tagg ritas på planen.
4. Klicka på taggen med {{ui:Markera}}, eller på utropsrutan i bläddraren, för att öppna den: planen visar bara det området, i utropsrutans skala. Fältet säger {{ui:Utropsruta:}} och dess namn; {{ui:Upp}} går tillbaka till vyn den ritas på.
5. Reglage-knappen bredvid den (i bläddraren eller på fältet) byter namn på den, ändrar dess skala, ritar dess rektangel igen eller tar bort den.

En utropsruta visar det dess vy visar: samma snitt, samma kategorier, en undertaksplans undertak. En utropsruta av en utropsruta fungerar på samma sätt. Lägg en utropsruta på ett blad som en plan; dess tagg säger då var den finns (`1 / A-501`: första vyn på blad A-501). {{ui:Skriv ut}} i en utropsruta skriver ut bara det området i dess skala.

Att ta bort en utropsruta tar också bort de utropsrutor som ritats inuti den, och linjerna och skrafferingarna som ritats i dem (du tillfrågas först). Om nivån som en utropsruta ritas på tas bort, ligger utropsrutan kvar under **Saknas** tills du tar bort den, och de blad den ligger på rapporterar den som saknad.

## Rita linjer och skrafferingar i en vy

Ritning är 2D-arbete som hör till en enda vy: anteckningar i linjer, en skraffering av betong eller jord, en fylld yta. Det finns aldrig i 3D-vyn och aldrig i en annan plan.

1. Visa golvplanen, undertaksplanen eller utropsrutan att rita i.
2. Välj från {{ui:Annotera}} på planens fält:
   - {{ui:Rad}}: klicka där den börjar och där den slutar. Nästa linje börjar där den förra slutade; {{key:Enter}} börjar om.
   - {{ui:Polylinje}}: klicka dess punkter; {{key:Enter}} eller ett dubbelklick avslutar den, ett klick på dess första punkt sluter den.
   - {{ui:Rektangel}}: två motsatta hörn.
   - {{ui:Skrafferingsområde}}: välj **Mönster** (Heltäckande, Diagonal, Korsskraffering, Betong, Isolering, Jord) och dess skala på fältet, klicka sedan på hörnen; {{key:Enter}}, ett dubbelklick eller ett klick på det första hörnet sluter den. Med {{ui:Fyll ett rum}} ikryssat skrafferas ett klick i ett rum dess kontur.
3. Punkter fångas som för väggar; {{key:Shift}} håller en linje rätvinklig, och du kan skriva en längd som för väggar. {{key:Backspace}} tar tillbaka den sista punkten.

Välj en linje eller en skraffering med {{ui:Markera}} på planen. Egenskaper ändrar en skraffering mönster och skala och har {{ui:Flytta…}} (klicka på punkten att flytta från, och sedan dit den ska). {{key:Delete}} tar bort den. Varje linje, skraffering och ändring är ett steg.

Linjer och skrafferingar skrivs ut med planen, följer med den till dina blad och finns i ritningsuppsättningen. Avmarkera **Annoteringar** i ett visningsintervall för att lämna dem utanför den vyn.

## Behåll inställningarna i en vymall

1. Klicka på {{ui:Ny mall}} i bläddraren, eller {{ui:Spara som mall…}} i en plans visningsintervall (den planen använder den sedan).
2. Ge den ett namn, ställ in höjderna och kategorierna, och klicka på {{ui:Spara mallen}}.
3. I valfri plans visningsintervall väljer du mallen. Planen tar dess höjder och kategorier; ändra mallen för att ändra varje plan som använder den. Element du döljer ett i taget förblir dolda i sin egen plan.
4. Klicka på en mall i bläddraren för att ändra, byta namn på eller ta bort den. Om du tar bort en mall behåller dess planer dess inställningar som sina egna.

## Ordna ett eget blad

1. Klicka på {{ui:Nytt blad}}. Skriv dess nummer och titel och välj papper.
2. Klicka på {{ui:Lägg till}} bredvid en plan, undertaksplan, utropsruta, fasad, sektion eller förteckning. Den hamnar i mitten av bladet.
3. Dra den dit den ska. När den är vald väljer du en **Skala**, eller lämnar den på planens egen skala (när planen har en), annars skalan som passar en tredjedel av bladet. {{ui:Ta bort bladet}} tar bort den.
4. Klicka på {{ui:Spara bladet}}. Det listas under **Blad**; klicka på det för att ändra det senare.
5. {{ui:Ladda ner som PDF}} sparar det bladet som en sida.

## Det du ska se

- Planer skurna vid dina höjder, med det ovanför snittet streckat och det du rensat bort utelämnat.
- En beskuren plan döljs utanför sitt område på skärmen och skärs till det på papper, i den skala du angav.
- En undertaksplan med undertakens rutnät och höjdtaggar, och lamporna vid taket.
- Utropsrutor med sin rektangel och tagg på planen, var och en öppnas i sin egen skala.
- Linjer och skrafferingar bara i vyn du ritade dem i.
- Dina blad ritas om från modellen varje gång du öppnar dem, så de alltid stämmer med den. En vy vars nivå eller sektionslinje togs bort rapporteras, inte ritas.
- Varje ändring här är ett steg: {{key:Mod+Z}} tar tillbaka den.

:::note
Allt detta sparas i IFC-filen som egenskapsuppsättningar som andra program lämnar i fred: varje nivås visningsintervall och undertaksplan på nivån, mallarna, utropsrutorna och dina blad på projektet. Linjer och skrafferingar är IFC-annoteringar i sin nivå, så andra program ser dem som 2D-kurvor och skrafferade ytor (med sin egen ritning av varje mönster), men inte vilken vy de hör till.
:::

:::tip
Andra BIM-program kallar snittet för visningsintervall eller skärplan, mallarna för vymallar eller vyinställningar, ritlinjerna för detaljlinjer och skrafferingsområdena för fyllda områden. Idéerna är desamma; vyinställningarna följer inte med dem.
:::
