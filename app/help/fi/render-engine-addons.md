---
title: Lisää renderöintimoottori lisäosalla
summary: Mitä lisäosa voi lisätä Renderöi-valintaikkunan Moottori-luetteloon, mikä lupa sen tarvitsee ohjelman suorittamiseen ja mitä Studio tarkistaa ja kysyy.
keywords: lisäosa, addon, moottori, renderöintimoottori, kehittäjä, engine.run, lupa, ohjelma, skripti, allekirjoitettu, studio, api
from: 06295376
---

Lisäosa (Asetukset › Lisäosat) voi lisätä moottorin kohteen {{ui:Renderöi}} Moottori-luetteloon. Lisäosan tekijöiden täydellinen teksti on lisäosaspesifikaation luvussa 16; lyhyesti:

- Lisäosa rekisteröi moottorin, jonka tunnus alkaa lisäosan omalla tunnuksella, sekä nimen, valinnaiset asetukset ja **joko** ohjelman, jonka se suorittaa, **tai** JavaScript-funktion, joka piirtää kuvan.
- Moottori, joka suorittaa ohjelman, tarvitsee luvan **`engine.run`**, joka näytetään ennen asennusta ja asetuksissa. Se toimii vain Studiossa; selaimessa se näkyy tiedostona, joka tallennetaan.
- Lisäosa nimeää ohjelman (pelkkä tiedostonimi, ei komentotulkkia), skriptin, joka on **allekirjoitetun lisäosan sisällä**, ja argumentit, jotka koostuvat paikanvaraajista ja tavallisista sanoista. Studio löytää ohjelman tai pyytää osoittamaan sen kerran.
- Kun lisäosa suorittaa ohjelman ensimmäisen kerran, **Studio kysyy omassa valintaikkunassaan**: mikä lisäosa, mikä ohjelma ja että skripti voi tehdä mitä tahansa, mitä ohjelma voi. Salli vain lisäosa, johon luotat. Vastaus muistetaan kyseiselle lisäosalle ja ohjelmalle.
- Paketti (näkymä USD-tiedostona ja asetustiedostona, glTF-tiedoston kanssa, kun lisäosa sitä pyytää) ja lisäosan skripti siirretään uuteen väliaikaiseen kansioon, ohjelma suoritetaan siellä, ja kuva palautuu merkittynä lisäosan moottorin nimellä.

:::note
Lisäosat voivat lisätä renderöintimoottoreita vain lisäosa-API:sta 1.4 alkaen. Avoimen lähdekoodin komentorivirenderöijän toimiva esimerkki on omassa tietovarastossaan; sitä ei ole vielä ajettu siinä renderöijässä.
:::
