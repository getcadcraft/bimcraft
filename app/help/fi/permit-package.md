---
title: Lupapaketti ja viranomaisen tukiasiakirjat
summary: Kokoa viranomaistoimitusta varten yhteen zip-tiedostoon määräystarkistus, todennäköiset huomautukset, malli ja viranomaisen luettelo tukiasiakirjoista. Jokainen asiakirja linkitetään levyyn tai luetteloon, joka sen täyttää.
keywords: hyväksymisprosessi, toimitusmuoto, vaaditut piirustukset, levykoko, tiedostomuoto, kopiot, määräyspaketti, lupa, lupapaketti, rakennuslupahakemus, lupakäsittely, tukiasiakirjat, tarkistuslista, viranomainen, kunta, tarkastuskommentit, kansalliset rakennusmääräykset, puuttuvat asiakirjat
from: 47dd77ee
---

## Mitä teet

Kokoa yksi zip-tiedosto viranomaistoimitusta varten (kun viranomaisen luettelo tulee määräyspaketista, siinä ovat myös hyväksymisvaiheet ja toimitusmuoto): kansilehti, huomautukset, joita tarkastaja todennäköisesti esittää (kirjoitettu tarkistuksista, ei arvattuna), määräysraportti, kun Rakennusmääräykset-lisäosa on päällä, malli sekä luettelo tukiasiakirjoista, joita hyväksyvä viranomainen pyytää.

Tämä on mallista tehty opas. Rekisteröity ammattilainen ja viranomainen päättävät, mitä vaaditaan ja mitä hyväksytään.

## Vaiheet

1. Avaa malli ja avaa vasemmasta paneelista {{ui:Lupapaketti}}.
2. Kirjoita hankkeen nimi, osoite ja hakija sekä luettele piirustuksesi ja lomakkeesi, yksi kullekin riville.
3. Valitse kohdassa {{ui:Tukiasiakirjat}} {{ui:Viranomaisen luettelo}}. Luettelot tulevat määräyspaketeista: lisää Rakennusmääräykset-lisäosa ja valitse paikkakuntasi paketti kohdasta Asetukset › Rakennusmääräykset (paketti voi sisältää säännöt, hyväksymisprosessin, toimitusmuodon, piirustuskäytännöt ja vakiohuomautukset). Yleinen luettelo toimii ilman sitä.
4. Lue luettelo. Jokainen asiakirja on {{ui:Linkitetty}} (levy ja syy mukana), {{ui:Toimitettu itse}}, {{ui:Ei sovellu}} tai {{ui:Puuttuvat}}.
5. Paperille, jonka toimitat itse (lomake, kiinteistön kauppakirja, maksukuitti), valitse {{ui:Toimitettu itse}}. Kohdalle, joka on ”tarvittaessa” eikä sovellu, valitse {{ui:Ei sovellu tässä}}. Jos haluat linkittää asiakirjan levyyn itse, valitse levy.
6. Avaa luettelon alta {{ui:Hyväksymisprosessi}} ja {{ui:Toimitusmuoto}} lukeaksesi vaiheet ja sen, mitä toimitetaan (levykoot, tiedostomuodot, kopiot). Maksu tai käsittelyaika näkyy vain, kun paketin lähde sen sanoo, sivun ja lukupäivän kanssa.
7. Napsauta {{ui:Tee lupapaketti (zip)}}. Vaiheet ja muoto ovat myös kansilehdellä.

## Miten asiakirja linkitetään

Asiakirja linkitetään levyyn, jolla on oikeanlainen näkymä (pohjakuva, julkisivu, leikkaus), levyyn, jolla on oikea luettelo (ovien luettelo ovia varten), tai levyyn, jonka otsikko sanoo sen (levy otsikolla ”Asemapiirros”). Kun mallissa on rivit, mutta mikään levy ei sisällä luetteloa, tai tontti on piirretty, mutta mikään levy ei ole otsikoitu asemapiirrokseksi, kohta jää puuttuvaksi ja kertoo syyn.

## Hyvä tietää

- Yhdenkään viranomaisen luetteloa ei ole paikallinen ammattilainen vahvistanut. Jokainen luettelo on luettu lähteestä, johon se viittaa, sen näyttämänä päivänä, ja kirjoitettu omin sanoin. Vaatimukset muuttuvat: tarkista viranomaisen oma ajantasainen luettelo.
- Levyistä, joista vielä puuttuu jotain, tai levystä, jonka koko, suunta tai mittakaava ei ole paketin vaatima, kerrotaan **Ongelmat**-luettelossa huomautuksena. Huomautukset ovat neuvoja: ne eivät koskaan pysäytä pakettia.
- Puuttuvat asiakirjat eivät pysäytä pakettia. Ne luetellaan kansilehdellä ja tiedostossa `04-supporting-documents.csv`.
- Luettelot ovat määräyspaketeissa dataa, ei koodia: Etelä-Afrikka (National Building Regulations, sääntö A2), Kapkaupunki (Etelä-Afrikan alue lisätty kirjastosta), Englanti (kansalliset tietovaatimukset), Portland (Oregon), kuvitteellinen opetuspaketti ja yleinen luettelo, joka ei kuulu yhdellekään viranomaiselle. Kuka tahansa voi kirjoittaa paketin omalle paikkakunnalleen.
- Valintasi säilyvät mallissa, joten ne ovat siellä, kun avaat sen uudelleen, ja jokainen on yksi askel, jonka voit kumota.

Katso myös [Levyt](topic:sheets) ja [Tontti, sen päällä oleva rakennus ja sen tasot](topic:site-building-and-levels).
