---
title: Massningsalternativ sida vid sida
summary: Behåll flera massningsalternativ i samma modell, gör ett till aktuellt alternativ, kontrollera det mot tomtens byggnadsgränser och servitut, ta in massor från ModelCraft och utveckla det valda alternativet till väggar och bjälklag.
keywords: massning, massa, alternativ, alternativuppsättning, skiss, koncept, konceptdesign, skede 2, alternativ, jämför alternativ, aktuellt alternativ, byggnadsmassa, tryck/dra, ModelCraft, CivilCraft, bruttoarea, fotavtryck, volym, utveckla massa, servitut, byggnadsgräns, avstånd från gräns
from: 69a01459
---

## Vad du gör

Behåll massningsalternativen för ett koncept i en modell i stället för i separata filer: flera byggnadsmassor sida vid sida, en av dem är **aktuellt alternativ** och de andra sparas för jämförelse.

Ett massningsalternativ är en byggnadsmassa: en kontur höjd till en viss höjd, med ett antal våningar. Det är ännu inte väggar. Du kan spara hur många du vill, grupperade i **alternativuppsättningar** (alternativen i en uppsättning är alternativ till varandra).

## Spara ett alternativ

1. Öppna {{ui:Rumsprogram till massa}}, skriv in rumsprogrammet och konturen och välj {{ui:Hitta alternativ}}.
2. Välj ett av de listade alternativen.
3. Under {{ui:Massningsalternativ i modellen}} skriver du ett namn för {{ui:Alternativuppsättning}} om du vill ha ett, och väljer {{ui:Behåll valt alternativ}}.

Alternativet visas i modellen som en byggnadsmassa och i listan, med sina våningar, fotavtryck, bruttoarea och volym. Inget byggs. Spara ett annat på samma sätt.

Det första alternativet i en uppsättning är dess aktuella alternativ. Varje steg är ett ångra-steg.

## Det aktuella alternativet

Ett alternativ i varje uppsättning är det aktuella. Det betyder två saker:

- **Dess våningar räknas som byggnadens golvarea.** Det aktuella alternativet har ett utrymme per våning med den våningens bruttoarea, så allt som läser golvareor ser alternativet som gäller och inget annat.
- **Det kontrolleras mot tomten.** Om det står utanför tomtgränsen, över en byggnadsgräns eller på ett servitut visas en varning som nämner det i {{ui:Problem}}. Det är bara en varning: inget förhindras. Alternativ som inte är aktuella kontrolleras inte.

Välj {{ui:Gör aktuellt}} på ett annat alternativ för att ändra det.

{{ui:Dölj alternativ som inte är aktuella}} döljer de andra i 3D-vyn. Det gäller bara den här webbläsaren och sparas inte i filen.

## Massning från ModelCraft

I ModelCraft skickar {{ui:Exportera}} › {{ui:Massa till BimCraft…}} varje grupp eller komponent som ett alternativ. BimCraft öppnar filen med alternativen listade.

För att föra in dem i en modell som redan är öppen väljer du {{ui:Lägg till massningsalternativ från en fil}} och väljer `.ifc`-filen. Dess massor kommer in som alternativ i en uppsättning, i ett ångra-steg, och står kvar där de modellerades. En fil med byggnadsmassor från CivilCraft fungerar likadant.

Ett alternativ märkt "(form förenklad)" var inte ett rakt, stående block i ModelCraft: det trappar av sig, lutar eller är inte slutet. Dess massa här är konturen av dess bas, höjd till dess höjd. Dess golvareor och volym är de som mäts från själva solidkroppen.

## Utveckla det valda alternativet

Välj {{ui:Utveckla}} på ett alternativ. Det blir nivåer (adderade upp till dess antal våningar), väggar runt dess kontur på varje våning och en bjälklagsplatta på var och en, i ett ångra-steg. Alternativet försvinner från listan. De andra alternativen ligger kvar som de var. Det finns ännu inget tak.

{{ui:Byt namn}} ändrar ett alternativs namn. {{ui:Ta bort}} tar bort det ur modellen. Att ta bort det aktuella alternativet gör uppsättningens första andra alternativ till aktuellt.

## Vad du bör se

- Varje sparat alternativ som ett block i 3D-vyn och en rad i listan.
- "(aktuellt)" bredvid ett alternativ i varje uppsättning.
- En varning i {{ui:Problem}} när det aktuella alternativet korsar tomtgränsen, en byggnadsgräns eller ett servitut.

## Bra att veta

- I IFC-filen är ett alternativ ett byggelementproxy med egenskapsuppsättningen `CadCraft_SiteMass`. Dess alternativuppsättning, alternativnamn och om det är aktuellt finns i den uppsättningen. Det aktuella alternativets våningar är utrymmen av typen `MassingFloor`. Andra program läser proxyn som ett generiskt element.
- Att spara ett alternativ lägger aldrig till nivåer. Att utveckla ett gör det.
- En assistent kan lista de sparade alternativen, spara ett, göra ett aktuellt, byta namn på det, utveckla det eller ta bort det.
