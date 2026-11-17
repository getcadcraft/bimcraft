---
title: Lähetä putki jännitys- tai isometriaohjelmaan ja lue se takaisin (PCF)
summary: Kirjoita mallin putkilinjat PCF-putkikomponenttitiedostoon tai lue PCF-tiedosto jännitys- tai isometriaohjelmasta ja piirrä sen putki linjoina.
keywords: pcf, putkikomponenttitiedosto, putkijännitys, isometria, isometriat, vienti, tuonti, putkisto, laitos, teräsputki, siirrä työ, muu ohjelmisto
from: 24f91355
---

## Mitä teet

PCF on pelkkä tekstitiedosto, jonka jännitys- ja isometriaohjelmat lukevat ja kirjoittavat. Se listaa jokaisen putkilinjan komponentit niiden päätepisteineen ja läpimittoineen.

## Vienti

1. Valitse Putki-työkalu. Asetusrivillä näkyy **Vie PCF**.
2. Napsauta sitä. Kirjoitetaan jokainen putkilinja mallissa: suora putki, kyynärpäät (90 asteen käännös, muuten mutka), T-haarat haaralähtöpisteineen, supistimet ja venttiilit.
3. Tiedosto käyttää millimetrejä. Läpimitat ovat nimellisiä halkaisijoita millimetreinä. Kyynärpään keskipiste on sen kulma, johon sen kaksi haaraa kohtaavat.

PCF kirjoitetaan teräksisille tuppihitsatuille putkille. Muussa materiaalissa oleva linja kirjoitetaan myös teräksisillä komponenttiavaimilla, ja siitä ilmoitetaan Ongelmat-paneelissa.

## Tuonti

1. Valitse Putki-työkalu ja napsauta **Tuo PCF…**, ja valitse tiedosto.
2. Suorasta putkesta kyynärpäiden, mutkien, venttiilien ja laippojen kautta tulee yksi linja nykyiselle tasolle. Koon muutos aloittaa uuden linjan. T-haaran haara muuttuu omaksi linjakseen, joka alkaa T-haaran keskipisteestä.
3. Malli asettelee omat liitososansa. Supistimia ja T-haaroja ei kopioida: ne ilmestyvät, kun eri kokoiset linjat tai haara kohtaavat.

:::note
Tiedoston korkeudet luetaan nykyisen tason yläpuolisina korkeuksina. Kuormat, kiinnitykset ja itse jännitysanalyysi eivät ole PCF-tiedostossa, eikä niitä tuoda mukana.
:::

## Tarkista, mitä tuli mukaan

- Putkilinjakohtaisen putken kokonaispituuden tulisi vastata lähdettä.
- Ongelmat-paneeli luettelee kerran kustakin: kyynärpään, jonka keskipiste ei ole yhtä kaukana molemmista päistä, putken, jolla ei ole pituutta, ja läpimitan, joka ei ole vakiokoko.

## IFC-tiedostossa jo oleva putkitus

Kun IFC-tiedosto on auki, **Vie PCF** kirjoittaa myös sen omat putkisegmentit, liitososat ja venttiilit piirtämiesi linjojen rinnalle. Segmentti saa päänsä porteistaan tai rungon päistä. Liitososa ilman portteja jätetään pois, ja Ongelmat-paneeli kertoo siitä. Voit viedä pelkästä IFC:stä silloinkin, kun mallissa ei ole piirrettyjä linjoja.

Tuonnissa tiedoston tuet, olets-liitokset, laipat, tiivisteet ja tulpat eivät piirry. Ongelmat-paneeli luettelee, kuinka monta kutakin jätettiin pois, joten mikään ei katoa huomaamatta.
