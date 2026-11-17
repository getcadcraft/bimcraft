---
title: Tarkasta malli VR-laseilla
summary: Kävele IFC-mallissa täysikokoisena VR-laseilla: liiku, käänny, mittaa, leikkaa auki, aseta BCF-havaintoja kuvan kanssa, katso se pöytämallina ja tapaa reaaliaikaisen istunnon muut.
keywords: vr, virtuaalitodellisuus, lasit, webxr, xr, immersiivinen, quest, oculus, vive, index, pico, kävele läpi, kävelykierros, teleportti, suunnittelun tarkastus, koordinaatio, tarkastus, mittaa, leikkaus, havainto, havainnot, bcf, pöytämalli, mittakaavamalli, läsnäolo, avatarit, live, yhdessä
from: 8994b36d
---

{{ui:VR}} työkalurivillä siirtää katselijan malliin VR-laseilla täysikokoisena. Katselija seisoo siinä, missä 3D-näkymän kamera on, lattialla sen alapuolella, samaan suuntaan. Näkymä vastaa 3D-näkymää: piilotetut kerrokset, elementit ja mallit pysyvät piilossa, ja maalatut materiaalit tulevat mukaan. Mitään ei ladata: selain piirtää mallin tällä tietokoneella (tai lasien omassa selaimessa).

## Mitä tarvitaan

- VR-lasit, joita selain voi ohjata (WebXR): itsenäisten lasien oma selain tai Chrome tai Edge PC:llä, johon lasit on kytketty.
- IFC-malli auki suojatulla sivulla (https), kuten tällä sivustolla.

Kun laseja ei ole, {{ui:VR}} on harmaana ja kertoo syyn.

## Aloitus

1. Aseta 3D-näkymä siihen, mistä haluat aloittaa: huoneeseen tai ulkona katsomaan rakennusta.
2. Napsauta työkalurivin {{ui:VR}}-painiketta.
3. Aseta lasit päähän.

Valikko on vasemman käden selässä. Osoita sitä oikealla ohjaimella ja vedä liipaisinta valitaksesi painikkeen. (Kun käytössä on vain yksi käsi, valikko leijuu siinä, mihin aloitit.)

## Liiku

- **Hyppy:** kohdassa {{ui:Move}} osoita lattiaa ja vedä liipaisinta; hyppy laskeutuu siihen. Tai työnnä tikkua eteenpäin tähdätäksesi ja päästä irti hypätäksesi. Voit laskeutua vain lattioille, laatoille ja maalle (ylöspäin osoittaville pinnoille), et koskaan seinälle.
- **Kääntyminen:** työnnä tikkua vasemmalle tai oikealle; käännytään 30° kerrallaan.
- **Kävely:** pelialueella kävellään vain.

## Mittaa

Valitse {{ui:Measure}} ja vedä liipaisinta kahdessa pisteessä. Etäisyys näkyy niiden välillä metreinä. Piste lähellä nurkkaa tarttuu nurkkaan.

## Leikkaa auki

Valitse {{ui:Section}} ja vedä liipaisinta pintaan:

- seinällä (tai millä tahansa, joka ei ole lattia): kaikki katselijan ja pinnan välissä oleva leikataan pois, jotta näkee sisään. Tämä toimii parhaiten ulkoa tai huoneen poikki;
- lattialla ylhäältä: pohjakuvan leikkaus 1,2 m tuon lattian yläpuolella, jotta seinien alaosa näkyy.

{{ui:Clear}} poistaa leikkauksen ja mittaukset. Jos [leikkaustaso](topic:section-plane) leikkaa mallin, kun aloitat, lasit alkavat sen kanssa.

## Aseta havainto

Valitse {{ui:Issue}} ja vedä liipaisinta kohtaan, jossa ongelma on. Numeroitu neula merkitsee sen, ja havainto menee {{ui:Issues}}-välilehdelle BCF-aiheena, mukanaan kuva siitä, mitä näit, ja kamera siinä, missä seisoit, mallin omissa koordinaateissa. Tallenna havainnot muiden [havaintojen](topic:issues-bcf) kanssa BCF-tiedostona; muut koordinaatiotyökalut avaavat ne samassa näkymässä.

Kommentin lisääminen havaintoon tapahtuu VR:stä poistumisen jälkeen, Havainnot-välilehdellä: kirjoittaminen lasien sisällä ei ole vielä toteutettu.

## Katso pöytämallina

{{ui:Table top}} pienentää mallin mahtumaan pöydälle edessä; kävele sen ympäri tai käännä sitä tikulla. {{ui:Full size}} palauttaa katselijan sinne, missä hän oli.

## Muiden kanssa, reaaliajassa

[Reaaliaikaisessa istunnossa](topic:work-live) kaikki VR:ssä näkevät toiset pään ja kaksi kättä omalla värillään, nimensä ja pisteen, johon kukin osoittaa. Kaikkien muokkaukset tulevat lasiin hetken kuluttua. Pöydän ääressä olevia ei vielä näytetä lasien sisällä.

## Lopeta

Valitse {{ui:Leave VR}} (tai ota lasit pois ja lopeta istunto siellä). 3D-näkymä näytöllä siirtyy sinne, missä pää oli.

:::note
Testattu lasisimulaattorilla, ei vielä jokaisella lasimallilla. Suuri malli voi saada lasit tökkimään: piilota ensin tarvitsemattomat kerrokset tai mallit ([piilota ja eristä](topic:hide-and-isolate)).
:::
