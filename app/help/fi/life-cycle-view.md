---
title: Katso, mikä kuluu viidenkymmenen vuoden aikana
summary: Mallin ikkunat, ovet, pintakäsittelyt ja katto, niiden käyttöiät, vuodet, jolloin kukin uusitaan, sekä kustannus vuosittain ja sen nykyarvo, kun kirjoitat yksikkökohtaisen kustannuksen.
keywords: elinkaari, elinkaarinäkymä, käyttöikä, uusiminen, kunnossapito, kustannus, nykyarvo, diskonttaus, inflaatio, 50 vuotta, ikkunat, maali, katto, pintakäsittelyt, koko elinkaari
from: 1b849545
---

Vasemman paneelin {{ui:Elinkaarinäkymä}}-osio luettelee mallin kuluvat osat ja ajankohdan, jolloin ne uusitaan tarkasteluajanjakson (aluksi 50 vuotta) aikana. Malliin ei tehdä muutoksia.

## Näin luet sen

Jokaisesta osasta näkyy sen määrä (laskettu mallista: ikkunoiden ala, ulko- ja sisäovet, ulkoseinän pintakäsittely, sisämaali, lattian ja katon pintakäsittely, katon pohjapinta-ala, portaat), **käyttöikä vuosina** ja **kustannus yksikköä kohden**. Osa uusitaan käyttöiän kohdalla, kahdesti käyttöiän kohdalla ja niin edelleen, niin kauan kuin se on ennen tarkasteluajan loppua. Esimerkiksi 30 vuoden ikkuna 50 vuoden tarkastelussa uusitaan kerran, vuonna 30. Käyttöiät ovat tyypillisiä suunnitteluarvoja: muuta ne vastaamaan omia tuotteitasi ja ilmastoasi. Kustannusta ei oleteta; kirjoita kustannus nähdäksesi rahamäärän vuosittain, yhteensä ja nykyarvona. Lisää diskonttokorko ja inflaatiokorko, jos haluat ne mukaan.

{{ui:Tallenna aikataulu (CSV)}} kirjoittaa osat ja vuodet. Myös putket, kanavat, johdotus ja laitteet on listattu (katso alla).

## Putket, kanavat, johdotus ja laitteet

- **Putket ja kanavat** ovat jokaisen piirretyn osuuden metrimäärä. **Laitteet** (pumput, puhaltimet, venttiilit, päätteet, kiinteät varusteet, pistorasiat, kytkimet, keskukset ja muut Kohteet-välilehdellä seurattavat asiat) lasketaan lajeittain, ja kullakin lajilla on suunnitteluikä. Kohde, jonka oma *käyttöikä* on asetettu Kohteet-välilehdellä, on oma rivinsä sillä iällä. Jos siihen on merkitty asennuspäivä, se alkaa omasta iästään: 16 vuotta vanha pumppu, jonka käyttöikä on 10 vuotta, uusitaan heti ja sen jälkeen joka kymmenes vuosi.
- **Johdotus** on **arvio**: pohjapiirroksen etäisyys keskuksesta kunkin piirin laitteita pitkin, lähimmästä alkaen, kerrottuna 1,25:llä reitityksen vuoksi. Malli ei piirrä kaapelia, joten vertaa lukua omaan määrälaskentaasi.
- Käyttöiät ovat suunnitteluarvoja, jotka on tarkistettava, eivät lähde.

## Hiili kutakin uusintaa kohden

Ruksaa {{ui:Sisällytä kunkin korvauksen sisäänrakennettu hiili}}. Uusi ikkuna, ovi, portaat, katto, putki tai laite lasketaan sen mallin omien vastaavan lajin elementtien hiilipitoisuudella (Hiili-välilehden kertoimet, yksikköä kohden). Osalla, jolla ei ole elementtiä eikä kerrointa, kuten maalilla, pintakäsittelyillä ja johdotuksella, näkyy viiva ja se on listattu. Vanhan osan käyttöiän päättyminen ja sen uusimisen työ eivät ole mukana laskennassa.
