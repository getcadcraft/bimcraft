---
title: Eksporter modellen som Collada eller for Google Earth
summary: Skriv de åpne IFC-modellene som en Collada-fil (.dae) for Blender og andre 3D-programmer, eller som en Google Earth-pakke (.kmz) plassert der modellen ligger på kartet.
keywords: collada, dae, kmz, kml, google earth, blender, eksport, geolokasjon, georeferering, breddegrad, lengdegrad, plassering, 3D-programmer
from: 81cfec09
---

{{ui:Collada}} på verktøylinjen (eller {{ui:Eksporter Collada (.dae, .kmz)…}} i Fil-menyen i meny- og båndstilene) skriver det som er åpent, som Collada 1.4.1: hver modell som vises, og sammenstilte modeller der du plasserte dem.

## Eksport

1. Velg {{ui:Collada}}.
2. Velg formatet:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Tilbys bare når modellen har en plassering.
3. Velg alternativene, og velg deretter {{ui:Export}}. Filen lastes ned, og statuslinjen viser hvor mange elementer som ble med.

| Alternativ | Hva det gjør |
|---|---|
| {{ui:Write the location into the file}} | Legger til breddegrad, lengdegrad, høyde og retning for filens origo i .dae-filen |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, eller {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Rom tas også med (de utelates som standard) |
| {{ui:Include hidden elements}} | Elementer du har skjult, skrives også (som standard skrives bare det du ser) |

## Hva som er i filen

| I modellen | I Collada-filen |
|---|---|
| Bygning, etasjer | Nøstede noder, etasjer i høydeorden; elementer uten etasje under "Unplaced" |
| Hvert element | Én node med sitt eget nett, navngitt som i modellen (navnet, ellers klassen og taggen) |
| Klasse, GlobalId, forhåndsdefinert type | I nodens tilleggsdata (profil IFC), med det eksakte navnet (profil ModelCraft) |
| Farger | Materialer, med transparens |
| Enheter og akser | Meter, Z opp. Nivå 0 i den fremste modellen er på høyde 0 |

Modellen holder seg nær origo på bakken, slik at programmer som regner med enkel presisjon viser den uten hopping. ModelCraft skriver sine Collada-filer med samme skriver, og åpner disse filene med elementnavnene deres.

## Hvor plasseringen kommer fra

Den fremste modellen gir plasseringen, på samme måte som {{ui:Mål}} regner ut et punkts breddegrad og lengdegrad:

- En kartkonvertering (IFC4 IfcMapConversion, eller egenskapssettene i IFC2X3) via modellens koordinatsystem. Et system du valgte for modellen går foran systemet filen angir.
- Ellers tomtens breddegrad og lengdegrad (tilnærmet: det er godt nok over en tomt).

Retningen måles, ikke antas: den tar hensyn til kartets rotasjon, geografisk nord og kartets meridiankonvergens. For å gi en modell en plassering, bruk {{ui:Kartorigo…}} i {{ui:Mål}}.

## I andre programmer

- **Google Earth** leser .kmz-filen: modellen vises på plasseringen, vendt mot nord. En vanlig .dae-fil har ingen plass der Google Earth leser en plassering fra; bruk .kmz.
- **Blender** (4.x og tidligere): Fil, Importer, Collada (.dae). Hvert element kommer inn som sitt eget objekt med materialet sitt. Plasseringen ligger i filens tilleggsdata, som Blender ikke leser. Blender 5.0 fjernet den innebygde Collada-importøren; der kan du bruke {{ui:USD}} eller glTF-eksporten i stedet, eller åpne .dae-filen i Blender 4.5 og lagre den som .blend.

Testene våre kontrollerer hver fil mot Collada 1.4.1-skjemaet og leser den tilbake med en uavhengig Collada-leser. De er ikke åpnet i Blender eller Google Earth.
