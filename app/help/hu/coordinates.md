---
title: Koordináták a BimCraftban
summary: Hol dolgozik: a kurzor helyzete az alaprajzon és a 3D nézetben, az aktuális szint, a projektorigó és a helyszín felmérési pontja.
keywords: koordináták, hol vagyok, helyzet, kurzor, kijelzés, x y z, szint, szint, projektorigó, origó, alappont, felmérési pont, helyszín, térképi koordináták, keleti koordináta, északi koordináta, georeferencia, mértékegységek, hely
from: 84df5245
---

## Mit fog csinálni

Egy pillantással megtudhatja, hol van a modellben: melyik szinten rajzol, milyen messze van a kurzor a projektorigótól, és hol van a helyszín felmérési pontja.

## Hol jelennek meg a számok

- **A 3D nézet felett** (jobb alul, a nézetkocka mellett): vigye a kurzort a modell fölé. A doboz megmutatja, melyik szinten van a pont, és milyen magasan van az adott szint padlója felett, majd az **X, Y és Z** értékeket. Üres térben a legalsó szint padlóján lévő pontot mutatja.
- **Az alaprajzon** (jobb alul, amíg a {{ui:Rajzolás}} be van kapcsolva): az alaprajz szintje és annak padlómagassága, valamint a kurzor **X és Y** értéke, amíg az alaprajz fölött van.
- Ha a fájlhoz térképi átalakítás tartozik (térképi koordinátákkal exportálták), mindkét doboz hozzáadja a **keleti és északi koordinátákat** a térképi rácson, a {{ui:Mértékegységek}} listán választott egységben (az egység mindig az értékek mellett áll; a láb és hüvelyk tizedes lábként jelenik meg). Egy rajz (DWG vagy DXF) megtartja a saját mértékegységét: a kurzor kijelzése nevezi meg, és soha nem váltja át.

Minden X, Y és Z értéket a **projektorigótól** mérünk, az eszköztáron kiválasztott {{ui:Mértékegységek}} szerint (láb és hüvelyk, hüvelyk, tizedes láb, milliméter, centiméter vagy méter). A pozitív Y a modell északi iránya felé mutat, ami nem mindig a valódi észak. A térképi keleti és északi koordináták ugyanezt a választást követik (a láb és hüvelyk tizedes lábként jelenik meg). Ha a térképrendszer saját egysége eltér a kiválasztottól, az a számok után zárójelben jelenik meg, például *(US survey feet)*, hogy a geodéta lássa, mi a rendszer saját mértékegysége.

## A két jelölő

- **Projektorigó** (piros kör kereszttel): a 0, 0, 0 pont, amelytől a modell minden koordinátája mérve van.
- **Felmérési pont** (kék kör háromszöggel): a helyszín vonatkoztatási pontja, amelyhez a szélességi és hosszúsági fok, a magasság vagy a térképi koordináták tartoznak. A 3D nézetben erre a pontra mutatva olvashatja le, hol van.

Ha a helyszín a projektorigón van, például egy itt rajzolt új épületnél, egy jelölő mutatja mindkettőt. Bármelyik doboz célkereszt-gombjával elrejtheti vagy megjelenítheti a jelölőket; a BimCraft a választását ebben a böngészőben megjegyzi.

## Mit kell látnia

- A számok a kurzor mozgatásával változnak, az alaprajz doboza pedig megnevezi a szintet, amelyet a szintlistában választott.
- A jelölők helyben maradnak, miközben forgat, eltol és nagyít.

:::tip
A pont szélességi és hosszúsági fokának kiolvasásához használja a {{ui:Mérés}} › {{ui:Hely}} parancsot: lásd [Távolságok, felületek és helyek mérése 3D-ben](topic:measure).
:::

:::touch
Érintőképernyőn a 3D doboz addig nem mutat semmit, amíg egérrel vagy tollal nem dolgozik: az ujjal a nézetet mozgatja.
:::
