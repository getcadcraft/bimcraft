---
title: DWG vagy DXF rajz megtekintése
summary: Nyisson meg egy DWG vagy DXF fájlt, mozogjon a modelltérben és a rajzlapokon, olvassa le a koordinátákat, és lássa, mi nincs még kirajzolva.
keywords: dinamikus blokkok, láthatósági állapotok, dwg, dxf, cad, rajz, 2d, nézet, megtekintő, eltolás, nagyítás, modelltér, papírtér, elrendezés, koordináták, dwg megnyitása
from: 4db3122a
---

## Mit fog csinálni

Nyisson meg egy CAD-rajzot, nézze 3D-ben vagy 2D-ben, mozogjon benne, váltson a modelltér és a rajzlapjai között, és olvassa le a koordinátákat. A BimCraft DWG- és DXF-rajzokat jelenít meg, nem szerkeszti és nem menti őket. Módosításhoz kattintson a {{ui:Szerkesztés a CadCraftban}} gombra: a rajz új lapon nyílik meg a CadCraft rajzoló alkalmazásban.

## Lépések

1. Kattintson a {{ui:Fájl kiválasztása}} gombra, vagy húzza a rajzot az oldalra.
2. Válasszon `.dwg` vagy `.dxf` fájlt.
3. Várjon, amíg az állapotsor kiírja: „A rajz olvasása…”. A nagy rajzok néhány másodpercet igénybe vehetnek. Ezután kiírja, meddig tartott az olvasás, majd „renderelés…” jelzés látszik az első kép kirajzolása alatt, és az is, mennyi ideig tartott.
4. A rajz 3D-ben nyílik meg, mert ez a leggyorsabb módja egy nagy rajz megjelenítésének (lásd [DWG vagy DXF rajz megtekintése 3D-ben](topic:dwg-in-3d)). A lapos 2D-nézethez kattintson a {{ui:Modell}} gombra. Ahhoz, hogy a rajzok mindig 2D-ben nyíljanak meg, állítsa be a {{ui:Beállítások}} › {{ui:BimCraft}} › **A rajzok megnyitása itt:** értékét {{ui:Modell (2D)}} értékre. Az a rajz, amelyben nincs semmi a modelltérben, vagy amelyet a böngésző nem tud 3D-ben megjeleníteni, 2D-ben nyílik meg.
5. A rajz felett lévő füleket nézze meg: először a {{ui:Modell}}, utána lapónként egy-egy rajzlap, a rajz saját sorrendjében.
6. Kattintson egy lapfülre, hogy lássa az adott lapot: a papírt, amelyen a modell a nézetablakain keresztül látszik.
7. A {{ui:Modell}} gombra kattintva visszatér a modelltérbe.
8. Vigye az egeret a rajz fölé, és a sarokban olvassa le az X és Y koordinátákat.

## Mit kell látnia

- A rajz az ablakhoz illesztve. A színek a rajzot követik; a fehér vonalak (7-es szín) a téma tintaszínében rajzolódnak, a halvány színek a világos témán sötétebbek, hogy olvashatók maradjanak.
- A bal oldali {{ui:Rajz}} panel: fájl, méret, formátum (például „AutoCAD 2018 (AC1032)”), mértékegységek, elem- és rétegszámok, a lapok száma, valamint a hivatkozott rajzok és berendezések, ha van belőlük.
- A bal oldali {{ui:Rétegek}} lista.
- A jobb oldalon: hogyan lehet mozogni, a hivatkozott rajzok és képek, valamint **Még nincs kirajzolva**.

## Mozgás

:::mouse
| Cél | Teendő |
|---|---|
| Eltolás | Húzza bármelyik egérgombbal |
| Nagyítás | Görgesse a kereket; a mutató alatti pont a helyén marad |
| Illesztés | Kattintson duplán, nyomja meg a {{key:F}} billentyűt, vagy kattintson az {{ui:Illesztés}} gombra |
:::

:::mac mouse
Trackpaden a két ujjal történő görgetés **nagyít**, nem tol el. A csippentés is nagyít. Eltoláshoz kattintson és húzzon.
:::

:::touch
Egy ujjal húzva tolhatja el. A rajzoknál a csippentéses nagyítás még nincs megvalósítva: koppintson az {{ui:Illesztés}} gombra az egész lap megtekintéséhez, nagyításhoz használjon egeret vagy trackpadet.
:::

## Dinamikus blokkok

Egy dinamikus blokk úgy jelenik meg, ahogyan a rajz mutatja: minden elhelyezett blokk abban a láthatósági állapotban, amelyben a rajzot mentették („Alaprajz” vagy „Homlokzat”, „Egy medence” vagy „Dupla medence”). A jobb oldalon a **Dinamikus blokkok** felsorolja a modelltérben elhelyezett összeset: hány van elhelyezve, milyen állapotokat mutatnak, és a blokk minden állapotát. A {{ui:3D}} nézetben kattintson egy elhelyezett blokkra, hogy a Tulajdonságok között lássa a **Dinamikus blokk**, a **Mutatott állapot** és az **Egyéb állapotok** értékeit. A BimCraft nem vált állapotot.

## Még nincs kirajzolva

Egyes objektumtípusok ebben a verzióban nincsenek kirajzolva. A jobb oldalon a **Még nincs kirajzolva** alatt számoljuk őket („Ezek a rajz részei egyelőre kimaradnak, nem találgatjuk őket.”), így látja, ha valami hiányzik. Vonalak, polivonalak, ívek, körök, ellipszisek, spline-ok, sraffozások és tömör kitöltések, szöveg és többsoros szöveg, attribútumos blokkok, méretek, vezetővonalak és többszörös vezetővonalak, táblázatok, képek és nézetablakok kirajzolódnak. A 3D-s lapok, poliéderes hálók és sokszöghálók felülről látott éleikként jelennek meg; a {{ui:3D}} nézetre váltva felületként láthatók.

A bináris DXF nem nyílik meg: a BimCraft ezt jelzi. Mentse újra ASCII DXF-ként, vagy DWG-ként abból a programból, amely létrehozta.

## Gyakori hibák

- **A rajz üresnek látszik.** Egyes rétegek a rajzon magán ki lehetnek kapcsolva vagy befagyasztva; ezek a {{ui:Rétegek}} listában nincsenek bejelölve. Kattintson a {{ui:Mind be}} gombra. Ha az állapot ezt írja: „*name* üres rajz: nem tartalmaz vonalakat, szöveget vagy blokkokat.”, akkor nincs benne semmi.
- **Egy lap üres keretet mutat.** Lehet, hogy a lap hivatkozott rajzokra támaszkodik. Lásd [Hivatkozott rajzok és képek keresése](topic:dwg-linked-files).
- **A szöveg kicsit másképp néz ki.** A BimCraft a szöveget keskeny, talpatlan betűtípussal rajzolja, nem a rajz saját betűtípusaival, ezért a szöveg valamivel szélesebb vagy keskenyebb lehet, mint abban a programban, amely létrehozta.
- **„*name* nem olvasható. Lehet, hogy sérült, vagy olyan formátumban van mentve, amelyet az olvasó még nem kezel.”** A zárójelben lévő rész a fájl formátumkódját nevezi meg. Mentse a létrehozó programból régebbi DWG-ként vagy DXF-ként, majd próbálja újra.
- **Mérést, rajzolást vagy szerkesztést várna.** A BimCraft csak megtekinti a rajzokat. A {{ui:Szerkesztés a CadCraftban}} gombra kattintva ugyanez a fájl a CadCraft rajzoló alkalmazásban nyílik meg, amely szerkeszti, és másolatot ment DWG- vagy DXF-ként. Az eredeti fájl nem változik, a hivatkozott rajzok pedig a BimCraftban maradnak. A gomb csak ott jelenik meg, ahol a CadCraft elérhető.

## Tovább

- [DWG vagy DXF rajz megtekintése 3D-ben](topic:dwg-in-3d)
- [Rétegek és lapok kezelése](topic:dwg-layers-sheets)
- [Rajz ellenőrzése nyomtatási nézetben](topic:print-view)
