---
title: Leikkaa IFC-malli leikkaustasolla
summary: Leikkaa 3D-malli ylhäältä, edestä tai sivulta tai pidä vain se, mikä on leikkauslaatikon tai useista kallistetuin pinnoin varustetun tilavuuden sisällä, nähdäksesi sisään. Siirrä leikkausta vetämällä tai kirjoittamalla, käännä sitä ja valitse, mitä leikkaus näyttää.
keywords: leikkaus, leikkaustaso, leikkauslaatikko, kahvat, vetäminen, marginaali, valintalaatikko, leikkausrajaus, leikkaus, rajaus, viipale, pohjaleikkaus, pohjakuva, julkisivu, sisältä, sisätila, käännä, siirtymä, leikkaustilavuus, portaittainen leikkaus, L-muotoinen, kallistus, vino leikkaus, vino taso, lisätaso
from: 6315e71a
---

## Mitä teet

Leikkaa IFC-malli yhdellä tasolla nähdäksesi sen sisään: ylhäältä pohjakuvaa varten tai edestä tai sivulta rakennuksen läpi kulkevaa leikkausta varten.

## Vaiheet

1. Avaa IFC-malli. Katso [Avaa IFC-malli ja tutustu siihen 3D-näkymässä](topic:open-ifc-model).
2. Napsauta työkalurivin {{ui:Leikkaus}}-painiketta tai paina {{key:X}}. Malli leikataan puoliväliin korkeutta, ja työkalurivin alle ilmestyy palkki.
3. Valitse, mistä leikataan: {{ui:Ylhäältä}}, {{ui:Edestä}} tai {{ui:Sivu}}. Edestä ja Sivu kääntävät myös näkymän katsomaan leikkausta.
4. Siirrä leikkausta: vedä **Siirtymä**-liukusäädintä tai kirjoita etäisyys metreinä kenttään ja paina {{key:Enter}}. Voit kirjoittaa myös millimetreinä, esimerkiksi `1200 mm`.
5. Napsauta {{ui:Käännä}}, jos haluat pitää leikkauksen toisen puolen.
6. Napsauta leikkauksessa olevaa elementtiä nähdäksesi sen ominaisuudet.
7. Napsauta {{ui:Pois}}, napsauta uudelleen {{ui:Leikkaus}} tai paina {{key:X}} poistaaksesi leikkauksen.

## Leikkauslaatikko

Napsauta samalla palkilla {{ui:Laatikko}}, jos haluat pitää vain laatikon sisällä olevan. Kohdilla {{ui:X}}, {{ui:Y}} ja {{ui:Z}} on kussakin kaksi liukusäädintä: mistä laatikko alkaa ja mihin se päättyy metreinä mallin reunasta. Arvot näkyvät niiden vieressä.

- {{ui:Laatikko valinnan ympärille}} sovittaa laatikon valittujen elementtien ympärille ja zoomaa niihin. Se jättää joka puolelle 300 mm vapaata tilaa; muuta se kohdassa {{ui:Asetukset}} › {{ui:BimCraft}} › {{ui:Väljyys valinnan ympärillä}}.
- Kun elementit on valittu, {{ui:Näytä}} › {{ui:Leikkauslaatikko valinnan ympärille}} tai {{key:Shift+X}} tekee saman yhdellä askeleella, vaikka leikkausta ei olisi päällä.
- **Kahvat** laatikossa siirtävät sitä osoittimella: vedä pinnan keskellä olevaa neliötä siirtääksesi kyseisen pinnan, reunan keskellä olevaa siirtääksesi siinä kohtaavat kaksi pintaa tai kulmassa olevaa siirtääksesi kolme. Liukusäätimet seuraavat. {{ui:Ylhäältä}}-näkymässä kulma siirtää laatikkoa pohjakuvassa, {{ui:Edestä}}- tai {{ui:Sivu}}-näkymässä julkisivussa.
- {{ui:Koko malli}} avaa laatikon taas koko malliin.
- {{ui:Ylhäältä}}, {{ui:Edestä}} tai {{ui:Sivu}} palaavat yhteen tasoon.

## Useista laatikoista koostuva tilavuus, kallistetut pinnat ja lisätasot

Laatikko ei aina ole tarvitsemasi muoto: portaittainen leikkaus, L-muotoinen siipi tai leikkaus seinää pitkin, joka ei ole suorassa ruudukkoon nähden.

1. Kohdassa {{ui:Laatikko}} napsauta {{ui:Lisää laatikko}}. Leikkaus säilyttää nyt sen, mikä on **jonkin** laatikon sisällä, joten kaksi laatikkoa muodostaa portaittaisen tai L-muotoisen tilavuuden. Sen vieressä oleva luettelo kertoo, mitä laatikkoa liukusäätimet muuttavat ({{ui:Laatikko 1}}, {{ui:Laatikko 2}}…); {{ui:Poista tämä laatikko}} poistaa valitun. Tilavuudessa voi olla enintään 8 laatikkoa.
2. Avaa {{ui:Kallistus ja tasot}} muokataksesi valittua laatikkoa:
   - Valitse {{ui:Pinta}} ja kirjoita, kuinka paljon se kallistuu kumpaankin suuntaan asteina (enintään 80). Pinta kääntyy keskikohtansa ympäri; muut pinnat pysyvät siellä, minne liukusäätimet ne asettavat. {{ui:Suora}} palauttaa sen.
   - {{ui:Lisää taso}} leikkaa laatikon vielä yhdellä tasolla. {{ui:Pinnat}} on se suunta, johon poisleikattu puoli osoittaa, asteina X:stä kohti Y:tä; {{ui:Kaltevuus}} on se, kuinka paljon se kääntyy ylöspäin (0 pystysuoralle tasolle, 90 vaakasuoralle); {{ui:Siirtymä}} on tason etäisyys laatikon keskikohdasta metreinä. × poistaa sen. Laatikossa voi olla enintään 6 lisätasoa.
3. Kohdissa, joissa tilavuus leikkaa kiintokappaleita, leikkauspinnat täytetään kuten ennen, myös kohdassa, jossa kaksi laatikkoa kohtaa portaassa.

:::tip
Jos ääriviiva katoaa eikä mitään jää jäljelle, kallistukset tai tasot eivät jätä laatikon sisälle mitään; palkki kertoo sen. Kallista pintaa takaisin tai muuta tason siirtymää.
:::

## Rakennus, joka on käännetty tontillaan

Monissa malleissa rakennus on kulmassa tiedoston akseleihin nähden (todellinen pohjoinen, jaetut koordinaatit). Kun seinät kulkevat kulmassa, uusi leikkaus alkaa suorana rakennukseen nähden: {{ui:Edestä}}, {{ui:Sivu}} ja laatikko kulkevat omien seinien suuntaisesti, ja leikkauspalkin {{ui:Suoraan rakennukseen nähden}} on päällä. Napsauta sitä, jotta saat mallin akselit, ja uudelleen palataksesi takaisin (tilarivi kertoo, kuinka paljon rakennus on käännetty). Kun **Asetukset › BimCraft › Rakennus, joka on käännetty tontillaan › Tontille sijoitettuna**, leikkaukset ja näkymät alkavat sen sijaan mallin akseleista. Katso [Asetukset](topic:settings).

## Mitä pitäisi näkyä

- **Ylhäältä** säilyttää leikkauksen alapuolella olevan, joten näet alas huoneisiin. Siirtymä mitataan ylöspäin mallin alareunasta.
- **Edestä** säilyttää leikkauksen takana olevan, katsottuna edestä; **Sivu** säilyttää sen takana olevan, katsottuna sivulta. Siirtymä mitataan mallin edestä tai sivulta.
- Ohut värillinen ääriviiva näyttää tason sijainnin.
- Kohdissa, joissa taso leikkaa seinän, laatan tai muun kiintokappaleen, leikkauspinta täytetään tummalla värillä kuten piirretty leikkaus. Palkin {{ui:Täyttö}} kytkee sen pois ja päälle.
- Näkymäkuutio oikeassa alakulmassa kääntää mallin, jotta leikkausta voi katsoa mistä tahansa suunnasta.
- Napsautus valitsee sen, mitä näet: poisleikattua ei voi valita.

## Yleiset virheet

- **Mikään ei muuttunut.** Leikkaus voi olla katon yläpuolella tai mallin ulkopuolella. Vedä liukusäädintä tai kirjoita pienempi siirtymä.
- **Siirtymä hyppäsi takaisin.** Mallin ulkopuolinen etäisyys siirretään sen päätyyn, ja tilarivi kertoo sen.
- **Havainto näyttää vain osan tilavuudestani.** Havainto (BCF) säilyttää yhden laatikon kallistetuin pinnoin ja tasoin: tilavuuden ensimmäisen laatikon. Tilarivi kertoo sen, kun teet havainnon.
- **Leikkaus on ontto.** Palkin {{ui:Täyttö}} on pois päältä: napsauta sitä täyttääksesi seinien, laattojen ja muiden kiintokappaleiden leikkauspinnat.
- **Täytetty leikkaus näyttää pilkulliselta tai siitä puuttuu osa.** Täyttö vaatii suljettuja kiintokappaleita; elementti, jonka muoto tiedostossa ei ole suljettu (yksi levy, puiden lehvästö), jätetään täyttämättä sen sijaan, että se maalattaisiin päälle. Elementti, joka koostuu eri värisistä osista (kehys ja sen lasi), täytetään, kun sen osat ovat tiiviisti yhdessä.
- **Missä leikkauspalkki on?** Se on sen 3D-näkymän yläreunassa, jota se leikkaa: 3D-puolella {{ui:Jaa}}-asettelussa ja piirtopalkin alapuolella yksinään {{ui:Pohjakuva}}-asettelussa. Lyhyessä näkymässä se vierittyy.

## Seuraavaksi

- [Näytä ja piilota kerrokset, tilat ja reunat](topic:storeys-and-spaces)
- [Katso DWG- tai DXF-piirustus 3D:nä](topic:dwg-in-3d) — piirustuksilla 3D:nä on sama leikkaustaso
