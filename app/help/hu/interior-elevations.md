---
title: Belső homlokzatok
summary: Készítsen egy rajzlapot, amely a helyiség négy falát mutatja belülről, méretekkel és címkékkel, és mentse PDF-ként.
keywords: belső homlokzat, helyiség, fal, szekrény, konyha, homlokzat, rajzlap, PDF, méretezés, címke, tér, A-501
from: 1e3a70a8
---

## Mit fog csinálni

Válasszon egy helyiséget, és kapjon egy rajzlapot, amely négy falát mutatja úgy, ahogy az ember belül állva látná őket. Konyhákhoz, fürdőszobákhoz és minden olyan helyiséghez készült, ahol látni kell az egyes falakon lévő szekrényeket, ajtókat és ablakokat.

## A rajzlap elkészítése

1. Válassza ki a helyiséget. Az alaprajzon, a {{ui:Rajzolás}} bekapcsolt állapotában kattintson a helyiségen belülre. A 3D nézetben vagy a modellfában válassza ki a teret (IfcSpace).
2. A **Tulajdonságok** részben kattintson a {{ui:Belső homlokzatok…}} gombra.
3. Megnyílik a párbeszédpanel a rajzlappal.
4. A mentéshez kattintson a {{ui:PDF letöltése}} gombra. A fájl neve "<file> — Interior elevations — <room>.pdf", és vektoros PDF.
5. Ha végzett, kattintson a {{ui:Bezárás}} gombra.

## Mit mutat a rajzlap

A rajzlapon négy nézet látszik, két sorban és kettő-kettő oszlopban, egy léptékben: a legnagyobb szabványos méretarányban, amely elfér. Ezek **Északi fal**, **Keleti fal**, **Déli fal** és **Nyugati fal**. A címtáblán a **A-501** rajzlapszám, a „Belső homlokzatok — ” cím a helyiség számával és nevével, a projekt és a dátum szerepel.

Minden nézet a helyiség közepén van átvágva, és az adott oldali falat mutatja. Az oldalfalak, valamint azok vágott elemei, például egy ablak, szürke, vágott falfelületként jelennek meg a nézet körül. A nézet a fal síkja mögött rögtön véget ér, így a fal mögött semmi sem látszik.

Minden nézethez tartozik:

- a helyiség szélessége alatta, belső síktól belső síkig;
- a helyiség magassága mellette, a padlótól a felette lévő szintig;
- négyzet alakú címke minden ajtón és hatszög alakú címke minden ablakon az adott falban, a jelölésükkel (D1, W1 stb.);
- kör alakú címke az elemszámmal minden olyan könyvtári elemen, amely az adott fal előtt van elhelyezve: szekrények, szerelvények és berendezések.

:::note
A nézetek minden alkalommal a modellből készülnek, amikor megnyitja a párbeszédpanelt, így mindig megegyeznek vele. Mozgasson egy szekrényt, majd nyissa meg újra a párbeszédpanelt.
:::

## Saját rajzlapokon

Minden helyiség minden fala egy nézet, amelyet saját rajzlapra helyezhet: a projektböngészőben kattintson az {{ui:Új rajzlap}} gombra, majd a **Belső homlokzatok** alatt adja hozzá a „101 Konyha — Északi fal” és a többi nézetet. A nézet ugyanazokkal a méretekkel és címkékkel érkezik.

## Még nincs elkészítve

A belső homlokzatok a generált rajzkészletben (ezek a helyiség **Tulajdonságaiból** vagy saját rajzlapokról származnak), a nem többnyire téglalap alakú helyiségek (a nézet minden oldalon négyzetesnek látszik a helyiség határoló dobozának), a rajtuk lévő rajzolás, megjegyzések vagy saját méretek, valamint a megjelenítendő falak kiválasztása. Lásd: [Mi még nincs elkészítve](topic:not-built-yet).
