---
title: Grunder under väggarna
summary: Lägg en platta på mark, grundmurar med platta, en krypgrund eller en källare under en byggnad med ett klick; plintar dimensioneras efter väggarna och antalet våningar, och grunden följer med när väggarna flyttas.
keywords: grund, plint, platta på mark, förtjockad kant, monolitisk platta, grundmur, krypgrund, källare, källarvägg, tjäle, betong, plintbredd
from: c0e20172
---

## Vad du gör

Ge byggnaden en grund som passar dess väggar. BimCraft följer väggarnas utsida, dimensionerar plintarna efter väggtypen och hur många våningar som står på dem, och gör grunden på nytt varje gång väggarna ändras.

## Lägg in en grund

1. På nivån vars väggar står på grunden (vanligen den första) öppnar du {{ui:Bygge}} och väljer {{ui:Grund}}.
2. Välj slag:
   - **Platta på mark**: en 4" betongplatta vars översida är golvet, med en förtjockad kant under väggarna.
   - **Grundmurar och platta**: grundmurar upp till golvet på plintar, med en platta innanför dem.
   - **Krypgrund**: grundmurar som slutar under golvbjälklaget, på plintar, utan platta.
   - **Källare**: grundmurar i full höjd på plintar, med en källarplatta under golvbjälklaget.
3. Peka inuti byggnaden: plintarna visas streckade med sin storlek. Klicka.

Klicka på en byggnad som redan har en grund för att markera den, så att du kan ändra den i stället för att lägga till en andra.

## Ändra den

Markera grunden (klicka inuti byggnaden med {{ui:Grund}}, eller klicka på någon av dess delar i 3D-vyn eller modellträdet) och ändra den under **Egenskaper**: slaget, plintens bredd och djup, hur djupt plintens undersida ligger, väggtjockleken, hur långt under golvet väggarna slutar, källarens höjd och plattans tjocklek. Varje ändring är ett ångra-steg.

Mått märkta **auto** kommer från väggarna: plintar 12", 15" eller 23" breda för en, två eller tre våningar på platta eller grundmurar, 18", 22" eller 27" över en krypgrund eller källare, och 4" bredare under murverk eller betongväggar. Skriv ett mått för att ange ditt eget; skriv `0` för att gå tillbaka till auto.

:::warning
De automatiska måtten är märkta standardvärden för typiska lättbyggda hus, inte konstruktionsberäkningar. En konstruktör eller ingenjör kontrollerar plintar, djup och väggar mot jordart, tjäledjup och laster.
:::

## Vad som sparas

En grund sparas som en IFC-elementsammanställning ("Foundation") bestående av en plint (eller en plattas förtjockade kant), en grundvägg och en platta, så som slaget kräver, alla av betong, var och en med sina mängder: längder, bredder, höjder, areor och volymer, redo för mängdavtagningar.

## Bra att veta

- Flytta, lägg till eller ta bort väggar, och grunden under dem görs på nytt; ritar du väggar på nivån ovanför blir plintarna under dem bredare för den extra våningen.
- {{key:Delete}} tar bort en markerad grund med alla dess delar.
- Med platsens mark i modellen (se [Platsens mark, byggplattan och beläggningen](topic:terrain)) stegar grundmurar och krypgrundsplintar ner med den i steg om 8".
- Plintar under innerväggar finns inte ännu.
