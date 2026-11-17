---
title: Vis en DWG- eller DXF-tegning
summary: Åbn en DWG eller DXF, bevæg dig rundt i modelrum og på ark, læs koordinater og se, hvad der endnu ikke er tegnet.
keywords: dynamiske blokke, synlighedstilstande, dwg, dxf, cad, tegning, 2d, visning, fremviser, panorér, zoom, modelrum, papirrum, layout, koordinater, åbn dwg
from: 4db3122a
---

## Hvad du gør

Åbn en CAD-tegning, se den i 3D eller 2D, bevæg dig rundt i den, skift mellem modelrum og dens ark, og læs koordinater. BimCraft viser DWG- og DXF-tegninger; det redigerer eller gemmer dem ikke. For at ændre en, klik på {{ui:Rediger i CadCraft}}, og tegningen åbnes i CadCraft-tegneappen i en ny fane.

## Trin

1. Klik på {{ui:Vælg en fil}}, eller træk tegningen ind på siden.
2. Vælg en `.dwg`- eller `.dxf`-fil.
3. Vent, mens statuslinjen siger "Læser tegningen…". Store tegninger tager nogle sekunder. Derefter siger den, hvor lang tid læsningen tog, "tegner…", mens det første billede tegnes, og hvor lang tid det tog.
4. Tegningen åbnes i 3D, den hurtigste måde at vise en stor tegning på (se [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d)). Klik på {{ui:Model}} for den flade 2D-visning. For altid at åbne tegninger i 2D, sæt {{ui:Indstillinger}} › BimCraft › **Tegninger åbnes i** til {{ui:Model (2D)}}. En tegning uden noget i modelrum, eller en browser, der ikke kan vise 3D, åbnes i 2D.
5. Se fanerne over tegningen: {{ui:Model}} først, derefter én fane pr. ark, i tegningens egen rækkefølge.
6. Klik på en arkfane for at se det ark: papiret, med modellen vist gennem dets viewporte.
7. Klik på {{ui:Model}} for at gå tilbage til modelrum.
8. Før markøren over tegningen, og læs X- og Y-koordinaterne i hjørnet.

## Det skal du se

- Tegningen, tilpasset vinduet. Farverne følger tegningen. Hvide linjer (farve 7) tegnes i temaets blæk, og lyse farver mørkes på det lyse tema, så de forbliver læsbare.
- {{ui:Tegning}}-panelet til venstre: fil, størrelse, format (for eksempel "AutoCAD 2018 (AC1032)"), enheder, antal enheder og lag, antal ark og linkede tegninger og udstyr, når der er nogen.
- {{ui:Lag}}-listen til venstre.
- Til højre: hvordan du bevæger dig rundt, linkede tegninger og billeder, og **Ikke tegnet endnu**.

## Bevæge dig rundt

:::mouse
| For at | Gør dette |
|---|---|
| Panorere | Træk med en hvilken som helst museknap |
| Zoome | Rul med hjulet; punktet under markøren bliver stående |
| Tilpasse | Dobbeltklik, tryk {{key:F}}, eller klik på {{ui:Tilpas}} |
:::

:::mac mouse
På et trackpad zoomer rulning med to fingre **zoomer**, den panorerer ikke. Knibning zoomer også. For at panorere, klik og træk.
:::

:::touch
Træk med én finger for at panorere. Knibe-zoom er ikke lavet endnu for tegninger: tryk på {{ui:Tilpas}} for at se hele arket, og brug mus eller trackpad til at zoome ind.
:::

## Dynamiske blokke

En dynamisk blok tegnes, som tegningen viser den: hver placeret blok i den synlighedstilstand, tegningen blev gemt med ("Plan" eller "Front", "Single bowl" eller "Double bowl"). Til højre lister **Dynamiske blokke** hver enkelt placeret i modelrum: hvor mange der er placeret, de tilstande de viser, og hver tilstand blokken har. I {{ui:3D}} klikker du på en placeret blok for at se **Dynamisk blok**, **Vist tilstand** og **Andre tilstande** under Egenskaber. BimCraft skifter ikke tilstande.

## Ikke tegnet endnu

Nogle slags objekter tegnes ikke i denne build. De tælles under **Ikke tegnet endnu** til højre ("Disse dele af tegningen springes over indtil videre, ikke gættet på."), så du ved, at noget mangler. Linjer, polylinjer, buer, cirkler, ellipser, splines, skraveringer og massive udfyldninger, tekst og flerlinjet tekst, blokke med attributter, målsætninger, henvisningslinjer og flere henvisningslinjer, tabeller, billeder og viewporte tegnes. 3D-flader, polyface-net og polygonnet tegnes som deres kanter set oppefra; skift til {{ui:3D}} for at se dem som flader.

En binær DXF åbnes ikke, og BimCraft siger det. Gem den igen som ASCII-DXF eller som DWG fra programmet, der lavede den.

## Almindelige fejl

- **Tegningen ser tom ud.** Nogle lag kan være slukket eller frosset i selve tegningen; de starter uden flueben i {{ui:Lag}}. Klik på {{ui:Alle til}}. Hvis statussen siger "*navn* er en tom tegning: den indeholder ingen linjer, tekst eller blokke.", er der intet i den.
- **Et ark viser en tom ramme.** Arket kan afhænge af linkede tegninger. Se [Find linkede tegninger og billeder](topic:dwg-linked-files).
- **Teksten ser lidt anderledes ud.** BimCraft tegner tekst med en smal sans-serif-skrifttype, ikke tegningens egne skrifttyper, så teksten kan være lidt bredere eller smallere end i programmet, der lavede den.
- **"*navn* kunne ikke læses. Den er måske beskadiget eller gemt i et format, læseren endnu ikke håndterer."** Parentesen til sidst angiver filens formatkode. Gem den fra programmet, der lavede den, som en ældre DWG eller som DXF, og prøv igen.
- **Du forventer at måle, tegne eller redigere.** BimCraft viser kun tegninger. Klik på {{ui:Rediger i CadCraft}} for at åbne samme fil i CadCraft-tegneappen, som redigerer den og gemmer en kopi som DWG eller DXF. Din originalfil ændres ikke, og linkede tegninger bliver i BimCraft. Knappen vises kun, hvor CadCraft er åbent for dig.

## Næste

- [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d)
- [Arbejd med lag og ark](topic:dwg-layers-sheets)
- [Tjek en tegning i udskriftsvisning](topic:print-view)
