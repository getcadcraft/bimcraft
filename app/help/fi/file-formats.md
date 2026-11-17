---
title: Mitä BimCraft lukee kustakin tiedostomuodosta
summary: Tarkalleen, mitä BimCraft lukee IFC-, projekti- ja perhetiedostoista sekä DWG- ja DXF-tiedostoista, ja mitä se jättää koskematta.
keywords: tiedostomuodot, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versiot, yhteensopivuus, mitä luetaan
from: 9b8dfb4f
---

## IFC

| Luetaan | Tiedot |
|---|---|
| Geometria | Jokainen elementti, jolla on muoto, väritettynä tiedoston mukaan. Huoneet ja tilat piirretään läpinäkyvinä ja aluksi piilotettuina |
| Kerrokset | Rakennuskerrokset korkeusjärjestyksessä ja se, mitkä elementit kullakin on. Kerroksettomat elementit ryhmitellään kohtaan "Ei kerrosta" |
| Elementtien määrät | Kunkin lajin elementtien määrä (seinät, ovet, laatat ja niin edelleen), näkyy kohdassa {{ui:Elements}} |
| Hankkeen tiedot | Hankkeen nimi, pitkä nimi ja vaihe; skeema; tiedoston otsikosta vientiohjelma, tekijä ja vientipäivä |
| Elementin tiedot | Nimi, tyyppi, objektityyppi, tunniste, kuvaus, GlobalId; jokainen ominaisuusjoukko ja määrien joukko elementillä ja sen tyypillä |

Muokattavissa: nimi, objektityyppi, tunniste, kuvaus ja yksittäiset ominaisuusarvot. Tallennetaan uutena IFC-tiedostona. IFC2X3-, IFC4- ja IFC4X3-skeemat avautuvat. Ne luetaan BimCraft-ohjelman omalla IFC-moottorilla. Kaikki, mitä se ei vielä osaa piirtää, luetellaan kohdassa **Ei vielä piirretty** {{ui:File}}-paneelissa. Malli siirretään avattaessa origoon, joten kauas siitä sijoitettu malli näkyy silti ruudun keskellä. `.ifczip` ja `.ifcxml` eivät avaudu.

## Projekti- ja perhetiedostot

`.rvt`-projektit, `.rte`-projektimallit, `.rfa`-perheet ja `.rft`-perhemallit.

| Luetaan | Tiedot |
|---|---|
| Tiedoston tiedot | Julkaisu ja koontiversio, yhteiskäyttö, keskusmallin polku, viimeksi tallennettu polku, käyttäjän nimi, kieliasetus, asiakirjan GUID |
| Projektin tiedot | Projektin omat kentät (nimi, numero, asiakas, osoite, tila ja niin edelleen), ilman uuden projektin oletuksia |
| Perheen tiedot | Perheen nimi, luokka, julkaisu, viimeisin päivitys ja sen parametrit ryhmittäin |
| Linkit | Luettelo linkitetyistä malleista, CAD-linkeistä, kuvista ja avainsanataulukoista, joihin tiedosto viittaa |
| Esikatselukuva | Tiedostoon tallennettu pikkukuva |

Ei luettu: 3D-malli, elementit, näkymät, arkit ja luettelot. Ne on tallennettu dokumentoimattomaan muotoon. BimCraft lukee kustakin tiedostosta vain muutamia kymmeniä kilotavuja, joten tiedoston koolla on vain vähän merkitystä.

## .pln-, .pla-, .tpl- ja .bpn-projektitiedostot

Ei vielä luettu: BimCraft kertoo siitä, kun avaat sellaisen. Vie malli IFC-muodossa ja piirustukset DWG-muodossa: katso [Avaa .pln- ja .pla-projektitiedostot](topic:pln-project-files).

## DWG ja DXF

| Luetaan | Tiedot |
|---|---|
| Tilat | Mallitila ja jokainen arkki (asettelu) välilehtijärjestyksessä |
| Näkymäruudut | Kunkin arkin näkymäruudut mittakaavoineen, kiertoineen ja jäädytettyine tasoineen |
| Tasot | Nimi, väri, päällä/pois, jäädytys, tulostuslippu ja viivanpaksuus |
| Kohteet | Viivat, murtoviivat, kaaret, ympyrät, ellipsit, splinet, viivoitukset ja täytöt, teksti ja monirivinen teksti, lohkot ja attribuutit, mitoitukset, viitenuolet ja monitasoviitenuolet, taulukot, pisteet, kuvat |
| Linkitetyt piirustukset | Piirretään niihin kohtiin, joihin ne on lisätty, kun niiden tiedostot löytyvät |
| Kuvat | Piirretään kuvatiedostoista, kun ne löytyvät (PNG, JPEG, GIF, BMP, WebP; ei TIFF) |
| Laitetunnisteet | Keittiölaitteiden nimiketunnisteet (`KCL-ITEM`-attribuutit), laiteluetteloa varten |

Muu lasketaan kohtaan **Ei vielä piirretty**, eikä sitä koskaan arvata. Tarkistetut DWG-versiot ovat AutoCAD 2000–2018. R13- ja R14-tiedostot hyväksytään myös, mutta niitä ei ollut testiaineistossa. Vanhemmat DWG-tiedostot eivät avaudu. {{ui:Drawing}}-paneeli näyttää muotokoodin (esimerkiksi AC1032). Kaikki DXF-versiot avautuvat, myös R12. Molemmat luetaan BimCraft-ohjelman omilla lukijoilla tässä välilehdessä. Mitään ei tallenneta takaisin DWG- tai DXF-muotoon.

## Kansiossa

| Laji | Päätteet | Raportissa |
|---|---|---|
| Mallit | `.rvt` `.rfa` `.rte` `.rft` | Ryhmiteltynä numeroitujen varmuuskopioiden kanssa, tarkistettu kunto, kortti luettu, linkit tarkistettu |
| IFC | `.ifc` | Luetteloitu; avautuu 3D-näkymään |
| CAD | `.dwg` `.dxf` `.dgn` | Luetteloitu mallien kanssa, jotka linkittävät ne. DWG ja DXF avautuvat 2D-näkymään, DGN ei avaudu |
| Jäämät | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Luetteloitu kohdassa **Sivuun** |
| Ylläpitokansiot | `*_backup`, `*_log`, `Revit_temp`, piilotetut kansiot | Luetteloitu kohdassa **Sivuun**, ei luettu |

Katso [Kansioraportti: roolit, tilat ja linkit](topic:folder-roles).
