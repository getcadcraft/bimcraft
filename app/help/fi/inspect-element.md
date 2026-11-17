---
title: Valitse kohde ja lue sen ominaisuudet
summary: Napsauta mitä tahansa kohdetta 3D-mallissa korostaaksesi sen ja lukeaksesi sen nimen, tyypin, tunnisteen, GlobalId:n, ominaisuusjoukot ja määrät.
keywords: ominaisuudet, valinta, valitse, napsautus, kohde, parametrit, ominaisuusjoukot, pset, määrät, globalid, guid, tyyppi, tarkasta
from: 43b80aa8
---

Valitse kohteita IFC-mallista ja lue kaikki, mitä tiedosto niistä kertoo: attribuutit, ominaisuusjoukot, tyyppiominaisuudet ja määrät.

## Vaiheet

1. Avaa IFC-malli.
2. Napsauta kohdetta, esimerkiksi ovea. Napsauta vetämättä: yli muutaman pikselin vetäminen kiertää näkymää valitsemisen sijaan.
3. Kohde on korostettu sinisellä.
4. Oikealla on paneeli {{ui:Ominaisuudet}}. Ylhäällä ovat kohteen laji (esimerkiksi ”Door” tai ”WallStandardCase”) ja sen nimi.
5. Lue ensimmäinen lohko: **Nimi**, **Tyyppi**, **Kohdetyyppi**, **Tunniste**, **Kuvaus**, **GlobalId** ja **Rivi**.
6. Vieritä alas ominaisuusjoukkoihin. Kolme ensimmäistä ovat auki; avaa muu joukko napsauttamalla sen nimeä.
7. Napsauta toista kohdetta vaihtaaksesi siihen.
8. Paina {{key:Esc}} tai napsauta tyhjää taustaa tyhjentääksesi valinnan.

## Mitä pitäisi näkyä

- Korostettu kohde ja sen tiedot oikealla.
- Ominaisuusjoukot aakkosjärjestyksessä. Joukot, jotka tulevat kohteen **tyypiltä**, ovat nimensä perässä merkinnällä ” (tyyppi)” ja huomautuksella ”Tyyppiominaisuus: tässä tehty muutos koskee kaikkia tämän tyypin kohteita.”
- Määräjoukot (esimerkiksi pituudet, pinta-alat ja tilavuudet) luetellaan muiden joukkojen joukossa. Määrät ovat vain luettavissa.
- Muutettavat arvot näyttävät painikkeilta. [Muuta IFC-ominaisuuksia ja tallenna muokattu kopio](topic:edit-ifc-properties) näyttää, miten.

[Ominaisuuspaneelin kentät](topic:properties-panel) selittää jokaisen kentän.

## Piilotettuihin kohteisiin pääsy

1. Päästäksesi rakennuksen sisällä olevaan kohteeseen, poista valinta sen yläpuolella olevista kerroksista luettelosta {{ui:Kerrokset}}.
2. Päästäksesi huonetilavuuden takana olevaan seinään, kytke {{ui:Tilat}} pois päältä.
3. Napsauta kohdetta.

## Yleisiä virheitä

- **Vetäminen hieman napsautuksen aikana.** BimCraft käsittelee sen kiertona eikä valitse kohdetta. Pidä hiiri paikallaan.
- **Yksikköjen odottaminen lukujen vierellä.** Arvot näytetään sellaisina kuin ne ovat tiedostossa, pyöristettyinä neljään desimaaliin, ilman yksikkömerkintää. Pituudet metrisessä viennissä ovat yleensä millimetreinä tai metreinä; tarkista viejän asetukset.
- **Parametrin etsiminen tutulla nimellä.** Viejät nimeävät parametrit uudelleen ja ryhmittelevät ne IFC-ominaisuusjoukkoihin, kuten `Pset_WallCommon`. Käy läpi jokainen joukko; omat parametrit ovat usein joukossa, joka on nimetty viennin ohjelman tai yrityksen mukaan.
- **Hakukentän odottaminen.** Valitse kohde napsauttamalla; {{key:Mod}}+napsautus tai {{key:Shift}}+napsautus valitsee lisää, ja {{key:Mod+A}} valitsee kaikki näkyvät kohteet. Vasemmalla oleva luettelo {{ui:Rakennusosat}} laskee kohteet vain lajeittain; sitä ei voi napsauttaa.
- **Valitseminen tiedostokortilla.** Tiedostokortissa ei ole valittavia kohteita: ”Kohteen ominaisuudet tarvitsevat 3D-mallin. Avaa tämän tiedoston IFC-vienti nähdäksesi ne.”
