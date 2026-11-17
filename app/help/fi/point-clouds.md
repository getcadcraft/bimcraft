---
title: Näytä pistepilvi mallin rinnalla
summary: Avaa laserskannaus (LAS, LAZ, E57, PLY, PCD, PTX, PTS tai XYZ) 3D-näkymässä yksinään tai IFC-mallin kanssa, väritä se, leikkaa siitä ohut viipale, mittaa sen pisteisiin ja vie se piirto-ohjelmaan toteutuneen tilan linjojen jäljittämistä varten.
keywords: pistepilvi, laserskannaus, skannaus, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, toteutunut, toteutunut tila, mittaus, rekisteröinti, viipale, pohjakuvaleikkaus, tartunta, mittaa, jäljitä, skannauksesta BIM:iin
from: d0a3e740
---

## Mitä teet

Katso rakennuksen laserskannausta mallinsa rinnalla: tarkista, että rakennettu vastaa suunnitelmaa, mittaa skannattujen pisteiden välillä ja leikkaa ohut viipale, josta luetaan seinät, ovet ja pilarit.

## Vaiheet

1. Avaa pilvi: käytä {{ui:Avoin}}-toimintoa `.las`-, `.laz`-, `.e57`-, `.ply`-, `.pcd`-, `.ptx`-, `.pts`- tai `.xyz`-tiedostolle tai pudota tiedosto sivulle (katso aihe pistepilviformaateista: mitä kukin tuo mukanaan ja mitä viedä skannerin omasta ohjelmistosta). Kun malli on auki, pilvi liittyy malliin 3D-näkymässä. Pilven avaaminen ei koskaan sulje mallia tai sen tallentamattomia muutoksia. Ilman mallia pilvi avautuu itsenäisesti.
2. Pilvipalkki ilmestyy työkalurivin alle. Siinä kerrotaan, kuinka monta pistettä näkyy ja kuinka monta tiedostossa on.
3. Valitse {{ui:Väritys}}: tiedoston omat värit (jos skanneri tallensi ne), {{ui:Korkeus}}, {{ui:Intensiteetti}}, {{ui:Luokka}} (LiDAR-luokat, kuten maa, kasvillisuus ja rakennus) tai {{ui:Yksi väri}}. {{ui:Koko}} suurentaa tai pienentää pisteitä.
4. Napsauta {{ui:Viipale}}-kohdassa {{ui:Pohjakuva}}, jolloin säilyy vain ohut kaista 1.2 m alimman pisteen yläpuolella, ylhäältä katsottuna: seinät, oviaukot ja pilarit luetaan kuin pohjakuva. {{ui:Edestä}} ja {{ui:Sivu}} leikkaavat pystysuoria kaistoja julkisivuja ja leikkauksia varten. Siirrä kaistaa kohdalla {{ui:Kohdassa}} ja muuta {{ui:Paksuus}} (metreinä). {{ui:Pois}} näyttää koko pilven uudelleen.
5. Napsauta työkalurivillä {{ui:Mittaa}}. Osoitin tarttuu pilven pisteisiin (kenttä kertoo "pistepilvi"), joten voit mitata seinältä seinälle viipaleessa tai mallin elementistä skannaukseen. Mallin kulma tai reuna, joka on ulottuvilla, voittaa aina.
6. Kun on {{ui:Mittaa}} › {{ui:Sijainti}}, pilven piste antaa leveysasteen ja pituusasteen pilven omasta koordinaatistosta, kun tiedosto nimeää sellaisen.
7. {{ui:Piilota}} piilottaa pilven hetkeksi; {{ui:Poista}} vie sen pois. {{ui:Näytä}} › {{ui:Pistepilvi}} piilottaa tai näyttää palkin.

## Minne pilvi menee

{{ui:Sijoita}}-kohta palkissa kertoo, miten pilvi asettuu malliin:

- **Mallikoordinaatit**: pilven luvut ovat mallin omia (skannaus rekisteröity suunnitelman koordinaatteihin).
- **Karttakoordinaatit**: mallissa on karttamuunnos (IfcMapConversion) ja pilvi on samassa projisoidussa järjestelmässä: pilvi sijoitetaan sen kautta. Jos molemmat nimeävät eri järjestelmät, tilarivi kertoo sen.
- **Keskitetty malliin**: kun kumpikaan ei sijoita pilveä lähelle mallia, sen keskikohta asetetaan mallin keskikohtaan ja alin piste mallin lattiatasolle. Valitse toinen vaihtoehto ohittaaksesi tämän.

Kun tiedosto ei kerro yksiköitään, BimCraft lukee metrit ja tarjoaa palkissa {{ui:Yksiköt}}-valinnan.

## Jäljitä toteutuneen tilan linjat

Napsauta {{ui:Jäljitä CadCraftissa}}, niin pilvi viedään piirto-ohjelmaan uudessa välilehdessä. Se avautuu piirustuksen alle, missä viipale ja kohteen tartunta auttavat piirtämään seinät skannauksen päälle. Katso CadCraftin aihe pistepilvistä.

## Kuinka monta pistettä

Skannauksessa voi olla satoja miljoonia pisteitä. BimCraft lukee jokaisen pisteen kerran ja pitää tasaisen osuuden niistä piirrettäväksi: {{ui:Näytä}} palkissa asettaa määrän (1, 2, 5 tai 10 miljoonaa). Enemmän pisteitä vaatii enemmän muistia ja nopeamman näytönohjaimen. LiDAR-luokkien määrät lasketaan tiedoston kaikista pisteistä.

:::note
Tiedostot luetaan tällä tietokoneella; mitään ei ladata. LAS 1.0–1.4 ja LAZ luetaan (LAZ-tiedostot enintään 1 GB, pidetään muistissa lukemisen ajan); E57-tiedostot enintään 6 miljoonaa pistettä ja 512 MB toistaiseksi (suuremmat skannaukset: vie LAS tai LAZ); PLY, PCD ja PTX kokonaan; tekstipilvet ovat `x y z`, ja värisarakkeet (`r g b`) ja intensiteettisarakkeet ovat mukana, kun ne ovat olemassa.
:::

## Useita skannauksia

Eri paikoista otetut skannaukset voi rekisteröidä yhteiseen koordinaatistoon, hienosäätää ICP:llä ja viedä yhtenä LAS- tai E57-tiedostona: katso [Rekisteröi useita skannauksia yhdeksi](topic:register-scans).
