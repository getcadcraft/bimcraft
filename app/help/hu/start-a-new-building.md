---
title: Új épület indítása
summary: Üres épületmodell készítése a szintjeivel, a falak megrajzolása, elemek elhelyezése a könyvtárból, és mentés IFC-ként.
keywords: új, új épület, üres, nulláról indítás, sablon, szintek, emeletek, létrehozás, modell
from: 546b8ae8
---

## Mit fog tenni

Épületmodellt indít a semmiből, megnyitás helyett. A BimCraft üres IFC-modellt készít egy projekttel, egy telekkel, az épülettel és a szintjeivel. A szinteken a könyvtárból berendezéseket és bútorokat helyezhet el, a modellt pedig IFC-fájlként mentheti.

:::note
A falak már rajzolhatók: lásd [Falak rajzolása](topic:draw-walls). Az ajtók, ablakok, födémek és tetők készítése a következő lépés.
:::

## Lépések

1. Kattintson a **Fájl vagy mappa megnyitása** alatt vagy a kezdőlapon az {{ui:Új épület}} gombra.
2. Írja be az **Épület nevét**.
3. Válassza ki a **Szintek** számát (1-től 200-ig).
4. Írja be a **Szintmagasságot**, padlótól padlóig: például `10'-0"`, `10'6"` vagy `3000 mm`. Szám egyedül az Egyesült Államokban láb, máshol milliméter.
5. Kattintson a {{ui:Létrehozás}} gombra. A szintek 0-tól egymás fölé kerülnek, mindegyik egy szintmagassággal az előző fölött, és Level 1, Level 2 stb. nevet kapnak. A modellfában láthatók, és az 1. szint alaprajza megnyílik a 3D nézet mellett, a {{ui:Rajzolás}} bekapcsolva.
6. Rajzolja meg a falakat: lásd [Falak rajzolása](topic:draw-walls). A szintek átnevezése és magasságuk módosítása a **Szintek** panelen történik.
7. Helyezzen el elemeket: lásd [Berendezések és bútorok elhelyezése a könyvtárból](topic:place-from-library). Az elhelyezősáv minden szintet felsorol.
8. Kattintson a {{ui:Mentés IFC-ként}} gombra. A fájl az épület nevét viseli, például `Smith's house.ifc`.

## Jó tudni

- A modell milliméterben, IFC4-ként mentődik. Más BIM-programok is megnyitják.
- A bal oldali **Szintek** csak azokat a szinteket sorolja fel, amelyeken van valami; a modellfa mindet megmutatja.
- A mentésig az új épület nem mentett munkának számít. A BimCraft rákérdez, mielőtt másik fájlt nyit meg vagy elhagyja az oldalt, és másolatot tart ebben a böngészőben arra az esetre, ha a lap bezárulna.
