---
title: Julkisivut, leikkaukset ja arkit
summary: Piirrä leikkausviivat pohjakuvaan ja avaa sitten Arkit: tulostusvalmis sarja mallista, eli jokaisen tason pohjakuvat, neljä julkisivua, rakennusleikkaukset, luettelot ja runkoseinät piirustusotsikoin ja mittakaavoin yhtenä PDF:nä.
keywords: arkit, piirustussarja, rakennussuunnitelmat, tulostus, plottaus, PDF, julkisivu, julkisivut, pohjoisjulkisivu, leikkaus, rakennusleikkaus, leikkausviiva, piilotetut viivat, piirustusotsikko, arkkinumero, mittakaava, 1/4" = 1'-0", 1:50, 1:100, paperi, 11x17, 24x36, A3, A1, lupasarja
from: 91ed0cde
---

## Mitä teet

Tee piirustussarja mallista: jokaisen tason pohjakuva, pohjois-, itä-, etelä- ja länsijulkisivu, rakennusleikkaus jokaiselle leikkausviivalle, ovien, ikkunoiden, huoneiden ja puutavaran luettelot sekä jokaisen runkoseinän julkisivu. Sarja piirretään uudelleen mallista joka kerta, kun avaat sen, joten se vastaa aina rakentamaasi.

## Piirrä leikkausviiva

1. Avaa taso, valitse {{ui:Koontiversio}} ja valitse {{ui:Leikkausviiva}}.
2. Napsauta, mistä viiva alkaa ja mihin se päättyy. Lyhyt viiva sen keskellä näyttää puolen, jonne leikkaus katsoo: viivan vasemman puolen, kun kuljetaan ensimmäisestä napsautuksesta toiseen.
3. Viiva näkyy pohjakuvassa päillään ja kirjaimellaan (A, sitten B, ja niin edelleen).

Valitse viiva ja muuta sitä **Ominaisuudet**-kohdassa: kirjainta, **Käännä näkymä** katsoaksesi toiseen suuntaan, ja **Katso enintään** pysäyttää näkymän asetetun matkan päähän leikkauksen takana (0 näyttää kaiken sen takana). Poista viiva painamalla {{key:Delete}}.

## Avaa arkit

1. Napsauta {{ui:Arkit}} mallipalkissa ({{ui:Tulosta}}n vieressä).
2. Arkit luetellaan vasemmalla: **A-101** ja sen jälkeen pohjakuvat, **A-201** julkisivuille, **A-301** leikkauksille, **A-401** luetteloille ja **S-101** runkoseinille. Napsauta yhtä nähdäksesi sen.
3. Valitse **Paperi**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 tai A1. Paperi säilyttää vakionimensä, ja sen koko kirjoitetaan valitsemissasi {{ui:Yksiköt}}-yksiköissä, esimerkiksi *Letter · 8.5 × 11 in* tai *A3 · 297 × 420 mm*.
4. Napsauta {{ui:Lataa sarja PDF:nä}}: yksi sivu arkkia kohden.

## Vakiomerkinnät säännöstöpaketista

Arkilla {{ui:Vakiomerkinnät}} voit sijoittaa merkintöjä säännöstöpaketista (alan mukaan) arkin oikeanpuoleiseen sarakkeeseen. Jokainen merkintä säilyttää paketin ja kohdan, josta se tuli, ja tulostettu arkki kertoo, kun paketti on tarkistamaton. Merkinnät ovat lähtökohta: piirustuksesta vastaava henkilö päättää, mitä ne sanovat. Ne tarvitsevat Rakennusmääräykset-lisäosan.

## Mitä arkeilla on

- **Pohjakuvat** näyttävät seinät, ovet, ikkunat, huoneet pinta-aloineen, mitat ja leikkausviivat suurimmassa vakiomittakaavassa, joka mahtuu: 1/4" = 1'-0" tai pienempi (1:50 tai pienempi millimetreinä).
- **Julkisivut** piirretään 3D-mallista piilotetut viivat poistettuina, kaksi arkille, kaikki samassa mittakaavassa, ja maanviiva niiden alla. Katto, perustukset ja maanpinta näkyvät mallinnettuina.
- **Leikkaukset** täyttävät sen, minkä leikkaus läpäisee (seinät, lattiat, katto), ja piirtävät sen, mikä näkyy leikkauksen takana.
- **Julkisivut ja leikkaukset kantavat merkintänsä:** jokaiselle tasolle merkki, jossa nimi ja korkeus oikealla, tasojen välinen korkeus vasemmalla, ja julkisivulla rakennuksen leveys sen alla sekä tunniste (D1, W1) jokaiselle sinua kohti päin olevan seinän ovelle ja ikkunalle. Huoneen omista seinistä katso [Sisäjulkisivut](topic:interior-elevations).
- **Luettelot** ovat samoja taulukoita kuin mallipalkin {{ui:Luettelot}}.
- **Runko** näyttää kunkin runkoseinän pystytolpat, rimat, yläpuomit ja alapuomit ulkopuolelta katsottuna, jotta työryhmä voi asetella ne. Katso [Seinien, lattioiden ja kattojen runko](topic:framing).

Jokaisessa arkissa on piirustusotsikko, jossa ovat sen numero, nimi, tiedoston nimi ja päivämäärä.

:::tip
Arkit tulevat mallista: jos haluat muuttaa piirustusta, muuta mallia ja avaa {{ui:Arkit}} uudelleen.
:::

:::note
Julkisivuissa ja leikkauksissa näkyvät vain viivat ja täytöt: mitat, tasomerkit ja merkinnät niissä eivät ole vielä toteutettu.
:::
