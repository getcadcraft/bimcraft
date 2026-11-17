---
title: Upotettu hiili ja kustannukset aikataulussa
summary: Laske mallin upotettu hiili avoimesta, muokattavasta kerrointaulukosta ja jaa hinnat 4D-aikataulun yli kustannus- ja kassavirtakäyräksi. Molemmat lähtevät arvoista, jotka kirjoitat tai tuot.
keywords: upotettu hiili, hiili, co2, kgCO2e, päästöt, kerrointaulukko, EPD, 5D, kustannus, kassavirta, s-käyrä, aikataulukustannus, hinnat, määrälaskennan hinnat
from: 83e82840
---

## Upotettu hiili

Avaa **Hiili**-paneeli. Kunkin rakennusosan määrä (tilavuus, pinta-ala tai pituus) kerrotaan kerrointaulukon kertoimella elinkaarivaiheittain: tuotevaihe on pakollinen, kuljetus ja jäte ovat valinnaisia. Yhteissummat saadaan materiaalin, luokan ja kerroksen mukaan sekä neliömetriä kohti lattiapinta-alaa.

**Kerrointaulukko on käyttäjän oma.** BimCraft-ohjelman mukana tulevat rivit ovat yleisiä lähtöarvoja oikeasta suuruusluokasta. Ne eivät ole tietokannasta, ne on merkitty tarkistamattomiksi, ja ne on korvattava käytetyn lähteen arvoilla (EPD, kansallinen tietokanta tai oman yrityksen lukuarvot). Muokkaa rivejä paneelissa, tai tuo ja vie taulukko CSV- tai JSON-muodossa. Lisäämäsi rivit ohittavat lähtörivin, jolla on sama tunnus. Taulukko tallennetaan malliin.

Rakennusosat, joille ei löydy vastinetta tai joilla ei ole määrää, luetellaan kohdassa **Ongelmat** eikä lasketa nolliksi.

## Kustannukset 4D-aikataulussa

Avaa **Kustannus**-paneeli 4D-aikataulun viereltä. Anna hinnat: kirjoita ne, tuo ne CSV- tai JSON-tiedostona, tai tuo TakeoffCraft-ohjelman rivit. Yhdistä kukin hinta mallin materiaaleihin avainsanoilla, jolloin paneeli hinnoittelee jokaisen tehtävän rakennusosat. Tehtävän kustannus jakautuu aloituspäivän ja lopetuspäivän väliin (tasaisesti, alkupainotteisesti tai loppupainotteisesti). Paneeli piirtää kumulatiivisen kassavirtakäyrän päivittäin, viikoittain tai kuukausittain. Siinä näkyvät kustannukset vaiheittain ja paketeittain sekä suunniteltu ja rakennettu määrä tiettynä päivänä. Vienti on CSV-muodossa. Mitään ei hinnoitella ennen kuin hinnat on annettu, eikä hintoja toimiteta valmiina.

## Valuutta

Hintataulukko voi kertoa, missä valuutassa sen hinnat ovat (kolme kirjainta, kuten USD tai EUR). **5D**-paneelissa on kenttä sitä varten. Valuutta tallennetaan tiedostoon hintojen mukana, ja JSON-viennit sisältävät sen. Ennen tätä ominaisuutta tehty taulukko, tai taulukko, jonka kenttä on jätetty tyhjäksi, ei sisällä valuuttaa. Sen kustannukset näytetään USD-valuutassa, sovelluksen oletuksena, ja paneeli sekä juoksevat yhteissummat kertovat sen. Valuuttoja ei muunneta keskenään.
