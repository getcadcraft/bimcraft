---
title: Valikot, näppäimet ja hiiri
summary: Valitse valikkotyyli, joka vastaa tapaasi työskennellä, anna mille tahansa komennolle oma näppäin, siirrä komentoja valikkojen välillä ja määritä, mitä rulla ja kumpikin hiiren painike tekevät.
keywords: valikkotyyli, valikot, valikkorivi, valintanauha, komentorivi, pikanäppäimet, näppäimet, mukauta, uudelleensijoitus, hiiri, rulla, kääntäminen, zoomauksen suunta, keskipainike, panorointi, kiertäminen, kaksikirjaimiset näppäimet, vienti, tuonti, tyylin vaihto, tuttu
from: a424e836
---

BimCraftin komennot toimivat samalla tavalla, miten niihin pääsee käsiksi. **Valikkotyyli** määrää vain sen, missä komennot ovat ruudulla, miten ne on nimetty ja mitkä näppäimet ne käynnistävät, joten voit säilyttää omat tapasi. Valitse tyyli kohdasta {{ui:Asetukset}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Valikot, näppäimet ja hiiri}}; muutos tulee heti voimaan, ja tämä selain muistaa sen.

## Viisi tyyliä

| Tyyli | Mitä saat |
|---|---|
| {{ui:CadCraft}} | BimCraftin oma työkalurivi ja näppäimet ({{key:W}} seinä, {{key:D}} ovi, {{key:N}} ikkuna, {{key:X}} leikkaus, {{key:F}} sovita). Lähtökohta. |
| {{ui:Kotisuunnittelu}} | Valikkorivi (Tiedosto, Muokkaa, Koontiversio, Kirjasto, 3D, CAD, Työkalut, Näkymä) ja rivi rakennustyökaluja, niin kuin asuintalojen suunnitteluohjelmat ne järjestävät. Samat yksittäiset näppäimet sekä {{key:Mod+L}} kirjastolle, {{key:F9}} 3D-näkymälle, {{key:F10}} pohjakuvalle ja {{key:F11}} molemmille. |
| {{ui:BIM-valintanauha}} | Välilehtiä suurilla painikkeilla (Arkkitehtuuri, Lisää, Merkinnät, Muokkaa, Näkymä, Tuloste), Tiedosto-valikko ja pikapainikkeet oikealla. Kaksikirjaimiset näppäimet: {{key:W}} ja sitten {{key:A}} seinälle, {{key:D}} ja {{key:R}} ovelle, {{key:W}} ja {{key:N}} ikkunalle, {{key:S}} ja {{key:C}} leikkaukselle, {{key:Z}} ja {{key:F}} sovitukselle. Keskipainike panoroi; {{key:Shift}} ja keskipainike kiertävät. |
| {{ui:Piirtämisen perinteinen}} | Pieni valintanauha ja komentorivi niille, jotka kirjoittavat komentoja: WALL, DOOR, WINDOW, ROOF, U (kumoa), ZOOM, SECTION, PLOT, INSERT, HELP. Aloita kirjoittaminen mistä tahansa, ja kirjaimet menevät komentoriville; {{key:Enter}} suorittaa, {{key:Enter}} tyhjällä rivillä toistaa viimeisen komennon ja {{key:Esc}} tyhjentää rivin. |
| {{ui:Katselin}} | Mallien avaamiseen ja tarkistamiseen eikä niiden piirtämiseen: {{ui:Tiedosto}}-, {{ui:Näkymä}}-, {{ui:Näytä}}-, {{ui:Tarkasta}}- ja {{ui:Muokkaa}}-valikot katselutyökalujen rivin yllä (sovita, ylhäältä, edestä, sivulta, leikkaus, mittaa, piilota, eristä, läpinäkyvä, näytä kaikki, kävely). Rakennustyökalut odottavat {{ui:Malli}}-valikossa lopussa. Samat näppäimet kuin BimCraftin omassa tyylissä. |

Valikot ja valintanauhat näkyvät, kun malli on avattu tai aloitat uuden rakennuksen; sitä ennen vasemmalla oleva paneeli avaa tiedostoja ja aloittaa rakennuksia.

:::tip
Näppäin, joka kuuluu BimCraftin omaan asetteluun mutta ei valitsemaasi tyyliin, ei tee mitään, ja tilarivi kertoo, mihin sen komento meni ("BIM-valintanauhassa Leikkaus on SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nuolet säilyttävät aina merkityksensä, ja käynnissä oleva työkalu säilyttää omat näppäimensä: {{key:R}} ja {{key:Tab}} sijoitettaessa, {{key:W}} {{key:A}} {{key:S}} {{key:D}} kävellessä, {{key:H}} ovi- ja ikkunatyökalujen kanssa sekä numerot, kun kirjoitat pituutta.
:::

## Tee siitä omasi

1. Valitse lähinnä haluamaasi tyyliä ja napsauta {{ui:Mukauta…}}.
2. Kohdassa {{ui:Näppäimet ja valikot}} etsi komento (hakukentästä on apua). Napsauta {{ui:Lisää näppäin}} ja paina näppäintä tai kahta näppäintä peräkkäin kaksikirjaimista näppäintä varten. Napsauta näppäintä poistaaksesi sen.
3. Valikkorivin tai valintanauhan kanssa {{ui:Sijainti}} siirtää komennon toiseen valikkoon tai paneeliin tai kohtaan {{ui:Vain näppäimet}}.
4. Kohdassa {{ui:Hiiri}} aseta rulla, painikkeet, jotka panoroivat pohjakuvaa, ja mitä kukin painike tekee 3D-näkymissä.
5. Anna sille nimi ja napsauta {{ui:Tallenna}}.

Sisäänrakennetun tyylin tallentaminen luo oman kopion (”Oma kotisuunnittelu”); sisäänrakennettu tyyli ei muutu koskaan. Näppäin, joka on annettu kahdelle komennolle, tai näppäin, joka suorittaisi komennon ennen kuin kaksikirjaiminen näppäin voitaisiin kirjoittaa, näkyy punaisena, ja se on korjattava ennen tallentamista.

## Hiiri

- **Hiiren rulla**: {{ui:Vieritys ylös lähentää}} (alkutila) tai {{ui:Vieritys ylös loitontaa}}, sekä kuinka nopeasti. Kosketuslevyn nipistys zoomaa aina sormien liikkeen suuntaan.
- **Pohjakuvan ja piirustusten panorointi**: millä tahansa vasemmalla, keskimmäisellä ja oikealla painikkeella. {{key:Space}} ja vetäminen panoroivat myös; vasen vetäminen panoroi vain siellä, missä napsautus ei poimisi tai piirtäisi.
- **Vetäminen 3D-näkymissä**: {{ui:Kunkin näkymän oma}} säilyttää BimCraftin painikkeet (vasen kiertää, oikea panoroi). Tai aseta kukin painike kiertämään, panoroimaan, zoomaamaan tai ei mihinkään; {{key:Shift}} painikkeen kanssa vaihtaa kiertämisen ja panoroinnin. Napsautus ilman vetämistä poimii yhä.

## Ota mukaasi

{{ui:Vie}} tallentaa käytössä olevan tyylin pieneen `.ccinput.json`-tiedostoon; {{ui:Tuo…}} lisää sellaisen toisesta tietokoneesta tai kollegalta. Tuotu tiedosto voi viitata vain BimCraftin omiin komentoihin: kaikki muu siinä (komento, jota tämä versio ei tunne, näppäin, joka ei toimi täällä) jätetään pois ja lasketaan tilariville. {{ui:Poista tämä tyyli}} poistaa yhden omista tyyleistäsi.

:::note
Nämä asetukset pysyvät tässä selaimessa. {{ui:Käytä tätä tyyliä jokaisessa sovelluksessa}} tyylikorttien alla saa jokaisen sovelluksen avautumaan vastaavassa tyylissä (oma työkalurivi, valikkorivi, valintanauha tai Piirtämisen perinteinen; {{ui:Katselin}} on vain BimCraftin, eikä sillä ole vastinetta muissa sovelluksissa), ja mukana ovat kussakin sovelluksessa tehdyt muutokset. Sovellus ilman vastaavaa tyyliä säilyttää oman tyylinsä. Toisen tyylin valitseminen yhdessä sovelluksessa muuttaa vain sitä sovellusta.
:::

Aiheeseen liittyvää: [Näppäimistö ja hiiri](topic:keyboard) · [BimCraftin asetukset](topic:settings) · [Siirtyminen muista BIM- ja piirto-ohjelmista](topic:coming-from)
