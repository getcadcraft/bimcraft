---
title: Perustukset seinien alla
summary: Aseta maanvarainen laatta, perusmuurit laatalla, ryömintätila tai kellari rakennuksen alle yhdellä napsautuksella. Anturat mitoitetaan seinien ja kerrosten määrän mukaan, ja perustus seuraa seinien siirtymistä.
keywords: perustus, anturaperustus, maanvarainen laatta, vahvistettu reuna, yhtenäislaatta, perusmuuri, ryömintätila, kellari, kellarin seinä, routa, betoni, anturan leveys
from: c0e20172
---

## Mitä teet

Anna rakennukselle perustus, joka vastaa sen seiniä. BimCraft seuraa seinien ulkopintaa, mitoittaa anturat seinätyypin ja niiden päällä olevien kerrosten määrän mukaan ja tekee perustuksen uudelleen aina, kun seinät muuttuvat.

## Lisää perustus

1. Sillä tasolla, jonka seinät seisovat sen päällä (yleensä ensimmäinen), avaa {{ui:Koontiversio}} ja valitse {{ui:Perustus}}.
2. Valitse laji:
   - **Maanvarainen laatta**: 4 in:n betonilaatta, jonka yläpinta on lattia, ja seinien alla vahvistettu reuna.
   - **Perusmuurit ja laatta**: perusmuurit lattiaan asti antureilla, ja laatta niiden sisällä.
   - **Ryömintätila**: perusmuurit, jotka päättyvät lattiarungon alle, antureilla, ilman laattaa.
   - **Kellari**: koko korkuiset perusmuurit antureilla ja kellarilaatta lattiarungon alla.
3. Osoita rakennuksen sisälle: anturat näkyvät katkoviivoina kokonsa kanssa. Napsauta.

Rakennus, jolla on jo perustus, valitaan napsauttamalla sitä, joten voit muuttaa sitä sen sijaan, että lisäisit toisen.

## Muuta sitä

Valitse perustus (napsauta rakennuksen sisältä {{ui:Perustus}}-työkalulla tai napsauta mitä tahansa sen osaa 3D-näkymässä tai mallipuussa) ja muuta sitä **Ominaisuudet**-kohdassa: laji, anturan leveys ja syvyys, kuinka syvällä anturan alapinta on, seinän paksuus, kuinka paljon lattian alle seinät päättyvät, kellarin korkeus ja laatan paksuus. Jokainen muutos on yksi kumoamisvaihe.

Koot, jotka on merkitty **auto**, tulevat seinistä: anturat ovat 12 in, 15 in tai 23 in leveitä yhdelle, kahdelle tai kolmelle kerrokselle laatalla tai perusmuureilla, 18 in, 22 in tai 27 in ryömintätilan tai kellarin päällä, ja 4 in leveämpiä muurattujen tai betonisten seinien alla. Kirjoita koko asettaaksesi oman; kirjoita `0` palataksesi automaattiseen.

:::warning
Automaattiset koot ovat nimettyjä oletusarvoja tyypillisille kevytrakenteisille taloille, eivät laskelmia. Suunnittelija tai insinööri tarkistaa anturat, syvyydet ja seinät maaperän, routasyvyyden ja kuormien kannalta.
:::

## Mitä tallennetaan

Perustus tallennetaan IFC-elementtikokoonpanona (”Perustus”), joka koostuu lajin mukaan antura- (tai laatan vahvistetusta reunasta), perusmuuri- ja laatta-osista, kaikki betonia. Jokaisella osalla on määränsä: pituudet, leveydet, korkeudet, pinta-alat ja tilavuudet, valmiina määrälaskentaan.

## Hyvä tietää

- Siirrä, lisää tai poista seiniä, niin niiden alla oleva perustus tehdään uudelleen. Piirrä seiniä kerroksen päälle, ja alla olevat anturat leventyvät lisäkerrosta varten.
- {{key:Delete}} poistaa valitun perustuksen kaikkine osineen.
- Kun tontin maanpinta on mallissa (katso [Tontin maanpinta, rakennuspohja ja päällysteet](topic:terrain)), perusmuurit ja ryömintätilan anturat askeltavat sen mukana 8 in:n askelin.
- Sisäseinien alla olevia antureita ei ole vielä toteutettu.
