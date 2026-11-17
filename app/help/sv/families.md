---
title: Familjer och deras storlekar
summary: Dörrar, fönster och möbler kommer i familjer. Varje storlek av en familj är en typ i IFC-filen, så typlistan förblir kort i BimCraft medan andra program läser vanliga typer.
keywords: familj, familjer, typ, typer, storlek, storlekar, dörrtyp, fönstertyp, möbel, bord, hylla, skåp, ny storlek, duplicera, placera familj, familjefil, ccfamily, ifc-bibliotek, projektbibliotek, grupp, synlighet, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Vad en familj är

En familj är en sorts sak i flera storlekar: en enkel gångdörr som finns 32, 36 och 42 tum bred, eller ett bord som finns långt och kort. I BimCraft ser du familjen en gång, med dess storlekar under den, i stället för en lång lista av typer.

IFC har inga familjer. I filen är varje storlek en vanlig typ (en dörrtyp, en fönstertyp, en möbeltyp …), och familjen är en grupp som listar dess storlekar. Andra BIM-program läser typerna och gruppen som de är. BimCraft läser tillbaka familjen från dem.

## Var du hittar dem

- Projektbläddrarens grupp **Familjer** listar familjerna i den här modellen, med hur många storlekar varje har och hur många som är placerade. Under dem finns **Startfamiljer**: dörrarna och fönstren från verktygen Dörr och Fönster, samt ett bord, en hyllenhet och ett underskåp.
- {{ui:Bygge}} › {{ui:Familjer…}} visar samma lista i ett fönster.
- Klicka på en familj för att öppna den: dess storlekar, vilka värden varje storlek har och hur många element som använder varje.

## Dörrar och fönster

Verktygen Dörr och Fönster listar familjerna av den typen, och en **storleksslista** bredvid dem. Välj en storlek, eller skriv **Width** och **Height**. En bredd och höjd som ingen storlek har ännu blir en ny storlek i familjen när du placerar dörren. Dörrar av samma storlek delar en typ.

I {{ui:Egenskaper}} visar en vald dörr eller ett fönster sin **Familj** och **Storlek**. Välj en annan storlek i listan, eller skriv en ny bredd eller höjd. {{ui:Öppna familjen}} öppnar familjen den tillhör.

Varje dörrs eller fönsters karm följer sin egen väggs tjocklek, precis som förut. Storlekens typ behåller också dörren ritad i en 140 mm vägg, för program som läser typer.

## Ny storlek från den här familjen

1. Öppna familjen.
2. Under **Ny storlek från den här familjen** skriver du dess värden (Width, Height och familjens övriga parametrar) och, om du vill, ett namn. Utan namn får storleken ett namn efter sina värden.
3. Klicka på {{ui:Skapa storleken}}.

Två storlekar kan inte ha samma värden. **Byt namn** ändrar en storlekens namn. **Ta bort** tar bort en storlek som ingen använder. **Markera** väljer elementen i den storleken.

## Placera möbler

1. {{ui:Bygge}} › {{ui:Placera familj}}, eller {{ui:Placera}} i en familjs fönster.
2. Välj familjen och dess storlek i verktygsfältet.
3. Klicka på planen för att placera den på nivån. Tryck på {{key:R}} för att vrida den 90° innan du klickar. {{key:Esc}} avslutar.

En placerad del har **Egenskaper** som visar dess storlek, var den står och hur mycket den är vriden. {{key:Delete}} tar bort den. Varje del av en storlek delar storlekens form, så ändrar du familjen ändras alla.

## Storlekar från en tabell

{{ui:Storlekar från en tabell…}} i en familjs fönster läser en CSV-fil (komma, semikolon eller tabb). Första raden namnger kolumnerna: en parameters namn eller etikett, och valfritt `Name`. Längder är millimeter om du inte skriver en enhet (`1.2 m`, `36 in`). Kolumner för Ja / Nej tar yes, no, true, false, 1 eller 0. En parameter utan kolumn behåller sitt standardvärde. Varje rad blir en storlek, i ett steg som du kan ångra. En storlek som redan finns hoppas över. En rad som inte går att läsa, eller som familjen inte kan rita, underkänner hela tabellen och anger sin rad. Högst 200 rader och 1 MB. {{ui:Spara storlekarna som en tabell}} skriver samma tabell tillbaka.

## Ange på varje element

En parameter som är markerad **Per element** i redigeraren (ett Ja / Nej som lägger till ett överljus, en etikett eller ett material) är inte en del av en storlek. Två dörrar av samma storlek kan skilja sig åt. Välj elementet, så visar **Egenskaper** dessa parametrar. Ändrar du en ritas elementet om med sin egen form. Möbler och inredning får en egen form, och dörrar och fönster görs om i sina väggar. Sätter du dem alla till sina standardvärden går elementet tillbaka till storlekens form.

## Detaljnivå

{{ui:Bygge}} › {{ui:Familjer…}} › **Detaljnivå** anger, för varje familj i modellen, vad som sparas i solider och ritas i planens symboler. **Fin** behåller allt. **Medel** och **Grov** utelämnar delarna som redigeraren markerar som finare, vilket ger mindre filer och snabbare vyer. **Automatisk** sparar allt och låter ett blads vy välja efter dess skala: 1:50 och större fin, 1:100 medel, 1:200 och mindre grov. Ett steg som du kan ångra.

## Duplicera en familj

Du behöver inte börja från noll. {{ui:Duplicera}} kopierar en familj med dess parametrar, solider och storlekar under ett nytt namn. Ändra kopian i redigeraren. Originalet förblir som det var.

## Familjefiler

- {{ui:Spara familjefilen}} sparar en `.ccfamily.json` med familjens parametrar, solider och storlekar. Öppna den i en annan modell med {{ui:Öppna en familjefil…}} i gruppen Familjer.
- {{ui:Spara som IFC}} sparar familjen som en liten IFC-fil med dess storleksytper och dess grupp, deklarerade av ett IFC-projektbibliotek. Andra program öppnar den som en uppsättning typer. BimCraft öppnar den som familjen igen.

En familjefil som öppnas här läses som data och kontrolleras innan något skrivs. En familj vars nyckel redan finns i modellen kommer in som en separat familj. En familj som innehåller andra (se {{ui:Familjer inuti}} i redigerarens hjälp) tar med dem. Filen listar dem, och modellen behåller de den redan har.

## Familjer i biblioteket

Öppna {{ui:Familjer…}} och välj {{ui:Från Biblioteket…}} för att se familjer som delats i biblioteket. {{ui:Lägg till i det här projektet}} läser en av dem som en familjefil. BimCraft kontrollerar varje fält innan den skapar något, familjen kommer in som en egen familj och den öppnas i redigeraren. Att lägga till den är ett steg som du kan ångra. För att dela dina egna, använd {{ui:Spara alla som bibliotek}} och skicka filen till biblioteket. Bibliotekets personal publicerar en familjefil med ett kommando, och varje familj är ett eget objekt med sina storlekar. Om biblioteket inte kan nås säger listan det, och inget ändras.

## Andra programs typer

Typer skapade av andra program visas också i gruppen Familjer, grupperade efter en gissning. Gissningen bygger på den del av elementens namn som står före det första kolonet, eller på typnamn som bara skiljer sig i sina siffror. Familjefönstret säger vilken gissning som användes. Typerna listas och du kan markera deras element, men de redigeras inte här eftersom de saknar familjerecept.

:::note
Startdörrarna och -fönstren ritas precis som före familjer. Filer som gjordes före familjer öppnas oförändrade. Deras dörrar och fönster visas under sin familj med de storlekar som används, och flyttas till en egen storlek första gången du ändrar dem.
:::

Se även [Redigera en familj](topic:family-editor) och [Dörrar och fönster](topic:doors-and-windows).
