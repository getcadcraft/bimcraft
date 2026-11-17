---
title: Tarkista putket ja kanavat rakennetta vastaan
summary: Aja valmiit törmäysjoukot putkille ja kanaville seiniä, laattoja, palkkeja ja pilareita vastaan, löydä reitit, jotka kulkevat lähempänä rakennetta kuin niiden eristys ja rako sallivat, ja listaa reittien tarvitsemat aukot seiniin ja laattoihin CSV- ja BCF-muodossa.
keywords: mep, törmäys, törmäystarkastus, koordinointi, rakenne, seinät, laatat, palkit, pilarit, vapaa tila, pehmeä törmäys, eristys, rako, aukko, aukot, läpivienti, hylsy, ydinporaus, rakennustyö, bcf, csv
from: 2d597f01
---

## Mitä teet

Varmista, että palvelut sopivat rakennukseen: mikä törmää rakenteeseen, mikä kulkee liian lähellä sitä ja mihin seiniin ja laattoihin tarvitaan aukkoja. Avaa vasemmasta paneelista {{ui:Törmäystarkastus}}; osio **Putket ja kanavat rakennetta vastaan** on tavallisen tarkastuksen alla.

## Kovat törmäykset

Kahden joukon listat tarjoavat nyt myös **Putket ja kanavat**, **Seinät**, **Laatat ja katot**, **Palkit**, **Pilarit** ja **Rakenne** (kaikki neljä), ja kukin näyttää, kuinka monta elementtiä se sisältää. Napsauta {{ui:Putket ja kanavat × rakenne}} valitaksesi ensimmäisen ja viimeisen ja suorittaaksesi tarkistuksen; tai valitse mikä tahansa pari itse ja napsauta {{ui:Suorita}}. Katso [Tarkista törmäykset](topic:clash-check).

## Vapaat tilat

Jotkin palvelut tarvitsevat tilaa ympärilleen: eristeensä sekä tilaa työskentelyyn tai hylsyä varten.

1. Anna putken tai kanavan reitille **Eristys**-paksuus kohdassa Ominaisuudet (sille ei piirretä mitään).
2. Kirjoita törmäystarkastukseen **Rako putkien ja kanavien ympärillä** (mm).
3. Napsauta {{ui:Tarkista vapaat tilat}}: jokainen osa, joka on lähempänä seinää, laattaa, palkkia tai pilaria kuin sen eristys plus rako, listataan sen etäisyyden ja vaaditun etäisyyden kanssa. Napsauta riviä nähdäksesi molemmat.

Osa, joka kulkee seinän tai laatan läpi, on aukko eikä vapaa tila, ja se listataan siellä.

## Tarvittavat aukot

Napsauta {{ui:Tarvittavat aukot}}. Kun reitin keskiviiva kulkee seinän tai laatan läpi, BimCraft listaa aukon, jota se tarvitsee: pyöreä pyöreälle putkelle tai kanavalle, muuten suorakaide, joka on yhtä suuri kuin reitin ulkomitta plus kaksi kertaa sen eristys plus kaksi kertaa rako, keskitettynä kohtaan, jossa reitti ylittää. Napsauta riviä nähdäksesi reitin ja seinän tai laatan.

- {{ui:Aukot CSV:nä}}: yksi rivi aukkoa kohden, jossa on reitti, sen koko ja eristys, aukon koko, elementti, jonka läpi se kulkee, ja sen GlobalId, kerros, keskipisteen X, Y ja Z sekä se, kuinka pitkälle reitti kulkee läpi.
- {{ui:Aukot BCF-havaintoina}}: yksi havainto aukkoa kohden, jossa on kamera, joka katsoo sitä, sekä valittuna reitti ja elementti; tämä on tarkoitettu rakennesuunnittelijan ohjelmaan.

:::note
Mitään ei leikata: aukot ovat luettelo niille, jotka mitoittavat ne. Rako on sinun kirjoitettavissasi; mikään määräys ei kerro, kuinka suuren aukon on oltava. Palkit ja pilarit ovat törmäyksiä, eivät aukkoja: se, saako putki kulkea niiden läpi, on rakennesuunnittelijan päätös.
:::
