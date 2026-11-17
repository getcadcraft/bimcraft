---
title: Nanesite materijale na zidove, podove i krovove
summary: Dodijelite elementima materijal kao što su opeka, obloga, šindra, drvo ili pločica, na cijeli element ili na jednu stranu, spremljen u IFC i prikazan u renderiranim slikama.
keywords: boja, bojanje, materijal, materijali, završna obrada, tekstura, opeka, obloga, šindra, krovni pokrov, drvo, kamen, pločica, beton, žbuka, trava, šljunak, staklo, metal, strana zida, unutra, izvana, završna podna obrada, prostorija, stil površine
from: fbfed676
---

{{ui:Boja}} na alatnoj traci otvara biblioteku materijala preko 3D prikaza: opeka i blok, obloga, krovni pokrov, drvo, kamen, pločica, beton, žbuka, teren, staklo i metal.

## Bojanje elemenata

1. Kliknite {{ui:Boja}}.
2. Kliknite materijal.
3. Kliknite elemente u 3D prikazu. Svaki klik oboji element na koji kliknete.

Da biste obojili mnogo elemenata odjednom, prvo ih odaberite (klikom, {{key:Ctrl}}+klik ili [pretragom](topic:find)), zatim kliknite materijal: svaki odabrani element preuzima ga u jednom koraku.

Element odmah prikazuje boju materijala u 3D prikazu. Njegova tekstura prikazuje se u [renderiranoj slici](topic:render). {{key:Esc}} ili {{ui:Zatvori}} završava bojanje.

## Bojanje jedne strane

Odaberite {{ui:Samo kliknutu stranu}}, zatim kliknite stranu koju želite: vanjsku stranu zida u oblozi, a unutarnju u drugoj završnoj obradi, ili gornju stranu poda u drvu, uz donju ostavljenu kakva jest. Ostatak elementa zadržava svoj materijal.

Strana se određuje iz vlastitih smjerova elementa, pa ostaje ista strana kad element pomičete ili zakrećete.

Da biste bojili podove prostoriju po prostoriju, dajte svakoj prostoriji vlastiti pod ({{ui:Crtanje}} › {{ui:Pod}} › **Ova prostorija**, pogledajte [Prostorije, podovi, stropovi i krovovi](topic:floors-and-roofs)), zatim obojite gornju stranu svakog poda.

## Uklanjanje materijala

Kliknite prugasti uzorak ({{ui:Bez materijala}}), zatim kliknite element. Svaki materijal na njemu, uključujući strane, nestaje.

## U datoteci

Bojanje mijenja IFC (svaki korak posebno, {{key:Ctrl+Z}} ga poništava) i ostaje običan IFC:

- svaki obojeni element dobiva skup svojstava `CadCraft_Render` koji navodi njegov materijal, i po jedno svojstvo za svaku obojenu stranu;
- njegovo tijelo dobiva stil površine s bojom materijala, pa ga drugi BIM programi prikazuju u toj boji. U IFC4 stil također navodi teksturu.

Kad BimCraft preoblikuje zid koji ste obojili (recimo, pomaknete mu kraj), zid zadržava svoj materijal i boju, u BimCraftu, na slikama i u drugim programima.

:::note
Teksture crta sam BimCraft: rade bez veze s mrežom i slobodne su za upotrebu bilo čega (CC0). Vaše vlastite slikovne teksture još nisu izrađene.
:::

## Teksture u 3D prikazu

Obojeni zid od opeke prikazuje svoje opeke, a drveni pod svoje daske, u stvarnoj veličini, čim je boja nanesena. Isključite **Prikaži teksture u 3D prikazu** u paleti Boja da biste umjesto toga vidjeli ravne boje (vrlo velik model ih sam isključuje i to kaže). Boja prema svojstvu uvijek prikazuje svoje boje. Teksture crta program, pa se ništa ne preuzima, a renderi i glTF datoteka ih u svakom slučaju nose.
