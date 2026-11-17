---
title: Mallinviivat ja malliteksti: piirretään mallissa, työtasolla
summary: Mallinviiva on viiva, murtoviiva tai kaari, joka on mallissa ja näkyy jokaisessa näkymässä, joka sen näkee. Malliteksti on 3D-kirjoitusta, jolla on todellinen syvyys. Molemmat piirretään työtasolle.
keywords: mallinviiva, malliteksti, 3D-teksti, kirjoitus, kyltti, opastus, viiva 3D:ssä, kaari, murtoviiva, työtaso, pursotettu teksti, fontti, syvyys, detaljiviiva, piirtoviiva, merkintä, IfcAnnotation
from: fc9cccb5
---

## Mitä tehdään

Piirrä viivoja ja kirjoituksia, jotka ovat osa mallia eivätkä yhtä näkymää.

## Vaiheet

1. Aseta ensin työtaso (ks. **Työtaso**). Vaakasuora taso piirretään pohjakuvaan, pystysuora taso Työtasonäkymässä.
2. Viivaa varten valitse **Mallinviiva** **Koontiversio**-valikosta ja valitse **Viiva**, **Murtoviiva** tai **Kaari (kolme pistettä)**:
   - viiva on kaksi napsautusta;
   - murtoviiva on napsautus jokaiselle pisteelle, sitten {{key:Enter}} tai kaksoisnapsautus. Napsautus ensimmäiseen pisteeseen sulkee sen;
   - kaari on kolme napsautusta: alku, piste jonka kautta se kulkee ja loppu.
3. Tekstiä varten valitse **Malliteksti**. Kirjoita sanat, aseta isojen kirjainten korkeus ja syvyys ja napsauta kohtaa, josta teksti alkaa (peruslinjan vasen pää).
4. Valitse viiva tai teksti, niin näet sen kohdassa **Ominaisuudet**. Tekstin sanoja, korkeutta ja syvyyttä voi muuttaa siellä. {{key:Delete}}-näppäin poistaa sen.

## Missä ne näkyvät

- Mallinviiva näkyy sen tason pohjakuvassa, 3D-näkymässä, julkisivu- ja leikkauspaneelissa sekä Työtasonäkymässä, kun se on työtasolla. Piirtoviiva (Merkitse, Viiva) kuuluu vain yhteen näkymään.
- Malliteksti on kiinteää geometriaa: se näkyy kaikkialla, missä malli näkyy, eli pohjakuvassa, 3D-näkymässä, julkisivuissa ja leikkauksissa sekä arkeilla.
- Mallinviivoja ei vielä piirretä tulostetuille arkeille. Malliteksti piirretään.

## Fontti

Malliteksti käyttää samaa fonttia kuin arkit ja PDF-tiedostot: Liberation Sans, SIL Open Font License -lisenssin alaisena. Fontista puuttuva kirjain piirretään kysymysmerkkinä, ja kerrotaan, mikä kirjain se on. Fontti on yksi ja paino on yksi. Kirjainten välit määräytyvät fontin omien leveyksien mukaan ilman pariväliä.

## IFC-tiedostossa

- Mallinviiva on IfcAnnotation, jonka objektityyppi on ModelLine. Sen muoto on 3D-käyrä: murtoviiva tai kaaren kohdalla rajattu ympyrä.
- Malliteksti on IfcBuildingElementProxy, jonka objektityyppi on ModelText. Sen muoto on yksi pursotettu kappale kullekin kirjainosalle, ja O:n ja B:n kaltaisten kirjainten reiät ovat mukana. Sen määrät ovat pinta-ala ja tilavuus (pinta-ala kerrottuna syvyydellä).

## Hyvä tietää

- Mikä tahansa koko tehdään pyydetyn mukaan. Hylätään vain pituudeltaan nolla oleva viiva, kaari, jonka kolme pistettä ovat samalla suoralla, tai teksti ilman kirjaimia, koska ei ole mitään luotavaa.
- Jokainen viiva sekä jokainen teksti ja sen muutos on yksi Kumoa-vaihe.
