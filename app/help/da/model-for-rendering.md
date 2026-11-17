---
title: Send modellen til et renderingsprogram
summary: Gem det, 3D-visningen viser, som en glTF-model (.glb) med dens materialer, teksturer og lamper, til render- og visualiseringsprogrammer, der læser glTF.
keywords: glb, gltf, gl transmission format, eksport, rendering, render, visualisering, realtid, archviz, materialer, teksturer, lamper, lys, aktiv, brugerdefineret aktiv
from: e62d57dc
---

{{ui:Til rendering}} på værktøjslinjen gemmer det, 3D-visningen viser, som én **.glb**-fil (glTF 2.0, det åbne format fra Khronos Group). Renderingsprogrammer, der læser glTF, åbner den med modellens materialer og lamper; Twinmotion lister glTF og GLB blandt de geometrifiler, det importerer, og beholder deres lys (Epics dokumentation, "Importing geometry in Twinmotion"): brug {{ui:Til rendering}} og importér .glb-filen dér. Intet uploades: filen laves på denne computer.

## Gem den

1. Åbn IFC-modellen og opsæt 3D-visningen: skjul de etager, elementer eller eksterne modeller, du ikke vil have, og [tildel de materialer](topic:paint-materials), du vil se.
2. Klik på {{ui:Til rendering}} (eller skriv `GLB`).
3. Filen downloades som "<modelnavn>.glb". Statuslinjen siger, hvor mange trekanter, materialer og lamper den indeholder.

## Hvad filen indeholder

- **Geometri** for hvert element, 3D-visningen viser, i meter, med Y opad (glTF's egne akser). Ét objekt pr. etage og materiale, navngivet "Level 1 — Brick, red", så du kan vælge et materiale i renderingsprogrammet og erstatte det med dets eget.
- **Materialer:** hver farve med det udseende, du valgte for den i [Render](topic:render) (mat, satin, blank, metal, glas …), og hvert tildelt bibliotekmateriale med sin farve, ruhed og **tekstur** (dets billede er i filen, skaleret til sin rigtige størrelse: en mursten er på mursten-størrelse). Glas er gennemsigtigt.
- **Lamper:** hver lysarmatur, der er tændt under Render › Lamper, som et punkt- eller spotlys med sin lysstyrke (lumen omregnet til candela), farve og strålevinkel.
- **Hvor byggegrunden ligger:** byggegrundens breddegrad og længdegrad skrives i filen som reference. Renderingsprogrammer har deres egen sol: skriv stedet ind dér.

## Hvad der udelades

- Snittet (hele elementer medtages) og elementer vist gennemsigtige (de udelades).
- Objekter element for element (i stedet ét objekt pr. etage og materiale), IFC-egenskaber, bumpmaps, gemte visninger og optagede rundture.
- Kanter og baggrunden.

## Enscape og andre plugin-renderere

Enscape kører inde i et andet designprogram og har ingen fil, man kan åbne et helt projekt med. To måder:

- Åbn modellens **IFC** (Fil › Gem) i det program, Enscape kører i; de fleste læser IFC. Farver følger med; bibliotekmaterialerne kommer som deres farver.
- Hent en **lille del** (møbel, en armatur) ind som et brugerdefineret aktiv: isolér den først, og klik derefter på {{ui:Til Enscape (.gltf)}}. Enscapes bibliotek med brugerdefinerede aktiver lister .gltf-, .obj- og .fbx-filer, ikke .glb, så denne knap gemmer den samme scene som én selvstændig **.gltf**-fil (de binære data og billederne ligger i filen; der er intet andet at kopiere med). Enscape anbefaler små aktiver (under cirka 20.000 trekanter).

:::note
I CadCraft Studio kan den samme glTF-fil (og en USD-fil) også gemmes fra {{ui:Render}} › Motor › **glTF-fil** / **USD-fil**, eller åbnes direkte i et program på denne computer: se [Åbn scenen i et andet program](topic:render-open-in). Et plugin eller en live-forbindelse til Enscape eller Twinmotion er ikke lavet endnu. FBX- og Datasmith-formaterne har ingen offentliggjort specifikation, så BimCraft skriver dem ikke; glTF er den åbne vej.
:::
