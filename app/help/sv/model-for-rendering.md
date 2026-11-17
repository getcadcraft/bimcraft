---
title: Skicka modellen till ett renderingsprogram
summary: Spara det 3D-vyn visar som en glTF-modell (.glb) med dess material, texturer och lampor, för renderings- och visualiseringsprogram som läser glTF.
keywords: glb, gltf, gl transmission format, export, rendering, rendera, visualisering, realtid, archviz, material, texturer, lampor, ljuskällor, tillgång, anpassad tillgång
from: e62d57dc
---

{{ui:För rendering}} på verktygsfältet sparar det 3D-vyn visar som en enda **.glb**-fil (glTF 2.0, det öppna formatet från Khronos Group). Renderingsprogram som läser glTF öppnar den med modellens material och lampor; Twinmotion listar glTF och GLB bland de geometrifiler det importerar och behåller deras ljus (Epics dokumentation, "Importing geometry in Twinmotion"): använd {{ui:För rendering}} och importera .glb-filen där. Ingenting laddas upp: filen skapas på den här datorn.

## Spara den

1. Öppna IFC-modellen och ställ in 3D-vyn: dölj de våningsplan, element eller länkade modeller du inte vill ha, och [måla materialen](topic:paint-materials) du vill se.
2. Klicka på {{ui:För rendering}} (eller skriv `GLB`).
3. Filen laddas ner som "<model name>.glb". Statusfältet säger hur många trianglar, material och lampor den innehåller.

## Vad filen innehåller

- **Geometri** för varje element som 3D-vyn visar, i meter, med Y uppåt (glTF:s egna axlar). Ett objekt per våningsplan och material, namngivet "Level 1 — Brick, red", så att du kan välja ett material i renderingsprogrammet och byta ut det mot sitt eget.
- **Material:** varje färg med det utseende du valt för den i [Rendera](topic:render) (matt, satin, blank, metall, glas…), och varje målat biblioteksmaterial med sin färg, råhet och **textur** (dess bild finns i filen, skalad till sin verkliga storlek: ett tegel är en tegels storlek). Glas är genomskinligt.
- **Lampor:** varje belysningsarmatur som är påslagen i Rendera › Lampor, som punktljus eller spotljus med sin ljusstyrka (lumen omräknat till candela), färg och ljusvinkel.
- **Var tomten ligger:** tomtens latitud och longitud skrivs i filen som referens. Renderingsprogram har sin egen sol: skriv in platsen där.

## Vad som utelämnas

- Sektionssnittet (hela element tas med) och element som visas genomskinliga (de utelämnas).
- Objekt element för element (ett objekt per våningsplan och material i stället), IFC-egenskaper, bumpmappar, sparade vyer och inspelade vandringar.
- Kanter och bakgrunden.

## Enscape och andra insticksrenderare

Enscape körs inuti ett annat konstruktionsprogram och har ingen fil att öppna ett helt projekt med. Två sätt:

- Öppna modellens **IFC** (Fil › Spara) i programmet Enscape körs i; de flesta läser IFC. Färgerna följer med; biblioteksmaterialen kommer som sina färger.
- Ta in en **liten del** (möbel, armatur) som en anpassad tillgång: isolera den först och klicka sedan på {{ui:För Enscape (.gltf)}}. Enscapes bibliotek för anpassade tillgångar listar .gltf-, .obj- och .fbx-filer, inte .glb, så den här knappen sparar samma scen som en självständig **.gltf**-fil (binärdata och bilderna finns i filen; det finns inget annat att kopiera med den). Enscape rekommenderar små tillgångar (under cirka 20,000 trianglar).

:::note
I CadCraft Studio kan samma glTF-fil (och en USD-fil) också sparas från {{ui:Rendera}} › Motor › **glTF-fil** / **USD-fil**, eller öppnas direkt i ett program på den här datorn: se [Öppna scenen i ett annat program](topic:render-open-in). Ett insticksprogram eller en direktlänk för Enscape eller Twinmotion finns inte ännu. FBX- och Datasmith-formaten har ingen publicerad specifikation, så BimCraft skriver inte dem; glTF är den öppna vägen.
:::
