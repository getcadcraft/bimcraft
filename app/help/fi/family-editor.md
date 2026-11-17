---
title: Perheen muokkaaminen
summary: Muuta perheen parametreja, kaavoja ja kappaleita, näytä osia kyllä/ei-parametrilla, leikkaa ja yhdistä kappaleita, anna perheelle liittimet putkille ja kanaville ja katso tulos IFC:stä, johon se tallennetaan.
keywords: perhe-editori, muokkaa perhettä, parametri, parametrit, kaava, kaavat, näkyvyys, kyllä ei, kappale, kappaleet, laatikko, pursotus, pyöräytys, pyyhkäisy, profiili, kaari, boolen operaatio, leikkaus, yhdistäminen, kahva, kahvat, työtaso, luonnos, uusi perhe, liitin, liittimet, portti, portit, putkiliitin, kanavaliitin, viemäri, vesijohto
from: 1ab31c10
---

## Avaa editori

Avaa perhe (projektiselaimen **Perheet**, tai {{ui:Build}} › {{ui:Families…}}) ja napsauta {{ui:Edit the family}}. Aloittaaksesi tyhjästä napsauta {{ui:New family}}. Anna perheelle nimi, kerro mikä se on (ovi, ikkuna, kaluste, varuste tai muu), ja ovelle tai ikkunalle valitse, mistä lähtöperheestä sen pohjakuvasymboli ja kahva tulevat. Editori avautuu perheeseen, jossa on muutama parametri ja yksi kappale.

Lähtöperheen muokkaus pitää muutoksesi vain tässä mallissa. Muut mallit säilyttävät lähtöperheen sellaisena kuin se on.

Mikään mallissa ei muutu ennen kuin napsautat {{ui:Save the family}}. Editorilla on oma kumoa- ja tee uudelleen -toiminto (nimen vieressä olevat nuolipainikkeet tai {{key:Mod+Z}} ja {{key:Mod+Y}}). Tallennus on yksi vaihe mallin kumoa-toiminnossa.

## Parametrit

Välilehti {{ui:Parameters}} listaa perheen parametrit: nimen, lajin ja oletusarvon. Lajit ovat: **Pituus** (millimetreinä), **Kulma** (asteina), **Luku**, **Kokonaisluku**, **Kyllä / Ei**, **Kynä** (1–16) sekä kolme lajia, jotka sisältävät sanoja lukujen sijaan: **Teksti**, **Materiaali** (yksi projektin materiaaleista) ja **Täyttö** (pohjakuvatäyttö). Sanoja ei käytetä kaavoissa. Ne värittävät kappaleen (sen **Materiaali**), täyttävät symbolin osan tai tulostuvat symbolin tekstiin muodossa `{Name}`. Ruutu **Elementtikohtainen** tekee parametrista sellaisen, jonka jokainen sijoitettu elementti asettaa itse koon sijaan.

- **Kaava** tekee parametrista muiden mukaan seuraavan, esimerkiksi `Width / 30` tai `if(Width > 1200, 2, 1)`. Pituudet kaavoissa ovat millimetrejä, tai voit kirjoittaa yksikön: `3'`, `6in`, `50cm`.
- Parametrin uudelleennimeäminen nimeää sen uudelleen jokaisessa kaavassa ja kentässä, joka sitä käyttää. Parametria, jota vielä käytetään, ei voi poistaa.
- Kappaleen **Materiaali** ottaa projektin materiaalin värin (tai Materiaali-parametrin värin). **Näkyy** piilottaa kappaleen karkeammilla yksityiskohtaisuustasoilla. **Toisto** tekee kopioita: määrä (luku tai kokonaislukuparametri, 1–200) ja askel niiden välillä x-, y- ja z-suunnassa. Toistettu kappale on rivi lautoja, tankoja tai reikiä. Leikkauksessa käytettynä kopiot leikataan yhdessä.
- Ovi- tai ikkunaperhe saa seinästään myös kaksi nimeä: `WallThickness` ja `Face` (1 tai −1, puoli, johon ovi aukeaa).

## Kappaleet

Välilehti {{ui:Solids}} listaa kappaleet. Lisää laatikko, pursotus, pyöräytys tai pyyhkäisy:

| Kappale | Mitä asetat |
|---|---|
| Laatikko | sen kaksi kulmaa: x0–x1, y0–y1, z0–z1 |
| Pursotus | profiili työtasolla (pohjakuva, edestä tai sivulta), tason sijainti ja syvyys |
| Pyöräytys | profiili, akseli tasolla ja kulma enintään 360° |
| Pyyhkäisy | polku pisteinä ja säde (tanko tai kaide) |

Jokainen luku voi olla kirjoitettu luku tai parametrien lauseke. Jokaisella kappaleella on väri ja **Näytetään kun**: jätä tyhjäksi, jolloin se näkyy aina, tai nimeä kyllä/ei-parametri (tai kirjoita vertailu, kuten `Shelves >= 3`), jolloin se näkyy vain silloin. Tämä on näkyvyysparametri.

### Piirrä profiili

Pursotuksen tai pyöräytyksen profiili piirretään sen työtasolle esikatselun alle:

- Napsauta paperia lisätäksesi pisteen valitun pisteen jälkeen.
- Vedä pistettä siirtääksesi sitä. Pisteet tarttuvat ruudukkoon. Pidä {{key:Shift}} pohjassa asettaaksesi ne vapaasti.
- Napsauta segmentin pieni neliö lisätäksesi siihen pisteen. {{key:Shift}}+napsautus tekee segmentistä kaaren (napsauta uudelleen toiseen suuntaan, ja sitten suoraksi).
- Kaksoisnapsauta pistettä poistaaksesi sen.

Ontot pisteet asetetaan parametreilla: muuta niitä taulukossa, älä vetämällä.

## Boolen operaatiot

Välilehti {{ui:Booleans}} leikkaa toisen kappaleen ensimmäisestä tai yhdistää ne. Boolen operaation tuloksen voi leikata tai yhdistää uudelleen. Boolen operaatiossa käytetty kappale piirtyy vain osana sitä.

Kun toinen kappale on piilotettu kyllä/ei-parametrillaan, ensimmäinen säilyy sellaisena kuin se on. Kun ensimmäinen on piilotettu, tulos on piilotettu.

## Pohjakuvasymboli

Välilehti {{ui:Plan symbol}} piirtää pohjakuvaan perheen näyttämän osan kappaleiden leikkauksen sijaan: viivat, suorakulmiot, ympyrät, kaaret, monikulmiot ja tekstin perheen omassa koordinaatistossa. Jokaisella osalla on **kynä** (1–16, lauseke tai Kynä-parametri), **täyttö** (ei mitään, tasainen, vinoviivoitus, ristiviivoitus, betoni, eriste, maa tai Täyttö-parametri), **näkyy kun** -lauseke, **leikkausalue** millimetreinä perustasosta ylöspäin (osa piirtyy täydellä paksuudella, kun pohjakuvan leikkaus on sen sisällä, ohuena alapuolella ja katkoviivana yläpuolella: leikkauksen yläpuolella oleva kaappi näkyy katkoviivana), yksityiskohtaisuustaso ja toisto. Teksti voi viitata parametreihin muodossa `{Name}`. **Pohjakuva näyttää: kappaleiden leikkauksen** pitää pohjakuvan leikkauksen kappaleista, kun symboli pysyy perheessä. Muut ohjelmat lukevat symbolin perheen pohjana (viivat ja muodot; teksti jää BimCraft-ohjelmaan).

## Sisällä olevat perheet

Välilehti {{ui:Families inside}} asettaa toisen perheen tämän sisään: jalan pöydässä, kahvan ovessa. Valitse perhe ja kerro, mihin se menee (x, y, z), kuinka paljon se on käännetty (vain neljänneskierrokset: 0, 90, 180, 270), milloin se näytetään ja mitkä arvot se saa. Arvot kirjoitetaan yksi riviltään muodossa `Height = Height - 40`. Sisemmän perheen tallennus piirtää tämän perheen uudelleen. Toisen perheen sisällä pidettyä perhettä ei voi poistaa. Perhe ei voi sisältää itseään, ei edes toisen perheen kautta, ja sisäkkäisyys pysähtyy neljään tasoon.

## Kuumat pisteet

Kuuma piste on piste tai reuna, jota vedät parametrin muuttamiseksi. Lisää se välilehdellä {{ui:Hotspots}}, valitse akseli, jota se vetää, ja lukuparametri, jota se muuttaa, ja kirjoita sen sijainti samoilla lausekkeilla kuin kappaleissa. Esikatselussa valitse **Kuumat pisteet** kahvojen alta vetääksesi niitä. Sijoitetussa elementissä pohjakuvassa (valitse se {{ui:Select}}-toiminnolla) x- ja y-kuumat pisteet näkyvät otteina. Vedä yhtä, ja elementti saa sen kokoisen, joka asettaa kuuman pisteen kohdalle, lausekkeiden läpi. Yksi kumoa palauttaa sen. Kuuma piste ei voi muuttaa johdettua parametria, kyllä/ei-arvoa tai sanaa.

3D-näkymässä samat kuumat pisteet näkyvät otteina valitussa elementissä. Myös ylös ja alas -suuntaiset (akseli z) näkyvät siellä, mitä pohjakuva ei voi piirtää. Valitse elementti, vedä otetta sen akselia pitkin ja vapauta: elementti saa sen kokoisen, joka asettaa kuuman pisteen kohdalle, yhtenä kumoa-vaiheena. Otteet piilotetaan, kun leikkauslaatikko on päällä, koska se käyttää samoja otteita.

## Liittimet

Lattialle sijoitetuilla perheillä (kalusteet, varusteet ja muut) on välilehti {{ui:Connectors}}. Siinä ovat kohdat, joihin putki tai kanava liittyy elementtiin, kuten altaan hanassa ja viemärissä. Napsauta {{ui:Add a connector}} ja aseta:

- **Laji**: putki tai kanava, ja sen **Järjestelmä** (kylmävesi, viemäri, syöttöilma ja niin edelleen).
- **x**, **y** ja **z**: missä liitin on perheen omissa akseleissa. Kuten kappaleen luvut, jokainen voi olla luku tai parametrien kaava, joten liitin liikkuu koon mukana.
- **Ulostulosuunta**: suunta, johon putki tai kanava lähtee, yhden perheen akselin suuntaan (altaan alla oleva viemäri lähtee **Alas**).
- **Koko (mm)**: putken nimelliskoko (DN) tai pyöreän kanavan halkaisija.
- **Virtaus**: **Sisään** syötettävälle liittimelle (hana) ja **Ulos** viemäröivälle liittimelle.

Esikatselu piirtää jokaisen liittimen renkaana, jonka ulostulosuunnassa on nuoli. Ovilla ja ikkunoilla ei ole liittimiä.

Putkiston laitteelle valitse, mikä se on kohdassa **Putkiston laite** (WC-istuin, pesuallas, keittiöallas, suihku, pyykkiallas). Lähtölaitteissa tämä on jo asetettu.

Perheestä sijoitettu elementti saa liittimensä IFC-tiedostoon porteiksi. Ne piirretään uudelleen, kun elementin koko muuttuu tai perhe tallennetaan. IFC-järjestelmiä lukevat ohjelmat näkevät, mihin kukin putki tai kanava kuuluu.

## Esikatselu ja sen kahvat

Esikatselu on perhe kirjoitettuna IFC-muotoon samalla koodilla, joka tallentaa sen malliin, ja piirrettynä takaisin. Mitä näet, sitä muut ohjelmat saavat. Esikatselun alla **Näytetty koko** asettaa parametriarvot, joita esikatselu käyttää.

**Kahvat** ovat pisteitä esikatselussa. **Koko** näyttää kahvat leveydelle, syvyydelle ja korkeudelle. **Valittu kappale** näyttää yhden kahvan kunkin valitun kappaleen pinnalle. Vedä kahvaa:

- parametrin määräämällä pinnalla näytetty koko muuttuu (perheen kaavat säilyvät);
- kirjoitetulla luvulla määrätyllä pinnalla luku muuttuu.

## Tallentaminen

{{ui:Save the family}} tarkistaa perheen ja piirtää jokaisen sen koon uudelleen. Se tekee uudelleen jokaisen sen elementin yhtenä kumottavana vaiheena. Jos koko ei voi piirtyä muutoksen kanssa (esimerkiksi kappaleella ei olisi leveyttä siinä koossa), mitään ei tallenneta, ja editori kertoo, mistä koosta on kyse.

Jos joku muu on tallentanut saman perheen editorisi ollessa auki (Live TeamWork -istunnossa tai toisessa ikkunassa), {{ui:Save the family}} kieltäytyy ja kertoo sen. Se ei korvaa heidän muutostaan omallasi. Sulje editori, avaa perhe uudelleen nähdäksesi heidän muutoksensa ja tee omasi uudelleen.

:::note
Geometria tallennetaan IFC:n omina kappaleina: pursotuksina, pyöräytyksinä, pyyhkäistyinä ympyrälevyinä ja Boolen operaatioiden tuloksina. Mitään ei muunneta kolmioiden listaksi, joten tiedostot pysyvät pieninä, ja muut ohjelmat lukevat muodot muotoina. Profiilit, joissa on kaaria, tallentuvat IFC4:ssä kaarina. IFC2X3:ssa profiilissa ei ole kaarisegmenttejä, joten siellä kaaret tallennetaan lyhyinä suorina osina.
:::

Katso myös [Perheet ja niiden koot](topic:families).
