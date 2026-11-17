---
title: Katso DWG- tai DXF-piirustus
summary: Avaa DWG tai DXF, liiku mallitilassa ja arkeilla, lue koordinaatit ja katso, mitä ei ole vielä piirretty.
keywords: dynaamiset lohkot, näkyvyystilat, dwg, dxf, cad, piirustus, 2d, näkymä, katselu, panoroi, zoomaa, mallitila, paperitila, asettelu, koordinaatit, avaa dwg
from: 4db3122a
---

## Mitä teet

Avaa CAD-piirustus, katso se 3D:nä tai 2D:nä, liiku sen ympärillä, vaihda mallitilan ja sen arkkien välillä ja lue koordinaatit. BimCraft näyttää DWG- ja DXF-piirustuksia; se ei muokkaa eikä tallenna niitä. Muuttaaksesi piirustusta napsauta {{ui:Edit in CadCraft}}; piirustus avautuu CadCraft-piirtosovelluksessa uudelle välilehdelle.

## Vaiheet

1. Napsauta {{ui:Choose a file}} tai pudota piirustus sivulle.
2. Valitse `.dwg`- tai `.dxf`-tiedosto.
3. Odota, kun tilarivi kertoo "Luetaan piirustusta…". Suuret piirustukset vievät muutaman sekunnin. Sen jälkeen tilarivi kertoo, kuinka kauan lukeminen kesti, "renderöidään…", kun ensimmäistä kuvaa piirretään, ja kuinka kauan se kesti.
4. Piirustus avautuu 3D:nä, joka on nopein tapa näyttää suuri piirustus (katso [Katso DWG- tai DXF-piirustus 3D:nä](topic:dwg-in-3d)). Napsauta {{ui:Model}} tasaista 2D-näkymää varten. Jos haluat avata piirustukset aina 2D:nä, aseta {{ui:Settings}} › {{ui:BimCraft}} › **Piirustukset avautuvat:** arvoon {{ui:Model (2D)}}. Piirustus, jossa mallitilassa ei ole mitään, tai selain, joka ei osaa näyttää 3D:tä, avautuu 2D:nä.
5. Katso välilehtiä piirustuksen yläpuolella: ensin {{ui:Model}}, sitten yksi välilehti arkkia kohden piirustuksen omassa järjestyksessä.
6. Napsauta arkkivälilehteä nähdäksesi arkin: paperin, jolla malli näkyy sen näkymäruuduissa.
7. Napsauta {{ui:Model}} palataksesi mallitilaan.
8. Vie osoitin piirustuksen päälle ja lue X- ja Y-koordinaatit nurkasta.

## Mitä pitäisi näkyä

- Piirustus sovitettuna ikkunaan. Värit seuraavat piirustusta; valkoiset viivat (väri 7) piirtyvät teeman väriin, ja vaaleat värit tummennetaan vaalealla teemalla, jotta ne pysyvät luettavina.
- Vasemmalla {{ui:Drawing}}-paneeli: tiedosto, koko, muoto (esimerkiksi "AutoCAD 2018 (AC1032)"), yksiköt, kohteiden ja tasojen määrät, arkkien määrä sekä linkitetyt piirustukset ja laitteet, kun niitä on.
- Vasemmalla {{ui:Layers}}-luettelo.
- Oikealla: miten liikkua, linkitetyt piirustukset ja kuvat sekä **Ei vielä piirretty**.

## Liikkuminen

:::mouse
| Tehtävä | Tee näin |
|---|---|
| Panoroi | Vedä millä tahansa hiiren painikkeella |
| Zoomaa | Vieritä rullaa; osoittimen alla oleva kohta pysyy paikallaan |
| Sovita | Kaksoisnapsauta, paina {{key:F}} tai napsauta {{ui:Fit}} |
:::

:::mac mouse
Kosketuslevyllä kahden sormen vierittäminen **zoomaa**, se ei panoroi. Myös nipistys zoomaa. Panoroi napsauttamalla ja vetämällä.
:::

:::touch
Panoroi vetämällä yhdellä sormella. Nipistyszoomaus ei ole vielä toteutettu piirustuksille: napauta {{ui:Fit}} nähdäksesi koko arkin ja zoomaa hiirellä tai kosketuslevyllä.
:::

## Dynaamiset lohkot

Dynaaminen lohko piirretään niin kuin piirustus sen näyttää: jokainen sijoitettu lohko siinä näkyvyystilassa, johon piirustus tallennettiin ("Plan" tai "Front", "Single bowl" tai "Double bowl"). Oikealla **Dynaamiset lohkot** luettelee jokaisen mallitilaan sijoitetun: kuinka monta on sijoitettu, mitä tiloja ne näyttävät ja kaikki lohkon tilat. Napsauta {{ui:3D}}-näkymässä sijoitettua lohkoa nähdäksesi Ominaisuudet-paneelissa **Dynaaminen lohko**, **Näytettävä tila** ja **Muut tilat**. BimCraft ei vaihda tiloja.

## Ei vielä piirretty

Joitakin kohdetyyppejä ei piirretä tässä versiossa. Ne lasketaan **Ei vielä piirretty** -kohdassa oikealla ("Nämä piirustuksen osat ohitetaan toistaiseksi, niitä ei arvata."), jotta näet, että jotain puuttuu. Viivat, murtoviivat, kaaret, ympyrät, ellipsit, splainit, viivoitukset ja täytöt, teksti ja monirivinen teksti, attribuutilliset lohkot, mitoitukset, johtoviivat ja monijohtoviivat, taulukot, kuvat ja näkymäruudut piirretään. 3D-pinnat, polyface-verkot ja monikulmioverkot piirretään reunoinaan ylhäältä katsottuna; siirry {{ui:3D}}-näkymään nähdäksesi ne pintoina.

Binäärinen DXF ei avaudu: BimCraft kertoo sen. Tallenna se uudelleen ASCII-DXF-muodossa tai DWG-muodossa siitä ohjelmasta, joka sen teki.

## Yleisimmät virheet

- **Piirustus näyttää tyhjältä.** Jotkin tasot voivat olla piirustuksessa itsessään pois päältä tai jäädytettyinä; ne ovat ilman rastia {{ui:Layers}}-luettelossa. Napsauta {{ui:All on}}. Jos tilarivi sanoo "*name* on tyhjä piirustus: siinä ei ole viivoja, tekstiä eikä lohkoja.", siinä ei ole mitään.
- **Arkki näyttää tyhjän kehyksen.** Arkki voi nojata linkitettyihin piirustuksiin. Katso [Etsi linkitetyt piirustukset ja kuvat](topic:dwg-linked-files).
- **Teksti näyttää hieman erilaiselta.** BimCraft piirtää tekstin kapealla sans-serif-fontilla, ei piirustuksen omilla fonteilla, joten teksti voi olla hieman leveämpi tai kapeampi kuin ohjelmassa, joka sen teki.
- **"*name* ei voitu lukea. Se voi olla vioittunut tai tallennettu muodossa, jota lukija ei vielä käsittele."** Sulkeissa oleva osa nimeää tiedoston muotokoodin. Tallenna piirustus sen tehneestä ohjelmasta vanhempana DWG-versiona tai DXF-muodossa ja yritä uudelleen.
- **Odotat mittaamista, piirtämistä tai muokkausta.** BimCraft vain katselee piirustuksia. Napsauta {{ui:Edit in CadCraft}} avataksesi saman tiedoston CadCraft-piirtosovelluksessa, jossa sitä muokataan ja jossa tallennetaan kopio DWG- tai DXF-muodossa. Alkuperäistä tiedostoa ei muuteta, ja linkitetyt piirustukset pysyvät BimCraftissa. Painike näkyy vain, kun CadCraft-sovellus on sinulle avoinna.

## Seuraavaksi

- [Katso DWG- tai DXF-piirustus 3D:nä](topic:dwg-in-3d)
- [Työskentele tasojen ja arkkien kanssa](topic:dwg-layers-sheets)
- [Tarkista piirustus tulostusnäkymässä](topic:print-view)
