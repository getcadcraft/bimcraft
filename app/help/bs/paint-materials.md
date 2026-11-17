---
title: Bojenje materijala na zidove, podove i krovove
summary: Dajte elementima materijal kao što su cigla, fasadna obloga, šindra, drvo ili pločica, na cijelom elementu ili na jednoj strani, sačuvan u IFC-u i prikazan u renderovanim slikama.
keywords: boja, bojenje, materijal, materijali, završna obrada, završne obrade, tekstura, cigla, fasadna obloga, šindra, krovni pokrivač, drvo, kamen, pločica, beton, štuk, trava, šljunak, staklo, metal, strana zida, unutra, spolja, završna obrada poda, prostorija, stil površine
from: fbfed676
---

{{ui:Boji}} na alatnoj traci otvara biblioteku materijala preko 3D prikaza: cigla i blok, fasadna obloga, krovni pokrivač, drvo, kamen, pločica, beton, štuk, teren, staklo i metal.

## Bojenje elemenata

1. Kliknite {{ui:Boji}}.
2. Kliknite materijal.
3. Kliknite elemente u 3D prikazu. Svaki klik boji element na koji ste kliknuli.

Da obojite mnogo elemenata odjednom, prvo ih odaberite (klikom, {{key:Ctrl}}+klik ili [pretragom](topic:find)), pa kliknite materijal: svaki odabrani element ga preuzima u jednom koraku.

Element odmah prikazuje boju materijala u 3D prikazu. Njegova tekstura se prikazuje u [renderovanoj slici](topic:render). {{key:Esc}} ili {{ui:Zatvori}} završava bojenje.

## Bojenje jedne strane

Odaberite {{ui:Samo kliknuta strana}}, pa kliknite stranu koju želite: vanjsku stranu zida u fasadnoj oblozi a unutrašnju u drugoj završnoj obradi, ili gornju stranu poda u drvetu dok mu donja strana ostaje kakva jeste. Ostatak elementa zadržava svoj materijal.

Strana se nalazi prema samom smjeru elementa, pa ostaje ista strana kada pomjerite ili okrenete element.

Da biste bojili podove prostoriju po prostoriju, dajte svakoj prostoriji njen pod ({{ui:Crtanje}} › {{ui:Pod}} › **Ova prostorija**, vidite [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs)), pa obojite gornju stranu svakog poda.

## Skidanje materijala

Kliknite prugasti uzorak ({{ui:Bez materijala}}), pa kliknite element. Svaki materijal na njemu, uključujući strane, se uklanja.

## U datoteci

Bojenje mijenja IFC (svaki korak pojedinačno, {{key:Ctrl+Z}} ga poništava) i ostaje običan IFC:

- svaki obojeni element dobija skup svojstava `CadCraft_Render` koji navodi njegov materijal, i po jedno svojstvo za svaku obojenu stranu;
- njegovo tijelo dobija stil površine sa bojom materijala, pa ga drugi BIM programi prikazuju u boji. U IFC4 stil takođe navodi teksturu.

Kada BimCraft preoblikuje zid koji ste obojili (na primjer, pomjerite mu kraj), zid zadržava svoj materijal i boju, u BimCraft-u, na slikama i u drugim programima.

:::note
Teksture crta sam BimCraft: rade bez mreže i slobodne su za upotrebu za bilo šta (CC0). Vaše sopstvene slikovne teksture još nisu napravljene.
:::

## Teksture u 3D prikazu

Obojeni zid od cigle prikazuje svoje cigle, a drveni pod svoje daske, u njihovoj stvarnoj veličini, čim je boja nanesena. Isključite **Prikaži teksture u 3D prikazu** u paleti Boji da vidite ravne boje umjesto toga (vrlo veliki model ih sam isključuje i to kaže). Boja po svojstvu uvijek prikazuje svoje boje. Teksture crta program, pa se ništa ne preuzima, a renderi i glTF datoteka ih nose u svakom slučaju.
