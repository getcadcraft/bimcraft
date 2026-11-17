---
title: Putket ja kanavat
summary: Piirrä putki- ja kanavalinjat pohjakuvaan keskiviivoja pitkin; kyynärpäät, T-haarat, supistimet ja siirtymät tehdään puolestasi, linjat kuuluvat järjestelmiin, joiden portit ovat yhdistetty IFC-tiedostossa, ja ne näkyvät pohjakuvissa, luetteloissa ja määrälaskennassa.
keywords: putki, putket, putkitus, lvi, kanava, kanavat, kanavointi, ilmastointi, mep, mekaaninen, kyynärpää, t-haara, supistin, siirtymä, liitososa, liitososat, venttiili, venttiilit, porttiventtiili, palloventtiili, kuristusventtiili, takaiskuventtiili, nousujohto, kaltevuus, viemäri, jätevesi, hulevesi, tuuletus, kylmävesi, lämminvesi, jäähdytetty vesi, lämmitys, kaasu, palosuojelu, tuloilma, poistoilma, ulkoilma, järjestelmä, järjestelmät, portti, portit, liitin, liittimet, laite, laitteet, saniteettilaite, allas, lavuaari, wc, suihku, ilmavirta, kitka, mitoitus, luettelo, määrälaskenta, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn, dfu, uhc, ramal, coletor, cfm
from: 85140bc5
---

## Mitä teet

Piirrä rakennuksen putket ja kanavat samalla tavalla kuin seinät: napsauta linjan keskiviivan kulmia asettamallasi korkeudella. BimCraft tekee liitososat, sijoittaa jokaisen osan järjestelmäänsä ja yhdistää ne, jotta muut ohjelmat lukevat linjan yhtenä yhdistettynä järjestelmänä.

## Piirrä putki

1. Ota {{ui:Draw}} käyttöön, avaa {{ui:Build}} ja valitse {{ui:Pipe}}.
2. Valitse palkista **järjestelmä** (kylmävesi, lämminvesi, viemäri, kaasu…). Se asettaa tavanomaisen materiaalin: kupari vedelle, PVC viemäreille ja tuuletukselle, teräs lämmitykselle, jäähdytetylle vedelle, kaasulle ja palosuojelulle. Vaihda **materiaali**, **luokka** ja **koko**, jos tarvitset. Koot ja seinämät tulevat julkisista standardeista: teräsputki ASME B36.10M, kuparputki ASTM B88, PVC ASTM D1785 ja PEX ASTM F876. Brasilialaisissa projekteissa voi käyttää **PVC-vesiputkea (NBR 5648)**, liimattavaa PVC:tä kylmälle vedelle, ja **PVC-viemäriputkea (NBR 5688)**, série normal tai reforçada, viemäreille ja tuuletukselle: niiden koot nimetään DN:llä (DN 25, DN 100). Kun valitset jonkin niistä, järjestelmän vaihtaminen pitää brasilialaiset putket (PVC-viemäriputki jätevesilinjalle PVC-vesiputken jälkeen).
3. Aseta **Korkeus**: putken keskiviivan korkeus tason yläpuolella.
4. Napsauta kohtaa, josta putki alkaa, ja sitten jokaista kulmaa. Kaksoisnapsauta tai paina {{key:Enter}} viimeisessä pisteessä. {{key:Backspace}} peruu viimeisen kulman; {{key:Esc}} hylkää linjan.

Putki kiinnittyy seinien tavoin myös muihin linjoihin: aloita putken päästä jatkaaksesi siitä, tai päätä putken viivalle haarautuaksesi siitä. Uusi linja ottaa sen putken korkeuden, johon se kiinnittyy.

Linja, joka alkaa tai päättyy laitteen porttiin, saa sen koon ja järjestelmän ja pysyy siihen kiinnitettynä: katso [MEP-laitteet portteineen](topic:mep-equipment) ja [Yhdistä putket ja kanavat laitteisiin](topic:mep-connections).

## Aseta projektin putkitusstandardi

Putkipalkin ensimmäinen luettelo on mallin **putkitusstandardi**: **US (IPC, tuumat)** tai **Brasilia (ABNT, DN)**. Se tallennetaan malliin, joten jokainen, joka avaa tiedoston, aloittaa linjat samalla tavalla. US-standardin mukaan uusi linja alkaa kuparista (vesi) tai PVC Schedule 40:stä (viemärit), tuumina, ja International Plumbing Coden kaltevuudella. Brasilian standardissa kylmä vesi alkaa PVC soldável DN 25:stä, jätevesi- ja hulevesiviemärit sekä tuuletus PVC esgoto DN 100:sta NBR 8160:n kaltevuudella, ja lämmin vesi kuparista. Se koskee myös linjaa, joka alkaa saniteettilaitteen liittimestä tai laiteportista. Jo piirretyt putket säilyttävät materiaalinsa ja omat taulukkonsa; materiaalilista pysyy auki, joten voit yhä piirtää yhden brasilialaisen linjan US-mallissa tarkoituksella. Tiedosto ilman valintaa toimii kuten ennen: uusi linja seuraa käytössä olevaa materiaalia.

## Piirrä kanava

1. Valitse {{ui:Duct}}. Valitse järjestelmä (tulo-, paluu-, poisto- tai ulkoilma) ja muoto: pyöreä, suorakaide tai litteä soikio.
2. Kirjoita leveys ja korkeus (pyöreän kanavan leveys on sen halkaisija), ja **Korkeus** keskiviivan korkeudelle.
3. Jos haluat mitoittaa sen ilmavirrasta, kirjoita **Ilmavirta** ja **Kitka**-arvo ja napsauta {{ui:Mitoita}}. Kanava mitoitetaan tasakitkamenetelmällä, joka on ASHRAE Handbookin kanavasuunnittelun luvun menetelmä, ja pyöristetään ylöspäin varastossa olevaan kokoon, joten kitka on yhtä suuri kuin tai alle kirjoittamasi arvon. Ilman kirjoitettua arvoa käytetään 0.08 in. vesipatsasta / 100 ft (0.8 Pa/m). Suorakaidekanava säilyttää kirjoittamasi korkeuden ja saa leveyden; BimCraft kertoo siitä, kun sen sivut ovat yli 4:1.
4. Napsauta kulmia kuten putkella.

## Vesikalusteet

{{ui:Build}} › {{ui:Place family}} tarjoaa viisi kalustetta lähtökohdaksi, kukin viemärin ja kylmävesiliittimen kanssa: **WC-istuin** (Water closet), **Käsienpesuallas** (Lavatory), **Keittiöallas** (Kitchen sink), **Suihkuallas** (Shower tray) ja **Pesuallas** (Laundry tub). Niiden etuosa on sinua päin sijoittaessasi, ja takaosa menee seinää vasten. Niiden viemärit ovat NBR 8160:n pienimmässä kalusteviemärissä (DN 100 WC:lle, DN 50 keittiöaltaalle, DN 40 muille); vesi on DN 20. Muuta niiden kokoja tai muokkaa niitä kuten mitä tahansa perhettä: katso [Perheet ja niiden koot](topic:families).

Perhe kertoo, mikä kaluste se on, kohdassa {{ui:Vesikaluste}} perhemuokkaimen {{ui:Liittimet}}-välilehdellä. Sen viemäri lasketaan silloin kalustoyksiköissä: 6 UHC WC:lle, 1 käsienpesualtaalle, 3 keittiöaltaalle tai pesualtaalle, 2 suihkulle (NBR 8160), tai IPC-taulukon 709.1 viemäröintikalustoyksiköt.

## Kalusteen liittimestä

Liittimellisistä perheistä sijoitetut elementit (altaan viemäri ja hana, ilmapäätteen kaula: katso [Muokkaa perhettä](topic:family-editor)) näyttävät vapaat liittiminsä pisteinä, kun {{ui:Pipe}} tai {{ui:Duct}} on päällä, ja osoitin tarttuu niihin.

- **Aloita liittimestä**: linja saa järjestelmänsä ja kokonsa (palkin materiaalin putki liittimen koossa tai juuri sen yläpuolella; pyöreä kanava sen halkaisijalla). Kun liitin osoittaa alas tai ylös, kuten altaan alla oleva viemäri, linja menee ensin suoraan alas tai ylös kohdassa **Korkeus** ilmoitettuun korkeuteen, ja jatkuu sitten napsautustesi mukaan.
- **Päätä liittimeen**: linja menee alas tai ylös siihen ja päättyy siihen.

Linja on yhdistetty elementtiin IFC-tiedostossa, joten muut ohjelmat näkevät kalusteen osana järjestelmäänsä. Myöhemmin sijoitettu elementti, jonka liitin on linjan päässä, yhdistyy siihen myös. Linja, joka siirretään pois liittimestä, ei ole enää siihen yhdistetty.

## Liitososat, tehty puolestasi

| Missä | Mitä BimCraft tekee |
|---|---|
| Linja kääntyy | Kyynärpää. Teräsputki ASME B16.9:n pitkällä säteellä (1.5 × koko), muu putki yhdellä ulkohalkaisijalla, pyöreä kanava 1.5 halkaisijalla, suorakaidekanava yhdellä leveydellä (tai yhdellä korkeudella kääntyessä ylös tai alas) |
| Linja päättyy toisen linjan viivalle | T-haara; toinen linja jaetaan siinä kohdassa |
| Kaksi linjaa, eri kokoiset, kohtaavat päästä päähän | Supistin (putket) tai siirtymä (kanavat) |
| Kaksi samankokoista linjaa kohtaavat päästä päähän kulmassa | Kyynärpää |

Kun muutat, siirrät tai poistat linjan, kaikki sen tason liitososat tehdään uudelleen. Jos jalka on liian lyhyt sen päissä oleville liitososille, BimCraft sanoo sen eikä muuta mitään: siirrä kulmaa kauemmas.

:::note
Liitososat ja venttiilit ovat yleisiä: piirretty putken tai kanavan koon mukaan, eivät valmistajan luettelosta. Muhvi-, puristus- ja uraliitoksilla, venttiilirungoilla ja laitteilla on valmistajien omat koot; tarkista ne toimittajasi kanssa ennen tilausta.
:::

## Nousujohdot

Piirtäessäsi kirjoita uusi korkeus kenttään **Korkeus** ja paina {{key:Enter}}: linja menee suoraan ylös tai alas viimeisessä kulmassa, ja kummassakin päässä on kyynärpää. Nousujohto voi mennä ylös seuraavaan tasoon. Jokainen taso näyttää ne osat linjasta, joihin sen näkymäalue ulottuu, ja nousujohdon kohdalla **UP** tai **DN**.

## Viemärit ja niiden kaltevuus

Jätevesi- ja hulevesiviemärit alkavat pienimmästä kaltevuudesta, jonka International Plumbing Code sallii niiden koolle: 1/4 in. per jalka 2-1/2 in. asti, 1/8 in. per jalka 3–6 in., 1/16 in. per jalka 8 in.:stä alkaen. Brasilialainen PVC-viemäriputki alkaa NBR 8160:n kaltevuudesta: 2 % DN 75:een asti, 1 % DN 100:sta alkaen. Kirjoita toinen kaltevuus palkkiin tai Ominaisuuksiin: `1/4"/ft`, `2 %` tai `1:50`. Linja laskee ensimmäisestä pisteestään, joten piirrä viemärit siihen suuntaan, johon ne virtaavat. Pohjakuva näyttää laskun ja nuolen. Ominaisuudet varoittaa, kun viemäri on tasaisempi kuin säännöstön vähimmäisarvo.

## Mitoita viemärit kalustoyksiköillä

Valitse jätevesiviemäri: **Kalustoyksiköt** Ominaisuuksissa kertoo, kuinka monta yksikköä se kuljettaa, ja pienimmän koon, jota ne vaativat. Jokainen saniteettilaite, jonka viemäriliitin on linjalla, lasketaan mukaan, samoin jokainen siihen virtaava viemäri: piirrä viemärit virtaussuuntaan, kukin päättyen siihen viemäriin, johon se virtaa.

- Brasilialaisen PVC-viemäriputken viemärit lasketaan **UHC**-yksiköissä ja noudattavat NBR 8160:tä; muut lasketaan **DFU**-yksiköissä ja noudattavat International Plumbing Codea.
- **Viemäri**: **Haara** mitoitetaan säännöstön haaroille tarkoitetusta taulukosta; **Rakennusviemäri** taulukosta kaltevuuden mukaan, joten sen **Kaltevuus** on tärkeä.
- Viemäri ei ole koskaan pienempi kuin viemärit, joita se palvelee (WC tarvitsee DN 100:n, eli 3 in.), eikä pienempi kuin siihen virtaava viemäri. NBR 8160:n mukaan rakennusviemäri on vähintään DN 100.

{{ui:Mitoita viemärit}} tekee jokaisesta mallin jätevesiviemäristä, joka on liian pieni kalustoyksiköilleen, sen tarvitsemansa koon yhtenä vaiheena, jonka voit kumota. Viemäri, joka on piirretty suuremmaksi kuin tarvitaan, jätetään ennalleen. Kun viemäri kuljettaa enemmän kuin sen putken suurin koko voi kuljettaa sen kaltevuudella, BimCraft kertoo siitä: anna sille jyrkempi kaltevuus tai toinen putki.

:::note
Taulukot ovat vaakasuorille viemäreille. Pystylinjoja, tuuletuksia ja hulevesiviemäreitä ei mitoiteta täällä: tarkista ne ja koko suunnitelma projektiin sovellettavaa säännöstöä vasten.
:::

## Venttiilit

1. Valitse {{ui:Valve}} ja laji: sulku-, pallo-, kuristus- tai takaiskuventtiili.
2. Napsauta putkea, johon se menee. Putki katkaistaan sen ympäriltä ja venttiili liitetään molempiin päihin.

Linjan ominaisuudet luettelevat sen venttiilit, ja jokaisen vieressä on {{ui:Remove}}.

Lisää venttiililajeja, suodatin, kanavien pellit, omat putkimääritykset ja valmistajien perheet: katso [Putkimääritykset, venttiilit, pellit ja valmistajien perheet](topic:pipe-specs).

## Muuta linjaa

Valitse mikä tahansa linjan osa pohjakuvasta tai 3D-näkymästä. Ominaisuuksissa:

- **Järjestelmä**, **Materiaali**, **Luokka** ja **Koko** (putket), tai **Muoto**, **Leveys** ja **Korkeus** (kanavat).
- **Korkeus tasosta** siirtää koko linjaa ylös tai alas.
- **Eristys**: sen paksuus, säilytetään vapaatilatarkistusta ja aukkoluetteloa varten (sitä ei piirretä): katso [Tarkista putket ja kanavat rakenteen suhteen](topic:mep-against-structure).
- Teräsputki: **Leikkaa putkiosiksi**: katso [Teräsputkien putkiosat ja putkiosa-arkit](topic:pipe-spools).
- **Kaltevuus** (putket).
- **Virtaus** kohdassa {{ui:Mitoita}}: putkille pienin koko, joka pitää veden nopeuden 8 ft/s (2.4 m/s), tai 5 ft/s (1.5 m/s) lämpimälle vedelle; 3 m/s brasilialaiselle PVC-vesiputkelle (NBR 5626). Kanaville linjan piirretyn kanavan nopeus ja kitkaluku. Viemärit mitoitetaan kalustoyksiköillä: katso alla **Mitoita viemärit kalustoyksiköillä**.

Jokainen muutos on yksi {{ui:Undo}}-askel. {{key:Delete}} poistaa koko linjan.

## Pohjakuvat

- Alle 150 mm (noin 6 in.) putket piirretään yhtenä viivana keskiviivalle, suuremmat putket ja kaikki kanavat kahtena viivana leveytensä mukaan.
- Jokaisella järjestelmällä on oma värinsä; pohjakuvan PDF tulostaa ne mustina.
- Jokainen linja on nimetty kokonsa ja järjestelmänsä mukaan (esimerkiksi `2" CW` tai `16×10 SA`).
- Pohjakuvan näkymäalue päättää, mitkä linjat se näyttää, ja {{ui:Näytetään tässä pohjakuvassa}} voi jättää pois **Putket** tai **Kanavat**: katso [Näkymät, näkymäalueet ja omat arkit](topic:views-and-sheets).

## Luettelot ja määrälaskenta

{{ui:Luettelot}}-paneeli lisää **Putket** (järjestelmän, materiaalin ja koon mukaan, pituuksineen), **Kanavat** (järjestelmän, muodon ja koon mukaan, pituuksineen ja ulkopinta-alaan) sekä **Liitososat ja venttiilit** (lajin ja koon mukaan, laskettuna). Napsauta riviä valitaksesi, mitä se luettelee; {{ui:Lataa CSV}} lataa sen.

{{ui:Määrälaskenta}} vie linjat TakeoffCraft-ohjelmaan: putket ja kanavat kokonsa mukaan pohjakuvaan piirrettyinä linjoina (kaltevat viemärit mitataan kaltevuutensa pitkin), liitososat ja venttiilit lasketaan siellä, missä ne ovat: katso [Lähetä mallin määrät TakeoffCraft-ohjelmaan](topic:takeoff). Nousujohtoja ei oteta tähän taulukkoon, koska pohjakuva ei voi mitata niitä; Putket-luettelossa on niiden pituus.

## IFC-tiedostossa

Jokainen linja on kokoonpano, joka pitää sisällään sen osat: putki- ja kanavasegmentit, liitososat ja venttiilit, joista jokaisella on tyyppi, materiaali, järjestelmänsä väri ja portit. Toisiinsa osuvat portit ovat yhdistettyjä, ja jokainen osa kuuluu jakeluun järjestelmäänsä (IFC2X3-tiedostot saavat samat virtaussegmentteinä, liitososina ja ohjaimina järjestelmässä). Muut ohjelmat, jotka lukevat IFC-järjestelmiä, näkevät yhden yhdistetyn linjan järjestelmää kohti. Linjan oma määritelmä säilytetään sen mukana, joten BimCraft tekee sen uudelleen samalla tavalla, kun muutat sitä.
