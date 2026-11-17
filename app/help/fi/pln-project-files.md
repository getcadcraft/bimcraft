---
title: Avaa .pln- ja .pla-projektitiedostot
summary: Mitä BimCraft tekee tällä hetkellä .pln-, .pla-, .tpl- ja .bpn-tiedostoille ja miten IFC- ja DWG-tiedostot viedään niistä, jotta malli ja piirustukset avautuvat tässä.
keywords: pln, pla, tpl, bpn, projektitiedosto, arkisto, malline, varmuuskopio, ifc-vienti, dwg-vienti, muunnin, vyöhykkeet, asettelut
from: 41fb921d
---

## Mitä teet

Tuot BimCraftiin projektin, joka on tallennettu `.pln`-tiedostona (projekti), `.pla`-tiedostona (arkisto kirjastoineen), `.tpl`-tiedostona (malline) tai `.bpn`-tiedostona (varmuuskopio). Nämä ovat Archicadin omia tiedostoja.

## Mitä avautuu tällä hetkellä

- **Projektitiedostot itse eivät vielä avaudu.** Niiden muotoa ei ole julkaistu, eikä BimCraft lue sitä vielä. Kun avaat sellaisen, BimCraft kertoo tästä ja ohjaa tähän ohjeeseen.
- **BimCraft tarkistaa tiedoston ensimmäiset tavut.** Archicad-projektit versiosta 17 alkaen alkavat samalla lyhyellä tunnisteella, joten BimCraft voi varmasti todeta, että tiedosto on Archicad-projekti. Tiedosto, jolla on Archicad-tiedoston nimi mutta joka ei ala tällä tavalla, on todennäköisesti nimetty uudelleen, vioittunut tai peräisin vanhemmasta versiosta. Tunniste ei erota projektia, arkistoa ja mallinetta toisistaan.
- **IFC-vienti avautuu kokonaan**: malli 3D:nä, kerrokset, vyöhykkeet tiloina, osien tiedot, ominaisuusjoukot ja luokitukset, ja kaikki BimCraftin työkalut toimivat.
- **DWG-vienti avautuu** 2D-näkymässä kerroksineen ja asetteluineen sekä kohdassa {{ui:3D}}. Muokataksesi sitä käytä {{ui:Muokkaa CadCraftissa}}-toimintoa.

Tai tuo koko projekti yhtenä zip-tiedostona näkymineen, asetteluineen ja ominaisuusryhmineen: katso [Avaa projektipaketti](topic:open-project-bundle).

## Vie IFC (malli)

1. Avaa projekti Archicadissa.
2. Valitse **Tiedosto > Tallenna nimellä** ja valitse tiedostotyypiksi **IFC**.
3. Valitse IFC-muunnin (Archicadin nimitys IFC-vientiasetusten joukolle). **IFC4 Reference View** tai **IFC2X3 Coordination View 2.0** sopii BimCraftiin. IFC4X3 avautuu myös.
4. Valitse, mitä viedään: koko projekti tai vain ne elementit, jotka näkyvät katsomillasi kerroksilla.
5. Tallenna ja napsauta BimCraftissa {{ui:Valitse tiedosto}} ja valitse `.ifc`-tiedosto.

Tarkista nämä muuntimen asetuksista ennen vientiä:

- **Vyöhykkeet**: vie ne, jotta huoneet tulevat tiloina. Napsauta BimCraftissa {{ui:Tilat}} nähdäksesi ne.
- **Ominaisuudet ja luokitukset**: vie ne, jotta ne näkyvät {{ui:Ominaisuudet}}-paneelissa ja niitä voi käyttää {{ui:Etsi}}-, {{ui:Väri}}- ja {{ui:Määrät yhteensä}} -toiminnoissa.
- **Pelkkä `.ifc`**, ei `.ifczip` eikä `.ifcxml`. BimCraft avaa vain pelkän `.ifc`-tiedoston.

## Vie DWG (piirustukset)

1. Avaa haluamasi pohjakuva, leikkaus tai asettelu.
2. Valitse **Tiedosto > Tallenna nimellä** ja valitse tiedostotyypiksi **DWG**.
3. Valitse DXF-DWG-muunnin ja tallenna.
4. Koko arkkisarjalle tallenna asettelut Asettelukirjasta tai julkaise ne DWG-muodossa.
5. Avaa `.dwg` BimCraftissa. Viennin linkittämät piirustukset avautuvat sen mukana, kun ne ovat samassa kansiossa; katso [Linkitetyt piirustukset ja kuvat](topic:dwg-linked-files).

## Vianmääritys

- **"… on Archicad-projekti: sen ensimmäiset tavut kertovat sen."** Vie IFC tai DWG yllä kuvatulla tavalla ja avaa tuo tiedosto.
- **"… on nimetty Archicad-tiedoston mukaan, mutta ei ala samoin."** Tarkista, mistä tiedosto tuli: se voi olla toisentyyppinen tiedosto uudella nimellä (kokeile avata se oikealla tiedostopäätteellä), keskeneräinen kopio tai projekti versiosta ennen 17:ää. Avaa se Archicadissa, jos voit, ja vie sitten IFC tai DWG.
- **Malli avautuu ilman huoneita.** Vyöhykkeitä ei viety. Ota ne käyttöön IFC-muuntimessa ja vie uudelleen.
- **Aukkoja ei leikata.** BimCraft kertoo tästä kohdassa **Ei vielä piirretty** {{ui:Tiedosto}}-paneelissa. Vie uudelleen; jos ongelma jää, avaa malli ohjelmassa, joka sen teki, ja tarkista aukot siellä.
- **DWG:n teksti näyttää erilaiselta.** Vienti voi säilyttää fontteja, joita BimCraftissa ei ole; BimCraft piirtää tekstin yksinkertaisella sans-serif-fontilla.

Katso myös [Hae projektitiedosto 3D:ksi IFC:n kautta](topic:rvt-to-ifc) ja [Mitä BimCraft lukee kustakin muodosta](topic:file-formats).
