---
title: Muokkaa julkisivuissa ja leikkauksissa, arkkikoot, piirustuskehykset ja nimeäminen
summary: Siirrä seiniä, ovia, ikkunoita ja kerroksia sekä piirrä seiniä, aukkoja, kerroksia, mittoja ja huomautuksia suoraan julkisivussa tai leikkauksessa. Pidä omat arkkikoot ja piirustuskehykset datana ja nimeä perheitä, kokoja ja elementtejä uudelleen projektiselaimesta.
keywords: uusi kerros julkisivussa, mitta julkisivussa, muokkaa julkisivussa, muokkaa leikkauksessa, julkisivunäkymä, leikkausnäkymä, siirrä seinää julkisivussa, ikkunan alareuna, kerroksen korkeus, vedä kerrosta, piirrä seinä leikkauksessa, huomautukset julkisivussa, merkintä, arkin koko, mukautettu arkin koko, paperikoko, piirustuskehys, piirustuskehyksen malli, arkkimuoto, reunus, kentät, asiakas, piirtäjä, revisio, nimeä perhe uudelleen, nimeä tyyppi uudelleen, nimeä elementti uudelleen, projektiselain
from: 8726cf83
---

## Mitä teet

Muuta rakennusta siitä näkymästä, josta näet sen sivulta. Määritä toimistosi käyttämät arkit ja anna perheille, kokoille ja elementeille haluamasi nimet.

## Muokkaa julkisivussa tai leikkauksessa

1. Kytke päälle {{ui:Draw}}. Avaa {{ui:Project browser}}-kohdasta {{ui:Elevations}} tai {{ui:Sections}}.
2. Napsauta rivillä kynäpainiketta {{ui:Edit in this view}}. Näkymä avautuu, kuten arkit sen piirtävät, ja päälle tulevat muokattavat asiat.
3. Valinnalla {{ui:Select and move}}:
   - vedä näkymää kohti olevaa seinää sen suuntaisesti;
   - vedä ovea tai ikkunaa sen seinää pitkin, ja vedä ikkunaa ylös tai alas muuttaaksesi sen alareunaa;
   - vedä kerroksen viivaa ylös tai alas muuttaaksesi sen korkeutta;
   - vedä huomautusta.
4. {{ui:Door}} ja {{ui:Window}}: napsauta seinää, johon se menee (ikkuna siinä korkeudessa, johon napsautat).
5. {{ui:Wall}} (leikkauksissa): napsauta kohtaa, josta seinä alkaa, ja kohtaa, johon se päättyy leikkauksen tasossa. Se piirretään ensimmäisen napsautuksen alla olevalle kerrokselle, seuraavaan kerrokseen asti.
6. {{ui:Note}}: napsauta ja kirjoita. Huomautukset tallennetaan tiedostoon ja piirretään jokaiselle arkille, joka näyttää näkymän.
7. {{ui:Level}}: napsauta korkeudessa, johon uusi kerros menee. Se on yhtä korkea kuin etäisyys seuraavaan kerrokseen (ylimmässä 3000 mm). Vedä sen viivaa muuttaaksesi sitä. Toinen kerros alle 50 mm päässä toisesta hylätään.
8. {{ui:Dimension}}: napsauta kohtaa, josta se alkaa, ja kohtaa, johon se päättyy. Napsautukset tarttuvat seinän, oven, ikkunan ja kerroksen reunoihin. Mitta on vaakasuora tai pystysuora sen mukaan, mihin suuntaan liikutat. Se tallennetaan tiedostoon ja piirretään pituuksineen jokaiselle arkille, joka näyttää näkymän. Napsauta sitä {{ui:Select and move}}-valinnalla valitaksesi sen.
9. {{ui:Delete}} tai Delete-näppäin poistaa valitun seinän, oven, ikkunan, mitan tai huomautuksen. Ctrl+Z kumoaa viimeisimmän muutoksen, kun paneeli on auki. {{key:Esc}} palaa valintaan {{ui:Select and move}}.

Jokainen muutos on sama muutos, jonka pohjakuva tekee, ja se on yksi kumoamisvaihe: pohjakuva, 3D-näkymä ja arkit seuraavat perässä.

## Arkkikoot ja piirustuskehykset

1. Avaa arkki ({{ui:New sheet}} tai jokin omista kohdasta {{ui:Sheets}}). {{ui:Paper}}-kohdan vieressä ovat {{ui:Title block}} ja {{ui:Formats…}}.
2. {{ui:Paper}} luettelee jokaisen vakiokoon (Letter–Arch E, A4–A0) ja omasi.
3. {{ui:Title block}}: {{ui:Strip (bottom)}} tai {{ui:Column (right)}} tavanomaisilla kentillä tai oma. Valitsemasi piirustuskehyksen kentät näkyvät arkin nimen alla: kirjoita asiakas, piirtäjä ja revisio.
4. {{ui:Formats…}} tekee omasi: arkkikoon (nimi, leveys, korkeus, reunus) ja piirustuskehyksen (mihin se menee, sen leveys, kentät yksi per rivi; lopeta kenttä merkillä * tehdäksesi siitä ison).
5. {{ui:Export}} tallentaa ne kirjastotiedostona, ja {{ui:Import…}} lisää tiedoston toiseen malliin. Ne säilyvät mallissa, joten malli kuljettaa mallipohjan mukanaan.

## Nimeä perheet, koot ja elementit uudelleen

1. Avaa {{ui:Project browser}}-kohdasta {{ui:Families}}.
2. Kynä perheen vieressä nimeää sen uudelleen. Jokaisen koon tyyppi saa uuden nimen.
3. Avaa perheen kokoja nimetäksesi koon tai siitä sijoitetun elementin uudelleen (enintään 40 kutakin kokoa kohden luetellaan).

Jokainen uudelleennimeäminen on yksi kumoamisvaihe.
