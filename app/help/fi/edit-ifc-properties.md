---
title: Muuta IFC-ominaisuuksia ja tallenna muokattu kopio
summary: Muuta elementin nimeä, tunnistetta, kuvausta tai ominaisuuden arvoa, kumoa muutokset ja lataa uusi IFC-tiedosto, kun alkuperäinen tiedosto pysyy ennallaan.
keywords: muokkaa, muuta, ominaisuudet, parametrit, tunniste, nimi, nimeä uudelleen, merkki, tallenna nimellä, lataa, kumoa, kopio, ifc, kirjoita
from: f8035d62
---

## Mitä teet

Korjaa tietoja IFC-mallissa: nimeä elementti uudelleen, korjaa sen tunniste tai muuta ominaisuuden arvoa. Tallenna sitten uusi IFC-tiedosto muutoksineen. Avattua tiedostoa ei koskaan muuteta.

## Mitä voit muuttaa

| Kenttä | Muokattavissa |
|---|---|
| Nimi, Objektityyppi, Tunniste, Kuvaus | Kyllä |
| Yksittäiset ominaisuusarvot (teksti, numerot, Kyllä/Ei) | Kyllä |
| Tyyppiominaisuudet (joukot, jotka on merkitty "(tyyppi)") | Kyllä, ja muutos koskee jokaista tuon tyypin elementtiä |
| Tyyppi, GlobalId, Rivi | Ei |
| Määrät (pituudet, pinta-alat, tilavuudet, lukumäärät) | Ei |
| Luettelot, valintalistat ja muut monen osan arvot | Ei |
| Geometria, sijainti, elementtien lisääminen tai poistaminen | Ei |

## Vaiheet

1. Avaa IFC-malli ja napsauta elementtiä, jota haluat muuttaa.
2. {{ui:Properties}}-paneelissa napsauta arvoa, jonka haluat muuttaa. Se muuttuu tekstikentäksi. Tyhjä arvo näkyy *tyhjänä*.
3. Kirjoita uusi arvo.
4. Paina {{key:Enter}} tai napsauta muualle säilyttääksesi sen. Paina {{key:Esc}} peruuttaaksesi.
5. Katso arvoa: se on nyt lihavoitu, ja sen vieressä on sininen palkki, joka merkitsee muokattua arvoa.
6. Katso vasemmalla olevaa {{ui:Changes}}-osiota: muutos luetellaan muodossa *elementti*: *kenttä*, vanha arvo uuteen arvoon.
7. Toista muille arvoille tai muille elementeille.
8. Napsauta {{ui:Save as IFC}} (painike näyttää, montako muutosta odottaa, esimerkiksi "Tallenna IFC-tiedostona (3)") tai paina {{key:Mod+S}}.
9. Etsi latauskansiostasi tiedosto "*alkuperäisen nimi* (edited).ifc".

## Mitä pitäisi näkyä

Tilarivi kertoo "Tallennettu *nimi* (edited).ifc, *n* muutoksella (… tavua). Alkuperäinen tiedosto on ennallaan." {{ui:Changes}}-luettelo tyhjenee, valmiina seuraavaa kierrosta varten.

## Arvojen tyypit

- **Teksti**: kaikki kirjoittamasi säilytetään sellaisenaan. Nimen, objektityypin, tunnisteen tai kuvauksen tyhjentäminen poistaa arvon.
- **Numerot**: kirjoita pelkkä numero, kuten `2.4` tai `1200`, tiedoston omissa yksiköissä. Ei yksikkömerkkejä. Muussa tapauksessa näkyy "Käytä numeroa."
- **Kokonaisluvut** (lukumäärät, kokonaisluvut): "Käytä kokonaislukua." näkyy, jos kirjoitat desimaaliluvun.
- **Kyllä/Ei**: arvosta tulee valikko, jossa on Kyllä ja Ei.

Jokainen arvo säilyttää IFC-tyyppinsä, joten numero pysyy numerona ja muut ohjelmat lukevat sen oikein.

## Kumoa

1. Napsauta {{ui:Undo}}-painiketta {{ui:Changes}}-osiossa tai paina {{key:Mod+Z}}, kun et kirjoita kenttään.
2. Toista kumotaksesi enemmän. Jokainen kumoaminen poistaa uusimman muutoksen.

Tallennuksen yli ei voi kumota: tallennuksen jälkeen luettelo alkaa alusta. Tallennettu tiedosto säilyttää kaiken.

## Miksi muokkaus muuttaa vain yhtä elementtiä

Vientiohjelmat säästävät tilaa jakamalla tietoja. Yksi ominaisuusjoukko voi olla jaettu kahdellekymmenelle ovelle, ja yksi arvo ("Palonkestävyys: 60 min") voi olla luetteloituna yhdessäkymmenessä joukossa. Jos BimCraft muuttaisi jaettua arvoa suoraan, jokainen sen jakava elementti muuttuisi myös.

Siksi BimCraft kopioi ennen kirjoittamista:

- Jos muokkaamasi ominaisuusjoukko on jaettu muiden elementtien kanssa, elementtisi saa oman kopionsa joukosta, ja vain kopio muuttuu.
- Jos arvo on jaettu muiden joukkojen kanssa, joukkosi saa oman kopionsa arvosta.

Naapurit säilyttävät vanhan tietonsa. Tätä kutsutaan *kopioi kirjoittaessa* (copy-on-write). Se lisää tiedostoon muutaman pienen merkinnän, jotka jokainen IFC-ohjelma lukee normaalisti.

**Tyyppiominaisuudet ovat tarkoituksellinen poikkeus.** Joukko, joka on merkitty "(tyyppi)", kuuluu elementin tyyppiin, ja IFC:ssä jokainen tuon tyypin elementti lukee sen sieltä. Sen muuttaminen muuttaa tyyppiä, joten jokainen tyypin elementti näyttää uuden arvon. {{ui:Changes}}-luettelo merkitsee tällaiset muutokset "(tyyppi)". Katso [Muuta tyypin ominaisuutta jokaiselle tyypin elementille](topic:type-vs-instance).

## Varoitukset ennen työn menettämistä

- Jos avaat toisen tiedoston tallentamattomin muutoksin, näkyy kysymys: "Tiedostossa *tiedosto* on *n* tallentamatonta muutosta. Hylätäänkö ne?" Napsauta Peruuta jatkaaksesi työtä ja tallenna sitten.
- Tallentamattomin muutoksin tehdyn välilehden sulkeminen tai uudelleenlataus saa selaimen kysymään, haluatko poistua.

## Yleisiä virheitä

- **Yksiköiden kirjoittaminen.** `2400 mm` hylätään. Kirjoita `2400`.
- **Tyyppiominaisuuden muuttaminen, kun tarkoitit yhtä elementtiä.** Etsi merkintä "(tyyppi)" ennen kirjoittamista. Jos haluat yhden elementin eroavan, muuta esiintymän ominaisuutta tai sen tunnistetta tai nimeä.
- **Odottaa alkuperäisen tiedoston muuttuvan.** Tallennus lataa aina uuden tiedoston. Korvaa alkuperäinen itse, jos niin haluat, ja säilytä kopio.
- **{{key:Mod+S}} painettuna ilman muutoksia.** BimCraft tallentaa vain, kun on tallennettavaa. Muuten selaimen oma "Tallenna sivu" saattaa avautua. Sulje se.
- **Tallentaa kahdesti ja odottaa kaksi pientä tiedostoa.** Jokainen tallennus sisältää kaikki muokkaukset siitä lähtien, kun avasit mallin.
- **Odottaa muokkausten palaavan projektitiedostoon.** BimCraft kirjoittaa vain IFC:tä. Tuo muokattu IFC suunnitteluohjelmaasi samalla tavalla kuin minkä tahansa IFC-tiedoston.
