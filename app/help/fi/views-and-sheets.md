---
title: Näkymät, näkymäalueet ja omat arkit
summary: Etsi kaikki pohjakuvat, leikkaukset, 3D-näkymät, luettelot ja arkit projektiselaimesta, aseta jokaisen pohjakuvan leikkaus ja sisältö, tee tarkennuksia, piirrä viivoja ja viivoituksia yhteen näkymään, pidä asetukset näkymäpohjissa ja järjestä omat arkkisi.
keywords: tarkennus, tarkennusnäkymä, detaljinäkymä, suurennettu pohjakuva, piirtäminen, detaljiviivat, piirtoviivat, viivoitus, viivoitusalue, täytetty alue, täyttökuvio, heijastettu alakattokuva, rcp, alakattokuva, alakattoruudukko, valaisimet, projektiselain, näkymät, näkymäalue, rajaus, rajausalue, rajausnäkymä, näkymän mittakaava, alusta, näytä toinen taso, puolisävy, leikkaustaso, leikkauskorkeus, yläraja, alaraja, näkymän syvyys, näkyvyys, luokat, piilota näkymässä, näkymäpohja, arkki, arkit, piirustusotsikko, näkymäruutu, mittakaava, arkkien järjestely, asettelu, pdf, pohjakuvan asetukset, selain
from: ee1d5afe
---

## Mitä teet

Työskentele tavalla, jolla BIM-projektit järjestetään: jokainen näkymä yhdessä luettelossa, jokainen pohjakuva leikattuna siitä, mistä haluat, samat asetukset useille pohjakuville näkymäpohjan avulla ja arkit, jotka asetellaan itse.

## Projektiselain

1. Ota käyttöön {{ui:Draw}}. Vasemmalla paneelilla on {{ui:Project browser}} mallien alla.
2. Se listaa:
   - **Pohjakuvat**: jokaisen tason. Napsauta yhtä nähdäksesi sen pohjakuvan. Sen vieressä oleva liukusäätöpainike asettaa näkymäalueen (alla). Pohjakuva, joka seuraa näkymäpohjaa, näyttää näkymäpohjan nimen.
   - **Alakattokuvat**: jokaisen tason heijastetun alakattokuvan (alla).
   - **Tarkennukset**: jokainen tarkennus sen näkymän kanssa, johon se piirretään, ja {{ui:New callout}}. **Puuttuvat** luettelee tarkennukset, joiden näkymä on poissa.
   - **Julkisivut** ja **Leikkaukset**: neljä sivua ja jokainen leikkausviiva. Napsauta yhtä avataksesi piirustussarjan, johon ne piirretään.
   - **3D-näkymät**: näkymät, jotka tallensit {{ui:Views}}-painikkeella.
   - **Luettelot**: napsauta yhtä näyttääksesi sen pohjakuvan alla.
   - **Arkit**: tekemäsi arkit, {{ui:New sheet}}, ja {{ui:Drawing set…}} koko mallista tehdylle sarjalle.
   - **Näkymäpohjat**, {{ui:New template}}, ja **Linkit** (linkitetyt mallit).

## Aseta pohjakuvan näkymäalue

1. Napsauta liukusäätöpainiketta tason vieressä kohdassa **Pohjakuvat**.
2. Aseta korkeudet tason yläpuolelle:
   - **Leikkaus**: kohta, jossa pohjakuva leikkaa seinät, ovet ja ikkunat (1200 mm, noin 4 ft, ellei toisin aseteta).
   - **Yläraja**: leikkauksen yläpuolella ja ylärajan alapuolella olevat asiat piirretään katkoviivoin (korkea kaappi, palkki). Jätä tyhjäksi, jolloin käytetään tason korkeutta.
   - **Alaraja** ja **Syvyys alarajan alla**: leikkausta alempana olevat asiat piirretään ohuilla viivoilla alarajaan asti ja sen verran sen alle.
3. Kohdassa **Näytetään tässä pohjakuvassa** poista ruksi kohdista, jotka tämä pohjakuva jättää pois: kalusteet, huoneet, pilarit ja niin edelleen.
4. Yksittäisiä elementtejä jätetään pois: valitse ne pohjakuvasta tai 3D-näkymästä, avaa valintaikkuna ja napsauta {{ui:Hide the selected here}}. {{ui:Show them all}} palauttaa ne.
5. Napsauta {{ui:Use these settings}}.

Pohjakuva leikataan heti uudelleen, ja piirustussarja ja omat arkkisi seuraavat sitä. Pistepilven viipale seuraa myös leikkauskorkeutta.

## Rajaa pohjakuva, anna sille mittakaava, näytä toinen taso sen alla

Kaikki kolme ovat samassa valintaikkunassa (tason vieressä oleva liukusäätöpainike):

- **Mittakaava**: mittakaava, jolla pohjakuva tulostuu ({{ui:Print}} pohjakuvan palkissa) ja jolla se tulee arkille. **Sovita** valitsee suurimman vakiomittakaavan, joka mahtuu.
- **Rajausalue**: napsauta {{ui:Draw on the plan…}}, sitten yhtä kulmaa ja vastakkaista kulmaa pohjakuvassa ({{key:Esc}} lopettaa). Rajauksen ulkopuolinen pohjakuva peitetään näytöllä, ja siellä voi silti työskennellä. Tulostettuna, arkeilla ja piirustussarjassa pohjakuva näyttää vain rajauksen sisäpuolen. {{ui:Clear}} poistaa rajauksen. {{ui:Fit}} sovittaa rajauksen.
- **Alusta**: valitse toinen taso. Sen seinät, leikatut elementit, ovet ja ikkunat piirretään vaaleina tämän pohjakuvan alle, jotta asiat asettuvat kohdalleen alemman tai ylemmän tason kanssa. Niitä ei voi valita täältä, ja ne tulostuvat vaaleanharmaina.

Näkymäpohja kantaa mittakaavan korkeuksien ja luokkien mukana. Rajausalue ja alusta kuuluvat aina yhteen pohjakuvaan.

## Tason alakattokuva

Jokaisella tasolla on heijastettu alakattokuva pohjakuvansa vieressä: pohjakuva nähtynä alhaalta, alakattojen ja niistä roikkuvien asioiden suunnittelua varten.

1. Napsauta tason alla olevaa tasoa kohdassa **Alakattokuvat** tai valitse {{ui:Ceiling plan}} tason vieressä pohjakuvan palkissa.
2. Seinät leikataan 2300 mm:n (noin 7'-6") kohdalta. Leikkauksen yläpuolella ja tason korkeuden alapuolella oleva piirretään: alakatot ruudukkoineen ja korkeusmerkintä (`CLG 2438`), valaisimet ja palkit. Ovet, ikkunat ja leikkauksen alapuolella oleva jätetään pois.
3. Tehdäksesi alakaton käytä {{ui:Ceiling}}-työkalua kuten pohjakuvassa, valitse se ja valitse sen **Kuvio** Ominaisuudet-paneelista. Katso [Huoneet, lattiat, alakatot ja katot](topic:floors-and-roofs).
4. Ripustaaksesi valaisimen siitä, sijoita kohde kirjastosta alakattokuvan ollessa näkyvissä: se menee kohtaan **Alakatossa**. Katso [Sijoita laitteet ja kalusteet kirjastosta](topic:place-from-library).
5. Pohjakuvan vieressä oleva liukusäätöpainike asettaa alakattokuvan leikkauksen ja ylärajan, mittakaavan, luokat, rajausalueen ja alustan kuten pohjakuvassa. Alakattokuvat eivät käytä näkymäpohjaa.

Se piirretään samoin päin kuin pohjakuva (heijastettu pohjakuva, ei peilikuva). Tasoa alempana oleva alakatto ei piirry: laske leikkausta sen tason alakattokuvaa varten. Alakattokuvat menevät omille arkeillesi kuten pohjakuvat; piirustussarja ei lisää niitä itse.

## Tee tarkennus

Tarkennus näyttää osan pohjakuvasta suurempana omassa mittakaavassaan omana näkymänään: keittiö, portaat, seinänurkka.

1. Näytä pohjakuva, alakattokuva tai tarkennus, johon se kuuluu.
2. Valitse {{ui:Annotate}} › {{ui:Callout}} pohjakuvan palkista (tai {{ui:New callout}} selaimesta) ja napsauta alueen yhtä kulmaa ja vastakkaista kulmaa. {{key:Esc}} lopettaa.
3. Tarkennus tehdään mittakaavassa 1:20 (1/2" = 1'-0" jaloissa ja tuumissa). Sen suorakulmio ja pyöreä tunniste piirretään pohjakuvaan.
4. Napsauta tunnistetta {{ui:Select}}-työkalulla tai tarkennusta selaimessa avataksesi sen: pohjakuva näyttää vain alueen, mittakaavassa. Palkissa lukee {{ui:Callout:}} ja sen nimi; {{ui:Up}} palaa näkymään, johon tarkennus piirretään.
5. Liukusäätöpainike sen vieressä (selaimessa tai palkissa) nimeää sen uudelleen, muuttaa sen mittakaavaa, piirtää sen suorakulmion uudelleen tai poistaa sen.

Tarkennus näyttää saman kuin sen näkymä: saman leikkauksen, samat luokat, alakattokuvan alakatot. Tarkennus tarkennuksen sisällä toimii samalla tavalla. Aseta tarkennus arkille kuten pohjakuva; sen tunniste kertoo, missä se on (`1 / A-501`: ensimmäinen näkymä arkilla A-501). {{ui:Print}} tarkennuksessa tulostaa vain tuon alueen omassa mittakaavassaan.

Tarkennuksen poistaminen poistaa myös sen sisään piirretyt tarkennukset sekä niissä piirretyt viivat ja viivoitukset (sinulta kysytään ensin). Jos taso, jolle tarkennus piirretään, poistetaan, tarkennus jää kohtaan **Puuttuvat**, kunnes se poistetaan, ja arkit, joilla se on, ilmoittavat sen puuttuvaksi.

## Piirrä viivoja ja viivoituksia yhteen näkymään

Piirtäminen on 2D-työtä, joka kuuluu vain yhteen näkymään: merkintöjä viivoilla, betonin tai maan viivoitettu alue, täytetty alue. Se ei koskaan ole 3D-näkymässä eikä toisessa pohjakuvassa.

1. Näytä pohjakuva, alakattokuva tai tarkennus, johon piirrät.
2. Valitse {{ui:Annotate}} pohjakuvan palkista:
   - {{ui:Line}}: napsauta, mistä se alkaa ja mihin päättyy. Seuraava viiva alkaa siitä, mihin edellinen päättyi; {{key:Enter}} aloittaa alusta.
   - {{ui:Polyline}}: napsauta sen pisteet; {{key:Enter}} tai kaksoisnapsautus lopettaa, ja napsautus ensimmäiseen pisteeseen sulkee sen.
   - {{ui:Rectangle}}: kaksi vastakkaista kulmaa.
   - {{ui:Hatch region}}: valitse palkista **Kuvio** (Täyttö, Vinoviiva, Ristiviiva, Betoni, Eristys, Maa) ja sen mittakaava, napsauta sitten kulmat; {{key:Enter}}, kaksoisnapsautus tai napsautus ensimmäiseen kulmaan sulkee sen. Kun {{ui:Fill a room}} on valittuna, yksi napsautus huoneessa viivoittaa sen ääriviivan.
3. Pisteet tarttuvat kuten seinissä; {{key:Shift}} pitää viivan suorassa kulmassa, ja pituuden voi kirjoittaa kuten seinille. {{key:Backspace}} poistaa viimeisen pisteen.

Valitse viiva tai viivoitus pohjakuvasta {{ui:Select}}-työkalulla. Ominaisuudet muuttaa viivoituksen kuvion ja mittakaavan ja sisältää {{ui:Move…}} (napsauta piste, josta siirretään, ja sitten minne se menee). {{key:Delete}} poistaa sen. Jokainen viiva, viivoitus ja muutos on yksi vaihe.

Viivat ja viivoitukset tulostuvat pohjakuvan mukana, menevät arkeillesi sen mukana ja ovat piirustussarjassa. Poista **Merkinnät** näkymäalueen kohdasta, jos haluat jättää ne pois kyseisestä näkymästä.

## Pidä asetukset näkymäpohjassa

1. Napsauta {{ui:New template}} selaimessa tai {{ui:Save as a template…}} pohjakuvan näkymäalueesta (tämä pohjakuva käyttää sitten sitä).
2. Anna sille nimi, aseta korkeudet ja luokat ja napsauta {{ui:Save the template}}.
3. Valitse pohja minkä tahansa pohjakuvan näkymäalueesta. Pohjakuva ottaa sen korkeudet ja luokat; muuta pohjaa, niin muuttuu jokainen sitä käyttävä pohjakuva. Yksittäin piilotetut elementit pysyvät piilossa omassa pohjakuvassaan.
4. Napsauta pohjaa selaimessa muuttaaksesi, nimetäksesi uudelleen tai poistaaksesi sen. Pohjan poistaminen jättää sen pohjakuvat omilla asetuksillaan.

## Järjestä oma arkki

1. Napsauta {{ui:New sheet}}. Kirjoita sen numero ja nimi ja valitse paperi.
2. Napsauta {{ui:Add}} pohjakuvan, alakattokuvan, tarkennuksen, julkisivun, leikkauksen tai luettelon vieressä. Se asettuu arkin keskelle.
3. Vedä se paikalleen. Kun se on valittuna, valitse **Mittakaava** tai jätä se pohjakuvan omaan mittakaavaan (kun pohjakuvalla on sellainen), muuten mittakaava, joka sopii kolmannekseen arkista. {{ui:Take off the sheet}} poistaa sen arkilta.
4. Napsauta {{ui:Save the sheet}}. Arkki listataan kohtaan **Arkit**; napsauta sitä muuttaaksesi sitä myöhemmin.
5. {{ui:Download as PDF}} tallentaa sen arkin yhtenä sivuna.

## Mitä pitäisi näkyä

- Pohjakuvat leikattuina korkeuksiinsa, yläpuoli katkoviivoin ja poistetut asiat jätettyinä pois.
- Rajattu pohjakuva peitettynä alueensa ulkopuolelta näytöllä ja leikattuna siihen paperilla, siinä mittakaavassa jonka annoit.
- Alakattokuva, jossa alakattojen ruudukot, korkeusmerkinnät ja valaisimet alakatossa.
- Tarkennukset suorakulmioineen ja tunnisteineen pohjakuvassa, kukin avautuu omassa mittakaavassaan.
- Viivat ja viivoitukset vain siinä näkymässä, johon ne piirrettiin.
- Arkit piirtyvät uudelleen mallista joka kerta, kun ne avataan, joten ne vastaavat aina mallia. Näkymä, jonka taso tai leikkausviiva on poistettu, ilmoitetaan eikä sitä piirretä.
- Jokainen muutos tässä on yksi vaihe: {{key:Mod+Z}} kumoaa sen.

:::note
Kaikki tämä tallennetaan IFC-tiedostoon ominaisuusjoukkoina, joihin muut ohjelmat eivät koske: jokaisen tason näkymäalue ja alakattokuva tasolla, näkymäpohjat, tarkennukset ja arkit projektissa. Viivat ja viivoitukset ovat IFC-merkintöjä omassa tasossaan, joten muut ohjelmat näkevät ne 2D-käyrinä ja viivoitettuina alueina (oman piirroksensa kullekin kuviolle), mutta eivät sitä, mihin näkymään ne kuuluvat.
:::

:::tip
Muut BIM-ohjelmat kutsuvat leikkausta näkymäalueeksi tai leikkaustasoksi, näkymäpohjia näkymäasetuksiksi, piirtoviivoja detaljiviivoiksi ja viivoitusalueita täytetyiksi alueiksi. Ajatukset ovat samat; näkymäasetukset eivät siirry niihin.
:::
