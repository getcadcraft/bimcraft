---
title: DWG- tai DXF-piirustuksen katsominen 3D:nä
summary: Vaihda piirustuksen mallitila 3D:ksi nähdäksesi korkeudet, paksuudet, 3D-pinnat, verkot ja lohkot, kierrä sen ympäri, napsauta kohdetta nähdäksesi sen ominaisuudet ja katso, mitä ei vielä piirretä.
keywords: 3d, dwg, dxf, piirustus, mallitila, kierto, leikkaus, leikkaustaso, rajaus, valinta, ominaisuudet, attribuutit, kahva, korkeus, paksuus, pursotus, 3dface, polyface, verkko, 3d-murtoviiva, lohkot, näkymät, perspektiivi, yhdensuuntainen, laajuus, acis, kappaleet
from: a0c6cd17
---

## Mitä teet

Katso piirustuksen mallitilaa 3D:nä. Viivat ja murtoviivat ovat todellisilla korkeuksillaan, paksuuden omaavat kohteet nousevat seininä, ja 3D-pinnat, verkot ja 3D-lohkot näkyvät pintoina, joiden ympäri voit kiertää. Arkit pysyvät 2D:nä.

## Vaiheet

1. Avaa DWG- tai DXF-tiedosto. Katso [Katso DWG- tai DXF-piirustus](topic:view-dwg). Se avautuu 3D:nä, ellei {{ui:Settings}} › {{ui:BimCraft}} › **Piirustukset avautuvat** sano {{ui:Model (2D)}}.
2. 2D-tilasta napsauta piirustuksen yläpuolella olevaa palkkia {{ui:3D}}, tai paina {{key:3}}.
3. Odota hetki ensimmäisellä kerralla: tilarivi kertoo "Rakennetaan piirustusta 3D:nä …" ja sen jälkeen, kuinka monta viivaa ja pintaa se näyttää.
4. Kierrä, panoroi ja zoomaa (katso alla oleva taulukko).
5. Napsauta näkymää toisella palkilla: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} tai {{ui:Right}}.
6. Napsauta {{ui:Perspective}} vaihtaaksesi perspektiivin ja yhdensuuntaisen näkymän välillä.
7. Napsauta {{ui:Extents}} tai paina {{key:F}} nähdäksesi koko piirustuksen uudelleen.
8. Napsauta {{ui:3D}} uudelleen, paina {{key:3}}, tai napsauta {{ui:Model}}- tai arkkivälilehteä palataksesi 2D:hen.

## Mitä pitäisi näkyä

- Mallitila 3D:nä, Z ylöspäin, piirustuksen omilla väreillä. Pinnat ovat hieman vaaleampia kuin niiden reunat.
- Tasot, jotka sammutat kohdassa {{ui:Layers}}, katoavat myös 3D-näkymästä.
- Oikealla: viivojen ja pintojen määrä, piirustuksen koko X-, Y- ja Z-suunnassa, **Vain 2D-näkymässä** ja **Ei vielä piirretty**.

## Leikkaa leikkaustasolla

Napsauta 3D-palkin {{ui:Section}}-painiketta tai paina {{key:X}}. Sen alla oleva palkki toimii kuten IFC-malleissa (katso [Leikkaa IFC-malli leikkaustasolla](topic:section-plane)): leikkaa {{ui:Top}}-, {{ui:Front}}- tai {{ui:Side}}-suunnasta, vedä tai kirjoita siirtymä (tässä piirustuksen omissa yksiköissä) ja käytä {{ui:Flip}}-painiketta pitääksesi toisen puolen. Leikkauksen poistama osa ei ole valittavissa. Paluu 2D:hen poistaa leikkauksen.

## Katso kohteen ominaisuudet

Napsauta kohdetta 3D-näkymässä. Se saa valintavärin, ja {{ui:Properties}} näyttää, mitä tiedosto sanoo siitä: tyypin, tason, värin, viivatyypin ja kahvan. Sitten tulevat sen omat tiedot, kuten viivan alku, loppu ja pituus, ympyrän keskipiste ja säde, 3D-pinnan kulmat tai lohkoviittauksen lohko, lisäyspiste, mittakaava, kierto ja attribuuttiarvot.

- Lohkoviittaus valitaan kokonaisena, siinä olevat sisäkkäiset lohkot mukaan lukien.
- Muutaman pikselin päästä viivasta napsauttaminen valitsee viivan.
- Pidä {{key:Mod}} pohjassa ja napsauta valitaksesi lisää kohteita tai poistaaksesi yhden. {{ui:Properties}} laskee ne sitten tyypin mukaan.
- {{key:Esc}} tai napsautus tyhjään kohtaan poistaa valinnan.
- Kohteita sammutetuilla tasoilla ei voi valita.

## Liikkuminen

:::mouse
| Tee | Tee näin |
|---|---|
| Kierrä | Vedä keskipainikkeella tai vasemmalla painikkeella |
| Panoroi | Vedä oikealla painikkeella tai pidä {{key:Shift}} pohjassa ja vedä |
| Zoomaa | Vieritä rullaa; zoomaus kohdistuu osoittimen alla olevaan kohtaan |
| Näytä kaikki | {{ui:Extents}} tai {{key:F}} |
| Katso sivulta | Napsauta näkymäkuution pintaa, reunaa tai kulmaa oikeassa alakulmassa |
:::

Näkymäkuution voi vaihtaa akselikuvakkeeseen tai piilottaa kohdassa {{ui:Settings}}. Katso [BimCraftin asetukset](topic:settings).

:::mac mouse
Trackpadilla pyyhkäise kahdella sormella kiertääksesi, pidä {{key:Shift}} pohjassa ja pyyhkäise panoroidaksesi, ja nipistä zoomataksesi.
:::

:::touch
Vedä yhdellä sormella kiertääksesi. Nipistä kahdella sormella zoomataksesi ja liikuta niitä yhdessä panoroidaksesi.
:::

## Mitä piirretään 3D:nä

| Piirustuksessa | 3D:nä |
|---|---|
| Viivat, 3D-murtoviivat | Todellisilla korkeuksillaan |
| Murtoviivat, ympyrät, kaaret, ellipsit | Omassa tasossaan ja korkeudellaan, kallellaan, kun piirustus kallistaa niitä |
| Paksuus viivoissa, murtoviivoissa, ympyröissä ja kaarissa | Seiniä tuon korkuisina; ympyrät suljettuina ylhäältä ja alhaalta |
| 3D-pinnat, polyface-verkot, monikulmioverkot | Varjostettuja pintoja näkyvine reunoineen |
| Lohkot | Sijoitettuina, käännettyinä ja skaalattuina 3D:ssä, sisäkkäiset lohkot mukaan lukien |
| Täytöt | Niiden ääriviivat |
| Tavallinen 2D-viivapiirros | Tasaisena, siihen missä se piirrettiin |

## Vain 2D-näkymässä

Teksti, monirivinen teksti ja lohkojen näkyvät attribuutit piirretään 3D:ssä omassa tasossaan ja omalla korkeudellaan, ja napsautus niihin valitsee ne. Leveät murtoviivat näyttävät leveytensä tasaisena nauhana. Monijohtoviivat, kuvat ja täyttökuviot lasketaan kohtaan **Vain 2D-näkymässä**: katso ne välilehdeltä {{ui:Model}} tai arkeilta.

## Ei vielä piirretty

ACIS-kappaleina tallennetut kiinteät kappaleet ja pinnat (3D-kappaleet, kappaleet, alueet ja pinnat) sekä jaetut verkot luetellaan kohdassa **Ei vielä piirretty** lukumäärineen. Ne ohitetaan, eikä niitä arvata.

## Yleisiä virheitä

- **Kaikki näyttää litteältä.** Piirustus on 2D: sen viivoilla ei ole korkeutta. Napsauta {{ui:Front}} tarkistaaksesi; litteä piirustus näkyy viivana.
- **Kiinteä malli ei näy mitään.** Kiinteä mallintaja tekee ACIS-kappaleita, jotka luetellaan kohdassa **Ei vielä piirretty**. Vie malli IFC-tiedostona tai 3D-pintoina siitä ohjelmasta, joka sen teki.
- **Piirustus on pieni klusteri keskellä.** Jokin kaukana mallitilassa, kuten vanha kopio pohjakuvasta, kasvattaa laajuutta. Zoomaa rullalla siihen kohtaan, jota haluat tarkastella.

## Seuraavaksi

- [Työskentely tasojen ja arkkien kanssa](topic:dwg-layers-sheets)
- [Leikkaa IFC-malli leikkaustasolla](topic:section-plane)
