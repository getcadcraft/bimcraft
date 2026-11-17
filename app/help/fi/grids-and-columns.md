---
title: Akselisto ja pilarit
summary: Sijoita akselilinjat numeroiduin ja kirjaimin varustetuin kuplin, väleittäin tai yksi kerrallaan, piirrä seinät ja pilarit niiden mukaan ja näe ne pohjakuvissa, julkisivuissa ja leikkauksissa.
keywords: akselisto, akselit, akseli, akselilinja, kupla, pilariakselisto, kantava akselisto, 1 2 3, A B C, pilari, pilarit, tolppa, tartunta, IfcGrid, IfcColumn
from: bf99a8f7
---

## Mitä teet

Aseta rakennus akselistoon ja piirrä sitten seinät ja sijoita pilarit sen viivojen mukaan.

## Sijoita koko akselisto

1. Ota {{ui:Piirrä}} käyttöön ja valitse {{ui:Koontiversio}} › {{ui:Akselisto}}.
2. Valitse {{ui:Sijoita akselisto…}}. Anna, montako **numeroitua viivaa** (1, 2, 3…) ja **kirjainviivaa** (A, B, C…) haluat ja kuinka kaukana toisistaan ne ovat. Kirjoita yksi väli tai useampi pilkulla erotettuna epätasaisille jänteille (esimerkiksi `20', 24', 20'`). {{ui:Viimeisten viivojen yli}} on se, kuinka pitkälle kukin viiva ulottuu toisen tyypin ulommaisten viivojen yli, ja {{ui:Kierretty (astetta)}} kiertää koko akselistoa.
3. Valitse {{ui:Sijoita}} ja napsauta kohtaa, johon ensimmäinen leikkauspiste (1 / A) tulee. Esikatselu seuraa osoitinta.

Numeroidut viivat kulkevat pohjakuvan läpi pystysuunnassa ja jakautuvat vaakasuunnassa; kirjainviivat kulkevat vaakasuunnassa ja jakautuvat pystysuunnassa. Kirjaimista jätetään pois I ja O, kuten piirustuksissa, joten niitä ei koskaan lueta numeroina 1 ja 0.

## Piirrä akselilinjat yksi kerrallaan

Kun {{ui:Akselisto}} on päällä, napsauta kohtaa, josta viiva alkaa, ja kohtaa, johon se päättyy. Viiva saa seuraavan tunnuksen samansuuntaisten viivojen joukosta (3:n jälkeen tulee 4; B:n jälkeen C). Lopeta painamalla {{key:Esc}}.

## Muuta akselilinjaa

Kun {{ui:Akselisto}} on päällä, valitse viiva napsauttamalla sitä. Kirjoita uusi {{ui:Tunnus}} ja paina {{key:Enter}}, tai napsauta {{ui:Poista tämä viiva}} (tai paina {{key:Delete}}). {{ui:Kuplat}} asettaa kuplat viivan molempiin päihin, alkuun tai loppuun tai ei mihinkään. Jokainen muutos on yksi vaihe: {{key:Mod+Z}} kumoaa sen.

## Piirrä akseliston mukaan

Työkalut {{ui:Seinä}} ja {{ui:Pilari}} sekä muut piirtotyökalut tarttuvat akselilinjoihin ja niiden leikkauskohtiin (tartuntamerkki on pieni ympyrä, jossa on risti).

**Pilarit:** valitse {{ui:Koontiversio}} › {{ui:Pilari}}, valitse muoto (suorakulmainen tai pyöreä), koko ja se, ulottuuko pilari **yläkerrokseen** vai kiinteään korkeuteen, ja napsauta. Valinta {{ui:Jokaiseen akselien leikkauspisteeseen}} sijoittaa pilarin jokaiseen leikkauspisteeseen, jossa sellaista ei vielä ole. Napsauta pilaria muuttaaksesi sen muotoa, kokoa tai korkeutta kohdassa {{ui:Ominaisuudet}}; {{key:Delete}} poistaa sen. Yläkerrokseen ulottuvat pilarit seuraavat sitä, kun sen korkeus muuttuu.

## Mitä pitäisi näkyä

- Akselisto jokaisen kerroksen pohjakuvassa, kuplat ja niiden tunnukset kunkin viivan päissä.
- Akselilinjat piirustusjoukossa: pohjakuvissa sekä julkisivuissa ja leikkauksissa siellä, missä viiva näkyy päädystä, kupla rakennuksen yläpuolella. Katso [Julkisivut, leikkaukset ja arkit](topic:sheets).
- IFC-tiedostossa: yksi akselisto rakennukselle (IfcGrid, numeroidut viivat yhdessä luettelossa ja kirjainviivat toisessa) sekä pilarit IfcColumn-muodossa koossaan, korkeudellaan ja määrinensä. Muut BIM-ohjelmat näyttävät molemmat.

:::note
Toisesta ohjelmasta tulleen tiedoston akselisto näytetään ja työkalut tarttuvat siihen, mutta sen viivoja ei voi muuttaa täällä.
:::
