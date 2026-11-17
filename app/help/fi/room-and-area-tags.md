---
title: Huone- ja alamerkinnät
summary: Lisää merkintä, jossa on numero, nimi ja pinta-ala, huoneeseen tai alueeseen. Merkintä seuraa kohdettaan, ja sen koko määräytyy paperilla olevan korkeuden mukaan.
keywords: merkintä, huonemerkintä, alamerkintä, merkitse tila, merkitse ala, merkitse kaikki, nimiö, tekstin korkeus, paperikorkeus, selite
from: 67059d8a
---

## Mitä teet

Merkitse huoneita ja alueita yksi kerrallaan tai kaikki kerralla ja siirrä merkintä paikkaan, josta se on hyvin luettavissa.

## Missä työkalut ovat

- Valintanauhan asettelut: {{ui:Arkkitehtuuri}} › **Huone ja ala** › {{ui:Merkitse tila}} ja {{ui:Merkitse ala}}.
- Klassinen asettelu: Piirrä-palkki › {{ui:Huoneet}}-valikko.
- Valittu huone tai alue: Ominaisuudet › {{ui:Lisää merkintä}}.

## Vaiheet

1. Valitse {{ui:Merkitse tila}} ja napsauta huonetta siihen kohtaan, johon merkinnän tulee tulla.
2. Tai paina työkalurivin {{ui:Merkitse kaikki merkitsemättömät}}-painiketta: jokaiselle tämän tason huoneelle, jolla ei ole merkintää, lisätään sellainen keskelle. Se on yksi kumoamisvaihe.
3. Siirrä merkintää valitsemalla se Valitse-työkalulla ja vetämällä. Ominaisuudet-paneelissa on {{ui:Palauta keskelle}}.
4. {{ui:Merkitse ala}} toimii samoin alueille.

## Mitä merkintä tekee

- Se kertoo numeron, nimen ja pinta-alan valitsemissasi näyttöyksiköissä.
- Se seuraa huonettaan: kun huoneelle annetaan uusi nimi tai seinää siirretään, merkinnän teksti ja paikka muuttuvat samassa vaiheessa.
- Sen koko määräytyy paperilla: {{ui:Tekstin korkeus paperilla}} on millimetreinä (aluksi 2.5). Mittakaavassa 1:50 2.5 mm:n merkintä on mallissa 125 mm korkea; mittakaavassa 1:100 se on 250 mm.
- Huone, jolla on merkintä, näyttää merkinnän tavallisen nimiönsä sijaan.
- Kun sen huone tai alue poistetaan, merkintä poistuu sen mukana. Kumoa tuo molemmat takaisin.

## IFC-tiedostossa

Merkintä on IfcAnnotation (ObjectType ROOMTAG tai AREATAG), jonka teksti on tekstiliteraali, sekä sen kohteen GlobalId, jota se nimeää. Tiedoston teksti antaa pinta-alan neliömetreinä.

## Ei vielä toteutettu

- Omat merkintämuodot ja viitenuoli.
- Ovien, ikkunoiden ja seinien merkinnät ovat erillinen työkalu (katso arkkien merkintätyylit).

Katso myös [Huoneet ja huoneen erottimet](topic:rooms-and-separators).
