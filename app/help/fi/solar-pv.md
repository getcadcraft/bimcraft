---
title: Aurinkosähkökentät, varjostus ja tuotto
summary: Sovita aurinkopaneelikentät katoille tai maahan, varjosta ne mallista, arvioi vuotuinen energia, mitoita jonot ja tee yksiviivakaavion data. Kaikki lähtötiedot näytetään, ja esimerkkimoduuli ja häviöt ovat yleisiä.
keywords: aurinkosähkö, aurinkopaneeli, PV, valosähkö, kenttä, moduuli, katto, varjostus, tuotto, kWh, kWp, jonomitoitus, vaihtosuuntaaja, yksiviiva, kallistus, atsimuutti, rivien väli
from: adf4aaf3
---

## Mitä teet

Avaa **Aurinkosähkö**-paneeli. Valitse katon pinta (sen kallistus ja suunta luetaan mallista) tai aseta maakenttä kallistuksella ja suunnalla. Moduulit sovitetaan sisään etäisyyksin ja lasketaan, ja tuloksena on DC-teho kWp:nä. Kentän sijoittaminen kirjoittaa sen malliin aurinkolaitteina yhdellä kumoamisvaiheella.

## Varjostus, tuotto ja jonot

- **Varjostus** lähettää säteen jokaisesta moduulista kohti aurinkoa kunkin kuukauden tyypillisinä päivinä mallin omaa geometriaa vasten, joten naapurirakennukset, parapetit ja edessä olevat rivit lasketaan. Vähennetään vain suora auringonvalo, ja osittain varjostettu kenttä menettää tehoa suhteessa.
- **Tuotto** antaa kWh kuukausittain ja vuodessa, kWh per kWp:n ja suorituskykysuhteen. Aurinko tulee omista kuukausittaisista summistasi vaakapinnalle, jos kirjoitat ne. Ilman niitä paneeli käyttää kirkkaan taivaan ylärajaa ja kertoo sen. **Hae ilmasto NASA POWERista** -painikkeella Tuotto-välilehdeltä: se lähettää vain kohteen leveys- ja pituusasteen, kerran, ja säilyttää vastauksen tällä tietokoneella (tarkistettu selaimesta 2026-10-30). PVGIS ei anna verkkosivun lukea vastaustaan, joten välilehti antaa linkin, joka avaa PVGISin kohteen kuukausitiedot uuteen välilehteen. Liitä siinä näkyvät luvut laatikkoon, niin kaksitoista kuukautta täyttyvät.
- **Jonot** tarkistaa moduulit jonoa kohti vaihtosuuntaajan jännitealueen suhteen kylmimpänä ja kuumimpana päivänä, ja rinnakkaiset jonot sen virran suhteen.
- **Yksiviiva** tekee kaaviodatan (kenttä, yhdistysrasia, erotin, vaihtosuuntaaja, paneeli, verkko) johtojen ja sulakkeiden mitoituksilla kirjoittamistasi kertoimista. Se on dataa ja SVG; CadCraftin Sähkö-lisäosa voi sijoittaa sen symboleina.

BimCraftin mukana tulevat moduuli-, vaihtosuuntaaja-, häviö- ja johtokertoimet ovat yleisiä esimerkkejä, ja ne on merkitty jokaisessa tuloksessa. Kirjoita valmistajan tiedot ja suunnittelemasi määräysarvot, ja anna suunnitelman tarkistaa henkilön, joka vastaa siitä.
