---
title: Online ja offline
summary: Mitä BimCraft lataa sivustolta, miten Tallenna offline-käyttöön tekee IFC-malleista ja DWG-piirustuksista avattavia ilman yhteyttä, ja miksi avattuja tiedostoja ei koskaan lähetetä mihinkään.
keywords: offline, online, internet, yhteys, ei verkkoa, lentotila, työmaakäynti, tallenna offline-käyttöön, offline valmis, lähetys, yksityisyys, wasm, webassembly, IFC-moottori, dwg, pilvi
from: 39e5c7eb
---

BimCraft lukee tiedostosi selainvälilehdessä. Avaaminen, tarkastelu, muokkaaminen ja tallentaminen eivät koskaan lähetä tiedostojasi minnekään, onpa yhteys tai ei. [Työskentely offline-tilassa](common:offline) selittää offline-kopiot kaikissa sovelluksissa; tämä sivu kertoo, mikä on BimCraftille erityistä.

## Mitä BimCraft lataa sivustolta

| Osa | Milloin se ladataan ilman offline-kopiota | Koko |
|---|---|---|
| Sovellus itse, 3D-katselin ja IFC-moottorin koodi | Kun avaat BimCraftin | Useita megatavuja |
| IFC-moottorin WebAssembly-osa | Ensimmäinen avaamasi IFC-tiedosto selainvälilehdessä: ”Käynnistetään IFC-moottoria…” | Noin 1.6 MB |

DWG- ja DXF-piirustukset, projekti- ja perhetiedostot sekä kansiot eivät tarvitse mitään lisää: niiden lukijat ovat osa sovellusta.

## Tallenna BimCraft offline-käyttöön

1. Avaa BimCraft yhteyden ollessa käytössä.
2. Napsauta sovelluspalkin {{ui:Tallenna offline-käyttöön}} ylhäällä.
3. Seuraa painikkeen laskuria, esimerkiksi ”Tallennetaan 40 / 212”. BimCraftin kopio on noin 11 MB, koska siinä on IFC-moottori.
4. Odota, että {{ui:Offline valmis}} tulee näkyviin.

Kun painikkeessa lukee {{ui:Offline valmis}}, IFC-mallit, DWG- ja DXF-piirustukset, projektitiedostot, kansiot ja tämä ohje aukeavat ilman yhteyttä. Lukijoita ei tarvitse ”lämmittää” avaamalla ensin IFC- tai DWG-tiedostoa.

Kopion päivittämiseksi tai poistamiseksi napsauta {{ui:Offline valmis}} ja valitse {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}}.

## Mitä painike kertoo

| Painike | Tarkoittaa |
|---|---|
| {{ui:Tallenna offline-käyttöön}} | Tässä selaimessa ei ole vielä offline-kopiota. Napsauta tallentaaksesi sen |
| ”Tallennetaan *n* / *m*” | Tallennetaan; pidä välilehti auki, kunnes se on valmis |
| {{ui:Offline valmis}} | Tallennettu. Vie hiiri päälle nähdäksesi milloin; napsauta valikkoa varten |
| {{ui:Tallennus ei onnistunut}} | Osa tiedostoista ei latautunut. Tarkista yhteytesi ja napsauta yrittääksesi uudelleen. Viimeisin hyvä kopio säilyy, jos sellainen on |
| {{ui:Offline ei käytettävissä}} | Tämä ikkuna ei voi säilyttää offline-kopiota (yksityinen ikkuna tai hallinnoitu tietokone). Katso [Työskentely offline-tilassa](common:offline) |

:::offline
Olet offline-tilassa.

- Jos painikkeessa lukee {{ui:Offline valmis}}, kaikki tiedostotyypit avautuvat normaalisti.
- Jos ei, toimii vain se, minkä tämä välilehti on jo ladannut: lukija, jota ei ole koskaan ladattu tässä välilehdessä, ei käynnisty, ja tämäntyyppisen tiedoston avaaminen näyttää selaimen virheen tilarivillä. Välilehteä ei ladata uudelleen, ennen kuin yhteys on taas käytössä.
:::

## Mikä ei koskaan tarvitse yhteyttä

Kun BimCraft on avoinna välilehdessä, nämä toimivat offline-tilassa myös ilman tallennettua kopiota:

- Projekti- ja perhetiedostojen lukeminen sekä kansioiden tarkistaminen.
- Elementtien valitseminen, ominaisuuksien lukeminen ja IFC-arvojen muokkaaminen jo avoinna olevassa mallissa.
- {{ui:Tallenna IFC-tiedostona}} ja {{ui:Lataa CSV}}: molemmat ovat latauksia, jotka tehdään välilehdessä.

## Mikä ei ole vielä käytettävissä

- **Pilvitallennus.** Tiedostot tallennetaan vain omalle tietokoneellesi.

Katso [Minne tiedostosi menevät](common:your-files).
