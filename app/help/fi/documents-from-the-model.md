---
title: Asiakirjat mallista
summary: Kirjoita erittely tai kuvaus kerran pohjana, jossa on kentät määrille, ominaisuuksille ja tunnisteille, ja täytä se avoimesta IFC-mallista PDF- tai Word-asiakirjaksi.
keywords: asiakirja, asiakirjat, erittely, kuvaus, pohja, markdown, raportti, word, docx, pdf, määrät, luettelo, ammattiala, ovien luettelo, pintakäsittelyt, documentcad
from: 2b0c9156
---

## Mitä teet

Pohja on Markdown-muotoinen teksti, jossa on kenttiä kaksinkertaisissa aaltosulkeissa. BimCraft täyttää kentät avoimesta mallista (lukumäärät, tyypeittäin lasketut määrät, ominaisuudet ja omat [tunnisteet](topic:tags-and-schedules)) ja tallentaa tuloksen PDF-tiedostona, Word-asiakirjana (.docx) tai Markdownina.

## Vaiheet

1. Avaa IFC-malli.
2. Avaa vasemmassa paneelissa, kohdassa {{ui:Määrät}}, {{ui:Asiakirjat mallista}}.
3. Valitse pohja: {{ui:Ovet ja okaluvat}} tai {{ui:Seinät, vuoraukset ja pintakäsittelyt}}, tai {{ui:Lataa pohja (.md)…}} omasi.
4. Jos pohja lukee tunnisteita, joita malli ei vielä määrittele, napsauta {{ui:Lisää tämän pohjan tunnisteet}}, ja merkitse sitten elementit kohdassa {{ui:Tunnisteet}}.
5. Muokkaa tekstiä haluamallasi tavalla ja napsauta {{ui:Näytä asiakirja}}.
6. Napsauta {{ui:PDF}} (valitse ensin A4 tai Letter) tai {{ui:Word (.docx)}}.

## Mitä pitäisi näkyä

- Täytetty asiakirja painikkeiden alla taulukoineen.
- Varoituslista, kun kenttää ei voi lukea (tunniste, jota ei ole määritelty, ominaisuus, jota mallissa ei ole, lohko, jota ei koskaan suljeta); tällainen kenttä tulostuu muodossa `[?…]`.
- PDF-sivut, joiden alatunnisteessa ovat asiakirjan otsikko ja ”Sivu 1/3”; pitkät taulukot jatkuvat seuraavalle sivulle otsikkoriveineen.

## Kentät

| Kenttä | Antaa |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | projektin nimi ja kuvaus, tiedoston nimi, tänään |
| `{{count IfcDoor}}` | kuinka monta ovea |
| `{{sum IfcWall NetSideArea}}` | yhteissumma yksikköineen |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | laskutoimitus (`+ - * /` ja sulkeet) hakasulkeisiin merkittyjen termien yli: `[sum …]`, `[count …]` ja `{{#each}}`-silmukan sisällä `[qty Width]`. `round n` asettaa desimaalit, `unit` lisää yksikön. Jos jotakin ei voi lukea tai jaetaan nollalla, tulostuu `[?…]` ja varoitus |
| `{{qty IfcWall NetSideArea by Type}}` | taulukko: yksi rivi tyyppiä kohden lukumäärineen ja yhteissummineen sekä yhteisrivi |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | taulukko, yksi rivi elementtiä kohden |
| `{{tag Finish}}` | silmukassa elementin arvo; muualla kaikki käytetyt arvot (Oak, Paint) |
| `{{tags}}` | tunnisteiden määritykset taulukkona |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | teksti kerran per elementti; `{{else}}`-kohdan jälkeinen osa, kun elementtejä ei ole |
| `{{#group IfcWall by Type}} … {{/group}}` | teksti kerran tyyppiä kohden, sisällä `{{value}}`, `{{count}}`, `{{sum Length}}` ja tavallinen `{{#each}}` |

`{{#each}}`-silmukan sisällä: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC-tunniste), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elementin oma, yksikköineen).

Luokkia voi olla useita (`IfcDoor|IfcWindow`) tai kaikki elementit (`*`). Rajaa mitä tahansa niistä `where`-ehdolla: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Ehdot ovat `=`, `!=`, `~` (sisältää), `>`, `<`, `>=`, `<=`, `has` ja `hasnot`; yhdistä useita sanalla `and`; arvo, jossa on välilyöntejä, laitetaan ”lainausmerkkeihin”. `sort Name` järjestää silmukan.

## Luettelot ja erittely asiakirjassa

`{{schedule doors}}` tulostaa mallin luettelon taulukkona toimistosi asettelussa: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers` tai Luetteloissa tallentamasi asettelun nimi. `{{specification}}` tulostaa projektin erittelyn. Pohjat **Työpiirustusten luettelot** ja **Erittely** käyttävät niitä. Esikatselussa napsauta tällaisen luettelon lukua valitaksesi elementit, joista se tuli. Katso [Asettele, tallenna ja vie luettelo](topic:schedule-layouts) ja [Kirjoita erittely mallista](topic:specification).

## Hyvä tietää

- Kenttä nimeää sisäänrakennetun kentän (Name, Type, Storey, Class, Material, Mark), tunnisteen (`tag:Fire rating` tai sen nimi), ominaisuuden (`Pset_WallCommon.FireRating`) tai pelkän ominaisuuden nimen (`NetSideArea`, `Width`). Paljas nimi lukee kunkin elementin oman joukon, määrien joukot ensin, joten `Width` ovessa on oven leveys, ei seinän paksuus. `where`-ehdossa paljas nimi lukee joukon, jonka useimmilla valituilla elementeillä on.
- Määrät ovat sitä, mitä tiedoston määrien joukot sanovat (BimCraft kirjoittaa ne piirtämilleen asioille); yksiköt tulevat tiedoston yksikköasetuksista.
- Kenttäsanat (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) pysyvät englanniksi kaikilla kielillä. Esimerkkipohjat ovat englanniksi.
- Mallin teksti ei koskaan muutu muotoiluksi: nimi, jossa on `*` tai `|`, tulostuu sellaisena kuin se on.
- Säilytä muokkaamasi pohja painikkeella {{ui:Säilytä tässä selaimessa}} (vain tässä selaimessa se on) tai {{ui:Lataa pohja}}.
- PDF-teksti käyttää vakio-PDF-fontteja: merkki, joka on länsieurooppalaisen tekstin ulkopuolella, tulostuu muodossa ”?”, ja tilarivi kertoo, kuinka monta.
- Alakohtaiset pohjat ovat kirjastossa (tyyppi Asiakirjapohja). Kohdassa Asiakirjat mallista valitse Kirjastosta…, valitse yksi, ja sen teksti ja tunnisteet, joita se lukee, tulevat mukaan; muokkaa sitä haluamallasi tavalla. Oman pohjan julkaiseminen kirjastoon on sama lähetys kuin mikä tahansa muu kohde. Ei vielä toteutettu: laskutoimituksia lukumäärien ja summien lisäksi.
