---
title: Öppna en IFC-modell och titta runt i 3D
summary: Öppna en IFC-fil, rotera, panorera och zooma, och använd Anpassa, Ovan, Framsida och Sida för att orientera dig.
keywords: ifc, 3d, rotera, panorera, zooma, anpassa, ovanvy, framsidevy, sidovy, navigera, viewcube, kamera
from: 68b460dd
---

## Vad du ska göra

Öppna en IFC-modell, rotera, panorera och zooma runt den i 3D och hoppa till de vanliga vyerna. Cirka fem minuter.

Du behöver en `.ifc`-fil. De flesta BIM-program exporterar en; i Revit är det **Arkiv > Exportera > IFC**. Se [Få en projektfil i 3D via IFC](topic:rvt-to-ifc).

## Steg

1. Klicka på {{ui:Välj en fil}} (eller släppområdet uppe till vänster).
2. Välj din `.ifc`-fil och bekräfta.
3. Vänta tills statusraden är klar. Den visar "Startar IFC-motorn…" första gången, sedan "Läser modellen…" och "Bygger geometri: … av … element".
4. Titta på modellen: den öppnas i en trekvartsvy, anpassad till skärmen.
5. Klicka på {{ui:Ovan}} i verktygsfältet ovanför modellen för att titta rakt ned.
6. Klicka på {{ui:Framsida}} för att titta på framsidan, och sedan {{ui:Sida}} för att titta från sidan.
7. Klicka på {{ui:Anpassa}}, eller tryck på {{key:F}}, för att gå tillbaka till trekvartsvyn av hela modellen.

## Vad du bör se

- Modellen i mitten, med tunna mörka kanter för en ritningsliknande look.
- Panelen {{ui:Fil}} till vänster: filnamnet, storleken, IFC-schemat (till exempel IFC2X3 eller IFC4), projektnamnet, fasen, programmet den exporterades från, författaren, exportdatumet samt antalet element och trianglar.
- Listorna {{ui:Våningsplan}} och {{ui:Element}} under den.
- Statusraden: "Öppnade *filnamn*: *n* element på *s* s".

## Att röra sig

:::mouse
| För att | Gör så här |
|---|---|
| Rotera | Dra med vänster knapp |
| Panorera | Dra med höger knapp, eller håll {{key:Shift}} (eller {{key:Mod}}) och dra med vänster knapp |
| Zooma | Rulla med hjulet, eller dra med mittenknappen |
| Se allt | Tryck på {{key:F}} eller klicka på {{ui:Anpassa}} |
:::

:::mac mouse
På en styrplatta: dra med ett finger nedtryckt för att rotera; håll {{key:Shift}} eller {{key:Mod}} och dra för att panorera; rulla med två fingrar eller nyp för att zooma. Ett klick med två fingrar är ett högerklick, och du kan dra med det för att panorera, men {{key:Shift}} och dra är enklare.
:::

:::touch
| För att | Gör så här |
|---|---|
| Rotera | Dra med ett finger |
| Zooma | Nyp med två fingrar |
| Panorera | Flytta två fingrar tillsammans |
| Se allt | Tryck på {{ui:Anpassa}} |
:::

Rotation sker alltid kring en punkt i mitten av modellen. Panorering flyttar den punkten, så efter en lång panorering kan rotationen kännas ur mitten: klicka på {{ui:Anpassa}} för att återställa den.

## Skuggad, kanter eller trådmodell

Tre små knappar precis ovanför ViewCube väljer hur modellen ritas: {{ui:Skuggad}}, {{ui:Skuggad med kanter}} (standard) och {{ui:Trådmodell}}. De är också kommandon (Vy i menyerna och i listan för anpassning), så de kan ha egna tangenter. {{ui:Plan}}, {{ui:Dela}} och {{ui:3D}} finns på raden {{ui:Vy}} i verktygsfältet.

## Vanliga misstag

- **Att förvänta sig namngivna vyer.** BimCraft har fyra fasta vyer ({{ui:Anpassa}}, {{ui:Ovan}}, {{ui:Framsida}}, {{ui:Sida}}), ViewCube i det nedre högra hörnet och fri rotation. Den sparar inga vyer.
- **Att leta efter planer och sektioner.** Det finns inga 2D-planer eller sektionslådor i den här versionen. Skär modellen med ett {{ui:Sektion}}-plan ([Skär en IFC-modell med ett sektionsplan](topic:section-plane)), eller stäng av våningsplan: [Visa och dölj våningsplan, utrymmen och kanter](topic:storeys-and-spaces).
- **Att öppna en projektfil och förvänta sig 3D.** En projektfil öppnas som ett filkort. Exportera IFC först.
- **Att öppna en `.ifczip`.** Packa upp den, eller exportera vanlig `.ifc`.
- **En mycket stor modell gör fliken långsam eller får den att krascha.** Se [Webbläsare, enheter och minne](topic:platforms).

## Nästa

[Välj ett element och läs dess egenskaper](topic:inspect-element).
