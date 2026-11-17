---
title: Piirrä täysikokoisena, merkitse mittakaavan mukaan
summary: Rakennus piirretään aina täysikokoisena. Teksti, mitoitus, tunnisteet, huoneiden nimet, ruudukon kuplat ja symbolit mitoitetaan paperilla millimetreinä sellaisina kuin ne tulostetaan, ja ne säilyttävät kokonsa, kun piirustuksen mittakaava vaihtuu mittakaavasta 1:100 mittakaavaan 1:50.
keywords: merkintien mittakaava, merkintä, tekstin koko, tekstin korkeus, paperikorkeus, mitoitustekstin koko, tunnisteen koko, huoneen nimen koko, ruudukon kupla, symbolin koko, piirustuksen mittakaava, 1:50, 1:100, toimiston standardi, kirjoitus, piirrä mittakaavassa 1:1, täysi koko, arkin teksti
from: 94118788
---

## Mitä teet

Määrität kerran rakennukselle, kuinka korkeita piirustustesi kirjaimet ovat paperilla. Mallia et koskaan skaalaa etkä muuta tekstin kokoa mittakaavan mukaan: BimCraft laskee koon paperin korkeudesta ja piirustuksen mittakaavasta.

## Miten se toimii

- Malli on täysikokoinen. 10 m pitkä seinä on 10 000 mm pitkä jokaisessa mittakaavassa.
- Merkinnällä on **paperikorkeus**: isojen kirjainten korkeus tulostetulla arkilla millimetreinä.
- Mittakaavassa 1:100 2.5 mm teksti on 250 mm korkea mallissa; mittakaavassa 1:50 se on 125 mm. Paperilla se on 2.5 mm molemmissa tapauksissa.
- Pohjasymbolit (sähkö, LVI) piirretään paperimillimetreinä ja noudattavat samaa sääntöä.

## Vaiheet

1. Avaa projektiselain. Kohdassa {{ui:Arkit}} napsauta {{ui:Merkintöjen koot…}}.
2. Kirjoita korkeus millimetreinä niille tyypeille, jotka haluat asettaa: {{ui:Huomautukset ja tekstit}}, {{ui:Mittateksti}}, {{ui:Tunnisteet ja tasojen nimet}}, {{ui:Huoneiden nimet}}, {{ui:Ruudukon kuplien kirjaimet}}, {{ui:Näkymien otsikot arkeilla}} ja {{ui:Luettelon teksti}}. Tyhjä ruutu säilyttää BimCraftin oman koon, joka näkyy harmaana.
3. Napsauta {{ui:Tallenna}}. Se on yksi vaihe, jonka voit kumota.

Jokainen arkki, piirustussarja, pohjapiirustuksen PDF sekä julkisivut ja leikkaukset käyttävät näitä kokoja tästä eteenpäin. Mitoitusviivan ja sen tekstin välinen etäisyys, ruudukon kuplan koko ja luettelorivin korkeus kasvavat tekstin mukana.

## Pohjapiirros omalla mittakaavalla

Anna pohjapiirrokselle mittakaava sen näkymäalueessa ({{ui:Mittakaava}}; katso [Näkymät ja arkit](topic:views-and-sheets)). Silloin:

- näytöllä huoneiden nimet, tunnisteet, mitoitusteksti ja ruudukon kuplat piirretään tulostetussa koossaan mallia vastaan, joten näet, mitä arkki näyttää;
- pohjasymbolit ja niiden tunnisteet mitoitetaan kyseiselle mittakaavalle. Kun vaihdat mittakaavan arvosta 1:100 arvoon 1:50, ne ovat mallissa puolet pienempiä ja paperilla samankokoisia.

Pohjapiirros ilman omaa mittakaavaa säilyttää kiinteän näyttötekstinsä, ja sen symbolit mitoitetaan mittakaavalle 1:50 (1/4" = 1'-0" jalkoina ja tuumina), kuten ennenkin.

## Toimiston koot

Kun Default Policies -lisäosa on päällä, aseta toimiston korkeudet kohdassa Asetukset › Yleiset › Default Policies › {{ui:Merkintöjen koot paperilla}}. Uusi rakennus ottaa ne käyttöön, kun napsautat Luo. Rakennuksessa, jonka olet jo aloittanut, valintaikkunassa on {{ui:Käytä toimistoni kokoja}}. Katso [Default Policies](topic:default-policies).

## Määräyspaketin koot

Määräyspaketti voi antaa tekstikorkeudet, joita sen paikka vaatii (Building regulations -lisäosa, piirustuskäytännöt). Ota paketti käyttöön kohdassa Asetukset › Building regulations ja napsauta valintaikkunassa {{ui:Käytä määräyspaketin kokoja}}: ruudut täyttyvät, ja tarkistat ne ja tallennat. Paketin pisteinä antama koko on fontin koko, ja se muunnetaan kirjainkorkeudeksi, joten tarkista se. Mitään ei aseteta ennen tallennusta.

## Mitä pitäisi näkyä

- Sama tekstikorkeus millimetreinä arkilla mittakaavassa 1:100 ja arkilla mittakaavassa 1:50, vaikka pohjapiirros itse on mittakaavassa 1:50 kaksi kertaa suurempi.
- Koot kulkevat rakennuksen mukana: ne tallennetaan sen IFC-tiedostoon.

## Hyvä tietää

- BimCraftin omat koot ovat niitä, joita sen arkit ovat aina käyttäneet (noin 1.5 mm kirjainkorkeus mitoitustekstille). Ne eivät ole piirustusstandardi: aseta toimistosi koot.
- Korkeuden täytyy olla 0.5–50 mm.
- Piirustusotsikon teksti ja merkintäselitteet eivät kuulu tähän: niillä on omat kokonsa.
