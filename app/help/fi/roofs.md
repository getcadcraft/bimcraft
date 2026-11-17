---
title: Katot: lappeet seinittäin, päädyt, pulpettikatot ja kattotasot
summary: Aseta jokainen katon alla oleva seinä viistoksi, päätyseinäksi tai ei mitään, käytä lappeellisen katon, päätykattojen ja pulpettikaton esiasetuksia, nosta katto pärrekorkeudella, lisää räystäslauta ja alapinta, ja piirrä yksittäisiä kattotasoja, kun automaattinen katto ei sovi.
keywords: muuta kattoa, muokkaa kattoa, valittu katto, katon ominaisuudet, kumoa katto, katto, kaltevuus, seinittäin, päätyseinä, pulpettikatto, lappe, laakso, harja, pärrekorkeus, kantapää, räystäslauta, alapinta, räystäs, sivuräystäs, ulkonema, kattotaso, kattolyhty, lyhty
from: 096084a7
---

## Mitä teet

Muotoile katto katon alla olevista seinistä. Jokaisella seinällä on oma asetus, joten yksi katto voi olla lappeellinen edestä, päätykattoinen päistään ja pysähtyä tasaisesti korkeamman seinän viereen takana. Verannan tai muun pinnan, jonka automaattinen katto ei pysty tekemään, voi piirtää kattotasona kulmista.

## Aseta katto

1. Sille kerrokselle, jonka seinät kantavat katon, napsauta {{ui:Katto}}.
2. Kirjoita **Kaltevuus** (`6/12` tai asteet, kuten `30`) ja **Ulkonema**.
3. Valitse esiasetus: **Lappeellinen katto**, **Päädyt lyhyillä sivuilla**, **Päädyt pitkillä sivuilla** tai **Pulpettikatto** (osoittimen lähin sivu on matala räystäs; muut sivut ovat päätyseiniä).
4. Jätä **Räystäslauta ja räystään alapinta** valituksi, jos haluat suljetut räystäät räystäslaudalla, tai poista valinta paljaalle katon reunalle.
5. Osoita rakennuksen sisälle: räystäs, harja, lappeet ja laaksot näkyvät pohjapiirustuksella. Napsauta.

Mikä tahansa ääriviiva käy: L-, T-, U- ja plusmuodot, vinot kulmat ja lovet. Lappeet, harjat ja laaksot löytyvät siitä, missä kattotasot kohtaavat.

## Yksi seinä kerrallaan

Valitse katto (seinien yläpuolella olevalla kerroksella, napsauta sen ääriviivan sisällä) ja katso kohtaa **Jokainen seinä** kohdassa **Ominaisuudet**. Osoittaminen rivillä merkitsee kyseisen seinän pohjapiirustukselle.

- **Viistokatto**: seinän päällä on kaltevaa kattotasoa. Kirjoita sen oma kaltevuus viereen, esimerkiksi `12/12` jyrkille päädyille `6/12`-katolla.
- **Päätyseinä**: katto päättyy pystysuoraan päätyyn tuon seinän päälle, seinä täytetään kattoon asti, ja katto jatkuu sen ohi **Päätyulkonemalla**.
- **Ei mitään (päättyy tasan)**: katto päättyy siihen seinään ilman ulkonemaa ja ilman päätyseinää, korkeamman seinän viereen.

**Päädyt**-luettelo yläosassa asettaa jokaisen seinän kerralla; **Aseta seinittäin** näkyy, kun seinät eivät enää vastaa esiasetusta.

## Muuta jo asetettua kattoa

Valitse katto, ja **Ominaisuudet** näyttää samat asetukset kuin Katto-työkalu: **Kaltevuus**, **Ulkonema**, **Päätyulkonema**, **Pärrekorkeus**, **Räystäslaudan korkeus**, **Umpinaiset räystäät** ja **Paksuus**. Jokainen muutos näkyy heti pohjapiirustuksella ja 3D-näkymässä, samoilla tarkistuksilla kuin työkalussa (80 asteen tai suurempi kaltevuus hylätään, samoin asetus, joka ei voi tehdä kattoa). Kirjoita arvo ja paina {{key:Enter}}, tai siirry pois ruudusta.

Jokainen muutos on yksi kumoamisaskel. Useat peräkkäiset muutokset samaan ruutuun (kirjoita `6/12`, sitten `7/12`, sitten `8/12`) yhdistyvät yhdeksi askeleeksi, joten yksi {{key:Ctrl}}+{{key:Z}} palauttaa katon sitä edeltäneeseen tilaan; eri ruudun muuttaminen aloittaa uuden askeleen.

## Pärrekorkeus, räystäslauta ja alapinta

- **Pärrekorkeus** on kohta, jossa kattotasot kohtaavat seinien ulkopinnan, mitattuna kerroksen lattiasta. Jätä tyhjäksi, jos haluat katon seinien päälle; kirjoita suurempi arvo kohotettua kantapäätä varten.
- **Räystäslaudan korkeus** on räystäiden ja sivuräystäiden suuntainen lauta. Kirjoita `0`, jos sitä ei ole.
- **Umpinaiset räystäät** laittavat tasaisen alapinnan jokaisen räystään alle, seinästä räystäslaudan taakse.

Jokainen taso kohtaa seinänsä pärrekorkeudella, joten eri kaltevuuksilla olevat seinät pitävät yhden pärrelinjan, ja niiden räystäät päättyvät eri korkeuksiin, kuten ne rakennettaisiin.

## Piirrä kattotaso

1. Sille kerrokselle, jonka seinillä taso lepää, avaa {{ui:Koontiversio}} ja valitse {{ui:Kattotaso}}.
2. Kirjoita **Kaltevuus** ja, jos se ei ole seinien päällä, **Räystäskorkeus**.
3. Napsauta kulmia. Ensimmäinen piirtämäsi sivu on räystäs; taso nousee siitä kohti muun muodon osaa.
4. Napsauta ensimmäistä kulmaa uudelleen, kaksoisnapsauta tai paina {{key:Enter}} lopettaaksesi. {{key:Esc}} pudottaa kulmat.

Kattotaso ei seuraa seinien muotoa. Valitse se ylemmältä kerrokselta (napsauta sen sisällä) muuttaaksesi kaltevuutta, räystäskorkeutta tai paksuutta, tai paina {{key:Delete}} poistaaksesi sen.

## Lisää kattolyhty

1. Näytä kerros, jolla katto on.
2. Avaa {{ui:Koontiversio}} ja valitse {{ui:Kattolyhty}}.
3. Asetusrivillä valitse **Lyhdyn tyyppi** (**Harjakatto** tai **Pulpettikatto**) ja aseta **Leveys**, **Etuseinä** (etuseinän korkeus katon yläpinnasta lyhdyn räystääseen), **Kaltevuus** ja **Ulkonema**.
4. Napsauta kattopinnalle kohtaan, johon lyhdyn etuosan keskikohta menee.

BimCraft rakentaa etuseinän, kaksi poskiseinää ja lyhdyn katon, ja ajaa sen takaisin, kunnes se kohtaa katon. Harjakattolyhdyssä on kaksi tasoa, jotka kohtaavat harjalla. Pulpettikattolyhdyssä on yksi taso, jonka on oltava loivempi kuin katto. Katto lyhdyn alla leikataan pois. Lyhty seuraa kattoa, kun seinät liikkuvat.

Valitse lyhty muuttaaksesi sen tyyppiä, leveyttä, etuseinää, kaltevuutta tai ulkonemaa **Ominaisuudet**-kohdassa. {{key:Delete}} poistaa sen ja sulkee katon uudelleen. Sen täytyy mahtua yhdelle kattopinnalle, poissa lappeista, laaksoista ja harjasta. Lyhtyjä ottavat vain {{ui:Katto}}-työkalulla tehdyt katot, ei käsin piirrettyjä kattotasoja. Ei vielä toteutettu: ikkuna lyhdyn etuseinässä ja lyhdyt käsin piirretyillä kattotasoilla.

## Mitä tallennetaan

Katot ovat IFC-kattoja: yksi kattolaatta per taso, päätyseinät, yksi räystäslautaosa ja yksi alapinnan peite. Katto kantaa harjansa, lappeidensa, laaksojensa, räystäiden ja sivuräystäiden pituudet sekä pinta-alansa määrälaskentaa varten. Kattotaso on IFC-katto yhdellä laatalla.

:::tip
Kumoa palauttaa minkä tahansa katon muutoksen yhdellä askeleella, myös esiasetuksen, joka muuttaa jokaista seinää.
:::
