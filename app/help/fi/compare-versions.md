---
title: Vertaa mallin kahta versiota
summary: Avaa saman IFC-mallin kaksi versiota ja näe, mitkä elementit on lisätty, poistettu ja muutettu. Vertailu tehdään GlobalId-tunnusten perusteella, ja jokaisesta muutoksesta saa CSV-tiedoston.
keywords: vertaa, diff, ero, erot, versiot, revisio, muutokset, lisätty, poistettu, muutettu, siirretty, globalid, guid, mikä muuttui
from: cfca6971
---

## Mitä teet

Näet, mikä muuttui aiemman mallin ja lähetetyn version välillä: mitkä elementit ovat uusia, mitkä ovat poistuneet, mitkä ovat siirtyneet tai saaneet uusia ominaisuusarvoja.

## Vaiheet

1. Avaa uudempi versio, napsauta {{ui:Lisää malli…}} ja valitse vanhempi. Katso [Tarkastele useita IFC-malleja yhdessä](topic:several-models).
2. Avaa {{ui:Mallit}}-kohdasta {{ui:Vertaa versioita}}.
3. Valitse {{ui:Vanhempi versio}} ja {{ui:Uudempi versio}}.
4. Napsauta {{ui:Vertaa}}.
5. Napsauta listan elementtiä valitaksesi sen ja nähdäksesi sen ominaisuudet. Napsauta {{ui:Lataa CSV}} saadaksesi kaikki muutokset ominaisuus kerrallaan.
6. Palaa tavalliseen näkymään napsauttamalla {{ui:Tyhjennä}}.

## Mitä pitäisi näkyä

- **Lisätyt** elementit sinisinä, uudemmasta versiosta.
- **Poistetut** elementit punaisina, vanhemmasta versiosta.
- **Muuttuneet** elementit keltaruskeina, uudemmasta versiosta. Jokainen kertoo, mikä muuttui: ominaisuudet, siirto ja kuinka paljon, tai uusi muoto.
- Kaikki samat elementit näkyvät läpinäkyvinä.

## Hyvä tietää

- Elementit yhdistetään GlobalId-tunnuksen perusteella. Ohjelma, joka antaa elementeille uudet GlobalId-tunnukset joka viennillä, saa kaikki elementit näyttämään poistetuilta ja uudelleen lisätyiltä.
- Sijainnit verrataan siinä kohdassa, johon mallit sijoittuvat näkymässä. Jos toinen versio on siirretty tarkoituksella, asemoi mallit ensin {{ui:Siirrä}}-toiminnolla kohdassa {{ui:Mallit}}.
- Malli, jossa sama GlobalId esiintyy kahdesti, jätetään vertailun ulkopuolelle. [Tarkista malli yleisten ongelmien varalta](topic:model-checks) löytää ne.

## Seuraavaksi

- [Havainnot ja BCF-tiedostot](topic:issues-bcf)
- [Laske määrät yhteen ominaisuuden mukaan](topic:quantity-totals)
