---
title: Változatokkal rendelkező könyvtári elem elhelyezése és cseréje
summary: Néhány könyvtári elem több méretben vagy lehetőségben érkezik. Válassza ki a változatot elhelyezés előtt, nézze meg, melyik változat az elhelyezett elem, cserélje ki egy kattintással másikra, és az elem frissítésekor is megmarad.
keywords: változat, változatok, méretek, lehetőségek, konfiguráció, könyvtár, LibraryCraft, elhelyezés, csere, konfigurátor, család, típus, frissítés, csatlakozók
from: c05f0af3
---

## Mit fog csinálni

Helyezzen el egy könyvtári elemet a szükséges méretben vagy lehetőségben, és később gondolja meg magát anélkül, hogy újra el kellene helyeznie. A változatokkal rendelkező elem egyetlen elem a könyvtárban (egy név, egy licenc, egy verzió), a belőle elérhető változatok táblázatával: például egy rögzítőlemez kicsi, közepes és nagy méretben, vagy ugyanez a lemez lyukak nélkül.

## A változat kiválasztása és elhelyezése

1. Nyissa meg a {{ui:Könyvtár}} fület, és kattintson az elem kártyájára.
2. A név alatt a {{ui:Változat}} választás felsorolja az összes változatot a méretükkel. Az elem alapértelmezett változata van először kiválasztva.
3. Válasszon egyet. Az alaprajz, a méret és a 3D test sora az Ön választását követi.
4. Kattintson az {{ui:Elhelyezés alaprajzon}} gombra (vagy a 3D nézetben az {{ui:Elhelyezés modellben}} gombra), és helyezze el úgy, mint bármely elemet: lásd [Berendezések és bútorok elhelyezése a könyvtárból](topic:place-from-library).

Az elhelyezett elem az elem és a változat nevét kapja, például *Rögzítőlemez — Nagy*, így a Berendezések kimutatása és a fa megkülönbözteti őket. Minden változat saját IFC-típus: ugyanazt a változatot kétszer elhelyezve egy típust oszt meg, egy másik változat saját típust kap.

## Az elhelyezett elem változatának megnézése

Válassza ki az elemet. A **Tulajdonságok** részben a **Könyvtári elem** mezőben van egy **Változat** sor. Az IFC a `CadCraft_LibraryItem`-ben tárolja: `Variant` (a változat azonosítója), `VariantName` és `VariantValues` (a lehetőségek értékei, szövegként), hogy más programok is olvashassák.

## Csere másik változatra

1. Válassza ki az elhelyezett elemet, és kattintson a **Könyvtári elem** mezőben az {{ui:Elem cseréje…}} gombra. A {{ui:Könyvtár}} fül megnyílik.
2. Felül, az **Ennek az elemnek más változatai** listában minden változat szerepel a méretével. Az elhelyezett változat meg van jelölve, és nem választható ki.
3. Kattintson a kívánt változat mellett a {{ui:Csere erre …}} gombra.

Az elem megtartja helyét, elforgatását, szintjét, elemszámát, mennyiségét és megjegyzéseit; típusa, alakja és adatai a másik változatra változnak. A {{key:Mod+Z}} visszahozza az előző változatot. Továbbra is választhat bármely más elemet az alatta lévő listából, ahogy korábban is: lásd [Elhelyezett elem cseréje és könyvtári elemek frissítése](topic:swap-and-update-library-items).

## Másolás, beillesztés és frissítések

- Az elhelyezett változat másolata ugyanaz a változat: ebben a modellben és a böngésző ugyanazon lapján megnyitott másik modellben is, a Másolás és Beillesztés révén.
- A **frissítések** megtartják a változatot: ha az elem újabb verziója még tartalmazza, az elhelyezés az új verzió adott változatává válik. Ha az új verzióban már nincs meg, az elhelyezés az elem alapértelmezett változatát kapja.

## Jó tudni

- Csak néhány könyvtári elemnek van változata. A kártyák nem mondják meg; a {{ui:Változat}} választás akkor látszik, ha megnyit egyet.
- Egy elem felsorolhat **csatlakozókat** (csővezetékek és légcsatornák csatlakozási pontjait) változatonként. A Könyvtár fül megmutatja, hány van egy változathoz. Ezeket egyelőre nem írja az IFC-be, amikor a Könyvtár fülről helyezi el az elemet.
- A változat 3D test nélkül helyőrző dobozként kerül elhelyezésre, ahogy minden 2D szimbólum is.
- A választás méretei milliméterben vannak, ahogy a könyvtár írja.
