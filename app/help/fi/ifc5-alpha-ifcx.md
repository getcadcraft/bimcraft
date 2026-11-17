---
title: Avaa ja vie IFC5 alpha (IFCX-tiedostot)
summary: Kokeiluvalinta IFC5 alpha -tiedostomuotoon (.ifcx): avaa tiedosto kerroksineen, katso, mitä lukeminen ei voinut tarkistaa, ja vie avoimet mallit. Muoto on yhä muuttumassa, joten lue ensin.
keywords: ifc5, ifcx, alfa, buildingsmart, json, tasot, skeema, kokeilu, määrät, qto, vienti, tuonti
from: cffe1669
---

IFC5 alpha (tiedostopääte {{ui:.ifcx}}) on tiedostomuoto, jota buildingSMART yhä suunnittelee. Se ei ole lopullinen: tiedostot ja meidän tulkintamme niistä voivat muuttua. Siksi tämä on kokeiluvalinta ja siksi lukeminen tulee ensin.

## Ota käyttöön

1. Valitse {{ui:Asetukset}} ja sitten BimCraft-välilehden osio {{ui:IFC5 alpha (IFCX)}}.
2. Valitse {{ui:IFC5 alpha (IFCX) - muoto on yhä muuttumassa; lue ensin}}.

Se on oletuksena pois päältä. Kun se on pois päältä, .ifcx-tiedosto hylätään lauseella, joka viittaa tähän. {{ui:Avaa IFC5 alpha (.ifcx)…}} ja vientipainike {{ui:IFC5 alfa}} näkyvät, kun se on päällä.

## Avaa

- Valitse .ifcx-tiedosto kohdalla {{ui:Avaa tiedosto tai kansio}} (se korvaa avoimen mallin tavanomaisen muokkauskysymyksen jälkeen), tai
- valitse {{ui:Avaa IFC5 alpha (.ifcx)…}} ja valitse useita tiedostoja kerralla: tiedosto, sen tasot ja skeematiedostot, jotka se tuo. Kun malli on jo auki, tiedosto **lisätään sen viereen**; mallilistan rasti poistaa sen taas, mikä on kumoaminen.

IFCX-tiedosto luettelee solmuja (polku, sen lapset, mitä ne perivät, niiden attribuutit). Useat tiedostot voivat kuvata saman solmun: myöhempi tiedosto (taso) korvaa aiemman attribuutit, ja tyhjä (null) lapsi poistaa lapsen. BimCraft yhdistää ne ja piirtää tuloksen pienenä IFC4-mallina: projekti, tontti, rakennus, kerrokset ja rakennusosat nimineen, luokkineen, ominaisuuksineen, määrineen, väreineen ja verkkoineen.

Mitään ei haeta verkosta. Tiedoston tuomia skeematiedostoja (esimerkiksi `ifc@v5a.ifcx`) käytetään vain, jos valitsit ne tiedoston kanssa; muuten raportti kertoo sen ja attribuutit luetaan ilman tyyppitarkistusta.

### Raportti

Avaamisen jälkeen raportti luettelee, mitä lukeminen löysi: tiedot, jotka eivät vastaa skeemaansa, skeematiedostot, joita ei annettu, ja attribuutit, joilla ei ole IFC-merkitystä tässä. Attribuutit ilman vastaavuutta **säilytetään** mallissa eikä niitä jätetä pois, ja ne kirjoitetaan takaisin viedessä.

## Mistä tulee mitäkin

| IFCX-tiedosto | BimCraft-ohjelma |
|---|---|
| Solmu, jolla on IFC-luokka (projekti, tontti, rakennus, kerros, seinä …) | Vastaava IFC4-elementti; luokka, jota tämä lukeminen ei tunne, tulee building element proxy -elementiksi |
| Solmun nimi vanhemman alla | Rakennusosan nimi |
| Attribuutit, joilla on määrälaji (Length, Area, Volume, Mass …) | IFC4-määräjoukko nimeltään `Qto_IFCX` (IFC4-määrät pysyvät IFC4 `Qto_*`-joukkoina) |
| Muut ominaisuusattribuutit | Ominaisuusjoukko nimeltään `Pset_IFCX` |
| Verkko- ja muunnosattribuutit | Rakennusosan kolmiot ja sijoitus; näkymättömiä verkkoja ei piirretä |
| Väri, läpinäkyvyys, materiaali, luokitus | Pinnan tyyli, materiaali ja rakennusosan luokitus |

Yksiköinä käytetään metriä, Z ylöspäin: alfa kertoo, että yksiköt dokumentoidaan myöhemmin.

## Vienti

Valitse työkalurivillä {{ui:IFC5 alfa}}, lue huomautus ja valitse sitten {{ui:Vie .ifcx}}. Tiedostossa on oma otsikkotieto (tekijä CadCraft, versio ifcx_alpha), ja se kertoo itsessään, että kyseessä on alfamuoto. Kukin malli kirjoitetaan omissa tiedostokoordinaateissaan metreinä, nimineen, luokkineen, ominaisuusjoukkoineen, määrineen (attribuutteina niiden lajin mukaan), väreineen ja kolmioineen. Tasot ja perintö kirjoitetaan litistettyinä. Tarkista tiedosto siinä ohjelmassa, jolle lähetät sen.

## Rajoitukset

- Kaarevaa geometriaa (käyriä, pintoja) ei lueta: vain kolmioverkkoja.
- Seinän sisään upotetut ovet ja ikkunat sijoitetaan kerrokseen; seinää, josta ne tulivat, ei linkitetä.
- IFC4 `Qto_*`-joukkojen nimet säilytetään omina attribuuttiryhminään (`cadcraft::qto::…`); vakioalfaskeemassa on vain muutama määränimi.
- Muoto voi muuttua kesken kaiken; tänään tehty tiedosto ei välttämättä aukea huomenna.
