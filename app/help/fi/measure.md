---
title: Mittaa etäisyydet, pinta-alat ja sijainnit 3D-mallissa
summary: Mittaa etäisyys kahden IFC-mallin pisteen välillä tarttumalla kulmiin ja reunoihin, lue ero X-, Y- ja Z-suunnassa ja mittaa tasaisen pinnan pinta-ala.
keywords: mittaa, mittaus, etäisyys, pituus, mitoitus, pinta-ala, pinnan ala, tartunta, kulma, reuna, mittanauha, viivain, selkeys, sijainti, leveysaste, pituusaste, lat long, koordinaatit, georeferointi, karttamuunnos, EPSG, maastomittaus, itä, pohjoinen, WGS 84, datum
from: 5f430bba
---

## Mitä teet

Tarkista selkeys, seinän pituus tai pinnan koko suoraan mallista avaamatta suunnitteluohjelmaa.

## Vaiheet

1. Avaa IFC-malli.
2. Klikkaa työkalurivin {{ui:Mittaa}}-painiketta tai paina {{key:M}}. Näytön alareunaan avautuu palkki.
3. **Etäisyys:** kun {{ui:Etäisyys}} on valittu, klikkaa ensimmäinen piste ja sitten toinen. Lähellä kulmaa osoitin tarttuu siihen, lähellä reunaa reunaan. Osoittimen vieressä oleva pieni teksti kertoo, mikä. Jokainen klikkauspari tekee yhden mittauksen.
4. **Pinnan pinta-ala:** valitse {{ui:Pinnan ala}} ja klikkaa pintaa. Koko tasainen pinta syttyy, ja sen pinta-ala näkyy.
5. **Suorat viivat:** pidä {{key:Shift}} pohjassa valitessasi toista pistettä, tai paina palkista {{ui:Suora}} pitääksesi viivan suorana. Viiva kulkee sen yhden akselin suuntaisesti, jota osoitin lähimpänä (ylänäkymässä pohjakuvan X tai Y, muissa näkymissä X, Y tai Z). Osoittimen teksti sanoo ”suora akselin suuntaan”. {{key:M}} aloittaa ja lopettaa edelleen mittaamisen.
6. Klikkaa {{ui:Tyhjennä}} poistaaksesi mittaukset tai {{ui:Valmis}} (tai {{key:Esc}}) lopettaaksesi mittaamisen.

## Mitä pitäisi näkyä

- Viiva kahden pisteen välillä ja sen pituus viivan päällä sekä palkissa pituus ja se, kuinka pitkälle se kulkee X-, Y- ja Z-suunnassa (mallin akselit, Z ylöspäin), kaikki työkalurivillä valitussa {{ui:Yksiköt}}-yksikössä.
- Pinnan pinta-ala neliömetreinä, pinnalla ja palkissa.
- Tekstit pysyvät mittauksissaan, kun kiertät, panoroit ja zoomaat.
- Mittauksen aikana klikkaukset eivät valitse elementtejä. Leikkaustaso tai -laatikko leikkaa edelleen mallin, ja voit mitata sen, mitä se näyttää, leikkauspinnat mukaan lukien.

## Missä piste on maapallolla

Klikkaa mittauspalkista {{ui:Sijainti}} ja klikkaa sitten pistettä mallissa (se tarttuu kulmiin ja reunoihin kuten etäisyyksissä). Palkki näyttää:

- **leveys- ja pituusasteen** desimaaliasteina sekä asteina, minuutteina ja sekunteina, WGS 84 -järjestelmässä alussa;
- **karttakoordinaatit** (itä- ja pohjoiskoordinaatit, kirjoitettuina työkalurivillä valitussa {{ui:Yksiköt}}-yksikössä) mallin omassa karttajärjestelmässä, esimerkiksi `EPSG:28356`;
- **korkeuden** ja pystysuuntaisen datumin, jonka tiedosto nimeää, sekä tiedoston **oman datumin** (esimerkiksi GDA94).

{{ui:Copy}} vie kaiken leikepöydälle yhdelle riville. Vaihda järjestelmä, jossa leveys- ja pituusaste ilmoitetaan, kohdassa {{ui:Asetukset}} › {{ui:BimCraft}} › {{ui:Sijainti}}: WGS 84 (kuten GPS ja verkkokartat), tiedoston oma datum tai toinen yleinen, kuten ETRS89 tai NAD83.

Tämä vaatii georeferoidun mallin: sellaisen, joka on viety karttakoordinaateilla (karttamuunnos projisoituun järjestelmään, jolla on EPSG-koodi). Malli, jolla on vain kohteen leveys- ja pituusaste, saa likimääräisen sijainnin, joka lasketaan kohteen pisteestä ja sen todellisesta pohjoisesta, ja palkki kertoo sen. Kun useita malleja on auki, jokainen piste käyttää oman mallinsa georeferointia.

:::note
Siirtyminen datumien välillä (esimerkiksi GDA94:stä WGS 84:ään) tehdään ilman ruudukkotiedostoja, joten se on tarkka muutamaan metriin. Tilarivi kertoo tarkkuuden. Karttakoordinaatit itsessään ovat tarkkoja.
:::

## Yleisiä virheitä

- **”…ei ole georeferointia”.** Tiedostossa ei ole karttamuunnosta eikä kohteen leveys- ja pituusastetta. Vie se uudelleen koordinaattijärjestelmä asetettuna (jaetut koordinaatit tai mittauspiste suunnitteluohjelmassa).
- **Karttakoordinaatit mutta ei leveys- ja pituusastetta.** Tiedosto nimeää karttajärjestelmänsä ilman EPSG-koodia tai koodilla, jota ei ole listassa. Tilarivi kertoo, mikä.

- **Piste osuu pintaan, ei kulmaan.** Tarttuminen katsoo osoittimen alla olevaa elementtiä. Siirry lähemmäs kulmaa tai zoomaa sisään.
- **Pinta-ala on pienempi kuin odotettiin.** Aukot jätetään pois, ja taittuva pinta on useita pintoja: klikkaa jokaista.
- **{{key:Esc}} lopetti mittaamisen.** Ensimmäinen {{key:Esc}} pudottaa keskeneräisen etäisyyden, toinen lopettaa.

## Seuraavaksi

- [Leikkaa IFC-malli leikkaustasolla](topic:section-plane)
- [Piilota, eristä ja tee elementit läpinäkyviksi](topic:hide-and-isolate)
