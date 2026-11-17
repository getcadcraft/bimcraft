---
title: Kansioraportti – roolit, tilat ja linkit
summary: Jokainen kansioraportin tunniste, sen merkitys ja se, miten Aloita täältä -ehdotus valitaan.
keywords: kansioraportti, roolit, tila, valmis, keskeneräinen, lukukelvoton, linkitetty, tausta, aloitustiedosto, keskusmalli, perhe, vain varmuuskopiot, aloita täältä, linkin tila
from: b35bdd10
---

## Kopioiden tila

Jokainen mallin kopio, päätiedosto ja numeroidut varmuuskopiot mukaan lukien, saa otsikkotarkistuksen.

| Tunniste | Merkitys |
|---|---|
| **Valmis** | Tiedoston otsikko ja hakemisto mahtuvat tiedoston sisään |
| **Keskeneräinen** | Tiedosto on lyhyempi kuin oma hakemistonsa sanoo: se katkesi kopioinnin, lähetyksen tai synkronoinnin aikana, tai se on pilvitiedosto, joka on yhä "vain verkossa" -tilassa |
| **Lukukelvoton** | Tiedosto ei ole kelvollinen yhdistetty tiedosto, tai sitä ei voitu lukea |

Sarakkeessa **Tila** malli näyttää **Valmis**-tilan, keltaisen "*n* keskeneräinen", kun vähintään yksi kopio on viallinen mutta toinen on kunnossa, tai punaisen **Keskeneräinen**, kun yhtäkään kunnossa olevaa kopiota ei ole.

## Varmuuskopiot

Tiedostot nimeltä `Nimi.0001.rvt`, `Nimi.0002.rvt` ja niin edelleen ovat tiedoston `Nimi.rvt` numeroituja varmuuskopioita. Ne ryhmitellään mallinsa alle, uusin ensin, otsikon **Kaikki … kopiot** alle. Kortti luetaan päätiedostosta, kun se on valmis, muuten uusimmasta valmiista varmuuskopiosta ("uusin valmis").

## Roolit

Näkyvät mallin nimen alla kursiivilla.

| Rooli | Merkitys |
|---|---|
| Linkitetty *toisen mallin* toimesta: tausta | Toinen kansion malli linkittää tämän, joten se on todennäköisesti jonkun muun tausta, kuten konsultin malli |
| Aloitus- tai nimetön tiedosto | Nimi kuten Blank, Template, Default, Untitled tai Project1: lähtökohta tai tiedosto, jota ei koskaan nimetty kunnolla |
| Keskusmalli | Työnjaettu keskusmalli. Työ tehdään paikallisessa kopiossa, ei täällä |
| Perhe (osa) | `.rfa`- tai `.rft`-tiedosto: komponentti, ei projekti |
| Vain varmuuskopiot | Päätiedosto on poissa, ja jäljellä ovat vain numeroidut varmuuskopiot |

## Miten Aloita täältä valitaan

BimCraft soveltaa samaa päättelyä kuin kokenut käyttäjä:

1. Ehdokkaat ovat luettavia projektitiedostoja (`.rvt`, `.rte`), joita mikään toinen malli ei linkitä eivätkä ole aloitustiedostoja.
2. Keskusmallit ja mallit, joissa on vain varmuuskopioita, lasketaan vain, jos parempaa ei ole.
3. Ehdokkaista voittaa se, joka on tallennettu viimeksi.

Laatikko luettelee perustelunsa ja varoittaa, kun ilmeisen valinnan tiedosto on vaurioitunut, kun muut mallit ovat taustoja ja kun valinta on keskusmalli. Se on paras arvaus; tarkista asia henkilöltä, joka työsti projektia viimeksi.

## Linkin tila

| Tunniste | Merkitys |
|---|---|
| **Tässä kansiossa** | Löytyi tallennetusta suhteellisesta polusta tai tallennetun täyden polun lopusta kansion sisältä |
| **Samanniminen löytyi** | Ei tallennetussa polussaan, mutta kansiosta löytyy saman niminen tiedosto. Tarkista, että se on oikea |
| **Kirjastotiedosto** | Avainsanataulukko tai kokoonpanokoodien taulukko. Nämä tulevat ohjelman mukana kullekin tietokoneelle |
| **Ei tässä kansiossa** | Ei löytynyt mistään kansiosta |

Sarake **Löydetyt linkit** kohdassa **Mallit** näyttää, kuinka monta mallin linkistä löytyi niistä, jotka kansiosta odotetaan (kirjastotiedostoja ei lasketa).

## Sivuun siirretyt

| Rivi | Merkitys |
|---|---|
| Revit-huoltokansiot (ei luettu) | `*_backup`-, `*_log`- ja `Revit_temp`-kansiot sekä piilotetut kansiot ja `__MACOSX` |
| Lukitus-, loki- ja varmuuskopiojäämät | `.dwl`-, `.dwl2`-, `.bak`-, `.err`-, `.log`-, `.tmp`-, `.sv$`-, `.ac$`-, `.lck`- ja `.slog`-tiedostot |
| Muut tiedostot | Kaikki muu (ensimmäiset 40 on nimetty) |
