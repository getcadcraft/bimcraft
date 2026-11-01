---
title: BimCraftin aloitusopas
summary: Mitä BimCraft tekee nyt, miten avaat ensimmäisen mallin, katselet sitä 3D:nä, muutat yhden arvon ja tallennat kopion.
keywords: aloitus, ensimmäinen käyttökerta, avaa, ifc, rvt, dwg, pikaopas, johdanto, katselu, bim
from: fc2dea19
---

BimCraft on CadCraft-perheen rakennusmallisovellus. Tässä versiossa se **avaa, lukee ja tarkastaa** rakennustiedostoja ja **muokkaa IFC-mallien tietoja**. Se ei vielä piirrä eikä mallinna uusia rakennusosia. Ajattele sitä mallikatselimena ja -tarkastimena, jolla voi myös korjata IFC-tiedoston nimiä, tunnisteita ja ominaisuusarvoja.

Mitä se avaa:

| Tiedosto | Mitä saat |
|---|---|
| IFC (`.ifc`) | Koko malli 3D:nä: kierto, kerrokset, rakennusosien ominaisuudet sekä nimien ja ominaisuusarvojen muokkaus |
| Projekti- ja perhetiedostot (`.rvt`, `.rfa`, `.rte`, `.rft`) | Tiedostokortti: julkaisu, jossa se tallennettiin, projektin tiedot, esikatselukuva ja linkitetyt tiedostot. Ei 3D:tä. |
| DWG ja DXF | Piirustus 2D:nä: mallitila ja kaikki arkit, tasot, linkitetyt piirustukset, tulostusnäkymä sekä laiteluettelo merkityistä ruokapalvelupiirustuksista |
| Projektikansio | Raportti kansion kaikista malleista: varmuuskopiot, linkit, vioittuneet kopiot ja ehdotus siitä, mistä tiedostosta kannattaa aloittaa |

Kaikki tapahtuu selaimessasi, omalla tietokoneellasi. **Mitään ei lähetetä.** Katso lisätietoja aiheesta [Tiedostot, jotka BimCraft avaa ja tallentaa](topic:files).

## Avaa BimCraft

1. Avaa BimCraft ajantasaisessa selaimessa. Chrome, Edge, Firefox ja Safari toimivat kaikki; [Selaimet, laitteet ja muisti](topic:platforms) luettelee erot.
2. Odota tyhjää näyttöä, jossa lukee "Avaa rakennusmalli."

:::note
BimCraft toimii selaimessa ja työpöydällä CadCraft Studion sisällä muiden sovellusten kanssa. Pilvitallennus ei ole vielä käytettävissä: avaat tiedostoja tietokoneeltasi ja tallennat kopiot takaisin sinne.
:::

## Avaa ensimmäinen mallisi

Nopein tapa nähdä, mitä BimCraft tekee, on IFC-tiedosto.

1. Napsauta {{ui:Valitse tiedosto}} näytön keskellä.
2. Valitse `.ifc`-tiedosto kohteessa {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} ja vahvista.
3. Odota, kun näytön alareunan tilarivillä lukee "Käynnistetään IFC-moottoria…" ja sitten "Rakennetaan geometriaa".

Näet mallin 3D:nä keskellä, vasemmalla {{ui:Tiedosto}}-paneelin ja {{ui:Kerrokset}}-luettelon sekä oikealla tyhjän {{ui:Ominaisuudet}}-paneelin. Tilarivin lopussa lukee "Avattu" ja rakennusosien määrä.

:::tip
Voit myös vetää tiedoston kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} suoraan sivulle. Näytössä lukee "Pudota avataksesi", kun vedät.
:::

:::offline
IFC-moottori ladataan sivustolta, kun avaat IFC-mallin ensimmäisen kerran, ellei BimCraftia ole tallennettu offline-käyttöön. DWG- ja DXF-piirustukset, projektitiedostot ja kansiot eivät tarvitse mitään ylimääräistä: niiden lukijat ovat osa sovellusta. Jos sovelluspalkin painikkeessa lukee {{ui:Offline valmis}}, kaikki avautuu offline-tilassa. Jos ei, IFC-malleja ei voi avata ennen kuin yhteys palaa, ellei yksi ole jo avattu tässä välilehdessä. Katso [Online ja offline](topic:online-offline).
:::

:::online
Oletko menossa paikkaan, jossa ei ole yhteyttä? Napsauta sovelluspalkissa {{ui:Tallenna offline-käyttöön}} ja odota, kunnes lukee {{ui:Offline valmis}}. Tallennettu kopio (noin 11 Mt) sisältää IFC-moottorin. Katso [Työskentely offline-tilassa](common:offline).
:::

## Katsele ympärille

:::mouse
1. Kierrä mallia vetämällä hiiren vasemmalla painikkeella.
2. Zoomaa vierittämällä rullaa.
3. Panoroi vetämällä hiiren oikealla painikkeella. Macin ohjauslevyllä pidä sen sijaan {{key:Shift}} alhaalla ja vedä.
4. Paina {{key:F}} tai napsauta {{ui:Sovita}}, niin näet koko mallin uudelleen.
:::

:::touch
1. Kierrä vetämällä yhdellä sormella.
2. Zoomaa nipistämällä kahdella sormella ja panoroi liikuttamalla kahta sormea yhdessä.
3. Napauta {{ui:Sovita}}, niin näet koko mallin uudelleen.
:::

## Tee yksi oikea asia: korjaa tunniste

1. Napsauta seinää, ovea tai mitä tahansa mallin rakennusosaa. Se muuttuu siniseksi, ja sen ominaisuudet tulevat näkyviin oikealle.
2. Napsauta {{ui:Ominaisuudet}}-paneelissa **Tunniste**-kentän arvoa.
3. Kirjoita uusi tunniste ja paina {{key:Enter}}.
4. Katso vasemmalla avautunutta {{ui:Muutokset}}-osiota: muutoksesi on luettelossa vanhoine ja uusine arvoineen.

## Tallenna kopio

1. Napsauta {{ui:Tallenna IFC-tiedostona}} {{ui:Muutokset}}-osiossa tai paina {{key:Mod+S}}.
2. Etsi uusi tiedosto latauskansiostasi. Sen nimi on alkuperäinen nimi, johon on lisätty " (edited)", esimerkiksi `Clinic (edited).ifc`.

Alkuperäistä tiedostoasi ei koskaan muuteta. [Muuta IFC-ominaisuuksia ja tallenna muokattu kopio](topic:edit-ifc-properties) selittää muokkauksen kokonaan.

## Mihin seuraavaksi

- [BimCraftin näyttö](topic:workspace): jokainen paneeli nimeltä.
- [Tulossa muista BIM- ja piirustusohjelmista](topic:coming-from): mikä tuntuu erilaiselta, jos olet tottunut Revitiin.
- [Avaa koko projektikansio](topic:open-project-folder): osoita BimCraft projektikansioon ja anna sen lajitella tiedostot.
- [Katsele DWG- tai DXF-piirustusta](topic:view-dwg): arkit, tasot ja tulostusnäkymä.
