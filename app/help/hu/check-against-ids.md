---
title: Modell ellenőrzése az ügyfél IDS-e ellen
summary: Töltse be a kapott .ids fájlt, és a Problémák listájában nézze meg az összes olyan elemet, amely nem felel meg neki, mielőtt átadja az IFC-t.
keywords: ids, information delivery specification, buildingsmart, követelmények, átadás, ellenőrzés, validálás, minőség-ellenőrzés, eir, bep, tulajdonság, osztályozás, anyag, közbeszerzés
from: 7b960222
---

## Mit fog csinálni

Az IDS (Information Delivery Specification, egy buildingSMART-szabvány) az a lista, amelynek egy IFC-nek tartalmaznia kell: mely osztályok, mely tulajdonságok milyen értékekkel, osztályozások, anyagok, és hogy hol kell lenniük az elemeknek. A megrendelők és a közbeszerzések a munkával együtt küldik. A BimCraft ezzel ellenőrzi a megnyitott IFC-modellt, és felsorolja az összes olyan elemet, amely nem felel meg.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. Nyissa meg a bal oldali panelen, a {{ui:Modellellenőrzések}} alatt a {{ui:Ellenőrzés IDS ellen}} elemet, vagy válassza a menüből (a menüstílustól függően) a {{ui:Ellenőrzés IDS ellen…}} elemet.
3. Kattintson a(z) {{ui:.ids fájl betöltése…}} gombra, és válassza ki a fájlt. Semmi sem töltődik fel.
4. Olvassa el az eredményt: minden előírásnál látja a {{ui:Megfelel}} vagy a {{ui:Nem felel meg}} jelölést, és azt, hogy hány elemre vonatkozik.
5. Nyissa meg a Problémákat ({{key:Ctrl+Shift+M}}), és kattintson egy hibára: az elem kijelölődik, és a nézet ránagyít.

## Amit látni fog

- Elemenként és követelményenként egy figyelmeztetés, amelyet az elem nem teljesít: az előírás neve, az, amit az IDS kér, és az, amit az elem tartalmaz.
- Ha egy szükséges előírásnak a modellben nincs megfelelője, az önálló figyelmeztetés.
- Az ellenőrzési jelentés (a Problémákban) az IDS-sel kezdődik: a címével, verziójával, szerzőjével, és minden előírás esetén a vonatkozó, a megfelelő és a nem megfelelő elemek darabszámával.

## Tudnivalók

- Az IFC csak az IDS-re mutató hivatkozást tartalmazza (nevét, címét, verzióját és egy hash-értéket), magát az IDS-t nem: az ügyfél IDS-e bizalmas lehet, az IFC pedig más személyekhez kerül. Az IDS ebben a böngészőben marad a modell mellett, ezért amikor a mentett IFC-t újra megnyitja itt, ismét ellenőrzésre kerül. Az IDS betöltése vagy elfelejtése egy visszavonható lépés.
- Ha másik számítógépen vagy böngészőben nyitják meg, a Problémák jelzi, hogy az IDS nem található: az újraellenőrzéshez töltse be újra.
- Az IDS-t az IFC-vel együtt történő elküldéshez kapcsolja be a Beállításokban, a BimCraft lapon a {{ui:Az IDS megőrzése az IFC-ben}} beállítást, még a betöltés előtt.
- Minden szerkesztést, visszavonást és ismétlést kis idő múlva újra ellenőriz.
- Az értékeket az IDS módján hasonlítja össze: a szöveg pontosan (a kis- és nagybetű számít), a számok SI-egységekben, kis tűréssel (a hosszúságok méterben, ezért a milliméteres modellt előbb át kell alakítani).
- Egy másik IFC-verzióra írt előírást (például IFC2X3-at, ha a modell IFC4) is ellenőrzi; az eredmény ezt jelzi.
- Ha az IDS-fájlban olyan hibák vannak, amelyeket egy IDS-auditálás jelezne, a párbeszédpanel felsorolja őket; a bennük lévő előírások nem felelnek meg.
- Az ellenőrzési hibát indokkal elfogadhatja, mint bármely más problémát. Az elfogadás addig marad érvényben, amíg az elem értékei változatlanok.

- Az IDS-ben a minták teljes értékként értelmeződnek. Az elején álló `^` és a végén álló `$` szintén „a teljes érték”-et jelenti, ahogy a legtöbb IDS-fájl szánja.

## Következő

- [Modell ellenőrzése gyakori problémákra](topic:model-checks)
- [Fal vagy ajtó módosítása](topic:change-a-wall-or-door)
