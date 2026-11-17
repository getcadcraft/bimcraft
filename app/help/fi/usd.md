---
title: Vie malli USD-muodossa
summary: Kirjoita avoimet IFC-mallit USD-muotoon renderöintiä, kohtauskokoonpanoa ja muita 3D-ohjelmia varten, jokaisen elementin IFC-luokka, GlobalId ja ominaisuudet mukana.
keywords: usd, usda, usdc, usdz, openusd, vienti, ifc, globalid, ominaisuudet, kerrokset, erikoisalat, kohtauskokoonpano, archviz, renderöinti
from: 2be5f7b8
---

{{ui:USD}} työkalurivillä kirjoittaa kaiken, mikä on auki (jokaisen mallin, yhdistetyt mallit sijoitettuina), yhdeksi USD-tiedostoksi.

## Vienti

1. Valitse työkalurivillä {{ui:USD}}.
2. Valitse {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} tai {{ui:Package (.usdz)}}.
3. Tiedosto ladataan. Tilarivi kertoo, kuinka monta elementtiä siihen meni.

## Mitä tiedostossa on

| IFC-mallissa | USD-tiedostossa |
|---|---|
| Alue, rakennus, kerrokset | Sisäkkäiset ryhmät, kerrokset korkeusjärjestyksessä |
| Jokainen elementti | Yksi primitiivi sen kerroksen ja erikoisalan alla (Arkkitehtuuri, Rakenne, MEP, Kalusteet, Alue, Tilat, Muu), geometria verkkona |
| Luokka, GlobalId, nimi, tyyppi, tunniste | Attribuutit nimeltään `ifc:class`, `ifc:globalId`, `ifc:name` ja niin edelleen |
| Ominaisuus- ja määräjoukot | Yksi attribuutti per ominaisuus; pituudet, pinta-alat ja tilavuudet metreinä, neliömetreinä ja kuutiometreinä |
| Värit | Materiaalit (läpinäkyvyys mukana) |
| Tilat | Säilytetään, merkitty apuelementeiksi, jotta renderöijät ohittavat ne |

Geometria on IFC-tiedoston omissa koordinaateissa. Asettelu noudattaa kirjoitettuja CadCraft-USD-käytäntöjä rakennuksille.
