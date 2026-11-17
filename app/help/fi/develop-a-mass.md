---
title: Kehitä rakennusmassa tonttitutkimuksesta
summary: Ota CivilCraftin tonttinäkymässä tutkittu rakennusmassa ja kehitä se kerroksiksi, seinäksi ja lattioiksi säilyttäen tontin paikka kartalla.
keywords: massa, rakennusmassa, massamallinnus, tonttitutkimus, kehitä, CivilCraft, luovutus, kerrokset, seinät, lattiat, pohjapinta-ala, georeferointi, IFC
from: 557b94d1
---

CivilCraftin tonttinäkymä voi piirtää rakennusmassoja tontille ja testata niitä maastoa, kirjoittamiasi rajoja ja aurinkoa vasten. **Kehitä BimCraft-sovelluksessa** avaa BimCraft-sovelluksen uuteen välilehteen massat; **Massat IFC:nä** tallentaa ne tiedostona, jonka avaat täällä tavalliseen tapaan. Molemmilla tavoilla jokainen massa saapuu kohteena, rakennuksena, jossa on yksi kerros per kerros, ja yhtenä lohkona (massa itse), joka kantaa sen lukuja.

## Kehitä massa

1. Valitse massa 3D-näkymästä. Ominaisuudet näyttää sen käytön, kerrokset ja kerroskorkeuden, pohjapinta-alan, bruttoalan, sen, miten se istuu rinteeseen, ja tonttinsa.
2. Napsauta **Kehitä tämä massa**.

Yhdellä kumoamisvaiheella jokaiselle tämän rakennuksen kerrokselle tulee seinät pohjapinnan ympärille (pohjapinta on seinien ulkopinta; jokainen seinä ulottuu ylempään kerrokseen, ja ylin on yhden kerroksen korkuinen) ja lattia koko rakennuksen alle. Lohko korvataan, ja rakennus säilyttää tutkimuksen luvut ominaisuusjoukossa `CadCraft_SiteMass`, merkittyinä kehitetyiksi. Kattoa ei ole: katto riippuu suunnitelmasta.

## Tontin paikka

CivilCraftin tiedosto kirjoitetaan projektin omassa pituusyksikössä ja, kun CivilCraft-projektilla oli koordinaattijärjestelmä, se kantaa sitä projektin karttamuunnoksena. Massan kehittäminen ei muuta sitä, joten rakennus pysyy siinä, missä kartta sen sanoo olevan.
