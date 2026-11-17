---
title: Muuta tyypin ominaisuutta kaikille tyypin elementeille
summary: Erota tyyppiominaisuudet esiintymäominaisuuksista, muuta arvo tyypillä niin, että jokainen elementti seuraa sitä, ja varmista, että yhden elementin oma muokkaus pysyy sen omana.
keywords: tyyppi, esiintymä, tyyppiominaisuudet, perhetyyppi, jaettu, kopioi kirjoittaessa, kaikki elementit, joukkomuokkaus, valmistaja, malli
from: bffd8789
---

## Mitä teet

Aseta valmistaja oven tyypille, jotta jokainen tämän tyypin ovi näyttää sen, ja anna sitten yhdelle ovelle oma palonkestoluokka muihin koskematta. Tämä näyttää eron tyyppi- ja esiintymäominaisuuksien välillä BimCraft-ohjelmassa.

## Tyyppi vai esiintymä?

- **Esiintymä**-ominaisuus kuuluu yhdelle elementille: sen tunniste, merkintä, huone, oma palonkestoluokka.
- **Tyyppi**-ominaisuus kuuluu tyypille, jonka monet elementit jakavat: valmistaja, malli, oven tyypin leveys.

{{ui:Ominaisuudet}}-paneelissa joukot, jotka tulevat tyypistä, ovat nimensä perässä merkinnällä " (tyyppi)" ja rivillä ”Tyyppiominaisuus: muutos tässä koskee jokaista tämän tyypin elementtiä.” Muut joukot kuuluvat elementille itselleen. **Tyyppi** ensimmäisessä lohkossa näyttää tyypin nimen.

## Vaiheet: muuta tyyppi

1. Avaa IFC-malli ja napsauta ovea.
2. Huomaa sen **Tyyppi** {{ui:Ominaisuudet}}-paneelin ensimmäisessä lohkossa, esimerkiksi "Single-Flush 900 x 2100".
3. Vieritä joukkoon, jonka nimi päättyy "(tyyppi)".
4. Napsauta arvoa, jonka haluat muuttaa, esimerkiksi **Valmistaja**.
5. Kirjoita uusi arvo ja paina {{key:Enter}}.
6. Katso {{ui:Muutokset}}-luetteloa: merkintä päättyy "(tyyppi)".
7. Napsauta toista samantyyppistä ovea.
8. Tarkista sama arvo: se näyttää myös uuden arvon.

## Vaiheet: muuta vain yksi elementti

1. Napsauta yhtä ovea.
2. Avaa joukko, jonka nimessä ei ole "(tyyppi)", esimerkiksi `Pset_DoorCommon`.
3. Napsauta arvoa, kuten **FireRating**, kirjoita uusi arvo ja paina {{key:Enter}}.
4. Napsauta viereistä samantyyppistä ovea.
5. Tarkista sama arvo: se näyttää yhä vanhan arvon.

Vaikka vienti olisi jakanut tuon ominaisuusjoukon molempien ovien välillä, BimCraft antoi ensimmäiselle ovelle oman kopion ennen muuttamista. Katso [Miksi muokkauksesi muuttaa vain yhtä elementtiä](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Tallenna

1. Napsauta {{ui:Tallenna IFC-tiedostona}} tai paina {{key:Mod+S}}.
2. Avaa tallennettu kopio BimCraft-ohjelmalla tai millä tahansa IFC-katselimella ja tarkista molemmat muutokset.

## Yleisiä virheitä

- **Kaikissa malleissa ei ole tyyppejä.** Jotkin viejät eivät kirjoita tyyppiobjekteja, tai ne kirjoittavat kaiken esiintymään. Silloin "(tyyppi)"-joukkoja ei ole, ja jokainen elementti täytyy muuttaa erikseen.
- **Sama arvo näkyy tyyppijoukossa ja esiintymäjoukossa.** Jotkin viejät kirjoittavat parametrin molempiin paikkoihin. Muut ohjelmat voivat lukea kumman tahansa; muuta molemmat, jos haluat niiden olevan samat.
- **Odotat voivasi valita "kaikki tämän tyypin ovet" ja muokata niitä yhdessä.** Tässä versiossa ei ole monivalintaa. Tyyppiominaisuus on tapa muuttaa monta elementtiä kerralla.
