---
title: Mitoita akselisto
summary: Näytä vierekkäisten akselilinjojen väli ja akseliston kokonaiskoko jokaisen kerroksen pohjakuvassa. Mitat tallentuvat IFC-tiedostoon ja seuraavat akselistoa, kun linjoja muutetaan.
keywords: mitoitus, akselisto, akselit, väli, jänneväli, kokonaiskoko, kuplat, pilariakselisto, pohjakuva, arkki
from: aaea5d08
---

## Mitä teet

Lisää akselilinjojen väli ja akseliston kokonaiskoko pohjakuviin kuplien ulkopuolelle, jotta niistä tehdyt arkit sisältävät mitat. Tarvitset ensin akseliston: katso [Akselisto ja pilarit](topic:grids-and-columns).

## Vaiheet

1. Näytä kerroksen pohjakuva ja valitse {{ui:Akselisto}} ottaaksesi akselistotyökalun käyttöön. Akseliston asetusrivi näkyy.
2. Valitse {{ui:Mitoitus}}. Pohjakuvaan piirretään vierekkäisten numeroitujen akselilinjojen väli, vierekkäisten kirjainakselilinjojen väli sekä akseliston kokonaiskoko kumpaankin suuntaan.
3. Valitse toinen kerros: samat mitat näkyvät sen pohjakuvassa.
4. Siirrä viivaa, nimeä yksi uudelleen tai lisää uusi. Mitat seuraavat akselistoa.
5. Poista valinta kohdasta {{ui:Mitoitus}}, jolloin mitat poistuvat.

## Huomautuksia

- Jokainen muutos on yksi kumoamisvaihe: {{key:Mod+Z}} kumoaa sen.
- Asetus tallentuu IFC-tiedostoon akseliston mukana, ja arkeille sijoitetut pohjakuvat sisältävät mitat.
- Jos mallissa ei ole muutettavissa olevaa akselistoa (toisesta ohjelmasta tuodun tiedoston akselistoa ei voi muuttaa täällä), tilarivillä lukee ”Muutettavaa akselistoa ei ole.”
