---
title: Työskentely tasojen ja arkkien kanssa
summary: Sammuta piirustuksen tasoja, vaihda mallitilan ja arkkien välillä ja ymmärrä, miten arkit näyttävät mallin näkymäruuduissaan.
keywords: tasot, tason päälle ja pois, jäädytys, sulatus, arkit, asettelut, paperitila, välilehdet, näkymäruudut, tasonhallinta, la
from: a9a16b53
---

## Mitä teet

Siisti kiireisen piirustuksen näkymää sammuttamalla tasoja, ja katso sitten piirustuksen arkit yksi kerrallaan.

## Vaiheet: tasot

1. Avaa DWG- tai DXF-piirustus.
2. Etsi vasemmalla oleva {{ui:Layers}}-luettelo. Jokaisella tasolla on valintaruutu, värinäyte ja nimi.
3. Poista valinta tasolta piilottaaksesi kaiken sillä olevan.
4. Napsauta {{ui:All off}} piilottaaksesi kaikki tasot.
5. Valitse vain ne tasot, jotka haluat nähdä.
6. Napsauta {{ui:All on}} näyttääksesi kaiken uudelleen.

## Mitä pitäisi näkyä

Tasot katoavat ja ilmestyvät heti kohdissa {{ui:Model}} ja jokaisella arkilla. Tasot, jotka ovat piirustuksessa itsessään pois päältä tai jäädytettyinä, alkavat ilman valintaa.

## Vaiheet: arkit

1. Katso piirustuksen yläpuolella olevaa välilehtiriviä: {{ui:Model}} ja sen jälkeen jokainen arkki nimeltään.
2. Napsauta arkin välilehteä.
3. Katso arkkia: paperi lepää tummemmalla pöydällä, ja jokainen näkymäruutu näyttää oman osansa mallista omassa mittakaavassaan ja kulmassaan.
4. Zoomaa näkymäruutuun lukeaksesi yksityiskohtia. Zoomaat arkkia, et näkymäruutua, joten koko arkki liikkuu yhdessä.
5. Napsauta {{ui:Fit}} tai kaksoisnapsauta nähdäksesi koko arkin uudelleen.

## Miten arkit toimivat täällä

Arkki (asettelu tai paperitila) pitää piirustuskehyksen ja näkymäruutuja, jotka katsovat mallitilaan. BimCraft piirtää jokaisen näkymäruudun leikattuna sen reunaan, omassa mittakaavassaan ja kierrossaan, ja piilottaa tasot, jotka on jäädytetty kyseisessä näkymäruudussa. Jokaisen arkin ensimmäinen näkymäruutu on itse arkki, eikä sitä piirretä kahdesti.

## Yleisiä virheitä

- **Odottaa tasomuutosten tallentuvan.** Tasoasetukset vaikuttavat vain näkymään, kunnes avaat toisen tiedoston.
- **Odottaa näkymäruutukohtaista tasohallintaa.** {{ui:Layers}}-luettelo vaihtaa tason kaikkialla. Piirustuksen jäädyttämät tasot pysyvät jäädytettyinä siellä.
- **Etsii tasohakua tai tilojen tallennusta.** Ei vielä toteutettu. Luettelo on piirustuksen järjestyksessä.
- **Odottaa työskentelevänsä näkymäruudun sisällä.** Ei ole mitään aktivoitavaa: BimCraft vain näyttää arkin. Käytä {{ui:Model}}-välilehteä katsoaksesi suoraan mallitilaa.
