---
title: Tyyppipaketit: seinätyyppien jakaminen avoimina tiedostoina
summary: Tallenna seinätyypit kerroksineen, materiaaleineen, tunnisteineen ja luokituskoodeineen sekä perheineen yhdeksi avoimeksi tiedostoksi (tavallinen JSON tai IFC) ja lisää ne toiseen projektiin. Myös toisen ohjelman IFC-tiedoston seinätyypit voi lukea.
keywords: tyyppipaketti, tyypit, seinätyyppi, jakaminen, vienti, tuonti, kirjasto, avoin muoto, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiaalit, kerrokset, mallipohja, toimistostandardi, perheet
from: e4c91331
---

## Mitä teet

Kuljetat seinätyyppisi projektista toiseen tai annat ne jollekulle, joka työskentelee toisessa ohjelmassa. Tyyppipaketti sisältää jokaisen seinätyypin kerroksineen, paksuuksineen, materiaaleineen, ytimineen, ilmaväleineen, kerrosprioriteetteineen, kehitystasoineen, määrälaskentatietoineen ja luokituskoodeineen sekä lisäämäsi perheet. Se on avoin tiedosto: tavallista JSON-tekstiä, jonka kuka tahansa voi lukea, tai IFC-tiedosto. Mikään siinä ei ole sidottu yritykseen, maahan tai tiliin.

## Tallenna tyyppejä projektista

1. Avaa **Data** mallipalkissa ja valitse {{ui:Tyyppipaketit}}.
2. Kohdassa {{ui:Tallenna tämän projektin tyypit}} rastita seinätyypit, jotka haluat mukaan. Projektin omat tyypit ovat rastitettuina; aloitustyypin voi lisätä, ja se tulee mukaan kopiona. Rastita perheet, jos haluat ne mukaan.
3. Kirjoita {{ui:Paketin nimi}}.
4. {{ui:Tallenna paketiksi (.json)}} lataa `.cctypes.json`-tiedoston. {{ui:Tallenna IFC-muodossa (.ifc)}} lataa IFC-tiedoston, jossa on vain tyyppejä: jokainen seinätyyppi IfcWallType-muodossa materiaalikerrossarjoineen, materiaaleineen ja luokituksineen, mille tahansa BIM-ohjelmalle.

## Lisää tyyppejä projektiin

1. Valitse samassa valintaikkunassa {{ui:Avaa paketti tai IFC-tiedosto…}} ja valitse `.json`-paketti tai `.ifc`-tiedosto.
2. Valintaikkuna luettelee tiedoston sisällön: jokaisen seinätyypin paksuuden, kerrosten määrän ja koodit sekä materiaalit ja perheet.
3. Valitse, mitä tapahtuu kohdalle {{ui:Projektissa jo oleva tyyppi}}: **Säilytä projektin**, **Lisää paketin kopiona** (se saa uuden nimen, joka päättyy ”(2)”) tai **Korvaa se (vain, kun mikään seinä ei käytä sitä)**.
4. {{ui:Lisää projektiin}}. Valintaikkuna luettelee, mitä lisättiin, kopioitiin, korvattiin tai säilytettiin. Se on yksi kumottava vaihe.

Uudet tyypit ovat heti Seinätyökalun tyyppiluettelossa.

## Lattia-, katto- ja alakattotyypit

Tallennettavien tyyppien luettelo sisältää myös projektin lattia-, katto- ja alakattotyypit sekä niiden aloitustyypit (merkitty Floor, Roof, Ceiling). Paketti voi kantaa kaikki neljä lajia; jokainen tyyppi nimeää IFC-luokkansa (IfcWallType, IfcSlabType, IfcCoveringType). Lattia-, katto- tai alakattotyyppiä, jota elementit käyttävät, ei korvata paketista: muuta sitä tyyppimuokkaimessa.

## Yksi tyyppi kirjastokohteena

Rastita täsmälleen yksi tyyppi ja valitse **Tallenna kirjastokohteena…**. Se tallentaa `.cctype.json`-tiedoston: Tyypit-lajin kirjastokohteen, joka sisältää vain tämän yhden tyypin (sen kerrokset, materiaalit, LOD:n ja luokituskoodit). Lähetä se kirjastoon jakaaksesi sen. **Avaa paketti tai IFC-tiedosto** lukee myös tällaisen kohteen ja lisää sen tyypin projektiin kuten paketin.

## Hyvä tietää

- IFC-tiedoston voi avata täälläkin, vaikka se olisi toisesta ohjelmasta. Jokainen sen seinätyyppi, jolla on materiaalikerroksia, luetaan: nimi, kerrosten materiaalit ja paksuudet sekä mahdollinen ilmaväli ovat tiedoston omia. Mitkä kerroksista ovat ydin ja mitä kukin kerros tekee (viimeistely, rakenne, eriste) arvataan, tyyppi merkitään **(arvattu)**, ja se kannattaa tarkistaa seinätyypin muokkaimessa. Seinätyyppi ilman kerroksia jätetään pois ja nimetään.
- Materiaali, jonka projekti jo on, säilytetään sellaisenaan. Uusi materiaali, jonka nimi on jo käytössä, saa nimensä perään "(paketti)".
- Tyyppiä, jota seinät käyttävät, ei korvata paketista. Muuta sitä seinätyypin muokkaimessa, joka siirtää sen seinät kunnolla.
- Yhdelle seinälle asetettu koodi ei siirry: se kuuluu siihen seinään. Tyypille asetettu koodi siirtyy.
- Tiedosto, jossa on kenttä, jota muodossa ei ole, kerros, jonka materiaali puuttuu, tai joka ei ole pelkkää tekstiä, hylätään, ja viesti kertoo, missä ja miksi.
- Ei vielä toteutettu: lattia-, katto- ja alakattotyypit (tässä versiossa niillä ei ole tyyppejä: kullakin on oma paksuus), ovi- ja ikkunatyypit muut kuin perheet sekä viivoitukset tai värit toisen ohjelman tiedostosta.
