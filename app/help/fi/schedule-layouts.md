---
title: Luettelon asettelu, tallennus ja vienti
summary: Ryhmittele luettelo, anna sille välisummat ja yhteissummat, lisää sarake, joka luetaan ominaisuudesta, tallenna se asetuksena tiedostoon ja vie se taulukkolaskentatyökirjana (.xlsx), tekstinä liitettäväksi verkkotaulukkoon tai CSV-muodossa. Toimiston standardi täydentää sen, mitä luettelo ei määritä.
keywords: luettelon asettelu, ryhmittely, välisumma, yhteissumma, otsikot, toimiston standardi, oletuskäytännöt, asetus, ovet kerroksittain, palonkestävyys, rautatavarat, xlsx, työkirja, verkkotaulukko, liitä, csv, vienti, taulukkolaskenta, elementit, valitse luettelosta, luku
from: 95dfd801
---

## Mitä teet

Muuta tavallinen luettelo toimiston julkaisemaksi luetteloksi: ryhmiteltynä tason, tyypin tai huoneen mukaan, välisummilla ja yhteissummalla, tarvitsemillasi sarakkeilla, omalla nimellään. Vie se sitten taulukkolaskentaan. Jokainen rivi ja jokainen luku tietää edelleen, mistä elementeistä se on peräisin.

## Vaiheet

1. Ota {{ui:Piirrä}} käyttöön ja avaa vasemmasta paneelista **Luettelot**. Valitse luettelo, esimerkiksi **Ovet**.
2. Taulukon yläpuolella valitse **Ryhmittele** (luettelon sarake, kuten Taso tai Tyyppi, tai **Ei ryhmittelyä**) ja **Yhteissummat** (**Ei yhteissummia**, **Yksi yhteissumma** tai **Välisummat ja yhteissumma**). **Asetuksen mukaan** jättää valinnan tallennetulle asetukselle tai toimiston standardille.
3. Jos haluat lisätä sarakkeen, joka luetaan elementeistä, kirjoita taulukon alle ominaisuuden tai merkinnän nimi (esimerkiksi `FireRating`, `Pset_DoorCommon.FireRating` tai merkinnän nimi, kuten `Ironmongery`) ja napsauta **Lisää sarake**. BimCraft lukee ensin elementin omat ominaisuusjoukot ja sitten sen tyypin. Kun yhdelläkään elementillä ei vielä ole arvoa, se kertoo sen; sarake täyttyy itsestään, kun arvo asetetaan.
4. Kirjoita nimi (esimerkiksi ”Ovien luettelo kerroksittain”) ja napsauta **Tallenna asetuksena**. Asetus tallennetaan rakennustiedostoon ja liittyy Luettelot-luetteloon nimellään. Se seuraa jokaista mallin muutosta. **Poista tämä asetus** poistaa sen. Molemmat ovat yksi kumoamisvaihe.

## Napsauta lukua valitaksesi, mistä se on peräisin

Napsauta mitä tahansa riviä tai yksittäistä lukua valitaksesi sen takana olevat elementit pohjakuvasta ja 3D:stä:

- rivi valitsee tuon rivin elementit;
- välisumma tai yhteissumma valitsee kaiken, mitä se laskee yhteen, ja ryhmäotsikko oman ryhmänsä;
- luku, jolla on omia elementtejä, valitsee ne: seinätyypin **Vähennykset** valitsevat sen ovet ja ikkunat, huoneen seinäpinta-ala sen seinät.

Sama toimii mallista tehdyssä asiakirjassa: esikatselussa napsauta luettelon lukua.

## Vienti

- **Lataa Excel** tallentaa .xlsx-työkirjan. Pituudet, pinta-alat, tilavuudet ja lukumäärät ovat todellisia lukuja sarakkeen näyttämässä yksikössä (jalat ja tuumat säilyvät tekstinä). Toinen taulukko, **Elementit**, luettelee jokaisen rivin takana olevien elementtien GlobalId-tunnukset.
- **Kopioi Google Sheetsiin** kopioi luettelon leikepöydälle sarkaineroteltuna tekstinä. Google Sheetsissä napsauta solua A1 ja liitä. **Avaa uusi Google Sheets** avaa `sheets.new`-osoitteen, Googlen oman osoitteen tyhjää taulukkoa varten, omalla Google-tililläsi. BimCraft ei kirjaudu Googleen eikä lähetä sinne mitään: liittäminen on sinun tehtäväsi.
- **Lataa CSV** tallentaa taulukon sellaisena kuin se on asetettu näytölle.

## Toimiston standardi

Toimisto voi kertoa kerran, miten sen luettelot asetellaan. Ota käyttöön **Oletuskäytännöt**-lisäosa ([Oletuskäytännöt](topic:default-policies)) ja aseta kohdassa **Asetukset › Yleiset › Oletuskäytännöt › Luettelon asettelu (toimiston standardi)**:

| Käytäntö | Mitä se tekee |
|---|---|
| Ryhmittele luettelot | Taso, Tyyppi, Huone tai ei ryhmittelyä, jokaiselle luettelolle, jolla on tällainen sarake |
| Yhteissummat luetteloissa | Ei yhteissummia, yksi yhteissumma lopussa tai välisumma jokaisen ryhmän alla ja yhteissumma |
| Luettelon otsikko | Malli, esimerkiksi `{project}: {schedule}` |
| Sarakeotsikot | Sellaisenaan, ISOILLA KIRJAIMILLA tai Isoilla Alkukirjaimilla |

Standardi koskee jokaista luetteloa riippumatta siitä, kuka sen asettaa: paneelin tavallisia luetteloita, tallennettua asetusta, avustajan asettamaa luetteloa, vientejä ja asiakirjan luetteloita. Asetus, joka ilmoittaa oman ryhmittelynsä, yhteissummansa tai otsikkonsa, säilyttää ne; standardi täydentää loput. Paneeli kertoo, mitkä osat toimiston standardi on asettanut. Käytännöt kulkevat Oletuskäytännöt-tiedostossa muiden mukana.

## Hyvä tietää

- Asetus nimeää lähdeluettelonsa ja sarakkeensa; siinä ei ole lukuja. Luvut luetaan mallista joka kerta.
- Luetteloilla, jotka eivät ole elementtirivejä (seinäkokoonpanot ja materiaalien selite), ei ole tässä asettelua eikä vientiä.
- Avustaja voi tehdä kaiken tämän puolestasi: katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
