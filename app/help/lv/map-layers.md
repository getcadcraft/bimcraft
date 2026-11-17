---
title: Karte zemē zem modeļa
summary: Uzklājiet ielas karti vai aerofotogrāfiju uz zemes zem georeferencēta IFC modeļa, no kartes flīzēm, kartes pakalpojumiem vai attēla ar pasaules failu.
keywords: karte, kartes slāņi, pamatkarte, aerofoto, satelīts, objekts, zeme, flīzes, xyz, wms, wmts, kartes pakalpojums, pasaules fails, georeferencēšana, ifcmapconversion, projicēta CRS, epsg, objekta konteksts
from: 84e2e9df
---

## Ko jūs darīsiet

Redziet modeli tā vietā: objekta ielas karti vai aerofotogrāfiju zemē zem tā.

## Soļi

1. Atveriet IFC modeli, kas satur savu vietu kartē (kartes pārveidojums, IfcMapConversion, ar projicētu koordinātu sistēmu). Eksportētāji to ieraksta, kad ir iestatītas projekta koordinātes (uzmērījuma punkts, kopīgās koordinātes).
2. Izvēlieties {{ui:Rādīt}} › {{ui:Kartes slāņi…}}. Dialogs parāda modeļa sistēmu, piemēram, EPSG:28356. Modelis bez kartes pārveidojuma nevar saturēt kartes slāņus: dialogs to paziņo.
3. Ieslēdziet {{ui:Kartes slāņi no interneta}}. Līdz tam nekādam serverim nekas netiek jautāts; kad tas ir ieslēgts, pievienotie serveri redz apkārtni ap modeli un jūsu interneta adresi, nekad jūsu modeli.
4. Sadaļā {{ui:Pievienot slāni}} izvēlieties flīzes (adrese ar `{z}`, `{x}` un `{y}`), WMS, WMTS vai ArcGIS pakalpojumu ({{ui:Iegūt slāņus}}, tad izvēlieties vienu) vai attēlu ar tā pasaules failu.
5. Aizveriet dialogu. Karte atrodas zemē tieši zem modeļa zemākā punkta, pāri modeļa pamatnei un tikpat tālu ap to.

:::note
Karte ir redzama tikai ekrānā; tā netiek saglabāta IFC failā. Slāņu saraksts tiek glabāts šajā pārlūkprogrammā. Izmantojiet tikai tādus kartes pakalpojumus, kuru noteikumi to atļauj.
:::
