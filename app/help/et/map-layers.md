---
title: Kaart maapinnal mudeli all
summary: Aseta tänavakaart või õhupilt georefereeritud IFC-mudeli alla maapinnale, kaardiplaatidest, kaarditeenustest või pildist koos maailmafailiga.
keywords: kaart, kaardikihid, taustakaart, õhufoto, satelliit, asukoht, maapind, plaadid, xyz, wms, wmts, kaarditeenus, maailmafail, georeferentseerimine, ifcmapconversion, projitseeritud CRS, epsg, asukohakontekst
from: 84e2e9df
---

## Mida sa teed

Vaata mudelit selle kohas: koha tänavakaart või õhupilt maapinnal selle all.

## Sammud

1. Ava IFC-mudel, mis kannab oma kohta kaardil (kaarditeisendus, IfcMapConversion, projitseeritud koordinaatsüsteemiga). Eksportijad kirjutavad selle, kui projekti koordinaadid (mõõdistuspunkt, jagatud koordinaadid) on seatud.
2. Vali {{ui:Näita}} › {{ui:Kaardikihid…}}. Dialoog ütleb mudeli süsteemi, näiteks EPSG:28356. Mudel ilma kaarditeisenduseta ei saa kaardikihte: dialoog ütleb seda.
3. Lülita sisse {{ui:Kaardikihid internetist}}. Seni ei küsita midagi ühelt serverilt; kui see on sisse lülitatud, näevad sinu lisatud serverid mudeli ümbrust ja sinu internetiaadressi, mitte kunagi sinu mudelit.
4. Jaotises {{ui:Lisa kiht}} vali plaadid (aadress koos `{z}`, `{x}` ja `{y}`), WMS-, WMTS- või ArcGIS-teenus ({{ui:Hangi kihid}}, siis vali üks) või pilt koos selle maailmafailiga.
5. Sulge dialoog. Kaart lebab maapinnal vahetult mudeli madalaima punkti all, mudeli jalajälje kohal ja sama palju kaugemal ümber.

:::note
Kaart on ainult ekraanil; seda ei salvestata IFC-faili. Kihtide loend on hoitud selles brauseris. Kasuta ainult selliseid kaarditeenuseid, mille tingimused seda lubavad.
:::
