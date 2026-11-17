---
title: Több IFC-modell együtt megtekintése
summary: Több IFC-fájl hozzáadása a jelenethez, például építészeti, szerkezeti és gépészeti modellek; megjelenítés azonos koordinátákon, egy modell mozgatása vagy elrejtése, és annak kiválasztása, hogy melyiket szerkeszti.
keywords: föderáció, összevont modell, több modell, több fájl, összevonás, átfedés, koordináció, szakág, szerkezet, gépészet, szolgáltatások, eltolás, modell mozgatása, aktív modell, modell hozzáadása
from: df0efbbf
---

## Mit fog csinálni

Különböző szakágak modelljeit nézheti meg egy helyen: az építész modelljét a szerkezeti és gépészeti modellekkel együtt. Mindegyik külön fájl marad; a BimCraft csak együtt jeleníti meg őket.

## Lépések

1. Nyissa meg az első IFC-modellt a szokásos módon.
2. A bal oldali {{ui:Modellek}} részben kattintson a {{ui:Modell hozzáadása…}} gombra, és válasszon ki egy vagy több IFC-fájlt. Mindegyik megjelenik a listában és a 3D-nézetben.
3. Egy modell elrejtéséhez törölje a jelölését; megjelenítéséhez jelölje be újra.
4. Ha egy modell rossz helyre került (másik felmérési pont), kattintson alatta a {{ui:Mozgatás}} gombra, adja meg méterben, mennyit mozgasson az X, Y és Z irányban, majd kattintson az {{ui:Alkalmaz}} gombra.
5. A pöttyel jelölt modell az, amelyet szerkeszt. Másik modell szerkesztéséhez kattintson annak pöttyére.
6. A modell melletti × gombbal távolítsa el a modellt a jelenetből.

## A csapat modelljeinek megnyitása

Ha a megnyitott modell egy csapatprojektben lévő felhőfájl, a lista alatt megjelenik az {{ui:A csapat modelljeinek megnyitása}} gomb. Ez a projekt többi IFC-modelljét megnyitja az aktuális modell mellé, mindegyiket a projekt által beállított eltolással. Az elrejtett modellek kimaradnak, de beszámítanak a számlálóba; a projektben elforgatott modell elforgatás nélkül nyílik meg, és ugyancsak beszámít; a nem IFC-fájlok (például DWG) kimaradnak, és az állapotsorban megnevezésre kerülnek. A már megnyitott modellt soha nem nyitja meg kétszer. A gomb nem jelenik meg, ha a fájl nincs csapatprojektben.

## Mit kell látnia

- Minden modell az első modell koordinátáiban jelenik meg, ahogy a fájlja elhelyezi. Ugyanabból a projektből exportált modellek mozgatás nélkül illeszkednek.
- Ha olyan elemet választ ki, amelyet nem szerkeszt, annak tulajdonságai csak olvashatók lesznek; az {{ui:A modell szerkesztése}} gombbal válthat.
- A {{ui:Modellfa}}, a {{ui:Szintek}}, a {{ui:Szín}}, a {{ui:Módosítások}} lista, a könyvtári elemek elhelyezése és a {{ui:Mentés IFC-ként}} azon a modellen működik, amelyet szerkeszt. Az elrejtés, az elkülönítés, az áttetszőség és az {{ui:Összes kijelölése}} minden modellen át működik.
- A {{ui:Mentés IFC-ként}} azt a modellt tölti le, amelyet szerkeszt, csak a módosításaival együtt.

## Gyakori hibák

- **Egy modell messze van, vagy hiányzik.** A fájlja más koordinátákat használ. Keresse meg az {{ui:Illesztés}} gombbal, majd a {{ui:Mozgatás}} gombbal helyezze a helyére.
- **A kijelölt elemen a Törlés vagy a Másolás parancs szürke.** Az másik modellhez tartozik: előbb váltson arra.
- **A „Fájl kiválasztása” paranccsal megnyitott fájl mindent kicserélt.** Ez új jelenetet indít. Fájlok a meglévőhöz adásához használja a {{ui:Modell hozzáadása…}} gombot.

## Tovább

- [Elemek elrejtése, elkülönítése és áttetszővé tétele](topic:hide-and-isolate)
- [Elemek színezése tulajdonság szerint](topic:color-by-property)
