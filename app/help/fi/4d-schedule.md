---
title: Näytä rakennusaikataulu mallilla
summary: Avaa tehtävälista CSV-tiedostona, yhdistä jokainen tehtävä rakennusosiin ominaisuuden perusteella ja siirry päivämäärien läpi nähdäksesi, mikä on rakennettu, työn alla ja vielä aloittamatta.
keywords: 4d, aikataulu, rakennusjärjestys, aikajana, vaiheistus, ohjelma, gantt, tehtävät, päivämäärät, simulointi, edistyminen, rakennettu, csv, vaihe, työpaketti, wbs, ryhmä
from: 1b985a64
---

## Mitä teet

Seuraat rakennuksen valmistumista: aikataulusi jokainen tehtävä on yhdistetty rakennusosiin, jotka se rakentaa, ja näytetään päivä kerrallaan.

## Vaiheet

1. Avaa IFC-malli ja avaa {{ui:4D-aikataulu}} vasemmassa paneelissa.
2. Napsauta {{ui:Lataa pohja}} saadaksesi tehtävälistan, jossa on viikko per kerros, ja muokkaa sitä taulukkolaskennassa. Tai kirjoita oma.
3. Napsauta {{ui:Avaa tehtäväluettelo…}} ja valitse CSV.
4. Vedä päivämäärän liukusäädintä tai napsauta {{ui:Toista}}.

## Tehtävälista

CSV-tiedosto, jossa on otsikkorivi ja sarakkeet **Task**, **Start**, **Finish**, **Field** ja **Value**. Pilkut tai puolipisteet kelpaavat molemmat.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Kirjoita päivämäärät muodossa YYYY-MM-DD.
- Rivi yhdistää tehtävän jokaiseen elementtiin, jonka **Field**-kentän arvo on täsmälleen **Value**. Kenttä on ominaisuus, kuten Storey, Class, Name, Type, Material, Tag tai GlobalId, tai mikä tahansa ominaisuus joukkonsa ja nimensä mukaan: `Pset_WallCommon.FireRating`.
- Toista tehtävä useammalla rivillä samoilla päivämäärillä, jos haluat yhdistää siihen useampia elementtejä.

## Vaiheet ja työpaketit

Lisää **Stage**-sarake, **Package**-sarake tai molemmat, jotta tehtävät ryhmittyvät vaiheisiin ja työpaketteihin. Myös Phase ja WBS toimivat sarakenimina.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Tehtävä kuuluu yhteen vaiheeseen ja yhteen pakettiin. Jos saman tehtävän myöhempi rivi nimeää toisen, rivi luetellaan rivinumeronsa kanssa ja jätetään pois.
- Sama paketin nimi kahdessa vaiheessa tarkoittaa kahta pakettia.

Kun listassa on ryhmiä, päivämäärän yläpuolelle ilmestyy {{ui:Näytä}}-luettelo. Valitse vaihe tai paketti, ja se toistetaan yhtenä kokonaisuutena:

- liukusäädin ja {{ui:Toista}} kulkevat ryhmän ensimmäisestä alkupäivästä viimeiseen päättymispäivään,
- vain ryhmän tehtävät luetellaan ja väritetään, ja kaikki ryhmän ulkopuolella oleva on läpinäkyvää,
- luettelon alla oleva rivi kertoo, kuinka monta sen tehtävää on valmiina, työn alla ja tulossa kyseisenä päivänä,
- {{ui:Valitse sen rakennusosat}} valitsee kaikki ryhmän elementit {{ui:Näytä}}-, {{ui:Leikkaus}}- tai taulukkotoimintoa varten.

Valitse **Kaikki tehtävät** nähdäksesi koko aikataulun uudelleen.

## Mitä pitäisi näkyä

- **Rakennettu**: elementit, joiden tehtävät ovat kaikki valmiita, omilla väreillään.
- **Työn alla**: elementit, joilla on sinä päivänä käynnissä oleva tehtävä, okran värisinä. Tehtävä on työn alla alkupäivästä päättymispäivään.
- **Aloittamatta**: läpinäkyvä.
- Elementit, joilla ei ole tehtävää, pysyvät ennallaan. Luettelo näyttää, kuinka monta elementtiä kukin tehtävä löysi. Rivit, joita ei voitu lukea tai jotka eivät löytäneet mitään, luetellaan rivinumeroineen.

## Linkit, Gantt-kaavio ja MS Project

- Avaa Microsoft Project XML -tiedosto (`.xml`) tai CSV, jossa on sarake `Predecessors`. Linkit voivat olla valmistumisesta alkuun, alusta alkuun, lopusta loppuun tai alusta loppuun, kukin ennakolla tai viiveellä päivissä.
- Tehtävälistan alla Gantt-kaavio piirtää jokaisen tehtävän palkkina ja linkit nuolina. Kriittisen polun tehtävät ovat punaisia. Linkkisilmukka tai olematon edeltäjä luetellaan paneelissa.
- {{ui:Tallenna MS Project XML:nä}} ja {{ui:Tallenna CSV linkkeineen}} kirjoittavat aikataulun takaisin linkkeineen.

## Seuraavaksi

- [Etsi elementit luokan, nimen tai ominaisuuden mukaan](topic:find)
- [Väritä elementit ominaisuuden mukaan](topic:color-by-property)
