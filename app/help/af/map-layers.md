---
title: 'n Kaart op die grond onder die model
summary: Lê 'n straatkaart of lugfoto op die grond onder 'n georefereerde IFC-model, uit kaartteëls, kaartdienste of 'n prent met 'n wêreldlêer.
keywords: kaart, kaartlae, basiskaart, lugfoto, satelliet, terrein, grond, teëls, xyz, wms, wmts, kaartdiens, wêreldlêer, georefereer, ifcmapconversion, geprojekteerde CRS, epsg, terreinkonteks
from: 84e2e9df
---

## Wat jy gaan doen

Sien die model in sy plek: die terrein se straatkaart of lugfoto op die grond onder dit.

## Stappe

1. Maak 'n IFC-model oop wat sy plek op die kaart dra ('n kaartomskakeling, IfcMapConversion, met 'n geprojekteerde koördinaatstelsel). Uitvoerders skryf dit wanneer die projek se koördinate (opmetingspunt, gedeelde koördinate) gestel is.
2. Kies {{ui:Wys}} › {{ui:Kaartlae…}}. Die dialoog sê die model se stelsel, byvoorbeeld EPSG:28356. 'n Model sonder 'n kaartomskakeling kan nie kaartlae hê nie: die dialoog sê so.
3. Skakel {{ui:Kaartlae van die internet}} aan. Tot dan word niks by enige bediener gevra nie. Wanneer dit aan is, sien die bedieners wat jy byvoeg die gebied rondom die model en jou internetadres, nooit jou model nie.
4. In {{ui:Voeg 'n laag by}} kies teëls ('n adres met `{z}`, `{x}` en `{y}`), 'n WMS-, WMTS- of ArcGIS-diens ({{ui:Kry lae}}, dan kies een), of 'n prent met sy wêreldlêer.
5. Maak die dialoog toe. Die kaart lê op die grond net onder die model se laagste punt, oor die model se voetspoor en nog so ver rondom.

:::note
Die kaart is net op die skerm; dit word nie in die IFC-lêer gestoor nie. Die lys van lae word in hierdie blaaier gehou. Gebruik slegs kaartdienste wie se voorwaardes dit toelaat.
:::
