---
title: Koordinaatit BimCraft-ohjelmassa
summary: Missä työskentelet: osoittimen sijainti pohjakuvassa ja 3D-näkymässä, kerros jolla olet, projektin origo ja kohteen mittauspiste.
keywords: koordinaatit, missä olen, sijainti, osoitin, lukema, x y z, taso, kerros, projektin origo, origo, peruspiste, mittauspiste, kohde, karttakoordinaatit, itäkoordinaatit, pohjoiskoordinaatit, georeferointi, yksiköt, paikka
from: 84df5245
---

## Mitä teet

Näet yhdellä silmäyksellä, missä mallissa olet: mihin kerrokseen piirrät, kuinka kaukana osoitin on projektin origosta ja missä kohteen mittauspiste sijaitsee.

## Missä luvut näkyvät

- **3D-näkymän päällä** (alanurkassa, kuutiokuvan vieressä): siirrä osoitin mallin päälle. Ruutu näyttää kerroksen, jolla piste on, ja kuinka korkealla se on kyseisen kerroksen lattiasta, sitten sen **X, Y ja Z**. Tyhjän tilan kohdalla se lukee pisteen alimman kerroksen lattialla.
- **Pohjakuvan päällä** (alanurkassa, kun {{ui:Draw}} on päällä): kerros, jota pohjakuva näyttää, ja sen lattian korkeus sekä osoittimen **X ja Y**, kun osoitin on pohjakuvan päällä.
- Kun tiedostossa on karttamuunnos (se on viety karttakoordinaateilla), molemmat ruudut lisäävät kartan ruudukon **itäkoordinaatit ja pohjoiskoordinaatit** valitsemassasi yksikössä, joka on asetettu {{ui:Units}}-valikossa. Yksikkö kirjoitetaan aina lukujen viereen, ja jalat ja tuumat näkyvät desimaalijalkoina. Piirustus (DWG tai DXF) säilyttää omat yksikkönsä: sen osoitinlukema nimeää ne, eikä niitä koskaan muunneta.

Jokainen X, Y ja Z mitataan **projektin origosta** työkalurivillä valitussa {{ui:Units}}-yksikössä (jalat ja tuumat, tuumat, desimaalijalat, millimetrit, senttimetrit tai metrit). Positiivinen Y osoittaa mallin pohjoiseen, joka ei aina ole todellinen pohjoinen. Kartan itä- ja pohjoiskoordinaatit noudattavat samaa valintaa (jalat ja tuumat näkyvät desimaalijalkoina). Kun karttajärjestelmän oma yksikkö poikkeaa valitsemastasi, se nimetään sulkeissa lukujen jälkeen, esimerkiksi *(US survey feet)*, jotta mittausinsinööri näkee, missä yksikössä järjestelmä itse on kirjoitettu.

## Kaksi merkkiä

- **Projektin origo** (punainen ympyrä ristillä): piste 0, 0, 0, josta kaikki mallin koordinaatit mitataan.
- **Mittauspiste** (sininen ympyrä kolmiolla): kohteen vertailupiste, jolle sen leveyspiiri, pituuspiiri ja korkeus tai karttakoordinaatit on annettu. Osoita sitä 3D-näkymässä, niin näet, missä se on.

Kun kohde sijaitsee projektin origossa, kuten tässä piirretyssä uudessa rakennuksessa, yksi merkki näyttää molemmat. Piilota tai näytä merkit napsauttamalla kummankin ruudun tähtäinpainiketta. BimCraft muistaa valintasi tässä selaimessa.

## Mitä näet

- Luvut muuttuvat osoittimen liikkuessa, ja pohjakuvan ruutu nimeää kerroksen, jonka valitsit kerrosluettelosta.
- Merkit pysyvät paikallaan, kun kiertää, panoroit ja zoomaat.

:::tip
Pisteen leveys- ja pituuspiirin lukemiseksi käytä {{ui:Measure}} › {{ui:Location}}-kohtaa: katso [Mittaa etäisyydet, pinta-alat ja sijainnit 3D-mallissa](topic:measure).
:::

:::touch
Kosketusnäytöllä 3D-ruutu ei näytä mitään, ennen kuin käytät hiirtä tai kynää: sormi siirtää näkymää.
:::
