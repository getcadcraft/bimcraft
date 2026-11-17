---
title: Lue projekti- tai perhetiedosto
summary: Avaa .rvt-, .rfa-, .rte- tai .rft-tiedosto ja lue sen julkaisu, jaettu työ, projektitiedot, perheparametrit, linkit ja esikatselukuva ilman ohjelmaa, joka sen teki.
keywords: rvt, rfa, rte, rft, projektitiedosto, perhe, julkaisu, versio, mikä versio, koontiversio, jaettu työ, keskusmalli, projektitiedot, esikatselu, pikkukuva, linkit
from: df3600e1
---

## Mitä teet

Selvitä, mitä projekti- tai perhetiedosto sisältää avaamatta sitä Revitissä: mikä julkaisu sen tallensi, onko se jaetussa työssä, projektitiedot ja mihin se linkittyy. Hyödyllinen, kun tiedosto tulee jolta toiselta ja sinun täytyy tietää, missä julkaisussa se avataan.

## Vaiheet

1. Napsauta {{ui:Valitse tiedosto}}.
2. Valitse `.rvt`-, `.rfa`-, `.rte`- tai `.rft`-tiedosto.
3. Odota hetki. Tilarivillä lukee "Luetaan tiedostoa…" ja sen jälkeen "Avattu *tiedoston nimi*".
4. Katso kortin yläosaa: tiedoston tallentama esikatselukuva, tiedoston laji ja julkaisu, jolla se tallennettiin, sekä projektin nimi.
5. Vieritä alas lukeaksesi kortin osiot.

## Mitä pitäisi näkyä

Kortti keskellä, jossa nämä osiot, kun tiedosto niitä sisältää:

| Osio | Mitä se kertoo |
|---|---|
| Tiedosto | Tiedoston nimi, koko, laji (projekti, projektimalli, perhe tai perhemalli), julkaisu ja koontiversio, jolla se tallennettiin, jaettu työ, keskusmallin polku, missä se tallennettiin viimeksi, kuka sen tallensi, kieli ja asiakirjan GUID |
| Projektitiedot | Projektin omat kentät, kuten nimi, numero, asiakas, osoite ja tila. Kentät, jotka ovat yhä uuden projektin oletusarvoissa, jätetään pois. |
| Perhe, Perhe: … | Perheelle: sen nimi, luokka, julkaisu, viimeisin päivitys ja sen parametrit ryhmittäin |
| Linkitetyt ja viitatut tiedostot | Jokainen linkitetty malli, CAD-linkki, kuva ja avainlauseiden taulukko, johon tiedosto viittaa, tallennettuine polkuineen |

Vasemmalla {{ui:Tiedosto}}-paneeli toistaa keskeiset tiedot ja lisää **Luettu**-kohdan: kuinka suuren osan tiedostosta BimCraft todella luki, yleensä noin 40 KB tiedostosta, joka on monta megatavua. Oikealla {{ui:Ominaisuudet}}-paneeli kertoo, että elementtien ominaisuudet vaativat 3D-mallin.

## Miksi 3D:tä ei ole

3D-malli ja projektitiedoston elementit ovat tallessa dokumentoimattomassa muodossa. BimCraft lukee vain ne osat tiedostosta, jotka on dokumentoitu tai jotka ovat selvästi luettavissa: tiedoston tiedot, projektitiedot, perhetiedot, linkkiluettelon ja esikatselukuvan. Se ei arvaa loppuosaa. Nähdäksesi mallin 3D:nä ja lukeaksesi elementtien ominaisuudet, vie IFC ohjelmasta, joka tiedoston teki. Katso [Hae projektitiedosto 3D:ksi IFC:n kautta](topic:rvt-to-ifc).

## Yleisiä virheitä

- **3D:n odottaminen.** Katso yllä.
- **Linkit näyttävät vain tallennetun polun.** Yksin avattu tiedosto ei voi tarkistaa, ovatko sen linkit olemassa. Avaa sen sijaan kansio, jossa tiedosto on, niin BimCraft merkitsee jokaisen linkin löydetyksi tai ei löydetyksi: [Avaa koko projektikansio](topic:open-project-folder).
- **"Tämä tiedosto on keskeneräinen…"** Tiedosto katkaistiin kopioinnin, lataamisen tai synkronoinnin aikana. Pilvi-asemalla oleva tiedosto, joka on yhä "vain verkossa", tekee saman. BimCraft avaa sen silti ja näyttää vain palautetun osan: keltainen huomautus kortin yläosassa, **Palautettu tästä tiedostosta** -osio, joka listaa osat, joiden jokainen tavu on tiedostossa, ja **Ei tiedostossa** muulle. Puuttuvaa osaa ei täytetä, joten julkaisu, esikatselukuva tai projektitiedot voivat puuttua, jos ne oli tallennettu katkaisukohdan jälkeen. Jos jopa tiedoston sisältöluettelo katkesi, mitään ei voi avata. Kopioi alkuperäinen uudelleen ja avaa se koko tiedostona.
- **"Tässä tiedostossa ei ole esikatselukuvaa".** Joitakin tiedostoja tallennetaan ilman sitä. Se on normaalia.
- **Varmuuskopion avaaminen vahingossa.** Tiedostot nimeltä kuten `Tower.0004.rvt` ovat numeroituja varmuuskopioita. Kansion avaaminen ryhmittelee ne mallinsa kanssa.
