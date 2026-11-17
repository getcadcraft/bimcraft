---
title: Mértékegységek importáláskor: a fájl megadja a mértékegységeit, vagy először rákérdezünk
summary: Ha a behozott fájl megadja a mértékegységeit, a BimCraft ezeket használja, és ezt jelzi. Ha nem, a BimCraft elhelyezés előtt rákérdez, és a választását az adott fájlhoz megjegyzi.
keywords: mértékegységek, importálás, megnyitás, OBJ, STL, DWG, DXF, IFC, pontfelhő, könyvtári elem, milliméter, méter, hüvelyk, láb, lépték, rossz méret, túl nagy, túl kicsi, 1000-szer, rákérdezés, megjegyzett
from: f044e9bc
---

## Mit fog csinálni

Behoz egy fájlt, és biztosra megy, hogy a helyes méretben érkezik.

## Lépések

1. Nyissa meg vagy adja hozzá a fájlt a szokásos módon: {{ui:Open}}, a Könyvtár {{ui:Files}} része, {{ui:Point clouds}}, vagy Építés › Rajzból.
2. Ha a fájl megadja a mértékegységeit, nem kérdez semmit. Az állapotsor jelzi, hogy a fájl milyen mértékegységeket ad meg.
3. Ha nem adja meg, egy párbeszédpanel kérdezi meg a fájl **mértékegységét**. Adja meg, hogy a fájlban mi egy egység, majd kattintson a {{ui:Use these units}} gombra. A válaszig semmi nem kerül elhelyezésre.
4. A {{ui:Cancel}} (vagy {{key:Esc}}) semmit nem hoz be.

## Mely fájlok adják meg a mértékegységeiket

- **IFC**: megadja a hosszmértékegységét, és a „Megnyitva” üzenet jelzi, melyik. Az IFC, amely egyet sem ad meg, megnyitás előtt rákérdezést kap; a válasz bekerül a modellbe, így a fájl mentés után már megadja.
- **DWG és DXF**: a rajz beszúrási mértékegysége. A rajz, amelyben nincs ilyen, rákérdezést kap (könyvtári fájlok, Építés › Rajzból, terep szintvonalakból).
- **Pontlisták** terephez: nem adnak meg mértékegységet. Rákérdezünk.
- **Pontfelhők**: a koordinátarendszerrel rendelkező LAS és LAZ, valamint az E57, PTX és PLY megadja a sajátját. A többit megkérdezzük.
- **OBJ és STL**: soha nem adnak meg mértékegységet. Rákérdezünk.
- **glTF és GLB**: méterben, a formátum saját szabálya szerint.
- **Képek**: nincs saját méretük. A képet a nézethez illesztjük, a méretét pedig a két pont szerinti léptékezéssel („Léptékezés két ponttal”) állítja be. A megadott méret az adott fájlhoz megmarad: újra elhelyezve ebben a méretben érkezik, és az állapotsor ezt jelzi.
- **A Pontfelhők bővítmény**: rákérdez, ha olyan fájlból épít felhőt, amely nem ad meg mértékegységet, és a felhő számait az általa hordozott mértékegységgel jelöli.

## Jó tudni

- A válasz az adott fájlhoz (neve, mérete és dátuma alapján) ezen a számítógépen, minden CadCraft-alkalmazásban megmarad. Ha ugyanaz a fájl legközelebb érkezik, nem kérdezünk, és az állapotsor jelzi, hogy a megjegyzett mértékegységeket használtuk.
- Ha újra rá szeretne kérdezni: a parancspaletta ({{key:Mod+K}}) › **Ismételt kérdezés a behozott fájlok mértékegységeiről**.
- Egy importnál már meglévő mértékegység-lista (a Könyvtár {{ui:Units}} listája, a pontfelhősáv Units listája, vagy az Építés › Rajzból alatti Drawing units) az importálás után is módosítja a mértékegységeket. A terepeszköz mértékegység-listája ma már csak azt határozza meg, mivel induljon a kérdés.
