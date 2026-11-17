---
title: Ominaisuudet-paneelin kentät
summary: Mitä jokainen kenttä Ominaisuudet-paneelissa sekä Tiedosto-, Piirustus- ja Kansio-paneelissa tarkoittaa ja mitkä niistä voi muuttaa.
keywords: ominaisuudet, kentät, attribuutit, globalid, guid, kopioi, kopioi arvo, kopioi kaikki, csv, leikepöytä, sarjanumero, tunniste, kohdetyyppi, rivi, express-tunnus, ominaisuusjoukko, pset, määrät, skeema, tiedosto-paneeli
from: fe55b435
---

## Yksi IFC-elementti

Ominaisuudet-paneelin yläosa näyttää elementin lajin ilman "Ifc"-etuliitettä (esimerkiksi "Door", "WallStandardCase", "FurnishingElement") ja sen nimen, tai "Nimetön", jos nimeä ei ole.

| Kenttä | Merkitys | Muokattavissa |
|---|---|---|
| Nimi | Elementin nimi, usein exporterin antama perheen ja tyypin nimi | Kyllä |
| Tyyppi | Elementin tyypin nimi, kun sillä on tyyppi | Ei |
| Kohdetyyppi | Vapaa tekstikuvaus tyypistä, jonka jotkut vientiohjelmat täyttävät | Kyllä |
| Tunniste | Elementin tunniste tai merkki; monet vientiohjelmat kirjoittavat siihen elementin tunnuksen | Kyllä |
| Kuvaus | Vapaa teksti | Kyllä |
| GlobalId | Elementin pysyvä 22-merkkinen IFC-tunniste, sama jokaisessa saman elementin viennissä | Ei |
| Rivi | Elementin rivinumero (`#1234`) tässä IFC-tiedostossa. Se muuttuu eri vienneissä | Ei |

Alla ovat **ominaisuusjoukot** nimen mukaan lajiteltuina:

- Kukin joukko aukeaa ja sulkeutuu napsauttamalla nimeään. Kolme ensimmäistä ovat auki.
- Joukko, joka on merkitty "(tyyppi)", kuuluu elementin tyyppiin: "Tyyppiominaisuus: muutos tässä koskee kaikkia tämän tyypin elementtejä."
- Määrien joukot (pituudet, pinta-alat, tilavuudet, lukumäärät, painot) ovat vain luettavissa.
- Listat ja enumeroidut arvot näkyvät vain luettavina.
- Kyllä/ei-arvot näkyvät **Kyllä** tai **Ei**.
- Luvut pyöristetään neljään desimaaliin näytöllä. Pituudet (pituusominaisuus tai määrän pituus) näkyvät {{ui:Yksiköt}}-valinnan mukaisessa yksikössä työkalurivillä, yksikkömerkin kanssa, ja voit kirjoittaa uuden arvon siinä yksikössä tai toisella yksikkömerkillä (2.4 m, 8'-0"). BimCraft kirjoittaa tiedoston oman luvun takaisin. Muut luvut näkyvät sellaisina kuin tiedosto ne esittää.
- Tyhjä arvo näkyy *tyhjänä*. Muokattu arvo on lihavoitu, ja sen vieressä on sininen palkki.

## Kopioi arvo

Jokaisen arvon vieressä {{ui:Ominaisuudet}}-paneelissa on pieni kopiopainike: napsauta sitä kopioidaksesi arvon leikepöydälle juuri sellaisena kuin se näkyy, esimerkiksi GlobalId, sarjanumeron tai minkä tahansa ominaisuusjoukon arvon. Kopiointi ei koskaan aloita muokkausta.

Yläosassa {{ui:Kopioi kaikki}} kopioi kaikki elementin arvot tekstinä joukko kerrallaan, ja {{ui:Kopioi CSV:nä}} kopioi ne ryhmä-, ominaisuus- ja arvo-riveinä, jotka voi liittää taulukkolaskentaan. Tyhjät arvot säilytetään, jotta jokaisella kentällä on oma rivinsä. Tämä toimii samoin toisen auki olevan mallin elementille; kun useita malleja on auki, CSV alkaa Malli-sarakkeella, joka nimeää tiedoston.

## Tiedosto-paneeli (IFC)

| Kenttä | Merkitys |
|---|---|
| Tiedosto, Koko | Avaamasi tiedosto |
| Skeema | IFC-versio, kuten IFC2X3 tai IFC4 |
| Projekti | Projektin nimi ja pitkä nimi |
| Vaihe | Projektin vaihe, jos vientiohjelma kirjoitti sellaisen |
| Viety ohjelmasta | Vientiohjelma tiedoston otsikosta |
| Tekijä | Tekijä tiedoston otsikosta |
| Viety | Päivämäärä ja kellonaika tiedoston otsikosta |
| Elementit | Kuinka monta muotoa omaavaa elementtiä piirrettiin |
| Kolmiot | Kuinka monta kolmiota niiden muodot tekevät; mitta mallin raskaudelle |

## Tiedosto-paneeli (projekti- ja perhetiedostot)

| Kenttä | Merkitys |
|---|---|
| Laji | Projekti, Projektimalli, Perhe tai Perhemalli |
| Tallennettu versiolla | Julkaisu, joka tallensi tiedoston viimeksi |
| Koontiversio | Tuon julkaisun tarkka koontiversio |
| Luettu | Kuinka suuri osa tiedostosta BimCraft luki, suhteessa tiedoston kokoon |

## Piirustus-paneeli (DWG ja DXF)

| Kenttä | Merkitys |
|---|---|
| Muoto | Julkaisu, jona piirustus tallennettiin, muotokoodin kanssa, kuten AC1032 |
| Yksiköt | Piirustuksen lisäysyksiköt, kun ne on asetettu |
| Kohteet | Kuinka monta objektia luettiin |
| Tasot | Kuinka monta tasoa |
| Arkit | Kuinka monta arkkia (asettelua) tai Ei yhtään |
| Linkitetyt piirustukset | Kuinka monta linkitetyistä piirustuksistaan löydettiin ja ladattiin |
| Laitteet | Kuinka monta merkittyä laitetta on arkeilla |

## Kansio-paneeli

| Kenttä | Merkitys |
|---|---|
| Kansio, Tiedostot, Koko | Avaamasi kansio, kuinka monta tiedostoa se sisältää ja niiden yhteiskoko |
| Mallit | Projekti- ja perhetiedostot; kukin varmuuskopioineen lasketaan kerran |
| CAD-piirustukset, IFC-mallit | Kuinka monta kumpaakin |
| Ongelmat | Kuinka monta mallikopiota on keskeneräinen tai lukukelvoton, tai Ei yhtään |
