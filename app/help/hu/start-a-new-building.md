---
title: Új épület kezdése
summary: Készítsen üres épületmodellt a szintjeivel, rajzolja meg a falait, helyezzen el elemeket a könyvtárból, és mentse IFC-ként.
keywords: új, új épület, üres, nulláról, sablon, szintek, padlók, létrehozás, modell
from: 68786865
---

## Mit fog csinálni

Indítson épületmodellt a semmiből, ahelyett hogy megnyitna egyet. A BimCraft üres IFC-modellt készít projekttel, telekkel, az épülettel és a szintjeivel. Elhelyezhet berendezéseket és bútorokat a szinteken a könyvtárból, és IFC-fájlként mentheti.

:::note
A falak már most rajzolhatók: lásd [Falak rajzolása](topic:draw-walls). Az ajtók, ablakok, padlók és tetők következnek.
:::

## Lépések

1. Kattintson a {{ui:Új épület}} gombra a **Fájl vagy mappa megnyitása** alatt, vagy a kezdőlapon.
2. Írja be az **Épület neve** mezőt.
3. Válassza ki, hány **Szintje** legyen az épületnek (1-től 200-ig).
4. Írja be a **Szintmagasságot**, padlótól padlóig: például `10'-0"`, `10'6"` vagy `3000 mm`. Egyszerű szám az USA-ban láb, máshol milliméter.
5. Minden mező már ki van töltve, így mindent meghagyhat úgy, ahogy van. Alattuk a doboz közli, mivel indul: a mértékegységeket, a **Falfajtát**, amelyet a Fal eszköz először rajzol (ha szeretné, válasszon másikat a listából), és az első rajzlapot.
6. Kattintson a {{ui:Létrehozás}} gombra. A szintek 0-tól egymás fölé kerülnek, mindegyik egy szintmagasságnyival az előző fölött, és 1. szint, 2. szint és így tovább lesznek elnevezve. Megjelennek a modellfában, és az 1. szint alaprajza a 3D-nézet mellett nyílik meg, a {{ui:Rajzolás}} bekapcsolva.
7. Rajzolja meg a falakat: kattintson a {{ui:Fal}} gombra, majd két pontra. Lásd [Falak rajzolása](topic:draw-walls). A szinteket a **Szintek** panelen nevezheti át vagy módosíthatja a magasságukat.
8. Helyezzen el elemeket: lásd [Berendezések és bútorok elhelyezése a könyvtárból](topic:place-from-library). Az elhelyező sáv minden szintet felsorol.
9. Kattintson a {{ui:Mentés IFC-ként}} gombra. A fájl az épület nevét kapja, például `Smith's house.ifc`.

## Jó tudni

- A modell milliméterben, IFC4 formátumban mentődik. Más BIM-programok is megnyitják.
- Egy új épület egy rajzlappal érkezik, **A-101** néven, amely a legalsó szint alaprajzát tartalmazza: A3-as papíron, 1:100 méretarányban, ha metrikus mértékegységekkel dolgozik, egyébként Tabloid papíron, 1/8" = 1'-0" méretarányban. Az első falig üres, utána a rajzolás közben mutatja az alaprajzot. A **Rajzlapok** alatt a projektböngészőben nyissa meg, ha módosítani szeretné a papírját, a méretarányát vagy a rajzfejet, nézeteket szeretne hozzáadni, vagy törölni szeretné. Sablonból indított épület a sablon rajzlapjait hozza.
- Hogy mivel induljon minden új épület (a metrikus projektek falfajtája, a szintek, az első rajzlap, a Létrehozás után aktív eszköz), lásd [Alapértelmezett szabályzatok](topic:default-policies).
- Az első falig semmit sem kell beállítani. A falfajta, a szintmagasságok, a mértékegységek és a rajzlap később is módosíthatók.
- A bal panel **Szintek** listája csak azokat a szinteket sorolja fel, amelyeken van valami; a modellfa mindegyiket felsorolja.
- Amíg nem menti, az új épület mentetlen munkának számít. A BimCraft rákérdez, mielőtt másik fájlt nyitna vagy kilépne, és ebben a böngészőben másolatot tart meg arra az esetre, ha a lap bezáródik.
