---
title: Sijoita ja vaihda kirjastokohde, jolla on muunnelmia
summary: Joillakin kirjastokohteilla on useita kokoja tai vaihtoehtoja. Valitse muunnelma ennen sijoittamista, katso mikä muunnelma sijoitettu kohde on, vaihda se toiseen yhdellä napsautuksella ja säilytä se, kun kohde päivittyy.
keywords: muunnelma, muunnelmat, koot, vaihtoehdot, konfiguraatio, kirjasto, librarycraft, sijoita, vaihda, perhe, tyyppi, päivitys, portit
from: c05f0af3
---

## Mitä teet

Sijoitat kirjastokohteen haluamassasi koossa tai vaihtoehdossa ja muutat mieltäsi myöhemmin sijoittamatta sitä uudelleen. Muunnelmilla varustettu kohde on yksi kohde kirjastossa (yksi nimi, yksi lisenssi, yksi versio) ja taulukko muunnelmista, joita siinä on: esimerkiksi kiinnityslevy kokoina Pieni, Keskikokoinen ja Suuri, tai sama levy ilman reikiä.

## Valitse muunnelma ja sijoita se

1. Avaa {{ui:Kirjasto}}-välilehti ja napsauta kohteen korttia.
2. Nimen alla {{ui:Muunnelma}}-valinta listaa jokaisen muunnelman kokoineen. Kohteen oletus valitaan ensin.
3. Valitse yksi. Pohjakuva, koko ja 3D-rungon rivi seuraavat valintaasi.
4. Napsauta {{ui:Sijoita pohjakuvaan}} (tai {{ui:Sijoita malliin}} 3D-näkymässä) ja sijoita kuten mikä tahansa kohde: katso [Sijoita laitteita ja huonekaluja kirjastosta](topic:place-from-library).

Sijoitettu elementti saa nimen kohteen ja muunnelman mukaan, esimerkiksi *Kiinnityslevy — Suuri*, jotta {{ui:Laitteet}}-luettelo ja mallipuu erottavat ne toisistaan. Jokainen muunnelma on oma IFC-tyyppinsä: saman muunnelman sijoittaminen kahdesti jakaa yhden tyypin, eri muunnelma saa oman.

## Katso, mikä muunnelma sijoitettu kohde on

Valitse elementti. **Kirjastokohde**-ruudussa {{ui:Ominaisuudet}}-kohdassa on **Muunnelma**-rivi. IFC säilyttää sen `CadCraft_LibraryItem`-kohdassa: `Variant` (muunnelman tunnus), `VariantName` ja `VariantValues` (vaihtoehtojen arvot tekstinä), jotta muut ohjelmat voivat lukea ne.

## Vaihda toiseen muunnelmaan

1. Valitse sijoitettu kohde ja napsauta **Kirjastokohde**-ruudussa {{ui:Vaihda kohde…}}. {{ui:Kirjasto}}-välilehti avautuu.
2. Ylhäällä **Muut muunnelmat kohteelle** *kohde* luettelee jokaisen muunnelman kokoineen. Sijoitettu on merkitty eikä sitä voi valita.
3. Napsauta halutun muunnelman kohdalla {{ui:Vaihda …}}.

Elementti säilyttää paikkansa, kiertonsa, kerroksensa, kohdenumeronsa, määränsä ja muistiinpanonsa; sen tyyppi, muoto ja tiedot vaihtuvat toiseen muunnelmaan. {{key:Mod+Z}} palauttaa edellisen. Voit yhä valita minkä tahansa muun kohteen alla olevasta luettelosta kuten ennenkin: katso [Vaihda sijoitettu kohde ja päivitä kirjaston kohteet](topic:swap-and-update-library-items).

## Kopiointi, liittäminen ja päivitykset

- Sijoitetun muunnelman kopio on sama muunnelma: tässä mallissa ja toisessa mallissa, joka on avattu samassa selainvälilehdessä, Kopioi- ja Liitä-toiminnoilla.
- **Päivitykset** säilyttävät muunnelman: jos kohteen uudemmassa versiossa se on yhä, sijoitus muuttuu uuden version kyseiseksi muunnelmaksi. Jos uudessa versiossa sitä ei enää ole, sijoitus ottaa kohteen oletusmuunnelman.

## Hyödyllistä tietoa

- Vain osalla kirjastokohteista on muunnelmia. Kortit eivät kerro sitä; näet {{ui:Muunnelma}}-valinnan, kun avaat kortin.
- Kohde voi listata muunnelmakohtaisesti **portit** (liitäntäpisteet putkille ja kanaville). Kirjastovälilehti näyttää, kuinka monta muunnelmalla on. Niitä ei vielä kirjoiteta IFC:hen, kun kohde sijoitetaan kirjastovälilehdeltä.
- Muunnelma, jolla ei ole 3D-runkoa, sijoitetaan korvaavalla laatikolla, kuten jokainen 2D-symboli.
- Valinnan koot ovat millimetreinä, kuten kirjasto ne kirjoittaa.
