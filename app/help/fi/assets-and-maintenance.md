---
title: Pidä resurssitiedot ja huoltokirjaus mallissa
summary: Käytä luovutettua IFC-mallia rakennuksen käyttöön: valmistaja, malli, sarjanumero, takuu ja käyttöikä laitteille ja kalusteille sekä tehdyn huollon kirjaus, kaikki kirjoitettuna IFC-tiedostoon.
keywords: luovutus, käyttöönottotodistus, valmistumistodistus, toteutuneet piirustukset, luovutuspaketti, resurssit, resurssirekisteri, kiinteistönhallinta, fm, käyttö, huolto, palvelu, takuu, sarjanumero, viivakoodi, valmistaja, malli, käyttöikä, cobie, digitaalinen kaksonen, myöhässä, erääntyvä, työmääräys
from: b84ac492
---

Oikean paneelin {{ui:Resurssit}}-välilehti muuttaa avoimen IFC-mallin rakennuksen laitteiden luetteloksi. Kaikki kirjoitetaan IFC:hen itseensä, IFC:n omiin ominaisuusjoukkoihin ja tehtäviin, joten seuraava ohjelma, joka avaa tiedoston, lukee senkin. Mitään ei lähetetä eikä palvelinta tarvita: tallenna IFC säilyttääksesi sen.

## Mitä luetellaan

- Laitteet ja kalusteet: huonekalut, LVI-kalusteet, valaisimet, laitteet, ilmanvaihtopäätteet, venttiilit, pumput, puhaltimet, kattilat, säiliöt, pistorasiat, kytkinkeskukset, hissit ja muut vastaavat elementit sekä kirjastonkohteet, joissa on laitetietoja.
- Mikä tahansa muu elementti, jonka seuraat (track): valitse se mallissa (ovi, seinä, tavallisena kohteena piirretty pumppu) ja napsauta {{ui:Seuraa valittuja}}.
- Kaikki, jossa on jo resurssitietoja tai huoltotehtävä, kirjoitettuna täällä tai toisen ohjelman toimesta.

Myöhässä oleva tulee ensin, sitten 30 päivän sisällä erääntyvät. Suodata nimen, tunnisteen, valmistajan, mallin tai sarjanumeron tai tason mukaan, tai valitse {{ui:Vain myöhässä olevat tai 30 päivän sisällä erääntyvät}}.

## Resurssitiedot

Napsauta resurssia luettelosta (tai valitse se mallissa) avataksesi sen tiedot: valmistaja, malli, mallin viite, sarjanumero, viivakoodi, asennuspäivä, takuunumero sekä takuun alku ja loppu, ja käyttöikä vuosina. {{ui:Tallenna tiedot}} kirjoittaa ne yhdellä kertaa ({{key:Mod+Z}} kumoaa sen). Jätä ruutu tyhjäksi poistaaksesi arvon.

## Asiakirjat

Tietojen alla {{ui:Asiakirjat}} luettelee resurssiin liitetyt käyttöohjeet, takuut, kuvat, todistukset ja piirustukset. Valitse laji, anna sille nimi (tai jätä tyhjäksi: käytetään tiedostonimeä) ja kerro, missä se on:

- **verkko-osoite** (`https://…`): siihen tulee Avaa-linkki, joka aukeaa uudessa välilehdessä;
- tai **tiedoston nimi tai polku** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, verkkojako): pidä tiedostot IFC:n vieressä, samassa kansiossa tai sen alla, jotta nimet toimivat myös silloin, kun luovutat kansion. BimCraft näyttää nimen; avaa tiedosto kansiosta.

Tiedostoja ei koskaan lähetetä eikä kopioida IFC:hen: kirjoitetaan vain linkki. Verkko-osoite, jossa on salasana, ja kaikki linkit, jotka eivät ole verkko-osoite tai tiedosto (kuten `javascript:`), hylätään. {{ui:Poista}} irrottaa asiakirjan resurssista (yksi vaihe; {{key:Mod+Z}} kumoaa sen).

Asiakirjat, jotka toinen ohjelma on lisännyt elementtiin, luetellaan myös. Elementin **tyypin** asiakirjat näkyvät jokaisessa saman tyypin elementissä ja ilmoittavat sen; muuta ne siellä, missä tyyppi tehtiin.

IFC:ssä jokainen asiakirja on IFC-asiakirjaviite, joka on sidottu elementtiin ja jonka laji on säilytetty tässä sidoksessa, sekä IFC4:ssä että IFC2X3:ssa.

## Huoltokirjaus

Asiakirjojen alla {{ui:Kirjaa tehty työ}}: päivä, jolloin työ tehtiin, työ, kuka sen teki, milloin seuraava huolto on ja muistiinpanot. Jokainen merkintä on yksi vaihe; {{ui:Muokkaa}} ja {{ui:Poista}} muuttavat sitä myöhemmin. Uusimman merkinnän seuraava eräpäivä ratkaisee, onko resurssi myöhässä vai erääntyykö se pian.

## Miten se säilytetään IFC:ssä

- Valmistaja ja malli kohdassa `Pset_ManufacturerTypeInformation`, sarjanumero, viivakoodi ja asennuspäivä kohdassa `Pset_ManufacturerOccurrence`, takuu kohdassa `Pset_Warranty` ja käyttöikä kohdassa `Pset_ServiceLife`, itse elementissä. Kun elementin tyypillä on jo valmistaja tai malli, se näkyy, kunnes kirjoitat oman.
- Jokainen huoltomerkintä on IFC-**tehtävä** huoltolajia, sidottu elementtiin, sen päivämäärineen (IFC4:ssä myös tehtävän omina aikoina) ja `CadCraft_Maintenance`-joukko, jossa on päivä, kuka teki ja seuraava eräpäivä.
- Arvot, jotka toinen elementti jakaa, kopioidaan ensin: yhden resurssin muuttaminen ei koskaan muuta naapureita.
- Vanhemmissa IFC2X3-tiedostoissa päivämäärät kirjoitetaan tekstinä (YYYY-MM-DD); tämä versio vaatii erillisen päivämäärätietueen, jota BimCraft ei kirjoita.

## Anturilukemat

Avaa {{ui:Anturiarvot}} ja {{ui:Avaa lukemat (CSV)…}} tuodaksesi lukemia rakennuksen hallintajärjestelmästä, tiedonkeruulaitteesta tai taulukosta:

- **Ensimmäinen sarake on aika**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` tai Unix-sekunnit. Aika ilman aikavyöhykettä luetaan tietokoneesi omalla aikavyöhykkeellä. Päivä edellä olevia päivämääriä, kuten `23/10/2026`, ei lueta (ne ovat moniselitteisiä); vie ISO-päivämäärät.
- **Jokainen muu sarake on yksi anturi**, jonka otsikko on sen resurssin **tunniste**, **nimi** tai **GlobalId**. Otsikko, joka ei vastaa yhtään resurssia tai vastaa useampaa, luetellaan ja jätetään pois. Sarakkeet erottavat pilkut, puolipisteet tai sarkaimet; puolipisteillä tai sarkaimilla luetaan myös desimaalipilkku (`21,5`).
- Ajat tai arvot, joita ei voi lukea (sana tai yksikkö solussa), lasketaan ja jätetään pois, niitä ei arvata.

Viimeisin lukema näkyy luettelon {{ui:Lukema}}-sarakkeessa ja resurssin {{ui:Anturi}}-lohkossa kaaviona kaikista lukemista (puhelimella kaaviot odottavat, kunnes napautat {{ui:Näytä kaavio}}). Aseta resurssille **alaraja ja yläraja** sekä yksikkö ja napsauta {{ui:Tallenna rajat}}: rajojen ulkopuolinen lukema merkitsee resurssin. Valitse {{ui:Näytä mallissa}}, niin jokainen resurssi väritetään lukeman mukaan: sininen alarajan alapuolella, vihreä rajojen sisällä ja punainen ylärajan yläpuolella. Resursseille ilman rajoja käytetään yhtä sinistä asteikkoa pienimmästä suurimpaan lukemaan. Lukema näkyy nimikkeenä (enintään 60 nimikettä, merkityt ensin).

**Lukemat pysyvät tämän selaimen välilehdessä**: niitä ei tallenneta IFC:hen eikä lähetetä minnekään; avaa CSV uudelleen seuraavalla kerralla. **Rajat tallennetaan IFC:hen** (`CadCraft_Sensor`-joukko elementissä: Low, High, Unit), joten seuraava tiedoston avaaja näkee samat merkinnät.

## Reaaliaikaiset lukemat

{{ui:Reaaliaikainen syöte}} lukee arvoja heti, kun ne syntyvät, **suoraan tästä selaimesta omaan järjestelmääsi**. Mikään ei kulje palvelimemme kautta, eikä mitään tallenneta muualle kuin selaimen välilehteen. Mikään ei yhdisty, kun tiedosto avautuu: vain {{ui:Yhdistä}} tekee sen.

- **MQTT WebSocketin kautta**: välittäjäsi WebSocket-kuuntelijan osoite (`wss://broker.example.com:8884/mqtt`) ja yksi tai useampi aihe, jossa `{tag}` on kohdassa, mihin resurssin tunniste tulee, esimerkiksi `site/{tag}/temperature`. BimCraft tilaa `site/+/temperature` ja lukee tunnisteen jokaisen viestin aiheesta. Aiheet ilman `{tag}`-kohtaa nimeävät anturin itse. Viesti on joko yksinkertainen luku (`21.5`) tai JSON, kuten `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (aseta {{ui:Arvokenttä JSON:issa}}, jos sinulla kenttä on nimetty toisin).
- **Kysy osoitteelta (HTTP)**: verkko-osoite, johon rakennuksen hallintajärjestelmäsi tai pieni skriptisi vastaa, kysytään muutaman sekunnin välein (vähintään 5). Se voi vastata JSON-muodossa tunnisteen mukaan (`{"AHU-1": 21.5}`), JSON-listana (`[{"tag": "AHU-1", "value": 21.5}]`) tai CSV-lukemina edellä kuvatun kaltaisesti. Jos se ei vastaa, BimCraft odottaa kaksinkertaisen ajan ennen seuraavaa kysymistä, enintään viisi minuuttia.

Jokainen lukema menee resurssille, jonka tunniste, nimi tai GlobalId se nimeää, täsmälleen samalla tavalla kuin CSV-sarake; nimet, joita mikään resurssi ei vastaa, luetellaan. Lukemat liittyvät {{ui:Anturiarvot}}-kohtaan: luettelo, kaaviot, rajat ja värit mallissa toimivat samalla tavalla.

**Salasanasi tai tunnuksesi** kirjoitetaan yhteyttä varten: se annetaan yhteydelle ja ruutu tyhjennetään; sitä ei koskaan tallenneta tähän selaimeen eikä IFC:hen. Tunnus lähetetään tavallisena `Authorization: Bearer` -otsakkeena, eikä evästeitä lähetetä.

{{ui:Säilytä nämä asetukset IFC:ssä}} kirjoittaa osoitteen, aiheet, arvokentän ja kysymisvälin malliin (`CadCraft_Feed`-joukko projektissa; salasanalle ei ole kenttää), joten seuraava tiedoston avaaja kirjoittaa vain oman kirjautumisensa ja napsauttaa {{ui:Yhdistä}}. Älä laita salasanaa tai avainta itse osoitteeseen: osoite, jossa on käyttäjätunnus ja salasana, hylätään.

:::note
**Mitä välittäjäsi tai osoitteesi tarvitsee.** Selainsivu voi puhua vain palvelimelle, joka sen sallii:
- Sivu on suojattu (https), joten selain yhdistää vain `wss://`- ja `https://`-osoitteisiin — paitsi omalla tietokoneellasi (`localhost`), jossa `ws://` ja `http://` toimivat testaukseen.
- HTTP-osoitteen täytyy sallia pyynnöt tältä sivulta (CORS: otsake `Access-Control-Allow-Origin`, ja `Authorization` sallittujen otsakkeiden joukossa, jos käytät tunnusta).
- Useimmat välittäjät (Mosquitto, EMQX, HiveMQ ja muut) tarjoavat WebSocket-kuuntelijan; se on usein pois päältä, kunnes se kytketään päälle. BimCraft puhuu MQTT 3.1.1:tä.
:::

Hälytyksiä ei ole, kun BimCraft on suljettu: rajat merkitsevät resurssin vain, kun malli on auki ja syöte yhdistetty. Rakennuksen valvominen ympäri vuorokauden vaatii palvelimen, jota BimCraft ei aja.

## COBie-taulukko

**COBie** on luovutustaulukko, jota monet omistajat ja kiinteistönhallintatiimit pyytävät (National BIM Standard julkaisee sen Yhdysvalloissa; BS 1192-4 Isossa-Britanniassa). Avaa {{ui:COBie-taulukko}} välilehdessä:

- {{ui:Tallenna COBie-muodossa (.xlsx)}} kirjoittaa COBie 2.4 -arkit (Contact, Facility, Floor, Space, Type, Component, System, Job, Document ja Attribute) mallista ja resurssitiedoista: rakennuksen, sen tasot ja huoneet (alat mallin määristä), jokaisen resurssin komponenttina sarjanumeronsa, asennuspäivänsä, takuun alun, tunnisteensa ja viivakoodinsa kanssa, sen tyypin valmistajan, mallin, käyttöiän ja takuun pituuden kanssa, järjestelmät, joihin se kuuluu, huoltokirjauksen töinä ja liitetyt asiakirjat. Jokainen komponentti kantaa elementin IFC GlobalId:n. Kirjoita sähköpostiosoitteesi COBien "luonut"-sarakkeeseen tai jätä se tyhjäksi (silloin lukee n/a). Arvot, joita mallissa ei ole, lukevat **n/a**; luokkasarakkeissa on IFC-luokka, ei OmniClass-koodia.
- {{ui:Lue COBie-taulukko…}} lukee sen takaisin BimCraftista tai toisesta ohjelmasta ja **luettelee kaikki muutokset ensin**: mikä resurssi, mikä arvo, mistä mihin, ja uudet asiakirjat. {{ui:Käytä}} kirjoittaa ne kaikki yhdellä kertaa ({{key:Mod+Z}} kumoaa sen). Rivit täsmätään ensin GlobalId:n, sitten komponentin nimen mukaan. Rivit, joita mikään mallissa ei vastaa, luetellaan, mutta niitä ei lisätä.

Taulukkoa käsitellään epäluotettavana: kaavoja ei koskaan lueta eikä suoriteta (vain solun viimeksi tallennettu arvo). Arvo, joka saisi takuun päättymään ennen alkuaan, ja asiakirjalinkki, joka ei ole verkko-osoite tai tiedostonimi, jätetään pois ja lasketaan, ja hyvin suuret työkirjat hylätään. COBien työt ovat tyypin suunniteltuja töitä, joten ne kirjoitetaan ulos, mutta niitä ei lueta takaisin. BimCraftin kirjoittamassa taulukossa teksti, jonka taulukkolaskenta voisi tulkita kaavaksi (alkaa merkillä `=`, `+`, `-` tai `@`), on merkitty tekstiksi.

Työkirjan tarkistetaan testeissämme riippumatonta taulukkolukijaa vastaan; sitä ei ole testattu COBie-validaattorilla. Jos vastaanottava tiimi ajaa sellaisen, kerro meille, mitä se sanoo.

## Luovutusasiakirjat

Paperit, jotka menevät omistajalle valmiin rakennuksen mukana, kuuluvat projektiin eivätkä yhteen resurssiin. Avaa {{ui:Resurssit}}-välilehdellä {{ui:Luovutusasiakirjat}}:

1. {{ui:Lisää asiakirja}}, valitse sen laji (valmistumistodistus, käyttöönottotodistus, takuu, käyttöohje, toteutuneet piirustukset, muu) ja kirjoita nimi, antopäivä, antaja ja viitenumero.
2. Kerro, missä se on: verkko-osoite, IFC:n viereen säilytetty tiedostonimi tai {{ui:Liitä tiedosto}}.
3. {{ui:Lisää luetteloon}}. {{ui:Muokkaa}} ja {{ui:Poista}} muuttavat luetteloa; jokainen on yksi vaihe, jonka voit kumota.

{{ui:Kokoa luovutuspaketti}} lataa yhden zip-tiedoston: kansisivun, jolla on jokainen asiakirja, sama luettelo kuin taulukkona, COBie-työkirjan (asiakirjat ovat sen Document-arkilla rakennukseen liittyvinä riveinä), mallin ja jokaisen liitetyn tiedoston. Valmistumis- tai käyttöönottotodistus, jota ei vielä ole luettelossa, nimetään kansisivulla, ja paketti kootaan silti.

Paketin mallia kutsutaan **toteutuneeksi malliksi**: se kertoo, mitkä elementit mitattiin työmaalla. Sen kanssa kansiossa `as-built`: lausunto, luettelo jokaisesta elementistä varmennustilansa kanssa, tämänhetkinen piirustussarja yhtenä PDF-tiedostona (toteutuneet piirustukset) ja piirustusten muutosloki, kun mallilla on julkaistuja sarjoja. Katso [Merkitse elementit tarkistetuiksi tai työmaalla varmennetuiksi](topic:verification).

- IFC-tiedostossa jokainen asiakirja on IfcDocumentInformation, joka on sidottu projektiin (IfcRelAssociatesDocument), ja sillä on nimi, viite, päivämäärä, antaja ja paikka, joten muut ohjelmat listaavat sen.
- Liitetty tiedosto kirjataan nimen, koon ja SHA-256:n mukaan. Jotta tiedosto itse säilyy projektin mukana, käytä {{ui:Tallenna projekti pakettina}} (.ccbundle sisältää mallin ja liitetyt tiedostot; sen avaaminen palauttaa ne, kukin tarkistettuna kirjaansa vasten). Tavallinen tallennus kysyy, kumman haluat.
- Pelkkä .ifc säilyttää kirjauksen, ei tiedostoa: sen avaamisen jälkeen käytä {{ui:Liitä tiedosto uudelleen}}. Sama tiedosto tunnistetaan; eri tiedosto korvaa kirjauksen.

## CSV

{{ui:CSV}} tallentaa jokaisen resurssin tietoineen, jokaisen huoltomerkinnän ja jokaisen asiakirjan, yksi rivi kullekin, taulukkolaskentaan tai toiseen huolto-ohjelmaan.

:::note
Ei vielä toteutettu: palvelu, joka säilyttää lukemat ja lähettää hälytyksiä, kun BimCraft on suljettu, sekä COBien töiden lukeminen takaisin. Katso [Ei vielä toteutettu](topic:not-built-yet).
:::
