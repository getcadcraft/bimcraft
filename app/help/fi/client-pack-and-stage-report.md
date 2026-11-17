---
title: Asiakasaineisto, vaiheraportit ja vaihtoehtojen vertailu
summary: Tee mallista asiakasaineisto tai vaiheraportti: massoitteluvaihtoehdot vertailtuna pinta-alan ja kustannusten mukaan, kerrosalat, piirustukset revisioineen ja julkaisuhistoria. Jokainen luku säilyttää elementit, joiden takana se on.
keywords: asiakasaineisto, esitys, vaiheraportti, raportti, vaihtoehtovertailu, vaihtoehdot, vertaa vaihtoehtoja, pinta-ala ja kustannus, kustannus vaihtoehtoa kohden, ei hintaa, massoittelu, kerrosalat, piirustusluettelo, julkaisuhistoria, luvut, linkitetyt luvut
from: f6679bf5
---

## Mitä teet

Tee asiakasaineisto tai vaiheraportti mallista sellaisena kuin se nyt on, ja vertaa säilytettyjä massoitteluvaihtoehtoja rinnakkain pinta-alan ja kustannuksen mukaan.

## Vaiheet

1. Avaa vasemmasta paneelista **Asiakasaineisto ja vaiheraportti**.
2. Valitse asiakasaineiston tai vaiheraportin vierestä **Avaa Asiakirjoissa**. Asiakirja ilmestyy malliin liittyvään Asiakirjat-osioon, jossa voit muuttaa sen tekstiä.
3. Esikatselussa napsauta lukua valitaksesi sen takana olevat elementit.
4. Valitse **Kokoa aineisto**. Tallennetaan yksi zip-tiedosto: asiakirja PDF-tiedostona, kuva 3D-näkymästä ja `figures.csv`, joka luettelee jokaisen luvun elementteineen GlobalId-tunnisteilla.

## Kentät

Näitä voi käyttää missä tahansa asiakirjassa.

| Kenttä | Mitä se tulostaa |
|---|---|
| `{{stage}}` | Projektin vaihe piirustustiedoista. |
| `{{options}}` | Säilytetyt massoitteluvaihtoehdot rinnakkain: kerrosluvut, korkeus, pohjapinta-ala, bruttoala, vaipan ala ja kustannus. |
| `{{areas}}` | Kerrosala tasoittain huoneista. |
| `{{sheets}}` | Arkit revisioineen, jossa kukin on, ja milloin se julkaistiin viimeksi. |
| `{{issues}}` | Julkaisuhistoria ja piirustusten muutosloki. |
| `{{changes}}` | Mitä on muuttunut viimeisen julkaisun jälkeen, arkki kerrallaan. |

## Miten vaihtoehdot hinnoitellaan

Kustannus tulee vain projektisi hintataulukosta (Energia/Kustannus, 5D-kustannus). Mitään ei arvioida puolestasi.

- Hintarivi hinnoittelee vaihtoehdon vain, kun sen luokissa mainitaan `IfcBuildingElementProxy`.
- Kerrosalan hinnoittelee rivi, jonka sanat nimeävät vaihtoehdon käyttötarkoituksen, esimerkiksi toimisto. Ilman sellaista käytetään riviä, jossa on sanat bruttoala tai rakennusmassa. Rivi m²-yksikössä käyttää bruttoalaa. Rivi m³-yksikössä käyttää tilavuutta.
- Vaipan (kehän kertaa korkeus) hinnoittelee rivi, jossa on sana vaippa tai julkisivu.
- Vaihtoehto, jolla ei ole vastaavaa riviä, näyttää **Ei hintaa**. Kokonaissumma näytetään vain, kun jokaisella pyydetyllä osalla on hinta.

## Hyvä tietää

- Säilytä vaihtoehtoja **Säilytä vaihtoehtona** -toiminnolla huonetilaohjelman massoittelulistassa. Katso Massoitteluvaihtoehdot.
- PDF-tiedosto ei voi valita elementtejä. BimCraftin ulkopuolella `figures.csv` kuljettaa linkin jokaisesta luvusta sen elementteihin.

## Ei vielä toteutettu

- Arkkeja ja piirrettyjä näkymiä ei sijoiteta asiakirjaan. Aineisto sisältää vain kuvan 3D-näkymästä.
