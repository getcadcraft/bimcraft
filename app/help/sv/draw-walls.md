---
title: Rita väggar
summary: Rita väggar på planen för en nivå genom att klicka på hörnen eller skriva in längder; hörnen sammanfogas av sig själva, och väggarna sparas som IFC.
keywords: böjd, båge, placeringslinje, justering, vägg, väggar, rita, plan, planritning, rum, hörn, sammanfoga, väggtyp, 2x6, 2x4, cmu, betong, höjd, nivå, nivåer, våningsplan, angiven längd, ortogonal, fångst
from: 8269cd4b
---

## Vad du ska göra

Rita husets väggar på en plan för varje nivå. Klicka där en vägg börjar och sedan på varje hörn; BimCraft sammanfogar hörnen åt dig, ger varje vägg dess lager (fasad, underlag, reglar, gipsskiva …) och låter den gå upp till nivån ovanför. 3D-vyn visar väggarna medan du ritar.

## Öppna planen

1. Starta ett nytt hus ([Starta ett nytt hus](topic:start-a-new-building)) eller öppna en IFC-modell.
2. Klicka på {{ui:Rita}} i verktygsfältet. Ett nytt hus öppnas redan med den påslagen.
3. Planen för en nivå visas till vänster och 3D-vyn till höger. Välj nivån i listan överst på planen, eller med den runda knappen bredvid den i panelen **Nivåer**.
4. {{ui:Plan}}, {{ui:Dela}} och {{ui:3D}} är verktyg på raden {{ui:Vy}} i verktygsfältet (kommandona PLAN, SPLIT och tangenterna fungerar som förut). Använd {{ui:Plan}} för enbart planen, {{ui:Dela}} för båda, {{ui:3D}} för att stänga planen. När fönstret är smalt (eller gränssnittets storlek är stor) lägger {{ui:Dela}} planen ovanför 3D-vyn i stället för bredvid.

Planen skär nivån 4'-0" (1200 mm) ovanför dess golv, precis som en planritning gör. Rulla för att zooma, dra med mittenknappen eller högerknappen (eller håll ned {{key:Space}} och dra) för att panorera; med {{ui:Markera}} påslagen panorerar ett vanligt drag också. {{key:F}} med pekaren över planen anpassar den.

## Rita ett rum

1. Klicka på {{ui:Vägg}} (eller tryck på {{key:W}}).
2. Välj väggtyp i den första listan, till exempel **Utvändig 2×6** eller **Invändig 2×4**.
3. Välj höjd: **Upp till nivån ovanför** (väggen följer om den nivån flyttas), **Upp till** en högre nivå för en vägg som går genom flera nivåer (en trapphall, ett rum med dubbel höjd, en hög gavel), eller **Fast höjd** och skriv in den. En sådan vägg hör till den nivå du ritade den på; planerna för de nivåer den passerar visar den ljusare, rummen där slutar mot den, och du kan klicka in dörrar och fönster i den från dessa planer (en dörr står på den nivåns golv). För att flytta eller forma om själva väggen, gå till nivån den börjar på.
4. Klicka där den första väggen börjar.
5. Klicka på varje hörn. Varje klick skapar en vägg; nästa börjar där den förra slutade. Längd och vinkel visas bredvid pekaren.
6. Klicka på den första punkten igen för att stänga rummet. Statusraden anger hur många väggar rummet har, och i mittlinjeläge får varje vägg sitt yttre lager på rummets utsida.
7. Tryck på {{key:Esc}} (eller högerklicka, eller dubbelklicka) för att sluta utan att stänga.

Hörnen sammanfogas av sig själva: två väggar möts i en geringsskarv, en vägg som slutar mot en annan stannar vid dess yta (ett T), och tre eller fler väggar i en punkt delar hörnet. Väggar som korsar varandra lämnas som de är.

Ett helt rum på en gång: öppna {{ui:Former}} för en rektangel, en roterad rektangel, en polygon, bågar, väggar på valda linjer eller runt en kontur (se [Väggformer, dela, förskjut, töj och lås](topic:wall-tools)).

## Välj ritreferens

Välj **Mittlinje**, **Insidan** eller **Utsidan** före det första klicket. Med en yta vald beskriver dina klick och angivna längder den ytan; BimCraft förskjuter väggens mittlinje med halva den totala tjockleken och sammanfogar på varandra följande hörn. Välj **Utsida till vänster** eller **Utsida till höger** i förhållande till ritriktningen. För en sluten kontur ritad moturs är utsidan till höger; medurs, till vänster. Med **Insidan** går väggens kropp till utsidan av din linje; med **Utsidan** går den till andra sidan. Ytritning behåller den utsida du valt när du stänger slingan. På mittlinjen tar väggar som inte stänger ett rum den utsida du valt; när du stänger ett rum sätts varje väggs utsida till rummets utsida av sig själv, oavsett hur du ritade.

Om du ändrar väggtyp, referens eller utsida avslutas den pågående kedjan. Nära ett vändande hörn kapas långa geringar genom att lämna raka ändar.

Under ritning kan en ändpunkt över tomt utrymme linjera horisontellt eller vertikalt med en väggändpunkt eller ett tidigare hörn. En streckad hjälplinje förbinder den punkten med den fångade pekaren. Shift håller ritriktningen i rät vinkel; linjeringen stoppar då längs den riktningen. Närliggande ändpunkter, mittpunkter och väggskärningar har företräde framför linjering på avstånd.

## Placeringslinje

Med **Referens** på **Utsidan** eller **Insidan** behåller väggen den ytan som sin placeringslinje. Om väggen senare blir tjockare eller dess utsida vänds, står ytan kvar och väggen växer eller vänds runt den. En rak vägg som möter den i ett hörn följer med, så att hörnet fortfarande sluts. Du kan ändra placeringslinjen i efterhand under **Egenskaper**: se [Ändra en vägg, dörr eller ett fönster](topic:change-a-wall-or-door).

## Rita en böjd vägg

1. Klicka på {{ui:Vägg}} och välj sedan **Böjd** i listan **Form** på alternativraden.
2. Klicka där väggen börjar, och sedan där den slutar.
3. Klicka på en punkt på dess båge. Eller skriv in bågens höjd och tryck på {{key:Enter}}.
4. Kedjan fortsätter från slutet av väggen. Tryck på {{key:Esc}} för att avsluta den.

En böjd vägg sammanfogas med väggarna vid sina ändar (hörn och T-skarvar fungerar), skapar rum och håller dörrar och fönster längs sin båge. De förblir raka enheter, vinkelräta mot väggen i sin mitt, och deras avstånd mäts längs bågen. En vägg kan vända högst tre fjärdedelar av en cirkel. Den fångas mot sina ändar och mot mitten av sin båge.

Finns inte ännu för böjda väggar: {{ui:Trimma / förläng}} och {{ui:Hörn}}, reglar, automatiska måttsättningar i planen och fångst längs bågen. Se [Vad som finns inte ännu](topic:not-built-yet).

## Skriv en längd i stället för att klicka

Efter det första klicket skriver du och trycker på {{key:Enter}}:

| Skriv | Ritar |
|---|---|
| `12'6"` eller `3810` | en vägg så lång, i den riktning pekaren visar |
| `12'6"<90` | så lång, i den vinkeln (grader, moturs från höger) |
| `@3000,0` | till en punkt så långt från den sista, tvärs och upp |
| `1200,3400` | till den punkten på planen |

Om du skriver ett tal medan verktyget {{ui:Vägg}} är påslaget hamnar det direkt i rutan {{ui:Längd}}. I fot och tum är ett enkelt tal tum; i millimeter är det millimeter. Du kan alltid skriva enheten: `3.5 m`, `10 ft`, `6 1/2"`.

## Fångst

- Väggändar, deras ytornas hörn och väggars mittpunkter fångas när pekaren är nära dem (en kvadrat, en triangel).
- Pekaren fångas mot en väggs mittlinje eller någon av ytorna (ett kryss).
- Från den sista punkten håller riktningen var 15:e grad när den ligger nära; håll ned {{key:Shift}} för att hålla den på 0°, 90°, 180° eller 270°.
- Fria riktningar avrundar längden till 1/2" (eller 10 mm).

## Ändra, ångra, ta bort

- Varje vägg är ett steg i **Ändringar**: {{ui:Ångra}} och {{ui:Gör om}} tar tillbaka väggar och lägger tillbaka dem.
- Med {{ui:Markera}} påslagen klickar du på en vägg i planen för att markera den; 3D-vyn och **Egenskaper** följer med. {{key:Delete}} tar bort de markerade väggarna, och de väggar de var sammanfogade med rensas upp igen.

## Nivåer

Panelen **Nivåer** listar varje nivå med dess höjdläge och höjd.

- Skriv ett nytt namn, höjdläge eller höjd och tryck på {{key:Enter}}. Om du ändrar en nivås höjd (eller höjdläge) flyttas nivåerna ovanför med samma belopp, och väggar som går upp till en nivå följer med.
- {{ui:Lägg till en nivå överst}} lägger till en nivå ovanför den översta, lika hög som den.
- {{ui:Lägg till en nivå under}} lägger till en nivå under den lägsta (en källare), lika hög som den: dess höjdläge är negativt när den lägsta nivån ligger på 0, och ingen annan nivå flyttas. {{ui:Ångra}} tar bort den igen.
- {{ui:Kopiera den här nivån…}} ritar om det som finns på nivån du tittar på, på en annan nivå eller på en ny ovanpå: dess väggar med dörrar och fönster, golv och undertak (inte tak). Väggar som gick upp till nivån ovanför går upp till nivån ovanför den nya; rum dyker upp av sig själva. En {{ui:Ångra}} tar tillbaka allt. Om den andra nivån redan har väggar läggs kopian till dem.
- {{ui:Enheter}} i verktygsfältet väljer enheter (fot och tum, tum, decimalfot, millimeter, centimeter eller meter) för allt som ritverktygen visar och läser.

## Spara

Klicka på {{ui:Spara som IFC}}. Varje vägg blir en IFC-vägg med sin mittlinje, sin sammanfogade form, sin typ och sina lager, `Pset_WallCommon` och baskvantiteter (längd, höjd, areor och volymer), så att andra BIM-program kan öppna den och ta fram förteckningar över den.

## Bra att veta

- Väggar ritas på sin mittlinje. Tjockleken kommer från väggtypen.
- Planen visar väggar som ritats här ifyllda, och allt annat (biblioteksobjekt, modeller från andra program) avskuret av samma plan, med det som ligger under snittet i tunna linjer.
- Väggar gjorda av andra program visas i planen men kan inte ändras med de här verktygen ännu.
