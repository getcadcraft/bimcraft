---
title: Öppna ett projektpaket
summary: Ett projektpaket är en zip-fil med en modell, dess vyer, sina blad och sina egenskapsgrupper. Öppna det, visa en vy med dess våningsplan och lager, öppna ett blad och se egenskaper i projektets egna grupper.
keywords: paket, projektpaket, ccbundle, zip, vyer, vykarta, blad, bladbok, lagerkombination, egenskapsgrupper, standarder, pln, mall
from: b5b86e8f
---

## Vad du gör

Öppna ett **projektpaket** (`.ccbundle.zip`) och arbeta med projektet så som det var organiserat: dess vyer, dess blad och dess egenskapsgrupper, ovanpå modellen.

Ett paket innehåller:

- modellen som IFC,
- bladen som PDF och DWG,
- en lista över det IFC utelämnar: vyerna (var och en med sitt våningsplan, sin lagerkombination och sin skala), bladen och ritningarna placerade på dem, egenskapsdefinitioner i deras grupper, klassificeringar och standarder såsom lager, pennuppsättningar, linjetyper, fyllningar, ytor och sammansatta material.

Paketen skrivs av ett skript med öppen källkod som körs i Archicad och frågar Archicad själv efter dessa listor. BimCraft läser aldrig filer av typen `.pln` eller `.tpl` direkt; se [Öppna .pln- och .pla-projektfiler](topic:pln-project-files).

## Skapa ett paket

Skriptet är en förhandsversion: det har ännu inte testats på varje Archicad-version. Hämta det från [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Du behöver Archicad 24 eller senare och Python 3.8 eller senare; inget annat behöver installeras.

1. Spara `archicad_bundle.py` i en mapp, till exempel `C:\cc-bundle`.
2. I Archicad, öppna projektet och skapa en publiceringsuppsättning med namnet exakt **CadCraft bundle**: 3D-vyn som IFC, varje blad som PDF och varje blad igen som DWG, publicerade till filer på disken i en enda platt mapp.
3. Med projektet öppet, kör `python archicad_bundle.py --probe --out .` en gång. Det läser bara, och skriver `probe.json`.
4. Kör `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (använd den IFC-översättare du valde). Archicad publicerar uppsättningen och skriptet skriver `<project>.ccbundle.zip`.

Om publiceringen via skriptet misslyckas, publicera uppsättningen för hand och kör `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Förrådets README har alla alternativ. Om något inte kommer med, öppna ett ärende där och bifoga `probe.json`.

## Öppna ett paket

1. Klicka på {{ui:Välj en fil}}, eller släpp `.ccbundle.zip` på BimCraft. I en mapp du öppnade med {{ui:Öppna en mapp}} listas paket under **Projektpaket**; klicka på ett med namnet.
2. Modellen öppnas som vilken IFC som helst, och avsnittet **Projektpaket** visas till vänster, under filens fakta.

Ingenting laddas upp: paketet läses på din dator, en fil i taget, så en stor modell kopieras inte två gånger.

## Visa en vy

Under **Vyer** grupperas vyerna efter de mappar de hade i projektet. Klicka på en vys namn:

- **En planritning** visar bara sitt våningsplan, sett uppifrån.
- **Dess lagerkombination** döljer elementen på de lager som kombinationen döljer. Statusraden säger hur många element som dolts.
- **Dess skala** visas bredvid namnet och i statusraden.
- **En 3D-vy** visar alla våningsplan.

För att visa allt igen, använd {{ui:Visa alla}} i {{ui:Visa}} och markera alla våningsplan.

:::note
BimCraft hittar lagren via IFC-filens lagertilldelningar. Om IFC exporterades utan dem döljer en lagerkombination ingenting, och statusraden säger 0 element dolda.
:::

## Öppna ett blad

Under **Blad** visar varje blad sitt nummer, namn, pappersstorlek och vyerna som placerats på det.

- **PDF** sparar bladets PDF från paketet.
- **DWG** öppnar bladets ritning i 2D-vyn. Klicka på valfri vy för att komma tillbaka till modellen.
- **Öppna i …** skickar bladets fil till det program som arbetar med den, i en ny flik: PDF till MarkupCraft, DWG till CadCraft. Det visas bara där det programmet är öppet bredvid BimCraft. Filen läses från paketet när fliken laddas, och ingenting laddas upp.

Ett blad utan något av dem säger **Ingen fil i paketet**.

## Se egenskaper i projektets grupper

Välj ett element. **Egenskapsgrupper** visar dess egenskaper under de grupper projektet definierade, matchade via egenskapsuppsättningen och namnet som definitionen anger för IFC, eller annars via namnet. Resten finns kvar i {{ui:Egenskaper}} som vanligt. **Egenskapsdefinitioner** listar varje definition med dess grupp, typ och IFC-namn.

## Standarder och anteckningar

- **Standarder** räknar lagren, lagerkombinationerna, pennuppsättningarna, linjetyperna, fyllningarna, ytorna, sammansatta material och materialen i paketet.
- **Anteckningar** listar det skriptet inte kunde hämta från den versionen av Archicad, varje fält BimCraft inte kunde läsa, och varje fil paketet anger men inte innehåller.

## Felsökning

- **”… är en zip-fil men inget projektpaket.”** Zip-filen saknar `manifest.json`. Packa upp den och öppna `.ifc`-filen inuti.
- **”… är ett nyare projektpaket än BimCraft kan läsa.”** Uppdatera BimCraft.
- **”… innehåller inte modellen som dess manifest anger.”** Zip-filen blev avkortad eller redigerad. Skapa paketet igen.
- **En vy visar alla våningsplan.** Dess våningsplan finns inte i modellens IFC (statusraden säger det). Kontrollera att IFC-exporten innehöll det våningsplanet.

Se även [Arbeta mellan två BIM-program](topic:two-bim-programs) och [Vad BimCraft läser från varje format](topic:file-formats).
