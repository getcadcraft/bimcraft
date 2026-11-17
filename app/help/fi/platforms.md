---
title: Selaimet, laitteet ja muisti
summary: Mitä BimCraftissa eroaa Chromen, Edgen, Firefoxin ja Safarin välillä, Macilla, Windowsilla ja Linuxilla, hiirellä, kosketuslevyllä tai kosketusnäytöllä, ja kuinka suuren tiedoston se voi ottaa vastaan.
keywords: selain, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tabletti, puhelin, kosketus, kosketuslevy, muisti, suuret tiedostot, webgl, suorituskyky
from: fd8acba1
---

BimCraft toimii nykyisissä Chrome-, Edge-, Firefox- ja Safari-versioissa, Macilla, Windowsilla ja Linuxilla. 3D-näkymä tarvitsee WebGL:n, jonka jokaisessa nykyisessä selaimessa on. Katso [Selaimet ja tietokoneet](common:browsers), mitä sovellukset tarvitsevat yleisesti.

## Kansion avaaminen

| Selain | {{ui:Avaa kansio}} tekee tämän | Kansion vetäminen sisään | {{ui:Viimeisimmät kansiot}} |
|---|---|---|---|
| Chrome, Edge | Selaimen kansionvalitsin, sitten kehote tiedostojen katselun sallimisesta: napsauta painiketta **Näytä tiedostot** | Avautuu ilman kehotetta | Kyllä, valituille tai vedetyille kansioille |
| Firefox | Järjestelmän kansionvalitsin | Avautuu ilman kehotetta | Ei |
| Safari | Järjestelmän kansionvalitsin, jossa on **Lähetä**-painike (mitään ei lähetetä) | Avautuu ilman kehotetta | Ei |

Taustalla: Chrome ja Edge käyttävät File System Access -valitsinta ja voivat muistaa kansion. Firefox ja Safari käyttävät vanhempaa kansionvalitsinta, joka antaa kaikki kansion tiedostot kerralla eikä sitä voi muistaa. Vedetty kansio luetaan merkintä kerrallaan jokaisessa selaimessa.

:::chromium
Brave ja jotkin muut Chromium-selaimet poistavat kansionvalitsimen käytöstä. BimCraft käyttää silloin järjestelmän kansionvalitsinta, ja selain saattaa kysyä: ”Lähetetäänkö *n* tiedostoa tälle sivustolle?”. Mitään ei lähetetä; tiedostot menevät vain välilehdelle. Kansion vetäminen sisään välttää kysymyksen.
:::

## Mac, Windows ja Linux

- Tässä kirjoitetut pikanäppäimet {{key:Mod+S}} ja {{key:Mod+Z}} ovat Command Macilla ja Ctrl Windowsilla ja Linuxilla.
- {{key:Ctrl+Shift+F}} (näyttötilat) on Control kaikilla alustoilla, myös Macilla.
- Tiedostodialogit ja latauskansio ovat järjestelmäsi omia.

## Hiiri, kosketuslevy ja kosketus

| Syöte | 3D-näkymä | 2D-piirustus |
|---|---|---|
| Hiiri | Vasen vedä kiertää, oikea vedä panoroi, rulla zoomaa, napsautus valitsee | Mikä tahansa veto panoroi, rulla zoomaa, kaksoisnapsautus sovittaa |
| Kosketuslevy | Napsautus ja veto kiertää; {{key:Shift}} tai {{key:Mod}} ja veto panoroi; kahden sormen vieritys tai nipistys zoomaa | Napsautus ja veto panoroi; kahden sormen vieritys tai nipistys zoomaa |
| Kosketus | Yksi sormi kiertää, kaksi sormea nipistävät ja panoroivat, napautus valitsee | Yksi sormi panoroi; nipistyszoomia ei vielä ole; napauta {{ui:Sovita}} |

Macin kosketuslevyllä oikea napsautus on kahden sormen napsautus (tai Control-napsautus). Katso [Näppäimet, hiiret ja kosketuslevyt](common:keys).

Tabletit ja puhelimet voivat avata yksittäisiä tiedostoja ja katsella niitä, mutta näyttö on pieni, monet mobiiliselaimet eivät voi valita kansioita, ja suuret mallit eivät ehkä mahdu niiden muistiin. Tietokone toimii parhaiten.

## Suuret tiedostot ja muisti

Kaikki, minkä BimCraft lukee, on selainvälilehden muistissa. Se, kuinka paljon välilehti voi käyttää, riippuu selaimesta ja tietokoneestasi enemmän kuin BimCraftista.

| Tiedosto | Kuinka paljon luetaan | Mitä odottaa |
|---|---|---|
| IFC | Koko tiedosto ja siitä rakennettu 3D-geometria | Koko riippuu tietokoneestasi ja selaimestasi; useiden satojen megatavujen malli voi olla liikaa kannettavalle. Yli 1.5 miljoonan kolmion mallissa reunat kytketään pois |
| Projekti- ja perhetiedostot | Noin 40 KB – 100 KB, koosta riippumatta | Jopa hyvin suuret keskusmallit avautuvat hetkessä, myös verkkoasemalta |
| DWG ja DXF | Koko tiedosto | Hyvin suuret piirustukset näyttävät ”This drawing is very large; only part of it is shown.” |
| Kansiot | Tiedostoluettelo, plus muutama kilotavu per malli | Enintään 20,000 tiedostoa |

Jos välilehden muisti loppuu, selain näyttää oman virhesivunsa (esimerkiksi Chromessa ”Aw, Snap!”). Sulje muut välilehdet, lataa BimCraft uudelleen ja yritä uudelleen, tai käytä tietokonetta, jossa on enemmän muistia.

## Liittyvää

- [Verkossa ja offline-tilassa](topic:online-offline)
- [Vianmääritys](topic:troubleshooting)
