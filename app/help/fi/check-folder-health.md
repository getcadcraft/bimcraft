---
title: Tarkista kansio vaurioituneiden kopioiden, puuttuvien linkkien ja jäämien varalta
summary: Käytä kansioraporttia löytääksesi katkenneet mallitiedostot, valitaksesi uusimman kelvollisen varmuuskopion, nähdäksesi puuttuvat linkit ja lukitus- ja väliaikaistiedostot.
keywords: terveystarkistus, vaurioitunut, korruptoitunut, puutteellinen, katkaistu, varmuuskopio, puuttuvat linkit, xref puuttuu, tarkastus, jäämät, lukitustiedostot, dwl, bak, luovutus
from: 3025a539
---

## Mitä teet

Tarkista projektikansio ennen sen luovuttamista tai ennen työn aloittamista: onko jokainen malli täydellinen, mikä varmuuskopio on viimeinen kelvollinen ja ovatko kaikki linkitetyt tiedostot paikallaan?

## Vaiheet: vaurioituneet kopiot

1. Avaa projektikansio. Katso [Avaa koko projektikansio](topic:open-project-folder).
2. Lue kansion nimen alla olevat huomautukset. "2 tiedostoa on puutteellisia tai ei ole luettavissa. Katso alla olevat mallit." tarkoittaa, että katsottavaa on.
3. Katso **Mallit**-kohdan **Tila**-saraketta. **Täydellinen** on kunnossa. Keltainen "1 puutteellinen" tarkoittaa, että yksi kopio on viallinen, mutta toinen on kunnossa. Punainen **Puutteellinen** tarkoittaa, ettei kelvollista kopiota löytynyt.
4. Avaa ongelmallisen mallin alla **Kaikki … kopiot**. Se luettelee pääasiallisen tiedoston ja jokaisen numeroidun varmuuskopion, uusin ensin, koon, päiväyksen ja tilan kanssa.
5. Lue luettelon yläpuolella oleva huomautus, esimerkiksi "Tower.rvt on puutteellinen (183.2 MB, sen koon pitäisi olla vähintään 214.0 MB). Kortti näyttää uusimman täydellisen kopion, Tower.0012.rvt (Mar 3, 2025)."
6. Napsauta haluamaasi kopiota avataksesi sen. Vain täydellisiä kopioita voi napsauttaa.

## Mitä terveystarkistus tekee

Jokaisen mallin jokaisesta kopiosta tarkistetaan nopeasti sen otsikko, 512 tavua kukin, joten jopa suuri mallikansio tarkistuu sekunneissa. Tiedosto, jonka oma hakemisto osoittaa sen lopun ohi, on katkaistu kopioinnin, lähetyksen tai synkronoinnin aikana. Pilvipalvelun tiedosto, joka on yhä "vain verkossa" -tilassa, näyttää samalta.

Kunkin mallin kortti luetaan pääasiallisesta tiedostosta, kun se on kunnossa, ja uusimmasta kunnossa olevasta varmuuskopiosta, kun se ei ole.

## Vaiheet: puuttuvat linkit

1. Etsi kansion nimen alta huomautus "*n* linked files are not in this folder." eli "*n* linkitettyä tiedostoa ei ole tässä kansiossa".
2. Vieritä kohtaan **Linkitetyt ja viitatut tiedostot**. Puuttuvat linkit luetellaan ensin.
3. Lue jokaisen linkin **Missä**-sarake:
   - **Tässä kansiossa**: löytyi siitä polusta, jonka malli tallensi.
   - **Sama nimi löytyi**: samannimen tiedosto on muualla kansiossa. Tarkista, että se on oikea.
   - **Kirjastotiedosto**: avainsanataulukko tai kokoonpanokoodin taulukko. Ne tulevat ohjelman mukana jokaiselle tietokoneelle, joten niiden ei odoteta olevan kansiossa.
   - **Ei tässä kansiossa**: ei löytynyt mistään kansion sisältä.
4. Lue **Käyttäjä**-sarake nähdäksesi, mitkä mallit linkittävät kutakin tiedostoa.

BimCraft etsii jokaisen linkin ensin suhteellisen polun perusteella, sitten tallennetun polun lopun perusteella (joten `\\server\jobs\Tower\Cad\X-Refs\site.dwg` löytyy kohdasta `X-Refs/site.dwg`, kun valitsit `Cad`-kansion) ja lopuksi tiedostonimen perusteella mistä tahansa kansion kohdasta.

## Vaiheet: jäämät

1. Vieritä raportin loppuun kohtaan **Sivuun jätetyt**.
2. Lue kolme riviä, jotka voivat ilmestyä:
   - Huoltokansiot (`*_backup`, `*_log`, `Revit_temp`): ei luettu.
   - Lukitus-, loki- ja varmuuskopiojäämät: tiedostot, kuten `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp` ja `.sv$`. Ohjelmat jättävät ne jälkeensä, jos ne kaatuivat tai olivat auki, kun kansio kopioitiin. Ne on yleensä turvallista poistaa, kun kukaan ei enää ole avannut tiedostoja.
   - Muut tiedostot: kaikki muu, mitä BimCraft ei lue.

## Yleisiä virheitä

- **Vaurioituneen pääasiallisen tiedoston poistaminen ennen hyvän varmuuskopion tallentamista.** Kopioi uusin täydellinen varmuuskopio ensin ja käsittele vasta sitten vaurioitunut tiedosto.
- **"Sama nimi löytyi" -merkinnän luottaminen sokeasti.** Kaksi eri piirustusta voi jakaa saman nimen. Avaa molemmat, jos epäilet.
- **Kirjastotiedoston puuttumisen pitäminen ongelmana.** Avainsana- ja kokoonpanokoodien taulukot kulkevat ohjelman mukana jokaisella tietokoneella.
- **Tiedostomäärä vaihtelee selaimittain.** Firefoxissa ja Safarissa {{ui:Avaa kansio}} antaa kaikki tiedostot, myös huoltokansioiden sisällä olevat, joten määrä (ja 20 000 tiedoston raja) sisältää ne. Kansion vetäminen sisään ohittaa ne, kuten Chrome ja Edge tekevät. Raportti on muuten sama.
