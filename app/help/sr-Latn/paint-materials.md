---
title: Nanošenje materijala na zidove, podove i krovove
summary: Dajte elementima materijal kao što su cigla, obloga, šindra, drvo ili pločica, na celom elementu ili na jednoj strani, sačuvan u IFC i prikazan na renderovanim slikama.
keywords: boji, boja, materijal, materijali, završna obrada, završne obrade, tekstura, cigla, blok, obloga, šindra, krovni pokrivač, drvo, kamen, pločica, beton, malter, tlo, staklo, metal, strana zida, unutra, spolja, završna obrada poda, prostorija, stil površine
from: fbfed676
---

{{ui:Boji}} na traci sa alatkama otvara biblioteku materijala preko 3D prikaza: cigla i blok, obloga, krovni pokrivač, drvo, kamen, pločica, beton, malter, tlo, staklo i metal.

## Bojenje elemenata

1. Kliknite {{ui:Boji}}.
2. Kliknite materijal.
3. Kliknite elemente u 3D prikazu. Svaki klik boji element na koji ste kliknuli.

Da biste obojili mnogo elemenata odjednom, prvo ih izaberite (klik, {{key:Ctrl}}+klik, ili [pretraga](topic:find)), pa kliknite materijal: svaki izabrani element ga dobija u jednom koraku.

Element odmah prikazuje boju materijala u 3D prikazu. Njegova tekstura se vidi na [renderovanoj slici](topic:render). {{key:Esc}} ili {{ui:Zatvori}} završava bojenje.

## Bojenje jedne strane

Izaberite {{ui:Samo kliknuta strana}}, pa kliknite stranu koju želite: spoljašnost zida u oblozi i njegovu unutrašnjost u drugoj završnoj obradi, ili gornju stranu poda u drvetu dok donja ostaje kakva jeste. Ostatak elementa zadržava svoj materijal.

Strana se pronalazi iz sopstvenih pravaca elementa, pa ostaje ista strana kada ga pomerate ili okrećete.

Da biste bojili podove prostorija jednu po jednu, dajte svakoj prostoriji njen pod ({{ui:Crtanje}} › {{ui:Pod}} › **Ova prostorija**, pogledajte [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs)), pa obojite gornju stranu svakog poda.

## Skidanje materijala

Kliknite prugasti uzorak ({{ui:Bez materijala}}), pa kliknite element. Svaki materijal na njemu, uključujući strane, se uklanja.

## U datoteci

Bojenje menja IFC (jedan korak svaki put, {{key:Ctrl+Z}} ga poništava) i ostaje običan IFC:

- svaki obojeni element dobija skup svojstava `CadCraft_Render` koji navodi njegov materijal, i jedno svojstvo po obojenoj strani;
- njegovo telo dobija stil površine sa bojom materijala, pa drugi BIM programi prikazuju boju. U IFC4 stil takođe navodi teksturu.

Kada BimCraft preoblikuje zid koji ste obojili (na primer, pomerite mu kraj), zid zadržava svoj materijal i boju, u BimCraft-u, na slikama i u drugim programima.

:::note
Teksture crta sam BimCraft: rade van mreže i besplatne su za upotrebu bilo čime (CC0). Vaše sopstvene slikovne teksture još nisu dostupne.
:::

## Teksture u 3D prikazu

Obojeni zid od cigle prikazuje svoje cigle, a drveni pod svoje daske, u njihovoj stvarnoj veličini, čim je boja nanesena. Isključite **Prikaži teksture u 3D prikazu** u paleti Boji da biste umesto toga videli ravne boje (vrlo velik model ih sam isključuje i to kaže). Bojenje po svojstvu uvek prikazuje sopstvene boje. Teksture crta program, pa se ništa ne preuzima, a renderi i glTF datoteka ih nose u svakom slučaju.
