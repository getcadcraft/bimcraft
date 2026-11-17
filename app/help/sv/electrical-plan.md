---
title: Elplanen
summary: Placera uttag, strömbrytare, lampor, sensorer, kopplingsdosor och centraler på planen med samma symboler som tillägget El i CadCraft, koppla strömbrytare till lamporna de tänder och lista apparater och kretsar i förteckningarna.
keywords: el, elplan, uttag, dubbeluttag, strömbrytare, trevägsbrytare, dimmer, lampa, takljus, infälld lampa, downlight, rörelsesensor, kopplingsdosa, central, fördelningstavla, krets, last, watt, ampere, strömbrytarledning, apparatförteckning, centralförteckning
from: f7de1947
---

## Vad du gör

Rita husets elplan i modellen: uttag, strömbrytare och centraler på väggarna, lampor och sensorer i taket. Varje apparat är ett riktigt elektriskt element i IFC-filen, med sin beteckning, krets och last, och strömbrytare kommer ihåg vilka lampor de tänder.

## Placera apparater

1. På en nivå öppnar du {{ui:Bygge}} och väljer {{ui:El}}.
2. Välj apparaten: uttag (kraft, data, telefon, ljud och bild), strömbrytare och sensorer (även en termostat och en timer), lampor, detektorer och larm, en kopplingsdosa, en central eller en undercentral.
3. Skriv in en **Krets** om du känner till den (valfritt namn: 1, 2, A-3). Lämna **Monteringshöjd** tom för apparatens vanliga höjd.
4. Klicka på planen. Uttag, strömbrytare och centraler placeras på ytan av närmaste vägg, vända in mot rummet. Lampor, sensorer och kopplingsdosor placeras i taket där du klickar.

Apparaterna märks när du placerar dem: **R** för uttag, **S** för strömbrytare, **L** för lampor, **M** för rörelsesensorer, **J** för kopplingsdosor och **P** för centraler. Apparater på en vägg flyttas med väggen när du flyttar den.

Vill du hellre bläddra i bilder? Öppna **Symbolpaletten** från {{ui:Bygge}} för att hitta en apparat efter namn, stjärnmärk dem du använder och placera den med ett klick: se [Symbolpaletten](topic:symbol-palette).

## Koppla strömbrytare till lampor

1. Välj en strömbrytare (eller en rörelsesensor) och klicka på **Koppla lampor** i **Egenskaper**.
2. Klicka på varje lampa den tänder. Klicka på en kopplad lampa igen för att koppla bort den.
3. Tryck på {{key:Enter}} eller klicka på **Klar**.

Planen ritar en streckad kurva från strömbrytaren till varje lampa. En lampas **Egenskaper** visar vilka strömbrytare som tänder den.

## Rummet där en apparat står

Varje apparat vet vilket rum den står i. En apparat på en vägg hör till rummet den vetter mot. En takapparat hör till rummet den sitter över. **Egenskaper** visar **Rum**, och förteckningen **Elapparater** har en kolumn **Rum** (nummer och namn, till exempel 101 Kök).

Den hålls uppdaterad: byter du namn eller nummer på rummet, flyttar apparaten eller flyttar en vägg, följer rummet med i samma steg. En apparat på byggnadens utsida, eller i ett utrymme som inte är ett rum, anger att den inte finns i något rum.

Rummet skrivs också in i filen, i apparatens egenskapsuppsättning `CadCraft_Location` (Room, RoomNumber, RoomName). Då kan Sök, Färgsätt efter egenskap och en märkningsförteckning använda det, och även ett annat program kan göra det. Planens symboler och element kopplade till en symbol får samma uppsättning; se [Symbolpaletten](topic:symbol-palette).

## Låt din assistent placera dem

Med en assistent ansluten (Inställningar › Assistenter, med ändringar tillåtna) kan du be om apparater med ord: ”lägg ett dubbeluttag var 2 m längs väggarna i vardagsrummet, 300 mm upp, på krets 3”, eller ”lägg till en takbelysning med dess strömbrytare vid dörren”. Assistenten använder fem verktyg: `devices_add`, `device_change`, `lights_set`, `devices_delete` och `devices_list`. De skapar samma apparater som verktyget El gör, på samma väggar och med samma beteckningar, kretsar, laster och höjder. Varje anrop är ett steg att ångra.

En apparat får aldrig en typ som verktyget El inte har: en okänd typ avvisas och assistenten får listan. Ett uttag eller en strömbrytare måste ligga inom 600 mm från en väggyta, precis som ett klick. Annars avvisas anropet och inget placeras. Standardhöjderna anges i millimeter: 300 för uttag och 1100 för strömbrytare. En takapparat hänger från taket.

## Ändra och lista dem

Välj en apparat för att ändra dess beteckning, krets, last (watt) och monteringshöjd. Välj flera för att lägga alla på samma krets på en gång. Tryck på {{key:Delete}} för att ta bort en. En borttagen lampa tas bort från sina strömbrytare.

I {{ui:Förteckningar}} väljer du **Elapparater** för alla apparater med deras nivå, krets, last, höjd och de lampor varje strömbrytare tänder. Väljer du **Kretsar** får du apparaterna per krets, total last och ström. Båda finns också på ritningssatsens förteckningsblad: se [Fasader, sektioner och blad](topic:sheets).

:::note
Monteringshöjder och laster är planeringsvärden (ett uttag 16" upp och 200 W, en strömbrytare på 48", en takbelysning 60 W), inte en konstruktion. Elinstallatören eller ingenjören dimensionerar kretsarna och kontrollerar att de följer föreskrifterna.
:::

:::tip
Symbolerna är de som tillägget El i CadCraft ritar på installationsplaner, så en plan från någon av apparna läses likadant.
:::
