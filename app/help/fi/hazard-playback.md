---
title: Toista tulva, tuuli tai maanjäristys rakennuksella
summary: Veden nousu huoneiden läpi, tuulen paine kussakin kerroksessa tai maanjäristys, joka ravistelee kerroksia, toistettuna pohjakuvassa tai julkisivussa aikaliukusäätimellä. Yksinkertaisia malleja, joiden oletukset on lueteltu; ei määräystarkistus eikä rakennesuunnittelu.
keywords: vaara, tulva, tuuli, maanjäristys, seismiikka, siirtymä, heilunta, pohjaleikkausvoima, vedenpinta, ilmasto, skenaario, merenpinta, toisto, kerros, jaksonaika
from: ff0d34d1
---

Vasemman paneelin osio {{ui:Vaaran toisto}} toistaa vaaran avoimessa IFC-mallissa. Mallissa ei muuteta mitään.

:::warning
Nämä ovat **yksinkertaisia malleja, joilla nähdään, mitä vaara tekee tälle asettelulle**, eivät tulvatutkimus, tuulimääräystarkistus eikä rakennesuunnittelu. Jokaisen tuloksen oletukset on lueteltu.
:::

## Tulva

Aseta korkein vedenpinta alimman lattian yläpuolelle sekä minuutit nousulle, pidolle ja laskulle. Vesi tulee huoneeseen aukosta, jonka kynnyksen se on ylittänyt, ja huoneet, jotka on yhdistetty vettyviin huoneisiin vedenpinnan alapuolella olevilla aukoilla, ovat samassa tasossa (kvasistaattinen). Taulukosta näkyy, milloin kukin huone kastuu ensimmäisen kerran ja kuinka syvälle; pohjakuva toistaa sen. Kirjoita, kuinka paljon vettä huone saa ottaa vastaan, ja sen yli menevistä huoneista tulee varoituksia. **Ilmastoskenaariot:** lataa oma skenaariotiedosto (JSON tai CSV, jossa on vuosi, merenpinnan nousu ja tulvakerroin) ja valitse vuosi. Tai ota käyttöön Ilmastoskenaariot-lisäosa ja valitse skenaario ja vuosi: tulva ajetaan kahdesti, nykyinen rinnan tulevan kanssa (katso ”Ilmastoskenaariot: 2050 ja 2080 tulva, helle ja metsäpalo”). Lajit Metsäpalolle altistuminen ja Helle: tuleva säätiedosto ovat samassa luettelossa.

## Tuuli

Paine noudattaa kaavaa ½ρV², ja nopeus kasvaa korkeuden mukana. Kerrokseen kohdistuva voima on tämä paine kerrottuna puuskakertoimella, kahdella painekertoimella, leveydellä ja kerroksen korkeudella. Tuloksena saat leikkausvoiman, kaatavan momentin ja heilunnan.

## Maanjäristys

Leikkausrakennus: massa kerrosta kohden (pohjapinta × kilogrammaa neliömetriä kohden, jonka asetat), sama jäykkyys jokaisessa kerroksessa sovitettuna antamaasi ensimmäiseen jaksonaikaan (kymmenesosa sekunnista kerrosta kohden, jos jätät kentän tyhjäksi, ja järjestelmä ilmoittaa sen), vaimennus sekä mallinnettu maaperän liike (pulssi tai suodatettu kohina) valitsemallasi huippukiihtyvyydellä. Tuloksena on kunkin kerroksen siirtymä, kerrosten kiihtyvyydet ja pohjaleikkausvoima; julkisivu toistaa heilunnan, piirrettynä todellista suurempana. Kirjoita sallima siirtymäsuhde, ja sen yli menevistä kerroksista tulee varoituksia. Malli on kimmoinen: mikään ei myötää eikä halkeile.

## Kerrosten jäykkyys analyysikehyksestä

Maanjäristystä tai tuulen heilunnan laskemista varten valitse jäykkyyden lähteeksi **Analyysikehys** jaksonajan kirjoittamisen sijaan. Jokaista kerrosta työnnetään vuorollaan sivusuunnassa, kehys (palkit, pilarit, jäykisteet, laatat) ratkaistaan, ja kerrosten jäykkyys kaikkien toimiessa yhdessä ohjaa ajoa. Paino on jäsenten oma paino sekä kerroksen pohjakuvaruutuun asettamasi kerroskuorma neliömetriä kohden. Todellinen ensimmäinen jaksonaika näytetään. Malli on kimmoinen: mikään ei myötää, eikä vääntöä mallinneta. Tuulen osalta kerrosvoimat ovat yhä yllä kuvatut oletetut (potenssilakiprofiili, puuskakertoimesi ja kiinteät painekertoimet, ei tuulimääräys); vain heilunta tulee kehyksestä, ratkaisemalla kehyksen täysi jäykkyysmatriisi näitä voimia vastaan. Malli tarvitsee IFC-tiedoston, jossa on kehys, jonka välilehti Analyysi osaa lukea.

## Yksiköt

Vedensyvyydet, kerroskohtainen heilunta ja siirtymä, etäisyydet ja pinta-alat näkyvät valitsemissasi yksiköissä ({{ui:Yksiköt}}). Voimat (kN), ajat ja kiihtyvyydet säilyttävät omat yksikkönsä, ja metreissä nimetyssä ruudussa kirjoittamasi arvo pysyy metreinä. Sama koskee evakuointi-, päivänvalo-, lämmitys- ja jäähdytys- sekä kalustustuloksia: pituudet, pinta-alat ja tilavuudet seuraavat valintaasi; paine, virtaus, lämpötila, energia ja teho eivät muutu koskaan.
