---
title: Aloita uusi rakennus
summary: Luo tyhjä rakennusmalli tasoineen, piirrä seinät, sijoita kohteita kirjastosta ja tallenna IFC-tiedostona.
keywords: uusi, uusi rakennus, tyhjä, aloita alusta, pohja, tasot, kerrokset, lattiat, luo, malli
from: 546b8ae8
---

## Mitä teet

Aloita rakennusmalli tyhjästä sen sijaan, että avaisit olemassa olevan. BimCraft luo tyhjän IFC-mallin, jossa on projekti, tontti, rakennus ja sen tasot. Voit sijoittaa kirjastosta laitteita ja kalusteita tasoille ja tallentaa mallin IFC-tiedostona.

:::note
Seiniä voi piirtää jo nyt: katso [Piirrä seiniä](topic:draw-walls). Ovet, ikkunat, lattiat ja katot toteutetaan seuraavaksi.
:::

## Vaiheet

1. Napsauta {{ui:Uusi rakennus}} kohdassa **Avaa tiedosto tai kansio** tai aloitussivulla.
2. Kirjoita **Rakennuksen nimi**.
3. Valitse, montako **Tasoa** rakennuksessa on (1-200).
4. Kirjoita **Tason korkeus** lattiasta lattiaan: esimerkiksi `10'-0"`, `10'6"` tai `3000 mm`. Pelkkä luku tarkoittaa jalkoja Yhdysvalloissa ja millimetrejä muualla.
5. Napsauta {{ui:Luo}}. Tasot pinotaan nollasta alkaen, kukin yhden tason korkeuden edellisen yläpuolelle, ja ne nimetään Taso 1, Taso 2 ja niin edelleen. Ne näkyvät mallipuussa, ja Tason 1 pohjakuva avautuu 3D-näkymän viereen niin, että {{ui:Piirrä}} on päällä.
6. Piirrä seinät: katso [Piirrä seiniä](topic:draw-walls). Nimeä tasoja uudelleen tai muuta niiden korkeuksia **Tasot**-paneelissa.
7. Sijoita kohteita: katso [Sijoita laitteita ja kalusteita kirjastosta](topic:place-from-library). Sijoituspalkissa on kaikki tasot.
8. Napsauta {{ui:Tallenna IFC-tiedostona}}. Tiedosto nimetään rakennuksen mukaan, esimerkiksi `Smith's house.ifc`.

## Hyvä tietää

- Malli tallennetaan millimetreinä IFC4-muodossa. Muut BIM-ohjelmat voivat avata sen.
- Vasemman paneelin **Kerrokset** luettelee vain ne tasot, joilla on jotakin. Mallipuu luettelee kaikki.
- Ennen tallennusta uusi rakennus lasketaan tallentamattomaksi työksi. BimCraft kysyy ennen toisen tiedoston avaamista tai sivulta poistumista ja säilyttää kopion tässä selaimessa siltä varalta, että välilehti suljetaan.
