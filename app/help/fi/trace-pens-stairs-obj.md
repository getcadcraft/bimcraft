---
title: Kerroksen jäljitys, kynät näkymittäin, portaat luonnoksesta ja OBJ-tiedoston avaaminen
summary: Näytä toinen kerros katkoviivoin pohjakuvan alla ja kohdista se; anna seinille, ovillle ja ikkunoille oma kynä yhdessä näkymässä; piirrä kulkuviiva portaiden luomiseksi ja avaa Wavefront OBJ -verkko.
keywords: jäljitysviite, haamukuva, taustakuva, kynä, viivanpaksuus, viivatyyppi, ohitus, portaat, luonnos, välitaso, OBJ, verkko, tuonti, Wavefront
from: 333ebbde
---

## Kerroksen jäljitys

Valitse {{ui:Jäljitä}} valikosta {{ui:Koontiversio}} ja valitse sitten näkymä listasta: toisen kerroksen pohjakuva, kerroksen kattosuunnitelma tai leikkaus (leikkaus rajattuna omaan rajaukseensa). Sen seinät, pilarit ja lattiat näkyvät katkoviivoin piirtämäsi pohjakuvan alla. Siirrä sitä napsauttamalla viitteen peruspistettä ja sitten kohtaa, johon pisteen pitäisi mennä, tai kirjoita X, Y ja kulma (se kääntyy oman keskipisteensä ympäri). {{ui:Palauta}} asettaa sen takaisin, {{ui:Piilota}} poistaa sen. Se on pelkkä viite: mikään ei valitse sitä, sitä ei tulosteta eikä tallenneta IFC-tiedostoon. BimCraft muistaa sen kullekin kerrokselle tässä selaimessa.

## Kynät näkymittäin

Valitse {{ui:Kynät}}. Kerro, mihin kynä on tarkoitettu: kaikki seinät, kaikki ovet, kaikki ikkunat, valitun elementin tyyppi tai valitut elementit. Valitse viivanpaksuus, viivatyyppi (yhtenäinen, katkoviiva, pistekatkoviiva) ja väri ja napsauta sitten {{ui:Käytä}}. Muutos koskee vain tämän kerroksen pohjakuvaa. Valinta voittaa tyypin, ja tyyppi voittaa koko luokan. {{ui:Tyhjennä kaikki}} poistaa ne. Ne säilyvät tässä selaimessa.

Rastita **Kynien värit 3D-näkymässä**, jos haluat maalata väri-kynät mallille 3D-näkymässä (viivanpaksuus tai katkoviiva on viivan ominaisuus, joten 3D-näkymässä näkyy vain väri); poista rasti palataksesi. {{ui:Tulosta}} piirtää ne kerroksen PDF-tiedostoon: paksuus skaalautuu näytöstä (oletusseinäkynä 1.75 pikseliä on 0.5 mm), katkoviivat pysyvät katkoviivoina ja väri tulostuu paperiteeman arvollaan.

## Portaat luonnoksesta

Valitse {{ui:Luonnostele portaat}} ja napsauta kulkuviivan kulmia alimmasta askelmasta alkaen. Yksi viiva on suora portaikko, kaksi suorassa kulmassa toisiinsa yhtyvää viivaa on L ja kolme viivaa (ylös, poikki, takaisin) on U. Piirrä välitaso painamalla {{key:L}}: napsauta sen kulmia ja paina {{key:Enter}}; sen lyhyt sivu määrää portaiden leveyden. Sijoita portaat painamalla {{key:Enter}}. Jokainen askelma lasketaan kulkuviivasi pituudesta ja siitä, montako nousua korkeus vaatii. Sen jälkeen se on tavallinen portaikko: muuta sitä {{ui:Ominaisuudet}}-kohdassa, ja porrauskuilu ja käsijohteet seuraavat mukana.

Rastita työkalurivin **Tee perheeksi** (tai paina {{key:F}}) ennen {{key:Enter}}-painallusta, jos haluat sijoittaa portaat perheenä (suora, L- tai U-portaikko). Se tulee yhtenä elementtinä ja avautuu perhemuokkaimeen, jossa leveys, askelma, kokonaiskorkeus, kunkin porrasosuuden askelmat ja U:n väli ovat parametreina, joten voit lisätä kokoja, pohjakuvasymbolin tai aktiivisia pisteitä. Askelmat ja nousun korkeus seuraavat näistä. Siinä ei ole käsijohteita eikä porrauskuilua: ne kuuluvat tavalliseen portaikkoon.

## Avaa OBJ

Avaa `.obj`-tiedosto kuten mikä tahansa tiedosto. OBJ-tiedostossa ei ole yksiköitä, joten BimCraft lukee metrit Y-akseli ylöspäin, kuten useimmat ohjelmat sen kirjoittavat. Jokainen objekti tai ryhmä tulee yhdeksi verkkoelementiksi yhdelle kerrokselle, ja sen voi sitten katsoa, mitata, leikata, sijoittaa malliin ja tallentaa IFC-tiedostoon. Viivat, käyrät ja pinnat jätetään pois, ja tilarivi kertoo siitä.

Objekti, joka on täsmälleen suora prisma (suljettu verkko, jossa on kaksi yhdensuuntaista, identtistä päätypintaa ja niitä vasten kohtisuorat tasaiset sivut: laatta, tolppa, seinälohko, levy, jossa on reikiä), tallennetaan IFC-tiedostoon IFC-tiedoston omana pursotettuna kiintokappaleena sen ääriviivoineen ja syvyyksineen, ei kolmioiden luettelona. Muut ohjelmat lukevat sen oikeana kiintokappaleena, se pysyy pienenä, ja sen syvyyttä ja ääriviivoja voi muokata myöhemmin. Tilarivi kertoo, kuinka monta objektia säilyi näin. Kaikki, mikä ei ole täsmälleen prisma (kartiomainen muoto, verkko, jonka yksi kärkipiste on siirretty, verkko, jossa on rako), jää kolmioiksi. STEP-tiedosto luetaan samalla tavalla.
