---
title: Mielivaltaisen muotoiset lattiat, aukot ja ramppit
summary: Piirrä lattia tai laatta sen ääriviivalla (parveke, ulokkeellinen lattia, välitaso), leikkaa siihen aukkoja ja piirrä ramppeja välitasoineen.
keywords: lattia, laatta, ääriviiva, parveke, uloke, välitaso, kansi, lattia-aukko, aukko, kuilu, tyhjä tila, ramppi, kaltevuus, esteetön ramppi, pyörätuolin ramppi, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Mitä teet

Tee lattioita, jotka eivät seuraa huoneita, kuten seinien ulkopuolelle ulottuva parveke, ja piirrä ramppeja tasojen välille.

## Piirrä lattia ääriviivalla

1. Kytke {{ui:Piirrä}} päälle, valitse taso ja sitten {{ui:Koontiversio}} › {{ui:Lattia ääriviivalla}}.
2. Valitse työkalujen alla olevalta riviltä laji (betonilaatta tai puulattia), käyttö (lattia tai välitaso), paksuus ja yläpinnan korkeus tasosta (0 = sama kuin tason lattia; negatiivinen arvo asettaa sen alemmas).
3. Napsauta kulmat. Työkalu tarttuu seiniin, ruudukkoviivoihin ja niiden risteyksiin; pidä {{key:Shift}} painettuna, jotta reuna pysyy suorakulmaisena. Jokaisen reunan pituus ja pinta-ala näkyvät samalla. {{key:Backspace}} poistaa viimeisen kulman.
4. Napsauta ensimmäistä kulmaa uudelleen, kaksoisnapsauta tai paina {{key:Enter}} lopettaaksesi.

## Leikkaa aukko

Napsauta lattiaa (3D-näkymässä tai sen ääriviivaa pohjakuvassa), napsauta sitten **Ominaisuudet**-kohdassa {{ui:Lisää aukko}} ja napsauta aukon kulmat lattian sisällä. Lopeta kuten yllä. Lattian **Ominaisuudet** listaa sen aukot, kunkin kohdalla {{ui:Poista}}-painikkeen, ja pinta-alan ilman niitä.

## Piirrä ramppi

1. Valitse {{ui:Koontiversio}} › {{ui:Ramppi}}. Aseta sen leveys ja se, menevätkö ramppi **seuraavalle tasolle** vai **ylös nousu**, jonka kirjoitat.
2. Valitse, miten se asetetaan: **kaltevuuden mukaan** (aluksi 1:12; ramppi on niin pitkä kuin nousu vaatii) tai **pituuden mukaan** (toinen napsautus asettaa pituuden ja kaltevuus seuraa).
3. Napsauta rampin alapään (sen alareunan keskikohta) ja napsauta sitten suunta ylöspäin. Esikatselu näyttää rampin pituuden, lentojen määrän ja kaltevuuden.

Yli 30 in (760 mm) nousu jaetaan lentoihin, joiden välissä on 5 ft (1525 mm) välitaso. Nämä ovat yleisiä suunnitteluarvoja, eivät määräyksiä: tarkista rakennuspaikkasi säädökset. Ramppi, joka on jyrkempi kuin 1:12, merkitään sen **Ominaisuudet**-kohdassa.

## Mitä pitäisi näkyä

- Jokainen lattia, aukko ja ramppi on yksi vaihe: {{key:Mod+Z}} kumoaa sen.
- Pohjakuvassa piirretyn lattian ääriviiva (aukko on piirretty ristiin) ja rampin ääriviiva, lentot, välitasot sekä ylöspäin osoittava nuoli kaltevuuksineen.
- Piirretyn lattian **Ominaisuudet** (laji, käyttö, paksuus, yläpinta, pinta-ala, aukot) ja rampin **Ominaisuudet** (leveys, yläpinta, nousu, kaltevuus tai pituus); {{key:Delete}} poistaa kumman tahansa.
- Ramppi seuraavalle tasolle seuraa sitä, kun sen korkeus muuttuu.
- IFC-tiedostossa piirretty lattia on laatta (IfcSlab, lattia tai välitaso), jonka aukot on leikattu (IfcOpeningElement). Ramppi on IfcRamp, joka koostuu kaltevista lentoista (IfcRampFlight) ja välitasolaatoista, ja siinä on sen kaltevuus ja leveys.

:::note
Tällä tavalla piirretyt lattiat pysyvät siinä kohdassa, johon piirsit ne. {{ui:Lattia}}-työkalulla tehdyt lattiat seuraavat huoneita, kun seinät siirtyvät: katso [Huoneet, lattiat, alakatot ja katot](topic:floors-and-roofs).
:::
