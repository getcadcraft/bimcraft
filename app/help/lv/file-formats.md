---
title: Ko BimCraft nolasa no katra formāta
summary: Tieši ko BimCraft nolasa no IFC, projekta un ģimeņu failiem, DWG un DXF, un ko tas neaiztiek.
keywords: formāti, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versijas, saderība, ko nolasa
from: 9b8dfb4f
---

## IFC

| Nolasa | Sīkāk |
|---|---|
| Ģeometrija | Katrs elements ar formu, krāsots tā, kā saka fails. Telpas un spraudziņi tiek zīmēti caurspīdīgi un sākumā paslēpti |
| Stāvi | Ēkas stāvi augstuma secībā un tas, kuri elementi atrodas uz katra. Elementi bez stāva tiek grupēti kā "Nav stāvā" |
| Elementu skaits | Cik elementu katra veida (sienas, durvis, pārsegi…), rādīts {{ui:Elements}} |
| Projekta fakti | Projekta nosaukums, garais nosaukums un fāze; shēma; eksportējošā programma, autors un eksporta datums no faila galvenes |
| Elementa dati | Nosaukums, tips, objekta tips, marķējums, apraksts, GlobalId; katra rekvizītu kopa un daudzumu kopa uz elementa un uz tā tipa |

Rediģējami: nosaukums, objekta tips, marķējums, apraksts un atsevišķas rekvizītu vērtības. Saglabā kā jaunu IFC failu. Shēmas IFC2X3, IFC4 un IFC4X3 atveras un tiek nolasītas ar BimCraft pašu IFC dzinēju; viss, ko tas vēl nevar uzzīmēt, tiek uzskaitīts zem **Vēl nav uzzīmēts** panelī {{ui:File}}. Modelis, atverot, tiek pārvietots uz sākumpunktu, tāpēc modelis, kas novietots tālu no tā, joprojām rādās ekrāna vidū. `.ifczip` un `.ifcxml` netiek atvērti.

## Projektu un ģimeņu faili

`.rvt` projekti, `.rte` projektu sagataves, `.rfa` ģimenes un `.rft` ģimeņu sagataves.

| Nolasa | Sīkāk |
|---|---|
| Faila informācija | Izlaidums un versija, kopīgais darbs, centrālā modeļa ceļš, pēdējās saglabāšanas ceļš, lietotāja vārds, lokalizācija, dokumenta GUID |
| Projekta informācija | Projekta paša lauki (nosaukums, numurs, klients, adrese, statuss…), bez jaunu projektu noklusējumiem |
| Ģimenes informācija | Ģimenes nosaukums, kategorija, izlaidums, pēdējais atjauninājums un tās parametri pēc grupām |
| Saites | Saistīto modeļu, CAD saišu, attēlu un atslēgvārdu tabulu saraksts, uz ko fails norāda |
| Priekšskatījuma attēls | Miniatūra, kas saglabāta failā |

Nav nolasīts: 3D modelis, elementi, skati, lapas un specifikācijas. Tie tiek glabāti nedokumentētā formātā. BimCraft nolasa tikai dažus desmitus kilobaitu no katra faila, tāpēc faila izmēram gandrīz nav nozīmes.

## .pln, .pla, .tpl un .bpn projektu faili

Vēl nav nolasīti: BimCraft to norāda, kad jūs tos atverat. Eksportējiet modeli IFC formātā un zīmējumus DWG formātā; skatiet [Atvērt .pln un .pla projektu failus](topic:pln-project-files).

## DWG un DXF

| Nolasa | Sīkāk |
|---|---|
| Telpas | Modeļa telpa un katra lapa (izkārtojums) cilnes secībā |
| Skati | Katras lapas skatu logi ar to mērogu, pagriezumu un iesaldētiem slāņiem |
| Slāņi | Nosaukums, krāsa, ieslēgts/izslēgts, iesaldēts, drukāšanas karogs un līnijas biezums |
| Objekti | Līnijas, polilīnijas, loki, riņķi, elipses, splainas, svītrojumi un cietie ķermeņi, teksts un vairākrindu teksts, bloki un atribūti, izmēri, izvadlīnijas un daudzizvadlīnijas, tabulas, punkti, attēli |
| Saistītie zīmējumi | Zīmēti tur, kur ievietoti, kad to faili ir atrasti |
| Attēli | Zīmēti no attēlu failiem, kad tie ir atrasti (PNG, JPEG, GIF, BMP, WebP; ne TIFF) |
| Iekārtu marķējumi | Ēdināšanas iekārtu pozīciju marķējumi (`KCL-ITEM` atribūti) iekārtu specifikācijai |

Viss pārējais tiek uzskaitīts zem **Vēl nav uzzīmēts** un nekad netiek minēts. DWG formāti no AutoCAD 2000 līdz 2018 ir tie, kas pārbaudīti (R13 un R14 faili arī tiek pieņemti, bet neviens nebija testu kopā; vecāki DWG neatveras). Panelis {{ui:Drawing}} rāda formāta kodu, piemēram, AC1032. DXF faili visās versijās atveras, arī R12. Abus nolasa BimCraft pašu lasītāji šajā cilnē. Nekas netiek saglabāts atpakaļ DWG vai DXF.

## Mapē

| Veids | Paplašinājumi | Pārskatā |
|---|---|---|
| Modeļi | `.rvt` `.rfa` `.rte` `.rft` | Grupēti ar numurētām dublējumu kopijām, pārbaudīta veselība, nolasīta kartīte, pārbaudītas saites |
| IFC | `.ifc` | Uzskaitīts; atveras 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Uzskaitīti kopā ar modeļiem, kas tos saista; DWG un DXF atveras 2D, DGN neatveras |
| Atlikumi | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Uzskaitīti zem **Atlikts malā** |
| Uzkopšanas mapes | `*_backup`, `*_log`, `Revit_temp`, paslēptās mapes | Uzskaitītas zem **Atlikts malā**, nav nolasītas |

Skatiet [Mapes pārskats: lomas, statusi un saites](topic:folder-roles).
