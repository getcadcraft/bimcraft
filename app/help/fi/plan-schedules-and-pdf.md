---
title: Luettelot, mitoitus ja pohjakuvan PDF
summary: Ovi-, ikkuna-, seinä- ja huoneluettelot, jotka muuttuvat piirtäessäsi, mitoitus pohjakuvassa ja tason pohjakuva tallennettuna PDF-tiedostona vakiomittakaavassa.
keywords: luettelo, ovi-luettelo, ikkuna-luettelo, seinä-luettelo, huoneluettelo, määrät, määrälaskenta, pinta-ala, csv, taulukkolaskenta, mitoitus, mitta, tulostus, pdf, tulosta, mittakaava, arkki, 1/4", 1:50
from: d97cd16e
---

## Mitä teet

Katso, mitä piirtämäsi rakennus tuottaa piirtäessäsi: kuinka monta ovea ja ikkunaa kutakin kokoa, kuinka paljon seinää kutakin tyyppiä, kuinka suuri kukin huone on. Lisää mitoitus pohjakuvaan ja tallenna se PDF-tiedostona tulostettavaksi tai lähetettäväksi.

## Luettelot

Kun {{ui:Draw}} on päällä, **Luettelot** vasemmalla paneelissa näyttää kerrallaan yhden taulukon:

- **Ovet** ja **Ikkunat**: kukin tunnuksensa (D1, D2 … ja W1 …, annettuna sijoittaessa), tyyppi, leveys, korkeus (ja alapuite), taso ja seinä, jossa se on.
- **Seinät tyypin mukaan**: jokaiselle seinätyypille seinien määrä, paksuus, kokonaispituus ja sivupinta-ala **Bruttopinta-ala**, **Vähennykset** ja **Nettopinta-ala**, sekä yhteissumma.
- **Huoneet**: numero, nimi, taso, pinta-ala ja piiri, sekä kokonaispinta-ala.
- **Lattiat**: kukin lattia tasoineen, lajeineen ja paksuuksineen sekä bruttopinta-ala, vähennykset ja nettopinta-ala.
- **Pintakäsittelyt**: jokainen seinätyypin pintakerros (materiaalin ja seinän puolen mukaan) ja katot, pintojen määrä sekä brutto, vähennykset ja netto.
- **Seinätyypit: määrälaskentatiedot**: kerran kullekin seinätyypille syötetyt tiedot (yksikkö, laasti, hinta), seinien määrä, niiden pituus ja nettopinta-ala sekä hinta kerrottuna mitatulla määrällä. Katso [Seinäkokoonpanot](topic:wall-assemblies#give-a-type-its-takeoff-data).
- **Pintakäsittelyt huoneittain**, **Pintakäsittelyt seinittäin**, **Pintakäsittelyt vyöhykkeittäin** ja **Pintamäärät**: mikä peittää kunkin huoneen, pinta-aloineen, laattamäärineen leikkauksineen ja alustan tilavuuksineen. Katso [Huoneiden pintakäsittelyt ja pintaluettelot](topic:room-finishes).
- Omat **asetelmat**: luettelo, jonka ryhmittelit, summasit ja tallensit nimellä. Katso [Luettelon asettelu, tallennus ja vienti](topic:schedule-layouts).

Taulukot muuttuvat jokaisen muokkauksen mukana. Napsauta riviä tai yksittäistä lukua valitaksesi elementit, joista se tuli. **Lataa CSV** tallentaa taulukon avattavaksi taulukkolaskentaan; **Lataa Excel** ja **Kopioi Google Sheetsiin** ovat sen alla. **Huoneiden pintakäsittelyt** ja **Määrittely** ([Kirjoita määrittely mallista](topic:specification)) avautuvat samasta paikasta.

## Kerrokset: pinta-ala ja tilavuus

Valitse **Kerrokset: pinta-ala ja tilavuus** Luettelot-listasta. Siinä on yksi rivi kullekin käytössä olevan seinä-, lattia-, katto- ja kattotyypin kerrokselle: elementti, tyyppi ja sen LOD, kerros (laskettuna seinän ulkopuolelta, lattian, katon tai kattotason yläpinnasta), sen materiaali ja tehtävä, paksuus, elementtien määrä, **nettopinta-ala** ja **tilavuus**.

- Pinta-ala on kyseisen tyypin elementtien nettopinta-ala, mitattuna täsmälleen kuten Seinät tyypin mukaan, Lattiat ja Pintakäsittelyt, projektin mittaustavan mukaan. Katto mitataan kaltevuudella; mikään mittaustapa ei sisällä sääntöä katoille.
- Tilavuus on tuo pinta-ala kerrottuna kerroksen omalla paksuudella.
- Lattia, katto tai kattotyyppi ilman tyyppiä on yksi rivi: yksi kerros oman paksuutensa mukaan.
- Ilmaväli luetellaan pinta-alallaan ja jätetään pois kokonaistilavuudesta. Kalvolla on pinta-ala eikä tilavuutta.

Napsauta riviä valitaksesi sen elementit. **Lataa CSV** tallentaa taulukon.

## Miten pinta-alat mitataan

Jokainen pinta-ala on kolme lukua, jotka laskevat yhteen: brutto miinus vähennykset on netto. Sääntö on kirjoitettu jokaisen taulukon yläpuolelle, ja se on yksi sääntö: luettelot, IFC-tiedostoon tallennetut määrät ja TakeoffCraft-ohjelmaan lähetetty määrälaskenta käyttävät kaikki sitä.

- **Seinä**: brutto on yksi seinän pinta, sen pituus keskiviivaa pitkin kertaa korkeus (todellinen pinta seinälle, jonka yläreuna tai alareuna on muotoiltu). Jokainen ovi, ikkuna ja muu aukko vähennetään, leveys kertaa korkeus, kukin aukko kerran.
- **Lattia tai katto**: brutto on sen ulkoviivan sisäpuolinen pinta-ala. Jokainen aukko ja leikkaus sen sisällä vähennetään kerran.
- **Seinäpintakäsittely**: jokainen seinätyypin pintakerros peittää yhden seinän pinnan, mitattuna kuten seinä, samoilla vähennetyillä aukoilla. Pintakäsittely on seinän kerros: se luetellaan Pintakäsittelyissä, eikä sitä lisätä seinän pinta-alaan, joten seinää, jossa on ovi, ei lasketa kahdesti.

Tämä on **CadCraft-oletus**: jokainen aukko vähennetään kokoon katsomatta; seinien pituudet ovat keskiviivaa pitkin; aukkojen reunuksia ei mitata. Se on se, mitä jokainen projekti käyttää, kunnes valitset toisen menetelmän.

## Valitse mittaustapa

Luettelon yläpuolella **Mittaustapa** luettelee BimCraftin mukana tulevat menetelmät, ja **Lataa menetelmätiedosto** ottaa toimiston oman. Valinta tallennetaan IFC-tiedostoon yhtenä kumoamisaskeleena, ja kolme asiaa seuraa sitä kerralla: luettelot, tiedostoon tallennetut nettomäärät ja TakeoffCraft-ohjelmaan lähetetty määrälaskenta. Jokaisen taulukon yläpuolella oleva sääntö alkaa silloin menetelmällä, sen lähteellä, lähteen lukupäivämäärällä ja sanoilla **Ei määrämittaajan tarkistama**.

Menetelmä on pieni tiedosto tosiasioita, ei ohjelmakoodia. Kullekin määrälle se kertoo:

- **pienimmän vähennettävän aukon**: esimerkiksi 0.5 m² tai vähemmän jää seinäpinta-alaan;
- **miten seinäliitokset mitataan**: keskiviivaa pitkin; tai seinällä, joka päättyy toiseen, mitattuna sen seinän pintaan; tai jokainen seinän pää, joka kohtaa toisen seinän, mitattuna lähimpään pintaan;
- **mitataanko aukkojen reunukset** pintakäsittelylle (pintakäsittelyn palautukset aukkoihin), pinta-alana tai, kun ne ovat matalia, pituutena. Reunuksen syvyys otetaan puolena seinän paksuudesta;
- **mitä se sanoo muurauksesta**: miten se mitataan ja mahdolliset hukka- tai laastivaraukset, joita se ilmoittaa.

BimCraftin mukana tulevat menetelmät:

| Menetelmä | Seinät: pienin vähennettävä aukko | Seinäpintakäsittelyt | Katot | Muuraus |
|---|---|---|---|---|
| CadCraft-oletus | jokainen aukko | jokainen aukko | jokainen leikkaus | ei varauksia |
| RICS NRM 2 (Yhdistynyt kuningaskunta), 2. painos 2021 | 0.5 m² tai vähemmän jää mukaan | 1 m² tai vähemmän jää mukaan | 1 m² tai vähemmän jää mukaan | pinta-alan mukaan; prosentteja ei ilmoiteta |
| AAQS Standard Method for Africa 2015 | 0.5 m² tai vähemmän jää mukaan | 0.5 m² tai vähemmän jää mukaan | 0.5 m² tai vähemmän jää mukaan | pinta-alan mukaan; mitataan nettona, hukka 0 % |
| IS 1200 (Intia), 1976, muuraus | 0.1 m² tai vähemmän jää mukaan | oletus (katso alla) | oletus | tilavuuden mukaan |
| BIA Technical Note 10 (Yhdysvallat), 2009 | jokainen aukko | oletus | oletus | 5 % hukka yksiköille, 15 % laastille |

Lue nämä rajoitukset, ennen kuin luotat menetelmään:

- **Yksikään määrämittaaja ei ole tarkistanut niitä.** Jokaisen on tehnyt lukemalla mainittu lähde ja kirjaamalla sen luvut lausekohtineen. Jos olet määrämittaaja ja voit tarkistaa jonkin, sovelluksen tekijät haluaisivat kuulla sinusta.
- Missä sääntöä ei voitu lukea lähteestä, menetelmä sanoo siitä **ei vahvistettu** ja käytetään CadCraft-oletusta. Yhdelläkään BimCraftin mukana tulevalla menetelmällä ei ole vahvistettua sääntöä seinäliitoksille, aukkojen reunuksille tai lattioille, joten ne mitataan oletustavalla kaikkien niiden mukaan.
- IS 1200 vähentää aukot rappauksesta kolmessa vyöhykkeessä. Menetelmätiedosto ei voi vielä sisältää vyöhykkeitä, joten seinäpintakäsittelyissä käytetään oletusta tuon menetelmän mukaan, ja sääntö kertoo sen.
- Rakennustöiden mittauksen Etelä-Afrikan standardijärjestelmä (The South African Standard System of Measuring Building Work) **ei** ole mukana: sen tekstiä ei voitu lukea. AAQS-menetelmä Afrikalle sanoo perustuvansa tuon järjestelmän vuoden 1991 painokseen, mutta se on eri asiakirja.
- BIA Technical Note 10 on alan arviointiohje, ei standardoitu mittaustapa.
- Aukko, joka on täsmälleen pienimmän koon mukainen, seuraa menetelmän omaa sanamuotoa (esimerkiksi ”not exceeding”, ”less than”). Kokoja, jotka ovat 2 osaa 10 000:sta sen sisällä, pidetään täsmälleen sen kokoisina.
- Menetelmän mukaan tiedoston seinän nettosivupinta-ala ja lattian tai katon nettopinta-ala seuraavat menetelmää, ja määräluettelo nimeää sen. Tiedoston bruttopinta-alat ja tilavuudet pysyvät piirretyinä.

Valitsijan alla **Huomautukset tästä menetelmästä** kertoo, mitä kukin lähde jättää avoimeksi. **Avaa lähde** siirtyy asiakirjaan.

### Toimiston oma menetelmä

Menetelmätiedosto on JSON-muodossa `cadcraft-measurement-method`. Jokainen siinä oleva arvo nimeää kohdan, josta se tulee; arvo ilman kohtaa hylätään. Tiedosto tarkistetaan latauksen yhteydessä, väärä kenttä nimetään, eikä tiedoston mitään käytetä, jos se ei läpäise tarkistusta. Kun se on valittu, tiedosto tallennetaan projektin sisään, joten projekti avautuu samanlaisena toisella tietokoneella. Sen tunnus on oma yksinkertainen nimesi (se ei saa olla sovelluksen mukana tulevan menetelmän tunnus).

## Tiilet, lohkot ja laasti

**Seinätyypit: määrälaskentatiedot** laskee yksiköt ja laastin jokaiselle seinätyypille, jonka yksiköllä on pituus ja korkeus (katso [Anna tyypille sen määrälaskentatiedot](topic:wall-assemblies#give-a-type-its-takeoff-data)). Nämä ovat kaavat täsmälleen niin kuin ne lasketaan:

- **Yksiköitä per m² yhdessä muurauslehdessä** = 1 / ((yksikön pituus + sauma) × (yksikön korkeus + sauma)). 215 × 65 mm tiili 10 mm saumalla: 1 / (225 × 75 mm) = 59.26 per m².
- **Yksikön leveydet lehden poikki** = (lehden paksuus + sauma) / (yksikön leveys + sauma), pyöristettynä kokonaiseksi luvuksi, vähintään 1. 102.5 mm lehti 102.5 mm tiilistä on 1; 215 mm seinä samoista tiilistä on 2.
- **Yksiköt** = yksiköitä per m² × yksikön leveydet poikki × seinäpinnan nettopinta-ala, laskettuna yhteen tyypin kaikista muurauslehdistä.
- **Tilattavat yksiköt** = yksiköt × (1 + hukka % / 100), pyöristettynä ylöspäin kokonaiseksi yksiköksi. Hukka on tyypille syötetty; jos sitä ei ole syötetty, menetelmän, jos se sellaisen ilmoittaa; muutoin 0 %.
- **Laasti** = nettopinta-ala × lehden paksuus, vähennettynä yksiköiden tilavuus (yksiköt × pituus × korkeus × leveys), sitten lisättynä tyypille syötetty lisäprosentti kuoppien tai reikien vuoksi, sitten lisättynä menetelmän varaus, jos se sellaisen ilmoittaa. Tarvitaan yksikön leveys.

Oletukset: jokainen tyypin muurauslehti on rakennettu tyypin yhdestä yksiköstä. Lehti, joka on paksumpi kuin yksi yksikön leveys, lasketaan niin monena yksikön leveytenä, kukin kuin pitkittäin asetettu lehti, joten leikattuja yksiköitä, sulkijoita ja erikoismuotoja ei lasketa erikseen. Missä mikään kerros ei ole merkitty yksikön muodostamaksi, ydinkerrokset otetaan lehdiksi, ja taulukon yläpuolella oleva huomautus kertoo sen. **Määrä** on hinta kerrottuna sillä, mihin hinta perustuu, mikä voi nyt olla myös tilattava yksikkö, 1000 tilattavaa yksikköä tai m³ laastia.

Merkit ovat elementtien IFC-tunnisteita: vaihda yksi kohdasta **Ominaisuudet** (Tunniste), ja luettelo seuraa. Jokaiselle IFC-mallille, piirretty tai ei, [Laske määrät yhteen, luettele elementit ja luettele tilat](topic:quantity-totals) laskee yhteen minkä tahansa ominaisuuden.

## Mitoitus

Pohjakuva näyttää jokaisen piirretyn seinän pituuden sen ulkopinnan suuntaisesti (sisäseinä: yhden pinnan suuntaisesti) ja seinälle, jossa on ovia tai ikkunoita, ketjun kulmista jokaiseen aukkoon. {{ui:Mitoitus}} mallipalkissa piilottaa ne ja näyttää ne uudelleen.

## Tallenna pohjakuva PDF-tiedostona

1. Näytä haluamasi taso ja aseta yksiköt **Kerrokset**-paneelissa.
2. Napsauta {{ui:Print}} mallipalkissa.
3. BimCraft tallentaa tiedoston ”<file> — <level>.pdf”: pohjakuvan mustavalkoisena suurimmassa vakiomittakaavassa, joka mahtuu sivulle (1/4" = 1'-0", 1/8" = 1'-0" … Letter-koossa jalkoina ja tuumina; 1:50, 1:100 … A4-koossa millimetreinä), seinät täytettyinä, ovet, ikkunat, huoneiden nimet ja pinta-alat, mitoitus sekä piirustusotsikko, jossa on taso, tiedosto, leikkauskorkeus, päiväys ja mittakaava.

PDF piirretään viivoina ja tekstinä, joten se pysyy terävänä mistä tahansa zoomista ja sen teksti voidaan hakea.

## Hyvä tietää

- Luettelot listaavat sen, mitä piirtotyökalut tekivät. Muilla ohjelmilla tehdyt ovet ja ikkunat näkyvät sen sijaan kohdassa Määrien yhteissummat.
- Hinnoitellaksesi työn, anna määrät TakeoffCraft-ohjelmalle: katso [Määrät TakeoffCraft-ohjelmalle](topic:takeoff). CSV-lataus jää taulukkolaskentaa varten.
