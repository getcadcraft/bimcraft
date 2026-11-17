---
title: Siirrä, kopioi, kohdista ja jaa tasavälein rakennuselementit
summary: Siirrä seiniä, lattioita, pilareita ja sijoitettuja kohteita kantapisteen ja toisen pisteen tai kirjoitetun etäisyyden avulla. Kopioi ne samalla, ja kohdista tai jaa ne tasavälein pohjakuvassa tai 3D-valinnasta.
keywords: siirto, kopiointi, kohdistus, jako tasavälein, väli, siirtymä, kantapiste, seinät, pilarit, lattiat, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Mitä tehdään

Siirrä seinä, pilari, lattia tai sijoitettu kirjaston kohde uuteen paikkaan, tee siitä kopioita tai kohdista useita riviin piirtämättä niitä uudelleen.

## Nimet ja näppäimet

Komennot ovat nimeltään {{ui:Siirrä}}, {{ui:Kohdista}} ja {{ui:Jaa tasavälein}}, ja voit kirjoittaa komentoriviin `MOVE`, `ALIGN` ja `DISTRIBUTE` kuten CadCraftin piirtosovelluksessa. Yksi ero: BimCraftissa {{key:M}} on Mittaa, joten Siirrä-toiminnolla on oma näppäin, {{key:Shift+M}}. Työkalut ovat {{ui:Koontiversio}}-valikossa.

## Siirrä

1. Valitse, mitä siirretään, pohjakuvasta tai 3D-näkymästä. Seinät, lattiat, pilarit ja sijoitetut kirjaston kohteet voivat kaikki olla samassa valinnassa.
2. Paina {{key:Shift+M}} tai valitse {{ui:Siirrä}}.
3. Napsauta kantapiste ja sen jälkeen toinen piste. Tai kirjoita kantapisteen jälkeen etäisyys ja paina {{key:Enter}}: kohde menee osoittimen suuntaan kantapisteestä. Voit myös kirjoittaa `dx,dy` (tai `@dx,dy`) tai `pituus<kulma`.
4. Paina {{key:C}} kytkeäksesi {{ui:Kopioi}} päälle: jokainen siirto tekee nyt kopioita ja pysyy valmiina seuraavaan. Lopeta painamalla {{key:Esc}}.

Molemmat pisteet voi napsauttaa myös 3D-näkymässä: kun Siirrä on päällä, osoitin osuu tason lattiakorkeuteen, joten napsautus siinä on pohjakuvan piste. Pidä {{key:Shift}} pohjassa napsauttaessasi valitaksesi toisen elementin. Käytä pohjakuvaa, {{ui:Ylhäältä}}-, {{ui:Edestä}}- tai {{ui:Sivu}}-näkymää miten haluat: pisteet ovat aina tuolla tasolla.

Seinä vie mukanaan ovensa ja ikkunansa. Piirretty lattia vie mukanaan aukkonsa. Seinien mukaan seuraavat huoneet, lattiat ja katot päivitetään. Siirretyn seinän kanssa liitoksessa olleet seinät pysyvät paikoillaan.

Jokainen siirto on yksi muutos: yksi {{key:Mod+Z}} kumoaa sen, ja se välittyy kaikille Live TeamWork -istunnossa. Sijoitettua kirjaston kohdetta ei voi kopioida tällä tavalla; käytä {{ui:Muokkaa}} › {{ui:Kopioi}} ja {{ui:Liitä}}.

## Kohdista

Valitse kaksi tai useampi elementti, valitse {{ui:Kohdista}} ja sitten puoli (vasen, keskikohta, oikea, yläreuna, keskiviiva tai alareuna) sekä se, mihin kohdistetaan: valittu joukko, ensimmäinen valittu, viimeinen valittu tai napsauttamasi piste. Paina palkissa {{ui:Kohdista}}.

## Jaa tasavälein

Valitse kolme tai useampi elementti, valitse {{ui:Jaa tasavälein}} ja sitten suunta (vaakasuunnassa tai pystysuunnassa) sekä väli: yhtä suuret raot niiden välillä tai yhtä suuret keskikohdat. Päissä olevat kaksi pysyvät paikoillaan.

Kohdistuksen tai jaon siirtämät seinät säilyttävät liitoksensa kuten Siirrossa: siirretyn seinän kanssa liitetty seinä liukuu päätään omalla linjallaan pysyäkseen liitettynä, siihen törmäävät väliseinät tulevat mukana, ja kaksi liitettyä seinää, jotka molemmat siirretään, pitävät kulmansa siellä, missä uudet linjat kohtaavat. Huoneet pysyvät suljettuina. Se on yksi vaihe kohdassa **Muutokset**.
