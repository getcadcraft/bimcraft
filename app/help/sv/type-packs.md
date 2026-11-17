---
title: Typpaket: dela väggtyper som öppna filer
summary: Spara väggtyper med deras lager, material, taggar och klassifikationskoder, samt familjer, som en öppen fil (vanlig JSON eller IFC), och lägg till dem i ett annat projekt. Väggtyper i en IFC-fil från ett annat program kan också läsas.
keywords: typpaket, typer, väggtyp, dela, export, import, bibliotek, öppet format, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, material, lager, mall, kontorsstandard, familjer
from: e4c91331
---

## Vad du gör

Ta med dina väggtyper från ett projekt till ett annat, eller ge dem till någon som arbetar i ett annat program. Ett typpaket innehåller varje väggtyp med dess lager, tjocklekar, material, kärna, håligheter, lagerprioritet, utvecklingsnivå, mängdningsdata och klassifikationskoder, samt alla familjer du lägger till. Det är en öppen fil: vanlig JSON-text som vem som helst kan läsa, eller en IFC-fil. Inget i den är låst till ett företag, ett land eller ett konto.

## Spara typer från ett projekt

1. Öppna **Data** i modellfältet och välj {{ui:Typpaket}}.
2. Under {{ui:Spara typer från det här projektet}} bockar du för de väggtyper som ska ingå. Projektets egna typer är ibockade; en startertyp kan läggas till och går med som en kopia. Bocka för familjer om du vill ha med dem.
3. Skriv ett {{ui:Paketnamn}}.
4. {{ui:Spara som paket (.json)}} laddar ner en `.cctypes.json`-fil. {{ui:Spara som IFC (.ifc)}} laddar ner en IFC-fil som bara innehåller typer: varje väggtyp som en IfcWallType med sin materiallagerserie, sina material och sin klassifikation, för vilket BIM-program som helst.

## Lägg till typer i ett projekt

1. I samma dialogruta väljer du {{ui:Öppna ett paket eller en IFC-fil…}} och väljer ett `.json`-paket eller en `.ifc`-fil.
2. Dialogen listar vad filen innehåller: varje väggtyp med dess tjocklek, antal lager och koder, materialen och familjerna.
3. Välj vad som händer med {{ui:En typ som projektet redan har}}: **Behåll projektets**, **Lägg till paketets som en kopia** (den får ett nytt namn som slutar på "(2)"), eller **Ersätt den (endast när ingen vägg använder den)**.
4. {{ui:Lägg till i projektet}}. Dialogen listar vad som lades till, kopierades, ersattes eller behölls. Det är ett enda steg att ångra.

De nya typerna finns direkt i Väggverktygets typlista.

## Golv-, tak- och innertakstyper

Listan över typer att spara innehåller också projektets golv-, tak- och innertakstyper och deras startertyper (märkta Golv, Tak, Innertak). Ett paket kan bära alla fyra slagen; varje typ anger sin IFC-klass (IfcWallType, IfcSlabType, IfcCoveringType). En golv-, tak- eller innertakstyp som element använder ersätts inte från ett paket: ändra den i typredigeraren.

## En typ som ett biblioteksobjekt

Bocka för exakt en typ och välj **Spara som ett biblioteksobjekt…**. Det sparar en `.cctype.json`-fil: ett biblioteksobjekt av typen Typer som innehåller just den typen (dess lager, material, LOD och klassifikationskoder). Ladda upp den i biblioteket för att dela den. **Öppna ett paket eller en IFC-fil** läser även ett sådant objekt och lägger till dess typ i projektet som ett paket.

## Bra att veta

- En IFC-fil från ett annat program kan också öppnas här. Varje väggtyp i den som har materiallager läses: namnet, lagrens material och tjocklekar samt eventuella håligheter är filens egna. Vilka lager som är kärnan och vad varje lager gör (yta, konstruktion, isolering) gissas, typen märks **(gissad)**, och du bör kontrollera den i väggtypredigeraren. En väggtyp utan lager utelämnas och nämns med namn.
- Ett material som projektet redan har behålls som det är. Ett nytt material vars namn är upptaget får "(paket)" efter sitt namn.
- En typ som väggar använder ersätts aldrig från ett paket. Ändra den i väggtypredigeraren, som flyttar dess väggar på rätt sätt.
- En kod satt på en vägg följer inte med: den hör till den väggen. En kod satt på typen gör det.
- En fil med ett fält som formatet inte har, ett lager vars material saknas, eller något som inte är ren text avvisas, och meddelandet säger var och varför.
- Inte byggt: golv-, tak- och innertakstyper (de har inga typer i den här versionen: var och en har sin egen tjocklek), dörr- och fönstertyper utöver familjer, samt hatchningar eller färger från ett annat programs fil.
