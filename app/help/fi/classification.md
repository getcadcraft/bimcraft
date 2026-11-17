---
title: Luokituskoodit (Uniclass, OmniClass, UniFormat)
summary: Anna jokaiselle elementille ja tyypille luokituskoodi, valitse projektin käyttämät järjestelmät, hae sovelluksen mukana tulevista Uniclass-taulukoista, lataa oman toimistosi lisensoidut taulukot ja näytä koodit luetteloissa. Koodit kirjoitetaan IFC-tiedostoon muille ohjelmille.
keywords: luokitus, luokittele, koodi, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, taulukko, elementtikoodi, tyyppikoodi, oletuskoodi, IfcClassification, IfcClassificationReference, cobie, luettelosarake, csv, lisenssi
from: 222b94cd
---

## Mitä teet

Lisäät luokituskoodin seiniin, lattioihin, kattoihin, oviin, ikkunoihin ja muihin mallin osiin enintään kolmessa järjestelmässä rinnakkain: Uniclass, OmniClass ja UniFormat. Muut alat ja ohjelmistot luottavat koodiin, ei nimeen, joten koodit tallennetaan IFC-tiedostoon luokitusviitteinä, jotka jokainen BIM-ohjelma lukee.

## Anna elementille koodi

1. Valitse elementti (tai useita) ja avaa **Ominaisuudet**. Avaa {{ui:Luokitus}}-osio.
2. Kirjoita koodi järjestelmänsä ruutuun ja paina Enter. Kun koodilista on ladattu, kirjoita osa koodista tai muutama sana ("verhoseinä") ja valitse osumista: koodin nimike täytetään puolestasi.
3. {{ui:Koskee}} kertoo, mihin koodi menee: **Tämä elementti** tai **Sen tyyppi (jokainen tyypin elementti)**. Seinätyypin koodin lukee jokainen kyseisen tyypin seinä, myös myöhemmin piirretyt.
4. {{ui:Tyhjennä}} poistaa koodin.

Jokaisen koodin alla osio kertoo, mistä se tulee: asetettu tälle elementille, sen tyypistä tai luokan projektioletuksena. Elementin oma koodi voittaa aina tyypin koodin, ja tyypin koodi voittaa oletuksen. Kun useita elementtejä on valittuna, ruutu, jossa lukee "vaihtelee", tarkoittaa, etteivät ne jaa yhtä koodia. Yhden koodin kirjoittaminen antaa sen kaikille. Jokainen muutos on yksi kumoamisvaihe.

Koodin voi aina kirjoittaa, oli lista ladattu tai ei. Jos koodi ei näytä järjestelmänsä koodilta tai ei ole ladatussa listassa, vihje kertoo siitä, ja koodi säilyy kirjoittamassasi muodossa.

## Valitse projektin järjestelmät

Avaa **Data** mallipalkista ja valitse {{ui:Luokitus}} (tai {{ui:Projektin luokitus…}} Ominaisuudet-osiosta).

- Valitse projektin käyttämät järjestelmät. Ominaisuudet näyttää sen jälkeen vain ne.
- **Uniclass**: Elements/functions (EF), Systems (Ss) ja Products (Pr) -taulukot tulevat sovelluksen mukana. Ne ovat NBS:n tekijänoikeuden alaisia, lisensoitu Creative Commons Attribution-NoDerivatives 4.0 -lisenssillä, ja niitä välitetään muuttamattomina. Valintaikkuna näyttää kunkin taulukon painoksen ja päivän, jona se luettiin. Ne eivät ole uusimmat taulukot: julkaisija julkaisee uudet joka neljännes omalla sivustollaan.
- **OmniClass** ja **UniFormat**: sovelluksen mukana ei tule koodilistaa, koska julkaisija ei salli taulukoiden jakamista ilman lisenssiä. Kirjoita mikä tahansa koodi tai lataa oman toimistosi lisensoitu taulukko.
- {{ui:Lataa taulukko (CSV)…}} lukee oman toimistosi taulukon CSV-tiedostosta, jossa on koodisarake ja nimikesarake. Otsikkorivin nimet Code, Number tai Identifier sekä Title, Name tai Description tunnistetaan itsestään; ilman niitä käytetään kahta ensimmäistä saraketta. Taulukko pysyy tässä selaimessa eikä sitä koskaan tallenneta projektitiedostoon. Tiedostoon tallennetaan vain koodit, jotka annat. Uudemman Uniclass-taulukon voi ladata samalla tavalla.
- {{ui:Anna elementeille oletuskoodi luokkansa mukaan}} antaa jokaiselle seinälle, lattialle, katolle, ovelle, ikkunalle, portaille, rampille, pilarille, palkille ja huonekalulle alkukoodin Uniclassin Elements/functions -taulukosta, kun sillä ei ole omaa koodia. Myöhemmin piirtämäsi elementit saavat sen myös.
- {{ui:Näytä koodit sarakkeina luetteloissa}} lisää yhden sarakkeen per järjestelmä Ovet-, Ikkunat-, Seinät tyypeittäin- ja Huoneet-luetteloihin sekä niiden CSV-tiedostoihin. Useamman elementin rivi näyttää "vaihtelee", kun niiden koodit eroavat.

## Hyvä tietää

- Oletuskoodit ovat CadCraftin omia alkuvalintoja, eivät julkaisijan, eikä asiantuntija ole tarkistanut niitä. Tarkista ne projektisi standardia vasten.
- Tiedostossa oletus on oikea luokitus, merkitty suhteen nimellä "CadCraft default". Se poistuu heti, kun elementti tai sen tyyppi saa oman koodin.
- Koodit, jotka tuotavassa tiedostossa on jo kirjattu, luetaan ja näytetään riippumatta siitä, mitä kirjoitusasua toinen ohjelma käytti järjestelmän nimessä. Muiden järjestelmien koodit (toimiston omat) luetellaan ja jätetään rauhaan.
- Koodit luetaan takaisin, kun tiedosto avataan uudelleen, täällä tai toisessa ohjelmassa. Ne viedään myös IFC5-alfa- (IFCX-) vientiin, kun tämä laboratoriovaihtoehto on päällä, paitsi katolle asetetut koodit.
- Ei vielä toteutettu: puu, jolla selata taulukkoa tasoittain, koodit tasoille ja huoneille projektioletuksina sekä koodin tarkistaminen tiedostossa mainittua painosta vasten.
