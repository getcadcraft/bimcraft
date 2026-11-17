---
title: Tontin maanpinta, rakennustasanne ja päällysteet
summary: Tuo maanpinta malliin mittauspisteistä, korkeuskäyristä, LAS- tai LAZ-skannauksesta, GeoTIFF-tiedostosta, CivilCraft-ohjelman LandXML-maastomallista tai muutamasta korkeuspisteestä. Leikkaa talon rakennustasanne maastoon luiskineen ja leikkaus- ja pengermäärineen, sovita ajoväylät, kulkuväylät ja terassit maastoon ja vie maasto CivilCraft-ohjelmaan LandXML-tiedostona.
keywords: maastomalli, maanpinta, tontti, topografia, mittaus, pisteet, PNEZD, korkeuskäyrät, LAS, LAZ, LiDAR, GeoTIFF, DEM, korkeus, korkeuspiste, kaltevuus, tasaus, rakennustasanne, tasanne, leikkaus, penger, maansiirto, luiska, ajoväylä, kulkuväylä, terassi, päällyste, maanpinnan leikkausviiva, LandXML, CivilCraft
from: 208298d6
---

## Mitä teet

Sijoitat talon sen tontille. Maanpinta tulee osaksi mallia: se näkyy 3D-näkymässä, leikkauksissa ja julkisivuissa, ja pohjakuvassa näkyvät korkeuskäyrät. Talon alle leikataan rakennustasanne, ajoväylät ja kulkuväylät seuraavat maanpintaa, ja anturat laskeutuvat sen mukana.

## Tuo maanpinta malliin

1. Avaa {{ui:Koontiversio}} ja valitse {{ui:Maastomalli}}.
2. Valitse jompikumpi:
   - **Avaa mittaustiedosto…**: mittauspisteitä (PNEZD, PENZD tai pelkkä itä, pohjoinen, korkeus; pilkulla, sarkaimella tai välilyönnillä erotettuna), korkeuskäyriä DXF- tai DWG-tiedostona (murtoviivat korkeuksineen, 3D-murtoviivat), LAS- tai LAZ-skannauksen (maanpintapisteet säilytetään, harvennettuna noin yhteen neliömetriin), GeoTIFF- tai ASCII-korkeusruudukon tai **LandXML**-maastomallin, jollaisen CivilCraft-ohjelma vie (sen omat pisteet ja kolmiot säilytetään; jos tiedostossa on useita pintoja, BimCraft kysyy, mikä niistä on maanpinta; yksiköt tulevat tiedostosta). Valitse tiedoston yksiköt ensin (LandXML ilmoittaa omansa).
   - Tai kirjoita **Korkeuspiste** (lasketaan tämän kerroksen lattiasta, joten `-1'` on jalka lattian alapuolella) ja napsauta pohjakuvassa pisteitä, vaihda korkeus ja napsauta lisää pisteitä ja valitse sitten **Luo maanpinta**. Kolme pistettä riittää alkuun.

Mittauskoordinaatit, jotka ovat kaukana mallista (valtiokoordinaatisto, UTM), siirretään talon kohdalle, ja korkeudet asetetaan niin, että maanpinta talon kohdalla on noin 8" ensimmäisen kerroksen lattian alapuolella. **Nosta maanpintaa** kohdassa {{ui:Ominaisuudet}} korjaa tämän mihin tahansa määrään.

## Rakennustasanne

1. Valitse {{ui:Rakennustasanne}}.
2. Aseta **Marginaali** talon ympärille, kuinka kaukana **tasanne on lattian alapuolella** (8" laatan alla, enemmän ryömintätilan alla) ja **Luiskat** ulos olemassa olevaan maanpintaan (`2:1` = kaksi jalkaa ulospäin jokaista ylös tai alas menevää jalkaa kohti).
3. Osoita talon sisälle ja napsauta.

Maanpinta tasataan talon alla ja marginaaliin asti, ja sen jälkeen se nousee rinteeseen (leikkaus) ja laskee matalalle puolelle (penger), kunnes se kohtaa olemassa olevan maanpinnan. Maanpinnan ja tasanteen {{ui:Ominaisuudet}} antavat leikkaus- ja pengermäärät. Kun siirrät seiniä, tasanne seuraa mukana.

## Ajoväylät, kulkuväylät ja terassit

Valitse {{ui:Päällyste}}, valitse **Kävely**, **Ajoväylä** tai **Terassi** ja napsauta kulmia. Napsauta ensimmäistä kulmaa uudelleen, kaksoisnapsauta tai paina {{key:Enter}} lopettaaksesi. Päällyste seuraa valmista maanpintaa; vaihda sen tyyppi tai paksuus kohdassa {{ui:Ominaisuudet}}.

## Anturat seuraavat maanpintaa

Kun maanpinta on mallissa, runkomuurit ja ryömintätilan anturat seuraavat sitä: kunkin seinän kohdalla anturan syvyys maanpinnan alapuolella säilyy ulkopuolella, ja se porrastaa kokonaisilla 8"-askelilla siellä, missä maanpinta laskee (katso [Seinien alla olevat perustukset](topic:foundations)).

## Vie CivilCraft-ohjelmaan

**LandXML CivilCraft-ohjelmaan** (Maastomalli-rivillä tai maanpinnan {{ui:Ominaisuudet}}-kohdassa) lataa olemassa olevan maanpinnan ja valmiin maanpinnan LandXML-tiedostona. Avaa se CivilCraft-ohjelmassa varsinaista tasausta, salaojitusta ja maansiirtoa varten.

## Hyvä tietää

- Maanpinta tarvitsee IFC4-mallin, kuten jokainen uusi rakennus.
- Korkeuskäyrät näkyvät maanpinnan tason pohjakuvassa maanpinnan {{ui:Ominaisuudet}}-kohdassa asetetulla välillä; joka viides on paksumpi.
- Maanpinta tallennetaan IFC-maastoelementtinä (suljettu kolmioitu pinta, jotta leikkaukset leikkaavat sen); rakennustasanne ja päällysteet tallennetaan sen mukana. Poista maanpinta aloittaaksesi alusta — sen tasanne ja päällysteet lähtevät mukana.
