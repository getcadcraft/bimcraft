---
title: Piirtoneuvot: epätavalliset mitat tehdään varoituksella
summary: BimCraft tekee sen, mitä pyydät. Tavallisuudesta poikkeava mitta näkyy varoituksena kohdassa Ongelmat; se ei koskaan estä piirtämistä tai tallentamista.
keywords: neuvo, varoitus, ongelmat, hylätty, ei piirrä, liian pieni, liian kapea, minimi, raja, portaan leveys, nousu, askelma, pilari, luiska, ovikoko, ruudukkoviiva, kerroksen korkeus, katto-ikkuna, kierreportaat, rakennuslava, lyhyt seinä, ei esteitä
from: 20090130
---

## Mitä teet

Piirrä mitta, joka ei ole tavallinen, ja katso, missä BimCraft kertoo siitä.

## Vaiheet

1. Piirrä tai muuta elementti haluamallasi tavalla, esimerkiksi 400 mm leveä portaikko.
2. BimCraft tekee sen pyytämäsi mukaisesti.
3. Avaa {{ui:Problems}} yläpalkista. Kohdassa **Piirtoneuvot** on varoitus, joka nimeää elementin, antamasi mitan ja tavallisen vaihteluvälin.
4. Napsauta varoitusta valitaksesi elementin. Muuta mittaa, jos kyseessä oli lipsahdus, tai jätä se: varoituksen voi hyväksyä, perusteluineen tai ilman.

## Mikä on neuvo

Nämä estettiin ennen. Nyt ne tehdään, kukin varoituksella:

- **Portaat**: kapeampi kuin 500 mm tai leveämpi kuin 5 m; nousu alle 100 mm tai yli 300 mm; askelma alle 150 mm tai yli 600 mm.
- **Kierreportaat**: tolppa alle 40 mm tai yli 400 mm; askelmat alle 100 mm syviä kulkulinjalla.
- **Pilarit**: alle 50 mm poikki tai alle 300 mm korkeita.
- **Luiskat**: alle 300 mm leveitä.
- **Ovet ja ikkunat**: alle 100 mm leveitä tai korkeita.
- **Ruudukkoviivat**: alle 100 mm pitkiä.
- **Seinät**: alle 50 mm pitkä seinä, esimerkiksi rajauksen jäljiltä.
- **Kerrokset**: alle 1 m tai yli 100 m korkeita (uusi rakennus, jaetut kerrokset, kerroksen korkeus).
- **Katto-ikkunat**: leveys alle 600 mm tai yli 12 m; etuseinä alle 300 mm tai yli 4 m; ulokkeet yli 1 m; seinät alle 50 mm tai yli 400 mm.
- **Rakennuslavat**: sivuluiskat alle 1:1 tai yli 10:1.

## Mikä on yhä estettyä

Vain se, mitä ei voi rakentaa tai löytää. Jokaisella on viesti, joka kertoo syyn:

- Mitta alle 10 mm (seinä alle 1 mm): rakennettavaa ei ole.
- Katto-ikkuna, joka ei ole leveämpi kuin kaksi kertaa seinänsä paksuus: sen kaksi sivuseinää kohtaisivat.
- Rakennuslava, jonka sivuluiskat ovat jyrkempiä kuin 0.1:1 (se on tukimuuri) tai loivempia kuin 100:1 (maanmuokkaus jatkuisi loputtomiin).
- Jokin, joka ei mahdu sinne, minne asetit sen, ääriviiva, joka leikkaa itsensä, tai elementti, jota ei ole enää mallissa.

## Hyvä tietää

- Neuvo lasketaan mallista, joten se on taas näkyvissä, kun avaat tiedoston myöhemmin, ja se poistuu, kun mitta korjataan.
- Mallitarkistukset, säännöstöpaketit ja IDS-tarkistukset luettelevat vain löytämänsä. Mikään kohdassa {{ui:Problems}} ei estä piirtämistä tai tallentamista.
- Tavalliset vaihteluvälit ovat yleistä käytäntöä, eivät rakennusmääräys. Määräystä varten lisää Rakennusmääräykset-lisäosa ja valitse paikkakuntasi.

## Seuraavaksi

- [Tarkista mallin yleisiä ongelmia](topic:model-checks)
- [Portaat ja kaiteet](topic:stairs-and-railings)
