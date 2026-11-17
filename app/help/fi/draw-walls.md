---
title: Seinien piirtäminen
summary: Piirrä seinät kerroksen pohjakuvaan napsauttamalla niiden kulmia tai kirjoittamalla pituuksia; kulmat liittyvät itsestään yhteen, ja seinät tallennetaan IFC-tiedostona.
keywords: kaareva, kaari, sijaintiviiva, tasaus, seinä, seinät, piirtäminen, pohjakuva, pohjapiirros, huone, kulma, liittäminen, seinätyyppi, 2x6, 2x4, cmu, betoni, korkeus, taso, kerros, kirjoitettu pituus, ortogonaali, tartunta
from: 8269cd4b
---

## Mitä teet

Piirrä rakennuksen seinät jokaisen kerroksen pohjakuvaan. Napsauta kohta, josta seinä alkaa, ja sen jälkeen jokainen kulma. BimCraft liittää kulmat toisiinsa, antaa jokaiselle seinälle sen kerrokset (verhous, aluslevy, runkotolpat, kipsilevy …) ja vie seinän ylemmän kerroksen tasolle asti. 3D-näkymä näyttää seinät piirtämisen edetessä.

## Avaa pohjakuva

1. Aloita uusi rakennus ([Aloita uusi rakennus](topic:start-a-new-building)) tai avaa IFC-malli.
2. Napsauta työkalurivillä {{ui:Draw}}. Uusi rakennus avautuu valmiiksi päällä.
3. Kerroksen pohjakuva näkyy vasemmalla ja 3D-näkymä oikealla. Valitse kerros pohjakuvan yläpuolella olevasta luettelosta tai **Kerrokset**-paneelin pyöreällä painikkeella sen vieressä.
4. {{ui:Plan}}, {{ui:Split}} ja {{ui:3D}} ovat työkaluja työkalurivin {{ui:View}}-rivillä (komennot PLAN, SPLIT ja pikanäppäimet toimivat ennallaan). Käytä {{ui:Plan}}-painiketta pelkälle pohjakuvalle, {{ui:Split}}-painiketta molemmille ja {{ui:3D}}-painiketta sulkeaksesi pohjakuvan. Kun ikkuna on kapea (tai käyttöliittymän koko suuri), {{ui:Split}} asettaa pohjakuvan 3D-näkymän yläpuolelle sen viereen.

Pohjakuva leikkaa kerroksen 4'-0" (1200 mm) lattiansa yläpuolelta, kuten pohjapiirros tekee. Vieritä zoomataksesi. Vedä keskimmäisellä tai oikealla painikkeella (tai pidä {{key:Space}} pohjassa ja vedä) panoroidaksesi. Kun {{ui:Select}} on päällä, pelkkä vetäminen panoroi myös. {{key:F}}, kun osoitin on pohjakuvan päällä, sovittaa sen näkyviin.

## Piirrä huone

1. Napsauta {{ui:Wall}} (tai paina {{key:W}}).
2. Valitse seinätyyppi ensimmäisestä luettelosta, esimerkiksi **Ulkoseinä 2×6** tai **Sisäseinä 2×4**.
3. Valitse korkeus: **Ylempään kerrokseen asti** (seinä seuraa, jos se kerros siirtyy), **Asti** korkeammalle kerrokselle seinälle, joka kulkee useiden kerrosten läpi (portaikkohalli, kaksikorkuinen huone, korkea päätyseinä), tai **Kiinteä korkeus** ja kirjoita se. Tällainen seinä kuuluu kerrokseen, jolla piirsit sen. Kerrosten pohjakuvat, joiden läpi se kulkee, näyttävät sen vaaleampana, huoneet sulkeutuvat sitä vasten, ja ovia ja ikkunoita voi napsauttaa siihen näiltä pohjakuvilta (ovi seisoo tuon kerroksen lattialla). Jos haluat siirtää seinää tai muokata sen muotoa, siirry kerrokseen, josta se alkaa.
4. Napsauta kohtaa, josta ensimmäinen seinä alkaa.
5. Napsauta jokaista kulmaa. Jokainen napsautus tekee seinän, ja seuraava alkaa edellisen päästä. Pituus ja kulma näkyvät osoittimen vieressä.
6. Napsauta ensimmäistä pistettä uudelleen sulkeaksesi huoneen. Tilarivi kertoo, montako seinää huoneessa on. Keskilinjatilassa jokainen seinä saa ulkokerroksensa huoneen ulkopuolelle.
7. Paina {{key:Esc}} (tai napsauta hiiren oikealla painikkeella tai kaksoisnapsauta) lopettaaksesi sulkematta.

Kulmat liittyvät itsestään: kaksi seinää kohtaa jiirillä, seinä, joka päättyy toiseen seinään, pysähtyy sen pintaan (T-liitos), ja kolme tai useampi seinää pisteessä jakavat kulman. Toisiinsa leikkaavat seinät jätetään ennalleen.

Koko huone kerralla: avaa {{ui:Shapes}} suorakulmiolle, kierretylle suorakulmiolle, monikulmiolle, kaarille, seinille valituille viivoille tai ääriviivan ympärille (katso [Seinämuodot, jako, siirto, venytys ja lukitus](topic:wall-tools)).

## Valitse piirtoviite

Valitse **Keskilinja**, **Sisäpinta** tai **Ulkopinta** ennen ensimmäistä napsautusta. Kun pinta on valittu, napsautuksesi ja kirjoitetut pituudet kuvaavat sitä pintaa. BimCraft siirtää seinän keskilinjaa puolella kokonaispaksuudesta ja liittää peräkkäiset kulmat. Valitse **Ulkopuoli vasemmalla** tai **Ulkopuoli oikealla** suhteessa piirtosuuntaan. Vastapäivään piirretyn suljetun ääriviivan ulkopuoli on oikealla, myötäpäivään piirretyn vasemmalla. Kun valitset **Sisäpinnan**, seinän runko menee viivasi ulkopuolelle; **Ulkopinnalla** se menee toiselle puolelle. Pintapiirto säilyttää valitsemasi ulkopuolen, kun suljet silmukan. Keskilinjalla seinät, jotka eivät sulje huonetta, ottavat valitsemasi ulkopuolen. Huoneen sulkeminen asettaa jokaisen seinän ulkopuolen huoneen ulkopuolelle itsestään, piirsitpä miten tahansa.

Seinätyypin, viitteen tai ulkopuolen vaihtaminen päättää nykyisen ketjun. Lähellä kääntyvää kulmaa pitkät jiirit katkaistaan jättämällä suorat päät.

Piirtäessä tyhjän tilan yli oleva päätepiste voi kohdistua vaakasuoraan tai pystysuoraan seinän päätepisteen tai aiemman kulman kanssa. Katkoviiva yhdistää tämän pisteen tartutettuun osoittimeen. Shift pitää piirtosuunnan suorakulmaisena; kohdistus pysähtyy silloin tuota suuntaa pitkin. Lähellä olevat päätepisteet, keskikohdat ja seinien leikkauspisteet ovat etusijalla kaukaisen kohdistuksen edellä.

## Sijaintiviiva

Kun **Viite** on **Ulkopinta** tai **Sisäpinta**, seinä säilyttää tuon pinnan sijaintiviivanaan. Jos seinästä myöhemmin tulee paksumpi tai sen ulkopuoli käännetään, pinta pysyy paikallaan ja seinä kasvaa tai kääntyy sen ympärillä. Suora seinä, joka kohtaa sen kulmassa, seuraa, joten kulma sulkeutuu edelleen. Voit muuttaa sijaintiviivaa myöhemmin kohdassa **Ominaisuudet**: katso [Muuta seinää, ovea tai ikkunaa](topic:change-a-wall-or-door).

## Piirrä kaareva seinä

1. Napsauta {{ui:Wall}} ja valitse sitten **Kaareva** **Muoto**-luettelosta asetusrivillä.
2. Napsauta kohtaa, josta seinä alkaa, ja sitten kohtaa, johon se päättyy.
3. Napsauta kohtaa kaarellaan. Tai kirjoita kaaren korkeus ja paina {{key:Enter}}.
4. Ketju jatkuu seinän päästä. Lopeta painamalla {{key:Esc}}.

Kaareva seinä liittyy seinien päihin (kulma- ja T-liitokset toimivat), muodostaa huoneita ja pitää ovia ja ikkunoita kaarensa varrella. Ne pysyvät suorina yksiköinä, kohtisuorassa seinään nähden keskikohdallaan, ja niiden etäisyys mitataan kaarta pitkin. Seinä voi kääntyä enintään kolme neljäsosaa ympyrästä. Se tarttuu päihinsä ja kaarensa keskikohtaan.

Kaarevien seinien kohdalla ei vielä toteutettu: {{ui:Trim / extend}} ja {{ui:Corner}}, runko, automaattiset pohjakuvan mitat ja tartunta kaarta pitkin. Katso [Mitä ei ole vielä toteutettu](topic:not-built-yet).

## Kirjoita pituus napsauttamisen sijaan

Ensimmäisen napsautuksen jälkeen kirjoita ja paina {{key:Enter}}:

| Kirjoitus | Piirtää |
|---|---|
| `12'6"` tai `3810` | seinän tämän pituisen, osoittimen näyttämään suuntaan |
| `12'6"<90` | tämän pituisen, tässä kulmassa (asteina, vastapäivään oikealta) |
| `@3000,0` | pisteeseen, joka on tämän etäisyyden päässä edellisestä, sivuttain ja ylös |
| `1200,3400` | tähän pisteeseen pohjakuvalla |

Kun Seinä-työkalu on päällä, numeron kirjoittaminen menee suoraan {{ui:Length}}-kenttään. Jalkoina ja tuumina pelkkä numero on tuumia; millimetreinä se on millimetrejä. Yksikön voi aina kirjoittaa: `3.5 m`, `10 ft`, `6 1/2"`.

## Tartunnat

- Seinien päät, niiden pintakulmat ja seinien keskikohdat tarttuvat, kun osoitin on lähellä (neliö, kolmio).
- Osoitin tarttuu seinän keskilinjaan tai kumpaankin pintaan (risti).
- Viimeisestä pisteestä suunta pysyy joka 15° kohdalla, kun se on lähellä. Pidä {{key:Shift}} pohjassa pitääksesi sen kohdassa 0°, 90°, 180° tai 270°.
- Vapaissa suunnissa pituus pyöristyy 1/2" (tai 10 mm) tarkkuuteen.

## Muuta, kumoa, poista

- Jokainen seinä on yksi vaihe **Muutokset**-luettelossa: {{ui:Undo}} ja {{ui:Redo}} ottavat seinät pois ja palauttavat ne.
- Kun {{ui:Select}} on päällä, napsauta seinää pohjakuvassa valitaksesi sen. 3D-näkymä ja **Ominaisuudet** seuraavat. {{key:Delete}} poistaa valitut seinät, ja seinät, joihin ne liittyivät, siivotaan uudelleen.

## Kerrokset

**Kerrokset**-paneeli luettelee jokaisen kerroksen korkeuspisteineen ja korkeuksineen.

- Kirjoita uusi nimi, korkeuspiste tai korkeus ja paina {{key:Enter}}. Kerroksen korkeuden tai korkeuspisteen muuttaminen siirtää sen yläpuolella olevia kerroksia saman verran, ja seinät, jotka ulottuvat kerrokseen, seuraavat perässä.
- {{ui:Add a level on top}} lisää kerroksen ylimmän yläpuolelle, yhtä korkean kuin se.
- {{ui:Add a level below}} lisää kerroksen alimman alle (kellari), yhtä korkean kuin se. Sen korkeuspiste on negatiivinen, kun alin kerros on 0:ssa, eikä mikään muu kerros siirry. {{ui:Undo}} poistaa sen.
- {{ui:Copy this level…}} piirtää uudelleen sen, mitä katsomallasi kerroksella on, toiselle kerrokselle tai uudelle kerrokselle päällä: seinät ovineen ja ikkunoineen, lattiat ja katot (ei kattoja). Seinät, jotka ulottuivat ylempään kerrokseen, ulottuvat uuden kerroksen yläpuolelle; huoneet ilmestyvät itsestään. Yksi {{ui:Undo}} palauttaa kaiken. Jos toisella kerroksella on jo seiniä, kopio lisätään niiden joukkoon.
- {{ui:Units}} työkalurivillä valitsee yksiköt (jalat ja tuumat, tuumat, desimaalijalat, millimetrit, senttimetrit tai metrit) kaikelle, mitä piirtotyökalut näyttävät ja lukevat.

## Tallenna

Napsauta {{ui:Save as IFC}}. Jokainen seinä on IFC-seinä keskilinjallaan, liitetyllä muodollaan, tyypillään ja kerroksillaan, `Pset_WallCommon`-joukolla ja pohjamäärillä (pituus, korkeus, pinta-alat ja tilavuudet). Muut BIM-ohjelmat avaavat ja luetteloivat sen.

## Hyvä tietää

- Seinät piirretään keskilinjalleen. Paksuus tulee seinätyypistä.
- Pohjakuva näyttää täällä piirretyt seinät täytettyinä ja kaiken muun (kirjastokohteet, muilla ohjelmilla tehdyt mallit) saman tason leikkaamana, ja leikkauksen alapuolella olevat ohuilla viivoilla.
- Muilla ohjelmilla tehdyt seinät näkyvät pohjakuvassa, mutta niitä ei voi vielä muuttaa näillä työkaluilla.
