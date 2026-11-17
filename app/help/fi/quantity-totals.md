---
title: Laske määrät yhteen, luettele elementit ja tee tilataulukko
summary: Laske elementit ja summaa niiden pituudet, pinta-alat, tilavuudet tai mikä tahansa lukuominaisuus, ryhmiteltynä minkä tahansa ominaisuuden mukaan; luettele yksi rivi per elementti; tai tee tiloista taulukko pinta-aloineen ja tilavuuksineen. Kukin lataa CSV-tiedostona.
keywords: määrä, määrät, määrälaskenta, summat, summa, taulukko, määräluettelo, boq, qto, csv, ryhmittele, laske, pituus, pinta-ala, tilavuus, tilat, huoneet, huonetaulukko, pinta-alataulukko, elementtiluettelo
from: e2e7210c
---

## Mitä teet

Hae mallista summia: seinien pituudet kerroksittain, ovien lukumäärät tyypeittäin, laatan tilavuus materiaalin mukaan ja jokaisen vyöhykkeen hinta.

## Vaiheet

1. Avaa IFC-malli.
2. Avaa {{ui:Määrät yhteensä}} vasemmalla paneelissa.
3. Valitse {{ui:Laske}}-kohdassa {{ui:Kaikki rakennusosat}} tai vain valitut.
4. Valitse {{ui:Ryhmittele}}-kohdassa ominaisuus, kuten {{ui:Luokka}}. Napsauta {{ui:Lisää ryhmä}} jakaaksesi edelleen, enintään kolmella tasolla, esimerkiksi {{ui:Kerros}}-kohdan mukaan.
5. Valitse {{ui:Laske yhteen}}-kohdassa luvut, jotka lasketaan yhteen. Mallin määräjoukot ovat valittuina alussa.
6. Napsauta {{ui:Lataa CSV}} avataksesi taulukon taulukkolaskentaohjelmassa.

## Mitä pitäisi näkyä

- Rivi per ryhmä, jossa on kuinka monta elementtiä siinä on ja kukin summa, sekä yhteisrivi.
- Elementit ilman arvoa lasketaan mukaan, mutta ne eivät lisää mitään. Silloin CSV lisää summan viereen sarakkeen "jätetty pois", jotta näet kuinka monta.
- Luvut ovat tiedoston omissa yksiköissä sellaisina kuin tiedosto ne tallentaa, usein pituuksina millimetreinä.

## Yksi rivi per elementti tai tilat

Vaihda {{ui:Näytä}}-kohtaa:

- **Yksi rivi per elementti**: jokainen elementti omalla rivillään, ominaisuudet {{ui:Sarakkeet}}-kohdassa ja luvut {{ui:Laske yhteen}}-kohdassa. CSV alkaa kunkin elementin GlobalId:llä. Napsauta rivin ensimmäistä arvoa valitaksesi kyseisen elementin.
- **Tilat**: jokainen huone numeroineen, nimineen, kerroksineen, pinta-alaineen ja tilavuuksineen sekä niiden summat. Pinta-alat ja tilavuudet tulevat tilan määristä sellaisina kuin tiedosto ne ilmoittaa. Kun tiedostossa niitä ei ole, ne mitataan tilan muodosta m² ja m³ -yksiköissä ja näytetään kursiivilla; CSV kertoo, mikä on mitä.

## Seuraavaksi

- [Etsi elementtejä luokan, nimen tai ominaisuuden mukaan](topic:find)
- [Väritä elementit ominaisuuden mukaan](topic:color-by-property)

## Infrastruktuuri (IFC 4.3)

Valitse **Infrastruktuuri (IFC 4.3)** näkymälistasta nähdäksesi tiet, rautatiet, sillat ja merirakenteet summattuina luokittain ja tyypeittäin, pituus, pinta-ala ja tilavuus sellaisina kuin tiedosto ne itse ilmoittaa. Määrää, jota tiedosto ei ilmoita, ei täytetä, eikä sitä koskaan lasketa. **Lähetä infrastruktuurin määrät TakeoffCraftiin** tallentaa `.quantities.json`-tiedoston, jonka TakeoffCraft avaa tyypitettyinä määrinä.
