---
title: Reaaliaikanäkymä
summary: Paneeli mallin vieressä, joka näyttää mallin reaaliaikaisella ilmeellä auringon, varjojen ja heijastuvan valon kanssa ja seuraa jokaista tekemääsi muutosta. Kävele sen läpi ja aseta vuorokaudenaika ja kuukausi.
keywords: reaaliaikanäkymä, reaaliaika, reaaliaikainen renderöinti, kävelykierros, kävely, ensimmäisen persoonan näkymä, esittely, asiakas, toinen näyttö, toinen ikkuna, näyttö, vuorokaudenaika, aurinko, vuodenaika, kuukausi, varjot, ympäröivä okkluusio, heijastukset, heijastuva valo, globaali valaistus, webgpu, webgl
from: ea5c02bf
---

Reaaliaikanäkymä näyttää mallin reaaliaikaisella ilmeellä: taivaan ja auringon kohteesi sijainnin ja päivämäärän mukaan, auringon varjot, elementeille antamasi maalit ja materiaalit, lamput sekä seinistä ja lattioista heijastuva valo. Se seuraa tekemiäsi muutoksia: kun kierrät 3D-näkymää, myös se kääntyy, ja kun muutat mallia, muutos näkyy hetken kuluttua. Mitään ei lähetetä ylös.

Se piirtää saman kohtauksen, maalit, lamput ja auringon kuin [Renderöi kuva](topic:render). Valmista kuvaa varten käytä sitä.

## Avaaminen

1. Avaa malli ja valitse työkalurivistä {{ui:Reaaliaikanäkymä}}. Paneeli aukeaa sovelluksen päälle oikeaan alakulmaan.
2. Vedä sen otsikkopalkkia siirtääksesi sitä, vedä kulmasta suurentaaksesi.
3. {{ui:Reaaliaikanäkymä uudessa ikkunassa}} (sen vieressä oleva painike) tai paneelin {{ui:Uusi ikkuna}} siirtää sen omaan ikkunaansa toista näyttöä varten. Jos selain estää ponnahdusikkunat, se avautuu paneelina.
4. {{ui:Sulje}} sulkee sen.

## Säätimet

| Säädin | Toiminto |
|---|---|
| {{ui:Seuraa näkymää}} | Päällä: reaaliaikanäkymä katsoo sinne, minne 3D-näkymä katsoo. Kävely kytkee sen pois |
| {{ui:Kävely}} | Kävele mallin läpi (alla) |
| {{ui:Painovoima}} | Kävellessä: seisot lattioilla ja kiipeät portaita. Pois: lennät |
| {{ui:Aika}} | Vuorokaudenajan tunti. Aurinko liikkuu, kun vedät |
| {{ui:Kuukausi}} | Kuukausi, jotta näet auringon talvella ja kesällä |
| {{ui:Laatu}} | {{ui:Tälle tietokoneelle}}, tai {{ui:Matala}}, {{ui:Keskitaso}} tai {{ui:Korkea}} |

Alareunan rivi kertoo, mikä piirtää näkymän (WebGPU tai WebGL 2), laadun ja heijastuvan valon.

## Kävely mallin läpi

1. Käännä 3D-näkymä siihen suuntaan, johon haluat seistä, ja valitse {{ui:Kävely}}. Seisot näkymän katselupisteen alapuolella olevalla lattialla, 1,6 m pituisena.
2. Klikkaa reaaliaikanäkymää ja käytä näppäimiä {{key:W}} {{key:A}} {{key:S}} {{key:D}} tai nuolinäppäimiä. Pidä {{key:Shift}} pohjassa juoksemiseen. Vedä katsoaksesi ympärillesi.
3. Enintään 40 cm korkuiset askelmat kiivetään (portaat); sitä korkeampi on seinä. Seinät pysäyttävät sinut, ja liu'utat niitä pitkin.
4. Kun {{ui:Painovoima}} on pois päältä, lennät: {{key:E}} nousee, {{key:Q}} laskee.
5. {{key:Esc}} lopettaa kävelyn.

## Heijastuva valo

Valo, joka heijastuu auringonvaloisesta seinästä lattialle, ja huoneen tummempi sisäosa lasketaan taustalla jokaisella prosessorin ytimellä. Laskennan aikana alareunassa lukee {{ui:Heijastuva valo: 40 %}}. Kun se on valmis, näkymä ottaa sen käyttöön. Muutoksen jälkeen laskenta alkaa alusta.

:::note
Tämä on reaaliaikanäkymän arvio, ei renderöity kuva: pisteiden välisten pienten yksityiskohtien heijastuva valo on lähimpien pisteiden heijastuva valo.
:::

:::note
Selaimet eroavat toisistaan. Jos selaimessa on WebGPU, reaaliaikanäkymä käyttää sitä. Muuten se käyttää WebGL 2:ta ja näyttää samalta. Jos kumpaakaan ei ole, paneeli kertoo siitä.
:::
