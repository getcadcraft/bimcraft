---
title: Online és offline
summary: Mit tölt be a BimCraft a webhelyről, hogyan teszi a Mentés offline használatra az IFC-modelleket és a DWG-rajzokat kapcsolat nélkül is megnyithatóvá, és miért nem töltődik fel soha a megnyitott fájl.
keywords: offline, online, internet, kapcsolat, nincs hálózat, repülőgép üzemmód, helyszíni bejárás, mentés offline használatra, offline kész, feltöltés, adatvédelem, wasm, webassembly, IFC motor, dwg, felhő
from: 39e5c7eb
---

A BimCraft a fájljait a böngészőlapon belül olvassa. A megnyitás, a vizsgálat, a szerkesztés és a mentés soha nem küld el fájlokat sehova, sem online, sem offline. [Munka offline](common:offline) leírja, hogyan működnek az offline másolatok minden alkalmazásban; ez az oldal azt tárgyalja, ami a BimCraftra jellemző.

## Amit a BimCraft a webhelyről tölt be

| Rész | Mikor töltődik be offline másolat nélkül | Méret |
|---|---|---|
| Maga az alkalmazás, a 3D megjelenítővel és az IFC motor kódjával | Amikor megnyitja a BimCraftot | Több megabájt |
| Az IFC motor WebAssembly része | Az első IFC-fájl, amelyet a lapon megnyit: „IFC motor indítása…” | Körülbelül 1,6 MB |

A DWG- és DXF-rajzokhoz, a projekt- és családfájlokhoz, valamint a mappákhoz nincs szükség többre: az olvasóik az alkalmazás részei.

## A BimCraft mentése offline használatra

1. Nyissa meg a BimCraftot, amíg online van.
2. Kattintson a felső alkalmazássávban a {{ui:Mentés offline használatra}} gombra.
3. Figyelje, ahogy a gomb számlál: például „Mentés: 40 / 212”. A BimCraft másolata körülbelül 11 MB, mert tartalmazza az IFC motort.
4. Várja meg, amíg megjelenik az {{ui:Offline használatra kész}} felirat.

Amint megjelenik az {{ui:Offline használatra kész}} felirat, az IFC-modellek, a DWG- és DXF-rajzok, a projektfájlok, a mappák és ez a súgó kapcsolat nélkül is megnyílnak. Nem kell előbb megnyitnia egy IFC- vagy DWG-fájlt, hogy az olvasók „bemelegedjenek”.

A másolat frissítéséhez vagy eltávolításához kattintson az {{ui:Offline használatra kész}} gombra, és válassza a {{ui:Mentés újra (a legújabb verzió beszerzése)}} vagy az {{ui:Az offline másolat eltávolítása}} lehetőséget.

## Mit jelent a gomb felirata

| Gomb | Jelentése |
|---|---|
| {{ui:Mentés offline használatra}} | Ebben a böngészőben még nincs offline másolat. Kattintson, hogy mentsen egyet |
| „Mentés: *n* / *m*” | Mentés folyamatban; tartsa nyitva a lapot, amíg be nem fejeződik |
| {{ui:Offline használatra kész}} | Elmentve. Vigye rá az egeret, hogy lássa, mikor; kattintson a menühöz |
| {{ui:Nem sikerült menteni}} | Néhány fájl nem töltődött le. Ellenőrizze a kapcsolatát, és kattintson az újrapróbálkozáshoz. Az utolsó jó másolat, ha van, megmarad |
| {{ui:Az offline mód nem érhető el}} | Ez az ablak nem tarthat offline másolatot (privát ablak vagy felügyelt számítógép). Lásd [Munka offline](common:offline) |

:::offline
Ön offline van.

- Ha a gomb azt írja: {{ui:Offline használatra kész}}, minden fajta fájl a szokásos módon megnyílik.
- Ha nem, csak az működik, amit ez a lap már betöltött: az olyan olvasó, amely ebben a lapban még sosem töltődött be, nem indul el, és az ilyen fájl megnyitása böngészőhibát jelenít meg az állapotsorban. Ne töltse újra a lapot, amíg újra online nincs.
:::

## Ami kapcsolat nélkül is működik

Miután a BimCraft megnyílt a lapon, ezek mentett másolat nélkül is működnek offline:

- Projekt- és családfájlok olvasása, mappák ellenőrzése.
- Elemek kijelölése, tulajdonságok olvasása és IFC-értékek szerkesztése egy már megnyitott modellben.
- {{ui:Mentés IFC-ként}} és {{ui:CSV letöltése}}: mindkettő a lapon készített letöltés.

## Ami még nem érhető el

- **Felhőalapú mentés.** A fájlok csak a számítógépére mentődnek.

Lásd [Hová kerülnek a fájljai](common:your-files).
