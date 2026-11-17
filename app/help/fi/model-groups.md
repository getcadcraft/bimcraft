---
title: Malliryhmät
summary: Tee valituista elementeistä yksi nimetty ryhmä, sijoita ryhmä uudelleen muualle ja muuta yhtä kopiota, jolloin kaikki muuttuvat.
keywords: ryhmä, malliryhmä, ryhmittely, purku ryhmästä, ilmentymä, kopio, toisto, tyypillinen yksikkö, kenttä, asunto, muokkaa ryhmää, IfcGroup
from: 121c5027
---

## Mitä tehdään

Ryhmitä tyypillinen kenttä, sijoita se useita kertoja ja muuta kaikkia kopioita muuttamalla yhtä.

## Missä työkalu on

- Valintanauhan asettelut: {{ui:Architecture}} › **Malli** › {{ui:Malliryhmä}}.
- Klassinen asettelu: Piirrä-palkin {{ui:Huoneet}}-valikko › Malliryhmä.

## Vaiheet

1. Valitse-työkalulla valitse elementit: napsauta yhtä ja napsauta muita {{key:Ctrl}}+napsautuksella tai {{key:Shift}}+napsautuksella.
2. Valitse {{ui:Malliryhmä}}. Niistä tulee heti ryhmä. Kirjoita ensin nimi riville {{ui:Ryhmän nimi}}, tai anna nimi jälkikäteen nimeämällä ryhmä uudelleen.
3. Paina {{ui:Sijoita toinen}} ja napsauta kohtaa, johon kopio tulee: sen vasen alakulma menee napsautukseen.
4. Muuta mitä tahansa kopiota: siirrä seinän päätä, muuta oven kokoa tai poista pilari. Kaikki muut ryhmän kopiot muuttuvat samassa vaiheessa, ja yksi Kumoa-toiminto palauttaa kaiken.
5. Kun Malliryhmä on käytössä, elementin napsautus valitsee koko ryhmän.

## Muuta voit tehdä

- {{ui:Lisää valitut}}: lisää elementtejä viimeksi valitsemaasi ryhmään.
- {{ui:Pura ryhmä}}: tästä kopiosta tulee taas tavallisia elementtejä. Muut kopiot pysyvät ryhmänä.
- Siirrä koko kopio {{ui:Siirrä}}-työkalulla: se on sama ryhmä uudessa paikassa, eikä muut liiku.
- Kun poistat kopion elementit, kopio katoaa.

## Mitä ryhmään voi kuulua

Seinät ovet ja ikkunat, pilarit ja piirretyt lattiat voidaan sijoittaa uudelleen ja pitää samanlaisina. Ryhmässä voi olla muitakin elementtejä, mutta silloin sitä ei voi vielä sijoittaa uudelleen; luettelon rivi kertoo syyn.

Kopioita siirretään, niitä ei kierretä eikä peilata.

## IFC-tiedostossa

Ryhmä on IfcGroup, jolla on IfcRelAssignsToGroup jäseniinsä; jäsenet pysyvät tavallisina seininä, pilareina ja lattioina. Jokainen saman ryhmän kopio kantaa samaa määritystunnusta.

## Ei vielä toteutettu

- Kopion kääntäminen tai peilaaminen.
- Portaat, katot, huonelattiat ja kirjaston kohteet ryhmässä, joka sijoitetaan uudelleen.
- Seinän profiilia, vinoutta ja seinäaukkoja ei siirretä kopioihin.
- Ryhmät ryhmien sisällä.

Katso myös [Siirrä, kohdista ja jaa tasavälein](topic:move-align-distribute).
