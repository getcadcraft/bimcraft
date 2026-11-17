---
title: Alueet ja aluerajaukset
summary: Mittaa bruttorakennusala tai vuokrattava ala piirtämiesi rajalinjojen tai seinistä otettujen rajojen sisällä ja listaa alueet luettelossa.
keywords: ala, alueet, aluerajaus, aluejärjestelmä, bruttorakennusala, bruttoala, vuokrattava, aluepiirros, alueluettelo, valitse seinät, ei suljettu, GFA, kerrosala, huone
from: c79f96d2
---

## Mitä teet

Piirrä aluejärjestelmän rajat, sijoita alueet niiden sisään ja lue yhteissummat.

## Missä työkalut ovat

- Valintanauha-asettelut: {{ui:Arkkitehtuuri}} › **Huone ja ala** › {{ui:Ala}} ja {{ui:Aluerajaus}}.
- Klassinen asettelu: piirtopalkin › {{ui:Huoneet}}-valikko.

## Vaiheet

1. Valitse {{ui:Aluerajaus}}. Valitse rivillä {{ui:Järjestelmä}}: Bruttorakennus tai Vuokrattava. Jokaisella järjestelmällä on omat rajansa.
2. Valitse, miten viivat tehdään kohdassa {{ui:Tekotapa}}:
   - **Piirrä**: napsauta piste pisteeltä.
   - **Valitse seinät: keskilinja**: napsauta seinää, ja sen keskilinja on raja.
   - **Valitse seinät: napsautettu pinta**: napsauta seinää haluamallasi puolella; kyseinen pinta on raja. Bruttorakennusalaa varten napsauta ulkoseinien ulkopintaa.
3. Valitse {{ui:Ala}}. Valitse sama järjestelmä, kirjoita halutessasi nimi, numero tai tyyppi ja napsauta rajojen sisäpuolta.
4. Ala mitataan heti. Valitse se, jotta voit muuttaa sen nimeä, numeroa tai tyyppiä Ominaisuudet-paneelissa.

## Mikä seuraa mitä

- Seinän valinnalla tehty raja seuraa tuota seinää: kun siirrät seinää, ala mitataan uudelleen samassa vaiheessa.
- Piirtämäsi raja pysyy siinä, mihin piirsit sen.
- Kulmassa kohtaavien seinien pinnat kohtaavat myös siellä, joten neljä valittua seinää sulkevat alueen ilman aukkoja.
- Aluerajat näkyvät pohjapiirroksessa, kun huone- tai aluetyökalu on kädessäsi, joten ne eivät sotke pohjapiirrosta muulloin.

## Jos rajat eivät sulkeudu

Ala sijoitetaan silti. Siinä lukee **Ei suljettu**, eikä se mittaa mitään ennen kuin rajat sulkeutuvat sen ympärille. Tämä on neuvo: mitään ei estetä.

## Luettelo

Vasen paneeli › {{ui:Luettelot}} › **Alueet**: järjestelmä, numero, nimi, tyyppi, taso, ala ja piiri sekä yhteissumma. Rivin napsautus valitsee alueen. {{ui:Lataa CSV}} antaa saman taulukon.

## IFC:ssä

Alue on IfcSpace ilman runkoa: PredefinedType GFA bruttorakennusjärjestelmälle, tai USERDEFINED ja ObjectType Rentable vuokrattavalle. Sillä on GrossFloorArea ja GrossPerimeter, eikä nettoalaa, joten sitä ei sekoiteta huoneeseen. Raja on IfcVirtualElement.

## Ei vielä toteutettu

- Omat järjestelmät (vain Bruttorakennus ja Vuokrattava).
- Väritäytöt alueen tyypin mukaan.
- Säännöt, jotka sijoittavat rajan puolestasi, kuten "lasilinjaan asti".

## Katso myös

[Huoneet ja huoneiden erottimet](topic:rooms-and-separators), [Huone- ja aluetunnisteet](topic:room-and-area-tags).
