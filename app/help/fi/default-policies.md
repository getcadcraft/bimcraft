---
title: "Oletuskäytännöt: määritä, mistä uusi rakennus alkaa"
summary: Määritä kerran, mistä seinätyypistä, kerroksista, ensimmäisestä arkista, LOD-tunnisteista, yksiköistä ja työkalusta uusi rakennus alkaa metrisille ja tuumajärjestelmän projekteille, ja jaa käytännöt toimiston kesken pienenä tiedostona.
keywords: oletus, oletukset, oletuskäytännöt, käytäntö, toimiston standardi, toimiston oletukset, mallipohja, uusi rakennus, ensimmäinen seinätyyppi, metrinen seinä, muuraus, LOD, kehitystaso, ensimmäinen arkki, paperi, mittakaava, kerrokset, kerroksen korkeus, kerrosten nimet, seinätyökalu, yksiköt, jakaminen, vienti, tuonti, json
from: 42379aa5
---

## Mitä teet

Kerro BimCraftille, mistä uusi rakennus alkaa, jotta toimiston kenenkään ei tarvitse muuttaa samoja asioita joka kerta. Tämä on lisäosa: se on pois päältä, kunnes kytket sen päälle, ja käytäntö, jota et aseta, jättää BimCraft-oletuksen ennalleen.

:::note
Nämä ovat oletuksia **uusille** rakennuksille ja **uusille** asioille. Jo aloitettua projektia ei muuteta.
:::

## Vaiheet

1. Avaa Asetukset, siirry kohtaan {{ui:Lisäosat}} ja kytke päälle {{ui:Oletuskäytännöt}}.
2. Asetuksissa avaa **BimCraft**-välilehti ja valitse vasemmalla olevasta luettelosta {{ui:Oletuskäytännöt}}.
3. Aseta haluamasi käytännöt. Jokainen alkaa kohdasta **BimCraft-oletus**, ja sulkeissa on, mikä se on. Käytännössä, jossa on **Metrinen**- ja **Tuuma**-ruutu, on yksi arvo kullekin projektityypille; täytä vain tarvitsemasi.
4. Tallenna-painiketta ei ole: jokainen muutos tallentuu heti, kun teet sen. Käyttökelvoton arvo hylätään sanoin, ja vanha jää voimaan.
5. Napsauta {{ui:Uusi rakennus}}. Valintaikkuna täytetään käytännöistäsi, ja jokaisen käytännön asettaman arvon vieressä lukee **oletuskäytännöistäsi**. Voit vielä muuttaa mitä tahansa niistä ennen kuin napsautat {{ui:Luo}}.

## Käytännöt

- **Uuden rakennuksen yksiköt**: yksiköt vaihtuvat tähän, kun luot rakennuksen.
- **Kerrosten määrä**, **Kerrosten nimet** ja **Kerroksen korkeus**. Nimessä `{n}` laskee 1, 2, 3; `{n0}` laskee 0, 1, 2; `{nn}` ja `{nn0}` tekevät saman kahdella numerolla. Eli `Kerros {nn0}` antaa Kerros 00, Kerros 01, Kerros 02.
- **Ensimmäinen seinätyyppi**: se, minkä seinätyökalu piirtää ensin. Metrinen toimisto voi aloittaa tyypillä Exterior masonry 300 mm, kun tuumajärjestelmän projektit säilyttävät tyypin Exterior 2×6.
- **LOD-tunniste aloitusseinätyypeissä**: kehitystaso (LOD 100–500), jonka yhdeksän aloitustyyppiä näyttävät aina, kun tyyppi on luettelossa. Katso [Rakenna seinäkokoonpanot](topic:wall-assemblies).
- **Uuden seinätyypin LOD**: tunniste, jolla uusi tyyppi alkaa tyyppieditorissa. Voit muuttaa sitä siellä.
- **Ensimmäinen arkki**: sen paperi, mittakaava, arkin numero ja nimi (käytä `{level}` alimman kerroksen nimelle) tai ei ensimmäistä arkkia lainkaan.
- **Merkintöjen koot paperilla** (Asetukset › Yleiset › Oletuskäytännöt): toimiston korkeudet millimetreinä tulostettuina huomautuksille, mittatekstille, tunnisteille, tilannimille, ruudukon kuplien kirjaimille, näkymien otsikoille ja luettelotekstille. Uusi rakennus ottaa ne käyttöön luodessa ja säilyttää ne tiedostossaan. Katso [Piirrä täydessä koossa, merkitse mittakaavan mukaan](topic:annotation-sizes).
- **Työkalu, joka on aktiivinen luomisen jälkeen**: Valitse, kuten BimCraft tekee itsekseen, tai Seinä, jolloin pohjapiirroksen kaksi ensimmäistä napsautusta piirtävät jo seinän.

## Luettelon asettelu: toimiston standardi

**Asetukset › Yleiset › Oletuskäytännöt** -kohdassa **Luettelon asettelu (toimiston standardi)** -osiossa määrität, miten jokainen luettelo ryhmitellään, onko siinä välisummia ja loppusumma, sen otsikko ja sarakeotsikoiden kirjoitustapa. Jokainen luettelo, joka ei määritä omiaan, ottaa nämä käyttöön, kuka sen määrittääkin. Katso [Asettele, tallenna ja vie luettelo](topic:schedule-layouts).

## Jaa toimiston kesken

1. Avaa Asetuksissa **Yleiset**-välilehti ja valitse {{ui:Oletuskäytännöt}}.
2. Kirjoita halutessasi **Toimiston nimi**. Se kirjoitetaan tiedostoon.
3. Napsauta {{ui:Tallenna tiedostoon}}. Saat pienen tiedoston, jonka pääte on `.ccdefaults.json`.
4. Toisella tietokoneella kytke lisäosa päälle, avaa sama paikka ja napsauta {{ui:Lataa tiedostosta}}. Tiedoston käytännöt korvaavat sen tietokoneen käytännöt.

**Yleiset**-välilehdellä on myös **Uuden projektin yksikköjärjestelmä**, joka pätee jokaisessa sovelluksessa, jossa lisäosa on, sekä {{ui:Palauta kaikki käytännöt}}. {{ui:Palauta BimCraft-oletukset}} BimCraft-välilehdellä tyhjentää vain BimCraftin käytännöt.

## Hyvä tietää

- Tiedosto on tavallista, avointa JSONia: luettelo käytäntöjen nimistä ja arvoista. Käytäntö, jonka tiedosto nimeää ja jota tämä versio ei tunne, jätetään pois ja nimetään viestissä; loput latautuvat.
- Käytännöt säilytetään tässä selaimessa, kaikille tämän tietokoneen CadCraft-sovelluksille. Niitä ei tallenneta rakennustiedostoon, eikä niitä synkronoida tietokoneiden välillä: käytä tiedostoa.
- Aloitustyypin LOD-tunniste tulee tämän tietokoneen käytännöstä. Aloitustyypistä kopioimasi tyyppi kantaa tunnisteensa rakennustiedostossa.
- BimCraftissa ei ole tarkkuusasetusta, joten täällä ei ole tarkkuuskäytäntöä.
- Mallipohjasta aloitettu rakennus tuo mallipohjan omat kerrokset ja arkit. Seinätyypin ja yksikköjen käytännöt pätevät yhä.
- Kun kytket lisäosan pois, kaikki on taas BimCraft-oletusta. Käytännöt säilytetään, kun kytket sen takaisin päälle.
