---
title: Split-, VRF- ja puhallinkonvektoriyksiköt
summary: Sijoita seinä-, kasetti- ja kanavoidut sisäyksiköt, yksi- ja VRF-ulkoyksiköt, refnet-liitokset sekä 2-putki- ja 4-putki-puhallinkonvektorit, kukin kylmäaine-, vesi-, lauhdevesi- ja kanavaliitäntöineen, ja piirrä niiden väliset putkisarjat koolla, joka tulee taulukosta, jota voit muuttaa.
keywords: split, minisplit, mini split, monisplit, vrf, vrv, muuttuva kylmäainevirtaus, lämpöpumppu, sisäyksikkö, ulkoyksikkö, tiivistysyksikkö, seinäasennus, korkea seinä, kasetti, kanavoitu, piilotettu, puhallinkonvektori, fcu, 2-putki, 4-putki, refnet, haaraliitos, y-liitos, putkisarja, lineset, kylmäaine, nestelinja, kaasulinja, imulinja, acr, kupari, lauhdevesi, lvi, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Mitä teet

Sijoita split- tai monisplit-järjestelmän tai VRF-järjestelmän yksiköt ja niiden puhallinkonvektorit malliin ja yhdistä ne putkisarjoilla: nestelinja ja kaasulinja ACR-kuparia, kiinnitettynä yksiköiden liitäntöihin. Yksiköt toimivat kuten muut [MEP-laitteet, joissa on liitäntöjä](topic:mep-equipment): sama palkki, Ominaisuudet, liitännät ja [liitokset](topic:mep-connections).

:::note
Tämä on piirustus- ja koordinointiapu. Yksiköt ovat yleisiä muotoja, joiden koon määräävät kirjoittamasi arvot, eivätkä valmistajan tuotteita. Niiden putkikoot tulevat R410A- ja R32-laitteiden **tyypillisten esimerkkiarvojen** taulukosta, ei mistään valmistajalta. Laitevalmistajan asennusohje ratkaisee todelliset koot; pitkät putkistot ja suuret korkeuserot muuttavat niitä. Muuta taulukkoa tai kirjoita koot itse, jotta ne vastaavat käyttämiäsi yksiköitä.
:::

## Sijoita yksikkö

1. Ota käyttöön {{ui:Piirrä}}, avaa {{ui:Koontiversio}} ja valitse {{ui:Laitteet}}.
2. Valitse tyyppi ja aseta sen arvot:

| Tyyppi | Asetat | Sen liitännät |
|---|---|---|
| Split-sisäyksikkö, seinä | teho, nestelinja ja kaasulinja, pituus, syvyys, korkeus, lauhdevesiliitännän koko | kylmäaineen neste ja kaasu, lauhdevesipoisto (oikealla päädyssä, lähellä seinää) |
| Split-sisäyksikkö, kasetti | teho, nestelinja ja kaasulinja, paneeli, runko, korkeus, lauhdevesiliitännän koko | kylmäaineen neste ja kaasu, lauhdevesipoisto (toisella sivulla, lähellä yläreunaa) |
| Split-sisäyksikkö, kanavoitu | teho, nestelinja ja kaasulinja, pituus, leveys, korkeus, tulo- ja paluuaukot, lauhdevesiliitännän koko | tuloilmakanava ulos, paluukanava sisään, kylmäaineen neste ja kaasu, lauhdevesipoisto |
| Split-ulkoyksikkö | teho, nestelinja ja kaasulinja, leveys, syvyys, korkeus | kylmäaineen neste ja kaasu (oikealla sivulla) |
| VRF-ulkoyksikkö | teho, nestelinja ja kaasulinja, leveys, syvyys, korkeus | kylmäaineen neste ja kaasu (edessä, matalalla) |
| Refnet-liitos | nestelinja tai kaasulinja, kunkin haaran kuorma, putki kummassakin päässä | tulo, haara A, haara B |
| Puhallinkonvektori | 2-putki tai 4-putki, pituus, leveys, korkeus, tulo- ja paluuaukot, kierukkaputki ja järjestelmä, lämmitysputki, lauhdevesiliitännän koko | tuloilmakanava ulos, paluukanava sisään, kierukka sisään ja ulos, lämmitys sisään ja ulos (4-putki), lauhdevesipoisto |

3. Aseta **Korkeudella**: yksikön pohjan korkeus tasosta. Seinäyksikön pohja on sen alapinta (usein 2100 mm); kasetin pohja on sen pinta katossa; refnetin pohja on sen putken keskilinjan korkeus.
4. Napsauta paikkaa, johon se menee ({{key:R}} kääntää sen 90°).

**Teho** on yksikön nimellinen jäähdytysteho kW:na, Btu/h vieressään. Kun **Nestelinja** ja **Kaasulinja** jätetään asetukseen **Taulukosta**, yksikön liitännät ottavat taulukon koot kyseiselle teholle; valitse putkikoko, jos haluat käyttää oman yksikkösi kokoa. Refnet-liitoksen tulo mitoitetaan molemmille haaroille yhdessä, ja kukin haara omalle kuormalleen.

Kylmäaineliitännät toimivat molempiin suuntiin (lämpöpumppu toimii kumpaan suuntaan tahansa). Lauhdevesipoisto on putkikoko kuten mikä tahansa poisto.

## Piirrä putkisarja

1. Valitse kaksi kappaletta ({{key:Shift}}+napsautus toiseen): ulkoyksikkö ja sisäyksikkö (yksi split), tai ulkoyksikkö ja refnet, refnet ja sisäyksikkö tai kaksi refnetiä (VRF).
2. Avaa {{ui:Koontiversio}} ja valitse {{ui:Putkisarja}}.

BimCraft piirtää nestelinjan ja kaasulinjan niiden vapaiden liitäntöjen välille, jokaisesta liitännästä ulos ja yhteiseen korkeuteen, ACR-kuparia (hehkutettua kelaa enintään 1-5/8 in, vedettyä putkea sen yli), yhtenä {{ui:Kumoa}}-vaiheena. Refnet ottaa vain oman linjansa: tuloon ulkoyksikön puolelta ja haarasta sisäyksiköille päin. Kukin linja saa koon alavirran päästä (sisäyksikön tai refnetin tulon mukaan). Jos toisen pään liitäntä on eri kokoinen, {{ui:Tarkista liitokset}} luettelee sen: siihen tarvitaan supistin. Kahden sisäyksikön välille tarvitaan refnet.

Siirrä linjoja jälkikäteen kuten mitä tahansa putkilinjaa; niiden päät pysyvät liitännöissä. Tasojen välillä olevat linjat piirretään {{ui:Putki}}-työkalulla: kylmäainesliitännästä aloitettu putki saa järjestelmänsä, ACR-kuparinsa ja kokonsa.

## Muuta putkisarjataulukkoa

Avaa {{ui:Koontiversio}} ja valitse {{ui:Putkisarjan koot}}. Kukin rivi kertoo: enintään tämän tehon (kW), tämä nestelinjan putki ja tämä kaasulinjan putki.

| Enintään | Nestelinja | Kaasulinja |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Nämä ovat lähtökohtaiset, tyypilliset arvot. Muuta riviä, lisää tai poista rivejä ja valitse {{ui:Tallenna}}: taulukko säilyy mallissa, joten kaikki tiedostoa työstävät käyttävät sitä, ja {{ui:Kumoa}} palauttaa sen. {{ui:Käytä tyypillisiä arvoja}} palauttaa lähtötaulukon. Jo sijoitetut kappaleet säilyttävät liitäntänsä, kunnes muutat niitä.

## IFC-tiedostossa

Split- ja VRF-järjestelmien sisä- ja ulkoyksiköt ovat IfcUnitaryEquipment-tyyppiä SPLITSYSTEM, ja objektityyppi kertoo, mikä ne ovat (”Split indoor unit, wall-mounted”, ”Split indoor unit, ceiling cassette”, ”Split indoor unit, ducted”, ”Split outdoor unit”, ”VRF outdoor unit”). Puhallinkonvektori on IfcUnitaryEquipment-tyyppiä AIRHANDLER objektityypillä ”Fan coil unit”: IFC4:ssä ei ole puhallinkonvektorityyppiä, ja yhden huoneen puhallin, lämmityspatteri ja suodatin kuvataan juuri AIRHANDLER-tyypillä. Refnet-liitos on IfcPipeFitting-tyyppiä JUNCTION (”Refnet joint”). IFC2X3-tiedostoihin tulee IfcEnergyConversionDevice ja IfcFlowFitting vastaavilla tyypeillä.

Kylmäaineliitännät ja -linjat ovat REFRIGERATION-järjestelmissä (yksi nestelinjoille, yksi kaasulinjoille), lauhdevesi DRAINAGE-järjestelmässä. ACR-linjat nimetään ulkohalkaisijansa mukaan. Putkisarjataulukko on projektin ominaisuusjoukko CadCraft_HvacLineSets.

Katso myös [MEP-laitteet, joissa on liitäntöjä](topic:mep-equipment), [Yhdistä putket ja kanavat laitteisiin](topic:mep-connections) ja [Putket ja kanavat](topic:pipes-and-ducts).
