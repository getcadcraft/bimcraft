---
title: Külső hivatkozású rajzok és képek keresése
summary: Egy rajz hivatkozott rajzainak (xref-eknek) és képeinek, például címblokk-logóinak megjelenítése a mappa megnyitásával vagy a fájlok kézi hozzáadásával.
keywords: xref, külső hivatkozás, hivatkozott rajz, csatolás, átfedés, képfájl, kép, logó, címblokk, hiányzó xref, etransmit, hivatkozáskezelő
from: 5593d4b1
---

## Mit fog csinálni

Tegye teljessé a rajzot: mutassa meg azokat a rajzokat, amelyekre hivatkozik (külső hivatkozások vagy xref-ek), és a képeket, amelyeket használ, például egy logót a címblokkban.

## Az egyszerű mód: mappa megnyitása

1. Kattintson a {{ui:Mappa megnyitása}} gombra, és válassza ki azt a mappát, amely a rajzot és annak hivatkozásait tartalmazza, például egy projekt teljes `Cad` mappáját.
2. A mappajelentésben görgessen a **CAD-rajzok** részhez.
3. Kattintson a rajzra.
4. Nézze meg a jobb oldali {{ui:Tulajdonságok}} panelt, a **Hivatkozott rajzok** és a **Képek** alatt.

A BimCraft minden hivatkozott rajzot a nevéről keres („*név*.dwg”): először ugyanabban a mappában, mint a rajz, majd a megnyitott mappa bármely helyén. A képeket ugyanígy keresi, és hasonló név alapján is: egy eTransmit vagy Revit-export gyakran elé írja a projekt nevét, így a `logo.png` megtalálható mint `Tower-logo-5425051.png`.

## A másik mód: fájlok kézi hozzáadása

1. Nyissa meg a rajzot önmagában.
2. A jobb oldalon, a **Hivatkozott rajzok** alatt kattintson a {{ui:Kapcsolt rajzok hozzáadása…}} gombra. A **Képek** alatt a gomb a {{ui:Képek hozzáadása…}}; mindkettő ugyanazt a választót nyitja meg.
3. Válassza ki a hivatkozott `.dwg` fájlokat és a képfájlokat. Egyszerre többet is kijelölhet.
4. Várjon, amíg a BimCraft újra megnyitja a rajzot a hozzáadott fájlokkal.

## Amit látnia kell

Minden hivatkozott rajz és kép egy címkével szerepel:

| Címke | Jelentése |
|---|---|
| **Megjelenítve** | Megtalálva és kirajzolva. Az alatta lévő útvonal megmutatja, honnan származik, vagy hogy „hozzáadta Ön”. |
| **Megjelenítve, hasonló név** | Egy kép hasonló név alapján lett megtalálva. Ellenőrizze, hogy a megfelelő-e. |
| **Nem található** | Nincs a mappában vagy a hozzáadott fájlok között. A hiányzó kép üres keretként jelenik meg. |
| **A TIFF nem jeleníthető meg böngészőben** | A kép TIFF fájl, amelyet a böngészők nem rajzolnak ki. Mentse PNG-ként ugyanazzal a névvel, és adja hozzá. |
| **Nem olvasható** | A fájl megvan, de képként nem lehetett megnyitni. |

A bal oldali {{ui:Rajz}} panel a hivatkozott rajzoknál „*n* / *m* betöltve” értéket mutat. A hivatkozott rajzok rétegei a {{ui:Rétegek}} listában „*hivatkozás neve*|*réteg*” alakban jelennek meg.

## Gyakori hibák

- **Csak a rajz megnyitása.** „Ez a rajz csak a saját tartalmát mutatja, amíg a hivatkozott rajzai nincsenek hozzáadva. A teljes projektmappa megnyitása automatikusan megtalálja őket.”
- **Túl kicsi mappa megnyitása.** Ha a hivatkozások egy testvér mappában vannak, nyissa meg a szülőmappát.
- **Átnevezett hivatkozások.** A BimCraft a hivatkozott rajzokat név alapján párosítja. A lemezen átnevezett hivatkozást nem találja meg; adja hozzá kézzel.
- **Hivatkozások hivatkozásai.** A BimCraft a megnyitott rajz által hivatkozott rajzokat tölti be. Az ezeken belül hivatkozott rajzokat nem keresi, ezért ebben a verzióban általában nem jelennek meg.
