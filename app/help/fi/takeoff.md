---
title: Määrät: TakeoffCraft
summary: Yksi napsautus lähettää mallin määrät TakeoffCraft-ohjelmaan. Mukana ovat seinät tyypeittäin, katot kaltevan pinta-alan mukaan, harjat, lappeet ja laaksot, perustukset, ovet ja ikkunat, kaapistot, sähkölaitteet, kerrosten pinta-ala ja runkopuun leikkausluettelo. Ne merkitään kunkin kerroksen pohjapiirrokseen ja kauppapakettien kokoonpanot liitetään nimikkeisiin.
keywords: määrälaskenta, määrien laskenta, kustannusarvio, arviointi, materiaaliluettelo, osaluettelo, takeoffcraft, määrät, seinäpinta-ala, kattopinta-ala, squares, anturat, betoni, cubic yards, leikkausluettelo, puutavara, ammattialapaketti, kokoonpano
from: c5a745af
---

## Mitä teet

Muuta malli materiaaliluetteloksi ja kustannusarvioksi TakeoffCraft-ohjelmassa. BimCraft piirtää jokaisesta kerroksesta pohjapiirroksen vakiomittakaavassa, merkitsee siihen jokaisen määrän ja sijoittaa määrälaskennan PDF-tiedostoon. TakeoffCraft mittaa merkinnät itse, joten jokainen luku voidaan tarkistaa arkilta.

## Lähetä

1. Napsauta mallipalkissa {{ui:Määrälaskenta}} ({{ui:Arkit}}-painikkeen vieressä).
2. TakeoffCraft avautuu uuteen välilehteen pohjapiirroksineen. Kun se kysyy, valitse avataksesi PDF-tiedostosta löytyvän määrälaskennan.
3. Lisää hinnat TakeoffCraftin määrätaulukkoon. Kokoonpanot listaavat materiaalit jo valmiiksi.

:::note
Kun TakeoffCraft ei ole käytettävissä täällä, painike lataa PDF-tiedoston. Avaa se myöhemmin TakeoffCraft-ohjelmassa, joka löytää siitä määrälaskennan.
:::

## Mitä mitataan

- **Seinät** tyypin ja korkeuden mukaan: niiden keskiviivat juoksuina, ja seinän korkeus on nimikkeessä, jotta TakeoffCraft antaa pituuden ja seinäpinta-alan. Jokainen juoksu kantaa seinän ovet ja ikkunat, joten TakeoffCraft vähentää ne seinäpinta-alasta kerran samalla säännöllä kuin BimCraftin luettelot: molemmat täsmäävät bruttoon, vähennyksiin ja nettoon. Seinätyypin määrädata (yksikkö, laasti, hinta; katso [Seinäkokoonpanot](topic:wall-assemblies)) tulee mukaan yhtenä hinnoiteltuna rivinä kyseisen tyypin nimikkeellä. Muulla mittaustavalla kuin oletuksella (katso [Valitse mittaustapa](topic:plan-schedules-and-pdf#choose-a-measurement-method)) määrälaskenta kantaa mittaustavan, jokainen juoksu kantaa sen, mitä liitokset vähentävät seinän pinnasta, ja TakeoffCraft mittaa samalla tavalla ja nimeää sen. Tyyppi, jonka yksikössä on pituus ja korkeus, luovuttaa kaksi komponenttia määrineen: tilattavat yksiköt ja laastin tilavuuden. Ne hinnoitellaan, kun tyypin hinta on per yksikkö, per 1000 yksikköä tai per m³ laastia. Määrä, joka osuu tarkalleen kokonaislukuun, voi TakeoffCraftissa olla yhden yksikön verran suurempi, koska luovutus pyöristää paikat arkilla.
- **Katot**: jokainen kattotaso pinta-alana kaltevuuksineen (TakeoffCraft antaa kaltevan pinta-alan), harjat, lappeet ja laaksot (lappeet ja laaksot niiden kaltevaa pituutta pitkin), räystäät ja sivureunat.
- **Perustukset**: anturat ja sokkelit juoksuina niiden keskikohtien ympäri, laatat pinta-alana paksuuksineen, joten betoni saadaan tilavuutena.
- **Ovet ja ikkunat** lasketaan tyypeittäin, ikkunapuitteet mukaan lukien.
- **Alakaapit** niiden rintamien pituuden mukaan.
- **Sähkölaitteet** lasketaan lajeittain.
- **Kerroksen pinta-ala** huoneista.
- **Puutavaran leikkausluettelo** rungosta, laskettuna omalle arkilleen (yksi piste kappaletta kohden).

Kun ammattialapaketissa on vastaava kokoonpano (ulko- ja sisäseinät, laatat, anturat, sokkelit, katemateriaali, harjan ja lappeen suojakappale, laaksot, räystäät, sisäovet, ikkunapuitteet, alakaapit, pistorasiat, kytkimet, valaisimet, liitoskotelot ja keskus), nimike saa mukaansa materiaalit ja kaavat. Paketit tulevat ilman hintoja, eikä kustannusarvioija ole vielä tarkistanut niitä.

:::tip
Piirrokset tehdään joka kerta napsauttaessa mallista, joten muutoksen jälkeen napsauta {{ui:Määrälaskenta}} uudelleen.
:::
