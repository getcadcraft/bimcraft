---
title: Vianmääritys
summary: BimCraft-ohjelman näyttämät viestit, niiden syyt ja toimet tiedostojen, kansioiden, 3D-mallien, piirustusten ja muokkausten avaamiseen liittyen.
keywords: ongelma, virhe, ei toimi, ei voi avata, epäonnistui, puutteellinen, vioittunut, hidas, kaatuminen, tyhjä, puuttuva, viesti, ohje
from: 1e5a79fc
---

Viestit näkyvät näyttämön alareunan tilarivillä, punaisina, kun jokin epäonnistui. Etsi viesti alta.

## Tiedostojen avaaminen

**"*name* ei ole IFC-, RVT-, RFA-, DWG- eikä DXF-tiedosto."**
BimCraft ei tunnistanut tiedostoa. Tarkista tiedostopääte ja se, ettei tiedosto ole tyhjä. PDF-, kuva- ja toimistotiedostoja ei voi avata.

**".ifczip ei ole vielä tuettu. Tallenna tai vie malli tavallisena .ifc-tiedostona."** (myös `.ifcxml`-tiedostolle)
Pura `.ifczip` (se on tavallinen zip-tiedosto, joka sisältää `.ifc`-tiedoston) tai vie tavallinen IFC.

**"… on projektitiedosto, jota BimCraft ei vielä lue."**
`.pln`-, `.pla`-, `.tpl`- tai `.bpn`-tiedosto. Vie siitä IFC tai DWG ja avaa se: katso [Avaa .pln- ja .pla-projektitiedostot](topic:pln-project-files).

**"Tätä IFC-tiedostoa ei voitu lukea."**
IFC-tiedosto on vioittunut tai ei ole oikeasti IFC. Avaa se tekstieditorissa: oikea IFC-tiedosto alkaa rivillä `ISO-10303-21;`. Vie se uudelleen.

**"Tämä tiedosto on puutteellinen: se on … MB, mutta sen oma hakemisto viittaa tietoon vähintään … MB:n kohdalla. …"**
Projekti- tai perhetiedosto katkesi kopioinnin, lähetyksen tai synkronoinnin aikana. Pilvikansion tiedosto, joka on "vain verkossa", näyttää samalta. Yksin avattu tiedosto aukeaa silti, ja kortin yläreunassa on tämä viesti sekä teksti "Näytetään palautettu sisältö; kopioi alkuperäinen uudelleen koko mallia varten.": kortissa näkyvät vain ne osat, joiden jokainen tavu on tiedostossa, ja loput luetellaan kohdassa **Ei tiedostossa**. Tee tiedostosta saatavilla offline-tilassa pilvikansiossasi tai kopioi alkuperäinen uudelleen ja avaa se. Kansiossa BimCraft näyttää sen sijaan uusimman täydellisen varmuuskopion.

**"… Tiedoston oma sisällysluettelo on myös puuttuvassa osassa, joten mitään siitä ei voi avata."**
Tiedosto katkesi niin varhain, ettei sen sisällysluetteloakaan ole. Tästä kopiosta ei voi palauttaa mitään. Kopioi alkuperäinen uudelleen ja avaa se.

**"Tässä yhdistelmätiedostossa ei ole BasicFileInfo-virtaa, joten se ei ole Revit-tiedosto."**
Tiedosto on toisenlainen yhdistelmätiedosto (vanhat toimistoasiakirjat käyttävät samaa säiliötä). Tarkista, että valitsit oikean tiedoston.

**"Vielä käsitellään edellistä…"**
BimCraft käsittelee yhä edellistä tiedostoa tai kansiota. Odota, että tilarivi valmistuu, ja yritä uudelleen.

**Tiedostovalitsin ei tarjoa tiedostoani (se on harmaana).**
Valitsin tarjoaa vain tiedostot `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` ja `.dxf`. Vedä muut tiedostot sivulle, niin BimCraft kertoo, voiko se lukea ne.

## Kansioiden avaaminen

**"Tässä kansiossa on yli 20,000 tiedostoa. Valitse pienempi kansio, esimerkiksi yksi projekti."**
Valitsit liian ylätason kansion, kuten koko aseman. Valitse yksi projektikansio.

**"Selain ei myöntänyt pääsyä kohteeseen *name*. Valitse se uudelleen kohdasta Avaa kansio."**
Napsautit viimeisimmän kansion kohdalla {{ui:Avaa uudelleen}}, ja selaimen lupa evättiin tai on vanhentunut. Valitse kansio uudelleen tai vedä se sisään.

**Selain sanoo lähettävänsä tiedostoja ("upload").**
Se on selaimen oma ilmaisu tiedostojen antamiselle sivulle. BimCraft ei lähetä niitä minnekään. Vältä kysymys vetämällä kansio sisään.

**Puhelimessa tai tabletissa ei tapahdu mitään.**
Monet mobiiliselaimet eivät voi valita kansioita. Avaa yksittäisiä tiedostoja tai käytä tietokonetta.

## IFC-moottori latautuu ensimmäisellä kerralla

**Tilarivi jää tekstiin "Käynnistetään IFC-moottoria…", tai se näyttää virheen, kuten "Failed to fetch".**
IFC-moottoria ei voitu ladata. Olet ehkä offline-tilassa, tai palomuuri tai sisällönesto estää sen.

:::offline
Olet offline-tilassa. Jos sovellusrivin painike ei sano {{ui:Offline valmis}}, IFC-moottoria ei ole koskaan tallennettu tähän selaimeen. Yhdistä uudelleen, avaa tiedosto uudelleen ja napsauta sitten {{ui:Tallenna offline-käyttöön}}, jotta se toimii offline-tilassa seuraavalla kerralla. Katso [Verkossa ja offline-tilassa](topic:online-offline).
:::

:::online
Lataa sivu uudelleen ja yritä uudelleen. Työverkossa pyydä IT-tiimiäsi sallimaan sivuston `.wasm`-tiedostot.
:::

## Tallentaminen offline-käyttöön

**Painikkeessa lukee {{ui:Tallennus ei onnistunut}}.**
Osa tiedostoista ei latautunut, yleensä yhteyden katkettua. Tarkista yhteys ja napsauta painiketta uudelleen. Aiempi offline-kopio säilyy, kunnes uusi on valmis.

**Painikkeessa lukee {{ui:Offline ei käytettävissä}}.**
Tämä ikkuna ei voi säilyttää offline-kopiota, esimerkiksi yksityisessä ikkunassa tai hallitussa työtietokoneessa. Katso [Offline-työskentely](common:offline).

**Painike pysyy hetken tekstissä "Tallennetaan *n* / *m*".**
BimCraft-ohjelman kopio on noin 11 MB, josta suurin osa on IFC-moottori. Pidä välilehti auki, kunnes siinä lukee {{ui:Offline valmis}}.

**BimCraft avautui offline-tilassa, mutta näyttää vanhentuneelta.**
Tallennettu kopio on edelliseltä käyntiltä. Kun olet verkossa, napsauta {{ui:Offline valmis}} ja valitse {{ui:Tallenna uudelleen (hae uusin versio)}}.

## 3D-näkymä

**Malli ei ole siellä, missä odotin, tai se on pieni.**
Paina {{key:F}} tai napsauta {{ui:Sovita}}. Sovita rajaa aina kaiken mallissa, myös kerrokset, jotka olet poistanut valinnasta, ja rakennuksesta kaukana olevat eksyneet elementit, joten rakennus voi näyttää pieneltä. Zoomaa sieltä lähemmäs.

**Napsautus ei valitse mitään.**
Pidä hiiri paikallaan napsauttaessasi: pieni vetäminen kiertää mallia. Valinnasta poistettujen kerrosten elementtejä ei voi valita. Kun {{ui:Tilat}} on päällä, läpinäkyvät tilat valitaan ennen niiden sisällä olevia kohteita.

**{{ui:Särmät}}-painike on harmaana: "Särmät ovat pois päältä hyvin suurilta malleilta".**
Mallissa on yli 1.5 miljoonaa kolmiota. Särmät jätetään pois muistin säästämiseksi.

**Välilehti hidastuu, muuttuu valkoiseksi tai näyttää selaimen kaatumissivun.**
Malli on liian suuri selaimen välilehdelle annettuun muistiin. Sulje muut välilehdet ja lataa sivu uudelleen. Vie pienempi IFC-tiedosto: yksi rakennus, yksi erikoisala tai vähemmän kerroksia. Katso [Selaimet, laitteet ja muisti](topic:platforms).

**3D-näkymä jää tyhjäksi.**
WebGL voi olla pois päältä tai estetty. Ota selaimen asetuksissa laitteistokiihdytys (tai grafiikkakiihdytys) käyttöön ja käynnistä selain uudelleen.

## IFC-tiedon muokkaaminen

**"Käytä numeroa."** Arvo on numeerinen. Kirjoita pelkkä numero ilman yksiköitä, kuten `2.4`.

**"Käytä kokonaislukua."** Arvo on määrä tai kokonaisluku. Poista desimaalit.

**"Vain yksiarvoisia ominaisuuksia voi muokata."** Luettelot, luetteloarvot ja määrät ovat vain luettavissa.

**{{key:Mod+S}} avaa selaimen "Tallenna sivu" -ikkunan.**
Tallentamattomia muutoksia ei ole, joten BimCraft jätti näppäimen selaimelle. Sulje ikkuna.

**{{key:Mod+Z}} ei tee mitään.**
Se toimii vain, kun sinulla on tallentamattomia muutoksia eikä kirjoita kenttään. Tallennuksen jälkeen kumottavaa ei ole.

**{{ui:Muutokset}}-luettelo näyttää yhä muokkauksia, vaikka hylkäsin ne ja avasin piirustuksen tai kansion.**
Kun vastaat kysymykseen "Hylätäänkö ne?" OK:lla ja avaat sitten muun kuin IFC-mallin, vanhat muokkaukset säilyvät muistissa, ja {{ui:Tallenna IFC-tiedostona}} tallentaisi ne yhä. Aloita todella alusta avaamalla alkuperäinen IFC uudelleen tai lataamalla sivu uudelleen.

**Muokkaukseni muutti enemmän elementtejä kuin valitsin.**
Muutit ominaisuutta joukossa, jonka merkintä on "(tyyppi)". Tyypin ominaisuudet koskevat jokaista tyypin elementtiä. Napsauta {{ui:Kumoa}}. Katso [Muuta tyypin ominaisuutta kaikille tyypin elementeille](topic:type-vs-instance).

## Piirustukset

**"*name* ei voitu lukea. Se voi olla vioittunut tai tallennettu muodossa, jota lukija ei vielä käsittele (…)."**
Tallenna piirustus sen ohjelman kautta, joka sen teki, vanhempana DWG-tiedostona (2018 tai aiemmin) tai DXF-tiedostona, ja yritä uudelleen.

**"Tässä piirustuksessa ei ole mitään näytettävää."** tai **"*name* on tyhjä piirustus: siinä ei ole viivoja, tekstiä eikä lohkoja."**
Piirustus on tyhjä, tai siinä on vain asioita, joita BimCraft ei vielä piirrä (katso oikealla oleva **Ei vielä piirretty**).

**"Tämä piirustus on hyvin suuri; vain osa siitä näytetään."**
BimCraft lopetti piirtämisen, jotta se pysyy vastaavana. Kytke pois tarpeettomat tasot tai avaa tarvitsemasi arkit pienemmästä piirustuksesta.

**Arkista puuttuu osia.**
Linkitettyjä piirustuksia ei ehkä ole: katso oikealla kohdasta **Linkitetyt piirustukset**. Katso [Linkitettyjen piirustusten ja kuvien löytäminen](topic:dwg-linked-files). Tasoja voi myös olla pois päältä: napsauta {{ui:Kaikki päällä}}.

**Kuva näkyy tyhjänä kehyksenä.**
Sen tiedostoa ei löytynyt, tai se on TIFF ("TIFF-tiedostoa ei voi näyttää selaimessa"). Lisää PNG- tai JPEG-kopio kohdalla {{ui:Lisää kuvia…}}.

**Kosketuslevyn vieriminen zoomaa piirustuksen siirtämisen sijaan.**
Näin piirustukset toimivat BimCraft-ohjelmassa. Siirrä piirustusta napsauttamalla ja vetämällä.

## Yhä jumissa

Lue [Mitä ei ole vielä toteutettu](topic:not-built-yet): etsimääsi asiaa ei ehkä ole tässä versiossa.
