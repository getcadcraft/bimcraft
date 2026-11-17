---
title: Teräsputkien putkiosat ja putkiosa-arkit
summary: Leikkaa teräksinen tuppihitsattu putkilinja putkiosiin enimmäispituuden ja sijoittamiesi työmaahitsien mukaan, numeroi ne ja lataa putkiosa-arkki jokaisesta (3D-näkymä, leikkauspituudet, liitososat, hitsit, materiaaliluettelo) PDF- ja CSV-muodossa; kanavat saavat suorien osien katkaisuluettelon.
keywords: putkiosa, putkiosat, putkiosa-arkki, isometrinen, valmistus, esivalmistus, työmaahitsi, tehdashitsi, tuppihitsi, leikkauspituus, katkaisuluettelo, materiaaliluettelo, bom, teräsputki, schedule 40, linjanumero, kanavan katkaisuluettelo, kanavaosat
from: 539f51de
---

## Mitä teet

Muunna teräsputkilinja osiksi, jotka työpaja hitsaa kokoon ja asentaja asentaa: putkiosat, jotka eivät ylitä valitsemaasi pituutta ja jaetaan kohtiin, joihin sijoitat työmaahitsit. Jokaisella on oma arkki.

Vain **teräksinen tuppihitsattu putki** leikataan putkiosiksi (putkikoot ASME B36.10M, kyynärpäät ASME B16.9 pitkällä säteellä). Kupari-, PVC- ja PEX-liitokset eivät ole tuppihitsejä, joten niiden linjoilla ei ole putkiosia.

## Leikkaa linja putkiosiin

1. Valitse teräsputkilinja. Kohdassa Ominaisuudet valitse **Leikkaa putkiosiksi**.
2. **Pisin putkiosa**: suurin keskiviivapituus, jonka yksi putkiosa saa olla (alussa 6 m, noin 20 ft).
3. **Linjanumero**: osa jokaisen putkiosan numerosta. Uusi putkiosiksi jaettu linja saa järjestelmänsä seuraavan vapaan numeron.

Putkiosat numeroidaan linjaa pitkin sen ensimmäisestä pisteestä alkaen: `CHW-12-S01`, `CHW-12-S02` … (järjestelmä, linjanumero, putkiosa). Putkiosa kasvaa osa kerrallaan; osa, joka tekisi siitä liian pitkän, aloittaa seuraavan, ja suora pituus, joka on pidempi kuin putkiosa, leikataan kohdasta, jossa putkiosa on täynnä.

## Sijoita työmaahitsit

1. Avaa {{ui:Build}} ja valitse {{ui:Työmaahitsi}}.
2. Napsauta putkiosan putkea siinä kohdassa, johon työmaahitsi menee. Suoran pituuden sisällä putki leikataan siinä kohdassa; liitososan tai venttiilin sisällä hitsi siirtyy lähempään liitokseen.

Ominaisuudet luettelee linjan työmaahitsit, ja jokaisen vieressä on {{ui:Remove}}. Jokainen muutos on yksi {{ui:Undo}}-askel.

## Putkiosa-arkit

Putkiosaksi jaetun linjan Ominaisuuksissa:

- {{ui:Putkiosa-arkit (PDF)}}: yksi sivu putkiosaa kohti. Vasemmalla putkiosa 30° isometrisessä näkymässä: sen suorat osat numeroituina, valmistushitsit pisteinä, työmaahitsit merkittynä FW:llä ja pohjakuvan pohjoinen. Oikealla putkiosan numero, koko, schedule ja pituus, sitten sen **leikkauspituudet**, **liitososat**, **hitsit** (tehdashitsi jokaisessa putkiosan sisäisessä liitoksessa, työmaahitsi kohdassa, jossa se kohtaa seuraavan putkiosan) ja sen **materiaaliluettelo** putken painon kanssa (ASME B36.10M, sileäpäisen putken paino).
- {{ui:Putkiosaluettelo (CSV)}}: sama, lohko per putkiosa.

:::note
Leikkauspituudet ovat päästä päähän piirrettyinä: juurivälystä tai hitsivarasta ei vähennetä mitään. Kyynärpäät ovat ASME B16.9 pitkällä säteellä; T-haarat, supistimet ja venttiilit ovat yleisiä, mitoitettu putken mukaan, eivät ASME B16.9:n tai valmistajan mukaan, ja arkki kertoo sen. Liitososien painoja ei anneta. Piirustus- ja koordinointiapu, jonka insinööri mitoittaa.
:::

## IFC-tiedostossa

Jokaisella jaetun linjan osalla on **CadCraft_Spool** SpoolId:llään, linjalla, putkiosan numerolla linjassa sekä kohdalla, josta se alkaa ja päättyy linjaa pitkin. Linja säilyttää omat sääntönsä (pisin putkiosa, työmaahitsit, linjanumero) omassa joukossaan, joten putkiosat palautuvat samoina, kun tiedosto avataan uudelleen.

## Kanavat: katkaisuluettelo

Avaa {{ui:Build}} ja napsauta {{ui:Kanavan katkaisuluettelo}}: CSV suorista kanavaosista järjestelmän, muodon ja koon mukaan. Jokainen suora pituus leikataan osiin **Kappalepituus**-arvon mukaan (Kanava-palkissa, alussa 1500 mm, noin 5 ft) ja jäljelle jäävä pala. Vain pituudet: ei saumoja, paksuuksia tai liittimiä.
