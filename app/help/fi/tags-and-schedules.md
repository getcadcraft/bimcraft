---
title: Merkitse elementit tunnisteilla ja tee luetteloita tunnisteiden mukaan
summary: Määrittele omat tunnisteet (nimi, tyyppi, sallitut arvot, luokat), merkitse monta elementtiä kerralla ja tee luetteloita, joiden sarakkeet, suodattimet ja ryhmät lukevat tunnisteita. Tunnisteet säilyvät IFC-tiedostossa.
keywords: tunnisteet, tunniste, merkintä, mukautetut ominaisuudet, parametrit, jaetut parametrit, ominaisuusjoukko, pset, luettelo, suodatin, ryhmittele, viimeistely, palonkestävyys, massamuokkaus, csv
from: 9cc7c90d
---

## Mitä teet

Tunniste on oma ominaisuutesi, kuten *Viimeistely* tai *Palonkestävyys*. Määrittelet sen kerran projektille, asetat sen monelle elementille kerralla, ja jokainen BimCraftin luettelo voi lukea sen: tässä tunnisteluettelo, {{ui:Määrät}}, Etsi, Väritä ominaisuuden mukaan ja [Asiakirjat mallista](topic:documents-from-the-model).

## Vaiheet

1. Avaa IFC-malli tai aloita uusi rakennus.
2. Vasemmassa paneelissa, kohdassa {{ui:Määrät}}, avaa {{ui:Tunnisteet}}.
3. Napsauta {{ui:Lisää merkintä}}. Anna sille nimi ja valitse tyyppi. Halutessasi luettele sallitut arvot (pilkulla erotettuina) ja luokat, joita varten tunniste on (`IfcDoor`, `IfcWall` …). Napsauta {{ui:Lisää tunniste}}.
4. Valitse elementit mallista (Etsi auttaa: valitse kaikki ovet kerralla).
5. Kohdassa {{ui:Merkitse valinta tunnisteella}} valitse tai kirjoita arvo jokaiselle tunnisteelle, jonka haluat asettaa. Jätä muut ennalleen ja napsauta {{ui:Käytä … valittuihin elementteihin}}.
6. Kohdassa {{ui:Tunnisteluettelo}} valitse sarakkeet, lisää suodattimet, valitse {{ui:Ryhmittele}} ja napsauta sitten {{ui:Lataa CSV}}.

## Mitä pitäisi näkyä

- Muutoslistassa on askel jokaiselle tallennetulle määrittelylle ja jokaiselle merkinnälle. {{ui:Kumoa}} palauttaa sen.
- Elementit, jotka eivät kuulu tunnisteen luokkiin, jäävät sen ulkopuolelle, ja tilarivi kertoo, kuinka monta.
- Tunnisteluettelossa on yksi rivi elementtiä kohden, ryhmiteltynä valitsemasi kentän mukaan. Napsauta rivin ensimmäistä solua valitaksesi kyseisen elementin.
- {{ui:Määrät}} listaa tunnisteet kohdassa `CadCraft_Tags`, joten voit laskea pinta-aloja tai lukumääriä yhteen tunnisteen mukaan siellä.

## Tyypit

Tyypit ovat samat kuin perheparametrien tyypit: Pituus (millimetreinä), Kulma (asteina), Luku, Kokonaisluku, Kyllä / Ei, Kynä (1–16), Teksti, Materiaali ja Täyttö. Arvo, joka ei sovi tyyppiinsä tai ei ole yksi sallituista arvoista, hylätään viestillä, eikä mikään muutu.

## Hyvä tietää

- Kaikki on tavallista IFC:tä, joten muut ohjelmat lukevat arvot. Määritelmät ovat projektin ominaisuusjoukossa `CadCraft_TagDefs`, arvot kunkin elementin ominaisuusjoukossa `CadCraft_Tags` (yksi ominaisuus per tunniste). Pituudet kirjoitetaan tiedoston pituusyksikössä.
- `IfcWall` tunnisteen luokissa kattaa myös standard-case- ja elementoidut seinät.
- Tunnisteen nimeäminen uudelleen nimeää sen arvot uudelleen jokaisella elementillä samassa vaiheessa. Tunnisteen poistaminen poistaa vain sen määrittelyn: jo asetetut arvot jäävät elementeille tavallisina ominaisuuksina. Tyhjennä ne ensin (valitse {{ui:Tyhjennä}}), jos haluat poistaa ne.
- Tunnisteet CadCraft-piirustussovelluksessa (lohkoattribuutit) eivät ole vielä toteutettuja.
