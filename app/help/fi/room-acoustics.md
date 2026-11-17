---
title: Tarkista huoneen jälkikaiunta ja kuuntele sitä
summary: Jälkikaiuntaaika oktaavikaistoittain jokaiselle huoneelle (Sabine ja Eyring) sen koon ja pintojen perusteella, oma tavoitearvo sekä puhe, taputus tai musiikki, joka toistetaan huoneen lasketun impulssivasteen kautta.
keywords: akustiikka, jälkikaiunta, kaiuntaika, rt60, sabine, eyring, absorptio, kaiku, ääni, kuuntelu, impulssivaste, puhe, luokkahuone, toimisto, matto, alakattolaatta, melu
from: 16996cbb
---

Vasemman paneelin {{ui:Huoneakustiikka}}-osio laskee, kuinka kauan ääni jää kaikumaan kussakin huoneessa. Se lukee jokaisen huoneen lattiapinta-alan, korkeuden, seinät, ovet ja ikkunat avoimesta IFC-mallista. Mallia ei muuteta.

## Valitse pinnoitteet

Kun malli kertoo, mikä pinnoite on minkäkin pinnan päällä, huone lukee sen: kunkin seinätyypin sisäkerroksen (kipsilevy, rappaus, tiili, betoni ja harkko tunnistetaan), lattian lajin (puu tai betoni) ja sen, onko katto laatoitettu. Kunkin valinnan vieressä oleva merkintä kertoo, onko arvo mallista, oletus vai sinun valintasi; ohita se valitsemalla toinen pinnoite. Kaikki, mitä malli ei kerro, jää oletukseen. Kertoimet ovat **tyypillisiä julkaistuja arvoja**; korvaa ne tuotteen testitiedoilla, kun ne ovat käytettävissä. Kirjoita **tavoite** (pisin haluamasi keskitaajuuden jälkikaiuntaika), jolloin kaikki sitä pidemmät huoneet saavat varoituksen sekä absorption määrän, jolla aika saadaan lyhennettyä.

## Lue taulukko

Jälkikaiunta esitetään taajuusalueella 125 Hz – 4 kHz. Sabine sopii eläviin huoneisiin ja Eyring kuolleisiin; rivi, jonka merkintä on *Käytetty*, käyttää Eyringiä, kun keskimääräinen absorptio on yli 0.2. Ilman absorptio on mukana (se lyhentää korkeita kaistoja suurissa huoneissa). Kyse on tilastollisesta mallista: se olettaa, että ääni leviää tasaisesti, joten pitkät tai matalat huoneet sekä hyvin pienet huoneet ovat karkeita arvioita, eikä huonekaluja, ihmisiä tai auki olevia ovia oteta huomioon.

## Kuuntele

{{ui:Toista tässä huoneessa}} toistaa puheen (luotu tässä), taputuksen, näppäillyt äänet tai **oman äänitiedostosi** (se pysyy tietokoneellasi) huoneelle lasketun impulssivasteen kautta: suoran äänen, saman kokoisen laatikon ensimmäiset heijastukset ja hännän, joka vaimenee huoneen oman jälkikaiunta-ajan mukaisesti kussakin kaistassa. {{ui:Toista sellaisenaan}} toistaa saman äänen samalla voimakkuudella ilman huonetta. Impulssivasteen tai huoneen äänen voi tallentaa WAV-tiedostoina. Ääni kuulostaa tämänkokoiselta ja tämänlaiselta huoneelta, ei mistään todellisesta huoneesta.

## Ihmiset ja huonekalut

Kirjoita **henkilöiden määrä tässä huoneessa** lisätäksesi heidän absorptionsa. Malliin sisältyvät huonekalut (sohvat, sängyt, tuolit, pöydät ja vaatekaapit, tunnistetaan nimen perusteella) lisäävät oman osuutensa. Luvut ovat karkeita suunnitteluarvoja, pyöristettyjä; korvaa ne mittauksilla huoneessa, jolla on merkitystä.

## Lähde ja kuuntelija

Kohdassa {{ui:Lähde ja kuuntelija}} paina {{ui:Sijoita lähde}} tai {{ui:Sijoita kuuntelija}} ja napsauta huoneen pohjakuvaa. Toistettava ääni kuuluu sitten sieltä: suora ääni saapuu etäisyyden jälkeen, ja kaikuva osa on sen etäisyyden mukaisella tasolla. Tyhjennä molemmat, jolloin palataan etäisyyskenttään.

## Epätasainen absorptio ja huonemoodit

Kohdassa {{ui:Epätasainen äänenabsorptio (laatikkohuone)}} kirjoita huone laatikkona ja valitse sen lattian, katon ja seinien pinnoitteet. Taulukko lisää Sabinen ja Eyringin rinnalle Fitzroyn ja Arau-Puchadesin: ne käsittelevät erikseen kolme vastakkaisten pintojen paria, joten matolla päällystetty huone kovalla katolla ei lue liian lyhyeksi. Kun parit eroavat paljon, huomautus kertoo, mihin niistä voi luottaa. Taulukon alapuolella **Huonemoodit** luettelee laatikon matalimmat seisovat aallot ja taajuuden, jonka alapuolella huoneessa on erilliset moodit tasaisen äänikentän sijaan. Nämä ovat laatikkohuoneen ennusteita, suunnittelun apuväline eivätkä mittaus.

## Yksiköt

Huoneiden pinta-alat, korkeudet, tilavuudet ja etäisyydet näytetään valitsemissasi {{ui:Yksiköt}}-yksiköissä (neliö- ja kuutiojalat, tuumat, millimetrit, senttimetrit tai metrit). Laskenta itse pysyy SI-yksiköissä; muuttuu vain näyttö. Ajat (sekunteina), taajuudet ja tasot pysyvät ennallaan.
