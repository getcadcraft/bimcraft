---
title: Klassificeringskoder (Uniclass, OmniClass, UniFormat)
summary: Ge varje element och typ en klassificeringskod, välj vilka system ett projekt använder, sök i Uniclass-tabellerna som följer med appen, läs in ditt kontors egna licensierade tabeller och visa koderna i förteckningarna. Koderna skrivs in i IFC-filen för annan programvara.
keywords: klassificering, klassificera, kod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabell, elementkod, typkod, standardkod, IfcClassification, IfcClassificationReference, cobie, förteckningskolumn, csv, licens
from: 222b94cd
---

## Vad du gör

Lägg en klassificeringskod på väggar, golv, tak, dörrar, fönster och allt annat i modellen, i upp till tre system bredvid varandra: Uniclass, OmniClass och UniFormat. Andra discipliner och annan programvara förlitar sig på koden, inte på namnet, så koderna sparas i IFC-filen som klassificeringsreferenser som alla BIM-program kan läsa.

## Ge ett element en kod

1. Markera ett element (eller flera) och öppna **Egenskaper**. Öppna avsnittet {{ui:Classification}}.
2. Skriv koden i rutan för dess system och tryck på Enter. Med en kodlista inläst skriver du en del av en kod eller några ord ("curtain wall") och väljer bland träffarna. Kodens titel fylls i åt dig.
3. {{ui:Applies to}} anger var koden går: **Detta element**, eller **Dess typ (varje element av typen)**. En kod på en väggtyp läses av varje vägg av den typen, även de du ritar senare.
4. {{ui:Clear}} tar bort en kod.

Under varje kod anger avsnittet varifrån den kommer: satt på detta element, från dess typ, eller projektets standard för dess klass. Ett elements egen kod väger alltid tyngst, och typens väger tyngre än en standard. När flera element är markerade betyder en ruta som säger "varierar" att de inte delar en kod. Skriver du en kod ges den till alla. Varje ändring är ett ångra-steg.

En kod kan alltid skrivas, oavsett om en lista är inläst eller inte. Om den inte ser ut som en kod i det systemet, eller inte finns i den inlästa listan, visar en ledtråd det och koden behålls som du skrev den.

## Välj projektets system

Öppna **Data** i modellfältet och välj {{ui:Classification}} (eller {{ui:Project classification…}} i avsnittet Egenskaper).

- Kryssa i de system som projektet använder. Egenskaper visar då bara dem.
- **Uniclass**: tabellerna Elements/ functions (EF), Systems (Ss) och Products (Pr) följer med appen. De är © NBS, licensierade under Creative Commons Attribution-NoDerivatives 4.0, och skickas vidare oförändrade. Dialogen visar varje tabells utgåva och dagen den lästes. De är inte de senaste tabellerna: utgivaren ger ut nya varje kvartal på sin egen webbplats.
- **OmniClass** och **UniFormat**: ingen kodlista följer med appen, eftersom utgivaren inte tillåter att tabellerna vidarebefordras utan licens. Skriv in valfri kod, eller läs in ditt kontors egna licensierade tabell.
- {{ui:Load a table (CSV)…}} läser ditt kontors egna tabell från en CSV-fil med en kodkolumn och en titelkolumn. En rubrikrad som heter Code, Number eller Identifier och Title, Name eller Description hittas automatiskt. Utan en används de två första kolumnerna. Tabellen stannar i den här webbläsaren och läggs aldrig i projektfilen. Bara de koder du tilldelat sparas i filen. Du kan läsa in en nyare Uniclass-tabell på samma sätt.
- {{ui:Give elements a default code by their class}} ger varje vägg, golv, tak, dörr, fönster, trappa, ramp, pelare, balk och möbel en startkod från Uniclass-tabellen Elements/ functions, när den saknar en egen kod. Element du ritar efteråt får den också.
- {{ui:Show the codes as columns in the schedules}} lägger till en kolumn per system i förteckningarna för Dörrar, Fönster, Väggar efter typ och Rum samt i deras CSV. En rad med flera element visar "varierar" när deras koder skiljer sig.

## Bra att veta

- Standardkoderna är CadCraft:s egna startval, inte utgivarens, och har inte kontrollerats av en yrkesperson. Kontrollera dem mot ditt projekts standard.
- I filen är en standard en riktig klassificering, märkt med relationsnamnet "CadCraft default". Den försvinner så snart elementet eller dess typ får en egen kod.
- Koder som en importerad fil redan har läses och visas, oavsett vilken stavning det andra programmet använde för systemets namn. Koder för andra system (ett kontors egna) listas och lämnas orörda.
- Koderna läses tillbaka när filen öppnas igen, här eller i ett annat program. De förs också över till exporten av IFC5 alpha (IFCX) när labbalternativet är på, utom en kod som satts på ett tak.
- Inte byggt: ett träd för att bläddra i en tabell nivå för nivå, koder på våningsplan och rum som projektstandarder, och kontroll av en kod mot den utgåva som anges i filen.
