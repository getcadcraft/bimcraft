---
title: Eksportér modellen som Collada eller til kortvisning
summary: Skriv de åbne IFC-modeller som en Collada-fil (.dae) til Blender og andre 3D-programmer, eller som en Google Earth-pakke (.kmz) placeret, hvor modellen ligger på kortet.
keywords: collada, dae, kmz, kml, google earth, blender, eksport, geolokation, georeferering, breddegrad, længdegrad, placering, 3D-programmer
from: 81cfec09
---

{{ui:Collada}} på værktøjslinjen (eller {{ui:Eksportér Collada (.dae, .kmz)…}} i menuen Fil i menu- og båndstilene) skriver det, der er åbent, som Collada 1.4.1: hver model der vises, og de sammenkoblede modeller dér, hvor du har placeret dem.

## Eksport

1. Vælg {{ui:Collada}}.
2. Vælg formatet:
   - {{ui:Collada-fil (.dae), til Blender og andre 3D-programmer}}.
   - {{ui:Google Earth-pakke (.kmz): modellen placeret, hvor den ligger på kortet}}. Tilbydes kun, når modellen har en placering.
3. Vælg indstillingerne, og klik derefter på {{ui:Eksportér}}. Filen hentes, og statuslinjen viser, hvor mange elementer der kom med.

| Indstilling | Hvad den gør |
|---|---|
| {{ui:Skriv placeringen ind i filen}} | Tilføjer breddegrad, længdegrad, højde og retning for filens udgangspunkt til .dae-filen |
| {{ui:Højde}} | {{ui:På jorden: modellens niveau 0 ligger på terrænet}}, eller {{ui:Modellens egen højde over havet}} |
| {{ui:Medtag rum og zoner}} | Zoner medtages også (de udelades som standard) |
| {{ui:Medtag skjulte elementer}} | Elementer, du har skjult, skrives også (som standard skrives kun det, du ser) |

## Hvad der er i filen

| I modellen | I Collada-filen |
|---|---|
| Bygning, etager | Indlejrede noder, etager i højdeorden; elementer på ingen etage under »Ikke placeret« |
| Hvert element | Én node med sit eget net, navngivet som i modellen (dets navn, ellers dets klasse og tag) |
| Klasse, GlobalId, foruddefineret type | I nodens ekstra data (profil IFC), med det nøjagtige navn (profil ModelCraft) |
| Farver | Materialer, med gennemsigtighed |
| Enheder og akser | Meter, Z opad. Niveau 0 for den model, der står forrest, ligger i højde 0 |

Modellen bliver liggende tæt på udgangspunktet hen over terrænet, så programmer, der arbejder med enkeltpræcision, viser den uden rystelser. ModelCraft skriver sine Collada-filer med den samme skriver og åbner disse filer med deres elementnavne.

## Hvor placeringen kommer fra

Den model, der står forrest, giver placeringen, på samme måde som {{ui:Mål}} beregner et punkts breddegrad og længdegrad:

- En kortkonvertering (IFC4 IfcMapConversion, eller egenskabssættene i IFC2X3) via modellens koordinatsystem. Et system, du har valgt til modellen, vinder over det, som filen angiver.
- Ellers stedets breddegrad og længdegrad (tilnærmet: tilstrækkeligt over et helt sted).

Retningen måles, den antages ikke: den tager højde for kortets rotation, reel nord og kortets konvergens. Hvis du vil give en model en placering, brug {{ui:Kortorigo…}} under {{ui:Mål}}.

## I andre programmer

- **Google Earth** læser .kmz-filen: modellen vises på placeringen, drejet mod nord. En almindelig .dae har intet sted, som Google Earth læser en placering fra; brug .kmz.
- **Blender** (4.x og tidligere): File, Import, Collada (.dae). Hvert element kommer ind som sit eget objekt med sit materiale. Placeringen gemmes i filens ekstra data, som Blender ikke læser. Blender 5.0 fjernede sin indbyggede Collada-importør; brug dér {{ui:USD}} eller glTF-eksporten i stedet, eller åbn .dae-filen i Blender 4.5 og gem den som .blend.

Vores tests kontrollerer hver fil mod Collada 1.4.1-skemaet og læser den tilbage med en uafhængig Collada-læser. De er ikke blevet åbnet i Blender eller Google Earth.
