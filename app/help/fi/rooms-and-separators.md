---
title: Huoneet ja huoneen erottimet
summary: Valitse huone, anna sille nimi ja numero sekä lue sen pinta-ala, ympärysmitta ja tilavuus. Piirrä huoneen erotin kahden huoneen rajalle, jossa seinää ei ole.
keywords: huone, huoneet, huoneen erotin, erotinviiva, tila, IfcSpace, nimi, numero, pinta-ala, ympärysmitta, tilavuus, avoin pohjaplaneering, huoneen jakaminen, keittiö ja olohuone, ei suljettu
from: d4c1d66b
---

## Mitä teet

Anna nimi seinien muodostamille huoneille ja jaa avoin huone kahdeksi ilman seinää.

## Missä työkalut ovat

- Valintanauhan asettelut: {{ui:Arkkitehtuuri}} › **Huone ja ala** › {{ui:Huone}} ja {{ui:Huoneen erotin}}.
- Klassinen asettelu: Piirrä-palkki › {{ui:Huoneet}}-valikko.
- Mikä tahansa valikkotyyli: komennot ovat nimeltään Huone ja Huoneen erotin; komentopaletti löytää ne.

## Vaiheet

1. Piirrä seinät. Jokainen suljettu seinäkehä on jo huone: BimCraft tekee siitä huoneen, numeroi sen ja antaa sille pinta-alan piirtämisen aikana.
2. Valitse {{ui:Huone}}. Siirrä osoitin pohjakuvan päälle: osoittimen alla oleva huone korostuu pinta-alallaan, ympärysmitallaan ja tilavuudellaan.
3. Jos haluat nimetä huoneet nopeasti, kirjoita ensin rivillä {{ui:Nimi}} ja {{ui:Numero}}, ja napsauta sitten huonetta. Numero kasvaa yhdellä seuraavaa huonetta varten (101, 102; A-09, A-10).
4. Tai napsauta vain huonetta: se valitaan, ja Ominaisuudet-paneelissa ovat sen nimi, numero, pinta-ala, ympärysmitta, tilavuus ja merkintä.
5. Jaa avoin huone valitsemalla {{ui:Huoneen erotin}} ja napsauta kahta pistettä: seinästä seinään tai seinästä toiseen erottimeen. Jatka napsauttamista ketjua varten; Enter, Esc tai kaksoisnapsautus lopettaa sen.

## Mitä erotin tekee

- Se rajaa huoneet kuten seinä, jolla ei ole paksuutta. Kahden huoneen pinta-alat yhteensä ovat tarkalleen alkuperäisen huoneen pinta-ala.
- Huone, joka pitää vanhan huoneen keskikohdan, säilyttää nimensä ja numeronsa. Toinen on uusi.
- Erotin, joka päättyy avoimeen tilaan eikä koske mihinkään päästään, ei jaa mitään. Pidennä sitä, niin se jakaa.
- Erottimen osa, joka on seinän sisällä, jätetään huomioimatta, joten voit tarttua seinän keskiviivoihin.
- Valitse erotin ja poista se painamalla Delete: kaksi huonetta yhdistyvät uudelleen yhdeksi. Kumoa palauttaa erottimen.

## Jos napsautuskohdassa ei ole huonetta

Tilarivi kertoo sen: seinät eivät sulkeudu siinä kohdassa. Sulje aukko tai piirrä sen yli erotin. Mitään ei hylätä; suljettua huonetta ei vain ole vielä.

## IFC-tiedostossa

Huone on IfcSpace, jolla on numero (Name), nimi (LongName) ja Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Tilavuus on pinta-ala kerrottuna korkeudella ylempään tasoon.

Huoneen erotin on IfcVirtualElement, IFC:n olio rakentamattomalle rajalle. Sillä on viiva eikä runkoa, joten toinen ohjelma ei lue siitä seinää eikä laske sitä mihinkään.

## Ei vielä toteutettu

- Kaarevat erottimet.
- Huone, joka seuraa vinoa kattoa: tilavuus on aina pinta-ala kerrottuna tason korkeudella.
- Tilan rajasuhteita (IfcRelSpaceBoundary) ei kirjoiteta seinille eikä erottimille.

Katso myös [Huone- ja alamerkinnät](topic:room-and-area-tags), [Alueet ja aluerajat](topic:areas-and-area-boundaries).
