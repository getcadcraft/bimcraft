---
title: Valitse, mikä ohjelma piirtää kuvan
summary: Moottori-valinta Renderöi-valintaikkunassa: omat kaksi moottoriamme, muut ohjelmat CadCraft Studiossa ja mitä verkko tekee sen sijaan.
keywords: renderöinti, moottori, renderöijä, renderöintimoottori, liitännäinen, plugin, studio, ulkoinen ohjelma, piirtää, jono, lisäosan moottori
from: 44a1ef5e
---

Renderöi-valintaikkunassa on **Moottori**-valinta Muoto-kohdan yläpuolella. Omat kaksi moottoriamme ovat aina käytettävissä ja toimivat kaikkialla; lisäosat voivat lisätä muita, ja CadCraft Studiossa luettelossa ovat myös ohjelmat, jotka ottavat mallin haltuunsa.

| Moottori | Mitä se tekee | Missä |
|---|---|---|
| Sisäänrakennettu: Nopea | Nopea kuva: päivänvalo, pehmeät varjot, lasi- ja metallipinnat sekunneissa | Selaimessa ja Studiossa |
| Sisäänrakennettu: Polunseuranta | Valo heijastuu pintojen välillä näytönohjaimella tai prosessorilla, renderöintijono ja verkon muut tietokoneet | Selaimessa ja Studiossa |
| Lisäosan moottori | Se piirtää kuvan ja palauttaa sen: katso [Piirrä kuva toisella ohjelmalla](topic:render-other-program) | Selaimessa (JavaScriptillä kirjoitettu moottori) tai Studiossa (moottori, joka suorittaa ohjelman) |
| Ohjelma, joka ottaa mallin haltuunsa | Studio laittaa mallin kansioonsa ja pitää sen ajan tasalla | Studio |
| Avaa ohjelmassa … | Tallentaa mallin ja avaa sen ohjelmassa; mitään ei palaa takaisin: katso [Avaa malli toisessa ohjelmassa](topic:render-open-in) | Verkossa tallentaa tiedoston |

## Miten valinta toimii

- Nopean tai Polunseurannan valinta vaihtaa myös Muodon, ja toisin päin. Mikään muu valintaikkunassa ei muutu niille, jotka eivät käytä muuta moottoria.
- Moottori, joka ei ole käytettävissä, pysyy luettelossa syyn kanssa (”ei löydy”, ”vaatii uudemman version”); sitä ei voi valita. Selaimessa moottori, joka toimii vain Studiossa, näyttää ”tallentaa tiedoston”: {{ui:Renderöi}} tallentaa silloin mallin ja sen asetukset tiedostoon, jonka viet kyseiseen ohjelmaan.
- Valinta tallentuu tiedoston renderöinnin asetusten mukana, ja viimeksi valittu moottori on lähtömoottori tiedostoille, joilla ei ole omaa valintaa.
- Toisesta ohjelmasta tuleva kuva kertoo valintaikkunassa ja renderöintijonossa, mikä ohjelma sen piirsi ja mikä versio. Sivun [Renderöi](topic:render) lupaukset koskevat **omia** moottoreitamme vain: toinen ohjelma valaisee, sävyttää ja ottaa näytteitä omalla tavallaan, joten kaksi kuvaa samasta mallista ovat kameran, auringon, lamppujen ja valotuksen osalta samankaltaisia, mutta eivät pikseli pikseliltä samoja.

## Mitä jokainen moottori saa

Malli menee toiseen ohjelmaan **pakettina**: malli USD-tiedostona (sama tiedosto kuin [Tallenna USD-tiedostona](topic:usd) kirjoittaa) ja asetustiedosto, johon kerätään se, mihin USD-tuoja ei voi luottaa: tarkat materiaaliarvot, lamput, jotka ovat päällä, tehoineen ja valoprofiileineen, aurinko, taivas, valotus ja kamera niin kuin valintaikkuna sen piirtäisi. Mitään ei lähetetä minnekään.

## Renderöintijono

Kuva toiselle ohjelmalle voi odottaa [renderöintijonossa](topic:render#the-render-queue) kuten omatkin; sen työ muistaa, mille moottorille se on.
