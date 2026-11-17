---
title: Kuilut ja pystysuorat aukot lattioiden läpi
summary: Kuilu on yksi ääriviiva, joka leikkaa kaikki kahden tason väliset lattiat, alakatot ja katot. Pystysuora aukko leikkaa yhden niistä. Seinäaukko leikkaa seinän.
keywords: kuilu, hissikuilu, porrasaukko, nousu, pystysuora aukko, lattia-aukko, alakattoaukko, kattoaukko, kattoikkunan aukko, reikä lattiassa, seinäaukko, IfcOpeningElement, vähennys, nettopinta-ala
from: 8e9e1641
---

## Mitä teet

Leikkaa hissikuilu rakennuksen läpi yhdellä luonnoksella, leikkaa reikä yhteen lattiaan ja lue, mitä alueista on otettu pois.

## Missä työkalut ovat

- Valintanauhan asettelut: {{ui:Arkkitehtuuri}} › **Aukko** › {{ui:Kuilu}}, {{ui:Pystysuora aukko}} ja {{ui:Seinäaukko}}.
- Klassinen asettelu: Piirtopalkki › {{ui:Huoneet}}-valikko (Kuilu, Pystysuora aukko) ja › {{ui:Seinät}}-valikko (Seinäaukko).

## Kuilu

1. Avaa sen tason pohjakuva, josta kuilu alkaa. Valitse {{ui:Kuilu}}.
2. Valitse rivillä {{ui:Alataso}} ja {{ui:Ylätaso}}, sekä siirtymät, jos kuilu alkaa tai päättyy niiden yläpuolelta tai alapuolelta.
3. Napsauta ääriviivan kulmia. Napsauta ensimmäistä kulmaa uudelleen, kaksoisnapsauta tai paina {{key:Enter}} lopettaaksesi.
4. Jokainen lattia, alakatto ja katto kahden korkeuden välillä leikataan. Tilarivi kertoo, kuinka monta.

Kuilu on yksi kohde. Valitse sen ääriviiva millä tahansa tasolla, jonka se ylittää: Ominaisuudet kertoo sen nimen, tasot ja siirtymät, mitä se leikkaa ja kuinka suuri ala on otettu pois. Muuta sitä, ja jokainen aukko seuraa muutosta. Poista se, ja jokainen aukko katoaa. Kukin on yksi kumoamisvaihe.

Kuilu leikkaa jatkuvasti: lattia, joka tehdään myöhemmin sen tasojen väliin, leikataan pyytämättä, ja lattia, jonka poistat, vapautetaan.

Kuilun pohjana oleva lattia ei leikkaudu (sen yläpinta on alataso). Anna alatasolle negatiivinen siirtymä, jotta se leikkautuu myös. Anna ylätasolle positiivinen siirtymä, jotta kuilu menee katon läpi.

## Pystysuora aukko

1. Valitse {{ui:Pystysuora aukko}}. Valitse rivillä, mikä leikataan: lattia, alakatto vai katto.
2. Napsauta ääriviivan kulmia ja lopeta kuten yllä.
3. Tämän tason lattia, alakatto tai katto ääriviivan alla leikataan. Aukko kuuluu yhdelle elementille: poista lattia, ja aukko lähtee mukana.

## Seinäaukko

{{ui:Seinäaukko}} on työkalu, jota kuvaa [Muokkaa seinän muotoa](topic:wall-shape): napsauta seinää pohjakuvassa tai kahta kulmaa sen pinnalla 3D:ssä.

## Määrät

Lattioiden mittaussäännön mukaan elementin nettopinta-ala on sen bruttopinta-ala vähennettynä siitä, mikä siitä on leikattu pois. Kuilu tai pystysuora aukko on vähennys jokaisesta lattiasta ja alakatosta, jonka se leikkaa; Lattiat ja pinnoitteet -luettelot sekä IFC-määrät näyttävät samat luvut. Katossa vähennys on katon pinnan ala: pohjapinta-ala jaettuna kaltevuuskulman kosinilla.

Ääriviiva, joka ulottuu reunan yli, vähentää vain sen osan, joka on elementillä.

## Jos mitään ei leikata

Kuilu, jonka tiellä ei ole mitään, tehdään silti, ja siitä ilmoitetaan: se leikkaa sen, mitä sinne rakennetaan myöhemmin. Pystysuora aukko tarvitsee jotain alleen; jos siellä ei ole mitään, tilarivi kertoo sen eikä mitään tehdä.

## IFC:ssä

Jokainen leikkaus on IfcOpeningElement, jolla on IfcRelVoidsElement leikattuun elementtiin, joten mikä tahansa IFC-ohjelma näyttää aukon. Katto leikataan pinta kerrallaan. Itse kuilu on IfcGroup sen aukoista.

## Ei vielä toteutettu

- Kaarevat ääriviivat.
- Kuilun seinät: piirrä ne Seinä-työkalulla.
- Ääriviivan muokkaaminen vetämällä sen kulmia (muuta sitä Ominaisuuksissa tai poista ja luonnostele uudelleen).
- Piirretyn lattian oma Ominaisuudet-näkymä näyttää vain sen oman pinta-alansa vähennettynä omilla aukoillaan; luettelot ja IFC-määrät sisältävät kuilun.

Katso myös [Huoneet ja huoneiden erottimet](topic:rooms-and-separators).
