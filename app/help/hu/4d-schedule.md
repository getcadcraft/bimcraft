---
title: Építési ütemterv lejátszása a modellen
summary: Feladatlista megnyitása CSV-ként, minden feladat összekapcsolása elemekkel egy tulajdonság alapján, majd végigmenés a dátumokon, hogy lássa, mi épül, mi van folyamatban és mi még nem kezdődött el.
keywords: 4d, ütemterv, építési sorrend, idővonal, fázisolás, ütemezés, gantt, feladatok, dátumok, szimuláció, előrehaladás, elkészült, csv, szakasz, fázis, munkacsomag, wbs, csoport
from: 1b985a64
---

## Mit fog csinálni

Kövesse nyomon az épület felépülését: az ütemtervben szereplő minden feladat hozzá van kötve az általa épített elemekhez, nap szerint megjelenítve.

## Lépések

1. Nyisson meg egy IFC-modellt, majd nyissa meg a bal panelen a {{ui:4D ütemterv}} részt.
2. Kattintson a {{ui:Sablon letöltése}} gombra: így egy szintenként egy hetes feladatlistát kap, amelyet táblázatkezelőben módosíthat. Vagy írja meg a sajátját.
3. Kattintson a {{ui:Feladatlista megnyitása…}} gombra, és válassza ki a CSV-fájlt.
4. Húzza el a dátumcsúszkát, vagy kattintson a {{ui:Lejátszás}} gombra.

## A feladatlista

CSV-fájl fejlécsorral, amelynek oszlopai **Task**, **Start**, **Finish**, **Field** és **Value**. Vessző és pontosvessző is használható.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Dátumokat YYYY-MM-DD formában írjon.
- Egy sor a feladatot minden olyan elemhez kapcsolja, amelynek **Field** mezője pontosan megegyezik a **Value** értékkel. A mező olyan tulajdonság, mint a Storey, Class, Name, Type, Material, Tag vagy GlobalId, vagy bármely tulajdonság a halmaz és a név megadásával: `Pset_WallCommon.FireRating`.
- Ugyanazt a feladatot több soron is megadhatja, azonos dátumokkal, hogy több elemet kapcsoljon hozzá.

## Szakaszok és munkacsomagok

Adjon hozzá egy **Stage** oszlopot, egy **Package** oszlopot, vagy mindkettőt, hogy a feladatokat szakaszokba és munkacsomagokba gyűjtse. A Phase és a WBS is működik oszlopnévként.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 födém | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Szerkezet | Váz |
| Level 1 falai | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Szerkezet | Váz |
| Ajtók | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Belső kialakítás | Asztalosmunka |

- Egy feladat egy szakaszhoz és egy csomaghoz tartozik. Ha ugyanazon feladat későbbi sora másik szakaszt vagy csomagot nevez meg, azt a sor száma mellett jelezzük, és kihagyjuk.
- Ugyanaz a csomagnév két szakaszban két különböző csomagot jelent.

Ha a listában vannak csoportok, a dátum fölött megjelenik a {{ui:Megjelenítés}} lista. Válasszon szakaszt vagy csomagot, és az egyként fut le:

- a csúszka és a {{ui:Lejátszás}} a csoport első kezdésétől az utolsó befejezéséig fut,
- csak a csoport feladatai listázódnak és színeződnek, a csoporton kívüli minden áttetszővé válik,
- a lista alatti sor megmutatja, hány feladat van az adott dátumon kész, folyamatban vagy még hátra,
- a {{ui:Az elemeinek kijelölése}} a csoport minden elemét kijelöli a {{ui:Megjelenítés}}, a {{ui:Metszet}} vagy egy kimutatás számára.

A teljes ütemterv újbóli megtekintéséhez válassza a **Minden feladat** lehetőséget.

## Amit látnia kell

- **Elkészült**: elemek, amelyek összes feladata befejeződött, saját színükben.
- **Folyamatban**: elemek, amelyeknek az adott napon folyamatban lévő feladata van, okkersárgával. A feladat a kezdő dátumától a befejező dátumáig tart.
- **Még nem kezdődött el**: áttetsző.
- Azok az elemek, amelyek egyik feladathoz sem tartoznak, változatlanok maradnak. A lista megmutatja, hány elemet talált az egyes feladatok. A nem olvasható vagy semmit nem találó sorok a sorszámukkal együtt listázódnak.

## Kapcsolatok, Gantt-diagram és MS Project

- Nyisson meg egy Microsoft Project XML-fájlt (`.xml`) vagy egy olyan CSV-t, amelynek van `Predecessors` oszlopa. A kapcsolatok lehetnek befejezés–kezdés, kezdés–kezdés, befejezés–befejezés vagy kezdés–befejezés, mindegyik napokban megadott előrehozással vagy késleltetéssel.
- A feladatlista alatt a Gantt-diagram minden feladatot sávként rajzol, a kapcsolatokat nyilakkal. A kritikus úton lévő feladatok pirosak. A kapcsolati hurok vagy a nem létező előfeladat a panelen listázódik.
- A {{ui:Mentés MS Project XML-ként}} és a {{ui:CSV mentése kapcsolatokkal}} a kapcsolatokkal együtt írja vissza az ütemtervet.

## Tovább

- [Elemek keresése osztály, név vagy tulajdonság szerint](topic:find)
- [Elemek színezése tulajdonság alapján](topic:color-by-property)
