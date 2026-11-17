---
title: Krundi maapind, hoone platvorm ja sillutis
summary: Too maapind mudelisse mõõdistuspunktidest, samakõrgusjoontest, LAS- / LAZ-skaneeringust, GeoTIFF-ist, LandXML-pinnast (CivilCraft'i oma) või mõnest kõrgusmärgist; lõika maja hoone platvorm sisse koos kalletega ning lõikega / täitega; aseta sõiduteed, kõnniteed ja terrassid maapinnale; anna see CivilCraftile LandXML-ina.
keywords: maapind, krunt, asukoht, topograafia, mõõdistus, punktid, PNEZD, samakõrgusjooned, LAS, LAZ, LiDAR, GeoTIFF, DEM, kõrgus, kõrgusmärk, kalle, planeerimine, hoone platvorm, lõige, täide, pinnasetööd, päevavalgus, kalle, sõiduteed, kõnnitee, terrass, sillutis, LandXML, CivilCraft
from: 208298d6
---

## Mida sa teed

Pane maja oma asukohta. Maapind saab osaks mudelist: seda näidatakse 3D-vaates, lõigetes ja vaadetes ning plaanil on samakõrgusjooned. Maja all lõigatakse sisse hoone platvorm, sõiduteed ja kõnniteed järgivad seda ning vundamendid laskuvad koos sellega.

## Too maapind sisse

1. Ava {{ui:Build}} ja vali {{ui:Terrain}}.
2. Kas:
   - **Ava mõõdistusfail…**: mõõdistuspunktid (PNEZD, PENZD või lihtsalt x, y, kõrgus; eraldatud komaga, tabeldusmärgiga või tühikuga), samakõrgusjooned DXF- või DWG-failis (polüjooned oma kõrgusel, 3D-polüjooned), LAS- või LAZ-skaneering (maapinna punktid säilivad, hõredamaks muudetud umbes ühele ruutmeetrile), GeoTIFF või ASCII-kõrgusruudustik või **LandXML**-pind, nagu CivilCraft eksportib (selle enda punktid ja kolmnurgad säilivad; kui failis on mitu pinda, küsib BimCraft, milline on maapind; ühikud võetakse failist). Vali enne faili ühikud (LandXML määrab need ise).
   - Või sisesta **Kõrgusmärk** (see on mõõdetud selle korruse põrandast, nii et `-1'` on jalg sellest allpool) ja klõpsa plaanil märkidele, muuda kõrgust ja klõpsa veel, seejärel **Koosta maapind**. Alguseks piisab kolmest märgist.

Mõõdistuskoordinaadid, mis on mudelist kaugel (riigi koordinaatsüsteem, UTM), nihutatakse majale ja kõrgused seatakse nii, et maapind maja juures on umbes 8" esimesest korrusest allpool. **Tõsta maapinda** jaotises **Omadused** parandab selle mistahes väärtuseni.

## Hoone platvorm

1. Vali {{ui:Building pad}}.
2. Määra **Varu** ümber maja, kui kaugel **platvorm asub põranda all** (8" plaadi all, krüpt-ruumi all rohkem) ja **Kalded** olemasoleva maapinnani (`2:1` = kaks jalga väljas iga jala kohta üles või alla).
3. Klõpsa majas sisepunkti.

Maapind tasandatakse maja all ja varu ulatuses, seejärel kaldub see üles mäenõlvani (lõige) ja alla madalale poolele (täide), kuni see kohtub olemasoleva maapinnaga. Maapinna ja platvormi **Omadused** annavad lõike ja täite mahud. Kui seinu liigutad, liigub platvorm kaasa.

## Sõiduteed, kõnniteed ja terrassid

Vali {{ui:Paving}}, vali **Kõnnitee**, **Sõiduteed** või **Terrass** ja klõpsa nurki. Klõpsa esimest nurka uuesti, topeltklõps või {{key:Enter}} lõpetab. Sillutis järgib valmis planeeritud pinda; selle tüüpi või paksust muudad jaotises **Omadused**.

## Vundamendid järgivad pinda

Kui maapind on mudelis, järgivad seinavundamendid ja krüpt-ruumi vundamendid seda: iga seina ääres jääb vundament ümbritseva maapinna all oma sügavusele, astudes terve 8" sammudena seal, kus maapind langeb (vt [Vundamendid seinte all](topic:foundations)).

## Anna CivilCraftile

**LandXML CivilCraftile** (maapinna real või maapinna **Omadustes**) laadib olemasoleva maapinna ja valmis planeeritud pinna alla LandXML-failina. Ava see CivilCraftis tõeliseks planeerimiseks, drenaažiks ja pinnasetöödeks.

## Hea teada

- Maapind vajab IFC4-mudelit, nagu iga uus hoone.
- Samakõrgusjooned näidatakse maapinna tasandi plaanil intervalliga, mis on määratud maapinna **Omadustes**; iga viies on paksem.
- Maapind salvestatakse IFC maapinnaelemendina (suletud kolmnurkpind, nii et lõiked seda lõikavad); platvorm ja sillutis salvestatakse koos sellega. Maapinna kustutamisel algad uuesti — selle platvorm ja sillutis kaovad koos sellega.
