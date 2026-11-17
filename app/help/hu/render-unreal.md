---
title: Jelenet küldése játékmotornak
summary: A Studio beírhatja a jelenetet egy Unreal Engine-projektbe, és minden küldéskor szinkronban tartja; a saját szerkesztései egy rétegben élnek, amelyet a CadCraft soha nem ír. Az azt megnyitó beépülő modul még nincs kiadva.
keywords: unreal, unreal engine, játékmotor, hivatkozás, küldés, usd stage, projekt, live, cine kamera, filmrenderelési sor
from: 154d55ef
---

A CadCraft Studióban a Motor lista tartalmazhat **hivatkozást** egy Unreal Engine-projektre. Csak egy irányban: a CadCraftból az Unrealbe.

## Jelenet küldése

1. Válassza az Unreal bejegyzést a Motor listában. Első alkalommal a Studio megkéri, hogy válassza ki a projekt mappáját (amelyben a `.uproject` fájl van); megjegyzi.
2. Kattintson a {{ui:Send}} gombra. A Studio a projekten belül a `CadCraft/<file name>/` mappát írja: a jelenetet USD-fájlként, a beállításfájlt, a fényprofilokat és két kis rétegfájlt.
3. Módosítsa a modellt, mentse, és küldje újra. Csak a jelenet és a beállításfájl cserélődik le.

## A saját szerkesztései biztonságban vannak

A stage, amelyet az Unreal megnyit, egy egyszer létrehozott kis gyökérréteg, alatta két réteggel: **a saját rétege** felül (`<name>.user.usda`, kezdetben üres, a CadCraft soha nem írja felül), és a CadCraft jelenete alatta. A saját rétegébe mentett szerkesztések megmaradnak, amikor a jelenetet újra elküldi. Az Unreal-pályán elhelyezett fények és más aktorok a stage-en kívül esnek, őket sem érinti.

## Studio nélkül

A böngészőben, vagy olyan számítógépen, ahol a Studio nem talál Unrealt, válassza az **Unreal project folder (.zip)** bejegyzést a Motor listában, és kattintson a {{ui:Render}} gombra. Ugyanazt a mappát zip-ként menti: csomagolja ki a projekt `CadCraft` mappájába. Első alkalommal hagyja bekapcsolva a **Stage-fájlok belefoglalása** beállítást; a későbbi mentéseknél kapcsolja ki, így a zip csak a jelenetet és a beállításfájlt tartalmazza, és a saját rétege soha nem íródik felül.

:::note
Az Unreal-beépülő modul, amely megnyitja a stage-et, alkalmazza a napot, a lámpákat, a kamerákat és az expozíciót, minden küldést követ, és kamerából renderel, **még nincs kiadva**, és nem futtatták az Unrealben. Addig a Küldés a fájlokat a projektbe teszi, és az Unreal saját USD-eszközei megnyithatják őket. A Windows az első rendszer; a macOS később következik.
:::
