---
title: Fält i egenskapspanelen
summary: Vad varje fält i egenskapspanelen samt panelerna Fil, Ritning och Mapp betyder, och vilka du kan ändra.
keywords: egenskaper, fält, attribut, globalid, guid, kopiera, kopiera värde, kopiera alla, csv, urklipp, serienummer, tagg, objekttyp, rad, express-id, egenskapsuppsättning, pset, mängder, schema, filpanel
from: fe55b435
---

## Ett IFC-element

Överst i panelen {{ui:Properties}} visas elementets typ utan prefixet ”Ifc” (till exempel ”Door”, ”WallStandardCase”, ”FurnishingElement”) och dess namn, eller ”Onamngivet”.

| Fält | Betydelse | Redigerbart |
|---|---|---|
| Name | Elementets namn, ofta familje- och typnamnet från exportören | Ja |
| Type | Namnet på elementets typ, när det har en | Nej |
| Object type | En fritextbeskrivning av typen, som vissa exportörer fyller i | Ja |
| Tag | Elementets tagg eller märkning; många exportörer skriver elementets ID här | Ja |
| Description | Fritext | Ja |
| GlobalId | Elementets permanenta 22-teckens IFC-identifierare, densamma i varje export av samma element | Nej |
| Line | Elementets radnummer (`#1234`) i denna IFC-fil. Det ändras mellan exporter | Nej |

Nedanför följer **egenskapsuppsättningarna**, sorterade efter namn:

- Varje uppsättning öppnas och stängs när du klickar på dess namn. De tre första är öppna.
- En uppsättning märkt ”(type)” hör till elementets typ: ”Typegenskap: en ändring här gäller för varje element av denna typ.”
- Mängduppsättningar (längder, areor, volymer, antal, vikter) är skrivskyddade.
- Listor och uppräknade värden visas, skrivskyddade.
- Ja/Nej-värden visas som **Ja** eller **Nej**.
- Tal avrundas till fyra decimaler i visningen. Längder (en längdegenskap eller en mängds längd) visas i den {{ui:Units}} som valts i verktygsfältet, med enheten bredvid, och du kan skriva ett nytt värde i den enheten eller med en annan enhetsbeteckning (2.4 m, 8'-0"). BimCraft skriver tillbaka filens egna tal. Andra tal visas som filen har dem.
- Ett tomt värde visas som *tomt*. Ett redigerat värde står med fet stil och en blå linje bredvid.

## Kopiera ett värde

Varje värde i {{ui:Properties}} har en liten kopieringsknapp bredvid: klicka på den för att lägga värdet på urklippet exakt så som det visas, till exempel ett GlobalId, ett serienummer eller ett egenskapsvärde. Kopiering startar aldrig en redigering.

Överst kopierar {{ui:Copy all}} alla värden för elementet som text, uppsättning för uppsättning, och {{ui:Copy as CSV}} kopierar dem som rader med grupp, egenskap och värde, att klistra in i ett kalkylblad. Tomma värden behålls, så att varje fält får en rad. Detta fungerar likadant för ett element i en annan öppen modell; när mer än en modell är öppen börjar CSV:n med en kolumn Model som anger dess fil.

## Filpanelen (IFC)

| Fält | Betydelse |
|---|---|
| File, Size | Filen du öppnade |
| Schema | IFC-versionen, till exempel IFC2X3 eller IFC4 |
| Project | Projektets namn och långa namn |
| Phase | Projektfasen, om exportören skrev en |
| Exported from | Exportprogrammet, från filhuvudet |
| Author | Författaren i filhuvudet |
| Exported | Datum och tid i filhuvudet |
| Elements | Hur många element med en form ritades |
| Triangles | Hur många trianglar deras former består av; ett mått på hur tung modellen är |

## Filpanelen (projekt- och familjefiler)

| Fält | Betydelse |
|---|---|
| Kind | Project, Project template, Family eller Family template |
| Saved in | Utgåvan som senast sparade filen |
| Build | Det exakta byggnumret för den utgåvan |
| Read | Hur mycket av filen BimCraft läste, av dess storlek |

## Ritningspanelen (DWG och DXF)

| Fält | Betydelse |
|---|---|
| Format | Utgåvan ritningen sparades som, med dess formatkod, till exempel AC1032 |
| Units | Ritningens infogningsenheter, när de är angivna |
| Entities | Hur många objekt som lästes |
| Layers | Hur många lager |
| Sheets | Hur många blad (layouter), eller None |
| Linked drawings | Hur många av dess länkade ritningar som hittades och lästes in |
| Equipment | Hur många märkta utrustningsartiklar som finns på blad |

## Mappanelen

| Fält | Betydelse |
|---|---|
| Folder, Files, Size | Mappen du öppnade, hur många filer den innehåller och deras totala storlek |
| Models | Projekt- och familjefiler, där varje säkerhetskopia räknas en gång |
| CAD drawings, IFC models | Hur många av varje |
| Problems | Hur många modellkopior som är ofullständiga eller oläsbara, eller None |
