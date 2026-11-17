---
title: Avaa IFC-malli ja katso ympärillesi 3D:ssä
summary: Avaa IFC-tiedosto, kierrä, panoroi ja zoomaa, ja käytä Sovita-, Ylhäältä-, Edestä- ja Sivu-toimintoja suunnistaaksesi.
keywords: ifc, 3d, kiertäminen, panorointi, zoomaus, sovita, ylänäkymä, edestä-näkymä, sivunäkymä, suunnistus, viewcube, kamera
from: 68b460dd
---

## Mitä tehdään

Avaa IFC-malli, liiku sen ympärillä 3D:ssä ja siirry vakionäkymiin. Noin viisi minuuttia.

Tarvitset `.ifc`-tiedoston. Useimmat BIM-ohjelmat vievät sellaisen; Revitissä se on **File > Export > IFC**. Katso [Hanki projektitiedosto 3D:hen IFC:n kautta](topic:rvt-to-ifc).

## Vaiheet

1. Napsauta {{ui:Valitse tiedosto}} (tai vasemmassa yläkulmassa olevaa pudotusaluetta).
2. Valitse `.ifc`-tiedosto ja vahvista.
3. Odota, että tilarivi valmistuu. Se näyttää ensin ”Käynnistetään IFC-moottoria…”, sitten ”Luetaan mallia…” ja ”Rakennetaan geometriaa: … / … elementtiä”.
4. Katso mallia: se avautuu kolmen neljänneksen näkymään, sovitettuna näyttöön.
5. Napsauta mallin yläpuolella olevalla työkalurivillä {{ui:Ylhäältä}} nähdäksesi suoraan alas.
6. Napsauta {{ui:Edestä}} nähdäksesi edestä ja sitten {{ui:Sivu}} nähdäksesi sivusta.
7. Napsauta {{ui:Sovita}} tai paina {{key:F}} palataksesi koko mallin kolmen neljänneksen näkymään.

## Mitä pitäisi näkyä

- Malli keskellä, ohuilla tummilla reunoilla piirustusmaisen ilmeen vuoksi.
- {{ui:Tiedosto}}-paneeli vasemmalla: tiedoston nimi, koko, IFC-skeema (esimerkiksi IFC2X3 tai IFC4), projektin nimi, vaihe, ohjelma, josta se vietiin, tekijä, vientipäivä sekä elementtien ja kolmioiden määrät.
- Sen alla olevat {{ui:Kerrokset}}- ja {{ui:Rakennusosat}}-luettelot.
- Tilarivi: ”Avattu *tiedoston nimi*: *n* elementtiä *s* s”.

## Liikkuminen

:::mouse
| Tehtävä | Tee näin |
|---|---|
| Kierrä | Vedä vasemmalla painikkeella |
| Panoroi | Vedä oikealla painikkeella, tai pidä {{key:Shift}}-näppäintä (tai {{key:Mod}}) pohjassa ja vedä vasemmalla painikkeella |
| Zoomaa | Vieritä rullaa tai vedä keskipainikkeella |
| Katso kaikki | Paina {{key:F}} tai napsauta {{ui:Sovita}} |
:::

:::mac mouse
Kosketuslevyllä: kierrä vetämällä yhdellä painetulla sormella; panoroi pitämällä {{key:Shift}}- tai {{key:Mod}}-näppäintä pohjassa ja vetämällä; zoomaa vierittämällä kahdella sormella tai nipistämällä. Kahden sormen napsautus on oikea napsautus, ja sillä voi myös vetää panoroidakseen, mutta {{key:Shift}} ja vetäminen on helpompaa.
:::

:::touch
| Tehtävä | Tee näin |
|---|---|
| Kierrä | Vedä yhdellä sormella |
| Zoomaa | Nipistä kahdella sormella |
| Panoroi | Liikuta kahta sormea yhdessä |
| Katso kaikki | Napauta {{ui:Sovita}} |
:::

Kiertäminen kiertää aina mallin keskellä olevan pisteen ympäri. Panorointi siirtää tätä pistettä, joten pitkän panoroinnin jälkeen kierto voi tuntua keskeltä poispäin: palauta napsauttamalla {{ui:Sovita}}.

## Varjostettu, reunat tai rautalanka

Kolme pientä painiketta näkymäkuution yläpuolella valitsevat, miten malli piirretään: {{ui:Varjostettu}}, {{ui:Varjostettu särmineen}} (oletus) ja {{ui:Rautalanka}}. Ne ovat myös komentoja (Näkymä valikoissa ja Mukauta-luettelossa), joten niillä voi olla omat näppäimet. {{ui:Pohjakuva}}, {{ui:Jaa}} ja {{ui:3D}} ovat työkalurivin {{ui:Näkymä}}-rivillä.

## Yleisiä virheitä

- **Nimettyjen näkymien odottaminen.** BimCraftissa on neljä kiinteää näkymää ({{ui:Sovita}}, {{ui:Ylhäältä}}, {{ui:Edestä}}, {{ui:Sivu}}), näkymäkuutio oikeassa alakulmassa ja vapaa kierto. Näkymiä ei tallenneta.
- **Pohjakuvien ja leikkausten etsiminen.** Tässä versiossa ei ole 2D-pohjakuvia tai leikkauslaatikoita. Leikkaa malli yhdellä {{ui:Leikkaus}}-tasolla ([Leikkaa IFC-malli leikkaustasolla](topic:section-plane)) tai kytke kerrokset pois: [Näytä ja piilota kerrokset, tilat ja reunat](topic:storeys-and-spaces).
- **Projektitiedoston avaaminen ja 3D:n odottaminen.** Projektitiedosto avautuu tiedostokorttina. Vie ensin IFC.
- **`.ifczip`-tiedoston avaaminen.** Pura se tai vie tavallinen `.ifc`.
- **Hyvin suuri malli hidastaa välilehden tai kaataa sen.** Katso [Selaimet, laitteet ja muisti](topic:platforms).

## Seuraavaksi

[Valitse elementti ja lue sen ominaisuudet](topic:inspect-element).
