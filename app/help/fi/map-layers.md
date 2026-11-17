---
title: Kartta maanpinnalla mallin alla
summary: Aseta katukartta tai ilmakuva georeferoidun IFC-mallin alle maanpinnalle karttalaatoista, karttapalveluista tai kuvasta maailmatiedoston kanssa.
keywords: kartta, karttatasot, taustakartta, ilmakuva, satelliitti, tontti, maanpinta, laatat, xyz, wms, wmts, karttapalvelu, maailmatiedosto, georeferointi, ifcmapconversion, projisoitu koordinaatisto, EPSG, paikan konteksti
from: 84e2e9df
---

## Mitä teet

Näe malli sen paikassa: kohteen katukartta tai ilmakuva maanpinnalla mallin alla.

## Vaiheet

1. Avaa IFC-malli, jolla on paikkansa kartalla (karttamuunnos, IfcMapConversion, projisoidulla koordinaatistolla). Viejät kirjoittavat sen, kun projektin koordinaatit (mittauspiste, jaetut koordinaatit) on asetettu.
2. Valitse {{ui:Näytä}} › {{ui:Karttatasot…}}. Ikkuna kertoo mallin järjestelmän, esimerkiksi EPSG:28356. Malli ilman karttamuunnosta ei voi saada karttatasoja, ja ikkuna kertoo sen.
3. Ota käyttöön {{ui:Karttatasot internetistä}}. Siihen asti mitään ei pyydetä miltään palvelimelta. Kun se on päällä, lisäämäsi palvelimet näkevät mallin ympärillä olevan alueen ja internetosoitteesi, eivät koskaan mallia.
4. Valitse kohdassa {{ui:Lisää taso}} laatat (osoite, jossa on `{z}`, `{x}` ja `{y}`), WMS-, WMTS- tai ArcGIS-palvelu ({{ui:Hae tasot}}, sitten valitse yksi) tai kuva maailmatiedostoineen.
5. Sulje ikkuna. Kartta on maanpinnalla heti mallin alimman pisteen alapuolella, mallin pohjapinnan alla ja yhtä paljon sen ympärillä.

:::note
Kartta näkyy vain näytöllä; sitä ei tallenneta IFC-tiedostoon. Tasoluettelo säilytetään tässä selaimessa. Käytä vain karttapalveluja, joiden ehdot sen sallivat.
:::
