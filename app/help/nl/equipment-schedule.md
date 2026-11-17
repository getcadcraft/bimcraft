---
title: Een apparatuurstaat maken en CSV exporteren
summary: Zet de itemlabels in een foodservice-tekening om in een apparatuurstaat, filter die, ga naar elk item op zijn blad, en download hem als CSV.
keywords: apparatuur, staat, foodservice, keuken, itemlabels, kcl, attributen, bom, stuklijst, csv, spreadsheet, export, gegevensextractie
from: e3faa1c8
---

## Wat u gaat doen

Lees de apparatuurlijst uit een keuken- of foodservice-tekening, controleer die, zoek elk item op het plan, en download hem als spreadsheetbestand.

Dit werkt bij tekeningen waarvan de apparatuurlabels hun gegevens als blokattributen dragen, zoals bij keukenontwerpbibliotheken als KCL: elk label bevat het itemnummer (`KCL-ITEM`), het aantal, de categorie, de fabrikant, het model, de elektrische en sanitaire gegevens, en opmerkingen. Andere tekeningen hebben geen tabblad {{ui:Apparatuur}}.

## Stappen

1. Open de tekening, bij voorkeur vanuit de projectmap, zodat de gekoppelde tekeningen ook laden.
2. Klik op het tabblad {{ui:Apparatuur}} boven de tekening. Het label toont hoeveel items op bladen staan, bijvoorbeeld "Apparatuur (88)".
3. Lees de staat: **Item**, **Aantal**, **Apparatuur**, **Fabrikant**, **Model**, **Elektrisch**, **Sanitair** en **Waar**.
4. Kies wat u wilt tonen in het menu boven de tabel: **Elk blad**, één blad, **Op geen enkel blad** of **Alles gelabeld in de tekening**. Elke keuze toont het aantal.
5. Typ in het filterveld ("Filter: categorie, fabrikant, model…") om de lijst te beperken, bijvoorbeeld `koelkast` of `208`.
6. Klik op de bladnaam van een item in de kolom **Waar**.
7. Kijk naar de tekening: BimCraft schakelt naar dat blad, zoomt in op het item en tekent er een cirkel omheen. De statusregel zegt "Item *n*, *categorie* is omcirkeld op *blad*."
8. Klik op {{ui:Apparatuur}} om terug te gaan naar de staat.
9. Klik op {{ui:CSV downloaden}}.

## Wat u moet zien

- Een bestand genaamd "*tekeningnaam* equipment.csv" (met de naam van het blad tussen haakjes als u één blad koos) in uw downloadmap. Het opent in Excel, Numbers, LibreOffice of Google Sheets.
- De statusregel: "*bestandsnaam* gedownload (*n* items)."

De CSV heeft deze kolommen: Item, Aantal, Categorie, Fabrikant, Model, Elektrisch, Sanitair, Opmerkingen, Elektrische opmerkingen, Sanitaire opmerkingen, Bladen, Geplaatst (aantal labels). Hij downloadt precies de rijen die de tabel toont, na het menu en het filter.

## Hoe de staat is opgebouwd

- Hij wordt gelezen uit de **labels zelf**, niet uit de staattabel die op het blad getekend is. De notitie boven de tabel zegt hoeveel labels zijn gelezen.
- Eén rij is één itemnummer met één set gegevens. De hoeveelheid is de **som** van de labels, zoals een afgedrukte staat die telt: schappen met "5" op de ene plek en "3" op de andere zijn 8, getoond als "5 + 3".
- **Waar** toont de bladen die elk item tonen, bepaald uit wat de viewports van elk blad tonen, en dat is wat wordt afgedrukt. "Alleen model" betekent dat geen blad het toont.
- **Nummer twee keer gebruikt** markeert één itemnummer op twee verschillende stuks apparatuur. De rij heeft een oranje markering.
- Labels die geen blad toont, worden apart gehouden onder **Op geen enkel blad**. Ze komen vaak uit eerdere plannen of andere projecten, en worden nooit gemengd in **Elk blad**.
- **Elektrisch** toont ampère, kW, HP, volt, fase, aansluiting en stekker zoals gelabeld. **Sanitair** toont aansluitmaten: CW koud water, HW warm water, DD directe afvoer, ID indirecte afvoer, en gas. Andere labelvelden worden nog niet getoond.

## Veelgemaakte fouten

- **Geen tabblad {{ui:Apparatuur}}.** De tekening heeft geen `KCL-ITEM`-labels, of de apparatuur is zonder gegevens getekend. Er is niets om te lezen.
- **Aantallen wijken af van de afgedrukte staat.** Een afgedrukte staat kan reservenummers tonen of kortere namen gebruiken dan de labels. Vertrouw de labels voor wat er geplaatst is, en controleer verschillen met de ontwerper.
- **Het CSV-bestand toont vreemde tekens.** Het bestand is UTF-8. Open het met de importopdracht van uw spreadsheet en kies UTF-8 als het programma daarom vraagt.
- **Een cel begint met een apostrof.** Waarden die beginnen met `=`, `+`, `-` of `@` krijgen een voorafgaande `'`, zodat spreadsheets ze niet als formules uitvoeren.
- **{{key:F}} en {{key:P}} doen niets.** Ze werken op de tekening, niet op de staat. Klik eerst op een bladtab.
