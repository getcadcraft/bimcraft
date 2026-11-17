---
title: Tomten, byggnaden på den och dess nivåer
summary: Rita tomtens kontur, placera och vrid byggnaden på tomten, lägg till nivåer på angivna höjder eller dela byggnadens höjd, och rita på den nivå du väljer.
keywords: tomt, situationsplan, byggnadslinje, avstånd, servitut, väg- och ledningsrätt, fastighetsgräns, gräns, placering, rotera byggnad, placera byggnad, nivåer, våningsplan, våningar, golv, lägg till nivåer, dela höjd, golv till golv, IfcSite, IfcBuilding, IfcBuildingStorey, rumslig struktur
from: 48d10c1e
---

## Vad du gör

Ställ in delarna i en IFC-modell som håller ihop allt annat: tomten, byggnaden på den och byggnadens nivåer.

En modell är uppbyggd som en **tomt** som innehåller en **byggnad**, som innehåller dess **nivåer** (våningsplan); väggar, golv och allt annat hör till en nivå. {{ui:Fil}} › {{ui:Ny byggnad}} ställer in alla tre. En modell från ett annat program som har en byggnad men ingen tomt får en tomt första gången du ritar en: byggnaden placeras på den där den redan var.

## Rita tomten

1. Slå på {{ui:Rita}}, välj sedan {{ui:Bygge}} › {{ui:Tomt}}.
2. Klicka på tomtens hörn (verktyget fångar som Vägg-verktyget). Klicka på det första hörnet igen, dubbelklicka eller tryck på {{key:Enter}} för att avsluta. {{key:Backspace}} tar tillbaka ett hörn.
3. Raden visar tomtens yta. Rita den igen för att ändra den.

Varje nivås plan visar tomtens kontur som en fastighetsgräns.

## Placera byggnaden på tomten

Med {{ui:Tomt}} på skriver du byggnadens **X** och **Y** på tomten och dess **Vrid** i grader, eller klickar på {{ui:Placera byggnaden med ett klick}} och klickar där byggnadens origo ska vara. Allt i byggnaden (nivåer, väggar, rutnät, allt du ritat) flyttas med den; tomten och dess kontur står kvar. Planerna visar fortsatt varje nivå rätvinklig mot byggnaden.

## Byggnadslinjer och servitut

Byggnadslinjer och servitut (väg- och ledningsrätter, utfartsrätter) ritas på tomten som villkor. De **varnar, de blockerar aldrig**: en vägg över en sådan ritas som du bad om, och en varning med namnet på väggen och linjen eller servitutet visas under Problem. Flyttar du väggen tillbaka försvinner varningen. En varning kan godtas med en anledning (en lättnad som myndigheten beviljat, till exempel).

- **Byggnadslinje från avstånd.** {{ui:Bygge}} › {{ui:Byggnadslinje}}, sedan {{ui:Avstånd}}: skriv hur långt linjen står in från varje gräns på tomten. Gränserna numreras i planen medan verktyget är på. Linjen räknas ut från de avstånden och följer tomtens kontur om du ritar den igen med lika många gränser. Avstånden är dina, hämtade från din lagfarna handling eller detaljplan; BimCraft fyller i inga.
- **En ritad byggnadslinje.** Med {{ui:Byggnadslinje}} på klickar du dess punkter och avslutar med dubbelklick eller {{key:Enter}}. Avsluta på första punkten för en sluten linje: ytan innanför är där man får bygga, och en vägg med någon del utanför varnas. En öppen linje varnar bara för en vägg som korsar den.
- **Ett servitut.** {{ui:Bygge}} › {{ui:Servitut}}: välj dess typ, skriv dess namn, dess registrerade beteckning och dess bredd, klicka sedan på dess mittlinje och avsluta (en remsa), eller stäng den på första punkten (en yta). En vägg med någon del på den varnas, på varje nivå.
- En yta exakt på en linje är i beröring, inte korsning (toleransen är 1 mm).
- Det aktuella alternativet i varje volymstudie-uppsättning kontrolleras på samma sätt som väggarna: en volym utanför gränsen, över en byggnadslinje eller på ett servitut får en varning. Se [Volymstudier sida vid sida](topic:massing-options).
- Välj en med {{ui:Markera}} för att ändra dess namn, beteckning, typ eller bredd, flytta den eller ta bort den.

De ritas på varje nivås plan, på blad och i planens PDF: byggnadslinjer streckade, servitut punktade, var och en med sin etikett. I IFC-filen är var och en en annotation (IfcAnnotation, typ BuildingLine eller Servitude) på tomten, med sin linje som en vanlig kurva som andra program kan läsa. Kontrollen använder varje väggs verkliga kontur i planen, med dess skarvar som ritade; en krökt vägg kontrolleras med sin egen tjocklek kring sin mittlinje.

## Lägg till nivåer

I panelen {{ui:Nivåer}} lägger {{ui:Lägg till en nivå överst}} till en, och {{ui:Lägg till en nivå under}} lägger till en under den lägsta (en källare, på negativ höjd). {{ui:Lägg till nivåer…}} lägger till flera samtidigt:

- **På dessa höjder**: skriv höjder över den lägsta nivån, åtskilda med kommatecken (till exempel `12', 24', 36'`). Höjder som redan har en nivå hoppas över.
- **Dela byggnadens höjd**: skriv byggnadens höjd och antalet nivåer. Nivåerna du har flyttas till sina nya höjder nedifrån och upp, saknade läggs till, och de som är ovanför dem står kvar.

Väggar som går upp till nivån ovanför följer med, liksom pelare och ramper.

{{ui:Kopiera den här nivån…}} (samma panel) kopierar det som är ritat på nivån du tittar på till en annan nivå eller till en ny nivå överst, så att en planritning kan gå upp i byggnaden i ett steg. Se [Rita väggar](topic:draw-walls).

## Rita på en nivå

Varje {{ui:Rita}}-verktyg arbetar på nivån som valts i planens nivålista (eller markerats i panelen {{ui:Nivåer}}): det du ritar hör till den nivån.

## Vad du bör se

- Var och en av dessa ändringar är ett steg: {{key:Mod+Z}} tar tillbaka den.
- I IFC-filen: tomten (IfcSite) med sin kontur och yta, byggnaden (IfcBuilding) placerad på den, och nivåerna (IfcBuildingStorey) i byggnaden.

Se även [Koordinater i BimCraft](topic:coordinates) för projektets origo och mätpunkten.
