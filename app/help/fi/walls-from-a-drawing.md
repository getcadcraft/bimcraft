---
title: Seinät jäljitetystä piirustuksesta
summary: Muuta DWG- tai DXF-pohjapiirros seinäksi, oviksi ja ikkunoiksi tasolle, ja säilytä piirustus pohjapiirroksen alla viitteenä.
keywords: dwg, dxf, jäljitä, jäljitetty, tuo pohjapiirros, muunna, CAD BIM:iin, 2D 3D:ksi, seinät viivoista, tasot, lohkot, ovet lohkoista, alustapiirros, viitepiirustus, tausta, xref, piirtosovellus
from: 3bf213f1
---

## Mitä teet

Käytä pohjapiirrosta, jonka piirsit (tai joku muu) piirrosohjelmassa, mallin lähtökohtana: sen seinäviivoista tulee seiniä, ja sen ovi- ja ikkunalohkoista tulee ovia ja ikkunoita.

## Vaiheet

1. Ota käyttöön {{ui:Piirrä}} ja valitse tason luettelosta taso, jolle piirustus näkyy pohjapiirroksessa.
2. Valitse {{ui:Koontiversio}} › {{ui:Piirustuksesta…}}, sitten {{ui:Valitse piirustus…}} ja valitse DWG tai DXF.
3. Valintaikkunassa:
   - **Piirustuksen yksiköt** tulevat piirustuksesta; valitse muut, jos ne ovat väärin (jaloissa piirretty pohjapiirros, joka luetaan tuumina, on kaksitoista kertaa liian pieni).
   - **Seinien tasot**: rastita tasot, joilla seinäviivat ovat. Tasot, joiden nimessä on ”wall”, on rastitettu puolestasi.
   - **Viivat ovat**: **kunkin seinän molemmat pinnat** (tavallinen tapa piirtää pohjapiirrokset: jokainen yhdensuuntaisten viivojen pari, jotka ovat enintään 600 mm:n päässä toisistaan, muuttuu yhdeksi seinäksi, joka on yhtä paksu kuin väli), **seinien keskiviivat** tai **yksi pinta**, jolloin seinä on vasemmalla tai oikealla puolella. Keskiviivojen tai yhden pinnan kanssa seinätyyppi määrää paksuuden.
   - **Seinätyyppi** ja **Seinän korkeus**, kuten {{ui:Seinä}}-työkalussa.
   - **Lohkot**: valitse ovi- tai ikkunatyyppi jokaiselle lohkolle, joka on ovi tai ikkuna, tai jätä se pois. Lohkot, joiden nimessä on ”door” tai ”window”, valitaan puolestasi. Jokainen sijoitetaan seinään, jolla se on, yhtä leveänä kuin lohko seinää pitkin; ovi aukeaa sille puolelle, jolle sen kääntö on piirretty.
   - **Minne se menee**: piirustuksen omiin koordinaatteihin tai niin, että sen vasen alakulma on pohjapiirroksen origossa.
   - **Pidä piirustus tämän tason pohjapiirroksen alla**: jätä rasti, jotta näet piirustuksen ohuina viivoina tekemiesi kohteiden alla.
4. Valintojen alla oleva rivi kertoo, kuinka monta seinää, ovea ja ikkunaa se tekee. Napsauta {{ui:Tee ne}}.

## Mitä pitäisi näkyä

- Seinät, ovet ja ikkunat tasolla, liitettyinä yhteen niiden kohdatessa, ja huoneet, jotka ne sulkevat. Kaikki on yksi vaihe, joten {{key:Mod+Z}} peruu sen.
- Piirustus ohuina viivoina pohjapiirroksen alla. {{ui:Koontiversio}} › {{ui:Piirustuksesta…}} luettelee tasolle jätetyt piirustukset, kukin {{ui:Poista}}-painikkeella; poistaminen jättää seinät paikalleen.
- IFC-tiedostossa säilytetty piirustus on tason merkintä (sen viivat), joten muutkin BIM-ohjelmat näyttävät sen.

:::note
PDF tai skannaus toimii myös: katso [Seinät pohjapiirrossarjasta](topic:walls-from-plans). Kaaret jätetään pois (BimCraft piirtää suoria seiniä), samoin lohkojen sisäiset viivat. Viivat, joilla ei ole paria tilassa ”kunkin seinän molemmat pinnat”, lasketaan valintaikkunassa ja jätetään pois: piirrä ne seinät {{ui:Seinä}}-työkalulla tai siisti ne {{ui:Muokkaa}} › {{ui:Typistä / pidennä}} -komennolla (katso [Seinien typistäminen, pidentäminen ja liittäminen](topic:trim-extend-walls)).
:::

:::tip
Jäljitetty skannauksen päälle piirrosohjelmassa? Avaa skannaus myös tässä ja tarkista seinät sitä vasten: katso [Malli skannauksesta](topic:model-from-a-scan).
:::
