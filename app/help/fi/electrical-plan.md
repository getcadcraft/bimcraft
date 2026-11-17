---
title: Sähkösuunnitelma
summary: Sijoita pistorasiat, kytkimet, valaisimet, anturit, liitosrasiat ja keskukset pohjakuvaan samoilla symboleilla kuin CadCraft-ohjelman Sähkö-lisäosa, yhdistä kytkimet valaisimiin, joita ne ohjaavat, ja luettele laitteet ja virtapiirit luetteloihin.
keywords: sähkö, sähkösuunnitelma, pistorasia, pistoke, kaksoispistorasia, kytkin, kolmiasentokytkin, himmennin, valaisin, kattovalaisin, upotettu valaisin, alasvalo, liiketunnistin, liitosrasia, keskus, jakokeskus, virtapiiri, kuorma, watti, ampeeri, kytkinjohto, laiteluettelo, keskusluettelo
from: f7de1947
---

## Mitä teet

Piirrä talon sähkösuunnitelma malliin: pistorasiat, kytkimet ja keskukset seinille, valaisimet ja anturit kattoon. Jokainen laite on IFC-tiedostossa oikea sähköelementti, jolla on tunnus, virtapiiri ja teho, ja kytkimet muistavat valaisimet, joita ne ohjaavat.

## Sijoita laitteet

1. Valitse kerros, avaa {{ui:Build}} ja valitse {{ui:Electrical}}.
2. Valitse laite: pistorasiat (sähkö, data, puhelin, audio-video), kytkimet ja anturit (myös termostaatti ja ajastin), valaisimet, ilmaisimet ja hälyttimet, liitosrasia, keskus tai alakeskus.
3. Kirjoita **Virtapiiri**, jos tiedät sen (mikä tahansa nimi: 1, 2, A-3). Jätä **Asennuskorkeus** tyhjäksi, jolloin käytetään kyseisen laitteen tavanomaista korkeutta.
4. Napsauta pohjakuvaa. Pistorasiat, kytkimet ja keskukset sijoitetaan lähimmän seinän pintaan huoneeseen päin. Valaisimet, anturit ja liitosrasiat sijoitetaan kattoon siihen kohtaan, johon napsautat.

Laitteet tunnistetaan sijoituksen yhteydessä: **R** pistorasioille, **S** kytkimille, **L** valaisimille, **M** liiketunnistimille, **J** liitosrasioille ja **P** keskuksille. Seinällä olevat laitteet liikkuvat seinän mukana, kun siirrät seinää.

Kuvien avulla selaaminen onnistuu avaamalla **Symbolipaletti** kohdasta {{ui:Build}}. Siellä laitteen voi etsiä nimellä, merkitä käytetyt tähdellä ja sijoittaa yhdellä napsautuksella: katso [Symbolipaletti](topic:symbol-palette).

## Yhdistä kytkimet valaisimiin

1. Valitse kytkin (tai liiketunnistin) ja napsauta **Yhdistä valot** kohdasta **Ominaisuudet**.
2. Napsauta jokaista valaisinta, jonka kytkin sytyttää. Napsauta yhdistettyä valaisinta uudelleen, jolloin yhteys poistuu.
3. Paina {{key:Enter}} tai napsauta **Valmis**.

Pohjakuvaan piirtyy katkoviivakaari kytkimestä jokaiseen sen valaisimeen. Valaisimen **Ominaisuudet** näyttää, mitkä kytkimet sitä ohjaavat.

## Laitteen huone

Jokainen laite tietää huoneen, jossa se on. Seinällä oleva laite kuuluu huoneeseen, jonka seinän pintaan se on sijoitettu. Kattolaite kuuluu huoneeseen, jonka yläpuolella se on. **Ominaisuudet** näyttää kohdan **Huone**, ja **Sähkölaitteet**-luettelossa on **Huone**-sarake (numero ja nimi, esimerkiksi 101 Keittiö).

Tieto pidetään ajan tasalla. Kun nimeät huoneen uudelleen tai numeroit sen uudelleen, siirrät laitetta tai siirrät seinää, huone päivittyy samassa vaiheessa. Laite rakennuksen ulkopinnalla tai tilassa, joka ei ole huone, ilmoittaa, ettei se ole huoneessa.

Huone kirjoitetaan myös tiedostoon laitteen ominaisuusjoukkoon `CadCraft_Location` (Room, RoomNumber, RoomName). Siksi Etsi-toiminto, Väritys ominaisuuden mukaan ja tunnisteluettelo voivat käyttää sitä, ja myös toinen ohjelma voi. Pohjakuvasymbolit ja symboliin linkitetyt elementit saavat saman ominaisuusjoukon: katso [Symbolipaletti](topic:symbol-palette).

## Anna avustajan sijoittaa laitteet

Kun avustaja on yhdistetty (Asetukset › Avustajat, muokkaus sallittuna), laitteita voi pyytää sanoin: "lisää kaksoispistorasia 2 m välein olohuoneen seinille, 300 mm korkeuteen, virtapiiriin 3", tai "lisää kattovalaisin kytkimineen oven viereen". Avustaja käyttää viittä työkalua: `devices_add`, `device_change`, `lights_set`, `devices_delete` ja `devices_list`. Ne luovat samat laitteet kuin Sähkö-työkalu, samoille seinille ja samoilla tunnisteilla, virtapiireillä, tehoilla ja korkeuksilla. Jokainen kutsu on yksi kumottava vaihe.

Laitteelle ei koskaan anneta lajia, jota Sähkö-työkalussa ei ole: tuntematon laji hylätään ja avustajalle annetaan lajiluettelo. Pistorasian tai kytkimen on oltava enintään 600 mm seinän pinnasta, kuten napsautuksella. Muuten kutsu hylätään eikä mitään sijoiteta. Oletuskorkeudet ovat millimetreinä: 300 pistorasioille ja 1100 kytkimille. Kattolaite roikkuu katosta.

## Muokkaa ja luettele laitteet

Valitse laite muuttaaksesi sen tunnistetta, virtapiiriä, tehoa (wattia) ja asennuskorkeutta. Valitse useita, jolloin ne kaikki siirtyvät samaan virtapiiriin kerralla. Poista laite painamalla {{key:Delete}}. Poistettu valaisin poistetaan kytkimiltään.

Kohdassa {{ui:Schedules}} valitse **Sähkölaitteet**, jolloin näet jokaisen laitteen kerroksen, virtapiirin, tehon, korkeuden ja valaisimet, joita kukin kytkin ohjaa. Valitse **Virtapiirit**, jolloin näet kunkin virtapiirin laitteet, kokonaistehon ja virran. Molemmat ovat myös piirustussarjan luettelosivulla: katso [Julkisivut, leikkaukset ja arkit](topic:sheets).

:::note
Asennuskorkeudet ja tehot ovat oletusarvoja (pistorasia 16" ylös ja 200 W, kytkin 48", kattovalaisin 60 W), eivät suunnittelua. Sähkösuunnittelija tai insinööri mitoittaa virtapiirit ja tarkistaa määräykset.
:::

:::tip
Symbolit ovat samat, joita CadCraft-ohjelman Sähkö-lisäosa piirtää asennuspiirustuksiin, joten kummankin ohjelman suunnitelma luetaan samalla tavalla.
:::
