---
title: Exportera modellen som Collada eller för Google Earth
summary: Skriv de öppna IFC-modellerna som en Collada-fil (.dae) för Blender och andra 3D-program, eller som ett Google Earth-paket (.kmz) placerat där modellen finns på kartan.
keywords: collada, dae, kmz, kml, google earth, blender, export, geolokalisering, georeferens, latitud, longitud, plats, 3D-program
from: 81cfec09
---

{{ui:Collada}} på verktygsfältet (eller {{ui:Exportera Collada (.dae, .kmz)…}} i menyn Fil i meny- och menyflikstilarna) skriver det som är öppet som Collada 1.4.1: varje modell som visas, och sammanfogade modeller där du placerade dem.

## Exportera

1. Välj {{ui:Collada}}.
2. Välj formatet:
   - {{ui:Collada-fil (.dae), för Blender och andra 3D-program}}.
   - {{ui:Google Earth-paket (.kmz): modellen placerad där den finns på kartan}}. Erbjuds bara när modellen har en plats.
3. Välj alternativen och klicka sedan på {{ui:Exportera}}. Filen laddas ner, och statusfältet visar hur många element som togs med.

| Alternativ | Vad det gör |
|---|---|
| {{ui:Skriv platsen i filen}} | Lägger till latitud, longitud, höjd och riktning för filens origo i .dae-filen |
| {{ui:Höjd}} | {{ui:På marken: modellens nivå 0 sitter på terrängen}}, eller {{ui:Modellens egna höjd över havet}} |
| {{ui:Inkludera rum och utrymmen}} | Utrymmen tas med också (de utelämnas som standard) |
| {{ui:Inkludera dolda element}} | Element du dolt skrivs också (som standard skrivs bara det du ser) |

## Vad som finns i filen

| I modellen | I Collada-filen |
|---|---|
| Byggnad, våningsplan | Nästlade noder, våningsplan i ordning efter höjd; element utan våningsplan under "Unplaced" |
| Varje element | En nod med eget nät, namngiven som i modellen (sitt namn, annars sin klass och tagg) |
| Klass, GlobalId, fördefinierad typ | I nodens extra data (profil IFC), med exakt namn (profil ModelCraft) |
| Färger | Material, med genomskinlighet |
| Enheter och axlar | Meter, Z uppåt. Nivå 0 för modellen framför ligger på höjd 0 |

Modellen ligger nära origo över marken, så program som arbetar med enkel precision visar den utan skakning. ModelCraft skriver sina Collada-filer med samma skrivare och öppnar dessa filer med deras elementnamn.

## Varifrån platsen kommer

Modellen framför ger platsen, på samma sätt som {{ui:Mät}} räknar ut en punkts latitud och longitud:

- En kartkonvertering (IFC4 IfcMapConversion, eller egenskapsuppsättningarna i IFC2X3) via modellens koordinatsystem. Ett system du valt för modellen går före det som filen anger.
- Annars tomtens latitud och longitud (ungefärliga: de duger över en tomt).

Riktningen mäts, den antas inte. Den tar hänsyn till kartans rotation, sann nord och kartans konvergens. För att ge en modell en plats, använd {{ui:Kartorigo…}} i {{ui:Mät}}.

## I andra program

- **Google Earth** läser .kmz-filen: modellen visas på platsen, vriden mot norr. En vanlig .dae-fil har ingen plats som Google Earth läser en plats från; använd .kmz.
- **Blender** (4.x och tidigare): File, Import, Collada (.dae). Varje element kommer in som ett eget objekt med sitt material. Platsen sparas i filens extra data, som Blender inte läser. Blender 5.0 tog bort sin inbyggda Collada-importör; använd där {{ui:USD}} eller glTF-exporten i stället, eller öppna .dae-filen i Blender 4.5 och spara en .blend.

Våra tester kontrollerar varje fil mot Collada 1.4.1-schemat och läser tillbaka den med en oberoende Collada-läsare. De har inte öppnats i Blender eller Google Earth.
