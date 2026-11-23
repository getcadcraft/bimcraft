---
title: Tuo omat kohteet ja perhetiedostot Kirjastoon
summary: Lue perhetiedostoja (.rfa) sekä IFC-, DWG-, DXF-, glTF- tai OBJ-tiedostoja Kirjasto-välilehdellä, sijoita ne kuten mitä tahansa kirjastokohdetta ja säilytä ne Omissa kohteissa, yksityisessä luettelossa, jonka vain sinä näet.
keywords: rfa, perhe, perheet, perhekirjasto, omat kohteet, yksityinen luettelo, yksityiset kohteet, yksityinen kirjasto, tuo kohteet, valmistajan sisältö, BIM-kohteet, ifc-kohde, gltf, obj, dwg-lohko, säilytä, vaihda, siirrä
from: 886261f8
---

## Mitä teet

Tuo jo olemassa olevat kohteet BimCraftiin: Revitin perhekirjasto, valmistajan IFC- tai DWG-lataus tai verkko toisesta mallinnusohjelmasta. Luet tiedoston {{ui:Kirjasto}}-välilehdellä, sijoitat kohteen malliisi kunnollisena IFC-elementtinä ja, jos haluat sen myöhemmin uudelleen, säilytät sen kohdassa {{ui:Omat kohteet}}.

## Vaiheet

1. Avaa IFC-malli tai aloita uusi rakennus.
2. Napsauta {{ui:Kirjasto}}-välilehteä, joka on {{ui:Ominaisuudet}}-välilehden vieressä.
3. Napsauta {{ui:Tiedostot…}}, sitten {{ui:Valitse tiedosto…}}. Valitse yksi tai useampi tiedosto kerralla: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` tai `.csv`. Tai napsauta {{ui:Valitse kansio…}} lukeaksesi koko kansion ja sen alikansiot (enintään 200 tiedostoa kerralla).
4. Napsauta korttia nähdäksesi, mitä luettiin: pohjakuvan esikatselun, nimen, valmistajan ja mallin, koot ja muistiinpanot.
5. Napsauta {{ui:Sijoita pohjakuvaan}} tai {{ui:Sijoita malliin}} sijoittaaksesi kohteen.
6. Käytä sitä uudelleen muissa projekteissa napsauttamalla {{ui:Säilytä omissa kohteissa}}. Kun useita tiedostoja on luettu, {{ui:Säilytä kaikki omissa kohteissa}} säilyttää ne kerralla.
7. Myöhemmin löydät ne napsauttamalla Kirjasto-välilehdellä {{ui:Omat kohteet}}-kohtaa. Niitä sijoitetaan, vaihdetaan ja päivitetään kuten mitä tahansa kirjastokohdetta.

Tiedostot luetaan tässä välilehdessä. Mitään ei lähetetä ennen kuin valitset {{ui:Säilytä omissa kohteissa}}.

## Mitä luetaan kustakin tiedostotyypistä

| Tiedosto | Mitä saat |
|---|---|
| IFC | Jokainen elementtityyppi kohteena oikealla 3D-muodolla, IFC-luokalla ja ominaisuusjoukoilla |
| glTF, GLB, OBJ | Yksi kohde oikealla 3D-muodolla verkkona. Aseta ensin yksiköt ja ylöspäin-suunta. |
| DWG, DXF | Jokainen lohko kohteena pohjakuvapiirroksella ja attribuuteilla |
| Perhetiedosto (`.rfa`) | Perheen nimi, luokka, valmistaja, malli, parametrit ja sen tyypit. **Ei sen 3D-muotoa:** perheen leveyden, syvyyden ja korkeuden mukainen laatikko toimii sijaisena. |
| CSV | Yksi kohde riviä kohti: nimi, koot ja tiedot, piirrettynä laatikkona |

## Perhetiedostot ja niiden 3D-muoto

`.rfa`-tiedoston sisällä oleva 3D-muoto on tallennettu dokumentoimattomassa muodossa. BimCraft lukee perheen tiedot eikä arvaa sen geometriaa. Kortti sanoo niin: ”Geometriaa ei luettu tästä perheestä; sijaisena on laatikko.”

Oikean muodon tuomiseksi vie perhe ohjelmasta, jolla se tehtiin (Revit):

1. Avaa perhe tai projekti, johon perhe on sijoitettu.
2. Valitse **Tiedosto > Vie > IFC**. Katso [vientiasetukset, jotka toimivat tässä parhaiten](topic:rvt-to-ifc).
3. Lue BimCraftissa `.ifc`-tiedosto kohdalla {{ui:Tiedostot…}}. Jokainen perhetyyppi tulee omana kohteenaan muotoineen ja ominaisuusjoukkoineen.

Monet valmistajat tarjoavat IFC- tai DWG-latauksen perhetiedoston rinnalla. Ne luetaan suoraan.

## Perhetyypit

Perhe, jossa on useita tyyppejä, tulee yhtenä kohteena valinnalla {{ui:Variantti}}, yksi variantti tyyppiä kohti. Jokaisella variantilla on tyyppien väliset erot arvoissa ja oma laatikkonsa, kun tyypillä on leveys ja syvyys. Yhden tyypin perhe on tavallinen kohde, joka täytetään kyseisen tyypin arvoilla.

Jotkin perheet säilyttävät tyyppinsä tyyppiluettelossa: samannimisessä perhetiedoston vieressä olevassa `.txt`-tiedostossa. Valitse molemmat yhdessä tai valitse kansio, jolloin luettelon rivit tulevat variantteina.

## Perheen tiedot oikealla muodolla

Jos kansiossa on perhetiedosto ja samannimisen IFC-, glTF- tai OBJ-tiedosto (`Chair.rfa` ja `Chair.ifc`), valitse molemmat yhdessä tai valitse kansio. BimCraft tekee yhden kohteen. Perhetiedosto antaa nimen, valmistajan, mallin, parametrit ja tyypit, ja toinen tiedosto antaa oikean 3D-muodon. Muistiinpanot kertovat, mistä tiedostosta muoto tuli. Yhtä muotoa käytetään kaikille tyypeille.

Jos perhetiedostoon on tallennettu kuva, kohteen tiedot näyttävät sen pohjakuvapiirroksen alla. Kuva näytetään vain siellä, eikä sitä säilytetä kohteen mukana.

## Omat kohteet

{{ui:Omat kohteet}} on oma yksityinen luettelosi Kirjastossa. Vain sinä näet, mitä siinä on: se ei ole julkisessa kirjastossa, haussa eikä tiimillesi näkyvissä. Se seuraa tiliäsi, joten samat kohteet ovat toisella tietokoneella, kun kirjaudut kirjastoon.

- Sinun täytyy olla kirjautunut kirjastoon, jotta voit säilyttää kohteen. Katso [kirjaudu kirjastoon](topic:library-credits).
- Kohteen säilyttäminen lähettää vain sen kohteen tiliisi. Siihen asti se on tietokoneellasi.
- {{ui:Poista omista kohteista}} poistaa kohteen luettelosta. Jo sijoitetut kopiot piirustuksissa säilyvät.
- Jos haluat jakaa kohteen kaikille, lähetä se julkiseen kirjastoon valitsemasi lisenssin alla.

:::note
Omat kohteet on vielä testauksessa, eikä se ehkä ole käytössä tilillesi. Jos lähde puuttuu tai siinä lukee ”Omat kohteet ei ole vielä käytössä tälle tilille”, voit silti lukea ja sijoittaa omat tiedostosi {{ui:Tiedostot…}}-toiminnolla. Ne tallennetaan mallisi sisään.
:::

## Yleisiä virheitä

- **Odotat perheen oikeaa muotoa `.rfa`-tiedostosta.** Vain sen tiedot luetaan. Vie IFC, jos tarvitset muodon.
- **Kaksi kohdetta, kun odotit yhtä.** Perhe ja sen muototiedosto yhdistyvät vain, kun nimet täsmäävät tarkasti päätettä lukuun ottamatta ja ne ovat samassa kansiossa.
- **Verkko tulee tuhat kertaa liian isona tai makaa kyljellään.** Aseta {{ui:Tiedoston yksiköt}} ja {{ui:Verkon ylöspäin-akseli}} kohdassa {{ui:Tiedostot…}} ennen tiedoston valitsemista.
- **”Ei perhetietoja” tiedostossa.** Se on projekti (`.rvt`, tallennettu toisella päätteellä) tai perhepohja, ei perhe. Katso [Lue projekti- tai perhetiedosto](topic:read-rvt-file).
- **Sisällön säilyttäminen, jota et saa tallentaa.** Jotkin maksulliset kirjastot eivät salli kopioita oman palvelunsa ulkopuolella. Tarkista ehdot sisällöstä, jota et itse tehnyt.
