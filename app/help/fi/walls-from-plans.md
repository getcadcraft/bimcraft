---
title: Seinät pohjapiirrossarjasta (PDF tai skannaus)
summary: Muuta PDF:n sivut tai skannattu piirustus seinäksi, oviksi ja ikkunoiksi, yksi taso kullekin sivulle, ja sivu säilyy kunkin tason pohjapiirroksen alla.
keywords: pdf, pohjapiirrokset, pohjapiirrossarja, skannaus, skannattu piirustus, tiff, jäljitys, seinät PDF:stä, seinät skannauksesta, tasot, sivut, mittakaava, ovet, ikkunat, aukeaminen, alakarmi, alustapiirros
from: b70d9db7
---

## Mitä teet

Aloita malli paperilla olevista pohjapiirroksista: PDF (piirretty viivoina tai PDF:n sisällä oleva skannaus) tai skannaus (PNG, JPEG, TIFF, yksi tai useampi sivu). Jokainen sivu muuttuu yhden tason seinäksi, oviksi ja ikkunoiksi.

## Vaiheet

1. Ota käyttöön {{ui:Piirrä}}. Valitse {{ui:Koontiversio}} › {{ui:Piirustuksesta…}}, sitten {{ui:Valitse piirustus…}} ja valitse PDF tai skannaus.
2. **Sivut ja tasot.** Jokainen sivu on listattu sen mukaan, mitä se on (**viivapiirros** tai **kuva (jäljitetty)**), ja sen tason mukaan, jolle se menee: yksi olemassa olevista tasoista, **uusi taso muiden yläpuolella** tai **jätä tämä sivu pois**. Sivut yhdistetään tasoihin järjestyksessä; muuta mitä tahansa niistä.
3. **Mittakaava.** PDF:lle kerro, miten se on piirretty (**1 : 100**, **1 : 50** …). Muille tai kun et tiedä, valitse **etäisyys, jonka tiedän**: napsauta esikatselussa mittaviivan tai mittakaavapalkin kahta päätä ja kirjoita sitten todellinen etäisyys. Kaikki sivut käyttävät yhtä mittakaavaa.
4. Valitse **seinätyyppi** ja **uuden tason korkeus**. Jätä **Pidä kukin sivu tason pohjapiirroksen alla** rastitettuna, jotta näet kunkin sivun ohuina viivoina tason pohjapiirroksen alla.
5. Valintojen alla oleva rivi kertoo, kuinka monta seinää, ovea ja ikkunaa se tekee ja kuinka monelle tasolle. Napsauta {{ui:Tee ne}}.

## Miten se lukee sivun

- **Seinät** tulevat pareista yhdensuuntaisia viivoja, jotka ovat enintään 600 mm:n päässä toisistaan (seinän kaksi pintaa); seinä on yhtä paksu kuin väli. Viivoitus ja kirjoitukset jätetään pois.
- **Ovet ja ikkunat.** Seinän aukko (500–2600 mm), jonka vieressä on piirretty oven kääntö, on ovi: se on kiinnitetty aukon toiseen päähän ja aukeaa kääntöpuolelle. Aukko tai seinä, jossa on alakarmiviivoja, on ikkuna. Aukko ilman kumpaakaan on ovi, jos se on enintään 1300 mm, ja muuten ikkuna.
- **Skannaus** suoristetaan ensin, jos se on skannattu vinosti (valintaikkuna kertoo sen), tehdään mustavalkoiseksi, puhdistetaan pilkuista ja jäljitetään. **PDF-sivu, joka on kuva**, piirretään ensin ja käsitellään sitten samalla tavalla. Jäljitys löytää kunkin viivan keskikohdan ja sovittaa siihen suorat viivat ja kaaret; se ei käytä verkkoa eikä koulutettua mallia.
- **Huoneet** muodostuvat itsestään seinien muodostamista suljetuista silmukoista. Kun PDF:ssä on teksti, huone saa nimensä sen sisällä olevasta kirjoituksesta (suurimmasta; mitta, mittakaava tai arkin numero ei ole nimi). Skannauksessa ei ole tekstiä, joten sen huoneet säilyttävät ohjelman antamat nimet.
- **Kaikki sivulta luettu merkitään vahvistamattomaksi**: jokaisella seinällä, ovella, ikkunalla ja huoneella on katkoviivalaatikko ja ”?” pohjapiirroksessa, kunnes tarkistat sen. Valitse tarkistetut ja käytä {{ui:Työkalut}} › {{ui:Merkitse tarkistetuksi}}. Katso [Merkitse elementit tarkistetuiksi tai kenttävahvistetuiksi](topic:verification).

## Mitä pitäisi näkyä

- Seinät, ovet, ikkunat ja huoneet kullakin tasolla sekä mahdolliset uudet tasot, kaikki yhtenä vaiheena: {{key:Mod+Z}} peruu kaiken.
- Kukin sivu ohuina viivoina sen tason pohjapiirroksen alla, luetteloituna kohdassa {{ui:Koontiversio}} › {{ui:Piirustuksesta…}} {{ui:Poista}}-painikkeella.

:::note
Tämä on se, mitä viivat antoivat sivun tarkkuudella. Skannauksesta voi kadota himmeä seinä, yhdistyä kaksi hyvin lähellä toisiaan olevaa seinää tai löytyä seinä tahrasta. Kääntö, jota piirustus ei näytä, muuttaa aukon tavalliseksi oveksi. Tarkista jokainen taso sivua vasten ennen kuin luotat siihen, ja korjaa virheet {{ui:Seinä}}-, {{ui:Ovi}}- ja {{ui:Ikkuna}}-työkaluilla.
:::
