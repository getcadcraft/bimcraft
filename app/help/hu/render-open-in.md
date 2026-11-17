---
title: A jelenet megnyitása másik programban
summary: A jelenet mentése USD- vagy glTF-fájlként bármely olyan programhoz, amely ezeket olvassa, vagy megnyitása a Studióból egy programban ezen a számítógépen.
keywords: megnyitás programban, usd, gltf, glb, export, renderelő program, archviz, studio, usdview, küldés, átadás, csomag, unreal-mappa
from: 0a6559ee
---

Válasszon egy **Megnyitás programban** bejegyzést a {{ui:Render}} Motor listájából, hogy a jelenetet másik programba vigye. Semmi nem jön vissza a modellbe.

## Fájl bármely programhoz

- **USD-fájl** a jelenetet `.usdc` formában menti (vagy `.usdz`-ként, ha a modell képeket tartalmaz): ugyanaz a fájl, mint a [USD-ként mentés](topic:usd) fájlja, anyagokkal, lámpákkal és kamerákkal. Megtartja a példányosítást és a pontos anyagértékeket. A legtöbb renderelő, játékmotor és megjelenítő olvassa az USD-t.
- **glTF-fájl (.glb)** a könnyebb glTF 2.0 fájlt menti anyagokkal, textúrákkal és lámpákkal; lásd [A modell küldése renderelő programnak](topic:model-for-rendering), hogy mit tartalmaz és mit hagy ki.

- **Unreal-projektmappa (.zip)** menti azt a mappát, amelyet a [Jelenet küldése játékmotornak](topic:render-unreal) ír, bármely számítógépen lévő projekthez.

Mindhárom működik a böngészőben és a Studióban.

## A Studióban: megnyitás programban

A Studio felsorolja a számítógépen talált programokat, amelyek meg tudják nyitni a jelenetet: a usdview-t, ha a keresési útvonalán van, és a számítógép saját programját a fájltípushoz. Válasszon egyet, válassza az USD-t vagy a glTF-et ott, ahol mindkettőt olvassa, majd kattintson a {{ui:Render}} gombra. A Studio a csomagot új mappába írja a Dokumentumok alá (`CadCraft hand-off`; semmi nem íródik felül, minden küldés saját mappát kap), elindítja rajta a programot, és megmondja, hol vannak a fájlok.

| Program | Legjobban olvassa |
|---|---|
| usdview | USD |
| A számítógép saját programja | Amit a számítógép az adott fájltípushoz kezel |

A Studio csak ebből a rögzített listából indít programot; nem futtat semmit, amit az oldal név szerint kér, és soha nem indít GNU GPL licenc alatt álló programot (lásd [Kép rajzolása másik programmal](topic:render-other-program#programs-cadcraft-never-runs)). Bármely USD- vagy glTF-et olvasó program megnyitja a fájlt a fenti **Fájl bármely programhoz** részből.

:::note
A Twinmotion, az Enscape és más megjelenítő programok nincsenek a listában: a CadCraftot velük nem ellenőrizték, és erről nem állítunk semmit. Az innen származó glTF- vagy USD-fájl a bevezető út; lásd a [beépülő renderelőkről](topic:model-for-rendering#enscape-and-other-plug-in-renderers) szóló megjegyzéseket.
:::
