---
title: "Standardprinciper: ange vad en ny byggnad startar med"
summary: Ange en gång vilken väggtyp, vilka nivåer, vilket första ritblad, vilka LOD-taggar, vilka enheter och vilket verktyg en ny byggnad startar med, för metriska och imperiska projekt, och dela principerna inom kontoret som en liten fil.
keywords: standard, standardvärden, standardprinciper, princip, kontorsstandard, kontorsstandardvärden, mall, ny byggnad, första väggtyp, metrisk vägg, murverk, LOD, detaljeringsnivå, första ritblad, papper, skala, nivåer, våningshöjd, nivånamn, väggverktyg, enheter, dela, exportera, importera, json
from: 42379aa5
---

## Vad du gör

Berätta för BimCraft vad en ny byggnad ska börja med, så att ingen på kontoret behöver ändra samma saker varje gång. Det här är ett tillägg: det är avstängt tills du slår på det. En princip du inte anger lämnar BimCraft:s egna standardvärde precis som det är.

:::note
Det här är standardvärden för **nya** byggnader och **nya** saker. Ett projekt du redan har startat ändras inte.
:::

## Steg

1. Öppna Inställningar, gå till {{ui:Tillägg}} och slå på {{ui:Standardprinciper}}.
2. I Inställningar öppnar du fliken **BimCraft** och väljer {{ui:Standardprinciper}} i listan till vänster.
3. Ange de principer du vill ha. Var och en börjar på **BimCrafts egen**, med det värdet inom parentes. En princip med rutan **Metrisk** och rutan **Imperisk** tar ett värde för varje typ av projekt. Fyll i bara dem du behöver.
4. Det finns ingen knapp för att spara: varje ändring sparas när du gör den. Ett värde som inte kan användas nekas med ett meddelande, och det gamla värdet ligger kvar.
5. Klicka på {{ui:Ny byggnad}}. Dialogrutan fylls i från dina principer, och varje värde som en princip anger står bredvid med **från dina standardprinciper**. Du kan fortfarande ändra vilket som helst av dem innan {{ui:Skapa}}.

## Principerna

- **Enheter för en ny byggnad**: enheterna växlar till detta när du skapar.
- **Antal nivåer**, **Nivånamn** och **Nivåhöjd**. I ett namn räknar `{n}` 1, 2, 3. `{n0}` räknar 0, 1, 2. `{nn}` och `{nn0}` gör samma sak med två siffror. Så `Floor {nn0}` ger Floor 00, Floor 01, Floor 02.
- **Första väggtyp**: det Väggverktyget ritar först. Ett metriskt kontor kan börja med Yttervägg i murverk 300 mm, medan imperiska projekt behåller Exterior 2×6.
- **LOD-tagg på startväggtyperna**: detaljeringsnivån (LOD 100 till 500) som de nio startväggtyperna visar överallt där en typ listas. Se [Bygg väggkonstruktioner](topic:wall-assemblies).
- **LOD för en nyskapad väggtyp**: taggen en ny typ startar med i typredigeraren. Du kan ändra den där.
- **Första ritblad**: dess papper, skala, bladnummer och namn (använd `{level}` för den lägsta nivåns namn), eller inget första ritblad alls.
- **Annoteringsstorlekar på papper** (Inställningar › Global › Standardprinciper): kontorets höjder, i millimeter som de skrivs ut, för noteringar, måttsättningstext, taggar, rumsnamn, bokstäver i rutnätsbubblor, vytitlar och förteckningstext. En ny byggnad tar dem vid Skapa och behåller dem i sin fil. Se [Rita i full storlek, annotera efter skala](topic:annotation-sizes).
- **Verktyg som är aktivt efter Skapa**: Markera, som BimCraft gör av sig själv, eller Vägg, så att de två första klicken på planen redan ritar en vägg.

## Förteckningslayout: kontorsstandarden

Under **Inställningar › Global › Standardprinciper**, under **Förteckningslayout (kontorsstandarden)**, anger du hur varje förteckning grupperas, om den har delsummor och en totalsumma, sin titel och skrivsättet för kolumnrubrikerna. Varje förteckning som inte anger sina egna tar dem, oavsett vem som ställt in den. Se [Lägg upp, spara och exportera en förteckning](topic:schedule-layouts).

## Dela dem inom kontoret

1. I Inställningar öppnar du fliken **Global** och väljer {{ui:Standardprinciper}}.
2. Skriv in **Kontorsnamn** om du vill. Det skrivs in i filen.
3. Klicka på {{ui:Spara till fil}}. Du får en liten fil som slutar på `.ccdefaults.json`.
4. På en annan dator slår du på tillägget, öppnar samma plats och klickar på {{ui:Läs in från fil}}. Filens principer ersätter dem på den datorn.

Fliken Global har också **Enhetssystem för ett nytt projekt**, som gäller för varje app som har tillägget, och {{ui:Återställ alla principer}}. {{ui:Återställ till BimCraft:s egna standardvärden}} på fliken BimCraft rensar bara BimCrafts.

## Bra att veta

- Filen är en vanlig, öppen JSON-fil: en lista med principnamn och värden. En princip i filen som den här versionen inte känner till lämnas bort och nämns i meddelandet. Resten läses in.
- Principerna sparas i den här webbläsaren, för varje CadCraft-app på den här datorn. De sparas inte i byggnadsfilen och synkas inte mellan datorer. Använd filen.
- LOD-taggen på en startypvärde kommer från principen på den här datorn. En typ du gör som en kopia av en startyp bär sin tagg i byggnadsfilen.
- BimCraft har ingen precisionsinställning, så det finns ingen precisionsprincip här.
- En byggnad som startas från en mall tar mallens egna nivåer och ritblad. Väggtypsprincipen och enhetsprincipen gäller fortfarande.
- Stänger du av tillägget är allt BimCrafts egna igen. Dina principer sparas för när du slår på det igen.
