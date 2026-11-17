---
title: Sijoita kuva pohjakuvan alle
summary: Aseta PNG-, JPEG- tai WebP-kuva (skannattu pohjakuva, luonnos, työmaakuva, ilmakuva) tason pohjakuvan alle tai pystytasolle, skaalaa se kahdella pisteellä, siirrä, käännä, häivytä ja lukitse. Katso se 3D-näkymässä ja pohjakuvan PDF-tiedostossa, ja säilytä se mallin rinnalla kimpussa.
keywords: kuva, kuvat, tausta, PNG, JPEG, WebP, skannaus, luonnos, valokuva, ilmakuva, asemapiirros, mittakaava, läpinäkymättömyys, lukitse, alustakuva, jäljitys
from: e3c78d1f
---

## Sijoita kuva

Ota {{ui:Piirrä}} käyttöön, mene tasolle ja valitse {{ui:Koontiversio}}-valikosta {{ui:Kuva}}. Valitse sitten {{ui:Lisää kuva…}} ja valitse PNG-, JPEG- tai WebP-tiedosto. Selain lukee sen omalla koneellaan, eikä sitä ladata. Kuva ilmestyy pohjakuvan alle, sovitettuna näkymään, ja työkalurivi kertoo, ettei sitä ole vielä skaalattu. Kaikki piirtämäsi on kuvan päällä.

## Aseta mittakaava

Valitse {{ui:Mittakaava}}, napsauta kuvasta kahta pistettä, joiden todellinen etäisyys tunnetaan (seinän kaksi päätä skannatussa pohjakuvassa, luonnokseen painettu mitta), kirjoita sitten etäisyys ja paina {{key:Enter}}. Kuva kasvaa tai pienenee ensimmäisen napsauttamasi pisteen ympärillä. {{key:Esc}} peruuttaa.

## Liitä kopioitu alue

MarkupCraft-sovelluksessa {{ui:Kopioi alue}} kopioi osan PDF-levystä kuvana. Palaa BimCraft-ohjelmaan, kun tason pohjakuva näkyy, ja paina {{key:Ctrl+V}} (tai {{ui:Liitä}} {{ui:Muokkaa}}-valikosta): alue asettuu pohjakuvaan kuvana, keskitettynä osoittimen kohdalle (tai näkymän keskelle). Kun levyssä oli piirustuksen mittakaava, alue tulee oikeassa koossaan, joten sen seinä on yhtä pitkä kuin omasi. Ilman mittakaavaa se tulee paperikokoisena ja {{ui:Mittakaava}} käynnistyy, jotta voit napsauttaa kaksi pistettä ja kirjoittaa niiden etäisyyden. Päällekkäiseksi kopioitu alue alkaa sillä läpinäkymättömyydellä, jolla se kopioitiin. Se on yksi kumoamisaskel ja tallentuu kuten mikä tahansa kuva.

Liitä ottaa viimeksi kopioimasi: kopioidun alueen tai jotain, minkä kopioit BimCraft-ohjelmassa. {{key:Ctrl+V}} liittää myös muun PNG-, JPEG- tai WebP-kuvan leikepöydältäsi, sijoitettuna kuten {{ui:Lisää kuva…}}, eikä vielä skaalattuna. Kopioitu alue muistetaan kuusi tuntia.

## Siirrä, käännä, häivytä, lukitse

{{ui:Siirrä}} ottaa kuvasta peruspisteen ja sitten paikan, jonne se pitää viedä. {{ui:Käännä}} ottaa kulman asteina kuvan keskipisteen ympäri. {{ui:Läpinäkymättömyys}} häivyttää kuvan, jotta viivasi erottuvat. {{ui:Lukitse}} estää liikuttamasta sitä piirtäessä; lukittu kuva antaa silti muuttaa läpinäkymättömyyttä ja piilottaa sen. Jokainen muutos on yksi kumoamisaskel.

## Useita kuvia, useita tasoja

Kuva kuuluu tasolle, jolle se sijoitettiin, ja näkyy sen tason pohjakuvassa ja kattokuvassa. Napsauta kuvaa työstääksesi sitä, tai valitse se luettelosta. {{ui:Piilota}} kytkee sen pois näkyvistä poistamatta sitä; {{ui:Poista}} (tai {{key:Delete}}) vie sen pois mallista.

## Kuvat 3D-näkymässä

Jokainen kuva seisoo myös 3D-näkymässä tasona: pohjakuva makaa tasollaan, pystytasokuva seisoo leikkausviivansa päällä. Se piirtyy mallin päälle piilottamatta sitä, ja malli piilottaa kuvan osan, joka on sen takana. Päällekkäiset kuvat järjestyvät etäisyyden mukaan. Läpinäkymättömyys, Piilota, Lukitse ja Poista toimivat samoin, ja {{ui:Näytä 3D:ssä}} kytkee kaikki tasot pois vain 3D-näkymästä. Taso sisältää enintään 8 kuvaa, jotta näkymät pysyvät nopeina.

## Pystytasolla oleva kuva

Valitse {{ui:Sijoita kohteeseen}}-kohdasta {{ui:Pystytaso (leikkausviiva)}} ja sitten {{ui:Lisää kuva…}}. Napsauta pohjakuvasta kahta viivan päätepistettä (seinän pinnan päätepiste tarttuu), tai valitse tason nimetty leikkausviiva kohdasta {{ui:Leikkausviivan päällä}}, jolloin napsautuksia ei tarvita. Kuva seisoo tasolla kyseisen viivan päällä, yhtä leveänä kuin viiva. Aseta sen {{ui:Leveys}}, paikka {{ui:Viivaa pitkin}} ja {{ui:Korkeus tason yläpuolella}} kirjoittamalla; {{ui:Käännä}} kääntää sen omassa tasossaan. Pystykuvaa ei piirretä pohjakuvan alle; pohjakuva näyttää sen viivan, kun työstät sitä. BimCraft-ohjelmassa ei ole vielä interaktiivista 2D-leikkausikkunaa: leikkaukset ja julkisivut piirretään levyille, eikä kuvia tulosteta niissä vielä.

## Tulostus

{{ui:Tulostusnäkymä}} pohjakuvasta kirjoittaa tason kuvat PDF-tiedostoon piirustuksen alle, niiden mittakaavassa, kierrossa ja läpinäkymättömyydessä, leikattuna levyyn; piilotettu kuva jää pois. JPEG menee sellaisenaan; muut kuvat pienennetään ensin 200 dpi:n tarkkuuteen levyllä.

## Säilytetään mallin rinnalla

Kuvan tavuja ei kirjoiteta IFC-tekstiin. Malli viittaa jokaiseen nimellä (IfcDocumentReference, kuten pictures/<id>.png), ja tavut kulkevat projektikimpussa. Käytä {{ui:Tallenna kimppuna…}}-toimintoa (tai {{ui:Tallenna IFC-tiedostona}} ja valitse se): saat yhden .ccbundle-tiedoston, jossa ovat malli ja sen kuvat; IFC pysyy pienenä ja muokkaukset nopeina. Avaa .ccbundle, niin kuvat palaavat.

Tavallinen .ifc ei voi sisältää kuvia kasvamatta suureksi. Kun tallennat sellaisen, BimCraft kertoo, montako kuvaa on tallennettu sen ulkopuolelle, ja tarjoaa kimppua tai tavallista IFC:tä, joka upottaa kuvat enintään 512 KB:n kokoisina ja jättää muut pois. Tavallinen .ifc, joka avataan ilman kimppuaan, näyttää nuo kuvat puuttuvina, ja **Ongelmat** luettelee ne; avaa .ccbundle, johon ne tallennettiin. Ensimmäisen version tallentamat tiedostot, joissa kuva on IFC:n sisällä, avautuvat edelleen, ja kimppuun tallennus siirtää niiden kuvat ulos. Kuva säilyy sellaisenaan enintään 6 MB:n kokoisena; suurempi pienennetään ensin, ja siitä kerrotaan. Muut ohjelmat avaavat mallin ja jättävät kuvat huomiotta. Kuva, jota et ole vielä skaalannut, luetellaan **Ongelmat**-kohdassa huomautuksena.

## Leikkaus- ja julkisivulevyillä

Pystytasolla oleva kuva (valitse kuvapaneelista {{ui:Pystysuora}} ja napsauta viivan kahta päätepistettä, tai sijoita se nimetyn leikkausviivan päälle) tulostuu niihin levynäkymiin, jotka katsovat sitä suoraan. Leikkaus näyttää kuvan, joka seisoo sen leikkausviivalla tai joka sijoitettiin nimeltä sen leikkausviivan päälle. Julkisivu näyttää jokaisen pystykuvan, jonka taso on sitä kohti. Kuva piirretään näkymän viivojen alle, näkymän mittakaavassa, leikattuna näkymään, ja se säilyttää läpinäkymättömyytensä. Avaa {{ui:Levyt…}} nähdäksesi sen; levyn PDF kantaa sen kuvana. Takaa katsottuna kuva on peilattu, kuten 3D-näkymässä. Piilotetut kuvat jätetään pois.
