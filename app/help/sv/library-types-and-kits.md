---
title: Symboler, typer och tillgångar, projektmallar och Quick Kits
summary: Biblioteket har tre slags objekt (symboler, typer, tillgångar). Lägg till en typ i ditt projekt, starta från en delad projektmall, lägg till ett Quick Kit, och dela dina egna via bibliotekets uppladdningssida.
keywords: bibliotek, symboler, typer, tillgångar, typ, väggtyp, golvtyp, taktyp, undertakstyp, projektmall, mall, quick kit, paket, dela, ladda upp, version, ändringslogg, LOD, klassificering, licens, anteckningar från praktiken
from: e13b0e67
---

## Vad du gör

Hitta det du behöver i biblioteket efter vad det är, lägg till en typ i projektet du ritar, starta ett nytt projekt från en mall som någon delat, och dela dina egna mallar, typer och Quick Kits.

## De tre slagen av biblioteksobjekt

- **Symboler** är ritkonventioner: endast 2D, ritade i annoteringsstorlek, grupperade per disciplin.
- **Typer** anger vad ett element består av: dess lager med verklig tjocklek, dess utvecklingsnivå (LOD) och dess klassificeringskod. En typ läggs till i projektet, den ritas inte.
- **Tillgångar** är fysiska objekt som dörrar, fönster, möbler, VVS-armaturer och utrustning, med en planvy och en 3D-kropp i verklig storlek.

I fliken {{ui:Bibliotek}} väljer du {{ui:Bibliotek}} och använder **Objekttyp** för att visa Allt, Symboler, Typer eller Tillgångar.

## Lägg till en typ i projektet

1. Välj **Typer** under Objekttyp och öppna en.
2. Kontrollera dess uppbyggnad, LOD och klassificering under bilden, välj sedan {{ui:Lägg till i det här projektet}}.
3. Den läggs till som en vägg-, golv-, tak- eller undertakstyp som du kan rita med. Om en typ med det namnet redan finns läggs den nya till som en kopia och din behålls som den var. En {{ui:Ångra}} tar bort den.

## Projektmallar och Quick Kits

Välj {{ui:Paket}} för att se vad folk delat.

- **En projektmall** är en IFC-fil med nivåer, rutnät, typer och inställningar. {{ui:Spara till mina mallar}} lägger den under Nytt bygge, under Börja från.
- **Ett Quick Kit** är en lista med biblioteksobjekt. {{ui:Visa paketets objekt}} listar dem som kort du kan placera.
- Varje paket har en version och en ändringslogg, nyast först. En version som börjar med 0 är för diskussion; 1.0.0 är bara för det som ägaren av serien antagit.

## Dela dina egna

- **En projektmall:** {{ui:Spara som mall}}, bocka i {{ui:Skapa även en fil att dela i biblioteket}}, lägg till vad den innehåller och en version. Du får en `.json`-fil.
- **Ett Quick Kit:** i {{ui:Paket}} väljer du {{ui:Skapa ett Quick Kit från det här projektet}}. Det listar biblioteksobjekten projektet använder.
- **En typ:** i {{ui:Typpaket}} bockar du i en typ och väljer {{ui:Spara som biblioteksobjekt…}}.

Ladda upp filen på bibliotekets uppladdningssida. Den går igenom samma granskning som alla objekt, och du väljer licensen där: varje objekt anger sin licens. Objekten ska ange sin LOD, en IFC-klass och en klassificeringskod (en kod, inte bara ett namn).

## Erfarenheter från praktiken

På varje biblioteksobjekts sida kan inloggade medlemmar lägga till en anteckning: använt i ett verkligt projekt, testat i ett exempelprojekt, eller hittat ett problem. Skriv vilken typ av projekt med några få ord och utelämna kundnamn. En anteckning är offentlig och är ingen recension: den ändrar inte objektet.

## Bra att veta

- Inget skickas från appen. Filerna görs på din dator och du laddar upp dem själv.
- Ett Quick Kit gjort från en mall bär IFC-texten exakt som den sparats. Kontrollera den för allt privat innan du laddar upp.
- CadCraft visar Symboler och Tillgångar i sin flik Bibliotek; Typer och mallar är till för BimCraft-projekt.
