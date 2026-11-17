---
title: IFC-vienti projektitiedostosta
summary: IFC-viennin asetukset, joilla tulos avautuu parhaiten (versio, ominaisuusjoukot, perussuureet, huoneet, linkitetyt mallit, koordinaatit), tuloksen avaaminen ja se, mitä vienti säilyttää.
keywords: vienti, IFC-vienti, rvt, muunna, 3D, geometria, IFC2X3, IFC4, koordinointinäkymä, viitenäkymä, suunnitteluvientinäkymä, ominaisuusjoukot, perussuureet, huoneet, tilat, linkitetyt tiedostot, jaetut koordinaatit, mittauspiste, projektin peruspiste, asetukset
from: 3efd5fc9
---

## Mitä teet

Muunna projektitiedosto IFC-tiedostoksi, jota voi kiertää, tarkastella, tarkistaa ja muokata. BimCraft ei vielä lue `.rvt`-tiedoston sisällä olevaa 3D-mallia, joten vienti tehdään siinä ohjelmassa, joka on tiedoston tehnyt (Revit); BimCraft avaa tuloksen.

## Vaiheet

1. Avaa projekti siinä ohjelmassa, joka on sen tehnyt. Tiedostokortti nimeää julkaisuversion, jolla tiedosto on tallennettu.
2. Avaa 3D-näkymä, joka näyttää sen, minkä haluat viedä.
3. Valitse **File > Export > IFC**.
4. Valitse viennin valintaikkunasta asetus (tai **Modify setup…**), jossa ovat alla olevat asetukset.
5. Valitse kansio ja tiedostonimi ja vie.
6. Napsauta {{ui:Valitse tiedosto}} ja valitse uusi `.ifc`-tiedosto. Linkitetyt mallit, jotka on viety omina tiedostoinaan, avautuvat samaan näkymään {{ui:Lisää malli}}-painikkeella.

## Asetukset, joilla tulos avautuu parhaiten

| Viennin asetus | Valitse | Miksi |
|---|---|---|
| IFC-versio | **IFC4 Reference View** katseluun, tarkistukseen ja määrälaskentaan; **IFC2X3 Coordination View 2.0**, kun muut tarvitsevat IFC2X3:a | Molemmat avautuvat täysin. **IFC4 Design Transfer View** avautuu myös, tarkemmilla muodoilla, mutta tiedosto on suurempi ja hitaampi. |
| Tiedostotyyppi | **IFC** (tavallinen) | BimCraft ei avaa `.ifczip`- eikä `.ifcxml`-tiedostoja. |
| Vaihe / näkyvät elementit | Haluamasi vaihe ja **Export only elements visible in view**, kun asetat 3D-näkymän sitä varten | Jättää pois ne, jotka piilotit tarkoituksella. |
| Ominaisuusjoukot | **Export Revit property sets** ja **Export IFC common property sets** | Niistä tulee ominaisuusjoukot, joita {{ui:Ominaisuudet}}-paneelissa näytetään ja joita {{ui:Etsi}}, {{ui:Väri}} ja {{ui:Mallintarkastukset}} käyttävät. |
| Perussuureet | **Export base quantities** | {{ui:Määrät yhteensä}} ja luettelot käyttävät niitä (pituudet, pinta-alat, tilavuudet) arvaamisen sijaan. |
| Huoneet ja alueet | **Export rooms in 3D views** (tai Rooms- / Spaces-valinta) | Huoneet tulevat tiloina: napsauta {{ui:Tilat}} nähdäksesi ne. |
| Linkitetyt tiedostot | **Export linked files as separate IFCs** | Jokainen linkki tulee omaksi tiedostokseen; avaa ne yhdessä {{ui:Lisää malli}}-painikkeella, niin ne asettuvat kohdalleen. |
| Koordinaattiperusta | **Shared coordinates** (tai mittauspiste) | Tiedostossa on silloin paikka kartalla (IfcMapConversion), joten Measure › Location, maastokartan tasot ja kartta-koordinaateilla sijoitetut pistepilvet toimivat. Projektin peruspiste pitää mallin lähellä origoa, mutta ilman kartalla olevaa paikkaa. |
| Jaa seinät ja pilarit tasoittain | Päällä, kun laadit määrälaskennan kerroksittain | Jokaisen kerroksen osa on oma elementtinsä. |

## Mitä pitäisi näkyä

Malli 3D:nä, kerrokset projektin tasoista ja projektitiedot {{ui:Tiedosto}}-paneelissa. **Vientilähde** nimeää viejän.

## Mitä vienti säilyttää ja mitä ei

- **Säilyy**: geometria, kerrokset, elementtilajit, nimet, tyypit, useimmat parametrit (ominaisuusjoukkoina), perussuureet pyydettäessä, huoneet tiloina ja kartalla oleva paikka jaettujen koordinaattien kanssa.
- **Ei säily**: näkymät, arkit, merkinnät, perheet muokattavina perheinä, työjoukot ja suunnitteluvaihtoehdot. IFC-tiedosto on pikakuva mallin elementeistä, ei projektista. Arkkeja varten vie DWG ja avaa se 2D-näkymässä.

## Yleiset virheet

- **Parametrit puuttuvat.** Ota yllä olevat ominaisuusjoukkovalinnat käyttöön ja vie uudelleen.
- **Huoneet puuttuvat.** Ota huonevalinta käyttöön ja napsauta sitten {{ui:Tilat}}.
- **Tallennus `.ifczip`-muodossa.** Valitse tavallinen IFC tai pura `.ifczip`-tiedosto.
- **Kartalla ei ole paikkaa.** Vie jaetuilla koordinaateilla ja tarkista, että projektin mittauspiste on asetettu.
- **Muutosten odotetaan siirtyvän takaisin.** Tallennetut muutokset menevät uuteen IFC-tiedostoon, eivät projektitiedostoon.
