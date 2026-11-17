---
title: Etsi elementit luokan, nimen tai ominaisuuden mukaan
summary: Etsi kaikki elementit, jotka täyttävät yhden tai useamman säännön – luokan, nimen, tyypin, kerroksen, materiaalin tai minkä tahansa ominaisuusarvon perusteella – valitse ne kaikki ja tallenna säännöt nimettynä hakujoukkona.
keywords: etsi, haku, suodatin, kysely, sääntö, hakujoukko, valintajoukko, tallennettu haku, ominaisuus, arvo, luokka, materiaali, valitse kaikki
from: 3d293bc2
---

## Mitä teet

Valitse kerralla kaikki yhtä lajia olevat elementit tai ne, joilla on yksi tietty arvo: kaikki ovet, kaikki kerroksen 2 seinät, kaikki elementit, joiden palonkestävyys on EI60, tai kaikki seinät, jotka maksavat enemmän kuin asetettu summa.

## Vaiheet

1. Avaa IFC-malli.
2. Avaa vasemmasta paneelista {{ui:Etsi}}.
3. Valitse ensimmäisessä säännössä ominaisuus (ensin elementin omat, kuten {{ui:Luokka}} ja {{ui:Kerros}}, sitten mallin ominaisuusjoukot), vertailutapa ja arvo. Arvokenttä ehdottaa mallin arvoja.
4. Tarkentaaksesi napsauta {{ui:Lisää sääntö}}. Valitse {{ui:Kaikki säännöt}}, jos kaikkien pitää täyttyä, tai {{ui:Mikä tahansa sääntö}}, jos riittää yksi.
5. Napsauta {{ui:Etsi}} tai paina {{key:Enter}} arvokentässä. Osumat valitaan.
6. Säilyttääksesi säännöt napsauta {{ui:Tallenna joukkona}}, kirjoita nimi ja napsauta sitä uudelleen. Myöhemmin haku tehdään napsauttamalla joukon nimeä.

## Mitä pitäisi näkyä

- Osumat valittuina 3D-näkymässä ja mallipuussa sekä {{ui:Ominaisuudet}} kertoo osumien määrän luokittain. Paina {{key:I}} näyttääksesi vain ne ja {{key:H}} piilottaaksesi ne.
- Sanat löytyvät välittämättä isoista ja pienistä kirjaimista. Luvut vertautuvat lukuina: "on suurempi kuin 1000" tarkoittaa arvoa, ei tekstiä.
- {{ui:on arvo}} ja {{ui:ei ole arvoa}} eivät tarvitse arvoa; ne löytävät täytetyt tai puuttuvat arvot.
- Tallennetut joukot pysyvät tässä selaimessa kaikille avaamillesi malleille.

## Yleisiä virheitä

- **Mitään ei löydy.** Säännön on vastattava arvoa, jonka malli voi täsmätä: katso arvokentän ehdotuksia.
- **Ominaisuus puuttuu luettelosta.** Tässä mallissa ei ole yhtään elementtiä, jolla olisi muoto ja tämä ominaisuus.

## Seuraavaksi

- [Väritä elementit ominaisuuden mukaan](topic:color-by-property)
- [Piilota, eristä ja tee elementit läpinäkyviksi](topic:hide-and-isolate)
