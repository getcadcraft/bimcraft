---
title: Arbetssätt, duplicerade vyer, pennor på papper, Rapportera som och mallar
summary: Välj hur BimCraft beter sig för hur du arbetar, duplicera vilken vy som helst som en egen kopia eller som en kopplad vy, behåll pennöverskrivningar i filen och skriv ut som visat eller via en pennatabell, rapportera ett element som en annan IFC-klass och starta projekt från egna mallar.
keywords: arbetssätt, duplicera vy, duplicera, kopiera vy, beroende vy, kopplad vy, egen kopia, vykopia, pennöverskrivningar, pennor, linjetjocklekar, skriv ut som visat, pennatabell, plottstil, ctb, monokrom, gråskala, rapportera som, ifc-klass, klassificera om, fördefinierad typ, generisk modell, bjälklag som väg, vägg som panel, tak som ramp, projektmall, mall, ny från mall, spara som mall, kontorsstandard
from: 231d98b0
---

## Vad du gör

Ställ in BimCraft för hur du arbetar, duplicera vyer, skriv ut dem som du väntar dig, räkna element som vad de verkligen är och starta varje projekt från ditt kontors mall.

## Välj ett arbetssätt

1. Öppna {{ui:Settings}} och fliken {{ui:BimCraft}}. Hitta {{ui:Working style}}.
2. Välj ett:
   - {{ui:Each view its own}} (det första valet): en duplicerad vy kopierar sina noteringar och de förblir den vyns; blad skrivs ut så som skärmen visar dem.
   - {{ui:Shared annotations and pen tables}}: duplicerade vyer delar noteringar; utskrift sker via en pennatabell.
3. Under valet finns de fyra saker det ställer in. Ändra en av dem var för sig; arbetssättet visar då {{ui:Custom}}.

Arbetssättet sparas i den här webbläsaren, precis som arbetsytans layout. En mall tar med det till nya modeller.

## Duplicera en vy

1. I {{ui:Project browser}} har varje planritning, takplan, detaljhänvisning, fasad och sektion en knapp för {{ui:Duplicate}} (två blad).
2. Ge kopian ett namn och välj hur den beter sig:
   - {{ui:Own copy}}: dess ritning, måttsättning, beskärning, dolda element och pennor kopieras och förblir dess egna. Redigering av någon av vyerna ändrar aldrig den andra, så en vy på ett utgivet blad förblir som den var när den gavs ut.
   - {{ui:Linked}}: den visar samma vy med en uppsättning noteringar och inställningar.
3. Kopian listas under {{ui:Duplicated views}}. Klicka på den för att öppna den; fältet ovanför planen säger att det är en kopia, med {{ui:Up}} tillbaka till dess vy.
4. Dess reglageknapp öppnar dess inställningar: namnet, {{ui:View range}} (en egen kopia har sitt eget), {{ui:Make own copy}} för en kopplad vy och {{ui:Delete}}.

Kopior av fasader och sektioner läggs på dina egna blad, likt vyerna de kommer från. Att duplicera är ett steg i ångra, och kopiorna sparas i IFC bredvid detaljhänvisningarna.

## Pennor sparade med vyn och utskrivna som visat

1. Slå på {{ui:Draw}} och välj {{ui:Pens}}.
2. {{ui:For}} listar nu varje kategori: väggar, dörrar och fönster, bjälklag, tak, pelare, trappor, möbler och resten, samt ritning och måttsättning.
3. {{ui:Apply}} behåller pennan i IFC-filen med vyn som visas: en planvy, en takplan, en detaljhänvisning eller en duplicerad vy. Pennor som gjordes före 0.9 sparades i webbläsaren; {{ui:Keep these in the file}} flyttar dem.
4. Blad och PDF-filen ritar varje penna så som skärmen visar den.

För att skriva ut via en pennatabell i stället, ställ {{ui:Print}} på pennraden till {{ui:Through a pen table}} och välj sedan en tabell (färg, monokrom, gråskala) eller {{ui:Edit pen table…}}: varje färg får den färg, tjocklek och rastrering den skrivs ut med. Tabellen är CadCraft-appens plottstilsfil, så {{ui:Import…}} tar emot en tabell gjord i CadCraft-appen och {{ui:Export}} ger tillbaka en. Modellen behåller sitt val; utan något gäller arbetssättet.

## Rapportera ett element som en annan klass

En bjälklag ritad som en väg, en vägg använd som panel, ett tak format som en ramp: behåll verktyget du ritade med och rapportera elementet som vad det är.

1. Välj elementet och öppna {{ui:Properties}}. Öppna {{ui:Report as}}.
2. Skriv i sökrutan för att hitta en klass som passar formen, välj den och dess fördefinierade typ. För en egen typ väljer du USERDEFINED och ger den ett namn.
3. {{ui:Apply}} (ett steg i ångra). {{ui:Clear}} rapporterar det igen som ritat.

Du redigerar det fortfarande med verktyget det ritades med. Den sparade IFC-filen skriver det som den rapporterade klassen, så andra program, mängdavtagningen under {{ui:Quantities}}, Sök, Färglägg efter, modellkontroller och {{ui:Problems}} räknar det som den. Förteckningarna tar bort en vägg som rapporterats som panel ur väggförteckningen, och {{ui:Elements by reported class}} listar alla sådana. Det fungerar i IFC4- och IFC2X3-filer; listan erbjuder bara de klasser som filens IFC-version har. Dörrar, fönster, trappor, rum och nivåer behåller sin egen klass.

## Spara ett projekt som mall och starta från den

1. Med ett projekt öppet klickar du på {{ui:Save as template}} bredvid {{ui:Save}}.
2. Ge den ett namn. Bocka i {{ui:Also download the template file}} för att dela den som en IFC-fil, och {{ui:Start new models from it}} för att göra den till din standard.
3. En mall behåller nivåerna, vymallar och vyinställningar, duplicerade vyer och detaljhänvisningar, ritning, pennor och pennatabellen, taggar, familjer och typer, blad, bladstorlekar, ritningshuvuden och arbetssättet. Väggar, bjälklag, dörrar och alla andra modellelement lämnas utanför.
4. Klicka på {{ui:New building}} och välj mallen under {{ui:Start from}}, eller välj {{ui:A template file…}} för en du fått skickad. Det nya projektet får eget namn och egen projektidentitet; allt annat är som mallen har det.

:::note
Mallar sparas i den här webbläsaren. Teammallar som delas via CadCraft Studio finns inte ännu: skicka mallfilen i stället.
:::
