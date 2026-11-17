---
title: Laiteluettelon laatiminen ja CSV-vienti
summary: Muuta keittiö- tai ravintolapiirustuksen nimiketunnisteet laiteluetteloksi, suodata sitä, siirry jokaisen kohteen kohdalle sen arkilla ja lataa se CSV-tiedostona.
keywords: laitteet, laiteluettelo, ravintola, keittiö, nimiketunnisteet, kcl, attribuutit, bom, materiaaliluettelo, csv, taulukkolaskenta, vienti, tietojen poiminta
from: e3faa1c8
---

## Mitä teet

Lue laitteiden luettelo keittiö- tai ravintolapiirustuksesta, tarkista se, etsi jokainen kohde pohjakuvasta ja lataa luettelo taulukkolaskentatiedostona.

Tämä toimii piirustuksissa, joiden laitetunnisteet kantavat tietonsa lohkon attribuutteina, kuten KCL-keittiösuunnittelukirjastojen tunnisteet. Jokainen tunniste sisältää nimikenumeron (`KCL-ITEM`), määrän, luokan, valmistajan, mallin, sähkö- ja putkitiedot sekä huomautukset. Muissa piirustuksissa ei ole {{ui:Equipment}}-välilehteä.

## Vaiheet

1. Avaa piirustus, mieluiten sen projektikansiosta, jotta sen linkitetyt piirustukset latautuvat myös.
2. Napsauta piirustuksen yläpuolella olevaa {{ui:Equipment}}-välilehteä. Sen nimike näyttää, montako kohdetta on arkeilla, esimerkiksi "Laitteet (88)".
3. Lue luettelo: **Nimike**, **Määrä**, **Laite**, **Valmistaja**, **Malli**, **Sähkö**, **Putki** ja **Sijainti**.
4. Valitse taulukon yläpuolella olevasta valikosta, mitä luetteloidaan: **Kaikki arkit**, yksi arkki, **Ei millään arkilla** tai **Kaikki piirustuksen tunnisteet**. Jokainen valinta näyttää oman määränsä.
5. Kirjoita suodatuskenttään ("Suodata: luokka, valmistaja, malli…") kaventaaksesi luetteloa, esimerkiksi `jääkaappi` tai `208`.
6. Napsauta kohteen arkin nimeä **Sijainti**-sarakkeessa.
7. Katso piirustusta. BimCraft siirtyy kyseiselle arkille, zoomaa kohteeseen ja piirtää sen ympärille renkaan. Tilarivillä lukee "Kohde *n*, *luokka* on renkaalla arkilla *arkki*."
8. Napsauta {{ui:Equipment}} palataksesi luetteloon.
9. Napsauta {{ui:Download CSV}}.

## Mitä pitäisi näkyä

- Latauskansioon tulee tiedosto nimeltä "*piirustuksen nimi* equipment.csv" (sulkeissa arkin nimi, jos listasit yhden arkin). Tiedosto avautuu Excelissä, Numbersissa, LibreOfficessa tai Google Sheetsissä.
- Tilarivi: "Ladattu *tiedoston nimi* (*n* kohdetta)."

CSV-tiedostossa on nämä sarakkeet: Nimike, Määrä, Luokka, Valmistaja, Malli, Sähkö, Putki, Huomautukset, Sähköhuomautukset, Putkihuomautukset, Arkit ja Sijoitettu (tunnisteiden määrä). Lataus sisältää täsmälleen ne rivit, jotka taulukko näyttää valikon ja suodatuksen jälkeen.

## Miten luettelo muodostuu

- Luettelo luetaan itse **tunnisteista**, ei arkille piirretystä luettelotaulukosta. Taulukon yläpuolella oleva huomautus kertoo, montako tunnistetta luettiin.
- Yksi rivi on yksi nimikenumero yhdellä tietojoukolla. Sen määrä on tunnisteiden **summa**, kuten painetussa luettelossa. Hyllystö, joka on merkitty "5" yhdessä paikassa ja "3" toisessa, on 8, ja se näytetään muodossa "5 + 3".
- **Sijainti** listaa arkit, joilla kukin kohde näkyy. Se lasketaan siitä, mitä kunkin arkin näkymäruudut näyttävät, eli siitä, mikä tulostuu. "Vain malli" tarkoittaa, ettei yksikään arkki näytä kohdetta.
- **Numero käytössä kahdesti** merkitsee yhtä nimikenumeroa kahdella eri laitteella. Rivissä on meripihkanvärinen merkki.
- Tunnisteet, joita mikään arkki ei näytä, pidetään erillään kohdassa **Ei millään arkilla**. Ne ovat usein jäänteitä aiemmista suunnitelmista tai muista töistä, eikä niitä koskaan sekoiteta kohtaan **Kaikki arkit**.
- **Sähkö** näyttää ampeerit, kW:t, HP:t, voltit, vaiheen, liitännän ja pistokkeen niin kuin ne on merkitty. **Putki** näyttää liitäntäkoot: CW kylmävesi, HW lämminvesi, DD suora viemäri, ID epäsuora viemäri ja kaasu. Muita tunnistekenttiä ei ole vielä toteutettu.

## Yleisimmät virheet

- **Ei {{ui:Equipment}}-välilehteä.** Piirustuksessa ei ole `KCL-ITEM`-tunnisteita, tai laitteet on piirretty ilman tietoja. Luettavaa ei ole.
- **Määrät eroavat painetusta luettelosta.** Painettuun luetteloon voi olla merkitty varanumeroita tai lyhyemmät nimet kuin tunnisteissa. Luota tunnisteisiin sijoitettujen laitteiden osalta, ja tarkista erot suunnittelijan kanssa.
- **CSV-tiedosto näyttää oudoilta merkeiltä.** Tiedosto on UTF-8-muodossa. Avaa se taulukkolaskentaohjelman tuontikomennolla ja valitse UTF-8, jos ohjelma kysyy.
- **Solun alussa on heittomerkki.** Arvot, jotka alkavat merkeillä `=`, `+`, `-` tai `@`, saavat alkuun `'`, jotta taulukkolaskenta ei suorita niitä kaavoina.
- **{{key:F}} ja {{key:P}} eivät tee mitään.** Ne toimivat piirustuksella, eivät luettelolla. Napsauta ensin arkkivälilehteä.
