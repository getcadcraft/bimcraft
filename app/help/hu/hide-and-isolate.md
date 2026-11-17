---
title: Elemek elrejtése, elkülönítése és átlátszóvá tétele
summary: Több elemet jelöljön ki, rejtse el őket, mutassa csak őket, vagy jelenítse meg őket úgy, hogy minden más átlátszó legyen, majd állítsa vissza mindet.
keywords: elrejtés, elkülönítés, átlátszóság, átlátszó, szellemkép, röntgen, összes megjelenítése, láthatóvá tétel, több kijelölés, Ctrl-kattintás, Shift-kattintás, láthatóság
from: 97e98b8c
---

## Mit fog csinálni

Tisztítsa meg a nézetet arra, amit néz: rejtse el az útban lévő elemeket, mutassa csak a kiválasztottakat, vagy tartsa a többi elemet halvány körvonalként a képernyőn, hogy tudja, hol jár.

## Lépések

1. Nyisson meg egy IFC-modellt. Lásd [IFC-modell megnyitása és körbenézés 3D-ben](topic:open-ifc-model).
2. Kattintson egy elemre a kijelöléséhez. További elem kijelöléséhez tartsa lenyomva a {{key:Mod}} vagy a {{key:Shift}} billentyűt, és kattintson mindegyikre. A már kijelölt elemre ilyen módon kattintva az kikerül a kijelölésből.
3. Nyissa meg a {{ui:Megjelenítés}} menüt az eszköztáron, és válassza ki a teendőt, vagy nyomja meg a hozzá tartozó billentyűt:
   - {{ui:Elrejtés}} ({{key:H}}) elrejti a kijelölt elemeket.
   - {{ui:Elkülönítés}} ({{key:I}}) csak a kijelölt elemeket mutatja.
   - {{ui:Átlátszó}} ({{key:T}}) a kijelölt elemeket úgy mutatja, ahogy vannak, a többi elemet pedig átlátszóan.
4. Kattintson ugyanebben a menüben az {{ui:Összes megjelenítése}} gombra, vagy nyomja meg a {{key:Shift+H}} billentyűt, hogy minden elem újra látsszon.
5. Ha ehelyett a kijelölt elemek körüli mindent le akarja vágni, kattintson ugyanebben a menüben a {{ui:Metszetdoboz a kijelölés körül}} gombra, vagy nyomja meg a {{key:Shift+X}} billentyűt. Lásd [IFC-modell vágása metszősíkkal](topic:section-plane).

## Amit látnia kell

- Ha több elem van kijelölve, a {{ui:Tulajdonságok}} megmutatja, hány elem van, és osztályok szerint felsorolja őket. Egy elemre egyenként kattintva látja annak tulajdonságait.
- A rejtett elemek nem jelölhetők ki: a kattintás a mögöttük lévőre kerül.
- Az átlátszó elemek szintén nem jelölhetők ki, így a falakon át közvetlenül átkattinthat az elkülönített elemekig.
- Az élek az elemükkel együtt rejtődnek el, és azzal együtt halványodnak.
- Az elrejtés, az elkülönítés és az átlátszóság szerkesztés, könyvtári elem elhelyezése vagy metszősíkkal történő vágás közben is megmarad. Másik modell megnyitása mindent újra megjelenít.

## Gyakori hibák

- **A menüpontok szürkék.** Nincs kijelölés. Előbb kattintson egy elemre; ha egy menüpontra mutat, megmutatja, miért nem használható.
- **Az elkülönítés megjelenített egy falat, amelyet elrejtettem.** Az elkülönítés pontosan azt mutatja, amit kijelölt, rejtett állapotban is.
- **Egy egész szint hiányzik.** Az a {{ui:Szintek}} listához tartozik, nem az {{ui:Összes megjelenítése}} gombhoz: jelölje be újra a szintet.

## Tovább

- [Szintek, terek és élek megjelenítése és elrejtése](topic:storeys-and-spaces)
- [IFC-modell vágása metszősíkkal](topic:section-plane)
