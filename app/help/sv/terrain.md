---
title: Tomtmarken, byggplattan och beläggningarna
summary: Ta in marken i modellen från mätpunkter, höjdkurvor, en LAS- / LAZ-skanning, en GeoTIFF, en LandXML-yta (från CivilCraft) eller några höjdkotor; skär in husets byggplatta med dess slänter och schakt / fyllning; lägg infarter, gångvägar och uteplatser på den; överlämna den till CivilCraft som LandXML.
keywords: terräng, mark, tomt, topografi, mätning, punkter, PNEZD, höjdkurvor, LAS, LAZ, LiDAR, GeoTIFF, DEM, höjd, höjdkota, lutning, planering, byggplatta, schakt, fyllning, jordarbete, släntkrön, slänt, infart, gångväg, uteplats, beläggning, LandXML, CivilCraft
from: 208298d6
---

## Vad du gör

Placera huset på dess tomt. Marken blir en del av modellen: den visas i 3D, skärs i sektioner och fasader och har höjdkurvor i planritningen. En byggplatta skärs in under huset, infarter och gångvägar följer den, och plintar trappas ned med den.

## Ta in marken

1. Öppna {{ui:Bygge}} och välj {{ui:Terräng}}.
2. Antingen:
   - **Öppna en mätfil…**: mätpunkter (PNEZD, PENZD eller ren easting, northing, höjd; separerade med komma, tabb eller mellanslag), höjdkurvor i en DXF eller DWG (polylinjer på sin höjd, 3D-polylinjer), en LAS- eller LAZ-skanning (markpunkter behålls, gallras till ungefär en per kvadratmeter), ett GeoTIFF eller ett ASCII-höjdgrid, eller en **LandXML**-yta som CivilCraft exporterar (dess egna punkter och trianglar behålls; när filen innehåller flera ytor frågar BimCraft vilken som är marken; dess enheter kommer från filen). Välj filens enheter först (LandXML anger sina egna).
   - Eller skriv en **Höjdkota** (från den här nivåns golv, så `-1'` är en fot under det) och klicka på punkter i planritningen, ändra höjden och klicka på fler, och sedan **Skapa marken**. Tre punkter räcker för att börja.

Mätkoordinater långt från modellen (plana koordinatsystem, UTM) flyttas till huset, och höjderna sätts så att marken vid huset ligger ungefär 8" under första våningsplanet. **Höj marken** i **Egenskaper** rättar det med valfritt belopp.

## Byggplattan

1. Välj {{ui:Byggplatta}}.
2. Ange **Marginal** runt huset, hur långt **plattan ligger under golvet** (8" under bjälklag, mer under krypgrund) och **Slänter** ut till den befintliga marken (`2:1` = två fot ut för varje fot upp eller ned).
3. Klicka inne i huset.

Marken plattas ut under huset och ut till marginalen, sedan går den upp i sluttningen (schakt) och ned till lågsidan (fyllning) tills den möter den befintliga marken. **Egenskaper** för marken och för plattan ger schakt- och fyllningsvolymerna. Flyttar du väggarna följer plattan med.

## Infarter, gångvägar och uteplatser

Välj {{ui:Beläggning}}, välj **Gångväg**, **Infart** eller **Uteplats**, och klicka på hörnen. Klicka på första hörnet igen, dubbelklicka eller tryck på {{key:Enter}} för att avsluta. Beläggningen följer den färdiga marknivån; ändra dess typ eller tjocklek i **Egenskaper**.

## Plintar följer marknivån

När marken finns i modellen följer stomväggar och krypgrundsplintar den: längs varje vägg håller plinten sitt djup under marken utanför, och den trappas i hela 8"-steg där marken faller (se [Grunder under väggarna](topic:foundations)).

## Överlämna till CivilCraft

**LandXML för CivilCraft** (på raden Terräng, eller i markens **Egenskaper**) laddar ner den befintliga marken och den färdiga marknivån som en LandXML-fil. Öppna den i CivilCraft för riktig planering, dränering och jordarbete.

## Bra att veta

- Marken kräver en IFC4-modell, precis som alla nya byggnader.
- Höjdkurvor visas i planritningen för markplanet med det intervall som anges i markens **Egenskaper**; var femte är tjockare.
- Marken sparas som ett IFC-terrängelement (en sluten triangulerad yta, så att sektioner kan skära den); plattan och beläggningarna sparas med den. Ta bort marken för att börja om — dess platta och beläggningar följer med.
